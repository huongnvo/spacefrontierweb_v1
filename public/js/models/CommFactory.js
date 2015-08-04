var CommFactory = function(Schema, mongoose) {
	
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
			Frequency: String,
			Data_and_Objectives: String,
			Receiver_Sensitivity: String,
			Transmit_Power: String,
			Beamwidth: String,
			Gain: String,
			Cost: String,
		});
		this.comm_parts = mongoose.model('comm_parts', Schema)
	}

	this.insertPart = function() {
  		var transceiver1 = new this.comm_parts({
  			Type:'Transceiver', 
  			Name:'ISIS UHF Downlink/ VHF Uplink Duplex Transceiver', 
  			Manufacturer:'ISIS', 
  			Reference:'http://www.cubesatshop.com/index.php?page=shop.product_details&flypage=flypage.tpl&product_id=11&category_id=5&option=com_virtuemart&Itemid=67&vmcchk=1&Itemid=67', 
  			Heritage:'Developed by ISIS, sold by cubesatshop. Flight proven', 
  			Mass:'85', 
  			Power:'2', 
			Volume:'0.1296', 
  			Proportions:'9.6cm x 9.0cm x 1.5cm', 
  			Frequency:'400-450 mHz UHF transmitter, 130-170 VHF MHz reciever', 
  			Data_and_Objectives:'transmitter adjustable: 1200, 2400, 4800, or 9600 bit/s receiver: 1200 bit/s', 
  			Receiver_Sensitivity:'-100', 
  			Transmit_Power:'27', 
  			Beamwidth:'Unknown', 
  			Gain:'Unknown',
  			Cost:"0"
        });
  
  		var transceiver2 = new this.comm_parts({
            Type:'Transceiver',
            Name:'NanoCom U482C Transceiver (COTS)', 
            Manufacturer:'GOMspace', 
            Reference:'http://gomspace.com/documents/GS-DS-U482C-5.0.pdf', 
            Heritage:'', 
            Mass:'75', 
            Power:'2', 
            Volume:'0.1548', 
            Proportions:'9.54cm x 9.015cm x 1.8cm', 
            Volume_further:'board 3.1 mm thick', 
            Frequency:'435-437 MHz UHF', 
            Data_and_Objectives:'uplink: 1200-4800 baud downlink: 1200-9600 baud', 
            Receiver_Sensitivity:'-125', 
            Transmit_Power:'33', 
            Beamwidth:'Unknown', 
            Gain:'Unknown',
            Cost:"0"
        });

		var transceiver3 = new this.comm_parts({
            Type:'Transceiver',
            Name:'CMC: Cubesat VUTRX (UHF Downlink, VHF Uplink transceiver)', 
            Manufacturer:'Clyde', 
            Reference:'http://www.clyde-space.com/cubesat_shop/communication_systems/170_cmc-uhf-vhf-transceiver', 
            Heritage:'', 
            Mass:'90', 
            Power:'10', 
            Volume:'0.000864', 
            Proportions:'9.6cm x 9.0cm', 
            Frequency:'420-450 MHz UHF / VH, transmitter, 130-150 MHz receiver', 
            Data_and_Objectives:'9600 baud GMSK, 1200 baud AFSK data rates, Noise figure <1.5 dB, Low data transfer, can be used as backup radio', 
            Receiver_Sensitivity:'-120', 
            Transmit_Power:'33', 
            Beamwidth:'Unknown', 
            Gain:'Unknown',
            Cost:"0"
        });

        var transceiver4 = new this.comm_parts({
		  	Type:'Transceiver',
		  	Name:'XB1 Modular Cubesat Bus', 
		  	Manufacturer:'Blue Canyon Technology', 
		  	Reference:'http://bluecanyontech.com/product/xb1/',
		  	Heritage:'Module includes high precision atittude control, C&DH, EPS, and communication all in one package. Many options, configurableflight software, and many propulsion and payload interfaces included. Not yet flown, TRL 4-6', 
		  	Mass:'1500', 
		  	Power:'6.3', 
		  	Volume:'1', 
		  	Proportions:'10.0cm x 10.0cm x 10.0cm', 
		  	Frequency:'UHF or S-Band', 
		  	Data_and_Objectives:'', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'Unknown', 
		  	Beamwidth:'Unknown', 
		  	Gain:'Unknown',
		  	Cost:"0" 
	  	});

	  	var transceiver5 = new this.comm_parts({
		  	Type:'Transceiver',
		  	Name:'SWIFT-RelNav Radio', 
		  	Manufacturer:'Tethers Unlimited', 
		  	Reference:'http://www.tethers.com/SpecSheets/Brochure_SWIFT-RelNav.pdf', 
		  	Heritage:'prototyped, not yet cubesat size. TRL 5. Patch antennas also in development.', 
		  	Mass:'400', 
		  	Power:'4', 
		  	Volume:'0.375', 
		  	Proportions:'9.7cm x 8.6cm x 4.5cm', 
		  	Volume_further:'', 
		  	Frequency:'S-Band', 
		  	Data_and_Objectives:'15 Mbps, navigation and communication between groups of staelites', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'Unknown', 
		  	Beamwidth:'Unknown', 
		  	Gain:'10',
		  	Cost:"0"
	  	});

		var transceiver6 = new this.comm_parts({
		  	Type:'Transceiver',
		  	Name:'Swift-TacSatComm', 
		  	Manufacturer:'Tethers Unlimited', 
		  	Reference:'http://www.tethers.com/SpecSheets/Brochure_SWIFT_SDR.pdf', 
		  	Heritage:'', 
		  	Mass:'Estimated 400', 
		  	Power:'4', 
		  	Volume:'0.5', 
		  	Proportions:'', 
		  	Frequency:'UHF', 
		  	Data_and_Objectives:'allow cubesat to communicate w/ handheld UHF radio', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'Unknown', 
		  	Beamwidth:'Unknown', 
		  	Gain:'Unknown',
		  	Cost:"0"
	  	});

		var transceiver7 = new this.comm_parts({
		  	Type:'Transceiver',
		  	Name:'SWIFT-AFSCN Radio', 
		  	Manufacturer:'Tethers Unlimited', 
		  	Reference:'http://www.tethers.com/SpecSheets/Brochure_SWIFT_SDR.pdf', 
		  	Heritage:'', 
		  	Mass:'400', 
		  	Power:'6.6', 
		  	Volume:'0.167', 
		  	Proportions:'8.2cm x 8.2cm x 2.5cm', 
		  	Frequency:'L-band (1760‐1840 GHz) and USB (2025-2120 MHz) receiver, USB transmitter', 
		  	Data_and_Objectives:'', 
		  	Receiver_Sensitivity:'-110', 
		  	Transmit_Power:'30', 
		  	Beamwidth:'Unknown', 
		  	Gain:'Unknown',
		  	Cost:"0"
	  	});

		var transceiver8 = new this.comm_parts({
		  	Type:'Transceiver',
		  	Name:'JPL Nav-Comm X-Band Radio', 
		  	Manufacturer:'JPL', 
		  	Reference:'http://mstl.atl.calpoly.edu/~bklofas/NSF_comm/20130813_smallsat/Iris_Duncan.pdf', 
		  	Heritage:'planned flight on INSPIRE', 
		  	Mass:'500', 
		  	Power:'10', 
		  	Volume:'0.5', 
		  	Proportions:'', 
		  	Frequency:'X-Band, receive 7.145-9.19 GHz, transmit 8.4-8.45 GHz', 
		  	Data_and_Objectives:'kilobits to milobits per sec, navigation w/ doppler, ranging, communication w/ Earth station', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'30', 
		  	Beamwidth:'Unknown', 
		  	Gain:'Unknown',
		  	Cost:"0"
	  	});

		var transceiver9 = new this.comm_parts({
		  	Type:'Transceiver',
		  	Name:'Lithium 1 UHF/VHF Radio', 
		  	Manufacturer:'AstroDev', 
		  	Reference:'http://www.astrodev.com/public_html2/downloads/datasheet/LithiumUserManual.pdf', 
		  	Heritage:'Flown on Mcubed CXBN. Can customize frequency', 
		  	Mass:'52', 
		  	Power:'10', 
		  	Volume:'0.02', 
		  	Proportions:'1cm x 3.3cm x 6.5cm', 
		  	Frequency:'120-150 MHz, 400-450 MHz or custom 200-600 MHz. UHF, VHF', 
		  	Data_and_Objectives:'9600-38400 bps, GSFK', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'36.02', 
		  	Beamwidth:'Unknown', 
		  	Gain:'Unknown',
		  	Cost:"0"
	  	});

		var transceiver10 = new this.comm_parts({
		  	Type:'Transceiver',
		  	Name:'Helium 100 UHF/VHF Radio', 
		  	Manufacturer:'AstroDev', 
		  	Reference:'http://mstl.atl.calpoly.edu/~bklofas/NSF_comm/20091216_parc55/8_Brown_AstroDev.pdf', 
		  	Heritage:'Can customize frequency', 
		  	Mass:'78', 
		  	Power:'6', 
		  	Volume:'0.14', 
		  	Proportions:'9cm x 9.6cm x 1.6cm', 
		  	Frequency:'120-150 MHz, 400-450 MHz or custom 200-600 MHz. UHF, VHF', 
		  	Data_and_Objectives:'9600-38400 bps, GSFK', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'30', 
		  	Beamwidth:'Unknown', 
		  	Gain:'Unknown',
		  	Cost:"0" 
	  	});

		var transceiver13 = new this.comm_parts({
		  	Type:'Transceiver',
		  	Name:'Small Satellite Transceiver', 
		  	Manufacturer:'ISIS', 
		  	Reference:'http://move.lrt.mw.tum.de/wp-content/uploads/2010/10/Brochure_ISIS_Transceiver.pdf', 
		  	Heritage:'Compatible w/ Pumpkin and Clyde EPS', 
		  	Mass:'120', 
		  	Power:'1.9', 
		  	Volume:'Unknown', 
		  	Proportions:'', 
		  	Frequency:'VHF, 130-160 MHz transmitter, 400-450 MHz receiver', 
		  	Data_and_Objectives:'1.2 kbps, noise figure <6 dB', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'23.0103', 
		  	Beamwidth:'Unknown', 
		  	Gain:'Unknown',
		  	Cost:"0"
	  	});

		var transceiver14 = new this.comm_parts({
		  	Type:'Transceiver',
		  	Name:'TRXUV VHF/UHF Transceiver', 
		  	Manufacturer:'ISIS', 
		  	Reference:'http://www.isispace.nl/brochures/ISIS_TRXUV_Transceiver_Brochure_v.12.5.pdf', 
		  	Heritage:'Design based on heritage from Delfi-C satellite. Duplex operation (simultaneous sending/receiving)', 
		  	Mass:'85', 
		  	Power:'1.55', 
		  	Volume:'0.1296', 
		  	Proportions:'9.6cm x 9.0cm x 1.5cm', 
		  	Frequency:'UHF, VHF Transmitter 130-160 MHz', 
		  	Data_and_Objectives:'1.2, 2.4, 4.8, 9.6 kbps, BPSK', 
		  	Receiver_Sensitivity:'-104', 
		  	Transmit_Power:'22', 
		  	Beamwidth:'Unknown', 
		  	Gain:'Unknown',
		  	Cost:"0"
	  	});

		var transmitter1 = new this.comm_parts({
			Type:'Transmitter',
			Name:'Cubesat S-Band Transmitter (COTS)', 
			Manufacturer:'Clyde', 
			Reference:'http://www.clyde-space.com/cubesat_shop/communication_systems/301_cubesat-s-band-transmitter', 
			Heritage:'suggested use with S-band Patch Intenna', 
			Mass:'95', 
			Power:'6', 
			Volume:'0.14688', 
			Proportions:'9.6cm x 9.0cm x 1.7cm', 
			Frequency:'2.4-2.483 GHz S-Band', 
			Data_and_Objectives:'downlink, up to 2 Mbps. (1/2, 1/4, & 1/8 rate modes)', 
			Receiver_Sensitivity:'Unknown', 
			Transmit_Power:'30', 
			Beamwidth:'Unknown', 
			Gain:'Unknown',
			Cost:"0"
		});

		var transmitter2 = new this.comm_parts({
			Type:'Transmitter',
			Name:'HDR X-Band Transmitter', 
			Manufacturer:'Syrlinks', 
			Reference:'http://www.syrlinks.com/en/products/cubesats/hdr-x-band-transmitter.html', 
			Heritage:'In development, TRL 1-3', 
			Mass:'400', 
			Power:'7', 
			Volume:'0.4', 
			Proportions:'10.0cm x 10.0cm x 4.0cm', 
			Frequency:'8025-8450 MHz frequency range w/ 1MHz step, X-Band', 
			Data_and_Objectives:'very high data downlink, 2.8-50 Mbps',
			Receiver_Sensitivity:'Unknown', 
			Transmit_Power:'33', 
			Beamwidth:'Unknown', 
			Gain:'Unknown',
			Cost:"0"
		});

		var transmitter3 = new this.comm_parts({
		  	Type:'Transmitter',
		  	Name:'ISIS TXS S-Band Transmitter', 
		  	Manufacturer:'ISIS', 
		  	Reference:'http://www.isispace.nl/brochures/ISIS_TXS_Brochure_v.12.4.pdf', 
		  	Heritage:'Developed by ISIS, sold by cubesatshop, Tested. TRL 4-6', 
		  	Mass:'62', 
		  	Power:'4', 
		  	Volume:'0.09', 
		  	Proportions:'9cm x 9.6 cm x 1 cm', 
		  	Frequency:'2.1-2.5 GHz S-Band', 
		  	Data_and_Objectives:'selectable up to 100 kbps, BPSK or GMSK', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'28', 
		  	Beamwidth:'Unknown', 
		  	Gain:'Unknown',
		  	Cost:"0"
	  	});

	  	var transmitter4 = new this.comm_parts({
		  	Type:'Transmitter',
		  	Name:'Highly Integrated S-band Transmitter for Pico and Nano Satellites (HISPICO)', 
		  	Manufacturer:'ISIS', 
		  	Reference:'http://www.cubesatshop.com/index.php?page=shop.product_details&product_id=84&flypage=flypage.tpl&pop=0&option=com_virtuemart&Itemid=65', 
		  	Heritage:'', 
		  	Mass:'75', 
		  	Power:'5', 
		  	Volume:'0.14', 
		  	Proportions:'9.5cm x 4.6cm x 1.5cm', 
		  	Frequency:'2200-2300 MHz, adjustable steps of 100 kHz, S-Band', 
		  	Data_and_Objectives:'up to 1 Mbps, DQPSK, high-performance forward error correction', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'21.5', 
		  	Beamwidth:'Unknown', 
		  	Gain:'Unknown',
		  	Cost:"0"
	  	});

		var lga1 = new this.comm_parts({
		  	Type:'Low-Gain Antenna',
		  	Name:'UHF Turnstile Antenna (COTS)', 
		  	Manufacturer:'GOMspace', 
		  	Reference:'http://gomspace.com/documents/GS-DS-NANOCOM-ANT-1.1.pdf', 
		  	Heritage:'Sold by GOM, also cubesatshop. 4 monopole antennas arranged as a circular polarized antenna. Designed for ISIS/Pumpkin bus.', 
		  	Mass:'30', 
		  	Power:'10', 
		  	Volume:'0', 
		  	Proportions:'rod', 
		  	Volume_further:'Designed for top or bottom of cubesat, antenna length 70 cm', 
		  	Frequency:'400-550 MHz UHF', 
		  	Data_and_Objectives:'Avoids blind spots from satellite tumbling, ',
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'Unknown', 
		  	Beamwidth:'360', 
		  	Gain:'1.5 dBi to -1 dBi' ,
		  	Cost:"0"
	  	});

		var lga2 = new this.comm_parts({
		  	Type:'Low-Gain Antenna',
		  	Name:'S-Band Patch Antenna (COTS)', 
		  	Manufacturer:'Clyde', 
		  	Reference:'http://www.clyde-space.com/cubesat_shop/communication_systems/302_s-band-patch-antenna', 
		  	Heritage:'', 
		  	Mass:'50', 
		  	Power:'2', 
		  	Volume:'0.017', 
		  	Proportions:'7.6cm x 7.6cm x 0.38cm', 
		  	Frequency:'2.4-2.483 GHz S-Band or 2.2-2.3 GHz', 
		  	Data_and_Objectives:'', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'Unknown', 
		  	Beamwidth:'60', 
		  	Gain:'8' ,
		  	Cost:"0"
	  	});

		var lga3 = new this.comm_parts({
		  	Type:'Low-Gain Antenna',
		  	Name:'S-Band Patch Antenna RHCP (COTS)', 
		  	Manufacturer:'ISIS', 
		  	Reference:'http://www.cubesatshop.com/index.php?page=shop.product_details&flypage=flypage.tpl&product_id=85&category_id=6&option=com_virtuemart&Itemid=70', 
		  	Heritage:'designed for use with HISPICO transmitter. Frequency, gain, and bandwidth adjustable', 
		  	Mass:'Unknown', 
		  	Power:'10', 
		  	Volume:'0.008', 
		  	Proportions:'5.0cm x 5.0cm x .32cm', 
		  	Volume_further:'', 
		  	Frequency:'S-Band, 2200-2300 MHz.', 
		  	Data_and_Objectives:'bandwidth 50 MHz', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'Unknown', 
		  	Beamwidth:'85', 
		  	Gain:'6',
		  	Cost:"0"
	  	});

		var lga4 = new this.comm_parts({
		  	Type:'Low-Gain Antenna',
		  	Name:'S-Band Patch Antenna (SSTL)', 
		  	Manufacturer:'SURREY Satellite Technologies', 
		  	Reference:'http://www.sstl.co.uk/getattachment/6c88ca87-0802-45e7-bfb6-356336ff710a/S-Band-Patch-Antenna', 
		  	Heritage:'Flight tested, 70 units flown. TRL 7-9', 
		  	Mass:'80', 
		  	Power:'5', 
		  	Volume:'0.13448', 
		  	Proportions:'8.2cm x 8.2cm x 2.0cm', 
		  	Frequency:'S-Band', 
		  	Data_and_Objectives:'up to 4 Mbps', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'40', 
		  	Beamwidth:'70', 
		  	Gain:'6',
		  	Cost:"0"
	  	});

		var lga5 = new this.comm_parts({
		  	Type:'Low-Gain Antenna',
		  	Name:'Deployable UHF and VHF antenna (COTS)', 
		  	Manufacturer:'ISIS', 
		  	Reference:'http://www.isispace.nl/brochures/ISIS_AntS_Brochure_v.7.11.pdf', 
		  	Heritage:'Qualification tested. Based on Delfi-C3, flown on StudSat. TRL 4-6', 
		  	Mass:'100', 
		  	Power:'2', 
		  	Volume:'0.067228', 
		  	Proportions:'9.8cm x 9.8cm x 7c,', 
		  	Frequency:'UHF, VHF 130-500 MHz', 
		  	Data_and_Objectives:'bandwidth 10-13 MHz. Transmitting power 33 dBm max',
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'Unknown', 
		  	Beamwidth:'Unknown', 
		  	Gain:'Unknown',
		  	Cost:"0"
	  	});

		var lga6 = new this.comm_parts({
		  	Type:'Low-Gain Antenna',
		  	Name:'Single Band Microstrip Patch Antenna', 
		  	Manufacturer:'AntDevCo', 
		  	Reference:'http://www.antdevco.com/ADC-0601291440%20R2%20Spacecraft%20Antenna%20&%20Hats%20Catalog%202-21-11.pdf', 
		  	Heritage:'Flight tested.', 
		  	Mass:'120', 
		  	Power:'10', 
		  	Volume:'0.00218', 
		  	Proportions:'38.1x38.1x1.5', 
		  	Frequency:'X-Band, S-Band, UHF', 
		  	Data_and_Objectives:'', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'Unknown', 
		  	Beamwidth:'100', 
		  	Gain:'36',
		  	Cost:"0"
	  	});

		var lga7 = new this.comm_parts({
		  	Type:'Low-Gain Antenna',
		  	Name:'S-Band Microstrip Patch Antenna', 
		  	Manufacturer:'AntDevCo', 
		  	Reference:'http://www.antdevco.com/ADC-0601291440%20R2%20Spacecraft%20Antenna%20&%20Hats%20Catalog%202-21-11.pdf', 
		  	Heritage:'Flight tested.', 
		  	Mass:'120', 
		  	Power:'10', 
		  	Volume:'0.0949', 
		  	Proportions:'203.2x101.6x4.6',
		  	Frequency:'S-Band', 
		  	Data_and_Objectives:'', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'Unknown', 
		  	Beamwidth:'100', 
		  	Gain:'35',
		  	Cost:"0" 
	  	});

	  	var lga8 = new this.comm_parts({
		  	Type:'Low-Gain Antenna',
		  	Name:'Double X-Band Patch Antenna', 
		  	Manufacturer:'JPL', 
		  	Reference:'http://digitalcommons.usu.edu/cgi/viewcontent.cgi?article=3083&context=smallsat', 
		  	Heritage:'developed by JPL. Planned flight on INSPIRE', 
		  	Mass:'Unknown', 
		  	Power:'Unknown', 
		  	Volume:'Unknown', 
		  	Proportions:'Printed on a circuit board, along with electronics', 
		  	Frequency:'X-Band', 
		  	Data_and_Objectives:'data rate 62000-64000 bps, 3 dB bandwidth of about 300 MHz', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'Unknown', 
		  	Beamwidth:'80', 
		  	Gain:'36',
		  	Cost:"0"
	  	});

		var hga1 = new this.comm_parts({
		  	Type:'High-Gain Antenna',
		  	Name:'Miniature Deployable High Gain (Parabolic) Antenna', 
		  	Manufacturer:'Boeing', 
		  	Reference:'http://mstl.atl.calpoly.edu/~bklofas/Presentations/DevelopersWorkshop2011/47_MacGillivray_Miniature_Antennas.pdf', 
		  	Heritage:'prototyped for cubesats. TRL 1-3', 
			Mass:'1000', 
			Power:'Unknown', 
			Volume:'0.43', 
			Proportions:'9.2cm x 9.2cm x 5.05cm', 
			Frequency:'S-Band', 
			Data_and_Objectives:'up to 28.5 Mbps (400 km orbit)', 
			Receiver_Sensitivity:'Unknown', 
			Transmit_Power:'Unknown', 
			Beamwidth:'Unknown', 
			Gain:'18',
			Cost:"0"
		});

		var hga2 = new this.comm_parts({
		  	Type:'High-Gain Antenna',
		  	Name:'Inflatable Antenna', 
		  	Manufacturer:'MIT', 
		  	Reference:'http://www.sciencedirect.com/science/article/pii/S0094576513001951', 
		  	Heritage:'In development, TRL 1-3', 
		  	Mass:'690', 
		  	Power:'Unknown', 
		  	Volume:'0.4', 
		  	Proportions:'100x100x50', 
		  	Frequency:'X-band', 
		  	Data_and_Objectives:'100 kbps LEO', 
		  	Receiver_Sensitivity:'Unknown', 
		  	Transmit_Power:'Unknown', 
		  	Beamwidth:'Unknown', 
		  	Gain:'Unknown',
		  	Cost:"0"
	  	});

		var bus1 = new this.comm_parts({
		  	Type:'Cubesat Bus',
		  	Name:'Intrepid Platform (3U)', 
		  	Manufacturer:'Tyvak', 
		  	Reference:'http://tyvak.com/intrepid-suite-1-1/', 
		  	Heritage:'', 
		  	Mass:'1200', 
		  	Mass_further:'includes batteries', 
		  	Power:'.400', 
		  	Volume:'3',
		  	Proportions:'10cm x 10cm x 30cm', 
		  	Frequency:'UHF 70 cm amateur', 
		  	Data_and_Objectives:'1.2-250 kbps', 
		  	Receiver_Sensitivity:'-112', 
		  	Transmit_Power:'Unknown', 
		  	Beamwidth:'Unknown', 
		  	Gain:'Unknown',
		  	Cost:"0"
	  	});

	  	transceiver1.save();
	  	transceiver2.save();
	  	transceiver3.save();
	  	transceiver4.save();
	  	transceiver5.save();
	  	transceiver6.save();
	  	transceiver7.save();
	  	transceiver8.save();
	  	transceiver9.save();
	  	transceiver10.save();

	  	// transceiver11.save();
	  	// transceiver12.save();

	  	transceiver13.save();
	  	transceiver14.save();
	  	transmitter1.save();
	  	transmitter2.save();
	  	transmitter3.save();
	  	transmitter4.save();
	  	lga1.save();
	  	lga2.save();
	  	lga3.save();
	  	lga4.save();
	  	lga5.save();	  	
	  	lga6.save();
	  	lga7.save();
	  	lga8.save();
	  	hga1.save();
	  	hga2.save(); 	
	  	bus1.save();
	}
	this.getPart = function(query,res) {
		this.comm_parts.find(query,function(error,output) {
			res.json(output);
		});
	}

	this.putPart = function(req, res) {
		var newpart = new this.comm_parts({
			Type: req.body.Type,
			Name: req.body.Name,
			Manufacturer: req.body.Manufacturer,
			Reference: req.body.Reference,
			Heritage: req.body.Heritage,
			Mass: req.body.Mass,
			Power: req.body.Power,
			Volume: req.body.Volume,
			Proportions: req.body.Proportions,
			Frequency: req.body.Frequency,
			Data_and_Objectives: req.body.Data_and_Objectives,
			Receiver_Sensitivity: req.body.Receiver_Sensitivity,
			Transmit_Power: req.body.Transmit_Power,
			Beamwidth: req.body.Beamwidth,
			Gain: req.body.Gain,
			Cost: req.body.Cost
    	});
		newpart.save(function (error, output) {
			res.json(output);
		});
	};

	this.updatePart = function(req, res) {
		this.comm_parts.update(
 		{
      		_id: req.params._id
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
			Frequency: req.body.Frequency,
			Data_and_Objectives: req.body.Data_and_Objectives,
			Receiver_Sensitivity: req.body.Receiver_Sensitivity,
			Transmit_Power: req.body.Transmit_Power,
			Beamwidth: req.body.Beamwidth,
			Gain: req.body.Gain,
			Cost: req.body.Cost
    	}, 
    	function(error, output) {
      		res.json(output);
    	});
	};

	this.removePart = function(req, res) {
    	this.comm_parts.remove({
            _id: req.params._id
        }, function(err, output) {
            if (err)
                res.send(output);
            res.json({ message: 'Successfully deleted' });
        });
	};
}

module.exports = CommFactory;