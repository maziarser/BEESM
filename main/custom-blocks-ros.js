Blockly.Blocks['print_r'] = {
    init: function() {
        this.appendValueInput("print_r")
            .setCheck(null)
            .appendField("print_r");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(140);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['tag_br'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Line Break");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['loop_controller'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["break out", "break"],
                ["continue with the next iteration", "continue"]
            ]), "cntrol")
            .appendField("of loop");
        this.setPreviousStatement(true, null);
        this.setColour(60);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function(block) {
        block = !1;
        var b = this;
        do {
            if (-1 != this.LOOP_TYPES.indexOf(b.type)) {
                block = !0;
                break
            }
            b = b.getSurroundParent()
        } while (b);
        block ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING)
    },
    LOOP_TYPES: ["controls_repeat", "controls_forEach", "controls_repeat_ext", "foreach", "controls_for", "controls_whileUntil", "foreach_simple"]
};
//----------------------------------------------
Blockly.Blocks['foreach_simple'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("for each item");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['load_xml'] = {
    init: function() {
        this.appendValueInput("xml")
            .setCheck("String")
            .appendField("load XML");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(70);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['sleep_time'] = {
    init: function() {
        this.appendValueInput("sleep")
            .setCheck("Number")
            .appendField("sleep");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(70);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['repeat_list'] = {
    init: function() {
        this.appendValueInput("item")
            .setCheck(null)
            .appendField("create list with item");
        this.appendValueInput("num")
            .setCheck("Number")
            .appendField("repeated");
        this.appendDummyInput()
            .appendField("times");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(140);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['length_list'] = {
    init: function() {
        this.appendValueInput("length")
            .setCheck("String")
            .appendField("length of");
        this.setOutput(true, null);
        this.setColour(140);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['indexof_list'] = {
    init: function() {
        this.appendValueInput("list")
            .setCheck(null)
            .appendField("in list");
        this.appendDummyInput()
            .appendField("find")
            .appendField(new Blockly.FieldDropdown([
                ["first", "first"],
                ["last", "last"]
            ]), "loc");
        this.appendValueInput("value")
            .setCheck(null)
            .appendField("occurrence of item");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(140);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['sort_list'] = {
    init: function() {
        this.appendValueInput("list")
            .setCheck(null)
            .appendField("sort")
            .appendField(new Blockly.FieldDropdown([
                ["numeric", "NUMERIC"],
                ["alphabetic", "TEXT"],
                ["alphabetic, ignore case", "IGNORE_CASE"]
            ]), "type")
            .appendField(new Blockly.FieldDropdown([
                ["ascending", "1"],
                ["descending", "-1"]
            ]), "direction");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(140);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//*****************************************************************
//********************* Free Navigation ***************************
//*****************************************************************
Blockly.Blocks['movebot_sec'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("move")
            .appendField(new Blockly.FieldDropdown([
                ["Forward", "'Forward'"],
                ["Backward", "'Backward'"]
            ]), "direction");
        this.appendValueInput("second")
            .setCheck("Number")
            .appendField("for");
        this.appendDummyInput()
            .appendField("second with")
            .appendField(new Blockly.FieldDropdown([
                ["slow", "'slow'"],
                ["normal", "'normal'"],
                ["fast", "'fast'"]
            ]), "speed")
            .appendField("speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['turnbot_sec'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("turn")
            .appendField(new Blockly.FieldDropdown([
                ["Right", "'Right'"],
                ["Left", "'Left'"]
            ]), "rotation");
        this.appendValueInput("second")
            .setCheck("Number")
            .appendField("for");
        this.appendDummyInput()
            .appendField("second with")
            .appendField(new Blockly.FieldDropdown([
                ["slow", "'slow'"],
                ["normal", "'normal'"],
                ["fast", "'fast'"]
            ]), "speed")
            .appendField("speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['safe_movebot_sec'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("safe move")
            .appendField(new Blockly.FieldDropdown([
                ["Forward", "'Forward'"],
                ["Backward", "'Backward'"]
            ]), "direction");
        this.appendValueInput("second")
            .setCheck("Number")
            .appendField("for");
        this.appendDummyInput()
            .appendField("second with")
            .appendField(new Blockly.FieldDropdown([
                ["slow", "'slow'"],
                ["fast", "'fast'"]
            ]), "speed")
            .appendField("speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['movebot_dis'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("move")
            .appendField(new Blockly.FieldDropdown([
                ["Forward", "'Forward'"],
                ["Backward", "'Backward'"]
            ]), "direction");
        this.appendValueInput("distance")
            .setCheck("Number")
            .appendField("for");
        this.appendDummyInput()
            .appendField("meter with")
            .appendField(new Blockly.FieldDropdown([
                ["slow", "'slow'"],
                ["normal", "'normal'"],
                ["fast", "'fast'"]
            ]), "speed")
            .appendField("speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['turnbot_deg'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("turn")
            .appendField(new Blockly.FieldDropdown([
                ["Right", "'Right'"],
                ["Left", "'Left'"]
            ]), "rotation");
        this.appendValueInput("degree")
            .setCheck("Number")
            .appendField("for");
        this.appendDummyInput()
            .appendField("degree with")
            .appendField(new Blockly.FieldDropdown([
                ["slow", "'slow'"],
                ["normal", "'normal'"],
                ["fast", "'fast'"]
            ]), "speed")
            .appendField("speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['safe_movebot_dis'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("safe move")
            .appendField(new Blockly.FieldDropdown([
                ["Forward", "'Forward'"],
                ["Backward", "'Backward'"]
            ]), "direction");
        this.appendValueInput("distance")
            .setCheck("Number")
            .appendField("for");
        this.appendDummyInput()
            .appendField("meter with")
            .appendField(new Blockly.FieldDropdown([
                ["slow", "'slow'"],
                ["fast", "'fast'"]
            ]), "speed")
            .appendField("speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['sleep_bot'] = {
    init: function() {
        this.appendValueInput("second")
            .setCheck("Number")
            .appendField("wait for");
        this.appendDummyInput()
            .appendField("second");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['scanner_data'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("laser scanner data");
        this.setOutput(true, null);
        this.setInputsInline(true);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['scanner_data_range'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("laser scanner data");
        this.appendValueInput("x_range")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("from degree");
        this.appendValueInput("y_range")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("to degree");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['scanner_data_check'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("checking laser scanner data");
        this.appendValueInput("x_range")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("from degree");
        this.appendValueInput("y_range")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("to degree");
        this.appendValueInput("distance")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("distance(10-200cm)");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['stop_bot'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("STOP ROBOT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//*****************************************************************
//********************** Map Navigation ***************************
//*****************************************************************
Blockly.Blocks['connect_server_ros'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("connect server_ros");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['movebot_link'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("move robot");
        this.appendValueInput("meter")
            .setCheck("Number")
            .appendField("for");
        this.appendDummyInput()
            .appendField("meter");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['turnbot_link'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("turn robot");
        this.appendValueInput("degree")
            .setCheck("Number")
            .appendField("for");
        this.appendDummyInput()
            .appendField("degree");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['initialization_pose'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("initial position");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['pose_change'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("change initial position to");
        this.appendValueInput("x_tar")
            .setCheck("Number")
            .appendField("X target");
        this.appendValueInput("y_tar")
            .setCheck("Number")
            .appendField("Y target");
        this.appendValueInput("degree")
            .setCheck("Number")
            .appendField("Z target");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['start_position'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("go to starting position");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['movebot_location'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("move robot to")
            .appendField(new Blockly.FieldDropdown([["kitchen","\"kitchen\""], ["sofa","\"sofa\""], ["TV","\"TV\""], ["table","\"table\""], ["bathroom","\"bathroom\""], ["wardrobe","\"wardrobe\""], ["bed","\"bed\""], ["bookshelf","\"bookshelf\""], ["main_door","\"main_door\""]]), "position");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['movebot_position'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("move robot to position");
        this.appendValueInput("x_goal")
            .setCheck("Number")
            .appendField("X target");
        this.appendValueInput("y_goal")
            .setCheck("Number")
            .appendField("Y target");
        this.appendValueInput("degree")
            .setCheck("Number")
            .appendField("Z target");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['get_location'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("get")
            .appendField(new Blockly.FieldDropdown([["x","\"x\""], ["y","\"y\""], ["z","\"z\""]]), "values")
            .appendField("position");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['sleep_robot'] = {
    init: function() {
        this.appendValueInput("second")
            .setCheck("Number")
            .appendField("wait for");
        this.appendDummyInput()
            .appendField("second");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['stopbot_map'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("STOP ROBOT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//*****************************************************************
//************************** BAALL ********************************
//*****************************************************************
Blockly.Blocks['connect_baall'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("connect server");
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['get_status_item'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("get status item");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['get_status_simple'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("get status");
        this.setOutput(true, null);
        this.setColour(35);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function(block) {
        block = !1;
        var b = this;
        do {
            if (-1 != this.LOOP_TYPES.indexOf(b.type)) {
                block = !0;
                break
            }
            b = b.getSurroundParent()
        } while (b);
        block ? this.setWarningText(null) : this.setWarningText("Warning: this block may only be used within \"foreach item\" Block.")
    },
    LOOP_TYPES: ["foreach_item", "foreach_simple"]
};
//----------------------------------------------
Blockly.Blocks['get_name_simple'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("get name");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function(block) {
        block = !1;
        var b = this;
        do {
            if (-1 != this.LOOP_TYPES.indexOf(b.type)) {
                block = !0;
                break
            }
            b = b.getSurroundParent()
        } while (b);
        block ? this.setWarningText(null) : this.setWarningText("Warning: this block may only be used within \"foreach item\" Block.")
    },
    LOOP_TYPES: ["foreach_item", "foreach_simple"]
};
//----------------------------------------------
Blockly.Blocks['set_value'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("set status");
        this.appendDummyInput()
            .appendField("to be")
            .appendField(new Blockly.FieldDropdown([
                ["on", "\"on\""],
                ["off", "\"off\""],
                ["open", "\"open\""],
                ["close", "\"close\""]
            ]), "status");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['set_value_dimmer'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("set status dimmer");
        this.appendValueInput("status")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("to be");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['set_value_rgb'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("set status RGB")
        this.appendValueInput("red")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("red");
        this.appendValueInput("green")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("green");
        this.appendValueInput("blue")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("blue");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['set_status_items'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("set status");
        this.appendValueInput("status")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("to be");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['tv_program'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("set TV program to ")
            .appendField(new Blockly.FieldDropdown([
                ["Pause", "'Pause'"],
                ["Das Erste", "'Das Erste'"],
                ["ZDF", "'ZDFE'"],
                ["arte", "'arte'"],
                ["PHOENIX", "'PHOENIX'"],
                ["MDR", "'MDR FERNSEHEN'"],
                ["WDR", "'WDR K??ln'"],
                ["NDR", "'NDR FS NDS'"],
                ["3sat", "'3sat'"],
                ["ZDFinfo", "'ZDFinfo'"],
                ["zdf.kultur", "'ZDF.Kultur'"],
                ["ZDFNeo", "'ZDFNeo'"],
                ["Tagesschau24", "'Tagesschau24'"],
                ["KiKa", "'neo/KiKa'"],
                ["rbb", "'RBB'"],
                ["SWR", "'SWR'"],
                ["SR", "'SR'"],
                ["BR", "'BR'"],
                ["radioswissclassic", "'http://www.radioswissclassic.ch/de/live/aacp.m3u'"],
                ["radioswissjazz", "'http://www.radioswissjazz.ch/live/aacp.m3u'"],
                ["radioswisspop", "'http://www.radioswisspop.ch/live/aacp.m3u'"]
            ]), "NAME");
        this.appendValueInput("volume")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("volume");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(80);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['baall_frontend'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("draw BAALL");
        this.appendValueInput("row")
            .setCheck("Number")
            .appendField("row");
        this.appendValueInput("col")
            .setCheck("Number")
            .appendField("column");
        this.appendDummyInput()
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([
                ["Wall", "\"wall\""],
                ["Blank", "\"blank\""],
                ["bedroom Jack 1", "\"bedroomJack1\""],
                ["bedroom Jack 2", "\"bedroomJack2\""],
                ["Beedroom Light 1", "\"bedroomLight1\""],
                ["Beedroom Light 2", "\"bedroomLight2\""],
                ["Living room Jack 1", "\"livingJack1\""],
                ["Living room Light 1", "\"livingLight1\""],
                ["Living room Light 2", "\"livingLight2\""],
                ["Corridor Light", "\"corridorLight\""],
                ["Kitchen Light", "\"kitchenLight\""],
                ["Bathroom Light", "\"bathroomLight\""],
                ["Bathroom Basin", "\"basin\""],
                ["Bathroom Toilet", "\"bathroomToiletHeight\""],
                ["Bulb Lamp", "\"bulblamp\""],
                ["Floor Lamp", "\"floorlamp\""],
                ["Bathroom Door", "\"bathroomdoor\""],
                ["Upper Left Door", "\"upperLeftDoor\""],
                ["Upper Right Door", "\"upperRightDoor\""],
                ["Lower Left Door", "\"lowerLeftDoor\""],
                ["Lower Right Door", "\"lowerRightDoor\""],
                ["TV Program", "\"tvProgram\""],
                ["Living room Light3", "\"livingLight3\""]
            ]), "item");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(35);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['baall_frontend_adv'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("design BAALL");
        this.appendValueInput("firstX")
            .setCheck("Number")
            .appendField("row");
        this.appendValueInput("firstY")
            .setCheck("Number")
            .appendField("")
            .appendField("column");
        this.appendDummyInput()
            .appendField("");
        this.appendValueInput("lastX")
            .setCheck("Number")
            .appendField("width");
        this.appendValueInput("lastY")
            .setCheck("Number")
            .appendField("")
            .appendField("height");
        this.appendDummyInput()
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([
                ["Wall", "\"wall\""],
                ["Blank", "\"blank\""],
                ["bedroom Jack 1", "\"bedroomJack1\""],
                ["bedroom Jack 2", "\"bedroomJack2\""],
                ["Beedroom Light 1", "\"bedroomLight1\""],
                ["Beedroom Light 2", "\"bedroomLight2\""],
                ["Living room Jack 1", "\"livingJack1\""],
                ["Living room Light 1", "\"livingLight1\""],
                ["Living room Light 2", "\"livingLight2\""],
                ["Corridor Light", "\"corridorLight\""],
                ["Kitchen Light", "\"kitchenLight\""],
                ["Bathroom Light", "\"bathroomLight\""],
                ["Bathroom Basin", "\"basin\""],
                ["Bathroom Toilet", "\"bathroomToiletHeight\""],
                ["Bulb Lamp", "\"bulblamp\""],
                ["Floor Lamp", "\"floorlamp\""],
                ["Bathroom Door", "\"bathroomdoor\""],
                ["Upper Left Door", "\"upperLeftDoor\""],
                ["Upper Right Door", "\"upperRightDoor\""],
                ["Lower Left Door", "\"lowerLeftDoor\""],
                ["Lower Right Door", "\"lowerRightDoor\""],
                ["TV Program", "\"tvProgram\""],
                ["Living room Light3", "\"livingLight3\""]
            ]), "item");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(35);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['get_emotion'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("get face emotions");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['get_emotion_data'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("get face emotions data");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }

};
//*****************************************************************
//************************ For Arduino ****************************
//*****************************************************************
Blockly.Blocks['raspy_arduino_write'] = {
    init: function() {
        this.appendValueInput("number")
            .setCheck("Number")
            .appendField("write");
        this.appendDummyInput()
            .appendField("to port")
            .appendField(new Blockly.FieldDropdown([["ACM0","00"], ["ACM1","01"], ["USB0","10"], ["USB1","11"]]), "port");
        this.appendDummyInput()
            .appendField("with data rate")
            .appendField(new Blockly.FieldDropdown([["115200","115200"], ["9600","9600"], ["300","300"]]), "rate")
            .appendField("bps");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['raspy_arduino_read'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("read from port")
            .appendField(new Blockly.FieldDropdown([["ACM0","00"], ["ACM1","01"], ["USB0","10"], ["USB1","11"]]), "port");
        this.appendDummyInput()
            .appendField("with data rate")
            .appendField(new Blockly.FieldDropdown([["115200","115200"], ["9600","9600"], ["300","300"]]), "rate")
            .appendField("bps");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

