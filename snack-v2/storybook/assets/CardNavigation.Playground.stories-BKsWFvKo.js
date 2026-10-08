import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,m as a,p as o,t as s,u as c}from"./iframe-DqaIN90t.js";import{U as l,t as u}from"./system-rCivUuud.js";import{n as d,t as f}from"./src-DEoqE-uz.js";import{n as p,t as m}from"./testIds-DoKLuZkh2.js";import{n as h,t as g}from"./promoTagArgType-BvTt3gfH.js";var _,v,y,b,x,S,C,w;e((()=>{u(),f(),s(),h(),p(),_=t(),{expect:v,fn:y,userEvent:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Uikit Product/Layout & containers/CardPredefined/CardNavigation`,id:`uikit-product-cardpredefined-cardnavigation`,component:d,parameters:{layout:`fullscreen`},args:{title:`Мой сервис`,description:`Краткое описание сервиса для подробного режима карточки.`,icon:(0,_.jsx)(l,{size:24}),"data-test-id":m.cardNavigation,showDescription:!0},argTypes:{onClick:{table:{disable:!0}},onKeyDown:{table:{disable:!0}},expandable:{table:{disable:!0}},description:{if:{arg:`showDescription`,truthy:!0}},tooltip:{table:{disable:!0}},promoTag:g,truncate:{table:{disable:!0}},truncateTitle:{name:`[Stories]: truncate.title`,control:`number`,if:{arg:`showDescription`,truthy:!1}},showDescription:{name:`[Stories]: show description`,control:`boolean`},showExpandButton:{name:`[Stories]: show expand button`,control:`boolean`}},render:({showDescription:e,showExpandButton:t,description:s,truncateTitle:l,...u})=>(0,_.jsx)(r,{children:(0,_.jsxs)(o,{children:[(0,_.jsx)(i,{children:`Playground`}),(0,_.jsx)(n,{children:`Без описания — компактный вид, с описанием — подробный. Тяните за угол — меняется ширина.`}),(0,_.jsx)(c,{block:!0,children:(0,_.jsx)(a,{children:(0,_.jsx)(d,{...u,description:e?s:void 0,tooltip:e?void 0:{tip:`Подсказка компактного вида`},expandable:t?{value:!1,onClick:y()}:void 0,truncate:l===void 0?void 0:{title:l}})})})]})})},C={tags:[`dev`,`test`],args:{onClick:y(),actionsVisibility:`hover`,favorite:{enabled:!0,onChange:y()}},play:async({canvasElement:e})=>{let t=x(e),n=t.getByTestId(m.cardNavigation);await v(n).toBeVisible(),await v(t.queryByTestId(m.cardNavigationFavorite)).toBeNull(),await b.hover(n),await v(t.getByTestId(m.cardNavigationFavorite)).toBeInTheDocument()}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    onClick: fn(),
    actionsVisibility: 'hover',
    favorite: {
      enabled: true,
      onChange: fn()
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId(TEST_IDS.cardNavigation);
    await expect(card).toBeVisible();

    // Панель действий монтируется лениво — по первому наведению.
    await expect(canvas.queryByTestId(TEST_IDS.cardNavigationFavorite)).toBeNull();
    await userEvent.hover(card);
    await expect(canvas.getByTestId(TEST_IDS.cardNavigationFavorite)).toBeInTheDocument();
  }
}`,...C.parameters?.docs?.source}}},w=[`Playground`]}))();export{C as Playground,w as __namedExportsOrder,S as default};
//# sourceMappingURL=CardNavigation.Playground.stories-BKsWFvKo.js.map