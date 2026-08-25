import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{t as i,u as a}from"./src-B_ukPWz7.js";import{c as o,l as s}from"./fixtures-DN1XppDJ.js";import{n as c,r as l}from"./testIds--M1w9g6s.js";import{n as u,t as d}from"./styles.module-Dlkg2V-u.js";function f(){let[e,t]=(0,p.useState)(()=>v.slice(0,y)),[n,r]=(0,p.useState)(!1),i=e.length<v.length,o=(0,p.useCallback)(()=>{r(!0),window.setTimeout(()=>{t(e=>v.slice(0,Math.min(e.length+y,v.length))),r(!1)},b)},[]);return(0,m.jsx)(`div`,{className:u.scrollArea,children:(0,m.jsx)(a,{"data-test-id":c.table.root,data:e,columns:x,getRowId:e=>e.id,loading:n,hasMore:i,onLoadMore:o,loadMoreTrigger:`button`,outline:!0})})}var p,m,h,g,_,v,y,b,x,S,C;t((()=>{i(),p=e(n(),1),o(),l(),d(),m=r(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Data display/Table/InfiniteTable/Examples/LoadMoreButton`,id:`components-table-infinitetable-examples-loadmorebutton`,component:a,parameters:{layout:`fullscreen`}},v=s(45),y=15,b=400,x=[{key:`name`,header:`Имя`,sortable:!0,width:200},{key:`email`,header:`Email`,width:240},{key:`role`,header:`Роль`,width:140},{key:`amount`,header:`Сумма`,align:`right`,width:140,format:`currency`}],S={tags:[`dev`,`test`],render:()=>(0,m.jsx)(f,{}),play:async({canvasElement:e})=>{let t=g(e),n=t.getByTestId(c.table.root);await h(n).toBeVisible();let r=t.getByTestId(c.component.loadMoreButton);await h(r).toBeVisible()}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`LoadMoreButton`]}))();export{S as LoadMoreButton,C as __namedExportsOrder,_ as default};
//# sourceMappingURL=InfiniteTable.LoadMoreButton.stories-DyUJZIiy.js.map