import{a as e}from"./rolldown-runtime.BWaJ3C7D.js";import{t}from"./CodeEditor.kT-umsAN.js";import{t as n}from"./react.QlMpxN7r.js";import{t as r}from"./jsx-runtime.C6pM4YaU.js";var i=e(n(),1),a=r(),o=`{
  "copy": "me"
}
`;function s(){let[e,n]=(0,i.useState)(o),[r,s]=(0,i.useState)(null);return(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,a.jsx)(t,{language:`json`,value:e,hasHeader:!0,height:200,onChange:e=>n(e??``),onCopyClick:()=>s(new Date().toLocaleTimeString())}),(0,a.jsxs)(`span`,{children:[`Last copy: `,r??`—`]})]})}export{s as WithHeader};