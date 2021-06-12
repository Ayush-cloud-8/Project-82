var canvas = document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");
var mouse_state = " ";
var width = 2;
var color = "black";
var radius = 50;

canvas.addEventListener("mousedown" , down);

function down(e) {
    mouse_state = "mouse_down";
    width = document.getElementById("line_width").value;
    color = document.getElementById("line_color").value;
    radius = document.getElementById("radius_input").value;
}


canvas.addEventListener("mousemove" , move);

function move(e) {
    if (mouse_state == "mouse_down") {
        x = e.clientX - canvas.offsetLeft;
        y = e.clientY - canvas.offsetTop;

        console.log("Mouse X = " + x);
        console.log("Mouse Y = " + y);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(x , y , radius , 0 , 360);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup" , up);

function up(e) {
    mouse_state = "mouse_up";
}

function clear_canvas() {
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
}