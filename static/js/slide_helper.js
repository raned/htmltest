
/*
$('body').keypress(function(e) {
			//alert(e.which);
		    if(e.which == 13) {
		        jQuery(this).blur();
		       // $('a.second').focus().click();
		    }
		});
		
		document.addEventListener( "mousemove", mouseMoveHandler, false );
		document.addEventListener( "mousedown", mouseDownHandler, false );
		document.addEventListener( "mouseup", mouseUpHandler, false );
		
	var down=false;
	var up =false;
	var move =false;
	var start=0;
	var stop=0;
	var s_direction="";
		
	function mouseMoveHandler( event ) {
		if(down)
			move=true;
	}
	
	function mouseDownHandler( event ) {
		down=true;
		start=event.clientX;
	}
	
	function mouseUpHandler( event ) {
		stop=event.clientX;
		
		if(down && move)
		{
			//alert((stop-start));
			
			if((stop-start) < 0){
				s_direction="left";
				$('a.second').focus().click();
			}else{
				s_direction="right";
				$('a.second').focus().click();
			}	
			start=0;
		    stop=0;
			drag();
			s_direction="";
		}
		    down=false;
			up=false;
			move=false;
	}
	*/
		
	$(".second").pageslide({ direction: "left", modal: true });
	
    var show=false;
	$("#toggle").click(function(){
		if(!show){
			$("#select_s").css({ display: 'block' });
		    show=true;
		}else {
			$("#select_s").css({ display: 'none' });
			show=false;
		}
	});
		     		
		
	$("#close").click(function(){
		 javascript:$.pageslide.close();
	
		 $("#pageslide div").html("");
		 //$(".second").pageslide({ direction: "right", modal: true });
	});


   $(".select_scroll0").click(function(){		   
		 $("#pageslide div").append("<h1 style='text-align:center'> Game <h1>");
	});

    $(".select_scroll1").click(function(){	
		 $("#pageslide div").append("<h1 style='text-align:center'> Mike <h1>");
	});
	
		