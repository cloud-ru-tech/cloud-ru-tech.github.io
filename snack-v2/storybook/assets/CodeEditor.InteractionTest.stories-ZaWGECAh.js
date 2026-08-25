import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BUDedHtH.js";import{a as c,d as l,i as u,l as d,n as f,p,s as m,u as h}from"./testIds-rj4STMU5.js";var g,_,v,y,b,x,S,C,w;e((()=>{h(),o(),d(),u(),f(),g=t(),{expect:_,fn:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Snack/Inputs & Forms/CodeEditor/Tests/Interaction`,id:`components-codeeditor-tests-interaction`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{language:`json`,value:m,hasHeader:!0,background:!0,onCopyClick:v(),"data-test-id":p.root},render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{width:`wide`,children:[(0,g.jsx)(a,{children:`InteractionTest`}),(0,g.jsx)(i,{children:`Header показывает язык; копирующая кнопка фокусируется и вызывает onCopyClick.`}),(0,g.jsx)(n,{align:`center`,children:(0,g.jsx)(`div`,{className:c.frame,children:(0,g.jsx)(l,{...e})})})]})})},C={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=x(t);await b(async()=>{await _(r.getByTestId(p.header)).toBeVisible()}),await n(`header: language label is rendered`,async()=>{await _(r.getByTestId(p.language)).toHaveTextContent(`Json`)}),await n(`click: copy button triggers onCopyClick`,async()=>{let t=r.getByTestId(p.copyButton);await y.click(t),_(e.onCopyClick).toHaveBeenCalledTimes(1)}),await n(`keyboard: copy button is focusable`,async()=>{let e=r.getByTestId(p.copyButton);e.focus(),await _(e).toHaveFocus()})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await waitFor(async () => {
      await expect(canvas.getByTestId(TEST_IDS.header)).toBeVisible();
    });
    await step('header: language label is rendered', async () => {
      await expect(canvas.getByTestId(TEST_IDS.language)).toHaveTextContent('Json');
    });
    await step('click: copy button triggers onCopyClick', async () => {
      const copyButton = canvas.getByTestId(TEST_IDS.copyButton);
      await userEvent.click(copyButton);
      expect(args.onCopyClick).toHaveBeenCalledTimes(1);
    });
    await step('keyboard: copy button is focusable', async () => {
      // Программный focus вместо Tab — Monaco-textarea монтируется и может перехватить
      // tab-секвенцию в зависимости от тайминга гидрации.
      const copyButton = canvas.getByTestId(TEST_IDS.copyButton) as HTMLElement;
      copyButton.focus();
      await expect(copyButton).toHaveFocus();
    });
  }
}`,...C.parameters?.docs?.source}}},w=[`InteractionTest`]}))();export{C as InteractionTest,w as __namedExportsOrder,S as default};
//# sourceMappingURL=CodeEditor.InteractionTest.stories-ZaWGECAh.js.map