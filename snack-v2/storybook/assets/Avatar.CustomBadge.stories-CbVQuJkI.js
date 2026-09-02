import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-D0mM8I4K.js";import{dn as c,t as l}from"./system-D3OCWxpM.js";import{n as u,s as d,t as f}from"./src-tiyWyapx.js";import{i as p,o as m,t as h}from"./src-tIUIZ2b_.js";import{c as g,i as _,l as v,n as y,t as b}from"./src-CzNugrEA.js";import{t as x}from"./testIds-JS6-SNOH.js";var S,C=e((()=>{S=``+new URL(`portrait-8-XXbEES5w.jpg`,import.meta.url).href})),w,T=e((()=>{w=``+new URL(`portrait-12-CvZQ3V8T.jpg`,import.meta.url).href})),E,D=e((()=>{E=``+new URL(`portrait-20-BhYjfOF6.jpg`,import.meta.url).href})),O,k=e((()=>{O=``+new URL(`portrait-47-FHnNpdmB.jpg`,import.meta.url).href})),A,j,M=e((()=>{A=`_verified_5g044_4`,j={verified:A}})),N,P,F,I,L;e((()=>{b(),f(),l(),h(),o(),x(),C(),T(),D(),k(),M(),N=t(),P=[w,O,S,E].map(e=>e),F={title:`Snack/Data display/Avatar/Examples/CustomBadge`,id:`components-avatar-examples-custombadge`,component:y,parameters:{layout:`fullscreen`,controls:{disable:!0}}},I={tags:[`dev`,`test`],render:()=>(0,N.jsx)(s,{children:(0,N.jsxs)(r,{width:`wide`,children:[(0,N.jsx)(a,{children:`Custom badge slot`}),(0,N.jsx)(i,{children:"В слот `badge` можно положить любой компонент: счётчик уведомлений, иконку верификации, собственный микро-компонент. Bbox бейджа упирается в правый-нижний угол аватара."}),(0,N.jsxs)(n,{align:`center`,children:[(0,N.jsx)(y,{"data-test-id":v.root,name:`John Doe`,size:g[`6Xl`],src:P[0],badge:(0,N.jsx)(u,{value:5,size:d.S})}),(0,N.jsx)(y,{name:`Jane Roe`,size:g[`6Xl`],src:P[1],badge:(0,N.jsx)(`span`,{className:j.verified,children:(0,N.jsx)(c,{size:16})})}),(0,N.jsx)(y,{name:`Alex Roe`,size:g[`6Xl`],src:P[2],status:m.Green}),(0,N.jsx)(y,{name:`Mia Roe`,size:g[`6Xl`],src:P[3],badge:(0,N.jsx)(p,{size:_[g[`6Xl`]],appearance:m.Red})})]})]})})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Custom badge slot</DemoTitle>
        <DemoHint>
          В слот \`badge\` можно положить любой компонент: счётчик уведомлений, иконку верификации, собственный
          микро-компонент. Bbox бейджа упирается в правый-нижний угол аватара.
        </DemoHint>
        <DemoActions align='center'>
          <Avatar data-test-id={TEST_IDS.root} name='John Doe' size={SIZE['6Xl']} src={portraits[0]} badge={<Counter value={5} size={COUNTER_SIZE.S} />} />

          <Avatar name='Jane Roe' size={SIZE['6Xl']} src={portraits[1]} badge={<span className={styles.verified}>
                <CheckSVG size={16} />
              </span>} />

          <Avatar name='Alex Roe' size={SIZE['6Xl']} src={portraits[2]} status={STATUS_APPEARANCE.Green} />

          <Avatar name='Mia Roe' size={SIZE['6Xl']} src={portraits[3]} badge={<StatusIndicator size={AVATAR_TO_STATUS_INDICATOR_SIZE[SIZE['6Xl']]} appearance={STATUS_APPEARANCE.Red} />} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>
}`,...I.parameters?.docs?.source},description:{story:"Слот `badge` принимает любой ReactNode. Положение — bbox прижат к\nправому-нижнему углу аватара (см. `styles.module.scss::.badge`),\nпоэтому подойдёт `Counter`, иконка-«verified», или любой собственный\nкомпонент. Размер бейджа потребитель выбирает сам — если хочется\nвизуальной парности с дефолтным `StatusIndicator`, можно взять\n`AVATAR_TO_STATUS_INDICATOR_SIZE[avatarSize]` как ориентир.",...I.parameters?.docs?.description}}},L=[`CustomBadge`]}))();export{I as CustomBadge,L as __namedExportsOrder,F as default};
//# sourceMappingURL=Avatar.CustomBadge.stories-CbVQuJkI.js.map