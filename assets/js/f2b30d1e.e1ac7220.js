"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={id:"note",title:"Note",sidebar_label:"Note",sidebar_position:8},a="NOTE",p={unversionedId:"note",id:"note",title:"Note",description:"1) I didn't use typescript because of speed and simplicity in presentation",source:"@site/docs/note.md",sourceDirName:".",slug:"/note",permalink:"/temp/docs/note",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"note",title:"Note",sidebar_label:"Note",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Problem 7",permalink:"/temp/docs/prob-7"}},s={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"note"},"NOTE"),(0,o.kt)("p",null,"1) I didn't use ",(0,o.kt)("inlineCode",{parentName:"p"},"typescript")," because of speed and simplicity in presentation",(0,o.kt)("br",{parentName:"p"}),"\n","but I think it is a very useful tool  "),(0,o.kt)("p",null,"2) I haven't exposed ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," (unit-tests or e2e-tests) for a matter of time",(0,o.kt)("br",{parentName:"p"}),"\n","but they are essential for maintenance"),(0,o.kt)("p",null,"3) I have not expounded on ",(0,o.kt)("inlineCode",{parentName:"p"},"DevOps")," principles",(0,o.kt)("br",{parentName:"p"}),"\n","but they simplify and speed up enormously"))}u.isMDXComponent=!0}}]);