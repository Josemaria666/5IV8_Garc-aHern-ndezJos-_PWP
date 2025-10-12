function validarm(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function validarf(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function suma(){
    var masculino = document.getElementById("cantidadm").value;
    var femenino = document.getElementById("cantidadf").value;

    var parsem = parseFloat(masculino);
    var parsef = parseFloat(femenino);
    alert(parsem);
    alert(parsef);

    var suma = parsem + parsef;
    alert(suma);


    document.getElementById("cantidad").value =suma;

}

function porcentaje(){ 
    var masculino = document.getElementById("cantidadm").value;
    var femenino = document.getElementById("cantidadf").value;

    var parsemas = parseFloat(masculino);
    var parsefem = parseFloat(femenino);

    var suma = parsemas + parsefem;

    var porcentajef = (parsefem * 100) / suma;
    var porcentajem = (parsemas * 100) / suma;

    document.getElementById("alumnas").value = "%" + porcentajef.toFixed(2);
    document.getElementById("alumnos").value = "%" + porcentajem.toFixed(2);
}


function borrari(){
    document.getElementById("saldoi").value = "";
    document.getElementById("cantidadi").value = "";
}