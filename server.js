const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/main.html'));
});

app.listen(port);
console.log("App listening on port " + port);