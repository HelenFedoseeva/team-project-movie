!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequiref577;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},e.parcelRequiref577=n),n("5YNLl");var o=n("di8UB");const c=document.querySelector(".empty-page"),a=document.querySelector(".empty-page__img");function i(){const e=JSON.parse(localStorage.getItem("watched")),t=JSON.parse(localStorage.getItem("queue"));try{if(!(t&&!(t.length>0)||e&&0!==e.length))return a.classList.remove("hide"),void l();if(e.length>0&&t.length>0)return;if(t>0)return;e.length>0&&0===t.length&&(a.classList.remove("hide"),l())}catch(e){console.log(e)}}function l(){return c.innerHTML='<p class="empty-page__notification">Sorry 🤷‍♂️! <br> There are no movies in Your library yet. So, grab Your popcorn bucket and come back to us!</p>'}!function(){const e=JSON.parse(localStorage.getItem("watched")),t=JSON.parse(localStorage.getItem("queue"));try{if(!e||0===e.length&&(!t||t.length>0))return a.classList.remove("hide"),void l();if(0===e.length&&0===t.length)return a.classList.remove("hide"),void l();if(e.length>0);}catch(e){console.log(e)}}();const s=document.querySelector(".watched-btn"),d=document.querySelector(".gallery"),u=document.querySelector(".queue-btn"),g=document.querySelector(".main-library__empty-page"),m=document.querySelector(".empty-page__img");function y(){d.innerHTML=""}s.addEventListener("click",(async function(){y(),s.classList.add("is-active"),u.classList.remove("is-active");try{const e=JSON.parse(localStorage.getItem("watched"));return e&&0!==e.length?m.classList.contains("hide")?(g.innerHTML="",void(0,o.renderLibraryCrads)(e)):(m.classList.toggle("hide"),g.innerHTML="",void(0,o.renderLibraryCrads)(e)):void i()}catch(e){console.log(e)}}));o=n("di8UB");n("6qd2L");const S=document.querySelector(".queue-btn"),h=document.querySelector(".watched-btn"),v=document.querySelector(".empty-page__img"),p=document.querySelector(".main-library__empty-page");S.addEventListener("click",(async function(){S.classList.add("is-active"),h.classList.remove("is-active"),y();try{const e=JSON.parse(localStorage.getItem("queue"));if(!e||0===e.length)return void i();if(0!==e.length)return v.classList.contains("hide")||(v.classList.add("hide"),p.innerHTML=""),void(0,o.renderLibraryCrads)(e)}catch(e){console.log(e)}})),n("kvC6y"),n("w5NGS");o=n("di8UB");const f=JSON.parse(localStorage.getItem("watched")),L=JSON.parse(localStorage.getItem("queue")),q=document.querySelector(".watched-btn"),b=document.querySelector(".queue-btn");!function(){q.classList.add("is-active");try{if(!f||0===f.length)return void i();if(0!==f.length)return y(),void(0,o.renderLibraryCrads)(f);if(0!==L.length)return y(),b.classList.add("is-active"),void(0,o.renderLibraryCrads)(L);0!==f.length&&0!==L.length||i()}catch(e){console.log(e)}}(),n("dItWh"),n("5YNLl");var w=n("cQtx9"),N=n("dljy3"),O=n("1gFVY");o=n("di8UB");const k=document.querySelector(".gallery"),I=document.querySelector(".backdrop"),_=(document.querySelector(".modal"),document.querySelector(".modal-btn"));document.querySelector(".watched-btn"),document.querySelector(".gallery"),document.querySelector(".queue-btn"),JSON.parse(localStorage.getItem("watched")),JSON.parse(localStorage.getItem("queue"));function J(e){"Escape"===e.key&&C()}function E(e){"modal-btn"!==e.currentTarget.classList.value&&"backdrop"!==e.target.classList.value||C()}function C(){I.classList.toggle("is-hidden"),document.removeEventListener("keydown",J),I.removeEventListener("click",E);document.querySelector(".wrapper").remove(),function(){const e=document.querySelector(".watched-btn"),t=(document.querySelector(".gallery"),document.querySelector(".queue-btn")),r=JSON.parse(localStorage.getItem("watched")),n=JSON.parse(localStorage.getItem("queue"));t.classList.contains("is-active")&&(0,o.renderLibraryCrads)(n);e.classList.contains("is-active")&&(0,o.renderLibraryCrads)(r)}()}k.addEventListener("click",(function(e){if(e.preventDefault(),document.addEventListener("keydown",J),I.addEventListener("click",E),_.addEventListener("click",E),"IMG"===e.target.nodeName){!async function(e){I.classList.remove("is-hidden");const t=await(0,N.getMovie)(e);(0,w.modalCardRender)(t.data),(0,O.addListenerByBtns)(t)}(e.target.dataset.id)}}))}();
//# sourceMappingURL=my-library.9d292f60.js.map
