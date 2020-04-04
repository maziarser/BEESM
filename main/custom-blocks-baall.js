Blockly.Blocks['print_r'] = {
    init: function() {
        this.appendValueInput("print_r")
            .setCheck(null)
            .appendField("print_r");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['prints'] = {
    init: function() {
        this.appendValueInput("print")
            .setCheck(null)
            .appendField("print");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['length_text'] = {
    init: function() {
        this.appendValueInput("length")
            .setCheck("String")
            .appendField("length of");
        this.setOutput(true, null);
        this.setColour(100);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['indexof_text'] = {
    init: function() {
        this.appendValueInput("text")
            .setCheck(null)
            .appendField("in text");
        this.appendDummyInput()
            .appendField("find")
            .appendField(new Blockly.FieldDropdown([
                ["first", "first"],
                ["last", "last"]
            ]), "loc");
        this.appendValueInput("value")
            .setCheck(null)
            .appendField("occurrence of text");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(100);
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
Blockly.Blocks['get_date'] = {
    init: function() {
        this.appendValueInput("timeformat")
            .setCheck(null)
            .appendField("date");
        this.setOutput(true, null);
        this.setColour(160);
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
    LOOP_TYPES: ["controls_repeat", "controls_forEach", "controls_repeat_ext", "foreach", "foreach_simple", "foreach_item", "foreach_simple_de" , "foreach_item_de", "controls_for", "controls_whileUntil"]
};
//----------------------------------------------
Blockly.Blocks['block_boolean'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["true", "true"],
                ["false", "false"]
            ]), "boolean");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['math_random'] = {
    init: function() {
        this.appendValueInput("from")
            .setCheck(null)
            .appendField("random integer from");
        this.appendValueInput("to")
            .setCheck(null)
            .appendField("to");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['foreach'] = {
    init: function() {
        this.appendValueInput("input")
            .setCheck(null)
            .appendField("for each item")
            .appendField(new Blockly.FieldVariable("object"), "object")
            .appendField("in list");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65); //120
        this.setTooltip("");
        this.setHelpUrl("");
    }
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
Blockly.Blocks['foreach_item'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("for each item set");
        this.appendValueInput("name")
            .setCheck(null);
        this.appendValueInput("status")
            .setCheck(null)
            .appendField("to name and");
        this.appendDummyInput()
            .appendField("to status");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setInputsInline(true);
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
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
//de
Blockly.Blocks['foreach_item_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("für jedes item setze");
        this.appendValueInput("name")
            .setCheck(null);
        this.appendValueInput("status")
            .setCheck(null)
            .appendField("auf name und");
        this.appendDummyInput()
            .appendField("auf status");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("mache");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['foreach_simple_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("für jedes item");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("mache");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//*****************************************************************
//************************** BAALL ********************************
//*****************************************************************
Blockly.Blocks['connect_server'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("connect server");
        this.setOutput(true, null);
        this.setColour(35);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
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
Blockly.Blocks['get_name'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("get name");
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
        block ? this.setWarningText(null) : this.setWarningText("Warning: this block may only be used within \"foreach\" Block.")
    },
    LOOP_TYPES: ["controls_forEach", "foreach"]
};
//----------------------------------------------
Blockly.Blocks['get_status'] = {
    init: function() {
        this.appendValueInput("status")
            .setCheck(null)
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
        block ? this.setWarningText(null) : this.setWarningText("Warning: this block may only be used within \"foreach\" Block.")
    },
    LOOP_TYPES: ["controls_forEach", "foreach"]
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
    init: function() {
        this.appendDummyInput()
            .appendField("get face emotions data");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['get_values'] = {
    init: function() {
        this.appendValueInput("item")
            .setCheck(null)
            .appendField("get")
            .appendField(new Blockly.FieldDropdown([
                ["name", "\"name\""],
                ["status", "\"status\""]
            ]), "values");
        this.setOutput(true, null);
        this.setColour(35);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['set_status'] = {
    init: function() {
        this.appendValueInput("flagStatus")
            .setCheck("Number")
            .appendField("flag status");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
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
            /*.appendField("Name")*/;
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
Blockly.Blocks['set_value_dimmer'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("set status dimmer");
        this.appendValueInput("status")
            .setCheck("Number")
            .appendField("to");
        this.setInputsInline(true);
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
        this.appendDummyInput()
            .appendField("=");
        this.appendValueInput("status")
            .setCheck(null);
        this.setInputsInline(true);
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
            .appendField("to")
            .appendField(new Blockly.FieldDropdown([
                ["Wall", "\"wall\""],
                ["Blank", "\"blank\""],
                ["bedroom Jack 1", "\"bedroomJack1\""],
                ["bedroom Jack 2", "\"bedroomJack2\""],
                ["Bedroom Light 1", "\"bedroomLight1\""],
                ["Bedroom Light 2", "\"bedroomLight2\""],
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
                ["Kitchen Cabinets", "\"kitchennet\""],
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
            .appendField("X [");
        this.appendValueInput("firstY")
            .setCheck("Number")
            .appendField("]")
            .appendField("Y [");
        this.appendDummyInput()
            .appendField("]  to");
        this.appendValueInput("lastX")
            .setCheck("Number")
            .appendField("X [");
        this.appendValueInput("lastY")
            .setCheck("Number")
            .appendField("]")
            .appendField("Y [");
        this.appendDummyInput()
            .appendField("]  =")
            .appendField(new Blockly.FieldDropdown([
                ["Wall", "\"wall\""],
                ["Blank", "\"blank\""],
                ["bedroom Jack 1", "\"bedroomJack1\""],
                ["bedroom Jack 2", "\"bedroomJack2\""],
                ["Bedroom Light 1", "\"bedroomLight1\""],
                ["Bedroom Light 2", "\"bedroomLight2\""],
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
                ["Kitchen Cabinets", "\"kitchennet\""],
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
Blockly.Blocks['connect_baall_object'] = {
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
Blockly.Blocks['baall_objects'] = {
    init: function() {
        this.appendValueInput("objects")
            .setCheck(null)
            .appendField("choose object")
            .appendField(new Blockly.FieldDropdown([
                ["bedroom Jack 1", "bedroomJack1"],
                ["bedroom Jack 2", "bedroomJack2"],
                ["Bedroom Light 1", "bedroomLight1"],
                ["Bedroom Light 2", "bedroomLight2"],
                ["Living room Jack 1", "livingJack1"],
                ["Living room Light 1", "livingLight1"],
                ["Living room Light 2", "livingLight2"],
                ["Corridor Light", "corridorLight"],
                ["Kitchen Light", "kitchenLight"],
                ["Bathroom Light", "bathroomLight"],
                ["Bathroom Basin", "basin"],
                ["Bathroom Toilet", "bathroomToiletHeight"],
                ["Bulb Lamp", "bulblamp"],
                ["Floor Lamp", "floorlamp"],
                ["Bathroom Door", "bathroomdoor"],
                ["Upper Left Door", "upperLeftDoor"],
                ["Upper Right Door", "upperRightDoor"],
                ["Lower Left Door", "lowerLeftDoor"],
                ["Lower Right Door", "lowerRightDoor"],
                ["TV Program", "tvProgram"],
                ["Kitchen Cabinets", "\"kitchennet\""],
                ["Living room Light3", "livingLight3"]
            ]), "item");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['design_object'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("design home");
        this.appendValueInput("firstX")
            .setCheck("Number")
            .appendField("X [");
        this.appendValueInput("firstY")
            .setCheck("Number")
            .appendField("]")
            .appendField("Y [");
        this.appendDummyInput()
            .appendField("]  to");
        this.appendValueInput("lastX")
            .setCheck("Number")
            .appendField("X [");
        this.appendValueInput("lastY")
            .setCheck("Number")
            .appendField("]")
            .appendField("Y [");
        this.setInputsInline(true);
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
        block ? this.setWarningText(null) : this.setWarningText("Warning: this block may only be used with \"design object\" Block.")
    },
    LOOP_TYPES: ["design_baall_objects"]
};
//----------------------------------------------
Blockly.Blocks['design_baall_objects'] = {
    init: function() {
        this.appendValueInput("objects")
            .setCheck(null)
            .appendField("design object")
            .appendField(new Blockly.FieldDropdown([
                ["bedroom Jack 1", "design_bedroomJack1"],
                ["bedroom Jack 2", "design_bedroomJack2"],
                ["Bedroom Light 1", "design_bedroomLight1"],
                ["Bedroom Light 2", "design_bedroomLight2"],
                ["Living room Jack 1", "design_livingJack1"],
                ["Living room Light 1", "design_livingLight1"],
                ["Living room Light 2", "design_livingLight2"],
                ["Corridor Light", "design_corridorLight"],
                ["Kitchen Light", "design_kitchenLight"],
                ["Bathroom Light", "design_bathroomLight"],
                ["Bathroom Basin", "design_basin"],
                ["Bathroom Toilet", "design_bathroomToiletHeight"],
                ["Bulb Lamp", "design_bulblamp"],
                ["Floor Lamp", "design_floorlamp"],
                ["Bathroom Door", "design_bathroomdoor"],
                ["Upper Left Door", "design_upperLeftDoor"],
                ["Upper Right Door", "design_upperRightDoor"],
                ["Lower Left Door", "design_lowerLeftDoor"],
                ["Lower Right Door", "design_lowerRightDoor"],
                ["TV Program", "design_tvProgram"],
                ["Kitchen Cabinets", "\"kitchennet\""],
                ["Living room Light3", "design_livingLight3"]
            ]), "item");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['get_status_object'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("get status object")
            .appendField(new Blockly.FieldDropdown([
                ["bedroom Jack 1", "bedroomJack1"],
                ["bedroom Jack 2", "bedroomJack2"],
                ["Bedroom Light 1", "bedroomLight1"],
                ["Bedroom Light 2", "bedroomLight2"],
                ["Living room Jack 1", "livingJack1"],
                ["Living room Light 1", "livingLight1"],
                ["Living room Light 2", "livingLight2"],
                ["Corridor Light", "corridorLight"],
                ["Kitchen Light", "kitchenLight"],
                ["Bathroom Light", "bathroomLight"],
                ["Bathroom Basin", "basin"],
                ["Bathroom Toilet", "bathroomToiletHeight"],
                ["Bulb Lamp", "bulblamp"],
                ["Floor Lamp", "floorlamp"],
                ["Bathroom Door", "bathroomdoor"],
                ["Upper Left Door", "upperLeftDoor"],
                ["Upper Right Door", "upperRightDoor"],
                ["Lower Left Door", "lowerLeftDoor"],
                ["Lower Right Door", "lowerRightDoor"],
                ["TV Program", "tvProgram"],
                ["Kitchen Cabinets", "\"kitchennet\""],
                ["Living room Light3", "livingLight3"]
            ]), "item");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['set_status_objects'] = {
    init: function() {
        this.appendValueInput("status")
            .setCheck(null)
            .appendField("set status to");
        this.setInputsInline(true);
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
        block ? this.setWarningText(null) : this.setWarningText("Warning: this block may only be used with \"choose object\" Block.")
    },
    LOOP_TYPES: ["baall_objects"]
};
//----------------------------------------------
Blockly.Blocks['set_status_dimmer'] = {
    init: function() {
        this.appendValueInput("status")
            .setCheck(null)
            .appendField("set status dimmer to");
        this.setInputsInline(true);
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
        block ? this.setWarningText(null) : this.setWarningText("Warning: this block may only be used with \"choose object\" Block.")
    },
    LOOP_TYPES: ["baall_objects"]
};
//----------------------------------------------
Blockly.Blocks['set_status_rgb'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("set status RGB to");
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
        this.setOutput(true, null);
        this.setColour(5);
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
        block ? this.setWarningText(null) : this.setWarningText("Warning: this block may only be used with \"choose object\" Block.")
    },
    LOOP_TYPES: ["baall_objects"]
};
//----------------------------------------------
Blockly.Blocks['set_status_tv'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Fernsehprogramm einstellen auf ")
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
            .appendField("Volumen");
        this.setOutput(true, null);
        this.setColour(80);
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
        block ? this.setWarningText(null) : this.setWarningText("Warning: this block may only be used with \"choose object\" Block.")
    },
    LOOP_TYPES: ["baall_objects"]
};
//----------------------------------------------
//de
Blockly.Blocks['connect_server_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Verbinde mit Server");
        this.setOutput(true, null);
        this.setColour(35);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['connect_baall_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Verbinde mit Server");
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['get_name_de'] = {
    init: function() {
        this.appendValueInput("Name")
            .setCheck(null)
            .appendField("Name holen");
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
        block ? this.setWarningText(null) : this.setWarningText("Warnung: Dieser Block kann nur im \"für jeden Wert\" Block genutzt werden.")
    },
    LOOP_TYPES: ["controls_forEach", "foreach"]
};
//----------------------------------------------
Blockly.Blocks['get_name_simple_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Name holen");
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
        block ? this.setWarningText(null) : this.setWarningText("Warnung: Dieser Block kann nur im \"für jedes item\" Block genutzt werden.")
    },
    LOOP_TYPES: ["foreach_simple_de" , "foreach_item_de"]
};
//----------------------------------------------
Blockly.Blocks['get_status_item_de'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("Hole Status");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['get_status_de'] = {
    init: function() {
        this.appendValueInput("Status")
            .setCheck(null)
            .appendField("Status erhalten");
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
        block ? this.setWarningText(null) : this.setWarningText("Warnung: Dieser Block kann nur im \"für jeden Wert\" Block genutzt werden.")
    },
    LOOP_TYPES: ["controls_forEach", "foreach"]
};
//----------------------------------------------
Blockly.Blocks['get_status_simple_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Status erhalten");
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
        block ? this.setWarningText(null) : this.setWarningText("Warnung: Dieser Block kann nur im \"für jedes item\" Block genutzt werden.")
    },
    LOOP_TYPES: ["foreach_simple_de" , "foreach_item_de"]
};
//----------------------------------------------
Blockly.Blocks['get_emotion_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Erkenne Gesichtszüge");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['get_emotion_data_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Erkenne Gesichtszüge data");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['set_value_de'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("Status setzen");
        this.appendDummyInput()
            .appendField("auf")
            .appendField(new Blockly.FieldDropdown([
                ["auf", "\"on\""],
                ["aus", "\"off\""],
                ["öffnen", "\"open\""],
                ["schließen", "\"close\""]
            ]), "status");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['set_value_rgb_de'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("Status RGB setzen")
        /*.appendField("Name")*/;
        this.appendValueInput("red")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("rot");
        this.appendValueInput("green")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("grün");
        this.appendValueInput("blue")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("blau");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['set_value_dimmer_de'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("Status Dimmer setzen");
        this.appendValueInput("status")
            .setCheck("Number")
            .appendField("auf");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['set_status_items_de'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("Status setzen");
        this.appendDummyInput()
            .appendField("=");
        this.appendValueInput("status")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['tv_program_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Fernsehprogramm einstellen auf ")
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
            .appendField("Volumen");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(80);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['baall_frontend_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("BAALL zeichnen");
        this.appendValueInput("row")
            .setCheck("Number")
            .appendField("Reihe");
        this.appendValueInput("col")
            .setCheck("Number")
            .appendField("Spalte");
        this.appendDummyInput()

            .appendField("auf")
            .appendField(new Blockly.FieldDropdown([
                ["Wall", "\"wall\""],
                ["Blank", "\"blank\""],
                ["bedroom Jack 1", "\"bedroomJack1\""],
                ["bedroom Jack 2", "\"bedroomJack2\""],
                ["Bedroom Light 1", "\"bedroomLight1\""],
                ["Bedroom Light 2", "\"bedroomLight2\""],
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
                ["Kitchen Cabinets", "\"kitchennet\""],
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
Blockly.Blocks['baall_frontend_adv_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Design BAALL");
        this.appendValueInput("firstX")
            .setCheck("Number")
            .appendField("X [");
        this.appendValueInput("firstY")
            .setCheck("Number")
            .appendField("]")
            .appendField("Y [");
        this.appendDummyInput()
            .appendField("]  auf");
        this.appendValueInput("lastX")
            .setCheck("Number")
            .appendField("X [");
        this.appendValueInput("lastY")
            .setCheck("Number")
            .appendField("]")
            .appendField("Y [");
        this.appendDummyInput()
            .appendField("]  =")
            .appendField(new Blockly.FieldDropdown([
                ["Wall", "\"wall\""],
                ["Blank", "\"blank\""],
                ["bedroom Jack 1", "\"bedroomJack1\""],
                ["bedroom Jack 2", "\"bedroomJack2\""],
                ["Bedroom Light 1", "\"bedroomLight1\""],
                ["Bedroom Light 2", "\"bedroomLight2\""],
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
                ["Kitchen Cabinets", "\"kitchennet\""],
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
Blockly.Blocks['connect_baall_object_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Verbinde mit Server");
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['baall_objects_de'] = {
    init: function() {
        this.appendValueInput("objects")
            .setCheck(null)
            .appendField("Objekt auswählen")
            .appendField(new Blockly.FieldDropdown([
                ["bedroom Jack 1", "bedroomJack1"],
                ["bedroom Jack 2", "bedroomJack2"],
                ["Bedroom Light 1", "bedroomLight1"],
                ["Bedroom Light 2", "bedroomLight2"],
                ["Living room Jack 1", "livingJack1"],
                ["Living room Light 1", "livingLight1"],
                ["Living room Light 2", "livingLight2"],
                ["Corridor Light", "corridorLight"],
                ["Kitchen Light", "kitchenLight"],
                ["Bathroom Light", "bathroomLight"],
                ["Bathroom Basin", "basin"],
                ["Bathroom Toilet", "bathroomToiletHeight"],
                ["Bulb Lamp", "bulblamp"],
                ["Floor Lamp", "floorlamp"],
                ["Bathroom Door", "bathroomdoor"],
                ["Upper Left Door", "upperLeftDoor"],
                ["Upper Right Door", "upperRightDoor"],
                ["Lower Left Door", "lowerLeftDoor"],
                ["Lower Right Door", "lowerRightDoor"],
                ["TV Program", "tvProgram"],
                ["Kitchen Cabinets", "\"kitchennet\""],
                ["Living room Light3", "livingLight3"]
            ]), "item");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['design_baall_objects_de'] = {
    init: function() {
        this.appendValueInput("objects")
            .setCheck(null)
            .appendField("Designobjekt")
            .appendField(new Blockly.FieldDropdown([
                ["bedroom Jack 1", "design_bedroomJack1"],
                ["bedroom Jack 2", "design_bedroomJack2"],
                ["Bedroom Light 1", "design_bedroomLight1"],
                ["Bedroom Light 2", "design_bedroomLight2"],
                ["Living room Jack 1", "design_livingJack1"],
                ["Living room Light 1", "design_livingLight1"],
                ["Living room Light 2", "design_livingLight2"],
                ["Corridor Light", "design_corridorLight"],
                ["Kitchen Light", "design_kitchenLight"],
                ["Bathroom Light", "design_bathroomLight"],
                ["Bathroom Basin", "design_basin"],
                ["Bathroom Toilet", "design_bathroomToiletHeight"],
                ["Bulb Lamp", "design_bulblamp"],
                ["Floor Lamp", "design_floorlamp"],
                ["Bathroom Door", "design_bathroomdoor"],
                ["Upper Left Door", "design_upperLeftDoor"],
                ["Upper Right Door", "design_upperRightDoor"],
                ["Lower Left Door", "design_lowerLeftDoor"],
                ["Lower Right Door", "design_lowerRightDoor"],
                ["TV Program", "design_tvProgram"],
                ["Kitchen Cabinets", "\"kitchennet\""],
                ["Living room Light3", "design_livingLight3"]
            ]), "item");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['design_object_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Design-Haus");
        this.appendValueInput("firstX")
            .setCheck("Number")
            .appendField("X [");
        this.appendValueInput("firstY")
            .setCheck("Number")
            .appendField("]")
            .appendField("Y [");
        this.appendDummyInput()
            .appendField("]  auf");
        this.appendValueInput("lastX")
            .setCheck("Number")
            .appendField("X [");
        this.appendValueInput("lastY")
            .setCheck("Number")
            .appendField("]")
            .appendField("Y [");
        this.setInputsInline(true);
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
        block ? this.setWarningText(null) : this.setWarningText("Warning: this block may only be used with \"design object\" Block.")
    },
    LOOP_TYPES: ["design_baall_objects"]
};
//----------------------------------------------
Blockly.Blocks['get_status_object_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Hole Status Objekt")
            .appendField(new Blockly.FieldDropdown([
                ["bedroom Jack 1", "bedroomJack1"],
                ["bedroom Jack 2", "bedroomJack2"],
                ["Bedroom Light 1", "bedroomLight1"],
                ["Bedroom Light 2", "bedroomLight2"],
                ["Living room Jack 1", "livingJack1"],
                ["Living room Light 1", "livingLight1"],
                ["Living room Light 2", "livingLight2"],
                ["Corridor Light", "corridorLight"],
                ["Kitchen Light", "kitchenLight"],
                ["Bathroom Light", "bathroomLight"],
                ["Bathroom Basin", "basin"],
                ["Bathroom Toilet", "bathroomToiletHeight"],
                ["Bulb Lamp", "bulblamp"],
                ["Floor Lamp", "floorlamp"],
                ["Bathroom Door", "bathroomdoor"],
                ["Upper Left Door", "upperLeftDoor"],
                ["Upper Right Door", "upperRightDoor"],
                ["Lower Left Door", "lowerLeftDoor"],
                ["Lower Right Door", "lowerRightDoor"],
                ["TV Program", "tvProgram"],
                ["Kitchen Cabinets", "\"kitchennet\""],
                ["Living room Light3", "livingLight3"]
            ]), "item");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['set_status_objects_de'] = {
    init: function() {
        this.appendValueInput("status")
            .setCheck(null)
            .appendField("Status setzen auf");
        this.setInputsInline(true);
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
        block ? this.setWarningText(null) : this.setWarningText("Warning: this block may only be used with \"choose object\" Block.")
    },
    LOOP_TYPES: ["baall_objects"]
};
//----------------------------------------------
Blockly.Blocks['set_status_dimmer_de'] = {
    init: function() {
        this.appendValueInput("status")
            .setCheck(null)
            .appendField("Status setzen dimmer auf");
        this.setInputsInline(true);
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
        block ? this.setWarningText(null) : this.setWarningText("Warning: this block may only be used with \"choose object\" Block.")
    },
    LOOP_TYPES: ["baall_objects"]
};
//----------------------------------------------
Blockly.Blocks['set_status_rgb_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Status setzen RGB auf");
        this.appendValueInput("red")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("rot");
        this.appendValueInput("green")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("grün");
        this.appendValueInput("blue")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("blau");
        this.setOutput(true, null);
        this.setColour(5);
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
        block ? this.setWarningText(null) : this.setWarningText("Warning: this block may only be used with \"choose object\" Block.")
    },
    LOOP_TYPES: ["baall_objects"]
};
//----------------------------------------------
Blockly.Blocks['set_status_tv_de'] = {
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
        this.setOutput(true, null);
        this.setColour(80);
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
        block ? this.setWarningText(null) : this.setWarningText("Warning: this block may only be used with \"choose object\" Block.")
    },
    LOOP_TYPES: ["baall_objects"]
};