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

function borrari(){
    document.getElementById("saldoi").value = "";
    document.getElementById("cantidadi").value = "";
}