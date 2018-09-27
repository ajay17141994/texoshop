//MOVETOOL TOOL GOES HERE.................
function movetool(clicked_id)
{   
        $('#canvas').unbind();
        $('#canvas').unbind('mousemove');
        $('#canvas').unbind('mousedown');
        $('#canvas').unbind('mouseup');
        $('#canvas').unbind('mouseout');
        $( "#canvas").unbind( "click" );
        $("#canvas").unbind( "Jcrop" );
        $("#canvas").draggable();
    
}