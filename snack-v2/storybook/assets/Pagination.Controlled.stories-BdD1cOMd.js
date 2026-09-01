import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-B2mzxEaG.js";import{i as u,t as d,u as f}from"./src-DsCGo8co.js";import{n as p,t as m}from"./testIds-Cs3BhFoA.js";function h(){let[e,t]=(0,g.useState)(1);return(0,_.jsx)(l,{children:(0,_.jsxs)(a,{width:`wide`,children:[(0,_.jsx)(s,{children:`Controlled`}),(0,_.jsx)(o,{children:`Внешний state контролирует страницу; клики по нумерации синхронизируются с родителем.`}),(0,_.jsxs)(i,{align:`center`,children:[(0,_.jsx)(`div`,{"data-test-id":S,children:e}),(0,_.jsx)(u,{"data-test-id":m.pagination.root,total:10,page:e,maxLength:7,onChange:t})]})]})})}var g,_,v,y,b,x,S,C,w,T;t((()=>{d(),g=e(n(),1),c(),p(),_=r(),{expect:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S=`pagination-parent-state`,C={title:`Snack/Navigation/Pagination/Pagination/Tests/Controlled`,id:`components-pagination-pagination-tests-controlled`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}},render:()=>(0,_.jsx)(h,{})},w={tags:[`test`,`dev`],play:async({canvasElement:e,step:t})=>{let n=x(e),r=n.getByTestId(S);await t(`initial: parent state shows page 1`,async()=>{v(r.textContent).toBe(`1`)}),await t(`click: page button "3" updates parent state to 3`,async()=>{await y.click(n.getByTestId(f(3))),await b(()=>v(r.textContent).toBe(`3`))}),await t(`active: page 3 button reflects active state`,async()=>{let e=n.getByTestId(f(3));await b(()=>v(e).toHaveAttribute(`aria-current`,`page`))}),await t(`click: next button advances parent state to 4`,async()=>{await y.click(n.getByTestId(m.pagination.next)),await b(()=>v(r.textContent).toBe(`4`))})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const parentState = canvas.getByTestId(PARENT_STATE_TEST_ID);
    await step('initial: parent state shows page 1', async () => {
      expect(parentState.textContent).toBe('1');
    });
    await step('click: page button "3" updates parent state to 3', async () => {
      await userEvent.click(canvas.getByTestId(getPageNumberTestId(3)));
      await waitFor(() => expect(parentState.textContent).toBe('3'));
    });
    await step('active: page 3 button reflects active state', async () => {
      const active = canvas.getByTestId(getPageNumberTestId(3));
      await waitFor(() => expect(active).toHaveAttribute('aria-current', 'page'));
    });
    await step('click: next button advances parent state to 4', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.pagination.next));
      await waitFor(() => expect(parentState.textContent).toBe('4'));
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`Controlled`]}))();export{w as Controlled,T as __namedExportsOrder,C as default};
//# sourceMappingURL=Pagination.Controlled.stories-BdD1cOMd.js.map