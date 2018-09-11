const mongoose = require('mongoose');
const Nap = mongoose.model('Nap');
const duration = require('../helpers').duration;

exports.newNap = (req, res) => {
  res.render('editNap', { title: 'add new nap' });
};

exports.newNapPOST = async (req, res) => {
  const nap = new Nap(req.body);
  await nap.save();
  // res.send(req.body);
  req.flash(
    'success',
    `The ${duration(
      req.body.endTime,
      req.body.startTime
    )} minute nap saved successfully!`
  );
  res.redirect('/');
};
