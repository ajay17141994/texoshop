//CROP FUNCTION GOES HERE.......... 
//CROP FUNCTION GOES HERE..........
function crop()
{
        $('#canvas').unbind();
        $('#canvas').unbind('mousemove');
        $('#canvas').unbind('mousedown');
        $('#canvas').unbind('mouseup');
        $('#canvas').unbind('mouseout');
    $('canvas').Jcrop({
        onChange: showCoords,
        onSelect: showCoords
    });
    function showCoords(c)
        {
            $('#canvasx1 label').text(document.getElementById("name").value +" X1");
            $('#canvasy1 label').text(document.getElementById("name").value +" Y1");
            $('#canvasx2 label').text(document.getElementById("name").value +" X2");
            $('#canvasy2 label').text(document.getElementById("name").value +" Y2");

            $('#canvascropx1').val(c.x);
            $('#canvascropy1').val(c.y);
            $('#canvascropx2').val(c.x2);
            $('#canvascropy2').val(c.y2);
            
            document.getElementById("canvasx1").style.display="block";
            document.getElementById("canvasy1").style.display="block";
            document.getElementById("canvasx2").style.display="block";
            document.getElementById("canvasy2").style.display="block";
            // Trigger action when the contexmenu is about to be shown
            $(document).ready(function () {
                    $("html").on("contextmenu",function(e){

                        //prevent default context menu for right click
                        e.preventDefault();

                        var menu = $(".menu"); 

                        //hide menu if already shown
                        menu.hide(); 
                        
                        //get x and y values of the click event
                        var pageX = e.pageX;
                        var pageY = e.pageY;

                        //position menu div near mouse cliked area
                        menu.css({top: pageY , left: pageX});

                        var mwidth = menu.width();
                        var mheight = menu.height();
                        var screenWidth = $(window).width();
                        var screenHeight = $(window).height();

                        //if window is scrolled
                        var scrTop = $(window).scrollTop();

                        //if the menu is close to right edge of the window
                        if(pageX+mwidth > screenWidth){
                            menu.css({left:pageX-mwidth});
                        }

                        //if the menu is close to bottom edge of the window
                        if(pageY+mheight > screenHeight+scrTop){
                            menu.css({top:pageY-mheight});
                        }

                        //finally show the menu
                        menu.show();
                    }); 
                    
                    $("html").on("click", function(){
                        $(".menu").hide();
                    });
                });
        }

        $( "#crop" ).click(function() {
            var top=$("#canvascropy1").val()+"px";
            var bottom=$("#canvascropy2").val()+"px";
            var right=$("#canvascropx2").val()+"px";
            var left=$("#canvascropx1").val()+"px";
            $("#canvas").css('clip','rect('+top+", "+right+", "+bottom+", "+left+')');
        });
}
    //CROP FUNCTION ENDS HERE.......... 
    //CROP FUNCTION ENDS HERE..........