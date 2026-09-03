import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BdtyM0cx.js";import{a as c,i as l,n as u,t as d}from"./src-BOrAHdid.js";import{n as f,t as p}from"./styles.module-DFYLdCyG.js";var m,h,g,_,v,y;e((()=>{d(),o(),c(),p(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Uikit Product/Actions/ButtonPredefined/ButtonDropdown`,id:`uikit-product-buttonpredefined-buttondropdown`,component:u,parameters:{layout:`fullscreen`},args:{label:`Period`,size:`s`,items:[{id:`1`,content:{label:`Option A`},onClick:()=>void 0},{id:`2`,content:{label:`Option B`},onClick:()=>void 0}],closeDroplistOnItemClick:!0,"data-test-id":l.buttonDropdown}},v={tags:[`dev`,`test`],render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`Playground`}),(0,m.jsx)(i,{children:`Function button with droplist: anchored popover on desktop, bottom sheet on mobile. Layout is driven by the global AdaptiveProvider — switch it via the toolbar layoutType global.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(`div`,{className:f.panel,children:(0,m.jsx)(u,{...e})})})]})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(l.buttonDropdown)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>
          Function button with droplist: anchored popover on desktop, bottom sheet on mobile. Layout is driven by the
          global AdaptiveProvider — switch it via the toolbar layoutType global.
        </DemoHint>
        <DemoActions align='center'>
          <div className={styles.panel}>
            <ButtonDropdown {...args} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.buttonDropdown)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=ButtonDropdown.Playground.stories-D0zMp9p5.js.map