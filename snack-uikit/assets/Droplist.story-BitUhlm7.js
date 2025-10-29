import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-CJ_LmFaV.js";import{c as d,a as y,b as k,s,w as v,D as T}from"./styles.module-1YfBTFyY.js";import{P as E}from"./index-CF_OgQNJ.js";import{D as h}from"./DropList-BeTwO9JS.js";import{B as R}from"./ButtonFilled-pGiP3SQa.js";import{B as x}from"./ButtonOutline-CkO1bhla.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CTTgWa-s.js";import"./hooks-DON7lT9t.js";import"./index-DUmpqB7p.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-B-86ZbLV.js";import"./index-B7wZyJkK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./TruncateString-BMtbUp3O.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-Cq7kjPHZ.js";import"./index-DHAmGKAZ.js";import"./index-DreyRvUE.js";import"./Dropdown-4YXb2YvP.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./LocaleProvider-B4VrUkyw.js";import"./index-BhVwnnbR.js";import"./IconPredefined-DVxQYij_.js";import"./Typography-COVcnQ5F.js";import"./ButtonTonal-BOArSFPu.js";import"./utils-CWv1hTMo.js";import"./Counter-DXWSEFY6.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./Divider-C1X9zrkx.js";import"./Scroll-CyeY1SIb.js";import"./Spinner-PYn9r2mo.js";import"./ButtonFunction-DO8-q7Gq.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-CAlOraVE.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-alc9Nisi.js";import"./index-DbF-M2Rm.js";import"./ButtonSimple-BlHO0UW0.js";import"./Avatar-BNz3HYUr.js";import"./StatusIndicator-CHzrA3uO.js";const Ie={title:"Components/List/Droplist",component:h},u={single:"single",multiple:"multiple",none:"none"},C=({showFooter:m,showSearch:S,selectionMode:n,defaultValue:a,...e})=>{const l=r.useMemo(()=>a?n==="single"?a:[a]:n==="single"?void 0:[],[a,n]),[o,p]=r.useState(l);r.useEffect(()=>{p(l)},[l]);const[w,O]=r.useState(),c=r.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:s.wrapper,style:{padding:4},children:t.jsx(h,{...e,className:s.droplistContainer,trigger:e.trigger,placement:e.placement,size:e.size,loading:e.loading,marker:e.marker,scroll:e.scroll,items:v(T),...n!=="none"?{selection:{value:o,onChange:p,mode:n}}:{selection:void 0},"data-test-id":e["data-test-id"],search:S?{value:w,onChange:O,placeholder:"Placeholder"}:void 0,footerActiveElementsRefs:m?[c]:void 0,footer:m?t.jsx(x,{className:s.btn,ref:c,icon:t.jsx(E,{}),label:"Edit","data-test-id":"list__custom-footer"}):void 0,children:t.jsx(R,{label:e.trigger,"data-test-id":"droplist-button-trigger"})})}),n!=="none"&&!!(n==="single"?o:o&&o.length>0)&&t.jsxs("div",{children:["Value: ",JSON.stringify(o,null,2)]})]})},i={render:C,args:{trigger:"click",placement:"bottom-start",widthStrategy:"gte",size:"s",marker:!0,scroll:!0,loading:!1,showFooter:!0,showSearch:!1,selectionMode:"single",closeDroplistOnItemClick:!1,untouchableScrollbars:!1,scrollToSelectedItem:!1,defaultValue:""},argTypes:{showFooter:{name:"[Stories]: Show footer",control:{type:"boolean"}},showSearch:{name:"[Stories]: Show search",control:{type:"boolean"}},triggerElemRef:{table:{disable:!0}},open:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},items:{table:{disable:!0}},pinTop:{table:{disable:!0}},pinBottom:{table:{disable:!0}},footer:{table:{disable:!0}},selection:{table:{disable:!0}},selectionMode:{name:"[Story]: selection Mode",options:Object.keys(u),mapping:u,control:{type:"select"}},search:{table:{disable:!0}},scrollRef:{table:{disable:!0}},scrollContainerRef:{table:{disable:!0}},defaultValue:{name:"[Stories]: default value",control:{type:"text"}}},parameters:{readme:{sidebar:[`Latest version: ${d.version}`,y,k]},packageName:d.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.0.0?node-id=41%3A7631&mode=design"}}};var b,g,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    trigger: 'click',
    placement: 'bottom-start',
    widthStrategy: 'gte',
    size: 's',
    marker: true,
    scroll: true,
    loading: false,
    showFooter: true,
    showSearch: false,
    selectionMode: 'single',
    closeDroplistOnItemClick: false,
    untouchableScrollbars: false,
    scrollToSelectedItem: false,
    defaultValue: ''
  },
  argTypes: {
    showFooter: {
      name: '[Stories]: Show footer',
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
    triggerElemRef: {
      table: {
        disable: true
      }
    },
    open: {
      table: {
        disable: true
      }
    },
    onOpenChange: {
      table: {
        disable: true
      }
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
    selection: {
      table: {
        disable: true
      }
    },
    selectionMode: {
      name: '[Story]: selection Mode',
      options: Object.keys(STORY_SELECTION_MODE),
      mapping: STORY_SELECTION_MODE,
      control: {
        type: 'select'
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
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};export{Ie as default,i as droplist};
