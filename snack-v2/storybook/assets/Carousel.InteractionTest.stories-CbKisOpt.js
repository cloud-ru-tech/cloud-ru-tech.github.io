import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-D4MTfTET.js";import{a as c,t as l}from"./src-DppNQVZr.js";import{d as u,t as d}from"./src-DrNUfVmy.js";import{a as f,n as p,t as m}from"./src-iuNAybId.js";import{n as h,t as g}from"./styles2.module-DfOMf7ik.js";import{t as _}from"./testIds-CMMCl5wn.js";function v(e){let t=e.state?.onChange;if(!t)throw Error(`Carousel InteractionTest: state.onChange mock is required`);return t}function y({title:e,hint:t,children:o}){return(0,b.jsx)(s,{children:(0,b.jsxs)(r,{width:`wide`,children:[(0,b.jsx)(a,{children:e}),(0,b.jsx)(i,{children:t}),(0,b.jsx)(n,{align:`center`,children:o})]})})}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{l(),m(),d(),o(),g(),_(),b=t(),{expect:x,fn:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Snack/Layout & containers/Carousel/Tests/Interaction`,id:`components-carousel-tests-interaction`,component:p,parameters:{layout:`fullscreen`,controls:{disable:!0}}},D={tags:[`test`,`dev`],args:{showItems:1,arrows:!0,controlsVisibility:`always`,pagination:!0,infiniteScroll:!1,"data-test-id":f.root,state:{page:0,onChange:S()}},render:e=>(0,b.jsx)(y,{title:`InteractionTest`,hint:`Клики по стрелкам/точкам вызывают state.onChange с целевой страницей.`,children:(0,b.jsx)(`div`,{className:h.container,children:(0,b.jsxs)(p,{...e,children:[(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideIndigo}`,children:`Slide 1`}),(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideSky}`,children:`Slide 2`}),(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideEmerald}`,children:`Slide 3`})]})})}),play:async({args:e,canvasElement:t,step:n})=>{let r=T(t);await n(`click: next arrow fires state.onChange with next page`,async()=>{await C.click(r.getByTestId(f.arrowNext)),x(v(e)).toHaveBeenCalledWith(1)})}},O={tags:[`test`,`dev`],args:{showItems:1,arrows:!0,controlsVisibility:`always`,pagination:!0,infiniteScroll:!0,"data-test-id":f.root,state:{page:0,onChange:S()}},render:e=>(0,b.jsx)(y,{title:`InteractionTestInfinite`,hint:`В infinite-режиме prev с первой страницы переходит на последнюю.`,children:(0,b.jsx)(`div`,{className:h.container,children:(0,b.jsxs)(p,{...e,children:[(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideIndigo}`,children:`Slide 1`}),(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideSky}`,children:`Slide 2`}),(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideEmerald}`,children:`Slide 3`})]})})}),play:async({args:e,canvasElement:t,step:n})=>{let r=T(t);await n(`click: prev arrow from page 0 wraps to last page`,async()=>{await C.click(r.getByTestId(f.arrowPrev)),x(v(e)).toHaveBeenCalledWith(2)})}},k={tags:[`test`,`dev`],args:{showItems:1,arrows:!0,controlsVisibility:`always`,pagination:!0,infiniteScroll:!0,autoSwipe:.3,"data-test-id":f.root,state:{page:0,onChange:S()}},render:e=>(0,b.jsx)(y,{title:`AutoSwipeAdvances`,hint:`AutoSwipe-таймер автоматически продвигает страницу.`,children:(0,b.jsx)(`div`,{className:h.container,children:(0,b.jsxs)(p,{...e,children:[(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideIndigo}`,children:`Slide 1`}),(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideSky}`,children:`Slide 2`}),(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideEmerald}`,children:`Slide 3`})]})})}),play:async({args:e,step:t})=>{await t(`autoSwipe: timer advances page to 1`,async()=>{await w(()=>x(v(e)).toHaveBeenCalledWith(1),{timeout:3e3})})}},A={tags:[`test`,`dev`],args:{showItems:1,arrows:!0,controlsVisibility:`always`,pagination:!0,infiniteScroll:!0,"data-test-id":f.root,state:{page:2,onChange:S()}},render:e=>(0,b.jsx)(y,{title:`InfiniteWrapAround`,hint:`Next с последней страницы в infinite-режиме возвращает на первую.`,children:(0,b.jsx)(`div`,{className:h.container,children:(0,b.jsxs)(p,{...e,children:[(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideIndigo}`,children:`Slide 1`}),(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideSky}`,children:`Slide 2`}),(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideEmerald}`,children:`Slide 3`})]})})}),play:async({args:e,canvasElement:t,step:n})=>{let r=T(t);await n(`click: next from last page wraps to 0`,async()=>{await C.click(r.getByTestId(f.arrowNext)),x(v(e)).toHaveBeenCalledWith(0)})}},j={tags:[`test`,`dev`],args:{showItems:1,arrows:!0,controlsVisibility:`always`,pagination:!0,"data-test-id":f.root,state:{page:0,onChange:S()}},render:e=>(0,b.jsx)(y,{title:`PaginationDotClicks`,hint:`Клик по точке N в пагинации переключает на страницу N-1.`,children:(0,b.jsx)(`div`,{className:h.container,children:(0,b.jsxs)(p,{...e,children:[(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideIndigo}`,children:`Slide 1`}),(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideSky}`,children:`Slide 2`}),(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideEmerald}`,children:`Slide 3`})]})})}),play:async({args:e,canvasElement:t,step:n})=>{let r=T(t);await n(`click: pagination dot 3 -> onChange(2)`,async()=>{let t=r.getByTestId(u(3));await C.click(t),x(v(e)).toHaveBeenCalledWith(2)})}},M={tags:[`test`,`dev`],args:{showItems:3,arrows:!0,controlsVisibility:`always`,pagination:!0,infiniteScroll:!1,"data-test-id":f.root,state:{page:0,onChange:S()}},render:e=>(0,b.jsx)(y,{title:`NoNavigationWhenItemsLessThanShown`,hint:`Стрелки не рендерятся, когда количество слайдов меньше showItems.`,children:(0,b.jsx)(`div`,{className:h.container,children:(0,b.jsxs)(p,{...e,children:[(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideIndigo}`,children:`Slide 1`}),(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideSky}`,children:`Slide 2`})]})})}),play:async({canvasElement:e,step:t})=>{let n=T(e);await t(`arrows: not rendered when items.length <= showItems`,async()=>{x(n.queryByTestId(f.arrowPrev)).toBeNull(),x(n.queryByTestId(f.arrowNext)).toBeNull()})}},N={tags:[`test`,`dev`],args:{showItems:2,scrollBy:1,arrows:!0,controlsVisibility:`always`,pagination:!0,infiniteScroll:!1,"data-test-id":f.root,state:{page:0,onChange:S()}},render:e=>(0,b.jsx)(y,{title:`MultiSlideFocusableItems`,hint:`Слайды с focusable-контролами; покрывает hide/show + handleSlideClick.`,children:(0,b.jsx)(`div`,{className:h.container,children:(0,b.jsxs)(p,{...e,children:[(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideIndigo}`,children:(0,b.jsx)(c,{label:`action 1`})}),(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideSky}`,children:(0,b.jsx)(c,{label:`action 2`})}),(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideEmerald}`,children:(0,b.jsx)(c,{label:`action 3`})}),(0,b.jsx)(`div`,{className:`${h.slide} ${h.slideAmber}`,children:(0,b.jsx)(c,{label:`action 4`})})]})})}),play:async({args:e,canvasElement:t,step:n})=>{let r=T(t).getAllByTestId(f.trackItem);await n(`visible items get tabindex=0 on inner buttons (showVisibleItems path)`,async()=>{await w(()=>{let e=r[0].querySelector(`button`);x(e?.getAttribute(`tabindex`)).toBe(`0`)})}),await n(`non-visible items get tabindex=-5 on inner buttons (hideNonVisibleItems path)`,async()=>{await w(()=>{let e=r[3].querySelector(`button`);x(e?.getAttribute(`tabindex`)).toBe(`-5`)})}),await n(`click on partially-out slide triggers slideCallback (handleSlideClick path)`,async()=>{await C.click(r[2]),x(e.state?.onChange).toBeDefined()})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    showItems: 1,
    arrows: true,
    controlsVisibility: 'always',
    pagination: true,
    infiniteScroll: false,
    'data-test-id': TEST_IDS.root,
    state: {
      page: 0,
      onChange: fn()
    }
  },
  render: args => <Wrap title='InteractionTest' hint={'Клики по стрелкам/точкам вызывают state.onChange с целевой страницей.'}>
      <div className={styles.container}>
        <Carousel {...args}>
          <div className={\`\${styles.slide} \${styles.slideIndigo}\`}>Slide 1</div>
          <div className={\`\${styles.slide} \${styles.slideSky}\`}>Slide 2</div>
          <div className={\`\${styles.slide} \${styles.slideEmerald}\`}>Slide 3</div>
        </Carousel>
      </div>
    </Wrap>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click: next arrow fires state.onChange with next page', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.arrowNext));
      expect(getOnChange(args)).toHaveBeenCalledWith(1);
    });
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    showItems: 1,
    arrows: true,
    controlsVisibility: 'always',
    pagination: true,
    infiniteScroll: true,
    'data-test-id': TEST_IDS.root,
    state: {
      page: 0,
      onChange: fn()
    }
  },
  render: args => <Wrap title='InteractionTestInfinite' hint={'В infinite-режиме prev с первой страницы переходит на последнюю.'}>
      <div className={styles.container}>
        <Carousel {...args}>
          <div className={\`\${styles.slide} \${styles.slideIndigo}\`}>Slide 1</div>
          <div className={\`\${styles.slide} \${styles.slideSky}\`}>Slide 2</div>
          <div className={\`\${styles.slide} \${styles.slideEmerald}\`}>Slide 3</div>
        </Carousel>
      </div>
    </Wrap>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click: prev arrow from page 0 wraps to last page', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.arrowPrev));
      // total = 3 (showItems=1, items=3, scrollBy=1), wrap: (3 + 0 - 1) % 3 = 2
      expect(getOnChange(args)).toHaveBeenCalledWith(2);
    });
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    showItems: 1,
    arrows: true,
    controlsVisibility: 'always',
    pagination: true,
    infiniteScroll: true,
    autoSwipe: 0.3,
    'data-test-id': TEST_IDS.root,
    state: {
      page: 0,
      onChange: fn()
    }
  },
  render: args => <Wrap title='AutoSwipeAdvances' hint={'AutoSwipe-таймер автоматически продвигает страницу.'}>
      <div className={styles.container}>
        <Carousel {...args}>
          <div className={\`\${styles.slide} \${styles.slideIndigo}\`}>Slide 1</div>
          <div className={\`\${styles.slide} \${styles.slideSky}\`}>Slide 2</div>
          <div className={\`\${styles.slide} \${styles.slideEmerald}\`}>Slide 3</div>
        </Carousel>
      </div>
    </Wrap>,
  play: async ({
    args,
    step
  }) => {
    await step('autoSwipe: timer advances page to 1', async () => {
      await waitFor(() => expect(getOnChange(args)).toHaveBeenCalledWith(1), {
        timeout: 3000
      });
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    showItems: 1,
    arrows: true,
    controlsVisibility: 'always',
    pagination: true,
    infiniteScroll: true,
    'data-test-id': TEST_IDS.root,
    state: {
      page: 2,
      onChange: fn()
    }
  },
  render: args => <Wrap title='InfiniteWrapAround' hint={'Next с последней страницы в infinite-режиме возвращает на первую.'}>
      <div className={styles.container}>
        <Carousel {...args}>
          <div className={\`\${styles.slide} \${styles.slideIndigo}\`}>Slide 1</div>
          <div className={\`\${styles.slide} \${styles.slideSky}\`}>Slide 2</div>
          <div className={\`\${styles.slide} \${styles.slideEmerald}\`}>Slide 3</div>
        </Carousel>
      </div>
    </Wrap>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click: next from last page wraps to 0', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.arrowNext));
      expect(getOnChange(args)).toHaveBeenCalledWith(0);
    });
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    showItems: 1,
    arrows: true,
    controlsVisibility: 'always',
    pagination: true,
    'data-test-id': TEST_IDS.root,
    state: {
      page: 0,
      onChange: fn()
    }
  },
  render: args => <Wrap title='PaginationDotClicks' hint={'Клик по точке N в пагинации переключает на страницу N-1.'}>
      <div className={styles.container}>
        <Carousel {...args}>
          <div className={\`\${styles.slide} \${styles.slideIndigo}\`}>Slide 1</div>
          <div className={\`\${styles.slide} \${styles.slideSky}\`}>Slide 2</div>
          <div className={\`\${styles.slide} \${styles.slideEmerald}\`}>Slide 3</div>
        </Carousel>
      </div>
    </Wrap>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click: pagination dot 3 -> onChange(2)', async () => {
      // PaginationSlider uses 1-based page-button-slider-<N>; clicking dot N => carousel page N-1
      const dot = canvas.getByTestId(getSliderItemTestId(3));
      await userEvent.click(dot);
      expect(getOnChange(args)).toHaveBeenCalledWith(2);
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    showItems: 3,
    arrows: true,
    controlsVisibility: 'always',
    pagination: true,
    infiniteScroll: false,
    'data-test-id': TEST_IDS.root,
    state: {
      page: 0,
      onChange: fn()
    }
  },
  render: args => <Wrap title='NoNavigationWhenItemsLessThanShown' hint={'Стрелки не рендерятся, когда количество слайдов меньше showItems.'}>
      <div className={styles.container}>
        <Carousel {...args}>
          <div className={\`\${styles.slide} \${styles.slideIndigo}\`}>Slide 1</div>
          <div className={\`\${styles.slide} \${styles.slideSky}\`}>Slide 2</div>
        </Carousel>
      </div>
    </Wrap>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('arrows: not rendered when items.length <= showItems', async () => {
      expect(canvas.queryByTestId(TEST_IDS.arrowPrev)).toBeNull();
      expect(canvas.queryByTestId(TEST_IDS.arrowNext)).toBeNull();
    });
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    showItems: 2,
    scrollBy: 1,
    arrows: true,
    controlsVisibility: 'always',
    pagination: true,
    infiniteScroll: false,
    'data-test-id': TEST_IDS.root,
    state: {
      page: 0,
      onChange: fn()
    }
  },
  render: args => <Wrap title='MultiSlideFocusableItems' hint='Слайды с focusable-контролами; покрывает hide/show + handleSlideClick.'>
      <div className={styles.container}>
        <Carousel {...args}>
          <div className={\`\${styles.slide} \${styles.slideIndigo}\`}>
            <Button label='action 1' />
          </div>
          <div className={\`\${styles.slide} \${styles.slideSky}\`}>
            <Button label='action 2' />
          </div>
          <div className={\`\${styles.slide} \${styles.slideEmerald}\`}>
            <Button label='action 3' />
          </div>
          <div className={\`\${styles.slide} \${styles.slideAmber}\`}>
            <Button label='action 4' />
          </div>
        </Carousel>
      </div>
    </Wrap>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const slides = canvas.getAllByTestId(TEST_IDS.trackItem);
    await step('visible items get tabindex=0 on inner buttons (showVisibleItems path)', async () => {
      await waitFor(() => {
        const visibleBtn = slides[0].querySelector('button');
        expect(visibleBtn?.getAttribute('tabindex')).toBe('0');
      });
    });
    await step('non-visible items get tabindex=-5 on inner buttons (hideNonVisibleItems path)', async () => {
      await waitFor(() => {
        const hiddenBtn = slides[3].querySelector('button');
        expect(hiddenBtn?.getAttribute('tabindex')).toBe('-5');
      });
    });
    await step('click on partially-out slide triggers slideCallback (handleSlideClick path)', async () => {
      // Кликаем по третьему слайду (он за пределами видимой области page=0 +
      // showItems=2). handleSlideClick вычислит slidePositionDelta < 0 и вызовет
      // slideCallback. Гарантировать вызов state.onChange нельзя без layout,
      // но покрытие body handleSlideClick получаем безусловно.
      await userEvent.click(slides[2]);
      expect(args.state?.onChange).toBeDefined();
    });
  }
}`,...N.parameters?.docs?.source}}},P=[`InteractionTest`,`InteractionTestInfinite`,`AutoSwipeAdvances`,`InfiniteWrapAround`,`PaginationDotClicks`,`NoNavigationWhenItemsLessThanShown`,`MultiSlideFocusableItems`]}))();export{k as AutoSwipeAdvances,A as InfiniteWrapAround,D as InteractionTest,O as InteractionTestInfinite,N as MultiSlideFocusableItems,M as NoNavigationWhenItemsLessThanShown,j as PaginationDotClicks,P as __namedExportsOrder,E as default};
//# sourceMappingURL=Carousel.InteractionTest.stories-CbKisOpt.js.map