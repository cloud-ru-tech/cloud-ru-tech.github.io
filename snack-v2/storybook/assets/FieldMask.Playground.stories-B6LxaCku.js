import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-D64B0jO2.js";import{M as c,N as l,g as u,t as d,v as f}from"./src-CB9THTkC.js";var p,m,h,g,_,v;e((()=>{d(),o(),l(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldMask`,id:`uikit-product-fieldspredefined-fieldmask`,component:u,parameters:{layout:`fullscreen`},args:{label:`Идентификатор`,mask:f.Uuid,size:`m`,"data-test-id":c.fieldMask},argTypes:{mask:{control:`select`,options:Object.values(f)},value:{table:{disable:!0}},layoutPresets:{table:{disable:!0}}},render:function(e){return(0,p.jsx)(r,{children:(0,p.jsxs)(a,{width:`narrow`,children:[(0,p.jsx)(i,{children:`Playground`}),(0,p.jsx)(n,{children:`Поле ввода с предустановленной маской (uuid, code, passport, snils, ip).`}),(0,p.jsx)(s,{block:!0,children:(0,p.jsx)(u,{...e})})]})})}},_={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await m(h(e).getByTestId(c.fieldMask)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.fieldMask)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=FieldMask.Playground.stories-B6LxaCku.js.map