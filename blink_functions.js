

function inventory_items_exist(){
    var visible_item = 0; 
    for (var c = 0; c < iName.length; c++) {
        if(i[iName[c]]) {
            visible_item = 1;
        }

    } 
    if (visible_item) {
        return true;
        
    } else {
        return false;
    }
 
}

function add(text,node,funct) {	

	// var d2 = d;

	
	// iBuffer += '<li><a href="#" onClick="process(\'sdd\',inventoryDescArray[\'' + node + '\']); return false;">' + text + '</a></li>';
	
	
	// iBuffer += '<a href="#" id="' + node + '" onClick="process(null,' + d2 + '>' + node + text + '</a>';
	
	// iName.push(node);
	iName.push(node);

	//store in array
	inventoryDescArray[node] = [];
	inventoryDescArray[node]["node"] = node;
	inventoryDescArray[node]["text"] = text;
	inventoryDescArray[node]["funct"] = funct;
	
   //to save state so that things can be returned to normal afterwards. because the functions inside add() are run, they may change world state 
    var i_holder = i;
	var f_holder = f;
	//This is to fix chrome bug: typeof parent != 'object'
	if (parent && typeof parent != 'object') {
		inventoryDescArray[node]["parent"] = parent;
		parent=0;
	}
	funct(); //this is to setup the type
	
	
	if (thought) {
		inventoryDescArray[node]["type"] = "thought";
		// i[node]["type"]="thought";
		// alert(i[node]);
	
	} else {
        	
		inventoryDescArray[node]["type"] = "object";
	}

    //restore to original state because the functions inside add() may have changed something
	i = i_holder;
	f = f_holder;
	thought=0;
    object=0;
    parent=0;
    // 
	// inventoryDescArray[node]["funct2"] = funct2;
	d = "";
}


function start_game() {


    var items = [
        function(){
        clear_timeouts_intervals();
              $("#wrap").animate({
                scrollTop:  '+=100'
            }, 10);  
            $("#owrap").animate({opacity: 0},2000);
        },
        200,
        function(){
           $("#wrap").scrollTo("#content", 600);
        },
        1800,
        function() {
            $("#owrap").hide();
            $("#overlay #intro_text").remove();
            $("#overlay #skip").remove();
            clear_timeouts_intervals();
        }
    ];

    timer(items);


}


function clear_timeouts_intervals() {
//https://github.com/nodejs/help/issues/174
    for (var i = 1; i < 99999; i++) {
            window.clearInterval(i);
    }

    let id = window.setTimeout(function() {}, 0);
    //console.log(id);
    while (id) {
      window.clearTimeout(id);
      id--;
    }

    id = window.setInterval(function() {}, 0);
    //console.log(id);
    while (id) {
      window.clearInterval(id);
      id--;
    }
}

function check_if_duplicated(arr) {
    var sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
                                     // JS by default uses a crappy string compare.
                                     // (we use slice to clone the array so the
                                     // original array won't be modified)
    var results = [];
    for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }
    
    return results;
}


function start_timer(name) {
    var array = [];
    if (f.timers==0) {
        f.timers = name; 
        array.push(name);
    } else {

        if (f.timers.indexOf(',') > -1) { //if more than one counter, then break it up and put into array
            array = f.timers.split(',');

        } else {
            array[0] = f.timers;
        }

        //array = JSON.parse('["sdsds","dssdsd","sdsdsd"]');
        if (array.indexOf(name) === -1) { //if doesn't already exist, add it to array 
            array.push(name);
            f.timers = array.join(',');
        }

    }

    
    //console.log(array); 
}

function home_memories(message) {
    items = [
            700,
            function() {

            $("#oc").css('opacity','1');
                $("#owrap").show().removeClass().addClass('fct');
               $("#owrap").animate({opacity: 1},0);
                $("#oc").html(message); 
                
            },300,
            function() {
                $("#oc").show();
            },200,         
            function() {
               $("#owrap").animate({opacity: 0},1300);


         
            },1300,
            function() {
               $("#owrap").hide();
                
         
            }

        ];

        timer(items);

}

function scene_change(message) {

//refers to f.node
    if (f.back=="start" || !exist(scene_change[f.node])) {
        scene_change[f.node]=1;
        items = [
            400,
            function() {

            $("#oc").css('opacity','1');
                $("#owrap").show().removeClass().addClass('click_through');
               $("#owrap").animate({opacity: 1},0);
                $("#oc").html(message); 
                
            },300,
            function() {
                $("#oc").show();
            },100,         
            function() {
               $("#owrap").animate({opacity: 0},2000);


         
            },2000,
            function() {
               $("#owrap").hide();
                
                $("#owrap").removeClass('click_through');
         
            }

        ];
        console.log('innahere');
        timer(items);
    }
}

function location_message(message) {
        //f.washroom_informer_arrive = "0";
        //console.log("location message");
        var items = [
            500,
            function() {
                $("#oc").html(message);
                $("#owrap").show().removeClass().addClass("std");
            },1000,
        function(){
           $("#owrap").animate({opacity: 0},2000);
        },3000,
        function() {

            $("#owrap").hide();
            
     
        },10
        ];

        timer(items);

}


function quik(variable,text,output) {
    //blink.js 180821-2245
    //d_ow = output;
    //
    quik_responses[variable] = output;
    
    if(!f.quik) {
        return '<a onclick="f.quik=\'' +  variable +'\';  debug(); process(\'' +  f.node + '\'); return false;">' + text + "</a>";
    }
}


