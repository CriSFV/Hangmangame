(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],[,,,,,,,,,function(e,t,r){},,,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var s=r(1),n=r(10),a=r.n(n),c=r(4),l=r(11),i=r(5),o=(r(16),r(17),function(){return fetch("https://palabras-aleatorias-public-api.herokuapp.com/random").then((function(e){return e.json()})).then((function(e){return e.body.Word}))}),j=(r(18),r(0)),u=function(){return Object(j.jsx)("header",{children:Object(j.jsx)("h1",{className:"header__title",children:"Juego del ahorcado"})})},b=(r(20),function(){return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{className:"footer__menu",children:[Object(j.jsx)("li",{className:"footer__menu-item",children:Object(j.jsx)(c.b,{className:function(e){return e.isActive?"footer__menu-link active":"footer__menu-link "},to:"/",children:"A jugar"})}),Object(j.jsx)("li",{className:"footer__menu-item",children:Object(j.jsx)(c.b,{className:function(e){return e.isActive?"footer__menu-link active":"footer__menu-link "},to:"/instructions",children:"\xbfC\xf3mo se juega?"})}),Object(j.jsx)("li",{className:"footer__menu-item",children:Object(j.jsx)(c.b,{className:function(e){return e.isActive?"footer__menu-link active":"footer__menu-link "},to:"/options",children:"Mas opciones"})})]})}),Object(j.jsx)("small",{className:"footer__copy",children:"\xa9 Adalab"})]})}),m=(r(21),function(e){return Object(j.jsxs)("section",{className:"dummy error-".concat(e.numberError),children:[Object(j.jsx)("span",{className:"error-13 eye"}),Object(j.jsx)("span",{className:"error-12 eye"}),Object(j.jsx)("span",{className:"error-11 line"}),Object(j.jsx)("span",{className:"error-10 line"}),Object(j.jsx)("span",{className:"error-9 line"}),Object(j.jsx)("span",{className:"error-8 line"}),Object(j.jsx)("span",{className:"error-7 line"}),Object(j.jsx)("span",{className:"error-6 head"}),Object(j.jsx)("span",{className:"error-5 line"}),Object(j.jsx)("span",{className:"error-4 line"}),Object(j.jsx)("span",{className:"error-3 line"}),Object(j.jsx)("span",{className:"error-2 line"}),Object(j.jsx)("span",{className:"error-1 line"})]})}),d=(r(9),function(e){return Object(j.jsxs)("div",{className:"solution",children:[Object(j.jsx)("h2",{className:"title",children:"Soluci\xf3n:"}),Object(j.jsx)("ul",{className:"letters",children:e.word.split("").map((function(t,r){return-1!==e.userLetter.findIndex((function(e){return t===e}))?Object(j.jsx)("li",{className:"letter",children:t},r):Object(j.jsx)("li",{className:"letter"},r)}))})]})}),O=function(e){return Object(j.jsxs)("div",{className:"feedback",children:[Object(j.jsx)("h2",{className:"title",children:"Letras falladas:"}),Object(j.jsx)("ul",{className:"letters",children:e.userLetter.filter((function(t){return!1===e.word.includes(t)})).map((function(e,t){return Object(j.jsx)("li",{className:"letter",children:e},t)}))})]})},x=function(e){return Object(j.jsxs)("form",{className:"form",children:[Object(j.jsx)("label",{className:"title",htmlFor:"last-letter",children:"Escribe una letra:"}),Object(j.jsx)("input",{autoComplete:"off",className:"form__input",maxLength:"1",type:"text",name:"last-letter",id:"last-letter",value:e.lastLetter,onChange:function(t){e.handlerLetter(t.target.value)}})]})},f=function(e){return Object(j.jsxs)("main",{className:"main",children:[Object(j.jsxs)("section",{children:[Object(j.jsx)(d,{word:e.word,userLetter:e.userLetter}),Object(j.jsx)(O,{word:e.word,userLetter:e.userLetter}),Object(j.jsx)(x,{handlerLetter:e.handlerLetter,lastLetter:e.lastLetter})]}),Object(j.jsx)(m,{numberError:e.numberError()})]})},h=r(2),p=(r(22),function(){return Object(j.jsxs)("section",{className:"instructions",children:[Object(j.jsx)("p",{children:'Haz click donde indica "Escribe una letra" y escribe tu letra para adivinar la palabra secreta aleatoria. Si fallas la letra te indicar\xe1 si has acertado, ya que se escribir\xe1 en su posici\xf3n correspondiente de la soluci\xf3n y si no, se a\xf1adir\xe1 a las letras falladas. Ten cuidado o lo ahorcar\xe1s.'}),Object(j.jsx)(c.b,{to:"/",className:"user__button",children:"\xa1A jugar!"}),Object(j.jsxs)("p",{children:["Tambi\xe9n tienes otra manera de jugar si est\xe1s en grupo... en 'Mas opciones' escribe la palabra que quieras sin que te vean..."," "]}),Object(j.jsx)(c.b,{to:"/options",className:"user__button",children:"\xa1Escribe tu palabra!"})]})}),N=(r(23),function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:"user__form",onSubmit:function(e){e.preventDefault()},children:[Object(j.jsx)("label",{className:"title",htmlFor:"word",children:"Escribe aqu\xed la palabra que hay que adivinar:"}),Object(j.jsx)("input",{autoFocus:!0,autoComplete:"off",className:"form__input",maxLength:"15",type:"text",id:"word",name:"word",onChange:function(t){e.userWord(t.target.value)}}),Object(j.jsx)(c.b,{to:"/",className:"user__button",children:"Jugar"}),Object(j.jsx)("small",{className:"underconstruction",children:"*Esta opci\xf3n a\xfan no est\xe1 desarrollada completamente"})]})})});var _=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),r=t[0],n=t[1],a=Object(s.useState)(""),c=Object(i.a)(a,2),m=c[0],d=c[1],O=Object(s.useState)(""),x=Object(i.a)(O,2),_=x[0],v=x[1];return Object(s.useEffect)((function(){o().then((function(e){v(e)}))}),[]),Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(u,{}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{path:"/",element:Object(j.jsx)(f,{word:_,userLetter:r,handlerLetter:function(e){var t=new RegExp("^[a-zA-Z]$");e.match(t)?n([].concat(Object(l.a)(r),[e])):d("")},lastLetter:m,numberError:function(){return r.filter((function(e){return!1===_.includes(e)})).length}})}),Object(j.jsx)(h.a,{path:"/instructions",element:Object(j.jsx)(p,{})}),Object(j.jsx)(h.a,{path:"/options",element:Object(j.jsx)(N,{userWord:function(e){v(e),d(""),n([])}})})]}),Object(j.jsx)(b,{})]})};a.a.render(Object(j.jsx)(c.a,{children:Object(j.jsx)(_,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.2e766ed9.chunk.js.map