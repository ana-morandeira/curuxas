# Ruta Curuxás

[Català](README.md) · **Galego**

Aplicación web instalable (PWA) cun mapa interactivo que convida os lectores do libro *Curuxás* a visitar os lugares onde se moveu o personaxe. Cada lugar ten unha ficha con información sobre a vida de Curuxás e un acceso directo para chegar en coche.

**Próbaa:** https://ana-morandeira.github.io/curuxas/

> **Estado: bosquexo.** Os seis lugares e os textos son provisionais, e a maioría das coordenadas son aproximadas. Hai que afinalas sobre o terreo.

## Que fai

- **Mapa interactivo** cos lugares numerados e un estilo de época (papel avellentado, acuarela, tipografía clásica).
- **Como chegar**: cada ficha abre Google Maps, Waze ou Apple Maps co destino xa posto.
- **Aviso ao chegar**: co seguimento activado, cando o lector entra no radio dun lugar o móbil vibra, ábrese a ficha e desbloquéase o contido extra.
- **Progreso**: os lugares visitados márcanse e cóntanse.
- **Dous idiomas**: catalán (por defecto) e galego, cun selector `CA | GZ` na cabeceira.
- **Sen conexión**: a app e os mapas xa vistos gárdanse no móbil, pensado para zonas rurais con pouca cobertura.

## Como probala en local

Os *service workers* só funcionan desde `localhost` ou HTTPS, así que non abonda con abrir `index.html` con dobre clic.

```bash
git clone https://github.com/ana-morandeira/curuxas.git
cd curuxas
python -m http.server 8000
```

Abre `http://localhost:8000` no navegador. Para parar o servidor, preme `Ctrl + C`.

## Modo edición: capturar coordenadas

Para fixar a localización exacta de cada lugar:

1. Abre a app no móbil, dentro do lugar.
2. Na parte inferior da lista, preme **Modo edición**.
3. Abre a ficha do lugar e preme **Gardar a miña localización aquí**. A app mostra a precisión do GPS.
4. As coordenadas capturadas aparecen ao final da lista. Cópiaas e incorpóraas á lista `PLACES` de `index.html`.

O botón **Simular chegada** serve para ver o contido desbloqueado sen saír da casa.

## Estrutura

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

## Publicación

A app publícase con GitHub Pages: *Settings → Pages → Deploy from a branch → `main` / `(root)`*.

## Créditos e licenzas

- Mapas: © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, baixo licenza ODbL.
- [Leaflet](https://leafletjs.com/), baixo licenza BSD-2-Clause.
- Tipografías [Old Standard TT](https://fonts.google.com/specimen/Old+Standard+TT) e [Special Elite](https://fonts.google.com/specimen/Special+Elite), baixo licenza SIL Open Font License, servidas con [Fontsource](https://fontsource.org/).

## Dereitos

Este repositorio **non inclúe o texto do libro**. Os textos dos lugares son resumos provisionais. Calquera fragmento, imaxe ou audio do libro require a autorización previa da editorial e dos titulares dos dereitos.
