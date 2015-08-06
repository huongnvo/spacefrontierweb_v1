package instruments;
//reads through spreadsheet to find possible matches


import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.*;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;

public class gooey_6 extends JFrame implements ActionListener, ListSelectionListener{
	private String[] types={"OBC", "Image Processor"};
	private String[] speeds={"MIPS, Hzs"};
	private JComboBox typeBox, speed;
	private JScrollPane info=new JScrollPane();

	private JTextField channelsTF;
	private JTextField BpCTF;
	private JTextField x;
	private JTextField y;
	private JTextField BpSTF;
	private JTextField hzField;
	private JTextField calc;
	private JTextField aTF;
	private JTextField mipsField=new JTextField();
	private JTextField Itf, Itf2;
	private JTextField bps;
	private cdhs__search chs;
	private double bits;
	private JList daList=new JList();
	private DefaultListModel m=new DefaultListModel();
	private JRadioButton a,b,c;
	private running_chart chart;

	public gooey_6(running_chart chart){
		this.chart=chart;
		daList.setBounds(800,50,400,400);
		this.add(daList);
		daList.addListSelectionListener(this);
		info.setBounds(800,455,400,230);
		this.add(info);
		this.setSize(1365,725);
		this.setDefaultCloseOperation(EXIT_ON_CLOSE);
		this.setLayout(null);
		
	//	JLabel instructions=new JLabel("Select one of the three ")

		JLabel channelsLBL =new JLabel("Channels: ");
		channelsTF =new JTextField();
		channelsTF.setEnabled(false);
		channelsLBL.setBounds(50, 50, 100, 20);
		channelsTF.setBounds(125,50,100,20);
		this.add(channelsLBL);
		this.add(channelsTF);

		JLabel BpCLB=new JLabel("Bits per Channel: ");
		BpCTF=new JTextField();
		BpCTF.setEnabled(false);
		BpCLB.setBounds(250, 50, 100, 20);
		BpCTF.setBounds(350,50,100,20);
		this.add(BpCLB);
		this.add(BpCTF);

		JLabel int1=new JLabel("Integrations per second: ");
		int1.setBounds(500,50,150,20);
		Itf=new JTextField();
		Itf.setBounds(655,50, 100,20);
		this.add(int1);
		this.add(Itf);


		JLabel ArraySize=new JLabel("Array Size (x by y)   x: ");
		x=new JTextField();
		x.setEnabled(false);
		JLabel ylab=new JLabel(" by y: ");
		y=new JTextField();
		y.setEnabled(false);
		ArraySize.setBounds(50,75,200,20);
		x.setBounds(175,75,100,20);
		ylab.setBounds(300,75,100,20);
		y.setBounds(340,75,100,20);
		this.add(ArraySize);
		this.add(x);
		this.add(ylab);
		this.add(y);

		JLabel int2=new JLabel("Integrations per second: ");
		int2.setBounds(505,75,150,20);
		Itf2=new JTextField();
		Itf2.setBounds(650,75, 100,20);
		this.add(int2);
		this.add(Itf2);

		JLabel BpS=new JLabel("Bits per Second: ");
		BpSTF=new JTextField();
		BpSTF.setEnabled(false);
		BpS.setBounds(50,100,100,20);
		BpSTF.setBounds(150,100,100,20);

		JButton done=new JButton("Done");
		done.setBounds(1200, 650, 100,20);
		this.add(done);
		done.addActionListener(this);
		/*		JLabel hz=new JLabel("Hz");
		hz.setBounds(255,100,100,20);
		hzField=new JTextField();
		hzField.setEnabled(false);
		hzField.setBounds(290,100,100,20);*/

		this.add(BpS);
		this.add(BpSTF);
		//	this.add(hz);
		//	this.add(hzField);

		JLabel aLab=new JLabel("Percent of time generating data");
		aLab.setBounds(25,175,200,20);
		aTF=new JTextField();
		aTF.setBounds(80,200,100,20);
		JLabel div=new JLabel("________________");
		div.setBounds(75,215,150,20);
		JLabel onehun=new JLabel("100");
		onehun.setBounds(95,230,100,20);

		this.add(aLab);
		this.add(aTF);
		this.add(div);
		this.add(onehun);

		a=new JRadioButton();
		a.setBounds(25,45,25,25);
		a.addActionListener(this);
		a.setActionCommand("a");
		b=new JRadioButton();
		b.setBounds(25,70,25,25);
		b.addActionListener(this);
		b.setActionCommand("b");
		c=new JRadioButton();
		c.setBounds(25,95,25,25);
		c.addActionListener(this);
		c.setActionCommand("c");
		ButtonGroup bs=new ButtonGroup();

		JButton calcB=new JButton("Calculate");
		calcB.setBounds(250,210,100,20);
		this.add(calcB);
		calcB.addActionListener(this);
		JLabel ReqDlink=new JLabel("Required Downlink");
		ReqDlink.setBounds(25,300,150,20);
		this.add(ReqDlink);
		JLabel bpsLab=new JLabel("Bits per Second");
		this.add(bpsLab);
		bps=new JTextField();
		bps.setEnabled(false);
		this.add(bps);
		bpsLab.setBounds(25,275,150,20);
		bps.setBounds(175,275,150,20);
		calc=new JTextField();
		calc.setEnabled(false);
		calc.setBounds(175, 300, 150, 20);
		this.add(calc);

		this.add(a);
		this.add(b);
		this.add(c);

		bs.add(a);
		bs.add(b);
		bs.add(c);

		JLabel mips=new JLabel("Required MIPS: ");
		mips.setBounds(25,350,150,20);
		mipsField.setBounds(175,350,150,20);
		this.add(mips);
		this.add(mipsField);

		JButton search=new JButton("Search");
		search.setBounds(100,650,100,20);
		this.add(search);
		search.addActionListener(this);
		Itf.setEnabled(false);
		Itf2.setEnabled(false);
		this.setVisible(true);
	}

