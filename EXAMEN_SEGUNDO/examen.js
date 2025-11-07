console.log("JS Cargado ✅");

const btn = document.getElementById("checkBtn");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {

    console.log("Botón clickeado ✅");

    const ip = document.getElementById("serverInput").value.trim();

    if (!ip) {
        output.innerHTML = "Ingresa una IP.";
        return;
    }

    output.innerHTML = "Consultando API...";

    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
        const data = await response.json();

        console.log("Respuesta recibida ✅", data);

        if (!data.online) {
            output.innerHTML = "El servidor está offline.";
            return;
        }

        let motdClean =
            typeof data.motd?.clean === "string"
                ? data.motd.clean
                : Array.isArray(data.motd?.clean)
                ? data.motd.clean.join("")
                : "Sin MOTD";

        let version =
            typeof data.version === "string"
                ? data.version
                : Array.isArray(data.version)
                ? data.version.join(", ")
                : "Desconocida";

        output.innerHTML = `
            <p><strong>Servidor:</strong> ${data.hostname || ip}</p>
            <p><strong>Versión:</strong> ${version}</p>
            <p><strong>Jugadores:</strong> ${data.players?.online || 0} / ${data.players?.max || "?"}</p>
            <p><strong>MOTD:</strong> ${motdClean}</p>
        `;
    } catch (err) {
        output.innerHTML = "Error al conectar con la API.";
        console.error("ERROR ❌", err);
    }
});
