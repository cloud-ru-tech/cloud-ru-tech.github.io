import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{En as n,c as r,i,ot as a,t as o}from"./iframe-7C8cIa1v.js";import{r as s,t as c}from"./product-m_4OwTD6.js";import{c as l,t as u}from"./src-BAEBdqhm.js";import{c as d,i as f,n as p}from"./demoData-DGM2THKh.js";import{n as m,t as h}from"./styles.module-CeTl1hMK.js";var g,_,v,y,b,x;e((()=>{a(),c(),u(),o(),d(),h(),g=t(),_={title:`Uikit Product/Layout & containers/Layout/Header/MainMenu`,id:`uikit-product-layout-header-mainmenu`,id:`uikit-product-header-mainmenu`,component:l,parameters:{layout:`fullscreen`}},v=[{id:`allServices`,label:`Все сервисы`,icon:(0,g.jsx)(s,{size:24}),items:f}],y=[{layoutType:n.Desktop,label:`desktop`},{layoutType:n.Mobile,label:`mobile`}],b={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsx)(i,{sectionTitle:`Trigger`,firstColumnHeader:`layoutType`,columnHeaders:[`default`,`disabled`],rows:y.map(({layoutType:e,label:t})=>({variantLabel:t,cells:[!1,!0].map(n=>(0,g.jsx)(r,{layoutType:e,children:(0,g.jsx)(`div`,{className:m.cell,children:(0,g.jsx)(l,{open:!1,disabled:n,segments:v,settingItems:p})})},`${t}-${n}`))}))})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    cells: [false, true].map(disabled => <LayoutScope key={\`\${label}-\${disabled}\`} layoutType={layoutType}>
            <div className={styles.cell}>
              <MainMenu open={false} disabled={disabled} segments={SEGMENTS} settingItems={MAIN_MENU_SIDEBAR_ITEMS} />
            </div>
          </LayoutScope>)
  }))} />
}`,...b.parameters?.docs?.source},description:{story:"В матрице только закрытое состояние триггера: дровер рендерится в portal и в `StoryTable`\nперекрыл бы соседние ячейки. Открытое меню снимается отдельными `open-*` снимками\nв `__test__/MainMenu/visual.spec.ts`.",...b.parameters?.docs?.description}}},x=[`VisualMatrix`]}))();export{b as VisualMatrix,x as __namedExportsOrder,_ as default};
//# sourceMappingURL=MainMenu.VisualMatrix.stories-CIwsHFr5.js.map