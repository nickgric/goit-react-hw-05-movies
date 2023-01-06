"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[703],{8641:function(n,e,t){t.d(e,{O:function(){return w}});var r,a,c,i,o,u=t(168),s=t(6444),l=t(1087),p=s.ZP.li(r||(r=(0,u.Z)(["\n  width: 20%;\n  height: 400px;\n"]))),f=s.ZP.img(a||(a=(0,u.Z)(["\n  width: 100%;\n"]))),d=s.ZP.div(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),h=(0,s.ZP)(l.rU)(i||(i=(0,u.Z)(["\n  height: 100%;\n  width: 100%;\n"]))),g=t(7689),v=t(1098),x=t(184),m=function(n){var e=n.movie,t=(0,g.TH)().pathname;return(0,x.jsx)(p,{children:(0,x.jsxs)(h,{to:"/movies/".concat((0,v.Z)(e.title),"/").concat(e.id),state:{from:t},children:[(0,x.jsx)(f,{src:e.poster_path?"https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(e.poster_path):"https://image.tmdb.org/t/p/w600_and_h900_bestv2/t9S352o0lbpXoaSC2X2T8bghGDa.jpg",alt:e.title}),(0,x.jsxs)(d,{children:[(0,x.jsx)("h3",{children:e.title}),(0,x.jsxs)("ul",{children:[(0,x.jsxs)("li",{children:["Release: ",e.release_date]}),(0,x.jsxs)("li",{children:["Rating: ",e.vote_average]})]})]})]})})},b=s.ZP.ul(o||(o=(0,u.Z)(["\n  list-style: none;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n"]))),w=function(n){var e=n.movies;return(0,x.jsx)(b,{children:e.map((function(n){return(0,x.jsx)(m,{movie:n},n.id)}))})}},557:function(n,e,t){t.d(e,{t:function(){return f}});var r,a,c,i=t(168),o=t(6444),u=o.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n"]))),s=o.ZP.button(a||(a=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 20px;\n  font-weight: 800;\n  color: teal;\n\n  border-radius: 10px;\n  border-width: 1px;\n  border-color: #ccc;\n  border-style: solid;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: burlywood;\n  }\n"]))),l=o.ZP.p(c||(c=(0,i.Z)(["\n  color: navy;\n  font-weight: 600;\n"]))),p=t(184),f=function(n){var e=n.page,t=n.totalPages,r=n.changePage,a=function(n){switch(n.target.name){case"start":r(1);break;case"back":r(Number(e)-1);break;case"forward":r(Number(e)+1);break;case"finish":r(t)}};return(0,p.jsxs)(u,{children:[(0,p.jsx)(s,{disabled:1===Number(e),onClick:a,name:"start",children:"first"}),(0,p.jsx)(s,{disabled:1===Number(e),onClick:a,name:"back",children:"-1"}),(0,p.jsxs)(l,{children:[e," of ",t]}),(0,p.jsx)(s,{disabled:Number(e)===Number(t),onClick:a,name:"forward",children:"+1"}),(0,p.jsx)(s,{disabled:Number(e)===Number(t),onClick:a,name:"finish",children:"last"})]})}},5903:function(n,e,t){t.d(e,{$:function(){return l}});var r,a,c=t(168),i=t(6444),o=i.ZP.section(r||(r=(0,c.Z)(["\n  width: 768px;\n  margin: 0 auto;\n  padding: 0 25px;\n\n  border-radius: 10px;\n  border-color: #ccc;\n  border-style: solid;\n  padding: 30px;\n  box-shadow: 5px 5px 5px 5px #ccc;\n  margin-bottom: 20px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),u=i.ZP.h2(a||(a=(0,c.Z)(["\n  font-weight: 800;\n  color: brown;\n"]))),s=t(184),l=function(n){var e=n.children,t=n.title;return(0,s.jsxs)(o,{children:[t&&(0,s.jsx)(u,{children:t}),e]})}},7703:function(n,e,t){t.r(e);var r=t(9439),a=t(2791),c=t(7689),i=t(9392),o=t(5903),u=t(8641),s=t(557),l=t(184);e.default=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],p=e[1],f=(0,a.useState)(1),d=(0,r.Z)(f,2),h=d[0],g=d[1],v=(0,a.useState)(null),x=(0,r.Z)(v,2),m=x[0],b=x[1],w=(0,c.s0)(),y=(0,c.TH)(),Z=(0,c.UO)();(0,a.useEffect)((function(){(0,i.Tg)(h).then((function(n){p(n.data.results),b(n.data.total_pages)})).catch((function(n){return n&&w("/")}))}),[h,m,w]),(0,a.useEffect)((function(){if("/tranding"!==y.pathname)return"/tranding/1"===y.pathname?(w("/"),void g(1)):void(Z.page?g(Z.page):g(1));w("/tranding/2")}),[Z,m,y,w]);return(0,l.jsx)(o.$,{title:"Tranding movies this week",children:t&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.O,{movies:t}),(0,l.jsx)(s.t,{page:h,totalPages:m,changePage:function(n){w("/tranding/".concat(n))}})]})})}},9392:function(n,e,t){t.d(e,{Bt:function(){return d},Ny:function(){return p},Tg:function(){return s},on:function(){return l},wL:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),i=t(3263),o="020befa6f5b3204d9cdfb69cb3fae25a",u="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Z)("".concat(u,"trending/movie/week?api_key=").concat(o,"&page=").concat(e));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Z)("".concat(u,"search/movie?api_key=").concat(o,"&query=").concat(e,"&language=en-US&page=").concat(t,"&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Z)("".concat(u,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Z)("".concat(u,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Z)("".concat(u,"movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=").concat(t));case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()},1098:function(n,e){var t=function(n,e,t){void 0===t&&(t=!1);var r=function(n){var e="\xc0\xc1\xc2\xc3\xc4\xc5\u0104\xe0\xe1\xe2\xe3\xe4\xe5\u0105\xd2\xd3\xd4\xd5\xd5\xd6\xd8\xf2\xf3\xf4\xf5\xf6\xf8\xc8\xc9\xca\xcb\u0118\xe8\xe9\xea\xeb\xf0\u0119\xc7\u0106\xe7\u0107\xd0\xcc\xcd\xce\xcf\xec\xed\xee\xef\xd9\xda\xdb\xdc\xf9\xfa\xfb\xfc\xd1\xf1\u0160\u015a\u0161\u015b\u0178\xff\xfd\u017d\u0179\u017b\u017e\u017a\u017c\u0141\u0142\u0143\u0144\xe0\xe1\xe3\u1ea3\u1ea1\u0103\u1eb1\u1eaf\u1eb3\u1eb5\u1eb7\xe2\u1ea7\u1ea5\u1ea9\u1eab\u1ead\xe8\xe9\u1ebb\u1ebd\u1eb9\xea\u1ec1\u1ebf\u1ec3\u1ec5\u1ec7\u0111\xf9\xfa\u1ee7\u0169\u1ee5\u01b0\u1eeb\u1ee9\u1eed\u1eef\u1ef1\xf2\xf3\u1ecf\xf5\u1ecd\xf4\u1ed3\u1ed1\u1ed5\u1ed7\u1ed9\u01a1\u1edd\u1edb\u1edf\u1ee1\u1ee3\xec\xed\u1ec9\u0129\u1ecb\xe4\xeb\xef\xee\xf6\xfc\xfb\xf1\xe7\xfd\u1ef3\u1ef9\u1ef5\u1ef7",t=e.split("").join("|"),r=new RegExp("("+t+")","g");return n.replace(r,(function(n){return"AAAAAAAaaaaaaaOOOOOOOooooooEEEEEeeeeeeCCccDIIIIiiiiUUUUuuuuNnSSssYyyZZZzzzLlNnaaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy"[e.indexOf(n)]||""}))}(n).trim().toLowerCase(),a=function(n){return n.split("").map((function(n){return"\\"+n})).join("")}(e);return t?r.replace(/\s+/g,e):r.replace(new RegExp("[^a-z0-9"+a+"]+","g"),e).replace(new RegExp(a+"+","g"),e).replace(new RegExp("^"+a,"g"),"").replace(new RegExp(a+"$","g"),"")};e.Z=function n(e,r){if(void 0===r&&(r={delimiter:"-",prefix:""}),r.delimiter||(r.delimiter="-"),r.prefix||(r.prefix=""),!e||"boolean"===typeof e)return"";var a=r.delimiter,c=r.prefix;if("string"===typeof e||"number"===typeof e){var i=t(c,a,!0),o=t(String(e),a);return i?""+i+a+o:o}return"object"===typeof e&&0===Object.keys(e).length?"":"children"in e?n(e.children):e instanceof Array?n(e.map((function(e){return n(e,{delimiter:a})})).join(a),r):"type"in e?n(e.props.children,r):""}}}]);
//# sourceMappingURL=703.c5d147f6.chunk.js.map