package instruments;
//class for an antenna/radio part


import javax.swing.JLabel;
import javax.swing.JPanel;


public class groundStation extends part{
	private	String EIRP_Further, Uplink,	Downlink,	Gain,	Diameter,	Location,	Band,	Coordinates;																
	private double EIRP, g_T;
	
	// initial copy of antenna, empty, used in constructor of gooey_4	
	public groundStation(){
		
		super("", "", "", "", "", 0, "", 0, "", 0, "","");
		
		EIRP_Further="";
		Uplink="";
		Downlink="";
		Gain="";
		Diameter="";
		Location="";
		Band="";
		Coordinates="";																
		EIRP=0;
		g_T=0;
	}
	
	//constructor with values, used when reading information in from spreadsheet in lookForStation
	public groundStation(String N,	String eF, String U,	String D,	String G,	String Di,	String L,	String B, String C,	double E, double g){
		super("", N, "", "", "", 0, "", 0, "", 0, "","");
		EIRP_Further=eF;
		Uplink=U;
		Downlink=D;
		Gain=G;
		Diameter=Di;
		Location=L;
		Band=B;
		Coordinates=C;																
		EIRP=E;
		g_T=g;
	}
	
	//uncomment if copy constructor is necessary
/*	public groundStation(groundStation other){
		super("", other.Name, "", "", "", 0, "", 0, "", 0, "","");

		Uplink=other.Uplink;
		Downlink=other.Downlink;
		Gain=other.Gain;
		Diameter=other.Diameter;
		Location=other.Location;
		Band=other.Band;
		Coordinates=other.Coordinates;																
		EIRP=other.EIRP;
		g_T=other.g_T;
	}*/
	
	//accesor methods to make calculations for selected instrument in gooey_4
	public double getEIRP(){
		return EIRP;
	}
	public double getGT(){
		return g_T;
	}
	
	//display for all the values contained in antenna
	public JPanel information(){

		JPanel info=new JPanel();
		String toReturn="<html>";
		//	String[]infoString = {type, name, manufac, hyperlink, TRL, massF, powF, volF, volDim, measurement, measF, res, obj, use, fovF, mode, rad, therm, data, opp, vibe};
		//	double []  infoInt={mass, pow, vol, fov,pixel, temp_l, temp_h};

		if(!this.getName().equals(""))
			toReturn+="Name: "+this.getName()+"<br>";
		if(!Uplink.equals(""))
			toReturn+="Uplink: "+Uplink+" MHz"+"<br>";
		if(!Downlink.equals(""))
			toReturn+="Downlink: "+Downlink+" MHz"+"<br>";
		if(!Gain.equals(""))
			toReturn+="Gain: "+Gain+" dBI"+"<br>";
		if(!Diameter.equals(""))
			toReturn+="Diameter: "+Diameter+" m"+"<br>";
		if(!Location.equals(""))		
			toReturn+="Location: "+Location+"<br>";
		if(!Band.equals(""))				
			toReturn+="Band: "+Band+"<br>";
		if(!Coordinates.equals(""))						
			toReturn+="Coordinates: "+Coordinates+"<br>";
		if(EIRP!=0)						
			toReturn+="EIRP: "+EIRP+" dBW"+"<br>";
		else
			toReturn="<html> WARINING: NO REGISTERED EIRP VALUE, CALCULATIONS WILL BE INACCURATE<br>"+toReturn;
		if(g_T!=0)						
			toReturn+="G/T: "+g_T+" dB/K<br>";
		else
			toReturn="<html> WARINING: NO REGISTERED G/T VALUE, CALCULATIONS WILL BE INACCURATE<br>"+toReturn;

		JLabel iLabel=new JLabel(toReturn);
		iLabel.setBounds(0,0,500,500);
		info.add(iLabel);

		return info;
	}
}
