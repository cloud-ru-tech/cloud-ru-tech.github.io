import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-CJ_LmFaV.js";import{c as _}from"./index-CXM-PPQz.js";import{c as m,a as x,b as F,h as n,d as t,A as P,g as R,N as p,S as s,s as c}from"./styles.module-1vcCpVz2.js";import{N as u}from"./NotificationPanel-C8MR0KWD.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DOUS9uWn.js";import"./DropList-Dp4Bw3RR.js";import"./index-B7wZyJkK.js";import"./hooks-Bj8S_8l_.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-Cm81XGOK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./index-C0OXG0Ut.js";import"./index-CF-13Pl-.js";import"./TruncateString-C5pgoQdJ.js";import"./lodash-DyrGR4_s.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DpTcvKfh.js";import"./PopoverPrivate-CEMvfDsk.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-DC6SnJsB.js";import"./index-CAYnss5D.js";import"./index-DHfXeKe7.js";import"./Dropdown-Pk1GPJid.js";import"./index-CQc5r4_Q.js";import"./index-CV7xtGUY.js";import"./LocaleProvider-7fZm_0X9.js";import"./index-CAPw9s2k.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-5rnd8anx.js";import"./ButtonTonal-mnoF1Om6.js";import"./utils-D92wmnuO.js";import"./Counter-BqPtvVBi.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-I1cxQU3-.js";import"./Divider-BbKtI3tl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-BJeEd4V6.js";import"./ButtonFunction-BIStbrPv.js";import"./useButtonNavigation-DNBDAoGl.js";import"./useClearButton-DkMzh70e.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DOkVmsgi.js";import"./Tag-CNd-b-tk.js";import"./constants-BaREPXw5.js";import"./index-B4f8p1mq.js";import"./ButtonSimple-CcgN-5r9.js";import"./Link-DPAz5c_i.js";import"./StatusIndicator-BfhheXJn.js";import"./helpers-BAkNfVWI.js";import"./index-Chjiymov.js";import"./ProgressBar-G0ToIzOu.js";import"./index-DYaIcqfi.js";import"./index-Dj3Kdo0x.js";import"./List-CpdP8j27.js";import"./Skeleton-BH53IHBF.js";import"./SkeletonText-szHpPF0G.js";import"./SegmentedControl-pUKKojPH.js";import"./ChipToggle-Bkz1ry50.js";import"./constants-BIigMBdG.js";import"./WithSkeleton-BYIECl0A.js";const Wt={title:"Components/Notification",component:u.Stack},v=({amount:a,title:k,actions:A,appearance:g,label:h,content:N,date:O,link:f,primaryButton:S,secondaryButton:b,showButtons:y,showActions:I,...w})=>{const T=r.useMemo(()=>R(a-1),[a]);return e.jsx("div",{className:_(c.pageWrapper,c.backdrop),"data-resizable":"true",style:{overflowY:"auto"},children:e.jsxs(u.Stack,{...w,title:k,actions:I?A:[],children:[e.jsx(p,{...t,id:"first-card",appearance:g,label:h,content:N,date:O,link:f,...y?{primaryButton:S,secondaryButton:b}:{},"data-test-id":s.card}),T.map(i=>r.createElement(p,{...t,...i,key:i.id,"data-test-id":s.card}))]})})},o={render:v,args:{amount:4,showActions:!0,title:"Card stack title",appearance:t.appearance,label:t.label,unread:!1,content:t.content,date:t.date,link:t.link,primaryButton:{label:"Primary button",onClick:n},secondaryButton:{label:"Secondary button",onClick:n},showButtons:!0,actions:[{content:{option:"action 1"},onClick:n},{content:{option:"action 2"},onClick:n}]},argTypes:{amount:{name:"[Stories]: Amount of cards in the stack",control:{type:"range",min:1,max:10,step:1}},showActions:{name:"[Stories]: Show actions"},appearance:{options:Object.values(P),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},content:{control:{type:"text"}}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,x,F]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209587&mode=design"}}};var l,d,C;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(C=(d=o.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};export{Wt as default,o as notificationCardStack};
