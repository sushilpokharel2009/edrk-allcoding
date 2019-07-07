var express = require('express');
var app = express();
var users = require('./controllers/users/users');
var products = require('./controllers/products/products');
var orders = require('./controllers/orders/orders');
var cart = require('./controllers/cart/cart');
var middlewares = require('./controllers/middlewares/middlewares');
var log4js = require('log4js');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');

// Get more details of log4js from https://www.npmjs.com/package/log4js
log4js.configure({
  appenders: [
    {
        type: 'dateFile',
        layout: { type: 'pattern', pattern: '[%d{ABSOLUTE}] [%p] [%z] [%h] [%c] [%m]' },
        filename: __dirname + '/logs/sitelogs.log',
        pattern: '.yyyy-MM-dd-hh',
        compress: false,
        numBackups: 10,
        category: 'logger'
    }
  ]
});


// Setting logger
var log = log4js.getLogger('logger');
log.setLevel('ALL');
// Assigning logger as middleware for express
app.use(log4js.connectLogger(log));

// using body-parser and cookieparser middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Use cookie parser before authentication
app.use(cookieParser());

// Common response headers
app.use(middlewares.commonResponseHeaders);

// Authentication Middleware
//app.use(middlewares.auth);

// NOTE: Following are just sample API not to be used for Production (Some insecure code exists)
// Some APIs have not been used and are partial just for the api. 
// You can delete or make it usable to working on improvement area of the APIs

// Authentication REST APIs 
app.route('/shop/register').post(users.registerUser);
app.route('/shop/login').post(users.loginUser);
app.route('/shop/logout').post(users.loginOutUser);
app.route('/admin/login').post(users.loginAdmin);
app.route('/admin/logout').post(users.loginOutAdmin);

// SHOP Products section REST APIs
app.route('/shop/products').get(products.getProducts);
app.route('/admin/products').post(products.createProduct);
app.route('/shop/product/:id').get(products.getproduct);
app.route('/admin/product/:id').put(products.editProduct);
app.route('/admin/product/:id').delete(products.deleteProduct);

// SHOP Cart section REST APIs
app.route('/shop/cart/items').get(cart.getItems);
app.route('/shop/cart/items').post(cart.editItem);
app.route('/shop/cart/items/:id').delete(cart.deleteItem);

// SHOP Orders section REST APIs
app.route('/admin/orders').get(orders.getOrders);
app.route('/shop/orders').post(orders.createOrder);
app.route('/admin/order/:id').get(orders.getOrder);
app.route('/admin/order/:id').put(orders.editOrder);
app.route('/admin/order/:id').delete(orders.deleteOrder);

// ADMIN Users section REST APIs
app.route('/admin/users').get(users.getUsers);
app.route('/admin/users').post(users.createUser);
app.route('/admin/user/:id').get(users.getUser);
app.route('/admin/user/:id').put(users.editUser);
app.route('/admin/user/:id').delete(users.deleteUser);

app.route('*').get(middlewares.error);

module.exports = app;