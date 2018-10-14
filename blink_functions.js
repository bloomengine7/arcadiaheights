
function jump(node) {
    f.node = node;
    nodes(node);
}
function events(event_name,events) {
    console.log('in events sequence');
//side effect, refers to f array, f[event_name], d
	if (typeof f[event_name]=="undefined" || f[event_name]==0) {
        f[event_name]="0,0";
    }
    var myarr = f[event_name].split(",");

    var counter = myarr[0];
    var skip = myarr[1];


    if (skip > 0) {
        skip--;
    } else if (typeof events[counter] == 'number' && skip == 0) {
        skip = events[counter] - 1;
        counter++;
    } else if (counter < events.length) {
        if (typeof events[counter] == 'function') {
            events[counter]();
        } else {
            d+=events[counter];
        }
        
        counter++;
    

    }

    f[event_name] = counter + "," + skip;
}

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
    while (id) {
      window.clearTimeout(id);
      id--;
    }

    id = window.setInterval(function() {}, 0);
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
        timer(items);
    }
}

function location_message(message) {
        //f.washroom_informer_arrive = "0";
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
        f[f["talk"]] = "x";

        output_if_clicked = obj[f["talk"]].d;
        if (typeof output_if_clicked == 'function') {
            output_if_clicked();
        } else {
           d+=output_if_clicked;
        }

//
//       
//

    }

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
        console.log('heya');
            
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
        setTimeout(function() {
        timer(fn_array);},fn_array[0]);
        fn_array.shift();
    } else if (fn_array.length >= 1) {
        fn_array[0]();
//        jsprettify.prettify();
        fn_array.shift();
        timer(fn_array);
    }
jsprettify.prettify();
}


function timer_init(name, interval) {
    console.log("timer initiatlized");
    if (!exist(f[name]) || f[name]==0) {
        f[name]= f.moves + interval;
    }
}

