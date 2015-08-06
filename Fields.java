package instruments;
//magnetic fields component of the left part of the instrument page showing all the search parameters
//just a check box 

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

import javax.swing.*;
public class Fields extends SearchParameter{
	
	public Fields(){
		this.setLayout(null);
		this.setSize(105,20);
		
		JCheckBox fields=new JCheckBox("Magnetic Fields");
		this.add(fields);
		fields.setBounds(0,0,150,20);
		fields.addActionListener(this);
		fields.setName("magnetic");
	}
}
