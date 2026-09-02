import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BLXw10_m.js";import{a as c,i as l,n as u,t as d}from"./src-CHkZwtih.js";import{n as f,t as p}from"./styles.module-BRWQeK1Q.js";import{t as m}from"./testIds-DPRjf5NX.js";var h,g,_,v,y,b;e((()=>{d(),o(),p(),m(),h=t(),{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Typography/TruncateString/Examples/MiddleTruncation`,id:`components-truncatestring-examples-middletruncation`,component:u,parameters:{layout:`fullscreen`,figma:{disable:!0}}},y={tags:[`dev`],render:()=>(0,h.jsx)(s,{children:(0,h.jsxs)(r,{children:[(0,h.jsx)(a,{children:`MiddleTruncation`}),(0,h.jsx)(i,{children:`Сохраняет начало и конец строки, обрезает середину.`}),(0,h.jsx)(n,{block:!0,children:(0,h.jsx)(`div`,{className:f.container,children:(0,h.jsx)(u,{variant:c.Middle,text:`very-long-file-name-with-identifier-abc123.zip`,"data-test-id":l.root})})})]})}),play:async({canvasElement:e})=>{await g(_(e).getByTestId(l.root)).toBeVisible()}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>MiddleTruncation</DemoTitle>
        <DemoHint>Сохраняет начало и конец строки, обрезает середину.</DemoHint>
        <DemoActions block>
          <div className={styles.container}>
            <TruncateString variant={VARIANT.Middle} text='very-long-file-name-with-identifier-abc123.zip' data-test-id={TEST_IDS.root} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...y.parameters?.docs?.source}}},b=[`MiddleTruncation`]}))();export{y as MiddleTruncation,b as __namedExportsOrder,v as default};
//# sourceMappingURL=TruncateString.MiddleTruncation.stories-Dxu8-LxT.js.map