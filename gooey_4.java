package instruments;
//reads through spreadsheet to find possible matches



import javax.swing.*;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class gooey_4 extends JFrame implements ActionListener, ListSelectionListener{

	private DefaultComboBoxModel fModel;
	private JComboBox freq;
	private JList statList;
	private JList antList;
	private JList radList;
	private String []freqs={"UHF","VHF","S-Band","X-Band"};
	private String target,orbit;
	private groundStation g;
	private antenna a;
	private antenna r;
	private comm_search b;
	private comm_search c;
	private JLabel sloss,signoise,recpow,bitrat;
	private JTextField slossTF, signoiseTF, recpowTF, bitratTF;
	private lookForStation statLook;
	private JScrollPane antenna,radio, ground;
	private DefaultListModel stations=new DefaultListModel();
	private DefaultListModel antennas=new DefaultListModel();
	private DefaultListModel radios=new DefaultListModel();
	private running_chart chart;
	private JScrollPane st,an,ra;
	public gooey_4(String t, String o, running_chart chart_a){
		
		chart=chart_a;
		
		JLabel directions=new JLabel("<html>DIRECTIONS: Select a frequency from the drop box above which you will be using to both transmit and receive to find a collection of instruments. <br><br> Select one instrument from each category on the right to calculate bit rate. <br><br>When the correct combination of instruments provides you with your desired bit rate, continue to the next page.</html>");
		directions.setForeground(Color.BLUE);
		directions.setBounds(50,70,100,500);
		this.add(directions);

		JLabel gSt=new JLabel("Ground Station");
		gSt.setForeground(Color.RED);
		gSt.setBounds(200,30,100,20);
		this.add(gSt);
		JLabel ant=new JLabel("Antenna");
		ant.setForeground(Color.RED);
		ant.setBounds(200,240,100,20);
		this.add(ant);
		JLabel rad=new JLabel("Radio");
		rad.setForeground(Color.RED);
		rad.setBounds(200,450,100,20);
		this.add(rad);

		ground=new JScrollPane();
		ground.setBounds(200,50,270,190);
		this.add(ground);
		antenna=new JScrollPane();
		antenna.setBounds(200,260,270,190);
		this.add(antenna);

		radio=new JScrollPane();
		radio.setBounds(200,470,270,190);
		this.add(radio);

		sloss=new JLabel("Space Loss: ");
		signoise=new JLabel("Signal to Noise Ratio: ");
		recpow=new JLabel("Receiver Power: ");
		bitrat=new JLabel("Bit Rate: ");

		sloss.setBounds(850,50,130,20);
		signoise.setBounds(850,150,130,20);
		recpow.setBounds(850,250,130,20);
		bitrat.setBounds(850,350,130,20);

		slossTF=new JTextField();
		slossTF.setEditable(false);
		signoiseTF=new JTextField();
		signoiseTF.setEditable(false);
		recpowTF=new JTextField();
		recpowTF.setEditable(false);
		bitratTF=new JTextField();
			
		bitratTF.setEditable(false);
		String d="dBW";
		JLabel l1=new JLabel(d);
		JLabel l2=new JLabel(d);
		JLabel l3=new JLabel(d);
		JLabel l4=new JLabel("kBits");
		slossTF.setBounds(950,50,100,20);
		l1.setBounds(1055,50,100,20);
		signoiseTF.setBounds(980,150,100,20);
		l2.setBounds(1085,150,100,20);
		recpowTF.setBounds(950,250,100,20);
		l3.setBounds(1055,250,100,20);
		bitratTF.setBounds(950,350,100,20);
		l4.setBounds(1055,350,100,20);
		this.add(l1);
		this.add(l2);
		this.add(l3);
		this.add(l4);

		this.add(slossTF);
		this.add(signoiseTF);
		this.add(recpowTF);
		this.add(bitratTF);
		this.add(sloss);
		this.add(signoise);
		this.add(recpow);
		this.add(bitrat);

		a=new antenna();
		r=new antenna();
		g=new groundStation();

		statLook=new lookForStation();
		b=new comm_search();
		c=new comm_search();

		target=t;
		orbit=o;

		this.setSize(1365,725);
		this.setDefaultCloseOperation(EXIT_ON_CLOSE);
		this.setLayout(null);
		JLabel freqlab=new JLabel("Frequency");
		freqlab.setBounds(50,30,100,20);
		this.add(freqlab);
		fModel=new DefaultComboBoxModel(freqs);
		freq=new JComboBox(fModel);
		freq.setActionCommand("ground");
		freq.addActionListener(this);
		freq.setBounds(50,50,100,20);
		this.add(freq);

		DefaultListModel stations=new DefaultListModel();
		statList=new JList();
		st=new JScrollPane();
		this.add(st);
		st.setViewportView(statList);
		st.setBounds(500,50,300,190);
		statList.addListSelectionListener(this);

		antList=new JList();
		an=new JScrollPane();
		this.add(an);
		an.setViewportView(antList);
		an.setBounds(500, 260, 300, 190);
		antList.addListSelectionListener(this);

		radList=new JList();
		ra=new JScrollPane();
		this.add(ra);
		ra.setViewportView(radList);
		ra.setBounds(500, 470, 300, 200);
		radList.addListSelectionListener(this);

		JCheckBox loc=new JCheckBox("Location");
		JCheckBox di=new JCheckBox("Diameter");

		JButton calc=new JButton("Calculate");
		calc.addActionListener(this);
		calc.setBounds(950, 650, 100,20);
		this.add(calc);

		JButton next=new JButton("Next");
		next.setBounds(1200,650,100,20);
		this.add(next);
		next.addActionListener(this);

		//JCheckBox 
		this.setVisible(true);
	}

	
	public void actionPerformed(ActionEvent ae) {
		// TODO Auto-generated method stub
		if(ae.getActionCommand().equals("Calculate")){
			double dist=0;
			double f=0;
			if(target.equals("Earth")){
				if(orbit.equals("Low")){
					dist=2000000;
				}
				if(orbit.equals("Medium")){
					dist=20200000;
				}
				if(orbit.equals("High")){
					dist=40000000;
				}
			}else if(target.equals("Moon")){
				dist=384400000;
			}else if(target.equals("Venus")){
				dist=2.61E+11;
			}else if(target.equals("Mercury")){
				dist=2.22E+11;
			}else if(target.equals("Mars")){
				dist=4.01E+11;
			}
			if(freqs[freq.getSelectedIndex()].equals("UHF")){
				f=1.65E+9;
			}else if(freqs[freq.getSelectedIndex()].equals("S-Band")){
				f=3E+9;
			}else if(freqs[freq.getSelectedIndex()].equals("X-Band")){
				f=10E+9;
			}else if(freqs[freq.getSelectedIndex()].equals("VHF")){
				f=0.165E+9;
			}

			double sL=spaceLoss(dist,f);
			double rP=receiverPower(sL);
			double sNR=sigNoiseRatio(rP, sL);
			double bR=bitRate(sNR, f);

			slossTF.setText(String.format("%.2f", sL));
			signoiseTF.setText(String.format("%.2f", sNR));
			recpowTF.setText(String.format("%.2f", rP));
			bitratTF.setText(String.format("%.2f", bR));
			//System.out.println(sL);
			System.out.println(bR);
			//System.out.println();
		}
		if(ae.getActionCommand().equals("Next")){
			chart.add(b.getStations().get(antList.getSelectedIndex()));
			chart.add(b.getRadios().get(radList.getSelectedIndex()));
			chart.add(statLook.getStations().get(statList.getSelectedIndex()));
			this.setVisible(false);
			new gooey_6(chart);
			
		}
		if(ae.getActionCommand().equals("ground")){
			stations.clear();
			antennas.clear();
			radios.clear();
			
			antList.clearSelection();
			//antList.setModel(null);
			statList.clearSelection();
			//	statList.setModel(null);
			radList.clearSelection();
			//	radList.setModel(null);

			statLook.lookForStation(freqs[freq.getSelectedIndex()]);
			stations.clear();
			for(int i=0; i<statLook.getStatNames().size(); i++){

				stations.addElement(statLook.getStatNames().get(i));
			}
			statList.setModel(stations);
			antennas.clear();
			b.lookForAntenna(freqs[freq.getSelectedIndex()]);
			for(int i=0; i<b.getStatNames().size(); i++){

				antennas.addElement(b.getStatNames().get(i));
			}
			antList.setModel(antennas);
			radios.clear();
			for(int i=0; i<b.getRadioNames().size(); i++){

				radios.addElement(b.getRadioNames().get(i));
			}
			radList.setModel(radios);
		}
	}

	//dBW
	public double spaceLoss(double d, double f){

		return 10*Math.log10(Math.pow(((4*Math.PI*d*f)/300000000),2));
	}
	//dBW
	public double receiverPower(double sL){

		return g.getEIRP()+a.getGain()-sL; 
	}
	//dBW
	public double sigNoiseRatio(double rP, double sL){
 
		return a.getGain()+r.getTransPower()+g.getGT()+228.6-sL-30;
	}
	//kBits
	public double bitRate(double pRNo, double f){

		return Math.pow(10, ((pRNo-10)/10))/1000;
	}

	
	public void valueChanged(ListSelectionEvent e) {

		if(e.getSource().equals(antList)){

			a=b.getStations().get(antList.getSelectedIndex());
			antenna.setViewportView(a.information());
		}if(e.getSource().equals(statList)){
			g=statLook.getStations().get(statList.getSelectedIndex());
			ground.setViewportView(g.information());
		}if(e.getSource().equals(radList)){

			r=b.getRadios().get(radList.getSelectedIndex());
			radio.setViewportView(r.information());

		}
		System.out.println();
	}
}
