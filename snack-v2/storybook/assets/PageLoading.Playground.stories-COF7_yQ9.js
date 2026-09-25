import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{n as c,r as l,t as u,v as d}from"./testIds-BYUpXbkv.js";import{n as f,t as p}from"./styles.module-BLI8_pKO.js";var m,h,g,_,v,y;e((()=>{l(),o(),p(),c(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Uikit Product/Layout & containers/PageLayout/PageLoading`,id:`uikit-product-pagelayout-pageloading`,component:d,parameters:{layout:`fullscreen`},args:{"data-test-id":u.pageLoading.root}},v={tags:[`dev`,`test`],render:e=>(0,m.jsx)(r,{children:(0,m.jsxs)(a,{children:[(0,m.jsx)(i,{children:`Playground`}),(0,m.jsx)(n,{children:`Полноразмерный лоадер страницы со спиннером по центру.`}),(0,m.jsx)(s,{block:!0,children:(0,m.jsx)(`div`,{className:f.loadingFrame,children:(0,m.jsx)(d,{...e})})})]})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(u.pageLoading.root)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Полноразмерный лоадер страницы со спиннером по центру.</DemoHint>
        <DemoActions block>
          <div className={styles.loadingFrame}>
            <PageLoading {...args} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.pageLoading.root)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=PageLoading.Playground.stories-COF7_yQ9.js.map