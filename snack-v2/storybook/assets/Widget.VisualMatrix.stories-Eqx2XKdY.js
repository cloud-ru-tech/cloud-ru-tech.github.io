import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,i as r,ot as i,t as a,wn as o}from"./iframe-qs8RgOhH.js";import{o as s,t as c}from"./src-C4oy-qe72.js";import{i as l,n as u,o as d,t as f}from"./src-BDoFKdPh.js";import{n as p,t as m}from"./styles.module-CG8eFWet.js";function h(e,t){return(0,_.jsx)(`div`,{className:t?p.wide:p.narrow,children:(0,_.jsx)(u,{header:{title:`Cloud servers`,href:`#`},state:e,wide:t,loadingState:{showSkeleton:!0},errorState:C,segmentControl:S,actions:x,children:`Current usage: 8 instances, 2 alerts.`})})}function g(e){return(0,_.jsx)(`div`,{className:e?p.wide:p.narrow,children:(0,_.jsxs)(u,{header:{title:`Cloud servers`,href:`#`},wide:e,actions:x,children:[(0,_.jsx)(`div`,{className:p.bodyBlock,children:`Compute: 8 instances`}),(0,_.jsx)(`div`,{className:p.bodyBlock,children:`Storage: 2 volumes`})]})})}var _,v,y,b,x,S,C,w,T;e((()=>{i(),c(),f(),a(),m(),_=t(),v={title:`Uikit Product/Data display/Widget`,id:`uikit-product-widget`,component:u},y=Object.values(d),b=[o.Desktop,o.Mobile],x=[{label:`Create`,onClick:()=>void 0},{variant:l.Kebab,list:{items:[{content:{label:`Export`},onClick:()=>void 0},{content:{label:`Archive`},onClick:()=>void 0}]}}],S={width:s.Full,defaultValue:`overview`,items:[{value:`overview`,label:`Overview`},{value:`events`,label:`Events`}]},C={onClickUpdate:()=>void 0,errorTitle:`Не удалось получить данные`,errorDescription:`Попробуйте обновить виджет`,updateButtonLabel:`Обновить`},w={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(`div`,{className:p.matrix,children:[(0,_.jsx)(r,{sectionTitle:`State × wide`,firstColumnHeader:`State`,columnHeaders:[`wide=false`,`wide=true`],rows:y.map(e=>({variantLabel:e,cells:[h(e,!1),h(e,!0)]}))}),(0,_.jsx)(r,{sectionTitle:`Body blocks`,firstColumnHeader:`body`,columnHeaders:[`wide=false`,`wide=true`],rows:[{variantLabel:`two blocks`,cells:[g(!1),g(!0)]}]}),(0,_.jsx)(r,{sectionTitle:`layoutType (wide=true on desktop only)`,firstColumnHeader:`layoutType`,columnHeaders:[`wide=false`,`wide=true`],rows:b.map(e=>({variantLabel:e,cells:[(0,_.jsx)(n,{layoutType:e,children:h(d.Default,!1)},`${e}-narrow`),(0,_.jsx)(n,{layoutType:e,children:h(d.Default,!0)},`${e}-wide`)]}))})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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

      <StoryTable sectionTitle='Body blocks' firstColumnHeader='body' columnHeaders={['wide=false', 'wide=true']} rows={[{
      variantLabel: 'two blocks',
      cells: [renderWidgetWithBodyBlocks(false), renderWidgetWithBodyBlocks(true)]
    }]} />

      <StoryTable sectionTitle='layoutType (wide=true on desktop only)' firstColumnHeader='layoutType' columnHeaders={['wide=false', 'wide=true']} rows={layoutTypes.map(layoutType => ({
      variantLabel: layoutType,
      cells: [<LayoutScope key={\`\${layoutType}-narrow\`} layoutType={layoutType}>
              {renderWidget(WIDGET_STATE.Default, false)}
            </LayoutScope>, <LayoutScope key={\`\${layoutType}-wide\`} layoutType={layoutType}>
              {renderWidget(WIDGET_STATE.Default, true)}
            </LayoutScope>]
    }))} />
    </div>
}`,...w.parameters?.docs?.source}}},T=[`VisualMatrix`]}))();export{w as VisualMatrix,T as __namedExportsOrder,v as default};
//# sourceMappingURL=Widget.VisualMatrix.stories-Eqx2XKdY.js.map