	public void valueChanged(ListSelectionEvent arg0) {

		info.setViewportView(chs.getMatch().get(daList.getSelectedIndex()).information());
	}

	public void actionPerformed(ActionEvent ae){

		if(ae.getActionCommand().equals("a")){
			channelsTF.setEnabled(true);
			BpCTF.setEnabled(true);
			Itf.setEnabled(true);
			Itf2.setEnabled(false);
			x.setEnabled(false);
			y.setEnabled(false);
			BpSTF.setEnabled(false);
			//		hzField.setEnabled(false);
		}if(ae.getActionCommand().equals("b")){
			channelsTF.setEnabled(false);
			BpCTF.setEnabled(false);
			Itf.setEnabled(false);
			Itf2.setEnabled(true);
			x.setEnabled(true);
			y.setEnabled(true);
			BpSTF.setEnabled(false);
			//		hzField.setEnabled(false);
		}if(ae.getActionCommand().equals("c")){
			channelsTF.setEnabled(false);
			BpCTF.setEnabled(false);
			x.setEnabled(false);
			y.setEnabled(false);
			BpSTF.setEnabled(true);
			//		hzField.setEnabled(true);
		}if(ae.getActionCommand().equals("Calculate")){
			if(a.isSelected()){
				bits=Double.parseDouble(channelsTF.getText())*Double.parseDouble(BpCTF.getText())*Double.parseDouble(Itf.getText());
			}
			else if(b.isSelected()){
				bits=Double.parseDouble(x.getText())*Double.parseDouble(y.getText())*Double.parseDouble(Itf2.getText());
			}else if(c.isSelected()){
				bits=Double.parseDouble(BpSTF.getText());
			}
			bps.setText(bits+" bits per second");
			calc.setText(bits*Double.parseDouble(aTF.getText())/100*86400+" MIPS");
		}

		if(ae.getActionCommand().equals("Search")){
			double mips=0;
			
			if(!mipsField.getText().equals("")){
				mips=Double.parseDouble(mipsField.getText());
			}
			
			chs=new cdhs__search(bits*Double.parseDouble(aTF.getText())/100*86400,bits,mips);
			m.clear();
			for(int i=0; i<chs.getmatchNames().size(); i++){
				m.addElement(chs.getmatchNames().get(i));
			}
			daList.setModel(m);
		}
		if(ae.getActionCommand().equals("Done")){
			
			chart.add(chs.getMatch().get(daList.getSelectedIndex()));
			new gooey_5(chart.getPow(), chart);
			this.setVisible(false);
		}
	}
	public static void main(String[]args){
		new gooey_6(new running_chart());
	}
}
