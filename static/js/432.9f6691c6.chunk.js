"use strict";(self.webpackChunkreact_movies=self.webpackChunkreact_movies||[]).push([[432],{256:function(n,t,e){e.d(t,{BG:function(){return l},LI:function(){return f},fU:function(){return d},sv:function(){return h},vw:function(){return p}});var r=e(861),a=e(757),c=e.n(a),o=e(340),u="https://api.themoviedb.org/3/",i="14d9418a13ba1f50c8b95263b7df6dda",s="movie/",p=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat("trending/movie/day","?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat("search/movie","?query=").concat(t,"&api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat(s).concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat(s).concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat(s).concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},432:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,c,o,u,i=e(861),s=e(439),p=e(757),f=e.n(p),l=e(689),d=e(87),h=e(168),v=e(924),x=v.ZP.ul(r||(r=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 262px);\n  gap: 16px;\n  justify-content: center;\n  list-style: none;\n"]))),m=v.ZP.li(a||(a=(0,h.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n  &:hover,\n  &:focus {\n    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.7);\n  }\n"]))),b=v.ZP.img(c||(c=(0,h.Z)(["\n  width: 100%;\n  height: 336px;\n"]))),g=v.ZP.h2(o||(o=(0,h.Z)(["\n  text-align: center;\n  padding: 5px;\n\n"]))),w=((0,v.ZP)(d.rU)(u||(u=(0,h.Z)(["\n  color: black;\n  font-weight: 500;\n  text-decoration: none;\n  margin-top: 10px;\n  display: block;\n  &:hover,\n  &:focus {\n    color: #a19b19;\n  }\n"]))),e(184)),y=function(n){var t=n.submit,e=n.movie,r=n.isLoading,a=(0,l.TH)(),c=Boolean(e.length);return(0,w.jsxs)("div",{children:[(0,w.jsxs)("form",{onSubmit:t,children:[(0,w.jsx)("input",{name:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,w.jsx)("button",{type:"submit",children:"Search"})]}),r&&(0,w.jsx)("b",{children:"LOADING..."}),c&&(0,w.jsx)(x,{children:e.map((function(n){return(0,w.jsx)(m,{children:(0,w.jsxs)(d.rU,{to:"/movies/".concat(n.id),state:{from:a},style:{textDecoration:"none",color:"black"},children:[(0,w.jsx)(b,{src:n.poster_path?"https://image.tmdb.org/t/p/w342/".concat(n.poster_path):"https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg",alt:n.title}),(0,w.jsx)(g,{children:n.title})]})},n.id)}))}),!c&&(0,w.jsx)("p",{children:"Please type name on the movie"})]})},Z=e(256),k=e(791);function j(){var n,t=(0,k.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1],c=(0,k.useState)(!1),o=(0,s.Z)(c,2),u=o[0],p=o[1],l=(0,d.lr)(),h=(0,s.Z)(l,2),v=h[0],x=h[1],m=null!==(n=v.get("query"))&&void 0!==n?n:"";return(0,k.useEffect)((function(){function n(){return(n=(0,i.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,(0,Z.LI)(m);case 4:t=n.sent,a(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,p(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}""!==m&&function(){n.apply(this,arguments)}()}),[m]),(0,w.jsx)("div",{children:(0,w.jsx)(y,{isLoading:u,movie:r,submit:function(n){!function(n){n.preventDefault();var t=n.target.input.value;v.set("query",t.toLocaleLowerCase()),x(v)}(n),function(n){n.target.input.value=""}(n)}})})}}}]);
//# sourceMappingURL=432.9f6691c6.chunk.js.map