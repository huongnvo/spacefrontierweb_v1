package instruments;
//particle detection component of the left part of the instrument page showing all the search parameters
//list of check boxes


import java.awt.event.*;
import java.util.ArrayList;

import javax.swing.*;

public class Particles extends SearchParameter{

	public Particles(){
		
		this.setSize(150, 100);
		this.setLayout(null);
		
		String []particles={"ions","electrons","neutrons","decay particles"};
		
		int x=0;
		int y=0;
		
		for(int i=0; i<particles.length; i++){

			JCheckBox a=new JCheckBox(particles[i]);
			a.setName(" "+particles[i]+",");
			a.setBounds(x,y,150,20);
			a.addActionListener(this);
			this.add(a);
			y+=20;
		}
		
		this.setVisible(true);
	}
}
