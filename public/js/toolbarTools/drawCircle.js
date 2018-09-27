function draw_circle()
{
                $( "#canvas").unbind( "click" );
                $('#canvas').unbind('mousemove');
                $('#canvas').unbind('mousedown');
                $('#canvas').unbind('mouseup');
                $('#canvas').unbind('mouseout');
       //Canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//Variables
var canvasx = $(canvas).offset().left;
var canvasy = $(canvas).offset().top;
var last_mousex = last_mousey = 0;
var mousex = mousey = 0;
var mousedown = false;

//Mousedown
$(canvas).on('mousedown', function(e) {
    var pos = getMousePos(canvas, e);
    last_mousex = parseInt( e.offsetX);
	last_mousey = parseInt( e.offsetY);
    mousedown = true;
});

//Mouseup
$(canvas).on('mouseup', function(e) {
    var pos = getMousePos(canvas, e);
    mousedown = false;
});

//Mousemove
$(canvas).on('mousemove', function(e) {
    var pos = getMousePos(canvas, e);
    mousex = parseInt( e.offsetX);
	mousey = parseInt( e.offsetY);
    if(mousedown) {
        ctx.clearRect(0,0,canvas.width,canvas.height); //clear canvas
        //Save
        ctx.save();
        ctx.beginPath();
        //Dynamic scaling
        var scalex = 1*((mousex-last_mousex)/2);
        var scaley = 1*((mousey-last_mousey)/2);
        ctx.scale(scalex,scaley);
        //Create ellipse
        var centerx = (last_mousex/scalex)+1;
        var centery = (last_mousey/scaley)+1;
        ctx.arc(centerx, centery, 1, 0, 2*Math.PI);
        //Restore and draw
        ctx.restore();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 5;
        ctx.stroke();
    }
    //Output
    $('#output').html('current: '+mousex+', '+mousey+'<br/>last: '+last_mousex+', '+last_mousey+'<br/>mousedown: '+mousedown);
});
}
