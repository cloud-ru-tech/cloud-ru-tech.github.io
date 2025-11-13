import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{c as C}from"./index-DUmpqB7p.js";import{r as N}from"./index-CJ_LmFaV.js";import{N as n,c as p,a as h,b as A,S as j,d as i,A as u,h as b,s as o}from"./styles.module-PGWVteX_.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CAfvFIBF.js";import"./index-B80hK4m0.js";import"./DropList-DK2QrA5K.js";import"./index-B7wZyJkK.js";import"./hooks-DdBMzSWO.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-B-86ZbLV.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./TruncateString-ALtmz8MI.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-fOEkX7i0.js";import"./PopoverPrivate-C4IEYshr.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-Cq7kjPHZ.js";import"./index-DHAmGKAZ.js";import"./index-DreyRvUE.js";import"./Dropdown-DkDzFOoy.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./LocaleProvider-DhC1J63f.js";import"./index-pj0ThPRF.js";import"./IconPredefined-DVxQYij_.js";import"./Typography-COVcnQ5F.js";import"./ButtonTonal-D4DT7uYL.js";import"./utils-Bbu6MWQ4.js";import"./Counter-DXWSEFY6.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-Cc4jb0Nu.js";import"./Divider-C1X9zrkx.js";import"./Scroll-CyeY1SIb.js";import"./Spinner-PYn9r2mo.js";import"./ButtonFunction-IjEkqKc7.js";import"./useButtonNavigation-Cv4Ihyzs.js";import"./useClearButton-CSMS4U1X.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-alc9Nisi.js";import"./Tag-DAIgGQGZ.js";import"./constants-BaREPXw5.js";import"./ButtonSimple-DAbHBn6y.js";import"./Link-D5J0y8bT.js";import"./helpers-BUnLt543.js";import"./index-Chjiymov.js";import"./ProgressBar-TiBN-Oau.js";import"./index-Dn6vuaYJ.js";import"./index-DbF-M2Rm.js";const wt={title:"Components/Notification",component:n},x=["Default","Unread"];function T(e){return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,...e})}),t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,unread:!0,...e})})]})}const s=C(o.cell,o.headerCell),S=({showButtons:e,...g})=>t.jsxs("div",{className:o.pageWrapper,children:[t.jsxs("div",{className:o.controlledWrapper,children:["Controlled:",t.jsx(n,{...g,...e?{primaryButton:{label:"Primary Button"},secondaryButton:{label:"Secondary Button"}}:{},className:o.controlledCard})]}),t.jsxs("div",{className:o.table,children:[t.jsx("div",{className:s,style:{gridRow:"1 / 1"}}),x.map((r,m)=>t.jsx("div",{className:s,style:{gridColumnStart:m+2,gridColumnEnd:m+3},children:r},r)),Object.values(u).map(r=>t.jsxs(N.Fragment,{children:[t.jsx("div",{className:s,children:r}),t.jsx(T,{appearance:r})]},r))]})]}),a={render:S,args:{...i,actions:i.actions.map(e=>({...e,onClick:b})),"data-test-id":j.card,showButtons:!0},argTypes:{appearance:{options:Object.values(u),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},primaryButton:{table:{disable:!0}},secondaryButton:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,h,A]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209668&mode=design"}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
