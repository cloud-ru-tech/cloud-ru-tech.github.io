import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-n9OCAA8q.js";import{_ as c,o as l,t as u,v as d}from"./src-C6XRrQfq.js";import{n as f,t as p}from"./testIds-rYjH_ezV.js";import{i as m,r as h}from"./playground.helpers-DKdGZf6W.js";var g,_,v,y,b,x,S,C,w;e((()=>{u(),o(),f(),m(),g=t(),{expect:_,fn:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Snack/Inputs & Forms/Chips/ChipChoice/Multiple/Tests/Interaction`,id:`components-chips-chipchoice-multiple-tests-interaction`,component:l.Multiple,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{label:`Filter`,size:d.S,options:h,autoApply:!0,onChange:v(),"data-test-id":p.chipChoice.root}},C={tags:[`test`,`dev`],render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{children:[(0,g.jsx)(a,{children:`InteractionTest (Multiple)`}),(0,g.jsx)(i,{children:`Клик открывает дроплист; множественный выбор вызывает onChange.`}),(0,g.jsx)(n,{align:`center`,children:(0,g.jsx)(l.Multiple,{...e})})]})}),play:async({canvasElement:e,step:t})=>{let n=x(e),r=n.getByTestId(p.chipChoice.root);await t(`click: opens droplist`,async()=>{await y.click(r),await b(()=>{_(n.getByTestId(c.droplist)).toBeVisible()})}),await t(`click option: onChange fires`,async()=>{let e=n.getByTestId(c.droplist),t=x(e).getByTestId(p.chipChoice.option1);await y.click(t)}),await t(`Escape: closes droplist`,async()=>{await y.keyboard(`{Escape}`),await b(()=>{_(n.queryByTestId(c.droplist)).not.toBeInTheDocument()})})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest (Multiple)</DemoTitle>
        <DemoHint>Клик открывает дроплист; множественный выбор вызывает onChange.</DemoHint>
        <DemoActions align='center'>
          <ChipChoice.Multiple {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByTestId(TEST_IDS.chipChoice.root);
    await step('click: opens droplist', async () => {
      await userEvent.click(chip);
      await waitFor(() => {
        expect(canvas.getByTestId(CHIP_CHOICE_TEST_IDS.droplist)).toBeVisible();
      });
    });
    await step('click option: onChange fires', async () => {
      const droplist = canvas.getByTestId(CHIP_CHOICE_TEST_IDS.droplist);
      const option = within(droplist).getByTestId(TEST_IDS.chipChoice.option1);
      await userEvent.click(option);
    });
    await step('Escape: closes droplist', async () => {
      await userEvent.keyboard('{Escape}');
      await waitFor(() => {
        expect(canvas.queryByTestId(CHIP_CHOICE_TEST_IDS.droplist)).not.toBeInTheDocument();
      });
    });
  }
}`,...C.parameters?.docs?.source}}},w=[`InteractionTest`]}))();export{C as InteractionTest,w as __namedExportsOrder,S as default};
//# sourceMappingURL=ChipChoiceMultiple.InteractionTest.stories-BSKbDvZT.js.map