function validaruno(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function validardos(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function operacion(){
    var valoruno = document.getElementById("numerouno").value;

    var valordos = document.getElementById("numerodos").value;

    var parseuno= parseFloat(valoruno);
    alert(parseuno);

    var parsedos = parseFloat(valordos)
    alert(parsedos);
    
    if(parseuno == parsedos){
    var resultado = parseuno * parsedos
    alert(resultado)    
    }
    else{
        if(parseuno > parsedos){
        var resultado = parseuno - parsedos
        alert(resultado) 
        }
        else{
        var resultado = parseuno + parsedos
        alert(resultado) 
        }    
    }
    document.getElementById("resultadoi").value = resultado;
}



function validarn1(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function validarn2(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function validarn3(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function comparacion(){
    var valor1 = document.getElementById("numuno").value;

    var valor2 = document.getElementById("numdos").value;

    var valor3 = document.getElementById("numtres").value;


    var parse1= parseFloat(valor1);
    alert(parse1);

    var parse2 = parseFloat(valor2)
    alert(parse2);

    var parse3 = parseFloat(valor3)
    alert(parse3);
    
    if(parse1 > parse2 && parse1 > parse3){
        var comparar = parse1
        alert(comparar)    
    }
    else{
        if(parse2> parse1 && parse2 > parse3){
        var comparar = parse2
        alert(comparar)    
        }
        else{
        if(parse3 > parse1 && parse3 > parse2){
        var comparar = parse3
        alert(comparar)    
        }      
        }
    document.getElementById("comparari").value = comparar;
    }
}



function validarhoras(e) { 
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9.]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function validarpago(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9.]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function sueldof(){
    let horas = parseFloat(document.getElementById("horasid").value);
    let pago = parseFloat(document.getElementById("pagoid").value);
    let sueldo = 0;

    if (parsehrs > 40) {
        let extra = horas - 40;
        if (extra > 8) {
            let dobles = 8;
            let triples = extra - 8;
            sueldo = (40 * pago) + (dobles * pago * 2) + (triples * pago * 3);
        } else {
            sueldo = (40 * pago) + (extra * pago * 2);
        }
    } else {
        sueldo = horas * pago;
    }

    document.getElementById("sueldoid").value = sueldo.toFixed(2);
}

function borrari() {
    document.getElementById("horasi").value = "";
    document.getElementById("pagoi").value = "";
    document.getElementById("sueldoi").value = "";
}
