//PENCIL AND ERASER TOOL FUNCTION GOES HERE...............
var flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "black",
    y = 2;
var color;
var size=$("#pencilErasersize").val();
var shadowBlur;
var shadowColor;
//   $("#pencilErasersize").change(function(){
//     init();
//     console.log("change function called");
// });


function init(clicked_id) { 
    console.log(canvas);
        $('#canvas').unbind('mousemove');
        $('#canvas').unbind('mousedown');
        $('#canvas').unbind('mouseup');
        $('#canvas').unbind('mouseout');
        if($("#tmp_canvas").length > 0)
        { console.log("there is tmp canvas");
            document.getElementById("tmp_canvas").style.display="none";
            tmp_canvas.removeEventListener('mousemove', mousemove);
            tmp_canvas.removeEventListener('mousedown', mousedown);
            tmp_canvas.removeEventListener('mouseup', mouseup);
            document.getElementById("tmp_canvas").removeEventListener('mousemove',mousemove);
        }
        
        $("#brightness").css('display','none');
        $("#contrast").css('display','none');
        $("#opacity").css('display','none');
        $("#blur").css('display','none');
        $("#color_pallet").css('display','none')

        $("#pencilEraser_size label").text("Size");
        $("#shadowInput label").text("shadow");
        $("#pencil_color label").text("Pencil Color");
        $("#shadow_color label").text("Shadow Color ");

        $("#pencilEraser_size").css('display','block')
        $("#shadowInput").css('display','block')
        $("#pencil_color").css('display','block')
        $("#shadow_color").css('display','block')
        
        if(clicked_id=="eraser")
        {   
            $( "#canvas").unbind( "click" );
            $('#canvas').unbind('mousemove');
            $('#canvas').unbind('mousedown');
            $('#canvas').unbind('mouseup');
            $('#canvas').unbind('mouseout');
            $("canvas").css( 'cursor', 'url(images/eraser.png), auto' );
            $("#pencilErasersize").change(function(){
            color=document.getElementById("canvas").style.backgroundColor;
            size=document.getElementById("pencilErasersize").value;
            alert(size);
            shadowBlur=0;
            shadowColor="white";
            done(clicked_id);
            });
        }

        else if(clicked_id=="pencil")
        {   
            console.log(document.getElementById("pencilColor").value);
            console.log(document.getElementById("shadowColor").value);
            $( "#canvas").off( "click" );
            $('#canvas').unbind('mousemove');
            $('#canvas').unbind('mousedown');
            $('#canvas').unbind('mouseup');
            $('#canvas').unbind('mouseout');
            $("canvas").css( 'cursor', 'url(images/pencil.png), auto' );
            $("#pencilErasersize").change(function(){
                size=document.getElementById("pencilErasersize").value;
            });

            $("#shadow").change(function(){
                shadowBlur=document.getElementById("shadow").value;
            });

            $("#pencilColor").change(function(){
                color=document.getElementById("pencilColor").value;
            });

            $("#shadowColor").change(function(){
                shadowColor=document.getElementById("shadowColor").value;
            });
            done(clicked_id);
        }

        context.translate(0.5, 0.5);
        w = canvas.width;
        h = canvas.height;

        function done(clicked_id)
        { console.log("done function is being called");

            $("#canvas").bind('mousemove', function(e){
                findxy('move', e, clicked_id)
            });

            $("#canvas").bind('mousedown', function(e){
                findxy('down', e, clicked_id)
            });

            $("#canvas").bind('mouseup', function(e){
                findxy('up', e, clicked_id)
            });

            $("#canvas").bind('mouseout', function(e){
                findxy('out', e, clicked_id)
            });
        }
}
    
function draw(clicked_id) {
    context.beginPath();
    context.moveTo(prevX, prevY);
    context.lineTo(currX, currY);   
    context.strokeStyle=color;
    context.lineWidth = size;
    context.shadowBlur = shadowBlur;
    context.shadowColor = shadowColor;
    context.stroke();
    context.closePath();
}
    
function save() {
    document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
}

function findxy(res, e, clicked_id) {
    if (res == 'down') {
        var pos = getMousePos(canvas, e);
        prevX = currX;
        prevY = currY;
        currX = e.offsetX;
        currY = e.offsetY;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            var pos = getMousePos(canvas, e);
            context.beginPath();
            context.fillStyle = x;
            context.closePath();
            dot_flag = false;
        }
    }

    if (res == 'up' ) {
        var pos = getMousePos(canvas, e);
        flag = false;
        cPush(clicked_id);
    }

    if (res == "out") {
        var pos = getMousePos(canvas, e);
        flag = false;
    }

    if (res == 'move') {
        var pos = getMousePos(canvas, e);
        if (flag) {
            var pos = getMousePos(canvas, e);
            prevX = currX;
            prevY = currY;
            currX = e.offsetX;
            currY = e.offsetY;
            draw(clicked_id);
        }
    }
}    //PENCIL AND ERASER TOOL FUNCTION GOES HERE...............