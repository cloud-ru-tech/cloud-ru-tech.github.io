import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{c as y}from"./index-DUmpqB7p.js";import{r as b}from"./index-CJ_LmFaV.js";import{c as d,a as j,b as h,s as l}from"./styles.module-Dr5kXbyO.js";import{a as p,A as m,S as N}from"./StatusIndicator-CYB2GcDY.js";import{S as _}from"./Spinner-DZPrD8kc.js";import{e as k}from"./componentPropsProcessors-UJEZy8aQ.js";import{T as A}from"./TruncateString-d_nSHKm-.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./constants-BAH7I9kc.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";const n={Xs:"xs",S:"s"},P={[n.Xs]:p.Xs,[n.S]:p.S},E={[n.Xs]:"xxs",[n.S]:"xs"},C="_container_17tcc_1",I="_label_17tcc_9",g={container:C,label:I};function o({label:i,size:s=n.Xs,appearance:c=m.Primary,hasBackground:t,loading:a,className:r,...S}){return e.jsxs("div",{className:y(g.container,r),...k(S),"data-size":s,"data-has-background":t||void 0,"data-appearance":a?m.Neutral:c,children:[a?e.jsx(_,{size:E[s]}):e.jsx(N,{appearance:c,size:P[s]}),e.jsx(A,{text:i,maxLines:1,className:g.label,"data-test-id":"status__title","data-size":s})]})}try{o.displayName="Status",o.__docgenInfo={description:"",displayName:"Status",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Текст",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"xs"},description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'}]}},appearance:{defaultValue:{value:"primary"},description:"Внешний вид",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'},{value:'"violet"'},{value:'"pink"'}]}},hasBackground:{defaultValue:null,description:"Наличие фона",name:"hasBackground",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Q={title:"Components/Status/Status",component:o},w=({...i})=>{const s=Object.values(n),c=Object.values(m),t=y(l.cell,l.headerCell);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:l.wrapper,children:["Controlled:",e.jsx(o,{...i})]}),e.jsxs("div",{className:l.table,style:{"--columns":5},children:[e.jsx("div",{className:t,style:{gridRow:"1 / 3"}}),e.jsx("div",{className:t,style:{gridColumn:"2 / 4"},children:"No background"}),e.jsx("div",{className:t,style:{gridColumn:"4 / 6"},children:"Background"}),s.map(a=>e.jsx("div",{className:t,children:a},a)),s.map(a=>e.jsx("div",{className:t,children:a},a)),c.map(a=>e.jsxs(b.Fragment,{children:[e.jsx("div",{className:t,children:a}),s.map(r=>e.jsx("div",{className:l.cell,children:e.jsx(o,{size:r,appearance:a,hasBackground:!1,label:"Label text"})},r)),s.map(r=>e.jsx("div",{className:l.cell,children:e.jsx(o,{size:r,appearance:a,hasBackground:!0,label:"Label text"})},r))]},a))]})]})},u={render:w,args:{size:n.S,appearance:m.Primary,label:"Label text",hasBackground:!1,loading:!1},argTypes:{size:{options:Object.values(n),control:{type:"radio"}},appearance:{control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${d.version}`,j,h]},packageName:d.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A21940&mode=design"}}};var v,x,f;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: SIZE.S,
    appearance: APPEARANCE.Primary,
    label: 'Label text',
    hasBackground: false,
    loading: false
  },
  argTypes: {
    size: {
      options: Object.values(SIZE),
      control: {
        type: 'radio'
      }
    },
    appearance: {
      control: {
        type: 'select'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A21940&mode=design'
    }
  }
}`,...(f=(x=u.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};export{Q as default,u as status};
