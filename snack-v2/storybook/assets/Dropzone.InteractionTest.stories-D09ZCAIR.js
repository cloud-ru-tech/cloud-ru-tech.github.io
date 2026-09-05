import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Coxm4alt.js";import{m as c,o as l,t as u}from"./src-umZmRgAJ.js";import{n as d,t as f}from"./testIds-CRJuLYkc.js";import{n as p,t as m}from"./SlotContent-Bk_ibJ6s.js";function h(e,t=`text/plain`,n=`hello`){return new File([n],e,{type:t})}function g(e){let t=new DataTransfer;for(let n of e)t.items.add(n);return t}function _(e,t,n){let r=g(n),i=new DragEvent(t,{bubbles:!0,cancelable:!0,dataTransfer:r});i.dataTransfer||Object.defineProperty(i,"dataTransfer",{value:r}),e.dispatchEvent(i)}var v,y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{o(),u(),d(),p(),v=t(),{expect:y,fn:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Snack/Inputs & Forms/Dropzone/Dropzone/Tests/Interaction`,id:`components-dropzone-dropzone-tests-interaction`,parameters:{layout:`fullscreen`,controls:{disable:!0}}},T=`${f.dropzone.root}-single`,E=`${f.dropzone.root}-disabled`,D=b(),O=b(),k=b(),A={tags:[`test`,`dev`],render:()=>(0,v.jsx)(s,{children:(0,v.jsxs)(r,{children:[(0,v.jsx)(a,{children:`Dropzone`}),(0,v.jsx)(i,{children:`Сценарии: multiple drop / single mode (берётся 1 файл) / disabled (события игнорируются).`}),(0,v.jsxs)(n,{align:`center`,children:[(0,v.jsx)(l,{"data-test-id":f.dropzone.root,mode:c.Multiple,onFilesUpload:D,children:(0,v.jsx)(m,{})}),(0,v.jsx)(l,{"data-test-id":T,mode:c.Single,onFilesUpload:O,children:(0,v.jsx)(m,{})}),(0,v.jsx)(l,{"data-test-id":E,disabled:!0,onFilesUpload:k,children:(0,v.jsx)(m,{})})]})]})}),play:async({canvasElement:e,step:t})=>{D.mockClear(),O.mockClear(),k.mockClear();let n=C(e),r=n.getByTestId(f.dropzone.root),i=n.getByTestId(T),a=n.getByTestId(E);await t(`multiple: drag over sets data-over=true`,async()=>{_(r,`dragover`,[h(`a.txt`)]),await S(()=>y(r).toHaveAttribute(`data-over`,`true`))}),await t(`multiple: drag leave clears data-over`,async()=>{_(r,`dragleave`,[]),await S(()=>y(r).not.toHaveAttribute(`data-over`))}),await t(`multiple: drop multiple files calls onFilesUpload with all files`,async()=>{let e=[h(`a.txt`),h(`b.txt`)];_(r,`drop`,e),await S(()=>y(D).toHaveBeenCalledWith(y.arrayContaining([y.objectContaining({name:`a.txt`}),y.objectContaining({name:`b.txt`})])))}),await t(`single mode: drop multiple keeps only first file`,async()=>{let e=[h(`first.txt`),h(`second.txt`),h(`third.txt`)];_(i,`drop`,e),await S(()=>y(O).toHaveBeenCalledWith(y.arrayContaining([y.objectContaining({name:`first.txt`})]))),y(O.mock.calls[0][0]).toHaveLength(1)}),await t(`disabled: data-disabled is set, aria-disabled engaged`,async()=>{await y(a).toHaveAttribute(`data-disabled`,`true`),await y(a).toBeDisabled()}),await t(`disabled: dragover does not flip data-over`,async()=>{_(a,`dragover`,[h(`a.txt`)]),await new Promise(e=>setTimeout(e,50)),y(a).not.toHaveAttribute(`data-over`)}),await t(`disabled: drop is ignored, onFilesUpload not called`,async()=>{_(a,`drop`,[h(`a.txt`)]),await new Promise(e=>setTimeout(e,50)),y(k).not.toHaveBeenCalled()}),await t(`disabled: click does not open file picker`,async()=>{await x.click(a,{pointerEventsCheck:0}),y(k).not.toHaveBeenCalled()})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>Dropzone</DemoTitle>
        <DemoHint>
          {'Сценарии: multiple drop / single mode (берётся 1 файл) / disabled (события игнорируются).'}
        </DemoHint>
        <DemoActions align='center'>
          <Dropzone data-test-id={TEST_IDS.dropzone.root} mode={UPLOAD_MODE.Multiple} onFilesUpload={onFilesUploadMultiple}>
            <SlotContent />
          </Dropzone>
          <Dropzone data-test-id={SINGLE_TEST_ID} mode={UPLOAD_MODE.Single} onFilesUpload={onFilesUploadSingle}>
            <SlotContent />
          </Dropzone>
          <Dropzone data-test-id={DISABLED_TEST_ID} disabled onFilesUpload={onFilesUploadDisabled}>
            <SlotContent />
          </Dropzone>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    onFilesUploadMultiple.mockClear();
    onFilesUploadSingle.mockClear();
    onFilesUploadDisabled.mockClear();
    const canvas = within(canvasElement);
    const dzMultiple = canvas.getByTestId(TEST_IDS.dropzone.root);
    const dzSingle = canvas.getByTestId(SINGLE_TEST_ID);
    const dzDisabled = canvas.getByTestId(DISABLED_TEST_ID);
    await step('multiple: drag over sets data-over=true', async () => {
      fireDragEvent(dzMultiple, 'dragover', [makeFile('a.txt')]);
      await waitFor(() => expect(dzMultiple).toHaveAttribute('data-over', 'true'));
    });
    await step('multiple: drag leave clears data-over', async () => {
      fireDragEvent(dzMultiple, 'dragleave', []);
      await waitFor(() => expect(dzMultiple).not.toHaveAttribute('data-over'));
    });
    await step('multiple: drop multiple files calls onFilesUpload with all files', async () => {
      const files = [makeFile('a.txt'), makeFile('b.txt')];
      fireDragEvent(dzMultiple, 'drop', files);
      await waitFor(() => expect(onFilesUploadMultiple).toHaveBeenCalledWith(expect.arrayContaining([expect.objectContaining({
        name: 'a.txt'
      }), expect.objectContaining({
        name: 'b.txt'
      })])));
    });
    await step('single mode: drop multiple keeps only first file', async () => {
      const files = [makeFile('first.txt'), makeFile('second.txt'), makeFile('third.txt')];
      fireDragEvent(dzSingle, 'drop', files);
      await waitFor(() => expect(onFilesUploadSingle).toHaveBeenCalledWith(expect.arrayContaining([expect.objectContaining({
        name: 'first.txt'
      })])));
      expect(onFilesUploadSingle.mock.calls[0]![0]).toHaveLength(1);
    });
    await step('disabled: data-disabled is set, aria-disabled engaged', async () => {
      await expect(dzDisabled).toHaveAttribute('data-disabled', 'true');
      await expect(dzDisabled).toBeDisabled();
    });
    await step('disabled: dragover does not flip data-over', async () => {
      fireDragEvent(dzDisabled, 'dragover', [makeFile('a.txt')]);
      await new Promise(r => setTimeout(r, 50));
      expect(dzDisabled).not.toHaveAttribute('data-over');
    });
    await step('disabled: drop is ignored, onFilesUpload not called', async () => {
      fireDragEvent(dzDisabled, 'drop', [makeFile('a.txt')]);
      await new Promise(r => setTimeout(r, 50));
      expect(onFilesUploadDisabled).not.toHaveBeenCalled();
    });
    await step('disabled: click does not open file picker', async () => {
      await userEvent.click(dzDisabled, {
        pointerEventsCheck: 0
      });
      expect(onFilesUploadDisabled).not.toHaveBeenCalled();
    });
  }
}`,...A.parameters?.docs?.source}}},j=[`InteractionTest`]}))();export{A as InteractionTest,j as __namedExportsOrder,w as default};
//# sourceMappingURL=Dropzone.InteractionTest.stories-D09ZCAIR.js.map