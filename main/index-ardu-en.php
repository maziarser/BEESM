<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="myStyle.css">

    <script src="jquery-3.2.1.min.js"></script>
    <!--for code highlighter-->
    <link rel="stylesheet" href="codeHighlighter/styles/default.css">
    <script src="codeHighlighter/highlight.pack.js"></script>

    <!--use codemirror to highlight text area-->
    <script src="codemirror/lib/codemirror.js"></script>
    <link rel="stylesheet" href="codemirror/lib/codemirror.css">
    <script src="codemirror/mode/xml/xml.js"></script>
    <script src="codemirror/mode/php/php.js"></script>
    <script src="codemirror/mode/clike/clike.js"></script>
    <script src="codemirror/mode/clike/clike.js"></script>

    <meta charset="utf-8">
    <title>Blockly: Generating Arduino Code For BAALL</title>
    <script src="../blockly_compressed.js"></script>
    <script src="../blocks_compressed.js"></script>
    <script src="../php_compressed.js"></script>
    <script src="../msg/js/en.js"></script>

    <script src="custom-blocks-ardu.js"></script>
    <script src="../arduino_compressed.js"></script>
    <script type="text/javascript" src="spin.js"></script>
    <script type="text/javascript">
        //storing data when the page is refereshed - total time will be added to the time of example complitance
        // Run on page load
        window.onload = function() {
            // If sessionStorage is storing default values (ex. expTimer_txt), exit the function and do not restore data
            if (sessionStorage.getItem('expTimer_txt') == "expTimer_txt") {
                return;
            }
            // If values are not blank, restore them to the fields
            var expTimer_txt = sessionStorage.getItem('expTimer_txt');
            if (expTimer_txt !== null) $('#expTimer_txt').val(expTimer_txt); //or totalTimer_txt
        }
        // Before refreshing the page, save the data to sessionStorage
        window.onbeforeunload = function() {
            sessionStorage.setItem("expTimer_txt", $('#expTimer_txt').val() + $('#totalTimer_txt').val()); //or totalTimer_txt
        }
    </script>
</head>

<body id="body_main">
<!--TIMERS-->
<div id="timer" style="display: none;">
    Timer WS:
    <font size="4" color="#1D50AB"><span id="timer_ws">0</span></font>
    Timer CODE:
    <font size="4" color="#1D50AB"><span id="timer_code">0</span></font>
    RUN btn:
    <font size="4" color="#1D50AB"><span id="run_btn">0</span></font>
    Generate CODE:
    <font size="4" color="#1D50AB"><span id="generate_btn">0</span></font>
    Timer BAALL:
    <font size="4" color="#1D50AB"><span id="timer_baall">0</span></font>
    Timer Design BAALL:
    <font size="4" color="#1D50AB"><span id="timer_design">0</span></font>
    <textarea id="expTimer_txt"></textarea>
    <!--example timer-->
    <textarea id="totalTimer_txt"></textarea>
    <!--total timer - until they close and open the tool again-->
</div>

