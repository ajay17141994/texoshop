function shape_modal_ok(clicked_id){

    if(clicked_id=="Line")
        { 
            document.getElementById("Shapemodal-footer").innerHTML="";
            $("#Shapemodal-footer").append('<button type="button" id="Line" class="btn btn-default" onclick="drawLine_tmpCanvas(this.id)" data-dismiss="modal">OK</button>');
            $("#Shapemodal-footer").append('<button type="button" id="close" class="btn btn-default" data-dismiss="modal">Close</button>');
        }

    if(clicked_id=="Circle")
        {
            document.getElementById("Shapemodal-footer").innerHTML="";
            $("#Shapemodal-footer").append('<button type="button" id="Circle" class="btn btn-default" onclick="drawcircle_tmpCanvas(this.id)" data-dismiss="modal">OK</button>');
            $("#Shapemodal-footer").append('<button type="button" id="close" class="btn btn-default" data-dismiss="modal">Close</button>');
        }

    if(clicked_id=="rectangle")
        {
            document.getElementById("Shapemodal-footer").innerHTML="";
            $("#Shapemodal-footer").append('<button type="button" id="rectangle" class="btn btn-default" onclick="drawRect_tmpCanvas(this.id)" data-dismiss="modal">OK</button>');
            $("#Shapemodal-footer").append('<button type="button" id="close" class="btn btn-default" data-dismiss="modal">Close</button>');
        }

    if(clicked_id=="Ellipse")
        {
            document.getElementById("Shapemodal-footer").innerHTML="";
            $("#Shapemodal-footer").append('<button type="button" id="Ellipse" class="btn btn-default" onclick="drawEclipse_tmpCanvas(this.id)" data-dismiss="modal">OK</button>');
            $("#Shapemodal-footer").append('<button type="button" id="close" class="btn btn-default" data-dismiss="modal">Close</button>');
        }

    if(clicked_id=="Spray")
        {
            document.getElementById("Shapemodal-footer").innerHTML="";
            $("#Shapemodal-footer").append('<button type="button" id="Spray" class="btn btn-default" onclick="drawSpray_tmpCanvas(this.id)" data-dismiss="modal">OK</button>');
            $("#Shapemodal-footer").append('<button type="button" id="close" class="btn btn-default" data-dismiss="modal">Close</button>');
        }
}