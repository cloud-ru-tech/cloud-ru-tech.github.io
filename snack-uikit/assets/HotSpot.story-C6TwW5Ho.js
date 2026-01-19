import{j as n}from"./jsx-runtime-BTJTZTIL.js";import{c}from"./index-DUmpqB7p.js";import{e as l}from"./componentPropsProcessors-UJEZy8aQ.js";import{P as F}from"./index-CTTgWa-s.js";import{B as _}from"./ButtonFilled-BPNiFYIg.js";import{T as O}from"./Tooltip-DzAF_V2U.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CJ_LmFaV.js";import"./utils-BAQJ5MUP.js";import"./Counter-DVviqi6b.js";import"./Sun-BLz2v2u6.js";import"./constants-BAH7I9kc.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";const G=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.4.9 (2025-09-01)

### Only dependencies have been changed
* [@snack-uikit/utils@4.0.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.4.8 (2025-07-16)

### Only dependencies have been changed
* [@snack-uikit/utils@3.10.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.4.7 (2025-07-15)

### Only dependencies have been changed
* [@snack-uikit/utils@3.10.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.4.6 (2025-07-07)

### Only dependencies have been changed
* [@snack-uikit/utils@3.9.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.4.5 (2025-05-16)

### Only dependencies have been changed
* [@snack-uikit/utils@3.8.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.4.4 (2025-03-17)

### Only dependencies have been changed
* [@snack-uikit/utils@3.8.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.4.3 (2025-03-04)

### Only dependencies have been changed
* [@snack-uikit/utils@3.8.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.4.2 (2025-01-23)

### Only dependencies have been changed
* [@snack-uikit/utils@3.7.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.4.1 (2024-12-12)

### Only dependencies have been changed
* [@snack-uikit/utils@3.6.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





# 0.4.0 (2024-10-28)


### Features

* **FF-5782:** sass use/forward approach ([3e53869](https://github.com/cloud-ru-tech/snack-uikit/commit/3e53869ace864a7718e434b7f410c15dbd911cd5))





# 0.3.0 (2024-10-28)


### Features

* **FF-5502:** add cjs build ([ffada28](https://github.com/cloud-ru-tech/snack-uikit/commit/ffada28bfdc37ea760eb1c8759342e680bdf8dd6))





## 0.2.1 (2024-09-23)

### Only dependencies have been changed
* [@snack-uikit/utils@3.4.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





# 0.2.0 (2024-08-14)


### Features

* **PDS-459:** add cn to hot spot ([89d508d](https://github.com/cloud-ru-tech/snack-uikit/commit/89d508dc6dd34fed0f6f786ab04e19d925822544))





## 0.1.1 (2024-05-22)


### Bug Fixes

* **PDS-103:** children ([240c2da](https://github.com/cloud-ru-tech/snack-uikit/commit/240c2da0dec104179d87b77e0ffb3741ccd43ff7))





# 0.1.0 (2024-05-21)


### Features

* **PDS-103:** add hot-spot ([9c94e07](https://github.com/cloud-ru-tech/snack-uikit/commit/9c94e07a3d6ffa95030b2d571606737a9c61bddd))





## CHANGELOG

### v0.0.0

- Initial version
`,H="@snack-uikit/hot-spot",x="0.4.9",d={name:H,version:x},A=`# Hotspot

## Description

- Компонент **HotSpot** добавляет к любому контенту (или отображает отдельно) интерактивную точку‑индикатор с настраиваемым внешним видом и анимацией пульсации.
- Позволяет гибко управлять положением точки относительно дочернего контента через предустановленные варианты \`placement\` и точные смещения по осям \`offsetX\`/\`offsetY\`.
- Поддерживает включение/отключение анимации и самого индикатора через пропсы \`pulse\` и \`enabled\`, что удобно для сценариев с динамическими подсказками или состояниями.
- Через проп \`dotRender\` можно обернуть индикатор в дополнительные компоненты (например, тултип) и расширить взаимодействие с пользователем.
- При отсутствии \`children\` компонент может использоваться как самостоятельный индикатор‑точка без привязки к какому‑либо элементу.
- Figma: [\`HotSpot\`](https://www.figma.com/design/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-5.0.0?node-id=4799-2805)

## Installation

\`npm i @snack-uikit/hot-spot\`

[Changelog](./CHANGELOG.md)

## Example

\`\`\`tsx
import { HotSpot } from '@snack-uikit/hot-spot';
import { ButtonFilled } from '@snack-uikit/button';
import { Tooltip } from '@snack-uikit/tooltip';

export const HotSpotExample = () => (
  <HotSpot
    appearance='primary'
    placement='right-top'
    pulse
    duration='2s'
    offsetX={8}
    offsetY={-8}
    enabled
    dotRender={dot => (
      <Tooltip placement='bottom' tip='HotSpot dotRender' trigger='click'>
        {dot}
      </Tooltip>
    )}
  >
    <ButtonFilled appearance='neutral' label='Send Message' />
  </HotSpot>
);
\`\`\`

[//]: DOCUMENTATION_SECTION_START
[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT
## HotSpot
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| appearance | enum Appearance: \`"neutral"\`, \`"primary"\`, \`"red"\`, \`"orange"\`, \`"yellow"\`, \`"green"\`, \`"blue"\`, \`"violet"\`, \`"pink"\` | primary | Внешний вид |
| pulse | \`boolean\` | true | Анимация пульсации |
| duration | \`string\` | 2s | Время анимации пульсации |
| placement | enum Placement: \`"left"\`, \`"left-top"\`, \`"left-bottom"\`, \`"right"\`, \`"right-top"\`, \`"right-bottom"\`, \`"center"\`, \`"center-top"\`, \`"center-bottom"\` | right-top | Положение относительно children. |
| dotRender | \`(dot: ReactNode) => ReactNode\` | - | Рендер функция для dot |
| children | \`ReactNode\` | - | Вложенный контент |
| offsetX | \`string \\| number\` | - | Смещение dot по оси X (ось направлена вправо) |
| offsetY | \`string \\| number\` | - | Смещение dot по оси Y (ось направлена вниз) |
| enabled | \`boolean\` | true | Управление состоянием отрисовки |
| className | \`string\` | - | CSS-класс |
| wrapperClassName | \`string\` | - |  |


[//]: DOCUMENTATION_SECTION_END
`,T="_dotPlacementContainer_1489t_1",w="_hotSpotDot_1489t_32",R="_hotSpotDotContainer_1489t_84",P="_wrapper_1489t_111",u={dotPlacementContainer:T,hotSpotDot:w,hotSpotDotContainer:R,wrapper:P},p="hot-spot",m={dot:`${p}__dot`,dotContainer:`${p}__dot-container`};function h(e=0){return typeof e!="number"?e:e>=0?`${e}px`:`calc(0px - ${Math.abs(e)}px)`}function i({dotRender:e,children:t,offsetX:r=0,offsetY:k=0,placement:v="right-top",duration:y="2s",pulse:C=!0,enabled:S=!0,appearance:E="primary",className:N,wrapperClassName:D,...s}){if(!S)return n.jsx(n.Fragment,{children:t});const a=n.jsx("div",{className:c(u.hotSpotDot,N),"data-appearance":E,"data-pulse":C||void 0,"data-test-id":m.dot});return t?n.jsxs("div",{...l(s),className:c(u.wrapper,D),style:{"--offset-x":h(r),"--offset-y":h(k),"--duration":y},children:[t,n.jsx("span",{className:u.dotPlacementContainer,"data-placement":v,"data-test-id":m.dotContainer,children:n.jsx("span",{className:u.hotSpotDotContainer,children:e?e(a):a})})]}):n.jsx("span",{...l(s),className:u.hotSpotDotContainer,children:e?e(a):a})}try{i.displayName="HotSpot",i.__docgenInfo={description:"",displayName:"HotSpot",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},appearance:{defaultValue:{value:"primary"},description:"Внешний вид",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"neutral"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'},{value:'"violet"'},{value:'"pink"'}]}},pulse:{defaultValue:{value:"true"},description:"Анимация пульсации",name:"pulse",required:!1,type:{name:"boolean"}},duration:{defaultValue:{value:"2s"},description:"Время анимации пульсации",name:"duration",required:!1,type:{name:"string"}},placement:{defaultValue:{value:"right-top"},description:"Положение относительно children.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"left-top"'},{value:'"left-bottom"'},{value:'"right-top"'},{value:'"right-bottom"'},{value:'"center-top"'},{value:'"center-bottom"'}]}},dotRender:{defaultValue:null,description:"Рендер функция для dot",name:"dotRender",required:!1,type:{name:"((dot: ReactNode) => ReactNode)"}},children:{defaultValue:null,description:"Вложенный контент",name:"children",required:!1,type:{name:"ReactNode"}},offsetX:{defaultValue:{value:"0"},description:"Смещение dot по оси X (ось направлена вправо)",name:"offsetX",required:!1,type:{name:"string | number"}},offsetY:{defaultValue:{value:"0"},description:"Смещение dot по оси Y (ось направлена вниз)",name:"offsetY",required:!1,type:{name:"string | number"}},enabled:{defaultValue:{value:"true"},description:"Управление состоянием отрисовки",name:"enabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},wrapperClassName:{defaultValue:null,description:"",name:"wrapperClassName",required:!1,type:{name:"string"}}}}}catch{}const ue={title:"Components/HotSpot",component:i},j=({showDotRender:e,...t})=>n.jsx(i,{...t,dotRender:e?r=>n.jsx(O,{placement:"bottom",tip:"HotSpot dotRender",trigger:"click",children:r}):void 0,children:n.jsx(_,{appearance:"neutral",label:"Send Message",icon:n.jsx(F,{})})}),o={render:j,args:{appearance:"primary",placement:"right-top",pulse:!0,offsetX:8,offsetY:-8,showDotRender:!0,enabled:!0,duration:"2s"},argTypes:{offsetX:{type:"number"},offsetY:{type:"number"},duration:{if:{eq:!0,arg:"pulse"}},dotRender:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${d.version}`,A,G]},packageName:d.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/design/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-5.0.0?node-id=4799-2805"}}};var f,g,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    appearance: 'primary',
    placement: 'right-top',
    pulse: true,
    offsetX: 8,
    offsetY: -8,
    showDotRender: true,
    enabled: true,
    duration: '2s'
  },
  argTypes: {
    offsetX: {
      type: 'number'
    },
    offsetY: {
      type: 'number'
    },
    duration: {
      if: {
        eq: true,
        arg: 'pulse'
      }
    },
    dotRender: {
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
      url: 'https://www.figma.com/design/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-5.0.0?node-id=4799-2805'
    }
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};export{ue as default,o as hotSpot};
