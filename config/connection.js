const mysql = require('mysql');
const PORT = process.env.PORT;

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: PORT,
        user: 'root',
        password: 'toor',
        database: 'burgers_db'
    });    
}

connection.connect( (err) => {
    if (err) {
        console.error(`Error connecting: ${err.stack}`);
        return
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;

