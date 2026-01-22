import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{r as d}from"./index-CJ_LmFaV.js";import{c as E}from"./index-DUmpqB7p.js";import{c as f,a as R,b as v,s as r}from"./styles.module-njRMv5E2.js";import{C as n,S as l}from"./TimePickerBase-CiDZzCyw.js";import{g as A,a as N}from"./helpers-CqFoJajd.js";import{C as y}from"./Calendar-DBK5rJCJ.js";import{S as q}from"./Scroll-CyeY1SIb.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./hooks-CrX791F-.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-COtCxwjc.js";import"./index-B7wZyJkK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./TruncateString-D54BiV_x.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-omTpraKZ.js";import"./index-DHAmGKAZ.js";import"./index-DreyRvUE.js";import"./Dropdown-4YXb2YvP.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./LocaleProvider-DhC1J63f.js";import"./index-pmGgVnP0.js";import"./IconPredefined-DVxQYij_.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-DoFZWAwD.js";import"./utils-B2xLtLsO.js";import"./Counter-DXWSEFY6.js";import"./Sun-Z4mxACB_.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-CWB3fCRZ.js";import"./Divider-C1X9zrkx.js";import"./Spinner-BvHGB_e8.js";import"./ButtonFunction-BIbEfdi9.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-31EHK2UD.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DKsi1bc7.js";import"./List-DnJ5b2o8.js";const qe={title:"Components/Calendar/Calendar",component:y},O={[l.S]:r.scroll_s,[l.M]:r.scroll_m,[l.L]:r.scroll_l},L=({localeName:h,modeBuildCellProps:w,...e})=>{const C=new Intl.Locale(h);let s;e.mode===n.Date||e.mode===n.DateTime||e.mode===n.Month?e.dateValue&&(s=new Date(e.dateValue)):e.mode===n.Range&&e.rangeValueStart&&e.rangeValueEnd&&(s=[new Date(e.rangeValueStart),new Date(e.rangeValueEnd)]);let i;e.mode===n.Date||e.mode===n.DateTime?e.dateDefaultValue&&(i=new Date(e.dateDefaultValue)):e.mode===n.Range&&e.rangeDefaultValueStart&&e.rangeDefaultValueEnd&&(i=[new Date(e.rangeDefaultValueStart),new Date(e.rangeDefaultValueEnd)]);const[t,p]=d.useState();d.useEffect(()=>{p(s||i)},[e.mode]);const D=a=>{var c;p(a),(c=e.onChangeValue)==null||c.call(e,a)},u=e.dateToday?new Date(e.dateToday):void 0,V={...e,today:u,value:s,locale:C,defaultValue:i,onChangeValue:D},S=d.useMemo(()=>{if(!e.showPeriodPresets)return;const a={enabled:!0,title:e.showPresetsTitle};return e.showCustomPresetsItems?{...a,items:A(u)}:a},[e.showCustomPresetsItems,e.showPeriodPresets,e.showPresetsTitle,u]);return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:E(r.story,O[e.size||l.M]),children:o.jsx(q,{children:d.createElement(y,{...V,buildCellProps:N(w),key:e.mode,presets:S})})},e.mode),o.jsxs("div",{className:r.valueHolder,"data-test-id":"calendar-value-holder",children:[t instanceof Date&&t.valueOf(),Array.isArray(t)&&t[0].valueOf(),Array.isArray(t)&&t[1].valueOf()]})]})},m={render:L,args:{size:l.M,mode:n.Date,showSeconds:!0,autofocus:!1,localeName:"en-US",showHolidays:!1,fitToContainer:!0,modeBuildCellProps:"none",showPeriodPresets:!1,showPresetsTitle:!0,showCustomPresetsItems:!1},argTypes:{showSeconds:{if:{arg:"mode",eq:"date-time"}},value:{table:{disable:!0}},navigationStartRef:{table:{disable:!0}},onChangeValue:{table:{disable:!0}},modeBuildCellProps:{name:"[story] select buildCellProps operating mode",options:["for-tests","disable-past","none"],control:{type:"radio"}},onFocusLeave:{table:{disable:!0}},buildCellProps:{table:{disable:!0}},style:{table:{disable:!0}},defaultValue:{table:{disable:!0}},locale:{table:{disable:!0}},className:{table:{disable:!0}},today:{table:{disable:!0}},showHolidays:{name:"showHolidays (worked if buildCellProps return isHolidays = undefined)"},localeName:{options:["ru-RU","en-US"],control:{type:"radio"}},dateToday:{control:{type:"date"}},dateValue:{name:"value",control:{type:"date"},if:{arg:"mode",neq:n.Range}},dateDefaultValue:{name:"defaultValue",control:{type:"date"},if:{arg:"mode",neq:n.Range}},rangeValueStart:{name:"value start",control:{type:"date"},if:{arg:"mode",eq:n.Range}},rangeValueEnd:{name:"value end",control:{type:"date"},if:{arg:"mode",eq:n.Range}},rangeDefaultValueStart:{name:"defaultValue start",control:{type:"date"},if:{arg:"mode",eq:n.Range}},rangeDefaultValueEnd:{name:"defaultValue end",control:{type:"date"},if:{arg:"mode",eq:n.Range}},showPeriodPresets:{if:{arg:"mode",eq:n.Range}},hidePeriodPresetsTitle:{if:{arg:"showPeriodPresets",eq:!0}},customPeriodPresets:{table:{disable:!0}},onPresetClick:{table:{disable:!0}},showCustomPresetsItems:{if:{arg:"showPeriodPresets",eq:!0},name:"[Story]: Show custom list items",control:{type:"boolean"}}},parameters:{readme:{sidebar:[`Latest version: ${f.version}`,R,v]},packageName:f.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A27244&mode=design"}}};var b,P,g;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: SIZE.M,
    mode: CALENDAR_MODE.Date,
    showSeconds: true,
    autofocus: false,
    localeName: 'en-US',
    showHolidays: false,
    fitToContainer: true,
    modeBuildCellProps: 'none',
    showPeriodPresets: false,
    showPresetsTitle: true,
    showCustomPresetsItems: false
  },
  argTypes: {
    showSeconds: {
      if: {
        arg: 'mode',
        eq: 'date-time'
      }
    },
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
    modeBuildCellProps: {
      name: '[story] select buildCellProps operating mode',
      options: ['for-tests', 'disable-past', 'none'],
      control: {
        type: 'radio'
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
    showHolidays: {
      name: 'showHolidays (worked if buildCellProps return isHolidays = undefined)'
    },
    localeName: {
      options: ['ru-RU', 'en-US'],
      control: {
        type: 'radio'
      }
    },
    dateToday: {
      control: {
        type: 'date'
      }
    },
    dateValue: {
      name: 'value',
      control: {
        type: 'date'
      },
      if: {
        arg: 'mode',
        neq: CALENDAR_MODE.Range
      }
    },
    dateDefaultValue: {
      name: 'defaultValue',
      control: {
        type: 'date'
      },
      if: {
        arg: 'mode',
        neq: CALENDAR_MODE.Range
      }
    },
    rangeValueStart: {
      name: 'value start',
      control: {
        type: 'date'
      },
      if: {
        arg: 'mode',
        eq: CALENDAR_MODE.Range
      }
    },
    rangeValueEnd: {
      name: 'value end',
      control: {
        type: 'date'
      },
      if: {
        arg: 'mode',
        eq: CALENDAR_MODE.Range
      }
    },
    rangeDefaultValueStart: {
      name: 'defaultValue start',
      control: {
        type: 'date'
      },
      if: {
        arg: 'mode',
        eq: CALENDAR_MODE.Range
      }
    },
    rangeDefaultValueEnd: {
      name: 'defaultValue end',
      control: {
        type: 'date'
      },
      if: {
        arg: 'mode',
        eq: CALENDAR_MODE.Range
      }
    },
    showPeriodPresets: {
      if: {
        arg: 'mode',
        eq: CALENDAR_MODE.Range
      }
    },
    hidePeriodPresetsTitle: {
      if: {
        arg: 'showPeriodPresets',
        eq: true
      }
    },
    customPeriodPresets: {
      table: {
        disable: true
      }
    },
    onPresetClick: {
      table: {
        disable: true
      }
    },
    showCustomPresetsItems: {
      if: {
        arg: 'showPeriodPresets',
        eq: true
      },
      name: '[Story]: Show custom list items',
      control: {
        type: 'boolean'
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
}`,...(g=(P=m.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};export{m as calendar,qe as default};
