import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{c as i,a as u,b as f}from"./styles.module-CuFVgV9e.js";import{C as P}from"./ChipChoiceStoryWrap-Dgwoafbf.js";import{C as h,a as S}from"./constants-BtyghEid.js";import{g as _}from"./helpers-DSWmnuo9.js";import{C as a}from"./index-CA0s204M.js";import"./index-ChsGqxH_.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./constants-BIigMBdG.js";import"./constants-DV25-ecJ.js";import"./index-DBR3TzFE.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-COwW15wl.js";import"./index-DOUS9uWn.js";import"./index-CO8qBMZD.js";import"./index-xpeDvz-o.js";import"./index-CF-13Pl-.js";import"./index-DHfXeKe7.js";import"./index-B_0qYnTb.js";import"./index-CQc5r4_Q.js";import"./index-CoIthjug.js";import"./index-CAYnss5D.js";import"./index-DmfNrAq3.js";import"./index-nGp8qeK-.js";import"./index-9wvJTAiE.js";import"./index-CNFM3LCz.js";import"./index-DnTCD4Me.js";import"./index-euh5MKXp.js";import"./index-K_J-hwcf.js";import"./index-B4f8p1mq.js";import"./index-C0OXG0Ut.js";import"./index-DYaIcqfi.js";import"./index-CU6E9CWM.js";import"./index-Cz4dqGWG.js";import"./index-BaJp5iwV.js";import"./index-CV7xtGUY.js";import"./index-BAKe6VtV.js";import"./index-CDvcICra.js";import"./index-Dj3Kdo0x.js";import"./Tag-CNd-b-tk.js";import"./index-CXM-PPQz.js";import"./constants-BaREPXw5.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-DpTcvKfh.js";import"./PopoverPrivate-CEMvfDsk.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-7fZm_0X9.js";import"./lodash-DyrGR4_s.js";import"./ButtonFunction-BIStbrPv.js";import"./utils-D92wmnuO.js";import"./Counter-BqPtvVBi.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-I1cxQU3-.js";import"./index-B7wZyJkK.js";import"./TruncateString-C5pgoQdJ.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-Pk1GPJid.js";import"./hooks-Bj8S_8l_.js";import"./Checkbox-Cm81XGOK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./Switch-DC6SnJsB.js";import"./index-CAPw9s2k.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-5rnd8anx.js";import"./ButtonTonal-mnoF1Om6.js";import"./Divider-BbKtI3tl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-BJeEd4V6.js";import"./useButtonNavigation-DNBDAoGl.js";import"./useClearButton-DkMzh70e.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DOkVmsgi.js";import"./DropList-Dp4Bw3RR.js";import"./Calendar-BGAxf_93.js";import"./TimePickerBase-CLmBdLlJ.js";import"./List-CpdP8j27.js";import"./TimePicker-B8Mgf7mr.js";const ot={title:"Components/Chips/ChipChoice",component:a.Date},w=({useDefaultValue:s,showClickCounter:d,modeBuildCellProps:l,showClearButton:c,...e})=>{const C=e.customFormatter?o=>(o==null?void 0:o.toUTCString())||"empty":void 0;return r.jsx(P,{showClickCounter:d,defaultValue:s?new Date("2023-10-15"):void 0,showClearButton:c,chipControlled:({increaseCounter:o,...g})=>r.jsx(a.Date,{...e,...g,valueRender:C,onClick:o,buildCalendarCellProps:_(l)})})},t={render:w,args:{...S,modeBuildCellProps:"none",mode:"date",showSeconds:!0,useDefaultValue:!1},argTypes:{...h,modeBuildCellProps:{name:"[story] select buildCalendarCellProps operating mode",options:["disable-past","none"],control:{type:"radio"}},showSeconds:{if:{arg:"mode",eq:"date-time"}}},parameters:{readme:{sidebar:[`Latest version: ${i.version}`,u,f]},packageName:i.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A150102&mode=design"}}};var m,p,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
