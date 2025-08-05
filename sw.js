const CACHE_NAME = 'k8os-cache-v5';
const urlsToCache = [
  '.',
  'index.html',
  'manifest.json',
  'tomato-icon.svg',
  'https://ga.jspm.io/npm:es-module-shims@1.8.3/dist/es-module-shims.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
  'https://esm.run/@google/generative-ai',
  'https://esm.run/marked@4.0.12',
  'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.5.1'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
