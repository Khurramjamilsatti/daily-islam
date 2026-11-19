'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7013907bc019e85b05b7e64f70fd8d4c",
"version.json": "a709d9e6d1ee9a08a72bd9690e4dc3ce",
"index.html": "874604211896b63a99152b0d439ce666",
"/": "874604211896b63a99152b0d439ce666",
"main.dart.js": "fc0708bba981bba1c593861238680ca3",
"ads.txt": "2b6807f34bdff7486dbc9a3f882420cc",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "ae5671f3ce1d6aaf84744e8c4c2ae5ea",
"icons/Icon-192.png": "75709580bf2d20bd01993873602a9b9e",
"icons/Icon-maskable-192.png": "75709580bf2d20bd01993873602a9b9e",
"icons/Icon-maskable-512.png": "47445c790e4f758c6b03ca9afaeb4ded",
"icons/Icon-512.png": "47445c790e4f758c6b03ca9afaeb4ded",
"manifest.json": "7169630290aab87c61d0640fd7ab32c9",
".git/config": "d12651d63a785d79388ba36243930a92",
".git/objects/0d/7e644ec22788ede74699893401d47eb3ba178e": "26b570a9072629040c743ff02d611f2d",
".git/objects/0d/724f6971765445f69208f152bc974df3d4c381": "14782564f6884d1beca121558b044460",
".git/objects/59/db123d367be7c46cb89a3ea5fe53649e2b1897": "6e58ab6c7612e5036d740027161f7c0d",
".git/objects/0c/f6b8c8fcf8a9f011122eab06fe6fe48ca8345e": "6f0beddb7feea1853fa6db638d8ad795",
".git/objects/3b/fcfd264844a1387dbe4ebb52d73db544990cc5": "3f1b7cdd6b0f63bc2abc9b2c8d1def06",
".git/objects/9b/836c7cb4eb03eca646aacd5603c9205c85cc6b": "d3270341a728947ee4bdb4f4d270b830",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/6a/0e7b7b9d79d69b0d2706ff18a8c3e54b461807": "717d2e1a7cb632c8a006f77af6d9f8a9",
".git/objects/35/7f3f5d66c2467e293cee33ff290a006412b8a8": "b9196e2ff3d3fe2f50e897a00e47237a",
".git/objects/51/b1d5c358e6f601329b46747e0903f3ca11b617": "e859a26033389cce977f0ccdd15fa139",
".git/objects/3d/ae5a2076406a93e810ce68f507cafacc7b3796": "a540e6613a9a1412197c435417984031",
".git/objects/3d/ec3dc245da8a60f6c8a0eb38711d3d0666ada4": "a812531838e3703c4622e212e1e2902a",
".git/objects/58/e129f55053a6f27d857c9e3fc446b67641d641": "1de2b23e7e1b30cbff2800d803dcf94a",
".git/objects/67/73a65b87b37004d45cd723f36d1012f7792fc0": "cb2ab7ccba9e68db8f572d9a3ade5e76",
".git/objects/94/92872ddecee15606c89825d35af01f4a9042ad": "1899075b50d7dfc2d0ea792967015be4",
".git/objects/34/c4449d68f936d96e10859cb4a66b10c4bd30e1": "87d26e1edfd20d8080d8ef93a04920e6",
".git/objects/02/30b2202548b4bedf78592bf59993da28b173ec": "7bd5e52c9e108e4f1e579fd4f984c742",
".git/objects/02/320cbbb9af818cdf8f38af59c2aa03b7fe45d4": "9af73fc77ffe6b50c7c063f2030c4934",
".git/objects/a4/514d30a50a996cab16fcf9714dba447c3288de": "b3f980194bd3f85a8d876d105f6262b6",
".git/objects/b2/02ed995a7d3639d60975b3d0e3d509efee3928": "448d683a38b2470fea9b9ea2b265464b",
".git/objects/b2/127289a61f5bd1decaebaee7d41682a5012c58": "ad5855ad70ae89a816aa9b21e47f48d4",
".git/objects/d9/19ac5c3cfbcce1767e816071e6effc7f6d3484": "69aba77b458c55c1e4849925a42b075b",
".git/objects/bb/c92debecdd0369717376270ba9aee796a33878": "4b3c4f3019ab6122349024f5b7dc2ff9",
".git/objects/d7/ef9ee1ccd38b25491426227084595568ffe811": "dc7e4826a1248d086c4456d75c268720",
".git/objects/be/3c24867f98e6e5b753fc8a590ec2a8b922b31d": "b867462076e7432940672941c73db79d",
".git/objects/b4/ee3d29f123ffa11b131f2c8773cb74975d1458": "1dbfc2ea422c64fa60d232e93b877797",
".git/objects/ab/de3af7e9afdfb891a6e5c9e05487ba94c27e53": "755b1e1c528d3c333e64dcb2f033db0f",
".git/objects/e2/a429ba2d5640d3ac716f09cfe8030c41ca6803": "8b11dc748fbdf46d555cbf452dcd87b1",
".git/objects/f3/6b84540b96dc29b979061a16877e0e7c88dbba": "7bd1e20131a9c6eba8eb73d7a048b222",
".git/objects/c7/e9cdf6ce83a6aba9a78f6ef03dfe58656c2bb5": "4b1371183b6474a9144ef0488414be0e",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/fc/86836fac191907e86b1a609d28e84aaf366997": "49929684399def2086975650b3616b17",
".git/objects/fd/55f175a8e113e1644617383bdda7e87860cdbb": "4774521b4d5608d652dd9154883d46c4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/fb500df98178bb01633f3d51ad4133c94a72ac": "f2c7158001c355eccd68c6a21aa6c69f",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/63be14723a69df7638a1f4d4597cf1a532a7f1": "3d3a20bfb991d12544e527d1cd17158c",
".git/objects/e3/12dd1cc3495b1bce0673a2f83fdaaf3004f027": "c6c2fd37be5d7a70d842855cbf28d87b",
".git/objects/e3/7253919937f5f341bbf22c4f1878973c1767b3": "c49261fed497e0db6c5ce7563b3146b0",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ed/d15ee6ee10b278396dca3a8b3c0ebae8a53331": "0c66ad841a8ca26d2486c242f65ee171",
".git/objects/c1/da6041bcb135de17cfe8698b1f9196b4f801c6": "f8daa35a4661ce831e26301066edbb33",
".git/objects/c6/0a3b39187603f870cc2216ac9db8676a2581df": "2ef626c9f66ffc95f11cfd680b654cd9",
".git/objects/4e/e71be42bf402df1354dedebf5bcee726185473": "4bd7184de9f474477b5b00b609fcaa62",
".git/objects/18/c9a6537546ef548ae8d503b3bf435a7bb08617": "b39b21f6464fd46051ff4e7cd13a221c",
".git/objects/18/29ea3d3e412c57feb0614791d375a8992bfaf7": "47b6c96ce8b812d2c28f22ca726e1130",
".git/objects/27/45602497ce9b996d762c4c016eefb7ae4e1f76": "522a272a4248ea027293071eb541dd34",
".git/objects/29/62c542da187b1f1ff48dde40eeb5a1156a21d0": "84b057032e09665821c768aad3ed2aa8",
".git/objects/29/b1cc31076e0b375da54dde1e60bd1569d9c948": "a001e418ce15d9a5a16124a5e046e72b",
".git/objects/89/9132f5e2f6472171c42000349dad1c35591759": "48e9504189d8de2255322fbf52e479ae",
".git/objects/89/6bb7953039c81192d4b62a6968cae1a52bfc52": "964105ee14694aabfa6ea1ed86c0df1a",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/80/e1be589d5d687b0764904bf5a37627587d9bd6": "5b8edcf12084ca60ef5047054fa7d63c",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1a/201dc144d4e55670f5fe74feba9f5044ad5293": "9a8d865aef982054bf19159c92098a5f",
".git/objects/28/b1d727c4b9cbf70b2cf2f47d5376c4727f7d4b": "fe6ed4e8aba6f9914d4fba6fac3965bd",
".git/objects/17/f85ff5c4a8eb38af5986238c8f1133062a42ba": "4edb95f9e1d850a22654b748144af0c2",
".git/objects/7b/a7f1fbedd8413e76303628485c4d9c0a05c1b1": "5cda36ebc7c1c037d336fdc327a8acd4",
".git/objects/19/5d5306984d60553739bfdab942c0d0c779efff": "2a44eb18695aa709cef32226b4f45ddb",
".git/objects/4d/8d9c5eab1c158042b5203602237cae6b09391c": "c0db5f68a66b6d485d64caf0ec233ea6",
".git/objects/72/c415b66e5243d7c575f9e33854a359c2c6858b": "d9d25cdd425a893fc4d907f0923b01de",
".git/objects/43/40b2ecc2fcbed3252766b4f994a8378bf78ca0": "5af697fd2e2295d6a8ccf9b6143346c7",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/31/7efac55fae67a471caee104597e29b71ddc1d8": "46a0cfae4ea43df54f92298c7ff7eda0",
".git/objects/62/e632ba1c6cdb3fe42a578a989dd74504753d64": "606e0cc4923c9b70479444e853f5b27d",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/30/b3cfbed743349ebb7501039d95baf478b0ef9d": "54af9c9a81d3454493981666c4bb7376",
".git/objects/5b/747954ce3659b9853de79061f96d62a7d2f07d": "317b01cd8adcfc83b8717dbb7e7b3f0e",
".git/objects/08/9e1b1583ab93924cadd495402a547bc297d7aa": "384eb9ccfbfeee5579c152024ac932ac",
".git/objects/6d/fa10c25cb19fbff35af11737facc751f995bbb": "82d287936e71de5608f5c7880b4af845",
".git/objects/01/a91cf1f1ebec16e9e847d08f949ab031ee4180": "8e696070317f9f284098b31b5d690e92",
".git/objects/39/fdae4f8d4d6b1831151cd1f41ea2aa649ff693": "37f85cd31d5be9ca513926ed391b05c5",
".git/objects/0f/394e781665569fd186a718f62257ab89183f3e": "edfce031c67acf289cb189e31c7e4331",
".git/objects/0f/4db7ee7c3b1f68b62f7b4edee9f2ba40283248": "950b61de64487375e4fd3c236c3c4b45",
".git/objects/0a/ae2b818d81245e3067dafe75f51916552fa90b": "63b155cc10871c61af3aa2c0bd3ff203",
".git/objects/64/e884b91d5bac1d39c71d0d13112b1219b2a403": "1479211ed36d13ac997564f88eaa6d50",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/979bd9441cd0e5357c6b53d96b1af0c85c7eaa": "58bd1356ef981f190a3b7bddf9c31a6d",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/d5/5220958aa51eeeb85048d746eabe43d2cd9f14": "64db0c29679a76bde1a10f9a37dd569a",
".git/objects/aa/e535ff5b495fe8aa64148954a5a670cbc43130": "cdae6888f21dade33ba94ed1faa78e64",
".git/objects/a8/9250ea43454fbe9b5e682f9139d6d04a7cfaea": "67a9470983ec221ca6207b89646fc480",
".git/objects/a8/d2867262dc7bb28492ad746de5d56235735c8b": "390a402558fb80de52c2de781d0a7240",
".git/objects/b0/252693aedcc2c4fe324974db22a568e9c43f6c": "9467d5146c1f749c2268db196cc94380",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c4/1231dafeb1a39a03ffcd151650473edd31e93c": "354d63c940644eb77ccd4d8bb94f4689",
".git/objects/ea/da3721e607570347137313173bb3c550d74581": "793116acc19df624e72ddc8f5d9209a9",
".git/objects/c2/23db0f5b9b3371307e92db186618bddaf31ea2": "df6273031da5736c811c438fa60b3c21",
".git/objects/f6/727285206183bb6aa6ad7cd280f77080c09cd7": "52a5e1b3fb68a4522a6c21bfb8c1205a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/b5daa42eb7bc66d7c35d92c1f3f77dab44f2f8": "a78abb3b3b80530abbe12be24ea3afa9",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/2c/24355387776cd81289ac127956d5bc1b016cf4": "0b8e4e1a57da0462ea3a74559619d65c",
".git/objects/77/0f1a884676db975e71600848366b4c27adbbea": "6c4a26ca5b6633b00b1c613b3d3d90b9",
".git/objects/77/69b277f501fe5cc1052f318056f4788c6a452c": "27606ce6538258fd35e0029afa9d5d61",
".git/objects/48/0e54008b5172b3ba30f364145a96ccfd43df43": "6f8d904bcc48dc2c0aa480a974836fbe",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/23/87d35bf5a37c503fa70e956030569b3f698630": "5b8f0fabf5e318f81641a4ea4bf36039",
".git/objects/4f/b62f3a7a89e1c8ef325a9aebf0c25c8af89eb6": "42a1d71a381bc9c56b4ae2c6580b9d02",
".git/objects/8d/130920d1e84601de3204e7f028106096c1cd6f": "e203f1a53b7d7827b96b82beb2f265c4",
".git/objects/12/1ad0b2564d0c526cd82d0cea2a99ecdf30c334": "ea3a4ecafa81f8e22c904b0a43ea1f8c",
".git/objects/40/14cb7ad6d4658eaeaf2ced20dee44321ba5b2e": "a4d7f9a92a58acbde0f6383cd5f2700c",
".git/objects/47/b536bd9e33e14cc3d5f5e4c3b362ad8941a64d": "8b012dda340841b47f11b10759ce38a4",
".git/objects/78/c554895148a8f0d7bdbafe33eece5a303818ba": "272380027f67c444656ea299da4dbb71",
".git/objects/25/ee993481f4096f0e1067c9ce95176d07c4c661": "606176a6a7b233de7427bd06045f0e60",
".git/objects/25/9b107d2bb9f6c38cc909eca68e1fbffb2565b9": "4d51ccfcd62ce977b32dc083874eff65",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "69663ae80923395fdeef1db96f575ece",
".git/logs/refs/heads/main": "69663ae80923395fdeef1db96f575ece",
".git/logs/refs/remotes/origin/main": "f19c9589ef2004b4e40dee57955fabc7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
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
".git/refs/heads/main": "cc38c5db2a0644662de6a029b2ea93f3",
".git/refs/remotes/origin/main": "cc38c5db2a0644662de6a029b2ea93f3",
".git/index": "86f179408535e8a745d532d94ef255d0",
".git/COMMIT_EDITMSG": "6e2aee8eaaf41d473adf69b85bf462cd",
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
"sw.js": "e76442048cfa58eaf86a2b0336406d28",
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
