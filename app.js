const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');
const helpers = require('./helpers');

// db connection modules
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// create our Express app
const app = express();

// views directory and view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// serve static files from the public folder. Anything in public/ will just be served up as the file it is, withouth the public/ prefix
app.use(express.static(path.join(__dirname, 'public')));

// transform raw http requests into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
app.use(
  session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

// The flash middleware let's us use req.flash('error', 'Shit!'), which will then pass that message to the next page the user requests
app.use(flash());

// pass variables to all views and requests
app.use((req, res, next) => {
  res.locals.h = helpers;
  // res.locals.flashes = req.flash();
  // res.locals.user = req.user || null;
  // res.locals.currentPath = req.path;
  next();
});

// // after the above middleware, handle the routes
app.use('/', routes);

// if a route doesn't exist, forward to error handler for 404
app.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

// done! we export it so we can start the site in start.js
module.exports = app;
