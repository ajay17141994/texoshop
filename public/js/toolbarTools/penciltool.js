function penciltool()
{
     $( "#canvas").unbind( "onmousedown" );
   $( "#canvas").unbind( "onmousemove" );
   $( "#canvas").unbind( "onmouseup" );
  $("canvas").css( 'cursor', 'url(images/pencil.png), auto' );
// (function() {
// 	var canvas = document.querySelector('#canvas');
// 	var ctx = canvas.getContext('2d');
	
// 	var sketch = document.querySelector('#drawingCanvas');
// 	var sketch_style = getComputedStyle(sketch);
// 	canvas.width = parseInt(sketch_style.getPropertyValue('width'));
// 	canvas.height = parseInt(sketch_style.getPropertyValue('height'));

// 	var mouse = {x: 0, y: 0};
// 	var last_mouse = {x: 0, y: 0};
	
// 	/* Mouse Capturing Work */
// 	canvas.addEventListener('mousemove', function(e) {
// 		last_mouse.x = mouse.x;
// 		last_mouse.y = mouse.y;
		
// 		mouse.x = e.pageX - this.offsetLeft;
// 		mouse.y = e.pageY - this.offsetTop;
// 	}, false);
	
	
// 	/* Drawing on Paint App */
// 	ctx.lineWidth = 5;
// 	ctx.lineJoin = 'round';
// 	ctx.lineCap = 'round';
// 	ctx.strokeStyle = 'blue';
	
// 	canvas.addEventListener('mousedown', function(e) {
// 		canvas.addEventListener('mousemove', onPaint, false);
// 	}, false);
	
// 	canvas.addEventListener('mouseup', function() {
// 		canvas.removeEventListener('mousemove', onPaint, false);
// 	}, false);
	
// 	var onPaint = function() {
// 		ctx.beginPath();
// 		ctx.moveTo(last_mouse.x, last_mouse.y);
// 		ctx.lineTo(mouse.x, mouse.y);
// 		ctx.closePath();
// 		ctx.stroke();
// 	};
	
// }());
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

// var canvas = document.getElementById("canvas");
// var context = canvas.getContext("2d");

var el = document.getElementById('canvas');
var ctx = el.getContext('2d');
var isDrawing;

el.onmousedown = function(e) {
  isDrawing = true;
  var pos = getMousePos(canvas, e);
  ctx.moveTo( pos.x - this.offsetLeft, pos.y - this.offsetTop);
      lastX = pos.x - this.offsetLeft;
      lastY = pos.y - this.offsetTop;
      // alert("x "+lastX+ ",y"+lastY);
};
el.onmousemove = function(e) {
  if (isDrawing) {
	  var pos = getMousePos(canvas, e);
    ctx.lineTo(pos.x - this.offsetLeft, pos.y - this.offsetTop);
    ctx.lineWidth=5;
    ctx.lineJoin = 'round';
	  ctx.lineCap = 'round';
    ctx.stroke();
  }
};
el.onmouseup = function() {
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

