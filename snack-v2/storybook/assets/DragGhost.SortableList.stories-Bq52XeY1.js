import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r,t as i}from"./classnames-iuquYaxc.js";import{c as a,d as o,l as s,m as c,t as l,u}from"./iframe-DMWsC78w.js";import{S as d,b as f,l as p,m,n as h,s as g,t as _,x as v,y}from"./core.esm-kZGH3lAy.js";import{i as b,n as x,o as S,s as C,t as w}from"./sortable.esm-XWLaAMhe.js";import{c as T,f as E,i as D,o as O,t as k,u as A}from"./src-DkDQwBir.js";import{n as j,t as M}from"./stories.module-D3U40748.js";function N({id:e,label:t,mode:n,lastIndex:r}){let{activeIndex:i,attributes:a,index:o,isDragging:s,listeners:c,overIndex:l,setNodeRef:u,transform:d,transition:f}=S({id:e}),p=n===A.Dynamic,m=!p&&i!==-1&&o===l&&o!==i,h=l>i?E.After:E.Before;return(0,L.jsxs)(T,{innerRef:u,dragging:s,mode:n,className:j.grabbable,style:p?{transform:v.Translate.toString(d),transition:f}:void 0,"data-test-id":e,...a,...c,children:[(0,L.jsx)(`div`,{className:j.row,children:t}),m&&(0,L.jsx)(D,{placement:h,atEdge:o===0&&h===E.Before||o===r&&h===E.After})]})}function P({mode:e=A.Static}){let[t,n]=(0,I.useState)(V),[r,i]=(0,I.useState)(),a=f(y(g,{activationConstraint:{distance:4}})),o=t.find(e=>e.id===r);return(0,L.jsxs)(_,{sensors:a,collisionDetection:p,onDragStart:({active:e})=>i(String(e.id)),onDragCancel:()=>i(void 0),onDragEnd:({active:e,over:t})=>{i(void 0),!(!t||e.id===t.id)&&n(n=>x(n,n.findIndex(t=>t.id===e.id),n.findIndex(e=>e.id===t.id)))},children:[(0,L.jsx)(w,{items:t.map(e=>e.id),strategy:C,children:(0,L.jsx)(`div`,{className:(0,F.default)(j.canvas,j.list),"data-test-id":B,children:t.map(n=>(0,L.jsx)(N,{id:n.id,label:n.label,mode:e,lastIndex:t.length-1},n.id))})}),(0,L.jsx)(h,{dropAnimation:null,children:o&&(0,L.jsx)(O,{className:(0,F.default)(j.entity,j.radiusRounded),children:(0,L.jsx)(`div`,{className:j.row,children:o.label})})})]})}var F,I,L,R,z,B,V,H,U,W;t((()=>{m(),b(),d(),k(),F=e(i(),1),I=e(n(),1),l(),M(),L=r(),{expect:R,within:z}=__STORYBOOK_MODULE_TEST__,B=`sortable-list`,V=[{id:`row-1`,label:`ListItem 1`},{id:`row-2`,label:`ListItem 2`},{id:`row-3`,label:`ListItem 3`},{id:`row-4`,label:`ListItem 4`}],H={title:`Snack/Foundation & utilities/DragAndDrop/DragGhost/Examples/SortableList`,id:`components-draganddrop-dragghost-examples-sortablelist`,component:T,parameters:{layout:`fullscreen`},args:{mode:A.Static},argTypes:{dragging:{table:{disable:!0}},children:{table:{disable:!0}},className:{table:{disable:!0}},innerRef:{table:{disable:!0}}}},U={tags:[`dev`,`test`],render:({mode:e})=>(0,L.jsx)(u,{children:(0,L.jsxs)(o,{children:[(0,L.jsx)(c,{children:`SortableList`}),(0,L.jsx)(s,{children:"Живой перенос: потяните строку мышью. Механику даёт `@dnd-kit`, примитивы пакета отвечают только за вид — `DragGhost` на исходной строке, `DragPreview` за курсором, `DropIndicator` на строке-цели. Переключите `mode`, чтобы сравнить статический перенос с динамическим (в нём линии нет — точку вставки показывает пустой слот)."}),(0,L.jsx)(a,{align:`center`,children:(0,L.jsx)(P,{mode:e})})]})}),play:async({canvasElement:e})=>{await R(z(e).getByTestId(B)).toBeVisible()}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: ({
    mode
  }) => <DemoPage>
      <DemoPanel>
        <DemoTitle>SortableList</DemoTitle>
        <DemoHint>
          Живой перенос: потяните строку мышью. Механику даёт \`@dnd-kit\`, примитивы пакета отвечают только за вид —
          \`DragGhost\` на исходной строке, \`DragPreview\` за курсором, \`DropIndicator\` на строке-цели. Переключите \`mode\`,
          чтобы сравнить статический перенос с динамическим (в нём линии нет — точку вставки показывает пустой слот).
        </DemoHint>
        <DemoActions align='center'>
          <SortableListDemo mode={mode} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(LIST_TEST_ID)).toBeVisible();
  }
}`,...U.parameters?.docs?.source}}},W=[`SortableList`]}))();export{U as SortableList,W as __namedExportsOrder,H as default};
//# sourceMappingURL=DragGhost.SortableList.stories-Bq52XeY1.js.map