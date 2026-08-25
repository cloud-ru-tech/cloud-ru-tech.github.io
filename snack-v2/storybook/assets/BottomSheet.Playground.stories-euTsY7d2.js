import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{B as i,H as a,c as o,d as s,h as c,l,m as u,s as d,t as f,u as p}from"./iframe-BiKgHgfb.js";import{a as m,s as h,t as g,u as _}from"./src-Bm0LqAUs.js";import{b as v,y}from"./src-5RpYZrAS.js";import{n as b,t as x}from"./src-DRcIVvRT.js";import{n as S,t as C}from"./testIds-Dt9cgXKV.js";function w(e){let{showMedia:t,showHeader:n,showAfterHeadline:r,showSubtitle:i,showBackButton:f,showActionButton:g,showFooter:x,longContent:S,snapPointsPreset:w,title:D,open:O,onClose:M,content:N,...P}=e,[F,I]=(0,T.useState)(!1),L=a();return(0,E.jsxs)(p,{children:[(0,E.jsxs)(s,{children:[(0,E.jsx)(u,{children:`BottomSheet`}),(0,E.jsx)(l,{children:`Открыть bottom-sheet триггером ниже. Слоты, snap-points и оси — из Controls.`}),(0,E.jsx)(c,{children:`Только для мобильной версии браузера. На desktop поведение (swipe, snap-points, scroll-lock) может быть некорректным — используйте Modal или Drawer.`}),(0,E.jsx)(o,{align:`center`,children:(0,E.jsx)(m,{"data-test-id":C.triggerOpen,label:`Открыть BottomSheet`,view:_.Outline,appearance:h.Neutral,onClick:()=>I(!0)})})]}),(0,E.jsx)(b,{...P,open:F,onClose:()=>I(!1),container:L.current||void 0,snapPoints:k[w],title:n?D:void 0,slotAfterTitle:n&&r?(0,E.jsx)(`span`,{"data-test-id":v.slotAfterTitle,children:`NEW`}):void 0,slotSecondTitle:n&&i?(0,E.jsx)(`div`,{"data-test-id":v.slotSecondTitle,children:`SearchBar / SegmentControl …`}):void 0,onBackButtonClick:n&&f?()=>I(!1):void 0,actionButton:n&&g?(0,E.jsx)(m,{view:`function`,appearance:`neutral`,label:`⋯`,"aria-label":`Ещё`,onClick:()=>void 0}):void 0,media:t?{src:d(360,184,`Media`),alt:`Media`,kind:y.Image}:void 0,content:(0,E.jsx)(`div`,{"data-test-id":C.exampleContent,children:S?j:N||A}),approveButton:x?{label:`Подтвердить`,onClick:()=>I(!1)}:void 0,cancelButton:x?{label:`Отмена`,onClick:()=>I(!1)}:void 0})]})}var T,E,D,O,k,A,j,M,N,P;t((()=>{x(),g(),i(),T=e(n(),1),f(),S(),E=r(),{expect:D,within:O}=__STORYBOOK_MODULE_TEST__,k={auto:void 0,half:[.5],"half-full":[.5,1],"peek-half-full":[.25,.5,1]},A=`Bottom-sheet — мобильный overlay, открывающийся снизу. Используйте его для диалогов, выпадающих списков, фильтров и любых полу-полно-экранных UI.`,j=Array.from({length:40}).map((e,t)=>`Параграф ${t+1}. ${A}`).join(`

`),M={title:`Snack/Overlays/BottomSheet`,id:`components-bottomsheet`,globals:{density:`comfort`},component:b,parameters:{layout:`fullscreen`}},N={tags:[`dev`,`test`],render:e=>(0,E.jsx)(w,{...e}),args:{title:`Bottom-sheet headline`,showBackdrop:!0,withDividers:!0,safeArea:!0,swipeEnabled:!0,closeOnPopstate:!0,snapPointsPreset:`auto`,showMedia:!1,showHeader:!0,showAfterHeadline:!1,showSubtitle:!1,showBackButton:!1,showActionButton:!1,showFooter:!0,footerActionsOrientation:`horizontal`,longContent:!1},argTypes:{open:{table:{disable:!0}},onClose:{table:{disable:!0}},onSnapIndexChange:{table:{disable:!0}},snapIndex:{table:{disable:!0}},media:{table:{disable:!0}},content:{table:{disable:!0}},actionButton:{table:{disable:!0}},slotAfterTitle:{table:{disable:!0}},slotSecondTitle:{table:{disable:!0}},footer:{table:{disable:!0}},onBackButtonClick:{table:{disable:!0}},snapPoints:{table:{disable:!0}},approveButton:{table:{disable:!0}},cancelButton:{table:{disable:!0}},additionalButton:{table:{disable:!0}},container:{table:{disable:!0}},snapPointsPreset:{name:`[Stories]: snapPointsPreset`,control:`radio`,options:Object.keys(k),description:"Пресет `snapPoints` (доли высоты вьюпорта): `auto` — по контенту; `half` — `[0.5]`; `half-full` — `[0.5, 1]`; `peek-half-full` — `[0.25, 0.5, 1]` (peek-превью → половина → весь экран). На малом snap’е тело прокручивается, если контент выше его высоты — это ожидаемое поведение «превью → раскрытие»."},showMedia:{name:`[Stories]: showMedia`,control:`boolean`},showHeader:{name:`[Stories]: showHeader`,control:`boolean`},showAfterHeadline:{name:`[Stories]: showAfterHeadline`,control:`boolean`,if:{arg:`showHeader`,eq:!0}},showSubtitle:{name:`[Stories]: showSubtitle`,control:`boolean`,if:{arg:`showHeader`,eq:!0}},showBackButton:{name:`[Stories]: showBackButton`,control:`boolean`,if:{arg:`showHeader`,eq:!0}},showActionButton:{name:`[Stories]: showActionButton`,control:`boolean`,if:{arg:`showHeader`,eq:!0}},showFooter:{name:`[Stories]: showFooter`,control:`boolean`},longContent:{name:`[Stories]: longContent`,control:`boolean`},defaultSnapIndex:{control:{type:`number`,min:0}}},play:async({canvasElement:e})=>{await D(O(e).getByTestId(C.triggerOpen)).toBeVisible()}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <PlaygroundRender {...args} />,
  args: {
    title: 'Bottom-sheet headline',
    showBackdrop: true,
    withDividers: true,
    safeArea: true,
    swipeEnabled: true,
    closeOnPopstate: true,
    snapPointsPreset: 'auto',
    showMedia: false,
    showHeader: true,
    showAfterHeadline: false,
    showSubtitle: false,
    showBackButton: false,
    showActionButton: false,
    showFooter: true,
    footerActionsOrientation: 'horizontal',
    longContent: false
  },
  argTypes: {
    open: {
      table: {
        disable: true
      }
    },
    onClose: {
      table: {
        disable: true
      }
    },
    onSnapIndexChange: {
      table: {
        disable: true
      }
    },
    snapIndex: {
      table: {
        disable: true
      }
    },
    media: {
      table: {
        disable: true
      }
    },
    content: {
      table: {
        disable: true
      }
    },
    actionButton: {
      table: {
        disable: true
      }
    },
    slotAfterTitle: {
      table: {
        disable: true
      }
    },
    slotSecondTitle: {
      table: {
        disable: true
      }
    },
    footer: {
      table: {
        disable: true
      }
    },
    onBackButtonClick: {
      table: {
        disable: true
      }
    },
    // Пропсы, которыми управляет render (story-toggle / preset / portal context root),
    // а не панель Controls — иначе это «контролы, которые ничего не делают».
    // snapPoints → [Stories]: snapPointsPreset; approve/cancel/additional → showFooter;
    // container → portal context root.
    snapPoints: {
      table: {
        disable: true
      }
    },
    approveButton: {
      table: {
        disable: true
      }
    },
    cancelButton: {
      table: {
        disable: true
      }
    },
    additionalButton: {
      table: {
        disable: true
      }
    },
    container: {
      table: {
        disable: true
      }
    },
    snapPointsPreset: {
      name: '[Stories]: snapPointsPreset',
      control: 'radio',
      options: Object.keys(SNAP_POINT_PRESETS),
      description: 'Пресет \`snapPoints\` (доли высоты вьюпорта): \`auto\` — по контенту; \`half\` — \`[0.5]\`; ' + '\`half-full\` — \`[0.5, 1]\`; \`peek-half-full\` — \`[0.25, 0.5, 1]\` (peek-превью → половина → весь экран). ' + 'На малом snap’е тело прокручивается, если контент выше его высоты — это ожидаемое поведение «превью → раскрытие».'
    },
    showMedia: {
      name: '[Stories]: showMedia',
      control: 'boolean'
    },
    showHeader: {
      name: '[Stories]: showHeader',
      control: 'boolean'
    },
    showAfterHeadline: {
      name: '[Stories]: showAfterHeadline',
      control: 'boolean',
      if: {
        arg: 'showHeader',
        eq: true
      }
    },
    showSubtitle: {
      name: '[Stories]: showSubtitle',
      control: 'boolean',
      if: {
        arg: 'showHeader',
        eq: true
      }
    },
    showBackButton: {
      name: '[Stories]: showBackButton',
      control: 'boolean',
      if: {
        arg: 'showHeader',
        eq: true
      }
    },
    showActionButton: {
      name: '[Stories]: showActionButton',
      control: 'boolean',
      if: {
        arg: 'showHeader',
        eq: true
      }
    },
    showFooter: {
      name: '[Stories]: showFooter',
      control: 'boolean'
    },
    longContent: {
      name: '[Stories]: longContent',
      control: 'boolean'
    },
    defaultSnapIndex: {
      control: {
        type: 'number',
        min: 0
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.triggerOpen)).toBeVisible();
  }
}`,...N.parameters?.docs?.source}}},P=[`Playground`]}))();export{N as Playground,P as __namedExportsOrder,M as default};
//# sourceMappingURL=BottomSheet.Playground.stories-euTsY7d2.js.map