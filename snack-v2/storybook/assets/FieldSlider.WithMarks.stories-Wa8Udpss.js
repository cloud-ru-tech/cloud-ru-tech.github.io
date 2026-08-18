import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,f as o,l as s,m as c,t as l,u}from"./iframe-Du0zU9lI.js";import{O as d,f,t as p}from"./src-B1mCt2RY.js";import{n as m,t as h}from"./testIds-Cw54JeO2.js";function g(){let[e,t]=(0,_.useState)(55),[n,r]=(0,_.useState)(8);return(0,v.jsxs)(u,{children:[(0,v.jsxs)(a,{width:`narrow`,children:[(0,v.jsx)(c,{children:`Снэп к меткам`}),(0,v.jsx)(s,{children:`step=null + marks — ввод снэпит к ближайшей метке на Enter/blur.`}),(0,v.jsx)(i,{align:`center`,children:(0,v.jsx)(o,{width:`narrow`,children:(0,v.jsx)(f,{"data-test-id":h.fieldSlider.marksExampleRoot,label:`Качество сжатия`,min:0,max:100,step:null,marks:S,value:e,onChange:e=>t(e)})})})]}),(0,v.jsxs)(a,{width:`narrow`,children:[(0,v.jsx)(c,{children:`Равномерные метки (marksEqualSpacing)`}),(0,v.jsx)(s,{children:`Нелинейные значения 1·2·4·8·16·32 распределяются по шкале равными промежутками.`}),(0,v.jsx)(i,{align:`center`,children:(0,v.jsx)(o,{width:`narrow`,children:(0,v.jsx)(f,{"data-test-id":h.fieldSlider.equalSpacingExampleRoot,label:`Размер кластера`,min:1,max:32,step:null,marks:C,marksEqualSpacing:!0,value:n,onChange:e=>r(e)})})})]})]})}var _,v,y,b,x,S,C,w,T,E;t((()=>{p(),_=e(n(),1),l(),m(),v=r(),{expect:y,userEvent:b,within:x}=__STORYBOOK_MODULE_TEST__,S={10:`15`,50:`55`,90:`95`},C={1:`1`,2:`2`,4:`4`,8:`8`,16:`16`,32:`32`},w={title:`Snack/Inputs & Forms/Fields/FieldSlider/Examples/WithMarks`,id:`components-fields-fieldslider-examples-withmarks`,component:f,parameters:{layout:`fullscreen`},render:()=>(0,v.jsx)(g,{})},T={tags:[`dev`,`test`],play:async({canvasElement:e,step:t})=>{let n=x(e),r=n.getByTestId(h.fieldSlider.marksExampleRoot),i=x(r).getByTestId(d.fieldSliderInput);await t(`renders the initial mark value`,async()=>{await y(r).toBeVisible(),await y(i).toHaveValue(`55`)}),await t(`off-mark typing snaps to the nearest mark on Enter`,async()=>{await b.clear(i),await b.type(i,`70`),await b.keyboard(`{Enter}`),await y(i).toHaveValue(`55`)}),await t(`equal-spacing slider renders its initial non-linear value`,async()=>{let e=n.getByTestId(h.fieldSlider.equalSpacingExampleRoot),t=x(e).getByTestId(d.fieldSliderInput);await y(e).toBeVisible(),await y(t).toHaveValue(`8`)})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(STORY_TEST_IDS.fieldSlider.marksExampleRoot);
    const input = within(root).getByTestId(TEST_IDS.fieldSliderInput);
    await step('renders the initial mark value', async () => {
      await expect(root).toBeVisible();
      await expect(input).toHaveValue('55');
    });
    await step('off-mark typing snaps to the nearest mark on Enter', async () => {
      await userEvent.clear(input);
      await userEvent.type(input, '70');
      await userEvent.keyboard('{Enter}');
      // метки 15/55/95: 70 снэпит к 55.
      await expect(input).toHaveValue('55');
    });
    await step('equal-spacing slider renders its initial non-linear value', async () => {
      const equalSpacingRoot = canvas.getByTestId(STORY_TEST_IDS.fieldSlider.equalSpacingExampleRoot);
      const equalSpacingInput = within(equalSpacingRoot).getByTestId(TEST_IDS.fieldSliderInput);
      await expect(equalSpacingRoot).toBeVisible();
      await expect(equalSpacingInput).toHaveValue('8');
    });
  }
}`,...T.parameters?.docs?.source}}},E=[`WithMarks`]}))();export{T as WithMarks,E as __namedExportsOrder,w as default};
//# sourceMappingURL=FieldSlider.WithMarks.stories-Wa8Udpss.js.map