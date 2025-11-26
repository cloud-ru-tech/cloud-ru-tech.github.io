import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{c as p,a as g,b as h,s as C}from"./styles.module-CDIlkGH0.js";import{C as d,a as S}from"./ChipChoiceRow-a1Gt3fhE.js";import{D as y,f as V,S as w}from"./helpers-DSWmnuo9.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DUmpqB7p.js";import"./index-JZGyZbA2.js";import"./constants-C4fmyMeh.js";import"./index-8heUHtZ3.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-DhC1J63f.js";import"./ButtonFunction-Do8lbjt3.js";import"./utils-BDyxFeZ4.js";import"./Counter-DXWSEFY6.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Sun-WJ2YftH0.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-C2Ub7RAq.js";import"./index-B7wZyJkK.js";import"./index-BQAaeyfQ.js";import"./TruncateString-D54BiV_x.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-4YXb2YvP.js";import"./hooks-CDs98Apw.js";import"./Checkbox-BVtBbLUC.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-3XDw48l5.js";import"./index-DtRrUciF.js";import"./Switch-D4-td0zO.js";import"./index-Bx6tewuM.js";import"./index-DLGJiw2b.js";import"./index-Baw9oej9.js";import"./index-BiWfS1ve.js";import"./IconPredefined-DVxQYij_.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-B5aAih2S.js";import"./Divider-C1X9zrkx.js";import"./Scroll-CyeY1SIb.js";import"./Spinner-DA8AR1nX.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-CBEN1tav.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-BTBmsZ23.js";import"./DropList-DSmTSZNa.js";import"./Calendar-a3WXaLAR.js";import"./TimePickerBase-DBT7c9wv.js";import"./List-DV7gpO4u.js";import"./TimePicker-CP9iyczW.js";import"./index-CwHIobxP.js";const Ee={title:"Components/Chips/ChipChoiceRow",component:d};function k({useDefaultValues:i,...a}){const t=o.useMemo(()=>i?a.defaultValue:{},[a.defaultValue,i]),[s,n]=o.useState(t),[f,m]=o.useState(Object.keys(s??{}));return o.useLayoutEffect(()=>{n(t),m(Object.keys(t??{}))},[t,i]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:C.chipChoiceRowWrapper,children:e.jsx(d,{...a,value:s,onChange:n,visibleFilters:f,onVisibleFiltersChange:m})}),e.jsx("span",{style:{opacity:0},"data-test-id":w.State,children:JSON.stringify(s)})]})}const r={render:k,args:{size:"s",filters:V,showClearButton:!0,showAddButton:!0,useDefaultValues:!0,defaultValue:y},argTypes:{size:{options:Object.values(S),control:{type:"radio"}},useDefaultValues:{name:"[Story] use default values",type:"boolean"},defaultValue:{if:{arg:"useDefaultValues",eq:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,g,h]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152236&mode=design"}}};var l,u,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
