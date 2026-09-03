import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BdtyM0cx.js";import{n as c,t as l}from"./src-w7BApFCW.js";import{n as u,t as d}from"./testIds-DT1DFbvt.js";import{n as f,t as p}from"./styles.module-CGR4aHXH.js";var m,h,g,_,v,y;e((()=>{l(),o(),u(),p(),m=t(),{expect:h}=__STORYBOOK_MODULE_TEST__,g={title:`Snack/Data display/Tag/TagRow/Examples/Truncated`,id:`components-tag-tagrow-examples-truncated`,component:c,parameters:{layout:`fullscreen`}},_=[{id:`1`,label:`Frontend`,appearance:`blue`},{id:`2`,label:`Backend`,appearance:`green`},{id:`3`,label:`Design`,appearance:`violet`},{id:`4`,label:`DevOps`,appearance:`orange`},{id:`5`,label:`Mobile`,appearance:`pink`},{id:`6`,label:`Data`,appearance:`yellow`}],v={tags:[`dev`],render:()=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`Truncated`}),(0,m.jsx)(i,{children:`TagRow с ограничением в одну строку и кнопкой раскрытия.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(`div`,{className:f.rowNarrow,children:(0,m.jsx)(c,{items:_,rowLimit:1,moreButtonLabel:`+`,"data-test-id":d.tagRow.root})})})]})}),play:async({canvasElement:e})=>{h(e.firstElementChild).toBeTruthy()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>Truncated</DemoTitle>
        <DemoHint>TagRow с ограничением в одну строку и кнопкой раскрытия.</DemoHint>
        <DemoActions align='center'>
          <div className={styles.rowNarrow}>
            <TagRow items={items} rowLimit={1} moreButtonLabel='+' data-test-id={TEST_IDS.tagRow.root} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    expect(canvasElement.firstElementChild).toBeTruthy();
  }
}`,...v.parameters?.docs?.source}}},y=[`Truncated`]}))();export{v as Truncated,y as __namedExportsOrder,g as default};
//# sourceMappingURL=TagRow.Truncated.stories-C4-6I1nS.js.map