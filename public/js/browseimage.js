    var ctx;
    var context;
    var imgData;
    function browseImage(clicked_id)
    {   
        document.getElementById("drawingCanvas").innerHTML="";
        var div = document.createElement("canvas");
        div.id="canvas";
        div.className ="col-sm-12 col-md-12 col-lg-12";
        document.getElementById("drawingCanvas").append(div);
        var imageLoader = document.getElementById('imageLoader');
        imageLoader.addEventListener('change', handleImage, false);
        var canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
               function handleImage(e){
                        var reader = new FileReader();
                        reader.onload = function(event){
                                var img = new Image();
                                img.onload = function(){
                                    canvas.style.width = img.width;
                                    canvas.width=img.width;
                                    canvas.height=img.height;
                                    canvas.style.paddingLeft="0px";
                                    canvas.style.paddingRight="0px";
                                    canvas.style.overflowX="scroll";
                                    canvas.style.overflowY="scroll";
                                    canvas.style.width=img.width+"px";
                                    canvas.style.height=img.height+"px";
                                    // console.log( document.getElementById("#canvas").style.width );
                                    //canvas.style.height = img.height;
                                    ctx.drawImage(img,0,0);
                                    imgData = ctx.getImageData(0, 0, canvas.width,canvas.height);
                                    
                                    $('#canvasWidthinput label').text("canvas Width");
                                    $('#canvasHeightinput label').text("canvas height");
                                    document.getElementById("canvasWidth").value=(canvas.width);
                                    document.getElementById("canvasHeight").value=( canvas.height);
                                    document.getElementById("canvasWidthinput").style.display="block";
                                    document.getElementById("canvasHeightinput").style.display="block";

                                    history(clicked_id,imgData,ctx);
                                    layers(clicked_id,imgData);

                                }
                                img.src = event.target.result;
                        }
                        reader.readAsDataURL(e.target.files[0]);     
                }
                $("#canvas").click(function(){
                    console.log("clicked");
                    selectPixel(this,event);
                })


                function getMousePos(canvas, evt) {
                    var rect = canvas.getBoundingClientRect();
                    return {
                    x: evt.clientX - rect.left,
                    y: evt.clientY - rect.top
                    };
                }
                var canvas = document.getElementById('canvas');
                context = canvas.getContext('2d');
                //var canvas = document.getElementById('canvas');
                canvas.addEventListener('mousemove', function(evt) {
                        var width=document.getElementById("width").value;
                        var height=document.getElementById("height").value
                        var mousePos = getMousePos(canvas, evt);
                        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
                        //writeMessage(canvas, message);

                        var pixelHex = context.getImageData(mousePos.x, mousePos.y, canvas.width, canvas.height).data; 
                        var hex = "#" + ("000000" + rgbToHex(pixelHex[0], pixelHex[1], pixelHex[2])).slice(-6);
                        var pixelRGB = context.getImageData(mousePos.x, mousePos.y, canvas.width, canvas.height); 
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
                function rgbToHex(r, g, b) {
                    if (r > 255 || g > 255 || b > 255)
                        throw "Invalid color component";
                    return ((r << 16) | (g << 8) | b).toString(16);
                }

//                 var angleInDegrees=0;


// $("#RotateCanvas90").click(function(){ 
//     angleInDegrees+=90;
//     drawRotated(angleInDegrees);
// });

// $("#counterclockwise").click(function(){ 
//     angleInDegrees-=90;
//     drawRotated(angleInDegrees);
// });

// function drawRotated(degrees){
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.save();
//     ctx.translate(canvas.width/2,canvas.height/2);
//     ctx.rotate(degrees*Math.PI/180);
//     ctx.drawImage(canvas,-canvas.width/2,-canvas.width/2);
//     ctx.restore();
// }

    }

    function manipulatePixel(clicked_id)
    {
        var xValue=document.getElementById("PixelX").value;
        var yValue=document.getElementById("PixelY").value;
        var wValue=document.getElementById("PixelWidth").value;
        var hValue=document.getElementById("PixelHeight").value;
        var red_value=$("#PixelRVal").val();
        var green_value=$("#PixelGVal").val();
        var blue_value=$("#PixelBVal").val();
        var pixel= imgData.data;
        var init= 1;
        while(init < context.canvas.height){
            for(var j = 0; j < 5; j++)
            {
                var row = (init + j) * context.canvas.width * 4;
                for(var i = 0; i < context.canvas.width * 4; i += 4)
                {
                    pixel[row + i]      = red_value; //red
                    pixel[row + i + 1]	= green_value; //green
                    pixel[row + i + 2]  = blue_value; //blue
                }//console.log(pixel[row + i]);
            }
            init += 5;
        }
        context.putImageData(imgData, 0, 0, xValue, yValue, wValue, hValue);
        history(clicked_id,imgData,0 ,0,0,0,0,xValue, yValue, wValue, hValue);
        layers(clicked_id,imgData);
        imgData=context.putImageData(imgData, 0, 0, xValue, yValue, wValue, hValue);
        var canvas = document.getElementById('canvas');
        context = canvas.getContext('2d');
        ctx.drawImage(img,0,0);
        
        imgData=context.getImageData(0, 0, canvas.width, canvas.width);
        // imgData=imgData.getImageData(0, 0, canvas.width,canvas.height);



    }
