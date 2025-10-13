
function problema1() {
    const input = document.getElementById("p1-input").value.trim();

    if (input === "") {
        document.getElementById("p1-output").textContent = "Por favor ingresa una frase válida.";
        return;
    }

    const palabras = input.split(" ");

    const palabrasFiltradas = palabras.filter(p => p !== "");

    const invertidas = palabrasFiltradas.reverse();

    const resultado = invertidas.join(" ");


    document.getElementById("p1-output").textContent = resultado;
}

function problema3() {
    const input = document.getElementById("p3-input").value.trim();

    if (input === "") {
        document.getElementById("p3-output").textContent = "Por favor ingresa palabras separadas por comas.";
        return;
    }

    const palabras = input.split(",");

    let maxUnicos = 0;
    let palabraGanadora = "";

    const regex = /^[A-Z]+$/;

    for (let palabra of palabras) {
        palabra = palabra.trim();

        if (!regex.test(palabra)) {
            document.getElementById("p3-output").textContent = `La palabra "${palabra}" contiene caracteres inválidos. Usa solo A-Z sin espacios.`;
            return;
        }

        const letrasUnicas = new Set(palabra.split(""));

        if (letrasUnicas.size > maxUnicos) {
            maxUnicos = letrasUnicas.size;
            palabraGanadora = palabra;
        }
    }

    document.getElementById("p3-output").textContent =
        `La palabra con más caracteres únicos es "${palabraGanadora}" con ${maxUnicos} caracteres distintos.`;
}
