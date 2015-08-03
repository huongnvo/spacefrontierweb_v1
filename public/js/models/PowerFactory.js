var PowerFactory = function(Schema,mongoose) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		Schema = new this.Schema({
		    Type: String,
		    Name: String,
		    Manufacturer: String,
		    Reference: String,
		    Description: String,
		    Mass: String,
		    Power: String,
		    Volume: String,
		    Proportions: String,
		    Efficiency: String,
		    Objectives: String,
		    Energy_Storage: String,
		    PperWing: String,
		    Wings: String,
		    Cost: String,
		    Additional_info: String,
		});
		this.power_parts = mongoose.model('power_parts',Schema);
	}

	this.insertPart = function() {
		var sp1 = new this.power_parts({
			Type:'Solar Panels',
			Name:'NanoPower Solar Panels P110 Series',
			Manufacturer:'GOMspace',
			Reference:'http://gomspace.com/documents/GS-DS-P110-1.0.pdf',
			Description:'Two solar cells on a panel for a side of a 1 U cubesat. Includes course sun sensor,temperature sensor.',
			Mass:'29',
			Power:'2.4',
			Volume:'1',
			Proportions:'82.5x98x2.1',
			Efficiency: '30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'0',
			Wings: '0' ,
			Cost:'0',
			Additional_info: ''
		});

		var sp2 = new this.power_parts({
			Type:'Solar Panels',
			Name:'NanoPower Solar Panels P110 Series',
			Manufacturer:'GOMspace',
			Reference:'http://gomspace.com/documents/GS-DS-P110-1.0.pdf',
			Description:'Two solar cells on a panel for a side of a 1 U cubesat. Includes course sun sensor,temperature sensor.',
			Mass:'0',
			Power:'4.66',
			Volume:'2',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'0',
			Wings: '0' ,
			Cost:'0',
			Additional_info: ''
		});

		var sp3 = new this.power_parts({
			Type:'Solar Panels',
			Name:'NanoPower Solar Panels P110 Series',
			Manufacturer:'GOMspace',
			Reference:'http://gomspace.com/documents/GS-DS-P110-1.0.pdf',
			Description:'Two solar cells on a panel for a side of a 1 U cubesat. Includes course sun sensor,temperature sensor.',
			Mass:'0',
			Power:'6.99',
			Volume:'3',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'0',
			Wings: '0' ,
			Cost:'0',
			Additional_info: ''
		});

		var sp4 = new this.power_parts({
			Type:'Solar Panels',
			Name:'NanoPower Solar Panels P110 Series',
			Manufacturer:'GOMspace',
			Reference:'http://gomspace.com/documents/GS-DS-P110-1.0.pdf',
			Description:'Two solar cells on a panel for a side of a 1 U cubesat. Includes course sun sensor,temperature sensor.',
			Mass:'0',
			Power:'14',
			Volume:'6',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'0',
			Wings: '0' ,
			Cost:'0',
			Additional_info: ''
		});

		var sp5 = new this.power_parts({
			Type:'Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'42',
			Power:'2.1',
			Volume:'1',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'0',
			Wings: '0',
			Cost:'0',
			Additional_info: ''
		});

		var sp6 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'42',
			Power:'4.2',
			Volume:'1',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'1',
			Wings: '1' ,
			Cost:'0',
			Additional_info: ''
		});

		var sp7 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'42',
			Power:'6.2',
			Volume:'1',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'1',
			Wings: '2' ,
			Cost:'0',
			Additional_info: ''
		});

		var sp8 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'42',
			Power:'4.2',
			Volume:'1',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'2',
			Wings: '1' ,
			Cost:'0',
			Additional_info: ''
		});

		var sp9 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'42',
			Power:'8.3',
			Volume:'1',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'2',
			Wings: '2',
			Cost:'0',
			Additional_info: ''
		});

		var sp10 = new this.power_parts({
			Type:'Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'69',
			Power:'5.2',
			Volume:'2',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'0',
			Wings: '0',
			Cost:'0',
			Additional_info: ''
		});

		var sp11 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'69',
			Power:'10.4',
			Volume:'2',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'1',
			Wings: '1',
			Cost:'0',
			Additional_info: ''
		});

		var sp12 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'69',
			Power:'15.6',
			Volume:'2',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'1',
			Wings: '2',
			Cost:'0',
			Additional_info: ''
		});

		var sp13 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'69',
			Power:'10.4',
			Volume:'2',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'2',
			Wings: '1',
			Cost:'0',
			Additional_info: ''
		});

		var sp14 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'69',
			Power:'20.8',
			Volume:'2',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'2',
			Wings: '2',
			Cost:'0',
			Additional_info: ''
		});

		var sp15 = new this.power_parts({
			Type:'Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'135',
			Power:'7.3',
			Volume:'3',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'0',
			Wings: '0',
			Cost:'0',
			Additional_info: ''
		});

		var sp16 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'135',
			Power:'14.6',
			Volume:'3',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'1',
			Wings: '1',
			Cost:'0',
			Additional_info: ''
		});

		var sp17 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'135',
			Power:'21.9',
			Volume:'3',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'1',
			Wings: '2',
			Cost:'0',
			Additional_info: ''
		});

		var sp18 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'135',
			Power:'14.6',
			Volume:'3',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'2',
			Wings: '1',
			Cost:'0',
			Additional_info: ''
		});

		var sp19 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'135',
			Power:'29.2',
			Volume:'3',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'2',
			Wings: '2',
			Cost:'0',
			Additional_info: ''
		});

		var sp20 = new this.power_parts({
			Type:'Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'290',
			Power:'18.78',
			Volume:'6',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'0',
			Wings: '0',
			Cost:'0',
			Additional_info: ''
		});

		var sp21 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'290',
			Power:'37.5',
			Volume:'6',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'1',
			Wings: '1',
			Cost:'0',
			Additional_info: ''
		});

		var sp22 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'290',
			Power:'56.3',
			Volume:'6',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'1',
			Wings: '2',
			Cost:'0',
			Additional_info: ''
		});

		var sp23 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'290',
			Power:'37.5',
			Volume:'6',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'2',
			Wings: '1',
			Cost:'0',
			Additional_info: ''
		});

		var sp24 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:'290',
			Power:'75',
			Volume:'6',
			Proportions:'',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Energy_Storage:'0',
			PperWing:'2',
			Wings: '2',
			Cost:'0',
			Additional_info: ''
		});

		var sp25 = new this.power_parts({
 			Type: 'Solar Panels',
 			Name:'ISIS CubeSat Solar Panels',
 			Manufacturer:'ISIS and Selex Galileo',
 			Reference:'http://www.isispace.nl/brochures/ISIS_Solar_Panels_v.12.4.pdf',
 			Description:'Compatible w/ all ISIS products',
 			Mass:'50',
 			Power:'2.3',
 			Volume:'1',
 			Proportions:'',
 			Efficiency:'28%',
 			Objectives:'Power generation,2 yrs min LEO',
 			Energy_Storage:'0',
 			PperWing:'0',
 			Wings:'0',
 			Cost:'0',
			Additional_info: ''
 		});
 		var sp26 = new this.power_parts({
  			Type: 'Solar Panels',
  			Name:'ISIS CubeSat Solar Panels',
  			Manufacturer:'ISIS and Selex Galileo',
  			Reference:'http://www.isispace.nl/brochures/ISIS_Solar_Panels_v.12.4.pdf',
  			Description:'Compatible w/ all ISIS products',
  			Mass:'100',
  			Power:'4.6',
  			Volume:'2',
  			Proportions:'',
  			Efficiency:'28%',
  			Objectives:'Power generation,2 yrs min LEO',
  			Energy_Storage:'0',
 			PperWing:'0',
  			Wings:'0',
  			Cost:'0',
			Additional_info: ''
		});

		var sp27 = new this.power_parts({
			Type:'Solar Panels',
			Name:'ISIS CubeSat Solar Panels',
			Manufacturer:'ISIS and Selex Galileo',
			Reference:'http://www.isispace.nl/brochures/ISIS_Solar_Panels_v.12.4.pdf',
			Description:'Compatible w/ all ISIS products',
  			Mass:'150',
  			Power:'6.9',
  			Volume:'3',
  			Proportions:'',
  			Efficiency:'28%',
			Objectives:'Power generation,2 yrs min LEO',
			Energy_Storage:'0',
			PperWing:'0',
			Wings:'0',
			Cost:'0',
			Additional_info: ''
		});

		var sp28 = new this.power_parts({
			Type: 'Solar Panels',
			Name:'ISIS CubeSat Solar Panels',
			Manufacturer:'ISIS and Selex Galileo',
			Reference:'http://www.isispace.nl/brochures/ISIS_Solar_Panels_v.12.4.pdf',
			Description:'Compatible w/ all ISIS products',
  			Mass:'300',
  			Power:'13.8',
  			Volume:'6',
  			Proportions:'',
  			Efficiency:'28%',
  			Objectives:'Power generation,2 yrs min LEO',
  			Energy_Storage:'0',
  			PperWing:'0',
  			Wings:'0',
			Cost:'0',
			Additional_info: ''
		});
		var sp29 = new this.power_parts({
			Type:'Battery',
			Name:'NanoPower BP4',
			Manufacturer:'GOMspace',
			Reference:'http://gomspace.com/documents/gs-ds-bp4.pdf',
			Description:'Quad-battery lithium ion.Includes PCB and switch. 2 versions (6-8.4 V and 12-16.8 V). Battery heater optional',
  			Mass:'240',
  			Power:'0',
  			Volume:'0.1903',
  			Proportions:'94x88x23',
  			Efficiency:'',
 			Objectives:'Power storage',
 			Energy_Storage:'38.5',
  			PperWing:'0',
  			Wings:'0',
  			Cost:'0',
			Additional_info: ''
  		});
	  	var sp30 = new this.power_parts({
			Type:'Battery',
			Name:'NanoPower BPx',
			Manufacturer:'GOMspace',
			Reference:'http://gomspace.com/documents/gs-ds-nanopower-bpx-1.0-1.pdf',
			Description:'Lithium ion battery pack,6-8 batteries. Units. can be combined in series/parallel. Configurable for different batteries. Includes temperature sensors.',
	  		Mass:'400',
	  		Power:'0',
	  		Volume:'0',
	  		Proportions:'',
	  		Efficiency:'',
			Objectives:'Power storage,power housekeeping and temperature sensing. (1 deg C resolution)',
			Energy_Storage:'49.4',
	  		PperWing:'0',
			Wings:'0',
			Cost:'0',
			Additional_info: ''
		});
		var sp31 = new this.power_parts({
			Type:'Power Control Unit',
			Name:'XB1 Modular Cubesat Bus',
			Manufacturer:'Blue Canyon Technology',
			Reference:'http://bluecanyontech.com/product/xb1/',
			Description:'Module includes high precision atittude control,C&DH,EPS,and communication all in one package. Many options,configurableflight software,and many propulsion and payload interfaces included. Not yet flown,TRL 4-6',
			Mass:'1500',
			Power:'0',
			Volume:'1',
			Proportions:'100x100x100',
			Efficiency:'',
			Objectives:'',
			Energy_Storage:'25',
			PperWing:'0',
			Wings:'0',
			Cost:'0',
			Additional_info: ''
		});
		var sp32 = new this.power_parts({
			Type:'Power Control Unit',
			Name:'NanoPower P31us',
			Manufacturer:'GOMspace',
			Reference:'http://gomspace.com/documents/gs-ds-nanopower-p31u-9.0.pdf',
			Description:'Flown on GomX-1,Funcube,Triton-1. Optimized for 1U,2U,3U cubesats,12-16.8 V batteries,4+ solar cells',
			Mass:'270',
			Power:'0',
			Volume:'0.225',
			Proportions:'96x90x26',
			Efficiency:'',
			Objectives:'Power control,housekeeping',
			Energy_Storage:'0',
			PperWing:'0',
			Wings:'0',
			Cost:'0',
			Additional_info: ''
		});

		var sp33 = new this.power_parts({
			Type:'Power Control Unit',
			Name:'NanoPower P31u',
			Manufacturer:'GOMspace',
			Reference:'http://gomspace.com/documents/gs-ds-nanopower-p31u-9.0.pdf',
			Description:'Flown on GomX-1,Funcube,Triton-1. Optimized for 1U,2U,3U cubesats,6-8.4 V batteries. Includes batteries',
			Mass:'200',
			Power:'0',
			Volume:'0.138',
			Proportions:'96x90x16',
			Efficiency:'',
			Objectives:'Power control,housekeeping',
			Energy_Storage:'0',
			PperWing:'0',
			Wings:'0',
			Cost:'0',
			Additional_info: ''
		});

		var sp34 = new this.power_parts({
			Type:'Power Control Unit',
			Name:'CubeSat EPS (Available for 1,1.5,2,and 3U)',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/eps/8_1u-cubesat-eps',
			Description:'over 200 sold. TRL 7-9. Compatible w/ lithium ion and lithium polymer batteries.. Can be operated in parallel for increased power handling',
			Mass:'83',
			Power:'0',
			Volume:'110',
			Proportions:'',
			Efficiency:'',
			Objectives:'Power control,housekeeping,BRC Eff 03-91%',
			Energy_Storage:'0',
			PperWing:'0',
			Wings:'0',
			Cost:'0',
			Additional_info: ''
		});

		var sp35 = new this.power_parts({
			Type:'Battery',
			Name:'Cubesat Standalone Battery',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/batteries/16_cubesat-standalone-battery',
			Description:'Lithium polymer battery. Many versions,including custom. Integrated battery heater. Can be connected in parallel.',
			Mass:'133.3',
			Power:'0',
			Volume:'0',
			Proportions:'',
			Efficiency:'',
			Objectives:'Power storage',
			Energy_Storage:'10',
			PperWing:'0',
			Wings:'0',
			Cost:'0',
			Additional_info: ''
		});

		var sp36 = new this.power_parts({
			Type:'Battery',
			Name:'Remote Battery Board',
			Manufacturer:'Clyde',
			Reference:'http://www.clyde-space.com/cubesat_shop/batteries/210_remote-battery-board',
			Description:'Lithium polymer battery. Integrated heater',
			Mass:'66.6',
			Power:'0',
			Volume:'0',
			Proportions:'',
			Efficiency:'',
			Objectives:'Power storage',
			Energy_Storage:'10',
			PperWing:'0',
			Wings:'0',
			Cost:'0',
			Additional_info: ''
		});

		var sp37 = new this.power_parts({
			Type:'Battery',
			Name:'Polymer Li-Ion Rechargeable Battery',
			Manufacturer:'',
			Reference:'',
			Description:'Flown on MCubed',
			Mass:'0',
			Power:'0',
			Volume:'0',
			Proportions:'',
			Efficiency:'',
			Objectives:'',
			Energy_Storage:'3.9',
			PperWing:'0',
			Wings:'0',
			Cost:'0',
			Additional_info: ''
		});
		var sp38 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'HaWK Nanosat Solar Array',
			Manufacturer:'MMA Design',
			Reference:'http://www.mmadesignllc.com/products/hawk-and-e-hawk-nanosat-solar-arrays',
			Description:'TRL 4-6. Planned flight on Ors-2 cubesat,2015. Includes Sun tracker',
			Mass:'500',
			Power:'36',
			Volume:'3',
			Proportions:'',
			Efficiency:'',
			Objectives:'power generation,attitude determination,2 yrs',
			Energy_Storage:'0',
			PperWing:'3',
			Wings:'2',
			Cost:'0',
			Additional_info: ''
		});

		var sp39 = new this.power_parts({
			Type:'Deployed Solar Panels',
			Name:'HaWK Nanosat Solar Array',
			Manufacturer:'MMA Design',
			Reference:'http://www.mmadesignllc.com/products/hawk-and-e-hawk-nanosat-solar-arrays',
			Description:'TRL 4-6. Planned flight on Ors-2 cubesat,2015. Includes Sun tracker',
			Mass:'500',
			Power:'36',
			Volume:'6',
			Proportions:'',
			Efficiency:'',
			Objectives:'power generation,attitude determination,2 yrs',
			Energy_Storage:'0',
			PperWing:'3',
			Wings:'2',
			Cost:'0',
			Additional_info: ''
		});
		var sp40 = new this.power_parts({
			Type:'Power Control Unit',
			Name:'XEPS CubeSat Electrical Power System',
			Manufacturer:'Blue Canyon Technology',
			Reference:'http://bluecanyontech.com/wp-content/uploads/2013/06/BCT-EPS-Board-Information-Sheet-1.0.pdf',
			Description:'charge algorith BCT Lithium-Ion MaxLife',
			Mass:'0',
			Power:'0',
			Volume:'0',
			Proportions:'',
			Efficiency:'',
			Objectives:'',
			Energy_Storage:'0',
			PperWing:'0',
			Wings:'0',
			Cost:'0',
			Additional_info: ''
		});
		var sp41 = new this.power_parts({
			Type:'Cubesat Bus',Name:'Intrepid Platform (3U)',
			Manufacturer:'Tyvak',
			Reference:'http://tyvak.com/intrepid-suite-1-1/',
			Description:'',
			Mass:'1200',
			Power:'3',
			Volume:'3',
			Proportions:'',
			Efficiency:'',
			Objectives:'',
			Energy_Storage:'15',
			PperWing:'0',
			Wings:'0',
			Cost:'0',
			Additional_info: ''
		});

		var sp42 = new this.power_parts({
			Type:'Solar Panels',
			Name:'6U Solar Panel',
			Manufacturer:'Andrews Space',
			Reference:'http://andrews-space.com/solar-panels/',
			Description:'Comes with sun sensors. 16 High Efficiency (30%) Triple Junction GaAs solar cells with cover glass',
			Mass:'0',
			Power:'19.4',
			Volume:'6',
			Proportions:'340x180x2.4',
			Efficiency:'30%',
			Objectives:'',
			Energy_Storage:'0',
			PperWing:'0',
			Wings:'0',
			Cost:'17500',
			Additional_info: ''
		});

		var sp43 = new this.power_parts({
			Type:'Power Control Unit',
			Name:'Cortex 130 Electrical Power Subsystem Card',
			Manufacturer:'',
			Reference:'http://static.squarespace.com/static/5020983784ae954efd30c570/t/521b84dee4b0cb130b874367/1377535198321/201308%20-%20CORTEX%20130%20Datasheet.pdf',
			Description:'Supports Andrews solar panels. Xilinx Virtex 4LX FPGA',
			Mass:'341',
			Power:'3.08',
			Volume:'0',
			Proportions:'105.4x160x19',
			Efficiency:'',
			Objectives:'Lifetime 3 yrs on orbit,15 krad total dose',
			Energy_Storage:'0',
			PperWing:'0',
			Wings:'0',
			Cost:'35000',
			Additional_info: ''
		});

		sp1.save();
		sp2.save();
		sp3.save();
		sp4.save();
		sp5.save();
		sp6.save();
		sp7.save();
		sp8.save();
		sp9.save();
		sp10.save();
		sp11.save();
		sp12.save();
		sp13.save();
		sp14.save();
		sp15.save();
		sp16.save();
		sp17.save();
		sp18.save();
		sp19.save();
		sp20.save();
		sp21.save();
		sp22.save();
		sp23.save();
		sp24.save();
		sp25.save();
		sp26.save();
		sp27.save();
		sp28.save();
		sp29.save();
		sp30.save();
		sp31.save();
		sp32.save();
		sp33.save();
		sp34.save();
		sp35.save();
		sp36.save();
		sp37.save();
		sp38.save();
		sp39.save();
		sp40.save();
		sp41.save();
		sp42.save();
		sp43.save();
	}

	this.getPart = function(query,res) {
		this.power_parts.find(query,function(error,output) {
			res.json(output);
		});
	}


	this.putPart = function(req, res) {
		var newpart = new this.power_parts({
		    Type: req.body.Type,
		    Name: req.body.Name,
		    Manufacturer: req.body.Manufacturer,
		    Reference: req.body.Reference,
		    Description: req.body.Description,
		    Mass: req.body.Mass,
		    Power: req.body.Power,
		    Volume: req.body.Volume,
		    Proportions: req.body.Proportions,
		    Efficiency: req.body.Efficiency,
		    Objectives: req.body.Objectives,
		    Energy_Storage: req.body.Energy_Storage,
		    PperWing: req.body.PperWing,
		    Wings: req.body.Wings,
		    Cost: req.body.Cost,
		    Additional_info: req.body.Additional_info
    	});
		newpart.save(function (error, output) {
			res.json(output);
		});
	};

	this.updatePart = function(req, res) {
		this.power_parts.remove({
            _id: req.params._id
        }, 
    	{
		    Type: req.body.Type,
		    Name: req.body.Name,
		    Manufacturer: req.body.Manufacturer,
		    Reference: req.body.Reference,
		    Description: req.body.Description,
		    Mass: req.body.Mass,
		    Power: req.body.Power,
		    Volume: req.body.Volume,
		    Proportions: req.body.Proportions,
		    Efficiency: req.body.Efficiency,
		    Objectives: req.body.Objectives,
		    Energy_Storage: req.body.Energy_Storage,
		    PperWing: req.body.PperWing,
		    Wings: req.body.Wings,
		    Cost: req.body.Cost,
		    Additional_info: req.body.Additional_info
    	},  
    	function(error, output) {
      		res.json(output);
    	});
	};

	this.removePart = function(req, res) {
    	this.power_parts.remove({
            _id: req.params._id
        }, function(err, output) {
            if (err)
                res.send(output);
            res.json({ message: 'Successfully deleted' });
        });
	};
}

module.exports = PowerFactory;