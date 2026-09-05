import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-C2bZDhP2.js";import{n as c,t as l,w as u}from"./src-5N5EnYa1.js";import{n as d,t as f}from"./testIds-D1rBkYOW.js";var p,m,h,g,_,v;e((()=>{l(),o(),d(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`AI/Primitives/AiTool/Atoms/AiToolBadge/Examples/Polymorphic`,id:`ai-aitool-atoms-aitoolbadge-examples-polymorphic`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}}},_={tags:[`dev`,`test`],render:()=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`Polymorphic`}),(0,p.jsx)(i,{children:`Бейдж как ссылка: as='a' + href + target.`}),(0,p.jsx)(n,{align:`center`,children:(0,p.jsx)(c,{as:`a`,href:`/cloud-resource`,target:`_blank`,badgeType:u.CloudRu,label:`resource-name`,"data-test-id":f.badge})})]})}),play:async({canvasElement:e})=>{let t=h(e).getByTestId(f.badge);await m(t).toHaveAttribute(`href`,`/cloud-resource`)}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>Polymorphic</DemoTitle>
        <DemoHint>Бейдж как ссылка: as=&apos;a&apos; + href + target.</DemoHint>
        <DemoActions align='center'>
          <AiToolBadge as='a' href='/cloud-resource' target='_blank' badgeType={AI_TOOL_BADGE_TYPE.CloudRu} label='resource-name' data-test-id={TEST_IDS.badge} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const badge = within(canvasElement).getByTestId(TEST_IDS.badge);
    await expect(badge).toHaveAttribute('href', '/cloud-resource');
  }
}`,..._.parameters?.docs?.source}}},v=[`Polymorphic`]}))();export{_ as Polymorphic,v as __namedExportsOrder,g as default};
//# sourceMappingURL=AiToolBadge.Polymorphic.stories-BVldmTI6.js.map