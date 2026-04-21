import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{c as C}from"./index-CXM-PPQz.js";import{r as N}from"./index-CJ_LmFaV.js";import{N as n,c as p,a as h,b as A,S as j,d as i,A as u,h as b,s as o}from"./styles.module-orqtBk0M.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-C-NxZ9RO.js";import"./DropList-Bv1fwD7a.js";import"./index-B7wZyJkK.js";import"./hooks-C_jvX1Yv.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-CzU50cJZ.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./index-3XDw48l5.js";import"./index-DtRrUciF.js";import"./TruncateString-D6qo2szg.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-Bvja_9Oj.js";import"./PopoverPrivate-B3hkMTjr.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-C6AYJwar.js";import"./index-BQAaeyfQ.js";import"./index-Bx6tewuM.js";import"./Dropdown-BF5Pv_Uf.js";import"./index-DLGJiw2b.js";import"./index-Baw9oej9.js";import"./LocaleProvider-XVitSj_D.js";import"./index-DOEUBHJw.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-eRsF_bYq.js";import"./ButtonTonal-Bay_HnO_.js";import"./utils-B8nweq4P.js";import"./Counter-BqPtvVBi.js";import"./Sun-yWcjAHsH.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-Be7Wo2Bz.js";import"./Divider-BbKtI3tl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-BKe7G8UN.js";import"./ButtonFunction-DK-ZvizC.js";import"./useButtonNavigation-CrOhbyYc.js";import"./useClearButton-CgaX9EaT.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DOZjn9BB.js";import"./Tag-WFra8e8H.js";import"./constants-BaREPXw5.js";import"./index-CIcT2jya.js";import"./ButtonSimple-Ct37JfxI.js";import"./Link-CQxl7O4A.js";import"./StatusIndicator-DnyFC4pZ.js";import"./helpers-pCf0IU5H.js";import"./index-Chjiymov.js";import"./ProgressBar-G0ToIzOu.js";import"./index-6PN_JoHT.js";import"./index-zbp_5bxn.js";const Bt={title:"Components/Notification",component:n},x=["Default","Unread"];function T(r){return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,...r})}),t.jsx("div",{className:o.cell,children:t.jsx(n,{...i,className:o.card,unread:!0,...r})})]})}const s=C(o.cell,o.headerCell),S=({showButtons:r,...g})=>t.jsxs("div",{className:o.pageWrapper,children:[t.jsxs("div",{className:o.controlledWrapper,children:["Controlled:",t.jsx(n,{...g,...r?{primaryButton:{label:"Primary Button"},secondaryButton:{label:"Secondary Button"}}:{},className:o.controlledCard})]}),t.jsxs("div",{className:o.table,children:[t.jsx("div",{className:s,style:{gridRow:"1 / 1"}}),x.map((e,m)=>t.jsx("div",{className:s,style:{gridColumnStart:m+2,gridColumnEnd:m+3},children:e},e)),Object.values(u).map(e=>t.jsxs(N.Fragment,{children:[t.jsx("div",{className:s,children:e}),t.jsx(T,{appearance:e})]},e))]})]}),a={render:S,args:{...i,actions:i.actions.map(r=>({...r,onClick:b})),"data-test-id":j.card,showButtons:!0},argTypes:{appearance:{options:Object.values(u),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},primaryButton:{table:{disable:!0}},secondaryButton:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,h,A]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209668&mode=design"}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
