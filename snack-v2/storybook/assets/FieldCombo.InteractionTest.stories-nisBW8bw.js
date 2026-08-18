import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,f as o,t as s,u as c}from"./iframe-Du0zU9lI.js";import{O as l,S as u,t as d}from"./src-B1mCt2RY.js";import{n as f,r as p,t as m}from"./testIds-MGMwj5_a.js";function h(){let[e,t]=(0,g.useState)(`hello`),[n,r]=(0,g.useState)(`focus me`);return(0,_.jsx)(c,{children:(0,_.jsx)(a,{width:`narrow`,children:(0,_.jsx)(i,{align:`center`,children:(0,_.jsxs)(o,{width:`narrow`,children:[(0,_.jsx)(u,{"data-test-id":f.fieldCombo.editableRoot,label:`Label`,value:e,onChange:e=>{C(e),t(e??``)},onClearButtonClick:w,showClearButton:!0,showCopyButton:!0}),(0,_.jsx)(u,{"data-test-id":f.fieldCombo.readonlyRoot,label:`Readonly`,readonly:!0,defaultValue:`copy me`,showCopyButton:!0}),(0,_.jsx)(u,{"data-test-id":f.fieldCombo.prefixedReadonlyRoot,label:`Readonly prefixed`,readonly:!0,prefix:`$`,postfix:`USD`,defaultValue:`100`,showCopyButton:!0}),(0,_.jsx)(u,{"data-test-id":f.fieldCombo.disabledRoot,label:`Disabled`,disabled:!0,defaultValue:`disabled value`,showClearButton:!0}),(0,_.jsx)(u,{"data-test-id":f.fieldCombo.blurGuardRoot,label:`Blur guard`,value:n,onChange:r,onBlur:T,showClearButton:!0})]})})})})}var g,_,v,y,b,x,S,C,w,T,E,D,O;t((()=>{d(),g=e(n(),1),s(),p(),_=r(),{expect:v,fn:y,userEvent:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C=y(),w=y(),T=y(),E={title:`Snack/Inputs & Forms/Fields/FieldCombo/Tests/Interaction`,id:`components-fields-fieldcombo-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}},render:()=>(0,_.jsx)(h,{})},D={tags:[`test`,`dev`],play:async({canvasElement:e,step:t})=>{C.mockClear(),w.mockClear(),T.mockClear();let n=S(e),r=n.getByTestId(f.fieldCombo.editableRoot),i=S(r).getByTestId(l.fieldComboInput);await t(`renders root and native input`,async()=>{await v(r).toBeVisible(),await v(i).toBeVisible()}),await t(`type into input (onChange fires with the typed value, controlled input updates)`,async()=>{await b.click(i),await b.type(i,` world`),v(C).toHaveBeenLastCalledWith(`hello world`),await v(i).toHaveValue(`hello world`)}),await t(`clear button is visible for a non-empty editable field`,async()=>{await v(S(r).getByTestId(m)).toBeVisible()}),await t(`click clear button resets value, fires onClearButtonClick and refocuses input`,async()=>{await b.click(S(r).getByTestId(m)),v(w).toHaveBeenCalledTimes(1),await v(i).toHaveValue(``),await x(()=>v(i).toHaveFocus())}),await t(`clear button hides once the value is empty`,async()=>{await v(S(r).queryByTestId(m)).toBeNull()}),await t(`disabled field hides the clear button despite a non-empty value`,async()=>{let e=n.getByTestId(f.fieldCombo.disabledRoot);await v(S(e).queryByTestId(m)).toBeNull()}),await t(`readonly fields (plain and prefix/postfix) expose a copy button`,async()=>{let e=n.getByTestId(f.fieldCombo.readonlyRoot),t=n.getByTestId(f.fieldCombo.prefixedReadonlyRoot);await v(S(e).getByTestId(l.fieldTextCopyButton)).toBeVisible(),await v(S(t).getByTestId(l.fieldTextCopyButton)).toBeVisible()}),await t(`onBlur: skipped when focus moves to the field’s own clear button`,async()=>{let e=n.getByTestId(f.fieldCombo.blurGuardRoot),t=S(e).getByTestId(l.fieldComboInput);T.mockClear(),await b.click(t),await v(t).toHaveFocus(),await b.click(S(e).getByTestId(m)),v(T).not.toHaveBeenCalled()}),await t(`onBlur: fired when focus leaves to an unrelated element`,async()=>{let e=n.getByTestId(f.fieldCombo.blurGuardRoot),t=S(e).getByTestId(l.fieldComboInput);T.mockClear(),await b.type(t,`x`),await v(t).toHaveFocus(),await b.click(i),await x(()=>v(T).toHaveBeenCalled())})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    onChange.mockClear();
    onClearButtonClick.mockClear();
    onBlur.mockClear();
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(STORY_TEST_IDS.fieldCombo.editableRoot);
    const input = within(root).getByTestId(TEST_IDS.fieldComboInput);
    await step('renders root and native input', async () => {
      await expect(root).toBeVisible();
      await expect(input).toBeVisible();
    });
    await step('type into input (onChange fires with the typed value, controlled input updates)', async () => {
      await userEvent.click(input);
      await userEvent.type(input, ' world');
      expect(onChange).toHaveBeenLastCalledWith('hello world');
      await expect(input).toHaveValue('hello world');
    });
    await step('clear button is visible for a non-empty editable field', async () => {
      await expect(within(root).getByTestId(CLEAR_BUTTON_TEST_ID)).toBeVisible();
    });
    await step('click clear button resets value, fires onClearButtonClick and refocuses input', async () => {
      await userEvent.click(within(root).getByTestId(CLEAR_BUTTON_TEST_ID));
      expect(onClearButtonClick).toHaveBeenCalledTimes(1);
      await expect(input).toHaveValue('');
      // onClear возвращает фокус в input (localRef.current?.focus()).
      await waitFor(() => expect(input).toHaveFocus());
    });
    await step('clear button hides once the value is empty', async () => {
      await expect(within(root).queryByTestId(CLEAR_BUTTON_TEST_ID)).toBeNull();
    });
    await step('disabled field hides the clear button despite a non-empty value', async () => {
      const disabledRoot = canvas.getByTestId(STORY_TEST_IDS.fieldCombo.disabledRoot);
      await expect(within(disabledRoot).queryByTestId(CLEAR_BUTTON_TEST_ID)).toBeNull();
    });
    await step('readonly fields (plain and prefix/postfix) expose a copy button', async () => {
      // onCopyButtonClick гейтится успешной записью в буфер; в jsdom execCommand('copy') = false,
      // колбэк не вызывается. Реальный copy-путь + точная композиция textToCopy='$100USD' проверяются
      // read-back'ом в __test__/FieldCombo/interaction.spec.ts. Здесь — readonly-контракт: copy показан.
      const readonlyRoot = canvas.getByTestId(STORY_TEST_IDS.fieldCombo.readonlyRoot);
      const prefixedRoot = canvas.getByTestId(STORY_TEST_IDS.fieldCombo.prefixedReadonlyRoot);
      await expect(within(readonlyRoot).getByTestId(TEST_IDS.fieldTextCopyButton)).toBeVisible();
      await expect(within(prefixedRoot).getByTestId(TEST_IDS.fieldTextCopyButton)).toBeVisible();
    });
    await step('onBlur: skipped when focus moves to the field’s own clear button', async () => {
      const blurGuardRoot = canvas.getByTestId(STORY_TEST_IDS.fieldCombo.blurGuardRoot);
      const guardInput = within(blurGuardRoot).getByTestId(TEST_IDS.fieldComboInput);
      onBlur.mockClear();
      await userEvent.click(guardInput);
      await expect(guardInput).toHaveFocus();
      // Клик по собственной clear-кнопке — relatedTarget === clearButtonRef → onBlur НЕ зовём.
      await userEvent.click(within(blurGuardRoot).getByTestId(CLEAR_BUTTON_TEST_ID));
      expect(onBlur).not.toHaveBeenCalled();
    });
    await step('onBlur: fired when focus leaves to an unrelated element', async () => {
      const blurGuardRoot = canvas.getByTestId(STORY_TEST_IDS.fieldCombo.blurGuardRoot);
      const guardInput = within(blurGuardRoot).getByTestId(TEST_IDS.fieldComboInput);
      onBlur.mockClear();
      await userEvent.type(guardInput, 'x');
      await expect(guardInput).toHaveFocus();
      // Фокус уходит на input другого поля — relatedTarget вне собственных кнопок → onBlur зовём.
      await userEvent.click(input);
      await waitFor(() => expect(onBlur).toHaveBeenCalled());
    });
  }
}`,...D.parameters?.docs?.source}}},O=[`InteractionTest`]}))();export{D as InteractionTest,O as __namedExportsOrder,E as default};
//# sourceMappingURL=FieldCombo.InteractionTest.stories-nisBW8bw.js.map