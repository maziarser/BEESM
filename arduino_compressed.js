'use strict';

Blockly.Arduino = new Blockly.Generator("Arduino");
Blockly.Arduino.StaticTyping = new Blockly.StaticTyping;
Blockly.Arduino.addReservedWords("setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts");
Blockly.Arduino.ORDER_ATOMIC = 0;
Blockly.Arduino.ORDER_UNARY_POSTFIX = 1;
Blockly.Arduino.ORDER_UNARY_PREFIX = 2;
Blockly.Arduino.ORDER_MULTIPLICATIVE = 3;
Blockly.Arduino.ORDER_ADDITIVE = 4;
Blockly.Arduino.ORDER_SHIFT = 5;
Blockly.Arduino.ORDER_RELATIONAL = 6;
Blockly.Arduino.ORDER_EQUALITY = 7;
Blockly.Arduino.ORDER_BITWISE_AND = 8;
Blockly.Arduino.ORDER_BITWISE_XOR = 9;
Blockly.Arduino.ORDER_BITWISE_OR = 10;
Blockly.Arduino.ORDER_LOGICAL_AND = 11;
Blockly.Arduino.ORDER_LOGICAL_OR = 12;
Blockly.Arduino.ORDER_CONDITIONAL = 13;
Blockly.Arduino.ORDER_ASSIGNMENT = 14;
Blockly.Arduino.ORDER_NONE = 99;
var profile = {
    arduino: {
        description: "Arduino standard-compatible board",
        items: [
            ["Switch", "switchable"],
            ["Dimmer", "dimmable"],
            ["RGB Color", "rgb"],
            ["Sensors", "sensor"],
            ["TV Program", "TVprogram"]
        ],
        items_de: [
            ["Switch", "switchable"],
            ["Dimmer", "dimmable"],
            ["RGB Farbe", "rgb"],
            ["Sensoren", "sensor"],
            ["TV Programm", "TVprogram"]
        ],
        digital: [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
            ["10", "10"],
            ["11", "11"],
            ["12", "12"],
            ["13", "13"],
            ["A0", "A0"],
            ["A1", "A1"],
            ["A2", "A2"],
            ["A3", "A3"],
            ["A4", "A4"],
            ["A5", "A5"],
            ["D1", "D1"],
            ["D2", "D2"],
            ["D3", "D3"],
            ["D4", "D4"],
            ["D5", "D5"],
            ["D6", "D6"],
            ["D7", "D7"],
            ["D8", "D8"]
        ],
        analog: [
            ["A0", "A0"],
            ["A1", "A1"],
            ["A2", "A2"],
            ["A3", "A3"],
            ["A4", "A4"],
            ["A5", "A5"]
        ],
        tone: [
            ["c", "3830"],
            ["d", "3400"],
            ["e", "3038"],
            ["f", "2864"],
            ["g", "2550"],
            ["a", "2272"],
            ["b", "2028"],
            ["C", "1912"]
        ],
        alphabet: [
            ["A", "\"A\""],
            ["B", "\"B\""],
            ["C", "\"C\""],
            ["D", "\"D\""],
            ["E", "\"E\""],
            ["F", "\"F\""],
            ["G", "\"G\""],
            ["H", "\"H\""],
            ["I", "\"I\""],
            ["J", "\"J\""],
            ["K", "\"K\""],
            ["L", "\"L\""],
            ["M", "\"M\""],
            ["N", "\"N\""],
            ["O", "\"O\""],
            ["P", "\"P\""],
            ["Q", "\"Q\""],
            ["R", "\"R\""],
            ["S", "\"S\""],
            ["T", "\"T\""],
            ["U", "\"U\""],
            ["V", "\"V\""],
            ["W", "\"W\""],
            ["X", "\"X\""],
            ["Y", "\"Y\""],
            ["Z", "\"Z\""],
        ],
        number: [
            ["1", "\"1\""],
            ["2", "\"2\""],
            ["3", "\"3\""],
            ["4", "\"4\""],
            ["5", "\"5\""],
            ["6", "\"6\""],
            ["7", "\"7\""],
            ["8", "\"8\""],
            ["9", "\"9\""],
            ["0", "\"0\""]
        ],
        serial_port: [
            ["115200", "115200"],
            ["9600", "9600"],
            ["300", "300"]
        ],
        serial: 115200
    },
    arduino_mega: {
        description: "Arduino Mega-compatible board"
    }
};
profile["default"] = profile.arduino;

Blockly.Arduino.getArduinoType_ = function(a) {
    switch (a.typeId) {
        case Blockly.Types.SHORT_NUMBER.typeId:
            return "char";
        case Blockly.Types.NUMBER.typeId:
            return "int";
        case Blockly.Types.LARGE_NUMBER.typeId:
            return "long";
        case Blockly.Types.DECIMAL.typeId:
            return "float";
        case Blockly.Types.TEXT.typeId:
            return "String";
        case Blockly.Types.CHARACTER.typeId:
            return "char";
        case Blockly.Types.BOOLEAN.typeId:
            return "boolean";
        case Blockly.Types.NULL.typeId:
            return "void";
        case Blockly.Types.UNDEF.typeId:
            return "undefined";
        case Blockly.Types.CHILD_BLOCK_MISSING.typeId:
            return "int";
        default:
            return "Invalid Blockly Type"
    }
};

