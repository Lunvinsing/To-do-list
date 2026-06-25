    const CACHE_NAME = 'todo-cache-v1';

    const ASSETS = [
    '/',
    '/index.html',
    '/script.js',
    '/css/style.css',
    '/css/font.css',
    '/assets/check.png',
    '/assets/logo.png',
    '/assets/unchecked.png',
    '/assets/unchecked.svg',
    '/fonts/Ubuntu-Regular.ttf',
    '/fonts/Ubuntu-Bold.ttf',
    ];

    // Install — pre-cache all assets
    self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
    });

    // Activate — delete old caches
    self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
        )
        )
    );
    });

    // Fetch — cache first, fallback to network
    self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cached) => {
        return cached || fetch(event.request).then((response) => {
            caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            });
            return response;
        });
        })
    );
    });