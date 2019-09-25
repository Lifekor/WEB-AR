const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

app.set("/", "html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/', function (req, res) {
    res.sender('index');
});

app.listen(port);
console.log("App listening on port " + port);
