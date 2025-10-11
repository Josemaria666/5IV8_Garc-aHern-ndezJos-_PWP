function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function validarv(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function sumatoria(){
    var valoruno = document.getElementById("cantidadi").value;
    var valordos = document.getElementById("ventasi").value;
    
    var parsev = parseFloat(valoruno);
    var parses = parseFloat(valordos);
    alert(parsev);
    alert(parses);

    var comision= (parsev *0.10) * parses
    alert(comision);0
    var total = comision + parsev;
    alert(total);
    document.getElementById("saldoi").value = "$ " + total; //LIMITE A 2 DECIMALES
}

function borrari(){
    document.getElementById("saldoi").value = "";
    document.getElementById("cantidadi").value = "";
}

/*
Del ejercicio 1, tenemos que agregar el campo numero de meses y sera una inversion de maximo 18 meses


2 se deben de ingresar 3 ventas, un sueldo base, y despues calcular el monto total, debe de aparecer cuanto cobra por comision y la suma ttoal

3 se debe de ingresar un producto, con su precio y aplicarle el 15% y el sistema debe mostrar el producto, precio, descuento, total a pagar

4 se debe de ingresar C1, C2, C3, se aplica el promedio y su porcentaje, se ingresa TF y se aplica % y examen final y se aplica el % se debe de mostrar el total de calificacion

5 se debe de ingresar cantidad h y cantidad de mujeres y mostrar sus % correspondientes

6 calcular la edad de una persona
*/