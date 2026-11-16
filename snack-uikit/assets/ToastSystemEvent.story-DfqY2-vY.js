import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{c as g}from"./index-CXM-PPQz.js";import{r as f}from"./index-CJ_LmFaV.js";import{c as a,a as k,b as C,s as e}from"./styles.module-DzYDG4Qu.js";import{T as h,t as m,a as T}from"./helpers-BAkNfVWI.js";import{B as p}from"./ButtonFilled-I1cxQU3-.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-Chjiymov.js";import"./index-JZGyZbA2.js";import"./index-CAYnss5D.js";import"./ProgressBar-G0ToIzOu.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-DYaIcqfi.js";import"./index-DOUS9uWn.js";import"./index-Dj3Kdo0x.js";import"./TruncateString-C5pgoQdJ.js";import"./lodash-DyrGR4_s.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DpTcvKfh.js";import"./PopoverPrivate-CEMvfDsk.js";import"./Link-DPAz5c_i.js";import"./index-DHfXeKe7.js";import"./LocaleProvider-7fZm_0X9.js";import"./List-CpdP8j27.js";import"./index-B7wZyJkK.js";import"./hooks-Bj8S_8l_.js";import"./useValueControl-CNLw7ht-.js";import"./Checkbox-Cm81XGOK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./index-C0OXG0Ut.js";import"./index-CF-13Pl-.js";import"./Switch-DC6SnJsB.js";import"./Dropdown-Pk1GPJid.js";import"./index-CQc5r4_Q.js";import"./index-CV7xtGUY.js";import"./index-CAPw9s2k.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-5rnd8anx.js";import"./ButtonTonal-mnoF1Om6.js";import"./utils-D92wmnuO.js";import"./Counter-BqPtvVBi.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";import"./Divider-BbKtI3tl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-BJeEd4V6.js";import"./ButtonFunction-BIStbrPv.js";import"./useButtonNavigation-DNBDAoGl.js";import"./useClearButton-DkMzh70e.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DOkVmsgi.js";const Et={title:"Components/Toaster/Toast SystemEvent",component:h},i=g(e.cell,e.headerCell),j=Object.values(T),c=[{label:"Primary",onClick:()=>{}},{label:"Secondary",onClick:()=>{}}];function w({...v}){const{appearance:x="neutral",showAction:n,...s}=v;return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:e.wrapper,children:[t.jsx(p,{label:"Open toast controlled","data-test-id":"toast-trigger",onClick:()=>m.systemEvent[x]({action:n?c:void 0,...s})}),t.jsx(p,{label:"Dismiss Toasters","data-test-id":"toast-dismiss",onClick:()=>m.systemEvent.dismiss()})]}),t.jsxs("div",{className:e.table,style:{"--columns":2},children:[t.jsx("div",{className:i}),t.jsx("div",{className:i,children:"Appearance"}),j.map(r=>t.jsxs(f.Fragment,{children:[t.jsx("div",{className:i,children:r}),t.jsx("div",{className:g(e.cell,e.toastContainer),children:t.jsx(h,{...s,appearance:r,className:e.systemEvent,"data-test-id":"",action:n?c:void 0})})]},r))]})]})}const o={render:w,args:{appearance:"neutral",title:"Title truncate two line",description:"Description truncate four line",progressBar:!0,closable:!0,link:{text:"Link text",href:"#"},onCloseClick:void 0,showAction:!0},argTypes:{showAction:{name:"[story] show action buttons"}},parameters:{readme:{sidebar:[`Latest version: ${a.version}`,k,C]},packageName:a.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A196736&mode=design"}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  args: {
    appearance: 'neutral',
    title: 'Title truncate two line',
    description: 'Description truncate four line',
    progressBar: true,
    closable: true,
    link: {
      text: 'Link text',
      href: '#'
    },
    onCloseClick: undefined,
    showAction: true
  },
  argTypes: {
    showAction: {
      name: '[story] show action buttons'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A196736&mode=design'
    }
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};export{Et as default,o as toastSystemEvent};
