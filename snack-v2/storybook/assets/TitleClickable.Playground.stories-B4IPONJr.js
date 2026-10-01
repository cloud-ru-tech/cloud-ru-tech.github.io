import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-3N4GY9W1.js";import{U as c,t as l}from"./system-BfDcdc0t.js";import{i as u,n as d,t as f}from"./src-COV0Aprj.js";import{n as p}from"./testIds-DI_o-abY.js";var m,h,g,_,v,y,b,x;e((()=>{l(),f(),o(),p(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={name:`John Doe`,subtitle:`jdoe@example.com`},v=(0,m.jsx)(`span`,{children:`Custom node`}),y={title:`Uikit Product/Actions/TitleClickable`,id:`uikit-product-titleclickable`,component:d,parameters:{layout:`fullscreen`},args:{href:`#`,target:`_self`,title:`Title`,fullWidth:!0,showArrow:!0,showIcon:!1,showChildren:!1,showAvatar:!1,"data-test-id":u.root},argTypes:{href:{control:`text`},target:{control:`radio`,options:[`_self`,`_blank`,`_parent`,`_top`]},title:{control:`text`},fullWidth:{control:`boolean`},showArrow:{control:`boolean`},showIcon:{name:`[Story]: Show icon`,type:`boolean`},showChildren:{name:`[Story]: Show children`,type:`boolean`},showAvatar:{name:`[Story]: Show avatar`,type:`boolean`},icon:{table:{disable:!0}},avatar:{table:{disable:!0}},children:{table:{disable:!0}},titleTag:{control:`text`},onClick:{action:`onClick`}}},b={tags:[`dev`,`test`],render:({showIcon:e,showChildren:t,showAvatar:o,...l})=>(0,m.jsx)(r,{children:(0,m.jsxs)(a,{children:[(0,m.jsx)(i,{children:`Playground`}),(0,m.jsx)(n,{children:`Кликабельный заголовок-ссылка: иконка слева, children или avatar после заголовка, стрелка справа.`}),(0,m.jsx)(s,{align:`center`,children:(0,m.jsx)(d,{...l,icon:e?(0,m.jsx)(c,{}):void 0,avatar:o?_:void 0,children:t?v:void 0})})]})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(u.root)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=TitleClickable.Playground.stories-B4IPONJr.js.map