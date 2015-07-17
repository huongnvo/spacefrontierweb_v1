var ThermalFactory = function(Schema,mongoose) {

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
		    Objectives: String
		});
		this.thermal_parts = mongoose.model('thermal_parts',Schema);
	}

	this.insertPart = function() {
		var th_m1 = new this.thermal_parts({
			Type:'Active Thermal Control',
			Name:'th_mace Qualified Batteries w/ Integrated Battery Heater (COTS)',
			Manufacturer:'',
			Website:'',
			Heritage:'Sold by Clyde',
			Mass:0,
			Mass_further:'',
			Power:0,
			Power_further:'Battery comes in 10 Whr or 20 Whr',
			Volume:0,
			Proportions:'',
			Volume_further:'Keeps batteries above 0 C in vacuum conditions',
			Objectives:''
		});

		var th_m2 = new this.thermal_parts({
			Type:'Passive Thermal Control',
			Name:'Multi-Layer Insulation (MLI)',
			Manufacturer:'',
			Website:'http://www.dunmore.com/products/multi-layer-films.html',
			Heritage:'Available from Aeroth_mace Fabrication & Materials and Dunmore. Used on many large and small th_macecraft',
			Mass:0,
			Mass_further:'Variable',
			Power:0,
			Power_further:'None',
			Volume:0,
			Proportions:'',
			Volume_further:'Variable',
			Objectives:'Passive thermal control/insulation, some protection from th_mace debris, Various blankets insulate up to 1000 C'
		});

		var th_m3 = new this.thermal_parts({
			Type:'Passive Thermal Control',
			Name:'Thermal Coating',
			Manufacturer:'',
			Website:'',
			Heritage:'Available from MAP, Akzo Nobel Aeroth_mace Coatings,  Lord Techmark, Inc. Successfully tested on larger th_macecraft',
			Mass:0,
			Mass_further:'Negligible',
			Power:0,
			Power_further:'None',
			Volume:0,
			Proportions:'',
			Volume_further:'None',
			Objectives:'Passive thermal insulation'
		});

		var th_m4 = new this.thermal_parts({
			Type:'Passive Thermal Control',
			Name:'Heat pipes (basic, flat plate, or loop)',
			Manufacturer:'',
			Website:'http://www.thermacore.com/thermal-basics/heat-pipe-technology.ath_mx',
			Heritage:'Developed/sold by Advanced Cooling Technology, Inc., and Thermacore. Successfully tested on microsatellites, but often too large for cubesats',
			Mass:0,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:0,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});
		var th_m5 = new this.thermal_parts({
			Type:'Active Thermal Control',
			Name:'Electrical Resistance Heaters',
			Manufacturer:'',
			Website:'',
			Heritage:'Flown on OUFTI-1 and MASAT-1 attached to batteries',
			Mass:0,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:0,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m6 = new this.thermal_parts({
			Type:'Cubesat Bus',
			Name:'XB1 Modular Cubesat Bus',
			Manufacturer:'Blue Canyon Technology',
			Website:'http://bluecanyontech.com/product/xb1/',
			Heritage:'Module includes high precision atittude control, C&DH, EPS, and communication all in one package. Many options, configurableflight software, and many propulsion and payload interfaces included. Not yet flown, TRL 4-6',
			Mass:1500,
			Mass_further:'',
			Power:2.5,
			Power_further:'less than, 12 +- 2 V',
			Volume:1,
			Proportions:'100x100x100, 50x200x100',
			Volume_further:'2 modules, each 5x10x10 cm, stackable or side by side',
			Objectives:'4 Gbytes (optional)'
		});

		var th_m7 = new this.thermal_parts({
			Type:'Cubesat Bus',
			Name:'CubeSat Structures (ISIS)',
			Manufacturer:'ISIS',
			Website:'http://www.isith_mace.nl/brochures/ISIS_CubeSat%20Structures_Brochure_v.7.11.pdf',
			Heritage:'sold on cubesatshop',
			Mass:270,
			Mass_further:'primary structure only',
			Power:0,
			Power_further:'',
			Volume:3,
			Proportions:'',
			Volume_further:'Secondary structure (shelves) are shear panels, 100 g per 1 unit stack',
			Objectives:''
		});

		var th_m8 = new this.thermal_parts({
			Type:'Cubesat Bus',
			Name:'CubeSat Structures (ISIS)',
			Manufacturer:'ISIS',
			Website:'http://www.isith_mace.nl/brochures/ISIS_CubeSat%20Structures_Brochure_v.7.11.pdf',
			Heritage:'sold on cubesatshop',
			Mass:345,
			Mass_further:'primary structure only',
			Power:0,
			Power_further:'',
			Volume:4,
			Proportions:'',
			Volume_further:'Secondary structure (shelves) are shear panels, 100 g per 1 unit stack',
			Objectives:''
		});

		var th_m9 = new this.thermal_parts({
			Type:'Cubesat Bus',
			Name:'CubeSat Structures (ISIS)',
			Manufacturer:'ISIS',
			Website:'http://www.isith_mace.nl/brochures/ISIS_CubeSat%20Structures_Brochure_v.7.11.pdf',
			Heritage:'sold on cubesatshop',
			Mass:420,
			Mass_further:'primary structure only',
			Power:0,
			Power_further:'',
			Volume:5,
			Proportions:'',
			Volume_further:'Secondary structure (shelves) are shear panels, 100 g per 1 unit stack',
			Objectives:''
		});

		var th_m10 = new this.thermal_parts({
			Type:'Cubesat Bus',
			Name:'CubeSat Structures (ISIS)',
			Manufacturer:'ISIS',
			Website:'http://www.isith_mace.nl/brochures/ISIS_CubeSat%20Structures_Brochure_v.7.11.pdf',
			Heritage:'sold on cubesatshop',
			Mass:600,
			Mass_further:'primary structure only',
			Power:0,
			Power_further:'',
			Volume:6,
			Proportions:'',
			Volume_further:'Secondary structure (shelves) are shear panels, 100 g per 1 unit stack',
			Objectives:''
		});

		var th_m11 = new this.thermal_parts({
			Type:'Cubesat Bus',
			Name:'CubeSat Skeletonized Structure (Pumpkin)',
			Manufacturer:'Pumpkin',
			Website:'http://www.cubesatkit.com/docs/cubesatkitsystemchart.pdf',
			Heritage:'sold on cubesatkit',
			Mass:3000,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:3,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m12 = new this.thermal_parts({
			Type:'Cubesat Bus',
			Name:'MISC 3 Chassis',
			Manufacturer:'Pumpkin',
			Website:'http://www.cubesatkit.com/docs/datasheet/DS_MISC_3_715-00553-A.pdf',
			Heritage:'sold on cubesatkit',
			Mass:317,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:3,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m13 = new this.thermal_parts({
			Type:'Cubesat Bus',
			Name:'Planetary Systems Corporation 3U',
			Manufacturer:'Planetary Systems Corporation',
			Website:'http://media.wix.com/ugd/1c8e8f_1a5837e450f1c191203dbf7b3a6a1b82.pdf?dn=2002337A%2BCSD%2BData%2BSheet.pdf',
			Heritage:'',
			Mass:3510,
			Mass_further:'3450-3510',
			Power:0,
			Power_further:'22-36 Vdc and maximum current 1.7-4.9 A',
			Volume:3,
			Proportions:'157.4x134.49',
			Volume_further:'',
			Objectives:''
		});

		var th_m14 = new this.thermal_parts({
			Type:'Cubesat Bus',
			Name:'Planetary Systems Corporation 6U',
			Manufacturer:'Planetary Systems Corporation',
			Website:'http://media.wix.com/ugd/1c8e8f_1a5837e450f1c191203dbf7b3a6a1b82.pdf?dn=2002337A%2BCSD%2BData%2BSheet.pdf',
			Heritage:'',
			Mass:4890,
			Mass_further:'4780-4890',
			Power:0,
			Power_further:'22-36 Vdc and maximum current 1.7-4.9 A',
			Volume:6,
			Proportions:'157.4x263.27',
			Volume_further:'',
			Objectives:''
		});

		var th_m15 = new this.thermal_parts({
			Type:'Cubesat Bus',
			Name:'Planetary Systems Corporation 12U',
			Manufacturer:'Planetary Systems Corporation',
			Website:'http://media.wix.com/ugd/1c8e8f_1a5837e450f1c191203dbf7b3a6a1b82.pdf?dn=2002337A%2BCSD%2BData%2BSheet.pdf',
			Heritage:'',
			Mass:6020,
			Mass_further:'5910-6020',
			Power:0,
			Power_further:'22-36 Vdc and maximum current 1.7-4.9 A',
			Volume:12,
			Proportions:'270.51x263.27',
			Volume_further:'',
			Objectives:''
		});

		var th_m16 = new this.thermal_parts({
			Type:'Cubesat Bus',
			Name:'Intrepid Platform (3U)',
			Manufacturer:'Tyvak',
			Website:'http://tyvak.com/intrepid-suite-1-1/',
			Heritage:'',
			Mass:1200,
			Mass_further:'includes batteries',
			Power:3,
			Power_further:'generated, orbit average',
			Volume:3,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m17 = new this.thermal_parts({
			Type:'Deployer',
			Name:'P-POD',
			Manufacturer:'California Polytechnic State University',
			Website:'http://www.oh1sa.net/data/satellite/cubesat/P-POD-mk3/P-POD%20Mk%20III%20ICD.pdf',
			Heritage:'',
			Mass:5250,
			Mass_further:'2250 after deployment',
			Power:0,
			Power_further:'',
			Volume:0,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m18 = new this.thermal_parts({
			Type:'Deployer',
			Name:'X-POD DUO',
			Manufacturer:'University of Toronto Institute for Aeroth_mace Studies',
			Website:'http://utias-sfl.net/?page_id=241',
			Heritage:'',
			Mass:10000,
			Mass_further:'',
			Power:0,
			Power_further:'28 V, 1.4A',
			Volume:0,
			Proportions:'200x200x400',
			Volume_further:'',
			Objectives:''
		});

		var th_m19 = new this.thermal_parts({
			Type:'Deployer',
			Name:'X-POD Triple',
			Manufacturer:'University of Toronto Institute for Aeroth_mace Studies',
			Website:'http://utias-sfl.net/?page_id=241',
			Heritage:'',
			Mass:3500,
			Mass_further:'',
			Power:0,
			Power_further:'28 V, 1.4A',
			Volume:0,
			Proportions:'100x100x340',
			Volume_further:'',
			Objectives:''
		});

		var th_m20 = new this.thermal_parts({
			Type:'Deployer',
			Name:'th_mL',
			Manufacturer:'Astro und Feinwerktechnik Adlershof GmbH',
			Website:'http://www.astrofein.com/2728/dwnld/admin/52B_Datenblatt_th_mL_Modification_Homepage.pdf',
			Heritage:'',
			Mass:1040,
			Mass_further:'',
			Power:5.9,
			Power_further:'5.9 at Peak, 0 otherwise',
			Volume:1,
			Proportions:'100.1x100.1x113.5',
			Volume_further:'',
			Objectives:''
		});

		var th_m21 = new this.thermal_parts({
			Type:'Deployer',
			Name:'ISIth_mOD 1U',
			Manufacturer:'ISIS',
			Website:'http://www.isith_mace.nl/brochures/ISIS_ISIPOD_Brochure_v.7.11.pdf',
			Heritage:'',
			Mass:1500,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:1,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m22 = new this.thermal_parts({
			Type:'Deployer',
			Name:'ISIth_mOD 2U',
			Manufacturer:'ISIS',
			Website:'http://www.isith_mace.nl/brochures/ISIS_ISIPOD_Brochure_v.7.11.pdf',
			Heritage:'',
			Mass:1750,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:2,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m23 = new this.thermal_parts({
			Type:'Deployer',
			Name:'ISIth_mOD 3U',
			Manufacturer:'ISIS',
			Website:'http://www.isith_mace.nl/brochures/ISIS_ISIPOD_Brochure_v.7.11.pdf',
			Heritage:'',
			Mass:2000,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:3,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m24 = new this.thermal_parts({
			Type:'Deployer',
			Name:'ISIth_mOD Variable Size',
			Manufacturer:'ISIS',
			Website:'http://www.isith_mace.nl/brochures/ISIS_ISIPOD_Brochure_v.7.11.pdf',
			Heritage:'',
			Mass:0,
			Mass_further:'Varied',
			Power:0,
			Power_further:'',
			Volume:0,
			Proportions:'Custom volume available',
			Volume_further:'',
			Objectives:''
		});

		var th_m25 = new this.thermal_parts({
			Type:'Deployer',
			Name:'NLAS 1U',
			Manufacturer:'Ames Research Center',
			Website:'http://www.nasa.gov/centers/ames/engineering/projects/nlas.html#.U-EoX_mwIvl',
			Heritage:'',
			Mass:0,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:1,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m26 = new this.thermal_parts({
			Type:'Deployer',
			Name:'NLAS 1.5U',
			Manufacturer:'Ames Research Center',
			Website:'http://www.nasa.gov/centers/ames/engineering/projects/nlas.html#.U-EoX_mwIvl',
			Heritage:'',
			Mass:0,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:1.5,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m27 = new this.thermal_parts({
			Type:'Deployer',
			Name:'NLAS 2U',
			Manufacturer:'Ames Research Center',
			Website:'http://www.nasa.gov/centers/ames/engineering/projects/nlas.html#.U-EoX_mwIvl',
			Heritage:'',
			Mass:0,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:2,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m28 = new this.thermal_parts({
			Type:'Deployer',
			Name:'NLAS 3U',
			Manufacturer:'Ames Research Center',
			Website:'http://www.nasa.gov/centers/ames/engineering/projects/nlas.html#.U-EoX_mwIvl',
			Heritage:'',
			Mass:0,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:3,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m29 = new this.thermal_parts({
			Type:'Deployer',
			Name:'NLAS 6U',
			Manufacturer:'Ames Research Center',
			Website:'http://www.nasa.gov/centers/ames/engineering/projects/nlas.html#.U-EoX_mwIvl',
			Heritage:'',
			Mass:0,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:6,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		}); 

		var th_m30 = new this.thermal_parts({
			Type:'Deployer',
			Name:'NRCSD 1U',
			Manufacturer:'NanoRacks, LLC',
			Website:'http://nanoracks.com/wp-content/uploads/Current_edition_of_Interface_Document_for_CubeSat_Customers.pdf',
			Heritage:'',
			Mass:0,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:1,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m31 = new this.thermal_parts({
			Type:'Deployer',
			Name:'NRCSD 2U',
			Manufacturer:'NanoRacks, LLC',
			Website:'http://nanoracks.com/wp-content/uploads/Current_edition_of_Interface_Document_for_CubeSat_Customers.pdf',
			Heritage:'',
			Mass:0,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:2,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m32 = new this.thermal_parts({
			Type:'Deployer',
			Name:'NRCSD 3U',
			Manufacturer:'NanoRacks, LLC',
			Website:'http://nanoracks.com/wp-content/uploads/Current_edition_of_Interface_Document_for_CubeSat_Customers.pdf',
			Heritage:'',
			Mass:0,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:3,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m33 = new this.thermal_parts({
			Type:'Deployer',
			Name:'NRCSD 4U',
			Manufacturer:'NanoRacks, LLC',
			Website:'http://nanoracks.com/wp-content/uploads/Current_edition_of_Interface_Document_for_CubeSat_Customers.pdf',
			Heritage:'',
			Mass:0,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:4,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m34 = new this.thermal_parts({
			Type:'Deployer',
			Name:'NRCSD 5U',
			Manufacturer:'NanoRacks, LLC',
			Website:'http://nanoracks.com/wp-content/uploads/Current_edition_of_Interface_Document_for_CubeSat_Customers.pdf',
			Heritage:'',
			Mass:0,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:5,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		var th_m35 = new this.thermal_parts({
			Type:'Deployer',
			Name:'NRCSD 6U',
			Manufacturer:'NanoRacks, LLC',
			Website:'http://nanoracks.com/wp-content/uploads/Current_edition_of_Interface_Document_for_CubeSat_Customers.pdf',
			Heritage:'',
			Mass:0,
			Mass_further:'',
			Power:0,
			Power_further:'',
			Volume:6,
			Proportions:'',
			Volume_further:'',
			Objectives:''
		});

		th_m1.save();
		th_m2.save();
		th_m3.save();
		th_m4.save();
		th_m5.save();
		th_m6.save();
		th_m7.save();
		th_m8.save();
		th_m9.save();
		th_m10.save();
		th_m11.save();
		th_m12.save();
		th_m13.save();
		th_m14.save();
		th_m15.save();
		th_m16.save();
		th_m17.save();
		th_m18.save();
		th_m19.save();
		th_m20.save();
		th_m21.save();
		th_m22.save();
		th_m23.save();
		th_m24.save();
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
		    Type: req.body.Type,
		    Name: req.body.Name,
		    Manufacturer: req.body.Manufacturer,
		    Website: req.body.Website,
		    Heritage: req.body.Heritage,
		    Mass: req.body.Mass,
		    Mass_further: req.body.Mass_further,
		    Power: req.body.Power,
		    Power_further: req.body.Power_further,
		    Volume: req.body.Volume,
		    Proportions: req.body.Proportions,
		    Volume_further: req.body.Volume_further,
		    Objectives: req.body.Objectives,
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
		    Type: req.body.Type,
		    Name: req.body.Name,
		    Manufacturer: req.body.Manufacturer,
		    Website: req.body.Website,
		    Heritage: req.body.Heritage,
		    Mass: req.body.Mass,
		    Mass_further: req.body.Mass_further,
		    Power: req.body.Power,
		    Power_further: req.body.Power_further,
		    Volume: req.body.Volume,
		    Proportions: req.body.Proportions,
		    Volume_further: req.body.Volume_further,
		    Objectives: req.body.Objectives
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