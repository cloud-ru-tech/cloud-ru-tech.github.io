import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Bd5xtg2w.js";import{g as c,i as l,t as u}from"./src-Lx_en1of.js";import{i as d,n as f,r as p,t as m}from"./styles.module-Db63NapP.js";var h,g,_,v,y,b,x,S,C,w,T;e((()=>{u(),o(),p(),m(),h=t(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Inputs & Forms/Toggles/ToggleGroup/Tests/Interaction`,id:`components-toggles-togglegroup-tests-interaction`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}}},x=[{id:`a`,label:`A`},{id:`b`,label:`B`}],S=_(),C=_(),w={tags:[`test`,`dev`],render:()=>(0,h.jsx)(s,{children:(0,h.jsxs)(r,{children:[(0,h.jsx)(a,{children:`InteractionTest`}),(0,h.jsx)(i,{children:`Клик переключает выбранные элементы в single и multiple режиме.`}),(0,h.jsx)(n,{align:`center`,children:(0,h.jsx)(l,{selectionMode:c.Single,onChange:S,children:(0,h.jsx)(`div`,{className:f.toggleGroup,children:x.map(e=>(0,h.jsx)(d,{id:`single-${e.id}`,label:e.label},`s-${e.id}`))})})}),(0,h.jsx)(n,{align:`center`,children:(0,h.jsx)(l,{selectionMode:c.Multiple,onChange:C,children:(0,h.jsx)(`div`,{className:f.toggleGroup,children:x.map(e=>(0,h.jsx)(d,{id:`multiple-${e.id}`,label:e.label},`m-${e.id}`))})})})]})}),play:async({canvasElement:e,step:t})=>{S.mockClear(),C.mockClear();let n=y(e);await t(`single: click A → onChange("single-a")`,async()=>{await v.click(n.getByTestId(`item-single-a`)),g(S).toHaveBeenCalledTimes(1),g(S).toHaveBeenLastCalledWith(`single-a`)}),await t(`single: click B → onChange("single-b")`,async()=>{await v.click(n.getByTestId(`item-single-b`)),g(S).toHaveBeenCalledTimes(2),g(S).toHaveBeenLastCalledWith(`single-b`)}),await t(`multiple: click A → onChange(["multiple-a"])`,async()=>{await v.click(n.getByTestId(`item-multiple-a`)),g(C).toHaveBeenCalledTimes(1),g(C).toHaveBeenLastCalledWith([`multiple-a`])}),await t(`multiple: click B → onChange(["multiple-a", "multiple-b"])`,async()=>{await v.click(n.getByTestId(`item-multiple-b`)),g(C).toHaveBeenCalledTimes(2),g(C).toHaveBeenLastCalledWith([`multiple-a`,`multiple-b`])})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик переключает выбранные элементы в single и multiple режиме.</DemoHint>
        <DemoActions align='center'>
          <ToggleGroup selectionMode={SELECTION_MODE.Single} onChange={onChangeSingle}>
            <div className={styles.toggleGroup}>
              {ITEMS.map(props => <ToggleCard key={\`s-\${props.id}\`} id={\`single-\${props.id}\`} label={props.label} />)}
            </div>
          </ToggleGroup>
        </DemoActions>
        <DemoActions align='center'>
          <ToggleGroup selectionMode={SELECTION_MODE.Multiple} onChange={onChangeMultiple}>
            <div className={styles.toggleGroup}>
              {ITEMS.map(props => <ToggleCard key={\`m-\${props.id}\`} id={\`multiple-\${props.id}\`} label={props.label} />)}
            </div>
          </ToggleGroup>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    onChangeSingle.mockClear();
    onChangeMultiple.mockClear();
    const canvas = within(canvasElement);
    await step('single: click A → onChange("single-a")', async () => {
      await userEvent.click(canvas.getByTestId('item-single-a'));
      expect(onChangeSingle).toHaveBeenCalledTimes(1);
      expect(onChangeSingle).toHaveBeenLastCalledWith('single-a');
    });
    await step('single: click B → onChange("single-b")', async () => {
      await userEvent.click(canvas.getByTestId('item-single-b'));
      expect(onChangeSingle).toHaveBeenCalledTimes(2);
      expect(onChangeSingle).toHaveBeenLastCalledWith('single-b');
    });
    await step('multiple: click A → onChange(["multiple-a"])', async () => {
      await userEvent.click(canvas.getByTestId('item-multiple-a'));
      expect(onChangeMultiple).toHaveBeenCalledTimes(1);
      expect(onChangeMultiple).toHaveBeenLastCalledWith(['multiple-a']);
    });
    await step('multiple: click B → onChange(["multiple-a", "multiple-b"])', async () => {
      await userEvent.click(canvas.getByTestId('item-multiple-b'));
      expect(onChangeMultiple).toHaveBeenCalledTimes(2);
      expect(onChangeMultiple).toHaveBeenLastCalledWith(['multiple-a', 'multiple-b']);
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`InteractionTest`]}))();export{w as InteractionTest,T as __namedExportsOrder,b as default};
//# sourceMappingURL=ToggleGroup.InteractionTest.stories-BLqv1lGV.js.map