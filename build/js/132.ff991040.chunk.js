(this["webpackJsonpBitfari-SC"]=this["webpackJsonpBitfari-SC"]||[]).push([[132],{1810:function(e,t,n){(function(n){var a,i,o;i=[],void 0===(o="function"===typeof(a=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){s(a.response,t,n)},a.onerror=function(){console.error("could not download file")},a.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,s=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype?function(e,t,n){var s=r.URL||r.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?o(c):i(c.href)?a(e,t,n):o(c,c.target="_blank")):(c.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){o(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,r){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),n);else if(i(e))a(e,n,r);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){o(s)}))}}:function(e,t,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var o="application/octet-stream"===e.type,s=/constructor/i.test(r.HTMLElement)||r.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||o&&s)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},l.readAsDataURL(e)}else{var u=r.URL||r.webkitURL,d=u.createObjectURL(e);i?i.location=d:location.href=d,i=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});r.saveAs=s.saveAs=s,e.exports=s})?a.apply(t,i):a)||(e.exports=o)}).call(this,n(10))},1877:function(e,t,n){"use strict";n.r(t);var a=n(15),i=n(0),o=n(456),r=n(905),s=n.n(r),c=n(1810),l=n(445),u=n(446),d=n(443),m=n(444),b=n(439),j=n(455),h=n(955),f=n(499),p=n(574),w=n(621),x=n(561),O=n(926),v=n(923),y=n(1196),g=n(6),C=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}];t.default=function(){var e=Object(i.useRef)(),t=Object(i.useState)(C),n=Object(a.a)(t,1)[0],r=Object(i.useState)([]),L=Object(a.a)(r,2),S=L[0],k=L[1],E=Object(i.useState)(""),R=Object(a.a)(E,2),N=R[0],T=R[1],A=Object(i.useState)(!1),B=Object(a.a)(A,2),M=B[0],_=B[1],D=Object(i.useState)(""),U=Object(a.a)(D,2),H=U[0],F=U[1],W=Object(i.useState)("xlsx"),z=Object(a.a)(W,2),X=z[0],J=z[1],K=function(){_(!M)},q=(N?S:n).map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.email}),Object(g.jsx)("td",{children:e.name}),Object(g.jsx)("td",{children:e.website}),Object(g.jsx)("td",{children:e.id})]},e.id)}));return Object(g.jsxs)(i.Fragment,{children:[Object(g.jsx)(o.a,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/AdeleD/react-paginate"}),Object(g.jsx)(l.a,{className:"export-component",children:Object(g.jsx)(u.a,{sm:"12",children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(m.a,{className:"pb-0",children:Object(g.jsxs)("div",{className:"d-flex justify-content-between flex-wrap flex-sm-row flex-column",children:[Object(g.jsx)(b.a.Ripple,{color:"primary",onClick:function(){return K()},children:"Export"}),Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-end mt-sm-0 mt-1",children:[Object(g.jsx)(j.a,{for:"search-input",className:"mr-1",children:"Search"}),Object(g.jsx)(h.a,{id:"search-input",bsSize:"sm",type:"text",value:N,onChange:function(e){return function(e){var t=n,a=[],i=e.target.value;T(i),i.length&&(a=t.filter((function(e){var t=e.name.toLowerCase().startsWith(i.toLowerCase())||e.email.toLowerCase().startsWith(i.toLowerCase())||e.website.toLowerCase().startsWith(i.toLowerCase())||e.id.toString().toLowerCase().startsWith(i.toLowerCase()),n=e.name.toLowerCase().includes(i.toLowerCase())||e.email.toLowerCase().includes(i.toLowerCase())||e.website.toLowerCase().includes(i.toLowerCase())||e.id.toString().toLowerCase().includes(i.toLowerCase());return t||(!t&&n?n:null)})),k(a),T(i))}(e)}})]})]})}),Object(g.jsxs)(f.a,{innerRef:e,className:"table-hover-animation mt-2",responsive:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Email"}),Object(g.jsx)("th",{children:"Name"}),Object(g.jsx)("th",{children:"Website"}),Object(g.jsx)("th",{children:"Rank"})]})}),Object(g.jsx)("tbody",{children:q})]})]})})}),Object(g.jsxs)(p.a,{isOpen:M,toggle:function(){return K()},className:"modal-dialog-centered",onClosed:function(){return F("")},children:[Object(g.jsx)(w.a,{toggle:function(){return K()},children:"Export To Excel"}),Object(g.jsxs)(x.a,{children:[Object(g.jsx)(O.a,{children:Object(g.jsx)(h.a,{type:"text",value:H,onChange:function(e){return F(e.target.value)},placeholder:"Enter File Name"})}),Object(g.jsx)(O.a,{children:Object(g.jsxs)(v.a,{type:"select",id:"selectFileFormat",name:"customSelect",value:X,onChange:function(e){return J(e.target.value)},children:[Object(g.jsx)("option",{children:"xlsx"}),Object(g.jsx)("option",{children:"csv"}),Object(g.jsx)("option",{children:"txt"})]})})]}),Object(g.jsxs)(y.a,{children:[Object(g.jsx)(b.a,{color:"primary",onClick:function(){return function(){K();var t=X,n=s.a.utils.table_to_book(e.current,{sheet:"Sheet JS"}),a=s.a.write(n,{bookType:t,bookSST:!0,type:"binary"}),i=H.length?"".concat(H,".").concat(X):"excel-sheet.".concat(X);return c.saveAs(new Blob([function(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),a=0;a<e.length;a++)n[a]=255&e.charCodeAt(a);return t}(a)],{type:"application/octet-stream"}),i)}()},children:"Export"}),Object(g.jsx)(b.a,{color:"flat-danger",onClick:function(){return K()},children:"Cancel"})]})]})]})}},456:function(e,t,n){"use strict";var a=n(445),i=n(446),o=n(6);t.a=function(e){return Object(o.jsx)(a.a,{className:"mb-2",children:Object(o.jsxs)(i.a,{sm:"12",className:"ml-50",children:[Object(o.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(o.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}},765:function(e,t){},906:function(e,t){},907:function(e,t){}}]);
//# sourceMappingURL=132.ff991040.chunk.js.map