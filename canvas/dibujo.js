var texto= document.getElementById("texto_lineas");
var botoncito=document.getElementById("boton");
var ElColor=document.getElementById("colorUsuario");
botoncito.addEventListener("click",dibujoPorClick);
var d= document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho= d.width;
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var x = parseInt(texto.value);    
    var lineas = x;
    var l = 0;
    var yi, xf, yf, xi;
    var colorLinea = ElColor.value;
    var espacio=ancho/lineas;
    

    do {
        yi = espacio * l;
        xf = espacio * (l + 1);
        xi = espacio * (l - 1);
        yf = espacio * (l + 1);
        dibujarLinea(colorLinea, 0, yi, xf, 400);
        dibujarLinea(colorLinea, xi, 0, 400, yf);
        dibujarLinea(colorLinea, 400, 400 - yi, xf, 400);
        dibujarLinea(colorLinea, 0, yi, 400 - xf, 0);
        console.log("linea" + l);
        l = l + 1;

    } while (l < lineas)

    dibujarLinea(colorLinea, 1, 1, 1, 399);
    dibujarLinea(colorLinea, 1, 399, 399, 399);
    dibujarLinea(colorLinea, 399, 1, 1, 1)
    dibujarLinea(colorLinea, 399, 399, 399, 1)
/**
 * Esto dibuja los bordes
 */
}
