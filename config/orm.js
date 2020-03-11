// import mysql connection
const connection = require('../config/connection');

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
const printQuestionMarks = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    // Return s a string representtion of the array - comma separated
    return arr.toString();
}

const orm = {
    all: (tableInput, callback) => {
        const queryString = `select * from ${tableInput};`
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            callback(result);
        })
    },
    create: (table, cols, vals, callback) => {
        const queryString = `insert into ${table}(${cols.toString()}) values (${printQuestionMarks(vals.length)})`;
        console.log(queryString); 

        connection.query(queryString, (err, results) => {
            if (err) {
                throw err;
            }

            callback(results)
        })
    }
}

module.exports = orm;