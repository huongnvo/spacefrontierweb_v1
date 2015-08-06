package instruments;
//list of compound parameters on left side of instruments page
//just a list of check boxes 

import java.awt.Color;
import java.awt.event.*;
import java.util.ArrayList;

import javax.swing.*;

public class Compounds extends SearchParameter{

	public Compounds(){
		
		this.setSize(150, 340);
		this.setLayout(null);
			
		String []compounds={"pyroxene",	"olivine", "hematite", "feldspar", "Ti-bearing", "sulfates and sulfides", "oxides", "nitrates",	"carbonates", "C-H chains",	"clay",	"phyllosilicate","H2O",	"CO2","CH4","NH3","O3","O2","N2O","HNO3","CO","SO2","H2S"};
		int x=0;
		int y=0;
		for(int i=0; i<compounds.length; i++){
			
			JCheckBox a=new JCheckBox(compounds[i]);
			a.setName(compounds[i]);
			a.setBounds(x,y,150,20);
			a.addActionListener(this);
			this.add(a);
			y+=20;
		}
		this.setVisible(true);
	}
}
