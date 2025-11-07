btn.addEventListener("click", async () => {
    const ip = document.getElementById("serverInput").value.trim();
    if (!ip) {
        output.innerHTML = "Por favor ingresa una IP de servidor.";
        return;
    }

    output.innerHTML = "Cargando...";

    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
        const data = await response.json();

        if (!data || !data.online) {
            output.innerHTML = "El servidor está offline o no existe.";
            return;
        }

        let motdClean = Array.isArray(data.motd?.clean) 
                        ? data.motd.clean.join("") 
                        : data.motd?.clean || "Sin MOTD";

        let version = Array.isArray(data.version) 
                      ? data.version.join(", ") 
                      : data.version || "Desconocida";

        output.innerHTML = `
            <p><strong>Servidor:</strong> ${data.hostname || ip}</p>
            <p><strong>Versión:</strong> ${version}</p>
            <p><strong>Jugadores:</strong> ${data.players?.online || 0}/${data.players?.max || "?"}</p>
            <p><strong>MOTD:</strong> ${motdClean}</p>
        `;

    } catch (error) {
        output.innerHTML = "Error al conectar con el servidor.";
        console.error(error);
    }
});
