package instruments;
//reads through spreadsheet to find possible matches



import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

public class comm_search {

	private ArrayList<antenna> matchAntennas;
	private ArrayList<String>matchAntennaNames;
	private ArrayList<antenna> matchRadio;
	private ArrayList<String>matchRadioNames;

	public comm_search(){
		matchAntennas = new ArrayList<antenna>();
		matchAntennaNames = new ArrayList<String>();
		matchRadio = new ArrayList<antenna>();
		matchRadioNames = new ArrayList<String>();
	}

	public void lookForAntenna(String freq){

		Workbook wb = null;

		//1. Open the file
		try {
			wb = WorkbookFactory.create(this.getClass().getResourceAsStream("CubeSatPartsList.xlsx"));
		} catch (InvalidFormatException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		if(wb==null){
			System.out.print("adsasdfa");
		}
		
		//communication instrument info is at sheet 2
		Sheet sheet = wb.getSheetAt(2);

		//read in all communication part values
		Cell cell=null;
		String Category, Instrument,	Manufacturer, link, TRL,	Mass_Further,cost,	lifetime, Power_Further,	VolDim,	Volume_Further,	Frequency,	Data,	tPow_Further,	Beamwidth,	Gain_Further, obj, mode,rad,	therm,	opp, Extra;
		double mass, pow, vol, recsens, tpow,gain, t_l, t_h;
	
		antenna stat;
		Row r=null;
		for(int i=1; i<30; i++){


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
				Instrument = cell.getStringCellValue();
			}else{
				Instrument="";
			}

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
				mass = cell.getNumericCellValue();
			}else{
				mass=0;
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
				pow = cell.getNumericCellValue();
			}else{
				pow=0;
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
				vol = cell.getNumericCellValue();
			}else{
				vol =0;
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
				Frequency = cell.getStringCellValue();
			}else{
				Frequency="";
			}

			cell = r.getCell(13);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Data = cell.getStringCellValue();
			}else{
				Data="";
			}

			cell = r.getCell(14);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				recsens = cell.getNumericCellValue();
			}else{
				recsens =0;
			}

			cell = r.getCell(15);
			if(cell!=null){
				tpow = cell.getNumericCellValue();
			}else{
				tpow =0;
			}

			//see			
			cell = r.getCell(16);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				tPow_Further = cell.getStringCellValue();
			}else{
				tPow_Further="";
			}

			cell = r.getCell(17);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Beamwidth = cell.getStringCellValue();
			}else{
				Beamwidth="";
			}

			cell = r.getCell(18);
			if(cell!=null){
				gain = cell.getNumericCellValue();
			}else{
				gain =0;
			}

			cell = r.getCell(19);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				Gain_Further = cell.getStringCellValue();
			}else{
				Gain_Further="";
			}

			cell = r.getCell(20);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				lifetime = cell.getStringCellValue();
			}else{
				lifetime="";
			}

			cell = r.getCell(21);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				t_l = cell.getNumericCellValue();
			}else{
				t_l=0;
			}

			cell = r.getCell(22);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_NUMERIC);
				t_h = cell.getNumericCellValue();
			}else{
				t_h=0;
			}

			cell = r.getCell(23);
			if(cell!=null){
				//System.out.print(cell.getStringCellValue());
				therm = cell.getStringCellValue();
			}else{
				therm="";
			}
			
			cell = r.getCell(24);
			if(cell!=null){
				cell.setCellType(Cell.CELL_TYPE_STRING);
				cost = cell.getStringCellValue();
			}else{
				cost="";		
			}
			
			//first check if the part is an antenna
			if(Category.contains("Antenna")){
				//then checks if the part can measure the user selected frequency
				if(Frequency.contains(freq)||Instrument.contains(freq)){
					stat=new antenna(Category, Instrument,	Manufacturer, link, TRL,	Mass_Further,	Power_Further,	VolDim,	Volume_Further,	Frequency,	Data,	tPow_Further,	Beamwidth,	Gain_Further, therm,	mass, pow, vol, recsens, tpow,gain);
					matchAntennas.add(stat);
					//System.out.print(matchAntennas.);
					matchAntennaNames.add(stat.getName());
				}
			}else{
				
				//if it isn't it is an antenna it is a radio
				//but you also need to check if it can read the user selected frequency
				if(Frequency.contains(freq)||Instrument.contains(freq)){
					stat=new antenna(Category, Instrument,	Manufacturer, link, TRL,	Mass_Further,	Power_Further,	VolDim,	Volume_Further,	Frequency,	Data,	tPow_Further,	Beamwidth,	Gain_Further, therm,	mass, pow, vol, recsens, tpow,gain);
					matchRadio.add(stat);
					matchRadioNames.add(stat.getName());
				}
			}
		}
	}

	//antenna match results
	public ArrayList<antenna> getStations(){
		return matchAntennas;
	}

	public ArrayList<String> getStatNames(){
		return matchAntennaNames;

	}

	//radio match results
	public ArrayList<antenna> getRadios(){
		return matchRadio;
	}

	public ArrayList<String> getRadioNames(){
		return matchRadioNames;
	}
}
