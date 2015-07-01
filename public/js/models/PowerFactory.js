var PowerFactory = function(Schema,mongoose) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		Schema = new this.Schema({
		    Type: String,
		    Name: String,
		    Manufacturer: String,
		    Website: String,
		    Description: String,
		    Mass: Number,
		    Mass_further: String,
		    Power: Number,
		    Power_further: String,
		    Volume: Number,
		    Proportions: String,
		    Volume_further: String,
		    Efficiency: String,
		    Objectives: String,
		    Thermal_further: String,
		    Memory: String,
		    Temp_low: Number,
		    Temp_high: Number,
		    Energy_Storage: Number,
		    PperWing:Number,
		    Wings:Number,
		    Cost: Number
		});
		this.PowerParts = mongoose.model('PowerParts',Schema);
	}

	this.insertPart = function() {
		var sp1 = new this.PowerParts({
			Type:'Solar Panels',
			Name:'NanoPower Solar Panels P110 Series',
			Manufacturer:'GOMspace',
			Website:'http://gomspace.com/documents/GS-DS-P110-1.0.pdf',
			Description:'Two solar cells on a panel for a side of a 1 U cubesat. Includes course sun sensor,temperature sensor.',
			Mass:27.5,
			Mass_further:'26-29 g per side',
			Power:2.33,
			Power_further:'up to 2.3 W LEO. 2.27-2.4 W per side',
			Volume:1,
			Proportions:'82.5x98x2.1',
			Volume_further:'Designed for 1U cubesats',
			Efficiency: '30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: 'Temp sensors read -55 to 150 C',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:0,
			Wings: 0 ,
			Cost:0
		});

		var sp2 = new this.PowerParts({
			Type:'Solar Panels',
			Name:'NanoPower Solar Panels P110 Series',
			Manufacturer:'GOMspace',
			Website:'http://gomspace.com/documents/GS-DS-P110-1.0.pdf',
			Description:'Two solar cells on a panel for a side of a 1 U cubesat. Includes course sun sensor,temperature sensor.',
			Mass:0,
			Mass_further:'',
			Power:4.66,
			Power_further:'',
			Volume:2,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:0,
			Wings: 0 ,
			Cost:0
		});

		var sp3 = new this.PowerParts({
			Type:'Solar Panels',
			Name:'NanoPower Solar Panels P110 Series',
			Manufacturer:'GOMspace',
			Website:'http://gomspace.com/documents/GS-DS-P110-1.0.pdf',
			Description:'Two solar cells on a panel for a side of a 1 U cubesat. Includes course sun sensor,temperature sensor.',
			Mass:0,
			Mass_further:'',
			Power:6.99,
			Power_further:'',
			Volume:3,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:0,
			Wings: 0 ,
			Cost:0
		});

		var sp4 = new this.PowerParts({
			Type:'Solar Panels',
			Name:'NanoPower Solar Panels P110 Series',
			Manufacturer:'GOMspace',
			Website:'http://gomspace.com/documents/GS-DS-P110-1.0.pdf',
			Description:'Two solar cells on a panel for a side of a 1 U cubesat. Includes course sun sensor,temperature sensor.',
			Mass:0,
			Mass_further:'',
			Power:14,
			Power_further:'',
			Volume:6,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:0,
			Wings: 0 ,
			Cost:0
		});

		var sp5 = new this.PowerParts({
			Type:'Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:42,
			Mass_further:'44-60 g w/ all options',
			Power:2.1,
			Power_further:'',
			Volume:1,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:0,
			Wings: 0,
			Cost:0
		});

		var sp6 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:42,
			Mass_further:'44-60 g w/ all options',
			Power:4.2,
			Power_further:'',
			Volume:1,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:1,
			Wings: 1 ,
			Cost:0
		});

		var sp7 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:42,
			Mass_further:'44-60 g w/ all options',
			Power:6.2,
			Power_further:'',
			Volume:1,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:1,
			Wings: 2 ,
			Cost:0
		});

		var sp8 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:42,
			Mass_further:'44-60 g w/ all options',
			Power:4.2,
			Power_further:'',
			Volume:1,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:2,
			Wings: 1 ,
			Cost:0
		});

		var sp9 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:42,
			Mass_further:'44-60 g w/ all options',
			Power:8.3,
			Power_further:'',
			Volume:1,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:2,
			Wings: 2,
			Cost:0
		});

		var sp10 = new this.PowerParts({
			Type:'Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:69,
			Mass_further:'290-390 g',
			Power:5.2,
			Power_further:'',
			Volume:2,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:0,
			Wings: 0,
			Cost:0
		});

		var sp11 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:69,
			Mass_further:'',
			Power:10.4,
			Power_further:'',
			Volume:2,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:1,
			Wings: 1,
			Cost:0
		});

		var sp12 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:69,
			Mass_further:'',
			Power:15.6,
			Power_further:'',
			Volume:2,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:1,
			Wings: 2,
			Cost:0
		});

		var sp13 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:69,
			Mass_further:'',
			Power:10.4,
			Power_further:'',
			Volume:2,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:2,
			Wings: 1,
			Cost:0
		});

		var sp14 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:69,
			Mass_further:'',
			Power:20.8,
			Power_further:'',
			Volume:2,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:2,
			Wings: 2,
			Cost:0
		});

		var sp15 = new this.PowerParts({
			Type:'Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:135,
			Mass_further:'',
			Power:7.3,
			Power_further:'',
			Volume:3,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:0,
			Wings: 0,
			Cost:0
		});

		var sp16 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:135,
			Mass_further:'',
			Power:14.6,
			Power_further:'',
			Volume:3,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:1,
			Wings: 1,
			Cost:0
		});

		var sp17 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:135,
			Mass_further:'',
			Power:21.9,
			Power_further:'',
			Volume:3,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:1,
			Wings: 2,
			Cost:0
		});

		var sp18 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:135,
			Mass_further:'',
			Power:14.6,
			Power_further:'',
			Volume:3,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:2,
			Wings: 1,
			Cost:0
		});

		var sp19 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:135,
			Mass_further:'',
			Power:29.2,
			Power_further:'',
			Volume:3,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:2,
			Wings: 2,
			Cost:0
		});

		var sp20 = new this.PowerParts({
			Type:'Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:290,
			Mass_further:'',
			Power:18.78,
			Power_further:'',
			Volume:6,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:0,
			Wings: 0,
			Cost:0
		});

		var sp21 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:290,
			Mass_further:'',
			Power:37.5,
			Power_further:'',
			Volume:6,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:1,
			Wings: 1,
			Cost:0
		});

		var sp22 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:290,
			Mass_further:'',
			Power:56.3,
			Power_further:'',
			Volume:6,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:1,
			Wings: 2,
			Cost:0
		});

		var sp23 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:290,
			Mass_further:'',
			Power:37.5,
			Power_further:'',
			Volume:6,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:2,
			Wings: 1,
			Cost:0
		});

		var sp24 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'Small Satellite Solar Panels',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/solar_panels',
			Description:'Various paneling options. All include tempereature sensors,magnetorquers and sun sensors optional. Very customizable. Over 50 sold. TRL 7-9',
			Mass:290,
			Mass_further:'',
			Power:75,
			Power_further:'',
			Volume:6,
			Proportions:'',
			Volume_further:'Fits form factor of ISIS bus',
			Efficiency: '28-30%',
			Objectives:'Power generation,attitude determination. Sun sensors 1.85 deg accurate,magnetorquer torque .043 Am^2',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:2,
			Wings: 2,
			Cost:0
		});

		var sp25 = new this.PowerParts({
 			Type: 'Solar Panels',
 			Name:'ISIS CubeSat Solar Panels',
 			Manufacturer:'ISIS and Selex Galileo',
 			Website:'http://www.isispace.nl/brochures/ISIS_Solar_Panels_v.12.4.pdf',
 			Description:'Compatible w/ all ISIS products',
 			Mass:50,
 			Mass_further:'',
 			Power:2.3,
 			Power_further:'3 V (5 and 8 on demand),2.3 W',
 			Volume:1,Proportions:'',
 			Volume_further:'2 mm thickness,fits form factor',
 			Efficiency:'28%',
 			Objectives:'Power generation,2 yrs min LEO',
 			Thermal_further: '',
 			Temp_low:-40,
 			Temp_high:125,
 			Energy_Storage:0,
 			PperWing:0,
 			Wings:0,
 			Cost:0
 		});
 		var sp26 = new this.PowerParts({
  			Type: 'Solar Panels',
  			Name:'ISIS CubeSat Solar Panels',
  			Manufacturer:'ISIS and Selex Galileo',
  			Website:'http://www.isispace.nl/brochures/ISIS_Solar_Panels_v.12.4.pdf',
  			Description:'Compatible w/ all ISIS products',
  			Mass:100,
  			Mass_further:'',
  			Power:4.6,
  			Power_further:'3 V (5 and 8 on demand),4.6 W',
  			Volume:2,
  			Proportions:'',
  			Volume_further:'2 mm thickness,fits form factor',
  			Efficiency:'28%',
  			Objectives:'Power generation,2 yrs min LEO',
  			Thermal_further: '',
  			Temp_low:-40,
 			Temp_high:125,
 			Energy_Storage:0,
 			PperWing:0,
  			Wings:0,
  			Cost:0
		});

		var sp27 = new this.PowerParts({
			Type:'Solar Panels',
			Name:'ISIS CubeSat Solar Panels',
			Manufacturer:'ISIS and Selex Galileo',
			Website:'http://www.isispace.nl/brochures/ISIS_Solar_Panels_v.12.4.pdf',
			Description:'Compatible w/ all ISIS products',
  			Mass:150,
  			Mass_further:'',
  			Power:6.9,
  			Power_further:'3 V (5 and 8 on demand),6.9 W',
  			Volume:3,Proportions:'',
  			Volume_further:'2 mm thickness,fits form factor',
			Efficiency:'28%',
			Objectives:'Power generation,2 yrs min LEO',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:125,
			Energy_Storage:0,
			PperWing:0,
			Wings:0,
			Cost:0
		});

		var sp28 = new this.PowerParts({
			Type: 'Solar Panels',
			Name:'ISIS CubeSat Solar Panels',
			Manufacturer:'ISIS and Selex Galileo',
			Website:'http://www.isispace.nl/brochures/ISIS_Solar_Panels_v.12.4.pdf',
			Description:'Compatible w/ all ISIS products',
  			Mass:300,
  			Mass_further:'',
  			Power:13.8,Power_further:'3 V (5 and 8 on demand)',
  			Volume:6,Proportions:'',
  			Volume_further:'2 mm thickness,fits form factor',
  			Efficiency:'28%',
  			Objectives:'Power generation,2 yrs min LEO',
  			Thermal_further: '',
  			Temp_low:-40,
  			Temp_high:125,
  			Energy_Storage:0,
  			PperWing:0,
  			Wings:0,
			Cost:0
		});
		var sp29 = new this.PowerParts({
			Type:'Battery',
			Name:'NanoPower BP4',
			Manufacturer:'GOMspace',
			Website:'http://gomspace.com/documents/gs-ds-bp4.pdf',
			Description:'Quad-battery lithium ion.Includes PCB and switch. 2 versions (6-8.4 V and 12-16.8 V). Battery heater optional',
  			Mass:240,
  			Mass_further:'',
  			Power:0,
  			Power_further:'8.4 V,5200 mA,or 16.8 V,2600 mA',
  			Volume:0.1903,
  			Proportions:'94x88x23',
  			Volume_further:'',
 			Efficiency:'',
 			Objectives:'Power storage',
 			Thermal_further: '',
 			Temp_low:-300,
  			Temp_high:-300,
  			Energy_Storage:38.5,
  			PperWing:0,
  			Wings:0,
  			Cost:0
  		});
	  	var sp30 = new this.PowerParts({
			Type:'Battery',
			Name:'NanoPower BPx',
			Manufacturer:'GOMspace',
			Website:'http://gomspace.com/documents/gs-ds-nanopower-bpx-1.0-1.pdf',
			Description:'Lithium ion battery pack,6-8 batteries. Units. can be combined in series/parallel. Configurable for different batteries. Includes temperature sensors.',
	  		Mass:400,
	  		Mass_further:'approximate,depends on config,number of batteries',
	  		Power:0,
	  		Power_further:'',
	  		Volume:0,
	  		Proportions:'',
	  		Volume_further:'',
			Efficiency:'',
			Objectives:'Power storage,power housekeeping and temperature sensing. (1 deg C resolution)',
			Thermal_further: '',
			Temp_low:-40,
	  		Temp_high:125,
	  		Energy_Storage:'21.8-77 (depends on configuration)',
	  		PperWing:0,
			Wings:0,
			Cost:0
		});
		var sp31 = new this.PowerParts({
			Type:'Power Control Unit',
			Name:'XB1 Modular Cubesat Bus',
			Manufacturer:'Blue Canyon Technology',
			Website:'http://bluecanyontech.com/product/xb1/',
			Description:'Module includes high precision atittude control,C&DH,EPS,and communication all in one package. Many options,configurableflight software,and many propulsion and payload interfaces included. Not yet flown,TRL 4-6',
			Mass:1500,Mass_further:'',
			Power:0,Power_further:'',
			Volume:1,Proportions:'100x100x100',
			Volume_further:'2 modules,each 5x10x10 cm,stackable or side by side,100x100x100 or 50x200x100',
			Efficiency:'',
			Objectives:'',
			Thermal_further: '',
			Temp_low:0,
			Temp_high:0,
			Energy_Storage:25,
			PperWing:0,
			Wings:0,
			Cost:0
		});
		var sp32 = new this.PowerParts({
			Type:'Power Control Unit',
			Name:'NanoPower P31us',
			Manufacturer:'GOMspace',
			Website:'http://gomspace.com/documents/gs-ds-nanopower-p31u-9.0.pdf',
			Description:'Flown on GomX-1,Funcube,Triton-1. Optimized for 1U,2U,3U cubesats,12-16.8 V batteries,4+ solar cells',
			Mass:270,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:0.225,
			Proportions:'96x90x26',
			Volume_further:'',
			Efficiency:'',
			Objectives:'Power control,housekeeping',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:0,
			Wings:0,
			Cost:0
		});

		var sp33 = new this.PowerParts({
			Type:'Power Control Unit',
			Name:'NanoPower P31u',
			Manufacturer:'GOMspace',
			Website:'http://gomspace.com/documents/gs-ds-nanopower-p31u-9.0.pdf',
			Description:'Flown on GomX-1,Funcube,Triton-1. Optimized for 1U,2U,3U cubesats,6-8.4 V batteries. Includes batteries',
			Mass:200,
			Mass_further:'with batteries',
			Power:0,
			Power_further:'',
			Volume:0.138,
			Proportions:'96x90x16',
			Volume_further:'',
			Efficiency:'',Objectives:'Power control,housekeeping',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:0,
			Wings:0,
			Cost:0
		});

		var sp34 = new this.PowerParts({
			Type:'Power Control Unit',
			Name:'CubeSat EPS (Available for 1,1.5,2,and 3U)',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/eps/8_1u-cubesat-eps',
			Description:'over 200 sold. TRL 7-9. Compatible w/ lithium ion and lithium polymer batteries.. Can be operated in parallel for increased power handling',
			Mass:83,
			Mass_further:'80-140 g,depends on model. 83 g for 3U,up to 140 for XU',
			Power:0,
			Power_further:'',
			Volume:110,
			Proportions:'',
			Volume_further:'1 U - 3 U versions,13-15 mm (height)',
			Efficiency:'',
			Objectives:'Power control,housekeeping,BRC Eff 03-91%',
			Thermal_further: '',
			Temp_low:-40,
			Temp_high:85,
			Energy_Storage:0,
			PperWing:0,
			Wings:0,
			Cost:0
		});

		var sp35 = new this.PowerParts({
			Type:'Battery',
			Name:'Cubesat Standalone Battery',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/batteries/16_cubesat-standalone-battery',
			Description:'Lithium polymer battery. Many versions,including custom. Integrated battery heater. Can be connected in parallel.',
			Mass:133.3,
			Mass_further:'about 6.67 g/Whr',
			Power:0,Power_further:'8.2 V and 32.8 V standard,configurable',
			Volume:0,Proportions:'',
			Volume_further:'',
			Efficiency:'',
			Objectives:'Power storage',
			Thermal_further: '',
			Temp_low:-300,
			Temp_high:-300,
			Energy_Storage:'10,20,or 30',
			PperWing:0,
			Wings:0,
			Cost:0
		});

		var sp36 = new this.PowerParts({
			Type:'Battery',
			Name:'Remote Battery Board',
			Manufacturer:'Clyde',
			Website:'http://www.clyde-space.com/cubesat_shop/batteries/210_remote-battery-board',
			Description:'Lithium polymer battery. Integrated heater',
			Mass:66.6,Mass_further:'about 6.67 g/Whr',
			Power:0,Power_further:'8.2 V',
			Volume:0,Proportions:'',
			Volume_further:'',
			Efficiency:'',
			Objectives:'Power storage',
			Thermal_further: '',
			Temp_low:-300,
			Temp_high:-300,Energy_Storage:10,PperWing:0,
			Wings:0,
			Cost:0
		});

		var sp37 = new this.PowerParts({
			Type:'Battery',
			Name:'Polymer Li-Ion Rechargeable Battery',
			Manufacturer:'',
			Website:'',
			Description:'Flown on MCubed',
			Mass:0,
			Mass_further:'',
			Power:0,Power_further:'',
			Volume:0,
			Proportions:'',
			Volume_further:'',
			Efficiency:'',
			Objectives:'',
			Thermal_further: '',
			Temp_low:0,
			Temp_high:0,
			Energy_Storage:3.9,
			PperWing:0,
			Wings:0,
			Cost:0
		});
		var sp38 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'HaWK Nanosat Solar Array',
			Manufacturer:'MMA Design',
			Website:'http://www.mmadesignllc.com/products/hawk-and-e-hawk-nanosat-solar-arrays',
			Description:'TRL 4-6. Planned flight on Ors-2 cubesat,2015. Includes Sun tracker',
			Mass:500,
			Mass_further:'',
			Power:36,
			Power_further:'36 W peak power (scales up 140 W/kg)',
			Volume:3,Proportions:'',
			Volume_further:'uses space btw P-POD and cubesat (6.5 mm). For 3U',
			Efficiency:'',
			Objectives:'power generation,attitude determination,2 yrs',
			Thermal_further: '',
			Temp_low:0,
			Temp_high:0,
			Energy_Storage:0,
			PperWing:3,
			Wings:2,
			Cost:0
		});

		var sp39 = new this.PowerParts({
			Type:'Deployed Solar Panels',
			Name:'HaWK Nanosat Solar Array',
			Manufacturer:'MMA Design',
			Website:'http://www.mmadesignllc.com/products/hawk-and-e-hawk-nanosat-solar-arrays',
			Description:'TRL 4-6. Planned flight on Ors-2 cubesat,2015. Includes Sun tracker',
			Mass:500,Mass_further:'',
			Power:36,Power_further:'36 W peak power (scales up 140 W/kg)',
			Volume:6,Proportions:'',
			Volume_further:'uses space btw P-POD and cubesat (6.5 mm). For 3U',
			Efficiency:'',Objectives:'power generation,attitude determination,2 yrs',
			Thermal_further: '',
			Temp_low:0,
			Temp_high:0,
			Energy_Storage:0,
			PperWing:3,
			Wings:2,
			Cost:0
		});
		var sp40 = new this.PowerParts({
			Type:'Power Control Unit',
			Name:'XEPS CubeSat Electrical Power System',
			Manufacturer:'Blue Canyon Technology',
			Website:'http://bluecanyontech.com/wp-content/uploads/2013/06/BCT-EPS-Board-Information-Sheet-1.0.pdf',
			Description:'charge algorith BCT Lithium-Ion MaxLife',
			Mass:0,Mass_further:'',
			Power:0,
			Power_further:'handles 12 +- 2 V,up to 10.4 Ahr',
			Volume:0,Proportions:'',
			Volume_further:'',
			Efficiency:'',
			Objectives:'',
			Thermal_further: '',
			Temp_low:0,
			Temp_high:0,
			Energy_Storage:0,
			PperWing:0,
			Wings:0,
			Cost:0
		});
		var sp41 = new this.PowerParts({
			Type:'Cubesat Bus',Name:'Intrepid Platform (3U)',
			Manufacturer:'Tyvak',
			Website:'http://tyvak.com/intrepid-suite-1-1/',
			Description:'',
			Mass:1200,
			Mass_further:'includes batteries',
			Power:3,
			Power_further:'generated,orbit average. Batteries 3.7 V nominal',
			Volume:3,Proportions:'',
			Volume_further:'',
			Efficiency:'',
			Objectives:'',
			Thermal_further: '',
			Temp_low:0,
			Temp_high:0,
			Energy_Storage:15,
			PperWing:0,
			Wings:0,
			Cost:0
		});

		var sp42 = new this.PowerParts({
			Type:'Solar Panels',
			Name:'6U Solar Panel',
			Manufacturer:'Andrews Space',
			Website:'http://andrews-space.com/solar-panels/',
			Description:'Comes with sun sensors. 16 High Efficiency (30%) Triple Junction GaAs solar cells with cover glass',
			Mass:0,
			Mass_further:'',
			Power:19.4,
			Power_further:'nominal',
			Volume:6,Proportions:'340x180x2.4',
			Volume_further:'',
			Efficiency:'30%',
			Objectives:'',
			Thermal_further: '',
			Temp_low:0,
			Temp_high:0,
			Energy_Storage:0,
			PperWing:0,
			Wings:0,
			Cost:17500
		});

		var sp43 = new this.PowerParts({
			Type:'Power Control Unit',
			Name:'Cortex 130 Electrical Power Subsystem Card',
			Manufacturer:'',
			Website:'http://static.squarespace.com/static/5020983784ae954efd30c570/t/521b84dee4b0cb130b874367/1377535198321/201308%20-%20CORTEX%20130%20Datasheet.pdf',
			Description:'Supports Andrews solar panels. Xilinx Virtex 4LX FPGA',
			Mass:341,
			Mass_further:'134 g card mass,341 g assembly mass',
			Power:3.08,
			Power_further:'',
			Volume:0,
			Proportions:'105.4x160x19',
			Volume_further:'',
			Efficiency:'',
			Objectives:'Lifetime 3 yrs on orbit,15 krad total dose',
			Thermal_further: '',
			Temp_low:-20,
			Temp_high:60,
			Energy_Storage:0,
			PperWing:0,
			Wings:0,
			Cost:35000
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
		this.PowerParts.find(query,function(error,output) {
			res.json(output);
		});
	}
}

module.exports = PowerFactory;