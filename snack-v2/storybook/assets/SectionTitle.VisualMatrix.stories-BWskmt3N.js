import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{En as n,c as r,i,ot as a,t as o}from"./iframe-BjY-Vz13.js";import{a as s,n as c,t as l}from"./src-mH7ZTWSK.js";import{n as u,r as d,t as f}from"./content-BlysHIcz.js";var p,m,h,g,_,v=e((()=>{p=`_matrix_anmzk_4`,m=`_desktopCell_anmzk_9`,h=`_tabletCell_anmzk_13`,g=`_mobileCell_anmzk_17`,_={matrix:p,desktopCell:m,tabletCell:h,mobileCell:g}})),y,b,x,S,C,w;e((()=>{a(),l(),o(),d(),v(),y=t(),b={title:`Site/SectionTitle`,component:c,parameters:{layout:`padded`}},x=[{layoutType:n.Desktop,className:_.desktopCell},{layoutType:n.Tablet,className:_.tabletCell},{layoutType:n.Mobile,className:_.mobileCell}],S=Object.values(s),C={tags:[`test`,`dev`,`no-a11y`],parameters:{controls:{disable:!0}},render:()=>(0,y.jsx)(`div`,{className:_.matrix,children:x.map(({layoutType:e,className:t})=>(0,y.jsx)(i,{cellAlign:`start`,sectionTitle:`Type × layoutType=${e}`,firstColumnHeader:`type`,columnHeaders:[`title + description`,`title`],rows:S.map(n=>({variantLabel:n,cells:[!0,!1].map(i=>(0,y.jsx)(r,{layoutType:e,children:(0,y.jsx)(`div`,{className:t,children:(0,y.jsx)(c,{type:n,title:u,description:i?f:void 0})})},String(i)))}))},e))})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      {LAYOUT_CELLS.map(({
      layoutType,
      className
    }) => <StoryTable key={layoutType} cellAlign='start' sectionTitle={\`Type × layoutType=\${layoutType}\`} firstColumnHeader='type' columnHeaders={['title + description', 'title']} rows={TYPES.map(type => ({
      variantLabel: type,
      cells: [true, false].map(withDescription => <LayoutScope key={String(withDescription)} layoutType={layoutType}>
                <div className={className}>
                  <SectionTitle type={type} title={TITLE} description={withDescription ? DESCRIPTION : undefined} />
                </div>
              </LayoutScope>)
    }))} />)}
    </div>
}`,...C.parameters?.docs?.source}}},w=[`VisualMatrix`]}))();export{C as VisualMatrix,w as __namedExportsOrder,b as default};
//# sourceMappingURL=SectionTitle.VisualMatrix.stories-BWskmt3N.js.map