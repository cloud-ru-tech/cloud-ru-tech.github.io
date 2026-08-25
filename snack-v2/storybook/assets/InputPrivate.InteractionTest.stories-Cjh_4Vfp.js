import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-C96OK3Oq.js";import{d as u,t as d}from"./src-B9vSgby_.js";import{n as f,t as p}from"./testIds-BQtrq6hu.js";var m,h,g,_,v,y,b,x,S;t((()=>{d(),m=e(n(),1),c(),f(),h=r(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Foundation & utilities/InputPrivate/Tests/Interaction`,id:`components-inputprivate-tests-interaction`,component:u,parameters:{layout:`fullscreen`,figma:{disable:!0},controls:{disable:!0}},args:{placeholder:`Введите значение`,onChange:_(),onFocus:_(),onBlur:_(),onClick:_(),onKeyDown:_(),"data-test-id":p.root}},x={tags:[`test`,`dev`],render:function(e){let[t,n]=(0,m.useState)(``);return(0,h.jsx)(l,{children:(0,h.jsxs)(a,{children:[(0,h.jsx)(s,{children:`InteractionTest`}),(0,h.jsx)(o,{children:`Контролируемый input для покрытия onChange/onClick/onFocus/onBlur/onKeyDown.`}),(0,h.jsx)(i,{align:`center`,children:(0,h.jsx)(u,{...e,value:t,onChange:(t,r)=>{n(t),e.onChange?.(t,r)}})})]})})},play:async({args:e,canvasElement:t,step:n})=>{let r=y(t).getByTestId(p.root);await n(`click + type: onClick + onChange fired, value mirrored`,async()=>{await v.click(r),g(e.onClick).toHaveBeenCalled(),await v.type(r,`hi`),g(e.onChange).toHaveBeenCalled(),g(r.value).toBe(`hi`)}),await n(`keyboard: onKeyDown fired on ArrowLeft`,async()=>{await v.keyboard(`{ArrowLeft}`),g(e.onKeyDown).toHaveBeenCalled()}),await n(`blur: onBlur fired`,async()=>{r.blur(),g(e.onBlur).toHaveBeenCalled()})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: function RenderControlled(args) {
    const [value, setValue] = useState('');
    return <DemoPage>
        <DemoPanel>
          <DemoTitle>InteractionTest</DemoTitle>
          <DemoHint>Контролируемый input для покрытия onChange/onClick/onFocus/onBlur/onKeyDown.</DemoHint>
          <DemoActions align='center'>
            <InputPrivate {...args} value={value} onChange={(next, event) => {
            setValue(next);
            args.onChange?.(next, event);
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
    const input = within(canvasElement).getByTestId(TEST_IDS.root) as HTMLInputElement;
    await step('click + type: onClick + onChange fired, value mirrored', async () => {
      await userEvent.click(input);
      expect(args.onClick).toHaveBeenCalled();
      await userEvent.type(input, 'hi');
      expect(args.onChange).toHaveBeenCalled();
      expect(input.value).toBe('hi');
    });
    await step('keyboard: onKeyDown fired on ArrowLeft', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      expect(args.onKeyDown).toHaveBeenCalled();
    });
    await step('blur: onBlur fired', async () => {
      input.blur();
      expect(args.onBlur).toHaveBeenCalled();
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`]}))();export{x as InteractionTest,S as __namedExportsOrder,b as default};
//# sourceMappingURL=InputPrivate.InteractionTest.stories-Cjh_4Vfp.js.map