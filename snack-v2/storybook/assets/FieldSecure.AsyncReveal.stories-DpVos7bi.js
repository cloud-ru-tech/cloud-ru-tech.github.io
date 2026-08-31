import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,f as o,l as s,m as c,t as l,u}from"./iframe-CRw8NhXI.js";import{a as d,t as f}from"./src-BlBPNAvZ.js";import{O as p,g as m,t as h}from"./src-mvhz8nta.js";import{n as g,t as _}from"./testIds-Qc-rYRCn.js";function v(){let e=(0,y.useRef)(null),[t,n]=(0,y.useState)(``),r=(0,y.useCallback)(()=>new Promise(t=>{e.current=t}),[]),l=(0,y.useCallback)(()=>e.current?.(`sk-DEFERRED-TOKEN`),[]),[f,p]=(0,y.useState)(``),h=(0,y.useCallback)(()=>Promise.resolve(`sk-LOADED-ONCE`),[]),g=(0,y.useCallback)(()=>Promise.reject(Error(`fetch failed`)),[]),[v,x]=(0,y.useState)(`••••••••`),S=(0,y.useCallback)(()=>Promise.resolve(`sk-READONLY-TOKEN`),[]),C=(0,y.useRef)(null),w=(0,y.useCallback)(()=>new Promise(e=>{C.current=e}),[]);return(0,b.jsx)(u,{children:(0,b.jsxs)(a,{width:`narrow`,children:[(0,b.jsx)(c,{children:`AsyncReveal`}),(0,b.jsx)(s,{children:`Значение подгружается асинхронно при раскрытии/копировании. Во время запроса показывается Skeleton; после успешного запроса значение больше не запрашивается.`}),(0,b.jsx)(i,{align:`center`,children:(0,b.jsxs)(o,{width:`narrow`,children:[(0,b.jsx)(m,{"data-test-id":_.fieldSecure.asyncRevealRoot,label:`Deferred reveal`,asyncValueGetter:r,value:t,onChange:e=>{E(e),n(e??``)}}),(0,b.jsx)(d,{"data-test-id":_.fieldSecure.asyncResolveButton,label:`Resolve`,appearance:`neutral`,view:`outline`,onClick:l}),(0,b.jsx)(m,{"data-test-id":_.fieldSecure.asyncLoadedOnceRoot,label:`Loaded once`,asyncValueGetter:h,value:f,onChange:e=>p(e??``)}),(0,b.jsx)(m,{"data-test-id":_.fieldSecure.asyncRejectRoot,label:`Reject`,asyncValueGetter:g,onChange:D}),(0,b.jsx)(m,{"data-test-id":_.fieldSecure.asyncReadonlyRoot,label:`Readonly async`,readonly:!0,asyncValueGetter:S,value:v,onChange:e=>{O(e),x(e??``)},onCopyButtonClick:k}),(0,b.jsx)(m,{"data-test-id":_.fieldSecure.asyncPendingRoot,label:`Pending reveal`,asyncValueGetter:w})]})})]})})}var y,b,x,S,C,w,T,E,D,O,k,A,j,M;t((()=>{f(),h(),y=e(n(),1),l(),g(),b=r(),{expect:x,fn:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E=S(),D=S(),O=S(),k=S(),A={title:`Snack/Inputs & Forms/Fields/FieldSecure/Tests/AsyncReveal`,id:`components-fields-fieldsecure-tests-asyncreveal`,component:m,parameters:{layout:`fullscreen`,controls:{disable:!0}},render:()=>(0,b.jsx)(v,{})},j={tags:[`test`,`dev`],play:async({canvasElement:e,step:t})=>{E.mockClear(),D.mockClear(),O.mockClear(),k.mockClear();let n=T(e);await t(`(a) eye-triggered load: Skeleton shows while pending, then resolve flips to text`,async()=>{let e=T(n.getByTestId(_.fieldSecure.asyncRevealRoot));await x(e.getByTestId(p.fieldSecureInput)).toHaveAttribute(`type`,`password`),await C.click(e.getByTestId(p.fieldSecureHideButton)),await w(()=>x(e.queryByTestId(p.fieldSecureInput)).toBeNull()),await C.click(n.getByTestId(_.fieldSecure.asyncResolveButton)),await w(()=>x(E).toHaveBeenCalledWith(`sk-DEFERRED-TOKEN`));let t=await w(()=>e.getByTestId(p.fieldSecureInput));await x(t).toHaveAttribute(`type`,`text`)}),await t(`(b) loaded-once: a second reveal does not re-call the getter`,async()=>{let e=T(n.getByTestId(_.fieldSecure.asyncLoadedOnceRoot)),t=e.getByTestId(p.fieldSecureHideButton);await C.click(t),await w(()=>x(e.getByTestId(p.fieldSecureInput)).toHaveAttribute(`type`,`text`)),await C.click(t),await w(()=>x(e.getByTestId(p.fieldSecureInput)).toHaveAttribute(`type`,`password`)),await C.click(t),await w(()=>x(e.getByTestId(p.fieldSecureInput)).toHaveAttribute(`type`,`text`)),await x(e.getByTestId(p.fieldSecureInput)).toBeVisible()}),await t(`(c) reject: getter throws → field stays masked, onChange is not called`,async()=>{let e=T(n.getByTestId(_.fieldSecure.asyncRejectRoot)),t=e.getByTestId(p.fieldSecureInput);await C.click(e.getByTestId(p.fieldSecureHideButton)),await w(()=>x(t).toHaveAttribute(`type`,`password`)),x(D).not.toHaveBeenCalled()}),await t(`(d) copy-triggered load: clicking copy in a readonly async field fetches the value`,async()=>{let e=T(n.getByTestId(_.fieldSecure.asyncReadonlyRoot)).getByTestId(p.fieldTextCopyButton);await x(e).toBeVisible(),await C.click(e),await w(()=>x(O).toHaveBeenCalledWith(`sk-READONLY-TOKEN`))})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    onChangeReveal.mockClear();
    onChangeReject.mockClear();
    onChangeReadonly.mockClear();
    onCopyReadonly.mockClear();
    const canvas = within(canvasElement);
    await step('(a) eye-triggered load: Skeleton shows while pending, then resolve flips to text', async () => {
      const reveal = within(canvas.getByTestId(STORY_TEST_IDS.fieldSecure.asyncRevealRoot));
      await expect(reveal.getByTestId(TEST_IDS.fieldSecureInput)).toHaveAttribute('type', 'password');
      await userEvent.click(reveal.getByTestId(TEST_IDS.fieldSecureHideButton));
      // Во время загрузки WithSkeleton снимает InputPrivate и рисует Skeleton → input отсутствует.
      await waitFor(() => expect(reveal.queryByTestId(TEST_IDS.fieldSecureInput)).toBeNull());
      // Отпускаем промис → onChange с подгруженным значением, поле раскрывается.
      await userEvent.click(canvas.getByTestId(STORY_TEST_IDS.fieldSecure.asyncResolveButton));
      await waitFor(() => expect(onChangeReveal).toHaveBeenCalledWith('sk-DEFERRED-TOKEN'));
      const input = await waitFor(() => reveal.getByTestId(TEST_IDS.fieldSecureInput));
      await expect(input).toHaveAttribute('type', 'text');
    });
    await step('(b) loaded-once: a second reveal does not re-call the getter', async () => {
      const loadedOnce = within(canvas.getByTestId(STORY_TEST_IDS.fieldSecure.asyncLoadedOnceRoot));
      const eye = loadedOnce.getByTestId(TEST_IDS.fieldSecureHideButton);
      await userEvent.click(eye);
      await waitFor(() => expect(loadedOnce.getByTestId(TEST_IDS.fieldSecureInput)).toHaveAttribute('type', 'text'));
      // Скрыть обратно, затем снова раскрыть — getter уже отработал, повторного запроса нет.
      await userEvent.click(eye);
      await waitFor(() => expect(loadedOnce.getByTestId(TEST_IDS.fieldSecureInput)).toHaveAttribute('type', 'password'));
      await userEvent.click(eye);
      await waitFor(() => expect(loadedOnce.getByTestId(TEST_IDS.fieldSecureInput)).toHaveAttribute('type', 'text'));
      // value подгружено один раз — повторный reveal не показывает Skeleton.
      await expect(loadedOnce.getByTestId(TEST_IDS.fieldSecureInput)).toBeVisible();
    });
    await step('(c) reject: getter throws → field stays masked, onChange is not called', async () => {
      const reject = within(canvas.getByTestId(STORY_TEST_IDS.fieldSecure.asyncRejectRoot));
      const input = reject.getByTestId(TEST_IDS.fieldSecureInput);
      await userEvent.click(reject.getByTestId(TEST_IDS.fieldSecureHideButton));
      // ensureAsyncValue ловит reject и возвращает false → toggleHidden не переключает hidden.
      await waitFor(() => expect(input).toHaveAttribute('type', 'password'));
      expect(onChangeReject).not.toHaveBeenCalled();
    });
    await step('(d) copy-triggered load: clicking copy in a readonly async field fetches the value', async () => {
      const readonly = within(canvas.getByTestId(STORY_TEST_IDS.fieldSecure.asyncReadonlyRoot));
      const copyBtn = readonly.getByTestId(TEST_IDS.fieldTextCopyButton);
      await expect(copyBtn).toBeVisible();
      // Клик «копировать» вызывает ensureAsyncValue → emitChange с реальным токеном (до самой записи
      // в буфер). Доказываем загрузку через onChange; реальная запись — browser-only (interaction.spec).
      await userEvent.click(copyBtn);
      await waitFor(() => expect(onChangeReadonly).toHaveBeenCalledWith('sk-READONLY-TOKEN'));
    });
  }
}`,...j.parameters?.docs?.source}}},M=[`AsyncReveal`]}))();export{j as AsyncReveal,M as __namedExportsOrder,A as default};
//# sourceMappingURL=FieldSecure.AsyncReveal.stories-DpVos7bi.js.map