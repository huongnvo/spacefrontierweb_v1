package instruments;


import java.util.*;
import javax.swing.*;
import javax.swing.event.*;
import java.awt.event.*;
import java.awt.*;

public class gooey extends JFrame implements ActionListener, ListSelectionListener{

	private SearchParameter p;
	private JList matches;
	private DefaultListModel matchModel;
	private matchInstrument i;
	private JComboBox sortBy;

	private ArrayList<String>AddBy;
	private ArrayList<String>narrowBy;
	private ArrayList<instrument>added;

	private JScrollPane info;
	
	private running_chart a;
	private boolean allAdded;//used when checking if all were added de to an empty parameter search

	public gooey(running_chart a){
		allAdded=false;

		this.a= a;
		
		narrowBy=new ArrayList<String>();
		AddBy=new ArrayList<String>();
		p=new SearchParameter();

		added=new ArrayList<instrument>();

		this.setSize(1365,725);
		this.setLayout(new GridLayout(1,2));

		JPanel left=new JPanel();
		left.setLayout(null);
		left.setPreferredSize(new Dimension(550,1600));

		JLabel instLeft=new JLabel("<html>DIRECTIONS: Select the parameters necessary to search for instruments. If you do not know your parameters, select nothing and all instruments will display when you hit search.</html>");
		instLeft.setForeground(Color.BLUE);
		instLeft.setBounds(10,0,550,50);
		left.add(instLeft);

		SearchParameter[]p={new Elements(),new Measurement(),new Compounds(),new Particles(),new Fields(),new altimetry()};
		String[]title={"Elements","Wavelengths", "Compounds","Particles","Fields","Altimetry"};
		int y=60;

		for(int i=0; i<6; i++){

			JLabel t=new JLabel(title[i]);
			t.setBounds(0, y, 200, 20);
			left.add(t);
			SearchParameter addP=p[i];
			addP.setBounds(0,y+20,addP.getWidth(), addP.getHeight());
			left.add(addP);
			y+=addP.getHeight()+40;
		}

		JScrollPane leftPane=new JScrollPane();
		leftPane.setViewportView(left);

		JButton search=new JButton("Search");
		search.addActionListener(this);
		left.add(search);
		search.setBounds(500,1560,150,20);

		this.add(leftPane);		

		//fo testin
		JPanel rightPane=new JPanel();
		rightPane.setLayout(null);

		JLabel rightInst=new JLabel("<html>DIRECTIONS: Select on any instrument below to see further information, click add to add the selected instrument to your instrument list. You must select some instrument before you move onto the next part. Options on the right can be used to narrow down the list. </html>");
		rightInst.setBounds(10,10,550,50);
		rightInst.setForeground(Color.BLUE);
		rightPane.add(rightInst);

		matchModel=new DefaultListModel();
		matches=new JList(matchModel);		
		matches.addListSelectionListener(this);

		JScrollPane matchesList=new JScrollPane();
		matchesList.setViewportView(matches);

		rightPane.add(matchesList);
		matchesList.setBounds(30,70,450,300);

		String []sort={"mass", "power","volume"};
		DefaultComboBoxModel sortBox=new DefaultComboBoxModel(sort); 
		sortBy=new JComboBox(sortBox);
		sortBy.addActionListener(this);
		sortBy.setActionCommand("sort");
		sortBy.setBounds(500,50,100,20);
		rightPane.add(sortBy);

		JLabel NarrowBy=new JLabel("Narrow By");
		NarrowBy.setBounds(490,75,150,20);
		rightPane.add(NarrowBy);
		JLabel man=new JLabel("Manufacturer");
		man.setBounds(500,95,150,20);
		man.setForeground(Color.PINK);
		rightPane.add(man);
		
		String[]manu={"Pumpkin","Honeywell","Maryland Aerospace","Clyde","GOM","Busek","ISIS"};
		JCheckBox manuBox;
		int y_1=115;

		for(int i=0; i< manu.length; i++){
			manuBox=new JCheckBox(manu[i]);
			manuBox.addActionListener(this);
			manuBox.setBounds(500,y_1, 200,20);
			rightPane.add(manuBox);
			y_1+=20;
		}
		
		JLabel Type=new JLabel("Type");
		Type.setBounds(500,255,150,20);
		Type.setForeground(Color.PINK);
		rightPane.add(Type);

		String[]types={"Camera","Imaging Spectrometer","Spectrometer","Magnetometer","Particle Detector","Radiometer","Photometer","Altimeter"};
		JCheckBox type;

		int y_2=275;
		for(int i=0; i< types.length; i++){
			type=new JCheckBox(types[i]);
			type.addActionListener(this);
			type.setBounds(500,y_2, 200,20);
			rightPane.add(type);
			y_2+=20;
		}

		JLabel trllab=new JLabel("TRL");
		trllab.setBounds(500,435,150,20);
		trllab.setForeground(Color.PINK);
		rightPane.add(trllab);
		
		String[]trl={"1-3","4-6","7-9"};
		JCheckBox TRL;

		int y_3=455;
		for(int i=0; i< trl.length; i++){
			TRL=new JCheckBox(trl[i]);
			TRL.addActionListener(this);
			TRL.setBounds(500,y_3, 200,20);
			rightPane.add(TRL);
			y_3+=20;
		}

		JLabel Venue=new JLabel("Venue");
		Venue.setBounds(500,515,150,20);
		Venue.setForeground(Color.PINK);
		rightPane.add(Venue);
		
		String[]use={"orbital","in situ"};
		JCheckBox Use;

		int y_4=535;
		for(int i=0; i< use.length; i++){
			Use=new JCheckBox(use[i]);
			Use.addActionListener(this);
			Use.setBounds(500,y_4, 200,20);
			rightPane.add(Use);
			y_4+=20;
		}

		info=new JScrollPane();
		info.setBounds(30,400,450, 250);
		rightPane.add(info);

		JButton next=new JButton("Next >>");
		next.setBounds(500,600,100,20);
		next.addActionListener(this);
		rightPane.add(next);

		JButton add=new JButton("Add");
		add.addActionListener(this);
		add.setBounds(350, 375, 100, 20);
		rightPane.add(add);

		this.add(rightPane);
		this.setVisible(true);
	}

