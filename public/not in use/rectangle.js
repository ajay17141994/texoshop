function rectangle(clicked_id)
{
// get references to the canvas and context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// style the context
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;

// calculate where the canvas is on the window
// (used to help calculate mouseX/mouseY)
var $canvas = $("#canvas");
var canvasOffset = $canvas.offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;
var scrollX = $canvas.scrollLeft();
var scrollY = $canvas.scrollTop();

// this flage is true when the user is dragging the mouse
var isDown = false;

// these vars will hold the starting mouse position
var startX;
var startY;
function getMousePos(canvas, evt) {
	 var pos = getMousePos(canvas, e);
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

function handleMouseDown(e) {
	 var pos = getMousePos(canvas, e);
    e.preventDefault();
    e.stopPropagation();

    // save the starting x/y of the rectangle
    startX = parseInt(pos.x - offsetX);
    startY = parseInt(pos.y  - offsetY);

    // set a flag indicating the drag has begun
    isDown = true;
}

function handleMouseUp(e) {
	 var pos = getMousePos(canvas, e);
    e.preventDefault();
    e.stopPropagation();

    // the drag is over, clear the dragging flag
    isDown = false;
}

function handleMouseOut(e) {
	 var pos = getMousePos(canvas, e);
    e.preventDefault();
    e.stopPropagation();

    // the drag is over, clear the dragging flag
    isDown = false;
}

function handleMouseMove(e) {
	 var pos = getMousePos(canvas, e);
    e.preventDefault();
    e.stopPropagation();

    // if we're not dragging, just return
    if (!isDown) {
        return;
    }

    // get the current mouse position
    mouseX = parseInt(pos.x - offsetX);
    mouseY = parseInt(pos.y  - offsetY);

    // Put your mousemove stuff here

    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // calculate the rectangle width/height based
    // on starting vs current mouse position
    var width = mouseX - startX;
    var height = mouseY - startY;

    // draw a new rect from the start position 
    // to the current mouse position
    ctx.strokeRect(startX, startY, width, height);

}

// listen for mouse events
$("#canvas").mousedown(function (e) {
    handleMouseDown(e);
});
$("#canvas").mousemove(function (e) {
    handleMouseMove(e);
});
$("#canvas").mouseup(function (e) {
    handleMouseUp(e);
});
$("#canvas").mouseout(function (e) {
    handleMouseOut(e);
});
}