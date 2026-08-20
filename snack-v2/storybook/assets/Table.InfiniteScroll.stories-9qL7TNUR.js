import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{t as i,v as a}from"./src-DFSCavZ3.js";import{a as o,c as s,l as c}from"./fixtures-Dvr84QN0.js";import{n as l,r as u}from"./testIds-CRkqsqn12.js";import{n as d,t as f}from"./sharedMeta-Cm7wn_nl.js";import{n as p,t as m}from"./styles.module-s2CWiWjM.js";function h(){let[e,t]=(0,g.useState)(()=>S.slice(0,C)),[n,r]=(0,g.useState)(!1),i=(0,g.useRef)(null);return(0,g.useEffect)(()=>{let n=i.current;if(!n||e.length>=S.length)return;let a,o=new IntersectionObserver(n=>{n.some(e=>e.isIntersecting)&&(o.disconnect(),r(!0),a=window.setTimeout(()=>{t(S.slice(0,e.length+C)),r(!1)},w))});return o.observe(n),()=>{o.disconnect(),a!==void 0&&window.clearTimeout(a)}},[e.length]),(0,_.jsx)(`div`,{className:p.scrollArea,children:(0,_.jsx)(a,{"data-test-id":l.table.root,data:e,columnDefinitions:x,infiniteLoading:!0,loading:n,scrollRef:i,outline:!0})})}var g,_,v,y,b,x,S,C,w,T,E;t((()=>{i(),g=e(n(),1),s(),u(),f(),m(),_=r(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Data display/Table/Table/Examples/InfiniteScroll`,id:`components-table-table-examples-infinitescroll`,...d},x=o({withStatusColumn:!0}),S=c(60),C=15,w=400,T={tags:[`dev`,`test`],render:()=>(0,_.jsx)(h,{}),play:async({canvasElement:e})=>{let t=y(e).getByTestId(l.table.root);await v(t).toBeVisible(),v(y(t).getAllByTestId(l.component.bodyRow)).toHaveLength(C)}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <InfiniteScrollTable />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.table.root);
    await expect(root).toBeVisible();
    // первая порция отрисована целиком: infinite-режим не пагинирует строки;
    // добор по скроллу — реальный браузерный сценарий, ассертится в Playwright
    expect(within(root).getAllByTestId(TEST_IDS.component.bodyRow)).toHaveLength(PAGE_LENGTH);
  }
}`,...T.parameters?.docs?.source}}},E=[`InfiniteScroll`]}))();export{T as InfiniteScroll,E as __namedExportsOrder,b as default};
//# sourceMappingURL=Table.InfiniteScroll.stories-9qL7TNUR.js.map