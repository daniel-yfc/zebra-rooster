// 定義快取名稱和需要快取的檔案列表
const CACHE_NAME = 'statement-generator-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  'scripts/export.js',
  'scripts/storage.js',
  'assets/icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
];

// 1. 安裝 Service Worker
// 這個階段會開啟快取並將核心檔案加入
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. 攔截網路請求
// 當應用程式發出請求時，會先檢查快取中是否有對應的資源
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果快取中有，就直接從快取回傳
        if (response) {
          return response;
        }
        // 如果快取中沒有，就從網路請求
        return fetch(event.request);
      })
  );
});
