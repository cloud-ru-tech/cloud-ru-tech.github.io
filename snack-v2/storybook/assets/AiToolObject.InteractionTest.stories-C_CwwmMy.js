import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-CRw8NhXI.js";import{c as u,o as d,t as f}from"./src-DH4LvopH.js";import{n as p,t as m}from"./testIds-BdXNakzP.js";var h,g,_,v,y,b,x,S;t((()=>{f(),h=e(n(),1),c(),p(),g=r(),{expect:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`AI/Primitives/AiTool/Content/AiToolObject/Tests/Interaction`,id:`ai-aitool-content-aitoolobject-tests-interaction`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{name:`Key[ObjectName]`,"data-test-id":m.object}},x={tags:[`test`,`dev`],render:function(e){let[t,n]=(0,h.useState)(!1);return(0,g.jsx)(l,{children:(0,g.jsxs)(a,{width:`narrow`,children:[(0,g.jsx)(s,{children:`Interaction`}),(0,g.jsx)(o,{children:`Проверяет, что нажатие на шеврон раскрывает и снова сворачивает вложенное дерево.`}),(0,g.jsx)(i,{block:!0,children:(0,g.jsx)(d,{...e,open:t,onOpenChange:n,children:(0,g.jsx)(u,{label:`region`,value:`ru-central1`,"data-test-id":`ai-tool-object-child`})})})]})})},play:async({canvasElement:e,step:t})=>{let n=y(e);await t(`closed: nested content is absent`,async()=>{_(n.queryByTestId(`ai-tool-object-child`)).toBeNull()}),await t(`click chevron: nested content appears`,async()=>{await v.click(n.getByTestId(m.objectToggle)),await _(n.getByTestId(`ai-tool-object-child`)).toBeVisible()}),await t(`click chevron again: nested content collapses`,async()=>{await v.click(n.getByTestId(m.objectToggle)),_(n.queryByTestId(`ai-tool-object-child`)).toBeNull()})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: function Render(args: AiToolObjectProps) {
    const [open, setOpen] = useState(false);
    return <DemoPage>
        <DemoPanel width='narrow'>
          <DemoTitle>Interaction</DemoTitle>
          <DemoHint>Проверяет, что нажатие на шеврон раскрывает и снова сворачивает вложенное дерево.</DemoHint>
          <DemoActions block>
            <AiToolObject {...args} open={open} onOpenChange={setOpen}>
              <AiToolKeyValue label='region' value='ru-central1' data-test-id='ai-tool-object-child' />
            </AiToolObject>
          </DemoActions>
        </DemoPanel>
      </DemoPage>;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('closed: nested content is absent', async () => {
      expect(canvas.queryByTestId('ai-tool-object-child')).toBeNull();
    });
    await step('click chevron: nested content appears', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.objectToggle));
      await expect(canvas.getByTestId('ai-tool-object-child')).toBeVisible();
    });
    await step('click chevron again: nested content collapses', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.objectToggle));
      expect(canvas.queryByTestId('ai-tool-object-child')).toBeNull();
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`]}))();export{x as InteractionTest,S as __namedExportsOrder,b as default};
//# sourceMappingURL=AiToolObject.InteractionTest.stories-C_CwwmMy.js.map