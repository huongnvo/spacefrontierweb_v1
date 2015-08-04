var ThermalFactory = function(Schema,mongoose) {

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
		    Additional_info: String,
		    Cost:String
		});
		this.thermal_parts = mongoose.model('thermal_parts',Schema);
	}

	this.insertPart = function() {
		var th_m1 = new this.thermal_parts({
			Cost:"0",
			Type:'Active Thermal Control',
			Name:'Space Qualified Batteries w/ Integrated Battery Heater (COTS)',
			Manufacturer:'Clyde Space',
			Reference:'http://www.clyde-space.com/products/spacecraft_batteries',
			Heritage:'Sold by Clyde',
			Mass:'256',
			Power:'0.1',
			Volume:'0.2',
			Proportions:'10cm x 10cm x 2cm',
			Additional_info:'Designed to integrate with a suitable EPS and solar arrays to form a complete power system for a CubeSat'
		});

		var th_m2 = new this.thermal_parts({
			Cost:"0",
			Type:'Passive Thermal Control',
			Name:'Multi-Layer Insulation (MLI)',
			Manufacturer:'',
			Reference:'http://www.dunmore.com/products/multi-layer-films.html',
			Heritage:'Available from Aerospace Fabrication & Materials and Dunmore. Used on many large and small spacecraft',
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'Unknown',
			Proportions:'Dependent on the CubeSat design',
			Additional_info: 'Available for many different types of CubeSats. Provides Passive thermal control/insulation, some protection from space debris, Various blankets insulate up to 1000 C'
		});

		var th_m3 = new this.thermal_parts({
			Cost:"0",
			Type:'Passive Thermal Control',
			Name:'Thermal Coating',
			Manufacturer:'Multiple',
			Reference:'Multiple',
			Heritage:'Available from MAP, Akzo Nobel Aerospace Coatings,  Lord Techmark, Inc. Successfully tested on larger spacecraft',
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'Unknown',
			Proportions:'Dependent on the CubeSat design',
			Additional_info:'Passive thermal insulation'
		});

		var th_m4 = new this.thermal_parts({
			Cost:"0",
			Type:'Passive Thermal Control',
			Name:'Heat pipes (basic, flat plate, or loop)',
			Manufacturer:'',
			Website:'http://www.thermacore.com/thermal-basics/heat-pipe-technology.apx',
			Heritage:'Developed/sold by Advanced Cooling Technology, Inc., and Thermacore. Successfully tested on microsatellites, but often too large for cubesats',
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'Unknown',
			Proportions:'Varies',
			Additional_info:'Heat pipes have effective thermal conductivities that range from 5,000 W/m•K to 200,000 W/m•K'
		});

		var th_m5 = new this.thermal_parts({
			Cost:"0",
			Type:'Active Thermal Control',
			Name:'Electrical Resistance Heaters',
			Manufacturer:'',
			Website:'',
			Heritage:'Flown on OUFTI-1 and MASAT-1 attached to batteries',
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'Unknown',
			Proportions:'Varies',
		});

		var th_m6 = new this.thermal_parts({
			Cost:"0",
			Type:'Cubesat Bus',
			Name:'XB1 Modular Cubesat Bus',
			Manufacturer:'Blue Canyon Technology',
			Website:'http://bluecanyontech.com/wp-content/uploads/2015/05/XB1-Data-Sheet_1.0.pdf',
			Heritage:'Module includes high precision atittude control, C&DH, EPS, and communication all in one package. Many options, configurableflight software, and many propulsion and payload interfaces included. Not yet flown, TRL 4-6',
			Mass:'1500',
			Power:'6.3',
			Volume:'1',
			Proportions:'10cm x 10cm x 10cm',
			Additional_info:'Bus functionality for GN&C, EPS, Thermal, C&DH, RF Communication, SSR, and Flight Software. Supports configurations up to 27U'
		});

		var th_m7a = new this.thermal_parts({
			Cost:"0",
			Type:'Cubesat Bus',
			Name:'CubeSat Structures (ISIS)',
			Manufacturer:'ISIS',
			Website:'http://www.cubesatshop.com/index.php?page=shop.product_details&product_id=38&flypage=flypage.tpl&pop=0&option=com_virtuemart&Itemid=65',
			Heritage:'sold on cubesatshop',
			Mass:'100',
			Power:'0 - Comes with a power subsystem',
			Volume:'1',
			Proportions:'10cm x 10cm x 10cm',
			Additional_info:'Comes in 1/2/3/6U sizing'
		});

		var th_m7b = new this.thermal_parts({
			Cost:"0",
			Type:'Cubesat Bus',
			Name:'CubeSat Structures (ISIS)',
			Manufacturer:'ISIS',
			Website:'http://www.cubesatshop.com/index.php?page=shop.product_details&product_id=38&flypage=flypage.tpl&pop=0&option=com_virtuemart&Itemid=65',
			Heritage:'sold on cubesatshop',
			Mass:'200',
			Power:'0 - Comes with a power subsystem',
			Volume:'2',
			Proportions:'10cm x 10cm x 20cm',
			Additional_info:'Comes in 1/2/3/6U sizing'
		});

		var th_m7c = new this.thermal_parts({
			Cost:"0",
			Type:'Cubesat Bus',
			Name:'CubeSat Structures (ISIS)',
			Manufacturer:'ISIS',
			Website:'http://www.cubesatshop.com/index.php?page=shop.product_details&product_id=38&flypage=flypage.tpl&pop=0&option=com_virtuemart&Itemid=65',
			Heritage:'sold on cubesatshop',
			Mass:'300',
			Power:'0 - Comes with a power subsystem',
			Volume:'3',
			Proportions:'10cm x 10cm x 30cm',
		});

		var th_m7d = new this.thermal_parts({
			Cost:"0",
			Type:'Cubesat Bus',
			Name:'CubeSat Structures (ISIS)',
			Manufacturer:'ISIS',
			Website:'http://www.cubesatshop.com/index.php?page=shop.product_details&product_id=38&flypage=flypage.tpl&pop=0&option=com_virtuemart&Itemid=65',
			Heritage:'sold on cubesatshop',
			Mass:'1100',
			Power:'0 - Comes with a power subsystem',
			Volume:'6',
			Proportions:'10cm x 10cm x 60cm',
		});

		var th_m13 = new this.thermal_parts({
			Cost:"0",
			Type:'Cubesat Bus',
			Name:'Planetary Systems Corporation Bus',
			Manufacturer:'Planetary Systems Corporation',
			Website:'http://media.wix.com/ugd/1c8e8f_1a5837e450f1c191203dbf7b3a6a1b82.pdf?dn=2002337A%2BCSD%2BData%2BSheet.pdf',
			Heritage:"Unknown",
			Mass:'3510',
			Power:'0 - Comes with a power subsystem',
			Volume:'3',
			Proportions:'15.74cm x 13.449 x 30cm',
		});

		var th_m14 = new this.thermal_parts({
			Cost:"0",
			Type:'Cubesat Bus',
			Name:'Planetary Systems Corporation Bus',
			Manufacturer:'Planetary Systems Corporation',
			Website:'http://media.wix.com/ugd/1c8e8f_1a5837e450f1c191203dbf7b3a6a1b82.pdf?dn=2002337A%2BCSD%2BData%2BSheet.pdf',
			Heritage:"Unknown",
			Mass:'4890',
			Power:'0 - Comes with a power subsystem',
			Volume:'6',
			Proportions:'15.74cm x 26.327cm x 30cm',
		});

		var th_m15 = new this.thermal_parts({
			Cost:"0",
			Type:'Cubesat Bus',
			Name:'Planetary Systems Corporation Bus',
			Manufacturer:'Planetary Systems Corporation',
			Website:'http://media.wix.com/ugd/1c8e8f_1a5837e450f1c191203dbf7b3a6a1b82.pdf?dn=2002337A%2BCSD%2BData%2BSheet.pdf',
			Heritage:"Unknown",
			Mass:'6020',
			Power:'0 - Comes with a power subsystem',
			Volume:'12',
			Proportions:'27.051cm x 26.327 x 20cm',
		});

		var th_m16a = new this.thermal_parts({
			Cost:"0",
			Type:'Cubesat Bus',
			Name:'Intrepid Platform Bus',
			Manufacturer:'Tyvak',
			Website:'http://tyvak.com/intrepid-suite-1-1/',
			Heritage:"Unknown",
			Mass:'600',
			Power:'1',
			Volume:'1',
			Proportions:'10cm x 10cm x 10cm',
		});

		var th_m16b = new this.thermal_parts({
			Cost:"0",
			Type:'Cubesat Bus',
			Name:'Intrepid Platform Bus',
			Manufacturer:'Tyvak',
			Website:'http://tyvak.com/intrepid-suite-1-1/',
			Heritage:"Unknown",
			Mass:'900',
			Power:'2',
			Volume:'2',
			Proportions:'10cm x 10cm x 20cm',
		});

		var th_m16c = new this.thermal_parts({
			Cost:"0",
			Type:'Cubesat Bus',
			Name:'Intrepid Platform Bus',
			Manufacturer:'Tyvak',
			Website:'http://tyvak.com/intrepid-suite-1-1/',
			Heritage:"Unknown",
			Mass:'1200',
			Power:'3',
			Volume:'3',
			Proportions:'10cm x 10cm x 30cm',
		});

		var th_m17a = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'P-POD',
			Manufacturer:'California Polytechnic State University',
			Website:'http://www.oh1sa.net/data/satellite/cubesat/P-POD-mk3/P-POD%20Mk%20III%20ICD.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'1',
			Proportions:'10cm x 10cm x 30cm',
		});

		var th_m17b = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'P-POD',
			Manufacturer:'California Polytechnic State University',
			Website:'http://www.oh1sa.net/data/satellite/cubesat/P-POD-mk3/P-POD%20Mk%20III%20ICD.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'2',
			Proportions:'10cm x 10cm x 30cm',
		});

		var th_m17c = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'P-POD',
			Manufacturer:'California Polytechnic State University',
			Website:'http://www.oh1sa.net/data/satellite/cubesat/P-POD-mk3/P-POD%20Mk%20III%20ICD.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'3',
			Proportions:'10cm x 10cm x 30cm',
		});

		var th_m17d = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'P-POD',
			Manufacturer:'California Polytechnic State University',
			Website:'http://www.oh1sa.net/data/satellite/cubesat/P-POD-mk3/P-POD%20Mk%20III%20ICD.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'4',
			Proportions:'10cm x 20cm x 30cm',
		});

		var th_m17e = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'P-POD',
			Manufacturer:'California Polytechnic State University',
			Website:'http://www.oh1sa.net/data/satellite/cubesat/P-POD-mk3/P-POD%20Mk%20III%20ICD.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'5',
			Proportions:'10cm x 20cm x 30cm',
		});

		var th_m17f = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'P-POD',
			Manufacturer:'California Polytechnic State University',
			Website:'http://www.oh1sa.net/data/satellite/cubesat/P-POD-mk3/P-POD%20Mk%20III%20ICD.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'6',
			Proportions:'10cm x 20cm x 30cm',
		});

		var th_m18a = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'X-POD DUO',
			Manufacturer:'University of Toronto Institute for Aerospace Studies',
			Website:'http://utias-sfl.net/?page_id=241',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'1',
			Proportions:'20cm x 20cm x 40cm',
		});

		var th_m18b = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'X-POD DUO',
			Manufacturer:'University of Toronto Institute for Aerospace Studies',
			Website:'http://utias-sfl.net/?page_id=241',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'2',
			Proportions:'20cm x 20cm x 40cm',
		});

		var th_m19a = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'X-POD Triple',
			Manufacturer:'University of Toronto Institute for Aerospace Studies',
			Website:'http://utias-sfl.net/?page_id=241',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'1',
			Proportions:'10cm x 10cm x 34cm',
		});

		var th_m19b = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'X-POD Triple',
			Manufacturer:'University of Toronto Institute for Aerospace Studies',
			Website:'http://utias-sfl.net/?page_id=241',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'2',
			Proportions:'10cm x 10cm x 34cm',
		});

		var th_m19c = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'X-POD Triple',
			Manufacturer:'University of Toronto Institute for Aerospace Studies',
			Website:'http://utias-sfl.net/?page_id=241',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'3',
			Proportions:'10cm x 10cm x 34cm',
		});

		var th_m20a = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'PicoSatellite Launcher (PSL)',
			Manufacturer:'Astro und Feinwerktechnik Adlershof GmbH',
			Website:'http://www.astrofein.com/2728/dwnld/admin/52B_Datenblatt_spL_Modification_Homepage.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'5.9',
			Volume:'1',
			Proportions:'10cm x 10cm x 11.4cm',
		});

		var th_m20b = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'PicoSatellite Launcher (PSL)',
			Manufacturer:'Astro und Feinwerktechnik Adlershof GmbH',
			Website:'http://www.astrofein.com/2728/dwnld/admin/52B_Datenblatt_spL_Modification_Homepage.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'5.9',
			Volume:'2',
			Proportions:'10cm x 10cm x 11.4cm',
		});

		var th_m20c = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'PicoSatellite Launcher (PSL)',
			Manufacturer:'Astro und Feinwerktechnik Adlershof GmbH',
			Website:'http://www.astrofein.com/2728/dwnld/admin/52B_Datenblatt_spL_Modification_Homepage.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'5.9',
			Volume:'3',
			Proportions:'10cm x 10cm x 11.4cm',
		});

		var th_m21a = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'ISIPOD Deployer',
			Manufacturer:'ISIS',
			Website:'http://www.isispace.nl/brochures/ISIS_ISIPOD_Brochure_v.7.11.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'1, Custom sizes available',
			Proportions:'10cm x 10cm x 20cm',
		});

		var th_m21b = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'ISIPOD Deployer',
			Manufacturer:'ISIS',
			Website:'http://www.isispace.nl/brochures/ISIS_ISIPOD_Brochure_v.7.11.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'2, Custom sizes available',
			Proportions:'10cm x 10cm x 20cm',
		});

		var th_m21c = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'ISIPOD Deployer',
			Manufacturer:'ISIS',
			Website:'http://www.isispace.nl/brochures/ISIS_ISIPOD_Brochure_v.7.11.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'2, Custom sizes available',
			Proportions:'10cm x 10cm x 20cm',
		});

		var th_m25 = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'NLAS Deployer',
			Manufacturer:'Ames Research Center',
			Website:'http://www.nasa.gov/centers/ames/engineering/projects/nlas.html#.U-EoX_mwIvl',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'1',
			Proportions:'10cm x 10cm x 30cm',
		});

		var th_m26 = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'NLAS Deployer',
			Manufacturer:'Ames Research Center',
			Website:'http://www.nasa.gov/centers/ames/engineering/projects/nlas.html#.U-EoX_mwIvl',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'1.5',
			Proportions:'10cm x 10cm x 30cm',
		});

		var th_m27 = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'NLAS Deployer',
			Manufacturer:'Ames Research Center',
			Website:'http://www.nasa.gov/centers/ames/engineering/projects/nlas.html#.U-EoX_mwIvl',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'2',
			Proportions:'10cm x 10cm x 30cm',
		});

		var th_m28 = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'NLAS Deployer',
			Manufacturer:'Ames Research Center',
			Website:'http://www.nasa.gov/centers/ames/engineering/projects/nlas.html#.U-EoX_mwIvl',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'3',
			Proportions:'10cm x 10cm x 30cm',
		});

		var th_m29 = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'NLAS Deployer',
			Manufacturer:'Ames Research Center',
			Website:'http://www.nasa.gov/centers/ames/engineering/projects/nlas.html#.U-EoX_mwIvl',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'6',
			Proportions:'10cm x 20cm x 30cm',
		}); 

		var th_m30 = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'NRCSD Deployer',
			Manufacturer:'NanoRacks, LLC',
			Website:'http://nanoracks.com/wp-content/uploads/Current_edition_of_Interface_Document_for_CubeSat_Customers.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'1',
			Proportions:'10cm x 20cm x 30cm',
		});

		var th_m31 = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'NRCSD Deployer',
			Manufacturer:'NanoRacks, LLC',
			Website:'http://nanoracks.com/wp-content/uploads/Current_edition_of_Interface_Document_for_CubeSat_Customers.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'2',
			Proportions:'10cm x 20cm x 30cm',
		});

		var th_m32 = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'NRCSD Deployer',
			Manufacturer:'NanoRacks, LLC',
			Website:'http://nanoracks.com/wp-content/uploads/Current_edition_of_Interface_Document_for_CubeSat_Customers.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'3',
			Proportions:'10cm x 20cm x 30cm',
		});

		var th_m33 = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'NRCSD Deployer',
			Manufacturer:'NanoRacks, LLC',
			Website:'http://nanoracks.com/wp-content/uploads/Current_edition_of_Interface_Document_for_CubeSat_Customers.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'4',
			Proportions:'10cm x 20cm x 30cm',
		});

		var th_m34 = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'NRCSD Deployer',
			Manufacturer:'NanoRacks, LLC',
			Website:'http://nanoracks.com/wp-content/uploads/Current_edition_of_Interface_Document_for_CubeSat_Customers.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'5',
			Proportions:'10cm x 20cm x 30cm',
		});

		var th_m35 = new this.thermal_parts({
			Cost:"0",
			Type:'Deployer',
			Name:'NRCSD Deployer',
			Manufacturer:'NanoRacks, LLC',
			Website:'http://nanoracks.com/wp-content/uploads/Current_edition_of_Interface_Document_for_CubeSat_Customers.pdf',
			Heritage:"Unknown",
			Mass:'Unknown',
			Power:'Unknown',
			Volume:'6',
			Proportions:'10cm x 20cm x 30cm',
		});

		th_m1.save();
		th_m2.save();
		th_m3.save();
		th_m4.save();
		th_m5.save();
		th_m6.save();
		th_m7a.save();
		th_m7b.save();
		th_m7c.save();
		th_m7d.save();
		th_m13.save();
		th_m14.save();
		th_m15.save();
		th_m16a.save();
		th_m16b.save();
		th_m16c.save();
		th_m17a.save();
		th_m17b.save();
		th_m17c.save();
		th_m17d.save();
		th_m17e.save();
		th_m17f.save();
		th_m18a.save();
		th_m18b.save();
		th_m19a.save();
		th_m19b.save();
		th_m19c.save();
		th_m20a.save();
		th_m20b.save();
		th_m20c.save();
		th_m21a.save();
		th_m21b.save();
		th_m21c.save();
		th_m25.save();
		th_m26.save();
		th_m27.save();
		th_m28.save();
		th_m29.save();
		th_m30.save();
		th_m31.save();
		th_m32.save();
		th_m33.save();
		th_m34.save();
		th_m35.save();
	}

	this.getPart = function(query,res) {
		this.thermal_parts.find(query,function(error,output) {
			res.json(output);
		});
	};


	this.putPart = function(req, res) {
        var newpart = new this.thermal_parts({
        	Cost:req.body.Cost,
		    Type: req.body.Type,
		    Name: req.body.Name,
		    Manufacturer: req.body.Manufacturer,
		    Website: req.body.Website,
		    Heritage: req.body.Heritage,
		    Mass: req.body.Mass,
		    Power: req.body.Power,
		    Volume: req.body.Volume,
		    Proportions: req.body.Proportions,
		    Additional_info: req.body.Additional_info
        });
        newpart.save(function (error, output) {
            res.json(output);
        });
    };

    this.updatePart = function(req, res) {
        this.thermal_parts.update(
        {
            _id: req.params._id
        }, 
        {
        	Cost:req.body.Cost,
		    Type: req.body.Type,
		    Name: req.body.Name,
		    Manufacturer: req.body.Manufacturer,
		    Website: req.body.Website,
		    Heritage: req.body.Heritage,
		    Mass: req.body.Mass,
		    Power: req.body.Power,
		    Volume: req.body.Volume,
		    Proportions: req.body.Proportions,
		    Additional_info: req.body.Additional_info
        }, 
        function(error, output) {
            res.json(output);
        });
    };

    this.removePart = function(req, res) {
    	this.thermal_parts.remove({
            _id: req.params._id
        }, function(err, output) {
            if (err)
                res.send(output);
            res.json({ message: 'Successfully deleted' });
        });
	};
}

module.exports = ThermalFactory;