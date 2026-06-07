self.addEventListener('install', (e) => {
  console.log('PWA Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // يترك الطلبات تمر مباشرة ليعمل الموقع بشكل طبيعي
  e.respondWith(fetch(e.request));
});
