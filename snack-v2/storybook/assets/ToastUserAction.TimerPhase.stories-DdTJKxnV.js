import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-CqCwb0Nr.js";import{a as u,t as d}from"./src-CVvAtkaN.js";import{O as f,S as p,i as m,r as h,t as g}from"./src-CJh6fX-s.js";import{n as _,t as v}from"./testIds-B7JXpPVS.js";function y(){return(0,b.useEffect)(()=>()=>m.userAction.dismiss({containerId:E}),[]),(0,x.jsxs)(l,{children:[(0,x.jsxs)(a,{children:[(0,x.jsx)(s,{children:`TimerPhase`}),(0,x.jsx)(o,{children:`Отсчёт идёт 4 секунды. Наведите курсор на карточку — таймер встанет на паузу, и кольцо останется на текущей фазе: через секунду это ровно три четверти и цифра 3.`}),(0,x.jsx)(i,{align:`center`,children:(0,x.jsx)(u,{label:`Показать тост`,onClick:()=>h({type:f.UserAction,toasterProps:{label:`Изменения сохранены`,timer:!0},containerProps:{type:f.UserAction,containerId:E},toastOptions:{autoClose:D}}),"data-test-id":v.timerPhase.triggerOpen})})]}),(0,x.jsx)(p,{type:f.UserAction,containerId:E,autoClose:D})]})}var b,x,S,C,w,T,E,D,O,k,A;t((()=>{d(),g(),b=e(n(),1),c(),_(),x=r(),{expect:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E=`toast-user-action-timer-phase`,D=4e3,O={title:`Snack/Overlays/Toaster/ToastUserAction/Examples/TimerPhase`,id:`components-toaster-toastuseraction-examples-timerphase`,component:p,parameters:{layout:`fullscreen`,controls:{disable:!0}},render:()=>(0,x.jsx)(y,{})},k={tags:[`dev`,`test`],play:async({canvasElement:e})=>{let t=T(e);await C.click(t.getByTestId(v.timerPhase.triggerOpen));let n=await w(()=>T(document.body).getByTestId(v.userActionRoot));await w(()=>S(n).toBeVisible())}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(TEST_IDS.timerPhase.triggerOpen));

    // Тост въезжает анимацией, поэтому ждём не появления в DOM, а видимости.
    const toast = await waitFor(() => within(document.body).getByTestId(TEST_IDS.userActionRoot));
    await waitFor(() => expect(toast).toBeVisible());
  }
}`,...k.parameters?.docs?.source}}},A=[`TimerPhase`]}))();export{k as TimerPhase,A as __namedExportsOrder,O as default};
//# sourceMappingURL=ToastUserAction.TimerPhase.stories-DdTJKxnV.js.map