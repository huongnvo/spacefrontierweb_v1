package instruments;
//periodic table of elements on left side of instruments page



import java.awt.Color;
import java.awt.Insets;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

import javax.swing.*;

public class Elements extends SearchParameter{

	
	//all elements arranged in a periodic table format
	public Elements(){
		
		this.setSize(540, 300);
		this.setLayout(null);

		String[]elements={"H","Li","Na","K","Rb","Cs","Fr","Be","Mg","Ca","Sr","Ba","Ra","Sc","Y","Lu","Lr","Ti","Zr","Hf","Rf","V","Nb","Ta","Db","Cr","Mo","W","Sg","Mn","Tc","Re","Bh","Fe","Ru","Os","Hs","Co","Rh","Ir","Mt","Ni","Pd","Pt","Uun","Cu","Ag","Au","Uuu","Zn", "Cd", "Hg", "Uub","B","Al","Ga","In","Tl","C","Si","Ge","Sn","Pb","Uuq","N","P","As","Sb","Bi","O","S","Se","Te","Po","F","Cl","Br","I","At","He","Ne","Ar","Kr","Xe","Rn","La","Ce","Pr","Nd","Pm", "Sm","Eu", "Gd","Tb", "Dy","Ho","Er","Tm","Yb","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md", "No"};

		int x=0;
		int y=0;
		Color c=new Color(238,238,238);
		
		for(int i=0; i<elements.length; i++){
			JButton e=new JButton(elements[i]);
			e.addActionListener(this);
			e.setName(" "+elements[i]+",");
			e.setOpaque(true);
			e.setBackground(c);
			e.setForeground(Color.BLACK);
			e.setBounds(x,y,30,30);
			e.setMargin(new Insets(0,0,0,0));
			e.setActionCommand("Element");
			if(elements[i].equals("Fr")||elements[i].equals("Uub")||elements[i].equals("Uuq")||elements[i].equals("Tl")||elements[i].equals("Bi")||elements[i].equals("Po")){
				x+=30;
				y=0;
			}
			if(elements[i].equals("Ra")){
				x+=30;
				y=60;
			}
			if(elements[i].equals("Lr")||elements[i].equals("Rf")||elements[i].equals("Db")||elements[i].equals("Sg")||elements[i].equals("Bh")||elements[i].equals("Hs")||elements[i].equals("Mt")||elements[i].equals("Uun")||elements[i].equals("Uuu")){
				y=60;
				x+=30;
			}
			if(elements[i].equals("At")){
				y=-30;
				x+=30;
			}
			if(elements[i].equals("Rn")){
				y+=60;
				x=0;
			}
			if(elements[i].equals("Yb")){

				x=0;
			}
			if(i>=elements.length-28&&i!=elements.length-15){
				x+=30;
			}else{
				y+=30;
			}
			this.add(e);
		}
		this.setVisible(true);
	}
}
