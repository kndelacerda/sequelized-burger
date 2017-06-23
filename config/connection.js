// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

/**
 * If JAWSDB_URL is available (Heroku), use it.
 * Otherwise use local mysql configuration.
 */
if (process.env.JAWSDB_URL)
    connection = mysql.createConnection(process.env.JAWSDB_URL);
else {
    var keys = require('./keys');

    connection = mysql.createConnection({
        host: keys.db.host,
        user: keys.db.user,
        password: keys.db.password,
        database: keys.db.database
    });
}

// Connects to the DB
connection.connect(function(err) {
    if (err) {
        console.error('Connection error: ' + err.stack);
        return;
    }
    console.log('Connection threadId: ' + connection.threadId);
});

module.exports = connection;