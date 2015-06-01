var Hapi = require('hapi');
var Twilio = require('twilio');

var server = new Hapi.Server();
server.connection({
  port: process.env.PORT || 3000
});
server.route({
  method: 'POST',
  path: '/inbound',
  handler: function (request, reply) {
    var resp = new Twilio.TwimlResponse();
    resp.say('I\'m sorry I can\'t do that, Dave!');
    reply(resp.toString()).type('text/xml');
  }
});
server.route({
  method: 'GET',
  path: '/smsinbound',
  handler: function (request, reply) {
    var resp = new Twilio.TwimlResponse();
    resp.message('Back atcha');
    reply(resp.toString()).type('text/xml');
  }
});
server.start(function () {
  console.info('Server started at %s', server.info.uri);
});
