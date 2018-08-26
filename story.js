//////////////////////////////////////
////Variables////////////////////////
////////////////////////////////////
/*
Please do not remove the "powered by blink" message.

If you read the comments in this source code, you will understand the basic idea of how to write a game.

If you are not already familiar with basic javascript and html, it may be helpful to google up some tutorials on the subject.

Have fun making your game!




/////////////////////////////////////
////Variables////////////////////////
////////////////////////////////////

/*
Any variables that need to be stored in save games must be put into the userVariables array. No empty spaces in the variable names! 

By default, all variables written here start off set as "0" or "false"

You DO NOT need to put inventory item variables into this array. 
*/


user_variables = [
    "timers",//don't touch
    "talk", //don't touch
    "reward", //don't touch
    "end_memory",
    "thread_intro",
    "seen_dorm",
    "dorm_closet_open",
    "dorm_privacy_mode",
    "default_no_node",
    "blue",
    "testa",
    "test_sq",
    "dorm_poster_april",
    "timer_classroom_kas_note",
    "seen_poster_fail",
    "seen_behind_poster",
    "classroom_note_kas",
    "vandalism_library",
    "informer_waiting_payment",
    "washroom_informer_arrive",
    "washroom_informer_paid",
    "meeting_washroom_stall_sitting_toilet",
    "washroom_infomer_network", //unused
    "washroom_informer_ss",
    "washroom_informer_sinatra",
    "washroom_informer_kasparov",
    "washroom_informer_random_checks",
    "guidance_counselor_timer",
    "guidance_counselor_the_words_count",
    "poster_sinatra",
    "gc_discovered_sinatra",
    "gc_discovered_nothing_important",
    "caf_bridge_chess_conflict",
    "detention_after_caf_fight",
    "thread_chess_club",
    "gc_who_are_you",
    "gc_blue",
    "gc_quantum",
    "gc_toilet_time",
    "gc_nothing_to_say",
    "gc_boyfriend",
    "gc_semester",
    "gc_dating",
    "gc_fix_dating_problem",
    "gc_kasparov",
    "gc_sinatra",
    "gc_informer",
    "gc_cheat_exam",
    "gc_increased_school_security",
    "gc_no_face",
    "library_counter",
    "seen_vandalism",
    "seen_pog_game",
    "pog_finished",
    "under_stairs_arcadia_youth_timer",
    "seen_showdown_intro",
    "showdown_intro_c",
    "asm_c",
    "showers_towel_in_cubbyhole",
    "showers_timer",
    "showers_lockers_find_yours",
    "showers_lockers_seen_chalk",
    "seen_arrival_comic",
    "topic", //do not erase
    "rook_angry",
    "_rkdrm_change_topic_counter",
    "_rkdrm_ethan_counter",
    "_chess_thrown",
    "_rkdrm_rook_agitated",
    "counseling_booth",
    "_detention_sorry_face",
    "_cafv2_timer",
    "hrdcr_timer",
    "dorm_state", 
    "know_kas_excommunicated",
    "rook_boyfriend",
    "grandmaster_memory_wiped",
    "caf_state",
    "caf",
    "under_stairs",
    "seen_ghosts",
    "intro_gradual_reveal",
    "seen_informer_note",
    "seen_washroom_informer",
    "seen_counselor",
    "seen_poster_bonus",
    "seen_rook",
    "seen_assembly",
    "seen_rook_chess_game",
    "seen_instinct",
    "classroom", //location
    "asm", //location
    "seen_kas_excommunicated", //for progress meter
    "library_start",
    "quik", // do not erase
    "showers_lockers_revealed_chalk"
    
];//::uservariables


var progress_meter = [
    //sinatra thread
    "seen_behind_poster",
    "seen_informer_note",
    "seen_washroom_informer",
    "seen_counselor",


    //chess thread 
    "seen_rook",
    "seen_rook_chess_game", 
    "seen_instinct",
    "seen_kas_excommunicated",
    "grandmaster_memory_wiped",
    "rook_boyfriend",
    

    //timeless
    "seen_vandalism",
    "seen_pog_game",
    "showers_lockers_seen_chalk",
    "seen_assembly"


];

var easter_eggs = [

    "seen_poster_bonus"
]
/*
Easter eggs 
 
 */
var preload_images = [
    "https://bloomengine.com/boy-electronic/adopt/i/collage_sm.jpg",
    "https://bloomengine.com/boy-electronic/i/atticus_boy_e_start.gif",
    "https://bloomengine.com/boy-electronic/i/atticus_boy_e_start.gif"
];

inventoryTypes = [
	//["object", "Objects"],
	["thought", "Thoughts"],
    //["blah","Blah"]
/*	["location", "Locations"] */
];

meta_labels = {
    "restart": "Restart",
    "save": "Save Game",
    "menu": "Menu",
    "inventory": "Thoughts:",
    "use": "Use:"

}

/////////////////////////////////////
////Game Config/////////////////////
////////////////////////////////////




config.startScreen="<img src='i/ah_logo.png' style='margin-top:20px; margin-bottom:10px; margin-left:5em; width:400px; height:auto;'/><h1><div id='game_title_glitch' class='glitch glitch_font_off' data-text='Arcadia Heights'>Arcadia Heights</div></h1>";

config.gameTitle = "Arcadia Heights";

config.gameAuthor = "Susan Newbourne | Bloomengine";

//goes at menu at top
config.metaContent = "{About|about} <a href='https://bloomengine.com/arcadiaheights/promo/arrival/' target='_blank'>Comic</a> <a href='https://bloomengine.com' target='_blank'>bloomengine.com</a>"; 

//If you don't need an inventory system, write inventorySystem = 0;
config.inventorySystem = 1; 

//If you want a "wait" button to allow time to pass, set waitSystem = 1; If the wait system is off, it can be activated on a specific node by writing wait=1 within the node; Alternatively, if the wait system is turned on, it can be deactivated on a specific node by writing wait=0; The option to wait is only available in root nodes.
//config.waitSystem = 1; 

config.debugMode = 0; //Change this to 0 before you release your game. These are debug tools that appear on the left side. 
    






/*
 
node: A node is a chunk of descriptive text that the engine outputs. A situation. Think of it as a page in a choose your own adventure book. 

By default the player starts at the "start" node. 

/////////////////////////////////////
////Node variables reference:////////
////////////////////////////////////

root = 1; make node a root location. When user clicks "return" they are taken back to the last visited root node.

parent = [name of a node]; When the user clicks "return" they will be taken back to the node specified as parent instead of the root node.

back = 0; turn off "return" button

wait = 0; If the wait system is on, it will turn off "wait" button (Only in that particular node). For turning it completely off throughout the entire game, set waitSystem = 0 in the game config function above.

use = 1; activate "use" inventory mode when in a sub-node (This can only be used on a node that is NOT a root node). This is for allowing use of objects to interact with other objects.

links = 0; deactivate all links in description but keep links within the event box active. Used when an event causes something to happen and you still want to show the description of room, but not have people interact with it. 

inv = 0; hide inventory and wait button

*/



function set_starting_variables() {
	i.lunch_tray=1;
	f.boy_in_caf=1;
	i.cell_phone=1;
	i.abba=1;
	i.student_card=1;
	f.do_not_enter_sign_in_closet=1;
	i.zzz=1;
    i.yourself=1;
    f.reward_counter = 5;
}

var reward=0;

function timers() {

    var array = []; 
    

    if (f.timers && f.timers.indexOf(',') > -1) { //if more than one counter, then break it up and put into array
        array = f.timers.split(',');

    } else {
        array[0] = f.timers;
    }

    array.forEach(function(element) {

        if(!exist(f[element])) {
            f[element] = 0;
        }
        f[element]++;    
    });

}
function daemon() {
//refers to global f array and global variable reward
//runs of every process()
//
   


    //keep knowledge up to date\
    //
    no_exit_memory = 0; 

     if (!f.moves) {

             $(".glitch").toggleClass('glitch glitch_off'); 
            function bursts_glitch() {
             var items = [
                function(){

                     $(".glitch").toggleClass('glitch glitch_off'); 
                },100,
                function(){
                         
                         $(".glitch_off").toggleClass('glitch_off glitch'); 
                        //$("#game_title_glitch").attr('data-before','0000000');
                },
                500,
                function(){

                     $(".glitch").toggleClass('glitch glitch_off'); 
                     $(".glitch_font_off").toggleClass('glitch_font_off glitch_font_on');
                },
                300,
                   function(){
                    
                         $(".glitch_off").toggleClass('glitch_off glitch'); 
                        //$("#game_title_glitch").attr('data-before','0000000');
                         $(".glitch_font_on").toggleClass('glitch_font_on glitch_font_off'); 
                        
                },
                100,
                function(){

                     $(".glitch").toggleClass('glitch glitch_off'); 
                },
                300,
                function(){

                     $(".glitch").toggleClass('glitch glitch_off'); 
                },100,
                function(){
                         
                         $(".glitch_off").toggleClass('glitch_off glitch'); 
                        //$("#game_title_glitch").attr('data-before','0000000');
                },
                500,
                function(){

                     $(".glitch").toggleClass('glitch glitch_off'); 
                     $(".glitch_font_off").toggleClass('glitch_font_off glitch_font_on');
                },
                300,
                   function(){
                    
                         $(".glitch_off").toggleClass('glitch_off glitch'); 
                        //$("#game_title_glitch").attr('data-before','0000000');
                         $(".glitch_font_on").toggleClass('glitch_font_on glitch_font_off'); 
                        
                },
                400,
                function(){

                     $(".glitch").toggleClass('glitch glitch_off'); 
                },
                100,
                
            ];
            timer(items); 
            

        }
        
        
        if(!f.moves) { 
            bursts_glitch();
            bg_int = setInterval(bursts_glitch,5000);

        }
       
       
       function font_swap_glitch() {
             var items = [
                300,
                function(){
                    
                     $(".glitch_font_off").toggleClass('glitch_font_off glitch_font_on'); 

                },
                100,
                function(){

                         $(".glitch_font_on").toggleClass('glitch_font_on glitch_font_off'); 
                },
                100,
                      300,
                function(){
                    
                     $(".glitch_font_off").toggleClass('glitch_font_off glitch_font_on'); 

                },
                100,
                function(){

                         $(".glitch_font_on").toggleClass('glitch_font_on glitch_font_off'); 
                },
              
                
            ];
            timer(items); 


        }
        //setInterval(font_swap_glitch,1000);
        //font_swap_glitch();
    }

    function sub_glitch() {
         var items = [
            function(){

                 $(".sub_glitch").toggleClass('sub_glitch sub_glitch_off'); 
            },500,
            function(){
                     
                     $(".sub_glitch_off").toggleClass('sub_glitch_off sub_glitch'); 
                    $("#game_title_glitch").attr('data-before','0000000');
            }
        ];
        timer(items); 
            

    }


    //setInterval(sub_glitch,1000);
    timers();


    


    if (parseInt(f.reward)<1) {
        f.reward = 0;
        reward = 1; 
    } else if (parseInt(f.reward) > 0 && f.node != f.root) {
        f.reward -= 1;
        reward = 0;
    } else {
        reward=0;
    }
    //if (reward) { console.log('reward'); }
    //console.log(reward);    
}

//runs after every node processed
function daemon_after() {
    if (root && f.node != "start") {
        if (links && !lockdown && config.waitSystem && wait !=0) {

            d+="<p class='back wait'>{Wait|" + f.root + "}</p>";
        }

        if (!no_exit_memory && !lockdown && links) {
            d+=exit_memory();
        }
    }
}
///////////////////////////////////////////////
//////////////Nodes////////////////////////////
///////////////////////////////////////////////

