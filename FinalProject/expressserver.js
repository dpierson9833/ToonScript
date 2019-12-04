const express = require('express');
const db = require('./db');

const app = express();

//gets subdirectory where files are stored
app.use(express.static("assets"));

app.get('/', (req, res) => {
    res.send('You sent the name "' + req.body.name + '".');
});

//receive message from searchbar
db.rcvQuery();










app.listen(8000);