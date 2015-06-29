var express = require("express"),
    fs = require('fs'),
    port = process.env.PORT || 3000;
 
var app = express();
app.use(express.logger());
app.use(express.json());
app.use(express.urlencoded());
app.set("view options", {
    layout: false
});

app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));
 
app.get('/', function (req, res) {
    res.render('public/index.html');
});

app.get('/home', function (req, res) {
    res.sendfile('public/index.html');
});

app.get('/tool', function (req, res) {
    res.sendfile('public/tmpl/tool.html');
});
 
app.get('/about', function (req, res) {
    res.sendfile('public/tmpl/about.html');
});

app.get('/tool1', function (req, res) {
    res.sendfile('public/tmpl/instruments.html');
});

app.get('/tool2', function (req, res) {
    res.sendfile('public/tmpl/attitude.html');
});

app.get('/tool3', function (req, res) {
    res.sendfile('public/tmpl/trajectory.html');
});

app.get('/tool4', function (req, res) {
    res.sendfile('public/tmpl/comm.html');
});

app.get('/tool5', function (req, res) {
    res.sendfile('public/tmpl/data.html');
});

app.get('/tool6', function (req, res) {
    res.sendfile('public/tmpl/power.html');
});

app.get('/tool7', function (req, res) {
    res.sendfile('public/tmpl/bus.html');
});

app.get('/tool8', function (req, res) {
    res.sendfile('public/tmpl/results.html');
});

app.listen(port);
console.log('Express server running at http://localhost:' + port);