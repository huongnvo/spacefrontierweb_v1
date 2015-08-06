    package instruments;
//reads through spreadsheet to find possible matches


import java.io.*;
import java.util.ArrayList;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.*;

public class cdhs__search {

	private ArrayList<String>matchNames;
	private ArrayList<cdhs>matches;

	public cdhs__search(double memory, double throughput, double mips){

		matchNames=new ArrayList<String>();
		matches=new ArrayList<cdhs>();

		Workbook wb = null;

		//1. Open the file
		try {
			wb = WorkbookFactory.create(this.getClass().getResourceAsStream("CubeSatPartsList.xlsx"));
		} catch (InvalidFormatException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		//cdhs info is at sheet 7
		Sheet sheet = wb.getSheetAt(7);

		//read in all cdhs part values
		Cell cell=null;
		String Type,	Name,	Manufacturer,	Link,	Heritage,	Mass_Further,	Power_Further,	Proportions,	Volume_Further,	Processing_Further,	Memory,		Obj, cost;														
		double Mass, Power, Volume, MIPS, MHz, t_l, t_h, mem;

		power p;

		Row r=null;

		for(int i=1; i<16; i++){
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
				Link = cell.getStringCellValue();
			}else{
				Link="";
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
				Volume = cell.getNumericCellValue();
				//System.out.print(Vol);

			}else{
				Volume = 0;
			}

			cell = r.getCell(10);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Proportions = cell.getStringCellValue();
			}else{
				Proportions="";
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
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				MIPS = cell.getNumericCellValue();
			}else{
				MIPS = 0;
			}

			cell = r.getCell(13);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				MHz = cell.getNumericCellValue()*10E6;
			}else{
				MHz = 0;
			}

			cell = r.getCell(14);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Processing_Further = cell.getStringCellValue();
			}else{
				Processing_Further="";
			}

			cell = r.getCell(15);
			if(cell!=null){
				//cell.setCellType(Cell.CELL_TYPE_STRING);
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);

				mem = cell.getNumericCellValue();
			}else{
				mem = -300;
			}
			
			cell = r.getCell(16);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Memory = cell.getStringCellValue();
			}else{
				Memory ="";
			}

			cell = r.getCell(17);
			if(cell!=null){
				//cell.setCellType(Cell.CELL_TYPE_STRING);
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);

				t_l = cell.getNumericCellValue();
			}else{
				t_l = -300;
			}

			cell = r.getCell(18);
			if(cell!=null){
				//cell.setCellType(Cell.CELL_TYPE_STRING);
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);

				t_h = cell.getNumericCellValue();
			}else{
				t_h = -300;
			}
			cell = r.getCell(19);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Obj = cell.getStringCellValue();
			}else{
				Obj="";
			}
			cell = r.getCell(20);
			if(cell!=null){
				
				cell.setCellType(Cell.CELL_TYPE_STRING);
				cost = cell.getStringCellValue();
			}else{
				cost="";
			}
			
			//if the parts memory, throughput and mips fit are all greater than the passed in values,
			//an object is created and added to the match lists
			if((memory>=memory)&&(MHz>=throughput)&&(MIPS>=mips)){
				matches.add(new cdhs(Type,	Name, Manufacturer,	Link,	Heritage,	Mass_Further,	Power_Further, Proportions,	Volume_Further,	Processing_Further,	Memory,	Obj,Mass, Power, Volume, MIPS, MHz, t_l, t_h, mem));
				matchNames.add(Name);
			}
		}
	}

	public ArrayList<String>getmatchNames(){
		return matchNames;
	}
	public ArrayList<cdhs>getMatch(){
		return matches;
	}
}
