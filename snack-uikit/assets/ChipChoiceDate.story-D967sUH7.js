import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{c as i,a as u,b as f}from"./styles.module-_jqlypvC.js";import{C as P}from"./ChipChoiceStoryWrap-zE6frrYC.js";import{C as h,a as S}from"./constants-DqezBYAT.js";import{g as _}from"./helpers-DSWmnuo9.js";import{C as a}from"./index-Cgb_yFpx.js";import"./index-ChsGqxH_.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./constants-BIigMBdG.js";import"./constants-Dm0wuqMb.js";import"./index-DgzWz_a-.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-CAfvFIBF.js";import"./index-BAKcRSlX.js";import"./index-DNCO-vcx.js";import"./index-Y3TRpJ-L.js";import"./index-DrT0s6v0.js";import"./index-Ca89sW9R.js";import"./index-C3mvkShn.js";import"./index-CGBRtoFy.js";import"./index-BGTKE3tV.js";import"./index-DHAmGKAZ.js";import"./index-h0kOFyIh.js";import"./index-BfUMklLA.js";import"./index-B0xwoRpp.js";import"./index-B2h5DBoi.js";import"./index-5mF7KA5g.js";import"./index-WpT-B0mJ.js";import"./index-B_69vUNX.js";import"./index-B80hK4m0.js";import"./index-w0WAZL2A.js";import"./index-Dn6vuaYJ.js";import"./index-CTTgWa-s.js";import"./index-CF_OgQNJ.js";import"./index-DBTBMFOQ.js";import"./index-CXJdfWGn.js";import"./index-x12pshUM.js";import"./index-CGSydWJd.js";import"./index-DbF-M2Rm.js";import"./Tag-B44xOCaW.js";import"./index-DUmpqB7p.js";import"./constants-BaREPXw5.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-DGvBTeR0.js";import"./PopoverPrivate-GlQeSlaK.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-CyhbxqE1.js";import"./ButtonFunction-B8ZNpjRU.js";import"./utils-DNgbsm2n.js";import"./Counter-CRGhF3Kb.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-DlhLaOs6.js";import"./index-B7wZyJkK.js";import"./TruncateString--U_6xn2L.js";import"./useValueControl-C51frgGe.js";import"./Dropdown-B_Ow7ozB.js";import"./hooks-Bhr_C-ho.js";import"./Checkbox-Dyib3wqa.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./Switch-BKTUyb2o.js";import"./index-COrctIrk.js";import"./IconPredefined-FEPQkyLi.js";import"./Typography-CjikRPpk.js";import"./ButtonTonal-CJGj6dEM.js";import"./Divider-C1X9zrkx.js";import"./Spinner-DZPrD8kc.js";import"./Scroll-B3e6J9cA.js";import"./useButtonNavigation-DNIYWp-y.js";import"./useClearButton-DCno6QJq.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-B3qhzCsI.js";import"./DropList-3i4aXq2c.js";import"./Calendar-BaFVfoLf.js";import"./TimePickerBase-CEVfkYcP.js";import"./List-Bt0UDmL-.js";import"./TimePicker-BtkxBnz1.js";const ot={title:"Components/Chips/ChipChoice",component:a.Date},w=({useDefaultValue:s,showClickCounter:d,modeBuildCellProps:l,showClearButton:c,...e})=>{const C=e.customFormatter?o=>(o==null?void 0:o.toUTCString())||"empty":void 0;return r.jsx(P,{showClickCounter:d,defaultValue:s?new Date("2023-10-15"):void 0,showClearButton:c,chipControlled:({increaseCounter:o,...g})=>r.jsx(a.Date,{...e,...g,valueRender:C,onClick:o,buildCalendarCellProps:_(l)})})},t={render:w,args:{...S,modeBuildCellProps:"none",mode:"date",showSeconds:!0,useDefaultValue:!1},argTypes:{...h,modeBuildCellProps:{name:"[story] select buildCalendarCellProps operating mode",options:["disable-past","none"],control:{type:"radio"}},showSeconds:{if:{arg:"mode",eq:"date-time"}}},parameters:{readme:{sidebar:[`Latest version: ${i.version}`,u,f]},packageName:i.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A150102&mode=design"}}};var m,p,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...CHIP_CHOICE_STORY_ARGS,
    modeBuildCellProps: 'none',
    mode: 'date',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    showSeconds: true,
    useDefaultValue: false
  },
  argTypes: {
    ...CHIP_CHOICE_ARG_TYPES,
    modeBuildCellProps: {
      name: '[story] select buildCalendarCellProps operating mode',
      options: ['disable-past', 'none'],
      control: {
        type: 'radio'
      }
    },
    showSeconds: {
      if: {
        arg: 'mode',
        eq: 'date-time'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A150102&mode=design'
    }
  }
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};export{t as chipChoiceDate,ot as default};
