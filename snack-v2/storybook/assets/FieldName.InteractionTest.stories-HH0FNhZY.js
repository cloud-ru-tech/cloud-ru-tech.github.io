import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-SlIP-akt.js";import{O as c,t as l}from"./src-Bmb4VJk4.js";import{M as u,j as d,p as f,t as p}from"./src-BuZ_hGw6.js";import{n as m,t as h}from"./styles.module-Bgazicgw.js";var g,_,v,y,b,x,S,C,w;e((()=>{l(),p(),o(),u(),h(),g=t(),{expect:_,fn:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldName/Tests/Interaction`,id:`uikit-product-fieldspredefined-fieldname-tests-interaction`,component:f,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onValidationError:v(),"data-test-id":d.fieldName}},C={tags:[`test`,`dev`],render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{children:[(0,g.jsx)(a,{children:`InteractionTest`}),(0,g.jsx)(i,{children:`Валидация по blur: required при пустом значении, очистка ошибки на валидном вводе.`}),(0,g.jsx)(n,{align:`center`,children:(0,g.jsx)(`div`,{className:m.panel,children:(0,g.jsx)(f,{...e})})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=x(t).getByTestId(c.fieldComboInput);await n(`blur empty required field reports error`,async()=>{await y.click(r),r.blur(),await b(()=>_(e.onValidationError).toHaveBeenLastCalledWith(_.any(Error)))}),await n(`valid input clears the error on blur`,async()=>{await y.click(r),await y.type(r,`my-service`),r.blur(),await b(()=>_(e.onValidationError).toHaveBeenLastCalledWith(null))})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Валидация по blur: required при пустом значении, очистка ошибки на валидном вводе.</DemoHint>
        <DemoActions align='center'>
          <div className={styles.panel}>
            <FieldName {...args} />
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
    const input = canvas.getByTestId(FIELD_TEST_IDS.fieldComboInput);
    await step('blur empty required field reports error', async () => {
      await userEvent.click(input);
      input.blur();
      // yup ValidationError.message не enumerable — objectContaining({ message }) не матчит, сверяем по типу.
      await waitFor(() => expect(args.onValidationError).toHaveBeenLastCalledWith(expect.any(Error)));
    });
    await step('valid input clears the error on blur', async () => {
      await userEvent.click(input);
      await userEvent.type(input, 'my-service');
      input.blur();
      await waitFor(() => expect(args.onValidationError).toHaveBeenLastCalledWith(null));
    });
  }
}`,...C.parameters?.docs?.source}}},w=[`InteractionTest`]}))();export{C as InteractionTest,w as __namedExportsOrder,S as default};
//# sourceMappingURL=FieldName.InteractionTest.stories-HH0FNhZY.js.map