import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DyMJH5nk.js";import{l as i,n as a,s as o,t as s,u as c}from"./src-D7iBzCxU2.js";import{i as l,t as u}from"./src-DJcevqTP2.js";import{i as d,n as f,r as p,t as m}from"./styles.module-BKvR_oAg.js";var h,g,_,v,y,b,x,S;e((()=>{u(),s(),r(),d(),m(),h=t(),g={title:`AI/Process & motion/AiShimmer`,id:`ai-aishimmer`,component:a,parameters:{layout:`padded`}},_=[{label:`short latin`,text:`as`},{label:`short cyrillic`,text:`йцу`},{label:`short text`,text:`Generating...`},{label:`medium text`,text:`Generating AI response...
Please wait a few seconds.`},{label:`long text`,text:`Generating AI response for your request...
Please wait while we process multiple sources and format the final answer.
This may take a little longer depending on complexity.`}],v=Object.values(o),y=Object.values(i),b=Object.values(c),x={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n,{sectionTitle:`Text`,firstColumnHeader:`Text`,columnHeaders:[`AiShimmer`],rows:_.map(({label:e,text:t})=>({variantLabel:e,cells:[(0,h.jsx)(`div`,{className:f.matrixCell,children:(0,h.jsx)(a,{text:t,size:`m`})},e)]}))}),(0,h.jsx)(n,{sectionTitle:`Size`,firstColumnHeader:`Size`,columnHeaders:[`AiShimmer`],rows:v.map(e=>({variantLabel:e.toUpperCase(),cells:[(0,h.jsx)(`div`,{className:f.matrixCell,children:(0,h.jsx)(a,{text:`Generating AI response...`,size:e})},e)]}))}),(0,h.jsx)(n,{sectionTitle:`Variant`,firstColumnHeader:`Variant`,columnHeaders:[`AiShimmer`],rows:y.map(e=>({variantLabel:e,cells:[(0,h.jsx)(`div`,{className:f.matrixCell,children:(0,h.jsx)(a,{text:`Generating AI response...`,variant:e,size:`m`})},e)]}))}),(0,h.jsx)(n,{sectionTitle:`Weight`,firstColumnHeader:`Weight`,columnHeaders:[`AiShimmer`],rows:b.map(e=>({variantLabel:e,cells:[(0,h.jsx)(`div`,{className:f.matrixCell,children:(0,h.jsx)(a,{text:`Generating AI response...`,weight:e,size:`m`})},e)]}))}),(0,h.jsx)(n,{sectionTitle:`With icon`,firstColumnHeader:`Size`,columnHeaders:[`iconMask`,`icon: AiIconGiga`,`icon: @cloud-ru/ds-icons`,`icon: Sun`],rows:v.map(e=>({variantLabel:e.toUpperCase(),cells:[(0,h.jsx)(`div`,{className:f.matrixCell,children:(0,h.jsx)(a,{text:`Размышляю 365 д 09 ч 09 м 09 с`,size:e,iconMask:l})},`mask`),(0,h.jsx)(`div`,{className:f.matrixCell,children:(0,h.jsx)(a,{text:`Размышляю 365 д 09 ч 09 м 09 с`,size:e,icon:p.giga})},`giga`),(0,h.jsx)(`div`,{className:f.matrixCell,children:(0,h.jsx)(a,{text:`Размышляю 365 д 09 ч 09 м 09 с`,size:e,icon:p.placeholder})},`placeholder`),(0,h.jsx)(`div`,{className:f.matrixCell,children:(0,h.jsx)(a,{text:`Размышляю 365 д 09 ч 09 м 09 с`,size:e,icon:p.sun})},`sun`)]}))}),(0,h.jsx)(n,{sectionTitle:`Slot after`,firstColumnHeader:`Slot`,columnHeaders:[`AiShimmer + slotAfter`],rows:[{variantLabel:`text only`,cells:[(0,h.jsx)(`div`,{className:f.matrixCell,children:(0,h.jsx)(a,{text:`Размышляю`,size:`s`,iconMask:l})},`no-slot`)]},{variantLabel:`with slot`,cells:[(0,h.jsx)(`div`,{className:f.matrixCell,children:(0,h.jsx)(a,{text:`Размышляю`,size:`s`,iconMask:l,slotAfter:(0,h.jsx)(`span`,{className:f.slotAfter,children:`365 д 09 ч 09 м 09 с`})})},`with-slot`)]}]}),(0,h.jsx)(n,{sectionTitle:`Width`,firstColumnHeader:`Container`,columnHeaders:[`AiShimmer`],rows:[{variantLabel:`full (400px)`,cells:[(0,h.jsx)(`div`,{className:f.matrixCell,children:(0,h.jsx)(a,{text:`йцу`,size:`m`})},`full`)]},{variantLabel:`narrow (120px)`,cells:[(0,h.jsx)(`div`,{className:f.matrixCellNarrow,children:(0,h.jsx)(a,{text:`йцу йцу`,size:`m`})},`narrow`)]}]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      <StoryTable sectionTitle='Text' firstColumnHeader='Text' columnHeaders={['AiShimmer']} rows={keyTexts.map(({
      label,
      text
    }) => ({
      variantLabel: label,
      cells: [<div className={styles.matrixCell} key={label}>
              <AiShimmer text={text} size='m' />
            </div>]
    }))} />
      <StoryTable sectionTitle='Size' firstColumnHeader='Size' columnHeaders={['AiShimmer']} rows={sizes.map(size => ({
      variantLabel: size.toUpperCase(),
      cells: [<div className={styles.matrixCell} key={size}>
              <AiShimmer text='Generating AI response...' size={size} />
            </div>]
    }))} />
      <StoryTable sectionTitle='Variant' firstColumnHeader='Variant' columnHeaders={['AiShimmer']} rows={variants.map(variant => ({
      variantLabel: variant,
      cells: [<div className={styles.matrixCell} key={variant}>
              <AiShimmer text='Generating AI response...' variant={variant} size='m' />
            </div>]
    }))} />
      <StoryTable sectionTitle='Weight' firstColumnHeader='Weight' columnHeaders={['AiShimmer']} rows={weights.map(weight => ({
      variantLabel: weight,
      cells: [<div className={styles.matrixCell} key={weight}>
              <AiShimmer text='Generating AI response...' weight={weight} size='m' />
            </div>]
    }))} />
      <StoryTable sectionTitle='With icon' firstColumnHeader='Size' columnHeaders={['iconMask', 'icon: AiIconGiga', 'icon: @cloud-ru/ds-icons', 'icon: Sun']} rows={sizes.map(size => ({
      variantLabel: size.toUpperCase(),
      cells: [<div className={styles.matrixCell} key='mask'>
              <AiShimmer text='Размышляю 365 д 09 ч 09 м 09 с' size={size} iconMask={GIGA_MASK_IMAGE} />
            </div>, <div className={styles.matrixCell} key='giga'>
              <AiShimmer text='Размышляю 365 д 09 ч 09 м 09 с' size={size} icon={ICON_PRESETS.giga} />
            </div>, <div className={styles.matrixCell} key='placeholder'>
              <AiShimmer text='Размышляю 365 д 09 ч 09 м 09 с' size={size} icon={ICON_PRESETS.placeholder} />
            </div>, <div className={styles.matrixCell} key='sun'>
              <AiShimmer text='Размышляю 365 д 09 ч 09 м 09 с' size={size} icon={ICON_PRESETS.sun} />
            </div>]
    }))} />
      <StoryTable sectionTitle='Slot after' firstColumnHeader='Slot' columnHeaders={['AiShimmer + slotAfter']} rows={[{
      variantLabel: 'text only',
      cells: [<div className={styles.matrixCell} key='no-slot'>
                <AiShimmer text='Размышляю' size='s' iconMask={GIGA_MASK_IMAGE} />
              </div>]
    }, {
      variantLabel: 'with slot',
      cells: [<div className={styles.matrixCell} key='with-slot'>
                <AiShimmer text='Размышляю' size='s' iconMask={GIGA_MASK_IMAGE} slotAfter={<span className={styles.slotAfter}>365 д 09 ч 09 м 09 с</span>} />
              </div>]
    }]} />
      <StoryTable sectionTitle='Width' firstColumnHeader='Container' columnHeaders={['AiShimmer']} rows={[{
      variantLabel: 'full (400px)',
      cells: [<div className={styles.matrixCell} key='full'>
                <AiShimmer text='йцу' size='m' />
              </div>]
    }, {
      variantLabel: 'narrow (120px)',
      cells: [<div className={styles.matrixCellNarrow} key='narrow'>
                <AiShimmer text='йцу йцу' size='m' />
              </div>]
    }]} />
    </>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,g as default};
//# sourceMappingURL=AiShimmer.VisualMatrix.stories-Dq2U7SCS.js.map