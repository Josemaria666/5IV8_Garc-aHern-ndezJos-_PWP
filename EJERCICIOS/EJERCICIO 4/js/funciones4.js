function validarcal1(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function validarcal2(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function validarcal3(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function promedio(){
    var caluno = document.getElementById("cal1").value;
    var caldos = document.getElementById("cal2").value;
    var caltres = document.getElementById("cal3").value;
    
    var parse1 = parseFloat(caluno);
    var parse2 = parseFloat(caldos);
    var parse3 = parseFloat(caltres);

    alert(parse1);
    alert(parse2);
    alert(parse3);



    var prom = (parse1 + parse2 + parse3) / 3;
    alert(prom);

    document.getElementById("calfinal").value = "" + prom; //LIMITE A 2 DECIMALES
}

function validarexamen(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function validartrabajo(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function final(){
    var examen = document.getElementById("examen").value;
    var trabajo = document.getElementById("trabajo").value;
    var parciales = document.getElementById("calfinal").value;
    
    var parsee = parseFloat(examen);
    var parset = parseFloat(trabajo);
    var parsep = parseFloat(parciales);

    alert(parsee);
    alert(parset);
    alert(parsep);



    var promf = (parsee * 0.3) + (parset * 0.15) + (parsep * 0.55);
    alert(promf);
    document.getElementById("promediofinal").value = "" + promf; //LIMITE A 2 DECIMALES
}

function borrari(){
    document.getElementById("saldoi").value = "";
    document.getElementById("cantidadi").value = "";
    document.getElementById("ventasi").value = "";
}