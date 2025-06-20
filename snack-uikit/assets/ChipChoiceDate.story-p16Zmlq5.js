import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{c as i,a as u,b as f}from"./styles.module-CetNDkS6.js";import{C as P}from"./ChipChoiceStoryWrap-BMkNdMxz.js";import{C as h,a as S}from"./constants-_7yLxskc.js";import{g as _}from"./helpers-DSWmnuo9.js";import{C as a}from"./index-D3l4_JTj.js";import"./index-ChsGqxH_.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./constants-BIigMBdG.js";import"./constants-CVatWSe5.js";import"./index-DyrYaBr5.js";import"./Sprite-BKF2l_N7.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-C-NxZ9RO.js";import"./index-Dz039XZe.js";import"./index-HYofs7FJ.js";import"./index-DtRrUciF.js";import"./index-BLj3vrxU.js";import"./index-BKaanG2n.js";import"./index-DLGJiw2b.js";import"./index-C7IVzcIX.js";import"./index-CX1lIXbQ.js";import"./index-BQAaeyfQ.js";import"./index-DLRniMSR.js";import"./index-BJ2Oj32Z.js";import"./index-0zxx_KqD.js";import"./index-NU8U5csw.js";import"./index-I1zimRE2.js";import"./index-BIeLB8C9.js";import"./index-BcKv4fI4.js";import"./index-CIcT2jya.js";import"./index-3XDw48l5.js";import"./index-6PN_JoHT.js";import"./index-C9_U387z.js";import"./index-CwHIobxP.js";import"./index-B9oUDl45.js";import"./index-Baw9oej9.js";import"./index-BJDjEDgt.js";import"./index-Drk0xmYR.js";import"./index-zbp_5bxn.js";import"./Tag-CdlsQJZ-.js";import"./index-DUmpqB7p.js";import"./constants-BaREPXw5.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-Bksrf_Jf.js";import"./PopoverPrivate-TrV_4kB1.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-CyhbxqE1.js";import"./ButtonFunction-DaVeIbYB.js";import"./utils-OngRE5jA.js";import"./Counter-dO15w468.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-DKp_o21U.js";import"./index-B7wZyJkK.js";import"./TruncateString-BGqQdUJ0.js";import"./useValueControl-C51frgGe.js";import"./Dropdown-CY0dSXGI.js";import"./hooks-CaglF3OG.js";import"./Checkbox-uZV6WJ28.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./Switch-CYqDG2NM.js";import"./index-B29BIzpi.js";import"./IconPredefined-yX8Rdo-2.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-DLgtUvlK.js";import"./Divider-C1X9zrkx.js";import"./Spinner-PYn9r2mo.js";import"./Scroll-B3e6J9cA.js";import"./useButtonNavigation-CnLiqaIQ.js";import"./useEventHandler-C8nLb_YB.js";import"./useClearButton-CfofiGle.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DPDxPPZc.js";import"./DropList-a34_MUSs.js";import"./Calendar-BJejnBzZ.js";import"./TimePickerBase-Cg6aFyn_.js";import"./List-BhS53_8i.js";import"./TimePicker-CtnekdmH.js";const tt={title:"Components/Chips/ChipChoice",component:a.Date},w=({useDefaultValue:s,showClickCounter:d,modeBuildCellProps:l,showClearButton:c,...e})=>{const C=e.customFormatter?o=>(o==null?void 0:o.toUTCString())||"empty":void 0;return r.jsx(P,{showClickCounter:d,defaultValue:s?new Date("2023-10-15"):void 0,showClearButton:c,chipControlled:({increaseCounter:o,...g})=>r.jsx(a.Date,{...e,...g,valueRender:C,onClick:o,buildCalendarCellProps:_(l)})})},t={render:w,args:{...S,modeBuildCellProps:"none",mode:"date",showSeconds:!0,useDefaultValue:!1},argTypes:{...h,modeBuildCellProps:{name:"[story] select buildCalendarCellProps operating mode",options:["disable-past","none"],control:{type:"radio"}},showSeconds:{if:{arg:"mode",eq:"date-time"}}},parameters:{readme:{sidebar:[`Latest version: ${i.version}`,u,f]},packageName:i.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A150102&mode=design"}}};var m,p,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
