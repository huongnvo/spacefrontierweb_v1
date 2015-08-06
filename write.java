package instruments;
//This class writes out the mass, power, volume information for each of the selected parts to an excel spreadsheet 



//this class writes the info of the selected parts(mass, power, vol, cost) to an excel spreadsheet
import java.io.*;
import java.util.*;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

public class write {

	public write(ArrayList<part>parts, String fname) {

		//extracts info from parts to write to file
		String [][] excelData = preapreDataToWriteToExcel(parts);       

		HSSFWorkbook myWorkBook = new HSSFWorkbook();
		HSSFSheet mySheet = myWorkBook.createSheet();
		HSSFRow myRow = null;
		HSSFCell myCell = null;

		//writes out info
		for (int rowNum = 1; rowNum < parts.size()+1; rowNum++){   
			myRow = mySheet.createRow(rowNum);

			for (int cellNum = 0; cellNum < 4 ; cellNum++){
				myCell = myRow.createCell(cellNum);
				myCell.setCellValue(excelData[rowNum][cellNum]);     

			}
		}
		
		try{
			//creates file and writes to it and closes it
			FileOutputStream out = new FileOutputStream(fname);
			myWorkBook.write(out);
			out.close();
		}catch(Exception e){ e.printStackTrace();}        
	}
	
	/**Prepare some data from selected parts excel file content**/
	public static String [][] preapreDataToWriteToExcel(ArrayList<part>parts){

		//array will store the information- one row per part in the parts list,  columns listed below
		String [][] excelData = new String [parts.size()+1][5];
		
		//5 columns- name, mass, power, volume and cost
		excelData[0][0]="Name";
		excelData [0][1]="Mass";
		excelData[0][2]="Power";
		excelData[0][3]="Volume";
		excelData[0][4]="Cost";
		
		//values of below variables change are replaced with the respective values for the parts
		String n="";
		double m=0, p=0, v=0;

		//stores the values then writes them to the matrix storing data for the spreadsheet
		for(int i=0; i<parts.size(); i++){

			part a=parts.get(i);

			n=a.getName();
			m=a.getMass();
			p=a.getPower();
			v=a.getVolume();

			excelData[i][0]=n;
			excelData[i][1]=m+"";
			excelData[i][2]=p+"";
			excelData[i][3]=v+"";
			excelData[i][4]="";
		}
		return excelData;
	} 
}