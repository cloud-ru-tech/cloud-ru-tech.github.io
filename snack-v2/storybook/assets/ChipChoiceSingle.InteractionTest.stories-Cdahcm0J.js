import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{_ as c,o as l,t as u,y as d}from"./src-6bXoMmzW.js";import{n as f,t as p}from"./testIds-rYjH_ezV.js";import{i as m,r as h}from"./playground.helpers-CRpaFzcy.js";var g,_,v,y,b,x,S,C,w;e((()=>{u(),o(),f(),m(),g=t(),{expect:_,fn:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Snack/Inputs & Forms/Chips/ChipChoice/Single/Tests/Interaction`,id:`components-chips-chipchoice-single-tests-interaction`,component:l.Single,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{label:`Filter`,size:d.S,options:h,autoApply:!0,onChange:v(),"data-test-id":p.chipChoice.root}},C={tags:[`test`,`dev`],render:e=>(0,g.jsx)(r,{children:(0,g.jsxs)(a,{children:[(0,g.jsx)(i,{children:`InteractionTest`}),(0,g.jsx)(n,{children:`Клик открывает дроплист; выбор опции вызывает onChange и закрывает дроплист.`}),(0,g.jsx)(s,{align:`center`,children:(0,g.jsx)(l.Single,{...e})})]})}),play:async({canvasElement:e,step:t})=>{let n=x(e),r=n.getByTestId(p.chipChoice.root);await t(`click: opens droplist`,async()=>{await y.click(r),await b(()=>{_(n.getByTestId(c.droplist)).toBeVisible()})}),await t(`ArrowDown: opens droplist from keyboard`,async()=>{await y.keyboard(`{Escape}`),r.focus(),await y.keyboard(`{ArrowDown}`),await b(()=>{_(n.getByTestId(c.droplist)).toBeVisible()})})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик открывает дроплист; выбор опции вызывает onChange и закрывает дроплист.</DemoHint>
        <DemoActions align='center'>
          <ChipChoice.Single {...args} />
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
    await step('ArrowDown: opens droplist from keyboard', async () => {
      await userEvent.keyboard('{Escape}');
      chip.focus();
      await userEvent.keyboard('{ArrowDown}');
      await waitFor(() => {
        expect(canvas.getByTestId(CHIP_CHOICE_TEST_IDS.droplist)).toBeVisible();
      });
    });
  }
}`,...C.parameters?.docs?.source}}},w=[`InteractionTest`]}))();export{C as InteractionTest,w as __namedExportsOrder,S as default};
//# sourceMappingURL=ChipChoiceSingle.InteractionTest.stories-Cdahcm0J.js.map