"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[9122],{"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/utils/stories/shadow-styles.module.scss":((c,l,e)=>{e.d(l,{A:()=>u});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(a),s=m()(r());s.push([c.id,".themeWrapper--jwilg{display:flex;flex-wrap:wrap}.shadowItem--BU0hF:not(:last-of-type){margin-right:60px}.shadowPreview--UQNbs{width:256px;height:256px;border-radius:16px;padding:8px;display:flex;align-items:center;justify-content:center;flex-direction:column;box-shadow:var(--shadow);background-color:var(--sys-neutral-background1-level, #fdfdfd)}.text--yoqkH{margin-top:4px;text-align:center}",""]),s.locals={themeWrapper:"themeWrapper--jwilg",shadowItem:"shadowItem--BU0hF",shadowPreview:"shadowPreview--UQNbs",text:"text--yoqkH"};const u=s}),"./packages/utils/stories/Shadows.story.tsx":((c,l,e)=>{e.r(l),e.d(l,{default:()=>I,shadow:()=>P});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),r=e("./packages/utils/CHANGELOG.md"),a=e("./packages/utils/package.json"),m=e("./packages/utils/README.md"),s=e("./node_modules/.pnpm/@snack-uikit+figma-tokens@18.0.1/node_modules/@snack-uikit/figma-tokens/build/ts/styles-theme-variables.js");function u(t,y){function O(p){return`
      &:nth-child(${p}) {
        animation-delay: ${-p/t*y}ms;
        animation-duration: ${y}ms;
      }
    `}return Array.from({length:t},(p,k)=>k+1).map(O).join("")}const L={COMMON:`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  
    &::after,
    &::before {
      box-sizing: border-box;
    }
  `,BORDERLESS:`
    border: none;
    border-radius: 0;
  `},M={TRANSITION:"0.2s ease-in-out",LOADING_WHEEL:`
    & > path {
      @keyframes loading-wheel {
        0% {
          opacity: 1;
        }

        90% {
          opacity: 0.125;
        }

        100% {
          opacity: 1;
        }
      }

      animation-iteration-count: infinite;
      animation-name: loading-wheel;
      animation-timing-function: linear;

      ${u(8,1e3)};
    }
  `},_={SMALL:s.G.boxShadow.elevation.level1,MEDIUM:s.G.boxShadow.elevation.level3,LARGE:s.G.boxShadow.elevation.level4};var h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(h),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),b=e.n(v),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),A=e.n(f),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),S=e.n(j),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),w=e.n(E),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),T=e.n(x),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/utils/stories/shadow-styles.module.scss"),d={};d.styleTagTransform=T(),d.setAttributes=S(),d.insert=A().bind(null,"head"),d.domAPI=b(),d.insertStyleElement=w();var W=g()(n.A,d);const i=n.A&&n.A.locals?n.A.locals:void 0;var I={title:"Utils/Shadow"};function D(){return(0,o.jsx)("div",{className:i.themeWrapper,children:Object.keys(_).map(t=>(0,o.jsx)("div",{className:i.shadowItem,children:(0,o.jsxs)("div",{className:i.shadowPreview,style:{"--shadow":_[t]},children:[t,(0,o.jsx)("div",{className:i.text,children:_[t]})]})},t))})}const P={render:D,args:{},argTypes:{},parameters:{readme:{sidebar:[`Latest version: ${a.rE}`,m,r]},packageName:a.UU,design:{type:"figma",url:"https://www.figma.com/file/gCc4XarYocwWbficnQPInC/%F0%9F%93%9A-%5BLIB%5D-Platform-Design-System?node-id=1015%3A1"}}}})}]);})();
