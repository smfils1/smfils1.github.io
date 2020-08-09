# Portfolio

[Live Site](https://smfils1-portfolio.herokuapp.com)

## Technologies

- [Node & Express](http://expressjs.com/) for the server
- [React](https://reactjs.org/docs/create-a-new-react-app.html) for the frontend
- [Redux](https://react-redux.js.org/) for frontend application state
- [Material UI](https://material-ui.com/) for UI

## Running Locally

### Configuring environment variables

- Rename client's [.env-sample](https://github.com/smfils1/portfolio/blob/master/client/sample.env) to `.env`
- Rename server's [.env-sample](https://github.com/smfils1/portfolio/blob/master/server/sample.env) to `.env`
- Note `content.json` contains the configurable content this template

### Starting the App

- `npm install` to install all dependencies
- `npm run dev` to run both client & server in development
- `cd server && npm run server` to run only server
- `cd client && npm start` to run only client
