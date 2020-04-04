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

    <meta charset="utf-8">
    <title>Blockly: Generating PHP For BAALL</title>
    <script src="../blockly_compressed.js"></script>
    <script src="../blocks_compressed.js"></script>
    <script src="../php_compressed.js"></script>
    <script src="../msg/js/de.js"></script>

    <script type="text/javascript">
        //storing data when the page is refereshed - total time will be added to the time of example complitance
        //Run on page load
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

    <script src="custom-blocks-baall.js"></script>
    <script src="../baall_compressed.js"></script>
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
            <button class="btn_lan" id="english" onclick="location.href='index.php';" style="float:right;">en</button>
            <button class="btn_lan" id="german" onclick="#" style="float:right;">de</button>
        </div>
        <div id="rightHeader">
            <button class="btn_task" id="Task03" onclick="" style="float:left; display: none; visibility:hidden;">Aufgabe 3</button>
            <button class="btn_task" id="Task02" onclick="" style="float:left; display: none; visibility:hidden;">Aufgabe 2</button>
            <button class="btn_task" id="Task01" onclick="" style="float:left; display: none; visibility:hidden;">Aufgabe 1</button>
            <span id="no_task" style="float:left; padding: 5px; display: none;"></span>
            <!----------->
            <button class="btn_tabs" id="tb3" onclick="location.href='index-ros-en.php';" style="float:right;">TurtleBot 3</button>
            <button class="btn_tabs" id="ardu" onclick="location.href='index-ardu-de.php';" style="float:right;">Arduino</button>
            <button class="btn_tabs" id="bal" onclick="#" style="float:right;" disabled>BAALL</button>
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
        <div class="">
            <h4 id="xmlH4">XML Code</h4><br>
            <textarea id="xmlCode"></textarea>
            <div id="xmlBtn">
                <table id="btnsTable">
                    <tr class="btnsTr">
                        <td class="btnsTd" style="width: 10%;">
                            <h5 style="margin:0px;">Dateiname:</h5>
                        </td>
                        <td class="btnsTd" style="width: 20%;"><input id="fileName"></input>
                        </td>
                        <td class="btnsTd" style="width: 20%;"><input class="btn" id="saving" type="button" value="Speichern Blöcke" onclick="saveXML(); saveTimer();" /></td>

                        <td align="right" class="btnsTd" style="width: 15%;">
                            <h5 style="margin:0px;">Datei öffnen:</h5>
                        </td>
                        <td align="right" class="btnsTd" style="width: 23%;"><input type="file" id="fileToLoad" style="width:200px;"></label>
                        </td>
                        <td align="right" class="btnsTd" style="width: 10%;"><input class="btn" id="loading" type="button" value="Öffnen" onclick="loadXML()" /></td>
                    </tr>
                </table>
            </div>
        </div>
        <!--left DIV-->
        <!----------->
        <div class="codeStyleLeft">
            <div id="loader" style="display: none; position: absolute; left: 75px;"></div>
            <h4>Ausgabe</h4><br>
            <div id="output-wrapper">
                <div id="output"></div>
            </div>
        </div>
    </div>
    <!----------->
    <div id="rightDiv">
        <div class="codeBtn">

            <button class="btn" id="run" name="refresh" onclick="runCode();secondTime();">Code starten</button>
            <button class="btn" id="generate" onclick="generateCode(); generate();">Code generieren</button>
            <button class="btn" id="modify" onclick="">Code bearbeiten</button>
            <button class="btn" id="auto" onclick="autoCode()">Autokodegenerator</button>

            <button class="btn" id="reset" onclick="resetClick()" style="float:right;">Zurücksetzen</button>
            <button class="btn" id="discard" onclick="discard()" style="float:right;">Verwerfen</button>
        </div>
        <!----------->
        <div class="codeStyleRight">
            <h4 id="hidePhp">PHP Code</h4><br>
            <div id="phpCode"></div>
        </div>
        <!----------->
        <!--when the user want to modify the code-->
        <div id="modifier" class="codeStyleRight" style="top:40px;">
            <h4>PHP Code bearbeiten</h4><br>
            <textarea id="modifyCode"></textarea>
            <div id="modifyCodeDiv" contenteditable="true"></div>
        </div>
        <div class="codeBtn">
            <table id="btnsTable">
                <tr class="btnsTr">
                    <td class="btnsTd" style="width: 10%;">
                        <h5 style="margin:0px;">Dateiname:</h5>
                    </td>
                    <td class="btnsTd" style="width: 20%;"><input id="fileName_php"></input>
                    </td>
                    <td class="btnsTd" style="width: 20%;"><input class="btn" id="saving_php" type="button" value="Speichern Code" onclick="savePHP();" /></td>

                    <td align="right" class="btnsTd" style="width: 28%;">
                        <button class="btn" id="drawBaall" onclick="drawBaall()">MeinSmartHome</button>
                    </td>
                    <td align="right" class="btnsTd" style="width: 39%;">
                        <button class="btn" id="showBaall" onclick="showBaall()">BAALL anzeigen</button>
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
    <category name="Variablen" colour="#AFB42B" custom="VARIABLE">
        <block type="variables_set"></block>
        <block type="variables_get"></block>
        <block type="math_change"></block>
    </category>
    <category name="Datentypen" colour="#F57F17">
        <block type="text"></block>
        <block type="lists_create_with"></block>
        <block type="lists_create_with">
            <mutation items="0"></mutation>
        </block>
        <block type="math_number"></block>
        <block type="logic_boolean"></block>
        <block type="logic_null"></block>
    </category>
    <category name="Bedingungen" colour="#311B92">
        <block type="controls_if"></block>
        <block type="controls_ifelse"></block>
        <block type="logic_ternary"></block>
    </category>
    <category name="Schleife" colour="#F44336">
        <block type="foreach_simple_de"></block>
        <block type="controls_forEach"></block>
        <block type="controls_repeat"></block>
        <block type="controls_whileUntil"></block>
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
        <block type="controls_flow_statements"></block>
    </category>
    <category name="Text" colour="#AD1457">
        <block type="text_join"></block>
        <block type="text_append">
            <value name="TEXT">
                <block type="text"></block>
            </value>
        </block>
        <block type="length_text">
            <value name="length">
                <block type="text">
                    <field name="TEXT">abc</field>
                </block>
            </value>
        </block>
        <block type="indexof_text">
            <value name="text">
                <block type="variables_get">
                    <field name="VAR">text</field>
                </block>
            </value>
            <value name="value">
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
        <block type="text_charAt">
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR">text</field>
                </block>
            </value>
        </block>
        <block type="text_trim">
            <value name="TEXT">
                <block type="text">
                    <field name="TEXT">abc</field>
                </block>
            </value>
        </block>
        <block type="text_prompt_ext">
            <value name="TEXT">
                <block type="text">
                    <field name="TEXT">abc</field>
                </block>
            </value>
        </block>
        <block type="prints">
            <value name="print">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="tag_br"></block>
    </category>
    <category name="Liste" colour="#33691E">
        <block type="repeat_list">
            <value name="num">
                <block type="math_number">
                    <field name="NUM">3</field>
                </block>
            </value>
        </block>
        <block type="length_list"></block>
        <block type="lists_isEmpty"></block>
        <block type="indexof_list">
            <value name="list">
                <block type="variables_get">
                    <field name="VAR">list</field>
                </block>
            </value>
        </block>
        <block type="lists_getIndex">
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR">list</field>
                </block>
            </value>
        </block>
        <block type="lists_setIndex">
            <value name="LIST">
                <block type="variables_get">
                    <field name="VAR">list</field>
                </block>
            </value>
        </block>
        <block type="lists_getSublist">
            <value name="LIST">
                <block type="variables_get">
                    <field name="VAR">list</field>
                </block>
            </value>
        </block>
        <block type="lists_split">
            <value name="DELIM">
                <block type="text">
                    <field name="TEXT">,</field>
                </block>
            </value>
        </block>
        <block type="sort_list"></block>
        <block type="print_r">
            <value name="print_r">
                <shadow type="variables_get">
                    <field name="VAR">List</field>
                </shadow>
            </value>
        </block>
    </category>
    <category name="Operatoren" colour="#1B5E20">
        <category name="Arithmetik" colour="#2E7D32">
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
        </category>
        <category name="Vergleiche" colour="#388E3C">
            <block type="logic_compare"></block>
        </category>
        <category name="Logik" colour="#43A047">
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="math_number_property">
                <value name="NUMBER_TO_CHECK">
                    <block type="math_number">
                        <field name="NUM">0</field>
                    </block>
                </value>
            </block>
        </category>
    </category>
    <category name="Funktionen" colour="#01579B">
        <category name="Steuerung" colour="#0277BD">
            <block type="get_date">
                <value name="timeformat">
                    <block type="text">
                        <field name="TEXT">Date:Y-m-d Time:H:i:s</field>
                    </block>
                </value>
            </block>
            <block type="load_xml">
                <value name="xml">
                    <block type="text">
                        <field name="TEXT">file name</field>
                    </block>
                </value>
            </block>
            <block type="sleep_time">
                <value name="sleep">
                    <block type="math_number">
                        <field name="NUM">0</field>
                    </block>
                </value>
            </block>
        </category>
        <category name="BAALL" colour="#0288D1">
            <category name="Verbindung" colour="#039BE5">
                <block type="connect_baall_de"></block>
                <block type="get_name_simple_de"></block>
                <block type="get_status_simple_de"></block>
                <block type="get_status_item_de">
                    <value name="name">
                        <block type="text">
                            <field name="TEXT">name</field>
                        </block>
                    </value>
                </block>
                <block type="get_emotion_de"></block>
                <block type="get_emotion_data_de"></block>
            </category>
            <category name="Status" colour="#03A9F4">
                <block type="set_value_de">
                    <value name="name">
                        <block type="text">
                            <field name="TEXT">name</field>
                        </block>
                    </value>
                </block>
                <block type="set_value_rgb_de">
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
                </block>
                <block type="set_value_dimmer_de">
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
                </block>
                <block type="set_status_items_de">
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
                </block>
                <block type="tv_program_de">
                    <value name="volume">
                        <block type="math_number">
                            <field name="NUM">0</field>
                        </block>
                    </value>
                </block>
            </category>
            <category name="Design" colour="#29B6F6">
                <block type="baall_frontend_de">
                    <value name="row">
                        <block type="math_number">
                            <field name="NUM">0</field>
                        </block>
                    </value>
                    <value name="col">
                        <block type="math_number">
                            <field name="NUM">0</field>
                        </block>
                    </value>
                </block>
                <block type="baall_frontend_adv_de">
                    <value name="firstX">
                        <block type="math_number">
                            <field name="NUM">0</field>
                        </block>
                    </value>
                    <value name="firstY">
                        <block type="math_number">
                            <field name="NUM">0</field>
                        </block>
                    </value>
                    <value name="lastX">
                        <block type="math_number">
                            <field name="NUM">0</field>
                        </block>
                    </value>
                    <value name="lastY">
                        <block type="math_number">
                            <field name="NUM">0</field>
                        </block>
                    </value>
                </block>
            </category>
        </category>
        <category name="Procedures" colour="#2196F3" custom="PROCEDURE"></category>
    </category>
    <category name="Objekte" colour="#006064">
        <category name="BAALL" colour="#00838F">
            <category name="Connection" colour="#00838F">
                <block type="connect_baall_object_de"></block>
                <block type="baall_objects_de"></block>
            </category>
            <category name="Status" colour="#0097A7">
                <block type="get_status_object_de"></block>
                <block type="set_status_objects_de">
                    <value name="status">
                        <block type="text">
                            <field name="TEXT">status</field>
                        </block>
                    </value>
                </block>
                <block type="set_status_dimmer_de">
                    <value name="status">
                        <block type="math_number">
                            <field name="NUM">0</field>
                        </block>
                    </value>
                </block>
                <block type="set_status_tv_de">
                    <value name="volume">
                        <block type="math_number">
                            <field name="NUM">0</field>
                        </block>
                    </value>
                </block>
                <block type="set_status_rgb_de">
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
                </block>
            </category>
            <category name="Design" colour="#00ACC1">
                <block type="design_baall_objects_de"></block>
                <block type="design_object_de">
                    <value name="firstX">
                        <block type="math_number">
                            <field name="NUM">0</field>
                        </block>
                    </value>
                    <value name="firstY">
                        <block type="math_number">
                            <field name="NUM">0</field>
                        </block>
                    </value>
                    <value name="lastX">
                        <block type="math_number">
                            <field name="NUM">0</field>
                        </block>
                    </value>
                    <value name="lastY">
                        <block type="math_number">
                            <field name="NUM">0</field>
                        </block>
                    </value>
                </block>
            </category>
        </category>
    </category>
</xml>

<script src="myJavaScript-baall-de.js"></script>

</body>

</html>
