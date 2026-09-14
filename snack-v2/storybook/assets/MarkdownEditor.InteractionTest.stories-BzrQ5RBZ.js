import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-CSoRf47o.js";import{c,d as l,n as u,s as d,t as f,u as p}from"./src-C0jyJIFp.js";import{n as m,t as h}from"./testIds-6qUStIiS.js";function g(e,t){let n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let r=n.nextNode();r;r=n.nextNode()){let n=r.textContent?.indexOf(t)??-1;if(n>=0){e.focus(),document.getSelection()?.setBaseAndExtent(r,n,r,n+t.length),document.dispatchEvent(new Event(`selectionchange`));return}}throw Error(`Text "${t}" not found in editor`)}var _,v,y,b,x,S,C,w,T,E,D,O;e((()=>{f(),o(),m(),_=t(),{expect:v,fireEvent:y,fn:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w=`# Hello

Some paragraph.`,T=[d.Heading,d.Bold,d.Link,d.Table,d.Image],E={title:`Snack/Inputs & Forms/Markdown/MarkdownEditor/Tests/Interaction`,id:`components-markdown-markdowneditor-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{defaultValue:w,toolbar:T,onChange:b(),onPreviewChange:b(),"data-test-id":h.editor},render:e=>(0,_.jsx)(s,{children:(0,_.jsxs)(r,{width:`wide`,children:[(0,_.jsx)(a,{children:`InteractionTest`}),(0,_.jsx)(i,{children:`Тулбар (bold), heading-дропдаун, table-picker, clear и preview-тогл.`}),(0,_.jsx)(n,{align:`start`,children:(0,_.jsx)(u,{...e})})]})})},D={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=C(t),i=C(document.body),a=r.getByTestId(h.editor);await n(`default (preview off): raw textarea editable, toolbar active`,async()=>{await v(r.getByTestId(h.editorHeader)).toBeVisible(),await v(r.getByTestId(h.editorPreviewToggle)).toBeVisible(),await v(r.getByTestId(h.editorLabel)).toBeVisible(),await v(r.getByTestId(h.editorClear)).toBeVisible(),await v(r.getByTestId(h.toolbar)).toBeVisible(),await v(r.getByTestId(h.editorRawInput)).toBeVisible(),await v(r.getByTestId(l(d.Bold))).toBeEnabled()}),await n(`raw mode: Ctrl+B hotkey wraps the selection with ** (toolbar hotkeys work in raw)`,async()=>{let e=r.getByTestId(h.editorRawInput);e.focus(),e.setSelectionRange(2,7),y.keyDown(e,{key:`b`,code:`KeyB`,ctrlKey:!0}),await S(()=>v(r.getByTestId(h.editorRawInput).value).toContain(`**Hello**`))}),await n("raw mode: Link inserts raw markdown `[..](..)` without opening the modal",async()=>{let e=r.getByTestId(h.editorRawInput);e.focus(),e.setSelectionRange(e.value.length,e.value.length),await x.click(r.getByTestId(l(d.Link))),await v(i.queryByTestId(h.linkModal)).toBeNull(),await S(()=>v(r.getByTestId(h.editorRawInput).value).toMatch(/\]\(/))}),await n(`Preview toggle shows editable WYSIWYG with active toolbar`,async()=>{let t=r.getByTestId(`${h.editorPreviewToggle}-native-input`);await x.click(t),v(e.onPreviewChange).toHaveBeenCalledWith(!0),await v(a).toHaveAttribute(`data-preview`,`true`),await v(r.getByTestId(h.editorContent)).toBeVisible(),await v(r.getByTestId(l(d.Bold))).toBeEnabled()});let o=r.getByTestId(h.editorContent).querySelector(`.ProseMirror`);await n(`Bold toggles active state on the selected text`,async()=>{o.focus(),await x.keyboard(`{Control>}a{/Control}`);let e=r.getByTestId(l(d.Bold));await x.click(e),await S(()=>v(e).toHaveAttribute(`data-checked`,`true`)),await x.click(e),await S(()=>v(e).not.toHaveAttribute(`data-checked`))}),await n(`Link modal: editing an existing link updates its text and href independently`,async()=>{let e=r.getByTestId(l(d.Link));g(o,`paragraph`),await x.click(e);let t=i.getByTestId(h.linkModalUrl).querySelector(`input`);await x.type(t,`https://example.com`),await x.click(i.getByTestId(h.linkModalAdd)),await S(()=>v(o.querySelector(`a`)).toHaveTextContent(`paragraph`)),g(o,`paragraph`),await x.click(e);let n=i.getByTestId(h.linkModalTitle).querySelector(`input`);await v(n).toHaveValue(`paragraph`),await x.clear(n),await x.type(n,`docs`),await x.click(i.getByTestId(h.linkModalAdd)),await S(()=>v(i.queryByTestId(h.linkModal)).toBeNull()),await v(o.querySelector(`a`)).toHaveTextContent(/^docs$/),await v(o.querySelector(`a`)).toHaveAttribute(`href`,`https://example.com`),g(o,`docs`),await x.click(e);let a=i.getByTestId(h.linkModalUrl).querySelector(`input`);await v(a).toHaveValue(`https://example.com`),await x.clear(a),await x.type(a,`https://example.org`),await x.click(i.getByTestId(h.linkModalAdd)),await S(()=>v(i.queryByTestId(h.linkModal)).toBeNull()),await v(o.querySelector(`a[href="https://example.com"]`)).toBeNull(),await v(o.querySelector(`a[href="https://example.org"]`)).toHaveTextContent(/^docs$/)}),await n(`Heading dropdown opens and applies H2`,async()=>{await x.click(r.getByTestId(h.toolbarHeading)),await v(i.getByTestId(h.headingDropdown)).toBeVisible(),await x.click(i.getByTestId(c(2))),await v(i.queryByTestId(h.headingDropdown)).toBeNull()}),await n(`Table picker opens and inserts a 2×3 table`,async()=>{await x.click(r.getByTestId(l(d.Table))),await v(i.getByTestId(h.tableGridPicker)).toBeVisible(),await x.click(i.getByTestId(p(2,3))),await S(()=>v(o.querySelector(`table`)).toBeTruthy())}),await n(`Customize table opens the modal and Add inserts a table`,async()=>{await x.click(r.getByTestId(l(d.Table))),await x.click(i.getByTestId(h.tableCustomize)),await v(i.getByTestId(h.customizeModal)).toBeVisible(),await x.click(i.getByTestId(h.customizeAdd)),await S(()=>v(i.queryByTestId(h.customizeModal)).toBeNull()),await S(()=>v(o.querySelector(`table`)).toBeTruthy())}),await n(`Link modal opens, fills URL and closes on Add`,async()=>{await x.click(r.getByTestId(l(d.Link))),await v(i.getByTestId(h.linkModal)).toBeVisible();let e=i.getByTestId(h.linkModalUrl).querySelector(`input`);await x.type(e,`https://example.com`),await x.click(i.getByTestId(h.linkModalAdd)),await S(()=>v(i.queryByTestId(h.linkModal)).toBeNull())}),await n(`Image modal opens, fills URL and closes on Add`,async()=>{await x.click(r.getByTestId(l(d.Image))),await v(i.getByTestId(h.imageModal)).toBeVisible();let e=i.getByTestId(h.imageModalUrl).querySelector(`input`);await x.type(e,`https://example.com/a.png`),await x.click(i.getByTestId(h.imageModalAdd)),await S(()=>v(i.queryByTestId(h.imageModal)).toBeNull())}),await n(`Clear empties the editor and notifies onChange`,async()=>{await x.click(r.getByTestId(h.editorClear)),await S(()=>v(e.onChange).toHaveBeenCalled()),await v(r.queryByTestId(h.editorClear)).toBeNull()})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
    await step('Link modal: editing an existing link updates its text and href independently', async () => {
      const linkButton = canvas.getByTestId(toolbarButtonTestId(TOOLBAR_ITEM.Link));
      selectText(editable, 'paragraph');
      await userEvent.click(linkButton);
      const urlInput = body.getByTestId(TEST_IDS.linkModalUrl).querySelector('input') as HTMLInputElement;
      await userEvent.type(urlInput, 'https://example.com');
      await userEvent.click(body.getByTestId(TEST_IDS.linkModalAdd));
      await waitFor(() => expect(editable.querySelector('a')).toHaveTextContent('paragraph'));
      selectText(editable, 'paragraph');
      await userEvent.click(linkButton);
      const titleInput = body.getByTestId(TEST_IDS.linkModalTitle).querySelector('input') as HTMLInputElement;
      await expect(titleInput).toHaveValue('paragraph');
      await userEvent.clear(titleInput);
      await userEvent.type(titleInput, 'docs');
      await userEvent.click(body.getByTestId(TEST_IDS.linkModalAdd));
      await waitFor(() => expect(body.queryByTestId(TEST_IDS.linkModal)).toBeNull());
      await expect(editable.querySelector('a')).toHaveTextContent(/^docs$/);
      await expect(editable.querySelector('a')).toHaveAttribute('href', 'https://example.com');
      selectText(editable, 'docs');
      await userEvent.click(linkButton);
      const editUrlInput = body.getByTestId(TEST_IDS.linkModalUrl).querySelector('input') as HTMLInputElement;
      await expect(editUrlInput).toHaveValue('https://example.com');
      await userEvent.clear(editUrlInput);
      await userEvent.type(editUrlInput, 'https://example.org');
      await userEvent.click(body.getByTestId(TEST_IDS.linkModalAdd));
      await waitFor(() => expect(body.queryByTestId(TEST_IDS.linkModal)).toBeNull());

      // В документе есть ещё ссылка из raw-шага — адресуем правленую по href.
      await expect(editable.querySelector('a[href="https://example.com"]')).toBeNull();
      await expect(editable.querySelector('a[href="https://example.org"]')).toHaveTextContent(/^docs$/);
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
}`,...D.parameters?.docs?.source}}},O=[`InteractionTest`]}))();export{D as InteractionTest,O as __namedExportsOrder,E as default};
//# sourceMappingURL=MarkdownEditor.InteractionTest.stories-BzrQ5RBZ.js.map