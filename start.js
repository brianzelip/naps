// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 2600);
const server = app.listen(app.get('port'), () => {
  console.log(`Express is serving on PORT ${server.address().port}`);
});
