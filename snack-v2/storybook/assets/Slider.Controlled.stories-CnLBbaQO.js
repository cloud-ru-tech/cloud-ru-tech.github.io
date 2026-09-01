import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-B2mzxEaG.js";import{i as u,n as d,t as f}from"./src-BGJja5Ya.js";import{t as p}from"./testIds-BGcd84S8.js";function m({onChange:e}){let[t,n]=(0,h.useState)(50);return(0,g.jsx)(l,{children:(0,g.jsxs)(a,{children:[(0,g.jsx)(s,{children:`Controlled`}),(0,g.jsx)(o,{children:`Контролируемый слайдер с локальным состоянием.`}),(0,g.jsx)(i,{block:!0,children:(0,g.jsx)(d,{min:0,max:100,step:10,"data-test-id":u.root,value:t,onChange:t=>{let r=Array.isArray(t)?t[0]:t;n(r),e?.(r)}})})]})})}var h,g,_,v,y,b,x,S,C,w;t((()=>{f(),h=e(n(),1),c(),p(),g=r(),{expect:_,fireEvent:v,fn:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Snack/Inputs & Forms/Slider/Examples/Controlled`,id:`components-slider-examples-controlled`,component:m,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onChange:y()}},C={tags:[`dev`,`test`],play:async({args:e,canvasElement:t,step:n})=>{let r=x(t).getByTestId(u.handle);await n(`initial: aria-valuenow reflects controlled value=50`,async()=>{await b(()=>_(r).toHaveAttribute(`aria-valuenow`,`50`))}),await n(`keyboard ArrowRight: parent state updates and DOM aria-valuenow reflects new value`,async()=>{r.focus(),await b(()=>_(r).toHaveFocus()),v.keyDown(r,{key:`ArrowRight`,code:`ArrowRight`,keyCode:39,which:39}),await b(()=>_(e.onChange).toHaveBeenCalled()),_(e.onChange).toHaveBeenLastCalledWith(60),await b(()=>_(r).toHaveAttribute(`aria-valuenow`,`60`))})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const handle = canvas.getByTestId(TEST_IDS.handle);
    await step('initial: aria-valuenow reflects controlled value=50', async () => {
      await waitFor(() => expect(handle).toHaveAttribute('aria-valuenow', '50'));
    });
    await step('keyboard ArrowRight: parent state updates and DOM aria-valuenow reflects new value', async () => {
      handle.focus();
      await waitFor(() => expect(handle).toHaveFocus());
      // rc-slider читает \`e.which || e.keyCode\`, поэтому передаём ArrowRight=39.
      fireEvent.keyDown(handle, {
        key: 'ArrowRight',
        code: 'ArrowRight',
        keyCode: 39,
        which: 39
      });
      await waitFor(() => expect(args.onChange).toHaveBeenCalled());
      expect(args.onChange).toHaveBeenLastCalledWith(60);
      await waitFor(() => expect(handle).toHaveAttribute('aria-valuenow', '60'));
    });
  }
}`,...C.parameters?.docs?.source}}},w=[`Controlled`]}))();export{C as Controlled,w as __namedExportsOrder,S as default};
//# sourceMappingURL=Slider.Controlled.stories-CnLBbaQO.js.map