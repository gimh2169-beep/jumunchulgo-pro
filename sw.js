// 주문출고 PRO v43
// Service Worker 제거용 안전 파일.
// fetch 이벤트를 등록하지 않아서 Safari redirect 오류를 차단합니다.

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
