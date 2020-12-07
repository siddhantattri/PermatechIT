var express = require('express');
var router = express.Router();
var Customer = require('../models/customer');
var Product = require('../models/product');
var Order = require('../models/order');
var OrderProduct = require('../models/orderProducts');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

//get a list of customers
router.get('/customers', function (req, res, next) {
    console.log("hey bas");
    Customer.find({}).then(el => {
        res.send(el);
    })

});

// get a list of Orders from customer ID
router.get('/customers/orders', function (req, res, next) {
    console.log("Get Orders");
    Order.find({customerId: req.query.customerId}).then(el =>
        res.send(el));
});

// GEt a list of products from order ID
router.get('/customers/orders/products', function (req, res, next) {
    console.log("get list of products");
    OrderProduct.find({orderId: req.query.orderId}).then(el => res.send(el))

});
// Update product qty
router.post('/customers/orders/products/updateQty', function (req, res, next) {
    console.log("Update product Qty");
    OrderProduct.findByIdAndUpdate(req.body.id,{qty:req.body.qty}).then(el=>res.redirect(`/customers/orders/products?orderId=${el.orderId}`));

});
// Update order status
router.post('/customers/orders/updateStatus', function (req, res, next) {
    console.log("Update order status");
    Order.findByIdAndUpdate(req.body.id,{status:"Done"}).then(el=>res.end());

});

// Add customers
router.post('/customers/register', function (req, res, next) {

    Customer.create(req.body).then(el => {
        res.send(el);
    }).catch(e => res.send(e.message));

});

// Add products to the list of products
router.post('/products/add', function (req, res, next) {
    console.log("Order Products");
    Product.create(req.body).then(el => {
        res.send(el);
    }).catch(e => res.send(e));
});

// Order a list of products
router.post('/customers/order', function (req, res, next) {

    Order.create(req.body["order"]).then(el => {

        req.body["products"].forEach(product => {

            OrderProduct.create({...product, orderId: el._id});
        });
        res.send({"Message": "Order Successfully Placed"})
    }).catch(e => res.send(e));


});
module.exports = router;
