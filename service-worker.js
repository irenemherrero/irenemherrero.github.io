"use strict";var precacheConfig=[["/portfolio/index.html","47dc347d5d4b751595296dd84bab64f3"],["/portfolio/static/css/main.87da584b.css","cee0aed3c65b8ad39794cc4284f12432"],["/portfolio/static/js/main.3ad7f98e.js","039a0b2ed0a9fac94c4a6c14f0bbb71a"],["/portfolio/static/media/fa-brands-400.48461ea4.woff2","48461ea4e797c9774dabb4a0440d2f56"],["/portfolio/static/media/fa-brands-400.7b464e27.woff","7b464e274bc331f9a765d765359635a5"],["/portfolio/static/media/fa-brands-400.947b9537.ttf","947b9537bc0fecc8130d48eb753495a1"],["/portfolio/static/media/fa-brands-400.9b6c8da3.eot","9b6c8da3c489424e2b3e9c9fb6314b37"],["/portfolio/static/media/fa-brands-400.b5472631.svg","b5472631dbace30d549357ec325b9c62"],["/portfolio/static/media/fa-regular-400.381af09a.woff","381af09a1366b6c2ae65eac5dd6f0588"],["/portfolio/static/media/fa-regular-400.73fe7f1e.ttf","73fe7f1effbf382f499831a0a9f18626"],["/portfolio/static/media/fa-regular-400.7422060c.eot","7422060ca379ee9939d3b687d072acad"],["/portfolio/static/media/fa-regular-400.949a2b06.woff2","949a2b066ec37f5a384712fc7beaf2f1"],["/portfolio/static/media/fa-regular-400.b5a61b22.svg","b5a61b229c9c92a6ac21f5b0e3c6e9f1"],["/portfolio/static/media/fa-solid-900.0079a0ab.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/portfolio/static/media/fa-solid-900.14a08198.woff2","14a08198ec7d1eb96d515362293fed36"],["/portfolio/static/media/fa-solid-900.38508b2e.svg","38508b2e7fac045869a86a15936433f7"],["/portfolio/static/media/fa-solid-900.70e65a7d.eot","70e65a7d34902f2c350816ecfe2f6492"],["/portfolio/static/media/fa-solid-900.815694de.woff","815694de1120d6c1e9d1f0895ee81056"],["/portfolio/static/media/foto_perfil_prop.5f823501.jpg","5f8235016b3c05a8053b236ceae9642e"],["/portfolio/static/media/ico-menu.f1df7686.svg","f1df76866abf10e22ea018e407ef54e0"],["/portfolio/static/media/web0.2370de5e.png","2370de5eb9a5545530acad14315eacb5"],["/portfolio/static/media/web1.0609bd1f.png","0609bd1fa39f36b7306621d04a97d4b4"],["/portfolio/static/media/web2.781b3186.png","781b31866a6ed7d701725c9af5b992ae"],["/portfolio/static/media/web3.184f6004.png","184f6004021c7ceff5fadc682ff7f285"],["/portfolio/static/media/web4.dbe95908.png","dbe95908730413e6f8b5aa735ae860bb"],["/portfolio/static/media/web5.fb36bfa4.png","fb36bfa4d40fc5186a58a0e4a9d9c9c6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var n="/portfolio/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});