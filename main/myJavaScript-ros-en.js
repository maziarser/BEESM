//change the Block colors
function reColor(block, hue) {
    var oldInit = block.init;
    block.init = function() {
        oldInit.call(this);
        this.setColour(hue);
    }
}
//--------------------------------
let Logic_color = "#43A047";
let Loops_color = "#F44336";
let Math_color = "#FF9800";
let Text_color = "#AD1457";
let List_color = "#33691E";
let ProgramControl_color = "#0277BD";
let Variables_color = "#AFB42B";
let Functions_color = "#01579B";
let FreeNavigation_color = "#FF7043";
let MapNavigation_color = "#FF8A65";
let Connection_color = "#039BE5";
let Status_color = "#03A9F4";
let Design_color = "#29B6F6";
let Arduino_color = "#00838F";

reColor(Blockly.Blocks['controls_if'], Logic_color);
reColor(Blockly.Blocks['controls_ifelse'], Logic_color);
reColor(Blockly.Blocks['logic_compare'], Logic_color);
reColor(Blockly.Blocks['logic_operation'], Logic_color);
reColor(Blockly.Blocks['logic_negate'], Logic_color);
reColor(Blockly.Blocks['logic_null'], Logic_color);
reColor(Blockly.Blocks['logic_boolean'], Logic_color);
reColor(Blockly.Blocks['logic_ternary'], Logic_color);
reColor(Blockly.Blocks['controls_if_if'], Logic_color);
reColor(Blockly.Blocks['controls_if_elseif'], Logic_color);
reColor(Blockly.Blocks['controls_if_else'], Logic_color);

reColor(Blockly.Blocks['controls_forEach'], Loops_color);
reColor(Blockly.Blocks['controls_repeat_ext'], Loops_color);
reColor(Blockly.Blocks['controls_for'], Loops_color);
reColor(Blockly.Blocks['controls_whileUntil'], Loops_color);
reColor(Blockly.Blocks['loop_controller'], Loops_color);
reColor(Blockly.Blocks['foreach_simple'], Loops_color);

reColor(Blockly.Blocks['math_number'], Math_color);
reColor(Blockly.Blocks['math_arithmetic'], Math_color);
reColor(Blockly.Blocks['math_single'], Math_color);
reColor(Blockly.Blocks['math_trig'], Math_color);
reColor(Blockly.Blocks['math_constant'], Math_color);
reColor(Blockly.Blocks['math_number_property'], Math_color);
reColor(Blockly.Blocks['math_round'], Math_color);
reColor(Blockly.Blocks['math_on_list'], Math_color);
reColor(Blockly.Blocks['math_modulo'], Math_color);
reColor(Blockly.Blocks['math_constrain'], Math_color);
reColor(Blockly.Blocks['math_random_int'], Math_color);
reColor(Blockly.Blocks['math_random_float'], Math_color);

reColor(Blockly.Blocks['text'], Text_color);
reColor(Blockly.Blocks['text_join'], Text_color);
reColor(Blockly.Blocks['text_append'], Text_color);
reColor(Blockly.Blocks['text_length'], Text_color);
reColor(Blockly.Blocks['text_isEmpty'], Text_color);
reColor(Blockly.Blocks['text_indexOf'], Text_color);
reColor(Blockly.Blocks['variables_get'], Text_color);
reColor(Blockly.Blocks['text_charAt'], Text_color);
reColor(Blockly.Blocks['text_getSubstring'], Text_color);
reColor(Blockly.Blocks['text_changeCase'], Text_color);
reColor(Blockly.Blocks['text_trim'], Text_color);
reColor(Blockly.Blocks['text_print'], Text_color);
reColor(Blockly.Blocks['text_prompt_ext'], Text_color);
reColor(Blockly.Blocks['text_create_join_container'], Text_color);
reColor(Blockly.Blocks['text_create_join_item'], Text_color);

