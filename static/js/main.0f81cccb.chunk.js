(this["webpackJsonpmqtt-request"]=this["webpackJsonpmqtt-request"]||[]).push([[0],{105:function(e,t){},107:function(e,t){},132:function(e,t){},133:function(e,t){},135:function(e,t){},137:function(e,t){},147:function(e,t,c){},149:function(e,t,c){},150:function(e,t,c){},151:function(e,t,c){},156:function(e,t,c){},157:function(e,t,c){},158:function(e,t,c){},159:function(e,t,c){},160:function(e,t,c){},161:function(e,t,c){},162:function(e,t,c){},163:function(e,t,c){},164:function(e,t,c){},165:function(e,t,c){},166:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(32),s=c.n(r),i=c(2),o=c(26),j=c(4),d=c(35),l=c.n(d),b=c(5),u=c(3),O=(c(147),c(1)),f=function(e){var t=e.children,c=e.align,n={center:"center",default:"default"};return Object(O.jsx)("div",{className:"header header--".concat(n[c]||n.default),children:t})},h=(c(149),function(e){var t=e.children;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"body",children:t})})}),m=c(25),x=(c(150),function(e){var t=e.className,c=e.variant,n={default:"default",dark:"dark"};return Object(O.jsx)("div",{className:"loader__container  ".concat(t||""),children:Object(O.jsx)("div",{className:"loader loader--".concat(n[n[c]||n.default])})})}),g=(c(151),function(e){var t=e.title,c=e.margin,n=e.variant,a=e.isLink,r=e.href,s=e.onClick,i=e.isDisabled,o=e.isLoading,j=e.className,d={primary:"primary",secondary:"secondary",danger:"danger",warning:"warning",info:"info",success:"success"};return Object(O.jsx)("div",{className:"button__container button--".concat(j||""),children:a?Object(O.jsx)(m.b,{className:"button button__".concat(c,"Margin button__").concat(d[n]||d.primary),to:i?"":r,children:o?Object(O.jsx)(x,{}):Object(O.jsx)("span",{children:t})}):Object(O.jsx)("button",{className:"button button__".concat(c,"Margin button__").concat(d[n]||d.primary),onClick:s,disabled:i,children:o?Object(O.jsx)(x,{}):Object(O.jsx)("span",{children:t})})})}),p=(c(156),function(e){var t=e.placeholder,c=e.type,n=e.value,a=e.onChange,r=e.margin,s=e.isDisabled;return Object(O.jsx)("input",{className:"input input__".concat(r,"Margin"),placeholder:t,type:c,value:n,disabled:s,onChange:function(e){a&&a(e.target.value)}})}),v=(c(157),function(e){var t="dark"===e.variant?"dark":"default";return Object(O.jsx)("div",{className:"hr hr__".concat(t)})}),_=(c(158),function(e){var t=e.variant,c=e.children,n=e.isShadow,a=e.isMinHeight,r=e.backgroundImage,s={dark:"dark",default:"default"};return Object(O.jsx)("div",{className:"card card__".concat(s[t]||s.default," card__").concat(n?"shadow":""," card__").concat(a?"min_height":""," card__image card__image--").concat(r||""),children:c})}),w=(c(159),function(e){var t=e.children;return Object(O.jsx)("div",{className:"container",children:t})}),k=Object(u.b)({key:"loginState",default:!1}),y=Object(u.b)({key:"loading",default:!1}),N=Object(u.b)({key:"warning",default:""}),C=Object(u.b)({key:"success",default:""}),E=Object(u.b)({key:"info",default:""}),D=Object(u.b)({key:"error",default:""}),S=Object(u.b)({key:"credentialAtom",default:{username:"raghavdhingra",password:"qwerty1234"}}),L=(c(160),function(){var e=Object(u.c)(S),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(u.c)(k),s=Object(i.a)(r,2),d=s[0],m=s[1],x=Object(u.c)(y),E=Object(i.a)(x,2),L=E[0],I=E[1],q=Object(u.c)(D),M=Object(i.a)(q,2),T=(M[0],M[1]),H=Object(u.c)(C),R=Object(i.a)(H,2),A=(R[0],R[1]),F=Object(u.c)(N),P=Object(i.a)(F,2),W=(P[0],P[1]),J=Object(b.f)(),B=function(e,t){a(Object(j.a)(Object(j.a)({},c),{},Object(o.a)({},e,t)))};Object(n.useEffect)((function(){d&&J.replace("/dashboard")}),[J,d]);return Object(O.jsx)(w,{children:Object(O.jsx)(_,{children:Object(O.jsxs)(_,{variant:"dark",isShadow:!0,children:[Object(O.jsx)(f,{children:"Login"}),Object(O.jsx)(v,{}),Object(O.jsxs)(h,{children:[Object(O.jsx)(p,{placeholder:"Username",type:"text",isDisabled:L,value:c.username,onChange:function(e){return B("username",e)}}),Object(O.jsx)(p,{placeholder:"Password",isDisabled:L,type:"password",value:c.password,margin:"top",onChange:function(e){return B("password",e)}}),Object(O.jsx)(g,{isDisabled:L,isLoading:L,title:"Check In",margin:"top",onClick:function(){if(I(!0),W("Connection is Progress..."),c.username&&c.password){var e=l.a.connect("".concat("wss","://mqtt.raghavdhingra.com"),{username:c.username,password:c.password,protocol:"wss",port:"8083"});e.on("error",(function(){I(!1),T("Invalid Credentials"),m(!1)})),e.on("connect",(function(){I(!1),A("Connection Established"),m(!0)}))}else I(!1),T("Empty Credential"),m(!1)}})]})]})})})}),I=(c(161),function(e){var t=e.className,c=Object(u.c)(S),n=Object(i.a)(c,2),a=n[0],r=n[1],s=Object(u.c)(y),o=Object(i.a)(s,2),j=o[0],d=o[1],l=Object(u.c)(k),f=Object(i.a)(l,2),h=f[0],m=f[1],x=Object(u.c)(C),p=Object(i.a)(x,2),v=p[0],_=p[1],w=Object(b.f)();return Object(O.jsxs)("div",{className:"navbar ".concat(t||""),children:[Object(O.jsx)(g,{title:"Home",className:"not-center",onClick:function(){return w.push("/dashboard")},variant:"warning"}),Object(O.jsxs)("div",{className:"navbar__leftFlex",children:[Object(O.jsxs)("span",{className:"navbar__username",children:["\ud83c\udfe0 ",a.username]}),Object(O.jsx)(g,{title:"Logout",onClick:function(){h&&(r({username:"",password:""}),d(!1),m(!1),"Successfully Logged out"===v&&_("Successfully Logged out"))},isDisabled:j,isLoading:j,variant:"danger"})]})]})}),q=function(e){var t=e.children;return Object(O.jsxs)(w,{children:[Object(O.jsx)(I,{}),t]})},M=(c(162),function(e){var t=e.title,c=e.type,a=e.handleDismiss,r={info:"info",error:"error",warning:"warning",success:"success"};return Object(n.useEffect)((function(){a&&setTimeout((function(){a()}),2e3)}),[]),t?Object(O.jsx)("div",{className:"alert alert__".concat(r[c]||r.info),children:t}):null}),T=[{name:"Internet Car Remote",image:"car",key:"INTERNET_CAR_REMOTE",href:"/internet-car-remote"},{name:"Workspace Light Switch",image:"bulb",key:"WORKSPACE_LIGHT_SWITCH",href:"/workspace-light-switch"}],H=(c(163),function(e){var t=e.className;return Object(O.jsx)("div",{className:"app_list ".concat(t||""),children:T.map((function(e,t){return Object(O.jsxs)(_,{isShadow:!0,variant:t%3===0?"dark":"",isMinHeight:!0,backgroundImage:e.image,children:[Object(O.jsx)(f,{align:"center",children:e.name}),Object(O.jsx)(g,{title:"Connect",variant:t%3===0?"info":"secondary",href:"/dashboard".concat(e.href),isLink:!0})]},e.key)}))})}),R=(c(164),function(e){var t=e.className,c=e.isConnected;return Object(O.jsx)("div",{className:"point_status point_status--".concat(c?"connected":"not-connected"," ").concat(t||"")})}),A=null,F=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(u.c)(S),s=Object(i.a)(r,1)[0],o=Object(u.c)(y),j=Object(i.a)(o,2),d=(j[0],j[1]),b=Object(u.c)(D),h=Object(i.a)(b,2),m=(h[0],h[1]),x=Object(u.c)(C),g=Object(i.a)(x,2),p=(g[0],g[1]),v=Object(u.c)(N),k=Object(i.a)(v,2),E=(k[0],k[1]);return Object(n.useEffect)((function(){E("Connecting to Car...")}),[]),Object(n.useEffect)((function(){if(s.username&&s.password){d(!0);(A=l.a.connect("".concat("wss","://mqtt.raghavdhingra.com"),{username:s.username,password:s.password,protocol:"wss",port:"8083"})).on("connect",(function(){a(!0),d(!1),p("Connected to the Car")})),A.on("error",(function(){a(!1),d(!1),m("Disconnected from the Car")}))}else a(!1),d(!1),p("Error while connection")}),[s]),Object(O.jsx)(w,{children:Object(O.jsx)(_,{isShadow:!0,variant:"dark",children:Object(O.jsxs)(f,{children:[Object(O.jsx)(R,{isConnected:c})," YO"]})})})},P=function(){var e=Object(b.f)(),t=Object(b.g)(),c=Object(u.c)(k),a=Object(i.a)(c,1)[0],r=Object(u.c)(D),s=Object(i.a)(r,2),o=s[0],j=s[1],d=Object(u.c)(C),l=Object(i.a)(d,2),f=l[0],h=l[1],m=Object(u.c)(E),x=Object(i.a)(m,2),g=x[0],p=x[1],v=Object(u.c)(N),_=Object(i.a)(v,2),w=_[0],y=_[1];return Object(n.useEffect)((function(){a||"login"===t.pathname||e.push("/login")}),[a,e,t.pathname]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"alert__container",children:[o&&Object(O.jsx)(M,{type:"error",title:o,handleDismiss:function(){return j("")}}),g&&Object(O.jsx)(M,{type:"info",title:g,handleDismiss:function(){return p("")}}),w&&Object(O.jsx)(M,{type:"warning",title:w,handleDismiss:function(){return y("")}}),f&&Object(O.jsx)(M,{type:"success",title:f,handleDismiss:function(){return h("")}})]}),Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{path:"/login",exact:!0,children:Object(O.jsx)(L,{})}),Object(O.jsxs)(b.a,{path:"/dashboard",children:[Object(O.jsx)(b.a,{path:"/dashboard",exact:!0,children:Object(O.jsx)(q,{children:Object(O.jsx)(H,{className:"app_list__container"})})}),Object(O.jsx)(b.a,{path:"/dashboard/internet-car-remote",exact:!0,children:Object(O.jsx)(q,{children:Object(O.jsx)(F,{})})})]})]})]})};c(165);s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(u.a,{children:Object(O.jsx)(m.a,{children:Object(O.jsx)(P,{})})})}),document.getElementById("root"))},87:function(e,t){},89:function(e,t){}},[[166,1,2]]]);
//# sourceMappingURL=main.0f81cccb.chunk.js.map