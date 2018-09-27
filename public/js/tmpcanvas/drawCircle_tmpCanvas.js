var tmp_canvas;
var tmp_ctx;
function drawcircle_tmpCanvas(clicked_id){
    (function() {
            $('#canvas').unbind('mousemove');
            $('#canvas').unbind('mousedown');
            $('#canvas').unbind('mouseup');
            $('#canvas').unbind('mouseout');

            $("#brightness").css('display','none');
            $("#contrast").css('display','none');
            $("#opacity").css('display','none');
            $("#blur").css('display','none');
            $("#color_pallet").css('display','none')

            $("#pencil_color label").text("Stroke  Colour");
            $("#shadow_color label").text("Fill -- Colour ");
            
            $("#pencilEraser_size").css('display','block')
            $("#shadowInput").css('display','block');
            $("#pencil_color").css('display','block');
            $("#shadow_color").css('display','block');
            $("#tmp_canvas").css( 'cursor', 'crosshair' );

            if($("#tmp_canvas").length > 0){
                tmp_canvas.removeEventListener('mousemove', mousemove);
                tmp_canvas.removeEventListener('mousedown', mousedown);
                tmp_canvas.removeEventListener('mouseup', mouseup);
                document.getElementById("tmp_canvas").removeEventListener('mousemove',mousemove);
            }

           if($("#tmp_canvas").length > 0){
                $("#tmp_canvas").css('display','block');
            }

            var canvas = document.querySelector('#canvas');
            var ctx = canvas.getContext('2d');
            
            var sketch = document.querySelector('#drawingCanvas');
            var sketch_style = getComputedStyle(sketch);

            // Creating a tmp canvas
            if($("#tmp_canvas").length == 0){
                tmp_canvas = document.createElement('canvas');
                tmp_ctx = tmp_canvas.getContext('2d');
                tmp_canvas.id = 'tmp_canvas';
                tmp_canvas.className="circle";
                tmp_canvas.width = canvas.width;
                tmp_canvas.height = canvas.height;
                
                sketch.appendChild(tmp_canvas);
            }
    
            var mouse = {x: 0, y: 0};
            var start_mouse = {x: 0, y: 0};
            var last_mouse = {x: 0, y: 0};
        
        
            /* Mouse Capturing Work */
            tmp_canvas.addEventListener('mousemove', mousemove=function(e) {
                var pos = getMousePos(canvas, e);
                mouse.x = e.offsetX;
                mouse.y = e.offsetY;
            }, false);
        
        
            /* Drawing on Paint App */
            function CircleFilter(){
                tmp_ctx.lineWidth = document.getElementById("Strokesize").value;
                tmp_ctx.lineJoin = 'round';
                tmp_ctx.lineCap = 'round';
                tmp_ctx.strokeStyle = document.getElementById("shapesStrokecolor").value;
                tmp_ctx.fillStyle = document.getElementById("shapesFillcolor").value;
                tmp_ctx.filter = "blur(" +document.getElementById("shapeblur").value +"px)";
            }
            tmp_canvas.addEventListener('mousedown', mousedown=function(e) {
                var pos = getMousePos(canvas, e);
                tmp_canvas.addEventListener('mousemove', onPaint, false);
                
                mouse.x = e.offsetX;
                mouse.y = e.offsetY;
                
                start_mouse.x = mouse.x;
                start_mouse.y = mouse.y;
                
                onPaint();
            }, false);
        
            tmp_canvas.addEventListener('mouseup', mouseup=function(e) {
                var pos = getMousePos(canvas, e);
                tmp_canvas.removeEventListener('mousemove', onPaint, false);
                
                // Writing down to real canvas now
                ctx.drawImage(tmp_canvas, 0, 0);
                // Clearing tmp canvas
                tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
                cPush(clicked_id);
            }, false);
        
            var onPaint = function() {
                CircleFilter();
                // Tmp canvas is always cleared up before drawing.
                tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
                
                var x = (mouse.x + start_mouse.x) / 2;
                var y = (mouse.y + start_mouse.y) / 2;
                
                var radius = Math.max(
                    Math.abs(mouse.x - start_mouse.x),
                    Math.abs(mouse.y - start_mouse.y)
                ) / 2;
                
                tmp_ctx.beginPath();
                tmp_ctx.arc(x, y, radius, 0, Math.PI*2, false);
                // tmp_ctx.arc(x, y, 5, 0, Math.PI*2, false);
                tmp_ctx.stroke();
                if($("#transparentFillcolor").is(':checked')) {
                   
                }
                else{
                    tmp_ctx.fill();
                }
                tmp_ctx.closePath();
                
            };
        
    }());
    
}
