import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{K as i,W as a,_ as o,d as s,f as ee,g as c,p as l,r as u,t as d,u as f}from"./iframe-qs8RgOhH.js";import{i as p,t as m}from"./src-CQRh0ypM.js";import{a as h,s as g,t as _,u as v}from"./src-CHNzQsqP.js";import{c as y,l as b,n as x,o as S,s as C,t as w}from"./src-CakkNOhE.js";import{n as T,t as E}from"./testIds-kzz080jH.js";import{a as D,i as O,n as k,o as A,r as j,s as M,t as N}from"./constants-hrOUWrRN.js";import{n as P,r as F,t as I}from"./ThemedDrawerMedia-BsE8lHKn.js";function L(e){let t=e.position===S.Bottom||e.position===S.Top,n=t&&e.width!==void 0,r=!t&&e.heightAuto!==void 0;return{effectiveWidth:t?void 0:e.width,effectiveHeightAuto:t?e.heightAuto??!0:void 0,widthClamped:n,heightAutoClamped:r}}function R(e){let{showMedia:t,showHeader:n,showHeadline:r,showSubHeadline:a,showAfterHeadline:d,showFooter:m,showBackButton:_,customTooltipText:y,position:b,longBodyContent:S,open:w,onClose:T,content:A,showBlackout:M,title:P,subtitle:R,width:V,heightAuto:H,...W}=e,G=i(),K=F(u()),[q,J]=(0,z.useState)(!1),[Y,X]=(0,z.useState)(!1),{effectiveWidth:Z,effectiveHeightAuto:Q,widthClamped:te,heightAutoClamped:$}=L({position:b,width:V,heightAuto:H}),ne=n&&r,re=n&&d,ie=n&&a,ae=n&&_,oe=S?N:A??`Body text`,se=()=>{X(!1),J(!1)};return(0,B.jsxs)(ee,{children:[(0,B.jsxs)(l,{children:[(0,B.jsx)(c,{children:`Playground`}),(0,B.jsx)(s,{children:"Открыть Drawer триггером ниже. Положение, ширина, слоты — из Controls. На desktop — боковая панель, на mobile (layoutType) — `BottomSheet` снизу."}),te&&(0,B.jsxs)(o,{children:[(0,B.jsxs)(`code`,{children:[`width=`,String(V)]}),` не применяется при `,(0,B.jsxs)(`code`,{children:[`position=`,b]}),` (horizontal). Игнорирую.`]}),$&&(0,B.jsxs)(o,{children:[(0,B.jsx)(`code`,{children:`heightAuto`}),` не применяется при `,(0,B.jsxs)(`code`,{children:[`position=`,b]}),` (vertical). Игнорирую.`]}),(0,B.jsx)(f,{align:`center`,children:(0,B.jsx)(h,{"data-test-id":E.drawer.triggerOpen,label:`Открыть Drawer`,view:v.Outline,appearance:g.Neutral,onClick:()=>J(!0)})})]}),(0,B.jsx)(x,{...W,open:q,onClose:se,position:b,width:Z,heightAuto:Q,content:oe,container:G.current||void 0,showBlackout:M,onBackButtonClick:ae?U:void 0,title:ne?P:void 0,subtitle:ie?R:void 0,slotAfterTitle:re?(0,B.jsx)(`span`,{"data-test-id":C.tooltip,children:(0,B.jsx)(p,{tip:y,size:`s`})}):void 0,media:t?(0,B.jsx)(I,{src:K,"data-test-id":C.image}):void 0,approveButton:m?{label:`Label text`}:void 0,cancelButton:m?{label:`Label text`}:void 0,additionalButton:m?{label:O,onClick:()=>X(!0)}:void 0,nestedDrawer:m?(0,B.jsx)(x,{open:Y,onClose:()=>X(!1),position:b,width:Z,heightAuto:Q,container:G.current||void 0,showBlackout:M,title:D,content:k,"data-test-id":C.nestedDrawer,approveButton:{label:j,onClick:()=>X(!1)}}):void 0})]})}var z,B,V,H,U,W,G,K;t((()=>{_(),w(),a(),m(),z=e(n(),1),d(),b(),T(),M(),P(),B=r(),{expect:V,within:H}=__STORYBOOK_MODULE_TEST__,U=()=>{alert(`clicked`)},W={title:`Snack/Overlays/Drawer/Drawer`,id:`components-drawer-drawer`,component:x,parameters:{layout:`fullscreen`}},G={tags:[`dev`,`test`],render:e=>(0,B.jsx)(R,{...e}),args:{position:S.Right,width:y.S,heightAuto:void 0,showBlackout:!0,showMedia:!0,showHeader:!0,showHeadline:!0,title:`Headline text`,showAfterHeadline:!0,customTooltipText:`Tooltip text`,showSubHeadline:!0,subtitle:`Subtitle text`,showBackButton:!0,showFooter:!0,longBodyContent:!1,content:A},argTypes:{open:{table:{disable:!0}},onClose:{table:{disable:!0}},showBlackout:{control:`boolean`,description:`Тёмная подложка`},position:{control:`radio`,options:Object.values(S),description:`Сторона выезда панели (только desktop)`,if:{global:`layoutType`,neq:`mobile`}},width:{control:`radio`,options:Object.values(y),description:`Активна при position=left/right; для top/bottom — игнорируется (runtime + DemoWarning). Только desktop`,if:{global:`layoutType`,neq:`mobile`}},heightAuto:{control:`boolean`,description:`Активна при position=top/bottom; для left/right — игнорируется (runtime + DemoWarning). Только desktop`,if:{global:`layoutType`,neq:`mobile`}},showMedia:{control:`boolean`},showHeader:{name:`[Stories]: showHeader`,control:`boolean`},showHeadline:{name:`[Stories]: showHeadline`,control:`boolean`,if:{arg:`showHeader`,eq:!0}},title:{if:{arg:`showHeadline`,eq:!0}},showAfterHeadline:{control:`boolean`,name:`[Stories]: showAfterHeadline`,if:{arg:`showHeader`,eq:!0}},showSubHeadline:{name:`[Stories]: showSubHeadline`,control:`boolean`,if:{arg:`showHeader`,eq:!0}},subtitle:{if:{arg:`showSubHeadline`,eq:!0}},showBackButton:{name:`[Stories]: showBackButton`,control:`boolean`,if:{arg:`showHeader`,eq:!0}},showFooter:{control:`boolean`},longBodyContent:{name:`[Stories]: Huge body content`,control:`boolean`},customTooltipText:{name:`[Stories]: Custom tooltip text`,if:{arg:`showAfterHeadline`,eq:!0}},footer:{table:{disable:!0}},media:{table:{disable:!0}},nestedDrawer:{table:{disable:!0}},onBackButtonClick:{table:{disable:!0}},slotAfterTitle:{table:{disable:!0}},container:{table:{disable:!0}}},play:async({canvasElement:e})=>{await V(H(e).getByTestId(E.drawer.triggerOpen)).toBeVisible()}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <PlaygroundRender {...args} />,
  args: {
    position: POSITION.Right,
    width: WIDTH.S,
    heightAuto: undefined,
    showBlackout: true,
    showMedia: true,
    showHeader: true,
    showHeadline: true,
    title: 'Headline text',
    showAfterHeadline: true,
    customTooltipText: 'Tooltip text',
    showSubHeadline: true,
    subtitle: 'Subtitle text',
    showBackButton: true,
    showFooter: true,
    longBodyContent: false,
    content: SHORT_BODY_TEXT
  },
  argTypes: {
    // open/onClose отсутствуют в args — open живёт в local useState внутри render.
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
    showBlackout: {
      control: 'boolean',
      description: 'Тёмная подложка'
    },
    position: {
      control: 'radio',
      options: Object.values(POSITION),
      description: 'Сторона выезда панели (только desktop)',
      if: {
        global: 'layoutType',
        neq: 'mobile'
      }
    },
    width: {
      control: 'radio',
      options: Object.values(WIDTH),
      description: 'Активна при position=left/right; для top/bottom — игнорируется (runtime + DemoWarning). Только desktop',
      if: {
        global: 'layoutType',
        neq: 'mobile'
      }
    },
    heightAuto: {
      control: 'boolean',
      description: 'Активна при position=top/bottom; для left/right — игнорируется (runtime + DemoWarning). Только desktop',
      if: {
        global: 'layoutType',
        neq: 'mobile'
      }
    },
    showMedia: {
      control: 'boolean'
    },
    showHeader: {
      name: '[Stories]: showHeader',
      control: 'boolean'
    },
    showHeadline: {
      name: '[Stories]: showHeadline',
      control: 'boolean',
      if: {
        arg: 'showHeader',
        eq: true
      }
    },
    title: {
      if: {
        arg: 'showHeadline',
        eq: true
      }
    },
    showAfterHeadline: {
      control: 'boolean',
      name: '[Stories]: showAfterHeadline',
      if: {
        arg: 'showHeader',
        eq: true
      }
    },
    showSubHeadline: {
      name: '[Stories]: showSubHeadline',
      control: 'boolean',
      if: {
        arg: 'showHeader',
        eq: true
      }
    },
    subtitle: {
      if: {
        arg: 'showSubHeadline',
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
    showFooter: {
      control: 'boolean'
    },
    longBodyContent: {
      name: '[Stories]: Huge body content',
      control: 'boolean'
    },
    customTooltipText: {
      name: '[Stories]: Custom tooltip text',
      if: {
        arg: 'showAfterHeadline',
        eq: true
      }
    },
    footer: {
      table: {
        disable: true
      }
    },
    media: {
      table: {
        disable: true
      }
    },
    nestedDrawer: {
      table: {
        disable: true
      }
    },
    onBackButtonClick: {
      table: {
        disable: true
      }
    },
    slotAfterTitle: {
      table: {
        disable: true
      }
    },
    container: {
      table: {
        disable: true
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.drawer.triggerOpen)).toBeVisible();
  }
}`,...G.parameters?.docs?.source}}},K=[`Playground`]}))();export{G as Playground,K as __namedExportsOrder,W as default};
//# sourceMappingURL=Drawer.Playground.stories-Xf5S-Aup.js.map