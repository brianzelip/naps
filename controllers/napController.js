const mongoose = require('mongoose');
const Nap = mongoose.model('Nap');

exports.landingPage = (req, res) => {
  res.render('editNap');
};

exports.addNapPOST = async (req, res) => {
  const nap = new Nap(req.body);
  await nap.save();
  // res.send(req.body);
  req.flash('success', 'Member saved successfully!');
  res.redirect('/');
};
