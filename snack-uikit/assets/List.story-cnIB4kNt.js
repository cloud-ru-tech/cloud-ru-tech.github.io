import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as e}from"./index-CJ_LmFaV.js";import{c as D,a as ee,b as te,E as o,G as ne,V as oe,B as se,L as k,w as c,s as a,e as C,d as ae}from"./styles.module-DOcaTJC3.js";import{P as re}from"./index-CwHIobxP.js";import{L as w}from"./List-BhS53_8i.js";import{B as ie}from"./ButtonFilled-DKp_o21U.js";import{B as le}from"./ButtonOutline-Dls3LApp.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-C9_U387z.js";import"./hooks-CaglF3OG.js";import"./index-DUmpqB7p.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-C51frgGe.js";import"./index-JZGyZbA2.js";import"./Checkbox-uZV6WJ28.js";import"./index-B7wZyJkK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-3XDw48l5.js";import"./index-DtRrUciF.js";import"./TruncateString-BGqQdUJ0.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-Bksrf_Jf.js";import"./PopoverPrivate-TrV_4kB1.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-CYqDG2NM.js";import"./index-BQAaeyfQ.js";import"./index-C7IVzcIX.js";import"./index-BLj3vrxU.js";import"./Dropdown-CY0dSXGI.js";import"./index-DLGJiw2b.js";import"./index-Baw9oej9.js";import"./LocaleProvider-CyhbxqE1.js";import"./index-B29BIzpi.js";import"./IconPredefined-yX8Rdo-2.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-DLgtUvlK.js";import"./utils-OngRE5jA.js";import"./Counter-dO15w468.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./Divider-C1X9zrkx.js";import"./Spinner-PYn9r2mo.js";import"./Scroll-B3e6J9cA.js";import"./ButtonFunction-DaVeIbYB.js";import"./useButtonNavigation-CnLiqaIQ.js";import"./useEventHandler-C8nLb_YB.js";import"./useClearButton-CfofiGle.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DPDxPPZc.js";import"./index-zbp_5bxn.js";import"./ButtonSimple-mIS9XgXa.js";import"./Avatar-Cy6MWq_S.js";import"./StatusIndicator-DKWE1lEW.js";const St={title:"Components/List/List",component:w},M={single:"single",multiple:"multiple",none:"none"},me=({showPinTopItems:R,showPinBottomItems:y,showSearch:z,showEmptyList:x,showFooter:j,showSwitch:p,showSwitchIcon:u,showGroups:g,showCollapsedList:G,showAsyncList:F,showEmptyState:d=o.None,showEmptyStateActionButton:v,selectionMode:r,truncateVariant:l,defaultValue:S,...s})=>{const E=e.useMemo(()=>S?r==="single"?S:[S]:r==="single"?void 0:[],[S,r]),[I,N]=e.useState(E),[q,U]=e.useState();e.useEffect(()=>{N(E)},[E]);const[H,J]=e.useState(),L=e.useMemo(()=>[...ne,...s.virtualized?oe:[]].map(n=>({...n,truncate:{...n.truncate,variant:l},items:n.items.map(m=>({...m,switch:p,showSwitchIcon:u,content:{...m.content,truncate:{...m.content.truncate,variant:l}}}))})),[s.virtualized,p,u,l]),i=e.useMemo(()=>(x?[]:se).map(n=>({...n,switch:p,showSwitchIcon:u,content:{...n.content,truncate:{...n.content.truncate,variant:l}}})),[x,p,u,l]),[Y,A]=e.useState(k),[K,O]=e.useState(!1),[Q,W]=e.useState(!0),T=e.useRef(null),$=e.useRef(null),h=e.useRef(),X=async()=>{O(!0),setTimeout(()=>{A(n=>n.concat(k)),O(!1)},1e3)},b=e.useRef(null);e.useEffect(()=>{const n=m=>{m[0].isIntersecting&&(O(!0),X())};return h.current=new IntersectionObserver(n),T.current&&h.current.observe(T.current),()=>{h.current&&h.current.disconnect()}},[F]);const P=e.useMemo(()=>c(g?L:i,"",y?i.length:0),[i,L,g,y]),Z=e.useMemo(()=>{switch(d){case o.NotFound:case o.NoData:return[];case o.DataError:case o.None:default:return P}},[d,P]);return F?t.jsx("div",{className:a.wrapper,children:t.jsxs("div",{className:a.listContainer,children:["Async List",t.jsx(w,{size:s.size,items:c(Y),scroll:!0,loading:Q&&K,scrollRef:T,scrollContainerRef:$,"data-test-id":s["data-test-id"],footerActiveElementsRefs:[b],footer:t.jsx(ie,{ref:b,className:a.btn,label:"Reset",onClick:()=>{W(!0),A([])}})})]})}):G?t.jsx("div",{className:a.wrapper,children:t.jsxs("div",{className:a.listContainer,children:["Collapsed List",t.jsx(w,{items:c(ae),size:s.size,"data-test-id":s["data-test-id"],scroll:!0,...r!=="none"?{selection:{value:I,onChange:N,mode:r}}:{selection:void 0}})]})}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:a.wrapper,children:t.jsxs("div",{className:a.listContainer,children:["Customizable List",t.jsx(w,{...s,pinTop:R?c(i):void 0,pinBottom:y?c(i,"",(R?i.length:0)+(g?L:i).length):void 0,search:z?{value:H,onChange:J,placeholder:"Placeholder"}:void 0,items:Z,...r!=="none"?{selection:{value:I,onChange:N,mode:r}}:{selection:void 0},footerActiveElementsRefs:j?[b]:void 0,collapse:{value:q,onChange:U},dataError:d===o.DataError||s.dataError,dataFiltered:s.dataFiltered??d===o.NotFound,noDataState:v?C:void 0,noResultsState:v?C:void 0,errorDataState:v?C:void 0,footer:j?t.jsx(le,{tabIndex:-1,className:a.btn,ref:b,icon:t.jsx(re,{}),label:"Edit","data-test-id":"list__custom-footer"}):void 0})]})}),t.jsx(t.Fragment,{children:JSON.stringify(I)})]})},f={render:me,args:{virtualized:!1,scroll:!0,showPinTopItems:!0,showPinBottomItems:!0,showSearch:!0,showEmptyList:!1,showFooter:!0,showSwitch:!1,showSwitchIcon:!1,showGroups:!0,showEmptyState:o.None,showEmptyStateActionButton:!1,truncateVariant:"end",marker:!0,loading:!1,size:"s",showCollapsedList:!1,showAsyncList:!1,selectionMode:"single",hasListInFocusChain:!0,scrollToSelectedItem:!1,defaultValue:"",barHideStrategy:"never"},argTypes:{showPinTopItems:{name:"[Stories]: Show pinned top item",control:{type:"boolean"}},showPinBottomItems:{name:"[Stories]: Show pinned bottom item",control:{type:"boolean"}},showSearch:{name:"[Stories]: Show search",control:{type:"boolean"}},showEmptyList:{name:"[Stories]: Show empty list",control:{type:"boolean"}},showFooter:{name:"[Stories]: Show footer",control:{type:"boolean"}},showSwitch:{name:"[Stories]: Show switch in items",control:{type:"boolean"}},showSwitchIcon:{name:"[Stories]: Show icon in switches",control:{type:"boolean",if:{arg:"showSwitch",eq:!0}}},showGroups:{name:"[Stories]: Show group items",control:{type:"boolean"}},showCollapsedList:{name:"[Stories]: Show collapsed list",control:{type:"boolean"}},showAsyncList:{name:"[Stories]: Show async list",control:{type:"boolean"}},showEmptyState:{name:"[Stories]: Empty state",control:{type:"radio"},options:Object.values(o),defaultValue:o.None},showEmptyStateActionButton:{name:"[Stories]: Show empty state action button",control:{type:"boolean"},if:{arg:"showEmptyState",neq:o.None}},truncateVariant:{name:"[Stories]: Truncate variant",control:{type:"radio"},options:["end","middle"]},items:{table:{disable:!0}},pinTop:{table:{disable:!0}},pinBottom:{table:{disable:!0}},footer:{table:{disable:!0}},search:{table:{disable:!0}},scrollRef:{table:{disable:!0}},scrollContainerRef:{table:{disable:!0}},selection:{table:{disable:!0}},noDataState:{table:{disable:!0}},noResultsState:{table:{disable:!0}},errorDataState:{table:{disable:!0}},selectionMode:{name:"[Stories]: selection Mode",options:Object.keys(M),mapping:M,control:{type:"select"}},defaultValue:{name:"[Stories]: default value",control:{type:"text"}}},parameters:{readme:{sidebar:[`Latest version: ${D.version}`,ee,te]},packageName:D.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.0.0?node-id=41%3A7631&mode=design"}}};var _,B,V;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(V=(B=f.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};export{St as default,f as list};
