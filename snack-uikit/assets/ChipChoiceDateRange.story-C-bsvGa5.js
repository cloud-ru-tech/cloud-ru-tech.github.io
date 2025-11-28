import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{c as m,a as u,b as f}from"./styles.module-CDIlkGH0.js";import{C as P}from"./ChipChoiceStoryWrap-DRSxl5sr.js";import{C as h,a as R}from"./constants-BFzxjNTT.js";import{g as _}from"./helpers-DSWmnuo9.js";import{C as s}from"./index-DAelypWN.js";import"./index-ChsGqxH_.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./constants-C4fmyMeh.js";import"./constants-1pfoPh60.js";import"./index-BzvC0tss.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-C-NxZ9RO.js";import"./index-Dz039XZe.js";import"./index-BY3DxMkE.js";import"./index-DtRrUciF.js";import"./index-Bx6tewuM.js";import"./index-BKaanG2n.js";import"./index-DLGJiw2b.js";import"./index-CX1lIXbQ.js";import"./index-BQAaeyfQ.js";import"./index-DLRniMSR.js";import"./index-BJ2Oj32Z.js";import"./index-0zxx_KqD.js";import"./index-NU8U5csw.js";import"./index-I1zimRE2.js";import"./index-BIeLB8C9.js";import"./index-BcKv4fI4.js";import"./index-CIcT2jya.js";import"./index-3XDw48l5.js";import"./index-6PN_JoHT.js";import"./index-C9_U387z.js";import"./index-CwHIobxP.js";import"./index-B9oUDl45.js";import"./index-Baw9oej9.js";import"./index-BJDjEDgt.js";import"./index-Drk0xmYR.js";import"./index-zbp_5bxn.js";import"./Tag-yVyxCmhe.js";import"./index-DUmpqB7p.js";import"./constants-BaREPXw5.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-DhC1J63f.js";import"./ButtonFunction-DSnX_1GK.js";import"./utils-aN0rWi37.js";import"./Counter-DXWSEFY6.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-KejLTq03.js";import"./index-B7wZyJkK.js";import"./TruncateString-D54BiV_x.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-4YXb2YvP.js";import"./hooks-CxkAc8-o.js";import"./Checkbox-CSVLuhwq.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./Switch-CzUd_nHK.js";import"./index-BiYhNR6p.js";import"./IconPredefined-DVxQYij_.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-CR_iyRI3.js";import"./Divider-C1X9zrkx.js";import"./Scroll-CyeY1SIb.js";import"./Spinner-PYn9r2mo.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-CBEN1tav.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DKsi1bc7.js";import"./DropList-BrTeWqYz.js";import"./Calendar-BoC08yZT.js";import"./TimePickerBase-CksAROX4.js";import"./List-TkdEteQd.js";import"./TimePicker-B_b4Ap4d.js";const Zo={title:"Components/Chips/ChipChoice",component:s.DateRange},S=({useDefaultValue:l,showClickCounter:d,modeBuildCellProps:c,showClearButton:C,...e})=>{const g=e.customFormatter?o=>!o||!o.length?"all dates":o.map(r=>r.toUTCString()).join("//"):void 0;return i.jsx(P,{showClickCounter:d,showClearButton:C,defaultValue:l?[new Date("2022-10-15"),new Date("2023-10-15")]:void 0,chipControlled:({increaseCounter:o,...r})=>i.jsx(s.DateRange,{...e,...r,onClick:o,valueRender:g,buildCalendarCellProps:_(c)})})},t={render:S,args:{...R,useDefaultValue:!1,modeBuildCellProps:"none"},argTypes:{...h,modeBuildCellProps:{name:"[story] select buildCalendarCellProps operating mode",options:["disable-past","none"],control:{type:"radio"}}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,u,f]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A151169&mode=design"}}};var p,n,a;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
