const express = require('express');

const app = express();

//gets subdirectory where files are stored
app.use(express.static("assets"));










app.listen(8000);