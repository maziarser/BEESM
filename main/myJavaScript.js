//change the Block colors
function reColor(block, hue) {
    var oldInit = block.init;
    block.init = function() {
        oldInit.call(this);
        this.setColour(hue);
    }
}
//--------------------------------
let Variables_color = "#AFB42B";
let Loops_color = "#F44336";
let Text_color = "#AD1457";
let List_color = "#33691E";
let Math_color = "#FF9800";
let Logic_color = "#43A047";
let Programmcontrol_color = "#0277BD";
let Connection_color = "#039BE5";
let Status_color = "#03A9F4";
let Design_color = "#29B6F6";
let Function_color = "#01579B";
let Object_color_connction = "#0097A7";
let Object_color_status = "#00ACC1";
let Object_color_design = "#00BCD4";

reColor(Blockly.Blocks['logic_compare'], Logic_color);
reColor(Blockly.Blocks['logic_operation'], Logic_color);
reColor(Blockly.Blocks['logic_negate'], Logic_color);
reColor(Blockly.Blocks['logic_boolean'], Logic_color);
reColor(Blockly.Blocks['logic_null'], Logic_color);
reColor(Blockly.Blocks['controls_if'], Logic_color);
reColor(Blockly.Blocks['controls_ifelse'], Logic_color);
reColor(Blockly.Blocks['logic_ternary'], Logic_color);
reColor(Blockly.Blocks['controls_if_if'], Logic_color);
reColor(Blockly.Blocks['controls_if_elseif'], Logic_color);
reColor(Blockly.Blocks['controls_if_else'], Logic_color);

reColor(Blockly.Blocks['foreach'], Loops_color);
reColor(Blockly.Blocks['foreach_simple'], Loops_color);
reColor(Blockly.Blocks['foreach_item'], Loops_color);
reColor(Blockly.Blocks['controls_repeat'], Loops_color);
reColor(Blockly.Blocks['controls_forEach'], Loops_color);
reColor(Blockly.Blocks['controls_whileUntil'], Loops_color);
reColor(Blockly.Blocks['controls_for'], Loops_color);
reColor(Blockly.Blocks['loop_controller'], Loops_color);

reColor(Blockly.Blocks['math_number'], Math_color);
reColor(Blockly.Blocks['math_arithmetic'], Math_color);
reColor(Blockly.Blocks['math_random_int'], Math_color);
reColor(Blockly.Blocks['math_modulo'], Math_color);
reColor(Blockly.Blocks['math_constrain'], Math_color);
reColor(Blockly.Blocks['math_single'], Math_color);
reColor(Blockly.Blocks['math_trig'], Math_color);
reColor(Blockly.Blocks['math_constant'], Math_color);
reColor(Blockly.Blocks['math_number_property'], Math_color);
reColor(Blockly.Blocks['math_round'], Math_color);
reColor(Blockly.Blocks['math_on_list'], Math_color);
reColor(Blockly.Blocks['math_random_float'], Math_color);

reColor(Blockly.Blocks['text'], Text_color);
reColor(Blockly.Blocks['text_join'], Text_color);
reColor(Blockly.Blocks['text_append'], Text_color);
reColor(Blockly.Blocks['length_text'], Text_color);
reColor(Blockly.Blocks['text_isEmpty'], Text_color);
reColor(Blockly.Blocks['indexof_text'], Text_color);
reColor(Blockly.Blocks['text_charAt'], Text_color);
reColor(Blockly.Blocks['text_getSubstring'], Text_color);
reColor(Blockly.Blocks['text_changeCase'], Text_color);
reColor(Blockly.Blocks['text_trim'], Text_color);
reColor(Blockly.Blocks['text_prompt_ext'], Text_color);
reColor(Blockly.Blocks['text_print'], Text_color);
reColor(Blockly.Blocks['text_create_join_container'], Text_color);
reColor(Blockly.Blocks['text_create_join_item'], Text_color);

