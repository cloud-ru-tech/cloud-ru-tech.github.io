import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-CqCwb0Nr.js";import{a as c,i as l,n as u,t as d}from"./src-BQMa4CQA.js";import{n as f,t as p}from"./styles.module-BRWQeK1Q.js";import{t as m}from"./testIds-wrl6TATE.js";var h,g,_,v,y,b,x;e((()=>{d(),o(),p(),m(),h=t(),{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Typography/TruncateString/Examples/EndTruncation`,id:`components-truncatestring-examples-endtruncation`,component:u,parameters:{layout:`fullscreen`,figma:{disable:!0}}},y=`Название длинного файла или заголовка, которое не помещается в строку`,b={tags:[`dev`],render:()=>(0,h.jsx)(s,{children:(0,h.jsxs)(r,{children:[(0,h.jsx)(a,{children:`EndTruncation`}),(0,h.jsx)(i,{children:`Текст обрезается с конца многоточием.`}),(0,h.jsx)(n,{block:!0,children:(0,h.jsx)(`div`,{className:f.container,children:(0,h.jsx)(u,{variant:c.End,text:y,maxLines:1,"data-test-id":l.root})})})]})}),play:async({canvasElement:e})=>{await g(_(e).getByTestId(l.root)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>EndTruncation</DemoTitle>
        <DemoHint>Текст обрезается с конца многоточием.</DemoHint>
        <DemoActions block>
          <div className={styles.container}>
            <TruncateString variant={VARIANT.End} text={SAMPLE} maxLines={1} data-test-id={TEST_IDS.root} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}},x=[`EndTruncation`]}))();export{b as EndTruncation,x as __namedExportsOrder,v as default};
//# sourceMappingURL=TruncateString.EndTruncation.stories-DErnkili.js.map