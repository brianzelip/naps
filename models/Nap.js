const mongoose = require('mongoose');
const h = require('../helpers');

// have to tell mongoose that we're using ES6 async/await
mongoose.Promise = global.Promise;

const napSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: 'A date must be entered!'
    },
    startTime: {
      type: String,
      required: 'A start time must be entered!'
    },
    endTime: {
      type: String,
      required: 'An end time must be entered!'
    },
    duration: Number
  },
  {
    timestamps: true
  }
);

napSchema.pre('save', function(next) {
  this.duration = h.duration(this.endTime, this.startTime, 'number');
  next();
}); // needs to be a long-form function because we need `this`, so arrow func won't do

// napSchema.pre('save', function(next) {
//   if (!this.isModified('nameFirst') && !this.isModified('nameLast')) {
//     next(); // skip it
//     return; // stop this function from running
//     // the above two lines could also be written as:
//     // `return next();`.
//     //
//     // also, `isModified()` is a Mongoose method
//   }
//   this.nameFull = `${this.nameFirst} ${this.nameLast}`;
//   // TODO make this more resilient so slugs are unique
//   next();
// }); // needs to be a long-form function because we need `this`, so arrow func won't do

// napSchema.pre('save', function(next) {
//   if (!this.isModified('nameFirst') && !this.isModified('nameLast')) {
//     next(); // skip it
//     return;
//   }
//   this.slug = slug(`${this.nameFirst} ${this.nameLast}`);
//   // TODO make this more resilient so slugs are unique
//   next();
// }); // needs to be a long-form function because we need `this`, so arrow func won't do

module.exports = mongoose.model('Nap', napSchema);
