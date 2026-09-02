import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-n9OCAA8q.js";import{a as c,t as l}from"./src-DvQv5yPC.js";import{n as u,t as d}from"./src-CC2yvbwp.js";import{n as f,t as p}from"./styles.module-Cu9lTr2p.js";import{n as m,t as h}from"./testIds-CX4qu5K1.js";var g,_,v,y,b,x,S,C;e((()=>{l(),d(),o(),p(),m(),g=t(),{expect:_,fn:v,userEvent:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Navigation/Stepper/Tests/Interaction`,id:`components-stepper-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}}},S={tags:[`test`,`dev`],args:{onChangeCurrentStep:v()},render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{width:`wide`,children:[(0,g.jsx)(a,{children:`InteractionTest`}),(0,g.jsx)(i,{children:`Навигация между шагами через кнопки Prev и Next.`}),(0,g.jsx)(n,{block:!0,children:(0,g.jsx)(`div`,{className:f.containerDesktop,children:(0,g.jsx)(u,{...e,steps:[{title:`Шаг 1`},{title:`Шаг 2`},{title:`Шаг 3`}],"data-test-id":h.root,children:({stepper:e,goNext:t,goPrev:n,currentStepIndex:r,stepCount:i,isCompleted:a})=>(0,g.jsxs)(`div`,{className:f.stack,children:[e,(0,g.jsxs)(`div`,{className:f.row,children:[(0,g.jsx)(c,{label:`Prev`,size:`s`,view:`outline`,appearance:`neutral`,onClick:()=>n(),disabled:r===0,"data-test-id":h.prev}),(0,g.jsx)(c,{label:`Next`,size:`s`,onClick:()=>t(),disabled:a||r===i-1,"data-test-id":h.next})]})]})})})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=b(t),i=r.getByTestId(h.next),a=r.getByTestId(h.prev);await n(`initial: Prev is disabled on first step`,async()=>{await _(a).toBeDisabled()}),await n(`click: Next advances to step 2 and fires onChangeCurrentStep`,async()=>{await y.click(i),await _(e.onChangeCurrentStep).toHaveBeenCalled()}),await n(`click: Prev returns to step 1 and Prev becomes disabled`,async()=>{await y.click(a),await _(a).toBeDisabled()}),await n(`keyboard: Enter on Next advances again`,async()=>{i.focus(),await y.keyboard(`{Enter}`),await _(e.onChangeCurrentStep).toHaveBeenCalledTimes(3)})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    onChangeCurrentStep: fn()
  },
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Навигация между шагами через кнопки Prev и Next.</DemoHint>
        <DemoActions block>
          <div className={styles.containerDesktop}>
            <Stepper {...args} steps={[{
            title: 'Шаг 1'
          }, {
            title: 'Шаг 2'
          }, {
            title: 'Шаг 3'
          }]} data-test-id={TEST_IDS.root}>
              {({
              stepper,
              goNext,
              goPrev,
              currentStepIndex,
              stepCount,
              isCompleted
            }) => <div className={styles.stack}>
                  {stepper}
                  <div className={styles.row}>
                    <Button label='Prev' size='s' view='outline' appearance='neutral' onClick={() => goPrev()} disabled={currentStepIndex === 0} data-test-id={TEST_IDS.prev} />
                    <Button label='Next' size='s' onClick={() => goNext()} disabled={isCompleted || currentStepIndex === stepCount - 1} data-test-id={TEST_IDS.next} />
                  </div>
                </div>}
            </Stepper>
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const next = canvas.getByTestId(TEST_IDS.next);
    const prev = canvas.getByTestId(TEST_IDS.prev);
    await step('initial: Prev is disabled on first step', async () => {
      await expect(prev).toBeDisabled();
    });
    await step('click: Next advances to step 2 and fires onChangeCurrentStep', async () => {
      await userEvent.click(next);
      await expect(args.onChangeCurrentStep).toHaveBeenCalled();
    });
    await step('click: Prev returns to step 1 and Prev becomes disabled', async () => {
      await userEvent.click(prev);
      await expect(prev).toBeDisabled();
    });
    await step('keyboard: Enter on Next advances again', async () => {
      next.focus();
      await userEvent.keyboard('{Enter}');
      await expect(args.onChangeCurrentStep).toHaveBeenCalledTimes(3);
    });
  }
}`,...S.parameters?.docs?.source}}},C=[`InteractionTest`]}))();export{S as InteractionTest,C as __namedExportsOrder,x as default};
//# sourceMappingURL=Stepper.InteractionTest.stories-DuYZvWFC.js.map