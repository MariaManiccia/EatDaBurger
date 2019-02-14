// grabbins mysql
const mysql = require("mysql");

// setting up the connection
let connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection( {
		host: 'localhost',
		user: 'root',
		password: 'Billyjoel1',
		database: 'burgers_db'
	});
};

// communicate connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;