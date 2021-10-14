const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');    // canvas works on context, all drawings will be happening here, context can be 2d or 3d

canvas.width = window.innerWidth; // scale the width and height
canvas.height = widow.innerHeight;  // to be fullscreen

ctx.strokeStyle = '#000'; // default pencil color

ctx.lineJoin = 'round'; // makes the tip of the pencil round
ctx.lineCap = 'round';  // 
ctx.lineWidth = 100  // obvious

let isDrawing = false;  // indicate if user is drawing or not

let lastX = 0;  // created a variable to use it later as
let lastY = 0;  // the starting point of the mouse

function draw(e) {
    if (!isDrawing) return // stops the function if mouse is not down

    ctx.beginPath();    // if mouse down, starts to draw
    
    ctx.moveTo(lastX, lastY);   // sets the starting point, by default top left corner 

    ctx.lineTo(e.offsetX, e.offsetY);   // sets the end point

    ctx.stroke();   // if mouse up, stops drawing

    [lastX, lastY] = [e.offsetX, e.offsetY];    // change default starting position to be our mouse current position
};

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true    // checks if mouse down
    [lastX, lastY] = [e.offsetX, e.offsetY] // update mouse position before drawing, to set the start
});
canvas.addEventListener('mousemove', draw);  // watches for all mouse movements over canvas
canvas.addEventListener('mouseup', () => isDrawing = false);    // checks if mouse up
canvas.addEventListener('mouseout', () => isDrawing = false);   // checks if mouse out of the widow

