# Sicherheit & empfohlene Einstellungen

Die Verbindung zu meinem Plex-Server und dessen Nutzung sind sicher. Plex läuft auf einem dedizierten Server in den Niederlanden, auf den nur ich administrativen Zugriff habe.

## Verschlüsselung der Verbindung
Der gesamte Datentransfer zwischen Deinem Gerät und Plex ist jederzeit über HTTPS verschlüsselt. Das SSL/TLS-Zertifikat wird von [Let’s Encrypt](https://letsencrypt.org/de/) ausgestellt und automatisch alle 90 Tage erneuert.

Was das für Dich bedeutet: Inhalte, Logins und Metadaten werden auf dem Transportweg gegen Mitlesen geschützt.

## Server-Härtung
Ich halte das Betriebssystem des Servers sowie Plex regelmäßig auf dem aktuellen Stand und spiele Sicherheitsupdates automatisiert und zeitnah ein. Zusätzlich ist der Server „minimal offen“ konfiguriert: Nach außen sind nur die wirklich notwendigen Ports/Dienste erreichbar (z.B. für Plex); alles andere wird per Firewall blockiert.

## Datenschutz & Konto-Sicherheit
Dein Benutzername, die angesehenen Inhalte und Dein Wiedergabeverlauf bleiben ausschließlich für Dich und mich sichtbar. Auf Deiner Seite ist wichtig, dass Dein Gerät und die Plex-App aktuell sind und Dein Account mit einem starken Passwort (idealerweise mit 2FA) geschützt ist.

!!! warning "Transparenz"
    **Ausschließlich zur technischen Unterstützung nutze ich das Plex-Monitoring-Tool [Tautulli](https://tautulli.com/). Es dient dazu, bei Problemen schneller helfen zu können (z.B. ob ein Stream überhaupt gestartet ist oder ein Fehler auftritt). Diese Daten werden nur bei Bedarf zur Fehleranalyse angesehen und nicht weitergegeben!**

Allerdings gibt es einige Einstellungen, die Plex versteckt und ich Dir empfehlen würde anzupassen:

[Datenschutzeinstellungen](datenschutzeinstellungen.md){ .md-button .md-button--primary .btn-mb-2 }
[Newsletter-Abonnement](unsubscribe-from-plex-newsletter.md){ .md-button .md-button--primary .btn-mb-2 }
[Online-Medienquellen](disabling-online-media-sources.md){ .md-button .md-button--primary .btn-mb-2 }
