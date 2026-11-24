import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./jsx-runtime-DKU1u6-r.js";import{t as r}from"./classnames-DDqKSqV6.js";import{i,n as a,r as o}from"./backgroundPredefinedFills-Bft-oX4j.js";var s,c;function l(){return(l=e((()=>{s={Simple:`simple`,Outline:`outline`,Elevated:`elevated`},c={S:`s`,M:`m`,L:`l`}})))()}var u,d,f,p,m,h;function g(){return(g=e((()=>{u=`_acrylic_1exem_82`,d=`_block_1exem_131`,f=`_borderLayer_1exem_136`,p=`_header_1exem_357`,m=`_content_1exem_21`,h={acrylic:u,block:d,borderLayer:f,header:p,content:m}})))()}function _({children:e,header:t,view:n=s.Simple,size:r=c.M,backgroundPredefined:i=a.NeutralBackground1Level,className:l,contentClassName:u,...d}){let{appearance:f,level:p}=o(i);return(0,y.jsxs)(`div`,{className:(0,v.default)(h.block,l),"data-view":n,"data-size":r,"data-acrylic-appearance":f,"data-acrylic-level":p,...d,children:[(0,y.jsx)(`div`,{className:h.acrylic}),n===s.Outline&&(0,y.jsx)(`div`,{className:h.borderLayer}),t!=null&&typeof t!=`boolean`&&t!==``&&(0,y.jsx)(`div`,{className:h.header,children:t}),(0,y.jsx)(`div`,{className:(0,v.default)(h.content,u),children:e})]})}var v,y;function b(){return(b=e((()=>{i(),v=t(r(),1),l(),g(),y=n();try{_.displayName=`Block`,_.__docgenInfo={description:`Компонент-слот для отображения любого содержимого на подложке, имитирующей материал (матовое/полупрозрачное стекло).

Поддерживает:
- Акриловый фон с эффектом backdrop blur
- Визуальные режимы: simple (обычный акрил), outline (с обводкой), elevated (с тенью)
- Палитру подложек через \`backgroundPredefined\`: цвета, \`transparent\` и \`decorTransparent\`
- Различные размеры: s (малый), m (средний), l (большой)
- Гибкое содержимое - принимает любые React children`,displayName:`Block`,filePath:`/builds/sbercloud-ui/tokens-design-system/variables/storybook/packages/block/src/Block.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`storybook/packages/block/src/Block.tsx`,name:`TypeLiteral`},{fileName:`storybook/node_modules/.pnpm/@types+react@18.3.28/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`}],description:`Содержимое`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},header:{defaultValue:null,declarations:[{fileName:`storybook/packages/block/src/Block.tsx`,name:`TypeLiteral`}],description:`Содержимое шапки. Растягивается на всю доступную ширину блока.`,name:`header`,required:!1,tags:{},type:{name:`ReactNode`}},view:{defaultValue:{value:`simple`},declarations:[{fileName:`storybook/packages/block/src/Block.tsx`,name:`TypeLiteral`}],description:`Визуальный режим поверхности`,name:`view`,required:!1,tags:{},type:{name:`enum`,raw:`View`,value:[{value:`"simple"`},{value:`"outline"`},{value:`"elevated"`}]}},size:{defaultValue:{value:`m`},declarations:[{fileName:`storybook/packages/block/src/Block.tsx`,name:`TypeLiteral`}],description:`Размер`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`Size`,value:[{value:`"s"`},{value:`"m"`},{value:`"l"`}]}},backgroundPredefined:{defaultValue:{value:`neutralBackground1Level`},declarations:[{fileName:`storybook/packages/block/src/Block.tsx`,name:`TypeLiteral`}],description:"Слой backgroundPredefined + acrylic (см. `BACKGROUND_PREDEFINED_FILL` в `@cloud-ru/ds-materials`).\nЗадаёт палитру подложки: цвета, `transparent` и `decorTransparent`.\nПо умолчанию `material/neutralBackground1Level`.",name:`backgroundPredefined`,required:!1,tags:{},type:{name:`enum`,raw:`BackgroundPredefinedFill`,value:[{value:`"transparent"`},{value:`"decorTransparent"`},{value:`"primaryBackground"`},{value:`"neutralBackground1Level"`},{value:`"redBackground"`},{value:`"orangeBackground"`},{value:`"yellowBackground"`},{value:`"greenBackground"`},{value:`"blueBackground"`},{value:`"violetBackground"`},{value:`"pinkBackground"`}]}},"data-test-id":{defaultValue:null,declarations:[{fileName:`storybook/packages/block/src/Block.tsx`,name:`TypeLiteral`}],description:`Стабильный идентификатор для e2e/tests`,name:`data-test-id`,required:!1,tags:{},type:{name:`string`}},contentClassName:{defaultValue:null,declarations:[{fileName:`storybook/packages/block/src/Block.tsx`,name:`TypeLiteral`}],description:"Класс на внутренний слот содержимого (`.content`). Block — подложка, а не layout-контейнер\n(`display: block`); раскладку контента задаёт потребитель. Этот проп даёт управлять слотом\nсодержимого напрямую — напр. растянуть его по высоте блока (`flex`/`height`), когда корень\nблока сделан flex-контейнером через `className`.",name:`contentClassName`,required:!1,tags:{},type:{name:`string`}}},tags:{example:`\`\`\`tsx
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
\`\`\``}}}catch{}})))()}export{l as a,s as i,b as n,c as r,_ as t};
//# sourceMappingURL=Block-SrxYCSMW.js.map