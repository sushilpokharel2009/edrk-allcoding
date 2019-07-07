var Cart = require('../../models/models').Cart;
var response = require('../responses/response').structure;

exports.getItems = function (req, res, next) {
    var result = response;
    Cart.find({ username: req.header('username') }, '_id username productid name number price currency subtotal', function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });
};

exports.createItem = function (req, res, next) {
    var result = response;
    var createData = {};

    if (req.header('username') && req.body.productid && req.body.name && req.body.number && req.body.price && req.body.currency && req.body.subtotal) {
        createData.username = req.header('username');
        createData.productid = req.body.productid;
        createData.name = req.body.name;
        createData.number = req.body.number;
        createData.price = req.body.price;
        createData.currency = req.body.currency;
        createData.subtotal = req.body.subtotal;
        Cart.create(createData, function (err, data) {
            if (err) return res.status(400).json(result.error);
            result.success.result = data;
            return res.status(200).json(result.success);
        });
    }
};

exports.editItem = function (req, res, next) {
    var result = response;
    var setData = {};
    if (req.header('username')) { setData.username = req.header('username'); }
    if (req.body.productid) { setData.productid = req.body.productid; }
    if (req.body.name) { setData.name = req.body.name; }
    if (req.body.number) { setData.number = req.body.number; }
    if (req.body.price) { setData.price = req.body.price; }
    if (req.body.currency) { setData.currency = req.body.currency; }
    if (req.body.subtotal) { setData.subtotal = req.body.subtotal; }

    Cart.find({ username: req.header('username'), productid: req.body.productid }, '_id number price subtotal productid', function (errr, datar) {
        if (errr) {
            return res.status(400).json(result.error)
        }
        if (datar.length === 1) {
            let num;
            if ((parseInt(setData.number) + parseInt(datar[0].number)) > 0) {
                num = (parseInt(setData.number) + parseInt(datar[0].number));
                let subtotal = ((parseInt(setData.number) + parseInt(datar[0].number)) * parseInt(setData.price));
                let price = parseInt(setData.price);

                Cart.update({ username: req.header('username'), productid: req.body.productid }, {
                    $set: {
                        number: num,
                        price: price,
                        subtotal: subtotal
                    }
                }, function (err, data) {
                    console.log(err, data);
                    if (err) return res.status(400).json(result.error);

                    if (data.n > 0 || data.nModified > 0) {
                        result.success.result = data;
                        return res.status(200).json(result.success);
                    } else {
                        return res.status(403).json(result.error)
                    }
                });
            } else {
                Cart.remove({ username: req.header('username'), productid: req.body.productid }, function (err, data) {
                    if (err) return res.status(400).json(result.error);
                    if (data.result.n === 0 || data.result.nRemoved === 0) {
                        return res.status(400).json(result.error);
                    } else {
                        result.success.result = data;
                        return res.status(200).json(result.success);
                    }
                });
            }
        } else if (datar.length === 0) {
            Cart.create(setData, function (err, data) {
                if (err) return res.status(400).json(result.error);
                result.success.result = data;
                return res.status(200).json(result.success);
            });
        } else {
            return res.status(500).json(result.error)
        }
    });
};

exports.deleteItem = function (req, res, next) {
    var result = response;
    if (req.params.id === 'all') {
        Cart.remove({ username: req.header('username') }, function (err, data) {
            if (err) return res.status(400).json(result.error);
            if (data.result.n === 0 || data.result.nRemoved === 0) {
                return res.status(400).json(result.error);
            } else {
                result.success.result = data;
                return res.status(200).json(result.success);
            }
        });
    } else if (req.params.id !== undefined || req.params.id !== null) {
        Cart.remove({ username: req.header('username'), _id: req.params.id }, function (err, data) {
            if (err) return res.status(400).json(result.error);
            if (data.result.n === 0 || data.result.nRemoved === 0) {
                return res.status(400).json(result.error);
            }
            else {
                result.success.result = data;
                return res.status(200).json(result.success);
            }
        });
    } else {
        return res.status(400).json(result.error);
    }
};
