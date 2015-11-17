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

function centerTitle(){
    //vertically center splash text in jumbotron

    var jumbo = document.getElementById('jumbo'),
        text = document.getElementById('titleText'),
        height = jumbo.offsetHeight,
        textHeight = text.offsetHeight,
        margin = (height - textHeight) / 2;

    text.setAttribute('style', 'margin-top:' + margin + 'px;')

}

function promisePartial(name){
    // promise to get tempate <name>; thanks http://www.html5rocks.com/en/tutorials/es6/promises/
    var rootURL, path;

    rootURL = window.location.protocol + "//" + window.location.host;
    path = window.location.pathname.split('/').slice(0,-1);
    for(i=0; i<path.length; i++){
        rootURL += path[i] + '/'
    }

    url = rootURL + 'partials/' + name + '.mustache';

    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}