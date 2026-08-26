import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{B as i,H as a,c as o,d as s,h as c,l,m as u,r as d,t as f,u as p}from"./iframe-D1b9r8k6.js";import{a as m,s as h,t as g,u as _}from"./src-CiQB7kP4.js";import{i as v,t as y}from"./src-DHGjDxOO.js";import{c as b,l as x,n as S,o as C,s as w,t as T}from"./src-Dax3C-oa.js";import{n as E,t as D}from"./testIds-BJStVJqg.js";import{a as O,i as k,n as A,o as j,r as M,s as N,t as P}from"./constants-hrOUWrRN.js";import{n as F,r as I,t as L}from"./ThemedDrawerMedia-BsE8lHKn.js";function R(e){let t=e.position===C.Bottom||e.position===C.Top,n=t&&e.width!==void 0,r=!t&&e.heightAuto!==void 0;return{effectiveWidth:t?void 0:e.width,effectiveHeightAuto:t?e.heightAuto??!0:void 0,widthClamped:n,heightAutoClamped:r}}function z(e){let{showMedia:t,showHeader:n,showHeadline:r,showSubHeadline:i,showAfterHeadline:f,showFooter:g,showBackButton:y,customTooltipText:b,position:x,longBodyContent:C,open:T,onClose:E,content:j,showBlackout:N,title:F,subtitle:z,width:H,heightAuto:U,...G}=e,K=a(),q=I(d()),[J,Y]=(0,B.useState)(!1),[X,Z]=(0,B.useState)(!1),{effectiveWidth:Q,effectiveHeightAuto:$,widthClamped:ee,heightAutoClamped:te}=R({position:x,width:H,heightAuto:U}),ne=n&&r,re=n&&f,ie=n&&i,ae=n&&y,oe=C?P:j??`Body text`,se=()=>{Z(!1),Y(!1)};return(0,V.jsxs)(p,{children:[(0,V.jsxs)(s,{children:[(0,V.jsx)(u,{children:`Playground`}),(0,V.jsx)(l,{children:"Открыть Drawer триггером ниже. Положение, ширина, слоты — из Controls. На desktop — боковая панель, на mobile (layoutType) — `BottomSheet` снизу."}),ee&&(0,V.jsxs)(c,{children:[(0,V.jsxs)(`code`,{children:[`width=`,String(H)]}),` не применяется при `,(0,V.jsxs)(`code`,{children:[`position=`,x]}),` (horizontal). Игнорирую.`]}),te&&(0,V.jsxs)(c,{children:[(0,V.jsx)(`code`,{children:`heightAuto`}),` не применяется при `,(0,V.jsxs)(`code`,{children:[`position=`,x]}),` (vertical). Игнорирую.`]}),(0,V.jsx)(o,{align:`center`,children:(0,V.jsx)(m,{"data-test-id":D.drawer.triggerOpen,label:`Открыть Drawer`,view:_.Outline,appearance:h.Neutral,onClick:()=>Y(!0)})})]}),(0,V.jsx)(S,{...G,open:J,onClose:se,position:x,width:Q,heightAuto:$,content:oe,container:K.current||void 0,showBlackout:N,onBackButtonClick:ae?W:void 0,title:ne?F:void 0,subtitle:ie?z:void 0,slotAfterTitle:re?(0,V.jsx)(`span`,{"data-test-id":w.tooltip,children:(0,V.jsx)(v,{tip:b,size:`s`})}):void 0,media:t?(0,V.jsx)(L,{src:q,"data-test-id":w.image}):void 0,approveButton:g?{label:`Label text`}:void 0,cancelButton:g?{label:`Label text`}:void 0,additionalButton:g?{label:k,onClick:()=>Z(!0)}:void 0,nestedDrawer:g?(0,V.jsx)(S,{open:X,onClose:()=>Z(!1),position:x,width:Q,heightAuto:$,container:K.current||void 0,showBlackout:N,title:O,content:A,"data-test-id":w.nestedDrawer,approveButton:{label:M,onClick:()=>Z(!1)}}):void 0})]})}var B,V,H,U,W,G,K,q;t((()=>{g(),T(),i(),y(),B=e(n(),1),f(),x(),E(),N(),F(),V=r(),{expect:H,within:U}=__STORYBOOK_MODULE_TEST__,W=()=>{alert(`clicked`)},G={title:`Snack/Overlays/Drawer/Drawer`,id:`components-drawer-drawer`,component:S,parameters:{layout:`fullscreen`}},K={tags:[`dev`,`test`],render:e=>(0,V.jsx)(z,{...e}),args:{position:C.Right,width:b.S,heightAuto:void 0,showBlackout:!0,showMedia:!0,showHeader:!0,showHeadline:!0,title:`Headline text`,showAfterHeadline:!0,customTooltipText:`Tooltip text`,showSubHeadline:!0,subtitle:`Subtitle text`,showBackButton:!0,showFooter:!0,longBodyContent:!1,content:j},argTypes:{open:{table:{disable:!0}},onClose:{table:{disable:!0}},showBlackout:{control:`boolean`,description:`Тёмная подложка`},position:{control:`radio`,options:Object.values(C),description:`Сторона выезда панели (только desktop)`,if:{global:`layoutType`,neq:`mobile`}},width:{control:`radio`,options:Object.values(b),description:`Активна при position=left/right; для top/bottom — игнорируется (runtime + DemoWarning). Только desktop`,if:{global:`layoutType`,neq:`mobile`}},heightAuto:{control:`boolean`,description:`Активна при position=top/bottom; для left/right — игнорируется (runtime + DemoWarning). Только desktop`,if:{global:`layoutType`,neq:`mobile`}},showMedia:{control:`boolean`},showHeader:{name:`[Stories]: showHeader`,control:`boolean`},showHeadline:{name:`[Stories]: showHeadline`,control:`boolean`,if:{arg:`showHeader`,eq:!0}},title:{if:{arg:`showHeadline`,eq:!0}},showAfterHeadline:{control:`boolean`,name:`[Stories]: showAfterHeadline`,if:{arg:`showHeader`,eq:!0}},showSubHeadline:{name:`[Stories]: showSubHeadline`,control:`boolean`,if:{arg:`showHeader`,eq:!0}},subtitle:{if:{arg:`showSubHeadline`,eq:!0}},showBackButton:{name:`[Stories]: showBackButton`,control:`boolean`,if:{arg:`showHeader`,eq:!0}},showFooter:{control:`boolean`},longBodyContent:{name:`[Stories]: Huge body content`,control:`boolean`},customTooltipText:{name:`[Stories]: Custom tooltip text`,if:{arg:`showAfterHeadline`,eq:!0}},footer:{table:{disable:!0}},media:{table:{disable:!0}},nestedDrawer:{table:{disable:!0}},onBackButtonClick:{table:{disable:!0}},slotAfterTitle:{table:{disable:!0}},container:{table:{disable:!0}}},play:async({canvasElement:e})=>{await H(U(e).getByTestId(D.drawer.triggerOpen)).toBeVisible()}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q=[`Playground`]}))();export{K as Playground,q as __namedExportsOrder,G as default};
//# sourceMappingURL=Drawer.Playground.stories-zqEUP3qu.js.map