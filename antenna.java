package instruments;
//class for an antenna/radio part


import javax.swing.JLabel;
import javax.swing.JPanel;

public class antenna extends part{

	private String Frequency,	Data,	tPow_Further,	Beamwidth,	Gain_Further, therm;
	private double recsens, tpow,gain;
	
	// initial copy of antenna, empty, used in constructor of gooey_4
	public antenna(){
		super("", "", "", "", "", 0, "", 0, "", 0, "","");
		Frequency="";
		gain=0;
		tpow=0;
		Frequency="";
		Data="";
		tPow_Further="";
		Beamwidth="";
		Gain_Further="";
		therm="";
		recsens=0;

	}

	//constructor with values, used when reading information in from spreadsheet in lookForAntenna
	public antenna(String c, String i,	String m, String l, String trl,String	MF,String	PF,	String VDim,	String VF,	String Freq,	String D,	String tPF,	String B,	String GF, String th,	double mss, double pw, double v, double rsens, double tp, double g){
		super(c, i, m, trl, l, mss, MF, pw, PF, v, VF,VDim);

		Frequency=Freq;
		Data=D;
		Beamwidth=B;
		Gain_Further=GF;
		gain=g;
		
		therm=th;
		recsens=rsens;
		tpow=tp;
		tPow_Further=tPF;
	}

	//uncomment if copy constructor is necessary
/*public antenna(antenna other){
		super(other.getType(),other.getName(), other.getManufacturer(), other.getHeritage(), other.getLink(), other.getMass(), other.getMassFurther(), other.getPower(), other.getPowerFurther(), other.getVolume(), other.getVolumeFurther(),other.getVolDim());

		Frequency=other.Frequency;
		Data=other.Data;
		Beamwidth=other.Beamwidth;
		Gain_Further=other.Gain_Further;
		gain=other.gain;
		therm=other.therm;
		recsens=other.recsens;
		tPow_Further=other.tPow_Further;
		tpow=other.tpow;
	}*/
	
	
	//accesor methods to make calculations for selected instrument in gooey_4
	public double getGain(){
		return gain;
	}
	public double getTransPower(){
		return tpow;
	}
	
	
	//display for all the values contained in antenna
	public JPanel information(){

		JPanel info=new JPanel();
		String toReturn=super.getInformation();

		if(!Data.equals(""))
			toReturn+="Datarate and volume: "+Data+"<br>";
		if(tpow!=0&&tPow_Further.equals(""))
			toReturn+="Transmit Power: "+tpow+"<br>";
		else if(tpow==0&&!tPow_Further.equals("")){

			if(!this.getType().contains("Antenna"))
				toReturn="<html> WARNING: NO REGISTERED VALUE FOR TRANSMIT POWER, CALCULATIONS WILL BE INACCURATE <br>"+toReturn;

			toReturn+="Transmit Power: "+tPow_Further+"<br>";
		}
		else if(!this.getType().contains("Antenna"))
			toReturn="<html> WARINING: NO REGISTERED VALUE FOR TRANSMIT POWER, CALCULATIONS WILL BE INACCURATE <br>"+toReturn;

		if(recsens!=0)
			toReturn+="Receiver Sensitivity: "+recsens+"<br>";

		if(gain!=0&&Gain_Further.equals(""))
			toReturn+="Gain: "+tpow+"<br>";
		else if(gain==0&&!Gain_Further.equals("")){
			if(this.getType().contains("Antenna"))
				toReturn="<html> WARNING: NO REGISTERED VALUE FOR GAIN, CALCULATIONS WILL BE INACCURATE <br>"+toReturn;
			toReturn+="Gain: "+Gain_Further+"<br>";
		}else
			if(this.getType().contains("Antenna"))
				toReturn="<html> WARNING: NO REGISTERED VALUE FOR GAIN, CALCULATIONS WILL BE INACCURATE <br>"+toReturn;

		//toReturn+="Gain: "+gain+" "+Gain_Further+"<br>";

		if(!Beamwidth.equals(""))
			toReturn+="Beamwidth: "+Beamwidth+"<br>";


		JLabel iLabel=new JLabel(toReturn);
		
		iLabel.setBounds(0,0,500,500);
		info.add(iLabel);

		return info;
	}
}
