"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const o={id:"prob-7",title:"Problem 7",sidebar_label:"Problem 7",sidebar_position:7},a=void 0,l={unversionedId:"prob-7",id:"prob-7",title:"Problem 7",description:"The voucher assignment form is very interesting because:",source:"@site/docs/prob-7.md",sourceDirName:".",slug:"/prob-7",permalink:"/jon-doc/docs/prob-7",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"prob-7",title:"Problem 7",sidebar_label:"Problem 7",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Problem 6",permalink:"/jon-doc/docs/prob-6"},next:{title:"Note",permalink:"/jon-doc/docs/note"}},s={},d=[],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The voucher assignment form is very interesting because:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It offers inline editing, which is faster and more immediate."),(0,i.kt)("li",{parentName:"ul"},"Use the filter to define the block being edited",(0,i.kt)("br",{parentName:"li"}),"instead of the classic checkboxes. This also simplifies a lot.")),(0,i.kt)("p",null,"In this case I would still use the STOREs.\nI would do a STORE-EMPLOYEES like that (pseudo-code) "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'    state: {\n        // all EMPLOYEEs visible in page\n        displayed: [],\n        // the currently selected employee \n        employeeIdSel: null,\n        // pagination data\n        pagination: {\n            current: 0,\n            limit: 15,\n            total: null,\n        },\n        // filter data\n        filter: {\n            text: "",\n            groupId: null,\n            officeId: null\n        },\n        // edit. you could make a separate STORE that deals only with modified records\n        edit: {\n            // STATE of the gif customisation dialogue\n            isDialogTundrGiftOpen: false,\n            modified: [\n                { \n                    employeeId: int, total: int, date: Date, ...,\n                    tundrGift: { shopping: true, ... }\n                },\n                ...\n            ]\n        }\n    },\n\n    getters: {\n\n        // returns the properties of an EMPLOYEE\n        // With these I can see the changed data in the table\n        getProps: ( employeeId ) => state.edit.modified.find( e => e.id == employeeId ),\n\n        // returns the summary\n        getSummary: () => state.edit.modified.reduce ( (acc, e) => ..., {} )\n    },\n\n    action: {\n\n        // Take from the BE all employees to be displayed\n        fetch: () => {\n            state.all = ajax.getAll(\n                state.filter,\n                state.pagination\n            )\n        },\n\n        // adds a specific change \n        addModify: ( employeeId, props ... ) => {\n            resetModify( employeeId )\n            state.edit.modified.push ( { employeeId, ...} )\n        },\n\n        // adds bulk changes\n        addModifyBulk: ( props ... ) => {\n            state.edit.modified.concat([...])\n        },\n\n        // resets an modification\n        resetModify: ( employeeId ) => state.edit.modified.filter( m => m.id != employeeId ),\n\n        // reset all employees displayed\n        resetModifyBulk: () => state.edit.modified.filter( m => !state.displayed.some( e => e.id == m.id ) ),\n\n        // send everything to the BE\n        save: () => ajax.post( state.edit.modified ),\n\n        ...\n    },\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each modification adds/updates in the array ",(0,i.kt)("inlineCode",{parentName:"li"},"state.edit.modified")," status"),(0,i.kt)("li",{parentName:"ul"},'In the display table the editable properties must be obtained with the "getter" ',(0,i.kt)("inlineCode",{parentName:"li"},"getProps")),(0,i.kt)("li",{parentName:"ul"},'The addition of the change could also be called only on "blur" event'),(0,i.kt)("li",{parentName:"ul"},"Once the ",(0,i.kt)("inlineCode",{parentName:"li"},"state.edit.modified")," is handled correctly\nit is trivial to send them to the server, reset them, get statistics")))}c.isMDXComponent=!0}}]);