import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{bn as n,ot as r}from"./iframe-DwFVG3U0.js";import{M as i,N as a,U as o,b as s,t as c}from"./src-DU5WoUZH.js";import{c as l,n as u,s as d}from"./fixtures-DPfE8sZ9.js";import{n as f,r as p}from"./testIds-CZrmWxhU.js";function m({layoutType:e,pinned:t}){return(0,g.jsx)(n,{layoutType:e,children:(0,g.jsx)(s,{data:u,columnDefinitions:[{accessorKey:`role`,header:`Тип`,size:160}],getRowId:e=>e.id,view:o.Table,expanding:{getSubRows:d,expandingColumnDefinition:{accessorKey:`name`,header:`Подразделение`,pinned:t}},suppressToolbar:!0,suppressPagination:!0})})}function h(e){return async({canvasElement:t})=>{let n=y(t);await v(()=>{let r=n.getByText(`Подразделение`),a=t.querySelectorAll(`[data-column-id="${i}"]`),o=`[data-test-id="${f.component.pinnedCells}"]`;_(a.length).toBeGreaterThan(0),_(r.closest(o)?.getAttribute(`data-position`)??null).toBe(e);for(let t of a)_(t.closest(o)?.getAttribute(`data-position`)??null).toBe(e)})}}var g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{r(),c(),a(),l(),p(),g=t(),{expect:_,waitFor:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Data display/Table/Table/Tests/TreePinning`,id:`components-table-table-tests-treepinning`,component:m,tags:[`test`,`dev`],parameters:{layout:`fullscreen`,controls:{disable:!0}}},x={name:`Desktop: закрепление по умолчанию`,args:{layoutType:`desktop`},play:h(`left`)},S={name:`Mobile: без закрепления по умолчанию`,args:{layoutType:`mobile`},play:h(null)},C={name:`Desktop: pinned=true`,args:{layoutType:`desktop`,pinned:!0},play:h(`left`)},w={name:`Desktop: pinned=false`,args:{layoutType:`desktop`,pinned:!1},play:h(null)},T={name:`Mobile: pinned=true`,args:{layoutType:`mobile`,pinned:!0},play:h(`left`)},E={name:`Mobile: pinned=false`,args:{layoutType:`mobile`,pinned:!1},play:h(null)},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Desktop: закрепление по умолчанию',
  args: {
    layoutType: 'desktop'
  },
  play: checkPinning('left')
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Mobile: без закрепления по умолчанию',
  args: {
    layoutType: 'mobile'
  },
  play: checkPinning(null)
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Desktop: pinned=true',
  args: {
    layoutType: 'desktop',
    pinned: true
  },
  play: checkPinning('left')
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Desktop: pinned=false',
  args: {
    layoutType: 'desktop',
    pinned: false
  },
  play: checkPinning(null)
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Mobile: pinned=true',
  args: {
    layoutType: 'mobile',
    pinned: true
  },
  play: checkPinning('left')
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Mobile: pinned=false',
  args: {
    layoutType: 'mobile',
    pinned: false
  },
  play: checkPinning(null)
}`,...E.parameters?.docs?.source}}},D=[`DesktopDefault`,`MobileDefault`,`DesktopPinnedTrue`,`DesktopPinnedFalse`,`MobilePinnedTrue`,`MobilePinnedFalse`]}))();export{x as DesktopDefault,w as DesktopPinnedFalse,C as DesktopPinnedTrue,S as MobileDefault,E as MobilePinnedFalse,T as MobilePinnedTrue,D as __namedExportsOrder,b as default};
//# sourceMappingURL=Table.TreePinning.stories-BeMOOwsM.js.map