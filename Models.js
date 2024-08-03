const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define the user schema
const IpLocationSchema = new Schema({
  ip: {
    type: String,
  },
  location: {
    type: String,
  }
});
const form = new Schema({
 fullname: {
    type: String,
    required: true,
  },
  numberOrEmail: {
    type: String,
    required:true
  },
  description: {
    type:String,
    required:true
  }
});
// Create the model from the schema and export it
const IpL = mongoose.model('ipL', IpLocationSchema);
const User = mongoose.model('formData', form);
module.exports = {
  IpL,
  User
};