function getMousePos(canvas, evt) {
    console.log(canvas);
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}