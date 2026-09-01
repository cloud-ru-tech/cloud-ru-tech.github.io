import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,f as i,l as a,m as o,t as s,u as c}from"./iframe-XppXgSyX.js";import{U as l,t as u}from"./system-D36IQX-A.js";import{f as d,t as f}from"./src-f--F_3Yb.js";var p,m,h,g,_,v,y;e((()=>{u(),f(),s(),p=t(),{expect:m,fn:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Uikit Product/Layout & containers/CardPredefined/CardServiceLight`,id:`uikit-product-cardpredefined-cardservicelight`,component:d,parameters:{layout:`fullscreen`},args:{title:`Мой сервис`,icon:(0,p.jsx)(l,{size:24}),"data-test-id":`card-service-light`},argTypes:{onClick:{table:{disable:!0}},onKeyDown:{table:{disable:!0}},expandable:{table:{disable:!0}},tooltip:{table:{disable:!0}},showExpandButton:{name:`[Stories]: show expand button`,control:`boolean`},showTooltip:{name:`[Stories]: show tooltip`,control:`boolean`}},render:({showExpandButton:e,showTooltip:t,...s})=>(0,p.jsx)(c,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(o,{children:`Playground`}),(0,p.jsx)(a,{children:`Лёгкая карточка сервиса с иконкой и избранным. Тяните за угол — меняется ширина.`}),(0,p.jsx)(n,{block:!0,children:(0,p.jsx)(i,{children:(0,p.jsx)(d,{...s,expandable:e?{value:e,onClick:h()}:void 0,tooltip:t?{tip:`Дополнительная информация о сервисе`}:void 0})})})]})})},v={tags:[`dev`,`test`],args:{onClick:h(),actionsVisibility:`hover`,favorite:{enabled:!0,onChange:h()}},play:async({canvasElement:e})=>{await m(g(e).getByTestId(`card-service-light`)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=CardServiceLight.Playground.stories-DCO-4Ffl.js.map