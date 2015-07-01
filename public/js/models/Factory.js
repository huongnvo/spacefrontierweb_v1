var Factory = function(Schema,mongoose) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		Schema = new this.Schema({
		    Type: String, 
		    Name: String, 
		    Manufacturer: String, 
		    Website: String, 
		    Heritage: String, 
		    Mass: Number, 
		    Mass_further: String, 
		    Power: Number, 
		    Power_further: String, 
		    Volume: Number, 
		    Proportions: String, 
		    Volume_further: String, 
		    MIPS: Number, 
		    MHz: Number, 
		    Processing_further: String, 
		    Memory: String, 
		    Temp_low: Number, 
		    Temp_high: Number, 
		    Scientific_obj: String, 
		    Cost: String
		});
		this.Parts = mongoose.model('Parts', Schema);
	}

	this.insertPart = function() {
		var obc1 = new this.Parts({
			Type:'On-Board Computer (OBC)', 
			Name:'ISIS On Board Computer w/ Daughter board (COTS)', 
			Manufacturer:'ISIS', 
			Website:'http://www.cubesatshop.com/index.php?page=shop.product_details&flypage=flypage.tpl&product_id=119&category_id=8&option=com_virtuemart&Itemid=75', 
			Heritage:'Available at cubesatshop. TRL 4-6', 
			Mass:94, 
			Mass_further:'', 
			Power:0.4, 
			Power_further:'3.3 V', 
			Volume:0.10044, 
			Proportions:'96x90x12.4', 
			Volume_further:'', 
			MIPS:0, 
			MHz:400, 
			Processing_further:'ARM9 processor, FreeRTOS operating system', 
			Memory:'2 x 2 GB SD card storage, 256 kB FRAM', 
			Temp_low:-20, 
			Temp_high:60, 
			Scientific_obj:'', 
			Cost:''
		});

		var obc2 = new this.Parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'NanoMind A712D OBC', 
			Manufacturer:'GOMspace', 
			Website:'http://gomspace.com/index.php?p=products-a712c', 
			Heritage:'Available at cubesatshop, GOM. Includes a magnetometer. Optional features. Flight tested, TRL 4-6', 
			Mass:52.5, 
			Mass_further:'50-55 g', 
			Power:0, 
			Power_further:'', 
			Volume:0.1728, 
			Proportions:'96x90x15', 
			Volume_further:'96x90x(10-20)', 
			MIPS:0, 
			MHz:24, 
			Processing_further:'ARM7 processor 8-40 MHz', 
			Memory:'2MB RAM, 4MB Code storage, 4MB data flash', 
			Temp_low:-40, 
			Temp_high:85, 
			Scientific_obj:'', 
			Cost:''
		});

		var obc3 = new this.Parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Dependable Multiprocessor', 
			Manufacturer:'Maryland Aerospace', 
			Website:'http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=5747461', 
			Heritage:'In development by Honeywell Aerospace, prototyped. COTS parts w/ fault tolerant software. May fly on Lunar Flashlight. TRL 1-3', 
			Mass:4080, 
			Mass_further:'prototype. Overestimate', 
			Power:25, 
			Power_further:'', 
			Volume:0.196875, 
			Proportions:'75x75x35', 
			Volume_further:'', 
			MIPS:1600, 
			MHz:0, 
			Processing_further:'Cortex-A8', 
			Memory:'', 
			Temp_low:-300, 
			Temp_high:-300, 
			Scientific_obj:'', 
			Cost:''
		});

		var obc4 = new this.Parts({ 
			Type:'On-Board Computer (OBC)', 
			Name:'SpaceCube 2.0 Mini Processor', 
			Manufacturer:'Goddard', 
			Website:'http://lunarinitiatives.com/lunar-cubes.com/docs/Clark-Science-Concepts-LWaDi-LunarCube-110713.pdf', 
			Heritage:'In development by GSFC, radation resistant components. Planned to fly on IPEX', 
			Mass:400, 
			Mass_further:'< 400 g', 
			Power:7.5, 
			Power_further:'5/10/14', 
			Volume:1, 
			Proportions:'0', 
			Volume_further:'< 1 U', 
			MIPS:5000, 
			MHz:0, 
			Processing_further:'', 
			Memory:'', 
			Temp_low:-300, 
			Temp_high:-300, 
			Scientific_obj:'', 
			Cost:''
		});

		var obc5 = new this.Parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'COTS Cubesat single board Motherboard (for harsh environments)', 
			Manufacturer:'Pumpkin', 
			Website:'http://www.clyde-space.com/cubesat_shop/obdh/pumpkin_cubesat_obc/pumpkin_motherboard/146_motherboard', 
			Heritage:'cubesatkit, Clyde. Developed by Pumpkin', 
			Mass:90, 
			Mass_further:'77-103 g, depends on hardware', 
			Power:0, 
			Power_further:'extremely low current (<10 uA)', 
			Volume:0.0138, 
			Proportions:'96x90x1.6', 
			Volume_further:'', 
			MIPS:0, 
			MHz:50, 
			Processing_further:'', 
			Memory:'up to 2 GB', 
			Temp_low:-40, 
			Temp_high:85, 
			Scientific_obj:'', 
			Cost:''
		});

		var image1 = new this.Parts({ 
			Type:'Image Processor',
			Name:'Xilinx Virtex-5QV rad-hard-by-design (RHBD) FPGA', 
			Manufacturer:'JPL', 
			Website:'http://esto.nasa.gov/conferences/estf2011/papers/Pingree_ESTF2011.pdf', 
			Heritage:'Developed by JPL Launched on M3 (Michigan Multipurpose Minisat), being tested.Not yet spaceflight qualified, TRL 4-6.', 
			Mass:0, 
			Mass_further:'', 
			Power:0, 
			Power_further:'6.0-8.4 V', 
			Volume:0.00081, 
			Proportions:'0', 
			Volume_further:'90x90 (mm)', 
			MIPS:0, 
			MHz:100, 
			Processing_further:'', 
			Memory:'', 
			Temp_low:-300, 
			Temp_high:-300, 
			Scientific_obj:'', 
			Cost:''
		});

		var obc6 = new this.Parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Stamp9G20 (COTS)', 
			Manufacturer:'Taskit', 
			Website:'http://esto.nasa.gov/conferences/estf2011/papers/Pingree_ESTF2011.pdf', 
			Heritage:'Developed/sold by Taskit. Operated on Mcubed', 
			Mass:0, 
			Mass_further:'very light', 
			Power:0.18, 
			Power_further:'', 
			Volume:0.012084, 
			Proportions:'53x38x6', 
			Volume_further:'', 
			MIPS:0, 
			MHz:400, 
			Processing_further:'', 
			Memory:'', 
			Temp_low:-40, 
			Temp_high:85, 
			Scientific_obj:'', 
			Cost:''
		});

		var obc7 = new this.Parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Cube Computer', 
			Manufacturer:'ESL, Stellenbosch University', 
			Website:'http://www.isispace.nl/brochures/CubeComputerV3_Brochure.pdf', 
			Heritage:'Developed by ESL, Stellenbosch University. 32-bit ARM Cortex-M3. TRL 4-6', 
			Mass:60, 
			Mass_further:'50-70 g', 
			Power:0.2, 
			Power_further:'3.3 V, <200 MW', 
			Volume:0.0864, 
			Proportions:'90x96x10', 
			Volume_further:'', 
			MIPS:0, 
			MHz:26, 
			Processing_further:'4-48 MHz, 1.25 DMPIS/MHz', 
			Memory:'256 KB of EEPROM', 
			Temp_low:-10, 
			Temp_high:70, 
			Scientific_obj:'', 
			Cost:''
		});

		var obc8 = new this.Parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Q6 Processor Board', 
			Manufacturer:'Xiphos', 
			Website:'http://www.cubesatshop.com/index.php?page=shop.product_details&flypage=flypage.tpl&product_id=111&category_id=8&option=com_virtuemart&Itemid=75', 
			Heritage:'Available on cubesatshop. Flight tested, previous models used on the ISS. TRL 7-9', 
			Mass:23, 
			Mass_further:'17 excluding connector', 
			Power:1, 
			Power_further:'typical applications', 
			Volume:0, 
			Proportions:'78x38x19', 
			Volume_further:'', 
			MIPS:0, 
			MHz:0, 
			Processing_further:'', 
			Memory:'2 128 MB LPDDR RAM chips', 
			Temp_low:-40, 
			Temp_high:85, 
			Scientific_obj:'', 
			Cost:''
		});

		var obc9 = new this.Parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Cortex 110 Motor/Valve Driver Card', 
			Manufacturer:'Andrews Space', 
			Website:'http://static.squarespace.com/static/5020983784ae954efd30c570/t/521b84ade4b0f71082cab478/1377535149941/201308%20-%20CORTEX%20110%20Datasheet.pdf', 
			Heritage:'', 
			Mass:275, 
			Mass_further:'68 g card, 275 g assembly mass', 
			Power:0.7, 
			Power_further:'6.5, 12, or 28 V', 
			Volume:0, 
			Proportions:'15x97x90', 
			Volume_further:'envelope', 
			MIPS:0, 
			MHz:0, 
			Processing_further:'', 
			Memory:'', 
			Temp_low:-20, 
			Temp_high:60, 
			Scientific_obj:'General purpose driver card, including attitude system control. 3 yrs on orbit, 15 krad TID', 
			Cost:'$20,000'
		});

		var obc10 = new this.Parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Cortex 120 Instrumentation Card', 
			Manufacturer:'Andrews Space', 
			Website:'http://static.squarespace.com/static/5020983784ae954efd30c570/t/521b84cae4b08ade0785550d/1377535178618/201308%20-%20CORTEX%20120%20Datasheet.pdf', 
			Heritage:'Xilinx Spartan FPGA', 
			Mass:283, 
			Mass_further:'76 g card, 283 g assembly', 
			Power:2, 
			Power_further:'', 
			Volume:0, 
			Proportions:'15x97x90', 
			Volume_further:'envelope', 
			MIPS:0, 
			MHz:0, 
			Processing_further:'', 
			Memory:'', 
			Temp_low:-20, 
			Temp_high:60, 
			Scientific_obj:'Controls propulsion systems, telemetry, lifetime 3 yrs on orbit, 15 krad TID', 
			Cost:'$20,000'
		});

		var obc11 = new this.Parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Cortex 140 Communication Card', 
			Manufacturer:'Andrews Space', 
			Website:'http://static.squarespace.com/static/5020983784ae954efd30c570/t/521b850ee4b0d492d86c4695/1377535246081/201308%20-%20CORTEX%20140%20Datasheet.pdf', 
			Heritage:'Xilinx Spartan FPGA', 
			Mass:307, 
			Mass_further:'90 g card, 307 g assembly', 
			Power:2.8, 
			Power_further:'', 
			Volume:0, 
			Proportions:'15x97x90', 
			Volume_further:'envelope', 
			MIPS:0, 
			MHz:0, 
			Processing_further:'', 
			Memory:'', 
			Temp_low:-20, 
			Temp_high:60, 
			Scientific_obj:'Interfaces with external components, other networked elements. Lifetime 3 yrs on orbit, 15 krad TID', 
			Cost:'$20,000'
		});

		var obc12 = new this.Parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Cortext 150 Subsystem Controller Card', 
			Manufacturer:'Andrews Space', 
			Website:'https://static.squarespace.com/static/5020983784ae954efd30c570/t/50ad42e2e4b01709c2632c66/1353532130326/201211CORTEX_150_Datasheet.pdf', 
			Heritage:'Xilinx Virtex 4LX w/ embedded Microblaze processor', 
			Mass:70, 
			Mass_further:'', 
			Power:0, 
			Power_further:'', 
			Volume:0, 
			Proportions:'15x97x90', 
			Volume_further:'', 
			MIPS:0, 
			MHz:100, 
			Processing_further:'', 
			Memory:'512 KB of SDRAM', 
			Temp_low:-30, 
			Temp_high:90, 
			Scientific_obj:'Flight computer/subsystem controller', 
			Cost:'$35,000'
		});

		var obc13 = new this.Parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Cortext 160 Flight Computer Card', 
			Manufacturer:'Andrews Space', 
			Website:'http://static.squarespace.com/static/5020983784ae954efd30c570/t/521b8528e4b03e2198317e30/1377535272447/201308%20-%20CORTEX%20160%20Datasheet.pdf', 
			Heritage:'Dual core processors, 400 MHz, Xilinx Virtex 4FX', 
			Mass:356, 
			Mass_further:'94 g card, 356 g assembly mass', 
			Power:5.88, 
			Power_further:'6.5, 12, or 28 V', 
			Volume:0, 
			Proportions:'15x97x90', 
			Volume_further:'', 
			MIPS:0, 
			MHz:400, 
			Processing_further:'100 MHz or 400 MHz', 
			Memory:'64 MB SDRAM', 
			Temp_low:-20, 
			Temp_high:60, 
			Scientific_obj:'Flight computer and payload controller s/ significant processing power. Lifetime 3 yrs, 15 krad TID', 
			Cost:'$77,500'
		});

		var obc14 = new this.Parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'Intrepid Pico-Class CubeSat System Board', 
			Manufacturer:'Tyvak', 
			Website:'http://tyvak.com/intrepidsystemboard/', 
			Heritage:'Linux. Includes magnetometer and temp sensors. AT91SAM9G20 processor', 
			Mass:55, 
			Mass_further:'board mass', 
			Power:200, 
			Power_further:'<200 mW idle, <300 mW max', 
			Volume:0, 
			Proportions:'', 
			Volume_further:'85x94 (mm)', 
			MIPS:0, 
			MHz:400, 
			Processing_further:'Atmel AT91SAM9G20 Processor', 
			Memory:'128 MB RAM, 512 MB flash', 
			Temp_low:0, 
			Temp_high:0, 
			Scientific_obj:'', 
			Cost:''
		});

		var obc15 = new this.Parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'NanoHub ATMEGA1281', 
			Manufacturer:'GOMspace', 
			Website:'http://gomspace.com/documents/GS-DS-NANOHUB-1.3.pdf', 
			Heritage:'', 
			Mass:45, 
			Mass_further:'', 
			Power:0, 
			Power_further:'5 mA, 3.3 V', 
			Volume:0, 
			Proportions:'96x90x16', 
			Volume_further:'', 
			MIPS:0, 
			MHz:0, 
			Processing_further:'', 
			Memory:'', 
			Temp_low:-40, 
			Temp_high:85, 
			Scientific_obj:'', 
			Cost:''
		});

		var bus1 = new this.Parts({ 
			Type:'Cubesat Bus',
			Name:'XB1 Modular Cubesat Bus', 
			Manufacturer:'Blue Canyon Technology', 
			Website:'http://bluecanyontech.com/product/xb1/', 
			Heritage:'', 
			Mass:'Module includes high precision atittude control, C&DH, EPS, and communication all in one package. Many options, configurable flight software, and many propulsion and payload interfaces included. Not yet flown, TRL 4-6', 
			Mass_further:'1500', 
			Power:2.5, 
			Power_further:'less than, 12 +- 2 V', 
			Volume:1, 
			Proportions:'100x100x100', 
			Volume_further:'2 modules, each 5x10x10 cm, stackable or side by side, 100x100x100, 50x200x100', 
			MIPS:0, 
			MHz:0, 
			Processing_further:'', 
			Memory:'4 Gbytes (optional)', 
			Temp_low:0, 
			Temp_high:0, 
			Scientific_obj:'', 
			Cost:''
		});

		var bus2 = new this.Parts({ 
			Type:'Cubesat Bus',
			Name:'Intrepid Platform (3U)', 
			Manufacturer:'Tyvak', 
			Website:'http://tyvak.com/intrepid-suite-1-1/', 
			Heritage:'AT91SAM9G20 Processor. Whole platform, not just board', 
			Mass:1200, 
			Mass_further:'includes batteries', 
			Power:0, 
			Power_further:'', 
			Volume:3, 
			Proportions:'', 
			Volume_further:'', 
			MIPS:0, 
			MHz:400, 
			Processing_further:'Atmel AT91SAM9G20 Processor', 
			Memory:'128 MB RAM, 512 MB flash', 
			Temp_low:0, 
			Temp_high:0, 
			Scientific_obj:'', 
			Cost:''
		});

		var obc16 = new this.Parts({ 
			Type:'On-Board Computer (OBC)',
			Name:'CSP', 
			Manufacturer:'CHREC', 
			Website:'', 
			Heritage:'Xilinx Zynq FPGA. COTS, radhard, and highrel. Up to version 2 in 2014, TRL 1-3', 
			Mass:100, 
			Mass_further:'less than', 
			Power:5, 
			Power_further:'less than', 
			Volume:1, 
			Proportions:'', 
			Volume_further:'less than', 
			MIPS:0, 
			MHz:0, 
			Processing_further:'', 
			Memory:'500 MB SDRAM', 
			Temp_low:0, 
			Temp_high:0, 
			Scientific_obj:'', 
			Cost:''
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
		image1.save();
		bus1.save();
		bus2.save();
	}

	this.getPart = function(query,res) {
		this.Parts.find(query,function(error,output) {
			res.json(output);
		});
	}
}

module.exports = Factory;