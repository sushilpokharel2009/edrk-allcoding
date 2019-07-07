var express = require('express');
var app = express();
var config = require('./app/config/config').config;
var routes = require('./app/routes');

app.use('/', routes);

app.listen(config.port, config.host, function () {
    console.log('Server started at ' + config.host + ':' + config.port);
});
