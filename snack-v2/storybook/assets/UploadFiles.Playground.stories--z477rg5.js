import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-BdtyM0cx.js";import{c as u,d,i as f,n as p,p as m,r as h,s as g,t as _,u as v}from"./styles.module-BzI66wr_.js";import{t as y}from"./testIds-BbH2TniI.js";function b(e){let[t,n]=(0,x.useState)(e.value??e.defaultValue);return(0,S.jsx)(l,{children:(0,S.jsxs)(a,{children:[(0,S.jsx)(s,{children:`Playground`}),(0,S.jsx)(o,{children:`Простой вариант: любые файлы, не более 3 файлов, до 5 МБ. Обязательная функция upload.`}),(0,S.jsx)(i,{align:`center`,children:(0,S.jsx)(`div`,{className:p.uploadFilesStory,children:(0,S.jsx)(d,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})})})]})})}var x,S,C,w,T,E,D,O,k;t((()=>{v(),x=e(n(),1),c(),g(),_(),y(),S=r(),{expect:C,fn:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Uikit Product/Inputs & Forms/UploadFiles`,id:`uikit-product-uploadfiles`,component:d,globals:{language:`ru-RU`},parameters:{layout:`fullscreen`},render:e=>(0,S.jsx)(b,{...e}),args:{...f,optional:!0,"data-test-id":m.root,onChange:w(),upload:u},argTypes:{optional:{control:`boolean`},onChange:{table:{disable:!0}},upload:{table:{disable:!0}},value:{table:{disable:!0}},defaultValue:{table:{disable:!0}}}},D={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await C(T(e).getByTestId(m.root)).toBeVisible(),await C(T(e).getByTestId(m.dropzone)).toBeVisible()}},O={tags:[`test`],args:{accept:h}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
    await expect(within(canvasElement).getByTestId(TEST_IDS.dropzone)).toBeVisible();
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['test'],
  args: {
    accept: PDF_TXT_ACCEPT
  }
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`FormatRestricted`]}))();export{O as FormatRestricted,D as Playground,k as __namedExportsOrder,E as default};
//# sourceMappingURL=UploadFiles.Playground.stories--z477rg5.js.map