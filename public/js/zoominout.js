//ZOOMINOUT FUNCTION GOES HERE..............
function zoominout()
{
    (function () {
    var currentScale = 1;

    var cssPrefixesMap = [
        'scale',
        '-webkit-transform',
        '-moz-transform',
        '-ms-transform',
        '-o-transform',
        'transform'];

    function setScale(scale) {

        if(currentScale>=1 && currentScale<= 10)
        {
            var scaleCss = {};

            cssPrefixesMap.forEach(function (prefix) {
                scaleCss[prefix] = 'scale(' + scale + ')';
            });


            $('#canvas').css(scaleCss);
            $('#tmp_canvas').css(scaleCss);
        }
    }
        $(".decrease").click(function () {
            if(currentScale > 1)
            {
            setScale(currentScale = currentScale - 0.1);
            }
        });

        $(".increase").click(function () {
            if(currentScale < 10)
            {
            setScale(currentScale = currentScale + 0.1);
            }
        });
    })();
}//ZOOMINOUT FUNCTION ENDS HERE..............