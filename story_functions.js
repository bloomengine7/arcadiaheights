function ga_subscribe_email() {
    if (typeof ga !== "undefined") { 
        ga('send', 'event', 'subscribe_email', 'clicked', 'arcadia_heights');
    }
}

function caf_desc() {
    var d = "Lunch tables overflow with {students|caf_students} and extend into the horizon. Light blooms through a series of massive {windows|caf_windows}. Food control {carousels|caf_carousels} clatter as lunch trays move up and down from below. ";
    return d;
}

function dorm_desc(f){
    if (f.back == "stand_on_toilet" && !f.dorm_privacy_mode) {
        d+="<div class='transition'>As you step away from the toilet, another chime sounds and the scene beyond the glass wall resolves to high-resolution. \"Privacy mode disabled,\" appears on the wall. \"Time deducted from your daily quota.\"";
        if (f.root=="rkdrm") {
            d+=sq("rkdrm_rook_toilet", ["\n\n\"Focus on the game, Suzy,\" says Rook. ", "\n\n\"Stop fooling around,\" says Rook. ", "\n\nHe gestures for you to sit back down. "]);
        }
       d+="</div>";
    }
    d+="The inside of a concrete cube. Light blooms through a wall of {glass|dorm_glass}. A faded {poster|dorm_poster} hangs crooked on the wall. Next to it is a {panel|dorm_closet} and closet door. In the corner is a {bed|dorm_bed} and a {desk|dorm_desk}. In the other corner is a {toilet|dorm_toilet} and sink. Outside, the {tower|dorm_outside} of the panopticon. ";
    
}

function rkdrm_dont_wanna_talk() {


}


function rkdrm_change_topic(counter) {

    var d = "";
    switch(counter) {
        case 0:
            d+="\"Your pawns are not in a chain. They're weak when isolated.\"";
        break;

        case 1:
            d+="His breath quickens. \"If you can maintain center pawns, you have more options to organize attacks.\"";
       
       break;
       case 2:
            d+="\"You need to avoid getting the bishops trapped behind the chains. You see what I did on my side?\" A quiver in his voice. "; 
        break;

        default:
            d+="x";
        break;
    }
    return d;
}
function wipe_memory(args) {
//makes multiple inventory items flash and then dissapear
    var c = 0;
    var argz = [];

    for (var x = 0; x < arguments.length; x++) {
        if (i[arguments[x]] != 0) {
           argz.push(arguments[x]);
        }

    }
    console.log(argz);
    var x = setInterval(function(){

        if (c == argz.length) {
            clearInterval(x);
        }
        var item_to_remove =  $("#" + argz[c]);
        var name = argz[c];
        item_to_remove.effect( "highlight",{color:"gray"}, 400 );
        item_to_remove.animate({opacity:0},500);
        setTimeout(function(){
            console.log(name);
            item_to_remove.remove();
            i[name]=0;
        },1000);
        c++;
        if (c == argz.length || argz.length == 0) {
            clearInterval(x);
            $(".back").animate({opacity:1},2000);

        }
    },1000);
}


/*
done_talking_topic = function(obj) {
    var c;
    var done_talking = 0;
    for (c in obj) {

        if(exist(obj[c].topic)) {
            if (obj[c].topic == f.topic) {
                if (f[c] != "x") {
                    done_talking++;
                }
            }

        }
    }

    //console.log("done_talking_topic: " + done_talking);
    //
    if(done_talking > 1) {
        return false;
    } else {
        return true;
    }

}
*/


function convo_1() {
    back="washroom_informer_desc";
    if (!f.convo_1) {
        d+="<li>{conversation item 1|convo_1}</li>";
    }
    if (!f.convo_2) {
        d+="<li>{conversation item 2|convo_2}</li>";
    }
    if (!f.convo_3) {

        d+="<li>{conversation item 3|convo_3}</li>";
    }
}



function exit_memory() {
//refers to f.end_memory
//
    
    if (!lockdown && !f.hide_exit) {
        if (f.end_memory) {
            return "<p class='back exit_memory highlight_exit'>{&#10003;  &nbsp; Complete memory|start}</p>";
        } else {
            return "<p class='back exit_memory'><a id='exit_memory' href='javascript:confirm_exit_memory();'>Exit memory</a></p>";
            
            
            //{Exit memory|start}</p>";
        }

    } else { 
        /*
        if (f.end_memory) {
            return "<p class='back exit_memory highlight_exit hidden'>{&#10003;   Finish memory|start}</p>";
        } else {
            return "<p class='back exit_memory hidden'>{Exit memory|start}</p>";
        }
        */
      return ""; 
    }

}

function confirm_exit_memory() {
       $("#exit_memory").parent().addClass('confirm');

       $("#exit_memory").parent().html(createLinks('{Press again to confirm exit|start}'));
}
function informer_interactions() {

    interact(function(){
          switch (f.giver) {                     
            case "washroom_informer_pogs":                        
                d="You pass the bag beneath the stall door. It is quickly snatched away. You hear the Pogs clattering as she examines the bag. \"Alright,\" she says. \"This is {all we know...|all_we_know_informer}\"";
                i.washroom_informer_pogs = 0;
                f.washroom_informer_paid = 1;
                back=0;
            break;                             
                                               
            case "sinatra":
                d="\"All we have is that name. You can find him on your own.\""; 
                i.sinatra=0;
            break;
            
            case "headmaster":
                d="\"He was in a rage after the Teacher's lounge incident.\" ";
            break;

            case "kasparov":
                if (!f.washroom_informer_paid) {
                    d="\"First the goods.\"";

                } else {
                    d="You already have what you need to know. ";
                }
            break;
            
            default:                           
                d="She isn't interested. ";
                                               
                                               
        }   
      

    });
        
                                  
}








