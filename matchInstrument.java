package instruments;

import java.io.File;
import java.io.IOException;
import java.util.Date;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

import java.util.*;

public class matchInstrument
{
	private ArrayList<instrument>matches;
	private ArrayList<instrument>matchesDup;
	private ArrayList<String>matchNames;
	private ArrayList<String>matchNamesDup;

	public matchInstrument(ArrayList<String>measurements)
	{
		matches = new ArrayList<instrument>();
		matchNames = new ArrayList<String>();
		Workbook wb = null;

		//1. Open the file
		try {
			wb = WorkbookFactory.create(this.getClass().getResourceAsStream("CubeSatPartsList.xlsx"));
		} catch (InvalidFormatException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		//instrument info is at sheet 0
		Sheet sheet = wb.getSheetAt(0);

		//read in all instrument part values
		Cell cell=null;
		String type, name, vibe, data, opp, therm, rad, manufac, mode, hyperlink, obj,fovF, measF, TRL, pix, volF, volDim, powF, measurement, massF, use, res, cost;
		double mass, pow, vol, fov,pixel, temp_l=0, temp_h;
		int hits;

		String m;
		instrument inst;
		Row r=null;
		for(int i=1; i<sheet.getLastRowNum(); i++){

			r=sheet.getRow(i);

			cell = r.getCell(0);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				type = cell.getStringCellValue();
			}else{
				type="";
			}

			cell = r.getCell(1);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				name = cell.getStringCellValue();
			}else{
				name="";
			}

			cell = r.getCell(2);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				manufac = cell.getStringCellValue();
			}else{
				manufac="";
			}

