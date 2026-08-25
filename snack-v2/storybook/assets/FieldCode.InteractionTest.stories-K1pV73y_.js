import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BUDedHtH.js";import{O as c,t as l}from"./src-BEoLLotU.js";import{E as u,M as d,O as f,j as p,t as m}from"./src-DximJuve.js";var h,g,_,v,y,b,x,S;e((()=>{l(),m(),o(),f(),d(),h=t(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldCode/Tests/Interaction`,id:`uikit-product-fieldspredefined-fieldcode-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{codeLength:4,label:`Код подтверждения`,onChange:_(),onComplete:_(),resendCode:{onResend:_(),secondsToNextResend:0},"data-test-id":p.fieldCode}},x={tags:[`test`,`dev`],render:e=>(0,h.jsx)(s,{children:(0,h.jsxs)(r,{width:`narrow`,children:[(0,h.jsx)(a,{children:`InteractionTest`}),(0,h.jsx)(i,{children:`Ввод кода по ячейкам, backspace-навигация, onComplete на полном коде, resend-кнопка.`}),(0,h.jsx)(n,{block:!0,children:(0,h.jsx)(u,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=y(t),i=r.getAllByTestId(p.fieldCodeCell).map(e=>y(e).getByTestId(c.fieldComboInput));await n(`typing: цифры заполняют ячейки, фокус переходит к следующей`,async()=>{await v.click(i[0]),await v.keyboard(`12`),g(i[0]).toHaveValue(`1`),g(i[1]).toHaveValue(`2`),await g(i[2]).toHaveFocus()}),await n(`complete: последний символ вызывает onComplete с полным кодом`,async()=>{await v.keyboard(`34`),g(e.onComplete).toHaveBeenCalledTimes(1),g(e.onComplete).toHaveBeenCalledWith(`1234`)}),await n(`backspace: очищает текущую ячейку`,async()=>{await v.keyboard(`{Backspace}`),g(i[3]).toHaveValue(``),g(e.onChange).toHaveBeenCalledWith(`123​`)}),await n(`backspace: на пустой ячейке переносит фокус на предыдущую`,async()=>{await v.keyboard(`{Backspace}`),await g(i[2]).toHaveFocus()}),await n(`keyboard: ArrowLeft/ArrowRight двигают фокус между ячейками`,async()=>{await v.keyboard(`{ArrowLeft}`),await g(i[1]).toHaveFocus(),await v.keyboard(`{ArrowRight}`),await g(i[2]).toHaveFocus()}),await n(`resend: клик по активной кнопке вызывает onResend`,async()=>{await v.click(r.getByTestId(p.fieldCodeResend)),g(e.resendCode?.onResend).toHaveBeenCalledTimes(1)})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel width='narrow'>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Ввод кода по ячейкам, backspace-навигация, onComplete на полном коде, resend-кнопка.</DemoHint>
        <DemoActions block>
          <FieldCode {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const cells = canvas.getAllByTestId(TEST_IDS.fieldCodeCell);
    const inputs = cells.map(cell => within(cell).getByTestId(FIELD_TEST_IDS.fieldComboInput));
    await step('typing: цифры заполняют ячейки, фокус переходит к следующей', async () => {
      await userEvent.click(inputs[0]);
      await userEvent.keyboard('12');
      expect(inputs[0]).toHaveValue('1');
      expect(inputs[1]).toHaveValue('2');
      await expect(inputs[2]).toHaveFocus();
    });
    await step('complete: последний символ вызывает onComplete с полным кодом', async () => {
      await userEvent.keyboard('34');
      expect(args.onComplete).toHaveBeenCalledTimes(1);
      expect(args.onComplete).toHaveBeenCalledWith('1234');
    });
    await step('backspace: очищает текущую ячейку', async () => {
      await userEvent.keyboard('{Backspace}');
      expect(inputs[3]).toHaveValue('');
      expect(args.onChange).toHaveBeenCalledWith(\`123\${ZERO_WIDTH_SPACE}\`);
    });
    await step('backspace: на пустой ячейке переносит фокус на предыдущую', async () => {
      await userEvent.keyboard('{Backspace}');
      await expect(inputs[2]).toHaveFocus();
    });
    await step('keyboard: ArrowLeft/ArrowRight двигают фокус между ячейками', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      await expect(inputs[1]).toHaveFocus();
      await userEvent.keyboard('{ArrowRight}');
      await expect(inputs[2]).toHaveFocus();
    });
    await step('resend: клик по активной кнопке вызывает onResend', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.fieldCodeResend));
      expect(args.resendCode?.onResend).toHaveBeenCalledTimes(1);
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`]}))();export{x as InteractionTest,S as __namedExportsOrder,b as default};
//# sourceMappingURL=FieldCode.InteractionTest.stories-K1pV73y_.js.map