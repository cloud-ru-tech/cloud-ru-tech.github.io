import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{c as p,a as g,b as h,s as C}from"./styles.module-HCGkn9DH.js";import{C as d,a as S}from"./ChipChoiceRow-gvTr13zT.js";import{D as y,f as V,S as w}from"./helpers-DSWmnuo9.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CXM-PPQz.js";import"./index-JZGyZbA2.js";import"./constants-BIigMBdG.js";import"./index-D3b0e-pP.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-XVitSj_D.js";import"./ButtonFunction-BOVA1bGm.js";import"./utils-KvC8ycbW.js";import"./Counter-CVeRO6SA.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Sun-BMXO82GS.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-CCUZpSxK.js";import"./index-B7wZyJkK.js";import"./index-DHAmGKAZ.js";import"./TruncateString-C1JUVyIC.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-CwDzTnvM.js";import"./PopoverPrivate-B3hkMTjr.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-CrFyUOPH.js";import"./hooks-BTdWF9kj.js";import"./Checkbox-mNHIKJjB.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./Switch-DiLbC3Ao.js";import"./index-DreyRvUE.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./index-Cv2PZHa-.js";import"./IconPredefined-BRbxZfzQ.js";import"./Typography-bjTR1oYg.js";import"./ButtonTonal-yrs4ZTk6.js";import"./Divider-Damo9_Fl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-kGs9Wy83.js";import"./useButtonNavigation-CrOhbyYc.js";import"./useClearButton-CDU-zCvr.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-59pCfraS.js";import"./DropList-DGI1ct7S.js";import"./Calendar-Qxa9Dlw2.js";import"./TimePickerBase-CCStJrYw.js";import"./List-B-ZY93l1.js";import"./TimePicker-DI_p9RM0.js";import"./index-CF_OgQNJ.js";const Ee={title:"Components/Chips/ChipChoiceRow",component:d};function k({useDefaultValues:i,...a}){const t=o.useMemo(()=>i?a.defaultValue:{},[a.defaultValue,i]),[s,n]=o.useState(t),[f,m]=o.useState(Object.keys(s??{}));return o.useLayoutEffect(()=>{n(t),m(Object.keys(t??{}))},[t,i]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:C.chipChoiceRowWrapper,children:e.jsx(d,{...a,value:s,onChange:n,visibleFilters:f,onVisibleFiltersChange:m})}),e.jsx("span",{style:{opacity:0},"data-test-id":w.State,children:JSON.stringify(s)})]})}const r={render:k,args:{size:"s",filters:V,showClearButton:!0,showAddButton:!0,useDefaultValues:!0,defaultValue:y},argTypes:{size:{options:Object.values(S),control:{type:"radio"}},useDefaultValues:{name:"[Story] use default values",type:"boolean"},defaultValue:{if:{arg:"useDefaultValues",eq:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,g,h]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152236&mode=design"}}};var l,u,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
