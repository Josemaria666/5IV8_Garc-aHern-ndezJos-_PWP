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



function borrari(){
    document.getElementById("saldoi").value = "";
    document.getElementById("cantidadi").value = "";
}