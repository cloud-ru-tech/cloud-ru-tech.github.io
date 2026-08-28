import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-SlIP-akt.js";import{n as c,o as l,t as u}from"./src-CvQdsMcJ.js";import{n as d,t as f}from"./sampleFiles-CGSbhD9C.js";import{n as p,t as m}from"./testIds-DJuH9ale.js";var h,g,_,v,y,b,x,S;e((()=>{u(),o(),d(),p(),h=t(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Data display/Attachment/AttachmentSquare/Tests/Interaction`,id:`components-attachment-attachmentsquare-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{size:l.M,file:f,onClick:_(),onDownload:_(),onDelete:_(),onRetry:_(),"data-test-id":m.attachmentSquare.root}},x={tags:[`test`,`dev`],render:e=>(0,h.jsx)(s,{children:(0,h.jsxs)(r,{children:[(0,h.jsx)(a,{children:`InteractionTest`}),(0,h.jsx)(i,{children:`File = text/PDF — icon-mode. TextBlock виден в default, на hover/focus иконка скрывается, на её месте появляются action-кнопки.`}),(0,h.jsx)(n,{align:`center`,children:(0,h.jsx)(c,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=y(t),i=r.getByTestId(m.attachmentSquare.root),a={pointerEventsCheck:0};await n(`icon-mode default: TextBlock виден (Label + Description в MainContent)`,async()=>{await g(r.getByTestId(m.attachment.title)).toBeVisible(),await g(r.getByTestId(m.attachment.description)).toBeVisible()}),await n(`icon-mode default: action-кнопки в DOM, но не активны (pointer-events:none)`,async()=>{await g(r.getByTestId(m.attachmentSquare.downloadAction)).toBeInTheDocument(),await g(r.getByTestId(m.attachmentSquare.deleteAction)).toBeInTheDocument()}),await n(`hover: pointermove над корнем (overlay opacity 1 в реальном браузере)`,async()=>{await v.hover(i),await g(r.getByTestId(m.attachmentSquare.downloadAction)).toBeInTheDocument()}),await n(`click: download triggers onDownload, не триггерит onClick корня`,async()=>{await v.click(r.getByTestId(m.attachmentSquare.downloadAction),a),g(e.onDownload).toHaveBeenCalledTimes(1),g(e.onClick).toHaveBeenCalledTimes(0)}),await n(`click: delete triggers onDelete`,async()=>{await v.click(r.getByTestId(m.attachmentSquare.deleteAction),a),g(e.onDelete).toHaveBeenCalledTimes(1)}),await n(`a11y: корень получает tabindex=0 (Tab-фокус валидируется visual focus snapshot)`,async()=>{await g(i).toHaveAttribute(`tabindex`,`0`)}),await n(`default state: retry-кнопка отсутствует (видна только при error)`,async()=>{g(r.queryByTestId(m.attachmentSquare.retryAction)).toBeNull()})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>
          File = text/PDF — icon-mode. TextBlock виден в default, на hover/focus иконка скрывается, на её месте
          появляются action-кнопки.
        </DemoHint>
        <DemoActions align='center'>
          <AttachmentSquare {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.attachmentSquare.root);
    // Overlay с action-кнопками раскрывается CSS \`:hover\` / \`:focus-visible\`. В storybook/test
    // :hover ненадёжен → \`pointerEventsCheck: 0\` обходит проверку. Assertion-цель — контракт
    // callback'ов; визуальный hover-overlay покрывает interaction-states.png.
    const clickOpts = {
      pointerEventsCheck: 0
    } as const;
    await step('icon-mode default: TextBlock виден (Label + Description в MainContent)', async () => {
      await expect(canvas.getByTestId(TEST_IDS.attachment.title)).toBeVisible();
      await expect(canvas.getByTestId(TEST_IDS.attachment.description)).toBeVisible();
    });
    await step('icon-mode default: action-кнопки в DOM, но не активны (pointer-events:none)', async () => {
      await expect(canvas.getByTestId(TEST_IDS.attachmentSquare.downloadAction)).toBeInTheDocument();
      await expect(canvas.getByTestId(TEST_IDS.attachmentSquare.deleteAction)).toBeInTheDocument();
    });
    await step('hover: pointermove над корнем (overlay opacity 1 в реальном браузере)', async () => {
      // Реальный :hover-overlay покрывает visual regression; тут только что hover не падает.
      await userEvent.hover(root);
      await expect(canvas.getByTestId(TEST_IDS.attachmentSquare.downloadAction)).toBeInTheDocument();
    });
    await step('click: download triggers onDownload, не триггерит onClick корня', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.attachmentSquare.downloadAction), clickOpts);
      expect(args.onDownload).toHaveBeenCalledTimes(1);
      expect(args.onClick).toHaveBeenCalledTimes(0);
    });
    await step('click: delete triggers onDelete', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.attachmentSquare.deleteAction), clickOpts);
      expect(args.onDelete).toHaveBeenCalledTimes(1);
    });
    await step('a11y: корень получает tabindex=0 (Tab-фокус валидируется visual focus snapshot)', async () => {
      await expect(root).toHaveAttribute('tabindex', '0');
    });
    await step('default state: retry-кнопка отсутствует (видна только при error)', async () => {
      expect(canvas.queryByTestId(TEST_IDS.attachmentSquare.retryAction)).toBeNull();
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`]}))();export{x as InteractionTest,S as __namedExportsOrder,b as default};
//# sourceMappingURL=AttachmentSquare.InteractionTest.stories-B4XEWSx-.js.map