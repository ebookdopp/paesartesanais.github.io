(()=>{"use strict";var e={262:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Random=void 0,t.Random=class{static chooseOne(e){return e[Math.floor(Math.random()*e.length)]}}},745:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UnicodeHasher=void 0;class n{static encode(e){return e.replace(/[0-9]/g,(e=>n.map[e]))}static decode(e){const t=Object.values(n.map).join(""),o=new RegExp(`[${t}]`,"g");return e.replace(o,(e=>Object.keys(n.map).find((t=>n.map[t]===e))||""))}static encodeAndInsert(e,t,o=1){const i=n.encode(e);return`${t.slice(0,o)}${i}${t.slice(o)}`}static decodeAndExtract(e){const t=Object.values(n.map).join(""),o=new RegExp(`[${t}]`,"g");let i="";return e.replace(o,(e=>{const t=Object.keys(n.map).find((t=>n.map[t]===e));return t&&(i+=t),e})),""!==i?i:null}static removeAllEncodedChars(e){const t=Object.values(n.map).join(""),o=new RegExp(`[${t}]`,"g");return e.replace(o,"")}}t.UnicodeHasher=n,n.map={0:"​",1:"‌",2:"‍",3:"⁠",4:"⁡",5:"⁢",6:"⁣",7:"⁤",8:"‪",9:"‬"}},202:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UrlRebuilder=void 0;const o=n(262),i=n(745);class r{static randomizePhoneNumberIfNecessary(e){var t;const n=null!==(t=window.phones)&&void 0!==t?t:[];if(0===n.length)return e;const i=o.Random.chooseOne(n);return e.includes("phone=")?r.withReplaceQueryParam(e,"phone",i):e.includes("wa.me")?`https://wa.me/${i}?${e.split("?")[1]}`:e}static insertAdIdInWppUrl(e,t){var n;const o=null!==(n=r.getQueryParams(e).get("text"))&&void 0!==n?n:"Olá",l=t.replace(/[^0-9]/g,""),a=i.UnicodeHasher.removeAllEncodedChars(o),d=i.UnicodeHasher.encodeAndInsert(l,a);return r.withReplaceQueryParam(e,"text",d)}static getAdId(e){var t;const n=null!==(t=e.get("utm_content"))&&void 0!==t?t:"";return n.includes("|")?n.split("|")[1]:null}static getQueryParams(e){const t=e.split("?")[1];return new URLSearchParams(t)}static withReplaceQueryParam(e,t,n){const o=e.split("?")[0],i=e.split("?")[1],r=new URLSearchParams(i);return r.set(t,n),`${o}?${r.toString()}`}static removeSpecialCharacteres(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w\s-|]/gi,"").replace(/\s/g,"")}}t.UrlRebuilder=r}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{const e=n(202);console.log("utms script loaded! 2.3.11");const t=!!document.querySelector("[data-utmify-ignore-iframe]"),o=!!document.querySelector("[data-utmify-ignore-retry]"),i=!!document.querySelector("[data-utmify-fast-start]"),r=!!document.querySelector("[data-utmify-plus-signal]"),l=!!document.querySelector("[data-utmify-is-click-bank]"),a=!!document.querySelector("[data-utmify-prevent-subids]");var d,u;!function(e){e.Doppus="doppus"}(d||(d={})),function(e){e.PandaVideo="pandavideo.com",e.YouTube="youtube.com",e.EplayVideo="eplay.video",e.Vimeo="vimeo.com"}(u||(u={}));const s=["utm_source","utm_campaign","utm_medium","utm_content","utm_term"];class c{static addUtmParametersToUrl(e){const t=c.urlWithoutParams(e),n=c.paramsFromUrl(e),o=c.getUtmParameters(),i=new URLSearchParams;n.forEach(((e,t)=>i.append(t,e))),o.forEach(((e,t)=>i.append(t,e)));const l=c.urlParametersWithoutDuplicates(i),a=c.simplifyParametersIfNecessary(t,l),d=r?a.toString().split("+").join("%20"):a.toString(),u=-1===t.indexOf("?")?"?":"&";return`${t}${u}${d}`}static urlWithoutParams(e){return e.split("?")[0]}static paramsFromUrl(e){if(!e)return new URLSearchParams;const t=e instanceof URL?e.href:e;if(!t.includes("?"))return new URLSearchParams;const n=t.split("?");if(n.length<=1)return new URLSearchParams;const o=n[1];return new URLSearchParams(o)}static urlParametersWithoutDuplicates(e){const t=Array.from(e.keys()),n=new Map;t.forEach((t=>{const o=e.getAll(t);n.set(t,o[o.length-1])}));const o=new URLSearchParams;return n.forEach(((e,t)=>{o.append(t,e)})),o}static getUtmParameters(){const t="hQwK21wXxR",n=new URLSearchParams(window.location.search);function o(e){const t=n.get(e);if(null!=t&&"null"!==t&&"undefined"!==t&&""!==t)return t;const o=localStorage.getItem(e);if(!o)return"";const i=localStorage.getItem(v(e));return!i||new Date(i)<new Date?(localStorage.removeItem(e),localStorage.removeItem(v(e)),""):o}function i(e){return e.join(t)}const r=o("utm_term"),d=o("utm_content"),u=o("utm_medium"),s=o("utm_campaign"),c=function(e){const t=function(){var e;const t=localStorage.getItem("lead");if(!t)return null;const n=JSON.parse(t);return null!==(e=null==n?void 0:n._id)&&void 0!==e?e:null}();return t?e.includes("jLj")?e:`${e}jLj${t}`:e}(o("utm_source")),m=new URLSearchParams;m.set("utm_source",c),m.set("utm_campaign",s),m.set("utm_medium",u),m.set("utm_content",d),m.set("utm_term",r);const w=[c,s,u,d,r],p=i(w);l?(m.set("aff_sub1",e.UrlRebuilder.removeSpecialCharacteres(c)),m.set("aff_sub2",e.UrlRebuilder.removeSpecialCharacteres(s)),m.set("aff_sub3",e.UrlRebuilder.removeSpecialCharacteres(u)),m.set("aff_sub4",e.UrlRebuilder.removeSpecialCharacteres(d)),m.set("aff_sub5",e.UrlRebuilder.removeSpecialCharacteres(r))):a||(m.set("subid",e.UrlRebuilder.removeSpecialCharacteres(c)),m.set("sid2",e.UrlRebuilder.removeSpecialCharacteres(s)),m.set("subid2",e.UrlRebuilder.removeSpecialCharacteres(s)),m.set("subid3",e.UrlRebuilder.removeSpecialCharacteres(u)),m.set("subid4",e.UrlRebuilder.removeSpecialCharacteres(d)),m.set("subid5",e.UrlRebuilder.removeSpecialCharacteres(s)));const h=o("xcod"),f=o("src"),g=""!==h?h:f,R=function(e,n){if(e.length<=255)return e;const o=Math.floor(18.8);function r(e,t,n){function i(e){return e.substring(0,o)+"..."}if(!t)return i(e);const r=null!=n?n:"|",l=e.split(r),a=l.length>1?l[l.length-1]:"";return`${i(1===l.length?l[0]:l.slice(0,-1).join(r))}${r}${a}`}const[l,a,d,u,s]=e.split(t);return i([r(l,!0,"jLj"),r(a,!0),r(d,!0),r(u,!0),r(s,!1)])}(w.every((e=>""===e))?g:p);m.set("xcod",R),m.set("sck",R),null!=f&&""!==f&&m.set("src",f);const b=n.get("fbclid");return null!=b&&""!==b&&m.set("fbclid",b),(()=>{const e=e=>null==e||""===e,t=o("utm_source"),n=o("utm_medium"),i=o("utm_campaign"),r=o("utm_content"),l=o("utm_term"),a=o("xcod"),d=o("src"),u=m.get("fbclid");return e(t)&&e(n)&&e(i)&&e(r)&&e(l)&&e(a)&&e(d)&&e(u)})()&&m.set("utm_source","organic"),window.utmParams=m,m}static simplifyParametersIfNecessary(e,t){if(!Object.values(d).some((t=>e.includes(t))))return t;const n=new URLSearchParams;return t.forEach(((e,t)=>{s.includes(t)&&n.append(t,e)})),n}}window.paramsList=["utm_source","utm_campaign","utm_medium","utm_content","utm_term","xcod","src"],window.itemExpInDays=7;const m=["utm_source","utm_campaign","utm_medium","utm_content","xcod","sck"];function v(e){return`${e}_exp`}function w(){function n(t){document.querySelectorAll("a").forEach((n=>{if(!n.href.startsWith("mailto:")&&!n.href.startsWith("tel:")&&!n.href.includes("#")){if(o=n.href,["wa.me/","api.whatsapp.com/send","whatsapp:","link.dispara.ai/","random.lailla.io/"].some((e=>o.includes(e)))){const t=c.getUtmParameters(),o=e.UrlRebuilder.getAdId(t);return n.href=e.UrlRebuilder.randomizePhoneNumberIfNecessary(n.href),void(n.href=e.UrlRebuilder.insertAdIdInWppUrl(n.href,null!=o?o:""))}var o;if(t&&m.every((e=>n.href.includes(e))))return;n.href=c.addUtmParametersToUrl(n.href)}}))}function o(e){document.querySelectorAll("form").forEach((t=>{e&&m.every((e=>t.action.includes(e)))||(t.action=c.addUtmParametersToUrl(t.action),c.getUtmParameters().forEach(((e,n)=>{const o=(i=n,t.querySelector(`input[name="${i}"]`));var i;if(o)return void o.setAttribute("value",e);const r=((e,t)=>{const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n})(n,e);t.appendChild(r)})))}))}!function(){const e=new URLSearchParams(window.location.search);window.paramsList.forEach((t=>{const n=e.get(t);n&&((e,t)=>{localStorage.setItem(e,t);const n=new Date((new Date).getTime()+24*window.itemExpInDays*60*60*1e3);localStorage.setItem(v(e),n.toISOString())})(t,n)}))}();const i=function(){var e,t,n,o,i,r,l,a,d,u,s,c,m,v,w,p,h,f,g,R,b,U,S,O,y,_,P,N,E,M,I,j,L,x,$,A,T,B,C,D,W,q,k,V,Q,H,z,F;const J=null!==(n=null===(t=null===(e=null===window||void 0===window?void 0:window.BOOMR)||void 0===e?void 0:e.themeName)||void 0===t?void 0:t.includes("Dropmeta"))&&void 0!==n&&n,K=null!==(r=null===(i=null===(o=null===window||void 0===window?void 0:window.BOOMR)||void 0===o?void 0:o.themeName)||void 0===i?void 0:i.includes("Warehouse"))&&void 0!==r&&r,X=null!==(d=null===(a=null===(l=null===window||void 0===window?void 0:window.BOOMR)||void 0===l?void 0:l.themeName)||void 0===a?void 0:a.includes("Classic®"))&&void 0!==d&&d,Y=null!==(c=null===(s=null===(u=null===window||void 0===window?void 0:window.BOOMR)||void 0===u?void 0:u.themeName)||void 0===s?void 0:s.includes("Tema Vision"))&&void 0!==c&&c,G=null!==(w=null===(v=null===(m=null===window||void 0===window?void 0:window.BOOMR)||void 0===m?void 0:m.themeName)||void 0===v?void 0:v.includes("Waresabino"))&&void 0!==w&&w,Z=null!==(f=null===(h=null===(p=null===window||void 0===window?void 0:window.BOOMR)||void 0===p?void 0:p.themeName)||void 0===h?void 0:h.includes("Dawn"))&&void 0!==f&&f,ee=null!==(b=null===(R=null===(g=null===window||void 0===window?void 0:window.BOOMR)||void 0===g?void 0:g.themeName)||void 0===R?void 0:R.includes("Vortex"))&&void 0!==b&&b,te=null!==(O=null===(S=null===(U=null===window||void 0===window?void 0:window.BOOMR)||void 0===U?void 0:U.themeName)||void 0===S?void 0:S.includes("Warepro"))&&void 0!==O&&O,ne=null!==(P=null===(_=null===(y=null===window||void 0===window?void 0:window.BOOMR)||void 0===y?void 0:y.themeName)||void 0===_?void 0:_.includes("Wareimadigital"))&&void 0!==P&&P,oe=null!==(M=null===(E=null===(N=null===window||void 0===window?void 0:window.BOOMR)||void 0===N?void 0:N.themeName)||void 0===E?void 0:E.includes("Mercado Livre"))&&void 0!==M&&M,ie=null!==(L=null===(j=null===(I=null===window||void 0===window?void 0:window.BOOMR)||void 0===I?void 0:I.themeName)||void 0===j?void 0:j.includes("Evolution Enterprise"))&&void 0!==L&&L,re=null!==(A=null===($=null===(x=null===window||void 0===window?void 0:window.BOOMR)||void 0===x?void 0:x.themeName)||void 0===$?void 0:$.includes("Tema Sabino Vision"))&&void 0!==A&&A,le=null!==(C=null===(B=null===(T=null===window||void 0===window?void 0:window.BOOMR)||void 0===T?void 0:T.themeName)||void 0===B?void 0:B.includes("Split"))&&void 0!==C&&C,ae=null!==(q=null===(W=null===(D=null===window||void 0===window?void 0:window.BOOMR)||void 0===D?void 0:D.themeName)||void 0===W?void 0:W.includes("WART"))&&void 0!==q&&q,de=null!==(Q=null===(V=null===(k=null===window||void 0===window?void 0:window.BOOMR)||void 0===k?void 0:k.themeName)||void 0===V?void 0:V.includes("Vogal"))&&void 0!==Q&&Q,ue=null!==(F=null===(z=null===(H=null===window||void 0===window?void 0:window.BOOMR)||void 0===H?void 0:H.themeName)||void 0===z?void 0:z.includes("Aurohra 2.0"))&&void 0!==F&&F;return J||K||X||Y||G||Z||ee||te||ne||oe||ie||re||le||ae||de||ue}();n(),function(){const e=window.open;window.open=function(t,n,o){var i;return t=c.addUtmParametersToUrl(null!==(i=null==t?void 0:t.toString())&&void 0!==i?i:""),e(t,n||"",o||"")}}(),i||(o(),function(){const{body:e}=document;new MutationObserver(((e,t)=>{const i=e=>{if(e.nodeType!==Node.ELEMENT_NODE)return!1;const t=e;return"INPUT"===t.tagName&&"hidden"===(null==t?void 0:t.type)};e.some((e=>Array.from(e.addedNodes).some(i)))||(n(!0),o(!0))})).observe(e,{subtree:!0,childList:!0})}(),t||document.querySelectorAll("iframe").forEach((e=>{Object.values(u).some((t=>e.src.includes(t)))||(e.src=c.addUtmParametersToUrl(e.src))})))}const p=()=>{w(),o||(setTimeout(w,2e3),setTimeout(w,3e3),setTimeout(w,5e3),setTimeout(w,9e3))};i||"complete"===document.readyState?p():window.addEventListener("load",p)})()})()