# Ruta Curuxás

[![Català](https://img.shields.io/badge/idioma-Catal%C3%A0-8a7a5f)](#català) [![Galego](https://img.shields.io/badge/idioma-Galego-6f7d4a)](#galego)

## Català

Aplicació web instal·lable (PWA) amb un mapa interactiu que convida els lectors del llibre *Curuxás* a visitar els llocs on es va moure el personatge. Cada lloc té una fitxa amb informació sobre la vida de Curuxás i un accés directe per arribar-hi amb el cotxe.

**Prova-la:** https://ana-morandeira.github.io/curuxas/

> **Estat: esborrany.** Els sis llocs i els textos són provisionals, i la majoria de coordenades són aproximades. Cal afinar-les sobre el terreny.

### Què fa

- **Mapa interactiu** amb els llocs numerats i un estil d'època (paper envellit, aquarel·la, tipografia clàssica).
- **Com arribar-hi**: cada fitxa obre Google Maps, Waze o Apple Maps amb la destinació ja posada.
- **Avís en arribar**: amb el seguiment activat, quan el lector entra al radi d'un lloc el mòbil vibra, s'obre la fitxa i es desbloqueja el contingut extra.
- **Progrés**: els llocs visitats es marquen i es compten.
- **Dos idiomes**: català (per defecte) i gallec, amb un selector `CA | GZ` a la capçalera.
- **Sense connexió**: l'app i els mapes ja vistos es desen al mòbil, pensat per a zones rurals amb poca cobertura.

### Com provar-la en local

Els *service workers* només funcionen des de `localhost` o HTTPS, així que no n'hi ha prou d'obrir `index.html` amb doble clic.

```bash
git clone https://github.com/ana-morandeira/curuxas.git
cd curuxas
python -m http.server 8000
```

Obre `http://localhost:8000` al navegador. Per aturar el servidor, prem `Ctrl + C`.

### Mode edició: capturar coordenades

Per fixar la ubicació exacta de cada lloc:

1. Obre l'app al mòbil, dins del lloc.
2. A la part inferior de la llista, prem **Mode edició**.
3. Obre la fitxa del lloc i prem **Desar la meva ubicació aquí**. L'app mostra la precisió del GPS.
4. Les coordenades capturades apareixen al final de la llista. Copia-les i incorpora-les a la llista `PLACES` de `index.html`.

El botó **Simular arribada** serveix per veure el contingut desbloquejat sense moure's de casa.

### Estructura

```
curuxas/
├── index.html              Aplicació (llocs, textos i lògica)
├── sw.js                   Service worker (mode sense connexió)
├── manifest.webmanifest    Manifest de la PWA
├── leaflet/                Llibreria de mapes
├── icons/                  Icones de l'app
└── fonts/                  Tipografies
```

Els llocs i els seus textos en català i gallec estan al començament de l'script de `index.html`, a la constant `PLACES`. Cada vegada que es modifiqui un fitxer, cal pujar el número de `VERSION` a `sw.js` perquè els mòbils descarreguin la versió nova.

### Publicació

L'app es publica amb GitHub Pages: *Settings → Pages → Deploy from a branch → `main` / `(root)`*.

### Crèdits i llicències

- Mapes: © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, sota llicència ODbL.
- [Leaflet](https://leafletjs.com/), sota llicència BSD-2-Clause.
- Tipografies [Old Standard TT](https://fonts.google.com/specimen/Old+Standard+TT) i [Special Elite](https://fonts.google.com/specimen/Special+Elite), sota llicència SIL Open Font License, servides amb [Fontsource](https://fontsource.org/).

### Drets

Aquest repositori **no inclou el text del llibre**. Els textos dels llocs són resums provisionals. Qualsevol fragment, imatge o àudio del llibre requereix l'autorització prèvia de l'editorial i dels titulars dels drets.

---

## Galego

<details>
<summary><b>Amosar o contido en galego</b></summary>

Aplicación web instalable (PWA) cun mapa interactivo que convida os lectores do libro *Curuxás* a visitar os lugares onde se moveu o personaxe. Cada lugar ten unha ficha con información sobre a vida de Curuxás e un acceso directo para chegar en coche.

**Próbaa:** https://ana-morandeira.github.io/curuxas/

> **Estado: bosquexo.** Os seis lugares e os textos son provisionais, e a maioría das coordenadas son aproximadas. Hai que afinalas sobre o terreo.

### Que fai

- **Mapa interactivo** cos lugares numerados e un estilo de época (papel avellentado, acuarela, tipografía clásica).
- **Como chegar**: cada ficha abre Google Maps, Waze ou Apple Maps co destino xa posto.
- **Aviso ao chegar**: co seguimento activado, cando o lector entra no radio dun lugar o móbil vibra, ábrese a ficha e desbloquéase o contido extra.
- **Progreso**: os lugares visitados márcanse e cóntanse.
- **Dous idiomas**: catalán (por defecto) e galego, cun selector `CA | GZ` na cabeceira.
- **Sen conexión**: a app e os mapas xa vistos gárdanse no móbil, pensado para zonas rurais con pouca cobertura.

### Como probala en local

Os *service workers* só funcionan desde `localhost` ou HTTPS, así que non abonda con abrir `index.html` con dobre clic.

```bash
git clone https://github.com/ana-morandeira/curuxas.git
cd curuxas
python -m http.server 8000
```

Abre `http://localhost:8000` no navegador. Para parar o servidor, preme `Ctrl + C`.

### Modo edición: capturar coordenadas

Para fixar a localización exacta de cada lugar:

1. Abre a app no móbil, dentro do lugar.
2. Na parte inferior da lista, preme **Modo edición**.
3. Abre a ficha do lugar e preme **Gardar a miña localización aquí**. A app mostra a precisión do GPS.
4. As coordenadas capturadas aparecen ao final da lista. Cópiaas e incorpóraas á lista `PLACES` de `index.html`.

O botón **Simular chegada** serve para ver o contido desbloqueado sen saír da casa.

### Estrutura

```
curuxas/
├── index.html              Aplicación (lugares, textos e lóxica)
├── sw.js                   Service worker (modo sen conexión)
├── manifest.webmanifest    Manifesto da PWA
├── leaflet/                Biblioteca de mapas
├── icons/                  Iconas da app
└── fonts/                  Tipografías
```

Os lugares e os seus textos en catalán e galego están ao comezo do script de `index.html`, na constante `PLACES`. Cada vez que se modifique un ficheiro, hai que subir o número de `VERSION` en `sw.js` para que os móbiles descarguen a versión nova.

### Publicación

A app publícase con GitHub Pages: *Settings → Pages → Deploy from a branch → `main` / `(root)`*.

### Créditos e licenzas

- Mapas: © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, baixo licenza ODbL.
- [Leaflet](https://leafletjs.com/), baixo licenza BSD-2-Clause.
- Tipografías [Old Standard TT](https://fonts.google.com/specimen/Old+Standard+TT) e [Special Elite](https://fonts.google.com/specimen/Special+Elite), baixo licenza SIL Open Font License, servidas con [Fontsource](https://fontsource.org/).

### Dereitos

Este repositorio **non inclúe o texto do libro**. Os textos dos lugares son resumos provisionais. Calquera fragmento, imaxe ou audio do libro require a autorización previa da editorial e dos titulares dos dereitos.

</details>