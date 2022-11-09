document.querySelector(".header-login__button").addEventListener("click",(function(e){e.preventDefault()}));const e=document.querySelectorAll(".popup-link"),t=document.querySelector("body"),n=document.querySelectorAll(".lock-padding");let o=!0;if(e.length>0)for(let t=0;t<e.length;t++){const n=e[t];n.addEventListener("click",(function(e){const t=n.getAttribute("href").replace("#","");r(document.getElementById(t)),e.preventDefault()}))}const a=document.querySelectorAll(".close-popup");if(a.length>0)for(let e=0;e<a.length;e++){const t=a[e];t.addEventListener("click",(function(e){i(t.closest(".popup")),e.preventDefault()}))}function r(e){if(e&&o){const a=document.querySelector(".popup.open");a?i(a,!1):function(){const e=window.innerWidth-document.querySelector("body").offsetWidth+"px";if(n.length>0)for(let t=0;t<n.length;t++){n[t].style.paddingRight=e}t.style.paddingRight=e,t.classList.add("lock"),o=!1,setTimeout((function(){o=!0}),800)}(),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||i(e.target.closest(".popup"))}))}}function i(e,a=!0){o&&(e.classList.remove("open"),a&&(setTimeout((function(){if(n.length>0)for(let e=0;e<n.length;e++)n[e].style.paddingRight="0px";t.style.paddingRight="0px",t.classList.remove("lock")}),800),o=!1,setTimeout((function(){o=!0}),800)))}function c(e){const t=document.querySelector(".gallery"),n=e.map((e=>{const t=e.data,{poster_path:n,genres:o,title:a,release_date:r}=t;return`<li class="movie-card">\n      <img src="https://image.tmdb.org/t/p/w500${n}" alt="${a} class="movie-card-img"/>\n      <div class="movie-info">\n      <p class="movie-title">${a}</p>\n      <p class="film-cards__title movie-genres">${o[0].name}, ${o[1].name} | ${r.slice(0,4)}</p>\n      </div>\n    </li>`})).join("");t.insertAdjacentHTML("beforeend",n)}document.addEventListener("keydown",(function(e){if("Escape"===e.key){const e=document.querySelector(".popup.open");e&&i(e)}}));const s=document.querySelector(".main-library__empty-page");function l(){u()}function u(){return s.insertAdjacentHTML("afterbegin",'<p class="empty-page__notification">Sorry 🤷‍♂️! <br> There are no movies in Your library yet. So, grab Your popcorn bucket and come back to us!</p>\n  <img class="empty-page__img" src="../images/empty-page/movies-popcorn.png" alt="popcorn bucket">')}const d=document.querySelector(".watched-btn"),A=document.querySelector(".gallery"),m=document.querySelector(".queue-btn"),f=document.querySelector(".main-library__empty-page");function p(){A.innerHTML=""}d.addEventListener("click",(async function(){p(),d.classList.add("is-active"),m.classList.remove("is-active");try{const e=localStorage.getItem("watched");if(null===e)return f.innerHTML="",void l();const t=JSON.parse(e);return f.innerHTML="",void c(t)}catch(e){console.log(e)}}));const g=document.querySelector(".queue-btn"),h=document.querySelector(".watched-btn");g.addEventListener("click",(async function(){g.classList.add("is-active"),h.classList.remove("is-active"),p();try{const e=JSON.parse(localStorage.getItem("queue"));if(!e){document.querySelector(".empty-page").innerHTML="",l()}c(e)}catch(e){console.log(e)}}));document.querySelector(".loader");const v=localStorage.getItem("watched"),y=localStorage.getItem("queue"),b=document.querySelector(".watched-btn"),S=document.querySelector(".queue-btn");!async function(){try{if(v){p(),b.classList.add("is-active");return void c(JSON.parse(v))}if(y){p(),S.classList.add("is-active");return void c(JSON.parse(y))}null!==v&&null!==y||u()}catch(e){console.log(e)}}();var w={};
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses-shiv !*/!function(e,t,n){function o(e,t){return typeof e===t}function a(e){var t=d.className,n=l._config.classPrefix||"";if(A&&(t=t.baseVal),l._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}l._config.enableClasses&&(t+=" "+n+e.join(" "+n),A?d.className.baseVal=t:d.className=t)}function r(e,t){if("object"==typeof e)for(var n in e)u(e,n)&&r(n,e[n]);else{var o=(e=e.toLowerCase()).split("."),i=l[o[0]];if(2==o.length&&(i=i[o[1]]),void 0!==i)return l;t="function"==typeof t?t():t,1==o.length?l[o[0]]=t:(!l[o[0]]||l[o[0]]instanceof Boolean||(l[o[0]]=new Boolean(l[o[0]])),l[o[0]][o[1]]=t),a([(t&&0!=t?"":"no-")+o.join("-")]),l._trigger(e,t)}return l}var i=[],c=[],s={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){c.push({name:e,fn:t,options:n})},addAsyncTest:function(e){c.push({name:null,fn:e})}},l=function(){};l.prototype=s,l=new l;var u,d=t.documentElement,A="svg"===d.nodeName.toLowerCase();A||function(e,t){function n(){var e=p.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=f[e[A]];return t||(t={},m++,e[A]=m,f[m]=t),t}function a(e,n,a){return n||(n=t),s?n.createElement(e):(a||(a=o(n)),!(r=a.cache[e]?a.cache[e].cloneNode():d.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e)).canHaveChildren||u.test(e)||r.tagUrn?r:a.frag.appendChild(r));var r}function r(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return p.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-:]+/g,(function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'}))+");return n}")(p,t.frag)}function i(e){e||(e=t);var n=o(e);return!p.shivCSS||c||n.hasCSS||(n.hasCSS=!!function(e,t){var n=e.createElement("p"),o=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",o.insertBefore(n.lastChild,o.firstChild)}(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||r(e,n),e}var c,s,l=e.html5||{},u=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,A="_html5shiv",m=0,f={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,s=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){c=!0,s=!0}}();var p={elements:l.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==l.shivCSS,supportsUnknownElements:s,shivMethods:!1!==l.shivMethods,type:"default",shivDocument:i,createElement:a,createDocumentFragment:function(e,a){if(e||(e=t),s)return e.createDocumentFragment();for(var r=(a=a||o(e)).frag.cloneNode(),i=0,c=n(),l=c.length;l>i;i++)r.createElement(c[i]);return r},addElements:function(e,t){var n=p.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),p.elements=n+" "+e,i(t)}};e.html5=p,i(t),w&&(w=p)}(void 0!==e?e:this,t),function(){var e={}.hasOwnProperty;u=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),s._l={},s.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),l.hasOwnProperty(e)&&setTimeout((function(){l._trigger(e,l[e])}),0)},s._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout((function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)}),0),delete this._l[e]}},l._q.push((function(){s.addTest=r})),l.addAsyncTest((function(){function e(e,t,n){function o(t){var o=!(!t||"load"!==t.type)&&1==a.width;r(e,"webp"===e&&o?new Boolean(o):o),n&&n(t)}var a=new Image;a.onerror=o,a.onload=o,a.src=t}var t=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=t.shift();e(n.name,n.uri,(function(n){if(n&&"load"===n.type)for(var o=0;o<t.length;o++)e(t[o].name,t[o].uri)}))})),function(){var e,t,n,a,r,s;for(var u in c)if(c.hasOwnProperty(u)){if(e=[],(t=c[u]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=o(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)1===(s=e[r].split(".")).length?l[s[0]]=a:(!l[s[0]]||l[s[0]]instanceof Boolean||(l[s[0]]=new Boolean(l[s[0]])),l[s[0]][s[1]]=a),i.push((a?"":"no-")+s.join("-"))}}(),a(i),delete s.addTest,delete s.addAsyncTest;for(var m=0;m<l._q.length;m++)l._q[m]();e.Modernizr=l}(window,document);
//# sourceMappingURL=my-library.682c7c7b.js.map
