import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{r as d}from"./index-CJ_LmFaV.js";import{c as R}from"./index-DUmpqB7p.js";import{c as f,a as v,b as A,s as r}from"./styles.module-11u-TMgu.js";import{C as t,S as l}from"./TimePickerBase-6ziz-nIe.js";import{i as b,g as N,a as q}from"./helpers-CrR-2-3B.js";import{C as g}from"./Calendar-B0g6a5vr.js";import{S as O}from"./Scroll-CyeY1SIb.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./hooks-CoWzsOzz.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-CNLw7ht-.js";import"./index-JZGyZbA2.js";import"./Checkbox-CSVLuhwq.js";import"./index-B7wZyJkK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-3XDw48l5.js";import"./index-DtRrUciF.js";import"./TruncateString-D54BiV_x.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-pxs55hib.js";import"./index-BQAaeyfQ.js";import"./index-Bx6tewuM.js";import"./Dropdown-4YXb2YvP.js";import"./index-DLGJiw2b.js";import"./index-Baw9oej9.js";import"./LocaleProvider-DhC1J63f.js";import"./index-CXDcoFV-.js";import"./IconPredefined-DVxQYij_.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-Bnr4eCkc.js";import"./utils-Cci-L8Vb.js";import"./Counter-DXWSEFY6.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-BioftgjW.js";import"./Divider-C1X9zrkx.js";import"./Spinner-PYn9r2mo.js";import"./ButtonFunction-DzSpe7i-.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-CFmx5Mk4.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-CMdU0e69.js";import"./List-BB93zaAu.js";const Oe={title:"Components/Calendar/Calendar",component:g},L={[l.S]:r.scroll_s,[l.M]:r.scroll_m,[l.L]:r.scroll_l},M=({localeName:h,modeBuildCellProps:w,...e})=>{const C=new Intl.Locale(h);let s;e.mode===t.Date||e.mode===t.DateTime||e.mode===t.Month?e.dateValue&&(s=new Date(e.dateValue)):b(e.mode)&&e.rangeValueStart&&e.rangeValueEnd&&(s=[new Date(e.rangeValueStart),new Date(e.rangeValueEnd)]);let i;e.mode===t.Date||e.mode===t.DateTime?e.dateDefaultValue&&(i=new Date(e.dateDefaultValue)):b(e.mode)&&e.rangeDefaultValueStart&&e.rangeDefaultValueEnd&&(i=[new Date(e.rangeDefaultValueStart),new Date(e.rangeDefaultValueEnd)]);const[n,p]=d.useState();d.useEffect(()=>{p(s||i)},[e.mode]);const V=a=>{var c;p(a),(c=e.onChangeValue)==null||c.call(e,a)},u=e.dateToday?new Date(e.dateToday):void 0,S={...e,today:u,value:s,locale:C,defaultValue:i,onChangeValue:V},E=d.useMemo(()=>{if(!e.showPeriodPresets)return;const a={enabled:!0,title:e.showPresetsTitle};return e.showCustomPresetsItems?{...a,items:N(u)}:a},[e.showCustomPresetsItems,e.showPeriodPresets,e.showPresetsTitle,u]);return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:R(r.story,L[e.size||l.M]),children:o.jsx(O,{children:d.createElement(g,{...S,buildCellProps:q(w),key:e.mode,presets:E})})},e.mode),o.jsxs("div",{className:r.valueHolder,"data-test-id":"calendar-value-holder",children:[n instanceof Date&&n.valueOf(),Array.isArray(n)&&n[0].valueOf(),Array.isArray(n)&&n[1].valueOf()]})]})},m={render:M,args:{size:l.M,mode:t.Date,showSeconds:!0,autofocus:!1,localeName:"en-US",showHolidays:!1,fitToContainer:!0,modeBuildCellProps:"none",showPeriodPresets:!1,showPresetsTitle:!0,showCustomPresetsItems:!1},argTypes:{showSeconds:{if:{arg:"mode",eq:"date-time"}},value:{table:{disable:!0}},navigationStartRef:{table:{disable:!0}},onChangeValue:{table:{disable:!0}},modeBuildCellProps:{name:"[story] select buildCellProps operating mode",options:["for-tests","disable-past","none"],control:{type:"radio"}},onFocusLeave:{table:{disable:!0}},buildCellProps:{table:{disable:!0}},style:{table:{disable:!0}},defaultValue:{table:{disable:!0}},locale:{table:{disable:!0}},className:{table:{disable:!0}},today:{table:{disable:!0}},showHolidays:{name:"showHolidays (worked if buildCellProps return isHolidays = undefined)"},localeName:{options:["ru-RU","en-US"],control:{type:"radio"}},dateToday:{control:{type:"date"}},dateValue:{name:"value",control:{type:"date"},if:{arg:"mode",neq:t.DateRange}},dateDefaultValue:{name:"defaultValue",control:{type:"date"},if:{arg:"mode",neq:t.DateRange}},rangeValueStart:{name:"value start",control:{type:"date"},if:{arg:"mode",eq:t.DateRange}},rangeValueEnd:{name:"value end",control:{type:"date"},if:{arg:"mode",eq:t.DateRange}},rangeDefaultValueStart:{name:"defaultValue start",control:{type:"date"},if:{arg:"mode",eq:t.DateRange}},rangeDefaultValueEnd:{name:"defaultValue end",control:{type:"date"},if:{arg:"mode",eq:t.DateRange}},showPeriodPresets:{if:{arg:"mode",eq:t.DateRange}},hidePeriodPresetsTitle:{if:{arg:"showPeriodPresets",eq:!0}},customPeriodPresets:{table:{disable:!0}},onPresetClick:{table:{disable:!0}},showCustomPresetsItems:{if:{arg:"showPeriodPresets",eq:!0},name:"[Story]: Show custom list items",control:{type:"boolean"}}},parameters:{readme:{sidebar:[`Latest version: ${f.version}`,v,A]},packageName:f.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A27244&mode=design"}}};var D,P,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
        neq: CALENDAR_MODE.DateRange
      }
    },
    dateDefaultValue: {
      name: 'defaultValue',
      control: {
        type: 'date'
      },
      if: {
        arg: 'mode',
        neq: CALENDAR_MODE.DateRange
      }
    },
    rangeValueStart: {
      name: 'value start',
      control: {
        type: 'date'
      },
      if: {
        arg: 'mode',
        eq: CALENDAR_MODE.DateRange
      }
    },
    rangeValueEnd: {
      name: 'value end',
      control: {
        type: 'date'
      },
      if: {
        arg: 'mode',
        eq: CALENDAR_MODE.DateRange
      }
    },
    rangeDefaultValueStart: {
      name: 'defaultValue start',
      control: {
        type: 'date'
      },
      if: {
        arg: 'mode',
        eq: CALENDAR_MODE.DateRange
      }
    },
    rangeDefaultValueEnd: {
      name: 'defaultValue end',
      control: {
        type: 'date'
      },
      if: {
        arg: 'mode',
        eq: CALENDAR_MODE.DateRange
      }
    },
    showPeriodPresets: {
      if: {
        arg: 'mode',
        eq: CALENDAR_MODE.DateRange
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
}`,...(y=(P=m.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};export{m as calendar,Oe as default};
