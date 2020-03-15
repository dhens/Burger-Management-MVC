const mysql = require('mysql');

if (process.eventNames.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'toor',
        database: 'burgers_db'
    });    

connection.connect( (err) => {
    if (err) {
        console.error(`Error connecting: ${err.stack}`);
        return
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;