function timer_fin(timer_name) {


    if (f.moves > f[timer_name] && f[timer_name] !="x") {
        f[timer_name] = "x";
        return true;
    } else {
        return false;
    }
}
function exist(variable) {
    if (typeof variable !== 'undefined') {
        return true;
    } else {
        return false;
    }

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



//displays link once, After it is clicked on once, then only text afterwards. used like this oneoff("a link|variable_name");
//put the variable name in user array to make it save
function oneoff_link(link) {
    link_parts = link.split("|");
    var text = link_parts[0];
    var fname = link_parts[1];
    if (!exist(f[fname])) {
        f[fname]=0;
    }
    if (f[fname]) {
        return text;
    } else {
        return "<a onClick=\"f." + fname + "=1; process('" + fname + "'); return false;\">" + text + "</a>"
    }
}

/* displays text once, then shows default every time thereafter
usage:

d+=oneoff("seen_hate_april", "April Thursday", "{April Thursday|dorm_poster_april}")
*/

function oneoff_text(flag_name, text) {
///refers to global f array and requires exist function

    if (!exist(f[flag_name])) {
        f[flag_name]=0;
    }
    if (f[flag_name]) {
        return "";
    } else {

        f[flag_name] = 1;
        return text;
    }


}


/*
This cycles through the description items in sequential order, stopping on the last item in the array. If the flag_variable_name is defined in the uservariables array, it will be saved between game sessions. 

d+=seq("flag_variable_name", ["first description", "second", "third"]);

//if need to give it a variable ratio reward schedule, add a 1 to the end
d+=seq("test_sq", ["sqfirst","second","third"],1); 
*/
function sq(flag_name, array, reward_param) {//refers to global flag array, and global variable reward

    if (!exist(f[flag_name])) {
        f[flag_name]="0";
    }
   

    console.log("f[flag_name]" + f[flag_name]);

    if(exist(reward_param)) {
        f.reward = variable_ratio_2(f.reward, 3, 2);
    }
    console.log("f[flag_name]" + f[flag_name]);

    var count = f[flag_name];
    console.log("count" + count);
    //return nothing if reward schedule is on and it is not at the reward item 
    if (exist(reward_param) && !reward) {
        return array[0];
    }

    if(f[flag_name] < array.length-1 && reward) {
        f[flag_name]++;
        console.log("incremented");
    } else {
        f[flag_name]="x";
    }

    if(count=="x") {
        return array[array.length-1];
    } else {


    console.log("count" + count);
        return array[count];
    }
}


function v(flag_name, choices, fin_param) {
//one side effect/dependency, refers to global f array
//
    var output;
    var rewards = choices.slice(0);
    var dft = rewards[0];
    rewards.shift(); //this makes it remove the default from the rewards. Perhaps better to leave it in in cases the user hits a reward the first time coming to a node. Then the default node may never be seen

    console.log("rewweafdsfd " + f[flag_name]);
    if (f[flag_name]==0 || !exist(f[flag_name])) {
        f.reward = variable_ratio_2(f.reward, 3, 2);


        buffer = "";
        for (var i=0; i < rewards.length; i++) {
            buffer += "1";
        }

        f[flag_name]=buffer;
        
        return dft;

    }
    if (f[flag_name] != "x" && f.reward<1) {
        var parameters = [];
        parameters.flag_name = flag_name;
                parameters.fin = fin_param;

        //the following forces it to show the default the first time upon reaching the reward if it has not been seen yet
        //output = randomizer(rewards,parameters);

            output = randomizer(rewards,parameters);

        //reward schedule here
        f.reward = variable_ratio_2(f.reward, 3, 2);
        console.log('reward activated');
    } else {
        output = dft;
    }
   
    
    return output; 

}

function variable_ratio_2(f_value,median,range) {
        var output;
        
        if (parseInt(f_value) <= 0) {
            output = lnRandomScaled(median, range);
        } else {
            output = parseInt(f_value) - 1;
        }
        return output
}

function get_keys(object) {
    var output = [];
    for(var k in object) {
        output.push(k);
    }
    return output;
 }


function get_values(object) {
    var output = [];
    for(var k in object) {
        output.push(object[k]);
    }
    return output;
 }


function randomizer(my_object,parameters) {
    //Randomized selector/////////////////////////////////////////////////////////////////
    /*

    Relatively clean. One side effect: affects global flag list settings f[]

    parameters.flag_name = the name that will be used in the main flag list f.[whateever]. Records state. REMEMBER TO PUT IT IN THE FLAG ARRAY

    parameters.fin = what to do when all options have been exhaused. options are: reset, stop. if not supplied, it will default to reset.
    - Reset makes it reactivate all previously seen links. Start the process over again.
    - Stop makes it put an x in the flag list so it can be referenced easily: if (f.flag_name != "x") or (f.memories_of_dog == "x")

        the x would be useful to deactivate a link in the parent room (root) location:
        

        if (f.randomizer == "x") {
            d+="dead link";

        } else {
            d+="{active link|link_node}";
        }


    // example usage of weighted selection. The closer to 1 the more likely. The closer to 0 less likely:
        var reward = {'option 1':0.8, 'option 2':0.4, 'option 3':0.3};
        console.log(randomizer(reward)); 

    // Example useage of unweighted random selection:
        reward = ['javascript', 'php', 'low', 'ruby', 'python'];
        var parameters = [];
        parameters.flag_name = "randomizer";
        parameters.fin = "stop";
        console.log(randomizer(reward,parameters));


    // Combination of simple and complex. Kind of like gambling with a random reward schedule. But the rewards won't be repeated until they are all finished:
    
       var reward = {"0":.8, "1":.1};
        switch(randomizer(reward)) {
            case "1":
                reward = ['javascript', 'php', 'low', 'ruby', 'python'];
                var parameters = [];
                parameters.flag_name = "randomizer";
                parameters.fin = "stop";
                y = randomizer(reward,parameters);

                d += y;


            break;

            case "0":
                d += "no reward";
           break; 

        }

    */
    //////////////////////////////////////////////////////////////////////

    var list_only_unseen, weight_only_unseen, key_value_array, list, weight, extra_params, x, only_active, flag_values, output, index_position;
    key_value_array = [];


    if (!parameters) {
        parameters = 0;
    } else {
        if (!parameters.fin) parameters.fin = "reset"; // default parameters if no parameters supplied
    }


    if (Array.isArray(my_object)) { //if no weight parameters supplied, give it default weight
    //if( Object.prototype.toString.call( my_object ) === '[object Array]' ) {
    
        for (var i = 0; i < my_object.length; i++) {
            key_value_array[my_object[i]] = 1;
            //key_value_array[javascript]=.1
        }
        
        my_object = key_value_array;

    }  else {
        key_value_array = my_object;
    }

    var list = [];
    var weight = [];
    

    list = get_keys(key_value_array);
    weight = get_values(key_value_array);
//    list = Object.keys(key_value_array);
 //   weight = Object.values(key_value_array);


    if (parameters.flag_name) { //This detects if simple or complex randomization. AKA do not re-show previously seen choices unless all choices have been exhausted. If it has a flag_name then it means it's state will be recorded in the flags list for future reference. Means complex randomization
        var buffer = "";

        //if all options have been seen, reset all to unseen (all to 11111)
        if (!count_character("" + f[parameters.flag_name],"1")) {
            buffer = "";
            for (var i=0; i < list.length; i++) {
                buffer += "1";
            }
            f[parameters.flag_name]=buffer;
            console.log("rese4t 1s");
        }

        //activate all possibilities if first time, never seen any of them yet. populate with 1's
        if(f[parameters.flag_name]==="0") { //if f.[whatever you called it] is default 
            buffer = "";
            for (var i=0; i < list.length; i++) {
                buffer += "1";
            }

            f[parameters.flag_name]=buffer;
        } else { ///load from flag variable if it already contains info
            var buffer = f[parameters.flag_name] + "";
        }

        if (f[parameters.flag_name] != "1" && count_character("" + f[parameters.flag_name],"1")==1) {

            var str = f[parameters.flag_name].split('');

            //f[parameters] = str;
            index_position = str.indexOf("1");
            output = list[index_position];
            //console.log(list[4]);            
        } else {
            only_unseen = get_only_unseen(key_value_array,buffer);
            list_only_unseen = get_keys(only_unseen);
            weight_only_unseen = get_values(only_unseen);
            output = getRandomItem(list_only_unseen, weight_only_unseen);
        }
    } else { 
        output = getRandomItem(list, weight);
    }    




    //deactivate the one that will be presented
    //get the item number in array based on key name
    index_position = list.indexOf(output);
    if (parameters.flag_name && f[parameters.flag_name] != "1") {
        var str = f[parameters.flag_name].split('');
        str[index_position] = '0';
        str = str.join('');
        f[parameters.flag_name] = str;
    }
    
    if (parameters.flag_name != "0" && parseInt(f[parameters.flag_name])==0 && parameters.fin == "stop") {
       f[parameters.flag_name] = "x"; 
       //
    }


    return output;
    //
    //identify how many times a character appears in a string
    function count_character(my_string, find_character) {
        var output = my_string.split(find_character).length-1; 
        return output;
    }
    //console.log("count:", count_character("00100","1"));
}



function get_only_unseen(p_array,on_off_flags) {
    /* For use with randomizer function
     * pass in a key/value object, and string of 1's and 0's:
     * {"dog": .9, "cat": .5, "mouse": .1} 
     * 101
     * It will produce new array with items removed:
     * {"dog": .9, "mouse": .1}
    */

    var number_of_items = get_keys(p_array).length;
    //var clone = Object.assign({}, p_array);
    var clone = jQuery.extend({}, p_array);
    var list = get_keys(p_array);
    for (var i=0; i < number_of_items; i++) {

        if (on_off_flags.charAt(i)=="0") {
            //new_array.push(p_array[i]);
            delete clone[list[i]];
        }
    }

    return clone;
}


var getRandomItem = function(list, weight) {
//used with main randomizer function. Give this function an array of items and weights, and it will randomly return an item according to its weight.
    var total_weight = weight.reduce(function (prev, cur, i, arr) {
        return prev + cur;
    });
     
    var random_num = rand(0, total_weight);
    var weight_sum = 0;
     
    for (var i = 0; i < list.length; i++) {
        weight_sum += weight[i];
        weight_sum = +weight_sum.toFixed(2);
         
        if (random_num <= weight_sum) {
            return list[i];
        }
    }
}

////for use with getRandomItem function. Produces a random number bewtwen min and max
var rand = function(min, max) {
    return Math.random() * (max - min) + min;
};

function any_topic_exists(obj) {
    var topic_exists = false;
    for (c in obj) {
        if(exist(obj[c].topic)) { 
            topic_exists = true; 
        }
    }
    return topic_exists;
}

done_talking = function(obj,topic) {
    var topic = topic || f.topic;
    console.log('testing tpic' + topic);
    var c;
    var done_talking = 0;

    if (any_topic_exists(obj) && topic) {
        for (c in obj) {
            if(!exist(obj[c].topic || !obj[c].topic)) { //test only if it is a root topic
                if (f[c] != "x") {
                    done_talking++;
                }  
            }

            else if (obj[c].topic == topic) {
                if (f[c] != "x") {
                    done_talking++;
                }
            }
            
        }

    } else {
        for (c in obj) {
            if (f[c] != "x") {
                done_talking++;
            }  
        }
    }


    if(done_talking > 0) {
        return false;
    } else {
        return true;
    }
    /*
     *
     * washroom_informer_kasparov    
washroom_informer_sinatra
washroom_informer_random_checks
washroom_informer_ss
*
*/

}



function interact(funct) {
    if (f.giver) {
        root=0;
        funct();
        use=0;
    }

}


