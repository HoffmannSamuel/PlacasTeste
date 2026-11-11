const V="plates-v7";
const FILES=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png","./lib/tesseract.min.js","./lib/worker.min.js","./lib/core/tesseract-core-simd-lstm.wasm.js","./lib/core/tesseract-core-lstm.wasm.js","./lib/lang/eng.traineddata.gz"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)))});
