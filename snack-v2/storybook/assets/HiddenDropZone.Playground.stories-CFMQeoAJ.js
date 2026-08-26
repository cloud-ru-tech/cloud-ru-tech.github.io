import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-D1b9r8k6.js";import{m as u,n as d,t as f}from"./src-D5TnL_Iy.js";import{n as p,t as m}from"./testIds-CtyrFDNh.js";import{n as h,t as g}from"./styles.module-DeH9bIw9.js";function _(e){let[t,n]=(0,v.useState)([]);return(0,y.jsxs)(`div`,{className:h.wrapper,children:[(0,y.jsx)(d,{...e,onFilesUpload:n,children:(0,y.jsx)(`div`,{id:`form`,className:h.card,"data-test-id":m.hiddenDropZone.form,children:(0,y.jsxs)(`form`,{className:h.form,children:[(0,y.jsx)(`label`,{htmlFor:`firstName`,children:`Имя`}),(0,y.jsx)(`input`,{id:`firstName`,type:`text`}),(0,y.jsx)(`label`,{htmlFor:`lastName`,children:`Фамилия`}),(0,y.jsx)(`input`,{id:`lastName`,type:`text`})]})})}),(0,y.jsx)(`div`,{className:h.dropHint,children:`Перетащите файлы на форму чтобы прикрепить вложения`}),t.length>0&&(0,y.jsxs)(`div`,{className:h.filesList,"data-test-id":m.hiddenDropZone.filesList,children:[`Прикреплено: `,t.map(e=>e.name).join(`, `)]})]})}var v,y,b,x,S,C,w;t((()=>{v=e(n(),1),c(),f(),p(),g(),y=r(),{expect:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Snack/Inputs & Forms/Dropzone/HiddenDropZone`,id:`components-dropzone-hiddendropzone`,component:d,parameters:{layout:`fullscreen`},args:{content:(0,y.jsx)(`div`,{"data-test-id":m.hiddenDropZone.description,className:h.contentDescription,children:`Перетащите файлы на форму, чтобы прикрепить их`}),disabled:!1,mode:u.Multiple},argTypes:{content:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{control:`boolean`,description:`Деактивирован`},mode:{control:`select`,options:Object.values(u),description:`Режим загрузки`},accept:{control:`text`,description:`Типы файлов`},"data-test-id":{control:`text`,description:`Test ID для автотестов`,table:{category:`HTML Attributes`}}}},C={tags:[`dev`,`test`],render:e=>(0,y.jsx)(l,{children:(0,y.jsxs)(a,{children:[(0,y.jsx)(s,{children:`Playground`}),(0,y.jsx)(o,{children:`Скрытая зона загрузки поверх произвольного контента.`}),(0,y.jsx)(i,{align:`center`,children:(0,y.jsx)(_,{...e})})]})}),play:async({canvasElement:e})=>{await b(x(e).getByTestId(m.hiddenDropZone.form)).toBeVisible()}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Скрытая зона загрузки поверх произвольного контента.</DemoHint>
        <DemoActions align='center'>
          <HiddenDropZoneWithFiles {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.hiddenDropZone.form)).toBeVisible();
  }
}`,...C.parameters?.docs?.source}}},w=[`Playground`]}))();export{C as Playground,w as __namedExportsOrder,S as default};
//# sourceMappingURL=HiddenDropZone.Playground.stories-CFMQeoAJ.js.map