import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-CvASAC9b.js";import{c,d as l,n as u,s as d,t as f,u as p}from"./src-Ctgwr5IU.js";import{n as m,t as h}from"./testIds-CUQjG5a-.js";var g,_,v,y,b,x,S,C,w,T;e((()=>{f(),o(),m(),g=t(),{expect:_,fireEvent:v,fn:y,userEvent:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Snack/Inputs & Forms/Markdown/MarkdownEditor/Tests/Interaction`,id:`components-markdown-markdowneditor-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{defaultValue:`# Hello

Some paragraph.`,toolbar:[d.Heading,d.Bold,d.Link,d.Table,d.Image],onChange:y(),onPreviewChange:y(),"data-test-id":h.editor},render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{width:`wide`,children:[(0,g.jsx)(a,{children:`InteractionTest`}),(0,g.jsx)(i,{children:`Тулбар (bold), heading-дропдаун, table-picker, clear и preview-тогл.`}),(0,g.jsx)(n,{align:`start`,children:(0,g.jsx)(u,{...e})})]})})},w={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=S(t),i=S(document.body),a=r.getByTestId(h.editor);await n(`default (preview off): raw textarea editable, toolbar active`,async()=>{await _(r.getByTestId(h.editorHeader)).toBeVisible(),await _(r.getByTestId(h.editorPreviewToggle)).toBeVisible(),await _(r.getByTestId(h.editorLabel)).toBeVisible(),await _(r.getByTestId(h.editorClear)).toBeVisible(),await _(r.getByTestId(h.toolbar)).toBeVisible(),await _(r.getByTestId(h.editorRawInput)).toBeVisible(),await _(r.getByTestId(l(d.Bold))).toBeEnabled()}),await n(`raw mode: Ctrl+B hotkey wraps the selection with ** (toolbar hotkeys work in raw)`,async()=>{let e=r.getByTestId(h.editorRawInput);e.focus(),e.setSelectionRange(2,7),v.keyDown(e,{key:`b`,code:`KeyB`,ctrlKey:!0}),await x(()=>_(r.getByTestId(h.editorRawInput).value).toContain(`**Hello**`))}),await n("raw mode: Link inserts raw markdown `[..](..)` without opening the modal",async()=>{let e=r.getByTestId(h.editorRawInput);e.focus(),e.setSelectionRange(e.value.length,e.value.length),await b.click(r.getByTestId(l(d.Link))),await _(i.queryByTestId(h.linkModal)).toBeNull(),await x(()=>_(r.getByTestId(h.editorRawInput).value).toMatch(/\]\(/))}),await n(`Preview toggle shows editable WYSIWYG with active toolbar`,async()=>{let t=r.getByTestId(`${h.editorPreviewToggle}-native-input`);await b.click(t),_(e.onPreviewChange).toHaveBeenCalledWith(!0),await _(a).toHaveAttribute(`data-preview`,`true`),await _(r.getByTestId(h.editorContent)).toBeVisible(),await _(r.getByTestId(l(d.Bold))).toBeEnabled()});let o=r.getByTestId(h.editorContent).querySelector(`.ProseMirror`);await n(`Bold toggles active state on the selected text`,async()=>{o.focus(),await b.keyboard(`{Control>}a{/Control}`);let e=r.getByTestId(l(d.Bold));await b.click(e),await x(()=>_(e).toHaveAttribute(`data-checked`,`true`)),await b.click(e),await x(()=>_(e).not.toHaveAttribute(`data-checked`))}),await n(`Heading dropdown opens and applies H2`,async()=>{await b.click(r.getByTestId(h.toolbarHeading)),await _(i.getByTestId(h.headingDropdown)).toBeVisible(),await b.click(i.getByTestId(c(2))),await _(i.queryByTestId(h.headingDropdown)).toBeNull()}),await n(`Table picker opens and inserts a 2×3 table`,async()=>{await b.click(r.getByTestId(l(d.Table))),await _(i.getByTestId(h.tableGridPicker)).toBeVisible(),await b.click(i.getByTestId(p(2,3))),await x(()=>_(o.querySelector(`table`)).toBeTruthy())}),await n(`Customize table opens the modal and Add inserts a table`,async()=>{await b.click(r.getByTestId(l(d.Table))),await b.click(i.getByTestId(h.tableCustomize)),await _(i.getByTestId(h.customizeModal)).toBeVisible(),await b.click(i.getByTestId(h.customizeAdd)),await x(()=>_(i.queryByTestId(h.customizeModal)).toBeNull()),await x(()=>_(o.querySelector(`table`)).toBeTruthy())}),await n(`Link modal opens, fills URL and closes on Add`,async()=>{await b.click(r.getByTestId(l(d.Link))),await _(i.getByTestId(h.linkModal)).toBeVisible();let e=i.getByTestId(h.linkModalUrl).querySelector(`input`);await b.type(e,`https://example.com`),await b.click(i.getByTestId(h.linkModalAdd)),await x(()=>_(i.queryByTestId(h.linkModal)).toBeNull())}),await n(`Image modal opens, fills URL and closes on Add`,async()=>{await b.click(r.getByTestId(l(d.Image))),await _(i.getByTestId(h.imageModal)).toBeVisible();let e=i.getByTestId(h.imageModalUrl).querySelector(`input`);await b.type(e,`https://example.com/a.png`),await b.click(i.getByTestId(h.imageModalAdd)),await x(()=>_(i.queryByTestId(h.imageModal)).toBeNull())}),await n(`Clear empties the editor and notifies onChange`,async()=>{await b.click(r.getByTestId(h.editorClear)),await x(()=>_(e.onChange).toHaveBeenCalled()),await _(r.queryByTestId(h.editorClear)).toBeNull()})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const root = canvas.getByTestId(TEST_IDS.editor);
    await step('default (preview off): raw textarea editable, toolbar active', async () => {
      await expect(canvas.getByTestId(TEST_IDS.editorHeader)).toBeVisible();
      await expect(canvas.getByTestId(TEST_IDS.editorPreviewToggle)).toBeVisible();
      await expect(canvas.getByTestId(TEST_IDS.editorLabel)).toBeVisible();
      // Очистка — overlay, видна при наличии значения.
      await expect(canvas.getByTestId(TEST_IDS.editorClear)).toBeVisible();
      await expect(canvas.getByTestId(TEST_IDS.toolbar)).toBeVisible();
      await expect(canvas.getByTestId(TEST_IDS.editorRawInput)).toBeVisible();
      await expect(canvas.getByTestId(toolbarButtonTestId(TOOLBAR_ITEM.Bold))).toBeEnabled();
    });
    await step('raw mode: Ctrl+B hotkey wraps the selection with ** (toolbar hotkeys work in raw)', async () => {
      const textarea = canvas.getByTestId(TEST_IDS.editorRawInput) as HTMLTextAreaElement;
      textarea.focus();
      // SAMPLE = '# Hello\\n\\nSome paragraph.' — выделяем слово «Hello» (индексы 2..7).
      textarea.setSelectionRange(2, 7);
      // Хоткей, а не клик: в raw-режиме keymap TipTap не работает (textarea), биндинг вешает
      // сам тулбар. fireEvent (а не userEvent) — детерминированный keydown с модификатором.
      fireEvent.keyDown(textarea, {
        key: 'b',
        code: 'KeyB',
        ctrlKey: true
      });
      await waitFor(() => expect((canvas.getByTestId(TEST_IDS.editorRawInput) as HTMLTextAreaElement).value).toContain('**Hello**'));
    });
    await step('raw mode: Link inserts raw markdown \`[..](..)\` without opening the modal', async () => {
      const textarea = canvas.getByTestId(TEST_IDS.editorRawInput) as HTMLTextAreaElement;
      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
      await userEvent.click(canvas.getByTestId(toolbarButtonTestId(TOOLBAR_ITEM.Link)));
      // Модалка не открывается; в textarea появляется markdown-шаблон ссылки.
      await expect(body.queryByTestId(TEST_IDS.linkModal)).toBeNull();
      await waitFor(() => expect((canvas.getByTestId(TEST_IDS.editorRawInput) as HTMLTextAreaElement).value).toMatch(/\\]\\(/));
    });
    await step('Preview toggle shows editable WYSIWYG with active toolbar', async () => {
      const native = canvas.getByTestId(\`\${TEST_IDS.editorPreviewToggle}-native-input\`);
      await userEvent.click(native);
      expect(args.onPreviewChange).toHaveBeenCalledWith(true);
      await expect(root).toHaveAttribute('data-preview', 'true');
      // preview=true: форматированный WYSIWYG, тулбар активен.
      await expect(canvas.getByTestId(TEST_IDS.editorContent)).toBeVisible();
      await expect(canvas.getByTestId(toolbarButtonTestId(TOOLBAR_ITEM.Bold))).toBeEnabled();
    });

    // contenteditable от ProseMirror не имеет (и не может иметь) data-test-id — фокусируем напрямую.
    const editable = canvas.getByTestId(TEST_IDS.editorContent).querySelector('.ProseMirror') as HTMLElement;
    await step('Bold toggles active state on the selected text', async () => {
      editable.focus();
      await userEvent.keyboard('{Control>}a{/Control}');
      const bold = canvas.getByTestId(toolbarButtonTestId(TOOLBAR_ITEM.Bold));
      await userEvent.click(bold);
      await waitFor(() => expect(bold).toHaveAttribute('data-checked', 'true'));
      await userEvent.click(bold);
      await waitFor(() => expect(bold).not.toHaveAttribute('data-checked'));
    });
    await step('Heading dropdown opens and applies H2', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.toolbarHeading));
      await expect(body.getByTestId(TEST_IDS.headingDropdown)).toBeVisible();
      await userEvent.click(body.getByTestId(headingOptionTestId(2)));
      await expect(body.queryByTestId(TEST_IDS.headingDropdown)).toBeNull();
    });
    await step('Table picker opens and inserts a 2×3 table', async () => {
      await userEvent.click(canvas.getByTestId(toolbarButtonTestId(TOOLBAR_ITEM.Table)));
      await expect(body.getByTestId(TEST_IDS.tableGridPicker)).toBeVisible();
      await userEvent.click(body.getByTestId(tableCellTestId(2, 3)));
      await waitFor(() => expect(editable.querySelector('table')).toBeTruthy());
    });
    await step('Customize table opens the modal and Add inserts a table', async () => {
      await userEvent.click(canvas.getByTestId(toolbarButtonTestId(TOOLBAR_ITEM.Table)));
      await userEvent.click(body.getByTestId(TEST_IDS.tableCustomize));
      await expect(body.getByTestId(TEST_IDS.customizeModal)).toBeVisible();
      await userEvent.click(body.getByTestId(TEST_IDS.customizeAdd));
      await waitFor(() => expect(body.queryByTestId(TEST_IDS.customizeModal)).toBeNull());
      await waitFor(() => expect(editable.querySelector('table')).toBeTruthy());
    });
    await step('Link modal opens, fills URL and closes on Add', async () => {
      await userEvent.click(canvas.getByTestId(toolbarButtonTestId(TOOLBAR_ITEM.Link)));
      await expect(body.getByTestId(TEST_IDS.linkModal)).toBeVisible();
      const input = body.getByTestId(TEST_IDS.linkModalUrl).querySelector('input') as HTMLInputElement;
      await userEvent.type(input, 'https://example.com');
      await userEvent.click(body.getByTestId(TEST_IDS.linkModalAdd));
      await waitFor(() => expect(body.queryByTestId(TEST_IDS.linkModal)).toBeNull());
    });
    await step('Image modal opens, fills URL and closes on Add', async () => {
      await userEvent.click(canvas.getByTestId(toolbarButtonTestId(TOOLBAR_ITEM.Image)));
      await expect(body.getByTestId(TEST_IDS.imageModal)).toBeVisible();
      const input = body.getByTestId(TEST_IDS.imageModalUrl).querySelector('input') as HTMLInputElement;
      await userEvent.type(input, 'https://example.com/a.png');
      await userEvent.click(body.getByTestId(TEST_IDS.imageModalAdd));
      await waitFor(() => expect(body.queryByTestId(TEST_IDS.imageModal)).toBeNull());
    });
    await step('Clear empties the editor and notifies onChange', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.editorClear));
      await waitFor(() => expect(args.onChange).toHaveBeenCalled());
      await expect(canvas.queryByTestId(TEST_IDS.editorClear)).toBeNull();
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`InteractionTest`]}))();export{w as InteractionTest,T as __namedExportsOrder,C as default};
//# sourceMappingURL=MarkdownEditor.InteractionTest.stories-CL7kpXFM.js.map