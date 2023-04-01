"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[258],{911:function(r,e,n){n.d(e,{Z:function(){return c}});var t=n(184);function c(r){var e=r.children;return(0,t.jsx)("ul",{children:e})}},258:function(r,e,n){n.r(e),n.d(e,{default:function(){return d}});var t=n(439),c=n(911),a=n(87),i=n(184);function u(r){var e=r.children;return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:e}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"cast",children:(0,i.jsx)("p",{children:"Cast"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"reviews",children:(0,i.jsx)("p",{children:"Reviews"})})})]})]})}var s=n(791),o=n(689),p=n(933),l=n(243),h=n(596);function d(){var r,e,n=(0,o.TH)(),d=(0,s.useRef)(null!==(r=null===(e=n.state)||void 0===e?void 0:e.from)&&void 0!==r?r:"/"),f=(0,o.UO)().movId,v=(0,s.useState)({}),x=(0,t.Z)(v,2),j=x[0],m=x[1],w=j.original_title,b=j.overview,y=j.genres,k=j.poster_path,Z=j.release_date,_=j.vote_average;return(0,s.useEffect)((function(){(0,p.rK)(f).then((function(r){var e=r.data;return m(e)})).catch((function(r){return h.Am.error("".concat(r,"!"))}))}),[f]),(0,i.jsxs)("div",{children:[(0,i.jsx)(a.rU,{to:d.current,children:"Go Back"}),j.genres&&(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(k),alt:w}),(0,i.jsxs)("h2",{children:[w,"(",(0,i.jsx)("span",{children:new Date(Z).getFullYear()}),")"]}),(0,i.jsxs)("p",{children:["User Score",(0,i.jsxs)("span",{children:[" ",10*_.toFixed(1),"%"]})]}),(0,i.jsx)("p",{children:"Overview"}),(0,i.jsx)("p",{children:b}),(0,i.jsx)("p",{children:"Genres"}),(0,i.jsx)(c.Z,{children:y.map((function(r){var e=r.id,n=r.name;return(0,i.jsx)("li",{id:e,children:(0,i.jsx)("p",{children:n})},e)}))})]}),(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(l.yk,{height:"100",width:"100",color:"#4fa94d",wrapperStyle:{justifyContent:"center"},visible:!0,outerCircleColor:"#0000ff",innerCircleColor:"#ff0048",barColor:"#0000ff",ariaLabel:"circles-with-bar-loading"}),children:[(0,i.jsx)(u,{children:"Additional information"}),(0,i.jsx)(o.j3,{})]})]})}},933:function(r,e,n){n.d(e,{B3:function(){return v},V0:function(){return o},ZR:function(){return d},os:function(){return j},rK:function(){return l}});var t=n(861),c=n(757),a=n.n(c),i=n(924),u="ad2c844e7719e1ada80161a84523905b",s="https://api.themoviedb.org/3";function o(){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.Z)("".concat(s,"/trending/movie/day?api_key=").concat(u));case 3:return r.abrupt("return",r.sent);case 6:return r.prev=6,r.t0=r.catch(0),r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))).apply(this,arguments)}function l(r){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(a().mark((function r(e){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.Z)("".concat(s,"/movie/").concat(e,"?api_key=").concat(u));case 3:return r.abrupt("return",r.sent);case 6:return r.prev=6,r.t0=r.catch(0),r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))).apply(this,arguments)}function d(r){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(a().mark((function r(e){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.Z)("".concat(s,"/search/movie?api_key=").concat(u,"&query=").concat(e));case 3:return r.abrupt("return",r.sent);case 6:return r.prev=6,r.t0=r.catch(0),r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))).apply(this,arguments)}function v(r){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(a().mark((function r(e){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.Z)("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 3:return r.abrupt("return",r.sent);case 6:return r.prev=6,r.t0=r.catch(0),r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))).apply(this,arguments)}function j(r){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(a().mark((function r(e){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.Z)("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(u));case 3:return r.abrupt("return",r.sent);case 6:return r.prev=6,r.t0=r.catch(0),r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=258.c41ec2fa.chunk.js.map