import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{bn as n,gn as r,i,nt as a,t as o}from"./iframe-BPThJ53l.js";import{a as s,i as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./testIds-DX5eeJ-I.js";import{a as g,i as _,n as v,t as y}from"./constants-C9__z6KK.js";var b,x,S,C,w;e((()=>{a(),p(),o(),g(),c(),s(),m(),b=t(),x={title:`Uikit Product/Data display/PriceSummary/PriceSummary`,id:`uikit-product-pricesummary-pricesummary`,component:h,parameters:{layout:`padded`,controls:{disable:!0}}},S={..._,"data-test-id":d.priceSummary},C={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,b.jsxs)(`div`,{className:u.matrix,children:[(0,b.jsx)(i,{sectionTitle:`Figma: loading x layoutType`,firstColumnHeader:`loading`,columnHeaders:[`desktop`,`mobile`],rows:[{variantLabel:`false`,cells:[(0,b.jsx)(`div`,{className:u.column,children:(0,b.jsx)(r,{layoutType:n.Desktop,children:(0,b.jsx)(l,{children:(0,b.jsx)(f,{...S})})})},`d`),(0,b.jsx)(`div`,{className:u.column,children:(0,b.jsx)(r,{layoutType:n.Mobile,children:(0,b.jsx)(l,{children:(0,b.jsx)(f,{...S})})})},`m`)]},{variantLabel:`true`,cells:[(0,b.jsx)(`div`,{className:u.column,children:(0,b.jsx)(r,{layoutType:n.Desktop,children:(0,b.jsx)(l,{children:(0,b.jsx)(f,{...S,loading:!0})})})},`d`),(0,b.jsx)(`div`,{className:u.column,children:(0,b.jsx)(r,{layoutType:n.Mobile,children:(0,b.jsx)(l,{children:(0,b.jsx)(f,{...S,loading:!0})})})},`m`)]}]}),(0,b.jsx)(i,{sectionTitle:`Composition`,firstColumnHeader:`Scenario`,columnHeaders:[``],rows:[{variantLabel:`with discount + invoice`,cells:[(0,b.jsx)(`div`,{className:u.column,children:(0,b.jsx)(r,{layoutType:n.Desktop,children:(0,b.jsx)(l,{children:(0,b.jsx)(f,{...S,discount:y,invoice:v})})})},`full`)]},{variantLabel:`dataError`,cells:[(0,b.jsx)(`div`,{className:u.column,children:(0,b.jsx)(r,{layoutType:n.Desktop,children:(0,b.jsx)(l,{children:(0,b.jsx)(f,{...S,dataError:!0,onRetry:()=>void 0})})})},`err`)]},{variantLabel:`hint + valueDelta`,cells:[(0,b.jsx)(`div`,{className:u.column,children:(0,b.jsx)(r,{layoutType:n.Desktop,children:(0,b.jsx)(l,{children:(0,b.jsx)(f,{...S,totalSumType:`from`,hint:`Promo applied`,hintAppearance:`warning`,showHintTooltip:!0,hintTooltipText:`Limited offer`,showHintLink:!0,hintLink:{href:`https://example.com`,label:`Details`},valueDelta:{type:`increased`,value:500}})})})},`hint`)]}]})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Figma: loading x layoutType' firstColumnHeader='loading' columnHeaders={['desktop', 'mobile']} rows={[{
      variantLabel: 'false',
      cells: [<div key='d' className={styles.column}>
                <AdaptiveProvider layoutType={LAYOUT_TYPE.Desktop}>
                  <PriceSummaryFigmaSurface>
                    <PriceSummaryStory {...baseProps} />
                  </PriceSummaryFigmaSurface>
                </AdaptiveProvider>
              </div>, <div key='m' className={styles.column}>
                <AdaptiveProvider layoutType={LAYOUT_TYPE.Mobile}>
                  <PriceSummaryFigmaSurface>
                    <PriceSummaryStory {...baseProps} />
                  </PriceSummaryFigmaSurface>
                </AdaptiveProvider>
              </div>]
    }, {
      variantLabel: 'true',
      cells: [<div key='d' className={styles.column}>
                <AdaptiveProvider layoutType={LAYOUT_TYPE.Desktop}>
                  <PriceSummaryFigmaSurface>
                    <PriceSummaryStory {...baseProps} loading />
                  </PriceSummaryFigmaSurface>
                </AdaptiveProvider>
              </div>, <div key='m' className={styles.column}>
                <AdaptiveProvider layoutType={LAYOUT_TYPE.Mobile}>
                  <PriceSummaryFigmaSurface>
                    <PriceSummaryStory {...baseProps} loading />
                  </PriceSummaryFigmaSurface>
                </AdaptiveProvider>
              </div>]
    }]} />

      <StoryTable sectionTitle='Composition' firstColumnHeader='Scenario' columnHeaders={['']} rows={[{
      variantLabel: 'with discount + invoice',
      cells: [<div key='full' className={styles.column}>
                <AdaptiveProvider layoutType={LAYOUT_TYPE.Desktop}>
                  <PriceSummaryFigmaSurface>
                    <PriceSummaryStory {...baseProps} discount={DEFAULT_DISCOUNT} invoice={DEFAULT_INVOICE} />
                  </PriceSummaryFigmaSurface>
                </AdaptiveProvider>
              </div>]
    }, {
      variantLabel: 'dataError',
      cells: [<div key='err' className={styles.column}>
                <AdaptiveProvider layoutType={LAYOUT_TYPE.Desktop}>
                  <PriceSummaryFigmaSurface>
                    <PriceSummaryStory {...baseProps} dataError onRetry={() => undefined} />
                  </PriceSummaryFigmaSurface>
                </AdaptiveProvider>
              </div>]
    }, {
      variantLabel: 'hint + valueDelta',
      cells: [<div key='hint' className={styles.column}>
                <AdaptiveProvider layoutType={LAYOUT_TYPE.Desktop}>
                  <PriceSummaryFigmaSurface>
                    <PriceSummaryStory {...baseProps} totalSumType='from' hint='Promo applied' hintAppearance='warning' showHintTooltip hintTooltipText='Limited offer' showHintLink hintLink={{
              href: 'https://example.com',
              label: 'Details'
            }} valueDelta={{
              type: 'increased',
              value: 500
            }} />
                  </PriceSummaryFigmaSurface>
                </AdaptiveProvider>
              </div>]
    }]} />
    </div>
}`,...C.parameters?.docs?.source}}},w=[`VisualMatrix`]}))();export{C as VisualMatrix,w as __namedExportsOrder,x as default};
//# sourceMappingURL=PriceSummary.VisualMatrix.stories-DICXHOLG.js.map