"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4172],{3104:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=o(5893),t=o(1151);const s={title:"Prototype\uc5d0 \ub300\ud558\uc5ec",authors:["minsgy"],tags:["JavaScript"],keywords:["JavaScript","Prototype","\ud504\ub85c\ud1a0\ud0c0\uc785","\uc0c1\uc18d","\uac1d\uccb4\uc9c0\ud5a5"],date:new Date("2022-05-12T00:00:00.000Z")},c=void 0,i={permalink:"/blog/javascript-prototype",editUrl:"https://github.com/minsgy/minsgy.github.io/edit/main/blog/javascript-prototype.md",source:"@site/blog/javascript-prototype.md",title:"Prototype\uc5d0 \ub300\ud558\uc5ec",description:"\uc11c\ub860",date:"2022-05-12T00:00:00.000Z",formattedDate:"2022\ub144 5\uc6d4 12\uc77c",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"}],readingTime:13.31,hasTruncateMarker:!1,authors:[{name:"\ucd5c\ubbfc\uc11d",title:"\uc3d8\uce74(SOCAR)\uc5d0\uc11c \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",url:"https://github.com/minsgy",imageURL:"https://github.com/minsgy.png",key:"minsgy"}],frontMatter:{title:"Prototype\uc5d0 \ub300\ud558\uc5ec",authors:["minsgy"],tags:["JavaScript"],keywords:["JavaScript","Prototype","\ud504\ub85c\ud1a0\ud0c0\uc785","\uc0c1\uc18d","\uac1d\uccb4\uc9c0\ud5a5"],date:"2022-05-12T00:00:00.000Z"},unlisted:!1,prevItem:{title:"JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec",permalink:"/blog/javascript-runtime"},nextItem:{title:"JavaScript \uba54\ubaa8\ub9ac \uad00\ub9ac\ud558\uae30",permalink:"/blog/javascript-memory"}},l={authorsImageUrls:[void 0]},p=[{value:"\uc11c\ub860",id:"\uc11c\ub860",level:2},{value:"Property Attribute",id:"property-attribute",level:2},{value:"\ub0b4\ubd80 \uc2ac\ub86f(\ud504\ub85c\ud37c\ud2f0 \uc5b4\ud2b8\ub9ac\ubdf0\ud2b8) \ub2e4\ub8e8\uae30",id:"\ub0b4\ubd80-\uc2ac\ub86f\ud504\ub85c\ud37c\ud2f0-\uc5b4\ud2b8\ub9ac\ubdf0\ud2b8-\ub2e4\ub8e8\uae30",level:3},{value:"\ud504\ub85c\ud1a0\ud0c0\uc785 Prototype",id:"\ud504\ub85c\ud1a0\ud0c0\uc785-prototype",level:2},{value:"prototype chain",id:"prototype-chain",level:3},{value:"prototype property",id:"prototype-property",level:3},{value:"constructor property",id:"constructor-property",level:3},{value:"\ud568\uc218 \ub9ac\ud130\ub7f4 \ubc29\uc2dd\uc744 \ud1b5\ud55c \uc120\uc5b8",id:"\ud568\uc218-\ub9ac\ud130\ub7f4-\ubc29\uc2dd\uc744-\ud1b5\ud55c-\uc120\uc5b8",level:3},{value:"\ud504\ub85c\ud1a0\ud0c0\uc785 \uac1d\uccb4\uc758 \ubcc0\uacbd",id:"\ud504\ub85c\ud1a0\ud0c0\uc785-\uac1d\uccb4\uc758-\ubcc0\uacbd",level:3},{value:"\uc774\ub97c \ud65c\uc6a9\ud55c Prototype \ub514\uc790\uc778 \ud328\ud134",id:"\uc774\ub97c-\ud65c\uc6a9\ud55c-prototype-\ub514\uc790\uc778-\ud328\ud134",level:3},{value:"\uc608\uc81c",id:"\uc608\uc81c",level:4},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:4},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:4},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\uc11c\ub860",children:"\uc11c\ub860"}),"\n",(0,r.jsx)(n.p,{children:"JavaScript\uc5d0\uc11c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uc0c1\uc18d \uac1c\ub150\uc778 \uac1d\uccb4\uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uad6c\ud604\ud558\uae30 \uc704\ud574 Prototype\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4. Prototype\uc744 \ud1b5\ud574\uc11c \ub113\uc740 \ud655\uc7a5\uc131\uc744 \uac00\uc9c0\ub294 \uac1d\uccb4\uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ubc88 \ud3ec\uc2a4\ud305\uc5d0\uc11c\ub294 Prototype\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"property-attribute",children:"Property Attribute"}),"\n",(0,r.jsx)(n.p,{children:"JavaScript\uc5d0\uc11c\ub294 \uac1d\uccb4\uc758 \ud504\ub85c\ud37c\ud2f0\uc5d0 \ub300\ud55c \uc18d\uc131\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc544\ub798\uc640 \uac19\uc740 \ub0b4\ubd80 \uc2ac\ub86f\uacfc \ub0b4\ubd80 \uba54\uc18c\ub4dc\ub97c \uac00\uc9c0\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[[Configurable]]"}),": \ud504\ub85c\ud37c\ud2f0\uc758 \uc0ad\uc81c, \ud504\ub85c\ud37c\ud2f0 \uc5b4\ud2b8\ub9ac\ubdf0\ud2b8\uc758 \ubcc0\uacbd\uc744 \ud5c8\uc6a9\ud560\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[[Enumerable]]"}),": \ud504\ub85c\ud37c\ud2f0\uac00 \uc5f4\uac70 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[[Writable]]"}),": \ud504\ub85c\ud37c\ud2f0\uc758 \uac12\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uac12\uc774 false\uc778 \uacbd\uc6b0, \uc77d\uae30 \uc804\uc6a9 \ud504\ub85c\ud37c\ud2f0\uac00 \ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[[Value]]"}),": \ud504\ub85c\ud37c\ud2f0\uc758 \uac12\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[[Prototype]]"}),": \ud504\ub85c\ud1a0\ud0c0\uc785 \uac1d\uccb4\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[[Extensible]]"}),": \ud504\ub85c\ud1a0\ud0c0\uc785 \uac1d\uccb4\uc5d0 \ud504\ub85c\ud37c\ud2f0\ub97c \ucd94\uac00\ud560 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[[Class]]"}),": \ud504\ub85c\ud37c\ud2f0\uc758 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[[PrimitiveValue]]"}),": \ud504\ub85c\ud37c\ud2f0\uc758 \uc6d0\uc2dc \uac12\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[[Call]]"}),": \ud504\ub85c\ud37c\ud2f0\uac00 \ud568\uc218\uc778 \uacbd\uc6b0 \ud638\ucd9c\ud560 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[[Construct]]"}),": \ud504\ub85c\ud37c\ud2f0\uac00 \uc0dd\uc131\uc790 \ud568\uc218\uc778 \uacbd\uc6b0 \ud638\ucd9c\ud560 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[[HasInstance]]"}),": \ud504\ub85c\ud37c\ud2f0\uac00 \uc0dd\uc131\uc790 \ud568\uc218\uc778 \uacbd\uc6b0 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"\ub0b4\ubd80-\uc2ac\ub86f\ud504\ub85c\ud37c\ud2f0-\uc5b4\ud2b8\ub9ac\ubdf0\ud2b8-\ub2e4\ub8e8\uae30",children:"\ub0b4\ubd80 \uc2ac\ub86f(\ud504\ub85c\ud37c\ud2f0 \uc5b4\ud2b8\ub9ac\ubdf0\ud2b8) \ub2e4\ub8e8\uae30"}),"\n",(0,r.jsx)(n.p,{children:"\uae30\ubcf8\uc801\uc73c\ub85c \ub0b4\ubd80 \uc2ac\ub86f\uc740 JavaScript \uc5d4\uc9c4 \ub0b4\ubd80\uc5d0 \uc874\uc7ac\ud558\uae30 \ub54c\ubb38\uc5d0 \uc811\uadfc\ud558\uac70\ub098 \ud638\ucd9c\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub807\uc9c0\ub9cc \uc77c\ubd80 \ub0b4\ubd80 \uc2ac\ub86f\uacfc \ub0b4\ubd80 \uba54\uc18c\ub4dc\uc5d0 \ud55c\ud574\uc11c \ucc38\uc870 \ubc29\ubc95\uc73c\ub85c \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const object = {}\n\nobject.[[Prototype]] // "error" \ub0b4\ubd80 \uc2ac\ub86f\uc740 JS \uc5d4\uc9c4 \ub0b4\ubd80 \ub85c\uc9c1\uc73c\ub85c \uc811\uadfc \ubd88\uac00\nobject.__proto__ // Object.prototype \ucc38\uc870\ud560 \uc218 \uc788\ub294 \ub0b4\ubd80 \uba54\uc18c\ub4dc \uc81c\uacf5\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\uc704\uc640 \uac19\uc740 \ubc29\ubc95 \uc678\uc5d0\ub3c4 JavaScript \uc5d4\uc9c4 \ud2b9\uc9d5\uc73c\ub85c ",(0,r.jsx)(n.strong,{children:"\ud504\ub85c\ud37c\ud2f0\uac00 \uc0dd\uc131 \ub420 \ub54c \uc774\ub7ec\ud55c \ud504\ub85c\ud37c\ud2f0\ub97c \uc0c1\ud0dc \uad00\ub9ac\ud560 \uc218 \uc788\ub294 \ud504\ub85c\ud37c\ud2f0 \uc5b4\ud2b8\ub9ac\ubdf0\ud2b8\uac00 \uae30\ubcf8 \uac12\uc73c\ub85c \uc790\ub3d9 \uc815\uc758"}),"\ub418\uac8c \ub429\ub2c8\ub2e4. ",(0,r.jsx)(n.code,{children:"value"}),", ",(0,r.jsx)(n.code,{children:"writable"}),", ",(0,r.jsx)(n.code,{children:"enumerable"}),", ",(0,r.jsx)(n.code,{children:"configurable"}),"\uc640 \uac19\uc740 \uc0c1\ud0dc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \ud574\ub2f9\ub418\ub294 \ub0b4\ubd80 \uc2ac\ub86f\uc774 \uc0dd\uc131\ub418\uac8c \ub41c\ub2e4\ub294 \ub73b\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["\uc774\ub7ec\ud55c \ud504\ub85c\ud37c\ud2f0 \uc5b4\ud2b8\ub9ac\ubdf0\ud2b8 \uac12 \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\ub294 \uba54\uc18c\ub4dc\ub294 ",(0,r.jsx)(n.code,{children:"getOwnPropertyDescript"})," \uac00 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const minsgy = {\n  age: 24,\n};\nconsole.log(Object.getOwnPropertyDescriptor(minsgy, "age"));\n// { value: 24, writable: true, emumerable: true, configurable: true }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\uc774\uc640 \uac19\uc774 \ub0b4\ubd80 \uc2ac\ub86f\uc5d0\uc11c \uc874\uc7ac\ud558\ub294 ",(0,r.jsx)(n.code,{children:"[[Prototype]]"}),"\uc744 \ud1b5\ud574 JavaScript \ub3d9\uc791 \uc6d0\ub9ac\ub97c \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h2,{id:"\ud504\ub85c\ud1a0\ud0c0\uc785-prototype",children:"\ud504\ub85c\ud1a0\ud0c0\uc785 Prototype"}),"\n",(0,r.jsxs)(n.p,{children:["JavaScript\uc5d0\uc11c\ub294 \ud074\ub798\uc2a4 \uae30\ubc18\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \ub2e4\ub978 \uc5b8\uc5b4(Java, C++)\uc640 \ub2ec\ub9ac ",(0,r.jsx)(n.strong,{children:"\ud504\ub85c\ud1a0\ud0c0\uc785 \uae30\ubc18\uc758 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4"}),"\uc785\ub2c8\ub2e4. \ud074\ub798\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uccb4 \uc9c0\ud5a5\uc758 \uc0c1\uc18d \uac1c\ub150\uc744 \ud504\ub85c\ud1a0\ud0c0\uc785\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"prototype-chain",children:"prototype chain"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const student = {\n  name: "Lee",\n  score: 90,\n};\n\nconsole.log(student.hasOwnProperty("name")); // true\nconsole.log(student.__proto__ === Object.prototype);\nconsole.dir(student);\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/60251579/193508196-c5b6b2fa-c4e1-46ab-a37f-8781e00731cd.png",alt:"image"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"student"})," \uac1d\uccb4\uc758 \uacbd\uc6b0 ",(0,r.jsx)(n.code,{children:"hasOwnProperty"})," \ud504\ub85c\ud37c\ud2f0\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub807\uc9c0\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc774\uc720\ub294 ",(0,r.jsx)(n.code,{children:"__proto__"})," \ud504\ub85c\ud37c\ud2f0\uc5d0 \uc758\ud574\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["student \uac1d\uccb4\ub294 ",(0,r.jsx)(n.code,{children:"__proto__"})," \ud504\ub85c\ud37c\ud2f0\ub85c \ubd80\ubaa8 \uac1d\uccb4(prototype \uac1d\uccb4)\uc778 ",(0,r.jsx)(n.code,{children:"Object.prototype"}),"\ub97c \uac00\ub9ac\ud0a4\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ud074\ub798\uc2a4 \uac1d\uccb4 \uc9c0\ud5a5\uc758 \uc0c1\uc18d\uc744 \ud65c\uc6a9\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["\uac19\uc740 \uc774\uc720\ub85c ",(0,r.jsx)(n.code,{children:"Array.prototype"}),"\uc744 \uc0c1\uc18d\ubc1b\ub294 \ud568\uc218\ub098 \uac1d\uccb4\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc18c\ub4dc\ub97c \uc0c1\uc18d\ubc1b\uc544 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"\uc774\ub7ec\ud55c \uac1c\ub150\uc744 prototype chain\uc774\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/60251579/193508729-1439f7d6-e466-450a-83d8-2c57f144b5fb.png",alt:"image"})}),"\n",(0,r.jsxs)(n.p,{children:["\uc774\ucc98\ub7fc \ubaa8\ub4e0 \uac1d\uccb4\ub294 \ubcf8\uc778\uc758 \ud504\ub85c\ud1a0\ud0c0\uc785 \uac1d\uccb4\ub97c \uac00\ub9ac\ud0a4\ub294 ",(0,r.jsx)(n.code,{children:"[[Prototype]]"})," \ub0b4\ubd80 \uc2ac\ub86f\uc744 \uac16\uc73c\uba74\uc11c \uc0c1\uc18d\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ud568\uc218 \uac1d\uccb4\ub9cc\uc758 ",(0,r.jsx)(n.code,{children:"prototype"})," \ud504\ub85c\ud37c\ud2f0\uac00 \ub530\ub85c \uc874\uc7ac\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"prototype-property",children:"prototype property"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function Person(name) {\n  this.name = name;\n}\n\nconst foo = new Person("Lee");\n\nconsole.dir(Person); // prototype \ud504\ub85c\ud37c\ud2f0\uac00 \uc788\ub2e4.\nconsole.dir(foo); // prototype \ud504\ub85c\ud37c\ud2f0\uac00 \uc5c6\ub2e4.\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"prototype"})," \ud504\ub85c\ud37c\ud2f0\ub294 \ud568\uc218 \uac1d\uccb4\ub9cc \uac00\uc9c0\uace0 \uc788\uc73c\uba70, \ud568\uc218 \uac1d\uccb4\uac00 \uc0dd\uc131\uc790\ub85c \uc0ac\uc6a9\ub420 \ub54c \uc774 \ud568\uc218\ub97c \ud1b5\ud574 \uc0dd\uc131 \ub420 ",(0,r.jsx)(n.strong,{children:"\uac1d\uccb4\uc758 \ubd80\ubaa8 \uc5ed\ud560\uc744 \ud558\ub294 \uac1d\uccb4"}),"\ub97c \uac00\ub9ac\ud0a4\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"constructor-property",children:"constructor property"}),"\n",(0,r.jsx)(n.p,{children:"\ud504\ub85c\ud1a0\ud0c0\uc785 \uac1d\uccb4\ub294 constructor \ud504\ub85c\ud37c\ud2f0\ub97c \uac16\uac8c\ub429\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc790\uc2e0\uc744 \uc0dd\uc131\ud55c \uac1d\uccb4\ub97c \uac00\ub9ac\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function Person(name) {\n  this.name = name;\n}\n\nconst foo = new Person("Lee");\n\n// Person() \uc0dd\uc131\uc790 \ud568\uc218\uc5d0 \uc758\ud574 \uc0dd\uc131\ub41c \uac1d\uccb4\ub97c \uc0dd\uc131\ud55c \uac1d\uccb4\ub294 Person() \uc0dd\uc131\uc790 \ud568\uc218\uc774\ub2e4.\nconsole.log(Person.prototype.constructor === Person);\n\n// foo \uac1d\uccb4\ub97c \uc0dd\uc131\ud55c \uac1d\uccb4\ub294 Person() \uc0dd\uc131\uc790 \ud568\uc218\uc774\ub2e4.\nconsole.log(foo.constructor === Person);\n\n// Person() \uc0dd\uc131\uc790 \ud568\uc218\ub97c \uc0dd\uc131\ud55c \uac1d\uccb4\ub294 Function() \uc0dd\uc131\uc790 \ud568\uc218\uc774\ub2e4.\nconsole.log(Person.constructor === Function);\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Class"})," \uc758 \uac1c\ub150\uc774 \ub418\ub294 \uac1d\uccb4\ub97c \uac00\ub9ac\ud0a4\uac8c \ub429\ub2c8\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4 \ud45c\ud604\ud558\uc790\uba74 ",(0,r.jsx)(n.code,{children:"\ubd95\uc5b4\ube75 \uc0dd\uc131 \ub41c \uc778\uc2a4\ud134\uc2a4"}),"\ub77c\uba74 ",(0,r.jsx)(n.strong,{children:"\ubd95\uc5b4\ube75\uc744 \ub9cc\ub4e0 \ud2c0"}),"\uc744 \uac00\ub9ac\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"\ud568\uc218-\ub9ac\ud130\ub7f4-\ubc29\uc2dd\uc744-\ud1b5\ud55c-\uc120\uc5b8",children:"\ud568\uc218 \ub9ac\ud130\ub7f4 \ubc29\uc2dd\uc744 \ud1b5\ud55c \uc120\uc5b8"}),"\n",(0,r.jsxs)(n.p,{children:["\ud568\uc218\ub97c \uc815\uc758\ud558\ub294 \ubc29\ubc95\uc740 3\uac00\uc9c0\ub85c ",(0,r.jsx)(n.strong,{children:"\ud568\uc218 \uc120\uc5b8\uc2dd, \ud568\uc218 \ud45c\ud604\uc2dd, new \uc5f0\uc0b0\uc790\ub97c \ud1b5\ud55c \uc0dd\uc131\uc790 \ud568\uc218"}),"\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// \ud568\uc218 \ud45c\ud604\uc2dd (\ud568\uc218 \ub9ac\ud130\ub7f4 \ubc29\uc2dd)\nconst square = function (number) {\n  return number * number;\n};\n\n// \ud568\uc218 \uc120\uc5b8\uc2dd (\uae30\uba85 \ud568\uc218 \ud45c\ud604\uc2dd\uc73c\ub85c \ubcc0\ud658 + \ud568\uc218 \ub9ac\ud130\ub7f4 \ubc29\uc2dd)\nconst square2 = function square(number) {\n  return number * number;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\ub450 \uac00\uc9c0 \ubc29\ubc95 \ub2e4 \ud568\uc218 \ub9ac\ud130\ub7f4 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\uace0 \uc774\ub7ec\ud55c \ubc29\uc2dd\uc740 \uc0dd\uc131\uc790 \ud568\uc218(Function)\ub85c \uc0dd\uc131\ud558\ub294 \uac83\uc744 \ub2e8\uc21c\ud654\ud55c\uac70\ub85c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, 3\uac00\uc9c0 \ubc29\ubc95 \ub2e4 ",(0,r.jsx)(n.strong,{children:"Function() \uc0dd\uc131\uc790 \ud568\uc218\ub97c \ud1b5\ud574 \ud568\uc218 \uac1d\uccb4\ub97c \uc0dd\uc131"}),"\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"new \uc5f0\uc0b0\uc790\ub97c \ud1b5\ud574 \uc0dd\uc131 \ub41c \ud568\uc218\ub97c \uc0b4\ud3b4\ubcf4\uba74 \uc774\uc640 \uac19\uc774 \ub098\ud0c0\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function Person(name, gender) {\n  // \ud568\uc218\uc774\uae30 \ub54c\ubb38\uc5d0 prototype\uc744 \uac00\uc9c0\uace0\uc788\uc74c.\n  this.name = name;\n  this.gender = gender;\n  this.sayHello = function () {\n    console.log("Hi! my name is " + this.name);\n  };\n}\n\nconst foo = new Person("Lee", "male"); // \ud568\uc218\uac00 \uc544\ub2c8\uae30\ub54c\ubb38\uc5d0 \ub0b4\ubd80 \uc2ac\ub86f\ub9cc\n\nconsole.dir(Person);\nconsole.dir(foo);\n\nconsole.log(foo.__proto__ === Person.prototype); // \u2460 true\nconsole.log(Person.prototype.__proto__ === Object.prototype); // \u2461 true\nconsole.log(Person.prototype.constructor === Person); // \u2462 true\nconsole.log(Person.__proto__ === Function.prototype); // \u2463 true\nconsole.log(Function.prototype.__proto__ === Object.prototype); // \u2464 true\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/60251579/193511804-5d52915f-e3c7-4379-8ef7-26c3008a1734.png",alt:"image"}),"\n(\ucc38\uace0. poieweb - prototype)"]}),"\n",(0,r.jsxs)(n.p,{children:["\uc704\uc640 \uac19\uc774 foo\uc758 \uacbd\uc6b0 \ud568\uc218 \uac1d\uccb4\uac00 \uc544\ub2c8\uae30\ub54c\ubb38\uc5d0 ",(0,r.jsx)(n.code,{children:"[[Prototype]]"})," \ub9cc \uc874\uc7ac\ud558\uac8c \ub418\uace0, Person \ud568\uc218\uc758 \uacbd\uc6b0 \ud568\uc218 \uac1d\uccb4\uc774\uae30 \ub54c\ubb38\uc5d0 ",(0,r.jsx)(n.code,{children:"prototype"}),"\uc774 \uc874\uc7ac\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc5b4\ub5a4 \ubc29\uc2dd\uc73c\ub85c \ud568\uc218\ub97c \uc120\uc5b8\ud574\ub3c4 ",(0,r.jsx)(n.code,{children:"Object.prototype"})," \uac1d\uccb4\ub97c \uc0c1\uc18d\ubc1b\uc544 \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"\ud504\ub85c\ud1a0\ud0c0\uc785-\uac1d\uccb4\uc758-\ubcc0\uacbd",children:"\ud504\ub85c\ud1a0\ud0c0\uc785 \uac1d\uccb4\uc758 \ubcc0\uacbd"}),"\n",(0,r.jsxs)(n.p,{children:["\ud504\ub85c\ud1a0\ud0c0\uc785\uc758 \ud2b9\uc9d5\uc73c\ub85c \uac1d\uccb4\ub97c \uc0dd\uc131\ud560 \ub54c \ud504\ub85c\ud1a0\ud0c0\uc785\uc740 \uacb0\uc815\ub418\uac8c \ub429\ub2c8\ub2e4. \uacb0\uc815\ub41c \ud504\ub85c\ud1a0\ud0c0\uc785\uc758 \uac1d\uccb4\ub294 \ub2e4\ub978 \uc784\uc758 \uac1d\uccb4\ub85c \ubcc0\uacbd\ud560 \uc218 \uc788\ub294\ub370 \uc774\uac83\uc740 ",(0,r.jsx)(n.strong,{children:"\ubd80\ubaa8 \uac1d\uccb4\uc778 \ud504\ub85c\ud1a0\ud0c0\uc785\uc744 \ub3d9\uc801\uc73c\ub85c \ubcc0\uacbd\ud560 \uc218 \uc788\ub294 \uac83\uc744 \uc758\ubbf8"}),"\ud558\uac8c \ub429\ub2c8\ub2e4. \uc989, \uac1d\uccb4\uc758 \uc0c1\uc18d\uc744 \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["\uc8fc\uc758 \ud560 \uc810\uc73c\ub85c\ub294 \ud504\ub85c\ud1a0\ud0c0\uc785 \uac1d\uccb4\ub97c \ubcc0\uacbd\ud558\uac8c \ub410\uc744 \uc2dc \uac1d\uccb4 \ubcc0\uacbd \uc2dc\uc810\uc5d0 \ub530\ub978 ",(0,r.jsx)(n.code,{children:"[[Prototype]]"})," \ubc14\uc778\ub529 \uc2dc\uc810\uc774 \ub2ec\ub77c\uc9c0\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function Person(name) {\n  this.name = name;\n}\n\nvar foo = new Person("Lee");\n\n// \ud504\ub85c\ud1a0\ud0c0\uc785 \uac1d\uccb4\uc758 \ubcc0\uacbd\nPerson.prototype = { gender: "male" };\n\nvar bar = new Person("Kim");\n\nconsole.log(foo.gender); // undefined\nconsole.log(bar.gender); // \'male\'\n\nconsole.log(foo.constructor); // \u2460 Person(name)\nconsole.log(bar.constructor); // \u2461 Object()\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/60251579/193512830-7aa13027-6eda-4a5a-8d19-48aed92e22f6.png",alt:"image"}),"\n(\ucc38\uace0. poieweb - prototype)"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"constructor \ud504\ub85c\ud37c\ud2f0\ub294 Person() \uc0dd\uc131\uc790 \ud568\uc218\ub97c \uac00\ub9ac\ud0a4\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.li,{children:["\ud504\ub85c\ud1a0\ud0c0\uc785 \uac1d\uccb4 \ubcc0\uacbd \uc774\ud6c4\uc5d0\ub294 Person() \uc0dd\uc131\uc790 \ud568\uc218\uc758 Prototype \ud504\ub85c\ud37c\ud2f0\uac00 \uac00\ub9ac\ud0a4\ub294 \ud504\ub85c\ud1a0\ud0c0\uc785 \uac1d\uccb4\ub97c \uc77c\ubc18 \uac1d\uccb4\ub85c \ubcc0\uacbd\ud558\uac8c \ub418\uba74\uc11c ",(0,r.jsx)(n.code,{children:"prototype.constructor"})," \ud504\ub85c\ud37c\ud2f0\uac00 \uc0ac\ub77c\uc9c0\uac8c \ub429\ub2c8\ub2e4. \uacb0\uad6d",(0,r.jsx)(n.code,{children:" bar.constructor"})," \uac12\uc740 ",(0,r.jsx)(n.code,{children:"Object.prototype.constructor"}),"\uc778 Object() \uc0dd\uc131\uc790 \ud568\uc218\uac00 \ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Person.prototype"}),"\uc740 ",(0,r.jsx)(n.code,{children:"Person"})," \uc0dd\uc131\uc790 \ud568\uc218\ub97c \uac00\ub9ac\ud0a4\uc9c0 \uc54a\uace0 Object.prototype\uc744 \uac00\ub9ac\ud0a4\uac8c \ub418\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uac8c \ub429\ub2c8\ub2e4. \uc758\ub3c4\ud558\uc9c0 \uc54a\uc740 \ud504\ub85c\ud1a0\ud0c0\uc785 \uccb4\uc778\uc774 \uc774\ub8e8\uc5b4\uc838 \uc0c1\uc18d\ud574 ",(0,r.jsx)(n.strong,{children:"\uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uba54\uc18c\ub4dc\uc5d0 \ub300\ud55c \uc624\ub958\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4\ub294 \uc810"}),"\uc744 \uace0\ub824\ud574\uc57c\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"\ubcc0\uacbd\ub418\ub294 \uc2dc\uc810\uc5d0 \ub530\ub77c \ubc14\uc778\ub529\ub418\ub294\ub370 \uc774\ub97c \ud1b5\ud574 \ub9cc\ub4e4 \uc218 \uc788\ub294 \ucf54\ub4dc \ub514\uc790\uc778 \ud328\ud134\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"\uc774\ub97c-\ud65c\uc6a9\ud55c-prototype-\ub514\uc790\uc778-\ud328\ud134",children:"\uc774\ub97c \ud65c\uc6a9\ud55c Prototype \ub514\uc790\uc778 \ud328\ud134"}),"\n",(0,r.jsxs)(n.p,{children:["\ud504\ub85c\ud1a0\ud0c0\uc785\uc758 \ud2b9\uc9d5\uc778 \uc6d0\ud615\uc774 \ub418\ub294 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0ac\uc6a9\ud574 \uc0c8\ub86d\uac8c \uc0dd\uc131 \ud560 \uac1d\uccb4\uc758 \uc885\ub958\ub97c \uba85\uc2dc\ud574\uc11c ",(0,r.jsx)(n.strong,{children:"\uc0c8\ub85c\uc6b4 \uac1d\uccb4\uac00 \uc0dd\uc131 \ub420 \uc2dc\uc810\uc5d0 \uc778\uc2a4\ud134\uc2a4 \ud0c0\uc785\uc744 \uacb0\uc815\ud558\ub3c4\ub85d \ud558\ub294 \ub514\uc790\uc778 \ud328\ud134"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/60251579/193514052-5afd2bc2-640b-46d8-906f-15971e7f5517.png",alt:"image"}),"\n(\ucc38\uace0. poieweb - prototype)"]}),"\n",(0,r.jsxs)(n.p,{children:["\uc774\ub807\uac8c \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 Prototype \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub530\ub974\ub294 \ubaa8\ub4e0 \uac1d\uccb4\ub97c \ubcf5\uc0ac\ud574\uc11c \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.jsx)(n.strong,{children:"\uad6c\ud604 \ud074\ub798\uc2a4\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uace0, \uc368\ub4dc \ud30c\ud2f0\uc5d0 \uc885\uc18d\ub418\uc9c0 \uc54a\ub294 \uacbd\uc6b0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]}),"\n",(0,r.jsx)(n.h4,{id:"\uc608\uc81c",children:"\uc608\uc81c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"\nconst Component = function (x, y, c) {\n   getPosX()\n   getPosY()\n   getColor()\n   getRadius()\n   ... // \uc88c\ud45c \uacc4\uc0b0 \ub4f1\n}\n\n// Component \uac1d\uccb4 \uc0c1\uc18d\ud558\uae30\nconst Circle = function (x, y, c) {\n\tComponent.call(this, x, y, c)\n}\n\nCircle.prototype = Object.create(Component.prototype)\nCircle.prototype.constructor = Circle\n\n\n// \ucd94\uac00\ub85c \ud544\uc694\ud55c \ubcc0\uc218 \ubc0f \ud568\uc218\ub97c \uc120\uc5b8\nCircle.prototype.radius = 0;\nCircle.prototype.getRadius = function(){...}\nCircle.prototype.setRadius = function(r){...}\n\n\n// ---- main ---\n\nconst circle = new Circle()\n\ncircle.getPosX();\ncircle.getPosY();\ncircle.getColor();\ncircle.getRadius();\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\uc7a5\uc810",children:"\uc7a5\uc810"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\uad6c\ud604 \ud074\ub798\uc2a4\uc5d0 \uc9c1\uc811 \uc5f0\uacb0\ud558\uc9c0 \uc54a\uace0 \uac1d\uccb4\ub97c \ubcf5\uc0ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. (\ucef4\ud3ec\ub10c\ud2b8)"}),"\n",(0,r.jsx)(n.li,{children:"\ud504\ub85c\ud1a0\ud0c0\uc785 \uc0c1\uc18d \ub418\uc5b4 \uc788\uc5b4\uc11c \ubcf5\uc7a1\ud55c \uc624\ube0c\uc81d\ud2b8\ub97c \uc27d\uac8c \uad6c\uc131\ud560 \uc218 \uc788\uace0 \uc911\ubcf5 \ucf54\ub4dc\ub97c \uc81c\uac70\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uadf8 \uc678\ub85c \uac1d\uccb4 \ub2e8\uc704\ub97c \ucef4\ud3ec\ub10c\ud2b8\ucc98\ub7fc \ud65c\uc6a9\ud558\uc5ec \ud655\uc7a5\uc131\ub3c4 \uace0\ub824\ud560 \uc218 \uc788\ub2e4\ub294 \uc810\uc774 \ub9e4\ub825\uc785\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\ub2e8\uc810",children:"\ub2e8\uc810"}),"\n",(0,r.jsx)(n.p,{children:"\uac00\uc7a5 \ubb38\uc81c\uac00 \ub420 \uc218 \uc788\ub294 \ub2e8\uc810\uc73c\ub85c \uc11c\ub85c \uc758\uc874\ub418\uc5b4 \uc788\ub294 \uad00\uacc4\uc77c \uc2dc, \uc0c1\uc18d\ub418\ub294 \ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134\uc744 \uc801\uc6a9\ud558\uae30\uac00 \uc5b4\ub835\uc2b5\ub2c8\ub2e4. \uc21c\ud658 \ucc38\uc870\uac00 \ubc1c\uc0dd\ud558\uc5ec \ubcf5\uc7a1\ud55c \uac1d\uccb4\ub97c \ubd88\ub7ec \uc62c \uc2dc \uc758\uc874\uc131\uc744 \uac16\uace0 \uc788\ub294 \ud504\ub85c\ud1a0\ud0c0\uc785\uc744 \ud65c\uc6a9\ud55c\ub2e4\uba74 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes",children:"mdn prototype"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new",children:"mdn new \uc5f0\uc0b0\uc790"})}),"\n",(0,r.jsx)(n.li,{children:"\ubaa8\ub358 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 DeepDive"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>c});var r=o(7294);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);