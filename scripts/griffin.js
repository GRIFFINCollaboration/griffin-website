function drawEmbelishment(id){
    //id: string; id of canvas element to draw in
    //draw the embelishment frame

    var canvas, context,
        width, height, margin,
        horizFraction, vertFraction;

    canvas = document.getElementById('embelishment');
    context = canvas.getContext('2d');
    width = document.getElementById('wrap').offsetWidth;
    height = document.getElementById('wrap').offsetHeight;

    canvas.width = width;
    canvas.height = height;
    margin = 70;
    bottomMargin = 200;
    horizFraction = 0.4;
    vertFraction = 0.3;
    radius = 5;

    context.strokeStyle = '#FFFFFF';
    context.lineWidth = 1;

    //top right
    context.beginPath();
    context.moveTo(width*(1 - horizFraction), margin);
    context.lineTo(width - 0.7*margin, margin);
    context.moveTo(width - margin, 0.7*margin);
    context.lineTo(width - margin, vertFraction*height);
    context.moveTo(width - margin, margin);
    context.arc(width - margin, margin, radius, 0, 7);
    context.stroke();

    //bottom left
    context.beginPath();
    context.moveTo(0.7*margin, height - bottomMargin);
    context.lineTo(width*horizFraction, height - bottomMargin);
    context.moveTo(margin, height - bottomMargin + 0.3*margin);
    context.lineTo(margin, height*(1- vertFraction));
    context.moveTo(margin, height - bottomMargin);
    context.arc(margin, height - bottomMargin, radius, 0, 7);
    context.stroke();    


}