import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-DCnmYW19.js";import{n as c,t as l}from"./src-cdoFlNdB.js";import{n as u,t as d}from"./testIds-DcIafzaH.js";var f,p,m,h,g,_,v,y;e((()=>{l(),o(),u(),f=t(),{expect:p,fn:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Actions/Link/Tests/Interaction`,id:`components-link-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{label:`Click me`,href:`https://example.com`,onClick:m(e=>e.preventDefault()),"data-test-id":d.root}},v={tags:[`test`,`dev`],render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:`InteractionTest`}),(0,f.jsx)(i,{children:`Click + Tab + Enter — onClick срабатывает.`}),(0,f.jsx)(n,{align:`center`,children:(0,f.jsx)(c,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=g(t).getByTestId(d.root);await n(`click: anchor fires onClick once`,async()=>{await h.click(r),p(e.onClick).toHaveBeenCalledTimes(1)}),await n(`keyboard: Tab focuses anchor`,async()=>{r.blur(),await h.tab(),await p(r).toHaveFocus()}),await n(`keyboard: Enter on focused anchor fires onClick`,async()=>{await h.keyboard(`{Enter}`),p(e.onClick).toHaveBeenCalledTimes(2)})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Click + Tab + Enter — onClick срабатывает.</DemoHint>
        <DemoActions align='center'>
          <Link {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByTestId(TEST_IDS.root);
    await step('click: anchor fires onClick once', async () => {
      await userEvent.click(link);
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
    await step('keyboard: Tab focuses anchor', async () => {
      link.blur();
      await userEvent.tab();
      await expect(link).toHaveFocus();
    });
    await step('keyboard: Enter on focused anchor fires onClick', async () => {
      await userEvent.keyboard('{Enter}');
      expect(args.onClick).toHaveBeenCalledTimes(2);
    });
  }
}`,...v.parameters?.docs?.source}}},y=[`InteractionTest`]}))();export{v as InteractionTest,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=Link.InteractionTest.stories-irp5ep_X.js.map