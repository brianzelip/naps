const mongoose = require('mongoose');
const Nap = mongoose.model('Nap');

exports.newNap = (req, res) => {
  res.render('editNap', { title: 'add new nap' });
};

exports.newNapPOST = async (req, res) => {
  const nap = new Nap(req.body);
  await nap.save();
  // res.send(req.body);
  req.flash('success', 'Member saved successfully!');
  res.redirect('/');
};
