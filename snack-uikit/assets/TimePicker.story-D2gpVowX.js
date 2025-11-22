import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{c as T}from"./index-DUmpqB7p.js";import{r as u}from"./index-CJ_LmFaV.js";import{c as g,a as M,b as N,s as r}from"./styles.module-DZhb7GIG.js";import{S as a}from"./TimePickerBase-CfWfdGYP.js";import{T as k}from"./TimePicker-EjKBgZ24.js";import{S as L}from"./Scroll-CyeY1SIb.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./hooks-CFtBrwov.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-PwUu9dU3.js";import"./index-B7wZyJkK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./TruncateString-D54BiV_x.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-BaiPP0iO.js";import"./index-DHAmGKAZ.js";import"./index-DreyRvUE.js";import"./Dropdown-4YXb2YvP.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./LocaleProvider-DhC1J63f.js";import"./index-DoLi_cbU.js";import"./IconPredefined-DVxQYij_.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-BD68Gmas.js";import"./utils-BPr_B-ku.js";import"./Counter-DXWSEFY6.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-BVIQ21Q6.js";import"./Divider-C1X9zrkx.js";import"./Spinner-DZPrD8kc.js";import"./ButtonFunction-DbnPA0ic.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-CAlOraVE.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-D7P28HKb.js";import"./List-CkFc7N7i.js";const Ne={title:"Components/Calendar/Time Picker",component:k},_={[a.S]:r.scroll_timepicker_s,[a.M]:r.scroll_timepicker_m,[a.L]:r.scroll_timepicker_l},E=({todayHours:d,todayMinutes:c,todaySeconds:b,valueHours:m,valueMinutes:s,valueSeconds:l,...o})=>{const p=u.useMemo(()=>[m,s,l].every(n=>n===void 0)?void 0:{hours:m,minutes:s,seconds:l},[m,s,l]),[e,y]=u.useState(p);u.useEffect(()=>{y(p)},[p]);const C=n=>{var v;y(n),(v=o.onChangeValue)==null||v.call(o,n)},x=[d,c,b].every(n=>n===void 0)?void 0:new Date(0,0,0,d,c,b),P={...o,today:x,value:e,onChangeValue:C},j=String(e==null?void 0:e.hours).padStart(2,"0"),w=String(e==null?void 0:e.minutes).padStart(2,"0"),F=String(e==null?void 0:e.seconds).padStart(2,"0");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:T(r.story,_[o.size||a.M]),children:t.jsx(L,{children:t.jsx(k,{...P})})}),t.jsx("div",{className:r.valueHolder,"data-test-id":"timepicker-value-holder",children:e?`${j}:${w}:${F}`:""})]})},i={render:E,args:{showSeconds:!0,size:a.M,fitToContainer:!0},argTypes:{value:{table:{disable:!0}},navigationStartRef:{table:{disable:!0}},onChangeValue:{table:{disable:!0}},onFocusLeave:{table:{disable:!0}},buildCellProps:{table:{disable:!0}},style:{table:{disable:!0}},defaultValue:{table:{disable:!0}},locale:{table:{disable:!0}},className:{table:{disable:!0}},today:{table:{disable:!0}},todayHours:{name:"[today] hours",control:{type:"number"}},todayMinutes:{name:"[today] minutes",control:{type:"number"}},todaySeconds:{name:"[today] seconds",control:{type:"number"}},valueHours:{name:"[value] hours",control:{type:"number"}},valueMinutes:{name:"[value] minutes",control:{type:"number"}},valueSeconds:{name:"[value] seconds",control:{type:"number"}}},parameters:{readme:{sidebar:[`Latest version: ${g.version}`,M,N]},packageName:g.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A27244&mode=design"}}};var S,f,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};export{Ne as default,i as timePicker};
