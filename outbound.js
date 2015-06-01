var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

var toNumber = '+16509994444', // the number for the phone in your pocket
    fromNumber = '+16503332222', // your Twilio number
    bodyMessage = 'Node Knockout! Woo!'; // The body of the text message

client.sendMessage({
    to: toNumber,
    from: fromNumber,
    body: bodyMessage
}, function(error, message) {
    // This callback is executed when the request completes
    if (error) {
        console.error('Dagnabit.  We couldn\'t send the message');
        console.log(error);
    } else {
        console.log('Message sent! Message id: '+message.sid);
    }
});
