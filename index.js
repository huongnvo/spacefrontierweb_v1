/* Getting all packages -------------------------------------------------------------*/
var jwt = require("jsonwebtoken");
var morgan = require("morgan");
var config = require('./config');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var express = require("express");
var fs = require('fs');

/* Setting up the express app -------------------------------------------------------*/
var port = process.env.PORT || 3000;
var app = express();
app.use(express.logger());
app.use(express.json());
app.use(express.urlencoded());
app.set("view options", {
    layout: false
});

// use morgan to log requests to the console
app.use(morgan("dev"));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Setting up the database connection ------------------------------------------------*/
mongoose.connect(config.database, function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});
app.set('superSecret', config.secret); // secret variable
var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
});

/* Setting up the database for each subsystem -----------------------------------------*/
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

/* Route middleware to verify a token -------------------------------------------------*/
function verifyToken(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
            if (err) {
                return res.json({ 
                    success: false, 
                    message: 'Failed to authenticate token.' 
                });    
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;    
                next();
            }
        });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });
    }
};

/* Setting up the database for all users  ---------------------------------------------*/
var UserFactory = require('./public/js/models/UserFactory.js');
var userfactory = new UserFactory(Schema, mongoose);
userfactory.createSchemas();

app.post('/authenticate', function(req, res) {
    var resp = userfactory.getOneUser(req, res, jwt, app);
});

app.get('/users', verifyToken, function(req, res) {
    var resp = userfactory.getAllUsers({}, res);
});

app.post('/users', function(req, res) {
    var resp = userfactory.createUser(req, res);
});

app.post('/exists', function(req, res) {
    var resp = userfactory.checkIfExists(req, res);
});

/* Setting up the database for all created cubesats -----------------------------------*/
var CubesatFactory = require('./public/js/models/CubesatFactory.js');
var cubesatfactory = new CubesatFactory(Schema, mongoose);
cubesatfactory.createSchemas();

app.get('/parts/cubesat', function(req, res) {
    var resp = cubesatfactory.getPart({}, res);
});

app.get('/parts/cubesat/:_id', function(req, res) {
    var resp = cubesatfactory.getOnePart(req, res);
});

app.post('/parts/cubesat', function(req, res) {
    var resp = cubesatfactory.insertEmptyPart(req, res);
});

app.delete('/parts/cubesat/:_id', function(req, res) {
    var resp = cubesatfactory.removePart(req, res);
});

app.put('/parts/cubesat-mass/:_id', function(req, res) {
    var resp = cubesatfactory.updateMass(req, res);
});

app.put('/parts/cubesat-power/:_id', function(req, res) {
    var resp = cubesatfactory.updatePower(req, res);
});

app.put('/parts/cubesat-volume/:_id', function(req, res) {
    var resp = cubesatfactory.updateVolume(req, res);
});

app.put('/parts/cubesat-name/:_id', function(req, res) {
    var resp = cubesatfactory.updateName(req, res);
});

app.put('/parts/cubesat-objectives/:_id', function(req, res) {
    var resp = cubesatfactory.updateObjectives(req, res);
});

app.put('/parts/cubesat-target/:_id', function(req, res) {
    var resp = cubesatfactory.updateTarget(req, res);
});

app.put('/parts/cubesat-attitude/:_id', function(req, res) {
    var resp = cubesatfactory.updateAttitude(req, res);
});

app.put('/parts/cubesat-antenna/:_id', function(req, res) {
    var resp = cubesatfactory.updateAntenna(req, res);
});

app.put('/parts/cubesat-receiver/:_id', function(req, res) {
    var resp = cubesatfactory.updateReceiver(req, res);
});

app.put('/parts/cubesat-cdh/:_id', function(req, res) {
    var resp = cubesatfactory.updateCdh(req, res);
});

app.put('/parts/cubesat-instrument/:_id', function(req, res) {
    var resp = cubesatfactory.updateInstrument(req, res);
});

app.put('/parts/cubesat-panels/:_id', function(req, res) {
    var resp = cubesatfactory.updatePanel(req, res);
});

app.put('/parts/cubesat-batteries/:_id', function(req, res) {
    var resp = cubesatfactory.updateBatteries(req, res);
});

app.put('/parts/cubesat-eps/:_id', function(req, res) {
    var resp = cubesatfactory.updateEPS(req, res);
});

app.put('/parts/cubesat-propulsion/:_id', function(req, res) {
    var resp = cubesatfactory.updatePropulsion(req, res);
});

app.put('/parts/cubesat-station/:_id', function(req, res) {
    var resp = cubesatfactory.updateStation(req, res);
});

app.put('/parts/cubesat-thermal/:_id', function(req, res) {
    var resp = cubesatfactory.updateThermal(req, res);
});

app.put('/parts/cubesat-bus/:_id', function(req, res) {
    var resp = cubesatfactory.updateBus(req, res);
});

app.put('/parts/cubesat-deployer/:_id', function(req, res) {
    var resp = cubesatfactory.updateDeployer(req, res);
});

