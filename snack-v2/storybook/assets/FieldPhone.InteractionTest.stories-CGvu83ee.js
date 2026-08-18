import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-jFn_-H4h.js";import{O as c,t as l}from"./src-0nbOEfdr.js";import{M as u,j as d,s as f,t as p}from"./src-CQTmO4yz.js";var m,h,g,_,v,y,b,x;e((()=>{l(),p(),o(),u(),m=t(),{expect:h,fn:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldPhone/Tests/Interaction`,id:`uikit-product-fieldspredefined-fieldphone-tests-interaction`,component:f,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{label:`Телефон`,onChange:g(),"data-test-id":d.fieldPhone}},b={tags:[`test`,`dev`],render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{width:`narrow`,children:[(0,m.jsx)(a,{children:`InteractionTest`}),(0,m.jsx)(i,{children:`Ввод цифр форматируется маской выбранной страны (по умолчанию Россия, +7).`}),(0,m.jsx)(n,{block:!0,children:(0,m.jsx)(f,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=v(t).getByTestId(c.fieldComboInput);await n(`typing a national number formats it with the country mask`,async()=>{await _.click(r),await _.type(r,`9991234567`),h(r).toHaveValue(`999 123-45-67`)}),await n(`onChange reports the full value with the +7 country code`,async()=>{h(e.onChange).toHaveBeenCalled(),h(e.onChange).toHaveBeenCalledWith(h.stringContaining(`+7`))})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel width='narrow'>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Ввод цифр форматируется маской выбранной страны (по умолчанию Россия, +7).</DemoHint>
        <DemoActions block>
          <FieldPhone {...args} />
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
    await step('typing a national number formats it with the country mask', async () => {
      await userEvent.click(input);
      await userEvent.type(input, '9991234567');
      expect(input).toHaveValue('999 123-45-67');
    });
    await step('onChange reports the full value with the +7 country code', async () => {
      expect(args.onChange).toHaveBeenCalled();
      // any-call form: маска шлёт несколько onChange по мере ввода, last-call ненадёжен.
      expect(args.onChange).toHaveBeenCalledWith(expect.stringContaining('+7'));
    });
  }
}`,...b.parameters?.docs?.source}}},x=[`InteractionTest`]}))();export{b as InteractionTest,x as __namedExportsOrder,y as default};
//# sourceMappingURL=FieldPhone.InteractionTest.stories-CGvu83ee.js.map