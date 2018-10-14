import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.styles';
import { CityList } from './components/city-list/city-list';

class App extends Component {
  render() {
    return (
      <div style={styles.appContainer}>
        <h1>Arkera test</h1>
        <Router>
          <div>
            <Route
              exact
              path="/*"
              render={props => <CityList sortColumn={props.match.params[0] || '#'} {...props} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
