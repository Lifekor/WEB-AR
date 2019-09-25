const express = require('express');
const app = express();
const path = require('path');

app.set("/", "html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/', function (req, res) {
    res.sender('index');
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});