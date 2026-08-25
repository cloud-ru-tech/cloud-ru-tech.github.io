import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-C96OK3Oq.js";import{U as i,t as a}from"./system-BZBdoYww.js";import{c as o,l as s}from"./src-DDlhtxHr.js";import{f as c,t as l}from"./src-D5iCeaF_.js";var u,d,f,p=e((()=>{u=`_matrix_5s0vg_4`,d=`_cell_5s0vg_9`,f={matrix:u,cell:d}})),m,h,g,_,v,y,b,x;e((()=>{l(),a(),r(),p(),m=t(),h={title:`Snack/Inputs & Forms/Fields/FieldSlider`,id:`components-fields-fieldslider`,component:c},g=[o.S,o.M,o.L],_=[s.Default,s.Error,s.Warning,s.Success],v=[{key:`single (default)`,cell:(0,m.jsx)(c,{size:o.M,label:`Volume`,min:0,max:100,step:1,defaultValue:50})},{key:`range (two-handle min – max)`,cell:(0,m.jsx)(c,{size:o.M,label:`Price range`,range:!0,min:0,max:100,step:1,defaultValue:[20,80]})},{key:`with marks (off-grid, labels≠keys)`,cell:(0,m.jsx)(c,{size:o.M,label:`Quality`,min:0,max:100,step:null,marks:{10:{label:`low`},55:{label:`mid`},90:{label:`high`}},defaultValue:55})},{key:`fractional step (0.5)`,cell:(0,m.jsx)(c,{size:o.M,label:`Zoom`,min:0,max:5,step:.5,defaultValue:1.5})}],y=[{key:`postfix %`,cell:(0,m.jsx)(c,{size:o.M,label:`Volume`,min:0,max:100,step:1,defaultValue:75,postfix:`%`})},{key:`prefix`,cell:(0,m.jsx)(c,{size:o.M,label:`Volume`,min:0,max:100,step:1,defaultValue:75,prefix:`≈`})},{key:`postfixIcon`,cell:(0,m.jsx)(c,{size:o.M,label:`Volume`,min:0,max:100,step:1,defaultValue:75,postfixIcon:(0,m.jsx)(i,{})})},{key:`prefix + postfix + postfixIcon`,cell:(0,m.jsx)(c,{size:o.M,label:`Volume`,min:0,max:100,step:1,defaultValue:75,prefix:`≈`,postfix:`%`,postfixIcon:(0,m.jsx)(i,{})})},{key:`textInputFormatter ('75 %')`,cell:(0,m.jsx)(c,{size:o.M,label:`Volume`,min:0,max:100,step:1,defaultValue:75,textInputFormatter:e=>`${e} %`})},{key:`readonly`,cell:(0,m.jsx)(c,{size:o.M,label:`Used`,min:0,max:100,step:1,defaultValue:60,readonly:!0})},{key:`disabled`,cell:(0,m.jsx)(c,{size:o.M,label:`Volume`,min:0,max:100,step:1,defaultValue:60,disabled:!0})}],b={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(`div`,{className:f.matrix,children:[(0,m.jsx)(n,{sectionTitle:`Size × ValidationState`,firstColumnHeader:`Size`,columnHeaders:_.map(e=>e.toUpperCase()),rows:g.map(e=>({variantLabel:e,cells:_.map(t=>(0,m.jsx)(`div`,{className:f.cell,children:(0,m.jsx)(c,{size:e,validationState:t,label:`Volume`,hint:t===s.Default?`Hint`:`${t} hint`,showHintIcon:!0,defaultValue:50,min:0,max:100,step:1})},t))}))}),(0,m.jsx)(n,{sectionTitle:`Value mode & scale features (size=m)`,firstColumnHeader:`Mode`,columnHeaders:[`Render`],rows:v.map(({key:e,cell:t})=>({variantLabel:e,cells:[(0,m.jsx)(`div`,{className:f.cell,children:t},e)]}))}),(0,m.jsx)(n,{sectionTitle:`Slots & formatting (size=m)`,firstColumnHeader:`Slot`,columnHeaders:[`Render`],rows:y.map(({key:e,cell:t})=>({variantLabel:e,cells:[(0,m.jsx)(`div`,{className:f.cell,children:t},e)]}))})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size × ValidationState' firstColumnHeader='Size' columnHeaders={keyStates.map(s => s.toUpperCase())} rows={keySizes.map(size => ({
      variantLabel: size,
      cells: keyStates.map(state => <div key={state} className={styles.cell}>
              <FieldSlider size={size} validationState={state} label='Volume' hint={state === VALIDATION_STATE.Default ? 'Hint' : \`\${state} hint\`} showHintIcon defaultValue={50} min={0} max={100} step={1} />
            </div>)
    }))} />

      <StoryTable sectionTitle='Value mode & scale features (size=m)' firstColumnHeader='Mode' columnHeaders={['Render']} rows={scaleVariants.map(({
      key,
      cell
    }) => ({
      variantLabel: key,
      cells: [<div key={key} className={styles.cell}>
              {cell}
            </div>]
    }))} />

      <StoryTable sectionTitle='Slots & formatting (size=m)' firstColumnHeader='Slot' columnHeaders={['Render']} rows={slotVariants.map(({
      key,
      cell
    }) => ({
      variantLabel: key,
      cells: [<div key={key} className={styles.cell}>
              {cell}
            </div>]
    }))} />
    </div>
}`,...b.parameters?.docs?.source}}},x=[`VisualMatrix`]}))();export{b as VisualMatrix,x as __namedExportsOrder,h as default};
//# sourceMappingURL=FieldSlider.VisualMatrix.stories-DSph_KVq.js.map