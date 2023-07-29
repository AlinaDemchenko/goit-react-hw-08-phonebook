"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[385],{6916:function(t,e,n){n.d(e,{P1:function(){return c}});var o="NOT_FOUND";var r=function(t,e){return t===e};function a(t,e){var n="object"===typeof e?e:{equalityCheck:e},a=n.equalityCheck,i=void 0===a?r:a,s=n.maxSize,c=void 0===s?1:s,u=n.resultEqualityCheck,l=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var o=e.length,r=0;r<o;r++)if(!t(e[r],n[r]))return!1;return!0}}(i),f=1===c?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:o},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(t,e){var n=[];function r(t){var r=n.findIndex((function(n){return e(t,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return o}return{get:r,put:function(e,a){r(e)===o&&(n.unshift({key:e,value:a}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,l);function d(){var e=f.get(arguments);if(e===o){if(e=t.apply(null,arguments),u){var n=f.getEntries(),r=n.find((function(t){return u(t.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return d.clearCache=function(){return f.clear()},d}function i(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function s(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var r=function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];var a,s=0,c={memoizeOptions:void 0},u=o.pop();if("object"===typeof u&&(c=u,u=o.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,f=l.memoizeOptions,d=void 0===f?n:f,p=Array.isArray(d)?d:[d],m=i(o),v=t.apply(void 0,[function(){return s++,u.apply(null,arguments)}].concat(p)),y=t((function(){for(var t=[],e=m.length,n=0;n<e;n++)t.push(m[n].apply(null,arguments));return a=v.apply(null,t)}));return Object.assign(y,{resultFunc:u,memoizedResultFunc:v,dependencies:m,lastResult:function(){return a},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),y};return r}var c=s(a)},5462:function(){},8174:function(t,e,n){n.d(e,{Ix:function(){return A},LG:function(){return x},Am:function(){return H}});var o=n(4942),r=n(9439),a=n(1413);function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=n(3433),c=n(2791);function u(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=u(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}var l=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=u(t))&&(o&&(o+=" "),o+=e);return o},f=["theme","type"],d=["delay","staleId"],p=function(t){return"number"==typeof t&&!isNaN(t)},m=function(t){return"string"==typeof t},v=function(t){return"function"==typeof t},y=function(t){return m(t)||v(t)?t:null},g=function(t){return(0,c.isValidElement)(t)||m(t)||v(t)||p(t)};function h(t){var e=t.enter,n=t.exit,o=t.appendPosition,r=void 0!==o&&o,a=t.collapse,i=void 0===a||a,u=t.collapseDuration,l=void 0===u?300:u;return function(t){var o=t.children,a=t.position,u=t.preventExitTransition,f=t.done,d=t.nodeRef,p=t.isIn,m=r?"".concat(e,"--").concat(a):e,v=r?"".concat(n,"--").concat(a):n,y=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var t,e=d.current,n=m.split(" "),o=function t(o){var r;o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===y.current&&"animationcancel"!==o.type&&(r=e.classList).remove.apply(r,(0,s.Z)(n)))};(t=e.classList).add.apply(t,(0,s.Z)(n)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var t=d.current,e=function e(){t.removeEventListener("animationend",e),i?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,r=t.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(e,n)}))}))}(t,f,l):f()};p||(u?e():(y.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[p]),c.createElement(c.Fragment,null,o)}}function E(t,e){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}var T={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,s.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(r)}))}},b=function(t){var e=t.theme,n=t.type,o=i(t,f);return c.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},C={info:function(t){return c.createElement(b,(0,a.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(b,(0,a.Z)({},t),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(b,(0,a.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(b,(0,a.Z)({},t),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function I(t){var e=(0,c.useReducer)((function(t){return t+1}),0),n=(0,r.Z)(e,2)[1],o=(0,c.useState)([]),u=(0,r.Z)(o,2),l=u[0],f=u[1],h=(0,c.useRef)(null),b=(0,c.useRef)(new Map).current,I=function(t){return-1!==l.indexOf(t)},_=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:I,getToast:function(t){return b.get(t)}}).current;function O(t){var e=t.containerId;!_.props.limit||e&&_.containerId!==e||(_.count-=_.queue.length,_.queue=[])}function Z(t){f((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function L(){var t=_.queue.shift();N(t.toastContent,t.toastProps,t.staleId)}function w(t,e){var o=e.delay,s=e.staleId,u=i(e,d);if(g(t)&&!function(t){return!h.current||_.props.enableMultiContainer&&t.containerId!==_.props.containerId||b.has(t.toastId)&&null==t.updateId}(u)){var l=u.toastId,f=u.updateId,I=u.data,O=_.props,w=function(){return Z(l)},R=null==f;R&&_.count++;var k,x,A=(0,a.Z)((0,a.Z)((0,a.Z)({},O),{},{style:O.toastStyle,key:_.toastKey++},Object.fromEntries(Object.entries(u).filter((function(t){var e=(0,r.Z)(t,2);e[0];return null!=e[1]})))),{},{toastId:l,updateId:f,data:I,closeToast:w,isIn:!1,className:y(u.className||O.toastClassName),bodyClassName:y(u.bodyClassName||O.bodyClassName),progressClassName:y(u.progressClassName||O.progressClassName),autoClose:!u.isLoading&&(k=u.autoClose,x=O.autoClose,!1===k||p(k)&&k>0?k:x),deleteToast:function(){var t=E(b.get(l),"removed");b.delete(l),T.emit(4,t);var e=_.queue.length;if(_.count=null==l?_.count-_.displayedToast:_.count-1,_.count<0&&(_.count=0),e>0){var o=null==l?_.props.limit:1;if(1===e||1===o)_.displayedToast++,L();else{var r=o>e?e:o;_.displayedToast=r;for(var a=0;a<r;a++)L()}}else n()}});A.iconOut=function(t){var e=t.theme,n=t.type,o=t.isLoading,r=t.icon,a=null,i={theme:e,type:n};return!1===r||(v(r)?a=r(i):(0,c.isValidElement)(r)?a=(0,c.cloneElement)(r,i):m(r)||p(r)?a=r:o?a=C.spinner():function(t){return t in C}(n)&&(a=C[n](i))),a}(A),v(u.onOpen)&&(A.onOpen=u.onOpen),v(u.onClose)&&(A.onClose=u.onClose),A.closeButton=O.closeButton,!1===u.closeButton||g(u.closeButton)?A.closeButton=u.closeButton:!0===u.closeButton&&(A.closeButton=!g(O.closeButton)||O.closeButton);var M=t;(0,c.isValidElement)(t)&&!m(t.type)?M=(0,c.cloneElement)(t,{closeToast:w,toastProps:A,data:I}):v(t)&&(M=t({closeToast:w,toastProps:A,data:I})),O.limit&&O.limit>0&&_.count>O.limit&&R?_.queue.push({toastContent:M,toastProps:A,staleId:s}):p(o)?setTimeout((function(){N(M,A,s)}),o):N(M,A,s)}}function N(t,e,n){var o=e.toastId;n&&b.delete(n);var r={content:t,props:e};b.set(o,r),f((function(t){return[].concat((0,s.Z)(t),[o]).filter((function(t){return t!==n}))})),T.emit(4,E(r,null==r.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return _.containerId=t.containerId,T.cancelEmit(3).on(0,w).on(1,(function(t){return h.current&&Z(t)})).on(5,O).emit(2,_),function(){b.clear(),T.emit(3,_)}}),[]),(0,c.useEffect)((function(){_.props=t,_.isToastActive=I,_.displayedToast=l.length})),{getToastToRender:function(e){var n=new Map,o=Array.from(b.values());return t.newestOnTop&&o.reverse(),o.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:h,isToastActive:I}}function _(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function O(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function Z(t){var e=(0,c.useState)(!1),n=(0,r.Z)(e,2),o=n[0],a=n[1],i=(0,c.useState)(!1),s=(0,r.Z)(i,2),u=s[0],l=s[1],f=(0,c.useRef)(null),d=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(t),m=t.autoClose,y=t.pauseOnHover,g=t.closeToast,h=t.onClick,E=t.closeOnClick;function T(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",Z),document.addEventListener("mouseup",L),document.addEventListener("touchmove",Z),document.addEventListener("touchend",L);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=_(e.nativeEvent),d.y=O(e.nativeEvent),"x"===t.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function b(e){if(d.boundingRect){var n=d.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=o&&d.y<=r?I():C()}}function C(){a(!0)}function I(){a(!1)}function Z(e){var n=f.current;d.canDrag&&n&&(d.didMove=!0,o&&I(),d.x=_(e),d.y=O(e),d.delta="x"===t.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function L(){document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",L);var e=f.current;if(d.canDrag&&d.didMove&&e){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,c.useEffect)((function(){p.current=t})),(0,c.useEffect)((function(){return f.current&&f.current.addEventListener("d",C,{once:!0}),v(t.onOpen)&&t.onOpen((0,c.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;v(t.onClose)&&t.onClose((0,c.isValidElement)(t.children)&&t.children.props)}}),[]),(0,c.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||I(),window.addEventListener("focus",C),window.addEventListener("blur",I)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",I))}}),[t.pauseOnFocusLoss]);var w={onMouseDown:T,onTouchStart:T,onMouseUp:b,onTouchEnd:b};return m&&y&&(w.onMouseEnter=I,w.onMouseLeave=C),E&&(w.onClick=function(t){h&&h(t),d.canCloseOnClick&&g()}),{playToast:C,pauseToast:I,isRunning:o,preventExitTransition:u,toastRef:f,eventHandlers:w}}function L(t){var e=t.closeToast,n=t.theme,o=t.ariaLabel,r=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function w(t){var e=t.delay,n=t.isRunning,r=t.closeToast,i=t.type,s=void 0===i?"default":i,u=t.hide,f=t.className,d=t.style,p=t.controlledProgress,m=t.progress,y=t.rtl,g=t.isIn,h=t.theme,E=u||p&&0===m,T=(0,a.Z)((0,a.Z)({},d),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:E?0:1});p&&(T.transform="scaleX(".concat(m,")"));var b=l("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":y}),C=v(f)?f({rtl:y,type:s,defaultClassName:b}):l(b,f);return c.createElement("div",(0,o.Z)({role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:C,style:T},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){g&&r()}))}var N=function(t){var e=Z(t),n=e.isRunning,o=e.preventExitTransition,r=e.toastRef,i=e.eventHandlers,s=t.closeButton,u=t.children,f=t.autoClose,d=t.onClick,p=t.type,m=t.hideProgressBar,y=t.closeToast,g=t.transition,h=t.position,E=t.className,T=t.style,b=t.bodyClassName,C=t.bodyStyle,I=t.progressClassName,_=t.progressStyle,O=t.updateId,N=t.role,R=t.progress,k=t.rtl,x=t.toastId,A=t.deleteToast,M=t.isIn,P=t.isLoading,z=t.iconOut,B=t.closeOnClick,D=t.theme,S=l("Toastify__toast","Toastify__toast-theme--".concat(D),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":B}),F=v(E)?E({rtl:k,position:h,type:p,defaultClassName:S}):l(S,E),j=!!R||!f,q={closeToast:y,type:p,theme:D},H=null;return!1===s||(H=v(s)?s(q):(0,c.isValidElement)(s)?(0,c.cloneElement)(s,q):L(q)),c.createElement(g,{isIn:M,done:A,position:h,preventExitTransition:o,nodeRef:r},c.createElement("div",(0,a.Z)((0,a.Z)({id:x,onClick:d,className:F},i),{},{style:T,ref:r}),c.createElement("div",(0,a.Z)((0,a.Z)({},M&&{role:N}),{},{className:v(b)?b({type:p}):l("Toastify__toast-body",b),style:C}),null!=z&&c.createElement("div",{className:l("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},z),c.createElement("div",null,u)),H,c.createElement(w,(0,a.Z)((0,a.Z)({},O&&!j?{key:"pb-".concat(O)}:{}),{},{rtl:k,theme:D,delay:f,isRunning:n,isIn:M,closeToast:y,hide:m,type:p,style:_,className:I,controlledProgress:j,progress:R||0}))))},R=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},k=h(R("bounce",!0)),x=(h(R("slide",!0)),h(R("zoom"))),A=(h(R("flip")),(0,c.forwardRef)((function(t,e){var n=I(t),o=n.getToastToRender,r=n.containerRef,i=n.isToastActive,s=t.className,u=t.style,f=t.rtl,d=t.containerId;function p(t){var e=l("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":f});return v(s)?s({position:t,rtl:f,defaultClassName:e}):l(e,y(s))}return(0,c.useEffect)((function(){e&&(e.current=r.current)}),[]),c.createElement("div",{ref:r,className:"Toastify",id:d},o((function(t,e){var n=e.length?(0,a.Z)({},u):(0,a.Z)((0,a.Z)({},u),{},{pointerEvents:"none"});return c.createElement("div",{className:p(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var o=t.content,r=t.props;return c.createElement(N,(0,a.Z)((0,a.Z)({},r),{},{isIn:i(r.toastId),style:(0,a.Z)((0,a.Z)({},r.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(r.key)}),o)})))})))})));A.displayName="ToastContainer",A.defaultProps={position:"top-right",transition:k,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,P=new Map,z=[],B=1;function D(){return""+B++}function S(t){return t&&(m(t.toastId)||p(t.toastId))?t.toastId:D()}function F(t,e){return P.size>0?T.emit(0,t,e):z.push({content:t,options:e}),e.toastId}function j(t,e){return(0,a.Z)((0,a.Z)({},e),{},{type:e&&e.type||t,toastId:S(e)})}function q(t){return function(e,n){return F(e,j(t,n))}}function H(t,e){return F(t,j("default",e))}H.loading=function(t,e){return F(t,j("default",(0,a.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},H.promise=function(t,e,n){var o,r=e.pending,i=e.error,s=e.success;r&&(o=m(r)?H.loading(r,n):H.loading(r.render,(0,a.Z)((0,a.Z)({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(t,e,r){if(null!=e){var i=(0,a.Z)((0,a.Z)((0,a.Z)({type:t},c),n),{},{data:r}),s=m(e)?{render:e}:e;return o?H.update(o,(0,a.Z)((0,a.Z)({},i),s)):H(s.render,(0,a.Z)((0,a.Z)({},i),s)),r}H.dismiss(o)},l=v(t)?t():t;return l.then((function(t){return u("success",s,t)})).catch((function(t){return u("error",i,t)})),l},H.success=q("success"),H.info=q("info"),H.error=q("error"),H.warning=q("warning"),H.warn=H.warning,H.dark=function(t,e){return F(t,j("default",(0,a.Z)({theme:"dark"},e)))},H.dismiss=function(t){P.size>0?T.emit(1,t):z=z.filter((function(e){return null!=t&&e.options.toastId!==t}))},H.clearWaitingQueue=function(t){return void 0===t&&(t={}),T.emit(5,t)},H.isActive=function(t){var e=!1;return P.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},H.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,o=P.get(n||M);return o&&o.getToast(t)}(t,e);if(n){var o=n.props,r=n.content,i=(0,a.Z)((0,a.Z)((0,a.Z)({delay:100},o),e),{},{toastId:e.toastId||t,updateId:D()});i.toastId!==t&&(i.staleId=t);var s=i.render||r;delete i.render,F(s,i)}}),0)},H.done=function(t){H.update(t,{progress:1})},H.onChange=function(t){return T.on(4,t),function(){T.off(4,t)}},H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},T.on(2,(function(t){M=t.containerId||t,P.set(M,t),z.forEach((function(t){T.emit(0,t.content,t.options)})),z=[]})).on(3,(function(t){P.delete(t.containerId||t),0===P.size&&T.off(0).off(1).off(5)}))}}]);
//# sourceMappingURL=385.af3c7487.chunk.js.map