var Products = require('../../models/models').Products;
var response = require('../responses/response').structure;

exports.getProducts = function (req, res, next) {
    var result = response;
    Products.find({}, function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });
};

exports.getproduct = function (req, res, next) {
    var result = response;
    Products.find({_id: req.params.id}, function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });
};

exports.createProduct = function (req, res, next) {
    var result = response;
    var createData = {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        currency: req.body.currency,
        summary: req.body.summary,
        details: req.body.details
    }
    Products.create(createData, function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });
};

exports.editProduct = function (req, res, next) {
    var result = response;
    var editData = {};
    if (req.body.name) {editData.name = req.body.name};
    if (req.body.category) {editData.category = req.body.category};
    if (req.body.price) {editData.price = req.body.price};
    if (req.body.currency) {editData.currency = req.body.currency};
    if (req.body.summary) {editData.summary = req.body.summary};
    if (req.body.details) {editData.details = req.body.details};

    Products.update({_id: req.params.id}, {$set: editData}, function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });
};

exports.deleteProduct = function (req, res, next) {
    var result = response;
    Products.remove({_id: req.params.id}, function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });
};

