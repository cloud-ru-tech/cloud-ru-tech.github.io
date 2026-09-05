import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,f as o,l as s,m as c,t as l,u}from"./iframe-C2bZDhP2.js";import{O as d,f,t as p}from"./src-CMvCQkqB.js";import{n as m,t as h}from"./testIds-Cw54JeO2.js";function g(){let[e,t]=(0,_.useState)([20,80]);return(0,v.jsx)(u,{children:(0,v.jsxs)(a,{width:`narrow`,children:[(0,v.jsx)(c,{children:`Range (диапазон)`}),(0,v.jsx)(s,{children:`Две ручки, controlled number[]. Текстовое поле readonly, формат «min – max».`}),(0,v.jsx)(i,{align:`center`,children:(0,v.jsx)(o,{width:`narrow`,children:(0,v.jsx)(f,{"data-test-id":h.fieldSlider.rangeExampleRoot,label:`Диапазон цены`,hint:`₽/мес.`,range:!0,min:0,max:100,step:1,postfix:`₽`,value:e,onChange:e=>t(e)})})})]})})}var _,v,y,b,x,S,C;t((()=>{p(),_=e(n(),1),l(),m(),v=r(),{expect:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Inputs & Forms/Fields/FieldSlider/Examples/Range`,id:`components-fields-fieldslider-examples-range`,component:f,parameters:{layout:`fullscreen`},render:()=>(0,v.jsx)(g,{})},S={tags:[`dev`,`test`],play:async({canvasElement:e,step:t})=>{let n=b(e).getByTestId(h.fieldSlider.rangeExampleRoot),r=b(n).getByTestId(d.fieldSliderInput);await t(`range text field is readonly and shows the formatted min – max`,async()=>{await y(n).toBeVisible(),await y(r).toHaveValue(`20 – 80`),await y(r).toHaveAttribute(`readonly`)})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(STORY_TEST_IDS.fieldSlider.rangeExampleRoot);
    const input = within(root).getByTestId(TEST_IDS.fieldSliderInput);
    await step('range text field is readonly and shows the formatted min – max', async () => {
      await expect(root).toBeVisible();
      await expect(input).toHaveValue('20 – 80');
      await expect(input).toHaveAttribute('readonly');
    });
  }
}`,...S.parameters?.docs?.source}}},C=[`Range`]}))();export{S as Range,C as __namedExportsOrder,x as default};
//# sourceMappingURL=FieldSlider.Range.stories-dPJOOszp.js.map