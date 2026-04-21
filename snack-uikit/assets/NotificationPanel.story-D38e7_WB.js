import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{r as a}from"./index-CJ_LmFaV.js";import{c as A,a as j,b as z,h as I,e as p,g as K,f as _,N as B,S as O,s as D}from"./styles.module-yo74jsXL.js";import{P as U}from"./index-CTTgWa-s.js";import{N as r}from"./NotificationPanel-Ci-voMid.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CXM-PPQz.js";import"./index-CAfvFIBF.js";import"./DropList-DYj-b1ec.js";import"./index-B7wZyJkK.js";import"./hooks-BxAtdNDa.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-DOnNO02s.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./TruncateString-D6qo2szg.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-Bvja_9Oj.js";import"./PopoverPrivate-B3hkMTjr.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-CnYb8oA5.js";import"./index-DHAmGKAZ.js";import"./index-DreyRvUE.js";import"./Dropdown-BF5Pv_Uf.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./LocaleProvider-XVitSj_D.js";import"./index-BHM9yW28.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-B-8nXnBH.js";import"./ButtonTonal-DDV-P8La.js";import"./utils-DxHrO63v.js";import"./Counter-C_DywCEs.js";import"./Sun-BMXO82GS.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-B8LDBujc.js";import"./Divider-BbKtI3tl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-kGs9Wy83.js";import"./ButtonFunction-BVjclC6H.js";import"./useButtonNavigation-CrOhbyYc.js";import"./useClearButton-CDU-zCvr.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-d6eJPa0g.js";import"./Tag-BMfWx0Dm.js";import"./constants-BaREPXw5.js";import"./index-B80hK4m0.js";import"./ButtonSimple-BaMT2aFA.js";import"./Link-C81h5uxq.js";import"./StatusIndicator-Bd2AgtNl.js";import"./helpers-BZJWvcBK.js";import"./index-Chjiymov.js";import"./ProgressBar-BNc-jdnc.js";import"./index-Dn6vuaYJ.js";import"./index-DbF-M2Rm.js";import"./Skeleton-BH53IHBF.js";import"./SkeletonText-C72JMNK7.js";import"./SegmentedControl-BQkgMZjN.js";import"./ChipToggle-DxNLI2PN.js";import"./constants-BIigMBdG.js";import"./WithSkeleton-BYIECl0A.js";const at={title:"Components/Notification",component:r},o={All:"All",Service:"Service",System:"System"},V=({amount:u,readAllButton:g,segments:S,footerButton:k,loading:l,showDivider:C,groupSize:h,stackSize:T,...s})=>{var N;const[R,x]=a.useState(o.All),[f,b]=a.useState(!1),[M,L]=a.useState(!1),m=a.useMemo(()=>K(u).map(e=>({...e,unread:f?!1:e.unread})),[u,f]),v=!m.length&&!l,w=()=>{b(e=>!e)},c=a.useCallback(e=>_({bunchSize:h,renderBunch:(t,n)=>i.jsx(r.Group,{title:`0${n+1}.03.2026`,children:t},n),items:_({bunchSize:T,renderBunch:(t,n)=>{var E;return i.jsx(r.Stack,{title:s.stackTitle,actions:(E=s.settings)==null?void 0:E.actions,children:t},n)},items:e.map(t=>a.createElement(B,{...t,"data-test-id":O.card,key:t.id}))})}),[(N=s.settings)==null?void 0:N.actions,s.stackTitle,h,T]),G=a.useMemo(()=>{if(l)return null;if(v)return i.jsx(r.Blank,{icon:{icon:U},title:"No notifications",description:`Here you will see new event notifications
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
