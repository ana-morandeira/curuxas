// Cambia VERSION cada vez que modifiques archivos para forzar la actualización.
const VERSION = "v16";
const APP = "curuxas-app-" + VERSION;
const TILES = "curuxas-tiles";
const MAX_TILES = 1500;
const SHELL = ["./","index.html","manifest.webmanifest","leaflet/leaflet.js","leaflet/leaflet.css",
  "leaflet/images/marker-icon.png","leaflet/images/layers.png","fonts/old-standard-tt-latin-400-normal.woff2","fonts/old-standard-tt-latin-400-italic.woff2","fonts/old-standard-tt-latin-700-normal.woff2","fonts/special-elite-latin-400-normal.woff2","icons/icon-192.png","icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(APP).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(
    ks.filter(k => k.startsWith("curuxas-app-") && k !== APP).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});

async function trim(cache){
  const keys = await cache.keys();
  if(keys.length > MAX_TILES) await Promise.all(keys.slice(0, keys.length - MAX_TILES).map(k => cache.delete(k)));
}
self.addEventListener("fetch", e => {
  const req = e.request; if(req.method !== "GET") return;
  const url = new URL(req.url);
  if(url.hostname.endsWith("tile.openstreetmap.org")){          // mapa: caché primero
    e.respondWith(caches.open(TILES).then(async c => {
      const hit = await c.match(req); if(hit) return hit;
      try{ const r = await fetch(req); if(r.ok){ c.put(req, r.clone()); trim(c); } return r; }
      catch(_){ return new Response("", {status: 504}); }
    }));
    return;
  }
  if(url.origin === location.origin){                           // app: caché primero, red de respaldo
    e.respondWith(caches.match(req, {ignoreSearch:true}).then(hit => hit || fetch(req).then(r => {
      if(r.ok) caches.open(APP).then(c => c.put(req, r.clone())); return r;
    }).catch(() => caches.match("index.html"))));
  }
});
