/*
JS es un lenguaje multiparadigma
Acepta la programación funcional, estructurada, POO, Eventos
Dentro de JS no existe el tipado de variables
int, string, float, etc.

Solo existen 3 tipos de variables de acuerdo al estandar ES6
VAR, LET, CONST 
*/

function validar(formulario){
    //Quiero validar que el campo nombre acepte mas de 3 caracteres
    if(formulario.nombre.value.length < 4){
        alert("Porfvor escribe más de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkStr = formulario.nombre.value;
    alert(checkStr);

    var abcOk = "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm"
     varValido = false;
     break
    //tenemos que comparar la cadena de nombre vs abc
}