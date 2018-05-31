var d = document.getElementById("area");
var lienzo = d.getContext("2d");
document.addEventListener("mousedown", dibujarMouse);
document.addEventListener("mousemove", dibujarMouse);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
var colorcito = "blue";
var x= 150;
var y=250;

function dibujarMouse(evento){
   dibujarLinea(colorcito,x,y,evento.layerX,evento.layerY )
   x= evento.layerX;
   y= evento.layerY;
} 