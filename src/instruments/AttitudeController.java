package instruments;
//class for an attitude controller part


import javax.swing.JLabel;
import javax.swing.JPanel;

public class AttitudeController extends part{
	private String AnglePrecision_further,	Torque_FOV,	obj, Site_req,	dat;	
	private double ang;
	
	//constructor with values, used when reading information in from spreadsheet in possibleInstrument
	public AttitudeController(String Cat, String Ty, String Na, String Man, String hyp, String trl, String 	MF,	String PF,	String VDim, String VF, String Angf,	String T_FOV,	String o, String Sreq,	String d, double m, double v, double p, double ap){
		super(Cat, Na, Man, trl, hyp, m, MF, p, PF, v,VF, VDim);
		AnglePrecision_further=Angf;
		Torque_FOV=T_FOV;
		obj=o;
		Site_req=Sreq;
		dat=d;	
		ang=ap;	
	}
	
	//accesor methods to make comparisons with the calculated ang (from 'attitude' class) used to compare instruments ang
	//to calculated angle to see if it fits requirements
	public double getDeg(){
		return ang;
	}

	//display for all the values contained in antenna
	public JPanel information(){

		JPanel info=new JPanel();

		String toReturn=super.getInformation();
		toReturn+="Torque/FOV: "+Torque_FOV+"<br>";
		toReturn+="Angle Precision: "+ang+" "+"AnglePrecision_further"+"<br>";
		toReturn+="Scientific Objective: "+obj+"<br>";
		toReturn+="Datarate and volume: "+dat+"<br>";
		
		JLabel iLabel=new JLabel(toReturn);
		iLabel.setBounds(0,0,500,500);
		info.add(iLabel);

		return info;
	}

	public boolean equals(AttitudeController c){
		return c.getName().equals(this.getName());
	}
}
