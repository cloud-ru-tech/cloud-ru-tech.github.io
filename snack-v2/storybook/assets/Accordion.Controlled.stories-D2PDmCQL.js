import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{d as i,l as a,m as o,t as s,u as c}from"./iframe-BiKgHgfb.js";import{a as l,c as u,n as d,t as f}from"./src-NzwWKd0m.js";import{n as p,t as m}from"./styles.module-BSJOTdPD.js";import{n as h,t as g}from"./testIds-Dwsz3jAY.js";function _({onExpandedChange:e}){let[t,n]=(0,v.useState)([]);return(0,y.jsx)(c,{children:(0,y.jsxs)(i,{width:`wide`,children:[(0,y.jsx)(o,{children:`Controlled`}),(0,y.jsx)(a,{children:`Controlled Accordion — состояние expanded хранится в родительском state.`}),(0,y.jsx)(`div`,{className:p.story,children:(0,y.jsx)(d,{selectionMode:l.Multiple,expanded:t,onExpandedChange:t=>{let r=t??[];n(r),e?.(r)},children:(0,y.jsxs)(`div`,{className:p.listM,children:[(0,y.jsx)(d.CollapseBlockPrimary,{id:`block-1`,"data-test-id":g.accordion.block1,title:`Block 1`,children:`Content 1`}),(0,y.jsx)(d.CollapseBlockPrimary,{id:`block-2`,"data-test-id":g.accordion.block2,title:`Block 2`,children:`Content 2`})]})})})]})})}var v,y,b,x,S,C,w,T,E,D;t((()=>{v=e(n(),1),s(),f(),u(),m(),h(),y=r(),{expect:b,fn:x,userEvent:S,waitFor:C,within:w}=__STORYBOOK_MODULE_TEST__,T={title:`Snack/Layout & containers/Accordion/Accordion/Tests/Controlled`,id:`components-accordion-accordion-tests-controlled`,component:_,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onExpandedChange:x()}},E={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=w(t),i=r.getByTestId(g.accordion.block1),a=r.getByTestId(g.accordion.block2);await n(`click block-1: callback fires, parent state -> ["block-1"], DOM expanded`,async()=>{let t=w(i).getAllByTestId(g.collapseBlock.chevron)[0];await S.click(t),await C(()=>b(e.onExpandedChange).toHaveBeenCalled()),b(e.onExpandedChange).toHaveBeenLastCalledWith([`block-1`]),await C(()=>b(i).toHaveAttribute(`data-expanded`,`true`))}),await n(`click block-2: both expanded in controlled state`,async()=>{let t=w(a).getAllByTestId(g.collapseBlock.chevron)[0];await S.click(t),await C(()=>b(a).toHaveAttribute(`data-expanded`,`true`)),await C(()=>b(i).toHaveAttribute(`data-expanded`,`true`)),b(e.onExpandedChange).toHaveBeenLastCalledWith([`block-1`,`block-2`])})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const block1 = canvas.getByTestId(TEST_IDS.accordion.block1);
    const block2 = canvas.getByTestId(TEST_IDS.accordion.block2);
    await step('click block-1: callback fires, parent state -> ["block-1"], DOM expanded', async () => {
      const chevron1 = within(block1).getAllByTestId(TEST_IDS.collapseBlock.chevron)[0];
      await userEvent.click(chevron1);
      await waitFor(() => expect(args.onExpandedChange).toHaveBeenCalled());
      expect(args.onExpandedChange).toHaveBeenLastCalledWith(['block-1']);
      await waitFor(() => expect(block1).toHaveAttribute('data-expanded', 'true'));
    });
    await step('click block-2: both expanded in controlled state', async () => {
      const chevron2 = within(block2).getAllByTestId(TEST_IDS.collapseBlock.chevron)[0];
      await userEvent.click(chevron2);
      await waitFor(() => expect(block2).toHaveAttribute('data-expanded', 'true'));
      await waitFor(() => expect(block1).toHaveAttribute('data-expanded', 'true'));
      expect(args.onExpandedChange).toHaveBeenLastCalledWith(['block-1', 'block-2']);
    });
  }
}`,...E.parameters?.docs?.source}}},D=[`Controlled`]}))();export{E as Controlled,D as __namedExportsOrder,T as default};
//# sourceMappingURL=Accordion.Controlled.stories-D2PDmCQL.js.map