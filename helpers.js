/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

const moment = require('moment');
const momentDurationFormatSetup = require('moment-duration-format');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = obj => JSON.stringify(obj, null, 2);

// Some details about the site
exports.siteName = `Iva nap log`;

exports.time = {
  napDuration(napStart, napEnd) {
    // returns a number
    // used in model

    const s = moment(napStart, 'hh:mm A');
    const e = moment(napEnd, 'hh:mm A');
    const napLengthAsNumMins = e.diff(s, 'minutes');

    return napLengthAsNumMins;
  },
  napDurationFormatted(napStart, napEnd) {
    // returns a formatted string
    // used in controller

    const s = moment(napStart, 'hh:mm A');
    const e = moment(napEnd, 'hh:mm A');
    const napLengthAsString = moment
      .duration(e.diff(s, 'minutes'), 'minutes')
      .format('h[hr] m[min]', { trim: 'small' });

    return napLengthAsString;
  },
  napCalendar(date) {
    // returns a formatted string
    // used in controller
    // aka napDateHumanized()
    // this humanized formatting is so named because moment calls it that, https://momentjs.com/docs/#/displaying/calendar-time/
    const napDateRelativeToToday = moment(date, 'YYYY-MM-DD').calendar(null, {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'YYYY-MM-DD'
    });

    return napDateRelativeToToday;
  }
};
