import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as e}from"./index-CJ_LmFaV.js";import{c as k,a as ae,b as re,E as s,G as ie,V as le,B as me,L as D,w as c,s as a,e as x,d as ce}from"./styles.module-C_ovb4p3.js";import{P as pe}from"./index-CF_OgQNJ.js";import{L as y}from"./List-Cugavwsv.js";import{B as z}from"./ButtonFilled-D_Dj3jW2.js";import{B as de}from"./ButtonOutline-BSbaLnXC.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CTTgWa-s.js";import"./hooks-4vA7a4D2.js";import"./index-CXM-PPQz.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-DcBZQCVb.js";import"./index-B7wZyJkK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./TruncateString-f6upNyc-.js";import"./lodash-DyrGR4_s.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-CVGmYPNv.js";import"./PopoverPrivate-ChY-zwou.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./Switch-lRgk2lI2.js";import"./index-DHAmGKAZ.js";import"./index-DreyRvUE.js";import"./Dropdown-D7AMH8Ka.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./LocaleProvider-7fZm_0X9.js";import"./index-Bh4qLvb8.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-eRsF_bYq.js";import"./ButtonTonal-DcQ0MrgP.js";import"./utils-C8lTz7oH.js";import"./Counter-BqPtvVBi.js";import"./Sun-CsDryrZF.js";import"./constants-BAH7I9kc.js";import"./Divider-Damo9_Fl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-CmWv-wEi.js";import"./ButtonFunction-C1dl7J9l.js";import"./useButtonNavigation-Bt1buuhC.js";import"./useClearButton-C2yFk_Oh.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-Dz9EFkYt.js";import"./index-DbF-M2Rm.js";import"./ButtonSimple-BJd050Y1.js";import"./Avatar-DAdikCzN.js";import"./StatusIndicator-Dh66jFQW.js";const ft={title:"Components/List/List",component:y},B={single:"single",multiple:"multiple",none:"none"},V=()=>Math.floor(Math.random()*1e4),ue=({showPinTopItems:C,showPinBottomItems:g,showSearch:$,showEmptyList:R,showFooter:j,showSwitch:p,showSwitchIcon:d,showGroups:v,showCollapsedList:H,collapseToggleOn:A,showAsyncList:F,showEmptyState:u=s.None,showEmptyStateActionButton:E,selectionMode:r,truncateVariant:l,defaultValue:S,...n})=>{const I=e.useMemo(()=>S?r==="single"?S:[S]:r==="single"?void 0:[],[S,r]),[O,h]=e.useState(I),[M,J]=e.useState(()=>n.virtualized?V():0),[W,Y]=e.useState();e.useEffect(()=>{h(I)},[I]);const[K,Q]=e.useState(),N=e.useMemo(()=>[...ie,...n.virtualized?le:[]].map(o=>({...o,truncate:{...o.truncate,variant:l},items:o.items.map(m=>({...m,switch:p,showSwitchIcon:d,content:{...m.content,truncate:{...m.content.truncate,variant:l}}}))})),[n.virtualized,p,d,l]),i=e.useMemo(()=>(R?[]:me).map(o=>({...o,switch:p,showSwitchIcon:d,content:{...o.content,truncate:{...o.content.truncate,variant:l}}})),[R,p,d,l]),[X,P]=e.useState(D),[Z,T]=e.useState(!1),[ee,te]=e.useState(!0),L=e.useRef(null),ne=e.useRef(null),b=e.useRef(),oe=async()=>{T(!0),setTimeout(()=>{P(o=>o.concat(D)),T(!1)},1e3)},f=e.useRef(null);e.useEffect(()=>{const o=m=>{m[0].isIntersecting&&(T(!0),oe())};return b.current=new IntersectionObserver(o),L.current&&b.current.observe(L.current),()=>{b.current&&b.current.disconnect()}},[F]);const _=e.useMemo(()=>c(v?N:i,"",g?i.length:0),[i,N,v,g]),se=e.useMemo(()=>{switch(u){case s.NotFound:case s.NoData:return[];case s.DataError:case s.None:default:return _}},[u,_]);return F?t.jsx("div",{className:a.wrapper,children:t.jsxs("div",{className:a.listContainer,children:["Async List",t.jsx(y,{size:n.size,items:c(X),scroll:!0,loading:ee&&Z,scrollRef:L,scrollContainerRef:ne,"data-test-id":n["data-test-id"],footerActiveElementsRefs:[f],footer:t.jsx(z,{ref:f,className:a.btn,label:"Reset",onClick:()=>{te(!0),P([])}})})]})}):H?t.jsx("div",{className:a.wrapper,children:t.jsxs("div",{className:a.listContainer,children:["Collapsed List",t.jsx(y,{items:c(ce),size:n.size,"data-test-id":n["data-test-id"],scroll:!0,collapse:{toggleOn:A},...r!=="none"?{selection:{value:O,onChange:h,mode:r}}:{selection:void 0}})]})}):t.jsxs("div",{className:a.outerWrapper,children:[t.jsx("div",{className:a.wrapper,children:t.jsxs("div",{className:a.listContainer,children:["Customizable List",t.jsx(y,{...n,pinTop:C?c(i):void 0,pinBottom:g?c(i,"",(C?i.length:0)+(v?N:i).length):void 0,search:$?{value:K,onChange:Q,placeholder:"Placeholder"}:void 0,items:se,...r!=="none"?{selection:{value:O,onChange:h,mode:r}}:{selection:void 0},footerActiveElementsRefs:j?[f]:void 0,collapse:{value:W,onChange:Y,toggleOn:A},dataError:u===s.DataError||n.dataError,dataFiltered:n.dataFiltered??u===s.NotFound,noDataState:E?x:void 0,noResultsState:E?x:void 0,errorDataState:E?x:void 0,footer:j?t.jsx(de,{tabIndex:-1,className:a.btn,ref:f,icon:t.jsx(pe,{}),label:"Edit","data-test-id":"list__custom-footer"}):void 0})]})}),n.virtualized&&t.jsx(z,{label:`Scroll to random large group item (${M})`,appearance:"primary",onClick:()=>{h(`large_items_${M}`),J(V())}}),t.jsx("div",{children:JSON.stringify(O)})]})},w={render:ue,args:{virtualized:!1,scroll:!0,showPinTopItems:!0,showPinBottomItems:!0,showSearch:!0,showEmptyList:!1,showFooter:!0,showSwitch:!1,showSwitchIcon:!1,showGroups:!0,showEmptyState:s.None,showEmptyStateActionButton:!1,truncateVariant:"end",marker:!0,loading:!1,size:"s",showCollapsedList:!1,collapseToggleOn:"item",showAsyncList:!1,selectionMode:"single",hasListInFocusChain:!0,scrollToSelectedItem:!1,defaultValue:"",barHideStrategy:"never"},argTypes:{showPinTopItems:{name:"[Stories]: Show pinned top item",control:{type:"boolean"}},showPinBottomItems:{name:"[Stories]: Show pinned bottom item",control:{type:"boolean"}},showSearch:{name:"[Stories]: Show search",control:{type:"boolean"}},showEmptyList:{name:"[Stories]: Show empty list",control:{type:"boolean"}},showFooter:{name:"[Stories]: Show footer",control:{type:"boolean"}},showSwitch:{name:"[Stories]: Show switch in items",control:{type:"boolean"}},showSwitchIcon:{name:"[Stories]: Show icon in switches",control:{type:"boolean",if:{arg:"showSwitch",eq:!0}}},showGroups:{name:"[Stories]: Show group items",control:{type:"boolean"}},showCollapsedList:{name:"[Stories]: Show collapsed list",control:{type:"boolean"}},collapseToggleOn:{name:"[Stories]: collapse.toggleOn",options:["item","expandIcon"],control:{type:"select"}},showAsyncList:{name:"[Stories]: Show async list",control:{type:"boolean"}},showEmptyState:{name:"[Stories]: Empty state",control:{type:"radio"},options:Object.values(s),defaultValue:s.None},showEmptyStateActionButton:{name:"[Stories]: Show empty state action button",control:{type:"boolean"},if:{arg:"showEmptyState",neq:s.None}},truncateVariant:{name:"[Stories]: Truncate variant",control:{type:"radio"},options:["end","middle"]},items:{table:{disable:!0}},pinTop:{table:{disable:!0}},pinBottom:{table:{disable:!0}},footer:{table:{disable:!0}},search:{table:{disable:!0}},scrollRef:{table:{disable:!0}},scrollContainerRef:{table:{disable:!0}},selection:{table:{disable:!0}},noDataState:{table:{disable:!0}},noResultsState:{table:{disable:!0}},errorDataState:{table:{disable:!0}},selectionMode:{name:"[Stories]: selection Mode",options:Object.keys(B),mapping:B,control:{type:"select"}},defaultValue:{name:"[Stories]: default value",control:{type:"text"}}},parameters:{readme:{sidebar:[`Latest version: ${k.version}`,ae,re]},packageName:k.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.0.0?node-id=41%3A7631&mode=design"}}};var G,q,U;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: Template,
  args: {
    virtualized: false,
    scroll: true,
    showPinTopItems: true,
    showPinBottomItems: true,
    showSearch: true,
    showEmptyList: false,
    showFooter: true,
    showSwitch: false,
    showSwitchIcon: false,
    showGroups: true,
    showEmptyState: EmptyState.None,
    showEmptyStateActionButton: false,
    truncateVariant: 'end',
    marker: true,
    loading: false,
    size: 's',
    showCollapsedList: false,
    collapseToggleOn: 'item',
    showAsyncList: false,
    selectionMode: 'single',
    hasListInFocusChain: true,
    scrollToSelectedItem: false,
    defaultValue: '',
    barHideStrategy: 'never'
  },
  argTypes: {
    showPinTopItems: {
      name: '[Stories]: Show pinned top item',
      control: {
        type: 'boolean'
      }
    },
    showPinBottomItems: {
      name: '[Stories]: Show pinned bottom item',
      control: {
        type: 'boolean'
      }
    },
    showSearch: {
      name: '[Stories]: Show search',
      control: {
        type: 'boolean'
      }
    },
    showEmptyList: {
      name: '[Stories]: Show empty list',
      control: {
        type: 'boolean'
      }
    },
    showFooter: {
      name: '[Stories]: Show footer',
      control: {
        type: 'boolean'
      }
    },
    showSwitch: {
      name: '[Stories]: Show switch in items',
      control: {
        type: 'boolean'
      }
    },
    showSwitchIcon: {
      name: '[Stories]: Show icon in switches',
      control: {
        type: 'boolean',
        if: {
          arg: 'showSwitch',
          eq: true
        }
      }
    },
    showGroups: {
      name: '[Stories]: Show group items',
      control: {
        type: 'boolean'
      }
    },
    showCollapsedList: {
      name: '[Stories]: Show collapsed list',
      control: {
        type: 'boolean'
      }
    },
    collapseToggleOn: {
      name: '[Stories]: collapse.toggleOn',
      options: ['item', 'expandIcon'],
      control: {
        type: 'select'
      }
    },
    showAsyncList: {
      name: '[Stories]: Show async list',
      control: {
        type: 'boolean'
      }
    },
    showEmptyState: {
      name: '[Stories]: Empty state',
      control: {
        type: 'radio'
      },
      options: Object.values(EmptyState),
      defaultValue: EmptyState.None
    },
    showEmptyStateActionButton: {
      name: '[Stories]: Show empty state action button',
      control: {
        type: 'boolean'
      },
      if: {
        arg: 'showEmptyState',
        neq: EmptyState.None
      }
    },
    truncateVariant: {
      name: '[Stories]: Truncate variant',
      control: {
        type: 'radio'
      },
      options: ['end', 'middle']
    },
    items: {
      table: {
        disable: true
      }
    },
    pinTop: {
      table: {
        disable: true
      }
    },
    pinBottom: {
      table: {
        disable: true
      }
    },
    footer: {
      table: {
        disable: true
      }
    },
    search: {
      table: {
        disable: true
      }
    },
    scrollRef: {
      table: {
        disable: true
      }
    },
    scrollContainerRef: {
      table: {
        disable: true
      }
    },
    selection: {
      table: {
        disable: true
      }
    },
    noDataState: {
      table: {
        disable: true
      }
    },
    noResultsState: {
      table: {
        disable: true
      }
    },
    errorDataState: {
      table: {
        disable: true
      }
    },
    selectionMode: {
      name: '[Stories]: selection Mode',
      options: Object.keys(STORY_SELECTION_MODE),
      mapping: STORY_SELECTION_MODE,
      control: {
        type: 'select'
      }
    },
    defaultValue: {
      name: '[Stories]: default value',
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.0.0?node-id=41%3A7631&mode=design'
    }
  }
}`,...(U=(q=w.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};export{ft as default,w as list};