reColor(Blockly.Blocks['lists_create_with'], List_color);
reColor(Blockly.Blocks['repeat_list'], List_color);
reColor(Blockly.Blocks['length_list'], List_color);
reColor(Blockly.Blocks['lists_isEmpty'], List_color);
reColor(Blockly.Blocks['indexof_list'], List_color);
reColor(Blockly.Blocks['variables_get'], List_color);
reColor(Blockly.Blocks['lists_getIndex'], List_color);
reColor(Blockly.Blocks['lists_setIndex'], List_color);
reColor(Blockly.Blocks['lists_getSublist'], List_color);
reColor(Blockly.Blocks['lists_split'], List_color);
reColor(Blockly.Blocks['sort_list'], List_color);
reColor(Blockly.Blocks['print_r'], List_color);
reColor(Blockly.Blocks['lists_create_with_item'], List_color);
reColor(Blockly.Blocks['lists_create_with_container'], List_color);

reColor(Blockly.Blocks['load_xml'], ProgramControl_color);
reColor(Blockly.Blocks['sleep_time'], ProgramControl_color);
reColor(Blockly.Blocks['tag_br'], ProgramControl_color);

reColor(Blockly.Blocks['variables_set'], Variables_color);
reColor(Blockly.Blocks['variables_get'], Variables_color);
reColor(Blockly.Blocks['math_change'], Variables_color);

reColor(Blockly.Blocks['procedures_defreturn'], Functions_color);
reColor(Blockly.Blocks['procedures_defnoreturn'], Functions_color);
reColor(Blockly.Blocks['procedures_callreturn'], Functions_color);
reColor(Blockly.Blocks['procedures_callnoreturn'], Functions_color);
reColor(Blockly.Blocks['procedures_ifreturn'], Functions_color);
reColor(Blockly.Blocks['procedures_mutatorcontainer'], Functions_color);
reColor(Blockly.Blocks['procedures_mutatorarg'], Functions_color);

reColor(Blockly.Blocks['movebot_sec'], FreeNavigation_color);
reColor(Blockly.Blocks['movebot_dis'], FreeNavigation_color);
reColor(Blockly.Blocks['safe_movebot_sec'], FreeNavigation_color);
reColor(Blockly.Blocks['safe_movebot_dis'], FreeNavigation_color);
reColor(Blockly.Blocks['turnbot_sec'], FreeNavigation_color);
reColor(Blockly.Blocks['turnbot_deg'], FreeNavigation_color);
reColor(Blockly.Blocks['sleep_bot'], FreeNavigation_color);
reColor(Blockly.Blocks['scanner_data_check'], FreeNavigation_color);
reColor(Blockly.Blocks['stop_bot'], FreeNavigation_color);
reColor(Blockly.Blocks['scanner_data'], FreeNavigation_color);
reColor(Blockly.Blocks['scanner_data_range'], FreeNavigation_color);

reColor(Blockly.Blocks['initialization_pose'], MapNavigation_color);
reColor(Blockly.Blocks['connect_server_ros'], MapNavigation_color);
reColor(Blockly.Blocks['start_position'], MapNavigation_color);
reColor(Blockly.Blocks['pose_change'], MapNavigation_color);
reColor(Blockly.Blocks['get_location'], MapNavigation_color);
reColor(Blockly.Blocks['movebot_link'], MapNavigation_color);
reColor(Blockly.Blocks['turnbot_link'], MapNavigation_color);
reColor(Blockly.Blocks['movebot_location'], MapNavigation_color);
reColor(Blockly.Blocks['movebot_position'], MapNavigation_color);
reColor(Blockly.Blocks['sleep_robot'], MapNavigation_color);
reColor(Blockly.Blocks['stopbot_map'], MapNavigation_color);

reColor(Blockly.Blocks['connect_baall'], Connection_color);
reColor(Blockly.Blocks['get_status_item'], Connection_color);
reColor(Blockly.Blocks['get_name_simple'], Connection_color);
reColor(Blockly.Blocks['get_status_simple'], Connection_color);
reColor(Blockly.Blocks['get_emotion'], Connection_color);
reColor(Blockly.Blocks['get_emotion_data'], Connection_color);

