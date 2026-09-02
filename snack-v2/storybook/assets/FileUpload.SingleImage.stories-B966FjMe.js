import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-DQTa2Tvz.js";import{a as c,t as l}from"./src-BSWo-EXU.js";import{i as u,m as d,t as f}from"./src-DC0d2omq.js";import{n as p,t as m}from"./testIds-QuSLoAYC.js";import{n as h,t as g}from"./styles.module-DT2Kdm7p.js";var _,v,y,b,x,S;e((()=>{l(),o(),f(),p(),g(),_=t(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Inputs & Forms/Dropzone/FileUpload/Examples/SingleImage`,id:`components-dropzone-fileupload-examples-singleimage`,component:u,parameters:{layout:`fullscreen`}},x={tags:[`dev`],render:()=>(0,_.jsx)(s,{children:(0,_.jsxs)(r,{children:[(0,_.jsx)(a,{children:`SingleImage`}),(0,_.jsx)(i,{children:`Загрузка одного изображения через FileUpload с accept=image/*.`}),(0,_.jsx)(n,{align:`center`,children:(0,_.jsx)(`div`,{className:h.wrapper,children:(0,_.jsx)(u,{"data-test-id":m.fileUpload.root,mode:d.Single,accept:`image/*`,onFilesUpload:()=>{},children:(0,_.jsx)(c,{"data-test-id":m.fileUpload.trigger,type:`button`,label:`Выбрать изображение`})})})})]})}),play:async({canvasElement:e})=>{await v(y(e).getByTestId(m.fileUpload.trigger)).toBeVisible()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>SingleImage</DemoTitle>
        <DemoHint>{'Загрузка одного изображения через FileUpload с accept=image/*.'}</DemoHint>
        <DemoActions align='center'>
          <div className={styles.wrapper}>
            <FileUpload data-test-id={TEST_IDS.fileUpload.root} mode={UPLOAD_MODE.Single} accept='image/*' onFilesUpload={() => {}}>
              <Button data-test-id={TEST_IDS.fileUpload.trigger} type='button' label='Выбрать изображение' />
            </FileUpload>
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.fileUpload.trigger)).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}},S=[`SingleImage`]}))();export{x as SingleImage,S as __namedExportsOrder,b as default};
//# sourceMappingURL=FileUpload.SingleImage.stories-B966FjMe.js.map