
# Setup new Vue App

## Aufabge 1 (15-20 Minuten)
Entwickle eine App, in der das beiliegende JSON (im files Ordner) ausgegeben wird. Jedes Array Element beinhaltet eine Person mit Daten, die es beim Betreten der App in einer Komponente zu Previewen gilt. 

#### To do's:
- [ ] App mit CLI initialisieren (router nicht vergessen)
- [ ] Play with it 😉
- [ ] Vorschau-Komponente erstellen
- [ ] Vorschau-Komponente "füttern" und in Schleife ausgeben

## Aufabge 2 (10-15 Minuten)

Bei einem klick/touch auf die Preview soll sich ein neuer View öffnen in dem die vollständigen Informationen befinden. Zusätzlich soll eine Header-Komponente erzeugt werden, die einen Back-Button beinhaltet, soblad eine Unterseite aufgerufen wird.

#### To do's:
- [ ] Optional: Datum "schön" ausgeben
- [ ] Komponente auf neuen View verlinken (und Inhalt übergeben/ausgeben)
- [ ] Header-Komponente mit Back-Link
  
## Tipps

### Setup

##### Wie erstelle ich ein neues Projekt?
``` shell
vue create <APP-NAME>
cd <APP-NAME>
```
(Für Vue 3) Select `Default (Vue 3 Preview) ([Vue 3] babel, eslint)`

##### Wie füge ich den Router hinzu?
``` shell
vue add router
```

##### Wie kann ich SCSS im Projekt benutzen?
``` shell
npm install -D sass-loader@^10 sass
```

### Vue Commands / Directives

##### Was benötige ich für die Aufgaben?

- `v-if`
- `v-for`
- `v-on@click`
- `v-bind:style`/`v-bind:src`/`v-bind:href`
- `import Something from './Somewhere'`

[Alle Directives](https://012.vuejs.org/api/directives.html)

### Daten

Beim Starten der Anwendung (`npm run serve`) wird ein eigener Server erstellt. Um dort zentral auf Daten zuzugreifen, ist es sinnvoll diese im `./public/` Ordner zu speichern. Auf den public Ordner kann beim Importieren dann mit `/public/<YOUR-FILE>` oder im HTML direkt zugegriffen werden. 


## Code Schnipsel

##### App.vue Styles (scss)
``` html
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 3.125rem;
}
</style>
```

##### Vorschau-Komponente + Styles (scss):
``` html
<template>
  <div class="famous-container">
    <figure>
      <!-- Background Image has to be loadet from public Folder -->
      <div style="background: url(../example.jpg)" class="famous-img"></div>
      <figcaption>
        <h2>Alan Turing</h2>
        <!-- Beautify Date (Aufgabe 2) -->
        <p>Birth: <i>1912-06-23</i></p>
        <!-- Death appears only if value not null -->
        <p>Died: <i>1954-06-07</i></p>
      </figcaption>
    </figure>
    <!-- Slice the intro text to 190 chars -->
    <div class="intro">Alan Turing, in full Alan Mathison Turing, was a British mathematician and... </div>
  </div>
<template>

<style scoped lang="scss">
$gray: #333;

.famous-container {
  border-bottom: 1px solid $gray;
  padding: 2rem .5rem;
  &:hover {
    cursor: pointer;
    background: #eee;
  }
  figure {
    display: flex;
    align-items: center;
    .famous-img {
      border-radius: 100%;
      background-size: cover !important;
      display: block;
      height: 8rem;
      width: 8rem;
    }
    figcaption {
      margin-left: 1rem;
    }
  }
  .intro {
    margin-top: 1rem;
  }
}
</style>
```

##### Detailansicht + Styles (scss)
``` html
<template>
  <div class="famouscs">
    <h2>Alan Turing</h2>
    <img src="../example.jpg" class="famous-img" />
    <!-- Beautify Date (Aufgabe 2) -->
    <!-- Death appears only if value not null -->
    <p><b>Birth: <i>1912-06-23</i><span v-if="data.death"> / Died: <i>1954-06-07</i></span></b></p>
    <p>Alan Turing, in full Alan Mathison Turing, was a British mathematician and...</p>
    <p>Wikipedia Article: <a href="www.wikipedia.de" target="_blank">Learn More...</a></p>
  </div>
</template>

<style scoped lang="scss">
.famouscs {
  padding: 2rem 1rem;

  .famous-img {
    width: 100%;
    height: auto;
  }
}
</style>
```


## Nützliche Links
- [Vue Doku](https://v3.vuejs.org)
- [Directives](https://012.vuejs.org/api/directives.html)