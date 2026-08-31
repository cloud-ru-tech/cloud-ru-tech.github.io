import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-CRw8NhXI.js";import{U as c,t as l}from"./system-B_eKYAdZ.js";import{c as u,i as d,n as f,r as p,t as m}from"./testIds-4Rk-D7Hk.js";var h,g,_,v,y,b;e((()=>{l(),o(),p(),f(),h=t(),{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Uikit Product/Data display/InfoRow/InfoRow`,id:`uikit-product-inforow-inforow`,component:d,parameters:{layout:`fullscreen`},args:{position:u.Inner,label:`Адаптивная строка`,content:`Значение`,"data-test-id":m.infoRow.root,topDivider:!0,bottomDivider:!0,width:`fixed`,column:`1`,maxWidth:!1,rowActions:{first:{icon:(0,h.jsx)(c,{}),label:``}}},argTypes:{position:{control:`select`,options:Object.values(u),description:`Позиция строки в списке (для mobile layout)`},label:{control:`text`},content:{control:`text`},topDivider:{control:`boolean`},bottomDivider:{control:`boolean`},width:{control:`select`,options:[`fixed`,`full`],description:`Ширина строки`},column:{control:`select`,options:[`1`,`2`],description:`Ось Figma: число колонок значений`},maxWidth:{control:`boolean`,description:`Ось Figma maxWidth`}}},y={tags:[`dev`,`test`],render:e=>(0,h.jsx)(s,{children:(0,h.jsxs)(r,{width:`wide`,children:[(0,h.jsx)(a,{children:`Playground`}),(0,h.jsx)(i,{children:`InfoRow с автоматическим переключением между desktop и mobile layout.`}),(0,h.jsx)(n,{align:`center`,children:(0,h.jsx)(d,{...e})})]})}),play:async({canvasElement:e})=>{await g(_(e).getByTestId(m.infoRow.root)).toBeVisible()}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>InfoRow с автоматическим переключением между desktop и mobile layout.</DemoHint>
        <DemoActions align='center'>
          <InfoRow {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.infoRow.root)).toBeVisible();
  }
}`,...y.parameters?.docs?.source}}},b=[`Playground`]}))();export{y as Playground,b as __namedExportsOrder,v as default};
//# sourceMappingURL=InfoRow.Playground.stories-CO-jMw0g.js.map