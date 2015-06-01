demo-twilio-voice
=======================

Description
-----------------------
Sample Twilio app that demonstrates voice feature.

Installation
-----------------------

Create a Twilio account.
This demo app will work with a starter 'sample' account.  To do anything more heavy-duty, you'll need to pay $$.

Your Twilio account will give you a:
 - TWILIO_ACCOUNT_SID and
 - TWILIO_AUTH_TOKEN
which you will need to export locally as environment variables.


Download and install ngrok: https://ngrok.com/

.. code:: bash


  $ git clone https://github.com/rpappalax/demo-hapi-twilio
  $ cd demo-hapi-twilio

  # in one terminal window:
  $ npm start

  # in another terminal window:
  $ ngrok 3000


Follow the instructions in link below (see Reference).
Essentially you want to copy the local URL that ngrok outputs and pass that along 
to Twilio so it will point back to the app on your local machine.

Reference
=======================
http://blog.nodeknockout.com/post/66323669071/send-text-messages-and-make-phone-calls-with-node
