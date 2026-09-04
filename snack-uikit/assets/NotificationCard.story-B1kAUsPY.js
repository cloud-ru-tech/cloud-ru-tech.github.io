import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{c as C}from"./index-CXM-PPQz.js";import{r as N}from"./index-CJ_LmFaV.js";import{N as n,c as p,a as h,b as A,S as j,d as i,A as u,h as b,s as o}from"./styles.module-CKTDh-27.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DOUS9uWn.js";import"./DropList-vdFsay0b.js";import"./index-B7wZyJkK.js";import"./hooks-lImjenbH.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-Dm2bIKAT.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./index-C0OXG0Ut.js";import"./index-CF-13Pl-.js";import"./TruncateString-Chrk-fjN.js";import"./lodash-DyrGR4_s.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-CeCihl4C.js";import"./PopoverPrivate-Dbj5k6oN.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-CJ0-IE_Z.js";import"./index-CAYnss5D.js";import"./index-DHfXeKe7.js";import"./Dropdown-BIBNsN_z.js";import"./index-CQc5r4_Q.js";import"./index-CV7xtGUY.js";import"./LocaleProvider-7fZm_0X9.js";import"./index-BRkGOJ1S.js";import"./IconPredefined-BRbxZfzQ.js";import"./Typography-BRWvDK8D.js";import"./ButtonTonal-Dbo7t3Uw.js";import"./utils-nE8vb_Mt.js";import"./Counter-CVeRO6SA.js";import"./Sun-Czt8-gDg.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-CQj7dEdz.js";import"./Divider-BbKtI3tl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-BcyWg2qj.js";import"./ButtonFunction-CsJIzq2t.js";import"./useButtonNavigation-DVt-5Flo.js";import"./useClearButton-X6xACxcY.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DSbAEC5z.js";import"./Tag-DFpDfDWd.js";import"./constants-BaREPXw5.js";import"./index-B4f8p1mq.js";import"./ButtonSimple-C5SERcRl.js";import"./Link-B1B-GQlQ.js";import"./StatusIndicator-ClJEnej4.js";import"./helpers-G8rvpx3x.js";import"./index-Chjiymov.js";import"./ProgressBar-DG8c5-VD.js";import"./index-DYaIcqfi.js";import"./index-Dj3Kdo0x.js";const Et={title:"Components/Notification",component:n},x=["Default","Unread"];function T(r){return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,...r})}),t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,unread:!0,...r})})]})}const m=C(o.cell,o.headerCell),S=({showButtons:r,...g})=>t.jsxs("div",{className:o.pageWrapper,children:[t.jsxs("div",{className:o.controlledWrapper,children:["Controlled:",t.jsx(n,{...g,...r?{primaryButton:{label:"Primary Button"},secondaryButton:{label:"Secondary Button"}}:{},className:o.controlledCard})]}),t.jsxs("div",{className:o.table,children:[t.jsx("div",{className:m,style:{gridRow:"1 / 1"}}),x.map((e,s)=>t.jsx("div",{className:m,style:{gridColumnStart:s+2,gridColumnEnd:s+3},children:e},e)),Object.values(u).map(e=>t.jsxs(N.Fragment,{children:[t.jsx("div",{className:m,children:e}),t.jsx(T,{appearance:e})]},e))]})]}),a={render:S,args:{...i,actions:i.actions.map(r=>({...r,onClick:b})),"data-test-id":j.card,showButtons:!0},argTypes:{appearance:{options:Object.values(u),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},primaryButton:{table:{disable:!0}},secondaryButton:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,h,A]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209668&mode=design"}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};export{Et as default,a as notificationCard};
