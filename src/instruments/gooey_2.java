package instruments;
//the display for attitude


import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

import javax.swing.*;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;

public class gooey_2 extends JFrame implements ActionListener, ListSelectionListener{

	private JCheckBox sensor=new JCheckBox("Sensor");
	private JCheckBox actuator=new JCheckBox("Actuator");
	private JList results;
	private DefaultListModel resultsModel;
	private DefaultListModel addedModel;
	private ArrayList<String>param;
	private attitude calc;
	private JLabel calcInfo;
	private JScrollPane info;
	private attitude_search p;
	private JRadioButton acs, SensAct;
	private JComboBox sortBy;
	private running_chart a;
	private ArrayList<AttitudeController>added=new ArrayList<AttitudeController>();
	
	public gooey_2(running_chart a){
		
		results=new JList();
		resultsModel=new DefaultListModel();
		addedModel=new DefaultListModel();
		param=new ArrayList<String>();
		calcInfo=new JLabel();
		this.a=a;
		this.setSize(1365,725);
		
		this.setLayout(null);
		
		String []sort={"mass", "power","volume"};
		DefaultComboBoxModel sortBox=new DefaultComboBoxModel(sort); 
		sortBy=new JComboBox(sortBox);
		sortBy.addActionListener(this);
		sortBy.setActionCommand("sort");
		sortBy.setBounds(1230,30,100,20);
		this.add(sortBy);
		info=new JScrollPane();
		info.setBounds(600,400,600, 250);
		this.add(info);
		
		calc=new attitude();
		calc.setBounds(0,0,calc.getHeight(),calc.getWidth());
		this.add(calc);
		sensor.setBounds(100,490,100,20);
		sensor.addActionListener(this);
		actuator.setBounds(100,510,100,20);
		actuator.addActionListener(this);
		acs=new JRadioButton("Attitude Control System");
		SensAct=new JRadioButton("Sensor and/or Actuator");
		ButtonGroup buttons=new ButtonGroup();
		buttons.add(acs);
		buttons.add(SensAct);
		acs.setBounds(50, 450, 200, 20);
		acs.addActionListener(this);
		SensAct.setBounds(50, 470, 200, 20);	
		SensAct.addActionListener(this);

		JButton add=new JButton("Add");
		add.addActionListener(this);
		add.setBounds(1030, 350, 100, 20);
		this.add(add);
		
		JButton search=new JButton("Search");
		search.setBounds(70,550,100,20);
		search.addActionListener(this);
		
		this.add(search);
		this.add(acs);
		this.add(SensAct);
		this.add(results);
		
		JScrollPane rPane=new JScrollPane();
		rPane.setViewportView(results);
		
		rPane.setBounds(600,30,600,300);
		results.addListSelectionListener(this);

		this.add(rPane);
		
		
		JButton nxt=new JButton("Next");
		nxt.setBounds(1100,650,100,20);
		this.add(nxt);
		nxt.addActionListener(this);
		
		this.setVisible(true);
	}

	String ACS="ACS";
	String sens="Sensor";
	String act="Actuator";
	
	public void actionPerformed(ActionEvent ae) {
		if(ae.getActionCommand().equals("Search")){

			resultsModel.clear();
			if(calc.getAng()!=0){
				if(param.size()==0){
					JOptionPane.showMessageDialog(this, "Please select a type.");
					param.add(ACS);
					param.add(act);
					param.add(sens);
				}else{

					p=new attitude_search(param, calc.minAngleSensors(), calc.getAng());
					ArrayList<AttitudeController>matches=p.bestMatches(calc.getAng());
					System.out.print(matches.size());
					for(int e=0; e<matches.size(); e++){
						resultsModel.addElement(matches.get(e).getName());
					}
					results.setModel(resultsModel);
				}
			}else{
				JOptionPane.showMessageDialog(this, "You must first make your calculations.");
			}
			//param.clear();
		}else{
			// TODO Auto-generated method stub
			if(ae.getActionCommand().equals("Sensor and/or Actuator")){
				JRadioButton r=(JRadioButton)ae.getSource();
				if(r.isSelected()){
					this.add(sensor);
					this.add(actuator);
					this.repaint();
					param.remove(ACS);
				}

			}
			if(ae.getActionCommand().equals("Sensor")){
				if(((JCheckBox)ae.getSource()).isSelected()){
					param.add(sens);
					param.remove(ACS);
					//param.remove(actuator);
				}else{
					param.remove(sens);
				}
			}
			if(ae.getActionCommand().equals("Actuator")){
				if(((JCheckBox)ae.getSource()).isSelected()){
					param.add(act);
					param.remove(ACS);
					//	param.remove(sensor);

				}else{
					param.remove(act);
				}
			}
			if(ae.getActionCommand().equals("Attitude Control System")){

				this.remove(sensor);
				sensor.setSelected(false);
				this.remove(actuator);
				actuator.setSelected(false);

				param.remove(sens);
				param.remove(act);
				this.repaint();
				param.add(ACS);
			}
			if(ae.getActionCommand().equals("Reset type selection.")){
				actuator.setSelected(false);
				sensor.setSelected(false);
				acs.setSelected(false);
				SensAct.setSelected(false);
			}
			else if(ae.getActionCommand().equals("sort")){

				//
				if(p==null){
					JOptionPane.showMessageDialog(null, "No attitude control instruments to sort.", "Error", JOptionPane.PLAIN_MESSAGE);
				}
				//sorts by mass power and volume
				else{
					resultsModel.clear();
					if(sortBy.getSelectedIndex()==0){
						p.byMass();
					}else if(sortBy.getSelectedIndex()==1){
						p.byPow();
					}else if(sortBy.getSelectedIndex()==2){
						p.byVolume();
					}
					ArrayList<String>instrumentNames=p.getMatchNames();
					
					for(int e=0; e<instrumentNames.size(); e++){
						resultsModel.addElement(instrumentNames.get(e));
					}
					
					results.setModel(resultsModel);
				}
			}
			//closes off current pane, adds selected instrument to running chart and opens the next page
			if(ae.getActionCommand().equals("Next")){
				
				int index=results.getSelectedIndex();
				if(added.size()!=0){

					AttitudeController info=p.getMatches().get(index);
					new gooey_3(a);
					
					for(int i=0; i<added.size(); i++){
						a.add(added.get(i));
					}
					
					this.setVisible(false);
				}else{

					JOptionPane.showMessageDialog(null, "You must select some instrument before you continue.", "Error", JOptionPane.ERROR_MESSAGE);
				}
			}
			else if(ae.getActionCommand().equals("Add")){

				int index=results.getSelectedIndex();
				if(index!=-1){

					AttitudeController info=p.getMatches().get(index);
					added.add(info);
				}
				else{

					JOptionPane.showMessageDialog(null, "You have not selected an instrument to add.", "Error", JOptionPane.ERROR_MESSAGE);
				}
			}
		}
		this.repaint();
	}
	
	//displays info for selected part
	public void valueChanged(ListSelectionEvent e) {

		int index=results.getSelectedIndex();

		if(index!=-1){

			AttitudeController ifo=p.getMatches().get(index);
			info.setViewportView(ifo.information());
			this.repaint();
		}
	}
}