<?php
//if page referesh, designBaall should be refereshed too
$pageRefreshed = isset($_SERVER['HTTP_CACHE_CONTROL']) && $_SERVER['HTTP_CACHE_CONTROL'] === 'max-age=0';
if ($pageRefreshed) {
    require_once("clean-design-baall.php");
}
?>
<div id="main">
    <div id="header">
        <div id="leftHeader" style="margin-right:15px">
            <h1 style="float:left; display:inline;">
                <img src="../media/beesm.png" alt="Smiley face" height="42" width="100">
            </h1>
            <button class="btn_lan" id="english" onclick="#" style="float:right;">en</button>
            <button class="btn_lan" id="german" onclick="location.href='index-ardu-de.php';" style="float:right;">de</button>
        </div>
        <div id="rightHeader">
            <button class="btn_task" id="Task03" onclick="" style="float:left; display: none; visibility:hidden;">Task 3</button>
            <button class="btn_task" id="Task02" onclick="" style="float:left; display: none; visibility:hidden;">Task 2</button>
            <button class="btn_task" id="Task01" onclick="" style="float:left; display: none; visibility:hidden;">Task 1</button>
            <span id="no_task" style="float:left; padding: 5px; display: none;"></span>
            <!----------->
            <button class="btn_tabs" id="tb3" onclick="location.href='index-ros-en.php';" style="float:right;">TurtleBot 3</button>
            <button class="btn_tabs" id="ardu" onclick="#" style="float:right;" disabled>Arduino</button>
            <button class="btn_tabs" id="bal" onclick="location.href='index.php';" style="float:right;">BAALL</button>
        </div>
    </div>
    <!----------->
    <!--TIMERS-->
    <script src="myTimer.js"></script>
    <!----------->
    <div id="leftDiv">
        <!--this is too design the Blockly workspace-->
        <div id="blocklyDiv"></div>
        <!----------->
        <div id="codeStyleLeft">
            <h4 id="xmlH4">XML Code</h4><br>
            <textarea id="xmlCode"></textarea>
            <div id="xmlBtn">
                <table id="btnsTable">
                    <tr class="btnsTr">
                        <td class="btnsTd" style="width: 12%;">
                            <h5 style="margin:0px;">File Name:</h5>
                        </td>
                        <td class="btnsTd" style="width: 20%;"><input id="fileName"></input>
                        </td>
                        <td class="btnsTd" style="width: 20%;"><input class="btn" id="saving" type="button" value="Save Blocks" onclick="saveXML(); saveTimer();" /></td>

                        <td align="right" class="btnsTd" style="width: 12%;">
                            <h5 style="margin:0px;">Select File:</h5>
                        </td>
                        <td align="right" class="btnsTd" style="width: 23%;"><input type="file" id="fileToLoad" style="width:180px;"></label>
                        </td>
                        <td align="right" class="btnsTd" style="width: 15%;"><input class="btn" id="loading" type="button" value="Load Blocks" onclick="loadXML()" /></td>
                    </tr>
                </table>
            </div>
            <!--code style left-->
        </div>
        <!--left DIV-->
        <!----------->
        <div class="codeStyleLeft">
            <div id="loader" style="display: none; position: absolute; left: 100px;"></div>
            <h4>Output</h4><br>
            <div id="output-wrapper">
                <div id="output"></div>
            </div>
        </div>
    </div>
    <!----------->
    <div id="rightDiv">
        <div class="codeBtn">
            <button class="btn" id="run" onclick="runCode();secondTime();uploadClick();">Upload Code</button>
            <button class="btn" id="generate" onclick="generateCode(); generate();">Generate Code</button>
            <button class="btn" id="modify" onclick="">Code Modifier</button>
            <button class="btn" id="auto" onclick="autoCode()">AutoCode Generator</button>
            <button class="btn" id="reset" onclick="resetClick()" style="float:right;">Reset</button>
            <button class="btn" id="discard" onclick="discard()" style="float:right;">Discard</button>
        </div>
        <!----------->
        <div class="codeStyleRight">
            <h4 id="hideArdu">Arduino Code</h4><br>
            <div id="arduCode"></div>
        </div>
        <!----------->
        <!--when the user want to modify the code-->
        <div id="modifier" class="codeStyleRight" style="top:40px;">
            <h4>Arduino Code Modifier</h4><br>
            <textarea id="modifyCode"></textarea>
            <div id="modifyCodeDiv" contenteditable="true"></div>
        </div>
        <div class="codeBtn">
            <table id="btnsTable">
                <tr class="btnsTr">
                    <td class="btnsTd" style="width: 10%;">
                        <h5 style="margin:0px;">File Name:</h5>
                    </td>
                    <td class="btnsTd" style="width: 20%;"><input id="fileName_ardu"></input>
                    </td>
                    <td class="btnsTd" style="width: 20%;"><input class="btn" id="saving_ardu" type="button" value="Save Code" onclick="saveArdu();" /></td>
                    <td align="right" class="btnsTd" style="width: 32%;">
                    </td>
                    <td align="right" class="btnsTd" style="width: 35%;">
                    </td>
                </tr>
            </table>
        </div>
        <!----------->
        <!--BAALL frontend-->
        <div class="codeStyleRight" id="show-baall" style="margin-bottom: 0px;">
            <h4>BAALL</h4><br>
            <div id="baall-wrapper">
                <div id="baall">
                    <?php
                    require_once("baall.php");
                    ?>
                </div>
                <!--end div baall-->
            </div>
            <!--end div baall-wrapper-->

            <!--Design BAALL frontend-->
            <div id="designBaall-wrapper" style="display:none;">
                <div id="designBaall">
                    <?php
                    require_once("design-baall.php");
                    ?>
                </div>
                <!--end div designBaall-->
            </div>
            <!--end div designBaall-wroppaer-->
        </div>
        <!--end div show baall-->
    </div>
    <!--end div rightDiv-->
