import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{c as v,a as w,b as M,h as E,e as u,g as b,s as y,S as F,N as j}from"./styles.module-Vjt_2V90.js";import{P as G}from"./index-CU6E9CWM.js";import{N as i}from"./NotificationPanel-OOfRh8ew.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CXM-PPQz.js";import"./index-DOUS9uWn.js";import"./DropList-CK8X2bvD.js";import"./index-B7wZyJkK.js";import"./hooks-2EOYb2Fc.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-EYQuXigq.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./index-C0OXG0Ut.js";import"./index-CF-13Pl-.js";import"./TruncateString-8fx12mpr.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DPiNZODn.js";import"./PopoverPrivate-B95kCLoW.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-BA2EpnNq.js";import"./index-CAYnss5D.js";import"./index-DHfXeKe7.js";import"./Dropdown-BG-YlcBb.js";import"./index-CQc5r4_Q.js";import"./index-CV7xtGUY.js";import"./LocaleProvider-XVitSj_D.js";import"./index-qOHOPsM2.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-DK_av7HF.js";import"./ButtonTonal-NDiypO_-.js";import"./utils-DMpcSqHm.js";import"./Counter-BqPtvVBi.js";import"./Sun-BMXO82GS.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-4YTDz-tp.js";import"./Divider-Damo9_Fl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-kGs9Wy83.js";import"./ButtonFunction-Bv8Cq_il.js";import"./useButtonNavigation-DWQsSWNs.js";import"./useClearButton-BanTqwIy.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DobHWngL.js";import"./Tag-CnYvX12R.js";import"./constants-BaREPXw5.js";import"./index-B4f8p1mq.js";import"./ButtonSimple-RK8x6JPW.js";import"./Link-DmCYi7hU.js";import"./helpers-B4UQ-_Kz.js";import"./index-Chjiymov.js";import"./ProgressBar-BNc-jdnc.js";import"./index-DYaIcqfi.js";import"./index-Dj3Kdo0x.js";import"./Skeleton-BH53IHBF.js";import"./SkeletonText-C72JMNK7.js";import"./SegmentedControl-DoBEHItc.js";import"./WithSkeleton-BYIECl0A.js";const qt={title:"Components/Notification",component:i},n={All:"All",Unread:"Unread"},U=({amount:g,readAllButton:k,segments:h,footerButton:f,loading:C,showDivider:_,stackLength:T,...d})=>{var A;const[s,x]=o.useState(n.All),[N,O]=o.useState(!1),m=o.useMemo(()=>b(g),[g]),a=o.useMemo(()=>s===n.Unread?m.filter(t=>t.unread):N?m.map(t=>({...t,unread:!1})):m.sort((t,p)=>Number(p.unread??0)-Number(t.unread??0)),[N,s,m]),r=o.useMemo(()=>({notRead:a.filter(t=>t.unread),read:a.filter(t=>!t.unread)}),[a]),S=!a.length&&!C,L=()=>{O(t=>!t)},l=t=>t.map(p=>o.createElement(j,{...p,"data-test-id":F.card,key:p.id}));return e.jsx("div",{className:y.pageWrapper,"data-resizable":!0,children:e.jsx(i,{...d,readAllButton:k&&{...k,onClick:L},segments:h&&{...h,value:s,onChange:t=>{x(String(t))}},loading:C,content:e.jsxs(e.Fragment,{children:[T>0&&e.jsx(i.Stack,{title:d.stackTitle,actions:(A=d.settings)==null?void 0:A.actions,children:l(r.read.slice(-T))}),S&&e.jsx(i.Blank,{icon:{icon:G},title:"No notifications",description:`Here you will see new event notifications
when something happens`,"data-test-id":F.blank}),!S&&e.jsx(e.Fragment,{children:_&&s===n.All?e.jsxs(e.Fragment,{children:[l(r.notRead),!!(r.notRead.length&&r.read.length)&&e.jsx(i.Divider,{text:"Readed"}),l(r.read)]}):l(a)})]}),footerButton:f&&{...f,onClick(){}}})})},c={render:U,args:{...u,segments:{items:[{value:n.All,label:n.All,counter:{value:u.amount}},{value:n.Unread,label:n.Unread,counter:{value:u.amount}}],value:n.All},settings:{button:{onClick(){}},actions:[{content:{option:"setting 1"},onClick:E},{content:{option:"setting 2"},onClick:E}]},showDivider:!1,stackLength:0,stackTitle:"Card stack title"},argTypes:{amount:{name:"[Stories]: Amount of cards in the panel",control:{type:"range",min:0,max:100,step:1}},showDivider:{name:"[Stories]: Show divider after unread cards"},stackLength:{name:"[Stories]: Card stack size",control:{type:"range",min:0,max:5,step:1}},stackTitle:{name:"Card stack title",if:{arg:"stackLength",truthy:!0}}},parameters:{readme:{sidebar:[`Latest version: ${v.version}`,w,M]},packageName:v.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A209587&mode=design"}}};var I,P,R;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        value: SEGMENT_FILTER.Unread,
        label: SEGMENT_FILTER.Unread,
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
    stackLength: 0,
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
    showDivider: {
      name: '[Stories]: Show divider after unread cards'
    },
    stackLength: {
      name: '[Stories]: Card stack size',
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 1
      }
    },
    stackTitle: {
      name: 'Card stack title',
      if: {
        arg: 'stackLength',
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
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};export{qt as default,c as notificationPanel};
