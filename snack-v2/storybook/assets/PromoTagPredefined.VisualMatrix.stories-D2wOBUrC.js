import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CvASAC9b.js";import{c as i}from"./src-Q8-1TT2c.js";import{t as a}from"./src-xdfGCfAL.js";import{c as o,i as s,n as c,o as l,r as u,t as d}from"./testIds-DcmLNMfF.js";import{i as f,n as p,r as m,t as h}from"./CustomTooltipTip-DtEebQNM.js";function g(e){e.preventDefault()}var _,v,y,b,x,S;e((()=>{a(),u(),r(),p(),m(),c(),_=t(),v={title:`Uikit Product/Data display/PromoTagPredefined`,id:`uikit-product-promotagpredefined`,component:s,parameters:{layout:`padded`}},y=[{label:`connecting`,props:{variant:o.Connecting,tooltip:{onSupportClick:g}}},{label:`partner`,props:{variant:o.Partner}},{label:`preview + service`,props:{variant:o.Preview,context:l.Service}},{label:`preview + functional`,props:{variant:o.Preview,context:l.Functional}},{label:`freeTier`,props:{variant:o.FreeTier}},{label:`default`,props:{variant:o.Default}}],b=[{label:`soon`,variant:o.Soon},{label:`latest`,variant:o.Latest},{label:`private`,variant:o.Private},{label:`public`,variant:o.Public}],x={tags:[`test`,`dev`,`no-a11y`],parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(`div`,{className:f.matrix,children:[(0,_.jsx)(n,{sectionTitle:`variant × context (Figma presets)`,firstColumnHeader:`preset`,columnHeaders:[``],rows:y.map(({label:e,props:t})=>({variantLabel:e,cells:[(0,_.jsx)(s,{...t,"data-test-id":d.promoTag},e)]}))}),(0,_.jsx)(n,{sectionTitle:`custom tip variants × tip`,firstColumnHeader:`variant`,columnHeaders:[`without tip`,`with tip`],rows:b.map(({label:e,variant:t})=>({variantLabel:e,cells:[(0,_.jsx)(s,{variant:t,"data-test-id":d.promoTag},`${e}-no-tip`),(0,_.jsx)(s,{variant:t,tooltip:{tip:(0,_.jsx)(h,{})},"data-test-id":d.promoTag},`${e}-tip`)]}))}),(0,_.jsx)(n,{sectionTitle:`tooltipTrigger (connecting preset)`,firstColumnHeader:`trigger`,columnHeaders:[``],rows:[{variantLabel:`hover`,cells:[(0,_.jsx)(s,{variant:o.Connecting,tooltip:{trigger:i.Hover,onSupportClick:g},"data-test-id":d.promoTag},`hover`)]},{variantLabel:`click`,cells:[(0,_.jsx)(s,{variant:o.Connecting,tooltip:{trigger:i.Click,onSupportClick:g},"data-test-id":d.promoTag},`click`)]}]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='variant × context (Figma presets)' firstColumnHeader='preset' columnHeaders={['']} rows={presets.map(({
      label,
      props
    }) => ({
      variantLabel: label,
      cells: [<PromoTagPredefined key={label} {...props} data-test-id={TEST_IDS.promoTag} />]
    }))} />

      <StoryTable sectionTitle='custom tip variants × tip' firstColumnHeader='variant' columnHeaders={['without tip', 'with tip']} rows={customTipVariants.map(({
      label,
      variant
    }) => ({
      variantLabel: label,
      cells: [<PromoTagPredefined key={\`\${label}-no-tip\`} variant={variant} data-test-id={TEST_IDS.promoTag} />, <PromoTagPredefined key={\`\${label}-tip\`} variant={variant} tooltip={{
        tip: <CustomTooltipTip />
      }} data-test-id={TEST_IDS.promoTag} />]
    }))} />

      <StoryTable sectionTitle='tooltipTrigger (connecting preset)' firstColumnHeader='trigger' columnHeaders={['']} rows={[{
      variantLabel: 'hover',
      cells: [<PromoTagPredefined key='hover' variant={VARIANTS.Connecting} tooltip={{
        trigger: TRIGGER.Hover,
        onSupportClick: noopSupportClick
      }} data-test-id={TEST_IDS.promoTag} />]
    }, {
      variantLabel: 'click',
      cells: [<PromoTagPredefined key='click' variant={VARIANTS.Connecting} tooltip={{
        trigger: TRIGGER.Click,
        onSupportClick: noopSupportClick
      }} data-test-id={TEST_IDS.promoTag} />]
    }]} />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,v as default};
//# sourceMappingURL=PromoTagPredefined.VisualMatrix.stories-D2wOBUrC.js.map