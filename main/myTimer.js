//save time will work, if the user click on tasks
var flag_timerT1 = 0;
var flag_timerT2 = 0;
var flag_timerT3 = 0;

var items = [];
//------------------------------------------------------
//refresh DIV for tasks
setInterval(
 function() {
     $.getJSON( "settings.json?"+new Date().getTime(), function( data ) {
         items = [];
         $.each( data, function( key, val ) {
             items.push(key);
             items.push(val);
         });

	var itemsLength = items.length;
         for (var i = 0; i < itemsLength; i+=2) {
             if(items[i]=="task01"){
                 if(items[i+1]==false){
                     document.getElementById("Task01").style.visibility = "hidden";
                     flag_timerT1 = 0;
                 }else{
                     document.getElementById("Task01").style.visibility = "visible";
                 }
             }
             if(items[i]=="task02"){
                 if(items[i+1]==false){
                     document.getElementById("Task02").style.visibility = "hidden";
                     flag_timerT2 = 0;
                 }else{
                     document.getElementById("Task02").style.visibility = "visible";
                 }
             }
             if(items[i]=="task03"){
                 if(items[i+1]==false){
                     document.getElementById("Task03").style.visibility = "hidden";
                     flag_timerT3 = 0;
                 }else{
                     document.getElementById("Task03").style.visibility = "visible";
                 }
             }
	}
	return items;
	});
 }, 1000);
//------------------------------------------------------
//timers to know how much different panel is used by user
var seconds_code = 0;
var interval_code = 0;

var seconds_ws = 0;
var interval_ws = 0;

var seconds_baall = 0;
var interval_baall = 0;

var seconds_design = 0;
var interval_design = 0;
//------------------------------------------------------
$(function() {
    $("body").click(function(e) {
        if (e.target.id == "modifyCodeDiv" || $(e.target).parents("#modifyCodeDiv").length) {
            clearInterval(interval_code);
            interval_code = setInterval(function() {
                document.getElementById('timer_code').innerHTML = ++seconds_code;
            }, 1000);
        } else {
            clearInterval(interval_code);
        }
        if (e.target.id == "blocklyDiv" || $(e.target).parents("#blocklyDiv").length) {
            clearInterval(interval_ws);
            interval_ws = setInterval(function() {
                document.getElementById('timer_ws').innerHTML = ++seconds_ws;
            }, 1000);
        } else {
            clearInterval(interval_ws);
        }
        if (e.target.id == "showBaall" || $(e.target).parents("#showBaall").length) {
            clearInterval(interval_baall);
            clearInterval(interval_design);
            interval_baall = setInterval(function() {
                document.getElementById('timer_baall').innerHTML = ++seconds_baall;
            }, 1000);
        } else if (e.target.id == "drawBaall" || $(e.target).parents("#drawBaall").length) {
            clearInterval(interval_design);
            clearInterval(interval_baall);
            interval_design = setInterval(function() {
                document.getElementById('timer_design').innerHTML = ++seconds_design;
            }, 1000);
        }
    });
});
//------------------------------------------------------
//save the time of using workspace and code modifier for each example
var click_run = 0;
function runTime() {
    document.getElementById('run_btn').innerHTML = ++click_run;
}
//------------------------------------------------------
//save the time of using workspace and code modifier for each example
var click_generate = 0;
function generate() {
    document.getElementById('generate_btn').innerHTML = ++click_generate;
}
//------------------------------------------------------
var currentValue_task01 = document.getElementById("Task01").value = "Off";
var currentValue_task02 = document.getElementById("Task02").value = "Off";
var currentValue_task03 = document.getElementById("Task03").value = "Off";
$('#Task01').click(function() {
	document.getElementById("Task01").value = "On";
	currentValue_task01 = document.getElementById('Task01').value;
    if (currentValue_task01 == "On") {
        document.getElementById("Task01").style.background = "rgb(221, 44, 0)";
    }
    document.getElementById("Task01").disabled = true;
    document.getElementById('run_btn').innerHTML = 0;
    document.getElementById('generate_btn').innerHTML = 0;
    document.getElementById('timer_code').innerHTML = 0;
    document.getElementById('timer_ws').innerHTML = 0;
    document.getElementById('timer_baall').innerHTML = 0;
    document.getElementById('timer_design').innerHTML = 0;

    flag_timerT1 = 0;
    flag_timerT2 = 0;
    flag_timerT3 = 0;

    click_run = 0;
    click_generate = 0;

    seconds_code = 0;
    interval_code = 0;

    seconds_ws = 0;
    interval_ws = 0;

    seconds_baall = 0;
    interval_baall = 0;

    seconds_design = 0;
    interval_design = 0;

    flag_timerT1 += 1;

    var count = Blockly.mainWorkspace.getAllBlocks().length;
    if (count < 2 || window.confirm('Delete all ' + count + ' blocks?')) {
        Blockly.mainWorkspace.clear();
    }
});