reColor(Blockly.Blocks['set_value'], Status_color);
reColor(Blockly.Blocks['set_value_rgb'], Status_color);
reColor(Blockly.Blocks['set_value_dimmer'], Status_color);
reColor(Blockly.Blocks['set_status_items'], Status_color);
reColor(Blockly.Blocks['tv_program'], Status_color);

reColor(Blockly.Blocks['baall_frontend'], Design_color);
reColor(Blockly.Blocks['baall_frontend_adv'], Design_color);

reColor(Blockly.Blocks['raspy_arduino_write'], Arduino_color);
reColor(Blockly.Blocks['raspy_arduino_read'], Arduino_color);
//--------------------------------
//field of programming
document.getElementById("tb3").style.background = "rgb(27, 94, 32)";
document.getElementById("english").style.background = "rgb(27, 94, 32)";
//--------------------------------
function consoleLog(msg){
    //console.log(msg);
}
//--------------------------------
//Autocode generate flag
var currentValue = document.getElementById("auto").value = "Off";

function autoCode() {
    currentValue = document.getElementById('auto').value;
    if (currentValue == "Off") {
        document.getElementById("auto").value = "On";
        document.getElementById("auto").style.background = "rgb(27, 94, 32)";
        currentValue = document.getElementById('auto').value;
        Blockly.mainWorkspace.addChangeListener(onFirstComment);
    } else {
        document.getElementById("auto").value = "Off";
        document.getElementById("auto").style.background = "rgb(48, 63, 159)";
        currentValue = document.getElementById('auto').value;
		Blockly.mainWorkspace.removeChangeListener(onFirstComment);
    }
    return currentValue;
}

function onFirstComment(event) {
    if ((event.type == Blockly.Events.CHANGE ||
            event.element == 'comment' ||
            !event.oldValue || event.newValue) &&
        currentValue == "On") {
        generateCode();
    }
}
//--------------------------------
var clicks = 0;
function saveXML() {
    clicks += 1;
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    $('#xmlCode').val(xmlText).focus();

    var xml_text = document.getElementById("xmlCode").value;
    var xml_textAsBlob = new Blob([xml_text], {
        type: 'text/plain'
    });
    var xmlFileName = document.getElementById("fileName").value;

    var DLink = document.createElement("a");
    if (xmlFileName) {
		if (xmlFileName.indexOf(".xml") == -1) {
            xmlFileName  = xmlFileName+".xml";
        }
        DLink.download = xmlFileName;
    } else {
        DLink.download = 'Example[' + clicks + '].xml';
    }
    DLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        DLink.href = window.webkitURL.createObjectURL(xml_textAsBlob);
    } else {
        DLink.href = window.URL.createObjectURL(xml_textAsBlob);
        DLink.style.display = "none";
        document.body.appendChild(DLink);
    }
    DLink.click();
	remoteSaveXML(xml_textAsBlob,xmlFileName);
}
//--------------------------------
//loading	
function loadXML() {
    var fileToLoad = document.getElementById("fileToLoad").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("xmlCode").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");

    setTimeout(
        function() {
            var toload = $('#xmlCode').val();
            var success = load(toload);

            function load(xml) {
                if (typeof xml != "string" || xml.length < 5) {
                    alert("No Input!");
                    return false;
                    return;
                }
                try {
                    var dom = Blockly.Xml.textToDom(xml);
                    Blockly.mainWorkspace.clear();
                    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, dom);
                    return true;
                } catch (e) {
                    alert("Invalid xml!");
                    return false;
                }
            }
        }, 50);
}
//--------------------------------
//saving ROS code
var saveRos_clicks = 0;

