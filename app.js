var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser'),
    mysql = require('mysql'),
    ejs = require('ejs');

var app = express();
app.use(bodyParser.urlencoded());

greeting = "<Response><Say>I'm sorry I can't do that, Dave!</Say></Response>";
app.post('/inbound', function(request, response) {
    response.type('text/xml');
    response.send('<Response><Say>Bonjour! Thanks for calling.</Say></Response>');
});

app.listen(3000);
