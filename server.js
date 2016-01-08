var express = require('express');
var langParser = require('accept-language');

var app = express();
app.set('json spaces', 0);

app.get('/', function(req, res) {

    var resData = {};
    var langObj = (langParser.parse(req.headers['accept-language']))[0];
    var regEx = /\(([^)]+)\)/;

    resData.ipaddress = req.headers['x-forwarded-for'];
    resData.language = langObj.value;
    resData.software = req.headers['user-agent'].split(regEx)[1];


    res.send(resData);
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");
