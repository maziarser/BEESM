### Welcome to BEESM
BEESM is a Linux-friendly educational **Block-based End-user programming tool for SMart 
Environments** for 
[Bremen Ambient Assisted Living Lab-BAALL](https://www.dfki.de/web/technologien-anwendungen/living-labs/bremen-ambient-assisted-living-lab-baall/), [TurtleBot3](http://wiki.ros.org/turtlebot3), and [Arduino](http://www.arduino.cc/).

BEESM is based on [Blockly](https://developers.google.com/blockly/), 
the web-based, graphical programming environment. 
BEESM Provides static type language blocks and code generators for BAALL, 
TurtleBot3 and Arduino programming.

### Features
1. Programming BAALL, TurtleBot3, and Arduino with visually drag and drop code blocks
2. programming TurtleBot3 based on [ROS](http://wiki.ros.org/) with visually drag and 
drop code blocks
3. Generate fully compatible Arduino source code, using 
[BlocklyDuino](https://github.com/BlocklyDuino/BlocklyDuino) framework 

BEESM is still under development and a few features are not yet implemented. 
It is currently tested under Linux Ubuntu with Python 2.7.

### Run locally on your computer
If you want to install it locally, get the detailed instruction in 
`BEESM_Installation Process.txt`.

The preffered way is to put the BEESM/web folder into a web server, 
such as [XAMMPP](https://www.apachefriends.org/index.html) and open the url 
like http://localhost:8012/BEESM/main/index.php for use.

### Integrated BAALL upload
You need to connect to the [BAALL](https://www.dfki.de/web/technologien-anwendungen/living-labs/bremen-ambient-assisted-living-lab-baall/) 
web server to upload the code to it.

### Integrated TurtleBot3 upload
You can run a mini webserver 
which is also based on [CherryPy](https://cherrypy.org/) that uses
the understandable functions for [ROS](http://wiki.ros.org/) to 
upload the code to a connected TurtleBot3.
Copy this command from the BEESM root folder and run it in Linux Terminal:

```
python ros_web_server.py
```
All attributes are available at: http://localhost:8099/, and you can access 
BEESM on [http://127.0.0.1:8099/](http://127.0.0.1:8099/)

### Integrated Arduino upload
To avoid manually pasting code to the Arduino IDE, you can run a mini webserver 
which is based on [CherryPy](https://cherrypy.org/) that uses
the [Arduino IDE](https://www.arduino.cc/en/Main/Software) to 
upload the code to a connected Arduino/WeMos boards in Linux systems.
Copy this command from the BEESM root folder and run it in Linux Terminal:

```
python arduino_web_server.py
```
Please specify the portname  `--/dev/ttyACM0` 
(or it will search and guess which port to use)
When you see "Blockly-Arduino can now be accessed at 
http://127.0.0.1:8090", it means that the connection stablishied properly. 
Then you can access BEESM on [http://127.0.0.1:8090/](http://127.0.0.1:8090/)

### Usage
1. Open browser to BEESM, drag and drop blocks to Author programs for BAALL, 
TurtleBot3, and Arduino/WeMos boards
2. Select the 'BAALL' tab to program BAALL and press 'Run Code' button.
3. Run Ros on your Linux System and select the 'TurtleBot3' tab to program TurtleBot3 and 
press 'Run Code' button. 
4. Select the 'Arduino' tab to program Arduino/WeMos boards and 
press the 'Upload Code' button. Also, you can press 'Code Modifier' button to type 
Arduino code and then press 'Upload Code' button.

### Authors and Contributors
Mazyar Seraj (@maziarser). 

Thanks to [Anke Koenigschulte](https://github.com/AKoenigschulte/) from [CPS,DFKI GmbH](https://www-cps.hb.dfki.de/home). 

BEESM developed in the context of project [SMILE](https://www.smile-smart-it.de/) which was 
funded by the [German Federal Ministry for Education and Research - BMBF](https://www.bmbf.de/en/index.html), grant number 01FP1613.

### Credit
BEESM has been inspired by [BlocklyDuino](https://github.com/BlocklyDuino/BlocklyDuino) and 
[robot_blockly](https://github.com/erlerobot/robot_blockly). 

Blockly original source is Copyright of Google Inc. [Blockly](https://developers.google.com/blockly/).

In order to highlight the codes, we used [CodeHighlighter](https://highlightjs.org/) and [CodeMirror](https://codemirror.net/).

### License
Copyright (c) 2020 Cyber-Physical Systems (CPS), DFKI GmbH, and Group of Computer Architecture (AGRA). 
All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. 
You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0.

The full document can be found in the LICENSE files.


