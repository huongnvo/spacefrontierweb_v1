package instruments;
//superclass for all parts- they all share type, name, manufacturer, heritage, link, m/p/v attributes

import javax.swing.JPanel;

public abstract class part {

	private String Type;
	private String Name;
	private String Manufacturer;
	private String Heritage;
	private String Link;
	private double Mass;
	private String MassFurther;
	private double Power;
	private String PowerFurther;
	private double Volume;
	private String VolumeFurther;
	private String VolDim;

	public part(String t, String n, String man, String her, String l, double m, String mF, double p, String pF, double v, String vF,String vDim){
		Type=t;
		Name=n;
		Manufacturer=man;
		Heritage=her;
		Link=l;
		Mass=m;
		MassFurther=mF;
		Power=p;
		PowerFurther=pF;
		Volume=v;
		VolumeFurther=vF;
		VolDim=vDim;
	}
	
	//accessors
	public String getType(){
		return Type;
	}
	public String getName(){
		return Name;
	}
	public String getManufacturer(){
		return Manufacturer;
	}
	public String getHeritage(){
		return Heritage;
	}
	public String getLink(){
		return Link;
	}
	public double getMass(){
		return Mass;
	}
	public String getMassFurther(){
		return MassFurther;
	}
	public double getPower(){
		return Power;
	}
	public String getPowerFurther(){
		return PowerFurther;
	}
	public double getVolume(){
		return Volume;
	}
	public String getVolumeFurther(){
		return VolumeFurther;
	}
	public String getVolDim(){
		return VolDim;
	}

	//string with all information contained in this superclass
	public String getInformation(){
		
		String toReturn="<html>";
	
		if(!this.getType().equals(""))
			toReturn+="Type: "+this.getType()+"<br>";
		if(!this.getName().equals(""))
			toReturn+="Name: "+getName()+"<br>";
		if(!this.getManufacturer().equals(""))
			toReturn+="Manufacturer: "+this.getManufacturer()+"<br>";
		if(!this.getLink().equals(""))
			toReturn+="Hyperlink: "+this.getLink()+"<br>";
		if(!this.getHeritage().equals(""))
			toReturn+="Heritage: "+this.getHeritage()+"<br>";

		if(this.getMass()==0&&!this.getMassFurther().equals(""))
			toReturn+="Mass: "+this.getMassFurther()+"<br>";
		else if(this.getMass()!=0&&!this.getMassFurther().equals(""))
			toReturn+="Mass: "+this.getMass()+" g. "+this.getMassFurther()+"<br>";

		if(this.getPower()==0&&!this.getPowerFurther().equals(""))
			toReturn+="Power: "+this.getPowerFurther()+"<br>";
		else if(this.getPower()!=0&&!this.getPowerFurther().equals(""))
			toReturn+="Power: "+this.getPower()+" W. "+this.getPowerFurther()+"<br>";

		if(this.getVolume()==0&&!this.getVolumeFurther().equals(""))
			toReturn+="Volume: "+this.getVolumeFurther()+". "+this.getVolDim()+"<br>";
		else if(this.getVolume()!=0&&this.getVolumeFurther().equals(""))
			toReturn+="Volume: "+this.getVolume()+" U. "+this.getVolDim()+"<br>";
		else if(this.getVolume()!=0&&!this.getVolumeFurther().equals("")&&!this.getVolDim().equals(""))
			toReturn+="Volume: "+this.getVolume()+" U. "+this.getVolumeFurther()+" "+this.getVolDim()+" mm<br>";
		else if(this.getVolume()==0&&this.getVolumeFurther().equals("")&&!this.getVolDim().equals(""))
			toReturn+="Volume: "+this.getVolDim()+" mm<br>";
		
		return toReturn;
	}
	
	//all parts must return a jPanel displaying their information
	abstract JPanel information();
}
