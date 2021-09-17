const nodemailer = require('nodemailer');
  
  
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vickykumaroncloud9@gmail.com',
        pass: 'pushpashetty'
    }
});
  
let mailDetails = {
    from: 'vickykumaroncloud9@gmail.com',
    to: 'kaarthi1312@gmail.com',
    subject: 'Test mail',
    html:'<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Subcription</title> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></head><body> <div class="jumbotron jumbotron-fluid"> <div class="container"> <div class="row"> <div class="col-6"> <img style="width: 100%;height: 100%;" src="https://i.pinimg.com/originals/5f/92/96/5f9296f0364ebfdb00b594fe368768ab.gif" alt=""> </div><div class="col-6"> <h1 class="display-4">Thanks For Subscribing</h1> <p class="lead">No more suspenses get acess to all new content before hand</p></div></div></div></div></body></html>'
};
  
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) throw err
    else {
        console.log('Email sent successfully');
    }
});