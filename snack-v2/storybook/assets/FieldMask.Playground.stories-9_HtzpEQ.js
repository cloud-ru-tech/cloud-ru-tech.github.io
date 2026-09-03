import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BdtyM0cx.js";import{M as c,_ as l,h as u,j as d,t as f}from"./src-D48Nw6gv.js";var p,m,h,g,_,v;e((()=>{f(),o(),c(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldMask`,id:`uikit-product-fieldspredefined-fieldmask`,component:u,parameters:{layout:`fullscreen`},args:{label:`Идентификатор`,mask:l.Uuid,size:`m`,"data-test-id":d.fieldMask},argTypes:{mask:{control:`select`,options:Object.values(l)},value:{table:{disable:!0}},layoutPresets:{table:{disable:!0}}},render:function(e){return(0,p.jsx)(s,{children:(0,p.jsxs)(r,{width:`narrow`,children:[(0,p.jsx)(a,{children:`Playground`}),(0,p.jsx)(i,{children:`Поле ввода с предустановленной маской (uuid, code, passport, snils, ip).`}),(0,p.jsx)(n,{block:!0,children:(0,p.jsx)(u,{...e})})]})})}},_={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await m(h(e).getByTestId(d.fieldMask)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.fieldMask)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=FieldMask.Playground.stories-9_HtzpEQ.js.map