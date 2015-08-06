package instruments;


import javax.swing.JLabel;
import javax.swing.JPanel;

public class propulsion extends part{

	private String therm, SImp_Further,	DV_Further,	obj;										
	private double SI, DV;

	public propulsion(String T, String N, String man, String l, String trl, String 	MF,	String PF, String VDim, String VF, 	String DVF,	String ob, String th, double i, double m, double p, double  vl,double dV){

		super(T, N, man, trl, l, m, MF, p, PF, vl, VF,VDim);
		
		therm=th;
	//	SImp_Further=SIF;
		DV_Further=DVF;
		obj=ob;
		//		comm_life=c_life;										
		SI=i;
		DV=dV;
	}

	public boolean equals(propulsion i){
		return(this.getName()==i.getName());
	}
	
	public double getDV(){
		return DV;
	}
	
	public double getImpulse(){
		return SI;
	}

	public boolean remove(String k){
		return (this.getType().indexOf(k)==-1&& this.getName().indexOf(k)==-1);
	}

	public JPanel information(){

		JPanel info=new JPanel();
		String toReturn=super.getInformation();
		//		String[]infoString = {type, name, manufac, hyperlink, TRL, massF, powF, volF, volDim, measurement, measF, res, obj, use, fovF, mode, rad, therm, data, opp, vibe};
		//		double []  infoInt={mass, pow, vol, fov,pixel, temp_l, temp_h};


		if(!obj.equals(""))
			toReturn+="Scientific Objective: "+obj+"<br>";

		if(!therm.equals(""))
			toReturn+="Temperature: "+ therm+"<br>";
		
		if(SI==0)
			toReturn+="Impulse: "+SImp_Further+"<br>";
		else if(SI!=0)
			toReturn+="Impulse: "+SI+" seconds. "+SImp_Further+"<br>";

		if(DV==0&&!DV_Further.equals("")){
			toReturn="<html>WARNING: NO Dv ESTIMATED BY MANUFACTRER TO COMPARE CALCULATED Dv TO<br>"+toReturn;
			toReturn+="DV: "+DV_Further+"<br>";
		}
		else if(DV!=0&&!DV_Further.equals(""))
			toReturn+="DV: "+DV+" km/second. "+DV_Further+"<br>";
		else
			toReturn="<html>WARNING: NO Dv ESTIMATED BY MANUFACTRER TO COMPARE CALCULATED Dv TO<br>"+toReturn;

		JLabel iLabel=new JLabel(toReturn);
		iLabel.setBounds(0,0,500,500);
		info.add(iLabel);

		return info;
	}
}
