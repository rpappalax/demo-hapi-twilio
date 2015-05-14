var client = require('twilio')('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');

var toNumber = '+16505757343', // the number for the phone in your pocket
    fromNumber = '+6502650808', // your Twilio number
    bodyMessage = 'Node Knockout! Woo!'; // The body of the text message

client.sendMessage({
    to:'+16505757343', // the number for the phone in your pocket
    from: '+6502650808', // your Twilio number
    body:'Node Knockout! Woo!' // The body of the text message
}, function(error, message) {
    // This callback is executed when the request completes
    if (error) {
        console.error('Dagnabit.  We couldn\'t send the message');
    } else {
        console.log('Message sent! Message id: '+message.sid);
    }
});
