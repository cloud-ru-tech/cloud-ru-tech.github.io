import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-DMWsC78w.js";import{a as u,n as d,t as f}from"./src-CLtFnQ7d.js";import{n as p,t as m}from"./styles2.module-DfOMf7ik.js";import{t as h}from"./testIds-BkZKl3lb.js";function g(){let[e,t]=(0,_.useState)(0);return(0,v.jsx)(l,{children:(0,v.jsxs)(a,{width:`wide`,children:[(0,v.jsx)(s,{children:`Controlled`}),(0,v.jsx)(o,{children:`Внешний state контролирует страницу карусели; клики синхронизируются с родителем.`}),(0,v.jsx)(i,{align:`center`,children:(0,v.jsxs)(`div`,{className:p.container,children:[(0,v.jsx)(`div`,{"data-test-id":C,children:e}),(0,v.jsxs)(d,{"data-test-id":u.root,showItems:1,arrows:!0,pagination:!0,controlsVisibility:`always`,state:{page:e,onChange:t},children:[(0,v.jsx)(`div`,{className:`${p.slide} ${p.slideIndigo}`,children:`Slide 1`}),(0,v.jsx)(`div`,{className:`${p.slide} ${p.slideSky}`,children:`Slide 2`}),(0,v.jsx)(`div`,{className:`${p.slide} ${p.slideEmerald}`,children:`Slide 3`})]})]})})]})})}var _,v,y,b,x,S,C,w,T,E;t((()=>{f(),_=e(n(),1),c(),m(),h(),v=r(),{expect:y,userEvent:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C=`carousel-parent-state`,w={title:`Snack/Layout & containers/Carousel/Tests/Controlled`,id:`components-carousel-tests-controlled`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}},render:()=>(0,v.jsx)(g,{})},T={tags:[`test`,`dev`],play:async({canvasElement:e,step:t})=>{let n=S(e),r=n.getByTestId(C);await t(`initial: parent state shows page 0`,async()=>{y(r.textContent).toBe(`0`)}),await t(`click: next arrow updates parent state to 1`,async()=>{await b.click(n.getByTestId(u.arrowNext)),await x(()=>y(r.textContent).toBe(`1`))}),await t(`click: next arrow again updates parent state to 2`,async()=>{await b.click(n.getByTestId(u.arrowNext)),await x(()=>y(r.textContent).toBe(`2`))})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const parentState = canvas.getByTestId(PARENT_STATE_TEST_ID);
    await step('initial: parent state shows page 0', async () => {
      expect(parentState.textContent).toBe('0');
    });
    await step('click: next arrow updates parent state to 1', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.arrowNext));
      await waitFor(() => expect(parentState.textContent).toBe('1'));
    });
    await step('click: next arrow again updates parent state to 2', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.arrowNext));
      await waitFor(() => expect(parentState.textContent).toBe('2'));
    });
  }
}`,...T.parameters?.docs?.source}}},E=[`Controlled`]}))();export{T as Controlled,E as __namedExportsOrder,w as default};
//# sourceMappingURL=Carousel.Controlled.stories-BbZhwRhD.js.map