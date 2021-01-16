const mongoose = require('mongoose');

// Make sure we are running node 7.6+
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
  console.log(
    "🚫 🚫 🚫 You're running an older version of node that doesn't support Async/Await! Please run node 7.6 or greater. 👌\n "
  );
  process.exit();
}

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle any bad connections
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
  })
  .then(
    () => {
      console.log('DB CONNECTION SUCCESS!');
    },
    (err) => {
      console.error(
        `DATABASE CONNECTION ERROR 🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`
      );
    }
  );

// import all of our models (data schemas)
// this is also known as a "singleton" - where express allows you to just require it once at the beginning, and all subsequent files get it from here.
require('./models/Nap');

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 2600);
const server = app.listen(app.get('port'), () => {
  console.log(`Express is serving on PORT ${server.address().port}`);
});
