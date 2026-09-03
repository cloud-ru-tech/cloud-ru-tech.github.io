import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-BdtyM0cx.js";import{i as u,n as d,t as f}from"./src-mBucAtxe.js";import{n as p,t as m}from"./styles.module-CrtsmC9o.js";import{n as h,t as g}from"./testIds-B4PNLEx4.js";import{i as _,n as v}from"./_shared-BIapEj5-.js";function y(e){let[t,n]=(0,b.useState)(5);return(0,b.useEffect)(()=>{let e=setTimeout(()=>n(e=>e+30),200);return()=>clearTimeout(e)},[]),(0,x.jsx)(l,{children:(0,x.jsxs)(a,{width:`wide`,children:[(0,x.jsx)(s,{children:`AutoscrollBottom`}),(0,x.jsx)(o,{children:`При добавлении новых строк скролл автоматически едет к нижней границе.`}),(0,x.jsx)(i,{align:`center`,children:(0,x.jsx)(`div`,{className:p.scroll,children:(0,x.jsx)(d,{...e,children:(0,x.jsx)(`div`,{className:p.scrollContent,children:Array.from({length:t},(e,t)=>(0,x.jsxs)(`div`,{className:p.playgroundLine,children:[`Line `,t+1]},t))})})})})]})})}var b,x,S,C,w,T,E;t((()=>{f(),b=e(n(),1),c(),m(),h(),_(),x=r(),{expect:S,waitFor:C}=__STORYBOOK_MODULE_TEST__,w={title:`Snack/Layout & containers/Scroll/Examples/AutoscrollBottom`,id:`components-scroll-examples-autoscrollbottom`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}}},T={tags:[`dev`,`test`],args:{autoscrollTo:u.Bottom,"data-test-id":g.root},render:e=>(0,x.jsx)(y,{...e}),play:async({canvasElement:e})=>{let t=v(e),n=t.querySelector(`.os-viewport`)??t.querySelector(`[data-overlayscrollbars-viewport]`)??t;await C(()=>{let e=n.scrollHeight-n.clientHeight-n.scrollTop;S(e).toBeLessThanOrEqual(2)},{timeout:3e3})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    autoscrollTo: AUTOSCROLL_TO.Bottom,
    'data-test-id': TEST_IDS.root
  },
  render: args => <AutoscrollScenario {...args} />,
  play: async ({
    canvasElement
  }) => {
    const host = getHost(canvasElement);
    const viewport = host.querySelector<HTMLElement>('.os-viewport') ?? host.querySelector<HTMLElement>('[data-overlayscrollbars-viewport]') as HTMLElement | null ?? host;
    await waitFor(() => {
      const distance = viewport.scrollHeight - viewport.clientHeight - viewport.scrollTop;
      expect(distance).toBeLessThanOrEqual(2);
    }, {
      timeout: 3000
    });
  }
}`,...T.parameters?.docs?.source}}},E=[`AutoscrollBottom`]}))();export{T as AutoscrollBottom,E as __namedExportsOrder,w as default};
//# sourceMappingURL=Scroll.AutoscrollBottom.stories-3TVqM9d8.js.map