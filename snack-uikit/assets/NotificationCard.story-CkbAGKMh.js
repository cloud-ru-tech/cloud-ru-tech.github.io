import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{c as C}from"./index-DUmpqB7p.js";import{r as N}from"./index-CJ_LmFaV.js";import{N as n,c as p,a as h,b as A,S as j,d as i,A as u,h as b,s as o}from"./styles.module-BbJQiPUd.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DbqLuSZO.js";import"./index-Dz9fnX15.js";import"./DropList-RDTv5EBf.js";import"./index-B7wZyJkK.js";import"./hooks-C-QfHKcH.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-B_KgwA95.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-DO2qqcLs.js";import"./index-DJKNHUMM.js";import"./TruncateString-d_nSHKm-.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-Sklt2bcB.js";import"./index-BEuzvn4S.js";import"./index-BRR1gMd_.js";import"./Dropdown-Dd0OUUBI.js";import"./index-Clv-rw5D.js";import"./index-CWV_8VIe.js";import"./LocaleProvider-B4VrUkyw.js";import"./index-D5mgDZkw.js";import"./IconPredefined-DVxQYij_.js";import"./Typography-ChgE300v.js";import"./ButtonTonal-iCs5y4Ch.js";import"./utils-CFMmSnRl.js";import"./Counter-DXWSEFY6.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-_iBMQjFy.js";import"./Divider-C1X9zrkx.js";import"./Scroll-CyeY1SIb.js";import"./Spinner-PYn9r2mo.js";import"./ButtonFunction-CHerW9fL.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-ChndVmuz.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-2jDCmCn-.js";import"./Tag-B37ZQLfx.js";import"./constants-BaREPXw5.js";import"./ButtonSimple-DHNtzUhx.js";import"./Link-fKbAdNrg.js";import"./helpers-Bho6rl5A.js";import"./index-Chjiymov.js";import"./ProgressBar-TiBN-Oau.js";import"./index-DAce5EUV.js";import"./index-CbwBVTm2.js";const wt={title:"Components/Notification",component:n},x=["Default","Unread"];function T(e){return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,...e})}),t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,unread:!0,...e})})]})}const s=C(o.cell,o.headerCell),S=({showButtons:e,...g})=>t.jsxs("div",{className:o.pageWrapper,children:[t.jsxs("div",{className:o.controlledWrapper,children:["Controlled:",t.jsx(n,{...g,...e?{primaryButton:{label:"Primary Button"},secondaryButton:{label:"Secondary Button"}}:{},className:o.controlledCard})]}),t.jsxs("div",{className:o.table,children:[t.jsx("div",{className:s,style:{gridRow:"1 / 1"}}),x.map((r,m)=>t.jsx("div",{className:s,style:{gridColumnStart:m+2,gridColumnEnd:m+3},children:r},r)),Object.values(u).map(r=>t.jsxs(N.Fragment,{children:[t.jsx("div",{className:s,children:r}),t.jsx(T,{appearance:r})]},r))]})]}),a={render:S,args:{...i,actions:i.actions.map(e=>({...e,onClick:b})),"data-test-id":j.card,showButtons:!0},argTypes:{appearance:{options:Object.values(u),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},primaryButton:{table:{disable:!0}},secondaryButton:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,h,A]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209668&mode=design"}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
