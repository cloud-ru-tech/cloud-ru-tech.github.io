import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{c as p,a as g,b as h,s as C}from"./styles.module-HCGkn9DH.js";import{C as d,a as S}from"./ChipChoiceRow-CcE-KqBs.js";import{D as y,f as V,S as w}from"./helpers-DSWmnuo9.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CXM-PPQz.js";import"./index-JZGyZbA2.js";import"./constants-BIigMBdG.js";import"./index-BiMXMqy2.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-XVitSj_D.js";import"./ButtonFunction-CtElqV7K.js";import"./utils-d0rn_W0T.js";import"./Counter-C_DywCEs.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-DZiul5Ky.js";import"./index-B7wZyJkK.js";import"./index-C3gycbXm.js";import"./TruncateString-DMHAWZlY.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DaeWZEms.js";import"./PopoverPrivate-BQgi56s-.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-CJIpH82E.js";import"./hooks-Cb7q2uDh.js";import"./Checkbox-BrjwspCG.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./index-CP5aoo4S.js";import"./index-Df-dmYFR.js";import"./Switch-CnO5GMY9.js";import"./index-Cxdp8tlc.js";import"./index-00FjgX9j.js";import"./index-CsyvGLEa.js";import"./index-DCrMFnLF.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-B_4XbOMz.js";import"./ButtonTonal-CmQYw77c.js";import"./Divider-CUoM6iCM.js";import"./Scroll-p7EvfiBx.js";import"./Spinner-BJeEd4V6.js";import"./useButtonNavigation-EjhHKyx9.js";import"./useClearButton-C6OboUMx.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-uCEkO2Kz.js";import"./DropList-DEhmQza7.js";import"./Calendar-D0YVXJqx.js";import"./TimePickerBase-4GF_QIc_.js";import"./List-SKxEdaQm.js";import"./TimePicker-C_3Glmvs.js";import"./index-BURG081a.js";const Ee={title:"Components/Chips/ChipChoiceRow",component:d};function k({useDefaultValues:i,...a}){const t=o.useMemo(()=>i?a.defaultValue:{},[a.defaultValue,i]),[s,n]=o.useState(t),[f,m]=o.useState(Object.keys(s??{}));return o.useLayoutEffect(()=>{n(t),m(Object.keys(t??{}))},[t,i]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:C.chipChoiceRowWrapper,children:e.jsx(d,{...a,value:s,onChange:n,visibleFilters:f,onVisibleFiltersChange:m})}),e.jsx("span",{style:{opacity:0},"data-test-id":w.State,children:JSON.stringify(s)})]})}const r={render:k,args:{size:"s",filters:V,showClearButton:!0,showAddButton:!0,useDefaultValues:!0,defaultValue:y},argTypes:{size:{options:Object.values(S),control:{type:"radio"}},useDefaultValues:{name:"[Story] use default values",type:"boolean"},defaultValue:{if:{arg:"useDefaultValues",eq:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,g,h]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152236&mode=design"}}};var l,u,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
