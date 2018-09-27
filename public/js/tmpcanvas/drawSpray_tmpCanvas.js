function drawSpray_tmpCanvas(clicked_id){
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

            $("#pencil_color label").text("Stroke Colour");
            $("#shadow_color label").text("Fill - - Colour      ");
            
            $("#pencilEraser_size").css('display','block')
            $("#shadowInput").css('display','block')
            $("#pencil_color").css('display','block')
            $("#shadow_color").css('display','block')

            if($("#tmp_canvas").length > 0)
            { 
                tmp_canvas.removeEventListener('mousemove', mousemove);
                tmp_canvas.removeEventListener('mousedown', mousedown);
                tmp_canvas.removeEventListener('mouseup', mouseup);
                document.getElementById("tmp_canvas").removeEventListener('mousemove',mousemove);
            }

            if($("#tmp_canvas").length > 0)
            {
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
                tmp_canvas.width = canvas.width;
                tmp_canvas.height = canvas.height;
                
                sketch.appendChild(tmp_canvas);
            }

            $("#tmp_canvas").css( 'cursor', 'crosshair' );
            var mouse = {x: 0, y: 0};
            var start_mouse = {x: 0, y: 0};
            var last_mouse = {x: 0, y: 0};
            
            var sprayIntervalID;
            
            
            /* Mouse Capturing Work */
            tmp_canvas.addEventListener('mousemove', mousemove=function(e) {
                mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
                mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
            }, false);
        
        
            /* Drawing on Paint App */
            function SprayFilter(){
                tmp_ctx.lineWidth = document.getElementById("Strokesize").value;
                tmp_ctx.lineJoin = 'round';
                tmp_ctx.lineCap = 'round';
                tmp_ctx.strokeStyle = document.getElementById("shapesStrokecolor").value;
                tmp_ctx.fillStyle = document.getElementById("shapesFillcolor").value;
                tmp_ctx.filter = "blur(" +document.getElementById("shapeblur").value +"px)";
            }
            tmp_canvas.addEventListener('mousedown', mousedown=function(e) {
                tmp_canvas.addEventListener('mousemove', onPaint, false);
                
                mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
                mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
                
                start_mouse.x = mouse.x;
                start_mouse.y = mouse.y;
                
                onPaint();
                sprayIntervalID = setInterval(onPaint, 50);
            }, false);
        
            tmp_canvas.addEventListener('mouseup', mouseup=function() {
                tmp_canvas.removeEventListener('mousemove', onPaint, false);
                
                // Writing down to real canvas now
                ctx.drawImage(tmp_canvas, 0, 0);
                // Clearing tmp canvas
                tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
                
                clearInterval(sprayIntervalID);
                cPush(clicked_id);
            }, false);
            
            var onPaint = function() {
                SprayFilter();
                // Tmp canvas is always cleared up before drawing.
                // tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
                
                var x = mouse.x;
                var y = mouse.y;
                
                generateSprayParticles();
            };
        
            var getRandomOffset = function(radius) {
                var random_angle = Math.random() * (2*Math.PI);
                var random_radius = Math.random() * radius;
                
                // console.log(random_angle, random_radius, Math.cos(random_angle), Math.sin(random_angle));
                
                return {
                    x: Math.cos(random_angle) * random_radius,
                    y: Math.sin(random_angle) * random_radius
                };
            };
        
            var generateSprayParticles = function() {
                // Particle count, or, density
                var density = 50;
                
                for (var i = 0; i < density; i++) {
                    var offset = getRandomOffset(10);
                    
                    var x = mouse.x + offset.x;
                    var y = mouse.y + offset.y;
                    
                    tmp_ctx.fillRect(x, y, 1, 1);
                }
            };
        
    }());
}