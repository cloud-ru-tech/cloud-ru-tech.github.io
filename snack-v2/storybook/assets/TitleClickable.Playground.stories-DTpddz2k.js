import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BRJzdrhE.js";import{U as c,t as l}from"./system-Cs_MMgKM.js";import{c as u,i as d,n as f,o as p,t as m}from"./src-BHmjqeZP.js";import{n as h}from"./testIds-DqW53X4S.js";var g,_,v,y,b,x,S;e((()=>{l(),m(),o(),h(),g=t(),{expect:_,within:v}=__STORYBOOK_MODULE_TEST__,y={none:void 0,icon:(0,g.jsx)(d,{icon:(0,g.jsx)(c,{})}),avatar:(0,g.jsx)(p,{name:`John Doe`,subtitle:`jdoe@example.com`}),node:(0,g.jsx)(`span`,{children:`Custom node`})},b={title:`Uikit Product/Actions/TitleClickable`,id:`uikit-product-titleclickable`,component:f,parameters:{layout:`fullscreen`},args:{href:`#`,target:`_self`,title:`Title`,fullWidth:!0,showArrow:!0,before:y.none,"data-test-id":u.root},argTypes:{href:{control:`text`},target:{control:`radio`,options:[`_self`,`_blank`,`_parent`,`_top`]},title:{control:`text`},fullWidth:{control:`boolean`},showArrow:{control:`boolean`},before:{control:`select`,options:Object.keys(y),mapping:y,description:`Слот слева: иконка / аватар / произвольная нода`},icon:{table:{disable:!0}},avatar:{table:{disable:!0}},children:{table:{disable:!0}},titleTag:{control:`text`},onClick:{action:`onClick`}}},x={tags:[`dev`,`test`],render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{children:[(0,g.jsx)(a,{children:`Playground`}),(0,g.jsx)(i,{children:`Кликабельный заголовок-ссылка с опциональным слотом слева и стрелкой справа.`}),(0,g.jsx)(n,{align:`center`,children:(0,g.jsx)(f,{...e})})]})}),play:async({canvasElement:e})=>{await _(v(e).getByTestId(u.root)).toBeVisible()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Кликабельный заголовок-ссылка с опциональным слотом слева и стрелкой справа.</DemoHint>
        <DemoActions align='center'>
          <TitleClickable {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`]}))();export{x as Playground,S as __namedExportsOrder,b as default};
//# sourceMappingURL=TitleClickable.Playground.stories-DTpddz2k.js.map