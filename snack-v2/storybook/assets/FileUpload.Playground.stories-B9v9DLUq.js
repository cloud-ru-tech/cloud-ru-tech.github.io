import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-BdtyM0cx.js";import{_ as u,t as d}from"./system-DYmc6UG6.js";import{a as f,t as p}from"./src-Bqc-Xdov.js";import{i as m,m as h,t as g}from"./src-DqaoTZZx.js";import{n as _,t as v}from"./testIds-6Y-FffkP.js";import{n as y,t as b}from"./styles.module-DT2Kdm7p.js";function x(e){let[t,n]=(0,S.useState)([]);return(0,C.jsxs)(`div`,{className:y.wrapper,children:[(0,C.jsx)(m,{...e,onFilesUpload:n,children:(0,C.jsx)(f,{"data-test-id":v.fileUpload.trigger,type:`button`,label:`Загрузить`,icon:(0,C.jsx)(u,{})})}),t.length>0&&(0,C.jsxs)(`div`,{className:y.filesList,"data-test-id":v.fileUpload.filesList,children:[`Загружено: `,t.map(e=>e.name).join(`, `)]})]})}var S,C,w,T,E,D,O;t((()=>{p(),d(),S=e(n(),1),c(),g(),_(),b(),C=r(),{expect:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Snack/Inputs & Forms/Dropzone/FileUpload`,id:`components-dropzone-fileupload`,component:m,parameters:{layout:`fullscreen`},args:{mode:h.Multiple,disabled:!1,"data-test-id":v.fileUpload.root},argTypes:{mode:{control:`select`,options:Object.values(h)},accept:{control:`text`},maxSize:{control:`number`},disabled:{control:`boolean`},onFilesReject:{table:{disable:!0}},onChange:{table:{disable:!0}},innerRef:{table:{disable:!0}},"data-test-id":{control:`text`,table:{category:`HTML Attributes`}}}},D={tags:[`dev`,`test`],render:e=>(0,C.jsx)(l,{children:(0,C.jsxs)(a,{children:[(0,C.jsx)(s,{children:`Playground`}),(0,C.jsx)(o,{children:`Кнопка-триггер загрузки файлов.`}),(0,C.jsx)(i,{align:`center`,children:(0,C.jsx)(x,{...e})})]})}),play:async({canvasElement:e})=>{await w(T(e).getByTestId(v.fileUpload.trigger)).toBeVisible()}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Кнопка-триггер загрузки файлов.</DemoHint>
        <DemoActions align='center'>
          <FileUploadWithFiles {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.fileUpload.trigger)).toBeVisible();
  }
}`,...D.parameters?.docs?.source}}},O=[`Playground`]}))();export{D as Playground,O as __namedExportsOrder,E as default};
//# sourceMappingURL=FileUpload.Playground.stories-B9v9DLUq.js.map