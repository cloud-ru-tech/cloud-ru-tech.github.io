import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{c as v,a as w,b as M,h as E,e as u,g as b,s as y,S as F,N as j}from"./styles.module-vQ_SmltI.js";import{P as G}from"./index-CTTgWa-s.js";import{N as i}from"./NotificationPanel-fdnjdFUY.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DUmpqB7p.js";import"./index-CAfvFIBF.js";import"./DropList-tV7iwXNK.js";import"./index-B7wZyJkK.js";import"./hooks-ul0rw9Ln.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-CSVw01DX.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./TruncateString-DnLT93lE.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-fOEkX7i0.js";import"./PopoverPrivate-C4IEYshr.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-DNtPql5T.js";import"./index-DHAmGKAZ.js";import"./index-DreyRvUE.js";import"./Dropdown-DkDzFOoy.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./LocaleProvider-DhC1J63f.js";import"./index-DgWwr5Nb.js";import"./IconPredefined-CdsMvCqQ.js";import"./Typography-COVcnQ5F.js";import"./ButtonTonal-hMtR5mgl.js";import"./utils-BSsgJRY4.js";import"./Counter-D8sCmdvq.js";import"./Sun-BLz2v2u6.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-Dc8QW1ok.js";import"./Divider-C1X9zrkx.js";import"./Scroll-CyeY1SIb.js";import"./Spinner-DwtrFO2L.js";import"./ButtonFunction-EXNPkCx6.js";import"./useButtonNavigation-Cv4Ihyzs.js";import"./useClearButton-gCQy__sB.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-Bkfzx-YV.js";import"./Tag-TngNqucY.js";import"./constants-BaREPXw5.js";import"./index-B80hK4m0.js";import"./ButtonSimple-3w-rGG8G.js";import"./Link-WjXiYJAK.js";import"./helpers-CgiRGsBc.js";import"./index-Chjiymov.js";import"./ProgressBar-ngck8Lan.js";import"./index-Dn6vuaYJ.js";import"./index-DbF-M2Rm.js";import"./Skeleton-Cf0sBfNU.js";import"./SkeletonText-IBa0zlgv.js";import"./SegmentedControl-jglYjdzj.js";import"./WithSkeleton-BvFnKWIX.js";const qt={title:"Components/Notification",component:i},n={All:"All",Unread:"Unread"},U=({amount:g,readAllButton:k,segments:h,footerButton:f,loading:C,showDivider:_,stackLength:T,...d})=>{var A;const[s,x]=o.useState(n.All),[N,O]=o.useState(!1),m=o.useMemo(()=>b(g),[g]),a=o.useMemo(()=>s===n.Unread?m.filter(t=>t.unread):N?m.map(t=>({...t,unread:!1})):m.sort((t,p)=>Number(p.unread??0)-Number(t.unread??0)),[N,s,m]),r=o.useMemo(()=>({notRead:a.filter(t=>t.unread),read:a.filter(t=>!t.unread)}),[a]),S=!a.length&&!C,L=()=>{O(t=>!t)},l=t=>t.map(p=>o.createElement(j,{...p,"data-test-id":F.card,key:p.id}));return e.jsx("div",{className:y.pageWrapper,"data-resizable":!0,children:e.jsx(i,{...d,readAllButton:k&&{...k,onClick:L},segments:h&&{...h,value:s,onChange:t=>{x(String(t))}},loading:C,content:e.jsxs(e.Fragment,{children:[T>0&&e.jsx(i.Stack,{title:d.stackTitle,actions:(A=d.settings)==null?void 0:A.actions,children:l(r.read.slice(-T))}),S&&e.jsx(i.Blank,{icon:{icon:G},title:"No notifications",description:`Here you will see new event notifications
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
