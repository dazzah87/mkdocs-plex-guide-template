document.addEventListener("DOMContentLoaded", function() {
    const statusContainer = document.getElementById("plex-status-indicator");
    if (!statusContainer) return;

    // Abruf der offiziellen Atlassian Statuspage API von Plex
    fetch("https://status.plex.tv/api/v2/status.json")
        .then(response => response.json())
        .then(data => {
            const indicator = data.status.indicator; // Gibt z.B. "none", "minor", "major", "critical", "maintenance" zurück
            
            let color = "grey";
            let germanDescription = data.status.description; // Fallback auf das Original, falls was Unbekanntes kommt

            // Farben und deutsche Übersetzungen zuweisen je nach Status
            if (indicator === "none") {
                color = "#2fcc66"; // Grün
                germanDescription = "Alle Systeme arbeiten normal";
            } else if (indicator === "minor") {
                color = "#f1c40f"; // Gelb
                germanDescription = "Leichte Einschränkungen";
            } else if (indicator === "major") {
                color = "#e67e22"; // Orange
                germanDescription = "Schwere Störung";
            } else if (indicator === "critical") {
                color = "#e74c3c"; // Rot
                germanDescription = "Kritischer Ausfall";
            } else if (indicator === "maintenance") {
                color = "#3498db"; // Blau
                germanDescription = "Wartungsarbeiten";
            }

            statusContainer.innerHTML = `
                <a href="https://status.plex.tv/" target="_blank" style="text-decoration: none; color: inherit; display: inline-flex; align-items: center; gap: 8px;">
                    <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: ${color};"></span>
                    <strong>Plex Status:</strong> ${germanDescription}
                </a>
            `;
        })
        .catch(error => {
            console.error("Fehler beim Abrufen des Plex-Status:", error);
            statusContainer.innerHTML = `
                <a href="https://status.plex.tv/" target="_blank" style="text-decoration: none; color: inherit; display: inline-flex; align-items: center; gap: 8px;">
                    <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: grey;"></span>
                    <strong>Plex Status:</strong> Unbekannt (Statusseite prüfen)
                </a>`;
        });
});
