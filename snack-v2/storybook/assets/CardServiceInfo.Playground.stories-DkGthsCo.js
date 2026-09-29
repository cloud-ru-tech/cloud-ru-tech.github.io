import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,m as a,p as o,t as s,u as c}from"./iframe-CZ0M_4c2.js";import{U as l,t as u}from"./system-De9RRsLW.js";import{f as d,t as f}from"./src-SAkjoGOE.js";import{n as p,t as m}from"./promoTagArgType-BSwnbFVb.js";var h,g,_,v,y,b,x;e((()=>{u(),f(),s(),p(),h=t(),{expect:g,fn:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Uikit Product/Layout & containers/CardPredefined/CardServiceInfo`,id:`uikit-product-cardpredefined-cardserviceinfo`,component:d,parameters:{layout:`fullscreen`},args:{title:`Мой сервис`,description:`Краткое описание сервиса для подробного режима карточки.`,icon:(0,h.jsx)(l,{size:24}),"data-test-id":`card-service-info`},argTypes:{onClick:{table:{disable:!0}},onKeyDown:{table:{disable:!0}},expandable:{table:{disable:!0}},promoTag:m,showExpandButton:{name:`[Stories]: show expand button`,control:`boolean`}},render:({showExpandButton:e,...t})=>(0,h.jsx)(r,{children:(0,h.jsxs)(o,{children:[(0,h.jsx)(i,{children:`Playground`}),(0,h.jsx)(n,{children:`Карточка сервиса с описанием. Тяните за угол — меняется ширина.`}),(0,h.jsx)(c,{block:!0,children:(0,h.jsx)(a,{children:(0,h.jsx)(d,{...t,expandable:e?{value:!1,onClick:_()}:void 0})})})]})})},b={tags:[`dev`,`test`],args:{onClick:_(),actionsVisibility:`hover`,favorite:{enabled:!0,onChange:_()}},play:async({canvasElement:e})=>{await g(v(e).getByTestId(`card-service-info`)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    await expect(within(canvasElement).getByTestId('card-service-info')).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}))();export{b as Playground,x as __namedExportsOrder,y as default};
//# sourceMappingURL=CardServiceInfo.Playground.stories-DkGthsCo.js.map