import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-DMWsC78w.js";import{a as c,t as l}from"./src-CayYsASu.js";import{i as u,m as d,t as f}from"./src-Bm6LuGYI.js";import{n as p,t as m}from"./testIds-wV2G6yBY.js";function h(e,t){let n=new DataTransfer;for(let e of t)n.items.add(e);Object.defineProperty(e,"files",{configurable:!0,value:n.files}),e.dispatchEvent(new Event(`change`,{bubbles:!0}))}var g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{l(),o(),f(),p(),g=t(),{expect:_,fn:v,userEvent:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Inputs & Forms/Dropzone/FileUpload/Tests/Interaction`,id:`components-dropzone-fileupload-tests-interaction`,parameters:{layout:`fullscreen`,controls:{disable:!0}}},S=m.fileUpload.trigger,C=`${m.fileUpload.trigger}-single`,w=v(),T=v(),E={tags:[`test`,`dev`],render:()=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{children:[(0,g.jsx)(a,{children:`FileUpload InteractionTest`}),(0,g.jsx)(i,{children:`Multiple: триггер кликает по hidden input + change event вызывает onFilesUpload со всеми файлами. Single: hidden input без multiple=true.`}),(0,g.jsxs)(n,{align:`center`,children:[(0,g.jsx)(u,{mode:d.Multiple,onFilesUpload:w,children:(0,g.jsx)(c,{"data-test-id":S,type:`button`,label:`Upload (multiple)`})}),(0,g.jsx)(u,{mode:d.Single,onFilesUpload:T,children:(0,g.jsx)(c,{"data-test-id":C,type:`button`,label:`Upload (single)`})})]})]})}),play:async({canvasElement:e,step:t})=>{w.mockClear(),T.mockClear();let n=b(e),r=n.getByTestId(S),i=n.getByTestId(C),[a,o]=n.getAllByTestId(m.fileUpload.nativeInput);await t(`multiple: hidden input rendered with multiple=true`,async()=>{_(a).toBeInstanceOf(HTMLInputElement),_(a.type).toBe(`file`),_(a.multiple).toBe(!0)}),await t(`multiple: click on trigger calls click() on hidden file input`,async()=>{let e=v(),t=a.click.bind(a);a.click=(()=>{e()});try{await y.click(r),_(e).toHaveBeenCalledTimes(1)}finally{a.click=t}}),await t(`multiple: file selection change event calls onFilesUpload with all files`,async()=>{let e=[new File([`1`],`a.txt`),new File([`2`],`b.txt`)];h(a,e),_(w).toHaveBeenCalledWith(_.arrayContaining([_.objectContaining({name:`a.txt`}),_.objectContaining({name:`b.txt`})]))}),await t(`single mode: hidden input has multiple=false`,async()=>{_(o.multiple).toBe(!1);let e=v(),t=o.click.bind(o);o.click=(()=>{e()});try{await y.click(i),_(e).toHaveBeenCalledTimes(1)}finally{o.click=t}})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>FileUpload InteractionTest</DemoTitle>
        <DemoHint>
          {'Multiple: триггер кликает по hidden input + change event вызывает onFilesUpload со всеми файлами. Single: hidden input без multiple=true.'}
        </DemoHint>
        <DemoActions align='center'>
          <FileUpload mode={UPLOAD_MODE.Multiple} onFilesUpload={onFilesUploadMultiple}>
            <Button data-test-id={MULTIPLE_TRIGGER} type='button' label='Upload (multiple)' />
          </FileUpload>
          <FileUpload mode={UPLOAD_MODE.Single} onFilesUpload={onFilesUploadSingle}>
            <Button data-test-id={SINGLE_TRIGGER} type='button' label='Upload (single)' />
          </FileUpload>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    onFilesUploadMultiple.mockClear();
    onFilesUploadSingle.mockClear();
    const canvas = within(canvasElement);
    const triggerMultiple = canvas.getByTestId(MULTIPLE_TRIGGER);
    const triggerSingle = canvas.getByTestId(SINGLE_TRIGGER);
    // Каждый FileUpload рендерит свой native input; находим оба через test-id публичного слота.
    const inputs = canvas.getAllByTestId(TEST_IDS.fileUpload.nativeInput) as HTMLInputElement[];
    const [inputMultiple, inputSingle] = inputs;
    await step('multiple: hidden input rendered with multiple=true', async () => {
      expect(inputMultiple).toBeInstanceOf(HTMLInputElement);
      expect(inputMultiple.type).toBe('file');
      expect(inputMultiple.multiple).toBe(true);
    });
    await step('multiple: click on trigger calls click() on hidden file input', async () => {
      const clickSpy = fn();
      const origClick = inputMultiple.click.bind(inputMultiple);
      inputMultiple.click = (() => {
        clickSpy();
      }) as typeof inputMultiple.click;
      try {
        await userEvent.click(triggerMultiple);
        expect(clickSpy).toHaveBeenCalledTimes(1);
      } finally {
        inputMultiple.click = origClick;
      }
    });
    await step('multiple: file selection change event calls onFilesUpload with all files', async () => {
      const files = [new File(['1'], 'a.txt'), new File(['2'], 'b.txt')];
      fireChangeWithFiles(inputMultiple, files);
      expect(onFilesUploadMultiple).toHaveBeenCalledWith(expect.arrayContaining([expect.objectContaining({
        name: 'a.txt'
      }), expect.objectContaining({
        name: 'b.txt'
      })]));
    });
    await step('single mode: hidden input has multiple=false', async () => {
      expect(inputSingle.multiple).toBe(false);
      // Triggering click on single trigger should also call native click — sanity check via spy.
      const clickSpy = fn();
      const origClick = inputSingle.click.bind(inputSingle);
      inputSingle.click = (() => {
        clickSpy();
      }) as typeof inputSingle.click;
      try {
        await userEvent.click(triggerSingle);
        expect(clickSpy).toHaveBeenCalledTimes(1);
      } finally {
        inputSingle.click = origClick;
      }
    });
  }
}`,...E.parameters?.docs?.source}}},D=[`InteractionTest`]}))();export{E as InteractionTest,D as __namedExportsOrder,x as default};
//# sourceMappingURL=FileUpload.InteractionTest.stories-BHq-GeRK.js.map