var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  contactname: {
    type: String,
    required: true
  },
  contactnum: {
    type: String,
    required: true
  },
  favourite: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Contact', ContactSchema);
