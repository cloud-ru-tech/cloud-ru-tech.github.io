import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-D64B0jO2.js";import{M as c,N as l,l as u,s as d,t as f}from"./src-CB9THTkC.js";var p,m,h,g,_,v;e((()=>{f(),o(),l(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldPhone`,id:`uikit-product-fieldspredefined-fieldphone`,component:d,parameters:{layout:`fullscreen`},args:{label:`Телефон`,size:`m`,searchPlaceholder:`Поиск страны`,options:{includedCountries:u},"data-test-id":c.fieldPhone},argTypes:{options:{table:{disable:!0}}},render:function(e){return(0,p.jsx)(r,{children:(0,p.jsxs)(a,{width:`narrow`,children:[(0,p.jsx)(i,{children:`Playground`}),(0,p.jsx)(n,{children:`Телефон с выбором страны: флаг + код в слоте, маска подстраивается под страну.`}),(0,p.jsx)(s,{block:!0,children:(0,p.jsx)(d,{...e})})]})})}},_={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await m(h(e).getByTestId(c.fieldPhone)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.fieldPhone)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=FieldPhone.Playground.stories-_gpGUoPD.js.map