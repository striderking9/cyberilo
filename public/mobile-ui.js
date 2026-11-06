'use strict';
window.CyberUI=(()=>{
 function close(){const b=document.querySelector('#mobileNavToggle'),panel=document.querySelector('#mobileSiteNav');if(panel){panel.hidden=true;b?.setAttribute('aria-expanded','false')}}
 function mountHeader(){const button=document.querySelector('#mobileNavToggle'),panel=document.querySelector('#mobileSiteNav');if(!button||!panel)return;button.onclick=()=>{const open=panel.hidden;panel.hidden=!open;button.setAttribute('aria-expanded',String(open))};panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));}
 document.addEventListener('click',e=>{if(!e.target.closest('.site-header')||e.target.closest('[data-user-menu]'))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'){const open=document.querySelector('#mobileSiteNav:not([hidden])');if(open){close();document.querySelector('#mobileNavToggle')?.focus()}}});window.addEventListener('hashchange',close);return{mountHeader,close};
})();
