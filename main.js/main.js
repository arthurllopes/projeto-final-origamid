(()=>{"use strict";!function(){const t=document.querySelectorAll('[data-tab="lista"] img'),e=document.querySelectorAll('[data-tab="content"] section');t.forEach(((t,n)=>{t.addEventListener("click",(()=>{!function(t){e.forEach((t=>{t.classList.remove("ativo")})),e[t].classList.add("ativo")}(n)}))}))}(),function(){function t(){this.nextElementSibling.classList.toggle("ativo")}document.querySelectorAll(".faq-lista dt").forEach((e=>{e.addEventListener("click",t)}))}(),function(){function t(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('[data-tab="menu"] a[href^="#"]').forEach((e=>{e.addEventListener("click",t)}))}(),function(){const t=document.querySelectorAll('[data-tab="scroll"]');function e(){t.forEach((t=>{t.getBoundingClientRect().top-.8*window.innerHeight<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}window.addEventListener("scroll",e),e()}(),function(){const t=document.querySelector('[data-modal="open"]'),e=document.querySelector('[data-modal="close"]'),n=document.querySelector('[data-modal="container"]');function o(){n.classList.remove("ativo")}t.addEventListener("click",(function(){n.classList.add("ativo")})),e.addEventListener("click",o),n.addEventListener("click",(function(t){const{target:e}=t;e===this&&o()}))}(),function(){const t=document.querySelector("[data-dropdown]"),e=["click","touchstart"];function n(t){t.preventDefault(),this.classList.toggle("ativo")}e.forEach((e=>{t.addEventListener(e,n)})),function(e,n,o){function c(n){e.contains(n.target)||t.classList.remove("ativo")}const a=document.documentElement;n.forEach((t=>{a.addEventListener(t,c)}))}(this,e)}(),function(){const t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),n=["click","touchstart"];function o(){this.classList.toggle("ativo"),e.classList.toggle("ativo"),function(t,n,o,c){function a(o){t.contains(o.target)||o.target===n||e.classList.remove("ativo")}const i=document.documentElement;o.forEach((t=>i.addEventListener(t,a)))}(e,this,n)}n.forEach((e=>t.addEventListener(e,o)))}(),async function(t){try{const t=await fetch("../animais.json"),e=await t.json(),n=document.querySelector(".numeros-grid");e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.total}</span>`,e}(t);n.appendChild(e)})),function(){const t=document.querySelectorAll("[data-numero]");let e;e=new MutationObserver((function(n){n[0].target.classList.contains("ativo")&&(e.disconnect(),t.forEach((t=>{const e=+t.innerText,n=Math.floor(e/100);let o=0;const c=setInterval((()=>{o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(c))}),20)})))}));const n=document.querySelector('[data-anime="scroll"]');e.observe(n,{attributes:!0})}()}catch(t){console.log(Error(t))}}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(Error(t))}))})();