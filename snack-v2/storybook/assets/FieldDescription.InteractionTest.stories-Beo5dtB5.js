import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-jFn_-H4h.js";import{O as c,t as l}from"./src-0nbOEfdr.js";import{M as u,j as d,t as f,w as p}from"./src-CQTmO4yz.js";import{n as m,t as h}from"./styles.module-CmSQ0sfZ.js";var g,_,v,y,b,x,S,C,w,T;e((()=>{l(),f(),o(),u(),h(),g=t(),{expect:_,fn:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S=`field-description-optional`,C={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldDescription/Tests/Interaction`,id:`uikit-product-fieldspredefined-fielddescription-tests-interaction`,component:p,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{required:!0,onValidationError:v(),"data-test-id":d.fieldDescription}},w={tags:[`test`,`dev`],render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{children:[(0,g.jsx)(a,{children:`InteractionTest`}),(0,g.jsx)(i,{children:`Валидация: required при пустом значении, очистка ошибки на валидном вводе; addButton раскрывает опциональное поле по клику.`}),(0,g.jsx)(n,{align:`center`,children:(0,g.jsxs)(`div`,{className:m.form,children:[(0,g.jsx)(p,{...e}),(0,g.jsx)(`div`,{"data-test-id":S,children:(0,g.jsx)(p,{addButton:!0})})]})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=x(t),i=r.getByTestId(c.fieldTextAreaInput);await n(`blur empty required field reports error`,async()=>{await y.click(i),i.blur(),await b(()=>_(e.onValidationError).toHaveBeenLastCalledWith(_.any(Error)))}),await n(`valid input clears the error`,async()=>{await y.type(i,`Описание сервиса`),await b(()=>_(e.onValidationError).toHaveBeenLastCalledWith(null))}),await n(`addButton: click reveals the optional textarea`,async()=>{let e=x(r.getByTestId(S));await _(e.getByTestId(d.fieldDescriptionAddButton)).toBeVisible(),await y.click(e.getByTestId(d.fieldDescriptionAddButton)),await b(()=>_(e.getByTestId(c.fieldTextAreaInput)).toBeVisible())})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>
          Валидация: required при пустом значении, очистка ошибки на валидном вводе; addButton раскрывает опциональное
          поле по клику.
        </DemoHint>
        <DemoActions align='center'>
          <div className={styles.form}>
            <FieldDescription {...args} />
            <div data-test-id={OPTIONAL_FIELD_TEST_ID}>
              <FieldDescription addButton />
            </div>
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
    const input = canvas.getByTestId(FIELD_TEST_IDS.fieldTextAreaInput);
    await step('blur empty required field reports error', async () => {
      await userEvent.click(input);
      input.blur();
      // yup ValidationError.message не enumerable — objectContaining({ message }) не матчит, сверяем по типу.
      await waitFor(() => expect(args.onValidationError).toHaveBeenLastCalledWith(expect.any(Error)));
    });
    await step('valid input clears the error', async () => {
      await userEvent.type(input, 'Описание сервиса');
      await waitFor(() => expect(args.onValidationError).toHaveBeenLastCalledWith(null));
    });
    await step('addButton: click reveals the optional textarea', async () => {
      const optionalField = within(canvas.getByTestId(OPTIONAL_FIELD_TEST_ID));
      await expect(optionalField.getByTestId(TEST_IDS.fieldDescriptionAddButton)).toBeVisible();
      await userEvent.click(optionalField.getByTestId(TEST_IDS.fieldDescriptionAddButton));
      await waitFor(() => expect(optionalField.getByTestId(FIELD_TEST_IDS.fieldTextAreaInput)).toBeVisible());
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`InteractionTest`]}))();export{w as InteractionTest,T as __namedExportsOrder,C as default};
//# sourceMappingURL=FieldDescription.InteractionTest.stories-Beo5dtB5.js.map