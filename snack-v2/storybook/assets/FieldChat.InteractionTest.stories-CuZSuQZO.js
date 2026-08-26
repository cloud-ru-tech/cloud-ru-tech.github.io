import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-D1b9r8k6.js";import{O as u,t as d}from"./src-ZPOJ47VN.js";import{M as f,j as p,k as m,t as h}from"./src-BcWGt0ns.js";import{n as g,t as _}from"./styles.module-Ce2xHgbH.js";var v,y,b,x,S,C,w,T,E;t((()=>{d(),h(),v=e(n(),1),c(),f(),_(),y=r(),{expect:b,fn:x,userEvent:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldChat/Tests/Interaction`,id:`uikit-product-fieldspredefined-fieldchat-tests-interaction`,component:m,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{handleSubmit:x(),"data-test-id":p.fieldChat}},T={tags:[`test`,`dev`],render:function(e){let[t,n]=(0,v.useState)(``);return(0,y.jsx)(l,{children:(0,y.jsxs)(a,{children:[(0,y.jsx)(s,{children:`InteractionTest`}),(0,y.jsx)(o,{children:`Enter отправляет сообщение и очищает поле; Shift+Enter переносит строку без отправки.`}),(0,y.jsx)(i,{align:`center`,children:(0,y.jsx)(`div`,{className:g.panel,children:(0,y.jsx)(m,{...e,value:t,onChange:n,handleSubmit:t=>{e.handleSubmit?.(t),n(``)}})})})]})})},play:async({args:e,canvasElement:t,step:n})=>{let r=C(t).getByTestId(u.fieldTextAreaInput);await n(`empty field: Enter does not submit`,async()=>{r.focus(),await S.keyboard(`{Enter}`),b(e.handleSubmit).not.toHaveBeenCalled()}),await n(`text + Enter: submits value and clears field`,async()=>{await S.type(r,`Hello`),await S.keyboard(`{Enter}`),b(e.handleSubmit).toHaveBeenCalledTimes(1),b(e.handleSubmit).toHaveBeenLastCalledWith(`Hello`),b(r).toHaveValue(``)}),await n(`Shift+Enter: inserts newline without submitting`,async()=>{await S.type(r,`line one`),await S.keyboard(`{Shift>}{Enter}{/Shift}`),await S.type(r,`line two`),b(e.handleSubmit).toHaveBeenCalledTimes(1),b(r).toHaveValue(`line one
line two`)})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: function Render(args) {
    const [value, setValue] = useState('');
    return <DemoPage>
        <DemoPanel>
          <DemoTitle>InteractionTest</DemoTitle>
          <DemoHint>Enter отправляет сообщение и очищает поле; Shift+Enter переносит строку без отправки.</DemoHint>
          <DemoActions align='center'>
            <div className={styles.panel}>
              <FieldChat {...args} value={value} onChange={setValue} handleSubmit={submitted => {
              args.handleSubmit?.(submitted);
              setValue('');
            }} />
            </div>
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
    const input = canvas.getByTestId(FIELD_TEST_IDS.fieldTextAreaInput);
    await step('empty field: Enter does not submit', async () => {
      input.focus();
      await userEvent.keyboard('{Enter}');
      expect(args.handleSubmit).not.toHaveBeenCalled();
    });
    await step('text + Enter: submits value and clears field', async () => {
      await userEvent.type(input, 'Hello');
      await userEvent.keyboard('{Enter}');
      expect(args.handleSubmit).toHaveBeenCalledTimes(1);
      expect(args.handleSubmit).toHaveBeenLastCalledWith('Hello');
      expect(input).toHaveValue('');
    });
    await step('Shift+Enter: inserts newline without submitting', async () => {
      await userEvent.type(input, 'line one');
      await userEvent.keyboard('{Shift>}{Enter}{/Shift}');
      await userEvent.type(input, 'line two');
      expect(args.handleSubmit).toHaveBeenCalledTimes(1);
      expect(input).toHaveValue('line one\\nline two');
    });
  }
}`,...T.parameters?.docs?.source}}},E=[`InteractionTest`]}))();export{T as InteractionTest,E as __namedExportsOrder,w as default};
//# sourceMappingURL=FieldChat.InteractionTest.stories-CuZSuQZO.js.map