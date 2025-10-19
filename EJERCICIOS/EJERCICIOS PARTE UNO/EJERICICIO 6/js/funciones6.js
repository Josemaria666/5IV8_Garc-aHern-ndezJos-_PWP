  function calcularEdad(){
            var fechaNacimiento = document.getElementById("nacimiento").value;
            var nacimiento = new Date(fechaNacimiento);
            var hoy = new Date();

            
            var edad = hoy.getFullYear() - nacimiento.getFullYear();
             alert(edad);
            var mesActual = hoy.getMonth();
            var mesNacimiento = nacimiento.getMonth();

            if (
                mesActual < mesNacimiento ||
                (mesActual === mesNacimiento && hoy.getDate() < nacimiento.getDate())
            ) {
                edad--;
            }

            document.getElementById("edad").value = edad + " años";
        }