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
			Mass: Number,
			Mass_further: String,
			Power: Number,
			Power_further: String,
			Volume: Number,
			Proportions: String,
			Volume_further: String,
			Angle_prec: Number,
			Attitude_control_further: String,
			Ac_sensors: String,
			Scientific_obj: String,
			Venue: String,
			Temp_low: Number,
			Temp_high: Number,
			Datarate: Number,
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
		    Mass:5, 
		    Mass_further:'less than', 
		    Power:0, 
		    Power_further:'<10 mA,', 
		    Volume:0.00218, 
		    Proportions:'33x11x6', 
		    Volume_further:'', 
		    Angle_prec:0.5, 
		    Attitude_control_further:'less than', 
		    Ac_sensors:'114 deg', 
		    Scientific_obj:'Determines Sun angle vector, attitude/location, Need 6 for full sky coverage, 10 krad total dose', 
		    Venue:'', 
		    Temp_low:-25, 
		    Temp_high:50, 
		    Datarate:0, 
		    Cost:0
	  	});
		
		var sensor2 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Sun Sensor', 
		    Name:'SS-411 Two-Axis Digital Sun Sensor', 
		    Manufacturer:'Sinclair Interplanetary', 
		    Reference:'http://www.sinclairinterplanetary.com/digitalsunsensors', 
		    Heritage:'In use on 22 orbital satellites. TRL 7-9', 
		    Mass:0, 
		    Mass_further:'', 
		    Power:0, 
		    Power_further:'', 
		    Volume:0.0228, 
		    Proportions:'34x32x21', 
		    Volume_further:'', 
		    Angle_prec:1, 
		    Attitude_control_further:'', 
		    Ac_sensors:'140 deg', 
		    Scientific_obj:'Determines Sun angle vector, attitude/location in 2 axes, 20 krad total dose, 16 grms random vibration, 5000 g shock', 
		    Venue:'', 
		    Temp_low:-25, 
		    Temp_high:50, 
		    Datarate:0, 
		    Cost:0
	  	});

	  	var actuator1 = new this.attitude_parts({ 
		    Type:'Actuator',
		    Type_further:'Reaction Wheel', 
		    Name:'MAI-101 Miniature 3 Axis Reaction Wheel', 
		    Manufacturer:'Maryland Aerospace', 
		    Reference:'http://www.miniadacs.com/linked/mai-101%20specification%203-18-11.pdf', 
		    Heritage:'Developed by Maryland Aerospace, sold on cubesatshop, 3 wheel assembly, reaction wheel only version of MAI-100. TRL 4-6', 
		    Mass:640, 
		    Mass_further:'', 
		    Power:4, 
		    Power_further:'12-28 V @ 200 mA', 
		    Volume:0.4045, 
		    Proportions:'76x76.2x69.85', 
		    Volume_further:'', 
		    Angle_prec:NaN, 
		    Attitude_control_further:'', 
		    Ac_sensors:'Max torque .635 mNm', 
		    Scientific_obj:'Precise aiming/stability in 3 axes, Must dump angular momentum, 30 krad total dose, >12 grms', 
		    Venue:'', 
		    Temp_low:-40, 
		    Temp_high:80, 
		    Datarate:0, 
		    Cost:0
	  	});

		var actuator2 = new this.attitude_parts({ 
		    Type:'Actuator',
		    Type_further:'Magnetorquer', 
		    Name:'Cubesat Magnetorque Rod (magnetic torque rod)', 
		    Manufacturer:'SSBV', 
		    Reference:'http://www.ssbv.com/ProductDatasheets/page27/index.html', 
		    Heritage:'Available on cubesatshop, Flight tested on BADR-B (cubesat), Fedsat, and MicroLabSat (smallsat). Scaled for cubesat system. TRL 7-9.', 
		    Mass:30, 
		    Mass_further:'', 
		    Power:0.2, 
		    Power_further:'200 mW @ 5 V', 
		    Volume:0, 
		    Proportions:'length 7 cm', 
		    Volume_further:'', 
		    Angle_prec:NaN, 
		    Attitude_control_further:'', 
		    Ac_sensors:'Magnetic moment >.2 Am^2, Lifetime > 10 yrs', 
		    Scientific_obj:'attitude control in 3 axes, momentum dumping of reaction wheels, magnetic field required for attitude control. Bonded directly to PCB', 
		    Venue:'', 
		    Temp_low:-35, 
		    Temp_high:75, 
		    Datarate:0, 
		    Cost:0
		});

		var sensor3 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Star Tracker', 
		    Name:'BCT Nano star tracker', 
		    Manufacturer:'Blue Canyon Technology', 
		    Reference:'http://bluecanyontech.com/wp-content/uploads/2013/06/BCT-Nano-Star-Tracker-datasheet-1.1.pdf', 
		    Heritage:'Available on cubesatshop, Planned flight on INSPIRE. TRL 4-6', 
		    Mass:350, 
		    Mass_further:'', 
		    Power:0.5, 
		    Power_further:'', 
		    Volume:0.3365, 
		    Proportions:'100x67.3x50', 
		    Volume_further:'', 
		    Angle_prec:0.001667, 
		    Attitude_control_further:'Bore-sight: 6 arcsec Roll axis: 40 arcsec', 
		    Ac_sensors:'9x12 deg', 
		    Scientific_obj:'Detects stars as dim as 7 M, star identification. Includes >10,000 star catalog onboard, standby mode (.25 W). Lifetime > 1 yr, 2 sec attitude determination time', 
		    Venue:'', 
		    Temp_low:-300, 
		    Temp_high:-300, 
		    Datarate:0, 
		    Cost:0
		});

		var sensor4 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Star Tracker', 
		    Name:'BCT Thin-Slice Nano star tracker', 
		    Manufacturer:'Blue Canyon Technology', 
		    Reference:'http://bluecanyontech.com/all_products/star-trackers/', 
		    Heritage:'Available on cubesatshop, For volume-constrained cubesat missions. Planned flight on INSPIRE? TRL 4-6', 
		    Mass:0, 
		    Mass_further:'', 
		    Power:0, 
		    Power_further:'', 
		    Volume:0.3041, 
		    Proportions:'96x96x33', 
		    Volume_further:'', 
		    Angle_prec:NaN, 
		    Attitude_control_further:'', 
		    Ac_sensors:'', 
		    Scientific_obj:'', 
		    Venue:'', 
		    Temp_low:-300, 
		    Temp_high:-300, 
		    Datarate:0, 
		    Cost:0
		});

		var acs1 = new this.attitude_parts({ 
		    Type:'ACS',
		    Type_further:'Attitude Control System (ACS)', 
		    Name:'MAI-100 3-Axis ADACS', 
		    Manufacturer:'Maryland Aerospace', 
		    Reference:'http://www.ati-space.com/ATI.files/11_index.files/MAI-100%20Specification%20ATI%207-30-10.pdf', 
		    Heritage:'Developed by Maryland Aerospace, Contains MAI-101 Reaction wheel assembly, electromagnets, magnetometer, sun sensor, and OBC. Flight tested on QbX. TRL 7-9', 
		    Mass:865, 
		    Mass_further:'', 
		    Power:2.4, 
		    Power_further:'12 V dc @ 200 mA typical, 360 mA max', 
		    Volume:0.79, 
		    Proportions:'100x100x79', 
		    Volume_further:'', 
		    Angle_prec:1, 
		    Attitude_control_further:'', 
		    Ac_sensors:'Max torque .635 mNm.', 
		    Scientific_obj:'Precise aiming/stability in 3 axes in a fully autonomouse system. Detumbling of spacecraft on release, Must dump angular momentum, 30 krad total dose, >10 grms', 
		    Venue:'', 
		    Temp_low:-40, 
		    Temp_high:80, 
		    Datarate:0, 
		    Cost:0
	  	});

		var acs2 = new this.attitude_parts({ 
		    Type:'ACS',
		    Type_further:'Attitude Control System (ACS)', 
		    Name:'Microsat Control Moment Gyroscope', 
		    Manufacturer:'HoneyBee Robotics', 
		    Reference:'http://www.honeybeerobotics.com/wp-content/uploads/2014/03/Honeybee-Robotics-Microsat-CMGs.pdf', 
		    Heritage:'3 can be arranged for 3-axis control. Cubesat models available. TRL 4-6', 
		    Mass:0, 
		    Mass_further:'', 
		    Power:0, 
		    Power_further:'', 
		    Volume:0, 
		    Proportions:'', 
		    Volume_further:'', 
		    Angle_prec:NaN, 
		    Attitude_control_further:'', 
		    Ac_sensors:'112 mNm', 
		    Scientific_obj:'10 krad (electronics)', 
		    Venue:'', 
		    Temp_low:-20, 
		    Temp_high:85, 
		    Datarate:0, 
		    Cost:0 
  		});

  		var acs3 = new this.attitude_parts({ 
		    Type:'ACS',
		    Type_further:'Attitude Control System (ACS)', 
		    Name:'XACT Control System', 
		    Manufacturer:'Blue Canyon Technology', 
		    Reference:'http://bluecanyontech.com/wp-content/uploads/2012/07/BCT-XACT-datasheet-1.5.pdf', Heritage:'3 torque rods, IMU, magnetometer, sun sensors, star tracker, reaction wheel assembly. TRL 4-6', 
		    Mass:700, 
		    Mass_further:'', 
		    Power:0.5, 
		    Power_further:'peak 2 W', 
		    Volume:0.5, 
		    Proportions:'100x100x50', 
		    Volume_further:'', 
		    Angle_prec:0.003, 
		    Attitude_control_further:'.003 deg in 2 axes, .007 deg in 3d axis.', 
		    Ac_sensors:'Can rotate 8 kg cubesat at more than 10 deg/s', 
		    Scientific_obj:'Precise attitude determination/control in 3 axes, lifetime > 1 yr. Standby mode (.85 W)', 
		    Venue:'', 
		    Temp_low:-300, 
		    Temp_high:-300, 
		    Datarate:0, 
		    Cost:0
		});

  		var acs4 = new this.attitude_parts({
			Type:'ACS',
		    Type_further:'Attitude Control System (ACS)', 
		    Name:'MAI-400 ACS', 
		    Manufacturer:'Maryland Aerospace', 
		    Reference:'http://www.miniadacs.com/linked/2012-04-27%20mai-400%20a%20la%20carte%20specification.pdf', 
		    Heritage:'Available on cubesatshop, 3 reaction wheels, magnetometer, 2-camera Earth sensor, 3 torque rods, and on-board comp. A la cart part options. Not yet flown. TRL 4-6', 
		    Mass:694, 
		    Mass_further:'694 g (older version 907 g, but flight tested)', 
		    Power:0.46, 
		    Power_further:'', 
		    Volume:0.559, 
		    Proportions:'100x100x55.9', 
		    Volume_further:'', 
		    Angle_prec:0.2, 
		    Attitude_control_further:'Magnetometer +- 30000 nT, sun sensor +- 1 deg, Earth sensor +-.2 deg', 
		    Ac_sensors:'Max torque .625 mNm and addition magnetic moment arm .15 Am^2', 
		    Scientific_obj:'Attitude determination and control, multiple uses for parts', 
		    Venue:'', 
		    Temp_low:-300, 
		    Temp_high:-300, 
		    Datarate:4, 
		    Cost:0 
		});

		var acs5 = new this.attitude_parts({ 
		    Type:'ACS',
		    Type_further:'Attitude Control System (ACS)', 
		    Name:'MAI-100 Miniature 3-Axis ADACS', 
		    Manufacturer:'Maryland Aerospace.', 
		    Reference:'http://www.miniadacs.com/linked/2012-04-27%20mai-100%20specification.pdf', 
		    Heritage:'Contains MAI-101 Reaction wheel assembly, electromagnets, magnetometer, sun sensor, and OBC. Flight tested', 
		    Mass:865, 
		    Mass_further:'', 
		    Power:4.32, 
		    Power_further:'12 V dc @ 360 mA max', 
		    Volume:0.79, 
		    Proportions:'100x100x79', 
		    Volume_further:'', 
		    Angle_prec:0.1, 
		    Attitude_control_further:'', 
		    Ac_sensors:'Max torque .635 mNm', 
		    Scientific_obj:'Precise attitude determination/control in 3 axes, Magnetometer only works in LEO, 30 krad, 10 grms', 
		    Venue:'', 
		    Temp_low:-40, 
		    Temp_high:80, 
		    Datarate:0, 
		    Cost:0
		});

		var acs6 = new this.attitude_parts({ 
		    Type:'ACS',
		    Type_further:'Attitude Control System (ACS)', 
		    Name:'XB1 Modular Cubesat Bus', 
		    Manufacturer:'Blue Canyon Technology', 
		    Reference:'http://bluecanyontech.com/product/xb1/', 
		    Heritage:'Module includes high precision atittude control, C&DH, EPS, and communication all in one package. Many options, configurableflight software, and many propulsion and payload interfaces included. Not yet flown, TRL 4-6', 
		    Mass:1500, 
		    Mass_further:'', 
		    Power:2.5, 
		    Power_further:'less than, 12 +- 2 V', 
		    Volume:1, 
		    Proportions:'100x100x100', 
		    Volume_further:'2 modules, each 5x10x10 cm, stackable or side by side, 100x100x100 or 50x200x100 (mm)', 
		    Angle_prec:0.002, 
		    Attitude_control_further:'10 m, .15 m/s', 
		    Ac_sensors:'', 
		    Scientific_obj:'', 
		    Venue:'', 
		    Temp_low:-300, 
		    Temp_high:-300, 
		    Datarate:0, 
		    Cost:0
  		});

		var sensor5 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'GPS', 
		    Name:'SGR-05U-Space GPS Receiver', 
		    Manufacturer:'Surrey Satellite Technology', 
		    Reference:'http://www.sst-us.com/getdoc/d3991938-d829-4d05-82aa-3e421dc3d10a', 
		    Heritage:'Flown on 3 satellites. TRL 7-9', 
		    Mass:40, 
		    Mass_further:'antenna 12 g', 
		    Power:0.8, 
		    Power_further:'', 
		    Volume:0.0315, 
		    Proportions:'70x45x10', 
		    Volume_further:'', 
		    Angle_prec:NaN, 
		    Attitude_control_further:'Absolute position to 10 m, velocity to .15 m/s', 
		    Ac_sensors:'', 
		    Scientific_obj:'Orbital information (position, velocity, time), Designed for use in LEO with a patch antenna (antenna bought separately, quadrifilar antenna included), 10 krad, 90-180 s to first pitch', 
		    Venue:'', 
		    Temp_low:-20, 
		    Temp_high:50, 
		    Datarate:0, 
		    Cost:0 
  		});

  		var sensor6 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'GPS', 
		    Name:'SGR-05P-Space GPS Receiver', 
		    Manufacturer:'Surrey Satellite Technology', 
		    Reference:'http://www.sst-us.com/getdoc/9ee67dd2-b557-4818-95cc-b4b68ce8161c', 
		    Heritage:'More professional version of SGR-05U', 
		    Mass:60, 
		    Mass_further:'antenna 50 g', 
		    Power:1, 
		    Power_further:'', 
		    Volume:0.5104, 
		    Proportions:'145x110x32', 
		    Volume_further:'100x65x12. Antenna: 45x45x20 mm', 
		    Angle_prec:NaN, 
		    Attitude_control_further:'Absolute position to 10 m, velocity to .15 m/s', 
		    Ac_sensors:'', 
		    Scientific_obj:'Orbital information (position, velocity, time), Designed for use in LEO with a patch antenna (antenna included), 7 yrs in LEO, 10 krad, 90-180 s to first pitch', 
		    Venue:'', 
		    Temp_low:-20, 
		    Temp_high:50, 
		    Datarate:0,
		    Cost:0
  		});

  		var sensor7 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer', 
		    Name:'Magnetometer', 
		    Manufacturer:'Surrey Satellite Technology', 
		    Reference:'http://www.sstl.co.uk/Products/Subsystems/Actuators---Sensors/Sensors/Magnetometer', 
		    Heritage:'3-axis fluxgate magnetometer. Includes temp sensor. Flown on 30+ missions including Fedsat, BADR-B. TRL 7-9', 
		    Mass:190, 
		    Mass_further:'', 
		    Power:0.3, 
		    Power_further:'less than', 
		    Volume:0.0952, 
		    Proportions:'85x35x32', 
		    Volume_further:'', 
		    Angle_prec:NaN, 
		    Attitude_control_further:'Range +-60 uT, Sensitivity +-10 nT', 
		    Ac_sensors:'', 
		    Scientific_obj:'Attitude determination, magnetic field measurement, Designed for attitude sensing in LEO missions, 7 yrs in LEO', 
		    Venue:'', 
		    Temp_low:-20, 
		    Temp_high:50, 
		    Datarate:0, 
		    Cost:0
  		});

  		var sensor8 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Earth Sensor', 
		    Name:'MAI-SES Static Earth Sensor', 
		    Manufacturer:'Maryland Aerospace.', 
		    Reference:'http://www.miniadacs.com/linked/2012-04-27%20mai-ses%20specification.pdf', 
		    Heritage:'Available on cubesatshop, integrated into MAI-100/200', 
		    Mass:85, 
		    Mass_further:'', 
		    Power:0.36, 
		    Power_further:'12 V dc @ 30 mA', 
		    Volume:0, 
		    Proportions:'', 
		    Volume_further:'', 
		    Angle_prec:0.1, 
		    Attitude_control_further:'dip angle: .1 deg .5 deg accuracy in 2 axes', 
		    Ac_sensors:'', 
		    Scientific_obj:'Designed for use in LEO, requires temp. gradient in atmosphere edge, 30 krad, 10 grms', 
		    Venue:'', 
		    Temp_low:-40, 
		    Temp_high:80, 
		    Datarate:0, 
		    Cost:0
		});

		var sensor9 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer', 
		    Name:'Tri-Axial Magnetometer', 
		    Manufacturer:'ISIS', 
		    Reference:'http://www.cubesatshop.com/index.php?page=shop.product_details&flypage=flypage.tpl&product_id=90&category_id=7&option=com_virtuemart&Itemid=69', 
		    Heritage:'Available on cubesatship, anisotropic magnetoresistance', 
		    Mass:165, 
		    Mass_further:'sensor 15 g, electronics 150 g', 
		    Power:0.4, 
		    Power_further:'', 
		    Volume:0.0302, 
		    Proportions:'100x40x16', 
		    Volume_further:'sensor 10x10x5 mm, Electronics 90x30x11 mm', 
		    Angle_prec:1, 
		    Attitude_control_further:'estimation. measures 10-50,000 nT', 
		    Ac_sensors:'', 
		    Scientific_obj:'detect and measure magnetic fields. Attitude determination in Earth orbit', 
		    Venue:'orbital', 
		    Temp_low:-35, 
		    Temp_high:75, 
		    Datarate:0, 
		    Cost:0 
		});

		var sensor10 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer',
		    Name:'Tri-Axial Magnetometer', 
		    Manufacturer:'SSBV', 
		    Reference:'http://www.ssbv.com/resources/Datasheets/SSBV_Magnetometer_Datasheet_1g.pdf',
		    Heritage:'anisotropic magnetoresistance. Developed with Imperial College London, 3 flights in 2011-12. TRL 7-9', 
		    Mass:200, 
		    Mass_further:'20 g sensor, 180 g electronics', 
		    Power:0.4, 
		    Power_further:'', 
		    Volume:0.05202, 
		    Proportions:'85x36x17', 
		    Volume_further:'', 
		    Angle_prec:1, 
		    Attitude_control_further:'Estimation +-50,000 nT', 
		    Ac_sensors:'13 nT resolution', 
		    Scientific_obj:'10 krad total dose, 16g rms random vibration', 
		    Venue:'', 
		    Temp_low:-35, 
		    Temp_high:75, 
		    Datarate:0, 
		    Cost:0
	  	});

	  	var sensor11 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer', 
		    Name:'Helium Magnetometer', 
		    Manufacturer:'JPL', 
		    Reference:'http://cubesat.jpl.nasa.gov/projects/inspire/science.html', 
		    Heritage:'Based on full-sized instruments (Cassini). Planned flight on INSPIRE. TRL 4-6', 
		    Mass:500, 
		    Mass_further:'', 
		    Power:0, 
		    Power_further:'', 
		    Volume:0.5, 
		    Proportions:'', 
		    Volume_further:'', 
		    Angle_prec:1, 
		    Attitude_control_further:'estimation', 
		    Ac_sensors:'',
		    Scientific_obj:'detect and measure magnetic fields. Attitude determination in Earth orbit, Vector mode, Scalar mode', 
		    Venue:'orbital', 
		    Temp_low:0, 
		    Temp_high:-300, 
		    Datarate:0, 
		    Cost:0
  		});

  		var sensor12 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer', 
		    Name:'MAGIC Magnetometer', 
		    Manufacturer:'Imperial College London', 
		    Reference:'http://iopscience.iop.org/0957-0233/23/2/025902/pdf/0957-0233_23_2_025902.pdf', 
		    Heritage:'magnetoresistive. Planned flight on CINEMA. TRL 4-6', 
		    Mass:105, 
		    Mass_further:'sensor 20 g, rest electronics', 
		    Power:0.42, 
		    Power_further:'.14 W attitude mode, .42 W science mode', 
		    Volume:1.1728, 
		    Proportions:'', 
		    Volume_further:'10 cm^3 (sensor), 9x9.6x2 (cm) (electronics)', 
		    Angle_prec:1, 
		    Attitude_control_further:'estimation. Measures up to 57000 nT.', 
		    Ac_sensors:'Precision 25 nT attitude mode, 2-10 nT science mode.', 
		    Scientific_obj:'detect and measure magnetic fields. Attitude determination in Earth orbit, Designed to be mounted on boom for less spacecraft interference. Orbital', 
		    Venue:'', 
		    Temp_low:-50, 
		    Temp_high:120, 
		    Datarate:0, 
		    Cost:0
  		});

		var sensor13 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer', 
		    Name:'Smart Digital Magnetometer HMR2300', 
		    Manufacturer:'Honeywell', 
		    Reference:'http://www51.honeywell.com/aero/common/documents/myaerospacecatalog-documents/Missiles-Munitions/HMR2300.pdf', 
		    Heritage:'3-axis, flown on ESTCube, anisotropic magnetoresistive (AMR) tech, surface mounted', 
		    Mass:100, 
		    Mass_further:'', 
		    Power:0, 
		    Power_further:'low power and voltage', 
		    Volume:0.0000081, 
		    Proportions:'3x3x.9', 
		    Volume_further:'', 
		    Angle_prec:1, 
		    Attitude_control_further:'estimation +- 200000 nT', 
		    Ac_sensors:'70 uG', 
		    Scientific_obj:'detect and measure magnetic fields. Attitude determination in Earth orbit', 
		    Venue:'orbital', 
		    Temp_low:-40, 
		    Temp_high:85, 
		    Datarate:160, 
   			Cost:0
  		});

  		var sensor14 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer', 
		    Name:'3-Axis Magnetic Sensor Hybrid HMC2003', 
		    Manufacturer:'Honeywell', 
		    Reference:'https://physics.ucsd.edu/neurophysics/Manuals/Honeywell/HMC_2003.pdf', 
		    Heritage:'hybrid of HMR 1001/1002', 
		    Mass:0, 
		    Mass_further:'', 
		    Power:0, 
		    Power_further:'', 
		    Volume:0, 
		    Proportions:'', 
		    Volume_further:'', 
		    Angle_prec:1, 
		    Attitude_control_further:'estimation +- 200000 nT', 
		    Ac_sensors:'40 uG', 
		    Scientific_obj:'', 
		    Venue:'', 
		    Temp_low:-40, 
		    Temp_high:85, 
		    Datarate:0, 
		    Cost:0
		});

  		var sensor15 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Magnetometer', 
		    Name:'HMC 1001/1002 Integrated Circuit Magnetometer', 
		    Manufacturer:'Honeywell', 
		    Reference:'https://physics.ucsd.edu/neurophysics/Manuals/Honeywell/HMC%201001%20and%20HMC%201002.pdf', 
		    Heritage:'Single (1001) and Dual (1002) axis magnetometers. 3 axes when used together', 
		    Mass:0, 
		    Mass_further:'', 
		    Power:0, 
		    Power_further:'', 
		    Volume:0.00004826, 
		    Proportions:'190x25.4', 
		    Volume_further:'', 
		    Angle_prec:1, 
		    Attitude_control_further:'estimation +- 200000 nT', 
		    Ac_sensors:'40 uG', 
		    Scientific_obj:'', 
		    Venue:'', 
		    Temp_low:-55, 
		    Temp_high:150, 
		    Datarate:0, 
		    Cost:0
		});

		var sensor16 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'Sun Sensor', 
		    Name:'Fine Sun Sensor', 
		    Manufacturer:'SSBV', 
		    Reference:'http://www.ssbv.com/ProductDatasheets/page39/page25/index.html', 
		    Heritage:'', 
		    Mass:35, 
		    Mass_further:'', 
		    Power:0, 
		    Power_further:'7.5 mA ave, 26 mA peak, 28 V', 
		    Volume:0.02285, 
		    Proportions:'34x32x21', 
		    Volume_further:'', 
		    Angle_prec:0.1, 
		    Attitude_control_further:'', 
		    Ac_sensors:'', 
		    Scientific_obj:'140 deg FOV, 20 krad total dose', 
		    Venue:'', 
		    Temp_low:-25, 
		    Temp_high:50, 
		    Datarate:0,
		    Cost:0
  		});

  		var sensor17 = new this.attitude_parts({ 
		    Type:'Sensor',
		    Type_further:'GPS', 
		    Name:'Space-Based GPS Receiver (Prelim)', 
		    Manufacturer:'SSBV', 
		    Reference:'http://www.ssbv.com/ProductDatasheets/page39/page26/index.html', 
		    Heritage:'In development, TRL 1-3', 
		    Mass:30, 
		    Mass_further:'less than', 
		    Power:1, 
		    Power_further:'less than', 
		    Volume:0.005, 
		    Proportions:'50x20x5', 
		    Volume_further:'', 
		    Angle_prec:NaN, 
		    Attitude_control_further:'position accuracy <10 m, velocity accuracy <25 cm/s', 
		    Ac_sensors:'', 
		    Scientific_obj:'10 krad total dose', 
		    Venue:'', 
		    Temp_low:-10, 
		    Temp_high:50, 
		    Datarate:0, 
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
  		sensor15.save();
  		sensor16.save();
  		sensor17.save();
  		acs1.save();
  		acs2.save();
  		acs3.save();
  		acs4.save();
  		acs5.save();
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
			Mass_further: req.body.Mass_further,
			Power: req.body.Power,
			Power_further: req.body.Power_further,
			Volume: req.body.Volume,
			Proportions: req.body.Proportions,
			Volume_further: req.body.Volume_further,
			Angle_prec: req.body.Angle_prec,
			Attitude_control_further: req.body.Attitude_control_further,
			Ac_sensors: req.body.Ac_sensors,
			Scientific_obj: req.body.Scientific_obj,
			Venue: req.body.Venue,
			Temp_low: req.body.Temp_low,
			Temp_high: req.body.Temp_high,
			Datarate: req.body.Datarate,
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
			Mass_further: req.body.Mass_further,
			Power: req.body.Power,
			Power_further: req.body.Power_further,
			Volume: req.body.Volume,
			Proportions: req.body.Proportions,
			Volume_further: req.body.Volume_further,
			Angle_prec: req.body.Angle_prec,
			Attitude_control_further: req.body.Attitude_control_further,
			Ac_sensors: req.body.Ac_sensors,
			Scientific_obj: req.body.Scientific_obj,
			Venue: req.body.Venue,
			Temp_low: req.body.Temp_low,
			Temp_high: req.body.Temp_high,
			Datarate: req.body.Datarate,
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