const mongoose = require('mongoose');
const Nap = mongoose.model('Nap');
const time = require('../helpers').time;

exports.newNap = (req, res) => {
  res.render('editNap', { title: 'add new nap' });
};

exports.newNapPOST = async (req, res) => {
  const nap = new Nap(req.body);
  await nap.save();
  // res.send(req.body);
  req.flash(
    'success',
    `A new ${time.napDurationFormatted(
      req.body.startTime,
      req.body.endTime
    )} nap from ${time.napCalendar(req.body.date).toLowerCase()} was saved!`
  );
  res.redirect('/');
};
