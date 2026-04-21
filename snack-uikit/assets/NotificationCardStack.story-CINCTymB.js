import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-CJ_LmFaV.js";import{c as _}from"./index-CXM-PPQz.js";import{c as m,a as x,b as F,h as n,d as t,A as P,g as R,N as p,S as s,s as c}from"./styles.module-orqtBk0M.js";import{N as u}from"./NotificationPanel-Cg2J4t90.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-C-NxZ9RO.js";import"./DropList-Bv1fwD7a.js";import"./index-B7wZyJkK.js";import"./hooks-C_jvX1Yv.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-CzU50cJZ.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./index-3XDw48l5.js";import"./index-DtRrUciF.js";import"./TruncateString-D6qo2szg.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-Bvja_9Oj.js";import"./PopoverPrivate-B3hkMTjr.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-C6AYJwar.js";import"./index-BQAaeyfQ.js";import"./index-Bx6tewuM.js";import"./Dropdown-BF5Pv_Uf.js";import"./index-DLGJiw2b.js";import"./index-Baw9oej9.js";import"./LocaleProvider-XVitSj_D.js";import"./index-DOEUBHJw.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-eRsF_bYq.js";import"./ButtonTonal-Bay_HnO_.js";import"./utils-B8nweq4P.js";import"./Counter-BqPtvVBi.js";import"./Sun-yWcjAHsH.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-Be7Wo2Bz.js";import"./Divider-BbKtI3tl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-BKe7G8UN.js";import"./ButtonFunction-DK-ZvizC.js";import"./useButtonNavigation-CrOhbyYc.js";import"./useClearButton-CgaX9EaT.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DOZjn9BB.js";import"./Tag-WFra8e8H.js";import"./constants-BaREPXw5.js";import"./index-CIcT2jya.js";import"./ButtonSimple-Ct37JfxI.js";import"./Link-CQxl7O4A.js";import"./StatusIndicator-DnyFC4pZ.js";import"./helpers-pCf0IU5H.js";import"./index-Chjiymov.js";import"./ProgressBar-G0ToIzOu.js";import"./index-6PN_JoHT.js";import"./index-zbp_5bxn.js";import"./Skeleton-BH53IHBF.js";import"./SkeletonText-BBw1aMSw.js";import"./SegmentedControl-BZgmAidB.js";import"./ChipToggle-D9NoRION.js";import"./constants-BIigMBdG.js";import"./WithSkeleton-BYIECl0A.js";const $t={title:"Components/Notification",component:u.Stack},v=({amount:a,title:k,actions:A,appearance:g,label:h,content:N,date:O,link:f,primaryButton:S,secondaryButton:b,showButtons:y,showActions:I,...w})=>{const T=r.useMemo(()=>R(a-1),[a]);return e.jsx("div",{className:_(c.pageWrapper,c.backdrop),"data-resizable":"true",style:{overflowY:"auto"},children:e.jsxs(u.Stack,{...w,title:k,actions:I?A:[],children:[e.jsx(p,{...t,id:"first-card",appearance:g,label:h,content:N,date:O,link:f,...y?{primaryButton:S,secondaryButton:b}:{},"data-test-id":s.card}),T.map(i=>r.createElement(p,{...t,...i,key:i.id,"data-test-id":s.card}))]})})},o={render:v,args:{amount:4,showActions:!0,title:"Card stack title",appearance:t.appearance,label:t.label,unread:!1,content:t.content,date:t.date,link:t.link,primaryButton:{label:"Primary button",onClick:n},secondaryButton:{label:"Secondary button",onClick:n},showButtons:!0,actions:[{content:{option:"action 1"},onClick:n},{content:{option:"action 2"},onClick:n}]},argTypes:{amount:{name:"[Stories]: Amount of cards in the stack",control:{type:"range",min:1,max:10,step:1}},showActions:{name:"[Stories]: Show actions"},appearance:{options:Object.values(P),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},content:{control:{type:"text"}}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,x,F]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209587&mode=design"}}};var l,d,C;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
