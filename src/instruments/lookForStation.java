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

public class lookForStation {

	private ArrayList<groundStation> matches;
	private ArrayList<String>matchNames;

	public lookForStation(){
		matches = new ArrayList<groundStation>();
		matchNames = new ArrayList<String>();
	}

	public void lookForStation(String freq){

		Workbook wb = null;

		//1. Open the file
		try {
			wb = WorkbookFactory.create(this.getClass().getResourceAsStream("CubeSatPartsList.xlsx"));
		} catch (InvalidFormatException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		Sheet sheet = wb.getSheetAt(6);
		Cell cell=null;
		String Name,	Uplink,	Downlink,	Gain,	Diameter,	Location,	Band,	Coordinates,EIRP_Further;																
		double EIRP=0, g_T=0;

		//String m;
		groundStation stat;
		Row r=null;
		for(int i=1; i<37; i++){

			r=sheet.getRow(i);

			cell = r.getCell(0);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Name = cell.getStringCellValue();
			}else{
				Name="";
			}

			cell = r.getCell(1);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Uplink = cell.getStringCellValue();
			}else{
				Uplink="";
			}
			//
			cell = r.getCell(2);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				EIRP_Further = cell.getStringCellValue();
			}else{
				EIRP_Further="";
			}

			cell = r.getCell(3);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				String e=cell.getStringCellValue();
				//System.out.println(e);
				if(e.contains(",")){
					EIRP=Double.parseDouble(e.substring(0,e.indexOf(",")));
				}else if(!e.contains("-")&&!e.equals("")){
					//System.out.println(EIRP);
					//cell.setCellType(cell.CELL_TYPE_NUMERIC);
					EIRP = Double.parseDouble(e);
				}
			}else{
				EIRP=0;
			}

			cell = r.getCell(4);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Downlink = cell.getStringCellValue();
			}else{
				Downlink="";
			}
			cell = r.getCell(5);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Gain = cell.getStringCellValue();
			}else{
				Gain="";
			}

			cell = r.getCell(6);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				String e=cell.getStringCellValue();
				if(e.contains(",")){
					g_T=Double.parseDouble(e.substring(0,e.indexOf(",")));
				}else if(!e.contains("-")){
					//cell.setCellType(cell.CELL_TYPE_NUMERIC);
					g_T = Double.parseDouble(e);
				}
			}else{
				g_T=0;
			}

			cell = r.getCell(7);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Diameter = cell.getStringCellValue();
			}else{
				Diameter="";
			}

			cell = r.getCell(8);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Location = cell.getStringCellValue();
			}else{
				Location="";
			}

			cell = r.getCell(9);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Band = cell.getStringCellValue();
			}else{
				Band="";
			}

			cell = r.getCell(10);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Coordinates = cell.getStringCellValue();
			}else{
				Coordinates="";
			}
			if(Band.contains(freq)){
				
				matches.add(new groundStation(Name,	EIRP_Further, Uplink,	Downlink,	Gain,	Diameter,	Location,	Band,	Coordinates,EIRP, g_T));
				matchNames.add(Name);
			}
		}
	}

	public ArrayList<groundStation> getStations(){
		return matches;
	}
	public ArrayList<String> getStatNames(){
		return matchNames;
	}
}
