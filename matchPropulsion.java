package instruments;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

import java.util.*;

public class matchPropulsion
{
	private ArrayList<propulsion> matches;
	private ArrayList<String>matchNames;

	public matchPropulsion(String m, double dv)
	{
		matches = new ArrayList<propulsion>();
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
		Sheet sheet = wb.getSheetAt(5);
		Cell cell=null;
		String Type, Name,	Manufac, link, TRL, cost,	Mass_Further,	Pow_Further,	VolDim,	Vol_Further, SImp_Further,	DV_Further,	obj,	Site_req,	therm, PO_requirements,	opp;										
		double SI, Mass, Pow, Vol, DV, totalImp;

		propulsion inst;
		Row r=null;
		for(int i=1; i<23; i++){

			r=sheet.getRow(i);

			cell = r.getCell(0);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Type = cell.getStringCellValue();
			}else{
				Type="";
			}

			cell = r.getCell(1);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Name = cell.getStringCellValue();
			}else{
				Name="";
			}


			cell = r.getCell(2);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Manufac = cell.getStringCellValue();
			}else{
				Manufac="";
			}

			cell = r.getCell(3);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				link = cell.getStringCellValue();
			}else{
				link="";
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
				Mass = cell.getNumericCellValue();
			}else{
				Mass=0;
			}

			cell = r.getCell(6);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Mass_Further = cell.getStringCellValue();
			}else{
				Mass_Further="";
			}	

			cell = r.getCell(7);
			if(cell!=null){
				Pow = cell.getNumericCellValue();
			}else{
				Pow=0;
			}

			cell = r.getCell(8);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Pow_Further = cell.getStringCellValue();
			}else{
				Pow_Further="";
			}

			cell = r.getCell(9);
			if(cell!=null){
				Vol = cell.getNumericCellValue();
			}else{
				Vol =0;
			}

			cell = r.getCell(10);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				VolDim = cell.getStringCellValue();
			}else{
				VolDim="";
			}

			cell = r.getCell(11);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Vol_Further = cell.getStringCellValue();
			}else{
				Vol_Further="";
			}

			cell = r.getCell(12);
			if(cell!=null){
				SI = cell.getNumericCellValue();
			}else{
				SI =0;
			}

			cell = r.getCell(13);
			if(cell!=null){
				DV = cell.getNumericCellValue();
			}else{
				DV =0;
			}

			cell = r.getCell(14);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				DV_Further = cell.getStringCellValue();
			}else{
				DV_Further="";
			}

			//see			
			cell = r.getCell(15);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				obj = cell.getStringCellValue();
			}else{
				obj="";
			}


			cell = r.getCell(16);
			if(cell!=null){
				//System.out.print(cell.getStringCellValue());
				cell.setCellType(Cell.CELL_TYPE_STRING);
				therm = cell.getStringCellValue();
			}else{
				therm="";
			}
			
			cell = r.getCell(17);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				totalImp = cell.getNumericCellValue();
			}else{
				totalImp=0;
			}

			cell = r.getCell(18);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				cost = cell.getStringCellValue();
			}else{
				cost="";
			}


			inst=new propulsion(Type, Name,	Manufac, link, TRL, 	Mass_Further,	Pow_Further,	VolDim,	Vol_Further, 	DV_Further,	obj,	therm,	 SI, Mass, Pow, Vol, DV);
			boolean add=true;
			for(int k=0; k<matches.size(); k++){	
				if( inst.equals(matches.get(k))){
					//matches.get(k).hit();
					add=false;
				}
			}
			//System.out.println("ANGLE: "+ang);

			if(Type.contains(m)){
				matches.add(inst);
				matchNames.add(inst.getName());
			}
		}
		sort();
		System.out.println(dv);
		System.out.println();
		matches=bestMatches(dv);
	}

	public ArrayList<propulsion> getMatches(){

		return matches;
	}

	public ArrayList<String> getMatchNames(){

		ArrayList<String>n=new ArrayList<String>();
		for(int i=0; i<matches.size(); i++)
			n.add(matches.get(i).getName());

		return n;
	}

	public void byMass(){

		propulsion nextElement;

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

				System.out.print("h");

				matches.set(i, matches.get(i-1));
				i--;
			}

			matches.set(i,nextElement);


			//	uncomment this to help you examine each iteration
			for(int j = 0; j < matches.size(); j++)
				System.out. println( matches.get(j).getMass() + " ");
			System.out.println();



		}
	}

	public void byVolume(){

		propulsion nextElement;

		//examine one element at a time
		//sorts subsets of elements.  

		//sorts the first 2, then the first 3, then the first 4....

		for(int n = 1; n <matches.size(); n++){


			nextElement = matches.get(n);

			//properly places nextElement in order of subset

			int i = n;

			//shifts elements to the right one at a time
			//until find the correct spot for nextElement
			while( i > 0 && nextElement.getVolume() > matches.get(i-1).getVolume()){

				//	System.out.print("h");

				matches.set(i, matches.get(i-1));
				i--;
			}

			matches.set(i,nextElement);
		}
	}

	public void byPow(){

		propulsion nextElement;

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

				//	System.out.print("h");

				matches.set(i, matches.get(i-1));
				i--;
			}

			matches.set(i,nextElement);
		}
	}

	public void remove(ArrayList<String>k){
		int remove=0;
		for(int i=0; i<matches.size();i++){
			propulsion check=matches.get(i);
			for(int j=0; j<k.size(); j++){

				if(check.remove(k.get(j))){
					remove++;
				}
			}

			if(remove==k.size()){
				matches.remove(check);
				i--;
			}
			remove=0;
		}
	}

	public int remove(int e) {
		// TODO Auto-generated method stub
		System.out.println(matches.size());
		matches.remove(e);
		return 1;
	}

	public ArrayList<propulsion>bestMatches(double angle){

		System.out.print(angle);
		ArrayList<propulsion>bestMatches=new ArrayList<propulsion>();
		double bestAng=matches.get(matches.size()-1).getDV();

		for(int i=1; i<matches.size(); i++){
			if(matches.get(i).getDV()!=0){
				if(matches.get(i).getDV()>=bestAng&&matches.get(i).getDV()<=angle){
					bestAng=matches.get(i).getDV();
					i=matches.size();
				}
			}
		}

		System.out.print(bestAng);
		for(int i=0; i<matches.size(); i++){
			if(matches.get(i).getDV()>=bestAng&&matches.get(i).getDV()!=0&&matches.get(i).getImpulse()!=0){
				bestMatches.add(matches.get(i));
			}
		}

		matches.clear();
		for(int i=0; i<bestMatches.size(); i++){
			matches.add(bestMatches.get(i));
		}

		return bestMatches;
	}

	public void sort(){
		//		System.out.print(11234);
		propulsion nextElement;

		//examine one element at a time
		//sorts subsets of elements.  

		//sorts the first 2, then the first 3, then the first 4....

		for(int n = 1; n <matches.size(); n++){


			nextElement = matches.get(n);

			//properly places nextElement in order of subset

			int i = n;

			//shifts elements to the right one at a time
			//until find the correct spot for nextElement
			while( i > 0 && nextElement.getDV() > matches.get(i-1).getDV()){

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
			while( i > 0 && nextElement.getDV() > matches.get(i-1).getDV()){

				//			System.out.print("h");

				matches.set(i, matches.get(i-1));
				i--;
			}

			matches.set(i,nextElement);
		}

		matchNames.clear();
		//System.out.print(matches.size());
		for(int i=0; i<matches.size(); i++){
			matchNames.add(matches.get(i).getName());
			System.out.println(matches.get(i).getDV());
		}
	}
}
