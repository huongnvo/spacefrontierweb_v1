package instruments;
//jpanel used in gooey_2, does all the math for calculating angle of knowledge/angle of control



import java.util.*;

import javax.swing.*;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class attitude extends JPanel implements ActionListener{

	//d represents orbital distance d
	//duncertain represents maximum spatial resolution
	//ang represents angle of control
	private double d, duncertain, ang;

	private JTextField duncertainTF;
	private JTextField dTF;

	private JTextField angleControl;
	private JTextField angleKnowledge;

	//adds all buttons and gui components to the panel
	public attitude(){

		this.setSize(400,600);
		this.setLayout(null);

		JLabel direction=new JLabel("<html>DIRECTIONS: Enter the altitude in km and the maximum resolution in meters. <br><br>Altitide may be left blank, and a value of 100 km will be assumed</html>");
		direction.setBounds(10,10,390,70);
		direction.setForeground(Color.BLUE);
		this.add(direction);

		JLabel km=new JLabel("km");

		d=100;

		JLabel dL=new JLabel("Altitude: ");
		dTF=new JTextField();

		dL.setBounds(50,125,200,20);
		dTF.setBounds(100,125,100,20);

		km.setBounds(205,125,50,20);

		this.add(dL);
		this.add(dTF);
		this.add(km);

		JLabel m=new JLabel("m");

		JLabel uncertainD=new JLabel("Maximum Spatial Resolution: ");
		duncertainTF=new JTextField();

		uncertainD.setBounds(50,150,200,20);
		duncertainTF.setBounds(225,150,100,20);
		m.setBounds(330,150,100,20);

		this.add(uncertainD);
		this.add(duncertainTF);
		this.add(m);

		JButton calc=new JButton("Calculate");
		calc.addActionListener(this);
		calc.setBounds(25, 200, 100,20);
		this.add(calc);

		JButton reset=new JButton("Reset");
		reset.setBounds(170,200,100,20);
		reset.addActionListener(this);
		this.add(reset);

		JLabel deg=new JLabel("Degrees");
		JLabel deg2=new JLabel("Degrees");

		JLabel aC=new JLabel("Angle of Control");
		angleControl=new JTextField();
		angleControl.setEditable(false);

		aC.setBounds(50,330,150,20);
		angleControl.setBounds(200,330,150,20);
		deg.setBounds(355,330,120,20);

		this.add(angleControl);
		this.add(aC);
		this.add(deg);

		JLabel aK=new JLabel("Angle of Knowledge");
		angleKnowledge=new JTextField();
		angleKnowledge.setEditable(false);

		aK.setBounds(50,265,150,20);
		angleKnowledge.setBounds(200,265,150,20);
		deg2.setBounds(355,265,100,20);

		this.add(angleKnowledge);
		this.add(aK);
		this.add(deg2);

		this.setVisible(true);
	}

	public double minAngleControlD(){

		return Math.atan((duncertain/1000)/d)*(180/Math.PI);
	}

	public double minAngleSensors(){

		return ang*.1;
	}

	public void setAng(double c){
		ang=c;
	}

	public double getAng(){
		return ang;
	}

	public void actionPerformed(ActionEvent ae) {

		if(ae.getActionCommand().equals("Reset")){

			duncertainTF.setEditable(true);
			dTF.setEditable(true);
			duncertainTF.setText("");
			dTF.setText("");
			angleControl.setText("");
			angleKnowledge.setText("");
		}else{

			int entered=0;

			if(!duncertainTF.getText().equals("")){
				try{
					duncertain=Double.parseDouble(duncertainTF.getText());
					entered++;
				}catch(NumberFormatException e){
					JOptionPane.showMessageDialog(this, "You may only enter numbers in the spatial resolution text field");
				}
			}

			if(!dTF.getText().equals("")){
				try{
					d=Double.parseDouble(dTF.getText());
					entered++;
				}catch(NumberFormatException e){
					JOptionPane.showMessageDialog(this, "You may only enter numbers in the altitude text field");
				}
			}

			else
				d=100;

			if(duncertainTF.getText().equals("")){

				JOptionPane.showMessageDialog(this, "You must enter a spatial resolution.");
				return;
			}else{

				if(!duncertainTF.getText().equals("")){

					angleControl.setText(String.format("%.5f", this.minAngleControlD()));
					angleKnowledge.setText(String.format("%.5f", this.minAngleControlD()*.1));
					setAng(minAngleControlD());
				}
				this.repaint();
				this.revalidate();
			}
		}
	}
}
