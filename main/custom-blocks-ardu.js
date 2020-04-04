Blockly.Blocks.base = {};
//*****************************************************************
//************************** BAALL ********************************
//*****************************************************************
Blockly.Blocks.connect_baall= {
    init: function() {
        this.appendDummyInput()
            .appendField("connect server");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.get_status_simple = {
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
Blockly.Blocks.get_name_simple = {
    init: function() {
        this.appendDummyInput()
            .appendField("get Name");
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
Blockly.Blocks.get_status_item = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("get status")
            .appendField(new Blockly.FieldDropdown(profile["default"].items), "item")
            .appendField("item");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.set_value = {
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
Blockly.Blocks.set_value_dimmer = {
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
Blockly.Blocks.set_value_rgb = {
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
Blockly.Blocks.set_status_items = {
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
Blockly.Blocks.tv_program = {
    init: function() {
        this.appendDummyInput()
            .appendField("set TV program to ")
            .appendField(new Blockly.FieldDropdown([
                ["Pause", "\"Pause\""],
                ["Das Erste", "\"Das Erste\""],
                ["ZDF", "\"ZDFE\""],
                ["arte", "\"arte\""],
                ["PHOENIX", "\"PHOENIX\""],
                ["MDR", "\"MDR FERNSEHEN\""],
                ["WDR", "\"WDR K??ln\""],
                ["NDR", "\"NDR FS NDS\""],
                ["3sat", "\"3sat\""],
                ["ZDFinfo", "\"ZDFinfo\""],
                ["zdf.kultur", "\"ZDF.Kultur\""],
                ["ZDFNeo", "\"ZDFNeo\""],
                ["Tagesschau24", "\"Tagesschau24\""],
                ["KiKa", "\"neo/KiKa\""],
                ["rbb", "\"RBB\""],
                ["SWR", "\"SWR\""],
                ["SR", "\"SR\""],
                ["BR", "\"BR\""],
                ["radioswissclassic", "\"http://www.radioswissclassic.ch/de/live/aacp.m3u\""],
                ["radioswissjazz", "\"http://www.radioswissjazz.ch/live/aacp.m3u\""],
                ["radioswisspop", "\"http://www.radioswisspop.ch/live/aacp.m3u\""]
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
Blockly.Blocks.baall_frontend = {
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
Blockly.Blocks.baall_frontend_adv = {
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
Blockly.Blocks['get_face_emotion'] = {
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
Blockly.Blocks.foreach_simple = {
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
//*****************************************************************
//in DE
Blockly.Blocks.connect_baall_de= {
    init: function() {
        this.appendDummyInput()
            .appendField("Verbinde mit BAALL Server");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.get_status_simple_de = {
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
Blockly.Blocks.get_name_simple_de = {
    init: function() {
        this.appendDummyInput()
            .appendField("get Name");
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
Blockly.Blocks.get_status_item_de = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("Hole Status")
            .appendField(new Blockly.FieldDropdown(profile["default"].items_de), "item")
            .appendField("Gegenstand");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.set_value_de = {
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
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.set_value_dimmer_de = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("Status Dimmer setzen");
        this.appendValueInput("status")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("auf");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.set_value_rgb_de = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("Status RGB setzen")
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
Blockly.Blocks.set_status_items_de = {
    init: function() {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("Status setzen");
        this.appendValueInput("status")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("auf");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(5);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.tv_program_de = {
    init: function() {
        this.appendDummyInput()
            .appendField("Fernsehprogramm einstellen auf")
            .appendField(new Blockly.FieldDropdown([
                ["Pause", "\"Pause\""],
                ["Das Erste", "\"Das Erste\""],
                ["ZDF", "\"ZDFE\""],
                ["arte", "\"arte\""],
                ["PHOENIX", "\"PHOENIX\""],
                ["MDR", "\"MDR FERNSEHEN\""],
                ["WDR", "\"WDR K??ln\""],
                ["NDR", "\"NDR FS NDS\""],
                ["3sat", "\"3sat\""],
                ["ZDFinfo", "\"ZDFinfo\""],
                ["zdf.kultur", "\"ZDF.Kultur\""],
                ["ZDFNeo", "\"ZDFNeo\""],
                ["Tagesschau24", "\"Tagesschau24\""],
                ["KiKa", "\"neo/KiKa\""],
                ["rbb", "\"RBB\""],
                ["SWR", "\"SWR\""],
                ["SR", "\"SR\""],
                ["BR", "\"BR\""],
                ["radioswissclassic", "\"http://www.radioswissclassic.ch/de/live/aacp.m3u\""],
                ["radioswissjazz", "\"http://www.radioswissjazz.ch/live/aacp.m3u\""],
                ["radioswisspop", "\"http://www.radioswisspop.ch/live/aacp.m3u\""]
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
Blockly.Blocks.baall_frontend_de = {
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
Blockly.Blocks.baall_frontend_adv_de = {
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
Blockly.Blocks['get_face_emotion_de'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Erkenne Gesichtszüge");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
//*****************************************************************
Blockly.Blocks.base_delay = {
    init: function() {
        this.setColour(120);
        this.appendValueInput("DELAY_TIME", "Number").appendField("delay").setCheck("Number");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Delay specific time")
    }
};
//----------------------------------------------
Blockly.Blocks.base_map = {
    init: function() {
        this.setColour(230);
        this.appendValueInput("NUM", "Number").appendField("map ").setCheck("Number");
        this.appendValueInput("DMAX", "Number").appendField("value to [0-").setCheck("Number");
        this.appendDummyInput().appendField("]");
        this.setInputsInline(!0);
        this.setOutput(!0);
        this.setTooltip("Re-maps a number from [0-1024] to another.")
    }
};
//----------------------------------------------
Blockly.Blocks.inout_buildin_led = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("build-in LED to").appendField(new Blockly.FieldDropdown([
            ["HIGH", "HIGH"],
            ["LOW", "LOW"]
        ]), "STAT");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("light or off the build-in LED")
    }
};
//----------------------------------------------
Blockly.Blocks.inout_digital_write = {
    init: function() {
        this.setColour(230);
        this.appendDummyInput().appendField("set digital").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN").appendField("to").appendField(new Blockly.FieldDropdown([
            ["HIGH", "HIGH"],
            ["LOW", "LOW"]
        ]), "STAT");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Write digital value to a specific Port")
    }
};
//----------------------------------------------
Blockly.Blocks.inout_digital_read = {
    init: function() {
        this.setColour(230);
        this.appendDummyInput().appendField("read digital").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.setOutput(!0, "Boolean");
        this.setTooltip("")
    }
};
//----------------------------------------------
Blockly.Blocks.inout_analog_write = {
    init: function() {
        this.setColour(230);
        this.appendDummyInput().appendField("set analog").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendValueInput("NUM", "Number").appendField("value").setCheck("Number");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Write analog value between 0 and 255 to a specific Port")
    }
};
//----------------------------------------------
Blockly.Blocks.inout_analog_read = {
    init: function() {
        this.setColour(230);
        this.appendDummyInput().appendField("read analog").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].analog), "PIN");
        this.setOutput(!0, "Number");
        this.setTooltip("Return value between 0 and 1024")
    }
};
//----------------------------------------------
Blockly.Blocks.inout_tone = {
    init: function() {
        this.setColour(230);
        this.appendDummyInput().appendField("set tone on ").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendValueInput("NUM", "Number").appendField("at frequency").setCheck("Number");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Generate audio tones on a pin")
    }
};
//----------------------------------------------
Blockly.Blocks.inout_notone = {
    init: function() {
        this.setColour(230);
        this.appendDummyInput().appendField("turn off tone on").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Stop generating a tone on a pin")
    }
};
//----------------------------------------------
Blockly.Blocks.inout_highlow = {
    init: function() {
        this.setColour(230);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([
            ["HIGH", "HIGH"],
            ["LOW", "LOW"]
        ]), "BOOL");
        this.setOutput(!0, "Boolean");
        this.setTooltip("")
    }
};
//----------------------------------------------
Blockly.Blocks.servo_move = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("set servo from").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendValueInput("DEGREE", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("to degree (0~180)");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("move between 0~180 degree")
    }
};
//----------------------------------------------
Blockly.Blocks.servo_read_degrees = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("read servo from").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.setInputsInline(!0);
        this.setOutput(!0, "Number");
        this.setTooltip("return that degree with the last servo move.")
    }
};
//----------------------------------------------
Blockly.Blocks.serial_print = {
    init: function() {
        this.setColour(230);
        this.appendValueInput("CONTENT", "String").appendField("serial print");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Prints data to the console/serial port as human-readable ASCII text.")
    }
};
//*****************************************************************
//grove
Blockly.Blocks.grove = {};
Blockly.Blocks.grove_rotary_angle = {
    init: function() {
        this.setColour(10);
        this.appendDummyInput().appendField("rotary angle").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].analog), "PIN");
        this.setOutput(!0, "Number");
        this.setInputsInline(!0);
        this.setTooltip("Analog output between 0 and Vcc")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_temporature_sensor = {
    init: function() {
        this.setColour(10);
        this.appendDummyInput().appendField("temporature sensor").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].analog), "PIN");
        this.setOutput(!0, "Number");
        this.setInputsInline(!0);
        this.setTooltip("return number of ambient temperature in \u2103")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_sound_sensor = {
    init: function() {
        this.setColour(10);
        this.appendDummyInput().appendField("sound sensor").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].analog), "PIN");
        this.setOutput(!0, "Number");
        this.setInputsInline(!0);
        this.setTooltip("Detect the sound strength of the environment")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_light_sensor = {
    init: function() {
        this.setColour(10);
        this.appendDummyInput().appendField("light sensor").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].analog), "PIN");
        this.setOutput(!0, "Number");
        this.setInputsInline(!0);
        this.setTooltip("return number of ambient light in \u2103")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_humidity_sensor = {
    init: function() {
        this.setColour(10);
        this.appendDummyInput().appendField("humidity sensor").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].analog), "PIN");
        this.setOutput(!0, "Number");
        this.setInputsInline(!0);
        this.setTooltip("return number of ambient humidity in \u2103")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_thumb_joystick = {
    init: function() {
        this.setColour(10);
        this.appendDummyInput().appendField("thumb joystick").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].analog), "PIN").appendField("axis").appendField(new Blockly.FieldDropdown([
            ["x", "x"],
            ["y", "y"]
        ]), "AXIS");
        this.setOutput(!0, "Number");
        this.setInputsInline(!0);
        this.setTooltip("output two analog values(200~800) representing two directions")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_led = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("LED").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN").appendField("to").appendField(new Blockly.FieldDropdown([
            ["HIGH", "HIGH"],
            ["LOW", "LOW"]
        ]), "STAT");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("green LED")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_button = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("button").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.setOutput(!0, "Boolean");
        this.setTooltip("Basic digital input")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_relay = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("relay").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN").appendField("to").appendField(new Blockly.FieldDropdown([
            ["HIGH", "HIGH"],
            ["LOW", "LOW"]
        ]), "STAT");
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("capable of switching a much higher voltages and currents. The maximum voltage and current that can be controlled by this module upto 250V at 10 amps.")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_tilt_switch = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("tilt switch").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.setOutput(!0, "Boolean");
        this.setTooltip("When the switch is level it is open, and when tilted, the switch closes.")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_piezo_buzzer = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("piezo buzzer").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN").appendField("to").appendField(new Blockly.FieldDropdown([
            ["HIGH", "HIGH"],
            ["LOW", "LOW"]
        ]), "STAT");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Emit a tone when the output is high")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_buzzer = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("buzzer").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN").appendField("play tone").appendField(new Blockly.FieldDropdown(profile["default"].tone), "TONE");
        this.appendValueInput("SEC", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("for duration");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0,
            null);
        this.setNextStatement(!0, null);
        this.setTooltip("set buzzer!")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_pir_motion_sensor = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("PIR motion sensor").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.setOutput(!0, "Number");
        this.setTooltip("When anyone moves in it's detecting range, the sensor outputs HIGH.")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_line_finder = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("line finder").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.setOutput(!0, "Boolean");
        this.setTooltip("Output digital signal so the robot can reliably follow a black line on a white background")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_rgb_led = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("chainable RGB LED").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendDummyInput("COLOR0").setAlign(Blockly.ALIGN_RIGHT).appendField("Color 1").appendField(new Blockly.FieldColour("#00ff00"),
            "RGB0");
        this.setMutator(new Blockly.Mutator(["grove_rgb_led_item"]));
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("256 color LED, currently Chainable feature is not support");
        this.itemCount_ = 1
    },
    mutationToDom: function() {
        var a = document.createElement("mutation");
        a.setAttribute("items", this.itemCount_);
        for (var b = 0; b < this.itemCount_; b++) {
            var c = this.getFieldValue("RGB0");
            a.setAttribute("RGB" + b, c)
        }
        return a
    },
    domToMutation: function(a) {
        for (var b = 0; b < this.itemCount_; b++) this.removeInput("COLOR" +
            b);
        this.itemCount_ = window.parseInt(a.getAttribute("items"), 10);
        for (b = 0; b < this.itemCount_; b++) {
            var c = window.parseInt(a.getAttribute("RGB" + b), "#00ff00");
            this.appendDummyInput("COLOR" + b).setAlign(Blockly.ALIGN_RIGHT).appendField("Color " + (b + 1)).appendField(new Blockly.FieldColour(c), "RGB" + b)
        }
        0 == this.itemCount_ && this.appendDummyInput("COLOR0").setAlign(Blockly.ALIGN_RIGHT).appendField("Color 1").appendField(new Blockly.FieldColour("#00ff00"), "RGB0")
    },
    decompose: function(a) {
        var b = Blockly.Block.obtain(a,
            "grove_rgb_led_container");
        b.initSvg();
        for (var c = b.getInput("STACK").connection, d = 0; d < this.itemCount_; d++) {
            var e = Blockly.Block.obtain(a, "grove_rgb_led_item");
            e.initSvg();
            c.connect(e.previousConnection);
            c = e.nextConnection
        }
        return b
    },
    compose: function(a) {
        if (0 == this.itemCount_) this.removeInput("COLOR0");
        else
            for (var b = this.itemCount_ - 1; 0 <= b; b--) this.removeInput("COLOR" + b);
        this.itemCount_ = 0;
        for (a = a.getInputTargetBlock("STACK"); a;) {
            b = this.getFieldValue("RGB" + this.itemCount_);
            null == b && (b = "00ff00");
            var c =
                this.appendDummyInput("COLOR" + this.itemCount_);
            c.setAlign(Blockly.ALIGN_RIGHT).appendField("Color " + (this.itemCount_ + 1)).appendField(new Blockly.FieldColour(b), "RGB" + this.itemCount_);
            a.valueConnection_ && c.connection.connect(a.valueConnection_);
            this.itemCount_++;
            a = a.nextConnection && a.nextConnection.targetBlock()
        }
        0 == this.itemCount_ && this.appendDummyInput("COLOR0").setAlign(Blockly.ALIGN_RIGHT).appendField("Color 1").appendField(new Blockly.FieldColour("#00ff00"), "RGB0")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_mp3_player = {
    init: function() {
        this.setColour(230);
        this.appendDummyInput().appendField("mp3 player").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN").appendField(" play");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Write digital value to a specific Port")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_rgb_led_container = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("Container");
        this.appendStatementInput("STACK");
        this.setTooltip("Add, remove items to reconfigure this chain");
        this.contextMenu = !1
    }
};
//----------------------------------------------
Blockly.Blocks.grove_rgb_led_item = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("Item");
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setTooltip("Add an item to the chain");
        this.contextMenu = !1
    }
};
//----------------------------------------------
Blockly.Blocks.grove_bluetooth_slave = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("Bluetooth Slave").appendField("PIN#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Name").appendField(new Blockly.FieldTextInput("name"),
            "NAME");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Pincode").appendField(new Blockly.FieldTextInput("0000"), "PINCODE");
        this.appendStatementInput("RCV").setAlign(Blockly.ALIGN_RIGHT).appendField("Receive");
        this.appendStatementInput("SNT").setAlign(Blockly.ALIGN_RIGHT).appendField("Send");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Bluetooth V2.0+EDR slave. Support single slave per board")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_ultrasonic_ranger = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("ultrasonic ranger").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN").appendField("unit").appendField(new Blockly.FieldDropdown([
            ["cm",
                "cm"
            ],
            ["inch", "inch"]
        ]), "UNIT");
        this.setOutput(!0, "Number");
        this.setTooltip("Non-contact distance measurement module")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_serial_lcd_print = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("serial LCD").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendValueInput("TEXT", "String").setCheck("String").appendField("print line1");
        this.appendValueInput("TEXT2", "String").setCheck("String").appendField("print line2");
        this.appendValueInput("DELAY_TIME", "Number").setCheck("Number").appendField("delay");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("print text on an 16 character by 2 line LCD.")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_serial_lcd_power = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("serial LCD").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendDummyInput().appendField("power").appendField(new Blockly.FieldDropdown([
            ["ON",
                "ON"
            ],
            ["OFF", "OFF"]
        ]), "STAT");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Turn LCD power on/off")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_serial_lcd_effect = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("serial LCD").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendDummyInput().appendField("effect").appendField(new Blockly.FieldDropdown([
            ["Scroll Left",
                "LEFT"
            ],
            ["Scroll Right", "RIGHT"],
            ["Scroll Auto", "AUTO"]
        ]), "STAT");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Turn LCD power on/off")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_motor_shield = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("motor Shield").appendField(new Blockly.FieldDropdown([
            ["Stop", "stop"],
            ["Forward", "forward"],
            ["Right", "right"],
            ["Left", "left"],
            ["Backward", "backward"]
        ]), "DIRECTION");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0,
            null);
        this.setTooltip("Drive two brushed DC motors")
    }
};
//*****************************************************************
//OLED display
Blockly.Blocks.setup_display = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("set OLED display");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("initialize OLED display")
    }
};
//----------------------------------------------
Blockly.Blocks.display_println = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("OLED display");
        this.appendValueInput("TEXT", "String").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField("show text");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("print text on an 16 character by 2 line OLED.")
    }
};
//----------------------------------------------
Blockly.Blocks.display_color = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("OLED display");
        this.appendDummyInput().appendField("text color").appendField(new Blockly.FieldDropdown([
            ["white", "WHITE"],
            ["black (invert)", "BLACK, WHITE"]
        ]), "color");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("The setting BLACK WHITE inverts output.")
    }
};
//----------------------------------------------
Blockly.Blocks.display_textsize = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("OLED display");
        this.appendValueInput("SIZE", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("Text size");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("")
    }
};
//----------------------------------------------
Blockly.Blocks.display_setcurser = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("OLED display cursor position");
        this.appendValueInput("COLUMN", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("column");
        this.appendValueInput("ROW", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("row");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("print text on an 16 character by 2 line LCD.")
    }
};
//----------------------------------------------
Blockly.Blocks.display_clear = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("clear OLED display");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("")
    }
};
//----------------------------------------------
Blockly.Blocks.display_display = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("show OLED Display");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("")
    }
};
//*****************************************************************
//OLED display in DE
Blockly.Blocks.setup_display_de = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("OLED Display anmelden");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("OLED Display initialisieren")
    }
};
//----------------------------------------------
Blockly.Blocks.display_println_de = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("OLED Display");
        this.appendValueInput("TEXT", "String").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField("zeige Text ");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("print text on an 16 character by 2 line OLED.")
    }
};
//----------------------------------------------
Blockly.Blocks.display_color_de = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("OLED Display");
        this.appendDummyInput().appendField("Textfarbe").appendField(new Blockly.FieldDropdown([
            ["Weiß", "WHITE"],
            ["Schwarz (invertieren)", "BLACK, WHITE"]
        ]), "Farbe");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Die Einstellung BLACK WHITE invertiert Ausgabe.")
    }
};
//----------------------------------------------
Blockly.Blocks.display_textsize_de = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("OLED Display");
        this.appendValueInput("SIZE", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("Textgröße");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("")
    }
};
//----------------------------------------------
Blockly.Blocks.display_setcurser_de = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("OLED Display Cursor Position");
        this.appendValueInput("COLUMN", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("Spalte");
        this.appendValueInput("ROW", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("Reihe");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("print text on an 16 character by 2 line LCD.")
    }
};
//----------------------------------------------
Blockly.Blocks.display_clear_de = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("OLED Display löschen");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("")
    }
};
//----------------------------------------------
Blockly.Blocks.display_display_de = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("OLED Display anzeigen");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("")
    }
};
//*****************************************************************
//Neopixel
Blockly.Blocks.set_pixel_alphabet = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("set");
        this.appendDummyInput().appendField("alphabet").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(profile["default"].alphabet), "alpha");
        this.appendDummyInput().appendField("from pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendValueInput("PXNUMBER", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("starting from pixel");
        this.appendValueInput("RED", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("red");
        this.appendValueInput("GREEN", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("green");
        this.appendValueInput("BLUE", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("blue");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0,
            null);
        this.setTooltip("set rbg-colors (0 ... 255) of a pixel defined by 'pixel number'. To “push” the color data to the strip, call show():  ")
    }
};
//----------------------------------------------
Blockly.Blocks.set_pixel_number = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("set");
        this.appendDummyInput().appendField("number").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(profile["default"].number), "num");
        this.appendDummyInput().appendField("from pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendValueInput("PXNUMBER", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("starting from pixel");
        this.appendValueInput("RED", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("red");
        this.appendValueInput("GREEN", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("green");
        this.appendValueInput("BLUE", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("blue");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0,
            null);
        this.setTooltip("set rbg-colors (0 ... 255) of a pixel defined by 'pixel number'. To “push” the color data to the strip, call show():  ")
    }
};
//----------------------------------------------
Blockly.Blocks.setup_neopixel = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("setup neopixel").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendValueInput("LEDNUM", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("number of pixel");
        this.appendDummyInput().appendField("type").appendField(new Blockly.FieldDropdown([
            ["NEO_GRB", "NEO_GRB"],
            ["NEO_RGB", "NEO_RGB"],
            ["NEO_GRBW", "NEO_RGBW"],
            ["NEO_RGBW", "NEO_RGBW"]
        ]), "TYPE1");
        this.appendDummyInput().appendField("").appendField(new Blockly.FieldDropdown([
            ["NEO_KHZ800", "NEO_KHZ800"],
            ["NEO_KHZ400", "NEO_KHZ400"]
        ]), "TYPE2");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0,
            null);
        this.setTooltip("Declares a NeoPixel object. State PIN, number of pixels and type of neopixel.")
    }
};
//----------------------------------------------
Blockly.Blocks.set_neopixel_brightness = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("set brightness from").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendValueInput("BRIGHTNESS", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(" ");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0,
            null);
        this.setTooltip("The overall brightness of all the LEDs. Put a number in the range 0 (off) to 255 (max brightness). setBrightness() should be called once in setup() ")
    }
};
//----------------------------------------------
Blockly.Blocks.set_pixel_color_rgb = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("set pixel color from").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendValueInput("PXNUMBER", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("pixel number");
        this.appendValueInput("RED", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("red");
        this.appendValueInput("GREEN", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("green");
        this.appendValueInput("BLUE", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("blue");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0,
            null);
        this.setTooltip("set rbg-colors (0 ... 255) of a pixel defined by 'pixel number'. To “push” the color data to the strip, call show():  ")
    }
};
//----------------------------------------------
Blockly.Blocks.neopixel_show = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("show from").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0,
            null);
        this.setTooltip("Updates the whole strip at once.")
    }
};
//----------------------------------------------
Blockly.Blocks.neopixel_fade_en = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("Faden").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendValueInput("PXNUMBER", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("  pixel#");
        this.appendValueInput("DURATION", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("  duration");
        this.appendValueInput("TEMPO", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("  speed");
        this.appendDummyInput().appendField("Start Color: ");
        this.appendValueInput("SRED", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("red");
        this.appendValueInput("SGREEN", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("green");
        this.appendValueInput("SBLUE", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("blue");
        this.appendDummyInput().appendField("End Color: ");
        this.appendValueInput("ERED", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("red");
        this.appendValueInput("EGREEN", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("green");
        this.appendValueInput("EBLUE", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("blue");
        this.setInputsInline(0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0,
            null);
        this.setTooltip("set rbg-colors (0 ... 255) of a pixel defined by 'pixel number'. To “push” the color data to the strip, call show():  ")
    }
};
//*****************************************************************
//in DE
Blockly.Blocks.setup_neopixel_de = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("Neopixel anmelden").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendValueInput("LEDNUM", "Nummer").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("  Anzahl Pixel");
        this.appendDummyInput().appendField("Typ").appendField(new Blockly.FieldDropdown([
            ["NEO_GRB", "NEO_GRB"],
            ["NEO_RGB", "NEO_RGB"],
            ["NEO_GRBW", "NEO_RGBW"],
            ["NEO_RGBW", "NEO_RGBW"]
        ]), "TYPE1");
        this.appendDummyInput().appendField("").appendField(new Blockly.FieldDropdown([
            ["NEO_KHZ800", "NEO_KHZ800"],
            ["NEO_KHZ400", "NEO_KHZ400"]
        ]), "TYPE2");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0,
            null);
        this.setTooltip("Declares a NeoPixel object. State PIN, number of pixels and type of neopixel.")
    }
};
//----------------------------------------------
Blockly.Blocks.set_neopixel_brightness_de = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("Helligkeit setzen").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendValueInput("BRIGHTNESS", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(" ");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0,
            null);
        this.setTooltip("The overall brightness of all the LEDs. Put a number in the range 0 (off) to 255 (max brightness). setBrightness() should be called once in setup() ")
    }
};
//----------------------------------------------
Blockly.Blocks.set_pixel_color_rgb_de = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("Farbe setzen").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendValueInput("PXNUMBER", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("  Pixelnummer");
        this.appendValueInput("RED", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("rot");
        this.appendValueInput("GREEN", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("grün");
        this.appendValueInput("BLUE", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("blau");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0,
            null);
        this.setTooltip("set rbg-colors (0 ... 255) of a pixel defined by 'pixel number'. To “push” the color data to the strip, call show():  ")
    }
};
//----------------------------------------------
Blockly.Blocks.neopixel_show_de = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("Neopixel anzeigen").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0,
            null);
        this.setTooltip("Updates the whole strip at once.")
    }
};
//----------------------------------------------
Blockly.Blocks.neopixel_fade_de = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("Faden").appendField("pin#").appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.appendValueInput("PXNUMBER", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("  pixel#");
        this.appendValueInput("DURATION", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("  Dauer");
        this.appendValueInput("TEMPO", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("  Tempo");
        this.appendDummyInput().appendField("Startfarbe: ");
        this.appendValueInput("SRED", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("rot");
        this.appendValueInput("SGREEN", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("grün");
        this.appendValueInput("SBLUE", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("blau");
        this.appendDummyInput().appendField("Endfarbe: ");
        this.appendValueInput("ERED", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("rot");
        this.appendValueInput("EGREEN", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("grün");
        this.appendValueInput("EBLUE", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("blau");
        this.setInputsInline(0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0,
            null);
        this.setTooltip("set rbg-colors (0 ... 255) of a pixel defined by 'pixel number'. To “push” the color data to the strip, call show():  ")
    }
};
//*****************************************************************
//Wifi Manager
Blockly.Blocks.connect_wifi = {
    init: function() {
        this.appendDummyInput()
            .appendField("connect to Wifi network");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(true, null);
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
//open weather map
Blockly.Blocks.getcurrentWeathercondition = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("get the current weather data").appendField("for").appendField(new Blockly.FieldDropdown([
            ["weather conditions", "Condition"],
            ["temperature C", "Temp"],
            ["wind force", "Wind"]
        ]), "WEATHER");
        this.setOutput(true, null);
        this.setTooltip("Weather conditions can be: drizzle, rain, clear/sunny, snow, thunderstorm, fog, clouds")
    }
};
//----------------------------------------------
Blockly.Blocks.getWeatherforecast = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("get the current weather data").appendField("for").appendField(new Blockly.FieldDropdown([
            ["weather conditions", "Condition"],
            ["temperature C", "Temp"],
            ["wind force", "Wind"]
        ]), "WEATHER");
        this.setOutput(true, null);
        this.setTooltip("Weather conditions can be: drizzle, rain, clear/sunny, snow, thunderstorm, fog, clouds")
    }
};
//----------------------------------------------
Blockly.Blocks.getcurrentTemperature = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("get the current temperature");
        this.setOutput(true, null);
        this.setTooltip("in degrees Celsius")
    }
};
//----------------------------------------------
Blockly.Blocks.getcurrentWeatherWind = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("get the current wind force");
        this.setOutput(true, null);
        this.setTooltip("wind force")
    }
};
//----------------------------------------------
//delay for weather map

Blockly.Blocks.lastcheck = {
    helpUrl: "",
    init: function() {
        this.appendDummyInput().appendField("last check");
        this.setInputsInline(!0);
        this.setOutput(true, null);
        this.setTooltip("Delay specific time")
    }
};
//----------------------------------------------
Blockly.Blocks.resettime = {
    helpUrl: "",
    init: function() {
        this.appendDummyInput().appendField("reset time");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Delay specific time")
    }
};
//*****************************************************************
//in DE
Blockly.Blocks.connect_wifi_de = {
    init: function() {
        this.appendDummyInput()
            .appendField("Verbinde mit Wifi Netzwerk");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(true, null);
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.getcurrentWeathercondition_de = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("Hole die aktuellen Wetterdaten").appendField("für").appendField(new Blockly.FieldDropdown([
            ["Wetterlage", "Condition"],
            ["Temperatur C", "Temp"],
            ["Windstärke", "Wind"]
        ]), "WEATHER");
        this.setOutput(true, null);
        this.setTooltip("Wetterlage kann sein: Nieselregen, Regen, Klar/Sonnig, Schnee, Gewitter, Nebel, Wolken")
    }
};
//----------------------------------------------
Blockly.Blocks.getWeatherforecast_de = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("Hole die Wettervorhersage").appendField("für").appendField(new Blockly.FieldDropdown([
            ["Wetterlage", "Condition"],
            ["Temperatur C", "Temp"],
            ["Windstärke", "Wind"]
        ]), "WEATHER");
        this.setOutput(true, null);
        this.setTooltip("Wetterlage kann sein: Nieselregen, Regen, Klar/Sonnig, Schnee, Gewitter, Nebel, Wolken")
    }
};
//----------------------------------------------
Blockly.Blocks.getcurrentTemperature_de = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("Hole die aktuelle Temperatur");
        this.setOutput(true, null);
        this.setTooltip("in Grad Celsius")
    }
};
//----------------------------------------------
Blockly.Blocks.getcurrentWeatherWind_de = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("Hole die aktuelle Windstärke");
        this.setOutput(true, null);
        this.setTooltip("Windstärke")
    }
};
//----------------------------------------------
Blockly.Blocks.lastcheck_de = {
    helpUrl: "",
    init: function() {
        this.appendDummyInput().appendField("Vergangene Zeit");
        this.setInputsInline(!0);
        this.setOutput(true, null);
        this.setTooltip("Delay specific time")
    }
};
//----------------------------------------------
Blockly.Blocks.resettime_de = {
    helpUrl: "",
    init: function() {
        this.appendDummyInput().appendField("Vergangene Zeit zurücksetzen");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Delay specific time")
    }
};
//*****************************************************************
//RGB LCD
Blockly.Blocks.grove_rgb_lcd_print = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("RGB LCD");
        this.appendValueInput("TEXT", "String").setCheck("String").appendField("print");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("print text on an 16 character by 2 line LCD.")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_rgb_lcd_setcolor = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("RGB LCD");
        this.appendValueInput("COLOR_r", "Number").setCheck("Number").appendField("red");
        this.appendValueInput("COLOR_g", "Number").setCheck("Number").appendField("green");
        this.appendValueInput("COLOR_b", "Number").setCheck("Number").appendField("blue");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("print text on an 16 character by 2 line LCD.")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_rgb_lcd_setcurser = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("SET CURSOR");
        this.appendValueInput("COLUMN", "Number").setCheck("Number").appendField("Column");
        this.appendValueInput("ROW", "Number").setCheck("Number").appendField("Row");;
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("print text on an 16 character by 2 line LCD.")
    }
};
//----------------------------------------------
Blockly.Blocks.grove_rgb_lcd_clear = {
    helpUrl: "",
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("clear Display");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("print text on an 16 character by 2 line LCD.")
    }
};
//*****************************************************************
//controls flow statements
Blockly.Blocks.controls_flow_statements = {
    init: function() {
        var a = [
            [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK, "BREAK"],
            [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE, "CONTINUE"]
        ];
        this.setHelpUrl(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL);
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(a), "FLOW");
        this.setPreviousStatement(!0);
        var b = this;
        this.setTooltip(function() {
            var a = b.getFieldValue("FLOW");
            return {
                BREAK: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK,
                CONTINUE: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE
            }[a]
        })
    },
    onchange: function(a) {
        a = !1;
        var b = this;
        do {
            if (-1 != this.LOOP_TYPES.indexOf(b.type)) {
                a = !0;
                break
            }
            b = b.getSurroundParent()
        } while (b);
        a ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING)
    },
    LOOP_TYPES: ["controls_repeat", "controls_repeat_ext", "controls_forEach", "controls_for", "controls_whileUntil", "foreach_simple"]
};
//*****************************************************************
//math
Blockly.Blocks.math_random_int = {
    init: function() {
        this.jsonInit({
            "message0": Blockly.Msg.MATH_RANDOM_INT_TITLE,
            "args0": [
                {
                    "type": "input_value",
                    "name": "FROM",
                    "check": "Number"
                },
                {
                    "type": "input_value",
                    "name": "TO",
                    "check": "Number"
                }
            ],
            "inputsInline": true,
            "output": "Number",
            "colour": Blockly.Blocks.math.HUE,
            "tooltip": Blockly.Msg.MATH_RANDOM_INT_TOOLTIP,
            "helpUrl": Blockly.Msg.MATH_RANDOM_INT_HELPURL
        });
    }
};
//*****************************************************************
//procedures
Blockly.Blocks.arduino_functions = {
    init: function() {
        this.appendDummyInput()
            .appendField('Arduino run setup()');
        this.appendStatementInput('SETUP_FUNC');
        this.appendDummyInput()
            .appendField('Arduino run loop()');
        this.appendStatementInput('LOOP_FUNC');
        this.setInputsInline(false);
        this.setHelpUrl('https://arduino.cc/en/Reference/Loop');
        this.contextMenu = false;
    },
    getArduinoLoopsInstance: function() {
        return true;
    }
};
//----------------------------------------------
Blockly.Blocks.new_func = {
    init: function() {
        this.appendDummyInput()
            .appendField("to")
            .appendField(new Blockly.FieldTextInput("do_something"), "func_name");
        this.appendValueInput("vars")
            .setCheck(null);
        this.appendStatementInput("body")
            .setCheck(null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.pointer = {
    init: function() {
        this.appendDummyInput()
            .appendField("pointer");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.call_func = {
    init: function() {
        this.appendDummyInput()
            .appendField("call function")
            .appendField(new Blockly.FieldTextInput("do_something"), "funct_name");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.call_func_adv = {
    init: function() {
        this.appendDummyInput()
            .appendField("call function")
            .appendField(new Blockly.FieldTextInput("do_somethingt"), "funct_name");
        this.appendValueInput("input")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("function input");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//*****************************************************************
//texts
Blockly.Blocks.text_isEmpty = {
    init: function() {
        this.jsonInit({
            "message0": Blockly.Msg.TEXT_ISEMPTY_TITLE,
            "args0": [
                {
                    "type": "input_value",
                    "name": "VALUE",
                    "check": ['String', 'Array']
                }
            ],
            "output": 'Boolean',
            "colour": Blockly.Blocks.texts.HUE,
            "tooltip": Blockly.Msg.TEXT_ISEMPTY_TOOLTIP,
            "helpUrl": Blockly.Msg.TEXT_ISEMPTY_HELPURL
        });
    }
};
//*****************************************************************
//variables
Blockly.Blocks.variables = {};
Blockly.Blocks.variables.HUE = 330;

Blockly.Blocks.variables_get = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(
        Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  contextMenuType_: 'variables_set',
  customContextMenu: function(options) {
    var option = {enabled: true};
    var name = this.getFieldValue('VAR');
    option.text = this.contextMenuMsg_.replace('%1', name);
    var xmlField = goog.dom.createDom('field', null, name);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', this.contextMenuType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};
//----------------------------------------------
Blockly.Blocks.variables_set = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.VARIABLES_SET,
      "args0": [
        {
          "type": "field_variable",
          "name": "VAR",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.variables.HUE,
      "tooltip": Blockly.Msg.VARIABLES_SET_TOOLTIP,
      "helpUrl": Blockly.Msg.VARIABLES_SET_HELPURL
    });
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  contextMenuType_: 'variables_get',
  customContextMenu: Blockly.Blocks.variables_get.customContextMenu
};
//----------------------------------------------
Blockly.Blocks.define_string = {
    init: function() {
        this.appendDummyInput()
            .appendField("String variable")
            .appendField(new Blockly.FieldTextInput("name"), "name");
        this.appendValueInput("value")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("value");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.use_string = {
    init: function() {
        this.appendDummyInput()
            .appendField("string variable")
            .appendField(new Blockly.FieldTextInput("var"), "var_name");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.define_variable = {
    init: function() {
        this.appendDummyInput()
            .appendField("set variable")
            .appendField(new Blockly.FieldTextInput("name"), "name");
        this.appendDummyInput()
            .appendField("as")
            .appendField(new Blockly.FieldDropdown([["text","String"], ["character","char"], ["boolean","boolean"], ["number","int"], ["large number","long"], ["decimal","float"]]), "type");
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("value");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.use_variable = {
    init: function() {
        this.appendDummyInput()
            .appendField("variable")
            .appendField(new Blockly.FieldTextInput("var"), "var_name");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.text_append = {
    init: function() {
        this.appendValueInput("variable")
            .setCheck(null)
            .appendField("to");
        this.appendValueInput("text")
            .setCheck(null)
            .appendField("append text");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//Adafruit IO
Blockly.Blocks.connect_AdafruitIO = {
    init: function() {
        this.appendDummyInput()
            .appendField("connect Adafruit IO");
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.setup_messagehandler = {
    init: function() {
        this.appendDummyInput()
            .appendField("message handler for")
            .appendField(new Blockly.FieldTextInput("feed"), "FEEDNAME");
        this.appendDummyInput()
            .appendField("calls method")
            .appendField(new Blockly.FieldTextInput("handle_feed"), "HANDLE_FEEDNAME");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.get_feed_value_int = {
    init: function() {
        this.appendDummyInput()
            .appendField("get feed data as Integer");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.get_feed_value_string = {
    init: function() {
        this.appendDummyInput()
            .appendField("get feed data as String");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//*****************************************************************
//DHT22 Sensor
Blockly.Blocks.connect_dht22 = {
    init: function() {
        this.appendDummyInput().appendField("connect DHT22 Sensor")
            .appendField("pin#")
            .appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};
//----------------------------------------------
Blockly.Blocks['set_feed'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("")
            .appendField(new Blockly.FieldTextInput("feed name"), "FEEDNAME");
        this.appendValueInput("var", "Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("push");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.get_temp_value = {
    init: function() {
        this.appendDummyInput()
            .appendField("get temprature data");
        this.setOutput(false, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0,
            null);
    }
};
//----------------------------------------------
Blockly.Blocks.set_temp_value_int = {
    init: function() {
        this.appendDummyInput()
            .appendField("temprature");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks.get_humidity_value = {
    init: function() {
        this.appendDummyInput()
            .appendField("get humidity data");
        this.setOutput(false, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0,
            null);
    }
};
//----------------------------------------------
Blockly.Blocks.set_humidity_value_int = {
    init: function() {
        this.appendDummyInput()
            .appendField("humidity");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//*****************************************************************
//*********************** RaspberyyPi *****************************
//*****************************************************************
Blockly.Blocks.raspy_ardu = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("OPEN serial port").appendField("set data rate to").appendField(new Blockly.FieldDropdown(profile["default"].serial_port), "port").appendField("bps");
        this.setOutput(true, null);
        this.setTooltip("opens serial port, sets data rate to X bps")
    }
};
//----------------------------------------------
Blockly.Blocks.raspy_ardu_read = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("READ serial port").appendField("set data rate to").appendField(new Blockly.FieldDropdown(profile["default"].serial_port), "port").appendField("bps");
        this.setOutput(true, null);
        this.setTooltip("read serial port, sets data rate to X bps")
    }
};
//----------------------------------------------
Blockly.Blocks.raspy_ardu_write = {
    init: function() {
        this.setColour(190);
        this.appendValueInput("data").setCheck("Number").appendField("Write to serial port");
	this.appendDummyInput().appendField("set data rate to").appendField(new Blockly.FieldDropdown(profile["default"].serial_port), "port").appendField("bps");
        this.setInputsInline(true);
    	this.setPreviousStatement(true, null);
    	this.setNextStatement(true, null);
        this.setTooltip("write to serial port, sets data rate to X bps")
    }
};
//----------------------------------------------
Blockly.Blocks.raspy_ardu_de = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("serielle Schnittstelle OFFENEN").appendField("datenrate einstellen auf").appendField(new Blockly.FieldDropdown(profile["default"].serial_port), "port").appendField("bps");
        this.setOutput(true, null);
        this.setTooltip("opens serial port, sets data rate to X bps")
    }
};
//----------------------------------------------
Blockly.Blocks.raspy_ardu_read_de = {
    init: function() {
        this.setColour(190);
        this.appendDummyInput().appendField("serielle Schnittstelle LESEN").appendField("datenrate einstellen auf").appendField(new Blockly.FieldDropdown(profile["default"].serial_port), "port").appendField("bps");
        this.setOutput(true, null);
        this.setTooltip("read serial port, sets data rate to X bps")
    }
};
//----------------------------------------------
Blockly.Blocks.raspy_ardu_write_de = {
    init: function() {
        this.setColour(190);
        this.appendValueInput("data").setCheck("Number").appendField("SCHREIBEN auf die serielle Schnittstelle");
	this.appendDummyInput().appendField("Datenrate einstellen auf").appendField(new Blockly.FieldDropdown(profile["default"].serial_port), "port").appendField("bps");
        this.setInputsInline(true);
    	this.setPreviousStatement(true, null);
    	this.setNextStatement(true, null);
        this.setTooltip("write to serial port, sets data rate to X bps")
    }
};