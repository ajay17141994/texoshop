var startingPointX;
var startingPointy;
var rectWidth;
var rectHeight;
function drawRect_selects(clicked_id){
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
        
            var canvas, context, startX, endX, startY, endY;
            var mouseIsDown = 0;

            function init() {


                tmp_canvas.addEventListener("mousedown", mouseDown, false);
                tmp_canvas.addEventListener("mousemove", mouseXY, false);
                tmp_canvas.addEventListener("mouseup", mouseUp, false);
            }

            function mouseUp(eve) {
                if (mouseIsDown !== 0) {
                    mouseIsDown = 0;
                    var pos = getMousePos(canvas, eve);
                    endX = eve.offsetX;
                    endY = eve.offsetY;
                    drawSquare(); //update on mouse-up
                }
            }

            function mouseDown(eve) {
                mouseIsDown = 1;
                var pos = getMousePos(canvas, eve);
                startX = endX = eve.offsetX;
                startY = endY =eve.offsetY;
                startingPointX=startX;
                startingPointy=startY;
                $("#selectionstartX").val(startX);
                $("#selectionstartY").val(startY);
                drawSquare(); //update
            }

            function mouseXY(eve) {

                if (mouseIsDown !== 0) {
                    var pos = getMousePos(canvas, eve);
                    endX = eve.offsetX;
                    endY = eve.offsetY;

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
                rectWidth=width;
                rectHeight=height;
                tmp_ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
                tmp_ctx.beginPath();
                tmp_ctx.rect(startX + offsetX, startY + offsetY, width, height);
                tmp_ctx.fillStyle = "grey";
                tmp_ctx.setLineDash([6]);
                tmp_ctx.lineCap = 'round';
                tmp_ctx.lineJoin = 'round';
                //tmp_ctx.fill();
                tmp_ctx.lineWidth =  document.getElementById("pencilErasersize").value;;
                tmp_ctx.strokeStyle = 'black';
                tmp_ctx.stroke();
                wh(width,height);
            }


            init();
                        
    }());
function wh(width,height)
 {
    $("#selectionwidth").val(width);
    $("#selectionheight").val(height);
    $("#selectionheight").click(function(){
         selection_crop();
    })
 }
function selection_crop(){
    var w=document.getElementById("selectionwidth").value;
    var h=document.getElementById("selectionheight").value;
        document.getElementById("drawingCanvas").innerHTML="";
        var div = document.createElement("canvas");
        div.id="canvas";
        div.className ="col-sm-12 col-md-12 col-lg-12";
        document.getElementById("drawingCanvas").append(div);
        canvas = document.getElementById('canvas');
        context = canvas.getContext('2d');
        img.onload = context;
        canvas.style.width = w;
        canvas.width=w;
        canvas.height=h;
        canvas.style.paddingLeft="0px";
        canvas.style.paddingRight="0px";
        canvas.style.overflowX="scroll";
        canvas.style.overflowY="scroll";
        canvas.style.width=w+"px";
        canvas.style.height=h+"px";
        context.drawImage(img,startingPointX,startingPointy,w,h,0,0,w,h);
}

}