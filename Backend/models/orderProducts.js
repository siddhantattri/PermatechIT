var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create schema for Customer

let OrderProductSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    orderId:{
        type:String,
        required: [true,"Order Id is Required"]
    },
    productId:{
        type:String,
        required: [true,"product Id is Required"]
    },
    qty:{
        type:Number,
        default:0
    },
    date:{
        type:Date
    }

});

let OrderProducts = mongoose.model('orderProducts',OrderProductSchema);
module.exports = OrderProducts;