import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{M as c,j as l,t as u,w as d}from"./src-7Go8s995.js";var f,p,m,h,g,_;e((()=>{u(),o(),c(),f=t(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldDescription`,id:`uikit-product-fieldspredefined-fielddescription`,component:d,parameters:{layout:`fullscreen`},args:{required:!1,maxLength:255,resizable:!0,addButton:!1,size:`m`,"data-test-id":l.fieldDescription},argTypes:{value:{table:{disable:!0}},layoutPresets:{table:{disable:!0}}},render:function(e){return(0,f.jsx)(r,{children:(0,f.jsxs)(a,{width:`narrow`,children:[(0,f.jsx)(i,{children:`Playground`}),(0,f.jsx)(n,{children:`Многострочное описание с yup-валидацией длины (до 255) и счётчиком символов.`}),(0,f.jsx)(s,{block:!0,children:(0,f.jsx)(d,{...e})})]})})}},g={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await p(m(e).getByTestId(l.fieldDescription)).toBeVisible()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.fieldDescription)).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`]}))();export{g as Playground,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=FieldDescription.Playground.stories-DO_8LQUt.js.map