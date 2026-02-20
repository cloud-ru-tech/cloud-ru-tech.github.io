import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{c as v,a as w,b as M,h as E,e as u,g as b,s as y,S as F,N as j}from"./styles.module-Dwn30XS8.js";import{P as G}from"./index-C9_U387z.js";import{N as i}from"./NotificationPanel-C4Y39a7-.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DUmpqB7p.js";import"./index-C-NxZ9RO.js";import"./DropList-B-yWszFZ.js";import"./index-B7wZyJkK.js";import"./hooks-BfWiFjb8.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-CSVLuhwq.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-3XDw48l5.js";import"./index-DtRrUciF.js";import"./TruncateString-D54BiV_x.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-pxs55hib.js";import"./index-BQAaeyfQ.js";import"./index-Bx6tewuM.js";import"./Dropdown-4YXb2YvP.js";import"./index-DLGJiw2b.js";import"./index-Baw9oej9.js";import"./LocaleProvider-DhC1J63f.js";import"./index-CXDcoFV-.js";import"./IconPredefined-DVxQYij_.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-Bnr4eCkc.js";import"./utils-Cci-L8Vb.js";import"./Counter-DXWSEFY6.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-BioftgjW.js";import"./Divider-C1X9zrkx.js";import"./Scroll-CyeY1SIb.js";import"./Spinner-PYn9r2mo.js";import"./ButtonFunction-DzSpe7i-.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-CFmx5Mk4.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DKsi1bc7.js";import"./Tag-SYaj7e1D.js";import"./constants-BaREPXw5.js";import"./index-CIcT2jya.js";import"./ButtonSimple-CQB4ePFN.js";import"./Link-DMlnAGbL.js";import"./helpers-zDiVTNg7.js";import"./index-Chjiymov.js";import"./ProgressBar-WLa2PlTA.js";import"./index-6PN_JoHT.js";import"./index-zbp_5bxn.js";import"./Skeleton-Cf0sBfNU.js";import"./SkeletonText-DP-re6Ou.js";import"./SegmentedControl-Do4C4R6e.js";import"./WithSkeleton-BvFnKWIX.js";const qt={title:"Components/Notification",component:i},n={All:"All",Unread:"Unread"},U=({amount:g,readAllButton:k,segments:h,footerButton:f,loading:C,showDivider:_,stackLength:T,...d})=>{var A;const[s,x]=o.useState(n.All),[N,O]=o.useState(!1),m=o.useMemo(()=>b(g),[g]),a=o.useMemo(()=>s===n.Unread?m.filter(t=>t.unread):N?m.map(t=>({...t,unread:!1})):m.sort((t,p)=>Number(p.unread??0)-Number(t.unread??0)),[N,s,m]),r=o.useMemo(()=>({notRead:a.filter(t=>t.unread),read:a.filter(t=>!t.unread)}),[a]),S=!a.length&&!C,L=()=>{O(t=>!t)},l=t=>t.map(p=>o.createElement(j,{...p,"data-test-id":F.card,key:p.id}));return e.jsx("div",{className:y.pageWrapper,"data-resizable":!0,children:e.jsx(i,{...d,readAllButton:k&&{...k,onClick:L},segments:h&&{...h,value:s,onChange:t=>{x(String(t))}},loading:C,content:e.jsxs(e.Fragment,{children:[T>0&&e.jsx(i.Stack,{title:d.stackTitle,actions:(A=d.settings)==null?void 0:A.actions,children:l(r.read.slice(-T))}),S&&e.jsx(i.Blank,{icon:{icon:G},title:"No notifications",description:`Here you will see new event notifications
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
