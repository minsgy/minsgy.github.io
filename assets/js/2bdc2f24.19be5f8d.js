"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8714],{8527:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>a});var l=c(5893),o=c(1151);const s={title:"JavaScript Scope\uc640 Closure",authors:["minsgy"],tags:["JavaScript"],keywords:["JavaScript","Scope","Closure"],date:new Date("2022-03-01T00:00:00.000Z")},r=void 0,t={permalink:"/blog/javascript-lifecycle",editUrl:"https://github.com/minsgy/minsgy.github.io/edit/main/blog/javascript-lifecycle.md",source:"@site/blog/javascript-lifecycle.md",title:"JavaScript Scope\uc640 Closure",description:"\uc11c\ub860",date:"2022-03-01T00:00:00.000Z",formattedDate:"2022\ub144 3\uc6d4 1\uc77c",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"}],readingTime:12.745,hasTruncateMarker:!1,authors:[{name:"\ucd5c\ubbfc\uc11d",title:"\uc3d8\uce74(SOCAR)\uc5d0\uc11c \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",url:"https://github.com/minsgy",imageURL:"https://github.com/minsgy.png",key:"minsgy"}],frontMatter:{title:"JavaScript Scope\uc640 Closure",authors:["minsgy"],tags:["JavaScript"],keywords:["JavaScript","Scope","Closure"],date:"2022-03-01T00:00:00.000Z"},unlisted:!1,prevItem:{title:"JavaScript \uba54\ubaa8\ub9ac \uad00\ub9ac\ud558\uae30",permalink:"/blog/javascript-memory"}},i={authorsImageUrls:[void 0]},a=[{value:"\uc11c\ub860",id:"\uc11c\ub860",level:2},{value:"JavaScript \uc0dd\uba85\uc8fc\uae30",id:"javascript-\uc0dd\uba85\uc8fc\uae30",level:2},{value:"\uc804\uc5ed \uc2a4\ucf54\ud504(Global Scope)\uc640 \uc9c0\uc5ed \uc2a4\ucf54\ud504(Local Scope)",id:"\uc804\uc5ed-\uc2a4\ucf54\ud504global-scope\uc640-\uc9c0\uc5ed-\uc2a4\ucf54\ud504local-scope",level:3},{value:"\ub809\uc2dc\uceec \uc2a4\ucf54\ud504(Lexical Scope)",id:"\ub809\uc2dc\uceec-\uc2a4\ucf54\ud504lexical-scope",level:3},{value:"\ud074\ub85c\uc838(Closure)",id:"\ud074\ub85c\uc838closure",level:3},{value:"\ud074\ub85c\uc838\ub294 \uc5b4\ub514\uc5d0 \uc0ac\uc6a9\ud558\ub098\uc694?",id:"\ud074\ub85c\uc838\ub294-\uc5b4\ub514\uc5d0-\uc0ac\uc6a9\ud558\ub098\uc694",level:2},{value:"1. \uc804\uc5ed \ubcc0\uc218 \uc904\uc774\uae30",id:"1-\uc804\uc5ed-\ubcc0\uc218-\uc904\uc774\uae30",level:3},{value:"2. \ud568\uc218\ud615 \ubc29\uc2dd \ubaa8\ub4c8\ud654",id:"2-\ud568\uc218\ud615-\ubc29\uc2dd-\ubaa8\ub4c8\ud654",level:3},{value:"3. React Hook",id:"3-react-hook",level:3},{value:"bonus. useState\uc758 \uc5c5\ub370\uc774\ud2b8 \uad6c\ud604 \ubc29\uc2dd",id:"bonus-usestate\uc758-\uc5c5\ub370\uc774\ud2b8-\uad6c\ud604-\ubc29\uc2dd",level:3},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\uc11c\ub860",children:"\uc11c\ub860"}),"\n",(0,l.jsxs)(n.p,{children:["JavaScript \uc0dd\uba85\uc8fc\uae30\uc778 ",(0,l.jsx)(n.strong,{children:"\uc2a4\ucf54\ud504(Scope)\uac00 \uc801\uc6a9\ub418\ub294 \uc774\uc720"}),"\ub97c \ud1b5\ud574 \uc6b0\ub9ac\uac00 \uc5b4\ub5a4 \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub294\uc9c0 \uace0\ubbfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc804\uc5ed\uc801\uc73c\ub85c \uc0ac\uc6a9 \ud560 \uc218 \uc788\ub294 \uc774\uc720\uc640 \uc5b4\ub5a4 \uc0dd\uba85\uc8fc\uae30\uae4c\uc9c0 \uace0\ub824\ub97c \ud558\uace0 \ub9cc\ub4e4\uc5b4\uc57c \uc6b0\ub9ac\uac00 \uc720\uc9c0\ubcf4\uc218\uac00 \uc88b\uc740 \ucf54\ub4dc\ub97c \uc9e4 \uc218 \uc788\ub294\uc9c0 \uc54c\uc544\ubcf4\uae30 \uc704\ud574 \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.h2,{id:"javascript-\uc0dd\uba85\uc8fc\uae30",children:"JavaScript \uc0dd\uba85\uc8fc\uae30"}),"\n",(0,l.jsxs)(n.p,{children:["JavaScript\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ubcc0\uc218\ub098 \ud568\uc218 \ub4f1 \uc0dd\uc131\ub418\uace0 \uc18c\uba78\ub418\ub294 \uc77c\uc815\ud55c \uc0ac\uc774\ud074\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4. \uc774\ub807\uac8c JavaScript\uc5d0\uc11c \uc0dd\uc131 \ub41c ",(0,l.jsx)(n.strong,{children:"\ubcc0\uc218\ub098 \ud568\uc218\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ubc94\uc704\ub97c \uc2a4\ucf54\ud504(Scope)"})," \ub77c\uace0 \uce6d\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'var x = "global";\n\nfunction foo() {\n  var x = "function scope";\n  console.log(x);\n}\n\nfoo(); // ?\nconsole.log(x); // ?\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\uc704\uc640 \uac19\uc740 \uc608\uc81c\ucc98\ub7fc ",(0,l.jsx)(n.code,{children:"x"}),"\uac00 2\ubc88 \uc120\uc5b8\ub418\ub294 \uacbd\uc6b0, JavaScript\uc5d0\uc11c\ub294 \uc5b4\ub5bb\uac8c \uad6c\ubd84\ud560 \uc218 \uc788\uc744\uae4c\uc694?"]}),"\n",(0,l.jsxs)(n.p,{children:["\ubc14\ub85c ",(0,l.jsx)(n.strong,{children:"\uc2a4\ucf54\ud504(Scope)"})," \ub97c \ud1b5\ud574 ",(0,l.jsx)(n.code,{children:"foo()"})," \ud568\uc218 \ub0b4\uc5d0 \uc120\uc5b8 \ub41c ",(0,l.jsx)(n.code,{children:"x"}),"\ub294 \ub0b4\ubd80\uc5d0\uc11c\ub9cc \ucc38\uc870\ud560 \uc218 \uc788\uc73c\uba70 \ucd5c\uc0c1\ub2e8 \uc120\uc5b8 \ub41c \ubcc0\uc218 ",(0,l.jsx)(n.code,{children:"x"}),"\uc758 \uacbd\uc6b0 \uc5b4\ub514\uc5d0\ub4e0 \ucc38\uc870\ud574\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc2a4\ucf54\ud504 \uaddc\uce59\uc744 \ud1b5\ud574\uc11c JavaScript \uc0dd\uba85 \uc8fc\uae30\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uace0 ",(0,l.jsx)(n.strong,{children:"\uc804\uc5ed \uc2a4\ucf54\ud504(Global Scope)"})," \uc640 ",(0,l.jsx)(n.strong,{children:"\uc9c0\uc5ed \uc2a4\ucf54\ud504(Local Scope)"})," \ub85c \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.h3,{id:"\uc804\uc5ed-\uc2a4\ucf54\ud504global-scope\uc640-\uc9c0\uc5ed-\uc2a4\ucf54\ud504local-scope",children:"\uc804\uc5ed \uc2a4\ucf54\ud504(Global Scope)\uc640 \uc9c0\uc5ed \uc2a4\ucf54\ud504(Local Scope)"}),"\n",(0,l.jsxs)(n.p,{children:["\uc804\uc5ed\uc5d0 \ubcc0\uc218\ub97c \uc120\uc5b8\ud558\uba74 \uc774 \ubcc0\uc218\ub294 \uc5b4\ub514\uc11c\ub4e0\uc9c0 \ucc38\uc870\ud560 \uc218 \uc788\ub294 \uc804\uc5ed \uc2a4\ucf54\ud504\ub97c \uac16\ub294 \uc804\uc5ed \ubcc0\uc218\uac00 \ub429\ub2c8\ub2e4. ",(0,l.jsx)(n.code,{children:"var"})," \ud0a4\uc6cc\ub4dc\ub85c \uc120\uc5b8\ud55c \uc804\uc5ed \ubcc0\uc218\ub294\xa0",(0,l.jsx)(n.a,{href:"https://poiemaweb.com/js-built-in-object#21-%EC%A0%84%EC%97%AD-%EA%B0%9D%EC%B2%B4global-object",children:"\uc804\uc5ed \uac1d\uccb4(Global Object)"}),"\xa0",(0,l.jsx)(n.code,{children:"window"}),"\uc758 \ud504\ub85c\ud37c\ud2f0\uc785\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'var global = "minsgy";\nfunction foo() {\n  var local = "msg";\n  console.log(global);\n  console.log(local);\n}\nfoo(); // minsgy msg\n\nconsole.log(global); // minsgy\nconsole.log(local); // Uncaught ReferenceError: local is not defined\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\ubcc0\uc218 ",(0,l.jsx)(n.code,{children:"global"}),"\uc740 \ud568\uc218 \uc601\uc5ed \ubc16\uc5d0\uc11c \uc120\uc5b8\ub418\uc5b4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc \ubcc0\uc218 ",(0,l.jsx)(n.code,{children:"local"}),"\uc740 \uc2a4\ucf54\ud504\uac00 \uc885\ub8cc\ub418\uc5b4 \uc815\uc758\uac00 \uad6c\ud604\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c \uc608\uc2dc\ub97c \ud1b5\ud574 \ud568\uc218 \ub0b4\uc5d0 \uc874\uc7ac\ud558\ub294 \ub0b4\ubd80 \ud568\uc218\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'var x = "global";\nfunction foo() {\n  var x = "local";\n  console.log(x); // local\n  function bar() {\n    // \ub0b4\ubd80\ud568\uc218\n    console.log(x); // local\n  }\n  bar();\n}\n\nfoo();\nconsole.log(x); // global\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\ub0b4\ubd80 \ud568\uc218\ub294 \uc790\uc2e0\uc744 \ud3ec\ud568\ud558\uace0 \uc788\ub294 \uc678\ubd80\ud568\uc218\uc758 \ubcc0\uc218\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4\ub294 \ud2b9\uc9d5\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ub9e4\uc6b0 \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\xa0",(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures",children:"\ud074\ub85c\uc800"}),"\uc5d0\uc11c\uc640 \uac19\uc774 \ub0b4\ubd80\ud568\uc218\uac00 \ub354 \uc624\ub798 \uc0dd\uc874\ud558\ub294 \uacbd\uc6b0 \ub2e4\ub978 \uc5b8\uc5b4\uc640\ub294 \ub2e4\ub974\uac8c \uc791\ub3d9\ud558\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.p,{children:["\uacb0\uacfc\uc801\uc73c\ub85c \ud568\uc218 ",(0,l.jsx)(n.code,{children:"bar"}),"\uc5d0\uc11c \ucc38\uc870\ud558\ub294 ",(0,l.jsx)(n.code,{children:"x"}),"\ub294 \ud568\uc218 ",(0,l.jsx)(n.code,{children:"foo"}),"\uc5d0\uc11c \uc120\uc5b8 \ub41c \uc9c0\uc5ed\ubcc0\uc218\uc785\ub2c8\ub2e4. \uc774\ub294 \uc2a4\ucf54\ud504 \uccb4\uc778\uc5d0 \uc758\ud574 \ucc38\uc870 \uc21c\uc704\uac00 \uc804\uc5ed \ubcc0\uc218 ",(0,l.jsx)(n.code,{children:"x"}),"\uac00 \ub4a4\ub85c \ubc00\ub9b0 \uc0c1\ud0dc\uc774\uae30 \ub54c\ubb38\uc5d0 \uc7ac\ud560\ub2f9\ub418\uc5b4 ",(0,l.jsx)(n.code,{children:"local"})," \uac12\uc774 \uc801\uc6a9\ub418\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.p,{children:["\uadf8\ub9ac\uace0 \uc120\uc5b8 \ub41c \uc704\uce58\uc5d0 \uc758\ud574 \ub530\ub77c \uc0dd\uba85 \uc8fc\uae30\uac00 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. ",(0,l.jsx)(n.strong,{children:"\uc774\ub97c \ub809\uc2dc\uceec \uc2a4\ucf54\ud504(Lexical Scope)"})," \ub77c\uace0 \ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.h3,{id:"\ub809\uc2dc\uceec-\uc2a4\ucf54\ud504lexical-scope",children:"\ub809\uc2dc\uceec \uc2a4\ucf54\ud504(Lexical Scope)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"var x = 1;\n\nfunction foo() {\n  var x = 10;\n  bar();\n}\n\nfunction bar() {\n  console.log(x);\n}\n\nfoo(); // 1\nbar(); // 1\n"})}),"\n",(0,l.jsx)(n.p,{children:"\uc704 \ucf54\ub4dc\ub97c \ud1b5\ud574 \ub450 \uac00\uc9c0 \uacbd\uc6b0\ub97c \uc720\ucd94\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\ud568\uc218\ub97c \uc5b4\ub514\uc11c \ud638\ucd9c\ud558\uc600\ub294 \uc9c0? \ub3d9\uc801 \uc2a4\ucf54\ud504(Dynamic scope)\n\ud568\uc218\ub97c \uc5b4\ub514\uc11c \uc120\uc5b8\ud558\uc600\ub294 \uc9c0? \ub809\uc2dc\uceec \uc2a4\ucf54\ud504(Lexical Scope)"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\uc5ec\uae30\uc11c JavaScript\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \ub809\uc2dc\uceec \uc2a4\ucf54\ud504\ub97c \ub530\ub974\ubbc0\ub85c ",(0,l.jsx)(n.strong,{children:"\ud568\uc218\uac00 \uc120\uc5b8 \ub41c \uc2dc\uc810\uc5d0 \uc0c1\uc704 Scope\uac00 \uacb0\uc815"}),"\ub418\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.p,{children:["\uacb0\uacfc\uc801\uc73c\ub85c \ud568\uc218\ub97c \uc5b4\ub514\uc5d0\uc11c \ud638\ucd9c\ud558\uc600\ub294\uc9c0 \uc2a4\ucf54\ud504 \uacb0\uc815\uc5d0\ub294 \uc544\ubb34\ub7f0 \uc758\ubbf8\ub3c4 \uc8fc\uc9c0 \uc54a\uc73c\uba70 \uc608\uc81c\uc640 \uac19\uc774 \ud568\uc218 ",(0,l.jsx)(n.code,{children:"bar"}),"\ub294 \uc804\uc5ed\uc5d0 \uc120\uc5b8\ub418\uc5b4\uc11c \uc804\uc5ed \ubcc0\uc218 \uac12 ",(0,l.jsx)(n.code,{children:"x = 1"}),"\uc744 2\ubc88 \ucd9c\ub825\ud558\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.p,{children:"\uc704 \ud568\uc218\uc640 \uac19\uc774 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \ubc18\ud658\ud558\uba70 **\ud074\ub85c\uc838(Closure)**\ub97c \uc608\uc2dc\ub97c \ub4e4\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"\ud074\ub85c\uc838closure",children:"\ud074\ub85c\uc838(Closure)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"function outerFunc() {\n  var x = 10;\n  var innerFunc = function () {\n    console.log(x);\n  };\n  return innerFunc;\n}\n/**\n * \ud568\uc218 outerFunc\ub97c \ud638\ucd9c\ud558\uba74 \ub0b4\ubd80 \ud568\uc218 innerFunc\uac00 \ubc18\ud658\ub41c\ub2e4.\n * \uadf8\ub9ac\uace0 \ud568\uc218 outerFunc\uc758 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub294 \uc18c\uba78\ud55c\ub2e4.\n * */\n\nvar inner = outerFunc();\ninner(); // 10\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\uc678\ubd80 \ud568\uc218 outerFunc"}),"\ub294 ",(0,l.jsx)(n.strong,{children:"\ub0b4\ubd80 \ud568\uc218 innerFunc"}),"\ub97c \ubc18\ud658\ud558\uace0 \uc0dd\uba85\uc8fc\uae30\ub97c \uc783\uac8c \ub429\ub2c8\ub2e4. \uadf8\ub807\uc9c0\ub9cc outerFunc \uc9c0\uc5ed\ubcc0\uc218 ",(0,l.jsx)(n.code,{children:"x"}),"\ub97c \uc811\uadfc\ud560 \uc218 \uc788\ub294 \ubaa8\uc2b5\uc744 \ubcf4\uc785\ub2c8\ub2e4. \uc774\ub807\uac8c \ucc38\uc870\ub418\ub294 \uc678\ubd80\ud568\uc218(outerFunc) \ubcc0\uc218\ub97c ",(0,l.jsx)(n.strong,{children:"\uc790\uc720\ubcc0\uc218(Free variable)"})," \uc774\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.p,{children:["\uc774\ub807\uac8c \ucc38\uc870\uac00 \uac00\ub2a5\ud55c \uc774\uc720\ub294 \ub0b4\ubd80\ud568\uc218\uac00 \uc720\ud6a8\ud55c \uc0c1\ud0dc\uc5d0\uc11c \uc678\ubd80\ud568\uc218\uac00 \uc885\ub8cc\ud574 \ubc18\ud658\ub418\uc5b4\ub3c4 \uc678\ubd80 \ud568\uc218\ub0b4\uc758 \ud65c\uc131 \uac1d\uccb4(Activation object: \ubcc0\uc218, \ud568\uc218 \uc120\uc5b8 \uc815\ubcf4\ub97c \uac00\uc9c4)\ub294 ",(0,l.jsx)(n.strong,{children:"\ub0b4\ubd80 \ud568\uc218\uc5d0 \uc758\ud574 \ucc38\uc870\ub418\ub294 \ud55c \uc720\ud6a8\ud558\uba70 \uc2a4\ucf54\ud504 \uccb4\uc778\uc744 \ud1b5\ud574 \ucc38\uc870"}),"\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://user-images.githubusercontent.com/60251579/192228970-e36c0242-52d4-4cfe-93c3-f9c30698b421.png",alt:"image"})}),"\n",(0,l.jsxs)(n.p,{children:["\uc774\uc640 \uac19\uc774 ",(0,l.jsx)(n.strong,{children:"\ubc18\ud658 \ub41c \ub0b4\ubd80 \ud568\uc218\uac00 \uc790\uc2e0\uc774 \uc120\uc5b8\ub410\uc744 \ub54c\uc758 \ud658\uacbd\uc778 \uc2a4\ucf54\ud504\ub97c \uae30\uc5b5\ud558\uc5ec, \uc774\uc804 \ud658\uacbd \ubc16\uc5d0\uc11c \ud638\ucd9c\ub418\uc5b4\ub3c4 \uadf8 \ud658\uacbd\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \ud568\uc218"}),"\ub97c ",(0,l.jsx)(n.strong,{children:"\ud074\ub85c\uc838(Closure)"})," \ub77c\uace0 \ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.h2,{id:"\ud074\ub85c\uc838\ub294-\uc5b4\ub514\uc5d0-\uc0ac\uc6a9\ud558\ub098\uc694",children:"\ud074\ub85c\uc838\ub294 \uc5b4\ub514\uc5d0 \uc0ac\uc6a9\ud558\ub098\uc694?"}),"\n",(0,l.jsxs)(n.p,{children:["\ucf54\ub4dc\uc758 \ubcf5\uc7a1\uc131\uc744 \uc904\uc77c \uc218\ub3c4 \uc788\uc9c0\ub9cc \uc790\uce6b\ud558\uba74 \ucc38\uc870\ub418\ub294 \uc0c1\ud669\uc774 \ubc1c\uc0dd\ud574 ",(0,l.jsx)(n.strong,{children:"GC(Garbage Collector)"})," \uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294 \ubb38\uc81c\uac00 \ub098\ud0c0\ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc810\ub4e4\uc744 \uace0\ub824\ud558\uba74\uc11c \ud074\ub85c\uc800\ub97c \ud65c\uc6a9\ud55c \uc0ac\ub840\ub97c \ud655\uc778\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.h3,{id:"1-\uc804\uc5ed-\ubcc0\uc218-\uc904\uc774\uae30",children:"1. \uc804\uc5ed \ubcc0\uc218 \uc904\uc774\uae30"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'// \uae30\uc874\nconst likeButton = document.querySelector("button");\nlikeButton.addEventListener("click", handleClick);\n\nlet count = 0; // \uc804\uc5ed \ubcc0\uc218 \uc120\uc5b8\uc73c\ub85c \uc778\ud55c \ubb38\uc81c\ub4e4\uc774 \ub9ce\uc74c\nfunction handleClick() {\n  count++;\n  return count;\n}\n\n// \ud074\ub85c\uc838 \uc0ac\uc6a9\nconst likeButton = document.querySelector("button");\nlikeButton.addEventListener("click", handleClick());\n\nfunction handleClick() {\n  let count = 0;\n  // \ub809\uc2dc\uceec \ud658\uacbd\uc744 \ucc38\uc870\ud558\ub294 \ud568\uc218 likeButton\uc758 callback \ud568\uc218\ub97c \ud65c\uc6a9\ud558\uc5ec \uc804\uc5ed \ubcc0\uc218 \uc5c6\uc774 \uad6c\ud604\n  return function () {\n    count++;\n    return count;\n  };\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\ud074\ub85c\uc838\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc544\ub798 \ub85c\uc9c1\uacfc \uac19\uc774 \ubaa8\ub4c8\ud654\ud55c \ud568\uc218\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud558\ub294 \uc885\uc18d\uc801\uc778 \ubcc0\uc218\ub97c \uc120\uc5b8\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 ",(0,l.jsx)(n.strong,{children:"\uba54\uc18c\ub4dc(Method) \uc5ed\ud560\uc774 \uad6c\ubd84"}),"\ub418\uc5b4 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc744 \ubfd0\ub9cc \uc544\ub2c8\ub77c \uae30\ubcf8\uc801\uc778 \uc804\uc5ed \uc2a4\ucf54\ud504\uc5d0 \ub300\ud55c \ubb38\uc81c\uac00 \ud574\uacb0\ub418\uc5b4 ",(0,l.jsx)(n.strong,{children:"\uc778\ud130\ud398\uc774\uc2a4(Interface) \ubcf5\uc7a1\uc131\uc774 \ub0ae\uc544\uc9c0\uac8c \ub429\ub2c8\ub2e4."})]}),"\n",(0,l.jsx)(n.h3,{id:"2-\ud568\uc218\ud615-\ubc29\uc2dd-\ubaa8\ub4c8\ud654",children:"2. \ud568\uc218\ud615 \ubc29\uc2dd \ubaa8\ub4c8\ud654"}),"\n",(0,l.jsxs)(n.p,{children:["\ud074\ub85c\uc800\ub294 ",(0,l.jsx)(n.strong,{children:"\ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc758 \uc77c\uae09 \uac1d\uccb4(first-class) \uac1c\ub150\uc744 \uc778\uc6a9\ud558\uc5ec \uc2a4\ucf54\ud504(Scope)\uc5d0 \ubb36\uc778 \ubcc0\uc218\ub97c \ubc14\uc778\ub529\ud558\uae30 \uc704\ud55c \uc77c\uc885\uc758 \uae30\uc220"}),"\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc77c\uae09 \uac1d\uccb4 \uac1c\ub150\uc744 \ud65c\uc6a9\ud558\uc5ec \ud568\uc218\ub97c \uc800\uc7a5\ud55c \ub808\ucf54\ub4dc(Record) \uc5ed\ud560\ub85c \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'function makeSizer(size) {\n  return function () {\n    document.body.style.fontSize = size + "px";\n  };\n}\n\nvar size12 = makeSizer(12);\nvar size14 = makeSizer(14);\nvar size16 = makeSizer(16);\n'})}),"\n",(0,l.jsx)(n.p,{children:"\uc704\uc640 \uac19\uc740 \ud568\uc218\ud615 \uac1c\ub150\uc744 \ud1b5\ud574 \uc678\ubd80 \ud568\uc218\uc758 \ud30c\ub77c\ubbf8\ud130\ub97c \uac16\uace0 \ub2e4\ub978 \uc694\uc18c\uc5d0 \uc758\ud574 \ub113\uc740 \ud655\uc7a5\uc131\uc744 \uac00\uc9c8 \ubfd0\ub9cc \uc544\ub2c8\ub77c \ub0b4\ubd80\uc5d0 \ub4e4\uc5b4\uac00\ub294 \ub85c\uc9c1\uc744 \uac10\ucd9c \uc218 \uc788\ub2e4\ub294 Private\ud55c \ud2b9\uc9d5\uc744 \uac00\uc9c0\uac8c \ub429\ub2c8\ub2e4.\nJavaScript \ud0dc\uc0dd\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uba54\uc18c\ub4dc\ub97c \uad6c\ud604\ud558\uc5ec \uc81c\ud55c\uc801\uc778 \uc811\uadfc\ub9cc \ud5c8\uc6a9**\ud560 \uc218 \uc788\uac8c \ub9cc\ub4ed\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"3-react-hook",children:"3. React Hook"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'import React, { useEffect, useState, useCallback } from "react";\n\n// Timer\ub97c \ub098\ud0c0\ub0b4\ub294 \ucef4\ud3ec\ub10c\ud2b8\nconst TimerComponent = () => {\n  const [count, setCount] = useState(1);\n\n  const incrementCount = useCallback(() => {\n    setCount(count + 1);\n  }, []); // empty dependancy\n\n  useEffect(() => {\n    const timer = setTimeout(() => {\n      incrementCount();\n    }, 1000);\n\n    return () => {\n      clearTimeout(timer);\n    };\n  }, []); // empty dependancy\n\n  // \uacb0\uacfc\ub294 2\uc5d0\uc11c \uba48\ucd98\ub2e4.\n  return <div>{`Timer started: ${count}`}</div>;\n};\n'})}),"\n",(0,l.jsx)(n.p,{children:"\ud574\ub2f9 \ub85c\uc9c1\uc740 \ub9e4 \ucd08\ub9c8\ub2e4 \uac12\uc774 1\uc529 \uc99d\uac00\ud558\ub294 \ud0c0\uc774\uba38 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. \uadf8\ub807\uc9c0\ub9cc \uc758\ub3c4\ud55c\ub300\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\uace0 2\uc5d0\uc11c \ud0c0\uc774\uba38\uac00 \uba48\ucd94\uac8c \ub429\ub2c8\ub2e4. \uc758\uc874\uc131 \ubc30\uc5f4\uc5d0 \uc758\ud574, \ud55c\ubc88\uc758 \ub80c\ub354\ub9c1\ub9cc \uc77c\uc5b4\ub098\uac8c \ub418\uc5b4 \ud568\uc218\uac00 \uae30\uc5b5\ud558\ub294 \uac12\uc740 \uc5ec\uc804\ud788 1\uc774\uae30 \ub54c\ubb38\uc5d0 \ud0c0\uc774\uba38\uac00 \ubcc0\ud558\uc9c0 \uc54a\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.p,{children:["\uc989, useEffect hook \uc2e4\ud589 \uc2dc\uc810\uc5d0 incrementCount \ud568\uc218\ub294 count\uac00 1\uc778 \ud658\uacbd\uc744 \uae30\uc5b5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 count\uac00 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5b4 \ud568\uc218\uac00 \uc0c8\ub85c \ubcc0\uacbd\ub418\uc5b4\ub3c4 useEffect\uc5d0\uc11c \ucc98\uc74c 1\uc744 \uae30\uc5b5\ud558\ub294 \ud568\uc218\ub97c \uc2e4\ud589\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 count \uac12\uc774 \uc99d\uac00\ud558\uc9c0 \uc54a\uac8c \ub418\uac70\ub098 ",(0,l.jsx)(n.strong,{children:"useEffect\uac00 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc544 Timer \uac12\uc774 \ubcc0\ud654\uac00 \uc5c6\uac8c \ub418\ub294 \uacb0\uacfc"}),"\ub97c \ubcf4\uc785\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.p,{children:"useEffect \ubfd0\ub9cc \uc544\ub2c8\ub77c useCallback\uc5d0\uc11c\ub3c4 \ud074\ub85c\uc800 \uac1c\ub150\uc744 \ud65c\uc6a9\ud558\uc5ec \ub809\uc2dc\uceec \ud658\uacbd\uc744 \uad00\ub9ac\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 Hook\uc744 \uc0ac\uc6a9 \ud560 \uc2dc \uc758\uc874\uc131 \ubc30\uc5f4 \uad00\ub9ac\ub97c \ud1b5\ud574 \ub809\uc2dc\uceec \ud658\uacbd\uc744 \ubcc0\ud654\uc2dc\ud0ac \uc218 \uc788\ub2e4\ub294 \uc810\uc5d0 \uc788\uc5b4\uc11c \uc758\ub3c4\ud55c \uacb0\uacfc\ub97c \ub0b4\ub3c4\ub85d \uc8fc\uc758\ud574\uc57c \ud569\ub2c8\ub2e4. useState\uc758 \uc5c5\ub370\uc774\ud2b8 \ubc29\uc2dd\ub3c4 \ud074\ub85c\uc800\ub97c \ud65c\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"bonus-usestate\uc758-\uc5c5\ub370\uc774\ud2b8-\uad6c\ud604-\ubc29\uc2dd",children:"bonus. useState\uc758 \uc5c5\ub370\uc774\ud2b8 \uad6c\ud604 \ubc29\uc2dd"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:"let _value;\n\nexport useState(initialValue){\n  if (_value === 'undefined') {\n    _value = initialValue;\n  }\n  const setValue = newValue => {\n    _value = newValue;\n  }\n\n  return [_value, setValue];\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["useState \ubc16\uc5d0 \uc120\uc5b8\ub41c \ubcc0\uc218\xa0",(0,l.jsx)(n.code,{children:"_value"}),"\uac00 \uc788\uc2b5\ub2c8\ub2e4. useState\uc5d0\uc11c\ub294 \ucd08\uae30\uac12(initialValue)\ub97c \ubc1b\uc544 \ub9cc\uc57d \uae30\uc874\xa0",(0,l.jsx)(n.code,{children:"_value"}),"\xa0\uac12\uc774 \uc5c6\uc73c\uba74 \ucd08\uae30\uac12\uc73c\ub85c \uc138\ud305\ud558\uac8c \ub429\ub2c8\ub2e4. setValue \ud568\uc218\ub294 \ubc1b\uc544\uc624\ub294 \uac12\uc73c\ub85c \uc804\uc5ed\xa0",(0,l.jsx)(n.code,{children:"_value"}),"\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uac8c \ub418\uba74\uc11c \xa0",(0,l.jsx)(n.code,{children:"_value"}),"\uc640\xa0",(0,l.jsx)(n.code,{children:"setValue"}),"\xa0\ud568\uc218\ub97c \ubc30\uc5f4 \ud615\ud0dc\ub85c \ubc18\ud658\ud55c\ub2e4. useState\uac00 \uc5b4\ub514\uc5d0\uc11c \uc2e4\ud589\ub418\uc5c8\uac74, \ud074\ub85c\uc800\ub97c \ud1b5\ud574\xa0",(0,l.jsx)(n.code,{children:"_value"}),"\xa0\uac12\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \uad6c\uc870\ub97c \uac00\uc9c0\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.p,{children:["\uacb0\uacfc\uc801\uc73c\ub85c useState\ub97c \ud1b5\ud574 \uc0dd\uc131\ud55c \uc0c1\ud0dc\ub97c \uc811\uadfc\ud558\uace0 \uc720\uc9c0\ud558\uae30 \uc704\ud574\uc11c useState \ubc14\uae65\ucabd\uc5d0 state\ub97c \uc800\uc7a5\ud558\uc5ec \uc120\uc5b8 \ub41c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ubcc4\ud560 \uc218 \uc788\ub294 key\ub85c \uc811\uadfc\ud558\uac8c \ub418\uace0 \ubc30\uc5f4 \ud615\uc2dd\uc73c\ub85c \uc800\uc7a5\ub418\uac8c \ub429\ub2c8\ub2e4. useState \uc548\uc5d0\uc11c \uc120\uc5b8\ub418\ub294 \uc0c1\ud0dc\ub4e4\uc740 ",(0,l.jsx)(n.code,{children:"_value"})," \ubc30\uc5f4\uc5d0 \uc21c\uc11c\ub300\ub85c \uc800\uc7a5\ub418\ub294 \uc6d0\ub9ac\uc785\ub2c8\ub2e4. (\uc608\uc2dc\ub294 \uc784\uc758 \uac12\uc774\uae34 \ud558\ub2e4..)"]}),"\n",(0,l.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://yeoulcoding.tistory.com/149#recentEntries",children:"useState\uc640 \ud074\ub85c\uc800"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures",children:"\ud074\ub85c\uc800 MDN"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"https://poiemaweb.com/js-closure",children:"\ud074\ub85c\uc800\uc5d0 \ub300\ud558\uc5ec"})]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},1151:(e,n,c)=>{c.d(n,{Z:()=>t,a:()=>r});var l=c(7294);const o={},s=l.createContext(o);function r(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);