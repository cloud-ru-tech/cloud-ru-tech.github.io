import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BRJzdrhE.js";import{n as c,t as l,w as u}from"./src-BztXsaJY.js";import{n as d,t as f}from"./testIds-DkJbPRND.js";var p,m,h,g,_,v,y,b;e((()=>{l(),o(),d(),p=t(),{expect:m,fn:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`AI/Primitives/AiTool/Atoms/AiToolBadge/Tests/Interaction`,id:`ai-aitool-atoms-aitoolbadge-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{label:`resource-name`,badgeType:u.CloudRu,onClick:h(),"data-test-id":f.badge}},y={tags:[`test`,`dev`],render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`Interaction`}),(0,p.jsx)(i,{children:`Проверяет, что нажатие на бейдж вызывает обработчик клика.`}),(0,p.jsx)(n,{align:`center`,children:(0,p.jsx)(c,{...e,onClick:()=>e.onClick?.()})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=_(t);await n(`click badge: onClick fires`,async()=>{await g.click(r.getByTestId(f.badge)),m(e.onClick).toHaveBeenCalledTimes(1)})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Interaction</DemoTitle>
        <DemoHint>Проверяет, что нажатие на бейдж вызывает обработчик клика.</DemoHint>
        <DemoActions align='center'>
          {/* onClick зовём без события: spy не хранит MouseEvent, иначе Storybook падает на сериализации event.view (cross-origin) в Interactions-панели */}
          <AiToolBadge {...args} onClick={() => args.onClick?.()} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click badge: onClick fires', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.badge));
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`InteractionTest`]}))();export{y as InteractionTest,b as __namedExportsOrder,v as default};
//# sourceMappingURL=AiToolBadge.InteractionTest.stories-2u4dItCh.js.map