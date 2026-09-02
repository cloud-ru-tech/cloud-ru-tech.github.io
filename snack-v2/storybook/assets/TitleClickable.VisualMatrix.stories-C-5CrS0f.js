import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-D0mM8I4K.js";import{U as i,t as a}from"./system-D3OCWxpM.js";import{n as o,t as s}from"./src-UKx8apnc.js";import{n as c,t as l}from"./testIds-Dpig2mgJ.js";var u,d,f,p=e((()=>{u=`_matrix_10daa_4`,d=`_fullWidthCell_10daa_9`,f={matrix:u,fullWidthCell:d}})),m,h,g,_;e((()=>{a(),s(),r(),p(),c(),m=t(),h={title:`Uikit Product/Actions/TitleClickable`,id:`uikit-product-titleclickable`,component:o,parameters:{layout:`padded`}},g={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(`div`,{className:f.matrix,children:[(0,m.jsx)(n,{cellAlign:`start`,sectionTitle:`Width × Icon`,firstColumnHeader:`width`,columnHeaders:[`no icon`,`with icon`],rows:[`auto`,`full`].map(e=>({variantLabel:e,cells:[void 0,(0,m.jsx)(i,{},`icon`)].map((t,n)=>(0,m.jsx)(`div`,{className:e===`full`?f.fullWidthCell:void 0,children:(0,m.jsx)(o,{href:`#`,title:`Title`,icon:t,fullWidth:e===`full`})},n))}))}),(0,m.jsx)(n,{cellAlign:`start`,sectionTitle:`showArrow × long title (truncation)`,firstColumnHeader:`showArrow`,columnHeaders:[`short`,`long`],rows:[!0,!1].map(e=>({variantLabel:String(e),cells:[`Title`,`Very long title that should definitely truncate on a single line`].map((t,n)=>(0,m.jsx)(`div`,{className:f.fullWidthCell,children:(0,m.jsx)(o,{href:`#`,title:t,fullWidth:!0,showArrow:e,icon:(0,m.jsx)(i,{})})},n))}))}),(0,m.jsx)(n,{cellAlign:`start`,sectionTitle:`Arrow icon (auto: chevron / external by target)`,firstColumnHeader:`target`,columnHeaders:[`no icon`,`with icon`],rows:[`_self`,`_blank`].map(e=>({variantLabel:e,cells:[void 0,(0,m.jsx)(i,{},`icon`)].map((t,n)=>(0,m.jsx)(o,{href:`#`,target:e,title:`Title`,icon:t},n))}))}),(0,m.jsx)(n,{cellAlign:`start`,sectionTitle:`icon and children after title`,firstColumnHeader:`variant`,columnHeaders:[`rendered`],rows:[{variantLabel:`icon before title`,cells:[(0,m.jsx)(o,{href:`#`,title:`With icon`,icon:(0,m.jsx)(i,{})},`icon`)]},{variantLabel:`custom children`,cells:[(0,m.jsx)(o,{href:`#`,title:`With custom children`,children:(0,m.jsx)(`span`,{"data-test-id":l.customChildren,children:`Custom children`})},`custom`)]}]}),(0,m.jsx)(n,{cellAlign:`start`,sectionTitle:`avatar after title`,firstColumnHeader:`variant`,columnHeaders:[`rendered`],rows:[{variantLabel:`title + avatar`,cells:[(0,m.jsx)(`div`,{className:f.fullWidthCell,children:(0,m.jsx)(o,{href:`#`,title:`With avatar`,fullWidth:!0,avatar:{name:`John Doe`,subtitle:`jdoe@example.com`}})},`avatar`)]}]})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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

      <StoryTable cellAlign='start' sectionTitle='icon and children after title' firstColumnHeader='variant' columnHeaders={['rendered']} rows={[{
      variantLabel: 'icon before title',
      cells: [<TitleClickable key='icon' href='#' title='With icon' icon={<PlaceholderSVG />} />]
    }, {
      variantLabel: 'custom children',
      cells: [<TitleClickable key='custom' href='#' title='With custom children'>
                <span data-test-id={STORY_TEST_IDS.customChildren}>Custom children</span>
              </TitleClickable>]
    }]} />

      <StoryTable cellAlign='start' sectionTitle='avatar after title' firstColumnHeader='variant' columnHeaders={['rendered']} rows={[{
      variantLabel: 'title + avatar',
      cells: [<div key='avatar' className={styles.fullWidthCell}>
                <TitleClickable href='#' title='With avatar' fullWidth avatar={{
          name: 'John Doe',
          subtitle: 'jdoe@example.com'
        }} />
              </div>]
    }]} />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`VisualMatrix`]}))();export{g as VisualMatrix,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=TitleClickable.VisualMatrix.stories-C-5CrS0f.js.map