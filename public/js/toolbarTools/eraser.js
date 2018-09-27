function erasertool()
{
   $( "#canvas").unbind( "onmousedown" );
   $( "#canvas").unbind( "onmousemove" );
   $( "#canvas").unbind( "onmouseup" );

$("canvas").css( 'cursor', 'url(images/eraser.png), auto' );
function erasergetMousePos(canvas, evt) {

    var rect = canvas.getBoundingClientRect();
    console.log(rect);
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

// var canvas = document.getElementById("canvas");
// var context = canvas.getContext("2d");

var erasercanvas = document.getElementById('canvas');
var eraserctx = erasercanvas.getContext('2d');
var isDrawing;

erasercanvas.onmousedown = function(e) {
  isDrawing = true;
  var pos = erasergetMousePos(canvas, e);
  eraserctx.moveTo( pos.x - this.offsetLeft, pos.y - this.offsetTop);
      lastX = pos.x - this.offsetLeft;
      lastY = pos.y - this.offsetTop;
      // alert("x "+lastX+ ",y"+lastY);
};
erasercanvas.onmousemove = function(e) {
  if (isDrawing) {
  
	  var pos = erasergetMousePos(canvas, e);
    console.log(e);
      console.log(pos.x , pos.y);
    eraserctx.lineTo(pos.x - this.offsetLeft, pos.y - this.offsetTop);
    eraserctx.lineWidth=2;
    // ctx.fillStyle = document.getElementById("canvas").style.backgroundColor;
    // ctx.fill();
     eraserctx.strokeStyle=document.getElementById("canvas").style.backgroundColor;
    //  eraserctx.strokeStyle="white";
    // ctx.lineJoin = 'round';
	  // ctx.lineCap = 'round';
    eraserctx.stroke();
    //console.log(ctx.stroke());
  }
};
erasercanvas.onmouseup = function() {
  isDrawing = false;
};


// function draw(e) {
//     var pos = getMousePos(canvas, e);
//     posx = pos.x;
//     posy = pos.y;
//     context.fillStyle = "#000000";
//     context.fillRect(posx, posy, 4, 4);
// }
// window.addEventListener('mousemove', draw, false);

}