	public void actionPerformed(ActionEvent ae) {

		if(ae.getActionCommand().equals("Search")){
			if(allAdded==true){
				p.remove("gamma ray");
				p.remove("x-ray");
				p.remove("UV");
				p.remove("near-IR");
				p.remove("short-IR");
				p.remove("mid-IR");
				p.remove("long-IR");
				p.remove("far-IR");
				p.remove("Microwave");
				p.remove("radio");
				p.remove("magnetic field");
				p.remove("particle detection");
				p.remove("ions");
				p.remove("neutral");
				p.remove("electron");
				p.remove("heavy");
				allAdded=false;
			}
			ArrayList <String> keywords=p.getAdded();
			if(keywords.size()==0){
				keywords.add("gamma ray");
				keywords.add("x-ray");
				keywords.add("UV");
				keywords.add("near-IR");
				keywords.add("short-IR");
				keywords.add("mid-IR");
				keywords.add("long-IR");
				keywords.add("far-IR");
				keywords.add("Microwave");
				keywords.add("radio");
				keywords.add("magnetic field");
				keywords.add("particle detection");
				keywords.add("ions");
				keywords.add("neutral");
				keywords.add("electron");
				keywords.add("heavy");
				allAdded=true;
				JOptionPane.showMessageDialog(null, "All instruments will show as no search parameters were selected.", "Notice", JOptionPane.PLAIN_MESSAGE);
			}
			
			
			
			matchModel.clear();

			PossibleWavelengths w=new PossibleWavelengths(keywords);
			i=new matchInstrument(w.getMatchNames());

			for(int e=0; e<i.getMatchNames().size(); e++){
				matchModel.addElement(i.getMatchNamesDup().get(e));
			}

			if(matchModel.getSize()==0){
				JOptionPane.showMessageDialog(null, "No instruments to show. Consider editing your search parameters.", "Error", JOptionPane.ERROR_MESSAGE);

			}

			matches.setModel(matchModel);
		}

		else if(ae.getActionCommand().equals("sort")){

			if(i==null){
				JOptionPane.showMessageDialog(null, "No instruments to sort.", "Error", JOptionPane.PLAIN_MESSAGE);
			}
			else{
				matchModel.clear();
				if(sortBy.getSelectedIndex()==0){
					i.byMass();
				}else if(sortBy.getSelectedIndex()==1){
					i.byPow();
				}else if(sortBy.getSelectedIndex()==2){
					i.byVolume();
				}
				ArrayList<String>instrumentNames=i.getMatchNamesDup();

				for(int e=0; e<instrumentNames.size(); e++){
					matchModel.addElement(instrumentNames.get(e));
				}
			}
		}
		else if(ae.getSource() instanceof JCheckBox){

			JCheckBox r=((JCheckBox)ae.getSource());

			if(r.isSelected()){
				AddBy.add(r.getText());
			}else{
				AddBy.remove(r.getText());
			}

			if(i!=null){
				matchModel.clear();
				i.add(AddBy, narrowBy);
				ArrayList<String>instrumentNames=i.getMatchNamesDup();

				matchModel.clear();
				for(int e=0; e<instrumentNames.size(); e++){

					matchModel.addElement(instrumentNames.get(e));
				}
				if(matchModel.getSize()==0)

					JOptionPane.showMessageDialog(null, "No instruments to show. Consider editing your narrowing options.", "Error", JOptionPane.ERROR_MESSAGE);
			}else{
				JOptionPane.showMessageDialog(null, "You must conduct a search before narrowing search results.", "Error", JOptionPane.ERROR_MESSAGE);
				r.setSelected(false);
			}
		}

		//	matches.setModel(matchModel);
		//}
		else if(ae.getActionCommand().equals("Add")){

			int index=matches.getSelectedIndex();
			if(index!=-1){

				instrument info=i.getMatchesDup().get(index);
				added.add(info);
			}
			else{

				JOptionPane.showMessageDialog(null, "You have not selected an instrument to add.", "Error", JOptionPane.ERROR_MESSAGE);
			}
		}
		else {
			int index=matches.getSelectedIndex();
			if(added.size()!=0){

				instrument info=i.getMatches().get(index);
				new gooey_2(a);
				
				for(int i=0; i<added.size(); i++){
					a.add(added.get(i));
				}
				
				this.setVisible(false);
			}else{

				JOptionPane.showMessageDialog(null, "You must select some instrument before you continue.", "Error", JOptionPane.ERROR_MESSAGE);
			}
		}
	}
	public void valueChanged(ListSelectionEvent e) {


		if(e.getSource().equals(matches)){

			int index=matches.getSelectedIndex();
			if(index!=-1){

				this.remove(info);
				instrument ifo=i.getMatchesDup().get(index);
				info.setViewportView(ifo.information());
			}
		}
	}

	public static void main(String[]args){
		
		running_chart a=new running_chart();
		new gooey(a);
	}
}