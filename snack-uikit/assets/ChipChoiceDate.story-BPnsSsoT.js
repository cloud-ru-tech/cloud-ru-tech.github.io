import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{c as i,a as u,b as f}from"./styles.module-Br2TPO5o.js";import{C as P}from"./ChipChoiceStoryWrap-lMZJohw3.js";import{C as h,a as S}from"./constants-BkPlnTnR.js";import{g as _}from"./helpers-DSWmnuo9.js";import{C as a}from"./index-EsdLxKHb.js";import"./index-ChsGqxH_.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./constants-BIigMBdG.js";import"./constants-Di8Gc2Vm.js";import"./index-BF1oV8qY.js";import"./Sprite-BKF2l_N7.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-DbqLuSZO.js";import"./index-CysqOHM3.js";import"./index-B9R5O8r3.js";import"./index-DJKNHUMM.js";import"./index-D9kkE69R.js";import"./index-Dz7uS-ju.js";import"./index-Clv-rw5D.js";import"./index-Hxt3JBiD.js";import"./index-CzP9MZIz.js";import"./index-BEuzvn4S.js";import"./index-BBF-mQaP.js";import"./index-BjphwxxP.js";import"./index-CDbNS7dV.js";import"./index-BVwVdvrd.js";import"./index-CR9MRPhY.js";import"./index-BcIDvl5_.js";import"./index-DzgJkNAR.js";import"./index-Dz9fnX15.js";import"./index-DO2qqcLs.js";import"./index-DAce5EUV.js";import"./index-C1BBUjNh.js";import"./index-DadV-Vij.js";import"./index-CgyQooMQ.js";import"./index-CWV_8VIe.js";import"./index-BbJ9A0eL.js";import"./index-BSWI5MkI.js";import"./index-CbwBVTm2.js";import"./Tag-Ll4P4I7f.js";import"./index-DUmpqB7p.js";import"./constants-BaREPXw5.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-Bksrf_Jf.js";import"./PopoverPrivate-TrV_4kB1.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-CyhbxqE1.js";import"./ButtonFunction-C7EKoXlo.js";import"./utils-C_yiyfaQ.js";import"./Counter-dO15w468.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-Br7BiTln.js";import"./index-B7wZyJkK.js";import"./TruncateString-BGqQdUJ0.js";import"./useValueControl-C51frgGe.js";import"./Dropdown-CSLBtYeS.js";import"./hooks-CLgiAg69.js";import"./Checkbox-h6B7EJUb.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./Switch-Bgwdby09.js";import"./index-Zb4qnuDw.js";import"./IconPredefined-yX8Rdo-2.js";import"./Typography-ChgE300v.js";import"./ButtonTonal-CybHjcBu.js";import"./Divider-C1X9zrkx.js";import"./Spinner-PYn9r2mo.js";import"./Scroll-B3e6J9cA.js";import"./useButtonNavigation-CnLiqaIQ.js";import"./useEventHandler-C8nLb_YB.js";import"./useClearButton-DTgdvtFN.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-jePr3gWJ.js";import"./DropList-Cv3JPhw4.js";import"./Calendar-cNaotiGS.js";import"./TimePickerBase-BPWYZXW3.js";import"./List-FaP11SgK.js";import"./TimePicker-sgoPmA4c.js";const tt={title:"Components/Chips/ChipChoice",component:a.Date},w=({useDefaultValue:s,showClickCounter:d,modeBuildCellProps:l,showClearButton:c,...e})=>{const C=e.customFormatter?o=>(o==null?void 0:o.toUTCString())||"empty":void 0;return r.jsx(P,{showClickCounter:d,defaultValue:s?new Date("2023-10-15"):void 0,showClearButton:c,chipControlled:({increaseCounter:o,...g})=>r.jsx(a.Date,{...e,...g,valueRender:C,onClick:o,buildCalendarCellProps:_(l)})})},t={render:w,args:{...S,modeBuildCellProps:"none",mode:"date",showSeconds:!0,useDefaultValue:!1},argTypes:{...h,modeBuildCellProps:{name:"[story] select buildCalendarCellProps operating mode",options:["disable-past","none"],control:{type:"radio"}},showSeconds:{if:{arg:"mode",eq:"date-time"}}},parameters:{readme:{sidebar:[`Latest version: ${i.version}`,u,f]},packageName:i.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A150102&mode=design"}}};var m,p,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};export{t as chipChoiceDate,tt as default};
