import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-CH0ThVYh.js";import{a as c,i as l,n as u,t as d}from"./src-DkI8BbX52.js";import{n as f,t as p}from"./testIds-BjFzaAdR.js";var m,h,g,_,v,y,b,x;e((()=>{d(),o(),f(),m=t(),{expect:h,fn:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`AI/Primitives/AiAttachment/Tests/Interaction`,id:`ai-aiattachment-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{type:c.File,state:l.Error,fileName:`report.pdf`,onRemove:g(),onRetry:g(),onClick:g(),"data-test-id":p.root}},b={tags:[`test`,`dev`],render:e=>(0,m.jsx)(r,{children:(0,m.jsxs)(a,{children:[(0,m.jsx)(i,{children:`Interaction`}),(0,m.jsx)(n,{children:`Плитка сообщает о нажатии крестика, повтора и самой плитки отдельно.`}),(0,m.jsx)(s,{align:`center`,children:(0,m.jsx)(u,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=v(t);await n(`retry: fires onRetry only`,async()=>{await _.click(r.getByTestId(p.retry)),h(e.onRetry).toHaveBeenCalledTimes(1),h(e.onClick).not.toHaveBeenCalled()}),await n(`remove: fires onRemove only`,async()=>{await _.hover(r.getByTestId(p.root)),await _.click(r.getByTestId(p.remove)),h(e.onRemove).toHaveBeenCalledTimes(1),h(e.onClick).not.toHaveBeenCalled()}),await n(`keyboard: Enter on the tile fires onClick`,async()=>{r.getByTestId(p.root).focus(),await _.keyboard(`{Enter}`),h(e.onClick).toHaveBeenCalledTimes(1)})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: (args: AiAttachmentProps) => <DemoPage>
      <DemoPanel>
        <DemoTitle>Interaction</DemoTitle>
        <DemoHint>Плитка сообщает о нажатии крестика, повтора и самой плитки отдельно.</DemoHint>
        <DemoActions align='center'>
          <AiAttachment {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('retry: fires onRetry only', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.retry));
      expect(args.onRetry).toHaveBeenCalledTimes(1);
      expect(args.onClick).not.toHaveBeenCalled();
    });
    await step('remove: fires onRemove only', async () => {
      await userEvent.hover(canvas.getByTestId(TEST_IDS.root));
      await userEvent.click(canvas.getByTestId(TEST_IDS.remove));
      expect(args.onRemove).toHaveBeenCalledTimes(1);
      expect(args.onClick).not.toHaveBeenCalled();
    });
    await step('keyboard: Enter on the tile fires onClick', async () => {
      canvas.getByTestId(TEST_IDS.root).focus();
      await userEvent.keyboard('{Enter}');
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
  }
}`,...b.parameters?.docs?.source}}},x=[`InteractionTest`]}))();export{b as InteractionTest,x as __namedExportsOrder,y as default};
//# sourceMappingURL=AiAttachment.InteractionTest.stories-BO4YIB00.js.map