"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[298],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"prob-1",title:"Problem 1",sidebar_label:"Problem 1",sidebar_position:1},i=void 0,l={unversionedId:"prob-1",id:"prob-1",title:"Problem 1",description:"Resources and preliminary questions",source:"@site/docs/prob-1.md",sourceDirName:".",slug:"/prob-1",permalink:"/temp/docs/prob-1",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"prob-1",title:"Problem 1",sidebar_label:"Problem 1",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Problem 2",permalink:"/temp/docs/prob-2"}},p={},s=[{value:"Resources and preliminary questions",id:"resources-and-preliminary-questions",level:2},{value:"Details",id:"details",level:2},{value:"Page development",id:"page-development",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"resources-and-preliminary-questions"},"Resources and preliminary questions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Font (title and button)"),(0,a.kt)("li",{parentName:"ul"},"Color palette"),(0,a.kt)("li",{parentName:"ul"},"Logo. Possibly in SVG"),(0,a.kt)("li",{parentName:"ul"},"Cellphone picture PNG. Possibly with shade")),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"With tablet or mobile size what shuold happen to the texts?",(0,a.kt)("br",{parentName:"p"}),"\n","Resized? Centered?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"With tablet or mobile size what shuold happen to the mobile phone image?",(0,a.kt)("br",{parentName:"p"}),"\n","Moved? eliminated? Resized?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"With tablet or mobile size what shuold happen to the dark gray curved area?",(0,a.kt)("br",{parentName:"p"}),"\n","Bottom left aligned? Resized?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Does the light gray background have a gradient? or is it solid?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The dark gray curved area in the background at the bottom left and should it be done in vector?"))),(0,a.kt)("h2",{id:"page-development"},"Page development"),(0,a.kt)("p",null,"Given the complexity of the background I would do two levels:",(0,a.kt)("br",{parentName:"p"}),"\n","as shown very roughly here:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://1b3jtc.csb.app/"},"code"),"  "),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"absolute")," layer that contains the cell phone image",(0,a.kt)("br",{parentName:"p"}),"\n","which is in the background, independent and aligned on the top right.",(0,a.kt)("br",{parentName:"p"}),"\n","A higher level in foreground with margin",(0,a.kt)("br",{parentName:"p"}),"\n","with a central block for texts",(0,a.kt)("br",{parentName:"p"}),"\n","and a lower block for the Google Play and App Store buttons"))}c.isMDXComponent=!0}}]);