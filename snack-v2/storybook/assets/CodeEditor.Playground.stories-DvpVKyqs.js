import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-XppXgSyX.js";import{a as c,d as l,i as u,l as d,n as f,o as p,p as m,t as h,u as g}from"./testIds-CB32Jbhq.js";var _,v,y,b,x,S;e((()=>{g(),o(),d(),u(),f(),_=t(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Inputs & Forms/CodeEditor`,id:`components-codeeditor`,component:l,parameters:{layout:`fullscreen`},args:{value:p,language:`typescript`,hasHeader:!0,background:!0,showRowNumber:!0,"data-test-id":m.root},argTypes:{value:{control:`text`,description:`Содержимое редактора`},language:{control:`select`,options:h,description:`Язык подсветки`},hasHeader:{control:`boolean`,description:`Показывать шапку (language + copy)`},background:{control:`boolean`,description:`Псевдо-бекграунд для editor-области`},showRowNumber:{control:`boolean`,description:`Показывать колонку с номерами строк`},loading:{control:`boolean`,description:`Показать спиннер поверх редактора`},theme:{control:`text`,description:"Имя зарегистрированной monaco-темы. По умолчанию подбирается автоматически по DS-теме провайдера (`snack` для светлой, `snackDark` для тёмной). Передавай вручную, только если регистрируешь свою тему через `monaco.editor.defineTheme(...)`."},themeName:{table:{disable:!0}},jsonSchema:{table:{disable:!0}},path:{table:{disable:!0}},onMount:{table:{disable:!0}},onChange:{table:{disable:!0}},onValidate:{table:{disable:!0}},onCopyClick:{table:{disable:!0}}}},x={tags:[`dev`,`test`],render:e=>(0,_.jsx)(s,{children:(0,_.jsxs)(r,{width:`wide`,children:[(0,_.jsx)(a,{children:`Playground`}),(0,_.jsx)(i,{children:`Редактор кода поверх monaco-editor с поддержкой DS-тем.`}),(0,_.jsx)(n,{block:!0,children:(0,_.jsx)(`div`,{className:c.frame,children:(0,_.jsx)(l,{...e})})})]})}),play:async({canvasElement:e})=>{await v(y(e).getByTestId(m.root)).toBeVisible()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Редактор кода поверх monaco-editor с поддержкой DS-тем.</DemoHint>
        <DemoActions block>
          <div className={styles.frame}>
            <CodeEditor {...args} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`]}))();export{x as Playground,S as __namedExportsOrder,b as default};
//# sourceMappingURL=CodeEditor.Playground.stories-DvpVKyqs.js.map