import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-Bd5xtg2w.js";import{i as u,n as d,t as f}from"./src-CiEJ7Mru.js";import{n as p,t as m}from"./testIds-D6LEUVzW.js";var h,g,_,v,y,b,x,S,C;t((()=>{f(),h=e(n(),1),c(),p(),g=r(),{expect:_,fn:v,userEvent:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Inputs & Forms/Search/Tests/Interaction`,id:`components-search-tests-interaction`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{size:u.S,placeholder:`Поиск`,background:!0,outline:!0,onChange:v(),onSubmit:v(),"data-test-id":m.root}},S={tags:[`test`,`dev`],render:function(e){let[t,n]=(0,h.useState)(``);return(0,g.jsx)(l,{children:(0,g.jsxs)(a,{children:[(0,g.jsx)(s,{children:`InteractionTest`}),(0,g.jsx)(o,{children:`Ввод, очистка и Enter в поле поиска.`}),(0,g.jsx)(i,{block:!0,children:(0,g.jsx)(d,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})})]})})},play:async({args:e,canvasElement:t,step:n})=>{let r=b(t),i=r.getByTestId(m.input);await n(`type: onChange fired per keystroke, last call holds full value`,async()=>{await y.click(i),await y.type(i,`abc`),_(e.onChange).toHaveBeenCalled(),_(e.onChange).toHaveBeenLastCalledWith(`abc`)}),await n(`keyboard Enter: onSubmit fired with current value`,async()=>{await y.keyboard(`{Enter}`),_(e.onSubmit).toHaveBeenCalledTimes(1),_(e.onSubmit).toHaveBeenLastCalledWith(`abc`)}),await n(`click clear button: onChange fired with empty string`,async()=>{let t=r.getByTestId(m.clearButton);await y.click(t),_(e.onChange).toHaveBeenLastCalledWith(``)})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: function RenderControlledSearch(args) {
    const [value, setValue] = useState('');
    return <DemoPage>
        <DemoPanel>
          <DemoTitle>InteractionTest</DemoTitle>
          <DemoHint>Ввод, очистка и Enter в поле поиска.</DemoHint>
          <DemoActions block>
            <Search {...args} value={value} onChange={next => {
            setValue(next);
            args.onChange?.(next);
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
    const input = canvas.getByTestId(TEST_IDS.input) as HTMLInputElement;
    await step('type: onChange fired per keystroke, last call holds full value', async () => {
      await userEvent.click(input);
      await userEvent.type(input, 'abc');
      expect(args.onChange).toHaveBeenCalled();
      expect(args.onChange).toHaveBeenLastCalledWith('abc');
    });
    await step('keyboard Enter: onSubmit fired with current value', async () => {
      await userEvent.keyboard('{Enter}');
      expect(args.onSubmit).toHaveBeenCalledTimes(1);
      expect(args.onSubmit).toHaveBeenLastCalledWith('abc');
    });
    await step('click clear button: onChange fired with empty string', async () => {
      const clearBtn = canvas.getByTestId(TEST_IDS.clearButton);
      await userEvent.click(clearBtn);
      expect(args.onChange).toHaveBeenLastCalledWith('');
    });
  }
}`,...S.parameters?.docs?.source}}},C=[`InteractionTest`]}))();export{S as InteractionTest,C as __namedExportsOrder,x as default};
//# sourceMappingURL=Search.InteractionTest.stories-1DFxqi2q.js.map