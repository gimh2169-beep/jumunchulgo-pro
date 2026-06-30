// 주문출고 PRO v44
// No Service Worker 안정판.
// fetch 이벤트 없음: Safari redirect 오류 방지.

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(keys =>
        Promise.all(keys
          .filter(key => key.startsWith("jumunchulgo-pro-"))
          .map(key => caches.delete(key))
        )
      ),
      self.registration.unregister()
    ])
  );
  self.clients.claim();
});
