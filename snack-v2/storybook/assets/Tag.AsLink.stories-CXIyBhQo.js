import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{i as c,o as l,t as u}from"./src-DSMrXPCa.js";import{n as d,t as f}from"./testIds-DIfGbMKC.js";var p,m,h,g,_,v;e((()=>{u(),o(),d(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Snack/Data display/Tag/Tag/Examples/AsLink`,id:`components-tag-tag-examples-aslink`,component:c,parameters:{layout:`fullscreen`}},_={tags:[`dev`,`test`],render:()=>(0,p.jsx)(r,{children:(0,p.jsxs)(a,{children:[(0,p.jsx)(i,{children:`AsLink`}),(0,p.jsx)(n,{children:`Тег как ссылка: href, target=_blank.`}),(0,p.jsxs)(s,{align:`center`,children:[(0,p.jsx)(c,{label:`Документация`,href:`https://example.com`,"data-test-id":f.tag.docs}),(0,p.jsx)(c,{appearance:l.Blue,label:`Frontend`,href:`https://example.com/tags/frontend`,target:`_blank`,"data-test-id":f.tag.frontend})]})]})}),play:async({canvasElement:e})=>{let t=h(e);await m(t.getByTestId(f.tag.docs)).toBeVisible(),await m(t.getByTestId(f.tag.frontend)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>AsLink</DemoTitle>
        <DemoHint>Тег как ссылка: href, target=_blank.</DemoHint>
        <DemoActions align='center'>
          <Tag label='Документация' href='https://example.com' data-test-id={TEST_IDS.tag.docs} />
          <Tag appearance={APPEARANCE.Blue} label='Frontend' href='https://example.com/tags/frontend' target='_blank' data-test-id={TEST_IDS.tag.frontend} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const root = within(canvasElement);
    await expect(root.getByTestId(TEST_IDS.tag.docs)).toBeVisible();
    await expect(root.getByTestId(TEST_IDS.tag.frontend)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`AsLink`]}))();export{_ as AsLink,v as __namedExportsOrder,g as default};
//# sourceMappingURL=Tag.AsLink.stories-CXIyBhQo.js.map