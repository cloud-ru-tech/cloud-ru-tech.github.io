import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,m as a,p as o,t as s,u as c}from"./iframe-CLdI_TuW.js";import{U as l,t as u}from"./system-Dz1OnkMZ.js";import{m as d,t as f}from"./src-0gt98vIo.js";import{n as p,t as m}from"./promoTagArgType-B8m0W14x.js";var h,g,_,v,y,b,x;e((()=>{u(),f(),s(),p(),h=t(),{expect:g,fn:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Uikit Product/Layout & containers/CardPredefined/CardServiceLight`,id:`uikit-product-cardpredefined-cardservicelight`,component:d,parameters:{layout:`fullscreen`},args:{title:`Мой сервис`,icon:(0,h.jsx)(l,{size:24}),"data-test-id":`card-service-light`},argTypes:{onClick:{table:{disable:!0}},onKeyDown:{table:{disable:!0}},expandable:{table:{disable:!0}},tooltip:{table:{disable:!0}},promoTag:m,showExpandButton:{name:`[Stories]: show expand button`,control:`boolean`},showTooltip:{name:`[Stories]: show tooltip`,control:`boolean`}},render:({showExpandButton:e,showTooltip:t,...s})=>(0,h.jsx)(r,{children:(0,h.jsxs)(o,{children:[(0,h.jsx)(i,{children:`Playground`}),(0,h.jsx)(n,{children:`Лёгкая карточка сервиса с иконкой и избранным. Тяните за угол — меняется ширина.`}),(0,h.jsx)(c,{block:!0,children:(0,h.jsx)(a,{children:(0,h.jsx)(d,{...s,expandable:e?{value:e,onClick:_()}:void 0,tooltip:t?{tip:`Дополнительная информация о сервисе`}:void 0})})})]})})},b={tags:[`dev`,`test`],args:{onClick:_(),actionsVisibility:`hover`,favorite:{enabled:!0,onChange:_()}},play:async({canvasElement:e})=>{await g(v(e).getByTestId(`card-service-light`)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    onClick: fn(),
    actionsVisibility: 'hover',
    favorite: {
      enabled: true,
      onChange: fn()
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId('card-service-light')).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}))();export{b as Playground,x as __namedExportsOrder,y as default};
//# sourceMappingURL=CardServiceLight.Playground.stories-DA7-g4C1.js.map