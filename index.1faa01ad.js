!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var i={},r={},a=t.parcelRequiref577;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequiref577=a),a.register("4qdOB",(function(e,t){document.querySelector(".header-login__button").addEventListener("click",(function(e){e.preventDefault()}))})),a.register("6qd2L",(function(e,t){var n,i,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(e){i=s}}();var c,u=[],l=!1,d=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&f())}function f(){if(!l){var e=o(h);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||o(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}})),a.register("kvC6y",(function(t,n){e(t.exports,"loaderShow",(function(){return r})),e(t.exports,"loaderHide",(function(){return a}));const i=document.querySelector(".loader");function r(){i.classList.remove("visually-hidden")}function a(){i.classList.add("visually-hidden")}})),a.register("5YNLl",(function(e,t){const n=document.querySelectorAll(".popup-link"),i=document.querySelector("body"),r=document.querySelectorAll(".lock-padding");let a=!0;const s=800;if(n.length>0)for(let e=0;e<n.length;e++){const t=n[e];t.addEventListener("click",(function(e){const n=t.getAttribute("href").replace("#","");c(document.getElementById(n)),e.preventDefault()}))}const o=document.querySelectorAll(".close-popup");if(o.length>0)for(let e=0;e<o.length;e++){const t=o[e];t.addEventListener("click",(function(e){u(t.closest(".popup")),e.preventDefault()}))}function c(e){if(e&&a){const t=document.querySelector(".popup.open");t?u(t,!1):function(){const e=window.innerWidth-document.querySelector("body").offsetWidth+"px";if(r.length>0)for(let t=0;t<r.length;t++){r[t].style.paddingRight=e}i.style.paddingRight=e,i.classList.add("lock"),a=!1,setTimeout((function(){a=!0}),s)}(),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||u(e.target.closest(".popup"))}))}}function u(e,t=!0){a&&(e.classList.remove("open"),t&&(setTimeout((function(){if(r.length>0)for(let e=0;e<r.length;e++)r[e].style.paddingRight="0px";i.style.paddingRight="0px",i.classList.remove("lock")}),s),a=!1,setTimeout((function(){a=!0}),s)))}document.addEventListener("keydown",(function(e){if("Escape"===e.key){const e=document.querySelector(".popup.open");e&&u(e)}}))})),a.register("w5NGS",(function(e,t){a("4DmCo");var n=a("kP9ko");a("8JaAg"),a("6Urw1"),a("bK1n4");var i=a("8fRTn");a("3SEMc");var r=a("88zYJ");a("3SEMc");const s=new(0,(r=a("88zYJ")).Q),o=n.default.initializeApp({apiKey:"AIzaSyD7CsEm56jWNDQOKLhPLg-pdR78AzWnp1c",authDomain:"team-project-movie.firebaseapp.com",databaseURL:"https://team-project-movie-default-rtdb.europe-west1.firebasedatabase.app",projectId:"team-project-movie",storageBucket:"team-project-movie.appspot.com",messagingSenderId:"621199458479",appId:"1:621199458479:web:54f2e6677796ea7d8c145a",measurementId:"G-WHTCB43FF1"});(0,i.getAnalytics)(o);n.default.auth.GoogleAuthProvider.PROVIDER_ID;(0,r.n)();initApp=function(){n.default.auth().onAuthStateChanged((function(e){if(e){document.getElementById("sign-in").addEventListener("click",(e=>{n.default.auth().signOut()})),console.log("User is signed in"),console.log(e);var t=e.displayName;e.email,e.emailVerified,e.photoURL,e.uid,e.phoneNumber,e.providerData;console.log(t),e.getIdToken().then((function(e){document.getElementById("sign-in").textContent="Sign out"}))}else{console.log("User is signed out."),document.getElementById("sign-in").textContent="Sign in";document.getElementById("sign-in").addEventListener("click",(e=>{n.default.auth().signInWithPopup(s).then((e=>{e.credential.accessToken,e.user})).catch((e=>{e.code,e.message,e.email,e.credential}))}))}}),(function(e){console.log(e)}))},window.addEventListener("load",(function(){initApp()}))})),a.register("4DmCo",(function(t,n){e(t.exports,"default",(function(){return a("kP9ko").default}));a("kP9ko");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
a("kP9ko").default.registerVersion("firebase","9.13.0","app-compat")})),a.register("kP9ko",(function(t,n){e(t.exports,"default",(function(){return f}));var i=a("2xDiJ"),r=a("6ExWU"),s=a("MjY8E"),o=(s=a("MjY8E"),a("kZfxc"));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new(0,r.Component)("app-compat",(()=>this),"PUBLIC")),this.container=e.container}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new(0,i.ErrorFactory)("app-compat","Firebase",u);const d=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},n={__esModule:!0,initializeApp:function(r,a={}){const o=s.initializeApp(r,a);if((0,i.contains)(t,o.name))return t[o.name];const c=new e(o,n);return t[o.name]=c,c},app:r,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:function(t){const a=t.name,o=a.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=r())=>{if("function"!=typeof e[o])throw l.create("invalid-app-argument",{appName:a});return e[o]()};void 0!==t.serviceProps&&(0,i.deepExtend)(s,t.serviceProps),n[o]=s,e.prototype[o]=function(...e){return this._getService.bind(this,a).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[o]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:s}};function r(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,i.contains)(t,e))throw l.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),r.App=e,n}(c);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,i.deepExtend)(t,e)},createSubscribe:i.createSubscribe,ErrorFactory:i.ErrorFactory,deepExtend:i.deepExtend}),t}(),h=new(0,o.Logger)("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if((0,i.isBrowser)()&&void 0!==self.firebase){h.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&h.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const f=d;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var p;(0,s.registerVersion)("@firebase/app-compat","0.1.38",p)})),a.register("2xDiJ",(function(n,i){e(n.exports,"base64urlEncodeWithoutPadding",(function(){return c})),e(n.exports,"base64Decode",(function(){return u})),e(n.exports,"deepExtend",(function(){return l})),e(n.exports,"getUA",(function(){return d})),e(n.exports,"isMobileCordova",(function(){return h})),e(n.exports,"isNode",(function(){return f})),e(n.exports,"isBrowser",(function(){return p})),e(n.exports,"isBrowserExtension",(function(){return g})),e(n.exports,"isReactNative",(function(){return m})),e(n.exports,"isIE",(function(){return v})),e(n.exports,"isSafari",(function(){return b})),e(n.exports,"isIndexedDBAvailable",(function(){return y})),e(n.exports,"validateIndexedDBOpenable",(function(){return w})),e(n.exports,"areCookiesEnabled",(function(){return I})),e(n.exports,"getDefaultEmulatorHost",(function(){return k})),e(n.exports,"getDefaultEmulatorHostnameAndPort",(function(){return S})),e(n.exports,"getDefaultAppConfig",(function(){return C})),e(n.exports,"getExperimentalSetting",(function(){return T})),e(n.exports,"Deferred",(function(){return A})),e(n.exports,"createMockUserToken",(function(){return R})),e(n.exports,"FirebaseError",(function(){return P})),e(n.exports,"ErrorFactory",(function(){return x})),e(n.exports,"contains",(function(){return D})),e(n.exports,"isEmpty",(function(){return N})),e(n.exports,"deepEqual",(function(){return L})),e(n.exports,"querystring",(function(){return U})),e(n.exports,"querystringDecode",(function(){return F})),e(n.exports,"extractQuerystring",(function(){return j})),e(n.exports,"createSubscribe",(function(){return B})),e(n.exports,"calculateBackoffMillis",(function(){return H})),e(n.exports,"getModularInstance",(function(){return W}));var r=a("6qd2L");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],a=t+1<e.length,s=a?e[t+1]:0,o=t+2<e.length,c=o?e[t+2]:0,u=r>>2,l=(3&r)<<4|s>>4;let d=(15&s)<<2|c>>6,h=63&c;o||(h=64,a||(d=64)),i.push(n[u],n[l],n[d],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const a=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&a)}else if(r>239&&r<365){const a=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(a>>10)),t[i++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],s=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&a)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==a||null==s||null==o)throw Error();const c=r<<2|a>>4;if(i.push(c),64!==s){const e=a<<4&240|s>>2;if(i.push(e),64!==o){const e=s<<6&192|o;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},c=function(e){return function(e){const t=s(e);return o.encodeByteArray(t,!0)}(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=l(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function h(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())}function f(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function p(){return"object"==typeof self&&self.self===self}function g(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function m(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function v(){const e=d();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function b(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function y(){return"object"==typeof indexedDB}function w(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function I(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,E=()=>{try{return _()||(()=>{if(void 0===r||void 0===r.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&u(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},k=e=>{var t,n;return null===(n=null===(t=E())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},S=e=>{const t=k(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},C=()=>{var e;return null===(e=E())||void 0===e?void 0:e.config},T=e=>{var t;return null===(t=E())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[c(JSON.stringify({alg:"none",type:"JWT"})),c(JSON.stringify(a)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?function(e,t){return e.replace(O,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${a} (${i}).`;return new P(i,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function N(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],a=t[r];if(M(n)&&M(a)){if(!L(n,a))return!1}else if(n!==a)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function M(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function F(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t){const n=new V(e,t);return n.subscribe.bind(n)}class V{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=z),void 0===i.error&&(i.error=z),void 0===i.complete&&(i.complete=z);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t=1e3,n=2){const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e){return e&&e._delegate?e._delegate:e}})),a.register("6ExWU",(function(t,n){e(t.exports,"Component",(function(){return r})),e(t.exports,"ComponentContainer",(function(){return c}));var i=a("2xDiJ");class r{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,i.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const a=this.instances.get(i);return a&&e(a,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===s?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class c{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}})),a.register("MjY8E",(function(t,n){e(t.exports,"_DEFAULT_ENTRY_NAME",(function(){return h})),e(t.exports,"_apps",(function(){return p})),e(t.exports,"_components",(function(){return g})),e(t.exports,"_addComponent",(function(){return m})),e(t.exports,"_addOrOverwriteComponent",(function(){return v})),e(t.exports,"_registerComponent",(function(){return b})),e(t.exports,"_getProvider",(function(){return y})),e(t.exports,"_removeServiceInstance",(function(){return w})),e(t.exports,"_clearComponents",(function(){return I})),e(t.exports,"SDK_VERSION",(function(){return S})),e(t.exports,"initializeApp",(function(){return C})),e(t.exports,"getApp",(function(){return T})),e(t.exports,"getApps",(function(){return A})),e(t.exports,"deleteApp",(function(){return R})),e(t.exports,"registerVersion",(function(){return P})),e(t.exports,"onLog",(function(){return x})),e(t.exports,"setLogLevel",(function(){return O})),e(t.exports,"FirebaseError",(function(){return a("2xDiJ").FirebaseError}));var i=a("6ExWU"),r=a("kZfxc"),s=a("2xDiJ"),o=a("ajgRO");s=a("2xDiJ");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const u="@firebase/app",l="0.8.3",d=new(0,r.Logger)("@firebase/app"),h="[DEFAULT]",f={[u]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,g=new Map;function m(e,t){try{e.container.addComponent(t)}catch(n){d.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function v(e,t){e.container.addOrOverwriteComponent(t)}function b(e){const t=e.name;if(g.has(t))return d.debug(`There were multiple attempts to register component ${t}.`),!1;g.set(t,e);for(const t of p.values())m(t,e);return!0}function y(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function w(e,t,n=h){y(e,t).clearInstance(n)}function I(){g.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},E=new(0,s.ErrorFactory)("app","Firebase",_);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,i.Component)("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S="9.13.0";function C(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:h,automaticDataCollectionEnabled:!1},t),a=r.name;if("string"!=typeof a||!a)throw E.create("bad-app-name",{appName:String(a)});if(n||(n=(0,s.getDefaultAppConfig)()),!n)throw E.create("no-options");const o=p.get(a);if(o){if((0,s.deepEqual)(n,o.options)&&(0,s.deepEqual)(r,o.config))return o;throw E.create("duplicate-app",{appName:a})}const c=new(0,i.ComponentContainer)(a);for(const e of g.values())c.addComponent(e);const u=new k(n,r,c);return p.set(a,u),u}function T(e=h){const t=p.get(e);if(!t&&e===h)return C();if(!t)throw E.create("no-app",{appName:e});return t}function A(){return Array.from(p.values())}async function R(e){const t=e.name;p.has(t)&&(p.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function P(e,t,n){var r;let a=null!==(r=f[e])&&void 0!==r?r:e;n&&(a+=`-${n}`);const s=a.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${a}" with version "${t}":`];return s&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void d.warn(e.join(" "))}b(new(0,i.Component)(`${a}-version`,(()=>({library:a,version:t})),"VERSION"))}function x(e,t){if(null!==e&&"function"!=typeof e)throw E.create("invalid-log-argument");(0,r.setUserLogHandler)(e,t)}function O(e){(0,r.setLogLevel)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D="firebase-heartbeat-store";let N=null;function L(){return N||(N=(0,o.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(D)}}).catch((e=>{throw E.create("idb-open",{originalErrorMessage:e.message})}))),N}async function M(e,t){var n;try{const n=(await L()).transaction(D,"readwrite"),i=n.objectStore(D);return await i.put(t,U(e)),n.done}catch(e){if(e instanceof s.FirebaseError)d.warn(e.message);else{const t=E.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});d.warn(t.message)}}}function U(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=j();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=j(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),V(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),V(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new B(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function j(){return(new Date).toISOString().substring(0,10)}class B{async runIndexedDBEnvironmentCheck(){return!!(0,s.isIndexedDBAvailable)()&&(0,s.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await L()).transaction(D).objectStore(D).get(U(e))}catch(e){if(e instanceof s.FirebaseError)d.warn(e.message);else{const n=E.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});d.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return M(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return M(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function V(e){return(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;z="",b(new(0,i.Component)("platform-logger",(e=>new c(e)),"PRIVATE")),b(new(0,i.Component)("heartbeat",(e=>new F(e)),"PRIVATE")),P(u,l,z),P(u,l,"esm2017"),P("fire-js","")})),a.register("kZfxc",(function(t,n){e(t.exports,"LogLevel",(function(){return r})),e(t.exports,"Logger",(function(){return l})),e(t.exports,"setLogLevel",(function(){return d})),e(t.exports,"setUserLogHandler",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r,a;(a=r||(r={}))[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT";const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,c={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=c[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class l{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,i.push(this)}}function d(e){i.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of i){let i=null;t&&t.level&&(i=s[t.level]),n.userLogHandler=null===e?null:(t,n,...a)=>{const s=a.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:s,args:a,type:t.name})}}}})),a.register("ajgRO",(function(t,n){e(t.exports,"openDB",(function(){return r}));var i=a("kKOTz");i=a("kKOTz");function r(e,t,{blocked:n,upgrade:r,blocking:a,terminated:s}={}){const o=indexedDB.open(e,t),c=(0,i.w)(o);return r&&o.addEventListener("upgradeneeded",(e=>{r((0,i.w)(o.result),e.oldVersion,e.newVersion,(0,i.w)(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),c.then((e=>{s&&e.addEventListener("close",(()=>s())),a&&e.addEventListener("versionchange",(()=>a()))})).catch((()=>{})),c}const s=["get","getKey","getAll","getAllKeys","count"],o=["put","add","delete","clear"],c=new Map;function u(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(c.get(t))return c.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=o.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!s.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,r?"readwrite":"readonly");let s=a.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),r&&a.done]))[0]};return c.set(t,a),a}(0,i.r)((e=>({...e,get:(t,n,i)=>u(t,n)||e.get(t,n,i),has:(t,n)=>!!u(t,n)||e.has(t,n)})))})),a.register("kKOTz",(function(t,n){e(t.exports,"w",(function(){return p})),e(t.exports,"r",(function(){return d}));let i,r;const a=new WeakMap,s=new WeakMap,o=new WeakMap,c=new WeakMap,u=new WeakMap;let l={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return s.get(e);if("objectStoreNames"===t)return e.objectStoreNames||o.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){l=e(l)}function h(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(g(this),t),p(a.get(this))}:function(...t){return p(e.apply(g(this),t))}:function(t,...n){const i=e.call(g(this),t,...n);return o.set(i,t.sort?t.sort():[t]),p(i)}}function f(e){return"function"==typeof e?h(e):(e instanceof IDBTransaction&&function(e){if(s.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",a),e.removeEventListener("abort",a)},r=()=>{t(),i()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",a),e.addEventListener("abort",a)}));s.set(e,t)}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,l):e);var t}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",a)},r=()=>{t(p(e.result)),i()},a=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&a.set(t,e)})).catch((()=>{})),u.set(t,e),t}(e);if(c.has(e))return c.get(e);const t=f(e);return t!==e&&(c.set(e,t),u.set(t,e)),t}const g=e=>u.get(e)})),a.register("8JaAg",(function(e,i){a("4DmCo");var r=a("kP9ko");a("6Daz0");var s=a("8Sz9J");a("eWTRB"),a("8Sghp"),a("5ejcO"),a("3ploX"),a("a9AUb"),function(){(function(){var e,n,i="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t};if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var a;e:{var s={};try{s.__proto__={xb:!0},a=s.xb;break e}catch(Ze){}a=!1}n=a?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var o=n;function c(e,t){if(e.prototype=i(t.prototype),e.prototype.constructor=e,o)o(e,t);else for(var n in t)if("prototype"!=n)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r)}else e[n]=t[n];e.K=t.prototype}var u="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){e!=Array.prototype&&e!=Object.prototype&&(e[t]=n.value)},l="undefined"!=typeof window&&window===this?this:void 0!==t&&null!=t?t:this;function d(e,t){if(t){var n=l;e=e.split(".");for(var i=0;i<e.length-1;i++){var r=e[i];r in n||(n[r]={}),n=n[r]}(t=t(i=n[e=e[e.length-1]]))!=i&&null!=t&&u(n,e,{configurable:!0,writable:!0,value:t})}}d("Object.is",(function(e){return e||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}})),d("Array.prototype.includes",(function(e){return e||function(e,t){var n=this;n instanceof String&&(n=String(n));var i=n.length;for(0>(t=t||0)&&(t=Math.max(t+i,0));t<i;t++){var r=n[t];if(r===e||Object.is(r,e))return!0}return!1}}));var h=this;function f(e){return void 0!==e}function p(e){return"string"==typeof e}var g=/^[\w+/_-]+[=]{0,2}$/,m=null;function v(){}function b(e){e.W=void 0,e.Xa=function(){return e.W?e.W:e.W=new e}}function y(e){var t=typeof e;if("object"==t){if(!e)return"null";if(e instanceof Array)return"array";if(e instanceof Object)return t;var n=Object.prototype.toString.call(e);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof e.length&&void 0!==e.splice&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||void 0!==e.call&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("call"))return"function"}else if("function"==t&&void 0===e.call)return"object";return t}function w(e){return"array"==y(e)}function I(e){var t=y(e);return"array"==t||"object"==t&&"number"==typeof e.length}function _(e){return"function"==y(e)}function E(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var k="closure_uid_"+(1e9*Math.random()>>>0),S=0;function C(e,t,n){return e.call.apply(e.bind,arguments)}function T(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function A(e,t,n){return(A=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C:T).apply(null,arguments)}function R(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function P(e,t){for(var n in t)e[n]=t[n]}var x,O=Date.now||function(){return+new Date};function D(e,t){e=e.split(".");var n,i=h;e[0]in i||void 0===i.execScript||i.execScript("var "+e[0]);for(;e.length&&(n=e.shift());)!e.length&&f(t)?i[n]=t:i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}}function N(e,t){function n(){}n.prototype=t.prototype,e.K=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.vc=function(e,n,i){for(var r=Array(arguments.length-2),a=2;a<arguments.length;a++)r[a-2]=arguments[a];return t.prototype[n].apply(e,r)}}function L(e){if(Error.captureStackTrace)Error.captureStackTrace(this,L);else{var t=Error().stack;t&&(this.stack=t)}e&&(this.message=String(e))}function M(e,t){for(var n="",i=(e=e.split("%s")).length-1,r=0;r<i;r++)n+=e[r]+(r<t.length?t[r]:"%s");L.call(this,n+e[i])}function U(e,t){throw new M("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1))}N(L,Error),L.prototype.name="CustomError",N(M,L),M.prototype.name="AssertionError";var F=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(p(e))return p(t)&&1==t.length?e.indexOf(t,0):-1;for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},j=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var i=e.length,r=p(e)?e.split(""):e,a=0;a<i;a++)a in r&&t.call(n,r[a],a,e)};var B=Array.prototype.filter?function(e,t){return Array.prototype.filter.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=[],r=0,a=p(e)?e.split(""):e,s=0;s<n;s++)if(s in a){var o=a[s];t.call(void 0,o,s,e)&&(i[r++]=o)}return i},V=Array.prototype.map?function(e,t){return Array.prototype.map.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=Array(n),r=p(e)?e.split(""):e,a=0;a<n;a++)a in r&&(i[a]=t.call(void 0,r[a],a,e));return i},z=Array.prototype.some?function(e,t){return Array.prototype.some.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=p(e)?e.split(""):e,r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e))return!0;return!1};function H(e,t){return 0<=F(e,t)}function W(e,t){var n;return(n=0<=(t=F(e,t)))&&G(e,t),n}function G(e,t){return 1==Array.prototype.splice.call(e,t,1).length}function q(e,t){!function(e,t){for(var n=p(e)?e.split(""):e,i=e.length-1;0<=i;--i)i in n&&t.call(void 0,n[i],i,e)}(e,(function(n,i){t.call(void 0,n,i,e)&&G(e,i)&&0}))}function K(e){return Array.prototype.concat.apply([],arguments)}function J(e){var t=e.length;if(0<t){for(var n=Array(t),i=0;i<t;i++)n[i]=e[i];return n}return[]}function Y(e,t,n){return 2>=arguments.length?Array.prototype.slice.call(e,t):Array.prototype.slice.call(e,t,n)}var $=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]},X=/&/g,Z=/</g,Q=/>/g,ee=/"/g,te=/'/g,ne=/\x00/g,ie=/[\x00&<>"']/;function re(e,t){return e<t?-1:e>t?1:0}function ae(e){return ie.test(e)&&(-1!=e.indexOf("&")&&(e=e.replace(X,"&amp;")),-1!=e.indexOf("<")&&(e=e.replace(Z,"&lt;")),-1!=e.indexOf(">")&&(e=e.replace(Q,"&gt;")),-1!=e.indexOf('"')&&(e=e.replace(ee,"&quot;")),-1!=e.indexOf("'")&&(e=e.replace(te,"&#39;")),-1!=e.indexOf("\0")&&(e=e.replace(ne,"&#0;"))),e}function se(e,t,n){for(var i in e)t.call(n,e[i],i,e)}function oe(e){var t,n={};for(t in e)n[t]=e[t];return n}var ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ue(e,t){for(var n,i,r=1;r<arguments.length;r++){for(n in i=arguments[r])e[n]=i[n];for(var a=0;a<ce.length;a++)n=ce[a],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}var le="StopIteration"in h?h.StopIteration:{message:"StopIteration",stack:""};function de(){}function he(e){if(e instanceof de)return e;if("function"==typeof e.ha)return e.ha(!1);if(I(e)){var t=0,n=new de;return n.next=function(){for(;;){if(t>=e.length)throw le;if(t in e)return e[t++];t++}},n}throw Error("Not implemented")}function fe(e){if(I(e))return J(e);e=he(e);var t=[];return function(e,t){if(I(e))try{j(e,t,void 0)}catch(e){if(e!==le)throw e}else{e=he(e);try{for(;;)t.call(void 0,e.next(),void 0,e)}catch(e){if(e!==le)throw e}}}(e,(function(e){t.push(e)})),t}function pe(e,t){this.g={},this.a=[],this.j=this.h=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof pe)for(n=e.ja(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function ge(e){if(e.h!=e.a.length){for(var t=0,n=0;t<e.a.length;){var i=e.a[t];me(e.g,i)&&(e.a[n++]=i),t++}e.a.length=n}if(e.h!=e.a.length){var r={};for(n=t=0;t<e.a.length;)me(r,i=e.a[t])||(e.a[n++]=i,r[i]=1),t++;e.a.length=n}}function me(e,t){return Object.prototype.hasOwnProperty.call(e,t)}de.prototype.next=function(){throw le},de.prototype.ha=function(){return this},(e=pe.prototype).la=function(){ge(this);for(var e=[],t=0;t<this.a.length;t++)e.push(this.g[this.a[t]]);return e},e.ja=function(){return ge(this),this.a.concat()},e.clear=function(){this.g={},this.j=this.h=this.a.length=0},e.get=function(e,t){return me(this.g,e)?this.g[e]:t},e.set=function(e,t){me(this.g,e)||(this.h++,this.a.push(e),this.j++),this.g[e]=t},e.forEach=function(e,t){for(var n=this.ja(),i=0;i<n.length;i++){var r=n[i],a=this.get(r);e.call(t,a,r,this)}},e.ha=function(e){ge(this);var t=0,n=this.j,i=this,r=new de;return r.next=function(){if(n!=i.j)throw Error("The map has changed since the iterator was created");if(t>=i.a.length)throw le;var r=i.a[t++];return e?r:i.g[r]},r};var ve=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function be(e,t,n,i){for(var r=n.length;0<=(t=e.indexOf(n,t))&&t<i;){var a=e.charCodeAt(t-1);if(!(38!=a&&63!=a||(a=e.charCodeAt(t+r))&&61!=a&&38!=a&&35!=a))return t;t+=r+1}return-1}var ye=/#|$/;function we(e,t){var n=e.search(ye),i=be(e,0,t,n);if(0>i)return null;var r=e.indexOf("&",i);return(0>r||r>n)&&(r=n),i+=t.length+1,decodeURIComponent(e.substr(i,r-i).replace(/\+/g," "))}var Ie=/[?&]($|#)/;function _e(e,t){var n;this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1,e instanceof _e?(this.i=f(t)?t:e.i,Ee(this,e.j),this.A=e.A,this.h=e.h,ke(this,e.C),this.g=e.g,Se(this,je(e.a)),this.s=e.s):e&&(n=String(e).match(ve))?(this.i=!!t,Ee(this,n[1]||"",!0),this.A=Te(n[2]||""),this.h=Te(n[3]||"",!0),ke(this,n[4]),this.g=Te(n[5]||"",!0),Se(this,n[6]||"",!0),this.s=Te(n[7]||"")):(this.i=!!t,this.a=new Le(null,this.i))}function Ee(e,t,n){e.j=n?Te(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ke(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.C=t}else e.C=null}function Se(e,t,n){t instanceof Le?(e.a=t,function(e,t){t&&!e.j&&(Me(e),e.h=null,e.a.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ue(this,t),Ue(this,n),0<e.length&&(this.h=null,this.a.set(Be(this,n),J(e)),this.g+=e.length))}),e)),e.j=t}(e.a,e.i)):(n||(t=Ae(t,De)),e.a=new Le(t,e.i))}function Ce(e){return e instanceof _e?new _e(e):new _e(e,void 0)}function Te(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ae(e,t,n){return p(e)?(e=encodeURI(e).replace(t,Re),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Re(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}_e.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ae(t,Pe,!0),":");var n=this.h;return(n||"file"==t)&&(e.push("//"),(t=this.A)&&e.push(Ae(t,Pe,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.C)&&e.push(":",String(n))),(n=this.g)&&(this.h&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ae(n,"/"==n.charAt(0)?Oe:xe,!0))),(n=this.a.toString())&&e.push("?",n),(n=this.s)&&e.push("#",Ae(n,Ne)),e.join("")};var Pe=/[#\/\?@]/g,xe=/[#\?:]/g,Oe=/[#\?]/g,De=/[#\?@]/g,Ne=/#/g;function Le(e,t){this.g=this.a=null,this.h=e||null,this.j=!!t}function Me(e){e.a||(e.a=new pe,e.g=0,e.h&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var a=e[n].substring(0,i);r=e[n].substring(i+1)}else a=e[n];t(a,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.h,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ue(e,t){Me(e),t=Be(e,t),me(e.a.g,t)&&(e.h=null,e.g-=e.a.get(t).length,me((e=e.a).g,t)&&(delete e.g[t],e.h--,e.j++,e.a.length>2*e.h&&ge(e)))}function Fe(e,t){return Me(e),t=Be(e,t),me(e.a.g,t)}function je(e){var t=new Le;return t.h=e.h,e.a&&(t.a=new pe(e.a),t.g=e.g),t}function Be(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ve(e){this.a=Ce(e)}function ze(e){return e.a.a.get(Ge.Pa)||null}function He(e,t){t?e.a.a.set(Ge.PROVIDER_ID,t):Ue(e.a.a,Ge.PROVIDER_ID)}(e=Le.prototype).add=function(e,t){Me(this),this.h=null,e=Be(this,e);var n=this.a.get(e);return n||this.a.set(e,n=[]),n.push(t),this.g+=1,this},e.clear=function(){this.a=this.h=null,this.g=0},e.forEach=function(e,t){Me(this),this.a.forEach((function(n,i){j(n,(function(n){e.call(t,n,i,this)}),this)}),this)},e.ja=function(){Me(this);for(var e=this.a.la(),t=this.a.ja(),n=[],i=0;i<t.length;i++)for(var r=e[i],a=0;a<r.length;a++)n.push(t[i]);return n},e.la=function(e){Me(this);var t=[];if(p(e))Fe(this,e)&&(t=K(t,this.a.get(Be(this,e))));else{e=this.a.la();for(var n=0;n<e.length;n++)t=K(t,e[n])}return t},e.set=function(e,t){return Me(this),this.h=null,Fe(this,e=Be(this,e))&&(this.g-=this.a.get(e).length),this.a.set(e,[t]),this.g+=1,this},e.get=function(e,t){return e&&0<(e=this.la(e)).length?String(e[0]):t},e.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var e=[],t=this.a.ja(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.la(i);for(var a=0;a<i.length;a++){var s=r;""!==i[a]&&(s+="="+encodeURIComponent(String(i[a]))),e.push(s)}}return this.h=e.join("&")},Ve.prototype.toString=function(){return this.a.toString()};var We,Ge={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"};e:{var qe=h.navigator;if(qe){var Ke=qe.userAgent;if(Ke){We=Ke;break e}}We=""}function Je(e){return-1!=We.indexOf(e)}function Ye(){return(Je("Chrome")||Je("CriOS"))&&!Je("Edge")}function $e(e){return $e[" "](e),e}$e[" "]=v;var Xe,Ze,Qe=Je("Opera"),et=Je("Trident")||Je("MSIE"),tt=Je("Edge"),nt=tt||et,it=Je("Gecko")&&!(-1!=We.toLowerCase().indexOf("webkit")&&!Je("Edge"))&&!(Je("Trident")||Je("MSIE"))&&!Je("Edge"),rt=-1!=We.toLowerCase().indexOf("webkit")&&!Je("Edge"),at=rt&&Je("Mobile"),st=Je("Macintosh");function ot(){var e=h.document;return e?e.documentMode:void 0}e:{var ct="",ut=(Ze=We,it?/rv:([^\);]+)(\)|;)/.exec(Ze):tt?/Edge\/([\d\.]+)/.exec(Ze):et?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ze):rt?/WebKit\/(\S+)/.exec(Ze):Qe?/(?:Version)[ \/]?(\S+)/.exec(Ze):void 0);if(ut&&(ct=ut?ut[1]:""),et){var lt=ot();if(null!=lt&&lt>parseFloat(ct)){Xe=String(lt);break e}}Xe=ct}var dt,ht={};function ft(e){return function(e,t){var n=ht;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(){for(var t=0,n=$(String(Xe)).split("."),i=$(String(e)).split("."),r=Math.max(n.length,i.length),a=0;0==t&&a<r;a++){var s=n[a]||"",o=i[a]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;t=re(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||re(0==s[2].length,0==o[2].length)||re(s[2],o[2]),s=s[3],o=o[3]}while(0==t)}return 0<=t}))}var pt=h.document;function gt(e,t){this.a=e===vt&&t||"",this.g=mt}dt=pt&&et?ot()||("CSS1Compat"==pt.compatMode?parseInt(Xe,10):5):void 0,gt.prototype.ma=!0,gt.prototype.ka=function(){return this.a},gt.prototype.toString=function(){return"Const{"+this.a+"}"};var mt={},vt={};function bt(){this.a="",this.h=wt}function yt(e){return e instanceof bt&&e.constructor===bt&&e.h===wt?e.a:(U("expected object of type TrustedResourceUrl, got '"+e+"' of type "+y(e)),"type_error:TrustedResourceUrl")}bt.prototype.ma=!0,bt.prototype.ka=function(){return this.a.toString()},bt.prototype.g=function(){return 1},bt.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var wt={};function It(){this.a="",this.h=Ct}function _t(e){return e instanceof It&&e.constructor===It&&e.h===Ct?e.a:(U("expected object of type SafeUrl, got '"+e+"' of type "+y(e)),"type_error:SafeUrl")}It.prototype.ma=!0,It.prototype.ka=function(){return this.a.toString()},It.prototype.g=function(){return 1},It.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};var Et=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function kt(e){return e instanceof It?e:(e="object"==typeof e&&e.ma?e.ka():String(e),Et.test(e)||(e="about:invalid#zClosurez"),Tt(e))}function St(e){return e instanceof It?e:(e="object"==typeof e&&e.ma?e.ka():String(e),Et.test(e)||(e="about:invalid#zClosurez"),Tt(e))}var Ct={};function Tt(e){var t=new It;return t.a=e,t}function At(){this.a="",this.g=Rt}Tt("about:blank"),At.prototype.ma=!0;var Rt={};function Pt(){this.a="",this.j=Ot,this.h=null}function xt(e){return e instanceof Pt&&e.constructor===Pt&&e.j===Ot?e.a:(U("expected object of type SafeHtml, got '"+e+"' of type "+y(e)),"type_error:SafeHtml")}At.prototype.ka=function(){return this.a},At.prototype.toString=function(){return"SafeStyle{"+this.a+"}"},Pt.prototype.g=function(){return this.h},Pt.prototype.ma=!0,Pt.prototype.ka=function(){return this.a.toString()},Pt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Ot={};function Dt(e,t){var n=new Pt;return n.a=e,n.h=t,n}Dt("<!DOCTYPE html>",0);var Nt=Dt("",0);Dt("<br>",0);var Lt,Mt,Ut=(Mt=!1,function(){return Mt||(Lt=function(){if("undefined"==typeof document)return!1;var e=document.createElement("div"),t=document.createElement("div");return t.appendChild(document.createElement("div")),e.appendChild(t),!!e.firstChild&&(t=e.firstChild.firstChild,e.innerHTML=xt(Nt),!t.parentElement)}(),Mt=!0),Lt});function Ft(e,t){t=t instanceof It?t:St(t),e.assign(_t(t))}function jt(e,t){this.a=f(e)?e:0,this.g=f(t)?t:0}function Bt(e,t){this.width=e,this.height=t}function Vt(e){return e?new Xt(Jt(e)):x||(x=new Xt)}function zt(e,t){var n=t||document;return n.querySelectorAll&&n.querySelector?n.querySelectorAll("."+e):Wt(document,e,t)}function Ht(e,t){var n=t||document;if(n.getElementsByClassName)e=n.getElementsByClassName(e)[0];else{n=document;var i=t||n;e=i.querySelectorAll&&i.querySelector&&e?i.querySelector(e?"."+e:""):Wt(n,e,t)[0]||null}return e||null}function Wt(e,t,n){var i;if((e=n||e).querySelectorAll&&e.querySelector&&t)return e.querySelectorAll(t?"."+t:"");if(t&&e.getElementsByClassName){var r=e.getElementsByClassName(t);return r}if(r=e.getElementsByTagName("*"),t){var a={};for(n=i=0;e=r[n];n++){var s=e.className;"function"==typeof s.split&&H(s.split(/\s+/),t)&&(a[i++]=e)}return a.length=i,a}return r}jt.prototype.toString=function(){return"("+this.a+", "+this.g+")"},jt.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},jt.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},jt.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this},(e=Bt.prototype).toString=function(){return"("+this.width+" x "+this.height+")"},e.aspectRatio=function(){return this.width/this.height},e.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},e.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},e.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};var Gt={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function qt(e){return e.scrollingElement?e.scrollingElement:(rt||"CSS1Compat"!=e.compatMode)&&e.body||e.documentElement}function Kt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Jt(e){return 9==e.nodeType?e:e.ownerDocument||e.document}function Yt(e,t){if("textContent"in e)e.textContent=t;else if(3==e.nodeType)e.data=String(t);else if(e.firstChild&&3==e.firstChild.nodeType){for(;e.lastChild!=e.firstChild;)e.removeChild(e.lastChild);e.firstChild.data=String(t)}else{for(var n;n=e.firstChild;)e.removeChild(n);e.appendChild(Jt(e).createTextNode(String(t)))}}function $t(e,t){return t?function(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}(e,(function(e){return!t||p(e.className)&&H(e.className.split(/\s+/),t)})):null}function Xt(e){this.a=e||h.document||document}Xt.prototype.N=function(){return p(void 0)?this.a.getElementById(void 0):void 0};var Zt={Fc:!0},Qt={Hc:!0},en={Ec:!0},tn={Gc:!0};function nn(){throw Error("Do not instantiate directly")}function rn(e,t,n,i){if(e=e(t||sn,void 0,n),i=(i||Vt()).a.createElement("DIV"),(e=function(e){if(!E(e))return ae(String(e));if(e instanceof nn){if(e.fa===Zt)return e.content;if(e.fa===tn)return ae(e.content)}return U("Soy template output is unsafe for use as HTML: "+e),"zSoyz"}(e)).match(an),e=Dt(e,null),Ut())for(;i.lastChild;)i.removeChild(i.lastChild);return i.innerHTML=xt(e),1==i.childNodes.length&&(1==(e=i.firstChild).nodeType&&(i=e)),i}nn.prototype.va=null,nn.prototype.toString=function(){return this.content};var an=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,sn={};function on(){nn.call(this)}function cn(e){return null!=e&&e.fa===Zt?e:e instanceof Pt?hn(xt(e).toString(),e.g()):hn(ae(String(String(e))),function(e){if(null!=e)switch(e.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}(e))}function un(){nn.call(this)}function ln(e,t){this.content=String(e),this.va=null!=t?t:null}function dn(e){return new ln(e,void 0)}N(on,nn),on.prototype.fa=Zt,N(un,nn),un.prototype.fa=Qt,un.prototype.va=1,N(ln,nn),ln.prototype.fa=tn;var hn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,n){return e=new t(String(e)),void 0!==n&&(e.va=n),e}}(on),fn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e){return new t(String(e))}}(un);function pn(e){return(e=String(e))?new ln(e,void 0):""}var gn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,n){return(e=String(e))?(e=new t(e),void 0!==n&&(e.va=n),e):""}}(on);function mn(e){return null!=e&&e.fa===Zt?String(String(e.content).replace(Tn,"").replace(An,"&lt;")).replace(En,wn):ae(String(e))}function vn(e){return null!=e&&e.fa===Qt?e=String(e).replace(kn,_n):e instanceof It?e=String(_t(e).toString()).replace(kn,_n):(e=String(e),Cn.test(e)?e=e.replace(kn,_n):(U("Bad value `%s` for |filterNormalizeUri",[e]),e="#zSoyz")),e}function bn(e){return null!=e&&e.fa===en?e=e.content:null==e?e="":e instanceof At?e instanceof At&&e.constructor===At&&e.g===Rt?e=e.a:(U("expected object of type SafeStyle, got '"+e+"' of type "+y(e)),e="type_error:SafeStyle"):(e=String(e),Sn.test(e)||(U("Bad value `%s` for |filterCssValue",[e]),e="zSoyz")),e}var yn={"\0":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function wn(e){return yn[e]}var In={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","":"%7F","":"%C2%85"," ":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","！":"%EF%BC%81","＃":"%EF%BC%83","＄":"%EF%BC%84","＆":"%EF%BC%86","＇":"%EF%BC%87","（":"%EF%BC%88","）":"%EF%BC%89","＊":"%EF%BC%8A","＋":"%EF%BC%8B","，":"%EF%BC%8C","／":"%EF%BC%8F","：":"%EF%BC%9A","；":"%EF%BC%9B","＝":"%EF%BC%9D","？":"%EF%BC%9F","＠":"%EF%BC%A0","［":"%EF%BC%BB","］":"%EF%BC%BD"};function _n(e){return In[e]}var En=/[\x00\x22\x27\x3c\x3e]/g,kn=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Sn=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,Cn=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,Tn=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,An=/</g;function Rn(){return dn("Enter a valid phone number")}function Pn(){return dn("Unable to send password reset code to specified email")}function xn(){return dn("Something went wrong. Please try again.")}function On(){return dn("This email already exists without any means of sign-in. Please reset the password to recover.")}function Dn(e){var t="";switch((e=e||{}).code){case"invalid-argument":t+="Client specified an invalid argument.";break;case"invalid-configuration":t+="Client specified an invalid project configuration.";break;case"failed-precondition":t+="Request can not be executed in the current system state.";break;case"out-of-range":t+="Client specified an invalid range.";break;case"unauthenticated":t+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":t+="Client does not have sufficient permission.";break;case"not-found":t+="Specified resource is not found.";break;case"aborted":t+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":t+="The resource that a client tried to create already exists.";break;case"resource-exhausted":t+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":t+="Request cancelled by the client.";break;case"data-loss":t+="Unrecoverable data loss or data corruption.";break;case"unknown":t+="Unknown server error.";break;case"internal":t+="Internal server error.";break;case"not-implemented":t+="API method not implemented by the server.";break;case"unavailable":t+="Service unavailable.";break;case"deadline-exceeded":t+="Request deadline exceeded.";break;case"auth/user-disabled":t+="The user account has been disabled by an administrator.";break;case"auth/timeout":t+="The operation has timed out.";break;case"auth/too-many-requests":t+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":t+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":t+="A network error has occurred. Try again later.";break;case"restart-process":t+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":t+="No sign-in provider is available for the given email, please try with a different email."}return dn(t)}function Nn(){return dn("Please login again to perform this operation")}function Ln(e,t,n){var i=Error.call(this);if(this.message=i.message,"stack"in i&&(this.stack=i.stack),this.code=Mn+e,!(e=t)){if(e="","firebaseui/merge-conflict"===this.code)e+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";else e+=xn();e=dn(e).toString()}this.message=e||"",this.credential=n||null}c(Ln,Error),Ln.prototype.toJSON=function(){return{code:this.code,message:this.message}};var Mn="firebaseui/";function Un(){0!=Fn&&(jn[this[k]||(this[k]=++S)]=this),this.T=this.T,this.C=this.C}var Fn=0,jn={};function Bn(e,t){e.T?f(void 0)?t.call(void 0):t():(e.C||(e.C=[]),e.C.push(f(void 0)?A(t,void 0):t))}function Vn(e){e&&"function"==typeof e.m&&e.m()}Un.prototype.T=!1,Un.prototype.m=function(){if(!this.T&&(this.T=!0,this.o(),0!=Fn)){var e=this[k]||(this[k]=++S);if(0!=Fn&&this.C&&0<this.C.length)throw Error(this+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete jn[e]}},Un.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};var zn=Object.freeze||function(e){return e},Hn=!et||9<=Number(dt),Wn=et&&!ft("9"),Gn=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",v,t),h.removeEventListener("test",v,t)}catch(e){}return e}();function qn(e,t){this.type=e,this.g=this.target=t,this.h=!1,this.qb=!0}function Kn(e,t){if(qn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(it){e:{try{$e(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.keyCode=e.keyCode||0,this.key=e.key||"",this.j=e.charCode||("keypress"==n?e.keyCode:0),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=p(e.pointerType)?e.pointerType:Jn[e.pointerType]||"",this.a=e,e.defaultPrevented&&this.preventDefault()}}qn.prototype.stopPropagation=function(){this.h=!0},qn.prototype.preventDefault=function(){this.qb=!1},N(Kn,qn);var Jn=zn({2:"touch",3:"pen",4:"mouse"});Kn.prototype.stopPropagation=function(){Kn.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},Kn.prototype.preventDefault=function(){Kn.K.preventDefault.call(this);var e=this.a;if(e.preventDefault)e.preventDefault();else if(e.returnValue=!1,Wn)try{(e.ctrlKey||112<=e.keyCode&&123>=e.keyCode)&&(e.keyCode=-1)}catch(e){}};var Yn="closure_listenable_"+(1e6*Math.random()|0),$n=0;function Xn(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.La=r,this.key=++$n,this.sa=this.Ia=!1}function Zn(e){e.sa=!0,e.listener=null,e.proxy=null,e.src=null,e.La=null}function Qn(e){this.src=e,this.a={},this.g=0}function ei(e,t){var n=t.type;n in e.a&&W(e.a[n],t)&&(Zn(t),0==e.a[n].length&&(delete e.a[n],e.g--))}function ti(e,t,n,i){for(var r=0;r<e.length;++r){var a=e[r];if(!a.sa&&a.listener==t&&a.capture==!!n&&a.La==i)return r}return-1}Qn.prototype.add=function(e,t,n,i,r){var a=e.toString();(e=this.a[a])||(e=this.a[a]=[],this.g++);var s=ti(e,t,i,r);return-1<s?(t=e[s],n||(t.Ia=!1)):((t=new Xn(t,this.src,a,!!i,r)).Ia=n,e.push(t)),t};var ni="closure_lm_"+(1e6*Math.random()|0),ii={};function ri(e,t,n,i,r){if(i&&i.once)return si(e,t,n,i,r);if(w(t)){for(var a=0;a<t.length;a++)ri(e,t[a],n,i,r);return null}return n=gi(n),e&&e[Yn]?e.J.add(String(t),n,!1,E(i)?!!i.capture:!!i,r):ai(e,t,n,!1,i,r)}function ai(e,t,n,i,r,a){if(!t)throw Error("Invalid event type");var s=E(r)?!!r.capture:!!r,o=fi(e);if(o||(e[ni]=o=new Qn(e)),(n=o.add(t,n,i,s,a)).proxy)return n;if(i=function(){var e=hi,t=Hn?function(n){return e.call(t.src,t.listener,n)}:function(n){if(!(n=e.call(t.src,t.listener,n)))return n};return t}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Gn||(r=s),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(ui(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function si(e,t,n,i,r){if(w(t)){for(var a=0;a<t.length;a++)si(e,t[a],n,i,r);return null}return n=gi(n),e&&e[Yn]?e.J.add(String(t),n,!0,E(i)?!!i.capture:!!i,r):ai(e,t,n,!0,i,r)}function oi(e,t,n,i,r){if(w(t))for(var a=0;a<t.length;a++)oi(e,t[a],n,i,r);else i=E(i)?!!i.capture:!!i,n=gi(n),e&&e[Yn]?(e=e.J,(t=String(t).toString())in e.a&&(-1<(n=ti(a=e.a[t],n,i,r))&&(Zn(a[n]),G(a,n),0==a.length&&(delete e.a[t],e.g--)))):e&&(e=fi(e))&&(t=e.a[t.toString()],e=-1,t&&(e=ti(t,n,i,r)),(n=-1<e?t[e]:null)&&ci(n))}function ci(e){if("number"!=typeof e&&e&&!e.sa){var t=e.src;if(t&&t[Yn])ei(t.J,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(ui(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=fi(t))?(ei(n,e),0==n.g&&(n.src=null,t[ni]=null)):Zn(e)}}}function ui(e){return e in ii?ii[e]:ii[e]="on"+e}function li(e,t,n,i){var r=!0;if((e=fi(e))&&(t=e.a[t.toString()]))for(t=t.concat(),e=0;e<t.length;e++){var a=t[e];a&&a.capture==n&&!a.sa&&(a=di(a,i),r=r&&!1!==a)}return r}function di(e,t){var n=e.listener,i=e.La||e.src;return e.Ia&&ci(e),n.call(i,t)}function hi(e,t){if(e.sa)return!0;if(!Hn){if(!t)e:{t=["window","event"];for(var n=h,i=0;i<t.length;i++)if(null==(n=n[t[i]])){t=null;break e}t=n}if(t=new Kn(i=t,this),n=!0,!(0>i.keyCode||null!=i.returnValue)){e:{var r=!1;if(0==i.keyCode)try{i.keyCode=-1;break e}catch(e){r=!0}(r||null==i.returnValue)&&(i.returnValue=!0)}for(i=[],r=t.g;r;r=r.parentNode)i.push(r);for(e=e.type,r=i.length-1;!t.h&&0<=r;r--){t.g=i[r];var a=li(i[r],e,!0,t);n=n&&a}for(r=0;!t.h&&r<i.length;r++)t.g=i[r],a=li(i[r],e,!1,t),n=n&&a}return n}return di(e,new Kn(t,this))}function fi(e){return(e=e[ni])instanceof Qn?e:null}var pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function gi(e){return _(e)?e:(e[pi]||(e[pi]=function(t){return e.handleEvent(t)}),e[pi])}function mi(){Un.call(this),this.J=new Qn(this),this.wb=this,this.Ha=null}function vi(e,t){var n,i=e.Ha;if(i)for(n=[];i;i=i.Ha)n.push(i);if(e=e.wb,i=t.type||t,p(t))t=new qn(t,e);else if(t instanceof qn)t.target=t.target||e;else{var r=t;ue(t=new qn(i,e),r)}if(r=!0,n)for(var a=n.length-1;!t.h&&0<=a;a--){var s=t.g=n[a];r=bi(s,i,!0,t)&&r}if(t.h||(r=bi(s=t.g=e,i,!0,t)&&r,t.h||(r=bi(s,i,!1,t)&&r)),n)for(a=0;!t.h&&a<n.length;a++)r=bi(s=t.g=n[a],i,!1,t)&&r;return r}function bi(e,t,n,i){if(!(t=e.J.a[String(t)]))return!0;t=t.concat();for(var r=!0,a=0;a<t.length;++a){var s=t[a];if(s&&!s.sa&&s.capture==n){var o=s.listener,c=s.La||s.src;s.Ia&&ei(e.J,s),r=!1!==o.call(c,i)&&r}}return r&&0!=i.qb}N(mi,Un),mi.prototype[Yn]=!0,mi.prototype.Za=function(e){this.Ha=e},mi.prototype.removeEventListener=function(e,t,n,i){oi(this,e,t,n,i)},mi.prototype.o=function(){if(mi.K.o.call(this),this.J){var e,t=this.J;for(e in t.a){for(var n=t.a[e],i=0;i<n.length;i++)Zn(n[i]);delete t.a[e],t.g--}}this.Ha=null};var yi={},wi=0;function Ii(e,t){if(!e)throw Error("Event target element must be provided!");if(e=Ei(e),yi[e]&&yi[e].length)for(var n=0;n<yi[e].length;n++)vi(yi[e][n],t)}function _i(e){var t=Ei(e.N());yi[t]&&yi[t].length&&(function(e,t){e:{for(var n=e.length,i=p(e)?e.split(""):e,r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}0<=t&&G(e,t)}(yi[t],(function(t){return t==e})),yi[t].length||delete yi[t])}function Ei(e){return void 0===e.a&&(e.a=wi,wi++),e.a}function ki(e){if(!e)throw Error("Event target element must be provided!");mi.call(this),this.a=e}function Si(e){if(!e)return!1;try{return!!e.$goog_Thenable}catch(e){return!1}}function Ci(e,t){this.h=e,this.j=t,this.g=0,this.a=null}function Ti(e,t){e.j(t),100>e.g&&(e.g++,t.next=e.a,e.a=t)}function Ai(){this.g=this.a=null}c(ki,mi),ki.prototype.N=function(){return this.a},ki.prototype.register=function(){var e=Ei(this.N());yi[e]?H(yi[e],this)||yi[e].push(this):yi[e]=[this]},Ci.prototype.get=function(){if(0<this.g){this.g--;var e=this.a;this.a=e.next,e.next=null}else e=this.h();return e};var Ri,Pi,xi=new Ci((function(){return new Di}),(function(e){e.reset()}));function Oi(){var e=Ui,t=null;return e.a&&(t=e.a,e.a=e.a.next,e.a||(e.g=null),t.next=null),t}function Di(){this.next=this.g=this.a=null}function Ni(e){h.setTimeout((function(){throw e}),0)}function Li(e,t){Pi||function(){if(h.Promise&&h.Promise.resolve){var e=h.Promise.resolve(void 0);Pi=function(){e.then(Fi)}}else Pi=function(){var e=Fi;!_(h.setImmediate)||h.Window&&h.Window.prototype&&!Je("Edge")&&h.Window.prototype.setImmediate==h.setImmediate?(Ri||(Ri=function(){var e=h.MessageChannel;if(void 0===e&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!Je("Presto")&&(e=function(){var e=document.createElement("IFRAME");e.style.display="none",e.src="",document.documentElement.appendChild(e);var t=e.contentWindow;(e=t.document).open(),e.write(""),e.close();var n="callImmediate"+Math.random(),i="file:"==t.location.protocol?"*":t.location.protocol+"//"+t.location.host;e=A((function(e){"*"!=i&&e.origin!=i||e.data!=n||this.port1.onmessage()}),this),t.addEventListener("message",e,!1),this.port1={},this.port2={postMessage:function(){t.postMessage(n,i)}}}),void 0!==e&&!Je("Trident")&&!Je("MSIE")){var t=new e,n={},i=n;return t.port1.onmessage=function(){if(f(n.next)){var e=(n=n.next).gb;n.gb=null,e()}},function(e){i.next={gb:e},i=i.next,t.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var t=document.createElement("SCRIPT");t.onreadystatechange=function(){t.onreadystatechange=null,t.parentNode.removeChild(t),t=null,e(),e=null},document.documentElement.appendChild(t)}:function(e){h.setTimeout(e,0)}}()),Ri(e)):h.setImmediate(e)}}(),Mi||(Pi(),Mi=!0),Ui.add(e,t)}Ai.prototype.add=function(e,t){var n=xi.get();n.set(e,t),this.g?this.g.next=n:this.a=n,this.g=n},Di.prototype.set=function(e,t){this.a=e,this.g=t,this.next=null},Di.prototype.reset=function(){this.next=this.g=this.a=null};var Mi=!1,Ui=new Ai;function Fi(){for(var e;e=Oi();){try{e.a.call(e.g)}catch(e){Ni(e)}Ti(xi,e)}Mi=!1}function ji(e){if(this.a=Bi,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,e!=v)try{var t=this;e.call(void 0,(function(e){Xi(t,Vi,e)}),(function(e){if(!(e instanceof ir))try{if(e instanceof Error)throw e;throw Error("Promise rejected.")}catch(e){}Xi(t,zi,e)}))}catch(e){Xi(this,zi,e)}}var Bi=0,Vi=2,zi=3;function Hi(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}Hi.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var Wi=new Ci((function(){return new Hi}),(function(e){e.reset()}));function Gi(e,t,n){var i=Wi.get();return i.s=e,i.g=t,i.j=n,i}function qi(e){if(e instanceof ji)return e;var t=new ji(v);return Xi(t,Vi,e),t}function Ki(e){return new ji((function(t,n){n(e)}))}function Ji(e,t){if(e.a==Bi)if(e.h){var n=e.h;if(n.g){for(var i=0,r=null,a=null,s=n.g;s&&(s.h||(i++,s.a==e&&(r=s),!(r&&1<i)));s=s.next)r||(a=s);r&&(n.a==Bi&&1==i?Ji(n,t):(a?((i=a).next==n.j&&(n.j=i),i.next=i.next.next):Qi(n),er(n,r,zi,t)))}e.h=null}else Xi(e,zi,t)}function Yi(e,t){e.g||e.a!=Vi&&e.a!=zi||Zi(e),e.j?e.j.next=t:e.g=t,e.j=t}function $i(e,t,n,i){var r=Gi(null,null,null);return r.a=new ji((function(e,a){r.s=t?function(n){try{var r=t.call(i,n);e(r)}catch(e){a(e)}}:e,r.g=n?function(t){try{var r=n.call(i,t);!f(r)&&t instanceof ir?a(t):e(r)}catch(e){a(e)}}:a})),r.a.h=e,Yi(e,r),r.a}function Xi(e,t,n){if(e.a==Bi){e===n&&(t=zi,n=new TypeError("Promise cannot resolve to itself")),e.a=1;e:{var i=n,r=e.hc,a=e.ic;if(i instanceof ji){Yi(i,Gi(r||v,a||null,e));var s=!0}else if(Si(i))i.then(r,a,e),s=!0;else{if(E(i))try{var o=i.then;if(_(o)){!function(e,t,n,i,r){function a(e){o||(o=!0,i.call(r,e))}function s(e){o||(o=!0,n.call(r,e))}var o=!1;try{t.call(e,s,a)}catch(e){a(e)}}(i,o,r,a,e),s=!0;break e}}catch(t){a.call(e,t),s=!0;break e}s=!1}}s||(e.A=n,e.a=t,e.h=null,Zi(e),t!=zi||n instanceof ir||function(e,t){e.s=!0,Li((function(){e.s&&nr.call(null,t)}))}(e,n))}}function Zi(e){e.i||(e.i=!0,Li(e.Hb,e))}function Qi(e){var t=null;return e.g&&(t=e.g,e.g=t.next,t.next=null),e.g||(e.j=null),t}function er(e,t,n,i){if(n==zi&&t.g&&!t.h)for(;e&&e.s;e=e.h)e.s=!1;if(t.a)t.a.h=null,tr(t,n,i);else try{t.h?t.s.call(t.j):tr(t,n,i)}catch(e){nr.call(null,e)}Ti(Wi,t)}function tr(e,t,n){t==Vi?e.s.call(e.j,n):e.g&&e.g.call(e.j,n)}ji.prototype.then=function(e,t,n){return $i(this,_(e)?e:null,_(t)?t:null,n)},ji.prototype.$goog_Thenable=!0,(e=ji.prototype).fc=function(e,t){return(e=Gi(e,e,t)).h=!0,Yi(this,e),this},e.Ca=function(e,t){return $i(this,null,e,t)},e.cancel=function(e){this.a==Bi&&Li((function(){Ji(this,new ir(e))}),this)},e.hc=function(e){this.a=Bi,Xi(this,Vi,e)},e.ic=function(e){this.a=Bi,Xi(this,zi,e)},e.Hb=function(){for(var e;e=Qi(this);)er(this,e,this.a,this.A);this.i=!1};var nr=Ni;function ir(e){L.call(this,e)}function rr(e,t,n){t||(t={}),n=n||window;var i=e instanceof It?e:kt(void 0!==e.href?e.href:String(e));e=t.target||e.target;var r=[];for(a in t)switch(a){case"width":case"height":case"top":case"left":r.push(a+"="+t[a]);break;case"target":case"noopener":case"noreferrer":break;default:r.push(a+"="+(t[a]?1:0))}var a=r.join(",");return(Je("iPhone")&&!Je("iPod")&&!Je("iPad")||Je("iPad")||Je("iPod"))&&n.navigator&&n.navigator.standalone&&e&&"_self"!=e?(a=n.document.createElement("A"),i=i instanceof It?i:St(i),a.href=_t(i),a.setAttribute("target",e),t.noreferrer&&a.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,n,1),a.dispatchEvent(t),n={}):t.noreferrer?(n=n.open("",e,a),t=_t(i).toString(),n&&(nt&&-1!=t.indexOf(";")&&(t="'"+t.replace(/'/g,"%27")+"'"),n.opener=null,t=Dt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+ae(t)+'">',null),n.document.write(xt(t)),n.document.close())):(n=n.open(_t(i).toString(),e,a))&&t.noopener&&(n.opener=null),n}function ar(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch(e){}return!1}function sr(e){rr(e,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function or(e,t){if(null==(e=E(e)&&1==e.nodeType?e:document.querySelector(String(e))))throw Error(t||"Cannot find element.");return e}function cr(){return window.location.href}function ur(e){var t=wr;this.s=[],this.T=t,this.O=e||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}function lr(e,t,n){e.a=!0,e.h=n,e.j=!t,pr(e)}function dr(e){if(e.a){if(!e.J)throw new gr(e);e.J=!1}}function hr(e,t,n){e.s.push([t,n,void 0]),e.a&&pr(e)}function fr(e){return z(e.s,(function(e){return _(e[1])}))}function pr(e){if(e.i&&e.a&&fr(e)){var t=e.i,n=br[t];n&&(h.clearTimeout(n.a),delete br[t]),e.i=0}e.g&&(e.g.C--,delete e.g),t=e.h;for(var i=n=!1;e.s.length&&!e.A;){var r=e.s.shift(),a=r[0],s=r[1];if(r=r[2],a=e.j?s:a)try{var o=a.call(r||e.O,t);f(o)&&(e.j=e.j&&(o==t||o instanceof Error),e.h=t=o),(Si(t)||"function"==typeof h.Promise&&t instanceof h.Promise)&&(i=!0,e.A=!0)}catch(i){t=i,e.j=!0,fr(e)||(n=!0)}}e.h=t,i&&(o=A(e.L,e,!0),i=A(e.L,e,!1),t instanceof ur?(hr(t,o,i),t.l=!0):t.then(o,i)),n&&(t=new vr(t),br[t.a]=t,e.i=t.a)}function gr(){L.call(this)}function mr(){L.call(this)}function vr(e){this.a=h.setTimeout(A(this.h,this),0),this.g=e}N(ir,L),ir.prototype.name="cancel",ur.prototype.cancel=function(e){if(this.a)this.h instanceof ur&&this.h.cancel();else{if(this.g){var t=this.g;delete this.g,e?t.cancel(e):(t.C--,0>=t.C&&t.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(e=new mr(this),dr(this),lr(this,!1,e))}},ur.prototype.L=function(e,t){this.A=!1,lr(this,e,t)},ur.prototype.callback=function(e){dr(this),lr(this,!0,e)},ur.prototype.then=function(e,t,n){var i,r,a=new ji((function(e,t){i=e,r=t}));return hr(this,i,(function(e){e instanceof mr?a.cancel():r(e)})),a.then(e,t,n)},ur.prototype.$goog_Thenable=!0,N(gr,L),gr.prototype.message="Deferred has already fired",gr.prototype.name="AlreadyCalledError",N(mr,L),mr.prototype.message="Deferred was canceled",mr.prototype.name="CanceledError",vr.prototype.h=function(){throw delete br[this.a],this.g};var br={};function yr(e){var t={},n=t.document||document,i=yt(e).toString(),r=document.createElement("SCRIPT"),a={rb:r,sb:void 0},s=new ur(a),o=null,c=null!=t.timeout?t.timeout:5e3;return 0<c&&(o=window.setTimeout((function(){Ir(r,!0);var e=new kr(Er,"Timeout reached for loading script "+i);dr(s),lr(s,!1,e)}),c),a.sb=o),r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(Ir(r,t.xc||!1,o),s.callback(null))},r.onerror=function(){Ir(r,!0,o);var e=new kr(_r,"Error while loading script "+i);dr(s),lr(s,!1,e)},ue(a=t.attributes||{},{type:"text/javascript",charset:"UTF-8"}),function(e,t){se(t,(function(t,n){t&&"object"==typeof t&&t.ma&&(t=t.ka()),"style"==n?e.style.cssText=t:"class"==n?e.className=t:"for"==n?e.htmlFor=t:Gt.hasOwnProperty(n)?e.setAttribute(Gt[n],t):0==n.lastIndexOf("aria-",0)||0==n.lastIndexOf("data-",0)?e.setAttribute(n,t):e[n]=t}))}(r,a),function(e,t){e.src=yt(t),null===m&&(m=(t=(t=h.document).querySelector&&t.querySelector("script[nonce]"))&&(t=t.nonce||t.getAttribute("nonce"))&&g.test(t)?t:""),(t=m)&&e.setAttribute("nonce",t)}(r,e),function(e){var t=(e||document).getElementsByTagName("HEAD");return t&&0!=t.length?t[0]:e.documentElement}(n).appendChild(r),s}function wr(){if(this&&this.rb){var e=this.rb;e&&"SCRIPT"==e.tagName&&Ir(e,!0,this.sb)}}function Ir(e,t,n){null!=n&&h.clearTimeout(n),e.onload=v,e.onerror=v,e.onreadystatechange=v,t&&window.setTimeout((function(){Kt(e)}),0)}var _r=0,Er=1;function kr(e,t){var n="Jsloader error (code #"+e+")";t&&(n+=": "+t),L.call(this,n),this.code=e}function Sr(){return h.google&&h.google.accounts&&h.google.accounts.id||null}function Cr(e){this.a=e||Sr(),this.h=!1,this.g=null}function Tr(e,t,n){return e.a&&t?(e.h=!0,new ji((function(i){e.g=i,e.a.initialize({client_id:t,callback:i,auto_select:!n}),e.a.prompt()}))):qi(t?Rr.Xa().load().then((function(){return e.a=Sr(),Tr(e,t,n)})).Ca((function(){return null})):null)}N(kr,L),Cr.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())},b(Cr);var Ar=new gt(vt,"https://accounts.google.com/gsi/client");function Rr(){this.a=null}function Pr(e,t){this.a=e,this.g=t||function(e){throw e}}function xr(e,t,n){this.reset(e,t,n,void 0,void 0)}Rr.prototype.load=function(){var e=this;if(this.a)return this.a;var t=function(){var e=Ar;e instanceof gt&&e.constructor===gt&&e.g===mt?e=e.a:(U("expected object of type Const, got '"+e+"'"),e="type_error:Const");var t=new bt;return t.a=e,t}();return Sr()?qi():this.a=function(){var e=null;return new ji((function(t){"complete"==h.document.readyState?t():(e=function(){t()},si(window,"load",e))})).Ca((function(t){throw oi(window,"load",e),t}))}().then((function(){if(!Sr())return new ji((function(n,i){var r=setTimeout((function(){e.a=null,i(Error("Network error!"))}),1e4);h.onGoogleLibraryLoad=function(){clearTimeout(r),n()},qi(yr(t)).then((function(){Sr()&&n()})).Ca((function(t){clearTimeout(r),e.a=null,i(t)}))}))}))},b(Rr),Pr.prototype.confirm=function(e){return qi(this.a.confirm(e)).Ca(this.g)},xr.prototype.a=null;function Or(e){this.s=e,this.a=this.h=this.j=this.g=null}function Dr(e,t){this.name=e,this.value=t}xr.prototype.reset=function(e,t,n,i,r){"number"==typeof r||0,this.h=i||O(),this.j=e,this.s=t,this.g=n,delete this.a},Dr.prototype.toString=function(){return this.name};var Nr=new Dr("SEVERE",1e3),Lr=new Dr("WARNING",900),Mr=new Dr("CONFIG",700);function Ur(e){return e.j?e.j:e.g?Ur(e.g):(U("Root logger has no level set."),null)}Or.prototype.log=function(e,t,n){if(e.value>=Ur(this).value)for(_(t)&&(t=t()),e=new xr(e,String(t),this.s),n&&(e.a=n),n=this;n;){var i=n,r=e;if(i.a)for(var a=0;t=i.a[a];a++)t(r);n=n.g}};var Fr={},jr=null;function Br(){jr||(jr=new Or(""),Fr[""]=jr,jr.j=Mr)}function Vr(){this.a=O()}var zr=null;function Hr(e){this.j=e||"",zr||(zr=new Vr),this.s=zr}function Wr(e){return 10>e?"0"+e:String(e)}function Gr(e){Hr.call(this,e)}function qr(){this.s=A(this.h,this),this.a=new Gr,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}Vr.prototype.set=function(e){this.a=e},Vr.prototype.reset=function(){this.set(O())},Vr.prototype.get=function(){return this.a},Hr.prototype.a=!0,Hr.prototype.g=!0,Hr.prototype.h=!1,N(Gr,Hr),qr.prototype.h=function(e){if(!this.j[e.g]){var t=function(e,t){var n=[];if(n.push(e.j," "),e.g){var i=new Date(t.h);n.push("[",Wr(i.getFullYear()-2e3)+Wr(i.getMonth()+1)+Wr(i.getDate())+" "+Wr(i.getHours())+":"+Wr(i.getMinutes())+":"+Wr(i.getSeconds())+"."+Wr(Math.floor(i.getMilliseconds()/10)),"] ")}return n.push("[",function(e,t){t=(e=(e.h-t)/1e3).toFixed(3);var n=0;if(1>e)n=2;else for(;100>e;)n++,e*=10;for(;0<n--;)t=" "+t;return t}(t,e.s.get()),"s] "),n.push("[",t.g,"] "),n.push(t.s),e.h&&(t=t.a)&&n.push("\n",t instanceof Error?t.message:t.toString()),e.a&&n.push("\n"),n.join("")}(this.a,e);if(Jr)!function(e,t,n,i){e[t]?e[t](n,i||""):e.log(n,i||"")}(Jr,function(e){if(e){if(e.value>=Nr.value)return"error";if(e.value>=Lr.value)return"warn";if(e.value>=Mr.value)return"log"}return"debug"}(e.j),t,e.a)}};var Kr,Jr=h.console;function Yr(e,t){Kr&&Kr.log(Nr,e,t)}Kr=function e(t){var n;if(Br(),!(n=Fr[t])){n=new Or(t);var i=t.lastIndexOf("."),r=t.substr(i+1);(i=e(t.substr(0,i))).h||(i.h={}),i.h[r]=n,n.g=i,Fr[t]=n}return n}("firebaseui");var $r=new qr;if(1!=$r.g){var Xr;Br(),Xr=jr;var Zr=$r.s;Xr.a||(Xr.a=[]),Xr.a.push(Zr),$r.g=!0}function Qr(e){Kr&&Kr.log(Lr,e,void 0)}function ea(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}function ta(e){e=(e.a.cookie||"").split(";");for(var t,n,i=[],r=[],a=0;a<e.length;a++)-1==(t=(n=$(e[a])).indexOf("="))?(i.push(""),r.push(n)):(i.push(n.substring(0,t)),r.push(n.substring(t+1)));return{keys:i,values:r}}(e=ea.prototype).set=function(e,t,n,i,r,a){if(/[;=\s]/.test(e))throw Error('Invalid cookie name "'+e+'"');if(/[;\r\n]/.test(t))throw Error('Invalid cookie value "'+t+'"');f(n)||(n=-1),r=r?";domain="+r:"",i=i?";path="+i:"",a=a?";secure":"",n=0>n?"":0==n?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(O()+1e3*n).toUTCString(),this.a.cookie=e+"="+t+r+i+n+a},e.get=function(e,t){for(var n,i=e+"=",r=(this.a.cookie||"").split(";"),a=0;a<r.length;a++){if(0==(n=$(r[a])).lastIndexOf(i,0))return n.substr(i.length);if(n==e)return""}return t},e.ja=function(){return ta(this).keys},e.la=function(){return ta(this).values},e.clear=function(){for(var e=ta(this).keys,t=e.length-1;0<=t;t--){var n=e[t];this.get(n),this.set(n,"",0,void 0,void 0)}};var na=new ea;function ia(){}function ra(e,t,n,i){this.h=null!=e?e:-1,this.g=t||null,this.a=n||null,this.j=!!i}function aa(e,t){this.g=e,this.a=t||null}function sa(e){return{email:e.g,credential:e.a&&e.a.toJSON()}}function oa(e){if(e&&e.email){var t=e.credential&&r.default.auth.AuthCredential.fromJSON(e.credential);return new aa(e.email,t)}return null}function ca(e){this.a=e||null}function ua(e){for(var t=[],n=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);255<r&&(t[n++]=255&r,r>>=8),t[n++]=r}return t}function la(e){return V(e,(function(e){return 1<(e=e.toString(16)).length?e:"0"+e})).join("")}function da(e){for(this.i=e,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(ha*(this.j+1)),e=0;e<this.g;e++)this.a[e]=[this.i[4*e],this.i[4*e+1],this.i[4*e+2],this.i[4*e+3]];var t=Array(4);for(e=this.g;e<ha*(this.j+1);e++){if(t[0]=this.a[e-1][0],t[1]=this.a[e-1][1],t[2]=this.a[e-1][2],t[3]=this.a[e-1][3],0==e%this.g){var n=t,i=n[0];n[0]=n[1],n[1]=n[2],n[2]=n[3],n[3]=i,ya(t),t[0]^=_a[e/this.g][0],t[1]^=_a[e/this.g][1],t[2]^=_a[e/this.g][2],t[3]^=_a[e/this.g][3]}else 6<this.g&&4==e%this.g&&ya(t);this.a[e]=Array(4),this.a[e][0]=this.a[e-this.g][0]^t[0],this.a[e][1]=this.a[e-this.g][1]^t[1],this.a[e][2]=this.a[e-this.g][2]^t[2],this.a[e][3]=this.a[e-this.g][3]^t[3]}}c(ra,ia),ra.prototype.set=function(e,t){na.set(e,t,this.h,this.g,this.a,this.j)},ra.prototype.get=function(e){return na.get(e)||null},ra.prototype.ra=function(e){var t=this.g,n=this.a;na.get(e),na.set(e,"",0,t,n)},da.prototype.A=16;var ha=da.prototype.A/4;function fa(e,t){for(var n,i=0;i<ha;i++)for(var r=0;4>r;r++)n=t[n=4*r+i],e.h[i][r]=n}function pa(e){for(var t=[],n=0;n<ha;n++)for(var i=0;4>i;i++)t[4*i+n]=e.h[n][i];return t}function ga(e,t){for(var n=0;4>n;n++)for(var i=0;4>i;i++)e.h[n][i]^=e.a[4*t+i][n]}function ma(e,t){for(var n=0;4>n;n++)for(var i=0;4>i;i++)e.h[n][i]=t[e.h[n][i]]}function va(e){for(var t=1;4>t;t++)for(var n=0;4>n;n++)e.s[t][n]=e.h[t][n];for(t=1;4>t;t++)for(n=0;4>n;n++)e.h[t][n]=e.s[t][(n+t)%ha]}function ba(e){for(var t=1;4>t;t++)for(var n=0;4>n;n++)e.s[t][(n+t)%ha]=e.h[t][n];for(t=1;4>t;t++)for(n=0;4>n;n++)e.h[t][n]=e.s[t][n]}function ya(e){e[0]=wa[e[0]],e[1]=wa[e[1]],e[2]=wa[e[2]],e[3]=wa[e[3]]}var wa=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],Ia=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],_a=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Ea=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],ka=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],Sa=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],Ca=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],Ta=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],Aa=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function Ra(e,t){e=new da(xa(e));for(var n,i=(t=ua(t)).splice(0,16),r="";i.length;){n=16-i.length;for(var a=0;a<n;a++)i.push(0);for(fa(n=e,i),ga(n,0),i=1;i<n.j;++i){ma(n,wa),va(n),a=n.h;for(var s=n.s[0],o=0;4>o;o++)s[0]=a[0][o],s[1]=a[1][o],s[2]=a[2][o],s[3]=a[3][o],a[0][o]=Ea[s[0]]^ka[s[1]]^s[2]^s[3],a[1][o]=s[0]^Ea[s[1]]^ka[s[2]]^s[3],a[2][o]=s[0]^s[1]^Ea[s[2]]^ka[s[3]],a[3][o]=ka[s[0]]^s[1]^s[2]^Ea[s[3]];ga(n,i)}ma(n,wa),va(n),ga(n,n.j),r+=la(pa(n)),i=t.splice(0,16)}return r}function Pa(e,t){e=new da(xa(e));for(var n=[],i=0;i<t.length;i+=2)n.push(parseInt(t.substring(i,i+2),16));var r=n.splice(0,16);for(t="";r.length;){for(fa(i=e,r),ga(i,i.j),r=1;r<i.j;++r){ba(i),ma(i,Ia),ga(i,i.j-r);for(var a=i.h,s=i.s[0],o=0;4>o;o++)s[0]=a[0][o],s[1]=a[1][o],s[2]=a[2][o],s[3]=a[3][o],a[0][o]=Aa[s[0]]^Ca[s[1]]^Ta[s[2]]^Sa[s[3]],a[1][o]=Sa[s[0]]^Aa[s[1]]^Ca[s[2]]^Ta[s[3]],a[2][o]=Ta[s[0]]^Sa[s[1]]^Aa[s[2]]^Ca[s[3]],a[3][o]=Ca[s[0]]^Ta[s[1]]^Sa[s[2]]^Aa[s[3]]}if(ba(i),ma(i,Ia),ga(i,0),8192>=(i=pa(i)).length)i=String.fromCharCode.apply(null,i);else{for(r="",a=0;a<i.length;a+=8192)r+=String.fromCharCode.apply(null,Y(i,a,a+8192));i=r}t+=i,r=n.splice(0,16)}return t.replace(/(\x00)+$/,"")}function xa(e){for(var t=32-(e=ua(e.substring(0,32))).length,n=0;n<t;n++)e.push(0);return e}function Oa(e){var t=[];return Na(new Da,e,t),t.join("")}function Da(){}function Na(e,t,n){if(null==t)n.push("null");else{if("object"==typeof t){if(w(t)){var i=t;t=i.length,n.push("[");for(var r="",a=0;a<t;a++)n.push(r),Na(e,i[a],n),r=",";return void n.push("]")}if(!(t instanceof String||t instanceof Number||t instanceof Boolean)){for(i in n.push("{"),r="",t)Object.prototype.hasOwnProperty.call(t,i)&&("function"!=typeof(a=t[i])&&(n.push(r),Ua(i,n),n.push(":"),Na(e,a,n),r=","));return void n.push("}")}t=t.valueOf()}switch(typeof t){case"string":Ua(t,n);break;case"number":n.push(isFinite(t)&&!isNaN(t)?String(t):"null");break;case"boolean":n.push(String(t));break;case"function":n.push("null");break;default:throw Error("Unknown type: "+typeof t)}}}var La={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ma=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ua(e,t){t.push('"',e.replace(Ma,(function(e){var t=La[e];return t||(t="\\u"+(65536|e.charCodeAt(0)).toString(16).substr(1),La[e]=t),t})),'"')}function Fa(e){this.a=e}function ja(){}function Ba(e){this.a=e}function Va(e){if(!e.a)return!1;try{return e.a.setItem("__sak","1"),e.a.removeItem("__sak"),!0}catch(e){return!1}}function za(){var e=null;try{e=window.localStorage||null}catch(e){}this.a=e}function Ha(){var e=null;try{e=window.sessionStorage||null}catch(e){}this.a=e}function Wa(e,t){this.g=e,this.a=t+"::"}Fa.prototype.set=function(e,t){f(t)?this.a.set(e,Oa(t)):this.a.ra(e)},Fa.prototype.get=function(e){try{var t=this.a.get(e)}catch(e){return}if(null!==t)try{return JSON.parse(t)}catch(e){throw"Storage: Invalid value was encountered"}},N(ja,ia),ja.prototype.clear=function(){var e=fe(this.ha(!0)),t=this;j(e,(function(e){t.ra(e)}))},N(Ba,ja),(e=Ba.prototype).set=function(e,t){try{this.a.setItem(e,t)}catch(e){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded"}},e.get=function(e){if(!p(e=this.a.getItem(e))&&null!==e)throw"Storage mechanism: Invalid value was encountered";return e},e.ra=function(e){this.a.removeItem(e)},e.ha=function(e){var t=0,n=this.a,i=new de;return i.next=function(){if(t>=n.length)throw le;var i=n.key(t++);if(e)return i;if(!p(i=n.getItem(i)))throw"Storage mechanism: Invalid value was encountered";return i},i},e.clear=function(){this.a.clear()},e.key=function(e){return this.a.key(e)},N(za,Ba),N(Ha,Ba),N(Wa,ja),Wa.prototype.set=function(e,t){this.g.set(this.a+e,t)},Wa.prototype.get=function(e){return this.g.get(this.a+e)},Wa.prototype.ra=function(e){this.g.ra(this.a+e)},Wa.prototype.ha=function(e){var t=this.g.ha(!0),n=this,i=new de;return i.next=function(){for(var i=t.next();i.substr(0,n.a.length)!=n.a;)i=t.next();return e?i.substr(n.a.length):n.g.get(i)},i},Va(new za);var Ga=new Ha,qa=new Fa(Va(Ga)?new Wa(Ga,"firebaseui"):null),Ka={name:"pendingEmailCredential",storage:qa},Ja={name:"redirectStatus",storage:qa},Ya={name:"redirectUrl",storage:qa},$a={name:"emailForSignIn",storage:new Fa(new ra(3600,"/"))},Xa={name:"pendingEncryptedCredential",storage:new Fa(new ra(3600,"/"))};function Za(e,t){return e.storage.get(t?e.name+":"+t:e.name)}function Qa(e,t){e.storage.a.ra(t?e.name+":"+t:e.name)}function es(e,t,n){e.storage.set(n?e.name+":"+n:e.name,t)}function ts(e){return Za(Ya,e)||null}function ns(e){return oa(e=Za(Ka,e)||null)}function is(e){Qa(Ka,e)}function rs(e,t){es(Ka,sa(e),t)}function as(e){return(e=Za(Ja,e)||null)&&void 0!==e.tenantId?new ca(e.tenantId):null}function ss(){this.W={}}function os(e,t,n){if(t.toLowerCase()in e.W)throw Error("Configuration "+t+" has already been defined.");e.W[t.toLowerCase()]=n}function cs(e,t,n){if(!(t.toLowerCase()in e.W))throw Error("Configuration "+t+" is not defined.");e.W[t.toLowerCase()]=n}function us(e,t){if(!(e=e.get(t)))throw Error("Configuration "+t+" is required.");return e}function ls(){this.g=void 0,this.a={}}function ds(e,t,n,i){for(var r=0;r<t.length;r++){var a=t.charAt(r);e.a[a]||(e.a[a]=new ls),e=e.a[a]}if(i&&void 0!==e.g)throw Error('The collection already contains the key "'+t+'"');e.g=n}function hs(e,t){for(var n in void 0!==e.g&&t.push(e.g),e.a)hs(e.a[n],t)}function fs(e,t,n){for(var i in void 0!==e.g&&n.push(t),e.a)fs(e.a[i],t+i,n)}function ps(e){for(this.a=e,this.g=new ls,e=0;e<this.a.length;e++){var t=this.g.get("+"+this.a[e].b);t?t.push(this.a[e]):this.g.add("+"+this.a[e].b,[this.a[e]])}}function gs(e,t){var n={},i=0;for(void 0!==(e=e.g).g&&(n[i]=e.g);i<t.length;i++){var r=t.charAt(i);if(!(r in e.a))break;void 0!==(e=e.a[r]).g&&(n[i]=e.g)}for(var a in n)if(n.hasOwnProperty(a))return n[a];return[]}function ms(e){for(var t=0;t<ws.length;t++)if(ws[t].c===e)return ws[t];return null}function vs(e){e=e.toUpperCase();for(var t=[],n=0;n<ws.length;n++)ws[n].f===e&&t.push(ws[n]);return t}function bs(e){if(0<e.length&&"+"==e.charAt(0)){e=e.substring(1);for(var t=[],n=0;n<ws.length;n++)ws[n].b==e&&t.push(ws[n]);e=t}else e=vs(e);return e}function ys(e){e.sort((function(e,t){return e.name.localeCompare(t.name,"en")}))}ss.prototype.get=function(e){if(!(e.toLowerCase()in this.W))throw Error("Configuration "+e+" is not defined.");return this.W[e.toLowerCase()]},(e=ls.prototype).set=function(e,t){ds(this,e,t,!1)},e.add=function(e,t){ds(this,e,t,!0)},e.get=function(e){e:{for(var t=this,n=0;n<e.length;n++)if(!(t=t.a[e.charAt(n)])){e=void 0;break e}e=t}return e?e.g:void 0},e.la=function(){var e=[];return hs(this,e),e},e.ja=function(){var e=[];return fs(this,"",e),e},e.clear=function(){this.a={},this.g=void 0};var ws=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"Åland Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"Côte d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Curaçao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"Réunion",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barthélemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"São Tomé and Príncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];ys(ws);var Is=new ps(ws);function _s(e,t){this.a=e,this.Aa=t}function Es(e){e=$(e);var t=gs(Is,e);return 0<t.length?new _s("1"==t[0].b?"1-US-0":t[0].c,$(e.substr(t[0].b.length+1))):null}function ks(e){var t=ms(e.a);if(!t)throw Error("Country ID "+e.a+" not found.");return"+"+t.b+e.Aa}function Ss(e,t){for(var n=0;n<e.length;n++)if(!H(Cs,e[n])&&(null!==Ts&&e[n]in Ts||H(t,e[n])))return e[n];return null}var Cs=["emailLink","password","phone"],Ts={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function As(){this.a=new ss,os(this.a,"autoUpgradeAnonymousUsers"),os(this.a,"callbacks"),os(this.a,"credentialHelper",io),os(this.a,"immediateFederatedRedirect",!1),os(this.a,"popupMode",!1),os(this.a,"privacyPolicyUrl"),os(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),os(this.a,"queryParameterForWidgetMode","mode"),os(this.a,"signInFlow"),os(this.a,"signInOptions"),os(this.a,"signInSuccessUrl"),os(this.a,"siteName"),os(this.a,"tosUrl"),os(this.a,"widgetUrl"),os(this.a,"adminRestrictedOperation")}function Rs(e){var t=!!e.a.get("autoUpgradeAnonymousUsers");return t&&!$s(e)&&Yr('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),t}function Ps(e){e=e.a.get("signInOptions")||[];for(var t=[],n=0;n<e.length;n++){var i=e[n];(i=E(i)?i:{provider:i}).provider&&t.push(i)}return t}function xs(e,t){e=Ps(e);for(var n=0;n<e.length;n++)if(e[n].provider===t)return e[n];return null}function Os(e){return Ps(e).map((function(e){return e.provider}))}function Ds(e,t){e=Ns(e);for(var n=0;n<e.length;n++)if(e[n].providerId===t)return e[n];return null}function Ns(e){return Ps(e).map((function(e){if(Ts[e.provider]||H(co,e.provider)){for(var t in e={providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?_t(kt(e.iconUrl)).toString():null})null===e[t]&&delete e[t];return e}return{providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?_t(kt(e.iconUrl)).toString():null,Ob:e.loginHintKey||null}}))}function Ls(e){var t,n=xs(e,r.default.auth.GoogleAuthProvider.PROVIDER_ID);if(t=n&&n.clientId){e:{if("http:"===(window.location&&window.location.protocol)||"https:"===(window.location&&window.location.protocol))for(i in e=e.a.get("credentialHelper"),ro)if(ro[i]===e){var i=ro[i];break e}i=io}t=i===no}return t&&n.clientId||null}function Ms(e){return!!((e=xs(e,r.default.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.status)}function Us(e){return!(!(e=e.a.get("adminRestrictedOperation")||null)||!e.status)}function Fs(e,t){return e=(e=xs(e,t))&&e.scopes,Array.isArray(e)?e:[]}function js(e,t){return E(e=(e=xs(e,t))&&e.customParameters)?(e=oe(e),t===r.default.auth.GoogleAuthProvider.PROVIDER_ID&&delete e.login_hint,t===r.default.auth.GithubAuthProvider.PROVIDER_ID&&delete e.login,e):null}function Bs(e){if(!(e=xs(e,r.default.auth.PhoneAuthProvider.PROVIDER_ID)))return null;var t=e.whitelistedCountries,n=e.blacklistedCountries;if(void 0!==t&&(!Array.isArray(t)||0==t.length))throw Error("WhitelistedCountries must be a non-empty array.");if(void 0!==n&&!Array.isArray(n))throw Error("BlacklistedCountries must be an array.");if(t&&n)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!t&&!n)return ws;if(e=[],t){n={};for(var i=0;i<t.length;i++)for(var a=bs(t[i]),s=0;s<a.length;s++)n[a[s].c]=a[s];for(var o in n)n.hasOwnProperty(o)&&e.push(n[o])}else{for(o={},t=0;t<n.length;t++)for(a=bs(n[t]),i=0;i<a.length;i++)o[a[i].c]=a[i];for(a=0;a<ws.length;a++)null!==o&&ws[a].c in o||e.push(ws[a])}return e}function Vs(e){return us(e.a,"queryParameterForWidgetMode")}function zs(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Qr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){sr(t)}}return null}function Hs(e){var t=e.a.get("tosUrl")||null,n=e.a.get("privacyPolicyUrl")||null;if(n&&!t&&Qr("Term of Service URL is missing, the link will not be displayed."),t&&n){if("function"==typeof n)return n;if("string"==typeof n)return function(){sr(n)}}return null}function Ws(e){return!(e=xs(e,r.default.auth.EmailAuthProvider.PROVIDER_ID))||void 0===e.requireDisplayName||!!e.requireDisplayName}function Gs(e){return!(!(e=xs(e,r.default.auth.EmailAuthProvider.PROVIDER_ID))||e.signInMethod!==r.default.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function qs(e){var t=!!e.a.get("immediateFederatedRedirect"),n=Os(e);return e=Ks(e),t&&1==n.length&&!H(Cs,n[0])&&e==ao}function Ks(e){for(var t in e=e.a.get("signInFlow"),so)if(so[t]==e)return so[t];return ao}function Js(e){return Xs(e).signInSuccess||null}function Ys(e){return Xs(e).signInSuccessWithAuthResult||null}function $s(e){return Xs(e).signInFailure||null}function Xs(e){return e.a.get("callbacks")||{}}var Zs,Qs,eo,to,no="googleyolo",io="none",ro={nc:no,NONE:io},ao="redirect",so={qc:"popup",rc:ao},oo={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},co=["anonymous"],uo=["sitekey","tabindex","callback","expired-callback"],lo={};function ho(e,t,n,i){lo[e].apply(null,Array.prototype.slice.call(arguments,1))}function fo(e){return e.classList?e.classList:p(e=e.className)&&e.match(/\S+/g)||[]}function po(e,t){return e.classList?e.classList.contains(t):H(fo(e),t)}function go(e,t){e.classList?e.classList.add(t):po(e,t)||(e.className+=0<e.className.length?" "+t:t)}function mo(e,t){e.classList?e.classList.remove(t):po(e,t)&&(e.className=B(fo(e),(function(e){return e!=t})).join(" "))}function vo(e){var t=e.type;switch(p(t)&&t.toLowerCase()){case"checkbox":case"radio":return e.checked?e.value:null;case"select-one":return 0<=(t=e.selectedIndex)?e.options[t].value:null;case"select-multiple":t=[];for(var n,i=0;n=e.options[i];i++)n.selected&&t.push(n.value);return t.length?t:null;default:return null!=e.value?e.value:null}}function bo(e,t){var n=e.type;switch(p(n)&&n.toLowerCase()){case"checkbox":case"radio":e.checked=t;break;case"select-one":if(e.selectedIndex=-1,p(t))for(var i=0;n=e.options[i];i++)if(n.value==t){n.selected=!0;break}break;case"select-multiple":for(p(t)&&(t=[t]),i=0;n=e.options[i];i++)if(n.selected=!1,t)for(var r,a=0;r=t[a];a++)n.value==r&&(n.selected=!0);break;default:e.value=null!=t?t:""}}function yo(e,t,n,i,r,a){if(rt&&!ft("525"))return!0;if(st&&r)return wo(e);if(r&&!i)return!1;if(!it&&("number"==typeof t&&(t=Io(t)),(!n||st)&&(17==t||18==t||st&&91==t)||st&&16==t&&(i||a)))return!1;if((rt||tt)&&i&&n)switch(e){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(et&&i&&t==e)return!1;switch(e){case 13:return!it||!a&&!r&&!(n&&i);case 27:return!(rt||tt||it)}return(!it||!(i||r||a))&&wo(e)}function wo(e){if(48<=e&&57>=e||96<=e&&106>=e||65<=e&&90>=e||(rt||tt)&&0==e)return!0;switch(e){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return it;default:return!1}}function Io(e){if(it)e=function(e){switch(e){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return e}}(e);else if(st&&rt&&93===e)e=91;return e}function _o(e){mi.call(this),this.a=e,ri(e,"keydown",this.g,!1,this),ri(e,"click",this.h,!1,this)}function Eo(e,t){var n=new So(t);if(vi(e,n)){n=new ko(t);try{vi(e,n)}finally{t.stopPropagation()}}}function ko(e){Kn.call(this,e.a),this.type="action"}function So(e){Kn.call(this,e.a),this.type="beforeaction"}function Co(e){mi.call(this),this.a=e,e=et?"focusout":"blur",this.g=ri(this.a,et?"focusin":"focus",this,!et),this.h=ri(this.a,e,this,!et)}function To(e,t){mi.call(this),this.g=e||1,this.a=t||h,this.h=A(this.gc,this),this.j=O()}function Ao(e){e.Ka=!1,e.aa&&(e.a.clearTimeout(e.aa),e.aa=null)}function Ro(e){Un.call(this),this.g=e,this.a={}}N(_o,mi),_o.prototype.g=function(e){(13==e.keyCode||rt&&3==e.keyCode)&&Eo(this,e)},_o.prototype.h=function(e){Eo(this,e)},_o.prototype.o=function(){_o.K.o.call(this),oi(this.a,"keydown",this.g,!1,this),oi(this.a,"click",this.h,!1,this),delete this.a},N(ko,Kn),N(So,Kn),N(Co,mi),Co.prototype.handleEvent=function(e){var t=new Kn(e.a);t.type="focusin"==e.type||"focus"==e.type?"focusin":"focusout",vi(this,t)},Co.prototype.o=function(){Co.K.o.call(this),ci(this.g),ci(this.h),delete this.a},N(To,mi),(e=To.prototype).Ka=!1,e.aa=null,e.gc=function(){if(this.Ka){var e=O()-this.j;0<e&&e<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-e):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),vi(this,"tick"),this.Ka&&(Ao(this),this.start()))}},e.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=O())},e.o=function(){To.K.o.call(this),Ao(this),delete this.a},N(Ro,Un);var Po=[];function xo(e,t,n,i){w(n)||(n&&(Po[0]=n.toString()),n=Po);for(var r=0;r<n.length;r++){var a=ri(t,n[r],i||e.handleEvent,!1,e.g||e);if(!a)break;e.a[a.key]=a}}function Oo(e){se(e.a,(function(e,t){this.a.hasOwnProperty(t)&&ci(e)}),e),e.a={}}function Do(e){mi.call(this),this.a=null,this.g=e,e=et||tt||rt&&!ft("531")&&"TEXTAREA"==e.tagName,this.h=new Ro(this),xo(this.h,this.g,e?["keydown","paste","cut","drop","input"]:"input",this)}function No(e){null!=e.a&&(h.clearTimeout(e.a),e.a=null)}function Lo(e){return(e=new Kn(e.a)).type="input",e}function Mo(e,t){mi.call(this),e&&(this.Oa&&Vo(this),this.qa=e,this.Na=ri(this.qa,"keypress",this,t),this.Ya=ri(this.qa,"keydown",this.Jb,t,this),this.Oa=ri(this.qa,"keyup",this.Kb,t,this))}Ro.prototype.o=function(){Ro.K.o.call(this),Oo(this)},Ro.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},N(Do,mi),Do.prototype.handleEvent=function(e){if("input"==e.type)et&&ft(10)&&0==e.keyCode&&0==e.j||(No(this),vi(this,Lo(e)));else if("keydown"!=e.type||function(e){if(e.altKey&&!e.ctrlKey||e.metaKey||112<=e.keyCode&&123>=e.keyCode)return!1;if(wo(e.keyCode))return!0;switch(e.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!it;default:return 166>e.keyCode||183<e.keyCode}}(e)){var t="keydown"==e.type?this.g.value:null;et&&229==e.keyCode&&(t=null);var n=Lo(e);No(this),this.a=function(e,t){if(_(e))t&&(e=A(e,t));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=A(e.handleEvent,e)}return 2147483647<Number(0)?-1:h.setTimeout(e,0)}((function(){this.a=null,this.g.value!=t&&vi(this,n)}),this)}},Do.prototype.o=function(){Do.K.o.call(this),this.h.m(),No(this),delete this.g},N(Mo,mi),(e=Mo.prototype).qa=null,e.Na=null,e.Ya=null,e.Oa=null,e.R=-1,e.X=-1,e.Ua=!1;var Uo={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Fo={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},jo=!rt||ft("525"),Bo=st&&it;function Vo(e){e.Na&&(ci(e.Na),ci(e.Ya),ci(e.Oa),e.Na=null,e.Ya=null,e.Oa=null),e.qa=null,e.R=-1,e.X=-1}function zo(e,t,n,i){Kn.call(this,i),this.type="key",this.keyCode=e,this.j=t,this.repeat=n}function Ho(e,t,n,i){this.top=e,this.right=t,this.bottom=n,this.left=i}function Wo(e,t){var n=Jt(e);return n.defaultView&&n.defaultView.getComputedStyle&&(e=n.defaultView.getComputedStyle(e,null))&&(e[t]||e.getPropertyValue(t))||""}function Go(e){try{var t=e.getBoundingClientRect()}catch(e){return{left:0,top:0,right:0,bottom:0}}return et&&e.ownerDocument.body&&(e=e.ownerDocument,t.left-=e.documentElement.clientLeft+e.body.clientLeft,t.top-=e.documentElement.clientTop+e.body.clientTop),t}function qo(e){var t=Jt(e),n=new jt(0,0),i=t?Jt(t):document;return e==(i=!et||9<=Number(dt)||"CSS1Compat"==Vt(i).a.compatMode?i.documentElement:i.body)||(e=Go(e),t=qt(i=Vt(t).a),i=i.parentWindow||i.defaultView,t=et&&ft("10")&&i.pageYOffset!=t.scrollTop?new jt(t.scrollLeft,t.scrollTop):new jt(i.pageXOffset||t.scrollLeft,i.pageYOffset||t.scrollTop),n.a=e.left+t.a,n.g=e.top+t.g),n}(e=Mo.prototype).Jb=function(e){(rt||tt)&&(17==this.R&&!e.ctrlKey||18==this.R&&!e.altKey||st&&91==this.R&&!e.metaKey)&&(this.X=this.R=-1),-1==this.R&&(e.ctrlKey&&17!=e.keyCode?this.R=17:e.altKey&&18!=e.keyCode?this.R=18:e.metaKey&&91!=e.keyCode&&(this.R=91)),jo&&!yo(e.keyCode,this.R,e.shiftKey,e.ctrlKey,e.altKey,e.metaKey)?this.handleEvent(e):(this.X=Io(e.keyCode),Bo&&(this.Ua=e.altKey))},e.Kb=function(e){this.X=this.R=-1,this.Ua=e.altKey},e.handleEvent=function(e){var t=e.a,n=t.altKey;if(et&&"keypress"==e.type)var i=this.X,r=13!=i&&27!=i?t.keyCode:0;else(rt||tt)&&"keypress"==e.type?(i=this.X,r=0<=t.charCode&&63232>t.charCode&&wo(i)?t.charCode:0):Qe&&!rt?r=wo(i=this.X)?t.keyCode:0:("keypress"==e.type?(Bo&&(n=this.Ua),t.keyCode==t.charCode?32>t.keyCode?(i=t.keyCode,r=0):(i=this.X,r=t.charCode):(i=t.keyCode||this.X,r=t.charCode||0)):(i=t.keyCode||this.X,r=t.charCode||0),st&&63==r&&224==i&&(i=191));var a=i=Io(i);i?63232<=i&&i in Uo?a=Uo[i]:25==i&&e.shiftKey&&(a=9):t.keyIdentifier&&t.keyIdentifier in Fo&&(a=Fo[t.keyIdentifier]),it&&jo&&"keypress"==e.type&&!yo(a,this.R,e.shiftKey,e.ctrlKey,n,e.metaKey)||(e=a==this.R,this.R=a,(t=new zo(a,r,e,t)).altKey=n,vi(this,t))},e.N=function(){return this.qa},e.o=function(){Mo.K.o.call(this),Vo(this)},N(zo,Kn),Ho.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},Ho.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},Ho.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},Ho.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};var Ko={thin:2,medium:4,thick:6};function Jo(e,t){if("none"==(e.currentStyle?e.currentStyle[t+"Style"]:null))return 0;var n=e.currentStyle?e.currentStyle[t+"Width"]:null;if(n in Ko)e=Ko[n];else if(/^\d+px?$/.test(n))e=parseInt(n,10);else{t=e.style.left;var i=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,e.style.left=n,n=e.style.pixelLeft,e.style.left=t,e.runtimeStyle.left=i,e=+n}return e}function Yo(){}function $o(e){mi.call(this),this.s=e||Vt(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}function Xo(e,t){return e.g?Ht(t,e.g||e.s.a):null}function Zo(e){return e.L||(e.L=new Ro(e)),e.L}function Qo(e,t){e.Ea&&j(e.Ea,t,void 0)}function ec(e,t){var n=$t(e,"firebaseui-textfield");t?(mo(e,"firebaseui-input-invalid"),go(e,"firebaseui-input"),n&&mo(n,"firebaseui-textfield-invalid")):(mo(e,"firebaseui-input"),go(e,"firebaseui-input-invalid"),n&&go(n,"firebaseui-textfield-invalid"))}function tc(e,t,n){Bn(e,R(Vn,t=new Do(t))),xo(Zo(e),t,"input",n)}function nc(e,t,n){Bn(e,R(Vn,t=new Mo(t))),xo(Zo(e),t,"key",(function(e){13==e.keyCode&&(e.stopPropagation(),e.preventDefault(),n(e))}))}function ic(e,t,n){Bn(e,R(Vn,t=new _o(t))),xo(Zo(e),t,"action",(function(e){e.stopPropagation(),e.preventDefault(),n(e)}))}function rc(e){go(e,"firebaseui-hidden")}function ac(e,t){t&&Yt(e,t),mo(e,"firebaseui-hidden")}function sc(e){return!po(e,"firebaseui-hidden")&&"none"!=e.style.display}function oc(e){var t=(e=e||{}).email,n=e.disabled,i='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return i=e.wc?i+"Enter new email address":i+"Email",i+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+mn(null!=t?t:"")+'"'+(n?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',hn(i)}function cc(e){var t='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return t=(e=(e=e||{}).label)?t+cn(e):t+"Next",hn(t+"</button>")}function uc(){var e=""+cc({label:pn("Sign In")});return hn(e)}function lc(){var e=""+cc({label:pn("Save")});return hn(e)}function dc(){var e=""+cc({label:pn("Continue")});return hn(e)}function hc(e){var t='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return t=(e=(e=e||{}).label)?t+cn(e):t+"Choose password",hn(t+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function fc(){var e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return hn((e={}.current?e+"Current password":e+"Password")+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function pc(){return hn('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function gc(e){var t='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return t=(e=(e=e||{}).label)?t+cn(e):t+"Cancel",hn(t+"</button>")}function mc(e){var t="";return e.F&&e.D&&(t+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),hn(t)}function vc(e){var t="";return e.F&&e.D&&(t+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),hn(t)}function bc(e){return e='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+cn(e.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',hn(e)}function yc(e){var t=e.content;return e=e.Ab,hn('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(e?" "+mn(e):"")+'">'+cn(t)+"</dialog>")}function wc(e){var t=e.message;return hn(yc({content:gn('<div class="firebaseui-dialog-icon-wrapper"><div class="'+mn(e.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+cn(t)+"</div>")}))}function Ic(e){for(var t='<div class="firebaseui-list-box-actions">',n=(e=e.items).length,i=0;i<n;i++){var r=e[i];t+='<button type="button" data-listboxid="'+mn(r.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(r.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+mn(r.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+cn(r.label)+"</div></button>"}return t=""+yc({Ab:pn("firebaseui-list-box-dialog"),content:gn(t+"</div>")}),hn(t)}function _c(e){return hn((e=e||{}).tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}function Ec(e,t){return dn((e=(e=e||{}).ga).S?e.S:t.hb[e.providerId]?""+t.hb[e.providerId]:e.providerId&&0==e.providerId.indexOf("saml.")||e.providerId&&0==e.providerId.indexOf("oidc.")?e.providerId.substring(5):""+e.providerId)}function kc(e){Tc(e,"upgradeElement")}function Sc(e){Tc(e,"downgradeElements")}b(Yo),Yo.prototype.a=0,N($o,mi),(e=$o.prototype).Lb=Yo.Xa(),e.N=function(){return this.g},e.Za=function(e){if(this.Y&&this.Y!=e)throw Error("Method not supported");$o.K.Za.call(this,e)},e.kb=function(){this.g=this.s.a.createElement("DIV")},e.render=function(e){if(this.na)throw Error("Component already rendered");this.g||this.kb(),e?e.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},e.v=function(){this.na=!0,Qo(this,(function(e){!e.na&&e.N()&&e.v()}))},e.ya=function(){Qo(this,(function(e){e.na&&e.ya()})),this.L&&Oo(this.L),this.na=!1},e.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Qo(this,(function(e){e.m()})),this.g&&Kt(this.g),this.Y=this.g=this.oa=this.Ea=null,$o.K.o.call(this)},e.removeChild=function(e,t){if(e){var n=p(e)?e:e.cb||(e.cb=":"+(e.Lb.a++).toString(36));if(this.oa&&n?e=(null!==(e=this.oa)&&n in e?e[n]:void 0)||null:e=null,n&&e){var i=this.oa;if(n in i&&delete i[n],W(this.Ea,e),t&&(e.ya(),e.g&&Kt(e.g)),null==(t=e))throw Error("Unable to set parent component");t.Y=null,$o.K.Za.call(t,null)}}if(!e)throw Error("Child is not in parent component");return e},bc.a="firebaseui.auth.soy2.element.infoBar",wc.a="firebaseui.auth.soy2.element.progressDialog",Ic.a="firebaseui.auth.soy2.element.listBoxDialog",_c.a="firebaseui.auth.soy2.element.busyIndicator";var Cc=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function Tc(e,t){e&&window.componentHandler&&window.componentHandler[t]&&Cc.forEach((function(n){po(e,n)&&window.componentHandler[t](e),j(zt(n,e),(function(e){window.componentHandler[t](e)}))}))}function Ac(e,t,n){if(Rc.call(this),document.body.appendChild(e),e.showModal||window.dialogPolyfill.registerDialog(e),e.showModal(),kc(e),t&&ic(this,e,(function(t){var n=e.getBoundingClientRect();(t.clientX<n.left||n.left+n.width<t.clientX||t.clientY<n.top||n.top+n.height<t.clientY)&&Rc.call(this)})),!n){var i=this.N().parentElement||this.N().parentNode;if(i){var r=this;this.da=function(){if(e.open){var t=e.getBoundingClientRect().height,n=i.getBoundingClientRect().height,a=i.getBoundingClientRect().top-document.body.getBoundingClientRect().top,s=i.getBoundingClientRect().left-document.body.getBoundingClientRect().left,o=e.getBoundingClientRect().width,c=i.getBoundingClientRect().width;e.style.top=(a+(n-t)/2).toString()+"px",t=s+(c-o)/2,e.style.left=t.toString()+"px",e.style.right=(document.body.getBoundingClientRect().width-t-o).toString()+"px"}else window.removeEventListener("resize",r.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Rc(){var e=Pc.call(this);e&&(Sc(e),e.open&&e.close(),Kt(e),this.da&&window.removeEventListener("resize",this.da))}function Pc(){return Ht("firebaseui-id-dialog")}function xc(){Kt(Oc.call(this))}function Oc(){return Xo(this,"firebaseui-id-info-bar")}function Dc(){return Xo(this,"firebaseui-id-dismiss-info-bar")}var Nc={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function Lc(e,t,n){for(var i in qn.call(this,e,t),n)this[i]=n[i]}function Mc(e,t,n,i,r){$o.call(this,n),this.fb=e,this.eb=t,this.Fa=!1,this.Ga=i||null,this.A=this.ca=null,this.Z=oe(Nc),ue(this.Z,r||{})}function Uc(e){return e.N().parentElement||e.N().parentNode}function Fc(e,t,n){nc(e,t,(function(){n.focus()}))}function jc(e,t,n){nc(e,t,(function(){n()}))}function Bc(e,t,n){t=(e=e||{}).Va;var i=e.ia;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+oc(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?gc(null):"")+cc(null)+'</div></div><div class="firebaseui-card-footer">'+(i?vc(n):mc(n))+"</div></form></div>",hn(e)}function Vc(e,t,n){return t=(e=e||{}).ia,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+oc(e)+fc()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+pc()+'</div><div class="firebaseui-form-actions">'+uc()+'</div></div><div class="firebaseui-card-footer">'+(t?vc(n):mc(n))+"</div></form></div>",hn(e)}function zc(e,t,n){var i=(e=e||{}).Tb;t=e.Ta;var r=e.ia,a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+oc(e);return i?(e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+mn(null!=(e=(e=e||{}).name)?e:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',e=hn(e)):e="",n=a+e+hc(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?gc(null):"")+lc()+'</div></div><div class="firebaseui-card-footer">'+(r?vc(n):mc(n))+"</div></form></div>",hn(n)}function Hc(e,t,n){return t=(e=e||{}).Ta,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+oc(e)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?gc(null):"")+cc({label:pn("Send")})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(e)}function Wc(e,t,n){t=e.G;var i="";return i+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Follow the instructions sent to <strong>"+cn(e.email)+"</strong> to recover your password")+'</p></div><div class="firebaseui-card-actions">',t&&(i+='<div class="firebaseui-form-actions">'+cc({label:pn("Done")})+"</div>"),i+='</div><div class="firebaseui-card-footer">'+mc(n)+"</div></div>",hn(i)}function Gc(e,t,n){return hn('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+_c(null)+"</div></div>")}function qc(e,t,n){return hn('<div class="firebaseui-container firebaseui-id-page-spinner">'+_c({tb:!0})+"</div>")}function Kc(){return hn('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}function Jc(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+(e="A sign-in email with additional instructions was sent to <strong>"+cn(e.email)+"</strong>. Check your email to complete sign-in.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+hn('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>')+'</div><div class="firebaseui-form-actions">'+gc({label:pn("Back")})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(t)}function Yc(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+hn('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+gc({label:pn("Back")})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(e)}function $c(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+oc(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+gc(null)+cc(null)+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(e)}function Xc(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+gc({label:pn("Dismiss")})+"</div></div></div>";return hn(e)}function Zc(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+gc({label:pn("Dismiss")})+"</div></div></div>";return hn(e)}function Qc(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(e="You’ve already used <strong>"+cn(e.email)+"</strong> to sign in. Enter your password for that account.")+"</p>"+fc()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+pc()+'</div><div class="firebaseui-form-actions">'+uc()+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(t)}function eu(e,t,n){var i=e.email;return t="",e=pn(e=""+Ec(e,n)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+(i="You’ve already used <strong>"+cn(i)+"</strong>. You can connect your <strong>"+cn(e)+"</strong> account with <strong>"+cn(i)+"</strong> by signing in with email link below.")+'<p class="firebaseui-text firebaseui-text-justify">'+(e="For this flow to successfully connect your "+cn(e)+" account with this email, you have to open the link on the same device or browser.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uc()+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(t)}function tu(e,t,n){t="";var i=""+Ec(e,n);return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+(e="You originally intended to connect <strong>"+cn(i=pn(i))+"</strong> to your email account but have opened the link on a different device where you are not signed in.")+'</p><p class="firebaseui-text firebaseui-text-justify">'+(i="If you still want to connect your <strong>"+cn(i)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+dc()+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(t)}function nu(e,t,n){var i=e.email;return t="",e=pn(e=""+Ec(e,n)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(i="You’ve already used <strong>"+cn(i)+"</strong>. Sign in with "+cn(e)+" to continue.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+cc({label:pn("Sign in with "+e)})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(t)}function iu(e,t,n){var i=(e=e||{}).kc;t=e.yb,e=e.Eb;var r='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return i?r+=i="<strong>"+cn(i)+"</strong> is not authorized to view the requested page.":r+="User is not authorized to view the requested page.",r+="</p>",t&&(r+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+(t="Please contact <strong>"+cn(t)+"</strong> for authorization.")+"</p>"),r+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',e&&(r+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),r+='</div><div class="firebaseui-form-actions">'+gc({label:pn("Back")})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(r)}function ru(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="To continue sign in with <strong>"+cn(e.email)+"</strong> on this device, you have to recover the password.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+gc(null)+cc({label:pn("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(t)}function au(e){var t="";return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+('<p class="firebaseui-text">for <strong>'+cn(e.email)+"</strong></p>")+hc(function(e){function t(){}var n={label:pn("New password")};for(var i in t.prototype=e,e=new t,n)e[i]=n[i];return e}(e))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+lc()+"</div></div></form></div>",hn(t)}function su(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",hn(e)}function ou(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",hn(e)}function cu(e){var t=e.G,n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Your sign-in email address has been changed back to <strong>"+cn(e.email)+"</strong>.")+'</p><p class="firebaseui-text">If you didn’t ask to change your sign-in email, it’s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></form></div>",hn(n)}function uu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can’t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",hn(e)}function lu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",hn(e)}function du(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",hn(e)}function hu(e){var t=e.G,n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="You can now sign in with your new email <strong>"+cn(e.email)+"</strong>.")+'</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",hn(n)}function fu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",hn(e)}function pu(e){var t=e.factorId,n=e.phoneNumber;e=e.G;var i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';if("phone"===t)i+=t="The <strong>"+cn(t)+" "+cn(n)+"</strong> was removed as a second authentication step.";else i+="The device or app was removed as a second authentication step.";return i+='</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(e?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></form></div>",hn(i)}function gu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",hn(e)}function mu(e){var t=e.zb;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+cn(e.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',t&&(e+=cc({label:pn("Retry")})),hn(e+"</div></div></div>")}function vu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+cn(e.errorMessage)+"</p></div></div>",hn(e)}function bu(e,t,n){var i=e.Qb;return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+(e="Continue with "+cn(e.jc)+"?")+'</h2><p class="firebaseui-text">'+(i="You originally wanted to sign in with "+cn(i))+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+gc(null)+cc({label:pn("Continue")})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(t)}function yu(e,t,n){var i='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';t=(e=e.Sb).length;for(var r=0;r<t;r++){var a={ga:e[r]},s=n,o=(a=a||{}).ga,c=a,u="";switch((c=c||{}).ga.providerId){case"google.com":u+="firebaseui-idp-google";break;case"github.com":u+="firebaseui-idp-github";break;case"facebook.com":u+="firebaseui-idp-facebook";break;case"twitter.com":u+="firebaseui-idp-twitter";break;case"phone":u+="firebaseui-idp-phone";break;case"anonymous":u+="firebaseui-idp-anonymous";break;case"password":u+="firebaseui-idp-password";break;default:u+="firebaseui-idp-generic"}c=(c='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+mn(dn(u))+' firebaseui-id-idp-button" data-provider-id="'+mn(o.providerId)+'" style="background-color:')+mn(bn(dn((u=(u=(u=a)||{}).ga).ta?u.ta:s.wa[u.providerId]?""+s.wa[u.providerId]:0==u.providerId.indexOf("saml.")?""+s.wa.saml:0==u.providerId.indexOf("oidc.")?""+s.wa.oidc:""+s.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var l=a;u=s,l=(l=l||{}).ga,u=fn(l.za?vn(l.za):u.xa[l.providerId]?vn(u.xa[l.providerId]):0==l.providerId.indexOf("saml.")?vn(u.xa.saml):0==l.providerId.indexOf("oidc.")?vn(u.xa.oidc):vn(u.xa.password)),c=c+mn(vn(u))+'"></span>',"password"==o.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=cn(o.V):o.S?c+=a="Sign in with "+cn(Ec(a,s)):c+="Sign in with email",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=o.S?c+cn(o.S):c+"Email",c+="</span>"):"phone"==o.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=cn(o.V):o.S?c+=a="Sign in with "+cn(Ec(a,s)):c+="Sign in with phone",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=o.S?c+cn(o.S):c+"Phone",c+="</span>"):"anonymous"==o.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=cn(o.V):o.S?c+=a="Sign in with "+cn(Ec(a,s)):c+="Continue as guest",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=o.S?c+cn(o.S):c+"Guest",c+="</span>"):(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=cn(o.V):c+=u="Sign in with "+cn(Ec(a,s)),c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(o.S?cn(o.S):cn(Ec(a,s)))+"</span>"),i+='<li class="firebaseui-list-item">'+(o=hn(c+"</button>"))+"</li>"}return i+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+vc(n)+"</div></div>",hn(i)}function wu(e,t,n){var i,r=(e=e||{}).Gb,a=e.Va;return t=e.ia,e='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+mn(null!=(e=(e=e||{}).Aa)?e:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',i=(e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+hn(e))+(i=r?hn('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):"")+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(a?gc(null):"")+cc({label:pn("Verify")})+'</div></div><div class="firebaseui-card-footer">',t?(t='<p class="firebaseui-tos firebaseui-phone-tos">',t=n.F&&n.D?t+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':t+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",n=hn(t+"</p>")):n=hn('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+mc(n),hn(i+n+"</div></form></div>")}function Iu(e,t,n){var i="";return e='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+cn(t=(e=e||{}).phoneNumber)+"</a>",cn(t),t=i,n='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+"</p>"+(i=hn('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+gc(null)+cc({label:pn("Continue")})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form>",e=hn('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),hn(t+(n+e+"</div>"))}function _u(){return hn('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}function Eu(e,t,n){var i='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';t=(e=e.ec).length;for(var r=0;r<t;r++){var a=e[r],s="",o=cn(a.displayName),c=a.tenantId?a.tenantId:"top-level-project";s+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+mn(c=pn(c))+' firebaseui-id-tenant-selection-button"'+(a.tenantId?'data-tenant-id="'+mn(a.tenantId)+'"':"")+'style="background-color:'+mn(bn(a.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+mn(vn(a.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?s+=cn(a.V):s+=a="Sign in to "+cn(a.displayName),i+='<li class="firebaseui-list-item">'+(s=hn(s+'</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+o+"</span></button>"))+"</li>"}return i+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+vc(n)+"</div></div>",hn(i)}function ku(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+oc(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+cc(null)+'</div></div><div class="firebaseui-card-footer">'+vc(n)+"</div></form></div>",hn(e)}function Su(){return Xo(this,"firebaseui-id-submit")}function Cu(){return Xo(this,"firebaseui-id-secondary-link")}function Tu(e,t){ic(this,Su.call(this),(function(t){e(t)}));var n=Cu.call(this);n&&t&&ic(this,n,(function(e){t(e)}))}function Au(){return Xo(this,"firebaseui-id-password")}function Ru(){return Xo(this,"firebaseui-id-password-error")}function Pu(){var e=Au.call(this),t=Ru.call(this);tc(this,e,(function(){sc(t)&&(ec(e,!0),rc(t))}))}function xu(){var e=Au.call(this),t=Ru.call(this);return vo(e)?(ec(e,!0),rc(t),t=!0):(ec(e,!1),ac(t,dn("Enter your password").toString()),t=!1),t?vo(e):null}function Ou(e,t,n,i,r,a){Mc.call(this,Qc,{email:e},a,"passwordLinking",{F:i,D:r}),this.w=t,this.H=n}N(Lc,qn),N(Mc,$o),(e=Mc.prototype).kb=function(){var e=rn(this.fb,this.eb,this.Z,this.s);kc(e),this.g=e},e.v=function(){if(Mc.K.v.call(this),Ii(Uc(this),new Lc("pageEnter",Uc(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var e=this.Z.F;ic(this,this.bb(),(function(){e()}))}if(this.ab()&&this.Z.D){var t=this.Z.D;ic(this,this.ab(),(function(){t()}))}},e.ya=function(){Ii(Uc(this),new Lc("pageExit",Uc(this),{pageId:this.Ga})),Mc.K.ya.call(this)},e.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,Sc(this.N()),Mc.K.o.call(this)},e.I=function(e,t,n,i){function r(){if(a.T)return null;a.Fa=!1,window.clearTimeout(a.ca),a.ca=null,a.A&&(Sc(a.A),Kt(a.A),a.A=null)}var a=this;return a.Fa?null:(function(e){e.Fa=!0;var t=po(e.N(),"firebaseui-use-spinner");e.ca=window.setTimeout((function(){e.N()&&null===e.A&&(e.A=rn(_c,{tb:t},null,e.s),e.N().appendChild(e.A),kc(e.A))}),500)}(a),e.apply(null,t).then(n,i).then(r,r))},P(Mc.prototype,{a:function(e){xc.call(this);var t=rn(bc,{message:e},null,this.s);this.N().appendChild(t),ic(this,Dc.call(this),(function(){Kt(t)}))},yc:xc,Ac:Oc,zc:Dc,$:function(e,t){e=rn(wc,{Ma:e,message:t},null,this.s),Ac.call(this,e)},h:Rc,Cb:Pc,Cc:function(){return Xo(this,"firebaseui-tos")},bb:function(){return Xo(this,"firebaseui-tos-link")},ab:function(){return Xo(this,"firebaseui-pp-link")},Dc:function(){return Xo(this,"firebaseui-tos-list")}}),Bc.a="firebaseui.auth.soy2.page.signIn",Vc.a="firebaseui.auth.soy2.page.passwordSignIn",zc.a="firebaseui.auth.soy2.page.passwordSignUp",Hc.a="firebaseui.auth.soy2.page.passwordRecovery",Wc.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent",Gc.a="firebaseui.auth.soy2.page.callback",qc.a="firebaseui.auth.soy2.page.spinner",Kc.a="firebaseui.auth.soy2.page.blank",Jc.a="firebaseui.auth.soy2.page.emailLinkSignInSent",Yc.a="firebaseui.auth.soy2.page.emailNotReceived",$c.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation",Xc.a="firebaseui.auth.soy2.page.differentDeviceError",Zc.a="firebaseui.auth.soy2.page.anonymousUserMismatch",Qc.a="firebaseui.auth.soy2.page.passwordLinking",eu.a="firebaseui.auth.soy2.page.emailLinkSignInLinking",tu.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice",nu.a="firebaseui.auth.soy2.page.federatedLinking",iu.a="firebaseui.auth.soy2.page.unauthorizedUser",ru.a="firebaseui.auth.soy2.page.unsupportedProvider",au.a="firebaseui.auth.soy2.page.passwordReset",su.a="firebaseui.auth.soy2.page.passwordResetSuccess",ou.a="firebaseui.auth.soy2.page.passwordResetFailure",cu.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess",uu.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure",lu.a="firebaseui.auth.soy2.page.emailVerificationSuccess",du.a="firebaseui.auth.soy2.page.emailVerificationFailure",hu.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess",fu.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure",pu.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess",gu.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure",mu.a="firebaseui.auth.soy2.page.recoverableError",vu.a="firebaseui.auth.soy2.page.unrecoverableError",bu.a="firebaseui.auth.soy2.page.emailMismatch",yu.a="firebaseui.auth.soy2.page.providerSignIn",wu.a="firebaseui.auth.soy2.page.phoneSignInStart",Iu.a="firebaseui.auth.soy2.page.phoneSignInFinish",_u.a="firebaseui.auth.soy2.page.signOut",Eu.a="firebaseui.auth.soy2.page.selectTenant",ku.a="firebaseui.auth.soy2.page.providerMatchByEmail",c(Ou,Mc),Ou.prototype.v=function(){this.P(),this.M(this.w,this.H),jc(this,this.i(),this.w),this.i().focus(),Mc.prototype.v.call(this)},Ou.prototype.o=function(){this.w=null,Mc.prototype.o.call(this)},Ou.prototype.j=function(){return vo(Xo(this,"firebaseui-id-email"))},P(Ou.prototype,{i:Au,B:Ru,P:Pu,u:xu,ea:Su,ba:Cu,M:Tu});var Du=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function Nu(){return Xo(this,"firebaseui-id-email")}function Lu(){return Xo(this,"firebaseui-id-email-error")}function Mu(e){var t=Nu.call(this),n=Lu.call(this);tc(this,t,(function(){sc(n)&&(ec(t,!0),rc(n))})),e&&nc(this,t,(function(){e()}))}function Uu(){return $(vo(Nu.call(this))||"")}function Fu(){var e=Nu.call(this),t=Lu.call(this),n=vo(e)||"";return n?Du.test(n)?(ec(e,!0),rc(t),t=!0):(ec(e,!1),ac(t,dn("That email address isn't correct").toString()),t=!1):(ec(e,!1),ac(t,dn("Enter your email address to continue").toString()),t=!1),t?$(vo(e)):null}function ju(e,t,n,i,r,a,s){Mc.call(this,Vc,{email:n,ia:!!a},s,"passwordSignIn",{F:i,D:r}),this.w=e,this.H=t}function Bu(e,t,n,i,r,a){Mc.call(this,e,t,i,r||"notice",a),this.i=n||null}function Vu(e,t,n,i,r){Bu.call(this,Wc,{email:e,G:!!t},t,r,"passwordRecoveryEmailSent",{F:n,D:i})}function zu(e,t){Bu.call(this,lu,{G:!!e},e,t,"emailVerificationSuccess")}function Hu(e,t){Bu.call(this,du,{G:!!e},e,t,"emailVerificationFailure")}function Wu(e,t,n){Bu.call(this,hu,{email:e,G:!!t},t,n,"verifyAndChangeEmailSuccess")}function Gu(e,t){Bu.call(this,fu,{G:!!e},e,t,"verifyAndChangeEmailFailure")}function qu(e,t){Bu.call(this,gu,{G:!!e},e,t,"revertSecondFactorAdditionFailure")}function Ku(e){Bu.call(this,_u,void 0,void 0,e,"signOut")}function Ju(e,t){Bu.call(this,su,{G:!!e},e,t,"passwordResetSuccess")}function Yu(e,t){Bu.call(this,ou,{G:!!e},e,t,"passwordResetFailure")}function $u(e,t){Bu.call(this,uu,{G:!!e},e,t,"emailChangeRevokeFailure")}function Xu(e,t,n){Bu.call(this,mu,{errorMessage:e,zb:!!t},t,n,"recoverableError")}function Zu(e,t){Bu.call(this,vu,{errorMessage:e},void 0,t,"unrecoverableError")}function Qu(e){if("auth/invalid-credential"===e.code&&e.message&&-1!==e.message.indexOf("error=consent_required"))return{code:"auth/user-cancelled"};if(e.message&&-1!==e.message.indexOf("HTTP Cloud Function returned an error:")){var t=JSON.parse(e.message.substring(e.message.indexOf("{"),e.message.lastIndexOf("}")+1));return{code:e.code,message:t&&t.error&&t.error.message||e.message}}return e}function el(e,t,n,i){function r(n){if(!n.name||"cancel"!=n.name){e:{var i=n.message;try{var r=((JSON.parse(i).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(r&&r.length){var a=!0;break e}}catch(e){}a=!1}if(a)n=Uc(t),t.m(),ol(e,n,void 0,dn("Your sign-in session has expired. Please try again.").toString());else{if(a=n&&n.message||"",n.code){if("auth/email-already-in-use"==n.code||"auth/credential-already-in-use"==n.code)return;a=il(n)}t.a(a)}}}if(Od(e),i)return tl(e,n),qi();if(!n.credential)throw Error("No credential found!");if(!_d(e).currentUser&&!n.user)throw Error("User not logged in.");try{var a=function(e,t){return Ld(e),Rd(e,(function(n){if(e.j&&!e.j.isAnonymous&&Rs(Nd(e))&&!_d(e).currentUser)return Ud(e).then((function(){return"password"==t.credential.providerId&&(t.credential=null),t}));if(n)return Ud(e).then((function(){return n.linkWithCredential(t.credential)})).then((function(e){return t.user=e.user,t.credential=e.credential,t.operationType=e.operationType,t.additionalUserInfo=e.additionalUserInfo,t}),(function(n){if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential)throw n;return Fd(e,n,t.credential)}));if(!t.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return Ud(e).then((function(){return Ed(e).updateCurrentUser(t.user)})).then((function(){return t.user=Ed(e).currentUser,t.operationType="signIn",t.credential&&t.credential.providerId&&"password"==t.credential.providerId&&(t.credential=null),t}))}))}(e,n)}catch(e){return Yr(e.code||e.message,e),t.a(e.code||e.message),qi()}return n=a.then((function(t){tl(e,t)}),r).then(void 0,r),xd(e,a),qi(n)}function tl(e,t){if(!t.user)throw Error("No user found");var n=Ys(Nd(e));if(Js(Nd(e))&&n&&Qr("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),n){n=Ys(Nd(e));var i=ts(kd(e))||void 0;Qa(Ya,kd(e));var r=!1;ar()?(n&&!n(t,i)||(r=!0,Ft(window.opener.location,nl(e,i))),n||window.close()):n&&!n(t,i)||(r=!0,Ft(window.location,nl(e,i))),r||e.reset()}else{n=t.user,t=t.credential,i=Js(Nd(e)),r=ts(kd(e))||void 0,Qa(Ya,kd(e));var a=!1;ar()?(i&&!i(n,t,r)||(a=!0,Ft(window.opener.location,nl(e,r))),i||window.close()):i&&!i(n,t,r)||(a=!0,Ft(window.location,nl(e,r))),a||e.reset()}}function nl(e,t){if(!(e=t||Nd(e).a.get("signInSuccessUrl")))throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return e}function il(e){var t={code:e.code},n="";switch((t=t||{}).code){case"auth/email-already-in-use":n+="The email address is already used by another account";break;case"auth/requires-recent-login":case"auth/user-token-expired":n+=Nn();break;case"auth/too-many-requests":n+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":n+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":n+="That email address doesn't match an existing account";break;case"auth/weak-password":n+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":n+="The email and password you entered don't match";break;case"auth/network-request-failed":n+="A network error has occurred";break;case"auth/invalid-phone-number":n+=Rn();break;case"auth/invalid-verification-code":n+=dn("Wrong code. Try again.");break;case"auth/code-expired":n+="This code is no longer valid";break;case"auth/expired-action-code":n+="This code has expired.";break;case"auth/invalid-action-code":n+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(t=dn(n).toString())return t;try{return JSON.parse(e.message),Yr("Internal error: "+e.message,void 0),xn().toString()}catch(t){return e.message}}function rl(e,t,n,i){function a(){!function(e,t){es(Ja,{tenantId:e.a},t)}(new ca(e.h.tenantId||null),kd(e)),xd(e,t.I(A(e.dc,e),[u],(function(){if("file:"===(window.location&&window.location.protocol))return xd(e,yd(e).then((function(n){t.m(),Qa(Ja,kd(e)),ho("callback",e,c,qi(n))}),s))}),o))}function s(i){if(Qa(Ja,kd(e)),!i.name||"cancel"!=i.name)switch(i=Qu(i),i.code){case"auth/popup-blocked":a();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":t.a(il(i));break;case"auth/admin-restricted-operation":t.m(),Us(Nd(e))?ho("handleUnauthorizedUser",e,c,null,n):ho("callback",e,c,Ki(i));break;default:t.m(),ho("callback",e,c,Ki(i))}}function o(n){Qa(Ja,kd(e)),n.name&&"cancel"==n.name||(Yr("signInWithRedirect: "+n.code,void 0),n=il(n),"blank"==t.Ga&&qs(Nd(e))?(t.m(),ho("providerSignIn",e,c,n)):t.a(n))}var c=Uc(t),u=function(e,t,n){var i=Ts[t]&&r.default.auth[Ts[t]]?new r.default.auth[Ts[t]]:0==t.indexOf("saml.")?new r.default.auth.SAMLAuthProvider(t):new r.default.auth.OAuthProvider(t);if(!i)throw Error("Invalid Firebase Auth provider!");var a=Fs(Nd(e),t);if(i.addScope)for(var s=0;s<a.length;s++)i.addScope(a[s]);return a=js(Nd(e),t)||{},n&&(e=t==r.default.auth.GoogleAuthProvider.PROVIDER_ID?"login_hint":t==r.default.auth.GithubAuthProvider.PROVIDER_ID?"login":(e=Ds(Nd(e),t))&&e.Ob)&&(a[e]=n),i.setCustomParameters&&i.setCustomParameters(a),i}(e,n,i);Ks(Nd(e))==ao?a():xd(e,function(e,t){return Ld(e),Rd(e,(function(n){return n&&!ns(kd(e))?n.linkWithPopup(t).then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Fd(e,t)})):_d(e).signInWithPopup(t)}))}(e,u).then((function(n){t.m(),ho("callback",e,c,qi(n))}),s))}function al(e){return 1==(e=Os(Nd(e))).length&&e[0]==r.default.auth.EmailAuthProvider.PROVIDER_ID}function sl(e){return 1==(e=Os(Nd(e))).length&&e[0]==r.default.auth.PhoneAuthProvider.PROVIDER_ID}function ol(e,t,n,i){al(e)?i?ho("signIn",e,t,n,i):dl(e,t,n):e&&sl(e)&&!i?ho("phoneSignInStart",e,t):e&&qs(Nd(e))&&!i?ho("federatedRedirect",e,t,n):ho("providerSignIn",e,t,i,n)}function cl(e,t,n,i){var r=Uc(t);xd(e,t.I(A(_d(e).fetchSignInMethodsForEmail,_d(e)),[n],(function(a){t.m(),ul(e,r,a,n,i)}),(function(e){e=il(e),t.a(e)})))}function ul(e,t,n,i,a,s){n.length||Gs(Nd(e))&&!Gs(Nd(e))?H(n,r.default.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?ho("passwordSignIn",e,t,i,s):1==n.length&&n[0]===r.default.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?Gs(Nd(e))?ho("sendEmailLinkForSignIn",e,t,i,(function(){ho("signIn",e,t)})):ho("unsupportedProvider",e,t,i):(n=Ss(n,Os(Nd(e))))?(rs(new aa(i),kd(e)),ho("federatedSignIn",e,t,i,n,a)):ho("unsupportedProvider",e,t,i):Ms(Nd(e))?ho("handleUnauthorizedUser",e,t,i,r.default.auth.EmailAuthProvider.PROVIDER_ID):Gs(Nd(e))?ho("sendEmailLinkForSignIn",e,t,i,(function(){ho("signIn",e,t)})):ho("passwordSignUp",e,t,i,void 0,void 0,s)}function ll(e,t,n,i,r,a){var s=Uc(t);xd(e,t.I(A(e.Ib,e),[n,a],(function(){t.m(),ho("emailLinkSignInSent",e,s,n,i,a)}),r))}function dl(e,t,n){n?ho("prefilledEmailSignIn",e,t,n):ho("signIn",e,t)}function hl(){return we(cr(),"oobCode")}function fl(){var e=we(cr(),"continueUrl");return e?function(){Ft(window.location,e)}:null}function pl(e,t){Mc.call(this,Zc,void 0,t,"anonymousUserMismatch"),this.i=e}function gl(e){Mc.call(this,Gc,void 0,e,"callback")}function ml(e,t,n){if(n.user){var i={user:n.user,credential:n.credential,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo},r=ns(kd(e)),a=r&&r.g;if(a&&!function(e,t){if(t==e.email)return!0;if(e.providerData)for(var n=0;n<e.providerData.length;n++)if(t==e.providerData[n].email)return!0;return!1}(n.user,a))!function(e,t,n){var i=Uc(t);xd(e,Ud(e).then((function(){t.m(),ho("emailMismatch",e,i,n)}),(function(e){e.name&&"cancel"==e.name||(e=il(e.code),t.a(e))})))}(e,t,i);else{var s=r&&r.a;s?xd(e,n.user.linkWithCredential(s).then((function(n){i={user:n.user,credential:s,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo},vl(e,t,i)}),(function(n){bl(e,t,n)}))):vl(e,t,i)}}else n=Uc(t),t.m(),is(kd(e)),ol(e,n)}function vl(e,t,n){is(kd(e)),el(e,t,n)}function bl(e,t,n){var i=Uc(t);is(kd(e)),n=il(n),t.m(),ol(e,i,void 0,n)}function yl(e,t,n,i){var a=Uc(t);xd(e,_d(e).fetchSignInMethodsForEmail(n).then((function(s){t.m(),s.length?H(s,r.default.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?ho("passwordLinking",e,a,n):1==s.length&&s[0]===r.default.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?ho("emailLinkSignInLinking",e,a,n):(s=Ss(s,Os(Nd(e))))?ho("federatedLinking",e,a,n,s,i):(is(kd(e)),ho("unsupportedProvider",e,a,n)):(is(kd(e)),ho("passwordRecovery",e,a,n,!1,On().toString()))}),(function(n){bl(e,t,n)})))}function wl(e,t){Mc.call(this,Xc,void 0,t,"differentDeviceError"),this.i=e}function Il(e,t,n,i){Mc.call(this,cu,{email:e,G:!!n},i,"emailChangeRevoke"),this.l=t,this.i=n||null}function _l(){return Xo(this,"firebaseui-id-new-password")}function El(){return Xo(this,"firebaseui-id-password-toggle")}function kl(){this.Ra=!this.Ra;var e=El.call(this),t=_l.call(this);this.Ra?(t.type="text",go(e,"firebaseui-input-toggle-off"),mo(e,"firebaseui-input-toggle-on")):(t.type="password",go(e,"firebaseui-input-toggle-on"),mo(e,"firebaseui-input-toggle-off")),t.focus()}function Sl(){return Xo(this,"firebaseui-id-new-password-error")}function Cl(){this.Ra=!1;var e=_l.call(this);e.type="password";var t=Sl.call(this);tc(this,e,(function(){sc(t)&&(ec(e,!0),rc(t))}));var n=El.call(this);go(n,"firebaseui-input-toggle-on"),mo(n,"firebaseui-input-toggle-off"),function(e,t,n){Bn(e,R(Vn,t=new Co(t))),xo(Zo(e),t,"focusin",n)}(this,e,(function(){go(n,"firebaseui-input-toggle-focus"),mo(n,"firebaseui-input-toggle-blur")})),function(e,t,n){Bn(e,R(Vn,t=new Co(t))),xo(Zo(e),t,"focusout",n)}(this,e,(function(){go(n,"firebaseui-input-toggle-blur"),mo(n,"firebaseui-input-toggle-focus")})),ic(this,n,A(kl,this))}function Tl(){var e=_l.call(this),t=Sl.call(this);return vo(e)?(ec(e,!0),rc(t),t=!0):(ec(e,!1),ac(t,dn("Enter your password").toString()),t=!1),t?vo(e):null}function Al(e,t,n){Mc.call(this,au,{email:e},n,"passwordReset"),this.l=t}function Rl(e,t,n,i,r){Mc.call(this,pu,{factorId:e,phoneNumber:n||null,G:!!i},r,"revertSecondFactorAdditionSuccess"),this.l=t,this.i=i||null}function Pl(e,t,n,i){"auth/weak-password"==(i&&i.code)?(e=il(i),ec(n.i(),!1),ac(n.w(),e),n.i().focus()):(n&&n.m(),(n=new Yu).render(t),wd(e,n))}function xl(e,t){try{var n="number"==typeof e.selectionStart}catch(e){n=!1}n?(e.selectionStart=t,e.selectionEnd=t):et&&!ft("9")&&("textarea"==e.type&&(t=e.value.substring(0,t).replace(/(\r\n|\r|\n)/g,"\n").length),(e=e.createTextRange()).collapse(!0),e.move("character",t),e.select())}function Ol(e,t,n,i,r,a){Mc.call(this,$c,{email:n},a,"emailLinkSignInConfirmation",{F:i,D:r}),this.l=e,this.u=t}function Dl(e,t,n,i,r){Mc.call(this,tu,{ga:e},r,"emailLinkSignInLinkingDifferentDevice",{F:n,D:i}),this.i=t}function Nl(e){Mc.call(this,Kc,void 0,e,"blank")}function Ll(e,t,n,i,a){var s=new Nl,o=new Ve(n),c=o.a.a.get(Ge.$a)||"",u=o.a.a.get(Ge.Sa)||"",l="1"===o.a.a.get(Ge.Qa),d=ze(o),h=o.a.a.get(Ge.PROVIDER_ID)||null;o=o.a.a.get(Ge.vb)||null,Dd(e,o);var f=!Za($a,kd(e)),p=i||function(e,t){var n=null;if(t=Za($a,t))try{var i=Pa(e,t),r=JSON.parse(i);n=r&&r.email||null}catch(e){}return n}(u,kd(e)),g=(i=function(e,t){var n=null;if(t=Za(Xa,t))try{var i=Pa(e,t);n=JSON.parse(i)}catch(e){}return oa(n||null)}(u,kd(e)))&&i.a;h&&g&&g.providerId!==h&&(g=null),s.render(t),wd(e,s),xd(e,s.I((function(){var t=qi(null);t=d&&f||f&&l?Ki(Error("anonymous-user-not-found")):function(e,t){var n=ze(new Ve(t));return n?(t=new ji((function(t,i){var r=Ed(e).onAuthStateChanged((function(e){r(),e&&e.isAnonymous&&e.uid===n?t(e):e&&e.isAnonymous&&e.uid!==n?i(Error("anonymous-user-mismatch")):i(Error("anonymous-user-not-found"))}));xd(e,r)})),xd(e,t),t):qi(null)}(e,n).then((function(e){if(h&&!g)throw Error("pending-credential-not-found");return e}));var i=null;return t.then((function(t){return i=t,a?null:_d(e).checkActionCode(c)})).then((function(){return i}))}),[],(function(i){p?function(e,t,n,i,a,s){var o=Uc(t);t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",dn("Signing in...").toString());var c=null;a=(s?function(e,t,n,i,a){Ld(e);var s=a||null,o=r.default.auth.EmailAuthProvider.credentialWithLink(n,i);return n=s?_d(e).signInWithEmailLink(n,i).then((function(e){return e.user.linkWithCredential(s)})).then((function(){return Ud(e)})).then((function(){return Fd(e,{code:"auth/email-already-in-use"},s)})):_d(e).fetchSignInMethodsForEmail(n).then((function(n){return n.length?Fd(e,{code:"auth/email-already-in-use"},o):t.linkWithCredential(o)})),xd(e,n),n}(e,s,n,i,a):function(e,t,n,i){Ld(e);var r,a=i||null;return t=_d(e).signInWithEmailLink(t,n).then((function(e){if(r={user:e.user,credential:null,operationType:e.operationType,additionalUserInfo:e.additionalUserInfo},a)return e.user.linkWithCredential(a).then((function(e){r={user:e.user,credential:a,operationType:r.operationType,additionalUserInfo:e.additionalUserInfo}}))})).then((function(){Ud(e)})).then((function(){return Ed(e).updateCurrentUser(r.user)})).then((function(){return r.user=Ed(e).currentUser,r})),xd(e,t),t}(e,n,i,a)).then((function(n){Qa(Xa,kd(e)),Qa($a,kd(e)),t.h(),t.$("firebaseui-icon-done",dn("Signed in!").toString()),c=setTimeout((function(){t.h(),el(e,t,n,!0)}),1e3),xd(e,(function(){t&&(t.h(),t.m()),clearTimeout(c)}))}),(function(r){if(t.h(),t.m(),!r.name||"cancel"!=r.name){var a=il(r=Qu(r));"auth/email-already-in-use"==r.code||"auth/credential-already-in-use"==r.code?(Qa(Xa,kd(e)),Qa($a,kd(e))):"auth/invalid-email"==r.code?(a=dn("The email provided does not match the current sign-in session.").toString(),ho("emailLinkConfirmation",e,o,i,Ml,null,a)):ol(e,o,n,a)}})),xd(e,a)}(e,s,p,n,g,i):l?(s.m(),ho("differentDeviceError",e,t)):(s.m(),ho("emailLinkConfirmation",e,t,n,Ml))}),(function(i){var r=void 0;if(!i||!i.name||"cancel"!=i.name)switch(s.m(),i&&i.message){case"anonymous-user-not-found":ho("differentDeviceError",e,t);break;case"anonymous-user-mismatch":ho("anonymousUserMismatch",e,t);break;case"pending-credential-not-found":ho("emailLinkNewDeviceLinking",e,t,n,Ul);break;default:i&&(r=il(i)),ol(e,t,void 0,r)}})))}function Ml(e,t,n,i){Ll(e,t,i,n,!0)}function Ul(e,t,n){Ll(e,t,n)}function Fl(e,t,n,i,r,a){Mc.call(this,eu,{email:e,ga:t},a,"emailLinkSignInLinking",{F:i,D:r}),this.i=n}function jl(e,t,n,i,r,a){Mc.call(this,Jc,{email:e},a,"emailLinkSignInSent",{F:i,D:r}),this.u=t,this.i=n}function Bl(e,t,n,i,r,a,s){Mc.call(this,bu,{jc:e,Qb:t},s,"emailMismatch",{F:r,D:a}),this.l=n,this.i=i}function Vl(e,t,n,i,r){Mc.call(this,Yc,void 0,r,"emailNotReceived",{F:n,D:i}),this.l=e,this.i=t}function zl(e,t,n,i,r,a){Mc.call(this,nu,{email:e,ga:t},a,"federatedLinking",{F:i,D:r}),this.i=n}function Hl(e,t,n,i,r,a){Mc.call(this,Hc,{email:n,Ta:!!t},a,"passwordRecovery",{F:i,D:r}),this.l=e,this.u=t}function Wl(){return Xo(this,"firebaseui-id-name")}function Gl(){return Xo(this,"firebaseui-id-name-error")}function ql(e,t,n,i,r,a,s,o,c){Mc.call(this,zc,{email:i,Tb:e,name:r,Ta:!!n,ia:!!o},c,"passwordSignUp",{F:a,D:s}),this.w=t,this.H=n,this.B=e}function Kl(e,t){var n=Ws(Nd(e)),i=t.j(),a=null;n&&(a=t.M());var s=t.P();if(i){if(n){if(!a)return void t.u().focus();a=ae(a)}if(s){var o=r.default.auth.EmailAuthProvider.credential(i,s);xd(e,t.I(A(e.Yb,e),[i,s],(function(i){var r={user:i.user,credential:o,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo};return n?(i=i.user.updateProfile({displayName:a}).then((function(){return el(e,t,r)})),xd(e,i),i):el(e,t,r)}),(function(n){if(!n.name||"cancel"!=n.name){var a=Qu(n);switch(n=il(a),a.code){case"auth/email-already-in-use":return function(e,t,n,i){function r(){var e=il(i);ec(t.i(),!1),ac(t.U(),e),t.i().focus()}var a=_d(e).fetchSignInMethodsForEmail(n).then((function(i){i.length?r():(i=Uc(t),t.m(),ho("passwordRecovery",e,i,n,!1,On().toString()))}),(function(){r()}));return xd(e,a),a}(e,t,i,a);case"auth/too-many-requests":n=dn("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":ec(t.l(),!1),ac(t.ba(),n);break;case"auth/admin-restricted-operation":Us(Nd(e))?(n=Uc(t),t.m(),ho("handleUnauthorizedUser",e,n,i,r.default.auth.EmailAuthProvider.PROVIDER_ID)):t.a(n);break;default:Yr(a="setAccountInfo: "+Oa(a),void 0),t.a(n)}}})))}else t.l().focus()}else t.i().focus()}function Jl(){return Xo(this,"firebaseui-id-phone-confirmation-code")}function Yl(){return Xo(this,"firebaseui-id-phone-confirmation-code-error")}function $l(){return Xo(this,"firebaseui-id-resend-countdown")}function Xl(e,t,n,i,r,a,s,o,c){Mc.call(this,Iu,{phoneNumber:r},c,"phoneSignInFinish",{F:s,D:o}),this.jb=a,this.i=new To(1e3),this.B=a,this.P=e,this.l=t,this.H=n,this.M=i}c(ju,Mc),ju.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),Fc(this,this.l(),this.i()),jc(this,this.i(),this.w),vo(this.l())?this.i().focus():this.l().focus(),Mc.prototype.v.call(this)},ju.prototype.o=function(){this.H=this.w=null,Mc.prototype.o.call(this)},P(ju.prototype,{l:Nu,U:Lu,P:Mu,M:Uu,j:Fu,i:Au,B:Ru,ea:Pu,u:xu,ua:Su,pa:Cu,ba:Tu}),N(Bu,Mc),Bu.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),Bu.K.v.call(this)},Bu.prototype.o=function(){this.i=null,Bu.K.o.call(this)},P(Bu.prototype,{l:Su,w:Cu,u:Tu}),N(Vu,Bu),N(zu,Bu),N(Hu,Bu),N(Wu,Bu),N(Gu,Bu),N(qu,Bu),N(Ku,Bu),N(Ju,Bu),N(Yu,Bu),N($u,Bu),N(Xu,Bu),N(Zu,Bu),c(pl,Mc),pl.prototype.v=function(){var e=this;ic(this,this.l(),(function(){e.i()})),this.l().focus(),Mc.prototype.v.call(this)},pl.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(pl.prototype,{l:Cu}),lo.anonymousUserMismatch=function(e,t){var n=new pl((function(){n.m(),ol(e,t)}));n.render(t),wd(e,n)},c(gl,Mc),gl.prototype.I=function(e,t,n,i){return e.apply(null,t).then(n,i)},lo.callback=function(e,t,n){var i=new gl;i.render(t),wd(e,i),n=n||yd(e),xd(e,n.then((function(t){ml(e,i,t)}),(function(n){if((n=Qu(n))&&("auth/account-exists-with-different-credential"==n.code||"auth/email-already-in-use"==n.code)&&n.email&&n.credential)rs(new aa(n.email,n.credential),kd(e)),yl(e,i,n.email);else if(n&&"auth/user-cancelled"==n.code){var r=ns(kd(e)),a=il(n);r&&r.a?yl(e,i,r.g,a):r?cl(e,i,r.g,a):bl(e,i,n)}else n&&"auth/credential-already-in-use"==n.code||(n&&"auth/operation-not-supported-in-this-environment"==n.code&&al(e)?ml(e,i,{user:null,credential:null}):n&&"auth/admin-restricted-operation"==n.code&&Us(Nd(e))?(i.m(),is(kd(e)),ho("handleUnauthorizedUser",e,t,null,null)):bl(e,i,n))})))},c(wl,Mc),wl.prototype.v=function(){var e=this;ic(this,this.l(),(function(){e.i()})),this.l().focus(),Mc.prototype.v.call(this)},wl.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(wl.prototype,{l:Cu}),lo.differentDeviceError=function(e,t){var n=new wl((function(){n.m(),ol(e,t)}));n.render(t),wd(e,n)},c(Il,Mc),Il.prototype.v=function(){var e=this;ic(this,Xo(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Mc.prototype.v.call(this)},Il.prototype.o=function(){this.l=this.i=null,Mc.prototype.o.call(this)},P(Il.prototype,{u:Su,B:Cu,w:Tu}),c(Al,Mc),Al.prototype.v=function(){this.H(),this.B(this.l),jc(this,this.i(),this.l),this.i().focus(),Mc.prototype.v.call(this)},Al.prototype.o=function(){this.l=null,Mc.prototype.o.call(this)},P(Al.prototype,{i:_l,w:Sl,M:El,H:Cl,u:Tl,U:Su,P:Cu,B:Tu}),c(Rl,Mc),Rl.prototype.v=function(){var e=this;ic(this,Xo(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Mc.prototype.v.call(this)},Rl.prototype.o=function(){this.l=this.i=null,Mc.prototype.o.call(this)},P(Rl.prototype,{u:Su,B:Cu,w:Tu}),lo.passwordReset=function(e,t,n,i){xd(e,_d(e).verifyPasswordResetCode(n).then((function(r){var a=new Al(r,(function(){!function(e,t,n,i,r){var a=n.u();a&&xd(e,n.I(A(_d(e).confirmPasswordReset,_d(e)),[i,a],(function(){n.m();var i=new Ju(r);i.render(t),wd(e,i)}),(function(i){Pl(e,t,n,i)})))}(e,t,a,n,i)}));a.render(t),wd(e,a)}),(function(){Pl(e,t)})))},lo.emailChangeRevocation=function(e,t,n){var i=null;xd(e,_d(e).checkActionCode(n).then((function(t){return i=t.data.email,_d(e).applyActionCode(n)})).then((function(){!function(e,t,n){var i=new Il(n,(function(){xd(e,i.I(A(_d(e).sendPasswordResetEmail,_d(e)),[n],(function(){i.m(),(i=new Vu(n,void 0,zs(Nd(e)),Hs(Nd(e)))).render(t),wd(e,i)}),(function(){i.a(Pn().toString())})))}));i.render(t),wd(e,i)}(e,t,i)}),(function(){var n=new $u;n.render(t),wd(e,n)})))},lo.emailVerification=function(e,t,n,i){xd(e,_d(e).applyActionCode(n).then((function(){var n=new zu(i);n.render(t),wd(e,n)}),(function(){var n=new Hu;n.render(t),wd(e,n)})))},lo.revertSecondFactorAddition=function(e,t,n){var i=null,r=null;xd(e,_d(e).checkActionCode(n).then((function(t){return i=t.data.email,r=t.data.multiFactorInfo,_d(e).applyActionCode(n)})).then((function(){!function(e,t,n,i){var r=new Rl(i.factorId,(function(){r.I(A(_d(e).sendPasswordResetEmail,_d(e)),[n],(function(){r.m(),(r=new Vu(n,void 0,zs(Nd(e)),Hs(Nd(e)))).render(t),wd(e,r)}),(function(){r.a(Pn().toString())}))}),i.phoneNumber);r.render(t),wd(e,r)}(e,t,i,r)}),(function(){var n=new qu;n.render(t),wd(e,n)})))},lo.verifyAndChangeEmail=function(e,t,n,i){var r=null;xd(e,_d(e).checkActionCode(n).then((function(t){return r=t.data.email,_d(e).applyActionCode(n)})).then((function(){var n=new Wu(r,i);n.render(t),wd(e,n)}),(function(){var n=new Gu;n.render(t),wd(e,n)})))},c(Ol,Mc),Ol.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),xl(this.i(),(this.i().value||"").length),Mc.prototype.v.call(this)},Ol.prototype.o=function(){this.u=this.l=null,Mc.prototype.o.call(this)},P(Ol.prototype,{i:Nu,M:Lu,w:Mu,H:Uu,j:Fu,U:Su,P:Cu,B:Tu}),lo.emailLinkConfirmation=function(e,t,n,i,r,a){var s=new Ol((function(){var r=s.j();r?(s.m(),i(e,t,r,n)):s.i().focus()}),(function(){s.m(),ol(e,t,r||void 0)}),r||void 0,zs(Nd(e)),Hs(Nd(e)));s.render(t),wd(e,s),a&&s.a(a)},c(Dl,Mc),Dl.prototype.v=function(){this.u(this.i),this.l().focus(),Mc.prototype.v.call(this)},Dl.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(Dl.prototype,{l:Su,u:Tu}),lo.emailLinkNewDeviceLinking=function(e,t,n,i){var r=new Ve(n);if(n=r.a.a.get(Ge.PROVIDER_ID)||null,He(r,null),n){var a=new Dl(Ds(Nd(e),n),(function(){a.m(),i(e,t,r.toString())}),zs(Nd(e)),Hs(Nd(e)));a.render(t),wd(e,a)}else ol(e,t)},c(Nl,Mc),lo.emailLinkSignInCallback=Ll,c(Fl,Mc),Fl.prototype.v=function(){this.u(this.i),this.l().focus(),Mc.prototype.v.call(this)},Fl.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(Fl.prototype,{l:Su,u:Tu}),lo.emailLinkSignInLinking=function(e,t,n){var i=ns(kd(e));if(is(kd(e)),i){var r=i.a.providerId,a=new Fl(n,Ds(Nd(e),r),(function(){!function(e,t,n,i){var r=Uc(t);ll(e,t,n,(function(){ol(e,r,n)}),(function(i){if(!i.name||"cancel"!=i.name){var a=il(i);i&&"auth/network-request-failed"==i.code?t.a(a):(t.m(),ol(e,r,n,a))}}),i)}(e,a,n,i)}),zs(Nd(e)),Hs(Nd(e)));a.render(t),wd(e,a)}else ol(e,t)},c(jl,Mc),jl.prototype.v=function(){var e=this;ic(this,this.l(),(function(){e.i()})),ic(this,Xo(this,"firebaseui-id-trouble-getting-email-link"),(function(){e.u()})),this.l().focus(),Mc.prototype.v.call(this)},jl.prototype.o=function(){this.i=this.u=null,Mc.prototype.o.call(this)},P(jl.prototype,{l:Cu}),lo.emailLinkSignInSent=function(e,t,n,i,r){var a=new jl(n,(function(){a.m(),ho("emailNotReceived",e,t,n,i,r)}),(function(){a.m(),i()}),zs(Nd(e)),Hs(Nd(e)));a.render(t),wd(e,a)},c(Bl,Mc),Bl.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Mc.prototype.v.call(this)},Bl.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(Bl.prototype,{u:Su,B:Cu,w:Tu}),lo.emailMismatch=function(e,t,n){var i=ns(kd(e));if(i){var r=new Bl(n.user.email,i.g,(function(){var t=r;is(kd(e)),el(e,t,n)}),(function(){var t=n.credential.providerId,a=Uc(r);r.m(),i.a?ho("federatedLinking",e,a,i.g,t):ho("federatedSignIn",e,a,i.g,t)}),zs(Nd(e)),Hs(Nd(e)));r.render(t),wd(e,r)}else ol(e,t)},c(Vl,Mc),Vl.prototype.v=function(){var e=this;ic(this,this.u(),(function(){e.i()})),ic(this,this.Da(),(function(){e.l()})),this.u().focus(),Mc.prototype.v.call(this)},Vl.prototype.Da=function(){return Xo(this,"firebaseui-id-resend-email-link")},Vl.prototype.o=function(){this.i=this.l=null,Mc.prototype.o.call(this)},P(Vl.prototype,{u:Cu}),lo.emailNotReceived=function(e,t,n,i,r){var a=new Vl((function(){ll(e,a,n,i,(function(e){e=il(e),a.a(e)}),r)}),(function(){a.m(),ol(e,t,n)}),zs(Nd(e)),Hs(Nd(e)));a.render(t),wd(e,a)},c(zl,Mc),zl.prototype.v=function(){this.u(this.i),this.l().focus(),Mc.prototype.v.call(this)},zl.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(zl.prototype,{l:Su,u:Tu}),lo.federatedLinking=function(e,t,n,i,r){var a=ns(kd(e));if(a&&a.a){var s=new zl(n,Ds(Nd(e),i),(function(){rl(e,s,i,n)}),zs(Nd(e)),Hs(Nd(e)));s.render(t),wd(e,s),r&&s.a(r)}else ol(e,t)},lo.federatedRedirect=function(e,t,n){var i=new Nl;i.render(t),wd(e,i),rl(e,i,t=Os(Nd(e))[0],n)},lo.federatedSignIn=function(e,t,n,i,r){var a=new zl(n,Ds(Nd(e),i),(function(){rl(e,a,i,n)}),zs(Nd(e)),Hs(Nd(e)));a.render(t),wd(e,a),r&&a.a(r)},lo.passwordLinking=function(e,t,n){var i=ns(kd(e));is(kd(e));var r=i&&i.a;if(r){var a=new Ou(n,(function(){!function(e,t,n,i){var r=t.u();r?xd(e,t.I(A(e.Xb,e),[n,r],(function(n){return n=n.user.linkWithCredential(i).then((function(n){return el(e,t,{user:n.user,credential:i,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo})})),xd(e,n),n}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/wrong-password":ec(t.i(),!1),ac(t.B(),il(e));break;case"auth/too-many-requests":t.a(il(e));break;default:Yr("signInWithEmailAndPassword: "+e.message,void 0),t.a(il(e))}}))):t.i().focus()}(e,a,n,r)}),(function(){a.m(),ho("passwordRecovery",e,t,n)}),zs(Nd(e)),Hs(Nd(e)));a.render(t),wd(e,a)}else ol(e,t)},c(Hl,Mc),Hl.prototype.v=function(){this.B(),this.H(this.l,this.u),vo(this.i())||this.i().focus(),jc(this,this.i(),this.l),Mc.prototype.v.call(this)},Hl.prototype.o=function(){this.u=this.l=null,Mc.prototype.o.call(this)},P(Hl.prototype,{i:Nu,w:Lu,B:Mu,M:Uu,j:Fu,U:Su,P:Cu,H:Tu}),lo.passwordRecovery=function(e,t,n,i,r){var a=new Hl((function(){!function(e,t){var n=t.j();if(n){var i=Uc(t);xd(e,t.I(A(_d(e).sendPasswordResetEmail,_d(e)),[n],(function(){t.m();var r=new Vu(n,(function(){r.m(),ol(e,i)}),zs(Nd(e)),Hs(Nd(e)));r.render(i),wd(e,r)}),(function(e){ec(t.i(),!1),ac(t.w(),il(e))})))}else t.i().focus()}(e,a)}),i?void 0:function(){a.m(),ol(e,t)},n,zs(Nd(e)),Hs(Nd(e)));a.render(t),wd(e,a),r&&a.a(r)},lo.passwordSignIn=function(e,t,n,i){var a=new ju((function(){!function(e,t){var n=t.j(),i=t.u();if(n)if(i){var a=r.default.auth.EmailAuthProvider.credential(n,i);xd(e,t.I(A(e.bc,e),[n,i],(function(n){return el(e,t,{user:n.user,credential:a,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo})}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/email-already-in-use":break;case"auth/email-exists":ec(t.l(),!1),ac(t.U(),il(e));break;case"auth/too-many-requests":case"auth/wrong-password":ec(t.i(),!1),ac(t.B(),il(e));break;default:Yr("verifyPassword: "+e.message,void 0),t.a(il(e))}})))}else t.i().focus();else t.l().focus()}(e,a)}),(function(){var n=a.M();a.m(),ho("passwordRecovery",e,t,n)}),n,zs(Nd(e)),Hs(Nd(e)),i);a.render(t),wd(e,a)},c(ql,Mc),ql.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(Fc(this,this.i(),this.u()),Fc(this,this.u(),this.l())):Fc(this,this.i(),this.l()),this.w&&jc(this,this.l(),this.w),vo(this.i())?this.B&&!vo(this.u())?this.u().focus():this.l().focus():this.i().focus(),Mc.prototype.v.call(this)},ql.prototype.o=function(){this.H=this.w=null,Mc.prototype.o.call(this)},P(ql.prototype,{i:Nu,U:Lu,ea:Mu,jb:Uu,j:Fu,u:Wl,Bc:Gl,Ja:function(){var e=Wl.call(this),t=Gl.call(this);tc(this,e,(function(){sc(t)&&(ec(e,!0),rc(t))}))},M:function(){var e=Wl.call(this),t=Gl.call(this),n=vo(e);return ec(e,n=!/^[\s\xa0]*$/.test(null==n?"":String(n))),n?(rc(t),t=!0):(ac(t,dn("Enter your account name").toString()),t=!1),t?$(vo(e)):null},l:_l,ba:Sl,lb:El,ua:Cl,P:Tl,Nb:Su,Mb:Cu,pa:Tu}),lo.passwordSignUp=function(e,t,n,i,r,a){var s=new ql(Ws(Nd(e)),(function(){Kl(e,s)}),r?void 0:function(){s.m(),ol(e,t)},n,i,zs(Nd(e)),Hs(Nd(e)),a);s.render(t),wd(e,s)},c(Xl,Mc),Xl.prototype.v=function(){var e=this;this.U(this.jb),ri(this.i,"tick",this.w,!1,this),this.i.start(),ic(this,Xo(this,"firebaseui-id-change-phone-number-link"),(function(){e.P()})),ic(this,this.Da(),(function(){e.M()})),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),Mc.prototype.v.call(this)},Xl.prototype.o=function(){this.M=this.H=this.l=this.P=null,Ao(this.i),oi(this.i,"tick",this.w),this.i=null,Mc.prototype.o.call(this)},Xl.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(Ao(this.i),oi(this.i,"tick",this.w),this.ua(),this.lb())},P(Xl.prototype,{u:Jl,pa:Yl,Ja:function(e){var t=Jl.call(this),n=Yl.call(this);tc(this,t,(function(){sc(n)&&(ec(t,!0),rc(n))})),e&&nc(this,t,(function(){e()}))},ba:function(){var e=$(vo(Jl.call(this))||"");return/^\d{6}$/.test(e)?e:null},Fb:$l,U:function(e){Yt($l.call(this),dn("Resend code in "+(9<e?"0:":"0:0")+e).toString())},ua:function(){rc(this.Fb())},Da:function(){return Xo(this,"firebaseui-id-resend-link")},lb:function(){ac(this.Da())},Nb:Su,Mb:Cu,ea:Tu}),lo.phoneSignInFinish=function(e,t,n,i,r,a){var s=new Xl((function(){s.m(),ho("phoneSignInStart",e,t,n)}),(function(){!function(e,t,n,i){function r(e){t.u().focus(),ec(t.u(),!1),ac(t.pa(),e)}var a=t.ba();a?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",dn("Verifying...").toString()),xd(e,t.I(A(i.confirm,i),[a],(function(n){t.h(),t.$("firebaseui-icon-done",dn("Verified!").toString());var i=setTimeout((function(){t.h(),t.m();var i={user:Ed(e).currentUser,credential:null,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo};el(e,t,i,!0)}),1e3);xd(e,(function(){t&&t.h(),clearTimeout(i)}))}),(function(i){if(i.name&&"cancel"==i.name)t.h();else{var a=Qu(i);switch(i=il(a),a.code){case"auth/credential-already-in-use":t.h();break;case"auth/code-expired":a=Uc(t),t.h(),t.m(),ho("phoneSignInStart",e,a,n,i);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":t.h(),r(i);break;default:t.h(),t.a(i)}}})))):r(dn("Wrong code. Try again.").toString())}(e,s,n,r)}),(function(){s.m(),ol(e,t)}),(function(){s.m(),ho("phoneSignInStart",e,t,n)}),ks(n),i,zs(Nd(e)),Hs(Nd(e)));s.render(t),wd(e,s),a&&s.a(a)};var Zl=!(et||Je("Safari")&&!(Ye()||Je("Coast")||Je("Opera")||Je("Edge")||Je("Firefox")||Je("FxiOS")||Je("Silk")||Je("Android")));function Ql(e,t){return/-[a-z]/.test(t)?null:Zl&&e.dataset?!Je("Android")||Ye()||Je("Firefox")||Je("FxiOS")||Je("Opera")||Je("Silk")||t in e.dataset?void 0===(e=e.dataset[t])?null:e:null:e.getAttribute("data-"+String(t).replace(/([A-Z])/g,"-$1").toLowerCase())}function ed(e,t,n){var i=this;e=rn(Ic,{items:e},null,this.s),Ac.call(this,e,!0,!0),n&&(n=function(e,t){e=(e||document).getElementsByTagName("BUTTON");for(var n=0;n<e.length;n++)if(Ql(e[n],"listboxid")===t)return e[n];return null}(e,n))&&(n.focus(),function(e,t){var n=(t=t||qt(document))||qt(document),i=qo(e),r=qo(n);if(!et||9<=Number(dt)){s=Wo(n,"borderLeftWidth");var a=Wo(n,"borderRightWidth");o=Wo(n,"borderTopWidth"),c=Wo(n,"borderBottomWidth"),a=new Ho(parseFloat(o),parseFloat(a),parseFloat(c),parseFloat(s))}else{var s=Jo(n,"borderLeft");a=Jo(n,"borderRight");var o=Jo(n,"borderTop"),c=Jo(n,"borderBottom");a=new Ho(o,a,c,s)}n==qt(document)?(s=i.a-n.scrollLeft,i=i.g-n.scrollTop,!et||10<=Number(dt)||(s+=a.left,i+=a.top)):(s=i.a-r.a-a.left,i=i.g-r.g-a.top),r=e.offsetWidth,a=e.offsetHeight,o=rt&&!r&&!a,e=f(r)&&!o||!e.getBoundingClientRect?new Bt(r,a):new Bt((e=Go(e)).right-e.left,e.bottom-e.top),r=n.clientHeight-e.height,a=n.scrollLeft,o=n.scrollTop,n=new jt(a+=Math.min(s,Math.max(s-(n.clientWidth-e.width),0)),o+=Math.min(i,Math.max(i-r,0))),t.scrollLeft=n.a,t.scrollTop=n.g}(n,e)),ic(this,e,(function(e){(e=(e=$t(e.target,"firebaseui-id-list-box-dialog-button"))&&Ql(e,"listboxid"))&&(Rc.call(i),t(e))}))}function td(){return Xo(this,"firebaseui-id-phone-number")}function nd(){return Xo(this,"firebaseui-id-country-selector")}function id(){return Xo(this,"firebaseui-id-phone-number-error")}function rd(e,t){var n=e.a,i=ad("1-US-0",n),r=null;if(!(r=t&&ad(t,n)?t:i?"1-US-0":0<n.length?n[0].c:null))throw Error("No available default country");cd.call(this,r,e)}function ad(e,t){return!(!(e=ms(e))||!H(t,e))}function sd(e){return"firebaseui-flag-"+e.f}function od(e){var t=this;ed.call(this,function(e){return e.map((function(e){return{id:e.c,Ma:"firebaseui-flag "+sd(e),label:e.name+" ‎+"+e.b}}))}(e.a),(function(n){cd.call(t,n,e,!0),t.O().focus()}),this.Ba)}function cd(e,t,n){var i=ms(e);i&&(n&&((t=gs(t,n=$(vo(td.call(this))||""))).length&&t[0].b!=i.b&&(n="+"+i.b+n.substr(t[0].b.length+1),bo(td.call(this),n))),t=ms(this.Ba),this.Ba=e,e=Xo(this,"firebaseui-id-country-selector-flag"),t&&mo(e,sd(t)),go(e,sd(i)),Yt(Xo(this,"firebaseui-id-country-selector-code"),"‎+"+i.b))}function ud(e,t,n,i,r,a,s,o,c,u){Mc.call(this,wu,{Gb:t,Aa:c||null,Va:!!n,ia:!!a},u,"phoneSignInStart",{F:i,D:r}),this.H=o||null,this.M=t,this.l=e,this.w=n||null,this.pa=s||null}function ld(e,t,n,i){try{var a=t.U(eo)}catch(e){return}a?Zs?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",dn("Verifying...").toString()),xd(e,t.I(A(e.cc,e),[ks(a),n],(function(n){var i=Uc(t);t.$("firebaseui-icon-done",dn("Code sent!").toString());var r=setTimeout((function(){t.h(),t.m(),ho("phoneSignInFinish",e,i,a,15,n)}),1e3);xd(e,(function(){t&&t.h(),clearTimeout(r)}))}),(function(n){if(t.h(),!n.name||"cancel"!=n.name){grecaptcha.reset(to),Zs=null;var i=n&&n.message||"";if(n.code)switch(n.code){case"auth/too-many-requests":i=dn("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":return t.O().focus(),void ac(t.B(),Rn().toString());case"auth/admin-restricted-operation":if(Us(Nd(e)))return n=Uc(t),t.m(),void ho("handleUnauthorizedUser",e,n,ks(a),r.default.auth.PhoneAuthProvider.PROVIDER_ID);i=il(n);break;default:i=il(n)}t.a(i)}})))):Qs?ac(t.u(),dn("Solve the reCAPTCHA").toString()):!Qs&&i&&t.i().click():(t.O().focus(),ac(t.B(),Rn().toString()))}function dd(e,t,n,i,r){Mc.call(this,yu,{Sb:t},r,"providerSignIn",{F:n,D:i}),this.i=e}function hd(e,t,n,i,r,a,s){Mc.call(this,Bc,{email:n,Va:!!t,ia:!!a},s,"signIn",{F:i,D:r}),this.i=e,this.u=t}function fd(e,t,n,i,r,a,s){Mc.call(this,iu,{kc:e,yb:n,Eb:!!i},s,"unauthorizedUser",{F:r,D:a}),this.l=t,this.i=i}function pd(e,t,n,i,r,a){Mc.call(this,ru,{email:e},a,"unsupportedProvider",{F:i,D:r}),this.l=t,this.i=n}function gd(e,t){this.$=!1;var n=bd(t);if(vd[n])throw Error('An AuthUI instance already exists for the key "'+n+'"');vd[n]=this,this.a=e,this.u=null,this.Y=!1,md(this.a),this.h=r.default.initializeApp({apiKey:e.app.options.apiKey,authDomain:e.app.options.authDomain},e.app.name+"-firebaseui-temp").auth(),(e=e.emulatorConfig)&&(n=e.port,this.h.useEmulator(e.protocol+"://"+e.host+(null===n?"":":"+n),e.options)),md(this.h),this.h.setPersistence&&this.h.setPersistence(r.default.auth.Auth.Persistence.SESSION),this.oa=t,this.ca=new As,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=Cr.Xa(),this.j=this.C=null,this.da=this.A=!1}function md(e){e&&e.INTERNAL&&e.INTERNAL.logFramework&&e.INTERNAL.logFramework("FirebaseUI-web")}c(ud,Mc),ud.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||Fc(this,this.O(),this.i()),jc(this,this.i(),this.l),this.O().focus(),xl(this.O(),(this.O().value||"").length),Mc.prototype.v.call(this)},ud.prototype.o=function(){this.w=this.l=null,Mc.prototype.o.call(this)},P(ud.prototype,{Cb:Pc,O:td,B:id,ea:function(e,t,n){var i=this,r=td.call(this),a=nd.call(this),s=id.call(this),o=e||Is,c=o.a;if(0==c.length)throw Error("No available countries provided.");rd.call(i,o,t),ic(this,a,(function(){od.call(i,o)})),tc(this,r,(function(){sc(s)&&(ec(r,!0),rc(s));var e=$(vo(r)||""),t=ms(this.Ba),n=gs(o,e);e=ad("1-US-0",c),n.length&&n[0].b!=t.b&&(t=n[0],cd.call(i,"1"==t.b&&e?"1-US-0":t.c,o))})),n&&nc(this,r,(function(){n()}))},U:function(e){var t=$(vo(td.call(this))||""),n=(e=e||Is).a,i=gs(Is,t);if(i.length&&!H(n,i[0]))throw bo(td.call(this)),td.call(this).focus(),ac(id.call(this),dn("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return n=ms(this.Ba),i.length&&i[0].b!=n.b&&cd.call(this,i[0].c,e),i.length&&(t=t.substr(i[0].b.length+1)),t?new _s(this.Ba,t):null},Ja:nd,ba:function(){return Xo(this,"firebaseui-recaptcha-container")},u:function(){return Xo(this,"firebaseui-id-recaptcha-error")},i:Su,ua:Cu,P:Tu}),lo.phoneSignInStart=function(e,t,n,i){var a=function(e){var t=null;if(Ps(e).forEach((function(e){e.provider==r.default.auth.PhoneAuthProvider.PROVIDER_ID&&E(e.recaptchaParameters)&&!Array.isArray(e.recaptchaParameters)&&(t=oe(e.recaptchaParameters))})),t){var n=[];uo.forEach((function(e){void 0!==t[e]&&(n.push(e),delete t[e])})),n.length&&Qr('The following provided "recaptchaParameters" keys are not allowed: '+n.join(", "))}return t}(Nd(e))||{};Zs=null,Qs=!(a&&"invisible"===a.size);var s=sl(e),o=function(e){var t=(e=xs(e,r.default.auth.PhoneAuthProvider.PROVIDER_ID))&&e.defaultCountry||null;t=t&&vs(t);var n=null;return e&&"string"==typeof e.loginHint&&(n=Es(e.loginHint)),t&&t[0]||n&&ms(n.a)||null}(Nd(e)),c=s?function(e){var t=null;return(e=xs(e,r.default.auth.PhoneAuthProvider.PROVIDER_ID))&&"string"==typeof e.loginHint&&(t=Es(e.loginHint)),e&&e.defaultNationalNumber||t&&t.Aa||null}(Nd(e)):null;o=n&&n.a||o&&o.c||null,n=n&&n.Aa||c,(c=Bs(Nd(e)))&&ys(c),eo=c?new ps(Bs(Nd(e))):Is;var u=new ud((function(t){ld(e,u,l,!(!t||!t.keyCode))}),Qs,s?null:function(){l.clear(),u.m(),ol(e,t)},zs(Nd(e)),Hs(Nd(e)),s,eo,o,n);u.render(t),wd(e,u),i&&u.a(i),a.callback=function(t){u.u()&&rc(u.u()),Zs=t,Qs||ld(e,u,l)},a["expired-callback"]=function(){Zs=null};var l=new r.default.auth.RecaptchaVerifier(Qs?u.ba():u.i(),a,Ed(e).app);xd(e,u.I(A(l.render,l),[],(function(e){to=e}),(function(n){n.name&&"cancel"==n.name||(n=il(n),u.m(),ol(e,t,void 0,n))})))},lo.prefilledEmailSignIn=function(e,t,n){var i=new Nl;i.render(t),wd(e,i),xd(e,i.I(A(_d(e).fetchSignInMethodsForEmail,_d(e)),[n],(function(r){i.m();var a=!(!al(e)||!Sd(e));ul(e,t,r,n,void 0,a)}),(function(r){r=il(r),i.m(),ho("signIn",e,t,n,r)})))},c(dd,Mc),dd.prototype.v=function(){this.l(this.i),Mc.prototype.v.call(this)},dd.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(dd.prototype,{l:function(e){function t(t){e(t)}for(var n=this.g?zt("firebaseui-id-idp-button",this.g||this.s.a):[],i=0;i<n.length;i++){var r=n[i];ic(this,r,R(t,Ql(r,"providerId")))}}}),lo.providerSignIn=function(e,t,n,i){var a=new dd((function(n){n==r.default.auth.EmailAuthProvider.PROVIDER_ID?(a.m(),dl(e,t,i)):n==r.default.auth.PhoneAuthProvider.PROVIDER_ID?(a.m(),ho("phoneSignInStart",e,t)):"anonymous"==n?function(e,t){xd(e,t.I(A(e.$b,e),[],(function(n){return t.m(),el(e,t,n,!0)}),(function(e){e.name&&"cancel"==e.name||(Yr("ContinueAsGuest: "+e.code,void 0),e=il(e),t.a(e))})))}(e,a):rl(e,a,n,i),Ld(e),e.l.cancel()}),Ns(Nd(e)),zs(Nd(e)),Hs(Nd(e)));a.render(t),wd(e,a),n&&a.a(n),function(e){Ld(e);try{Tr(e.l,Ls(Nd(e)),function(e){var t;return Ld(e),(t=e.Z)||(e=js(e=Nd(e),r.default.auth.GoogleAuthProvider.PROVIDER_ID),t=!(!e||"select_account"!==e.prompt)),t}(e)).then((function(t){return!!e.g&&function(e,t,n){if(n&&n.credential&&n.clientId===Ls(Nd(e))){if(Fs(Nd(e),r.default.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var i=JSON.parse(atob(n.credential.split(".")[1])).email}catch(a){}return rl(e,t,r.default.auth.GoogleAuthProvider.PROVIDER_ID,i),qi(!0)}return a=r.default.auth.GoogleAuthProvider.credential(n.credential),s=!1,a=t.I(A(e.ac,e),[a],(function(n){var i=Uc(t);t.m(),ho("callback",e,i,qi(n)),s=!0}),(function(n){if(!(n.name&&"cancel"==n.name||n&&"auth/credential-already-in-use"==n.code))if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential){var i=Uc(t);t.m(),ho("callback",e,i,Ki(n))}else n&&"auth/admin-restricted-operation"==n.code&&Us(Nd(e))?(n=Uc(t),t.m(),ho("handleUnauthorizedUser",e,n,null,r.default.auth.GoogleAuthProvider.PROVIDER_ID)):(n=il(n),t.a(n))})),xd(e,a),a.then((function(){return s}),(function(){return!1}))}var a,s;return n&&t.a(dn("The selected credential for the authentication provider is not supported!").toString()),qi(!1)}(e,e.g,t)}))}catch(e){}}(e)},lo.sendEmailLinkForSignIn=function(e,t,n,i){var a=new gl;a.render(t),wd(e,a),ll(e,a,n,i,(function(i){a.m(),i&&"auth/admin-restricted-operation"==i.code&&Us(Nd(e))?ho("handleUnauthorizedUser",e,t,n,r.default.auth.EmailAuthProvider.PROVIDER_ID):(i=il(i),ho("signIn",e,t,n,i))}))},c(hd,Mc),hd.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),xl(this.l(),(this.l().value||"").length),Mc.prototype.v.call(this)},hd.prototype.o=function(){this.u=this.i=null,Mc.prototype.o.call(this)},P(hd.prototype,{l:Nu,M:Lu,w:Mu,H:Uu,j:Fu,U:Su,P:Cu,B:Tu}),lo.signIn=function(e,t,n,i){var r=al(e),a=new hd((function(){var t=a,n=t.j()||"";n&&cl(e,t,n)}),r?null:function(){a.m(),ol(e,t,n)},n,zs(Nd(e)),Hs(Nd(e)),r);a.render(t),wd(e,a),i&&a.a(i)},c(fd,Mc),fd.prototype.v=function(){var e=this,t=Xo(this,"firebaseui-id-unauthorized-user-help-link");this.i&&t&&ic(this,t,(function(){e.i()})),ic(this,this.u(),(function(){e.l()})),this.u().focus(),Mc.prototype.v.call(this)},fd.prototype.o=function(){this.i=this.l=null,Mc.prototype.o.call(this)},P(fd.prototype,{u:Cu}),lo.handleUnauthorizedUser=function(e,t,n,i){function a(){ol(e,t)}i===r.default.auth.EmailAuthProvider.PROVIDER_ID?a=function(){dl(e,t)}:i===r.default.auth.PhoneAuthProvider.PROVIDER_ID&&(a=function(){ho("phoneSignInStart",e,t)});var s=null,o=null;i===r.default.auth.EmailAuthProvider.PROVIDER_ID&&Ms(Nd(e))?(s=function(e){return(e=xs(e,r.default.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.adminEmail||null}(Nd(e)),o=function(e){if((e=xs(e,r.default.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp){var t=e.disableSignUp.helpLink||null;if(t&&"string"==typeof t)return function(){sr(t)}}return null}(Nd(e))):Us(Nd(e))&&(s=function(e){return(e=e.a.get("adminRestrictedOperation"))&&e.adminEmail?e.adminEmail:null}(Nd(e)),o=function(e){if(e=e.a.get("adminRestrictedOperation")||null){var t=e.helpLink||null;if(t&&"string"==typeof t)return function(){sr(t)}}return null}(Nd(e)));var c=new fd(n,(function(){c.m(),a()}),s,o,zs(Nd(e)),Hs(Nd(e)));c.render(t),wd(e,c)},c(pd,Mc),pd.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Mc.prototype.v.call(this)},pd.prototype.o=function(){this.i=this.l=null,Mc.prototype.o.call(this)},P(pd.prototype,{u:Su,B:Cu,w:Tu}),lo.unsupportedProvider=function(e,t,n){var i=new pd(n,(function(){i.m(),ho("passwordRecovery",e,t,n)}),(function(){i.m(),ol(e,t,n)}),zs(Nd(e)),Hs(Nd(e)));i.render(t),wd(e,i)};var vd={};function bd(e){return e||"[DEFAULT]"}function yd(e){return Ld(e),e.i||(e.i=Rd(e,(function(t){return t&&!ns(kd(e))?qi(Ed(e).getRedirectResult().then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Fd(e,t)}))):qi(_d(e).getRedirectResult().then((function(t){return Rs(Nd(e))&&!t.user&&e.j&&!e.j.isAnonymous?Ed(e).getRedirectResult():t})))}))),e.i}function wd(e,t){Ld(e),e.g=t}var Id=null;function _d(e){return Ld(e),e.h}function Ed(e){return Ld(e),e.a}function kd(e){return Ld(e),e.oa}function Sd(e){return Ld(e),e.O?e.O.emailHint:void 0}function Cd(e){return"signIn"===((e=new Ve(e)).a.a.get(Ge.ub)||null)&&!!e.a.a.get(Ge.$a)}function Td(e,t,n,i){Ld(e),void 0!==e.a.languageCode&&(e.u=e.a.languageCode);var r="en".replace(/_/g,"-");e.a.languageCode=r,e.h.languageCode=r,e.Y=!0,void 0!==e.a.tenantId&&(e.h.tenantId=e.a.tenantId),e.ib(n),e.O=i||null;var a=h.document;e.C?e.C.then((function(){"complete"==a.readyState?Ad(e,t):si(window,"load",(function(){Ad(e,t)}))})):"complete"==a.readyState?Ad(e,t):si(window,"load",(function(){Ad(e,t)}))}function Ad(e,t){var n=or(t,"Could not find the FirebaseUI widget element on the page.");if(n.setAttribute("lang","en".replace(/_/g,"-")),Id){var i=Id;Ld(i),ns(kd(i))&&Qr("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),Id.reset()}if(Id=e,e.T=n,function(e,t){e.L=null,e.J=new ki(t),e.J.register(),ri(e.J,"pageEnter",(function(t){if(t=t&&t.pageId,e.L!=t){var n=Nd(e);(n=Xs(n).uiChanged||null)&&n(e.L,t),e.L=t}}))}(e,n),Va(new za)&&Va(new Ha)){t=or(t,"Could not find the FirebaseUI widget element on the page."),n=(n=we(n=cr(),i=us(Nd(e).a,"queryParameterForSignInSuccessUrl")))?_t(kt(n)).toString():null;e:{i=cr();var r=Vs(Nd(e));for(a in i=we(i,r)||"",oo)if(oo[a].toLowerCase()==i.toLowerCase()){var a=oo[a];break e}a="callback"}switch(a){case"callback":n&&(a=kd(e),es(Ya,n,a)),e.nb()?ho("callback",e,t):ol(e,t,Sd(e));break;case"resetPassword":ho("passwordReset",e,t,hl(),fl());break;case"recoverEmail":ho("emailChangeRevocation",e,t,hl());break;case"revertSecondFactorAddition":ho("revertSecondFactorAddition",e,t,hl());break;case"verifyEmail":ho("emailVerification",e,t,hl(),fl());break;case"verifyAndChangeEmail":ho("verifyAndChangeEmail",e,t,hl(),fl());break;case"signIn":ho("emailLinkSignInCallback",e,t,cr()),Md();break;case"select":n&&(a=kd(e),es(Ya,n,a)),ol(e,t);break;default:throw Error("Unhandled widget operation.")}(t=Xs(t=Nd(e)).uiShown||null)&&t()}else t=or(t,"Could not find the FirebaseUI widget element on the page."),(a=new Zu(dn("The browser you are using does not support Web Storage. Please try again in a different browser.").toString())).render(t),wd(e,a);t=e.g&&"blank"==e.g.Ga&&qs(Nd(e)),as(kd(e))&&!t&&(Dd(e,(t=as(kd(e))).a),Qa(Ja,kd(e)))}function Rd(e,t){if(e.A)return t(Pd(e));if(xd(e,(function(){e.A=!1})),Rs(Nd(e))){var n=new ji((function(n){xd(e,e.a.onAuthStateChanged((function(i){e.j=i,e.A||(e.A=!0,n(t(Pd(e))))})))}));return xd(e,n),n}return e.A=!0,t(null)}function Pd(e){return Ld(e),Rs(Nd(e))&&e.j&&e.j.isAnonymous?e.j:null}function xd(e,t){if(Ld(e),t){e.s.push(t);var n=function(){q(e.s,(function(e){return e==t}))};"function"!=typeof t&&t.then(n,n)}}function Od(e){void 0!==e.a.languageCode&&e.Y&&(e.Y=!1,e.a.languageCode=e.u)}function Dd(e,t){e.a.tenantId=t,e.h.tenantId=t}function Nd(e){return Ld(e),e.ca}function Ld(e){if(e.$)throw Error("AuthUI instance is deleted!")}function Md(){var e=cr();if(Cd(e)){for(var t in e=new Ve(e),Ge)Ge.hasOwnProperty(t)&&Ue(e.a.a,Ge[t]);t={state:"signIn",mode:"emailLink",operation:"clear"};var n=h.document.title;h.history&&h.history.replaceState&&h.history.replaceState(t,n,e.toString())}}function Ud(e){return Ld(e),_d(e).signOut()}function Fd(e,t,n){if(Ld(e),t&&t.code&&("auth/email-already-in-use"==t.code||"auth/credential-already-in-use"==t.code)){var i=$s(Nd(e));return qi().then((function(){return i(new Ln("anonymous-upgrade-merge-conflict",null,n||t.credential))})).then((function(){throw e.g&&(e.g.m(),e.g=null),t}))}return Ki(t)}function jd(e,t,n,i){Mc.call(this,ku,void 0,i,"providerMatchByEmail",{F:t,D:n}),this.i=e}function Bd(e,t,n,i,r){Mc.call(this,Eu,{ec:t},r,"selectTenant",{F:n,D:i}),this.i=e}function Vd(e){Mc.call(this,qc,void 0,e,"spinner")}function zd(e){for(var t in this.a=new ss,os(this.a,"authDomain"),os(this.a,"displayMode",$d),os(this.a,"tenants"),os(this.a,"callbacks"),os(this.a,"tosUrl"),os(this.a,"privacyPolicyUrl"),e)if(e.hasOwnProperty(t))try{cs(this.a,t,e[t])}catch(e){Yr('Invalid config: "'+t+'"',void 0)}}function Hd(e){return e.a.get("callbacks")||{}}function Wd(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Qr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){sr(t)}}return null}function Gd(e){var t=e.a.get("tosUrl")||null,n=e.a.get("privacyPolicyUrl")||null;if(n&&!t&&Qr("Terms of Service URL is missing, the link will not be displayed."),t&&n){if("function"==typeof n)return n;if("string"==typeof n)return function(){sr(n)}}return null}function qd(e,t){if(!(e=e.a.get("tenants"))||!e.hasOwnProperty(t)&&!e.hasOwnProperty(Zd))throw Error("Invalid tenant configuration!")}function Kd(e,t,n){if(!(e=e.a.get("tenants")))throw Error("Invalid tenant configuration!");var i=[];if(!(e=e[t]||e[Zd]))return Yr("Invalid tenant configuration: "+t+" is not configured!",void 0),i;if(!(t=e.signInOptions))throw Error("Invalid tenant configuration: signInOptions are invalid!");return t.forEach((function(e){if("string"==typeof e)i.push(e);else if("string"==typeof e.provider){var t=e.hd;t&&n?(t instanceof RegExp?t:new RegExp("@"+t.replace(".","\\.")+"$")).test(n)&&i.push(e.provider):i.push(e.provider)}else Yr(e="Invalid tenant configuration: signInOption "+JSON.stringify(e)+" is invalid!",void 0)})),i}function Jd(e,t,n){return e=function(e,t){var n=Yd,i=void 0===i?{}:i;return qd(e,t),function(e,t,n){return n=void 0===n?{}:n,Object.keys(e).filter((function(e){return t.includes(e)})).reduce((function(t,n){return t[n]=e[n],t}),n)}((e=e.a.get("tenants"))[t]||e[Zd],n,i)}(e,t),(t=e.signInOptions)&&n&&(t=t.filter((function(e){return"string"==typeof e?n.includes(e):n.includes(e.provider)})),e.signInOptions=t),e}(e=gd.prototype).nb=function(){return Ld(this),!!as(kd(this))||Cd(cr())},e.start=function(e,t){Td(this,e,t)},e.Db=function(){Ld(this),this.Z=!0},e.reset=function(){Ld(this);var e=this;this.T&&this.T.removeAttribute("lang"),this.J&&_i(this.J),Od(this),this.O=null,Md(),Qa(Ja,kd(this)),Ld(this),this.l.cancel(),this.i=qi({user:null,credential:null}),Id==this&&(Id=null),this.T=null;for(var t=0;t<this.s.length;t++)"function"==typeof this.s[t]?this.s[t]():this.s[t].cancel&&this.s[t].cancel();this.s=[],is(kd(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=Ud(this).then((function(){e.C=null}),(function(){e.C=null})))},e.ib=function(e){Ld(this);var t,n=this.ca;for(t in e)try{cs(n.a,t,e[t])}catch(e){Yr('Invalid config: "'+t+'"',void 0)}at&&cs(n.a,"popupMode",!1),Bs(n),!this.da&&Js(Nd(this))&&(Qr("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)},e.Wb=function(){Ld(this);var e=Nd(this),t=us(e.a,"widgetUrl");e=Vs(e);for(var n,i=t.search(ye),r=0,a=[];0<=(n=be(t,r,e,i));)a.push(t.substring(r,n)),r=Math.min(t.indexOf("&",n)+1||i,i);a.push(t.substr(r)),t=a.join("").replace(Ie,"$1"),(e+=i="="+encodeURIComponent("select"))?(0>(i=t.indexOf("#"))&&(i=t.length),0>(r=t.indexOf("?"))||r>i?(r=i,n=""):n=t.substring(r+1,i),i=(t=[t.substr(0,r),n,t.substr(i)])[1],t[1]=e?i?i+"&"+e:e:i,i=t[0]+(t[1]?"?"+t[1]:"")+t[2]):i=t,Nd(this).a.get("popupMode")?(i=i||"about:blank",(e={width:500,height:600,top:0<(e=(window.screen.availHeight-600)/2)?e:0,left:0<(t=(window.screen.availWidth-500)/2)?t:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1}).target=e.target||i.target||"google_popup",e.width=e.width||690,e.height=e.height||500,(e=rr(i,e))&&e.focus()):Ft(window.location,i)},e.Wa=function(){var e=this;return Ld(this),this.h.app.delete().then((function(){var t=bd(kd(e));delete vd[t],e.reset(),e.$=!0}))},e.Ib=function(e,t){Ld(this);var n=this,i=function(){for(var e=32,t=[];0<e;)t.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),e--;return t.join("")}();if(!Gs(Nd(this)))return Ki(Error("Email link sign-in should be enabled to trigger email sending."));var a=function(e){if(Gs(e)){var t={url:cr(),handleCodeInApp:!0};(e=xs(e,r.default.auth.EmailAuthProvider.PROVIDER_ID))&&"function"==typeof e.emailLinkSignIn&&ue(t,e.emailLinkSignIn()),e=t.url;var n=cr();n instanceof _e||(n=Ce(n)),e instanceof _e||(e=Ce(e));var i=n;n=new _e(i);var a=!!e.j;a?Ee(n,e.j):a=!!e.A,a?n.A=e.A:a=!!e.h,a?n.h=e.h:a=null!=e.C;var s=e.g;if(a)ke(n,e.C);else if(a=!!e.g)if("/"!=s.charAt(0)&&(i.h&&!i.g?s="/"+s:-1!=(i=n.g.lastIndexOf("/"))&&(s=n.g.substr(0,i+1)+s)),".."==s||"."==s)s="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){i=0==s.lastIndexOf("/",0),s=s.split("/");for(var o=[],c=0;c<s.length;){var u=s[c++];"."==u?i&&c==s.length&&o.push(""):".."==u?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),i&&c==s.length&&o.push("")):(o.push(u),i=!0)}s=o.join("/")}return a?n.g=s:a=""!==e.a.toString(),a?Se(n,je(e.a)):a=!!e.s,a&&(n.s=e.s),t.url=n.toString(),t}return null}(Nd(this)),s=new Ve(a.url);return function(e,t){t?e.a.a.set(Ge.Sa,t):Ue(e.a.a,Ge.Sa)}(s,i),t&&t.a&&(function(e,t,n){es(Xa,Ra(e,JSON.stringify(sa(t))),n)}(i,t,kd(this)),He(s,t.a.providerId)),function(e,t){null!==t?e.a.a.set(Ge.Qa,t?"1":"0"):Ue(e.a.a,Ge.Qa)}(s,function(e){return!(!(e=xs(e,r.default.auth.EmailAuthProvider.PROVIDER_ID))||!e.forceSameDevice)}(Nd(this))),Rd(this,(function(t){return t&&((t=t.uid)?s.a.a.set(Ge.Pa,t):Ue(s.a.a,Ge.Pa)),a.url=s.toString(),_d(n).sendSignInLinkToEmail(e,a)})).then((function(){var t=kd(n),r={};r.email=e,es($a,Ra(i,JSON.stringify(r)),t)}),(function(e){throw Qa(Xa,kd(n)),Qa($a,kd(n)),e}))},e.bc=function(e,t){Ld(this);var n=this;return _d(this).signInWithEmailAndPassword(e,t).then((function(i){return Rd(n,(function(a){return a?Ud(n).then((function(){return Fd(n,{code:"auth/email-already-in-use"},r.default.auth.EmailAuthProvider.credential(e,t))})):i}))}))},e.Yb=function(e,t){Ld(this);var n=this;return Rd(this,(function(i){if(i){var a=r.default.auth.EmailAuthProvider.credential(e,t);return i.linkWithCredential(a)}return _d(n).createUserWithEmailAndPassword(e,t)}))},e.ac=function(e){Ld(this);var t=this;return Rd(this,(function(n){return n?n.linkWithCredential(e).then((function(e){return e}),(function(n){if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential)throw n;return Fd(t,n,e)})):_d(t).signInWithCredential(e)}))},e.dc=function(e){Ld(this);var t=this,n=this.i;return this.i=null,Rd(this,(function(n){return n&&!ns(kd(t))?n.linkWithRedirect(e):_d(t).signInWithRedirect(e)})).then((function(){}),(function(e){throw t.i=n,e}))},e.cc=function(e,t){Ld(this);var n=this;return Rd(this,(function(i){return i?i.linkWithPhoneNumber(e,t).then((function(e){return new Pr(e,(function(e){if("auth/credential-already-in-use"==e.code)return Fd(n,e);throw e}))})):Ed(n).signInWithPhoneNumber(e,t).then((function(e){return new Pr(e)}))}))},e.$b=function(){return Ld(this),Ed(this).signInAnonymously()},e.Xb=function(e,t){return Ld(this),_d(this).signInWithEmailAndPassword(e,t)},c(jd,Mc),jd.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),xl(this.l(),(this.l().value||"").length),Mc.prototype.v.call(this)},jd.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},P(jd.prototype,{l:Nu,H:Lu,u:Mu,B:Uu,j:Fu,M:Su,w:Tu}),c(Bd,Mc),Bd.prototype.v=function(){!function(e,t){function n(e){t(e)}for(var i=e.g?zt("firebaseui-id-tenant-selection-button",e.g||e.s.a):[],r=0;r<i.length;r++){var a=i[r];ic(e,a,R(n,Ql(a,"tenantId")))}}(this,this.i),Mc.prototype.v.call(this)},Bd.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},c(Vd,Mc);var Yd=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],$d="optionFirst",Xd={pc:$d,oc:"identifierFirst"},Zd="*";function Qd(e,t){var n=this;this.s=or(e),this.a={},Object.keys(t).forEach((function(e){n.a[e]=new zd(t[e])})),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(e){this.ob=e||null},enumerable:!1})}function eh(e){e.j&&e.j.reset(),e.mb(),e.g&&e.g.m()}(e=Qd.prototype).Ub=function(e,t){var n=this;eh(this);var i=e.apiKey;return new ji((function(e,r){if(n.a.hasOwnProperty(i)){var a=Hd(n.a[i]).selectTenantUiHidden||null;if(function(e){for(var t in e=e.a.get("displayMode"),Xd)if(Xd[t]===e)return Xd[t];return $d}(n.a[i])===$d){var s=[];t.forEach((function(e){e=e||"_";var t=n.a[i].a.get("tenants");if(!t)throw Error("Invalid tenant configuration!");(t=t[e]||t[Zd])?e={tenantId:"_"!==e?e:null,V:t.fullLabel||null,displayName:t.displayName,za:t.iconUrl,ta:t.buttonColor}:(Yr("Invalid tenant configuration: "+e+" is not configured!",void 0),e=null),e&&s.push(e)}));var o=function(t){t={tenantId:t,providerIds:Kd(n.a[i],t||"_")},e(t)};if(1===s.length)return void o(s[0].tenantId);n.g=new Bd((function(e){eh(n),a&&a(),o(e)}),s,Wd(n.a[i]),Gd(n.a[i]))}else n.g=new jd((function(){var r=n.g.j();if(r){for(var s=0;s<t.length;s++){var o=Kd(n.a[i],t[s]||"_",r);if(0!==o.length)return r={tenantId:t[s],providerIds:o,email:r},eh(n),a&&a(),void e(r)}n.g.a(Dn({code:"no-matching-tenant-for-email"}).toString())}}),Wd(n.a[i]),Gd(n.a[i]));n.g.render(n.s),(r=Hd(n.a[i]).selectTenantUiShown||null)&&r()}else{var c=Error("Invalid project configuration: API key is invalid!");c.code="invalid-configuration",n.pb(c),r(c)}}))},e.Pb=function(e,t){if(!this.a.hasOwnProperty(e))throw Error("Invalid project configuration: API key is invalid!");var n=t||void 0;qd(this.a[e],t||"_");try{this.i=r.default.app(n).auth()}catch(a){var i=this.a[e].a.get("authDomain");if(!i)throw Error("Invalid project configuration: authDomain is required!");(e=r.default.initializeApp({apiKey:e,authDomain:i},n)).auth().tenantId=t,this.i=e.auth()}return this.i},e.Zb=function(e,t){var n=this;return new ji((function(i,r){function a(t,i){n.j=new gd(e),Td(n.j,n.s,t,i)}var s=e.app.options.apiKey;n.a.hasOwnProperty(s)||r(Error("Invalid project configuration: API key is invalid!"));var o=Jd(n.a[s],e.tenantId||"_",t&&t.providerIds);eh(n),r={signInSuccessWithAuthResult:function(e){return i(e),!1}};var c,u=Hd(n.a[s]).signInUiShown||null,l=!1;r.uiChanged=function(t,i){null===t&&"callback"===i?((t=Ht("firebaseui-id-page-callback",n.s))&&rc(t),n.h=new Vd,n.h.render(n.s)):l||null===t&&"spinner"===i||"blank"===i||(n.h&&(n.h.m(),n.h=null),l=!0,u&&u(e.tenantId))},o.callbacks=r,o.credentialHelper="none",t&&t.email&&(c={emailHint:t.email}),n.j?n.j.Wa().then((function(){a(o,c)})):a(o,c)}))},e.reset=function(){var e=this;return qi().then((function(){e.j&&e.j.Wa()})).then((function(){e.j=null,eh(e)}))},e.Vb=function(){var e=this;this.h||this.A||(this.A=window.setTimeout((function(){eh(e),e.h=new Vd,e.g=e.h,e.h.render(e.s),e.A=null}),500))},e.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},e.Bb=function(){return eh(this),this.g=new Ku,this.g.render(this.s),qi()},e.pb=function(e){var t,n=this,i=Dn({code:e.code}).toString()||e.message;eh(this),e.retry&&"function"==typeof e.retry&&(t=function(){n.reset(),e.retry()}),this.g=new Xu(i,t),this.g.render(this.s)},e.Rb=function(e){var t=this;return qi().then((function(){var n=t.i&&t.i.app.options.apiKey;if(!t.a.hasOwnProperty(n))throw Error("Invalid project configuration: API key is invalid!");if(qd(t.a[n],e.tenantId||"_"),!t.i.currentUser||t.i.currentUser.uid!==e.uid)throw Error("The user being processed does not match the signed in user!");return(n=Hd(t.a[n]).beforeSignInSuccess||null)?n(e):e})).then((function(t){if(t.uid!==e.uid)throw Error("User with mismatching UID returned.");return t}))},D("firebaseui.auth.FirebaseUiHandler",Qd),D("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Qd.prototype.Ub),D("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Qd.prototype.Pb),D("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Qd.prototype.Zb),D("firebaseui.auth.FirebaseUiHandler.prototype.reset",Qd.prototype.reset),D("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Qd.prototype.Vb),D("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Qd.prototype.mb),D("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Qd.prototype.Bb),D("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Qd.prototype.pb),D("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Qd.prototype.Rb),D("firebaseui.auth.AuthUI",gd),D("firebaseui.auth.AuthUI.getInstance",(function(e){return e=bd(e),vd[e]?vd[e]:null})),D("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",gd.prototype.Db),D("firebaseui.auth.AuthUI.prototype.start",gd.prototype.start),D("firebaseui.auth.AuthUI.prototype.setConfig",gd.prototype.ib),D("firebaseui.auth.AuthUI.prototype.signIn",gd.prototype.Wb),D("firebaseui.auth.AuthUI.prototype.reset",gd.prototype.reset),D("firebaseui.auth.AuthUI.prototype.delete",gd.prototype.Wa),D("firebaseui.auth.AuthUI.prototype.isPendingRedirect",gd.prototype.nb),D("firebaseui.auth.AuthUIError",Ln),D("firebaseui.auth.AuthUIError.prototype.toJSON",Ln.prototype.toJSON),D("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",no),D("firebaseui.auth.CredentialHelper.NONE",io),D("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),ji.prototype.catch=ji.prototype.Ca,ji.prototype.finally=ji.prototype.fc}).apply(void 0!==t?t:"undefined"!=typeof self?self:window)}.apply(void 0!==t?t:"undefined"!=typeof self?self:window),"undefined"!=typeof window&&(window.dialogPolyfill=n(s));firebaseui.auth})),a.register("6Daz0",(function(e,t){a("fBZos")})),a.register("fBZos",(function(e,n){var i=a("kP9ko");a("beEBC");var r=a("88zYJ"),s=a("beEBC"),o=a("6ExWU"),c=a("2xDiJ");function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(e=(0,c.getUA)()){return!("file:"!==u()&&"ionic:"!==u()&&"capacitor:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(e=(0,c.getUA)()){return(0,c.isIE)()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=(0,c.getUA)()){return/Edge\/\d+/.test(e)}(e)}function h(){try{const e=self.localStorage,t=r.aI();if(e)return e.setItem(t,"1"),e.removeItem(t),!d()||(0,c.isIndexedDBAvailable)()}catch(e){return f()&&(0,c.isIndexedDBAvailable)()}return!1}function f(){return void 0!==t&&"WorkerGlobalScope"in t&&"importScripts"in t}function p(){return("http:"===u()||"https:"===u()||(0,c.isBrowserExtension)()||l())&&!((0,c.isReactNative)()||(0,c.isNode)())&&h()&&!f()}function g(){return l()&&"undefined"!=typeof document}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const m={LOCAL:"local",NONE:"none",SESSION:"session"},v=r.ax,b="persistence";async function y(e){await e._initializationPromise;const t=w(),n=r.aA(b,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function w(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=r.ax;class _{async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return g()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return I(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!g()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}constructor(){this.browserResolver=r.az(r.k),this.cordovaResolver=r.az(s.cordovaPopupRedirectResolver),this.underlyingResolver=null,this._redirectPersistence=r.a,this._completeRedirectFn=r.aB,this._overrideRedirectResult=r.aC}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){return e.unwrap()}function k(e){const{_tokenResponse:t}=e instanceof c.FirebaseError?e.customData:e;if(!t)return null;if(!(e instanceof c.FirebaseError)&&"temporaryProof"in t&&"phoneNumber"in t)return r.P.credentialFromResult(e);const n=t.providerId;if(!n||n===r.o.PASSWORD)return null;let i;switch(n){case r.o.GOOGLE:i=r.Q;break;case r.o.FACEBOOK:i=r.N;break;case r.o.GITHUB:i=r.T;break;case r.o.TWITTER:i=r.W;break;default:const{oauthIdToken:e,oauthAccessToken:a,oauthTokenSecret:s,pendingToken:o,nonce:c}=t;return a||s||e||o?o?n.startsWith("saml.")?r.aL._create(n,o):r.J._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:a}):new r.U(n).credential({idToken:e,accessToken:a,rawNonce:c}):null}return e instanceof c.FirebaseError?i.credentialFromError(e):i.credentialFromResult(e)}function S(e,t){return t.catch((t=>{throw t instanceof c.FirebaseError&&function(e,t){var n,i;const a=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===(i=t)||void 0===i?void 0:i.code))t.resolver=new T(e,r.an(e,t));else if(a){const e=k(t),n=t;e&&(n.credential=e,n.tenantId=a.tenantId||void 0,n.email=a.email||void 0,n.phoneNumber=a.phoneNumber||void 0)}}(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:(i=e,k(i)),additionalUserInfo:r.al(e),user:A.getOrCreate(n)};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i}))}async function C(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>S(e,n.confirm(t))}}class T{get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return S(E(this.auth),this.resolver.resolveSignIn(e))}constructor(e,t){this.resolver=t,this.auth=e.wrapped()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static getOrCreate(e){return A.USER_MAP.has(e)||A.USER_MAP.set(e,new A(e)),A.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return S(this.auth,r.Z(this._delegate,e))}async linkWithPhoneNumber(e,t){return C(this.auth,r.l(this._delegate,e,t))}async linkWithPopup(e){return S(this.auth,r.d(this._delegate,e,_))}async linkWithRedirect(e){return await y(r.aE(this.auth)),r.g(this._delegate,e,_)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return S(this.auth,r._(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return C(this.auth,r.r(this._delegate,e,t))}reauthenticateWithPopup(e){return S(this.auth,r.e(this._delegate,e,_))}async reauthenticateWithRedirect(e){return await y(r.aE(this.auth)),r.h(this._delegate,e,_)}sendEmailVerification(e){return r.ab(this._delegate,e)}async unlink(e){return await r.ak(this._delegate,e),this}updateEmail(e){return r.ag(this._delegate,e)}updatePassword(e){return r.ah(this._delegate,e)}updatePhoneNumber(e){return r.u(this._delegate,e)}updateProfile(e){return r.af(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r.ac(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}constructor(e){this._delegate=e,this.multiFactor=r.ao(e)}}A.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R=r.ax;class P{get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?A.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r.G(this._delegate,e,t)}applyActionCode(e){return r.a2(this._delegate,e)}checkActionCode(e){return r.a3(this._delegate,e)}confirmPasswordReset(e,t){return r.a1(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return S(this._delegate,r.a5(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r.aa(this._delegate,e)}isSignInWithEmailLink(e){return r.a8(this._delegate,e)}async getRedirectResult(){R(p(),this._delegate,"operation-not-supported-in-this-environment");const e=await r.j(this._delegate,_);return e?S(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){s.addFrameworkForLogging(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:r,complete:a}=x(e,t,n);return this._delegate.onAuthStateChanged(i,r,a)}onIdTokenChanged(e,t,n){const{next:i,error:r,complete:a}=x(e,t,n);return this._delegate.onIdTokenChanged(i,r,a)}sendSignInLinkToEmail(e,t){return r.a7(this._delegate,e,t)}sendPasswordResetEmail(e,t){return r.a0(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){v(Object.values(m).includes(t),e,"invalid-persistence-type"),(0,c.isReactNative)()?v(t!==m.SESSION,e,"unsupported-persistence-type"):(0,c.isNode)()?v(t===m.NONE,e,"unsupported-persistence-type"):f()?v(t===m.NONE||t===m.LOCAL&&(0,c.isIndexedDBAvailable)(),e,"unsupported-persistence-type"):v(t===m.NONE||h(),e,"unsupported-persistence-type")}(this._delegate,e),e){case m.SESSION:t=r.a;break;case m.LOCAL:t=await r.az(r.i)._isAvailable()?r.i:r.b;break;case m.NONE:t=r.L;break;default:return r.as("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return S(this._delegate,r.X(this._delegate))}signInWithCredential(e){return S(this._delegate,r.Y(this._delegate,e))}signInWithCustomToken(e){return S(this._delegate,r.$(this._delegate,e))}signInWithEmailAndPassword(e,t){return S(this._delegate,r.a6(this._delegate,e,t))}signInWithEmailLink(e,t){return S(this._delegate,r.a9(this._delegate,e,t))}signInWithPhoneNumber(e,t){return C(this._delegate,r.s(this._delegate,e,t))}async signInWithPopup(e){return R(p(),this._delegate,"operation-not-supported-in-this-environment"),S(this._delegate,r.c(this._delegate,e,_))}async signInWithRedirect(e){return R(p(),this._delegate,"operation-not-supported-in-this-environment"),await y(this._delegate),r.f(this._delegate,e,_)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r.a4(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;R(n,"invalid-api-key",{appName:e.name}),R(n,"invalid-api-key",{appName:e.name});const i="undefined"!=typeof window?_:void 0;this._delegate=t.initialize({options:{persistence:O(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(r.B),this.linkUnderlyingAuth()}}function x(e,t,n){let i=e;"function"!=typeof e&&({next:i,error:t,complete:n}=e);const r=i;return{next:e=>r(e&&A.getOrCreate(e)),error:t,complete:n}}function O(e,t){const n=function(e,t){const n=w();if(!n)return[];const i=r.aA(b,e,t);switch(n.getItem(i)){case m.NONE:return[r.L];case m.LOCAL:return[r.i,r.a];case m.SESSION:return[r.a];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(r.i)||n.push(r.i),"undefined"!=typeof window)for(const e of[r.b,r.a])n.includes(e)||n.push(e);return n.includes(r.L)||n.push(r.L),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */P.Persistence=m;class D{static credential(e,t){return r.P.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}constructor(){this.providerId="phone",this._delegate=new r.P(E(i.default.auth()))}}D.PHONE_SIGN_IN_METHOD=r.P.PHONE_SIGN_IN_METHOD,D.PROVIDER_ID=r.P.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N=r.ax;class L{clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}constructor(e,t,n=i.default.app()){var a;N(null===(a=n.options)||void 0===a?void 0:a.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new r.R(e,t,n.auth()),this.type=this._delegate.type}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(M=i.default).INTERNAL.registerComponent(new(0,o.Component)("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new P(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r.A.EMAIL_SIGNIN,PASSWORD_RESET:r.A.PASSWORD_RESET,RECOVER_EMAIL:r.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r.A.VERIFY_EMAIL}},EmailAuthProvider:r.M,FacebookAuthProvider:r.N,GithubAuthProvider:r.T,GoogleAuthProvider:r.Q,OAuthProvider:r.U,SAMLAuthProvider:r.V,PhoneAuthProvider:D,PhoneMultiFactorGenerator:r.m,RecaptchaVerifier:L,TwitterAuthProvider:r.W,Auth:P,AuthCredential:r.H,Error:c.FirebaseError}).setInstantiationMode("LAZY").setMultipleInstances(!1)),M.registerVersion("@firebase/auth-compat","0.2.24")})),a.register("beEBC",(function(t,n){e(t.exports,"cordovaPopupRedirectResolver",(function(){return g})),e(t.exports,"addFrameworkForLogging",(function(){return v})),e(t.exports,"ActionCodeOperation",(function(){return a("88zYJ").A})),e(t.exports,"AuthCredential",(function(){return a("88zYJ").H})),e(t.exports,"EmailAuthProvider",(function(){return a("88zYJ").M})),e(t.exports,"FacebookAuthProvider",(function(){return a("88zYJ").N})),e(t.exports,"GithubAuthProvider",(function(){return a("88zYJ").T})),e(t.exports,"GoogleAuthProvider",(function(){return a("88zYJ").Q})),e(t.exports,"OAuthCredential",(function(){return a("88zYJ").J})),e(t.exports,"OAuthProvider",(function(){return a("88zYJ").U})),e(t.exports,"PhoneAuthProvider",(function(){return a("88zYJ").P})),e(t.exports,"PhoneMultiFactorGenerator",(function(){return a("88zYJ").m})),e(t.exports,"ProviderId",(function(){return a("88zYJ").o})),e(t.exports,"RecaptchaVerifier",(function(){return a("88zYJ").R})),e(t.exports,"SAMLAuthCredential",(function(){return a("88zYJ").aL})),e(t.exports,"SAMLAuthProvider",(function(){return a("88zYJ").V})),e(t.exports,"TwitterAuthProvider",(function(){return a("88zYJ").W})),e(t.exports,"_assert",(function(){return a("88zYJ").ax})),e(t.exports,"_castAuth",(function(){return a("88zYJ").aE})),e(t.exports,"_fail",(function(){return a("88zYJ").as})),e(t.exports,"_generateEventId",(function(){return a("88zYJ").aI})),e(t.exports,"_getInstance",(function(){return a("88zYJ").az})),e(t.exports,"_getRedirectResult",(function(){return a("88zYJ").aB})),e(t.exports,"_overrideRedirectResult",(function(){return a("88zYJ").aC})),e(t.exports,"_persistenceKeyName",(function(){return a("88zYJ").aA})),e(t.exports,"applyActionCode",(function(){return a("88zYJ").a2})),e(t.exports,"browserLocalPersistence",(function(){return a("88zYJ").b})),e(t.exports,"browserPopupRedirectResolver",(function(){return a("88zYJ").k})),e(t.exports,"browserSessionPersistence",(function(){return a("88zYJ").a})),e(t.exports,"checkActionCode",(function(){return a("88zYJ").a3})),e(t.exports,"confirmPasswordReset",(function(){return a("88zYJ").a1})),e(t.exports,"connectAuthEmulator",(function(){return a("88zYJ").G})),e(t.exports,"createUserWithEmailAndPassword",(function(){return a("88zYJ").a5})),e(t.exports,"debugErrorMap",(function(){return a("88zYJ").B})),e(t.exports,"fetchSignInMethodsForEmail",(function(){return a("88zYJ").aa})),e(t.exports,"getAdditionalUserInfo",(function(){return a("88zYJ").al})),e(t.exports,"getMultiFactorResolver",(function(){return a("88zYJ").an})),e(t.exports,"getRedirectResult",(function(){return a("88zYJ").j})),e(t.exports,"inMemoryPersistence",(function(){return a("88zYJ").L})),e(t.exports,"indexedDBLocalPersistence",(function(){return a("88zYJ").i})),e(t.exports,"isSignInWithEmailLink",(function(){return a("88zYJ").a8})),e(t.exports,"linkWithCredential",(function(){return a("88zYJ").Z})),e(t.exports,"linkWithPhoneNumber",(function(){return a("88zYJ").l})),e(t.exports,"linkWithPopup",(function(){return a("88zYJ").d})),e(t.exports,"linkWithRedirect",(function(){return a("88zYJ").g})),e(t.exports,"multiFactor",(function(){return a("88zYJ").ao})),e(t.exports,"reauthenticateWithCredential",(function(){return a("88zYJ")._})),e(t.exports,"reauthenticateWithPhoneNumber",(function(){return a("88zYJ").r})),e(t.exports,"reauthenticateWithPopup",(function(){return a("88zYJ").e})),e(t.exports,"reauthenticateWithRedirect",(function(){return a("88zYJ").h})),e(t.exports,"sendEmailVerification",(function(){return a("88zYJ").ab})),e(t.exports,"sendPasswordResetEmail",(function(){return a("88zYJ").a0})),e(t.exports,"sendSignInLinkToEmail",(function(){return a("88zYJ").a7})),e(t.exports,"signInAnonymously",(function(){return a("88zYJ").X})),e(t.exports,"signInWithCredential",(function(){return a("88zYJ").Y})),e(t.exports,"signInWithCustomToken",(function(){return a("88zYJ").$})),e(t.exports,"signInWithEmailAndPassword",(function(){return a("88zYJ").a6})),e(t.exports,"signInWithEmailLink",(function(){return a("88zYJ").a9})),e(t.exports,"signInWithPhoneNumber",(function(){return a("88zYJ").s})),e(t.exports,"signInWithPopup",(function(){return a("88zYJ").c})),e(t.exports,"signInWithRedirect",(function(){return a("88zYJ").f})),e(t.exports,"unlink",(function(){return a("88zYJ").ak})),e(t.exports,"updateEmail",(function(){return a("88zYJ").ag})),e(t.exports,"updatePassword",(function(){return a("88zYJ").ah})),e(t.exports,"updatePhoneNumber",(function(){return a("88zYJ").u})),e(t.exports,"updateProfile",(function(){return a("88zYJ").af})),e(t.exports,"verifyBeforeUpdateEmail",(function(){return a("88zYJ").ac})),e(t.exports,"verifyPasswordResetCode",(function(){return a("88zYJ").a4}));var i=a("88zYJ"),r=a("2xDiJ");a("MjY8E"),a("kZfxc"),a("6ExWU");i=a("88zYJ");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o(e,t,n){var r;const{BuildInfo:a}=s();(0,i.ap)(t.sessionId,"AuthEvent did not contain a session ID");const o=await async function(e){const t=function(e){if((0,i.ap)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),c={};return(0,i.aq)()?c.ibi=a.packageName:(0,i.ar)()?c.apn=a.packageName:(0,i.as)(e,"operation-not-supported-in-this-environment"),a.displayName&&(c.appDisplayName=a.displayName),c.sessionId=o,(0,i.at)(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,c)}class c extends i.ay{addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}}async function u(e){const t=await h()._get(f(e));return t&&await h()._remove(f(e)),t}function l(e,t){var n,r;const a=function(e){const t=p(e),n=t.link?decodeURIComponent(t.link):void 0,i=p(n).link,r=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return p(r).link||r||i||n||e}(t);if(a.includes("/__/auth/callback")){const t=p(a),s=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,o=null===(r=null===(n=null==s?void 0:s.code)||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],c=o?(0,i.aw)(o):null;return c?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:a,postBody:null}}return null}function d(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function h(){return(0,i.az)(i.b)}function f(e){return(0,i.aA)("authEvent",e.config.apiKey,e.name)}function p(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,r.querystringDecode)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=class{async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new c(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){(0,i.as)(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){!function(e){var t,n,r,a,o,c,u,l,d,h;const f=s();(0,i.ax)("function"==typeof(null===(t=null==f?void 0:f.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,i.ax)(void 0!==(null===(n=null==f?void 0:f.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,i.ax)("function"==typeof(null===(o=null===(a=null===(r=null==f?void 0:f.cordova)||void 0===r?void 0:r.plugins)||void 0===a?void 0:a.browsertab)||void 0===o?void 0:o.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.ax)("function"==typeof(null===(l=null===(u=null===(c=null==f?void 0:f.cordova)||void 0===c?void 0:c.plugins)||void 0===u?void 0:u.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.ax)("function"==typeof(null===(h=null===(d=null==f?void 0:f.cordova)||void 0===d?void 0:d.InAppBrowser)||void 0===h?void 0:h.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const a=await this._initialize(e);await a.initialized(),a.resetRedirect(),(0,i.aD)(),await this._originValidation(e);const c=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:d(),postBody:null,tenantId:e.tenantId,error:(0,i.aw)(e,"no-auth-event")}}(e,n,r);await function(e,t){return h()._set(f(e),t)}(e,c);const u=await o(e,c,t);return async function(e,t,n){const{cordova:r}=s();let a=()=>{};try{await new Promise(((s,o)=>{let c=null;function u(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function l(){c||(c=window.setTimeout((()=>{o((0,i.aw)(e,"redirect-cancelled-by-user"))}),2e3))}function d(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}t.addPassiveListener(u),document.addEventListener("resume",l,!1),(0,i.ar)()&&document.addEventListener("visibilitychange",d,!1),a=()=>{t.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",d,!1),c&&window.clearTimeout(c)}}))}finally{a()}}(e,a,await function(e){const{cordova:t}=s();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let a=null;r?t.plugins.browsertab.openUrl(e):a=t.InAppBrowser.open(e,(0,i.av)()?"_blank":"_system","location=yes"),n(a)}))}))}(u))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=s(),n={};(0,i.aq)()?n.iosBundleId=t.packageName:(0,i.ar)()?n.androidPackageName=t.packageName:(0,i.as)(e,"operation-not-supported-in-this-environment"),await(0,i.au)(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=s(),a=setTimeout((async()=>{await u(e),t.onEvent(m())}),500),o=async n=>{clearTimeout(a);const i=await u(e);let r=null;i&&(null==n?void 0:n.url)&&(r=l(i,n.url)),t.onEvent(r||m())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,o);const c=i,d=`${r.packageName.toLowerCase()}://`;s().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(d)&&o({url:e}),"function"==typeof c)try{c(e)}catch(e){console.error(e)}}}constructor(){this._redirectPersistence=i.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=i.aB,this._overrideRedirectResult=i.aC}};function m(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,i.aw)("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,t){(0,i.aE)(e)._logFramework(t)}})),a.register("88zYJ",(function(t,n){e(t.exports,"o",(function(){return u})),e(t.exports,"A",(function(){return l})),e(t.exports,"B",(function(){return h})),e(t.exports,"as",(function(){return v})),e(t.exports,"aw",(function(){return b})),e(t.exports,"ax",(function(){return _})),e(t.exports,"ap",(function(){return k})),e(t.exports,"az",(function(){return C})),e(t.exports,"L",(function(){return Q})),e(t.exports,"aA",(function(){return ee})),e(t.exports,"ar",(function(){return oe})),e(t.exports,"aq",(function(){return le})),e(t.exports,"av",(function(){return de})),e(t.exports,"aE",(function(){return me})),e(t.exports,"G",(function(){return be})),e(t.exports,"H",(function(){return Ie})),e(t.exports,"J",(function(){return Te})),e(t.exports,"M",(function(){return xe})),e(t.exports,"U",(function(){return Ne})),e(t.exports,"N",(function(){return Le})),e(t.exports,"Q",(function(){return Me})),e(t.exports,"T",(function(){return Ue})),e(t.exports,"aL",(function(){return Fe})),e(t.exports,"V",(function(){return je})),e(t.exports,"W",(function(){return Be})),e(t.exports,"X",(function(){return We})),e(t.exports,"ak",(function(){return Je})),e(t.exports,"Y",(function(){return Qe})),e(t.exports,"Z",(function(){return et})),e(t.exports,"_",(function(){return tt})),e(t.exports,"$",(function(){return nt})),e(t.exports,"a0",(function(){return st})),e(t.exports,"a1",(function(){return ot})),e(t.exports,"a2",(function(){return ct})),e(t.exports,"a3",(function(){return ut})),e(t.exports,"a4",(function(){return lt})),e(t.exports,"a5",(function(){return dt})),e(t.exports,"a6",(function(){return ht})),e(t.exports,"a7",(function(){return ft})),e(t.exports,"a8",(function(){return pt})),e(t.exports,"a9",(function(){return gt})),e(t.exports,"aa",(function(){return mt})),e(t.exports,"ab",(function(){return vt})),e(t.exports,"ac",(function(){return bt})),e(t.exports,"af",(function(){return yt})),e(t.exports,"ag",(function(){return wt})),e(t.exports,"ah",(function(){return It})),e(t.exports,"al",(function(){return Rt})),e(t.exports,"an",(function(){return Ot})),e(t.exports,"ao",(function(){return Lt})),e(t.exports,"b",(function(){return jt})),e(t.exports,"a",(function(){return Vt})),e(t.exports,"aI",(function(){return Ht})),e(t.exports,"i",(function(){return nn})),e(t.exports,"R",(function(){return gn})),e(t.exports,"s",(function(){return vn})),e(t.exports,"l",(function(){return bn})),e(t.exports,"r",(function(){return yn})),e(t.exports,"u",(function(){return In})),e(t.exports,"P",(function(){return _n})),e(t.exports,"c",(function(){return Pn})),e(t.exports,"e",(function(){return xn})),e(t.exports,"d",(function(){return On})),e(t.exports,"aD",(function(){return Un})),e(t.exports,"aC",(function(){return Fn})),e(t.exports,"f",(function(){return Vn})),e(t.exports,"h",(function(){return zn})),e(t.exports,"g",(function(){return Hn})),e(t.exports,"j",(function(){return Wn})),e(t.exports,"aB",(function(){return Gn})),e(t.exports,"ay",(function(){return Kn})),e(t.exports,"au",(function(){return $n})),e(t.exports,"at",(function(){return hi})),e(t.exports,"k",(function(){return pi})),e(t.exports,"m",(function(){return vi})),e(t.exports,"n",(function(){return Ei}));var i=a("2xDiJ"),r=a("MjY8E"),s=a("kZfxc"),o=a("4tSb9"),c=a("6ExWU");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},f=d,p=new(0,i.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),g=new(0,s.Logger)("@firebase/auth");function m(e,...t){g.logLevel<=s.LogLevel.ERROR&&g.error(`Auth (${r.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,...t){throw I(e,...t)}function b(e,...t){return I(e,...t)}function y(e,t,n){const r=Object.assign(Object.assign({},f()),{[t]:n});return new(0,i.ErrorFactory)("auth","Firebase",r).create(t,{appName:e.name})}function w(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&v(e,"argument-error"),y(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return p.create(e,...t)}function _(e,t,...n){if(!e)throw I(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw m(t),new Error(t)}function k(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new Map;function C(e){k(e instanceof Function,"Expected a class definition");let t=S.get(e);return t?(k(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,S.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function A(){return"http:"===R()||"https:"===R()}function R(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(A()||(0,i.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,k(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.isMobileCordova)()||(0,i.isReactNative)()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){k(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},N=new P(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function M(e,t,n,r,a={}){return U(e,a,(async()=>{let a={},s={};r&&("GET"===t?s=r:a={body:JSON.stringify(r)});const o=(0,i.querystring)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),O.fetch()(j(e,e.config.apiHost,n,o),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},a))}))}async function U(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},D),t);try{const t=new B(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw V(e,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const t=i.ok?a.errorMessage:a.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",a);if("USER_DISABLED"===n)throw V(e,"user-disabled",a);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw y(e,o,s);v(e,o)}}catch(t){if(t instanceof i.FirebaseError)throw t;v(e,"network-request-failed")}}async function F(e,t,n,i,r={}){const a=await M(e,t,n,i,r);return"mfaPendingCredential"in a&&v(e,"multi-factor-auth-required",{_serverResponse:a}),a}function j(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?x(e.config,r):`${e.config.apiScheme}://${r}`}class B{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(b(this.auth,"network-request-failed"))),N.get())}))}}function V(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=b(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){return 1e3*Number(e)}function W(e){var t;const[n,r,a]=e.split(".");if(void 0===n||void 0===r||void 0===a)return m("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.base64Decode)(r);return e?JSON.parse(e):(m("Failed to decode base64 JWT payload"),null)}catch(e){return m("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function G(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class q{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e){var t;const n=e.auth,i=await e.getIdToken(),r=await G(e,async function(e,t){return M(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));_(null==r?void 0:r.users.length,n,"internal-error");const a=r.users[0];e._notifyReloadListener(a);const s=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?a.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,o.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const c=(u=e.providerData,l=s,[...u.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var u,l;const d=e.isAnonymous,h=!(e.email&&a.passwordHash||(null==c?void 0:c.length)),f=!!d&&h,p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new K(a.createdAt,a.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(void 0!==e.idToken,"internal-error"),_(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=W(e);return _(t,"internal-error"),_(void 0!==t.exp,"internal-error"),_(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:a}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await U(e,{},(async()=>{const n=(0,i.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:a}=e.config,s=j(e,r,"/v1/token",`key=${a}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(a))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,a=new Y;return n&&(_("string"==typeof n,"internal-error",{appName:e}),a.refreshToken=n),i&&(_("string"==typeof i,"internal-error",{appName:e}),a.accessToken=i),r&&(_("number"==typeof r,"internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Y,this.toJSON())}_performRefresh(){return E("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){_("string"==typeof e||void 0===e,"internal-error",{appName:t})}class X{async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,i.getModularInstance)(e),r=await n.getIdToken(t),a=W(r);_(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const s="object"==typeof a.firebase?a.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:a,token:r,authTime:z(H(a.auth_time)),issuedAtTime:z(H(a.iat)),expirationTime:z(H(a.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,i.getModularInstance)(e);await J(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new X(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,async function(e,t){return M(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,a,s,o,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(i=t.email)&&void 0!==i?i:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(a=t.photoURL)&&void 0!==a?a:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:y,isAnonymous:w,providerData:I,stsTokenManager:E}=t;_(b&&E,e,"internal-error");const k=Y.fromJSON(this.name,E);_("string"==typeof b,e,"internal-error"),$(l,e.name),$(d,e.name),_("boolean"==typeof y,e,"internal-error"),_("boolean"==typeof w,e,"internal-error"),$(h,e.name),$(f,e.name),$(p,e.name),$(g,e.name),$(m,e.name),$(v,e.name);const S=new X({uid:b,auth:e,email:d,emailVerified:y,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:k,createdAt:m,lastLoginAt:v});return I&&Array.isArray(I)&&(S.providerData=I.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const i=new Y;i.updateFromServerResponse(t);const r=new X({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await J(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=(0,o.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new K(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Z.type="NONE";const Q=Z;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e,t,n){return`firebase:${e}:${t}:${n}`}class te{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?X._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new te(C(Q),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||C(Q);const a=ee(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(a);if(t){const i=X._fromJSON(e,t);n!==r&&(s=i),r=n;break}}catch(e){}const o=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&o.length?(r=o[0],s&&await r._set(a,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(a)}catch(e){}}))),new te(r,e,n)):new te(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ee(this.userKey,i.apiKey,r),this.fullPersistenceKey=ee("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(se(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ie(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ce(t))return"Blackberry";if(ue(t))return"Webos";if(re(t))return"Safari";if((t.includes("chrome/")||ae(t))&&!t.includes("edge/"))return"Chrome";if(oe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ie(e=(0,i.getUA)()){return/firefox\//i.test(e)}function re(e=(0,i.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ae(e=(0,i.getUA)()){return/crios\//i.test(e)}function se(e=(0,i.getUA)()){return/iemobile/i.test(e)}function oe(e=(0,i.getUA)()){return/android/i.test(e)}function ce(e=(0,i.getUA)()){return/blackberry/i.test(e)}function ue(e=(0,i.getUA)()){return/webos/i.test(e)}function le(e=(0,i.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function de(e=(0,i.getUA)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function he(e=(0,i.getUA)()){return le(e)||oe(e)||ue(e)||ce(e)||/windows phone/i.test(e)||se(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fe(e,t=[]){let n;switch(e){case"Browser":n=ne((0,i.getUA)());break;case"Worker":n=`${ne((0,i.getUA)())}-${e}`;break;default:n=e}const a=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.SDK_VERSION}/${a}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=C(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await te.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,a=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==a||!(null==s?void 0:s.user)||(i=s.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await J(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.getModularInstance)(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(C(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,i.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&C(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await te.create(this,[C(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return _(a,this,"internal-error"),a.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ve(this),this.idTokenSubscription=new ve(this),this.beforeStateQueue=new pe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function me(e){return(0,i.getModularInstance)(e)}class ve{get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.createSubscribe)((e=>this.observer=e))}}function be(e,t,n){const i=me(e);_(i._canInitEmulator,i,"emulator-config-failed"),_(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),a=ye(t),{host:s,port:o}=function(e){const t=ye(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:we(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:we(t)}}}(t),c=null===o?"":`:${o}`;i.config.emulator={url:`${a}//${s}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:o,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ye(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function we(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Ie{toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(e,t){return M(e,"POST","/v1/accounts:resetPassword",L(e,t))}async function Ee(e,t){return M(e,"POST","/v1/accounts:update",t)}async function ke(e,t){return M(e,"POST","/v1/accounts:sendOobCode",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends Ie{static _fromEmailAndPassword(e,t){return new Se(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Se(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return F(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ee(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(e,t){return F(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Ie{static _fromParams(e){const t=new Te(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=(0,o.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;const a=new Te(n,i);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){return Ce(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ce(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ce(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.querystring)(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re extends Ie{static _fromVerification(e,t){return new Re({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Re({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ae)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Re({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{static parseLink(e){const t=function(e){const t=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).link,n=t?(0,i.querystringDecode)((0,i.extractQuerystring)(t)).deep_link_id:null,r=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).deep_link_id;return(r?(0,i.querystringDecode)((0,i.extractQuerystring)(r)).link:null)||r||n||t||e}(e);try{return new Pe(t)}catch(e){return null}}constructor(e){var t,n,r,a,s,o;const c=(0,i.querystringDecode)((0,i.extractQuerystring)(e)),u=null!==(t=c.apiKey)&&void 0!==t?t:null,l=null!==(n=c.oobCode)&&void 0!==n?n:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=c.mode)&&void 0!==r?r:null);_(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=null!==(a=c.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=c.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe{static credential(e,t){return Se._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Pe.parseLink(t);return _(n,"argument-error"),Se._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=xe.PROVIDER_ID}}xe.PROVIDER_ID="password",xe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",xe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Oe{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}class Ne extends De{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return _("providerId"in t&&"signInMethod"in t,"argument-error"),Te._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return _(e.idToken||e.accessToken,"argument-error"),Te._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ne.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ne.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:a,providerId:s}=e;if(!(n||i||t||r))return null;if(!s)return null;try{return new Ne(s)._credential({idToken:t,accessToken:n,nonce:a,pendingToken:r})}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends De{static credential(e){return Te._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Le.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Le.FACEBOOK_SIGN_IN_METHOD="facebook.com",Le.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me extends De{static credential(e,t){return Te._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Me.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Me.GOOGLE_SIGN_IN_METHOD="google.com",Me.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue extends De{static credential(e){return Te._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Ue.GITHUB_SIGN_IN_METHOD="github.com",Ue.PROVIDER_ID="github.com";class Fe extends Ie{_getIdTokenResponse(e){return Ce(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ce(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ce(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:r}=t;return n&&i&&r&&n===i?new Fe(n,r):null}static _create(e,t){return new Fe(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}constructor(e,t){super(e,e),this.pendingToken=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Oe{static credentialFromResult(e){return je.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return je.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Fe.fromJSON(e);return _(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Fe._create(n,t)}catch(e){return null}}constructor(e){_(e.startsWith("saml."),"argument-error"),super(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends De{static credential(e,t){return Te._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Be.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ve(e,t){return F(e,"POST","/v1/accounts:signUp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be.TWITTER_SIGN_IN_METHOD="twitter.com",Be.PROVIDER_ID="twitter.com";class ze{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await X._fromIdTokenResponse(e,n,i),a=He(n);return new ze({user:r,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=He(n);return new ze({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function He(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(e){var t;const n=me(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new ze({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await Ve(n,{returnSecureToken:!0}),r=await ze._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends i.FirebaseError{static _fromErrorAndOperation(e,t,n,i){return new Ge(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ge.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function qe(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ge._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(e,t){const n=(0,i.getModularInstance)(e);await $e(!0,n,t);const{providerUserInfo:r}=await async function(e,t){return M(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),a=Ke(r||[]);return n.providerData=n.providerData.filter((e=>a.has(e.providerId))),a.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ye(e,t,n=!1){const i=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ze._forOperation(e,"link",i)}async function $e(e,t,n){await J(t);const i=!1===e?"provider-already-linked":"no-such-provider";_(Ke(t.providerData).has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(e,t,n=!1){var i;const{auth:r}=e,a="reauthenticate";try{const i=await G(e,qe(r,a,t,e),n);_(i.idToken,r,"internal-error");const s=W(i.idToken);_(s,r,"internal-error");const{sub:o}=s;return _(e.uid===o,r,"user-mismatch"),ze._forOperation(e,a,i)}catch(e){throw"auth/user-not-found"===(null===(i=e)||void 0===i?void 0:i.code)&&v(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(e,t,n=!1){const i="signIn",r=await qe(e,i,t),a=await ze._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(a.user),a}async function Qe(e,t){return Ze(me(e),t)}async function et(e,t){const n=(0,i.getModularInstance)(e);return await $e(!1,n,t.providerId),Ye(n,t)}async function tt(e,t){return Xe((0,i.getModularInstance)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nt(e,t){const n=me(e),i=await async function(e,t){return F(e,"POST","/v1/accounts:signInWithCustomToken",L(e,t))}(n,{token:t,returnSecureToken:!0}),r=await ze._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{static _fromServerResponse(e,t){return"phoneInfo"in t?rt._fromServerResponse(e,t):v(e,"internal-error")}constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}}class rt extends it{static _fromServerResponse(e,t){return new rt(t)}constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e,t,n){var i;_((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),_(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(_(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(_(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t,n){const r=(0,i.getModularInstance)(e),a={requestType:"PASSWORD_RESET",email:t};n&&at(r,a,n),await async function(e,t){return ke(e,t)}(r,a)}async function ot(e,t,n){await _e((0,i.getModularInstance)(e),{oobCode:t,newPassword:n})}async function ct(e,t){await async function(e,t){return M(e,"POST","/v1/accounts:update",L(e,t))}((0,i.getModularInstance)(e),{oobCode:t})}async function ut(e,t){const n=(0,i.getModularInstance)(e),r=await _e(n,{oobCode:t}),a=r.requestType;switch(_(a,n,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":_(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":_(r.mfaInfo,n,"internal-error");default:_(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=it._fromServerResponse(me(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:a}}async function lt(e,t){const{data:n}=await ut((0,i.getModularInstance)(e),t);return n.email}async function dt(e,t,n){const i=me(e),r=await Ve(i,{returnSecureToken:!0,email:t,password:n}),a=await ze._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(a.user),a}function ht(e,t,n){return Qe((0,i.getModularInstance)(e),xe.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t,n){const r=(0,i.getModularInstance)(e),a={requestType:"EMAIL_SIGNIN",email:t};_(n.handleCodeInApp,r,"argument-error"),n&&at(r,a,n),await async function(e,t){return ke(e,t)}(r,a)}function pt(e,t){const n=Pe.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}async function gt(e,t,n){const r=(0,i.getModularInstance)(e),a=xe.credentialWithLink(t,n||T());return _(a._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Qe(r,a)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function mt(e,t){const n={identifier:t,continueUri:A()?T():"http://localhost"},{signinMethods:r}=await async function(e,t){return M(e,"POST","/v1/accounts:createAuthUri",L(e,t))}((0,i.getModularInstance)(e),n);return r||[]}async function vt(e,t){const n=(0,i.getModularInstance)(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&at(n.auth,r,t);const{email:a}=await async function(e,t){return ke(e,t)}(n.auth,r);a!==e.email&&await e.reload()}async function bt(e,t,n){const r=(0,i.getModularInstance)(e),a={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&at(r.auth,a,n);const{email:s}=await async function(e,t){return ke(e,t)}(r.auth,a);s!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.getModularInstance)(e),a={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await G(r,async function(e,t){return M(e,"POST","/v1/accounts:update",t)}(r.auth,a));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function wt(e,t){return _t((0,i.getModularInstance)(e),t,null)}function It(e,t){return _t((0,i.getModularInstance)(e),null,t)}async function _t(e,t,n){const{auth:i}=e,r={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(r.email=t),n&&(r.password=n);const a=await G(e,Ee(i,r));await e._updateTokensIfNecessary(a,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class kt extends Et{constructor(e,t,n,i){super(e,t,n),this.username=i}}class St extends Et{constructor(e,t){super(e,"facebook.com",t)}}class Ct extends kt{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class Tt extends Et{constructor(e,t){super(e,"google.com",t)}}class At extends kt{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Rt(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:i}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},a=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null==e?void 0:e.idToken)){const i=null===(n=null===(t=W(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(i)return new Et(a,"anonymous"!==i&&"custom"!==i?i:null)}if(!i)return null;switch(i){case"facebook.com":return new St(a,r);case"github.com":return new Ct(a,r);case"google.com":return new Tt(a,r);case"twitter.com":return new At(a,r,e.screenName||null);case"custom":case"anonymous":return new Et(a,null);default:return new Et(a,i,r)}}(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{static _fromIdtoken(e,t){return new Pt("enroll",e,t)}static _fromMfaPendingCredential(e){return new Pt("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Pt._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Pt._fromIdtoken(e.multiFactorSession.idToken)}return null}constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{static _fromError(e,t){const n=me(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map((e=>it._fromServerResponse(n,e)));_(i.mfaPendingCredential,n,"internal-error");const a=Pt._fromMfaPendingCredential(i.mfaPendingCredential);return new xt(a,r,(async e=>{const r=await e._process(n,a);delete i.mfaInfo,delete i.mfaPendingCredential;const s=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await ze._fromIdTokenResponse(n,t.operationType,s);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return _(t.user,n,"internal-error"),ze._forOperation(t.user,t.operationType,s);default:v(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}}function Ot(e,t){var n;const r=(0,i.getModularInstance)(e),a=t;return _(t.customData.operationType,r,"argument-error"),_(null===(n=a.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),xt._fromError(r,a)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{static _fromUser(e){return new Dt(e)}async getSession(){return Pt._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,i=await this.getSession(),r=await G(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){var t;const n="string"==typeof e?e:e.uid,i=await this.user.getIdToken(),r=await G(this.user,(a=this.user.auth,s={idToken:i,mfaEnrollmentId:n},M(a,"POST","/v2/accounts/mfaEnrollment:withdraw",L(a,s))));var a,s;this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==n)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(e){if("auth/user-token-expired"!==(null===(t=e)||void 0===t?void 0:t.code))throw e}}constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>it._fromServerResponse(e.auth,t))))}))}}const Nt=new WeakMap;function Lt(e){const t=(0,i.getModularInstance)(e);return Nt.has(t)||Nt.set(t,Dt._fromUser(t)),Nt.get(t)}const Mt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{_isAvailable(){try{return this.storage?(this.storage.setItem(Mt,"1"),this.storage.removeItem(Mt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Ut{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},a=this.storage.getItem(n);(0,i.isIE)()&&10===document.documentMode&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,i.getUA)();return re(e)||le(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=he(),this._shouldAllowMigration=!0}}Ft.type="LOCAL";const jt=Ft;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Ut{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Bt.type="SESSION";const Vt=Bt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new zt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,a=this.handlersMap[i];if(!(null==a?void 0:a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(a).map((async e=>e(t.origin,r))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ht(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt.receivers=[];class Wt{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,a;return new Promise(((s,o)=>{const c=Ht("",20);i.port1.start();const u=setTimeout((()=>{o(new Error("unsupported_event"))}),n);a={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(t.data.response);break;default:clearTimeout(u),clearTimeout(r),o(new Error("invalid_response"))}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{a&&this.removeMessageHandler(a)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qt(){return void 0!==Gt().WorkerGlobalScope&&"function"==typeof Gt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kt="firebaseLocalStorageDb",Jt="firebaseLocalStorage",Yt="fbase_key";class $t{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Xt(e,t){return e.transaction([Jt],t?"readwrite":"readonly").objectStore(Jt)}function Zt(){const e=indexedDB.open(Kt,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Jt,{keyPath:Yt})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Jt)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Kt);return new $t(e).toPromise()}(),t(await Zt()))}))}))}async function Qt(e,t,n){const i=Xt(e,!0).put({[Yt]:t,value:n});return new $t(i).toPromise()}function en(e,t){const n=Xt(e,!0).delete(t);return new $t(n).toPromise()}class tn{async _openDb(){return this.db||(this.db=await Zt()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zt._getInstance(qt()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Wt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zt();return await Qt(e,Mt,"1"),await en(e,Mt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Qt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Xt(e,!1).get(t),i=await new $t(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>en(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Xt(e,!1).getAll();return new $t(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}tn.type="LOCAL";const nn=tn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,a;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=b("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(a=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==a?a:document).appendChild(i)}))}function an(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=1e12;class on{render(e,t){const n=this.counter;return this._widgets.set(n,new cn(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||sn;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||sn;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||sn;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}constructor(e){this.auth=e,this.counter=sn,this._widgets=new Map}}class cn{getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"==typeof e?document.getElementById(e):e;_(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}}const un=an("rcb"),ln=new P(3e4,6e4);class dn{load(e,t=""){return _(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Gt().grecaptcha):new Promise(((n,r)=>{const a=Gt().setTimeout((()=>{r(b(e,"network-request-failed"))}),ln.get());Gt()[un]=()=>{Gt().clearTimeout(a),delete Gt()[un];const i=Gt().grecaptcha;if(!i)return void r(b(e,"internal-error"));const s=i.render;i.render=(e,t)=>{const n=s(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};rn(`https://www.google.com/recaptcha/api.js??${(0,i.querystring)({onload:un,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(a),r(b(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=Gt().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=Gt().grecaptcha)||void 0===e?void 0:e.render)}}class hn{async load(e){return new on(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="recaptcha",pn={theme:"light",type:"image"};class gn{async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){_(!this.parameters.sitekey,this.auth,"argument-error"),_(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),_("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const n=Gt()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){_(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){_(A()&&!qt(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){return(await M(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);_(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return _(this.recaptcha,this.auth,"internal-error"),this.recaptcha}constructor(e,t=Object.assign({},pn),n){this.parameters=t,this.type=fn,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=me(n),this.isInvisible="invisible"===this.parameters.size,_("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"==typeof e?document.getElementById(e):e;_(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new hn:new dn,this.validateStartingState()}}class mn{confirm(e){const t=Re._fromVerification(this.verificationId,e);return this.onConfirmation(t)}constructor(e,t){this.verificationId=e,this.onConfirmation=t}}async function vn(e,t,n){const r=me(e),a=await wn(r,t,(0,i.getModularInstance)(n));return new mn(a,(e=>Qe(r,e)))}async function bn(e,t,n){const r=(0,i.getModularInstance)(e);await $e(!1,r,"phone");const a=await wn(r.auth,t,(0,i.getModularInstance)(n));return new mn(a,(e=>et(r,e)))}async function yn(e,t,n){const r=(0,i.getModularInstance)(e),a=await wn(r.auth,t,(0,i.getModularInstance)(n));return new mn(a,(e=>tt(r,e)))}async function wn(e,t,n){var i;const r=await n.verify();try{let a;if(_("string"==typeof r,e,"argument-error"),_(n.type===fn,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){const t=a.session;if("phoneNumber"in a){_("enroll"===t.type,e,"internal-error");const n=await function(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(i=a.multiFactorHint)||void 0===i?void 0:i.uid)||a.multiFactorUid;_(n,e,"missing-multi-factor-info");const s=await function(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return M(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}(e,{phoneNumber:a.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}async function In(e,t){await Ye((0,i.getModularInstance)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{verifyPhoneNumber(e,t){return wn(this.auth,e,(0,i.getModularInstance)(t))}static credential(e,t){return Re._fromVerification(e,t)}static credentialFromResult(e){const t=e;return _n.credentialFromTaggedObject(t)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Re._fromTokenResponse(t,n):null}constructor(e){this.providerId=_n.PROVIDER_ID,this.auth=me(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function En(e,t){return t?C(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n.PROVIDER_ID="phone",_n.PHONE_SIGN_IN_METHOD="phone";class kn extends Ie{_getIdTokenResponse(e){return Ce(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ce(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ce(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Sn(e){return Ze(e.auth,new kn(e),e.bypassAuthState)}function Cn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Xe(n,new kn(e),e.bypassAuthState)}async function Tn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Ye(n,new kn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:a,type:s}=e;if(a)return void this.reject(a);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sn;case"linkViaPopup":case"linkViaRedirect":return Tn;case"reauthViaPopup":case"reauthViaRedirect":return Cn;default:v(this.auth,"internal-error")}}resolve(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new P(2e3,1e4);async function Pn(e,t,n){const i=me(e);w(e,t,Oe);const r=En(i,n);return new Dn(i,"signInViaPopup",t,r).executeNotNull()}async function xn(e,t,n){const r=(0,i.getModularInstance)(e);w(r.auth,t,Oe);const a=En(r.auth,n);return new Dn(r.auth,"reauthViaPopup",t,a,r).executeNotNull()}async function On(e,t,n){const r=(0,i.getModularInstance)(e);w(r.auth,t,Oe);const a=En(r.auth,n);return new Dn(r.auth,"linkViaPopup",t,a,r).executeNotNull()}class Dn extends An{async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){k(1===this.filter.length,"Popup operations only handle one event");const e=Ht();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(b(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(b(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(b(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Rn.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}}Dn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nn=new Map;class Ln extends An{async execute(){let e=Nn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Bn(t),i=jn(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Nn.set(this.auth._key(),e)}return this.bypassAuthState||Nn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function Mn(e,t){return jn(e)._set(Bn(t),"true")}function Un(){Nn.clear()}function Fn(e,t){Nn.set(e._key(),t)}function jn(e){return C(e._redirectPersistence)}function Bn(e){return ee("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(e,t,n){return async function(e,t,n){const i=me(e);w(e,t,Oe);const r=En(i,n);return await Mn(r,i),r._openRedirect(i,t,"signInViaRedirect")}(e,t,n)}function zn(e,t,n){return async function(e,t,n){const r=(0,i.getModularInstance)(e);w(r.auth,t,Oe);const a=En(r.auth,n);await Mn(a,r.auth);const s=await qn(r);return a._openRedirect(r.auth,t,"reauthViaRedirect",s)}(e,t,n)}function Hn(e,t,n){return async function(e,t,n){const r=(0,i.getModularInstance)(e);w(r.auth,t,Oe);const a=En(r.auth,n);await $e(!1,r,t.providerId),await Mn(a,r.auth);const s=await qn(r);return a._openRedirect(r.auth,t,"linkViaRedirect",s)}(e,t,n)}async function Wn(e,t){return await me(e)._initializationPromise,Gn(e,t,!1)}async function Gn(e,t,n=!1){const i=me(e),r=En(i,t),a=new Ln(i,r,n),s=await a.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,t)),s}async function qn(e){const t=Ht(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Yn(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(b(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jn(e))}saveEventToCache(e){this.cachedEventUids.add(Jn(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Jn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Yn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function $n(e,t={}){return M(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zn=/^https?/;function Qn(e){const t=T(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Zn.test(n))return!1;if(Xn.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new P(3e4,6e4);function ti(){const e=Gt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let ni=null;function ii(e){return ni=ni||function(e){return new Promise(((t,n)=>{var i,r,a;function s(){ti(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ti(),n(b(e,"network-request-failed"))},timeout:ei.get()})}if(null===(r=null===(i=Gt().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Gt().gapi)||void 0===a?void 0:a.load)){const t=an("iframefcb");return Gt()[t]=()=>{gapi.load?s():n(b(e,"network-request-failed"))},rn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw ni=null,e}))}(e),ni}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new P(5e3,15e3),ai={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},si=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oi(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?x(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,a={apiKey:t.apiKey,appName:e.name,v:r.SDK_VERSION},s=si.get(e.config.apiHost);s&&(a.eid=s);const o=e._getFrameworks();return o.length&&(a.fw=o.join(",")),`${n}?${(0,i.querystring)(a).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ci={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ui{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function li(e,t,n,r=500,a=600){const s=Math.max((window.screen.availHeight-a)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},ci),{width:r.toString(),height:a.toString(),top:s,left:o}),l=(0,i.getUA)().toLowerCase();n&&(c=ae(l)?"_blank":n),ie(l)&&(t=t||"http://localhost",u.scrollbars="yes");const d=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,i.getUA)()){var t;return le(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",c),new ui(null);const h=window.open(t||"",c,d);_(h,e,"popup-blocked");try{h.focus()}catch(e){}return new ui(h)}const di="emulator/auth/handler";function hi(e,t,n,a,s,o){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:a,v:r.SDK_VERSION,eventId:s};if(t instanceof Oe){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.isEmpty)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))c[e]=t}if(t instanceof De){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const e of Object.keys(u))void 0===u[e]&&delete u[e];return`${function({config:e}){return e.emulator?x(e,di):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${(0,i.querystring)(u).slice(1)}`}const fi="webStorageSupport";const pi=class{async _openPopup(e,t,n,i){var r;k(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return li(e,hi(e,t,n,T(),i),Ht())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=hi(e,t,n,T(),i),Gt().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await ii(e),n=Gt().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:oi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ai,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=b(e,"network-request-failed"),a=Gt().setTimeout((()=>{i(r)}),ri.get());function s(){Gt().clearTimeout(a),n(t)}t.ping(s).then(s,(()=>{i(r)}))}))))}(e),n=new Kn(e);return t.register("authEvent",(t=>{_(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fi,{type:fi},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),v(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await $n(e);for(const e of t)try{if(Qn(e))return}catch(e){}v(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return he()||re()||le()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vt,this._completeRedirectFn=Gn,this._overrideRedirectResult=Fn}};class gi{_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}constructor(e){this.factorId=e}}class mi extends gi{static _fromCredential(e){return new mi(e)}_finalizeEnroll(e,t,n){return function(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}constructor(e){super("phone"),this.credential=e}}class vi{static assertion(e){return mi._fromCredential(e)}constructor(){}}vi.FACTOR_ID="phone";var bi="@firebase/auth",yi="0.20.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wi{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ii=(0,i.getExperimentalSetting)("authIdTokenMaxAge")||300;let _i=null;function Ei(e=(0,r.getApp)()){const t=(0,r._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,r._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.deepEqual)(r,null!=t?t:{}))return e;v(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:pi,persistence:[nn,jt,Vt]}),a=(0,i.getExperimentalSetting)("authTokenSyncURL");if(a){const e=(s=a,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ii)return;const i=null==t?void 0:t.token;_i!==i&&(_i=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){(0,i.getModularInstance)(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){(0,i.getModularInstance)(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var s;const o=(0,i.getDefaultEmulatorHost)("auth");return o&&be(n,`http://${o}`),n}var ki;ki="Browser",(0,r._registerComponent)(new(0,c.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:a}=n.options;return((e,n)=>{_(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),_(!(null==a?void 0:a.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:a,clientPlatform:ki,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fe(ki)},s=new ge(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(C);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,r._registerComponent)(new(0,c.Component)("auth-internal",(e=>(e=>new wi(e))(me(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.registerVersion)(bi,yi,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ki)),(0,r.registerVersion)(bi,yi,"esm2017")})),a.register("4tSb9",(function(t,n){e(t.exports,"__rest",(function(){return i}));function i(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create})),a.register("8Sz9J",(function(e,t){!function(){var t=window.CustomEvent;function n(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function i(e){e&&e.blur&&e!==document.body&&e.blur()}function r(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}function a(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function s(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,n=!1,i=function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}.bind(this),r=function(r){if(r.target===e){var a="DOMNodeRemoved";n|=r.type.substr(0,a.length)===a,window.clearTimeout(t),t=window.setTimeout(i,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,r)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}t&&"object"!=typeof t||((t=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),n}).prototype=window.Event.prototype),s.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),o.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}i(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!o.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),n=function(e,n){return!(void 0===t[e]||t[e]===n)};if(t.opacity<1||n("zIndex","auto")||n("transform","none")||n("mixBlendMode","normal")||n("filter","none")||n("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,o.needsCentering(this.dialog_)?(o.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var n=new t("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(n)}};var o={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],i=null;try{i=n.cssRules}catch(e){}if(i)for(var a=0;a<i.length;++a){var s=i[a],o=null;try{o=document.querySelectorAll(s.selectorText)}catch(e){}if(o&&r(o,e)){var c=s.style.getPropertyValue("top"),u=s.style.getPropertyValue("bottom");if(c&&"auto"!==c||u&&"auto"!==u)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!o.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new s(e)},registerDialog:function(e){e.showModal||o.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var n=[];t.forEach((function(e){for(var t,i=0;t=e.removedNodes[i];++i)t instanceof Element&&("dialog"===t.localName&&n.push(t),n=n.concat(t.querySelectorAll("dialog")))})),n.length&&e(n)})))}};if(o.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},o.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},o.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,n=0;e=this.pendingDialogStack[n];++n)e.updateZIndex(--t,--t),0===n&&(this.overlay.style.zIndex=--t);var i=this.pendingDialogStack[0];i?(i.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},o.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=n(e);){for(var t,i=0;t=this.pendingDialogStack[i];++i)if(t.dialog===e)return 0===i;e=e.parentElement}return!1},o.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),i(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},o.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var n=new t("cancel",{bubbles:!1,cancelable:!0}),i=this.pendingDialogStack[0];i&&i.dialog.dispatchEvent(n)&&i.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},o.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},o.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},o.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},o.dm=new o.DialogManager,o.formSubmitter=null,o.useValue=null,void 0===window.HTMLDialogElement){var c=document.createElement("form");if(c.setAttribute("method","dialog"),"dialog"!==c.method){var u=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(u){var l=u.get;u.get=function(){return a(this)?"dialog":l.call(this)};var d=u.set;u.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):d.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",u)}}document.addEventListener("click",(function(e){if(o.formSubmitter=null,o.useValue=null,!e.defaultPrevented){var t=e.target;if(t&&a(t.form)){if(!("submit"===t.type&&["button","input"].indexOf(t.localName)>-1)){if("input"!==t.localName||"image"!==t.type)return;o.useValue=e.offsetX+","+e.offsetY}n(t)&&(o.formSubmitter=t)}}}),!1);var h=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!a(this))return h.call(this);var e=n(this);e&&e.close()},document.addEventListener("submit",(function(e){var t=e.target;if(a(t)){e.preventDefault();var i=n(t);if(i){var r=o.formSubmitter;r&&r.form===t?i.close(o.useValue||r.value):i.close(),o.formSubmitter=null}}}),!0)}o.forceRegisterDialog=o.forceRegisterDialog,o.registerDialog=o.registerDialog,"function"==typeof define&&"amd"in define?define((function(){return o})):"object"==typeof e.exports?e.exports=o:window.dialogPolyfill=o}()})),a.register("eWTRB",(function(e,t){
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};(n=function(){"use strict";var e=[],t=[],n="mdlComponentConfigInternal_";function i(t,n){for(var i=0;i<e.length;i++)if(e[i].className===t)return void 0!==n&&(e[i]=n),e[i];return!1}function r(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function a(e,t){return-1!==r(e).indexOf(t)}function s(e,t,n){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var i=document.createEvent("Events");return i.initEvent(e,t,n),i}function o(t,n){if(void 0===t&&void 0===n)for(var r=0;r<e.length;r++)o(e[r].className,e[r].cssClass);else{var a=t;if(void 0===n){var s=i(a);s&&(n=s.cssClass)}for(var u=document.querySelectorAll("."+n),l=0;l<u.length;l++)c(u[l],a)}}function c(o,c){if(!("object"==typeof o&&o instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var u=s("mdl-componentupgrading",!0,!0);if(o.dispatchEvent(u),!u.defaultPrevented){var l=r(o),d=[];if(c)a(o,c)||d.push(i(c));else{var h=o.classList;e.forEach((function(e){h.contains(e.cssClass)&&-1===d.indexOf(e)&&!a(o,e.className)&&d.push(e)}))}for(var f,p=0,g=d.length;p<g;p++){if(!(f=d[p]))throw new Error("Unable to find a registered component for the given class.");l.push(f.className),o.setAttribute("data-upgraded",l.join(","));var m=new f.classConstructor(o);m[n]=f,t.push(m);for(var v=0,b=f.callbacks.length;v<b;v++)f.callbacks[v](o);f.widget&&(o[f.className]=m);var y=s("mdl-componentupgraded",!0,!1);o.dispatchEvent(y)}}}function u(e){if(e){var i=t.indexOf(e);t.splice(i,1);var r=e.element_.getAttribute("data-upgraded").split(","),a=r.indexOf(e[n].classAsString);r.splice(a,1),e.element_.setAttribute("data-upgraded",r.join(","));var o=s("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(o)}}return{upgradeDom:o,upgradeElement:c,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var n,i=0,r=t.length;i<r;i++)(n=t[i])instanceof HTMLElement&&(c(n),n.children.length>0&&e(n.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)o(e[t].className)},registerUpgradedCallback:function(e,t){var n=i(e);n&&n.callbacks.push(t)},register:function(t){var r=!0;void 0===t.widget&&void 0===t.widget||(r=t.widget||t.widget);var a={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:r,callbacks:[]};if(e.forEach((function(e){if(e.cssClass===a.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===a.className)throw new Error("The provided className has already been registered")})),t.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");i(t.classAsString,a)||e.push(a)},downgradeElements:function(e){var n=function(e){t.filter((function(t){return t.element_===e})).forEach(u)};if(e instanceof Array||e instanceof NodeList)for(var i=0;i<e.length;i++)n(e[i]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(e)}}}}()).ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",(function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})}))})),a.register("8Sghp",(function(e,t){
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialButton=e,e.prototype.Constant_={},e.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},e.prototype.blurHandler_=function(e){e&&this.element_.blur()},e.prototype.disable=function(){this.element_.disabled=!0},e.prototype.disable=e.prototype.disable,e.prototype.enable=function(){this.element_.disabled=!1},e.prototype.enable=e.prototype.enable,e.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:e,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0})}()})),a.register("5ejcO",(function(e,t){
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialProgress=e,e.prototype.Constant_={},e.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},e.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},e.prototype.setProgress=e.prototype.setProgress,e.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},e.prototype.setBuffer=e.prototype.setBuffer,e.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,(e=document.createElement("div")).className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,(e=document.createElement("div")).className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:e,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0})}()})),a.register("3ploX",(function(e,t){
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialSpinner=e,e.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},e.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},e.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),r.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var a=[n,i,r],s=0;s<a.length;s++){var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),a[s].appendChild(o)}t.appendChild(n),t.appendChild(i),t.appendChild(r),this.element_.appendChild(t)},e.prototype.createLayer=e.prototype.createLayer,e.prototype.stop=function(){this.element_.classList.remove("is-active")},e.prototype.stop=e.prototype.stop,e.prototype.start=function(){this.element_.classList.add("is-active")},e.prototype.start=e.prototype.start,e.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:e,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})}()})),a.register("a9AUb",(function(e,t){
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(){"use strict";var e=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()};window.MaterialTextfield=e,e.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},e.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},e.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},e.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},e.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},e.prototype.onReset_=function(e){this.updateClasses_()},e.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},e.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},e.prototype.checkDisabled=e.prototype.checkDisabled,e.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},e.prototype.checkFocus=e.prototype.checkFocus,e.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},e.prototype.checkValidity=e.prototype.checkValidity,e.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},e.prototype.checkDirty=e.prototype.checkDirty,e.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},e.prototype.disable=e.prototype.disable,e.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},e.prototype.enable=e.prototype.enable,e.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},e.prototype.change=e.prototype.change,e.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:e,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0})}()})),a.register("6Urw1",(function(e,t){var n,i,r=a("MjY8E");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,(r=a("MjY8E")).registerVersion)("firebase","9.13.0","app"),n=e.exports,i=r,Object.keys(i).forEach((function(e){"default"===e||"__esModule"===e||n.hasOwnProperty(e)||Object.defineProperty(n,e,{enumerable:!0,get:function(){return i[e]}})}))})),a.register("bK1n4",(function(t,n){e(t.exports,"getAnalytics",(function(){return a("8fRTn").getAnalytics})),a("8fRTn")})),a.register("8fRTn",(function(t,n){e(t.exports,"getAnalytics",(function(){return L}));var i=a("MjY8E"),r=a("kZfxc"),s=a("2xDiJ"),o=a("6ExWU");a("450b8");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c="analytics",u="https://www.googletagmanager.com/gtag/js",l=new(0,r.Logger)("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function h(e,t,n,i){return async function(r,a,s){try{"event"===r?await async function(e,t,n,i,r){try{let a=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const i=await d(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){a=[];break}a.push(r)}}0===a.length&&(a=Object.values(t)),await Promise.all(a),e("event",i,r||{})}catch(e){l.error(e)}}(e,t,n,a,s):"config"===r?await async function(e,t,n,i,r,a){const s=i[r];try{if(s)await t[s];else{const e=(await d(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){l.error(e)}e("config",r,a)}(e,t,n,i,a,s):"consent"===r?e("consent","update",s):e("set",a)}catch(e){l.error(e)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const f={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},p=new(0,s.ErrorFactory)("analytics","Analytics",f);const g=new class{getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}};function m(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function v(e,t=g,n){const{appId:i,apiKey:r,measurementId:a}=e.options;if(!i)throw p.create("no-app-id");if(!r){if(a)return{measurementId:a,appId:i};throw p.create("no-api-key")}const s=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new y;return setTimeout((async()=>{o.abort()}),void 0!==n?n:6e4),b({appId:i,apiKey:r,measurementId:a},s,o,t)}async function b(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=g){var a,o;const{appId:c,measurementId:u}=e;try{await function(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),a=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(a),i(p.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(e){if(u)return l.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${null===(a=e)||void 0===a?void 0:a.message}]`),{appId:c,measurementId:u};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:m(i)},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(a,r);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw p.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(e);return r.deleteThrottleMetadata(c),t}catch(t){const a=t;if(!function(e){if(!(e instanceof s.FirebaseError&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(a)){if(r.deleteThrottleMetadata(c),u)return l.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${null==a?void 0:a.message}]`),{appId:c,measurementId:u};throw t}const d=503===Number(null===(o=null==a?void 0:a.customData)||void 0===o?void 0:o.httpStatus)?(0,s.calculateBackoffMillis)(n,r.intervalMillis,30):(0,s.calculateBackoffMillis)(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return r.setThrottleMetadata(c,h),l.debug(`Calling attemptFetch again in ${d} millis`),b(e,h,i,r)}}class y{addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}constructor(){this.listeners=[]}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let w,I;function _(e){I=e}function E(e){w=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k(e,t,n,i,r,a,o){var c;const d=v(e);d.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&l.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>l.error(e))),t.push(d);const h=async function(){var e;if(!(0,s.isIndexedDBAvailable)())return l.warn(p.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,s.validateIndexedDBOpenable)()}catch(t){return l.warn(p.create("indexeddb-unavailable",{errorInfo:null===(e=t)||void 0===e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?i.getId():void 0)),[f,g]=await Promise.all([d,h]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(u)&&n.src.includes(e))return n;return null})(a)||function(e,t){const n=document.createElement("script");n.src=`${u}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(a,f.measurementId),I&&(r("consent","default",I),_(void 0)),r("js",new Date);const m=null!==(c=null==o?void 0:o.config)&&void 0!==c?c:{};return m.origin="firebase",m.update=!0,null!=g&&(m.firebase_id=g),r("config",f.measurementId,m),w&&(r("set",w),E(void 0)),f.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{_delete(){return delete C[this.app.options.appId],Promise.resolve()}constructor(e){this.app=e}}let C={},T=[];const A={};let R,P,x="dataLayer",O="gtag",D=!1;function N(e,t,n){!function(){const e=[];if((0,s.isBrowserExtension)()&&e.push("This is a browser extension environment."),(0,s.areCookiesEnabled)()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=p.create("invalid-analytics-context",{errorInfo:t});l.warn(n.message)}}();const i=e.options.appId;if(!i)throw p.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw p.create("no-api-key");l.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=C[i])throw p.create("already-exists",{id:i});if(!D){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(x);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,r){let a=function(...e){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(a=window[r]),window[r]=h(a,e,t,n),{gtagCore:a,wrappedGtag:window[r]}}(C,T,A,x,O);P=e,R=t,D=!0}C[i]=k(e,T,A,t,R,x,n);return new S(e)}function L(e=(0,i.getApp)()){e=(0,s.getModularInstance)(e);const t=(0,i._getProvider)(e,c);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=(0,i._getProvider)(e,c);if(n.isInitialized()){const e=n.getImmediate();if((0,s.deepEqual)(t,n.getOptions()))return e;throw p.create("already-initialized")}return n.initialize({options:t})}(e)}function M(e,t,n,i){e=(0,s.getModularInstance)(e),async function(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(P,C[e.app.options.appId],t,n,i).catch((e=>l.error(e)))}const U="@firebase/analytics",F="0.8.4";(0,i._registerComponent)(new(0,o.Component)(c,((e,{options:t})=>N(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),(0,i._registerComponent)(new(0,o.Component)("analytics-internal",(function(e){try{const t=e.getProvider(c).getImmediate();return{logEvent:(e,n,i)=>M(t,e,n,i)}}catch(e){throw p.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),(0,i.registerVersion)(U,F),(0,i.registerVersion)(U,F,"esm2017")})),a.register("450b8",(function(e,t){var n=a("MjY8E"),i=a("6ExWU"),r=a("2xDiJ"),s=a("ajgRO");const o="@firebase/installations",c="0.5.16",u=1e4,l="w:0.5.16",d="FIS_v2",h=36e5,f={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},p=new(0,r.ErrorFactory)("installations","Installations",f);function g(e){return e instanceof r.FirebaseError&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function v(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function b(e,t){const n=(await t.json()).error;return p.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function y({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function w(e,{refreshToken:t}){const n=y(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function I(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E=/^[cdef][\w-]{21}$/;function k(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return E.test(t)?t:""}catch(e){return""}}function S(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=new Map;function T(e,t){const n=S(e);A(n,t),function(e,t){const n=P();n&&n.postMessage({key:e,fid:t});x()}(n,t)}function A(e,t){const n=C.get(e);if(n)for(const e of n)e(t)}let R=null;function P(){return!R&&"BroadcastChannel"in self&&(R=new BroadcastChannel("[Firebase] FID Change"),R.onmessage=e=>{A(e.data.key,e.data.fid)}),R}function x(){0===C.size&&R&&(R.close(),R=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O="firebase-installations-store";let D=null;function N(){return D||(D=(0,s.openDB)("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(O)}})),D}async function L(e,t){const n=S(e),i=(await N()).transaction(O,"readwrite"),r=i.objectStore(O),a=await r.get(n);return await r.put(t,n),await i.done,a&&a.fid===t.fid||T(e,t.fid),t}async function M(e){const t=S(e),n=(await N()).transaction(O,"readwrite");await n.objectStore(O).delete(t),await n.done}async function U(e,t){const n=S(e),i=(await N()).transaction(O,"readwrite"),r=i.objectStore(O),a=await r.get(n),s=t(a);return void 0===s?await r.delete(n):await r.put(s,n),await i.done,!s||a&&a.fid===s.fid||T(e,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F(e){let t;const n=await U(e.appConfig,(n=>{const i=function(e){return V(e||{fid:k(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(p.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=m(e),r=y(e),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const s={fid:n,authVersion:d,appId:e.appId,sdkVersion:l},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await I((()=>fetch(i,o)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:v(e.authToken)}}throw await b("Create Installation",c)}(e,t);return L(e.appConfig,n)}catch(n){throw g(n)&&409===n.customData.serverCode?await M(e.appConfig):await L(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:j(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function j(e){let t=await B(e.appConfig);for(;1===t.registrationStatus;)await _(100),t=await B(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await F(e);return n||t}return t}function B(e){return U(e,(e=>{if(!e)throw p.create("installation-not-found");return V(e)}))}function V(e){return 1===(t=e).registrationStatus&&t.registrationTime+u<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function z({appConfig:e,heartbeatServiceProvider:t},n){const i=function(e,{fid:t}){return`${m(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),r=w(e,n),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const s={installation:{sdkVersion:l,appId:e.appId}},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await I((()=>fetch(i,o)));if(c.ok){return v(await c.json())}throw await b("Generate Auth Token",c)}async function H(e,t=!1){let n;const i=await U(e.appConfig,(i=>{if(!G(i))throw p.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+h}(e)}(r))return i;if(1===r.requestStatus)return n=async function(e,t){let n=await W(e.appConfig);for(;1===n.authToken.requestStatus;)await _(100),n=await W(e.appConfig);const i=n.authToken;return 0===i.requestStatus?H(e,t):i}(e,t),i;{if(!navigator.onLine)throw p.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await z(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await L(e.appConfig,i),n}catch(n){if(!g(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await L(e.appConfig,n)}else await M(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function W(e){return U(e,(e=>{if(!G(e))throw p.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+u<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function G(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function q(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await F(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await H(n,t)).token}function K(e){return p.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J="installations",Y=e=>{const t=e.getProvider("app").getImmediate(),i=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw K("App Configuration");if(!e.name)throw K("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw K(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:i,heartbeatServiceProvider:(0,n._getProvider)(t,"heartbeat"),_delete:()=>Promise.resolve()}},$=e=>{const t=e.getProvider("app").getImmediate(),i=(0,n._getProvider)(t,J).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await F(t);return i?i.catch(console.error):H(t).catch(console.error),n.fid}(i),getToken:e=>q(i,e)}};(0,n._registerComponent)(new(0,i.Component)(J,Y,"PUBLIC")),(0,n._registerComponent)(new(0,i.Component)("installations-internal",$,"PRIVATE")),(0,n.registerVersion)(o,c),(0,n.registerVersion)(o,c,"esm2017")})),a.register("3SEMc",(function(t,n){e(t.exports,"GoogleAuthProvider",(function(){return a("88zYJ").Q})),e(t.exports,"getAuth",(function(){return a("88zYJ").n})),a("eMcUM")})),a.register("eMcUM",(function(t,n){e(t.exports,"GoogleAuthProvider",(function(){return a("88zYJ").Q})),e(t.exports,"getAuth",(function(){return a("88zYJ").n})),a("2xDiJ"),a("MjY8E"),a("kZfxc"),a("6ExWU");a("88zYJ")}))}();
//# sourceMappingURL=index.1faa01ad.js.map
