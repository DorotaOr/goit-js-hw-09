document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=null;t.addEventListener("click",(function(){t.disabled=!0,n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(n)}))}));
//# sourceMappingURL=01-color-switcher.f39c3440.js.map
