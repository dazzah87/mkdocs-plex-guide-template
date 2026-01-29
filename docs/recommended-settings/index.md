# Sicherheit & empfohlene Einstellungen
Die Verbindung zu meinem Plex-Server und dessen Nutzung sind sicher. Plex läuft auf einem dedizierten Server in den Niederlanden, auf den nur ich administrativen Zugriff habe.

### Verschlüsselung der Verbindung
Der gesamte Datentransfer zwischen Deinem Gerät und Plex ist jederzeit über HTTPS verschlüsselt. Das SSL/TLS-Zertifikat wird von [Let’s Encrypt](https://letsencrypt.org/de/) ausgestellt und automatisch alle 90 Tage erneuert.

**Was das für Dich bedeutet:** Inhalte, Logins und Metadaten werden auf dem Transportweg gegen Mitlesen geschützt.

### Server-Härtung
Ich halte das Betriebssystem des Servers sowie Plex regelmäßig auf dem aktuellen Stand und spiele Sicherheitsupdates automatisiert und zeitnah ein. Der Server folgt zudem einer „Minimal Access“-Strategie: Eine Firewall blockiert standardmäßig alle Verbindungen und lässt nur die Dienste durch, die für den Betrieb von Plex zwingend erforderlich sind. Deine IP-Adresse wird nicht von meinem Server nach außen weitergegeben.

### Datenschutz & Konto-Sicherheit
Dein Benutzername, die angesehenen Inhalte und Dein Wiedergabeverlauf bleiben ausschließlich für Dich und mich sichtbar. Auf Deiner Seite ist wichtig, dass Dein Gerät und die Plex-App aktuell sind und Dein Account mit einem starken Passwort (idealerweise mit 2FA) geschützt ist.

!!! info "Transparenz: Monitoring mit Tautulli"
    **Zur technischen Unterstützung und Fehleranalyse nutze ich das Tool [Tautulli](https://tautulli.com/). Es hilft mir zu erkennen, ob Streams technisch sauber laufen oder ob Fehler auftreten. Wichtig: Diese Daten werden nur bei Bedarf eingesehen und niemals an Dritte weitergegeben!**

### Empfohlene Anpassungen
Plex versteckt einige Einstellungen, die ich für ein besseres Erlebnis oder mehr Privatsphäre empfehle einmalig anzupassen:

[Datenschutzeinstellungen](datenschutzeinstellungen.md){ .md-button .md-button--primary .btn-mb-2 }
[Newsletter-Abonnement](unsubscribe-from-plex-newsletter.md){ .md-button .md-button--primary .btn-mb-2 }
[Online-Medienquellen](disabling-online-media-sources.md){ .md-button .md-button--primary .btn-mb-2 }
