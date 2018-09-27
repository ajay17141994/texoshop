$("#shapeblur").change(function(){
    var shapeblur=document.getElementById("shapeblur").value;
    document.getElementById("demo").style.filter="blur("+shapeblur+"px)";  
})

$("#shapesbrightness").change(function(){
    var shapesbrightness=document.getElementById("shapesbrightness").value;
    document.getElementById("demo").style.filter="brightness("+shapesbrightness+"%)";  
})

$("#shapesopacity").change(function(){
    var shapesopacity=document.getElementById("shapesopacity").value;
    document.getElementById("demo").style.filter="opacity("+shapesopacity+"%)";  
})

$("#shapesFillcolor").change(function(){
    var shapesFillcolor=document.getElementById("shapesFillcolor").value;
    document.getElementById("demo").style.backgroundColor=shapesFillcolor;  
})

$("#shapesStrokecolor").change(function(){
    var shapesStrokecolor=document.getElementById("shapesStrokecolor").value;
    document.getElementById("demo").style.borderColor=shapesStrokecolor; 
    document.getElementById("demo").style.borderStyle="solid"; 
})

$("#shapescontrast").change(function(){
    var shapescontrast=document.getElementById("shapescontrast").value;
    document.getElementById("demo").style.filter="contrast("+shapesopacity+"%)";
})

$("#Strokesize").change(function(){
    var Strokesize=document.getElementById("Strokesize").value;
    document.getElementById("demo").style.borderWidth=Strokesize;  
})