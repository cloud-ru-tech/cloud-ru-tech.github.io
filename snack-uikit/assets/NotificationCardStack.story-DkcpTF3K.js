import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-CJ_LmFaV.js";import{c as x}from"./index-CXM-PPQz.js";import{c as m,a as F,b as P,h as n,d as t,A as R,g as v,N as p,S as s,s as c}from"./styles.module-BB5ipB4e.js";import{N as u}from"./NotificationPanel-AuSnmMZz.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CAfvFIBF.js";import"./DropList-C3EM1btR.js";import"./index-B7wZyJkK.js";import"./hooks-CuKM5LSj.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-BXqd4Fv2.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./TruncateString-DQ5jkg_7.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-B8F47jJX.js";import"./PopoverPrivate-BgnwkLUT.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-B85gHNme.js";import"./index-DHAmGKAZ.js";import"./index-DreyRvUE.js";import"./Dropdown-D6Wo1QI4.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./LocaleProvider-XVitSj_D.js";import"./index-CyhTyYPE.js";import"./IconPredefined-BFl5DzK0.js";import"./Typography-DK_av7HF.js";import"./ButtonTonal-BwmOHpoZ.js";import"./utils-D2CplKhu.js";import"./Counter-B1ZrBHB5.js";import"./Sun-BMXO82GS.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-2flGNi3f.js";import"./Divider-Damo9_Fl.js";import"./Scroll-BcVVNqQz.js";import"./Spinner-kGs9Wy83.js";import"./ButtonFunction-DfO3OHk5.js";import"./useButtonNavigation-DpQSor98.js";import"./useClearButton-IXpek8C-.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-BPxKM8Vf.js";import"./Tag-DNV8dc8C.js";import"./constants-BaREPXw5.js";import"./index-B80hK4m0.js";import"./ButtonSimple-Dw7ZVc0K.js";import"./Link-D4uqrYKy.js";import"./helpers-BcqgBpO1.js";import"./index-Chjiymov.js";import"./ProgressBar-CNltTGkY.js";import"./index-Dn6vuaYJ.js";import"./index-DbF-M2Rm.js";import"./Skeleton-BH53IHBF.js";import"./SkeletonText-C72JMNK7.js";import"./SegmentedControl-CPfVya6i.js";import"./WithSkeleton-BYIECl0A.js";const Vt={title:"Components/Notification",component:u.Stack},j=({amount:a,title:k,actions:A,appearance:g,label:h,unread:N,content:O,date:f,link:S,primaryButton:b,secondaryButton:y,showButtons:I,showActions:w,...T})=>{const _=r.useMemo(()=>v(a-1),[a]);return e.jsx("div",{className:x(c.pageWrapper,c.backdrop),"data-resizable":"true",style:{overflowY:"auto"},children:e.jsxs(u.Stack,{...T,title:k,actions:w?A:[],children:[e.jsx(p,{...t,id:"first-card",appearance:g,label:h,unread:N,content:O,date:f,link:S,...I?{primaryButton:b,secondaryButton:y}:{},"data-test-id":s.card}),_.map(i=>r.createElement(p,{...t,...i,key:i.id,"data-test-id":s.card}))]})})},o={render:j,args:{amount:4,showActions:!0,title:"Card stack title",appearance:t.appearance,label:t.label,unread:!1,content:t.content,date:t.date,link:t.link,primaryButton:{label:"Primary button",onClick:n},secondaryButton:{label:"Secondary button",onClick:n},showButtons:!0,actions:[{content:{option:"action 1"},onClick:n},{content:{option:"action 2"},onClick:n}]},argTypes:{amount:{name:"[Stories]: Amount of cards in the stack",control:{type:"range",min:1,max:10,step:1}},showActions:{name:"[Stories]: Show actions"},appearance:{options:Object.values(R),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},content:{control:{type:"text"}}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,F,P]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209587&mode=design"}}};var l,d,C;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
