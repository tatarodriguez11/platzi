var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var d = document.getElementById("area");
var lienzo = d.getContext("2d");
var colorcito= "blue"
var colorAbajo="red";
var xi = 200;
var yi=200;
var largo=3;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth= 5;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);

function dibujarTeclado(evento){
   
    switch(evento.keyCode){
        case teclas.UP:
        console.log("arriba");
        dibujarLinea(colorcito,xi,yi,xi,(yi-largo));
        yi=yi-largo ;// yi-=largo
        break;
        case teclas.DOWN:
        console.log("abajo")
            dibujarLinea(colorAbajo, xi, yi, xi, (yi + largo));
            yi = yi +largo;
        break;
        case teclas.RIGHT:
        console.log("derecha");
            dibujarLinea(colorAbajo, xi, yi, (xi+largo), yi);
            xi = xi + largo
        break;
        case teclas.LEFT:
        console.log("izquierda");
            dibujarLinea(colorcito, xi, yi, (xi - largo), yi);
            xi = xi - largo
    }
   
}