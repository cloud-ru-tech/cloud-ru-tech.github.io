import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,i as r,t as i,u as a}from"./iframe-C96OK3Oq.js";import{i as o,t as s}from"./src-0conB_fu.js";import{c,n as l}from"./mockData-DkqJwWhB.js";import{n as u,t as d}from"./styles.module-84Pnr5X-.js";import{n as f,t as p}from"./testIds-BP7TfP5y.js";var m,h,g,_,v;e((()=>{s(),i(),c(),f(),d(),m=t(),h=e=>(0,m.jsx)(`div`,{className:u.storyWrapper,children:e}),g={title:`Uikit Product/Data display/Quota/QuotaWidget`,id:`uikit-product-quota-quotawidget`,component:o,parameters:{layout:`fullscreen`,controls:{disable:!0}}},_={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,m.jsx)(a,{children:(0,m.jsx)(n,{width:`wide`,children:(0,m.jsx)(r,{sectionTitle:`content`,firstColumnHeader:`state`,columnHeaders:[`QuotaWidget`],rows:p.map(({state:e,cellTestId:t})=>({variantLabel:e,cells:[h((0,m.jsx)(o,{"data-test-id":t,...l,...e===`loading`?{loading:!0}:{},...e===`error`?{error:!0}:{}},e))]}))})})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <StoryTable sectionTitle='content' firstColumnHeader='state' columnHeaders={['QuotaWidget']} rows={QUOTA_WIDGET_MATRIX.map(({
        state,
        cellTestId
      }) => ({
        variantLabel: state,
        cells: [alignTriggerEnd(<QuotaWidget key={state} data-test-id={cellTestId} {...BASE_QUOTA_WIDGET_PROPS} {...state === 'loading' ? {
          loading: true
        } : {}} {...state === 'error' ? {
          error: true
        } : {}} />)]
      }))} />
      </DemoPanel>
    </DemoPage>
}`,..._.parameters?.docs?.source}}},v=[`VisualMatrix`]}))();export{_ as VisualMatrix,v as __namedExportsOrder,g as default};
//# sourceMappingURL=QuotaWidget.VisualMatrix.stories-DCNxdFyG.js.map