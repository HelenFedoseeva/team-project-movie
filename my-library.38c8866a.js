!function(){const e=document.querySelector(".header-login__button"),t=document.querySelector(".backdrop"),n=(document.querySelector(".modal"),document.querySelector(".modal-btn"));function o(e){"Escape"===e.key&&i()}function c(e){"modal-btn"!==e.currentTarget.classList.value&&"backdrop"!==e.target.classList.value||i()}function i(){t.classList.toggle("is-hidden"),document.removeEventListener("keydown",o),t.removeEventListener("click",c),e.textContent="Sing Out"}e.addEventListener("click",(function(e){e.preventDefault(),document.addEventListener("keydown",o),t.addEventListener("click",c),n.addEventListener("click",c),t.classList.remove("is-hidden")}));const r=document.querySelectorAll(".popup-link"),s=document.querySelector("body"),l=document.querySelectorAll(".lock-padding");let a=!0;const d=800;if(r.length>0)for(let e=0;e<r.length;e++){const t=r[e];t.addEventListener("click",(function(e){const n=t.getAttribute("href").replace("#","");p(document.getElementById(n)),e.preventDefault()}))}const u=document.querySelectorAll(".close-popup");if(u.length>0)for(let e=0;e<u.length;e++){const t=u[e];t.addEventListener("click",(function(e){m(t.closest(".popup")),e.preventDefault()}))}function p(e){if(e&&a){const t=document.querySelector(".popup.open");t?m(t,!1):function(){const e=window.innerWidth-document.querySelector("body").offsetWidth+"px";if(l.length>0)for(let t=0;t<l.length;t++){l[t].style.paddingRight=e}s.style.paddingRight=e,s.classList.add("lock"),a=!1,setTimeout((function(){a=!0}),d)}(),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||m(e.target.closest(".popup"))}))}}function m(e,t=!0){a&&(e.classList.remove("open"),t&&(setTimeout((function(){if(l.length>0)for(let e=0;e<l.length;e++)l[e].style.paddingRight="0px";s.style.paddingRight="0px",s.classList.remove("lock")}),d),a=!1,setTimeout((function(){a=!0}),d)))}function g(e){const t=document.querySelector(".gallery"),n=e.map((e=>{const t=e.data,{poster_path:n,genres:o,title:c,release_date:i}=t;return`<li class="movie-card">\n      <img src="https://image.tmdb.org/t/p/w500${n}" alt="${c} class="movie-card-img"/>\n      <div class="movie-info">\n      <p class="movie-title">${c}</p>\n      <p class="film-cards__title movie-genres">${o[0].name}, ${o[1].name} | ${i.slice(0,4)}</p>\n      </div>\n    </li>`})).join("");t.insertAdjacentHTML("beforeend",n)}document.addEventListener("keydown",(function(e){if("Escape"===e.key){const e=document.querySelector(".popup.open");e&&m(e)}}));const y=document.querySelector(".watched-btn"),f=document.querySelector(".gallery"),v=document.querySelector(".queue-btn");function S(){f.innerHTML=""}y.addEventListener("click",(async function(){S(),y.classList.add("is-active"),v.classList.remove("is-active");try{const e=localStorage.getItem("watched");g(JSON.parse(e))}catch(e){console.log(e)}}));const L=document.querySelector(".queue-btn"),h=document.querySelector(".watched-btn");L.addEventListener("click",(async function(){L.classList.add("is-active"),h.classList.remove("is-active"),S();try{g(JSON.parse(localStorage.getItem("queue")))}catch(e){console.log(e)}}));document.querySelector(".loader");const q=document.querySelector(".main-library__empty-page");!function(){const e=localStorage.getItem("watched"),t=localStorage.getItem("queue");if(e||t)return;document.querySelector(".opacity").classList.remove("opacity"),function(){const e='<p class="empty-page__notification">Sorry 🤷‍♂️! <br> There are no movies in Your library yet. So, grab Your popcorn bucket and come back to us!</p>';q.insertAdjacentHTML("afterbegin",e)}()}()}();
//# sourceMappingURL=my-library.38c8866a.js.map
