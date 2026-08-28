import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-SlIP-akt.js";import{g as c,m as l,n as u,p as d,t as f}from"./testIds-D5Jvl5RO.js";import{a as p,i as m,n as h,r as g,t as _}from"./playgroundShared-CV7Y-PDf.js";import{n as v,t as y}from"./stories.module-C33z7nHF.js";var b,x,S,C,w,T,E,D;e((()=>{d(),o(),p(),_(),y(),u(),b=t(),{useArgs:x}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:S,userEvent:C,within:w}=__STORYBOOK_MODULE_TEST__,T={title:`AI/Surfaces/AiFieldNotice`,id:`ai-aifieldnotice`,component:l,parameters:{layout:`fullscreen`},args:g,argTypes:h},E={render:function(e){let[,t]=x();return(0,b.jsx)(s,{children:(0,b.jsxs)(r,{children:[(0,b.jsx)(a,{children:`Playground`}),(0,b.jsx)(i,{children:"Композиция `AiFieldBanner` + `AiQueue`. Для проверки frosted-glass на фоне чата откройте story «Examples/Backdrop blur»."}),(0,b.jsx)(n,{align:`start`,children:(0,b.jsx)(`div`,{className:v.playgroundPlain,children:(0,b.jsx)(l,{...m(e,t)},e.variant)})})]})})},tags:[`dev`,`test`],play:async({canvasElement:e,args:t})=>{let n=w(e);await S(n.getByTestId(f.root)).toBeVisible(),t.variant===c.Queue?await S(n.getByTestId(f.queue)).toBeVisible():t.variant&&(await S(n.getByTestId(f.bannerContent)).toBeVisible(),await C.click(n.getByTestId(f.bannerAction)))}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [, updateArgs] = useArgs<PlaygroundStoryArgs>();
    return <DemoPage>
        <DemoPanel>
          <DemoTitle>Playground</DemoTitle>
          <DemoHint>
            Композиция \`AiFieldBanner\` + \`AiQueue\`. Для проверки frosted-glass на фоне чата откройте story
            «Examples/Backdrop blur».
          </DemoHint>
          <DemoActions align='start'>
            <div className={styles.playgroundPlain}>
              <AiFieldNotice key={args.variant} {...buildNoticeProps(args, updateArgs)} />
            </div>
          </DemoActions>
        </DemoPanel>
      </DemoPage>;
  },
  tags: ['dev', 'test'],
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId(TEST_IDS.root)).toBeVisible();
    if (args.variant === VARIANT.Queue) {
      await expect(canvas.getByTestId(TEST_IDS.queue)).toBeVisible();
    } else if (args.variant) {
      await expect(canvas.getByTestId(TEST_IDS.bannerContent)).toBeVisible();
      await userEvent.click(canvas.getByTestId(TEST_IDS.bannerAction));
    }
  }
}`,...E.parameters?.docs?.source}}},D=[`Playground`]}))();export{E as Playground,D as __namedExportsOrder,T as default};
//# sourceMappingURL=AiFieldNotice.Playground.stories-C1Qt7gar.js.map