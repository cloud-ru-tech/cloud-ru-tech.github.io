import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{g as i,t as a,u as o}from"./src-Dxa8on6G.js";import{c as s,l as c}from"./fixtures-DfBWGfRz.js";import{n as l,r as u}from"./testIds-BH8EQRKz.js";import{n as d,t as f}from"./styles.module-Dlkg2V-u.js";function p(){let[e,t]=(0,m.useState)(()=>y.slice(0,b)),[n,r]=(0,m.useState)(!1),i=e.length<y.length,a=(0,m.useCallback)(()=>{r(!0),window.setTimeout(()=>{t(e=>y.slice(0,Math.min(e.length+b,y.length))),r(!1)},x)},[]);return(0,h.jsx)(`div`,{className:d.scrollArea,children:(0,h.jsx)(o,{"data-test-id":l.table.root,data:e,columns:S,getRowId:e=>e.id,loading:n,hasMore:i,onLoadMore:a,loadMoreTrigger:`button`,outline:!0})})}var m,h,g,_,v,y,b,x,S,C,w;t((()=>{a(),m=e(n(),1),s(),u(),f(),h=r(),{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Data display/Table/InfiniteTable/Examples/LoadMoreButton`,id:`components-table-infinitetable-examples-loadmorebutton`,component:o,parameters:{layout:`fullscreen`}},y=c(45),b=15,x=400,S=i([{key:`name`,header:`Имя`,sortable:!0,width:200},{key:`email`,header:`Email`,width:240},{key:`role`,header:`Роль`,width:140},{key:`amount`,header:`Сумма`,align:`right`,width:140,format:`currency`}]),C={tags:[`dev`,`test`],render:()=>(0,h.jsx)(p,{}),play:async({canvasElement:e})=>{let t=_(e),n=t.getByTestId(l.table.root);await g(n).toBeVisible();let r=t.getByTestId(l.component.loadMoreButton);await g(r).toBeVisible()}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <LoadMoreButtonTable />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.table.root);
    await expect(root).toBeVisible();

    // кнопка «Загрузить ещё» видна, т.к. hasMore=true
    const btn = canvas.getByTestId(TEST_IDS.component.loadMoreButton);
    await expect(btn).toBeVisible();
  }
}`,...C.parameters?.docs?.source}}},w=[`LoadMoreButton`]}))();export{C as LoadMoreButton,w as __namedExportsOrder,v as default};
//# sourceMappingURL=InfiniteTable.LoadMoreButton.stories-D9ZjIS_b.js.map