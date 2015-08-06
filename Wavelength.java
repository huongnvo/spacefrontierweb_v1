package instruments;
//wavelength class creates a wavelength or measurement with a name and match fields
//parameters checked on the left side of the instruments page(elements, compounds etc) are matched to the fields in a wavelength
//if the parameter is contained in fields for a wavelength , the search is filtered to instruments that can measure that wavelength.



public class Wavelength {

	private String name;
	private String fields;
	
	
	public Wavelength(String n, String f){
	
		name=n;
		fields=f;
	}
	
	public String getName(){
		
		return name;
	}
	
	//looks for the parameter f in a wavelengths field in order to
	//check whether or not the specific wavelength should be included in instrument search
	public boolean containsField(String f){
		
		return fields.indexOf(f)!=-1;
	}
	
	public boolean equals(Wavelength w){
		return name==w.name;
	}
}
