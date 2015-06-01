var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded());

greeting = "<Response><Say>I'm sorry I can't do that, Dave!</Say></Response>";
app.post('/inbound', function(request, response) {
    response.type('text/xml');
    response.send('<Response><Say>Hey Peter! You are too cool.</Say></Response>');
});
app.get('/smsinbound', function(request, response) {
    console.log(request.query.Body);
    response.type('text/xml');
    response.send('<Response><Message>Back atcha</Message></Response>');

});

app.listen(3000);
