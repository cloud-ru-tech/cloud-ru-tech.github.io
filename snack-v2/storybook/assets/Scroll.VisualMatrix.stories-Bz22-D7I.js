import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-Bl-uTAel.js";import{a as i,n as a,s as o,t as s}from"./src-DKcDyL6e.js";import{n as c,t as l}from"./styles.module-CrtsmC9o.js";var u,d,f,p,m,h,g;e((()=>{s(),r(),l(),u=t(),d=(0,u.jsx)(`div`,{className:c.cellContent,children:Array.from({length:8},(e,t)=>(0,u.jsxs)(`div`,{className:c.playgroundLine,children:[`Line `,t+1]},t))}),f={title:`Snack/Layout & containers/Scroll`,id:`components-scroll`,component:a},p=Object.values(o),m=[i.Never,i.Leave,i.Scroll,i.Move],h={tags:[`test`,`dev`],parameters:{layout:`fullscreen`,controls:{disable:!0}},decorators:[e=>(0,u.jsx)(`div`,{className:c.decoratorPad24,children:(0,u.jsx)(e,{})})],render:()=>(0,u.jsx)(n,{sectionTitle:`Size × Bar hide strategy`,firstColumnHeader:`Size`,columnHeaders:m.map(e=>e[0].toUpperCase()+e.substring(1)),rows:p.map(e=>({variantLabel:e,cells:m.map(t=>(0,u.jsx)(`div`,{className:c.matrixCell,children:(0,u.jsx)(a,{size:e,barHideStrategy:t,children:d})},t))}))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  decorators: [Story => <div className={styles.decoratorPad24}>
        <Story />
      </div>],
  render: () => <StoryTable sectionTitle='Size × Bar hide strategy' firstColumnHeader='Size' columnHeaders={strategies.map(s => s[0].toUpperCase() + s.substring(1))} rows={sizes.map(size => ({
    variantLabel: size,
    cells: strategies.map(strategy => <div key={strategy} className={styles.matrixCell}>
            <Scroll size={size} barHideStrategy={strategy}>
              {cellContent}
            </Scroll>
          </div>)
  }))} />
}`,...h.parameters?.docs?.source}}},g=[`VisualMatrix`]}))();export{h as VisualMatrix,g as __namedExportsOrder,f as default};
//# sourceMappingURL=Scroll.VisualMatrix.stories-Bz22-D7I.js.map