import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{d as i,f as a,g as o,p as s,t as c}from"./iframe-CH0ThVYh.js";import{s as l,t as u}from"./src-DTonsfx-.js";import{S as d,a as f,i as p,n as m,o as h,r as g,s as _}from"./fixtures-DWZx4NC0.js";import{n as v,t as y}from"./testIds-5yIUSd0Y.js";function b(e){let t=h(),[n,r]=(0,x.useState)([]),[i,a]=(0,x.useState)(0),[o,s]=(0,x.useState)(!0),c=()=>{a(e=>e+1),r([])},l=()=>s(!1);return(0,S.jsx)(d,{...e,value:n,onChange:r,onSubmit:c,placeholder:t.slashPlaceholder,searchPlaceholder:t.searchPlaceholder,skills:t.skills,mentions:t.mentions,banner:o?(0,S.jsx)(m,{onClose:l}):void 0,footerLeftActions:(0,S.jsx)(g,{}),footerRightActions:(0,S.jsx)(p,{}),disclaimer:i?t.sentMessages(i):void 0})}var x,S,C,w,T,E,D,O,k,A;t((()=>{u(),_(),x=e(n(),1),c(),f(),v(),S=r(),{expect:C,fn:w,userEvent:T,waitFor:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`AI/Surfaces/AiFieldInput/Examples/SlashCommands`,id:`ai-aifieldinput-examples-slashcommands`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onActionSelect:w(),"data-test-id":y.root}},k={tags:[`dev`,`test`],render:e=>(0,S.jsx)(a,{children:(0,S.jsxs)(s,{width:`wide`,children:[(0,S.jsx)(o,{children:`SlashCommands`}),(0,S.jsx)(i,{children:`«/» открывает скиллы, «@» — упоминания: список встаёт над полем, не меняя высоту, выбор строки вставляет чип и возвращает баннер.`}),(0,S.jsx)(b,{...e})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=D(t),i=await r.findByTestId(y.editor);await n(`slash: list opens over the hidden banner`,async()=>{await T.click(i),await T.keyboard(`/`),await C(await r.findByTestId(y.actionList)).toBeVisible(),await C(r.getByTestId(l.root)).not.toBeVisible()}),await n(`query without matches shows the empty row`,async()=>{await T.keyboard(`zzz`),await C(await r.findByTestId(y.actionListEmpty)).toBeVisible(),await T.keyboard(`{Backspace}{Backspace}{Backspace}`),await E(()=>C(r.queryByTestId(y.actionListEmpty)).toBeNull())}),await n(`drill-down opens the next level with the back row`,async()=>{await T.click(r.getByTestId(`agents`)),await C(await r.findByTestId(y.actionListBack)).toBeVisible(),await C(r.getByTestId(`hermes`)).toBeVisible(),await T.click(r.getByTestId(y.actionListBack)),await C(await r.findByTestId(`summarize`)).toBeVisible()}),await n(`selection inserts a chip and brings the banner back`,async()=>{await T.click(r.getByTestId(`summarize`)),await E(()=>C(r.getAllByTestId(y.chip)).toHaveLength(1)),C(e.onActionSelect).toHaveBeenCalledWith(C.objectContaining({id:`summarize`}),`/`),await C(r.queryByTestId(y.actionList)).toBeNull(),await C(r.getByTestId(l.root)).toBeVisible()}),await n(`banner close button hides the banner`,async()=>{await T.click(r.getByTestId(l.close)),await E(()=>C(r.queryByTestId(l.root)).toBeNull())})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>SlashCommands</DemoTitle>
        <DemoHint>
          «/» открывает скиллы, «@» — упоминания: список встаёт над полем, не меняя высоту, выбор строки вставляет чип и
          возвращает баннер.
        </DemoHint>
        <SlashCommandsDemo {...args} />
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const editor = await canvas.findByTestId(TEST_IDS.editor);
    await step('slash: list opens over the hidden banner', async () => {
      await userEvent.click(editor);
      await userEvent.keyboard('/');
      await expect(await canvas.findByTestId(TEST_IDS.actionList)).toBeVisible();
      await expect(canvas.getByTestId(BANNER_TEST_IDS.root)).not.toBeVisible();
    });
    await step('query without matches shows the empty row', async () => {
      await userEvent.keyboard('zzz');
      await expect(await canvas.findByTestId(TEST_IDS.actionListEmpty)).toBeVisible();
      await userEvent.keyboard('{Backspace}{Backspace}{Backspace}');
      await waitFor(() => expect(canvas.queryByTestId(TEST_IDS.actionListEmpty)).toBeNull());
    });
    await step('drill-down opens the next level with the back row', async () => {
      await userEvent.click(canvas.getByTestId('agents'));
      await expect(await canvas.findByTestId(TEST_IDS.actionListBack)).toBeVisible();
      await expect(canvas.getByTestId('hermes')).toBeVisible();
      await userEvent.click(canvas.getByTestId(TEST_IDS.actionListBack));
      await expect(await canvas.findByTestId('summarize')).toBeVisible();
    });
    await step('selection inserts a chip and brings the banner back', async () => {
      await userEvent.click(canvas.getByTestId('summarize'));
      await waitFor(() => expect(canvas.getAllByTestId(TEST_IDS.chip)).toHaveLength(1));
      expect(args.onActionSelect).toHaveBeenCalledWith(expect.objectContaining({
        id: 'summarize'
      }), '/');
      await expect(canvas.queryByTestId(TEST_IDS.actionList)).toBeNull();
      await expect(canvas.getByTestId(BANNER_TEST_IDS.root)).toBeVisible();
    });
    await step('banner close button hides the banner', async () => {
      await userEvent.click(canvas.getByTestId(BANNER_TEST_IDS.close));
      await waitFor(() => expect(canvas.queryByTestId(BANNER_TEST_IDS.root)).toBeNull());
    });
  }
}`,...k.parameters?.docs?.source}}},A=[`SlashCommands`]}))();export{k as SlashCommands,A as __namedExportsOrder,O as default};
//# sourceMappingURL=AiFieldInput.SlashCommands.stories-CsM-vRPi.js.map