function nodes(node) { //Do not remove this line
	switch(node) { //Do not remove this line
   
	



case "quickjump":
    root = 1;
    d+="testzzz " + quik("quik_var","text", function() {
        d+="test quickjump output text";
    });

    d+="tes 2 " + quik("quik_var_2","text2", function() {
        d+="test quickjump output text 22222";
    });

    d+= "\noneoff quik" + oneoff_quik("oneoff_quick", "oneoff quick", "blahblah");
    
    f.blue++;
break;

////
//
//
case "about":
    d+="These are the memories of Susan Newbourne (as collected by Hadrian and Simon from <a href='http://bloomengine.com' target='_blank'>bloomengine.com</a>) \n\nThe game will continuously evolve and grow. Stay <a href=\"https://feedburner.google.com/fb/a/mailverify?uri=bloomengine&amp;loc=en_US\" target='_blank' onClick='ga_subscribe_email();'>updated</a>, receive early access to new or extra content as we extract new memories from her brain. \n\nFeedback welcome. If you notice typos and bugs or if you are interested in beta-testing future games please send an email to bloomengine (aaaayat) gmail (dot com). Put \"beta test anthill\" in the subject line."; 
    
    
    //Please <a href=\"https://feedburner.google.com/fb/a/mailverify?uri=bloomengine&amp;loc=en_US\" target='_blank' onClick='ga_subscribe_email();'>add yourself here</a> too.";





    d+='\n\nIf you feel like it, you\'re welcome to drop something in the tip jar and get blockified:\n\n<a href="http://bloomengine.com/boy-electronic/adopt" style="border:0;"><img src="https://bloomengine.com/boy-electronic/adopt/i/collage_sm.jpg"></a>';
    
d+='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="QT6GWDRJSQ4FE"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
    //\n\n<form action="https://www.paypal.com/cgi-bin/webscr" method="post"><input name="hosted_button_id" value="Z7J7HN5XE5X28" type="hidden"><input src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" border="0" type="image"><img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" border="0" height="1" width="1"></form>';
    
    d+="\n\n<strong>Please check out these other games:</strong>\n\n<a href='https://bloomengine.com/binary/' target='_blank' style='border:0;'><img  src='https://bloomengine.com/binary/theBinaryTitle.gif'></a><p style='margin-bottom:3em;'><em><a href='https://bloomengine.com/binary/' target='_blank'>The Binary</a></em>. A game about an agent stuck in a time loop, repeating the same events over and over again until an assassination is stopped.</p><a style='border:0;' href='https://bloomengine.com/boy-electronic/' target='_blank'><img src='https://bloomengine.com/boy-electronic/i/atticus_boy_e_start.gif'></a><p><em><a href='https://bloomengine.com/boy-electronic/' target='_blank'>Atticus and Boy Electronic</a></em>. A game about a robot boy in search of his humanity and his companion dog, wise beyond his years.</p>";

    
break;

case "stay_updated":
    d+="Click <a href=\"https://feedburner.google.com/fb/a/mailverify?uri=bloomengine&amp;loc=en_US\" target='_blank' onClick='ga_subscribe_email();'>here</a> to receive early access to new or exclusive content.";
break;
/////
case "start": //aka caf
 
     
    reset_inventory();
    i.zzz=1;
    f.end_memory=0;
	root=1;
    if (f.moves > 3) {
        //home_memories("Memories");    
    }

    var items = [
        function(){
            
            $("#owrap").show().removeClass().addClass("std intro");
            $("#oc").css('opacity','0');
            $("#overlay").append("<div id='skip'><a href='#' onClick='start_game(); $(this).remove();  return false;' >Skip</a></div>");
        },
        500,
        function(){

            $("#oc").wrapAll("<div class='glitch' >");
            $("#overlay").addClass("glitch");
            
            $("#oc").html("What's your<br>earliest memory?");
            $("#oc").animate({opacity: 1},2000).delay(300).animate({opacity:0},1000);
        },3500,
        function(){
            $("#oc").animate({opacity: 1},2000).delay(500).animate({opacity:0},1000);
            $("#oc").html("Arriving on the bus?"); 
        },4500,
        function(){
            $("#oc").animate({opacity: 1},300).delay(500).animate({opacity:0},3000);
            $("#oc").html("We all have<br>that memory."); 
        },4000,
        function(){
            $("#oc").animate({opacity: 1},200).delay(100).animate({opacity:0},5000);
            $("#oc").html("Where were we before<br>we started school?"); 
        },5000,
        function(){
           $("#owrap").animate({opacity: 0},2000);
            $("#wrap").animate({
                    scrollTop:  '+=100'
            }, 10); 		
            if($('#owrap').css('display') != 'none') {
            $("#wrap").scrollTo("#content", 600);
            }
            $("#owrap").css('pointer-events','none');
        },2000,
        
        function(){
              
            $("#owrap").hide();
        }, 1000

     
    ];
    if (f.moves == 1) {
        //timer(items);
    } 


    //$('#overlay').empty().titleSequence(sequence);
    //d+="content triggered manually";
        //initNode('dorm');
        //
    clear_timeouts_intervals();
    //
    d+="Your name is Susan Newbourne. Student number C-37182.";
 

///////////////////////////////////////
    //2 requirements: had guidance counselor tell you you need boyfriend and seen first gang battle and met rook
    //
    if (f.back == "gc_sudden_movements") {
        d+="\n{Dormitory (A Seed)|dorm}";
    } else if (f.thread_intro > 2 && f.dorm_state == "rkdrm") { 
        d+="\n{Dormitory (Chess)|rkdrm}";
    } else {     
        d+="\n{Dormitory|dorm}";
    }



//////////////////////////////////////
    switch (f.classroom) {
        case "x":
        break;
        default:
            d+="\n{Classroom|classroom}";
    }



///////////////////////
    if (i.informer && f.thread_intro < 2) {
        d+="\n{Washroom|meeting_washroom_stall}";
        
    }



///////////////////////gc
    if (f.counseling_booth) {//if player has already seen success and failure of holding back information. Learned the concept of how to conceal important information
        switch(f.counseling_booth) {
            case "x":
            break;

            case "v2":
                d+="\n{Guidance Counselor (Matters of the Mind)|counseling_booth}"; 
            break;
            default:
                d+="\n{Guidance Counselor|counseling_booth}"; 
            
        }
        
    }

//////////////////////    caf
    switch(f.caf) {
        case "x":
        break;

        case "cafv2":
            d+="\n{Cafeteria (Confrontation)|cafv2}";
        break;

        default:
            if (f.back == "gc_sudden_movements") {
                d+="\n{Cafeteria (Interruption)|caf}";
            } else if (f.intro_gradual_reveal > 3) {
                d+="\n{Cafeteria|caf}";
            }



    }
 
    


    //d+="\n{Jump Test|story2.js|dorm}";





//////////////////////library
//
    if (f.seen_counselor) {
        f.library_start = 1;
    }

    if (f.library_start) {

        d+="\n{Library|library_start}";
    }



/////////////////under stairs
    //if (f.thread_intro > 2) {
    if (f.intro_gradual_reveal > 1) {
        switch (f.under_stairs) {
            case "x":
            break;
            default:
            d+="\n{Under the Stairs|under_stairs}";
        }
    }



 ////////////////////assembly
    if (f.seen_counselor) {
        f.asm = 1;
    }
 
    switch(f.asm) {
        case "x":
        break;

        case 1:
            d+="\n{Assembly|asm}";
        break;
    }



///////////////////showers 
    switch (f.showers) {

        case "x":
        break;
        default:
        d+="\n{Public Showers|showers}"; 
    }






//////////////hardcore
    if (f.hrdcr && f.hrdcr != "x") {
        d+="\n{Hardcore (Afterimage wipe)|hrdcr}";
    }





//::start


///reset any memories that are temporary (if variables start with _ it will reset
    for (var c in f) {
            //console.log(c + " " + f[c]);
    
        if(c.charAt(0) == "_") {
            f[c]=0;
        }
    }

//::progress_meter
    (function() {
        var progress_state = 0;
        for (var i = 0; i < progress_meter.length; i++) {
            if (f[progress_meter[i]]) {
            console.log(progress_meter[i] + f[progress_meter[i]]);
                progress_state++;
            }
        }

        d+="\n\n<div style='font-size:.75em; line-height:1.5em;'>" + progress_state + " of " + (progress_meter.length) + " fragments reconstructed.</div>";

        if (progress_state == progress_meter.length) {
           if (typeof ga !== "undefined") { 
                ga('send', 'pageview', "/arcadiaheights/" + "finished-memories");
            }

            d+="\n<em>You have exhausted your memories.</em> \n<div style='font-size:.75em; line-height:1.5em;'>Thank you for playing. This game will continuously evolve and grow. <a href=\"https://feedburner.google.com/fb/a/mailverify?uri=bloomengine&amp;loc=en_US\" target='_blank' onClick='ga_subscribe_email();'>Stay updated</a> and receive early access to new/extra content or check out some {other games|meta_other_games}.</div>"
        }
    })(); 




//::EXHAUSTED

    //as more and more added, remove older state variables and only keep the newest ones. If ppl play for a while they will have already seen the old stuff
    if (f.thread_intro > 2 && f.thread_chess_club > 0 && f.seen_ghosts) {
 ;
    }

/*
    d+="<hr>";
    if (!f.seen_arrival_comic) {
        d+="<a class='out' href='https://bloomengine.com/arcadiaheights/promo/arrival' target='_blank'>Arrival</a>";
    }
*/

    //always keep this last
    if (!f.seen_showdown_intro) {
        d="";
        f.showdown_intro_c=0;
        f.node="showdown_intro";
        nodes("showdown_intro");
    }
    

    //don't overload player with choices in beginning
    if (f.intro_gradual_reveal < 10) {
        f.intro_gradual_reveal++;
    }       
        
break;

case "showdown_intro":
    root=1;
    f.root = "showdown_intro";
    console.log("f.root" + f.root);
f.showdown_intro_c++;
scene_change("Bloodhounds");
f.seen_showdown_intro=1;
    switch (f.showdown_intro_c) {
        case 1:
            lockdown=1;
            d+="\"I know you are here to kill me. Do it, cowards. You are only going to kill a man. You cannot stop the revolution.\" \n\nHe wears a {fox mask|showdown_intro_mask} and a student uniform. His back presses against a railing. Behind it a trench drops into darkness. \n\n{Emoticons|showdown_intro_emoticons} hover in the shadows of the bookshelves and cast him in a sickly yellow hue.  ";
            
        break;
        case 2: 
            lockdown = 1;
            d+="The P.A. system crackles from {above|showdown_intro_heavens}: \"We don't kill our students, Kasparov. Come quietly. We already have the others.\"\n\nThe {security|showdown_intro_ss} guards inch closer to him and their bodies take form. They have monitors for heads and emoticons for faces. Their {nightsticks|showdown_intro_nightsticks} bristle with electricity. ";
        break;

        case 3:
            d+="The guards burst forward. He leaps backward over the railing and falls into the shadows. A faint splash below. The guards lean over the railing, sweeping the water with light. \n\n\"Drain it. Post men at every exit, including the pumping stations. {Find him|start}.\"";
            lockdown=1;
            break;

    }
    
break;
case "showdown_intro_emoticons":
    d+="They stutter and glitch between angry-face with frown to angry-face with gritted teeth.";
break;
case "showdown_intro_trench":
    d+="It drops into the shadows of a moat.";

break;

case "showdown_intro_heavens":
    d+="Above the bookshelves, a geodesic dome fills the sky. Orb-shaped cameras and loudspeakers hang from the structural supports. The panels of the dome glow faintly.";

break;

case "showdown_intro_ss":
    d+="Black uniforms melt into the shadows and make their heads appear disembodied. Reflective red armbands with two interlocking S shapes glint.";
break;
case "showdown_intro_mask":
    d+="The shadows on the mask shift as the emoticons hover closer.";

break;


case "showdown_intro_nightsticks":
    d+="Telescoping rods with a perpendicular handle. Sparks of elecricity dance along the shafts.";

break;

case "meta_other_games":
    d+="<a href='https://bloomengine.com/binary/' target='_blank' style='border:0;'><img  src='https://bloomengine.com/binary/theBinaryTitle.gif'></a><p style='margin-bottom:3em;'><em><a href='https://bloomengine.com/binary/' target='_blank'>The Binary</a></em>. A game about an agent stuck in a time loop, repeating the same events over and over again until an assassination is stopped.</p><a style='border:0;' href='https://bloomengine.com/boy-electronic/' target='_blank'><img src='https://bloomengine.com/boy-electronic/i/atticus_boy_e_start.gif'></a><p><em><a href='https://bloomengine.com/boy-electronic/' target='_blank'>Atticus and Boy Electronic</a></em>. A game about a robot boy in search of his humanity and his companion dog, wise beyond his years.</p>";

break;
//::base
case "dorm":
    if (!i.kasparov && f.back=="start" || f.back=="showdown_intro") {scene_change("Kasparov");    }
    root=1;
    f.seen_dorm = 1;


    dorm_desc(f);

    //d+=seq("test_sq", ["sqfirst","second","third"],1);
    //d+=oneoff("oneoff","","oneoff");
break;




case "dorm_desk":
    d+="A metal slab extending out of the wall. ";

    if (f.root=="rkdrm") {
        d+="On it are a few pieces of {Origami|rkdrm_origami}.";
    } else {

        d+="On it is a {notebook|dorm_notebook} and {pen|dorm_pen}. A cube-shaped stool lies tucked underneath the desk.";
    }
break;

case "rkdrm_origami":
    d+="Made from pages of the school newspaper and folded into chess pieces. There is a Queen, Rook and bishop. It's hard to imagine Rook folding them with his gorilla hands. ";
break;
case "dorm_notebook":
    d+="The pages are plastic and slippery to the touch. At the bottom outer corner of each page is a watermark of the " + oneoff_link("Ephemera logo|eph_logo") + ". Printed on the pages are {questions|dorm_notebook_questions} and a space to write answers.";  
break;
case "eph_logo":
    d+="The initials EPH inside a square. ";
break;
case "dorm_notebook_questions":
    d+='\"Explain in your own words how the Heisenberg Uncertainty Principle relates to the Spectre Drive.\" Scrawled underneath is your '
    d+= oneoff_link("answer|dorm_notebook_answer") + ".";

break;
case "dorm_notebook_answer":
    d+="By now the theory and math is simple. Layered underneath your writing are faint impressions of other answers. The ink has faded and gone but when you angle the page in the light, you see scratches left by countless pens. ";
break;
case "dorm_pen":
    d+="Cartoonishly large and heavy, embossed with the {Ephemera logo|eph_logo}. ";
break;
case "dorm_bed":
    d+="A " + oneoff_link("futon|_dorm_futon") + " on a raised slab of concrete.";
break;
case "dorm_poster":
    d+="A faded poster of "
    d+=oneoff_link("April Thursday|dorm_poster_april_oneoff");
    d+=" with her fist raised in the air as if uppercutting an invisible foe. Her other hand holds a microphone. She wears a customized school uniform: flared sleeves, skirt shorter than standard issue. On her wrists are "; 
   
    if (f.dorm_poster_spiked_bracelets_edgy_seen || f.reward) {
        d+="spiked bracelets. ";
    } else if (!f.reward) {
        d+="{spiked bracelets|dorm_poster_spiked_bracelets}. ";
        //d+=v("dorm_poster_spiked_bracelets", ["spiked bracelets. ", "{spiked bracelets|dorm_poster_spiked_bracelets}. "]);

    }

    d+="Overlaid on the picture in distressed bubble typeface: April Thursday Live at Arcadia Heights, Ward C. ";
    //overlay(["Sponsored by Faculty","It was a good concert","Wasn't it, Suzy?"],1000);
    //
        d=sq("dorm_poster_april", [d, "When was the concert? Everything has muddied. You remember the gymnasium shuddering from the noise. Afterwards, a cleanup crew. Posters strewn like dead leaves on the ground. ", "Days after the concert, crews still taking down the posters. It dawned on you to take one of the posters. They never suspected anything."], 1);
        d+="\n\nOne {corner|poster_corner} of the poster curls slightly. ";
break;

case "dorm_poster_april_oneoff":
    d+="You can't stand the sight of her. ";
break;

case "_dorm_futon":
    d+="<em>The bed is not important.</em> You feel a wave of Nausea. ";

break;
case "poster_corner":

    if(f.root=="rkdrm") {

        d+="You glance at Rook. <em>He doesn't need to know your secrets.</em> ";
        break;
    }
    if (f.seen_behind_poster && f.seen_poster_fail || f.direct_poster) {
        d+="You first touch the panel to open the closet. The words \"Privacy mode enabled\" form on the glass wall. \n\n";
        f.direct_poster = 1;
        f.dorm_privacy_mode = 1;
    } else if (!f.dorm_privacy_mode) {
        d+="<em>Not yet. They can see you.</em> ";
        f.seen_poster_fail = 1;
    }
    if (f.dorm_privacy_mode) {
        f.seen_behind_poster = 1; 
        d+="You lift up the poster. ";
        
        d+="Scratched on the wall behind it are the words: \"Find Kasparov\". ";
        i.kasparov=1;
        f.end_memory=1;

        if (f.poster_sinatra || f.know_kas_excommunicated) {
        
            d+="Written in smaller {letters|dorm_chalk_writing} underneath are the words: ";

        }
        if (f.know_kas_excommunicated) {
            d+="<li>He was excommunicated from Chess club</li>";
        }
        if (f.poster_sinatra) {
            d+="<li>Find Sinatra (Janitor in east wing)</li>";
            i.sinatra = 1;
            f.seen_poster_bonus = 1;
        }
    } 
    
break;

case "dorm_chalk_writing":
    d+="Written in chalk. ";
    if (!f.showers_lockers_seen_chalk) {
        d+="<em>Where did you find chalk?</em>";
    }
break;
case "dorm_poster_spiked_bracelets":
    d+="Edgy but within dress code. ";
    f.dorm_poster_spiked_bracelets_edgy_seen = 1;
break;
case "dorm_poster_april":
        d+="There was a time you liked her music. Now you can't stand the sight of her. ";
       /*d+=v("dorm_poster_april", ["You can't stand the sight of her. ", "Posters and flyers had been pasted everywhere. After the concert, they eventually peeled off, left on the ground like dead leaves. ", "After the concert, you asked for one of the bigger posters from the walls of the cafeteria. They never suspected anything."], "stop");
        *
        * *
        */
break;
case "dorm_toilet":
        d+="A cube with a hole. There are two ";
        
        
         
        
        if (f.dorm_privacy_mode) {
            d+="footprint symbols ";
        } else {

            d+="{footprint symbols|stand_on_toilet}";
        }
        d+=" to indicate where to place your feet. The toilet attaches to a taller block serving as a sink. ";
    break;

case "stand_on_toilet":
        d+="A chime sounds. The glass wall pixellates and the words: \"Privacy mode activated,\" appear on the wall. A timer appears, counting minutes, seconds and milliseconds.";

    break;

	case "dorm_walls":
        d+="The walls are weathered and scarred with tiny pockmarks. A  {poster|dorm_poster} hangs on the wall. Next to it is a {panel|dorm_closet} and closet door.\n"

        //d+= vr("blue",["dft","dog", "cat"], 5, 4,"stop");

    break;

        case "dorm_closet":
            if (f.dorm_closet_open) {
                    d+="School uniforms hang on a rack. Other clothes and articles are placed in shelves.";
                    d+="<li>{Close closet|close_dorm_closet}</li>";
                    
            } else {
                d+="You touch the panel and the closet door slides open. Inside, school uniforms hang on a rack. Other clothes and articles are placed in shelves. \n\nA chime sounds and the words: \"Privacy mode activated,\" form on glass wall behind you. A digital counter appears, with minutes and seconds counting down. The landscape outside the window {pixellates|dorm_glass_pixellate} to low resolution. ";
                f.dorm_closet_open = 1;
                f.dorm_privacy_mode = 1;
            }
        break;
        case "close_dorm_closet":
                 d+="You close the closet. A chime sounds and words appear on the wall: \"Privacy mode disabled. Time deducted from your daily quota.\" \n\nThe {world outside|dorm_outside} resolves to a higher resolution.";
                f.dorm_closet_open = 0;
                f.dorm_privacy_mode = 0;

        break;
        case "dorm_glass_pixellate":
            d+="Beyond the glass, you can make out shapes and colors, but everything lacks definition.";

        break;
    //
    //
    //
    //
    case "dorm_glass":
        d+="Tall panes of glass, connected at each corner by metal clasps. The glass reaches from floor to ceiling, offering a full view of the {outside|dorm_outside}. One of the panes has a metal handle, doubling as a {door|open_dorm_door}. "
    break;

/*
        case "dorm_door":
            d+="A metal handle is fused to the glass. \n<li>{Open door|open_dorm_door}</li>";
        break;
*/
        case "open_dorm_door":
            if (f.root = "rkdrm") {
                d+="You pull on the handle, the door catches on a latch. A chime and words form on the glass: \"Do not leave friends and dormitory unattended during friendlyplaytime, student Susan Newborne.\" ";
            
                if (!f.rook_angry) {

                    d+=sq("rkdrm_try_leave", ["\n\n\"Stop fooling around,\" says Rook.","\n\nRook glares at you. ", ""]);
                }

    
            } else {
                d+=sq("open_dorm_door", ["You pull on the handle, the door catches on a latch. A chime sounds. Words form on the glass: \"Currently it is quietstudytime, student Susan Newborne. Do not attempt to leave your dormitory.\"", "You tug on the handle. Words form on the glass wall: \"Currently it is  quietstudytime, Susan Newborne. This incident will be noted.\"", "The door catches on a latch and refuses to open. "]);
            }
        break;

        case "dorm_outside":

            /* example of a transition if (f.back=="dorm_glass") {
                d+="<div class='transition'>you push through the door </div>";
            } */
            if (f.dorm_privacy_mode) {

                d+="A pixellated and blocky landscape. ";
            } else {
                d+="Beyond the glass, a {tower|panopticon_tower} stands in the center of a circular {yard|panopticon_yard}. A curved wall made of thousands of {dormitory rooms|view_of_other_dorms} forms a ring around the tower. The rooms stack on top of each other, open to view like the interior of a dollhouse. A narrow walkway connects each room. At intervals, ";
                
               d+=v("dorm_view_escalators", ["escalators", "{escalators|dorm_view_escalators}"],"stop");
                
               d+=" connect the different levels. \n\nShafts of light fall from {above|dorm_outside_above}.";




                
            }
            no_exit_memory=1; 
           //d+="<p class='back'>{Return|dorm}</p>"; 

        break;
        case "dorm_view_escalators":
            d+="They cycle slowly, waiting for someone to step onto them. ";
        break;
        case "panopticon_yard":
            d+="Astroturf recedes into the distance. ";
        break;

case "view_of_other_dorms":
    d+="Students sit at their desks, studying. Some lie on their beds, reading. Some are on the toilet and pixellated. ";

break;


case "panopticon_tower":
    d += "White and red, like a lighthouse. Near the top is a ring of {spotlights|spotlights} and loudspeakers. Above them, a {orb|panopticon_dome} of ink-black glass. A trench, moat and {drawbridge|panopticon_drawbridge} surrounds it. ";
    if (f.root=="asm") {
        d+="\n\nThree flagpoles antennae out from the tower and school flags hang from them. ";
    }
    
break;
case "panopticon_drawbridge":
    d+="The metal panels are currently rolled up like rug.";
break;
case "panopticon_dome":
    d+="The eye of the panopticon. ";
break;

case "spotlights":
    d += "Frozen in position and waiting for the night. ";
break;

case "dorm_outside_above":
    d+="A tangle of structural supports and catwalks. Higher up is a dome of {glass|dorm_outside_domed_ceiling}. "; 
    //Light seeps in through {narrow windows|dorm_outside_dome_windows}.";


break;
case "dorm_outside_domed_ceiling":
    d+="A geodesic dome. Some of the panels are opaque with blue skies and clouds painted on them, some are made of  {glass|dorm_outside_geodesic_dome_panel}, letting shafts of light from {outside|dome_outside} fall into the courtyard.";

break;
case "dome_outside":
    d+="A luminous fog obscures the outside. It swirls slowly, like the plasma you made in Science class. ";
break;
case "dorm_outside_geodesic_dome_panel":
    d+="The texture of ice, obscuring the outside but still transmitting shafts of light into the courtyard. ";
break;

case "classroom":
    root=1;
    if(f.back=="start" ) {
        f.classroom_note_kas=0;
        scene_change("The Message"); 
        
//        timer_init("classroom_note_kas", 3);
    }
    f.classroom_note_kas++;
    
    d+="{Ms. Heinrich|classroom_teacher} stands in front of a {whiteboard|classroom_whiteboard}, voice {droning|classroom_droning} hypnotically. {Students|classroom_students} sit at their {desks|classroom_desks}.";
    if (f.classroom_note_kas==3) {
        d="Someone taps your shoulder. You turn and the girl behind you passes a small folded {note|classroom_note_kas_passed} with your name on it. ";
        lockdown=1;
    }
break;

case "classroom_note_kas_passed":
    d+="She returns to cleaning her manicured nails. Not her. She's just a conveyor. You search the other faces behind her. They are unreadable. \n\nYou unfold the {note|classroom_read_note}. ";
    back=0;
    break;

case "classroom_read_note":
    d+="\"I have info about K. Meet at lunch. Washroom near cafeteria, third stall. Destroy this note.\" \n\nYou crumple the note. Feigning a yawn, you put it in your mouth and eat it. ";
    i.informer = 1;
    f.seen_informer_note = 1;
    f.thread_intro = 1;
    f.classroom = "x";
    f.end_memory = 1;
break;
case "classroom_desks":
    d+="Undersized one-piece affairs. Clean angles of metal and glass. Chair and desk fused together. ";

    if (!f.classroom_desk_graffiti) {
        d+="There is some {graffiti|classroom_desk_graffiti} scratched on yours. ";
    }
break;
case "classroom_desk_graffiti":
    d+="\"Suzy + {Thomas|classroom_thomas}\" inside a heart pierced by an arrow. ";
    f.classroom_desk_graffiti = 1;
break;

case "classroom_thomas":
    d+="You glance over at Thomas. A vacant stare. Thumb still in his mouth. You didn't find it amusing when they put that on your desk. ";
break;


case "classroom_teacher":
d+="She wears a grey power suit and has a large monitor for her head. Her expression is usually a smiling emoticon, sometimes interrupted by the flicker of a word or phrase. She had the habit of doing that to stress an important point. ";
break;

case "classroom_droning":
        z = "Most of her time is spent with her back facing the students, speaking into the whiteboard. "; 
        d+=sq("heinrich_talk", ['"Who can explain to me the Heisenberg Uncertainty Principle?" she says. The words "Heisenberg", "Uncertainty" and "Principle" flash in rapid succession on her face. ', 
    '"How does the collapse of the wave function affect the Spectre fold?" A long pause. "Anyone?" You find yourself looking out the {windows|classroom_windows}. ', z]);

break;

case "classroom_windows":
d+="All you can see of the outside is a pulsating milky white, lacking definition. You squint from the brightness. ";


break;


case "classroom_whiteboard":
d+="A jungle of of notes and equations. Her arm is a blur of motion and the " + oneoff_link("marker|classroom_teacher_pen") + " squeaks like sneakers on a gym floor. ";
break;

case "classroom_teacher_pen":
d+="Ephemera Brand. Ink flowing freely. It looks oversized, even in her  metal hands. ";
break;

case "classroom_students":
d+="Some doodle in their notebooks. Some cast eyes at each other, passing "; 

if(f.sticky_love_notes=="x") {
    d+="notes";

} else {
    d+="{notes|classroom_notes}";
}
d+=". ";
//d+= oneoff("notes|classroom_notes") + " when Ms. Heinrich's back is turned. ";
    d+=v("classroom_students", ["", "In the back row, a student wears his {jacket|classroom_turncoat} flipped inside out. ",  "Some  have a side of their shirt untucked. Still within dress code. \"Three deviances allowed\", says the student handbook. ", "Some girls have their skirts {awkwardly bunched|classroom_skirts_bunched} at their waist. "], "stop");


break;

case "classroom_skirts_bunched":
    d+="Rolled several times at the waist to show more leg. Still within dress code. ";
    break;
case "classroom_turncoat":
    d+="A member of the Chess Club. Hair clipped extremely short. Bowtie. Socks pulled over his pants. ";
break;

case "classroom_notes":
d+=sq("sticky_love_notes", ["Mostly poetry on sticky notes. Professions of love, written in code. The Dorabella Cipher has been all the rage recently. Not that the teacher's couldn't crack it. Not that they cared to. ", "The ink would disappear in a few days. They would probably break up by then too. ", "You're often a conveyor. You've never had the desire to give or receive a note. "]);

break;


////                                       
case "mean_girl_washroom":                 
d+="<p>She taps her foot.</p>";           
if (!f.all_wet) {                          
	use=1;                                 
                                           
} else {                                   
	d="<p>The girls hold their stomachs laughing. The redhead is expressionless, her eyes bore into you.</p>";
}                                          
if (f.giver) {                             
	switch (f.giver) {                     
		case "boy":                        
			if (!f.genius_comment) {       
				d="<p>\"Yes genius. Kevin. You're new here so I'll explain how things work.\" You step back as she leans in. The other girls grasp your arms, forcing you into her face. \"You do not talk to him.\" She holds her gaze then raises her hand to touch your hair, examining the split-ends. \"I like your hair. There's something about it--\" She takes the gum out of her mouth and mashes it into the strands.</p>";
				i.gum_hair=1;              
				f.genius_comment=1;        
			} else {                       
				d="<p>She rolls her eyes.</p>";
			}                              
		break;                             
		                                   
		                                   
		case "friend":                     
			d="<p>\"You have no friends.\"</p>";
		break;                             
		                                   
		case "gum_hair":                   
			if (!f.gum_comment) {          
				d="<p>\"It suits you.\"</p>"
				f.gum_comment=1;           
			} else {                       
				d="<p>She ignores your comments.</p>";
			}                              
		break;      

		case "ornament":
		case "cell_phone":
			d="<p>She avoids looking at it, waving it away.</p>";
		break;

		
		case "yourself":  		
			d="<p>\"Amnesia. That's Gold Suzy. The stuff you say.\"</p>";
		break;
		
		default:                           
			d="<p>She rolls her eyes.</p>";
	                                       
	                                       
	}                                      
                                           
}                                          
break;                                     

case "meeting_washroom_stall":
    root=1;
    no_exit_memory=1;
    if (f.back=="start") {
        scene_change("The Informer");    
        //f.washroom_informer_arrive = "0";
       i.washroom_informer_pogs = 1;
       f.washroom_informer_paid = 0;
       f.informer_in_washroom = 0;
       f.washroom_informer_arrive = 0;

       f.washroom_informer_theft = 0;
       f.washroom_informer_kasparov = 0;
       f.washroom_informer_sinatra = 0;
       f.washroom_informer_random_checks = 0;
       f.washroom_informer_ss = 0;
    }
    d+="You sit on the toilet with the seat lid lowered. ";
    if (!f.washroom_informer_paid) {
        d+="In your lap is a bag of {Pogs|pogs_game}. ";
    }
    if (f.meeting_washroom_stall_graffiti != "x") { 
        d+="{Graffiti|meeting_washroom_stall_graffiti} ";
    } else {
        d+="Graffiti ";
    }
    d+="covers the stall walls and door. The "; 
    d+=oneoff_link("washroom|meeting_washroom_quiet") + " smells of disinfectant. ";
    timer_init("washroom_informer_arrive", 5);


    if (f.informer_in_washroom == "x") {
        d+="The space underneath the stall is {empty|informer_gone}.";
    } else if (f.washroom_informer_paid) {
        d+="{Shoes|washroom_informer_desc} peek from under the stall door. ";        
        //informer_interactions();
    }

    if (timer_fin("washroom_informer_arrive")) {
        d="Feet appear beneath the stall door. You didn't hear her approach. &ldquo;{Payment first|pay_informer}.\" She disorts her voice into a rasp. <em>Always the anonymity and theatrics.</em>";
        f.informer_in_washroom = 1; 
        back = 0;

        
    } 

    break;

case "informer_gone":
    back = 0;
    i.informer=1;
    d+="The informer has slipped away. You open the stall door and {step outside|washroom_main}.";
break;

case "washroom_informer_desc":
  
 
    d+="Your informer stands on the other side, waiting in silence. ";


    //conversation example
    //
    f.counseling_booth = "v1";

    tmp = {


        "washroom_informer_kasparov":
            {l:"Kasparov", d:function() {
                d+="\"We've given you what you paid for. Don't ask for more,\" she says. \"There's been word of enhanced counseling if the name escapes anyone's lips.\" ";
                f.informer_guidance_counselor = 1;
            },v:1},
      
        "washroom_informer_sinatra":
            {l:"Janitor who saw Kasparov", d:function() {
                d+="\"His name is Sinatra,\" she says. \"A few test tubes short of a science experiment. Be discreet. He may be watched.\" ";
                f.poster_sinatra=1; 
                i.sinatra=1;

                if (f.thread_intro < 2) {
                    f.thread_intro=2;
                }
                
            },v:1},
        "informer_guidance_counselor":
            {l:"Guidance counseling", d:"\"Don't mention Kasparov. They will pull everything from you. Sometimes the best lie is to tell the truth. Throw them some crumbs.\""},
     "washroom_informer_random_checks":
            {l:"Random security checks", d:"\"Carry your student ID with you. Have your transit documents in order. Or hire a good forger,\" she says. "},
 
        "washroom_informer_ss":
            {l:"School Security",d:function(){
                f.washroom_informer_random_checks = 1; 
                d="\"You've seen it. More random checks and more guards. They don't want to broadcast it, but they're casting a wide net.\" ";
                i.ss=1;
                //back=0;
            },v:1}

/*
        "test_node_conv":
            ["test node conv", function() {
                d=initNode("test_node_conv");
                setTimeout(function(){process("test_node_conv");},1000)
                }
            ,1]
 */           
    };
     
   talk(tmp);
    //convo_1();
    /*
    d+="<div class='convo'>"; 

    if (!f.convo_sub_branch) {
        d+="<li>{convesation sub branch|convo_sub_branch}</li>";
    }
    d+="</div>";
    */
    if (done_talking(tmp)) {
        f.informer_in_washroom = "x"; 

    } 
    
/*
    if (!f.washroom_informer_kasparov) {

        d+="{Kasparov|washroom_informer_kasparov}";
    }

    if (!f.washroom_informer_sinatra) {
        d+="{Sinatra|washroom_informer_sinatra}";
    }
*/


/*
    if (!f.washroom_ss) {
        d+="{School Security|washroom_ss}";
    }
    if (!f.washroom_informer_network) {
        d+="{Informer Network|washroom_informer_network}";
    }

    */
break;


case "convo_1":
    f.convo_1=1;
    d+="description1";
    convo_1();
break;

case "convo_2":
    f.convo_2=1;
    d+="description2";
    convo_1();
break;

case "convo_3":
    f.convo_3=1;
    d+="desc3";
    convo_1();
break;


case "convo_sub_branch":
    f.convo_sub_branch = 1;
    d+="starting words";
    tmp2 = {

        "1washroom_informer_kasparov":
            ["1Kasparov", "sddssdsd",1],
      
        "1washroom_informer_sinatra":
            ["1Sinatra", "dsdsdsddfsdf",1],
     "1washroom_informer_random_checks":
            ["1random security checks", "\"orger.\" "],
 
        "1washroom_informer_ss":
            ["1school security",function(){
                f.washroom_informer_kasparov = 1;
                f.washroom_informer_random_checks = 1; 
                d="ssddssdsd";
                //back=0;
            },1]
    };
     
    d+="<div class='convo'>"; 
    talk(tmp2);
    d+="</div>";
break;
case "washroom_informer_kasparov":
    d+="\"That's all we know. He keeps his activities well beneath the radar. Even to us.\"";
    f.washroom_informer_kasparov = 1;
break;

case "washroom_headmaster":
    d="\"He was in a rage after the library incident. \" ";
    f.washroom_headmaster = 1;
break;
case "washroom_informer_sinatra":
    d+="\"All we have is that name. You can find him on your own.\"";
    f.washroom_informer_sinatra = 1;
break;

case "washroom_ss":
    d+="\"You've seen them everywhere. Now you know why.\"";
    f.washroom_ss = 1;
    break;

case "pogs_game":
	inventoryDescArray["washroom_informer_pogs"]["funct"]();

break;

case "pay_informer":
                d+="You pass the bag underneath the stall door. The Pogs clatter as she digs through them. \"Excellent,\" she says. \"This is {what we know...|all_we_know_informer}\"";
                f.washroom_informer_paid=1;
                i.washroom_informer_pogs=0;
                back=0;
                

break;
    case "all_we_know_informer":

        d+="\"<em>Kasparov</em>. They whisper and hate that name. They say he's responsible for a recent vandalism of the library. The only witness to the event was a janitor who works the east wing. The headmaster has put security on high alert.\" ";
        i.headmaster=1;
        i.vandalism_library=1;
        /*
    f.washroom_informer_kasparov = 1;
    f.washroom_informer_sinatra = 1;
    f.washroom_headmaster = 1;
    f.washroom_ss = 1;
    f.washroom_informer_network = 1;
       */ 
    break;
    
    case "meeting_washroom_quiet":
        d+="Sound filters in from the hallway outside. The bustle of students heading for the cafeteria. ";

    break;
    
    case "meeting_washroom_stall_sitting_toilet":
    f.meeting_washroom_stall_sitting_toilet=1;
        d+="You sit on a toilet with the seat lid lowered. "; 
    
    break;


    case "meeting_washroom_stall_graffiti":
        d+=sq("meeting_washroom_stall_graffiti", ["Layer upon layer of fading graffiti. At least you have something to read to pass the time. ", "There are some comics. One is a five panel story about a dog lost in a forest. ", "There are some algebraic functions. ", "There's a heart with 'Karen + Horatio' inscribed in it.", "The back wall is tagged with the crown symbol of the Chess Club."]);
    break;
	///                                    
	case "counter":                        
	parent="kitchen";                      
		d+="<p>Platforms pass at regular intervals, some full of payloads of food and others empty, waiting to receive dirty trays and dishes.</p>";
		use=1;                             
	                                       
		if(f.giver==="0") {                
			alert("fake zero");            
		}                                  
		                                   
		if (f.giver) {                                        
			switch (f.giver) {
				case "cell_phone":
					d="<p>You decide to hold on to your cell phone.</p>";
				break;
				case "lunch_tray":         
					d="<p>You deposit your tray and watch it descend {downwards|kitchen}.</p>";
					i.lunch_tray=0;        
				break;                     
				                           
				case "student_card":       
					d="<p>You decide to hold onto your card.</p>";
				break;          

				case "ornament":       
					d="<p>You better hold on to your ornament.</p>";
				break;  		
				
				default:    
					if (giver_type=="thought") {
						d="<p>You can't think of any connection between those two things.</p>";
					} else {
						d="<p>It doesn't belong in the conveyor.</p>";
					}
                break;
			}                              
		}                                  
	                                       
	break;                                 
		                                   
		                                   
		                                   
case "washroom_main":
    root = 1;
    d+="The stalls are empty. A row of sinks and {mirrors|washroom_mirror} line the wall. One of the mirrors is smashed with its shards scattered across the floor. Light pours in from a {narrow window|washroom_window} near the ceiling. A doorway leads {outside|washroom_back_out}.";
    lockdown = 1;



break;
		                                   
		                                   
		                                   
		                                   
case "washroom_mirror":
    d+="Through shards and cracks your reflection stares back at you. Obsidian hair. Supple and pristine skin. Primordial eyes. ";
break;

case "washroom_window":
    d+="The glass has the appearance of ice, with crystalline veins and small bubbles. Beyond it is the luminous fog. ";

break;
                                           
case "washroom_back_out":
    root=1;
    d+="You step past a mop and bucket blocking the entrance. There is yellow caution tape and a sign which reads: \"Washroom out of order. Do Not Enter\". ";
    f.seen_washroom_informer = 1;
    f.end_memory=1;
break;
                                           
                                           
                                           
case "counseling_booth":
    root=1;
    
    switch(f.counseling_booth) {
        case "v2":
            f.rook_boyfriend = 1; 
            scene_change("Matters of the Heart");
        break;
        default:
            scene_change("The Truth");
        
    }

    d+="A small narrow room. Everything is white except for the {red stool|counseling_booth_stool} you sit on. There is a panel on the wall with a {camera|counseling_booth_camera}, a {speaker|counseling_booth_speaker} and a {slot|counseling_booth_slot}. Overhead, flourescent bulbs stutter. ";

    if (f.back=="start") {
        f.guidance_counselor_timer=0;

        
    }
    //start_timer("guidance_counselor");
    if (!exist(f["guidance_counselor_timer"] || f.back=="start")) {
        f.guidance_counselor_timer=0;
    } else {
        f.guidance_counselor_timer++;
    }
    switch(f.guidance_counselor_timer) {
        case 2:
            d+="\n\nA tinny voice comes  out of the speaker: \"Thank you for your patience. You are second in queue for the next available counselor.\" ";
            back=0;
        break;

        case 4:
            
            d+="\n\n\"Thank you for your patience. You are first in queue for the next available counselor.\" ";

        break;
        case 6:
            
            d="A chime. \"Operator connected. Pulling up account,\" says a voice. The buzz of the speaker resolves to high-fidelity silence.\n\n\"Welcome, my child. Prepare to recite the words. Please hold still for the scan.\" A band of warmth passes over your face. \"Arcadia,\" he says. \n\n{Minds free|guidance_counselor_the_words}";
            back=0;
            f.guidance_counselor_the_words_count=0;
        break;
        default:
    }


break;


case "guidance_counselor_the_words":
    back=0;
            f.guidance_counselor_the_words_count++;
    switch (f.guidance_counselor_the_words_count) {
        case 1:
            d+="\"Arcadia,\" he says. \n\n{Doves nest|guidance_counselor_the_words}";
            break;
        case 2:
            d+="\"Arcadia,\" he says. \n\n{A father's dream|guidance_counselor_the_words}";
            break;
        case 3:
            d+="\"Arcadia...\" \n\n{A mother's love|guidance_counselor_the_words}";
            break;
        case 4:
            d+="\"Arcadia...\" \n\n{Arcadia|guidance_counselor_the_words}";
            break;
        case 5:
            d+="\"Skies...\" \n\n{Forever blue|guidance_counselor_the_words}";
            break;
        case 6:
            d+="\"Please repeat.\" \n\n{Skies forever blue|guidance_convo}";


            f.gc_blue = 1;
            f.gc_quantum = 1;
            f.gc_toilet_time = 1;
            f.gc_nothing_to_say = 0;
            f.gc_boyfriend = 0;
            f.gc_dating = 0;
            f.gc_fix_dating_problem=0;
            f.gc_informer = 0;
            f.gc_kasparov = 0;
            f.gc_increased_school_security = 0;
            f.gc_cheat_exam = 0;
            f.gc_sinatra = 0;
            f.topic = 0; 
            f.gc_nothing_to_say = 0;
            f.gc_who_are_you = 1;
            
            break;
    }


    
break;

case "outgoing":
    d+="hello";
break;
case "guidance_convo":
    inv=0;
    root=1;
    d="\"Thank you. What would you like to confess today, Suzy?\" ";
       

    if(f.gc_fix_dating_problem) {
        f.gc_semester="x";
    }

    tmp = {
        "gc_who_are_you":
            {l: "Who are you", d: "\"I am Faculty. I am your counselor and mediator. That is all you need to know. You will not remember me.\"",v:1},

        "gc_blue":
            {l:"Headmaster Blue", d: "\"You are brave to share your feelings. Everyone has violent thoughts at times. We love him, but a part of us hates him. That is how the office of Headmaster sets us free through the grace invested in him. He carries away our darkness. I have confidence your love will overcome your hate. You are forgiven, my child.\"",v:1},
        "gc_quantum":
            {l:"Quantum physics", d: "\"As long as you do your best, you are forgiven. Many students find the course challenging.\"",v:1},
      
        "gc_toilet_time":
            {l: "Toilet time", d: function() {
                d+="You imagine a clenched-teeth emoticon on his face. \"Thank you for your penitence. If you continue your struggle to not loiter on the toilet you are forgiven.\" ";
                
                
            },v:1},
        "gc_nothing_to_say":
            {l:"No", d: function(){
                d+="\"I feel you have something else you would like to discuss.\"";
                f.gc_boyfriend=1;
            }},

        "gc_boyfriend":
            {l:"Boyfriend", d:function() {
                if (!f.rook_boyfriend) {
                    d+="\"Yes, the delicate matter of a boyfriend. Our records indicate you have not dated for two semesters.\"";
                    f.gc_semester=1; 
                    f.gc_dating=1;
                    f.topic = 0;
                } else {
                    //v2
                    d+="\"Yes, the delicate matter of the boyfriend. Ryan Hook, I believe it is? You are to be commended for applying our suggestions. According to the records, you have been spending an appropriate amount of time with him.\" ";
                   f.topic = "rook_boyfriend";
                }
            }},
        "gc_semester":
            {l:"Semester", d:"\"It's not your concern to know how long a semester is.\""},
        "gc_dating":
            {l:"Dating", d: function() {
                d+="\"It is natural for a girl your age to date. We want to foster an environment in which students can find love. And learn. How can we help you find love, my child?\"";
                f.gc_fix_dating_problem=1;    
                f.gc_semester = "x"; 
                d+="<li><span class='deadLink'>I do not want to find love<span></li>";
                f.topic = "dating";
            }},
        "gc_fix_dating_problem":
            {l: "I will fix the problem", d: function() {
                d+="\"Excellent. I think we have accomplished much today.\" The band of warmth continues moving over your face. He sighs. \"There is more. What are you hiding?\"";
                
                i.boyfriend = 1;
                f.topic=0;    
                f.gc_informer = 1;
                if (f.kasparov_excommunicated) {
                    f.topic = "what_else";
                    f.gc_sinatra = "x"; 
                }
                f.gc_kasparov = 1;
            }, topic:"dating"},
        "gc_kasparov":
            {l: "Kasparov", d: "{jump}"},
        "gc_sinatra":
            {l: "Sinatra", d: "{jump}"},
        "gc_informer":
            {l: "Informer", d: function() {
                d+="\"I suspected as much. I don't know how you keep finding them. What information did you seek?\"";
                f.gc_cheat_exam = 1;
                f.gc_increased_school_security = 1;
                if (i.sinatra) {
                    f.gc_sinatra = 1;
                }
            }},
        "gc_cheat_exam":
            {l: "How to cheat on exam", d: "\"Don't lie to me, Suzy. Ease your conscience and tell me the truth.\""}, 
        "gc_increased_school_security":
            {l: "Increased school security", d: function() {
                d+="\"You noticed again. What do you hope to find in this... minutiae? I don't suppose you saw a face. What did the Informer tell you?\"";
                f.gc_no_face=1;
                f.gc_cheat_exam="x";
            }},
        "gc_no_face":
            {l: "No face. Vandalism of library", d: function() {
                d+="\"As I suspected.\" A click. The scanner shuts off and the band of warmth fades. \"The news would eventually spread. I won't fault you for knowing about what will become public. But you need to be open with us. And you should only get news from official sources. Now hold still, straighten your back and {look at me|gc_look_at_him}. That's it. Good posture is important, my child.\" From inside the panel, there is a screetch of dot-matrix printer. A paper comes out of the slot.\" \n\n";
                f.topic = "fin";
                f.gc_discovered_nothing_important = 1;

            }},
        "_gcv2_rook_boyfriend":
            {l: "Rook is a wonderful person", d: "\"I am sure he is.\" ", v:1, topic:"rook_boyfriend"},
        "_gcv2_whats_the_problem":
            {l: "What is the problem", d: function() {
                d+="\"It has been noticed that you spend much time playing Chess. Have you thought about varying your activities?\" ";
                f._gcv2_rook_boyfriend = "x";
                f._gcv2_activities = 1;
                f._gcv2_he_just_care_chess = 1;
            },v:1, topic: "rook_boyfriend"},
        "_gcv2_he_just_care_chess":
            {l: "He likes chess", d: function() {

                d+="\"Indeed. But romantic life should not be a one note melody.\" ";
            },topic: "rook_boyfriend"},
        "_gcv2_activities":
            {l: "Activities", d: function() {
                d+="\"Many students find it beneficial to spend time holding hands or kissing. Remember, child, dating is not only about the quantity, but the quality of the time spent together.\" ";
                    f._gcv2_fix_problem = 1; 
                    f._gcv2_he_just_care_chess = "x"; 
                }, topic:"rook_boyfriend"
            },
        "_gcv2_fix_problem":
            {l: "I will fix the problem", d: function() {
                d+="\"Excellent. I think we have accomplished much today.\" The band of warmth continues moving over your face. He sighs. \"There is more. What are you hiding?\"";
                
                f.topic = "what_else";
            }, topic:"rook_boyfriend"},

        /*
        "_gcv2_sinatra":
            {l: "Sinatra", d: function() {
                d+="\"Ah, the Janitor.\" The scanner clicks off and the band of warmth fades. \"You have discovered he witnessed the incident in the library. We will need to fix that. Straighten your back and {look at me|gc_look_at_him}.\" \n\n";
                f.topic = "fin";
                f.gc_wipe_sinatra = 1;
               back=0;
               lockdown = 1;
               
            }, v:1, topic:"what_else"},
         */   
                
        "_gcv2_kasparov":
            {l: "Kasparov excommunicated", d: function() {
                d+="\"Place your hands above you head! Do not move.\" \n\nThe lights flicker in pattern. Your body becomes limp. Guards burst into the room and catch you before you collapse. They force you upright and position your head to face the camera. \n\n\"How do you know this information?\" says the Counselor.";

                f.topic = "how_know";

               
            }, v:1, topic:"what_else"},
            
        "_gcv2_grandmaster":
            {l: "Grandmaster", d: function() {
                d+="\"Interesting. Residual traces... Guards,\" he says. One of the guards nods and exits the room. The lights strobe faster and the sound of Cicadas reaches a crescendo. The smell of burnt toast wafts through the air. ";
                f.topic = "fin";
       f.counseling_booth = "x"; 
                
        f.grandmaster_memory_wiped = 1;
        f.hrdcr = "ghosts";
        f.know_kas_excommunicated = 0;

        f.end_memory = 1;
        root = 1;

        wipe_memory('kasparov');
               
            }, v:1, topic:"how_know"},
            
        "_gcv2_how_know_rook":
            {l: "Rook", d: function() {
                d+="The band of warmth sweeps your face. \"Tell me the truth,\" he says. ";
                if (f._gcv2_how_know_ethan) {
                    d="\"Don't waste time, Suzy.\" ";
                }

               
            }, v:1, topic:"how_know"},
        "_gcv2_how_know_ethan":
            {l: "Ethan", d: function() {
                d+="The band of warmth sweeps your face. \"Tell me the truth,\" he says. ";
                if (f._gcv2_how_know_rook) {
                    d="\"Don't waste time, Suzy.\" ";
                }
               
            }, v:1, topic:"how_know"},

    };
    //d+=tmp.gc_who_are_you.o;
   talk(tmp);

   if (f.gc_who_are_you == "x" && f.gc_blue == "x" && f.gc_quantum == "x" && f.gc_toilet_time == "x" && !f.gc_nothing_to_say) {
        f.talk=0;
        d+="\nThe band of warmth continues moving across your face. \"Suzy, is there anything else you would like to discuss?\"";
        f.gc_nothing_to_say = 1;
        talk(tmp);
   } 
    
    if (!f.topic && !f.gc_kasparov) {   
        if(f.know_kas_excommunicated) {

            d+="<li><span class='deadLink'>Kasparov excommunicated<span></li>";
        } else {
            d+="<li><span class='deadLink'>Kasparov<span></li>";
           
            if (!f.gc_informer) {
                d+="<li><span class='deadLink'>Informer<span></li>";
            }
           d+="<li><span class='deadLink'>Sinatra<span></li>"
        }
    }
break;


case "gc_sinatra":

                d+="\"As I thought.\" The scanner clicks off and the band of warmth fades. \"Yes, the vandalism of the Library. The news would eventually spread. I won't fault you for knowing about it first. But you should only get your news from official sources, not from the Informers Club. We will need to erase the Janitor's name. Straighten your back and {look at me|gc_look_at_him}.\" \n\n";
                f.gc_wipe_sinatra = 1;
                f.topic = "fin";
               back=0; 
               
break;
case "gc_kasparov":
    d+="\"What is the meaning of this? Why did you say that name? Do not attempt sudden {movements|gc_sudden_movements}. Place your hands on your head.\" \n\nThe lights begin flickering. The sound of cicadas fills the room. A smell of burnt toast."; 
    back=0;
       if (f.thread_intro < 3) {
            f.thread_intro=3;
        }

   f.seen_counselor = 1; 




break;

case "gc_sudden_movements":
    d+="Your body becomes limp. The door to the booth bursts open. Two School Security guards step in and catch you before you slump to the floor. They force you back upright. \"We have some auxiliary questions for you, Suzy\" says the counselor.";
   root=1; 
   f.counseling_booth = "x";
   i.kasparov = 0;
   i.sinatra = 0;
   i.vandalism_library = 0;
   i.informer = 0;
   //wipe_memory('kasparov','sinatra','vandalism_library','informer');
   f.library_start = 1;
   f.asm = 1;
    f.end_memory=1;
    
break;
            
case "gc_look_at_him":
    root=1;
//A
    //
    //back = "start";
    d+="You stare into the orb. The sound of a cicadas fills the room. The lights flicker in a pattern. You smell burnt toast. The flickering quickens until it becomes a strobe. The cicadas reach a crescendo. ";
   f.seen_counselor = 1; 
    
    if (f.thread_intro < 3) {
        f.thread_intro=3;
    }
    inv=0;
    back=0;
    if (f.gc_discovered_nothing_important) {

        wipe_memory('ss','vandalism_library','informer');
    } else {

        wipe_memory('ss','sinatra','vandalism_library','informer');

    }
       f.library_start = 1;
       f.asm = 1;
    f.end_memory=1;
   f.counseling_booth = "x"; 
    
/*
        d+="<li><span class='deadLink'>Kasparov<span></li>";
        d+="<li><span class='deadLink'>Informer<span></li>";
       d+="<li><span class='deadLink'>Sinatra<span></li>"
 */   

break;
case "counseling_booth_stool":
    d+="A perfect cube. The floor around it has faded scuff marks. ";
break;

case "counseling_booth_speaker":
    d+="A pattern of tiny holes radiating outwards to form a circle. Fibonacci spirals. You had to plot this pattern in Math class. ";
    if (!f.guidance_counselor_arrived) {
        d+="It emits a buzz. ";

    }

break;

case "counseling_booth_slot":
    d+="Two inches wide. Small slips of {paper|counseling_booth_paper} litter the floor beneath it.";
     
break;

case "counseling_booth_paper":

if (f.counseling_booth_paper=="x") {
    d+="You have no desire to read any more. ";

} else {
    d+="You pick up one of the papers. It reads: ";
    d+=sq("counseling_booth_paper", ["\"Misdemeanor: disrespecting school authority. Penitence: 3 sessions of detention\"", "\"Misdemeanor: academic negligence. Penitence: 1 session of detention.", "Misdemeanor: travel without proper transit documents. Penitence: 3 sessions of detention.", "Misdemeanor: possession of contraband. Penitence: 5 sessions of detention."]);
    d+=" Underneath is a bar code. ";
}

break;


case "counseling_booth_camera":
    d+="A black orb encasing an unseen pupil.";
break;



case "caf":

    if (f.back=="start") {

        scene_change("Rivalries");    
        f.caf_bridge_chess_conflict=0;
    }



    root=1;
    d+=caf_desc();
    if (f.caf_bridge_chess_conflict != "x" && f.caf_bridge_chess_conflict < 3) {
        d+="\n\nThe  {group|caf_bridge_club} seated next to you is noisy. ";
    }
        switch(f.caf_bridge_chess_conflict) {
            case 1:
            case 2:
                f.caf_bridge_chess_conflict++;
                break;                
            case 3: 
                f.caf_bridge_chess_conflict=4;
                d="The group next to you fall silent. They death-stare at a {boy|caf_bc_conflict_boy} walking down the aisle toward them. ";
                back=0;
                f.caf_bridge_chess_conflict++;
            break;

            case 4:
                f.caf_bridge_chess_conflict++;
            
                d="\"Why'd you smash up the library? Faculty's giving us heat for it.\" says the chessboard boy.\n\n\"We don't smash libraries,\" says monkey-boy. \"We can smash your face though.\"\n\n\"Try it,\" says the chessboard boy. \n\nThe Bridge Club members circle around the table and stand beside monkey-boy. A  jostle and fists fly. One of the Bridge Club members lands on top of the table. Food platters and utensils careen everywhere.\n\nYou {shuffle over|caf} and continue eating. ";
                back=0;
            break;
            case 5:
                d+="\n\nThe Chess Club and Bridge Club members are having a {fight|caf_bc_fight_chessboard}. ";
            break;
            case 6:
                f.caf_bridge_chess_conflict++;
                d="The brute throws his wrecking ball of a fist at Monkey-boy. Monkey-boy ducks and the brute's fist meets you in the face. Everything {spins|caf_bc_fight_focus}.";
                f.caf_bridge_chess_conflict = "x"
                back=0;        
            break;
    }

break;

case "caf_windows":
    d+="They extend {high up|caf_ceiling} and tower over the students like " + oneoff_link("cathedral|windows_cathedral") + " windows. Golden shafts of {light|caf_outside} filter though the glass. "; 
break;


case "caf_outside_dome_windows":
    d+="Tall and narrow like " + oneoff_link("cathedral|windows_cathedral") +
    " windows. The outside is fragmented and golden milky, lacking definition."        
break;


case "windows_cathedral":
    d+="You learned about Cathedrals in History class. Flying buttresses. Stained-glass windows. Ceilings painted with clouds, stars, and rocketships. High ceilings because people wanted to reach for the stars to find aliens. All of this was covered last exam.";

/*
    items = [
        50,
        function() {

            $("#owrap").show().removeClass().addClass("fct");
            $("#owrap").css('opacity','0');
            $("#owrap").animate({opacity: 1},300).delay(2000);
            $("#oc").css('opacity','0');
            $("#oc").html("Ancient centers of learning");
        },300,
        function(){
            $("#oc").animate({opacity: 1},250).delay(2000).animate({opacity:0},250);
        },2500,function(){
            $("#oc").css('opacity','0');
            $("#oc").html("Rising like mushrooms after the rain");
            $("#oc").animate({opacity: 1},250).delay(4000).animate({opacity:0},250);
        },4500,function(){
            $("#oc").css('opacity','0');
            $("#oc").html("Freeing us from the stone age");
            $("#oc").animate({opacity: 1},250).delay(4000).animate({opacity:0},250);
        },4500,
        function() {

            $("#owrap").animate({opacity: 0},250).delay(2000).animate({opacity:0},250);
        }, 2500,
        function(){
            $("#owrap").hide();
     
        },10
    ];

    timer(items);
*/

break;
////
//
//
//

case "caf_bc_fight_focus":

                d+="The world refocuses. Lunch tray on the floor. Food in your hair and clothes. Monkey-boy grapples with the brute, hanging off his neck and kicking him. \n\n{School Security Guards|caf_bc_conflict_ss} rain from the ceiling.  "; 
                f.caf_bridge_chess_conflict = "x";
                back=0;
break;
case "caf_bc_fight_chessboard":
    f.caf_bridge_chess_conflict++;
    d+="The small boy has wields his chessboard above his head, clubbing people with it. "; 
break;
case "caf_bc_conflict_ss":
    lockdown=1;
    d="They slide down on spider cables. Armored uniforms and riot gear. \n\nYou {stand up|detention_after_caf_fight}. ";
    f.caf_bridge_chess_conflict = "x";
break;
case "caf_bc_conflict_boy":
    d+="A small boy with close-shaved hair and high-waisted {pants|caf_bc_conflict_boardmaster_pants} swaggers toward them. His jacket is turned inside out and he has a large chessboard strapped to his back. \n\nA brick wall of a {brute|caf_bc_conflict_large_boy}  walks several steps behind him. \n\nThe chessboard boy surveys each of them in turn. \n\nMonkey-boy meets his gaze. \"Got a problem?\" \n\n\"No problem. But why are you gentlemen giving us problems? We don't appreciate problems.\"  ";  

    back=0;
break;
case "caf_bc_conflict_boardmaster_pants":
    d+="His socks extend up over the legs of his pants. ";
break;
case "caf_bc_conflict_large_boy":
    d+="Wireframe glasses and a bowtie. His jacket is turned inside out and his socks are pulled over his pant legs. He crosses his arms. "; 
    f.caf_bridge_chess_conflict=4;
break;
case "caf_bridge_club":
    d+="Bridge club members. Back slapping and laughter. One of them squats on the bench like a monkey, doing little hops and rocking the table. They wear red scarves. A {playing card|caf_bridge_playing_card} peeks from the breast pocket of their uniforms. The boys leave one side of their shirts untucked. The girls have the sides of their heads shaved. ";
                 
                 
        if (!f.caf_bridge_chess_conflict) {f.caf_bridge_chess_conflict++;}
    
break;

case "bridge_playing_card":
case "caf_bridge_playing_card":
    d+="Always the Queen of diamonds. ";
break;
case "caf_carousels":
    d+="The lunch trays rattle on the conveyor belts. Used trays sink down to the {lower floors|caf_lower_floors}. "; 
break;

case "caf_outside":
    d+="A thick, pulsating fog distorts everything outside. Light passes cleary through the fog but you cannot see anything beyond it. ";
break;

case "caf_ceiling":
    d+="High up is a tangle of catwalks, girders, pipes and cables. Spaced at regular intervals are {cameras|caf_cameras}. ";

break;
case "caf_students":
    d+="Idle conversation. The drone of thousands of students. ";
break;
case "caf_cameras":
    d+="Large black orbs hang from the ceiling like strange fruit. ";
break;

case "caf_lower_floors":
    d+="The kitchen lies below. Fire, fury and people in white {hazmat|caf_chefs} suits. ";  
break;

case "caf_chefs":
    d+="Chefs with tall white toques scurry about. Some carry armfuls of food. Others balance stacks of trays. They have monitors for heads and emoticons for faces. ";
break;




//////////////////////
case "detention_after_caf_fight":
    root=1;
    f.thread_chess_club = 1;
    
    scene_change("Detention");
    i.wolff = 1;
    d+=oneoff_link("Officer Wolff|_detention_ss_officer") + " straddles a small foldable chair, staring at the three of you. Behind him is a large " + oneoff_link("mirror|_detention_after_fight_mirror") + ". \n\nYou sit in a " + oneoff_link("classroom desk|_detention_desk") + ", holding a bag of ice to your cheek. To your left is the " + oneoff_link("monkey-boy|_detention_monkey_boy") + ". To your right is ";
    if (i.rook) {
        d+="{Rook|_detention_rook} and " + oneoff_link("Ethan|_detention_boardmaster") + ".";
    } else {
        d+= "the {brute|_detention_rook} and his shorter " + oneoff_link("friend|_detention_boardmaster") + "."; 
    } 
    
    if(f.detention_after_caf_fight==0) {
        d+="\n\nWolff shakes his head. \"Incorrigible,\" he says. ";
    }
    f.detention_after_caf_fight=1;
    if (!f.end_memory || !i.rook) {
        no_exit_memory = 1;
    }
    
break;

case "_detention_desk":
    d+="Your legs are cramping. They purposefully made them even smaller for the detention rooms. ";
break;



case "_detention_ss_officer":
    d+="He wears a black School Security uniform with a red armband. On the armband are two interlocking S shapes. His {badge|wolff_badge} has the name 'Wolff' inscribed on it. A physical eyepatch covers the eye of his angryface emoticon. His monitor is cracked and the lines spiderweb out from the eyepatch. "; 

break;
case "_detention_rook":
    d+="His arm is bandaged and in a sling.  ";
    if(f._detention_sorry_face && !i.rook) {
        d="\"Nice to meet you, Suzy. My name is Hook. Ryan Hook. But you can call me Rook. That's my friend Ethan,\" he says.  \n\nWolff stands up and strikes him on the cheek. \"Silence!\"";
        i.rook=1;
        f.dorm_state="rkdrm";
        
        f.caf = "x";
        f.end_memory = 1;
        f.seen_rook = 1;
    } else if (!i.rook) {
        d+=oneoff_text("_detention_sorry_face", "\"Sorry about your face,\" he says. \n<li>{Sorry about your arm|_detention_sorry_arm}");
        back=0;
   } else {
        d+="He leans back in his chair and smiles at you. ";
        f.end_memory = 1;
            f.dorm_state="rkdrm";
   }
break;
case "_detention_sorry_arm":
    d+="\"There is to be no conversation!\" shouts Wolff. ";
break;
case "_detention_monkey_boy":
    d+="He looks away nervously. His leg is in a cast. Crutches lay on the floor next to his desk. ";
break;
case "_detention_boardmaster":
    d+="He slouches in his chair, eyes closed. There are bruises on his face. A large metal chessboard leans against his chair. ";
break;
case "wolff_badge":
    d+="His name and underneath it an insignia of a golden eagle with four chevrons below it. ";
break;

case "_detention_after_fight_mirror":
    d+="It covers the entirety of the wall. They watch from the other side. "; 
break;











////////////////////////////library/////////////////////////////////
case "library_start": 
    root = 1; 
    if (f.back=="start") {
        f.library_counter = 0;

        if (!f.seen_vandalism) {
            scene_change("Firmament");
        }
        
    }
        
    switch(f.library_counter) {
        case 0:
            d+="The {moving walkway|library_moving_walkway} propels you through a forest of book {shelves|library_thick_shelves}. ";
            f.library_counter = 1;
        break;
        case 1:
            d+="Your path zig-zags. Even when you look straight down the aisles, you cannot see too far ahead without your line of vision meeting a wall of {books|library_books}. {Students|library_walkway_students} drift past you, moving in the opposite direction.";
            f.library_counter = 2;
        break;
            
        case 2:

            d+="Your path twists again. The adjacent shelves have spaces like window frames with {Decorative objects|library_decoratives} nested inside them. Ahead of you, the walkway passes through a large {opening|library_shelf_opening} in a shelf. ";  
            f.library_counter = 3;
        break;

        case 3:

            d+="The walkway tunnels through a series of large shelves. You {step off|library_study_area} the walkway. The sky opens up. ";
        break;
    }
break


case "library_shelf_opening":
    d+="Beyond the opening is another shelf with another opening cut into it. The walkway burrows through several layers of shelf like a train traveling through a mountain.  ";
break;

/*
 You turn your head to the sides and see the aisles flicker past. Each time a glimpse students reaching for books, climbing ladders or standing on plaforms or inter-shelf bridges overhead.*
 * */

case "library_walkway_students":
    d+="They carry armfuls of books and wear sheep-blank expressions. Traveling in silence, according to regulation and etiquitte. ";
break;

// The dome and its outer edges are visible now. The shelves show greater variance in size and form a landscape of {hills and valleys|library_shelf_variance}. The dome is fully visible now. ";
//
//
case "library_shelf_variance":
    d+="Some shelves are shoulder-height. Some are several dormitories high, complete with ladders and connecting walkways higher up. Shelves become incrementally larger and smaller giving an undulating hill and mountain effect."; 
break;
//area 1
//
case "library_decoratives":
    d+="There are some malformed clay {sculptures|library_sculptures}, some potted {plants|library_plants}, oil paintings of early {Faculty|library_early_faculty} members and antique toy vehicles. ";
break;

case "library_early_faculty":
    d+="<em>Was it before your time?</em> Their clothing looks antiquated, as they do in all the old paintings.";
break;

case "library_sculptures":
    d+="Randomly selected student work from Art class.";
break;

case "library_plants":
    d+="Mostly cactii or bonsai trees. You catch glimpse of a pepper plant. They reserved the bigger, leafier plants for the planters on the tops of the shelves.";
break;
case "library_thick_shelves":
    d+="Thick and tall, overflowing with {books|library_books}. Only if you look straight up can you see the {glass dome|library_sky}. Walkways and movable ladders travel up and between the shelves. ";
break;

case "library_books":
    d+="<em>How many have you read and forgotten?</em>";


break;

case "library_moving_walkway":
    d+="You stand on one of the main traffic arteries traveling to and from the {outer edges|library_outer_edges}. ";
    
    //Your path gently zig-zags through the shelves. {Students|library_walkway_students} drift past you, moving in the opposite direction.";

break;

case "library_outer_edges":
    d+="You'll reach the terminus soon. Hopefully Security hasn't sealed off too wide an area. ";
break;


case "library_sky":
    d+="Beyond the leaves of the planters at the top of the shelves are the glass panels of a geodesic dome. Light shines through the leaves. A mosaic of light and dark plays on the ground. ";

break;



/////////////////////////////////////////////
case "library_study_area":
    if (f.back=="library_start") {
        //scene_change("Cracks in the Firmament");
    } else if(f.back=="library_crime_scene") {
        d+="<div class='transition'>You retrace your steps and follow the path of the stream.</div>";
    }
    root=1;

    d+="The domed {ceiling|library_dome} arches overhead. You stand in an area of low shelves, sparsely used {couches|library_couches} and study {cubicles|library_cubicles}. Behind you is the {terminus|library_terminus} of the moving walkway. Ahead of you, the bookshelves form {undulating|library_hills} hills and valleys. \n\n{Streams|library_streams} of water zig-zag through them and cascade downwards in measured increments toward the {edge|library_dome_edge} of the dome. ";
    if (f.seen_vandalism) {
        f.end_memory = 1;

    }
break;

case "library_couches":
    d+="Cement blocks with thin cushions placed on top of them. Repositionable reading lamps extend out of their backs. ";

break;

case  "library_cubicles":
    d+="Glass cubicles. The students inside them are pixellated.";
break;

case "library_streams":
    d+="Caculated paths and ninety degree turns. From a distance, the water appears placid and motionless. Closer up, you see a gentle current. ";
break;

case "library_hills":
    d+="The shelves show greater variance in size in this area of the library. Shelves adjacent to each other become successively wider and larger or smaller and narrower, giving the appearance of hills and valleys. Some shelves start at shoulder height and end several dormitories high. {Leaves|library_planters} sprout from the tops of the book shelves. ";

break;

case "library_planters":
    d+="The tops of the shelves are filled with planters. You run your fingers through the plastic leaves on the low-lying shelves. <em>Soothing.</em>"; 
break;

case "library_terminus":
    d+="Some students step off the walkway and make their way to the couches or desks. Other students step onto the walkway traveling back toward the tunnel in the shelves. ";

break;




case "library_crime_scene":
    root=1;
    if (f.back=="library_dome_edge") {
       d+="<div class='transition'>After some walking, you arrive at the scene of the incident.</div> "; 

    }
    d+="A series of {shelves|library_shelves_knocked_over} lie knocked over like " + oneoff_link("dominoes|library_dominoes") + ". The last shelf leans against the side of the {dome|library_dome}. Books, smashed pottery and plastic plants lie scattered everywhere. The area is cordoned off with police tape and {School Security|library_ss} officers crawl through the debris like ants. A few {students|library_crime_scene_students} loiter behind the police tape, watching the proceedings.\n\nThe stream ends here by feeds into a trench and moat beside the edge of the dome. In the other direction is the {study area|library_study_area}.";
    f.seen_vandalism = 1;


break;

case "library_crime_scene_students":
    d+="Some whisper to each other. Most stare at the scene in silence. ";
break;
case "library_dominoes":
    d+="If the Domino club had more power and clout, the Faculty would have blamed them for this incident. But the Dominoes are not troublemakers and this is more than simple vandalism.\n\n <em>How was Kasparov able to do this?</em>";

break;

case "library_dome_edge":
    d+="You follow the {path|library_crime_scene} of one of the streams and forge your way into the shelves. ";
    back=0;

break;

case "library_dome":
    d+="A geodesic dome with triangular panels. The glass panels have the texture and appearance of ice, obscuring the outside but still transmitting bright shafts of light into the library. ";
    if(f.root=="library_crime_scene") {
        d+="\n\nThe edge of the dome meets the floor here. Next to the edge of the dome is a {trench|library_dome_trench} about two dormitories deep. At the bottom of the trench is a moat. A massive shelf has {leans|library_shelf_leans} against the dome at a 45 degree angle. ";
    }


break;
case "library_shelf_leans":
    d+="The part of the shelf touching the glass is bruised and bent. The dome appears undamaged. ";

break;
case "library_dome_trench":
    d+="Railings line the edge of it. ";
break;
case "library_shelves_knocked_over":
    d+="The starting smallest shelf is slightly higher than you are. The next few shelves become successively larger. The largest one at the end of the sequence is at least three dormitories high and leans against the edge of the {dome|library_shelf_impact}. ";

break;
case "library_ss":
   d+="They examine everything with oversized magnifying glasses. Others carry metal rods with a flat disc at the end, listening carefully to the crackle of their scanning equipment. \n\n"; 
   
   if (i.wolff) {
       d+="Officer Wolff stands apart from the rest. ";
       } else {
           d+= "One officer stands apart from the rest. "; 
       }
       d+="He carries a pair of " + oneoff_link("binoculars|library_wolff_binoculars") + " and examines the point of impact between shelf and glass. His back is turned to you. ";  


break;

case "library_wolff_binoculars":
    d+="He lowers his binoculars and turns around. On his monitor is an angryface emoticon. ";
    if (!i.wolff) {
        d+="His face is cracked. A physical eyepatch hangs over one of his digital eyes. ";
    } 
    d+="His one-eyed stare bores into you. \n\n Another officer approaches and salutes him. They exchange words and he returns to examining the shelf. ";
    f.end_memory = 1;

break;

case "library_shelf_impact":
    d+="The glass panel seems undamaged. The edge of the shelf touching the glass is bent and bruised. ";

break;



case "under_stairs":
    root=1;
    if (f.back=="start") {
        f.under_stairs_arcadia_youth_timer=0;
        f.pog_finished=0;

    }
    scene_change("Arcadia Youth");
    if (f.pog_finished) {
        d+="You stand in the space under a large set of stairs. The set of stairs ends at a corridor. Students drift to and from class. ";
        if (!f.under_stairs_kissers_gone) {
            d+="Near the corridor, two students press their faces together, {kissing|under_stairs_kissing}. ";
            
            }
    } else {
    d+="A small " + oneoff_link("crowd|under_stairs_crowd") + " has formed in the space underneath a large flight of " + oneoff_link("stairs|under_stairs_stairs") + ". They encircle and cheer on {two students|under_stairs_2_students} playing " + oneoff_link("Pogs|under_stairs_pog_game") + ". \n\nA {student|under_stairs_pogwatch} stands near the edge of the flight of stairs, watching the corridor. Next to him, two students press their faces together {kissing|under_stairs_kissing}. ";  
    
    }


    switch(f.under_stairs_arcadia_youth_timer) {
        case 0:
        case 1:
        case 2:
                f.under_stairs_arcadia_youth_timer++;
            break; 
        case 3:
            d="The boy standing by the corrider whistles. \"Teacher's pets,\" he shouts. \n\n\"How many?\" says monkey-boy. \n\n\"Three.\" He throws his slammer and pieces scatter.";
                f.under_stairs_arcadia_youth_timer++;
        break;

        case 4:
            d="\"Almost on us,\" says the boy at the corridor. \n\nThe monkey-boy and the tall girl continue playing their game.";
                f.under_stairs_arcadia_youth_timer++;
        break;

        case 5:
            d="Three students with red {armbands|arcadia_youth_armbands} arrive at entrance of the niche. Two boys with undercut {hair|arcadia_youth_boys_hair} combed to the side. A blond girl with hair in a tight {ponytail|arcadia_youth_girls_hair}. Her hair stretches her features backwards. \n\nShe surveys the scene and pushes past you to the center of the crowd. \"Care to explain?\" she says. \n\n\"Homework. Study group,\" says monkey-boy.";
                f.under_stairs_arcadia_youth_timer++;
        break;

        case 6:
            d="\"You should all be heading for class,\" she says. \n\nHe {throws his slammer|under_stairs_monkey_ignore} and the pieces scatter and flip. ";
                f.under_stairs_arcadia_youth_timer++;
        break;

        case 7:
            d="The players finish their game and gather their {winnings|pog_battle_winnings}. The boy standing by the corridor comes over and slaps monkey-boy on the back. The crowd disperses.";
                f.under_stairs_arcadia_youth_timer++;
        break;


        case 8:
            f.under_stairs_arcadia_youth_timer++;
            break;
        case 9:

            f.under_stairs_arcadia_youth_timer++;
            break;
        case 10:
            d+="\n\nTwo {School Security|under_stairs_after_pog_ss} officers stand by the corridor. One of them casually taps a {nightstick|under_stairs_nightstick} on his shoulder. ";
            f.under_stairs_arcadia_youth_timer++;
        break;

        case 11:
            d+="\n\nThe guards walk away.";
            f.under_stairs_arcadia_youth_timer++;
        break;
    }
    if (f.under_stairs_arcadia_youth_timer > 2 && f.under_stairs_arcadia_youth_timer < 7 ) {
        root = 0;
    } 

break;
case "under_stairs_nightstick":
    d+="A telescoping rod with perpendicular handle. Uncharged. ";
break;
case "pog_battle_winnings":
    d+="A respectable pile. He stuffs the pieces into his bulging pockets. ";
break;
case "arcadia_youth_boys_hair":
    d+="Sides close-shaved. Tops long, slicked with wax and combed to one side.";
break;
case "arcadia_youth_girls_hair":
    d+="Tight and slick. Every strand in place.";

break;
case "under_stairs_monkey_ignore":
d+="\"Security will hear of this.\" She swivels around to look at the crowd. \"Glory to Arcadia,\" she says. \n\n\"Glory to Arcadia,\" a few mumble. She and her companions march away into the corridor. \n\nMonkey boy drives his slammer into the pile. People flinch. A piece lands at your {feet|under_stairs_pog_feet}. \"Let's finish this. We have time before their teeth arrive.\" "; 
        f.end_memory=1;
        f.pog_finished=1;
        f.seen_pog_game=1;
        f.under_stairs = "x";
         
break;

case "under_stairs_pog_feet":
    d+="It has a emoji of a moon face wearing a monocle on it. ";
break;
case "under_stairs_after_pog_ss":
    d+="Straight-face emoticons with a slightly tilted mouth. They glance at you standing in the space under the stairs, straighten their black uniforms then stroll away. ";
break;
case "arcadia_youth_armbands":
    d+="A red strip of cloth, slightly frayed. The letters <em>A.Y.</em> are hand-stitched on it. ";
break;

case "under_stairs_money_ignore":
    d+="He nods at the tall girl, motioning her to continue. She throws down her slammer. They crouch and peer at the results.";
break;
case "under_stairs_pog_game":
    d+="Rare and valuable pieces hang in the balance. Monkey-boy eyes the Pogs hungrily. ";
    d+=oneoff_text("under_stairs_money_boy_grunt_squeak", "He grunts and throws his slammer. The pieces scatter and flip. ");
break;
    case "under_stairs_stairs":
        d+="It rises from the ground, twisting and curving upwards. There is a continuous patter of footsteps. In between the cracks you see glimpses of legs and feet. ";
    break;

    case "under_stairs_pogwatch":
        d+="He nonchalantly chews gum as he scans the corridor. A {playing card|bridge_playing_card} peeks from the breast pocket of his uniform. ";
        d+=oneoff_text("pogwatch_irritated_kissing", "\n\nThe kissing couple bump into him. He scowls and nudges them away. ");
        
    break;
    case "under_stairs_2_students":
        d+="A {lanky student|under_stairs_monkey_boy}, does little monkey hops when throwing his slammer. His opponent is a {tall girl|under_stairs_giraffe_girl} wearing a gym uniform. ";

    break;

case "under_stairs_kissing":
    d+="He runs his fingers through her hair. She stands on one leg like a flamingo.  ";
    if (!f.under_stairs_kissing_lips) {
        d+="Their faces press close together but their ";
        d+=oneoff_link("lips|under_stairs_kissing_lips") + " do not touch.  They intermittently glance around at the crowd or {upwards|under_stairs_cameras} toward the corridor ceiling. ";
        
    } else {
        d="He has his back turned toward you. They have their fingers in each other's hair. ";
    }

break;

case "under_stairs_cameras":
    d+="There is a camera just out of your line of sight, but not out of theirs. You stand in one of the few niches outside of their gaze. ";
break;

case "under_stairs_kissing_lips":
    d+="They see you looking and press their faces closer. Their noses touch and they stiffen.  They shuffle like penguins, turning so his back faces you. ";
break;
   


    case "under_stairs_monkey_boy":
        d+="He wears a red scarf and a {playing card|bridge_playing_card} peeks from the breast pocket of his school uniform.";

    break;

    case "under_stairs_giraffe_girl":
        d+="She towers above the other students. A long giraffe-like neck. She holds a plastic bag full of Pogs and plays with a cool detachment. ";

    break;


case "panopticon_drawbridge_unfurl":
    d+="Narrow metallic slats form a bridge over the moat. ";
break;
case "asm":
    if (f.back=="start") {scene_change("The Fallen"); f.asm_c=0; }
    root=1;

    f.asm_c++;

    d+="An army of {students|asm_thousands_students} faces the {panopticon tower|panopticon_tower}. "; 

    if (!f.asm_empty_dorms) {
        d+="At the boundaries of the {courtyard|asm_courtyard} is a wall of " + oneoff_link("dormitories|asm_empty_dorms") + ". ";
    }
    d+="\n\n{Screens|asm_blimps} hover in the air above the students. Overhead is the {dome|asm_dome}. ";
    if (f.asm_c == 2) {
        d+="\n\nA procession of {officers|asm_officers} and {students|asm_procession_students} in orange straightjackets moves its way through the students toward the tower. ";
   
    } else if (f.asm_c == 3) {
        d+="\n\nThe procession arrives at the base of the tower. The drawbridge {unrolls|panopticon_drawbridge_unfurl} like a carpet and they cross the trench and moat."; 
        f.panopticon_bridge_unfurled = 1;
    } else if (f.asm_c == 4) {
        d+="\n\nThe School Security officers lead and position the captive students into a {circular|asm_circular} formation around the tower. ";
    } else if (f.asm_c == 5) {
        d="The anthem finishes. The screens flicker and become the disembodied emoticon face of the Headmaster. \n\nHe taps on the microphone and clears his throat.  \"Students. Friends. Sons and daughters of Arcadia. Most of you have paid attention in class. Most of you have done your homework.  Most of you have shown extraordinary school spirit. You are to be commended!\" \n\nA smattering of {applause|asm_applause}, mostly from the {Arcadia Youth|asm_arcadia_youth}. Someone beside you {yawns|asm_yawn}.";         

    } else if (f.asm_c == 6) {

        d="His emoticon glitches to a frown. \"However, a few of you threaten the peace and public safety of our school.\" The screens zoom into the {gym-bagged|asm_gym_bagged_heads} students' heads. \"You all read the {school paper|asm_school_paper}. I speak of the library incident. Delinquency will not be tolerated!\" ";
    } else if (f.asm_c == 7) {
        d="The headmaster clears his {digital throat|asm_electronic_throat}. \"As stated in chapter five paragraph six of the student handbook, we reserve the right to meet delinquency with kinetic force. Those we capture face solitary detention and reprogramming.\" His emoticon changes to a sad face with a {tear|asm_headmaster_tear}. \"This pains me. Sons and daughters, know that we love you. But we have a zero-tolerance policy! Do your duty and report delinquency today. Make Mother Arcadia proud!\"  \n\nMore applause from the Arcadia Youth."; 
    } else if (f.asm_c == 8) {
        d="\"It is time for our morning exercises. We will begin with stretches.\" Cheerful music erupts over the loudspeakers. \n\nA student beside you takes the gum out of his mouth and puts it behind his ear. Students shake and loosen their bodies.";

        f.seen_assembly = 1;
        f.asm = "x";
       f.end_memory=1; 
    }

    if (f.asm_c < 4 && !f.asm_anthem) {
        d+="\n\nThe school " + oneoff_link("anthem|asm_anthem") + " plays over loudspeakers. ";
    }

break;
case "asm_thousands_students":

    d+="They are arranged in {groups of fifty|asm_groups_students} and form concentric rings radiating from the {panopticon tower|panopticon_tower}. ";

break;
case "asm_headmaster_tear":
    d+="It hangs motionless in mid-drop. The screen glitches.";
break;
case "asm_anthem":
    d+="Rousing and infectious. Performed on theremin and composed by the Head Music teacher. ";
break;
case "asm_courtyard":
    d+="A wall of " + oneoff_link("empty dormitories|asm_empty_dorms") + " stacked and open like the rooms of a dollhouse forms a ring around the panopticon tower. ";
break;
case "asm_dome":
    d+="A geodesic dome fills the sky. A network of catwalks and structural supports cover the area above the screens. School Security snipers armed with {shock rifles|asm_shock_rifles} watch the crowd from above. ";
break;

case "asm_shock_rifles":
    d+="You saw someone get shot once. His body tensed up straight as a ruler then he collapsed to the floor in spasms. They said he was dragged twitching all the way to the nurses office. ";
break;
case "asm_empty_dorms":
    d+="Emptied of students. Everyone is in the courtyard. It takes some time, but you locate your dormitory. <em>A student stands inside your {room|asm_someone_inside_room}.</em>  You rub your eyes and blink.  "; 

break;

case "asm_someone_inside_room":
    d+="Light glints off the glass and the figure is gone.";
break;
case "asm_reprogramming":
    d+="<em>What would you become after reprogramming?</em>";
break;

case "asm_electronic_throat":
    d+="They all have their idiosyncracies, even the Headmaster. ";
break;
case "asm_school_paper":
    d+="They didn't officially name any group. The Chess Club took the blame. <em>Was it them?</em>";
break;
case "asm_gym_bagged_heads":
    d+="They sloutch and kneel on the floor. A guard jabs one of the students and he straightens his back.";
break;
case "asm_circular":
    d+="The captive students and officers stand on a slightly raised platform. They are arranged in regular intervals around the tower.";
break;
case "asm_applause":
    d+="You don't feel inclined to applaud.";
break;

case "asm_yawn":
    d+="Some students fiddle with their hair or the customizations of their uniforms. Others stare blankly at the screens. ";
break;

//The dormitories are empty. It now watches the crowd assembled in the courtyard. 

case "asm_groups_students":
    d+="Neatly arranged with a gap of space between each student. At the front of each group are three members of {Arcadia Youth|asm_arcadia_youth}. ";
break;

case "asm_arcadia_youth":
    d+="Backs straight. School uniforms starched and pressed. Red armbands with the letters \"AY\" hand-stitched on them.";
break;
case "asm_blimps":
    
        switch(f.asm_c) {
            case 6:
                d+="The screens show video of the officers positioning the students around the tower.";    

            break;
            

            default:
                if (f.asm_c < 4) {
                    d+="Like bedsheets hanging on a line and held aloft by drones. They display different perspectives of the {procession|asm_procession_students} ocassionally broken by some aerial, some closeups and {crowd shots|asm_crowd_shots}. ";
            //        d+="Five students wearing flourescent orange gym uniforms trudge toward the tower, guided by School Security Officers. Their straightjacket uniforms have buckles and extra long sleeves tied around the back. Their heads are covered with gym bags, drawstrings tightened against their necks. Hung around their necks are signs which read \"delinquent\". ";

                } else if (f.asm_c > 6) {
                        
                        d+="The screens display a single emoticon, representing the emotional state of Headmaster Blue. ";
                } else {

                        d+="They display different perspectives of the assembly. Some aerials, some closeups and {crowd shots|asm_crowd_shots}. ";
                }
    }

break;

case "asm_crowd_shots":
    d+="When the cameras zoom in on them, some students make faces or club symbols with their hands. The Arcadia Youth remain expressionless. ";
break;
case "asm_procession_students":

d+="Five students wearing orange {straightjacket|asm_straightjacket} gym uniforms trudge toward the tower. Their heads are covered with gym bags with  drawstrings tightened around their necks. Hung around their necks are {signs|asm_signs} which read \"delinquent\". \n\nThey are guided and prodded by School Security {officers|asm_officers}. ";

break;

case "asm_signs":
    d+="White bristol board. Two holes made with a hole puncher and a string put through the holes. The letters are written with EPH marker. ";
break;
case "asm_straightjacket":
    d+="Cut like the regular gym uniform, except for the florescent orange color, buckles and long sleeves tied around the back. ";
break;
case "asm_officers":
    d+="Wolff leads the procession. Each student is guided by two officers. One officer stands beside the student with a hand his shoulder. The other officer brandishes a charged {nightstick|showdown_intro_nightsticks}. ";

break;


///////////////////////////////////////
case "showers":
    root=1;
    if (f.back=="start") {
        f.showers_timer=0;
        f.showers_lockers_lockers=0;
        f.showers_lockers_students=0;
        f.showers_lockers_curtain=0;
        f.showers_lockers_chute=0;
       
        f.showers_lockers_revealed_chalk=0;
        f.showers_towel_in_cubbyhole=0;
        f.showers_lockers_find_yours=0;
        
        scene_change("An Exchange");



        
    }
    d+="A forest of {columns|showers_columns} shrouded in vapor. Pipes, faucets and shower heads branch out the sides of the columns. Other columns are lined with " + oneoff_link("cubbyholes|showers_towel_in_cubbyhole") + ". Water patters on tile. {Boys and girls|showers_students} sit on " + oneoff_link("stools|showers_stools") + ", lathering and scrubbing. ";

    if (f.showers_towel_in_cubbyhole) { //if towel already put in cubbyhole

        f.showers_timer++;

    } 

    if (f.showers_timer==0) {
    
        d+="\n\nYou cradle your " + oneoff_link("towel|showers_towel") + ", careful not to let the contents spill out. A key dangles from a rubber {bracelet|showers_bracelet} on your wrist. ";
    
    } else if (f.showers_timer < 3) {
    
        d+="\n\nYou sit on a stool. Suds and rivulets of water run down your  {hair|showers_your_hair} and {body|showers_your_body}. You keep your back to the shower so the cubbyhole is within view. ";
    } 
     else if (f.showers_timer==3) {
        d+="\n\nThe blonde {boy|showers_delivery_boy}, turns off his shower. Dripping wet, he ambles toward the cubbyholes, footsteps spattering on tile.  ";

    } else if (f.showers_timer==4) {
        lockdown=1;
        d="The boy reaches into your cubbyhole and takes your towel. He shuffles away. His towel remains in the cubbyhole beside yours. <p class='back'>{Return|showers}</p>";

    } else if (f.showers_timer==5) {
        d="";
        f.node="showers_lockers";
        nodes("showers_lockers");
    }

    if (f.showers_timer == 5) {
        no_exit_memory = 1;
    }
break;

case "showers_bracelet":
    d+="A number is engraved on the key. It matches a corresponding {cubbyhole|showers_towel_in_cubbyhole}. ";

break;
case "showers_your_body":
    d+="Supple, pristine skin, except for the tips of your fingers wrinkled from moisture. ";
    
break;

case "showers_your_hair":
    d+="Limp dark strands perpetually at shoulder-length. Perhaps if you joined a club it would change.";

break;
case "showers_delivery_boy":
    d+="He drifts along as if sleepwalking until he arrives at the cubbyholes. <em>Is it him?</em> \n\nYou tilt your head to rinse your hair and scan your other neighbor. The girl struggles with a strand of hair caught in her scrub brush. "; 
    
break;

case "showers_blonde_boy_showering":
    d+="He picks at the dirt in his toenails. ";
break;

case "showers_girl":
    d+="She scrubs her back with a brush. ";

break;
case "showers_stools":

d+="Numbered concrete cubes extruded from the floor. ";

break;

case "showers_towel":
    d+="Rolled and bunched up like an ugly cabbage. Your payment lies inside. ";

break;

case "showers_students":

    d+="They wipe and scrub in silence. Lost in thought and each in their invisible bubble. ";
break;


case "showers_above":
    d+="Seen through the steam the lights on the ceiling are fuzzy golden orbs. ";

break;

case "showers_columns":

    d+="The tops disappear into the vapor {above|showers_above}. Some columns have faucets and shower equipment. other columns have a series of " +  oneoff_link("cubbyholes|showers_towel_in_cubbyhole") + " for storing towels. ";
break;

case "showers_towel_in_cubbyhole":

    d+="You find the cubbyhole with your number and ease your towel inside. You sidestep past several students to find your place between a {blonde boy|showers_blonde_boy_showering} and a {girl|showers_girl} with long hair. You spurt some shampoo from the dispenser and turn on the shower. ";
    f.showers_towel_in_cubbyhole = 1;

break;


///////////////
//
case "showers_lockers":
    root=1;

    if (f.showers_lockers_revealed_chalk) {
        f.showers_timer++;
    }
    scene_change("Contraband");

    d+=oneoff_link("Lockers|showers_lockers_lockers") + " and benches. " + oneoff_link("Students|showers_lockers_students") + " in various states of undress. On the far wall is a doorway covered with a transparent " + oneoff_link("curtain|showers_lockers_curtain") + ". {Gates|showers_lockers_gates} stand near this end of the room. Towel {chutes|showers_lockers_chute} rise out of the floor at regular intervals. ";



    if (f.showers_lockers_revealed_chalk && f.showers_timer < 9) {
        d+="\n\nYou stand by your open locker and dry yourself with the towel belonging to the blonde boy. ";

    } else if (!f.showers_lockers_revealed_chalk) {
        d+="\n\nWater drips from your hair.  You cradle the rolled up {towel|showers_lockers_towel} belonging to the blonde boy. ";
    }


    if (f.showers_timer==7) {
 
        d="A janitor carrying a broom steps through the gates. Students {scramble|showers_lockers_scramble} to get dressed and cover themselves. He displays a {grumpy-face|showers_lockers_janitor_grumpy} emoticon on his screen. ";

    } else if (f.showers_timer==8) {
        d="You nudge your {locker|showers_locker_nudge} shut and wrap the towel around your body. \n\nThe janitor trudges past you, {muttering|showers_lockers_mutter} until he reaches one of the towel chutes. He sticks his broom handle-end into the chute and begins stabbing. He shakes his head and extends his {torso|showers_lockers} into the chute.  ";
    } 

    if (f.showers_timer>8) {
        if (f.showers_timer==9) {
            d="The janitors legs stick out of the towel chute, kicking the air as if the chute was devouring him. His broom " + oneoff_link("thrusts|showers_lockers_jam") + "  up and down its throat.  ";
        } else if (f.showers_timer < 11) {
            d+="\n\nThe janitor {battles|showers_lockers_janitor_fall} with the chute. ";
        }

        if (f.showers_timer==9) {
        d+="\n\nYou dry yourself and get dressed.";

        }
     } 
     
    if (f.showers_timer==10) {
        d+="\n\nYou slip the chalk in the pocket of your school uniform and close the locker. "; 
    }

    if (f.showers_timer==11) {
        d+="\n\nThe janitor screams and {crashes|showers_lockers_crashes} down the chute. ";
    }

    if (f.showers_timer == 6 ) {
        no_exit_memory = 1; 
    }
break;
case "showers_lockers_crashes":
    d+="A series of sucessively softer thuds. The students continue drying themselves and getting dressed. ";
break;
case "showers_lockers_janitor_fall":
    d+="He wiggles further into the chute, spearing the blockage of towels with his broom. "; 
break;
case "showers_lockers_chute":
    d+="Boxes rising from the floor, designed to swallow used towels. ";
break;
case "showers_lockers_jam":
    d+="Another towel jam. ";
break;
case "showers_locker_nudge":
    d+="You can't afford for him to notice the chalk. ";
break;
case "showers_lockers_mutter":
    d+="Something about overtime. ";
break;

case "showers_lockers_scramble":
    d+="Some wrap themselves with a towel. Others cover themselves with their hands. ";
break;
case "showers_lockers_janitor_grumpy":
    d+="His face glitches and he grumbles and drags his broom behind him. Students part a path for him. ";
break;

case "showers_lockers_students":
    if (f.showers_timer > 8 && f.showers < 13) {
        d+="Some have returned to dressing or undressing. Others stare at the janitor's legs protruding from the chute. ";
    } else {
        d+="Some dry themselves with a towel. Some rummage through their lockers. ";
        if (f.showers > 12) {
            d+="Some stand by the chute, peering down into it at the disappeared janitor. ";
        }
    }
break;





case "showers_lockers_towel":
    d+="<em>Not until you reach your locker. Too many eyes.</em> ";
break;


case "showers_lockers_lockers":
    lockdown=1;
    d+="Some have key and bracelet dangling from them. Others are locked and closed. Each locker is {numbered|showers_lockers_find_yours}.";

    
break;
case "showers_lockers_find_yours":
    lockdown=1;
    f.showers_lockers_revealed_chalk=1;
    f.showers_lockers_seen_chalk=1;
    
    d+="You find the locker matching the number on your key and open it. Your school uniform lies folded neatly inside. \n\nYou huddle close to the locker and unroll the towel. Hidden inside is a ziplock bag with a few pieces of {chalk|showers_lockers_chalk}. You place the bag in your locker."; 

break;

case "showers_lockers_curtain":
    d+="Transparent flaps hang over the doorway. Steam puffs through the cracks as students enter and exit. ";

break;

case "showers_lockers_students":
    d+="Those who aren't naked have a towel wrapped around their bodies. ";
break;
case "showers_lockers_gates":

    d+="An orchestra of beeps and clicks as students push through the turnstiles.  ";

    if (f.showers_timer > 9) {
        root=1;
        wait =  0;
        d="You walk to the gates and put your thumb on the scanner. Words display on the screen next to it: \"Privacy time spent: 16:02:49. Time deducted from your daily quota. Thank you for not loitering.\" The turnstile clicks and beeps as it unlocks. "; 
                f.end_memory=1;
                f.showers = "x";
    }
break;


case "showers_lockers_chalk":
    d+="{Antiquated|showers_lockers_antiquated} but worth a small fortune in Pogs. Most would consider the exchange foolish. But you need it. Anything for more memory. ";
break;

case "showers_lockers_antiquated": 
    d+="They say teachers used to write on surfaces called blackboards. Even then, chalk was illegal for students. ";
break;

/*
A janitor carrying an armload of towels steps through the gates and heads toward you. He displays a grumpy-face emoticon on his screen. 

The students scramble to get dressed and cover their private parts. 

You stuff the bag of chalk into the locker and wrap the towel around your body. 

He walks past you, muttering to himself. 

Muttering
Something about overtime. 

Janitor
He pays no attention to the students and displays a grumpy-face emoticon on his screen. 
*/




case "rkdrm":
    root=1;
    if (f.back=="start") {
        f._rkdrm_change_topic_counter=0;
        f._rkdrm_memory = 0;
        f._rkdrm_memory_2 = 0;
        f._rkdrm_rook_agitated = 0;
        f._rkdrm_ethan_counter = 0;
        f._rkdrm_kasparov = 0;
        f._rkdrm_b4_school = 0;
        f.topic=0;
        f._rkdrm_graduation = 1;
        scene_change("Strategies");
    }
    
    dorm_desc(f);
    wipe_memory('boyfriend');

    if (!f._rkdrm_rook_agitated) {
        d+="\n\nYou and {Rook|rooks_dorm_rook} sit on the floor playing " + oneoff_link("chess|_rooks_dorm_chess") + ". ";

    } else {

        switch(f._rkdrm_ethan_counter) {
            case 0:

                d+="\n\n{Rook|rkdrm_rook_back} has his massive back turned to you, blocking your view of the chessboard. He leans forward. \"Knight takes queen.\" He places the queen at his side. ";
                f._rkdrm_ethan_counter++;
            break;

            case 1:
                d="{Ethan|rkdrm_ethan} appears behind the glass wall and yanks the door open. \"Bridge goons are making moves in the cafeteria. Six of them at our table. Let's mess them up. They owe us for the library.\" ";
                if (!f._chess_thrown) {
                    d+="\n\nRook moves one of your pieces. \"Bishop takes pawn,\" he says. ";
                } 
                f.caf = "cafv2";
                f.seen_rook_chess_game = 1;
                f._rkdrm_ethan_counter++;
            break;

            case 2:
                d="Ethan steps foward. \"What is the matter with you? This isn't a drink at the water fountain, Rook. This is the Chess club. We go now.\" He bends down picks up the board. Pieces clatter to the floor. He straps the board to his back.\n\n\"It would have been checkmate in three moves,\" says Rook. He reaches for his jacket and follows Ethan toward the door. He turns to you. \"I'm sorry I got mad. You coming?\" \n\nYou put on your jacket. ";
                    f.caf = "cafv2";
                    f.seen_rook_chess_game = 1;
                    f.end_memory = 1;
            break;
        }
        
        
    }
break;


case "rkdrm_dorm_glass":
    d+="The light enters the room at a sharper angle than yours. His dorm is quite a distance from yours. "; 
break;

case "rkdrm_sorry":
case "rkdrm_rook_back":
    d+="You  move to his side and gently place your hand on his shoulder. He keeps his gaze on the pieces. \"Knights are most effective in the center of the board,\" he says. ";
                f._rkdrm_ethan_counter++;
break;
case "rkdrm_ethan":
    d+="A small boy with high-waisted pants and uniform jacket flipped inside out. He is out of breath and sweat runs down his face. He has an empty chessboard harness strapped to his back. "; 

    
    if (f._chess_thrown) {
        d+= "\n\nHe picks up the board from the floor and straps it to his back.  \"Ladies and gentlemen, afternoon tea is over. Let the real games begin.\" \n\nRook pushes him aside and storms out of your dormitory. ";
        f.end_memory = 1;
        root = 1;
    } else {
        d+= "He glares at Rook. ";
    }
break;
case "rooks_dorm_bed":
    d+="Covered with a chess-themed blanket. Two uniform {jackets|rkdrm_jackets} rest on the bed. ";
break;

case "rkdrm_jackets":
    d+="Flipped inside out with the inner stitching visible. A large jacket belonging to Rook and a small one belonging to you. ";
break;
case "_rooks_dorm_chess":
    d+="He has taken several pawns, a knight, rook and bishop. You have one of his knights and several pawns.  ";
break;

case "rooks_dorm_rook":
    if (f._rkdrm_rook_agitated) {
        d+="He has his back turned to you. Labored breathing. You watch the rise and fall of his shoulders. ";

        
    } else {
        d+="Wireframe glasses hang low on his nose. He hulks over  the board, whispering to himself as he calculates his moves. "; 

    }

    rkdrm_convo = {
            "_rkdrm_chess":
           {l:"Chess", d:function() {
                    d="\"We all play, but nobody cares about strategy anymore. I'm starved for challenge.\"";
               // f.topic="finish_school";
               //
              f.topic="chess";
           },v:1},

           /*
        "_jump":
            {l:"jump test", d: "{jump}", v:1},
        "_rkdrm_topic":
           {l:"topic test", d:function() {
                d+="A test topic";
                f.topic = "test_topic";
           },v:1},
        "_rkdrm_test_topic":
           {l:"inside topic test", d:function() {
                d+="inside a topic response then back out";
           },topic:"test_topic", v:1},
       "_rkdrm_test_topic_2":
           {l:"inside topic test 2", d:function() {
                d+="inside a topic response 2 then back out";
           },topic:"test_topic", v:1},

      "_rkdrm_test_topic_3":
           {l:"inside topic test 3", d:function() {
                d+="inside a topic response 2 then back out";
           },topic:"test_topic", v:1},



           */
        "_rkdrm_kasparov":
           {l:"Kasparov", d:function() {
                    d="\"Why do you keep asking about that name? It doesn't mean anything to me.\"";
           },v:1},
        "_rkdrm_graduation":
           {l:"Graduation", d:function() {
                    d="\"Nobody knows the day it will come. We will know its true nature when it arrives. It's pointless to think too much now.\"";
               // f.topic="finish_school";
           },v:1},
        /*
        "rkdrm_finish_school":
           {l:"Questions", d:function() {
                    d="\"Only the Faculty know the answers to these questions.\"";
                    f.topic=0;
           },topic:"finish_school"},
        */

        "_rkdrm_rk_players":
           {l:"Nobody cares", d:function() {
                    d="\"It's become like homework. It wasn't like this before.\"";
               // f.topic="finish_school";
               f._rkdrm_rk_before = 1;
           },v:1 ,topic:"chess"},

        "_rkdrm_rk_before":
            {l:"Before", d:"\"We fought less and played with strategy. Too many wipe cycles have made us forget.\"", topic:"chess"}, 
        "_rkdrm_rk_strategy":
           {l:"Strategy", d:function() {
                    d="He raises his head to look at you with wide eyes. \"I keep replaying the stragegies in my head so they don't fade. When I put them all together I can almost touch the fringes of something bigger than all of us. A structure. Do you know what I mean?\"";
                    f.topic = "gestalt";
               // f.topic="finish_school";
           },v:1 ,topic:"chess"},


        "_rkdrm_rk_gestalt_yes":
            {l:"Yes",d:function(){
               d+= "\"I'm glad you get it. Ethan doesn't get it. Nobody does.\""; 
               f.topic = 0;
           },v:1,topic:"gestalt"},

        "_rkdrm_rk_gestalt_no":
            {l:"No",d:function(){
               d+= "He sighs and returns to the game. ";
               f.topic = 0;
           },v:1,topic:"gestalt"},


        "_rkdrm_rk_challenge":
           {l:"Challenge", d:function() {
                    d="\"At least you can hold your own... usually.\" He looks the captured pieces by his side.";
               // f.topic="finish_school";
           },v:1 ,topic:"chess"},
           

        "_rkdrm_memory":
            {l:"Your earliest memory", d: function() {
                //rkdrm_dont_wanna_talk(); 



                if(rkdrm_change_topic(f._rkdrm_change_topic_counter)=="x") {
                    d="\"Don't do this. I've already told you everything I can remember.\"";
                    f._rkdrm_memory = "x";
                    f._rkdrm_memory_2 = 1;
                    
                } else {
                    d+=rkdrm_change_topic(f._rkdrm_change_topic_counter);
                    f._rkdrm_memory = 1;
                    f._rkdrm_change_topic_counter++;

                }
            },v:1},
        "_rkdrm_pawns":
            {l:"Pawns", d: "\"Pawns are the soul of the game. Don't underestimate them.\" "},
        "_rkdrm_memory_2":
            {l:"Your earliest memory", d: function() {
                d+="His head snaps up.  \"I woke in a bus. It was dark. There were wires and tubes on me. Then I saw a pinprick of light that grew blinding as we drove into it. Is that what you want to hear?\" \n\nHe picks up the board, turns his back to you and sets it down again.  His large back blocks your view of the game. \"I can't tell what's mine and what you've put into my head with all your stupid questions.\" He leans forward. \"Knight takes Queen.\" He puts the queen at his side. \n<li>{Sorry|rkdrm_sorry}</li><li>{Your earliest memory|rkdrm_answers}</li>";
                f._rkdrm_memory_2 = "x";
                f._rkdrm_rook_agitated = 1;
                lockdown=1;
            }},
     
        

    };



    replies(rkdrm_convo);
    if(!f._rkdrm_rook_agitated) {

        topics(rkdrm_convo); 
    }
   //   d+="<li>{Kasparov|rkdrm_kasparov}</li>";
   
    
break;

case "rkdrm_answers":
    //root = 1;
    d+="He picks up the board and hurls it at the wall. Chess pieces scatter across the floor. He takes his jacket and walks to the door.";
    f.rook_angry = 1;
    f._rkdrm_rook_agitated=1;
    f._chess_thrown = 1;
    f._rkdrm_ethan_counter=1;
    //f._rkdrm_rook_gone = 1;
    //f.end_memory = 1;
    
break;
case "_jump":
    tmp2 = {
        "_jump":
            {l:"zzBoyfriend", d:function() {
                d+="\"Yes, the delicate matter of a boyfriend. Our records indicate you have not dated for two semesters.\"";
                f.gc_semester=1; 
                f.gc_dating=1;
            },v:1},
        "zzzgc_semester":
            {l:"zzzSemester", d:"\"It does not belong to you to know how long a semester is.\"", v:1},
        "zzzgc_kasparov":
            {l: "zzzkasparov", d: "{jump}", v:1}

    }
    talk(tmp2);
    f.back = "rooks_dorm_rook";
break;
case "rkdrm_kasparov":
    d+=rkdrm_change_topic(f._rkdrm_change_topic_counter);
    if(d=="x") {
        d="\"I don't know who Kasparov is. That name doesn't mean anything to me. Why do you keep asking about it?\"";
    } 


;

   
   talk(rkdrm_convo);
         d+="<li>{Kasparov|rkdrm_kasparov}</li>"

break;



case "cafv2":
    root=1;
    if (f.back == "start") {
        scene_change("Instinct");
        f.cafv2_timer = 0;
    }
    d+=caf_desc();

    if (f.cafv2_timer==0) {
        d+="\n\nYou stand next to Ethan and Rook. In the distance, a group of {Bridge Club members|cafv2_bridge_club} sit at your table. ";
        f.cafv2_timer = "tuck";
        break;
    }

    switch(f.cafv2_timer) {

        case "tuck":
            d="\"Tuck in your shirts and pull up your socks,\" says Ethan. \"It's time to show these kids good form.\" He loosens the harness straps of the chessboard. The board bobs up and down as he swaggers toward the group of Bridge Club members. You and Rook follows several steps behind him.";
            f.cafv2_timer = "problem";
            root = 0;
        break;

        case "problem":
            f.cafv2_timer="smash"; 
            d="A silence overtakes the {Bridge Club members|cafv2_bridge_asking4} as {Ethan|cafv2_ethan_approach} approaches. He surveys each of them in turn and his eyes lock onto monkey-boy's. \n\n\"Got a problem?\" says monkey-boy.\n\n\"No problem. But why are you gentlemen giving us problems? We don't appreciate problems.\"  ";
            root = 0;
        break;

        case "smash":
            f.cafv2_timer="jostle"; 
            d="\"Why'd you smash up the {library|cafv2_library_smash}? Faculty's giving us heat for it.\" says Ethan.\n\n\"We don't smash libraries,\" says monkey-boy. \"We can smash your face though.\"\n\n\"Try it,\" says Ethan. You and Rook step closer to him. Rook takes a case out of his pocket and puts his glasses into it. \n\nThe Bridge Club members circle around the table and stand beside monkey-boy. ";
           root=0; 
       break; 

       case "jostle":
            d="A jostle and fists fly. Ethan brandishes the chessboard above his head, clubbing people with it. Rook has a student in a headlock while another hangs off his neck. One of the Bridge boys {lunges|cafv2_lunge} at you."; 
            lockdown=1;
       break;    
   
        case "guards":
            d="Security guards rain down from the ceiling. Boots thud on the floor. Cables snap off and whistle as they retract upward. \n\nA guard lands several steps from you. His nightstick clicks on and emits a high-pitched whine as it charges. He {swings|cafv2_guard_swings} at you. ";
            lockdown = 1;
        break;

    }

break;

case "cafv2_lunge":

    d+="Your body reacts. You twist him and send him crashing on top of a table. Lunch trays and utensils careen everywhere. Other students back away. You close in on the next member of the Bridge Club.\n\nYour head throbs and the sound of Cicadas return. Boots {clatter|cafv2} on the catwalks above. ";
    lockdown=1;
    
    f.cafv2_timer="guards"; 
break;
case "cafv2_guard_swings":
    d+="You catch his arm, wrap your leg around it and twist. Sparks fly as the arm pops off. Gears and screws spill to the ground. ";
        f.caf = "x";
        f.scene_change = 0;
        lockdown = 1;
        f.seen_instinct = 1;
        f.back = "start";
        d+=bk("hrdcr");

break;
case "cafv2_library_smash":
    d+="<em>When was it?</em> Fog envelops your mind. ";
break;
case "cafv2_bridge_asking4":
    d+="Frozen, as if posed for a strange group photo. They stare death at Ethan. ";
break;

case "cafv2_ethan_approach":
    d+="He straightens his posture and stands with his chest puffed out to make himself look taller. He is eye level with most of the seated Bridge players. ";
break;
case "cafv2_clattering_boots":
    d="Security guards mobilize on the catwalks.";
break;

case "cafv2_bridge_club":
    d+="A group of six students. Back-slapping and laughter. One of the {boys|cafv2_monkey_boy} squats on the bench like a monkey, doing small hops and rocking the table. \n\nYour head throbs and you hear the sound of Cicadas.";
break;

case "cafv2_monkey_boy":
    d+="He wears a red scarf and a {playing card|bridge_playing_card} peeks from the breast pocket of his school uniform.";
break;


case "hrdcr":
    root=1;
    if(f.back=="cafv2" || f.back == "cafv2_guard_swings" || f.back=="start") {
        f.hrdcr_timer = 0;
        f.scene_change = 0;


    }
        if (f.grandmaster_memory_wiped) {
            scene_change("Ghosts");
        } else {
            scene_change("Hardcore");
        }

    f.hrdcr_timer++;


    d+="{Rook|hrdcr_rook}, {Ethan|hrdcr_ethan} and you kneel in front of the {Hardcore|hrdcr_hardcore}. The " + oneoff_link("Grandmaster|_hrdcr_grandmaster") + " sits on a tall stack of textbooks peeling an apple with a {knife|hrdcr_knife}. A ceremonial {chessboard|hrdcr_chessboard} rests on a smaller stack of books in front of her. {Bookshelves|hrdcr_bookshelves} surround everyone. ";

    if (f.grandmaster_memory_wiped) {
        d+="\nYour head throbs. You hear the faint buzzing of cicadas. ";
    }
    if (f.hrdcr_timer > 2) {
        d+="\n\n";
    }
    switch(f.hrdcr_timer) {
        case 3:
            d="\"Suzy, Rook and Boardmaster Ethan. The three of you caused quite a disturbance in the Cafeteria,\" says the " + oneoff_link("Grandmaster|_hrdcr_grandmaster") + ". \"It was bold, what you did. The Bridge kids never knew what hit them.\" \n\nThe other members of the Hardcore smile. The grandmaster wears an icy expression.";
           root = 0; 
        break;

        case 4:
            d="\"I want a word with Suzy alone,\" says the Grandmaster. \n\nEveryone falls silent. The Hardcore {stare|hrdcr_stare} at each other. Rook and Ethan stand up and shuffle away. The Hardcore members give you a {fistbump|hrdcr_fistbump} and place their fist over their heart as they walk past.  ";
            root = 0;
            f.root = "hrdcr_gm";

        break;
        
    }
break;

case "hrdcr_knife":
   d+="Simple, elegant and two-handbreadths long. She surgically peels the apple and a one long paper-thin strip of skin dangles from the apple."; 
break;

case "hrdcr_fistbump":
    d+="Careful and controlled, like their game. The knuckles give a soft crack when they meet. ";
break;

case "hrdcr_stare":
    d+="A touch of surprise, a flicker of anger. ";
break;
case "_hrdcr_grandmaster":
    d+="A tall, pale girl with white hair and dainty {hands|hrdcr_grandmaster_fingers}. Her eyes cut sharper than the {knife|hrdcr_knife} she carries. ";
break;
case "hrdcr_grandmaster_fingers":
    d+="Perfect for playing chess. One hand has black fingernails, the other has white.";
break;
case "hrdcr_bookshelves":
    d+="Few would attempt to come to this spot in the library without the express permission of the Chess Hardcore. ";

break;
case "hrdcr_hardcore":
    d+="The seven members of the inner Chess circle. Each member sits on a stack of textbooks, at a height slightly lower than the Grandmaster. Their hair is white as a freshly wiped whiteboard."; 
break;
case "hrdcr_rook":
    d+="He wears an expressionless but respectful face. His eyes betray him. You can tell his mind is elsewhere. Probably thinking about chess moves. His arm is in a sling. ";

break;
case "hrdcr_chessboard":
    d+="A translucent board with game pieces permanently fixed in  position. ";
break;
case "hrdcr_ethan": 
    d+="He beams, basking in the moment. There are several bruises on his face. ";
break;

case "hrdcr_gm":
    root = 1;
    d+="You kneel in front of the Grandmaster. ";

    if(!f._gm_starter) {
        f._gm_starter = 1;
        d="Everyone disperses into the aisles and bookshelves. You remain kneeling in front of the Grandmaster watching her peel her apple. \n\n\"It's come to the attention of the Hardcore that you have a lot of fight in you,\" she says. She bites into the apple with a crunch. \"Three students and a security guard put into the Nurse's office. Most people would call that respectable.\"";
    }


    gm = {
            "_gm_thanks":
           {l:"Thank you", d:function() {
                    d="\"I'm not most people. Why are you in the Chess Club, Suzy? You dress the dress. You fight the fights. But I've been around long enough to recognize chessfakery when I see it. What do you want here?";
                    f._gm_age=1;
                    f._gm_nothing=1;
               // f.topic="finish_school";
               //
              f.topic="search";
           },v:1},
           "_gm_it_was_nothing":
           {l:"It was nothing", d:function() {
                    d="\"Yes, it was nothing. You hide it, but I know you're not even trying. Why are you in the Chess Club, Suzy? You dress the dress. You fight the fights. But I've been around long enough to recognize chessfakery when I see it. What do you want here?";
                    f._gm_age=1;
               // f.topic="finish_school";
               //
              f.topic="search";
           },v:1},

        "_gm_nothing":
           {l:"Nothing", d:function() {
                    d="\"Don't kriegspiel me. Lay it out. What do you want?\"";
                    f._gm_age=1;
           },topic: "search", v:1},
        "_gm_answers":
           {l:"Answers", d:function() { 
                    d="\"There are no answers. There is only class, chess and holding our turf. No more, no less. If you can't see the beauty in that--if you think you're better than the rest of us--I pity you. You're not to fit to flip the jacket you're wearing.\"";
                   f._gm_nothing="x"; 
           },topic: "search", v:1},

           ////////////////START life's questions
            "_gm_how_get_here":
            {l:"How did we get here",d:function(){
                d+="\"We were dropped off by a black bus. We all have the same memory.\" ";

            f._gm_where_we_come_from = 1;
                
            },topic:"lifes_questions", v:1},
           //
            "_gm_where_we_come_from":
            {l:"Where were we before school started",d:function(){

            },topic:"lifes_questions"},
        "_gm_after_grad":
            {l:"Where will we go after Graduation",d:function(){
                d+="";
            },topic:"lifes_questions", v:1},
           ////////////////END life's questions
            
        "_gm_age":
           {l:"How old are you", d:function() {
                    d="\"I didn't start school yesterday."
                    if(f._gm_kasparov != "x" || !f._gm_answers != "x") {
                        d+=" Now tell me what you want.";

                    }
                    d+="\"";
                   f._gm_nothing="x"; 
           },topic: "search"},

        "_gm_kasparov":
           {l:"Kasparov", d:function() {

                if(f.grandmaster_memory_wiped) {
                    d="\"We're the Chess club. Is that name supposed to mean something?\" ";
                    f.topic = "gimme";
                } else {
                    d="Her eyes narrow. She lowers the apple. \"You're not going to find him here.\"";
                    f.topic = "kas";
                }
                   f._gm_nothing="x"; 
           },topic: "search",v:1},
          
        "_gm_kas_whoishe":
            {l:"Who is he", d: function(){
                d+= "\"Nobody you should concern yourself with. He was excommunicated long ago.\"";
                f.seen_kas_excommunicated=1;
                f.know_kas_excommunicated=1;
                f._gm_kas_excommunicated = 1;
            }, topic: "kas", v:1},

        "_gm_kas_excommunicated":
            {l:"Excommunicated", d: function() {
                d+="She stabs the knife into the apple and rests it on the ground. \"He was one of us once. He had no use for the Club and we had no use for him. You don't need to know any more.\"";
            }, topic: "kas"},
          
            
        "_gm_kas_howfind":
            {l:"How can I find him", d: function() {
                d+="\"You think I have his dorm number? You think I can tell you what classes he's attending? If it was that easy the Faculty would already have him. He is dangerous. Too extreme, even for the Chess Club.\"";
            }, topic: "kas", v:1},
          
        "_gm_give_me_answers":
            {l:"Give me answers", d: function() {
                if (f.grandmaster_memory_wiped) {
                    d+="Her eyes scan your face. She shakes her head and places the apple core on top of the pile of peelings. \"I can see I'm wasting my time. For the sake of the Hardcore I'll let you play with your little delusions. You won't find anything here.\" "; 
                    f.hrdcr = "x";
                    f.seen_ghosts = 1;
                    f.end_memory = 1;
                } else {
                    d+="A flicker of movement. Before you can react she has her {fingers|hrdcr_gm_choke} locked around your throat. ";
                
                    d+="\"You forget who you're talking to,\" she hisses. \"And you don't understand the game you're playing. I've had enough of your questions.\" ";
                    f.topic = "fin"; 
                    lockdown = 1;

                    d+=bk("hrdcr_gm_finished");
                    
                }
            }, topic: "gimme", v:1},





    };



    replies(gm);

    if (done_talking(gm,"kas")) {  
        f.topic = "gimme";
       console.log("kas topic done");
    }
    topics(gm); 
    
   f._gm_nothing="x"; 
break;
case "hrdcr_gm_choke":
    d+="Her nails bite into your skin. You struggle to breathe.";
    d+= bk("hrdcr_gm_finished");
    lockdown = 1;
break;


case "hrdcr_gm_finished":
 d+= "She leans in, breathing into your ear. \"I can read you like a textbook, Suzy. You're not one of us. You have the same blood in you as that fool, Kasparov.\" She releases your neck. \"But for the sake of the Hardcore, I'm going to let you play your little game. I'll be watching you.\"";
    f.counseling_booth = "v2";
    root = 1;

    f.end_memory = 1;
break;

case "hrdcr_gm_face":
    d+="An expressionless, calm face. Her voice hisses with venom. ";
break;






//::end
///////In case you link to a nonexistent node, then this error message will appear
default:

    switch(typeof node){ 
        case 'function': //if a function can be found for the value passed as node, execute it
            node_function[node]();
        break;
        case 'undefined': //no function found, doesn't exist, go to defaults
        default:
            nodeless = ['Your thoughts lead you elsewhere.', 'Your attention drifts to other matters. ', 'Your memory blurs. ', 'Your focus shifts elsewhere. '];
            parameters = [];
            parameters.flag_name = "default_no_node";
            d += "<span class='error-missing-node'>" + randomizer(nodeless,parameters) + "</span>";
   }
break;                                 






//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

    } //////do not remove this bracket         
} //////do not remove this bracket         
                                           
                                           
                                           
