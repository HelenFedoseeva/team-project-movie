const e=document.querySelectorAll(".popup-link"),t=document.querySelector("body"),n=document.querySelectorAll(".lock-padding");let o=!0;if(e.length>0)for(let t=0;t<e.length;t++){const n=e[t];n.addEventListener("click",(function(e){const t=n.getAttribute("href").replace("#","");l(document.getElementById(t)),e.preventDefault()}))}const c=document.querySelectorAll(".close-popup");if(c.length>0)for(let e=0;e<c.length;e++){const t=c[e];t.addEventListener("click",(function(e){i(t.closest(".popup")),e.preventDefault()}))}function l(e){if(e&&o){const c=document.querySelector(".popup.open");c?i(c,!1):function(){const e=window.innerWidth-document.querySelector("body").offsetWidth+"px";if(n.length>0)for(let t=0;t<n.length;t++){n[t].style.paddingRight=e}t.style.paddingRight=e,t.classList.add("lock"),o=!1,setTimeout((function(){o=!0}),800)}(),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||i(e.target.closest(".popup"))}))}}function i(e,c=!0){o&&(e.classList.remove("open"),c&&(setTimeout((function(){if(n.length>0)for(let e=0;e<n.length;e++)n[e].style.paddingRight="0px";t.style.paddingRight="0px",t.classList.remove("lock")}),800),o=!1,setTimeout((function(){o=!0}),800)))}document.addEventListener("keydown",(function(e){if("Escape"===e.key){const e=document.querySelector(".popup.open");e&&i(e)}}));
//# sourceMappingURL=index.ac36be3c.js.map