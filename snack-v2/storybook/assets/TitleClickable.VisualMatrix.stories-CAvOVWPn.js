import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-D1b9r8k6.js";import{U as i,t as a}from"./system-Cg8TgV31.js";import{i as o,n as s,o as c,t as l}from"./src-C1_XWE5A.js";import{n as u,t as d}from"./testIds-CbT_jp4w.js";var f,p,m,h=e((()=>{f=`_matrix_10daa_4`,p=`_fullWidthCell_10daa_9`,m={matrix:f,fullWidthCell:p}})),g,_,v,y;e((()=>{a(),l(),r(),h(),u(),g=t(),_={title:`Uikit Product/Actions/TitleClickable`,id:`uikit-product-titleclickable`,component:s,parameters:{layout:`padded`}},v={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsxs)(`div`,{className:m.matrix,children:[(0,g.jsx)(n,{cellAlign:`start`,sectionTitle:`Width × Icon`,firstColumnHeader:`width`,columnHeaders:[`no icon`,`with icon`],rows:[`auto`,`full`].map(e=>({variantLabel:e,cells:[void 0,(0,g.jsx)(i,{},`icon`)].map((t,n)=>(0,g.jsx)(`div`,{className:e===`full`?m.fullWidthCell:void 0,children:(0,g.jsx)(s,{href:`#`,title:`Title`,icon:t,fullWidth:e===`full`})},n))}))}),(0,g.jsx)(n,{cellAlign:`start`,sectionTitle:`showArrow × long title (truncation)`,firstColumnHeader:`showArrow`,columnHeaders:[`short`,`long`],rows:[!0,!1].map(e=>({variantLabel:String(e),cells:[`Title`,`Very long title that should definitely truncate on a single line`].map((t,n)=>(0,g.jsx)(`div`,{className:m.fullWidthCell,children:(0,g.jsx)(s,{href:`#`,title:t,fullWidth:!0,showArrow:e,icon:(0,g.jsx)(i,{})})},n))}))}),(0,g.jsx)(n,{cellAlign:`start`,sectionTitle:`Arrow icon (auto: chevron / external by target)`,firstColumnHeader:`target`,columnHeaders:[`no icon`,`with icon`],rows:[`_self`,`_blank`].map(e=>({variantLabel:e,cells:[void 0,(0,g.jsx)(i,{},`icon`)].map((t,n)=>(0,g.jsx)(s,{href:`#`,target:e,title:`Title`,icon:t},n))}))}),(0,g.jsx)(n,{cellAlign:`start`,sectionTitle:"`before` slot — presets",firstColumnHeader:`preset`,columnHeaders:[`rendered`],rows:[{variantLabel:`TitleClickableIcon`,cells:[(0,g.jsx)(s,{href:`#`,title:`With icon preset`,before:(0,g.jsx)(o,{icon:(0,g.jsx)(i,{})})},`icon`)]},{variantLabel:`TitleClickableAvatar`,cells:[(0,g.jsx)(`div`,{className:m.fullWidthCell,children:(0,g.jsx)(s,{href:`#`,fullWidth:!0,before:(0,g.jsx)(c,{name:`John Doe`,subtitle:`jdoe@example.com`})})},`avatar`)]},{variantLabel:`custom node`,cells:[(0,g.jsx)(s,{href:`#`,before:(0,g.jsx)(`span`,{"data-test-id":d.customBefore,children:` Custom before `})},`custom`)]}]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable cellAlign='start' sectionTitle='Width × Icon' firstColumnHeader='width' columnHeaders={['no icon', 'with icon']} rows={(['auto', 'full'] as const).map(width => ({
      variantLabel: width,
      cells: [undefined, <PlaceholderSVG key='icon' />].map((icon, idx) => <div key={idx} className={width === 'full' ? styles.fullWidthCell : undefined}>
              <TitleClickable href='#' title='Title' icon={icon} fullWidth={width === 'full'} />
            </div>)
    }))} />

      <StoryTable cellAlign='start' sectionTitle='showArrow × long title (truncation)' firstColumnHeader='showArrow' columnHeaders={['short', 'long']} rows={[true, false].map(showArrow => ({
      variantLabel: String(showArrow),
      cells: ['Title', 'Very long title that should definitely truncate on a single line'].map((title, idx) => <div key={idx} className={styles.fullWidthCell}>
              <TitleClickable href='#' title={title} fullWidth showArrow={showArrow} icon={<PlaceholderSVG />} />
            </div>)
    }))} />

      <StoryTable cellAlign='start' sectionTitle='Arrow icon (auto: chevron / external by target)' firstColumnHeader='target' columnHeaders={['no icon', 'with icon']} rows={(['_self', '_blank'] as const).map(target => ({
      variantLabel: target,
      cells: [undefined, <PlaceholderSVG key='icon' />].map((icon, idx) => <TitleClickable key={idx} href='#' target={target} title='Title' icon={icon} />)
    }))} />

      <StoryTable cellAlign='start' sectionTitle='\`before\` slot — presets' firstColumnHeader='preset' columnHeaders={['rendered']} rows={[{
      variantLabel: 'TitleClickableIcon',
      cells: [<TitleClickable key='icon' href='#' title='With icon preset' before={<TitleClickableIcon icon={<PlaceholderSVG />} />} />]
    }, {
      variantLabel: 'TitleClickableAvatar',
      cells: [<div key='avatar' className={styles.fullWidthCell}>
                <TitleClickable href='#' fullWidth before={<TitleClickableAvatar name='John Doe' subtitle='jdoe@example.com' />} />
              </div>]
    }, {
      variantLabel: 'custom node',
      cells: [<TitleClickable key='custom' href='#' before={<span data-test-id={STORY_TEST_IDS.customBefore}> Custom before </span>} />]
    }]} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=TitleClickable.VisualMatrix.stories-CAvOVWPn.js.map