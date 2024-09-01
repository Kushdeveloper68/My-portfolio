const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define the user schema
const ipSchema = new Schema({
  ip:{
    type:String
  }, 
  location:{
  type:String  
  },
  organization:{
    type:String
  },
  postalCode:{
    type:String
  },
  timezone:{
    type:String
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
const IpL = mongoose.model('ipL', ipSchema);
const User = mongoose.model('formData', form);
module.exports = {
  IpL,
  User
};