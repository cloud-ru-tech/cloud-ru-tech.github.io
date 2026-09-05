import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,f as o,l as s,m as c,t as l,u}from"./iframe-Coxm4alt.js";import{O as d,g as f,t as p}from"./src-3lLSm-rz.js";import{n as m,t as h}from"./testIds-Qc-rYRCn.js";function g(){let[e,t]=(0,_.useState)(`s3cret`);return(0,v.jsx)(u,{children:(0,v.jsxs)(a,{width:`narrow`,children:[(0,v.jsx)(c,{children:`InteractionTest`}),(0,v.jsx)(s,{children:"«Глаз» переключает маскирование и возвращает фокус с кареткой в конец; readonly показывает копирование; ArrowRight/ArrowLeft переключают фокус между полем и кнопками. Controlled-инстанс с зафиксированным `hidden` не переключается изнутри."}),(0,v.jsx)(i,{align:`center`,children:(0,v.jsxs)(o,{width:`narrow`,children:[(0,v.jsx)(f,{"data-test-id":h.fieldSecure.editableRoot,label:`Password`,value:e,onChange:e=>{T(e),t(e??``)},onHiddenChange:w,showHideButton:!0}),(0,v.jsx)(f,{"data-test-id":h.fieldSecure.readonlyRoot,label:`API Token`,readonly:!0,defaultValue:`sk-XXXX-TOKEN`}),(0,v.jsx)(f,{"data-test-id":h.fieldSecure.controlledHiddenRoot,label:`Controlled hidden`,defaultValue:`locked`,hidden:!0,onHiddenChange:w,showHideButton:!0})]})})]})})}var _,v,y,b,x,S,C,w,T,E,D,O;t((()=>{p(),_=e(n(),1),l(),m(),v=r(),{expect:y,fn:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w=b(),T=b(),E={title:`Snack/Inputs & Forms/Fields/FieldSecure/Tests/Interaction`,id:`components-fields-fieldsecure-tests-interaction`,component:f,parameters:{layout:`fullscreen`,controls:{disable:!0}},render:()=>(0,v.jsx)(g,{})},D={tags:[`test`,`dev`],play:async({canvasElement:e,step:t})=>{w.mockClear(),T.mockClear();let n=C(e),r=C(n.getByTestId(h.fieldSecure.editableRoot)),i=r.getByTestId(d.fieldSecureInput),a=r.getByTestId(d.fieldSecureHideButton);await t(`input is type=password (masked) by default`,async()=>{await y(i).toHaveAttribute(`type`,`password`)}),await t(`typing fires onChange with the new value and updates the controlled input`,async()=>{i.focus(),i.setSelectionRange(i.value.length,i.value.length),await x.type(i,`x`),y(T).toHaveBeenLastCalledWith(`s3cretx`),await y(i).toHaveValue(`s3cretx`)}),await t(`click «глаз» reveals value, fires onHiddenChange(false) and restores focus + caret`,async()=>{await x.click(a),await y(i).toHaveAttribute(`type`,`text`),y(w).toHaveBeenCalledWith(!1),await S(()=>y(i).toHaveFocus()),y(i.selectionStart).toBe(i.value.length)}),await t(`click «глаз» again masks value and fires onHiddenChange(true)`,async()=>{await x.click(a),await y(i).toHaveAttribute(`type`,`password`),y(w).toHaveBeenCalledWith(!0)}),await t(`keyboard: ArrowRight at end of input focuses «глаз»`,async()=>{i.focus(),i.setSelectionRange(i.value.length,i.value.length),await x.keyboard(`{ArrowRight}`),await y(a).toHaveFocus()}),await t(`keyboard: ArrowLeft from «глаз» returns focus to input`,async()=>{await x.keyboard(`{ArrowLeft}`),await y(i).toHaveFocus()}),await t(`keyboard: Enter on «глаз» toggles masking`,async()=>{a.focus(),await x.keyboard(`{Enter}`),await y(i).toHaveAttribute(`type`,`text`)}),await t(`controlled hidden: «глаз» does not reveal when external state stays masked`,async()=>{let e=C(n.getByTestId(h.fieldSecure.controlledHiddenRoot)),t=e.getByTestId(d.fieldSecureInput),r=e.getByTestId(d.fieldSecureHideButton);await y(t).toHaveAttribute(`type`,`password`),await x.click(r),await y(t).toHaveAttribute(`type`,`password`)}),await t(`readonly exposes a copy button`,async()=>{let e=C(n.getByTestId(h.fieldSecure.readonlyRoot));await y(e.getByTestId(d.fieldTextCopyButton)).toBeVisible()}),await t(`cleanup: blur leftover focus`,async()=>{document.activeElement?.blur?.()})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    onHiddenChange.mockClear();
    onChange.mockClear();
    const canvas = within(canvasElement);
    const editable = within(canvas.getByTestId(STORY_TEST_IDS.fieldSecure.editableRoot));
    const input = editable.getByTestId(TEST_IDS.fieldSecureInput) as HTMLInputElement;
    const toggle = editable.getByTestId(TEST_IDS.fieldSecureHideButton);
    await step('input is type=password (masked) by default', async () => {
      await expect(input).toHaveAttribute('type', 'password');
    });
    await step('typing fires onChange with the new value and updates the controlled input', async () => {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
      await userEvent.type(input, 'x');
      expect(onChange).toHaveBeenLastCalledWith('s3cretx');
      await expect(input).toHaveValue('s3cretx');
    });
    await step('click «глаз» reveals value, fires onHiddenChange(false) and restores focus + caret', async () => {
      await userEvent.click(toggle);
      await expect(input).toHaveAttribute('type', 'text');
      expect(onHiddenChange).toHaveBeenCalledWith(false);
      // Фокус + каретка в конце возвращаются в поле после переключения (паритет с легаси FieldSecure).
      await waitFor(() => expect(input).toHaveFocus());
      expect(input.selectionStart).toBe(input.value.length);
    });
    await step('click «глаз» again masks value and fires onHiddenChange(true)', async () => {
      await userEvent.click(toggle);
      await expect(input).toHaveAttribute('type', 'password');
      expect(onHiddenChange).toHaveBeenCalledWith(true);
    });
    await step('keyboard: ArrowRight at end of input focuses «глаз»', async () => {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
      await userEvent.keyboard('{ArrowRight}');
      await expect(toggle).toHaveFocus();
    });
    await step('keyboard: ArrowLeft from «глаз» returns focus to input', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      await expect(input).toHaveFocus();
    });
    await step('keyboard: Enter on «глаз» toggles masking', async () => {
      toggle.focus();
      await userEvent.keyboard('{Enter}');
      await expect(input).toHaveAttribute('type', 'text');
    });
    await step('controlled hidden: «глаз» does not reveal when external state stays masked', async () => {
      // hidden=true передан как controlled-проп без onHiddenChange-апдейта state →
      // hiddenInner игнорируется, поле остаётся type=password несмотря на клик.
      const controlled = within(canvas.getByTestId(STORY_TEST_IDS.fieldSecure.controlledHiddenRoot));
      const controlledInput = controlled.getByTestId(TEST_IDS.fieldSecureInput);
      const controlledToggle = controlled.getByTestId(TEST_IDS.fieldSecureHideButton);
      await expect(controlledInput).toHaveAttribute('type', 'password');
      await userEvent.click(controlledToggle);
      await expect(controlledInput).toHaveAttribute('type', 'password');
    });
    await step('readonly exposes a copy button', async () => {
      // onCopyButtonClick гейтится успешной записью в буфер; в jsdom execCommand('copy') = false,
      // колбэк не вызывается. Реальная запись + read-back (весь copy-путь) — browser-only в
      // __test__/FieldSecure/interaction.spec.ts. Здесь — readonly-контракт: copy-кнопка показана.
      const readonly = within(canvas.getByTestId(STORY_TEST_IDS.fieldSecure.readonlyRoot));
      await expect(readonly.getByTestId(TEST_IDS.fieldTextCopyButton)).toBeVisible();
    });

    // Play оставляет фокус на «глазе» controlled-поля — e2e keyboard-спеки на этой стори
    // стартуют с чужого activeElement и ArrowRight уходит не туда.
    await step('cleanup: blur leftover focus', async () => {
      (document.activeElement as HTMLElement | null)?.blur?.();
    });
  }
}`,...D.parameters?.docs?.source}}},O=[`InteractionTest`]}))();export{D as InteractionTest,O as __namedExportsOrder,E as default};
//# sourceMappingURL=FieldSecure.InteractionTest.stories-MrAU5PXY.js.map