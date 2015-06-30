/* Setting up the express app */

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

/* Setting up the database */
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
  // yay!
});

/* Sample calls on the database */
// var Kitten = require('./public/js/models/kittySchema');
// var fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"

// fluffy.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     fluffy.speak();
// });

// Kitten.find(function (err, kittens) {
//     if (err) return console.error(err);
//     console.log(kittens);
// });

/* Setting the routes and html file paths */
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
 
app.get('/', function (req, res) {
    res.render('../public/tmpl/index.ejs', { title: 'SPACE Tool' });
});

app.get('/home', function (req, res) {
    res.render('../public/tmpl/index.ejs', { title: 'SPACE Tool' });
});

app.get('/tool', function (req, res) {
    res.render('../public/tmpl/tool.ejs', { title: 'SPACE Tool' });
});
 
app.get('/about', function (req, res) {
    res.render('../public/tmpl/about.ejs', { title: 'About' });
});

app.get('/tool1', function (req, res) {
    res.render('../public/tmpl/instruments.ejs', { title: 'Instruments Selection' });
});

app.get('/tool2', function (req, res) {
    res.render('../public/tmpl/attitude.ejs', { title: 'Attitude Selection' });
});

app.get('/tool3', function (req, res) {
    res.render('../public/tmpl/trajectory.ejs', { title: 'Trajectory Selection' });
});

app.get('/tool4', function (req, res) {
    res.render('../public/tmpl/comm.ejs', { title: 'Communication Selection' });
});

app.get('/tool5', function (req, res) {
    res.render('../public/tmpl/data.ejs', { title: 'Data Selection' });
});

app.get('/tool6', function (req, res) {
    res.render('../public/tmpl/power.ejs', { title: 'Power Selection' });
});

app.get('/tool7', function (req, res) {
    res.render('../public/tmpl/bus.ejs', { title: 'Bus Selection' });
});

app.get('/tool8', function (req, res) {
    res.render('../public/tmpl/results.ejs', { title: 'Results Selection' });
});

app.listen(port);
console.log('Express server running at http://localhost:' + port);


