import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-jFn_-H4h.js";import{o as c,t as l}from"./src-BJmW3wXG.js";import{l as u,n as d,t as f}from"./src-Dhn-UN-L.js";var p,m,h,g,_,v,y,b;e((()=>{f(),l(),o(),p=t(),{expect:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_={fromName:`avatar-from-name`,twoSymbols:`avatar-two-symbols`,longName:`avatar-long-name`,imageFallback:`avatar-image-fallback`,withStatus:`avatar-with-status`,withBadge:`avatar-with-badge`,badgeOverridesStatus:`avatar-badge-overrides-status`,customBadge:`avatar-custom-badge`},v={title:`Snack/Data display/Avatar/Tests/Interaction`,id:`components-avatar-tests-interaction`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}}},y={tags:[`test`,`dev`],render:()=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`InteractionTest`}),(0,p.jsx)(i,{children:`Аббревиатура из имени, двухсимвольная, длинное имя и fallback при ошибке загрузки картинки.`}),(0,p.jsxs)(n,{align:`center`,children:[(0,p.jsx)(d,{"data-test-id":_.fromName,name:`John Doe`}),(0,p.jsx)(d,{"data-test-id":_.twoSymbols,name:`John Doe`,showTwoSymbols:!0}),(0,p.jsx)(d,{"data-test-id":_.longName,name:`Very Long Name With Multiple Words`,showTwoSymbols:!0}),(0,p.jsx)(d,{"data-test-id":_.imageFallback,name:`John Doe`,src:`https://invalid-url.example/broken-image.jpg`}),(0,p.jsx)(d,{"data-test-id":_.withStatus,name:`John Doe`,size:`9xl`,status:c.Green}),(0,p.jsx)(d,{"data-test-id":_.withBadge,name:`John Doe`,size:`9xl`,badge:(0,p.jsx)(`span`,{"data-test-id":_.customBadge,children:`★`})}),(0,p.jsx)(d,{"data-test-id":_.badgeOverridesStatus,name:`John Doe`,size:`9xl`,status:c.Red,badge:(0,p.jsx)(`span`,{"data-test-id":_.customBadge,children:`!`})})]})]})}),play:async({canvasElement:e,step:t})=>{let n=g(e);await t(`abbreviation: derived from name, single letter by default`,async()=>{let e=n.getByTestId(_.fromName),t=g(e).getByTestId(u.abbreviation);await m(t).toBeVisible(),await m(t).toHaveTextContent(`J`),m(t.textContent?.length).toBe(1)}),await t(`abbreviation: showTwoSymbols renders two letters`,async()=>{let e=n.getByTestId(_.twoSymbols),t=g(e).getByTestId(u.abbreviation);await m(t).toBeVisible(),m(t.textContent?.length).toBe(2)}),await t(`abbreviation: long name is truncated to two symbols`,async()=>{let e=n.getByTestId(_.longName),t=g(e).getByTestId(u.abbreviation);await m(t).toBeVisible(),m(t.textContent?.length).toBe(2)}),await t(`image: fallback to abbreviation when src fails to load`,async()=>{let e=n.getByTestId(_.imageFallback);await h(()=>{let t=g(e).getByTestId(u.abbreviation);m(t).toBeVisible()})}),await t(`status: renders default StatusIndicator with mapped appearance`,async()=>{let e=n.getByTestId(_.withStatus),t=g(e).getByTestId(u.badge),r=g(t).getByTestId(u.statusIndicator);await m(r).toBeVisible(),await m(r).toHaveAttribute(`data-appearance`,c.Green),await m(r).toHaveAttribute(`data-size`,`s`)}),await t(`badge: arbitrary ReactNode renders in slot`,async()=>{let e=n.getByTestId(_.withBadge),t=g(e).getByTestId(u.badge),r=g(t).getByTestId(_.customBadge);await m(r).toBeVisible(),await m(r).toHaveTextContent(`★`),m(g(e).queryByTestId(u.statusIndicator)).toBeNull()}),await t(`badge: takes precedence over status`,async()=>{let e=n.getByTestId(_.badgeOverridesStatus),t=g(e).getByTestId(u.badge);await m(g(t).getByTestId(_.customBadge)).toHaveTextContent(`!`),m(g(e).queryByTestId(u.statusIndicator)).toBeNull()})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Аббревиатура из имени, двухсимвольная, длинное имя и fallback при ошибке загрузки картинки.</DemoHint>
        <DemoActions align='center'>
          <Avatar data-test-id={STORY_TEST_IDS.fromName} name='John Doe' />
          <Avatar data-test-id={STORY_TEST_IDS.twoSymbols} name='John Doe' showTwoSymbols />
          <Avatar data-test-id={STORY_TEST_IDS.longName} name='Very Long Name With Multiple Words' showTwoSymbols />
          <Avatar data-test-id={STORY_TEST_IDS.imageFallback} name='John Doe' src='https://invalid-url.example/broken-image.jpg' />
          <Avatar data-test-id={STORY_TEST_IDS.withStatus} name='John Doe' size='9xl' status={STATUS_APPEARANCE.Green} />
          <Avatar data-test-id={STORY_TEST_IDS.withBadge} name='John Doe' size='9xl' badge={<span data-test-id={STORY_TEST_IDS.customBadge}>★</span>} />
          <Avatar data-test-id={STORY_TEST_IDS.badgeOverridesStatus} name='John Doe' size='9xl' status={STATUS_APPEARANCE.Red} badge={<span data-test-id={STORY_TEST_IDS.customBadge}>!</span>} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('abbreviation: derived from name, single letter by default', async () => {
      const root = canvas.getByTestId(STORY_TEST_IDS.fromName);
      const abbreviation = within(root).getByTestId(TEST_IDS.abbreviation);
      await expect(abbreviation).toBeVisible();
      await expect(abbreviation).toHaveTextContent('J');
      expect(abbreviation.textContent?.length).toBe(1);
    });
    await step('abbreviation: showTwoSymbols renders two letters', async () => {
      const root = canvas.getByTestId(STORY_TEST_IDS.twoSymbols);
      const abbreviation = within(root).getByTestId(TEST_IDS.abbreviation);
      await expect(abbreviation).toBeVisible();
      expect(abbreviation.textContent?.length).toBe(2);
    });
    await step('abbreviation: long name is truncated to two symbols', async () => {
      const root = canvas.getByTestId(STORY_TEST_IDS.longName);
      const abbreviation = within(root).getByTestId(TEST_IDS.abbreviation);
      await expect(abbreviation).toBeVisible();
      expect(abbreviation.textContent?.length).toBe(2);
    });
    await step('image: fallback to abbreviation when src fails to load', async () => {
      const root = canvas.getByTestId(STORY_TEST_IDS.imageFallback);
      // img onError handler must run before abbreviation slot becomes visible.
      await waitFor(() => {
        const abbreviation = within(root).getByTestId(TEST_IDS.abbreviation);
        expect(abbreviation).toBeVisible();
      });
    });
    await step('status: renders default StatusIndicator with mapped appearance', async () => {
      const root = canvas.getByTestId(STORY_TEST_IDS.withStatus);
      const badge = within(root).getByTestId(TEST_IDS.badge);
      const indicator = within(badge).getByTestId(TEST_IDS.statusIndicator);
      await expect(indicator).toBeVisible();
      await expect(indicator).toHaveAttribute('data-appearance', STATUS_APPEARANCE.Green);
      // size=9xl → indicator size=s (см. AVATAR_TO_STATUS_INDICATOR_SIZE)
      await expect(indicator).toHaveAttribute('data-size', 's');
    });
    await step('badge: arbitrary ReactNode renders in slot', async () => {
      const root = canvas.getByTestId(STORY_TEST_IDS.withBadge);
      const badge = within(root).getByTestId(TEST_IDS.badge);
      const custom = within(badge).getByTestId(STORY_TEST_IDS.customBadge);
      await expect(custom).toBeVisible();
      await expect(custom).toHaveTextContent('★');
      // status indicator must NOT render when badge is set
      expect(within(root).queryByTestId(TEST_IDS.statusIndicator)).toBeNull();
    });
    await step('badge: takes precedence over status', async () => {
      const root = canvas.getByTestId(STORY_TEST_IDS.badgeOverridesStatus);
      const badge = within(root).getByTestId(TEST_IDS.badge);
      await expect(within(badge).getByTestId(STORY_TEST_IDS.customBadge)).toHaveTextContent('!');
      expect(within(root).queryByTestId(TEST_IDS.statusIndicator)).toBeNull();
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`InteractionTest`]}))();export{y as InteractionTest,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Avatar.InteractionTest.stories-BYLpY9CI.js.map