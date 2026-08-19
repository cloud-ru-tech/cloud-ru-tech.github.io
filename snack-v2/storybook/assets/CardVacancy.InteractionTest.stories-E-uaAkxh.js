import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-aHi-eIAa.js";import{a as c,n as l,t as u}from"./src-CFn4wk1K.js";import{t as d}from"./testIds-yptA112j.js";var f,p,m,h,g,_,v,y;e((()=>{u(),o(),d(),f=t(),{expect:p,fn:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Site/CardVacancy/Tests/Interaction`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{as:`button`,title:`Frontend Developer`,description:`Remote · Full-time`,onClick:m(),"data-test-id":c.root}},v={tags:[`test`,`dev`],render:e=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{width:`wide`,children:[(0,f.jsx)(a,{children:`InteractionTest`}),(0,f.jsx)(i,{children:`Клик по карточке вызывает onClick; Tab переводит на неё фокус.`}),(0,f.jsx)(n,{block:!0,children:(0,f.jsx)(l,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=g(t).getByTestId(c.root);await n(`click: triggers onClick once`,async()=>{await h.click(r),p(e.onClick).toHaveBeenCalledTimes(1)}),await n(`keyboard: Tab focuses the card`,async()=>{r.blur(),await h.tab(),await p(r).toHaveFocus()}),await n(`keyboard: Enter triggers onClick again`,async()=>{await h.keyboard(`{Enter}`),p(e.onClick).toHaveBeenCalledTimes(2)})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик по карточке вызывает onClick; Tab переводит на неё фокус.</DemoHint>
        <DemoActions block>
          <CardVacancy {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.root);
    await step('click: triggers onClick once', async () => {
      await userEvent.click(root);
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
    await step('keyboard: Tab focuses the card', async () => {
      root.blur();
      await userEvent.tab();
      await expect(root).toHaveFocus();
    });
    await step('keyboard: Enter triggers onClick again', async () => {
      await userEvent.keyboard('{Enter}');
      expect(args.onClick).toHaveBeenCalledTimes(2);
    });
  }
}`,...v.parameters?.docs?.source}}},y=[`InteractionTest`]}))();export{v as InteractionTest,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=CardVacancy.InteractionTest.stories-E-uaAkxh.js.map