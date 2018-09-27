var name;
var context;
var imgData;
var canvas;
var img;
// CREATING NEW CANVAS...............
// CREATING NEW CANVAS...............
function NewCanvas(clicked_id) 
{   
    //document.getElementById("drawingCanvas").innerHTML="";
    
    var div = document.createElement("canvas");//CREATING CANVAS ELEMENT................................
    div.id="canvas";//SETTING ID FOR CANVAS.............................................................
   // div.className ="col-sm-12 col-md-12 col-lg-12";
    div.style.width = document.getElementById("width").value +"px";//SETTING WIDTH FOR CANVAS...........
    div.style.height = document.getElementById("height").value +"px";//SETTING HEIGHT FOR CANVAS........
    //div.style.background =document.getElementById("color").value;//SETTING BACKGROUND-COLOR FOR CANVAS..
   // div.style.top="20px";
    //div.style.left="20px";
    div.style.color = "white";//SETTING COLOR FOR CANVAS................................................
    div.style.paddingLeft="0px";//SETTING LEFT PADDING  FOR CANVAS......................................
    div.style.paddingRight="0px";//SETTING RIGHT PADDING FOR CANVAS.....................................
    div.style.overflowX="scroll";//SETTING X-OVERFLOW FOR CANVAS........................................
    div.style.overflowY="scroll";//SETTING Y-OVERFLOW FOR CANVAS........................................
    div.style.position="absolute";//SETTING POSITION FOR CANVAS.........................................
    name=document.getElementById("name").value;

    document.getElementById("drawingCanvas").appendChild(div);//APPENDING CANVAS INSIDE THE DIV HAVING ID DRAWINGCANVAS.......

    $('#canvasWidthinput label').text(document.getElementById("name").value +" Width");//PASSING CANVAS WIDTH INSIDE canvasWidthinput label.............
    $('#canvasHeightinput label').text(document.getElementById("name").value +" height");//PASSING CANVAS HEIGHT INSIDE canvasHeightinput label.............
    document.getElementById("canvasWidth").value=(document.getElementById("width").value);
    document.getElementById("canvasHeight").value=( document.getElementById("height").value);
// $('#drawingCanvas').ruler();
    document.getElementById("canvasWidthinput").style.display="block";
    document.getElementById("canvasHeightinput").style.display="block";

        var divPos = {};
        var offset = $("#canvas").offset();
        canvas = document.getElementById('canvas');
        canvas.width=document.getElementById("canvasWidth").value;
        canvas.height=document.getElementById("canvasHeight").value;
       // drawCheckeredBackground(canvas);
      // $('#othercheckbox input[name="zip"]').click(function () {
                if($("#transparent").is(':checked')) {
                    console.log("inside checked");
                    drawCheckeredBackground(canvas);
                    console.log(canvas.width);
                    //div.style.border ="1px solid grey"; 
                        function drawCheckeredBackground(can, nRow, nCol) {
                            var ctx = can.getContext("2d");
                            var w = can.width;
                            var h = can.height;

                            nRow = nRow || 75;    // default number of rows
                            nCol = nCol || 75;    // default number of columns

                            w /= nCol;            // width of a block
                            h /= nRow;            // height of a block

                            for (var i = 0; i < nRow; ++i) {
                                for (var j = 0, col = nCol / 2; j < col; ++j) {
                                    ctx.rect(2 * j * w + (i % 2 ? 0 : w), i * h, w, h);
                                }
                            }

                            ctx.fill();
                        }

            
                } else {
                  div.style.background =document.getElementById("color").value;
                  
                }
            //});
       context = canvas.getContext('2d');
       
     

        // GETTING MOUSE POSITION ON MOUSE MOVE ADN PASSING VALUE TO THE RESPECTIVE INPUTBOX...............
        // GETTING MOUSE POSITION ON MOUSE MOVE ADN PASSING VALUE TO THE RESPECTIVE INPUTBOX...............
        canvas.addEventListener('mousemove', function(evt) {
            var width=document.getElementById("width").value;
            var height=document.getElementById("height").value
            var mousePos = getMousePos(canvas, evt);
            var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;


            
            //GETTING RGB VALUE FOR THE CANVAS AS PER MOUSE CURSOR POSITION ON THE CANVAS........... 
            //GETTING RGB VALUE FOR THE CANVAS AS PER MOUSE CURSOR POSITION ON THE CANVAS...........
            var pixelHex = context.getImageData(mousePos.x, mousePos.y, width, height).data;

            var hex = "#" + ("000000" + rgbToHex(pixelHex[0], pixelHex[1], pixelHex[2])).slice(-6);
            var pixelRGB = context.getImageData(mousePos.x, mousePos.y, width, height); 
            red = pixelRGB.data[0];
            green = pixelRGB.data[1];
            blue = pixelRGB.data[2];
            alpha = pixelRGB.data[3];
            document.getElementById("mouseXvalue").value=mousePos.x;
            document.getElementById("mouseYvalue").value=mousePos.y;
            document.getElementById("redValue").value=red;
            document.getElementById("greenValue").value=green;
            document.getElementById("blueValue").value=blue;
            document.getElementById("alphaValue").value=alpha;
            document.getElementById("hexValue").value=hex;
        }, false);
            console.log(canvas.width);
            console.log(canvas.height);
             context.fillStyle =document.getElementById("color").value;
            // context.fillRect(0,0, canvas.width, canvas.height);
            imgData =context.getImageData(0, 0, canvas.width, canvas.height);
            //cPush(clicked_id);
            history(clicked_id,imgData,context);
            layers(clicked_id,imgData);
            
        //    $(canvas).ruler();
            zoominout();
            // xyshow();

}  
            //CALLING GET IMAGE DATA FUNCTION ON CANVAS CLICK.....................
            //CALLING GET IMAGE DATA FUNCTION ON CANVAS CLICK.....................
            function selectpix()
            {   context.translate(0.5, 0.5);
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
                $("#bottom_nav").css('display','block');
                $("#canvas").dblclick(function(){
                    selectPixel(this,event);
                })
            }

            //CALLING ZOOMINOUT FUNCTION..............



