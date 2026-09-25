import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,m as a,p as o,t as s,u as c}from"./iframe-qs8RgOhH.js";import{U as l,t as u}from"./system-BjOKAueR.js";import{t as d,u as f}from"./src-CvWLd9A2.js";var p,m,h,g,_,v,y;e((()=>{u(),d(),s(),p=t(),{expect:m,fn:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Uikit Product/Layout & containers/CardPredefined/CardServiceInfo`,id:`uikit-product-cardpredefined-cardserviceinfo`,component:f,parameters:{layout:`fullscreen`},args:{title:`Мой сервис`,description:`Краткое описание сервиса для подробного режима карточки.`,icon:(0,p.jsx)(l,{size:24}),"data-test-id":`card-service-info`,promoTag:{variant:`preview`}},argTypes:{onClick:{table:{disable:!0}},onKeyDown:{table:{disable:!0}},expandable:{table:{disable:!0}},showExpandButton:{name:`[Stories]: show expand button`,control:`boolean`}},render:({showExpandButton:e,...t})=>(0,p.jsx)(r,{children:(0,p.jsxs)(o,{children:[(0,p.jsx)(i,{children:`Playground`}),(0,p.jsx)(n,{children:`Карточка сервиса с описанием. Тяните за угол — меняется ширина.`}),(0,p.jsx)(c,{block:!0,children:(0,p.jsx)(a,{children:(0,p.jsx)(f,{...t,expandable:e?{value:!1,onClick:h()}:void 0})})})]})})},v={tags:[`dev`,`test`],args:{onClick:h(),actionsVisibility:`hover`,favorite:{enabled:!0,onChange:h()}},play:async({canvasElement:e})=>{await m(g(e).getByTestId(`card-service-info`)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=CardServiceInfo.Playground.stories-VIzVzkLT.js.map