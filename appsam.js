
var faker = require('faker');

//var _ =require('underscore');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'wjqr-tw3s-9iTT',
  database : 'Zocket_tech'
});

var fak_mail={email_id: faker.internet.email()};
var sql = "INSERT INTO users SET ?";
connection.connect();

connection.query(sql,[fak_mail], function (error, results, fields) {
  if (error){
  console.log(error.errno);
  }
 console.log('The solution is: ', results,fak_mail);
});

connection.end();
