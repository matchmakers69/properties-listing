This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project's description

### Using given data

Files were given as a json files so in theory no async call would not be required, however to create a bit more live situation, I have made async calls just mock fetching data from server. Both functions kept in separate folder.

### Functionality

I have decided to use React hooks, contextAPI and HOC.

ContextApi is always a matter of discussion, shall we used or use Redux instead. I am using the the project for demonstration how it can work with useContext hook as well. But as I said, in this specific situation we could pass props everywhere and that would work as well.

Projest has 3 main parts: Home page where all accomodations were grouped into types, after the type was picked, we render chosen group (for example hotels ). We can see each property in details clicking chosen one.

### Extra features

The task includes basic requirements as well as I wanted to expand it little bit so I have made some extras:

1. Pagination
2. Filters
3. Maps
4. React Router
5. Tests

### Filters

Only to demonstrate, we can filter accomodation standars or amount of stars, the given sample data is only an example so I am aware in real life project we could filter better the address details for example.

## Tests

I have written several tests but to testing all component would be too far from the scope as well as there is no point to test every component anyway. I have written few only as an extra and to give an idea how it coul work.

## Things could work better

Pagination: Pagination button click does not make any new async call - page parameter was not given - in real life data structure woul look a bit different. I have added parameters using useHistory but currently browser back button does not work very well.

Map couuld also work better, coorinates given are only for demo usage, no popup, eventually coul be added.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
