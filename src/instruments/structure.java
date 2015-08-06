package instruments;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.*;

import javax.swing.*;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;
public class structure extends JFrame implements ActionListener, ListSelectionListener{

	private strucSearch s;
	private JList strucResults;
	private JList depResults;
	private running_chart a;
	private JScrollPane sInfo, dInfo, list1,list2;

	public structure(running_chart a){

		sInfo=new JScrollPane();
		dInfo=new JScrollPane();

		this.a=a;
		this.setSize(1365,725);
		this.setDefaultCloseOperation(EXIT_ON_CLOSE);
		this.setLayout(null);
		JLabel Bus=new JLabel("Bus");
		Bus.setForeground(Color.RED);
		JLabel Deployer=new JLabel("Deployer");
		Deployer.setForeground(Color.RED);
		this.add(Bus);
		this.add(Deployer);
		Bus.setBounds(200,50,100,20);
		Deployer.setBounds(200,370,100,20);
		sInfo.setBounds(200,70,200,300);
		strucResults=new JList();
		list1=new JScrollPane();
		list1.setViewportView(strucResults);
		list1.setBounds(400,70,300,300);
		strucResults.addListSelectionListener(this);
		list2=new JScrollPane();
		dInfo.setBounds(200,390,200,300);
		depResults=new JList();
		list2.setViewportView(depResults);
		list2.setBounds(400,390,300,300);
		depResults.addListSelectionListener(this);
		this.add(sInfo);
		this.add(dInfo);

		JLabel inst=new JLabel("DIRECTIONS: Please select a cubesat volume to look for bus, thermal design, and deployer");
		inst.setBounds(50,25,550,20);
		this.add(inst);
		
		JRadioButton three=new JRadioButton("3 U Bus");
		three.setBounds(50,75,100,20);

		JRadioButton six=new JRadioButton("6 U Bus");
		six.setBounds(50,100,100,20);

		this.add(list1);
		this.add(list2);
		this.add(three);
		this.add(six);

		three.addActionListener(this);
		six.addActionListener(this);

		ButtonGroup vol=new ButtonGroup();
		vol.add(three);
		vol.add(six);

		JButton next=new JButton("Next");
		next.setBounds(1000,650,100,20);
		this.add(next);
		next.addActionListener(this);

		this.setVisible(true);
	}

	
	public void actionPerformed(ActionEvent ae) {
		if(ae.getActionCommand().equals("Next")){
			if(strucResults.getSelectedIndex()==-1||depResults.getSelectedIndex()==-1){
				
			}
			a.add(s.getStructures().get(strucResults.getSelectedIndex()));
			a.add(s.getDeployers().get(depResults.getSelectedIndex()));
			
			this.setVisible(false);
		}else{

			String search=ae.getActionCommand();
			if(search.equals("3 U Bus")){
				search="3";
			}else if(search.equals("6 U Bus")){
				search="6";
			}
			s=new strucSearch(Double.parseDouble(search));


			DefaultListModel strucModel=new DefaultListModel();
			for(int j=0; j<s.getStrucNames().size(); j++){
				strucModel.addElement(s.getStrucNames().get(j));
			}

			strucResults.setModel(strucModel);
			
			DefaultListModel depModel=new DefaultListModel();

			for(int j=0; j<s.getDepNames().size(); j++){
				depModel.addElement(s.getDepNames().get(j));
			}

			depResults.setModel(depModel);
		}

	}

	//displays information for the selected item in each of the three lists (Structure/bus, thermal, and deployer)
	public void valueChanged(ListSelectionEvent ae) {
		if(ae.getSource().equals(strucResults)){
			structurePart p=s.getStructures().get(strucResults.getSelectedIndex());
			sInfo.setViewportView(p.information());
		}
	/*	if(ae.getSource().equals(thermResults)){
			structurePart p=s.getTherm().get(thermResults.getSelectedIndex());
			tInfo.setViewportView(p.information());
		}*/
		if(ae.getSource().equals(depResults)){
			structurePart p=s.getDeployers().get(depResults.getSelectedIndex());
			dInfo.setViewportView(p.information());
		}		

	}
	public static void main(String[]args){
		new structure(new running_chart());
	}
}