/////////////////////////////////////      
////Inventory////////////////////////      
////////////////////////////////////       
                                           
    //////
add("Headmaster Blue", "headmaster", function() {
    d+="<em>Highest reigning Faculty member of Arcadia Heights. ";
    if (i.kasparov && i.sinatra ) {
        d+="Hunting Kasparov.";
    }
    d+="</em>";
    thought=1;
});

add("Sinatra", "sinatra", function() {
    d+="<em>";
    if (i.vandalism_library) {
        d+="A witness to the library vandalism. A janitor working in the east wing. ";
    } else {
        d+="Someone... who? A janitor. He saw Kasparov.";
    }
    d+="</em>";
    thought=1;
});
                                           
/////////                                  
add("Pogs", "washroom_informer_pogs", function() {
    d+="It had taken many games to gather this collection. Your arm is still sore from throwing the slammer. ";

});
/*
  add("ZZZ", "zzz", function() {
    d+="zzz";
    thought=1;
});
   */                                        
/////                                      
add("Cell phone", "cell_phone",function(){ 
	d+="<p>A cheap red phone, slightly bruised.</p>";
	
	if(f.cellphone_ornamented) {
	d="<p>A cheap red phone, slightly bruised. A plastic strawberry ornament dangles from it.</p>";
	}
	                                       
	if (i.text_message_sorry) {            
		d+="<p>There is another {new message|sorry_message}.</p>";
	                                       
	} else if (f.text_message_received) {  
		d+="<p>There is a {new message|text_message}.</p>";
	                                       
	}                                      
                                           
});     



