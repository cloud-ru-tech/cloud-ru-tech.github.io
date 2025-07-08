import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{c as p,a as g,b as h,s as C}from"./styles.module-_jqlypvC.js";import{C as d,a as S}from"./ChipChoiceRow-DpUNBhra.js";import{D as y,f as V,S as w}from"./helpers-DSWmnuo9.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DUmpqB7p.js";import"./index-JZGyZbA2.js";import"./constants-BIigMBdG.js";import"./index-Cgb_yFpx.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-CyhbxqE1.js";import"./ButtonFunction-B8ZNpjRU.js";import"./utils-DNgbsm2n.js";import"./Counter-CRGhF3Kb.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-DlhLaOs6.js";import"./index-B7wZyJkK.js";import"./index-DHAmGKAZ.js";import"./TruncateString--U_6xn2L.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DGvBTeR0.js";import"./PopoverPrivate-GlQeSlaK.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./useValueControl-C51frgGe.js";import"./Dropdown-B_Ow7ozB.js";import"./hooks-Bhr_C-ho.js";import"./Checkbox-Dyib3wqa.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./Switch-BKTUyb2o.js";import"./index-CGBRtoFy.js";import"./index-DrT0s6v0.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./index-COrctIrk.js";import"./IconPredefined-FEPQkyLi.js";import"./Typography-CjikRPpk.js";import"./ButtonTonal-CJGj6dEM.js";import"./Divider-C1X9zrkx.js";import"./Spinner-DZPrD8kc.js";import"./Scroll-B3e6J9cA.js";import"./useButtonNavigation-DNIYWp-y.js";import"./useClearButton-DCno6QJq.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-B3qhzCsI.js";import"./DropList-3i4aXq2c.js";import"./Calendar-BaFVfoLf.js";import"./TimePickerBase-CEVfkYcP.js";import"./List-Bt0UDmL-.js";import"./TimePicker-BtkxBnz1.js";import"./index-CF_OgQNJ.js";const Oe={title:"Components/Chips/ChipChoiceRow",component:d};function k({useDefaultValues:i,...a}){const t=o.useMemo(()=>i?a.defaultValue:{},[a.defaultValue,i]),[s,n]=o.useState(t),[f,m]=o.useState(Object.keys(s??{}));return o.useLayoutEffect(()=>{n(t),m(Object.keys(t??{}))},[t,i]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:C.chipChoiceRowWrapper,children:e.jsx(d,{...a,value:s,onChange:n,visibleFilters:f,onVisibleFiltersChange:m})}),e.jsx("span",{style:{opacity:0},"data-test-id":w.State,children:JSON.stringify(s)})]})}const r={render:k,args:{size:"s",filters:V,showClearButton:!0,showAddButton:!0,useDefaultValues:!0,defaultValue:y},argTypes:{size:{options:Object.values(S),control:{type:"radio"}},useDefaultValues:{name:"[Story] use default values",type:"boolean"},defaultValue:{if:{arg:"useDefaultValues",eq:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,g,h]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152236&mode=design"}}};var l,u,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};export{r as chipChoiceRow,Oe as default};
