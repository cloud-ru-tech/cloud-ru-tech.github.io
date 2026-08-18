import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-Du0zU9lI.js";import{Ut as u,t as d}from"./system-B3b9qWhT.js";import{i as f,t as p}from"./src-ojWFkzki2.js";import{a as m,i as h}from"./constants-UFxjouOX.js";import{n as g,t as _}from"./testIds-IGpnKdFK.js";import{n as v,r as y,t as b}from"./helpers-rcWm3oD6.js";import{n as x,t as S}from"./styles.module-B4-CNFbL.js";var C,w,T,E,D,O,k,A,j,M;t((()=>{d(),p(),C=e(n(),1),c(),m(),v(),g(),S(),w=r(),{expect:T,within:E}=__STORYBOOK_MODULE_TEST__,D={All:`All`,Service:`Service`,System:`System`},O={title:`Uikit Product/Feedback/Notification/NotificationPanelContent`,id:`uikit-product-notification-notificationpanelcontent`,component:f,parameters:{layout:`fullscreen`}},k=({amount:e,groupSize:t,stackSize:n,showDivider:r,showError:c,stackTitle:d,readAllButton:p,segments:m,loading:h,...g})=>{let[_,v]=(0,C.useState)(D.All),[S,T]=(0,C.useState)(!1),[E,O]=(0,C.useState)(!1),k=(0,C.useMemo)(()=>{let t=b(e).map(e=>({...e,unread:!S&&e.unread}));return E?t.filter(e=>e.unread):t},[e,S,E]),A=c?(0,w.jsx)(f.Blank,{icon:{icon:u,appearance:`neutral`},title:`Мы уже это исправляем`,content:`Ваши уведомления скоро появятся здесь`}):y({cards:k,groupSize:t,stackSize:n,showDivider:r,stackTitle:d,loading:h});return(0,w.jsx)(l,{children:(0,w.jsxs)(a,{children:[(0,w.jsx)(s,{children:`Playground`}),(0,w.jsx)(o,{children:`Панель уведомлений: заголовок, фильтры, группы, стеки, divider, blank, loading и error.`}),(0,w.jsx)(i,{block:!0,children:(0,w.jsx)(`div`,{className:x.container,children:(0,w.jsx)(f,{...g,loading:!c&&h,content:A,readAllButton:p&&{...p,onClick:()=>T(e=>!e)},segments:m&&{...m,value:_,onChange:e=>v(String(e))},chipToggle:{label:`Непрочитанные`,checked:E,onChange:O}})})})]})})},A=(e,t)=>({control:{type:`range`,min:e,max:t,step:1}}),j={tags:[`dev`,`test`],render:k,args:{...h,amount:20,groupSize:2,stackSize:3,showDivider:!1,showError:!1,stackTitle:`Стопка карточек`,segments:{items:[{value:D.All,label:`Все`,counter:20},{value:D.Service,label:`Сервисные`,counter:8},{value:D.System,label:`Системные`,counter:4}],value:D.All},settings:{button:{as:`a`,href:`#`}},"data-test-id":_.panel.root},argTypes:{amount:{name:`[Stories]: Кол-во карточек`,...A(0,100)},groupSize:{name:`[Stories]: Размер группы`,...A(0,10)},stackSize:{name:`[Stories]: Размер стопки`,...A(0,5)},showDivider:{name:`[Stories]: Divider read/unread`},showError:{name:`[Stories]: Состояние ошибки`},stackTitle:{name:`[Stories]: Заголовок стопки`,if:{arg:`stackSize`,truthy:!0}},segments:{table:{disable:!0}},chipToggle:{table:{disable:!0}},scrollEndRef:{table:{disable:!0}},scrollContainerRef:{table:{disable:!0}},"data-test-id":{table:{disable:!0}}},play:async({canvasElement:e})=>{await T(E(e).getByTestId(_.panel.title)).toBeVisible()}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: Template,
  args: {
    ...NOTIFICATION_PANEL_PROPS_MOCK,
    amount: 20,
    groupSize: 2,
    stackSize: 3,
    showDivider: false,
    showError: false,
    stackTitle: 'Стопка карточек',
    segments: {
      items: [{
        value: SEGMENT_FILTER.All,
        label: 'Все',
        counter: 20
      }, {
        value: SEGMENT_FILTER.Service,
        label: 'Сервисные',
        counter: 8
      }, {
        value: SEGMENT_FILTER.System,
        label: 'Системные',
        counter: 4
      }],
      value: SEGMENT_FILTER.All
    },
    settings: {
      button: {
        as: 'a',
        href: '#'
      }
    },
    'data-test-id': TEST_IDS.panel.root
  },
  argTypes: {
    amount: {
      name: '[Stories]: Кол-во карточек',
      ...range(0, 100)
    },
    groupSize: {
      name: '[Stories]: Размер группы',
      ...range(0, 10)
    },
    stackSize: {
      name: '[Stories]: Размер стопки',
      ...range(0, 5)
    },
    showDivider: {
      name: '[Stories]: Divider read/unread'
    },
    showError: {
      name: '[Stories]: Состояние ошибки'
    },
    stackTitle: {
      name: '[Stories]: Заголовок стопки',
      if: {
        arg: 'stackSize',
        truthy: true
      }
    },
    segments: {
      table: {
        disable: true
      }
    },
    chipToggle: {
      table: {
        disable: true
      }
    },
    scrollEndRef: {
      table: {
        disable: true
      }
    },
    scrollContainerRef: {
      table: {
        disable: true
      }
    },
    'data-test-id': {
      table: {
        disable: true
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.panel.title)).toBeVisible();
  }
}`,...j.parameters?.docs?.source}}},M=[`Playground`]}))();export{j as Playground,M as __namedExportsOrder,O as default};
//# sourceMappingURL=NotificationPanelContent.Playground.stories-CIQA0BBv.js.map