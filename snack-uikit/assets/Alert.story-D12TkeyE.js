import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{A as s,g as B,a as x,b as P,c as p,d as A,e as k,f as N,s as j}from"./styles.module-rKgPJqCl.js";import{c as w}from"./index-CXM-PPQz.js";import{C as b}from"./index-BQAaeyfQ.js";import{T as S}from"./TruncateString-D6qo2szg.js";import{L as V}from"./Link-CQxl7O4A.js";import{e as T}from"./componentPropsProcessors-UJEZy8aQ.js";import{P as y}from"./index-C9_U387z.js";import"./index-ChsGqxH_.js";import"./Sun-yWcjAHsH.js";import"./constants-BAH7I9kc.js";import"./index-C-NxZ9RO.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-Bvja_9Oj.js";import"./PopoverPrivate-B3hkMTjr.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-JZGyZbA2.js";const O="_alert_1rcm4_1",L="_alertOutline_1rcm4_44",D="_body_1rcm4_85",F="_icon_1rcm4_97",q="_contentLayout_1rcm4_132",R="_title_1rcm4_145",M="_description_1rcm4_165",G="_footer_1rcm4_186",n={alert:O,alertOutline:L,body:D,icon:F,contentLayout:q,title:R,description:M,footer:G};function c({icon:o=!0,title:l,truncate:i,link:r,description:m,onClose:f,appearance:u=x.Neutral,className:v,actions:a,outline:E,size:t="m",...h}){return e.jsxs("div",{className:w(n.alert,{[n.alertOutline]:E},v),...T(h),"data-color":s[u],"data-size":t,children:[e.jsxs("div",{className:n.body,"data-size":t,children:[o&&e.jsx("div",{className:n.icon,"data-color":s[u],"data-test-id":"alert__icon","data-size":t,children:B(u,t==="s"?16:24)}),e.jsxs("div",{className:n.contentLayout,"data-size":t,children:[l&&e.jsx(S,{text:l,maxLines:(i==null?void 0:i.title)??1,className:n.title,"data-test-id":"alert__title","data-size":t}),e.jsx("span",{"data-test-id":"alert__description",className:n.description,"data-size":t,children:m}),r&&e.jsx("span",{children:e.jsx(V,{...r,appearance:P[u],textMode:"default",size:t,"data-test-id":"alert__link"})})]}),f&&e.jsx(p,{onClick:f,appearance:s[u],icon:e.jsx(b,{}),size:t,variant:"simple",dataTestId:"alert__close-button"})]}),a&&e.jsxs("div",{className:n.footer,"data-size":t,children:[a.primary&&e.jsx(p,{...a.primary,appearance:s[u],variant:"simple",size:t}),(a==null?void 0:a.secondary)&&e.jsx(p,{...a.secondary,appearance:s[u],variant:"simple",size:t})]})]})}try{c.displayName="Alert",c.__docgenInfo={description:"Компонент для отображения уведомления.",displayName:"Alert",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"true"},description:"Отображать иконку",name:"icon",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Заголовок",name:"title",required:!1,type:{name:"string"}},truncate:{defaultValue:{value:"'{ <br>title: 1 }'"},description:"Максимальное кол-во строк\n<br> - `title` - в заголовке",name:"truncate",required:!1,type:{name:"{ title?: number; }"}},description:{defaultValue:null,description:"Описание",name:"description",required:!0,type:{name:"ReactNode"}},link:{defaultValue:null,description:"Cсылка",name:"link",required:!1,type:{name:`(Pick<{ 'data-test-id'?: string; } & AriaAttributes & { text?: string; size?: Size | undefined; purpose?: Purpose | undefined; appearance?: Appearance | undefined; textMode?: TextMode | undefined; insideText?: boolean | undefined; } & TruncateEndProps & { ...; } & Omit<...>, "text" | ... 1 mo...`}},onClose:{defaultValue:null,description:"Колбек закрытия",name:"onClose",required:!1,type:{name:"(() => void)"}},appearance:{defaultValue:{value:"neutral"},description:"Внешний вид",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"error"'},{value:'"warning"'},{value:'"success"'},{value:'"info"'}]}},outline:{defaultValue:null,description:"Внешний бордер",name:"outline",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"m"},description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},className:{defaultValue:null,description:"CSS-класс",name:"className",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"Кнопки в футере алерта",name:"actions",required:!1,type:{name:'{ primary: Omit<AlertButtonProps, "appearance">; secondary?: Omit<AlertButtonProps, "appearance">; }'}}}}}catch{}const de={title:"Components/Alert/Alert",component:c},I=({link:o,showCloseButton:l,showActionButtons:i,...r})=>e.jsx("div",{className:j.wrapper,children:e.jsx(c,{...r,link:o?{text:o,href:"#",onClick:m=>{m.preventDefault()}}:void 0,onClose:l?r.onClose:void 0,actions:i?r.actions:void 0})}),d={render:I,args:{title:"Title",description:"Title description",icon:!0,link:"Link text",appearance:x.Error,showCloseButton:!0,showActionButtons:!0,outline:!0,size:"m",onClose:()=>{},actions:{primary:{text:"Primary",onClick:()=>{},icon:e.jsx(y,{}),loading:!1},secondary:{text:"Secondary",onClick:()=>{},icon:e.jsx(y,{}),loading:!0}}},argTypes:{showCloseButton:{name:"[Stories]: showCloseButton"},showActionButtons:{name:"[Stories]: showActionButtons"},link:{type:"string"},description:{type:"string"},onClose:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${A.version}`,k,N]},packageName:A.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A183757&mode=design"}}};var _,g,C;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Title',
    description: 'Title description',
    icon: true,
    link: 'Link text',
    appearance: APPEARANCE.Error,
    showCloseButton: true,
    showActionButtons: true,
    outline: true,
    size: 'm',
    onClose: () => {},
    actions: {
      primary: {
        text: 'Primary',
        onClick: () => {},
        icon: <PlaceholderSVG />,
        loading: false
      },
      secondary: {
        text: 'Secondary',
        onClick: () => {},
        icon: <PlaceholderSVG />,
        loading: true
      }
    }
  },
  argTypes: {
    showCloseButton: {
      name: '[Stories]: showCloseButton'
    },
    showActionButtons: {
      name: '[Stories]: showActionButtons'
    },
    link: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    onClose: {
      table: {
        disable: true
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A183757&mode=design'
    }
  }
}`,...(C=(g=d.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};export{d as alert,de as default};
