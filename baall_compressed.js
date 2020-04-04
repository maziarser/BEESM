Blockly.PHP['print_r'] = function(block) {
    var value_print_r = Blockly.PHP.valueToCode(block, 'print_r', Blockly.PHP.ORDER_NONE) || '\'\'';
    var code = 'print_r(' + value_print_r + ');\n';
    return code;
};

Blockly.PHP['prints'] = function(block) {
    var value_print = Blockly.PHP.valueToCode(block, 'print', Blockly.PHP.ORDER_NONE) || '\'\'';
    var code = 'print(' + value_print + ');\n';
    return code;
};

Blockly.PHP['length_text'] = function(block) {
    var value_length = Blockly.PHP.valueToCode(block, 'length', Blockly.PHP.ORDER_ATOMIC);
    var code = 'length(' + value_length + ')';
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['indexof_text'] = function(block) {
    var value_text = Blockly.PHP.valueToCode(block, 'text', Blockly.PHP.ORDER_ATOMIC);
    var dropdown_loc = block.getFieldValue('loc');
    var value_value = Blockly.PHP.valueToCode(block, 'value', Blockly.PHP.ORDER_ATOMIC);
    if (dropdown_loc === "first") {
        var code = 'text_firstIndexOf(' + value_text + ',' + value_value + ')';
    } else if (dropdown_loc === "last") {
        var code = 'text_lastIndexOf(' + value_text + ',' + value_value + ')';
    }
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['repeat_list'] = function(block) {
    var value_item = Blockly.PHP.valueToCode(block, 'item', Blockly.PHP.ORDER_ATOMIC) || "null";
    var value_num = Blockly.PHP.valueToCode(block, 'num', Blockly.PHP.ORDER_ATOMIC);
    var code = 'repeat_list(' + value_item + ',' + value_num + ')';
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['length_list'] = function(block) {
    var value_length = Blockly.PHP.valueToCode(block, 'length', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var code = 'length(' + value_length + ')';
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['indexof_list'] = function(block) {
    var value_list = Blockly.PHP.valueToCode(block, 'list', Blockly.PHP.ORDER_ATOMIC);
    var dropdown_loc = block.getFieldValue('loc');
    var value_value = Blockly.PHP.valueToCode(block, 'value', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    if (dropdown_loc === "first") {
        var code = 'list_firstIndexOf(' + value_list + ',' + value_value + ')';
    } else if (dropdown_loc === "last") {
        var code = 'list_lastIndexOf(' + value_list + ',' + value_value + ')';
    }
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['sort_list'] = function(block) {
    var dropdown_type = block.getFieldValue('type');
    var dropdown_direction = block.getFieldValue('direction');
    var value_list = Blockly.PHP.valueToCode(block, 'list', Blockly.PHP.ORDER_ATOMIC) || "array()";
    var code = 'sort_list(' + value_list + ',' + dropdown_type + ',' + dropdown_direction + ')';
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['tag_br'] = function(block) {
    var code = 'echo "<br />";\n';
    return code;
};

Blockly.PHP['get_date'] = function(block) {
    var value_timeformat = Blockly.PHP.valueToCode(block, 'timeformat', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var code = 'date(' + value_timeformat + ')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['sleep_time'] = function(block) {
    var value_sleep = Blockly.PHP.valueToCode(block, 'sleep', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'sleep(' + value_sleep + ');\n';
    return code;
};

Blockly.PHP['loop_controller'] = function(block) {
    var dropdown_cntrol = block.getFieldValue('cntrol');
    if (dropdown_cntrol == "break") {
        var code = "break;\n";
    } else if (dropdown_cntrol == "continue") {
        var code = "continue;\n";
    }
    return code;
};

Blockly.PHP['block_boolean'] = function(block) {
    var dropdown_boolean = block.getFieldValue('boolean');
    if (dropdown_boolean == "true") {
        var code = 1;
    } else if (dropdown_boolean == "false") {
        var code = 0;
    }
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['math_random'] = function(block) {
    var value_from = Blockly.PHP.valueToCode(block, 'from', Blockly.PHP.ORDER_COMMA) || '1';
    var value_to = Blockly.PHP.valueToCode(block, 'to', Blockly.PHP.ORDER_COMMA) || '100';
    var code = 'random_number(' + value_from + ',' + value_to + ')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};
//-------------------------------------------------
//-------------------BAALL-------------------------
//-------------------------------------------------
Blockly.PHP['connect_server'] = function(block) {
    var code = 'connect_server()';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['connect_server_de'] = function(block) {
    var code = 'connect_server()';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['connect_baall'] = function(block) {
    var code = '$BAALL = connect_server();\n';
    return code;
};

Blockly.PHP['connect_baall_de'] = function(block) {
    var code = '$BAALL = connect_server();\n';
    return code;
};

Blockly.PHP['get_name'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'name', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var code = 'get_attribute("name",' + value_name + ')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_name_de'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'name', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var code = 'get_attribute("name",' + value_name + ')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_name_simple'] = function(block) {
    var code = 'get_name($item)';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_name_simple_de'] = function(block) {
    var code = 'get_name($item)';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_emotion'] = function(block) {
    var code = 'get_emotions()';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_emotion_de'] = function(block) {
    var code = 'get_emotions()';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_emotion_data'] = function(block) {
    var code = 'get_emotions_data()';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_emotion_data_de'] = function(block) {
    var code = 'get_emotions_data()';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_status'] = function(block) {
    var value_status = Blockly.PHP.valueToCode(block, 'status', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var code = 'get_attribute("status",' + value_status + ')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_status_de'] = function(block) {
    var value_status = Blockly.PHP.valueToCode(block, 'status', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var code = 'get_attribute("status",' + value_status + ')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_status_item'] = function(block) {
    var value_status = String(Blockly.PHP.valueToCode(this, 'name', Blockly.PHP.ORDER_ATOMIC) || '\'\'');
    var code = "get_status_item(" + value_status + ")";
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['get_status_item_de'] = function(block) {
    var value_status = String(Blockly.PHP.valueToCode(this, 'name', Blockly.PHP.ORDER_ATOMIC) || '\'\'');
    var code = "get_status_item(" + value_status + ")";
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['get_status_simple'] = function(block) {
    var code = 'get_status($item)';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_status_simple_de'] = function(block) {
    var code = 'get_status($item)';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_values'] = function(block) {
    var dropdown_values = block.getFieldValue('values');
    var value_item = Blockly.PHP.valueToCode(block, 'item', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var code = 'get_attribute(' + dropdown_values + ',' + value_item + ')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_values_de'] = function(block) {
    var dropdown_values = block.getFieldValue('values');
    var value_item = Blockly.PHP.valueToCode(block, 'item', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var code = 'get_attribute(' + dropdown_values + ',' + value_item + ')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['set_status'] = function(block) {
    var value_flagStatus = Blockly.PHP.valueToCode(block, 'flagStatus', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'set_flagStatus(' + value_flagStatus + ');\n';
    return code;
};

Blockly.PHP['set_status_de'] = function(block) {
    var value_flagStatus = Blockly.PHP.valueToCode(block, 'flagStatus', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'set_flagStatus(' + value_flagStatus + ');\n';
    return code;
};

Blockly.PHP['set_value'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'name', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var dropdown_status = block.getFieldValue('status');
    var code = 'set_status(' + value_name + ',' + dropdown_status + ');\n';
    return code;
};

Blockly.PHP['set_value_de'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'name', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var dropdown_status = block.getFieldValue('status');
    var code = 'set_status(' + value_name + ',' + dropdown_status + ');\n';
    return code;
};

Blockly.PHP['set_value_rgb'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'name', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var value_red = Blockly.PHP.valueToCode(block, 'red', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_green = Blockly.PHP.valueToCode(block, 'green', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_blue = Blockly.PHP.valueToCode(block, 'blue', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'set_statusRGB(' + value_name + ',' + value_red + ',' + value_green + ',' + value_blue + ');\n';
    return code;
};

Blockly.PHP['set_value_rgb_de'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'name', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var value_red = Blockly.PHP.valueToCode(block, 'red', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_green = Blockly.PHP.valueToCode(block, 'green', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_blue = Blockly.PHP.valueToCode(block, 'blue', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'set_statusRGB(' + value_name + ',' + value_red + ',' + value_green + ',' + value_blue + ');\n';
    return code;
};

Blockly.PHP['set_value_dimmer'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'name', Blockly.PHP.ORDER_ATOMIC);
    var value_status = Blockly.PHP.valueToCode(block, 'status', Blockly.PHP.ORDER_ATOMIC);
    var code = 'set_statusDimmer(' + value_name + ',' + value_status + ');\n';
    return code;
};

Blockly.PHP['set_value_dimmer_de'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'name', Blockly.PHP.ORDER_ATOMIC);
    var value_status = Blockly.PHP.valueToCode(block, 'status', Blockly.PHP.ORDER_ATOMIC);
    var code = 'set_statusDimmer(' + value_name + ',' + value_status + ');\n';
    return code;
};

Blockly.PHP['set_status_items'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'name', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var value_status = Blockly.PHP.valueToCode(block, 'status', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var code = 'set_status(' + value_name + ',' + value_status + ');\n';
    return code;
};

Blockly.PHP['set_status_items_de'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'name', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var value_status = Blockly.PHP.valueToCode(block, 'status', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var code = 'set_status(' + value_name + ',' + value_status + ');\n';
    return code;
};

Blockly.PHP['tv_program'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_volume = Blockly.PHP.valueToCode(block, 'volume', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'set_TVprogram(' + dropdown_name + ',' + value_volume + ');\n';
    return code;
};

Blockly.PHP['tv_program_de'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_volume = Blockly.PHP.valueToCode(block, 'volume', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'set_TVprogram(' + dropdown_name + ',' + value_volume + ');\n';
    return code;
};

Blockly.PHP['baall_frontend'] = function(block) {
    //insted of Blockly.PHP.ORDER_ATOMIC
    var value_row = Blockly.PHP.valueToCode(block, 'row', Blockly.PHP.ORDER_COMMA) || '0';
    var value_col = Blockly.PHP.valueToCode(block, 'col', Blockly.PHP.ORDER_COMMA) || '0';
    var dropdown_item = block.getFieldValue('item');
    var code = 'draw_home(' + value_row + ',' + value_col + ',' + dropdown_item + ');\n';
    return code;
};

Blockly.PHP['baall_frontend_de'] = function(block) {
    //insted of Blockly.PHP.ORDER_ATOMIC
    var value_row = Blockly.PHP.valueToCode(block, 'row', Blockly.PHP.ORDER_COMMA) || '0';
    var value_col = Blockly.PHP.valueToCode(block, 'col', Blockly.PHP.ORDER_COMMA) || '0';
    var dropdown_item = block.getFieldValue('item');
    var code = 'draw_home(' + value_row + ',' + value_col + ',' + dropdown_item + ');\n';
    return code;
};

Blockly.PHP['baall_frontend_adv'] = function(block) {
    //insted of Blockly.PHP.ORDER_ATOMIC
    var value_firstx = Blockly.PHP.valueToCode(block, 'firstX', Blockly.PHP.ORDER_COMMA) || '0';
    var value_firsty = Blockly.PHP.valueToCode(block, 'firstY', Blockly.PHP.ORDER_COMMA) || '0';
    var value_lastx = Blockly.PHP.valueToCode(block, 'lastX', Blockly.PHP.ORDER_COMMA) || '0';
    var value_lasty = Blockly.PHP.valueToCode(block, 'lastY', Blockly.PHP.ORDER_COMMA) || '0';
    var dropdown_item = block.getFieldValue('item');
    var code = 'design_home(' + value_firstx + ',' + value_firsty + ',' + value_lastx + ',' + value_lasty + ',' + dropdown_item + ');\n';
    return code;
};

Blockly.PHP['baall_frontend_adv_de'] = function(block) {
    var value_firstx = Blockly.PHP.valueToCode(block, 'firstX', Blockly.PHP.ORDER_COMMA) || '0';
    var value_firsty = Blockly.PHP.valueToCode(block, 'firstY', Blockly.PHP.ORDER_COMMA) || '0';
    var value_lastx = Blockly.PHP.valueToCode(block, 'lastX', Blockly.PHP.ORDER_COMMA) || '0';
    var value_lasty = Blockly.PHP.valueToCode(block, 'lastY', Blockly.PHP.ORDER_COMMA) || '0';
    var dropdown_item = block.getFieldValue('item');
    var code = 'design_home(' + value_firstx + ',' + value_firsty + ',' + value_lastx + ',' + value_lasty + ',' + dropdown_item + ');\n';
    return code;
};

Blockly.PHP['connect_baall_object'] = function(block) {
    var code = '$baall_server = new server();\n';
    return code;
};

Blockly.PHP['connect_baall_object_de'] = function(block) {
    var code = '$baall_server = new server();\n';
    return code;
};

Blockly.PHP['baall_objects'] = function(block) {
    var dropdown_item = block.getFieldValue('item');
    var value_objects = Blockly.PHP.valueToCode(block, 'objects', Blockly.PHP.ORDER_ASSIGNMENT);
    var code = '$' + dropdown_item + ' -> ' + value_objects + ';\n';
    return code;
};

Blockly.PHP['baall_objects_de'] = function(block) {
    var dropdown_item = block.getFieldValue('item');
    var value_objects = Blockly.PHP.valueToCode(block, 'objects', Blockly.PHP.ORDER_ASSIGNMENT);
    var code = '$' + dropdown_item + ' -> ' + value_objects + ';\n';
    return code;
};

Blockly.PHP['design_baall_objects'] = function(block) {
    var dropdown_item = block.getFieldValue('item');
    var value_objects = Blockly.PHP.valueToCode(block, 'objects', Blockly.PHP.ORDER_ASSIGNMENT);
    var code = '$' + dropdown_item + ' -> ' + value_objects + ';\n';
    return code;
};

Blockly.PHP['design_baall_objects_de'] = function(block) {
    var dropdown_item = block.getFieldValue('item');
    var value_objects = Blockly.PHP.valueToCode(block, 'objects', Blockly.PHP.ORDER_ASSIGNMENT);
    var code = '$' + dropdown_item + ' -> ' + value_objects + ';\n';
    return code;
};

Blockly.PHP['design_object'] = function(block) {
    var value_firstx = Blockly.PHP.valueToCode(block, 'firstX', Blockly.PHP.ORDER_COMMA) || '0';
    var value_firsty = Blockly.PHP.valueToCode(block, 'firstY', Blockly.PHP.ORDER_COMMA) || '0';
    var value_lastx = Blockly.PHP.valueToCode(block, 'lastX', Blockly.PHP.ORDER_COMMA) || '0';
    var value_lasty = Blockly.PHP.valueToCode(block, 'lastY', Blockly.PHP.ORDER_COMMA) || '0';
    var code = 'design_home(' + value_firstx + ',' + value_firsty + ',' + value_lastx + ',' + value_lasty + ')';
    return [code, Blockly.PHP.ORDER_FUNCTION_CALL];
};

Blockly.PHP['design_object_de'] = function(block) {
    var value_firstx = Blockly.PHP.valueToCode(block, 'firstX', Blockly.PHP.ORDER_COMMA) || '0';
    var value_firsty = Blockly.PHP.valueToCode(block, 'firstY', Blockly.PHP.ORDER_COMMA) || '0';
    var value_lastx = Blockly.PHP.valueToCode(block, 'lastX', Blockly.PHP.ORDER_COMMA) || '0';
    var value_lasty = Blockly.PHP.valueToCode(block, 'lastY', Blockly.PHP.ORDER_COMMA) || '0';
    var code = 'design_home(' + value_firstx + ',' + value_firsty + ',' + value_lastx + ',' + value_lasty + ')';
    return [code, Blockly.PHP.ORDER_FUNCTION_CALL];
};

Blockly.PHP['get_status_object'] = function(block) {
    var dropdown_item = block.getFieldValue('item');
    var code = '$' + dropdown_item + ' -> get_status()';
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['get_status_object_de'] = function(block) {
    var dropdown_item = block.getFieldValue('item');
    var code = '$' + dropdown_item + ' -> get_status()';
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['set_status_objects'] = function(block) {
    var value_status = Blockly.PHP.valueToCode(block, 'status', Blockly.PHP.ORDER_ATOMIC);
    var code = 'set_status('+ value_status +')';
    return [code, Blockly.PHP.ORDER_FUNCTION_CALL];
};

Blockly.PHP['set_status_objects_de'] = function(block) {
    var value_status = Blockly.PHP.valueToCode(block, 'status', Blockly.PHP.ORDER_ATOMIC);
    var code = 'set_status('+ value_status +')';
    return [code, Blockly.PHP.ORDER_FUNCTION_CALL];
};

Blockly.PHP['set_status_dimmer'] = function(block) {
    var value_status = Blockly.PHP.valueToCode(block, 'status', Blockly.PHP.ORDER_ATOMIC);
    var code = 'set_statusDimmer('+ value_status +')';
    return [code, Blockly.PHP.ORDER_FUNCTION_CALL];
};

Blockly.PHP['set_status_dimmer_de'] = function(block) {
    var value_status = Blockly.PHP.valueToCode(block, 'status', Blockly.PHP.ORDER_ATOMIC);
    var code = 'set_statusDimmer('+ value_status +')';
    return [code, Blockly.PHP.ORDER_FUNCTION_CALL];
};

Blockly.PHP['set_status_rgb'] = function(block) {
    var value_red = Blockly.PHP.valueToCode(block, 'red', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_green = Blockly.PHP.valueToCode(block, 'green', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_blue = Blockly.PHP.valueToCode(block, 'blue', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'set_statusRGB(' + value_red + ',' + value_green + ',' + value_blue + ')';
    return [code, Blockly.PHP.ORDER_FUNCTION_CALL];
};

Blockly.PHP['set_status_rgb_de'] = function(block) {
    var value_red = Blockly.PHP.valueToCode(block, 'red', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_green = Blockly.PHP.valueToCode(block, 'green', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_blue = Blockly.PHP.valueToCode(block, 'blue', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'set_statusRGB(' + value_red + ',' + value_green + ',' + value_blue + ')';
    return [code, Blockly.PHP.ORDER_FUNCTION_CALL];
};

Blockly.PHP['set_status_tv'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_volume = Blockly.PHP.valueToCode(block, 'volume', Blockly.PHP.ORDER_ATOMIC);
    var code = 'set_TVprogram(' + dropdown_name + ',' + value_volume + ')';
    return [code, Blockly.PHP.ORDER_FUNCTION_CALL];
};

Blockly.PHP['set_status_tv_de'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_volume = Blockly.PHP.valueToCode(block, 'volume', Blockly.PHP.ORDER_ATOMIC);
    var code = 'set_TVprogram(' + dropdown_name + ',' + value_volume + ')';
    return [code, Blockly.PHP.ORDER_FUNCTION_CALL];
};
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
Blockly.PHP['foreach'] = function(block) {
    var variable_object = Blockly.PHP.variableDB_.getName(block.getFieldValue('object'), Blockly.Variables.NAME_TYPE);
    var value_input = Blockly.PHP.valueToCode(block, 'input', Blockly.PHP.ORDER_ATOMIC);
    var branch = Blockly.PHP.statementToCode(block, 'DO');
    branch = Blockly.PHP.addLoopTrap(branch, block.id);
    var code = '';
    code += 'foreach(' + value_input + ' as ' + variable_object +
        ') {\n' + branch + '}\n';
    return code;
};

Blockly.PHP['foreach_simple'] = function(block) {
    var branch = Blockly.PHP.statementToCode(block, 'DO');
    branch = Blockly.PHP.addLoopTrap(branch, block.id);
    var code = '';
    code += 'foreach($BAALL as $item) {\n' + branch + '}\n';
    return code;
};

Blockly.PHP['foreach_simple_de'] = function(block) {
    var branch = Blockly.PHP.statementToCode(block, 'DO');
    branch = Blockly.PHP.addLoopTrap(branch, block.id);
    var code = '';
    code += 'foreach($BAALL as $item) {\n' + branch + '}\n';
    return code;
};

Blockly.PHP['foreach_item'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'name', Blockly.PHP.ORDER_ATOMIC);
    var value_status = Blockly.PHP.valueToCode(block, 'status', Blockly.PHP.ORDER_ATOMIC);
    var branch = Blockly.PHP.statementToCode(block, 'DO');
    branch = Blockly.PHP.addLoopTrap(branch, block.id);
    var code = 'foreach($BAALL as $item){\n  ' + value_name + ' = get_name($item);\n  ' + value_status + ' = get_status($item);\n' + branch + '}\n';
    return code;
};

Blockly.PHP['foreach_item_de'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'name', Blockly.PHP.ORDER_ATOMIC);
    var value_status = Blockly.PHP.valueToCode(block, 'status', Blockly.PHP.ORDER_ATOMIC);
    var branch = Blockly.PHP.statementToCode(block, 'DO');
    branch = Blockly.PHP.addLoopTrap(branch, block.id);
    var code = 'foreach($BAALL as $item){\n  ' + value_name + ' = get_name($item);\n  ' + value_status + ' = get_status($item);\n' + branch + '}\n';
    return code;
};

Blockly.PHP['load_xml'] = function(block) {
    var value_xml = Blockly.PHP.valueToCode(block, 'xml', Blockly.PHP.ORDER_ATOMIC);
    var code = 'load_xml(' + value_xml + ');\n';
    return code;
};

Blockly.PHP['variable'] = function(block) {
    var variable_variable = Blockly.PHP.variableDB_.getName(block.getFieldValue('variable'), Blockly.Variables.NAME_TYPE);
    var code = variable_variable;
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['set_variable'] = function(block) {
    var variable_input = Blockly.PHP.variableDB_.getName(block.getFieldValue('input'), Blockly.Variables.NAME_TYPE);
    var value_input_var = Blockly.PHP.valueToCode(block, 'input_var', Blockly.PHP.ORDER_ATOMIC);
    var code = variable_input + ' = ' + value_input_var + ';\n';
    return code;
};

Blockly.PHP['global_variable'] = function(block) {
    var code = '$flag_baallConnection = 0;\n$set_flagStatus = 0;\n';
    return code;
};

Blockly.PHP['begin_program'] = function(block) {
    var code = 'begin_program;\n';
    return code;
};

Blockly.PHP['end_program'] = function(block) {
    var code = 'end_program;\n';
    return code;
};

Blockly.PHP['delay_time'] = function(block) {
    var statements_delay = Blockly.PHP.statementToCode(block, 'delay');
    var value_time = Blockly.PHP.valueToCode(block, 'time', Blockly.PHP.ORDER_ATOMIC);
    var code = '...;\n';
    return code;
};
