import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,t as o,u as s}from"./iframe-CSZ3Qkp5.js";import{c,t as l}from"./src-Bmqd6ApG.js";import{t as u,x as d}from"./src-B4UN2d41.js";import{O as f,m as p,t as m}from"./src-CYpQYQmT.js";var h,g=t((()=>{h={fieldSelect:{singleRoot:`field-select-single`,singleCreatableRoot:`field-select-single-creatable`,multipleRoot:`field-select-multiple`,multipleCreatableRoot:`field-select-multiple-creatable`,disabledChipRoot:`field-select-disabled-chip`,readonlyRoot:`field-select-readonly`,emptyStringRoot:`field-select-empty-string`}}}));function _(){let[e,t]=(0,b.useState)(void 0),[n,r]=(0,b.useState)(void 0),[o,c]=(0,b.useState)([`s`,`l`]),[l,u]=(0,b.useState)([]),[d,f]=(0,b.useState)([`read`,`write`]);return(0,x.jsx)(s,{children:(0,x.jsx)(a,{width:`narrow`,children:(0,x.jsxs)(i,{align:`center`,children:[(0,x.jsx)(p,{"data-test-id":h.fieldSelect.singleRoot,label:`Size (single)`,items:D,selection:`single`,value:e,onChange:e=>{k(e),t(e)}}),(0,x.jsx)(p,{"data-test-id":h.fieldSelect.singleCreatableRoot,label:`Size (single, addOptionByEnter)`,items:D,selection:`single`,addOptionByEnter:!0,value:n,onChange:e=>{A(e),r(e)}}),(0,x.jsx)(p,{"data-test-id":h.fieldSelect.multipleRoot,label:`Sizes (multiple)`,items:D,selection:`multiple`,chips:!0,value:o,onChange:e=>{j(e),c(e)}}),(0,x.jsx)(p,{"data-test-id":h.fieldSelect.disabledChipRoot,label:`Permissions (disabled chip)`,items:O,selection:`multiple`,chips:!0,value:d,onChange:e=>{N(e),f(e)}}),(0,x.jsx)(p,{"data-test-id":h.fieldSelect.multipleCreatableRoot,label:`Tags (multiple, addOptionByEnter)`,items:D,selection:`multiple`,chips:!0,addOptionByEnter:!0,value:l,onChange:e=>{M(e),u(e)}}),(0,x.jsx)(p,{"data-test-id":h.fieldSelect.readonlyRoot,label:`Size (readonly)`,items:D,selection:`single`,readonly:!0,defaultValue:`l`,onCopyButtonClick:P}),(0,x.jsx)(p,{"data-test-id":h.fieldSelect.emptyStringRoot,label:`Size (single, empty string value)`,placeholder:I,items:D,selection:`single`,value:``,onChange:F})]})})})}function v(){return Array.from(document.querySelectorAll(`[data-test-id^="${d.baseItem}_"]`))}function y(){return v()[0]??null}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;t((()=>{m(),u(),l(),b=e(n(),1),o(),g(),x=r(),{expect:S,fn:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D=[{id:`s`,content:{label:`Small`}},{id:`m`,content:{label:`Medium`}},{id:`l`,content:{label:`Large`}}],O=[{id:`read`,content:{label:`Read`},disabled:!0},{id:`write`,content:{label:`Write`}},{id:`delete`,content:{label:`Delete`}}],k=C(),A=C(),j=C(),M=C(),N=C(),P=C(),F=C(),I=`Choose…`,L={title:`Snack/Inputs & Forms/Fields/FieldSelect/Tests/Interaction`,id:`components-fields-fieldselect-tests-interaction`,component:p,parameters:{layout:`fullscreen`,controls:{disable:!0}},render:()=>(0,x.jsx)(_,{})},R={tags:[`test`,`dev`],play:async({canvasElement:e,step:t})=>{let n=E(e),r=n.getByTestId(h.fieldSelect.singleRoot),i=E(r).getByTestId(f.fieldSelectInput),a=n.getByTestId(h.fieldSelect.singleCreatableRoot),o=n.getByTestId(h.fieldSelect.multipleRoot),s=n.getByTestId(h.fieldSelect.disabledChipRoot),l=n.getByTestId(h.fieldSelect.multipleCreatableRoot),u=n.getByTestId(h.fieldSelect.readonlyRoot),d=n.getByTestId(h.fieldSelect.emptyStringRoot);k.mockClear(),A.mockClear(),j.mockClear(),M.mockClear(),N.mockClear(),P.mockClear(),F.mockClear(),await t(`renders all fields`,async()=>{await S(r).toBeVisible(),await S(a).toBeVisible(),await S(o).toBeVisible(),await S(s).toBeVisible(),await S(l).toBeVisible(),await S(u).toBeVisible(),await S(d).toBeVisible()}),await t(`empty string value: treated as no value (placeholder shown, no clear button)`,async()=>{let e=E(d).getByTestId(f.fieldSelectInput);await S(e.value).toBe(``),await S(e).toHaveAttribute(`placeholder`,I),S(E(d).queryByTestId(f.fieldSelectClear)).toBeNull()}),await t(`keyboard: Enter on closed trigger opens the Droplist`,async()=>{i.focus(),await w.keyboard(`{Enter}`),await T(()=>S(y()).not.toBeNull()),await S(r).toHaveAttribute(`data-focusvisible`,`true`)}),await t(`keyboard: Escape closes the open Droplist`,async()=>{await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull())}),await t(`keyboard: ArrowDown re-opens the Droplist and renders items`,async()=>{i.focus(),await w.keyboard(`{ArrowDown}`),await T(()=>S(y()).not.toBeNull())}),await t(`select: click first item fires onChange and sets value`,async()=>{let e=y();e&&await w.click(e),await T(()=>S(k).toHaveBeenCalled()),await T(()=>S(i.value).not.toBe(``))}),await t(`clear: clicking clear empties the field (onChange undefined)`,async()=>{let e=E(r).getByTestId(f.fieldSelectClear);await w.click(e),await T(()=>S(i.value).toBe(``)),S(k).toHaveBeenLastCalledWith(void 0),await T(()=>S(E(r).queryByTestId(f.fieldSelectClear)).toBeNull())}),await t(`search: typing filters the open Droplist (fewer items shown)`,async()=>{i.focus(),await w.keyboard(`{ArrowDown}`),await T(()=>S(v().length).toBeGreaterThan(0)),await w.type(i,`lar`),await T(()=>S(v()).toHaveLength(1)),await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull())}),await t(`addOptionByEnter (single): Enter on typed text commits it as the value`,async()=>{let e=E(a).getByTestId(f.fieldSelectInput);e.focus(),await w.type(e,`custom-size`),await w.keyboard(`{Enter}`),await T(()=>S(A).toHaveBeenCalledWith(`custom-size`)),await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull())}),await t(`chip remove: clicking a chip remove button updates the multiple field`,async()=>{let e=E(o).getByTestId(f.fieldSelectChips),t=E(e).getAllByTestId(c.tag.removeButton),n=t.length;await S(n).toBeGreaterThan(0),await w.click(t[0]),await T(()=>S(j).toHaveBeenCalled()),await T(()=>S(E(E(o).getByTestId(f.fieldSelectChips)).queryAllByTestId(c.tag.removeButton)).toHaveLength(n-1))}),await t(`Backspace: empty input removes the last chip (multiple)`,async()=>{let e=E(o).getByTestId(f.fieldSelectInput),t=E(o).queryAllByTestId(c.tag.removeButton).length;await S(t).toBeGreaterThan(0),e.focus(),await w.keyboard(`{Backspace}`),await T(()=>S(E(o).queryAllByTestId(c.tag.removeButton)).toHaveLength(t-1))}),await t(`disabled chip: has no remove button and survives clear`,async()=>{let e=E(s).getByTestId(f.fieldSelectChips);await S(E(e).getAllByTestId(c.tag.removeButton)).toHaveLength(1);let t=E(s).getByTestId(f.fieldSelectClear);await w.click(t),await T(()=>S(N).toHaveBeenLastCalledWith([`read`]))}),await t(`addOptionByEnter (multiple): Enter on typed text creates a new chip`,async()=>{let e=E(l).getByTestId(f.fieldSelectInput);e.focus(),await w.type(e,`custom-zone`),await w.keyboard(`{Enter}`),await T(()=>S(M).toHaveBeenCalledWith([`custom-zone`])),await T(()=>S(E(E(l).getByTestId(f.fieldSelectChips)).getAllByTestId(c.tag.removeButton)).toHaveLength(1))}),await t(`readonly: copy button is visible and clickable`,async()=>{let e=E(u).getByTestId(f.fieldSelectCopy);await S(e).toBeVisible(),await w.click(e),await S(e).toBeVisible()})}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const single = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.singleRoot);
    const singleInput = within(single).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
    const singleCreatable = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.singleCreatableRoot);
    const multiple = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.multipleRoot);
    const disabledChip = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.disabledChipRoot);
    const creatable = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.multipleCreatableRoot);
    const readonly = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.readonlyRoot);
    const emptyString = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.emptyStringRoot);
    onChangeSingle.mockClear();
    onChangeSingleCreatable.mockClear();
    onChangeMultiple.mockClear();
    onChangeCreatable.mockClear();
    onChangeDisabledChip.mockClear();
    onCopyReadonly.mockClear();
    onChangeEmptyString.mockClear();
    await step('renders all fields', async () => {
      await expect(single).toBeVisible();
      await expect(singleCreatable).toBeVisible();
      await expect(multiple).toBeVisible();
      await expect(disabledChip).toBeVisible();
      await expect(creatable).toBeVisible();
      await expect(readonly).toBeVisible();
      await expect(emptyString).toBeVisible();
    });
    await step('empty string value: treated as no value (placeholder shown, no clear button)', async () => {
      const input = within(emptyString).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      await expect(input.value).toBe('');
      await expect(input).toHaveAttribute('placeholder', EMPTY_STRING_PLACEHOLDER);
      expect(within(emptyString).queryByTestId(TEST_IDS.fieldSelectClear)).toBeNull();
    });
    await step('keyboard: Enter on closed trigger opens the Droplist', async () => {
      singleInput.focus();
      await userEvent.keyboard('{Enter}');
      await waitFor(() => expect(queryFirstItem()).not.toBeNull());
      await expect(single).toHaveAttribute('data-focusvisible', 'true');
    });
    await step('keyboard: Escape closes the open Droplist', async () => {
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryFirstItem()).toBeNull());
    });
    await step('keyboard: ArrowDown re-opens the Droplist and renders items', async () => {
      singleInput.focus();
      await userEvent.keyboard('{ArrowDown}');
      await waitFor(() => expect(queryFirstItem()).not.toBeNull());
    });
    await step('select: click first item fires onChange and sets value', async () => {
      const item = queryFirstItem();
      if (item) {
        await userEvent.click(item);
      }
      await waitFor(() => expect(onChangeSingle).toHaveBeenCalled());
      await waitFor(() => expect(singleInput.value).not.toBe(''));
    });
    await step('clear: clicking clear empties the field (onChange undefined)', async () => {
      const clearButton = within(single).getByTestId(TEST_IDS.fieldSelectClear);
      await userEvent.click(clearButton);
      await waitFor(() => expect(singleInput.value).toBe(''));
      expect(onChangeSingle).toHaveBeenLastCalledWith(undefined);
      // Очистка должна «держаться»: поле controlled, потребитель прислал \`undefined\` — компонент
      // не имеет права откатиться на прошлый локальный выбор (крестик исчезает вместе со значением).
      await waitFor(() => expect(within(single).queryByTestId(TEST_IDS.fieldSelectClear)).toBeNull());
      // Возврат фокуса на input после clear проверяется в реальной среде (Playwright) —
      // в storybook-test фокус после клика по кнопке ненадёжен.
    });
    await step('search: typing filters the open Droplist (fewer items shown)', async () => {
      singleInput.focus();
      await userEvent.keyboard('{ArrowDown}');
      await waitFor(() => expect(queryItems().length).toBeGreaterThan(0));
      await userEvent.type(singleInput, 'lar');
      // Из трёх опций fuzzy-запрос \`lar\` оставляет только \`Large\`.
      await waitFor(() => expect(queryItems()).toHaveLength(1));
      // Закрываем дроплист, чтобы его portal-overlay не перекрывал соседние поля в следующих шагах.
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryFirstItem()).toBeNull());
    });
    await step('addOptionByEnter (single): Enter on typed text commits it as the value', async () => {
      const input = within(singleCreatable).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      input.focus();
      await userEvent.type(input, 'custom-size');
      await userEvent.keyboard('{Enter}');
      await waitFor(() => expect(onChangeSingleCreatable).toHaveBeenCalledWith('custom-size'));
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryFirstItem()).toBeNull());
    });
    await step('chip remove: clicking a chip remove button updates the multiple field', async () => {
      const chipsRow = within(multiple).getByTestId(TEST_IDS.fieldSelectChips);
      const removeButtons = within(chipsRow).getAllByTestId(TAG_TEST_IDS.tag.removeButton);
      const before = removeButtons.length;
      await expect(before).toBeGreaterThan(0);
      await userEvent.click(removeButtons[0]);
      await waitFor(() => expect(onChangeMultiple).toHaveBeenCalled());
      await waitFor(() => expect(within(within(multiple).getByTestId(TEST_IDS.fieldSelectChips)).queryAllByTestId(TAG_TEST_IDS.tag.removeButton)).toHaveLength(before - 1));
    });
    await step('Backspace: empty input removes the last chip (multiple)', async () => {
      const multipleInput = within(multiple).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      // Запрос скоупим к полю целиком: при удалении последнего чипа исчезает и сам chips-row.
      const chipsBefore = within(multiple).queryAllByTestId(TAG_TEST_IDS.tag.removeButton).length;
      await expect(chipsBefore).toBeGreaterThan(0);
      multipleInput.focus();
      await userEvent.keyboard('{Backspace}');
      await waitFor(() => expect(within(multiple).queryAllByTestId(TAG_TEST_IDS.tag.removeButton)).toHaveLength(chipsBefore - 1));
    });
    await step('disabled chip: has no remove button and survives clear', async () => {
      const chipsRow = within(disabledChip).getByTestId(TEST_IDS.fieldSelectChips);
      // Два чипа (read disabled + write), но только write получает кнопку удаления.
      await expect(within(chipsRow).getAllByTestId(TAG_TEST_IDS.tag.removeButton)).toHaveLength(1);
      const clearButton = within(disabledChip).getByTestId(TEST_IDS.fieldSelectClear);
      await userEvent.click(clearButton);
      // После очистки остаётся только обязательный disabled-чип «read».
      await waitFor(() => expect(onChangeDisabledChip).toHaveBeenLastCalledWith(['read']));
    });
    await step('addOptionByEnter (multiple): Enter on typed text creates a new chip', async () => {
      const creatableInput = within(creatable).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      creatableInput.focus();
      await userEvent.type(creatableInput, 'custom-zone');
      await userEvent.keyboard('{Enter}');
      await waitFor(() => expect(onChangeCreatable).toHaveBeenCalledWith(['custom-zone']));
      await waitFor(() => expect(within(within(creatable).getByTestId(TEST_IDS.fieldSelectChips)).getAllByTestId(TAG_TEST_IDS.tag.removeButton)).toHaveLength(1));
    });
    await step('readonly: copy button is visible and clickable', async () => {
      // onCopyButtonClick привязан к успешной записи в буфер, недоступной в storybook-test
      // (clipboard — browser-only); фактический вызов колбэка проверяется в реальной среде.
      const copyButton = within(readonly).getByTestId(TEST_IDS.fieldSelectCopy);
      await expect(copyButton).toBeVisible();
      await userEvent.click(copyButton);
      await expect(copyButton).toBeVisible();
    });
  }
}`,...R.parameters?.docs?.source}}},z=[`InteractionTest`]}))();export{R as InteractionTest,z as __namedExportsOrder,L as default};
//# sourceMappingURL=FieldSelect.InteractionTest.stories-C6UxA8UC.js.map