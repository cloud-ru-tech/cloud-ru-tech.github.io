import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DQTa2Tvz.js";import{N as i,t as a}from"./system-BeZ0nvWx.js";import{a as o,c as s,l as c,s as l,t as u,u as d}from"./src-BSWo-EXU.js";var f,p,m,h=e((()=>{f=`_narrow_1n2mu_4`,p=`_matrix_1n2mu_8`,m={narrow:f,matrix:p}}));function g(e){return(0,_.jsx)(o,{...e})}var _,v,y,b,x,S,C,w,T;e((()=>{u(),a(),r(),h(),_=t(),v={title:`Snack/Actions/Button/Button`,id:`components-button-button`,component:o,parameters:{layout:`padded`}},y=[c.S,c.M,c.L],b=[l.Primary,l.Neutral,l.Critical],x=[d.Filled,d.Outline,d.Tonal,d.Simple,d.Elevated,d.Function],S=[{key:`labelOnly`,props:{label:`Button`}},{key:`iconBefore`,props:{label:`Button`,icon:(0,_.jsx)(i,{})}},{key:`iconAfter`,props:{label:`Button`,icon:(0,_.jsx)(i,{}),iconPosition:s.After}},{key:`iconOnly`,props:{icon:(0,_.jsx)(i,{}),"aria-label":`Settings`}},{key:`withCounter`,props:{label:`Inbox`,counter:{value:12}}},{key:`counterWithIconAfter`,props:{label:`Notifications`,icon:(0,_.jsx)(i,{}),iconPosition:s.After,counter:{value:5}}},{key:`iconOnlyCounterAfter`,props:{icon:(0,_.jsx)(i,{}),iconPosition:s.After,counter:{value:5},"aria-label":`Settings`}}],C=[{key:`default`,extra:{}},{key:`disabled`,extra:{disabled:!0}},{key:`loading`,extra:{loading:!0}}],w={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(`div`,{className:m.matrix,children:[(0,_.jsx)(n,{sectionTitle:`Appearance × Size`,firstColumnHeader:`Appearance`,columnHeaders:y.map(e=>e.toUpperCase()),rows:b.map(e=>({variantLabel:e,cells:y.map(t=>g({size:t,appearance:e,label:`Button`}))}))}),(0,_.jsx)(n,{sectionTitle:`View × Appearance`,firstColumnHeader:`View`,columnHeaders:b.map(e=>e.toUpperCase()),rows:x.map(e=>({variantLabel:e,cells:b.map(t=>g({view:e,appearance:t,label:`Button`}))}))}),(0,_.jsx)(n,{sectionTitle:`Composition × Size`,firstColumnHeader:`Composition`,columnHeaders:y.map(e=>e.toUpperCase()),rows:S.map(({key:e,props:t})=>({variantLabel:e,cells:y.map(e=>g({...t,size:e}))}))}),(0,_.jsx)(n,{sectionTitle:`fullWidth (container=320px)`,firstColumnHeader:`fullWidth`,columnHeaders:[`Button`],rows:[!1,!0].map(e=>({variantLabel:String(e),cells:[(0,_.jsx)(`div`,{className:m.narrow,children:(0,_.jsx)(o,{fullWidth:e,label:`Continue`})},String(e))]}))}),(0,_.jsx)(n,{sectionTitle:`minWidth × Size (short label)`,firstColumnHeader:`minWidth`,columnHeaders:y.map(e=>e.toUpperCase()),rows:[!0,!1].map(e=>({variantLabel:String(e),cells:y.map(t=>g({size:t,minWidth:e,label:`A`}))}))}),(0,_.jsx)(n,{sectionTitle:`State × Composition (view=filled, appearance=primary)`,firstColumnHeader:`State`,columnHeaders:S.map(e=>e.key),rows:C.map(({key:e,extra:t})=>({variantLabel:e,cells:S.map(e=>g({view:d.Filled,appearance:l.Primary,...e.props,...t}))}))})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Appearance × Size' firstColumnHeader='Appearance' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: keySizes.map(size => renderButton({
        size,
        appearance,
        label: 'Button'
      }))
    }))} />

      <StoryTable sectionTitle='View × Appearance' firstColumnHeader='View' columnHeaders={keyAppearances.map(a => a.toUpperCase())} rows={keyViews.map(view => ({
      variantLabel: view,
      cells: keyAppearances.map(appearance => renderButton({
        view,
        appearance,
        label: 'Button'
      }))
    }))} />

      <StoryTable sectionTitle='Composition × Size' firstColumnHeader='Composition' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={compositions.map(({
      key,
      props
    }) => ({
      variantLabel: key,
      cells: keySizes.map(size => renderButton({
        ...props,
        size
      }))
    }))} />

      <StoryTable sectionTitle='fullWidth (container=320px)' firstColumnHeader='fullWidth' columnHeaders={['Button']} rows={[false, true].map(fullWidth => ({
      variantLabel: String(fullWidth),
      cells: [<div key={String(fullWidth)} className={styles.narrow}>
              <Button fullWidth={fullWidth} label='Continue' />
            </div>]
    }))} />

      <StoryTable sectionTitle='minWidth × Size (short label)' firstColumnHeader='minWidth' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={[true, false].map(minWidth => ({
      variantLabel: String(minWidth),
      cells: keySizes.map(size => renderButton({
        size,
        minWidth,
        label: 'A'
      }))
    }))} />

      <StoryTable sectionTitle='State × Composition (view=filled, appearance=primary)' firstColumnHeader='State' columnHeaders={compositions.map(c => c.key)} rows={states.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      cells: compositions.map(c => renderButton({
        view: VIEW.Filled,
        appearance: APPEARANCE.Primary,
        ...c.props,
        ...extra
      }))
    }))} />
    </div>
}`,...w.parameters?.docs?.source}}},T=[`VisualMatrix`]}))();export{w as VisualMatrix,T as __namedExportsOrder,v as default};
//# sourceMappingURL=Button.VisualMatrix.stories-KpSXBtP6.js.map