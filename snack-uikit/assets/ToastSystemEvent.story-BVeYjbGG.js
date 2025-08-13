import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{c as g}from"./index-DUmpqB7p.js";import{r as f}from"./index-CJ_LmFaV.js";import{c as i,a as k,b as C,s as t}from"./styles.module-DWvY-FUk.js";import{T as h,t as m,a as T}from"./helpers-1A6x4gon.js";import{B as c}from"./ButtonFilled-BLfaiW75.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-Chjiymov.js";import"./LocaleProvider-CyhbxqE1.js";import"./index-DOM9zHVr.js";import"./index-DhD2neKD.js";import"./index-CAYnss5D.js";import"./Scroll-B3e6J9cA.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./ProgressBar-DTDq07Fs.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-DYaIcqfi.js";import"./index-DOUS9uWn.js";import"./index-Dj3Kdo0x.js";import"./TruncateString-NSjc3XzO.js";import"./Tooltip-C67siN8J.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-JZGyZbA2.js";import"./Link-Bfb-ZlTv.js";import"./Sun-WJ2YftH0.js";import"./constants-BAH7I9kc.js";import"./utils-DzobPs8h.js";import"./Counter-CRGhF3Kb.js";const ne={title:"Components/Toaster/Toast SystemEvent",component:h},a=g(t.cell,t.headerCell),j=Object.values(T),p=[{label:"Primary",onClick:()=>{}},{label:"Secondary",onClick:()=>{}}];function w({...v}){const{appearance:x="neutral",showAction:o,...r}=v;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:t.wrapper,children:[e.jsx(c,{label:"Open toast controlled","data-test-id":"toast-trigger",onClick:()=>m.systemEvent[x]({action:o?p:void 0,...r})}),e.jsx(c,{label:"Dismiss Toasters","data-test-id":"toast-dismiss",onClick:()=>m.systemEvent.dismiss()})]}),e.jsxs("div",{className:t.table,style:{"--columns":2},children:[e.jsx("div",{className:a}),e.jsx("div",{className:a,children:"Appearance"}),j.map(s=>e.jsxs(f.Fragment,{children:[e.jsx("div",{className:a,children:s}),e.jsx("div",{className:g(t.cell,t.toastContainer),children:e.jsx(h,{...r,appearance:s,className:t.systemEvent,"data-test-id":"",action:o?p:void 0})})]},s))]})]})}const n={render:w,args:{appearance:"neutral",title:"Title truncate two line",description:"Description truncate four line",progressBar:!0,closable:!0,link:{text:"Link text",href:"#"},onCloseClick:void 0,showAction:!0},argTypes:{showAction:{name:"[story] show action buttons"}},parameters:{readme:{sidebar:[`Latest version: ${i.version}`,k,C]},packageName:i.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A196736&mode=design"}}};var l,d,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};export{ne as default,n as toastSystemEvent};
