import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,t as r}from"./iframe-qs8RgOhH.js";import{n as i,t as a,u as o}from"./src-DTJRIqwQ.js";import{r as s,t as c}from"./mockData-nB7TfByJ.js";function l(e){return(0,u.jsx)(n,{layoutType:`mobile`,children:(0,u.jsx)(i,{...e})})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{a(),r(),s(),u=t(),{expect:d,fn:f,userEvent:p,waitFor:m,within:h}=__STORYBOOK_MODULE_TEST__,g=f(),_=f(),v=f(),y=f(),b=f(),x={title:`Uikit Product/Overlays/ModalPredefined/ReleaseNotes/Tests/Interaction`,id:`uikit-product-modalpredefined-releasenotes-tests-interaction`,component:i,parameters:{layout:`fullscreen`,controls:{disable:!0}}},S={tags:[`test`,`dev`],args:{open:!0,onClose:f(),items:c,onSlideChange:g,onReadLaterClick:_},play:async({step:e})=>{let t=h(document.body);await e(`next button changes slide`,async()=>{await p.click(t.getByTestId(o.releaseNotesNextButton)),await m(()=>d(g).toHaveBeenCalledWith(1))}),await e(`read later calls callback`,async()=>{await p.click(t.getByTestId(o.releaseNotesReadLaterButton)),await m(()=>d(_).toHaveBeenCalled())})}},C={tags:[`test`,`dev`],args:{open:!0,onClose:f(),items:c,contentState:`error`,onDataErrorRetryClick:v},play:async({step:e})=>{let t=h(document.body);await e(`retry calls callback`,async()=>{await p.click(t.getByTestId(o.releaseNotesRetryButton)),await m(()=>d(v).toHaveBeenCalled())})}},w={tags:[`test`,`dev`],args:{open:!0,onClose:f(),items:c,onSlideChange:y,onReadLaterClick:b},render:e=>(0,u.jsx)(l,{...e}),play:async({step:e})=>{let t=h(document.body);await e(`mobile: next button changes slide`,async()=>{await p.click(t.getByTestId(o.releaseNotesNextButton)),await m(()=>d(y).toHaveBeenCalledWith(1))}),await e(`mobile: read later calls callback`,async()=>{await p.click(t.getByTestId(o.releaseNotesReadLaterButton)),await m(()=>d(b).toHaveBeenCalled())})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    open: true,
    onClose: fn(),
    items: RELEASE_NOTES_ITEMS,
    onSlideChange,
    onReadLaterClick
  },
  play: async ({
    step
  }) => {
    const body = within(document.body);
    await step('next button changes slide', async () => {
      await userEvent.click(body.getByTestId(TEST_IDS.releaseNotesNextButton));
      await waitFor(() => expect(onSlideChange).toHaveBeenCalledWith(1));
    });
    await step('read later calls callback', async () => {
      await userEvent.click(body.getByTestId(TEST_IDS.releaseNotesReadLaterButton));
      await waitFor(() => expect(onReadLaterClick).toHaveBeenCalled());
    });
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    open: true,
    onClose: fn(),
    items: RELEASE_NOTES_ITEMS,
    contentState: 'error',
    onDataErrorRetryClick
  },
  play: async ({
    step
  }) => {
    const body = within(document.body);
    await step('retry calls callback', async () => {
      await userEvent.click(body.getByTestId(TEST_IDS.releaseNotesRetryButton));
      await waitFor(() => expect(onDataErrorRetryClick).toHaveBeenCalled());
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    open: true,
    onClose: fn(),
    items: RELEASE_NOTES_ITEMS,
    onSlideChange: onMobileSlideChange,
    onReadLaterClick: onMobileReadLaterClick
  },
  render: args => <MobileReleaseNotes {...args} />,
  play: async ({
    step
  }) => {
    const body = within(document.body);
    await step('mobile: next button changes slide', async () => {
      await userEvent.click(body.getByTestId(TEST_IDS.releaseNotesNextButton));
      await waitFor(() => expect(onMobileSlideChange).toHaveBeenCalledWith(1));
    });
    await step('mobile: read later calls callback', async () => {
      await userEvent.click(body.getByTestId(TEST_IDS.releaseNotesReadLaterButton));
      await waitFor(() => expect(onMobileReadLaterClick).toHaveBeenCalled());
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`InteractionTest`,`ErrorRetryInteractionTest`,`MobileInteractionTest`]}))();export{C as ErrorRetryInteractionTest,S as InteractionTest,w as MobileInteractionTest,T as __namedExportsOrder,x as default};
//# sourceMappingURL=ReleaseNotes.InteractionTest.stories-AJP7xJdM.js.map