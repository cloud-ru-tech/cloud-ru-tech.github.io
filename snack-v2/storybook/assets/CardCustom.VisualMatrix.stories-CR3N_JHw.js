import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-Du0zU9lI.js";import{$ as i,V as a,t as o}from"./system-B3b9qWhT.js";import{c as s,n as c,t as l}from"./src-DJPfffhs.js";import{n as u,o as d,s as f,t as p}from"./src-eX9FmPLK.js";import{i as m,n as h,t as g}from"./src-B7hoy23g.js";import{i as _,n as v,r as y,t as b}from"./testIds-DhOfirY-.js";var x,S,C,w=e((()=>{x=`_grid_pqlek_4`,S=`_cardFrame_pqlek_9`,C={grid:x,cardFrame:S}}));function T(e){switch(e){case m.Little:return(0,k.jsx)(h.Image,{src:y,alt:v,mode:m.Little});case m.Middle:return(0,k.jsx)(h.Image,{src:y,alt:v,mode:m.Middle});case m.Background:return(0,k.jsx)(h.Image,{src:y,alt:v,mode:m.Background});default:return}}function E(e){switch(e){case`action`:return(0,k.jsx)(h.Footer.Action,{button:{label:`Label text`},secondaryButton:{label:`Label text`}});case`callToAction`:return(0,k.jsx)(h.Footer.CallToAction,{label:`Call to action`,icon:(0,k.jsx)(a,{})});case`promo`:return(0,k.jsx)(h.Footer.Promo,{button:{label:`Label text`}});case`dimension`:return(0,k.jsx)(h.Footer.Promo,{button:{label:`Buy`},volume:{currentValue:`999 999,00`,oldValue:`1 000 000,00`,dimension:`₽`}});default:return}}function D(e){if(e===`icon`)return{icon:a};if(e===`picture`)return{src:y,alt:v}}function O({radius:e=d.M,disabled:t,imageMode:n,footer:r,emblem:a=`icon`,functionBadge:o,body:l=!0}){return(0,k.jsx)(`div`,{className:C.cardFrame,children:(0,k.jsxs)(u,{radius:e,disabled:t,"data-test-id":f.root,children:[o&&(0,k.jsx)(h.FunctionBadge,{icon:(0,k.jsx)(i,{}),options:j,alwaysVisible:!0}),T(n),(0,k.jsx)(h.Header,{title:`Title text`,description:`Description text`,metadata:`Metadata text`,emblem:D(a)}),l&&(0,k.jsx)(h.Body,{children:(0,k.jsx)(c,{as:`div`,variant:s.body,size:e===d.L?`l`:`m`,children:`Body content text`})}),r&&E(r)]})})}var k,A,j,M,N,P,F,I;e((()=>{p(),o(),l(),g(),r(),_(),w(),b(),k=t(),A={title:`Uikit Product/Data display/CardPredefined/CardCustom`,id:`uikit-product-cardpredefined-cardcustom`,component:u,parameters:{layout:`padded`}},j=[{content:{label:`Option 1`}},{content:{label:`Option 2`}},{content:{label:`Option 3`},tagLabel:`Tag`}],M=Object.values(d),N=[void 0,m.Little,m.Middle,m.Background],P=[`action`,`callToAction`,`promo`,`dimension`],F={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,k.jsxs)(`div`,{className:C.grid,children:[(0,k.jsx)(n,{sectionTitle:`Footer × Radius`,firstColumnHeader:`Footer`,columnHeaders:M.map(e=>e.toUpperCase()),rows:P.map(e=>({variantLabel:e,cells:M.map(t=>O({radius:t,footer:e,functionBadge:!0}))}))}),(0,k.jsx)(n,{sectionTitle:`Image × Radius`,firstColumnHeader:`Image`,columnHeaders:M.map(e=>e.toUpperCase()),rows:N.map(e=>({variantLabel:e??`none`,cells:M.map(t=>O({radius:t,imageMode:e,emblem:void 0,body:!1}))}))}),(0,k.jsx)(n,{sectionTitle:`Slots (radius=m)`,firstColumnHeader:`Slot`,columnHeaders:[`Card`],rows:[{variantLabel:`emblem: icon`,cells:[O({emblem:`icon`})]},{variantLabel:`emblem: picture`,cells:[O({emblem:`picture`})]},{variantLabel:`functionBadge`,cells:[O({emblem:`icon`,functionBadge:!0})]},{variantLabel:`no emblem`,cells:[O({emblem:void 0})]}]}),(0,k.jsx)(n,{sectionTitle:`State (radius=m)`,firstColumnHeader:`State`,columnHeaders:[`Card`],rows:[{variantLabel:`default`,cells:[O({footer:`action`,functionBadge:!0})]},{variantLabel:`disabled`,cells:[O({footer:`action`,functionBadge:!0,disabled:!0})]}]})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='Footer × Radius' firstColumnHeader='Footer' columnHeaders={keyRadii.map(radius => radius.toUpperCase())} rows={footerModes.map(footer => ({
      variantLabel: footer,
      cells: keyRadii.map(radius => renderCardCustom({
        radius,
        footer,
        functionBadge: true
      }))
    }))} />

      <StoryTable sectionTitle='Image × Radius' firstColumnHeader='Image' columnHeaders={keyRadii.map(radius => radius.toUpperCase())} rows={imageModes.map(imageMode => ({
      variantLabel: imageMode ?? 'none',
      cells: keyRadii.map(radius => renderCardCustom({
        radius,
        imageMode,
        emblem: undefined,
        body: false
      }))
    }))} />

      <StoryTable sectionTitle='Slots (radius=m)' firstColumnHeader='Slot' columnHeaders={['Card']} rows={[{
      variantLabel: 'emblem: icon',
      cells: [renderCardCustom({
        emblem: 'icon'
      })]
    }, {
      variantLabel: 'emblem: picture',
      cells: [renderCardCustom({
        emblem: 'picture'
      })]
    }, {
      variantLabel: 'functionBadge',
      cells: [renderCardCustom({
        emblem: 'icon',
        functionBadge: true
      })]
    }, {
      variantLabel: 'no emblem',
      cells: [renderCardCustom({
        emblem: undefined
      })]
    }]} />

      <StoryTable sectionTitle='State (radius=m)' firstColumnHeader='State' columnHeaders={['Card']} rows={[{
      variantLabel: 'default',
      cells: [renderCardCustom({
        footer: 'action',
        functionBadge: true
      })]
    }, {
      variantLabel: 'disabled',
      cells: [renderCardCustom({
        footer: 'action',
        functionBadge: true,
        disabled: true
      })]
    }]} />
    </div>
}`,...F.parameters?.docs?.source}}},I=[`VisualMatrix`]}))();export{F as VisualMatrix,I as __namedExportsOrder,A as default};
//# sourceMappingURL=CardCustom.VisualMatrix.stories-CR3N_JHw.js.map