import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{c as m,a as u,b as f}from"./styles.module-C7Y-ugAA.js";import{C as P}from"./ChipChoiceStoryWrap-ClQ2GYTj.js";import{C as h,a as R}from"./constants-CcETK3Dc.js";import{g as _}from"./helpers-DSWmnuo9.js";import{C as s}from"./index-CPibLo2w.js";import"./index-ChsGqxH_.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./constants-BIigMBdG.js";import"./constants-BlBAE_JS.js";import"./index-BNm8R02-.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-DbqLuSZO.js";import"./index-CysqOHM3.js";import"./index-B9R5O8r3.js";import"./index-DJKNHUMM.js";import"./index-BRR1gMd_.js";import"./index-Dz7uS-ju.js";import"./index-Clv-rw5D.js";import"./index-CzP9MZIz.js";import"./index-BEuzvn4S.js";import"./index-BBF-mQaP.js";import"./index-BjphwxxP.js";import"./index-CDbNS7dV.js";import"./index-BVwVdvrd.js";import"./index-CR9MRPhY.js";import"./index-BcIDvl5_.js";import"./index-DzgJkNAR.js";import"./index-Dz9fnX15.js";import"./index-DO2qqcLs.js";import"./index-DAce5EUV.js";import"./index-C1BBUjNh.js";import"./index-DadV-Vij.js";import"./index-CgyQooMQ.js";import"./index-CWV_8VIe.js";import"./index-BbJ9A0eL.js";import"./index-BSWI5MkI.js";import"./index-CbwBVTm2.js";import"./Tag-B37ZQLfx.js";import"./index-DUmpqB7p.js";import"./constants-BaREPXw5.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-B4VrUkyw.js";import"./ButtonFunction-CHerW9fL.js";import"./utils-CFMmSnRl.js";import"./Counter-DXWSEFY6.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-_iBMQjFy.js";import"./index-B7wZyJkK.js";import"./TruncateString-d_nSHKm-.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-Dd0OUUBI.js";import"./hooks-C-QfHKcH.js";import"./Checkbox-B_KgwA95.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./Switch-Sklt2bcB.js";import"./index-D5mgDZkw.js";import"./IconPredefined-DVxQYij_.js";import"./Typography-ChgE300v.js";import"./ButtonTonal-iCs5y4Ch.js";import"./Divider-C1X9zrkx.js";import"./Scroll-CyeY1SIb.js";import"./Spinner-PYn9r2mo.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-ChndVmuz.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-2jDCmCn-.js";import"./DropList-RDTv5EBf.js";import"./Calendar-C2zG60Fj.js";import"./TimePickerBase-3LO0zow0.js";import"./List-C0Lj8xs6.js";import"./TimePicker-BtzFuppk.js";const Zo={title:"Components/Chips/ChipChoice",component:s.DateRange},S=({useDefaultValue:l,showClickCounter:d,modeBuildCellProps:c,showClearButton:C,...e})=>{const g=e.customFormatter?o=>!o||!o.length?"all dates":o.map(r=>r.toUTCString()).join("//"):void 0;return i.jsx(P,{showClickCounter:d,showClearButton:C,defaultValue:l?[new Date("2022-10-15"),new Date("2023-10-15")]:void 0,chipControlled:({increaseCounter:o,...r})=>i.jsx(s.DateRange,{...e,...r,onClick:o,valueRender:g,buildCalendarCellProps:_(c)})})},t={render:S,args:{...R,useDefaultValue:!1,modeBuildCellProps:"none"},argTypes:{...h,modeBuildCellProps:{name:"[story] select buildCalendarCellProps operating mode",options:["disable-past","none"],control:{type:"radio"}}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,u,f]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A151169&mode=design"}}};var p,n,a;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};export{t as chipChoiceDateRange,Zo as default};
