
# Add Manifest to Vue App

## Aufabge 3 (10 Minuten)
Erweitere deine App mithilfe der Vue CLI um ein Manifest, so das sie von Google Lighthouse als PWA erkannt wird. Damit dein Projekt als PWA erkannt wird, musst du es mit `npm run build` builden, dabei wird ein *dist* Ordner erstellt denn du mit dem *Node Serve Modul* ausführen kannst.

**Hinweis:** Im Beispiel der [Vue CLI PWA Doku](https://cli.vuejs.org/core-plugins/pwa.html) wird das `InjectManifest` Plugin verwendet, welches notwendig wird, wenn man eigene Service-Woker aufsetzen möchte.

#### To do's:
- [ ] PWA und Serve modul installieren
- [ ] Lokale vue.config.js erstellen und eigene Regeln hinzufügen (zB PWA Name oder Theme Color)
- [ ] PWA offline speichern (und testen)

## Tipps

### Setup

##### Wie füge ich PWA fuktionalität zu meiner App hinzu?
``` shell
vue add pwa
```
Danach kann mit `npm run build` der dist Ordner erstellt werden der eine `manifest.json` enthät (nach jeder Änderung im Code muss neu gebildet werden).

##### Wie installiere ich Node Serve und wie führe ich es aus?
``` shell
npm install -g serve
# -s flag means serve it in Single-Page Application mode
serve -s dist
```
<!-- https://cli.vuejs.org/guide/deployment.html -->


## Nützliche Links
- [Mozilla Manifest Doku](https://developer.mozilla.org/de/docs/Web/Manifest)
- [Vue CLI PWA Doku](https://cli.vuejs.org/core-plugins/pwa.html)
- [Projektspezifische Vue Config Datei](https://cli.vuejs.org/config/#vue-config-js)