/* Setting up the database for attitude selection -------------------------------------*/
var AttitudeFactory = require('./public/js/models/AttitudeFactory.js');
var attitudefactory = new AttitudeFactory(Schema, mongoose);
attitudefactory.createSchemas();
// attitudefactory.insertPart();

app.get('/parts/attitude', function(req, res) {
    var resp = attitudefactory.getPart({},res);
});

app.post('/parts/attitude', verifyToken, function(req, res) {
    var resp = attitudefactory.putPart(req, res);
});

app.put('/parts/attitude/:_id', verifyToken, function(req, res) {
    var resp = attitudefactory.updatePart(req, res);
});

app.delete('/parts/attitude/:_id', verifyToken, function(req, res) {
    var resp = attitudefactory.removePart(req, res);
});

/* Setting up the database for command and data handling ------------------------------*/
var CdhFactory = require('./public/js/models/CdhFactory.js');
var cdhfactory = new CdhFactory(Schema, mongoose);
cdhfactory.createSchemas();
//cdhfactory.insertPart();

app.get('/parts/cdh', function(req, res) {
    var resp = cdhfactory.getPart({},res);
});

app.post('/parts/cdh', verifyToken, function(req, res) {
    var resp = cdhfactory.putPart(req, res);
});

app.put('/parts/cdh/:_id', verifyToken, function(req, res) {
    var resp = cdhfactory.updatePart(req, res);
});

app.delete('/parts/cdh/:_id', verifyToken, function(req, res) {
    var resp = cdhfactory.removePart(req, res);
});

/* Setting up the database for communication subsystem ------------------------------------*/
var CommFactory = require('./public/js/models/CommFactory.js');
var commfactory = new CommFactory(Schema, mongoose);
commfactory.createSchemas();
// commfactory.insertPart();

app.get('/parts/comm', function(req, res) {
    var resp = commfactory.getPart({},res);
});

app.post('/parts/comm', verifyToken, function(req, res) {
    var resp = commfactory.putPart(req, res);
});

app.put('/parts/comm/:_id', verifyToken, function(req, res) {
    var resp = commfactory.updatePart(req, res);
});

app.delete('/parts/comm/:_id', verifyToken, function(req, res) {
    var resp = commfactory.removePart(req, res);
});

/* Setting up the database for instrumentation ----------------------------------------------*/
var InstrumentsFactory = require('./public/js/models/InstrumentsFactory.js');
var instrumentsfactory = new InstrumentsFactory(Schema, mongoose);
instrumentsfactory.createSchemas();
// instrumentsfactory.insertPart();

app.get('/parts/instruments', function(req, res) {
    var resp = instrumentsfactory.getPart({},res);
});

app.post('/parts/instruments', verifyToken, function(req, res) {
    var resp = instrumentsfactory.putPart(req, res);
});

app.put('/parts/instruments/:_id', verifyToken, function(req, res) {
    var resp = instrumentsfactory.updatePart(req, res);
});

app.delete('/parts/instruments/:_id', verifyToken, function(req, res) {
    var resp = instrumentsfactory.removePart(req, res);
});

/* Setting up the database for power parts ----------------------------------------------*/
var PowerFactory = require('./public/js/models/PowerFactory.js');
var powerfactory = new PowerFactory(Schema, mongoose);
powerfactory.createSchemas();
 //powerfactory.insertPart();

app.get('/parts/power', function(req, res) {
    var resp = powerfactory.getPart({},res);
});

app.post('/parts/power', verifyToken, function(req, res) {
    var resp = powerfactory.putPart(req, res);
});

app.put('/parts/power/:_id', verifyToken, function(req, res) {
    var resp = powerfactory.updatePart(req, res);
});

app.delete('/parts/power/:_id', verifyToken, function(req, res) {
    var resp = powerfactory.removePart(req, res);
});

/* Setting up the database for propulsion parts ------------------------------------------*/
var PropulsionFactory = require('./public/js/models/PropulsionFactory.js');
var propulsionfactory = new PropulsionFactory(Schema, mongoose);
propulsionfactory.createSchemas();
// propulsionfactory.insertPart();

app.get('/parts/propulsion', function(req, res) {
    var resp = propulsionfactory.getPart({},res);
});

app.post('/parts/propulsion', verifyToken, function(req, res) {
    var resp = propulsionfactory.putPart(req, res);
});

app.put('/parts/propulsion/:_id', verifyToken, function(req, res) {
    var resp = propulsionfactory.updatePart(req, res);
});

app.delete('/parts/propulsion/:_id', verifyToken, function(req, res) {
    var resp = propulsionfactory.removePart(req, res);
});

/* Setting up the database for station subsystem----------- ------------------------------*/
var StationFactory = require('./public/js/models/StationFactory.js');
var stationfactory = new StationFactory(Schema, mongoose);
stationfactory.createSchemas();
// stationfactory.insertPart();

app.get('/parts/station', function(req, res) {
    var resp = stationfactory.getPart({},res);
});

app.post('/parts/station', verifyToken, function(req, res) {
    var resp = stationfactory.putPart(req, res);
});

