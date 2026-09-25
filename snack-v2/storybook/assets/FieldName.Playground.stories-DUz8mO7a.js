import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{M as c,j as l,p as u,t as d}from"./src-7Go8s995.js";var f,p,m,h,g,_;e((()=>{d(),o(),c(),f=t(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldName`,id:`uikit-product-fieldspredefined-fieldname`,component:u,parameters:{layout:`fullscreen`},args:{required:!0,maxLength:64,showLabel:!0,size:`m`,"data-test-id":l.fieldName},argTypes:{value:{table:{disable:!0}},layoutPresets:{table:{disable:!0}}},render:function(e){return(0,f.jsx)(r,{children:(0,f.jsxs)(a,{width:`narrow`,children:[(0,f.jsx)(i,{children:`Playground`}),(0,f.jsx)(n,{children:`Поле «Имя»: встроенная yup-валидация (латиница/цифры/.-_, до 64 символов, required).`}),(0,f.jsx)(s,{block:!0,children:(0,f.jsx)(u,{...e})})]})})}},g={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await p(m(e).getByTestId(l.fieldName)).toBeVisible()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.fieldName)).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`]}))();export{g as Playground,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=FieldName.Playground.stories-DUz8mO7a.js.map