(this["webpackJsonpBitfari-SC"]=this["webpackJsonpBitfari-SC"]||[]).push([[119],{1807:function(e,t,n){},443:function(e,t,n){"use strict";var r=n(14),i=n(18),o=n(0),a=n.n(o),s=n(5),c=n.n(s),l=n(102),u=n.n(l),d=n(60),f={tag:d.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},v=function(e){var t=e.className,n=e.cssModule,o=e.color,s=e.body,c=e.inverse,l=e.outline,f=e.tag,v=e.innerRef,m=Object(i.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.mapToCssModules)(u()(t,"card",!!c&&"text-white",!!s&&"card-body",!!o&&(l?"border":"bg")+"-"+o),n);return a.a.createElement(f,Object(r.a)({},m,{className:p,ref:v}))};v.propTypes=f,v.defaultProps={tag:"div"},t.a=v},444:function(e,t,n){"use strict";var r=n(14),i=n(18),o=n(0),a=n.n(o),s=n(5),c=n.n(s),l=n(102),u=n.n(l),d=n(60),f={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},v=function(e){var t=e.className,n=e.cssModule,o=e.innerRef,s=e.tag,c=Object(i.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.mapToCssModules)(u()(t,"card-body"),n);return a.a.createElement(s,Object(r.a)({},c,{className:l,ref:o}))};v.propTypes=f,v.defaultProps={tag:"div"},t.a=v},445:function(e,t,n){"use strict";var r=n(14),i=n(18),o=n(0),a=n.n(o),s=n(5),c=n.n(s),l=n(102),u=n.n(l),d=n(60),f=c.a.oneOfType([c.a.number,c.a.string]),v={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},m={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,s=e.tag,c=e.form,l=e.widths,f=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),v=[];l.forEach((function(t,n){var r=e[t];if(delete f[t],r){var i=!n;v.push(i?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var m=Object(d.mapToCssModules)(u()(t,o?"no-gutters":null,c?"form-row":"row",v),n);return a.a.createElement(s,Object(r.a)({},f,{className:m}))};p.propTypes=v,p.defaultProps=m,t.a=p},446:function(e,t,n){"use strict";var r=n(14),i=n(18),o=n(0),a=n.n(o),s=n(5),c=n.n(s),l=n(102),u=n.n(l),d=n(60),f=c.a.oneOfType([c.a.number,c.a.string]),v=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),m={tag:d.tagPropType,xs:v,sm:v,md:v,lg:v,xl:v,className:c.a.string,cssModule:c.a.object,widths:c.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,o=e.widths,s=e.tag,c=Object(i.a)(e,["className","cssModule","widths","tag"]),l=[];o.forEach((function(t,r){var i=e[t];if(delete c[t],i||""===i){var o=!r;if(Object(d.isObject)(i)){var a,s=o?"-":"-"+t+"-",f=b(o,t,i.size);l.push(Object(d.mapToCssModules)(u()(((a={})[f]=i.size||""===i.size,a["order"+s+i.order]=i.order||0===i.order,a["offset"+s+i.offset]=i.offset||0===i.offset,a)),n))}else{var v=b(o,t,i);l.push(v)}}})),l.length||l.push("col");var f=Object(d.mapToCssModules)(u()(t,l),n);return a.a.createElement(s,Object(r.a)({},c,{className:f}))};g.propTypes=m,g.defaultProps=p,t.a=g},448:function(e,t,n){"use strict";var r=n(14),i=n(18),o=n(0),a=n.n(o),s=n(5),c=n.n(s),l=n(102),u=n.n(l),d=n(60),f={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},v=function(e){var t=e.className,n=e.cssModule,o=e.tag,s=Object(i.a)(e,["className","cssModule","tag"]),c=Object(d.mapToCssModules)(u()(t,"card-title"),n);return a.a.createElement(o,Object(r.a)({},s,{className:c}))};v.propTypes=f,v.defaultProps={tag:"div"},t.a=v},449:function(e,t,n){"use strict";var r=n(14),i=n(18),o=n(0),a=n.n(o),s=n(5),c=n.n(s),l=n(102),u=n.n(l),d=n(60),f={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},v=function(e){var t=e.className,n=e.cssModule,o=e.tag,s=Object(i.a)(e,["className","cssModule","tag"]),c=Object(d.mapToCssModules)(u()(t,"card-header"),n);return a.a.createElement(o,Object(r.a)({},s,{className:c}))};v.propTypes=f,v.defaultProps={tag:"div"},t.a=v},710:function(e,t,n){"use strict";n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return b}));var r=n(0),i=n.n(r),o=n(23);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var c=Object(r.createContext)({});function l(){return Object(r.useContext)(c)}var u=function(e){return i.a.createElement(c.Provider,{value:e.refTracker},e.children)};function d(){var e=new Map;return{on:function(t,n){var r;return e.has(t)?null==(r=e.get(t))||r.add(n):e.set(t,new Set([n])),this},off:function(t,n){return n?e.get(t).delete(n):e.delete(t),this},emit:function(t,n){if("production"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASENAME:""}).NODE){var r=t;e.has(t)||0===r||console.error("It seems that the menu you are trying to display is not renderer or you have a menu id mismatch.","You used the menu id: "+t)}return e.has(t)&&e.get(t).forEach((function(e){e(n)})),this}}}var f=d();function v(){return Object(r.useRef)(new Map).current}var m=function(e){var t=e.id,n=e.event,r=e.props,i=e.position;n.preventDefault&&n.preventDefault(),f.emit(0).emit(t,{event:n.nativeEvent||n,props:r,position:i})},p=function(){f.emit(0)};function b(e){return{show:function(t,n){m({id:(null==n?void 0:n.id)||(null==e?void 0:e.id),props:(null==n?void 0:n.props)||(null==e?void 0:e.props),event:t,position:null==n?void 0:n.position})},hideAll:function(){p()}}}function g(){var e,t,n,r,i=new Map,o=!1;function a(){r[e].node.focus()}function s(){return-1!==e||(c(),!1)}function c(){e+1<r.length?e++:e+1===r.length&&(e=0),o&&l(),a()}function l(){if(s()&&!n){var c=i.get(t),l=c.isRoot,u=c.items,d=c.focusedIndex,f=c.parentNode;t.classList.remove("react-contexify__submenu--is-open"),r=u,t=f,l&&(n=!0,i.clear()),o||(e=d,a())}}return{init:function(t){r=t,e=-1,n=!0},moveDown:c,moveUp:function(){-1===e||0===e?e=r.length-1:e-1<r.length&&e--,o&&l(),a()},openSubmenu:function(){if(s()&&e>=0&&r[e].isSubmenu){var c=Array.from(r[e].submenuRefTracker.values()),l=r[e].node;return i.set(l,{isRoot:n,focusedIndex:e,parentNode:t||l,items:r}),l.classList.add("react-contexify__submenu--is-open"),t=l,c.length>0?(e=0,r=c):o=!0,n=!1,a(),!0}return!1},closeSubmenu:l}}var y={fade:"fade",flip:"flip",scale:"scale",slide:"slide"},h=function(){};function w(e){return"function"===typeof e}function E(e){return"string"===typeof e}function O(e,t){return r.Children.map(r.Children.toArray(e).filter(Boolean),(function(e){return Object(r.cloneElement)(e,t)}))}function j(e,t){return w(e)?e(t):e}function x(e,t){return w(t)?a({},e,t(e)):a({},e,t)}var T=function(e){var t,n=e.id,c=e.theme,l=e.style,d=e.className,m=e.children,p=e.animation,b=void 0===p?"scale":p,y=e.onHidden,w=void 0===y?h:y,j=e.onShown,T=void 0===j?h:j,_=s(e,["id","theme","style","className","children","animation","onHidden","onShown"]),N=Object(r.useReducer)(x,{x:0,y:0,visible:!1,triggerEvent:{},propsFromTrigger:null,willLeave:!1}),M=N[0],S=N[1],k=Object(r.useRef)(null),C=Object(r.useRef)(!1),L=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e}),[e]),t.current}(M.visible),R=v(),P=Object(r.useState)((function(){return g()}))[0];function A(e){var t=e.event,n=e.props,r=e.position;t.stopPropagation();var i=r||function(e){var t={x:0,y:0};return function(e){return"touchend"===e.type}(e)&&e.changedTouches&&e.changedTouches.length>0?(t.x=e.changedTouches[0].clientX,t.y=e.changedTouches[0].clientY):(t.x=e.clientX,t.y=e.clientY),(!t.x||t.x<0)&&(t.x=0),(!t.y||t.y<0)&&(t.y=0),t}(t),o=i.x,a=i.y;setTimeout((function(){S({visible:!0,willLeave:!1,x:o,y:a,triggerEvent:t,propsFromTrigger:n})}),0)}function D(e){var t=e;("undefined"===typeof t||2!==t.button&&!0!==t.ctrlKey||"contextmenu"===t.type)&&(!function(e){return!(!e||!(E(e)||"exit"in e&&e.exit))}(b)?S((function(e){return{visible:!e.visible&&e.visible}})):S((function(e){return{willLeave:e.visible}})))}Object(r.useEffect)((function(){return C.current=!0,f.on(n,A).on(0,D),function(){f.off(n,A).off(0,D)}}),[n]),Object(r.useEffect)((function(){C.current&&M.visible!==L&&(M.visible?T():w())}),[M.visible,w,T]),Object(r.useEffect)((function(){M.visible?P.init(Array.from(R.values())):R.clear()}),[M.visible,P,R]),Object(r.useEffect)((function(){if(M.visible){var e=window,t=e.innerWidth,n=e.innerHeight,r=k.current,i=r.offsetWidth,o=r.offsetHeight,a=M.x,s=M.y;a+i>t&&(a-=a+i-t),s+o>n&&(s-=s+o-n),S({x:a,y:s})}}),[M.visible]),Object(r.useEffect)((function(){function e(e){switch(e.preventDefault(),e.key){case"Enter":P.openSubmenu()||D();break;case"Escape":D();break;case"ArrowUp":P.moveUp();break;case"ArrowDown":P.moveDown();break;case"ArrowRight":P.openSubmenu();break;case"ArrowLeft":P.closeSubmenu()}}return M.visible&&(window.addEventListener("resize",D),window.addEventListener("contextmenu",D),window.addEventListener("click",D),window.addEventListener("scroll",D),window.addEventListener("keydown",e),window.addEventListener("blur",D)),function(){window.removeEventListener("resize",D),window.removeEventListener("contextmenu",D),window.removeEventListener("click",D),window.removeEventListener("scroll",D),window.removeEventListener("keydown",e),window.removeEventListener("blur",D)}}),[M.visible,P]);var F=M.visible,H=M.triggerEvent,z=M.propsFromTrigger,B=M.x,I=M.y,W=M.willLeave,K=Object(o.a)("react-contexify",d,((t={})["react-contexify__theme--"+c]=c,t),function(){return b?E(b)?Object(o.a)(((e={})["react-contexify__will-enter--"+b]=b&&F&&!W,e["react-contexify__will-leave--"+b+" react-contexify__will-leave--'disabled'"]=b&&F&&W,e)):"enter"in b&&"exit"in b?Object(o.a)(((t={})["react-contexify__will-enter--"+b.enter]=b.enter&&F&&!W,t["react-contexify__will-leave--"+b.exit+" react-contexify__will-leave--'disabled'"]=b.exit&&F&&W,t)):null:null;var e,t}()),U=a({},l,{left:B,top:I,opacity:1});return i.a.createElement(u,{refTracker:R},F&&i.a.createElement("div",Object.assign({},_,{className:K,onAnimationEnd:function(){M.willLeave&&M.visible&&S({visible:!1,willLeave:!1})},style:U,ref:k,role:"menu"}),O(m,{propsFromTrigger:z,triggerEvent:H})))},_=function(e){var t,n=e.children,r=e.className,a=e.style,c=e.triggerEvent,u=e.data,d=e.propsFromTrigger,f=e.onClick,v=void 0===f?h:f,m=e.disabled,p=void 0!==m&&m,b=e.hidden,g=void 0!==b&&b,y=s(e,["children","className","style","triggerEvent","data","propsFromTrigger","onClick","disabled","hidden"]),w=l(),E={data:u,triggerEvent:c,props:d},O=j(p,E);if(j(g,E))return null;var x=Object(o.a)("react-contexify__item",r,((t={})["react-contexify__item--disabled"]=O,t));return i.a.createElement("div",Object.assign({},y,{className:x,style:a,onClick:function(e){E.event=e,O?e.stopPropagation():v(E)},onKeyDown:function(e){"Enter"===e.key&&(E.event=e,v(E))},ref:function(e){e&&!O&&w.set(e,{node:e,isSubmenu:!1})},tabIndex:-1,role:"menuitem","aria-disabled":O}),i.a.createElement("div",{className:"react-contexify__item__content"},n))};var N=function(e){var t,n=e.arrow,c=void 0===n?"\u25b6":n,d=e.children,f=e.disabled,m=void 0!==f&&f,p=e.hidden,b=void 0!==p&&p,g=e.label,y=e.className,h=e.triggerEvent,w=e.propsFromTrigger,E=e.style,x=s(e,["arrow","children","disabled","hidden","label","className","triggerEvent","propsFromTrigger","style"]),T=l(),_=v(),N=Object(r.useRef)(null),M=Object(r.useState)({left:"100%",top:0,bottom:"initial"}),S=M[0],k=M[1],C={triggerEvent:h,props:w},L=j(m,C),R=j(b,C);if(Object(r.useEffect)((function(){if(N.current){var e=window,t=e.innerWidth,n=e.innerHeight,r=N.current.getBoundingClientRect(),i={};r.right<t?(i.left="100%",i.right=void 0):(i.right="100%",i.left=void 0),r.bottom>n?(i.bottom=0,i.top="initial"):i.bottom="initial",k(i)}}),[]),R)return null;var P=Object(o.a)("react-contexify__item",y,((t={})["react-contexify__item--disabled"]=L,t)),A=a({},E,S);return i.a.createElement(u,{refTracker:_},i.a.createElement("div",Object.assign({},x,{className:P,ref:function(e){e&&!L&&T.set(e,{node:e,isSubmenu:!0,submenuRefTracker:_})},tabIndex:-1,role:"menuitem","aria-haspopup":!0,"aria-disabled":L}),i.a.createElement("div",{className:"react-contexify__item__content",onClick:function(e){e.stopPropagation()}},g,i.a.createElement("span",{className:"react-contexify__submenu-arrow"},c)),i.a.createElement("div",{className:"react-contexify react-contexify__submenu",ref:N,style:A},O(d,{propsFromTrigger:w,triggerEvent:h}))))}}}]);
//# sourceMappingURL=119.4057b8e8.chunk.js.map