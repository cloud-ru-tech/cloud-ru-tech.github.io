import{a as e}from"./rolldown-runtime.CNC7AqOf.js";import{t}from"./react.2WCt8-Jc.js";import{t as n}from"./jsx-runtime.C852uKRQ.js";import{t as r}from"./CodeEditor.Bqc50A5n.js";var i=e(t(),1),a=n(),o=`{
  "copy": "me"
}
`;function s(){let[e,t]=(0,i.useState)(o),[n,s]=(0,i.useState)(null);return(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,a.jsx)(r,{language:`json`,value:e,hasHeader:!0,height:200,onChange:e=>t(e??``),onCopyClick:()=>s(new Date().toLocaleTimeString())}),(0,a.jsxs)(`span`,{children:[`Last copy: `,n??`—`]})]})}export{s as WithHeader};