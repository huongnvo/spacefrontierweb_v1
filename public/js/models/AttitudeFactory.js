var AttitudeFactory = function(Schema,mongoose) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		Schema = new this.Schema({
			Type: String,
			Type_further: String,
			Name: String,
			Manufacturer: String,
			Reference: String,
			Heritage: String,
			Mass: String,
			Power: String,
			Volume: String,
			Proportions: String,
			Angle_prec: String,
			Ac_sensors: String,
			Scientific_obj: String,
			Cost: Number
		});
		this.attitude_parts = mongoose.model('attitude_parts', Schema);
	}

	this.insertPart = function() {
		var sensor1 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Sun Sensor', 
		    Name:'Sun sensor (course)', 
		    Manufacturer:'SSBV', 
		    Reference:'http://www.ssbv.com/ProductDatasheets/page39/page29/index.html', 
		    Heritage:'Available on cubesatshop, CMOS PSD detector, will fly on TechnoDemoSat-1, TRL 4-6', 
		    Mass:'5', 
		    Power:'0.05', 
		    Volume:'0.00218', 
		    Proportions:'33cm x 11cm x 6cm', 
		    Angle_prec:'0.5', 
		    Ac_sensors:'114 deg', 
		    Scientific_obj:'Determines Sun angle vector, attitude/location, Need 6 for full sky coverage, 10 krad total dose', 
		    Cost:0
	  	});
		
		var sensor2 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Sun Sensor', 
		    Name:'SS-411 Two-Axis Digital Sun Sensor', 
		    Manufacturer:'Sinclair Interplanetary', 
		    Reference:'http://www.sinclairinterplanetary.com/digitalsunsensors', 
		    Heritage:'In use on 22 orbital satellites. TRL 7-9', 
		    Mass:'34', 
		    Power:'1.35', 
		    Volume:'0.0228', 
		    Proportions:'3.4cm x 3.2cm x 2.1cm', 
		    Angle_prec:'1', 
		    Ac_sensors:'140 deg', 
		    Scientific_obj:'Determines Sun angle vector, attitude/location in 2 axes, 20 krad total dose, 16 grms random vibration, 5000 g shock', 
		    Cost:0
	  	});

	  	var actuator1 = new this.attitude_parts({ 
		    Type:'Actuator',
		    Type_further:'Reaction Wheel', 
		    Name:'MAI-101 Miniature 3 Axis Reaction Wheel', 
		    Manufacturer:'Maryland Aerospace', 
		    Reference:'http://www.cubesatshop.com/index.php?page=shop.product_details&flypage=&product_id=55&category_id=0&option=com_virtuemart&Itemid=65', 
		    Heritage:'Developed by Maryland Aerospace, sold on cubesatshop, 3 wheel assembly, reaction wheel only version of MAI-100. TRL 4-6', 
		    Mass:'640', 
		    Power:'5.6', 
		    Volume:'0.4045', 
		    Proportions:'7.6cm x 7.62cm x 6.985cm', 
		    Angle_prec:'Unknown', 
		    Ac_sensors:'Max torque .635 mNm', 
		    Scientific_obj:'Precise aiming/stability in 3 axes, Must dump angular momentum, 30 krad total dose, >12 grms', 
		    Cost:0
	  	});

		var actuator2 = new this.attitude_parts({ 
		    Type:'Actuator',
		    Type_further:'Magnetorquer', 
		    Name:'Cubesat Magnetorque Rod (magnetic torque rod)', 
		    Manufacturer:'SSBV', 
		    Reference:'http://www.ssbv.com/ProductDatasheets/page27/index.html', 
		    Heritage:'Available on cubesatshop, Flight tested on BADR-B (cubesat), Fedsat, and MicroLabSat (smallsat). Scaled for cubesat system. TRL 7-9.', 
		    Mass:'30', 
		    Power:'0.2', 
		    Volume:'0.063', 
		    Proportions:'7cm x 9cm x 1cm', 
		    Angle_prec:'Unknown', 
		    Ac_sensors:'Magnetic moment >.2 Am^2, Lifetime > 10 yrs', 
		    Scientific_obj:'Attitude control in 3 axes, momentum dumping of reaction wheels, magnetic field required for attitude control. Bonded directly to PCB',  
		    Cost:0
		});

		var sensor3 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Star Tracker', 
		    Name:'BCT Nano star tracker', 
		    Manufacturer:'Blue Canyon Technology', 
		    Reference:'http://bluecanyontech.com/portfolio-posts/nano-star-trackers/', 
		    Heritage:'Available on cubesatshop, Planned flight on INSPIRE. TRL 4-6', 
		    Mass:'350', 
		    Power:'0.5', 
		    Volume:'0.3365', 
		    Proportions:'10cm x 6.73cm x 5cm', 
		    Volume_further:'', 
		    Angle_prec:'0.001667', 
		    Ac_sensors:'9x12 deg', 
		    Scientific_obj:'Bore-sight: 6 arcsec Roll axis: 40 arcsec. Detects stars as dim as 7 M, star identification. Includes >10,000 star catalog onboard, standby mode (.25 W). Lifetime > 1 yr, 2 sec attitude determination time',  
		    Cost:0
		});

		var sensor4 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Star Tracker', 
		    Name:'BCT Thin-Slice Nano star tracker', 
		    Manufacturer:'Blue Canyon Technology', 
		    Reference:'http://bluecanyontech.com/wp-content/uploads/2015/05/TS-NST-Data-Sheet_1.0.pdf', 
		    Heritage:'Available on cubesatshop, For volume-constrained cubesat missions. Planned flight on INSPIRE. TRL 4-6', 
		    Mass:'200', 
		    Power:'0.75', 
		    Volume:'0.3041', 
		    Proportions:'9.6cm x 9.6cm x 3.3cm', 
		    Angle_prec:'Unknown', 
		    Ac_sensors:'', 
		    Scientific_obj:'Designed with a revolutionary micro size, power, and mass. The Thin Slice Nano Tracker is creating a new level of performance for Nano size spacecraft', 
		    Cost:0
		});

		var acs1a = new this.attitude_parts({ 
		    Type:'ACS',
		    Type_further:'Attitude Control System (ACS)', 
		    Name:'MAI-200 3-Axis ADACS', 
		    Manufacturer:'Maryland Aerospace', 
		    Reference:'http://www.cubesatshop.com/index.php?page=shop.product_details&flypage=flypage.tpl&product_id=53&category_id=7&option=com_virtuemart&Itemid=69', 
		    Heritage:'Developed by Maryland Aerospace, Contains MAI-101 Reaction wheel assembly, electromagnets, magnetometer, sun sensor, and OBC. Flight tested on QbX. TRL 7-9', 
		    Mass:'907', 
		    Power:'5.4', 
		    Volume:'0.79', 
		    Proportions:'10.0cm x 10.0cm x 7.9cm', 
		    Angle_prec:'1', 
		    Ac_sensors:'Max torque .635 mNm.', 
		    Scientific_obj:'Precise aiming/stability in 3 axes in a fully autonomouse system. Detumbling of spacecraft on release, Must dump angular momentum, 30 krad total dose, >10 grms', 
		    Cost:0
	  	});

		var acs1b = new this.attitude_parts({ 
		    Type:'ACS',
		    Type_further:'Attitude Control System (ACS)', 
		    Name:'MAI-100 3-Axis ADACS', 
		    Manufacturer:'Maryland Aerospace', 
		    Reference:'http://www.ati-space.com/ATI.files/11_index.files/MAI-100%20Specification%20ATI%207-30-10.pdf', 
		    Heritage:'Developed by Maryland Aerospace, Contains MAI-101 Reaction wheel assembly, electromagnets, magnetometer, sun sensor, and OBC. Flight tested on QbX. TRL 7-9', 
		    Mass:'865', 
		    Power:'2.4', 
		    Volume:'0.79', 
		    Proportions:'10.0cm x 10.0cm x 7.9cm', 
		    Angle_prec:'1', 
		    Ac_sensors:'Max torque .635 mNm.', 
		    Scientific_obj:'Precise aiming/stability in 3 axes in a fully autonomouse system. Detumbling of spacecraft on release, Must dump angular momentum, 30 krad total dose, >10 grms', 
		    Cost:0
	  	});

		var acs2 = new this.attitude_parts({ 
		    Type:'ACS',
		    Type_further:'Attitude Control System (ACS)', 
		    Name:'Microsat Control Moment Gyroscope', 
		    Manufacturer:'HoneyBee Robotics', 
		    Reference:'http://www.honeybeerobotics.com/wp-content/uploads/2014/03/Honeybee-Robotics-Microsat-CMGs.pdf', 
		    Heritage:'3 can be arranged for 3-axis control. Cubesat models available. TRL 4-6', 
		    Mass:'600', 
		    Power:'2', 
		    Volume:'0.21', 
		    Proportions:'', 
		    Angle_prec:'Unknown', 
		    Ac_sensors:'112 mNm', 
		    Scientific_obj:'', 
		    Cost:0
  		});

  		var acs3 = new this.attitude_parts({ 
		    Type:'ACS',
		    Type_further:'Attitude Control System (ACS)', 
		    Name:'XACT Control System', 
		    Manufacturer:'Blue Canyon Technology', 
		    Reference:'http://bluecanyontech.com/wp-content/uploads/2015/05/XACT-Data-Sheet_1.0.pdf', 
		    Heritage:'3 torque rods, IMU, magnetometer, sun sensors, star tracker, reaction wheel assembly. TRL 4-6', 
		    Mass:'850', 
		    Power:'2.83', 
		    Volume:'0.5', 
		    Proportions:'10cm x 10cm x 5cm', 
		    Angle_prec:'0.003',  
		    Ac_sensors:'Can rotate 8 kg cubesat at more than 10 deg/s', 
		    Scientific_obj:'.003 deg in 2 axes, .007 deg in 3d axis. Precise attitude determination/control in 3 axes, lifetime > 1 yr. Standby mode (.85 W)', 
		    Cost:0
		});

  		var acs4 = new this.attitude_parts({
			Type:'ACS',
		    Type_further:'Attitude Control System (ACS)', 
		    Name:'MAI-400 ADACS', 
		    Manufacturer:'Maryland Aerospace', 
		    Reference:'http://www.miniadacs.com/linked/2012-04-27%20mai-400%20a%20la%20carte%20specification.pdf', 
		    Heritage:'Available on cubesatshop, 3 reaction wheels, magnetometer, 2-camera Earth sensor, 3 torque rods, and on-board comp. A la cart part options. Not yet flown. TRL 4-6', 
		    Mass:'694',
		    Power:'2.2', 
		    Volume:'0.5', 
		    Proportions:'10cm x 10cm x 5.59cm', 
		    Angle_prec:'0.2', 
		    Ac_sensors:'Max torque .625 mNm and addition magnetic moment arm .15 Am^2', 
		    Scientific_obj:'Magnetometer +- 30000 nT, sun sensor +- 1 deg, Earth sensor +-.2 deg. Attitude determination and control, multiple uses for parts', 
		    Cost:0
		});

		var acs6 = new this.attitude_parts({ 
		    Type:'ACS',
		    Type_further:'Attitude Control System (ACS)', 
		    Name:'XB1 Modular Cubesat Bus', 
		    Manufacturer:'Blue Canyon Technology', 
		    Reference:'http://bluecanyontech.com/wp-content/uploads/2015/05/XB1-Data-Sheet_1.0.pdf', 
		    Heritage:'Module includes high precision atittude control, C&DH, EPS, and communication all in one package. Many options, configurableflight software, and many propulsion and payload interfaces included. Not yet flown, TRL 4-6', 
		    Mass:'1500', 
		    Power:'6.3', 
		    Volume:'1', 
		    Proportions:'10cm x 10cm x 10cm', 
		    Angle_prec:'0.002', 
		    Ac_sensors:'', 
		    Scientific_obj:'10 m, .15 m/s. Supports precision orbit propagation of multiple target objects with flexible pointing commands to enable a wide range of missions',
		    Cost:0
  		});

		var sensor5 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'GPS', 
		    Name:'SGR-05U-Space GPS Receiver', 
		    Manufacturer:'Surrey Satellite Technology', 
		    Reference:'http://www.sst-us.com/getdoc/d3991938-d829-4d05-82aa-3e421dc3d10a', 
		    Heritage:'Flown on 3 satellites. TRL 7-9', 
		    Mass:'40', 
		    Power:'0.8', 
		    Volume:'0.0315', 
		    Proportions:'7cm x 4.5cm x 1cm', 
		    Angle_prec:'Unknown', 
		    Ac_sensors:'', 
		    Scientific_obj:'Absolute position to 10 m, velocity to .15 m/s. Orbital information (position, velocity, time). Designed for use in LEO with a patch antenna (antenna bought separately, quadrifilar antenna included), 10 krad, 90-180 s to first pitch', 
		    Cost:0
  		});

  		var sensor6 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'GPS', 
		    Name:'SGR-05P-Space GPS Receiver', 
		    Manufacturer:'Surrey Satellite Technology', 
		    Reference:'http://www.sst-us.com/getdoc/9ee67dd2-b557-4818-95cc-b4b68ce8161c', 
		    Heritage:'More professional version of SGR-05U', 
		    Mass:'60', 
		    Power:'1', 
		    Volume:'0.5104', 
		    Proportions:'14.5cm x 11.0cm x 3.2cm', 
		    Angle_prec:'Unknown', 
		    Ac_sensors:'', 
		    Scientific_obj:'Absolute position to 10 m, velocity to .15 m/s. Orbital information (position, velocity, time). Designed for use in LEO with a patch antenna (antenna included), 7 yrs in LEO, 10 krad, 90-180 s to first pitch', 
		    Cost:0
  		});

  		var sensor7 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer', 
		    Name:'Magnetometer', 
		    Manufacturer:'Surrey Satellite Technology', 
		    Reference:'http://www.sstl.co.uk/Products/Subsystems/Actuators---Sensors/Sensors/Magnetometer', 
		    Heritage:'3-axis fluxgate magnetometer. Includes temp sensor. Flown on 30+ missions including Fedsat, BADR-B. TRL 7-9', 
		    Mass:'190', 
		    Power:'0.3', 
		    Volume:'0.0952', 
		    Proportions:'8.5cm x 3.5cm x 3.2cm', 
		    Angle_prec:'Unknown', 
		    Ac_sensors:'', 
		    Scientific_obj:'Range +-60 uT, Sensitivity +-10 nT. Attitude determination, magnetic field measurement. Designed for attitude sensing in LEO missions, 7 yrs in LEO', 
		    Cost:0
  		});

  		var sensor8 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Earth Sensor', 
		    Name:'MAI-SES Static Earth Sensor', 
		    Manufacturer:'Maryland Aerospace.', 
		    Reference:'http://maiaero.com/products/s/static-earth-sensor-2/', 
		    Heritage:'Available on cubesatshop, integrated into MAI-100/200', 
		    Mass:'33', 
		    Power:'0.264', 
		    Volume:'0.04', 
		    Proportions:'4.33cm x 3.17cm x 2.07cm', 
		    Angle_prec:'0.1', 
		    Ac_sensors:'', 
		    Scientific_obj:'Dip angle: .1 deg .5 deg accuracy in 2 axes. Designed for use in LEO, requires temperature gradient in atmosphere edge, 30 krad, 10 grms', 
		    Cost:0
		});

		var sensor9 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer', 
		    Name:'Tri-Axial Magnetometer', 
		    Manufacturer:'ISIS', 
		    Reference:'http://www.cubesatshop.com/index.php?page=shop.product_details&flypage=flypage.tpl&product_id=90&category_id=7&option=com_virtuemart&Itemid=69', 
		    Heritage:'Available on cubesatship, anisotropic magnetoresistance', 
		    Mass:'200', 
		    Power:'0.7', 
		    Volume:'0.07', 
		    Proportions:'10cm x 4cm x 1.6cm', 
		    Angle_prec:'1', 
		    Ac_sensors:'', 
		    Scientific_obj:'Estimation. measures 10-50,000 nT. Detect and measure magnetic fields. Attitude determination in Earth orbit',  
		    Cost:0
		});

		var sensor10 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer',
		    Name:'Tri-Axial Magnetometer', 
		    Manufacturer:'SSBV', 
		    Reference:'http://www.ssbv.com/resources/Datasheets/SSBV_Magnetometer_Datasheet_1g.pdf',
		    Heritage:'anisotropic magnetoresistance. Developed with Imperial College London, 3 flights in 2011-12. TRL 7-9', 
		    Mass:'200', 
		    Power:'0.4', 
		    Volume:'0.05202', 
		    Proportions:'8.5cm x 3.6cm x 1.7cm', 
		    Angle_prec:'1', 
		    Ac_sensors:'13 nT resolution', 
		    Scientific_obj:'Estimation +-50,000 nT. 10 krad total dose, 16g rms random vibration', 
		    Cost:0
	  	});

	  	var sensor11 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer', 
		    Name:'Helium Magnetometer', 
		    Manufacturer:'JPL', 
		    Reference:'http://cubesat.jpl.nasa.gov/projects/inspire/science.html', 
		    Heritage:'Based on full-sized instruments (Cassini). Planned flight on INSPIRE. TRL 4-6', 
		    Mass:'500', 
		    Power:'Unknown', 
		    Volume:'0.5', 
		    Proportions:'', 
		    Angle_prec:'1', 
		    Ac_sensors:'',
		    Scientific_obj:'Detect and measure magnetic fields. Attitude determination in Earth orbit, Vector mode, Scalar mode', 
		    Cost:0
  		});

  		var sensor12 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer', 
		    Name:'MAGIC Magnetometer', 
		    Manufacturer:'Imperial College London', 
		    Reference:'http://iopscience.iop.org/0957-0233/23/2/025902/pdf/0957-0233_23_2_025902.pdf', 
		    Heritage:'magnetoresistive. Planned flight on CINEMA. TRL 4-6', 
		    Mass:'105', 
		    Power:'0.42', 
		    Volume:'1.1728', 
		    Proportions:'', 
		    Angle_prec:'1', 
		    Ac_sensors:'Precision 25 nT attitude mode, 2-10 nT science mode.', 
		    Scientific_obj:'Estimation. Measures up to 57000 nT. Detect and measure magnetic fields. Attitude determination in Earth orbit. Designed to be mounted on boom for less spacecraft interference. Orbital', 
		    Cost:0
  		});

		var sensor13 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer', 
		    Name:'Smart Digital Magnetometer HMR2300', 
		    Manufacturer:'Honeywell', 
		    Reference:'http://www51.honeywell.com/aero/common/documents/myaerospacecatalog-documents/Missiles-Munitions/HMR2300.pdf', 
		    Heritage:'3-axis, flown on ESTCube, anisotropic magnetoresistive (AMR) tech, surface mounted', 
		    Mass:'100', 
		    Power:'0.4', 
		    Volume:'0.081', 
		    Proportions:'3cm x 3cm x .9cm', 
		    Angle_prec:'1', 
		    Ac_sensors:'70 uG', 
		    Scientific_obj:'Estimation +- 200000 nT. Detect and measure magnetic fields. Attitude determination in Earth orbit', 
   			Cost:0
  		});

  		var sensor14 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer', 
		    Name:'3-Axis Magnetic Sensor Hybrid HMC2003', 
		    Manufacturer:'Honeywell', 
		    Reference:'https://physics.ucsd.edu/neurophysics/Manuals/Honeywell/HMC_2003.pdf', 
		    Heritage:'hybrid of HMR 1001/1002', 
		    Mass:'0.3', 
		    Power:'0.3', 
		    Volume:'0.005', 
		    Proportions:'', 
		    Angle_prec:'1', 
		    Ac_sensors:'40 uG', 
		    Scientific_obj:'Estimation +- 200000 nT', 
		    Cost:0
		});

  		var sensor15a = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer', 
		    Name:'HMC 1001 Integrated Circuit Magnetometer', 
		    Manufacturer:'Honeywell', 
		    Reference:'https://physics.ucsd.edu/neurophysics/Manuals/Honeywell/HMC%201001%20and%20HMC%201002.pdf', 
		    Heritage:'Single (1001) and Dual (1002) axis magnetometers. 3 axes when used together', 
		    Mass:'0.14', 
		    Power:'0.125', 
		    Volume:'0.0001', 
		    Proportions:'',
		    Angle_prec:'1', 
		    Ac_sensors:'40 uG', 
		    Scientific_obj:'Estimation +- 200000 nT', 
		    Cost:0
		});

  		var sensor15b = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer', 
		    Name:'HMC 1002 Integrated Circuit Magnetometer', 
		    Manufacturer:'Honeywell', 
		    Reference:'https://physics.ucsd.edu/neurophysics/Manuals/Honeywell/HMC%201001%20and%20HMC%201002.pdf', 
		    Heritage:'Single (1001) and Dual (1002) axis magnetometers. 3 axes when used together', 
		    Mass:'0.53', 
		    Power:'0.125', 
		    Volume:'0.0004', 
		    Proportions:'', 
		    Angle_prec:'1', 
		    Ac_sensors:'40 uG', 
		    Scientific_obj:'Estimation +- 200000 nT', 
		    Cost:0
		});

		var sensor16 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Sun Sensor', 
		    Name:'Fine Sun Sensor', 
		    Manufacturer:'SSBV', 
		    Reference:'http://www.ssbv.com/ProductDatasheets/page39/page25/index.html', 
		    Heritage:'', 
		    Mass:'35', 
		    Power:'0.21', 
		    Volume:'0.02285', 
		    Proportions:'3.4cm x 3.2cm x 2.1cm', 
		    Angle_prec:'0.1', 
		    Ac_sensors:'', 
		    Scientific_obj:'140 deg FOV, 20 krad total dose', 
		    Cost:0
  		});

  		var sensor17 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'GPS', 
		    Name:'Space-Based GPS Receiver (Prelim)', 
		    Manufacturer:'SSBV', 
		    Reference:'http://www.ssbv.com/ProductDatasheets/page39/page26/index.html', 
		    Heritage:'In development, TRL 1-3', 
		    Mass:'30', 
		    Power:'1', 
		    Volume:'0.005', 
		    Proportions:'5cm x 2cm x .5cm', 
		    Angle_prec:'Unknown', 
		    Ac_sensors:'', 
		    Scientific_obj:'Position accuracy <10 m, velocity accuracy <25 cm/s. 10 krad total dose', 
		    Cost:0
  		});

  		sensor1.save();
  		sensor2.save();
  		sensor3.save();
  		sensor4.save();
  		sensor5.save();
  		sensor6.save();
  		sensor7.save();
  		sensor8.save();
  		sensor9.save();
  		sensor10.save();
  		sensor11.save();
  		sensor12.save();
  		sensor13.save();
  		sensor14.save();
  		sensor15a.save();
  		sensor15b.save();
  		sensor16.save();
  		sensor17.save();
  		acs1a.save();
  		acs1b.save();
  		acs2.save();
  		acs3.save();
  		acs4.save();
  		acs6.save();
  		actuator1.save();
  		actuator2.save();
	};

	this.getPart = function(query,res) {
		this.attitude_parts.find(query, function(error,output) {
			res.json(output);
		});
	};

	this.putPart = function(req, res) {
		var newpart = new this.attitude_parts({
			Type: req.body.Type,
			Type_further: req.body.Type_further,
			Name: req.body.Name,
			Manufacturer: req.body.Manufacturer,
			Reference: req.body.Reference,
			Heritage: req.body.Heritage,
			Mass: req.body.Mass,
			Power: req.body.Power,
			Volume: req.body.Volume,
			Proportions: req.body.Proportions,
			Angle_prec: req.body.Angle_prec,
			Ac_sensors: req.body.Ac_sensors,
			Scientific_obj: req.body.Scientific_obj,
			Cost: req.body.Cost
    	});
		newpart.save(function (error, output) {
			res.json(output);
		});
	};

	this.updatePart = function(req, res) {
		this.attitude_parts.update(
 		{
      		_id: req.params._id
    	}, 
    	{
			Type: req.body.Type,
			Type_further: req.body.Type_further,
			Name: req.body.Name,
			Manufacturer: req.body.Manufacturer,
			Reference: req.body.Reference,
			Heritage: req.body.Heritage,
			Mass: req.body.Mass,
			Power: req.body.Power,
			Volume: req.body.Volume,
			Proportions: req.body.Proportions,
			Angle_prec: req.body.Angle_prec,
			Ac_sensors: req.body.Ac_sensors,
			Scientific_obj: req.body.Scientific_obj,
			Cost: req.body.Cost
    	}, 
    	function(error, output) {
      		res.json(output);
    	});
	};

	this.removePart = function(req, res) {
    	this.attitude_parts.remove({
            _id: req.params._id
        }, function(err, output) {
            if (err)
                res.send(output);
            res.json({ message: 'Successfully deleted' });
        });
	};
}

module.exports = AttitudeFactory;