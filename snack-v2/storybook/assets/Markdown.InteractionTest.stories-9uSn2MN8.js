import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-DwE8glvy.js";import{i as c,t as l}from"./src-BTQR9HJf.js";import{n as u,t as d}from"./testIds-KiTU2BGu.js";var f,p,m,h,g,_,v,y;e((()=>{l(),o(),u(),f=t(),{expect:p,fn:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Inputs & Forms/Markdown/Markdown/Tests/Interaction`,id:`components-markdown-markdown-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{value:`## Code block

\`\`\`ts
export function add(a: number, b: number) {
  return a + b
}
\`\`\`
`,skipHtml:!0,onCodeCopyClick:m(),"data-test-id":d.viewer},render:e=>(0,f.jsx)(r,{children:(0,f.jsxs)(a,{width:`wide`,children:[(0,f.jsx)(i,{children:`InteractionTest`}),(0,f.jsx)(n,{children:`Клик по copy-кнопке code-блока вызывает onCodeCopyClick с сырым кодом.`}),(0,f.jsx)(s,{align:`start`,children:(0,f.jsx)(c,{...e})})]})})},v={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=g(t).getAllByTestId(d.viewerCodeCopy)[0];await n(`click: copy button fires onCodeCopyClick with the raw code`,async()=>{await p(r).toBeVisible(),await h.click(r),p(e.onCodeCopyClick).toHaveBeenCalledTimes(1),p(e.onCodeCopyClick).toHaveBeenCalledWith(p.stringContaining(`export function add`))})}},y=[`InteractionTest`]}))();export{v as InteractionTest,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=Markdown.InteractionTest.stories-9uSn2MN8.js.map