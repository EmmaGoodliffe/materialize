const http = require('http');
const fs = require('fs');
const express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.use(express.static('img'));

app.use(express.urlencoded({ extended: false }));

const port = 3000;
app.listen(port, function () {
  console.log("Listening on port "+port);
});
