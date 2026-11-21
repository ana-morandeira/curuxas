Ruta Curuxás
Català · Galego
Aplicació web instal·lable (PWA) amb un mapa interactiu que convida els lectors del llibre Curuxás a visitar els llocs on es va moure el personatge. Cada lloc té una fitxa amb informació sobre la vida de Curuxás i un accés directe per arribar-hi amb el cotxe.
Prova-la: https://ana-morandeira.github.io/curuxas/
Estat: esborrany. Els sis llocs i els textos són provisionals, i la majoria de coordenades són aproximades. Cal afinar-les sobre el terreny.
Què fa
* Mapa interactiu amb els llocs numerats i un estil d'època (paper envellit, aquarel·la, tipografia clàssica).
* Com arribar-hi: cada fitxa obre Google Maps, Waze o Apple Maps amb la destinació ja posada.
* Avís en arribar: amb el seguiment activat, quan el lector entra al radi d'un lloc el mòbil vibra, s'obre la fitxa i es desbloqueja el contingut extra.
* Progrés: els llocs visitats es marquen i es compten.
* Dos idiomes: català (per defecte) i gallec, amb un selector CA | GZ a la capçalera.
* Sense connexió: l'app i els mapes ja vistos es desen al mòbil, pensat per a zones rurals amb poca cobertura.
Com provar-la en local
Els service workers només funcionen des de localhost o HTTPS, així que no n'hi ha prou d'obrir index.html amb doble clic.
git clone https://github.com/ana-morandeira/curuxas.git
cd curuxas
python -m http.server 8000
Obre http://localhost:8000 al navegador. Per aturar el servidor, prem Ctrl + C.
Mode edició: capturar coordenades
Per fixar la ubicació exacta de cada lloc:
1. Obre l'app al mòbil, dins del lloc.
2. A la part inferior de la llista, prem Mode edició.
3. Obre la fitxa del lloc i prem Desar la meva ubicació aquí. L'app mostra la precisió del GPS.
4. Les coordenades capturades apareixen al final de la llista. Copia-les i incorpora-les a la llista PLACES de index.html.
El botó Simular arribada serveix per veure el contingut desbloquejat sense moure's de casa.
Estructura
curuxas/
??? index.html              Aplicació (llocs, textos i lògica)
??? sw.js                   Service worker (mode sense connexió)
??? manifest.webmanifest    Manifest de la PWA
??? leaflet/                Llibreria de mapes
??? icons/                  Icones de l'app
??? fonts/                  Tipografies
Els llocs i els seus textos en català i gallec estan al començament de l'script de index.html, a la constant PLACES. Cada vegada que es modifiqui un fitxer, cal pujar el número de VERSION a sw.js perquè els mòbils descarreguin la versió nova.
Publicació
L'app es publica amb GitHub Pages: Settings ? Pages ? Deploy from a branch ? main / (root).
Crèdits i llicències
* Mapes: © OpenStreetMap contributors, sota llicència ODbL.
* Leaflet, sota llicència BSD-2-Clause.
* Tipografies Old Standard TT i Special Elite, sota llicència SIL Open Font License, servides amb Fontsource.
Drets
Aquest repositori no inclou el text del llibre. Els textos dels llocs són resums provisionals. Qualsevol fragment, imatge o àudio del llibre requereix l'autorització prèvia de l'editorial i dels titulars dels drets.

