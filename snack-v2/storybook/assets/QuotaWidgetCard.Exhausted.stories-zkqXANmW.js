import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,f as n,t as r}from"./src-olHW5IYG.js";import{c as i,o as a,r as o}from"./mockData-DkqJwWhB.js";import{n as s}from"./testIds-CaEZXywV.js";import{n as c,t as l}from"./decorators-pHzjIPtL.js";var u,d,f,p;e((()=>{r(),i(),s(),l(),u={title:`Uikit Product/Data display/Quota/QuotaWidgetCard`,id:`uikit-product-quota-quotawidgetcard`,component:t,parameters:{layout:`padded`}},d={tags:[`test`],decorators:[c],args:{quota:o,"data-test-id":n.quotaWidgetCard.root}},f={tags:[`test`],decorators:[c],args:{quota:a,"data-test-id":n.quotaWidgetCard.root}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['test'],
  decorators: [withCardWidth],
  args: {
    quota: MOCK_QUOTA_EXHAUSTED,
    'data-test-id': TEST_IDS.quotaWidgetCard.root
  }
}`,...d.parameters?.docs?.source},description:{story:"Exhausted quota — for Playwright rendering (URL args do not reliably override nested `quota`).",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['test'],
  decorators: [withCardWidth],
  args: {
    quota: MOCK_QUOTA_OVERUSE,
    'data-test-id': TEST_IDS.quotaWidgetCard.root
  }
}`,...f.parameters?.docs?.source},description:{story:`Overuse (remains < 0) — same exhausted UI as zero remains.`,...f.parameters?.docs?.description}}},p=[`Exhausted`,`Overuse`]}))();export{d as Exhausted,f as Overuse,p as __namedExportsOrder,u as default};
//# sourceMappingURL=QuotaWidgetCard.Exhausted.stories-zkqXANmW.js.map