reColor(Blockly.Blocks['lists_create_with'], List_color);
reColor(Blockly.Blocks['lists_create_with_item'], List_color);
reColor(Blockly.Blocks['lists_create_with_container'], List_color);
reColor(Blockly.Blocks['print_r'], List_color);
reColor(Blockly.Blocks['repeat_list'], List_color);
reColor(Blockly.Blocks['length_list'], List_color);
reColor(Blockly.Blocks['lists_isEmpty'], List_color);
reColor(Blockly.Blocks['indexof_list'], List_color);
reColor(Blockly.Blocks['lists_getIndex'], List_color);
reColor(Blockly.Blocks['lists_setIndex'], List_color);
reColor(Blockly.Blocks['lists_getSublist'], List_color);
reColor(Blockly.Blocks['lists_split'], List_color);
reColor(Blockly.Blocks['sort_list'], List_color);

reColor(Blockly.Blocks['load_xml'], Programmcontrol_color);
reColor(Blockly.Blocks['sleep_time'], Programmcontrol_color);
reColor(Blockly.Blocks['tag_br'], Programmcontrol_color);
reColor(Blockly.Blocks['get_date'], Programmcontrol_color);

reColor(Blockly.Blocks['variables_set'], Variables_color);
reColor(Blockly.Blocks['variables_get'], Variables_color);
reColor(Blockly.Blocks['math_change'], Variables_color);

reColor(Blockly.Blocks['procedures_defreturn'], Function_color);
reColor(Blockly.Blocks['procedures_defnoreturn'], Function_color);
reColor(Blockly.Blocks['procedures_callreturn'], Function_color);
reColor(Blockly.Blocks['procedures_callnoreturn'], Function_color);
reColor(Blockly.Blocks['procedures_ifreturn'], Function_color);
reColor(Blockly.Blocks['procedures_mutatorcontainer'], Function_color);
reColor(Blockly.Blocks['procedures_mutatorarg'], Function_color);


reColor(Blockly.Blocks['connect_server'], Connection_color);
reColor(Blockly.Blocks['connect_baall'], Connection_color);
reColor(Blockly.Blocks['get_name'], Connection_color);
reColor(Blockly.Blocks['get_name_simple'], Connection_color);
reColor(Blockly.Blocks['get_status'], Connection_color);
reColor(Blockly.Blocks['get_status_simple'], Connection_color);
reColor(Blockly.Blocks['get_status_item'], Connection_color);
reColor(Blockly.Blocks['get_emotion'], Connection_color);
reColor(Blockly.Blocks['get_emotion_data'], Connection_color);

reColor(Blockly.Blocks['set_value'], Status_color);
reColor(Blockly.Blocks['set_value_rgb'], Status_color);
reColor(Blockly.Blocks['set_value_dimmer'], Status_color);
reColor(Blockly.Blocks['set_status_items'], Status_color);
reColor(Blockly.Blocks['tv_program'], Status_color);

reColor(Blockly.Blocks['baall_frontend'], Design_color);
reColor(Blockly.Blocks['baall_frontend_adv'], Design_color);


reColor(Blockly.Blocks['connect_baall_object'], Object_color_connction);
reColor(Blockly.Blocks['baall_objects'], Object_color_connction);

reColor(Blockly.Blocks['set_status_objects'], Object_color_status);
reColor(Blockly.Blocks['set_status_tv'], Object_color_status);
reColor(Blockly.Blocks['set_status_dimmer'], Object_color_status);
reColor(Blockly.Blocks['set_status_rgb'], Object_color_status);
reColor(Blockly.Blocks['get_status_object'], Object_color_status);

