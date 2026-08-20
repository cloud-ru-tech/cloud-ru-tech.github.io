import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,fn as o,gn as s,l as c,m as l,nt as u,t as d,u as f}from"./iframe-Bd5xtg2w.js";import{t as p,u as m}from"./src-Lx_en1of.js";import{Ut as h,t as g,tn as _}from"./system-D2QEyDJQ.js";import{c as v,n as y,t as b}from"./src-BDyWtx4M.js";import{n as x,t as S}from"./styles.module-CBAnneDZ.js";import{n as C,t as w}from"./testIds-UMZWqCLb.js";function T(){let e=(0,E.useId)(),[t,n]=(0,E.useState)(``),[r,u]=(0,E.useState)(!0);return(0,D.jsx)(f,{children:(0,D.jsxs)(a,{children:[(0,D.jsx)(l,{children:`Mobile`}),(0,D.jsx)(c,{children:`Mobile: bulk-действия в BottomSheet без затемнения фона (пока есть выбор); overflow «⋯» — отдельный BottomSheet с backdrop.`}),(0,D.jsxs)(i,{block:!0,children:[(0,D.jsxs)(`label`,{className:x.mobileSelectionControl,htmlFor:e,children:[(0,D.jsx)(m,{id:e,size:`s`,checked:r,onChange:u,"data-test-id":w.mobileSelectionToggle}),(0,D.jsx)(`span`,{className:x.mobileSelectionControlLabel,children:`Есть выбранные строки таблицы`})]}),(0,D.jsx)(`div`,{className:x.containerMobile,children:(0,D.jsx)(o,{layoutType:s.Mobile,children:(0,D.jsx)(y,{"data-test-id":w.mobile,search:{value:t,onChange:n},onRefresh:()=>void 0,moreActions:[{content:{label:`Действие`},onClick:()=>void 0}],checked:r,onCheck:()=>u(e=>!e),selectedCount:r?12:0,totalCount:100,bulkActions:[{label:`Подтвердить`,icon:_,onClick:()=>void 0},{label:`Отклонить`,icon:h,onClick:()=>void 0}]})})})]})]})})}var E,D,O,k,A,j,M;t((()=>{u(),g(),p(),b(),E=e(n(),1),d(),S(),C(),D=r(),{expect:O,within:k}=__STORYBOOK_MODULE_TEST__,A={title:`Snack/Actions/Toolbar/Examples/Mobile`,id:`components-toolbar-examples-mobile`,component:T,parameters:{layout:`fullscreen`}},j={tags:[`dev`,`test`],globals:{density:`comfort`},play:async({canvasElement:e})=>{let t=k(e);await O(t.getByTestId(w.mobile)).toBeVisible(),await O(t.getByTestId(w.mobileSelectionToggle)).toBeVisible();let n=t.getAllByTestId(v.checkbox);O(n.length).toBeGreaterThan(0),await O(n[0]).toBeVisible()}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  globals: {
    density: 'comfort'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId(TEST_IDS.mobile)).toBeVisible();
    await expect(canvas.getByTestId(TEST_IDS.mobileSelectionToggle)).toBeVisible();

    // На mobile bulk-чекбокс рендерится и в строке тулбара, и в BottomSheet
    // (обе точки — один слот select-all, общий data-test-id из @cloud-ru/ds-toolbar).
    const bulkCheckboxes = canvas.getAllByTestId(TOOLBAR_TEST_IDS.checkbox);
    expect(bulkCheckboxes.length).toBeGreaterThan(0);
    await expect(bulkCheckboxes[0]).toBeVisible();
  }
}`,...j.parameters?.docs?.source}}},M=[`Mobile`]}))();export{j as Mobile,M as __namedExportsOrder,A as default};
//# sourceMappingURL=Toolbar.Mobile.stories-D_Q4oqhA.js.map