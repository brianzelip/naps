const mongoose = require('mongoose');
const Nap = mongoose.model('Nap');

exports.landingPage = (req, res) => {
  res.render('index');
};

exports.addNapPOST = (req, res) => {
  res.send(req.body);
};
