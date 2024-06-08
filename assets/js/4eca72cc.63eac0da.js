"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2444],{7572:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var o=n(5893),r=n(1151);const t={title:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc",authors:["minsgy"],tags:["micro-frontend","microservice","monolitic","monorepo"],keywords:["iframe","mono-repo","micro-frontend","microservice","monolitic","\uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc","\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc","webpack-module-federation"],date:new Date("2024-02-19T00:00:00.000Z")},l=void 0,c={permalink:"/blog/micro-frontend",editUrl:"https://github.com/minsgy/minsgy.github.io/edit/main/blog/micro-frontend.md",source:"@site/blog/micro-frontend.md",title:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc",description:"\uc11c\ub860",date:"2024-02-19T00:00:00.000Z",formattedDate:"2024\ub144 2\uc6d4 19\uc77c",tags:[{label:"micro-frontend",permalink:"/blog/tags/micro-frontend"},{label:"microservice",permalink:"/blog/tags/microservice"},{label:"monolitic",permalink:"/blog/tags/monolitic"},{label:"monorepo",permalink:"/blog/tags/monorepo"}],readingTime:1.56,hasTruncateMarker:!1,authors:[{name:"\ucd5c\ubbfc\uc11d",title:"\uc3d8\uce74(SOCAR)\uc5d0\uc11c \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",url:"https://github.com/minsgy",imageURL:"https://github.com/minsgy.png",key:"minsgy"}],frontMatter:{title:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc",authors:["minsgy"],tags:["micro-frontend","microservice","monolitic","monorepo"],keywords:["iframe","mono-repo","micro-frontend","microservice","monolitic","\uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc","\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc","webpack-module-federation"],date:"2024-02-19T00:00:00.000Z"},unlisted:!1,nextItem:{title:"\ub9ac\uc561\ud2b8 \uc758\uc874\uc131 \uc8fc\uc785",permalink:"/blog/react-context-api-is-not-global-state"}},s={authorsImageUrls:[void 0]},d=[{value:"\uc11c\ub860",id:"\uc11c\ub860",level:2},{value:"Monolithic vs Microservice vs Microfrontend",id:"monolithic-vs-microservice-vs-microfrontend",level:2},{value:"\ubaa8\ub180\ub9ac\uc2dd(Monolithic)",id:"\ubaa8\ub180\ub9ac\uc2ddmonolithic",level:3},{value:"\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4(Microservice)",id:"\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4microservice",level:3},{value:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc(Microfrontend)",id:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dcmicrofrontend",level:3},{value:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 \uc7a5\uc810",id:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758-\uc7a5\uc810",level:2},{value:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 \ub2e8\uc810",id:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758-\ub2e8\uc810",level:2},{value:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 \uad6c\ud604 \ubc29\ubc95",id:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758-\uad6c\ud604-\ubc29\ubc95",level:2},{value:"iframe\uc744 \uc774\uc6a9\ud55c \ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ud604",id:"iframe\uc744-\uc774\uc6a9\ud55c-\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc-\uad6c\ud604",level:3},{value:"\uc6f9\ud329 \ubaa8\ub4c8 \ud398\ub354\ub808\uc774\uc158\uc744 \uc774\uc6a9\ud55c \ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ud604",id:"\uc6f9\ud329-\ubaa8\ub4c8-\ud398\ub354\ub808\uc774\uc158\uc744-\uc774\uc6a9\ud55c-\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc-\uad6c\ud604",level:3},{value:"\ubaa8\ub178\ub808\ud3ec\ub97c \uc774\uc6a9\ud55c \ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ud604",id:"\ubaa8\ub178\ub808\ud3ec\ub97c-\uc774\uc6a9\ud55c-\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc-\uad6c\ud604",level:3},{value:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc \uc801\uc6a9 \uc0ac\ub840 \ubc0f \ubd84\uc11d",id:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc-\uc801\uc6a9-\uc0ac\ub840-\ubc0f-\ubd84\uc11d",level:2},{value:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 \ud5a5\ud6c4 \uc804\ub9dd",id:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758-\ud5a5\ud6c4-\uc804\ub9dd",level:2},{value:"Reference",id:"reference",level:2}];function a(e){const i={a:"a",h2:"h2",h3:"h3",li:"li",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h2,{id:"\uc11c\ub860",children:"\uc11c\ub860"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\ub294 \uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc\ub97c \uc5ec\ub7ec \uac1c\uc758 \uc791\uc740 \ud504\ub860\ud2b8\uc5d4\ub4dc\ub85c \ub098\ub204\uc5b4 \uac1c\ubc1c\ud558\ub294 \ubc29\ubc95\ub860\uc785\ub2c8\ub2e4."}),"\n",(0,o.jsx)(i.li,{children:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\ub294 \ubaa8\ub180\ub9ac\uc2dd(monolithic)\uacfc \ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4(microservice) \uc0ac\uc774\uc5d0 \uc704\uce58\ud55c \uac1c\ub150\uc73c\ub85c, \ubaa8\ub180\ub9ac\uc2dd\uacfc \ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\uc758 \uc7a5\uc810\uc744 \uacb0\ud569\ud55c \ubc29\ubc95\ub860\uc785\ub2c8\ub2e4."}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"monolithic-vs-microservice-vs-microfrontend",children:"Monolithic vs Microservice vs Microfrontend"}),"\n",(0,o.jsx)(i.h3,{id:"\ubaa8\ub180\ub9ac\uc2ddmonolithic",children:"\ubaa8\ub180\ub9ac\uc2dd(Monolithic)"}),"\n",(0,o.jsx)(i.h3,{id:"\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4microservice",children:"\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4(Microservice)"}),"\n",(0,o.jsx)(i.h3,{id:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dcmicrofrontend",children:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc(Microfrontend)"}),"\n",(0,o.jsx)(i.h2,{id:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758-\uc7a5\uc810",children:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 \uc7a5\uc810"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.strong,{children:"\uac1c\ubc1c\uc790\uc758 \ub3c5\ub9bd\uc131 \ud655\ubcf4"})}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758-\ub2e8\uc810",children:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 \ub2e8\uc810"}),"\n",(0,o.jsx)(i.h2,{id:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758-\uad6c\ud604-\ubc29\ubc95",children:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 \uad6c\ud604 \ubc29\ubc95"}),"\n",(0,o.jsx)(i.h3,{id:"iframe\uc744-\uc774\uc6a9\ud55c-\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc-\uad6c\ud604",children:"iframe\uc744 \uc774\uc6a9\ud55c \ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ud604"}),"\n",(0,o.jsx)(i.h3,{id:"\uc6f9\ud329-\ubaa8\ub4c8-\ud398\ub354\ub808\uc774\uc158\uc744-\uc774\uc6a9\ud55c-\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc-\uad6c\ud604",children:"\uc6f9\ud329 \ubaa8\ub4c8 \ud398\ub354\ub808\uc774\uc158\uc744 \uc774\uc6a9\ud55c \ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ud604"}),"\n",(0,o.jsx)(i.h3,{id:"\ubaa8\ub178\ub808\ud3ec\ub97c-\uc774\uc6a9\ud55c-\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc-\uad6c\ud604",children:"\ubaa8\ub178\ub808\ud3ec\ub97c \uc774\uc6a9\ud55c \ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ud604"}),"\n",(0,o.jsx)(i.h2,{id:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc-\uc801\uc6a9-\uc0ac\ub840-\ubc0f-\ubd84\uc11d",children:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc \uc801\uc6a9 \uc0ac\ub840 \ubc0f \ubd84\uc11d"}),"\n",(0,o.jsx)(i.h2,{id:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758-\ud5a5\ud6c4-\uc804\ub9dd",children:"\ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 \ud5a5\ud6c4 \uc804\ub9dd"}),"\n",(0,o.jsx)(i.h2,{id:"reference",children:"Reference"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"https://webpack.js.org/concepts/module-federation/",children:"\uc6f9\ud329 \ubaa8\ub4c8 \ud398\ub354\ub808\uc774\uc158"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"https://www.youtube.com/watch?v=3f0t5J6vY9E",children:"\uc6f9\ud329 \ubaa8\ub4c8 \ud398\ub354\ub808\uc774\uc158\uc744 \uc774\uc6a9\ud55c \ub9c8\uc774\ud06c\ub85c\ud504\ub860\ud2b8\uc5d4\ub4dc \uad6c\ud604"})}),"\n"]})]})}function m(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>l});var o=n(7294);const r={},t=o.createContext(r);function l(e){const i=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(t.Provider,{value:i},e.children)}}}]);