        // TOOLBAR DRAGGABLE AND ROTATABLE..........
        // TOOLBAR DRAGGABLE AND ROTATABLE..........

        $(function () {
            $(".toolbar").draggable({
                axis: "x",
                scroll: false
            });
        });

        // $(function () {
        //     $(".toolbar").rotatable({
        //     });
        // });

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


        //BCOB(BRIGHTNESS CONTRAS OPACITY BLUR) RESIZABLE ROTATABLE DRAGGABLE GOES HERE............
        //BCOB(BRIGHTNESS CONTRAS OPACITY BLUR) RESIZABLE ROTATABLE DRAGGABLE GOES HERE............
        // $(function () {
        //     $(".bcob").resizable({
        //     });
        // });

        // $(function () {
        //     $(".bcob").rotatable({
        //     });
        // });

        // $(function () {
        //     $(".bcob").draggable({
        //         axis: "y",
        //         scroll: false
        //     });
        // });


        //HISTORY RESIZABLE DRAGGABLE GOES HERE............
        //HISTORY RESIZABLE DRAGGABLE GOES HERE............
        $(function () {
            $(".history").draggable({
                //axis: "x",
                scroll: false
            });
        });

        $(function () {
            $(".history").resizable({
                handles: "n, e, s, w, ne, se, sw, nw"
               
            });
        });


        //LAYERS RESIZABLE DRAGGABLE GOES HERE............
        //LAYERS RESIZABLE DRAGGABLE GOES HERE............
        $(function () {
            $(".layers").draggable({
                // axis: "x",
                scroll: false
            });
        });

        $(function () {
            $(".layers").resizable({
                handles: "n, e, s, w, ne, se, sw, nw"
            });
        });


        //NAVIGATOR RESIZABLE DRAGGABLE GOES HERE............
        //NAVIGATOR RESIZABLE DRAGGABLE GOES HERE............
        $(function () {
            $(".navigator").draggable({
                //axis: "x",
                scroll: false
            });
        });

        $(function () {
            $(".navigator").resizable({
                handles: "n, e, s, w, ne, se, sw, nw"
            });
        });

    //brightness control.................
    //brightness control.................
    function changeBrightness()
    {
        var value=document.getElementById("brightnesspercentage").value;
        document.getElementById("canvas").style.filter="brightness("+value+"%)";

    }

    //contrast control..................
    //contrast control..................
    function changeContrast()
    {
        var value=document.getElementById("contrastpercentage").value;
        document.getElementById("canvas").style.filter="contrast("+value+"%)";
    }

    //opacity control..................
    //opacity control..................
    function changeOpacity()
    {
        var value=document.getElementById("opacitypercentage").value;
        document.getElementById("canvas").style.filter="opacity("+value+"%)";  
    }

    //blur control..................
    //blur control..................
    function changeBlur()
    {
        var value=document.getElementById("blurpercentage").value;
        document.getElementById("canvas").style.filter="blur("+value+"px)";  

    }