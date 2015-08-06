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

public class strucSearch {
	private ArrayList<String>matchStrucNames;
	private ArrayList<structurePart>Strucmatches;
	private ArrayList<String>matchThermNames;
	private ArrayList<structurePart>Thermmatches;
	private ArrayList<String>matchDepNames;
	private ArrayList<structurePart>Depmatches;

	public strucSearch(double vol){

		matchStrucNames=new ArrayList<String>();
		Strucmatches=new ArrayList<structurePart>();
		
		Thermmatches=new ArrayList<structurePart>();
		matchThermNames=new ArrayList<String>();
		
		Depmatches=new ArrayList<structurePart>();
		matchDepNames=new ArrayList<String>();

		Workbook wb = null;

		//1. Open the file
		try {
			wb = WorkbookFactory.create(this.getClass().getResourceAsStream("CubeSatPartsList.xlsx"));
		} catch (InvalidFormatException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		Sheet sheet = wb.getSheetAt(3);

		Cell cell=null;

		structurePart ts;
		
		String Type,	Name,	Obj, Manufacturer, link,	Heritage,	Mass_Further,	Power_Further,	VolDim,	Volume_Further,	AoC,	Oknow,	Data,	Energy_Storage,	Frequency,	Therm,	Lifetime;										
		double Mass, Power, Vol;


		Row r=null;

		for(int i=1; i<36; i++){
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
			//
			cell = r.getCell(2);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Manufacturer = cell.getStringCellValue();
			}else{
				Manufacturer="";
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
				Heritage = cell.getStringCellValue();
			}else{
				Heritage="";
			}

			cell = r.getCell(5);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				Mass = cell.getNumericCellValue();
			}else{
				Mass = 0;
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
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				Power = cell.getNumericCellValue();
			}else{
				Power = 0;
			}

			cell = r.getCell(8);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Power_Further = cell.getStringCellValue();
			}else{
				Power_Further="";
			}

			cell = r.getCell(9);
			if(cell!=null){
				//cell.setCellType(Cell.CELL_TYPE_STRING);
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				Vol = cell.getNumericCellValue();
				System.out.print(Vol);

			}else{
				Vol = 0;
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
				Volume_Further = cell.getStringCellValue();
			}else{
				Volume_Further="";
			}

			cell = r.getCell(12);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Obj = cell.getStringCellValue();
			}else{
				Obj ="";
				
			}
			
			if(Type.contains("Bus")&&Vol==vol){
				Strucmatches.add(new structurePart(Type,	Name,	Manufacturer, link,	Heritage,	Mass_Further,	Power_Further,	VolDim,	Volume_Further,	Obj, Mass, Power, Vol));
				matchStrucNames.add(Name);
			}
			//uncomment when searching for thermal
			/*if(Type.contains("Thermal")){
				Thermmatches.add(new structurePart(Type,	Name,	Manufacturer, link,	Heritage,	Mass_Further,	Power_Further,	VolDim,	Volume_Further,	Obj, Mass, Power, Vol));
				matchThermNames.add(Name);
			}*/
			if(Type.contains("Deployer")){
				Depmatches.add(new structurePart(Type,	Name,	Manufacturer, link,	Heritage,	Mass_Further,	Power_Further,	VolDim,	Volume_Further,	Obj, Mass, Power, Vol));
				matchDepNames.add(Name);
			
			}
		}
	}
	
	public ArrayList<structurePart> getStructures(){
		return Strucmatches;
	}

	public ArrayList<String> getStrucNames(){
		return matchStrucNames;

	}
	
	public ArrayList<structurePart> getDeployers(){
		return Depmatches;
	}

	public ArrayList<String> getDepNames(){
		return matchDepNames;

	}

	public ArrayList<structurePart> getTherm(){
		return Thermmatches;
	}

	public ArrayList<String> getThermNames(){
		return matchThermNames;
	}
	
}
