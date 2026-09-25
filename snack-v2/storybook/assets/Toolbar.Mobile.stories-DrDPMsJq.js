import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,f as o,g as s,ot as c,p as l,t as u,u as d,wn as f}from"./iframe-qs8RgOhH.js";import{t as p,u as m}from"./src-_OT8Csdb.js";import{Zt as h,dn as g,t as _}from"./system-BjOKAueR.js";import{c as v,n as y,t as b}from"./src-9ky_x1wp.js";import{n as x,t as S}from"./styles.module-BkQ9yNwB.js";import{n as C,t as w}from"./testIds-BRs4H-Lf.js";function T(){let e=(0,E.useId)(),[t,n]=(0,E.useState)(``),[r,c]=(0,E.useState)(!0);return(0,D.jsx)(o,{children:(0,D.jsxs)(l,{children:[(0,D.jsx)(s,{children:`Mobile`}),(0,D.jsx)(a,{children:`Mobile: bulk-действия в BottomSheet без затемнения фона (пока есть выбор); overflow «⋯» — отдельный BottomSheet с backdrop.`}),(0,D.jsxs)(d,{block:!0,children:[(0,D.jsxs)(`label`,{className:x.mobileSelectionControl,htmlFor:e,children:[(0,D.jsx)(m,{id:e,size:`s`,checked:r,onChange:c,"data-test-id":w.mobileSelectionToggle}),(0,D.jsx)(`span`,{className:x.mobileSelectionControlLabel,children:`Есть выбранные строки таблицы`})]}),(0,D.jsx)(`div`,{className:x.containerMobile,children:(0,D.jsx)(i,{layoutType:f.Mobile,children:(0,D.jsx)(y,{"data-test-id":w.mobile,search:{value:t,onChange:n},onRefresh:()=>void 0,moreActions:[{content:{label:`Действие`},onClick:()=>void 0}],checked:r,onCheck:()=>c(e=>!e),selectedCount:r?12:0,totalCount:100,bulkActions:[{label:`Подтвердить`,icon:g,onClick:()=>void 0},{label:`Отклонить`,icon:h,onClick:()=>void 0}]})})})]})]})})}var E,D,O,k,A,j,M;t((()=>{c(),_(),p(),b(),E=e(n(),1),u(),S(),C(),D=r(),{expect:O,within:k}=__STORYBOOK_MODULE_TEST__,A={title:`Snack/Actions/Toolbar/Examples/Mobile`,id:`components-toolbar-examples-mobile`,component:T,parameters:{layout:`fullscreen`}},j={tags:[`dev`,`test`],play:async({canvasElement:e})=>{let t=k(e);await O(t.getByTestId(w.mobile)).toBeVisible(),await O(t.getByTestId(w.mobileSelectionToggle)).toBeVisible();let n=t.getAllByTestId(v.checkbox);O(n.length).toBeGreaterThan(0),await O(n[0]).toBeVisible()}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
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
//# sourceMappingURL=Toolbar.Mobile.stories-DrDPMsJq.js.map