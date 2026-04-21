import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{c as i,a as u,b as f}from"./styles.module-Bo6g5kyQ.js";import{C as P}from"./ChipChoiceStoryWrap-CODNa32K.js";import{C as h,a as S}from"./constants-CSdbqbTU.js";import{g as _}from"./helpers-DSWmnuo9.js";import{C as a}from"./index-B2CxKe81.js";import"./index-ChsGqxH_.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./constants-BIigMBdG.js";import"./constants-eX4LS-F1.js";import"./index-JswG3_7a.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-CAfvFIBF.js";import"./index-BAKcRSlX.js";import"./index-CKE7Rdrn.js";import"./index-Y3TRpJ-L.js";import"./index-DreyRvUE.js";import"./index-Ca89sW9R.js";import"./index-C3mvkShn.js";import"./index-BGTKE3tV.js";import"./index-DHAmGKAZ.js";import"./index-h0kOFyIh.js";import"./index-BfUMklLA.js";import"./index-B0xwoRpp.js";import"./index-B2h5DBoi.js";import"./index-5mF7KA5g.js";import"./index-WpT-B0mJ.js";import"./index-B_69vUNX.js";import"./index-B80hK4m0.js";import"./index-w0WAZL2A.js";import"./index-Dn6vuaYJ.js";import"./index-CTTgWa-s.js";import"./index-CF_OgQNJ.js";import"./index-DBTBMFOQ.js";import"./index-CXJdfWGn.js";import"./index-x12pshUM.js";import"./index-CGSydWJd.js";import"./index-DbF-M2Rm.js";import"./Tag-BMfWx0Dm.js";import"./index-CXM-PPQz.js";import"./constants-BaREPXw5.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-Bvja_9Oj.js";import"./PopoverPrivate-B3hkMTjr.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./FuzzySearch-C8qpdhmO.js";import"./LocaleProvider-XVitSj_D.js";import"./ButtonFunction-BVjclC6H.js";import"./utils-DxHrO63v.js";import"./Counter-C_DywCEs.js";import"./Sun-BMXO82GS.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-B8LDBujc.js";import"./index-B7wZyJkK.js";import"./TruncateString-D6qo2szg.js";import"./useValueControl-CNLw7ht-.js";import"./Dropdown-BF5Pv_Uf.js";import"./hooks-BxAtdNDa.js";import"./Checkbox-DOnNO02s.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./Switch-CnYb8oA5.js";import"./index-BHM9yW28.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-B-8nXnBH.js";import"./ButtonTonal-DDV-P8La.js";import"./Divider-BbKtI3tl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-kGs9Wy83.js";import"./useButtonNavigation-CrOhbyYc.js";import"./useClearButton-CDU-zCvr.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-d6eJPa0g.js";import"./DropList-DYj-b1ec.js";import"./Calendar-BnoWsWou.js";import"./TimePickerBase-DL0FgrbI.js";import"./List-BCuFoa7i.js";import"./TimePicker-CklfGQWm.js";const Zo={title:"Components/Chips/ChipChoice",component:a.Date},w=({useDefaultValue:s,showClickCounter:d,modeBuildCellProps:l,showClearButton:c,...e})=>{const C=e.customFormatter?o=>(o==null?void 0:o.toUTCString())||"empty":void 0;return r.jsx(P,{showClickCounter:d,defaultValue:s?new Date("2023-10-15"):void 0,showClearButton:c,chipControlled:({increaseCounter:o,...g})=>r.jsx(a.Date,{...e,...g,valueRender:C,onClick:o,buildCalendarCellProps:_(l)})})},t={render:w,args:{...S,modeBuildCellProps:"none",mode:"date",showSeconds:!0,useDefaultValue:!1},argTypes:{...h,modeBuildCellProps:{name:"[story] select buildCalendarCellProps operating mode",options:["disable-past","none"],control:{type:"radio"}},showSeconds:{if:{arg:"mode",eq:"date-time"}}},parameters:{readme:{sidebar:[`Latest version: ${i.version}`,u,f]},packageName:i.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A150102&mode=design"}}};var m,p,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};export{t as chipChoiceDate,Zo as default};
