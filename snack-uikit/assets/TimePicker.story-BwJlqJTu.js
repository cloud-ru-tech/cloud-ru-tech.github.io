import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{c as T}from"./index-DUmpqB7p.js";import{r as u}from"./index-CJ_LmFaV.js";import{c as g,a as M,b as N,s as r}from"./styles.module-DGzRAvzp.js";import{S as a}from"./TimePickerBase-BVAqe34A.js";import{T as k}from"./TimePicker-BH-xJ6NT.js";import{S as L}from"./Scroll-B3e6J9cA.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./hooks-D1n50Nla.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-C51frgGe.js";import"./index-JZGyZbA2.js";import"./Checkbox-BPp2F_B8.js";import"./index-B7wZyJkK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-C0OXG0Ut.js";import"./index-CF-13Pl-.js";import"./TruncateString-NSjc3XzO.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-C67siN8J.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-Ct9nJb3P.js";import"./index-CAYnss5D.js";import"./index-DOM9zHVr.js";import"./index-DhD2neKD.js";import"./Dropdown-DW3sYUoc.js";import"./index-CQc5r4_Q.js";import"./index-CV7xtGUY.js";import"./LocaleProvider-CyhbxqE1.js";import"./index-D-5xGnYw.js";import"./IconPredefined-FEPQkyLi.js";import"./Typography-WZPdBQao.js";import"./ButtonTonal-YV7IKDPs.js";import"./utils-DzobPs8h.js";import"./Counter-CRGhF3Kb.js";import"./Sun-WJ2YftH0.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-BLfaiW75.js";import"./Divider-C1X9zrkx.js";import"./Spinner-DA8AR1nX.js";import"./ButtonFunction-DNxi1ZK7.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-B39o1uTp.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-CThf6NgV.js";import"./List-kHspEBId.js";const Le={title:"Components/Calendar/Time Picker",component:k},_={[a.S]:r.scroll_timepicker_s,[a.M]:r.scroll_timepicker_m,[a.L]:r.scroll_timepicker_l},E=({todayHours:d,todayMinutes:c,todaySeconds:b,valueHours:m,valueMinutes:s,valueSeconds:l,...o})=>{const p=u.useMemo(()=>[m,s,l].every(n=>n===void 0)?void 0:{hours:m,minutes:s,seconds:l},[m,s,l]),[e,y]=u.useState(p);u.useEffect(()=>{y(p)},[p]);const C=n=>{var v;y(n),(v=o.onChangeValue)==null||v.call(o,n)},x=[d,c,b].every(n=>n===void 0)?void 0:new Date(0,0,0,d,c,b),P={...o,today:x,value:e,onChangeValue:C},j=String(e==null?void 0:e.hours).padStart(2,"0"),w=String(e==null?void 0:e.minutes).padStart(2,"0"),F=String(e==null?void 0:e.seconds).padStart(2,"0");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:T(r.story,_[o.size||a.M]),children:t.jsx(L,{children:t.jsx(k,{...P})})}),t.jsx("div",{className:r.valueHolder,"data-test-id":"timepicker-value-holder",children:e?`${j}:${w}:${F}`:""})]})},i={render:E,args:{showSeconds:!0,size:a.M,fitToContainer:!0},argTypes:{value:{table:{disable:!0}},navigationStartRef:{table:{disable:!0}},onChangeValue:{table:{disable:!0}},onFocusLeave:{table:{disable:!0}},buildCellProps:{table:{disable:!0}},style:{table:{disable:!0}},defaultValue:{table:{disable:!0}},locale:{table:{disable:!0}},className:{table:{disable:!0}},today:{table:{disable:!0}},todayHours:{name:"[today] hours",control:{type:"number"}},todayMinutes:{name:"[today] minutes",control:{type:"number"}},todaySeconds:{name:"[today] seconds",control:{type:"number"}},valueHours:{name:"[value] hours",control:{type:"number"}},valueMinutes:{name:"[value] minutes",control:{type:"number"}},valueSeconds:{name:"[value] seconds",control:{type:"number"}}},parameters:{readme:{sidebar:[`Latest version: ${g.version}`,M,N]},packageName:g.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A27244&mode=design"}}};var S,f,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    showSeconds: true,
    size: SIZE.M,
    fitToContainer: true
  },
  argTypes: {
    value: {
      table: {
        disable: true
      }
    },
    navigationStartRef: {
      table: {
        disable: true
      }
    },
    onChangeValue: {
      table: {
        disable: true
      }
    },
    onFocusLeave: {
      table: {
        disable: true
      }
    },
    buildCellProps: {
      table: {
        disable: true
      }
    },
    style: {
      table: {
        disable: true
      }
    },
    defaultValue: {
      table: {
        disable: true
      }
    },
    locale: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    today: {
      table: {
        disable: true
      }
    },
    todayHours: {
      name: '[today] hours',
      control: {
        type: 'number'
      }
    },
    todayMinutes: {
      name: '[today] minutes',
      control: {
        type: 'number'
      }
    },
    todaySeconds: {
      name: '[today] seconds',
      control: {
        type: 'number'
      }
    },
    valueHours: {
      name: '[value] hours',
      control: {
        type: 'number'
      }
    },
    valueMinutes: {
      name: '[value] minutes',
      control: {
        type: 'number'
      }
    },
    valueSeconds: {
      name: '[value] seconds',
      control: {
        type: 'number'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A27244&mode=design'
    }
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};export{Le as default,i as timePicker};
