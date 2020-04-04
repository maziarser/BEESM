#include <stdio.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <ArduinoJson.h>

//it should add to ~/Arduino/hardware/esp8266com/esp8266/libraries/<folder name>
//in order to parse the json string --> need to download ArduinoJson from https://github.com/bblanchon/ArduinoJson/ and put it in ~/Arduino/hardware/esp8266com/esp8266/libraries/
//only working inside the BAALL
void setup_connection() {
  Serial.begin(115200);    //Serial connection
  while (!Serial) continue; //for get function
  WiFi.begin("Cartesium-Local", "");   //WiFi connection

  while (WiFi.status() != WL_CONNECTED) {  //Wait for the WiFI connection completion

    delay(500);
    Serial.println("Waiting for connection");

  }
}
//#########################################
//loop helper post
void loop_helper_post(HTTPClient &http) {
  int httpCode = http.POST("");   //Send the request
  String payload = http.getString();   //Get the response payload
  http.end();
}
//#########################################
//loop helper get
String loop_helper_get(HTTPClient &http) {
  int httpCode = http.GET();   //Send the request
  String payload = http.getString();    //Get the response payload
  http.end();  //Close connection
  return payload;
}

String pars_status(String &payload) {
  String json = payload;
  DynamicJsonDocument jsonBuffer;
  DeserializationError error = deserializeJson(jsonBuffer, json);
  if (error) {
    //TODO if error happend
  }
  JsonObject root = jsonBuffer.as<JsonObject>();
  String name = root["name"];
  String status = root["status"];
  return status;
}
//#########################################
int flag_connect = 0;
void connect_server() {
  flag_connect = 1;
}
//#########################################
//get status
int get_status_switchable(String name) {
  delay(500);
  int statusInt = 0;
  if ((WiFi.status() == WL_CONNECTED) && (flag_connect == 1)) { //Check WiFi connection status
    HTTPClient http;    //Declare object of class HTTPClient
    http.begin("http://baall-server-2.informatik.uni-bremen.de/api/item/" + name);    //Specify request destination
    http.addHeader("Content-Type", "text/plain");  //Specify content-type header
    String payload = loop_helper_get(http);
    String status = pars_status(payload);

    if (status == "off") {
      statusInt = 0;
    } else if (status == "on") {
      statusInt = 1;
    }
    return statusInt;
  } else {
    Serial.println("Error in WiFi connection and/or server connection");
  }
}
//-----------------------------------------
int get_status_dimmable(String name) {
  delay(500);
  int statusInt = 0;
  if ((WiFi.status() == WL_CONNECTED) && (flag_connect == 1)) { //Check WiFi connection status
    HTTPClient http;    //Declare object of class HTTPClient
    http.begin("http://baall-server-2.informatik.uni-bremen.de/api/item/" + name);     //Specify request destination
    http.addHeader("Content-Type", "text/plain");  //Specify content-type header

    String payload = loop_helper_get(http);
    String status = pars_status(payload);

    if (status == "0") {
      statusInt = 0;
    } else if (status != "0") {
      statusInt = status.toInt();
    }
    return statusInt;
  } else {
    Serial.println("Error in WiFi connection and/or server connection");
  }
}
//-----------------------------------------
int get_status_sensor(String name) {
  delay(500);
  int statusInt = 0;
  if ((WiFi.status() == WL_CONNECTED) && (flag_connect == 1)) { //Check WiFi connection status
    HTTPClient http;    //Declare object of class HTTPClient
    http.begin("http://baall-server-2.informatik.uni-bremen.de/api/item/" + name);     //Specify request destination
    http.addHeader("Content-Type", "text/plain");  //Specify content-type header
    String payload = loop_helper_get(http);
    String status = pars_status(payload);
    statusInt = status.toInt();
    return statusInt;
  } else {
    Serial.println("Error in WiFi connection and/or server connection");
  }
}
//-----------------------------------------
int get_status_TVprogram(String name) {
  delay(500);
  int statusInt = 0;
  if ((WiFi.status() == WL_CONNECTED) && (flag_connect == 1)) { //Check WiFi connection status
    HTTPClient http;    //Declare object of class HTTPClient
    http.begin("http://baall-server-2.informatik.uni-bremen.de/api/item/" + name);     //Specify request destination
    http.addHeader("Content-Type", "text/plain");  //Specify content-type header
    String payload = loop_helper_get(http);
    String status = pars_status(payload);
    if (status == "") {
      statusInt = 0;
    } else if (status != "") {
      statusInt = 1;
    }
    return statusInt;
  } else {
    Serial.println("Error in WiFi connection and/or server connection");
  }
}
//-----------------------------------------
int get_status_rgb(String name) {
  delay(500);
  int statusInt = 0;
  if ((WiFi.status() == WL_CONNECTED) && (flag_connect == 1)) { //Check WiFi connection status
    HTTPClient http;    //Declare object of class HTTPClient
    http.begin("http://baall-server-2.informatik.uni-bremen.de/api/item/" + name);     //Specify request destination
    http.addHeader("Content-Type", "text/plain");  //Specify content-type header
    String payload = loop_helper_get(http);
    String status = pars_status(payload);
    if (status == "0:0:0") {
      statusInt = 0;
    } else if (status != "0:0:0") {
      statusInt = 1;
    }
    return statusInt;
  } else {
    Serial.println("Error in WiFi connection and/or server connection");
  }
}
//#########################################
//get status
int get_emotions() {
  delay(500);
  int max = 0;
  int emotion = 0;
  if ((WiFi.status() == WL_CONNECTED) && (flag_connect == 1)) {
    HTTPClient http;
    http.begin("http://baall-server-2.informatik.uni-bremen.de/bathfaceall.txt");

    http.addHeader("Content-Type", "text/plain");
    if ( http.GET() == HTTP_CODE_OK) {
      String payload = http.getString();
      int i = 0;
      int status[7];
      int idx = payload.indexOf('\n');

      while ( idx != -1 ) {
        status[i++] = atoi(payload.substring(0, idx).c_str()); //has all numbers as an int array
        if (i == 6) {
          payload = payload.substring(idx + 1);
          status[i++] = atoi(payload.c_str());
          break;
        }
        else {
          payload = payload.substring(idx + 1);
          idx = payload.indexOf('\n');
        }
      }
      for (int j = 0; j <= 6; j++) {
        int emo = status[j];
        if (emo > max) {
          if (emo == status[0]) {
            emotion = 1;
          } if (emo == status[1]) {
            emotion = 2;
          } if (emo == status[2]) {
            emotion = 3;
          } if (emo == status[3]) {
            emotion = 4;
          } if (emo == status[4]) {
            emotion = 5;
          } if (emo == status[5]) {
            emotion = 6;
          } if (emo == status[6]) {
            emotion = 7;
          }
          max = emo;

        }
      }
    }

  } else {
    Serial.println("Error in WiFi connection and/or server connection");
  }
  return emotion;
}
//#########################################
//set status
void set_status(String name, String value) {
  delay(1000);
  if (value == "open") {
    value = "on";
  } else if (value == "close") {
    value = "off";
  }

  if ((WiFi.status() == WL_CONNECTED) && (flag_connect == 1)) { //Check WiFi connection status
    HTTPClient http;    //Declare object of class HTTPClient
    http.begin("http://baall-server-2.informatik.uni-bremen.de/api/set?id=" + name + "&value=" + value); //Specify request destination
    http.addHeader("Content-Type", "text/plain");  //Specify content-type header
    loop_helper_post(http);
  } else {
    Serial.println("Error in WiFi connection and/or server connection");
  }
}
//#########################################
//set statusDimmer
void set_statusDimmer(String name, String value) {
  delay(1000);
  if (value == "open") {
    value = "on";
  } else if (value == "close") {
    value = "off";
  }

  if ((WiFi.status() == WL_CONNECTED) && (flag_connect == 1)) { //Check WiFi connection status
    HTTPClient http;    //Declare object of class HTTPClient
    http.begin("http://baall-server-2.informatik.uni-bremen.de/api/set?id=" + name + "&value=" + value); //Specify request destination
    http.addHeader("Content-Type", "text/plain");  //Specify content-type header
    loop_helper_post(http);
  } else {
    Serial.println("Error in WiFi connection and/or server connection");
  }
}
//#########################################
//set statusRGB
void set_statusRgb(String name, int valueR, int valueG, int valueB) {
  delay(1000);
  if ((WiFi.status() == WL_CONNECTED) && (flag_connect == 1)) { //Check WiFi connection status
    HTTPClient http;    //Declare object of class HTTPClient
    http.begin("http://baall-server-2.informatik.uni-bremen.de/api/setRGB?id=" + name + "&r=" + valueR + "&g=" + valueG + "&b=" + valueB); //Specify request destination
    http.addHeader("Content-Type", "text/plain");  //Specify content-type header
    loop_helper_post(http);
  } else {
    Serial.println("Error in WiFi connection and/or server connection");
  }
}
//#########################################
//set statusTV
void set_TVprogram(String name, int value) {
  delay(1000);
  String namePro = "tvProgram";
  String nameVol = "tvVolume";
  if (name == "Pause") {
    name = "STOP";
  }
  if ((WiFi.status() == WL_CONNECTED) && (flag_connect == 1)) { //Check WiFi connection status
    HTTPClient http;    //Declare object of class HTTPClient
    http.begin("http://baall-server-2.informatik.uni-bremen.de/api/set?id=" + namePro + "&value=" + name); //Specify request destination
    http.addHeader("Content-Type", "text/plain");  //Specify content-type header
    loop_helper_post(http);
    http.begin("http://baall-server-2.informatik.uni-bremen.de/api/set?id=" + nameVol + "&value=" + value); //Specify request destination
    http.addHeader("Content-Type", "text/plain");  //Specify content-type header
    loop_helper_post(http);
  } else {
    Serial.println("Error in WiFi connection and/or server connection");
  }
}
