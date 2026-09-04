import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{c as i,a as u,b as f}from"./styles.module-BjyC3pt9.js";import{C as P}from"./ChipChoiceStoryWrap-udmyGOhe.js";import{C as h,a as S}from"./constants-B6me1oiG.js";import{g as _}from"./helpers-DSWmnuo9.js";import{C as a}from"./index-BtuJEyiK.js";import"./index-ChsGqxH_.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./constants-BIigMBdG.js";import"./constants-DV25-ecJ.js";import"./index-DBR3TzFE.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-COwW15wl.js";import"./index-DOUS9uWn.js";import"./index-CO8qBMZD.js";import"./index-xpeDvz-o.js";import"./index-CF-13Pl-.js";import"./index-DHfXeKe7.js";import"./index-B_0qYnTb.js";import"./index-CQc5r4_Q.js";import"./index-CoIthjug.js";import"./index-CAYnss5D.js";import"./index-DmfNrAq3.js";import"./index-nGp8qeK-.js";import"./index-9wvJTAiE.js";import"./index-CNFM3LCz.js";import"./index-DnTCD4Me.js";import"./index-euh5MKXp.js";import"./index-K_J-hwcf.js";import"./index-B4f8p1mq.js";import"./index-C0OXG0Ut.js";import"./index-DYaIcqfi.js";import"./index-CU6E9CWM.js";import"./index-Cz4dqGWG.js";import"./index-BaJp5iwV.js";import"./index-CV7xtGUY.js";import"./index-BAKe6VtV.js";import"./index-CDvcICra.js";import"./index-Dj3Kdo0x.js";import"./Tag-DFpDfDWd.js";import"./index-CXM-PPQz.js";import"./constants-BaREPXw5.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-CeCihl4C.js";import"./PopoverPrivate-Dbj5k6oN.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-7fZm_0X9.js";import"./lodash-DyrGR4_s.js";import"./ButtonFunction-CsJIzq2t.js";import"./utils-nE8vb_Mt.js";import"./Counter-CVeRO6SA.js";import"./Sun-Czt8-gDg.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-CQj7dEdz.js";import"./index-B7wZyJkK.js";import"./TruncateString-Chrk-fjN.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-BIBNsN_z.js";import"./hooks-lImjenbH.js";import"./Checkbox-Dm2bIKAT.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./Switch-CJ0-IE_Z.js";import"./index-BRkGOJ1S.js";import"./IconPredefined-BRbxZfzQ.js";import"./Typography-BRWvDK8D.js";import"./ButtonTonal-Dbo7t3Uw.js";import"./Divider-BbKtI3tl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-BcyWg2qj.js";import"./useButtonNavigation-DVt-5Flo.js";import"./useClearButton-X6xACxcY.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DSbAEC5z.js";import"./DropList-vdFsay0b.js";import"./Calendar-BPaVpXRy.js";import"./TimePickerBase-CoXiUOpE.js";import"./List-jNb4f-Uf.js";import"./TimePicker-Cwq5B8VS.js";const ot={title:"Components/Chips/ChipChoice",component:a.Date},w=({useDefaultValue:s,showClickCounter:d,modeBuildCellProps:l,showClearButton:c,...e})=>{const C=e.customFormatter?o=>(o==null?void 0:o.toUTCString())||"empty":void 0;return r.jsx(P,{showClickCounter:d,defaultValue:s?new Date("2023-10-15"):void 0,showClearButton:c,chipControlled:({increaseCounter:o,...g})=>r.jsx(a.Date,{...e,...g,valueRender:C,onClick:o,buildCalendarCellProps:_(l)})})},t={render:w,args:{...S,modeBuildCellProps:"none",mode:"date",showSeconds:!0,useDefaultValue:!1},argTypes:{...h,modeBuildCellProps:{name:"[story] select buildCalendarCellProps operating mode",options:["disable-past","none"],control:{type:"radio"}},showSeconds:{if:{arg:"mode",eq:"date-time"}}},parameters:{readme:{sidebar:[`Latest version: ${i.version}`,u,f]},packageName:i.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A150102&mode=design"}}};var m,p,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
