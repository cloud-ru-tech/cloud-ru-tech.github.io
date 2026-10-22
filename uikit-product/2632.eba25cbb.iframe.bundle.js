"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2632],{"./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/helpers.js"(C,A,r){r.d(A,{XM:()=>es});var n=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),P=r("./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=r("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");const c=e=>typeof e=="number"&&!isNaN(e),T=e=>typeof e=="string",M=e=>typeof e=="function",De=e=>T(e)||M(e)?e:null,it=e=>(0,i.isValidElement)(e)||T(e)||M(e)||c(e);function It(e,a,o){o===void 0&&(o=300);const{scrollHeight:t,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=t+"px",s.transition=`all ${o}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(a,o)})})}function Qe(e){let{enter:a,exit:o,appendPosition:t=!1,collapse:s=!0,collapseDuration:d=300}=e;return function(l){let{children:u,position:p,preventExitTransition:y,done:_,nodeRef:O,isIn:E,playToast:S}=l;const f=t?`${a}--${p}`:a,b=t?`${o}--${p}`:o,I=(0,i.useRef)(0);return(0,i.useLayoutEffect)(()=>{const w=O.current,h=f.split(" "),m=j=>{j.target===O.current&&(S(),w.removeEventListener("animationend",m),w.removeEventListener("animationcancel",m),I.current===0&&j.type!=="animationcancel"&&w.classList.remove(...h))};w.classList.add(...h),w.addEventListener("animationend",m),w.addEventListener("animationcancel",m)},[]),(0,i.useEffect)(()=>{const w=O.current,h=()=>{w.removeEventListener("animationend",h),s?It(w,_,d):_()};E||(y?h():(I.current=1,w.className+=` ${b}`,w.addEventListener("animationend",h)))},[E]),i.createElement(i.Fragment,null,u)}}function mt(e,a){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:a}:{}}const B=new Map;let Ne=[];const lt=new Set,Nt=e=>lt.forEach(a=>a(e)),ft=()=>B.size>0;function vt(e,a){var o;if(a)return!((o=B.get(a))==null||!o.isToastActive(e));let t=!1;return B.forEach(s=>{s.isToastActive(e)&&(t=!0)}),t}function gt(e,a){it(e)&&(ft()||Ne.push({content:e,options:a}),B.forEach(o=>{o.buildToast(e,a)}))}function bt(e,a){B.forEach(o=>{a!=null&&a!=null&&a.containerId?(a==null?void 0:a.containerId)===o.id&&o.toggle(e,a==null?void 0:a.id):o.toggle(e,a==null?void 0:a.id)})}function Bt(e){const{subscribe:a,getSnapshot:o,setProps:t}=(0,i.useRef)((function(d){const l=d.containerId||1;return{subscribe(u){const p=(function(_,O,E){let S=1,f=0,b=[],I=[],w=[],h=O;const m=new Map,j=new Set,F=()=>{w=Array.from(m.values()),j.forEach(v=>v())},Y=v=>{I=v==null?[]:I.filter(z=>z!==v),F()},N=v=>{const{toastId:z,onOpen:W,updateId:ne,children:le}=v.props,Ae=ne==null;v.staleId&&m.delete(v.staleId),m.set(z,v),I=[...I,v.props.toastId].filter(de=>de!==v.staleId),F(),E(mt(v,Ae?"added":"updated")),Ae&&M(W)&&W((0,i.isValidElement)(le)&&le.props)};return{id:_,props:h,observe:v=>(j.add(v),()=>j.delete(v)),toggle:(v,z)=>{m.forEach(W=>{z!=null&&z!==W.props.toastId||M(W.toggle)&&W.toggle(v)})},removeToast:Y,toasts:m,clearQueue:()=>{f-=b.length,b=[]},buildToast:(v,z)=>{if((ee=>{let{containerId:H,toastId:G,updateId:te}=ee;const me=H?H!==_:_!==1,Re=m.has(G)&&te==null;return me||Re})(z))return;const{toastId:W,updateId:ne,data:le,staleId:Ae,delay:de}=z,Pe=()=>{Y(W)},rt=ne==null;rt&&f++;const re={...h,style:h.toastStyle,key:S++,...Object.fromEntries(Object.entries(z).filter(ee=>{let[H,G]=ee;return G!=null})),toastId:W,updateId:ne,data:le,closeToast:Pe,isIn:!1,className:De(z.className||h.toastClassName),bodyClassName:De(z.bodyClassName||h.bodyClassName),progressClassName:De(z.progressClassName||h.progressClassName),autoClose:!z.isLoading&&(ce=z.autoClose,Ce=h.autoClose,ce===!1||c(ce)&&ce>0?ce:Ce),deleteToast(){const ee=m.get(W),{onClose:H,children:G}=ee.props;M(H)&&H((0,i.isValidElement)(G)&&G.props),E(mt(ee,"removed")),m.delete(W),f--,f<0&&(f=0),b.length>0?N(b.shift()):F()}};var ce,Ce;re.closeButton=h.closeButton,z.closeButton===!1||it(z.closeButton)?re.closeButton=z.closeButton:z.closeButton===!0&&(re.closeButton=!it(h.closeButton)||h.closeButton);let Ie=v;(0,i.isValidElement)(v)&&!T(v.type)?Ie=(0,i.cloneElement)(v,{closeToast:Pe,toastProps:re,data:le}):M(v)&&(Ie=v({closeToast:Pe,toastProps:re,data:le}));const _e={content:Ie,props:re,staleId:Ae};h.limit&&h.limit>0&&f>h.limit&&rt?b.push(_e):c(de)?setTimeout(()=>{N(_e)},de):N(_e)},setProps(v){h=v},setToggle:(v,z)=>{m.get(v).toggle=z},isToastActive:v=>I.some(z=>z===v),getSnapshot:()=>h.newestOnTop?w.reverse():w}})(l,d,Nt);B.set(l,p);const y=p.observe(u);return Ne.forEach(_=>gt(_.content,_.options)),Ne=[],()=>{y(),B.delete(l)}},setProps(u){var p;(p=B.get(l))==null||p.setProps(u)},getSnapshot(){var u;return(u=B.get(l))==null?void 0:u.getSnapshot()}}})(e)).current;t(e);const s=(0,i.useSyncExternalStore)(a,o,o);return{getToastToRender:function(d){if(!s)return[];const l=new Map;return s.forEach(u=>{const{position:p}=u.props;l.has(p)||l.set(p,[]),l.get(p).push(u)}),Array.from(l,u=>d(u[0],u[1]))},isToastActive:vt,count:s==null?void 0:s.length}}function Mt(e){const[a,o]=(0,i.useState)(!1),[t,s]=(0,i.useState)(!1),d=(0,i.useRef)(null),l=(0,i.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:u,pauseOnHover:p,closeToast:y,onClick:_,closeOnClick:O}=e;var E,S;function f(){o(!0)}function b(){o(!1)}function I(m){const j=d.current;l.canDrag&&j&&(l.didMove=!0,a&&b(),l.delta=e.draggableDirection==="x"?m.clientX-l.start:m.clientY-l.start,l.start!==m.clientX&&(l.canCloseOnClick=!1),j.style.transform=`translate3d(${e.draggableDirection==="x"?`${l.delta}px, var(--y)`:`0, calc(${l.delta}px + var(--y))`},0)`,j.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function w(){document.removeEventListener("pointermove",I),document.removeEventListener("pointerup",w);const m=d.current;if(l.canDrag&&l.didMove&&m){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return s(!0),e.closeToast(),void e.collapseAll();m.style.transition="transform 0.2s, opacity 0.2s",m.style.removeProperty("transform"),m.style.removeProperty("opacity")}}(S=B.get((E={id:e.toastId,containerId:e.containerId,fn:o}).containerId||1))==null||S.setToggle(E.id,E.fn),(0,i.useEffect)(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||b(),window.addEventListener("focus",f),window.addEventListener("blur",b),()=>{window.removeEventListener("focus",f),window.removeEventListener("blur",b)}},[e.pauseOnFocusLoss]);const h={onPointerDown:function(m){if(e.draggable===!0||e.draggable===m.pointerType){l.didMove=!1,document.addEventListener("pointermove",I),document.addEventListener("pointerup",w);const j=d.current;l.canCloseOnClick=!0,l.canDrag=!0,j.style.transition="none",e.draggableDirection==="x"?(l.start=m.clientX,l.removalDistance=j.offsetWidth*(e.draggablePercent/100)):(l.start=m.clientY,l.removalDistance=j.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(m){const{top:j,bottom:F,left:Y,right:N}=d.current.getBoundingClientRect();m.nativeEvent.type!=="touchend"&&e.pauseOnHover&&m.clientX>=Y&&m.clientX<=N&&m.clientY>=j&&m.clientY<=F?b():f()}};return u&&p&&(h.onMouseEnter=b,e.stacked||(h.onMouseLeave=f)),O&&(h.onClick=m=>{_&&_(m),l.canCloseOnClick&&y()}),{playToast:f,pauseToast:b,isRunning:a,preventExitTransition:t,toastRef:d,eventHandlers:h}}function Xt(e){let{delay:a,isRunning:o,closeToast:t,type:s="default",hide:d,className:l,style:u,controlledProgress:p,progress:y,rtl:_,isIn:O,theme:E}=e;const S=d||p&&y===0,f={...u,animationDuration:`${a}ms`,animationPlayState:o?"running":"paused"};p&&(f.transform=`scaleX(${y})`);const b=(0,x.A)("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${E}`,`Toastify__progress-bar--${s}`,{"Toastify__progress-bar--rtl":_}),I=M(l)?l({rtl:_,type:s,defaultClassName:b}):(0,x.A)(b,l),w={[p&&y>=1?"onTransitionEnd":"onAnimationEnd"]:p&&y<1?null:()=>{O&&t()}};return i.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":S},i.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${E} Toastify__progress-bar--${s}`}),i.createElement("div",{role:"progressbar","aria-hidden":S?"true":"false","aria-label":"notification timer",className:I,style:f,...w}))}let Lt=1;const yt=()=>""+Lt++;function Rt(e){return e&&(T(e.toastId)||c(e.toastId))?e.toastId:yt()}function Be(e,a){return gt(e,a),a.toastId}function Ue(e,a){return{...a,type:a&&a.type||e,toastId:Rt(a)}}function We(e){return(a,o)=>Be(a,Ue(e,o))}function k(e,a){return Be(e,Ue("default",a))}k.loading=(e,a)=>Be(e,Ue("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...a})),k.promise=function(e,a,o){let t,{pending:s,error:d,success:l}=a;s&&(t=T(s)?k.loading(s,o):k.loading(s.render,{...o,...s}));const u={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},p=(_,O,E)=>{if(O==null)return void k.dismiss(t);const S={type:_,...u,...o,data:E},f=T(O)?{render:O}:O;return t?k.update(t,{...S,...f}):k(f.render,{...S,...f}),E},y=M(e)?e():e;return y.then(_=>p("success",l,_)).catch(_=>p("error",d,_)),y},k.success=We("success"),k.info=We("info"),k.error=We("error"),k.warning=We("warning"),k.warn=k.warning,k.dark=(e,a)=>Be(e,Ue("default",{theme:"dark",...a})),k.dismiss=function(e){(function(a){var o;if(ft()){if(a==null||T(o=a)||c(o))B.forEach(t=>{t.removeToast(a)});else if(a&&("containerId"in a||"id"in a)){const t=B.get(a.containerId);t?t.removeToast(a.id):B.forEach(s=>{s.removeToast(a.id)})}}else Ne=Ne.filter(t=>a!=null&&t.options.toastId!==a)})(e)},k.clearWaitingQueue=function(e){e===void 0&&(e={}),B.forEach(a=>{!a.props.limit||e.containerId&&a.id!==e.containerId||a.clearQueue()})},k.isActive=vt,k.update=function(e,a){a===void 0&&(a={});const o=((t,s)=>{var d;let{containerId:l}=s;return(d=B.get(l||1))==null?void 0:d.toasts.get(t)})(e,a);if(o){const{props:t,content:s}=o,d={delay:100,...t,...a,toastId:a.toastId||e,updateId:yt()};d.toastId!==e&&(d.staleId=e);const l=d.render||s;delete d.render,Be(l,d)}},k.done=e=>{k.update(e,{progress:1})},k.onChange=function(e){return lt.add(e),()=>{lt.delete(e)}},k.play=e=>bt(!0,e),k.pause=e=>bt(!1,e);const Dt=typeof window!="undefined"?i.useLayoutEffect:i.useEffect,Ke=e=>{let{theme:a,type:o,isLoading:t,...s}=e;return i.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:a==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...s})},dt={info:function(e){return i.createElement(Ke,{...e},i.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return i.createElement(Ke,{...e},i.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return i.createElement(Ke,{...e},i.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return i.createElement(Ke,{...e},i.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return i.createElement("div",{className:"Toastify__spinner"})}},Qt=e=>{const{isRunning:a,preventExitTransition:o,toastRef:t,eventHandlers:s,playToast:d}=Mt(e),{closeButton:l,children:u,autoClose:p,onClick:y,type:_,hideProgressBar:O,closeToast:E,transition:S,position:f,className:b,style:I,bodyClassName:w,bodyStyle:h,progressClassName:m,progressStyle:j,updateId:F,role:Y,progress:N,rtl:v,toastId:z,deleteToast:W,isIn:ne,isLoading:le,closeOnClick:Ae,theme:de}=e,Pe=(0,x.A)("Toastify__toast",`Toastify__toast-theme--${de}`,`Toastify__toast--${_}`,{"Toastify__toast--rtl":v},{"Toastify__toast--close-on-click":Ae}),rt=M(b)?b({rtl:v,position:f,type:_,defaultClassName:Pe}):(0,x.A)(Pe,b),re=(function(_e){let{theme:ee,type:H,isLoading:G,icon:te}=_e,me=null;const Re={theme:ee,type:H};return te===!1||(M(te)?me=te({...Re,isLoading:G}):(0,i.isValidElement)(te)?me=(0,i.cloneElement)(te,Re):G?me=dt.spinner():(ts=>ts in dt)(H)&&(me=dt[H](Re))),me})(e),ce=!!N||!p,Ce={closeToast:E,type:_,theme:de};let Ie=null;return l===!1||(Ie=M(l)?l(Ce):(0,i.isValidElement)(l)?(0,i.cloneElement)(l,Ce):(function(_e){let{closeToast:ee,theme:H,ariaLabel:G="close"}=_e;return i.createElement("button",{className:`Toastify__close-button Toastify__close-button--${H}`,type:"button",onClick:te=>{te.stopPropagation(),ee(te)},"aria-label":G},i.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))})(Ce)),i.createElement(S,{isIn:ne,done:W,position:f,preventExitTransition:o,nodeRef:t,playToast:d},i.createElement("div",{id:z,onClick:y,"data-in":ne,className:rt,...s,style:I,ref:t},i.createElement("div",{...ne&&{role:Y},className:M(w)?w({type:_}):(0,x.A)("Toastify__toast-body",w),style:h},re!=null&&i.createElement("div",{className:(0,x.A)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!le})},re),i.createElement("div",null,u)),Ie,i.createElement(Xt,{...F&&!ce?{key:`pb-${F}`}:{},rtl:v,theme:de,delay:p,isRunning:a,isIn:ne,closeToast:E,hide:O,type:_,style:j,className:m,controlledProgress:ce,progress:N||0})))},$e=function(e,a){return a===void 0&&(a=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:a}},Ut=Qe($e("bounce",!0)),as=Qe($e("slide",!0)),ss=Qe($e("zoom")),os=Qe($e("flip")),Wt={position:"top-right",transition:Ut,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Kt(e){let a={...Wt,...e};const o=e.stacked,[t,s]=(0,i.useState)(!0),d=(0,i.useRef)(null),{getToastToRender:l,isToastActive:u,count:p}=Bt(a),{className:y,style:_,rtl:O,containerId:E}=a;function S(b){const I=(0,x.A)("Toastify__toast-container",`Toastify__toast-container--${b}`,{"Toastify__toast-container--rtl":O});return M(y)?y({position:b,rtl:O,defaultClassName:I}):(0,x.A)(I,De(y))}function f(){o&&(s(!0),k.play())}return Dt(()=>{if(o){var b;const I=d.current.querySelectorAll('[data-in="true"]'),w=12,h=(b=a.position)==null?void 0:b.includes("top");let m=0,j=0;Array.from(I).reverse().forEach((F,Y)=>{const N=F;N.classList.add("Toastify__toast--stacked"),Y>0&&(N.dataset.collapsed=`${t}`),N.dataset.pos||(N.dataset.pos=h?"top":"bot");const v=m*(t?.2:1)+(t?0:w*Y);N.style.setProperty("--y",`${h?v:-1*v}px`),N.style.setProperty("--g",`${w}`),N.style.setProperty("--s",""+(1-(t?j:0))),m+=N.offsetHeight,j+=.025})}},[t,p,o]),i.createElement("div",{ref:d,className:"Toastify",id:E,onMouseEnter:()=>{o&&(s(!1),k.pause())},onMouseLeave:f},l((b,I)=>{const w=I.length?{..._}:{..._,pointerEvents:"none"};return i.createElement("div",{className:S(b),style:w,key:`container-${b}`},I.map(h=>{let{content:m,props:j}=h;return i.createElement(Qt,{...j,stacked:o,collapseAll:f,isIn:u(j.toastId,j.containerId),style:j.style,key:`toast-${j.key}`},m)}))}))}var ht=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),$t=r("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),ie=r.n($t),fe=r("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),Me=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const Ft={InvertNeutral:"invert-neutral",Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},Ht={S:"s",M:"m",L:"l"},Vt={Display:"display",Headline:"headline",Title:"title",Label:"label",Body:"body"},xt={Self:"_self",Blank:"_blank",Parent:"_parent",Top:"_top"},Yt={Default:"default",Accent:"accent",OnAccent:"on-accent"};var Gt=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),X=r.n(Gt),Zt=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),L=r.n(Zt),Jt=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),R=r.n(Jt),qt=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),D=r.n(qt),ea=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Q=r.n(ea),ta=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),U=r.n(ta),Fe=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+link@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/styles.module.css"),ve={};ve.styleTagTransform=U(),ve.setAttributes=D(),ve.insert=R().bind(null,"head"),ve.domAPI=L(),ve.insertStyleElement=Q();var ns=X()(Fe.A,ve);const aa=Fe.A&&Fe.A.locals?Fe.A.locals:void 0;var sa=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};function ct(e){var a,o,{text:t="",className:s,textMode:d=Yt.Default,size:l=Ht.S,purpose:u=Vt.Body,appearance:p=Ft.Primary,insideText:y=!1,truncateVariant:_,truncateMaxLines:O=1,as:E}=e,S=sa(e,["text","className","textMode","size","purpose","appearance","insideText","truncateVariant","truncateMaxLines","as"]);const f=E||"a";let b;return f==="a"?(b=Object.assign({target:(a=S==null?void 0:S.target)!==null&&a!==void 0?a:xt.Blank,href:(o=S.href)!==null&&o!==void 0?o:"#",download:S.download,onClick:S.onClick},(0,Me.z7)(S)),b.rel=b.target===xt.Blank?"noopener noreferrer":void 0):b=S,(0,n.jsx)(f,Object.assign({className:ie()(aa.link,s)},b,{"data-size":l,"data-purpose":u,"data-text-mode":d,"data-appearance":p,"data-inside-text":y||void 0,children:y?t:(0,n.jsx)(fe.m,{text:t,maxLines:O,variant:_})}))}var oa=r("./node_modules/.pnpm/@snack-uikit+loaders@0.9.11_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js");const ae="toast-system-event",pe={icon:`${ae}__icon`,main:ae,title:`${ae}__title`,description:`${ae}__description`,buttonClose:`${ae}__button-close`,buttonAction:`${ae}__button-action`,link:`${ae}__link`,progressbar:`${ae}__progressbar`,buttonCloseColumn:`${ae}button-close-column`},Xe="toast-user-action",He={main:Xe,label:`${Xe}__label`,icon:`${Xe}__icon`,loader:`${Xe}__loader`,link:`${Xe}__link`},K="toast-upload",V={main:K,close:`${K}__close`,title:`${K}__title`,description:`${K}__description`,counter:`${K}__counter`,progress:`${K}__progress`,list:`${K}__list`,collapseButton:`${K}__collapseButton`,progressBar:`${K}__progressBar`,uploadItem:`${K}__uploadItem`,uploadItemLink:`${K}__uploadItemLink`,uploadItemCancel:`${K}__uploadItemCancel`};var Ve=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUserAction/styles.module.css"),ge={};ge.styleTagTransform=U(),ge.setAttributes=D(),ge.insert=R().bind(null,"head"),ge.domAPI=L(),ge.insertStyleElement=Q();var rs=X()(Ve.A,ge);const Le=Ve.A&&Ve.A.locals?Ve.A.locals:void 0;var pt=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.8/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),kt=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.8/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),St=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.8/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js");const se={Neutral:"neutral",Error:"error",ErrorCritical:"errorCritical",Warning:"warning",Success:"success"},na={[se.Neutral]:"invert-neutral",[se.Error]:"invert-neutral",[se.ErrorCritical]:"red",[se.Warning]:"invert-neutral",[se.Success]:"invert-neutral"};function ra(e){switch(e){case se.Success:return(0,n.jsx)(pt.A,{});case se.Error:return(0,n.jsx)(kt.A,{});case se.Warning:return(0,n.jsx)(St.A,{});case se.Neutral:default:return null}}var ia=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};function la(e){var{appearance:a="neutral",label:o,link:t,className:s,loading:d=!1}=e,l=ia(e,["appearance","label","link","className","loading"]);const u=(0,i.useMemo)(()=>ra(a),[a]);return(0,n.jsxs)("div",Object.assign({className:ie()(Le.container,s)},(0,Me.z7)(l),{"data-appearance":a,children:[d?(0,n.jsx)("span",{className:Le.loader,"data-test-id":He.loader,children:(0,n.jsx)(oa.b,{size:"s"})}):u&&(0,n.jsx)("span",{className:Le.icon,"data-test-id":He.icon,children:u}),(0,n.jsxs)("div",{className:Le.contentLayout,children:[(0,n.jsx)("span",{className:Le.label,"data-test-id":He.label,children:o}),t&&(0,n.jsx)(ct,{size:"m",text:t.text,href:t.href,onClick:t.onClick,appearance:"invert-neutral","data-test-id":He.link})]})]}))}var ut=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.8/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js");const g={SystemEvent:"system-event",UserAction:"user-action",Upload:"upload"},da={[g.SystemEvent]:{limit:5,position:"bottom-right",displayCloseAllButton:!0,type:g.SystemEvent},[g.UserAction]:{limit:2,position:"bottom-center",displayCloseAllButton:!1,type:g.UserAction},[g.Upload]:{limit:1,position:"bottom-right",displayCloseAllButton:!1,type:g.Upload}},wt={[g.SystemEvent]:5e3,[g.UserAction]:2e3,[g.Upload]:!1},ca="toaster-root",_t="toaster-container__";var Ye=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/helperComponents/ButtonAction/styles.module.css"),be={};be.styleTagTransform=U(),be.setAttributes=D(),be.insert=R().bind(null,"head"),be.domAPI=L(),be.insertStyleElement=Q();var is=X()(Ye.A,be);const pa=Ye.A&&Ye.A.locals?Ye.A.locals:void 0;function ua({label:e,onClick:a,critical:o}){return(0,n.jsx)("button",{type:"button",className:pa.buttonAction,onClick:a,"data-test-id":pe.buttonAction,"aria-label":"action","data-critical":o||void 0,children:e})}var Ge=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastSystemEvent/styles.module.css"),ye={};ye.styleTagTransform=U(),ye.setAttributes=D(),ye.insert=R().bind(null,"head"),ye.domAPI=L(),ye.insertStyleElement=Q();var ls=X()(Ge.A,ye);const oe=Ge.A&&Ge.A.locals?Ge.A.locals:void 0;var _a=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.8/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js");function ma(e){switch(e){case"success":return(0,n.jsx)(pt.A,{});case"error":case"errorCritical":return(0,n.jsx)(kt.A,{});case"warning":return(0,n.jsx)(St.A,{});case"neutral":default:return(0,n.jsx)(_a.A,{})}}var fa=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};function va(e){var{appearance:a="neutral",onCloseClick:o,progressBar:t=!0,closable:s=!0,title:d,description:l,link:u,closeToast:p,className:y,action:_}=e,O=fa(e,["appearance","onCloseClick","progressBar","closable","title","description","link","closeToast","className","action"]);const E=f=>{f.stopPropagation(),o?o(f,p):p==null||p()},S=(0,i.useMemo)(()=>ma(a),[a]);return(0,n.jsxs)("div",Object.assign({className:ie()(oe.container,y)},(0,Me.z7)(O),{"data-appearance":a,children:[(0,n.jsxs)("div",{className:oe.body,children:[(0,n.jsx)("div",{className:oe.icon,children:S}),(0,n.jsxs)("div",{className:oe.contentLayout,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:oe.title,children:(0,n.jsx)(fe.m,{text:d,maxLines:2,hideTooltip:!0,"data-test-id":pe.title})}),l&&(0,n.jsx)("span",{className:oe.description,children:(0,n.jsx)(fe.m,{maxLines:4,text:l,hideTooltip:!0,"data-test-id":pe.description})})]}),u&&(0,n.jsx)(ct,{text:u.text,href:u.href,size:"m",truncateVariant:"end",onClick:u.onClick,appearance:na[a],"data-test-id":pe.link,textMode:a==="errorCritical"?"on-accent":"accent"})]}),s&&(0,n.jsx)("button",{type:"button",className:oe.buttonClose,onClick:E,"data-test-id":pe.buttonClose,"aria-label":"close notification",children:(0,n.jsx)(ut.A,{})})]}),t&&(0,n.jsx)("div",{role:"progressbar","aria-label":"progressbar","data-test-id":pe.progressbar,className:oe.progress,style:{animationDuration:`${wt[g.SystemEvent]}ms`}}),Array.isArray(_)&&_.length>0&&(0,n.jsx)("div",{className:oe.footer,children:_.map(f=>(0,n.jsx)(ua,Object.assign({},f,{critical:a==="errorCritical"}),f.label))})]}))}var ga=r("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/cjs.js"),ba=r.n(ga);function ya(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function zt(e,a,o){const t=(0,i.useRef)(e!==void 0),[s,d]=(0,i.useState)(a),l=e!==void 0,u=t.current;return t.current=l,!l&&u&&s!==a&&d(a),[l?e:s,(0,i.useCallback)((...p)=>{const[y,..._]=p;let O=o==null?void 0:o(y,..._);return d(y),O},[o])]}function ds(e,a){return Object.keys(a).reduce((o,t)=>{const{[ya(t)]:s,[t]:d,...l}=o,u=a[t],[p,y]=zt(d,s,e[u]);return{...l,[t]:p,[u]:y}},e)}var ha=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.8/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),xa=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.8/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),ka=r("./node_modules/.pnpm/@snack-uikit+locale@1.0.1/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js");const Sa={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},cs=null;var Ze=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+progress-bar@0.1.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/progress-bar/dist/esm/components/ProgressBar/styles.module.css"),he={};he.styleTagTransform=U(),he.setAttributes=D(),he.insert=R().bind(null,"head"),he.domAPI=L(),he.insertStyleElement=Q();var ps=X()(Ze.A,he);const Tt=Ze.A&&Ze.A.locals?Ze.A.locals:void 0;var wa=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};function Et(e){var{progress:a,size:o,className:t,appearance:s=Sa.Primary}=e,d=wa(e,["progress","size","className","appearance"]);const l=Math.max(Math.min(a,100),0);return(0,n.jsx)("div",Object.assign({className:ie()(Tt.progressBarContainer,t)},(0,Me.z7)(d),{"data-size":o,children:(0,n.jsx)("div",{className:Tt.progressBarFiller,"data-test-id":"progress-bar-filler","data-appearance":s,style:{"--progress":`${l}%`}})}))}var za=r("./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js");const us=null,_s=null,jt={pause:"neutral",loading:"green",uploaded:"green",errorUploaded:"red",error:"red"};var Je=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/ButtonIcon/styles.module.css"),xe={};xe.styleTagTransform=U(),xe.setAttributes=D(),xe.insert=R().bind(null,"head"),xe.domAPI=L(),xe.insertStyleElement=Q();var ms=X()(Je.A,xe);const Ta=Je.A&&Je.A.locals?Je.A.locals:void 0;var Ea=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};function ke(e){var{className:a}=e,o=Ea(e,["className"]);return(0,n.jsx)("button",Object.assign({type:"button",className:ie()(Ta.buttonIcon,a)},o))}var qe=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/ButtonTextNeutral/styles.module.css"),Se={};Se.styleTagTransform=U(),Se.setAttributes=D(),Se.insert=R().bind(null,"head"),Se.domAPI=L(),Se.insertStyleElement=Q();var fs=X()(qe.A,Se);const ja=qe.A&&qe.A.locals?qe.A.locals:void 0;function Oa({label:e,onClick:a,critical:o}){return(0,n.jsx)("button",{type:"button",className:ja.buttonTextNeutral,onClick:a,"aria-label":"action","data-critical":o||void 0,children:e})}const Ot=e=>`${e}%`;var Aa=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const Pa=i.forwardRef((e,a)=>{var{size:o=24}=e,t=Aa(e,["size"]);t.width=void 0,t.height=void 0;const s="-pause-s";return typeof o=="number"&&(t.style||(t.style={}),t.style.width=o+"px",t.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},t,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var Ca=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const Ia=i.forwardRef((e,a)=>{var{size:o=24}=e,t=Ca(e,["size"]);t.width=void 0,t.height=void 0;const s="-pause-xs";return typeof o=="number"&&(t.style||(t.style={}),t.style.width=o+"px",t.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},t,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var Na=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const Ba=(0,i.forwardRef)((e,a)=>{var{size:o=24}=e,t=Na(e,["size"]);return Number(o)>=20?(0,n.jsx)(Pa,Object.assign({ref:a,size:o},t)):(0,n.jsx)(Ia,Object.assign({ref:a,size:o},t))});var Ma=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const Xa=i.forwardRef((e,a)=>{var{size:o=24}=e,t=Ma(e,["size"]);t.width=void 0,t.height=void 0;const s="-play-s";return typeof o=="number"&&(t.style||(t.style={}),t.style.width=o+"px",t.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},t,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var La=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const Ra=i.forwardRef((e,a)=>{var{size:o=24}=e,t=La(e,["size"]);t.width=void 0,t.height=void 0;const s="-play-xs";return typeof o=="number"&&(t.style||(t.style={}),t.style.width=o+"px",t.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},t,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var Da=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const Qa=(0,i.forwardRef)((e,a)=>{var{size:o=24}=e,t=Da(e,["size"]);return Number(o)>=20?(0,n.jsx)(Xa,Object.assign({ref:a,size:o},t)):(0,n.jsx)(Ra,Object.assign({ref:a,size:o},t))});var Ua=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const Wa=i.forwardRef((e,a)=>{var{size:o=24}=e,t=Ua(e,["size"]);t.width=void 0,t.height=void 0;const s="-update-s";return typeof o=="number"&&(t.style||(t.style={}),t.style.width=o+"px",t.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},t,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var Ka=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const $a=(0,i.forwardRef)((e,a)=>{var{size:o=24}=e,t=Ka(e,["size"]);return(0,n.jsx)(Wa,Object.assign({ref:a,size:o},t))});var et=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/LoadingStatus/styles.module.css"),we={};we.styleTagTransform=U(),we.setAttributes=D(),we.insert=R().bind(null,"head"),we.domAPI=L(),we.insertStyleElement=Q();var ws=X()(et.A,we);const Fa=et.A&&et.A.locals?et.A.locals:void 0;function At({status:e,actions:a,isFileItem:o}){return e==="loading"||e==="error"&&!o?(0,n.jsx)(ke,{onClick:a.onPause,children:(0,n.jsx)(Ba,{})}):e==="pause"?(0,n.jsx)(ke,{onClick:a.onContinue,children:(0,n.jsx)(Qa,{})}):e==="uploaded"?(0,n.jsx)(pt.A,{className:Fa.successIcon}):(0,n.jsx)(ke,{onClick:a.onRetry,children:(0,n.jsx)($a,{})})}var tt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/FileItem/styles.module.css"),ze={};ze.styleTagTransform=U(),ze.setAttributes=D(),ze.insert=R().bind(null,"head"),ze.domAPI=L(),ze.insertStyleElement=Q();var zs=X()(tt.A,ze);const Z=tt.A&&tt.A.locals?tt.A.locals:void 0;function Ha({item:e}){var a,o,t;const[s,d]=(0,i.useState)(e),l=s.status==="uploaded"&&s.link,u=!l;(0,i.useEffect)(()=>(e.subscribeToState&&e.subscribeToState(y=>d(_=>Object.assign(Object.assign({},_),y))),d(e)),[e]);const p=s.status==="error";return(0,n.jsxs)("div",{className:Z.fileLine,"data-test-id":V.uploadItem,children:[(0,n.jsxs)("div",{className:Z.fileHeadLine,children:[(0,n.jsx)(fe.m,{text:s.title,className:Z.fileTitle,maxLines:1,tooltipClassName:Z.tooltip}),l&&(0,n.jsx)(ct,{text:(a=s.link)===null||a===void 0?void 0:a.text,href:(o=s.link)===null||o===void 0?void 0:o.href,size:"s",truncateVariant:"end",onClick:(t=s.link)===null||t===void 0?void 0:t.onClick,appearance:"invert-neutral",textMode:"accent","data-test-id":V.uploadItemLink}),u&&(0,n.jsx)(ke,{onClick:s.actions.onCancel,"data-test-id":V.uploadItemCancel,children:(0,n.jsx)(ut.A,{})})]}),(0,n.jsx)(Et,{progress:p?100:s.progress,size:"xs",appearance:jt[s.status]}),(0,n.jsxs)("div",{className:Z.fileStatusLine,children:[(0,n.jsxs)("div",{className:Z.fileStatusWrap,children:[(0,n.jsx)(At,{status:s.status,actions:s.actions,isFileItem:!0}),(0,n.jsx)(fe.m,{className:Z.fileStatusDescription,"data-status":s.status,text:s.statusLabel,tooltipClassName:Z.tooltip})]}),(0,n.jsx)("span",{className:Z.fileSize,"data-status":s.status,children:s.formattedSize}),(0,n.jsx)("span",{className:Z.fileStatusPercentage,"data-status":s.status,children:Ot(p?0:s.progress)})]})]})}var at=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/styles.module.css"),Te={};Te.styleTagTransform=U(),Te.setAttributes=D(),Te.insert=R().bind(null,"head"),Te.domAPI=L(),Te.insertStyleElement=Q();var Ts=X()(at.A,Te);const $=at.A&&at.A.locals?at.A.locals:void 0;var Va=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};function Ya(e){var{status:a,title:o,description:t,closeToast:s,onCloseClick:d,closable:l,className:u,files:p,collapsed:y,onCollapsed:_,generalActions:O,cancelButton:E,progress:S,draggable:f=!1,draggableBounds:b}=e,I=Va(e,["status","title","description","closeToast","onCloseClick","closable","className","files","collapsed","onCollapsed","generalActions","cancelButton","progress","draggable","draggableBounds"]);const[w,h]=zt(y,!1,_),{t:m}=(0,ka.Ym)("ToastUpload"),j=o||m(`title.${a}`),F=z=>{z.stopPropagation(),d?d(z,s):s==null||s()},Y=z=>{z.stopPropagation(),h(!w)},N=Math.round(S.current/S.total*100),v=a==="errorUploaded";return(0,n.jsx)(ba(),{bounds:b,disabled:!f,children:(0,n.jsxs)("div",Object.assign({className:ie()($.container,u)},(0,Me.z7)(I),{"data-collapsed":w||void 0,"data-draggable":f||void 0,children:[(0,n.jsxs)("div",{className:$.titleLine,children:[(0,n.jsxs)("div",{className:$.titleLineBody,children:[(0,n.jsx)("div",{className:$.title,"data-test-id":V.title,children:j}),E&&(0,n.jsx)(Oa,Object.assign({},E)),(0,n.jsx)(ke,{onClick:Y,"data-test-id":V.collapseButton,children:w?(0,n.jsx)(xa.A,{}):(0,n.jsx)(ha.A,{})}),l&&(0,n.jsx)(ke,{className:$.buttonAction,onClick:F,"data-test-id":V.close,children:(0,n.jsx)(ut.A,{})})]}),(0,n.jsxs)("div",{className:$.generalProgress,children:[(0,n.jsxs)("div",{className:$.statusLine,children:[(0,n.jsxs)("div",{className:$.statusWrap,children:[(0,n.jsx)(At,{status:a,actions:O}),(0,n.jsx)(fe.m,{className:$.description,"data-status":a,text:t,"data-test-id":V.description})]}),(0,n.jsx)("span",{className:$.totalCounter,"data-test-id":V.counter,children:`${S.current}/${S.total}`}),(0,n.jsx)("span",{className:$.totalPercentage,"data-test-id":V.progress,children:Ot(v?0:N)})]}),w&&(0,n.jsx)(Et,{progress:v?100:N,size:"xs",appearance:jt[a],"data-test-id":V.progressBar})]})]}),(0,n.jsx)(za.O,{className:$.list,size:"s","data-test-id":V.list,barHideStrategy:"never",children:p.map(z=>(0,n.jsx)(Ha,{item:z},z.id||z.title))})]}))})}var st=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/style.css"),Ee={};Ee.styleTagTransform=U(),Ee.setAttributes=D(),Ee.insert=R().bind(null,"head"),Ee.domAPI=L(),Ee.insertStyleElement=Q();var Es=X()(st.A,Ee);const js=st.A&&st.A.locals?st.A.locals:void 0;var ot=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/toastify.css"),je={};je.styleTagTransform=U(),je.setAttributes=D(),je.insert=R().bind(null,"head"),je.domAPI=L(),je.insertStyleElement=Q();var Os=X()(ot.A,je);const As=ot.A&&ot.A.locals?ot.A.locals:void 0;var nt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/styles.module.css"),Oe={};Oe.styleTagTransform=U(),Oe.setAttributes=D(),Oe.insert=R().bind(null,"head"),Oe.domAPI=L(),Oe.insertStyleElement=Q();var Ps=X()(nt.A,Oe);const ue=nt.A&&nt.A.locals?nt.A.locals:void 0;function Ga({position:e="bottom-right",limit:a=5,containerId:o,displayCloseAllButton:t,type:s=g.SystemEvent}){const[d,l]=(0,i.useState)(0),[u,p]=(0,i.useState)(!1),y=()=>{k.dismiss(),p(!0)};(0,i.useEffect)(()=>k.onChange(({status:E,containerId:S})=>{S===`${_t}${g.SystemEvent}`&&(E==="added"&&(p(!1),l(f=>f+1)),E==="removed"&&l(f=>f-1))}),[]);const _=t&&d>2&&!u;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Kt,{hideProgressBar:!0,closeOnClick:!1,autoClose:!1,closeButton:!1,draggable:!1,className:ie()("osThemeSnack",ue[e],{[ue.containerWithCloseAllButton]:_,"osThemeSnack__toast-container__system-event":s===g.SystemEvent,"osThemeSnack__toast-container__user-action":s===g.UserAction,"osThemeSnack__toast-container__upload":s===g.Upload}),toastClassName:ue.toaster,bodyClassName:ue.toaster,position:e,limit:a,containerId:o}),_&&(0,n.jsx)("div",{className:ie()(ue.buttonCloseColumnWrapper,ue[e]),children:(0,n.jsx)("button",{type:"button",className:ue.buttonCloseColumn,onClick:y,"data-test-id":pe.buttonCloseColumn,children:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435"})})]})}var Za,Ja=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};function qa({type:e,toasterParent:a,containerProps:o}){const t=(o==null?void 0:o.containerId)||`${_t}${e}`,s=Object.assign(Object.assign(Object.assign({},da[e]),o||{}),{containerId:t}),d=`${ca}__${e}`;let l=a?a.querySelector(`#${d}`):null;return!l&&a&&(0,ht.B)()&&(l=document.createElement("div"),l.id=d,a.appendChild(l)),{toasterContainer:l,toasterContainerProps:s}}function Pt({type:e,toastOptions:a,containerId:o,toasterProps:t}){return{toastId:a==null?void 0:a.id,onClose:(s=>{var d;(d=a==null?void 0:a.onClose)===null||d===void 0||d.call(a,s==null?void 0:s.id)}),autoClose:t!=null&&t.loading?!1:wt[e],containerId:o||`${_t}${e}`}}function Ct({type:e,toasterProps:a}){switch(e){case g.UserAction:return(0,n.jsx)(la,Object.assign({},a));case g.SystemEvent:return(0,n.jsx)(va,Object.assign({},a));case g.Upload:return(0,n.jsx)(Ya,Object.assign({draggable:!0,draggableBounds:".Toastify__toast-container"},a));default:return}}const J=({type:e,toasterProps:a,containerProps:o,toastOptions:t,toasterParent:s=(0,ht.B)()?document.body:void 0})=>{const{toasterContainer:d,toasterContainerProps:l}=qa({type:e,toasterParent:s,containerProps:o}),u=Pt({type:e,toasterProps:a,toastOptions:t,containerId:l.containerId}),p=Ct({type:e,toasterProps:a});return new Promise(y=>{(0,P.render)((0,n.jsx)(Ga,Object.assign({},l)),d,()=>{setTimeout(()=>{y(k(p,u))},0)})})},q=(e,{type:a,toasterProps:o,toastOptions:t,containerId:s})=>{const d=Pt({type:a,toasterProps:o,toastOptions:t,containerId:s}),l=Ct({type:a,toasterProps:o});return k.update(e,Object.assign(Object.assign({},d),{render:l}))},Cs=e=>Za.dismiss(e),Is=k.isActive,es={userAction:{success(e){return J({type:g.UserAction,toasterProps:Object.assign(Object.assign({},e),{appearance:"success"}),toastOptions:{id:e.id,onClose:e.onClose}})},neutral(e){return J({type:g.UserAction,toasterProps:Object.assign(Object.assign({},e),{appearance:"neutral"}),toastOptions:{id:e.id,onClose:e.onClose}})},error(e){return J({type:g.UserAction,toasterProps:Object.assign(Object.assign({},e),{appearance:"error"}),toastOptions:{id:e.id,onClose:e.onClose}})},warning(e){return J({type:g.UserAction,toasterProps:Object.assign(Object.assign({},e),{appearance:"warning"}),toastOptions:{id:e.id,onClose:e.onClose}})},update:{success(e,a){q(e,{type:g.UserAction,toasterProps:Object.assign(Object.assign({},a),{appearance:"success"})})},neutral(e,a){q(e,{type:g.UserAction,toasterProps:Object.assign(Object.assign({},a),{appearance:"neutral"})})},warning(e,a){q(e,{type:g.UserAction,toasterProps:Object.assign(Object.assign({},a),{appearance:"warning"})})},error(e,a){q(e,{type:g.UserAction,toasterProps:Object.assign(Object.assign({},a),{appearance:"error"})})}},dismiss(e){return k.dismiss(e)}},systemEvent:{success(e){return J({type:g.SystemEvent,toasterProps:Object.assign(Object.assign({},e),{appearance:"success"}),toastOptions:{id:e.id,onClose:e.onClose}})},neutral(e){return J({type:g.SystemEvent,toasterProps:Object.assign(Object.assign({},e),{appearance:"neutral"}),toastOptions:{id:e.id,onClose:e.onClose}})},warning(e){return J({type:g.SystemEvent,toasterProps:Object.assign(Object.assign({},e),{appearance:"warning"}),toastOptions:{id:e.id,onClose:e.onClose}})},error(e){return J({type:g.SystemEvent,toasterProps:Object.assign(Object.assign({},e),{appearance:"error"}),toastOptions:{id:e.id,onClose:e.onClose}})},errorCritical(e){return J({type:g.SystemEvent,toasterProps:Object.assign(Object.assign({},e),{appearance:"errorCritical"}),toastOptions:{id:e.id,onClose:e.onClose}})},update:{success(e,a){return q(e,{type:g.SystemEvent,toasterProps:Object.assign(Object.assign({},a),{appearance:"success"})})},neutral(e,a){return q(e,{type:g.SystemEvent,toasterProps:Object.assign(Object.assign({},a),{appearance:"neutral"})})},warning(e,a){return q(e,{type:g.SystemEvent,toasterProps:Object.assign(Object.assign({},a),{appearance:"warning"})})},error(e,a){return q(e,{type:g.SystemEvent,toasterProps:Object.assign(Object.assign({},a),{appearance:"error"})})},errorCritical(e,a){return q(e,{type:g.SystemEvent,toasterProps:Object.assign(Object.assign({},a),{appearance:"errorCritical"})})}},dismiss(e){return k.dismiss(e)}},upload:{startOrUpdate(e){var{id:a}=e,o=Ja(e,["id"]);const t=a||g.Upload;return k.isActive(t)?q(t,{type:g.Upload,toasterProps:Object.assign({},o)}):J({type:g.Upload,toasterProps:Object.assign({},o),toastOptions:{id:t,onClose:o.onClose}})},dismiss(e){return k.dismiss(e)}}}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+link@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/styles.module.css"(C,A,r){r.d(A,{A:()=>T});var n=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=r.n(n),i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),x=r.n(i),c=x()(P());c.push([C.id,`.link--NQzfX{
  cursor:pointer;
  display:inline-flex;
  align-items:center;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  text-decoration:none;
  -webkit-text-decoration-skip-ink:none;
          text-decoration-skip-ink:none;
}
.link--NQzfX[data-inside-text]{
  display:inline;
}
.link--NQzfX[data-appearance=invert-neutral][data-text-mode=default]{
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}
.link--NQzfX[data-appearance=invert-neutral][data-text-mode=default]:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.link--NQzfX[data-appearance=invert-neutral][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=invert-neutral][data-text-mode=accent]{
  color:var(--sys-invert-neutral-accent-default, #cfd2dc);
}
.link--NQzfX[data-appearance=invert-neutral][data-text-mode=accent]:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.link--NQzfX[data-appearance=invert-neutral][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--NQzfX[data-appearance=invert-neutral][data-text-mode=on-accent]{
  color:var(--sys-invert-neutral-on-accent, #393a46);
}
.link--NQzfX[data-appearance=invert-neutral][data-text-mode=on-accent]:hover{
  color:var(--sys-invert-neutral-on-accent, #393a46);
  opacity:var(--opacity-a080, 0.8);
}
.link--NQzfX[data-appearance=invert-neutral][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-on-accent, #393a46);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--NQzfX[data-appearance=neutral][data-text-mode=default]{
  color:var(--sys-neutral-text-support, #6d707f);
}
.link--NQzfX[data-appearance=neutral][data-text-mode=default]:hover{
  color:var(--sys-neutral-text-main, #41424e);
}
.link--NQzfX[data-appearance=neutral][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-main, #41424e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=neutral][data-text-mode=accent]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.link--NQzfX[data-appearance=neutral][data-text-mode=accent]:hover{
  color:var(--sys-neutral-text-main, #41424e);
}
.link--NQzfX[data-appearance=neutral][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-main, #41424e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=neutral][data-text-mode=on-accent]{
  color:var(--sys-neutral-on-accent, #ffffff);
}
.link--NQzfX[data-appearance=neutral][data-text-mode=on-accent]:hover{
  color:var(--sys-neutral-on-accent, #ffffff);
  opacity:var(--opacity-a080, 0.8);
}
.link--NQzfX[data-appearance=neutral][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-on-accent, #ffffff);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--NQzfX[data-appearance=primary][data-text-mode=default]{
  color:var(--sys-primary-text-support, #358561);
}
.link--NQzfX[data-appearance=primary][data-text-mode=default]:hover{
  color:var(--sys-primary-text-main, #1b5840);
}
.link--NQzfX[data-appearance=primary][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-primary-text-main, #1b5840);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=primary][data-text-mode=accent]{
  color:var(--sys-primary-accent-default, #389f74);
}
.link--NQzfX[data-appearance=primary][data-text-mode=accent]:hover{
  color:var(--sys-primary-text-main, #1b5840);
}
.link--NQzfX[data-appearance=primary][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-primary-text-main, #1b5840);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=primary][data-text-mode=on-accent]{
  color:var(--sys-primary-on-accent, #fbfffc);
}
.link--NQzfX[data-appearance=primary][data-text-mode=on-accent]:hover{
  color:var(--sys-primary-on-accent, #fbfffc);
  opacity:var(--opacity-a080, 0.8);
}
.link--NQzfX[data-appearance=primary][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-primary-on-accent, #fbfffc);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--NQzfX[data-appearance=red][data-text-mode=default]{
  color:var(--sys-red-text-support, #ae514c);
}
.link--NQzfX[data-appearance=red][data-text-mode=default]:hover{
  color:var(--sys-red-text-main, #7a2d2d);
}
.link--NQzfX[data-appearance=red][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-text-main, #7a2d2d);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=red][data-text-mode=accent]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.link--NQzfX[data-appearance=red][data-text-mode=accent]:hover{
  color:var(--sys-red-text-main, #7a2d2d);
}
.link--NQzfX[data-appearance=red][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-text-main, #7a2d2d);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=red][data-text-mode=on-accent]{
  color:var(--sys-red-on-accent, #fffbf9);
}
.link--NQzfX[data-appearance=red][data-text-mode=on-accent]:hover{
  color:var(--sys-red-on-accent, #fffbf9);
  opacity:var(--opacity-a080, 0.8);
}
.link--NQzfX[data-appearance=red][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-on-accent, #fffbf9);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--NQzfX[data-appearance=orange][data-text-mode=default]{
  color:var(--sys-orange-text-support, #bb733e);
}
.link--NQzfX[data-appearance=orange][data-text-mode=default]:hover{
  color:var(--sys-orange-text-main, #884c23);
}
.link--NQzfX[data-appearance=orange][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-orange-text-main, #884c23);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=orange][data-text-mode=accent]{
  color:var(--sys-orange-accent-default, #fb8e42);
}
.link--NQzfX[data-appearance=orange][data-text-mode=accent]:hover{
  color:var(--sys-orange-text-main, #884c23);
}
.link--NQzfX[data-appearance=orange][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-orange-text-main, #884c23);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=orange][data-text-mode=on-accent]{
  color:var(--sys-orange-on-accent, #fffcf4);
}
.link--NQzfX[data-appearance=orange][data-text-mode=on-accent]:hover{
  color:var(--sys-orange-on-accent, #fffcf4);
  opacity:var(--opacity-a080, 0.8);
}
.link--NQzfX[data-appearance=orange][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-orange-on-accent, #fffcf4);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--NQzfX[data-appearance=blue][data-text-mode=default]{
  color:var(--sys-blue-text-support, #4877b0);
}
.link--NQzfX[data-appearance=blue][data-text-mode=default]:hover{
  color:var(--sys-blue-text-main, #2b537e);
}
.link--NQzfX[data-appearance=blue][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-blue-text-main, #2b537e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=blue][data-text-mode=accent]{
  color:var(--sys-blue-accent-default, #5388d1);
}
.link--NQzfX[data-appearance=blue][data-text-mode=accent]:hover{
  color:var(--sys-blue-text-main, #2b537e);
}
.link--NQzfX[data-appearance=blue][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-blue-text-main, #2b537e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=blue][data-text-mode=on-accent]{
  color:var(--sys-blue-on-accent, #fdfeff);
}
.link--NQzfX[data-appearance=blue][data-text-mode=on-accent]:hover{
  color:var(--sys-blue-on-accent, #fdfeff);
  opacity:var(--opacity-a080, 0.8);
}
.link--NQzfX[data-appearance=blue][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-blue-on-accent, #fdfeff);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--NQzfX[data-appearance=violet][data-text-mode=default]{
  color:var(--sys-violet-text-support, #8c639b);
}
.link--NQzfX[data-appearance=violet][data-text-mode=default]:hover{
  color:var(--sys-violet-text-main, #59446a);
}
.link--NQzfX[data-appearance=violet][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-violet-text-main, #59446a);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=violet][data-text-mode=accent]{
  color:var(--sys-violet-accent-default, #aa6cc1);
}
.link--NQzfX[data-appearance=violet][data-text-mode=accent]:hover{
  color:var(--sys-violet-text-main, #59446a);
}
.link--NQzfX[data-appearance=violet][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-violet-text-main, #59446a);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=violet][data-text-mode=on-accent]{
  color:var(--sys-violet-on-accent, #fdfdfd);
}
.link--NQzfX[data-appearance=violet][data-text-mode=on-accent]:hover{
  color:var(--sys-violet-on-accent, #fdfdfd);
  opacity:var(--opacity-a080, 0.8);
}
.link--NQzfX[data-appearance=violet][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-violet-on-accent, #fdfdfd);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--NQzfX[data-appearance=pink][data-text-mode=default]{
  color:var(--sys-pink-text-support, #ae5e80);
}
.link--NQzfX[data-appearance=pink][data-text-mode=default]:hover{
  color:var(--sys-pink-text-main, #754158);
}
.link--NQzfX[data-appearance=pink][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-pink-text-main, #754158);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=pink][data-text-mode=accent]{
  color:var(--sys-pink-accent-default, #d1668e);
}
.link--NQzfX[data-appearance=pink][data-text-mode=accent]:hover{
  color:var(--sys-pink-text-main, #754158);
}
.link--NQzfX[data-appearance=pink][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-pink-text-main, #754158);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=pink][data-text-mode=on-accent]{
  color:var(--sys-pink-on-accent, #fdfcfc);
}
.link--NQzfX[data-appearance=pink][data-text-mode=on-accent]:hover{
  color:var(--sys-pink-on-accent, #fdfcfc);
  opacity:var(--opacity-a080, 0.8);
}
.link--NQzfX[data-appearance=pink][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-pink-on-accent, #fdfcfc);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--NQzfX[data-appearance=yellow][data-text-mode=default]{
  color:var(--sys-yellow-text-support, #b78c32);
}
.link--NQzfX[data-appearance=yellow][data-text-mode=default]:hover{
  color:var(--sys-yellow-text-main, #815f19);
}
.link--NQzfX[data-appearance=yellow][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-yellow-text-main, #815f19);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=yellow][data-text-mode=accent]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.link--NQzfX[data-appearance=yellow][data-text-mode=accent]:hover{
  color:var(--sys-yellow-text-main, #815f19);
}
.link--NQzfX[data-appearance=yellow][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-yellow-text-main, #815f19);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=yellow][data-text-mode=on-accent]{
  color:var(--sys-yellow-on-accent, #583f1f);
}
.link--NQzfX[data-appearance=yellow][data-text-mode=on-accent]:hover{
  color:var(--sys-yellow-on-accent, #583f1f);
  opacity:var(--opacity-a080, 0.8);
}
.link--NQzfX[data-appearance=yellow][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-yellow-on-accent, #583f1f);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--NQzfX[data-appearance=green][data-text-mode=default]{
  color:var(--sys-green-text-support, #55915a);
}
.link--NQzfX[data-appearance=green][data-text-mode=default]:hover{
  color:var(--sys-green-text-main, #3d6035);
}
.link--NQzfX[data-appearance=green][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-green-text-main, #3d6035);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=green][data-text-mode=accent]{
  color:var(--sys-green-accent-default, #57b762);
}
.link--NQzfX[data-appearance=green][data-text-mode=accent]:hover{
  color:var(--sys-green-text-main, #3d6035);
}
.link--NQzfX[data-appearance=green][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-green-text-main, #3d6035);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--NQzfX[data-appearance=green][data-text-mode=on-accent]{
  color:var(--sys-green-on-accent, #fcfefa);
}
.link--NQzfX[data-appearance=green][data-text-mode=on-accent]:hover{
  color:var(--sys-green-on-accent, #fcfefa);
  opacity:var(--opacity-a080, 0.8);
}
.link--NQzfX[data-appearance=green][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-green-on-accent, #fcfefa);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--NQzfX[data-size=s][data-purpose=display][data-text-mode=default]{
  font-family:var(--sans-display-s-font-family, SB Sans Interface);
  font-weight:var(--sans-display-s-font-weight, Semibold);
  line-height:var(--sans-display-s-line-height, 48px);
  font-size:var(--sans-display-s-font-size, 40px);
  letter-spacing:var(--sans-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-s-paragraph-spacing, 22px);
}
.link--NQzfX[data-size=s][data-purpose=display][data-text-mode=accent]{
  font-family:var(--link-display-s-font-family, SB Sans Interface);
  font-weight:var(--link-display-s-font-weight, Semibold);
  line-height:var(--link-display-s-line-height, 48px);
  font-size:var(--link-display-s-font-size, 40px);
  letter-spacing:var(--link-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-s-paragraph-spacing, 22px);
  -webkit-text-decoration:var(--link-display-s-text-decoration, underline);
          text-decoration:var(--link-display-s-text-decoration, underline);
}
.link--NQzfX[data-size=s][data-purpose=display][data-text-mode=on-accent]{
  font-family:var(--link-display-s-font-family, SB Sans Interface);
  font-weight:var(--link-display-s-font-weight, Semibold);
  line-height:var(--link-display-s-line-height, 48px);
  font-size:var(--link-display-s-font-size, 40px);
  letter-spacing:var(--link-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-s-paragraph-spacing, 22px);
  -webkit-text-decoration:var(--link-display-s-text-decoration, underline);
          text-decoration:var(--link-display-s-text-decoration, underline);
}
.link--NQzfX[data-size=s][data-purpose=headline][data-text-mode=default]{
  font-family:var(--sans-headline-s-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-s-font-weight, Semibold);
  line-height:var(--sans-headline-s-line-height, 32px);
  font-size:var(--sans-headline-s-font-size, 24px);
  letter-spacing:var(--sans-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-s-paragraph-spacing, 13.2px);
}
.link--NQzfX[data-size=s][data-purpose=headline][data-text-mode=accent]{
  font-family:var(--link-headline-s-font-family, SB Sans Interface);
  font-weight:var(--link-headline-s-font-weight, Semibold);
  line-height:var(--link-headline-s-line-height, 32px);
  font-size:var(--link-headline-s-font-size, 24px);
  letter-spacing:var(--link-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-s-paragraph-spacing, 13.2px);
  -webkit-text-decoration:var(--link-headline-s-text-decoration, underline);
          text-decoration:var(--link-headline-s-text-decoration, underline);
}
.link--NQzfX[data-size=s][data-purpose=headline][data-text-mode=on-accent]{
  font-family:var(--link-headline-s-font-family, SB Sans Interface);
  font-weight:var(--link-headline-s-font-weight, Semibold);
  line-height:var(--link-headline-s-line-height, 32px);
  font-size:var(--link-headline-s-font-size, 24px);
  letter-spacing:var(--link-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-s-paragraph-spacing, 13.2px);
  -webkit-text-decoration:var(--link-headline-s-text-decoration, underline);
          text-decoration:var(--link-headline-s-text-decoration, underline);
}
.link--NQzfX[data-size=s][data-purpose=title][data-text-mode=default]{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
}
.link--NQzfX[data-size=s][data-purpose=title][data-text-mode=accent]{
  font-family:var(--link-title-s-font-family, SB Sans Interface);
  font-weight:var(--link-title-s-font-weight, Semibold);
  line-height:var(--link-title-s-line-height, 20px);
  font-size:var(--link-title-s-font-size, 14px);
  letter-spacing:var(--link-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-s-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-title-s-text-decoration, underline);
          text-decoration:var(--link-title-s-text-decoration, underline);
}
.link--NQzfX[data-size=s][data-purpose=title][data-text-mode=on-accent]{
  font-family:var(--link-title-s-font-family, SB Sans Interface);
  font-weight:var(--link-title-s-font-weight, Semibold);
  line-height:var(--link-title-s-line-height, 20px);
  font-size:var(--link-title-s-font-size, 14px);
  letter-spacing:var(--link-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-s-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-title-s-text-decoration, underline);
          text-decoration:var(--link-title-s-text-decoration, underline);
}
.link--NQzfX[data-size=s][data-purpose=label][data-text-mode=default]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.link--NQzfX[data-size=s][data-purpose=label][data-text-mode=accent]{
  font-family:var(--link-label-s-font-family, SB Sans Interface);
  font-weight:var(--link-label-s-font-weight, Semibold);
  line-height:var(--link-label-s-line-height, 14px);
  font-size:var(--link-label-s-font-size, 11px);
  letter-spacing:var(--link-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-s-paragraph-spacing, 6.05px);
  -webkit-text-decoration:var(--link-label-s-text-decoration, underline);
          text-decoration:var(--link-label-s-text-decoration, underline);
}
.link--NQzfX[data-size=s][data-purpose=label][data-text-mode=on-accent]{
  font-family:var(--link-label-s-font-family, SB Sans Interface);
  font-weight:var(--link-label-s-font-weight, Semibold);
  line-height:var(--link-label-s-line-height, 14px);
  font-size:var(--link-label-s-font-size, 11px);
  letter-spacing:var(--link-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-s-paragraph-spacing, 6.05px);
  -webkit-text-decoration:var(--link-label-s-text-decoration, underline);
          text-decoration:var(--link-label-s-text-decoration, underline);
}
.link--NQzfX[data-size=s][data-purpose=body][data-text-mode=default]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.link--NQzfX[data-size=s][data-purpose=body][data-text-mode=accent]{
  font-family:var(--link-body-s-font-family, SB Sans Interface);
  font-weight:var(--link-body-s-font-weight, Regular);
  line-height:var(--link-body-s-line-height, 16px);
  font-size:var(--link-body-s-font-size, 12px);
  letter-spacing:var(--link-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-s-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-body-s-text-decoration, underline);
          text-decoration:var(--link-body-s-text-decoration, underline);
}
.link--NQzfX[data-size=s][data-purpose=body][data-text-mode=on-accent]{
  font-family:var(--link-body-s-font-family, SB Sans Interface);
  font-weight:var(--link-body-s-font-weight, Regular);
  line-height:var(--link-body-s-line-height, 16px);
  font-size:var(--link-body-s-font-size, 12px);
  letter-spacing:var(--link-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-s-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-body-s-text-decoration, underline);
          text-decoration:var(--link-body-s-text-decoration, underline);
}
.link--NQzfX[data-size=s]{
  height:var(--size-link-s, 16px);
  gap:var(--space-link-gap-single, 0px);
  height:auto;
}
.link--NQzfX[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.link--NQzfX[data-size=m][data-purpose=display][data-text-mode=default]{
  font-family:var(--sans-display-m-font-family, SB Sans Interface);
  font-weight:var(--sans-display-m-font-weight, Semibold);
  line-height:var(--sans-display-m-line-height, 60px);
  font-size:var(--sans-display-m-font-size, 48px);
  letter-spacing:var(--sans-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-m-paragraph-spacing, 26.4px);
}
.link--NQzfX[data-size=m][data-purpose=display][data-text-mode=accent]{
  font-family:var(--link-display-m-font-family, SB Sans Interface);
  font-weight:var(--link-display-m-font-weight, Semibold);
  line-height:var(--link-display-m-line-height, 60px);
  font-size:var(--link-display-m-font-size, 48px);
  letter-spacing:var(--link-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-m-paragraph-spacing, 26.4px);
  -webkit-text-decoration:var(--link-display-m-text-decoration, underline);
          text-decoration:var(--link-display-m-text-decoration, underline);
}
.link--NQzfX[data-size=m][data-purpose=display][data-text-mode=on-accent]{
  font-family:var(--link-display-m-font-family, SB Sans Interface);
  font-weight:var(--link-display-m-font-weight, Semibold);
  line-height:var(--link-display-m-line-height, 60px);
  font-size:var(--link-display-m-font-size, 48px);
  letter-spacing:var(--link-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-m-paragraph-spacing, 26.4px);
  -webkit-text-decoration:var(--link-display-m-text-decoration, underline);
          text-decoration:var(--link-display-m-text-decoration, underline);
}
.link--NQzfX[data-size=m][data-purpose=headline][data-text-mode=default]{
  font-family:var(--sans-headline-m-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-m-font-weight, Semibold);
  line-height:var(--sans-headline-m-line-height, 36px);
  font-size:var(--sans-headline-m-font-size, 28px);
  letter-spacing:var(--sans-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-m-paragraph-spacing, 15.4px);
}
.link--NQzfX[data-size=m][data-purpose=headline][data-text-mode=accent]{
  font-family:var(--link-headline-m-font-family, SB Sans Interface);
  font-weight:var(--link-headline-m-font-weight, Semibold);
  line-height:var(--link-headline-m-line-height, 36px);
  font-size:var(--link-headline-m-font-size, 28px);
  letter-spacing:var(--link-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-m-paragraph-spacing, 15.4px);
  -webkit-text-decoration:var(--link-headline-m-text-decoration, underline);
          text-decoration:var(--link-headline-m-text-decoration, underline);
}
.link--NQzfX[data-size=m][data-purpose=headline][data-text-mode=on-accent]{
  font-family:var(--link-headline-m-font-family, SB Sans Interface);
  font-weight:var(--link-headline-m-font-weight, Semibold);
  line-height:var(--link-headline-m-line-height, 36px);
  font-size:var(--link-headline-m-font-size, 28px);
  letter-spacing:var(--link-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-m-paragraph-spacing, 15.4px);
  -webkit-text-decoration:var(--link-headline-m-text-decoration, underline);
          text-decoration:var(--link-headline-m-text-decoration, underline);
}
.link--NQzfX[data-size=m][data-purpose=title][data-text-mode=default]{
  font-family:var(--sans-title-m-font-family, SB Sans Interface);
  font-weight:var(--sans-title-m-font-weight, Semibold);
  line-height:var(--sans-title-m-line-height, 24px);
  font-size:var(--sans-title-m-font-size, 16px);
  letter-spacing:var(--sans-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-m-paragraph-spacing, 8.8px);
}
.link--NQzfX[data-size=m][data-purpose=title][data-text-mode=accent]{
  font-family:var(--link-title-m-font-family, SB Sans Interface);
  font-weight:var(--link-title-m-font-weight, Semibold);
  line-height:var(--link-title-m-line-height, 24px);
  font-size:var(--link-title-m-font-size, 16px);
  letter-spacing:var(--link-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-m-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-title-m-text-decoration, underline);
          text-decoration:var(--link-title-m-text-decoration, underline);
}
.link--NQzfX[data-size=m][data-purpose=title][data-text-mode=on-accent]{
  font-family:var(--link-title-m-font-family, SB Sans Interface);
  font-weight:var(--link-title-m-font-weight, Semibold);
  line-height:var(--link-title-m-line-height, 24px);
  font-size:var(--link-title-m-font-size, 16px);
  letter-spacing:var(--link-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-m-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-title-m-text-decoration, underline);
          text-decoration:var(--link-title-m-text-decoration, underline);
}
.link--NQzfX[data-size=m][data-purpose=label][data-text-mode=default]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.link--NQzfX[data-size=m][data-purpose=label][data-text-mode=accent]{
  font-family:var(--link-label-m-font-family, SB Sans Interface);
  font-weight:var(--link-label-m-font-weight, Semibold);
  line-height:var(--link-label-m-line-height, 16px);
  font-size:var(--link-label-m-font-size, 12px);
  letter-spacing:var(--link-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-m-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-label-m-text-decoration, underline);
          text-decoration:var(--link-label-m-text-decoration, underline);
}
.link--NQzfX[data-size=m][data-purpose=label][data-text-mode=on-accent]{
  font-family:var(--link-label-m-font-family, SB Sans Interface);
  font-weight:var(--link-label-m-font-weight, Semibold);
  line-height:var(--link-label-m-line-height, 16px);
  font-size:var(--link-label-m-font-size, 12px);
  letter-spacing:var(--link-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-m-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-label-m-text-decoration, underline);
          text-decoration:var(--link-label-m-text-decoration, underline);
}
.link--NQzfX[data-size=m][data-purpose=body][data-text-mode=default]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.link--NQzfX[data-size=m][data-purpose=body][data-text-mode=accent]{
  font-family:var(--link-body-m-font-family, SB Sans Interface);
  font-weight:var(--link-body-m-font-weight, Regular);
  line-height:var(--link-body-m-line-height, 20px);
  font-size:var(--link-body-m-font-size, 14px);
  letter-spacing:var(--link-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-m-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-body-m-text-decoration, underline);
          text-decoration:var(--link-body-m-text-decoration, underline);
}
.link--NQzfX[data-size=m][data-purpose=body][data-text-mode=on-accent]{
  font-family:var(--link-body-m-font-family, SB Sans Interface);
  font-weight:var(--link-body-m-font-weight, Regular);
  line-height:var(--link-body-m-line-height, 20px);
  font-size:var(--link-body-m-font-size, 14px);
  letter-spacing:var(--link-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-m-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-body-m-text-decoration, underline);
          text-decoration:var(--link-body-m-text-decoration, underline);
}
.link--NQzfX[data-size=m]{
  height:var(--size-link-m, 20px);
  gap:var(--space-link-gap-single, 0px);
  height:auto;
}
.link--NQzfX[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.link--NQzfX[data-size=l][data-purpose=display][data-text-mode=default]{
  font-family:var(--sans-display-l-font-family, SB Sans Interface);
  font-weight:var(--sans-display-l-font-weight, Bold);
  line-height:var(--sans-display-l-line-height, 72px);
  font-size:var(--sans-display-l-font-size, 56px);
  letter-spacing:var(--sans-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-l-paragraph-spacing, 30.8px);
}
.link--NQzfX[data-size=l][data-purpose=display][data-text-mode=accent]{
  font-family:var(--link-display-l-font-family, SB Sans Interface);
  font-weight:var(--link-display-l-font-weight, Bold);
  line-height:var(--link-display-l-line-height, 72px);
  font-size:var(--link-display-l-font-size, 56px);
  letter-spacing:var(--link-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-l-paragraph-spacing, 30.8px);
  -webkit-text-decoration:var(--link-display-l-text-decoration, underline);
          text-decoration:var(--link-display-l-text-decoration, underline);
}
.link--NQzfX[data-size=l][data-purpose=display][data-text-mode=on-accent]{
  font-family:var(--link-display-l-font-family, SB Sans Interface);
  font-weight:var(--link-display-l-font-weight, Bold);
  line-height:var(--link-display-l-line-height, 72px);
  font-size:var(--link-display-l-font-size, 56px);
  letter-spacing:var(--link-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-l-paragraph-spacing, 30.8px);
  -webkit-text-decoration:var(--link-display-l-text-decoration, underline);
          text-decoration:var(--link-display-l-text-decoration, underline);
}
.link--NQzfX[data-size=l][data-purpose=headline][data-text-mode=default]{
  font-family:var(--sans-headline-l-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-l-font-weight, Semibold);
  line-height:var(--sans-headline-l-line-height, 40px);
  font-size:var(--sans-headline-l-font-size, 32px);
  letter-spacing:var(--sans-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-l-paragraph-spacing, 17.6px);
}
.link--NQzfX[data-size=l][data-purpose=headline][data-text-mode=accent]{
  font-family:var(--link-headline-l-font-family, SB Sans Interface);
  font-weight:var(--link-headline-l-font-weight, Semibold);
  line-height:var(--link-headline-l-line-height, 40px);
  font-size:var(--link-headline-l-font-size, 32px);
  letter-spacing:var(--link-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-l-paragraph-spacing, 17.6px);
  -webkit-text-decoration:var(--link-headline-l-text-decoration, underline);
          text-decoration:var(--link-headline-l-text-decoration, underline);
}
.link--NQzfX[data-size=l][data-purpose=headline][data-text-mode=on-accent]{
  font-family:var(--link-headline-l-font-family, SB Sans Interface);
  font-weight:var(--link-headline-l-font-weight, Semibold);
  line-height:var(--link-headline-l-line-height, 40px);
  font-size:var(--link-headline-l-font-size, 32px);
  letter-spacing:var(--link-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-l-paragraph-spacing, 17.6px);
  -webkit-text-decoration:var(--link-headline-l-text-decoration, underline);
          text-decoration:var(--link-headline-l-text-decoration, underline);
}
.link--NQzfX[data-size=l][data-purpose=title][data-text-mode=default]{
  font-family:var(--sans-title-l-font-family, SB Sans Interface);
  font-weight:var(--sans-title-l-font-weight, Semibold);
  line-height:var(--sans-title-l-line-height, 28px);
  font-size:var(--sans-title-l-font-size, 20px);
  letter-spacing:var(--sans-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-l-paragraph-spacing, 11px);
}
.link--NQzfX[data-size=l][data-purpose=title][data-text-mode=accent]{
  font-family:var(--link-title-l-font-family, SB Sans Interface);
  font-weight:var(--link-title-l-font-weight, Semibold);
  line-height:var(--link-title-l-line-height, 28px);
  font-size:var(--link-title-l-font-size, 20px);
  letter-spacing:var(--link-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-l-paragraph-spacing, 11px);
  -webkit-text-decoration:var(--link-title-l-text-decoration, underline);
          text-decoration:var(--link-title-l-text-decoration, underline);
}
.link--NQzfX[data-size=l][data-purpose=title][data-text-mode=on-accent]{
  font-family:var(--link-title-l-font-family, SB Sans Interface);
  font-weight:var(--link-title-l-font-weight, Semibold);
  line-height:var(--link-title-l-line-height, 28px);
  font-size:var(--link-title-l-font-size, 20px);
  letter-spacing:var(--link-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-l-paragraph-spacing, 11px);
  -webkit-text-decoration:var(--link-title-l-text-decoration, underline);
          text-decoration:var(--link-title-l-text-decoration, underline);
}
.link--NQzfX[data-size=l][data-purpose=label][data-text-mode=default]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.link--NQzfX[data-size=l][data-purpose=label][data-text-mode=accent]{
  font-family:var(--link-label-l-font-family, SB Sans Interface);
  font-weight:var(--link-label-l-font-weight, Semibold);
  line-height:var(--link-label-l-line-height, 20px);
  font-size:var(--link-label-l-font-size, 14px);
  letter-spacing:var(--link-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-l-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-label-l-text-decoration, underline);
          text-decoration:var(--link-label-l-text-decoration, underline);
}
.link--NQzfX[data-size=l][data-purpose=label][data-text-mode=on-accent]{
  font-family:var(--link-label-l-font-family, SB Sans Interface);
  font-weight:var(--link-label-l-font-weight, Semibold);
  line-height:var(--link-label-l-line-height, 20px);
  font-size:var(--link-label-l-font-size, 14px);
  letter-spacing:var(--link-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-l-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-label-l-text-decoration, underline);
          text-decoration:var(--link-label-l-text-decoration, underline);
}
.link--NQzfX[data-size=l][data-purpose=body][data-text-mode=default]{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.link--NQzfX[data-size=l][data-purpose=body][data-text-mode=accent]{
  font-family:var(--link-body-l-font-family, SB Sans Interface);
  font-weight:var(--link-body-l-font-weight, Regular);
  line-height:var(--link-body-l-line-height, 24px);
  font-size:var(--link-body-l-font-size, 16px);
  letter-spacing:var(--link-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-l-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-body-l-text-decoration, underline);
          text-decoration:var(--link-body-l-text-decoration, underline);
}
.link--NQzfX[data-size=l][data-purpose=body][data-text-mode=on-accent]{
  font-family:var(--link-body-l-font-family, SB Sans Interface);
  font-weight:var(--link-body-l-font-weight, Regular);
  line-height:var(--link-body-l-line-height, 24px);
  font-size:var(--link-body-l-font-size, 16px);
  letter-spacing:var(--link-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-l-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-body-l-text-decoration, underline);
          text-decoration:var(--link-body-l-text-decoration, underline);
}
.link--NQzfX[data-size=l]{
  height:var(--size-link-l, 24px);
  gap:var(--space-link-gap-single, 0px);
  height:auto;
}
.link--NQzfX[data-size=l] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.icon--SCtQX{
  flex-shrink:0;
}`,""]),c.locals={link:"link--NQzfX",icon:"icon--SCtQX"};const T=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+progress-bar@0.1.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/progress-bar/dist/esm/components/ProgressBar/styles.module.css"(C,A,r){r.d(A,{A:()=>T});var n=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=r.n(n),i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),x=r.n(i),c=x()(P());c.push([C.id,`.progressBarContainer--RpoHf[data-size=s]{
  height:var(--size-progress-bar-progress-bar-height-s, 4px);
  border-radius:var(--radius-progress-bar-s, 2px);
}
.progressBarContainer--RpoHf[data-size=xs]{
  height:var(--size-progress-bar-progress-bar-height-xs, 2px);
  border-radius:var(--radius-progress-bar-xs, 2px);
}
.progressBarContainer--RpoHf{
  overflow:hidden;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}

.progressBarFiller--MXcdp{
  width:var(--progress);
  height:100%;
}
.progressBarFiller--MXcdp[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.progressBarFiller--MXcdp[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.progressBarFiller--MXcdp[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.progressBarFiller--MXcdp[data-appearance=orange]{
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.progressBarFiller--MXcdp[data-appearance=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.progressBarFiller--MXcdp[data-appearance=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.progressBarFiller--MXcdp[data-appearance=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.progressBarFiller--MXcdp[data-appearance=violet]{
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.progressBarFiller--MXcdp[data-appearance=pink]{
  background-color:var(--sys-pink-accent-default, #d1668e);
}`,""]),c.locals={progressBarContainer:"progressBarContainer--RpoHf",progressBarFiller:"progressBarFiller--MXcdp"};const T=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastSystemEvent/styles.module.css"(C,A,r){r.d(A,{A:()=>T});var n=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=r.n(n),i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),x=r.n(i),c=x()(P());c.push([C.id,`.icon--pSR3r svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.buttonClose--NI7Ma{
  border-radius:var(--radius-toaster-toast-system-event-button, 8px);
  height:var(--size-toaster-toast-system-event-button-neutral, 24px);
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  margin:0;
  padding:0;
  color:var(--sys-invert-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonClose--NI7Ma svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonClose--NI7Ma:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.buttonClose--NI7Ma:focus, .buttonClose--NI7Ma:active{
  color:var(--sys-invert-neutral-accent-pressed, #aaaebd);
}
.buttonClose--NI7Ma:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  outline-color:var(--sys-available-on-complementary, #ffffff);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}

.contentLayout--sRTq4{
  padding-top:var(--space-toaster-toast-system-event-container-content-layout-padding-top, 2px);
  display:flex;
  flex:1;
  flex-direction:column;
  min-width:0;
  word-break:break-word;
}

.title--UI7Iq{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
  display:grid;
}

.description--uKO8b{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}

@keyframes progressBarAnimation--Zmlts{
  0%{
    width:100%;
  }
  100%{
    width:0;
  }
}
.progress--pv4Ac{
  height:var(--size-toaster-toast-system-event-progress-bar, 4px);
  position:absolute;
  bottom:0;
  left:0;
  width:0;
  animation:progressBarAnimation--Zmlts linear 1 forwards;
  animation-play-state:running;
}

.body--VvQWV{
  gap:var(--space-toaster-toast-system-event-container-body-gap, 16px);
  display:flex;
  width:100%;
  overflow-wrap:break-word;
}

.footer--vfqAz{
  gap:var(--space-toaster-toast-system-event-container-footer-gap, 8px);
  position:relative;
  display:flex;
  flex-direction:row-reverse;
  width:100%;
}

.container--dpePA{
  padding:var(--space-toaster-toast-system-event-container-padding, 12px);
  border-radius:var(--radius-toaster-toast-system-event-container, 8px);
  gap:var(--space-toaster-toast-system-event-container-gap, 12px);
  cursor:default;
  position:relative;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  width:calc(var(--size-toaster-toast-system-event-container, 320px) - 2 * var(--space-toaster-toast-system-event-padding, 8px));
  max-width:100%;
}
.container--dpePA:hover .progress--pv4Ac{
  animation-play-state:paused;
}
.container--dpePA[data-appearance=neutral]{
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.container--dpePA[data-appearance=neutral] .icon--pSR3r{
  color:var(--sys-invert-neutral-accent-default, #cfd2dc);
}
.container--dpePA[data-appearance=neutral] .title--UI7Iq{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.container--dpePA[data-appearance=neutral] .description--uKO8b{
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}
.container--dpePA[data-appearance=neutral] .progress--pv4Ac{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.container--dpePA[data-appearance=error]{
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.container--dpePA[data-appearance=error] .icon--pSR3r{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.container--dpePA[data-appearance=error] .title--UI7Iq{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.container--dpePA[data-appearance=error] .description--uKO8b{
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}
.container--dpePA[data-appearance=error] .progress--pv4Ac{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.container--dpePA[data-appearance=errorCritical]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.container--dpePA[data-appearance=errorCritical] .icon--pSR3r{
  color:var(--sys-red-on-accent, #fffbf9);
}
.container--dpePA[data-appearance=errorCritical] .title--UI7Iq{
  color:var(--sys-red-on-accent, #fffbf9);
}
.container--dpePA[data-appearance=errorCritical] .description--uKO8b{
  color:var(--sys-red-on-accent, #fffbf9);
}
.container--dpePA[data-appearance=errorCritical] .progress--pv4Ac{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.container--dpePA[data-appearance=errorCritical] .buttonClose--NI7Ma{
  color:var(--sys-red-on-accent, #fffbf9);
  opacity:var(--opacity-a064, 0.64);
}
.container--dpePA[data-appearance=errorCritical] .buttonClose--NI7Ma:hover, .container--dpePA[data-appearance=errorCritical] .buttonClose--NI7Ma:focus-visible{
  opacity:1;
}
.container--dpePA[data-appearance=errorCritical] .buttonClose--NI7Ma:active{
  opacity:var(--opacity-a048, 0.48);
}
.container--dpePA[data-appearance=warning]{
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.container--dpePA[data-appearance=warning] .icon--pSR3r{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.container--dpePA[data-appearance=warning] .title--UI7Iq{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.container--dpePA[data-appearance=warning] .description--uKO8b{
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}
.container--dpePA[data-appearance=warning] .progress--pv4Ac{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.container--dpePA[data-appearance=success]{
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.container--dpePA[data-appearance=success] .icon--pSR3r{
  color:var(--sys-green-accent-default, #57b762);
}
.container--dpePA[data-appearance=success] .title--UI7Iq{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.container--dpePA[data-appearance=success] .description--uKO8b{
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}
.container--dpePA[data-appearance=success] .progress--pv4Ac{
  background-color:var(--sys-green-accent-default, #57b762);
}

.loader--ggNw2{
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}`,""]),c.locals={icon:"icon--pSR3r",buttonClose:"buttonClose--NI7Ma",contentLayout:"contentLayout--sRTq4",title:"title--UI7Iq",description:"description--uKO8b",progress:"progress--pv4Ac",progressBarAnimation:"progressBarAnimation--Zmlts",body:"body--VvQWV",footer:"footer--vfqAz",container:"container--dpePA",loader:"loader--ggNw2"};const T=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/ButtonIcon/styles.module.css"(C,A,r){r.d(A,{A:()=>T});var n=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=r.n(n),i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),x=r.n(i),c=x()(P());c.push([C.id,`.buttonIcon--pjvTm{
  border-radius:var(--radius-toaster-toast-system-event-button, 8px);
  height:var(--size-toaster-toast-system-event-button-neutral, 24px);
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  margin:0;
  padding:0;
  color:var(--sys-invert-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonIcon--pjvTm svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonIcon--pjvTm:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.buttonIcon--pjvTm:active{
  color:var(--sys-invert-neutral-accent-pressed, #aaaebd);
}
.buttonIcon--pjvTm:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  outline-color:var(--sys-available-on-complementary, #ffffff);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}`,""]),c.locals={buttonIcon:"buttonIcon--pjvTm"};const T=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/ButtonTextNeutral/styles.module.css"(C,A,r){r.d(A,{A:()=>T});var n=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=r.n(n),i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),x=r.n(i),c=x()(P());c.push([C.id,`.buttonTextNeutral--YNKaI{
  border-radius:var(--radius-toaster-toast-system-event-button, 8px);
  height:var(--size-toaster-toast-system-event-button-neutral, 24px);
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  margin:0;
  padding:0;
  color:var(--sys-invert-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonTextNeutral--YNKaI:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.buttonTextNeutral--YNKaI:active{
  color:var(--sys-invert-neutral-accent-pressed, #aaaebd);
}
.buttonTextNeutral--YNKaI:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-on-complementary, #ffffff);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}`,""]),c.locals={buttonTextNeutral:"buttonTextNeutral--YNKaI"};const T=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/FileItem/styles.module.css"(C,A,r){r.d(A,{A:()=>T});var n=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=r.n(n),i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),x=r.n(i),c=x()(P());c.push([C.id,`.fileLine--_IE9r{
  padding-top:var(--space-toaster-toast-upload-file-line-vertical-padding, 4px);
  padding-bottom:var(--space-toaster-toast-upload-file-line-vertical-padding, 4px);
  display:flex;
  flex-direction:column;
}

.fileHeadLine--AtMdh{
  gap:var(--space-toaster-toast-upload-headline-gap, 16px);
  min-height:var(--size-toaster-toast-upload-file-line-headline-height, 24px);
  display:flex;
  align-items:center;
}

.fileTitle--L3PKo{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  flex-grow:1;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}

.tooltip--sZzNh{
  z-index:1;
}

.fileStatusLine--TMkkx{
  gap:var(--space-toaster-toast-upload-status-line-gap, 8px);
  display:flex;
  align-items:center;
}

.fileStatusWrap--Epwxd{
  gap:var(--space-toaster-toast-upload-status-wrap-gap, 4px);
  overflow:hidden;
  display:flex;
  flex-grow:1;
  align-items:center;
}

.fileStatusDescription--OxwLh{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.fileStatusDescription--OxwLh[data-status=loading]{
  color:var(--sys-invert-neutral-text-disabled, #656774);
}
.fileStatusDescription--OxwLh[data-status=uploaded]{
  color:var(--sys-invert-neutral-text-disabled, #656774);
}

.fileSize--BZpaW{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  color:var(--sys-invert-neutral-text-disabled, #656774);
  text-wrap:nowrap;
}
.fileSize--BZpaW[data-status=loading]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.fileSize--BZpaW[data-status=uploaded]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}

.fileStatusPercentage--t8czM{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  color:var(--sys-invert-neutral-text-disabled, #656774);
}
.fileStatusPercentage--t8czM[data-status=loading]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.fileStatusPercentage--t8czM[data-status=uploaded]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}`,""]),c.locals={fileLine:"fileLine--_IE9r",fileHeadLine:"fileHeadLine--AtMdh",fileTitle:"fileTitle--L3PKo",tooltip:"tooltip--sZzNh",fileStatusLine:"fileStatusLine--TMkkx",fileStatusWrap:"fileStatusWrap--Epwxd",fileStatusDescription:"fileStatusDescription--OxwLh",fileSize:"fileSize--BZpaW",fileStatusPercentage:"fileStatusPercentage--t8czM"};const T=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/LoadingStatus/styles.module.css"(C,A,r){r.d(A,{A:()=>T});var n=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=r.n(n),i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),x=r.n(i),c=x()(P());c.push([C.id,`.successIcon--cvLRB{
  color:var(--sys-green-accent-default, #57b762);
}`,""]),c.locals={successIcon:"successIcon--cvLRB"};const T=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/styles.module.css"(C,A,r){r.d(A,{A:()=>T});var n=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=r.n(n),i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),x=r.n(i),c=x()(P());c.push([C.id,`.container--T5Aww{
  pointer-events:all;
  cursor:default;
  position:relative;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  width:calc(var(--size-toaster-toast-system-event-container, 320px) - var(--space-toaster-toast-system-event-container-padding, 12px));
  max-width:100%;
  max-height:386px;
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.container--T5Aww[data-collapsed]{
  gap:0;
}
.container--T5Aww[data-draggable]{
  cursor:grab;
}
.container--T5Aww[data-draggable]:active{
  cursor:grabbing;
}
.container--T5Aww{
  padding:var(--space-toaster-toast-system-event-container-padding, 12px);
  border-radius:var(--radius-toaster-toast-system-event-container, 8px);
  gap:var(--space-toaster-toast-system-event-container-gap, 12px);
}

.titleLine--K92wh{
  display:flex;
  flex-direction:column;
}

.titleLineBody--cR9F1{
  gap:var(--space-toaster-toast-upload-body-gap, 16px);
  display:flex;
  align-items:center;
}

.title--pBjlr{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
  flex-grow:1;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}

.generalProgress--vT1uN{
  gap:var(--space-toaster-toast-upload-general-progress-gap, 4px);
  display:flex;
  flex-direction:column;
  align-self:stretch;
}

.statusLine--cnV66{
  gap:var(--space-toaster-toast-upload-status-line-gap, 8px);
  display:flex;
  align-items:center;
}

.statusWrap--RHTjI{
  gap:var(--space-toaster-toast-upload-status-wrap-gap, 4px);
  overflow:hidden;
  display:flex;
  flex-grow:1;
  align-items:center;
}

.description--Q041j{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.description--Q041j[data-status=loading]{
  color:var(--sys-invert-neutral-text-light, #8b8e9b);
}
.description--Q041j[data-status=uploaded]{
  color:var(--sys-invert-neutral-text-light, #8b8e9b);
}

.totalCounter--eiY0I{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}

.totalPercentage--tL1gs{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}

.list--o4hhI{
  overflow-x:hidden;
  display:flex;
  flex-direction:column;
  box-sizing:content-box;
  max-height:288px;
  margin-top:0;
  padding-right:calc(var(--space-toaster-toast-system-event-container-padding, 12px) - var(--dimension-050m, 4px));
  transition:all 0.1s;
}
[data-collapsed] .list--o4hhI{
  max-height:0;
}`,""]),c.locals={container:"container--T5Aww",titleLine:"titleLine--K92wh",titleLineBody:"titleLineBody--cR9F1",title:"title--pBjlr",generalProgress:"generalProgress--vT1uN",statusLine:"statusLine--cnV66",statusWrap:"statusWrap--RHTjI",description:"description--Q041j",totalCounter:"totalCounter--eiY0I",totalPercentage:"totalPercentage--tL1gs",list:"list--o4hhI"};const T=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUserAction/styles.module.css"(C,A,r){r.d(A,{A:()=>T});var n=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=r.n(n),i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),x=r.n(i),c=x()(P());c.push([C.id,`.icon--h7GQd{
  display:flex;
  align-items:center;
  justify-content:center;
}
.icon--h7GQd svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.label--WtpFK{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}

.container--RJ4IJ{
  height:var(--size-toaster-toast-user-action-container, 40px);
  padding-left:var(--space-toaster-toast-user-action-horizont-padding, 8px);
  padding-right:var(--space-toaster-toast-user-action-horizont-padding, 8px);
  border-radius:var(--radius-toaster-toast-user-action-container, 8px);
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.container--RJ4IJ[data-appearance=error] .icon--h7GQd{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.container--RJ4IJ[data-appearance=warning] .icon--h7GQd{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.container--RJ4IJ[data-appearance=success] .icon--h7GQd{
  color:var(--sys-green-accent-default, #57b762);
}

.loader--qj3ad{
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}

.contentLayout--AUjSr{
  gap:var(--space-toaster-toast-user-action-content-layout-gap, 8px);
  padding-left:var(--space-toaster-toast-user-action-content-layout-horizont-padding, 8px);
  padding-right:var(--space-toaster-toast-user-action-content-layout-horizont-padding, 8px);
  display:flex;
  align-items:center;
}`,""]),c.locals={icon:"icon--h7GQd",label:"label--WtpFK",container:"container--RJ4IJ",loader:"loader--qj3ad",contentLayout:"contentLayout--AUjSr"};const T=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/style.css"(C,A,r){r.d(A,{A:()=>T});var n=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=r.n(n),i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),x=r.n(i),c=x()(P());c.push([C.id,`@keyframes osSnackTheme__toast__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

@keyframes osSnackTheme__toast__bounceInRight {
  from {
    transform: translate3d(3000px, 0, 0);
    opacity: 0;
  }
  60% {
    transform: translate3d(-25px, 0, 0);
    opacity: 1;
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes osSnackTheme__toast__bounceOutRight {
  20% {
    transform: translate3d(-20px, var(--y, 0), 0);
    opacity: 1;
  }
  to {
    transform: translate3d(2000px, var(--y, 0), 0);
    opacity: 0;
  }
}

@keyframes osSnackTheme__toast__bounceInUp {
  from {
    transform: translate3d(0, 3000px, 0);
    opacity: 0;
  }
  60% {
    transform: translate3d(0, -20px, 0);
    opacity: 1;
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes osSnackTheme__toast__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y, 0) - 10px), 0);
  }
  40%,
  45% {
    transform: translate3d(0, calc(var(--y, 0) + 20px), 0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, 2000px, 0);
    opacity: 0;
  }
}
`,""]);const T=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/styles.module.css"(C,A,r){r.d(A,{A:()=>T});var n=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=r.n(n),i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),x=r.n(i),c=x()(P());c.push([C.id,`.buttonCloseColumnWrapper--odFFP{
  gap:var(--space-toaster-toast-system-event-gap, 8px);
  padding:var(--space-toaster-toast-system-event-padding, 8px);
  width:var(--size-toaster-toast-system-event-container, 320px);
  position:fixed;
  box-sizing:border-box;
}

.buttonCloseColumn--goDIb{
  height:var(--size-toaster-button-close-column, 40px);
  border-radius:var(--radius-toaster-system-event-button-close-column, 8px);
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  cursor:pointer;
  box-sizing:border-box;
  width:100%;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  background-color:var(--sys-invert-neutral-background, #30303c);
  border:none;
  outline:none;
}
.buttonCloseColumn--goDIb:hover{
  background-color:var(--sys-invert-neutral-decor-hovered, #656774);
}
.buttonCloseColumn--goDIb:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  background-color:var(--sys-invert-neutral-decor-hovered, #656774);
  outline-color:var(--sys-available-complementary, #1c1c24);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonCloseColumn--goDIb:active{
  color:var(--sys-invert-neutral-text-light, #8b8e9b);
}

.bottom-right--CHniM{
  right:0;
  bottom:0;
}

.bottom-center--PUlsS{
  bottom:0;
}

.toaster--mCRN6{
  min-height:0;
  margin:0;
  padding:0;
  background-color:transparent;
  box-shadow:none;
}

.containerWithCloseAllButton--ChnXS{
  margin-bottom:calc(var(--size-toaster-button-close-column, 40px) + var(--space-toaster-toast-system-event-gap, 8px));
}

@media only screen and (max-width: 480px){
  .buttonCloseColumnWrapper--odFFP{
    max-width:calc(100vw - 2 * var(--space-toaster-toast-system-event-container-padding, 12px));
  }
}`,""]),c.locals={buttonCloseColumnWrapper:"buttonCloseColumnWrapper--odFFP",buttonCloseColumn:"buttonCloseColumn--goDIb","bottom-right":"bottom-right--CHniM","bottom-center":"bottom-center--PUlsS",toaster:"toaster--mCRN6",containerWithCloseAllButton:"containerWithCloseAllButton--ChnXS"};const T=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/toastify.css"(C,A,r){r.d(A,{A:()=>T});var n=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=r.n(n),i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),x=r.n(i),c=x()(P());c.push([C.id,`.osThemeSnack.Toastify__toast-container{
  position:fixed;
  box-sizing:border-box;
  padding:0;
}
.osThemeSnack.Toastify__toast-container .Toastify__toast{
  --y:0;
  touch-action:none;
  cursor:default;
  position:relative;
  z-index:0;
  overflow:hidden;
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
  min-height:unset;
  margin:0;
  padding:0;
  background-color:transparent;
  border-radius:unset;
  box-shadow:none;
}
.osThemeSnack.Toastify__toast-container .Toastify__toast-body{
  max-width:100%;
  margin:0;
  padding:0;
}
.osThemeSnack.Toastify__toast-container .Toastify__toast-body > div{
  max-width:100%;
}
.osThemeSnack.Toastify__toast-container .container-user-action{
  padding-bottom:var(--space-toaster-toast-user-action-padding-bottom, 8px);
  gap:var(--space-toaster-toast-user-action-gap, 8px);
  display:flex;
  flex-direction:column;
  align-items:center;
  width:-moz-fit-content;
  width:fit-content;
}
.osThemeSnack.Toastify__toast-container .Toastify--animate{
  animation-duration:0.5s;
  animation-fill-mode:both;
}
.osThemeSnack.Toastify__toast-container .Toastify__close-button{
  cursor:pointer;
  padding:0;
  border:none;
  outline:none;
}
.osThemeSnack.Toastify__toast-container .Toastify__toast-container{
  margin:0;
  padding:0;
}
.osThemeSnack.Toastify__toast-container .Toastify__progress-bar{
  background:transparent;
}
.osThemeSnack.Toastify__toast-container .Toastify__progress-bar--animated{
  animation:osSnackTheme__toast__trackProgress linear 1 forwards;
}
.osThemeSnack.Toastify__toast-container .Toastify__bounce-enter--bottom-right{
  animation-name:osSnackTheme__toast__bounceInRight;
  animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);
}
.osThemeSnack.Toastify__toast-container .Toastify__bounce-enter--bottom-center{
  animation-name:osSnackTheme__toast__bounceInUp;
  animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);
}
.osThemeSnack.Toastify__toast-container .Toastify__bounce-exit--bottom-right{
  animation-name:osSnackTheme__toast__bounceOutRight;
}
.osThemeSnack.Toastify__toast-container .Toastify__bounce-exit--bottom-center{
  animation-name:osSnackTheme__toast__bounceOutDown;
}

.osThemeSnack.Toastify__toast-container.osThemeSnack__toast-container__system-event{
  gap:var(--space-toaster-toast-system-event-gap, 8px);
  padding:var(--space-toaster-toast-system-event-padding, 8px);
  width:var(--size-toaster-toast-system-event-container, 320px);
  display:flex;
  flex-direction:column;
  max-width:calc(100vw - 2 * var(--space-toaster-toast-system-event-container-padding, 12px));
}

.osThemeSnack.Toastify__toast-container.osThemeSnack__toast-container__user-action{
  padding-bottom:var(--space-toaster-toast-user-action-padding-bottom, 8px);
  gap:var(--space-toaster-toast-user-action-gap, 8px);
  display:flex;
  flex-direction:column;
  align-items:center;
  width:-moz-fit-content;
  width:fit-content;
}

.osThemeSnack.Toastify__toast-container.osThemeSnack__toast-container__upload{
  pointer-events:none;
  z-index:1;
  top:var(--space-toaster-toast-system-event-container-padding, 12px);
  right:var(--space-toaster-toast-system-event-container-padding, 12px);
  bottom:var(--space-toaster-toast-system-event-container-padding, 12px);
  left:var(--space-toaster-toast-system-event-container-padding, 12px);
  display:flex;
  flex-direction:column;
}
.osThemeSnack.Toastify__toast-container.osThemeSnack__toast-container__upload > div{
  display:flex;
  align-items:flex-end;
  justify-content:flex-start;
  width:100%;
  height:100%;
}

.osThemeSnack.Toastify__toast-container--bottom-right{
  right:0;
  bottom:0;
}

.osThemeSnack.Toastify__toast-container--bottom-center{
  bottom:0;
  left:50%;
  transform:translateX(-50%);
}

@media only screen and (max-width: 480px){
  .osThemeSnack.Toastify__toast-container--bottom-right{
    right:0;
    bottom:0;
  }
  .osThemeSnack.Toastify__toast-container--bottom-center{
    bottom:0;
    left:50%;
    transform:translateX(-50%);
  }
}`,""]);const T=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.32_@snack-uikit+locale@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/helperComponents/ButtonAction/styles.module.css"(C,A,r){r.d(A,{A:()=>T});var n=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),P=r.n(n),i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),x=r.n(i),c=x()(P());c.push([C.id,`.buttonAction--Q5tEj{
  border-radius:var(--radius-toaster-toast-system-event-button, 8px);
  height:var(--size-toaster-toast-system-event-button, 32px);
  padding-left:var(--space-toaster-toast-system-event-padding, 8px);
  padding-right:var(--space-toaster-toast-system-event-padding, 8px);
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  margin:0;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  background-color:var(--sys-invert-neutral-decor-default, #51525d);
  border:none;
}
.buttonAction--Q5tEj:hover, .buttonAction--Q5tEj:focus-visible{
  background-color:var(--sys-invert-neutral-decor-hovered, #656774);
}
.buttonAction--Q5tEj:active{
  background-color:var(--sys-invert-neutral-decor-activated, #6d707f);
}
.buttonAction--Q5tEj:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-on-complementary, #ffffff);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonAction--Q5tEj[data-critical]{
  background-color:var(--sys-opacity-enabled, rgba(255, 255, 255, 0.1607843137));
}
.buttonAction--Q5tEj[data-critical]:hover, .buttonAction--Q5tEj[data-critical]:focus-visible{
  background-color:var(--sys-opacity-hovered, rgba(255, 255, 255, 0.2392156863));
}
.buttonAction--Q5tEj[data-critical]:active{
  background-color:var(--sys-opacity-activated, rgba(255, 255, 255, 0.3215686275));
}`,""]),c.locals={buttonAction:"buttonAction--Q5tEj"};const T=c}}]);})();
