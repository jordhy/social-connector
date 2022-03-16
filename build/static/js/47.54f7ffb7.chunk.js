(this["webpackJsonpbitfari-sc"]=this["webpackJsonpbitfari-sc"]||[]).push([[47],{1054:function(e,t,s){"use strict";var c=s(13),a=s.n(c),l=s(10),i=s(3);t.a=e=>{let{data:t,duration:s,bordered:c,fullWidth:n,cols:r}=e;const j=r||{md:4,xs:12};return Object(i.jsx)(l.jb,{className:"pricing-card",children:Object(i.jsx)(l.B,{...n?{}:{sm:{offset:2,size:10},lg:{offset:2,size:10}},className:a()({"mx-auto":!n}),children:Object(i.jsx)(l.jb,{children:t.map(((e,t)=>{const n="yearly"===s?e.yearlyPlan.perMonth:e.monthlyPrice,r="yearly"===s?e.yearlyPlan.totalAnnual:e.monthlyPrice,d="Basic"===e.title?"mb-2 mt-5":"Standard"===e.title?"mb-1":"mb-2";return Object(i.jsx)(l.B,{...j,children:Object(i.jsx)(l.l,{className:a()("text-center",{border:c,"shadow-none":c,popular:!0===e.popular,"border-primary":c&&!0===e.popular,["".concat(e.title.toLowerCase(),"-pricing")]:e.title}),children:Object(i.jsxs)(l.m,{children:[!0===e.popular?Object(i.jsx)("div",{className:"pricing-badge text-end",children:Object(i.jsx)(l.f,{color:"light-primary",pill:!0,children:"Popular"})}):null,Object(i.jsx)("img",{className:d,src:e.img,alt:"pricing svg"}),Object(i.jsx)("h3",{children:e.title}),Object(i.jsx)(l.u,{children:e.subtitle}),Object(i.jsxs)("div",{className:"annual-plan",children:[Object(i.jsxs)("div",{className:"plan-price mt-2",children:[Object(i.jsx)("sup",{className:"font-medium-1 fw-bold text-primary me-25",children:"$"}),Object(i.jsx)("span",{className:"pricing-".concat(e.title.toLowerCase(),"-value fw-bolder text-primary"),children:n}),Object(i.jsx)("span",{className:"pricing-duration text-body font-medium-1 fw-bold ms-25",children:"/month"})]}),"Basic"!==e.title&&"yearly"===s?Object(i.jsxs)("small",{className:"annual-pricing text-muted",children:["USD ",r," / year"]}):null]}),Object(i.jsx)(l.P,{tag:"ul",className:"list-group-circle text-start mb-2",children:e.planBenefits.map(((e,t)=>Object(i.jsx)(l.Q,{tag:"li",children:e},t)))})]})})},t)}))})})})}},1686:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(12),l=s.n(a),i=s(10),n=s(3);var r=e=>{let{data:t}=e;return Object(n.jsxs)("div",{className:"pricing-faq",children:[Object(n.jsx)("h3",{className:"text-center",children:"FAQ's"}),Object(n.jsx)("p",{className:"text-center mb-0",children:"Let us help answer the most common questions."}),Object(n.jsx)(i.jb,{className:"mt-75 mb-2",children:Object(n.jsx)(i.B,{className:"mx-auto",sm:"12",lg:{size:10,offset:2},children:Object(n.jsx)(i.sb,{className:"accordion-margin mt-2",children:t.map(((e,t)=>Object(n.jsxs)(i.d,{children:[Object(n.jsx)(i.c,{tag:"h2",targetId:String(t+1),children:e.question}),Object(n.jsx)(i.b,{accordionId:String(t+1),children:e.ans})]},t+1)))})})})]})},j=s(1054),d=s(951);var m=()=>Object(n.jsx)("div",{className:"pricing-free-trial",children:Object(n.jsx)(i.jb,{children:Object(n.jsx)(i.B,{className:"mx-auto",lg:{size:10,offset:3},sm:"12",children:Object(n.jsxs)("div",{className:"pricing-trial-content d-flex justify-content-between",children:[Object(n.jsxs)("div",{className:"text-center text-md-start mt-3",children:[Object(n.jsx)("h3",{className:"text-primary",children:"Buy FARI and Save 50%!"}),Object(n.jsx)("h5",{children:"Get up to 90% savings compared to traditional ads. "}),Object(n.jsx)("div",{className:"mt-2 mt-lg-3",children:Object(n.jsx)(i.i,{color:"primary",children:"Buy FARI"})})]}),Object(n.jsx)("img",{className:"pricing-trial-img img-fluid",src:d.a,alt:"trial svg",style:{transform:"scaleX(1)"}})]})})})});var b=e=>{let{duration:t,setDuration:s}=e;return Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("h1",{className:"mt-5",children:"Pricing Plans"}),Object(n.jsx)("p",{className:"mb-2 pb-75",children:"All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs."}),Object(n.jsxs)("div",{className:"d-flex align-items-center justify-content-center mb-5 pb-50",children:[Object(n.jsx)("h6",{className:"me-50 mb-0",children:"Monthly"}),Object(n.jsx)("div",{className:"form-switch",children:Object(n.jsx)(i.L,{id:"plan-switch",type:"switch",checked:"yearly"===t,onChange:e=>{e.target.checked?s("yearly"):s("monthly")}})}),Object(n.jsx)("h6",{className:"ms-50 mb-0",children:"Annually"})]})]})};s(990);t.default=()=>{const[e,t]=Object(c.useState)(null),[s,a]=Object(c.useState)(null),[i,d]=Object(c.useState)("monthly");return Object(c.useEffect)((()=>{l.a.get("/pricing/data").then((e=>{const s=[],c=[];Object.entries(e.data).forEach((e=>{let[l,i]=e;"qandA"!==l?(s.push(i),t([...s])):(c.push(i),a(c[0]))}))}))}),[]),Object(n.jsxs)("div",{id:"pricing-table",children:[Object(n.jsx)(b,{duration:i,setDuration:d}),null!==e&&null!==s?Object(n.jsxs)(c.Fragment,{children:[Object(n.jsx)(j.a,{data:e,duration:i}),Object(n.jsx)(m,{}),Object(n.jsx)(r,{data:s})]}):null]})}},951:function(e,t,s){"use strict";t.a=s.p+"static/media/pricing-Illustration.1f07f42e.svg"},990:function(e,t,s){}}]);
//# sourceMappingURL=47.54f7ffb7.chunk.js.map