(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{138:function(e,t,s){"use strict";s.r(t);var c,n=s(1),a=s(0),r=s(66),i=s.n(r),l=s(26),o=s(2),d=s(12),j=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),o=i[0],j=i[1];return Object(n.jsxs)("div",{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:[Object(n.jsx)("div",{className:"jumbotron d-flex align-items-center",style:{position:"absolute",minWidth:"100vw",minHeight:"18rem",top:"3%"},children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"display-4 px-4",children:"ChatBrat 2.0\ud83d\udc9a\ud83d\udc68\u200d\ud83d\udcbb"}),Object(n.jsx)("p",{className:"px-4",children:"A simple server based Web-Chat Application"})]})}),Object(n.jsx)("div",{className:"card border-success rounded",style:{width:"20rem",border:"3px solid",boxShadow:"5px 5px 10px #95f542"},children:Object(n.jsx)("div",{className:"card-body alert-success",children:Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"name",children:"Name"}),Object(n.jsx)("input",{type:"text",class:"form-control",id:"name","aria-describedby":"nameHelp",onChange:function(e){return c(e.target.value)}}),Object(n.jsx)("small",{id:"nameHelp",class:"form-text text-muted",children:"We'll never share your name with anyone else."})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"room",children:"Room"}),Object(n.jsx)("input",{type:"text",class:"form-control",id:"room","aria-describedby":"roomHelp",onChange:function(e){return j(e.target.value)}}),Object(n.jsx)("small",{id:"roomHelp",class:"form-text text-muted",children:"Please Copy the Room Name, for further sharing!"})]}),Object(n.jsx)(l.b,{onClick:function(e){return s&&o?null:e.preventDefault()},to:"/chat?name=".concat(s,"&room=").concat(o),children:Object(n.jsx)("button",{type:"submit",class:"btn btn-outline-success",children:"Dive into the Server"})})]})})})]})},m=s(71),b=s(68),u=s.n(b),x=s(69),h=s.n(x),O=function(e){var t=e.room;return Object(n.jsxs)("div",{className:"bg-success d-flex p-2 px-4 border-danger",style:{borderBottom:"3px solid"},children:[Object(n.jsxs)("div",{className:"display-4",style:{fontSize:"2rem"},children:["\u2744",t]}),Object(n.jsx)("div",{className:"display-5 align-self-center ml-auto",style:{fontSize:"1.5rem"},children:Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("span",{className:"badge badge-pill badge-danger p-2",children:"Exit \ud83e\udd14"})})})]})},f=function(e){var t=e.message,s=e.setMessage,c=e.sendMessage;return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{className:"m-2 d-flex flex-row",children:[Object(n.jsx)("input",{type:"text",value:t,placeholder:"Type a message...",className:"form-control m-1",style:{maxWidth:"80%"},id:"message",onKeyPress:function(e){return"Enter"===e.key?c(e):null},onChange:function(e){return s(e.target.value)}}),Object(n.jsx)("button",{onClick:function(e){return c(e)},className:"btn btn-success ml-auto m-1",style:{minWidth:"10%"},children:"Send\ud83e\udded"})]})})},p=s(70),v=s.n(p),g=s(44),y=s.n(g),N=function(e){var t=e.message,s=t.user,c=t.text,a=!1,r=e.name.trim().toLowerCase();return s===r&&(a=!0),a?Object(n.jsxs)("div",{className:"d-flex flex-row-reverse align-items-center",style:{fontSize:"0.8rem"},children:[Object(n.jsx)("p",{className:"text-secondary order-1",children:r}),Object(n.jsx)("div",{className:"badge-info p-2 m-1",style:{borderRadius:"10px",minHeight:"5%",minWidth:"10%"},children:Object(n.jsx)("p",{children:y.a.emojify(c)})})]}):Object(n.jsxs)("div",{className:"d-flex flex-row align-items-center",style:{fontSize:"0.8rem"},children:[Object(n.jsx)("div",{className:"badge-warning p-2 m-1",style:{borderRadius:"10px",minHeight:"5%",minwidth:"10%"},children:Object(n.jsx)("p",{children:y.a.emojify(c)})}),Object(n.jsx)("p",{className:"text-success",children:s})]})},w=function(e){var t=e.messages,s=e.name;return Object(n.jsx)("div",{style:{overflowY:"auto"},children:Object(n.jsx)(v.a,{children:t.map((function(e,t){return Object(n.jsx)("div",{children:Object(n.jsx)(N,{message:e,name:s})},t)}))})})},S=function(e){var t=e.users;return Object(n.jsxs)("div",{className:"alert-warning m-0 p-2",children:[Object(n.jsx)("div",{className:"alert-success",children:t?Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"People currently chatting:"}),Object(n.jsx)("div",{className:"d-flex",children:t.map((function(e){var t=e.name;return Object(n.jsxs)("div",{className:"",children:[t,"\xa0\xa0\xa0"]},t)}))})]}):null}),Object(n.jsx)("div",{className:"d-flex justify-content-center",children:"Made with \ud83e\udde1 by ap_darknight"})]})},C=function(e){var t=e.location,s=Object(a.useState)(""),r=Object(d.a)(s,2),i=r[0],l=r[1],o=Object(a.useState)(""),j=Object(d.a)(o,2),b=j[0],x=j[1],p=Object(a.useState)(""),v=Object(d.a)(p,2),g=v[0],y=v[1],N=Object(a.useState)(""),C=Object(d.a)(N,2),H=C[0],W=C[1],k=Object(a.useState)([]),M=Object(d.a)(k,2),z=M[0],D=M[1],E="https://chatbrat2.herokuapp.com/";Object(a.useEffect)((function(){var e=u.a.parse(t.search),s=e.name,n=e.room;c=h()(E),l(s),x(n),c.emit("join",{name:s,room:n},(function(e){}))}),[E,t.search]),Object(a.useEffect)((function(){c.on("message",(function(e){D([].concat(Object(m.a)(z),[e]))})),c.on("roomData",(function(e){var t=e.users;y(t)}))}),[z]);return console.log(H,z),Object(n.jsxs)("div",{class:"card m-0 p-0",style:{minWidth:"100vw",minHeight:"100vh"},children:[Object(n.jsx)("div",{className:"card-header p-0 m-0",children:Object(n.jsx)(O,{room:b})}),Object(n.jsx)("div",{className:"card-body p-1 pb-1 d-flex alert-info",children:Object(n.jsxs)("div",{className:"align-self-end p-0 m-0",style:{minWidth:"100%"},children:[Object(n.jsx)(w,{messages:z,name:i}),Object(n.jsx)(f,{message:H,setMessage:W,sendMessage:function(e){e.preventDefault(),H&&c.emit("sendMessage",H,(function(){return W("")}))}})]})}),Object(n.jsx)("div",{className:"card-text",children:Object(n.jsx)(S,{users:g})})]})},H=function(){return Object(n.jsxs)(l.a,{children:[Object(n.jsx)(o.a,{path:"/",exact:!0,component:j}),Object(n.jsx)(o.a,{path:"/chat",component:C})]})};i.a.render(Object(n.jsx)(H,{}),document.querySelector("#root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.d5e17ee0.chunk.js.map