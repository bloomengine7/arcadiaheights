
function responsive() {
    var resp_inv_visible = 1;
    if (!$("#show_hide_inv").length ) {
        $("#wrap").append("<a id='show_hide_inv'><em>Thoughts</em></a>");
    }
    function getPos(el) {
        // yay readability
        for (var lx=0, ly=0;
             el != null;
             lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
        return lx;
    }
    //alert($(document).width());
    var w = $("body").width();
    if (w < 735 ) {
        $("#content").css('margin-left','1px');
        $("#startScreenInner h1 *").css('font-size','2.3em');
        $("#inventory").hide(); 

        if (inventory_items_exist()) {
            $("#show_hide_inv").show();
        }



        $("#inventory h2").append("<a class='inv_close'>X</a>")
        $("#inventory h2").click(function(){
            mobile_click_inventory();
        });


        $("#show_hide_inv").click(function(){
            mobile_click_inventory();
        });
    } else {
        $("#startScreenInner h1 *").css('font-size','3em');

        $("#content #show_hide_inv").hide();
        leftpos = $("#content_wrap").offset().left;
        $("#content").css('margin-left','199px');
        $("#inventory").show();
        $(".inv_close").remove();
            $("#show_hide_inv").hide();
    }

    function mobile_click_inventory() {
        if (resp_inv_visible) {
            //handlerIn();
            //
            $("#inventory").show();
            $("#show_hide_inv").hide();

            console.log('hide');
            resp_inv_visible = 0; 
            
        } else {
            $("#inventory").hide();
            $("#show_hide_inv").show();
        

            console.log('show');
            resp_inv_visible = 1; 
            
        }
    }

    function handlerIn() {

        
		$( "#inventory" ).animate({
			
			left: -180 
		
	
		}, 500, "swing", function() {
			
		});
        resp_inv = 0; 
        
    }

    function handlerOut() {
        $( "#inventory" ).animate({
			
			left:  0
		
	
		}, 500, "swing", function() {
			
		});
        resp_inv = 1; 
        
    }

}
