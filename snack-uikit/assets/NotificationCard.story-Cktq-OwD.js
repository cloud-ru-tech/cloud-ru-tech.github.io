import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{c as C}from"./index-CXM-PPQz.js";import{r as N}from"./index-CJ_LmFaV.js";import{N as n,c as p,a as h,b as A,S as j,d as i,A as u,h as b,s as o}from"./styles.module-BmiqgrgV.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CAfvFIBF.js";import"./DropList-9PEiZUmQ.js";import"./index-B7wZyJkK.js";import"./hooks-BnKIpL6c.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-BBHazzkD.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./TruncateString-C5pgoQdJ.js";import"./lodash-DyrGR4_s.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DpTcvKfh.js";import"./PopoverPrivate-CEMvfDsk.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-CtIRb49S.js";import"./index-DHAmGKAZ.js";import"./index-DreyRvUE.js";import"./Dropdown-Pk1GPJid.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./LocaleProvider-7fZm_0X9.js";import"./index-DjS7NskG.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-D9QXbsmR.js";import"./ButtonTonal-BlHg3gbS.js";import"./utils-pLQFXq8j.js";import"./Counter-BqPtvVBi.js";import"./Sun-BMXO82GS.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-DUkLDLFl.js";import"./Divider-BbKtI3tl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-kGs9Wy83.js";import"./ButtonFunction-Bn8FY3nu.js";import"./useButtonNavigation-DNBDAoGl.js";import"./useClearButton-C2ATYprS.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-B09cGNS_.js";import"./Tag-kx_0K7x4.js";import"./constants-BaREPXw5.js";import"./index-B80hK4m0.js";import"./ButtonSimple-D3a35HBy.js";import"./Link-CgUkyNqg.js";import"./StatusIndicator-Bd2AgtNl.js";import"./helpers-Dbv0SZjV.js";import"./index-Chjiymov.js";import"./ProgressBar-BNc-jdnc.js";import"./index-Dn6vuaYJ.js";import"./index-DbF-M2Rm.js";const Et={title:"Components/Notification",component:n},x=["Default","Unread"];function T(r){return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,...r})}),t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,unread:!0,...r})})]})}const m=C(o.cell,o.headerCell),S=({showButtons:r,...g})=>t.jsxs("div",{className:o.pageWrapper,children:[t.jsxs("div",{className:o.controlledWrapper,children:["Controlled:",t.jsx(n,{...g,...r?{primaryButton:{label:"Primary Button"},secondaryButton:{label:"Secondary Button"}}:{},className:o.controlledCard})]}),t.jsxs("div",{className:o.table,children:[t.jsx("div",{className:m,style:{gridRow:"1 / 1"}}),x.map((e,s)=>t.jsx("div",{className:m,style:{gridColumnStart:s+2,gridColumnEnd:s+3},children:e},e)),Object.values(u).map(e=>t.jsxs(N.Fragment,{children:[t.jsx("div",{className:m,children:e}),t.jsx(T,{appearance:e})]},e))]})]}),a={render:S,args:{...i,actions:i.actions.map(r=>({...r,onClick:b})),"data-test-id":j.card,showButtons:!0},argTypes:{appearance:{options:Object.values(u),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},primaryButton:{table:{disable:!0}},secondaryButton:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,h,A]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209668&mode=design"}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