reColor(Blockly.Blocks['design_object'], Object_color_design);
reColor(Blockly.Blocks['design_baall_objects'], Object_color_design);
//--------------------------------
//field of programming
document.getElementById("bal").style.background = "rgb(27, 94, 32)";
document.getElementById("english").style.background = "rgb(27, 94, 32)";
//--------------------------------
function consoleLog(msg){
    console.log(msg);
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
//saving/generating
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
//saving PHP code
var savePhp_clicks = 0;

function savePHP() {
    savePhp_clicks += 1;
    if ($('#phpCode').css('visibility') == 'visible' && $('#modifier').css('display') == 'none') {
        var php_text = document.getElementById("phpCode");
        var my_php = php_text.innerText || php_text.textContent;

        var php_textAsBlob = new Blob([my_php], {
            type: 'text/plain'
        });

        var phpFileName = document.getElementById("fileName_php").value;

        phpLink = document.createElement("a");

        if (phpFileName) {
			if (phpFileName.indexOf(".beesm") == -1) {
				phpFileName  = phpFileName+".beesm";
			}
            phpLink.download = phpFileName;
        } else {
            phpLink.download = 'phpCode[' + savePhp_clicks + '].beesm';
        }
        phpLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            phpLink.href = window.webkitURL.createObjectURL(php_textAsBlob);
        } else {
            phpLink.href = window.URL.createObjectURL(php_textAsBlob);
            phpLink.style.display = "none";
            document.body.appendChild(phpLink);
        }
        phpLink.click();
    }
    else if ($('#phpCode').css('visibility') != 'visible' && $('#modifier').css('display') != 'none') {
        var php_text = document.getElementById("modifyCodeDiv");
        var my_php = php_text.innerText || php_text.textContent;
        var php_textAsBlob = new Blob([my_php], {
            type: 'text/plain'
        });

        var phpFileName = document.getElementById("fileName_php").value;

        phpLink = document.createElement("a");

        if (phpFileName) {
			if (phpFileName.indexOf(".beesm") == -1) {
				phpFileName  = phpFileName+".beesm";
			}
            phpLink.download = phpFileName;
        } else {
            phpLink.download = 'phpCode[' + savePhp_clicks + '].beesm';
        }
        phpLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            phpLink.href = window.webkitURL.createObjectURL(php_textAsBlob);
        } else {
            phpLink.href = window.URL.createObjectURL(php_textAsBlob);
            phpLink.style.display = "none";
            document.body.appendChild(phpLink);
        }
        phpLink.click();
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
    document.getElementById("hidePhp").style.visibility = "hidden";
    document.getElementById("phpCode").style.visibility = "hidden";
});

$('#generate').click(function() {
    $('#modifier').hide();
    document.getElementById("hidePhp").style.visibility = "visible";
    document.getElementById("phpCode").style.visibility = "visible";
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
//this is to refresh the baall
function refreshBaall() {
    var url = 'index.php';
    $('#baall-wrapper').load(url + ' #baall');
    $('#designBaall-wrapper').load(url + ' #designBaall');
}

//--------------------------------
//web socket
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
            // eb Socket is connected, send data using send()
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
                        refreshBaall();
                    }
                }
            }
        };

        ws.onclose = function() {
            consoleLog("Connection is closed...");
	        setTimeout(function(){WebSocketBaall()}, 7000);
        };

        window.onbeforeunload = function(evt) {
            ws.close();
        };
    } else {
        consoleLog("WebSocket NOT supported by your Browser!");
    }
}
//--------------------------------
var flag_designBaall = false;

function showBaall() {
    flag_designBaall = false;
    setTimeout(
        function() {
            var url = 'index.php';
            $('#baall-wrapper').load(url + ' #baall');
        }, 100);
}

