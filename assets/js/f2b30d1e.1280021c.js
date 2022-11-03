"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const a={id:"note",title:"Note",sidebar_label:"Note",sidebar_position:8},o=void 0,l={unversionedId:"note",id:"note",title:"Note",description:"The voucher assignment form is very interesting because:",source:"@site/docs/note.md",sourceDirName:".",slug:"/note",permalink:"/jon-doc/docs/note",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"note",title:"Note",sidebar_label:"Note",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Problem 7",permalink:"/jon-doc/docs/prob-7"}},s={},d=[],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The voucher assignment form is very interesting because:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It offers inline editing, which is faster and more immediate."),(0,r.kt)("li",{parentName:"ul"},"Use the filter to define the block being edited",(0,r.kt)("br",{parentName:"li"}),"instead of the classic checkboxes. This also simplifies a lot.")),(0,r.kt)("p",null,"In this case I would still use the STOREs.\nI would do a STORE-EMPLOYEES like that (pseudo-code) "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    state: {\n        // all EMPLOYEEs visible in page\n        displayed: [],\n        // the currently selected employee \n        employeeIdSel: null,\n        // pagination data\n        pagination: {\n            current: 0,\n            limit: 15,\n            total: null,\n        },\n        // filter data\n        filter: {\n            text: "",\n            groupId: null,\n            officeId: null\n        },\n        // edit. you could make a separate STORE that deals only with modified records\n        edit: {\n            // STATE of the gif customisation dialogue\n            isDialogTundrGiftOpen: false,\n            modified: [\n                { \n                    employeeId: int, total: int, date: Date, ...,\n                    tundrGift: { shopping: true, ... }\n                },\n                ...\n            ]\n        }\n    },\n\n    getters: {\n\n        // returns the properties of an EMPLOYEE\n        // With these I can see the changed data in the table\n        getProps: ( employeeId ) => state.edit.modified.find( e => e.id == employeeId ),\n\n        // returns the summary\n        getSummary: () => state.edit.modified.reduce ( (acc, e) => ..., {} )\n    },\n\n    action: {\n\n        // Take from the BE all employees to be displayed\n        fetch: () => {\n            state.all = ajax.getAll(\n                state.filter,\n                state.pagination\n            )\n        },\n\n        // adds a specific change \n        addModify: ( employeeId, props ... ) => {\n            resetModify( employeeId )\n            state.edit.modified.push ( { employeeId, ...} )\n        },\n\n        // adds bulk changes\n        addModifyBulk: ( props ... ) => {\n            state.edit.modified.concat([...])\n        },\n\n        // resets an modification\n        resetModify: ( employeeId ) => state.edit.modified.filter( m => m.id != employeeId ),\n\n        // reset all employees displayed\n        resetModifyBulk: () => state.edit.modified.filter( m => !state.displayed.some( e => e.id == m.id ) ),\n\n        // send everything to the BE\n        save: () => ajax.post( state.edit.modified ),\n\n        ...\n    },\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each modification adds/updates in the array ",(0,r.kt)("inlineCode",{parentName:"li"},"state.edit.modified")," status"),(0,r.kt)("li",{parentName:"ul"},'In the display table the editable properties must be obtained with the "getter" ',(0,r.kt)("inlineCode",{parentName:"li"},"getProps")),(0,r.kt)("li",{parentName:"ul"},'The addition of the change could also be called only on "blur" event'),(0,r.kt)("li",{parentName:"ul"},"Once the ",(0,r.kt)("inlineCode",{parentName:"li"},"state.edit.modified")," is handled correctly\nit is trivial to send them to the server, reset them, get statistics")))}p.isMDXComponent=!0}}]);