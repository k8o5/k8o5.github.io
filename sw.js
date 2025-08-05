const CACHE_NAME = 'k8os-cache-v1';
const urlsToCache = [
  '.',
  'index.html',
  'manifest.json',
  'icon.svg',
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
