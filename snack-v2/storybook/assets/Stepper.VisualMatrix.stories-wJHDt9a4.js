import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-XppXgSyX.js";import{a as i,c as a,i as o,n as s,s as c,t as l,u}from"./src-Cv2KcqFK.js";import{n as d,t as f}from"./styles.module-Cu9lTr2p.js";function p(e){return[{title:`One`,number:1,state:u.Completed},{title:`Two`,number:2,state:e},{title:`Three`,number:3,state:u.Waiting}]}function m(e){let t=p(e);return(0,g.jsx)(`div`,{className:d.containerMatrixDesktop,children:(0,g.jsx)(`div`,{className:d.stepperRowDesktop,children:t.map((e,n)=>(0,g.jsx)(a,{step:e,hideTailLine:n===t.length-1},e.title))})})}function h(e){let t=p(e);return(0,g.jsx)(`div`,{className:d.containerMatrixMobile,children:(0,g.jsx)(`div`,{className:d.stepperRowMobile,children:t.map(e=>(0,g.jsx)(i,{step:e},e.title))})})}var g,_,v,y,b;e((()=>{l(),r(),c(),o(),f(),g=t(),_={title:`Snack/Navigation/Stepper`,id:`components-stepper`,component:s},v=[u.Waiting,u.Current,u.Loading,u.Completed,u.Rejected],y={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsxs)(`div`,{className:d.matrix,children:[(0,g.jsx)(n,{sectionTitle:`Desktop`,firstColumnHeader:`State`,columnHeaders:[`View`],rows:v.map(e=>({variantLabel:e,cells:[m(e)]}))}),(0,g.jsx)(n,{sectionTitle:`Mobile`,firstColumnHeader:`State`,columnHeaders:[`View`],rows:v.map(e=>({variantLabel:e,cells:[h(e)]}))})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Desktop' firstColumnHeader='State' columnHeaders={['View']} rows={STATES.map(state => ({
      variantLabel: state,
      cells: [desktopAtState(state)]
    }))} />
      <StoryTable sectionTitle='Mobile' firstColumnHeader='State' columnHeaders={['View']} rows={STATES.map(state => ({
      variantLabel: state,
      cells: [mobileAtState(state)]
    }))} />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`VisualMatrix`]}))();export{y as VisualMatrix,b as __namedExportsOrder,_ as default};
//# sourceMappingURL=Stepper.VisualMatrix.stories-wJHDt9a4.js.map