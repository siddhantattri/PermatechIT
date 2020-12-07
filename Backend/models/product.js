var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create schema for Customer

let ProductSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    }

});

let Product = mongoose.model('products',ProductSchema);
module.exports = Product;