!function(){var e={btnHome:{en:"Home",ru:"Главная",uk:"Головна"},btnHomelib:{en:"Home",ru:"Главная",uk:"Головна"},btnLibrary:{en:"my library",ru:"моя Библиотека",uk:"моя Бібліотека"},btnLibrarylib:{en:"my library",ru:"моя Библиотека",uk:"моя Бібліотека"},Theme:{en:"Theme",ru:"Тема",uk:"Тема"},ThemeLib:{en:"Theme",ru:"Тема",uk:"Тема"},btnWatched:{en:"WATCHED",ru:"ПРОСМОТРЕНО",uk:"ПЕРЕГЛЯНУТО"},btnTurn:{en:"QUEUE",ru:"ОЧЕРЕДЬ",uk:"ЧЕРГА"},ModalIn:{en:"sign in",ru:"Войти",uk:"Увійти"},ModalUp:{en:"sign up",ru:"регитрация",uk:"реєстрація"},headerSignIn:{en:"sign in",ru:"Войти",uk:"Увійти"},Email:{en:"Email",ru:"Почта",uk:"Пошта"},Password:{en:"Password",ru:"Пароль",uk:"Пароль"},BtnModalIn:{en:"sign in",ru:"Войти",uk:"Увійти"},"modal-checkbox":{en:"Keep me Signed in",ru:"Оставаться в системе",uk:"Залишатися в системі"},BadMemary:{en:"Forgot Password?",ru:"Забыли пароль?",uk:"Забули пароль?"},FullName:{en:"Full Name",ru:"Полное имя",uk:"Повне ім'я"},EmailReg:{en:"Email",ru:"Почта",uk:"Пошта"},PasswordReg:{en:"Password",ru:"Пароль",uk:"Пароль"},RepeatPasswordReg:{en:"Repeat Password",ru:"Повторите пароль",uk:"Повторіть пароль"},BtnRegistrationg:{en:"Registration",ru:"Регистрация",uk:"Реєстрація"}},n=document.querySelector("#lang"),a=document.querySelector("html"),r=["en","ru","uk"],u=localStorage.getItem("lang")||"";function t(){var u=window.location.hash;for(var t in u=u.slice(1),r.includes(u)||(location.href=window.location.pathname+"#en",localStorage.setItem("lang","en"),a.setAttribute("lang","en")),a.setAttribute("lang",u),localStorage.setItem("lang",u),n.value=u,e){var o=document.querySelector('[data-lng="'.concat(t,'"]'));o&&t&&(o.innerHTML=e[t][u])}}""!==u&&(n.value=u,location.href=window.location.pathname+"#"+u),t(),n.addEventListener("change",(function(){var e=n.value;location.href=window.location.pathname+"#"+e,t()})),n.addEventListener("change",(function(e){return window.location.reload()}))}();
//# sourceMappingURL=library.cddfcca4.js.map
