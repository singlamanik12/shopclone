var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'mydatabase.ci1zqmbyhspo.ap-south-1.rds.amazonaws.com',
    user     : 'anshul',
    password : 'anshul1121',
    database : 'mydatabase'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
