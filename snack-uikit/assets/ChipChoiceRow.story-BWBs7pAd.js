import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{c as p,a as g,b as h,s as C}from"./styles.module-CuFVgV9e.js";import{C as d,a as S}from"./ChipChoiceRow-C36C4rbC.js";import{D as y,f as V,S as w}from"./helpers-DSWmnuo9.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CXM-PPQz.js";import"./index-JZGyZbA2.js";import"./constants-BIigMBdG.js";import"./index-CA0s204M.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-7fZm_0X9.js";import"./lodash-DyrGR4_s.js";import"./ButtonFunction-BIStbrPv.js";import"./utils-D92wmnuO.js";import"./Counter-BqPtvVBi.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-I1cxQU3-.js";import"./index-B7wZyJkK.js";import"./index-CAYnss5D.js";import"./TruncateString-C5pgoQdJ.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DpTcvKfh.js";import"./PopoverPrivate-CEMvfDsk.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-Pk1GPJid.js";import"./hooks-Bj8S_8l_.js";import"./Checkbox-Cm81XGOK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./index-C0OXG0Ut.js";import"./index-CF-13Pl-.js";import"./Switch-DC6SnJsB.js";import"./index-DHfXeKe7.js";import"./index-CQc5r4_Q.js";import"./index-CV7xtGUY.js";import"./index-CAPw9s2k.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-5rnd8anx.js";import"./ButtonTonal-mnoF1Om6.js";import"./Divider-BbKtI3tl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-BJeEd4V6.js";import"./useButtonNavigation-DNBDAoGl.js";import"./useClearButton-DkMzh70e.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DOkVmsgi.js";import"./DropList-Dp4Bw3RR.js";import"./Calendar-BGAxf_93.js";import"./TimePickerBase-CLmBdLlJ.js";import"./List-CpdP8j27.js";import"./TimePicker-B8Mgf7mr.js";import"./index-Cz4dqGWG.js";const Oe={title:"Components/Chips/ChipChoiceRow",component:d};function k({useDefaultValues:i,...a}){const t=o.useMemo(()=>i?a.defaultValue:{},[a.defaultValue,i]),[s,n]=o.useState(t),[f,m]=o.useState(Object.keys(s??{}));return o.useLayoutEffect(()=>{n(t),m(Object.keys(t??{}))},[t,i]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:C.chipChoiceRowWrapper,children:e.jsx(d,{...a,value:s,onChange:n,visibleFilters:f,onVisibleFiltersChange:m})}),e.jsx("span",{style:{opacity:0},"data-test-id":w.State,children:JSON.stringify(s)})]})}const r={render:k,args:{size:"s",filters:V,showClearButton:!0,showAddButton:!0,useDefaultValues:!0,defaultValue:y},argTypes:{size:{options:Object.values(S),control:{type:"radio"}},useDefaultValues:{name:"[Story] use default values",type:"boolean"},defaultValue:{if:{arg:"useDefaultValues",eq:!0}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,g,h]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152236&mode=design"}}};var l,u,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
