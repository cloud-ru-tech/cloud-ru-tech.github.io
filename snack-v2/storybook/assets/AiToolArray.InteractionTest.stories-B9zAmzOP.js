import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-XppXgSyX.js";import{c as u,i as d,t as f}from"./src-DJ9PlZXP.js";import{n as p,t as m}from"./testIds-Cbrb4Fqc.js";var h,g,_,v,y,b,x,S;t((()=>{f(),h=e(n(),1),c(),p(),g=r(),{expect:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`AI/Primitives/AiTool/Content/AiToolArray/Tests/Interaction`,id:`ai-aitool-content-aitoolarray-tests-interaction`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{name:`Key[ArrayName]`,count:1,unit:`шт.`,"data-test-id":m.array}},x={tags:[`test`,`dev`],render:function(e){let[t,n]=(0,h.useState)(!1);return(0,g.jsx)(l,{children:(0,g.jsxs)(a,{width:`narrow`,children:[(0,g.jsx)(s,{children:`Interaction`}),(0,g.jsx)(o,{children:`Проверяет, что нажатие на шеврон раскрывает и снова сворачивает список.`}),(0,g.jsx)(i,{block:!0,children:(0,g.jsx)(d,{...e,open:t,onOpenChange:n,children:(0,g.jsx)(u,{label:`0`,value:`alpha`,"data-test-id":`ai-tool-array-child`})})})]})})},play:async({canvasElement:e,step:t})=>{let n=y(e);await t(`closed: items are absent`,async()=>{_(n.queryByTestId(`ai-tool-array-child`)).toBeNull()}),await t(`click chevron: items appear`,async()=>{await v.click(n.getByTestId(m.arrayToggle)),await _(n.getByTestId(`ai-tool-array-child`)).toBeVisible()}),await t(`click chevron again: items collapse`,async()=>{await v.click(n.getByTestId(m.arrayToggle)),_(n.queryByTestId(`ai-tool-array-child`)).toBeNull()})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: function Render(args: AiToolArrayProps) {
    const [open, setOpen] = useState(false);
    return <DemoPage>
        <DemoPanel width='narrow'>
          <DemoTitle>Interaction</DemoTitle>
          <DemoHint>Проверяет, что нажатие на шеврон раскрывает и снова сворачивает список.</DemoHint>
          <DemoActions block>
            <AiToolArray {...args} open={open} onOpenChange={setOpen}>
              <AiToolKeyValue label='0' value='alpha' data-test-id='ai-tool-array-child' />
            </AiToolArray>
          </DemoActions>
        </DemoPanel>
      </DemoPage>;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('closed: items are absent', async () => {
      expect(canvas.queryByTestId('ai-tool-array-child')).toBeNull();
    });
    await step('click chevron: items appear', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.arrayToggle));
      await expect(canvas.getByTestId('ai-tool-array-child')).toBeVisible();
    });
    await step('click chevron again: items collapse', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.arrayToggle));
      expect(canvas.queryByTestId('ai-tool-array-child')).toBeNull();
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`]}))();export{x as InteractionTest,S as __namedExportsOrder,b as default};
//# sourceMappingURL=AiToolArray.InteractionTest.stories-B9zAmzOP.js.map