import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BLXw10_m.js";import{U as c,t as l}from"./system-80LcuX_8.js";import{i as u,n as d,t as f}from"./src-B8nO577n.js";import{n as p}from"./testIds-jbRMChax.js";var m,h,g,_,v,y,b,x;e((()=>{l(),f(),o(),p(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={name:`John Doe`,subtitle:`jdoe@example.com`},v=(0,m.jsx)(`span`,{children:`Custom node`}),y={title:`Uikit Product/Actions/TitleClickable`,id:`uikit-product-titleclickable`,component:d,parameters:{layout:`fullscreen`},args:{href:`#`,target:`_self`,title:`Title`,fullWidth:!0,showArrow:!0,showIcon:!1,showChildren:!1,showAvatar:!1,"data-test-id":u.root},argTypes:{href:{control:`text`},target:{control:`radio`,options:[`_self`,`_blank`,`_parent`,`_top`]},title:{control:`text`},fullWidth:{control:`boolean`},showArrow:{control:`boolean`},showIcon:{name:`[Story]: Show icon`,type:`boolean`},showChildren:{name:`[Story]: Show children`,type:`boolean`},showAvatar:{name:`[Story]: Show avatar`,type:`boolean`},icon:{table:{disable:!0}},avatar:{table:{disable:!0}},children:{table:{disable:!0}},titleTag:{control:`text`},onClick:{action:`onClick`}}},b={tags:[`dev`,`test`],render:({showIcon:e,showChildren:t,showAvatar:o,...l})=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`Playground`}),(0,m.jsx)(i,{children:`Кликабельный заголовок-ссылка: иконка слева, children или avatar после заголовка, стрелка справа.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(d,{...l,icon:e?(0,m.jsx)(c,{}):void 0,avatar:o?_:void 0,children:t?v:void 0})})]})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(u.root)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: ({
    showIcon,
    showChildren,
    showAvatar,
    ...args
  }) => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>
          Кликабельный заголовок-ссылка: иконка слева, children или avatar после заголовка, стрелка справа.
        </DemoHint>
        <DemoActions align='center'>
          <TitleClickable {...args} icon={showIcon ? <PlaceholderSVG /> : undefined} avatar={showAvatar ? avatar : undefined}>
            {showChildren ? customChildren : undefined}
          </TitleClickable>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}))();export{b as Playground,x as __namedExportsOrder,y as default};
//# sourceMappingURL=TitleClickable.Playground.stories-Ha2fcxjG.js.map