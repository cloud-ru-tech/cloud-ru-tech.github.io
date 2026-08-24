import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-d1MamqAX.js";import{O as u,b as d,t as f,v as p}from"./src-CjpZj4Bz.js";var m,h=t((()=>{m={fieldDate:{singleRoot:`field-date-single`,rangeRoot:`field-date-range`,readonlyRoot:`field-date-readonly`}}}));function g(){let[e,t]=(0,_.useState)(void 0),[n,r]=(0,_.useState)([void 0,void 0]);return(0,v.jsx)(l,{children:(0,v.jsxs)(a,{width:`narrow`,children:[(0,v.jsx)(s,{children:`Single (date)`}),(0,v.jsx)(o,{children:`Сегментный движок: авто-переход, откат невалидного дня, маска при фокусе.`}),(0,v.jsx)(i,{align:`center`,children:(0,v.jsx)(p,{"data-test-id":m.fieldDate.singleRoot,label:`Дата`,value:e,onChange:t})}),(0,v.jsx)(s,{children:`Range (date-range)`}),(0,v.jsx)(o,{children:`Движок formatMask: авто-ноль и clamp; onChange только когда обе даты валидны.`}),(0,v.jsx)(i,{align:`center`,children:(0,v.jsx)(p,{"data-test-id":m.fieldDate.rangeRoot,label:`Период`,mode:d.DateRange,value:n,onChange:e=>{w(e),r(e)}})}),(0,v.jsx)(s,{children:`Readonly + copy`}),(0,v.jsx)(o,{children:`readonly показывает кнопку копирования и скрывает очистку.`}),(0,v.jsx)(i,{align:`center`,children:(0,v.jsx)(p,{"data-test-id":m.fieldDate.readonlyRoot,label:`Только чтение`,readonly:!0,defaultValue:new Date(2026,4,17)})})]})})}var _,v,y,b,x,S,C,w,T,E,D;t((()=>{f(),_=e(n(),1),c(),h(),v=r(),{expect:y,fn:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w=b(),T={title:`Snack/Inputs & Forms/Fields/FieldDate/Tests/Interaction`,id:`components-fields-fielddate-tests-interaction`,component:p,parameters:{layout:`fullscreen`,controls:{disable:!0}},render:()=>(0,v.jsx)(g,{})},E={tags:[`test`,`dev`],play:async({canvasElement:e,step:t})=>{w.mockClear();let n=C(e),r=n.getByTestId(m.fieldDate.singleRoot),i=C(r).getByTestId(u.fieldDateInput);await t(`renders root and masked input`,async()=>{await y(r).toBeVisible(),await y(i).toBeVisible()}),await t(`input advertises the RU segment mask as its placeholder`,async()=>{await y(i).toHaveAttribute(`placeholder`,`ДД.ММ.ГГГГ`)}),await t(`range renders two masked inputs (from / to) with RU placeholders`,async()=>{let e=n.getByTestId(m.fieldDate.rangeRoot),t=C(e).getByTestId(u.fieldDateInputFrom),r=C(e).getByTestId(u.fieldDateInputTo);await y(t).toBeVisible(),await y(r).toBeVisible(),await y(t).toHaveAttribute(`placeholder`,`ДД.ММ.ГГГГ`),await y(r).toHaveAttribute(`placeholder`,`ДД.ММ.ГГГГ`)}),await t(`range formatMask auto-prefixes a single high digit (5 → 05) on the from-input`,async()=>{let e=n.getByTestId(m.fieldDate.rangeRoot),t=C(e).getByTestId(u.fieldDateInputFrom);w.mockClear(),await x.click(t),await x.type(t,`5`),await S(()=>y(t.value).toBe(`05`)),y(w).not.toHaveBeenCalled()}),await t(`range formatMask clamps a full segment over its max (day 35 → 31)`,async()=>{let e=n.getByTestId(m.fieldDate.rangeRoot),t=C(e).getByTestId(u.fieldDateInputFrom);await x.clear(t),await x.click(t),await x.type(t,`35`),await S(()=>y(t.value).toBe(`31`))}),await t(`readonly shows the copy button and hides clear`,async()=>{let e=n.getByTestId(m.fieldDate.readonlyRoot),t=C(e).getByTestId(u.fieldDateCopy);await y(t).toBeVisible(),await y(C(e).queryByTestId(u.fieldDateClear)).toBeNull()})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    onChangeRange.mockClear();
    const canvas = within(canvasElement);
    const singleRoot = canvas.getByTestId(STORY_TEST_IDS.fieldDate.singleRoot);
    const single = within(singleRoot);
    const input = single.getByTestId<HTMLInputElement>(TEST_IDS.fieldDateInput);
    await step('renders root and masked input', async () => {
      await expect(singleRoot).toBeVisible();
      await expect(input).toBeVisible();
    });
    await step('input advertises the RU segment mask as its placeholder', async () => {
      // ДД.ММ.ГГГГ — это placeholder-атрибут input'а, а не value пустого поля: у пустого input'а
      // value === ''. value заполняется маской движком (ensureMask) только при фокусе/вводе.
      await expect(input).toHaveAttribute('placeholder', 'ДД.ММ.ГГГГ');
    });

    // Сегментный движок single-инпута (engage-mask по фокусу, ←/→ по сегментам, Backspace,
    // blur-сброс, ввод полной даты с коммитом, clamp дня) завязан на программный focus, который
    // в синтетической storybook-test среде не триггерит onFocus→ensureMask. Эти поведения
    // ассертятся в реальном chrome — __test__/FieldDate/interaction.spec.ts: typing→commit
    // (15032026 → 15.03.2026), single-mode clamp (35 → 31). Здесь оставляем надёжные проверки:
    // placeholder (выше), range formatMask через реальный click+type (ниже) и readonly-copy.

    await step('range renders two masked inputs (from / to) with RU placeholders', async () => {
      const rangeRoot = canvas.getByTestId(STORY_TEST_IDS.fieldDate.rangeRoot);
      const fromInput = within(rangeRoot).getByTestId<HTMLInputElement>(TEST_IDS.fieldDateInputFrom);
      const toInput = within(rangeRoot).getByTestId<HTMLInputElement>(TEST_IDS.fieldDateInputTo);
      await expect(fromInput).toBeVisible();
      await expect(toInput).toBeVisible();
      await expect(fromInput).toHaveAttribute('placeholder', 'ДД.ММ.ГГГГ');
      await expect(toInput).toHaveAttribute('placeholder', 'ДД.ММ.ГГГГ');
    });
    await step('range formatMask auto-prefixes a single high digit (5 → 05) on the from-input', async () => {
      const rangeRoot = canvas.getByTestId(STORY_TEST_IDS.fieldDate.rangeRoot);
      const fromInput = within(rangeRoot).getByTestId<HTMLInputElement>(TEST_IDS.fieldDateInputFrom);
      onChangeRange.mockClear();
      await userEvent.click(fromInput);
      await userEvent.type(fromInput, '5');
      // Авто-ноль: «5» не может начинать день (> 3), трактуется как единицы → 05.
      await waitFor(() => expect(fromInput.value).toBe('05'));
      // Один частично заполненный край — onChange не эмитится (bothValid gate).
      expect(onChangeRange).not.toHaveBeenCalled();
    });
    await step('range formatMask clamps a full segment over its max (day 35 → 31)', async () => {
      const rangeRoot = canvas.getByTestId(STORY_TEST_IDS.fieldDate.rangeRoot);
      const fromInput = within(rangeRoot).getByTestId<HTMLInputElement>(TEST_IDS.fieldDateInputFrom);
      await userEvent.clear(fromInput);
      await userEvent.click(fromInput);
      // День 35 не превышает «десятки» (3 ≤ 3), но полные 35 > 31 → прижимается к верхней границе.
      await userEvent.type(fromInput, '35');
      await waitFor(() => expect(fromInput.value).toBe('31'));
    });
    await step('readonly shows the copy button and hides clear', async () => {
      // DOM-контракт readonly-режима: copy-кнопка показана (showCopy = readonly + hasValue),
      // clear-кнопка скрыта. Реальная запись в буфер + read-back («17.05.2026») покрыты в
      // __test__/FieldDate/interaction.spec.ts (clipboard-доступ есть только в реальном chrome);
      // здесь не дублируем тавтологичным повторным toBeVisible.
      const readonlyRoot = canvas.getByTestId(STORY_TEST_IDS.fieldDate.readonlyRoot);
      const copyButton = within(readonlyRoot).getByTestId(TEST_IDS.fieldDateCopy);
      await expect(copyButton).toBeVisible();
      await expect(within(readonlyRoot).queryByTestId(TEST_IDS.fieldDateClear)).toBeNull();
    });
  }
}`,...E.parameters?.docs?.source}}},D=[`InteractionTest`]}))();export{E as InteractionTest,D as __namedExportsOrder,T as default};
//# sourceMappingURL=FieldDate.InteractionTest.stories-D8QGdh8e.js.map