import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{c as p,a as g,b as h,s as C}from"./styles.module-6FRVBOFn.js";import{C as d,a as S}from"./ChipChoiceRow-CXxPtk13.js";import{D as y,f as V,S as w}from"./helpers-DSWmnuo9.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CXM-PPQz.js";import"./index-JZGyZbA2.js";import"./constants-BIigMBdG.js";import"./index-BiC0FWHv.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-DoPVyUfh.js";import"./ButtonFunction-CrAudjJo.js";import"./utils-CEmLtxaX.js";import"./Counter-BqPtvVBi.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Sun-CsDryrZF.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-DpA50kbO.js";import"./index-B7wZyJkK.js";import"./index-BQAaeyfQ.js";import"./TruncateString-C1JUVyIC.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-CwDzTnvM.js";import"./PopoverPrivate-B3hkMTjr.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-DZvsbeCi.js";import"./hooks-CTT3Fee9.js";import"./Checkbox-C8hWvBTW.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./index-3XDw48l5.js";import"./index-DtRrUciF.js";import"./Switch-DdJxJGcM.js";import"./index-Bx6tewuM.js";import"./index-DLGJiw2b.js";import"./index-Baw9oej9.js";import"./index-TRLbj1lV.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-eRsF_bYq.js";import"./ButtonTonal-CU1IvKUW.js";import"./Divider-Damo9_Fl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-CmWv-wEi.js";import"./useButtonNavigation-CrOhbyYc.js";import"./useClearButton-CgaX9EaT.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-C-prQGYJ.js";import"./DropList-CwDKnace.js";import"./Calendar-DZFNNDKl.js";import"./TimePickerBase-B7aBI8vJ.js";import"./List-D-lzzff6.js";import"./TimePicker-xZUi_yFO.js";import"./index-CwHIobxP.js";const Ee={title:"Components/Chips/ChipChoiceRow",component:d};function k({useDefaultValues:i,...a}){const t=o.useMemo(()=>i?a.defaultValue:{},[a.defaultValue,i]),[s,n]=o.useState(t),[f,m]=o.useState(Object.keys(s??{}));return o.useLayoutEffect(()=>{n(t),m(Object.keys(t??{}))},[t,i]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:C.chipChoiceRowWrapper,children:e.jsx(d,{...a,value:s,onChange:n,visibleFilters:f,onVisibleFiltersChange:m})}),e.jsx("span",{style:{opacity:0},"data-test-id":w.State,children:JSON.stringify(s)})]})}const r={render:k,args:{size:"s",filters:V,showClearButton:!0,showAddButton:!0,useDefaultValues:!0,defaultValue:y},argTypes:{size:{options:Object.values(S),control:{type:"radio"}},useDefaultValues:{name:"[Story] use default values",type:"boolean"},defaultValue:{if:{arg:"useDefaultValues",eq:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,g,h]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152236&mode=design"}}};var l,u,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
