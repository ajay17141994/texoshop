window.onload = function(){

    //closing history div on X click...........
    //closing history div on X click...........
    document.getElementById('historyClose').onclick = function(){
        document.getElementById("history").style.display="none";
    };

    //closing layers div on X click...........
    //closing layers div on X click...........
    document.getElementById('layersClose').onclick = function(){
        document.getElementById("layers").style.display="none";
    };

    //closing navigator div on X click...........
    //closing navigator div on X click...........
    document.getElementById('navigatorClose').onclick = function(){
        document.getElementById("navigator").style.display="none";
    };

    //closing toolbaroption div on X click...........
    //closing toolbaroption div on X click...........
    document.getElementById('toolbarOptionclose').onclick = function(){
        document.getElementById("toolbarOptiondiv").style.display="none";
    };

    //display navigator div on navigatoroption click in view nav........
    //display navigator div on navigatoroption click in view nav........
    $("#navigatorOption").click(function() {
         document.getElementById("navigator").style.display="block";
    });

    //display layer div on layersOption click in view nav........
    //display layer div on layersOption click in view nav........
    $("#layersOption").click(function() {
         document.getElementById("layers").style.display="block";
    });

    //display history div on historyOption click in view nav........
    //display history div on historyOption click in view nav........
    $("#historyOption").click(function() {
         document.getElementById("history").style.display="block";
    });

    //display toolbar div on toolbarOption click in view nav........
    //display toolbar div on toolbarOption click in view nav........
    $("#toolbarOption").click(function() {
         document.getElementById("toolbar").style.display="block";
    });

    //display toolbarOptiondiv div on toolbarOptionchoice click in view nav........
    //display toolbarOptiondiv div on toolbarOptionchoice click in view nav........
    $("#toolbarOptionchoice").click(function() {
         document.getElementById("toolbarOptiondiv").style.display="block";
    });


    $(".toolbar").sortable({
        placeholder: 'slide-placeholder',
        axis: "y",
        revert: 150,
        start: function (e, ui) {

            placeholderHeight = ui.item.outerHeight();
            ui.placeholder.height(placeholderHeight + 15);
            $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);

        },
        change: function (event, ui) {

            ui.placeholder.stop().height(0).animate({
                height: ui.item.outerHeight() + 15
            }, 300);

            placeholderAnimatorHeight = parseInt($(".slide-placeholder-animator").attr("data-height"));

            $(".slide-placeholder-animator").stop().height(placeholderAnimatorHeight + 15).animate({
                height: 0
            }, 300, function () {
                $(this).remove();
                placeholderHeight = ui.item.outerHeight();
                $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);
            });

        },
        stop: function (e, ui) {

            $(".slide-placeholder-animator").remove();

        },
    });

    

    //gettting RGB color from toolbar foreground-color..............
    //gettting RGB color from toolbar foreground-color..............
    $("#foreground_color").spectrum({
        preferredFormat: "rgb",
        showInput: true,
        showPalette: true,
        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
    });

    $("#pencilColor").spectrum({
        preferredFormat: "hex",
        showInput: true,
        showPalette: true,
        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
    });

    $("#shadowColor").spectrum({
        preferredFormat: "hex",
        showInput: true,
        showPalette: true,
        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
    });


    $("#shapesFillcolor").spectrum({
        preferredFormat: "hex",
        showInput: true,
        showPalette: true,
        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
    });

    $("#shapesStrokecolor").spectrum({
        preferredFormat: "hex",
        showInput: true,
        showPalette: true,
        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
    });

    //having color in different format......................
    //having color in different format......................
    $(".sp-choose").click(function(){
        var format = $("#foreground_color").spectrum("get");
        format.toHex()       // "ff0000"
        format.toHexString() // "#ff0000"
        format.toRgb()       // {"r":255,"g":0,"b":0}
        format.toRgbString() // "rgb(255, 0, 0)"
        format.toHsv()       // {"h":0,"s":1,"v":1}
        format.toHsvString() // "hsv(0, 100%, 100%)"
        format.toHsl()       // {"h":0,"s":1,"l":0.5}
        format.toHslString() // "hsl(0, 100%, 50%)"
        format.toName()      // "red"
        $("#color_name").val(format.toName());
        $("#PixelRVal").val(format.toRgb().r);
        $("#PixelGVal").val(format.toRgb().g);
        $("#PixelBVal").val(format.toRgb().b);
        $("#color_name").css('background-color',format.toHexString()  );
        $("#color_name").css('color','white'  );
    })









};
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});