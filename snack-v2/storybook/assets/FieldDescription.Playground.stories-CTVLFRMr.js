import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-D64B0jO2.js";import{M as c,N as l,T as u,t as d}from"./src-CB9THTkC.js";var f,p,m,h,g,_;e((()=>{d(),o(),l(),f=t(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldDescription`,id:`uikit-product-fieldspredefined-fielddescription`,component:u,parameters:{layout:`fullscreen`},args:{required:!1,maxLength:255,resizable:!0,addButton:!1,size:`m`,"data-test-id":c.fieldDescription},argTypes:{value:{table:{disable:!0}},layoutPresets:{table:{disable:!0}}},render:function(e){return(0,f.jsx)(r,{children:(0,f.jsxs)(a,{width:`narrow`,children:[(0,f.jsx)(i,{children:`Playground`}),(0,f.jsx)(n,{children:`Многострочное описание с yup-валидацией длины (до 255) и счётчиком символов.`}),(0,f.jsx)(s,{block:!0,children:(0,f.jsx)(u,{...e})})]})})}},g={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await p(m(e).getByTestId(c.fieldDescription)).toBeVisible()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.fieldDescription)).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`]}))();export{g as Playground,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=FieldDescription.Playground.stories-CTVLFRMr.js.map