
var history_info=[];
var i=0;
function history(clicked_id,imgData,context,background_color,inputtext,textboxData,inputid,xValue, yValue, wValue, hValue)
{   
    var canvas=document.getElementById("canvas");
    if(clicked_id=="ok"){

        var id="ok"+i+"";
        $("#historydiv").append('<div class="row" id="ok'+i+'" style="color:White;box-shadow:0px 1px 5px aliceblue;"><div class="col-am-12 col-md-12 col-lg-3" style="padding-right:0px;padding-top:2px;padding-bottom:2px;padding-top:5px;padding-bottom:5px;"><img class="img-responsive" src="images/document.svg" style="height:18px;"></div><div class="col-sm-12 col-md-12 col-lg-9" style="padding-left:0px;padding-top:5px;padding-bottom:5px;">New Image</div></div>');
        history_info.push({id:id, imgData:imgData});
        $( "#ok"+i+"" ).click(function() {
                       jQuery.each(history_info, function(i, val) {
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

    else if(clicked_id=="paintbucket"){  
        console.log("paintbucket inside history one ");       
        var id="paintbucket"+i+"";
        var color=document.getElementById("canvas").style.backgroundColor;
            $("#historydiv").append('<div class="row" id="paintbucket'+i+'" onclick="backhistory(this.id)" style="color:White;box-shadow:0px 1px 5px aliceblue;"><div class="col-am-12 col-md-12 col-lg-3" style="padding-right:0px;padding-top:5px;padding-bottom:5px;"><img class="img-responsive" src="images/bucket.svg" style="height:16px;"></div><div class="col-sm-12 col-md-12 col-lg-9" style="padding-left:0px;padding-top:5px;padding-bottom:5px;color:'+color+'">Paint bucket tool</div></div>');
            history_info.push({id:id, imgData:imgData});
            i++;

    }

    else if(clicked_id=="text"){         
        var id="text"+i+"";
        var inputtext=document.getElementById(inputid).value;
            $("#historydiv").append('<div class="row" id="text'+i+'" onclick="selectText(this.id,'+inputid+')" style="color:White;box-shadow:0px 1px 5px aliceblue;"><div class="col-am-12 col-md-12 col-lg-3" style="padding-right:0px;padding-top:5px;padding-bottom:5px;"><img class="img-responsive" src="images/text.svg" style="height:16px;"></div><div class="col-sm-12 col-md-12 col-lg-9" style="padding-left:0px;padding-top:5px;padding-bottom:5px;">'+inputtext+'</div></div>');
            history_info.push({id:id, inputtext:inputtext, textboxData:textboxData});

    }
     

    else if(clicked_id == "browseImage")
    {
        var id="browseImage"+i+"";
        $("#historydiv").append('<div class="row" id="browseImage'+i+'" style="color:White;box-shadow:0px 1px 5px aliceblue;"><div class="col-am-12 col-md-12 col-lg-3" style="padding-right:0px;padding-top:2px;padding-bottom:2px;padding-top:5px;padding-bottom:5px;"><img class="img-responsive" src="images/document.svg" style="height:18px;"></div><div class="col-sm-12 col-md-12 col-lg-9" style="padding-left:0px;padding-top:5px;padding-bottom:5px;">New Image</div></div>');
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

    else if(clicked_id=="apply"){         
        var id="apply"+i+"";

        // var color=document.getElementById("canvas").style.backgroundColor;
            $("#historydiv").append('<div class="row" id="apply'+i+'" onclick="imagebackhistory(this.id,'+xValue+','+yValue+','+wValue+','+hValue+')" style="color:White;box-shadow:0px 1px 5px aliceblue;"><div class="col-am-12 col-md-12 col-lg-3" style="padding-right:0px;padding-top:5px;padding-bottom:5px;"><img class="img-responsive" src="images/bucket.svg" style="height:16px;"></div><div class="col-sm-12 col-md-12 col-lg-9" style="padding-left:0px;padding-top:5px;padding-bottom:5px;color:'+color+'">Maniplated pixel</div></div>');
            history_info.push({id:id, imgData:imgData, xValue:xValue, yValue:yValue, wValue:wValue, hValue:hValue});
            i++;

    }
}


function imagebackhistory(clicked_id,xValue, yValue, wValue, hValue)
{
    jQuery.each(history_info, function(i, val) {
        var key=i;
        var data=val;                             
        if(val.id==clicked_id) 
        {
            context.putImageData(val.imgData, 0, 0,  xValue, yValue, wValue, hValue);
        }               
    });
}
function backhistory(clicked_id)
                {
                    jQuery.each(history_info, function(i, val) {
                                var key=i;
                                var data=val;                             
                                if(val.id==clicked_id) 
                                {
                                    context.putImageData(val.imgData, 0,0);
                                }               
                    });
                }

var cPushArray = new Array();
var cStep = -1;
var ctx;
	
function cPush(clicked_id) {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    var i=0;
    var id=clicked_id+"i";
    $("#historydiv").append('<div class="row" id='+id+' onclick="history_chk(this.id,'+cStep+')" style="color:White;box-shadow:0px 1px 5px aliceblue;"><div class="col-am-12 col-md-12 col-lg-3" style="padding-right:0px;padding-top:2px;padding-bottom:2px;padding-top:5px;padding-bottom:5px;"><img class="img-responsive" src="images/document.svg" style="height:18px;"></div><div class="col-sm-12 col-md-12 col-lg-9" style="padding-left:0px;padding-top:5px;padding-bottom:5px;">'+clicked_id+'</div></div>');
    cPushArray.push(canvas.toDataURL());
}

function cPush_paintbrush(clicked_id) {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    var i=0;
    var id=clicked_id+"i";
    $("#historydiv").append('<div class="row" id='+id+' onclick="history_chk(this.id,'+cStep+')" style="color:White;box-shadow:0px 1px 5px aliceblue;"><div class="col-am-12 col-md-12 col-lg-3" style="padding-right:0px;padding-top:2px;padding-bottom:2px;padding-top:5px;padding-bottom:5px;"><img class="img-responsive" src="images/document.svg" style="height:18px;"></div><div class="col-sm-12 col-md-12 col-lg-9" style="padding-left:0px;padding-top:5px;padding-bottom:5px;">'+clicked_id+'</div></div>');
    cPushArray.push(canvas.toDataURL());
}

function cUndo() {
    if (cStep > 0) {
        cStep--;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { context.drawImage(canvasPic, 0, 0); }
    }
}

function cRedo() {
    if (cStep < cPushArray.length-1) {
        cStep++;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { context.drawImage(canvasPic, 0, 0); }
    }
}

function history_chk(clicked_id,cStep){
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { context.drawImage(canvasPic, 0, 0); }
}

function pencil_history_chk(){
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { context.drawImage(canvasPic, 0, 0); }
}