import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{c as p,a as g,b as h,s as C}from"./styles.module-CCKsOWVt.js";import{C as d,a as S}from"./ChipChoiceRow-BzolpTvn.js";import{D as y,f as V,S as w}from"./helpers-DSWmnuo9.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DUmpqB7p.js";import"./index-JZGyZbA2.js";import"./constants-BIigMBdG.js";import"./index-BInxR6AO.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-CyhbxqE1.js";import"./ButtonFunction-BJzRx2eA.js";import"./utils-D4P0b1iJ.js";import"./Counter-dO15w468.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-oARZJUp_.js";import"./index-B7wZyJkK.js";import"./index-DHAmGKAZ.js";import"./TruncateString-C-ApBzyA.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DMNQxdBh.js";import"./PopoverPrivate-TrV_4kB1.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./useValueControl-C51frgGe.js";import"./Dropdown-CY0dSXGI.js";import"./hooks-D_LY3Fgh.js";import"./Checkbox-qiHN918A.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./Switch-DZam4yEg.js";import"./index-CGBRtoFy.js";import"./index-DrT0s6v0.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./index-CNCE-zGd.js";import"./IconPredefined-yX8Rdo-2.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-C18l8S2H.js";import"./Divider-C1X9zrkx.js";import"./Spinner-PYn9r2mo.js";import"./Scroll-B3e6J9cA.js";import"./useButtonNavigation-CnLiqaIQ.js";import"./useEventHandler-C8nLb_YB.js";import"./useClearButton-DHSlnD4l.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-OFi6woZ6.js";import"./DropList-DYpJZktT.js";import"./Calendar-Cui9MdNe.js";import"./TimePickerBase-8HROe50n.js";import"./List-B8FkiRit.js";import"./TimePicker-lxWbVr_6.js";import"./index-CF_OgQNJ.js";const xe={title:"Components/Chips/ChipChoiceRow",component:d};function k({useDefaultValues:i,...a}){const t=o.useMemo(()=>i?a.defaultValue:{},[a.defaultValue,i]),[s,m]=o.useState(t),[f,n]=o.useState(Object.keys(s??{}));return o.useLayoutEffect(()=>{m(t),n(Object.keys(t??{}))},[t,i]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:C.chipChoiceRowWrapper,children:e.jsx(d,{...a,value:s,onChange:m,visibleFilters:f,onVisibleFiltersChange:n})}),e.jsx("span",{style:{opacity:0},"data-test-id":w.State,children:JSON.stringify(s)})]})}const r={render:k,args:{size:"s",filters:V,showClearButton:!0,showAddButton:!0,useDefaultValues:!0,defaultValue:y},argTypes:{size:{options:Object.values(S),control:{type:"radio"}},useDefaultValues:{name:"[Story] use default values",type:"boolean"},defaultValue:{if:{arg:"useDefaultValues",eq:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,g,h]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152236&mode=design"}}};var l,u,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
