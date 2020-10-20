const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'deliveryapp'

});

const app = express();

app.get('/complaint', function (req, res) {
//app.use(bodyParser.json({type:'application/json'}))
//app.use(bodyParser.urlencoded({extended:true}))

    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM complaint', function (error, results, fields) {
      if (error) throw error;

      res.send(results)
    });
  });
});

app.listen(3306, () => {
 console.log('Go to http://localhost:3306/complaint');
});
