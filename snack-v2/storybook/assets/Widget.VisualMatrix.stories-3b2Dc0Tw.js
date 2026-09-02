import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{bn as n,gn as r,i,nt as a,t as o}from"./iframe-D4MTfTET.js";import{o as s,t as c}from"./src-06_2FPZv2.js";import{i as l,n as u,o as d,t as f}from"./src-BnQs8YMz.js";import{n as p,t as m}from"./styles.module-D2Nzks2b.js";function h(e,t){return(0,g.jsx)(`div`,{className:t?p.wide:p.narrow,children:(0,g.jsx)(u,{header:{title:`Cloud servers`,href:`#`},state:e,wide:t,loadingState:{showSkeleton:!0},errorState:S,segmentControl:x,actions:b,children:`Current usage: 8 instances, 2 alerts.`})})}var g,_,v,y,b,x,S,C,w;e((()=>{a(),c(),f(),o(),m(),g=t(),_={title:`Uikit Product/Data display/Widget`,id:`uikit-product-widget`,component:u},v=Object.values(d),y=[n.Desktop,n.Mobile],b=[{label:`Create`,onClick:()=>void 0},{variant:l.Kebab,list:{items:[{content:{label:`Export`},onClick:()=>void 0},{content:{label:`Archive`},onClick:()=>void 0}]}}],x={width:s.Full,defaultValue:`overview`,items:[{value:`overview`,label:`Overview`},{value:`events`,label:`Events`}]},S={onClickUpdate:()=>void 0,errorTitle:`Не удалось получить данные`,errorDescription:`Попробуйте обновить виджет`,updateButtonLabel:`Обновить`},C={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsxs)(`div`,{className:p.matrix,children:[(0,g.jsx)(i,{sectionTitle:`State × wide`,firstColumnHeader:`State`,columnHeaders:[`wide=false`,`wide=true`],rows:v.map(e=>({variantLabel:e,cells:[h(e,!1),h(e,!0)]}))}),(0,g.jsx)(i,{sectionTitle:`layoutType (wide=true on desktop only)`,firstColumnHeader:`layoutType`,columnHeaders:[`wide=false`,`wide=true`],rows:y.map(e=>({variantLabel:e,cells:[(0,g.jsx)(r,{layoutType:e,children:h(d.Default,!1)},`${e}-narrow`),(0,g.jsx)(r,{layoutType:e,children:h(d.Default,!0)},`${e}-wide`)]}))})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='State × wide' firstColumnHeader='State' columnHeaders={['wide=false', 'wide=true']} rows={states.map(state => ({
      variantLabel: state,
      cells: [renderWidget(state, false), renderWidget(state, true)]
    }))} />

      <StoryTable sectionTitle='layoutType (wide=true on desktop only)' firstColumnHeader='layoutType' columnHeaders={['wide=false', 'wide=true']} rows={layoutTypes.map(layoutType => ({
      variantLabel: layoutType,
      cells: [<AdaptiveProvider key={\`\${layoutType}-narrow\`} layoutType={layoutType}>
              {renderWidget(WIDGET_STATE.Default, false)}
            </AdaptiveProvider>, <AdaptiveProvider key={\`\${layoutType}-wide\`} layoutType={layoutType}>
              {renderWidget(WIDGET_STATE.Default, true)}
            </AdaptiveProvider>]
    }))} />
    </div>
}`,...C.parameters?.docs?.source}}},w=[`VisualMatrix`]}))();export{C as VisualMatrix,w as __namedExportsOrder,_ as default};
//# sourceMappingURL=Widget.VisualMatrix.stories-3b2Dc0Tw.js.map