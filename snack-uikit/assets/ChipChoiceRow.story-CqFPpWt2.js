import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{c as p,a as g,b as h,s as C}from"./styles.module-CDpJyzWZ.js";import{C as d,a as S}from"./ChipChoiceRow-BgjCh1cT.js";import{D as y,f as V,S as w}from"./helpers-DSWmnuo9.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DUmpqB7p.js";import"./index-JZGyZbA2.js";import"./constants-BIigMBdG.js";import"./index-CVsPxrX-.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-CyhbxqE1.js";import"./ButtonFunction-CBZoLIZd.js";import"./utils-Bz59hGap.js";import"./Counter-dO15w468.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Sun-Bft0ZijA.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-BS9AKezQ.js";import"./index-B7wZyJkK.js";import"./index-BQAaeyfQ.js";import"./TruncateString-P8oWpQXG.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-BF_Vu_8t.js";import"./PopoverPrivate-BRtB5jhm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./useValueControl-C51frgGe.js";import"./Dropdown-DnGqb98r.js";import"./hooks-68YSeHc4.js";import"./Checkbox-BUwce3wU.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-3XDw48l5.js";import"./index-DtRrUciF.js";import"./Switch-DSwFYifT.js";import"./index-C7IVzcIX.js";import"./index-BLj3vrxU.js";import"./index-DLGJiw2b.js";import"./index-Baw9oej9.js";import"./index-DTmowtnF.js";import"./IconPredefined-yX8Rdo-2.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-CuYKbiS_.js";import"./Divider-G_YGM_Hz.js";import"./Spinner-BoRMrYYR.js";import"./Scroll-DbfXyGNV.js";import"./useButtonNavigation-CnLiqaIQ.js";import"./useEventHandler-C8nLb_YB.js";import"./useClearButton-CfofiGle.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-C2dxrcl-.js";import"./DropList-B0JJwNMY.js";import"./Calendar-D66HV_6R.js";import"./TimePickerBase-DX_B8Hw1.js";import"./List-QNKIsHf_.js";import"./TimePicker-BpQV--hz.js";import"./index-CwHIobxP.js";const xe={title:"Components/Chips/ChipChoiceRow",component:d};function k({useDefaultValues:i,...a}){const t=o.useMemo(()=>i?a.defaultValue:{},[a.defaultValue,i]),[s,m]=o.useState(t),[f,n]=o.useState(Object.keys(s??{}));return o.useLayoutEffect(()=>{m(t),n(Object.keys(t??{}))},[t,i]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:C.chipChoiceRowWrapper,children:e.jsx(d,{...a,value:s,onChange:m,visibleFilters:f,onVisibleFiltersChange:n})}),e.jsx("span",{style:{opacity:0},"data-test-id":w.State,children:JSON.stringify(s)})]})}const r={render:k,args:{size:"s",filters:V,showClearButton:!0,showAddButton:!0,useDefaultValues:!0,defaultValue:y},argTypes:{size:{options:Object.values(S),control:{type:"radio"}},useDefaultValues:{name:"[Story] use default values",type:"boolean"},defaultValue:{if:{arg:"useDefaultValues",eq:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,g,h]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152236&mode=design"}}};var l,u,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};export{r as chipChoiceRow,xe as default};
