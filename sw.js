const CACHE = 'chatterbox-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) {
      return c.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // Network first for API calls (translation)
  if (e.request.url.indexOf('mymemory') >= 0 ||
      e.request.url.indexOf('googleapis') >= 0) {
    e.respondWith(fetch(e.request).catch(function() {
      return new Response(JSON.stringify({
        responseStatus: 503,
        responseData: { translatedText: '[Offline - no translation available]' }
      }), { headers: { 'Content-Type': 'application/json' } });
    }));
    return;
  }
  // Cache first for app assets
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      return cached || fetch(e.request).then(function(resp) {
        var clone = resp.clone();
        caches.open(CACHE).then(function(c) { c.put(e.request, clone); });
        return resp;
      });
    }).catch(function() {
      return caches.match('/index.html');
    })
  );
});
