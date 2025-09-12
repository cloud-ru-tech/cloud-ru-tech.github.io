import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as m}from"./index-CJ_LmFaV.js";import{c as v}from"./index-DUmpqB7p.js";import{c,a as w,b as h,s as o}from"./styles.module-OhEuKl-x.js";import{C as n,S as l}from"./TimePickerBase-80cdj9ci.js";import{g as A}from"./helper-2L10TFcd.js";import{C as y}from"./Calendar-BFzUB32q.js";import{S as N}from"./Scroll-CyeY1SIb.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./hooks-04To_cfi.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-C51frgGe.js";import"./index-JZGyZbA2.js";import"./Checkbox-BQzQ2Bti.js";import"./index-B7wZyJkK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-w0WAZL2A.js";import"./index-Y3TRpJ-L.js";import"./TruncateString-d_nSHKm-.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-DhoNVucR.js";import"./index-DHAmGKAZ.js";import"./index-CGBRtoFy.js";import"./index-DrT0s6v0.js";import"./Dropdown-4YXb2YvP.js";import"./index-C3mvkShn.js";import"./index-CXJdfWGn.js";import"./LocaleProvider-CyhbxqE1.js";import"./index-rxwPKAPj.js";import"./IconPredefined-CdsMvCqQ.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-DGXXrnie.js";import"./utils-BU1O2e4d.js";import"./Counter-D8sCmdvq.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";import"./ButtonFilled-CKLrV0sw.js";import"./Divider-C1X9zrkx.js";import"./Spinner-DZPrD8kc.js";import"./ButtonFunction-D-iUo6il.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-CAlOraVE.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-C-DOH0pC.js";import"./List-B7rFB-AM.js";const Pe={title:"Components/Calendar/Calendar",component:y},P={[l.S]:o.scroll_s,[l.M]:o.scroll_m,[l.L]:o.scroll_l},L=({localeName:D,modeBuildCellProps:V,...e})=>{const C=new Intl.Locale(D);let r;e.mode===n.Date||e.mode===n.DateTime||e.mode===n.Month?e.dateValue&&(r=new Date(e.dateValue)):e.mode===n.Range&&e.rangeValueStart&&e.rangeValueEnd&&(r=[new Date(e.rangeValueStart),new Date(e.rangeValueEnd)]);let i;e.mode===n.Date||e.mode===n.DateTime?e.dateDefaultValue&&(i=new Date(e.dateDefaultValue)):e.mode===n.Range&&e.rangeDefaultValueStart&&e.rangeDefaultValueEnd&&(i=[new Date(e.rangeDefaultValueStart),new Date(e.rangeDefaultValueEnd)]);const[a,s]=m.useState();m.useEffect(()=>{s(r||i)},[e.mode]);const E=u=>{var p;s(u),(p=e.onChangeValue)==null||p.call(e,u)},S=e.dateToday?new Date(e.dateToday):void 0,R={...e,today:S,value:r,locale:C,defaultValue:i,onChangeValue:E};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:v(o.story,P[e.size||l.M]),children:t.jsx(N,{children:m.createElement(y,{...R,buildCellProps:A(V),key:e.mode})})},e.mode),t.jsxs("div",{className:o.valueHolder,"data-test-id":"calendar-value-holder",children:[a instanceof Date&&a.valueOf(),Array.isArray(a)&&a[0].valueOf(),Array.isArray(a)&&a[1].valueOf()]})]})},d={render:L,args:{size:l.M,mode:n.Date,showSeconds:!0,autofocus:!1,localeName:"en-US",showHolidays:!1,fitToContainer:!0,modeBuildCellProps:"none"},argTypes:{showSeconds:{if:{arg:"mode",eq:"date-time"}},value:{table:{disable:!0}},navigationStartRef:{table:{disable:!0}},onChangeValue:{table:{disable:!0}},modeBuildCellProps:{name:"[story] select buildCellProps operating mode",options:["for-tests","disable-past","none"],control:{type:"radio"}},onFocusLeave:{table:{disable:!0}},buildCellProps:{table:{disable:!0}},style:{table:{disable:!0}},defaultValue:{table:{disable:!0}},locale:{table:{disable:!0}},className:{table:{disable:!0}},today:{table:{disable:!0}},showHolidays:{name:"showHolidays (worked if buildCellProps return isHolidays = undefined)"},localeName:{options:["ru-RU","en-US"],control:{type:"radio"}},dateToday:{control:{type:"date"}},dateValue:{name:"value",control:{type:"date"},if:{arg:"mode",neq:n.Range}},dateDefaultValue:{name:"defaultValue",control:{type:"date"},if:{arg:"mode",neq:n.Range}},rangeValueStart:{name:"value start",control:{type:"date"},if:{arg:"mode",eq:n.Range}},rangeValueEnd:{name:"value end",control:{type:"date"},if:{arg:"mode",eq:n.Range}},rangeDefaultValueStart:{name:"defaultValue start",control:{type:"date"},if:{arg:"mode",eq:n.Range}},rangeDefaultValueEnd:{name:"defaultValue end",control:{type:"date"},if:{arg:"mode",eq:n.Range}}},parameters:{readme:{sidebar:[`Latest version: ${c.version}`,w,h]},packageName:c.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A27244&mode=design"}}};var f,b,g;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: SIZE.M,
    mode: CALENDAR_MODE.Date,
    showSeconds: true,
    autofocus: false,
    localeName: 'en-US',
    showHolidays: false,
    fitToContainer: true,
    modeBuildCellProps: 'none'
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
}`,...(g=(b=d.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};export{d as calendar,Pe as default};
