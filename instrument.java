package instruments;
//class for an instrument


import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;

import org.apache.poi.ss.usermodel.Cell;

public class instrument extends part{


	private String data, therm, pixF, obj,fovF, measF, measurement, massF, use, res;
	private double fov,pixel, temp_l, temp_h;

	private int hits;

	//constructor with values, used when reading information in from spreadsheet in lookForAntenna
	public instrument(String t, String n,  String d,  String th, String mn, String hyp, String oj, String fF, String trl, String meF, String vF, String vD, String pF, String mea, String mF, String u, String r, double m, double p, double v, int h, double pix, String piF, double tL, double tH){
		super(t, n, mn, trl, hyp, m, mF, p, pF, v, vF,vD);

		measF=meF;
		pixF=piF;
		data=d;
		therm=th;
		obj=oj;
		fovF=fF;
		measurement=mea;
		massF=mF;
		use=u;
		res=r;
		hits=h;
		pixel=pix;
		temp_l=tL;
		temp_h=tH;
	}
	
	public boolean equals(instrument other){
		return (this.getName().equals(other.getName()));
	}
	
	//counts the number of matches
	public void hit(){
		hits++;
	}

	//used in the narrowing options to remove anything that contains the field k from the matchList
	public boolean remove(String k){
		return (this.getType().indexOf(k)==-1&& this.getName().indexOf(k)==-1&& this.getManufacturer().indexOf(k)==-1&& this.getHeritage().indexOf(k)==-1&& measurement.indexOf(k)==-1&& use.indexOf(k)==-1);
	}
	
	//display for all the values contained in instrument
	public JPanel information(){
		
		JPanel info=new JPanel();
		
		boolean colorRed=false;
		String toReturn=super.getInformation();
		
		toReturn+="Measurement: "+measurement+". "+measF;
		if(!measF.equals("")){
			toReturn+=measF+"<br>";
		}
		else
			toReturn+="<br>";
		toReturn+="Resolution: "+res+"<br>";
		toReturn+="Pixel: "+pixF;
		if(!pixF.contains("x")){
			toReturn+=" across<br>";
		}else{
			toReturn+="<br>";
		}
		toReturn+="Scientific Objective: "+obj+"<br>";
		toReturn+="Site requirements/Venue: "+use+"<br>";
		if(fov==0&&fovF.equals("")){
			colorRed=true;
			toReturn+="No FOV information<br>";
		}else if(fov==0&&!fovF.equals("")){
			colorRed=true;
			toReturn+="FOV: "+fovF+"<br>";;
		}else{
			toReturn+="FOV: "+fov+" degrees. "+fovF+"<br>";
		}
		if(temp_l==-300&&temp_h==-300){
			toReturn+="Temperature: "+therm+"<br>";
		}else{
			toReturn+="Temperature: "+temp_l+" C to "+temp_h+" C. "+ therm+"<br>";
		}
		toReturn+="Datarate and volume: "+data+"<br>";

		JLabel iLabel=new JLabel(toReturn);
		iLabel.setBounds(0,0,500,500);
		info.add(iLabel);

		return info;
	}
}
