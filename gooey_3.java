package instruments;
//reads through spreadsheet to find possible matches



import javax.swing.*;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;

import java.awt.Color;
import java.awt.event.*;
import java.util.ArrayList;

public class gooey_3 extends JFrame implements ActionListener, ListSelectionListener{

	private JComboBox startBox, venueBox, targetBox, orbitBox, systemBox;
	private JTextField angleEnter, Mi;
	private JLabel dv, text;
	private DefaultListModel matchModel;
	private JList matches;
	private JScrollPane info;
	private double isp, dv_num;
	private JRadioButton elliptical=new JRadioButton("Elliptical");
	private JRadioButton circ=new JRadioButton("Circular");
	private JScrollPane matchPane=new JScrollPane();
	private double capture=0;
	private JRadioButton lo=new JRadioButton("Low");
	private JRadioButton med=new JRadioButton("Med");
	private JRadioButton hi=new JRadioButton("High");
	private JRadioButton enterB=new JRadioButton("");
	private JLabel km1=new JLabel("km");
	private JLabel km2=new JLabel("km");	
	private JTextField enter=new JTextField();
	private JLabel pLabel=new JLabel("Periapsis");
	private JLabel aLabel=new JLabel("Apoapsis");
	private JTextField per=new JTextField();
	private String parameter;
	private JTextField appo=new JTextField();
	
	private JRadioButton capt=new JRadioButton("Meets Capture");
	
	private JRadioButton orb=new JRadioButton("Meets Orbit");
	private JRadioButton none=new JRadioButton("No Filters");
	private ButtonGroup dvfilters=new ButtonGroup();
	private matchPropulsion p;
	private running_chart a;

	private JTextField DV;
	private JTextField DVCapture;
	
	private JLabel inst=new JLabel();
	
