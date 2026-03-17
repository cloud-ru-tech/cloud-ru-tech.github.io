import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{c as C}from"./index-CXM-PPQz.js";import{r as N}from"./index-CJ_LmFaV.js";import{N as n,c as p,a as h,b as A,S as j,d as i,A as u,h as b,s as o}from"./styles.module-Vjt_2V90.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DOUS9uWn.js";import"./DropList-CK8X2bvD.js";import"./index-B7wZyJkK.js";import"./hooks-2EOYb2Fc.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-EYQuXigq.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./index-C0OXG0Ut.js";import"./index-CF-13Pl-.js";import"./TruncateString-8fx12mpr.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DPiNZODn.js";import"./PopoverPrivate-B95kCLoW.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-BA2EpnNq.js";import"./index-CAYnss5D.js";import"./index-DHfXeKe7.js";import"./Dropdown-BG-YlcBb.js";import"./index-CQc5r4_Q.js";import"./index-CV7xtGUY.js";import"./LocaleProvider-XVitSj_D.js";import"./index-qOHOPsM2.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-DK_av7HF.js";import"./ButtonTonal-NDiypO_-.js";import"./utils-DMpcSqHm.js";import"./Counter-BqPtvVBi.js";import"./Sun-BMXO82GS.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-4YTDz-tp.js";import"./Divider-Damo9_Fl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-kGs9Wy83.js";import"./ButtonFunction-Bv8Cq_il.js";import"./useButtonNavigation-DWQsSWNs.js";import"./useClearButton-BanTqwIy.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DobHWngL.js";import"./Tag-CnYvX12R.js";import"./constants-BaREPXw5.js";import"./index-B4f8p1mq.js";import"./ButtonSimple-RK8x6JPW.js";import"./Link-DmCYi7hU.js";import"./helpers-B4UQ-_Kz.js";import"./index-Chjiymov.js";import"./ProgressBar-BNc-jdnc.js";import"./index-DYaIcqfi.js";import"./index-Dj3Kdo0x.js";const wt={title:"Components/Notification",component:n},x=["Default","Unread"];function T(e){return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,...e})}),t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,unread:!0,...e})})]})}const s=C(o.cell,o.headerCell),S=({showButtons:e,...g})=>t.jsxs("div",{className:o.pageWrapper,children:[t.jsxs("div",{className:o.controlledWrapper,children:["Controlled:",t.jsx(n,{...g,...e?{primaryButton:{label:"Primary Button"},secondaryButton:{label:"Secondary Button"}}:{},className:o.controlledCard})]}),t.jsxs("div",{className:o.table,children:[t.jsx("div",{className:s,style:{gridRow:"1 / 1"}}),x.map((r,m)=>t.jsx("div",{className:s,style:{gridColumnStart:m+2,gridColumnEnd:m+3},children:r},r)),Object.values(u).map(r=>t.jsxs(N.Fragment,{children:[t.jsx("div",{className:s,children:r}),t.jsx(T,{appearance:r})]},r))]})]}),a={render:S,args:{...i,actions:i.actions.map(e=>({...e,onClick:b})),"data-test-id":j.card,showButtons:!0},argTypes:{appearance:{options:Object.values(u),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},primaryButton:{table:{disable:!0}},secondaryButton:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,h,A]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209668&mode=design"}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...NOTIFICATION_CARD_MOCK,
    actions: NOTIFICATION_CARD_MOCK.actions.map(action => ({
      ...action,
      onClick: handleActionClick
    })),
    'data-test-id': STORY_TEST_IDS.card,
    showButtons: true
  },
  argTypes: {
    appearance: {
      options: Object.values(APPEARANCE),
      control: {
        type: 'radio'
      }
    },
    showButtons: {
      name: '[Stories]: Show action buttons'
    },
    primaryButton: {
      table: {
        disable: true
      }
    },
    secondaryButton: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209668&mode=design'
    }
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};export{wt as default,a as notificationCard};
