#Arkera test

## running the app
```
git clone https://github.com/marcinkrysiak1979/arkera-test-cities.git
cd akera-test-cities
npm i && npm start
```

## project description

- I decided to use React framework to display the csv data. The test is only about displaying the data and this is what React is for - the "V" in MVC

- The app boilerplate is created with create-react-app. This was the quickest solution for this case

- I installed "prettier" to clean the code automatically and allow me to focus on the task only

- The exercise description doesn't precise if the app should talk directly to google drive to access the data and because of the time limit I understood I should attach the csv file to the codebase and access it locally

- To access the csv data I decided to extend webpack configuration and add csv-loader. This solution is much quicker than parsing the csv file from the react app on runtime. I had to override webpack config with react-app-rewired lib as create-react-app doesn't expose webpack config files and I didn't want to eject the app

- I found that I have to filter out the imported csv to remove \n character

- I decided to display the data with "react-table" library. Looks like everything I need is built in

- At the end I only needed to import react router and configure it to pass sorting column param to the component.

- 2 minutes left to the deadline. I had only little time to write one unit test. I would probably spend more time on it if I have it.

- There was no time to make the UI visually more attractive but I understand it was not the point of the test.