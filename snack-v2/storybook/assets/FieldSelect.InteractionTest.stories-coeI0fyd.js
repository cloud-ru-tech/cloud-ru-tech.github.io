import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{f as i,p as a,t as o,u as s}from"./iframe-BroNjke9.js";import{t as c,w as l}from"./src-VlHHSTSb2.js";import{c as u,t as d}from"./src-FvsrcQyZ.js";import{M as f,m as p,t as m}from"./src-oNcelbim.js";var h,g=t((()=>{h={fieldSelect:{singleRoot:`field-select-single`,singleCreatableRoot:`field-select-single-creatable`,singleAllowCustomRoot:`field-select-single-allow-custom`,multipleRoot:`field-select-multiple`,multipleCreatableRoot:`field-select-multiple-creatable`,multipleCreatableWithoutChipsRoot:`field-select-multiple-creatable-without-chips`,multipleEnterOnlyRoot:`field-select-multiple-enter-only`,disabledChipRoot:`field-select-disabled-chip`,readonlyRoot:`field-select-readonly`,emptyStringRoot:`field-select-empty-string`,collapseRoot:`field-select-collapse`}}}));function _(){let[e,t]=(0,b.useState)(void 0),[n,r]=(0,b.useState)(void 0),[o,c]=(0,b.useState)([`s`,`l`]),[l,u]=(0,b.useState)([]),[d,f]=(0,b.useState)([`custom-first`]),[m,g]=(0,b.useState)([]),[_,v]=(0,b.useState)([`read`,`write`]);return(0,x.jsx)(i,{children:(0,x.jsx)(a,{width:`narrow`,children:(0,x.jsxs)(s,{align:`center`,children:[(0,x.jsx)(p,{"data-test-id":h.fieldSelect.singleRoot,label:`Size (single)`,items:D,selection:`single`,value:e,onChange:e=>{A(e),t(e)}}),(0,x.jsx)(p,{"data-test-id":h.fieldSelect.singleAllowCustomRoot,label:`Size (single, allowCustomOption)`,items:D,selection:`single`,allowCustomOption:!0,value:n,onChange:e=>{j(e),r(e)}}),(0,x.jsx)(p,{"data-test-id":h.fieldSelect.collapseRoot,label:`Instance size (collapse)`,items:k,selection:`single`}),(0,x.jsx)(p,{"data-test-id":h.fieldSelect.multipleRoot,label:`Sizes (multiple)`,items:D,selection:`multiple`,chips:!0,value:o,onChange:e=>{M(e),c(e)}}),(0,x.jsx)(p,{"data-test-id":h.fieldSelect.disabledChipRoot,label:`Permissions (disabled chip)`,items:O,selection:`multiple`,chips:!0,value:_,onChange:e=>{I(e),v(e)}}),(0,x.jsx)(p,{"data-test-id":h.fieldSelect.multipleCreatableRoot,label:`Tags (multiple, allowCustomOption)`,items:D,selection:`multiple`,chips:!0,allowCustomOption:!0,value:l,onChange:e=>{N(e),u(e)}}),(0,x.jsx)(p,{"data-test-id":h.fieldSelect.multipleEnterOnlyRoot,label:`Tags (multiple, enter only)`,items:D,selection:`multiple`,chips:!0,allowCustomOption:!0,addCustomOptionTriggers:[`enter`],value:m,onChange:e=>{F(e),g(e)}}),(0,x.jsx)(p,{"data-test-id":h.fieldSelect.multipleCreatableWithoutChipsRoot,label:`Tags (multiple, allowCustomOption, chips=false)`,items:D,selection:`multiple`,chips:!1,allowCustomOption:!0,value:d,onChange:e=>{P(e),f(e)}}),(0,x.jsx)(p,{"data-test-id":h.fieldSelect.readonlyRoot,label:`Size (readonly)`,items:D,selection:`single`,readonly:!0,defaultValue:`l`,onCopyButtonClick:L}),(0,x.jsx)(p,{"data-test-id":h.fieldSelect.emptyStringRoot,label:`Size (single, empty string value)`,placeholder:z,items:D,selection:`single`,value:``,onChange:R})]})})})}function v(){return Array.from(document.querySelectorAll(`[data-test-id^="${l.baseItem}_"]`))}function y(){return v()[0]??null}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;t((()=>{m(),c(),d(),b=e(n(),1),o(),g(),x=r(),{expect:S,fn:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D=[{id:`s`,content:{label:`Small`}},{id:`m`,content:{label:`Medium`}},{id:`l`,content:{label:`Large`}}],O=[{id:`read`,content:{label:`Read`},disabled:!0},{id:`write`,content:{label:`Write`}},{id:`delete`,content:{label:`Delete`}}],k=[{type:`collapse`,id:`advanced`,content:{label:`Advanced sizes`},items:[{id:`xl`,content:{label:`X-Large`}},{id:`xxl`,content:{label:`XX-Large`}}]}],A=C(),j=C(),M=C(),N=C(),P=C(),F=C(),I=C(),L=C(),R=C(),z=`Choose…`,B={title:`Snack/Inputs & Forms/Fields/FieldSelect/Tests/Interaction`,id:`components-fields-fieldselect-tests-interaction`,component:p,parameters:{layout:`fullscreen`,controls:{disable:!0}},render:()=>(0,x.jsx)(_,{})},V={tags:[`test`,`dev`],play:async({canvasElement:e,step:t})=>{let n=E(e),r=n.getByTestId(h.fieldSelect.singleRoot),i=E(r).getByTestId(f.fieldSelectInput),a=n.getByTestId(h.fieldSelect.singleAllowCustomRoot),o=n.getByTestId(h.fieldSelect.collapseRoot),s=n.getByTestId(h.fieldSelect.multipleRoot),c=n.getByTestId(h.fieldSelect.disabledChipRoot),d=n.getByTestId(h.fieldSelect.multipleCreatableRoot),p=n.getByTestId(h.fieldSelect.multipleCreatableWithoutChipsRoot),m=n.getByTestId(h.fieldSelect.multipleEnterOnlyRoot),g=n.getByTestId(h.fieldSelect.readonlyRoot),_=n.getByTestId(h.fieldSelect.emptyStringRoot);A.mockClear(),j.mockClear(),M.mockClear(),N.mockClear(),P.mockClear(),F.mockClear(),I.mockClear(),L.mockClear(),R.mockClear(),await t(`renders all fields`,async()=>{await S(r).toBeVisible(),await S(a).toBeVisible(),await S(o).toBeVisible(),await S(s).toBeVisible(),await S(c).toBeVisible(),await S(d).toBeVisible(),await S(p).toBeVisible(),await S(m).toBeVisible(),await S(g).toBeVisible(),await S(_).toBeVisible()}),await t(`empty string value: treated as no value (placeholder shown, no clear button)`,async()=>{let e=E(_).getByTestId(f.fieldSelectInput);await S(e.value).toBe(``),await S(e).toHaveAttribute(`placeholder`,z),S(E(_).queryByTestId(f.fieldSelectClear)).toBeNull()}),await t(`keyboard: Enter on closed trigger opens the Droplist`,async()=>{i.focus(),await w.keyboard(`{Enter}`),await T(()=>S(y()).not.toBeNull()),await S(r).toHaveAttribute(`data-focusvisible`,`true`)}),await t(`keyboard: Escape closes the open Droplist`,async()=>{await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull())}),await t(`collapse: clicking a group header keeps the Droplist open; selecting a child closes it`,async()=>{let e=E(o).getByTestId(f.fieldSelectInput),t=E(document.body);await w.click(e),await T(()=>S(t.getByTestId(`${l.baseItem}_advanced`)).toBeVisible()),await w.click(t.getByTestId(`${l.baseItem}_advanced`)),await T(()=>S(t.getByTestId(`${l.baseItem}_xl`)).toBeVisible()),await w.click(t.getByTestId(`${l.baseItem}_xl`)),await T(()=>S(t.queryByTestId(`${l.baseItem}_advanced`)).toBeNull()),await S(e.value).toBe(`X-Large`)}),await t(`keyboard: ArrowDown re-opens the Droplist and renders items`,async()=>{i.focus(),await w.keyboard(`{ArrowDown}`),await T(()=>S(y()).not.toBeNull())}),await t(`select: click first item fires onChange and sets value`,async()=>{let e=y();e&&await w.click(e),await T(()=>S(A).toHaveBeenCalled()),await T(()=>S(i.value).not.toBe(``))}),await t(`search: clearing the input then leaving the field restores the selected label`,async()=>{let e=i.value,t=A.mock.lastCall?.[0];i.focus(),await w.clear(i),await T(()=>S(i.value).toBe(``)),await w.click(i),await T(()=>S(i.value).toBe(e)),S(A).toHaveBeenLastCalledWith(t),await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull())}),await t(`clear: clicking clear empties the field (onChange undefined)`,async()=>{let e=E(r).getByTestId(f.fieldSelectClear);await w.click(e),await T(()=>S(i.value).toBe(``)),S(A).toHaveBeenLastCalledWith(void 0),await T(()=>S(E(r).queryByTestId(f.fieldSelectClear)).toBeNull())}),await t(`search: typing filters the open Droplist (fewer items shown)`,async()=>{i.focus(),await w.keyboard(`{ArrowDown}`),await T(()=>S(v().length).toBeGreaterThan(0)),await w.type(i,`lar`),await T(()=>S(v()).toHaveLength(1)),await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull())}),await t(`allowCustomOption (single): Escape discards typed text without committing`,async()=>{let e=E(a).getByTestId(f.fieldSelectInput);e.focus(),await w.type(e,`esc-me`),S(j).not.toHaveBeenCalled(),await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull()),S(j).not.toHaveBeenCalled(),await S(e.value).toBe(``)}),await t(`allowCustomOption (single): clicking an existing item does not commit the typed query`,async()=>{let e=E(a).getByTestId(f.fieldSelectInput);await w.click(e),await w.type(e,`med`);let t=`[data-test-id="${l.baseItem}_m"]`;await T(()=>S(e.ownerDocument.querySelector(t)).not.toBeNull()),await w.click(e.ownerDocument.querySelector(t)),await T(()=>S(j).toHaveBeenLastCalledWith(`m`)),S(j.mock.calls.map(e=>e[0])).not.toContain(`med`),await T(()=>S(y()).toBeNull()),await S(e.value).toBe(`Medium`)}),await t(`allowCustomOption (single): Enter on typed text commits it as the value`,async()=>{let e=E(a).getByTestId(f.fieldSelectInput);await w.click(E(a).getByTestId(f.fieldSelectClear)),j.mockClear(),await w.type(e,`custom-single`),await w.keyboard(`{Enter}`),await T(()=>S(j).toHaveBeenCalledWith(`custom-single`)),await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull())}),await t(`allowCustomOption (single): blur commits the typed value`,async()=>{let e=E(a).getByTestId(f.fieldSelectInput);await w.type(e,`from-single-blur`,{initialSelectionStart:0,initialSelectionEnd:e.value.length}),await w.click(i),await T(()=>S(j).toHaveBeenLastCalledWith(`from-single-blur`)),await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull())}),await t(`chip remove: clicking a chip remove button updates the multiple field`,async()=>{let e=E(s).getByTestId(f.fieldSelectChips),t=E(e).getAllByTestId(u.tag.removeButton),n=t.length;await S(n).toBeGreaterThan(0),await w.click(t[0]),await T(()=>S(M).toHaveBeenCalled()),await T(()=>S(E(E(s).getByTestId(f.fieldSelectChips)).queryAllByTestId(u.tag.removeButton)).toHaveLength(n-1))}),await t(`Backspace: empty input removes the last chip (multiple)`,async()=>{let e=E(s).getByTestId(f.fieldSelectInput),t=E(s).queryAllByTestId(u.tag.removeButton).length;await S(t).toBeGreaterThan(0),e.focus(),await w.keyboard(`{Backspace}`),await T(()=>S(E(s).queryAllByTestId(u.tag.removeButton)).toHaveLength(t-1))}),await t(`disabled chip: has no remove button and survives clear`,async()=>{let e=E(c).getByTestId(f.fieldSelectChips);await S(E(e).getAllByTestId(u.tag.removeButton)).toHaveLength(1);let t=E(c).getByTestId(f.fieldSelectClear);await w.click(t),await T(()=>S(I).toHaveBeenLastCalledWith([`read`]))}),await t(`allowCustomOption (multiple, chips=false): blur commits only newly typed text`,async()=>{let e=E(p).getByTestId(f.fieldSelectInput);await S(e.value).toBe(`custom-first`),e.focus(),await w.click(i),S(P).not.toHaveBeenCalled(),await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull()),await w.type(e,`custom-second`,{initialSelectionStart:0,initialSelectionEnd:e.value.length}),await w.click(i),await T(()=>S(P).toHaveBeenLastCalledWith([`custom-first`,`custom-second`])),await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull())}),await t(`allowCustomOption (multiple): Enter on typed text creates a new chip`,async()=>{let e=E(d).getByTestId(f.fieldSelectInput);e.focus(),await w.type(e,`custom-zone`),await w.keyboard(`{Enter}`),await T(()=>S(N).toHaveBeenCalledWith([`custom-zone`])),await T(()=>S(E(E(d).getByTestId(f.fieldSelectChips)).getAllByTestId(u.tag.removeButton)).toHaveLength(1)),await S(E(d).getByTestId(f.fieldSelectInput)).toHaveFocus(),await T(()=>S(document.querySelector(`[data-test-id="${l.baseItem}_custom-zone"]`)).not.toBeNull()),await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull())}),await t(`allowCustomOption (multiple): Space commits the typed value as a chip`,async()=>{let e=E(d).getByTestId(f.fieldSelectInput);e.focus(),await w.type(e,`from-space`),await w.keyboard(` `),await T(()=>S(N).toHaveBeenLastCalledWith([`custom-zone`,`from-space`]))}),await t(`allowCustomOption (multiple): Comma commits the typed value as a chip`,async()=>{let e=E(d).getByTestId(f.fieldSelectInput);e.focus(),await w.type(e,`from-comma`),await w.keyboard(`,`),await T(()=>S(N).toHaveBeenLastCalledWith([`custom-zone`,`from-space`,`from-comma`]))}),await t(`allowCustomOption (multiple): blur commits the typed value and adds it to the list`,async()=>{let e=E(d).getByTestId(f.fieldSelectInput);e.focus(),await w.type(e,`from-blur`),await w.click(i),await T(()=>S(N).toHaveBeenLastCalledWith([`custom-zone`,`from-space`,`from-comma`,`from-blur`])),await w.click(e),await T(()=>S(document.querySelector(`[data-test-id="${l.baseItem}_from-blur"]`)).not.toBeNull()),await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull())}),await t(`allowCustomOption (multiple): clicking an existing item does not commit the typed query`,async()=>{let e=E(d).getByTestId(f.fieldSelectInput);e.focus(),await w.type(e,`sm`),await T(()=>S(document.querySelector(`[data-test-id="${l.baseItem}_s"]`)).not.toBeNull()),await w.click(document.querySelector(`[data-test-id="${l.baseItem}_s"]`)),await T(()=>{let e=N.mock.lastCall?.[0];S(e?.includes(`sm`)).toBe(!1),S(e).toContain(`s`)}),await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull())}),await t(`allowCustomOption (multiple): Enter on an already selected value does not duplicate it`,async()=>{let e=E(d).getByTestId(f.fieldSelectInput),t=N.mock.lastCall?.[0];e.focus(),await w.type(e,`custom-zone`),await w.keyboard(`{Enter}`),S(N.mock.lastCall?.[0]).toEqual(t),await T(()=>S(e.value).toBe(``)),await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull())}),await t(`allowCustomOption (multiple, enter only): blur does not commit, Enter does`,async()=>{let e=E(m).getByTestId(f.fieldSelectInput);e.focus(),await w.type(e,`should-not-blur`),await w.click(i),S(F).not.toHaveBeenCalled(),e.focus(),await w.type(e,`only-enter`),await w.keyboard(`{Enter}`),await T(()=>S(F).toHaveBeenCalledWith([`only-enter`])),await w.keyboard(`{Escape}`),await T(()=>S(y()).toBeNull())}),await t(`readonly: copy button is visible and clickable`,async()=>{let e=E(g).getByTestId(f.fieldSelectCopy);await S(e).toBeVisible(),await w.click(e),await S(e).toBeVisible()})}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const single = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.singleRoot);
    const singleInput = within(single).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
    const singleAllowCustom = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.singleAllowCustomRoot);
    const collapse = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.collapseRoot);
    const multiple = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.multipleRoot);
    const disabledChip = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.disabledChipRoot);
    const creatable = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.multipleCreatableRoot);
    const creatableWithoutChips = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.multipleCreatableWithoutChipsRoot);
    const enterOnly = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.multipleEnterOnlyRoot);
    const readonly = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.readonlyRoot);
    const emptyString = canvas.getByTestId(STORY_TEST_IDS.fieldSelect.emptyStringRoot);
    onChangeSingle.mockClear();
    onChangeSingleAllowCustom.mockClear();
    onChangeMultiple.mockClear();
    onChangeCreatable.mockClear();
    onChangeCreatableWithoutChips.mockClear();
    onChangeEnterOnly.mockClear();
    onChangeDisabledChip.mockClear();
    onCopyReadonly.mockClear();
    onChangeEmptyString.mockClear();
    await step('renders all fields', async () => {
      await expect(single).toBeVisible();
      await expect(singleAllowCustom).toBeVisible();
      await expect(collapse).toBeVisible();
      await expect(multiple).toBeVisible();
      await expect(disabledChip).toBeVisible();
      await expect(creatable).toBeVisible();
      await expect(creatableWithoutChips).toBeVisible();
      await expect(enterOnly).toBeVisible();
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
    await step('collapse: clicking a group header keeps the Droplist open; selecting a child closes it', async () => {
      const input = within(collapse).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      const documentCanvas = within(document.body);
      await userEvent.click(input);
      await waitFor(() => expect(documentCanvas.getByTestId(\`\${LIST_TEST_IDS.baseItem}_advanced\`)).toBeVisible());
      await userEvent.click(documentCanvas.getByTestId(\`\${LIST_TEST_IDS.baseItem}_advanced\`));
      await waitFor(() => expect(documentCanvas.getByTestId(\`\${LIST_TEST_IDS.baseItem}_xl\`)).toBeVisible());
      await userEvent.click(documentCanvas.getByTestId(\`\${LIST_TEST_IDS.baseItem}_xl\`));
      await waitFor(() => expect(documentCanvas.queryByTestId(\`\${LIST_TEST_IDS.baseItem}_advanced\`)).toBeNull());
      await expect(input.value).toBe('X-Large');
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
    await step('search: clearing the input then leaving the field restores the selected label', async () => {
      const selected = singleInput.value;
      const lastChange = onChangeSingle.mock.lastCall?.[0];
      singleInput.focus();
      await userEvent.clear(singleInput);
      await waitFor(() => expect(singleInput.value).toBe(''));
      await userEvent.click(singleInput);
      await waitFor(() => expect(singleInput.value).toBe(selected));
      expect(onChangeSingle).toHaveBeenLastCalledWith(lastChange);
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryFirstItem()).toBeNull());
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
    await step('allowCustomOption (single): Escape discards typed text without committing', async () => {
      const input = within(singleAllowCustom).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      input.focus();
      await userEvent.type(input, 'esc-me');
      expect(onChangeSingleAllowCustom).not.toHaveBeenCalled();
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryFirstItem()).toBeNull());
      expect(onChangeSingleAllowCustom).not.toHaveBeenCalled();
      await expect(input.value).toBe('');
    });
    await step('allowCustomOption (single): clicking an existing item does not commit the typed query', async () => {
      const input = within(singleAllowCustom).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      await userEvent.click(input);
      await userEvent.type(input, 'med');
      const mediumItemSelector = \`[data-test-id="\${LIST_TEST_IDS.baseItem}_m"]\`;
      await waitFor(() => expect(input.ownerDocument.querySelector(mediumItemSelector)).not.toBeNull());
      await userEvent.click(input.ownerDocument.querySelector(mediumItemSelector) as HTMLElement);
      await waitFor(() => expect(onChangeSingleAllowCustom).toHaveBeenLastCalledWith('m'));
      expect(onChangeSingleAllowCustom.mock.calls.map(call => call[0])).not.toContain('med');
      await waitFor(() => expect(queryFirstItem()).toBeNull());
      await expect(input.value).toBe('Medium');
    });
    await step('allowCustomOption (single): Enter on typed text commits it as the value', async () => {
      const input = within(singleAllowCustom).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      await userEvent.click(within(singleAllowCustom).getByTestId(TEST_IDS.fieldSelectClear));
      onChangeSingleAllowCustom.mockClear();
      await userEvent.type(input, 'custom-single');
      await userEvent.keyboard('{Enter}');
      await waitFor(() => expect(onChangeSingleAllowCustom).toHaveBeenCalledWith('custom-single'));
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryFirstItem()).toBeNull());
    });
    await step('allowCustomOption (single): blur commits the typed value', async () => {
      const input = within(singleAllowCustom).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      await userEvent.type(input, 'from-single-blur', {
        initialSelectionStart: 0,
        initialSelectionEnd: input.value.length
      });
      await userEvent.click(singleInput);
      await waitFor(() => expect(onChangeSingleAllowCustom).toHaveBeenLastCalledWith('from-single-blur'));
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
    await step('allowCustomOption (multiple, chips=false): blur commits only newly typed text', async () => {
      const input = within(creatableWithoutChips).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      await expect(input.value).toBe('custom-first');
      input.focus();
      await userEvent.click(singleInput);
      expect(onChangeCreatableWithoutChips).not.toHaveBeenCalled();
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryFirstItem()).toBeNull());
      await userEvent.type(input, 'custom-second', {
        initialSelectionStart: 0,
        initialSelectionEnd: input.value.length
      });
      await userEvent.click(singleInput);
      await waitFor(() => expect(onChangeCreatableWithoutChips).toHaveBeenLastCalledWith(['custom-first', 'custom-second']));
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryFirstItem()).toBeNull());
    });
    await step('allowCustomOption (multiple): Enter on typed text creates a new chip', async () => {
      const creatableInput = within(creatable).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      creatableInput.focus();
      await userEvent.type(creatableInput, 'custom-zone');
      await userEvent.keyboard('{Enter}');
      await waitFor(() => expect(onChangeCreatable).toHaveBeenCalledWith(['custom-zone']));
      await waitFor(() => expect(within(within(creatable).getByTestId(TEST_IDS.fieldSelectChips)).getAllByTestId(TAG_TEST_IDS.tag.removeButton)).toHaveLength(1));
      await expect(within(creatable).getByTestId(TEST_IDS.fieldSelectInput)).toHaveFocus();
      await waitFor(() => expect(document.querySelector(\`[data-test-id="\${LIST_TEST_IDS.baseItem}_custom-zone"]\`)).not.toBeNull());
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryFirstItem()).toBeNull());
    });
    await step('allowCustomOption (multiple): Space commits the typed value as a chip', async () => {
      const creatableInput = within(creatable).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      creatableInput.focus();
      await userEvent.type(creatableInput, 'from-space');
      await userEvent.keyboard(' ');
      await waitFor(() => expect(onChangeCreatable).toHaveBeenLastCalledWith(['custom-zone', 'from-space']));
    });
    await step('allowCustomOption (multiple): Comma commits the typed value as a chip', async () => {
      const creatableInput = within(creatable).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      creatableInput.focus();
      await userEvent.type(creatableInput, 'from-comma');
      await userEvent.keyboard(',');
      await waitFor(() => expect(onChangeCreatable).toHaveBeenLastCalledWith(['custom-zone', 'from-space', 'from-comma']));
    });
    await step('allowCustomOption (multiple): blur commits the typed value and adds it to the list', async () => {
      const creatableInput = within(creatable).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      creatableInput.focus();
      await userEvent.type(creatableInput, 'from-blur');
      await userEvent.click(singleInput);
      await waitFor(() => expect(onChangeCreatable).toHaveBeenLastCalledWith(['custom-zone', 'from-space', 'from-comma', 'from-blur']));
      await userEvent.click(creatableInput);
      await waitFor(() => expect(document.querySelector(\`[data-test-id="\${LIST_TEST_IDS.baseItem}_from-blur"]\`)).not.toBeNull());
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryFirstItem()).toBeNull());
    });
    await step('allowCustomOption (multiple): clicking an existing item does not commit the typed query', async () => {
      const creatableInput = within(creatable).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      creatableInput.focus();
      await userEvent.type(creatableInput, 'sm');
      await waitFor(() => expect(document.querySelector(\`[data-test-id="\${LIST_TEST_IDS.baseItem}_s"]\`)).not.toBeNull());
      await userEvent.click(document.querySelector(\`[data-test-id="\${LIST_TEST_IDS.baseItem}_s"]\`) as HTMLElement);
      await waitFor(() => {
        const last = onChangeCreatable.mock.lastCall?.[0] as ItemId[] | undefined;
        expect(last?.includes('sm')).toBe(false);
        expect(last).toContain('s');
      });
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryFirstItem()).toBeNull());
    });
    await step('allowCustomOption (multiple): Enter on an already selected value does not duplicate it', async () => {
      const creatableInput = within(creatable).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      const last = onChangeCreatable.mock.lastCall?.[0];
      creatableInput.focus();
      await userEvent.type(creatableInput, 'custom-zone');
      await userEvent.keyboard('{Enter}');
      expect(onChangeCreatable.mock.lastCall?.[0]).toEqual(last);
      await waitFor(() => expect(creatableInput.value).toBe(''));
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryFirstItem()).toBeNull());
    });
    await step('allowCustomOption (multiple, enter only): blur does not commit, Enter does', async () => {
      const input = within(enterOnly).getByTestId(TEST_IDS.fieldSelectInput) as HTMLInputElement;
      input.focus();
      await userEvent.type(input, 'should-not-blur');
      await userEvent.click(singleInput);
      expect(onChangeEnterOnly).not.toHaveBeenCalled();
      input.focus();
      await userEvent.type(input, 'only-enter');
      await userEvent.keyboard('{Enter}');
      await waitFor(() => expect(onChangeEnterOnly).toHaveBeenCalledWith(['only-enter']));
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryFirstItem()).toBeNull());
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
}`,...V.parameters?.docs?.source}}},H=[`InteractionTest`]}))();export{V as InteractionTest,H as __namedExportsOrder,B as default};
//# sourceMappingURL=FieldSelect.InteractionTest.stories-coeI0fyd.js.map