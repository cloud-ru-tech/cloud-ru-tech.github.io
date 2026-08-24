import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-d1MamqAX.js";import{O as c,t as l}from"./src-CjpZj4Bz.js";import{M as u,_ as d,h as f,j as p,t as m}from"./src-DB5AazAr.js";var h,g,_,v,y,b,x,S;e((()=>{l(),m(),o(),u(),h=t(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldMask/Tests/Interaction`,id:`uikit-product-fieldspredefined-fieldmask-tests-interaction`,component:f,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{label:`СНИЛС`,mask:d.Snils,onChange:_(),"data-test-id":p.fieldMask}},x={tags:[`test`,`dev`],render:e=>(0,h.jsx)(s,{children:(0,h.jsxs)(r,{width:`narrow`,children:[(0,h.jsx)(a,{children:`InteractionTest`}),(0,h.jsx)(i,{children:`Ввод цифр форматируется маской СНИЛС, onChange получает значение с разделителями.`}),(0,h.jsx)(n,{block:!0,children:(0,h.jsx)(f,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=y(t).getByTestId(c.fieldComboInput);await n(`typing digits applies the mask separators`,async()=>{await v.click(r),await v.type(r,`12345678901`),g(r).toHaveValue(`123456-789 01`)}),await n(`onChange is fired with the formatted value`,async()=>{g(e.onChange).toHaveBeenCalled(),g(e.onChange).toHaveBeenCalledWith(`123456-789 01`,g.anything(),g.anything())})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel width='narrow'>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Ввод цифр форматируется маской СНИЛС, onChange получает значение с разделителями.</DemoHint>
        <DemoActions block>
          <FieldMask {...args} />
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
    await step('typing digits applies the mask separators', async () => {
      await userEvent.click(input);
      await userEvent.type(input, '12345678901');
      expect(input).toHaveValue('123456-789 01');
    });
    await step('onChange is fired with the formatted value', async () => {
      expect(args.onChange).toHaveBeenCalled();
      // react-imask дёргает onAccept как (value, maskRef, event) — 3 аргумента; матчим any-call,
      // last-call ненадёжен из-за трейлинг-onAccept.
      expect(args.onChange).toHaveBeenCalledWith('123456-789 01', expect.anything(), expect.anything());
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`]}))();export{x as InteractionTest,S as __namedExportsOrder,b as default};
//# sourceMappingURL=FieldMask.InteractionTest.stories-Bn-WYIMb.js.map