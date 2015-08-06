package instruments;


import javax.swing.JLabel;
import javax.swing.JPanel;

public class cdhs extends part{
	private String	Processing_Further,	Memory,		Obj;														
	private double MIPS, MHz, t_l, t_h, mem;
	
	//constructor with values, used when reading information in from spreadsheet in matchAntenna
	public cdhs(String Type,	String Name, String Manufacturer,	String Link,	String Heritage,	String Mass_Further,	String	Power_Further, String Proportions,	String Volume_Further,	String Processing_Further,	String Memory,		String Obj,	double Mass, double Power, double Volume, double MIPS, double MHz, double t_l, double t_h, double mem){
		super(Type, Name, Manufacturer, Heritage, Link, Mass, Mass_Further, Power, Power_Further, Volume, Volume_Further, Proportions);
		
		this.Processing_Further=Processing_Further;	
		this.Memory=Memory;
		this.Obj=Obj;														
		this.MIPS=MIPS;
		this.MHz=MHz;
		this.t_l=t_l;
		this.t_h=t_h;
		this.mem=mem;
	}
	
	//display for all the values contained in antenna
	public JPanel information(){

		JPanel info=new JPanel();
		String toReturn=super.getInformation();

		if(MIPS!=0)
			toReturn+="MIPS: "+MIPS+"<br>";
		if(MHz!=0)
			toReturn+="MHz: "+MHz+"<br>";
		if(!Memory.equals(""))
			toReturn+="Memory: "+Memory+"<br>";
		if(!Obj.equals(""))
			toReturn+="Scientific Objectives: "+Obj+"<br>";
		if(!Processing_Further.equals(""))
			toReturn+="Processing: "+Processing_Further+"<br>";
		if(t_l!=-300&&t_h!=-300){
			toReturn+="Temperature: "+t_l+" C to "+t_h+" C. <br>";
		}

		JLabel iLabel=new JLabel(toReturn);
		iLabel.setBounds(0,0,500,500);
		info.add(iLabel);

		return info;
	}
}
