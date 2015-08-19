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
            Mass: String,
            Power: String,
            Volume: String,
            Proportions: String,
            Specific_Impulse: String,
            DeltaV: String,
            Objectives: String,
            Cost: String
        });

        this.propulsion_parts = mongoose.model('propulsion_parts', Schema);
    }

    this.insertPart = function() {
        var sail1 = new this.propulsion_parts({
            Type:'Sail',
            Name:'Solar sail', 
            Manufacturer:'NASA Ames', 
            Reference:'https://directory.eoportal.org/web/eoportal/satellite-missions/n/nanosail-d2', 
            Heritage:'Successful demonstration on Nanosail-D2 (deorbit functionality only), planned tests on LightSail-1 (cubesat) and Sunjammer. Planned cubesat flight on LunarSail. TRL 1-3. no fuel required', 
            Mass:'Estimated 4 kg', 
            Power:'Unknown', 
            Volume:'2', 
            Specific_Impulse:'0', 
            DeltaV:'Unknown', 
            Objectives:'Possible interplanetary propulsion and attitude control. Can also be used to reflect light (Lunar Flashlight). ACS essential for spacecraft control. very slow acceleration (5 N), long lifetime', 
            Cost:"0"
        });

        var sail2 = new this.propulsion_parts({
            Type:'Sail',
            Name:'Electric Sail (Esail)', 
            Manufacturer:'Finnish Meteorological Institute (FMI)', 
            Reference:'https://directory.eoportal.org/web/eoportal/satellite-missions/e/estcube-1', 
            Heritage:'Aboard ESTCube-1, untested. Planned for Aalto-1. Developed at Finnish Meteorological Institute (FMI)', 
            Mass:'Estimated 200', 
            Power:'2.4', 
            Volume:'Estimated 0.2', 
            Specific_Impulse:'0', 
            DeltaV:'0.03', 
            Objectives:'Long distance interplanetary missions, orbital breaking, 1 mm/s^2 for 1000 kg craft', 
            Cost:"0"
        });

        var thruster1 = new this.propulsion_parts({
            Type:'Thruster',
            Name:'NanoPS (NanoSatellite Propulsion System) SF6 Cold Gas Thruster', 
            Manufacturer:'UTIAS/SEL', 
            Reference:'https://directory.eoportal.org/web/eoportal/satellite-missions/c-missions/canx-2', 
            Heritage:'developed at UTIAS/SEL. Liquid fuel, sulfur hexafluoride propellant. Successful testing on CanX-2, planned use on CanX-4/5', 
            Mass:'500', 
            Power:'Unknown', 
            Volume:'Estimated 0.5', 
            Proportions:'10cm x 10cm x 5cm', 
            Specific_Impulse:'500 to 1000', 
            DeltaV:'0.035', 
            Objectives:'Thrust of 50-100 mN, >1.5 yrs LEO', 
            Cost:"0"
        });
        
        var thruster2 = new this.propulsion_parts({  
            Type:'Thruster',
            Name:'Scalable Ion Electrospray Propulsion (S-iEPS)', 
            Manufacturer:'MIT, SPL', 
            Reference:'http://web.mit.edu/aeroastro/labs/spl/iEPS_NASA.html', 
            Heritage:'Propulsion modules have undergone independent thrust measurements at MIT and our partners at The Aerospace Corporation and NASA Glenn Research Center', 
            Mass:'100', 
            Power:'1.5', 
            Volume:'0.2', 
            Proportions:'10x10x2.5', 
            Specific_Impulse:'1200', 
            DeltaV:'0.2 for a 3U CubeSat', 
            Objectives:'Thrust of 100 mN', 
            Cost:"0"
        });

        var thruster3 = new this.propulsion_parts({
            Type:'Thruster', 
            Name:'VACCO Butane Thruster', 
            Manufacturer:'VACCO industries', 
            Reference:'http://digitalcommons.usu.edu/cgi/viewcontent.cgi?article=1824&context=smallsat', 
            Heritage:'Developed by VACCO industries. Composed of 4 microthrusters. MiPS technology, Isobutane propellant', 
            Mass:'500', 
            Power:'Unknown', 
            Volume:'0.2025', 
            Proportions:'9cm x 9cm x 2.5cm', 
            Specific_Impulse:'65', 
            DeltaV:'0.034', 
            Objectives:'Thrust of 55 mN', 
            Cost:"0"
        });

        var thruster4 = new this.propulsion_parts({
            Type:'Thruster',
            Name:'Cubesat Pulse plasma Thruster', 
            Manufacturer:'Clyde', 
            Reference:'http://www.clyde-space.com/cubesat_shop/propulsion/303_cubesat-pulse-plasma-thruster', 
            Heritage:'Clyde', 
            Mass:'280', 
            Power:'0.3', 
            Volume:'0.2187', 
            Proportions:'90x90x27', 
            Specific_Impulse:'608', 
            DeltaV:'0.021', 
            Objectives:'Thrust of 38 uN', 
            Cost:"0"
        });

        var thruster5 = new this.propulsion_parts({
            Type:'Thruster',
            Name:'BmP-220 Micro-Pulsed Plasma Thruster', 
            Manufacturer:'Busek', 
            Reference:'http://www.busek.com/index_htm_files/70008502F.pdf', 
            Heritage:'In development by Busek since 2002. Teflon propellant. Attitude control system flown on FalconSat-3', 
            Mass:'500', 
            Power:'7.5', 
            Volume:'0.33', 
            Proportions:'3.74cm x 1.76cm x 3.74cm', 
            Specific_Impulse:'536', 
            DeltaV:'0.446', 
            Objectives:'Features long storage life and wide operational tempeature range with no moving parts, no pressure vessel, and non- toxic Teflon propellant, making it ideal for secondary payloads', 
            Cost:"0"
        });


        var thruster6 = new this.propulsion_parts({
            Type:'Thruster',
            Name:'Cubesat Ambipolar Thruster', 
            Manufacturer:'Busek', 
            Reference:'http://pepl.engin.umich.edu/thrusters/CAT.html', 
            Heritage:'In development by University of Michigan PEPL. Not yet built. Planned flight on PATRIOT mission. Can be used w/ any gaseous propellant, esp. iodine, water', 
            Mass:'1000', 
            Power:'10', 
            Volume:'1', 
            Proportions:'0.4 U for the thruster, 0.6 U for the propellant', 
            Specific_Impulse:'400', 
            DeltaV:'1', 
            Objectives:'0.5 to 4 mN thrust continuous', 
            Cost:"0"
        });

        var thruster7 = new this.propulsion_parts({
            Type:'Thruster',
            Name:'BIT-1 Ion Thruster', 
            Manufacturer:'Busek', 
            Reference:'http://www.busek.com/index_htm_files/70008514B.pdf', 
            Heritage:'Designed by Busek for Xenon propellant but compatible with others. Prototyped', 
            Mass:'53 --  complete BIT-1 propulsion system will need to include neutralizer, PPU, feedsystem, and propellant tank', 
            Power:'10', 
            Volume:'0.034', 
            Proportions:'3.46cm x 3.46cm x 2.88cm', 
            Specific_Impulse:'2250', 
            DeltaV:'0.076, estimated for a 6U CubeSat', 
            Objectives:'Up to 105 uN thrust', 
            Cost:"0"
        });

        var thruster8 = new this.propulsion_parts({
            Type:'Thruster',
            Name:'BIT-3 Ion Thruster', 
            Manufacturer:'Busek', 
            Reference:'http://www.busek.com/index_htm_files/70008514B.pdf', 
            Heritage:'Designed by Busek for Xenon propellant but compatible with others. Prototyped', 
            Mass:'53 --  complete BIT-1 propulsion system will need to include neutralizer, PPU, feedsystem, and propellant tank',
            Power:'60', 
            Volume:'0.16', 
            Proportions:'5.59cm x 5.59cm x 4.57cm', 
            Specific_Impulse:'3500', 
            DeltaV:'3 for a 6U CubeSat', 
            Objectives:'1.6 mN thrust, lifetime 20000 hours (2.3 yrs)', 
            Cost:"0"
        });

        var thruster9 = new this.propulsion_parts({
            Type:'Thruster',
            Name:'Green Monoprop Thrusters (3U config)', 
            Manufacturer:'Busek', 
            Reference:'http://www.busek.com/index_htm_files/70008517B.pdf', 
            Heritage:'Developed by Busek. Uses stable, non-toxic propellant. TRL 5', 
            Mass:'700', 
            Power:'20', 
            Volume:'0.5 for the whole system', 
            Proportions:'The thruster is the approximate size of a penny', 
            Specific_Impulse:'230', 
            DeltaV:'.13', 
            Objectives:'Nominal .5 N thrust', 
            Cost:"0"
        });

        var thruster10 = new this.propulsion_parts({
            Type:'Thruster',
            Name:'Green Monoprop Thrusters (6U config)', 
            Manufacturer:'Busek', 
            Reference:'http://www.busek.com/index_htm_files/70008517B.pdf', 
            Heritage:'Developed by Busek. Uses stable, non-toxic propellant. TRL 5', 
            Mass:'2700', 
            Power:'20', 
            Volume:'2 for the whole system', 
            Proportions:'The thruster is the approximate size of a penny', 
            Specific_Impulse:'230', 
            DeltaV:'0.251', 
            Objectives:'Nominal .5 N thrust', 
            Cost:"0"
        });

        var thruster11 = new this.propulsion_parts({
            Type:'Thruster',
            Name:'Busek Electrospray Thruster', 
            Manufacturer:'Busek', 
            Reference:'http://www.busek.com/index_htm_files/70008500E.pdf', 
            Heritage:'Developed by Busek. TRL 5', 
            Mass:'1150', 
            Power:'10', 
            Volume:'0.4335', 
            Proportions:'8.5cm x 8.5cm x 6.0cm', 
            Specific_Impulse:'800', 
            DeltaV:'.151 for a 3U CubeSat', 
            Objectives:'up to .7 mN', 
            Cost:"0"
        });

        var thruster13 = new this.propulsion_parts({
            Type:'Thruster',
            Name:'Busek Micro ResistoJet', 
            Manufacturer:'Busek', 
            Reference:'http://www.busek.com/index_htm_files/70008518B.pdf', 
            Heritage:'Developed by Busek. Performance based on available power. Thrusters on front and sides for 3 axis control', 
            Mass:'1250', 
            Power:'10', 
            Volume:'0.81', 
            Proportions:'9x9x10 cm for the entire system', 
            Specific_Impulse:'150', 
            DeltaV:'0.06', 
            Objectives:'3-axis control. Attitude control, maneuvering and thrust, 2-10 mN primary, .5 mN ACS. Total impulse 404 N-s (primary) + 23 N-s (ACS)', 
            Cost:"0"
        });

        var thruster14 = new this.propulsion_parts({
            Type:'Thruster',
            Name:'Precision Electrospray Thruster Assembly (PETA)', 
            Manufacturer:'MIT', 
            Reference:'http://icubesat.files.wordpress.com/2012/06/icubesat-org-2012-c-1-2-_presentation_martel_201205281335.pdf', 
            Heritage:'Developed by MIT, prototyped. TRL 1-3', 
            Mass:'700', 
            Power:'0.65', 
            Volume:'0.333', 
            Proportions:'10.0cm x 10.0cm x 3.3cm', 
            Specific_Impulse:'2000', 
            DeltaV:'3.12', 
            Objectives:'40 uN of thrust', 
            Cost:"0"
        });

        var thruster16a = new this.propulsion_parts({
            Type:'Thruster',
            Name:'MPS-120 CubeSat High-Impulse Adaptable Modular Propulsion System (CHAMPS)', 
            Manufacturer:'Aerojet Rockedyne', 
            Reference:'https://www.rocket.com/files/aerojet/documents/CubeSat/SSC11-X-4.pdf', 
            Heritage:'Hydrazine monopropellant. 4 thruster array. In development, TRL 4-6', 
            Mass:'1600', 
            Power:'4', 
            Volume:'1.135', 
            Proportions:'10.cm x 10.0cm x 11.35cm', 
            Specific_Impulse:'2222.2', 
            DeltaV:'.209', 
            Objectives:'.26-2.79 N per thruster', 
            Cost:"0"
        });

        var thruster16b = new this.propulsion_parts({
            Type:'Thruster',
            Name:'MPS-120 CubeSat High-Impulse Adaptable Modular Propulsion System (CHAMPS)', 
            Manufacturer:'Aerojet Rockedyne', 
            Reference:'https://www.rocket.com/files/aerojet/documents/CubeSat/SSC11-X-4.pdf', 
            Heritage:'Hydrazine monopropellant. 4 thruster array. In development, TRL 4-6', 
            Mass:'1600', 
            Power:'4', 
            Volume:'1.135', 
            Proportions:'10.0cm x 10.0cm x 11.35cm', 
            Specific_Impulse:'2222.2', 
            DeltaV:'0.81', 
            Objectives:'.26-2.79 N per thruster', 
            Cost:"0"
        });

        var thruster17a = new this.propulsion_parts({
            Type:'Thruster',
            Name:'MPS-120XL CubeSat High-Impulse Adaptable', 
            Manufacturer:'Aerojet Rockedyne', 
            Reference:'https://www.rocket.com/cubesat/mps-120xl', 
            Heritage:'Hydrazine monopropellant. 4 thruster array. In development, TRL 4-6', 
            Mass:'2400', 
            Power:'4', 
            Volume:'2.27', 
            Proportions:'10.0cm x 10.0cm x 22.7cm', 
            Specific_Impulse:'Unknown', 
            DeltaV:'.539', 
            Objectives:'.26-2.79 N per thruster', 
            Cost:"0"
        });

        var thruster17b = new this.propulsion_parts({
            Type:'Thruster',
            Name:'MPS-120XL CubeSat High-Impulse Adaptable', 
            Manufacturer:'Aerojet Rockedyne', 
            Reference:'https://www.rocket.com/cubesat/mps-120xl', 
            Heritage:'Hydrazine monopropellant. 4 thruster array. In development, TRL 4-6', 
            Mass:'3200', 
            Power:'4', 
            Volume:'2.27', 
            Proportions:'10.0cm x 10.0cm x 22.7cm', 
            Specific_Impulse:'Unknown', 
            DeltaV:'.2', 
            Objectives:'.26-2.79 N per thruster', 
            Cost:"0"
        });

        var thruster18a = new this.propulsion_parts({
            Type:'Thruster',
            Name:'MPS-120XW CubeSat High-Impulse Adaptable', 
            Manufacturer:'Aerojet Rockedyne', 
            Reference:'https://www.rocket.com/cubesat/mps-120xw', 
            Heritage:'Hydrazine monopropellant. 4 thruster array. In development, TRL 4-6', 
            Mass:'3200', 
            Power:'4', 
            Volume:'2.27', 
            Proportions:'20.0cm x 10.0cm x 11.35cm', 
            Specific_Impulse:'Unknown', 
            DeltaV:'.44', 
            Objectives:'.26-2.79 N per thruster', 
            Cost:"0"
        });

        var thruster18b = new this.propulsion_parts({
            Type:'Thruster',
            Name:'MPS-120XW CubeSat High-Impulse Adaptable', 
            Manufacturer:'Aerojet Rockedyne', 
            Reference:'https://www.rocket.com/cubesat/mps-120xw', 
            Heritage:'Hydrazine monopropellant. 4 thruster array. In development, TRL 4-6', 
            Mass:'3200', 
            Power:'4', 
            Volume:'2.27', 
            Proportions:'20.0cm x 10.0cm x 11.35cm', 
            Specific_Impulse:'Unknown', 
            DeltaV:'.166', 
            Objectives:'.26-2.79 N per thruster', 
            Cost:"0"
        });

        var thruster19a = new this.propulsion_parts({
            Type:'Thruster',
            Name:'MPS-130 CubeSat High-Impulse Adaptable (3U)', 
            Manufacturer:'Aerojet Rockedyne', 
            Reference:'https://www.rocket.com/cubesat/mps-130', 
            Heritage:'Hydrazine monopropellant. 4 thruster array. In development, TRL 4-6', 
            Mass:'1600', 
            Power:'4', 
            Volume:'1.135', 
            Proportions:'10.0cm x 10.0cm x 11.35cm', 
            Specific_Impulse:'2222.2', 
            DeltaV:'.34', 
            Objectives:'.26-2.79 N per thruster', 
            Cost:"0"
        });


        var thruster19b = new this.propulsion_parts({
            Type:'Thruster',
            Name:'MPS-130 CubeSat High-Impulse Adaptable (6U)', 
            Manufacturer:'Aerojet Rockedyne', 
            Reference:'https://www.rocket.com/cubesat/mps-130', 
            Heritage:'Hydrazine monopropellant. 4 thruster array. In development, TRL 4-6', 
            Mass:'1600', 
            Power:'4', 
            Volume:'1.135', 
            Proportions:'10.0cm x 10.0cm x 11.35cm', 
            Specific_Impulse:'2222.2', 
            DeltaV:'.13', 
            Objectives:'.26-2.79 N per thruster', 
            Cost:"0"
        });

        var thruster20 = new this.propulsion_parts({
            Type:'Thruster',
            Name:'MPS-160 Solar Electric Power / Solar Electric Propulsion System', 
            Manufacturer:'Aerojet Rockedyne', 
            Reference:'https://www.rocket.com/cubesat/mps-160', 
            Heritage:'Provides both power and primary propulsion for CubeSat missions. TRL 1-3. Concept phase. Electric/solar electric propulsion. Includes 2 40 W solar arrays, xenon propellant tank, and electric thruster', 
            Mass:'Unknown', 
            Power:'0 - Built in power generation system', 
            Volume:'Unknown', 
            Proportions:'20cm x 10cm x 11.35cm', 
            Specific_Impulse:'Unknown', 
            DeltaV:'2 for a 6U CubeSat', 
            Objectives:'', 
            Cost:"0"
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
        // thruster12.save();
        thruster13.save();
        thruster14.save();
        // thruster15.save();
        thruster16a.save();
        thruster16b.save();
        thruster17a.save();
        thruster17b.save();
        thruster18a.save();
        thruster18b.save();
        thruster19a.save();
        thruster19b.save();
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
            Power: req.body.Power,
            Volume: req.body.Volume,
            Proportions: req.body.Proportions,
            Specific_Impulse: req.body.Specific_Impulse,
            DeltaV: req.body.DeltaV,
            Objectives: req.body.Objectives,
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
            Power: req.body.Power,
            Volume: req.body.Volume,
            Proportions: req.body.Proportions,
            Specific_Impulse: req.body.Specific_Impulse,
            DeltaV: req.body.DeltaV,
            Objectives: req.body.Objectives,
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
