var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'https://demo.phpmyadmin.net/master-config/index.php?route=/database/structure&server=2&db=nodeapp',
  user: 'root',
  password: '',
  database: 'nodeapp'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected!');
});

module.exports = connection;
