/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

const moment = require('moment');
const momentDurationFormatSetup = require('moment-duration-format');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = obj => JSON.stringify(obj, null, 2);

// Some details about the site
exports.siteName = `Iva nap log`;

exports.duration = (end, start, returnType) => {
  // end = moment string
  // start = moment string
  // returnType = 'number' (raw data) || 'string' (formatted)
  const napEnd = moment(end, 'hh:mm A');
  const napStart = moment(start, 'hh:mm A');
  const napLengthAsNumMins = napEnd.diff(napStart, 'minutes');
  const napLengthAsString = moment
    .duration(napEnd.diff(napStart, 'minutes'), 'minutes')
    .format('h[hr] m[min]');

  // console.log(
  //   '\nMOMENT.DURATION().HUMANIZE() =>',
  //   moment
  //     .duration(napEnd.diff(napStart, 'minutes'), 'minutes')
  //     .humanize(false),
  //   '\nMOM.DUR.FOR =>',
  //   moment
  //     .duration(napEnd.diff(napStart, 'minutes'), 'minutes')
  //     .format('h [hrs]'),
  //   '\nLIL TIDBIT =>',
  //   moment
  //     .duration(napEnd.diff(napStart, 'minutes'), 'minutes')
  //     .format('h[h] m[m]')
  // );

  if (returnType === 'number') {
    return napLengthAsNumMins;
  } else if (returnType === 'string') {
    return napLengthAsString;
  }
};
