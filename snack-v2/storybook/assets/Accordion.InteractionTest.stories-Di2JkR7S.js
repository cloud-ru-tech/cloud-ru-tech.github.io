import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,m as r,t as i,u as a}from"./iframe-Bl-uTAel.js";import{a as o,c as s,n as c,t as l}from"./src-Bu7H4QUA.js";import{n as u,t as d}from"./styles.module-BSJOTdPD.js";import{n as f,t as p}from"./testIds-BWCNm9Ea.js";var m,h,g,_,v,y,b,x,S;e((()=>{i(),l(),s(),d(),f(),m=t(),{expect:h,fn:g,userEvent:_,waitFor:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Layout & containers/Accordion/Accordion/Tests/Interaction`,id:`components-accordion-accordion-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onExpandedChange:g()}},x={tags:[`test`,`dev`],args:{selectionMode:o.Single},render:e=>(0,m.jsx)(a,{children:(0,m.jsxs)(n,{width:`wide`,children:[(0,m.jsx)(r,{children:`InteractionTest`}),(0,m.jsx)(`div`,{className:u.story,children:(0,m.jsx)(c,{...e,children:(0,m.jsxs)(`div`,{className:u.listM,children:[(0,m.jsx)(c.CollapseBlockPrimary,{id:`block-1`,"data-test-id":p.accordion.block1,title:`Block 1`,children:`Content 1`}),(0,m.jsx)(c.CollapseBlockPrimary,{id:`block-2`,"data-test-id":p.accordion.block2,title:`Block 2`,children:`Content 2`})]})})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=y(t),i=r.getByTestId(p.accordion.block1),a=r.getByTestId(p.accordion.block2);await n(`single mode: click expands first block`,async()=>{let t=y(i).getAllByTestId(p.collapseBlock.chevron)[0];await _.click(t),await v(()=>h(e.onExpandedChange).toHaveBeenCalled()),await v(()=>h(i).toHaveAttribute(`data-expanded`,`true`))}),await n(`single mode: expanding second block collapses first`,async()=>{let e=y(a).getAllByTestId(p.collapseBlock.chevron)[0];await _.click(e),await v(()=>h(a).toHaveAttribute(`data-expanded`,`true`)),await v(()=>h(i).toHaveAttribute(`data-expanded`,`false`))})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    selectionMode: SELECTION_MODE.Single
  },
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>InteractionTest</DemoTitle>
        <div className={styles.story}>
          <Accordion {...args}>
            <div className={styles.listM}>
              <Accordion.CollapseBlockPrimary id='block-1' data-test-id={TEST_IDS.accordion.block1} title='Block 1'>
                Content 1
              </Accordion.CollapseBlockPrimary>
              <Accordion.CollapseBlockPrimary id='block-2' data-test-id={TEST_IDS.accordion.block2} title='Block 2'>
                Content 2
              </Accordion.CollapseBlockPrimary>
            </div>
          </Accordion>
        </div>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const block1 = canvas.getByTestId(TEST_IDS.accordion.block1);
    const block2 = canvas.getByTestId(TEST_IDS.accordion.block2);
    await step('single mode: click expands first block', async () => {
      const chevron1 = within(block1).getAllByTestId(TEST_IDS.collapseBlock.chevron)[0];
      await userEvent.click(chevron1);
      await waitFor(() => expect(args.onExpandedChange).toHaveBeenCalled());
      await waitFor(() => expect(block1).toHaveAttribute('data-expanded', 'true'));
    });
    await step('single mode: expanding second block collapses first', async () => {
      const chevron2 = within(block2).getAllByTestId(TEST_IDS.collapseBlock.chevron)[0];
      await userEvent.click(chevron2);
      await waitFor(() => expect(block2).toHaveAttribute('data-expanded', 'true'));
      await waitFor(() => expect(block1).toHaveAttribute('data-expanded', 'false'));
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`]}))();export{x as InteractionTest,S as __namedExportsOrder,b as default};
//# sourceMappingURL=Accordion.InteractionTest.stories-Di2JkR7S.js.map