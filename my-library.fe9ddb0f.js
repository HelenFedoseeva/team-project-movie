const popupLinks=document.querySelectorAll(".popup-link"),body=document.querySelector("body"),lockPadding=document.querySelectorAll(".lock-padding");let unlock=!0;const timeout=800;if(popupLinks.length>0)for(let o=0;o<popupLinks.length;o++){const e=popupLinks[o];e.addEventListener("click",(function(o){const n=e.getAttribute("href").replace("#","");popupOpen(document.getElementById(n)),o.preventDefault()}))}const popupCloseIcon=document.querySelectorAll(".close-popup");if(popupCloseIcon.length>0)for(let o=0;o<popupCloseIcon.length;o++){const e=popupCloseIcon[o];e.addEventListener("click",(function(o){popupClose(e.closest(".popup")),o.preventDefault()}))}function popupOpen(o){if(o&&unlock){const e=document.querySelector(".popup.open");e?popupClose(e,!1):bodyLock(),o.classList.add("open"),o.addEventListener("click",(function(o){o.target.closest(".popup__content")||popupClose(o.target.closest(".popup"))}))}}function popupClose(o,e=!0){unlock&&(o.classList.remove("open"),e&&bodyUnLock())}function bodyLock(){const o=window.innerWidth-document.querySelector("body").offsetWidth+"px";if(lockPadding.length>0)for(let e=0;e<lockPadding.length;e++){lockPadding[e].style.paddingRight=o}body.style.paddingRight=o,body.classList.add("lock"),unlock=!1,setTimeout((function(){unlock=!0}),800)}function bodyUnLock(){setTimeout((function(){if(lockPadding.length>0)for(let o=0;o<lockPadding.length;o++){lockPadding[o].style.paddingRight="0px"}body.style.paddingRight="0px",body.classList.remove("lock")}),800),unlock=!1,setTimeout((function(){unlock=!0}),800)}document.addEventListener("keydown",(function(o){if("Escape"===o.key){const o=document.querySelector(".popup.open");o&&popupClose(o)}}));
//# sourceMappingURL=my-library.fe9ddb0f.js.map