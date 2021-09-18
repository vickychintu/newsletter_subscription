const express = require('express')
const app = express()
const nodemailer = require('nodemailer');
var mysql      = require('mysql');
const { json } = require('express');
//var bodyparser = require('body-parser')
var connection = mysql.createConnection({
  host     : 'bio97tstmqxgpqsdau2a-mysql.services.clever-cloud.com',
  user     : 'ukznneawkdzxqtzl',
  password : 'GeeZksJdC5K1SIWsdaFA',
  database : 'bio97tstmqxgpqsdau2a'
});
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Body-parser middleware
//app.use(bodyparser.urlencoded({extended:true}))
//app.use(bodyparser.json())

app.use(express.urlencoded({extended: false}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

let mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'vickykumaroncloud9@gmail.com',
      pass: 'pushpashetty'
  }
});


const port =process.env.PORT || 3000;




app.get('/', (req, res) => {
  res.render('index');
})

app.post('/savedata', (req, res) => {
    var e_mail={email_id: JSON.parse(JSON.stringify(req.body.email))};
    var sql = "INSERT INTO users SET ?";
    //
    //connection.connect();
    connection.query(sql,[e_mail], function (error, results, fields) {
      if (error){
        console.log(error.errno);
    res.render('conform2');

      }
      else{

        let mailDetails = {
          from: 'vickykumaroncloud9@gmail.com',
          to: e_mail.email_id,
          subject: 'Test mail',
          html:'<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Subcription</title> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></head><body> <div class="jumbotron jumbotron-fluid"> <div class="container"> <div class="row"> <div class="col-6"> <img style="width: 100%;height: 100%;" src="https://i.pinimg.com/originals/5f/92/96/5f9296f0364ebfdb00b594fe368768ab.gif" alt=""> </div><div class="col-6"> <h1 class="display-4">Thanks For Subscribing</h1> <p class="lead">No more suspenses get acess to all new content before hand</p></div></div></div></div></body></html>'
      };
        
      mailTransporter.sendMail(mailDetails, function(err, data) {
          if(err) throw err
          else {
              console.log('Email sent successfully');
          }
      });

        console.log('The solution is: ', results);
        res.render('conform',{email_id: e_mail.email_id});

      }
      
     
    });
    
    //connection.end();
    //
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})