	public gooey_3(running_chart a){
		
		JLabel dvlabel=new JLabel("DV: ");
		JLabel dvcapturelabel=new JLabel("DV Capture: ");
		
		dvlabel.setBounds(50,450,50,20);
		DV=new JTextField();
		DV.setEditable(false);
		DV.setBounds(85,450,100,20);
		
		dvcapturelabel.setBounds(50,500,100,20);
		DVCapture=new JTextField();
		DVCapture.setEditable(false);
		DVCapture.setBounds(135,500,100,20);
		
		
		this.add(DV);
		this.add(dvlabel);
		this.add(DVCapture);
		this.add(dvcapturelabel);
		
		
		this.a=a;
		capt.addActionListener(this);
		this.add(none);
		none.addActionListener(this);
		
		dvfilters.add(capt);
		dvfilters.add(orb);
		dvfilters.add(none);
		orb.addActionListener(this);
		capt.setBounds(900,300,140,20);
		orb.setBounds(900,320,140,20);
		none.setBounds(900,340,140,20);
		this.add(capt);
		this.add(orb);

		inst.setText("<html>DIRECTIONS: First select a target. Next select a system type. Finally select an orbit type. Additional information may be filled in if necessary.<br><br>Hit search to look see the calculated Dv necessary for your cubesat, and the best systems that match up to your calculated Dv in our database.</html>");
		inst.setForeground(Color.BLUE);
		this.add(inst);
		inst.setBounds(10,-5,500,100);
		enterB.setActionCommand("enter");
		enterB.addActionListener(this);
		JLabel rad=new JLabel("Degrees");
		info=new JScrollPane();
		info.setBounds(500,400,300,250);
		this.add(info);
		//this.
		isp=0;
		dv_num=0;

		matchModel=new DefaultListModel();
		matches=new JList(matchModel);

		this.setSize(1365,725);
		this.setDefaultCloseOperation(EXIT_ON_CLOSE);
		this.setLayout(null);

		dv=new JLabel();
		dv.setBounds(50,500,200,20);
		this.add(dv);
		JLabel st=new JLabel("Starting Point: ");
		DefaultComboBoxModel starts=new DefaultComboBoxModel();
		starts.addElement("GEO/GTO");
		starts.addElement("Earth Escape");	
		startBox=new JComboBox(starts);

		st.setBounds(50, 90, 100, 20);
		startBox.setBounds(150,90,100,20);

		JLabel ta=new JLabel("Target: ");
		String []targetElements={"Earth","Mercury","Mars", "Venus","Moon"};
		DefaultComboBoxModel targets=new DefaultComboBoxModel(targetElements);
		targetBox=new JComboBox(targets);

		ta.setBounds(50, 130, 75, 20);
		targetBox.setBounds(95,130,100,20);

		JLabel oT=new JLabel("Orbit Type: ");
		String []orbitElements={"Low","Med","High"};
		DefaultComboBoxModel oribits=new DefaultComboBoxModel(orbitElements);
		orbitBox=new JComboBox(oribits);

		//		oT.setBounds(50, 170, 75, 20);
		//		orbitBox.setBounds(125,170,100,20);

		JLabel system=new JLabel("Types of Systems: ");
		String[]sysElements={"Sail","Thruster","All"};
		DefaultComboBoxModel systems=new DefaultComboBoxModel(sysElements);
		systemBox=new JComboBox(systems);

		system.setBounds(50, 170, 130, 20);
		systemBox.setBounds(180,170,200,20);

		JLabel angle=new JLabel("Orbital angle change: ");
		angleEnter=new JTextField();

		angle.setBounds(50, 210, 130, 20);
		angleEnter.setBounds(180,210,100,20);

		JButton search=new JButton("Search");
		search.addActionListener(this);
		search.setBounds(70, 600, 100, 20);

		circ.addActionListener(this);
		circ.setBounds(50, 240, 100, 20);
		this.add(circ);
		lo.setBounds(70,260,100,20);
		lo.addActionListener(this);
		med.setBounds(70,280,100,20);
		med.addActionListener(this);
		hi.setBounds(70,300,100,20);
		hi.addActionListener(this);
		enterB.setBounds(70,320,25,20);
		enter.setBounds(95,320,100,20);
		enter.setEnabled(false);
		ButtonGroup orbitGroup=new ButtonGroup();
		orbitGroup.add(lo);
		orbitGroup.add(med);
		orbitGroup.add(hi);
		orbitGroup.add(enterB);


		elliptical.addActionListener(this);
		elliptical.setBounds(50, 280, 150, 20);
		this.add(elliptical);

		ButtonGroup oType=new ButtonGroup();
		oType.add(circ);
		oType.add(elliptical);
		JLabel pLabel=new JLabel("Periapsis");
		JLabel aLabel=new JLabel("Apoapsis");

		JTextField per=new JTextField();
		JTextField appo=new JTextField();	
		matchPane.setViewportView(matches);
		this.add(matchPane);
		matchPane.setBounds(500,50,300,300);
		matches.addListSelectionListener(this);
		text=new JLabel();
		text.setBounds(900,50,400,200);
		this.add(text);
		this.add(matches);
		this.add(search);
		this.add(angle);
		this.add(angleEnter);
		this.add(system);
		this.add(systemBox);
		this.add(oT);
		this.add(orbitBox);
		this.add(ta);
		this.add(targetBox);
		this.add(st);
		this.add(startBox);

		JButton next=new JButton("Next>>");
		next.setBounds(700,650,100,20);
		next.addActionListener(this);
		this.add(next);
		rad.setBounds(290,210,200,20);
		this.add(rad);
		dv.setBounds(50, 400,200,20);
		this.add(dv);
		this.setVisible(true);

	}
	double oRad=0;
	public void actionPerformed(ActionEvent ae) {

		if(ae.getActionCommand().equals("Low")){
			enter.setEnabled(false);
			oRad=500;
		}
		if(ae.getActionCommand().equals("Medium")){
			enter.setEnabled(false);
			oRad=1000;
		}
		if(ae.getActionCommand().equals("High")){
			enter.setEnabled(false);
			oRad=10000;
		}
		if(ae.getActionCommand().equals("enter")){
			enter.setEnabled(true);
		}

		if(ae.getActionCommand().equals("Circular")){

			pLabel.setVisible(false);
			per.setVisible(false);
			aLabel.setVisible(false);
			appo.setVisible(false);
			km1.setVisible(true);
			km2.setVisible(false);

			km1.setBounds(200,320,70,20);

			lo.setVisible(true);
			med.setVisible(true);
			hi.setVisible(true);
			enterB.setVisible(true);
			enter.setVisible(true);

			this.add(lo);
			this.add(med);
			this.add(hi);
			this.add(enterB);
			this.add(enter);
			this.add(km1);
			this.repaint();
			elliptical.setBounds(50, 340, 150, 20);
		}else if(ae.getActionCommand().equals("Elliptical")){
			lo.setVisible(false);
			med.setVisible(false);
			hi.setVisible(false);
			enterB.setVisible(false);
			enter.setVisible(false);

			elliptical.setBounds(50,280,150,20);

			pLabel.setBounds(70,300,100,20);
			per.setBounds(170,300,100,20);
			aLabel.setBounds(70,320,100,20);
			appo.setBounds(170,320,100,20);
			km2.setBounds(275,320,70,20);
			km1.setBounds(275,300,70,20);

			pLabel.setVisible(true);
			per.setVisible(true);
			aLabel.setVisible(true);
			appo.setVisible(true);
			//			km1.setVisible(true);
			km2.setVisible(true);

			this.add(pLabel);
			this.add(per);
			this.add(aLabel);
			this.add(appo);
			this.add(km1);
			this.add(km2);

			this.repaint();

		}

		if(ae.getActionCommand().equals("Next>>")){

			a.add(p.getMatches().get(matches.getSelectedIndex()));
			new gooey_4(((String)targetBox.getSelectedItem()), ((String)orbitBox.getSelectedItem()), a);
			this.setVisible(false);
		}
		else{

			double angle=0;
			double v=0;
			double dv=0;
			double mass=0;
			double rad=0;
			double g=6.673E-20;

			if(ae.getActionCommand().equals("Search")){

				dvfilters.clearSelection();
				if(targetBox.getSelectedIndex()==-1|| systemBox.getSelectedIndex()==-1||(!elliptical.isSelected()&&!circ.isSelected())){
					JOptionPane.showMessageDialog(null, "All fields must be completed before proceeding.", "Error", JOptionPane.PLAIN_MESSAGE);
				}
				if(circ.isSelected()&&!lo.isSelected()&&!hi.isSelected()&&!med.isSelected()&&!enterB.isSelected()){
					JOptionPane.showMessageDialog(null, "All fields must be completed before proceeding.", "Error", JOptionPane.PLAIN_MESSAGE);
				}
				if(elliptical.isSelected()&&(per.getText().equals("")||appo.getText().equals(""))){
					JOptionPane.showMessageDialog(null, "All fields must be completed before proceeding.", "Error", JOptionPane.PLAIN_MESSAGE);
				}
				else{
					parameter=(String)systemBox.getSelectedItem();
					if(systemBox.getSelectedIndex()==2){
						parameter="";
					}


					if(((String)startBox.getSelectedItem()).equals("Earth Escape")){
						if(((String)targetBox.getSelectedItem()).equals("Moon")){
							dv=.1;
						}
						if(((String)targetBox.getSelectedItem()).equals("Mars")){
							dv=.1;
						}
						if(((String)targetBox.getSelectedItem()).equals("Venus")){
							dv=.1;
						}
					}if(((String)startBox.getSelectedItem()).equals("GEO/GTO")){
						if(((String)targetBox.getSelectedItem()).equals("Moon")){
							dv=.5;
						}
						if(((String)targetBox.getSelectedItem()).equals("Mars")){
							dv=.5;
						}
						if(((String)targetBox.getSelectedItem()).equals("Venus")){
							dv=.1;
						}
					}


					if(((String)targetBox.getSelectedItem()).equals("Earth")){
						mass=5.9721986E24;
						rad=6367.4;
					}if(((String)targetBox.getSelectedItem()).equals("Mercury")){
						mass=3.3022E23;
						rad=2439.7;
					}if(((String)targetBox.getSelectedItem()).equals("Mars")){
						mass=6.4169E23;
						rad=3386;
					}if(((String)targetBox.getSelectedItem()).equals("Venus")){
						mass=4.868E24;
						rad=6051.9;
					}if(((String)targetBox.getSelectedItem()).equals("Moon")){
						mass=7.3459E22;
						rad=1737.5;
					}

					if(enter.isEnabled()){
						if(!enter.getText().equals(""))
							oRad=Double.parseDouble(enter.getText());
					}
					double r=0;
					double a=0;
					if(circ.isSelected()){

						r=rad+oRad;
						capture=2*Math.sqrt(g*mass/r)*Math.sin(angle/2)+dv;
						dv=Math.abs(Math.sqrt(2*g*mass/r)-Math.sqrt(g*mass/r))+capture;
					}
					if(elliptical.isSelected()){

						r=Double.parseDouble(per.getText())+rad;
						a=Double.parseDouble(per.getText())+Double.parseDouble(appo.getText());
						capture=2*Math.sqrt(g*mass/a)*Math.sin(angle/2)+dv;
					//	System.out.print
						dv=Math.abs(Math.sqrt(2*g*mass/r)-Math.sqrt(g*mass/a))+capture;
					}

					//dv+=2*v*Math.sin(angle/2);
					dv_num=dv;
					//					System.out.println(dv_num);
					//					this.dv.setText(dv+"");
					//					this.repaint();

					p=new matchPropulsion(parameter, dv_num);
					matchModel.clear();
					for(int e=0; e<p.getMatchNames().size(); e++){
						if(!matchModel.contains(p.getMatchNames().get(e)))
							matchModel.addElement(p.getMatchNames().get(e));
						else{
							p.remove(e);
							e--;
						}
					}
					System.out.print(matchModel.size());
					matches.setModel(matchModel);
					if(!angleEnter.getText().equals("")){
						angle=Double.parseDouble((angleEnter.getText()));
						angle*=Math.PI;
						angle/=180;
					}
					matchPane.setViewportView(matches);

				}
			}
			DV.setText(String.format("%.5f",dv_num)+" km/sec");
			DVCapture.setText(String.format("%.5f",capture)+" km/sec");
		}
		if(ae.getActionCommand().equals("Meets Capture")){
			if(((JRadioButton)ae.getSource()).isSelected()){

				p=new matchPropulsion(parameter, capture);
				matchModel.clear();
				for(int e=0; e<p.getMatchNames().size(); e++){
					if(!matchModel.contains(p.getMatchNames().get(e)))
						matchModel.addElement(p.getMatchNames().get(e));
					else{
						p.remove(e);
						e--;
					}
				}
				//	System.out.print(matchModel.size());
				matches.setModel(matchModel);
				matchPane.setViewportView(matches);
			}
		}if(ae.getActionCommand().equals("Meets Orbit")){
			if(((JRadioButton)ae.getSource()).isSelected()){
				p=new matchPropulsion(parameter, dv_num);
				matchModel.clear();
				for(int e=0; e<p.getMatchNames().size(); e++){
					if(!matchModel.contains(p.getMatchNames().get(e)))
						matchModel.addElement(p.getMatchNames().get(e));
					else{
						p.remove(e);
						e--;
					}
				}
				//	System.out.print(matchModel.size());
				matches.setModel(matchModel);
				matchPane.setViewportView(matches);
			}else{
				p=new matchPropulsion(parameter, 0);
				matchModel.clear();
				for(int e=0; e<p.getMatchNames().size(); e++){
					if(!matchModel.contains(p.getMatchNames().get(e)))
						matchModel.addElement(p.getMatchNames().get(e));
					else{
						p.remove(e);
						e--;
					}
				}
				//	System.out.print(matchModel.size());
				matches.setModel(matchModel);
				matchPane.setViewportView(matches);
			}
		}if(ae.getActionCommand().equals("No Filters")){
			p=new matchPropulsion(parameter, 0);
			matchModel.clear();
			for(int e=0; e<p.getMatchNames().size(); e++){
				if(!matchModel.contains(p.getMatchNames().get(e)))
					matchModel.addElement(p.getMatchNames().get(e));
				else{
					p.remove(e);
					e--;
				}
			}
			//	System.out.print(matchModel.size());
			matches.setModel(matchModel);
			matchPane.setViewportView(matches);
		}
	}
	public void valueChanged(ListSelectionEvent e) {

		if(e.getSource().equals(matches)){
			int index=matches.getSelectedIndex();
			//	System.out.print(index+" ");
			if(index!=-1){
				//System.out.print(p.getMatches().size());

				propulsion info=p.getMatches().get(index);
				isp=info.getImpulse();
				this.info.setViewportView(info.information());

				//System.out.println(isp+" "+dv_num);
				//System.out.println(dv_num/(isp*.00981));
				String displayInfo;
				if(isp!=0){
					displayInfo="<html>Specific Impulse: "+isp+" seconds<br>Dv: "+info.getDV()+" km/sec<br>Percent Mass: "+String.format("%.5f",100*(1-1/(Math.pow(Math.E, dv_num/(isp*.00981)))))+" %";
					text.setForeground(Color.BLACK);
				}else{
					displayInfo="<html> WARNING: This instrument does not have a recoreded ISP, so calculated values will be incorrect. We recomend you do not use it.<br>Specific Impulse: "+isp+"<br>Dv: "+dv_num+"<br>Percent Mass: "+100*(1-1/(Math.pow(Math.E, dv_num/(isp*.00981))))+"</html>";
					text.setForeground(Color.RED);
				}
				text.setText(displayInfo);
			}
		}
	}
	
	public static void main(String[]args){
		new gooey_3(new running_chart());
	}
}