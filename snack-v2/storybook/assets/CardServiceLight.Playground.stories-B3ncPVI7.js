import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,f as i,l as a,m as o,t as s,u as c}from"./iframe-jFn_-H4h.js";import{V as l,t as u}from"./system-DgLp9jvp.js";import{t as d,u as f,v as p}from"./src-BLY5WTAX.js";var m,h,g,_,v,y,b;e((()=>{u(),d(),s(),m=t(),{expect:h,fn:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Uikit Product/Data display/CardPredefined/CardServiceLight`,id:`uikit-product-cardpredefined-cardservicelight`,component:f,parameters:{layout:`fullscreen`},args:{title:`Мой сервис`,icon:(0,m.jsx)(l,{size:24}),"data-test-id":`card-service-light`},argTypes:{as:{table:{disable:!0}},innerRef:{table:{disable:!0}},"favorite.visibilityStrategy":{options:Object.values(p),control:{type:`select`}}},render:e=>(0,m.jsx)(c,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(o,{children:`Playground`}),(0,m.jsx)(a,{children:`Лёгкая карточка сервиса с иконкой и избранным. Тяните за угол — меняется ширина.`}),(0,m.jsx)(n,{block:!0,children:(0,m.jsx)(i,{children:(0,m.jsx)(f,{...e})})})]})})},y={tags:[`dev`,`test`],args:{onClick:g(),favorite:{enabled:!0,visibilityStrategy:p.hover,onChange:g()}},play:async({canvasElement:e})=>{await h(_(e).getByTestId(`card-service-light`)).toBeVisible()}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    onClick: fn(),
    favorite: {
      enabled: true,
      visibilityStrategy: VISIBILITY_STRATEGY.hover,
      onChange: fn()
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId('card-service-light')).toBeVisible();
  }
}`,...y.parameters?.docs?.source}}},b=[`Playground`]}))();export{y as Playground,b as __namedExportsOrder,v as default};
//# sourceMappingURL=CardServiceLight.Playground.stories-B3ncPVI7.js.map