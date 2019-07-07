var Users = require('../../models/models').Users;
var response = require('../responses/response').structure;

exports.auth = function (req, res, next) {
    if ('OPTIONS' == req.method) {
      return res.sendStatus(200);
    }

    var result = response;
    var query;
    
    console.log(req.body.cookies, req.headers('username'), req.headers['username']);
    if ((req.url.indexOf('/shop/register') > -1) || (req.url.indexOf('/shop/product') > -1)){
        next();
    } else if ((req.url.indexOf('/admin') > -1) && req.body.username) {
        if(req.body.cookies) {
            var acookie = req.body.cookies._a;
            query = {'login.acookie': acookie}
        } else if (req.body.password) {
            query = {username: req.body.username, password: req.body.password}
        }
    } else if ((req.url.indexOf('/shop') > -1) && req.body.username) {
        if(req.body.cookies) {
            var ucookie = req.body.cookies._u;
            query = {'login.ucookie': ucookie}
        } else if (req.body.password) {
            query = {username: req.body.username, password: req.body.password}
        }
    } else {
        return res.status(403).json(result.auth);
    }
    
        Users.find(query, function (err, data) {
            if (err) return res.status(401).json(result.auth);
            if (data.length === 0) return res.status(401).json(result.auth);
            if (data.length > 1) return res.status(400).json(result.auth);
            if (data.length === 1) {
                req.usertype = data[0].usertype;
                next();
            };
        });
    
};

exports.commonResponseHeaders = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'cookie, username, password, credentials, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    // Below value set to true is unsafe - use with only HTTPS preferably
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}

exports.error = function (req, res, next) {
    var result = response;
    res.status(405).json(result.error);
};