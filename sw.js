// Service worker mínimo: solo lo necesario para que el navegador
// considere la página "instalable" como app. No cachea nada agresivamente
// para que los datos (RAW embebido en matex.html) siempre se vean frescos.
self.addEventListener('install', function(e){
  self.skipWaiting();
});
self.addEventListener('activate', function(e){
  self.clients.claim();
});
self.addEventListener('fetch', function(e){
  // Passthrough: deja que todas las peticiones vayan a la red normal.
  e.respondWith(fetch(e.request));
});
