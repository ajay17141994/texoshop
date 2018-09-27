function draw_rectangle()
{
                $( "#canvas").unbind( "click" );
                $('#canvas').unbind('mousemove');
                $('#canvas').unbind('mousedown');
                $('#canvas').unbind('mouseup');
                $('#canvas').unbind('mouseout');
        $("#canvas").bind('mousemove', function(e){
            mouseXY(e)
        });

        $("#canvas").bind('mousedown', function(e){
            mouseDown(e)
        });

        $("#canvas").bind('mouseup', function(e){
            mouseUp(e)
        });

        $("#canvas").bind('mouseout', function(e){
            mouseUp(e)
        });
        // canvas.addentListener("mousedown", mouseDown, false);
        // canvas.addentListener("mousemove", mouseXY, false);
        // canvas.addentListener("mouseup", mouseUp, false);


    function mouseUp(e) {
        if (mouseIsDown !== 0) {
            mouseIsDown = 0;
            var pos = getMousePos(canvas, e);
            endX = e.offsetX;
            endY = e.offsetY;
            drawSquare(); //update on mouse-up
        }
    }

    function mouseDown(e) {
        mouseIsDown = 1;
        var pos = getMousePos(canvas, e);
        startX = endX = pos.x;
        startY = endY = pos.y;
        drawSquare(); //update
    }

    function mouseXY(e) {

        if (mouseIsDown !== 0) {
            var pos = getMousePos(canvas, e);
            endX = e.offsetX;
            endY = e.offsetY;

            drawSquare();
        }
    }

    function drawSquare() {
        // creating a square
        var w = endX - startX;
        var h = endY - startY;
        var offsetX = (w < 0) ? w : 0;
        var offsetY = (h < 0) ? h : 0;
        var width = Math.abs(w);
        var height = Math.abs(h);

        context.clearRect(0, 0, canvas.width, canvas.height);
                
        context.beginPath();
        context.rect(startX + offsetX, startY + offsetY, width, height);
        context.fillStyle = "yellow";
        context.fill();
        context.lineWidth = 7;
        context.strokeStyle = 'black';
        context.stroke();

    }

    // function getMousePos(canvas, evt) {
    //     var rect = canvas.getBoundingClientRect();
    //     return {
    //         x: evt.clientX - rect.left,
    //         y: evt.clientY - rect.top
    //     };
    // }
}
