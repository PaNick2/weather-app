(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(5),i=c.n(r),s=(c(11),c(6)),o=c(3),l=c(0),u="cf12fd4e2e2227d274067af029af9c48",d="https://api.openweathermap.org/data/2.5/",h=0;var j=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)({}),i=Object(o.a)(r,2),j=i[0],b=i[1],f=Object(n.useState)({}),m=Object(o.a)(f,2),O=m[0],p=m[1];function g(e){var t="",c=e.split("");(c=c.map((function(e){return e.toLowerCase()})))[0]=c[0].toUpperCase();var n,a=Object(s.a)(c);try{for(a.s();!(n=a.n()).done;){t+=n.value}}catch(r){a.e(r)}finally{a.f()}return console.log("The final name is ".concat(t)),t}function v(e){fetch("".concat(d,"weather?q=").concat(e,"&units=metric&APPID=").concat(u)).then((function(e){return e.json()})).then((function(e){b(e),a("")}))}return Object(n.useEffect)((function(){console.log("The latest searches are ".concat(O)),console.log(O),console.log(typeof O)}),[O]),Object(l.jsx)("div",{className:"undefined"!=typeof j.main&&j.main.temp>16?"app warm":"app",children:Object(l.jsxs)("main",{children:[Object(l.jsx)("div",{className:"search-box",children:Object(l.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return a(e.target.value)},value:c,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(d,"weather?q=").concat(c,"&units=metric&APPID=").concat(u)).then((function(e){return e.json()})).then((function(e){b(e),a(""),e.message||Object.values(O).includes(g(c))||(localStorage.setItem(function(){if(4!==h){var e="search".concat(h);return h+=1,e}var t="search".concat(h);return h=0,t}(),g(c)),p(Object.values(localStorage)))}))}})}),Object(l.jsxs)("div",{className:"details",children:[Object(l.jsxs)("div",{className:"searches",children:[Object(l.jsxs)("ul",{id:"searchList",children:[Object(l.jsx)("li",{id:"item1",onClick:function(e){return v(e.target.innerHTML)},children:localStorage.search0}),Object(l.jsx)("li",{id:"item2",onClick:function(e){return v(e.target.innerHTML)},children:localStorage.search1}),Object(l.jsx)("li",{id:"item3",onClick:function(e){return v(e.target.innerHTML)},children:localStorage.search2}),Object(l.jsx)("li",{id:"item4",onClick:function(e){return v(e.target.innerHTML)},children:localStorage.search3}),Object(l.jsx)("li",{id:"item5",onClick:function(e){return v(e.target.innerHTML)},children:localStorage.search4})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{id:"clear-button",onClick:function(){localStorage.clear(),p("")},children:"Clear searches"})})]}),Object(l.jsx)("div",{className:"info-container",children:"undefined"!=typeof j.main?Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("div",{className:"location-box",children:[Object(l.jsxs)("div",{className:"location",children:[j.name,", ",j.sys.country]}),Object(l.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],c=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],a=e.getFullYear();return"".concat(t," ").concat(c," ").concat(n," ").concat(a)}(new Date)})]}),Object(l.jsxs)("div",{className:"weather-box",children:[Object(l.jsxs)("div",{className:"temp",children:[Math.round(j.main.temp),"\xb0C"]}),Object(l.jsxs)("div",{className:"weather",children:[" ",j.weather[0].description," "]})]})]}):""}),Object(l.jsx)("div",{})]})]})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),b()}},[[13,1,2]]]);
//# sourceMappingURL=main.8cf8e551.chunk.js.map