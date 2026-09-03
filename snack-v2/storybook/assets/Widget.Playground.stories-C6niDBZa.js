import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Bl-uTAel.js";import{o as c,t as l}from"./src-DjAapgeG2.js";import{a as u,i as d,n as f,o as p,t as m}from"./src-B1yz0XCy.js";import{t as h}from"./testIds-C39u1RR6.js";var g,_,v,y,b,x;e((()=>{l(),m(),o(),h(),g=t(),{expect:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Uikit Product/Data display/Widget`,id:`uikit-product-widget`,component:f,parameters:{layout:`fullscreen`},args:{loadingState:{showSkeleton:!0},header:{title:`Cloud servers`,href:`#`},children:`Keep product metrics, shortcuts, and status details in one compact card.`,errorState:{onClickUpdate:()=>void 0,errorTitle:`Не удалось получить данные`,errorDescription:`Попробуйте обновить виджет`,updateButtonLabel:`Обновить`},segmentControl:{width:c.Full,defaultValue:`overview`,items:[{value:`overview`,label:`Overview`},{value:`events`,label:`Events`}]},actions:[{label:`Create`,onClick:()=>void 0},{variant:d.Outline,label:`Settings`,onClick:()=>void 0},{variant:d.Kebab,list:{items:[{content:{label:`Export`},onClick:()=>void 0},{content:{label:`Archive`},onClick:()=>void 0}]}}],state:p.Default,wide:!1,"data-test-id":u.root},argTypes:{state:{control:`radio`,options:Object.values(p)},wide:{control:`boolean`,if:{global:`layoutType`,neq:`mobile`}}}},b={tags:[`dev`,`test`],render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{children:[(0,g.jsx)(a,{children:`Widget`}),(0,g.jsx)(i,{children:`Product card with a clickable header, optional controls, actions, loading and error states.`}),(0,g.jsx)(n,{children:(0,g.jsx)(f,{...e})})]})}),play:async({canvasElement:e})=>{await _(v(e).getByTestId(u.root)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Widget</DemoTitle>
        <DemoHint>Product card with a clickable header, optional controls, actions, loading and error states.</DemoHint>
        <DemoActions>
          <Widget {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}))();export{b as Playground,x as __namedExportsOrder,y as default};
//# sourceMappingURL=Widget.Playground.stories-C6niDBZa.js.map