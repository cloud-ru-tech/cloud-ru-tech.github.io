import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-n9OCAA8q.js";import{M as c,j as l,t as u,w as d}from"./src-BOFG23qc.js";var f,p,m,h,g,_;e((()=>{u(),o(),c(),f=t(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldDescription`,id:`uikit-product-fieldspredefined-fielddescription`,component:d,parameters:{layout:`fullscreen`},args:{required:!1,maxLength:255,resizable:!0,addButton:!1,size:`m`,"data-test-id":l.fieldDescription},argTypes:{value:{table:{disable:!0}},layoutPresets:{table:{disable:!0}}},render:function(e){return(0,f.jsx)(s,{children:(0,f.jsxs)(r,{width:`narrow`,children:[(0,f.jsx)(a,{children:`Playground`}),(0,f.jsx)(i,{children:`Многострочное описание с yup-валидацией длины (до 255) и счётчиком символов.`}),(0,f.jsx)(n,{block:!0,children:(0,f.jsx)(d,{...e})})]})})}},g={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await p(m(e).getByTestId(l.fieldDescription)).toBeVisible()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.fieldDescription)).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`]}))();export{g as Playground,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=FieldDescription.Playground.stories-C0vAtqyU.js.map