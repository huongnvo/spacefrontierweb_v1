package instruments;
//class for a power part- solar panels, batteries, and eps


import javax.swing.JLabel;
import javax.swing.JPanel;

public class power extends part{
	private String  obj, therm, energy_storage, Life,Efficiency;	
	private double t_l, t_h, config, wings;

	//constructor with values, used when reading information in from spreadsheet in possibleInstrument
	public power(String PS,	String N,	String M,	String l,	String es, String trl,	String MF,	String PF,	String VDim,	String VF, String Effy,	String ob, String th, double con, double b, double Ma, double Pow, double lo, double h, double v){
		
		super(PS, N, M, trl, l, Ma, MF, Pow, PF, v, VF,VDim);
		
		Efficiency=Effy;
	//	Life=life;
		obj=ob;
	//	radiation=rad;
		therm=th;	
		t_l=lo;
		t_h=h;
		config=con;
		wings=b;
		energy_storage=es;
	}

	
//uncomment if an equal to check is necessary
/*	public boolean equals(propulsion i){
		return(this.getName()==i.getName());
	}*/

	//display for all the values contained in antenna
	public JPanel information(){

		JPanel info=new JPanel();
		String toReturn=super.getInformation();
		
		if(!obj.equals(""))
			toReturn+="Scientific Objective: "+obj+"<br>";
		if(t_l==-300&&t_h==-300){
			toReturn+="Temperature: "+therm+"<br>";
		}else{
			toReturn+="Temperature: "+t_l+" C to "+t_h+" C. "+ therm+"<br>";
		}
		
		if(!Efficiency.equals(""))
			toReturn+="Efficiency: "+Efficiency+"<br>";
		
		JLabel iLabel=new JLabel(toReturn);
		iLabel.setBounds(0,0,500,500);
		info.add(iLabel);

		return info;
	}
}
