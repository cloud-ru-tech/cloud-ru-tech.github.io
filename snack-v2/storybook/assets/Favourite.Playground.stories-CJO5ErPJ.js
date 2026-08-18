import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Du0zU9lI.js";import{_ as c,m as l,o as u,t as d}from"./src-NMYuwSlG.js";import{n as f,t as p}from"./testIds-qlmU7fvP.js";var m,h,g,_,v,y,b,x;e((()=>{d(),o(),f(),m=t(),{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Inputs & Forms/Toggles/Favourite`,id:`components-toggles-favourite`,component:u,parameters:{layout:`fullscreen`}},y=e=>{let[{checked:t},o]=h();return(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`Playground`}),(0,m.jsx)(i,{children:`Кнопка добавления в избранное с двумя состояниями.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(u,{...e,checked:t,onChange:e=>o({checked:e})})})]})})},b={tags:[`dev`,`test`],render:y,play:async({canvasElement:e})=>{await g(_(e).getByTestId(p.favourite.root)).toBeVisible()},args:{size:c.XS,icon:l.Star,checked:void 0,defaultChecked:void 0,loading:!1,disabled:!1,"data-test-id":p.favourite.root},argTypes:{checked:{control:`boolean`},defaultChecked:{control:`boolean`},size:{control:`radio`,options:Object.values(c),description:`Размер`},icon:{control:`radio`,options:Object.values(l),description:`Иконка`},"data-test-id":{control:`text`,description:`Test ID для автотестов`,table:{category:`HTML Attributes`}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: Template,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.favourite.root)).toBeVisible();
  },
  args: {
    size: SIZE.XS,
    icon: FAVOURITE_ICON.Star,
    checked: undefined,
    defaultChecked: undefined,
    loading: false,
    disabled: false,
    'data-test-id': TEST_IDS.favourite.root
  },
  argTypes: {
    checked: {
      control: 'boolean'
    },
    defaultChecked: {
      control: 'boolean'
    },
    size: {
      control: 'radio',
      options: Object.values(SIZE),
      description: 'Размер'
    },
    icon: {
      control: 'radio',
      options: Object.values(FAVOURITE_ICON),
      description: 'Иконка'
    },
    'data-test-id': {
      control: 'text',
      description: 'Test ID для автотестов',
      table: {
        category: 'HTML Attributes'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}))();export{b as Playground,x as __namedExportsOrder,v as default};
//# sourceMappingURL=Favourite.Playground.stories-CJO5ErPJ.js.map