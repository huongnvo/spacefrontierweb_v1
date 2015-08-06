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

public class power_search {

	private ArrayList<String>matchNames;
	private ArrayList<power>matches;

	public power_search(String type, double vol, double configu, double sides){

		matchNames=new ArrayList<String>();
		matches=new ArrayList<power>();

		Workbook wb = null;

		//1. Open the file
		try {
			wb = WorkbookFactory.create(this.getClass().getResourceAsStream("CubeSatPartsList.xlsx"));
		} catch (InvalidFormatException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		Sheet sheet = wb.getSheetAt(4);
		Cell cell=null;
		String Power_System, energy_storage,	Name,	Manufacturer,	link,	TRL,	Mass_Further,	Pow_Further,	VolDim,	Vol_Further, Efficiency,	obj, radiation,	therm, Life;
		double both;	
		double Mass, config, wings, Power, t_l, t_h, Vol;

		power p;

		Row r=null;

		for(int i=1; i<40; i++){
			r=sheet.getRow(i);

			cell = r.getCell(0);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Power_System = cell.getStringCellValue();
			}else{
				Power_System="";
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
				TRL = cell.getStringCellValue();
			}else{
				TRL="";
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
				Pow_Further = cell.getStringCellValue();
			}else{
				Pow_Further="";
			}

			cell = r.getCell(9);
			if(cell!=null){
				//cell.setCellType(Cell.CELL_TYPE_STRING);
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				Vol = cell.getNumericCellValue();
				//System.out.print(Vol);

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
				Vol_Further = cell.getStringCellValue();
			}else{
				Vol_Further="";
			}

			cell = r.getCell(12);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Efficiency = cell.getStringCellValue();
			}else{
				Efficiency="";
			}

			cell = r.getCell(13);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				obj = cell.getStringCellValue();
			}else{
				obj="";
			}

			cell = r.getCell(14);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				therm = cell.getStringCellValue();
			}else{
				therm="";
			}

			cell = r.getCell(15);
			if(cell!=null){
				//cell.setCellType(Cell.CELL_TYPE_STRING);
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);

				t_l = cell.getNumericCellValue();
			}else{
				t_l = -300;
			}

			cell = r.getCell(16);
			if(cell!=null){
				//cell.setCellType(Cell.CELL_TYPE_STRING);
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);

				t_h = cell.getNumericCellValue();
			}else{
				t_h = -300;
			}
			cell = r.getCell(17);
			if(cell!=null){
				//cell.setCellType(Cell.CELL_TYPE_STRING);
				cell.setCellType(Cell.CELL_TYPE_STRING);

				energy_storage = cell.getStringCellValue();
			}else{
				energy_storage = "";
			}
			cell = r.getCell(18);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				config = cell.getNumericCellValue();
			}else{
				config=0;
			}

			cell = r.getCell(19);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				wings = cell.getNumericCellValue();
			}else{
				wings=0;
			}

			if(type.contains("Solar Panel")&&Power_System.contains(type)&&vol==Vol&&config==configu&&sides==sides){
				matchNames.add(Name);
				matches.add(new power(Power_System,	Name,	Manufacturer,	link,	energy_storage, TRL,	Mass_Further,	Pow_Further,	VolDim,	Vol_Further, Efficiency,	obj, therm,  config, wings, Mass, Power, t_l, t_h, Vol));
			}
			else if(type.equals("Battery")&&Power_System.contains(type)){
				matchNames.add(Name);
				matches.add(new power(Power_System,	Name,	Manufacturer,	link,	energy_storage, TRL,	Mass_Further,	Pow_Further,	VolDim,	Vol_Further, Efficiency,	obj, therm,  config, wings, Mass, Power, t_l, t_h, Vol));
			}
			else if(type.equals("Power Control Unit")&&Power_System.contains(type)){
				matchNames.add(Name);
				matches.add(new power(Power_System,	Name,	Manufacturer,	link,	energy_storage, TRL,	Mass_Further,	Pow_Further,	VolDim,	Vol_Further, Efficiency,	obj, therm,  config, wings, Mass, Power, t_l, t_h, Vol));
			}
		}
	}
	
	public ArrayList<power> getMatches(){
		return matches;
	}

	public ArrayList<String> getMatchNames(){
		return matchNames;

	}
	public static void main(String[]args){
		//new power_search();
	}
}
