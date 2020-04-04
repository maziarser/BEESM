Blockly.PHP['print_r'] = function(block) {
    var value_print_r = Blockly.PHP.valueToCode(block, 'print_r', Blockly.PHP.ORDER_NONE) || '\'\'';
    var code = 'print_r(' + value_print_r + ');\n';
    return code;
};

Blockly.PHP['tag_br'] = function(block) {
    var code = 'echo "<br />";\n';
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

Blockly.PHP['foreach_simple'] = function(block) {
    var branch = Blockly.PHP.statementToCode(block, 'DO');
    branch = Blockly.PHP.addLoopTrap(branch, block.id);
    var code = '';
    code += 'foreach($BAALL as $item) {\n' + branch + '}\n';
    return code;
};

Blockly.PHP['load_xml'] = function(block) {
    var value_xml = Blockly.PHP.valueToCode(block, 'xml', Blockly.PHP.ORDER_ATOMIC);
    var code = 'load_xml(' + value_xml + ');\n';
    return code;
};

Blockly.PHP['sleep_time'] = function(block) {
    var value_sleep = Blockly.PHP.valueToCode(block, 'sleep', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'sleep(' + value_sleep + ');\n';
    return code;
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
//-----------------------------------------------------------------
//-------------------------Free Navigation-------------------------
//-----------------------------------------------------------------
Blockly.PHP['movebot_sec'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var value_second = Blockly.PHP.valueToCode(block, 'second', Blockly.PHP.ORDER_ATOMIC) || '0';
    var dropdown_speed = block.getFieldValue('speed');
    var code = 'movebot_second(' + dropdown_direction + ',' + value_second + ',' + dropdown_speed + ');\n';
    return code;
};

Blockly.PHP['turnbot_sec'] = function(block) {
    var dropdown_rotation = block.getFieldValue('rotation');
    var value_second = Blockly.PHP.valueToCode(block, 'second', Blockly.PHP.ORDER_ATOMIC);
    var dropdown_speed = block.getFieldValue('speed');
    var code = 'turnbot_second(' + dropdown_rotation + ',' + value_second + ',' + dropdown_speed + ');\n';
    return code;
};

Blockly.PHP['safe_movebot_sec'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var value_second = Blockly.PHP.valueToCode(block, 'second', Blockly.PHP.ORDER_ATOMIC) || '0';
    var dropdown_speed = block.getFieldValue('speed');
    var code = 'safeMovebot_second(' + dropdown_direction + ',' + value_second + ',' + dropdown_speed + ');\n';
    return code;
};

Blockly.PHP['movebot_dis'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var value_distance = Blockly.PHP.valueToCode(block, 'distance', Blockly.PHP.ORDER_ATOMIC);
    var dropdown_speed = block.getFieldValue('speed');
    var code = 'movebot_distance(' + dropdown_direction + ',' + value_distance + ',' + dropdown_speed + ');\n';
    return code;
};

Blockly.PHP['turnbot_deg'] = function(block) {
    var dropdown_rotation = block.getFieldValue('rotation');
    var value_degree = Blockly.PHP.valueToCode(block, 'degree', Blockly.PHP.ORDER_ATOMIC);
    var dropdown_speed = block.getFieldValue('speed');
    var code = 'turnbot_degree(' + dropdown_rotation + ',' + value_degree + ',' + dropdown_speed + ');\n';
    return code;
};

Blockly.PHP['safe_movebot_dis'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var value_distance = Blockly.PHP.valueToCode(block, 'distance', Blockly.PHP.ORDER_ATOMIC);
    var dropdown_speed = block.getFieldValue('speed');
    var code = 'safeMovebot_distance(' + dropdown_direction + ',' + value_distance + ',' + dropdown_speed + ');\n';
    return code;
};

Blockly.PHP['sleep_bot'] = function(block) {
    var value_second = Blockly.PHP.valueToCode(block, 'second', Blockly.PHP.ORDER_ATOMIC);
    var code = 'sleep_robot(' + value_second + ');\n';
    return code;
};

Blockly.PHP['scanner_data'] = function(block) {
    var code = 'laser_scanner_data()';
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['scanner_data_range'] = function(block) {
    var value_x_range = Blockly.PHP.valueToCode(block, 'x_range', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_y_range = Blockly.PHP.valueToCode(block, 'y_range', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'laser_scanner_data_range('+ value_x_range + ',' + value_y_range + ')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['scanner_data_check'] = function(block) {
    var value_x_range = Blockly.PHP.valueToCode(block, 'x_range', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_y_range = Blockly.PHP.valueToCode(block, 'y_range', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_distance = Blockly.PHP.valueToCode(block, 'distance', Blockly.PHP.ORDER_ATOMIC) || '10';
    var code = 'laser_scanner_data_check(' + value_x_range + ',' + value_y_range + ',' + value_distance +')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['stop_bot'] = function(block) {
    var code = 'stop_robot();\n';
    return code;
};
//-----------------------------------------------------------------
//-------------------Map Navigation--------------------------------
//-----------------------------------------------------------------
Blockly.PHP['connect_server_ros'] = function(block) {
    var code = 'connect_server_ros()';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['movebot_link'] = function(block) {
    var value_meter = Blockly.PHP.valueToCode(block, 'meter', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'movebotMap_distance(' + value_meter + ');\n';
    return code;
};

Blockly.PHP['turnbot_link'] = function(block) {
    var value_degree = Blockly.PHP.valueToCode(block, 'degree', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'turnbotMap_degree(' + value_degree + ');\n';
    return code;
};

Blockly.PHP['initialization_pose'] = function(block) {
    var code = 'initial_position();\n';
    return code;
};

Blockly.PHP['pose_change'] = function(block) {
    var value_x_tar = Blockly.PHP.valueToCode(block, 'x_tar', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_y_tar = Blockly.PHP.valueToCode(block, 'y_tar', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_degree = Blockly.PHP.valueToCode(block, 'degree', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'change_initial_position(' + value_x_tar + ',' + value_y_tar + ',' + value_degree + ');\n';
    return code;
};

Blockly.PHP['start_position'] = function(block) {
    var code = 'movebot_to_start();\n';
    return code;
};

Blockly.PHP['movebot_location'] = function(block) {
    var dropdown_position = block.getFieldValue('position');
    var code = 'movebot_to_location(' + dropdown_position + ');\n';
    return code;
};

Blockly.PHP['movebot_position'] = function(block) {
    var value_x_goal = Blockly.PHP.valueToCode(block, 'x_goal', Blockly.PHP.ORDER_ATOMIC);
    var value_y_goal = Blockly.PHP.valueToCode(block, 'y_goal', Blockly.PHP.ORDER_ATOMIC);
    var value_degree = Blockly.PHP.valueToCode(block, 'degree', Blockly.PHP.ORDER_ATOMIC);
    var code = 'movebot_to_position(' + value_x_goal + ',' + value_y_goal + ',' + value_degree + ');\n';
    return code;
};

Blockly.PHP['get_location'] = function(block) {
    var dropdown_values = block.getFieldValue('values');
    var code = 'current_location('+dropdown_values+')';
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['sleep_robot'] = function(block) {
    var value_second = Blockly.PHP.valueToCode(block, 'second', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'sleepbot_map(' + value_second + ');\n';
    return code;
};

Blockly.PHP['stopbot_map'] = function(block) {
    var code = 'stopbot_map();\n';
    return code;
};
//-----------------------------------------------------------------
//----------------------------BAALL--------------------------------
//-----------------------------------------------------------------
Blockly.PHP['connect_baall'] = function(block) {
    var code = '$BAALL = connect_server();\n';
    return code;
};

Blockly.PHP['get_status_item'] = function(block) {
    var value_name= Blockly.PHP.valueToCode(block, 'name', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var code = 'get_status_item('+ value_name + ')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_status_simple'] = function(block) {
    var code = 'get_status($item)';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_name_simple'] = function(block) {
    var code = 'get_name($item)';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['set_value'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'name', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var dropdown_status = block.getFieldValue('status');
    var code = 'set_status(' + value_name + ',' + dropdown_status + ');\n';
    return code;
};

Blockly.PHP['set_value_dimmer'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'name', Blockly.PHP.ORDER_ATOMIC);
    var value_status = Blockly.PHP.valueToCode(block, 'status', Blockly.PHP.ORDER_ATOMIC);
    var code = 'set_statusDimmer(' + value_name + ',' + value_status + ');\n';
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

Blockly.PHP['set_status_items'] = function(block) {
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

Blockly.PHP['baall_frontend'] = function(block) {
    var value_row = Blockly.PHP.valueToCode(block, 'row', Blockly.PHP.ORDER_COMMA) || '0';
    var value_col = Blockly.PHP.valueToCode(block, 'col', Blockly.PHP.ORDER_COMMA) || '0';
    var dropdown_item = block.getFieldValue('item');
    var code = 'draw_home(' + value_row + ',' + value_col + ',' + dropdown_item + ');\n';
    return code;
};

Blockly.PHP['baall_frontend_adv'] = function(block) {
    var value_firstx = Blockly.PHP.valueToCode(block, 'firstX', Blockly.PHP.ORDER_COMMA) || '0';
    var value_firsty = Blockly.PHP.valueToCode(block, 'firstY', Blockly.PHP.ORDER_COMMA) || '0';
    var value_lastx = Blockly.PHP.valueToCode(block, 'lastX', Blockly.PHP.ORDER_COMMA) || '0';
    var value_lasty = Blockly.PHP.valueToCode(block, 'lastY', Blockly.PHP.ORDER_COMMA) || '0';
    var dropdown_item = block.getFieldValue('item');
    var code = 'design_home(' + value_firstx + ',' + value_firsty + ',' + value_lastx + ',' + value_lasty + ',' + dropdown_item + ');\n';
    return code;
};

Blockly.PHP['get_emotion'] = function(block) {
    var code = 'get_emotions()';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['get_emotion_data'] = function(block) {
    var code = 'get_emotions_data()';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};
//-----------------------------------------------------------------
//---------------------For RaspberryPi-----------------------------
//-----------------------------------------------------------------
Blockly.PHP['raspy_arduino_write'] = function(block) {
    var value_number = Blockly.PHP.valueToCode(block, 'number', Blockly.PHP.ORDER_ATOMIC) || '0';
    var dropdown_port = block.getFieldValue('port');
    var dropdown_rate = block.getFieldValue('rate');
    var code = 'write_to_board(' + value_number + ',' + dropdown_port + ',' + dropdown_rate + ');\n';
    return code;
};

Blockly.PHP['raspy_arduino_read'] = function(block) {
    var dropdown_port = block.getFieldValue('port');
    var dropdown_rate = block.getFieldValue('rate');
    var code = 'read_from_board(' + dropdown_port + ',' + dropdown_rate + ')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['stopbot_link'] = function(block) {
    var code = 'stop_robot_link();\n';
    return code;
};

