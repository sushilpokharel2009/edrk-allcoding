var Orders = require('../../models/models').Orders;
var Cart = require('../../models/models').Cart;
var response = require('../responses/response').structure;
var Users = require('../../models/models').Users;

exports.getOrders = function (req, res, next) {
    var result = response;
    
    Orders.find({}, function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });
};

exports.getOrder = function (req, res, next) {
    var result = response;
    if (req.usertype && req.usertype === 'admin'){
        Orders.find({_id: req.params.id}, function (err, data) {
            if (err) return res.status(400).json(result.error);
            if(data.length !== 0) {
                result.success.result = data[0];
                return res.status(200).json(result.success);
            }else {
                return res.status(400).json(result.error);
            }
        });
    } else {
        return res.status(401).json(result.auth);
    }
};

exports.createOrder = function (req, res, next) {
    var result = response;
    if (req.header('username')) {
        var createData = {};
        Cart.find({ username: req.header('username') }, '_id username productid name number price currency subtotal', function (err, data) {
            if (err) return res.status(401).json(result.error);
            if (data.length > 0) {
                let products = [], product, subtotal = 0, tax = 0, total = 0;
                for(let i=0; i < data.length; i++){
                    product = {
                        _id: data[i]._id,
                        productid: data[i].productid, 
                        name: data[i].name, 
                        number: data[i].number, 
                        price: data[i].price, 
                        currency: data[i].currency,
                        subtotal: data[i].subtotal
                    }
                    products.push(product);
                    subtotal = subtotal + data[i].subtotal;
                    tax = tax + (data[i].subtotal * 5/100);
                    total = total + tax + subtotal;
                }
                createData = {
                    username: req.header('username'),
                    products: products,
                    subtotal: subtotal,
                    tax: tax,
                    total: total
                }
                Orders.create(createData, function (errr, datar){
                    if(errr) res.status(402).json(result.error);
                    result.success.result = data;
                    Cart.remove({username: req.header('username')}, function (errrr, datarr) {
                        if(errrr) {
                            result.success.message = result.success.message + ' but there was an error deleting cart items';
                            return res.status(200).json(result.success);
                        };
                        return res.status(200).json(result.success);
                    });
                })
            } else {
                return res.status(403).json(result.error);
            }
        });
    } else {
        return res.status(405).json(result.error);
    }
};

exports.editOrder = function (req, res, next) {
    var result = response;
     if(req.body.cookies) {
        var acookie = req.body.cookies._a;
        query = {'login.acookie': acookie}
    } else {
        query = {username: req.body.username, password: req.body.password}
    }
    Users.find(query, 'username usertype enabled', function (err, data) {
        if (err || data == undefined) return res.status(401).json(result.auth);
        if (data.length === 0) return res.status(401).json(result.auth);
        if (data.length > 1) return res.status(400).json(result.auth);
        if (data.length === 1) {
        var setData = {};
        if (req.body.cancelled != undefined || req.body.cancelled != null) { setData.cancelled = req.body.cancelled } 
        else { return res.status(400).json(result.error); }
        Orders.update({_id: req.params.id}, {$set: setData}, function (err, data) {
            if (err) return res.status(400).json(result.error);
            result.success.result = data;
            return res.status(200).json(result.success);
        });
    }
    })
};

exports.deleteOrder = function (req, res, next) {
    var result = response;
    if(req.body.cookies) {
        var acookie = req.body.cookies._a;
        query = {'login.acookie': acookie}
    } else {
        query = {username: req.body.username, password: req.body.password}
    }
    Users.find(query, 'username usertype enabled', function (err, data) {
        if (err || data == undefined) return res.status(401).json(result.auth);
        if (data.length === 0) return res.status(401).json(result.auth);
        if (data.length > 1) return res.status(400).json(result.auth);
        if (data.length === 1) {
        Orders.remove({username: req.body.username, _id: req.params.id}, function (err, data) {
            if (err) return res.status(400).json(result.error);
            result.success.result = data;
            return res.status(200).json(result.success);
        });
    }
    })
};
