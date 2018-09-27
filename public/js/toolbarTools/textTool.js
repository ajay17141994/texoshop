//TEXT TOOL GOES HERE................
function textTool(clicked_id)
{  
    $('#canvas').unbind();
    $('#canvas').unbind('mousemove');
    $('#canvas').unbind('mousedown');
    $('#canvas').unbind('mouseup');
    $('#canvas').unbind('mouseout');
    $("#Fontsizeinput").css('display','block')
    $("#Fontinput").css('display','block')
        var i=0;
        $( "#canvas").unbind( "click" );
        if(canvas)
        {
            $("canvas").css( 'cursor', 'text' );
            var inputid="textboxcontainer"+i;
            $("#drawingCanvas").append('<div class="input-group textboxdiv" id="textboxdiv'+i+'"  > <input type="text" class="form-control textboxcontainer" onclick="edittext(this.id)" id="textboxcontainer'+i+'"  value="Your Text Here..." autocomplete="off" aria-describedby="sizing-addon2"></div>');
            var inputtext=document.getElementById('textboxcontainer'+i+'').value;
            var textboxData=document.getElementById('textboxdiv'+i+'').innerHTML;
            // $('textboxcontainer'+i+'')
            $('#textboxcontainer'+i+'').draggable();
            $('#textboxcontainer'+i+'').resizable({
                //handles: "n, e, s, w, ne, se, sw, nw"
            });
            //$('#font').fontselect();
            $('#font').fontselect().change(function(){
                // replace + signs with spaces for css
                var font = $(this).val().replace(/\+/g, ' ');

                // split font into family and weight
                font = font.split(':');

                // set family on paragraphs
                $('#textboxcontainer'+i+'').css('font-family', font[0]);
            });

            $("#size").change(function() {
                $('#textboxcontainer'+i+'').css("font-size", $(this).val() + "px");
            });

            $("#fontSize").change(function() {
                $('#textboxcontainer'+i+'').css("font-size", $(this).val() + "px");
            });

            $("#fontSize").click(function(){
                document.getElementById("size").disabled = true;
                document.getElementById("fontSize").disabled = false;
            });

            $("#size").click(function(){
                document.getElementById("fontSize").disabled = true;
                document.getElementById("size").disabled = false;
            });

            $("#colorpallet").change(function(){
                var Text_color = document.getElementById("colorpallet").value;
                $('#textboxcontainer'+i+'').css('color',Text_color);

            });

            $("#canvas").click(function(){
            
                $("#"+inputid).css('border','0px solid');
                $(".ui-icon").css('opacity','0');
                // $(clicked_id).resizable('destroy');
            });
            history(clicked_id,0,0,0,inputtext,textboxData,inputid);
            layers(clicked_id,0,inputtext,textboxData,inputid);
        }
}
function edittext(clicked_id)
{
    // $(clicked_id).css('border','2px solid black');
    $("#"+clicked_id).addClass("edittext");
}