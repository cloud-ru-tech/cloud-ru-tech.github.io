import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-D1b9r8k6.js";import{c as i}from"./src-DVnWB5sU.js";import{t as a}from"./src-DHGjDxOO.js";import{i as o,n as s,o as c,t as l}from"./src-oym-vKKU.js";import{i as u,n as d,r as f,t as p}from"./CustomTooltipTip-AhjqOmdS.js";import{n as m,t as h}from"./testIds-DwCxzUct.js";function g(e){e.preventDefault()}var _,v,y,b,x,S;e((()=>{a(),l(),r(),d(),f(),m(),_=t(),v={title:`Uikit Product/Data display/PromoTagPredefined`,id:`uikit-product-promotagpredefined`,component:s,parameters:{layout:`padded`}},y=[{label:`connecting`,props:{variant:c.Connecting,tooltip:{onSupportClick:g}}},{label:`partner`,props:{variant:c.Partner}},{label:`preview + service`,props:{variant:c.Preview,context:o.Service}},{label:`preview + functional`,props:{variant:c.Preview,context:o.Functional}},{label:`freeTier`,props:{variant:c.FreeTier}},{label:`default`,props:{variant:c.Default}}],b=[{label:`soon`,variant:c.Soon},{label:`latest`,variant:c.Latest},{label:`private`,variant:c.Private},{label:`public`,variant:c.Public}],x={tags:[`test`,`dev`,`no-a11y`],parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(`div`,{className:u.matrix,children:[(0,_.jsx)(n,{sectionTitle:`variant × context (Figma presets)`,firstColumnHeader:`preset`,columnHeaders:[``],rows:y.map(({label:e,props:t})=>({variantLabel:e,cells:[(0,_.jsx)(s,{...t,"data-test-id":h.promoTag},e)]}))}),(0,_.jsx)(n,{sectionTitle:`custom tip variants × tip`,firstColumnHeader:`variant`,columnHeaders:[`without tip`,`with tip`],rows:b.map(({label:e,variant:t})=>({variantLabel:e,cells:[(0,_.jsx)(s,{variant:t,"data-test-id":h.promoTag},`${e}-no-tip`),(0,_.jsx)(s,{variant:t,tooltip:{tip:(0,_.jsx)(p,{})},"data-test-id":h.promoTag},`${e}-tip`)]}))}),(0,_.jsx)(n,{sectionTitle:`tooltipTrigger (connecting preset)`,firstColumnHeader:`trigger`,columnHeaders:[``],rows:[{variantLabel:`hover`,cells:[(0,_.jsx)(s,{variant:c.Connecting,tooltip:{trigger:i.Hover,onSupportClick:g},"data-test-id":h.promoTag},`hover`)]},{variantLabel:`click`,cells:[(0,_.jsx)(s,{variant:c.Connecting,tooltip:{trigger:i.Click,onSupportClick:g},"data-test-id":h.promoTag},`click`)]}]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=PromoTagPredefined.VisualMatrix.stories-IP8Fu2fy.js.map