import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-CqCwb0Nr.js";import{_ as c,o as l,t as u,v as d}from"./src-CoKVgEkq.js";import{n as f,t as p}from"./testIds-rYjH_ezV.js";var m,h,g,_,v,y,b,x,S;e((()=>{u(),o(),f(),m=t(),{expect:h,fn:g,userEvent:_,waitFor:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Inputs & Forms/Chips/ChipChoice/Date/Tests/Interaction`,id:`components-chips-chipchoice-date-tests-interaction`,component:l.Date,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{label:`Date`,size:d.S,mode:`date`,onChange:g(),"data-test-id":p.chipChoice.root}},x={tags:[`test`,`dev`],render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`InteractionTest (Date)`}),(0,m.jsx)(i,{children:`Клик открывает календарь для выбора даты.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(l.Date,{...e})})]})}),play:async({canvasElement:e,step:t})=>{let n=y(e),r=n.getByTestId(p.chipChoice.root);await t(`click: opens calendar dropdown`,async()=>{await _.click(r),await v(()=>{h(n.getByTestId(c.droplist)).toBeVisible()})}),await t(`Escape: closes dropdown`,async()=>{await _.keyboard(`{Escape}`),await v(()=>{h(n.queryByTestId(c.droplist)).not.toBeInTheDocument()})})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest (Date)</DemoTitle>
        <DemoHint>Клик открывает календарь для выбора даты.</DemoHint>
        <DemoActions align='center'>
          <ChipChoice.Date {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByTestId(TEST_IDS.chipChoice.root);
    await step('click: opens calendar dropdown', async () => {
      await userEvent.click(chip);
      await waitFor(() => {
        expect(canvas.getByTestId(CHIP_CHOICE_TEST_IDS.droplist)).toBeVisible();
      });
    });
    await step('Escape: closes dropdown', async () => {
      await userEvent.keyboard('{Escape}');
      await waitFor(() => {
        expect(canvas.queryByTestId(CHIP_CHOICE_TEST_IDS.droplist)).not.toBeInTheDocument();
      });
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`]}))();export{x as InteractionTest,S as __namedExportsOrder,b as default};
//# sourceMappingURL=ChipChoiceDate.InteractionTest.stories-fYhkPZps.js.map