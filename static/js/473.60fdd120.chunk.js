"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[473],{1473:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(5861),r=a(885),s=a(7757),i=a.n(s),c=a(2791),l=a(501),o=a(4569),u=a.n(o),p="Movies_input__T1+k0",m="Movies_button__JR8hU",f="Movies_filmsList__+36T2",h="Movies_film__iOy1C",_="Movies_item__-A0Ka",d="Movies_img__Yh0CH",v=a(184);function g(){var e=(0,c.useState)(null),t=(0,r.Z)(e,2),a=t[0],s=t[1],o=(0,l.lr)(),g=(0,r.Z)(o,2),x=g[0],b=g[1],j=x.get("query")||"";(0,c.useEffect)((function(){function e(){return(e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("https://api.themoviedb.org/3/search/movie?api_key=38f8f0caa293ab4deac25df0604d8478&language=en-US&page=1&include_adult=false&query=".concat(j));case 3:t=e.sent,s(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[j]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.search.value;""!==t.trim()&&b({query:t})},children:[(0,v.jsx)("input",{name:"search",type:"text",autoComplete:"off",className:p,autoFocus:!0,placeholder:"Search films"}),(0,v.jsx)("button",{type:"submit",className:m,children:"Search"})]}),(0,v.jsx)("ul",{className:f,children:a&&a.map((function(e){var t,a;return(0,v.jsx)("li",{className:_,children:(0,v.jsxs)(l.OL,{to:"".concat(e.id),className:h,children:[(0,v.jsx)("img",{className:d,src:"https://image.tmdb.org/t/p/w500".concat(e.backdrop_path||"/2f2denPrX62TjWJKVD9i2dum164.jpg"," "),alt:"alt"}),(0,v.jsx)("p",{children:null!==(t=null!==(a=e.original_title)&&void 0!==a?a:e.title)&&void 0!==t?t:e.original_name})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=473.60fdd120.chunk.js.map