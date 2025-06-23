import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{c as m,a as u,b as f}from"./styles.module-CetNDkS6.js";import{C as P}from"./ChipChoiceStoryWrap-BMkNdMxz.js";import{C as h,a as R}from"./constants-ZS5I_uK6.js";import{g as _}from"./helpers-DSWmnuo9.js";import{C as s}from"./index-Ca9Dbq84.js";import"./index-ChsGqxH_.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./constants-BIigMBdG.js";import"./constants-Cv1D_suA.js";import"./index-Bca5GS4C.js";import"./Sprite-BKF2l_N7.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-CAfvFIBF.js";import"./index-BAKcRSlX.js";import"./index-DNCO-vcx.js";import"./index-Y3TRpJ-L.js";import"./index-DrT0s6v0.js";import"./index-Ca89sW9R.js";import"./index-C3mvkShn.js";import"./index-CGBRtoFy.js";import"./index-BGTKE3tV.js";import"./index-DHAmGKAZ.js";import"./index-h0kOFyIh.js";import"./index-BfUMklLA.js";import"./index-B0xwoRpp.js";import"./index-B2h5DBoi.js";import"./index-5mF7KA5g.js";import"./index-WpT-B0mJ.js";import"./index-B_69vUNX.js";import"./index-B80hK4m0.js";import"./index-w0WAZL2A.js";import"./index-Dn6vuaYJ.js";import"./index-CTTgWa-s.js";import"./index-CF_OgQNJ.js";import"./index-DBTBMFOQ.js";import"./index-CXJdfWGn.js";import"./index-x12pshUM.js";import"./index-CGSydWJd.js";import"./index-DbF-M2Rm.js";import"./Tag-Bwg0_szR.js";import"./index-DUmpqB7p.js";import"./constants-BaREPXw5.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-Bksrf_Jf.js";import"./PopoverPrivate-TrV_4kB1.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-CyhbxqE1.js";import"./ButtonFunction-B5WdP6Kq.js";import"./utils-CGJfc-s_.js";import"./Counter-dO15w468.js";import"./Sun-BLz2v2u6.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-COcxs5aQ.js";import"./index-B7wZyJkK.js";import"./TruncateString-BGqQdUJ0.js";import"./useValueControl-C51frgGe.js";import"./Dropdown-CY0dSXGI.js";import"./hooks-HO6xOd7t.js";import"./Checkbox-BKTymapY.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./Switch-B-j2zwCe.js";import"./index-Cu-xdcuS.js";import"./IconPredefined-yX8Rdo-2.js";import"./Typography-A1PLmpei.js";import"./ButtonTonal-TaOzEvvQ.js";import"./Divider-C1X9zrkx.js";import"./Spinner-DwtrFO2L.js";import"./Scroll-B3e6J9cA.js";import"./useButtonNavigation-CnLiqaIQ.js";import"./useEventHandler-C8nLb_YB.js";import"./useClearButton-DHSlnD4l.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-BlQp1WQJ.js";import"./DropList-DD2ZpyV3.js";import"./Calendar-C2e-tPIG.js";import"./TimePickerBase-COUwoIYi.js";import"./List-37HSTz4k.js";import"./TimePicker-C1B6Qvsd.js";const tt={title:"Components/Chips/ChipChoice",component:s.DateRange},S=({useDefaultValue:l,showClickCounter:d,modeBuildCellProps:c,showClearButton:C,...e})=>{const g=e.customFormatter?o=>!o||!o.length?"all dates":o.map(r=>r.toUTCString()).join("//"):void 0;return i.jsx(P,{showClickCounter:d,showClearButton:C,defaultValue:l?[new Date("2022-10-15"),new Date("2023-10-15")]:void 0,chipControlled:({increaseCounter:o,...r})=>i.jsx(s.DateRange,{...e,...r,onClick:o,valueRender:g,buildCalendarCellProps:_(c)})})},t={render:S,args:{...R,useDefaultValue:!1,modeBuildCellProps:"none"},argTypes:{...h,modeBuildCellProps:{name:"[story] select buildCalendarCellProps operating mode",options:["disable-past","none"],control:{type:"radio"}}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,u,f]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A151169&mode=design"}}};var p,n,a;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...CHIP_CHOICE_STORY_ARGS,
    useDefaultValue: false,
    modeBuildCellProps: 'none'
  },
  argTypes: {
    ...CHIP_CHOICE_ARG_TYPES,
    modeBuildCellProps: {
      name: '[story] select buildCalendarCellProps operating mode',
      options: ['disable-past', 'none'],
      control: {
        type: 'radio'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A151169&mode=design'
    }
  }
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};export{t as chipChoiceDateRange,tt as default};
