var InstrumentsFactory = function(Schema,mongoose) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		Schema = new this.Schema({
			Type: String,
			Name:String,
			Manufacturer:String,
			Reference:String,
			Heritage:String,
			Mass:String, 
			Power:String, 
			Volume:String,
			Proportions:String,
			Measurement:String,
			Resolution:String,
			Pixels:String,
			Objectives:String,
			FOV:String, 
			Cost:String
		});
		this.instrument_parts = mongoose.model('instrument_parts',Schema);
	}

	this.insertPart = function() {
		var Inst1=new this.instrument_parts({
			Type:'Camera',
			Name:'CubeSat Cam (CC 2)',
			Manufacturer:'Pumpkin',
			Reference:'http://www.cubesatkit.com/docs/datasheet/DS_CSK_CC_2_710-01102-A.pdf',
			Heritage:'CMOS imager w/ computing platform, custom configurations',
			Mass:"1500", 
			Power:"25", 
			Volume:"1.5",
			Proportions:'Unknown',
			Measurement:'Looks at visible light color images and video (90 fps)',
			Pixels:'2048 x 2048',
			Objectives:'Designed for orbital imaging and video',
			FOV:"Unknown", 
			Cost:"$75,000"
		});
		var Inst2=new this.instrument_parts({
			Type:'Camera',
			Name:'NanoCam C1U',
			Manufacturer:'GOMspace',
			Reference:'http://gomspace.com/index.php?p=products-c1u',
			Heritage:'Unknown',
			Mass:"166", 
			Power:"0.66", 
			Volume:"0.4558",
			Proportions:'9.17cm x 8.6cm x 5.78cm',
			Measurement:'Looks at visible color images',
			Resolution:"Unknown",
			Pixels:'2048 x 1536',
			Objectives:'Designed for a 1U CubeSat, Earth orbital missions',
			FOV:'9.22', 
			Cost:"11500.00 EUR"
		});
		var Inst3=new this.instrument_parts({
			Type:'Imaging Spectrometer',
			Name:'Miniature Fabry-Perot Hyperspectal Imager',
			Manufacturer:'VTT and Aalto University',
			Reference:'http://www.vtt.fi/inf/julkaisut/muut/2011/aalto1-Rome_1st_IAA_Cubesat_workshop_Jan2011_nasila-v01.pdf',
			Heritage:'In development by VTT (Finland), prototyped - based on a tunable Fabry-Pérot interferometer. Planned flight on Aalto-1. TRL 1-3 Configurable',
			Mass:"Estimated 350", 
			Power:"2", 
			Volume:"1",
			Proportions:"10cm x 10cm x 10cm",
			Measurement:'Creates 2D spectral images at multiple spectral channels. Configured for 500-900 nm or 435-570 nm (visible, near-IR)',
			Resolution:'7 to 10 nm',
			Pixels:"Unknown",
			Objectives:"The spectral imager is accompanied by a high resolution digital camera - smallest hyperspectral imager to be used in a satellite",
			FOV:'5', 
			Cost:"0"
		});
		var Inst4=new this.instrument_parts({
			Type:'Imaging Spectrometer',
			Name:'Compact Hyperspectral Camera',
			Manufacturer:'ESA (European Space Agency)',
			Reference:'http://www.esa.int/Our_Activities/Technology/Hyperspectral_imaging_by_CubeSat_on_the_way',
			Heritage:'In development by ESA, specifically for cubesats. TRL 1-3. Based on 3-mirror anastigmat concept (TMA). Probe V design. Better data compression',
			Mass:"Estimated 150", 
			Power:"Unknown", 
			Volume:"0.09",
			Proportions:'6cm x 5cm x 3cm',
			Measurement:'Creates hyperspectral 3D images (visible)',
			Resolution:'15 nm',
			Pixels:"Unknown",
			Objectives:"Obtain a wide field of view while maintaining an acceptable image quality",
			FOV:'50', 
			Cost:"0"
		});
		var Inst5=new this.instrument_parts({
			Type:'Imaging Spectrometer',
			Name:'Ultra Compact Imaging spectrometer (UCIS)',
			Manufacturer:'JPL',
			Reference:'http://www.lpi.usra.edu/meetings/ipm2012/pdf/1105.pdf',
			Heritage:'In development for small rovers and landers. Not yet cubesat ready. Based on M3 (Moon Mineralogy Mapper). TRL 1-3',
			Mass:"Estimated 3500", 
			Power:"5.2", 
			Volume:"2",
			Proportions:"10cm x 10cm x 20cm",
			Measurement:'Looks at visible, near-IR and short-IR',
			Resolution:'Imaging spatial swath 380 pixels, 10 nm',
			Pixels:'380',
			Objectives:'Designed for in situ use in Martian environment, lander, rover, can be damaged by water condensation, prevented by vaccuum can attachment',
			FOV:'30', 
			Cost:"0"
		});
		var Inst6=new this.instrument_parts({
			Type:'Spectrometer', 
			Name:'Argus 1000 IR Spectrometer (InGaAs)',
			Manufacturer:'York University, Toronto (developer), sold by cubesatshop',
			Reference:"http://thothx.com/manuals/Argus%20Owner's%20Manual,%20Thoth%20Technology,%20Oct%2010,%20rel%201_03.pdf",
			Heritage:'Flown on CanX-2, TRL 7-9',
			Mass:"230", 
			Power:"1", 
			Volume:"0.24",
			Proportions:'5.0cm x 6.0cm x 8.0cm',
			Measurement:'Looks at near-IR to short-IR',
			Resolution:'10 bits',
			Pixels:'1 x 256',
			Objectives:'Collect spectral data, elemental/chemical measurements (especially atmosphere)',
			FOV:'0.15', 
			Cost:"$14700"
		});
		var Inst8=new this.instrument_parts({
			Type: 'Detector',
			Name:'Photoconductive HgCdTe (Mercury Cadmium Telluride) Detector',
			Manufacturer:'Teledyne',
			Reference:'http://www.judsontechnologies.com/mercadm_pc.html',
			Heritage:'Various models',
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Looks at the 2-26 um range, various models callibrated to different peak response wavelengths. Can detect near-IR, short-IR, mid-IR, long-IR',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:'Thermal imaging, Fourier Transform spectroscopy',
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst10=new this.instrument_parts({
			Type: 'Detector',
			Name:'InGaAs (Indium Gallium Arsenide) Detector',
			Manufacturer:'Teledyne',
			Reference:'http://www.judsontechnologies.com/files/pdf/InGaAs_shortform_DEC2004_rev2.pdf',
			Heritage:"Unknown",
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Looks at near-IR, specifically from 700 nm to 1800 nm',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:"These detectors provide fast rise time, uniformity of response, excellent sensitivity, and long term reliability for a wide range of applications",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst11=new this.instrument_parts({
			Type: 'Detector',
			Name:'InAs (Indium Arsenide) Detector',
			Manufacturer:'Teledyne',
			Reference:'http://www.judsontechnologies.com/ind_ars.html',
			Heritage:"Unknown",
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"2",
			Proportions:"Unknown",
			Measurement:'Looks at the 1-3.8 um range. Can detect near-IR, mid-IR',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:"High-quality Indium Arsenide photodiodes for use in the 1 to 3.8 µm wavelength range",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst12=new this.instrument_parts({
			Type: 'Detector',
			Name:'PbS (Lead Sulfide) Detector',
			Manufacturer:'Teledyne',
			Reference:'http://www.judsontechnologies.com/lead_sulf.html',
			Heritage:"Unknown",
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Looks at the 1-3.5 um range. Can detect near-IR, mid-IR',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:"Lead Sulfide (PbS) photoconductive (PC) detectors designed for operation in the 1-3.5µm wavelength region",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst13=new this.instrument_parts({
			Type: 'Detector',
			Name:'PbSe (Lead Selenide) Detector',
			Manufacturer:'Teledyne',
			Reference:'http://www.judsontechnologies.com/lead_sel.html',
			Heritage:"Unknown",
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Looks at the 2-6 um range. Can detect near-IR, mid-IR',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:"Lead Selenide (PbSe) photoconductive (PC) detectors designed for operation in the 2-6 µm wavelength region",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst14=new this.instrument_parts({
			Type: 'Detector',
			Name:'Photovoltaic HgCdTe (Mercury Cadmium Telluride) Detector',
			Manufacturer:'Teledyne',
			Reference:'http://www.judsontechnologies.com/mercadm_pv.html',
			Heritage:"Unknown",
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Looks at the .5-5 um range. Can detect near-IR, mid-IR',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:"HgCdTe photodiodes operate in the photovoltaic mode and do not require a bias current for operation",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst15=new this.instrument_parts({
			Type:'Magnetometer',
			Name:'Tri-Axial Magnetometer',
			Manufacturer:'ISIS',
			Reference:'http://www.cubesatshop.com/index.php?page=shop.product_details&flypage=flypage.tpl&product_id=90&category_id=7&option=com_virtuemart&Itemid=69',
			Heritage:'Anisotropic magnetoresistance',
			Mass:"165, 15 g from the sensor, 150 g from electronics", 
			Power:"0.4", 
			Volume:"0.0302",
			Proportions:'10.0cm x 4.0cm x 1.6cm',
			Measurement:'Detect and measure the amplitude and direction of magnetic fields',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:'detect and measure magnetic fields. Attitude determination in Earth orbit',
			FOV:"Unknown", 
			Cost:"11000"
		});
		var Inst16=new this.instrument_parts({
			Type:'Magnetometer',
			Name:'Tri-Axial Magnetometer',
			Manufacturer:'SSBV',
			Reference:'http://www.ssbv.com/resources/Datasheets/SSBV_Magnetometer_Datasheet_1g.pdf',
			Heritage:'anisotropic magnetoresistance. Developed with Imperial College London, 3 flights in 2011-12. TRL 7-9',
			Mass:"200, 20 g sensor, 180 g electronics", 
			Power:"0.4", 
			Volume:"0.05202",
			Proportions:'8.5cm x 3.6cm x 1.7cm',
			Measurement:'Detect and measure magnetic fields (+-50,000 nT)',
			Resolution:'13 nT',
			Pixels:"Unknown",
			Objectives:'10 krad total dose',
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst17=new this.instrument_parts({
			Type:'Magnetometer',
			Name:'Helium Magnetometer',
			Manufacturer:'JPL',
			Reference:'http://cubesat.jpl.nasa.gov/projects/inspire/science.html',
			Heritage:'Based on full-sized instruments (Cassini). Planned flight on INSPIRE. TRL 4-6',
			Mass:"500", 
			Power:"Unknown", 
			Volume:"0.5",
			Proportions:"Unknown",
			Measurement:'Detect and measure magnetic fields',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:'Detect and measure magnetic fields. Attitude determination in Earth orbit. Vector mode, Scalar mode',
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst18=new this.instrument_parts({
			Type:'Magnetometer',
			Name:'MAGIC Magnetometer',
			Manufacturer:'Imperial College London',
			Reference:'http://iopscience.iop.org/0957-0233/23/2/025902/pdf/0957-0233_23_2_025902.pdf',
			Heritage:'magnetoresistive. Planned flight on CINEMA. TRL 4-6',
			Mass:"120",
			Power:"0.42 in science mode, .14 W in attitude mode", 
			Volume:"0.15",
			Proportions:'10 cm^3 (sensor), 9 cm x 9.6 cm x 2 cm (electronics)',
			Measurement:'Detect and measure magnetic fields up to 57000 nT.',
			Resolution:'Precision 25 nT attitude mode, 2-10 nT science mode.',
			Pixels:"Unknown",
			Objectives:'Designed to be mounted on boom for less spacecraft interference.',
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst19=new this.instrument_parts({
			Type:'Magnetometer',
			Name:'Smart Digital Magnetometer HMR2300',
			Manufacturer:'Honeywell',
			Reference:'http://www51.honeywell.com/aero/common/documents/myaerospacecatalog-documents/Missiles-Munitions/HMR2300.pdf',
			Heritage:'3-axis, flown on ESTCube, anisotropic magnetoresistive (AMR) tech, surface mounted',
			Mass:"100", 
			Power:"0.525", 
			Volume:"0.09",
			Proportions:'3.81cm x 10.7cm x 2.23cm',
			Measurement:'Measure magnetic fields with precision of +- 200000 nT',
			Resolution:'70 uG',
			Pixels:"Unknown",
			Objectives:'The three of Honeywell’s magneto-resistive sensors are oriented in orthogonal directions to measure the X, Y and Z vector components of a magnetic field',
			FOV:"Unknown",
			Cost:"0"
		});
		var Inst20=new this.instrument_parts({
			Type:'Magnetometer',
			Name:'3-Axis Magnetic Sensor Hybrid HMC2003',
			Manufacturer:'Honeywell',
			Reference:'https://physics.ucsd.edu/neurophysics/Manuals/Honeywell/HMC_2003.pdf',
			Heritage:'hybrid of HMR 1001/1002',
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"2",
			Proportions:"Unknown",
			Measurement:'+- 200000 nT magnetic',
			Resolution:'40 uG',
			Pixels:"Unknown",
			Objectives:"The Honeywell HMC2003 is a high sensitivity, three-axis magnetic sensor hybrid assembly used to measure low magnetic field strengths",
			FOV:"Unknown",
			Cost:"0"
		});
		var Inst21=new this.instrument_parts({
			Type:'Magnetometer',
			Name:'HMC 1001/1002 Integrated Circuit Magnetometer',
			Manufacturer:'Honeywell',
			Reference:'https://physics.ucsd.edu/neurophysics/Manuals/Honeywell/HMC%201001%20and%20HMC%201002.pdf',
			Heritage:'Single (1001) and Dual (1002) axis magnetometers. 3 axes when used together',
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"0.00004826",
			Proportions:'190x25.4',
			Measurement:'magnetic',
			Resolution:'40 uG',
			Pixels:"Unknown",
			Objectives:"The Honeywell HMC100x and HMC102x magnetic sensors are one and two-axis surface mount sensors designed for low field magnetic sensing",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst21=new this.instrument_parts({
			Type:'Magnetometer',
			Name:'HMC 1001/1002 Integrated Circuit Magnetometer',
			Manufacturer:'Honeywell',
			Reference:'https://physics.ucsd.edu/neurophysics/Manuals/Honeywell/HMC%201001%20and%20HMC%201002.pdf',
			Heritage:'Single (1001) and Dual (1002) axis magnetometers. 3 axes when used together',
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"0.00004826",
			Proportions:'190x25.4',
			Measurement:'magnetic',
			Resolution:'40 uG',
			Pixels:"Unknown",
			Objectives:"Unknown",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst22=new this.instrument_parts({
			Type:'Particle Detector/Radiometer',
			Name:'STEIN (Suprathermal Electron, Ion, Neutral) sensor',
			Manufacturer:'UC Berkeley',
			Reference:'ftp://apollo.ssl.berkeley.edu/pub/cinema/14.%20CubeSat%20Literature/STEIN%20SmallSat%20Paper%20SSC09-III-1.pdf',
			Heritage:'flown on CINEMA, based on STEREO sensor. TRL 7-9',
			Mass:"385", 
			Power:"0.54", 
			Volume:"0.018411",
			Proportions:'5.1cm x 1.9cm x 1.9cm',
			Measurement:'detection in 2 to 100 keV. Distinguishishes electrons, ions, and energetic neutral particles. Also detects visible, UV light, and X-rays',
			Resolution:'resolution 1 keV',
			Pixels:"Unknown",
			Objectives:"Highly capable, low mass, and low power consumption silicon semiconductor detectors (SSDs)",
			FOV:'15', 
			Cost:"0"
		});
		var Inst23=new this.instrument_parts({
			Type: 'Particle Detector',
			Name:'REPTile (Relativistic Electron and Proton Telescope integrated little experiment)',
			Manufacturer:'University of Colorado, Boulder',
			Reference:'http://lasp.colorado.edu/home/csswe/files/2012/06/Schiller-and-Mahendrakumar.pdf',
			Heritage:'developed for and flown on CSSWE cubesat, modeled after REPT (Van Allen Probes). Also flown on firebird. TRL 7-9',
			Mass:"1250", 
			Power:"less than 1", 
			Volume:"1",
			Proportions:'6.05 cm length, 6 cm diameter',
			Measurement:'Distinguish and measure electrons .5 to 3 MeVs and protons 10-40 MeVs',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:'Designed to observe space weather, radiation belts',
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst24=new this.instrument_parts({
			Type: 'Spectrometer/Particle Detector',
			Name:'ChaPS (Charged Particle Spectrometer)',
			Manufacturer:'UCL-MSSL (University College London- Mullard)',
			Reference:'https://directory.eoportal.org/web/eoportal/satellite-missions/t/techdemosat-1',
			Heritage:'will fly on TechDemoSat-1. 4 mini-sensors in one.',
			Mass:'less than 300', 
			Power:"0.4", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:"Detect electrons, and ions",
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:'Designed to detect space plasma in LEO; The objective of ChaPS is to demonstrate a novel payload design that combines the capabilities of multiple analyzers by using four miniaturized sensors to perform simultaneous electron-ion detection. Each of the sensors is optimized to carry out electrostatic analysis of the different space plasma populations expected in LEO (Low Earth Orbit). (from reference)',
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst25=new this.instrument_parts({
			Type: 'Particle Detector',
			Name:'MuREM (Micro Radiation Environment Monitor)',
			Manufacturer:"Unknown",
			Reference:'https://directory.eoportal.org/web/eoportal/satellite-missions/t/techdemosat-1',
			Heritage:'will fly on TechDemoSat-1.',
			Mass:"less than 1000", 
			Power:"Unknown", 
			Volume:"0.45",
			Proportions:'10.0cm x 10.0cm x 4.5cm',
			Measurement:'Detect energetic protons, and heavy ions',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:'In-flight data on total ionizating dose of instrument and individual components. MuREM (or µREM) is designed to provide in-fight data on TID (Total Ionizing Dose), dose rate and the charge deposition spectra of SEE (Single Event Effect) initiating energetic protons and heavy ions, as well as providing radiation effects data on samples of advanced COTS (Commercial-off-the-Shelf) electronic devices. Its low mass (< 1 kg) and low power make it suitable in whole or part as a generic radiation environment monitor for routine fight on micro- or nanosatellites. (from reference)',
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst26=new this.instrument_parts({
			Type: 'Radiometer',
			Name:'CHARM (CubeSat Hydrometric Atmospheric Radiometer Mission)',
			Manufacturer:'JPL and Ames',
			Reference:'http://trs-new.jpl.nasa.gov/dspace/bitstream/2014/42404/1/12-2564.pdf',
			Heritage:'will be launched on RACE. Uses indium phosphide noise amplifier. TRL 4-6',
			Mass:"1500 estimate", 
			Power:"Unknown", 
			Volume:"1.5",
			Proportions:"Unknown",
			Measurement:'Measures radiation in 4 channels at 183, 186,188, and 190 GHz (1640 um), as well as microwave',
			Resolution:'noise figure 6 dB',
			Pixels:"Unknown",
			Objectives:'Measures water vapor line.',
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst27=new this.instrument_parts({
			Type: 'Particle Detector',
			Name:'HMRM (Highly Miniaturized Radiation Monitor)',
			Manufacturer:'ICL (Imperial College London) and RAL (Rutherford Appleton Laboratory)',
			Reference:'http://space-env.esa.int/indico/getFile.py/access?contribId=9&resId=0&materialId=slides&confId=14',
			Heritage:'In development. will fly on TechDemoSat-1. TRL 1-3',
			Mass:"52", 
			Power:"2 worst case, ranges from 1-2", 
			Volume:"0.015",
			Proportions:'20x25x30',
			Measurement:'energetic electrons 0.06 – 6 MeV, protons 1 – 500 MeV, and ions',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:'In-flight data on total ionizing dose, particle flux rate and particle identification.  Greater than 100 krad total ionizing dose.',
			FOV:"Unknown",  
			Cost:"0"
		});
		var Inst28=new this.instrument_parts({
			Type: 'Radiometer',
			Name:'LUCID (Langton Ultimate Cosmic ray Intensity Detector)',
			Manufacturer:'Langston Star Centre',
			Reference:'http://www.sstl.co.uk/Blog/February-2013/TechDemoSat-1-s-LUCID--a-novel-cosmic-ray-detector',
			Heritage:'will fly on TechDemoSat-1. Uses COTS sensor from CERN.',
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:"Detects x-ray, particle detector, cosmic",
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:"Developed to measure the subtler aspects of space radiation: the energy, type, intensity and directionality of high energy particles.  (from reference)",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst29=new this.instrument_parts({
			Type: 'Radiometer/Spectrometer',
			Name:'MicroMAS Microwave Radiometer/ Spectrometer',
			Manufacturer:'MIT',
			Reference:'https://directory.eoportal.org/web/eoportal/satellite-missions/m/micromas-1',
			Heritage:'in development, will launch on MicroMAS-1 in 2014. Based on MMIC technology. TRL 4-6',
			Mass:"less than 100", 
			Power:"3", 
			Volume:"1",
			Proportions:"Unknown",
			Measurement:'Measures radiation around 118 GHz (2540 um) in 9 wavelength channels, microwave (oxygen absorption line)',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:'Designed for weather observations in Earth LEO at oxygen absorbtion line. Spins to cover large areas.',
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst30=new this.instrument_parts({
			Type: "Unknown",
			Name:'Gamma-Ray Detector Instrument (GRD)',
			Manufacturer:'GSFC',
			Reference:'https://directory.eoportal.org/web/eoportal/satellite-missions/f/firefly',
			Heritage:'flew on Firefly',
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"0.064",
			Proportions:'8.0cm x 8.0cm x 1cm',
			Measurement:'Measures arrival time and energy of x-ray and gamma ray photons (100 keV to 10 MeV), and detects relativistic electrons (100 keV to 2 MeV)',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:'Designed to measure Earth-based gamma ray bursts (from lightning) in orbit.',
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst31=new this.instrument_parts({
			Type: 'Photometer/Radiometer',
			Name:'VLF Receiver/Photometer Experiment',
			Manufacturer:'Siena College',
			Reference:'https://directory.eoportal.org/web/eoportal/satellite-missions/f/firefly',
			Heritage:'flew on Firefly',
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Detects very low frequency radio waves (10s of Hz to tens of kHz) and visible light',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:'Designed to measure VLF radio lightning wave discharge signatures for each gamma ray flash.',
			FOV:"Unknown",  
			Cost:"0"
		});
		var Inst32=new this.instrument_parts({
			Type: 'Photometer/Radiometer',
			Name:'Miniaturized Vacuum UV Photometer (CTIP)',
			Manufacturer:'Scientific Solutions Inc, SRI International, and ASTRA',
			Reference:'http://mstl.atl.calpoly.edu/~bklofas/Presentations/DevelopersWorkshop2009/3_Space_Weather/3_Noto-CTIP.pdf',
			Heritage:'prototyped w/ functional tests, based on TIPS on COSMIC satellite. TRL 1-3',
			Mass:"less than 800", 
			Power:"2.3", 
			Volume:"1.5",
			Proportions:"Unknown",
			Measurement:'Detect UV radiation',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:'Designed to measure density of the ionosphere by detecting oxygen ions.',
			FOV:'3.8', 
			Cost:"0"
		});
		var Inst33=new this.instrument_parts({
			Type: 'Detector',
			Name:'Indium Antimonide (InSb) Detector',
			Manufacturer:'Teledyne',
			Reference:'http://www.judsontechnologies.com/indiumant.html',
			Heritage:'Photodiode. TRL 4-6. Customizable from company',
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Can detect near-IR, mid-IR',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:"J10D Series detectors are high quality Indium Antimonide (InSb)photodiodes, providing excellent performance in the 1 to 5.5 µm wavelength region. Single crystal p–n junction technology yields high speed, low noise detectors with excellent uniformity, linearity and stability. (from reference)",
			FOV:'60', 
			Cost:"0"
		});

		var Inst41=new this.instrument_parts({
			Type: 'Imaging Spectrometer',
			Name:'Sofradir Scorpio BB',
			Manufacturer:'Sofradir',
			Reference:'http://www.electrophysics.com/DbImages/SofEC-IRE_Cooled_Infrared_Cameras-v02.pdf',
			Heritage:'640x512 pixel array',
			Mass:"less than 450", 
			Power:"4.2 Watts, 32 Volts", 
			Volume:"0.5",
			Proportions:"Unknown",
			Measurement:'Broadband instrument, looks at the 1.5-5.1 um range. Can detect near-IR, mid-IR',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:"Designed for infrared imaging and video.",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst42=new this.instrument_parts({
			Type: 'Altimeter',
			Name:'SeaCube Radar Altimeter for CubeSats',
			Manufacturer:'Busek Co. Inc. and ImSAR LLC',
			Reference:'http://www.sbir.gov/sbirsearch/detail/408209',
			Heritage:'In development for 3 U cubesats. Development began 2013',
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Looks at the acoustic region (waves). Has a low data transfer rates and operates in pulse mode',
			Resolution:"Unknown",
			Pixels:"Unknown",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst43=new this.instrument_parts({
			Type: 'Radiometer', Name:'CTZ (Cadmium Zinc Telluride) Array',
			Manufacturer:'Michigan state, Black Forest Engineering LLC.',
			Reference:'https://e-reports-ext.llnl.gov/pdf/625738.pdf',
			Heritage:'Developed by Michigan state, built by Black Forest Engineering LLC. Flown on CXBN',
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"2",
			Proportions:"Unknown",
			Measurement:'Optimal operating range in the 30-50 keV range, X-ray background peak. Also detects gamma rays and cosmic rays.',
			Resolution:'1 keV resolution at 60 keV.',
			Pixels:'600x600',
			Objectives:'Designed to measure cosmic x- ray backround with precision from Earth orbit',
			FOV:'36', 
			Cost:"0"
		});
		var Inst44=new this.instrument_parts({
			Type: 'Camera',
			Name:'CMOS HDCS-1020 (CIF)',
			Manufacturer:'Agilent Technologies',
			Reference:'http://mxhaard.free.fr/spca50x/Doc/Agilent/HDCS1020-2020Brief.pdf',
			Heritage:'CMOS imager',
			Mass:"Unknown", 
			Power:"0.09 Watts, 3.3 Volt supply",
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Can detect visible light',
			Resolution:"Unknown",
			Pixels:'352x288',
			Objectives:" Designed for low-cost applications. Deliver images at very low power.",
			FOV:"Unknown",  
			Cost:"0"
		});
		var Inst45=new this.instrument_parts({
			Type: 'Camera',
			Name:'CMOS HDCS-2020 (VGA)',
			Manufacturer:'Agilent Technologies',
			Reference:'http://mxhaard.free.fr/spca50x/Doc/Agilent/HDCS1020-2020Brief.pdf',
			Heritage:'CMOS imager',
			Mass:"Unknown", 
			Power:"0.15 Watts, 3.3 Volt supply", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Can detect visible light',
			Resolution:"Unknown",
			Pixels:'640x480',
			Objectives:" Designed for low-cost applications. Deliver images at very low power.",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst46=new this.instrument_parts({
			Type: 'Spectrometer',  
			Name:'Broadband IR for CubeSats with High Resolution (BIRCHES)',
			Manufacturer:'GSFC',
			Reference:"Unknown",
			Heritage:'In development. Planned flight on LWaDi. Prototyped. TRL 1-3. Includes cryocooler, H1RG (HgCdTe) detector, adjustable iris to maintain 10 km ground footprint',
			Mass:"620", 
			Power:"less than 5, 2 Watts plus 3 Watts cryocooler", 
			Volume:"1.5",
			Proportions:"Unknown",
			Measurement:'Looks at the 1.3-3.7 um range. Can detect broadband, near-IR, mid-IR',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:"Designed to determine the systematics of lunar water and volatiles as a function of time of day, latitude, and terrain.",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst47=new this.instrument_parts({
			Type: 'Detector',
			Name:'HAWAII-4RG',
			Manufacturer:'Teledyne',
			Reference:'http://www.teledyne-si.com/imaging/hawaii4rg.html',
			Heritage:'FPA',
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Can detect x-ray, ultraviolet, visible, near-IR, mid-IR (up to 5.5 um)',
			Resolution:"Unknown",
			Pixels:'4096x4096',
			Objectives:"Designed for visible and infrared instrumentation in ground-based and space telescope applications.",
			FOV:"Unknown",
			Cost:"0"
		});
		var Inst48=new this.instrument_parts({
			Type: 'Detector',
			Name:'HAWAII-2RG Focal Plane Array',
			Manufacturer:'Teledyne',
			Reference:'http://www.teledyne-si.com/imaging/H2RG%20Brochure%20-%20rev6%20v2-2%20-%20OSR.pdf',
			Heritage:'FPA',
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Can detect x-ray, ultraviolet, visible, near-IR, mid-IR (up to 5.5 um)',
			Resolution:"Unknown",
			Pixels:'2048x2048',
			Objectives:"Designed for visible and infrared instrumentation in ground-based and space telescope applications.",
			FOV:"Unknown",  
			Cost:"0"
		});
		var Inst49=new this.instrument_parts({
			Type: 'Camera',
			Name:'HMIR (High Temperature Midwave Infrared) Camera Engine',
			Manufacturer:'Teledyne',
			Reference:'http://www.teledyne-si.com/imaging/TSI-0608.pdf',
			Heritage:"Unknown",
			Mass:"600 g total, including larger cryocooler (K527L), 350 g w/ smaller cryocooler (K562S)",
			Power:"less than 7", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Looks at the 3-5 um range, .4-5 um optional. Can detectmid-IR',
			Resolution:"Unknown",
			Pixels:'640x512',
			Objectives:"Designed for midwave IR measurments at low power and improved lifetime.",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst50=new this.instrument_parts({
			Type: 'Detector',
			Name:'Silicon/Germanium Detector',
			Manufacturer:'Teledyne',
			Reference:"http://www.judsontechnologies.com/germanium.html",
			Heritage:"Unknown",
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Looks at the 800-1800 nm range. Can detect near-IR',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:"Designed as high-quality Germanium photodiodes designed for the 800 to 1800nm wavelength range.",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst51=new this.instrument_parts({
			Type: 'Detector',
			Name:'HAWAII-1RG',
			Manufacturer:'Teledyne',
			Reference:'http://www.teledyne-si.com/imaging/H1RG%20Brochure%20-%20GBA%20Flight%20v2%20final.pdf',
			Heritage:'FPA',
			Mass:"Unknown", 
			Power:"0.1 worst case, ranges .002 to .1 Watts", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:"Can detect long-IR",
			Resolution:"Unknown",
			Pixels:'1024x1024',
			Objectives:"Designed for visible and infrared instrumentation in ground-based and space telescope applications.",
			FOV:"Unknown", 
			Cost:"0"
		});
		
		var Inst53=new this.instrument_parts({
			Type: 'Camera',
			Name:'Micro-Cam',
			Manufacturer:'Teledyne',
			Reference:'http://www.teledyne-si.com/imaging/microcam.html',
			Heritage:'FPA',
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Can detect near-IR, far-IR, mid-IR, long-IR, short-IR',
			Resolution:"Unknown",
			Pixels:"Unknown",
			Objectives:"Designed for visible spectrum, near IR, and midwave IR imaging.",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst54=new this.instrument_parts({
			Type: 'Camera',
			Name:'Tamarisk 320',
			Manufacturer:'DRS Technologies, Inc.',
			Reference:'http://www.drsinfrared.com/Products/TamariskUncooledCameraModules.aspx',
			Heritage:'Detector type: uncooled Vox Microbolometer',
			Mass:"30", 
			Power:"as little as 0.75", 
			Volume:"0.03",
			Proportions:'3cm x 3cm x 3cm',
			Measurement:'Looks at the 8-14 um range. Can detect long-IR',
			Resolution:"Unknown",
			Pixels:'320x240',
			Objectives:'Designed to consume very low volume and power. Imaging in the Long-Wave IR spectrum.',
			FOV:'Variety of lense configurations available, 10-40 deg FOV', 
			Cost:"0"
		});
		var Inst55=new this.instrument_parts({
			Type: 'Camera',
			Name:'Tamarisk 640',
			Manufacturer:'DRS Technologies, Inc.',
			Reference:'http://www.drsinfrared.com/Products/TamariskUncooledCameraModules.aspx',
			Heritage:'Detector type: uncooled Vox Microbolometer. Superior resolution to Tamarisk 320',
			Mass:"Less than 60", 
			Power:"Less than 1.5", 
			Volume:"0.05",
			Proportions:'4.0cm x 4.6cm x 3.1cm',
			Measurement:'Looks at the 8-14 um range. Can detect long-IR',
			Resolution:"Unknown",
			Pixels:'640x480',
			Objectives:'Designed to consume very low volume and power. Imaging in the Long-Wave IR spectrum.',
			FOV:'Variety of lense configurations available, 10-40 deg FOV', 
			Cost:"0"
		});
		var Inst56=new this.instrument_parts({
			Type: 'Camera',
			Name:'ANT-2a VIS Camera',
			Manufacturer:'Delfi Space',
			Reference:'http://www.delfispace.nl/advanced-concepts/nanosatellite-cameras',
			Heritage:'Good spatial resolution',
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:"Looks at the visible range",
			Resolution:"5 to 10 m",
			Pixels:"Unknown",
			Objectives:"Designed to capture high to medium spatial resolutions, i.e. 5 to 10 m, depending on the altitude. Intended for Earth Orbit.",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst57=new this.instrument_parts({
			Type: 'Camera',
			Name:'ANT-2b VIS Camera',
			Manufacturer:'Delfi Space',
			Reference:'http://www.delfispace.nl/advanced-concepts/nanosatellite-cameras',
			Heritage:"Unknown",
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:"Looks at the visible range",
			Resolution:"25 m at 500 km",
			Pixels:"Unknown",
			Objectives:"Designed to capture high to medium spatial resolutions, i.e. 5 to 10 m, depending on the altitude. Intended for Earth Orbit.",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst58=new this.instrument_parts({
			Type: 'Camera',
			Name:'ARCTIC-1',
			Manufacturer:'Delfi Space',
			Reference:'http://www.tudelft.nl/studeren/bacheloropleidingen/overzicht-opleidingen/luchtvaart-en-ruimtevaarttechniek/studieprogramma/derde-jaar/design-synthesis-exercise/ds-exercise-2012/arctic-a-thermal-infrared-camera/',
			Heritage:"Unknown",
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"less than 2",
			Proportions:"Unknown",
			Measurement:'Looks at the 9-11 um range. Can detect long-IR',
			Resolution:'95 mk',
			Pixels:'640x480',
			Objectives:"Unknown",
			FOV:'5x3.74 deg', 
			Cost:"0"
		});
		var Inst59=new this.instrument_parts({
			Type: 'Camera',
			Name:'Catalina PF 128-40',
			Manufacturer:'Teledyne Nova',
			Reference:'http://www.camerasbyteledyne.com/ScientificIC.html',
			Heritage:"Unknown",
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Looks at the 2-10.5 um range. Can detect near-IR, mid-IR, long-IR',
			Resolution:'Pixel pitch 40 um',
			Pixels:'128x128',
			Objectives:"Designed for IR scientific imaging",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst60=new this.instrument_parts({
			Type: 'Camera',
			Name:'Cruz PF 640-24',
			Manufacturer:'Teledyne Nova',
			Reference:'http://www.camerasbyteledyne.com/ScientificIC.html',
			Heritage:"Unknown",
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Looks at the 1-5.3 um. Can detect near-IR, mid-IR',
			Resolution:'Pixel pitch 24 um',
			Pixels:'640x512',
			Objectives:"Designed for IR scientific imaging",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst61=new this.instrument_parts({
			Type: 'Camera',
			Name:'Anacapa PF 320-30',
			Manufacturer:'Teledyne Nova',
			Reference:'http://www.camerasbyteledyne.com/ScientificIC.html',
			Heritage:"Unknown",
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Looks at the 1-5.3 um range. Can detect near-IR, mid-IR',
			Resolution:'pixel pitch 30 um',
			Pixels:'320x256',
			Objectives:"Designed for IR scientific imaging",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst62=new this.instrument_parts({
			Type: 'Camera',
			Name:'Cruz 640-20',
			Manufacturer:'Teledyne Nova',
			Reference:'http://www.camerasbyteledyne.com/ScientificIC.html',
			Heritage:"Unknown",
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Looks at the 1-5.3 um range. Can detect near-IR, mid-IR',
			Pixels:'640x512',
			Objectives:"Designed for IR scientific imaging",
			FOV:"Unknown", 
			Cost:"0"
		});
		var Inst63=new this.instrument_parts({
			Type: 'Camera',
			Name:'Anacapa 640-25',
			Manufacturer:'Teledyne Nova',
			Reference:'http://www.camerasbyteledyne.com/ScientificIC.html',
			Heritage:"Unknown",
			Mass:"Unknown", 
			Power:"Unknown", 
			Volume:"Unknown",
			Proportions:"Unknown",
			Measurement:'Looks at the .9-1.7 um range. Can detect near-IR',
			Resolution:'Pixel pitch 25 um',
			Pixels:'640x512',
			Objectives:"Designed for IR scientific imaging",
			FOV:"Unknown", 
			Cost:"0"
		});

		Inst1.save();
		Inst2.save();
		Inst3.save();
		Inst4.save();
		Inst5.save();
		Inst6.save();
		Inst8.save();		
		Inst10.save();
		Inst11.save();
		Inst12.save();
		Inst13.save();
		Inst14.save();
		Inst15.save();
		Inst16.save();
		Inst17.save();
		Inst18.save();
		Inst19.save();
		Inst20.save();
		Inst21.save();
		Inst22.save();
		Inst23.save();
		Inst24.save();
		Inst25.save();
		Inst26.save();
		Inst27.save();
		Inst28.save();
		Inst29.save();
		Inst30.save();
		Inst31.save();
		Inst32.save();
		Inst33.save();

		Inst41.save();
		Inst42.save();
		Inst43.save();
		Inst44.save();
		Inst45.save();
		Inst46.save();
		Inst47.save();
		Inst48.save();
		Inst49.save();
		Inst50.save();
		Inst51.save();
		// Inst52.save();
		Inst53.save();
		Inst54.save();
		Inst55.save();
		Inst56.save();
		Inst57.save();
		Inst58.save();
		Inst59.save();
		Inst60.save();
		Inst61.save();
		Inst62.save();
		Inst63.save();
	}

	this.getPart = function(query,res) {
		this.instrument_parts.find(query,function(error,output) {
			res.json(output);
		});
	}

	this.putPart = function(req, res) {
		var newpart = new this.instrument_parts({
			Type: req.body.Type,
			Name: req.body.Name,
			Manufacturer: req.body.Manufacturer,
			Reference: req.body.Reference,
			Heritage: req.body.Heritage,
			Mass: req.body.Mass, 
			Power: req.body.Power, 
			Volume: req.body.Volume,
			Proportions: req.body.Proportions,
			Measurement: req.body.Measurement,
			Resolution: req.body.Resolution,
			Pixels: req.body.Pixels,
			Objectives: req.body.Objectives,
			FOV: req.body.FOV, 
			Cost: req.body.Cost
    	});
		newpart.save(function (error, output) {
			res.json(output);
		});
	};

	this.updatePart = function(req, res) {
		this.instrument_parts.update(
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
			Measurement: req.body.Measurement,
			Resolution: req.body.Resolution,
			Pixels: req.body.Pixels,
			Objectives: req.body.Objectives,
			FOV: req.body.FOV, 
			Cost: req.body.Cost
    	}, function(error, output) {
      		res.json(output);
    	});
	};

	this.removePart = function(req, res) {
    	this.instrument_parts.remove({
            _id: req.params._id
        }, function(err, output) {
            if (err)
                res.send(output);
            res.json({ message: 'Successfully deleted' });
        });
	};
}

module.exports = InstrumentsFactory;



