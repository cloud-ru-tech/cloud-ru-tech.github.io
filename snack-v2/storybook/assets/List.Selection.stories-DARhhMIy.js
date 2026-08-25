import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-BUDedHtH.js";import{N as u,k as d,pt as f,sn as p,t as m,zt as h}from"./system-DUR-qcAO.js";import{a as g,t as _,x as v}from"./src-DqYGhDZI.js";import{n as y,t as b}from"./testIds-zOjMf_tk.js";import{n as x,t as S}from"./stories.module-Cv0zmHWk.js";function C(){let[e,t]=(0,w.useState)(`overview`),[n,r]=(0,w.useState)([`overview`,`billing`]);return(0,T.jsx)(l,{children:(0,T.jsxs)(a,{width:`wide`,children:[(0,T.jsx)(s,{children:`Selection`}),(0,T.jsx)(o,{children:`Controlled selection: single vs multiple — clic items to toggle.`}),(0,T.jsx)(i,{align:`center`,children:(0,T.jsxs)(`div`,{className:x.matrix,children:[(0,T.jsxs)(`div`,{className:x.listFrame,children:[(0,T.jsx)(`strong`,{children:`mode = single`}),(0,T.jsx)(g,{"data-test-id":`${b.list.selectionScenario}-single`,items:k,size:`m`,selection:{mode:`single`,value:e,onChange:t}})]}),(0,T.jsxs)(`div`,{className:x.listFrame,children:[(0,T.jsx)(`strong`,{children:`mode = multiple`}),(0,T.jsx)(g,{"data-test-id":`${b.list.selectionScenario}-multiple`,items:k,size:`m`,selection:{mode:`multiple`,value:n,onChange:r}})]})]})})]})})}var w,T,E,D,O,k,A,j;t((()=>{m(),_(),w=e(n(),1),c(),y(),S(),T=r(),{userEvent:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`Snack/Data display/List/List/Examples/Selection`,id:`components-list-list-examples-selection`,component:g,parameters:{layout:`fullscreen`}},k=[{id:`overview`,beforeContent:(0,T.jsx)(f,{}),content:{label:`Overview`,description:`Summary of the project`,caption:`12 items`},afterContent:(0,T.jsx)(p,{})},{id:`analytics`,beforeContent:(0,T.jsx)(h,{}),content:{label:`Analytics`,description:`Usage metrics`,caption:`Today`},afterContent:(0,T.jsx)(p,{})},{id:`billing`,beforeContent:(0,T.jsx)(d,{}),content:{label:`Billing`,description:`Invoices and payments`,caption:`₽ 1 240`},afterContent:(0,T.jsx)(p,{})},{id:`settings`,beforeContent:(0,T.jsx)(u,{}),content:{label:`Settings`,description:`Workspace preferences`},afterContent:(0,T.jsx)(p,{})}],A={tags:[`dev`,`test`],render:()=>(0,T.jsx)(C,{}),play:async({canvasElement:e,step:t})=>{let n=D(e),r=n.getByTestId(`${b.list.selectionScenario}-single`),i=n.getByTestId(`${b.list.selectionScenario}-multiple`);await t(`click items in single mode (toggles selection)`,async()=>{let e=r.querySelectorAll(`[data-test-id^="${v.baseItem}_"]`);e[1]&&await E.click(e[1]),e[2]&&await E.click(e[2])}),await t(`click items in multiple mode (toggles checkbox)`,async()=>{let e=i.querySelectorAll(`[data-test-id^="${v.baseItem}_"]`);e[1]&&await E.click(e[1]),e[3]&&await E.click(e[3])})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <SelectionScenario />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const single = canvas.getByTestId(\`\${TEST_IDS.list.selectionScenario}-single\`);
    const multi = canvas.getByTestId(\`\${TEST_IDS.list.selectionScenario}-multiple\`);
    await step('click items in single mode (toggles selection)', async () => {
      const items = single.querySelectorAll(\`[data-test-id^="\${INTERNAL_TEST_IDS.baseItem}_"]\`);
      if (items[1]) await userEvent.click(items[1] as HTMLElement);
      if (items[2]) await userEvent.click(items[2] as HTMLElement);
    });
    await step('click items in multiple mode (toggles checkbox)', async () => {
      const items = multi.querySelectorAll(\`[data-test-id^="\${INTERNAL_TEST_IDS.baseItem}_"]\`);
      if (items[1]) await userEvent.click(items[1] as HTMLElement);
      if (items[3]) await userEvent.click(items[3] as HTMLElement);
    });
  }
}`,...A.parameters?.docs?.source}}},j=[`Selection`]}))();export{A as Selection,j as __namedExportsOrder,O as default};
//# sourceMappingURL=List.Selection.stories-DARhhMIy.js.map