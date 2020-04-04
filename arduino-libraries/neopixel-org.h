#include <stdio.h>
#include <ArduinoJson.h>

int setpixelAlphabet(string alpha, int pixel, uint32_t color){
	int j = pixel;
	switch(alpha){
		case "I":
			for(int i=0; i<4; i++){
				pixels.setPixelColor(j, color);	
				j = j + 8;
    				//delay(50);		
			}
	}
}
//##############################################
#include <Adafruit_NeoPixel.h>
#define NUM_PIXELS 64

Adafruit_NeoPixel pixels(64, D3, NEO_GRB | NEO_KHZ800);
void setup() {
  pixels.begin();
  pixels.setBrightness(100);
}

void setPixelAlpha(int pixel, uint32_t color){
  int j = pixel;
  for (int i = 0; i < 4; i++) {
    pixels.setPixelColor(j, color);
    j = j + 8;
  }
}

void loop() {
  setPixelAlpha(30,pixels.Color(100, 100, 100));
  pixels.show();
}
//##############################################
#include <Adafruit_GFX.h>
#include <Adafruit_NeoMatrix.h>
#include <Adafruit_NeoPixel.h>
#define PIN 3

Adafruit_NeoMatrix matrix = Adafruit_NeoMatrix(32, 8, PIN,
  NEO_MATRIX_BOTTOM    + NEO_MATRIX_RIGHT +
  NEO_MATRIX_COLUMNS + NEO_MATRIX_ZIGZAG,
  NEO_GRB            + NEO_KHZ800);
 
const uint16_t colors[] = {
  matrix.Color(255, 0, 0), matrix.Color(0, 255, 0), matrix.Color(255, 255, 0),matrix.Color(0, 0, 255), matrix.Color(255, 0, 255), matrix.Color(0, 255, 255), matrix.Color(255, 255, 255)};
 
void setup() {
  matrix.begin();
  matrix.setTextWrap(false);
  matrix.setBrightness(5);
  matrix.setTextColor(colors[0]);
}
 
int x    = matrix.width();
int pass = 0;
 
void loop() {
  matrix.fillScreen(0);
  matrix.setCursor(x, 0);
  matrix.print(F("Test"));
 
  if(--x < -30) {
    x = matrix.width();
 
    if(++pass >= 8) pass = 0;
    matrix.setTextColor(colors[pass]);
  }
  matrix.show();
  delay(30);
}



