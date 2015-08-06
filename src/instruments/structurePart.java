package instruments;
//class for a structre part- bus, thermal control, deployer


import javax.swing.JLabel;
import javax.swing.JPanel;

public class structurePart extends part{
	
	private String Obj;
	
	//constructor with values, used when reading information in from spreadsheet in possibleInstrument
	public structurePart(String Type,	String Name,	String Manufacturer, String link,	String Heritage,	String Mass_Further,	String Power_Further,	String VolDim,	String Volume_Further, String Obj, double Mass, double Power, double Vol){
	
		super(Type, Name, Manufacturer, Heritage, link, Mass, Mass_Further, Power, Power_Further, Vol,Volume_Further, VolDim);
		
		this.Obj=Obj;
	}

	//display for all the values contained in antenna
	public JPanel information(){

		JPanel info=new JPanel();
		String toReturn=super.getInformation();
		
		if(!Obj.equals("")){
			toReturn+="Scientific Objective: "+ Obj+"<br>";
		}

		JLabel iLabel=new JLabel(toReturn);
		iLabel.setBounds(0,0,500,500);
		info.add(iLabel);

		return info;
	}
}
