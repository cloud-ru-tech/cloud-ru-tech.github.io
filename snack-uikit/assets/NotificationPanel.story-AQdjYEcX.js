import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{r as a}from"./index-CJ_LmFaV.js";import{c as A,a as j,b as z,h as I,e as p,g as K,f as _,N as B,S as O,s as D}from"./styles.module-i2x98QVl.js";import{P as U}from"./index-C1BBUjNh.js";import{N as r}from"./NotificationPanel-DOL1besJ.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CXM-PPQz.js";import"./index-DbqLuSZO.js";import"./DropList-cRbJNpnL.js";import"./index-B7wZyJkK.js";import"./hooks-DzZUT6UB.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-C2OaAS8D.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./index-DO2qqcLs.js";import"./index-DJKNHUMM.js";import"./TruncateString-D6qo2szg.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-Bvja_9Oj.js";import"./PopoverPrivate-B3hkMTjr.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-thwoUJj8.js";import"./index-BEuzvn4S.js";import"./index-BRR1gMd_.js";import"./Dropdown-nkmvv8eP.js";import"./index-Clv-rw5D.js";import"./index-CWV_8VIe.js";import"./LocaleProvider-XVitSj_D.js";import"./index-BsLMZSXM.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-BRWvDK8D.js";import"./ButtonTonal-BUxrhNgO.js";import"./utils-C37Uxzfx.js";import"./Counter-BqPtvVBi.js";import"./Sun-CsDryrZF.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-Dpxz3gV3.js";import"./Divider-BbKtI3tl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-CmWv-wEi.js";import"./ButtonFunction-mchLQeis.js";import"./useButtonNavigation-CrOhbyYc.js";import"./useClearButton-CfofSy0X.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-CwPClvAZ.js";import"./Tag-wvWHPcPw.js";import"./constants-BaREPXw5.js";import"./index-Dz9fnX15.js";import"./ButtonSimple-B8mWMaby.js";import"./Link-A5XRqo3B.js";import"./StatusIndicator-Dh66jFQW.js";import"./helpers-BF8FnFC5.js";import"./index-Chjiymov.js";import"./ProgressBar-G0ToIzOu.js";import"./index-DAce5EUV.js";import"./index-CbwBVTm2.js";import"./Skeleton-BH53IHBF.js";import"./SkeletonText-Ck_AvQ2o.js";import"./SegmentedControl-BZgmAidB.js";import"./ChipToggle-B8gyDU8q.js";import"./constants-BIigMBdG.js";import"./WithSkeleton-BYIECl0A.js";const at={title:"Components/Notification",component:r},o={All:"All",Service:"Service",System:"System"},V=({amount:u,readAllButton:g,segments:S,footerButton:k,loading:l,showDivider:C,groupSize:h,stackSize:T,...s})=>{var N;const[R,x]=a.useState(o.All),[f,b]=a.useState(!1),[M,L]=a.useState(!1),m=a.useMemo(()=>K(u).map(e=>({...e,unread:f?!1:e.unread})),[u,f]),v=!m.length&&!l,w=()=>{b(e=>!e)},c=a.useCallback(e=>_({bunchSize:h,renderBunch:(t,n)=>i.jsx(r.Group,{title:`0${n+1}.03.2026`,children:t},n),items:_({bunchSize:T,renderBunch:(t,n)=>{var E;return i.jsx(r.Stack,{title:s.stackTitle,actions:(E=s.settings)==null?void 0:E.actions,children:t},n)},items:e.map(t=>a.createElement(B,{...t,"data-test-id":O.card,key:t.id}))})}),[(N=s.settings)==null?void 0:N.actions,s.stackTitle,h,T]),G=a.useMemo(()=>{if(l)return null;if(v)return i.jsx(r.Blank,{icon:{icon:U},title:"No notifications",description:`Here you will see new event notifications
when something happens`,"data-test-id":O.blank});if(C){const e=m.filter(n=>!n.unread),t=m.filter(n=>n.unread);return i.jsxs(i.Fragment,{children:[c(t),!!(t.length&&e.length)&&i.jsx(r.Divider,{text:"Read"}),c(e)]})}return c(m)},[m,c,C,l,v]);return i.jsx("div",{className:D.pageWrapper,"data-resizable":!0,children:i.jsx(r,{...s,readAllButton:g&&{...g,onClick:w},segments:S&&{...S,value:R,onChange:e=>{x(String(e))}},chipToggle:{label:"Unread",checked:M,onChange:L},loading:l,content:G,footerButton:k&&{...k,onClick(){}}})})},d={render:V,args:{...p,segments:{items:[{value:o.All,label:o.All,counter:{value:p.amount}},{value:o.Service,label:o.Service,counter:{value:p.amount}},{value:o.System,label:o.System,counter:{value:p.amount}}],value:o.All},settings:{button:{onClick(){}},actions:[{content:{option:"setting 1"},onClick:I},{content:{option:"setting 2"},onClick:I}]},showDivider:!1,stackTitle:"Card stack title"},argTypes:{amount:{name:"[Stories]: Amount of cards in the panel",control:{type:"range",min:0,max:100,step:1}},groupSize:{name:"[Stories]: Card groups size",control:{type:"range",min:0,max:10,step:1}},stackSize:{name:"[Stories]: Card stack size",control:{type:"range",min:0,max:5,step:1}},showDivider:{name:"[Stories]: Show divider after unread cards"},stackTitle:{name:"Card stack title",if:{arg:"stackSize",truthy:!0}}},parameters:{readme:{sidebar:[`Latest version: ${A.version}`,j,z]},packageName:A.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209587&mode=design"}}};var P,F,y;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...NOTIFICATION_PANEL_PROPS_MOCK,
    segments: {
      items: [{
        value: SEGMENT_FILTER.All,
        label: SEGMENT_FILTER.All,
        counter: {
          value: NOTIFICATION_PANEL_PROPS_MOCK.amount
        }
      }, {
        value: SEGMENT_FILTER.Service,
        label: SEGMENT_FILTER.Service,
        counter: {
          value: NOTIFICATION_PANEL_PROPS_MOCK.amount
        }
      }, {
        value: SEGMENT_FILTER.System,
        label: SEGMENT_FILTER.System,
        counter: {
          value: NOTIFICATION_PANEL_PROPS_MOCK.amount
        }
      }],
      value: SEGMENT_FILTER.All
    },
    settings: {
      button: {
        onClick() {}
      },
      actions: [{
        content: {
          option: 'setting 1'
        },
        onClick: handleActionClick
      }, {
        content: {
          option: 'setting 2'
        },
        onClick: handleActionClick
      }]
    },
    showDivider: false,
    stackTitle: 'Card stack title'
  },
  argTypes: {
    amount: {
      name: '[Stories]: Amount of cards in the panel',
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      }
    },
    groupSize: {
      name: '[Stories]: Card groups size',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1
      }
    },
    stackSize: {
      name: '[Stories]: Card stack size',
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 1
      }
    },
    showDivider: {
      name: '[Stories]: Show divider after unread cards'
    },
    stackTitle: {
      name: 'Card stack title',
      if: {
        arg: 'stackSize',
        truthy: true
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
}`,...(y=(F=d.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};export{at as default,d as notificationPanel};
