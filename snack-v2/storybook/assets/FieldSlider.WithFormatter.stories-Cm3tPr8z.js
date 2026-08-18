import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,f as o,l as s,m as c,t as l,u}from"./iframe-Du0zU9lI.js";import{O as d,f,t as p}from"./src-B1mCt2RY.js";import{n as m,t as h}from"./testIds-Cw54JeO2.js";function g(){let[e,t]=(0,_.useState)(75);return(0,v.jsx)(u,{children:(0,v.jsxs)(a,{width:`narrow`,children:[(0,v.jsx)(c,{children:`Кастомный formatter`}),(0,v.jsxs)(s,{children:[`textInputFormatter форматирует отображение («75 %»), значение остаётся числом (`,e,`).`]}),(0,v.jsx)(i,{align:`center`,children:(0,v.jsx)(o,{width:`narrow`,children:(0,v.jsx)(f,{"data-test-id":h.fieldSlider.formatterExampleRoot,label:`Громкость`,min:0,max:100,step:5,postfix:`%`,textInputFormatter:e=>`${e} %`,value:e,onChange:e=>t(e)})})})]})})}var _,v,y,b,x,S,C;t((()=>{p(),_=e(n(),1),l(),m(),v=r(),{expect:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Inputs & Forms/Fields/FieldSlider/Examples/WithFormatter`,id:`components-fields-fieldslider-examples-withformatter`,component:f,parameters:{layout:`fullscreen`},render:()=>(0,v.jsx)(g,{})},S={tags:[`dev`,`test`],play:async({canvasElement:e,step:t})=>{let n=b(e).getByTestId(h.fieldSlider.formatterExampleRoot),r=b(n).getByTestId(d.fieldSliderInput);await t(`the formatter renders the display value while the value stays numeric`,async()=>{await y(n).toBeVisible(),await y(r).toHaveValue(`75 %`)})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(STORY_TEST_IDS.fieldSlider.formatterExampleRoot);
    const input = within(root).getByTestId(TEST_IDS.fieldSliderInput);
    await step('the formatter renders the display value while the value stays numeric', async () => {
      await expect(root).toBeVisible();
      await expect(input).toHaveValue('75 %');
    });
  }
}`,...S.parameters?.docs?.source}}},C=[`WithFormatter`]}))();export{S as WithFormatter,C as __namedExportsOrder,x as default};
//# sourceMappingURL=FieldSlider.WithFormatter.stories-Cm3tPr8z.js.map