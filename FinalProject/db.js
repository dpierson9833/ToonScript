const mysql = require('mysql');
const express = require('express');
const bodyparse = require('body-parser');

const app = express();

var queryText;

//connect to body-parser
app.use(bodyparse.urlencoded({ extended: true }));

//connect to the mysql server
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'toonscript'
  })

function rcvQuery(){
    connection.connect();
    

    app.post('/results', (req, res) => {
        queryText = req.body.queryText;
        res.send(queryText);
        console.log(queryText + ' is the text');
    });    

    //connection.query();//put natural language processing here
}




module.exports = {
    connection: connection,
    rcvQuery: rcvQuery
};