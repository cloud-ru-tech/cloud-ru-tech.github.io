import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-CJ_LmFaV.js";import{c as x}from"./index-CXM-PPQz.js";import{c as m,a as F,b as P,h as n,d as t,A as R,g as v,N as p,S as s,s as c}from"./styles.module-DL3yyZGa.js";import{N as u}from"./NotificationPanel-BfjfMlNp.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DOUS9uWn.js";import"./DropList-9lUb7fUx.js";import"./index-B7wZyJkK.js";import"./hooks-C0qo-F_P.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-D_3QCiXO.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./index-C0OXG0Ut.js";import"./index-CF-13Pl-.js";import"./TruncateString-B3y8D6Q3.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-C-dEnYGL.js";import"./PopoverPrivate-Wl_jan0t.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-Bnym4xX7.js";import"./index-CAYnss5D.js";import"./index-DHfXeKe7.js";import"./Dropdown-DrBZ86iX.js";import"./index-CQc5r4_Q.js";import"./index-CV7xtGUY.js";import"./LocaleProvider-XVitSj_D.js";import"./index-H8i4ekSY.js";import"./IconPredefined-BFl5DzK0.js";import"./Typography-D9QXbsmR.js";import"./ButtonTonal-ByuWQQKE.js";import"./utils-S-VjwOOO.js";import"./Counter-B1ZrBHB5.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-CLj3NA8V.js";import"./Divider-Damo9_Fl.js";import"./Scroll-B_O1f2D1.js";import"./Spinner-BJeEd4V6.js";import"./ButtonFunction-DgLqV0Jc.js";import"./useButtonNavigation-DOa0a3CW.js";import"./useClearButton-I35ZnCag.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-D5F7bPEO.js";import"./Tag-C8WN3LKY.js";import"./constants-BaREPXw5.js";import"./index-B4f8p1mq.js";import"./ButtonSimple-DfU9iFMC.js";import"./Link-Cq1RYSvN.js";import"./helpers-B4531wBC.js";import"./index-Chjiymov.js";import"./ProgressBar-DXMHFNyQ.js";import"./index-DYaIcqfi.js";import"./index-Dj3Kdo0x.js";import"./Skeleton-BH53IHBF.js";import"./SkeletonText-DldTRUfI.js";import"./SegmentedControl-C87o5-Ii.js";import"./WithSkeleton-BYIECl0A.js";const Vt={title:"Components/Notification",component:u.Stack},j=({amount:a,title:k,actions:A,appearance:g,label:h,unread:N,content:O,date:f,link:S,primaryButton:b,secondaryButton:y,showButtons:I,showActions:w,...T})=>{const _=r.useMemo(()=>v(a-1),[a]);return e.jsx("div",{className:x(c.pageWrapper,c.backdrop),"data-resizable":"true",style:{overflowY:"auto"},children:e.jsxs(u.Stack,{...T,title:k,actions:w?A:[],children:[e.jsx(p,{...t,id:"first-card",appearance:g,label:h,unread:N,content:O,date:f,link:S,...I?{primaryButton:b,secondaryButton:y}:{},"data-test-id":s.card}),_.map(i=>r.createElement(p,{...t,...i,key:i.id,"data-test-id":s.card}))]})})},o={render:j,args:{amount:4,showActions:!0,title:"Card stack title",appearance:t.appearance,label:t.label,unread:!1,content:t.content,date:t.date,link:t.link,primaryButton:{label:"Primary button",onClick:n},secondaryButton:{label:"Secondary button",onClick:n},showButtons:!0,actions:[{content:{option:"action 1"},onClick:n},{content:{option:"action 2"},onClick:n}]},argTypes:{amount:{name:"[Stories]: Amount of cards in the stack",control:{type:"range",min:1,max:10,step:1}},showActions:{name:"[Stories]: Show actions"},appearance:{options:Object.values(R),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},content:{control:{type:"text"}}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,F,P]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209587&mode=design"}}};var l,d,C;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(C=(d=o.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};export{Vt as default,o as notificationCardStack};
