import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-Bb1kR6xz.js";import{F as i,t as a}from"./system-C0ljJ-o1.js";import{c as o,l as s}from"./src-g-1fSFGG.js";import{m as c,t as l}from"./src-Ca1w4lmi.js";var u,d,f,p=e((()=>{u=`_matrix_14g3q_1`,d=`_narrow_14g3q_6`,f={matrix:u,narrow:d}})),m,h,g,_,v,y,b,x,S,C,w;e((()=>{l(),a(),r(),p(),m=t(),h={title:`Snack/Inputs & Forms/Fields/FieldSelect`,id:`components-fields-fieldselect`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}}},g=[{id:`s`,content:{label:`Small`}},{id:`m`,content:{label:`Medium`}},{id:`l`,content:{label:`Large`}}],_=[{id:`a`,content:{label:`ru-central1-a`}},{id:`b`,content:{label:`ru-central1-b`}},{id:`c`,content:{label:`ru-central1-c`}},{id:`d`,content:{label:`kz-central1-a`}}],v=[{id:`a`,content:{label:`ru-central1-a`},appearance:`green`},{id:`b`,content:{label:`ru-central1-b`},appearance:`blue`},{id:`c`,content:{label:`ru-central1-c`},appearance:`violet`}],y=[o.S,o.M,o.L],b=[s.Default,s.Error,s.Warning,s.Success],x=[{key:`empty (single)`,props:{selection:`single`}},{key:`single selected`,props:{selection:`single`,defaultValue:`m`}},{key:`empty (multiple)`,props:{selection:`multiple`,defaultValue:[]}},{key:`multiple selected`,props:{selection:`multiple`,defaultValue:[`s`,`l`]}}],S=[{key:`disabled`,extra:{disabled:!0}},{key:`readonly`,extra:{readonly:!0}}],C={tags:[`test`,`dev`],render:()=>(0,m.jsxs)(`div`,{className:f.matrix,children:[(0,m.jsx)(n,{sectionTitle:`Size × ValidationState (single, value=m)`,firstColumnHeader:`Size`,columnHeaders:b.map(e=>e.toUpperCase()),rows:y.map(e=>({variantLabel:e,cells:b.map(t=>(0,m.jsx)(`div`,{className:f.narrow,children:(0,m.jsx)(c,{size:e,validationState:t,label:`Label`,hint:t===s.Default?`Hint`:`${t} hint`,showHintIcon:!0,items:g,selection:`single`,defaultValue:`m`})},t))}))}),(0,m.jsx)(n,{sectionTitle:`Selection state (size=m)`,firstColumnHeader:`Selection`,columnHeaders:[`Render`],rows:x.map(({key:e,props:t})=>({variantLabel:e,cells:[(0,m.jsx)(`div`,{className:f.narrow,children:(0,m.jsx)(c,{size:o.M,label:`Label`,placeholder:`Choose…`,items:g,...t})},e)]}))}),(0,m.jsx)(n,{sectionTitle:`Modifiers (size=m, single, value=m)`,firstColumnHeader:`Modifier`,columnHeaders:[`Render`],rows:S.map(({key:e,extra:t})=>({variantLabel:e,cells:[(0,m.jsx)(`div`,{className:f.narrow,children:(0,m.jsx)(c,{size:o.M,label:`Label`,items:g,selection:`single`,defaultValue:`m`,...t})},e)]}))}),(0,m.jsx)(n,{sectionTitle:`Chips & search (size=m)`,firstColumnHeader:`Case`,columnHeaders:[`Render`],rows:[{variantLabel:`many chips (wrap)`,cells:[(0,m.jsx)(`div`,{className:f.narrow,children:(0,m.jsx)(c,{size:o.M,label:`Zones`,items:_,selection:`multiple`,defaultValue:[`a`,`b`,`c`,`d`]})},`many`)]},{variantLabel:`chips with disabled item`,cells:[(0,m.jsx)(`div`,{className:f.narrow,children:(0,m.jsx)(c,{size:o.M,label:`Zones`,items:[{..._[0],disabled:!0},..._.slice(1)],selection:`multiple`,defaultValue:[`a`,`b`]})},`disabled-chip`)]},{variantLabel:`colored chips (item.appearance)`,cells:[(0,m.jsx)(`div`,{className:f.narrow,children:(0,m.jsx)(c,{size:o.M,label:`Zones`,items:v,selection:`multiple`,defaultValue:[`a`,`b`,`c`]})},`colored-chips`)]},{variantLabel:`searchable (default)`,cells:[(0,m.jsx)(`div`,{className:f.narrow,children:(0,m.jsx)(c,{size:o.M,label:`Label`,placeholder:`Type to search…`,items:g,searchable:!0})},`searchable`)]},{variantLabel:`non-searchable`,cells:[(0,m.jsx)(`div`,{className:f.narrow,children:(0,m.jsx)(c,{size:o.M,label:`Label`,items:g,selection:`single`,defaultValue:`m`,searchable:!1})},`non-searchable`)]}]}),(0,m.jsx)(n,{sectionTitle:`Slots & formatters (size=m)`,firstColumnHeader:`Case`,columnHeaders:[`Render`],rows:[{variantLabel:`iconBefore`,cells:[(0,m.jsx)(`div`,{className:f.narrow,children:(0,m.jsx)(c,{size:o.M,label:`Search zone`,iconBefore:(0,m.jsx)(i,{}),items:_,selection:`single`,defaultValue:`a`})},`icon-before`)]},{variantLabel:`prefix + postfix (single)`,cells:[(0,m.jsx)(`div`,{className:f.narrow,children:(0,m.jsx)(c,{size:o.M,label:`Amount`,prefix:`$`,postfix:`USD`,items:g,selection:`single`,defaultValue:`m`})},`prefix-postfix`)]},{variantLabel:`selectedOptionFormatter (single)`,cells:[(0,m.jsx)(`div`,{className:f.narrow,children:(0,m.jsx)(c,{size:o.M,label:`Label`,items:g,selection:`single`,defaultValue:`m`,selectedOptionFormatter:e=>`★ ${e.label}`})},`single-formatter`)]},{variantLabel:`formatSelected (multiple, chips=false)`,cells:[(0,m.jsx)(`div`,{className:f.narrow,children:(0,m.jsx)(c,{size:o.M,label:`Zones`,items:_,selection:`multiple`,chips:!1,defaultValue:[`a`,`b`,`c`],formatSelected:e=>`${e.length} zones selected`})},`format-selected`)]}]})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size × ValidationState (single, value=m)' firstColumnHeader='Size' columnHeaders={keyStates.map(s => s.toUpperCase())} rows={keySizes.map(size => ({
      variantLabel: size,
      cells: keyStates.map(state => <div key={state} className={styles.narrow}>
              <FieldSelect size={size} validationState={state} label='Label' hint={state === VALIDATION_STATE.Default ? 'Hint' : \`\${state} hint\`} showHintIcon items={options} selection='single' defaultValue='m' />
            </div>)
    }))} />

      <StoryTable sectionTitle='Selection state (size=m)' firstColumnHeader='Selection' columnHeaders={['Render']} rows={selectionStates.map(({
      key,
      props
    }) => ({
      variantLabel: key,
      cells: [<div key={key} className={styles.narrow}>
              <FieldSelect size={SIZE.M} label='Label' placeholder='Choose…' items={options} {...props} />
            </div>]
    }))} />

      <StoryTable sectionTitle='Modifiers (size=m, single, value=m)' firstColumnHeader='Modifier' columnHeaders={['Render']} rows={modifiers.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      cells: [<div key={key} className={styles.narrow}>
              <FieldSelect size={SIZE.M} label='Label' items={options} selection='single' defaultValue='m' {...extra} />
            </div>]
    }))} />

      <StoryTable sectionTitle='Chips & search (size=m)' firstColumnHeader='Case' columnHeaders={['Render']} rows={[{
      variantLabel: 'many chips (wrap)',
      cells: [<div key='many' className={styles.narrow}>
                <FieldSelect size={SIZE.M} label='Zones' items={zoneOptions} selection='multiple' defaultValue={['a', 'b', 'c', 'd']} />
              </div>]
    }, {
      variantLabel: 'chips with disabled item',
      cells: [<div key='disabled-chip' className={styles.narrow}>
                <FieldSelect size={SIZE.M} label='Zones' items={[{
          ...zoneOptions[0],
          disabled: true
        }, ...zoneOptions.slice(1)]} selection='multiple' defaultValue={['a', 'b']} />
              </div>]
    }, {
      variantLabel: 'colored chips (item.appearance)',
      cells: [<div key='colored-chips' className={styles.narrow}>
                <FieldSelect size={SIZE.M} label='Zones' items={coloredOptions} selection='multiple' defaultValue={['a', 'b', 'c']} />
              </div>]
    }, {
      variantLabel: 'searchable (default)',
      cells: [<div key='searchable' className={styles.narrow}>
                <FieldSelect size={SIZE.M} label='Label' placeholder='Type to search…' items={options} searchable />
              </div>]
    }, {
      variantLabel: 'non-searchable',
      cells: [<div key='non-searchable' className={styles.narrow}>
                <FieldSelect size={SIZE.M} label='Label' items={options} selection='single' defaultValue='m' searchable={false} />
              </div>]
    }]} />

      <StoryTable sectionTitle='Slots & formatters (size=m)' firstColumnHeader='Case' columnHeaders={['Render']} rows={[{
      variantLabel: 'iconBefore',
      cells: [<div key='icon-before' className={styles.narrow}>
                <FieldSelect size={SIZE.M} label='Search zone' iconBefore={<SearchSVG />} items={zoneOptions} selection='single' defaultValue='a' />
              </div>]
    }, {
      // prefix/postfix — слоты текста вокруг значения (Figma fieldSelect showPrefix/showPostfix):
      // prefix → value → clear → postfix → chevron.
      variantLabel: 'prefix + postfix (single)',
      cells: [<div key='prefix-postfix' className={styles.narrow}>
                <FieldSelect size={SIZE.M} label='Amount' prefix='$' postfix='USD' items={options} selection='single' defaultValue='m' />
              </div>]
    }, {
      variantLabel: 'selectedOptionFormatter (single)',
      cells: [<div key='single-formatter' className={styles.narrow}>
                <FieldSelect size={SIZE.M} label='Label' items={options} selection='single' defaultValue='m' selectedOptionFormatter={pair => \`★ \${pair.label}\`} />
              </div>]
    }, {
      variantLabel: 'formatSelected (multiple, chips=false)',
      cells: [<div key='format-selected' className={styles.narrow}>
                <FieldSelect size={SIZE.M} label='Zones' items={zoneOptions} selection='multiple' chips={false} defaultValue={['a', 'b', 'c'] as ItemId[]} formatSelected={selected => \`\${selected.length} zones selected\`} />
              </div>]
    }]} />
    </div>
}`,...C.parameters?.docs?.source}}},w=[`VisualMatrix`]}))();export{C as VisualMatrix,w as __namedExportsOrder,h as default};
//# sourceMappingURL=FieldSelect.VisualMatrix.stories-DJWROkHH.js.map