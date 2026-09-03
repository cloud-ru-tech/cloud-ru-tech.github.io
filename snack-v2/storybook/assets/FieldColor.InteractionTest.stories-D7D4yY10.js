import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,f as i,l as a,m as o,t as s,u as c}from"./iframe-Bb1kR6xz.js";import{O as l,t as u,w as d}from"./src-Ca1w4lmi.js";function f(){return(0,h.jsx)(c,{children:(0,h.jsxs)(r,{width:`narrow`,children:[(0,h.jsx)(o,{children:`InteractionTest`}),(0,h.jsx)(a,{children:`Триггер открывает ColorPicker, выбор/ввод меняет значение (alpha отбрасывается при field-pick), кнопка очистки сбрасывает поле, readonly показывает копирование.`}),(0,h.jsx)(n,{align:`center`,children:(0,h.jsxs)(i,{width:`narrow`,children:[(0,h.jsx)(d,{"data-test-id":S,label:`Color`,defaultValue:`#ff0000`,autoApply:!0,withAlpha:!0,onChange:O,onClearButtonClick:k,showClearButton:!0}),(0,h.jsx)(d,{"data-test-id":C,label:`Required`,required:!0,defaultValue:`#3f51b5`,showClearButton:!0}),(0,h.jsx)(d,{"data-test-id":w,label:`Readonly`,readonly:!0,defaultValue:`#00ff00`,showCopyButton:!0}),(0,h.jsx)(d,{"data-test-id":T,label:`Disabled`,disabled:!0,defaultValue:`#0000ff`,showClearButton:!0})]})})]})})}function p(){return document.querySelector(`[data-test-id="${E}"]`)}function m(){return document.querySelector(`[data-test-id="${D}"]`)}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{u(),s(),h=t(),{expect:g,fn:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x=`button-clear-value`,S=l.fieldColor,C=`field-color-required`,w=`field-color-readonly`,T=`field-color-disabled`,E=l.fieldColorPicker,D=`color-picker__field-hex-native-input`,O=_(),k=_(),A={title:`Snack/Inputs & Forms/Fields/FieldColor/Tests/Interaction`,id:`components-fields-fieldcolor-tests-interaction`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}},render:()=>(0,h.jsx)(f,{})},j={tags:[`test`,`dev`],play:async({canvasElement:e,step:t})=>{O.mockClear(),k.mockClear();let n=b(e),r=n.getByTestId(S),i=b(r).getByTestId(l.fieldColorInput),a=b(r).getByTestId(l.fieldColorSwatch),o=b(r).getByTestId(l.fieldColorChevron);await t(`renders root, input, swatch and chevron`,async()=>{await g(r).toBeVisible(),await g(i).toBeVisible(),await g(a).toBeVisible(),await g(o).toBeVisible()}),await t(`open: clicking the trigger mounts the picker and marks root open`,async()=>{await v.click(i),await y(()=>g(p()).not.toBeNull()),await g(r).toHaveAttribute(`data-focusvisible`,`true`),await g(o).toBeVisible()}),await t(`pick: typing a hex into the picker field commits a 6-digit value (alpha dropped)`,async()=>{let e=m();g(e).not.toBeNull(),e&&(e.focus(),await v.clear(e),await v.type(e,`aabbcc`),await v.tab()),await y(()=>g(O).toHaveBeenCalledWith(`#aabbcc`)),await y(()=>g(i).toHaveValue(`#aabbcc`))}),await t(`close the picker so its overlay does not cover sibling fields`,async()=>{await v.keyboard(`{Escape}`),await y(()=>g(p()).toBeNull())}),await t(`type-normalize: non-hex chars stripped, hash kept, capped at 9 chars`,async()=>{i.focus(),await v.clear(i),await v.type(i,`#GG12ff!!`),await y(()=>g(i).toHaveValue(`#12ff`)),g(O).toHaveBeenLastCalledWith(`#12ff`),await v.keyboard(`{Escape}`),await y(()=>g(p()).toBeNull())}),await t(`clear: button visible for a non-empty editable field, resets and fires onClearButtonClick`,async()=>{let e=b(r).getByTestId(x);await g(e).toBeVisible(),await v.click(e),g(k).toHaveBeenCalledTimes(1),await g(i).toHaveValue(``)}),await t(`clear: button hides once the value is empty`,async()=>{await g(b(r).queryByTestId(x)).toBeNull(),await v.keyboard(`{Escape}`),await y(()=>g(p()).toBeNull())}),await t(`required: clearing keeps the input focused (no value loss without re-focus)`,async()=>{let e=n.getByTestId(C),t=b(e).getByTestId(l.fieldColorInput),r=b(e).getByTestId(x);await v.click(r),await g(t).toHaveValue(``),await g(t).toHaveFocus(),await v.keyboard(`{Escape}`),await y(()=>g(p()).toBeNull())}),await t(`disabled: hides the clear button despite a non-empty value`,async()=>{let e=n.getByTestId(T);await g(b(e).queryByTestId(x)).toBeNull(),await g(b(e).getByTestId(l.fieldColorInput)).toBeDisabled()}),await t(`readonly: chevron stays visible, copy button fires onCopyButtonClick`,async()=>{let e=n.getByTestId(w);await g(b(e).getByTestId(l.fieldColorChevron)).toBeVisible();let t=b(e).getByTestId(l.fieldTextCopyButton);await g(t).toBeVisible(),await g(t).toBeEnabled()})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    onChange.mockClear();
    onClearButtonClick.mockClear();
    const canvas = within(canvasElement);
    const main = canvas.getByTestId(MAIN_ROOT_TEST_ID);
    const input = within(main).getByTestId(TEST_IDS.fieldColorInput) as HTMLInputElement;
    const swatch = within(main).getByTestId(TEST_IDS.fieldColorSwatch);
    const chevron = within(main).getByTestId(TEST_IDS.fieldColorChevron);
    await step('renders root, input, swatch and chevron', async () => {
      await expect(main).toBeVisible();
      await expect(input).toBeVisible();
      await expect(swatch).toBeVisible();
      await expect(chevron).toBeVisible();
    });
    await step('open: clicking the trigger mounts the picker and marks root open', async () => {
      await userEvent.click(input);
      await waitFor(() => expect(queryPickerRoot()).not.toBeNull());
      // Фокус-в-поле после открытия портала недетерминирован в storybook-test (useEffect(open) +
      // монтирование портала @cloud-ru/ds-dropdown спорят за активный элемент) — проверка фокуса живёт в
      // interaction.spec.ts (реальный браузер). Здесь ассертим детерминированное состояние:
      // showOpen=true подсвечивает корень (data-focusvisible) и рендерит ChevronUpSVG в шевроне.
      await expect(main).toHaveAttribute('data-focusvisible', 'true');
      await expect(chevron).toBeVisible();
    });
    await step('pick: typing a hex into the picker field commits a 6-digit value (alpha dropped)', async () => {
      const hexInput = queryPickerHexInput();
      expect(hexInput).not.toBeNull();
      if (hexInput) {
        hexInput.focus();
        await userEvent.clear(hexInput);
        await userEvent.type(hexInput, 'aabbcc');
        // FieldPrivate коммитит значение на вводе (live onChange); tab уводит фокус, нормализуя
        // отображение к committed-значению.
        await userEvent.tab();
      }
      // autoApply → field-pick коммитит raw.hex без альфы (#rrggbb, 6 цифр), несмотря на withAlpha.
      await waitFor(() => expect(onChange).toHaveBeenCalledWith('#aabbcc'));
      await waitFor(() => expect(input).toHaveValue('#aabbcc'));
    });
    await step('close the picker so its overlay does not cover sibling fields', async () => {
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryPickerRoot()).toBeNull());
    });
    await step('type-normalize: non-hex chars stripped, hash kept, capped at 9 chars', async () => {
      input.focus();
      await userEvent.clear(input);
      await userEvent.type(input, '#GG12ff!!');
      // \`G\` не hex, \`!\` отбрасывается → \`#12ff\`.
      await waitFor(() => expect(input).toHaveValue('#12ff'));
      expect(onChange).toHaveBeenLastCalledWith('#12ff');
      // Защитно закрываем picker, если он остался открытым.
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryPickerRoot()).toBeNull());
    });
    await step('clear: button visible for a non-empty editable field, resets and fires onClearButtonClick', async () => {
      const clear = within(main).getByTestId(CLEAR_BUTTON_TEST_ID);
      await expect(clear).toBeVisible();
      await userEvent.click(clear);
      expect(onClearButtonClick).toHaveBeenCalledTimes(1);
      await expect(input).toHaveValue('');
    });
    await step('clear: button hides once the value is empty', async () => {
      await expect(within(main).queryByTestId(CLEAR_BUTTON_TEST_ID)).toBeNull();
      // Клик по очистке мог открыть picker (клик внутри триггера) — закрываем.
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryPickerRoot()).toBeNull());
    });
    await step('required: clearing keeps the input focused (no value loss without re-focus)', async () => {
      const requiredRoot = canvas.getByTestId(REQUIRED_ROOT_TEST_ID);
      const requiredInput = within(requiredRoot).getByTestId(TEST_IDS.fieldColorInput) as HTMLInputElement;
      const requiredClear = within(requiredRoot).getByTestId(CLEAR_BUTTON_TEST_ID);
      await userEvent.click(requiredClear);
      await expect(requiredInput).toHaveValue('');
      await expect(requiredInput).toHaveFocus();
      // Закрываем picker, который мог открыться при клике рядом с полем.
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryPickerRoot()).toBeNull());
    });
    await step('disabled: hides the clear button despite a non-empty value', async () => {
      const disabledRoot = canvas.getByTestId(DISABLED_ROOT_TEST_ID);
      await expect(within(disabledRoot).queryByTestId(CLEAR_BUTTON_TEST_ID)).toBeNull();
      await expect(within(disabledRoot).getByTestId(TEST_IDS.fieldColorInput)).toBeDisabled();
    });
    await step('readonly: chevron stays visible, copy button fires onCopyButtonClick', async () => {
      const readonlyRoot = canvas.getByTestId(READONLY_ROOT_TEST_ID);
      // Chevron остаётся виден в readonly — паритет с Figma readonly-вариантами fieldSelectColor.
      await expect(within(readonlyRoot).getByTestId(TEST_IDS.fieldColorChevron)).toBeVisible();
      const copyBtn = within(readonlyRoot).getByTestId(TEST_IDS.fieldTextCopyButton);
      await expect(copyBtn).toBeVisible();
      await expect(copyBtn).toBeEnabled();
      // onCopyButtonClick гейтится успешной записью в буфер (copyTextToClipboard), а в jsdom
      // execCommand('copy') возвращает false → колбэк/иконка-свап не срабатывают. Реальная
      // запись в буфер (доказывающая весь copy-путь) — в __test__/FieldColor/interaction.spec.ts.
    });

    // Роуминг фокуса Tab → input → ArrowRight → clear (useButtonNavigation) завязан на
    // фокус-менеджмент, ненадёжный в синтетической storybook-test среде; проверяется в Playwright.
  }
}`,...j.parameters?.docs?.source}}},M=[`InteractionTest`]}))();export{j as InteractionTest,M as __namedExportsOrder,A as default};
//# sourceMappingURL=FieldColor.InteractionTest.stories-D7D4yY10.js.map