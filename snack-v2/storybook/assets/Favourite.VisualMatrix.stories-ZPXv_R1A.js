import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-aHi-eIAa.js";import{_ as i,m as a,o,t as s}from"./src-DUh0QQzE.js";var c,l,u,d,f=e((()=>{c=`_wrapper_193j7_4`,l=`_iconSection_193j7_10`,u=`_sectionTitle_193j7_16`,d={wrapper:c,iconSection:l,sectionTitle:u}})),p,m,h,g,_,v;e((()=>{s(),r(),f(),p=t(),m={title:`Snack/Inputs & Forms/Toggles/Favourite`,id:`components-toggles-favourite`,component:o,parameters:{layout:`padded`},args:{size:`xs`,icon:a.Star,checked:!1,loading:!1,disabled:!1}},h=Object.values(i),g=[a.Star,a.Heart],_={tags:[`dev`,`test`],parameters:{controls:{disable:!0}},render:()=>(0,p.jsx)(`div`,{className:d.wrapper,children:g.map(e=>(0,p.jsxs)(`div`,{className:d.iconSection,children:[(0,p.jsxs)(`h3`,{className:d.sectionTitle,children:[`Icon: `,e]}),h.map(t=>(0,p.jsx)(n,{sectionTitle:`States (size ${t})`,firstColumnHeader:``,columnHeaders:[`unchecked`,`checked`],rows:[{variantLabel:`Regular`,cells:[(0,p.jsx)(o,{size:t,icon:e},`unchecked`),(0,p.jsx)(o,{checked:!0,size:t,icon:e},`checked`)]},{variantLabel:`Disabled`,cells:[(0,p.jsx)(o,{disabled:!0,size:t,icon:e},`unchecked`),(0,p.jsx)(o,{checked:!0,disabled:!0,size:t,icon:e},`checked`)]},{variantLabel:`Load`,cells:[(0,p.jsx)(o,{loading:!0,size:t,icon:e},`loading`)]}]},`${e}-${t}`))]},e))})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.wrapper}>
      {icons.map(iconVariant => <div key={iconVariant} className={styles.iconSection}>
          <h3 className={styles.sectionTitle}>Icon: {iconVariant}</h3>
          {sizes.map(size => <StoryTable key={\`\${iconVariant}-\${size}\`} sectionTitle={\`States (size \${size})\`} firstColumnHeader='' columnHeaders={['unchecked', 'checked']} rows={[{
        variantLabel: 'Regular',
        cells: [<Favourite key='unchecked' size={size} icon={iconVariant} />, <Favourite key='checked' checked size={size} icon={iconVariant} />]
      }, {
        variantLabel: 'Disabled',
        cells: [<Favourite key='unchecked' disabled size={size} icon={iconVariant} />, <Favourite key='checked' checked disabled size={size} icon={iconVariant} />]
      }, {
        variantLabel: 'Load',
        cells: [<Favourite key='loading' loading size={size} icon={iconVariant} />]
      }]} />)}
        </div>)}
    </div>
}`,..._.parameters?.docs?.source}}},v=[`VisualMatrix`]}))();export{_ as VisualMatrix,v as __namedExportsOrder,m as default};
//# sourceMappingURL=Favourite.VisualMatrix.stories-ZPXv_R1A.js.map