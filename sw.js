const CACHE_NAME = "jumunchulgo-pro-v42";
const ASSETS = [
  "./index.html?v=42",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.allSettled(ASSETS.map(url => cache.add(url)))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys
        .filter(key => key.startsWith("jumunchulgo-pro-") && key !== CACHE_NAME)
        .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== "GET") return;

  if (req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html")) {
    event.respondWith(
      fetch(req, { cache: "no-store", redirect: "follow" })
        .then(res => {
          if (res && res.ok && !res.redirected && res.type === "basic") {
            const copy = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put("./index.html?v=42", copy)).catch(()=>{});
          }
          return res;
        })
        .catch(() => caches.match("./index.html?v=42").then(cached =>
          cached || new Response("오프라인 상태입니다. 네트워크 연결 후 다시 열어주세요.", {
            status: 503,
            headers: {"Content-Type":"text/plain; charset=utf-8"}
          })
        ))
    );
    return;
  }

  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req, {redirect:"follow"}).then(res => {
          if (res && res.ok && !res.redirected && (res.type === "basic" || res.type === "cors")) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(()=>{});
          }
          return res;
        });
      })
    );
  }
});
