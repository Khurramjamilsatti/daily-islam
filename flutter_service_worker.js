'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9b1176b6c7ad3d1a87c13adaacb9bda1",
"version.json": "a709d9e6d1ee9a08a72bd9690e4dc3ce",
"index.html": "617afa92a7fdbb7b7378f7ab073d9fd6",
"/": "617afa92a7fdbb7b7378f7ab073d9fd6",
"main.dart.js": "75522d0f2c6080942ddd23cdfa5c1955",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "ae5671f3ce1d6aaf84744e8c4c2ae5ea",
"icons/Icon-192.png": "75709580bf2d20bd01993873602a9b9e",
"icons/Icon-maskable-192.png": "75709580bf2d20bd01993873602a9b9e",
"icons/Icon-maskable-512.png": "47445c790e4f758c6b03ca9afaeb4ded",
"icons/Icon-512.png": "47445c790e4f758c6b03ca9afaeb4ded",
"manifest.json": "7169630290aab87c61d0640fd7ab32c9",
"assets/AssetManifest.json": "7cb092e2bd9e127a26556e14581812cd",
"assets/NOTICES": "52eb4a2381f33d033ff6030d7abafc77",
"assets/FontManifest.json": "c35d6cf2fcff5631bbd678d12226d52b",
"assets/AssetManifest.bin.json": "63b37bddd70ee4bcdcf61b0f3b2f6dab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/pdfrx/assets/pdfium.wasm": "e45b1bd7c49fb3c1b265367302856ed6",
"assets/packages/pdfrx/assets/pdfium_client.js": "9ef7c314155dc36c966ef89df070dfd2",
"assets/packages/pdfrx/assets/pdfium_worker.js": "a8bea966b1311bc80d5bc9c559e7d3e0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "12fca3275c1083be92ebdc3e9f47a41a",
"assets/fonts/MaterialIcons-Regular.otf": "7b8c4660a57b342c96639e7b7dc3b596",
"assets/assets/images/slider_mosque_gathering.jpg": "b0e2502d474072f3908ebaf1828f00f0",
"assets/assets/images/slider_quran_reading.jpg": "753383bfdc3cf61bd11c3690724cc3dd",
"assets/assets/images/slider_mosque_courtyard.jpg": "125eee0e193b66ab27df96fc5259030c",
"assets/assets/audio/naats_nasheeds.json": "0fe301d9e71004da61b267c04fc3d4b8",
"assets/assets/hadith_data/number_index.json": "aac3890d38fe9db49f7fd6289bd515db",
"assets/assets/hadith_data/tirmidhi/hadiths.json": "364817f3b6072ac19ab4d1542bb5aa30",
"assets/assets/hadith_data/tirmidhi/books.json": "ec3fa39e813f4378fe8bb588190149a7",
"assets/assets/hadith_data/ibnmajah/hadiths.json": "62a870516e5c797ad250ce5894434369",
"assets/assets/hadith_data/ibnmajah/books.json": "874cef3f671b53a8ac80db92036c32b5",
"assets/assets/hadith_data/urdu/nasai.json": "76bac7e12e19dbb7bc0bc6b4a335d354",
"assets/assets/hadith_data/urdu/tirmidhi.json": "88be870e76677aba99c7822a43a24eb0",
"assets/assets/hadith_data/urdu/ibnmajah.json": "b3d8535d1b0278b192995547fecfcc1e",
"assets/assets/hadith_data/urdu/muslim.json": "6dd12e705b94149b76758d3b8865eec5",
"assets/assets/hadith_data/urdu/bukhari.json": "d5366801be31f884856b7591951c766a",
"assets/assets/hadith_data/urdu/abudawud.json": "0cd1d8a514ad2aa8f6aca3b91f82d7d7",
"assets/assets/hadith_data/muslim/hadiths.json": "ff55637bd4594a188648a6e1d61ba162",
"assets/assets/hadith_data/muslim/books.json": "a692051ff5a04ae7f0bceb44013bb6e2",
"assets/assets/hadith_data/bukhari/hadiths.json": "024711eb5db9ebe1ee87a34108a1257f",
"assets/assets/hadith_data/bukhari/books.json": "8c9f4df6ba2743d3141bbd4c7aaf65f9",
"assets/assets/hadith_data/abudawud/hadiths.json": "4c0fc051117cef2178362f90d084daf0",
"assets/assets/hadith_data/abudawud/books.json": "41a21705ac0b2416bd509159fdc8b0bc",
"assets/assets/hadith_data/nasai/hadiths.json": "dff250ffab86a81376b66371ae818411",
"assets/assets/hadith_data/nasai/books.json": "a1dfd822f7aaa581463a0b1b74a6a505",
"assets/assets/icons/app_icon.png": "5f0781e137f5ae402064e195fe8679ae",
"assets/assets/icons/app_icon_foreground.png": "ce12d9df39ffb2964b206081ebec6e5f",
"assets/assets/fonts/NotoSans-Regular.ttf": "2c157a50aeb376ee5a69032d7813ffb2",
"assets/assets/fonts/ScheherazadeNew-Regular.ttf": "c0e47a64bbbe47569e478e2dfe42618e",
"assets/assets/fonts/NotoNastaliqUrdu.ttf": "3dcb619f91f4d4cbe9fab302c30e76ca",
"assets/assets/fonts/NotoNaskhArabic.ttf": "3a7ec93ba2306756b72cc0ef938c78bc",
"sw.js": "b61f878909c837d9e81639e0ac394d10",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
