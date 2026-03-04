import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{c as v,a as w,b as M,h as E,e as u,g as b,s as y,S as F,N as j}from"./styles.module-BB5ipB4e.js";import{P as G}from"./index-CTTgWa-s.js";import{N as i}from"./NotificationPanel-AuSnmMZz.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CXM-PPQz.js";import"./index-CAfvFIBF.js";import"./DropList-C3EM1btR.js";import"./index-B7wZyJkK.js";import"./hooks-CuKM5LSj.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-BXqd4Fv2.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./TruncateString-DQ5jkg_7.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-B8F47jJX.js";import"./PopoverPrivate-BgnwkLUT.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-B85gHNme.js";import"./index-DHAmGKAZ.js";import"./index-DreyRvUE.js";import"./Dropdown-D6Wo1QI4.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./LocaleProvider-XVitSj_D.js";import"./index-CyhTyYPE.js";import"./IconPredefined-BFl5DzK0.js";import"./Typography-DK_av7HF.js";import"./ButtonTonal-BwmOHpoZ.js";import"./utils-D2CplKhu.js";import"./Counter-B1ZrBHB5.js";import"./Sun-BMXO82GS.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-2flGNi3f.js";import"./Divider-Damo9_Fl.js";import"./Scroll-BcVVNqQz.js";import"./Spinner-kGs9Wy83.js";import"./ButtonFunction-DfO3OHk5.js";import"./useButtonNavigation-DpQSor98.js";import"./useClearButton-IXpek8C-.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-BPxKM8Vf.js";import"./Tag-DNV8dc8C.js";import"./constants-BaREPXw5.js";import"./index-B80hK4m0.js";import"./ButtonSimple-Dw7ZVc0K.js";import"./Link-D4uqrYKy.js";import"./helpers-BcqgBpO1.js";import"./index-Chjiymov.js";import"./ProgressBar-CNltTGkY.js";import"./index-Dn6vuaYJ.js";import"./index-DbF-M2Rm.js";import"./Skeleton-BH53IHBF.js";import"./SkeletonText-C72JMNK7.js";import"./SegmentedControl-CPfVya6i.js";import"./WithSkeleton-BYIECl0A.js";const qt={title:"Components/Notification",component:i},n={All:"All",Unread:"Unread"},U=({amount:g,readAllButton:k,segments:h,footerButton:f,loading:C,showDivider:_,stackLength:T,...d})=>{var A;const[s,x]=o.useState(n.All),[N,O]=o.useState(!1),m=o.useMemo(()=>b(g),[g]),a=o.useMemo(()=>s===n.Unread?m.filter(t=>t.unread):N?m.map(t=>({...t,unread:!1})):m.sort((t,p)=>Number(p.unread??0)-Number(t.unread??0)),[N,s,m]),r=o.useMemo(()=>({notRead:a.filter(t=>t.unread),read:a.filter(t=>!t.unread)}),[a]),S=!a.length&&!C,L=()=>{O(t=>!t)},l=t=>t.map(p=>o.createElement(j,{...p,"data-test-id":F.card,key:p.id}));return e.jsx("div",{className:y.pageWrapper,"data-resizable":!0,children:e.jsx(i,{...d,readAllButton:k&&{...k,onClick:L},segments:h&&{...h,value:s,onChange:t=>{x(String(t))}},loading:C,content:e.jsxs(e.Fragment,{children:[T>0&&e.jsx(i.Stack,{title:d.stackTitle,actions:(A=d.settings)==null?void 0:A.actions,children:l(r.read.slice(-T))}),S&&e.jsx(i.Blank,{icon:{icon:G},title:"No notifications",description:`Here you will see new event notifications
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
