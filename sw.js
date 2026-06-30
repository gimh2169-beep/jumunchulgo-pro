// 주문출고 PRO v56
// No Service Worker 안정판.
self.addEventListener("install", event => { self.skipWaiting(); });
self.addEventListener("activate", event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith("jumunchulgo-pro-")).map(key => caches.delete(key)))),
    self.registration.unregister()
  ]));
  self.clients.claim();
});
