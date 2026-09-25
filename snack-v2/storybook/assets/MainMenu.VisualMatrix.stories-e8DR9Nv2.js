import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,i as r,ot as i,t as a,wn as o}from"./iframe-qs8RgOhH.js";import{r as s,t as c}from"./product-zzUAWOb4.js";import{c as l,t as u}from"./src-BesQBTqK.js";import{i as d,n as f,o as p}from"./demoData-6Aow_pXh.js";import{n as m,t as h}from"./styles.module-Zbaj2-su.js";var g,_,v,y,b,x;e((()=>{i(),c(),u(),a(),p(),h(),g=t(),_={title:`Uikit Product/Layout & containers/Layout/Header/MainMenu`,id:`uikit-product-layout-header-mainmenu`,id:`uikit-product-header-mainmenu`,component:l,parameters:{layout:`fullscreen`}},v=[{id:`allServices`,label:`Все сервисы`,icon:(0,g.jsx)(s,{size:24}),items:d}],y=[{layoutType:o.Desktop,label:`desktop`},{layoutType:o.Mobile,label:`mobile`}],b={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsx)(r,{sectionTitle:`Trigger`,firstColumnHeader:`layoutType`,columnHeaders:[`default`,`disabled`],rows:y.map(({layoutType:e,label:t})=>({variantLabel:t,cells:[!1,!0].map(r=>(0,g.jsx)(n,{layoutType:e,children:(0,g.jsx)(`div`,{className:m.cell,children:(0,g.jsx)(l,{open:!1,disabled:r,segments:v,settingItems:f})})},`${t}-${r}`))}))})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=MainMenu.VisualMatrix.stories-e8DR9Nv2.js.map