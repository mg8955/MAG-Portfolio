(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(A,e,t){},32:function(A,e,t){},33:function(A,e,t){},35:function(A,e,t){},36:function(A,e,t){},37:function(A,e,t){},38:function(A,e,t){},39:function(A,e,t){},40:function(A,e,t){},41:function(A,e,t){},42:function(A,e,t){},43:function(A,e,t){},45:function(A,e,t){"use strict";t.r(e);var s=t(9),n=t(3),a=t(1),c=t(0),i=Object(a.createContext)(),r=function(A){var e=A.children,t=Object(a.useState)("light"),s=Object(n.a)(t,2),r=s[0],l=s[1];Object(a.useEffect)((function(){var A=window.matchMedia("(prefers-color-scheme: dark)");l(A.matches?"dark":"light"),A.addEventListener("change",(function(A){l(A.matches?"dark":"light")}))}),[]);return Object(c.jsx)(i.Provider,{value:[{themeName:r,toggleTheme:function(){var A="dark"===r?"light":"dark";localStorage.setItem("themeName",A),l(A)}}],children:e})},l=t.p+"static/media/parkpickerss.60787a42.png",o=t.p+"static/media/notetakerSS.026e27c4.png",d=t.p+"static/media/fwcss.2016f0c5.jpg",u=t.p+"static/media/readmess.579f750e.png",j=t.p+"static/media/securepasswordgeneratorSS.06e8d6fb.png",b=document.title,m=["Come back!","Done so soon?","Take another look!","Hired? ;)"];window.addEventListener("blur",(function(){document.title=m[Math.floor(Math.random()*m.length)]})),window.addEventListener("focus",(function(){document.title=b}));var h="https://mg8955.github.io/cleanfolio",p="MG",f="Michael Gostomski",v="Full Stack Developer and Adventure Seeker",O="I am always looking for a challenge that tests my abilities and pushes my limits. I take pride in building and leading exceptional and diverse teams. At the end of the day, it is all about better serving my clients.",x="My growth-mindset has led me to founding and selling my first startup, solving complex logistics problems for a nationwide cold-chain transportation company, and the pursuit of extreme endurance sports.",g="This yearning for growth set me on the path to becoming a Full Stack Developer.",k="https://drive.google.com/file/d/1roG0EXgbC5xCekqMxYa2OguLb1sUJHg3/view?usp=share_link",N={linkedin:"https://www.linkedin.com/in/michael-gostomski/",github:"https://github.com/mg8955"},w=[{name:"Park Picker",description:"An app for users to find a National Park to visit based on their outdoor activity of choice.",stack:["JavaScript","React","GraphQL","Express","Node","MongoDB","CSS"],sourceCode:"https://github.com/chewy441014/park-picker",livePreview:"https://park-picker-react.herokuapp.com/home",imgUrl:l},{name:"Note Taker",description:"A note-taker app built with Express.js. Add, save, and delete notes to keep yourself organized.",stack:["Express.js","Node.js","JavaScript"],sourceCode:"https://github.com/mg8955/Express.js-Note-Taker",livePreview:"https://express-note-taker-mag.herokuapp.com/",imgUrl:o},{name:"README Generator",description:"A CLI App for creating a succint, professional README.",stack:["JavaScript","Node.js","Inquirer"],sourceCode:"https://github.com/mg8955/README-Generator",livePreview:"https://github.com/mg8955/README-Generator",imgUrl:u},{name:"Secure Password Generator",description:"A simple app to generate a secure password based on user input.",stack:["JavaScript","CSS3","HTML5"],sourceCode:"https://github.com/mg8955/Secure-Password-Generator",livePreview:"https://mg8955.github.io/Secure-Password-Generator/",imgUrl:j},{name:"Delivery Data Analysis and Visualization",description:"I implemented the collection of daily delivery data for 2021 and 2022 and created visualizations of weekly, monthly and annual metrics.",stack:["Google Sheets & Charts / Excel"],sourceCode:"https://github.com",livePreview:"https://github.com",imgUrl:"data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAYP777/+F9U0mfyM6TwAAAABJRU5ErkJggg=="},{name:"Fairweather Cider Co.",description:"Craft Cidery startup in Austin, TX. Reader's and Editor's choice for The Austin Beerguide's \"Best-Not-Brewery\" Award in 2019",stack:["Co-Founder / Director of Operations"],livePreview:"https://austin.eater.com/2017/11/10/16634608/fairweather-cider-co-austin",imgUrl:d}],y=["JavaScript","React.js","MongoDB","Mongoose","MySQL","Sequelize","Inquirer","Bootstrap","SASS","Bootstrap","Git","HTML5","CSS"],H=["Python","AWS Cloud Practicioner","Java"],P="gostomski.m@gmail.com",z=function(){var A=["Be tolerant with others and strict with yourself. - Marcus Aurelius","We should always be asking ourselves: \u201cIs this something that is, or is not, in my control?\u201d - Epictetus","Make the mind tougher by exposing it to adversity. - Robert Greene","Don't explain your philosophy. Embody it. - Epictetus","Discomfort is the currency of success. - Brooke Castillo"];return A[Math.floor(Math.random()*A.length)]},C=t(16),L=t.n(C),M=t(14),q=t.n(M),W=t(18),X=t.n(W),F=t(17),U=t.n(F),S=(t(28),function(){var A=Object(a.useContext)(i),e=Object(n.a)(A,1)[0],t=e.themeName,s=e.toggleTheme,r=Object(a.useState)(!1),l=Object(n.a)(r,2),o=l[0],d=l[1],u=function(){return d(!o)};return Object(c.jsxs)("nav",{className:"center nav",children:[Object(c.jsxs)("ul",{style:{display:o?"flex":null},className:"nav__list",children:[w.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,y.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,P?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(c.jsx)("button",{type:"button",onClick:s,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===t?Object(c.jsx)(q.a,{}):Object(c.jsx)(L.a,{})}),Object(c.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:o?Object(c.jsx)(U.a,{}):Object(c.jsx)(X.a,{})})]})}),D=(t(32),function(){var A=h,e=p;return Object(c.jsxs)("header",{className:"header center",children:[Object(c.jsx)("h3",{children:A?Object(c.jsx)("a",{href:A,className:"link",children:e}):e}),Object(c.jsx)(S,{})]})}),E=t(11),J=t.n(E),T=t(19),B=t.n(T),Y=(t(33),function(){var A=f,e=v,t=O,s=x,n=g,a=k,i=N;return Object(c.jsxs)("div",{className:"about center",children:[A&&Object(c.jsx)("h1",{children:Object(c.jsx)("span",{className:"about__name",children:A})}),e&&Object(c.jsx)("h2",{className:"about__role",children:e}),Object(c.jsx)("p",{className:"about__desc",children:t&&t}),Object(c.jsx)("p",{className:"about__desc2",children:s&&s}),Object(c.jsx)("p",{className:"about__desc3",children:n&&n}),Object(c.jsxs)("div",{className:"about__contact center",children:[a&&Object(c.jsx)("button",{type:"button",className:"btn btn--outline",onClick:function(){return window.open("https://drive.google.com/file/d/1nYsjuH010izA3EDJj-jwui7KbN9TNsJp/view?usp=share_link")},children:"Resume"}),i&&Object(c.jsxs)(c.Fragment,{children:[i.github&&Object(c.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(c.jsx)(J.a,{})}),i.linkedin&&Object(c.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(c.jsx)(B.a,{})})]})]})]})}),V=t(7),Z=t.n(V),G=t(20),R=t.n(G),K=(t(35),function(A){var e=A.project;return Object(c.jsxs)("div",{className:"project",children:[Object(c.jsx)("img",{src:e.imgUrl,alt:"project screenshot"}),Object(c.jsx)("h3",{children:e.name}),Object(c.jsx)("p",{className:"project__description",children:e.description}),e.stack&&Object(c.jsx)("ul",{className:"project__stack",children:e.stack.map((function(A){return Object(c.jsx)("li",{className:"project__stack-item",children:A},Z()())}))}),e.sourceCode&&Object(c.jsx)("a",{href:e.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(c.jsx)(J.a,{})}),e.livePreview&&Object(c.jsx)("a",{href:e.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(c.jsx)(R.a,{})})]})}),I=(t(36),function(){return w.length?Object(c.jsxs)("section",{id:"projects",className:"section projects",children:[Object(c.jsx)("h2",{className:"section__title",children:"Projects"}),Object(c.jsx)("div",{className:"projects__grid",children:w.map((function(A){return Object(c.jsx)(K,{project:A},Z()())}))})]}):null}),Q=(t(37),function(){return y.length?Object(c.jsxs)("section",{className:"section skills",id:"skills",children:[Object(c.jsx)("h2",{className:"section__title",children:"Skills"}),Object(c.jsx)("ul",{className:"skills__list",children:y.map((function(A){return Object(c.jsx)("li",{className:"skills__list-item btn btn--plain",children:A},Z()())}))})]}):null}),_=(t(38),function(){return H.length?Object(c.jsxs)("section",{className:"section skills",id:"skills",children:[Object(c.jsx)("h2",{className:"section__title",children:"Currently Studying"}),Object(c.jsx)("ul",{className:"skills__list",children:H.map((function(A){return Object(c.jsx)("li",{className:"skills__list-item btn btn--plain",children:A},Z()())}))})]}):null}),$=t(21),AA=t.n($),eA=(t(39),function(){var A=Object(a.useState)(!1),e=Object(n.a)(A,2),t=e[0],s=e[1];return Object(a.useEffect)((function(){var A=function(){return window.pageYOffset>500?s(!0):s(!1)};return window.addEventListener("scroll",A),function(){return window.removeEventListener("scroll",A)}}),[]),t?Object(c.jsx)("div",{className:"scroll-top",children:Object(c.jsx)("a",{href:"#top",children:Object(c.jsx)(AA.a,{fontSize:"large"})})}):null}),tA=(t(40),function(){return P?Object(c.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(c.jsx)("h2",{className:"section__title",children:"Contact"}),Object(c.jsx)("a",{href:"mailto:".concat(P),children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),sA=(t(41),function(){return Object(c.jsx)("footer",{className:"footer",children:z()})}),nA=(t(42),function(){var A=Object(a.useContext)(i),e=Object(n.a)(A,1)[0].themeName;return Object(c.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(c.jsx)(D,{}),Object(c.jsxs)("main",{children:[Object(c.jsx)(Y,{}),Object(c.jsx)(I,{}),Object(c.jsx)(Q,{}),Object(c.jsx)(_,{}),Object(c.jsx)(tA,{})]}),Object(c.jsx)(eA,{}),Object(c.jsx)(sA,{})]})});t(43);Object(s.render)(Object(c.jsx)(r,{children:Object(c.jsx)(nA,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.774c61ee.chunk.js.map