package instruments;
/*The SearchParameter class is a superclass for all the search parameters which appear on the left side of Instruments, and it is the JPanel
 * containing all the display of all parameter componenets on the left of the Instrument page.
 * All search parameters are added to the ArrayList 'added' contained in this class, 
 */


import java.awt.*;
import java.awt.event.*;
import java.util.*;
import javax.swing.*;

public class SearchParameter extends JPanel implements ActionListener{

	private static ArrayList<String>added;//contains an arrayList of all the checked parameters
	private Color defaultC;//the default background color to reset a button to if unchecked, only made so multiple instances of the same color are not created

	public SearchParameter(){

		added=new ArrayList<String>();
		defaultC=new Color(238,238,238);
	}

	public ArrayList<String> getAdded(){

		return added;
	}

	public void actionPerformed(ActionEvent ae){

		Object source=ae.getSource();
		if(source instanceof JButton){

			JButton b=(JButton)source;
			String n=b.getName();
			
			if(b.getForeground()!=Color.RED){
				b.setForeground(Color.RED);
				add(n);
			}else{
				b.setForeground(Color.BLACK);
				remove(n);
			}

		}else if(source instanceof JCheckBox){
			JCheckBox b=(JCheckBox)source;
			String n=b.getName();
			
			if(b.isSelected())
				add(n);
			else
				remove(n);
		}
	}

	//removes the unchecked/deselected parameter from the ArrayList added
	public void remove(String n){
	//	for(int i=0; i<added.size(); i++){

		//	if(added.get(i).equals(n))
				added.remove(n);
		//}
	}
	
	//adds n and makes sure one string in the array contains the parameter n (no duplicates)
	public void add(String n){
/*		for(int i=0; i<added.size(); i++){

			if(addepd.get(i).equals(n))
				i=added.size();
		}*/
		added.add(n);
	}
	
	//empties list
	public void searchAll(){
		
	}
}
