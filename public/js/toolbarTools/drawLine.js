function drawLIne(){
var storedLines = [];
var startX = 0;
var startY = 0;
var isDown;

context.strokeStyle = "orange";
context.lineWidth = 3;

$("#canvas").bind('mousedown',function (e) {
    handleMouseDown(e);
});
$("#canvas").bind('mousemove',function (e) {
    handleMouseMove(e);
});
$("#canvas").bind('mouseup',function (e) {
    handleMouseUp(e);
});
$("#canvas").bind('mouseout',function (e) {
    handleMouseOut(e);
});
$("#clear").click(function () {
    storedLines.length = 0;
    redrawStoredLines();
});
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
function handleMouseDown(e) {
    var pos = getMousePos(canvas, e);
    
    var mouseX = parseInt(e.offsetX);
    var mouseY = parseInt(e.offsetY);
    
    isDown = true;
    startX = mouseX;
    startY = mouseY;
    
}

function handleMouseMove(e) {
    var pos = getMousePos(canvas, e);
    
    if (!isDown) {
        return;
    }
    
    redrawStoredLines();
    
    var mouseX = parseInt(e.offsetX);
    var mouseY = parseInt(e.offsetY);
    
    // draw the current line
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(mouseX, mouseY);
    context.stroke()
    
}


function handleMouseUp(e) {
    var pos = getMousePos(canvas, e);
    
    isDown = false;
    
    var mouseX = parseInt(e.offsetX);
    var mouseY = parseInt(e.offsetY);
    
    storedLines.push({
        x1: startX,
        y1: startY,
        x2: mouseX,
        y2: mouseY
    });
    
    redrawStoredLines();
    
}

function handleMouseOut(e) {
    var pos = getMousePos(canvas, e);
    if(!isDown){return;}
    
    isDown = false;
    
    var mouseX = parseInt(e.offsetX);
    var mouseY = parseInt(e.offsetY);
    
    storedLines.push({
        x1: startX,
        y1: startY,
        x2: mouseX,
        y2: mouseY
    });
    
    redrawStoredLines();
    
}


function redrawStoredLines() {
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    if (storedLines.length == 0) {
        return;
    }
    
    // redraw each stored line
    for (var i = 0; i < storedLines.length; i++) {
        context.beginPath();
        context.moveTo(storedLines[i].x1, storedLines[i].y1);
        context.lineTo(storedLines[i].x2, storedLines[i].y2);
        context.stroke();
    }
}

}