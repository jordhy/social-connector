(this["webpackJsonpBitfari-SC"]=this["webpackJsonpBitfari-SC"]||[]).push([[139],{1890:function(e,a,s){"use strict";s.r(a);var c=s(0),t=s(445),n=s(446),r=s(15),i=s(624),l=s(979),d=s(980),o=s(463),j=s(926),m=s(455),b=s(955),p=s(439),x=s(6),O=(s(508),s(460)),h=(s(514),s(1024),s(961),s(1044),s(1039),s(103)),u=s.n(h),f=s(478),N=function(e){var a=e.stepper,s=e.type,r=Object(f.c)(),i=r.register,h=r.errors,N=r.handleSubmit,v=r.trigger;return Object(x.jsxs)(c.Fragment,{children:[Object(x.jsxs)("div",{className:"content-header",children:[Object(x.jsx)("h5",{className:"mb-0",children:"Address"}),Object(x.jsx)("small",{children:"Enter the Screen Physical Address"})]}),Object(x.jsxs)(o.a,{onSubmit:N((function(){v(),Object(O.e)(h)&&a.next()})),children:[Object(x.jsxs)(t.a,{children:[Object(x.jsxs)(j.a,{tag:n.a,md:"6",children:[Object(x.jsx)(m.a,{className:"form-label",for:"address-".concat(s),children:"Address"}),Object(x.jsx)(b.a,{type:"text",id:"address-".concat(s),name:"address-".concat(s),placeholder:"123 Street, City, Zip Code",innerRef:i({required:!0}),className:u()({"is-invalid":h["address-".concat(s)]})})]}),Object(x.jsxs)(j.a,{tag:n.a,md:"6",children:[Object(x.jsx)(m.a,{className:"form-label",for:"landmark-".concat(s),children:"Closest Landmark"}),Object(x.jsx)(b.a,{type:"text",name:"landmark-".concat(s),id:"landmark-".concat(s),placeholder:"Name a nearby landmark if any",innerRef:i({required:!0}),className:u()({"is-invalid":h["landmark-".concat(s)]})})]})]}),Object(x.jsxs)(t.a,{children:[Object(x.jsxs)(j.a,{tag:n.a,md:"6",children:[Object(x.jsx)(m.a,{className:"form-label",for:"pincode-".concat(s),children:"Pincode"}),Object(x.jsx)(b.a,{type:"text",name:"pincode-".concat(s),id:"pincode-".concat(s),placeholder:"type a six digit pincode and save it on a note",innerRef:i({required:!0}),className:u()({"is-invalid":h["pincode-".concat(s)]})})]}),Object(x.jsxs)(j.a,{tag:n.a,md:"6",children:[Object(x.jsx)(m.a,{className:"form-label",for:"city-".concat(s),children:"City"}),Object(x.jsx)(b.a,{type:"text",name:"city-".concat(s),id:"city-".concat(s),placeholder:"New York",innerRef:i({required:!0}),className:u()({"is-invalid":h["city-".concat(s)]})})]})]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsxs)(p.a.Ripple,{color:"primary",className:"btn-prev",children:[Object(x.jsx)(l.a,{size:14,className:"align-middle mr-sm-25 mr-0"}),Object(x.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),Object(x.jsxs)(p.a.Ripple,{type:"submit",color:"primary",className:"btn-next",children:[Object(x.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Next"}),Object(x.jsx)(d.a,{size:14,className:"align-middle ml-sm-25 ml-0"})]})]})]})]})},v=function(e){var a=e.stepper,s=e.type,r=Object(f.c)(),i=r.register,h=r.errors,N=r.handleSubmit,v=r.trigger;return Object(x.jsxs)(c.Fragment,{children:[Object(x.jsxs)("div",{className:"content-header",children:[Object(x.jsx)("h5",{className:"mb-0",children:"Payment Info"}),Object(x.jsx)("small",{children:"Enter Your Business Info."})]}),Object(x.jsxs)(o.a,{onSubmit:N((function(){v(),Object(O.e)(h)&&a.next()})),children:[Object(x.jsxs)(t.a,{children:[Object(x.jsxs)(j.a,{tag:n.a,md:"6",children:[Object(x.jsx)(m.a,{className:"form-label",for:"first-name-".concat(s),children:"STX Address"}),Object(x.jsx)(b.a,{type:"text",name:"first-name-".concat(s),id:"first-name-".concat(s),placeholder:"SP31234567890...",innerRef:i({required:!0}),className:u()({"is-invalid":h["first-name-".concat(s)]})})]}),Object(x.jsxs)(j.a,{tag:n.a,md:"6",children:[Object(x.jsx)(m.a,{className:"form-label",for:"last-name-".concat(s),children:"Screen SerialNumber"}),Object(x.jsx)(b.a,{type:"text",name:"last-name-".concat(s),id:"last-name-".concat(s),placeholder:"12345",innerRef:i({required:!0}),className:u()({"is-invalid":h["last-name-".concat(s)]})})]})]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsxs)(p.a.Ripple,{color:"primary",className:"btn-prev",onClick:function(){return a.previous()},children:[Object(x.jsx)(l.a,{size:14,className:"align-middle mr-sm-25 mr-0"}),Object(x.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),Object(x.jsxs)(p.a.Ripple,{type:"submit",color:"primary",className:"btn-next",children:[Object(x.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Next"}),Object(x.jsx)(d.a,{size:14,className:"align-middle ml-sm-25 ml-0"})]})]})]})]})},g=s(19),y=s(711),w=s(686),S=function(e){var a,s=e.stepper,r=e.type,i=y.a().shape((a={},Object(g.a)(a,"username-".concat(r),y.c().required()),Object(g.a)(a,"email-".concat(r),y.c().email().required()),Object(g.a)(a,"password-val-".concat(r),y.c().required()),Object(g.a)(a,"confirm-password-val",y.c().required().oneOf([y.b("password-val-".concat(r)),null],"Passwords must match")),a)),h=Object(f.c)({resolver:Object(w.yupResolver)(i)}),N=h.register,v=h.errors,S=h.handleSubmit,R=h.trigger;return Object(x.jsxs)(c.Fragment,{children:[Object(x.jsxs)("div",{className:"content-header",children:[Object(x.jsx)("h5",{className:"mb-0",children:"Screen Details"}),Object(x.jsx)("small",{className:"text-muted",children:"Enter Your Account Details."})]}),Object(x.jsxs)(o.a,{onSubmit:S((function(){R(),Object(O.e)(v)&&s.next()})),children:[Object(x.jsxs)(t.a,{children:[Object(x.jsxs)(j.a,{tag:n.a,md:"6",children:[Object(x.jsx)(m.a,{className:"form-label",for:"username-".concat(r),children:"Username"}),Object(x.jsx)(b.a,{name:"username-".concat(r),id:"username-".concat(r),placeholder:"johndoe",innerRef:N({required:!0}),className:u()({"is-invalid":v["username-".concat(r)]})})]}),Object(x.jsxs)(j.a,{tag:n.a,md:"6",children:[Object(x.jsx)(m.a,{className:"form-label",for:"email-".concat(r),children:"Email"}),Object(x.jsx)(b.a,{type:"email",name:"email-".concat(r),id:"email-".concat(r),placeholder:"yourbusiness@email.com",innerRef:N({required:!0}),className:u()({"is-invalid":v["email-".concat(r)]})})]})]}),Object(x.jsxs)(t.a,{children:[Object(x.jsxs)("div",{className:"form-group form-password-toggle col-md-6",children:[Object(x.jsx)(m.a,{className:"form-label",for:"password-val-".concat(r),children:"Password"}),Object(x.jsx)(b.a,{type:"password",name:"password-val-".concat(r),id:"password-val-".concat(r),innerRef:N({required:!0}),className:u()({"is-invalid":v["password-val-".concat(r)]})})]}),Object(x.jsxs)("div",{className:"form-group form-password-toggle col-md-6",children:[Object(x.jsx)(m.a,{className:"form-label",for:"confirm-password-val",children:"Confirm Password"}),Object(x.jsx)(b.a,{type:"password",name:"confirm-password-val",id:"confirm-password-val",innerRef:N({required:!0}),className:u()({"is-invalid":v["confirm-password-val"]})})]})]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsxs)(p.a.Ripple,{color:"secondary",className:"btn-prev",outline:!0,disabled:!0,children:[Object(x.jsx)(l.a,{size:14,className:"align-middle mr-sm-25 mr-0"}),Object(x.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),Object(x.jsxs)(p.a.Ripple,{type:"submit",color:"primary",className:"btn-next",children:[Object(x.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Next"}),Object(x.jsx)(d.a,{size:14,className:"align-middle ml-sm-25 ml-0"})]})]})]})]})},R=function(){var e=Object(c.useState)(null),a=Object(r.a)(e,2),s=a[0],t=a[1],n=Object(c.useRef)(null),l=[{id:"account-details",title:"Screen Details",subtitle:"Register Your Screen.",content:Object(x.jsx)(S,{stepper:s,type:"wizard-horizontal"})},{id:"personal-info",title:"Payment Info",subtitle:"Add Wallet Address",content:Object(x.jsx)(v,{stepper:s,type:"wizard-horizontal"})},{id:"step-address",title:"Location",subtitle:"Add Screen Location",content:Object(x.jsx)(N,{stepper:s,type:"wizard-horizontal"})}];return Object(x.jsx)("div",{className:"horizontal-wizard",children:Object(x.jsx)(i.a,{instance:function(e){return t(e)},ref:n,steps:l})})},k=s(441);a.default=function(){return Object(x.jsxs)(c.Fragment,{children:[Object(x.jsx)(k.a,{breadCrumbTitle:"New Screen",breadCrumbParent:"Form",breadCrumbActive:"New Screen"}),Object(x.jsx)(t.a,{children:Object(x.jsx)(n.a,{sm:"12",children:Object(x.jsx)(R,{})})})]})}},441:function(e,a,s){"use strict";var c=s(442),t=s(450),n=s(451),r=s(6);a.a=function(e){var a=e.breadCrumbTitle,s=e.breadCrumbParent,i=e.breadCrumbParent2,l=e.breadCrumbParent3,d=e.breadCrumbActive;return Object(r.jsxs)("div",{className:"content-header row",children:[Object(r.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(r.jsx)("div",{className:"row breadcrumbs-top",children:Object(r.jsxs)("div",{className:"col-12",children:[a?Object(r.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(r.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(r.jsxs)(t.a,{children:[Object(r.jsx)(n.a,{tag:"li",children:Object(r.jsx)(c.b,{to:"/",children:"Home"})}),Object(r.jsx)(n.a,{tag:"li",className:"text-primary",children:s}),i?Object(r.jsx)(n.a,{tag:"li",className:"text-primary",children:i}):"",l?Object(r.jsx)(n.a,{tag:"li",className:"text-primary",children:l}):"",Object(r.jsx)(n.a,{tag:"li",active:!0,children:d})]})})]})})}),Object(r.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(r.jsx)("div",{className:"form-group breadcrum-right dropdown"})})]})}},624:function(e,a,s){"use strict";var c=s(19),t=s(15),n=s(0),r=s(799),i=s.n(r),l=s(103),d=s.n(l),o=s(994),j=(s(800),s(801),s(6)),m=Object(n.forwardRef)((function(e,a){var s,r=e.type,l=e.className,o=e.steps,m=e.separator,b=e.options,p=e.instance,x=Object(n.useState)(0),O=Object(t.a)(x,2),h=O[0],u=O[1],f=null;Object(n.useEffect)((function(){f=new i.a(a.current,b),a.current.addEventListener("shown.bs-stepper",(function(e){u(e.detail.indexStep)})),p&&p(f)}),[]);return Object(j.jsxs)("div",{ref:a,className:d()("bs-stepper",(s={},Object(c.a)(s,l,l),Object(c.a)(s,"vertical","vertical"===r),Object(c.a)(s,"vertical wizard-modern","modern-vertical"===r),Object(c.a)(s,"wizard-modern","modern-horizontal"===r),s)),children:[Object(j.jsx)("div",{className:"bs-stepper-header",children:o.map((function(e,a){return Object(j.jsxs)(n.Fragment,{children:[0!==a&&a!==o.length?Object(j.jsx)("div",{className:"line",children:m}):null,Object(j.jsx)("div",{className:d()("step",{crossed:h>a,active:a===h}),"data-target":"#".concat(e.id),children:Object(j.jsxs)("button",{type:"button",className:"step-trigger",children:[Object(j.jsx)("span",{className:"bs-stepper-box",children:e.icon?e.icon:a+1}),Object(j.jsxs)("span",{className:"bs-stepper-label",children:[Object(j.jsx)("span",{className:"bs-stepper-title",children:e.title}),e.subtitle?Object(j.jsx)("span",{className:"bs-stepper-subtitle",children:e.subtitle}):null]})]})})]},e.id)}))}),Object(j.jsx)("div",{className:"bs-stepper-content",children:o.map((function(e,a){return Object(j.jsx)("div",{className:d()("content",{"active dstepper-block":h===a}),id:e.id,children:e.content},e.id)}))})]})}));a.a=m,m.defaultProps={type:"horizontal",separator:Object(j.jsx)(o.a,{size:17}),options:{}}},801:function(e,a,s){}}]);
//# sourceMappingURL=139.ae31ff9b.chunk.js.map