function oneoff_quik(variable,text,output) {
    
    quik_responses[variable] = output;
    
    if(!f.quik && f[variable] != "x") {
        return '<a onclick="f.quik=\'' +  variable + '\';  debug(); process(\'' +  f.node + '\'); f.' + variable + '=\'x\'; return false;">' + text + "</a>";
    } else {
    console.log('heeeeee');
        return "sdds";
    }

}



function talk(obj) {
    replies(obj);
    topics(obj);

}

function replies(obj) {
    if(f.topic && done_talking(obj)) {

        f.topic=0;
    } /* else if (f.topic) { //uncomment this to disable return/back when inside topic
        back = 0;
    } */
//dependencies: d, f[]
    var c;
    var text, variable, output_if_clicked;
    var output="";
    var choices="";
    var visible = 0;
    if (f.talk) { //if click item
  




        d="";
//consoleconsole.log("in talk function");
        f[f["talk"]] = "x";

        output_if_clicked = obj[f["talk"]].d;
        if (typeof output_if_clicked == 'function') {
            output_if_clicked();
        } else {
           d+=output_if_clicked;
        }

//        f["talk"]=0;
//
//       
//

    }
    //console.log(obj[0]);

}
function topics(obj) {
    var c;
    var text, variable, output_if_clicked;
    var output="";
    var choices="";
    var visible = 0;


    //builds choices list
    for (c in obj) {
        variable = c;
        text = obj[c].l;
        output_if_clicked = obj[c].d;
        

        function set_visibility() {
            if (f[variable] == 1) {
                visible = 1;
            } else if(f[variable]=="x") {
                visible = 0;
            } else if (exist(obj[c].v)) {//v is visible
                visible = 1; 
            } else {
                visible = 0;
            }
        } 

        set_visibility();
        if (exist(obj[c].topic) && f.topic != obj[c].topic) {
            visible = 0;
        }

        if (f.topic) {
            if (!exist(obj[c].topic) || f.topic != obj[c].topic) {
                visible = 0;
            }
        }

        //check if this is the one that has been clicked on
        if (obj[c].d=="{jump}" && visible) {
            choices+='<li><a onclick="f[\'' + variable + '\']=\'x\'; f.talk=\'' + variable + '\'; debug(); process(\'' + variable + '\'); return false;">' + text + "</a></li>";
        } else if (visible) {//show link if hasn't been clicked on yet
            choices+='<li><a onclick="f.talk=\'' +  variable +'\';  debug(); process(\'' +  f.node + '\'); return false;">' + text + "</a></li>"; 
            visible = 0;
        } 
            
        
    }   
    d += "<div class='convo'>" + choices + "</div>";
    
    debug();
}
function talk_item(text,variable,output_if_clicked) {
    var output = "";
    if (f.clear_d) {
        d="";
        f.clear_d=0;
    }
    //display handler

    if (f[variable]) {

       d=output_if_clicked+d;
    }
    else {//show link if hasn't been clicked on yet
       d+='<a onclick="f.clear_d=1; f.'+  variable +'=1; process(\'' +  f.node + '\'); return false;">' + text + "</a>"; 
    } 
        
     
    

    //return output;

}

function custom_back(node) {
    if(back) {
        return "<p class='back'>{Return|" + node + "}</p>";
    } else {
        return "";
    }
}

//querystring handling 
// query string: ?foo=lorem&bar=&baz
/// query string: ?foo=lorem&bar=&baz
/*
var foo = getParameterByName('foo'); // "lorem"
var bar = getParameterByName('bar'); // "" (present with empty value)
var baz = getParameterByName('baz'); // "" (present with no value)
var qux = getParameterByName('qux'); // null (absent)/
*/
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function reset_inventory() {
    for (c in inventoryDescArray) {
        //console.log(c);
		if (inventoryDescArray[c]["type"] == "object") {
            i[c]=0;
        }
    }
}

function bk(node) {
    var output = "<p class='back'>{Return|" + node + "}</p>";
    lockdown = 1;
    return output;
}

function populate_with_zeros(array,array_key_name) {
    for (var i in array_key_name) {
        array[array_key_name[i]]=0;
    }
    return array; 
}

function copy_querystring_to_world_state(query,number_of_flag_group) {
    var query = "changed " + query;


    var query_split = query.split(":");
    var output = query_split[number_of_flag_group].substring(0, query_split[number_of_flag_group].length-1);
    //console.log(output);
   //return syncVariables(query_split[number_of_flag_group];
}


function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

function isNumber (value) {
return typeof value === 'number' && isFinite(value);
};
function timer(fn_array) {
    if (isNumber(fn_array[0])) {
        //console.log('number');
        setTimeout(function() {
        timer(fn_array);},fn_array[0]);
        fn_array.shift();
    } else if (fn_array.length >= 1) {
        //console.log('function');
        fn_array[0]();
//        jsprettify.prettify();
        fn_array.shift();
        timer(fn_array);
    }
jsprettify.prettify();
}



function initNode(node) {

    f[node]=node;
    nodes(node);
    //process(node,0,0,{"manual":1});
}

//http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
function loadjscssfile(filename, filetype){
	if (filetype=="js"){ //if filename is a external JavaScript file
		var fileref=document.createElement('script')
		fileref.setAttribute("type","text/javascript")
		fileref.setAttribute("src", filename)
	}
	else if (filetype=="css"){ //if filename is an external CSS file
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", filename)
	}
	if (typeof fileref!="undefined")
		document.getElementsByTagName("head")[0].appendChild(fileref)
}
/* usage:
loadjscssfile("myscript.js", "js") //dynamically load and add this .js file
loadjscssfile("javascript.php", "js") //dynamically load "javascript.php" as a JavaScript file
loadjscssfile("mystyle.css", "css") ////dynamically load and add this .css file

*/


function add_class_on_click(item) {
    item.addClassName('clicked');


}
