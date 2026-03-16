import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{c as m,a as u,b as f}from"./styles.module-DBXdg7tP.js";import{C as P}from"./ChipChoiceStoryWrap-BJUG2UxZ.js";import{C as h,a as R}from"./constants-DC3pud2T.js";import{g as _}from"./helpers-DSWmnuo9.js";import{C as s}from"./index-C34tPM73.js";import"./index-ChsGqxH_.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./constants-C4fmyMeh.js";import"./constants-Dnt2-1iE.js";import"./index-DpKFoNwX.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-DOUS9uWn.js";import"./index-CO8qBMZD.js";import"./index-xpeDvz-o.js";import"./index-CF-13Pl-.js";import"./index-DHfXeKe7.js";import"./index-B_0qYnTb.js";import"./index-CQc5r4_Q.js";import"./index-CoIthjug.js";import"./index-CAYnss5D.js";import"./index-DmfNrAq3.js";import"./index-nGp8qeK-.js";import"./index-9wvJTAiE.js";import"./index-CNFM3LCz.js";import"./index-DnTCD4Me.js";import"./index-euh5MKXp.js";import"./index-K_J-hwcf.js";import"./index-B4f8p1mq.js";import"./index-C0OXG0Ut.js";import"./index-DYaIcqfi.js";import"./index-CU6E9CWM.js";import"./index-Cz4dqGWG.js";import"./index-BaJp5iwV.js";import"./index-CV7xtGUY.js";import"./index-BAKe6VtV.js";import"./index-CDvcICra.js";import"./index-Dj3Kdo0x.js";import"./Tag-C8WN3LKY.js";import"./index-CXM-PPQz.js";import"./constants-BaREPXw5.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-C-dEnYGL.js";import"./PopoverPrivate-Wl_jan0t.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-XVitSj_D.js";import"./ButtonFunction-DgLqV0Jc.js";import"./utils-S-VjwOOO.js";import"./Counter-B1ZrBHB5.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-CLj3NA8V.js";import"./index-B7wZyJkK.js";import"./TruncateString-B3y8D6Q3.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-DrBZ86iX.js";import"./hooks-C0qo-F_P.js";import"./Checkbox-D_3QCiXO.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./Switch-Bnym4xX7.js";import"./index-H8i4ekSY.js";import"./IconPredefined-BFl5DzK0.js";import"./Typography-D9QXbsmR.js";import"./ButtonTonal-ByuWQQKE.js";import"./Divider-Damo9_Fl.js";import"./Scroll-B_O1f2D1.js";import"./Spinner-BJeEd4V6.js";import"./useButtonNavigation-DOa0a3CW.js";import"./useClearButton-I35ZnCag.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-D5F7bPEO.js";import"./DropList-9lUb7fUx.js";import"./Calendar-B5odqiIu.js";import"./TimePickerBase-CM03yoh1.js";import"./List-CmWEmYgF.js";import"./TimePicker-C3mPbY6z.js";const Zo={title:"Components/Chips/ChipChoice",component:s.DateRange},S=({useDefaultValue:l,showClickCounter:d,modeBuildCellProps:c,showClearButton:C,...e})=>{const g=e.customFormatter?o=>!o||!o.length?"all dates":o.map(r=>r.toUTCString()).join("//"):void 0;return i.jsx(P,{showClickCounter:d,showClearButton:C,defaultValue:l?[new Date("2022-10-15"),new Date("2023-10-15")]:void 0,chipControlled:({increaseCounter:o,...r})=>i.jsx(s.DateRange,{...e,...r,onClick:o,valueRender:g,buildCalendarCellProps:_(c)})})},t={render:S,args:{...R,useDefaultValue:!1,modeBuildCellProps:"none"},argTypes:{...h,modeBuildCellProps:{name:"[story] select buildCalendarCellProps operating mode",options:["disable-past","none"],control:{type:"radio"}}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,u,f]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A151169&mode=design"}}};var p,n,a;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
