var name;
var context;
var imgData;
var canvas;

// CREATING NEW CANVAS...............
// CREATING NEW CANVAS...............
function NewCanvas(clicked_id) 
{   document.getElementById("drawingCanvas").innerHTML="";
    var div = document.createElement("canvas");//CREATING CANVAS ELEMENT................................
    div.id="canvas";//SETTING ID FOR CANVAS.............................................................
   // div.className ="col-sm-12 col-md-12 col-lg-12";
    div.width = document.getElementById("width").value +"px";//SETTING WIDTH FOR CANVAS...........
    div.height = document.getElementById("height").value +"px";//SETTING HEIGHT FOR CANVAS........
    div.style.background =document.getElementById("color").value;//SETTING BACKGROUND-COLOR FOR CANVAS..
    // div.style.color = "white";//SETTING COLOR FOR CANVAS................................................
    // div.style.paddingLeft="0px";//SETTING LEFT PADDING  FOR CANVAS......................................
    // div.style.paddingRight="0px";//SETTING RIGHT PADDING FOR CANVAS.....................................
    // div.style.overflowX="scroll";//SETTING X-OVERFLOW FOR CANVAS........................................
    // div.style.overflowY="scroll";//SETTING Y-OVERFLOW FOR CANVAS........................................
    // div.style.position="absolute";//SETTING POSITION FOR CANVAS.........................................
    // name=document.getElementById("name").value;

    document.getElementById("drawingCanvas").appendChild(div);//APPENDING CANVAS INSIDE THE DIV HAVING ID DRAWINGCANVAS.......

    $('#canvasWidthinput label').text(document.getElementById("name").value +" Width");//PASSING CANVAS WIDTH INSIDE canvasWidthinput label.............
    $('#canvasHeightinput label').text(document.getElementById("name").value +" height");//PASSING CANVAS HEIGHT INSIDE canvasHeightinput label.............
    document.getElementById("canvasWidth").value=(document.getElementById("width").value);
    document.getElementById("canvasHeight").value=( document.getElementById("height").value);

    document.getElementById("canvasWidthinput").style.display="block";
    document.getElementById("canvasHeightinput").style.display="block";

        var divPos = {};
        var offset = $("#canvas").offset();
        function writeMessage(canvas, message) {
            context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.font = '18pt Calibri';
            context.fillStyle = 'black';
            context.fillText(message, 10, 25);
        }


        // GETTING MOUSE CLICK POSITION ON THE CANVAS.........
        // GETTING MOUSE CLICK POSITION ON THE CANVAS.........
        function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
            };
        }
        canvas = document.getElementById('canvas');
        context = canvas.getContext('2d');

        // GETTING MOUSE POSITION ON MOUSE MOVE ADN PASSING VALUE TO THE RESPECTIVE INPUTBOX...............
        // GETTING MOUSE POSITION ON MOUSE MOVE ADN PASSING VALUE TO THE RESPECTIVE INPUTBOX...............
        canvas.addEventListener('mousemove', function(evt) {
            var width=document.getElementById("width").value;
            var height=document.getElementById("height").value
            var mousePos = getMousePos(canvas, evt);
            var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
            //writeMessage(canvas, message);
            
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
        context.fillStyle =document.getElementById("color").value;
        context.fillRect(0,0, canvas.width, canvas.height);
        imgData =context.getImageData(0, 0, canvas.width, canvas.height);
        history(clicked_id,imgData,context);
        layers(clicked_id,imgData);
            //init();

        // MAKING GRID OVER THE CANVAS....................................
        // MAKING GRID OVER THE CANVAS....................................
        $('#toolbarOptiondiv :checkbox').change(function () {
            if ($("#grid").is(':checked')) {
                var width=document.getElementById("width").value;
                var height=document.getElementById("height").value
                    for (var x = 0.5; x < width ; x += 5) {
                    context.moveTo(x, 0);
                    context.lineTo(x, height);
                    }
                    for (var y = 0.5; y < height; y += 5) {
                    context.moveTo(0, y);
                    context.lineTo(width, y);
                    }
                    context.strokeStyle = "#eee";
                    context.stroke();
            } else {
                //console.log($(this).val() + ' is now unchecked');
            }
        });
        // MAKING GRID OVER THE CANVAS ENDS HERE....................................
        // MAKING GRID OVER THE CANVAS ENDS HERE....................................

        //CONVERTING RGB TO HEX.....................................................
        //CONVERTING RGB TO HEX.....................................................
        function rgbToHex(r, g, b) {
            if (r > 255 || g > 255 || b > 255)
                throw "Invalid color component";
            return ((r << 16) | (g << 8) | b).toString(16);
        }
        //CONVERTING RGB TO HEX ENDS HERE.....................................................
        //CONVERTING RGB TO HEX ENDS HERE.....................................................


        //CALLING GET IMAGE DATA FUNCTION ON CANVAS CLICK.....................
        //CALLING GET IMAGE DATA FUNCTION ON CANVAS CLICK.....................
        $("#canvas").click(function(){

            selectPixel(this,event);
    })



    



}  