</div>
<!--end div main-->
<!----------->
<!----------->
<xml id="toolbox" style="display: none">
    <category name="Logic" colour="#43A047">
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_null"></block>
        <block type="logic_boolean"></block>
        <block type="logic_ternary"></block>
    </category>
    <category name="Math" colour="#FF9800">
        <block type="math_number"></block>
        <block type="math_arithmetic">
            <value name="A">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
            <value name="B">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
        </block>
        <block type="math_single">
            <value name="NUM">
                <block type="math_number">
                    <field name="NUM">9</field>
                </block>
            </value>
        </block>
        <block type="math_trig">
            <value name="NUM">
                <block type="math_number">
                    <field name="NUM">45</field>
                </block>
            </value>
        </block>
        <block type="math_constant"></block>
        <block type="math_number_property">
            <value name="NUMBER_TO_CHECK">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="math_round">
            <value name="NUM">
                <block type="math_number">
                    <field name="NUM">3.1</field>
                </block>
            </value>
        </block>
        <block type="math_modulo">
            <value name="DIVIDEND">
                <block type="math_number">
                    <field name="NUM">64</field>
                </block>
            </value>
            <value name="DIVISOR">
                <block type="math_number">
                    <field name="NUM">10</field>
                </block>
            </value>
        </block>
        <block type="math_constrain">
            <value name="VALUE">
                <block type="math_number">
                    <field name="NUM">50</field>
                </block>
            </value>
            <value name="LOW">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
            <value name="HIGH">
                <block type="math_number">
                    <field name="NUM">100</field>
                </block>
            </value>
        </block>
        <block type="math_random_int">
            <value name="FROM">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
            <value name="TO">
                <block type="math_number">
                    <field name="NUM">100</field>
                </block>
            </value>
        </block>
        <block type="math_random_float"></block>
        <block type="base_map">
            <value name="DMAX">
                <block type="math_number">
                    <field name="NUM">180</field>
                </block>
            </value>
        </block>
	<block type="lastcheck"></block>
        <block type="resettime"></block>
    </category>
    <category name="Text" colour="#AD1457">
        <block type="text"></block>
        <block type="text_join"></block>
        <block type="text_append">
            <value name="TEXT">
                <block type="text"></block>
            </value>
        </block>
        <block type="text_length">
            <value name="VALUE">
                <block type="text">
                    <field name="TEXT">abc</field>
                </block>
            </value>
        </block>
        <block type="text_isEmpty">
            <value name="VALUE">
                <block type="text">
                    <field name="TEXT"></field>
                </block>
            </value>
        </block>
    </category>
    <category name="Control" colour="#0277BD">
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <block type="math_number">
                    <field name="NUM">10</field>
                </block>
            </value>
        </block>
        <block type="controls_for">
            <value name="FROM">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
            <value name="TO">
                <block type="math_number">
                    <field name="NUM">10</field>
                </block>
            </value>
            <value name="BY">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
        </block>
        <block type="controls_whileUntil"></block>
        <block type="base_delay">
            <value name="DELAY_TIME">
                <block type="math_number">
                    <field name="NUM">1000</field>
                    <</block>
            </value>
        </block>
        <block type="controls_flow_statements"></block>
        <block type="arduino_functions"></block>
    </category>
    <category name="Integers" custom="VARIABLE" colour="#AFB42B"></category>
    <category name="Variables" colour="#827717">
        <block type="define_variable"></block>
        <block type="use_variable"></block>
    </category>
    <category name="Functions" custom="PROCEDURE" colour="#01579B"></category>
    <sep></sep>
    <category name="DHT Sensor" colour="#263238">
        <category name="Connection" colour="#37474F">
            <block type="connect_dht22"></block>
        </category>
        <category name="Feed" colour="#455A64">
            <block type="set_feed"></block>
            <block type="get_temp_value"></block>
            <block type="set_temp_value_int"></block>
            <block type="get_humidity_value"></block>
            <block type="set_humidity_value_int"></block>
        </category>
    </category>
    <category name="AdafruitIO" colour="#004D40">
        <category name="Connection" colour="#00695C">
            <block type="connect_AdafruitIO"></block>
        </category>
        <category name="Feed" colour="#00796B">
            <block type="setup_messagehandler">
                <value name="FEEDNAME">
                    <block type="text">
                        <field name="TEXT">feed</field>
                    </block>
                </value>
                <value name="HANDLE_FEEDNAME">
                    <block type="text">
                        <field name="TEXT">handle_feed</field>
                    </block>
                </value>
            </block>
            <block type="get_feed_value_int"></block>
            <block type="get_feed_value_string"></block>
        </category>
        <category name="IO Functions" colour="#00897B">
            <block type="new_func"></block>
            <block type="pointer"></block>
            <block type="call_func"></block>
            <block type="call_func_adv"></block>
        </category>
    </category>
    <sep></sep>
    <category name="Servo" colour="#006064">
        <block type="servo_move">
            <value name="DEGREE">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="servo_read_degrees"></block>
    </category>
    <category name="Audio" colour="#1B5E20">
        <block type="inout_tone">
            <value name="NUM">
                <block type="math_number">
                    <field name="NUM">440</field>
                </block>
            </value>
        </block>
        <block type="inout_notone"></block>
    </category>
    <category name="Input/Output" colour="#33691E">
        <block type="inout_highlow"></block>
        <block type="inout_digital_write"></block>
        <block type="inout_digital_read"></block>
        <block type="inout_analog_write">
            <value name="NUM">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="inout_analog_read"></block>
        <block type="serial_print">
            <value name="CONTENT">
                <block type="math_number">
                    <field name="TEXT"></field>
                </block>
            </value>
        </block>
        <block type="inout_buildin_led"></block>
    </category>
    <category name="Neopixel" colour="#388E3C">
        <block type="setup_neopixel">
            <value name="LEDNUM">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="PIN">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="set_neopixel_brightness">
            <value name="BRIGHTNESS">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="set_pixel_color_rgb">
            <value name="PXNUMBER">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="RED">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="GREEN">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="BLUE">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="set_pixel_alphabet">
            <value name="PXNUMBER">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="RED">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="GREEN">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="BLUE">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="set_pixel_number">
            <value name="PXNUMBER">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="RED">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="GREEN">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="BLUE">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="neopixel_fade_en">
            <value name="PXNUMBER">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="DURATION">
                <block type="math_number">
                    <field name="NUM">10</field>
                </block>
            </value>
            <value name="TEMPO">
                <block type="math_number">
                    <field name="NUM">100</field>
                </block>
            </value>
            <value name="SRED">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="SGREEN">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="SBLUE">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="ERED">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="EGREEN">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
            <value name="EBLUE">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="neopixel_show"></block>
    </category>
    <category name="OLED Display" colour="#4CAF50">
        <block type="setup_display"></block>
        <block type="display_println">
            <value name="TEXT">
                <block type="text">
                    <field name="TEXT"></field>
                </block>
            </value>
        </block>
        <block type="display_color"></block>
        <block type="display_textsize">
            <value name="SIZE">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="display_setcurser">
            <value name="COLUMN">
                <block type="math_number">
                    <field name="NUM">32</field>
                </block>
            </value>
            <value name="ROW">
                <block type="math_number">
                    <field name="NUM">8</field>
                </block>
            </value>
        </block>
        <block type="display_clear"></block>
        <block type="display_display"></block>
    </category>
    <sep></sep>
    <category name="Online Data" colour="#212121">
        <category name="Wifi Manager" colour="#424242">
            <block type="connect_wifi"></block>
        </category>

        <category name="Weather data" colour="#616161">
            <block type="getcurrentWeathercondition">
                <value name="WEATHER">
                    <block type="text">
                        <field name="WEATHER"></field>
                    </block>
                </value>
            </block>
        </category>
    </category>
    <sep></sep>
    <category name="Grove Analog" colour="#0D47A1">
        <block type="grove_rotary_angle"></block>
        <block type="grove_temporature_sensor"></block>
        <block type="grove_sound_sensor"></block>
        <block type="grove_thumb_joystick"></block>
	<block type="grove_light_sensor"></block>
        <block type="grove_humidity_sensor"></block>
    </category>
    <category name="Grove" colour="#1976D2">
        <block type="grove_led"></block>
        <block type="grove_button"></block>
        <block type="grove_relay"></block>
        <block type="grove_tilt_switch"></block>
        <block type="grove_piezo_buzzer"></block>
        <block type="grove_buzzer">
           <value name="SEC">
                <block type="math_number">
                    <field name="NUM">100</field>
                </block>
            </value>
	</block>
        <block type="grove_pir_motion_sensor"></block>
        <block type="grove_line_finder"></block>
        <block type="grove_rgb_led"></block>
        <block type="grove_bluetooth_slave"></block>
        <block type="grove_ultrasonic_ranger"></block>
        <block type="grove_mp3_player"></block>
    </category>
    <category name="Grove LCD" colour="#2196F3">
        <block type="grove_serial_lcd_print">
            <value name="TEXT">
                <block type="text">
                    <field name="TEXT"></field>
                </block>
            </value>
            <value name="TEXT2">
                <block type="text">
                    <field name="TEXT"></field>
                </block>
            </value>
            <value name="DELAY_TIME">
                <block type="math_number">
                    <field name="NUM">1000</field>
                </block>
            </value>
        </block>
        <block type="grove_serial_lcd_power"></block>
        <block type="grove_serial_lcd_effect"></block>
        <block type="grove_rgb_lcd_print">
            <value name="TEXT">
                <block type="text">
                    <field name="TEXT"></field>
                </block>
            </value>
        </block>
        <block type="grove_rgb_lcd_setcolor">
            <value name="COLOR_r">
                <block type="math_number">
                    <field name="LCD_RED"></field>
                </block>
            </value>
            <value name="COLOR_g">
                <block type="math_number">
                    <field name="LCD_GREEN"></field>
                </block>
            </value>
            <value name="COLOR_b">
                <block type="math_number">
                    <field name="LCD_BLUE"></field>
                </block>
            </value>
        </block>
        <block type="grove_rgb_lcd_setcurser">
            <value name="COLUMN">
                <block type="math_number">
                    <field name="COLUMN"></field>
                </block>
            </value>
            <value name="ROW">
                <block type="math_number">
                    <field name="ROW"></field>
                </block>
            </value>
        </block>
        <block type="grove_rgb_lcd_clear">
        </block>
    </category>
    </category>
    <category name="Grove Motor" colour="#64B5F6">
        <block type="grove_motor_shield"></block>
    </category>
    <sep></sep>
    <category name="BAALL" colour="#BF360C">
        <category name="Connection" colour="#D84315">
            <block type="connect_baall"></block>
            <block type="get_status_item">
                <value name="name">
                    <block type="text">
                        <field name="TEXT">name</field>
                    </block>
                </value>
            </block>
            <block type="get_face_emotion"></block>
        </category>
        <category name="Status" colour="#E64A19">
            <block type="set_value">
                <value name="name">
                    <block type="text">
                        <field name="TEXT">name</field>
                    </block>
                </value>
                <value name="DELAY_TIME">
                    <block type="math_number">
                        <field name="NUM">1000</field>
                    </block>
                </value>
            </block>
            <block type="set_value_rgb">
                <value name="name">
                    <block type="text">
                        <field name="TEXT">name</field>
                    </block>
                </value>
                <value name="red">
                    <block type="math_number">
                        <field name="NUM">0</field>
                    </block>
                </value>
                <value name="green">
                    <block type="math_number">
                        <field name="NUM">0</field>
                    </block>
                </value>
                <value name="blue">
                    <block type="math_number">
                        <field name="NUM">0</field>
                    </block>
                </value>
                <value name="DELAY_TIME">
                    <block type="math_number">
                        <field name="NUM">1000</field>
                    </block>
                </value>
            </block>
            <block type="set_value_dimmer">
                <value name="name">
                    <block type="text">
                        <field name="TEXT">name</field>
                    </block>
                </value>
                <value name="status">
                    <block type="math_number">
                        <field name="NUM">0</field>
                    </block>
                </value>
                <value name="DELAY_TIME">
                    <block type="math_number">
                        <field name="NUM">1000</field>
                    </block>
                </value>
            </block>
            <block type="set_status_items">
                <value name="name">
                    <block type="text">
                        <field name="TEXT">name</field>
                    </block>
                </value>
                <value name="status">
                    <block type="text">
                        <field name="TEXT">status</field>
                    </block>
                </value>
                <value name="DELAY_TIME">
                    <block type="math_number">
                        <field name="NUM">1000</field>
                    </block>
                </value>
            </block>
            <block type="tv_program">
                <value name="volume">
                    <block type="math_number">
                        <field name="NUM">0</field>
                    </block>
                </value>
                <value name="DELAY_TIME">
                    <block type="math_number">
                        <field name="NUM">1000</field>
                    </block>
                </value>
            </block>
        </category>
    </category>
    <sep></sep>
    <category name="TurtleBot3" colour="#DD2C00">
        <category name="Communication" colour="#FF3D00">
            <block type="raspy_ardu"></block>
            <block type="raspy_ardu_read"></block>
            <block type="raspy_ardu_write">
		<value name="data">
                    <block type="math_number">
                        <field name="NUM">0</field>
                    </block>
                </value>
	    </block>
        </category>
    </category>
    </category>
</xml>

<script src="myJavaScript-ardu-en.js"></script>

</body>

</html>

