import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{hn as n,nt as r}from"./iframe-DCnmYW19.js";import{n as i,t as a,u as o}from"./src-DqksuikC.js";import{n as s,t as c}from"./mockData-D35uJwe4.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{r(),a(),s(),l=t(),{expect:u,fn:d,userEvent:f,waitFor:p,within:m}=__STORYBOOK_MODULE_TEST__,h=n(i,`mobile`),g=d(),_=d(),v=d(),y=d(),b=d(),x={title:`Uikit Product/Overlays/ModalPredefined/ReleaseNotes/Tests/Interaction`,id:`uikit-product-modalpredefined-releasenotes-tests-interaction`,component:i,parameters:{layout:`fullscreen`,controls:{disable:!0}}},S={tags:[`test`,`dev`],args:{open:!0,onClose:d(),items:c,onSlideChange:g,onReadLaterClick:_},play:async({step:e})=>{let t=m(document.body);await e(`next button changes slide`,async()=>{await f.click(t.getByTestId(o.releaseNotesNextButton)),await p(()=>u(g).toHaveBeenCalledWith(1))}),await e(`read later calls callback`,async()=>{await f.click(t.getByTestId(o.releaseNotesReadLaterButton)),await p(()=>u(_).toHaveBeenCalled())})}},C={tags:[`test`,`dev`],args:{open:!0,onClose:d(),items:c,contentState:`error`,onDataErrorRetryClick:v},play:async({step:e})=>{let t=m(document.body);await e(`retry calls callback`,async()=>{await f.click(t.getByTestId(o.releaseNotesRetryButton)),await p(()=>u(v).toHaveBeenCalled())})}},w={tags:[`test`,`dev`],args:{open:!0,onClose:d(),items:c,onSlideChange:y,onReadLaterClick:b},render:e=>(0,l.jsx)(h,{...e}),play:async({step:e})=>{let t=m(document.body);await e(`mobile: next button changes slide`,async()=>{await f.click(t.getByTestId(o.releaseNotesNextButton)),await p(()=>u(y).toHaveBeenCalledWith(1))}),await e(`mobile: read later calls callback`,async()=>{await f.click(t.getByTestId(o.releaseNotesReadLaterButton)),await p(()=>u(b).toHaveBeenCalled())})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=ReleaseNotes.InteractionTest.stories-xqo3i1j-.js.map