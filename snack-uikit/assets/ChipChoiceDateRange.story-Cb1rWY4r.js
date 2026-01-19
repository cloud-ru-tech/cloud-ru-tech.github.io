import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{c as m,a as u,b as f}from"./styles.module-C_zQe-Sm.js";import{C as P}from"./ChipChoiceStoryWrap-9Dg8_cPo.js";import{C as h,a as R}from"./constants-BdEKvyyk.js";import{g as _}from"./helpers-DSWmnuo9.js";import{C as s}from"./index-Bj7CjTHg.js";import"./index-ChsGqxH_.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./constants-C4fmyMeh.js";import"./constants-DqXwTtak.js";import"./index-JswG3_7a.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-CAfvFIBF.js";import"./index-BAKcRSlX.js";import"./index-CKE7Rdrn.js";import"./index-Y3TRpJ-L.js";import"./index-DreyRvUE.js";import"./index-Ca89sW9R.js";import"./index-C3mvkShn.js";import"./index-BGTKE3tV.js";import"./index-DHAmGKAZ.js";import"./index-h0kOFyIh.js";import"./index-BfUMklLA.js";import"./index-B0xwoRpp.js";import"./index-B2h5DBoi.js";import"./index-5mF7KA5g.js";import"./index-WpT-B0mJ.js";import"./index-B_69vUNX.js";import"./index-B80hK4m0.js";import"./index-w0WAZL2A.js";import"./index-Dn6vuaYJ.js";import"./index-CTTgWa-s.js";import"./index-CF_OgQNJ.js";import"./index-DBTBMFOQ.js";import"./index-CXJdfWGn.js";import"./index-x12pshUM.js";import"./index-CGSydWJd.js";import"./index-DbF-M2Rm.js";import"./Tag-BEBGOq3Q.js";import"./index-DUmpqB7p.js";import"./constants-BaREPXw5.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-DhC1J63f.js";import"./ButtonFunction-DbnPA0ic.js";import"./utils-BPr_B-ku.js";import"./Counter-DXWSEFY6.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-DYDW7LMF.js";import"./index-B7wZyJkK.js";import"./TruncateString-D54BiV_x.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-4YXb2YvP.js";import"./hooks-CMQd3Kaj.js";import"./Checkbox-Qhd3ysTP.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./Switch-LqiDMEXN.js";import"./index-CoeZrg_Q.js";import"./IconPredefined-DVxQYij_.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-Cm84dajm.js";import"./Divider-C1X9zrkx.js";import"./Scroll-CyeY1SIb.js";import"./Spinner-DZPrD8kc.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-31EHK2UD.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-B9JOWh00.js";import"./DropList-DDy7VNoz.js";import"./Calendar-X6ky_rnB.js";import"./TimePickerBase-DPFghJPH.js";import"./List-WwZPoJ-I.js";import"./TimePicker-jFijVUMy.js";const Zo={title:"Components/Chips/ChipChoice",component:s.DateRange},S=({useDefaultValue:l,showClickCounter:d,modeBuildCellProps:c,showClearButton:C,...e})=>{const g=e.customFormatter?o=>!o||!o.length?"all dates":o.map(r=>r.toUTCString()).join("//"):void 0;return i.jsx(P,{showClickCounter:d,showClearButton:C,defaultValue:l?[new Date("2022-10-15"),new Date("2023-10-15")]:void 0,chipControlled:({increaseCounter:o,...r})=>i.jsx(s.DateRange,{...e,...r,onClick:o,valueRender:g,buildCalendarCellProps:_(c)})})},t={render:S,args:{...R,useDefaultValue:!1,modeBuildCellProps:"none"},argTypes:{...h,modeBuildCellProps:{name:"[story] select buildCalendarCellProps operating mode",options:["disable-past","none"],control:{type:"radio"}}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,u,f]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A151169&mode=design"}}};var p,n,a;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
