var CubesatFactory = function(Schema,mongoose) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		Schema = new this.Schema({
			Mission_Name: Object,
			Mission_Objectives: Object,
			Target: String,
			Mass:Number,
			Power:Number,
			Volume:Number,
			Attitude: {
				id: String,
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
				Attitude_control_further: String,
				Ac_sensors: String,
				Scientific_obj: String,
				Venue: String,
				Datarate: String,
				Cost: String
			},
			Antenna: {
				id: String,
				Type: String,
				Name: String,
				Manufacturer: String,
				Website: String,
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
				Gain_further: String,
				Life_and_Use: String,
			},
			Receiver: {
				id: String,
				Type: String,
				Name: String,
				Manufacturer: String,
				Website: String,
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
				Gain_further: String,
				Life_and_Use: String,
			},
			Cdh: {
				id: String,
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
			    Cost: String
			},
			Instrument: {
				id: String,
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
				Sensitivity:String,
				Resolution:String,
				Pixels:String,
				Objectives:String,
				FOV:String,  
				Cost:String
			},
			Panels: {
				id: String,
				Type: String,
			    Name: String,
			    Manufacturer: String,
			    Website: String,
			    Description: String,
			    Mass: String,
			    Power: String,
			    Volume: String,
			    Proportions: String,
			    Efficiency: String,
			    Objectives: String,
			    Thermal_further: String,
			    Energy_Storage: String,
			    PperWing: String,
			    Wings: String,
			    Cost: String
			},
			Batteries: {
				id: String,
				Type: String,
			    Name: String,
			    Manufacturer: String,
			    Website: String,
			    Description: String,
			    Mass: String,
			    Power: String,
			    Volume: String,
			    Proportions: String,
			    Efficiency: String,
			    Objectives: String,
			    Thermal_further: String,
			    Energy_Storage: String,
			    PperWing: String,
			    Wings: String,
			    Cost: String
			},
			EPS: {
				id: String,
				Type: String,
			    Name: String,
			    Manufacturer: String,
			    Website: String,
			    Description: String,
			    Mass: String,
			    Power: String,
			    Volume: String,
			    Proportions: String,
			    Efficiency: String,
			    Objectives: String,
			    Thermal_further: String,
			    Energy_Storage: String,
			    PperWing: String,
			    Wings: String,
			    Cost: String
			},
			Propulsion: {
				id: String,
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
				Thermal_Issues: String,
				Total_Impulse: String,
				Cost: String
			},
			Station: {
				id: String,
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
			Bus: {
				id: String,
				Type: String,
			    Name: String,
			    Manufacturer: String,
			    Website: String,
			    Heritage: String,
			    Mass: String,
			    Power: String,
			    Volume: String,
			    Proportions: String,
			    Objectives: String
			},
			Deployer: {
				id: String,
				Type: String,
			    Name: String,
			    Manufacturer: String,
			    Website: String,
			    Heritage: String,
			    Mass: String,
			    Power: String,
			    Volume: String,
			    Proportions: String,
			    Objectives: String
			},
			Thermal: {
				id: String,
				Type: String,
			    Name: String,
			    Manufacturer: String,
			    Website: String,
			    Heritage: String,
			    Mass: String,
			    Power: String,
			    Volume: String,
			    Proportions: String,
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
					id: req.body._id,
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
		});
	};

	this.updateMass = function(req, res){
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				 Mass: req
		    }
		 }, function(error, output) {

				res.json(output);
		});
	}
	this.updatePower = function(req, res){
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				 Power:req
		    }
		 }, function(error, output) {

				res.json(output);
		});
	}
	this.updateVolume = function(req, res){
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				 Volume:req
		    }
		 }, function(error, output) {

				res.json(output);
		});
	}

	this.updateAntenna = function(req, res) {
		this.cubesat.update(
		{
			_id: req.params._id
		}, 
		{$set:
			{
				Antenna:
				{
					id: req.body._id,
					Type: req.body.Type,
					Name: req.body.Name,
					Manufacturer: req.body.Manufacturer,
					Website: req.body.Website,
					Heritage: req.body.Heritage,
					Mass: req.body.Mass,
					Power: req.body.Power,
					Volume: req.body.Volume,
					Proportions: req.body.Proportions,
					Volume_further: req.body.Volume_further,
					Frequency: req.body.Frequency,
					Data_and_Objectives: req.body.Data_and_Objectives,
					Receiver_Sensitivity: req.body.Receiver_Sensitivity,
					Transmit_Power: req.body.Transmit_Power,
					Transmit_Power_further: req.body.Transmit_Power_further,
					Beamwidth: req.body.Beamwidth,
					Gain: req.body.Gain,
					Gain_further: req.body.Gain_further,
					Life_and_Use: req.body.Life_and_Use,
					Temp_Low: req.body.Temp_Low,
					Temp_High: req.body.Temp_High
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
					id: req.body._id,
					Type: req.body.Type,
					Name: req.body.Name,
					Manufacturer: req.body.Manufacturer,
					Website: req.body.Website,
					Heritage: req.body.Heritage,
					Mass: req.body.Mass,
					Power: req.body.Power,
					Volume: req.body.Volume,
					Proportions: req.body.Proportions,
					Volume_further: req.body.Volume_further,
					Frequency: req.body.Frequency,
					Data_and_Objectives: req.body.Data_and_Objectives,
					Receiver_Sensitivity: req.body.Receiver_Sensitivity,
					Transmit_Power: req.body.Transmit_Power,
					Transmit_Power_further: req.body.Transmit_Power_further,
					Beamwidth: req.body.Beamwidth,
					Gain: req.body.Gain,
					Gain_further: req.body.Gain_further,
					Life_and_Use: req.body.Life_and_Use,
					Temp_Low: req.body.Temp_Low,
					Temp_High: req.body.Temp_High
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
					id: req.body._id,
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
				    Temp_low: req.body.Temp_low, 
				    Temp_high: req.body.Temp_high, 
				    Scientific_obj: req.body.Scientific_obj, 
				    Cost: req.body.Cost
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
					id: req.body._id,
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
					Sensitivity: req.body.Sensitivity,
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
					id: req.body._id,
					Type: req.body.Type,
				    Name: req.body.Name,
				    Manufacturer: req.body.Manufacturer,
				    Website: req.body.Website,
				    Description: req.body.Description,
				    Mass: req.body.Mass,
				    Power: req.body.Power,
				    Volume: req.body.Volume,
				    Proportions: req.body.Proportions,
				    Efficiency: req.body.Efficiency,
				    Objectives: req.body.Objectives,
				    Thermal_further: req.body.Thermal_further,
				    Energy_Storage: req.body.Energy_Storage,
				    PperWing: req.body.PperWing,
				    Wings: req.body.Wings,
				    Cost: req.body.Cost
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
					id: req.body._id,
					Type: req.body.Type,
				    Name: req.body.Name,
				    Manufacturer: req.body.Manufacturer,
				    Website: req.body.Website,
				    Description: req.body.Description,
				    Mass: req.body.Mass,
				    Power: req.body.Power,
				    Volume: req.body.Volume,
				    Proportions: req.body.Proportions,
				    Efficiency: req.body.Efficiency,
				    Objectives: req.body.Objectives,
				    Thermal_further: req.body.Thermal_further,
				    Temp_low: req.body.Temp_low,
				    Temp_high: req.body.Temp_high,
				    Energy_Storage: req.body.Energy_Storage,
				    PperWing: req.body.PperWing,
				    Wings: req.body.Wings,
				    Cost: req.body.Cost
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
					id: req.body._id,
					Type: req.body.Type,
				    Name: req.body.Name,
				    Manufacturer: req.body.Manufacturer,
				    Website: req.body.Website,
				    Description: req.body.Description,
				    Mass: req.body.Mass,
				    Power: req.body.Power,
				    Volume: req.body.Volume,
				    Proportions: req.body.Proportions,
				    Efficiency: req.body.Efficiency,
				    Objectives: req.body.Objectives,
				    Thermal_further: req.body.Thermal_further,
				    Temp_low: req.body.Temp_low,
				    Temp_high: req.body.Temp_high,
				    Energy_Storage: req.body.Energy_Storage,
				    PperWing: req.body.PperWing,
				    Wings: req.body.Wings,
				    Cost: req.body.Cost
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
					id: req.body._id,
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
		            Thermal_Issues: req.body.Thermal_Issues,
		            Total_Impulse: req.body.Total_Impulse,
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
					id: req.body._id,
					Name: req.body.Name,
				    Uplink_freq: req.body.Uplink_freq, 
				    EIRP: req.body.EIRP, 
				    EIRP_ave: req.body.EIRP_ave, 
				    Downlink_freq: req.body.Downlink_freq, 
				    Gain: req.body.Gain, 
				    Per_gain: req.body.Per_gain, 
				    Diameter: req.body.Diameter, 
				    Loc: req.body.Loc, 
				    Band: req.body.Band,
				    Coordinates: req.body.Coordinates
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
					id: req.body._id,
					Type: req.body.Type,
				    Name: req.body.Name,
				    Manufacturer: req.body.Manufacturer,
				    Website: req.body.Website,
				    Heritage: req.body.Heritage,
				    Mass: req.body.Mass,
				    Power: req.body.Power,
				    Volume: req.body.Volume,
				    Proportions: req.body.Proportions,
				    Objectives: req.body.Objectives
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
					id: req.body._id,
					Type: req.body.Type,
				    Name: req.body.Name,
				    Manufacturer: req.body.Manufacturer,
				    Website: req.body.Website,
				    Heritage: req.body.Heritage,
				    Mass: req.body.Mass,
				    Power: req.body.Power,
				    Volume: req.body.Volume,
				    Proportions: req.body.Proportions,
				    Objectives: req.body.Objectives
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
					id: req.body._id,
					Type: req.body.Type,
				    Name: req.body.Name,
				    Manufacturer: req.body.Manufacturer,
				    Website: req.body.Website,
				    Heritage: req.body.Heritage,
				    Mass: req.body.Mass,
				    Power: req.body.Power,
				    Volume: req.body.Volume,
				    Proportions: req.body.Proportions,
				    Objectives: req.body.Objectives
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
			Target: undefined,
			Attitude: {
				id: undefined,
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
			Antenna: {
				id: undefined,
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
				Frequency: undefined,
				Data_and_Objectives: undefined,
				Receiver_Sensitivity: undefined,
				Transmit_Power: undefined,
				Transmit_Power_further: undefined,
				Beamwidth: undefined,
				Gain: undefined,
				Gain_further: undefined,
				Life_and_Use: undefined,
				Temp_Low: undefined,
				Temp_High: undefined
			},
			Receiver: {
				id: undefined,
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
				Frequency: undefined,
				Data_and_Objectives: undefined,
				Receiver_Sensitivity: undefined,
				Transmit_Power: undefined,
				Transmit_Power_further: undefined,
				Beamwidth: undefined,
				Gain: undefined,
				Gain_further: undefined,
				Life_and_Use: undefined,
				Temp_Low: undefined,
				Temp_High: undefined
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
			Panels: {
				id: undefined,
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
			    Temp_low: undefined,
			    Temp_high: undefined,
			    Energy_Storage: undefined,
			    PperWing: undefined,
			    Wings: undefined,
			    Cost: undefined
			},
			Batteries: {
				id: undefined,
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
			    Temp_low: undefined,
			    Temp_high: undefined,
			    Energy_Storage: undefined,
			    PperWing: undefined,
			    Wings: undefined,
			    Cost: undefined
			},
			EPS: {
				id: undefined,
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
			Bus: {
				id: undefined,
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
			},
			Deployer: {
				id: undefined,
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
