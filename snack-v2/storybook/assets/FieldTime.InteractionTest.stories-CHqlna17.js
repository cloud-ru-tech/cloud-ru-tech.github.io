import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-BdtyM0cx.js";import{O as u,n as d,t as f}from"./src-DNBvg_N-.js";var p,m,h=t((()=>{p={fieldTime:{editableRoot:`field-time-editable`,requiredRoot:`field-time-required`,readonlyRoot:`field-time-readonly`}},m=`button-clear-value`}));function g(){let[e,t]=(0,_.useState)(void 0),[n,r]=(0,_.useState)({hours:14,minutes:25,seconds:36});return(0,v.jsx)(l,{children:(0,v.jsxs)(a,{width:`narrow`,children:[(0,v.jsx)(s,{children:`Editable (segment mask)`}),(0,v.jsx)(o,{children:`Фокус выделяет первый сегмент, цифры заполняют сегменты с авто-переходом, ←/→ двигают выбор, Backspace очищает сегмент, ArrowDown открывает picker, Escape закрывает, очистка сбрасывает значение и закрывает.`}),(0,v.jsx)(i,{align:`center`,children:(0,v.jsx)(d,{"data-test-id":p.fieldTime.editableRoot,label:`Время`,showSeconds:!0,value:e,onChange:e=>{w(e),t(e)},onClearButtonClick:T})}),(0,v.jsx)(s,{children:`Required (clear refocuses + reopens)`}),(0,v.jsx)(o,{children:`required: очистка возвращает фокус в input и переоткрывает picker (дивергентная ветка onClear).`}),(0,v.jsx)(i,{align:`center`,children:(0,v.jsx)(d,{"data-test-id":p.fieldTime.requiredRoot,label:`Время`,required:!0,showSeconds:!0,value:n,onChange:r,onClearButtonClick:E})}),(0,v.jsx)(s,{children:`Readonly + copy`}),(0,v.jsx)(o,{children:`readonly показывает кнопку копирования и скрывает очистку; ←/→ роуют фокус input↔copy.`}),(0,v.jsx)(i,{align:`center`,children:(0,v.jsx)(d,{"data-test-id":p.fieldTime.readonlyRoot,label:`Время`,readonly:!0,defaultValue:{hours:14,minutes:25,seconds:36},onCopyButtonClick:D,showCopyButton:!0})})]})})}var _,v,y,b,x,S,C,w,T,E,D,O,k,A;t((()=>{f(),_=e(n(),1),c(),h(),v=r(),{expect:y,fn:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w=b(),T=b(),E=b(),D=b(),O={title:`Snack/Inputs & Forms/Fields/FieldTime/Tests/Interaction`,id:`components-fields-fieldtime-tests-interaction`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}},render:()=>(0,v.jsx)(g,{})},k={tags:[`test`,`dev`],play:async({canvasElement:e,step:t})=>{w.mockClear(),T.mockClear(),E.mockClear(),D.mockClear();let n=C(e),r=n.getByTestId(p.fieldTime.editableRoot),i=C(r),a=i.getByTestId(u.fieldTimeInput),o=i.getByTestId(u.fieldTimeIcon);await t(`renders root, input and clock icon (collapsed picker)`,async()=>{await y(r).toBeVisible(),await y(a).toBeVisible(),await y(o).toBeVisible(),await y(a).toHaveAttribute(`aria-expanded`,`false`)}),await t(`focus engages the segment mask (placeholder чч:мм:сс fills)`,async()=>{a.focus(),await S(()=>y(a.value).toBe(`чч:мм:сс`)),await y(a.selectionStart).toBe(0),await y(a.selectionEnd).toBe(2)}),await t(`segment ←/→ moves the selection between hours / minutes slots`,async()=>{a.focus(),await S(()=>y(a.selectionStart).toBe(0)),await x.keyboard(`{ArrowRight}`),await y(a.selectionStart).toBe(3),await y(a.selectionEnd).toBe(5),await x.keyboard(`{ArrowLeft}`),await y(a.selectionStart).toBe(0),await y(a.selectionEnd).toBe(2)}),await t(`typing digits fills segments and commits a TimeValue (onChange)`,async()=>{a.blur(),a.focus(),await S(()=>y(a.value).toBe(`чч:мм:сс`)),w.mockClear(),await x.keyboard(`093045`),await S(()=>y(a.value).toBe(`09:30:45`)),await S(()=>y(w).toHaveBeenLastCalledWith({hours:9,minutes:30,seconds:45}))}),await t(`Backspace clears the focused segment back to its placeholder`,async()=>{a.focus(),a.setSelectionRange(0,2),await x.keyboard(`{Backspace}`),await y(a.value.slice(0,2)).toBe(`чч`)}),await t(`clear button is visible for a non-empty editable field`,async()=>{await y(i.getByTestId(m)).toBeVisible()}),await t(`keyboard: ArrowRight from the last segment roves focus to clear, ArrowLeft returns`,async()=>{a.focus(),a.setSelectionRange(6,8),await x.keyboard(`{ArrowRight}`),await y(i.getByTestId(m)).toHaveFocus(),await x.keyboard(`{ArrowLeft}`),await y(a).toHaveFocus()}),await t(`clear resets the value, fires the callback and (non-required) closes the picker`,async()=>{w.mockClear(),await x.click(i.getByTestId(m)),y(T).toHaveBeenCalledTimes(1),y(w).toHaveBeenLastCalledWith(void 0),await S(()=>y(a).toHaveAttribute(`aria-expanded`,`false`))}),await t(`ArrowDown opens the time picker (aria-expanded=true)`,async()=>{a.focus(),await x.keyboard(`{ArrowDown}`),await S(()=>y(a).toHaveAttribute(`aria-expanded`,`true`))}),await t(`Escape on the input closes the picker`,async()=>{a.focus(),await x.keyboard(`{Escape}`),await S(()=>y(a).toHaveAttribute(`aria-expanded`,`false`))}),await t(`typing while the picker is open closes it (onEdit)`,async()=>{a.focus(),await x.keyboard(`{ArrowDown}`),await S(()=>y(a).toHaveAttribute(`aria-expanded`,`true`)),a.focus(),await x.keyboard(`1`),await S(()=>y(a).toHaveAttribute(`aria-expanded`,`false`))}),await t(`required clear refocuses the input and reopens the picker`,async()=>{let e=n.getByTestId(p.fieldTime.requiredRoot),t=C(e),r=t.getByTestId(u.fieldTimeInput);await x.click(t.getByTestId(m)),y(E).toHaveBeenCalledTimes(1),await S(()=>y(r).toHaveFocus()),await S(()=>y(r).toHaveAttribute(`aria-expanded`,`true`))}),await t(`readonly exposes a clickable copy button and ←/→ roves input↔copy`,async()=>{let e=n.getByTestId(p.fieldTime.readonlyRoot),t=C(e),r=t.getByTestId(u.fieldTimeInput),i=t.getByTestId(u.fieldTextCopyButton);await y(t.queryByTestId(m)).toBeNull(),await y(i).toBeVisible(),r.focus(),await x.keyboard(`{ArrowRight}`),await y(i).toHaveFocus(),await x.click(i),await y(i).toBeVisible()})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    onChange.mockClear();
    onClearButtonClick.mockClear();
    onRequiredClear.mockClear();
    onCopyButtonClick.mockClear();
    const canvas = within(canvasElement);
    const editableRoot = canvas.getByTestId(STORY_TEST_IDS.fieldTime.editableRoot);
    const editable = within(editableRoot);
    const input = editable.getByTestId<HTMLInputElement>(TEST_IDS.fieldTimeInput);
    const icon = editable.getByTestId(TEST_IDS.fieldTimeIcon);
    await step('renders root, input and clock icon (collapsed picker)', async () => {
      await expect(editableRoot).toBeVisible();
      await expect(input).toBeVisible();
      await expect(icon).toBeVisible();
      await expect(input).toHaveAttribute('aria-expanded', 'false');
    });
    await step('focus engages the segment mask (placeholder чч:мм:сс fills)', async () => {
      input.focus();
      await waitFor(() => expect(input.value).toBe('чч:мм:сс'));
      // На фокус выбран первый сегмент (часы, индексы 0..2).
      await expect(input.selectionStart).toBe(0);
      await expect(input.selectionEnd).toBe(2);
    });
    await step('segment ←/→ moves the selection between hours / minutes slots', async () => {
      input.focus();
      await waitFor(() => expect(input.selectionStart).toBe(0));
      await userEvent.keyboard('{ArrowRight}');
      // Минуты — следующий сегмент (индексы 3..5).
      await expect(input.selectionStart).toBe(3);
      await expect(input.selectionEnd).toBe(5);
      await userEvent.keyboard('{ArrowLeft}');
      await expect(input.selectionStart).toBe(0);
      await expect(input.selectionEnd).toBe(2);
    });
    await step('typing digits fills segments and commits a TimeValue (onChange)', async () => {
      input.blur();
      input.focus();
      await waitFor(() => expect(input.value).toBe('чч:мм:сс'));
      onChange.mockClear();
      await userEvent.keyboard('093045');
      await waitFor(() => expect(input.value).toBe('09:30:45'));
      await waitFor(() => expect(onChange).toHaveBeenLastCalledWith({
        hours: 9,
        minutes: 30,
        seconds: 45
      }));
    });
    await step('Backspace clears the focused segment back to its placeholder', async () => {
      // После предыдущего шага курсор не гарантированно сбрасывается на первый сегмент в
      // storybook-test — явно выделяем сегмент часов (индексы 0..2) перед Backspace.
      // Точную позицию курсора синтетический движок не гарантирует (test-environment-pitfalls).
      input.focus();
      input.setSelectionRange(0, 2);
      await userEvent.keyboard('{Backspace}');
      await expect(input.value.slice(0, 2)).toBe('чч');
    });

    // Paste (onPaste → заполнение сегментов) — browser-specific, ненадёжен в storybook-test;
    // проверяется в реальной среде. Ввод цифр уже покрыт шагом выше.

    await step('clear button is visible for a non-empty editable field', async () => {
      await expect(editable.getByTestId(CLEAR_BUTTON_TEST_ID)).toBeVisible();
    });
    await step('keyboard: ArrowRight from the last segment roves focus to clear, ArrowLeft returns', async () => {
      // Движок на последнем сегменте ставит каретку в конец строки, и нав-цепочка в том же
      // keydown роуит фокус на clear (легаси-паритет: clear с tabIndex −1 достижим стрелками).
      input.focus();
      input.setSelectionRange(6, 8); // сегмент секунд — последний
      await userEvent.keyboard('{ArrowRight}');
      await expect(editable.getByTestId(CLEAR_BUTTON_TEST_ID)).toHaveFocus();
      await userEvent.keyboard('{ArrowLeft}');
      await expect(input).toHaveFocus();
    });
    await step('clear resets the value, fires the callback and (non-required) closes the picker', async () => {
      onChange.mockClear();
      await userEvent.click(editable.getByTestId(CLEAR_BUTTON_TEST_ID));
      expect(onClearButtonClick).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenLastCalledWith(undefined);
      // Без required onClear делает blur + close.
      await waitFor(() => expect(input).toHaveAttribute('aria-expanded', 'false'));
    });
    await step('ArrowDown opens the time picker (aria-expanded=true)', async () => {
      input.focus();
      await userEvent.keyboard('{ArrowDown}');
      await waitFor(() => expect(input).toHaveAttribute('aria-expanded', 'true'));
    });
    await step('Escape on the input closes the picker', async () => {
      // ArrowDown уводит фокус в picker-барабаны (setTimeout handoff) — возвращаем его на input.
      input.focus();
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(input).toHaveAttribute('aria-expanded', 'false'));
    });
    await step('typing while the picker is open closes it (onEdit)', async () => {
      input.focus();
      await userEvent.keyboard('{ArrowDown}');
      await waitFor(() => expect(input).toHaveAttribute('aria-expanded', 'true'));
      input.focus();
      await userEvent.keyboard('1');
      await waitFor(() => expect(input).toHaveAttribute('aria-expanded', 'false'));
    });
    await step('required clear refocuses the input and reopens the picker', async () => {
      const requiredRoot = canvas.getByTestId(STORY_TEST_IDS.fieldTime.requiredRoot);
      const requiredField = within(requiredRoot);
      const requiredInput = requiredField.getByTestId<HTMLInputElement>(TEST_IDS.fieldTimeInput);
      await userEvent.click(requiredField.getByTestId(CLEAR_BUTTON_TEST_ID));
      expect(onRequiredClear).toHaveBeenCalledTimes(1);
      // required-ветка onClear: focus + reopen (вместо blur + close у non-required).
      await waitFor(() => expect(requiredInput).toHaveFocus());
      await waitFor(() => expect(requiredInput).toHaveAttribute('aria-expanded', 'true'));
    });
    await step('readonly exposes a clickable copy button and ←/→ roves input↔copy', async () => {
      const readonlyRoot = canvas.getByTestId(STORY_TEST_IDS.fieldTime.readonlyRoot);
      const readonlyField = within(readonlyRoot);
      const readonlyInput = readonlyField.getByTestId<HTMLInputElement>(TEST_IDS.fieldTimeInput);
      const copyBtn = readonlyField.getByTestId(TEST_IDS.fieldTextCopyButton);
      // Очистки в readonly нет.
      await expect(readonlyField.queryByTestId(CLEAR_BUTTON_TEST_ID)).toBeNull();
      await expect(copyBtn).toBeVisible();
      // Readonly роуит ArrowRight на copy (сегментный движок в readonly не перехватывает клавиши).
      readonlyInput.focus();
      await userEvent.keyboard('{ArrowRight}');
      await expect(copyBtn).toHaveFocus();
      // Реальная запись в буфер (swap CopySVG→CheckSVG + onCopyButtonClick) требует clipboard-доступа,
      // которого нет в storybook-test — подтверждаем кликабельность; визуальный swap покрывает VM/readonly.
      await userEvent.click(copyBtn);
      await expect(copyBtn).toBeVisible();
    });
  }
}`,...k.parameters?.docs?.source}}},A=[`InteractionTest`]}))();export{k as InteractionTest,A as __namedExportsOrder,O as default};
//# sourceMappingURL=FieldTime.InteractionTest.stories-CHqlna17.js.map