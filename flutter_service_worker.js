'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "82aec9ef6c5ef0025542e1f1499e705e",
"index.html": "451fc6c4711199794db09688bb829b67",
"/": "451fc6c4711199794db09688bb829b67",
"main.dart.js": "c7af18f211ea742332207159bbff4f28",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "20f6b4e281e0d5d3037873219028343a",
".git/ORIG_HEAD": "4bbf125bbe5d36e7236714fd4f771df7",
".git/config": "14544f8f4fa194dc9be62b3b1e50799d",
".git/objects/59/2995001726bce75f6ea3aefa3e879030804d6e": "4ab9601cb28f042f94c485787331caff",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/6c0778cbcf4a03bfe308726ab17885c8cdd74b": "def5b1c883a4fd7b167b17035a016d39",
".git/objects/6f/2532c9475e9c060fa564a65026dc9bde008d5d": "42aa9f7e9f9e75884f71c4f987ac07cd",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/67/a75f5e2c482bf097dcf12512a95b17ee548541": "6edb326af9fc7c01e53178f9b40184c2",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/eb6286b6e7b33913a55739af1fdf0e4aa4a359": "1170411f2a1feed81e95ef9ba70a784e",
".git/objects/34/e15f0adf7807769c260ee799f4afc352272db3": "3b6dc54f4b4536f9f949777ecc00d5ba",
".git/objects/05/3dd57fa4381f1f22ea5551cdd169b2ba3d1f8c": "eb7cfdaeed94724a93e9eed0917adada",
".git/objects/05/0a45dc049a214794b8d8d993f94fdba08175f8": "817112ce744fe090a8027d76ff28f6d8",
".git/objects/9d/4d9c0dc2033659746aef084059a99a9ec2f4d2": "ae54e0877e0b4f497b90a0ac751cac9c",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/ddca7de4cbae31bc18ad90bec6373204240aee": "8b7f5ec1cbaa73ce7b8b804b6f16a2e7",
".git/objects/d0/7f9f4d4351657e915324c75061249652a16053": "6cccfe26b1bb3add48e0147b3878fed3",
".git/objects/df/40261a88c32e13d8e5b7a9c1e4df2270b77ff6": "2f97cc94b809e85366ef9527b49c8246",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/5f232a821db6cb1f6ba480d391c4cd7663300a": "d9d7190c7d90c412ebea24e232230983",
".git/objects/f5/df90dcc4b9a06e1acf732b3b76240d46cf79f0": "29f23ef8dc9a73d95f62044e7a28d550",
".git/objects/ca/bba3d1b65db2682e0a66e1720a0b73a65a4953": "fb756cd7c64bcd9086575374b88ccac5",
".git/objects/ec/6482e1b1df899fc5b80dc182a312753cad29da": "2441d0e6e4f668c9c770dce2d73bfa33",
".git/objects/7d/9d9a9e5eb5b23fdd50e5c60279dea892158c11": "68fb516927623a9f651feae7749f6ade",
".git/objects/29/9d11ec099005737958b001184b44bc13911f6c": "77b37eab5463ab86891bcb5da27f0e40",
".git/objects/7c/50c42cf0c0be769e956fe9aa0873f9fc5a0892": "8d0ad661a2363d986e759424091d30f6",
".git/objects/1f/051e25f077d65d7905d05e512b987580411c25": "f5e4ae75b53fe9136c9ac239eeadac67",
".git/objects/74/1eec63a0b542f37656ab924c8d9b193232bd57": "6cc8ed031cdb7eb3a10c77a7957899d5",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/bff22949fb65dc617372fcdf04fbf87373cd5d": "ab59888d5ee47f1dff7a4a4c9bcd615b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/54388ff06f1860a66a9942e0a8c488b3cccb32": "321860f8b8c74aa9c19491b5004a159d",
".git/objects/4c/2d3b30a30b5ac844f3ebb7656281489fb646f1": "c521a38dfe968f6532fd0fbf6333c7a9",
".git/objects/21/a69482edd14a069d2295cbfc4303b3bf22c86c": "15de1383a19690c42c7024ad63879f37",
".git/objects/72/9a9e5a9a9f26338387a052a081ac1db930d849": "3babc1d8509b6ba3e3ca5342badb4e24",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/1e3b67b94aafaed7105108ef665943eca3f0be": "ce3e5503cd0a85652d16e01e0cd4b9be",
".git/objects/38/6b0e449e3173c919d1b7268ab4413bf4f74e25": "3fe254fee740a49c86e82590d1e41972",
".git/objects/00/17d1427e50b0153a9afa73fbf871d2e7435777": "95289f45f21bfc0307a88d1da3d4cd54",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/a36375e307f6eac13a25a1c068e6fc1a3c5fcb": "4921c4f04106a05fa4eb73c42586c0d8",
".git/objects/98/9df1ea46f93edf5eef0f1d25ec8c82709167ca": "ce92d192cebadfa543d1a93833622ea6",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/6d/8df4247e1f7d262d96ae01c27bc7a9c45b82ef": "8bf8f3cb32e72ed5a473fde9db230819",
".git/objects/39/eeff557dbdf924b190a0aabceb70102755abe8": "9cda5368ec3aa9c92730c11e5c109c86",
".git/objects/0a/5d3d966d11616776507c21166a095054bb038e": "d1eb59775122b5acda20ff618a7faf76",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/eea066d4eef6ff0417eeb43faad114c0e65708": "350375612ef31c947bf37c1569b8381c",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/b8/feebec13c370ef5acb62cb0db14bb8cfac4695": "9dc77a75bd18b236ec02fb2ea903e34d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/0ce0f9c3e86e5d0e0187e46324cdea8c912265": "b855359ed8adf4e0ba09579f429aaf5b",
".git/objects/b0/b95c7b5b8034c4e82f75784647393c1f8d665b": "2941892f625cf22029112bb9b39cb127",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/b251e59865229e226d4da6313fd9713c41f0bc": "98542bf93583e8b2dfc3d7f44cbbb731",
".git/objects/cd/5c368f65a308eb384ad194ffa3ae308cf7d555": "c4449d06b09c44d68cfff0e472512915",
".git/objects/cd/3adac393da7640914fb1cc776949ada4558dfa": "aad1fde6e255112e70095015dc04006c",
".git/objects/f9/8408e1949ef5e24b85e887178a9709d7d00aaa": "d481ff83e59ebba9e3c99954af8029c6",
".git/objects/f7/8d390d0507a3d6e8dddd6f996bbe39860f2aee": "126be4cbe6e938f887da0778fe01ed76",
".git/objects/ff/926bf21a3af6cbcd158438958631cc0f14e48d": "30d6d1128ecdfdce6c7baef592db3ce5",
".git/objects/c5/a4b312b3112d4893385929674af5738dc516cc": "fc485cde540d342550779be988c72ec8",
".git/objects/e9/e94e367a455bb9dbcbf5d44629b58ef38ea0cd": "d851b5df0969475500b11650cbb46f56",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/e099b9c035cf93a1e3a35de11164f65d58a723": "1b763db3b798463bdf2f14012bea94b5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/3cce744f3ee5444d59880aa8b66650709c4afc": "48fd7caefa78b3c549a39d770cebf9d8",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/8d/8ab9e7b9517d6fbee2ad9b7e360c48a2bf1645": "05ce395a4945d365c22f61e20656e9a9",
".git/objects/85/b69922ca5fff34da1359f417209a8617d666fa": "1360197e3e5a4b8e19abcb9715cad94c",
".git/objects/85/ac15238d40fd456bf8166906a20386567cff40": "793a5fd83b9a4109e67a79ec923a32e1",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/78/80aff1da3db881321d08b6d0e8f000c3223cee": "c27c47313581aeb99d28b5e9364342c6",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "02ad4fbc78679a268ee7b86e0654fabe",
".git/logs/refs/heads/master": "02ad4fbc78679a268ee7b86e0654fabe",
".git/logs/refs/remotes/origin/master": "f513e474183637ff059d4fdd090f1e0e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "4bbf125bbe5d36e7236714fd4f771df7",
".git/refs/remotes/origin/master": "4bbf125bbe5d36e7236714fd4f771df7",
".git/index": "3a4faf0843a65e83d4a059d7b96f1ed4",
".git/COMMIT_EDITMSG": "dab75c6567eeca1fb7d5f52c63734ab1",
".git/FETCH_HEAD": "54a9d9122730f4f1740afd923fb169c5",
"assets/AssetManifest.json": "978604b1df061f944c5c9cbeae795c41",
"assets/NOTICES": "ef68ae05335f9513a682772c7501ec92",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "67b8594f2c9be06e7f8120b7e527fcfd",
"assets/fonts/MaterialIcons-Regular.otf": "45adc68edf5ed1ec3cc15559a509290f",
"assets/assets/data2.csv": "d738f32ce882ce30cead1c0859694c09",
"assets/assets/data.csv": "dc1b8e1c88e56eb85174139c09d392c4",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
