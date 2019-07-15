/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about.html",
    "revision": "a99229c60da2bef026ae6d0293492b5f"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "c2da6fda766a1c8adebf7d192e7cd86d"
  },
  {
    "url": "android-chrome-192x192.webp",
    "revision": "79250815b4b6878cc920c88e362787f2"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "d0b5e8e9e4c53d546618842b2e94ff75"
  },
  {
    "url": "android-chrome-512x512.webp",
    "revision": "171bedba2dc8c404e624fb20f0114bb9"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "90dbbd0cd60fe00ae77cfe53de73bf50"
  },
  {
    "url": "apple-touch-icon.webp",
    "revision": "11f0157d2b17cb06f78eb2fe5e2046e3"
  },
  {
    "url": "assets/backgrounds/noise.png",
    "revision": "2eb88572cd26ea42606923e50e615306"
  },
  {
    "url": "assets/backgrounds/noise.webp",
    "revision": "b60b7af74ff2fff1933185847591cef0"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.png",
    "revision": "a4b23b386c55733d7beaf2f4448580db"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.webp",
    "revision": "926339f48e43301a3e6aec9d7052ef09"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.png",
    "revision": "305e5bc934d37a9314bd224ac8046b9a"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.webp",
    "revision": "1dede19592d92f97ac0adf6c751c67f8"
  },
  {
    "url": "assets/blank.png",
    "revision": "9529390786a6bfeb4ea5197a39d2e410"
  },
  {
    "url": "assets/blank.svg",
    "revision": "a618f05d0e890f40750109f67a2dcb7c"
  },
  {
    "url": "assets/displacement/1.jpg",
    "revision": "b8da763a858465259ab808951115378a"
  },
  {
    "url": "assets/displacement/1.webp",
    "revision": "b6813fa4c1a8bfa957860a1f70d68b8e"
  },
  {
    "url": "assets/displacement/10.jpg",
    "revision": "ac0814dc8c64b0a865ac8e776596296e"
  },
  {
    "url": "assets/displacement/10.webp",
    "revision": "5445b7430ef2a022a624b3720d84f4a0"
  },
  {
    "url": "assets/displacement/11.jpg",
    "revision": "0adb8befd0fe4645c8a2246cdcd017a6"
  },
  {
    "url": "assets/displacement/11.webp",
    "revision": "5d0cb5579d7671d0c25b344c3b6255ef"
  },
  {
    "url": "assets/displacement/12.jpg",
    "revision": "ea66cb046ef753f891f0f70fa40a8026"
  },
  {
    "url": "assets/displacement/12.webp",
    "revision": "c681b1b638da55bd482591fe9d8850dd"
  },
  {
    "url": "assets/displacement/13.jpg",
    "revision": "60faf21f20c66f8dc6ed7ccaf9b509b3"
  },
  {
    "url": "assets/displacement/13.webp",
    "revision": "44cdb609c63bd8e9dc90babef72d65fb"
  },
  {
    "url": "assets/displacement/14.jpg",
    "revision": "f9b0a842c06b137dcfc99a9ecc4c0ae4"
  },
  {
    "url": "assets/displacement/14.webp",
    "revision": "f31430e3bf4973765e56569e9e6831a6"
  },
  {
    "url": "assets/displacement/15.jpg",
    "revision": "7fdd90b8b829d20e726426a80f7b20da"
  },
  {
    "url": "assets/displacement/15.webp",
    "revision": "bc262bfb4f41254467141b3616f3bd5f"
  },
  {
    "url": "assets/displacement/16.jpg",
    "revision": "816a8623f0c68f54c7d8dd660b8df2bd"
  },
  {
    "url": "assets/displacement/16.webp",
    "revision": "18679acef42c8a3bbaebed2fdd924e37"
  },
  {
    "url": "assets/displacement/2.jpg",
    "revision": "566c735e6db05bfdacc2eb79695c4f3c"
  },
  {
    "url": "assets/displacement/2.webp",
    "revision": "0c80b071a9df6cbe633a2cdfcd406972"
  },
  {
    "url": "assets/displacement/3.jpg",
    "revision": "76c4164185efadbdb90a847407760ece"
  },
  {
    "url": "assets/displacement/3.webp",
    "revision": "723bfb2800997b508724b595a74c0e20"
  },
  {
    "url": "assets/displacement/4.png",
    "revision": "3408054e5f083993c59b1b92204fbc12"
  },
  {
    "url": "assets/displacement/4.webp",
    "revision": "89e95ceed152eab7cdd4c70cac4c79cc"
  },
  {
    "url": "assets/displacement/5.png",
    "revision": "5109314848ee05640300a16f3dfb4fd6"
  },
  {
    "url": "assets/displacement/5.webp",
    "revision": "04cd403b7f18f783831285ffd7ac7fc1"
  },
  {
    "url": "assets/displacement/6.jpg",
    "revision": "45f3e9b576642cf958503eec6508bff1"
  },
  {
    "url": "assets/displacement/6.webp",
    "revision": "24a69d7f44de62d07afb24037f38349c"
  },
  {
    "url": "assets/displacement/7.jpg",
    "revision": "fc6c214dbe176f8964f82a9bba7862e5"
  },
  {
    "url": "assets/displacement/7.webp",
    "revision": "8530bd2b015308e0b49bfb936c3c0276"
  },
  {
    "url": "assets/displacement/8.jpg",
    "revision": "9793a9326317ea5a7ea43faf81c9074f"
  },
  {
    "url": "assets/displacement/8.webp",
    "revision": "104592ba2f4b59e087a70f01e7c01f78"
  },
  {
    "url": "assets/displacement/9.jpg",
    "revision": "63046812ea831e0716ab3299564d2493"
  },
  {
    "url": "assets/displacement/9.webp",
    "revision": "e2a50e4c924e12ededcafc1b32f63871"
  },
  {
    "url": "assets/error-static.gif",
    "revision": "e49fc1bd18b966580f4c6d0486adf97b"
  },
  {
    "url": "assets/error.gif",
    "revision": "6f851662ad2fe92e38d93dbf1e31b84a"
  },
  {
    "url": "assets/icon.png",
    "revision": "fead4cea5f2aa49e262d3cb2990145c1"
  },
  {
    "url": "assets/icon.webp",
    "revision": "36225b32cc874358e15235fba6771627"
  },
  {
    "url": "assets/icons/cover.png",
    "revision": "b319bcbf74f93f79f15c376e562864e7"
  },
  {
    "url": "assets/icons/cover.webp",
    "revision": "bd6ee1cf82234fe7034704fe4e0b5ca2"
  },
  {
    "url": "assets/icons/icon.png",
    "revision": "fead4cea5f2aa49e262d3cb2990145c1"
  },
  {
    "url": "assets/icons/icon.webp",
    "revision": "36225b32cc874358e15235fba6771627"
  },
  {
    "url": "assets/logos/american-dental-association.svg",
    "revision": "9835ad54933eed6251f76d018eaca82b"
  },
  {
    "url": "assets/logos/american-medical-association.svg",
    "revision": "a6e18b56eb174ce723fd1be5c8bec12d"
  },
  {
    "url": "assets/logos/american-society-for-dematologic-surgery.svg",
    "revision": "8cbd8fe46f50b2080dc909dc2bfd098d"
  },
  {
    "url": "assets/logos/american-society-of-plastic-surgeons.svg",
    "revision": "2333c73803ab6275c35d6f512cecef17"
  },
  {
    "url": "assets/logos/facebook.svg",
    "revision": "4f23596e50fbc2804f9e80a111dfd3a6"
  },
  {
    "url": "assets/logos/google-plus.svg",
    "revision": "9a76792bba107284a0690e2658a5bfb2"
  },
  {
    "url": "assets/logos/member-of-the-american-society-for-aesthetic-plastic-surgery.svg",
    "revision": "dd5fcf2f2de3f9b817d63c811b180986"
  },
  {
    "url": "assets/logos/the-american-board-of-venous-and-lymphatic-medicine.svg",
    "revision": "6b550e730404347553061821dfbd3eeb"
  },
  {
    "url": "assets/logos/yelp.svg",
    "revision": "0be3b741818a2b8b111d4445d2982e81"
  },
  {
    "url": "assets/placeholder/1TE_7284.jpg",
    "revision": "06c67b00efb967d343adff7e71fffeba"
  },
  {
    "url": "assets/placeholder/1TE_7284.webp",
    "revision": "e6dd4c05fb7fe0c5dc363feaf04be29d"
  },
  {
    "url": "assets/placeholder/1TE_7384.jpg",
    "revision": "f0411673d13ab6427388bf10b9c6524f"
  },
  {
    "url": "assets/placeholder/1TE_7384.webp",
    "revision": "930684923eb911abdd6d7e7988df42bd"
  },
  {
    "url": "assets/placeholder/leaf-01.png",
    "revision": "77b43604a6ec000dab6bc24ef484e0aa"
  },
  {
    "url": "assets/placeholder/leaf-01.webp",
    "revision": "fd68603ee920df2786eb8ccfd1f2d674"
  },
  {
    "url": "assets/placeholder/leaf-02.png",
    "revision": "a500494145121e5c05b34f4c9e8f752e"
  },
  {
    "url": "assets/placeholder/leaf-02.webp",
    "revision": "8c3e815880bc3b7cb897f3754939258c"
  },
  {
    "url": "assets/placeholder/leaf-03.png",
    "revision": "e48d4cbd1d33781aa9c2d398dc420bce"
  },
  {
    "url": "assets/placeholder/leaf-03.webp",
    "revision": "7d8a50de0b84b56cf1c312541367bf13"
  },
  {
    "url": "assets/placeholder/leaf-04.png",
    "revision": "403cea993550079226bae87ff9f2a04d"
  },
  {
    "url": "assets/placeholder/leaf-04.webp",
    "revision": "e339ca9de8f51fd887fdc225c42ea324"
  },
  {
    "url": "assets/placeholder/leaf-05.png",
    "revision": "013e5ff49ef5a6356d49d5dc42a03c7d"
  },
  {
    "url": "assets/placeholder/leaf-05.webp",
    "revision": "d9fc3ad3cc7bd611298bbc0397038ecb"
  },
  {
    "url": "assets/placeholder/leaf-06.png",
    "revision": "3c6c0d0d1951b2be20b6820d8e106fff"
  },
  {
    "url": "assets/placeholder/leaf-06.webp",
    "revision": "3e64f666f660f0b0b51ec104f29796bd"
  },
  {
    "url": "assets/placeholder/shutterstock_1016757307.jpg",
    "revision": "fec59b1d7334f72a4703b26775e0fa46"
  },
  {
    "url": "assets/placeholder/shutterstock_1016757307.webp",
    "revision": "f2844c8965d7edb026eaee748aeda2b3"
  },
  {
    "url": "assets/placeholder/shutterstock_1022176048.jpg",
    "revision": "4e49e6494b926de4c0e0507d4fb790d4"
  },
  {
    "url": "assets/placeholder/shutterstock_1022176048.webp",
    "revision": "bbd7da61a8739425dd97531c3aba8d57"
  },
  {
    "url": "assets/placeholder/shutterstock_1022176051.jpg",
    "revision": "652d9196a682e280092c2b6aaef020cc"
  },
  {
    "url": "assets/placeholder/shutterstock_1022176051.webp",
    "revision": "528392ac0a688f8acd1f7e15ea214f65"
  },
  {
    "url": "assets/placeholder/shutterstock_1042026859.jpg",
    "revision": "e3aab97e84f3f67479fb543154d3fbfa"
  },
  {
    "url": "assets/placeholder/shutterstock_1042026859.webp",
    "revision": "50877f0d68ae4ca8e2361c2a16134047"
  },
  {
    "url": "assets/placeholder/shutterstock_1046269429.jpg",
    "revision": "12939017a4049793441cd09fa0e05427"
  },
  {
    "url": "assets/placeholder/shutterstock_1046269429.webp",
    "revision": "ee9e7da0c1856660017144effc640097"
  },
  {
    "url": "assets/placeholder/shutterstock_1052759390.jpg",
    "revision": "6466acf6adc685e557069229f58833a3"
  },
  {
    "url": "assets/placeholder/shutterstock_1052759390.webp",
    "revision": "edc1cf0d1d793641303ae5760eb12d05"
  },
  {
    "url": "assets/placeholder/shutterstock_1062047588.jpg",
    "revision": "f01d4c301ee6238e3705e2d6104b327d"
  },
  {
    "url": "assets/placeholder/shutterstock_1062047588.webp",
    "revision": "8f40663eaad67cbbb066406dd189eb16"
  },
  {
    "url": "assets/placeholder/shutterstock_1078337348.jpg",
    "revision": "cb6784605d06b55a1aaa4743a1ae783b"
  },
  {
    "url": "assets/placeholder/shutterstock_1078337348.webp",
    "revision": "249c619697eabda89c4e938d4a25132f"
  },
  {
    "url": "assets/placeholder/shutterstock_1096977386.jpg",
    "revision": "1f618f7d24f3e454903915b52752f33c"
  },
  {
    "url": "assets/placeholder/shutterstock_1096977386.webp",
    "revision": "dcb51e9c955068b2159e4e20821211f9"
  },
  {
    "url": "assets/placeholder/shutterstock_1096977395.jpg",
    "revision": "429e2f1461f997b308f0233f137821dc"
  },
  {
    "url": "assets/placeholder/shutterstock_1096977395.webp",
    "revision": "da6a697829c93a3e23c7e5bee83c440b"
  },
  {
    "url": "assets/placeholder/shutterstock_1115157008.jpg",
    "revision": "8d1bb2397b546cf3a151e4b25638f054"
  },
  {
    "url": "assets/placeholder/shutterstock_1115157008.webp",
    "revision": "bd7f164e90cdb4db087b7154139baf15"
  },
  {
    "url": "assets/placeholder/shutterstock_114604918.jpg",
    "revision": "6403a1c75f49af7b982a155c968fc97d"
  },
  {
    "url": "assets/placeholder/shutterstock_114604918.webp",
    "revision": "7c0ca623d39f72b2bfd34eeb0fc3896b"
  },
  {
    "url": "assets/placeholder/shutterstock_1154140162.jpg",
    "revision": "537e959e80bd2639f46734b784c90a6b"
  },
  {
    "url": "assets/placeholder/shutterstock_1154140162.webp",
    "revision": "72a0cdb3ebcea2da155eb7c45d7ab3b5"
  },
  {
    "url": "assets/placeholder/shutterstock_1181660575.jpg",
    "revision": "4502f70a16fac695af1ce44adb7d00cf"
  },
  {
    "url": "assets/placeholder/shutterstock_1181660575.webp",
    "revision": "ebbe29c732b9e84e9358d82072b54c89"
  },
  {
    "url": "assets/placeholder/shutterstock_1181660578.jpg",
    "revision": "68d2b65a37eb9ed697e856d876dfbaf2"
  },
  {
    "url": "assets/placeholder/shutterstock_1181660578.webp",
    "revision": "e5bfdb0aab3a83f37847e9d18254c7ec"
  },
  {
    "url": "assets/placeholder/shutterstock_1196990665.jpg",
    "revision": "d4f8a53b0d1d6684a31922d749b71f00"
  },
  {
    "url": "assets/placeholder/shutterstock_1196990665.webp",
    "revision": "e0cae57b467ded7b2df3d54a84862197"
  },
  {
    "url": "assets/placeholder/shutterstock_1380371099.jpg",
    "revision": "4837056ecb597eb21d15ef09a8e21c1f"
  },
  {
    "url": "assets/placeholder/shutterstock_1380371099.webp",
    "revision": "93b8baa5e0956d4d7468e6dcf9b91014"
  },
  {
    "url": "assets/placeholder/shutterstock_1380371102.jpg",
    "revision": "a67b1a05bfc39a6ced61fca8f29184d6"
  },
  {
    "url": "assets/placeholder/shutterstock_1380371102.webp",
    "revision": "c40a704cb107778abfd5ceb50c0e9696"
  },
  {
    "url": "assets/placeholder/shutterstock_1389465362.jpg",
    "revision": "68b4b505c1468543ee9d4718e9d5e07c"
  },
  {
    "url": "assets/placeholder/shutterstock_1389465362.webp",
    "revision": "410f0d0533f607ccff4e6eb755fdd459"
  },
  {
    "url": "assets/placeholder/shutterstock_1427931443.jpg",
    "revision": "65d37de978a3ec99075aab691441e0f8"
  },
  {
    "url": "assets/placeholder/shutterstock_1427931443.webp",
    "revision": "0ff96c90ddd01e8b71327496201fbf21"
  },
  {
    "url": "assets/placeholder/shutterstock_1441433435.jpg",
    "revision": "8c2ca94e9343a3099f998b0189817050"
  },
  {
    "url": "assets/placeholder/shutterstock_1441433435.webp",
    "revision": "67737916795fd6503f5b5eebc2850a4c"
  },
  {
    "url": "assets/placeholder/shutterstock_191546813.jpg",
    "revision": "4fc682077f386e163162db3806df44c3"
  },
  {
    "url": "assets/placeholder/shutterstock_191546813.webp",
    "revision": "8c7ea660efe0624eadb9cdecc827b751"
  },
  {
    "url": "assets/placeholder/shutterstock_207933373.jpg",
    "revision": "ed56ba7926dd614c648b85d7bf8e964f"
  },
  {
    "url": "assets/placeholder/shutterstock_207933373.webp",
    "revision": "8e4c76c7e57861cf1abe86342616fa36"
  },
  {
    "url": "assets/placeholder/shutterstock_241334164.jpg",
    "revision": "b100898198c4bdb7c4265a54b10ab126"
  },
  {
    "url": "assets/placeholder/shutterstock_241334164.webp",
    "revision": "1b839d693ac001b01ed016902fd6b675"
  },
  {
    "url": "assets/placeholder/shutterstock_267632876.jpg",
    "revision": "50fa74f425fb8b44636ee7b1116799b1"
  },
  {
    "url": "assets/placeholder/shutterstock_267632876.webp",
    "revision": "133533bd2a05a4c0f0831c505a9d31c7"
  },
  {
    "url": "assets/placeholder/shutterstock_287788316.jpg",
    "revision": "8aa52464b6e67e40dd362483f8a7c8b4"
  },
  {
    "url": "assets/placeholder/shutterstock_287788316.webp",
    "revision": "1f114528e8e070b9d7c63029bd354832"
  },
  {
    "url": "assets/placeholder/shutterstock_316592258.jpg",
    "revision": "75df43368a3fbac854a9204eaabb7868"
  },
  {
    "url": "assets/placeholder/shutterstock_316592258.webp",
    "revision": "effcaf032844259712e7cc511caadfa6"
  },
  {
    "url": "assets/placeholder/shutterstock_318602609.jpg",
    "revision": "eb694c324034783e26badc53cde8ff16"
  },
  {
    "url": "assets/placeholder/shutterstock_318602609.webp",
    "revision": "2010fc32c52a432ff7dc9d9e7435adb7"
  },
  {
    "url": "assets/placeholder/shutterstock_318949550.jpg",
    "revision": "8b61b2baea9151c7edceb887aea5fd39"
  },
  {
    "url": "assets/placeholder/shutterstock_318949550.webp",
    "revision": "d19b5d6bd0212580ea1be17236b9d002"
  },
  {
    "url": "assets/placeholder/shutterstock_325895336.jpg",
    "revision": "2132d52e7c1f647cdbfcf6850d3aa66e"
  },
  {
    "url": "assets/placeholder/shutterstock_325895336.webp",
    "revision": "ce118a50e4ff5b90be3924a04123ff2a"
  },
  {
    "url": "assets/placeholder/shutterstock_400490197.jpg",
    "revision": "8486a6f526f4610a591edf2609c27927"
  },
  {
    "url": "assets/placeholder/shutterstock_400490197.webp",
    "revision": "efe0ae09a1554ab2be2312c6a5f7df64"
  },
  {
    "url": "assets/placeholder/shutterstock_439160518.jpg",
    "revision": "0dd47b5204475c760e5cf1064e4e619b"
  },
  {
    "url": "assets/placeholder/shutterstock_439160518.webp",
    "revision": "d771d71e6d6a330f80963ceebf51c315"
  },
  {
    "url": "assets/placeholder/shutterstock_444616567.jpg",
    "revision": "3e31836f5d87ce06ea42802413e2a5b9"
  },
  {
    "url": "assets/placeholder/shutterstock_444616567.webp",
    "revision": "ff7979c89391ef6718812d997c8075f0"
  },
  {
    "url": "assets/placeholder/shutterstock_444616594.jpg",
    "revision": "93d33ed616f1b70bc596baa712f8ece7"
  },
  {
    "url": "assets/placeholder/shutterstock_444616594.webp",
    "revision": "565e17b9912fa2cad4e6b48279e86b85"
  },
  {
    "url": "assets/placeholder/shutterstock_468190019.jpg",
    "revision": "8c0422e865f6fe4c4df47389c30fb8ea"
  },
  {
    "url": "assets/placeholder/shutterstock_468190019.webp",
    "revision": "7f059a092b676979c89ff8a557396478"
  },
  {
    "url": "assets/placeholder/shutterstock_545341216.jpg",
    "revision": "cf3100c3a9ea113d60164f505e22cbe2"
  },
  {
    "url": "assets/placeholder/shutterstock_545341216.webp",
    "revision": "1e2dc0aa835cdedcb70fb77051c45a0a"
  },
  {
    "url": "assets/placeholder/shutterstock_549726082.jpg",
    "revision": "0d576bcede859f805970d39051080081"
  },
  {
    "url": "assets/placeholder/shutterstock_549726082.webp",
    "revision": "09feb73b4558b41ee20189d6b8a77653"
  },
  {
    "url": "assets/placeholder/shutterstock_560555281.jpg",
    "revision": "154696c27acddaee34c101973b9de9a8"
  },
  {
    "url": "assets/placeholder/shutterstock_560555281.webp",
    "revision": "543e627f71954c767e993f6511280dd9"
  },
  {
    "url": "assets/placeholder/shutterstock_562641979.jpg",
    "revision": "7edaa7218477231bd399a50ffc8776c2"
  },
  {
    "url": "assets/placeholder/shutterstock_562641979.webp",
    "revision": "b6ce2443c78a6747780feab48f2f8195"
  },
  {
    "url": "assets/placeholder/shutterstock_573193858.jpg",
    "revision": "060fc4ea09a4f2b562b9443f560ac53d"
  },
  {
    "url": "assets/placeholder/shutterstock_573193858.webp",
    "revision": "0fa5fa6b0e95bf8a64ada0b5a95185fb"
  },
  {
    "url": "assets/placeholder/shutterstock_583401700.jpg",
    "revision": "9f31e707c305ee8073e50c429f2b45ff"
  },
  {
    "url": "assets/placeholder/shutterstock_583401700.webp",
    "revision": "e51dde280c548bf3ba70349d771befe6"
  },
  {
    "url": "assets/placeholder/shutterstock_64632571.jpg",
    "revision": "22e24c2846c597c58b7832cdf2fc5d93"
  },
  {
    "url": "assets/placeholder/shutterstock_64632571.webp",
    "revision": "3f3b49e4a3ac7119b16911f9354cec17"
  },
  {
    "url": "assets/placeholder/shutterstock_708845047.jpg",
    "revision": "731bc2c4f08adfa7723dd465676e13e9"
  },
  {
    "url": "assets/placeholder/shutterstock_708845047.webp",
    "revision": "03608c4510cb88677cdb9e12989f61e8"
  },
  {
    "url": "assets/placeholder/shutterstock_734823964.jpg",
    "revision": "b825157cfb20fc5b58c602e1212ebda7"
  },
  {
    "url": "assets/placeholder/shutterstock_734823964.webp",
    "revision": "475766cc5f36f9cc4e084257b886655f"
  },
  {
    "url": "assets/placeholder/shutterstock_763831048.jpg",
    "revision": "8c60e4fdd22261042cb57ea1aec19489"
  },
  {
    "url": "assets/placeholder/shutterstock_763831048.webp",
    "revision": "61be05840b6998ac77338cf5251fbdd4"
  },
  {
    "url": "assets/placeholder/shutterstock_772554262.jpg",
    "revision": "3eb86f85df1ce8d2410b3cb59c2c32cf"
  },
  {
    "url": "assets/placeholder/shutterstock_772554262.webp",
    "revision": "6f241004c1af6a544eb52927f94164e3"
  },
  {
    "url": "assets/placeholder/shutterstock_786330916.jpg",
    "revision": "2e1528af3a8b462361746f33d443bee4"
  },
  {
    "url": "assets/placeholder/shutterstock_786330916.webp",
    "revision": "d7ba98b6cfa8c67630771ee3272b6616"
  },
  {
    "url": "assets/placeholder/shutterstock_786330940.jpg",
    "revision": "4471f5e1bde792ccc6c584e24f018256"
  },
  {
    "url": "assets/placeholder/shutterstock_786330940.webp",
    "revision": "14bebdcdadb07c688e855c85a8aca049"
  },
  {
    "url": "assets/placeholder/shutterstock_97029038.jpg",
    "revision": "a525fd360280059f92972131bae4ae68"
  },
  {
    "url": "assets/placeholder/shutterstock_97029038.webp",
    "revision": "1d032283d0ce0277795a21a9798b3a82"
  },
  {
    "url": "assets/sounds/ambience.ogg",
    "revision": "8e76e4b5440d0fcc3b82e32beda6f014"
  },
  {
    "url": "body.html",
    "revision": "51c3a690754b5a04db50feea17eb9ad2"
  },
  {
    "url": "error.html",
    "revision": "2aabc67d52eed3085adf5a1613e2528d"
  },
  {
    "url": "face.html",
    "revision": "6a5bc81d6d0d8b4dc88b249fc6f0c75a"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "cc525bc2120b2bebcf8e4865d2a10198"
  },
  {
    "url": "favicon-16x16.webp",
    "revision": "c94defd99e655de5259d35d12a7105a1"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "ada645e6bc168d5955d183b7b0da4a4a"
  },
  {
    "url": "favicon-32x32.webp",
    "revision": "5a6ff1a668ba736ce117b2f22c45b8c9"
  },
  {
    "url": "gallery.html",
    "revision": "fabc8379ab3691ff27555c8f9d7e3e3b"
  },
  {
    "url": "hair.html",
    "revision": "7af1243b41c42a8dd54d0aee5f741b68"
  },
  {
    "url": "index.html",
    "revision": "023b950d61aafd9018f2f1c5a275643a"
  },
  {
    "url": "legal.html",
    "revision": "6b1f4cb5e72476f138c499610138feaf"
  },
  {
    "url": "mstile-144x144.png",
    "revision": "304c10116766887361691b0426e15c41"
  },
  {
    "url": "mstile-144x144.webp",
    "revision": "677430526b7fb94b5e6c95d3e07b8f67"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "137b8710c71a505f4f1970636a8593bb"
  },
  {
    "url": "mstile-150x150.webp",
    "revision": "a81399bb5cb84e42a7d1ded1e6cc8bd4"
  },
  {
    "url": "mstile-310x150.png",
    "revision": "acef538766c4c742d0b4ff034672281a"
  },
  {
    "url": "mstile-310x150.webp",
    "revision": "f97f890e3baecc2ac8fdc2c6de1cc62d"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "92224482b151e53148079face8b24e99"
  },
  {
    "url": "mstile-310x310.webp",
    "revision": "0d2d65a598d4860ae4eb82167b8c1c25"
  },
  {
    "url": "mstile-70x70.png",
    "revision": "964b8a0bd706e9719ace95d5b3d5e77f"
  },
  {
    "url": "mstile-70x70.webp",
    "revision": "6297b9b9247c24a7d9c0f35354feec72"
  },
  {
    "url": "resources.html",
    "revision": "2107c6bb7fb2cbd580e2d645234f62e7"
  },
  {
    "url": "safari-pinned-tab.png",
    "revision": "8e26119d690e928495e281b82f104f9f"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "4f8681301966961a4c1c95151f60e5fb"
  },
  {
    "url": "scripts/a.1b4bf0de76.vendors.js",
    "revision": "5c15807ca07375d3078164df5aca6faa"
  },
  {
    "url": "scripts/b.ee09d45ec5.app.js",
    "revision": "2d272e3657af0acc241c5683b230ae22"
  },
  {
    "url": "shop.html",
    "revision": "9ce58798b3462c56e5b63bde569c8d23"
  },
  {
    "url": "skin.html",
    "revision": "d3968fec2361cd119bf512c5d3f5732c"
  },
  {
    "url": "webfonts/fa-brands-400.eot",
    "revision": "72721167aea128f7ddac301c15dab835"
  },
  {
    "url": "webfonts/fa-brands-400.png",
    "revision": "9529390786a6bfeb4ea5197a39d2e410"
  },
  {
    "url": "webfonts/fa-brands-400.svg",
    "revision": "f77645622015337d638b8a3d6266fe43"
  },
  {
    "url": "webfonts/fa-brands-400.ttf",
    "revision": "29e1f75381d3efde65c48168ebe5c403"
  },
  {
    "url": "webfonts/fa-brands-400.woff",
    "revision": "fb481cb3c3d44b2d16d38e93ef118f9a"
  },
  {
    "url": "webfonts/fa-brands-400.woff2",
    "revision": "68c177c286c34e1b7b975807dd5d9ed0"
  },
  {
    "url": "webfonts/fa-light-300.eot",
    "revision": "a06baf702fb4e2a21830fa7dfa71c0dc"
  },
  {
    "url": "webfonts/fa-light-300.svg",
    "revision": "9969a9da0ab8636ad1a428b3838757d4"
  },
  {
    "url": "webfonts/fa-light-300.ttf",
    "revision": "7f384302d16d8bf29d1549de26d0153d"
  },
  {
    "url": "webfonts/fa-light-300.woff",
    "revision": "1008b6dd09c8b71b65e7c449bf881d90"
  },
  {
    "url": "webfonts/fa-light-300.woff2",
    "revision": "20bbccf14518922fa95a440f4c217d9e"
  },
  {
    "url": "webfonts/fa-regular-400.eot",
    "revision": "df3024c0f2d296c59947567afffb0a3b"
  },
  {
    "url": "webfonts/fa-regular-400.svg",
    "revision": "416d58293e221c2b4b8f34c1531d5dfd"
  },
  {
    "url": "webfonts/fa-regular-400.ttf",
    "revision": "bd86e53df8c36e22fbba9d4e60e3c632"
  },
  {
    "url": "webfonts/fa-regular-400.woff",
    "revision": "239abe3e583864d4ab3d27c34ac37cc6"
  },
  {
    "url": "webfonts/fa-regular-400.woff2",
    "revision": "8cfe82e8c97df9ab3f52ac86af21230d"
  },
  {
    "url": "webfonts/fa-solid-900.eot",
    "revision": "11823289c2cdeaf2415c76be9c5e4a09"
  },
  {
    "url": "webfonts/fa-solid-900.svg",
    "revision": "506bcfeaad71580149d11c8fb36af219"
  },
  {
    "url": "webfonts/fa-solid-900.ttf",
    "revision": "ff4aabff5dc839470245d1e5043bdd51"
  },
  {
    "url": "webfonts/fa-solid-900.woff",
    "revision": "6a9e75ccf66ab99b14f2873840cfc01d"
  },
  {
    "url": "webfonts/fa-solid-900.woff2",
    "revision": "e57324a466c24a207fd9ad0f5f5e3c9c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ "cacheName":"font-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
