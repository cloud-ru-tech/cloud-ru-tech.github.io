import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-DMWsC78w.js";import{_ as u,f as d,t as f}from"./src-BFU3zVng.js";import{n as p,t as m}from"./testIds-qlmU7fvP.js";import{n as h,t as g}from"./styles.module-D2g0QyK7.js";var _,v,y,b,x,S,C,w,T,E,D;t((()=>{f(),_=e(n(),1),c(),p(),g(),v=r(),{expect:y,fn:b,userEvent:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Snack/Inputs & Forms/Toggles/Radio/Examples/Group`,id:`components-toggles-radio-examples-group`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}}},w=b(),T=b(),E={tags:[`test`,`dev`],args:{onChange:w},render:function(){let[e,t]=(0,_.useState)(null);return(0,v.jsx)(l,{children:(0,v.jsxs)(a,{children:[(0,v.jsx)(s,{children:`Group`}),(0,v.jsx)(o,{children:`Группа Radio: нативная взаимная эксклюзивность через атрибут name.`}),(0,v.jsx)(i,{align:`center`,children:(0,v.jsxs)(`div`,{className:h.group,children:[(0,v.jsx)(d,{size:u.XS,name:`radio-group`,value:`a`,checked:e===`a`,onChange:e=>{w(e),e&&t(`a`)},"data-test-id":m.radioGroup.a}),(0,v.jsx)(d,{size:u.XS,name:`radio-group`,value:`b`,checked:e===`b`,onChange:e=>{T(e),e&&t(`b`)},"data-test-id":m.radioGroup.b})]})})]})})},play:async({canvasElement:e,step:t})=>{w.mockClear(),T.mockClear();let n=S(e),r=n.getByTestId(`radio-a-native-input`),i=n.getByTestId(`radio-b-native-input`);await t(`click A: onChange(true), A is checked`,async()=>{await x.click(r),y(w).toHaveBeenCalledTimes(1),y(w).toHaveBeenLastCalledWith(!0),await y(r).toBeChecked()}),await t(`click B: native mutual exclusion — A loses DOM checked, B onChange(true)`,async()=>{await x.click(i),y(T).toHaveBeenCalledTimes(1),y(T).toHaveBeenLastCalledWith(!0),await y(i).toBeChecked(),await y(r).not.toBeChecked()})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    onChange: onChangeA
  },
  render: function RenderRadioGroup() {
    const [selected, setSelected] = useState<'a' | 'b' | null>(null);
    return <DemoPage>
        <DemoPanel>
          <DemoTitle>Group</DemoTitle>
          <DemoHint>Группа Radio: нативная взаимная эксклюзивность через атрибут name.</DemoHint>
          <DemoActions align='center'>
            <div className={styles.group}>
              <Radio size={SIZE.XS} name='radio-group' value='a' checked={selected === 'a'} onChange={next => {
              onChangeA(next);
              if (next) setSelected('a');
            }} data-test-id={TEST_IDS.radioGroup.a} />
              <Radio size={SIZE.XS} name='radio-group' value='b' checked={selected === 'b'} onChange={next => {
              onChangeB(next);
              if (next) setSelected('b');
            }} data-test-id={TEST_IDS.radioGroup.b} />
            </div>
          </DemoActions>
        </DemoPanel>
      </DemoPage>;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    onChangeA.mockClear();
    onChangeB.mockClear();
    const canvas = within(canvasElement);
    const inputA = canvas.getByTestId('radio-a-native-input') as HTMLInputElement;
    const inputB = canvas.getByTestId('radio-b-native-input') as HTMLInputElement;
    await step('click A: onChange(true), A is checked', async () => {
      await userEvent.click(inputA);
      expect(onChangeA).toHaveBeenCalledTimes(1);
      expect(onChangeA).toHaveBeenLastCalledWith(true);
      await expect(inputA).toBeChecked();
    });
    await step('click B: native mutual exclusion — A loses DOM checked, B onChange(true)', async () => {
      await userEvent.click(inputB);
      expect(onChangeB).toHaveBeenCalledTimes(1);
      expect(onChangeB).toHaveBeenLastCalledWith(true);
      await expect(inputB).toBeChecked();
      await expect(inputA).not.toBeChecked();
    });
  }
}`,...E.parameters?.docs?.source}}},D=[`Group`]}))();export{E as Group,D as __namedExportsOrder,C as default};
//# sourceMappingURL=Radio.Group.stories-Co-Fyp0h.js.map