import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-D4MTfTET.js";import{i as c,t as l}from"./src-CUbncPTi.js";import{n as u,t as d}from"./testIds-D2HR4QJV.js";var f,p,m,h,g,_,v,y;e((()=>{l(),o(),u(),f=t(),{expect:p,fn:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Inputs & Forms/Markdown/Markdown/Tests/Interaction`,id:`components-markdown-markdown-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{value:`## Code block

\`\`\`ts
export function add(a: number, b: number) {
  return a + b
}
\`\`\`
`,skipHtml:!0,onCodeCopyClick:m(),"data-test-id":d.viewer},render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{width:`wide`,children:[(0,f.jsx)(a,{children:`InteractionTest`}),(0,f.jsx)(i,{children:`Клик по copy-кнопке code-блока вызывает onCodeCopyClick с сырым кодом.`}),(0,f.jsx)(n,{align:`start`,children:(0,f.jsx)(c,{...e})})]})})},v={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=g(t).getAllByTestId(d.viewerCodeCopy)[0];await n(`click: copy button fires onCodeCopyClick with the raw code`,async()=>{await p(r).toBeVisible(),await h.click(r),p(e.onCodeCopyClick).toHaveBeenCalledTimes(1),p(e.onCodeCopyClick).toHaveBeenCalledWith(p.stringContaining(`export function add`))})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const copy = canvas.getAllByTestId(TEST_IDS.viewerCodeCopy)[0];
    await step('click: copy button fires onCodeCopyClick with the raw code', async () => {
      await expect(copy).toBeVisible();
      await userEvent.click(copy);
      expect(args.onCodeCopyClick).toHaveBeenCalledTimes(1);
      expect(args.onCodeCopyClick).toHaveBeenCalledWith(expect.stringContaining('export function add'));
    });
  }
}`,...v.parameters?.docs?.source}}},y=[`InteractionTest`]}))();export{v as InteractionTest,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=Markdown.InteractionTest.stories-4ALHun53.js.map