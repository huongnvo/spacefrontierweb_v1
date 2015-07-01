/* Setting up the express app -------------------------------------------------------*/

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

/* Setting up the database connection ------------------------------------------------*/
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cubesat_v1', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
});

/* Setting up the database for each subsystem -----------------------------------------*/
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CdhFactory = require('./public/js/models/CdhFactory.js');
var cdhfactory = new CdhFactory(Schema,mongoose);
cdhfactory.createSchemas();
// cdhfactory.insertPart();
app.get('/parts/cdh', function(req, res) {
     var resp = cdhfactory.getPart({},res);
});

var AttitudeFactory = require('./public/js/models/AttitudeFactory.js');
var attitudefactory = new AttitudeFactory(Schema,mongoose);
attitudefactory.createSchemas();
// attitudefactory.insertPart();
app.get('/parts/attitude', function(req, res) {
     var resp = attitudefactory.getPart({},res);
});

var StationFactory = require('./public/js/models/StationFactory.js');
var stationfactory = new StationFactory(Schema,mongoose);
stationfactory.createSchemas();
// stationfactory.insertPart();
app.get('/parts/station', function(req, res) {
     var resp = stationfactory.getPart({},res);
});

var ThermalFactory = require('./public/js/models/ThermalFactory.js');
var thermalfactory = new ThermalFactory(Schema,mongoose);
thermalfactory.createSchemas();
// thermalfactory.insertPart();
app.get('/parts/thermal', function(req, res) {
     var resp = thermalfactory.getPart({},res);
});

var PowerFactory = require('./public/js/models/PowerFactory.js');
var powerfactory = new PowerFactory(Schema,mongoose);
powerfactory.createSchemas();
// powerfactory.insertPart();
app.get('/parts/power', function(req, res) {
     var resp = powerfactory.getPart({},res);
});

var CommFactory = require('./public/js/models/CommFactory.js');
var commfactory = new CommFactory(Schema,mongoose);
commfactory.createSchemas();
// commfactory.insertPart();
app.get('/parts/comm', function(req, res) {
     var resp = commfactory.getPart({},res);
});

var InstrumentsFactory = require('./public/js/models/InstrumentsFactory.js');
var instrumentsfactory = new InstrumentsFactory(Schema,mongoose);
instrumentsfactory.createSchemas();
// instrumentsfactory.insertPart();
app.get('/parts/instruments', function(req, res) {
     var resp = instrumentsfactory.getPart({},res);
});

var PropulsionFactory = require('./public/js/models/PropulsionFactory.js');
var propulsionfactory = new PropulsionFactory(Schema,mongoose);
propulsionfactory.createSchemas();
propulsionfactory.insertPart();
app.get('/parts/propulsion', function(req, res) {
     var resp = propulsionfactory.getPart({},res);
});

/* Setting the routes and html file paths -----------------------------------------------*/
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


