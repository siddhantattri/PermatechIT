var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create schema for Order

let OrderSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    customerId:{
        type:String,
        required: [true,"Customer Id is Required"]
    },
    status:{
        type:String,
        default:"Processing"
    }

});

let Order = mongoose.model('order',OrderSchema);
module.exports = Order;