var layers_history_info=[];
var i=0;
function layers(clicked_id,imgData,inputtext,textboxData,inputid)
{
    if(clicked_id=="ok")
    {
        // $("#layers").append('<div class="row" id="ok" style="color:White;box-shadow:0px 1px 5px aliceblue;"><div class="col-am-12 col-md-12 col-lg-3" style="padding-right:0px;padding-top:2px;padding-bottom:2px;padding-top:5px;padding-bottom:5px;"><img class="img-responsive" src="images/document.svg" style="height:18px;"></div><div class="col-sm-12 col-md-12 col-lg-9" style="padding-left:0px;padding-top:5px;padding-bottom:5px;">New Image</div></div>');
        var id="ok"+i+"";
                $("#layersdiv").append('<div class="row" id="ok'+i+'" style="color:White;box-shadow:0px 1px 5px aliceblue;"><div class="col-am-12 col-md-12 col-lg-3" style="padding-right:0px;padding-top:2px;padding-bottom:2px;padding-top:5px;padding-bottom:5px;"><img class="img-responsive" src="images/document.svg" style="height:18px;"></div><div class="col-sm-12 col-md-12 col-lg-9" style="padding-left:0px;padding-top:5px;padding-bottom:5px;">New Image</div></div>');
                layers_history_info.push({id:id, imgData:imgData});
                $( "#ok"+i+"" ).click(function() {
                            jQuery.each(layers_history_info, function(i, val) {
                                    var key=i;
                                    var data=val;
                                    if(val.id=="ok0") 
                                    {
                                        context.putImageData(imgData, 0,0);
                                    }               
                            });
                    });
                i++;
    }
    else if(clicked_id=="text")
    {
        
        var id="text"+i+"";
                var inputtext=document.getElementById(inputid).value;

                $("#layersdiv").append('<div class="row" id="text'+i+'"" onclick="selectText(this.id,'+inputid+')" style="color:White;box-shadow:0px 1px 5px aliceblue;"><div class="col-am-12 col-md-12 col-lg-3" style="padding-right:0px;padding-top:2px;padding-bottom:2px;padding-top:5px;padding-bottom:5px;"><img class="img-responsive" src="images/document.svg" style="height:18px;"></div><div class="col-sm-12 col-md-12 col-lg-7" style="padding-left:0px;padding-top:5px;padding-bottom:5px;">'
                +inputtext +'</div><div class="col-sm-12 col-md-12 col-lg-2" style="padding-top:2px;padding-bottom:2px;" onclick="hidedisplay()" ><img src="images/invisible.svg" style="height:16px;"></div></div>');
                history_info.push({id:id, inputtext:inputtext, textboxData:textboxData});
                i++;
    }

    else if(clicked_id == "browseImage")
        {
            var id="browseImage"+i+"";
            $("#layersdiv").append('<div class="row" id="browseImage'+i+'" style="color:White;box-shadow:0px 1px 5px aliceblue;"><div class="col-am-12 col-md-12 col-lg-3" style="padding-right:0px;padding-top:2px;padding-bottom:2px;padding-top:5px;padding-bottom:5px;"><img class="img-responsive" src="images/document.svg" style="height:18px;"></div><div class="col-sm-12 col-md-12 col-lg-9" style="padding-left:0px;padding-top:5px;padding-bottom:5px;">New Image</div></div>');
            history_info.push({id:id, imgData:imgData});
            $( "#browseImage"+i+"" ).click(function() {
                        jQuery.each(history_info, function(i, val) {
                                var key=i;
                                var data=val;
                                if(val.id=="browseImage0") 
                                {
                                    context.putImageData(imgData, 0,0);
                                }               
                        });
                });
            i++;
        }
    }
function selectText(inputid)
{   
    $("#"+inputid).css('border','1px solid grey');
    $(".ui-icon").css('opacity','1');
    $("#"+inputid).resizable({
        //handles: "n, e, s, w, ne, se, sw, nw"
    });
}
// function hidedisplay(clicked_id)
// {
//     $("")
// }