/////                                      


		 


                                           
/////////////////////////////////////////////////////
/////thoughts
                                           
                                           
                                           
                                           
                                           
                                           
                                           
////
add("School Security", "ss", function() {
    thought=1;
    d+="<em>On high alert because of vandalism in the library.</em>";

});
////
add("Kasparov", "kasparov", function() {
    thought=1;
    d+="<em>Who is he? He will have answers.</em>";
    if (f.know_kas_excommunicated) {
        d="<em>He was excommunicated from the Chess Club. The Grandmaster refuses to give any more information.</em>";
    }
});

add("Vandalism of library", "vandalism_library", function() {
    d+="<em>Kasparov and his people vandalized the library.</em>";
    thought=1;
});

add("Informer", "informer", function() {
    thought=1;
    d+="<em>The Infoclub. Suppliers of esoteric and illegal information.</em>";
});

add("Boyfriend", "boyfriend", function() {
    thought=1;
    switch (f.back) {

        case "detention_after_caf_fight":
            if (i.rook) {
                d+="You look at Rook. He pushes up his glasses and smiles. ";
                i.boyfriend=0;
                f.end_memory=1;
                f.thread_chess_club = 1;
            }
            break;
        default:
        d+="<em>You need to find a boyfriend. </em>";
    }
});

add("Rook", "rook", function() {
    thought=1;
    d+="<em>Ryan Hook. The chess-playing brute. Maybe he can help you. </em>";

});

add("Wolff", "wolff", function() {
    d+="<em>Chief of Security. His eye. You feel a wave of nausea.</em>";
    thought=1;
});

