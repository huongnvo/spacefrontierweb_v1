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


/* Setting up the database for attitude selection -------------------------------------*/
var AttitudeFactory = require('./public/js/models/AttitudeFactory.js');
var attitudefactory = new AttitudeFactory(Schema,mongoose);
attitudefactory.createSchemas();
attitudefactory.insertPart();

app.get('/parts/attitude', function(req, res) {
    var resp = attitudefactory.getPart({},res);
});

app.post('/parts/attitude', function(req, res) {
    var resp = attitudefactory.putPart(req, res);
});

app.put('/parts/attitude/:id', function(req, res) {
    var resp = attitudefactory.updatePart(req, res);
});

app.delete('/parts/attitude/:id', function(req, res) {
    var resp = attitudefactory.deletePart(req, res);
});


/* Setting up the database for command and data handling ------------------------------*/
var CdhFactory = require('./public/js/models/CdhFactory.js');
var cdhfactory = new CdhFactory(Schema,mongoose);
cdhfactory.createSchemas();
// cdhfactory.insertPart();

app.get('/parts/cdh', function(req, res) {
    var resp = cdhfactory.getPart({},res);
});

app.post('/parts/cdh', function(req, res) {
    var resp = cdhfactory.putPart(req, res);
});

app.put('/parts/cdh/:id', function(req, res) {
    var resp = cdhfactory.updatePart(req, res);
});

app.delete('/parts/cdh/:id', function(req, res) {
    var resp = cdhfactory.deletePart(req, res);
});

/* Setting up the database for communication subsystem ------------------------------------*/
var CommFactory = require('./public/js/models/CommFactory.js');
var commfactory = new CommFactory(Schema,mongoose);
commfactory.createSchemas();
// commfactory.insertPart();

app.get('/parts/comm', function(req, res) {
    var resp = commfactory.getPart({},res);
});

app.post('/parts/comm', function(req, res) {
    var resp = commfactory.putPart(req, res);
});

app.put('/parts/comm/:id', function(req, res) {
    var resp = commfactory.updatePart(req, res);
});

app.delete('/parts/comm/:id', function(req, res) {
    var resp = commfactory.deletePart(req, res);
});

/* Setting up the database for instrumentation ----------------------------------------------*/
var InstrumentsFactory = require('./public/js/models/InstrumentsFactory.js');
var instrumentsfactory = new InstrumentsFactory(Schema,mongoose);
instrumentsfactory.createSchemas();
// instrumentsfactory.insertPart();

app.get('/parts/instruments', function(req, res) {
    var resp = instrumentsfactory.getPart({},res);
});

app.post('/parts/instruments', function(req, res) {
    var resp = instrumentsfactory.putPart(req, res);
});

app.put('/parts/instruments/:id', function(req, res) {
    var resp = instrumentsfactory.updatePart(req, res);
});

app.delete('/parts/instruments/:id', function(req, res) {
    var resp = instrumentsfactory.deletePart(req, res);
});

/* Setting up the database for power parts ----------------------------------------------*/
var PowerFactory = require('./public/js/models/PowerFactory.js');
var powerfactory = new PowerFactory(Schema,mongoose);
powerfactory.createSchemas();
// powerfactory.insertPart();

app.get('/parts/power', function(req, res) {
    var resp = powerfactory.getPart({},res);
});

app.post('/parts/power', function(req, res) {
    var resp = powerfactory.putPart(req, res);
});

app.put('/parts/power/:id', function(req, res) {
    var resp = powerfactory.updatePart(req, res);
});

app.delete('/parts/power/:id', function(req, res) {
    var resp = powerfactory.deletePart(req, res);
});

/* Setting up the database for propulsion parts ------------------------------------------*/
var PropulsionFactory = require('./public/js/models/PropulsionFactory.js');
var propulsionfactory = new PropulsionFactory(Schema,mongoose);
propulsionfactory.createSchemas();
propulsionfactory.insertPart();

app.get('/parts/propulsion', function(req, res) {
    var resp = propulsionfactory.getPart({},res);
});

app.post('/parts/propulsion', function(req, res) {
    var resp = propulsionfactory.putPart(req, res);
});

app.put('/parts/propulsion/:id', function(req, res) {
    var resp = propulsionfactory.updatePart(req, res);
});

app.delete('/parts/propulsion/:id', function(req, res) {
    var resp = propulsionfactory.deletePart(req, res);
});

/* Setting up the database for station subsystem----------- ------------------------------*/
var StationFactory = require('./public/js/models/StationFactory.js');
var stationfactory = new StationFactory(Schema,mongoose);
stationfactory.createSchemas();
// stationfactory.insertPart();

app.get('/parts/station', function(req, res) {
    var resp = stationfactory.getPart({},res);
});

app.post('/parts/station', function(req, res) {
    var resp = stationfactory.putPart(req, res);
});

app.put('/parts/station/:id', function(req, res) {
    var resp = stationfactory.updatePart(req, res);
});

app.delete('/parts/station/:id', function(req, res) {
    var resp = stationfactory.deletePart(req, res);
});

/* Setting up the database for thermal and mechanical parts ----------------------------*/
var ThermalFactory = require('./public/js/models/ThermalFactory.js');
var thermalfactory = new ThermalFactory(Schema,mongoose);
thermalfactory.createSchemas();
// thermalfactory.insertPart();

app.get('/parts/thermal', function(req, res) {
    var resp = thermalfactory.getPart({},res);
});

app.post('/parts/thermal', function(req, res) {
    var resp = thermalfactory.putPart(req, res);
});

app.put('/parts/thermal/:id', function(req, res) {
    var resp = thermalfactory.updatePart(req, res);
});

app.delete('/parts/thermal/:id', function(req, res) {
    var resp = thermalfactory.deletePart(req, res);
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

app.get('/list', function (req, res) {
    res.render('../public/tmpl/search.ejs', { title: 'Subsystem Lists' });
});

app.get('/display/parts/attitude', function (req, res) {
    res.render('../public/tmpl/displayAttitude.ejs', { title: 'Attitude Subsystem' });
});

app.get('/display/parts/cdh', function (req, res) {
    res.render('../public/tmpl/displayCdh.ejs', { title: 'CDH Subsystem' });
});

app.get('/display/parts/comm', function (req, res) {
    res.render('../public/tmpl/displayComm.ejs', { title: 'Communication Subsystem' });
});

app.get('/display/parts/instruments', function (req, res) {
    res.render('../public/tmpl/displayInstruments.ejs', { title: 'Instrumentations' });
});

app.get('/display/parts/power', function (req, res) {
    res.render('../public/tmpl/displayCdh.ejs', { title: 'Power Subsystem' });
});

app.get('/display/parts/propulsion', function (req, res) {
    res.render('../public/tmpl/displayPropulsion.ejs', { title: 'Propulsion Subsystem' });
});

app.get('/display/parts/station', function (req, res) {
    res.render('../public/tmpl/displayStation.ejs', { title: 'Ground Stations' });
});

app.get('/display/parts/thermal', function (req, res) {
    res.render('../public/tmpl/displayThermal.ejs', { title: 'Thermal Subsystem' });
});


app.listen(port);
console.log('Express server running at http://localhost:' + port);


