package instruments;




import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

public class attitude_search {

	private ArrayList<AttitudeController>matches;
	private ArrayList<String>matchNames;

	public attitude_search(ArrayList<String>measurements, double akno, double acont)
	{
		matches = new ArrayList<AttitudeController>();
		matchNames = new ArrayList<String>();
		Workbook wb = null;

		try {
			wb = WorkbookFactory.create(this.getClass().getResourceAsStream("CubeSatPartsList.xlsx"));
		} catch (InvalidFormatException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		String t;
		Sheet sheet = wb.getSheetAt(1);
		Cell cell=null;
		String Category, Type, Name, Manufacturer, hyperlink, TRL,	Mass_Further,	Power_Further,	VolDim, Volume_Further, AnglePrecision_further,	Torque_FOV,	obj, Site_req,	Modes,	radiation,	therm, duty_cycle, dat,	opp, vibe, cost;	
		double mass, pow, vol, ang, t_l, t_h;

		AttitudeController inst;
		Row r=null;
		for(int i=1; i<26; i++){

			r=sheet.getRow(i);

			cell = r.getCell(0);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Category = cell.getStringCellValue();
			}else{
				Category="";
			}

			cell = r.getCell(1);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Type = cell.getStringCellValue();
			}else{
				Type="";
			}

			cell = r.getCell(2);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Name = cell.getStringCellValue();
			}else{
				Name="";
			}

