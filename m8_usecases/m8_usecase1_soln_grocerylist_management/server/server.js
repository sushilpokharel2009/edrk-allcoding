var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var items = require('./routes/items');

var app = express();

var port = 3000;
//View Engine   

//set static folder

app.use('/', express.static('client/src'));
app.use('/node_modules', express.static('node_modules'));

//Body Parser MW

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

app.use('/api', items);


app.listen(port, function()
{
   console.log('Connection Successful using Port:'+port);
});
