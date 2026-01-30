# Sicherheit & empfohlene Einstellungen
Die Verbindung zu meinem Plex-Server und dessen Nutzung sind sicher. Plex läuft auf einem dedizierten Server in den Niederlanden, auf den nur ich administrativen Zugriff habe.

### Verschlüsselung der Verbindung
Der gesamte Datentransfer zwischen Deinem Gerät und Plex ist jederzeit über HTTPS verschlüsselt. Das SSL/TLS-Zertifikat wird von [Let’s Encrypt](https://letsencrypt.org/de/) ausgestellt und automatisch alle 90 Tage erneuert. **Was das für Dich bedeutet:** Inhalte, Logins und Metadaten werden auf dem Transportweg gegen Mitlesen geschützt.

### Server-Härtung
Das Betriebssystem des Servers sowie Plex selbst werden regelmäßig aktualisiert; Sicherheitsupdates werden automatisiert und zeitnah eingespielt. Der Server folgt einer „Minimal Access“-Strategie: Die Firewall blockiert standardmäßig alle eingehenden Verbindungen und erlaubt ausschließlich die Ports, die für den Betrieb von Plex erforderlich sind. Deine IP-Adresse wird nur für die Verbindung zu Plex verwendet und vom Server weder dauerhaft gespeichert noch an Dritte weitergegeben!

### Datenschutz & Konto-Sicherheit
Dein Benutzername, die angesehenen Inhalte und Dein Wiedergabeverlauf bleiben ausschließlich für Dich und mich sichtbar. Auf Deiner Seite ist wichtig, dass Dein Gerät und die Plex-App aktuell sind und Dein Account mit einem starken Passwort (idealerweise mit 2FA) geschützt ist.

!!! info "Transparenz: Monitoring mit Tautulli"
    **Zur technischen Unterstützung und Fehleranalyse nutze ich das Tool [Tautulli](https://tautulli.com/). Es hilft mir zu erkennen, ob Streams technisch sauber laufen oder ob Fehler auftreten. Wichtig: Diese Daten werden nur bei Bedarf eingesehen und niemals an Dritte weitergegeben!**

### Empfohlene Anpassungen
Plex versteckt einige Einstellungen, die ich für ein besseres Erlebnis und mehr Privatsphäre empfehle einmalig anzupassen:

[Datenschutzeinstellungen](datenschutzeinstellungen.md){ .md-button .md-button--primary .btn-mb-2 }
[Newsletter-Abonnement](unsubscribe-from-plex-newsletter.md){ .md-button .md-button--primary .btn-mb-2 }
[Online-Medienquellen](disabling-online-media-sources.md){ .md-button .md-button--primary .btn-mb-2 }
