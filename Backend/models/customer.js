var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create schema for Customer

let CustomerSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    }
});

let Customer = mongoose.model('customer',CustomerSchema);
module.exports = Customer;