			cell = r.getCell(3);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				hyperlink = cell.getStringCellValue();
			}else{
				hyperlink="";
			}

			cell = r.getCell(4);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				TRL = cell.getStringCellValue();
			}else{
				TRL="";
			}

			cell = r.getCell(5);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				mass = cell.getNumericCellValue();
			}else{
				mass=0;
			}

			cell = r.getCell(6);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				massF = cell.getStringCellValue();
			}else{
				massF="";
			}	

			cell = r.getCell(7);
			if(cell!=null){
				pow = cell.getNumericCellValue();
			}else{
				pow=0;
			}

			cell = r.getCell(8);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				powF = cell.getStringCellValue();
			}else{
				powF="";
			}

			cell = r.getCell(9);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				vol = cell.getNumericCellValue();
			}else{
				vol =0;
			}

			cell = r.getCell(10);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				volDim = cell.getStringCellValue();
			}else{
				volDim="";
			}

			cell = r.getCell(11);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				volF = cell.getStringCellValue();
			}else{
				volF="";
			}

			cell = r.getCell(12);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				measurement = cell.getStringCellValue();
			}else{
				measurement="";
			}

			cell = r.getCell(13);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				measF = cell.getStringCellValue();
			}else{
				measF="";
			}

			//see			
			cell = r.getCell(14);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				res = cell.getStringCellValue();
			}else{
				res="";
			}

			cell = r.getCell(15);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				pix = cell.getStringCellValue();
			}else{
				pix="";
			}

			if(pix.indexOf("x")!=-1){
				pixel=Double.parseDouble(pix.substring(0,pix.indexOf("x")));
			}else if(pix.equals("")){
				pixel=0;
			}else{
				pixel=Double.parseDouble(pix);
			}

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
				use = cell.getStringCellValue();
			}else{
				use="";
			}

			cell = r.getCell(18);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				fovF = cell.getStringCellValue();
			}else{
				fovF="";
			}


			cell = r.getCell(19);
			if(cell!=null){
				temp_l = cell.getNumericCellValue();
			}else{
				temp_l=-300;
			}

			cell = r.getCell(20);
			if(cell!=null){
				temp_h = cell.getNumericCellValue();
			}else{
				temp_h=-300;
			}

			cell = r.getCell(21);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				therm = cell.getStringCellValue();
			}else{
				therm="";
			}

			cell = r.getCell(22);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				data = cell.getStringCellValue();
			}else{
				data="";
			}

			cell = r.getCell(23);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				cost = cell.getStringCellValue();
			}else{
				cost="";
			}

			hits=0;

			//
			for(int j=0; j<measurements.size(); j++){

				m=measurements.get(j);
				inst=new instrument(type, name,  data,  therm,  manufac,  hyperlink, obj, fovF, TRL, measF,  volF,  volDim, powF, measurement, massF, use, res, mass, pow, vol,  hits, pixel, pix, temp_l, temp_h);
				boolean add=true;

				//ensures only 1v of the instrument is in match list

				for(int k=0; k<matches.size(); k++){	
					if( inst.equals(matches.get(k))){
						matches.get(k).hit();
						add=false;
					}
				}

				if(measurement.contains(m)&&add){
					matches.add(inst);
					matchNames.add(inst.getName());
				}
			}
		}

		//duplicate copy of matchInstrument, used to save the copy of matches when making changes to it for narrowing options

		matchesDup=new ArrayList<instrument>();
		matchNamesDup=new ArrayList<String>();

		for(int i=0; i<matches.size(); i++){
			matchesDup.add(matches.get(i));
			matchNamesDup.add(matchNames.get(i));
		}

	}


	public ArrayList<instrument> getMatches(){
		return matches;
	}

	public ArrayList<String> getMatchNames(){

		return matchNames;
	}

	public ArrayList<instrument> getMatchesDup(){

		return matchesDup;
	}

	public ArrayList<String> getMatchNamesDup(){

		return matchNamesDup;
	}

	public void byMass(){

		instrument nextElement;

		//examine one element at a time
		//sorts subsets of elements.  

		//sorts the first 2, then the first 3, then the first 4....

		for(int n = 1; n <matchesDup.size(); n++){


			nextElement = matchesDup.get(n);

			//properly places nextElement in order of subset

			int i = n;

			//shifts elements to the right one at a time
			//until find the correct spot for nextElement
			while( i > 0 && nextElement.getMass() > matchesDup.get(i-1).getMass()){

				//			System.out.print("h");
			//	if(!matchesDup.contains(matchesDup.get(i-1))){
					matchesDup.set(i, matchesDup.get(i-1));
			//	}
				i--;

			}

			matchesDup.set(i,nextElement);
		}

		matchNamesDup.clear();
		for(int i=0; i<matchesDup.size(); i++){
			matchNamesDup.add(matchesDup.get(i).getName());
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
		//matchesDup.clear();
		//matchNamesDup.clear();
		for(int i=0; i<matches.size(); i++){
			matchNames.add(matches.get(i).getName());
		//	matchesDup.add(matches.get(i));
		//	matchNamesDup.add(matches.get(i).getName());
		}
	
	}

	public void byVolume(){

		instrument nextElement;

		//examine one element at a time
		//sorts subsets of elements.  

		//sorts the first 2, then the first 3, then the first 4....

		for(int n = 1; n <matchesDup.size(); n++){


			nextElement = matchesDup.get(n);

			//properly places nextElement in order of subset

			int i = n;

			//shifts elements to the right one at a time
			//until find the correct spot for nextElement
			while( i > 0 && nextElement.getVolume() > matchesDup.get(i-1).getVolume()){

				//			System.out.print("h");

				matchesDup.set(i, matchesDup.get(i-1));
				i--;
			}

			matchesDup.set(i,nextElement);
		}

		matchNamesDup.clear();
		for(int i=0; i<matchesDup.size(); i++){
			matchNamesDup.add(matchesDup.get(i).getName());
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

		instrument nextElement;

		//examine one element at a time
		//sorts subsets of elements.  

		//sorts the first 2, then the first 3, then the first 4....

		for(int n = 1; n <matchesDup.size(); n++){


			nextElement = matchesDup.get(n);

			//properly places nextElement in order of subset

			int i = n;

			//shifts elements to the right one at a time
			//until find the correct spot for nextElement
			while( i > 0 && nextElement.getPower() > matchesDup.get(i-1).getPower()){

				//			System.out.print("h");

				matchesDup.set(i, matchesDup.get(i-1));
				i--;
			}

			matchesDup.set(i,nextElement);
		}

		matchNamesDup.clear();
		for(int i=0; i<matchesDup.size(); i++){
			matchNamesDup.add(matchesDup.get(i).getName());
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
		}
	}
	public void add(ArrayList<String>k, ArrayList<String>param2){

		matchesDup.clear();
		matchNamesDup.clear();
		int remove=0;

		for(int i=0; i<matches.size();i++){
			instrument check=matches.get(i);

			//checks to make sure all variables of the instrument have no instance of any part of k
			for(int j=0; j<k.size(); j++){

				if(check.remove(k.get(j))){
					remove++;
				}

			}

			//if it does not the instrument is added to a duplicate array which displays thinks
			if(k.size()==0){
				matchesDup.addAll(matches);
				//matchesDup.add(check);
				matchNamesDup.addAll(matchNames);
				i=matches.size();
			}else if(remove!=k.size()||k.size()==0){
				matchesDup.add(check);
				matchNamesDup.add(check.getName());
			}
			remove=0;
		}
	}
}
