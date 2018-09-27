//PAINT BRUSH TOOL GOES HERE................
function paintBrushTool(clicked_id)
{       
        $( "#canvas").unbind( "click" );
        $('#canvas').unbind();
        $('#canvas').unbind('mousemove');
        $('#canvas').unbind('mousedown');
        $('#canvas').unbind('mouseup');
        $('#canvas').unbind('mouseout');

        if($("#tmp_canvas").length > 0)
        { 
            document.getElementById("tmp_canvas").style.display="none";
            tmp_canvas.removeEventListener('mousemove', mousemove);
            tmp_canvas.removeEventListener('mousedown', mousedown);
            tmp_canvas.removeEventListener('mouseup', mouseup);
            document.getElementById("tmp_canvas").removeEventListener('mousemove',mousemove);
        }


        //$("#pencil_color label").text("Paint - Brush ");
        $("#shadowInput").css('display','none');
        $("#shadow_color").css('display','none')
        $("#pencil_color").css('display','none')
        $("#pencilEraser_size").css('display','none')
        $("canvas").css( 'cursor', 'url(images/artistic-brush.png), auto' );
        context.translate(0.5, 0.5);
        var isDrawing;

        function distanceBetween(point1, point2) {
            return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
        }

        function angleBetween(point1, point2) {
            return Math.atan2( point2.x - point1.x, point2.y - point1.y );
        }
        
        $("#canvas").bind('mousemove', function(e){
            moveMouse(e)
        });

        $("#canvas").bind('mousedown', function(e){
                downMouse(e)
        });

        $("#canvas").bind('mouseup', function(e){
                upMouse(e)
        });

        context.lineJoin = context.lineCap = 'round';
        var isDrawing, lastPoint;

        //canvas.onmousedown = function(e) {
        function downMouse(e){
            var pos = getMousePos(canvas, e);
            isDrawing = true;
            lastPoint = { x: e.offsetX, y:e.offsetY };
        };

        //canvas.onmousemove = function(e) {
        function moveMouse(e){
            var pos = getMousePos(canvas, e);
            if (!isDrawing) return;
        
            var currentPoint = { x: event.offsetX, y: event.offsetY };
            var dist = distanceBetween(lastPoint, currentPoint);
            var angle = angleBetween(lastPoint, currentPoint);
            
            for (var i = 0; i < dist; i+=5) {
                
                x = lastPoint.x + (Math.sin(angle) * i);
                y = lastPoint.y + (Math.cos(angle) * i);
                
                var radgrad = context.createRadialGradient(x,y,3,x,y,5);
                
                radgrad.addColorStop(0, '#000');
                radgrad.addColorStop(0.5, 'rgba(0,0,0,0.5)');
                radgrad.addColorStop(1, 'rgba(0,0,0,0)');
                console.log("paintbrushtool");
                context.fillStyle = radgrad;
                context.lineWidth = 15;
                context.fillRect(x-20, y-20, 40, 40);
            }
        
            lastPoint = currentPoint;
        };

        //canvas.onmouseup = function() {
        function upMouse(e){
            isDrawing = false;
            cPush_paintbrush(clicked_id);
        };
}