app.put('/parts/station/:_id', verifyToken, function(req, res) {
    var resp = stationfactory.updatePart(req, res);
});

app.delete('/parts/station/:_id', verifyToken, function(req, res) {
    var resp = stationfactory.removePart(req, res);
});

/* Setting up the database for thermal and mechanical parts ----------------------------*/
var ThermalFactory = require('./public/js/models/ThermalFactory.js');
var thermalfactory = new ThermalFactory(Schema, mongoose);
thermalfactory.createSchemas();
// thermalfactory.insertPart();

app.get('/parts/thermal', function(req, res) {
    var resp = thermalfactory.getPart({},res);
});

app.post('/parts/thermal', verifyToken, function(req, res) {
    var resp = thermalfactory.putPart(req, res);
});

app.put('/parts/thermal/:_id', verifyToken, function(req, res) {
    var resp = thermalfactory.updatePart(req, res);
});

app.delete('/parts/thermal/:_id', verifyToken, function(req, res) {
    var resp = thermalfactory.removePart(req, res);
});

/* Setting the routes and html file paths -----------------------------------------------*/
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

app.get('/tool0', function (req, res) {
    res.render('../public/tmpl/summary.ejs', { title: 'Mission Description' });
});

app.get('/tool1', function (req, res) {
    res.render('../public/tmpl/instruments.ejs', { title: 'Instruments Selection' });
});

app.get('/tool2', function (req, res) {
    res.render('../public/tmpl/attitude.ejs', { title: 'Attitude Selection' });
});

app.get('/tool3', function (req, res) {
    res.render('../public/tmpl/trajectory.ejs', { title: 'Propulsion Selection' });
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

app.get('/partslist', function(req, res) {
    res.render('../public/tmpl/loginsignup.ejs', { title: 'Parts List'});
});

app.get('/list', function (req, res) {
    res.render('../public/tmpl/search.ejs', { title: 'Subsystem Lists' });
});

app.get('/attitude', function (req, res) {
    res.render('../public/tmpl/displayAttitude.ejs', { title: 'Attitude Subsystem' });
});

app.get('/cdh', function (req, res) {
    res.render('../public/tmpl/displayCdh.ejs', { title: 'CDH Subsystem' });
});

app.get('/comm', function (req, res) {
    res.render('../public/tmpl/displayComm.ejs', { title: 'Communication Subsystem' });
});

app.get('/instruments', function (req, res) {
    res.render('../public/tmpl/displayInstruments.ejs', { title: 'Instrumentations' });
});

app.get('/power', function (req, res) {
    res.render('../public/tmpl/displayPower.ejs', { title: 'Power Subsystem' });
});

app.get('/propulsion', function (req, res) {
    res.render('../public/tmpl/displayPropulsion.ejs', { title: 'Propulsion Subsystem' });
});

app.get('/station', function (req, res) {
    res.render('../public/tmpl/displayStation.ejs', { title: 'Ground Stations' });
});

app.get('/thermal', function (req, res) {
    res.render('../public/tmpl/displayThermal.ejs', { title: 'Thermal Subsystem' });
});

app.get('/login', function(req, res) {
    res.render('../public/tmpl/login.ejs', { title: 'Log In' });
});

app.get('/signup', function(req, res) {
    res.render('../public/tmpl/signup.ejs', { title: 'Sign Up' });
});

app.get('/google5d616e0e6bb5bc2a.html', function(req, res) {
    res.sendfile('public/tmpl/google5d616e0e6bb5bc2a.html')
});

app.get('/listAdmin', verifyToken, function (req, res) {
    res.render('../public/tmpl/searchAdmin.ejs', { title: 'Subsystem Lists' });
});

app.get('/attitudeAdmin', function (req, res) {
    res.render('../public/tmpl/displayAttitudeAdmin.ejs', { title: 'Attitude Subsystem' });
});

app.get('/cdhAdmin', function (req, res) {
    res.render('../public/tmpl/displayCdhAdmin.ejs', { title: 'CDH Subsystem' });
});

app.get('/commAdmin', function (req, res) {
    res.render('../public/tmpl/displayCommAdmin.ejs', { title: 'Communication Subsystem' });
});

app.get('/instrumentsAdmin', function (req, res) {
    res.render('../public/tmpl/displayInstrumentsAdmin.ejs', { title: 'Instrumentations' });
});

app.get('/powerAdmin', function (req, res) {
    res.render('../public/tmpl/displayPowerAdmin.ejs', { title: 'Power Subsystem' });
});

app.get('/propulsionAdmin', function (req, res) {
    res.render('../public/tmpl/displayPropulsionAdmin.ejs', { title: 'Propulsion Subsystem' });
});

app.get('/stationAdmin', function (req, res) {
    res.render('../public/tmpl/displayStationAdmin.ejs', { title: 'Ground Stations' });
});

app.get('/thermalAdmin', function (req, res) {
    res.render('../public/tmpl/displayThermalAdmin.ejs', { title: 'Thermal Subsystem' });
});

app.listen(port);
console.log('Express server running at port: ' + port);