function drawBaall() {
    flag_designBaall = true;
    setTimeout(
        function() {
            var url = 'index.php';
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
    // Generate PHP code and display it.
    //generate the code based on the workspace
    Blockly.PHP.INFINITE_LOOP_TRAP = null;
    var code = Blockly.PHP.workspaceToCode(workspace);
    //find the load_xml in the code string
    var myString = code;
    var count = (myString.match(/load_xml/g) || []).length;

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
        //Create a headless workspace
        var workspace = new Blockly.Workspace();
        Blockly.Xml.domToWorkspace(xml, workspace);
        var codeLoad = Blockly.PHP.workspaceToCode(workspace);
        document.getElementById('phpCode').innerText = codeLoad;
        code = code.replace(res, codeLoad);
    }
    //PHP code
    document.getElementById("phpCode").innerText = (code);
    //code modifier
    document.getElementById("modifyCode").value = (code);
    //it is to put textarea content into the middle div which is "modifyCodeDiv"
    document.getElementById("modifyCodeDiv").innerText = document.getElementById("modifyCode").value;
    //highlight the code
    hljs.highlightBlock($('#phpCode').get(0));
    hljs.highlightBlock($('#modifyCodeDiv').get(0));
}
//--------------------------------
//this is to refresh the BAALL Output
function refreshOutputBaall() {
    document.getElementById("output").innerText = "";
}
//--------------------------------
function runCode() {
    if(flag_designBaall == true){
        $.ajax({
            type: "POST",
            url: "clean-design-baall.php",
            data: "",
            success: function(msg){
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Some errors occurred!");
            }
        });
    }
    //run from workspace
    if ($('#phpCode').css('visibility') == 'visible' && $('#modifier').css('display') == 'none') {
        //alert("I am in run php");
        Blockly.PHP.INFINITE_LOOP_TRAP = null;
        var my_element = document.getElementById('phpCode');
        var my_str = my_element.innerText || my_element.textContent;
        document.getElementById("modifyCode").value = my_str;
        var code = document.getElementById("modifyCode").value;
	document.getElementById("loader").style.display="block";
	document.getElementById("run").disabled = true;
        remoteEval(code);
    }
    //run from code modifier
    else if ($('#phpCode').css('visibility') != 'visible' && $('#modifier').css('display') != 'none') {
        var my_element = document.getElementById('modifyCodeDiv');
        var my_str = my_element.innerText || my_element.textContent;
        document.getElementById("modifyCode").value = my_str;
        var php_code = document.getElementById("modifyCode").value;
        if (php_code === null) {
            showCode();
        }
	document.getElementById("loader").style.display="block";
	document.getElementById("run").disabled = true;
        remoteEval(php_code);
    }
}
//--------------------------------
//execute runCode for second time --> design only
function secondTime() {
    if ($('#designBaall-wrapper').css('display') != 'none' && $('#baall-wrapper').css('display') == 'none') {
        setTimeout(
            function() {
                if ($('#phpCode').css('visibility') == 'visible' && $('#modifier').css('display') == 'none') {
                    Blockly.PHP.INFINITE_LOOP_TRAP = null;
                    var my_element = document.getElementById('phpCode');
                    var my_str = my_element.innerText || my_element.textContent;
                    document.getElementById("modifyCode").value = my_str;
                    var code = document.getElementById("modifyCode").value;
		    document.getElementById("loader").style.display="block";
		    document.getElementById("run").disabled = true;
                    remoteEval(code);
                }
                else if ($('#phpCode').css('visibility') != 'visible' && $('#modifier').css('display') != 'none') {
                    var my_element = document.getElementById('modifyCodeDiv');
                    var my_str = my_element.innerText || my_element.textContent;
                    document.getElementById("modifyCode").value = my_str;
                    var php_code = document.getElementById("modifyCode").value;
                    if (php_code === null) {
                        showCode();
                    }
		    document.getElementById("loader").style.display="block";
		    document.getElementById("run").disabled = true;
                    remoteEval(php_code);
                }
            }, 150);
    }
}
//--------------------------------
//this function is to post and call the evel-baall.php & show the output
function remoteEval(code) {
    var work_area = "SM";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "eval-baall.php?task="+getTask()+"&area="+work_area, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var str = (xhr.responseText);
            var first = str.indexOf('<html>');
            var last = str.indexOf('</html>');
            last = last + 7;
            var str_final = str.slice(first, last);
            str = str.replace(str_final, '');
            str = str.trim();
            document.getElementById("output").innerHTML = (str);
            setTimeout(
                function() {
                    var url = 'index.php';
                    $('#baall-wrapper').load(url + ' #baall');
                    $('#designBaall-wrapper').load(url + ' #designBaall');
                }, 100);
	    document.getElementById("loader").style.display="none";
	    document.getElementById("run").disabled = false;
        }
    }
    xhr.send(code);
}
//--------------------------------
function remoteSaveXML(code, name) {
	var work_area = "SM";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "saveXml.php?name="+encodeURI(name)+"&task="+getTask()+"&area="+work_area, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
        }
    }
    xhr.send(code);
}
//--------------------------------
function remoteSaveTimer(code) {
	var work_area = "SM";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "saveTime.php?task="+getTask()+"&area="+work_area, true);
    xhr.send(code);
}

