import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-D64B0jO2.js";import{M as c,t as l}from"./src-DM1PhwjZ.js";import{M as u,N as d,l as f,s as p,t as m}from"./src-CB9THTkC.js";var h,g,_,v,y,b,x,S;e((()=>{l(),m(),o(),d(),h=t(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldPhone/Tests/Interaction`,id:`uikit-product-fieldspredefined-fieldphone-tests-interaction`,component:p,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{label:`Телефон`,onChange:_(),options:{includedCountries:f},"data-test-id":u.fieldPhone}},x={tags:[`test`,`dev`],render:e=>(0,h.jsx)(r,{children:(0,h.jsxs)(a,{width:`narrow`,children:[(0,h.jsx)(i,{children:`InteractionTest`}),(0,h.jsx)(n,{children:`Ввод цифр форматируется маской выбранной страны (по умолчанию Россия, +7).`}),(0,h.jsx)(s,{block:!0,children:(0,h.jsx)(p,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=y(t).getByTestId(c.fieldComboInput);await n(`typing a national number formats it with the country mask`,async()=>{await v.click(r),await v.type(r,`9991234567`),g(r).toHaveValue(`999 123-45-67`)}),await n(`onChange reports the full value with the +7 country code`,async()=>{g(e.onChange).toHaveBeenCalled(),g(e.onChange).toHaveBeenCalledWith(g.stringContaining(`+7`))})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`]}))();export{x as InteractionTest,S as __namedExportsOrder,b as default};
//# sourceMappingURL=FieldPhone.InteractionTest.stories-CwXWE-hx.js.map