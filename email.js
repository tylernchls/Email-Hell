var log = require('./email_json');

  var emailHell = (function (){

  var sentEmails = {};

   function emails() {

    for(var i = 0; i < log.emails.length; i++) {
     if(sentEmails.hasOwnProperty(log.emails[i].email)) {   // checks to see if the email address already exists in object
        sentEmails[log.emails[i].email] += 1; // if email address exists already will increment by 1
     } else {
      sentEmails[log.emails[i].email] = 1;  // if that email address doesnt exist will add it in object give count of one
     }

    }
      return sentEmails;
  }

    return {
      emails: emails
    };


  })();

console.log(emailHell.emails());












