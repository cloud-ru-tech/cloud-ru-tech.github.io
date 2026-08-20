import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r,t as i}from"./classnames-iuquYaxc.js";import{c as a,d as o,l as s,m as c,t as l,u}from"./iframe-DMWsC78w.js";import{_ as d,b as f,m as p,n as m,s as h,t as g,v as _,y as v}from"./core.esm-kZGH3lAy.js";import{c as y,n as b,o as x,t as S}from"./src-DkDQwBir.js";import{n as C,t as w}from"./stories.module-D3U40748.js";function T({id:e,label:t}){let{attributes:n,isDragging:r,listeners:i,setNodeRef:a}=d({id:e});return(0,A.jsx)(y,{innerRef:a,dragging:r,className:C.grabbable,"data-test-id":e,...n,...i,children:(0,A.jsx)(`div`,{className:C.row,children:t})})}function E({id:e,label:t,items:n,sourceZoneId:r}){let{isOver:i,setNodeRef:a}=_({id:e});return(0,A.jsxs)(b,{innerRef:a,active:i&&r!==void 0&&r!==e,className:(0,O.default)(C.canvas,C.zone),"data-test-id":e,children:[(0,A.jsx)(`div`,{className:C.zoneLabel,children:t}),n.map(e=>(0,A.jsx)(T,{id:e.id,label:e.label},e.id))]})}function D(){let[e,t]=(0,k.useState)(P),[n,r]=(0,k.useState)(),i=f(v(h,{activationConstraint:{distance:4}})),a=e.find(e=>e.id===n);return(0,A.jsxs)(g,{sensors:i,onDragStart:({active:e})=>r(String(e.id)),onDragCancel:()=>r(void 0),onDragEnd:({active:e,over:n})=>{r(void 0),n&&t(t=>t.map(t=>t.id===e.id?{...t,zoneId:String(n.id)}:t))},children:[(0,A.jsx)(`div`,{className:C.zones,children:N.map(t=>(0,A.jsx)(E,{id:t.id,label:t.label,items:e.filter(e=>e.zoneId===t.id),sourceZoneId:a?.zoneId},t.id))}),(0,A.jsx)(m,{dropAnimation:null,children:a&&(0,A.jsx)(x,{className:(0,O.default)(C.entity,C.radiusRounded),children:(0,A.jsx)(`div`,{className:C.row,children:a.label})})})]})}var O,k,A,j,M,N,P,F,I,L;t((()=>{p(),S(),O=e(i(),1),k=e(n(),1),l(),w(),A=r(),{expect:j,within:M}=__STORYBOOK_MODULE_TEST__,N=[{id:`zone-1`,label:`Зона 1`},{id:`zone-2`,label:`Зона 2`}],P=[{id:`item-1`,label:`ListItem 1`,zoneId:`zone-1`},{id:`item-2`,label:`ListItem 2`,zoneId:`zone-1`},{id:`item-3`,label:`ListItem 3`,zoneId:`zone-2`}],F={title:`Snack/Foundation & utilities/DragAndDrop/DropTarget/Examples/CrossZone`,id:`components-draganddrop-droptarget-examples-crosszone`,component:b,parameters:{layout:`fullscreen`,controls:{disable:!0}}},I={tags:[`dev`,`test`],render:()=>(0,A.jsx)(u,{children:(0,A.jsxs)(o,{width:`wide`,children:[(0,A.jsx)(c,{children:`CrossZone`}),(0,A.jsx)(s,{children:"Живой перенос между зонами: потяните строку в соседнюю зону. Рамку (`active`) получает только чужая зона — та, в которую переносят; над своей зоной подсветки нет."}),(0,A.jsx)(a,{align:`center`,children:(0,A.jsx)(D,{})})]})}),play:async({canvasElement:e})=>{await j(M(e).getByTestId(N[0].id)).toBeVisible()}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>CrossZone</DemoTitle>
        <DemoHint>
          Живой перенос между зонами: потяните строку в соседнюю зону. Рамку (\`active\`) получает только чужая зона — та,
          в которую переносят; над своей зоной подсветки нет.
        </DemoHint>
        <DemoActions align='center'>
          <CrossZoneDemo />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(ZONES[0].id)).toBeVisible();
  }
}`,...I.parameters?.docs?.source}}},L=[`CrossZone`]}))();export{I as CrossZone,L as __namedExportsOrder,F as default};
//# sourceMappingURL=DropTarget.CrossZone.stories-Cm5pxu9i.js.map