function saveRos() {
    saveRos_clicks += 1;
    if ($('#rosCode').css('visibility') == 'visible' && $('#modifier').css('display') == 'none') {
        var ros_text = document.getElementById("rosCode");
        var my_ros = ros_text.innerText || ros_text.textContent;

        var ros_textAsBlob = new Blob([my_ros], {
            type: 'text/plain'
        });

        var rosFileName = document.getElementById("fileName_ros").value;

        rosLink = document.createElement("a");

        if (rosFileName) {
			if (rosFileName.indexOf(".beesm") == -1) {
				rosFileName  = rosFileName+".beesm";
			}
            rosLink.download = rosFileName;
        } else {
            rosLink.download = 'rosCode[' + saveRos_clicks + '].beesm';
        }
        rosLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            rosLink.href = window.webkitURL.createObjectURL(ros_textAsBlob);
        } else {
            rosLink.href = window.URL.createObjectURL(ros_textAsBlob);
            rosLink.style.display = "none";
            document.body.appendChild(rosLink);
        }
        rosLink.click();
    }
    //save from code modifier
    else if ($('#rosCode').css('visibility') != 'visible' && $('#modifier').css('display') != 'none') {
        var ros_text = document.getElementById("modifyCodeDiv");
        var my_ros = ros_text.innerText || ros_text.textContent;

        var ros_textAsBlob = new Blob([my_ros], {
            type: 'text/plain'
        });

        var rosFileName = document.getElementById("fileName_ros").value;

        rosLink = document.createElement("a");

        if (rosFileName) {
			if (rosFileName.indexOf(".beesm") == -1) {
				rosFileName  = rosFileName+".beesm";
			}
            rosLink.download = rosFileName;
        } else {
            rosLink.download = 'rosCode[' + saveros_clicks + '].beesm';
        }
        rosLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            rosLink.href = window.webkitURL.createObjectURL(ros_textAsBlob);
        } else {
            rosLink.href = window.URL.createObjectURL(ros_textAsBlob);
            rosLink.style.display = "none";
            document.body.appendChild(rosLink);
        }
        rosLink.click();
    }
}
//--------------------------------
//highlight code in the modify code window
$(function() {
    $("body").click(function(e) {
        if (e.target.id == "modifyCodeDiv" || $(e.target).parents("#modifyCodeDiv").length) {
            //hljs.highlightBlock($('#modifyCodeDiv').get(0));
        } else {
            hljs.highlightBlock($('#modifyCodeDiv').get(0));
        }
    });
});
//--------------------------------
//visiable and invisiable the code modifier textbox and run button
$('#modify').click(function() {
    $('#modifier').show();
    hljs.highlightBlock($('#modifyCodeDiv').get(0));
    document.getElementById("hideRos").style.visibility = "hidden";
    document.getElementById("rosCode").style.visibility = "hidden";
});

$('#generate').click(function() {
    $('#modifier').hide();
    document.getElementById("hideRos").style.visibility = "visible";
    document.getElementById("rosCode").style.visibility = "visible";
});
//--------------------------------
//this is to call baall.php when they click on the button
$(document).ready(function() {
    $("#showBaall").click(function() {
        $('#baall-wrapper').show();
        $('#designBaall-wrapper').hide();
        $("#baall").load('baall.php');
    });
});

//this is to call design-baall.php when they click on the button
$(document).ready(function() {
    $("#drawBaall").click(function() {
        $('#baall-wrapper').hide();
        $('#designBaall-wrapper').show();
        $("#designBaall").load('design-baall.php');
    });
});
//--------------------------------
//making integer
function toInt(n){ return parseInt(Number(n)); };

WebSocketRos();
var x_loc = null;
var y_loc = null;
var z_loc = null;

