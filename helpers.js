/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

const moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = obj => JSON.stringify(obj, null, 2);

// Some details about the site
exports.siteName = `Iva nap log`;

exports.duration = function(end, start) {
  const napEnd = moment(end, 'hh:mm A');
  const napStart = moment(start, 'hh:mm A');
  console.log(
    'HELPERS BE HELPING!',
    'napStart: ',
    napStart,
    'napEnd: ',
    napEnd
  );
  return napEnd.diff(napStart, 'minutes');
};
