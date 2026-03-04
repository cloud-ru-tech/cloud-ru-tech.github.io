import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{c as C}from"./index-CXM-PPQz.js";import{r as N}from"./index-CJ_LmFaV.js";import{N as n,c as p,a as h,b as A,S as j,d as i,A as u,h as b,s as o}from"./styles.module-BB5ipB4e.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CAfvFIBF.js";import"./DropList-C3EM1btR.js";import"./index-B7wZyJkK.js";import"./hooks-CuKM5LSj.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-BXqd4Fv2.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./TruncateString-DQ5jkg_7.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-B8F47jJX.js";import"./PopoverPrivate-BgnwkLUT.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-B85gHNme.js";import"./index-DHAmGKAZ.js";import"./index-DreyRvUE.js";import"./Dropdown-D6Wo1QI4.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./LocaleProvider-XVitSj_D.js";import"./index-CyhTyYPE.js";import"./IconPredefined-BFl5DzK0.js";import"./Typography-DK_av7HF.js";import"./ButtonTonal-BwmOHpoZ.js";import"./utils-D2CplKhu.js";import"./Counter-B1ZrBHB5.js";import"./Sun-BMXO82GS.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-2flGNi3f.js";import"./Divider-Damo9_Fl.js";import"./Scroll-BcVVNqQz.js";import"./Spinner-kGs9Wy83.js";import"./ButtonFunction-DfO3OHk5.js";import"./useButtonNavigation-DpQSor98.js";import"./useClearButton-IXpek8C-.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-BPxKM8Vf.js";import"./Tag-DNV8dc8C.js";import"./constants-BaREPXw5.js";import"./index-B80hK4m0.js";import"./ButtonSimple-Dw7ZVc0K.js";import"./Link-D4uqrYKy.js";import"./helpers-BcqgBpO1.js";import"./index-Chjiymov.js";import"./ProgressBar-CNltTGkY.js";import"./index-Dn6vuaYJ.js";import"./index-DbF-M2Rm.js";const wt={title:"Components/Notification",component:n},x=["Default","Unread"];function T(e){return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,...e})}),t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,unread:!0,...e})})]})}const s=C(o.cell,o.headerCell),S=({showButtons:e,...g})=>t.jsxs("div",{className:o.pageWrapper,children:[t.jsxs("div",{className:o.controlledWrapper,children:["Controlled:",t.jsx(n,{...g,...e?{primaryButton:{label:"Primary Button"},secondaryButton:{label:"Secondary Button"}}:{},className:o.controlledCard})]}),t.jsxs("div",{className:o.table,children:[t.jsx("div",{className:s,style:{gridRow:"1 / 1"}}),x.map((r,m)=>t.jsx("div",{className:s,style:{gridColumnStart:m+2,gridColumnEnd:m+3},children:r},r)),Object.values(u).map(r=>t.jsxs(N.Fragment,{children:[t.jsx("div",{className:s,children:r}),t.jsx(T,{appearance:r})]},r))]})]}),a={render:S,args:{...i,actions:i.actions.map(e=>({...e,onClick:b})),"data-test-id":j.card,showButtons:!0},argTypes:{appearance:{options:Object.values(u),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},primaryButton:{table:{disable:!0}},secondaryButton:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,h,A]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209668&mode=design"}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
