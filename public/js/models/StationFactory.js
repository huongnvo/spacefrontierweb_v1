var StationFactory = function(Schema,mongoose) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		Schema = new this.Schema({
			Name: String,
		    Uplink_freq: String, 
		    EIRP: String, 
		    Downlink_freq: String, 
		    Gain: String, 
		    Per_gain: String, 
		    Diameter: String, 
		    Loc: String, 
		    Band: String
		});
		this.station_parts = mongoose.model('station_parts', Schema);
	}

	this.insertPart = function() {
		var station1 = new this.station_parts({ 
		    Name:'DSS 34 S-Band',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'78.7 to 98.7', 
		    Downlink_freq:'2200 to 2300', 
		    Gain:'56.7', 
		    Per_gain:'40.5', 
		    Diameter:'34', 
		    Loc:'Canberra, Australia', 
		    Band:'S-Band'
	  	});

	  	var station2 = new this.station_parts({ 
		    Name:'DSS 34 X-Band',
		    Uplink_freq:'7146 to 7235', 
		    EIRP:'89.5 to 109.5', 
		    Downlink_freq:'8400 to 8500', 
		    Gain:'68.2', 
		    Per_gain:'53.9', 
		    Diameter:'34', 
		    Loc:'Canberra, Australia', 
		    Band:'X-Band'
		});

		var station3 = new this.station_parts({ 
		    Name:'DSS 34 X-Band',
		    Uplink_freq:'7146 to 7235', 
		    EIRP:'89.5 to 109.5', 
		    Downlink_freq:'8400 to 8500', 
		    Gain:'68.2', 
		    Per_gain:'53.9', 
		    Diameter:'34', 
		    Loc:'Canberra, Australia', 
		    Band:'X-Band'
		});

		var station4 = new this.station_parts({ 
		    Name:'DSS 34 Ka-Band',
		    Uplink_freq:'Unknown', 
		    EIRP:'Unknown', 
		    Downlink_freq:'25500 to 27000', 
		    Gain:'76.5 to 78.4', 
		    Per_gain:'58.6 to 60.8', 
		    Diameter:'34', 
		    Loc:'Canberra, Australia', 
		    Band:'Ka-Band'
		});

		var station4 = new this.station_parts({ 
		    Name:'DSS 45 S-Band',
		    Uplink_freq:'2025 to 2100', 
		    EIRP:'71.8 to 78.8', 
		    Downlink_freq:'2200 to 2300', 
		    Gain:'56', 
		    Per_gain:'39', 
		    Diameter:'34', 
		    Loc:'Canberra, Australia', 
		    Band:'S-Band'
  		});

  		var station5 = new this.station_parts({ 
		    Name: 'DSS 45 X-Band',
		    Uplink_freq:'7145 to 7190', 
		    EIRP:'89.8 to 109.8', 
		    Downlink_freq:'8400 to 8500', 
		    Gain:'68.3', 
		    Per_gain:'53.1', 
		    Diameter:'34', 
		    Loc:'Canberra, Australia', 
		    Band:'X-Band'
  		});

  		var station6 = new this.station_parts({ 
		    Name: 'DSS 43 S-Band',
		    Uplink_freq:'2110 to 2118', 
		    EIRP:'85.6 to 105.6', 
		    Downlink_freq:'2270 to 2300', 
		    Gain:'63.5', 
		    Per_gain:'50.1', 
		    Diameter:'70', 
		    Loc:'Canberra, Australia', 
		    Band:'S-Band'
 		});

 		var station7 = new this.station_parts({ 
		    Name:'DSS 43 X-Band',
		    Uplink_freq:'7145 to 7190', 
		    EIRP:'95.8 to 115.8', 
		    Downlink_freq:'8400 to 8500', 
		    Gain:'74.6', 
		    Per_gain:'61.3', 
		    Diameter:'70', 
		    Loc:'Canberra, Australia', 
		    Band:'X-Band'
  		});

  		var station8 = new this.station_parts({ 
		    Name:'DSS 24 S-Band',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'78.7 to 98.7', 
		    Downlink_freq:'2200-2300', 
		    Gain:'56.7', 
		    Per_gain:'40.5', 
		    Diameter:'34', 
		    Loc:'Goldstone, California', 
		    Band:'S-Band'
  		});

  		var station9 = new this.station_parts({
		    Name: 'DSS 25, 26 X-Band',
		    Uplink_freq:'7145 to 7235', 
		    EIRP:'89.5 to 109.5', 
		    Downlink_freq:'8400 to 8500', 
		    Gain:'68.2', 
		    Per_gain:'53.9', 
		    Diameter:'34', 
		    Loc:'Goldstone, California', 
		    Band:'X-Band'
  		});

  		var station10 = new this.station_parts({ 
		    Name:'DSS 24 Ka-Band',
		    Uplink_freq:'Unknown', 
		    EIRP:'Unknown', 
		    Downlink_freq:'25500 to 2700', 
		    Gain:'76.5', 
		    Per_gain:'58.6', 
		    Diameter:'34', 
		    Loc:'Goldstone, California', 
		    Band:'Ka-Band'
  		});

  		var station11 = new this.station_parts({ 
		    Name:'DSS 25 Ka-Band',
		    Uplink_freq:'34200 to 34700', 
		    EIRP:'98.2 to 108.2', 
		    EIRP_ave:'103.2', 
		    Downlink_freq:'31800 to 32300', 
		    Gain:'78.4', 
		    Per_gain:'60.8', 
		    Diameter:'34', 
		    Loc:'Goldstone, California', 
		    Band:'Ka-Band'
		});

  		var station12 = new this.station_parts({ 
		    Name:'DSS 26 Ka-Band',
		    Uplink_freq:'Unknown', 
		    EIRP:'Unknown', 
		    Downlink_freq:'31800 to 32300', 
		    Gain:'78.4', 
		    Per_gain:'60.8', 
		    Diameter:'34', 
		    Loc:'Goldstone, California', 
		    Band:'Ka-Band'
  		});

  		var station13 = new this.station_parts({ 
		    Name:'DSS 15 S-Band',
		    Uplink_freq:'Unknown', 
		    EIRP:'Unknown', 
		    Downlink_freq:'2200-2300', 
		    Gain:'56', 
		    Per_gain:'39', 
		    Diameter:'34', 
		    Loc:'Goldstone, California', 
		    Band:'S-Band'
  		});

  		var station14 = new this.station_parts({ 
		    Name:'DSS 15 X-Band',
		    Uplink_freq:'7145-7190', 
		    EIRP:'89.8 to 109.8', 
		    Downlink_freq:'8400 to 8500', 
		    Gain:'68.3', 
		    Per_gain:'53.1', 
		    Diameter:'34', 
		    Loc:'Goldstone, California', 
		    Band:'X-Band'
  		});

  		var station15 = new this.station_parts({ 
		    Name:'DSS 27 S-Band',
		    Uplink_freq:'2025 to 2110', 
		    EIRP:'70.7 to 76.7', 
		    Downlink_freq:'2200 to 2300', 
		    Gain:'54.9', 
		    Per_gain:'34.5', 
		    Diameter:'34', 
		    Loc:'Goldstone, California', 
		    Band:'S-Band'
  		});

  		var station16 = new this.station_parts({ 
		    Name: 'DSS 14 S-Band',
		    Uplink_freq:'2110 to 2118', 
		    EIRP:'85.6 to 105.6', 
		    Downlink_freq:'2270 to 2300', 
		    Gain:'63.5', 
		    Per_gain:'50.1', 
		    Diameter:'70', 
		    Loc:'Goldstone, California', 
		    Band:'S-Band'
  		});

  		var station17 = new this.station_parts({ 
		    Name:'DSS 14 X-Band',
		    Uplink_freq:'7145 to 7190', 
		    EIRP:'95.8 to 115.8', 
		    Downlink_freq:'8400 to 8500', 
		    Gain:'74.5', 
		    Per_gain:'61.3', 
		    Diameter:'70', 
		    Loc:'Goldstone, California',
		    Band:'X-Band'
  		});

  		var station18 = new this.station_parts({ 
		    Name:'DSS 54 S-Band',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'78.7 to 98.7',
		    Downlink_freq:'2200 to 2300', 
		    Gain:'56.7', 
		    Per_gain:'40.5', 
		    Diameter:'34', 
		    Loc:'Madrid, Spain', 
		    Band:'S-Band'
  		});

  		var station19 = new this.station_parts({ 
		    Name:'DSS 54, 55 X-Band',
		    Uplink_freq:'7147 to 7235', 
		    EIRP:'89.5 to 109.5', 
		    Downlink_freq:'8400 to 8500', 
		    Gain:'68.2', 
		    Per_gain:'53.9', 
		    Diameter:'34', 
		    Loc:'Madrid, Spain', 
		    Band:'X-Band'
  		});

  		var station20 = new this.station_parts({ 
		    Name:'DSS 54 Ka-Band',
		    Uplink_freq:'Unknown', 
		    EIRP:'Unknown', 
		    Downlink_freq:'25500 to 27000', 
		    Gain:'76.5', 
		    Per_gain:'58.6', 
		    Diameter:'34', 
		    Loc:'Madrid, Spain', 
		    Band:'Ka-Band'
  		});

  		var station21 = new this.station_parts({ 
		    Name:'DSS 55 Ka-Band',
		    Uplink_freq:'Unknown', 
		    EIRP:'Unknown', 
		    Downlink_freq:'31800 to 32300', 
		    Gain:'78.4', 
		    Per_gain:'60.8', 
		    Diameter:'34', 
		    Loc:'Madrid, Spain', 
		    Band:'Ka-Band'
  		});

  		var station22 = new this.station_parts({ 
		    Name:'DSS 55 Ka-Band',
		    Uplink_freq:'Unknown', 
		    EIRP:'Unknown', 
		    Downlink_freq:'31800 to 32300', 
		    Gain:'78.4', 
		    Per_gain:'60.8', 
		    Diameter:'34', 
		    Loc:'Madrid, Spain', 
		    Band:'Ka-Band'
  		});

  		var station23 = new this.station_parts({
		    Name: 'DSS 65 S-Band',
		    Uplink_freq:'2025 to 2110', 
		    EIRP:'71.8 to 78.8', 
		    EIRP_ave:'75.3', 
		    Downlink_freq:'2200 to 2300', 
		    Gain:'56', 
		    Per_gain:'39', 
		    Diameter:'34', 
		    Loc:'Madrid, Spain', 
		    Band:'S-Band'
  		});

  		var station24 = new this.station_parts({ 
		    Name:'DSS 65 X-Band',
		    Uplink_freq:'7145 to 7190', 
		    EIRP:'89.8 to 109.8', 
		    EIRP_ave:'99.8', 
		    Downlink_freq:'2200 to 2400', 
		    Gain:'68.3', 
		    Per_gain:'53.1', 
		    Diameter:'34', 
		    Loc:'Madrid, Spain', 
		    Band:'X-Band'
  		});

  		var station25 = new this.station_parts({ 
		    Name:'DSS 63 S-Band',
		    Uplink_freq:'2110 to 2118', 
		    EIRP:'85.6 to 105.6', 
		    Downlink_freq:'2270 to 2300', 
		    Gain:'63.5', 
		    Per_gain:'50.1', 
		    Diameter:'70', 
		    Loc:'Madrid, Spain', 
		    Band:'S-Band'
 		});

 		var station26 = new this.station_parts({ 
		    Name:'DSS 63 X-Band',
		    Uplink_freq:'7145 to 7190', 
		    EIRP:'95.8 to 115.8', 
		    Downlink_freq:'2200 to 2400', 
		    Gain:'74.6', 
		    Per_gain:'61.3', 
		    Diameter:'70', 
		    Loc:'Madrid, Spain', 
		    Band:'X-Band'
  		});

 		var station27 = new this.station_parts({ 
		    Name:'SG1',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'66', 
		    Downlink_freq:'2200 to 2400', 
		    Gain:'Unknown', 
		    Per_gain:'35.84', 
		    Diameter:'11.3', 
		    Loc:'Norway', 
		    Band:'UHF, S-Band, X-Band', 
  		});

  		var station28 = new this.station_parts({ 
		    Name:'SG1',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'66', 
		    Downlink_freq:'2200 to 2400', 
		    Gain:'-', 
		    Per_gain:'23.63, 35.84', 
		    Diameter:'11.3', 
		    Loc:'Norway', 
		    Band:'UHF, S-Band, X-Band'
  		});

  		var station29 = new this.station_parts({ 
		    Name:'SG2',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'Unknown', 
		    Downlink_freq:'2200 to 2400', 
		    Gain:'Unknown', 
		    Per_gain:'20.38', 
		    Diameter:'11', 
		    Loc:'Norway', 
		    Band:'UHF, S-Band, X-Band'
  		});

  		var station30 = new this.station_parts({ 
		    Name:'SG3',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'68', 
		    Downlink_freq:'2200 to 2400', 
		    Gain:'Unknown', 
		    Per_gain:'24.45', 
		    Diameter:'13', 
		    Loc:'Norway', 
		    Band:'UHF, S-Band, X-Band'
	    });

	    var station31 = new this.station_parts({ 
		    Name:'WGS 11.3 M',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'66', 
		    Downlink_freq:'2200 to 2400', 
		    Gain:'Unknown', 
		    Per_gain:'23.63', 
		    Diameter:'11.3', 
		    Loc:'Wallops Island, Virginia', 
		    Band:'UHF, S-Band, X-Band'
		});

		var station32 = new this.station_parts({ 
		    Name:'LEO-T',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'59', 
		    Downlink_freq:'2200 to 2300', 
		    Gain:'Unknown', 
		    Per_gain:'16.99', 
		    Diameter:'4.7', 
		    Loc:'Wallops Island, Virginia', 
		    Band:'UHF, S-Band, X-Band'
  		});

  		var station33 = new this.station_parts({ 
		    Name:'WFF VHF-1',
		    Uplink_freq:'139.208', 
		    EIRP:'45.4', 
		    Downlink_freq:'143.625', 
		    Gain:'Unknown', 
		    Per_gain:'Unknown', 
		    Diameter:'Yagi', 
		    Loc:'Wallops Island, Virginia', 
		    Band:'VHF'
		});

		var station34 = new this.station_parts({ 
		    Name: 'WFF VHF-2',
		    Uplink_freq:'130.167', 
		    EIRP:'45.4', 
		    Downlink_freq:'121.75', 
		    Gain:'Unknown', 
		    Per_gain:'Unknown', 
		    Diameter:'Yagi', 
		    Loc:'Wallops Island, Virginia', 
		    Band:'VHF'
  		});

  		var station35 = new this.station_parts({ 
		    Name:'WFF UHF',
		    Uplink_freq:'259.7 to 296.8', 
		    EIRP:'34', 
		    EIRP_ave:'34', 
		    Downlink_freq:'259.7 to 296.8', 
		    Gain:'Unknown', 
		    Per_gain:'Unknown', 
		    Diameter:'Quad Helix', 
		    Loc:'Wallops Island, Virginia', 
		    Band:'VHF'
  		});

  		var station36 = new this.station_parts({ 
		    Name:'MGS',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'63', 
		    Downlink_freq:'2200 to 2400', 
		    Gain:'-', 
		    Per_gain:'21.11, 32.48', 
		    Diameter:'10', 
		    Loc:'McMurdow, Antarctica', 
		    Band:'UHF, S-Band, X-Band'
  		});

  		var station37 = new this.station_parts({ 
		    Name:'PF1',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'58', 
		    Downlink_freq:'2200 to 2400', 
		    Gain:'Unknown', 
		    Per_gain:'19.6', 
		    Diameter:'7.3', 
		    Loc:'Alaska (USN)', 
		    Band:'UHF, S-Band, X-Band'
  		});

  		var station38 = new this.station_parts({ 
		    Name:'PF2',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'65', 
		    Downlink_freq:'2200 to 2400', 
		    Gain:'Unknown', 
		    Per_gain:'23.21', 
		    Diameter:'11', 
		    Loc:'Alaska (USN)', 
		    Band:'UHF, S-Band, X-Band'
  		});

  		var station39 = new this.station_parts({ 
		    Name:'USAK01',
		    Uplink_freq:'1750 to 1850', 
		    EIRP:'69', 
		    Downlink_freq:'2200 to 2400', 
		    Gain:'Unknown', 
		    Per_gain:'23.5 to 37.7', 
		    Diameter:'13', 
		    Loc:'Alaska (USN)', 
		    Band:'UHF, S-Band, X-Band', 
  		});

  		var station40 = new this.station_parts({ 
		    Name:'USAK02',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'56', 
		    Downlink_freq:'2200 to 2400', 
		    Gain:'Unknown', 
		    Per_gain:'16', 
		    Diameter:'5', 
		    Loc:'Alaska (USN)', 
		    Band:'UHF, S-Band'
  		});

  		var station41 = new this.station_parts({ 
		    Name:  'USHI01',
		    Uplink_freq:'2025-2120', 
		    EIRP:'68 to 78', 
		    Downlink_freq:'2200 to 2400', 
		    Gain:'Unknown', 
		    Per_gain:'23.5 to 37.7', 
		    Diameter:'13', 
		    Loc:'Hawaii/Australia (USN)', 
		    Band:'UHF, S-Band, X-Band'
  		});

  		var station42 = new this.station_parts({ 
		    Name:'USHI02 (2009)',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'68', 
		    Downlink_freq:'2200 to 2400', 
		    Gain:'Unknown', 
		    Per_gain:'23.5', 
		    Diameter:'13', 
		    Loc:'Hawaii/Australia (USN)', 
		    Band:'UHF, S-Band, X-Band'
		});

		var station43 = new this.station_parts({ 
		    Name:'AUWA01',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'68', 
		    Downlink_freq:'2200 to 2400', 
		    Gain:'Unknown', 
		    Per_gain:'23.5', 
		    Diameter:'13', 
		    Loc:'Hawaii/Australia (USN)', 
		    Band:'UHF, S-Band, X-Band'
  		});

  		var station44 = new this.station_parts({ 
		    Name:'AUWA02 (2009)',
		    Uplink_freq:'7025 to 7100', 
		    EIRP:'85', 
		    Downlink_freq:'Unknown', 
		    Gain:'Unknown', 
		    Per_gain:'Unknown', 
		    Diameter:'7.3', 
		    Loc:'Hawaii/Australia (USN)', 
		    Band:'S-Band, X-Band'
	  	});

	  	var station45 = new this.station_parts({ 
		    Name:'ASF 10M',
		    Uplink_freq:'Unknown', 
		    EIRP:'63', 
		    Downlink_freq:'2200-2400', 
		    Gain:'Unknown', 
		    Per_gain:'22.59', 
		    Diameter:'10', 
		    Loc:'Alaska (ASF)', 
		    Band:'UHF, S-Band, X-Band', 
 		});

		var station46 = new this.station_parts({ 
		    Name:'ASF 11M',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'66', 
		    Downlink_freq:'220 to 2400', 
		    Gain:'Unknown', 
		    Per_gain:'23.01, 35', 
		    Diameter:'11.3', 
		    Loc:'Alaska (ASF)', 
		    Band:'UHF, S-Band, X-Band'
  		});

  		var station47 = new this.station_parts({ 
		    Name:'AGO 3',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'72.85', 
		    Downlink_freq:'2200 to 2300', 
		    Gain:'Unknown', 
		    Per_gain:'24', 
		    Diameter:'9', 
		    Loc:'Santiago, Chile', 
		    Band:'UHF, S-Band'
		});

		var station48 = new this.station_parts({ 
		    Name:'AGO 3',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'72.85', 
		    Downlink_freq:'2200 to 2300', 
		    Gain:'Unknown', 
		    Per_gain:'24', 
		    Diameter:'9', 
		    Loc:'Santiago, Chile', 
		    Band:'UHF, S-Band'
  		});

  		var station49 = new this.station_parts({ 
		    Name:'AGO 4',
		    Uplink_freq:'-', 
		    EIRP:'Unknown', 
		    Downlink_freq:'2200-2300', 
		    Gain:'Unknown', 
		    Per_gain:'Unknown', 
		    Diameter:'12', 
		    Loc:'Santiago, Chile', 
		    Band:'UHF, S-Band'
  		});

  		var station50 = new this.station_parts({ 
		    Name:'AGO 5',
		    Uplink_freq:'2025-2120', 
		    EIRP:'Unknown', 
		    Downlink_freq:'2200-2300', 
		    Gain:'Unknown', 
		    Per_gain:'Unknown', 
		    Diameter:'7', 
		    Loc:'Santiago, Chile', 
		    Band:'UHF, S-Band', 
  		});

		var station51 = new this.station_parts({ 
		    Name:'MILA',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'63', 
		    Downlink_freq:'2200 to 2300', 
		    Gain:'Unknown', 
		    Per_gain:'24', 
		    Diameter:'9', 
		    Loc:'Florida', 
		    Band:'UHF, S-Band'
  		});

  		var station52 = new this.station_parts({ 
		    Name: 'MILA',
		    Uplink_freq:'2025-2120', 
		    EIRP:'58', 
		    Downlink_freq:'2200-2300', 
		    Gain:'Unknown', 
		    Per_gain:'11', 
		    Diameter:'4.3', 
		    Loc:'Florida', 
		    Band:'UHF, S-Band'
  		});

  		var station53 = new this.station_parts({
		    Name: 'MILA',
		    Uplink_freq:'225 to 300', 
		    EIRP:'28', 
		    Downlink_freq:'225 to 300', 
		    Gain:'Unknown', 
		    Per_gain:'11', 
		    Diameter:'Quad-Helix UHF', 
		    Loc:'Florida', 
		    Band:'VHF'
  		});

  		var station54 = new this.station_parts({ 
		    Name:'MILA',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'40', 
		    Downlink_freq:'2200 to 2300', 
		    Gain:'Unknown', 
		    Per_gain:'11', 
		    Diameter:'MILA Relay System', 
		    Loc:'Florida', 
		    Band:'UHF, S-Band'
  		});

  		var station55 = new this.station_parts({ 
		    Name:'PDL',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'58', 
		    Downlink_freq:'2200 to 2300', 
		    Gain:'Unknown', 
		    Per_gain:'17', 
		    Diameter:'4.3', 
		    Loc:'Florida', 
		    Band:'UHF, S-Band'
  		});

  		var station56 = new this.station_parts({ 
		    Name:'WSC VHF-1',
		    Uplink_freq:'139.208', 
		    EIRP:'43.4', 
		    Downlink_freq:'143.625', 
		    Gain:'Unknown', 
		    Per_gain:'Unknown', 
		    Diameter:'Yagi', 
		    Loc:'White Sands, New Mexico', 
		    Band:'VHF'
  		});

		var station57 = new this.station_parts({ 
		    Name:'WSC VHF-2',
		    Uplink_freq:'130.167', 
		    EIRP:'45.4', 
		    Downlink_freq:'121.75', 
		    Gain:'Unknown', 
		    Per_gain:'Unknown', 
		    Diameter:'Yagi', 
		    Loc:'White Sands, New Mexico', 
		    Band:'VHF'
  		});

  		var station58 = new this.station_parts({ 
		    Name:'WS1',
		    Uplink_freq:'2025-2120', 
		    EIRP:'80', 
		    Downlink_freq:'2200-2300', 
		    Gain:'Unknown', 
		    Per_gain:'29', 
		    Diameter:'18', 
		    Loc:'White Sands, New Mexico', 
		    Band:'UHF, S-Band, Ka-Band'
  		});

  		var station59 = new this.station_parts({ 
		    Name:'HBK',
		    Uplink_freq:'2025-2100', 
		    EIRP:'66', 
		    Downlink_freq:'2200 to 2300', 
		    Gain:'-', 
		    Per_gain:'22.4, 31.0, 19.0', 
		    Diameter:'10', 
		    Loc:'Hartebeesthoek South Africa', 
		    Band:'UHF, S-Band, Ka-Band'
  		});

  		var station60 = new this.station_parts({ 
		    Name:'KIR 13M',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'70', 
		    Downlink_freq:'2200 to 2300', 
		    Gain:'Unknown', 
		    Per_gain:'23', 
		    Diameter:'13', 
		    Loc:'Kiruna, Sweden', 
		    Band:'UHF, S-Band'
  		});

  		var station61 = new this.station_parts({ 
		    Name:'WAL 15M',
		    Uplink_freq:'2025 to 2120', 
		    EIRP:'78', 
		    Downlink_freq:'2200 to 2300', 
		    Gain:'Unknown', 
		    Per_gain:'26.7', 
		    Diameter:'15', 
		    Loc:'Weilheim, Germany', 
		    Band:'UHF, S-Band'
  		});

  		station1.save();
  		station2.save();
  		station3.save();
  		station4.save();
  		station5.save();
  		station6.save();
  		station7.save();
  		station8.save();
  		station9.save();
  		station10.save();
  		station11.save();
  		station12.save();
  		station13.save();
  		station14.save();
  		station15.save();
  		station16.save();
  		station17.save();
  		station18.save();
  		station19.save();
  		station20.save();
  		station21.save();
  		station22.save();
  		station23.save();
  		station24.save();
  		station25.save();
  		station26.save();
  		station27.save();
  		station28.save();
  		station29.save();
  		station30.save();
  		station31.save();
  		station32.save();
  		station33.save();
  		station34.save();
  		station35.save();
  		station36.save();
  		station37.save();
  		station38.save();
  		station39.save();
  		station40.save();
  		station41.save();
  		station42.save();
  		station43.save();
  		station44.save();
  		station45.save();
  		station46.save();
  		station47.save();
  		station48.save();
  		station49.save();
  		station50.save();
  		station51.save();
  		station52.save();
  		station53.save();
  		station54.save();
  		station55.save();
  		station56.save();
  		station57.save();
  		station58.save();
  		station59.save();
  		station60.save();
  		station61.save();
  	}


	this.getPart = function(query,res) {
		this.station_parts.find(query,function(error,output) {
			res.json(output);
		});
	}

	this.putPart = function(req, res) {
        var newpart = new this.station_parts({
			Name: req.body.Name,
		    Uplink_freq: req.body.Uplink_freq, 
		    EIRP: req.body.EIRP, 
		    Downlink_freq: req.body.Downlink_freq, 
		    Gain: req.body.Gain, 
		    Per_gain: req.body.Per_gain, 
		    Diameter: req.body.Diameter, 
		    Loc: req.body.Loc, 
		    Band: req.body.Band
        });
        newpart.save(function (error, output) {
            res.json(output);
        });
    };

    this.updatePart = function(req, res) {
        this.station_parts.update(
        {
            _id: req.params._id
        }, 
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
        },
        function(error, output) {
            res.json(output);
        });
    };

	this.removePart = function(req, res) {
    	this.station_parts.remove({
            _id: req.params._id
        }, function(err, output) {
            if (err)
                res.send(output);
            res.json({ message: 'Successfully deleted' });
        });
	};
}

module.exports = StationFactory;

  