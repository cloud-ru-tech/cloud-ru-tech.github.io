import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-D1b9r8k6.js";import{l as i,s as a,u as o}from"./src-CiQB7kP4.js";import{n as s,t as c}from"./src-By9YIobP.js";var l,u,d,f=e((()=>{l=`_grid_1ompx_4`,u=`_narrow_1ompx_9`,d={grid:l,narrow:u}})),p,m,h,g,_,v,y,b,x,S;e((()=>{c(),r(),f(),p=t(),m=[{id:`create`,label:`Создать`,onClick:()=>void 0},{id:`duplicate`,label:`Дублировать`,onClick:()=>void 0},{id:`archive`,label:`Архивировать`,onClick:()=>void 0}],h=[i.S,i.M,i.L],g=[a.Primary,a.Neutral,a.Critical],_=[o.Filled,o.Outline,o.Tonal,o.Simple,o.Elevated,o.Function],v=[`default`,`disabled`,`loading`],y=[o.Filled,o.Outline,o.Tonal],b={title:`Snack/Actions/ButtonCombo`,id:`components-buttoncombo`,component:s,parameters:{layout:`padded`}},x={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:d.grid,children:[(0,p.jsx)(n,{sectionTitle:`View × Size`,firstColumnHeader:`View`,columnHeaders:h.map(e=>e.toUpperCase()),rows:_.map(e=>({variantLabel:e,cells:h.map(t=>(0,p.jsx)(s,{view:e,size:t,items:m,defaultValue:`create`},t))}))}),(0,p.jsx)(n,{sectionTitle:`Appearance × View (size M)`,firstColumnHeader:`Appearance`,columnHeaders:_.map(e=>e.toUpperCase()),rows:g.map(e=>({variantLabel:e,cells:_.map(t=>(0,p.jsx)(s,{view:t,appearance:e,items:m,defaultValue:`create`},t))}))}),(0,p.jsx)(n,{sectionTitle:`State × View (appearance Primary, size M)`,firstColumnHeader:`State`,columnHeaders:y.map(e=>e.toUpperCase()),rows:v.map(e=>({variantLabel:e,cells:y.map(t=>(0,p.jsx)(s,{view:t,items:m,defaultValue:`create`,disabled:e===`disabled`,loading:e===`loading`},t))}))}),(0,p.jsx)(n,{sectionTitle:`fullWidth (container 320px)`,firstColumnHeader:`fullWidth`,columnHeaders:[`ButtonCombo`],rows:[!1,!0].map(e=>({variantLabel:String(e),cells:[(0,p.jsx)(`div`,{className:d.narrow,children:(0,p.jsx)(s,{fullWidth:e,items:m,defaultValue:`create`})},String(e))]}))})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='View × Size' firstColumnHeader='View' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={keyViews.map(view => ({
      variantLabel: view,
      cells: keySizes.map(size => <ButtonCombo key={size} view={view} size={size} items={items} defaultValue='create' />)
    }))} />

      <StoryTable sectionTitle='Appearance × View (size M)' firstColumnHeader='Appearance' columnHeaders={keyViews.map(v => v.toUpperCase())} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: keyViews.map(view => <ButtonCombo key={view} view={view} appearance={appearance} items={items} defaultValue='create' />)
    }))} />

      <StoryTable sectionTitle='State × View (appearance Primary, size M)' firstColumnHeader='State' columnHeaders={stateViews.map(v => v.toUpperCase())} rows={keyStates.map(state => ({
      variantLabel: state,
      cells: stateViews.map(view => <ButtonCombo key={view} view={view} items={items} defaultValue='create' disabled={state === 'disabled'} loading={state === 'loading'} />)
    }))} />

      <StoryTable sectionTitle='fullWidth (container 320px)' firstColumnHeader='fullWidth' columnHeaders={['ButtonCombo']} rows={[false, true].map(fullWidth => ({
      variantLabel: String(fullWidth),
      cells: [<div key={String(fullWidth)} className={styles.narrow}>
              <ButtonCombo fullWidth={fullWidth} items={items} defaultValue='create' />
            </div>]
    }))} />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,b as default};
//# sourceMappingURL=ButtonCombo.VisualMatrix.stories-5Uq2V6kL.js.map