"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),y=a,k=c["".concat(o,".").concat(y)]||c[y]||m[y]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={slug:"\ub370\uc774\ud130 \ud328\uce6d \ucd5c\uc801\ud654\ub97c \ud1b5\ud55c API \ube44\uc6a9 \ucd5c\uc801\ud654",title:"\ub370\uc774\ud130 \ud328\uce6d \ucd5c\uc801\ud654\ub97c \ud1b5\ud55c API \ube44\uc6a9 \ucd5c\uc801\ud654",authors:["minsgy"],tags:["TypeScript","React","react-query","optimization","fetch"]},l=void 0,p={permalink:"/blog/\ub370\uc774\ud130 \ud328\uce6d \ucd5c\uc801\ud654\ub97c \ud1b5\ud55c API \ube44\uc6a9 \ucd5c\uc801\ud654",editUrl:"https://github.com/minsgy/minsgy.github.io/edit/main/blog/react-query-optimization.md",source:"@site/blog/react-query-optimization.md",title:"\ub370\uc774\ud130 \ud328\uce6d \ucd5c\uc801\ud654\ub97c \ud1b5\ud55c API \ube44\uc6a9 \ucd5c\uc801\ud654",description:"\uc11c\ub860",date:"2023-04-08T13:49:08.000Z",formattedDate:"2023\ub144 4\uc6d4 8\uc77c",tags:[{label:"TypeScript",permalink:"/blog/tags/type-script"},{label:"React",permalink:"/blog/tags/react"},{label:"react-query",permalink:"/blog/tags/react-query"},{label:"optimization",permalink:"/blog/tags/optimization"},{label:"fetch",permalink:"/blog/tags/fetch"}],readingTime:9.225,hasTruncateMarker:!1,authors:[{name:"Choi Minseok",title:"\uc3d8\uce74(SOCAR)\uc5d0\uc11c \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",url:"https://github.com/minsgy",imageURL:"https://github.com/minsgy.png",key:"minsgy"}],frontMatter:{slug:"\ub370\uc774\ud130 \ud328\uce6d \ucd5c\uc801\ud654\ub97c \ud1b5\ud55c API \ube44\uc6a9 \ucd5c\uc801\ud654",title:"\ub370\uc774\ud130 \ud328\uce6d \ucd5c\uc801\ud654\ub97c \ud1b5\ud55c API \ube44\uc6a9 \ucd5c\uc801\ud654",authors:["minsgy"],tags:["TypeScript","React","react-query","optimization","fetch"]},nextItem:{title:"\ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d \uc815\uc758\ud558\uae30",permalink:"/blog/\ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d \uc815\uc758\ud558\uae30"}},o={authorsImageUrls:[void 0]},u=[{value:"\uc11c\ub860",id:"\uc11c\ub860",level:2},{value:"\ubb38\uc81c \uc0c1\ud669",id:"\ubb38\uc81c-\uc0c1\ud669",level:2},{value:"queryKey\ub97c \ud1b5\ud55c \ub370\uc774\ud130 \uce90\uc2f1 \ubc29\ubc95",id:"querykey\ub97c-\ud1b5\ud55c-\ub370\uc774\ud130-\uce90\uc2f1-\ubc29\ubc95",level:2},{value:"Storage\ub97c \ud1b5\ud55c \ub370\uc774\ud130 \uce90\uc2f1 \ubc29\ubc95",id:"storage\ub97c-\ud1b5\ud55c-\ub370\uc774\ud130-\uce90\uc2f1-\ubc29\ubc95",level:2},{value:"queryKey + timestamp + fetching response data",id:"querykey--timestamp--fetching-response-data",level:3},{value:"\ub098\uc62c \uc218 \uc788\ub294 \ubb38\uc81c\uc810\uacfc \uace0\ubbfc \ud574\uc57c \ud560 \uc810",id:"\ub098\uc62c-\uc218-\uc788\ub294-\ubb38\uc81c\uc810\uacfc-\uace0\ubbfc-\ud574\uc57c-\ud560-\uc810",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2},{value:"react-query\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 persistance \uae30\ub2a5",id:"react-query\uc5d0\uc11c-\uc81c\uacf5\ud558\ub294-persistance-\uae30\ub2a5",level:3}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uc11c\ub860"},"\uc11c\ub860"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\uba74\uc11c Google Map API \uc911 \uc704\ub3c4, \uacbd\ub3c4\ub97c \uc8fc\uc18c\ub85c \ubcc0\ud658\ud558\ub294 \ub85c\uc9c1\uc744 \ud544\uc694\ub85c \ud588\uace0 \uc81c\uacf5\ud55c \ud574\ub2f9 API\ub294 \uac74\ub2f9 6.6\uc6d0\uc758 \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud588\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ub2e4\uc591\ud55c \uc0ac\uc6a9\uc790\uac00 \ub9ce\uc744 \uc218\ub85d \uad49\uc7a5\ud788 \ub9ce\uc740 \ud638\ucd9c\uc774 \uc774\ub8e8\uc5b4\uc9c0\ub2e4\ubcf4\ub2c8 \ube44\uc6a9\uc801\uc778 \ubd80\ub2f4\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ube44\uc6a9\uc744 \ucd5c\uc801\ud654\ud558\uae30 \uc704\ud574\uc11c\ub294 \ucd5c\ub300\ud55c \uc801\uc740 API \ud638\ucd9c\uc744 \ud574\uc57c \ud588\uc5c8\uace0 \ud574\ub2f9 \uacfc\uc815\uc744 \ud3ec\uc2a4\ud305\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ubc88 \ud3ec\uc2a4\ud305\uc5d0\uc11c\ub294 API\ub97c \ube44\uc6a9\uc744 \ucd5c\uc801\ud654\ud558\uae30 \uc704\ud55c \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"\ubb38\uc81c-\uc0c1\ud669"},"\ubb38\uc81c \uc0c1\ud669"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc11c\ube44\uc2a4\uc5d0\uc11c \ube44\uc6a9\uc774 \ub4dc\ub294 API\ub97c \ud638\ucd9c\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uac00 \ub9ce\uc740 \uc11c\ube44\uc2a4\uc758 \uacbd\uc6b0\ub294 \ube44\uc6a9\uc774 \uae30\ud558\uae09\uc218\uc801\uc73c\ub85c \ub298\uc5b4\ub0a0 \uc218 \uc788\uc744 \ubfd0\ub9cc \uc544\ub2c8\ub77c \ud398\uc774\uc9c0 \uccab \uc811\uc18d\ub54c \ube44\uc6a9\uc774 \ub4dc\ub294 \ub370\uc774\ud130 \ud328\uce6d\uc774 \uc874\uc7ac\ud558\uac8c \ub420 \uacbd\uc6b0 \ube44\uc6a9 \ub0a8\ube44\uac00 \ub354 \uc2ec\ud560 \uc218 \uc788\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ub2e8\uc21c\ud788 \uc0c8\ub85c\uace0\uce68\uc744 \ud1b5\ud574 \ud55c \uba85\uc758 \uc0ac\uc6a9\uc790\uac00 \uc5ec\ub7ec \ubc88 API\ub97c \ud638\ucd9c\ud558\ub294 \uacbd\uc6b0\ub3c4 \uc788\uace0 \uc545\uc758(?)\ub97c \uac16\uace0 \ubb34\ud55c \uc0c8\ub85c\uace0\uce68\uc744 \ud558\uac8c \ub41c\ub2e4\uba74 100\ubc88 \uc774\uc0c1\uc758 API \ud638\ucd9c\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \ube44\uc6a9\uc774 \ub9ce\uc774 \ub4dc\ub294 API\ub97c \ud638\ucd9c\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ucd5c\ub300\ud55c \uc801\uc740 API \ud638\ucd9c\uc744 \ud558\ub3c4\ub85d \ucd5c\uc801\ud654\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4. \ud604\uc7ac \ubb38\uc81c \uc0c1\ud669\uc744 \uc815\ub9ac\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ube44\uc6a9\uc774 \ub9ce\uc774 \ub4dc\ub294 API\ub97c \ud638\ucd9c\ud558\ub294 \uacbd\uc6b0"),(0,a.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uac00 \ub9ce\uc740 \uc11c\ube44\uc2a4\uc758 \uacbd\uc6b0 \ube44\uc6a9\uc774 \uae30\ud558\uae09\uc218\uc801\uc73c\ub85c \ub298\uc5b4\ub0a0 \uc218 \uc788\uc74c."),(0,a.kt)("li",{parentName:"ul"},"\ud398\uc774\uc9c0 \uccab \uc811\uc18d\ub54c \ube44\uc6a9\uc774 \ub4dc\ub294 \ub370\uc774\ud130 \ud328\uce6d\uc774 \uc874\uc7ac\ud558\uac8c \ub420 \uacbd\uc6b0 \ube44\uc6a9 \ub0a8\ube44\uac00 \ub354 \uc2ec\ud560 \uc218 \uc788\uc74c."),(0,a.kt)("li",{parentName:"ul"},"\uc0c8\ub85c\uace0\uce68\uc744 \ud1b5\ud574 \ud55c \uba85\uc758 \uc0ac\uc6a9\uc790\uac00 \uc5ec\ub7ec \ubc88 API\ub97c \ud638\ucd9c\ud558\ub294 \uacbd\uc6b0 (\uc545\uc758\ub97c \uac00\uc9c0\uace0 \ubb34\ud55c \uc0c8\ub85c\uace0\uce68\uc744 \ud558\uac8c \ub41c\ub2e4\uba74 \uc9e7\uc740 \uc2dc\uac04\uc5d0 100\ubc88 \uc774\uc0c1\uc758 API \ud638\ucd9c\uc744 \ud560 \uc218 \uc788\uc74c)"),(0,a.kt)("li",{parentName:"ul"},"\ube44\uc6a9\uc774 \ub9ce\uc774 \ub4dc\ub294 API\ub97c \ud638\ucd9c\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ucd5c\ub300\ud55c \uc801\uc740 API \ud638\ucd9c\uc744 \ud558\ub3c4\ub85d \ucd5c\uc801\ud654\ub97c \ud574\uc57c \ud568.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ubb38\uc81c \ud574\uacb0\uc744 \uc704\ud574 API \ube44\uc6a9\uc744 \ucd5c\uc18c\ud654\ud558\uae30 \uc704\ud55c \ubc29\ubc95\uc744 \uace0\ubbfc\ud588\uace0 ",(0,a.kt)("inlineCode",{parentName:"strong"},"API \ud638\ucd9c \ucd5c\uc18c\ud654\ub97c \uc704\ud55c \ub370\uc774\ud130\ub97c \uce90\uc2f1"),"\uc73c\ub85c \ubc29\ud5a5\uc131\uc744 \uc7a1\uace0 \uc791\uc5c5\ud588\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"querykey\ub97c-\ud1b5\ud55c-\ub370\uc774\ud130-\uce90\uc2f1-\ubc29\ubc95"},"queryKey\ub97c \ud1b5\ud55c \ub370\uc774\ud130 \uce90\uc2f1 \ubc29\ubc95"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React \ud658\uacbd\uc5d0\uc11c \ub370\uc774\ud130 \ud328\uce6d \ub3c4\uad6c\ub85c ",(0,a.kt)("inlineCode",{parentName:"li"},"react-query"),"\ub97c \ud65c\uc6a9\ud588\uc2b5\ub2c8\ub2e4. useQuery \uba54\uc18c\ub4dc\uc5d0 \uc9c0\uc6d0\ud558\ub294 ",(0,a.kt)("a",{parentName:"li",href:"https://tanstack.com/query/v4/docs/react/guides/query-keys"},"queryKey"),"\ub97c \ud65c\uc6a9\ud558\uc5ec \ub370\uc774\ud130 \uce90\uc2f1\uc744 \uc720\uc6a9\ud558\uac8c \uad00\ub9ac\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \ud65c\uc6a9\ud558\ub824\uace0 \ud588\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"    useQuery(['minsgy', { status, page }], ...)\n    useQuery(['minsgy', { page, status }], ...)\n    useQuery(['minsgy', { page, status, other: undefined }], ...)\n")),(0,a.kt)("p",null,"\uc704\uc640 \uac19\uc740 \ubc29\uc2dd\uc744 \ud1b5\ud574 \ud398\uc774\uc9c0 \uc811\uc18d \uc2dc API \ud638\ucd9c\uc740 \ucd5c\uc18c\ud654\ud560 \uc218 \uc788\uc5c8\uace0 \ubd88\ud544\uc694\ud55c API \ud638\ucd9c\uc740 \ub9c9\uc744 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7ec\ub098 ",(0,a.kt)("strong",{parentName:"p"},"queryKey\ub85c\ub9cc \uc6d0\ud558\ub294 \ubc29\uc2dd\uc758 \ub370\uc774\ud130 \uce90\uc2f1 \uad00\ub9ac\ub294 \ubd88\uac00\ub2a5\ud588\uc2b5\ub2c8\ub2e4.")," \uc0c8\ub85c\uace0\uce68\uc744 \ud1b5\ud558\uba74 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc0c1\ud0dc\uac00 \ucd08\uae30\ud654\ub418\uc5b4 \uc0c8\ub85c\uc6b4 API \ud638\ucd9c\uc774 \uc774\ub8e8\uc5b4\uc9c0\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"storage\ub97c-\ud1b5\ud55c-\ub370\uc774\ud130-\uce90\uc2f1-\ubc29\ubc95"},"Storage\ub97c \ud1b5\ud55c \ub370\uc774\ud130 \uce90\uc2f1 \ubc29\ubc95"),(0,a.kt)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8 \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud574\uc57c \ud588\uace0 Fetching\ud55c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \ubc29\ubc95\uc744 \uace0\ubbfc\ud574 \ucd94\uac00 \ubc29\uc548\uc740 \ub2e4\uc74c\uacfc \uac19\uc558\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Refresh\ub97c \ud1b5\ud574 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud558\uc5ec \ucd94\uac00\uc801\uc778 API \ud638\ucd9c\uc744 \ub9c9\ub294\ub2e4.\n- Fetching\ud55c \uc720\ud6a8\ud55c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uace0 \ucd94\uac00\uc801\uc778 API \ud638\ucd9c\uc744 \ub9c9\ub294\ub2e4.\n- +) 5\ubd84 \uc774\uc0c1 \uc9c0\ub09c \ub370\uc774\ud130\ub294 \uc0ad\uc81c \ud6c4, \uc0c8\ub85c\uc6b4 API \ud638\ucd9c\uc744 \ud55c\ub2e4.\n")),(0,a.kt)("p",null,"\ud398\uc774\uc9c0 \ub2e8\uc5d0\uc11c Refresh\uac00 \ubc1c\uc0dd\ud574\ub3c4 \ub370\uc774\ud130\ub97c \uc720\uc9c0\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc73c\ub85c web storage\uc640 indexed DB\ub97c \uace0\ubbfc\ud588\uc9c0\ub9cc 100\uc904 \uc774\ud558\uc758 \uc791\uc740 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \uac83\uc774 \ubaa9\uc801\uc774\uc5ec\uc11c ",(0,a.kt)("strong",{parentName:"p"},"WebStorage"),"\ub97c \ud65c\uc6a9\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"querykey--timestamp--fetching-response-data"},"queryKey + timestamp + fetching response data"),(0,a.kt)("p",null,"\uc720\ud6a8\ud55c \ub370\uc774\ud130\uc778\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud55c ",(0,a.kt)("inlineCode",{parentName:"p"},"timestamp"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query"),"\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c ",(0,a.kt)("inlineCode",{parentName:"p"},"queryKey"),", \ub370\uc774\ud130 \ud328\uce6d\ud55c response\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud55c ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"\ub85c \ubb36\uc5b4\uc11c \uad00\ub9ac\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc544\ub798\uc640 \uac19\uc740 ",(0,a.kt)("inlineCode",{parentName:"li"},"useCustomCacheQuery")," \ucee4\uc2a4\ud140 \ud6c5\uc744 \ub9cc\ub4e4\uc5b4\uc11c timestamp\ub97c \ud1b5\ud574 \uc720\ud6a8\ud55c \ub370\uc774\ud130\uc778\uc9c0 \ud655\uc778\ud558\uace0 \uc720\ud6a8\ud55c \ub370\uc774\ud130\uac00 \uc544\ub2cc \uacbd\uc6b0 API \ud638\ucd9c\uc744 \ud558\ub3c4\ub85d \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ucd94\uac00\uc801\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"li"},"initialData")," react-query option\ub97c \ud1b5\ud574 \uce90\uc2f1\ub41c \ub370\uc774\ud130\uac00 \uc788\uc73c\uba74 \uce90\uc2f1\ub41c \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"}," // useCustomCacheQuery.ts\n  const storedData = JSON.parse(sessionStorage.getItem(queryKey));\n  const timestamp = storedData ? storedData.timestamp : Date.now();\n  const queryKey = storedData ? storedData.queryKey : customQueryKey;\n\n // \uc800\uc7a5\ub41c \ub370\uc774\ud130\uac00 \uc788\uace0, timestamp\uac00 5\ubd84 \uc774\ub0b4\uc778 \uacbd\uc6b0\n  if (storedData && timestamp && Date.now() - timestamp < 5 * 60 * 1000) {\n    ...\n  }\n\n  // \uc800\uc7a5\ub41c \ub370\uc774\ud130\uac00 \uc788\uc9c0\ub9cc, timestamp\uac00 5\ubd84 \uc774\uc0c1\uc778 \uacbd\uc6b0\n  if (storedData && timestamp && Date.now() - timestamp >= 5 * 60 * 1000) {\n    ...\n  }\n\n  // \uc800\uc7a5\ub41c \ub370\uc774\ud130\uac00 \uc5c6\uac70\ub098, timestamp\uac00 5\ubd84 \uc774\uc0c1\uc778 \uacbd\uc6b0\n  if (!storedData || !timestamp || Date.now() - timestamp >= 5 * 60 * 1000) {\n    ...\n  }\n\n  return useQuery(queryKey, fetchFunction(), {\n    initialData: storedData ? storedData.data : undefined, // \uce90\uc2f1\ub41c \ub370\uc774\ud130\uac00 \uc788\uc73c\uba74 \uce90\uc2f1\ub41c \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\n    ...\n  })\n")),(0,a.kt)("h3",{id:"\ub098\uc62c-\uc218-\uc788\ub294-\ubb38\uc81c\uc810\uacfc-\uace0\ubbfc-\ud574\uc57c-\ud560-\uc810"},"\ub098\uc62c \uc218 \uc788\ub294 \ubb38\uc81c\uc810\uacfc \uace0\ubbfc \ud574\uc57c \ud560 \uc810"),(0,a.kt)("p",null,"\uc774\ub7ec\ud55c \uce90\uc2f1 \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud560 \ub54c \ub098\uc62c \uc218 \uc788\ub294 \ubb38\uc81c\uc810\uc740 \ub2e4\uc74c\uacfc \uac19\uc558\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- \uc0ac\uc6a9\uc790\uac00 \ud655\uc778\ud558\uace0 \uc788\ub294 \ub370\uc774\ud130\uac00 \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \ub370\uc774\ud130\uc778\uc9c0 \ud655\uc778\ud558\uae30 \uc5b4\ub835\ub2e4.\n- \uce90\uc2f1\ub41c \ub370\uc774\ud130\uac00 \uc2e4\uc81c \ub370\uc774\ud130\uc640 \ub2e4\ub97c \uc218 \uc788\ub2e4.\n")),(0,a.kt)("p",null,"\ud574\ub2f9 \ub85c\uc9c1\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc11c\ube44\uc2a4 \ud2b9\uc9d5\uc744 \uace0\ubbfc\ud558\uace0 \uc801\uc808\ud55c \ubc29\ubc95\uc744 \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- \uce90\uc2f1 \ub41c \ub370\uc774\ud130\ub97c \uc81c\uacf5\ud560 \ub54c \ubb38\uc81c\uac00 \ub420 \uc218 \uc788\ub294\uac00?\n- \ub370\uc774\ud130 \uc815\ud569\uc131\uc774 \uc911\uc694\ud55c\uac00? (\ub370\uc774\ud130\uac00 \uc2e4\uc2dc\uac04\uc73c\ub85c \ubcc0\uacbd\ub418\ub294 \uacbd\uc6b0)\n- \ub370\uc774\ud130 \uc815\ud569\uc131\uc774 \uc911\uc694\ud558\uc9c0 \uc54a\uc740\uac00? (\ub370\uc774\ud130\uac00 \uc2e4\uc2dc\uac04\uc73c\ub85c \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub294 \uacbd\uc6b0)\n")),(0,a.kt)("p",null,"\uc5d0 \ub300\ud55c \uc11c\ube44\uc2a4 \ud2b9\uc9d5\uc744 \uace0\ub824\ud558\uc5ec \uc801\uc808\ud55c \ubc29\ubc95\uc744 \uc120\ud0dd\ud574\uc57c \ud55c\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,a.kt)("p",null,"API \ube44\uc6a9\uc744 \ucd5c\uc18c\ud654\ud558\uae30 \uc704\ud574 \ub370\uc774\ud130 \uce90\uc2f1\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uace0\ubbfc\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- queryKey\ub97c \ud1b5\ud55c \ub370\uc774\ud130 \uce90\uc2f1 \ubc29\ubc95\n- Storage\ub97c \ud1b5\ud574 \uc720\ud6a8\ud55c \ub370\uc774\ud130 \uce90\uc2f1\uc744 \uc704\ud55c \ubc29\ubc95\n")),(0,a.kt)("p",null,"\uc704\uc758 \ub450 \uac00\uc9c0 \ubc29\ubc95\uc744 \ud1b5\ud574 API \ube44\uc6a9\uc744 \ucd5c\uc18c\ud654\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc ",(0,a.kt)("strong",{parentName:"p"},"queryKey\ub85c\ub9cc \uc6d0\ud558\ub294 \ubc29\uc2dd\uc758 \ub370\uc774\ud130 \uce90\uc2f1 \uad00\ub9ac\ub294 \ubd88\uac00\ub2a5"),"\ud588\uace0 ",(0,a.kt)("strong",{parentName:"p"},"Storage\ub97c \ud1b5\ud574 \uc720\ud6a8\ud55c \ub370\uc774\ud130 \uce90\uc2f1\uc744 \uc704\ud55c \ubc29\ubc95"),"\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub610\ud55c, ",(0,a.kt)("strong",{parentName:"p"},"\uce90\uc2f1\ub41c \ub370\uc774\ud130\uac00 \uc2e4\uc81c \ub370\uc774\ud130\uc640 \ub2e4\ub97c \uc218 \uc788\ub2e4.")," \ub77c\ub294 \ubb38\uc81c\uc810\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"react-query\uc5d0\uc11c-\uc81c\uacf5\ud558\ub294-persistance-\uae30\ub2a5"},"react-query\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 persistance \uae30\ub2a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"react-query\uc5d0\uc11c\ub294 ",(0,a.kt)("a",{parentName:"li",href:"https://tanstack.com/query/v4/docs/react/plugins/persistQueryClient"},"persistQueryClient")," \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc9c1\uc811 ",(0,a.kt)("inlineCode",{parentName:"li"},"useCustomCacheQuery")," \ucee4\uc2a4\ud140 \ud6c5\uc744 \ub9cc\ub4e4\uc9c0 \uc54a\uace0\ub3c4 \uce90\uc2f1\ub41c \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc544\uc9c1 ",(0,a.kt)("inlineCode",{parentName:"li"},"react-query v4"),"\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"li"},"persistQueryClient")," \uae30\ub2a5\uc774 stable \ubc84\uc804\uc774 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0 \uc0ac\uc6a9\uc5d0 \uc8fc\uc758\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.")))}m.isMDXComponent=!0}}]);