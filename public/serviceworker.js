const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

//Install SW
self.addEventListener('install', e => {
    e.waitUntil(
        cache.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache')

                return cache.addAll(urlsToCache);
            })
    )
});

//Listen for requests
self.addEventListener('fetch', e => {

});

// Activate the SW
self.addEventListener('activate', e => {

});