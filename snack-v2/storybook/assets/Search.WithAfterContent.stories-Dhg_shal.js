import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-Bl-uTAel.js";import{U as u,t as d}from"./system-BKJ7G0NG.js";import{a as f,s as p,t as m,u as h}from"./src-DUdgzt3y.js";import{i as g,n as _,t as v}from"./src-ivEFU4L5.js";import{n as y,t as b}from"./testIds-csv0DC9R.js";var x,S,C,w,T,E,D,O,k;t((()=>{m(),d(),v(),x=e(n(),1),c(),y(),S=r(),{expect:C,fn:w,userEvent:T,within:E}=__STORYBOOK_MODULE_TEST__,D={title:`Snack/Inputs & Forms/Search/Examples/WithAfterContent`,id:`components-search-examples-withaftercontent`,component:_,parameters:{layout:`fullscreen`},args:{size:g.M,placeholder:`Поиск`,outline:!0,onSubmit:w(),"data-test-id":b.root}},O={tags:[`dev`,`test`],render:function(e){let[t,n]=(0,x.useState)(``);return(0,S.jsx)(l,{children:(0,S.jsxs)(a,{children:[(0,S.jsx)(s,{children:`WithAfterContent`}),(0,S.jsx)(o,{children:`Кнопка «Найти» в слоте afterContent — внутри поля, справа от кнопки очистки.`}),(0,S.jsx)(i,{block:!0,children:(0,S.jsx)(_,{...e,value:t,onChange:n,afterContent:(0,S.jsx)(f,{"data-test-id":b.afterContentButton,size:e.size,view:h.Function,appearance:p.Neutral,icon:(0,S.jsx)(u,{}),minWidth:!1,onClick:()=>e.onSubmit?.(t)})})})]})})},play:async({args:e,canvasElement:t,step:n})=>{let r=E(t),i=r.getByTestId(b.input),a=r.getByTestId(b.afterContentButton);await n(`type into search input (setup for next step)`,async()=>{await T.click(i),await T.type(i,`query`)}),await n(`click afterContent button: onSubmit fired with current value`,async()=>{await T.click(a),C(e.onSubmit).toHaveBeenCalledTimes(1),C(e.onSubmit).toHaveBeenLastCalledWith(`query`)}),await n(`Enter in input: onSubmit fired again`,async()=>{await T.click(i),await T.keyboard(`{Enter}`),C(e.onSubmit).toHaveBeenCalledTimes(2)})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: function RenderWithAfterContent(args) {
    const [value, setValue] = useState('');
    return <DemoPage>
        <DemoPanel>
          <DemoTitle>WithAfterContent</DemoTitle>
          <DemoHint>Кнопка «Найти» в слоте afterContent — внутри поля, справа от кнопки очистки.</DemoHint>
          <DemoActions block>
            <Search {...args} value={value} onChange={setValue} afterContent={<Button data-test-id={TEST_IDS.afterContentButton} size={args.size} view={VIEW.Function} appearance={APPEARANCE.Neutral} icon={<PlaceholderSVG />} minWidth={false} onClick={() => args.onSubmit?.(value)} />} />
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
    const input = canvas.getByTestId(TEST_IDS.input) as HTMLInputElement;
    const actionButton = canvas.getByTestId(TEST_IDS.afterContentButton);
    await step('type into search input (setup for next step)', async () => {
      await userEvent.click(input);
      await userEvent.type(input, 'query');
    });
    await step('click afterContent button: onSubmit fired with current value', async () => {
      await userEvent.click(actionButton);
      expect(args.onSubmit).toHaveBeenCalledTimes(1);
      expect(args.onSubmit).toHaveBeenLastCalledWith('query');
    });
    await step('Enter in input: onSubmit fired again', async () => {
      await userEvent.click(input);
      await userEvent.keyboard('{Enter}');
      expect(args.onSubmit).toHaveBeenCalledTimes(2);
    });
  }
}`,...O.parameters?.docs?.source}}},k=[`WithAfterContent`]}))();export{O as WithAfterContent,k as __namedExportsOrder,D as default};
//# sourceMappingURL=Search.WithAfterContent.stories-Dhg_shal.js.map