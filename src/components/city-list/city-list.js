import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import citiesData from '../../data/arkera.csv';

const filterUnwantedCharacters = string => string.replace(/[^#a-zA-Z0-9+]/, ' ');

// filter citiesData headers to avoid next line characters or script injecting
const filteredCitiesData = [...citiesData].map(objectElement => {
  const filteredObjectElement = {};
  Object.keys(objectElement).forEach(
    key => (filteredObjectElement[filterUnwantedCharacters(key)] = objectElement[key])
  );
  return filteredObjectElement;
});

// parseInteger helper for sorting purposes
const parseInteger = string => (typeof string === 'string' ? parseInt(string.replace(',', '')) : string);

const defaultSortMethod = (a, b, desc) => {
  // a little fix to allow sorting numbers correctly
  if (!isNaN(parseInteger(a)) && !isNaN(parseInteger(b))) {
    a = parseInteger(a);
    b = parseInteger(b);
  }

  // The rest below is copied from the original code.
  a = a === null || a === undefined ? '' : a;
  b = b === null || b === undefined ? '' : b;
  a = typeof a === 'string' ? a.toLowerCase() : a;
  b = typeof b === 'string' ? b.toLowerCase() : b;
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

export const CityList = ({ sortColumn = '#' }) => {
  const columns = [];
  Object.keys(filteredCitiesData[0]).forEach(key =>
    columns.push({
      Header: key,
      accessor: key,
    })
  );

  return (
    <ReactTable
      data={filteredCitiesData}
      columns={columns}
      defaultSortMethod={defaultSortMethod}
      defaultSorted={sortColumn && [{ id: sortColumn, desc: false }]}
    />
  );
};
