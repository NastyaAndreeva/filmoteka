const e=document.querySelector(".login-modal__in"),o=document.querySelector(".login-modal__up"),t=document.querySelector(".registration-modal"),l=(document.querySelector(".login-modal"),document.querySelector("#signin")),n=document.querySelector(".modal-close"),c=document.querySelector("#checkbox-log"),a=document.querySelector("#email"),i=document.querySelector("#password-1"),s=document.querySelector(".login-modal_form"),r=document.querySelector("body"),d=document.querySelector(".backdrop-in-reg");function m(){e.removeEventListener("click",g),o.removeEventListener("click",u),n.removeEventListener("click",y),s.removeEventListener("submit",w),window.removeEventListener("keydown",_),d.removeEventListener("click",L)}function v(){e.classList.contains("login-modal__active")||(t.style.transform="translateX(100%)",o.classList.add("login-modal__noactive"),o.classList.remove("login-modal__active"),e.classList.add("login-modal__active"),e.classList.remove("login-modal__noactive"))}function u(){o.classList.contains("login-modal__active")||(t.style.transform="translateX(0%)",o.classList.add("login-modal__active"),o.classList.remove("login-modal__noactive"),e.classList.add("login-modal__noactive"),e.classList.remove("login-modal__active"))}function g(){d.style.display="block",r.style.overflow="hidden",e.addEventListener("click",v),o.addEventListener("click",u),n.addEventListener("click",y),s.addEventListener("submit",w),window.addEventListener("keydown",_),d.addEventListener("click",L)}function y(){d.style.display="none",r.style.overflow="visible",v(),m()}function _(e){"Escape"===e.code&&(d.style.display="none",r.style.overflow="visible",v(),m())}function L(e){e.target===e.currentTarget&&(d.style.display="none",r.style.overflow="visible",v(),m())}l.addEventListener("click",g);const S=localStorage.getItem("login")||"",k=localStorage.getItem("password")||"",f=localStorage.getItem("checkboxlog")||"";function w(e){e.preventDefault(),c.checked?(localStorage.setItem("checkboxlog",!0),localStorage.setItem("login",a.value),localStorage.setItem("password",i.value)):(localStorage.removeItem("login"),localStorage.removeItem("password"),localStorage.removeItem("checkboxlog"))}""!==S&&(a.value=S),""!==k&&(i.value=k),""!==f&&(c.checked=!0);
//# sourceMappingURL=index.fab5ec43.js.map
