import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{c as C}from"./index-DUmpqB7p.js";import{r as N}from"./index-CJ_LmFaV.js";import{N as n,c as p,a as h,b as A,S as j,d as i,A as u,h as b,s as o}from"./styles.module-DwcOq5Ld.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-C-NxZ9RO.js";import"./index-CIcT2jya.js";import"./DropList-waTaV8VU.js";import"./index-B7wZyJkK.js";import"./hooks-qm9zOskg.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-C51frgGe.js";import"./index-JZGyZbA2.js";import"./Checkbox-uZV6WJ28.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-3XDw48l5.js";import"./index-DtRrUciF.js";import"./TruncateString-BGqQdUJ0.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-Bksrf_Jf.js";import"./PopoverPrivate-TrV_4kB1.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-CYqDG2NM.js";import"./index-BQAaeyfQ.js";import"./index-C7IVzcIX.js";import"./index-BLj3vrxU.js";import"./Dropdown-CY0dSXGI.js";import"./index-DLGJiw2b.js";import"./index-Baw9oej9.js";import"./LocaleProvider-CyhbxqE1.js";import"./index-BAyHfITE.js";import"./IconPredefined-yX8Rdo-2.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-D0vhccb5.js";import"./utils-BM2s5Pk-.js";import"./Counter-dO15w468.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-CM3N-4F4.js";import"./Divider-C1X9zrkx.js";import"./Spinner-PYn9r2mo.js";import"./Scroll-B3e6J9cA.js";import"./ButtonFunction-BElZbry1.js";import"./useButtonNavigation-CnLiqaIQ.js";import"./useEventHandler-C8nLb_YB.js";import"./useClearButton-CfofiGle.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-C6kWfrUd.js";import"./Tag-CdlsQJZ-.js";import"./constants-BaREPXw5.js";import"./ButtonSimple-dpcINwc-.js";import"./Link-CExnSxBD.js";import"./helpers-1yu0iOoW.js";import"./index-Chjiymov.js";import"./ProgressBar-DoG3l5ps.js";import"./index-6PN_JoHT.js";import"./index-zbp_5bxn.js";const Et={title:"Components/Notification",component:n},x=["Default","Unread"];function T(r){return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,...r})}),t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,unread:!0,...r})})]})}const m=C(o.cell,o.headerCell),S=({showButtons:r,...g})=>t.jsxs("div",{className:o.pageWrapper,children:[t.jsxs("div",{className:o.controlledWrapper,children:["Controlled:",t.jsx(n,{...g,...r?{primaryButton:{label:"Primary Button"},secondaryButton:{label:"Secondary Button"}}:{},className:o.controlledCard})]}),t.jsxs("div",{className:o.table,children:[t.jsx("div",{className:m,style:{gridRow:"1 / 1"}}),x.map((e,s)=>t.jsx("div",{className:m,style:{gridColumnStart:s+2,gridColumnEnd:s+3},children:e},e)),Object.values(u).map(e=>t.jsxs(N.Fragment,{children:[t.jsx("div",{className:m,children:e}),t.jsx(T,{appearance:e})]},e))]})]}),a={render:S,args:{...i,actions:i.actions.map(r=>({...r,onClick:b})),"data-test-id":j.card,showButtons:!0},argTypes:{appearance:{options:Object.values(u),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},primaryButton:{table:{disable:!0}},secondaryButton:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,h,A]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209668&mode=design"}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
