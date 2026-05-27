import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-CJ_LmFaV.js";import{c as _}from"./index-CXM-PPQz.js";import{c as m,a as x,b as F,h as n,d as t,A as P,g as R,N as p,S as s,s as c}from"./styles.module-DEShLqjT.js";import{N as u}from"./NotificationPanel-B_IltLhf.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DbqLuSZO.js";import"./DropList-DxFrBtuK.js";import"./index-B7wZyJkK.js";import"./hooks-CfYIaD7Y.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-0MSBHIxJ.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./index-DO2qqcLs.js";import"./index-DJKNHUMM.js";import"./TruncateString-CnV2azF-.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DQsuwVbM.js";import"./PopoverPrivate-BQgi56s-.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-CroE0ZcT.js";import"./index-BEuzvn4S.js";import"./index-BRR1gMd_.js";import"./Dropdown-QZJyCW3f.js";import"./index-Clv-rw5D.js";import"./index-CWV_8VIe.js";import"./LocaleProvider-XVitSj_D.js";import"./index-rQ4BHT3j.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-BRWvDK8D.js";import"./ButtonTonal-CFLlDW_O.js";import"./utils-zyQx_1x7.js";import"./Counter-BqPtvVBi.js";import"./Sun-CsDryrZF.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-DHbuNNkW.js";import"./Divider-BbKtI3tl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-CmWv-wEi.js";import"./ButtonFunction-CSMRw3fa.js";import"./useButtonNavigation-EjhHKyx9.js";import"./useClearButton-B1sH0xf8.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-AlwBMVDa.js";import"./Tag-CDdpr13u.js";import"./constants-BaREPXw5.js";import"./index-Dz9fnX15.js";import"./ButtonSimple-CidWJzwE.js";import"./Link-BviaQLwA.js";import"./StatusIndicator-Dh66jFQW.js";import"./helpers-BaT4OY91.js";import"./index-Chjiymov.js";import"./ProgressBar-G0ToIzOu.js";import"./index-DAce5EUV.js";import"./index-CbwBVTm2.js";import"./Skeleton-BH53IHBF.js";import"./SkeletonText-Ck_AvQ2o.js";import"./SegmentedControl-DurEVaRB.js";import"./ChipToggle-BSPPka_u.js";import"./constants-BIigMBdG.js";import"./WithSkeleton-BYIECl0A.js";const $t={title:"Components/Notification",component:u.Stack},v=({amount:a,title:k,actions:A,appearance:g,label:h,content:N,date:O,link:f,primaryButton:S,secondaryButton:b,showButtons:y,showActions:I,...w})=>{const T=r.useMemo(()=>R(a-1),[a]);return e.jsx("div",{className:_(c.pageWrapper,c.backdrop),"data-resizable":"true",style:{overflowY:"auto"},children:e.jsxs(u.Stack,{...w,title:k,actions:I?A:[],children:[e.jsx(p,{...t,id:"first-card",appearance:g,label:h,content:N,date:O,link:f,...y?{primaryButton:S,secondaryButton:b}:{},"data-test-id":s.card}),T.map(i=>r.createElement(p,{...t,...i,key:i.id,"data-test-id":s.card}))]})})},o={render:v,args:{amount:4,showActions:!0,title:"Card stack title",appearance:t.appearance,label:t.label,unread:!1,content:t.content,date:t.date,link:t.link,primaryButton:{label:"Primary button",onClick:n},secondaryButton:{label:"Secondary button",onClick:n},showButtons:!0,actions:[{content:{option:"action 1"},onClick:n},{content:{option:"action 2"},onClick:n}]},argTypes:{amount:{name:"[Stories]: Amount of cards in the stack",control:{type:"range",min:1,max:10,step:1}},showActions:{name:"[Stories]: Show actions"},appearance:{options:Object.values(P),control:{type:"radio"}},showButtons:{name:"[Stories]: Show action buttons"},content:{control:{type:"text"}}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,x,F]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209587&mode=design"}}};var l,d,C;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
