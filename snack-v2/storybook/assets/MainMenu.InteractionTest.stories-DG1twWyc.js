import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-BdtyM0cx.js";import{a as u,c as d,o as f,t as p}from"./src-BtlnWtMM.js";import{g as m,h,i as g,m as _,n as v}from"./constants-DYu-L0-Y.js";import{n as y,t as b}from"./NewNavigationBanner-CuqNKZuX.js";function x({setOpen:e}){let[t,n]=(0,S.useState)(!1),r=u();return(0,C.jsx)(l,{children:(0,C.jsxs)(a,{children:[(0,C.jsx)(s,{children:`InteractionTest`}),(0,C.jsx)(o,{children:`Открытие drawer по кнопке MainMenuSVG и закрытие через Escape.`}),(0,C.jsx)(i,{align:`center`,children:(0,C.jsx)(f,{open:t,setOpen:t=>{e(t),n(t)},search:r,settingItems:_,serviceGroups:m,platformGroups:h,sidebarBottomSlot:(0,C.jsx)(y,{...v})})})]})})}var S,C,w,T,E,D,O,k,A,j;t((()=>{p(),S=e(n(),1),c(),g(),b(),C=r(),{expect:w,fn:T,userEvent:E,waitFor:D,within:O}=__STORYBOOK_MODULE_TEST__,k={title:`Uikit Product/Layout & containers/Layout/Header Legacy/Main Menu/Tests/Interaction`,id:`uikit-product-layout-header-legacy-main-menu-tests-interaction`,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{setOpen:T()},render:e=>(0,C.jsx)(x,{...e})},A={tags:[`test`],play:async({canvasElement:e,args:t})=>{let n=O(e);await E.click(n.getByTestId(d.trigger)),await D(()=>{w(O(document.body).getByTestId(d.drawer)).toBeVisible()}),w(t.setOpen).toHaveBeenCalledWith(!0),await E.keyboard(`{Escape}`),await D(()=>{w(O(document.body).queryByTestId(d.drawer)).not.toBeInTheDocument()}),w(t.setOpen).toHaveBeenCalledWith(!1)}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['test'],
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(TEST_IDS.trigger));
    await waitFor(() => {
      expect(within(document.body).getByTestId(TEST_IDS.drawer)).toBeVisible();
    });
    expect(args.setOpen).toHaveBeenCalledWith(true);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(within(document.body).queryByTestId(TEST_IDS.drawer)).not.toBeInTheDocument();
    });
    expect(args.setOpen).toHaveBeenCalledWith(false);
  }
}`,...A.parameters?.docs?.source}}},j=[`InteractionTest`]}))();export{A as InteractionTest,j as __namedExportsOrder,k as default};
//# sourceMappingURL=MainMenu.InteractionTest.stories-DG1twWyc.js.map