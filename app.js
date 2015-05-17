var Hapi = require('hapi');
var Twilio = require('twilio');

var server = new Hapi.Server();
server.connection({
  port: process.env.PORT || 3000
});
server.route({
  method: 'post',
  path: '/inbound',
  handler: function (request, reply) {
    var resp = new Twilio.TwimlResponse();
    resp.say('Bonjour! Thanks for calling.');
    reply(resp.toString()).type('text/xml');
  }
});
server.start(function () {
  console.info('Server started at %s', server.info.uri);
});
