var CubesatFactory = function(Schema,mongoose) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		Schema = new this.Schema({
			Attitude: {
				Type: String,
				Type_further: String,
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
				Angle_prec: Number,
				Attitude_control_further: String,
				Ac_sensors: String,
				Scientific_obj: String,
				Venue: String,
				Temp_low: Number,
				Temp_high: Number,
				Datarate: Number,
				Cost: Number
			},
			Cdh: {
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
			    MIPS: Number, 
			    MHz: Number, 
			    Processing_further: String, 
			    Memory: String, 
			    Temp_low: Number, 
			    Temp_high: Number, 
			    Scientific_obj: String, 
			    Cost: Number
			},
			Instrument: {
				Type: String,
				Name:String,
				Manufacturer:String,
				Reference:String,
				Heritage:String,
				Mass:Number, 
				Mass_further:String,
				Power:Number, 
				Power_further:String,
				Volume:String,
				Proportions:String,
				Volume_further:String,
				Measurement:String,
				Sensitivity:String,
				Resolution:String,
				Pixels:String,
				Objectives:String,
				Venue:String,
				FOV:String, 
				T_lo:Number, 
				T_hi:Number, 
				Thermal_further:String,
				Datarate:Number, 
				Cost:Number
			},
			Power: {
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
			    PperWing: Number,
			    Wings: Number,
			    Cost: Number
			},
			Propulsion: {
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
			},
			Station: {
				Name: String,
			    Uplink_freq: String, 
			    EIRP: String, 
			    EIRP_ave: String, 
			    Downlink_freq: String, 
			    Gain: String, 
			    Per_gain: String, 
			    Diameter: String, 
			    Loc: String, 
			    Band: String,
			    Coordinates: String
			},
			Thermal: {
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
			}
		});
		this.cubesat = mongoose.model('cubesat', Schema);
	};

	this.getPart = function(query,res) {
		this.cubesat.find(query, function(error,output) {
			res.json(output);
		});
	};

	this.getOnePart = function(req, res) {
		this.cubesat.find(
		{
      		_id: req.params._id
    	}, function(error, output) {
    		res.json(output);
    	});
	};

	this.updateAttitude = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				Attitude:
				{
					Type: req.body.Type,
					Type_further: req.body.Type_further,
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
					Angle_prec: req.body.Angle_prec,
					Attitude_control_further: req.body.Attitude_control_further,
					Ac_sensors: req.body.Ac_sensors,
					Scientific_obj: req.body.Scientific_obj,
					Venue: req.body.Venue,
					Temp_low: req.body.Temp_low,
					Temp_high: req.body.Temp_high,
					Datarate: req.body.Datarate,
					Cost: req.body.Cost
	    		}
	    	}
		}, function(error, output) {
			res.json(output);
			// res.send('succesfully edited');
		});
	};

	this.updateCdh = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				Cdh:
				{
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
				    MIPS: Number, 
				    MHz: Number, 
				    Processing_further: String, 
				    Memory: String, 
				    Temp_low: Number, 
				    Temp_high: Number, 
				    Scientific_obj: String, 
				    Cost: Number
	    		} 
    		}
		}, function(error, output) {
			res.json(output);
		});
	};

	this.updateInstrument = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				Instrument:
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
					Measurement: req.body.Measurement,
					Sensitivity: req.body.Sensitivity,
					Resolution: req.body.Resolution,
					Pixels: req.body.Pixels,
					Objectives: req.body.Objectives,
					Venue: req.body.Venue,
					FOV: req.body.FOV, 
					T_lo: req.body.T_lo, 
					T_hi: req.body.T_hi, 
					Thermal_further: req.body.Thermal_further,
					Datarate: req.body.Datarate, 
					Cost: req.body.Cost
	    		} 
    		}
		}, function(error, output) {
			res.json(output);
		});
	};

	this.updatePower = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				Power:
				{
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
				    PperWing: Number,
				    Wings: Number,
				    Cost: Number
	    		} 
    		}
		}, function(error, output) {
			res.json(output);
		});
	};

	this.updatePropulsion = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				Propulsion:
				{
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
	    		} 
    		}
		}, function(error, output) {
			res.json(output);
		});
	};

	this.updateStation = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				Station:
				{
					Name: String,
				    Uplink_freq: String, 
				    EIRP: String, 
				    EIRP_ave: String, 
				    Downlink_freq: String, 
				    Gain: String, 
				    Per_gain: String, 
				    Diameter: String, 
				    Loc: String, 
				    Band: String,
				    Coordinates: String
	    		} 
    		}
		}, function(error, output) {
			res.json(output);
		});
	};

	this.updateThermal = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				Thermal:
				{
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
	    		} 
    		}
		}, function(error, output) {
			res.json(output);
		});
	};
	
	this.removePart = function(req, res) {
    	this.cubesat.remove({
            _id: req.params._id
        }, function(err, output) {
            if (err)
                res.send(output);

            res.json({ message: 'Successfully deleted' });
        });
	};	

	this.insertEmptyPart = function(req, res) {
		var Inst1 = new this.cubesat({
			Attitude: {
				Type: undefined,
				Type_further: undefined,
				Name: undefined,
				Manufacturer: undefined,
				Reference: undefined,
				Heritage: undefined,
				Mass: undefined,
				Mass_further: undefined,
				Power: undefined,
				Power_further: undefined,
				Volume: undefined,
				Proportions: undefined,
				Volume_further: undefined,
				Angle_prec: undefined,
				Attitude_control_further: undefined,
				Ac_sensors: undefined,
				Scientific_obj: undefined,
				Venue: undefined,
				Temp_low: undefined,
				Temp_high: undefined,
				Datarate: undefined,
				Cost: undefined
			},
			Cdh: {
				Type: undefined, 
			    Name: undefined, 
			    Manufacturer: undefined, 
			    Reference: undefined, 
			    Heritage: undefined, 
			    Mass: undefined, 
			    Mass_further: undefined, 
			    Power: undefined, 
			    Power_further: undefined, 
			    Volume: undefined, 
			    Proportions: undefined, 
			    Volume_further: undefined, 
			    MIPS: undefined, 
			    MHz: undefined, 
			    Processing_further: undefined, 
			    Memory: undefined, 
			    Temp_low: undefined, 
			    Temp_high: undefined, 
			    Scientific_obj: undefined, 
			    Cost: undefined
			},
			Instrument: {
				Type: undefined,
				Name: undefined,
				Manufacturer: undefined,
				Reference: undefined,
				Heritage: undefined,
				Mass: undefined, 
				Mass_further: undefined,
				Power: undefined, 
				Power_further: undefined,
				Volume: undefined,
				Proportions: undefined,
				Volume_further: undefined,
				Measurement: undefined,
				Sensitivity: undefined,
				Resolution: undefined,
				Pixels: undefined,
				Objectives: undefined,
				Venue: undefined,
				FOV: undefined, 
				T_lo: undefined, 
				T_hi: undefined, 
				Thermal_further: undefined,
				Datarate: undefined, 
				Cost: undefined
			},
			Power: {
				Type: undefined,
			    Name: undefined,
			    Manufacturer: undefined,
			    Website: undefined,
			    Description: undefined,
			    Mass: undefined,
			    Mass_further: undefined,
			    Power: undefined,
			    Power_further: undefined,
			    Volume: undefined,
			    Proportions: undefined,
			    Volume_further: undefined,
			    Efficiency: undefined,
			    Objectives: undefined,
			    Thermal_further: undefined,
			    Memory: undefined,
			    Temp_low: undefined,
			    Temp_high: undefined,
			    Energy_Storage: undefined,
			    PperWing: undefined,
			    Wings: undefined,
			    Cost: undefined
			},
			Propulsion: {
				Type: undefined,
				Name: undefined,
				Manufacturer: undefined,
				Reference: undefined,
				Heritage: undefined,
				Mass: undefined,
				Mass_further: undefined,
				Power: undefined,
				Power_further: undefined,
				Volume: undefined,
				Proportions: undefined,
				Volume_further: undefined,
				Specific_Impulse: undefined,
				DeltaV: undefined,
				Objectives: undefined,
				Thermal_Issues: undefined,
				Total_Impulse: undefined,
				Cost: undefined
			},
			Station: {
				Name: undefined,
			    Uplink_freq: undefined, 
			    EIRP: undefined, 
			    EIRP_ave: undefined, 
			    Downlink_freq: undefined, 
			    Gain: undefined, 
			    Per_gain: undefined, 
			    Diameter: undefined, 
			    Loc: undefined, 
			    Band: undefined,
			    Coordinates: undefined
			},
			Thermal: {
				Type: undefined,
			    Name: undefined,
			    Manufacturer: undefined,
			    Website: undefined,
			    Heritage: undefined,
			    Mass: undefined,
			    Mass_further: undefined,
			    Power: undefined,
			    Power_further: undefined,
			    Volume: undefined,
			    Proportions: undefined,
			    Volume_further: undefined,
			    Objectives: undefined
		    }
		});
		Inst1.save(function (error, output) {
			if (error) 
				res.send(err)
			res.json(Inst1);
		});
	}
}	

module.exports = CubesatFactory;
