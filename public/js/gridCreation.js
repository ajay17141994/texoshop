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

    }

});