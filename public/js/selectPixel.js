var selectPixel = function ($this,event){
    console.log("electPixel called");

    document.getElementById("clickedPixelValuex").value=event.offsetX;
    document.getElementById("clickedPixelValuey").value=event.offsetY;
    document.getElementById("PixelX").value=event.offsetX;
    document.getElementById("PixelY").value=event.offsetY;
    //$("#canvas").bind( "dblclick", function() {
    getImageData(event.offsetX,event.offsetY);
    //});
}
var getImageData = function (x,y) {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    //context.translate(0.5, 0.5);
    data = context.getImageData(x, y, 1, 1);
    //returns rgba()
    context.beginPath();
   // alert("X = "+document.getElementById("clickedPixelValuex").value+", y = "+document.getElementById("clickedPixelValuey").value);
    context.rect(x,y,5,5);
    context.stroke();
}