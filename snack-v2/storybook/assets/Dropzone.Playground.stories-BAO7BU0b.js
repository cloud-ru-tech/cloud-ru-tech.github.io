import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-BdtyM0cx.js";import{f as u,m as d,o as f,t as p}from"./src-DqaoTZZx.js";import{n as m,t as h}from"./testIds-6Y-FffkP.js";import{i as g,n as _,r as v,t as y}from"./SlotContent-DwH10FSg.js";function b(e){let[t,n]=(0,x.useState)([]);return(0,S.jsxs)(`div`,{className:g.wrapper,children:[(0,S.jsx)(f,{...e,onFilesUpload:n,children:e.children}),t.length>0&&(0,S.jsxs)(`div`,{className:g.filesList,"data-test-id":h.dropzone.filesList,children:[`Загружено: `,t.map(e=>e.name).join(`, `)]})]})}var x,S,C,w,T,E,D;t((()=>{x=e(n(),1),c(),p(),m(),_(),v(),S=r(),{expect:C,within:w}=__STORYBOOK_MODULE_TEST__,T={title:`Snack/Inputs & Forms/Dropzone/Dropzone`,id:`components-dropzone-dropzone`,component:f,parameters:{layout:`fullscreen`},args:{children:(0,S.jsx)(y,{}),disabled:!1,mode:d.Multiple,size:u.M,"data-test-id":h.dropzone.root},argTypes:{children:{table:{disable:!0}},disabled:{control:`boolean`,description:`Деактивирован`},mode:{control:`select`,options:Object.values(d),description:`Режим загрузки`},size:{control:`select`,options:Object.values(u),description:`Размер`},accept:{control:`text`,description:`Типы файлов (например image/*)`},"data-test-id":{control:`text`,description:`Test ID для автотестов`,table:{category:`HTML Attributes`}}}},E={tags:[`dev`,`test`],render:e=>(0,S.jsx)(l,{children:(0,S.jsxs)(a,{children:[(0,S.jsx)(s,{children:`Playground`}),(0,S.jsx)(o,{children:`Зона загрузки файлов с поддержкой drag-and-drop.`}),(0,S.jsx)(i,{align:`center`,children:(0,S.jsx)(b,{...e})})]})}),play:async({canvasElement:e})=>{await C(w(e).getByTestId(h.dropzone.slotContent)).toBeVisible()}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Зона загрузки файлов с поддержкой drag-and-drop.</DemoHint>
        <DemoActions align='center'>
          <DropzoneWithFiles {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.dropzone.slotContent)).toBeVisible();
  }
}`,...E.parameters?.docs?.source}}},D=[`Playground`]}))();export{E as Playground,D as __namedExportsOrder,T as default};
//# sourceMappingURL=Dropzone.Playground.stories-BAO7BU0b.js.map