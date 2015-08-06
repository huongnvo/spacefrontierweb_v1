package instruments;
//wavelength table on left side of instruments page


import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Insets;
import java.awt.event.*;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.ArrayList;

import javax.imageio.ImageIO;
import javax.swing.*;

public class Measurement extends SearchParameter {

	//arranges buttons in order of wavelength vertically
	public Measurement(){
		
		this.setSize(200, 525);
		this.setLayout(null);
		Color c=new Color(238,238,238);
		
		JButton gamma=new JButton("Gamma Ray");
		gamma.setBounds(100,458,80,67);
		gamma.setMargin(new Insets(0,0,0,0));
		this.add(gamma);
		gamma.addActionListener(this);
		gamma.setBackground(c);
		gamma.setName("gamma ray");

		
		JButton xRay=new JButton("X-ray");
		xRay.setBounds(100,383,80,75);
		xRay.setMargin(new Insets(0,0,0,0));
		this.add(xRay);
		xRay.addActionListener(this);
		xRay.setBackground(c);
		xRay.setName("x-ray");
		
		JButton uv=new JButton("Ultraviolet");
		uv.setBounds(100,310,80,73);
		uv.setMargin(new Insets(0,0,0,0));
		this.add(uv);
		uv.addActionListener(this);
		uv.setBackground(c);
		uv.setName("UV");
		
		JButton visible=new JButton("Visible");
		visible.setBounds(100,295,80,15);
		visible.setMargin(new Insets(0,0,0,0));
		this.add(visible);
		visible.addActionListener(this);
		visible.setBackground(c);
		visible.setName("visible");
		
		JButton nearinfra=new JButton("near-IR");
		nearinfra.setBounds(100,285,80,10);
		nearinfra.setMargin(new Insets(0,0,0,0));
		this.add(nearinfra);
		nearinfra.addActionListener(this);
		nearinfra.setBackground(c);
		nearinfra.setName("near-IR");
		
		JButton shortinfra=new JButton("short-IR");
		shortinfra.setBounds(100,275,80,10);
		shortinfra.setMargin(new Insets(0,0,0,0));
		this.add(shortinfra);
		shortinfra.addActionListener(this);
		shortinfra.setBackground(c);
		shortinfra.setName("short-IR");
		
		JButton midinfra=new JButton("mid-IR");
		midinfra.setBounds(100,260,80,15);
		midinfra.setMargin(new Insets(0,0,0,0));
		this.add(midinfra);
		midinfra.addActionListener(this);
		midinfra.setBackground(c);
		midinfra.setName("mid-IR");
		
		JButton longinfra=new JButton("Long-IR");
		longinfra.setBounds(100,247,80,13);
		longinfra.setMargin(new Insets(0,0,0,0));
		this.add(longinfra);
		longinfra.addActionListener(this);
		longinfra.setBackground(c);
		longinfra.setName("long-IR");
		
		JButton farinfra=new JButton("Far-IR");
		farinfra.setBounds(100,182,80,65);
		farinfra.setMargin(new Insets(0,0,0,0));
		this.add(farinfra);
		farinfra.addActionListener(this);
		farinfra.setBackground(c);
		farinfra.setName("far-IR");

		JButton microwave=new JButton("Microwave");
		microwave.setBounds(100,75,80,107);
		microwave.setMargin(new Insets(0,0,0,0));
		this.add(microwave);
		microwave.addActionListener(this);
		microwave.setBackground(c);
		microwave.setName("microwave");
		
		JButton radiowave=new JButton("Radiowave");
		radiowave.setBounds(100,0,80,75);
		radiowave.setMargin(new Insets(0,0,0,0));
		this.add(radiowave);
		radiowave.addActionListener(this);
		radiowave.setBackground(c);
		radiowave.setName("radio");

		PicPanel pic=new PicPanel("wavelengthRuler.jpg");
		pic.setBounds(0, 0, pic.getPreferredSize().width, pic.getPreferredSize().height);
		this.add(pic);
		this.setVisible(true);
	}

	//for the measurement ruler on the page
	class PicPanel extends JPanel{

		private BufferedImage image;
		private int w,h;
		public PicPanel(String fname){

			//reads the image
			try {
			//	BufferedReader f=new BufferedReader(new InputStreamReader(this.getClass().getResourceAsStream("yourfile.txt")));
				image = ImageIO.read(this.getClass().getResourceAsStream(fname));
				w = image.getWidth();
				h = image.getHeight();

			} catch (IOException ioe) {
				System.out.println("Could not read in the pic");
				System.exit(0);
			}
		}

		public Dimension getPreferredSize() {
			return new Dimension(w,h);
		}

		//this will draw the image
		public void paintComponent(Graphics g){
			super.paintComponent(g);
			g.drawImage(image,0,0,this);
		}

	}
}
