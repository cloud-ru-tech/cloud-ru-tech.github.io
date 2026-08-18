import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-Du0zU9lI.js";import{g as u,i as d,t as f}from"./src-NMYuwSlG.js";import{i as p,n as m,r as h,t as g}from"./styles.module-CpCkimTi.js";function _({onChangeSingle:e,onChangeMultiple:t}){let[n,r]=(0,v.useState)(void 0),[i,a]=(0,v.useState)([]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d,{selectionMode:u.Single,value:n,onChange:t=>{r(t??void 0),e?.(t??void 0)},children:(0,y.jsx)(`div`,{className:m.toggleGroup,children:T.map(e=>(0,y.jsx)(p,{id:`single-${e.id}`,label:e.label},`s-${e.id}`))})}),(0,y.jsx)(d,{selectionMode:u.Multiple,value:i,onChange:e=>{let n=e??[];a(n),t?.(n)},children:(0,y.jsx)(`div`,{className:m.toggleGroup,children:T.map(e=>(0,y.jsx)(p,{id:`multiple-${e.id}`,label:e.label},`m-${e.id}`))})})]})}var v,y,b,x,S,C,w,T,E,D,O;t((()=>{f(),v=e(n(),1),c(),h(),g(),y=r(),{expect:b,fn:x,userEvent:S,waitFor:C,within:w}=__STORYBOOK_MODULE_TEST__,T=[{id:`a`,label:`A`},{id:`b`,label:`B`}],E={title:`Snack/Inputs & Forms/Toggles/ToggleGroup/Tests/Controlled`,id:`components-toggles-togglegroup-tests-controlled`,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onChangeSingle:x(),onChangeMultiple:x()}},D={tags:[`test`,`dev`],render:e=>(0,y.jsx)(l,{children:(0,y.jsxs)(a,{children:[(0,y.jsx)(s,{children:`Controlled`}),(0,y.jsx)(o,{children:`Controlled-режим: внешнее состояние для single и multiple.`}),(0,y.jsx)(i,{align:`center`,children:(0,y.jsx)(_,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=w(t);await n(`single: click A → onChange("single-a")`,async()=>{await S.click(r.getByTestId(`item-single-a`)),b(e.onChangeSingle).toHaveBeenLastCalledWith(`single-a`)}),await n(`single: click B → onChange("single-b")`,async()=>{await S.click(r.getByTestId(`item-single-b`)),b(e.onChangeSingle).toHaveBeenLastCalledWith(`single-b`)}),await n(`multiple: click A → parent state=["multiple-a"]`,async()=>{let t=r.getByTestId(`item-multiple-a`);await S.click(t),b(e.onChangeMultiple).toHaveBeenLastCalledWith([`multiple-a`]),await C(()=>b(t).toHaveAttribute(`data-checked`,`true`))}),await n(`multiple: click B → parent state=["multiple-a","multiple-b"]`,async()=>{let t=r.getByTestId(`item-multiple-a`),n=r.getByTestId(`item-multiple-b`);await S.click(n),b(e.onChangeMultiple).toHaveBeenLastCalledWith([`multiple-a`,`multiple-b`]),await C(()=>b(n).toHaveAttribute(`data-checked`,`true`)),await C(()=>b(t).toHaveAttribute(`data-checked`,`true`))})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Controlled</DemoTitle>
        <DemoHint>Controlled-режим: внешнее состояние для single и multiple.</DemoHint>
        <DemoActions align='center'>
          <ControlledDemo {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('single: click A → onChange("single-a")', async () => {
      await userEvent.click(canvas.getByTestId('item-single-a'));
      expect(args.onChangeSingle).toHaveBeenLastCalledWith('single-a');
    });
    await step('single: click B → onChange("single-b")', async () => {
      await userEvent.click(canvas.getByTestId('item-single-b'));
      expect(args.onChangeSingle).toHaveBeenLastCalledWith('single-b');
    });
    await step('multiple: click A → parent state=["multiple-a"]', async () => {
      const a = canvas.getByTestId('item-multiple-a');
      await userEvent.click(a);
      expect(args.onChangeMultiple).toHaveBeenLastCalledWith(['multiple-a']);
      await waitFor(() => expect(a).toHaveAttribute('data-checked', 'true'));
    });
    await step('multiple: click B → parent state=["multiple-a","multiple-b"]', async () => {
      const a = canvas.getByTestId('item-multiple-a');
      const b = canvas.getByTestId('item-multiple-b');
      await userEvent.click(b);
      expect(args.onChangeMultiple).toHaveBeenLastCalledWith(['multiple-a', 'multiple-b']);
      await waitFor(() => expect(b).toHaveAttribute('data-checked', 'true'));
      await waitFor(() => expect(a).toHaveAttribute('data-checked', 'true'));
    });
  }
}`,...D.parameters?.docs?.source}}},O=[`Controlled`]}))();export{D as Controlled,O as __namedExportsOrder,E as default};
//# sourceMappingURL=ToggleGroup.Controlled.stories-B791dSlK.js.map