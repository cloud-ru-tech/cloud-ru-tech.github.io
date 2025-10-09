import{j as n}from"./jsx-runtime-BTJTZTIL.js";import{T as t,n as S,c as g,a as P,b as v,D as s,s as w}from"./DemoComponent-Bn8XSKzz.js";import{c as j}from"./index-DUmpqB7p.js";import{e as x}from"./componentPropsProcessors-UJEZy8aQ.js";import"./index-ChsGqxH_.js";import"./Typography-DLfEOGp8.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";const E=(e,i)=>e<1?t.roles.Start:e<i-1?t.roles.Center:t.roles.End,_=(e,i,o,a)=>{if(o)return o;if(!a)return e;switch(e){case t.contentPositions.Right:return i%2?t.contentPositions.Left:t.contentPositions.Right;case t.contentPositions.Left:return i%2?t.contentPositions.Right:t.contentPositions.Left;default:return S(e)}},b="_timeline_16dgb_1",A="_timelineWrapper_16dgb_7",f={timeline:b,timelineWrapper:A};function l({items:e,fullWidth:i,contentPosition:o=t.contentPositions.Right,alternate:a,className:m,...p}){return n.jsx("div",{className:f.timelineWrapper,"data-full-width":i||void 0,"data-test-id":"timeline-track",children:n.jsx("div",{className:j(f.timeline,m),...x(p),children:e.map(({contentPosition:c,...D},d)=>n.jsx(t,{contentPosition:_(o,d,c,a),role:E(d,e.length),alternateMode:a,showLines:e.length>1,...D},d))})})}try{l.displayName="Timeline",l.__docgenInfo={description:"",displayName:"Timeline",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"Пункты таймлайна",name:"items",required:!0,type:{name:"TimelineItem[]"}},contentPosition:{defaultValue:{value:"right"},description:"Положение контента",name:"contentPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},alternate:{defaultValue:null,description:"Перемешать положение контента",name:"alternate",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"Сделать таймлайн во всю ширину",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"CSS-класс для элемента с контентом",name:"className",required:!1,type:{name:"string"}}}}}catch{}const L={title:"Components/Timeline/Timeline",component:l},T=()=>n.jsx("span",{children:"Opposite"}),u=[{content:n.jsx(s,{title:"Start",description:"Description"},"start"),dotAppearance:"primary"},{content:n.jsx(s,{title:"Center",description:"Description"},"center"),lineStyle:"dashed"},{content:n.jsx(s,{title:"Sub Center",description:"Some very long description compared to others"},"subCenter"),lineStyle:"dashed",dotVariant:"subEvent",dotAppearance:"red"},{content:n.jsx(s,{title:"End",description:"Description"},"end")}],k=u.map(e=>({...e,opposite:n.jsx(T,{})})),F=({showOpposite:e,contentPosition:i,fullWidth:o,alternate:a,itemsCount:m,...p})=>{const c=(e?k:u).slice(0,m);return n.jsx("div",{className:w.wrapper,children:n.jsx(l,{...p,contentPosition:i,items:c,fullWidth:o,alternate:a})})},r={render:F,args:{alternate:!1,fullWidth:!1,showOpposite:!1,itemsCount:u.length,contentPosition:"right"},argTypes:{showOpposite:{name:"[Story]: Show opposite content",type:"boolean"},itemsCount:{name:"[Story]: Amount of items",defaultValue:u.length,control:{type:"range",min:1,max:u.length,step:1}}},parameters:{readme:{sidebar:[`Latest version: ${g.version}`,P,v]},packageName:g.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A30522&mode=design"}}};var h,y,C;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    alternate: false,
    fullWidth: false,
    showOpposite: false,
    itemsCount: items.length,
    contentPosition: 'right'
  },
  argTypes: {
    showOpposite: {
      name: '[Story]: Show opposite content',
      type: 'boolean'
    },
    itemsCount: {
      name: '[Story]: Amount of items',
      defaultValue: items.length,
      control: {
        type: 'range',
        min: 1,
        max: items.length,
        step: 1
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A30522&mode=design'
    }
  }
}`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};export{L as default,r as timeline};
