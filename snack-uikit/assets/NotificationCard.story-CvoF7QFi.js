import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{c as C}from"./index-DUmpqB7p.js";import{r as N}from"./index-CJ_LmFaV.js";import{N as n,c as p,a as h,b as A,S as j,d as i,A as u,h as b,s as o}from"./styles.module-DOQxB_Cx.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DOUS9uWn.js";import"./index-B4f8p1mq.js";import"./DropList-Wzsf0-v2.js";import"./index-B7wZyJkK.js";import"./hooks-D1n50Nla.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-C51frgGe.js";import"./index-JZGyZbA2.js";import"./Checkbox-BPp2F_B8.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-C0OXG0Ut.js";import"./index-CF-13Pl-.js";import"./TruncateString-NSjc3XzO.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-C67siN8J.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-Ct9nJb3P.js";import"./index-CAYnss5D.js";import"./index-DOM9zHVr.js";import"./index-DhD2neKD.js";import"./Dropdown-DW3sYUoc.js";import"./index-CQc5r4_Q.js";import"./index-CV7xtGUY.js";import"./LocaleProvider-CyhbxqE1.js";import"./index-D-5xGnYw.js";import"./IconPredefined-FEPQkyLi.js";import"./Typography-WZPdBQao.js";import"./ButtonTonal-YV7IKDPs.js";import"./utils-DzobPs8h.js";import"./Counter-CRGhF3Kb.js";import"./Sun-WJ2YftH0.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-BLfaiW75.js";import"./Divider-C1X9zrkx.js";import"./Spinner-DA8AR1nX.js";import"./Scroll-B3e6J9cA.js";import"./ButtonFunction-DNxi1ZK7.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-B39o1uTp.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-CThf6NgV.js";import"./Tag-BnBDaFV1.js";import"./constants-BaREPXw5.js";import"./ButtonSimple-DU46mwYa.js";import"./Link-Bfb-ZlTv.js";import"./helpers-1A6x4gon.js";import"./index-Chjiymov.js";import"./ProgressBar-DTDq07Fs.js";import"./index-DYaIcqfi.js";import"./index-Dj3Kdo0x.js";const Bt={title:"Components/Notification",component:n},x=["Default","Unread"];function T(r){return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,...r})}),t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,unread:!0,...r})})]})}const s=C(o.cell,o.headerCell),S=({showButtons:r,...g})=>t.jsxs("div",{className:o.pageWrapper,children:[t.jsxs("div",{className:o.controlledWrapper,children:["Controlled:",t.jsx(n,{...g,...r?{primaryButton:{label:"Primary Button"},secondaryButton:{label:"Secondary Button"}}:{},className:o.controlledCard})]}),t.jsxs("div",{className:o.table,children:[t.jsx("div",{className:s,style:{gridRow:"1 / 1"}}),x.map((e,m)=>t.jsx("div",{className:s,style:{gridColumnStart:m+2,gridColumnEnd:m+3},children:e},e)),Object.values(u).map(e=>t.jsxs(N.Fragment,{children:[t.jsx("div",{className:s,children:e}),t.jsx(T,{appearance:e})]},e))]})]}),a={render:S,args:{...i,actions:i.actions.map(r=>({...r,onClick:b})),"data-test-id":j.card,showButtons:!0},argTypes:{appearance:{options:Object.values(u),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},primaryButton:{table:{disable:!0}},secondaryButton:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,h,A]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209668&mode=design"}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};export{Bt as default,a as notificationCard};
