import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-SlIP-akt.js";import{N as i,pt as a,t as o,z as s}from"./system-BjV8PRvn.js";import{i as c,n as l,t as u}from"./src-CU2rMYZe2.js";import{n as d,t as f}from"./styles.module-Ce4W0czD.js";var p,m,h,g,_,v,y,b,x;e((()=>{o(),u(),r(),f(),p=t(),m={title:`Snack/Inputs & Forms/SegmentControl`,id:`components-segmentcontrol`,component:l,parameters:{layout:`padded`}},h=[c.S,c.M,c.L],g=[{key:`labelOnly`,items:[{value:`one`,label:`One`},{value:`two`,label:`Two`},{value:`three`,label:`Three`}]},{key:`iconBefore`,items:[{value:`home`,label:`Home`,icon:(0,p.jsx)(a,{})},{value:`settings`,label:`Settings`,icon:(0,p.jsx)(i,{})},{value:`plus`,label:`Add`,icon:(0,p.jsx)(s,{})}]},{key:`iconAfter`,items:[{value:`home`,label:`Home`,icon:(0,p.jsx)(a,{}),iconPosition:`after`},{value:`settings`,label:`Settings`,icon:(0,p.jsx)(i,{}),iconPosition:`after`},{value:`plus`,label:`Add`,icon:(0,p.jsx)(s,{}),iconPosition:`after`}]},{key:`iconOnly`,items:[{value:`home`,icon:(0,p.jsx)(a,{})},{value:`settings`,icon:(0,p.jsx)(i,{})},{value:`plus`,icon:(0,p.jsx)(s,{})}]},{key:`withCounter`,items:[{value:`inbox`,label:`Inbox`,counter:12},{value:`drafts`,label:`Drafts`,counter:3},{value:`archive`,label:`Archive`}]}],_=[{key:`default`,props:{}},{key:`outline`,props:{outline:!0}},{key:`full`,props:{width:`full`}}],v=[{value:`a`,label:`Alpha`},{value:`b`,label:`Bravo`},{value:`c`,label:`Charlie`}],y=[{value:`a`,label:`Alpha`},{value:`b`,label:`Bravo`,disabled:!0},{value:`c`,label:`Charlie`}],b={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:d.matrix,children:[(0,p.jsx)(n,{cellAlign:`start`,sectionTitle:`Size × Layout`,firstColumnHeader:`Layout`,columnHeaders:h.map(e=>e.toUpperCase()),rows:g.map(({key:e,items:t})=>({variantLabel:e,cells:h.map(e=>(0,p.jsx)(`div`,{className:d.item,children:(0,p.jsx)(l,{items:t,defaultValue:t[0].value,size:e})},e))}))}),(0,p.jsx)(n,{cellAlign:`start`,sectionTitle:`Size × State (container)`,firstColumnHeader:`State`,columnHeaders:h.map(e=>e.toUpperCase()),rows:_.map(({key:e,props:t})=>({variantLabel:e,cells:h.map(e=>(0,p.jsx)(`div`,{className:d.item,children:(0,p.jsx)(l,{items:v,defaultValue:`a`,size:e,...t})},e))}))}),(0,p.jsx)(n,{cellAlign:`start`,sectionTitle:`Disabled segment`,firstColumnHeader:`Size`,columnHeaders:[`group`],rows:h.map(e=>({variantLabel:e.toUpperCase(),cells:[(0,p.jsx)(`div`,{className:d.item,children:(0,p.jsx)(l,{items:y,defaultValue:`a`,size:e})},e)]}))})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable cellAlign='start' sectionTitle='Size × Layout' firstColumnHeader='Layout' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={layouts.map(({
      key,
      items
    }) => ({
      variantLabel: key,
      cells: keySizes.map(size => <div key={size} className={styles.item}>
              <SegmentControl items={items} defaultValue={items[0].value} size={size} />
            </div>)
    }))} />

      <StoryTable cellAlign='start' sectionTitle='Size × State (container)' firstColumnHeader='State' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={states.map(({
      key,
      props
    }) => ({
      variantLabel: key,
      cells: keySizes.map(size => <div key={size} className={styles.item}>
              <SegmentControl items={labelItems} defaultValue='a' size={size} {...props} />
            </div>)
    }))} />

      <StoryTable cellAlign='start' sectionTitle='Disabled segment' firstColumnHeader='Size' columnHeaders={['group']} rows={keySizes.map(size => ({
      variantLabel: size.toUpperCase(),
      cells: [<div key={size} className={styles.item}>
              <SegmentControl items={disabledItems} defaultValue='a' size={size} />
            </div>]
    }))} />
    </div>
}`,...b.parameters?.docs?.source}}},x=[`VisualMatrix`]}))();export{b as VisualMatrix,x as __namedExportsOrder,m as default};
//# sourceMappingURL=SegmentControl.VisualMatrix.stories-CyX82OKr.js.map