			cell = r.getCell(3);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Manufacturer = cell.getStringCellValue();
			}else{
				Manufacturer="";
			}

			cell = r.getCell(4);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				hyperlink = cell.getStringCellValue();
			}else{
				hyperlink="";
			}

			cell = r.getCell(5);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				TRL = cell.getStringCellValue();
			}else{
				TRL="";
			}

			cell = r.getCell(6);
			if(cell!=null){
				mass = cell.getNumericCellValue();
			}else{
				mass=0;
			}

			cell = r.getCell(7);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Mass_Further = cell.getStringCellValue();
			}else{
				Mass_Further="";
			}	

			cell = r.getCell(8);
			if(cell!=null){
				pow = cell.getNumericCellValue();
			}else{
				pow=0;
			}

			cell = r.getCell(9);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Power_Further = cell.getStringCellValue();
			}else{
				Power_Further="";
			}

			cell = r.getCell(10);
			if(cell!=null){
				vol = cell.getNumericCellValue();
			}else{
				vol =0;
			}

			cell = r.getCell(11);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				VolDim = cell.getStringCellValue();
			}else{
				VolDim="";
			}

			cell = r.getCell(12);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Volume_Further = cell.getStringCellValue();
			}else{
				Volume_Further="";
			}

			cell = r.getCell(13);
			if(cell!=null){
				ang = cell.getNumericCellValue();
			}else{
				ang =0;
			}

			cell = r.getCell(14);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				AnglePrecision_further = cell.getStringCellValue();
			}else{
				AnglePrecision_further="";
			}

			cell = r.getCell(15);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Torque_FOV = cell.getStringCellValue();
			}else{
				Torque_FOV="";
			}

			//see			
			cell = r.getCell(16);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				obj = cell.getStringCellValue();
			}else{
				obj="";
			}

			cell = r.getCell(17);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Site_req = cell.getStringCellValue();
			}else{
				Site_req="";
			}

			cell = r.getCell(18);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				t_l = cell.getNumericCellValue();
			}else{
				t_l=-300;
			}
			
			cell = r.getCell(19);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				t_h = cell.getNumericCellValue();
			}else{
				t_h=-300;
			}

			cell = r.getCell(20);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				dat = cell.getStringCellValue();
			}else{
				dat="";
			}

			cell = r.getCell(21);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				cost = cell.getStringCellValue();
			}else{
				cost="";
			}


			for(int j=0; j<measurements.size(); j++){
				t=measurements.get(j);
				inst=new AttitudeController(Category, Type, Name, Manufacturer, hyperlink, TRL,	Mass_Further,	Power_Further,	VolDim, Volume_Further, AnglePrecision_further,	Torque_FOV,	obj, Site_req,	dat, mass, pow, vol, ang);
				boolean add=true;
				for(int k=0; k<matches.size(); k++){	
					if( inst.equals(matches.get(k))){
						add=false;
					}
				}

				if(Category.equals(t)){
					if(Category.equals("ACS")){
						matches.add(inst);
						matchNames.add(inst.getName());
					}
					if(Category.equals("Sensor")){
						matches.add(inst);
						matchNames.add(inst.getName());
					}
					if(Category.equals("Actuator")){
						matches.add(inst);
						matchNames.add(inst.getName());
					}
				}
			}
		}
		sort();
	}

	public void sort(){

		AttitudeController nextElement;

		//examine one element at a time
		//sorts subsets of elements.  

		//sorts the first 2, then the first 3, then the first 4....

		for(int n = 1; n <matches.size(); n++){


			nextElement = matches.get(n);

			//properly places nextElement in order of subset

			int i = n;

			//shifts elements to the right one at a time
			//until find the correct spot for nextElement
			while( i > 0 && nextElement.getDeg() > matches.get(i-1).getDeg()){

				//			System.out.print("h");

				matches.set(i, matches.get(i-1));
				i--;
			}

			matches.set(i,nextElement);
		}

		matchNames.clear();
		for(int i=0; i<matches.size(); i++){
			matchNames.add(matches.get(i).getName());
		}

		for(int n = 1; n <matches.size(); n++){


			nextElement = matches.get(n);

			//properly places nextElement in order of subset

			int i = n;

			//shifts elements to the right one at a time
			//until find the correct spot for nextElement
			while( i > 0 && nextElement.getDeg() > matches.get(i-1).getDeg()){

				//			System.out.print("h");

				matches.set(i, matches.get(i-1));
				i--;
			}

			matches.set(i,nextElement);
		}

		matchNames.clear();
		
		for(int i=0; i<matches.size(); i++){
			matchNames.add(matches.get(i).getName());
			System.out.println(matches.get(i).getDeg());
		}
	}

	public void byMass(){

		AttitudeController nextElement;

		//examine one element at a time
		//sorts subsets of elements.  

		//sorts the first 2, then the first 3, then the first 4....

		for(int n = 1; n <matches.size(); n++){


			nextElement = matches.get(n);

			//properly places nextElement in order of subset

			int i = n;

			//shifts elements to the right one at a time
			//until find the correct spot for nextElement
			while( i > 0 && nextElement.getMass() > matches.get(i-1).getMass()){

				//			System.out.print("h");

				matches.set(i, matches.get(i-1));
				i--;
			}

			matches.set(i,nextElement);
		}

		matchNames.clear();
		for(int i=0; i<matches.size(); i++){
			matchNames.add(matches.get(i).getName());
		}

		for(int n = 1; n <matches.size(); n++){


			nextElement = matches.get(n);

			//properly places nextElement in order of subset

			int i = n;

			//shifts elements to the right one at a time
			//until find the correct spot for nextElement
			while( i > 0 && nextElement.getMass() > matches.get(i-1).getMass()){

				//			System.out.print("h");

				matches.set(i, matches.get(i-1));
				i--;
			}

			matches.set(i,nextElement);
		}

		matchNames.clear();
		matches.size();
		for(int i=0; i<matches.size(); i++){
			matchNames.add(matches.get(i).getName());
			System.out.println("asdfadsf"+matches.get(i).getDeg());
		}
	}

	public void byVolume(){

		AttitudeController nextElement;

		//examine one element at a time
		//sorts subsets of elements.  

		//sorts the first 2, then the first 3, then the first 4....

	//	System.out.print(matches.size());
		for(int n = 1; n <matches.size(); n++){


			nextElement = matches.get(n);

			//properly places nextElement in order of subset

			int i = n;

			//shifts elements to the right one at a time
			//until find the correct spot for nextElement
			while( i > 0 && nextElement.getVolume() > matches.get(i-1).getVolume()){

				//			System.out.print("h");

				matches.set(i, matches.get(i-1));
				i--;
			}

			matches.set(i,nextElement);
		}

		matchNames.clear();
		for(int i=0; i<matches.size(); i++){
			matchNames.add(matches.get(i).getName());
		}

		for(int n = 1; n <matches.size(); n++){

			nextElement = matches.get(n);

			//properly places nextElement in order of subset

			int i = n;

			//shifts elements to the right one at a time
			//until find the correct spot for nextElement
			while( i > 0 && nextElement.getVolume() > matches.get(i-1).getVolume()){

				//			System.out.print("h");

				matches.set(i, matches.get(i-1));
				i--;
			}

			matches.set(i,nextElement);
		}

		matchNames.clear();
		for(int i=0; i<matches.size(); i++){
			matchNames.add(matches.get(i).getName());
		}
	}

	public void byPow(){

		AttitudeController nextElement;

		//examine one element at a time
		//sorts subsets of elements.  

		//sorts the first 2, then the first 3, then the first 4....

		for(int n = 1; n <matches.size(); n++){


			nextElement = matches.get(n);

			//properly places nextElement in order of subset

			int i = n;

			//shifts elements to the right one at a time
			//until find the correct spot for nextElement
			while( i > 0 && nextElement.getPower() > matches.get(i-1).getPower()){

				//			System.out.print("h");

				matches.set(i, matches.get(i-1));
				i--;
			}

			matches.set(i,nextElement);
		}

		matchNames.clear();
		for(int i=0; i<matches.size(); i++){
			matchNames.add(matches.get(i).getName());
		}

		for(int n = 1; n <matches.size(); n++){


			nextElement = matches.get(n);

			//properly places nextElement in order of subset

			int i = n;

			//shifts elements to the right one at a time
			//until find the correct spot for nextElement
			while( i > 0 && nextElement.getPower() > matches.get(i-1).getPower()){

				//			System.out.print("h");

				matches.set(i, matches.get(i-1));
				i--;
			}

			matches.set(i,nextElement);
		}

		matchNames.clear();
		for(int i=0; i<matches.size(); i++){
			matchNames.add(matches.get(i).getName());
	//		System.out.println(matches.get(i).getDeg());
		}
	}

	public ArrayList<AttitudeController> getMatches(){
		return matches;
	}

	public ArrayList<String> getMatchNames(){
		ArrayList<String>n=new ArrayList<String>();
		for(int i=0; i<matches.size(); i++)
			n.add(matches.get(i).getName());

		return n;
	}

	public ArrayList<AttitudeController>bestMatches(double angle){

		ArrayList<AttitudeController>bestMatches=new ArrayList<AttitudeController>();
		double bestAng=-1;
		for(int i=0; i<matches.size()-1; i++){

			if(matches.get(i).getDeg()==angle){
				bestAng=matches.get(i).getDeg();
				i=matches.size();
			}
			else if(matches.get(i+1).getDeg()==angle){
				bestAng=matches.get(i+1).getDeg();
				i=matches.size();
			}
			else if(matches.get(i).getDeg()>angle&&matches.get(i+1).getDeg()<angle){
				if(matches.get(i).getDeg()==0){
					bestAng=matches.get(i+1).getDeg();
					i=matches.size();
				}else{
					bestAng=matches.get(i).getDeg();
					i=matches.size();
				}
			}
		}

		for(int i=0; i<matches.size(); i++){
			if(matches.get(i).getDeg()<=bestAng&&matches.get(i).getDeg()!=0){
				bestMatches.add(matches.get(i));
			}
		}
		
		matches.clear();
		for(int i=0; i<bestMatches.size(); i++){
			matches.add(bestMatches.get(i));
		}
		
		return bestMatches;
	}
}
