import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-DQTa2Tvz.js";import{_ as u,t as d}from"./system-BeZ0nvWx.js";import{a as f,t as p}from"./src-BSWo-EXU.js";import{i as m,m as h,t as g}from"./src-DC0d2omq.js";import{n as _,t as v}from"./testIds-QuSLoAYC.js";import{n as y,t as b}from"./styles.module-DT2Kdm7p.js";function x(){let[e,t]=(0,S.useState)(null),[n,r]=(0,S.useState)(null);return(0,C.jsxs)(`div`,{className:y.wrapper,children:[(0,C.jsx)(m,{"data-test-id":v.fileUpload.root,name:`resume`,id:`resume`,required:!0,mode:h.Single,accept:[`.pdf`,`.doc`,`.docx`],maxSize:D,onFilesReject:e=>{let[t]=e;r(t?.reason===`maxSize`?`Файл больше 5 МБ`:`Недопустимый тип файла`)},onFilesUpload:e=>{e.length&&(r(null),t(e[0]))},children:(0,C.jsx)(f,{"data-test-id":v.fileUpload.trigger,type:`button`,label:`Прикрепить резюме`,icon:(0,C.jsx)(u,{})})}),e&&(0,C.jsx)(`div`,{className:y.filesList,"data-test-id":v.fileUpload.filesList,children:e.name}),n&&(0,C.jsx)(`div`,{className:y.error,"data-test-id":v.fileUpload.error,children:n})]})}var S,C,w,T,E,D,O,k;t((()=>{p(),d(),S=e(n(),1),c(),g(),_(),b(),C=r(),{expect:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Snack/Inputs & Forms/Dropzone/FileUpload/Examples/FormField`,id:`components-dropzone-fileupload-examples-formfield`,component:m,parameters:{layout:`fullscreen`}},D=5*1024*1024,O={tags:[`dev`],render:()=>(0,C.jsx)(l,{children:(0,C.jsxs)(a,{children:[(0,C.jsx)(s,{children:`FormField`}),(0,C.jsxs)(o,{children:[`Поле формы: нативные `,(0,C.jsx)(`code`,{children:`name`}),`/`,(0,C.jsx)(`code`,{children:`id`}),`/`,(0,C.jsx)(`code`,{children:`required`}),`, валидация `,(0,C.jsx)(`code`,{children:`accept`}),` +`,` `,(0,C.jsx)(`code`,{children:`maxSize`}),`, отказ через `,(0,C.jsx)(`code`,{children:`onFilesReject`}),`.`]}),(0,C.jsx)(i,{align:`center`,children:(0,C.jsx)(x,{})})]})}),play:async({canvasElement:e})=>{await w(T(e).getByTestId(v.fileUpload.trigger)).toBeVisible()}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>FormField</DemoTitle>
        <DemoHint>
          Поле формы: нативные <code>name</code>/<code>id</code>/<code>required</code>, валидация <code>accept</code> +{' '}
          <code>maxSize</code>, отказ через <code>onFilesReject</code>.
        </DemoHint>
        <DemoActions align='center'>
          <FormFieldDemo />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.fileUpload.trigger)).toBeVisible();
  }
}`,...O.parameters?.docs?.source}}},k=[`FormField`]}))();export{O as FormField,k as __namedExportsOrder,E as default};
//# sourceMappingURL=FileUpload.FormField.stories-DMTHemuQ.js.map