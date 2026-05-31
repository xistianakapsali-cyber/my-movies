const CACHE_NAME = 'yioio-cache-v1';
const assets = [
  './',
  './index.html',
  './styles.css',
  './icon.png',
  './icon-large.png',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