function WebSocketRos() {
    if ("WebSocket" in window) {
        var websocket = new WebSocket('ws://localhost:8099/ws');

        websocket.onopen = function () {
            websocket.send("ROS-Message to send");
        };

        var x_loc_white = 0;
        var y_loc_white = 0;
        var z_loc_white = 0;

        websocket.onmessage = function (evt) {
            var received_msg = evt.data;
            consoleLog("ROS-Data recieved...");//document.getElementById('msg').innerHTML = evt.data;
            consoleLog(received_msg);
            var obj = JSON.parse(received_msg);
            if (obj.type === "update_loc") {
                consoleLog("location of th TB3 changed!");
                x_loc = obj.x;
                y_loc = obj.y;
                z_loc = obj.z;

                var x_factor = 45 / 10.40; //4.70
                var y_factor = 20 / 5.40; //4.13

                x_loc = toInt((x_loc * x_factor) + 22.5) + 2;
                y_loc = toInt(((y_loc * y_factor)*-1) + 10) + 2;

                if(x_loc_white != x_loc || y_loc_white != y_loc || z_loc_white != z_loc){
                    //to have the follow up
                    cellWhite(y_loc_white, x_loc_white, z_loc_white);
                }

                cellColor(y_loc, x_loc, z_loc);

            }
            x_loc_white = x_loc;
            y_loc_white = y_loc;
            z_loc_white = z_loc;
        };

        websocket.onclose = function() {
            // websocket is closed.
            consoleLog("ROS-Connection is closed...");
	        setTimeout(function(){WebSocketRos()}, 15000);
        };

        websocket.onerror   = function (evt) {
            consoleLog('ROS-Error occured: ' + evt.data);
        };

        window.onbeforeunload = function(evt) {
            ws.close();
        };

    } else {
        // The browser doesn't support WebSocket
        consoleLog("ROS-WebSocket NOT supported by your Browser!");
    }

}
//--------------------------------
//UI for Robot
var previousClassList;

function cellColor(x,y,z) {
    var myTable = document.getElementById("baallTable");//.getElementsByTagName("td");

    myTable.rows[x].cells[y].innerHTML = "<";
    myTable.rows[x].cells[y].style.backgroundColor = "#AD1457";
    myTable.rows[x].cells[y].classList.add("turtlebot");

    if(z>=0.90 && z<=-0.90){
        myTable.rows[x].cells[y].style.transform = "rotate(0deg)";
    }else if(z>0.30 && z<0.90){
        myTable.rows[x].cells[y].style.transform = "rotate(90deg)";
    }else if(z>=-0.30 && z<=0.30){
        myTable.rows[x].cells[y].style.transform = "rotate(180deg)";
    }else if(z>-0.90 && z<-0.30){
        myTable.rows[x].cells[y].style.transform = "rotate(270deg)";
    }
}

function cellWhite(x,y,z) {
    var myTable = document.getElementById("baallTable");//.getElementsByTagName("td");
    if(x !== null) {
        myTable.rows[x].cells[y].innerHTML = " ";

        myTable.rows[x].cells[y].classList.remove("turtlebot");
    }
    myTable.rows[x].cells[y].style.transform = null;
}
//--------------------------------
//this is to refresh the baall
function refreshBaall() {
    var url = 'index-ros-en.php';
    $('#baall-wrapper').load(url + ' #baall',function(){
        if(x_loc !== null){
            cellColor(y_loc, x_loc, z_loc);
        }
    });
    $('#designBaall-wrapper').load(url + ' #designBaall');
}

WebSocketBaall();

