import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{c as m,a as u,b as f}from"./styles.module-CYSHUQV-.js";import{C as P}from"./ChipChoiceStoryWrap-DbuZO7cE.js";import{C as h,a as R}from"./constants-Ba39ydt1.js";import{g as _}from"./helpers-DSWmnuo9.js";import{C as s}from"./index-6lMmdvqp.js";import"./index-ChsGqxH_.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./constants-C4fmyMeh.js";import"./constants-1pfoPh60.js";import"./index-BzvC0tss.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-C-NxZ9RO.js";import"./index-Dz039XZe.js";import"./index-BY3DxMkE.js";import"./index-DtRrUciF.js";import"./index-Bx6tewuM.js";import"./index-BKaanG2n.js";import"./index-DLGJiw2b.js";import"./index-CX1lIXbQ.js";import"./index-BQAaeyfQ.js";import"./index-DLRniMSR.js";import"./index-BJ2Oj32Z.js";import"./index-0zxx_KqD.js";import"./index-NU8U5csw.js";import"./index-I1zimRE2.js";import"./index-BIeLB8C9.js";import"./index-BcKv4fI4.js";import"./index-CIcT2jya.js";import"./index-3XDw48l5.js";import"./index-6PN_JoHT.js";import"./index-C9_U387z.js";import"./index-CwHIobxP.js";import"./index-B9oUDl45.js";import"./index-Baw9oej9.js";import"./index-BJDjEDgt.js";import"./index-Drk0xmYR.js";import"./index-zbp_5bxn.js";import"./Tag-Dz2TU16S.js";import"./index-CXM-PPQz.js";import"./constants-BaREPXw5.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-B8F47jJX.js";import"./PopoverPrivate-BgnwkLUT.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-XVitSj_D.js";import"./ButtonFunction-BaVuFdGL.js";import"./utils-DbPKxLUs.js";import"./Counter-BqPtvVBi.js";import"./Sun-CsDryrZF.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-CvF7Lghx.js";import"./index-B7wZyJkK.js";import"./TruncateString-DQ5jkg_7.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-Dt8rND5W.js";import"./hooks-Dwll5lFo.js";import"./Checkbox-DlKPVsW5.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./Switch-uTDrejvW.js";import"./index-a2oxz70p.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-eRsF_bYq.js";import"./ButtonTonal-Dyey7_2r.js";import"./Divider-Damo9_Fl.js";import"./Scroll-BcVVNqQz.js";import"./Spinner-CmWv-wEi.js";import"./useButtonNavigation-DpQSor98.js";import"./useClearButton-C1LhFa7w.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DOWF5ETi.js";import"./DropList-CRPB7LpA.js";import"./Calendar-BuXoQqy9.js";import"./TimePickerBase-DMP3RzEJ.js";import"./List-Czbl3hsI.js";import"./TimePicker-BFeN2Ow9.js";const Zo={title:"Components/Chips/ChipChoice",component:s.DateRange},S=({useDefaultValue:l,showClickCounter:d,modeBuildCellProps:c,showClearButton:C,...e})=>{const g=e.customFormatter?o=>!o||!o.length?"all dates":o.map(r=>r.toUTCString()).join("//"):void 0;return i.jsx(P,{showClickCounter:d,showClearButton:C,defaultValue:l?[new Date("2022-10-15"),new Date("2023-10-15")]:void 0,chipControlled:({increaseCounter:o,...r})=>i.jsx(s.DateRange,{...e,...r,onClick:o,valueRender:g,buildCalendarCellProps:_(c)})})},t={render:S,args:{...R,useDefaultValue:!1,modeBuildCellProps:"none"},argTypes:{...h,modeBuildCellProps:{name:"[story] select buildCalendarCellProps operating mode",options:["disable-past","none"],control:{type:"radio"}}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,u,f]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A151169&mode=design"}}};var p,n,a;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
