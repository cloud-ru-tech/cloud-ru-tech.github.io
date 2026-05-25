import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{c as m,a as u,b as f}from"./styles.module-HCGkn9DH.js";import{C as P}from"./ChipChoiceStoryWrap-CXTZJ-Pb.js";import{C as h,a as R}from"./constants-B_vvutYm.js";import{g as _}from"./helpers-DSWmnuo9.js";import{C as s}from"./index-BiMXMqy2.js";import"./index-ChsGqxH_.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./constants-BIigMBdG.js";import"./constants-DT5HMMPL.js";import"./index-C8tV8B5x.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-S9IyB2Vz.js";import"./index-osW-_rgC.js";import"./index-x7ArlFfL.js";import"./index-Df-dmYFR.js";import"./index-Cxdp8tlc.js";import"./index-CSMTAo6Q.js";import"./index-00FjgX9j.js";import"./index-BTBTknnI.js";import"./index-C3gycbXm.js";import"./index-CNC7znSK.js";import"./index-9-iRZIMV.js";import"./index-DRtCvpDZ.js";import"./index-C11pXQBT.js";import"./index-BkuB1v93.js";import"./index-CoXSb06U.js";import"./index-s39huXS1.js";import"./index-B6hh_CYl.js";import"./index-CP5aoo4S.js";import"./index-BPI37A09.js";import"./index-DW7JD-Lj.js";import"./index-BURG081a.js";import"./index-BnZREprt.js";import"./index-CsyvGLEa.js";import"./index-Bd4f5iIr.js";import"./index-OG_QCddz.js";import"./index-BDKfaAX1.js";import"./Tag-CA014ENK.js";import"./index-CXM-PPQz.js";import"./constants-BaREPXw5.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-DaeWZEms.js";import"./PopoverPrivate-BQgi56s-.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-XVitSj_D.js";import"./ButtonFunction-CtElqV7K.js";import"./utils-d0rn_W0T.js";import"./Counter-C_DywCEs.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-DZiul5Ky.js";import"./index-B7wZyJkK.js";import"./TruncateString-DMHAWZlY.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-CJIpH82E.js";import"./hooks-Cb7q2uDh.js";import"./Checkbox-BrjwspCG.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./Switch-CnO5GMY9.js";import"./index-DCrMFnLF.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-B_4XbOMz.js";import"./ButtonTonal-CmQYw77c.js";import"./Divider-CUoM6iCM.js";import"./Scroll-p7EvfiBx.js";import"./Spinner-BJeEd4V6.js";import"./useButtonNavigation-EjhHKyx9.js";import"./useClearButton-C6OboUMx.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-uCEkO2Kz.js";import"./DropList-DEhmQza7.js";import"./Calendar-D0YVXJqx.js";import"./TimePickerBase-4GF_QIc_.js";import"./List-SKxEdaQm.js";import"./TimePicker-C_3Glmvs.js";const Zo={title:"Components/Chips/ChipChoice",component:s.DateRange},S=({useDefaultValue:l,showClickCounter:d,modeBuildCellProps:c,showClearButton:C,...e})=>{const g=e.customFormatter?o=>!o||!o.length?"all dates":o.map(r=>r.toUTCString()).join("//"):void 0;return i.jsx(P,{showClickCounter:d,showClearButton:C,defaultValue:l?[new Date("2022-10-15"),new Date("2023-10-15")]:void 0,chipControlled:({increaseCounter:o,...r})=>i.jsx(s.DateRange,{...e,...r,onClick:o,valueRender:g,buildCalendarCellProps:_(c)})})},t={render:S,args:{...R,useDefaultValue:!1,modeBuildCellProps:"none"},argTypes:{...h,modeBuildCellProps:{name:"[story] select buildCalendarCellProps operating mode",options:["disable-past","none"],control:{type:"radio"}}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,u,f]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A151169&mode=design"}}};var p,n,a;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
