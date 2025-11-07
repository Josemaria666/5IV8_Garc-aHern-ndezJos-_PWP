document.getElementById("checkBtn").addEventListener("click", async () => {
    const serverIP = document.getElementById("serverIP").value.trim();

    if (!serverIP) {
        alert("Por favor ingresa una IP de servidor.");
        return;
    }

    // ✅ CAMBIO 1: API nueva (antes era mcapi.us)
    const url = `https://api.mcstatus.io/v2/status/java/${serverIP}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("status").innerHTML = data.online
            ? "✅ Online"
            : "❌ Offline";

        document.getElementById("motd").innerHTML =
            data.motd?.clean?.join(" ") || "Sin MOTD";

        document.getElementById("players").innerHTML =
            data.players?.online !== undefined
                ? `${data.players.online} / ${data.players.max}`
                : "N/A";

        document.getElementById("version").innerHTML =
            data.version?.name_clean || "Desconocida";

    } catch (error) {
        console.error(error);
        alert("Error al consultar el servidor.");
    }
});
