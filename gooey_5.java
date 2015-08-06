package instruments;
//reads through spreadsheet to find possible matches


import javax.swing.*;
import javax.swing.event.*;
import javax.swing.table.DefaultTableModel;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.*;


public class gooey_5 extends JFrame implements ActionListener, ListSelectionListener{

	private power_search batt_s;
	private power_search sol_s;
	private power_search pcu_s;
	private JRadioButton single;
	private JRadioButton Both,Triple;   
	private ButtonGroup type;

	private JRadioButton one;
	private JRadioButton two;
	private ButtonGroup numSides;

	private JList spanel;
	private DefaultListModel sModel;
	private JList batt;
	private DefaultListModel bModel;
	private JList PCU;
	private DefaultListModel pModel;
	private JComboBox vol;
	private JComboBox config;
	private JScrollPane battInfo;
	private JScrollPane solInfo;
	private JScrollPane pcuInfo;
	private running_chart a;
	
	public gooey_5(double totPower, running_chart a){
		this.a=a;
		battInfo=new JScrollPane();
		pcuInfo=new JScrollPane();
		solInfo=new JScrollPane();
		this.setSize(1365,725);
		this.setDefaultCloseOperation(EXIT_ON_CLOSE);
		this.setLayout(null);

		JLabel spanels=new JLabel("<html>DIRECTIONS: Begin By selecting the Volume of your cubesat, then specify the type of solar panels you intend to use. Hit search to view your results for power instruments.</html>");
		spanels.setBounds( 20,5,1000,40);
		spanels.setForeground(Color.BLUE);
		this.add(spanels);

		String[]volumes={"1","2","3","6"};
		DefaultComboBoxModel v=new DefaultComboBoxModel(volumes);

		JLabel volLab=new JLabel("Cubesat Volume: ");
		volLab.setBounds(50,50,100,20);
		vol=new JComboBox(v);
		vol.setBounds(150,50,100,20);
		vol.addActionListener(this);
		vol.setActionCommand("vol");
		this.add(volLab);
		this.add(vol);

		JLabel sol=new JLabel("<html>SOLAR PANELS<html>");
		sol.setBounds(300,45,200,20);
		this.add(sol);
		sModel=new DefaultListModel();
		spanel=new JList(sModel);
		JScrollPane sPane=new JScrollPane();
		sPane.setViewportView(spanel);
		sol.setForeground(Color.RED);
		JLabel bat=new JLabel("BATTERIES");
		bat.setBounds(300,254,200,20);
		this.add(bat);
		bat.setForeground(Color.RED);
		JScrollPane bPane=new JScrollPane();
		bModel=new DefaultListModel();
		batt=new JList(bModel);
		bPane.setViewportView(batt);

		JLabel eps=new JLabel("EPS");
		eps.setBounds(300,464,100,20);
		this.add(eps);
		eps.setForeground(Color.RED);
		JScrollPane pPane=new JScrollPane();
		pModel=new DefaultListModel();
		PCU=new JList(pModel);
		pPane.setViewportView(PCU);

		sPane.setBounds(500, 60, 300, 200);

		solInfo.setBounds(300,60,200,200);
		this.add(sPane);
		spanel.addListSelectionListener(this);

		bPane.setBounds(500,270,300,200);
		battInfo.setBounds(300,270,200,200);
		this.add(bPane);
		batt.addListSelectionListener(this);

		pPane.setBounds(500, 480, 300, 190);
		pcuInfo.setBounds(300,480,200,190);
		this.add(pPane);
		PCU.addListSelectionListener(this);

		this.add(solInfo);
		this.add(battInfo);
		this.add(pcuInfo);

		String[]configurations={"Deployable","Nondeployable"};
		JLabel configLab=new JLabel("Configuration: ");
		configLab.setBounds(50, 75, 100,20);
		DefaultComboBoxModel c=new DefaultComboBoxModel(configurations);
		config=new JComboBox(c);
		config.setBounds(150,75,100,20);
		config.addActionListener(this);
		config.setActionCommand("config");
		this.add(configLab);
		this.add(config);

		//what is this for again?
		single=new JRadioButton("One Panel per wing");
		single.setBounds(50,100,200,20);
		Both=new JRadioButton("Two Panels per wing");
		Both.setBounds(50,120,200,20);
		Triple=new JRadioButton("Three Panels per wing");
		Triple.setBounds(50,140,200,20);
		
		type=new ButtonGroup();
		type.add(single);
		type.add(Both);
		type.add(Triple);
		this.add(Triple);
		Triple.setVisible(false);
		one=new JRadioButton("One wing");
		one.setBounds(50,205,100,20);
		two=new JRadioButton("Two wings");
		two.setBounds(50,225,100,20);
		numSides=new ButtonGroup();
		numSides.add(one);
		numSides.add(two);

		/*	JLabel bats=new JLabel("Batteries");
		bats.setBounds(27,200,100,20);
		bats.setForeground(Color.RED);
		this.add(bats);*/


		JLabel instBat=new JLabel("<html>SPECIAL INSTRUCTIONS: Please select 2 batteries as your expected total power is to exceed 30 W. If not, please only select one battery.</html>");
		instBat.setForeground(Color.BLUE);
		if(totPower>30){
			instBat.setBounds(50,270,200,100);
			this.add(instBat);
		}
		JButton Search=new JButton("Search");
		Search.setBounds(100,500,100,20);
		Search.addActionListener(this);
		this.add(Search);

		JButton next=new JButton("Next");
		next.addActionListener(this);
		next.setBounds(1200, 650,100,20);
		this.add(next);
		this.setVisible(true);
	}

	
	public void valueChanged(ListSelectionEvent ae) {
		if(ae.getSource().equals(batt)){
			
			power p=batt_s.getMatches().get(batt.getSelectedIndex());
			battInfo.setViewportView(p.information());
		}
		if(ae.getSource().equals(spanel)){
			
			power p=sol_s.getMatches().get(spanel.getSelectedIndex());
			solInfo.setViewportView(p.information());
		}
		if(ae.getSource().equals(PCU)){
			
			power p=pcu_s.getMatches().get(PCU.getSelectedIndex());
			pcuInfo.setViewportView(p.information());
		}		
	}

	
	public void actionPerformed(ActionEvent ae) {
		if(ae.getActionCommand().equals("config")){
			JComboBox source=(JComboBox)ae.getSource();
			if(source.getSelectedIndex()==0){
				single.setVisible(true);
				Both.setVisible(true);
				Triple.setVisible(true);
				one.setVisible(true);
				two.setVisible(true);
				this.add(single);
				this.add(Both);
				this.add(one);
				this.add(two);
			}else{
				single.setVisible(false);
				Both.setVisible(false);
				Triple.setVisible(false);
				one.setVisible(false);
				two.setVisible(false);
			}
		}
		if(ae.getActionCommand().equals("Search")){
			String c="simple";
			String both="no";
			batt.clearSelection();
			spanel.clearSelection();
			PCU.clearSelection();
			if(config.getSelectedIndex()==0){
				if(single.isSelected()){
					c="single";
				}else if(Both.isSelected()){
					c="double";
				}else if(Triple.isSelected()){
					c="triple";
				}else{
				
					JOptionPane.showMessageDialog(null, "Please specify your solar panel configuration.", "Notice", JOptionPane.PLAIN_MESSAGE);
					return;
				}
				
				if(one.isSelected()){
					both="no";
				}else if(two.isSelected()){
					both="yes";
				}else{
					JOptionPane.showMessageDialog(null, "Please specify your whether your solar panels are single sided are double sided.", "Notice", JOptionPane.PLAIN_MESSAGE);
					return;
				}
			}else if (config.getSelectedIndex()==1){
				c="simple";
			}else{
				JOptionPane.showMessageDialog(null, "Please specify your whether your solar panels are deployable.", "Notice", JOptionPane.PLAIN_MESSAGE);
				return;
			}

			if(vol.getSelectedIndex()==-1){
				JOptionPane.showMessageDialog(null, "Please specify the volume of your cubesat.", "Notice", JOptionPane.PLAIN_MESSAGE);
				return;
			}

			bModel.clear();
			
			
			double config=0, b=0;
			if(c.equals("single")){
				config=1;
			}
			if(c.equals("double")){
				config=2;
			}
			if(c.equals("single")){
				config=3;
			}
			if(both.equals("yes")){
				b=1;
			}
			if(c.equals("no")){
				b=2;
			}
			
			
			batt_s=new power_search("Battery", Double.parseDouble((String)vol.getSelectedItem()), config, b);
			System.out.print(Double.parseDouble((String)vol.getSelectedItem()));
			for(int i=0; i<batt_s.getMatches().size(); i++){
				bModel.addElement(batt_s.getMatchNames().get(i));
			}
			batt.setModel(bModel);

			pModel.clear();
			pcu_s=new power_search("Power Control Unit", Double.parseDouble((String)vol.getSelectedItem()), config, b);
			for(int i=0; i<pcu_s.getMatches().size(); i++){
				pModel.addElement(pcu_s.getMatchNames().get(i));
			}
			PCU.setModel(pModel);

			sModel.clear();
			sol_s=new power_search("Solar Panels", Double.parseDouble((String)vol.getSelectedItem()), config, b);
			System.out.print(sol_s.getMatches().size());

			//System.out.print
			for(int i=0; i<sol_s.getMatches().size(); i++){
				sModel.addElement(sol_s.getMatchNames().get(i));
			}
			spanel.setModel(sModel);

		}
		if(ae.getActionCommand().equals("Next")){
			a.add(batt_s.getMatches().get(batt.getSelectedIndex()));
			a.add(sol_s.getMatches().get(spanel.getSelectedIndex()));
			a.add(pcu_s.getMatches().get(PCU.getSelectedIndex()));
			new structure(a);
			this.setVisible(false);
		}
		this.repaint();
	}
	
	public static void main(String[]args){
		new gooey_5(30,new running_chart());
	}
}
