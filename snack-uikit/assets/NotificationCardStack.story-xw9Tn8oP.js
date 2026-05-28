import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-CJ_LmFaV.js";import{c as _}from"./index-CXM-PPQz.js";import{c as m,a as x,b as F,h as n,d as t,A as P,g as R,N as p,S as s,s as c}from"./styles.module-CP2Qsh6A.js";import{N as u}from"./NotificationPanel-DmllTTyp.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CAfvFIBF.js";import"./DropList-DGI1ct7S.js";import"./index-B7wZyJkK.js";import"./hooks-BTdWF9kj.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-mNHIKJjB.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./TruncateString-C1JUVyIC.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-CwDzTnvM.js";import"./PopoverPrivate-B3hkMTjr.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-DiLbC3Ao.js";import"./index-DHAmGKAZ.js";import"./index-DreyRvUE.js";import"./Dropdown-CrFyUOPH.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./LocaleProvider-XVitSj_D.js";import"./index-Cv2PZHa-.js";import"./IconPredefined-BRbxZfzQ.js";import"./Typography-bjTR1oYg.js";import"./ButtonTonal-yrs4ZTk6.js";import"./utils-KvC8ycbW.js";import"./Counter-CVeRO6SA.js";import"./Sun-BMXO82GS.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-CCUZpSxK.js";import"./Divider-Damo9_Fl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-kGs9Wy83.js";import"./ButtonFunction-BOVA1bGm.js";import"./useButtonNavigation-CrOhbyYc.js";import"./useClearButton-CDU-zCvr.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-59pCfraS.js";import"./Tag-Ch1eUARl.js";import"./constants-BaREPXw5.js";import"./index-B80hK4m0.js";import"./ButtonSimple-VoQ4Qk6W.js";import"./Link-BJ-tYZE2.js";import"./StatusIndicator-CKPEDr7I.js";import"./helpers-DVh8Xq67.js";import"./index-Chjiymov.js";import"./ProgressBar-DG8c5-VD.js";import"./index-Dn6vuaYJ.js";import"./index-DbF-M2Rm.js";import"./Skeleton-BH53IHBF.js";import"./SkeletonText-C72JMNK7.js";import"./SegmentedControl-BLeWUEba.js";import"./ChipToggle-BnYWVqku.js";import"./constants-BIigMBdG.js";import"./WithSkeleton-BYIECl0A.js";const $t={title:"Components/Notification",component:u.Stack},v=({amount:a,title:k,actions:A,appearance:g,label:h,content:N,date:O,link:f,primaryButton:S,secondaryButton:b,showButtons:y,showActions:I,...w})=>{const T=r.useMemo(()=>R(a-1),[a]);return e.jsx("div",{className:_(c.pageWrapper,c.backdrop),"data-resizable":"true",style:{overflowY:"auto"},children:e.jsxs(u.Stack,{...w,title:k,actions:I?A:[],children:[e.jsx(p,{...t,id:"first-card",appearance:g,label:h,content:N,date:O,link:f,...y?{primaryButton:S,secondaryButton:b}:{},"data-test-id":s.card}),T.map(i=>r.createElement(p,{...t,...i,key:i.id,"data-test-id":s.card}))]})})},o={render:v,args:{amount:4,showActions:!0,title:"Card stack title",appearance:t.appearance,label:t.label,unread:!1,content:t.content,date:t.date,link:t.link,primaryButton:{label:"Primary button",onClick:n},secondaryButton:{label:"Secondary button",onClick:n},showButtons:!0,actions:[{content:{option:"action 1"},onClick:n},{content:{option:"action 2"},onClick:n}]},argTypes:{amount:{name:"[Stories]: Amount of cards in the stack",control:{type:"range",min:1,max:10,step:1}},showActions:{name:"[Stories]: Show actions"},appearance:{options:Object.values(P),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},content:{control:{type:"text"}}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,x,F]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209587&mode=design"}}};var l,d,C;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
