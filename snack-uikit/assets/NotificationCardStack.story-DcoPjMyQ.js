import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-CJ_LmFaV.js";import{c as _}from"./index-CXM-PPQz.js";import{c as m,a as x,b as F,h as n,d as t,A as P,g as R,N as p,S as s,s as c}from"./styles.module-CMLtb5Av.js";import{N as u}from"./NotificationPanel-CMc00FYN.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-S9IyB2Vz.js";import"./DropList-DEhmQza7.js";import"./index-B7wZyJkK.js";import"./hooks-Cb7q2uDh.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-BrjwspCG.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./index-CP5aoo4S.js";import"./index-Df-dmYFR.js";import"./TruncateString-DMHAWZlY.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DaeWZEms.js";import"./PopoverPrivate-BQgi56s-.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-CnO5GMY9.js";import"./index-C3gycbXm.js";import"./index-Cxdp8tlc.js";import"./Dropdown-CJIpH82E.js";import"./index-00FjgX9j.js";import"./index-CsyvGLEa.js";import"./LocaleProvider-XVitSj_D.js";import"./index-DCrMFnLF.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-B_4XbOMz.js";import"./ButtonTonal-CmQYw77c.js";import"./utils-d0rn_W0T.js";import"./Counter-C_DywCEs.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-DZiul5Ky.js";import"./Divider-CUoM6iCM.js";import"./Scroll-p7EvfiBx.js";import"./Spinner-BJeEd4V6.js";import"./ButtonFunction-CtElqV7K.js";import"./useButtonNavigation-EjhHKyx9.js";import"./useClearButton-C6OboUMx.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-uCEkO2Kz.js";import"./Tag-CA014ENK.js";import"./constants-BaREPXw5.js";import"./index-B6hh_CYl.js";import"./ButtonSimple-CQgAGDcK.js";import"./Link-cLNEphnk.js";import"./StatusIndicator-BfhheXJn.js";import"./helpers-Bb_FfY3_.js";import"./index-Chjiymov.js";import"./ProgressBar-G0ToIzOu.js";import"./index-BPI37A09.js";import"./index-BDKfaAX1.js";import"./Skeleton-BH53IHBF.js";import"./SkeletonText-DldTRUfI.js";import"./SegmentedControl-CeWS-97t.js";import"./ChipToggle-Bt78oBSN.js";import"./constants-BIigMBdG.js";import"./WithSkeleton-BYIECl0A.js";const $t={title:"Components/Notification",component:u.Stack},v=({amount:a,title:k,actions:A,appearance:g,label:h,content:N,date:O,link:f,primaryButton:S,secondaryButton:b,showButtons:y,showActions:I,...w})=>{const T=r.useMemo(()=>R(a-1),[a]);return e.jsx("div",{className:_(c.pageWrapper,c.backdrop),"data-resizable":"true",style:{overflowY:"auto"},children:e.jsxs(u.Stack,{...w,title:k,actions:I?A:[],children:[e.jsx(p,{...t,id:"first-card",appearance:g,label:h,content:N,date:O,link:f,...y?{primaryButton:S,secondaryButton:b}:{},"data-test-id":s.card}),T.map(i=>r.createElement(p,{...t,...i,key:i.id,"data-test-id":s.card}))]})})},o={render:v,args:{amount:4,showActions:!0,title:"Card stack title",appearance:t.appearance,label:t.label,unread:!1,content:t.content,date:t.date,link:t.link,primaryButton:{label:"Primary button",onClick:n},secondaryButton:{label:"Secondary button",onClick:n},showButtons:!0,actions:[{content:{option:"action 1"},onClick:n},{content:{option:"action 2"},onClick:n}]},argTypes:{amount:{name:"[Stories]: Amount of cards in the stack",control:{type:"range",min:1,max:10,step:1}},showActions:{name:"[Stories]: Show actions"},appearance:{options:Object.values(P),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},content:{control:{type:"text"}}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,x,F]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209587&mode=design"}}};var l,d,C;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  args: {
    amount: 4,
    showActions: true,
    title: 'Card stack title',
    appearance: NOTIFICATION_CARD_MOCK.appearance,
    label: NOTIFICATION_CARD_MOCK.label,
    unread: false,
    content: NOTIFICATION_CARD_MOCK.content,
    date: NOTIFICATION_CARD_MOCK.date,
    link: NOTIFICATION_CARD_MOCK.link,
    primaryButton: {
      label: 'Primary button',
      onClick: handleActionClick
    },
    secondaryButton: {
      label: 'Secondary button',
      onClick: handleActionClick
    },
    showButtons: true,
    actions: [{
      content: {
        option: 'action 1'
      },
      onClick: handleActionClick
    }, {
      content: {
        option: 'action 2'
      },
      onClick: handleActionClick
    }]
  },
  argTypes: {
    amount: {
      name: '[Stories]: Amount of cards in the stack',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1
      }
    },
    showActions: {
      name: '[Stories]: Show actions'
    },
    appearance: {
      options: Object.values(APPEARANCE),
      control: {
        type: 'radio'
      }
    },
    showButtons: {
      name: '[Stories]: Show action buttons'
    },
    content: {
      control: {
        type: 'text'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209587&mode=design'
    }
  }
}`,...(C=(d=o.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};export{$t as default,o as notificationCardStack};
