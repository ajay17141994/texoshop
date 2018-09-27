//paintbucket tool goes here..................
function paintBucketTool(clicked_id)
{ 
        $('#canvas').unbind();
        $('#canvas').unbind('mousemove');
        $('#canvas').unbind('mousedown');
        $('#canvas').unbind('mouseup');
        $('#canvas').unbind('mouseout');
        var background_color=document.getElementById("foreground_color").value;
        $(".sp-choose").click(function(){
            var format = $("#foreground_color").spectrum("get");
            format.toHexString() // "#ff0000"
            background_color =format.toHexString();

        })

        $("canvas").css( 'cursor', 'url(images/paint-bucket.png), auto' );
        $( "#canvas" ).click(function() {
            var format = $("#foreground_color").spectrum("get");
            format.toHexString() // "#ff0000"
            background_color =format.toHexString();
           // var background_color = document.getElementById("foreground_color").value;
            $("canvas").css('background-color',background_color);
            context.fillStyle =background_color;
            context.fillRect(0,0, canvas.width, canvas.height);
            var imgData =context.getImageData(0, 0, canvas.width, canvas.height);
            history(clicked_id,imgData,context,background_color);
        });
}