function WebSocketBaall() {
    var objects = ["bedroomJack1", "bedroomJack2", "bedroomLight1", "bedroomLight2", "livingJack1", "livingLight1",
        "livingLight2", "corridorLight", "kitchenLight", "bathroomLight", "bulblamp", "floorlamp", "bathroomLight",
        "bathroomdoor", "upperLeftDoor", "upperRightDoor", "lowerLeftDoor", "lowerRightDoor", "livingLight3",
        "tvProgram", "bathroomToiletHeight", "basin"];

    if ("WebSocket" in window) {
        //open a web socket
        var ws = new WebSocket("ws://baall-server-2.informatik.uni-bremen.de/panelws");

        ws.onopen = function() {
            //Web Socket is connected, send data using send()
            ws.send("Message to send");
        };
        ws.onmessage = function(evt) {
            var received_msg = evt.data;
            consoleLog("Message is received...");
            var n = received_msg.indexOf('}');
            var m = received_msg.indexOf('}}');
            if (m != -1 && n != -1) {
                var str = received_msg.substring(0, received_msg.indexOf('}}') + 2);
            } else if (n != -1 && m == -1) {
                var str = received_msg.substring(0, received_msg.indexOf('}') + 1);
            }
            var obj = JSON.parse(str);
            if (obj.type === "update") {
                for (i = 0; i < objects.length; i++) {
                    if (obj.id === objects[i]) {
                        //consoleLog("status of one object in the list changed!");
                        //refreshBaall();
                    }
                }
            }
        };

        ws.onclose = function() {
            //websocket is closed
            consoleLog("Connection is closed...");
	        setTimeout(function(){WebSocketBaall()}, 7000);
        };
        window.onbeforeunload = function(event) {
            ws.close();
        };
    } else {
        //The browser doesn't support WebSocket
        consoleLog("WebSocket NOT supported by your Browser!");
    }
}
//--------------------------------
function showBaall() {
    //this is to refresh the div=baall when user press show baall btn
    setTimeout(
        function() {
            var url = 'index-ros-en.php';
            $('#baall-wrapper').load(url + ' #baall');
        }, 100);
}

function drawBaall() {
    //this is to refresh the div=baall when user press show design baall btn
    setTimeout(
        function() {
            var url = 'index-ros-en.php';
            $('#designBaall-wrapper').load(url + ' #designBaall');
        }, 100);
}
//--------------------------------
var workspace = Blockly.inject('blocklyDiv',
    {media: '../media/',
        toolbox: document.getElementById('toolbox'),
        zoom:
            {controls: true,
                wheel: true,
                startScale: 1.0,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2},
        trashcan: true});
