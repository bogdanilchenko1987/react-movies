"use strict";(self.webpackChunkreact_movies=self.webpackChunkreact_movies||[]).push([[816],{256:function(n,t,r){r.d(t,{BG:function(){return d},LI:function(){return f},fU:function(){return h},sv:function(){return l},vw:function(){return p}});var e=r(861),a=r(757),c=r.n(a),u=r(340),o="https://api.themoviedb.org/3/",i="14d9418a13ba1f50c8b95263b7df6dda",s="movie/",p=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o).concat("trending/movie/day","?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o).concat("search/movie","?query=").concat(t,"&api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o).concat(s).concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o).concat(s).concat(t,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o).concat(s).concat(t,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},816:function(n,t,r){r.r(t),r.d(t,{default:function(){return k}});var e,a,c,u,o=r(861),i=r(439),s=r(757),p=r.n(s),f=r(168),d=r(924),h=d.ZP.ul(e||(e=(0,f.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n  justify-content: center;\n  list-style: none;\n"]))),l=d.ZP.li(a||(a=(0,f.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n  &:hover,\n  &:focus {\n    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.7);\n  }\n"]))),v=d.ZP.img(c||(c=(0,f.Z)(["\n  width: 100%;\n  height: 264px;\n"]))),x=d.ZP.h3(u||(u=(0,f.Z)(["\n  text-align: center;\n"]))),m=r(184),w=function(n){var t=n.cast;return(0,m.jsx)(h,{children:t.map((function(n){return(0,m.jsxs)(l,{children:[(0,m.jsx)(v,{src:n.profile_path?"https://image.tmdb.org/t/p/w200".concat(n.profile_path):"https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg",alt:n.character}),(0,m.jsx)(x,{children:n.original_name})]},n.cast_id)}))})},g=r(256),Z=r(791),b=r(689);function k(){var n=(0,Z.useState)([]),t=(0,i.Z)(n,2),r=t[0],e=t[1],a=(0,Z.useState)(!1),c=(0,i.Z)(a,2),u=c[0],s=c[1],f=(0,b.UO)();return(0,Z.useEffect)((function(){function n(){return(n=(0,o.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.fU)(f.movieId);case 3:t=n.sent,e(t.cast),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:return n.prev=10,s(!0),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[f.movieId]),(0,m.jsxs)("div",{children:[Boolean(r.length)&&(0,m.jsx)(w,{cast:r}),u&&(0,m.jsx)("p",{children:"No Actors found"})]})}}}]);
//# sourceMappingURL=816.0bd4ee1b.chunk.js.map