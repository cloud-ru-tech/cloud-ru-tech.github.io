import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{bn as n,gn as r,i,nt as a,t as o}from"./iframe-DQTa2Tvz.js";import{r as s,t as c}from"./product-DsqivN06.js";import{c as l,t as u}from"./src-BYD8ng7f.js";import{i as d,n as f,o as p}from"./demoData-Dz7pH95M.js";import{n as m,t as h}from"./styles.module-DX2_Oqo2.js";var g,_,v,y,b,x;e((()=>{a(),c(),u(),o(),p(),h(),g=t(),_={title:`Uikit Product/Layout & containers/Layout/Header/MainMenu`,id:`uikit-product-layout-header-mainmenu`,id:`uikit-product-header-mainmenu`,component:l,parameters:{layout:`fullscreen`}},v=[{id:`allServices`,label:`Все сервисы`,icon:(0,g.jsx)(s,{size:24}),items:d}],y=[{layoutType:n.Desktop,label:`desktop`},{layoutType:n.Mobile,label:`mobile`}],b={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsx)(i,{sectionTitle:`Trigger`,firstColumnHeader:`layoutType`,columnHeaders:[`default`,`disabled`],rows:y.map(({layoutType:e,label:t})=>({variantLabel:t,cells:[!1,!0].map(n=>(0,g.jsx)(r,{layoutType:e,children:(0,g.jsx)(`div`,{className:m.cell,children:(0,g.jsx)(l,{open:!1,disabled:n,segments:v,settingItems:f})})},`${t}-${n}`))}))})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable sectionTitle='Trigger' firstColumnHeader='layoutType' columnHeaders={['default', 'disabled']} rows={layouts.map(({
    layoutType,
    label
  }) => ({
    variantLabel: label,
    cells: [false, true].map(disabled => <AdaptiveProvider key={\`\${label}-\${disabled}\`} layoutType={layoutType}>
            <div className={styles.cell}>
              <MainMenu open={false} disabled={disabled} segments={SEGMENTS} settingItems={MAIN_MENU_SIDEBAR_ITEMS} />
            </div>
          </AdaptiveProvider>)
  }))} />
}`,...b.parameters?.docs?.source},description:{story:"В матрице только закрытое состояние триггера: дровер рендерится в portal и в `StoryTable`\nперекрыл бы соседние ячейки. Открытое меню снимается отдельными `open-*` снимками\nв `__test__/MainMenu/visual.spec.ts`.",...b.parameters?.docs?.description}}},x=[`VisualMatrix`]}))();export{b as VisualMatrix,x as __namedExportsOrder,_ as default};
//# sourceMappingURL=MainMenu.VisualMatrix.stories-BYe0WjjX.js.map