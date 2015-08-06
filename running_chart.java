package instruments;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.*;

import javax.swing.*;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;

public class running_chart extends JFrame implements ListSelectionListener, ActionListener{
	private double totalMass;
	private double totalPower;
	private double totalVolume;

	private DefaultListModel addedModel;
	private JList added;
	private JScrollPane info;

	private ArrayList<part>allParts=new ArrayList<part>();

	private JTextField mTF=new JTextField();
	private JTextField pTF=new JTextField();
	private JTextField vTF=new JTextField();

	public running_chart(){
		this.setSize(1365,725);
		this.setDefaultCloseOperation(EXIT_ON_CLOSE);
		this.setLayout(null);

		addedModel=new DefaultListModel();
		added=new JList();
		added.addListSelectionListener(this);
		JScrollPane all=new JScrollPane();
		all.setViewportView(added);
		all.setBounds(50,100,500,300);
		this.add(all);

		info=new JScrollPane();
		info.setBounds(50,450,500,300);
		this.add(info);

		JLabel m=new JLabel("Mass: ");
		JLabel p=new JLabel("Power: ");
		JLabel v=new JLabel("Volume: ");


		m.setBounds(50,25,70,20);
		mTF.setBounds(115,25,70,20);
		mTF.setEditable(false);
		p.setBounds(210,25,70,20);
		pTF.setBounds(265,25,70,20);
		pTF.setEditable(false);
		v.setBounds(360,25,70,20);
		vTF.setBounds(425,25,70,20);
		vTF.setEditable(false);
		this.add(m);
		this.add(p);
		this.add(v);
		this.add(mTF);
		this.add(pTF);
		this.add(vTF);

		JButton finish=new JButton("Finish");
		finish.setBounds(700,600,100,20);
		finish.addActionListener(this);
		this.add(finish);

		this.setVisible(true);
	}

	public void add(part a){
		boolean add=true;
		for(int i=0; i<allParts.size(); i++){
			if(allParts.get(i).getName().equals(a.getName())){
				add=false;
				i=allParts.size();
			}
		}
		if(add){
			if(a instanceof groundStation){

				addedModel.addElement(a.getName());
				allParts.add(a);
			}else{
			
				added.clearSelection();

				totalMass+=a.getMass();
				totalPower+=a.getPower();
				totalVolume+=a.getVolume();
				addedModel.addElement(a.getName());

				if(a instanceof power){
					
					totalPower-=a.getPower();
				}

				mTF.setText(String.format("%.3f",totalMass)+" g");
				pTF.setText(String.format("%.3f",totalPower)+" W");
				vTF.setText(String.format("%.3f",totalVolume)+" U");
				added.setModel(addedModel);
				allParts.add(a);
			}
		}
	}

	public static void main(String[]args){
		new running_chart();
	}

	
	public void valueChanged(ListSelectionEvent ae) {
		JList source=(JList)ae.getSource();

		JPanel i=allParts.get(source.getSelectedIndex()).information();
		info.setViewportView(i);
	}
	public double getPow(){
		return totalPower;
	}


	public void actionPerformed(ActionEvent arg0) {

		new write(allParts, "results.xls");
	}

	private String dialogBox(){

		try{
			UIManager.LookAndFeelInfo[] laf=UIManager.getInstalledLookAndFeels();

			for(UIManager.LookAndFeelInfo g: laf){

				System.out.println(g.toString());
			}
			UIManager.setLookAndFeel("com.sun.java.swing.plaf.windows.WindowsLookAndFeel");

		}catch(Exception e){

			System.out.println("Problems editing the look and feel");
			System.exit(-1);
		}

		JFileChooser jfc = new JFileChooser();

		// pop up the file menu box, "null" means we don't want to associate it with a component

		//if you want a Save Box to show instead
		//call the method showSaveDialog....
		int result = jfc.showOpenDialog(null);

		//the box will stay open until the user hits ok, cancel, x....

		//if the user selectes "Ok", extract the file 

		//File f=null;

		if(result == JFileChooser.APPROVE_OPTION){

			return jfc.getSelectedFile().getAbsolutePath();

		}

		return null;
	}
}
