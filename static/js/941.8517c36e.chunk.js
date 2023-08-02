"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[941],{3981:function(n,o,t){t.r(o),t.d(o,{default:function(){return F}});var e,i,a,A,r,g=t(8560),c=t(2286),p=t(168),d=t(5867),C=t.p+"static/media/vibration.05330a858cc4b508ad8f.png",s=d.ZP.div(e||(e=(0,p.Z)(['\n  width: 100vw;\n  height: 100%;\n  padding: 20px 0;\n\n  div.cover {\n    max-width: 80%;\n    height: 80%;\n    padding: 50px;\n    background-color: #fff;\n    border-radius: 30px;\n    margin: 0 auto;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  }\n\n  div.wrapper {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    position: relative;\n  }\n\n  h1 {\n    display: inline-block;\n    margin-bottom: 20px;\n    margin-right: 76.5px;\n  }\n\n  h1::before {\n    content:".";\n    width: 42px;\n    height: 42px;\n    opacity: 0;\n    display: inline-block;\n    position: absolute;\n    z-index: 1;\n    top: 9px;\n    left: 13px;\n    background-image: url(',");\n    background-color: transparent;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    color: transparent;\n    animation: tada 1250ms ease-in-out 1500ms;\n  }\n\n  img {\n    position: relative;\n    width: 50px;\n    display: inline;\n    margin: 0 0 20px 16px;\n    animation: tada 1250ms ease-in-out 1700ms;\n    z-index: 2;\n  }\n"])),C),l=d.ZP.form(i||(i=(0,p.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 20px;\n\n  input {\n    height: 28px;\n    width: 272.5px;\n    padding: 2px 10px;\n    border: none;\n    border-radius: 5px;\n    margin-right: 18px;\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 6px 14px 0px;\n    font-family: 'IBM Plex Mono';\n    font-size: calc(12px + 3 * (100vw - 320px) / 930);\n    color: #535353;\n  }\n\n  input.name {\n    margin-right: 20px;\n  }\n\n  input:focus {\n    outline: 1px solid #fff500;\n  }\n\n  input::placeholder {\n    color: #797979;\n  }\n\n  button {\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    border: none;\n    background-color: #fff500;\n    border-radius: 50%;\n    color: white;\n    font-weight: bold;\n    transform: rotate(45deg);\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 14px 0px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 90%;\n    /* transition: color 250ms cubic-bezier(0.250, 0.460, 0.450, 0.940), transform 250ms cubic-bezier(0.250, 0.460, 0.450, 0.940); */\n  }\n\n  button:hover {\n    /* color: white; */\n    transform: scale(1.2) rotate(45deg);\n  }\n"]))),I=t(184),x=function(n){var o=n.onAddContact;return(0,I.jsxs)(l,{onSubmit:function(n){n.preventDefault();var t={name:n.currentTarget.name.value,number:n.currentTarget.number.value};o(t),n.currentTarget.reset()},children:[(0,I.jsx)("input",{className:"name",type:"text",name:"name",placeholder:"new contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,I.jsx)("input",{type:"tel",placeholder:"number",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,I.jsx)("button",{type:"submit",children:(0,I.jsx)("span",{children:"\u2715"})})]})},m=t(3855),h=d.ZP.ul(a||(a=(0,p.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n\n  div.animated {\n    width: auto;\n    height: auto;\n    border: none;\n    box-shadow: none;\n  }\n"]))),u=d.ZP.li(A||(A=(0,p.Z)(["\n  text-align: left;\n  height: 28px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n\n  p {\n    padding: 2px 5px;\n    display: inline-flex;\n    align-items: baseline;\n    font-size: calc(12px + 3 * (100vw - 320px) / 930);\n    width: 100%;\n    margin-bottom: 0;\n    font-family: 'IBM Plex Mono';\n    color: #535353;\n  }\n\n  /* p::after {\n    content: '';\n    margin-left: 10px;\n    display: inline-block;\n    border-bottom: 2px dotted #bbbbbb;\n    width: 5px;\n    flex-grow: 2;\n  } */\n\n  p > span {\n    color: #fff500;\n    margin-right: 20px;\n  }\n\n  a {\n    display: inline-block;\n    color: black;\n    text-decoration: none;\n    width: 565px;\n    height: 100%;\n    padding: 0 15px;\n    margin-right: 18px;\n    border-radius: 5px;\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 6px 14px 0px;\n    transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94),\n      box-shadow 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  }\n\n  a:hover {\n    transform: scaleY(1.1);\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 12px 20px,\n      rgba(0, 0, 0, 0.22) 0px 6px 6px;\n  }\n\n  button {\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    background-color: transparent;\n    padding: 0;\n    border: none;\n    color: black;\n    font-size: 90%;\n    font-weight: bold;\n    display: inline;\n    transition: transform 250ms ease;\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 14px 0px;\n    border-radius: 50%;\n  }\n\n  button:hover {\n    transform: scale(1.2);\n  }\n"]))),b=t(5872),j=function(n){var o=n.contactItemData,t=n.index,e=n.onDeleteContact,i=(0,b.q_)({from:{opacity:0,transform:"perspective(400px) rotateX(90deg)"},to:{opacity:1,transform:"perspective(400px) rotateX(0deg)"},config:{duration:100,mass:1,tension:280,friction:20},delay:50*t});return(0,I.jsx)(b.q.div,{style:i,children:(0,I.jsxs)(u,{children:[(0,I.jsx)("a",{href:"tel:+".concat(o.number),children:(0,I.jsxs)("p",{children:[(0,I.jsx)("span",{children:"\u25cf"}),o.name,": ",o.number]})}),(0,I.jsx)("button",{type:"button",onClick:function(){return e(o.id)},children:"\u2715"})]})})},R=function(n){var o=n.onDeleteContact,t=(0,m.v9)(c.DI);return(0,I.jsx)(h,{children:t.map((function(n,t){return(0,I.jsx)(j,{onDeleteContact:o,contactItemData:n,index:t},n.id)}))})},y=t(9439),k=d.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  max-height: 28px;\n  min-width: 310.5px;\n  height: 28px;\n  text-align: left;\n\n  input {\n    opacity: 1;\n    width: 200px;\n    height: 28px;\n    padding: 2px 10px;\n    border: 2px solid #fff500;\n    border-radius: 15px;\n    margin-right: 26px;\n    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 6px 14px 0px; */\n    font-family: 'IBM Plex Mono';\n    font-size: calc(12px + 3 * (100vw - 320px) / 930);\n    color: #535353;\n    animation: slide-in-fwd-center 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)\n      both;\n  }\n\n  input:focus {\n    /* outline: 1px solid #fff500; */\n    outline: none;\n  }\n\n  button {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border: 0;\n    background-color: transparent;\n    background-image: url(",");\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    cursor: pointer;\n    outline: none;\n    vertical-align: super;\n  }\n\n  button:hover {\n    transform: scale(1.1);\n  }\n\n  span {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n"])),"data:image/png;base64,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"),w=t(2791);var v,G=function(n){var o=n.onFilter,t=(0,m.v9)(c.AD),e=(0,w.useState)(!1),i=(0,y.Z)(e,2),a=i[0],A=i[1];return(0,I.jsxs)(k,{children:[a&&(0,I.jsx)("input",{onChange:function(n){o(n.target.value)},value:t,type:"text"}),(0,I.jsx)("button",{type:"button",onClick:function(){A(!a)},children:(0,I.jsx)("span",{children:"Filter"})})]})},Y=d.ZP.button(v||(v=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 60px;\n  border-radius: 15px;\n  border: 2px solid #fff500;\n  background-color: white;\n  margin-left: auto;\n  font-size: 17px;\n  padding: 12px;\n  overflow: hidden;\n\n  &:hover{\n    letter-spacing: 0.1em;\n  }\n  \n  span {\n    display: inline-block;\n    margin-left: 30px;\n    transform: scaleX(1.8) scaleY(1.2);\n    display: inline-block;\n    font-size: 25px;\n    font-weight: bold;\n    color: #fff500;\n  }\n\n  &:hover span{\n    margin-left: 20px;\n  }\n"]))),K=function(n){var o=n.onLogout;return(0,I.jsxs)(Y,{type:"button",onClick:function(){return o()},children:["Logout",(0,I.jsx)("span",{className:"right",children:"\u2192"})]})},Z=function(n){var o=n.onDeleteContact,t=n.onAddContact,e=n.onLogout,i=n.onFilter,a=(0,g.v9)(c.Af);return(0,I.jsx)(s,{children:(0,I.jsxs)("div",{className:"cover",children:[(0,I.jsxs)("div",{className:"wrapper",children:[(0,I.jsx)("img",{src:"data:image/png;base64,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",alt:"phone logo"}),(0,I.jsxs)("h1",{children:["Contact",(0,I.jsx)("span",{children:"."})]}),(0,I.jsx)(G,{onFilter:i}),(0,I.jsx)(K,{onLogout:e})]}),(0,I.jsx)(x,{onAddContact:t}),a.length>0&&(0,I.jsx)(R,{onDeleteContact:o})]})})},H=t(9085),f=t(4642),E=t(3929),F=function(){var n=(0,m.v9)(c.Af),o=(0,m.I0)();(0,w.useEffect)((function(){o((0,f.m$)())}),[o]);return(0,I.jsx)("main",{children:(0,I.jsx)(Z,{onDeleteContact:function(n){o((0,f.xX)(n))},onAddContact:function(t){n.find((function(n){return t.name===n.name}))?H.Am.info("".concat(t.name," is already in your contacts")):o((0,f.je)(t))},onLogout:function(){o((0,f.qN)())},onFilter:function(n){o((0,E.T)(n))}})})}}}]);
//# sourceMappingURL=941.8517c36e.chunk.js.map