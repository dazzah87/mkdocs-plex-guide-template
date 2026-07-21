document.addEventListener("DOMContentLoaded", function() {
    // Sucht auf deiner MkDocs Seite nach dem Container für den Status
    const statusContainer = document.getElementById("plex-status-indicator");
    if (!statusContainer) return; // Beenden, wenn auf der aktuellen Seite kein Container ist

    // Abruf der offiziellen Atlassian Statuspage API von Plex
    fetch("https://status.plex.tv/api/v2/status.json")
        .then(response => response.json())
        .then(data => {
            const indicator = data.status.indicator; // Gibt z.B. "none" (alles gut), "minor", "major", "critical" zurück
            const description = data.status.description; // z.B. "All Systems Operational"

            // Farben zuweisen je nach Status
            let color = "grey";
            if (indicator === "none") color = "#2fcc66"; // Grün
            else if (indicator === "minor") color = "#f1c40f"; // Gelb
            else if (indicator === "major" || indicator === "critical") color = "#e74c3c"; // Rot

            // HTML in den Container einfügen (mit Link zum echten Status)
            statusContainer.innerHTML = `
                <a href="https://status.plex.tv/" target="_blank" style="text-decoration: none; color: inherit; display: inline-flex; align-items: center; gap: 8px;">
                    <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: ${color};"></span>
                    <strong>Plex Status:</strong> ${description}
                </a>
            `;
        })
        .catch(error => {
            console.error("Fehler beim Abrufen des Plex-Status:", error);
            statusContainer.innerHTML = `<a href="https://status.plex.tv/" target="_blank">Plex Status: Unbekannt (Statusseite prüfen)</a>`;
        });
});