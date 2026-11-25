import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-DKU1u6-r.js";import{_ as n,d as r,f as i,m as a,n as o,p as s}from"./iframe-BrjQ7Lrw.js";import{n as c,t as l}from"./Markdown-DQZIBJ1U.js";import{n as u,t as d}from"./testIds-8Coo4vUT.js";var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{c(),o(),u(),f=t(),{expect:p,fn:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Inputs & Forms/Markdown/Markdown/Tests/Interaction`,id:`components-markdown-markdown-tests-interaction`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{value:`## Code block

\`\`\`ts
export function add(a: number, b: number) {
  return a + b
}
\`\`\`
`,skipHtml:!0,onCodeCopyClick:m(),"data-test-id":d.viewer},render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(a,{width:`wide`,children:[(0,f.jsx)(n,{children:`InteractionTest`}),(0,f.jsx)(i,{children:`Клик по copy-кнопке code-блока вызывает onCodeCopyClick с сырым кодом.`}),(0,f.jsx)(r,{align:`start`,children:(0,f.jsx)(l,{...e})})]})})},v={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=g(t).getAllByTestId(d.viewerCodeCopy)[0];await n(`click: copy button fires onCodeCopyClick with the raw code`,async()=>{await p(r).toBeVisible(),await h.click(r),p(e.onCodeCopyClick).toHaveBeenCalledTimes(1),p(e.onCodeCopyClick).toHaveBeenCalledWith(p.stringContaining(`export function add`))})}},y=[`InteractionTest`]})))()}b();export{v as InteractionTest,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=Markdown.InteractionTest.stories--_CnUc2b.js.map