Blockly.Arduino.init = function(a) {
    Blockly.Arduino.codeFunctions_ = Object.create(null);
    Blockly.Arduino.functionNames_ = Object.create(null);
    Blockly.Arduino.definitions_ = Object.create(null);
    Blockly.Arduino.variables_ = Object.create(null);
    Blockly.Arduino.neoPixel_ = Object.create(null);
    Blockly.Arduino.setups_ = Object.create(null);
    Blockly.Arduino.variableDB_ ? Blockly.Arduino.variableDB_.reset() : Blockly.Arduino.variableDB_ = new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);
    var b = [];
    var h = [];
    a = Blockly.Variables.allVariables(a);
    for (var c = 0; c < a.length; c++)  {
        b[c] = "int " + Blockly.Arduino.variableDB_.getName(a[c], Blockly.Variables.NAME_TYPE) + ";\n";
    }


    Blockly.Arduino.definitions_.variables = b.join("\n");
    Blockly.Arduino.variables_.variables = h.join("\n");
    Blockly.Arduino.neoPixel_.neopixel = h.join("\n");
};
//---------------------------------------------------------------------
Blockly.Arduino.finish = function(a) {
    a = "  " + a.replace(/\n/g, "\n  ");
    a = a.replace(/\n\s+$/, "\n");
    a = "void loop() \n{\n" + a + "\n}";
    var b = [],
        c = [],
        d;
    for (d in Blockly.Arduino.variables_){
        var e = Blockly.Arduino.variables_[d];
        e.match(/^String/) || e.match(/^char/) || e.match(/^boolean/) || e.match(/^int/) || e.match(/^larg/) || e.match(/^float/) ? b.push(e) : c.push(e);
    }
    e = [];
    for (d in Blockly.Arduino.neoPixel_){
        var e = Blockly.Arduino.neoPixel_[d];
    }
    e = [];
    for (d in Blockly.Arduino.definitions_) {
        var e = Blockly.Arduino.definitions_[d];
        e.match(/^#include/) || e.match(/^Adafruit_NeoPixel/) ? b.push(e) : c.push(e);
    }
    e = [];
    for (d in Blockly.Arduino.codeFunctions_){
        var e = Blockly.Arduino.codeFunctions_[d];
        e.match(/^mathRandomInt/) ? b.push(e) : c.push(e);
    }
    e = [];
    for (d in Blockly.Arduino.setups_) e.push(Blockly.Arduino.setups_[d]);
    Blockly.Arduino.variableDB_.reset();
    return (b.join("\n") + "\n\n" + c.join("\n") + "\nvoid setup() \n{\n  " + e.join("\n  ") + "\n}\n\n").replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n\n\n") + a
};

Blockly.Arduino.scrubNakedValue = function(a) {
    return a + ";\n"
};

Blockly.Arduino.addSetup = function(a, b, c) {
    var d = !1;
    if (c || void 0 === Blockly.Arduino.setups_[a]) Blockly.Arduino.setups_[a] = b, d = !0;
    return d
};

Blockly.Arduino.quote_ = function(a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/\$/g, "\\$").replace(/'/g, "\\'");
    return '"' + a + '"'
};

Blockly.Arduino.scrub_ = function(a, b) {
    if (null === b) return "";
    var c = "";
    if (!a.outputConnection || !a.outputConnection.targetConnection) {
        var d = a.getCommentText();
        d && (c += Blockly.Arduino.prefixLines(d, "// ") + "\n");
        for (var e = 0; e < a.inputList.length; e++) a.inputList[e].type == Blockly.INPUT_VALUE && (d = a.inputList[e].connection.targetBlock()) && (d = Blockly.Arduino.allNestedComments(d)) && (c += Blockly.Arduino.prefixLines(d, "// "))
    }
    e = a.nextConnection && a.nextConnection.targetBlock();
    e = Blockly.Arduino.blockToCode(e);
    return c +
        b + e
};
//-----------------------------------------------------
//Logic
Blockly.Arduino.logic = {};

Blockly.Arduino.controls_if = function() {
    for (var a = 0, b = Blockly.Arduino.valueToCode(this, "IF" + a, Blockly.Arduino.ORDER_NONE) || "false", c = Blockly.Arduino.statementToCode(this, "DO" + a), d = "if (" + b + ") {\n" + c + "\n}", a = 1; a <= this.elseifCount_; a++) b = Blockly.Arduino.valueToCode(this, "IF" + a, Blockly.Arduino.ORDER_NONE) || "false", c = Blockly.Arduino.statementToCode(this, "DO" + a), d += " else if (" + b + ") {\n" + c + "}";
    this.elseCount_ && (c = Blockly.Arduino.statementToCode(this, "ELSE"), d += " else {\n" + c + "\n}");
    return d + "\n"
};

Blockly.Arduino.logic_compare = function() {
    var a = this.getFieldValue("OP"),
        a = Blockly.Arduino.logic_compare.OPERATORS[a],
        b = "==" == a || "!=" == a ? Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL,
        c = Blockly.Arduino.valueToCode(this, "A", b) || "0",
        d = Blockly.Arduino.valueToCode(this, "B", b) || "0";
    return [c + " " + a + " " + d, b]
};

Blockly.Arduino.logic_compare.OPERATORS = {
    EQ: "==",
    NEQ: "!=",
    LT: "<",
    LTE: "<=",
    GT: ">",
    GTE: ">="
};

Blockly.Arduino.logic_operation = function() {
    var a = "AND" == this.getFieldValue("OP") ? "&&" : "||",
        b = "&&" == a ? Blockly.Arduino.ORDER_LOGICAL_AND : Blockly.Arduino.ORDER_LOGICAL_OR,
        c = Blockly.Arduino.valueToCode(this, "A", b) || "false",
        d = Blockly.Arduino.valueToCode(this, "B", b) || "false";
    return [c + " " + a + " " + d, b]
};

Blockly.Arduino.logic_negate = function() {
    var a = Blockly.Arduino.ORDER_UNARY_PREFIX;
    return ["!" + (Blockly.Arduino.valueToCode(this, "BOOL", a) || "false"), a]
};

Blockly.Arduino.logic_null = function() {
    return ["NULL", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.logic_boolean = function() {
    return ["TRUE" == this.getFieldValue("BOOL") ? "true" : "false", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.logic_ternary = function(a) {
    var b = Blockly.Arduino.valueToCode(a, "IF", Blockly.Arduino.ORDER_CONDITIONAL) || "false",
        c = Blockly.Arduino.valueToCode(a, "THEN", Blockly.Arduino.ORDER_CONDITIONAL) || "null";
    a = Blockly.Arduino.valueToCode(a, "ELSE", Blockly.Arduino.ORDER_CONDITIONAL) || "null";
    return [b + " ? " + c + " : " + a, Blockly.Arduino.ORDER_CONDITIONAL]
};
//-----------------------------------------------------
//Control
Blockly.Arduino.base = {};

Blockly.Arduino.base_delay = function() {
    return "delay(" + (Blockly.Arduino.valueToCode(this, "DELAY_TIME", Blockly.Arduino.ORDER_ATOMIC) || "1000") + ");\n"
};

Blockly.Arduino.loops = {};

Blockly.Arduino.controls_repeat_ext = function(a) {
    var b = Blockly.Arduino.valueToCode(a, "TIMES", Blockly.Arduino.ORDER_ADDITIVE) || "0",
        c = Blockly.Arduino.statementToCode(a, "DO"),
        c = Blockly.Arduino.addLoopTrap(c, a.id);
    a = "";
    var d = Blockly.Arduino.variableDB_.getDistinctName("count", Blockly.Variables.NAME_TYPE),
        e = b;
    b.match(/^\w+$/) || Blockly.isNumber(b) || (e = Blockly.Arduino.variableDB_.getDistinctName("repeat_end", Blockly.Variables.NAME_TYPE), a += "int " + e + " = " + b + ";\n");
    return a + ("for (int " + d + " = 0; " + d + " < " +
        e + "; " + d + "++) {\n" + c + "}\n")
};

Blockly.Arduino.controls_for = function(a) {
    var b = Blockly.Arduino.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE),
        c = Blockly.Arduino.valueToCode(a, "FROM", Blockly.Arduino.ORDER_ASSIGNMENT) || "0",
        d = Blockly.Arduino.valueToCode(a, "TO", Blockly.Arduino.ORDER_ASSIGNMENT) || "0",
        e = Blockly.Arduino.valueToCode(a, "BY", Blockly.Arduino.ORDER_ASSIGNMENT) || "1",
        f = Blockly.Arduino.statementToCode(a, "DO"),
        f = Blockly.Arduino.addLoopTrap(f, a.id);
    if (Blockly.isNumber(c) && Blockly.isNumber(d) && Blockly.isNumber(e)) {
        var g =
            parseFloat(c) <= parseFloat(d);
        a = "for (" + b + " = " + c + "; " + b + (g ? " <= " : " >= ") + d + "; " + b;
        b = Math.abs(parseFloat(e));
        a = (1 == b ? a + (g ? "++" : "--") : a + ((g ? " += " : " -= ") + b)) + (") {\n" + f + "}\n")
    } else a = "", g = c, c.match(/^\w+$/) || Blockly.isNumber(c) || (g = Blockly.Arduino.variableDB_.getDistinctName(b + "_start", Blockly.Variables.NAME_TYPE), a += "int " + g + " = " + c + ";\n"), c = d, d.match(/^\w+$/) || Blockly.isNumber(d) || (c = Blockly.Arduino.variableDB_.getDistinctName(b + "_end", Blockly.Variables.NAME_TYPE), a += "int " + c + " = " + d + ";\n"), d = Blockly.Arduino.variableDB_.getDistinctName(b +
        "_inc", Blockly.Variables.NAME_TYPE), a += "int " + d + " = ", a = Blockly.isNumber(e) ? a + (Math.abs(e) + ";\n") : a + ("abs(" + e + ");\n"), a = a + ("if (" + g + " > " + c + ") {\n") + (Blockly.Arduino.INDENT + d + " = -" + d + ";\n"), a += "}\n", a += "for (" + b + " = " + g + ";\n     " + d + " >= 0 ? " + b + " <= " + c + " : " + b + " >= " + c + ";\n     " + b + " += " + d + ") {\n" + f + "}\n";
    return a
};

Blockly.Arduino.controls_whileUntil = function() {
    var a = "UNTIL" == this.getFieldValue("MODE"),
        b = Blockly.Arduino.valueToCode(this, "BOOL", a ? Blockly.Arduino.ORDER_LOGICAL_NOT : Blockly.Arduino.ORDER_NONE) || "false",
        c = Blockly.Arduino.statementToCode(this, "DO");
    Blockly.Arduino.INFINITE_LOOP_TRAP && (c = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + c);
    a && (b = "!" + b);
    return "while (" + b + ") {\n" + c + "}\n"
};

Blockly.Arduino.controls_flow_statements = function(a) {
    switch (a.getFieldValue("FLOW")) {
        case "BREAK":
            return "break;\n";
        case "CONTINUE":
            return "continue;\n"
    }
    throw "Unknown flow statement.";
};
//-----------------------------------------------------
//Text
Blockly.Arduino.texts = {};

Blockly.Arduino.text = function() {
    return [Blockly.Arduino.quote_(this.getFieldValue("TEXT")), Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.text_join = function(a) {
    var b;
    if (0 == a.itemCount_) return ['""', Blockly.Arduino.ORDER_ATOMIC];
    if (1 == a.itemCount_) return ["String(" + (Blockly.Arduino.valueToCode(a, "ADD0", Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""') + ")", Blockly.Arduino.ORDER_UNARY_POSTFIX];
    var c;
    b = [];
    for (var d = 0; d < a.itemCount_; d++) c = Blockly.Arduino.valueToCode(a, "ADD" + d, Blockly.Arduino.ORDER_NONE), b[d] = "" == c ? '""' : "String(" + c + ")";
    b = b.join(" + ");
    return [b, Blockly.Arduino.ORDER_UNARY_POSTFIX]
};

Blockly.Arduino.text_append = function(a) {
    var variable = Blockly.Arduino.valueToCode(a, 'variable', Blockly.Variables.NAME_TYPE),
        text = Blockly.Arduino.valueToCode(a, 'text', Blockly.Variables.ORDER_UNARY_POSTFIX);
    return variable + " += " + ("" == text ? '""' : "String(" + text + ")") + ";\n"
};

Blockly.Arduino.text_length = function(a) {
    return ["String(" + (Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""') + ").length()", Blockly.Arduino.ORDER_UNARY_POSTFIX]
};

Blockly.Arduino.text_isEmpty = function(a) {
    var b = [];
    b.push("boolean " + Blockly.Arduino.DEF_FUNC_NAME + "(String msg) {");
    b.push("  if (msg.length() == 0) {");
    b.push("    return true;");
    b.push("  } else {");
    b.push("    return false;");
    b.push("  }");
    b.push("}");
    b = Blockly.Arduino.addFunction("isStringEmpty", b.join("\n"));
    a = Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_UNARY_POSTFIX);
    return [b + "(" + ("" == a ? '""' : "String(" + a + ")") + ")", Blockly.Arduino.ORDER_UNARY_POSTFIX]
};
//-----------------------------------------------------
//Math
Blockly.Arduino.math = {};

Blockly.Arduino.math_number = function() {
    var a = window.parseFloat(this.getFieldValue("NUM"));
    return [a, 0 > a ? Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.math_arithmetic = function() {
    var a = this.getFieldValue("OP"),
        b = Blockly.Arduino.math_arithmetic.OPERATORS[a],
        a = b[0],
        b = b[1],
        c = Blockly.Arduino.valueToCode(this, "A", b) || "0",
        d = Blockly.Arduino.valueToCode(this, "B", b) || "0";
    return a ? [c + a + d, b] : ["Math.pow(" + c + ", " + d + ")", Blockly.Arduino.ORDER_UNARY_POSTFIX]
};

Blockly.Arduino.math_arithmetic.OPERATORS = {
    ADD: [" + ", Blockly.Arduino.ORDER_ADDITIVE],
    MINUS: [" - ", Blockly.Arduino.ORDER_ADDITIVE],
    MULTIPLY: [" * ", Blockly.Arduino.ORDER_MULTIPLICATIVE],
    DIVIDE: [" / ", Blockly.Arduino.ORDER_MULTIPLICATIVE],
    POWER: [null, Blockly.Arduino.ORDER_NONE]
};

Blockly.Arduino.math_single = function(a) {
    var b = a.getFieldValue("OP"),
        c;
    if ("NEG" == b) return a = Blockly.Arduino.valueToCode(a, "NUM", Blockly.Arduino.ORDER_UNARY_PREFIX) || "0", "-" == a[0] && (a = " " + a), ["-" + a, Blockly.Arduino.ORDER_UNARY_PREFIX];
    a = "ABS" == b || "ROUND" == b.substring(0, 5) ? Blockly.Arduino.valueToCode(a, "NUM", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0" : "SIN" == b || "COS" == b || "TAN" == b ? Blockly.Arduino.valueToCode(a, "NUM", Blockly.Arduino.ORDER_MULTIPLICATIVE) || "0" : Blockly.Arduino.valueToCode(a, "NUM", Blockly.Arduino.ORDER_NONE) ||
        "0";
    switch (b) {
        case "ABS":
            c = "abs(" + a + ")";
            break;
        case "ROOT":
            c = "sqrt(" + a + ")";
            break;
        case "LN":
            c = "log(" + a + ")";
            break;
        case "EXP":
            c = "exp(" + a + ")";
            break;
        case "POW10":
            c = "pow(10," + a + ")";
            break;
        case "ROUND":
            c = "round(" + a + ")";
            break;
        case "ROUNDUP":
            c = "ceil(" + a + ")";
            break;
        case "ROUNDDOWN":
            c = "floor(" + a + ")";
            break;
        case "SIN":
            c = "sin(" + a + " / 180 * Math.PI)";
            break;
        case "COS":
            c = "cos(" + a + " / 180 * Math.PI)";
            break;
        case "TAN":
            c = "tan(" + a + " / 180 * Math.PI)"
    }
    if (c) return [c, Blockly.Arduino.ORDER_UNARY_POSTFIX];
    switch (b) {
        case "LOG10":
            c =
                "log(" + a + ") / log(10)";
            break;
        case "ASIN":
            c = "asin(" + a + ") / M_PI * 180";
            break;
        case "ACOS":
            c = "acos(" + a + ") / M_PI * 180";
            break;
        case "ATAN":
            c = "atan(" + a + ") / M_PI * 180";
            break;
        default:
            throw "Unknown math operator: " + b;
    }
    return [c, Blockly.Arduino.ORDER_MULTIPLICATIVE]
};

Blockly.Arduino.math_trig = Blockly.Arduino.math_single;

Blockly.Arduino.math_constant = function(a) {
    return {
        PI: ["M_PI", Blockly.Arduino.ORDER_UNARY_POSTFIX],
        E: ["M_E", Blockly.Arduino.ORDER_UNARY_POSTFIX],
        GOLDEN_RATIO: ["(1 + sqrt(5)) / 2", Blockly.Arduino.ORDER_MULTIPLICATIVE],
        SQRT2: ["M_SQRT2", Blockly.Arduino.ORDER_UNARY_POSTFIX],
        SQRT1_2: ["M_SQRT1_2", Blockly.Arduino.ORDER_UNARY_POSTFIX],
        INFINITY: ["INFINITY", Blockly.Arduino.ORDER_ATOMIC]
    }[a.getFieldValue("CONSTANT")]
};

Blockly.Arduino.math_number_property = function(a) {
    var b = Blockly.Arduino.valueToCode(a, "NUMBER_TO_CHECK", Blockly.Arduino.ORDER_MULTIPLICATIVE) || "0",
        c = a.getFieldValue("PROPERTY"),
        d;
    if ("PRIME" == c) return a = Blockly.Arduino.addFunction("mathIsPrime", ["boolean " + Blockly.Arduino.DEF_FUNC_NAME + "(int n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods\n  if (n == 2 || n == 3) {\n    return true;\n  }\n  // False if n is NaN, negative, is 1.\n  // And false if n is divisible by 2 or 3.\n  if (isnan(n) || (n <= 1) || (n == 1) || (n % 2 == 0) || (n % 3 == 0)) {\n    return false;\n  }\n  // Check all the numbers of form 6k +/- 1, up to sqrt(n).\n  for (int x = 6; x <= sqrt(n) + 1; x += 6) {\n    if (n % (x - 1) == 0 || n % (x + 1) == 0) {\n      return false;\n    }\n  }\n  return true;\n}"].join("\n")),
        Blockly.Arduino.addInclude("math", "#include <math.h>"), [a + "(" + b + ")", Blockly.Arduino.ORDER_UNARY_POSTFIX];
    switch (c) {
        case "EVEN":
            d = b + " % 2 == 0";
            break;
        case "ODD":
            d = b + " % 2 == 1";
            break;
        case "WHOLE":
            Blockly.Arduino.addInclude("math", "#include <math.h>");
            d = "(floor(" + b + ") == " + b + ")";
            break;
        case "POSITIVE":
            d = b + " > 0";
            break;
        case "NEGATIVE":
            d = b + " < 0";
            break;
        case "DIVISIBLE_BY":
            a = Blockly.Arduino.valueToCode(a, "DIVISOR", Blockly.Arduino.ORDER_MULTIPLICATIVE) || "0", d = b + " % " + a + " == 0"
    }
    return [d, Blockly.Arduino.ORDER_EQUALITY]
};

Blockly.Arduino.math_round = Blockly.Arduino.math_single;

Blockly.Arduino.math_modulo = function(a) {
    var b = Blockly.Arduino.valueToCode(a, "DIVIDEND", Blockly.Arduino.ORDER_MULTIPLICATIVE) || "0";
    a = Blockly.Arduino.valueToCode(a, "DIVISOR", Blockly.Arduino.ORDER_MULTIPLICATIVE) || "0";
    return [b + " % " + a, Blockly.Arduino.ORDER_MULTIPLICATIVE]
};

Blockly.Arduino.math_constrain = function(a) {
    var b = Blockly.Arduino.valueToCode(a, "VALUE", Blockly.Arduino.ORDER_NONE) || "0",
        c = Blockly.Arduino.valueToCode(a, "LOW", Blockly.Arduino.ORDER_NONE) || "0";
    a = Blockly.Arduino.valueToCode(a, "HIGH", Blockly.Arduino.ORDER_NONE) || "0";
    return ["(" + b + " < " + c + " ? " + c + " : ( " + b + " > " + a + " ? " + a + " : " + b + "))", Blockly.Arduino.ORDER_UNARY_POSTFIX]
};

Blockly.Arduino.addFunction = function(a, b) {
    if (void 0 === Blockly.Arduino.codeFunctions_[a]) {
        var c = Blockly.Arduino.variableDB_.getDistinctName(a, Blockly.Generator.NAME_TYPE);
        Blockly.Arduino.codeFunctions_[a] = b.replace(Blockly.Arduino.DEF_FUNC_NAME, c);
        Blockly.Arduino.functionNames_[a] = c
    }
    return Blockly.Arduino.functionNames_[a]
};

Blockly.Arduino.addVariable = function(a, b, c) {
    var d = !1;
    if (c || void 0 === Blockly.Arduino.variables_[a]) Blockly.Arduino.variables_[a] = b, d = !0;
    return d
};

Blockly.Arduino.math_random_int = function(a) {
    var argument0 = Blockly.Arduino.valueToCode(a, 'FROM',
            Blockly.Arduino.ORDER_NONE) || '0';
    var argument1 = Blockly.Arduino.valueToCode(a, 'TO',
            Blockly.Arduino.ORDER_NONE) || '0';
    var functionName = Blockly.Arduino.variableDB_.getDistinctName(
        'math_random_int', Blockly.Generator.NAME_TYPE);
    Blockly.Arduino.math_random_int.random_function = functionName;
    var func = [
        'int ' + Blockly.Arduino.DEF_FUNC_NAME + '(int min, int max) {',
        '  if (min > max) {',
        '    // Swap min and max to ensure min is smaller.',
        '    int temp = min;',
        '    min = max;',
        '    max = temp;',
        '  }',
        '  return min + (rand() % (max - min + 1));',
        '}'];
    var funcName = Blockly.Arduino.addFunction('mathRandomInt', func.join('\n'));
    var code = funcName + '(' + argument0 + ', ' + argument1 + ')';
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino.math_random_float = function(a) {
    return ["(rand() / RAND_MAX)", Blockly.Arduino.ORDER_UNARY_POSTFIX]
};

Blockly.Arduino.base_map = function() {
    var a = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_NONE),
        b = Blockly.Arduino.valueToCode(this, "DMAX", Blockly.Arduino.ORDER_ATOMIC);
    return ["map(" + a + ", 0, 1024, 0, " + b + ")", Blockly.Arduino.ORDER_NONE]
};
//-----------------------------------------------------
//Functions
Blockly.Arduino.procedures = {};

Blockly.Arduino.procedures_defreturn = function() {
    var a = Blockly.Arduino.variableDB_.getName(this.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE),
        b = Blockly.Arduino.statementToCode(this, "STACK");
    Blockly.Arduino.INFINITE_LOOP_TRAP && (b = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + b);
    var c = Blockly.Arduino.valueToCode(this, "RETURN", Blockly.Arduino.ORDER_NONE) || "";
    c && (c = "  return " + c + ";\n");
    for (var d = c ? "int" : "void", e = [], f = 0; f < this.arguments_.length; f++) e[f] = "int " + Blockly.Arduino.variableDB_.getName(this.arguments_[f],
        Blockly.Variables.NAME_TYPE);
    b = d + " " + a + "(" + e.join(", ") + ") {\n" + b + c + "}\n";
    b = Blockly.Arduino.scrub_(this, b);
    Blockly.Arduino.definitions_[a] = b;
    return null
};

Blockly.Arduino.procedures_defnoreturn = Blockly.Arduino.procedures_defreturn;

Blockly.Arduino.procedures_callreturn = function() {
    for (var a = Blockly.Arduino.variableDB_.getName(this.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE), b = [], c = 0; c < this.arguments_.length; c++) b[c] = Blockly.Arduino.valueToCode(this, "ARG" + c, Blockly.Arduino.ORDER_NONE) || "null";
    return [a + "(" + b.join(", ") + ")", Blockly.Arduino.ORDER_UNARY_POSTFIX]
};

Blockly.Arduino.procedures_callnoreturn = function() {
    for (var a = Blockly.Arduino.variableDB_.getName(this.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE), b = [], c = 0; c < this.arguments_.length; c++) b[c] = Blockly.Arduino.valueToCode(this, "ARG" + c, Blockly.Arduino.ORDER_NONE) || "null";
    return a + "(" + b.join(", ") + ");\n"
};

Blockly.Arduino.procedures_ifreturn = function() {
    var a = "if (" + (Blockly.Arduino.valueToCode(this, "CONDITION", Blockly.Arduino.ORDER_NONE) || "false") + ") {\n";
    if (this.hasReturnValue_) var b = Blockly.Arduino.valueToCode(this, "VALUE", Blockly.Arduino.ORDER_NONE) || "null",
        a = a + ("  return " + b + ";\n");
    else a += "  return;\n";
    return a + "}\n"
};

Blockly.Arduino.arduino_functions = function(a) {
    var b = Blockly.Arduino.statementToCode(a, "SETUP_FUNC");
    b && Blockly.Arduino.addSetup("userSetupCode", b, !0);
    a = a.getInputTargetBlock("LOOP_FUNC");
    b = Blockly.Arduino.blockToCode(a);
    if (!goog.isString(b)) throw 'Expecting code from statement block "' + a.type + '".';
    return b
};
//---------
var function_name;
Blockly.Arduino.new_func = function(a) {
    var b = a.getFieldValue('func_name');
    function_name = b;
    var c = Blockly.Arduino.valueToCode(a, 'vars', Blockly.Arduino.ORDER_ATOMIC),
        d = Blockly.Arduino.statementToCode(a, 'body'),
        code = "void " + b +"(" + c + ") {\n" + d + "\n}";
    code = Blockly.Arduino.scrub_(a, code);
    Blockly.Arduino.definitions_.define_function = code;
    return null;
};

Blockly.Arduino.pointer = function(a) {
    var code = 'AdafruitIO_Data *data';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.call_func = function(a) {
    var b = a.getFieldValue('funct_name');
    var code = b + '();\n';
    return code;
};

Blockly.Arduino.call_func_adv = function(a) {
    var b = a.getFieldValue('funct_name'),
        c = Blockly.Arduino.valueToCode(a, 'input', Blockly.Arduino.ORDER_ATOMIC),
        code = b + '('+ c +');\n';
    return code;
};
//-----------------------------------------------------
//IN/OUT
Blockly.Arduino.inout_highlow = function() {
    return ["HIGH" == this.getFieldValue("BOOL") ? "HIGH" : "LOW", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.inout_digital_write = function() {
    var a = this.getFieldValue("PIN"),
        b = this.getFieldValue("STAT");
    Blockly.Arduino.setups_["setup_output_" + a] = "pinMode(" + a + ", OUTPUT);";
    return "digitalWrite(" + a + ", " + b + ");\n"
};

Blockly.Arduino.inout_digital_read = function() {
    var a = this.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_input_" + a] = "pinMode(" + a + ", INPUT);";
    return ["digitalRead(" + a + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.inout_analog_write = function() {
    var a = this.getFieldValue("PIN"),
        b = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    return "analogWrite(" + a + ", " + b + ");\n"
};

Blockly.Arduino.inout_analog_read = function() {
    return ["analogRead(" + this.getFieldValue("PIN") + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.serial_print = function() {
    var a = Blockly.Arduino.valueToCode(this, "CONTENT", Blockly.Arduino.ORDER_ATOMIC) || "0";
    Blockly.Arduino.setups_["setup_serial_" + profile["default"].serial] = "Serial.begin(" + profile["default"].serial + ");\n";
    return "Serial.println(" + a + ");\n"
};

Blockly.Arduino.inout_buildin_led = function() {
    var a = this.getFieldValue("STAT");
    Blockly.Arduino.setups_.setup_output_13 = "pinMode(13, OUTPUT);";
    return "digitalWrite(13, " + a + ");\n"
};
//-----------------------------------------------------
//Audio
Blockly.Arduino.inout_tone = function() {
    var a = this.getFieldValue("PIN"),
        b = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output" + a] = "pinMode(" + a + ", OUTPUT);";
    return "tone(" + a + ", " + b + ");\n"
};

Blockly.Arduino.inout_notone = function() {
    var a = this.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_output" + a] = "pinMode(" + a + ", OUTPUT);";
    return "noTone(" + a + ");\n"
};
//-----------------------------------------------------
//------------------------BAALL------------------------
//-----------------------------------------------------
Blockly.Arduino.connect_baall = function() {
    Blockly.Arduino.setups_["setup_output"] = "setup_connection();";
    Blockly.Arduino.definitions_.define_baall = "#include <baall.h>\n";
    var code = "connect_server();\n";
    return code;
};

Blockly.Arduino.get_status_item = function() {
    var a = String(Blockly.Arduino.valueToCode(this, 'name', Blockly.Arduino.ORDER_ATOMIC) || '\'\''),
        b = this.getFieldValue("item");
    var code = "get_status_"+b+"(" + a + ")";
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.get_status_simple = function() {
    var code = "get_status_items()";
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.get_name_simple = function() {
    var code = "get_name_items()";
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.get_face_emotion = function() {
    var code = "get_emotions()";
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.set_value = function() {
    var a = String(Blockly.Arduino.valueToCode(this, "name", Blockly.Arduino.ORDER_ATOMIC) || '\'\''),
        b = String(this.getFieldValue("status"));
    var code = "set_status(" + a + ", " + b + ");\n";
    return code;
};

Blockly.Arduino.set_value_rgb = function() {
    var a = String(Blockly.Arduino.valueToCode(this, 'name', Blockly.Arduino.ORDER_ATOMIC) || '\'\''),
        b = String(Blockly.Arduino.valueToCode(this, 'red', Blockly.Arduino.ORDER_ATOMIC) || '0'),
        c = String(Blockly.Arduino.valueToCode(this, 'green', Blockly.Arduino.ORDER_ATOMIC) || '0'),
        d = String(Blockly.Arduino.valueToCode(this, 'blue', Blockly.Arduino.ORDER_ATOMIC) || '0');
    var code = "set_statusRgb(" + a + ", " + b + ", " + c + ", " + d +");\n";
    return code;
};

Blockly.Arduino.set_value_dimmer = function() {
    var a = String(Blockly.Arduino.valueToCode(this, 'name', Blockly.Arduino.ORDER_ATOMIC)|| '\'\''),
        b = String(Blockly.Arduino.valueToCode(this, 'status', Blockly.Arduino.ORDER_ATOMIC)|| '\'\'');
    var code = "set_statusDimmer(" + a + ", " + b + ");\n";
    return code;
};
//--------------
Blockly.Arduino.set_status_items = function() {
    var a = String(Blockly.Arduino.valueToCode(this, 'name', Blockly.PHP.ORDER_ATOMIC) || '\'\''),
        b = String(Blockly.Arduino.valueToCode(this, 'status', Blockly.PHP.ORDER_ATOMIC) || '\'\'');
    var code = "set_status(" + a + ", " + b + ");\n";
    return code;
};
//--------------
Blockly.Arduino.tv_program = function() {
    var a = String(this.getFieldValue('NAME')),
    b = String(Blockly.Arduino.valueToCode(this, 'volume', Blockly.Arduino.ORDER_ATOMIC) || '0');
    var code = "set_TVprogram(" + a + ", " + b + ");\n";
    return code;
};
//--------------
Blockly.Arduino.baall_frontend = function(block) {
    var a = Blockly.Arduino.valueToCode(block, 'row', Blockly.Arduino.ORDER_COMMA) || '0';
    var b = Blockly.Arduino.valueToCode(block, 'col', Blockly.Arduino.ORDER_COMMA) || '0';
    var c = block.getFieldValue('item');
    var code = 'draw_home(' + a + ',' + b + ',' + c + ');\n';
    return code;
};

Blockly.Arduino.baall_frontend_adv = function(block) {
    var a = Blockly.Arduino.valueToCode(block, 'firstX', Blockly.Arduino.ORDER_COMMA) || '0';
    var b = Blockly.Arduino.valueToCode(block, 'firstY', Blockly.Arduino.ORDER_COMMA) || '0';
    var c = Blockly.Arduino.valueToCode(block, 'lastX', Blockly.Arduino.ORDER_COMMA) || '0';
    var d = Blockly.Arduino.valueToCode(block, 'lastY', Blockly.Arduino.ORDER_COMMA) || '0';
    var e = block.getFieldValue('item');
    var code = 'design_home(' + a + ',' + b + ',' + c + ',' + d + ',' + e + ');\n';
    return code;
};
//-----------------------------------------------------
//-----------------------------------------------------
//Blocks in DE
Blockly.Arduino.connect_baall_de = function() {
    Blockly.Arduino.setups_["setup_output"] = "setup_connection();";
    Blockly.Arduino.definitions_.define_baall = "#include <baall.h>\n";
    var code = "connect_server();\n";
    return code;
};

Blockly.Arduino.get_status_item_de = function() {
    var a = String(Blockly.Arduino.valueToCode(this, 'name', Blockly.Arduino.ORDER_ATOMIC) || '\'\''),
        b = this.getFieldValue("item");
    var code = "get_status_"+b+"(" + a + ")";
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.get_status_simple_de = function() {
    var code = "get_status_items()";
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.get_name_simple_de = function() {
    var code = "get_name_items()";
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.get_face_emotion_de = function() {
    var code = "get_emotions()";
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.set_value_de = function() {
    var a = String(Blockly.Arduino.valueToCode(this, "name", Blockly.Arduino.ORDER_ATOMIC) || '\'\''),
        b = String(this.getFieldValue("status"));
    var code = "set_status(" + a + ", " + b + ");\n";
    return code;
};

Blockly.Arduino.set_value_rgb_de = function() {
    var a = String(Blockly.Arduino.valueToCode(this, 'name', Blockly.Arduino.ORDER_ATOMIC) || '\'\''),
        b = String(Blockly.Arduino.valueToCode(this, 'red', Blockly.Arduino.ORDER_ATOMIC) || '0'),
        c = String(Blockly.Arduino.valueToCode(this, 'green', Blockly.Arduino.ORDER_ATOMIC) || '0'),
        d = String(Blockly.Arduino.valueToCode(this, 'blue', Blockly.Arduino.ORDER_ATOMIC) || '0');
    var code = "set_statusRgb(" + a + ", " + b + ", " + c + ", " + d +");\n";
    return code;
};

Blockly.Arduino.set_value_dimmer_de = function() {
    var a = String(Blockly.Arduino.valueToCode(this, 'name', Blockly.Arduino.ORDER_ATOMIC)|| '\'\''),
        b = String(Blockly.Arduino.valueToCode(this, 'status', Blockly.Arduino.ORDER_ATOMIC)|| '\'\'');
    var code = "set_statusDimmer(" + a + ", " + b + ");\n";
    return code;
};

Blockly.Arduino.set_status_items_de = function() {
    var a = String(Blockly.Arduino.valueToCode(this, 'name', Blockly.PHP.ORDER_ATOMIC) || '\'\''),
        b = String(Blockly.Arduino.valueToCode(this, 'status', Blockly.PHP.ORDER_ATOMIC) || '\'\'');
    var code = "set_status(" + a + ", " + b + ");\n";
    return code;
};

Blockly.Arduino.tv_program_de = function() {
    var a = String(this.getFieldValue('NAME')),
        b = String(Blockly.Arduino.valueToCode(this, 'volume', Blockly.Arduino.ORDER_ATOMIC) || '0');
    var code = "set_TVprogram(" + a + ", " + b + ");\n";
    return code;
};
//--------------
Blockly.Arduino.baall_frontend_de = function(block) {
    var a = Blockly.Arduino.valueToCode(block, 'row', Blockly.Arduino.ORDER_COMMA) || '0';
    var b = Blockly.Arduino.valueToCode(block, 'col', Blockly.Arduino.ORDER_COMMA) || '0';
    var c = block.getFieldValue('item');
    var code = 'draw_home(' + a + ',' + b + ',' + c + ');\n';
    return code;
};

Blockly.Arduino.baall_frontend_adv_de = function(block) {
    var a = Blockly.Arduino.valueToCode(block, 'firstX', Blockly.Arduino.ORDER_COMMA) || '0';
    var b = Blockly.Arduino.valueToCode(block, 'firstY', Blockly.Arduino.ORDER_COMMA) || '0';
    var c = Blockly.Arduino.valueToCode(block, 'lastX', Blockly.Arduino.ORDER_COMMA) || '0';
    var d = Blockly.Arduino.valueToCode(block, 'lastY', Blockly.Arduino.ORDER_COMMA) || '0';
    var e = block.getFieldValue('item');
    var code = 'design_home(' + a + ',' + b + ',' + c + ',' + d + ',' + e + ');\n';
    return code;
};
//-----------------------------------------------------
//---------------------END BAALL-----------------------
//-----------------------------------------------------
//Servo
Blockly.Arduino.servo_move = function() {
    var a = this.getFieldValue("PIN"),
        b = Blockly.Arduino.valueToCode(this, "DEGREE", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_.define_servo = "#include <Servo.h>\n";
    Blockly.Arduino.definitions_["var_servo" + a] = "Servo servo_" + a + ";\n";
    Blockly.Arduino.setups_["setup_servo_" + a] = "servo_" + a + ".attach(" + a + ");\n";
    return "servo_" + a + ".write(" + b + ");\n"
};

Blockly.Arduino.servo_read_degrees = function() {
    var a = this.getFieldValue("PIN");
    Blockly.Arduino.definitions_.define_servo = "#include <Servo.h>\n";
    Blockly.Arduino.definitions_["var_servo" + a] = "Servo servo_" + a + ";\n";
    Blockly.Arduino.setups_["setup_servo_" + a] = "servo_" + a + ".attach(" + a + ");\n";
    return "servo_" + a + ".read()"
};
//-----------------------------------------------------
//Grove Analog
Blockly.Arduino.grove = {};

Blockly.Arduino.grove_rotary_angle = function() {
    return ["analogRead(" + this.getFieldValue("PIN") + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.grove_temporature_sensor = function() {
    var a = this.getFieldValue("PIN");
    return ["1.0/(log(100000*(float)(1023.0/analogRead(" + a + ")-1.0)/100000)/4275+1/298.15)-273.15", Blockly.Arduino.ORDER_ATOMIC]
    //return ["round((1/(log((float)(1023-analogRead(" + a + "))*10000/analogRead(" + a + "))/10000)/3975+1/298.15)-273.15)", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.grove_light_sensor = function() {
    return ["analogRead(" + this.getFieldValue("PIN") + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.grove_humidity_sensor = function() {
    return ["analogRead(" + this.getFieldValue("PIN") + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.grove_sound_sensor = function() {
    return ["analogRead(" + this.getFieldValue("PIN") + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.grove_thumb_joystick = function() {
    var a = this.getFieldValue("PIN"),
        b = "0",
        b = "y" === this.getFieldValue("AXIS") ? _get_next_pin(a) : a;
    return ["analogRead(" + b + ")", Blockly.Arduino.ORDER_ATOMIC]
};
//-----------------------------------------------------
//Grove
Blockly.Arduino.grove_led = function() {
    var a = this.getFieldValue("PIN"),
        b = this.getFieldValue("STAT");
    Blockly.Arduino.setups_["setup_green_led_" + a] = "pinMode(" + a + ", OUTPUT);";
    return "digitalWrite(" + a + "," + b + ");\n"
};

Blockly.Arduino.grove_button = function() {
    var a = this.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_button_" + a] = "pinMode(" + a + ", INPUT);";
    return ["digitalRead(" + a + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.grove_relay = function() {
    var a = this.getFieldValue("PIN"),
        b = this.getFieldValue("STAT");
    Blockly.Arduino.setups_["setup_relay_" + a] = "pinMode(" + a + ", OUTPUT);";
    return "digitalWrite(" + a + "," + b + ");\n"
};

Blockly.Arduino.grove_tilt_switch = function() {
    var a = this.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_tilt_switch_" + a] = "pinMode(" + a + ", INPUT);";
    return ["digitalRead(" + a + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.grove_piezo_buzzer = function() {
    var a = this.getFieldValue("PIN"),
        b = this.getFieldValue("STAT");
    Blockly.Arduino.setups_["setup_piezo_buzzer_" + a] = "pinMode(" + a + ", OUTPUT);";
    return "digitalWrite(" + a + "," + b + ");\n"
};

Blockly.Arduino.grove_buzzer = function() {
    var a = this.getFieldValue("PIN"),
        b = this.getFieldValue("TONE"),
        c = Blockly.Arduino.valueToCode(this, "SEC", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_.define_buzzer = "#include <Arduino.h>\n";
    Blockly.Arduino.definitions_["var_buzzer"] = "void grove_buzzer_play_tone(int pin, int tone, int duration) { for (long i = 0; i < duration * 1000L; i += tone * 2) {digitalWrite(pin, HIGH);delayMicroseconds(tone);digitalWrite(pin, LOW);delayMicroseconds(tone);}}\n";
    //Blockly.Arduino.definitions_["var_buzzer" + a] = "void grove_buzzer_play_tone(int pin, int tone, int duration) { for (long i = 0; i < duration * 1000L; i += tone * 2) {digitalWrite(pin, HIGH);delayMicroseconds(tone);digitalWrite(pin, LOW);delayMicroseconds(tone);}}\n";
    Blockly.Arduino.setups_["setup_buzzer_" + a] = "pinMode(" + a + ", OUTPUT);";
    return "grove_buzzer_play_tone(" + a + "," + b + "," + c + ");\n"
};

Blockly.Arduino.grove_pir_motion_sensor = function() {
    var a = this.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_input_" + a] = "pinMode(" + a + ", INPUT);";
    return ["digitalRead(" + a + ")", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.grove_line_finder = function() {
    var a = this.getFieldValue("PIN");
    Blockly.Arduino.setups_["setup_input_" + a] = "pinMode(" + a + ", INPUT);";
    return ["digitalRead(" + a + ")", Blockly.Arduino.ORDER_ATOMIC]
};

function hexToR(a) {
    return parseInt(cutHex(a).substring(0, 2), 16)
}

function hexToG(a) {
    return parseInt(cutHex(a).substring(2, 4), 16)
}

function hexToB(a) {
    return parseInt(cutHex(a).substring(4, 6), 16)
}

function cutHex(a) {
    return "#" == a.charAt(0) ? a.substring(1, 7) : a
}

Blockly.Arduino.grove_rgb_led = function() {
    var a = this.getFieldValue("PIN"),
        b = _get_next_pin(a);
    Blockly.Arduino.setups_["setup_input_" + a] = "pinMode(" + a + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_input_" + b] = "pinMode(" + b + ", OUTPUT);";
    Blockly.Arduino.definitions_.define_uint8 = "#define uint8 unsigned char";
    Blockly.Arduino.definitions_.define_uint16 = "#define uint16 unsigned int";
    Blockly.Arduino.definitions_.define_uint32 = "#define uint32 unsigned long int";
    Blockly.Arduino.definitions_["define_clkproduce_" +
        a] = "void ClkProduce_" + a + "(void)\n{\n  digitalWrite(" + a + ", LOW);\n  delayMicroseconds(20);\n  digitalWrite(" + a + ", HIGH);\n  delayMicroseconds(20);\n}\n";
    Blockly.Arduino.definitions_["define_send32zero_" + a] = "void Send32Zero_" + a + "(void)\n{\n  uint8 i;\n  for (i=0; i<32; i++)\n  {\n    digitalWrite(" + b + ", LOW);\n    ClkProduce_" + a + "();\n  }\n}\n";
    Blockly.Arduino.definitions_.define_taskanticode = "uint8 TakeAntiCode(uint8 dat)\n{\n  uint8 tmp = 0;\n  if ((dat & 0x80) == 0)\n  {\n    tmp |= 0x02;\n  }\n  \n  if ((dat & 0x40) == 0)\n  {\n    tmp |= 0x01;\n  }\n  return tmp;\n}\n";
    Blockly.Arduino.definitions_["define_datasend_" + a] = "// gray data\nvoid DatSend_" + a + "(uint32 dx)\n{\n  uint8 i;\n  for (i=0; i<32; i++)\n  {\n    if ((dx & 0x80000000) != 0)\n    {\n      digitalWrite(" + b + ", HIGH);\n    }\n    else\n    {\n      digitalWrite(" + b + ", LOW);\n    }\n  dx <<= 1;\n  ClkProduce_" + a + "();\n  }\n}\n";
    Blockly.Arduino.definitions_["define_datadealwithsend_" + a] = "// data processing\nvoid DataDealWithAndSend_" + a + "(uint8 r, uint8 g, uint8 b)\n{\n  uint32 dx = 0;\n  dx |= (uint32)0x03 << 30;             // highest two bits 1\uff0cflag bits\n  dx |= (uint32)TakeAntiCode(b) << 28;\n  dx |= (uint32)TakeAntiCode(g) << 26;\n  dx |= (uint32)TakeAntiCode(r) << 24;\n\n  dx |= (uint32)b << 16;\n  dx |= (uint32)g << 8;\n  dx |= r;\n\n  DatSend_" +
        a + "(dx);\n}\n";
    b = "Send32Zero_" + a + "(); // begin\n";
    if (0 == this.itemCount_) return "";
    for (var c = 0; c < this.itemCount_; c++) var d = this.getFieldValue("RGB" + c),
        b = b + ("DataDealWithAndSend_" + a + "(" + hexToR(d) + ", " + hexToG(d) + ", " + hexToB(d) + "); // first node data\n");
    return b + ("Send32Zero_" + a + "();  // send to update data\n")
};

Blockly.Arduino.grove_mp3_player = function() {
	var a = this.getFieldValue("PIN"),
		  b = "LOW",
		  c = "delay(100)",
		  _c = "delay(1000)",
		  d = "HIGH";
    Blockly.Arduino.setups_["setup_output_" + a] = "pinMode(" + a + ", OUTPUT);";
    return "digitalWrite(" + a + ", " + b + ");\n" + c + ";\ndigitalWrite(" + a + ", " + d + ");\n" + _c + ";\n";
};

Blockly.Arduino.grove_bluetooth_slave = function() {
    var a = this.getFieldValue("PIN"),
        b = _get_next_pin(a),
        c = this.getFieldValue("NAME");
    this.getFieldValue("PINCODE");
    var d = Blockly.Arduino.statementToCode(this, "RCV"),
        e = Blockly.Arduino.statementToCode(this, "SNT");
    Blockly.Arduino.definitions_.define_softwareserial = "#include <SoftwareSerial.h>\n";
    Blockly.Arduino.definitions_["var_bluetooth_" + a] = "SoftwareSerial blueToothSerial_" + a + "(" + a + "," + b + ");\n";
    Blockly.Arduino.setups_["setup_bluetooth_" + a] = "Serial.begin(115200);\n";
    Blockly.Arduino.setups_["setup_bluetooth_" + a] += "  pinMode(" + a + ", INPUT);\n";
    Blockly.Arduino.setups_["setup_bluetooth_" + a] += "  pinMode(" + b + ", OUTPUT);\n";
    Blockly.Arduino.setups_["setup_bluetooth_" + a] += "  setupBlueToothConnection_" + a + "();\n";
    Blockly.Arduino.definitions_["define_setupBlueToothConnection_" + a] = "void setupBlueToothConnection_" + a + "()\n{\n  blueToothSerial_" + a + ".begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400\n  blueToothSerial_" + a + '.print("\\r\\n+STWMOD=0\\r\\n"); //set the bluetooth work in slave mode\n  blueToothSerial_' +
        a + '.print("\\r\\n+STNA=' + c + '\\r\\n"); //set the bluetooth name as "' + c + '"\n  blueToothSerial_' + a + '.print("\\r\\n+STPIN=0000\\r\\n");//Set SLAVE pincode"0000"\n  blueToothSerial_' + a + '.print("\\r\\n+STOAUT=1\\r\\n"); // Permit Paired device to connect me\n  blueToothSerial_' + a + '.print("\\r\\n+STAUTO=0\\r\\n"); // Auto-connection should be forbidden here\n  delay(2000); // This delay is required.\n  blueToothSerial_' + a + '.print("\\r\\n+INQ=1\\r\\n"); //make the slave bluetooth inquirable \n  Serial.println("The slave bluetooth is inquirable!");\n  delay(2000); // This delay is required.\n  blueToothSerial_' +
        a + ".flush();\n}\n";
    return "char recvChar_" + a + ";\nwhile(1) {\n  if(blueToothSerial_" + a + ".available()) {//check if there is any data sent from the remote bluetooth shield\n    recvChar_" + a + " = blueToothSerial_" + a + ".read();\n    Serial.print(recvChar_" + a + ");\n" + d + "  }\n  if(Serial.available()){//check if there is any data sent from the local serial terminal, you can add the other applications here\n    recvChar_" + a + " = Serial.read();\n    blueToothSerial_" + a + ".print(recvChar_" + a + ");\n" + e + "  }\n}\n"
};

Blockly.Arduino.grove_ultrasonic_ranger = function() {
    var a = this.getFieldValue("PIN"),
        b = this.getFieldValue("UNIT");
    Blockly.Arduino.definitions_.define_ultrasonic = "#include <Ultrasonic.h>\n";
    Blockly.Arduino.definitions_["var_ultrasonic" + a] = "Ultrasonic ultrasonic_" + a + "(" + a + ");";
    return ["cm" === b ? "ultrasonic_" + a + ".MeasureInCentimeters()" : "ultrasonic_" + a + ".MeasureInInches()", Blockly.Arduino.ORDER_ATOMIC]
};
//-----------------------------------------------------
//Grove LCD
var _get_next_pin = function(a) {
    var b = a,
        b = parseInt(b) ? parseInt(a) + 1 : "A" + (parseInt(b.slice(1, b.length)) + 1);
    a = profile["default"].digital.length;
    for (var c = !0, d = 0; d < a; d++) profile["default"].digital[d][1] == b && (c = !1);
    return c ? (alert("Grove Sensor needs PIN#+1 port, current setting is out of bound."), null) : b
};

Blockly.Arduino.grove_serial_lcd_print = function() {
    var a = this.getFieldValue("PIN"),
        b = Blockly.Arduino.valueToCode(this, "TEXT", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        c = Blockly.Arduino.valueToCode(this, "TEXT2", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        d = Blockly.Arduino.valueToCode(this, "DELAY_TIME", Blockly.Arduino.ORDER_ATOMIC) || "1000";
    Blockly.Arduino.definitions_.define_seriallcd = "#include <SerialLCD.h>\n";
    Blockly.Arduino.definitions_.define_softwareserial = "#include <SoftwareSerial.h>\n";
    var e =
        _get_next_pin(a);
    Blockly.Arduino.definitions_["var_lcd_" + a] = "SerialLCD slcd_" + a + "(" + a + "," + e + ");\n";
    Blockly.Arduino.setups_["setup_lcd_" + a] = "slcd_" + a + ".begin();\n";
    e = "slcd_" + a + ".backlight();\n" + ("slcd_" + a + ".setCursor(0,0);\n");
    e += "slcd_" + a + ".print(" + b + ");\n";
    e += "slcd_" + a + ".setCursor(0,1);\n";
    e += "slcd_" + a + ".print(" + c + ");\n";
    return e += "delay(" + d + ");\n"
};

Blockly.Arduino.grove_serial_lcd_power = function() {
    var a = this.getFieldValue("PIN"),
        b = this.getFieldValue("STAT");
    Blockly.Arduino.definitions_.define_seriallcd = "#include <SerialLCD.h>\n";
    Blockly.Arduino.definitions_.define_softwareserial = "#include <SoftwareSerial.h>\n";
    var c = _get_next_pin(a);
    Blockly.Arduino.definitions_["var_lcd" + a] = "SerialLCD slcd_" + a + "(" + a + "," + c + ");\n";
    a = "slcd_" + a;
    return "ON" === b ? a + ".Power();\n" : a + ".noPower();\n"
};

Blockly.Arduino.grove_serial_lcd_effect = function() {
    var a = this.getFieldValue("PIN"),
        b = this.getFieldValue("STAT");
    Blockly.Arduino.definitions_.define_seriallcd = "#include <SerialLCD.h>\n";
    Blockly.Arduino.definitions_.define_softwareserial = "#include <SoftwareSerial.h>\n";
    var c = _get_next_pin(a);
    Blockly.Arduino.definitions_["var_lcd" + a] = "SerialLCD slcd_" + a + "(" + a + "," + c + ");\n";
    a = "slcd_" + a;
    return "LEFT" === b ? a + ".scrollDisplayLeft();\n" : "RIGHT" === b ? a + ".scrollDisplayRight();\n" : a + ".autoscroll();\n"
};
//-----------------------------------------------------
//Motor
Blockly.Arduino.grove_motor_shield = function() {
    var a = this.getFieldValue("DIRECTION");
    Blockly.Arduino.setups_.setup_motor = "pinMode(8,OUTPUT);//I1\n  pinMode(11,OUTPUT);//I2\n  pinMode(9,OUTPUT);//speedPinA\n  pinMode(12,OUTPUT);//I3\n  pinMode(13,OUTPUT);//i4\n  pinMode(10,OUTPUT);//speedPinB\n";
    var b = "";
    "forward" === a ? (Blockly.Arduino.definitions_.define_forward = "void forward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n",
        b = "forward();\n") : "right" === a ? (Blockly.Arduino.definitions_.define_right = "void right()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n\n", b = "right();\n") : "left" === a ? (Blockly.Arduino.definitions_.define_left = "void left()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n",
        b = "left();\n") : "backward" === a ? (Blockly.Arduino.definitions_.define_backward = "void backward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n", b = "backward();\n") : "stop" === a && (Blockly.Arduino.definitions_.define_stop = "void stop()\n{\ndigitalWrite(9,LOW);// Unenble the pin, to stop the motor. this should be done to avid damaging the motor.\ndigitalWrite(10,LOW);\ndelay(1000);\n}\n\n",
        b = "stop();\n");
    return b
};
//-----------------------------------------------------
//RGB LCD
Blockly.Arduino.grove_rgb_lcd_print = function() {
    var a = Blockly.Arduino.valueToCode(this, "TEXT", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''";
    Blockly.Arduino.definitions_.define_rgblcd = "#include <rgb_lcd.h>\n";
    Blockly.Arduino.definitions_.define_wire = "#include <Wire.h>\n";

    Blockly.Arduino.definitions_.define_lcd= "rgb_lcd lcd;\n";
    Blockly.Arduino.setups_["setup_rgblcd" ] = "lcd.begin(16,2);\n";
    // Blockly.Arduino.setups_["setup_rgblcd_print" ] = "lcd.print("+ a +");\n";
    var code = "lcd.print(" + a + ");\n";
    return code;
};

Blockly.Arduino.grove_rgb_lcd_setcolor = function() {
    var a = Blockly.Arduino.valueToCode(this, "COLOR_r", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        b = Blockly.Arduino.valueToCode(this, "COLOR_g", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        c = Blockly.Arduino.valueToCode(this, "COLOR_b", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''";

    Blockly.Arduino.definitions_.define_rgblcd = "#include <rgb_lcd.h>\n";
    Blockly.Arduino.definitions_.define_wire = "#include <Wire.h>\n";

    Blockly.Arduino.definitions_.define_lcd= "rgb_lcd lcd;\n";
    Blockly.Arduino.setups_["setup_rgblcd" ] = "lcd.begin(16,2);\n";

    var code = "lcd.setRGB(" + a + ", " + b + ", " + c +");\n";
    return code;
};

Blockly.Arduino.grove_rgb_lcd_setcurser = function() {
    var a = Blockly.Arduino.valueToCode(this, "COLUMN", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        b = Blockly.Arduino.valueToCode(this, "ROW", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''";
    var code = "lcd.setCursor(" + a + ", " + b + ");\n";
    return code;
};

Blockly.Arduino.grove_rgb_lcd_clear = function() {
    var code = "lcd.clear();\n";
    return code;
    //   return [code, Blockly.Arduino.ORDER_NONE];
};
//-----------------------------------------------------
//OLE Display
Blockly.Arduino.setup_display = function() {
    Blockly.Arduino.definitions_.define_displaysetup1 = "#include <SPI.h>\n";
    Blockly.Arduino.definitions_.define_displaysetup2 = "#include <Wire.h>\n";
    Blockly.Arduino.definitions_.define_displaysetup3 = "#include <Adafruit_GFX.h>\n";
    Blockly.Arduino.definitions_.define_displaysetup4 = "#include <Adafruit_SSD1306.h>\n";
    Blockly.Arduino.definitions_.define_displaysetup5 = "#define OLED_RESET 0\n";
    Blockly.Arduino.definitions_.define_displaysetup6 = "Adafruit_SSD1306 display(OLED_RESET);\n";
    Blockly.Arduino.setups_["setup_display_begin"] = "display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n";
    Blockly.Arduino.setups_["setup_display_clear"] = "display.clearDisplay();\n";
    return ""
};

Blockly.Arduino.display_println = function() {
    var a = Blockly.Arduino.valueToCode(this, "TEXT", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''";
    var code = "display.println(" + a + ");\n";
    return code;
};

Blockly.Arduino.display_color = function() {
    var a = this.getFieldValue("color");
    var code = "display.setTextColor(" + a + ");\n";
    return code;
};

Blockly.Arduino.display_textsize = function() {
    var a = Blockly.Arduino.valueToCode(this, "SIZE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0";
    var code = "display.setTextSize(" + a + ");\n";
    return code;
};

Blockly.Arduino.display_setcurser = function() {
    var a = Blockly.Arduino.valueToCode(this, "COLUMN", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        b = Blockly.Arduino.valueToCode(this, "ROW", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''";
    var code = "display.setCursor(" + a + ", " + b + ");\n";
    return code;
};

Blockly.Arduino.display_clear = function() {
    var code = "display.clearDisplay();\n";
    return code;
};

Blockly.Arduino.display_display = function() {
    var code = "display.display();\n";
    return code;
};
//-----------------------------------------------------
//OLE Display Blocks in DE
Blockly.Arduino.setup_display_de = function() {
    Blockly.Arduino.definitions_.define_displaysetup1 = "#include <SPI.h>\n";
    Blockly.Arduino.definitions_.define_displaysetup2 = "#include <Wire.h>\n";
    Blockly.Arduino.definitions_.define_displaysetup3 = "#include <Adafruit_GFX.h>\n";
    Blockly.Arduino.definitions_.define_displaysetup4 = "#include <Adafruit_SSD1306.h>\n";
    Blockly.Arduino.definitions_.define_displaysetup5 = "#define OLED_RESET 0\n";
    Blockly.Arduino.definitions_.define_displaysetup6 = "Adafruit_SSD1306 display(OLED_RESET);\n";
    Blockly.Arduino.setups_["setup_display_begin"] = "display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n";
    Blockly.Arduino.setups_["setup_display_clear"] = "display.clearDisplay();\n";
    return ""
};

Blockly.Arduino.display_println_de = function() {
    var a = Blockly.Arduino.valueToCode(this, "TEXT", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''";
    var code = "display.println(" + a + ");\n";
    return code;
};

Blockly.Arduino.display_color_de = function() {
    var a = this.getFieldValue("Farbe");
    var code = "display.setTextColor(" + a + ");\n";
    return code;
};

Blockly.Arduino.display_textsize_de = function() {
    var a = Blockly.Arduino.valueToCode(this, "SIZE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0";
    var code = "display.setTextSize(" + a + ");\n";
    return code;
};

Blockly.Arduino.display_setcurser_de = function() {
    var a = Blockly.Arduino.valueToCode(this, "COLUMN", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        b = Blockly.Arduino.valueToCode(this, "ROW", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''";
    var code = "display.setCursor(" + a + ", " + b + ");\n";
    return code;
};

Blockly.Arduino.display_clear_de = function() {
    var code = "display.clearDisplay();\n";
    return code;
};

Blockly.Arduino.display_display_de = function() {
    var code = "display.display();\n";
    return code;
};
//-----------------------------------------------------
//Neopixel
Blockly.Arduino.set_pixel_alphabet = function() {
    var a = this.getFieldValue("PIN"),
        alpha = this.getFieldValue("alpha"),
        b = Blockly.Arduino.valueToCode(this, "PXNUMBER", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0",
        c = Blockly.Arduino.valueToCode(this, "RED", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0",
        d = Blockly.Arduino.valueToCode(this, "GREEN", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0",
        e = Blockly.Arduino.valueToCode(this, "BLUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0";
    Blockly.Arduino.setups_["setup_strip_show_" + a] = "strip_" + a + ".show();\n";
    var f = "strip_" + a + ".setpixelAlphaNum(" + alpha + "," + b + "," + "strip_" + a +".Color(" + c + "," + d + "," + e +"));\n";
    return f
};

Blockly.Arduino.set_pixel_number = function() {
    var a = this.getFieldValue("PIN"),
        num = this.getFieldValue("num"),
        b = Blockly.Arduino.valueToCode(this, "PXNUMBER", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0",
        c = Blockly.Arduino.valueToCode(this, "RED", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0",
        d = Blockly.Arduino.valueToCode(this, "GREEN", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0",
        e = Blockly.Arduino.valueToCode(this, "BLUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0";
    Blockly.Arduino.setups_["setup_strip_show_" + a] = "strip_" + a + ".show();\n";
    var f = "strip_" + a + ".setpixelAlphaNum(" + num + "," + b + "," + "strip_" + a +".Color(" + c + "," + d + "," + e +"));\n";
    return f
};
//-----------------------------------------------------
//Neopixel Blocks in DE
Blockly.Arduino.setup_neopixel = function() {
    var a = this.getFieldValue("PIN"),
        b = Blockly.Arduino.valueToCode(this, "LEDNUM", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0",
        c = this.getFieldValue("TYPE1"),
        d = this.getFieldValue("TYPE2");

    Blockly.Arduino.definitions_.define_neoPixelsetup = "#include <Adafruit_NeoPixel.h>\n";
    var e = _get_next_pin(a);
    Blockly.Arduino.definitions_["var_neopixel" + a] = "Adafruit_NeoPixel strip_" + a + " = Adafruit_NeoPixel(" + b + " , " + a + " , " + c + " + " + d +");\n";
    //a = "strip_" + a;
    Blockly.Arduino.setups_["setup_strip_begin_" + a] = "strip_" + a + ".begin();\n";
    return ""
};

Blockly.Arduino.set_neopixel_brightness = function() {
    var a = this.getFieldValue("PIN"),
        b = Blockly.Arduino.valueToCode(this, "BRIGHTNESS", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0";
    Blockly.Arduino.setups_["setup_strip_brightness_" + a] = "strip_" + a + ".setBrightness("+ b +");\n";
    return ""
};

Blockly.Arduino.set_pixel_color_rgb = function() {
    var a = this.getFieldValue("PIN"),
        b = Blockly.Arduino.valueToCode(this, "PXNUMBER", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0",
        c = Blockly.Arduino.valueToCode(this, "RED", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        d = Blockly.Arduino.valueToCode(this, "GREEN", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        e = Blockly.Arduino.valueToCode(this, "BLUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "1000";
    var f = _get_next_pin(a);
    Blockly.Arduino.setups_["setup_strip_show_" + a] = "strip_" + a + ".show();\n";
    f = "strip_" + a + ".setPixelColor(" + b + "," + c + "," + d + "," + e +");\n";
    return f
};

Blockly.Arduino.neopixel_show = function() {
    var a = this.getFieldValue("PIN"),
        b = _get_next_pin(a);
    b = "strip_" + a + ".show();\n";
    return b
};
Blockly.Arduino.neopixel_fade_en = function() {
    Blockly.Arduino.definitions_.define_neopixelfade = "#include <neopixelfade.h>\n";
    var a = this.getFieldValue("PIN"),
        b = Blockly.Arduino.valueToCode(this, "PXNUMBER", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        c = Blockly.Arduino.valueToCode(this, "DURATION", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        d = Blockly.Arduino.valueToCode(this, "TEMPO", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        e = Blockly.Arduino.valueToCode(this, "SRED", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        f = Blockly.Arduino.valueToCode(this, "SGREEN", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        g = Blockly.Arduino.valueToCode(this, "SBLUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        h = Blockly.Arduino.valueToCode(this, "ERED", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        i = Blockly.Arduino.valueToCode(this, "EGREEN", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        j = Blockly.Arduino.valueToCode(this, "EBLUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''";
    var code = 'fade(String("' + a + '"),' + b + "," + c + "," + d + "," + e + "," + f + "," + g + "," + h + "," + i + "," + j +");\n";
    return code
};

Blockly.Arduino.setup_neopixel_de = function() {
    var a = this.getFieldValue("PIN"),
        b = Blockly.Arduino.valueToCode(this, "LEDNUM", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0",
        c = this.getFieldValue("TYPE1"),
        d = this.getFieldValue("TYPE2");

    Blockly.Arduino.definitions_.define_neoPixelsetup = "#include <Adafruit_NeoPixel.h>\n";
    var e = _get_next_pin(a);
    Blockly.Arduino.definitions_["var_neopixel" + a] = "Adafruit_NeoPixel strip_" + a + " = Adafruit_NeoPixel(" + b + " , " + a + " , " + c + " + " + d +");\n";
    Blockly.Arduino.setups_["setup_strip_begin_" + a] = "strip_" + a + ".begin();\n";
    return ""
};

Blockly.Arduino.set_neopixel_brightness_de = function() {
    var a = this.getFieldValue("PIN"),
        b = Blockly.Arduino.valueToCode(this, "BRIGHTNESS", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0";
    Blockly.Arduino.setups_["setup_strip_brightness_" + a] = "strip_" + a + ".setBrightness("+ b +");\n";
    return ""
};

Blockly.Arduino.set_pixel_color_rgb_de = function() {
    var a = this.getFieldValue("PIN"),
        b = Blockly.Arduino.valueToCode(this, "PXNUMBER", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0",
        c = Blockly.Arduino.valueToCode(this, "RED", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        d = Blockly.Arduino.valueToCode(this, "GREEN", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        e = Blockly.Arduino.valueToCode(this, "BLUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "1000";
    var f = _get_next_pin(a);
    Blockly.Arduino.setups_["setup_strip_show_" + a] = "strip_" + a + ".show();\n";
    f = "strip_" + a + ".setPixelColor(" + b + "," + c + "," + d + "," + e +");\n";
    return f
};

Blockly.Arduino.neopixel_show_de = function() {
    var a = this.getFieldValue("PIN"),
        b = _get_next_pin(a);
    b = "strip_" + a + ".show();\n";
    return b
};

Blockly.Arduino.neopixel_fade_de = function() {
    Blockly.Arduino.definitions_.define_neopixelfade = "#include <neopixelfade.h>\n";
    var a = this.getFieldValue("PIN"),
        b = Blockly.Arduino.valueToCode(this, "PXNUMBER", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        c = Blockly.Arduino.valueToCode(this, "DURATION", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        d = Blockly.Arduino.valueToCode(this, "TEMPO", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        e = Blockly.Arduino.valueToCode(this, "SRED", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        f = Blockly.Arduino.valueToCode(this, "SGREEN", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        g = Blockly.Arduino.valueToCode(this, "SBLUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        h = Blockly.Arduino.valueToCode(this, "ERED", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        i = Blockly.Arduino.valueToCode(this, "EGREEN", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        j = Blockly.Arduino.valueToCode(this, "EBLUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''";
    var code = 'fade(String("' + a + '"),' + b + "," + c + "," + d + "," + e + "," + f + "," + g + "," + h + "," + i + "," + j +");\n";
    return code
};
//-----------------------------------------------------
//Open Weather Map
Blockly.Arduino.getcurrentWeathercondition = function() {
    var a = this.getFieldValue("WEATHER");
    //   Blockly.Arduino.setups_["setup_weathercondition"] = "getWeatherCondition();\n";
    Blockly.Arduino.definitions_.define_weathermap = "#include <weathermap.h>\n";
    var code = "getWeather" + a + "()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.getWeatherforecast = function() {
    var a = this.getFieldValue("WEATHER");
    //   Blockly.Arduino.setups_["setup_weathercondition"] = "getWeatherCondition();\n";
    Blockly.Arduino.definitions_.define_weathermap = "#include <weathermap.h>\n";
    var code = "getWeatherforecast" + a + "()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//--------------
//Specific delay for weather map
Blockly.Arduino.lastcheck = function() {
    //   Blockly.Arduino.setups_["setup_weathercondition"] = "getWeatherCondition();\n";
    // Blockly.Arduino.definitions_.define_weathermap = "#include <weathermap.h>\n";
    var code = "millis() - lastcheck";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.resettime = function() {
    Blockly.Arduino.definitions_.define_lastcheck = "unsigned long lastcheck = 0; \n";
    var code = "lastcheck = millis();\n";
    return code;
};
//-----------------------------------------------------
//Wifi Manager
Blockly.Arduino.connect_wifi = function() {
    Blockly.Arduino.definitions_.define_wificonnection = "#include <wificonnection.h>\n";
    Blockly.Arduino.setups_["setup_wifi_connection"] = "setup_wifi_connection();\n";
    return ""
};

Blockly.Arduino.set_pixel_color_rgb = function() {
    var a = this.getFieldValue("PIN"),
        b = Blockly.Arduino.valueToCode(this, "PXNUMBER", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0",
        c = Blockly.Arduino.valueToCode(this, "RED", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        d = Blockly.Arduino.valueToCode(this, "GREEN", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        e = Blockly.Arduino.valueToCode(this, "BLUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "1000";
    var f = _get_next_pin(a);
    Blockly.Arduino.setups_["setup_strip_show_" + a] = "strip_" + a + ".show();\n";
    f = "strip_" + a + ".setPixelColor(" + b + "," + c + "," + d + "," + e +");\n";
    return f
};
//-----------------------------------------------------
//Wifi Manager Blocks in DE
Blockly.Arduino.connect_wifi_de = function() {
    Blockly.Arduino.definitions_.define_wificonnection = "#include <wificonnection.h>\n";
    Blockly.Arduino.setups_["setup_wifi_connection"] = "setup_wifi_connection();\n";
    return ""
};

Blockly.Arduino.set_pixel_color_rgb_de = function() {
    var a = this.getFieldValue("PIN"),
        b = Blockly.Arduino.valueToCode(this, "PXNUMBER", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "0",
        c = Blockly.Arduino.valueToCode(this, "RED", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        d = Blockly.Arduino.valueToCode(this, "GREEN", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
        e = Blockly.Arduino.valueToCode(this, "BLUE", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "1000";
    var f = _get_next_pin(a);
    Blockly.Arduino.setups_["setup_strip_show_" + a] = "strip_" + a + ".show();\n";
    f = "strip_" + a + ".setPixelColor(" + b + "," + c + "," + d + "," + e +");\n";
    return f
};
//-------------
//Open Weather Map Blocks in DE
Blockly.Arduino.getcurrentWeathercondition_de = function() {
    var a = this.getFieldValue("WEATHER");
    //   Blockly.Arduino.setups_["setup_weathercondition"] = "getWeatherCondition();\n";
    Blockly.Arduino.definitions_.define_weathermap = "#include <weathermap.h>\n";
    var code = "getWeather" + a + "()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.getWeatherforecast_de = function() {
    var a = this.getFieldValue("WEATHER");
    //   Blockly.Arduino.setups_["setup_weathercondition"] = "getWeatherCondition();\n";
    Blockly.Arduino.definitions_.define_weathermap = "#include <weathermap.h>\n";
    var code = "getWeatherforecast" + a + "()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//--------------
//Specific delay for weather map
Blockly.Arduino.lastcheck_de = function() {
    //   Blockly.Arduino.setups_["setup_weathercondition"] = "getWeatherCondition();\n";
    // Blockly.Arduino.definitions_.define_weathermap = "#include <weathermap.h>\n";
    var code = "millis() - lastcheck";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.resettime_de = function() {
    Blockly.Arduino.definitions_.define_lastcheck = "unsigned long lastcheck = 0; \n";
    var code = "lastcheck = millis();\n";
    return code;
};
//-----------------------------------------------------
//Variable
Blockly.Arduino.variables = {};

Blockly.Arduino.variables_get = function() {
    return [Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE), Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.variables_declare = function() {
    this.getFieldValue("TYPE");
    var a = Blockly.Arduino.valueToCode(this, "VALUE", Blockly.Arduino.ORDER_ASSIGNMENT) || "0",
        b = Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.setups_["setup_var" + b] = b + " = " + a + ";\n";
    return ""
};

Blockly.Arduino.variables_set = function() {
    var a = Blockly.Arduino.valueToCode(this, "VALUE", Blockly.Arduino.ORDER_ASSIGNMENT) || "0";
    return Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE) + " = " + a + ";\n"
};

Blockly.Arduino.math_change = function() {
    var a = Blockly.Arduino.valueToCode(this, "DELTA", Blockly.Arduino.ORDER_ADDITIVE) || "0";
    return Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE) + " += " + a + ";\n"
};
//------
var string_name;
Blockly.Arduino.define_string = function(a) {
    var b = a.getFieldValue('name');
    string_name = b;
    var c = Blockly.Arduino.valueToCode(a, 'value', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_.define_string = "String " + b + ";\n";
    return b + " = " + c + ";\n";
};


Blockly.Arduino.use_string = function(a) {
    var b = a.getFieldValue('var_name'),
        code = b;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['define_variable'] = function(a) {
    var b = a.getFieldValue('name'),
        c = a.getFieldValue('type'),
        d = Blockly.Arduino.valueToCode(a, 'name', Blockly.Arduino.ORDER_ATOMIC),
        temp = "";
    try {
        Blockly.Arduino.variables_.define_variable.length;
        temp = Blockly.Arduino.variables_.define_variable;
    }
    catch (err){

    }
    if (c == "String"){
        Blockly.Arduino.variables_.define_variable = temp+ "String " + b + ";\n";
    }
    else if (c == "char"){
        Blockly.Arduino.variables_.define_variable = temp+ "char " + b + ";\n";
    }
    else if (c == "boolean"){
        Blockly.Arduino.variables_.define_variable = temp+ "boolean " + b + ";\n";
    }
    else if (c == "int"){
        Blockly.Arduino.variables_.define_variable = temp+ "int " + b + ";\n";
    }
    else if (c == "long"){
        Blockly.Arduino.variables_.define_variable = temp+ "long " + b + ";\n";
    }
    else if (c == "float"){
        Blockly.Arduino.variables_.define_variable = temp+ "float " + b + ";\n";
    }
    var code = b + " = " + d + ";\n";
    return code
};

Blockly.Arduino.use_variable = function(a) {
    var b = a.getFieldValue('var_name'),
        code = b;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//-----------------------------------------------------
//Adafruit IO
Blockly.Arduino.connect_AdafruitIO = function() {
    Blockly.Arduino.setups_["setup_output"] = "setup_io_connection();\n";
    Blockly.Arduino.definitions_.define_ioadafruit = "#include <ioadafruit.h>\n";
    var code = "io.run();\n";
    return code;
};

Blockly.Arduino.setup_messagehandler = function(a) {
    var b = a.getFieldValue('FEEDNAME'),
        c = a.getFieldValue('HANDLE_FEEDNAME');
    Blockly.Arduino.setups_["setup_output1"] = b + "->onMessage(" + c + ");\n";
    var code = 'AdafruitIO_Feed *' + b + '= io.feed("' + b + '");\n';
    Blockly.Arduino.definitions_.messagehandle = code;
    return "";
};

Blockly.Arduino.get_feed_value_int = function() {
    var code = "data->toInt()";
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.get_feed_value_string = function() {
    var code = "data->toString()";
    return [code, Blockly.Arduino.ORDER_NONE];
};
//-----------------------------------------------------
//DHT22 sensor
Blockly.Arduino.connect_dht22 = function() {
    var a = this.getFieldValue("PIN");
    Blockly.Arduino.definitions_.define_adafruitSensor = "#include <Adafruit_Sensor.h>\n";
    Blockly.Arduino.definitions_.define_dht = "#include <DHT.h>\n";
    Blockly.Arduino.definitions_.define_dhtU = "#include <DHT_U.h>\n";
    //Blockly.Arduino.definitions_.define_dataPin = "#define DATA_PIN D2\n";
    var temp = "";
    try {
        Blockly.Arduino.definitions_.define_variable.length;
        temp = Blockly.Arduino.definitions_.define_dataPin;
    }
    catch (err){

    }
    Blockly.Arduino.definitions_.define_dataPin = "#define DATA_PIN " + a + "\n";
    Blockly.Arduino.definitions_.define_dhtDataPin = "DHT_Unified dht(DATA_PIN, DHT22);\n";
    Blockly.Arduino.setups_["setup_dht"] = "dht.begin();\n";
    var code = "sensors_event_t event;\n";
    return code;
};

Blockly.Arduino.set_feed = function(block) {
    var feed_name = block.getFieldValue('FEEDNAME');
    var handle_method = Blockly.Arduino.valueToCode(this, "var", Blockly.Arduino.ORDER_ATOMIC);
    return feed_name + "->save(" + handle_method + ");\n";
};

Blockly.Arduino.get_temp_value = function() {
    var code = "dht.temperature().getEvent(&event);\n";
    return code;
};

Blockly.Arduino.set_temp_value_int = function() {
    var code = "(int)event.temperature";
    return [code, Blockly.Arduino.ORDER_ADDITION];
};

Blockly.Arduino.get_humidity_value = function() {
    var code = "dht.humidity().getEvent(&event);\n";
    return code;
};

Blockly.Arduino.set_humidity_value_int = function() {
    var code = "(int)event.relative_humidity";
    return [code, Blockly.Arduino.ORDER_ADDITION];
};
//-----------------------------------------------------
//--------------Robot-RaspberryPi----------------------
//-----------------------------------------------------
Blockly.Arduino.raspy_ardu = function() {
    var a = this.getFieldValue("port");
    Blockly.Arduino.setups_["setup_port_" + a] = "Serial.begin(" + a + ");\n";
    return ["Serial.available()", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.raspy_ardu_read = function() {
    var a = this.getFieldValue("port");
    Blockly.Arduino.setups_["setup_port_" + a] = "Serial.begin(" + a + ");\n";
    return ["Serial.read()", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.raspy_ardu_write = function() {
    var a = this.getFieldValue("port"),
        b = Blockly.Arduino.valueToCode(this, "data", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_port_" + a] = "Serial.begin(" + a + ");\n";
    return "Serial.print(" + b + ");\n"
};
//------
Blockly.Arduino.raspy_ardu_de = function() {
    var a = this.getFieldValue("port");
    Blockly.Arduino.setups_["setup_port_" + a] = "Serial.begin(" + a + ");\n";
    return ["Serial.available()", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.raspy_ardu_read_de = function() {
    var a = this.getFieldValue("port");
    Blockly.Arduino.setups_["setup_port_" + a] = "Serial.begin(" + a + ");\n";
    return ["Serial.read()", Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.raspy_ardu_write_de = function() {
    var a = this.getFieldValue("port"),
        b = Blockly.Arduino.valueToCode(this, "data", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_port_" + a] = "Serial.begin(" + a + ");\n";
    return "Serial.print(" + b + ");\n"
};
