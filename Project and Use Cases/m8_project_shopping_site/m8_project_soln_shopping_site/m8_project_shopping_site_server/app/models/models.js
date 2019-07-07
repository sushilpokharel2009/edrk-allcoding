var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/projectshop");

var Schema = mongoose.Schema;

var usersSchema = new Schema({
        username: {type: String, index: {unique: true}},
        password: String,
        usertype: { type: String, default: 'user' },
        enabled: { type: Boolean, default: true },
        created: { type: Date, default: Date.now },
        login: {
            status: { type: Boolean, default: false },
            acookie: { type: String, default: null },
            acreated: { type: Date, default: null },
            ucookie: { type: String, default: null },
            ucreated: { type: Date, default: null }
        }
});

exports.Users = mongoose.model('users', usersSchema);

var productsSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    currency: String,
    summary: String,
    details: String
});

exports.Products = mongoose.model('products', productsSchema);

var ordersSchema = new Schema({
    username: String,
    products: [{
        _id: String,
        productid: String, 
        name: String, 
        number: Number, 
        price: Number, 
        currency: String,
        subtotal: Number
    }],
    subtotal: Number,
    tax: Number,
    total: Number,
    created: { type: Date, default: Date.now },
    paid: { type: Boolean, default: true },
    cancelled: {type: Boolean, default: false}
});

exports.Orders = mongoose.model('orders', ordersSchema);

var cartSchema = new Schema({
    username: String,
    productid: String,
    name: String,
    number: Number,
    price: Number,
    currency: String,
    subtotal: Number
});

exports.Cart = mongoose.model('cart', cartSchema);