//--------------------------------
function discard() {
    var count = Blockly.mainWorkspace.getAllBlocks().length;
    if (count < 2 || window.confirm('Delete all ' + count + ' blocks?')) {
        Blockly.mainWorkspace.clear();
        //renderContent();
    }
}
//--------------------------------
function resetClick() {
    var code = " ";
    document.getElementById("loader").style.display="block";
    document.getElementById("run").disabled = true;
    remoteEval(code);
}
//--------------------------------
//generating the code
function generateCode() {
    //Generate ROS code and display it.
    //generate the code based on the workspace
    Blockly.PHP.INFINITE_LOOP_TRAP = null;
    var code = Blockly.PHP.workspaceToCode(workspace);

    //find the load_xml in the code string
    var myString = code;
    var count = (myString.match(/load_xml/g) || []).length;

    //fetch the file name after each load_xml
    for (var i = 1; i <= count; i++) {
        var n = myString.indexOf("load_xml");
        var m = myString.indexOf(";", n);
        var res = myString.substring(n, m + 1);

        var nName = res.indexOf("(") + 2;
        var mName = res.indexOf(")", nName) - 1;

        var filename = res.substring(nName, mName);
        filename = "Examples/" + filename;
        loadFileToTextbox(filename);
        myString = myString.replace(res, '');
    }

    function loadFileToTextbox(filename) {
        var xmlHTTP = new XMLHttpRequest();
        try {
            xmlHTTP.open("GET", filename, false);
            xmlHTTP.send(null);
        } catch (e) {
            window.alert("Unable to load the requested file!");
            return;
        }
        document.getElementById("xmlCode").value = xmlHTTP.responseText;
        //load the code
        var xmlText = document.getElementById('xmlCode').value;
        try {
            var xml = Blockly.Xml.textToDom(xmlText)
        } catch (e) {
            alert(e);
            return;
        }
        // Create a headless workspace.
        var workspace = new Blockly.Workspace();
        Blockly.Xml.domToWorkspace(xml, workspace);
        var codeLoad = Blockly.PHP.workspaceToCode(workspace);
        document.getElementById('rosCode').innerText = codeLoad;

        code = code.replace(res, codeLoad);
    }

    //PHP/ROS code
    document.getElementById("rosCode").innerText = (code);
    //code modifier
    document.getElementById("modifyCode").value = (code);

    //it is to put textarea content into the middle div which is "modifyCodeDiv"
    document.getElementById("modifyCodeDiv").innerText = document.getElementById("modifyCode").value;

    //highlight the code
    hljs.highlightBlock($('#rosCode').get(0));
    hljs.highlightBlock($('#modifyCodeDiv').get(0));
}
//--------------------------------
//this is to refresh the ROS Output
function refreshOutputros() {
    document.getElementById("output").innerText = "";
}
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
//--------------------------------
function runCode() {
    //run from workspace
    if ($('#rosCode').css('visibility') == 'visible' && $('#modifier').css('display') == 'none') {
        Blockly.PHP.INFINITE_LOOP_TRAP = null;
        var my_element = document.getElementById('rosCode');
        var my_str = my_element.innerText || my_element.textContent;
        document.getElementById("modifyCode").value = my_str;
        var code = document.getElementById("modifyCode").value;
        document.getElementById("loader").style.display="block";
	    document.getElementById("run").disabled = true;
        remoteEval(code);
    }
    //run from code modifier
    else if ($('#rosCode').css('visibility') != 'visible' && $('#modifier').css('display') != 'none') {
        var my_element = document.getElementById('modifyCodeDiv');
        var my_str = my_element.innerText || my_element.textContent;
        document.getElementById("modifyCode").value = my_str;
        var ros_code = document.getElementById("modifyCode").value;
        if (ros_code === null) {
            showCode();
        }
        document.getElementById("loader").style.display="block";
	    document.getElementById("run").disabled = true;
        remoteEval(ros_code);
    }
}
//--------------------------------
//execute runCode for second time --> needs to be changed and modify (for draw baall)
function secondTime() {
    /*if ($('#designBaall-wrapper').css('display') != 'none' && $('#baall-wrapper').css('display') == 'none') {
        setTimeout(
            function() {
                if ($('#rosCode').css('visibility') == 'visible' && $('#modifier').css('display') == 'none') {
                    Blockly.PHP.INFINITE_LOOP_TRAP = null;
                    remoteEval(code);
                    var my_element = document.getElementById('rosCode');
                    var my_str = my_element.innerText || my_element.textContent;
                    //this is to copy the value of "my_str" into the textarea
                    document.getElementById("modifyCode").value = my_str;
                    var code = document.getElementById("modifyCode").value;
                }
                //run from code modifier
                else if ($('#rosCode').css('visibility') != 'visible' && $('#modifier').css('display') != 'none') {
                    var my_element = document.getElementById('modifyCodeDiv');
                    var my_str = my_element.innerText || my_element.textContent;
                    document.getElementById("modifyCode").value = my_str;
                    var ros_code = document.getElementById("modifyCode").value;
                    if (ros_code === null) {
                        showCode();
                    }
                }
            }, 150);
    }*/
}
//--------------------------------
//this function is to post and call the evel.php & show the output
function remoteEval(code) {
    var work_area = "ROS";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "eval-ros.php?task="+getTask()+"&area="+work_area, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var str = (xhr.responseText);
            var first = str.indexOf('<html>');
            var last = str.indexOf('</html>');
            var str_final = str.slice(first, last);
            str = str.replace(str_final, '');
            str = str.trim();
            document.getElementById("output").innerHTML = (str);
            document.getElementById("loader").style.display="none";
	        document.getElementById("run").disabled = false;
        }
    }
    xhr.send(code);
}
//--------------------------------
function remoteSaveXML(code, name) {
	var work_area = "ROS";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "saveXml.php?name="+encodeURI(name)+"&task="+getTask()+"&area="+work_area, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
           // alert("document saved");
        }
    }
    xhr.send(code);
}
//--------------------------------
function remoteSaveTimer(code) {
	var work_area = "ROS";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "saveTime.php?task="+getTask()+"&area="+work_area, true);
    xhr.send(code);
}
