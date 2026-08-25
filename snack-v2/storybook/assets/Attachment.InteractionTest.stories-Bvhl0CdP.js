import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BiKgHgfb.js";import{i as c,o as l,t as u}from"./src-Bl5zh1aN.js";import{n as d,t as f}from"./sampleFiles-CGSbhD9C.js";import{n as p,t as m}from"./testIds-Dtc7Ekrj.js";var h,g,_,v,y,b,x,S;e((()=>{u(),o(),d(),p(),h=t(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Data display/Attachment/Attachment/Tests/Interaction`,id:`components-attachment-attachment-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{size:l.S,file:f,onClick:_(),onDownload:_(),onDelete:_(),onRetry:_(),"data-test-id":m.attachment.root}},x={tags:[`test`,`dev`],render:e=>(0,h.jsx)(s,{children:(0,h.jsxs)(r,{children:[(0,h.jsx)(a,{children:`InteractionTest`}),(0,h.jsx)(i,{children:`Action-кнопки видны всегда (Figma 5778:49170); клик не пробрасывает onClick корня.`}),(0,h.jsx)(n,{align:`center`,children:(0,h.jsx)(c,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=y(t);await n(`click: download triggers onDownload, не триггерит onClick корня`,async()=>{await v.click(r.getByTestId(m.attachment.downloadAction)),g(e.onDownload).toHaveBeenCalledTimes(1),g(e.onClick).toHaveBeenCalledTimes(0)}),await n(`click: delete triggers onDelete, не триггерит onClick корня`,async()=>{await v.click(r.getByTestId(m.attachment.deleteAction)),g(e.onDelete).toHaveBeenCalledTimes(1),g(e.onClick).toHaveBeenCalledTimes(0)}),await n(`default state: retry-кнопка отсутствует (видна только при error)`,async()=>{g(r.queryByTestId(m.attachment.retryAction)).toBeNull()})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Action-кнопки видны всегда (Figma 5778:49170); клик не пробрасывает onClick корня.</DemoHint>
        <DemoActions align='center'>
          <Attachment {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click: download triggers onDownload, не триггерит onClick корня', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.attachment.downloadAction));
      expect(args.onDownload).toHaveBeenCalledTimes(1);
      expect(args.onClick).toHaveBeenCalledTimes(0);
    });
    await step('click: delete triggers onDelete, не триггерит onClick корня', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.attachment.deleteAction));
      expect(args.onDelete).toHaveBeenCalledTimes(1);
      expect(args.onClick).toHaveBeenCalledTimes(0);
    });
    await step('default state: retry-кнопка отсутствует (видна только при error)', async () => {
      expect(canvas.queryByTestId(TEST_IDS.attachment.retryAction)).toBeNull();
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`]}))();export{x as InteractionTest,S as __namedExportsOrder,b as default};
//# sourceMappingURL=Attachment.InteractionTest.stories-Bvhl0CdP.js.map