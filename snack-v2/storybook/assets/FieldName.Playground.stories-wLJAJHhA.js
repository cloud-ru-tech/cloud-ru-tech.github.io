import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BUDedHtH.js";import{M as c,j as l,p as u,t as d}from"./src-DximJuve.js";var f,p,m,h,g,_;e((()=>{d(),o(),c(),f=t(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldName`,id:`uikit-product-fieldspredefined-fieldname`,component:u,parameters:{layout:`fullscreen`},args:{required:!0,maxLength:64,showLabel:!0,size:`m`,"data-test-id":l.fieldName},argTypes:{value:{table:{disable:!0}},layoutPresets:{table:{disable:!0}}},render:function(e){return(0,f.jsx)(s,{children:(0,f.jsxs)(r,{width:`narrow`,children:[(0,f.jsx)(a,{children:`Playground`}),(0,f.jsx)(i,{children:`Поле «Имя»: встроенная yup-валидация (латиница/цифры/.-_, до 64 символов, required).`}),(0,f.jsx)(n,{block:!0,children:(0,f.jsx)(u,{...e})})]})})}},g={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await p(m(e).getByTestId(l.fieldName)).toBeVisible()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.fieldName)).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`]}))();export{g as Playground,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=FieldName.Playground.stories-wLJAJHhA.js.map