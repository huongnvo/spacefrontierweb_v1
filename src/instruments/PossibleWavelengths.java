package instruments;


import java.util.*;
public class PossibleWavelengths {
	
	private ArrayList<Wavelength>matchWavelengths;
	
	public PossibleWavelengths(ArrayList<String>keywords){
		
		ArrayList<Wavelength>allWavelengths;
		allWavelengths=new ArrayList<Wavelength>();
		
		allWavelengths.add(new Wavelength("gamma ray", "elemental abundances, distribution, identification of radioactive materials O, Mg, Si, K, Ti, Fe, Th, U,"));
		allWavelengths.add(new Wavelength("x-ray", "Surface and subsurface (depth of 1 mm) elemental abundances, distribution Na, Mg, Al, Si, S, Ca, K, Ti, Fe, "));
		allWavelengths.add(new Wavelength("UV", "atmosphere abundance, species, ionizating radiation H, He, O, Na, Ar, Ne, Mg, Fe, Si, S, Al H2, CO2, OH,"));
		allWavelengths.add(new Wavelength("visible","Flora/fauna identification, rock and soil mineralogy, color, texture, photogeology, photobotany K, O2, N2+, Ca, Ca+, Li, hematite, feldspar, Ti-bearing, some sulfates and sulfides, some oxides, nitrates, and carbonates, H20 (albedo),"));
		allWavelengths.add(new Wavelength("near-IR", "Surface mafic mineral abundances, volatile/bound volatile abundances H2O, CO2, O2, C-H chains, pyroxene, olivine, hematite, Ti-bearing, clay, phyllosilicate, sulfates, sulfides, oxides, nitrates, and carbonates,"));
		allWavelengths.add(new Wavelength("short-IR", "rock, soil, atmosphere content, water temperature, snow, ice identification H2O, CO2, CH4, NH3, N2O, C-H chains, CO, H2S, pyroxene, olivine, hematite, clay, phyllosilicate, sulfates, sulfides, oxides, nitrates, and carbonates,"));
		allWavelengths.add(new Wavelength("mid-IR", "rock, soil, atmosphere content, water temperature, snow, ice identification H2O, CO2, CH4, O3, N2O, HNO3, C-H chains, SO2, pyroxene, olivine, feldspar, clay, phyllosilicate, sulfates, sulfides , oxides, nitrates, and carbonates,"));
		allWavelengths.add(new Wavelength("long-IR","Rock, soil, ice, water, and mineral identification H2O, O2,"));
		allWavelengths.add(new Wavelength("far-IR","Rock, soil, ice, water, and mineral identification H2O, O2,"));
		allWavelengths.add(new Wavelength("microwave","atmosphere characterization (species, abundance, density, moisture), water/ice/snow cover (passive), land/sea surface structure, topography (active),"));
		allWavelengths.add(new Wavelength("radio","altimetry, determination of speed/direction of objects, atmosphere/weather detection,"));
		allWavelengths.add(new Wavelength("magnetic field","magnetic field amplitude/direction, nT"));
		allWavelengths.add(new Wavelength("particle detection", "energetic particle detection/identification of solar wind, radiation belts, magnetic field,"));
		allWavelengths.add(new Wavelength("electron", "electrons,"));
		allWavelengths.add(new Wavelength("ion", " ions,"));
		allWavelengths.add(new Wavelength("neutral", "neutrons, neutral"));
		allWavelengths.add(new Wavelength("heavy", "decay particles,"));
		matchWavelengths=new ArrayList<Wavelength>();
		
		Wavelength w;
		String k;
		for(int i=0; i<allWavelengths.size(); i++){
			
			w=allWavelengths.get(i);
			
			for(int j=0; j< keywords.size(); j++){
				k=keywords.get(j);
				if((w.containsField(k)||w.getName().equals(k))&&!matchWavelengths.contains(w))
					matchWavelengths.add(w);
			} 
		}
	}
	
	public ArrayList<Wavelength>getMatches(){
		
		return matchWavelengths;
	} 
	 
	public ArrayList<String>getMatchNames(){
		
		ArrayList<String>names=new ArrayList<String>();
		
		for(int i=0; i<matchWavelengths.size(); i++){
			names.add(matchWavelengths.get(i).getName());
		}
		
		return names;
	}
}
