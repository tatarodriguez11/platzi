var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");


var fondo = {
    url: "tile.png",
    cargaOK: false
}

var cerdo = {
    url: "cerdo.png",
    cargaOK: false,
    x:200,
    y:250,
    largo: 4
};

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cantidad = aleatorio(1, 10);


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

document.addEventListener("keydown", moverCerdo);

function cargarFondo() {
    fondo.cargaOK = true;

}
function cargarCerdos() {
    cerdo.cargaOK = true;

}

function cargarVacas() {
    vaca.cargaOK = true;
    
}

function draw(){

    // dibujas el fondo
if (fondo.cargaOK){
    papel.drawImage(fondo.imagen,0,0)
}
    // compruebas si hay alguna tecla oprimida y cambias la posicion del cerdo
    if (vaca.cargaOK) {
        console.log(cantidad);
        for (var v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 10);
            var x = x * 60;
            var y = y * 40;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    //dibujas el cerdo
if(cerdo.cargaOK){
    papel.drawImage(cerdo.imagen,cerdo.x,cerdo.y)
}
    // invocas draw() de nuevo
    window.requestAnimationFrame(draw);

}

window.requestAnimationFrame(draw);

function moverCerdo(evento) {

    switch (evento.keyCode) {
        case teclas.UP:
            console.log("arriba");
            cerdo.y = cerdo.y - cerdo.largo;// yi-=largo
            break;
        case teclas.DOWN:
            console.log("abajo")
            cerdo.y = cerdo.y + cerdo.largo;
            break;
        case teclas.RIGHT:
            console.log("derecha");
            cerdo.x = cerdo.x + cerdo.largo
            break;
        case teclas.LEFT:
            console.log("izquierda");
            cerdo.x = cerdo.x - cerdo.largo
    }

}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
