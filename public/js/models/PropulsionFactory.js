var PropulsionFactory = function(Schema,mongoose) {

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
          Mass: Number,
          Mass_further: String,
          Power: Number,
          Power_further: String,
          Volume: Number,
          Proportions: String,
          Volume_further: String,
          Specific_Impulse: Number,
          DeltaV: Number,
          Objectives: String,
          Thermal_Issues: String,
          Total_Impulse: Number,
          Cost: Number
        });

        this.propulsion_parts = mongoose.model('propulsion_parts', Schema);
    }

    this.insertPart = function() {
        var sail1 = new this.propulsion_parts({
          Type:'Sail',
          Name:'Solar sail', 
          Manufacturer:'', 
          Reference:'https://directory.eoportal.org/web/eoportal/satellite-missions/n/nanosail-d2', 
          Heritage:'Successful demonstration on Nanosail-D2 (deorbit functionality only), planned tests on LightSail-1 (cubesat) and Sunjammer. Planned cubesat flight on LunarSail. TRL 1-3. no fuel required', 
          Mass:0, 
          Mass_further:'', 
          Power:0, 
          Power_further:'', 
          Volume:0, 
          Proportions:'varies. Very large surface area', 
          Volume_further:'', 
          Specific_Impulse:0, 
          DeltaV:0, 
          Objectives:'Possible interplanetary propulsion and attitude control. Can also be used to reflect light (Lunar Flashlight). ACS essential for spacecraft control. very slow acceleration (5 N), long lifetime', 
          Thermal_Issues:'', 
          Total_Impulse:0, 
          Cost:0,
        });

        var sail2 = new this.propulsion_parts({
          Type:'Sail',
          Name:'Electric Sail (Esail) / Electrostatic plasma break (same tech)', 
          Manufacturer:'Finnish Meteorological Institute (FMI)', 
          Reference:'', 
          Heritage:'Aboard ESTCube-1, untested. Planned for Aalto-1. Developed at Finnish Meteorological Institute (FMI)', 
          Mass:0, 
          Mass_further:'', 
          Power:0, 
          Power_further:'500 V required: electron gun. No fuel.', 
          Volume:0, 
          Proportions:'', 
          Volume_further:'On ESTCube: 1 10 m long tether', 
          Specific_Impulse:0, 
          DeltaV:0, 
          Objectives:'Long distance interplanetary missions, orbital breaking, 1 mm/s^2 for 1000 kg craft', 
          Thermal_Issues:'', 
          Total_Impulse:0, 
          Cost:0,
        });

        var thruster1 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'NanoPS (NanoSatellite Propulsion System) SF6 Cold Gas Thruster', 
          Manufacturer:'UTIAS/SEL', 
          Reference:'https://directory.eoportal.org/web/eoportal/satellite-missions/c-missions/canx-2', 
          Heritage:'developed at UTIAS/SEL. Liquid fuel, sulfur hexafluoride propellant. Successful testing on CanX-2, planned use on CanX-4/5', 
          Mass:500, 
          Mass_further:'less than', 
          Power:0, 
          Power_further:'', 
          Volume:0, 
          Proportions:'', 
          Volume_further:'', 
          Specific_Impulse:750, 
          DeltaV:0.014, 
          Objectives:'thrust 50-100 mN, >1.5 yrs LEO', 
          Thermal_Issues:'', 
          Total_Impulse:0, 
          Cost:0,
        });
        
        var thruster2 = new this.propulsion_parts({  
          Type:'Thruster',
          Name:'ion electrospray propulsion', 
          Manufacturer:'MIT, SPL', 
          Reference:'http://web.mit.edu/aeroastro/labs/spl/research_ieps.htm', 
          Heritage:'Under investigation at MIT, SPL. MEMS-based propulsion', 
          Mass:0, 
          Mass_further:'', 
          Power:0, 
          Power_further:'', 
          Volume:0.00025, 
          Proportions:'10x10x2.5', 
          Volume_further:'', 
          Specific_Impulse:1750, 
          DeltaV:0, 
          Objectives:'', 
          Thermal_Issues:'', 
          Total_Impulse:0, 
          Cost:0,
        });

        var thruster3 = new this.propulsion_parts({
          Type:'Thruster', 
          Name:'VACCO Butane Thruster', 
          Manufacturer:'VACCO industries', 
          Reference:'http://digitalcommons.usu.edu/cgi/viewcontent.cgi?article=1824&context=smallsat', 
          Heritage:'Developed by VACCO industries. Composed of 4 microthrusters. MiPS technology, Isobutane propellant', 
          Mass:456, 
          Mass_further:'w/out fuel', 
          Power:0, 
          Power_further:'', 
          Volume:0.2025, 
          Proportions:'90x90x25', 
          Volume_further:'', 
          Specific_Impulse:65, 
          DeltaV:0.02976, 
          Objectives:'', 
          Thermal_Issues:'', 
          Total_Impulse:34, 
          Cost:0,
        });

        var thruster4 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'Cubesat Pulse plasma Thruster', 
          Manufacturer:'Clyde', 
          Reference:'http://www.clyde-space.com/cubesat_shop/propulsion/303_cubesat-pulse-plasma-thruster', 
          Heritage:'Clyde', 
          Mass:280, 
          Mass_further:'<280 g including propellant (7 g)', 
          Power:2.7, 
          Power_further:'', 
          Volume:0.2187, 
          Proportions:'90x90x27', 
          Volume_further:'', 
          Specific_Impulse:608, 
          DeltaV:0.1694, 
          Objectives:'Multiple thrusters for full maneuverability', 
          Thermal_Issues:'', 
          Total_Impulse:42, 
          Cost:0,
        });

        var thruster5 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'Micro-Pulsed Plasma Thruster', 
          Manufacturer:'Busek', 
          Reference:'http://www.busek.com/index_htm_files/70008502E.pdf', 
          Heritage:'In development by Busek since 2002. Teflon propellant. Attitude control system flown on FalconSat-3', 
          Mass:1700, 
          Mass_further:'', 
          Power:5, 
          Power_further:'', 
          Volume:0.001331, 
          Proportions:'110x110x110', 
          Volume_further:'', 
          Specific_Impulse:700, 
          DeltaV:0.063, 
          Objectives:'.08 mN/s pulses', 
          Thermal_Issues:'', 
          Total_Impulse:0, 
          Cost:0,
        });



        var thruster6 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'Cubesat Ambipolar Thruster', 
          Manufacturer:'Busek', 
          Reference:'http://pepl.engin.umich.edu/thrusters/CAT.html', 
          Heritage:'In development by University of Michigan PEPL. Not yet built. Planned flight on PATRIOT mission. Can be used w/ any gaseous propellant, esp. iodine, water', 
          Mass:1000, 
          Mass_further:'less than', 
          Power:10, 
          Power_further:'10 W continuous (higher if pulsed)', 
          Volume:2.6, 
          Proportions:'', 
          Volume_further:'.1 U thruster, .2-2.5 U propellant', 
          Specific_Impulse:0, 
          DeltaV:4, 
          Objectives:'2 mN thrust continuous, 20 mN pulsed, >20,000 hrs operation', 
          Thermal_Issues:'', 
          Total_Impulse:0, 
          Cost:0,
        });

        var thruster7 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'BRFIT-1 Ion Thruster', 
          Manufacturer:'Busek', 
          Reference:'http://www.busek.com/index_htm_files/70008514B.pdf', 
          Heritage:'Designed by Busek for Xenon propellant but compatible with others. Prototyped', 
          Mass:0, 
          Mass_further:'', 
          Power:10, 
          Power_further:'', 
          Volume:0, 
          Proportions:'', 
          Volume_further:'',
          Specific_Impulse:1800, 
          DeltaV:0, 
          Objectives:'.07 mN, lifetime 20000 hours (2.3 yrs)', 
          Thermal_Issues:'', 
          Total_Impulse:0, 
          Cost:0,
        });

        var thruster8 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'BRFIT-3 Ion Thruster', 
          Manufacturer:'Busek', 
          Reference:'http://www.busek.com/index_htm_files/70008514B.pdf', 
          Heritage:'Designed by Busek for Xenon propellant but compatible with others. Prototyped', 
          Mass:0, 
          Mass_further:'', 
          Power:80, 
          Power_further:'', 
          Volume:0, 
          Proportions:'', 
          Volume_further:'', 
          Specific_Impulse:2800, 
          DeltaV:0, 
          Objectives:'1.6 mN, lifetime 20000 hours (2.3 yrs)', 
          Thermal_Issues:'', 
          Total_Impulse:0, 
          Cost:0,
        });

        var thruster9 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'Green Monoprop Thrusters (3U config)', 
          Manufacturer:'Busek', 
          Reference:'http://www.busek.com/index_htm_files/70008517B.pdf', 
          Heritage:'Developed by Busek. Uses stable, non-toxic propellant. TRL 5', 
          Mass:700, 
          Mass_further:'less than', 
          Power:20, 
          Power_further:'less than', 
          Volume:0.5, 
          Proportions:'', 
          Volume_further:'', 
          Specific_Impulse:230, 
          DeltaV:0.16374, 
          Objectives:'.5 N', 
          Thermal_Issues:'', 
          Total_Impulse:0, 
          Cost:0,
        });

        var thruster10 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'Green Monoprop Thrusters (6U config)', 
          Manufacturer:'Busek', 
          Reference:'http://www.busek.com/index_htm_files/70008517B.pdf', 
          Heritage:'Developed by Busek. Uses stable, non-toxic propellant. TRL 5', 
          Mass:2700, 
          Mass_further:'less than', 
          Power:20, 
          Power_further:'less than', 
          Volume:2, 
          Proportions:'', 
          Volume_further:'', 
          Specific_Impulse:230, 
          DeltaV:0.39, 
          Objectives:'.5 N', 
          Thermal_Issues:'', 
          Total_Impulse:0, 
          Cost:0,
        });

        var thruster11 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'Busek Electrospray Thruster', 
          Manufacturer:'Busek', 
          Reference:'http://www.busek.com/index_htm_files/70008500E.pdf', 
          Heritage:'Developed by Busek. TRL 5', 
          Mass:1150, 
          Mass_further:'less than', 
          Power:10, 
          Power_further:'less than', 
          Volume:0.4335, 
          Proportions:'85x85x60', 
          Volume_further:'', 
          Specific_Impulse:800, 
          DeltaV:0.0604, 
          Objectives:'up to .7 mN', 
          Thermal_Issues:'', 
          Total_Impulse:675, 
          Cost:0,
        });

        var thruster12 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'BHT-200', 
          Manufacturer:'Busek', 
          Reference:'http://www.busek.com/index_htm_files/70008510B.pdf', 
          Heritage:'Developed by Busek.', 
          Mass:0, 
          Mass_further:'', 
          Power:200, 
          Power_further:'100-300 W', 
          Volume:0, 
          Proportions:'', 
          Volume_further:'', 
          Specific_Impulse:1390, 
          DeltaV:0, 
          Objectives:'13 mN at 200 W.', 
          Thermal_Issues:'', 
          Total_Impulse:0, 
          Cost:0,
        });

        var thruster13 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'Busek Micro ResistoJet', 
          Manufacturer:'Busek', 
          Reference:'http://www.busek.com/index_htm_files/70008518B.pdf', 
          Heritage:'Developed by Busek. Performance based on available power. Thrusters on front and sides for 3 axis control', 
          Mass:1250, 
          Mass_further:'less than', 
          Power:9, 
          Power_further:'3-15 W', 
          Volume:0.81, 
          Proportions:'9x9x10 cm', 
          Volume_further:'', 
          Specific_Impulse:150, 
          DeltaV:0.024, 
          Objectives:'3-axis control. Attitude control, maneuvering and thrust, 2-10 mN primary, .5 mN ACS. Total impulse 404 N-s (primary) + 23 N-s (ACS)', 
          Thermal_Issues:'', 
          Total_Impulse:0, 
          Cost:0,
        });

        var thruster14 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'Precision Electrospray Thruster Assembly (PETA)', 
          Manufacturer:'MIT', 
          Reference:'http://icubesat.files.wordpress.com/2012/06/icubesat-org-2012-c-1-2-_presentation_martel_201205281335.pdf', 
          Heritage:'Developed by MIT, prototyped. TRL 1-3', 
          Mass:0, 
          Mass_further:'', 
          Power:0, 
          Power_further:'', 
          Volume:0.333, 
          Proportions:'100x100x33', 
          Volume_further:'', 
          Specific_Impulse:0, 
          DeltaV:0.16, 
          Objectives:'', 
          Thermal_Issues:'', 
          Total_Impulse:0, 
          Cost:0,
        });

        var thruster15 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'MPS-110 Cold Gas Propulsion', 
          Manufacturer:'Aerojet Rockedyne', 
          Reference:'https://www.rocket.com/cubesat/mps-110', 
          Heritage:'In development, TRL 1-3', 
          Mass:0, 
          Mass_further:'', 
          Power:10, 
          Power_further:'less than. 5 V nominal', 
          Volume:0.5, 
          Proportions:'100x100x113.5', 
          Volume_further:'Max proportions. Scalable: .5U-1U', 
          Specific_Impulse:0, 
          DeltaV:0, 
          Objectives:'', 
          Thermal_Issues:'5-50 C', 
          Total_Impulse:0, 
          Cost:0,
        });

        var thruster16 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'MPS-120 CubeSat High-Impulse Adaptable Modular Propulsion System (CHAMPS)', 
          Manufacturer:'Aerojet Rockedyne', 
          Reference:'https://www.rocket.com/files/aerojet/documents/CubeSat/SSC11-X-4.pdf', 
          Heritage:'Hydrazine monopropellant. 4 thruster array. In development, TRL 4-6', 
          Mass:1300, 
          Mass_further:'1300 dry, 1600 wet (with fuel)', 
          Power:1, 
          Power_further:'<1 W operation, <4 W startup', 
          Volume:1.135, 
          Proportions:'100x100x113.5', 
          Volume_further:'', 
          Specific_Impulse:2222.2, 
          DeltaV:3.0359, 
          Objectives:'.26-2.79 N per thruster', 
          Thermal_Issues:'5-50 C', 
          Total_Impulse:800, 
          Cost:0,
        });

        var thruster17 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'MPS-120XL CubeSat High-Impulse Adaptable', 
          Manufacturer:'Aerojet Rockedyne', 
          Reference:'https://www.rocket.com/cubesat/mps-120xl', 
          Heritage:'Hydrazine monopropellant. 4 thruster array. In development, TRL 4-6', 
          Mass:2400, 
          Mass_further:'<2.4 kg dry, <3.2 kg wet', 
          Power:1, 
          Power_further:'5 V, <1 W operation, <4 W startup', 
          Volume:2.27, 
          Proportions:'100x100x227', 
          Volume_further:'', 
          Specific_Impulse:0, 
          DeltaV:0, 
          Objectives:'.26-2.79 N per thruster', 
          Thermal_Issues:'', 
          Total_Impulse:0, 
          Cost:0,
        });

        var thruster18 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'MPS-120XW CubeSat High-Impulse Adaptable', 
          Manufacturer:'Aerojet Rockedyne', 
          Reference:'https://www.rocket.com/cubesat/mps-120xw', 
          Heritage:'Hydrazine monopropellant. 4 thruster array. In development, TRL 4-6', 
          Mass:2400, 
          Mass_further:'<2.4 kg dry, <3.2 kg wet', 
          Power:1, 
          Power_further:'5 V, <1 W operation, <4 W startup', 
          Volume:2.27, 
          Proportions:'200x100x113.5', 
          Volume_further:'', 
          Specific_Impulse:0, 
          DeltaV:0, 
          Objectives:'.26-2.79 N per thruster', 
          Thermal_Issues:'', 
          Total_Impulse:0,
          Cost:0,
        });

        var thruster19 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'MPS-130 CubeSat High-Impulse Adaptable', 
          Manufacturer:'Aerojet Rockedyne', 
          Reference:'https://www.rocket.com/cubesat/mps-130', 
          Heritage:'Hydrazine monopropellant. 4 thruster array. In development, TRL 4-6', 
          Mass:1300, 
          Mass_further:'1300 dry, 1600 wet (with fuel)', 
          Power:1, 
          Power_further:'<1 W operation, <4 W startup', 
          Volume:1.135, 
          Proportions:'100x100x113.5', 
          Volume_further:'', 
          Specific_Impulse:2222.2, 
          DeltaV:3.0359, 
          Objectives:'.26-2.79 N per thruster', 
          Thermal_Issues:'5-50 C', 
          Total_Impulse:800, 
          Cost:0,
        });

        var thruster20 = new this.propulsion_parts({
          Type:'Thruster',
          Name:'MPS-160 Solar Electric Power / Solar Electric Propulsion System', 
          Manufacturer:'Aerojet Rockedyne', 
          Reference:'https://www.rocket.com/cubesat/mps-160', 
          Heritage:'TRL 1-3. Concept phase. Electric/solar electric propulsion. Includes 2 40 W solar arrays, xenon propellant tank, and electric thruster', 
          Mass:0, 
          Mass_further:'', 
          Power:0, 
          Power_further:'300 V. Generates 80 W power nonthrusting, 20 W thrusting', 
          Volume:0, 
          Proportions:'200x100x113.5', 
          Volume_further:'', 
          Specific_Impulse:0, 
          DeltaV:0, 
          Objectives:'', 
          Thermal_Issues:'5-50 C', 
          Total_Impulse:0, 
          Cost:0
        });

        sail1.save();
        sail2.save();
        thruster1.save();
        thruster2.save();
        thruster3.save();
        thruster4.save();
        thruster5.save();
        thruster6.save();
        thruster7.save();
        thruster8.save();
        thruster9.save();
        thruster10.save();
        thruster11.save();
        thruster12.save();
        thruster13.save();
        thruster14.save();
        thruster15.save();
        thruster16.save();
        thruster17.save();
        thruster18.save();
        thruster19.save();
        thruster20.save();
        
    }


    this.getPart = function(query,res) {
        this.propulsion_parts.find(query,function(error,output) {
          res.json(output);
        });
    }

    this.putPart = function(req, res) {
        var newpart = new this.propulsion_parts({
            Type: req.body.Type,
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
            Specific_Impulse: req.body.Specific_Impulse,
            DeltaV: req.body.DeltaV,
            Objectives: req.body.Objectives,
            Thermal_Issues: req.body.Thermal_Issues,
            Total_Impulse: req.body.Total_Impulse,
            Cost: req.body.Cost
        });
        newpart.save(function (error, output) {
            res.json(output);
        });
    };

    this.updatePart = function(req, res) {
        this.propulsion_parts.update(
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
            Mass_further: req.body.Mass_further,
            Power: req.body.Power,
            Power_further: req.body.Power_further,
            Volume: req.body.Volume,
            Proportions: req.body.Proportions,
            Volume_further: req.body.Volume_further,
            Specific_Impulse: req.body.Specific_Impulse,
            DeltaV: req.body.DeltaV,
            Objectives: req.body.Objectives,
            Thermal_Issues: req.body.Thermal_Issues,
            Total_Impulse: req.body.Total_Impulse,
            Cost: req.body.Cost
        }, 
        function(error, output) {
            res.json(output);
        });
    };

    this.removePart = function(req, res) {
        this.propulsion_parts.remove({
            _id: req.params._id
        }, function(err, output) {
            if (err)
                res.send(output);
            res.json({ message: 'Successfully deleted' });
        });
    };
}

module.exports = PropulsionFactory;
