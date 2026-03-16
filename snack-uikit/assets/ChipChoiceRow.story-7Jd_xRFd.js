import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{c as p,a as g,b as h,s as C}from"./styles.module-DBXdg7tP.js";import{C as d,a as S}from"./ChipChoiceRow-DNvBwNgQ.js";import{D as y,f as V,S as w}from"./helpers-DSWmnuo9.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CXM-PPQz.js";import"./index-JZGyZbA2.js";import"./constants-C4fmyMeh.js";import"./index-C34tPM73.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-XVitSj_D.js";import"./ButtonFunction-DgLqV0Jc.js";import"./utils-S-VjwOOO.js";import"./Counter-B1ZrBHB5.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-CLj3NA8V.js";import"./index-B7wZyJkK.js";import"./index-CAYnss5D.js";import"./TruncateString-B3y8D6Q3.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-C-dEnYGL.js";import"./PopoverPrivate-Wl_jan0t.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-DrBZ86iX.js";import"./hooks-C0qo-F_P.js";import"./Checkbox-D_3QCiXO.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./index-C0OXG0Ut.js";import"./index-CF-13Pl-.js";import"./Switch-Bnym4xX7.js";import"./index-DHfXeKe7.js";import"./index-CQc5r4_Q.js";import"./index-CV7xtGUY.js";import"./index-H8i4ekSY.js";import"./IconPredefined-BFl5DzK0.js";import"./Typography-D9QXbsmR.js";import"./ButtonTonal-ByuWQQKE.js";import"./Divider-Damo9_Fl.js";import"./Scroll-B_O1f2D1.js";import"./Spinner-BJeEd4V6.js";import"./useButtonNavigation-DOa0a3CW.js";import"./useClearButton-I35ZnCag.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-D5F7bPEO.js";import"./DropList-9lUb7fUx.js";import"./Calendar-B5odqiIu.js";import"./TimePickerBase-CM03yoh1.js";import"./List-CmWEmYgF.js";import"./TimePicker-C3mPbY6z.js";import"./index-Cz4dqGWG.js";const Ee={title:"Components/Chips/ChipChoiceRow",component:d};function k({useDefaultValues:i,...a}){const t=o.useMemo(()=>i?a.defaultValue:{},[a.defaultValue,i]),[s,n]=o.useState(t),[f,m]=o.useState(Object.keys(s??{}));return o.useLayoutEffect(()=>{n(t),m(Object.keys(t??{}))},[t,i]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:C.chipChoiceRowWrapper,children:e.jsx(d,{...a,value:s,onChange:n,visibleFilters:f,onVisibleFiltersChange:m})}),e.jsx("span",{style:{opacity:0},"data-test-id":w.State,children:JSON.stringify(s)})]})}const r={render:k,args:{size:"s",filters:V,showClearButton:!0,showAddButton:!0,useDefaultValues:!0,defaultValue:y},argTypes:{size:{options:Object.values(S),control:{type:"radio"}},useDefaultValues:{name:"[Story] use default values",type:"boolean"},defaultValue:{if:{arg:"useDefaultValues",eq:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,g,h]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152236&mode=design"}}};var l,u,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
