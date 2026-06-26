    const CACHE_NAME = 'todo-cache-v1';

    // Files to save in cache when service worker is installed
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

    /*
    * Install Event
    * Runs when the service worker is installed.
    * Save important files into cache so they can be used offline.
    */
    self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
    });

    /*
    * Activate Event
    * Runs after installation.
    * Remove old caches that are no longer used.
    */
    self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
        Promise.all(
            keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
        )
        )
    );
    });

    /*
    * Fetch Event
    * Runs every time the app requests a file.
    *
    * 1. Check if the file is already in cache.
    * 2. If found, return the cached file.
    * 3. If not found, get it from the network.
    * 4. Save the new file into cache for future use.
    */
    self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cached) => {
        return ( cached || fetch(event.request).then((response) => {
            caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, response.clone());
            });
            return response;
            })
        );
        })
    );
    });


//      install → Save app files into cache.
//      activate → Delete old cache versions.
//      fetch → Use cached files first, otherwise download and cache them.