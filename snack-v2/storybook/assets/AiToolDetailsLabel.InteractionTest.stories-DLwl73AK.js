import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-d1MamqAX.js";import{S as u,t as d}from"./src-B07fK4k5.js";import{n as f,t as p}from"./testIds-WQTVFTwp.js";var m,h,g,_,v,y,b,x,S;t((()=>{d(),m=e(n(),1),c(),f(),h=r(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`AI/Primitives/AiTool/Atoms/AiToolDetailsLabel/Tests/Interaction`,id:`ai-aitool-atoms-aitooldetailslabel-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{showSecret:!0,onToggleSecret:_(),"data-test-id":p.detailsLabel}},x={tags:[`test`,`dev`],render:function(e){let[t,n]=(0,m.useState)(!1);return(0,h.jsx)(l,{children:(0,h.jsxs)(a,{width:`narrow`,children:[(0,h.jsx)(s,{children:`Interaction`}),(0,h.jsx)(o,{children:`Проверяет, что нажатие на кнопку-глаз переключает раскрытие секрета.`}),(0,h.jsx)(i,{align:`start`,children:(0,h.jsx)(u,{...e,label:`Ответ`,secretRevealed:t,onToggleSecret:t=>{n(e=>!e),e.onToggleSecret?.(t)}})})]})})},play:async({args:e,canvasElement:t,step:n})=>{let r=y(t);await n(`click secret: onToggleSecret fires`,async()=>{await v.click(r.getByTestId(p.detailsLabelSecret)),g(e.onToggleSecret).toHaveBeenCalledTimes(1)}),await n(`secret button stays reachable after toggle`,async()=>{await g(r.getByTestId(p.detailsLabelSecret)).toBeVisible()})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: function Render(args: AiToolDetailsLabelProps) {
    const [revealed, setRevealed] = useState(false);
    return <DemoPage>
        <DemoPanel width='narrow'>
          <DemoTitle>Interaction</DemoTitle>
          <DemoHint>Проверяет, что нажатие на кнопку-глаз переключает раскрытие секрета.</DemoHint>
          <DemoActions align='start'>
            <AiToolDetailsLabel {...args} label='Ответ' secretRevealed={revealed} onToggleSecret={event => {
            setRevealed(prev => !prev);
            args.onToggleSecret?.(event);
          }} />
          </DemoActions>
        </DemoPanel>
      </DemoPage>;
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click secret: onToggleSecret fires', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.detailsLabelSecret));
      expect(args.onToggleSecret).toHaveBeenCalledTimes(1);
    });
    await step('secret button stays reachable after toggle', async () => {
      await expect(canvas.getByTestId(TEST_IDS.detailsLabelSecret)).toBeVisible();
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`]}))();export{x as InteractionTest,S as __namedExportsOrder,b as default};
//# sourceMappingURL=AiToolDetailsLabel.InteractionTest.stories-DLwl73AK.js.map