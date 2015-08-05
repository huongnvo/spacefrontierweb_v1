var CdhFactory = function(Schema,mongoose) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		Schema = new this.Schema({
		    Type: String, 
		    Name: String, 
		    Manufacturer: String, 
		    Reference: String, 
		    Heritage: String, 
		    Mass: String, 
		    Power: String,  
		    Volume: String,
		    Proportions: String, 
		    MIPS: String, 
		    MHz: String, 
		    Processing_further: String, 
		    Memory: String,  
		    Scientific_obj: String, 
		    Cost: String,
		    Additional_info: String
		});
		this.cdh_parts = mongoose.model('cdh_parts', Schema);
	}

	this.insertPart = function() {
		var obc1 = new this.cdh_parts({
			Type:'On-Board Computer (OBC)', 
			Name:'ISIS On Board Computer w/ Daughter board (COTS)', 
			Manufacturer:'ISIS', 
			Reference:'http://www.cubesatshop.com/index.php?page=shop.product_details&flypage=flypage.tpl&product_id=119&category_id=8&option=com_virtuemart&Itemid=75', 
			Heritage:'Available at cubesatshop. TRL 4-6', 
			Mass:'94',  
			Power:'0.55', 
			Volume:'0.10044', 
			Proportions: '96x90x12.4',  
			MIPS:'Unknown', 
			MHz:'400', 
			Processing_further:'ARM9 processor, FreeRTOS operating system', 
			Memory:'2 x 2 GB SD card storage, 256 kB FRAM',  
			Scientific_obj:'', 
			Cost:'',
			Additional_info: '-20 to 60 deg, 200-5450 Euros'
		});

		var obc2 = new this.cdh_parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'NanoMind A712D OBC', 
			Manufacturer:'GOMspace', 
			Reference:'http://gomspace.com/index.php?p=products-a712c', 
			Heritage:'Available at cubesatshop, GOM. Includes a magnetometer. Optional features. Flight tested, TRL 4-6', 
			Mass:'55',  
			Power:'.231',  
			Volume:'0.22464', 
			Proportions:'96x90x(10-26)',  
			MIPS:'Unknown', 
			MHz:'40', 
			Processing_further:'ARM7 processor 8-40 MHz', 
			Memory:'2MB RAM, 4MB Code storage, 4MB data flash', 
			Scientific_obj:'', 
			Cost:'',
			Additional_info: '50-55 g, 8-40 MHz, -40 to 85 deg'
		});

		var obc3 = new this.cdh_parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Dependable Multiprocessor', 
			Manufacturer:'Maryland Aerospace', 
			Reference:'http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=5747461', 
			Heritage:'In development by Honeywell Aerospace, prototyped. COTS cdh_parts w/ fault tolerant software. May fly on Lunar Flashlight. TRL 1-3', 
			Mass:'4080',  
			Power:'25', 
			Volume:'5.868416', 
			Proportions:'25.4x15.2x15.2', 
			MIPS:'1600', 
			MHz:'Unknown', 
			Processing_further:'Cortex-A8', 
			Memory:'', 
			Scientific_obj:'', 
			Cost:'0',
			Additional_info: ''
		});

		var obc4 = new this.cdh_parts({ 
			Type:'On-Board Computer (OBC)', 
			Name:'SpaceCube 2.0 Mini Processor', 
			Manufacturer:'Goddard', 
			Reference:'http://lunarinitiatives.com/lunar-cubes.com/docs/Clark-Science-Concepts-LWaDi-LunarCube-110713.pdf', 
			Heritage:'In development by GSFC, radation resistant components. Planned to fly on IPEX', 
			Mass:'400', 
			Power:'10', 
			Volume:'1', 
			Proportions:'< 1 U', 
			MIPS:'Unknown', 
			MHz:'Unknown',  
			Memory:'', 
			Scientific_obj:'', 
			Cost:'0',
			Additional_info: ''
		});

		var obc5 = new this.cdh_parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'COTS Cubesat single board Motherboard (for harsh environments)', 
			Manufacturer:'Pumpkin', 
			Reference:'http://www.clyde-space.com/cubesat_shop/obdh/pumpkin_cubesat_obc/pumpkin_motherboard/146_motherboard', 
			Heritage:'cubesatkit, Clyde. Developed by Pumpkin', 
			Mass:'103', 
			Power:'Unknown', 
			Power_further:'extremely low current (<10 uA)', 
			Volume:'0.01296', 
			Proportions:'96x90x1.6', 
			MIPS:'Unknown', 
			MHz:'Unknown', 
			Memory:'up to 2 GB', 
			Scientific_obj:'', 
			Cost:'1200',
			Additional_info: 'Mass variable, -40 to 85 deg'
		});

		var image1 = new this.cdh_parts({ 
			Type:'Image Processor',
			Name:'Xilinx Virtex-5QV rad-hard-by-design (RHBD) FPGA', 
			Manufacturer:'JPL', 
			Reference:'http://www.xilinx.com/support/documentation/data_sheets/ds192_V5QV_Device_Overview.pdf', 
			Heritage:'Developed by JPL Launched on M3 (Michigan Multipurpose Minisat), being tested.Not yet spaceflight qualified, TRL 4-6.', 
			Mass:'Unknown', 
			Power:'Unknown',  
			Volume:'0.0081', 
			Proportions:'90x90 (mm)', 
			MIPS:'Unknown', 
			MHz:'450', 
			Memory:'', 
			Scientific_obj:'', 
			Cost:'0',
			Additional_info: ''
		});

		var obc6 = new this.cdh_parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Stamp9G20 (COTS)', 
			Manufacturer:'Taskit', 
			Reference:'http://esto.nasa.gov/conferences/estf2011/papers/Pingree_ESTF2011.pdf', 
			Heritage:'Developed/sold by Taskit. Operated on Mcubed', 
			Mass:'0',  
			Power:'0.18',  
			Volume:'0.012084', 
			Proportions:'53x38x6',  
			MIPS:'0', 
			MHz:'400', 
			Memory:'',  
			Scientific_obj:'', 
			Cost:'0',
			Additional_info: '-40 to 85 deg'
		});

		var obc7 = new this.cdh_parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Cube Computer', 
			Manufacturer:'ESL, Stellenbosch University', 
			Reference:'http://www.isispace.nl/brochures/CubeComputerV3_Brochure.pdf', 
			Heritage:'Developed by ESL, Stellenbosch University. 32-bit ARM Cortex-M3. TRL 4-6', 
			Mass:'70', 
			Power:'0.2', 
			Volume:'0.0864', 
			Proportions:'90x96x10', 
			MIPS:'Unknown', 
			MHz:'48',  
			Memory:'256 KB of EEPROM', 
			Scientific_obj:'', 
			Cost:'0',
			Additional_info: 'Variable Mass, -10 to 70 deg'
		});

		var obc8 = new this.cdh_parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Q6 Processor Board', 
			Manufacturer:'Xiphos', 
			Reference:'http://www.cubesatshop.com/index.php?page=shop.product_details&flypage=flypage.tpl&product_id=111&category_id=8&option=com_virtuemart&Itemid=75', 
			Heritage:'Available on cubesatshop. Flight tested, previous models used on the ISS. TRL 7-9', 
			Mass:'23', 
			Power:'1',  
			Volume:'0.056316', 
			Proportions:'78x38x19', 
			MIPS:'Unknown', 
			MHz:'Unknown',  
			Memory:'2 128 MB LPDDR RAM chips', 
			Scientific_obj:'', 
			Cost:'0',
			Additional_info: '-40 to 85 deg, variable mass'
		});

		var obc9 = new this.cdh_parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Cortex 110 Motor/Valve Driver Card', 
			Manufacturer:'Andrews Space', 
			Reference:'http://static.squarespace.com/static/5020983784ae954efd30c570/t/521b84ade4b0f71082cab478/1377535149941/201308%20-%20CORTEX%20110%20Datasheet.pdf', 
			Heritage:'', 
			Mass:'275',  
			Power:'0.7', 
			Volume:'0.31966376', 
			Proportions:'105.43x160.00x18.95',  
			MIPS:'Unknown', 
			MHz:'Unknown', 
			Memory:'', 
			Scientific_obj:'General purpose driver card, including attitude system control. 3 yrs on orbit, 15 krad TID', 
			Cost:'20000',
			Additional_info: '-20 to 60 deg'
		});

		var obc10 = new this.cdh_parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Cortex 120 Instrumentation Card', 
			Manufacturer:'Andrews Space', 
			Reference:'http://static.squarespace.com/static/5020983784ae954efd30c570/t/521b84cae4b08ade0785550d/1377535178618/201308%20-%20CORTEX%20120%20Datasheet.pdf', 
			Heritage:'Xilinx Spartan FPGA', 
			Mass:'283', 
			Power:'2', 
			Volume:'0.31966376', 
			Proportions:'105.43x160x18.95',  
			MIPS:'Unknown', 
			MHz:'Unknown', 
			Memory:'', 
			Scientific_obj:'Controls propulsion systems, telemetry, lifetime 3 yrs on orbit, 15 krad TID', 
			Cost:'20000',
			Additional_info: '-20 to 60 deg'
		});

		var obc11 = new this.cdh_parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Cortex 140 Communication Card', 
			Manufacturer:'Andrews Space', 
			Reference:'http://static.squarespace.com/static/5020983784ae954efd30c570/t/521b850ee4b0d492d86c4695/1377535246081/201308%20-%20CORTEX%20140%20Datasheet.pdf', 
			Heritage:'Xilinx Spartan FPGA', 
			Mass:'307',  
			Power:'2.8',  
			Volume:'0.31966376', 
			Proportions:'105.43x160x18.95',  
			MIPS:'Unknown', 
			MHz:'Unknown', 
			Memory:'', 
			Scientific_obj:'Interfaces with external components, other networked elements. Lifetime 3 yrs on orbit, 15 krad TID', 
			Cost:'20000',
			Additional_info: '-20 to 60 deg'
		});

		var obc12 = new this.cdh_parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Cortext 150 Subsystem Controller Card', 
			Manufacturer:'Andrews Space', 
			Reference:'https://static.squarespace.com/static/5020983784ae954efd30c570/t/50ad42e2e4b01709c2632c66/1353532130326/201211CORTEX_150_Datasheet.pdf', 
			Heritage:'Xilinx Virtex 4LX w/ embedded Microblaze processor', 
			Mass:'70', 
			Power:'Unknown', 
			Volume:'Unknown', 
			Proportions:'', 
			MIPS:'Unknown', 
			MHz:'100',  
			Memory:'512 KB of SDRAM', 
			Scientific_obj:'Flight computer/subsystem controller', 
			Cost:'35000',
			Additional_info: '-30 to 90 deg'
		});

		var obc13 = new this.cdh_parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Cortext 160 Flight Computer Card', 
			Manufacturer:'Andrews Space', 
			Reference:'http://www.spaceflightindustries.com/wp-content/uploads/2015/05/201503-CORTEX-160-Datasheet.pdf', 
			Heritage:'Dual core processors, 400 MHz, Xilinx Virtex 4FX', 
			Mass:'356',  
			Power:'5.88', 
			Volume:'0.31966376', 
			Proportions:'105.43x160x18.95',  
			MIPS:'Unknown', 
			MHz:'Unknown', 
			Memory:'64 MB SDRAM',  
			Scientific_obj:'Flight computer and payload controller s/ significant processing power. Lifetime 3 yrs, 15 krad TID', 
			Cost:'77500',
			Additional_info: '-20 to 60 deg'
		});

		var obc14 = new this.cdh_parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Intrepid Pico-Class CubeSat System Board', 
			Manufacturer:'Tyvak', 
			Reference:'http://static1.squarespace.com/static/50e0b24de4b03955129ee278/t/50f39280e4b07e77c4688774/1358140032102/IntrepidSystemBoard_2012July.pdf', 
			Heritage:'Linux. Includes magnetometer and temp sensors. AT91SAM9G20 processor', 
			Mass:'55',  
			Power:'8',  
			Volume:'0.07802', 
			Proportions:'85x94 (mm)', 
			MIPS:'Unknown', 
			MHz:'400', 
			Memory:'128 MB RAM, 512 MB flash',  
			Scientific_obj:'', 
			Cost:'0',
			Additional_info: ''
		});

		var obc15 = new this.cdh_parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'NanoHub ATMEGA1281', 
			Manufacturer:'GOMspace', 
			Reference:'http://gomspace.com/documents/GS-DS-NANOHUB-1.3.pdf', 
			Heritage:'', 
			Mass:'45', 
			Power:'Unknown',  
			Volume:'0.13824', 
			Proportions:'96x90x16', 
			MIPS:'Unknown', 
			MHz:'Unknown', 
			Memory:'', 
			Scientific_obj:'', 
			Cost:'0',
			Additional_info: '-40 to 85 deg'
		});

		var bus1 = new this.cdh_parts({ 
			Type:'Cubesat Bus',
			Name:'XB1 Modular Cubesat Bus', 
			Manufacturer:'Blue Canyon Technology', 
			Reference:'http://bluecanyontech.com/wp-content/uploads/2015/05/XB1-Data-Sheet_1.0.pdf', 
			Heritage:'Module includes high precision atittude control, C&DH, EPS, and communication all in one package. Many options, configurable flight software, and many propulsion and payload interfaces included. Not yet flown, TRL 4-6', 
			Mass:'1500', 
			Power:'6.3',  
			Volume:'1', 
			Proportions:'100x100x100', 
			MIPS:'Unknown', 
			MHz:'Unknown',  
			Memory:'4 Gbytes (optional)', 
			Scientific_obj:'', 
			Cost:'0',
			Additional_info: ''
		});

		var bus2 = new this.cdh_parts({ 
			Type:'Cubesat Bus',
			Name:'Intrepid Platform (3U)', 
			Manufacturer:'Tyvak', 
			Reference:'http://tyvak.com/intrepid-suite-1-1/', 
			Heritage:'AT91SAM9G20 Processor. Whole platform, not just board', 
			Mass:'1200', 
			Power:'15', 
			Volume:'3', 
			Proportions:'', 
			MIPS:'Unknown', 
			MHz:'400', 
			Memory:'128 MB RAM, 512 MB flash', 
			Scientific_obj:'', 
			Cost:'0',
			Additional_info:''
		});

		var obc16 = new this.cdh_parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'CSP', 
			Manufacturer:'CHREC', 
			Reference:'http://www.spacemicro.com/assets/datasheets/digital/slices/CHREC.pdf', 
			Heritage:'Xilinx Zynq FPGA. COTS, radhard, and highrel. Up to version 2 in 2014, TRL 1-3', 
			Mass:'60', 
			Power:'5',  
			Volume:'1', 
			Proportions:'', 
			MIPS:'Unknown', 
			MHz:'Unknown', 
			Memory:'4GB SDRAM',  
			Scientific_obj:'', 
			Cost:'0',
			Additional_info: ''
		});

		obc1.save();
		obc2.save();
		obc3.save();
		obc4.save();
		obc5.save();
		obc6.save();
		obc7.save();
		obc8.save();
		obc9.save();
		obc10.save();
		obc11.save();
		obc12.save();
		obc13.save();
		obc14.save();
		obc15.save();
		obc16.save();
		bus1.save();
		bus2.save();
		image1.save();
	}

	this.getPart = function(query, res) {
		this.cdh_parts.find(query,function(error, output) {
			res.json(output);
		});
	}

	this.putPart = function(req, res) {
		var newpart = new this.cdh_parts({
			Type: req.body.Type, 
		    Name: req.body.Name, 
		    Manufacturer: req.body.Manufacturer, 
		    Reference: req.body.Reference, 
		    Heritage: req.body.Heritage, 
		    Mass: req.body.Mass,
		    Power: req.body.Power,
		    Volume: req.body.Volume, 
		    Proportions: req.body.Proportions,
		    MIPS: req.body.MIPS, 
		    MHz: req.body.MHz, 
		    Processing_further: req.body.Processing_further,
		    Memory: req.body.Memory, 
		    Scientific_obj: req.body.Scientific_obj, 
		    Cost: req.body.Cost,
		    Additional_info: req.body.Additional_info
    	});
		newpart.save(function (error, output) {
			res.json(output);
		});
	};

	this.updatePart = function(req, res) {
		this.cdh_parts.update(
 		{
      		_id: mongoose.ObjectId(req.params._id)
    	}, 
    	{
			Type: req.body.Type, 
		    Name: req.body.Name, 
		    Manufacturer: req.body.Manufacturer, 
		    Reference: req.body.Reference, 
		    Heritage: req.body.Heritage, 
		    Mass: req.body.Mass,  
		    Power: req.body.Power,  
		    Volume: req.body.Volume, 
		    Proportions: req.body.Proportions, 
		    MIPS: req.body.MIPS, 
		    MHz: req.body.MHz,  
		    Processing_further: req.body.Processing_further,
		    Memory: req.body.Memory, 
		    Scientific_obj: req.body.Scientific_obj, 
		    Cost: req.body.Cost,
		    Additional_info: req.body.Additional_info
    	}, 
    	function(error, output) {
      		res.json(output);
    	});
	};

	this.removePart = function(req, res) {
    	this.cdh_parts.remove({
            _id: req.params._id
        }, function(err, output) {
            if (err)
                res.send(output);
            res.json({ message: 'Successfully deleted' });
        });
	};
}

module.exports = CdhFactory;