"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=a(885),c=a(791),r=a(871),i="Cast_container__iz+ye",s="Cast_card__WlXfx",o="Cast_img__-isbW",h=a(184);function l(){var e=(0,c.useState)(null),t=(0,n.Z)(e,2),a=t[0],l=t[1],u=(0,r.UO)().movieId;return(0,c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(u,"/credits?api_key=38f8f0caa293ab4deac25df0604d8478&language=en-US")).then((function(e){return e.json()})).then((function(e){return l(e.cast)}))}),[u]),(0,h.jsx)("div",{className:i,children:null===a?(0,h.jsx)("p",{children:"We dont have any reviews for this movie"}):a.map((function(e){return(0,h.jsxs)("div",{className:s,children:[(0,h.jsx)("img",{className:o,src:e.profile_path&&"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:""}),(0,h.jsx)("h2",{children:e.character}),(0,h.jsx)("p",{children:e.name})]},e.id)}))})}}}]);
//# sourceMappingURL=76.04e697ec.chunk.js.map