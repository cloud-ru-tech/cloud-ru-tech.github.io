import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{a as u,g as v,A as N,c as g,d as f,e as P,f as T,s as w}from"./styles.module-Mlt8zbYE.js";import{c as B}from"./index-CXM-PPQz.js";import{C as h}from"./index-DHAmGKAZ.js";import{T as k}from"./TruncateString-Cw8qBX1n.js";import{L as j}from"./Link-C4t_crgO.js";import{e as L}from"./componentPropsProcessors-UJEZy8aQ.js";import{P as D}from"./index-CTTgWa-s.js";import"./index-ChsGqxH_.js";import"./Sun-BMXO82GS.js";import"./constants-BAH7I9kc.js";import"./index-CAfvFIBF.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-ChnZZ3jk.js";import"./PopoverPrivate-BQgi56s-.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-JZGyZbA2.js";const a={InvertNeutral:"invert-neutral",Primary:"primary",Red:"red",Yellow:"yellow",Green:"green",Blue:"blue"},o={[u.Neutral]:a.InvertNeutral,[u.Primary]:a.Primary,[u.Error]:a.Red,[u.Warning]:a.Yellow,[u.Success]:a.Green,[u.Info]:a.Blue},S="_alertTop_1aewg_1",V="_icon_1aewg_30",F="_title_1aewg_58",b="_description_1aewg_85",R="_contentWrapper_1aewg_113",O="_contentLayout_1aewg_120",q="_textLayout_1aewg_127",I="_actions_1aewg_131",n={alertTop:S,icon:V,title:F,description:b,contentWrapper:R,contentLayout:O,textLayout:q,actions:I};function d({icon:r=!0,title:i,description:s,link:l,onClose:m,truncate:p,appearance:t=u.Neutral,action:_,className:C,...E}){return e.jsxs("div",{className:B(n.alertTop,C),...L(E),"data-color":o[t],children:[e.jsxs("div",{className:n.contentWrapper,children:[r&&e.jsx("div",{className:n.icon,"data-color":o[t],"data-test-id":"alert-top__icon",children:v(t,24)}),e.jsxs("div",{className:n.contentLayout,children:[e.jsxs("div",{className:n.textLayout,children:[i&&e.jsx("div",{className:n.title,"data-color":o[t],"data-test-id":"alert-top__title",children:e.jsx(k,{text:i,maxLines:(p==null?void 0:p.title)??1})}),e.jsx("span",{className:n.description,"data-color":o[t],"data-test-id":"alert-top__description",children:s})]}),l&&e.jsx("span",{children:e.jsx(j,{...l,appearance:N[t],textMode:"on-accent",size:"m","data-test-id":"alert-top__link"})})]})]}),e.jsxs("div",{className:n.actions,children:[_&&e.jsx(g,{..._,appearance:o[t],variant:"tonal"}),m&&e.jsx(g,{onClick:m,appearance:o[t],icon:e.jsx(h,{}),variant:"tonal",dataTestId:"alert-top__close-button"})]})]})}try{d.displayName="AlertTop",d.__docgenInfo={description:"Компонент для отображения уведомления вверху экрана.",displayName:"AlertTop",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"true"},description:"Отображать иконку",name:"icon",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Заголовок",name:"title",required:!1,type:{name:"string"}},truncate:{defaultValue:{value:"'{ <br>title: 1 }'"},description:"Максимальное кол-во строк\n<br> - `title` - в заголовке",name:"truncate",required:!1,type:{name:"{ title?: number; }"}},description:{defaultValue:null,description:"Описание",name:"description",required:!0,type:{name:"ReactNode"}},link:{defaultValue:null,description:"Cсылка",name:"link",required:!1,type:{name:`(Pick<{ 'data-test-id'?: string; } & AriaAttributes & { text?: string; size?: Size | undefined; purpose?: Purpose | undefined; appearance?: Appearance | undefined; textMode?: TextMode | undefined; insideText?: boolean | undefined; } & TruncateEndProps & { ...; } & Omit<...>, "text" | ... 1 mo...`}},action:{defaultValue:null,description:"Кнопка дополнительного действия",name:"action",required:!1,type:{name:"AlertButtonProps"}},onClose:{defaultValue:null,description:"Колбек закрытия",name:"onClose",required:!1,type:{name:"(() => void)"}},appearance:{defaultValue:{value:"neutral"},description:"Внешний вид",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"error"'},{value:'"warning"'},{value:'"success"'},{value:'"info"'}]}},className:{defaultValue:null,description:"CSS-класс",name:"className",required:!1,type:{name:"string"}}}}}catch{}const le={title:"Components/Alert/AlertTop",component:d},G=({link:r,showCloseButton:i,...s})=>e.jsx("div",{className:w.wrapper,children:e.jsx(d,{...s,link:r?{text:r,href:"#",onClick:l=>{l.preventDefault()}}:void 0,onClose:i?s.onClose:void 0})}),c={render:G,args:{title:"Title",description:"Description",icon:!0,link:"Link text",appearance:u.Success,action:{text:"Button Text",icon:e.jsx(D,{}),onClick:()=>{}},onClose:()=>{},showCloseButton:!0},argTypes:{showCloseButton:{name:"[Stories]: showCloseButton"},onClose:{table:{disable:!0}},description:{type:"string"},link:{type:"string"}},parameters:{readme:{sidebar:[`Latest version: ${f.version}`,P,T]},packageName:f.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A182904&mode=design"}}};var A,x,y;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Title',
    description: 'Description',
    icon: true,
    link: 'Link text',
    appearance: APPEARANCE.Success,
    action: {
      text: 'Button Text',
      icon: <Icons.PlaceholderSVG />,
      onClick: () => {}
    },
    onClose: () => {},
    showCloseButton: true
  },
  argTypes: {
    showCloseButton: {
      name: '[Stories]: showCloseButton'
    },
    onClose: {
      table: {
        disable: true
      }
    },
    description: {
      type: 'string'
    },
    link: {
      type: 'string'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A182904&mode=design'
    }
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};export{c as alertTop,le as default};
