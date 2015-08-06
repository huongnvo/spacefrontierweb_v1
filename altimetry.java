package instruments;
//altimetry component of the left part of the instrument page showing all the search parameters
//just a check box 

import java.awt.event.*;
import java.util.*;
import javax.swing.*;

public class altimetry extends SearchParameter{
	
	public altimetry(){
		
		this.setLayout(null);
		this.setSize(100,20);
		
		JCheckBox altimetry=new JCheckBox("altimetry");
		altimetry.setName("altimetry");
		altimetry.setBounds(0,0,100,20);
		altimetry.addActionListener(this);
		this.add(altimetry);
	}
}
