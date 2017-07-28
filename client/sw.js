import { precacheStaticAssets, removeUnusedCaches, ALL_CACHES, ALL_CACHES_LIST } from './sw/caches.js';

const FALLBACK_IMAGE_URL = 'https://localhost:3100/images/fallback-grocery.png';

<<<<<<< HEAD
self.addEventListener('install', (event) => {
  console.log('install',++counts.installs);
  return fetch('https://localhost:3000/asset-manifest.json', {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then((response) => {
      console.log('response from asset manifest', response.json());

    })
=======
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      // get the fallback image
      caches.open(ALL_CACHES.fallbackImages)
        .then(cache => {
          cache.add(FALLBACK_IMAGE_URL);
        }),
      // populate the precache stuff
      precacheStaticAssets()
    ])
  )
>>>>>>> 29da227a271b8b05ebe72b574262f873c84aac0d
});

self.addEventListener('activate', (event) => {
  // caches.keys().then(cacheNames => {})
  event.waitUntil(
    removeUnusedCaches(ALL_CACHES_LIST)
  )
});

<<<<<<< HEAD
self.addEventListener('fetch', (event) => {
  console.log('fetch', ++counts.fetches);

  let acceptHeader = event.request.headers.get('accept');
  let requestUrl = new URL(event.request.url);
  if (counts.fetches % 10 == 0) {
    console.log(acceptHeader);
  }

  if (acceptHeader.indexOf('image/*') >= 0 && requestUrl.pathname.indexOf('/images/' ==0)) {
    console.log('this is a product image!');
  }
=======
function fetchImageOrFallback(fetchEvent) {
  return fetch(fetchEvent.request, { 
    mode: 'cors',
    credentials: 'omit' // in case CORS wildcard headers are present
  }).then(response => {
    if (!response.ok) {
      return caches.match(FALLBACK_IMAGE_URL, { cacheName: ALL_CACHES.fallbackImages });
    } else {
      return response;
    }
  }).catch(error => {
    console.error(error);
    return caches.match(FALLBACK_IMAGE_URL, { cacheName: ALL_CACHES.fallbackImages });
  })
}

self.addEventListener('fetch', event => {
  let acceptHeader = event.request.headers.get('accept');
  let requestUrl = new URL(event.request.url);

  event.respondWith(
    caches.match(event.request, {cacheName: ALL_CACHES.prefetch}).then((response) => {
      // If a precached thing is found, go with it
      if (response) return response;
      // Otherwise, let's dig deeper
      if (acceptHeader.indexOf('image/*') >= 0) {
        if (requestUrl.pathname.indexOf('/images/') === 0) {
          return fetchImageOrFallback(event);
        }
      }
      return fetch(event.request);
    })
  )
>>>>>>> 29da227a271b8b05ebe72b574262f873c84aac0d
});