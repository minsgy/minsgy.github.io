"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8562],{2511:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=i(5893),t=i(1151);const r={slug:"JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec",title:"JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec",authors:["minsgy"],tags:["JavaScript","DeepDive","Study"]},c=void 0,o={permalink:"/blog/JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec",editUrl:"https://github.com/minsgy/minsgy.github.io/edit/main/blog/javascript-runtime.md",source:"@site/blog/javascript-runtime.md",title:"JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec",description:"\uc11c\ub860",date:"2024-01-04T14:27:38.000Z",formattedDate:"2024\ub144 1\uc6d4 4\uc77c",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"},{label:"DeepDive",permalink:"/blog/tags/deep-dive"},{label:"Study",permalink:"/blog/tags/study"}],readingTime:11.125,hasTruncateMarker:!1,authors:[{name:"\ucd5c\ubbfc\uc11d",title:"\uc3d8\uce74(SOCAR)\uc5d0\uc11c \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",url:"https://github.com/minsgy",imageURL:"https://github.com/minsgy.png",key:"minsgy"}],frontMatter:{slug:"JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec",title:"JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec",authors:["minsgy"],tags:["JavaScript","DeepDive","Study"]},unlisted:!1,prevItem:{title:"Prototype\uc5d0 \ub300\ud558\uc5ec",permalink:"/blog/Prototype\uc5d0 \ub300\ud558\uc5ec"},nextItem:{title:"React \ud658\uacbd\uc5d0\uc11c Google Map \uad6c\ud604\ud558\uae30",permalink:"/blog/React \ud658\uacbd\uc5d0\uc11c Google Map \uad6c\ud604\ud558\uae30"}},a={authorsImageUrls:[void 0]},l=[{value:"\uc11c\ub860",id:"\uc11c\ub860",level:2},{value:"JavaScript",id:"javascript",level:2},{value:"JavaScript \ub4f1\uc7a5\uacfc \ud45c\uc900\ud654",id:"javascript-\ub4f1\uc7a5\uacfc-\ud45c\uc900\ud654",level:3},{value:"V8, Node.js\uc758 \ub4f1\uc7a5",id:"v8-nodejs\uc758-\ub4f1\uc7a5",level:3},{value:"Deno",id:"deno",level:3},{value:"Promise",id:"promise",level:4},{value:"Packages, Npm",id:"packages-npm",level:4},{value:"Deno\uac00 node.js\ub97c \ub300\uccb4\ud560 \uc218 \uc788\uc744\uae4c?",id:"deno\uac00-nodejs\ub97c-\ub300\uccb4\ud560-\uc218-\uc788\uc744\uae4c",level:4},{value:"Bun\uc758 \ub4f1\uc7a5",id:"bun\uc758-\ub4f1\uc7a5",level:3},{value:"Question List",id:"question-list",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\uc11c\ub860",children:"\uc11c\ub860"}),"\n",(0,s.jsxs)(n.p,{children:["\uc800\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc \uc8fc\ub2c8\uc5b4 \uac1c\ubc1c\uc790\ub85c \ud65c\ub3d9\ud558\uba70 ",(0,s.jsx)(n.strong,{children:"JavaScript"}),"\uc5d0 \ub300\ud55c \uc911\uc694\uc131\uc744 \ub9e4\ubc88 \ub290\uaf08\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"JavaScript"}),"\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uad00\ub9ac\ud558\ub294 \ubc29\ubc95, \uac1d\uccb4 \uc9c0\ud5a5\uc744 \uace0\ub824\ud560 \uc218 \uc788\ub294 \ubc29\ubc95 \ub4f1\n\uae30\ubcf8\uc801\uc778 \uc6d0\ub9ac\uac00 \ub4b7\ubc1b\uce68\ub418\uc5b4 \uc124\uacc4\ub97c \ud574\uc57c \uc5ec\ub7ec \uc774\uc288 \uc0ac\ud56d\uc5d0\ub3c4 \ub300\uc751\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\ub610\ud55c, \uc6f9\uc774\ub77c\ub294 \ubd84\uc57c\uc5d0\uc11c \ube60\ub974\uac8c \ubcc0\ud654\ud558\ub294 \uc0c1\ud669\uc5d0\uc11c ",(0,s.jsx)(n.strong,{children:"React"}),"\uc640 \uac19\uc774 \uc5b4\ub5a0\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac/\ud504\ub808\uc784\uc6cc\ud06c\uac00 \uc720\ud589\ud560 \uc9c0\ub294 \ubaa8\ub974\uae30 \ub54c\ubb38\uc5d0 \uae30\ucd08\uac00 \ub418\ub294 JavaScript\uc5d0 \ub300\ud55c \uc774\ud574\uac00 \ud544\uc694\ud558\ub2e4 \uc0dd\uac01\ud574 \ub7f0\ud0c0\uc784\uae4c\uc9c0 \ubd84\uc11d\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\uc774 \ud3ec\uc2a4\ud2b8\ub97c \ud1b5\ud574\uc11c \ubc30\uacbd \uc9c0\uc2dd\uc774 \uad81\uae08\ud55c ",(0,s.jsx)(n.strong,{children:"JavaScript \uc0ac\uc6a9\ud574\uc624\uc2e0 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790"}),"\ubd84\ub4e4\uaed8 \ub3c4\uc6c0 \ub418\uae30\ub97c \ubc14\ub78d\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"javascript",children:"JavaScript"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\uc6f9 \ud398\uc774\uc9c0 (HTML/CSS)\uc758 \ubcf4\uc870 \uae30\ub2a5\uc744 \uc218\ud589\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9 \ub41c \uc5b8\uc5b4\uc785\ub2c8\ub2e4.\n\uc9c0\uc18d\ub41c \ubc1c\uc804\uc73c\ub85c \ube0c\ub77c\uc6b0\uc800 \uc774\uc678\uc758 \ud658\uacbd\uc5d0\uc11c\ub3c4 \ub3d9\uc791\uc2dc\ud0ac \uc218 \uc788\ub294 \ud658\uacbd\uc774 \uc0dd\uae30\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"javascript-\ub4f1\uc7a5\uacfc-\ud45c\uc900\ud654",children:"JavaScript \ub4f1\uc7a5\uacfc \ud45c\uc900\ud654"}),"\n",(0,s.jsx)(n.p,{children:"\ucc98\uc74c JavaScript\ub294 \ub3d9\uc801\uc778 \ud398\uc774\uc9c0 \ub80c\ub354\ub9c1\ub3c4 \uc544\ub2c8\ub77c \ub2e8\uc21c\ud788 \uc11c\ubc84\ub85c\ubd80\ud130 HTML, CSS\ub97c \ub80c\ub354\ub9c1\ud558\ub294 \uc218\uc900\uc73c\ub85c\ub9cc \ud55c\uc815\uc801\uc73c\ub85c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\uc774\ud6c4 JavaScript\uc758 \ud575\uc2ec \uc6d0\ub9ac\uc778 \ube44\ub3d9\uae30(Asynchronous) \uac1c\ub150\uc744 \ub2f4\uc740 **Ajax(Asynchronous JavaScript and XML)**\uac00 \ub4f1\uc7a5\ud558\uac8c \ub418\uba74\uc11c \uc6b0\ub9ac\uac00 \uc54c\uace0 \uc788\ub294 \uae30\ub2a5\uc744 \ud65c\uc6a9\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\uae30\uc874 \ub3d9\uae30\uc801 \ubc29\uc2dd\uc73c\ub85c HTML \uc804\uccb4\ub97c \ub2e4\uc6b4\ubc1b\uc544 \ud654\uba74 \uc804\ud658\uc744 \ud588\uc9c0\ub9cc \ubc14\ub00c\uc9c0 \uc54a\ub294 \ub370\uc774\ud130\ub97c \ud3ec\ud568\ud574 \ubd88\ud544\uc694\ud55c \ub370\uc774\ud130\uac00 \ud3ec\ud568\ub418\ub294 \uacbd\uc6b0\uac00 \uc0dd\uacbc\uace0 \ud1b5\uc2e0 \ud6a8\uc728\uacfc UX \uba74\uc5d0\uc11c \uc633\uc9c0 \uc54a\uc740 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\uc774\ub7ec\ud55c \ubb38\uc81c\ub294 \ube44\ub3d9\uae30\ub97c \ud1b5\ud574 \ub3d9\uc801\uc778 \uc6f9 \ud398\uc774\uc9c0\ub97c \uad6c\uc131\ud558\uba74\uc11c \ubcc0\ud654 \ub41c \ub370\uc774\ud130\ub9cc \ubc1b\uc544\uc640 \uc21c\uac04\uc801\uc73c\ub85c \uae5c\ube61\uc774\ub294 \ud604\uc0c1\uc774 \uc5c6\uc5b4\uc838 UX\ub85c\ub3c4 \uc88b\uc740 \uacb0\uacfc\ub97c \ub0bc \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacb0\uacfc\ub85c \uc6f9 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c\ub3c4 \ub370\uc2a4\ud06c\ud0d1 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \uc720\uc0ac\ud55c \ud37c\ud3ec\uba3c\uc2a4\ub97c \ub0b4\uba70 \uc8fc\ubaa9\ubc1b\uae30 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\uadf8\ub7ec\ub098 \ud45c\uc900\ud654\ub418\uc9c0 \uc54a\uc740 JavaScript\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc801\uc6a9\ub418\uba74\uc11c \ud06c\ub85c\uc2a4 \ube0c\ub77c\uc6b0\uc9d5 \uc774\uc288\uac00 \ubc1c\uc0dd\ud558\uae30 \uc2dc\uc791\ud588\uace0 \ubaa8\ub4e0 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc815\uc0c1 \uc791\ub3d9\ud558\ub294 \uc6f9 \ud398\uc774\uc9c0 \uad6c\uc131\uc774 \uc5b4\ub824\uc6e0\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://i.imgur.com/IXojwIy.png",alt:""})}),"\n",(0,s.jsxs)(n.p,{children:["\uc774\ub97c \ubcf4\uc644\ud558\uae30 \uc704\ud574 ",(0,s.jsx)(n.code,{children:"ECMAScript"})," \uba85\uc73c\ub85c JavaScript \ud45c\uc900\ud654\uac00 \uc9c4\ud589\ub418\uc5b4 \ud604\uc7ac \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 ",(0,s.jsx)(n.code,{children:"ES6"}),", ",(0,s.jsx)(n.code,{children:"ES5"}),"\uc640 \uac19\uc740 \ubb38\ubc95\ub4e4\uc774 \uc0ac\uc6a9\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"v8-nodejs\uc758-\ub4f1\uc7a5",children:"V8, Node.js\uc758 \ub4f1\uc7a5"}),"\n",(0,s.jsxs)(n.p,{children:["Ajax\ub97c \ud1b5\ud55c \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub85c\uc11c \uac00\ub2a5\uc131\uc744 \ud655\uc778 \ud55c \uad6c\uae00(Google)\uc740 JavaScript\ub85c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ube60\ub974\uace0 \uc815\ud655\ud558\uac8c \ub3d9\uc791\ud558\ub294 \uc5d4\uc9c4\uc758 \ud544\uc694\uc131\uc744 \ub290\uaf08\uace0 \uadf8\ub807\uac8c \uc644\uc131 \ub41c \uc624\ud508\uc18c\uc2a4 \uc5d4\uc9c4\uc778 ",(0,s.jsx)(n.a,{href:"https://v8.dev/",children:"V8"}),"\uc774 \ub4f1\uc7a5\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://i.imgur.com/zB7qzy1.png",alt:""})}),"\n",(0,s.jsx)(n.p,{children:"\uc774\ub97c \ud1b5\ud574 JavaScript\ub294 \ub370\uc2a4\ud06c\ud0d1 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ube44\uc2b7\ud55c \uc131\ub2a5\uacfc \ud37c\ud3ec\uba3c\uc2a4\ub97c \ubcf4\uc5ec\uc8fc\uc5c8\uace0 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub85c \uc815\ucc29\ub418\uac8c \ub41c \uacc4\uae30\uac00 \ub429\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:["\uc774\ud6c4 \ub113\uc740 \ud655\uc7a5\uc131\uc5d0 \ub300\ud55c \uac00\ub2a5\uc131\uc744 \ub113\ud600\uc900 V8 \ub7f0\ud0c0\uc784 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc778 ",(0,s.jsx)(n.code,{children:"Node.js"}),"\uc758 \ub4f1\uc7a5\uc73c\ub85c \ube0c\ub77c\uc6b0\uc800 \uc774\uc678\uc758 \ud658\uacbd\uc5d0\uc11c\ub3c4 \ub3d9\uc791\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c5\ub9bd\uc2dc\ud0a8 \uc5ed\ud560\uc744 \ud574\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://i.imgur.com/jRPm1V3.png",alt:""})}),"\n",(0,s.jsxs)(n.p,{children:["\uae30\ubcf8\uc801\uc73c\ub85c \ube44\ub3d9\uae30 I/O\ub97c \uc9c0\uc6d0\ud558\uace0 \uc2f1\uae00 \uc2a4\ub808\ub4dc(Single Thread) \uc774\ubca4\ud2b8 \ub8e8\ud504\ub97c \uae30\ubc18\ud558\uc5ec \ub3d9\uc791\ud558\uace0 \uc2e4\uc2dc\uac04 \ub370\uc774\ud130 \ucc98\ub9ac\uc5d0\ub294 \ud6a8\uacfc\uc801\uc774\uc9c0\ub9cc CPU \uc0ac\uc6a9\ub960\uc774 \ub192\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\ub294 \uad8c\uc7a5\ud558\uc9c0 \uc54a\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uadf8\ub9ac\uace0 ",(0,s.jsx)(n.strong,{children:"Node.js\uc758 \uac1c\ubc1c \uc2dc\uc810\uc774 JavaScript \ubaa8\ub4c8\uc758 \ud45c\uc900\uc774 CommonJS\ub85c \uc774\ub8e8\uc5b4\uc838 ES Module"}),"\uc774 \uc0c8\ub85c\uc6b4 \ud45c\uc900\uc774 \ub41c \ud604\uc7ac\ub85c\uc11c\ub294 \ubd80\uc871\ud55c \ubd80\ubd84\uc785\ub2c8\ub2e4. \uadf8\ub9ac\uace0 TypeScript\uac00 \ud544\uc218\ubd88\uac00\uacb0\ub85c \uc0ac\uc6a9\ud558\ub294 \uc0c1\ud669\uc5d0 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ub2e8\uc810\ub3c4 \uc874\uc7ac\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\uc774\ub7ec\ud55c Node.js\uc758 \ub2e8\uc810\uc744 \ubcf4\uc644\ud558\uace0 \ubc1c\uc804 \ub41c \ub7f0\ud0c0\uc784(Runtime) \ub77c\uc774\ube0c\ub7ec\ub9ac\uc778 ",(0,s.jsx)(n.strong,{children:"Deno"}),"\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"deno",children:"Deno"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/60251579/190108920-7897ed40-5b4a-481d-a1e0-d5a1e3db12bc.png",alt:"image"})}),"\n",(0,s.jsx)(n.p,{children:"Deno\uac00 \ub4f1\uc7a5\ud558\uac8c \ub41c \uac74 2020\ub144 5\uc6d4\uc774\uba70, Node.js\uc758 \ub2e8\uc810\uc744 \ubcf4\uc644\ud558\uace0\uc790 TypeScript \uc9c0\uc6d0, ES Module \uc9c0\uc6d0, \ube0c\ub77c\uc6b0\uc800\uc640 Node.js\uc758 \ud638\ud658\uc131, \ubcf4\uc548 \ubb38\uc81c, \ube60\ub978 \uc2e4\ud589 \uc18d\ub3c4 \uac1c\uc120\uacfc \uba85\uc2dc\uc801\uc778 \ud328\ud0a4\uc9c0 \uad00\ub9ac\ub97c \uac1c\uc120\ud558\uba70 \ub4f1\uc7a5\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h4,{id:"promise",children:"Promise"}),"\n",(0,s.jsx)(n.p,{children:"Node.js\uc758 \ub0b4\uc7a5\ub41c \uc5ec\ub7ec \ube44\ub3d9\uae30 \ub85c\uc9c1\uc740 Promise API\ub97c \ud65c\uc6a9\ud558\uc9c0 \uc54a\uace0 \uc608\uc804 \ubc29\uc2dd\uc758 Callback \ud328\ud134\uc744 \uc791\uc131\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 node async api\uac00 \ub178\ud6c4\ud654\ub418\uc5b4 \uc544\uc26c\uc6b4 \ud37c\ud3ec\uba3c\uc2a4\ub97c \ubcf4\uc5ec\uc8fc\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\uadf8\ub807\uc9c0\ub9cc Deno\uc758 \uacbd\uc6b0 Promise API\ub97c \uae30\ubcf8\uc73c\ub85c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 \ub354\uc6b1 \ube60\ub978 \ud37c\ud3ec\uba3c\uc2a4\ub97c \ubcf4\uc5ec\uc8fc\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// deno - async \uad6c\ubb38\uc774 \uc790\ub3d9\uc73c\ub85c \uc801\uc6a9\ub429\ub2c8\ub2e4.\nconst data = await fetch("URL");\nconst result = await data.json();\nconsole.log(result);\n'})}),"\n",(0,s.jsx)(n.h4,{id:"packages-npm",children:"Packages, Npm"}),"\n",(0,s.jsx)(n.p,{children:"License, repository, description \ub4f1 \ub2e4\uc591\ud55c \uc815\ubcf4\ub97c \ub2f4\uace0 \uc788\ub294 package.json\uc740 \ubd88\ud544\uc694\ud55c \uc815\ubcf4\uac00 \ub9ce\uc2b5\ub2c8\ub2e4. \uc2e4\uc81c\ub85c\ub294 \ud30c\uc77c\uacfc URL\ub9cc \uc0ac\uc6a9\ud558\uba74 \uc885\uc18d\uc131\uc744 \ub098\uc5f4\ud560 \ud544\uc694\uac00 \uc5c6\uc5b4\uc9d1\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"Deno\ub294 \uc774\ub7ec\ud55c package.json\uc744 \uc81c\uac70\ud558\uace0 URL\ub9cc\uc73c\ub85c \uc885\uc18d\uc131\uc744 \ub098\uc5f4\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\uc600\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:["\ub610\ud55c ",(0,s.jsx)(n.code,{children:"npm(closed source)"})," \ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc544 \ub3c5\ub9bd\uc131\uc744 \ub192\uc77c \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ub97c \ud1b5\ud574 Github, GitLab, Bitbucket \ub4f1 \ub2e4\uc591\ud55c \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uac00\uc838\uc640 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// node.js\nconst moment = require("moment");\nconsole.log(moment.version);\n\n// deno\nimport { moment } from "https://deno.land/x/deno_moment@1.0.0/moment.ts";\nconsole.log(moment.version);\n'})}),"\n",(0,s.jsx)(n.h4,{id:"deno\uac00-nodejs\ub97c-\ub300\uccb4\ud560-\uc218-\uc788\uc744\uae4c",children:"Deno\uac00 node.js\ub97c \ub300\uccb4\ud560 \uc218 \uc788\uc744\uae4c?"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/60251579/190184861-0bdbeded-f0e0-45ca-a113-71076e918608.png",alt:"image"})}),"\n",(0,s.jsx)(n.p,{children:"\ud604\uc7ac 2022\ub144 9\uc6d4 \uae30\uc900\uc73c\ub85c Deno \uc11c\ube44\uc2a4\ub294 v1.25.2 \ub9b4\ub9ac\uc988 \uc911\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\ucd5c\uadfc\uae4c\uc9c0\ub3c4 \uc5c5\ub370\uc774\ud2b8\ub97c \ud558\ub294 \ub9cc\ud07c \ucc28\uc138\ub300 JavaScript \ub7f0\ud0c0\uc784\uc73c\ub85c \ubc1c\ub3cb\uc6c0 \ud560 \uc218 \uc788\ub3c4\ub85d \uafb8\uc900\ud55c \uac1c\ubc1c\uc5d0 \uc788\uc2b5\ub2c8\ub2e4. \uacfc\uac70 \uc794\uc7ac\uc778 CommonJS \ubaa8\ub4c8\uc744 \ubcc0\uacbd\ud558\uace0 \uc0ac\uc6a9\uc131\uc774 \ub9ce\uc740 TypeScript\ub97c \uc81c\uacf5\ud558\ub294 \ub9cc\ud07c \uc55e\uc73c\ub85c\uc758 \uae30\ub300\uac00 \uc788\ub294 \ub7f0\ud0c0\uc784 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub77c\uace0 \uae30\ub300\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\uadf8\ub7ec\ub098 \ud604\uc7ac Deno\uc5d0 \uc0c1\uc751\ud558\ub294 TypeScript package \uc9c0\uc6d0\uc774 \uc544\uc26c\uc6b4\ub9cc\ud07c \uc0ac\uc6a9\uc131\uc5d0 \uc788\uc5b4\uc11c node.js\uac00 \uc555\ub3c4\uc801\uc778 \uc2dc\uc7a5\uc744 \ucc28\uc9c0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc810\uc810 TypeScript \ud504\ub85c\uc81d\ud2b8 \uc2dc\uc7a5\uc774 \ub113\uc5b4\uc9c4\ub2e4\uba74 \ucda9\ubd84\ud788 \uc0ac\uc6a9\ud560\ub9cc\ud55c \ub9e4\ub825\uc801\uc778 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\uc774\ud6c4 \ub354 \ube60\ub978 \uc18d\ub3c4\ub97c \uc704\ud574 \ud0c4\uc0dd\ud55c \ub7f0\ud0c0\uc784 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"bun\uc758-\ub4f1\uc7a5",children:"Bun\uc758 \ub4f1\uc7a5"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/60251579/190210190-c14a338f-86f7-4b84-9398-96219b269dc2.png",alt:"image"})}),"\n",(0,s.jsx)(n.p,{children:"\uc0c8\ub86d\uac8c JavaScript \ub7f0\ud0c0\uc784 \ubc0f \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\uc778 Bun\uc774 \ub4f1\uc7a5\ud588\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:["\uae30\uc874 V8 \uc5d4\uc9c4\uc744 \ud65c\uc6a9\ud558\ub358 ",(0,s.jsx)(n.strong,{children:"Node, Deno"}),"\uc640 \ube44\uad50\ub418\ub294 ",(0,s.jsx)(n.strong,{children:"JavaScriptCore"})," \uae30\ubc18\uc73c\ub85c \uad6c\ucd95\ub418\uc5b4 \ube60\ub974\uac8c \ub3d9\uc791\ud569\ub2c8\ub2e4. \uc800\uc218\uc900 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc778 Zig\ub85c \uc791\uc131\ub418\uc5b4\uc11c \uac00\ub2a5\ud55c \uc131\ub2a5\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/60251579/190211078-d8516115-f153-4c63-b944-14b5fb3e4838.png",alt:"image"})}),"\n",(0,s.jsx)(n.p,{children:"\ud2b9\uc9d5\uc73c\ub85c\ub294 node.js \ubaa8\ub4c8\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 node_modules\ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9\ud558\uba70 npm\uacfc \ud638\ud658\ud560 \uc218 \uc788\ub294 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800\ub97c \ud3ec\ud568\ud558\uac8c \ub429\ub2c8\ub2e4. \uadf8\ub798\uc11c node.js\uc758 \uc0ac\uc6a9\ubc95\uacfc \uc720\uc0ac\ud569\ub2c8\ub2e4. \ub610\ud55c commonJS\uc640 ESM \ub458 \ub2e4 \uc9c0\uc6d0\ud558\uba70 JavaScript/TypeScript\ub97c \uc9c0\uc6d0\ud558\uc5ec \uac1c\ubc1c \ud658\uacbd\uc5d0 \ub300\ud55c \ud655\uc7a5\uc131\uc774 \ub113\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\uc774\ub807\uac8c \ubcf8\ub2e4\uba74 Demo\uc640 Node.js\uac00 \uac00\uc9c4 \ubb38\uc81c\uc810\uc744 \ubcf4\uc644\ud558\uace0 \uc788\uc9c0\ub9cc, \uc544\uc9c1 v1\ub3c4 \ub098\uc624\uc9c0 \uc54a\uc740 beta version\uc778 \uc0c1\ud0dc\uc785\ub2c8\ub2e4. \ud604\uc7ac \ub7f0\ud0c0\uc784 \uc18d\ub3c4\ub9cc \ubc14\ub77c\ubcf8\ub2e4\uba74 \uad1c\ucc2e\uc9c0\ub9cc \ubcf4\uc548 \ubc0f \ub2e4\ub978 \uc774\uc288\uc5d0 \ub300\ud574 \uc5b4\ub5bb\uac8c \ub300\uc751\ud560 \uc9c0 production \ud658\uacbd\uc5d0\uc11c \uc801\uc6a9\ud558\uae30\uc5d0\ub294 \uc2dc\uac04\uc774 \ud544\uc694\ud574\ubcf4\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"question-list",children:"Question List"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ubb34\uc2a8 \uc5b8\uc5b4\uc778\uac00? (\uc5b8\uc5b4\uc758 \ud2b9\uc9d5, \ubcf8\uc778\uc774 \uc0dd\uac01\ud558\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ud2b9\uc9d5\ub3c4 \uc88b\uc74c)"}),"\n",(0,s.jsx)(n.li,{children:"\uc778\ud130\ud504\ub9ac\ud130 \uc5b8\uc5b4\uc640 \ucef4\ud30c\uc77c \uc5b8\uc5b4\uc5d0 \ub300\ud574 \ub300\ub2f5\ud558\uace0 \ucc28\uc774\uc810\uc740 \ubb34\uc5c7\uc778\uac00\uc694?"}),"\n",(0,s.jsx)(n.li,{children:"Optional Chaining\uacfc Non-null assertion operator\uc5d0 \ub300\ud574 \uc544\ub294 \ub300\ub85c \uc124\uba85\ud574\uc8fc\uc138\uc694."}),"\n",(0,s.jsx)(n.li,{children:"!!, ??, && \uc5f0\uc0b0\uc790\uc5d0 \ub300\ud574 \uc124\uba85\ud574\uc8fc\uc138\uc694."}),"\n",(0,s.jsx)(n.li,{children:"\uba54\ubaa8\ub9ac \ud560\ub2f9\uacfc \uba54\ubaa8\ub9ac \ucc38\uc870, \uac00\ube44\uc9c0 \ucf5c\ub809\ud130\uc5d0 \ub300\ud574 \uc544\ub294 \ub300\ub85c \uc124\uba85\ud574\uc8fc\uc138\uc694. \uc6d0\uc2dc\ud0c0\uc785\uacfc \uac1d\uccb4\ud0c0\uc785\uc744 \uac00\uc9c0\uace0 \uc124\uba85\ud574\uc8fc\uc138\uc694."}),"\n",(0,s.jsx)(n.li,{children:"var, let, const\uc5d0 \ub300\ud574 \uc544\ub294 \ub300\ub85c \uc124\uba85\ud574\uc8fc\uc138\uc694."}),"\n",(0,s.jsx)(n.li,{children:"\ud638\uc774\uc2a4\ud305\uc774 \ubb34\uc5c7\uc774\uace0 \uc77c\uc5b4\ub098\ub294 \uacfc\uc815\uc5d0 \ub300\ud574 \uc544\ub294 \ub300\ub85c \uc124\uba85\ud574\uc8fc\uc138\uc694."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"if (!data)"}),"\uc640 ",(0,s.jsx)(n.code,{children:"if (data === undefined)"}),"\uc758 \ucc28\uc774\uc810\uc740 \ubb34\uc5c7\uc778\uac00\uc694?"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://deno.land/",children:"deno"}),"\n",(0,s.jsx)(n.a,{href:"https://bun.sh/",children:"bun"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=Uc03tAqC6fQ",children:"deno vs node.js \ube44\uad50\ud558\uae30"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://techblog.gccompany.co.kr/%ED%95%9Cbun-%EC%8D%A8%EB%B3%B4%EB%8A%94-%EA%B1%B0-%EC%96%B4%EB%95%8C-fa3cb32ac76f",children:"\uc5ec\uae30\uc5b4\ub54c Tech Blog"})]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>c});var s=i(7294);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);