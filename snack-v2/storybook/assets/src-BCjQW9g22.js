import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{n,t as r}from"./classnames-iuquYaxc.js";import{i,r as a,t as o}from"./src-CCaBCq3s.js";var s,c,l=t((()=>{s={Simple:`simple`,Outline:`outline`,Elevated:`elevated`},c={S:`s`,M:`m`,L:`l`}})),u,d,f,p,m,h=t((()=>{u=`_acrylic_ipq1p_88`,d=`_block_ipq1p_134`,f=`_borderLayer_ipq1p_139`,p=`_content_ipq1p_21`,m={acrylic:u,block:d,borderLayer:f,content:p}}));function g({children:e,view:t=s.Simple,size:n=c.M,backgroundPredefined:r=a.NeutralBackground1Level,className:o,contentClassName:l,...u}){let{appearance:d,level:f}=i(r);return(0,v.jsxs)(`div`,{className:(0,_.default)(m.block,o),"data-view":t,"data-size":n,"data-acrylic-appearance":d,"data-acrylic-level":f,...u,children:[(0,v.jsx)(`div`,{className:m.acrylic}),t===s.Outline&&(0,v.jsx)(`div`,{className:m.borderLayer}),(0,v.jsx)(`div`,{className:(0,_.default)(m.content,l),children:e})]})}var _,v,y=t((()=>{o(),_=e(r(),1),l(),h(),v=n();try{g.displayName=`Block`,g.__docgenInfo={description:`Компонент-слот для отображения любого содержимого на подложке, имитирующей материал (матовое/полупрозрачное стекло).

Поддерживает:
- Акриловый фон с эффектом backdrop blur
- Визуальные режимы: simple (обычный акрил), outline (с обводкой), elevated (с тенью)
- Палитру подложек через \`backgroundPredefined\`: цвета, \`transparent\` и \`decorTransparent\`
- Различные размеры: s (малый), m (средний), l (большой)
- Гибкое содержимое - принимает любые React children`,displayName:`Block`,filePath:`/builds/sbercloud-ui/tokens-design-system/variables/storybook/packages/block/src/Block.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`storybook/packages/block/src/Block.tsx`,name:`TypeLiteral`},{fileName:`storybook/node_modules/.pnpm/@types+react@18.3.28/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`}],description:`Содержимое`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},view:{defaultValue:{value:`simple`},declarations:[{fileName:`storybook/packages/block/src/Block.tsx`,name:`TypeLiteral`}],description:`Визуальный режим поверхности`,name:`view`,required:!1,tags:{},type:{name:`enum`,raw:`View`,value:[{value:`"outline"`},{value:`"simple"`},{value:`"elevated"`}]}},size:{defaultValue:{value:`m`},declarations:[{fileName:`storybook/packages/block/src/Block.tsx`,name:`TypeLiteral`}],description:`Размер`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`Size`,value:[{value:`"s"`},{value:`"m"`},{value:`"l"`}]}},backgroundPredefined:{defaultValue:{value:`neutralBackground1Level`},declarations:[{fileName:`storybook/packages/block/src/Block.tsx`,name:`TypeLiteral`}],description:"Слой backgroundPredefined + acrylic (см. `BACKGROUND_PREDEFINED_FILL` в `@cloud-ru/ds-materials`).\nЗадаёт палитру подложки: цвета, `transparent` и `decorTransparent`.\nПо умолчанию `material/neutralBackground1Level`.",name:`backgroundPredefined`,required:!1,tags:{},type:{name:`enum`,raw:`BackgroundPredefinedFill`,value:[{value:`"transparent"`},{value:`"decorTransparent"`},{value:`"primaryBackground"`},{value:`"neutralBackground1Level"`},{value:`"redBackground"`},{value:`"orangeBackground"`},{value:`"yellowBackground"`},{value:`"greenBackground"`},{value:`"blueBackground"`},{value:`"violetBackground"`},{value:`"pinkBackground"`}]}},"data-test-id":{defaultValue:null,declarations:[{fileName:`storybook/packages/block/src/Block.tsx`,name:`TypeLiteral`}],description:`Стабильный идентификатор для e2e/tests`,name:`data-test-id`,required:!1,tags:{},type:{name:`string`}},contentClassName:{defaultValue:null,declarations:[{fileName:`storybook/packages/block/src/Block.tsx`,name:`TypeLiteral`}],description:"Класс на внутренний слот содержимого (`.content`). Block — подложка, а не layout-контейнер\n(`display: block`); раскладку контента задаёт потребитель. Этот проп даёт управлять слотом\nсодержимого напрямую — напр. растянуть его по высоте блока (`flex`/`height`), когда корень\nблока сделан flex-контейнером через `className`.",name:`contentClassName`,required:!1,tags:{},type:{name:`string`}}},tags:{example:`\`\`\`tsx
// Базовое использование
<Block>
  <span>Your content here</span>
</Block>

// С визуальным режимом и размером
<Block view={VIEW.Elevated} size={SIZE.L}>
  <h3>Card Title</h3>
  <p>Card content with shadow effect</p>
</Block>

// Режимы и подложки
<Block view={VIEW.Simple} size={SIZE.M}>
  Simple acrylic
</Block>
<Block view={VIEW.Outline} size={SIZE.M}>
  With outline
</Block>
<Block backgroundPredefined={BACKGROUND_PREDEFINED_FILL.DecorTransparent} size={SIZE.M}>
  Transparent matte glass
</Block>
\`\`\``}}}catch{}})),b=t((()=>{})),x=t((()=>{y(),l(),b()}));export{s as a,c as i,g as n,l as o,y as r,x as t};
//# sourceMappingURL=src-BCjQW9g22.js.map