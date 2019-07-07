var Users = require('../../models/models').Users;
var response = require('../responses/response').structure;
var auth = require('../middlewares/middlewares');

exports.getUsers = function (req, res, next) {
    var result = response;
    Users.find({}, '_id username usertype enabled created', function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });
};

exports.getUser = function (req, res, next) {
    var result = response;
    if (req.usertype && req.usertype === 'admin'){
        Users.find({username: req.params.id}, function (err, data) {
            if (err) return res.status(400).json(result.error);
            var resData = {
                username: data[0].username,
                usertype: data[0].usertype,
                enabled: data[0].enabled
            }
            result.success.result = resData;
            return res.status(200).json(result.success);
        });
    } else {
        return res.status(401).json(result.auth);
    }
};

exports.createUser = function (req, res, next) {
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
            var createData = {
            username: req.body._username,
            password: req.body.password
        }
        if (req.body.usertype) { createData.usertype = req.body.usertype }
        if (req.body.enabled != undefined) { createData.enabled = req.body.enabled }
        Users.create(createData, function (errr, datar) {
            if (errr) return res.status(400).json(result.error);
            var resData = {
                _id: datar._id,
                username: datar.username,
                usertype: datar.usertype,
                created: datar.created,
                enabled: datar.enabled
            };
            result.success.result = resData;
            return res.status(200).json(result.success);
        });
        }
    })
        
    
};

exports.editUser = function (req, res, next) {
    var result = response;
    var editData = {};
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
            if (req.body._username) {editData.username = req.body._username}
            if (req.body.password) {editData.password = req.body.password}
            if (req.body.usertype) {editData.usertype = req.body.usertype}
            if (req.body.enabled != undefined) {editData.enabled = req.body.enabled}
            Users.update({_id: req.params.id}, {$set: editData}, function (errr, datar) {
            if (errr) return res.status(400).json(result.error);
            
            result.success.result = datar;
            return res.status(200).json(result.success);
        })
        }
    });
    
};

exports.deleteUser = function (req, res, next) {
    var result = response;
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
            Users.remove({_id: req.params.id}, function (errr, datar) {
                if (errr) return res.status(400).json(result.error);
                if(datar.result.n > 0 || datar.result.nRemoved > 0){
                    result.success.result = datar;
                    return res.status(200).json(result.success);
                } else {
                    return res.status(400).json(result.error)
                }
            });
        }
    })
        
    
};

exports.loginUser = function (req, res, next) {
    var result = response;
    var query;
    console.log('cookie', req.body.cookie, req.body)
    if(req.body.cookies) {
        var ucookie = req.body.cookies._u;
        query = {'login.ucookie': ucookie}
    } else {
        query = {username: req.body.username, password: req.body.password}
    }

    Users.find(query, 'username usertype enabled', function (err, data) {
        if (err || data == undefined) return res.status(401).json(result.auth);
        if (data.length === 0) return res.status(401).json(result.auth);
        if (data.length > 1) return res.status(400).json(result.auth);
        if (data.length === 1) {
            if (data[0].enabled === true && (data[0].usertype === 'user' || data[0].usertype === 'admin')){
                var resData = {
                    username: data[0].username,
                    usertype: data[0].usertype,
                    enabled: data[0].enabled
                };
                result.success.result = resData;
                if (!ucookie) {
                    var randomNumber = Math.random().toString();
                    Users.update(query, {$set:{login:{ucookie: randomNumber, ucreated: Date.now()}}}, function(errup, dataup){
                        if (errup  || dataup.n == 0 || data.nModified == 0) return res.status(401).json(result.auth);
                        var d = new Date((new Date().getTime() + 60000));
                        res.cookie('_u', randomNumber, { maxAge: 6000000, expires: d, httpOnly: true });
                        result.success.cookie = { '_u': randomNumber, maxAge: 6000000, expires: d, httpOnly: true }
                        return res.status(200).json(result.success);
                    });
                } else {
                    return res.status(200).json(result.success);
                }
            } else {
                return res.status(401).json(result.auth);
            }
        }
    });
};

exports.loginOutUser = function (req, res, next) {
    var result = response;
    var query;
    console.log('cookie', req.body.cookie, req.body)
    if(req.body.cookies) {
        var ucookie = req.body.cookies._u;
        query = {'login.ucookie': ucookie}
    } else {

    }

    Users.find(query, 'username usertype enabled', function (err, data) {
        if (err || data == undefined) return res.status(401).json(result.auth);
        if (data.length === 0) return res.status(401).json(result.auth);
        if (data.length > 1) return res.status(400).json(result.auth);
        if (data.length === 1) {
            Users.update(query, {$set:{login: { ucookie: null, ucreated: Date.now()}}}, function(errup, dataup){
                if (errup || dataup.n == 0 || data.nModified == 0) return res.status(401).json(result.auth);
                return res.status(200).json(result.success);
            });
        }
    });
};

exports.loginAdmin = function (req, res, next) {
    var result = response;
    var query;
    console.log('cookie', req.body.cookie, req.body)
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
            if (data[0].enabled === true && (data[0].usertype === 'admin')){
                var resData = {
                    username: data[0].username,
                    usertype: data[0].usertype,
                    enabled: data[0].enabled
                };
                result.success.result = resData;
                if (!acookie) {
                    var randomNumber = Math.random().toString();
                    Users.update(query, {$set:{login:{acookie: randomNumber, acreated: Date.now()}}}, function(errup, dataup){
                        if (errup  || dataup.n == 0 || data.nModified == 0) return res.status(401).json(result.auth);
                        var d = new Date((new Date().getTime() + 60000));
                        res.cookie('_a', randomNumber, { maxAge: 6000000, expires: d, httpOnly: true });
                        result.success.cookie = { '_a': randomNumber, maxAge: 6000000, expires: d, httpOnly: true }
                        return res.status(200).json(result.success);
                    });
                } else {
                    return res.status(200).json(result.success);
                }
            } else {
                return res.status(401).json(result.auth);
            }
        }
    });
};

exports.loginOutAdmin = function (req, res, next) {
    var result = response;
    var query;
    console.log('cookie', req.body.cookie, req.body)
    if(req.body.cookies) {
        var acookie = req.body.cookies._a;
        query = {'login.acookie': acookie}
    } else {

    }

    Users.find(query, 'username usertype enabled', function (err, data) {
        if (err || data == undefined) return res.status(401).json(result.auth);
        if (data.length === 0) return res.status(401).json(result.auth);
        if (data.length > 1) return res.status(400).json(result.auth);
        if (data.length === 1) {
            Users.update(query, {$set:{login: { acookie: null, acreated: Date.now()}}}, function(errup, dataup){
                if (errup || dataup.n == 0 || data.nModified == 0) return res.status(401).json(result.auth);
                return res.status(200).json(result.success);
            });
        }
    });
};

exports.registerUser = function (req, res, next) {
    var result = response;
    var result = response;
    var createData = {
        username: req.body.username,
        password: req.body.password
    }
    
    Users.create(createData, function (err, data) {
        if (err) return res.status(400).json(result.error);
        var resData = {
            username: data.username,
            usertype: data.usertype,
            enabled: data.enabled
        };
        result.success.result = resData;
        return res.status(200).json(result.success);
    });
};

