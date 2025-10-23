// Instrucciones del juego
var instrucciones = [
    "Utiliza las flechas de navegación para mover las piezas.",
    "Para ordenar las piezas guíate por la imagen objetivo."
];

// Guardamos los movimientos
var movimientos = [];

// Matriz del rompecabezas (representa las posiciones actuales)
var rompe = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Matriz con la posición correcta
var rompeCorrecta = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Coordenadas de la pieza vacía (pieza 9)
var filaVacia = 2;
var columnaVacia = 2;

// Mostrar instrucciones
function mostrarInstrucciones(instrucciones) {
    for (var i = 0; i < instrucciones.length; i++) {
        mostrarInstruccionLista(instrucciones[i], "lista-instrucciones");
    }
}

function mostrarInstruccionLista(instruccion, idLista) {
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.textContent = instruccion;
    ul.appendChild(li);
}

// Verificar si se ha ganado
function checarSiGano() {
    for (var i = 0; i < rompe.length; i++) {
        for (var j = 0; j < rompe[i].length; j++) {
            if (rompe[i][j] !== rompeCorrecta[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function mostrarCartelGanador() {
    alert("🎉 ¡Felicidades, ganaste el juego!");
}

// Intercambiar posiciones dentro de la matriz
function intercambiarPosicionesRompe(fila1, columna1, fila2, columna2) {
    var temp = rompe[fila1][columna1];
    rompe[fila1][columna1] = rompe[fila2][columna2];
    rompe[fila2][columna2] = temp;
}

// Actualizar posición de la pieza vacía
function actualizarPosicionVacia(nuevaFila, nuevaColumna) {
    filaVacia = nuevaFila;
    columnaVacia = nuevaColumna;
}

// Verificar si una posición es válida dentro del tablero
function posicionValida(fila, columna) {
    return fila >= 0 && fila < 3 && columna >= 0 && columna < 3;
}

// Códigos de dirección
var codigosDireccion = {
    IZQUIERDA: 37,
    ARRIBA: 38,
    DERECHA: 39,
    ABAJO: 40
};

// Mover en dirección según la tecla
function moverEnDireccion(direccion) {
    var nuevaFilaPiezaVacia = filaVacia;
    var nuevaColumnaPiezaVacia = columnaVacia;

    if (direccion === codigosDireccion.ABAJO) {
        nuevaFilaPiezaVacia = filaVacia + 1;
    } else if (direccion === codigosDireccion.ARRIBA) {
        nuevaFilaPiezaVacia = filaVacia - 1;
    } else if (direccion === codigosDireccion.DERECHA) {
        nuevaColumnaPiezaVacia = columnaVacia + 1;
    } else if (direccion === codigosDireccion.IZQUIERDA) {
        nuevaColumnaPiezaVacia = columnaVacia - 1;
    }

    // Verificar si es un movimiento válido
    if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)) {
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarUltimoMovimiento(direccion);
    }
}

// Intercambiar posiciones en la matriz y en el DOM
function intercambiarPosiciones(fila1, columna1, fila2, columna2) {
    var pieza1 = rompe[fila1][columna1];
    var pieza2 = rompe[fila2][columna2];

    intercambiarPosicionesRompe(fila1, columna1, fila2, columna2);
    intercambiarPosicionesDOM('pieza' + pieza1, 'pieza' + pieza2);
}

// Intercambiar piezas visualmente (en el HTML)
function intercambiarPosicionesDOM(idPieza1, idPieza2) {
    var pieza1 = document.getElementById(idPieza1);
    var pieza2 = document.getElementById(idPieza2);

    var padre = pieza1.parentNode;
    var clon1 = pieza1.cloneNode(true);
    var clon2 = pieza2.cloneNode(true);

    padre.replaceChild(clon1, pieza2);
    padre.replaceChild(clon2, pieza1);
}

// Actualizar el último movimiento mostrado
function actualizarUltimoMovimiento(direccion) {
    var ultimoMovimiento = document.getElementById("flecha");
    switch (direccion) {
        case codigosDireccion.ARRIBA:
            ultimoMovimiento.textContent = "↑";
            break;
        case codigosDireccion.ABAJO:
            ultimoMovimiento.textContent = "↓";
            break;
        case codigosDireccion.DERECHA:
            ultimoMovimiento.textContent = "→";
            break;
        case codigosDireccion.IZQUIERDA:
            ultimoMovimiento.textContent = "←";
            break;
    }
}

// Mezclar piezas aleatoriamente
function mezclarPiezas(veces) {
    if (veces <= 0) return;

    var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA, codigosDireccion.DERECHA, codigosDireccion.IZQUIERDA];
    var direccion = direcciones[Math.floor(Math.random() * direcciones.length)];

    moverEnDireccion(direccion);

    setTimeout(function () {
        mezclarPiezas(veces - 1);
    }, 100);
}

// Capturar las teclas del usuario
function capturarTeclas() {
    document.body.onkeydown = function (evento) {
        if (Object.values(codigosDireccion).includes(evento.which)) {
            moverEnDireccion(evento.which);

            if (checarSiGano()) {
                setTimeout(mostrarCartelGanador, 300);
            }

            evento.preventDefault();
        }
    };
}

// Inicializar el juego
function iniciar() {
    mezclarPiezas(30);
    capturarTeclas();
}

// Iniciar y mostrar instrucciones
iniciar();
mostrarInstrucciones(instrucciones);
