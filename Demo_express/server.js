const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.send("This is the Home page");
});

app.get('/about', function (req, res) {
    res.send("This is the about me page");
});

app.get('/contact-me', function (req, res) {
    res.send("This is the contact me Page");
});

app.get("*", function (req, res) {
    res.send("Error page 404");
});









app.listen(3000, function () {
    console.log("Server is running on port 3000");
});