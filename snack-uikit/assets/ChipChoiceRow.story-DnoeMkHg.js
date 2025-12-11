import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{c as p,a as g,b as h,s as C}from"./styles.module-BWxD4P7h.js";import{C as d,a as S}from"./ChipChoiceRow-C5jWiZEi.js";import{D as y,f as V,S as w}from"./helpers-DSWmnuo9.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DUmpqB7p.js";import"./index-JZGyZbA2.js";import"./constants-C4fmyMeh.js";import"./index-BFtmJQQJ.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-DhC1J63f.js";import"./ButtonFunction-DbnPA0ic.js";import"./utils-BPr_B-ku.js";import"./Counter-DXWSEFY6.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-DYDW7LMF.js";import"./index-B7wZyJkK.js";import"./index-DHAmGKAZ.js";import"./TruncateString-D54BiV_x.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-4YXb2YvP.js";import"./hooks-CBpxfy5c.js";import"./Checkbox-Qhd3ysTP.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./Switch-LqiDMEXN.js";import"./index-DreyRvUE.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./index-CoeZrg_Q.js";import"./IconPredefined-DVxQYij_.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-Cm84dajm.js";import"./Divider-C1X9zrkx.js";import"./Scroll-CyeY1SIb.js";import"./Spinner-DZPrD8kc.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-31EHK2UD.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-B9JOWh00.js";import"./DropList-CfaYedNy.js";import"./Calendar-CQjinJqn.js";import"./TimePickerBase-CMyPn4Vy.js";import"./List-CfNEXBF7.js";import"./TimePicker-BZD4y6i-.js";import"./index-CF_OgQNJ.js";const Ee={title:"Components/Chips/ChipChoiceRow",component:d};function k({useDefaultValues:i,...a}){const t=o.useMemo(()=>i?a.defaultValue:{},[a.defaultValue,i]),[s,n]=o.useState(t),[f,m]=o.useState(Object.keys(s??{}));return o.useLayoutEffect(()=>{n(t),m(Object.keys(t??{}))},[t,i]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:C.chipChoiceRowWrapper,children:e.jsx(d,{...a,value:s,onChange:n,visibleFilters:f,onVisibleFiltersChange:m})}),e.jsx("span",{style:{opacity:0},"data-test-id":w.State,children:JSON.stringify(s)})]})}const r={render:k,args:{size:"s",filters:V,showClearButton:!0,showAddButton:!0,useDefaultValues:!0,defaultValue:y},argTypes:{size:{options:Object.values(S),control:{type:"radio"}},useDefaultValues:{name:"[Story] use default values",type:"boolean"},defaultValue:{if:{arg:"useDefaultValues",eq:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,g,h]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152236&mode=design"}}};var l,u,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: 's',
    filters: filtersMock,
    showClearButton: true,
    showAddButton: true,
    useDefaultValues: true,
    defaultValue: DEFAULT_VALUES as Filters
  },
  argTypes: {
    size: {
      options: Object.values(CHIP_CHOICE_ROW_SIZE),
      control: {
        type: 'radio'
      }
    },
    useDefaultValues: {
      name: '[Story] use default values',
      type: 'boolean'
    },
    defaultValue: {
      if: {
        arg: 'useDefaultValues',
        eq: true
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152236&mode=design'
    }
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};export{r as chipChoiceRow,Ee as default};