$('#Task02').click(function() {
	document.getElementById("Task02").value = "On";
	currentValue_task02 = document.getElementById('Task02').value;
    if (currentValue_task02 == "On") {
        document.getElementById("Task02").style.background = "rgb(221, 44, 0)";
    } 
	
    document.getElementById("Task02").disabled = true;

    document.getElementById('run_btn').innerHTML = 0;
    document.getElementById('generate_btn').innerHTML = 0;

    document.getElementById('timer_code').innerHTML = 0;
    document.getElementById('timer_ws').innerHTML = 0;
    document.getElementById('timer_baall').innerHTML = 0;
    document.getElementById('timer_design').innerHTML = 0;

    flag_timerT1 = 0;
    flag_timerT2 = 0;
    flag_timerT3 = 0;

    click_run = 0;
    click_generate = 0;

    seconds_code = 0;
    interval_code = 0;

    seconds_ws = 0;
    interval_ws = 0;

    seconds_baall = 0;
    interval_baall = 0;

    seconds_design = 0;
    interval_design = 0;

    flag_timerT2 += 2;

    var count = Blockly.mainWorkspace.getAllBlocks().length;
    if (count < 2 || window.confirm('Delete all ' + count + ' blocks?')) {
        Blockly.mainWorkspace.clear();
    }

});

$('#Task03').click(function() {
	document.getElementById("Task03").value = "On";
	currentValue_task03 = document.getElementById('Task03').value;
    if (currentValue_task03 == "On") {
        document.getElementById("Task03").style.background = "rgb(221, 44, 0)";
    } 
	
    document.getElementById("Task03").disabled = true;

    document.getElementById('run_btn').innerHTML = 0;
    document.getElementById('generate_btn').innerHTML = 0;

    document.getElementById('timer_code').innerHTML = 0;
    document.getElementById('timer_ws').innerHTML = 0;
    document.getElementById('timer_baall').innerHTML = 0;
    document.getElementById('timer_design').innerHTML = 0;

    flag_timerT1 = 0;
    flag_timerT2 = 0;
    flag_timerT3 = 0;

    click_run = 0;
    click_generate = 0;

    seconds_code = 0;
    interval_code = 0;

    seconds_ws = 0;
    interval_ws = 0;

    seconds_baall = 0;
    interval_baall = 0;

    seconds_design = 0;
    interval_design = 0;

    flag_timerT3 += 3;

    var count = Blockly.mainWorkspace.getAllBlocks().length;
    if (count < 2 || window.confirm('Delete all ' + count + ' blocks?')) {
        Blockly.mainWorkspace.clear();
    }

});
//------------------------------------------------------
//save the time of using workspace and code modifier for each example
var click_save = 0;
function getTask() {
    if (flag_timerT1 == 1) {
        return 1;
    }
    if (flag_timerT2 == 2) {
        return 2;
    }
    if (flag_timerT3 == 3) {
        return 3;
    }
return 0;

}

function saveTimer() {
    if (flag_timerT1 == 1 || flag_timerT2 == 2 || flag_timerT3 == 3) {
        click_save = getTask();
        document.getElementById("expTimer_txt").value = /*document.getElementById("expTimer_txt").value + */ "exp@T${}sa*%ve#Cl%i!$ck@:" + click_save + "%\n" + "|w!%s{-}#us*(a$%g%e%$@:" + seconds_ws + "%\n" + "|#co^*de^-u#%sa%ge^&$^@:" + seconds_code + "%\n" + "|*er#$ro%^r(s@:" + document.getElementById('run_btn').innerHTML + "%\n" + "|*ge#$n%^er(at@:" + document.getElementById('generate_btn').innerHTML + "%\n" + "|#ba^*a^-l#%l^&$^@:" + seconds_baall + "%\n" + "|#d^*e^-si#%gn^&$^@:" + seconds_design + "%#Pa$^Ya&*n|||\n\n";
        var timer_value = document.getElementById("expTimer_txt").value;
        remoteSaveTimer(timer_value);
    }
}
//------------------------------------------------------
//save the time of using workspace and code modifier in total
setInterval(
    function() {
    }, 10);

