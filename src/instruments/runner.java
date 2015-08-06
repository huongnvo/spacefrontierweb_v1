package instruments;


import javax.swing.JApplet;

public class runner extends JApplet{
	public runner(){
		/*init();*/
	}
	public void init(){
		new gooey(new running_chart());
	}
	
	public static void main(String args[]){
		runner gooeyRunner = new runner();
		gooeyRunner.init();
	}
}
