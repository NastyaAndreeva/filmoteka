function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},a=n.parcelRequire3143;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in l){var n=l[e];delete l[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){l[e]=n},n.parcelRequire3143=a);var o=e(a("amrNH")).template({1:function(e,n,t,l,a){var o,r=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,i="function",s=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <div class='movie-card'>\n    <img\n      src='https://image.tmdb.org/t/p/w500"+s(typeof(o=null!=(o=u(t,"poster_path")||(null!=n?u(n,"poster_path"):n))?o:c)===i?o.call(r,{name:"poster_path",hash:{},data:a,loc:{start:{line:4,column:42},end:{line:4,column:57}}}):o)+"'\n      alt="+s(typeof(o=null!=(o=u(t,"name")||(null!=n?u(n,"name"):n))?o:c)===i?o.call(r,{name:"name",hash:{},data:a,loc:{start:{line:5,column:10},end:{line:5,column:18}}}):o)+"\n      \n      data-id='"+s(typeof(o=null!=(o=u(t,"id")||(null!=n?u(n,"id"):n))?o:c)===i?o.call(r,{name:"id",hash:{},data:a,loc:{start:{line:7,column:15},end:{line:7,column:21}}}):o)+"'\n    />\n    <div class='movie-data'>\n      <h5 class='movie-name'>"+s(typeof(o=null!=(o=u(t,"name")||(null!=n?u(n,"name"):n))?o:c)===i?o.call(r,{name:"name",hash:{},data:a,loc:{start:{line:10,column:29},end:{line:10,column:37}}}):o)+"</h5>\n      <p class='movie-info'>"+s(typeof(o=null!=(o=u(t,"genres")||(null!=n?u(n,"genres"):n))?o:c)===i?o.call(r,{name:"genres",hash:{},data:a,loc:{start:{line:11,column:28},end:{line:11,column:38}}}):o)+" | "+s(typeof(o=null!=(o=u(t,"release")||(null!=n?u(n,"release"):n))?o:c)===i?o.call(r,{name:"release",hash:{},data:a,loc:{start:{line:11,column:41},end:{line:11,column:52}}}):o)+" <span class='movie-vote'>"+s(typeof(o=null!=(o=u(t,"vote_average")||(null!=n?u(n,"vote_average"):n))?o:c)===i?o.call(r,{name:"vote_average",hash:{},data:a,loc:{start:{line:11,column:78},end:{line:11,column:94}}}):o)+"</span></p>\n    </div>\n  </div>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:14,column:9}}}))?o:""},useData:!0}),r=a("7PKrS"),c=a("ew5fA"),i=a("2shzp").default;const s=document.querySelector("#library-gallery"),u=document.querySelector("#signout-library"),d=document.querySelector("#btn-watched"),m=document.querySelector("#btn-queue"),p=document.querySelector(".go-up");d.addEventListener("click",y),m.addEventListener("click",y),p.addEventListener("click",(function(){document.documentElement.scrollTop=0})),u.addEventListener("click",c.default.logOut);document.querySelector("#googleUserLibrary").textContent=localStorage.getItem("user-name");let f,g=1,v=!1,h="btn-queue";async function y(e){h=e.target.id,function(e){if("btn-watched"===e&&!d.classList.contains("active-btn"))return d.classList.toggle("active-btn"),void m.classList.toggle("active-btn");"btn-queue"!==e||m.classList.contains("active-btn")||(m.classList.toggle("active-btn"),d.classList.toggle("active-btn"))}(h),s.innerHTML="",g=1,await(0,r.default)(h,e).then(b)}async function b(e){f=e;let n=12*(g-1),t=e.slice(n,n+12);t=await async function(e){document.body.style.cursor="wait";const n=await Promise.all(e.map((async e=>{var n;return(e=(e=await i.get(`https://api.themoviedb.org/3/movie/${e}`,{params:{api_key:"842344de8347536aefc6f17e8e76d4bd",language:"ru-RU"}})).data).name=e.title.toUpperCase(),e.release=(null===(n=e.release_date)||void 0===n?void 0:n.slice(0,4))||2022,e.genres=e.genres.map((e=>e.name)),e})));return Promise.resolve(n)}(t),s.insertAdjacentHTML("beforeend",o(t)),document.body.style.cursor="default",v=!0}(0,r.default)(h).then(b),window.addEventListener("scroll",(()=>{document.documentElement.getBoundingClientRect().bottom<document.documentElement.clientHeight+150&&v&&f.length/12>=g&&(v=!1,g++,b(f)),window.pageYOffset>70?p.classList.add("on-screen"):p.classList.remove("on-screen")}));
//# sourceMappingURL=library.26046892.js.map