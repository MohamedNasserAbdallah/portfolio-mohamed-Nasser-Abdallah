'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "153c75d3cde96b26775d399d035dd565",
"assets/AssetManifest.bin.json": "831f414bbbcf2152109c2149607aaebe",
"assets/AssetManifest.json": "50734916adbf3f5403f4eba60f11dc88",
"assets/assets/fonts/JosefinSans/JosefinSans-Bold.ttf": "b22a8f2494bafa9cd040aa9db29bc43d",
"assets/assets/fonts/JosefinSans/JosefinSans-Italic.ttf": "72c897aabeba0a923c4eca1b355fb866",
"assets/assets/fonts/JosefinSans/JosefinSans-Light.ttf": "1e660e971a00bdedd9aea889b8b3308d",
"assets/assets/fonts/JosefinSans/JosefinSans-Medium.ttf": "4c0529618e047e91b356eb04633136dc",
"assets/assets/fonts/JosefinSans/JosefinSans-Regular.ttf": "effd9508e574fd2ab338bbd81f784f3e",
"assets/assets/fonts/JosefinSans/JosefinSans-SemiBold.ttf": "4d6fba7324c7c30b35e1190e93f38aac",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/icons/backgroundimageusername.png": "1f4eca612ff86f8885697b911b165a81",
"assets/assets/icons/backgroundshawrmer.png": "f604f8aed2d9b1d107f3e92e3fe72e78",
"assets/assets/icons/cash.png": "076218f39de818ae41b68e5fbb356ccc",
"assets/assets/icons/check.png": "ac6b221a0e50675f9c4cf1f40761941a",
"assets/assets/icons/dddd.png": "52f8cedc1290468da8055c458d38ff55",
"assets/assets/icons/delivery.png": "ff588eef27a979472984f0b83d339119",
"assets/assets/icons/Frame%252011.png": "401eb8c4834de87340c6cb5cf61a9819",
"assets/assets/icons/Frame%252021.png": "362f43d0415253f68ae660a38d02874c",
"assets/assets/icons/Frame%2520367.png": "86acafaa23947bf331a8a23418e05ba3",
"assets/assets/icons/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/icons/globe.png": "cd69dac8f7824c22c16bddf9cbc83ba8",
"assets/assets/icons/herennnn.png": "cea6f5790c9ef77d1149f11bd18d6971",
"assets/assets/icons/imagenumber.png": "4d00da01dac2a35855d4a22cac838fc3",
"assets/assets/icons/images.png": "35e3a1da01d5511dc1292a781c0af64b",
"assets/assets/icons/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/assets/icons/linkedin.png": "efdb74ff3631151062095b0c9b228c21",
"assets/assets/icons/Location.png": "586142eb225c3fdac6039370f1f1e998",
"assets/assets/icons/ne.png": "884fe826371c234dd37d6295c2cb4b36",
"assets/assets/icons/new.png": "e805e3f4d0a503c11a2d85775576cd31",
"assets/assets/icons/nn.png": "d5a4b1b5e995f168b74fcaf03e35d855",
"assets/assets/icons/notewhite.png": "80507e4002540de832212da15e110f43",
"assets/assets/icons/Phone.png": "8eedcb8d15ab001c99cdcc60080db0a6",
"assets/assets/icons/service-icon1.png": "2eaf1a87ec016307ba42e0bc65101f8b",
"assets/assets/icons/service-icon2.png": "233237a0ea968e3515ef77663f78be36",
"assets/assets/icons/service-icon3.png": "16b55727c209fc8ff9da0df5731f1c11",
"assets/assets/icons/service-icon4.png": "2f29e0088963f8ae125b6d2622d74c0f",
"assets/assets/icons/service-icon5.png": "d2a756ff6ae67476d6d102fa82ef1a3c",
"assets/assets/icons/sharamerlogo.png": "29b648e03b9c3be6e4f18509e7bec9eb",
"assets/assets/icons/Study%2520Notes.png": "309cc33ae30241cb00d3815f0baaa264",
"assets/assets/icons/tik-tok.png": "e30e4714ecadc84324ee6e65ae93d669",
"assets/assets/icons/transfer.png": "137e78eef3b6ae8e432b9be81c2626c9",
"assets/assets/icons/twitter.png": "3e8e7ee8666a9f4e2946f39ff2f806e3",
"assets/assets/icons/user.png": "d588baf5cdbdd96816876c3b22542773",
"assets/assets/icons/Vectorusername.png": "7578a3ad4377b030b7a585157cd60952",
"assets/assets/icons/youtube.png": "642bfb077a5c99b6564f979578900c53",
"assets/assets/imgs/aedbel_logo.png": "ae8eeb12b9759d75d3cb542c7a6ff924",
"assets/assets/imgs/easyStore.png": "3bbb470e285f1beca8d542192f535794",
"assets/assets/imgs/elkarmagroub.png": "56ec01bf5890876174d1c7ada778dd7c",
"assets/assets/imgs/email.png": "b6c973fdf85893b70aba641f640533b7",
"assets/assets/imgs/ETI.png": "2854d64fce076c7b8eb0fd967a688298",
"assets/assets/imgs/f218.png": "7b73a9b1df2de0eff631772e055e7e5a",
"assets/assets/imgs/p1.png": "e8f94ef8485a3ce04b82bc11b3b3dfeb",
"assets/assets/imgs/p2.png": "8344f0a554aeefb1a8abcb614c45c9b6",
"assets/assets/imgs/p3.png": "27b69c56f4f32036a6ea5014eb4790ee",
"assets/assets/imgs/p4.png": "adc921888d28b24cfd623096c8eff781",
"assets/assets/imgs/p5.png": "f3e18b5b7cc26059cfb54186d465d018",
"assets/assets/imgs/paymentSystem.png": "843ffb7a8ddbf1e9dca55ba2fa0ee650",
"assets/assets/imgs/portfolio-img1.png": "7b671598ea608ec41d52c9f57f7d94ab",
"assets/assets/imgs/portfolio-img2.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/imgs/portfolio-img3.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/imgs/portfolio-img4.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/imgs/portfolio-img5.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/imgs/s.pdf": "9ee54aedb1855b8a9e77dcd1b5d36c04",
"assets/assets/imgs/schol.png": "18bb23b61fa83d93d3c41660d606e04b",
"assets/assets/imgs/ss.png": "fa2c1c5a4da86ddbbbea62899e829981",
"assets/assets/imgs/vector.png": "16fa78ca01ce794aa977d10a284d4751",
"assets/assets/imgs/veva.png": "3ad84c283279b619e5186b833885742f",
"assets/assets/imgs/whats.jpg": "979a9346dd6b279bbff4671c516f4f05",
"assets/assets/imgs/whatse.png": "585f80ead978ae83834016cf2dfd5a12",
"assets/FontManifest.json": "3172dd82d725455ad63122e83379cb8f",
"assets/fonts/MaterialIcons-Regular.otf": "35ba1b860d1b525f1b21093085959e9b",
"assets/NOTICES": "f3bd43218640d7e533d124566e19a4de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "b00179c009042e07286dc38f44e646cc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "96bacf0c723903bff6d4a66fb226f452",
"icons/android-chrome-192x192.png": "14962facf9c4620737076e82428a6cbd",
"icons/android-chrome-512x512.png": "041b16a9ded57efdb245ba9a6b42185e",
"icons/apple-touch-icon.png": "516ea9d123a4d301d271185bb5d53e1c",
"index.html": "7ae36d98fc230487ffebcb5de8eacaa6",
"/": "7ae36d98fc230487ffebcb5de8eacaa6",
"main.dart.js": "d4e92aafdd270599a67987574a9667d5",
"manifest.json": "f5b12eb9bc18f1f0c496b9c177be2423",
"version.json": "a697795509b860caabd94afbcea74a88"};
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
