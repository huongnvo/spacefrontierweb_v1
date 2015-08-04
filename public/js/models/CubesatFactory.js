var CubesatFactory = function(Schema,mongoose) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		Schema = new this.Schema({
			Mission_Name: Object,
			Mission_Objectives: Object,
			Target: String,
			Mass: Number,
			Power: Number,
			Volume: Number,
			Attitude: {
				Type: String,
				Type_further: String,
				Name: String,
				Manufacturer: String,
				Reference: String,
				Heritage: String,
				Mass: String,
				Power: String,
				Volume: String,
				Proportions: String,
				Angle_prec: String,
				Ac_sensors: String,
				Scientific_obj: String,
				Cost: String
			},
			Antenna: {
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
				Cost: String
			},
			Receiver: {
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
				Cost: String
			},
			Cdh: {
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
			},
			Instrument: {
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
			},
			Panels: {
			    Type: String,
			    Name: String,
			    Manufacturer: String,
			    Reference: String,
			    Description: String,
			    Mass: String,
			    Power: String,
			    Volume: String,
			    Proportions: String,
			    Efficiency: String,
			    Objectives: String,
			    Energy_Storage: String,
			    PperWing: String,
			    Wings: String,
			    Cost: String,
			    Additional_info: String
			},
			Batteries: {
			    Type: String,
			    Name: String,
			    Manufacturer: String,
			    Reference: String,
			    Description: String,
			    Mass: String,
			    Power: String,
			    Volume: String,
			    Proportions: String,
			    Efficiency: String,
			    Objectives: String,
			    Energy_Storage: String,
			    PperWing: String,
			    Wings: String,
			    Cost: String,
			    Additional_info: String
			},
			EPS: {
			    Type: String,
			    Name: String,
			    Manufacturer: String,
			    Reference: String,
			    Description: String,
			    Mass: String,
			    Power: String,
			    Volume: String,
			    Proportions: String,
			    Efficiency: String,
			    Objectives: String,
			    Energy_Storage: String,
			    PperWing: String,
			    Wings: String,
			    Cost: String,
			    Additional_info: String
			},
			Propulsion: {
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
			},
			Station: {
				Name: String,
			    Uplink_freq: String, 
			    EIRP: String, 
			    Downlink_freq: String, 
			    Gain: String, 
			    Per_gain: String, 
			    Diameter: String, 
			    Loc: String, 
			    Band: String
			},
			Bus: {
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
			},
			Deployer: {
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
			},
			Thermal: {
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

	this.updateObjectives = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set: 
			{Mission_Objectives: req.body.Mission_Objectives}
		}, function(error, output) {
			res.json(output);
		});
	}

	this.updateName = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set: 
			{Mission_Name: req.body.Mission_Name}
		}, function(error, output) {
			res.json(output);
		});
	}

	this.updateMass = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set: 
			{Mass: req.body.Mass}
		}, function(error, output) {
			res.json(output);
		});
	}

	this.updatePower = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set: 
			{Power: req.body.Power}
		}, function(error, output) {
			res.json(output);
		});
	}

	this.updateVolume = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set: 
			{Volume: req.body.Volume}
		}, function(error, output) {
			res.json(output);
		});
	}

	this.updateTarget = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set: 
			{Target: req.body.Target}
		}, function(error, output) {
			res.json(output);
		});
	}

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
					Power: req.body.Power,
					Volume: req.body.Volume,
					Proportions: req.body.Proportions,
					Angle_prec: req.body.Angle_prec,
					Ac_sensors: req.body.Ac_sensors,
					Scientific_obj: req.body.Scientific_obj,
					Cost: req.body.Cost
	    		}
	 	   }
		}, function(error, output) {
			res.json(output);
		});
	};

	this.updateAntenna = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				Antenna:
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
	    		}
	    	}
		}, function(error, output) {
			res.json(output);
		});
	};

	this.updateReceiver = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				Receiver:
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
	    		}
	    	}
		}, function(error, output) {
			res.json(output);
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
					Power: req.body.Power, 
					Volume: req.body.Volume,
					Proportions: req.body.Proportions,
					Measurement: req.body.Measurement,
					Resolution: req.body.Resolution,
					Pixels: req.body.Pixels,
					Objectives: req.body.Objectives,
					FOV: req.body.FOV, 
					Cost: req.body.Cost
	    		} 
    		}
		}, function(error, output) {
			res.json(output);
		});
	};

	this.updatePanel = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				Panels:
				{
					Type: req.body.Type,
				    Name: req.body.Name,
				    Manufacturer: req.body.Manufacturer,
				    Reference: req.body.Reference,
				    Description: req.body.Description,
				    Mass: req.body.Mass,
				    Power: req.body.Power,
				    Volume: req.body.Volume,
				    Proportions: req.body.Proportions,
				    Efficiency: req.body.Efficiency,
				    Objectives: req.body.Objectives,
				    Energy_Storage: req.body.Energy_Storage,
				    PperWing: req.body.PperWing,
				    Wings: req.body.Wings,
				    Cost: req.body.Cost,
				    Additional_info: req.body.Additional_info
	    		} 
    		}
		}, function(error, output) {
			res.json(output);
		});
	};

	this.updateBatteries = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				Batteries:
				{
					Type: req.body.Type,
				    Name: req.body.Name,
				    Manufacturer: req.body.Manufacturer,
				    Reference: req.body.Reference,
				    Description: req.body.Description,
				    Mass: req.body.Mass,
				    Power: req.body.Power,
				    Volume: req.body.Volume,
				    Proportions: req.body.Proportions,
				    Efficiency: req.body.Efficiency,
				    Objectives: req.body.Objectives,
				    Energy_Storage: req.body.Energy_Storage,
				    PperWing: req.body.PperWing,
				    Wings: req.body.Wings,
				    Cost: req.body.Cost,
				    Additional_info: req.body.Additional_info
	    		}
    		}
		}, function(error, output) {
			res.json(output);
		});
	};

	this.updateEPS = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				EPS:
				{
					Type: req.body.Type,
				    Name: req.body.Name,
				    Manufacturer: req.body.Manufacturer,
				    Reference: req.body.Reference,
				    Description: req.body.Description,
				    Mass: req.body.Mass,
				    Power: req.body.Power,
				    Volume: req.body.Volume,
				    Proportions: req.body.Proportions,
				    Efficiency: req.body.Efficiency,
				    Objectives: req.body.Objectives,
				    Energy_Storage: req.body.Energy_Storage,
				    PperWing: req.body.PperWing,
				    Wings: req.body.Wings,
				    Cost: req.body.Cost,
				    Additional_info: req.body.Additional_info
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
					Name: req.body.Name,
				    Uplink_freq: req.body.Uplink_freq, 
				    EIRP: req.body.EIRP, 
				    Downlink_freq: req.body.Downlink_freq, 
				    Gain: req.body.Gain, 
				    Per_gain: req.body.Per_gain, 
				    Diameter: req.body.Diameter, 
				    Loc: req.body.Loc, 
				    Band: req.body.Band
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
					Type: req.body.Type,
				    Name: req.body.Name,
				    Manufacturer: req.body.Manufacturer,
				    Reference: req.body.Reference,
				    Heritage: req.body.Heritage,
				    Mass: req.body.Mass,
				    Power: req.body.Power,
				    Volume: req.body.Volume,
				    Proportions: req.body.Proportions,
				    Additional_info: req.body.Additional_info,
				    Cost: req.body.Cost
	    		} 
    		}
		}, function(error, output) {
			res.json(output);
		});
	};

	this.updateBus = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				Bus:
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
				    Additional_info: req.body.Additional_info,
				    Cost: req.body.Cost
	    		} 
    		}
		}, function(error, output) {
			res.json(output);
		});
	};

	this.updateDeployer = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				Deployer:
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
				    Additional_info: req.body.Additional_info,
				    Cost: req.body.Cost
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
			Mission_Name: undefined,
			Mission_Objectives: undefined,
			Target: undefined,
			Mass: 0,
			Power: 0,
			Volume: 0,
			Attitude: {
				Type: undefined,
				Type_further: undefined,
				Name: undefined,
				Manufacturer: undefined,
				Reference: undefined,
				Heritage: undefined,
				Mass: undefined,
				Power: undefined,
				Volume: undefined,
				Proportions: undefined,
				Angle_prec: undefined,
				Ac_sensors: undefined,
				Scientific_obj: undefined,
				Cost: undefined
			},
			Antenna: {
				Type: undefined,
				Name: undefined,
				Manufacturer: undefined,
				Reference: undefined,
				Heritage: undefined,
				Mass: undefined,
				Power: undefined,
				Volume: undefined,
				Proportions: undefined,
				Frequency: undefined,
				Data_and_Objectives: undefined,
				Receiver_Sensitivity: undefined,
				Transmit_Power: undefined,
				Beamwidth: undefined,
				Gain: undefined,
				Cost: undefined
			},
			Receiver: {
				Type: undefined,
				Name: undefined,
				Manufacturer: undefined,
				Reference: undefined,
				Heritage: undefined,
				Mass: undefined,
				Power: undefined,
				Volume: undefined,
				Proportions: undefined,
				Frequency: undefined,
				Data_and_Objectives: undefined,
				Receiver_Sensitivity: undefined,
				Transmit_Power: undefined,
				Beamwidth: undefined,
				Gain: undefined,
				Cost: undefined
			},
			Cdh: {
				Type: undefined, 
			    Name: undefined, 
			    Manufacturer: undefined, 
			    Reference: undefined, 
			    Heritage: undefined, 
			    Mass: undefined, 
			    Power: undefined, 
			    Volume: undefined, 
			    Proportions: undefined, 
			    MIPS: undefined, 
			    MHz: undefined, 
			    Processing_further: undefined, 
			    Memory: undefined, 
			    Scientific_obj: undefined, 
			    Cost: undefined,
			    Additional_info: undefined
			},
			Instrument: {
				Type: undefined,
				Name: undefined,
				Manufacturer: undefined,
				Reference: undefined,
				Heritage: undefined,
				Mass: undefined, 
				Power: undefined, 
				Volume: undefined,
				Proportions: undefined,
				Measurement: undefined,
				Resolution: undefined,
				Pixels: undefined,
				Objectives: undefined,
				FOV: undefined, 
				Cost: undefined
			},
			Panels: {
				Type: undefined,
			    Name: undefined,
			    Manufacturer: undefined,
			    Reference: undefined,
			    Description: undefined,
			    Mass: undefined,
			    Power: undefined,
			    Volume: undefined,
			    Proportions: undefined,
			    Efficiency: undefined,
			    Objectives: undefined,
			    Energy_Storage: undefined,
			    PperWing: undefined,
			    Wings: undefined,
			    Cost: undefined,
			    Additional_info: undefined
			},
			Batteries: {
				Type: undefined,
			    Name: undefined,
			    Manufacturer: undefined,
			    Reference: undefined,
			    Description: undefined,
			    Mass: undefined,
			    Power: undefined,
			    Volume: undefined,
			    Proportions: undefined,
			    Efficiency: undefined,
			    Objectives: undefined,
			    Energy_Storage: undefined,
			    PperWing: undefined,
			    Wings: undefined,
			    Cost: undefined,
			    Additional_info: undefined
			},
			EPS: {
				Type: undefined,
			    Name: undefined,
			    Manufacturer: undefined,
			    Reference: undefined,
			    Description: undefined,
			    Mass: undefined,
			    Power: undefined,
			    Volume: undefined,
			    Proportions: undefined,
			    Efficiency: undefined,
			    Objectives: undefined,
			    Energy_Storage: undefined,
			    PperWing: undefined,
			    Wings: undefined,
			    Cost: undefined,
			    Additional_info: undefined
			},
			Propulsion: {
				Type: undefined,
				Name: undefined,
				Manufacturer: undefined,
				Reference: undefined,
				Heritage: undefined,
				Mass: undefined,
				Power: undefined,
				Volume: undefined,
				Proportions: undefined,
				Specific_Impulse: undefined,
				DeltaV: undefined,
				Objectives: undefined,
				Cost: undefined
			},
			Station: {
				Name: undefined,
			    Uplink_freq: undefined, 
			    EIRP: undefined, 
			    Downlink_freq: undefined, 
			    Gain: undefined, 
			    Per_gain: undefined, 
			    Diameter: undefined, 
			    Loc: undefined, 
			    Band: undefined
			},
			Bus: {
				Type: undefined,
			    Name: undefined,
			    Manufacturer: undefined,
			    Reference: undefined,
			    Heritage: undefined,
			    Mass: undefined,
			    Power: undefined,
			    Volume: undefined,
			    Proportions: undefined,
			    Additional_info: undefined,
			    Cost: undefined
			},
			Deployer: {
				Type: undefined,
			    Name: undefined,
			    Manufacturer: undefined,
			    Reference: undefined,
			    Heritage: undefined,
			    Mass: undefined,
			    Power: undefined,
			    Volume: undefined,
			    Proportions: undefined,
			    Additional_info: undefined,
			    Cost: undefined
			},
			Thermal: {
				Type: undefined,
			    Name: undefined,
			    Manufacturer: undefined,
			    Reference: undefined,
			    Heritage: undefined,
			    Mass: undefined,
			    Power: undefined,
			    Volume: undefined,
			    Proportions: undefined,
			    Additional_info: undefined,
			    Cost: undefined
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
