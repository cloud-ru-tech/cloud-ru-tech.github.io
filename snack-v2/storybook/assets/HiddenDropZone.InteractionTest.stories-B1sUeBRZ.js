import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Du0zU9lI.js";import{m as c,n as l,t as u}from"./src-DgKz5k1f.js";import{n as d,t as f}from"./testIds-DhM8SRQ1.js";import{n as p,t as m}from"./styles.module-DeH9bIw9.js";function h(e,t=`text/plain`,n=`hi`){return new File([n],e,{type:t})}function g(e){let t=new DataTransfer;for(let n of e)t.items.add(n);return t}function _(e,t,n){let r=g(n),i=new DragEvent(t,{bubbles:!0,cancelable:!0,dataTransfer:r});i.dataTransfer||Object.defineProperty(i,"dataTransfer",{value:r}),e.dispatchEvent(i)}var v,y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{o(),u(),d(),m(),v=t(),{expect:y,fn:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C=f.hiddenDropZone.root,w=`${f.hiddenDropZone.root}-disabled`,T=f.hiddenDropZone.form,E=`${f.hiddenDropZone.form}-disabled`,D=b(),O=b(),k={title:`Snack/Inputs & Forms/Dropzone/HiddenDropZone/Tests/Interaction`,id:`components-dropzone-hiddendropzone-tests-interaction`,parameters:{layout:`fullscreen`,controls:{disable:!0}}},A={tags:[`test`,`dev`],render:()=>(0,v.jsx)(s,{children:(0,v.jsxs)(r,{children:[(0,v.jsx)(a,{children:`HiddenDropZone`}),(0,v.jsx)(i,{children:`Сценарии: enabled (dragover показывает overlay, drop вызывает onFilesUpload) и disabled (события игнорируются).`}),(0,v.jsxs)(n,{align:`center`,children:[(0,v.jsx)(l,{"data-test-id":C,mode:c.Multiple,onFilesUpload:D,content:(0,v.jsx)(`div`,{"data-test-id":f.hiddenDropZone.overlayContent,children:`Drop files`}),children:(0,v.jsx)(`div`,{"data-test-id":T,className:p.formArea,children:`Form area (enabled)`})}),(0,v.jsx)(l,{"data-test-id":w,disabled:!0,onFilesUpload:O,content:(0,v.jsx)(`div`,{"data-test-id":`${f.hiddenDropZone.overlayContent}-disabled`,children:`Drop files`}),children:(0,v.jsx)(`div`,{"data-test-id":E,className:p.formArea,children:`Form area (disabled)`})})]})]})}),play:async({canvasElement:e,step:t})=>{D.mockClear(),O.mockClear();let n=S(e),r=n.getByTestId(C),i=n.getByTestId(w);await t(`enabled: drag over wrapper reveals overlay with content`,async()=>{_(r,`dragover`,[h(`a.txt`)]),await x(()=>y(n.getByTestId(f.hiddenDropZone.overlayContent)).toBeVisible())}),await t(`enabled: drop on overlay calls onFilesUpload, overlay disappears`,async()=>{_(n.getByTestId(f.hiddenDropZone.overlayContent),`drop`,[h(`a.txt`),h(`b.txt`)]),await x(()=>y(D).toHaveBeenCalledWith(y.arrayContaining([y.objectContaining({name:`a.txt`}),y.objectContaining({name:`b.txt`})]))),await x(()=>y(n.queryByTestId(f.hiddenDropZone.overlayContent)).toBeNull())}),await t(`disabled: dragover does not reveal overlay`,async()=>{_(i,`dragover`,[h(`a.txt`)]),await new Promise(e=>setTimeout(e,50)),y(n.queryByTestId(`${f.hiddenDropZone.overlayContent}-disabled`)).toBeNull()}),await t(`disabled: drop is ignored`,async()=>{_(i,`drop`,[h(`a.txt`)]),await new Promise(e=>setTimeout(e,50)),y(O).not.toHaveBeenCalled()})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>HiddenDropZone</DemoTitle>
        <DemoHint>
          {'Сценарии: enabled (dragover показывает overlay, drop вызывает onFilesUpload) и disabled (события игнорируются).'}
        </DemoHint>
        <DemoActions align='center'>
          <HiddenDropZone data-test-id={ENABLED_ROOT} mode={UPLOAD_MODE.Multiple} onFilesUpload={onFilesUploadEnabled} content={<div data-test-id={TEST_IDS.hiddenDropZone.overlayContent}>Drop files</div>}>
            <div data-test-id={ENABLED_FORM} className={styles.formArea}>
              Form area (enabled)
            </div>
          </HiddenDropZone>
          <HiddenDropZone data-test-id={DISABLED_ROOT} disabled onFilesUpload={onFilesUploadDisabled} content={<div data-test-id={\`\${TEST_IDS.hiddenDropZone.overlayContent}-disabled\`}>Drop files</div>}>
            <div data-test-id={DISABLED_FORM} className={styles.formArea}>
              Form area (disabled)
            </div>
          </HiddenDropZone>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    onFilesUploadEnabled.mockClear();
    onFilesUploadDisabled.mockClear();
    const canvas = within(canvasElement);
    const enabledRoot = canvas.getByTestId(ENABLED_ROOT);
    const disabledRoot = canvas.getByTestId(DISABLED_ROOT);
    await step('enabled: drag over wrapper reveals overlay with content', async () => {
      fireDragEvent(enabledRoot, 'dragover', [makeFile('a.txt')]);
      await waitFor(() => expect(canvas.getByTestId(TEST_IDS.hiddenDropZone.overlayContent)).toBeVisible());
    });
    await step('enabled: drop on overlay calls onFilesUpload, overlay disappears', async () => {
      const overlayContent = canvas.getByTestId(TEST_IDS.hiddenDropZone.overlayContent);
      // Drop event bubbles up — dispatch on overlay content directly.
      fireDragEvent(overlayContent, 'drop', [makeFile('a.txt'), makeFile('b.txt')]);
      await waitFor(() => expect(onFilesUploadEnabled).toHaveBeenCalledWith(expect.arrayContaining([expect.objectContaining({
        name: 'a.txt'
      }), expect.objectContaining({
        name: 'b.txt'
      })])));
      await waitFor(() => expect(canvas.queryByTestId(TEST_IDS.hiddenDropZone.overlayContent)).toBeNull());
    });
    await step('disabled: dragover does not reveal overlay', async () => {
      fireDragEvent(disabledRoot, 'dragover', [makeFile('a.txt')]);
      await new Promise(r => setTimeout(r, 50));
      expect(canvas.queryByTestId(\`\${TEST_IDS.hiddenDropZone.overlayContent}-disabled\`)).toBeNull();
    });
    await step('disabled: drop is ignored', async () => {
      fireDragEvent(disabledRoot, 'drop', [makeFile('a.txt')]);
      await new Promise(r => setTimeout(r, 50));
      expect(onFilesUploadDisabled).not.toHaveBeenCalled();
    });
  }
}`,...A.parameters?.docs?.source}}},j=[`InteractionTest`]}))();export{A as InteractionTest,j as __namedExportsOrder,k as default};
//# sourceMappingURL=HiddenDropZone.InteractionTest.stories-B1sUeBRZ.js.map