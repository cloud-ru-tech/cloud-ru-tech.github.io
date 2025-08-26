import{j as L}from"./jsx-runtime-BTJTZTIL.js";import{r as y,R as qe}from"./index-CJ_LmFaV.js";import{t as _o}from"./helpers-I0nJkbN2.js";import{c as ms}from"./index-DTH25FFD.js";import{C as bs}from"./index-DJKNHUMM.js";import{C as ks}from"./index-CzP9MZIz.js";import{T as ti}from"./TruncateString-d_nSHKm-.js";import{B as ni}from"./ButtonFunction-IatxJr6E.js";import{T as vs}from"./TagRow-COOAhKNq.js";import{r as Pn}from"./index-Bxu_udwM.js";import{c as gn}from"./index-DUmpqB7p.js";import{S as br}from"./Skeleton-Cf0sBfNU.js";import{i as Gn}from"./isBrowser-C2N6XvuH.js";import{u as Cs}from"./index-JZGyZbA2.js";import{R as Go}from"./Radio-BCgFJQ4Y.js";import{C as Oo}from"./Checkbox-asm2N1Qj.js";import{F as ys}from"./index-CDbNS7dV.js";import{F as Es,a as Ss}from"./index-CR9MRPhY.js";import{C as ws}from"./index-Clv-rw5D.js";import{u as ii}from"./LocaleProvider-CyhbxqE1.js";import{S as xs}from"./SkeletonText-B0RonRkp.js";import{C as As}from"./index-BEuzvn4S.js";import{S as kr}from"./index-CWV_8VIe.js";import{a as _s}from"./Toolbar-BeRXhYyY.js";import{D as Gs}from"./index-BBF-mQaP.js";import{D as Xa}from"./DropList-DxssBsk5.js";import{A as Os,a as Fs,F as Ns}from"./index-CysqOHM3.js";import{I as Wi}from"./index-BB0j5btG.js";import{P as Ds}from"./Pagination-DoGgdrhL.js";import{C as Ls}from"./index-BiLzNxDl.js";import{T as Rs}from"./Typography-ChgE300v.js";import{M as Hs}from"./index-BVwVdvrd.js";import{m as Ts}from"./hooks-B2OM4tF-.js";import{u as Is}from"./useIsomorphicLayoutEffect-BAXQmlEq.js";import{e as Ms}from"./componentPropsProcessors-UJEZy8aQ.js";import{S as Ps}from"./Scroll-CyeY1SIb.js";import{T as Bs}from"./index-BSWI5MkI.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Chjiymov.js";import"./index-DdXvKv-Q.js";import"./index-Hxt3JBiD.js";import"./index-D9kkE69R.js";import"./ProgressBar-TiBN-Oau.js";import"./index-DAce5EUV.js";import"./index-DbqLuSZO.js";import"./index-CbwBVTm2.js";import"./Link-fKbAdNrg.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./utils-Cu-nFXfw.js";import"./Counter-DXWSEFY6.js";import"./constants-BaREPXw5.js";import"./Tag-B37ZQLfx.js";import"./Dropdown-Dd0OUUBI.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-B7wZyJkK.js";import"./index-DO2qqcLs.js";import"./ChipChoiceRow-DLRP73U1.js";import"./constants-BIigMBdG.js";import"./index-DadV-Vij.js";import"./Divider-C1X9zrkx.js";import"./useValueControl-C51frgGe.js";import"./IconPredefined-DVxQYij_.js";import"./ButtonTonal-BhDRqpkU.js";import"./ButtonFilled-CRRsKqgX.js";import"./getRange-CHNeUywO.js";import"./index-Dz7uS-ju.js";import"./FuzzySearch-C8qpdhmO.js";import"./Calendar-DVEq1KzN.js";import"./TimePickerBase-DCzJzNNw.js";import"./List-Bh1gnpOJ.js";import"./TimePicker-D6UuKLBt.js";import"./Switch-Bvcyr2NO.js";import"./Spinner-PYn9r2mo.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-CCEfvHrp.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-B5tPpnc1.js";class Fo{constructor(n,t,i,a){this.filterKey=n,this.validate=t,this.parser=JSON.parse,this.serializer=JSON.stringify,this.getFilter=()=>{try{const r=this.getFromSource(),o=r?this.parser(r):null;return o&&this.validate(o)?o:null}catch{return null}},this.setFilter=r=>{const o=this.serializer(r);this.setToSource(o)},i&&(this.parser=i),a&&(this.serializer=a)}}class Vs extends Fo{getFromSource(){return Gn()&&new URL(window.location.href).searchParams.get(this.filterKey)||""}setToSource(n){if(Gn()){const t=new URL(window.location.href);t.searchParams.set(this.filterKey,n),history.replaceState({},"",t)}}}class zs extends Fo{getFromSource(){return Gn()&&localStorage.getItem(this.filterKey)||""}setToSource(n){Gn()&&localStorage.setItem(this.filterKey,n)}}const vr=({source:e})=>{const n=y.useCallback(i=>{e&&e.setFilter(i)},[e]);return{getData:y.useCallback(()=>e==null?void 0:e.getFilter(),[e]),setData:n}},$s=({options:e,parser:n,serializer:t})=>{const i=y.useMemo(()=>e?new Vs(e.filterQueryKey,e.validateData,n,t):void 0,[e,n,t]),a=y.useMemo(()=>e?new zs(e.filterLocalStorageKey,e.validateData):void 0,[e]),{getData:r,setData:o}=vr({source:i}),{getData:u,setData:s}=vr({source:a}),c=y.useCallback(h=>{o(h),s(h)},[o,s]);return{getDefaultFilter:y.useCallback(()=>{const h=u();return h||r()},[r,u]),setDataToStorages:c}},js=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.36.25 (2025-08-01)

### Only dependencies have been changed
* [@snack-uikit/chips@0.28.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.22](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)





## 0.36.24 (2025-07-24)


### Bug Fixes

* **FF-6453:** cell render for TreeCell, fix click on tree cell when selection is disabled ([d26c1ba](https://github.com/cloud-ru-tech/snack-uikit/commit/d26c1ba66819c80fd545539fc63e2a46477a0c0f))





## 0.36.23 (2025-07-23)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/list@0.32.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.21](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)





## 0.36.22 (2025-07-17)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/list@0.32.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)





## 0.36.21 (2025-07-17)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/list@0.31.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.7.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.36.20 (2025-07-16)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/chips@0.27.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/icon-predefined@0.7.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
* [@snack-uikit/info-block@0.6.31](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
* [@snack-uikit/list@0.31.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/pagination@0.10.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
* [@snack-uikit/scroll@0.10.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
* [@snack-uikit/skeleton@0.6.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
* [@snack-uikit/toggles@0.13.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.26](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
* [@snack-uikit/typography@0.8.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
* [@snack-uikit/utils@3.10.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.36.19 (2025-07-15)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/chips@0.27.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/icon-predefined@0.7.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
* [@snack-uikit/info-block@0.6.30](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
* [@snack-uikit/list@0.31.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/pagination@0.10.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
* [@snack-uikit/scroll@0.10.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
* [@snack-uikit/skeleton@0.6.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
* [@snack-uikit/toggles@0.13.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.25](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
* [@snack-uikit/typography@0.8.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
* [@snack-uikit/utils@3.10.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.36.18 (2025-07-10)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/icons@0.27.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/info-block@0.6.29](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
* [@snack-uikit/list@0.31.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/pagination@0.10.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
* [@snack-uikit/toggles@0.13.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.24](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.36.17 (2025-07-10)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/chips@0.27.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/info-block@0.6.28](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
* [@snack-uikit/list@0.31.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/pagination@0.10.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)





## 0.36.16 (2025-07-09)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/list@0.31.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)





## 0.36.15 (2025-07-07)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/list@0.31.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)





## 0.36.14 (2025-07-07)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/chips@0.27.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/icon-predefined@0.7.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
* [@snack-uikit/icons@0.27.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/info-block@0.6.27](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
* [@snack-uikit/list@0.31.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/pagination@0.10.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
* [@snack-uikit/scroll@0.10.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
* [@snack-uikit/skeleton@0.6.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
* [@snack-uikit/toggles@0.13.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.23](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
* [@snack-uikit/typography@0.8.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
* [@snack-uikit/utils@3.9.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.36.13 (2025-06-27)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/icons@0.27.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/info-block@0.6.26](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
* [@snack-uikit/list@0.30.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/pagination@0.10.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
* [@snack-uikit/toggles@0.13.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.22](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.36.12 (2025-06-23)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/list@0.30.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)





## 0.36.11 (2025-06-19)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/info-block@0.6.25](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
* [@snack-uikit/list@0.29.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.21](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.36.10 (2025-06-19)


### Bug Fixes

* **FF-0000:** table state control ([4059c7b](https://github.com/cloud-ru-tech/snack-uikit/commit/4059c7bb77e37cf1bb761583db960f93e0e24abb))





## 0.36.9 (2025-06-16)


### Bug Fixes

* **FF-0000:** rowSelection.onChange callback ([e5f537d](https://github.com/cloud-ru-tech/snack-uikit/commit/e5f537d8dcc26cda4bde8afd59b4ef334006f4af))





## 0.36.8 (2025-06-16)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/icons@0.26.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/info-block@0.6.24](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
* [@snack-uikit/list@0.29.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/pagination@0.10.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
* [@snack-uikit/toggles@0.13.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.36.7 (2025-06-16)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/list@0.29.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)





## 0.36.6 (2025-05-29)

### Only dependencies have been changed
* [@snack-uikit/toolbar@0.13.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)





## 0.36.5 (2025-05-26)

### Only dependencies have been changed

- [@snack-uikit/chips@0.27.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.29.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.13.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.36.4 (2025-05-16)

### Only dependencies have been changed

- [@snack-uikit/button@0.19.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.27.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icon-predefined@0.7.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
- [@snack-uikit/icons@0.26.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.23](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.29.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/scroll@0.10.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/skeleton@0.6.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.13.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.8.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
- [@snack-uikit/utils@3.8.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)

## 0.36.3 (2025-05-14)

### Only dependencies have been changed

- [@snack-uikit/chips@0.27.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.29.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.13.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.36.2 (2025-05-14)

### Only dependencies have been changed

- [@snack-uikit/chips@0.27.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.29.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.13.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.36.1 (2025-05-12)

### Only dependencies have been changed

- [@snack-uikit/button@0.19.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.27.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.22](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.28.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.13.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.36.0 (2025-04-23)

### Features

- **PDS-2086:** add nonce prop for scrollbars ([9bf1fb6](https://github.com/cloud-ru-tech/snack-uikit/commit/9bf1fb63a43d27fe0190a20c94ef2ee68f67f40f))

## 0.35.4 (2025-04-22)

### Bug Fixes

- **PDS-1971:** table fixes - column order, settings label, refactoring ([a1c34a3](https://github.com/cloud-ru-tech/snack-uikit/commit/a1c34a3783a0a0bf95253529d958ad69421819ce))

## 0.35.3 (2025-04-15)

### Bug Fixes

- **PDS-1889:** fixed header align in table ([2b7e448](https://github.com/cloud-ru-tech/snack-uikit/commit/2b7e448df3254396b7cb04e78feba24a4cee9629))

## 0.35.2 (2025-04-10)

### Bug Fixes

- **FF-6387:** add deep search for tree ([d1e9b97](https://github.com/cloud-ru-tech/snack-uikit/commit/d1e9b970205565a64245073dfe624f60fc9d5628))

## 0.35.1 (2025-04-07)

### Only dependencies have been changed

- [@snack-uikit/toolbar@0.12.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.35.0 (2025-03-26)

### Bug Fixes

- **PDS-1971:** newValue renaming ([37b4eb9](https://github.com/cloud-ru-tech/snack-uikit/commit/37b4eb9b11bb13db122edf3d8e2fea9b4b8e8b25))
- **PDS-1971:** useColumnSettings return compose as object ([61b3799](https://github.com/cloud-ru-tech/snack-uikit/commit/61b3799acd59e31546e6da44641d5a01738d55e5))

### Features

- **PDS-1971:** add columnSettings to savedState and mode of initvalue ([72863cf](https://github.com/cloud-ru-tech/snack-uikit/commit/72863cfdc7a2ae81b709755792615067b425efa2))

## 0.34.9 (2025-03-19)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.26.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.21](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.27.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.34.8 (2025-03-17)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.27.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.34.7 (2025-03-17)

### Only dependencies have been changed

- [@snack-uikit/button@0.19.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.26.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icon-predefined@0.7.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
- [@snack-uikit/icons@0.26.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.27.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/scroll@0.9.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/skeleton@0.6.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.8.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
- [@snack-uikit/utils@3.8.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)

## 0.34.6 (2025-03-14)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.26.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.27.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.34.5 (2025-03-13)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.27.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.34.4 (2025-03-13)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.25.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.27.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.34.3 (2025-03-12)

### Bug Fixes

- **PDS-1483:** invalid behavior with disabled columns sort by drag fixed ([4d4fc57](https://github.com/cloud-ru-tech/snack-uikit/commit/4d4fc5770f204378c37333a9d9fdf5f05520de48))
- **PDS-1483:** invalid columns order without id fixed ([c35ce70](https://github.com/cloud-ru-tech/snack-uikit/commit/c35ce70c162fcac4bf87f376ef3ed44cb230470a))

## 0.34.2 (2025-03-11)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.34.1 (2025-03-07)

### Bug Fixes

- **PDS-1483:** translation and initial column filters open state improvements for table ([d4ef555](https://github.com/cloud-ru-tech/snack-uikit/commit/d4ef5552a9a7883b01cdabcb96a22f1ee08d8d29))

# 0.34.0 (2025-03-06)

### Features

- **PDS-1483:** table columns reorder by drag and columns settings ([80d43af](https://github.com/cloud-ru-tech/snack-uikit/commit/80d43af40c6acca38e2d788fcfa4fbd944818059))

## 0.33.4 (2025-03-05)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.27.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.33.3 (2025-03-05)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.26.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.33.2 (2025-03-04)

### Only dependencies have been changed

- [@snack-uikit/chips@0.25.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.25.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.26.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.33.1 (2025-03-04)

### Only dependencies have been changed

- [@snack-uikit/chips@0.25.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.25.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.26.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

# 0.33.0 (2025-03-04)

### Features

- **PDS-681:** add save filter ([1406c6c](https://github.com/cloud-ru-tech/snack-uikit/commit/1406c6c447f337b5140135f8741b52ed1a0dfbf0))

# 0.32.0 (2025-03-03)

### Features

- **PDS-483:** table rowAutoHeight prop, removed default truncate when auto-height enabled ([0da9a86](https://github.com/cloud-ru-tech/snack-uikit/commit/0da9a861737fc35ba873a1795419d49c6cae51d1))

## 0.31.1 (2025-03-03)

### Only dependencies have been changed

- [@snack-uikit/chips@0.25.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/toolbar@0.11.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.31.0 (2025-02-27)

### Features

- **FF-6236:** infinite scroll in table ([09afb22](https://github.com/cloud-ru-tech/snack-uikit/commit/09afb2234211802c86722e36e17b9161f912b9e8))

# 0.30.0 (2025-02-26)

### Features

- **PDS-1487:** freeze columns size on resize ([f5f5694](https://github.com/cloud-ru-tech/snack-uikit/commit/f5f56948a5e0ba42f071a66e2de225465f67e980))

# 0.29.0 (2025-02-25)

### Features

- **PDS-569:** table bulk rows multiselect with shift key ([e5802e3](https://github.com/cloud-ru-tech/snack-uikit/commit/e5802e390c0beeb0d4cae20235f3e82fccb83b24))

## 0.28.7 (2025-02-25)

### Only dependencies have been changed

- [@snack-uikit/chips@0.25.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.26.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.11.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.28.6 (2025-02-24)

### Only dependencies have been changed

- [@snack-uikit/toolbar@0.11.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.28.5 (2025-02-10)

### Bug Fixes

- **PDS-1081:** make type for filters in generic non required ([136ea97](https://github.com/cloud-ru-tech/snack-uikit/commit/136ea971801290030eb6ad68bfcb8c06b2b3e732))

## 0.28.4 (2025-02-10)

### Only dependencies have been changed

- [@snack-uikit/chips@0.25.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.25.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.11.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.28.3 (2025-02-06)

### Bug Fixes

- **PDS-1081:** make type for filters in generic non required ([91371ec](https://github.com/cloud-ru-tech/snack-uikit/commit/91371ec7a78d2cf0f1caf545911cc578b95f2ee9))

## 0.28.2 (2025-02-06)

### Only dependencies have been changed

- [@snack-uikit/chips@0.25.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.24.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.11.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.28.1 (2025-02-05)

### Only dependencies have been changed

- [@snack-uikit/toolbar@0.11.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.28.0 (2025-02-05)

### BREAKING CHANGES

- **PDS-1081:** change columnFilters type to ChipChoiceRowProps, add suppressSearch prop ([5fb3278](https://github.com/cloud-ru-tech/snack-uikit/commit/5fb327801a846d837346773ed7d4747e78832b19))

## 0.27.3 (2025-02-04)

### Only dependencies have been changed

- [@snack-uikit/chips@0.24.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.24.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.10.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.27.2 (2025-02-04)

### Only dependencies have been changed

- [@snack-uikit/chips@0.24.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.24.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.10.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.27.1 (2025-01-31)

### Bug Fixes

- **PDS-1461:** update after token change ([3324d1d](https://github.com/cloud-ru-tech/snack-uikit/commit/3324d1da07b8d0e26186046d859985774fc06ce6))

# 0.27.0 (2025-01-23)

### BREAKING CHANGES

- **PDS-926:** add bulkActions prop, remove onDelete and toolbarBefore props ([e9e9afd](https://github.com/cloud-ru-tech/snack-uikit/commit/e9e9afdd0e69ed505bee6157151879fe01bcaf57))

## 0.26.7 (2025-01-22)

### Only dependencies have been changed

- [@snack-uikit/chips@0.24.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.23.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.26.6 (2025-01-20)

### Only dependencies have been changed

- [@snack-uikit/chips@0.23.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.22.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.26.5 (2025-01-15)

### Bug Fixes

- **FF-5532:** table search filter pagination bug fixed ([36f8799](https://github.com/cloud-ru-tech/snack-uikit/commit/36f879940a2d2244f98456ae890c708a748e275e))

## 0.26.4 (2025-01-13)

### Only dependencies have been changed

- [@snack-uikit/chips@0.23.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.26.3 (2024-12-26)

### Bug Fixes

- **FF-5734:** eslint fixes ([5ce6f1f](https://github.com/cloud-ru-tech/snack-uikit/commit/5ce6f1f22d3ac3dd367cbdd184e5873e67837c8b))

## 0.26.2 (2024-12-25)

### Only dependencies have been changed

- [@snack-uikit/chips@0.23.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.22.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.26.1 (2024-12-25)

### Only dependencies have been changed

- [@snack-uikit/chips@0.23.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

# 0.26.0 (2024-12-24)

### Features

- **PDS-671:** add tree cell ([794a3c2](https://github.com/cloud-ru-tech/snack-uikit/commit/794a3c246789147cb8c59d347a692550628b3081))

## 0.25.17 (2024-12-18)

### Only dependencies have been changed

- [@snack-uikit/pagination@0.10.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)

## 0.25.16 (2024-12-18)

### Only dependencies have been changed

- [@snack-uikit/chips@0.22.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.22.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.15 (2024-12-17)

### Only dependencies have been changed

- [@snack-uikit/button@0.19.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.22.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.21.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.9.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.14 (2024-12-12)

### Only dependencies have been changed

- [@snack-uikit/button@0.19.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.22.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icon-predefined@0.7.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
- [@snack-uikit/icons@0.24.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.21.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.9.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/scroll@0.9.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/skeleton@0.6.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.8.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
- [@snack-uikit/utils@3.6.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)

## 0.25.13 (2024-12-12)

### Only dependencies have been changed

- [@snack-uikit/chips@0.22.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.21.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.12 (2024-12-04)

### Only dependencies have been changed

- [@snack-uikit/toolbar@0.9.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.11 (2024-11-29)

### Only dependencies have been changed

- [@snack-uikit/chips@0.22.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.21.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/skeleton@0.6.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/typography@0.8.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)

## 0.25.10 (2024-11-26)

### Only dependencies have been changed

- [@snack-uikit/chips@0.22.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.25.9 (2024-11-19)

### Only dependencies have been changed

- [@snack-uikit/chips@0.21.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.21.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.8 (2024-11-14)

### Only dependencies have been changed

- [@snack-uikit/chips@0.21.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.21.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.7 (2024-11-14)

### Dependencies

- **FF-5678:** up deps classnames/uncontrollable ([8f0d645](https://github.com/cloud-ru-tech/snack-uikit/commit/8f0d645fc7eb8eaf95660cd0ae7d4b550821059b))

## 0.25.6 (2024-11-12)

### Only dependencies have been changed

- [@snack-uikit/button@0.19.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.20.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.21.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.9.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.5 (2024-11-11)

### Only dependencies have been changed

- [@snack-uikit/chips@0.20.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.25.4 (2024-11-08)

### Only dependencies have been changed

- [@snack-uikit/chips@0.19.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.21.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.3 (2024-11-08)

### Only dependencies have been changed

- [@snack-uikit/chips@0.19.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.21.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.2 (2024-11-05)

### Only dependencies have been changed

- [@snack-uikit/chips@0.19.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.21.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.1 (2024-10-31)

### Bug Fixes

- **PDS-438:** stylelint update ([9d40d4e](https://github.com/cloud-ru-tech/snack-uikit/commit/9d40d4eb445eeaaca5a2dc1f6421d496f86aeac3))

# 0.25.0 (2024-10-28)

### Features

- **FF-5782:** sass use/forward approach ([3e53869](https://github.com/cloud-ru-tech/snack-uikit/commit/3e53869ace864a7718e434b7f410c15dbd911cd5))

# 0.24.0 (2024-10-28)

### Features

- **FF-5502:** add cjs build ([ffada28](https://github.com/cloud-ru-tech/snack-uikit/commit/ffada28bfdc37ea760eb1c8759342e680bdf8dd6))

## 0.23.8 (2024-10-23)

### Only dependencies have been changed

- [@snack-uikit/chips@0.16.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.18.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.63](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.23.7 (2024-10-16)

### Bug Fixes

- **PDS-755:** fix error icon in table notification list ([e4b0409](https://github.com/cloud-ru-tech/snack-uikit/commit/e4b040948862f54ed219558a9023d816c4d4fa3f))

## 0.23.6 (2024-10-14)

### Only dependencies have been changed

- [@snack-uikit/chips@0.16.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.17.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.61](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.23.5 (2024-10-08)

### Only dependencies have been changed

- [@snack-uikit/chips@0.16.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.23.4 (2024-09-27)

### Only dependencies have been changed

- [@snack-uikit/chips@0.15.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.17.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.60](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.23.3 (2024-09-26)

### Only dependencies have been changed

- [@snack-uikit/chips@0.15.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.16.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/scroll@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.59](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.24](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.23.2 (2024-09-24)

### Only dependencies have been changed

- [@snack-uikit/chips@0.15.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.16.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.58](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.23](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.23.1 (2024-09-23)

### Bug Fixes

- **PDS-480:** remove direct usage of browser api elements ([1231ff7](https://github.com/cloud-ru-tech/snack-uikit/commit/1231ff7ab7a1b210b579a7b694633ef23bffcf44))

# 0.23.0 (2024-09-12)

### BREAKING CHANGES

- **FF-5443:** extracted export functions from component ([eba84e2](https://github.com/cloud-ru-tech/snack-uikit/commit/eba84e2a67efba27300c0a952890ea3cb61c8794))

## 0.22.2 (2024-09-06)

### Only dependencies have been changed

- [@snack-uikit/chips@0.15.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.16.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.56](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.21](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.22.1 (2024-08-23)

### Only dependencies have been changed

- [@snack-uikit/chips@0.15.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

# 0.22.0 (2024-08-22)

### Features

- **DPS-0000:** add row value to renderDescription ([752d6f2](https://github.com/cloud-ru-tech/snack-uikit/commit/752d6f2399fb734e3ffd9b9c0c79b3c2b735960c))

## 0.21.1 (2024-08-21)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.21](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.16.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.55](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.21.0 (2024-08-19)

### Features

- **PDS-516:** add saving resize mode ([e3c0137](https://github.com/cloud-ru-tech/snack-uikit/commit/e3c0137c6ff88bb4ea262f8509add7707ba65431))

## 0.20.13 (2024-08-15)

### Only dependencies have been changed

- [@snack-uikit/pagination@0.7.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)

## 0.20.12 (2024-08-14)

### Only dependencies have been changed

- [@snack-uikit/button@0.17.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.14.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.15.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.54](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.20.11 (2024-08-13)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.15.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.10.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.53](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.20.10 (2024-08-07)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.15.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.52](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.20.9 (2024-08-07)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.15.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.51](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.20.8 (2024-08-06)

### Only dependencies have been changed

- [@snack-uikit/button@0.17.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.14.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.14.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.50](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.20.7 (2024-08-02)

### Bug Fixes

- **PDS-227:** fix status column ([b906c30](https://github.com/cloud-ru-tech/snack-uikit/commit/b906c30d574a8cec4b70cfc6b309a2443a41a019))

## 0.20.6 (2024-07-31)

### Bug Fixes

- **FF-3788:** updated typescript to v5 ([89e3338](https://github.com/cloud-ru-tech/snack-uikit/commit/89e3338a3ef4df24e4c20d9a9c8cd16e7934ba63))

## 0.20.5 (2024-07-29)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.14.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.10.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.49](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.20.4 (2024-07-25)

### Bug Fixes

- **FF-5318:** fixed table actions dropdown trigger ([270b67b](https://github.com/cloud-ru-tech/snack-uikit/commit/270b67bba666723b8ac2aaeeb0061230c8c8400a))

## 0.20.3 (2024-07-19)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.22.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.14.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.10.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.48](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.20.2 (2024-07-19)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.14.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.47](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.20.1 (2024-07-12)

### Bug Fixes

- **FF-5031:** enhance export format ([f310a4c](https://github.com/cloud-ru-tech/snack-uikit/commit/f310a4cea7ff077776258f4ef4356cad7afab51a))

# 0.20.0 (2024-07-10)

### Bug Fixes

- **FF-5031:** fix results value view vith non empty filteredTopRows ([49fd328](https://github.com/cloud-ru-tech/snack-uikit/commit/49fd32812bc4a253af8331c649b3dd6b26cde795))

### Features

- **FF-5031:** activate autoResetPageIndex option ([9491074](https://github.com/cloud-ru-tech/snack-uikit/commit/9491074d85507a413c7202fe6050488f0de03dd4))
- **FF-5031:** add pagination.optionsRender; fix loading skeleton count ([0f518f5](https://github.com/cloud-ru-tech/snack-uikit/commit/0f518f592945b53eb2be18fad50f87251c85b902))
- **FF-5031:** fix pinned rows selection from toolbar checkbox ([caa0633](https://github.com/cloud-ru-tech/snack-uikit/commit/caa063317ee2b98e1b1e7915d1a159f909699ffa))

### BREAKING CHANGES

- **FF-5031:** expand export settings - add formats and filter settings ([b0a6f5a](https://github.com/cloud-ru-tech/snack-uikit/commit/b0a6f5a3650a68762cf0570c1ca7c36de0f201a2))

## 0.19.6 (2024-07-09)

### Only dependencies have been changed

- [@snack-uikit/toolbar@0.7.46](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.19.5 (2024-06-27)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.13.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.45](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.19.4 (2024-06-26)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.13.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.44](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.19.3 (2024-06-20)

### Bug Fixes

- **FF-001:** fix sort mouseUp action -> moved to onClick ([97f6da6](https://github.com/cloud-ru-tech/snack-uikit/commit/97f6da6804b1326f88beeae50a7af8eabb77f9b9))

## 0.19.2 (2024-06-11)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.13.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.10.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.42](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.19.1 (2024-06-11)

### Only dependencies have been changed

- [@snack-uikit/button@0.17.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.14.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.13.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.41](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.19.0 (2024-06-06)

### Features

- **PDS-287:** add row pinning functionality to table ([f33a911](https://github.com/cloud-ru-tech/snack-uikit/commit/f33a9116d78de8ab09a01a0db22999e09c7fd773))

## 0.18.1 (2024-06-06)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.13.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.40](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.18.0 (2024-06-03)

### Features

- **FF-0000:** fix search props ([2db9032](https://github.com/cloud-ru-tech/snack-uikit/commit/2db903299800ce149e6ebf69c9770cc16875a1f8))

## 0.17.9 (2024-05-31)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.13.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.39](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.17.8 (2024-05-30)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.3.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.13.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/scroll@0.6.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.38](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.17.7 (2024-05-27)

### Bug Fixes

- **FF-000:** reset search in serverTable on search prop change ([bb7706f](https://github.com/cloud-ru-tech/snack-uikit/commit/bb7706f888bc279eb21443f4b0a789d537915af3))

## 0.17.6 (2024-05-23)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.13.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.37](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.17.5 (2024-05-23)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.13.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.36](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.17.4 (2024-05-21)

### Bug Fixes

- **FF-4717:** do not reset page index when manual pagination is enabled ([8873460](https://github.com/cloud-ru-tech/snack-uikit/commit/8873460c458c75ec19e6e27a1f15e208a8e36c9c))
- **FF-4717:** fix simple search when fuzzy filter is disabled ([cec391a](https://github.com/cloud-ru-tech/snack-uikit/commit/cec391a8127228c425a0bc88d3da31b991e13e20))

## 0.17.3 (2024-05-14)

### Bug Fixes

- **PDS-135:** prevent loop in page number changing ([2da818f](https://github.com/cloud-ru-tech/snack-uikit/commit/2da818f89c175782eeb2323f30e9f3459594fece))

## 0.17.2 (2024-05-13)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.17.1 (2024-05-13)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.13.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.35](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.17.0 (2024-05-08)

### Bug Fixes

- **PDS-135:** change column sizing when header changes ([985fee7](https://github.com/cloud-ru-tech/snack-uikit/commit/985fee74f695cfc7c19dba2a1c73202a83295bc8))
- **PDS-135:** fix first resize of columns, add reset of column size on double-click ([3094130](https://github.com/cloud-ru-tech/snack-uikit/commit/309413044ddacafe077f16686469d73fa676ded5))
- **PDS-135:** keep page number when data is updated ([76b0b74](https://github.com/cloud-ru-tech/snack-uikit/commit/76b0b7448f112575bb35b413ac3db54ab938f70e))
- **PDS-135:** right-pinned column does not change its place when resizing ([60b96b4](https://github.com/cloud-ru-tech/snack-uikit/commit/60b96b4dd652d5bc106d1d9b5ed1cc5ec9925d67))
- **PDS-190:** redundant scroll, click on resize handler ([e520169](https://github.com/cloud-ru-tech/snack-uikit/commit/e5201697109c0dbb4e09034401367026c312fe9a))
- **PDS-197:** fix copyCell flex behaviour ([cb3c2a5](https://github.com/cloud-ru-tech/snack-uikit/commit/cb3c2a516431cd1877756c3e3cc2f8e42b47ce83))

### Features

- **PDS-135:** add enableFuzzySearch prop ([cf203f3](https://github.com/cloud-ru-tech/snack-uikit/commit/cf203f33f27bcd34927de0090c3b7f5a8046fdab))
- **PDS-208:** add headerAlign prop ([066fb90](https://github.com/cloud-ru-tech/snack-uikit/commit/066fb90898ed542d1763f23556b30a494b63c2b9))

### BREAKING CHANGES

- **PDS-135:** add full api from list to actions ([aae4ed3](https://github.com/cloud-ru-tech/snack-uikit/commit/aae4ed341d2e397b079e810a9b38762d9a96d952))

## 0.16.8 (2024-05-08)

### Only dependencies have been changed

- [@snack-uikit/chips@0.13.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.21.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.3.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.11.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/tag@0.9.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.33](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.16.7 (2024-04-27)

### Only dependencies have been changed

- [@snack-uikit/chips@0.13.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.11.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.32](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.16.6 (2024-04-27)

### Only dependencies have been changed

- [@snack-uikit/chips@0.13.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.11.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.31](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.16.5 (2024-04-25)

### Only dependencies have been changed

- [@snack-uikit/chips@0.13.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.11.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.30](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.16.4 (2024-04-24)

### Only dependencies have been changed

- [@snack-uikit/toolbar@0.7.29](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.16.3 (2024-04-23)

### Only dependencies have been changed

- [@snack-uikit/button@0.17.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.13.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icon-predefined@0.5.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
- [@snack-uikit/info-block@0.3.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.11.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/scroll@0.5.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/skeleton@0.3.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
- [@snack-uikit/tag@0.9.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.28](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
- [@snack-uikit/utils@3.3.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)

## 0.16.2 (2024-04-22)

### Only dependencies have been changed

- [@snack-uikit/chips@0.12.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/tag@0.9.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.27](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.16.1 (2024-04-22)

### Only dependencies have been changed

- [@snack-uikit/list@0.11.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.26](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.16.0 (2024-04-17)

### Features

- **PDS-134:** add data-test-id prop to rowActions item ([c5d5bb2](https://github.com/cloud-ru-tech/snack-uikit/commit/c5d5bb2747ace1bb016cf7b468aab307ce68f888))

## 0.15.1 (2024-04-08)

### Only dependencies have been changed

- [@snack-uikit/list@0.10.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.25](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.15.0 (2024-03-28)

### Features

- **PDS-0000:** add getRowId prop into table ([3e1a0a7](https://github.com/cloud-ru-tech/snack-uikit/commit/3e1a0a72fe6b54b24275cf553779063b01c62149))

## 0.14.18 (2024-03-26)

### Only dependencies have been changed

- [@snack-uikit/chips@0.12.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.3.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.9.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/tag@0.8.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.24](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.14.17 (2024-03-22)

### Only dependencies have been changed

- [@snack-uikit/chips@0.12.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.9.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.23](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.14.16 (2024-03-19)

### Only dependencies have been changed

- [@snack-uikit/list@0.8.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.22](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.15 (2024-03-11)

### Only dependencies have been changed

- [@snack-uikit/list@0.8.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.21](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.14 (2024-03-07)

### Only dependencies have been changed

- [@snack-uikit/list@0.7.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.13 (2024-03-02)

### Only dependencies have been changed

- [@snack-uikit/chips@0.12.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.14.12 (2024-03-01)

### Only dependencies have been changed

- [@snack-uikit/chips@0.12.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.14.11 (2024-02-29)

### Only dependencies have been changed

- [@snack-uikit/chips@0.12.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.7.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.10 (2024-02-29)

### Only dependencies have been changed

- [@snack-uikit/chips@0.12.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.3.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.7.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.14.9 (2024-02-28)

### Only dependencies have been changed

- [@snack-uikit/button@0.17.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.12.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icon-predefined@0.5.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
- [@snack-uikit/info-block@0.3.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.6.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.8 (2024-02-27)

### Bug Fixes

- **FF-3424:** fix table global search ([b5ebe5b](https://github.com/cloud-ru-tech/snack-uikit/commit/b5ebe5b227fbfaefdd1ce1dda858794f1ca546da))

## 0.14.7 (2024-02-27)

### Only dependencies have been changed

- [@snack-uikit/list@0.5.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.6 (2024-02-26)

### Bug Fixes

- **FF-4334:** add props for manual sort, pagination, filter; add scroll ref props ([06c57b0](https://github.com/cloud-ru-tech/snack-uikit/commit/06c57b0320f75d5e81ae1bbac0b3157cded96a5d))

## 0.14.5 (2024-02-23)

### Only dependencies have been changed

- [@snack-uikit/chips@0.11.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.4.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/tag@0.8.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.4 (2024-02-22)

### Only dependencies have been changed

- [@snack-uikit/chips@0.11.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.2.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.3.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/scroll@0.5.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/tag@0.7.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.3 (2024-02-20)

### Bug Fixes

- **FF-4297:** apply system-layer tokens ([7c8fd4b](https://github.com/cloud-ru-tech/snack-uikit/commit/7c8fd4b5334360b2fc31da92973b6835ffa287af))

## 0.14.2 (2024-02-13)

### Bug Fixes

- **FF-0000:** table actions ([da9a808](https://github.com/cloud-ru-tech/snack-uikit/commit/da9a8086bd09f7eee6cabee46a5b1bed932732ab))

## 0.14.1 (2024-02-12)

### Bug Fixes

- **FF-4205:** table default cell for columnDefs ([84cfc41](https://github.com/cloud-ru-tech/snack-uikit/commit/84cfc41d43a605500ec3ef1757e5fb4515d40457))
- **FF-4205:** update locale usage ([bd4095b](https://github.com/cloud-ru-tech/snack-uikit/commit/bd4095bc875c2efc95a0549a366d5b40dd424741))

# 0.14.0 (2024-02-09)

### Bug Fixes

- **FF-0000:** add box-sizing to empty state ([8557d32](https://github.com/cloud-ru-tech/snack-uikit/commit/8557d32b57ee0d21c3f9aba6681502012405c22d))

### Features

- **FF-4242:** add table errorDataState ([3e9a33f](https://github.com/cloud-ru-tech/snack-uikit/commit/3e9a33fa83845adf36970d018e0e7e65f59b41ac))
- **FF-4242:** copy cell processes click event full width ([da55c4c](https://github.com/cloud-ru-tech/snack-uikit/commit/da55c4c2aca3d406a34fa2806344dc68cf83b5cb))

## 0.13.3 (2024-02-09)

### Bug Fixes

- **FF-4242:** add padding to emptyState ([13b0413](https://github.com/cloud-ru-tech/snack-uikit/commit/13b041350962a172c71eaad4f3de544c6b9800c6))

## 0.13.2 (2024-02-09)

### Only dependencies have been changed

- [@snack-uikit/chips@0.11.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/locale@0.2.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/locale/CHANGELOG.md)

## 0.13.1 (2024-02-08)

### Only dependencies have been changed

- [@snack-uikit/chips@0.11.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.3.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/locale@0.2.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/locale/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.13.0 (2024-02-07)

### Bug Fixes

- **FF-4187:** change local no data to InfoBlock ([542cf0d](https://github.com/cloud-ru-tech/snack-uikit/commit/542cf0de8fed7f4ab5e2bca3afff1318b30a6043))

### Features

- **FF-4241:** add ServerTable; add CopyCell ([2cf16c1](https://github.com/cloud-ru-tech/snack-uikit/commit/2cf16c15e72a93f20d40c1bc54d7708c1a273079))

## 0.12.1 (2024-02-07)

### Only dependencies have been changed

- [@snack-uikit/chips@0.11.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/locale@0.1.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/locale/CHANGELOG.md)

# 0.12.0 (2024-02-06)

### Features

- **FF-4166:** add table locales ([d59b6c0](https://github.com/cloud-ru-tech/snack-uikit/commit/d59b6c08ef6811ad65fa0718266025afc62b4434))

## 0.11.7 (2024-02-05)

### Only dependencies have been changed

- [@snack-uikit/chips@0.10.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.20.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/list@0.2.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/tag@0.7.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.11.6 (2024-02-05)

### Only dependencies have been changed

- [@snack-uikit/button@0.16.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.10.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.11.5 (2024-02-02)

### Only dependencies have been changed

- [@snack-uikit/chips@0.10.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.11.4 (2024-02-02)

### Only dependencies have been changed

- [@snack-uikit/list@0.2.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.11.3 (2024-02-01)

### Only dependencies have been changed

- [@snack-uikit/chips@0.10.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.1.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/tag@0.7.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.11.2 (2024-01-31)

### Only dependencies have been changed

- [@snack-uikit/chips@0.10.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.1.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/tag@0.7.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.11.1 (2024-01-30)

### Only dependencies have been changed

- [@snack-uikit/list@0.1.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.11.0 (2024-01-30)

### BREAKING CHANGES

- **FF-4075:** change usage droplist to list package ([4ce6391](https://github.com/cloud-ru-tech/snack-uikit/commit/4ce63915e838a46a3776e8e21393695a37d2fdd3))

## 0.10.2 (2024-01-23)

### Only dependencies have been changed

- [@snack-uikit/chips@0.10.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.12.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/icons@0.20.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.10.1 (2024-01-18)

### Only dependencies have been changed

- [@snack-uikit/toolbar@0.6.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.10.0 (2024-01-18)

### Features

- **FF-4102:** update toolbar usage, add 'toolbarBeforeSearch' prop ([6acf0ba](https://github.com/cloud-ru-tech/snack-uikit/commit/6acf0ba5bfb1afaaa485857f3058b65a92f6c75c))

# 0.9.0 (2024-01-16)

### Features

- **FF-4093:** table columns resizing ([8cae511](https://github.com/cloud-ru-tech/snack-uikit/commit/8cae5116f73f079ce3087099253390f2e79034fe))

## 0.8.9 (2023-12-29)

### Bug Fixes

- **FF-3960:** change child components size ([2ce2369](https://github.com/cloud-ru-tech/snack-uikit/commit/2ce2369d6f8c05f8688d61f8c53df4956196b52c))

## 0.8.8 (2023-12-28)

### Only dependencies have been changed

- [@snack-uikit/button@0.15.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.10.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.12.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/icon-predefined@0.4.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.5.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.6.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)

## 0.8.7 (2023-12-26)

### Bug Fixes

- **FF-0:** table xlsx dep ([039504a](https://github.com/cloud-ru-tech/snack-uikit/commit/039504aa7a5b4b0793d6b6cb1ce676905eba704b))

## 0.8.6 (2023-12-25)

### Only dependencies have been changed

- [@snack-uikit/chips@0.10.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.12.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toolbar@0.5.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.8.5 (2023-12-25)

### Bug Fixes

- **FF-4014:** fix infinite width without limits & export some types ([4dc82d3](https://github.com/cloud-ru-tech/snack-uikit/commit/4dc82d334f1cbb0b604d31687e60cfe338c4e679))

## 0.8.4 (2023-12-25)

### Bug Fixes

- **FF-0000:** table bundeled dep ([e4b5566](https://github.com/cloud-ru-tech/snack-uikit/commit/e4b5566237573de52c88eaf56a018d51edc6f6c2))

## 0.8.3 (2023-12-22)

### Bug Fixes

- **FF-0000:** table vendor deps ([6ef48af](https://github.com/cloud-ru-tech/snack-uikit/commit/6ef48afd4cbd260a4948209bcf6d721e14221b52))

## 0.8.2 (2023-12-18)

### Dependencies

- **FF-3874:** update deps ([2a5e15e](https://github.com/cloud-ru-tech/snack-uikit/commit/2a5e15e27473df717ceccef6d92824bf0e79cd26))

## 0.8.1 (2023-12-14)

### Only dependencies have been changed

- [@snack-uikit/chips@0.10.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.12.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/icons@0.19.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/pagination@0.5.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.5.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

# 0.8.0 (2023-12-14)

### BREAKING CHANGES

- **FF-3729:** replace enum with unions ([910db4a](https://github.com/cloud-ru-tech/snack-uikit/commit/910db4aa8231ccbc58e538e5c5c1f461b1dec275))

## 0.7.2 (2023-12-07)

### Only dependencies have been changed

- [@snack-uikit/chips@0.9.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.11.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toolbar@0.4.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.7.1 (2023-12-06)

### Bug Fixes

- **FF-3646:** fix refresh button render in case without onRefresh callback in props ([d99a0e6](https://github.com/cloud-ru-tech/snack-uikit/commit/d99a0e6ef75d6c0d5c49f0c06259c92584821a04))

# 0.7.0 (2023-12-06)

### Bug Fixes

- **FF-0000:** remove extractDataProps ([9d676b9](https://github.com/cloud-ru-tech/snack-uikit/commit/9d676b9df214167bfd1b7ce9f1590891ca62f9a3))
- **FF-3409:** fix RowActionsCell button ([9704aba](https://github.com/cloud-ru-tech/snack-uikit/commit/9704aba6527f0e6fce0e90982aeca62adff57d34))
- **FF-3578:** element order in export functions ([a6d5487](https://github.com/cloud-ru-tech/snack-uikit/commit/a6d5487636d931fbd748ad70e76a8dd62b23b374))
- **FF-3643:** add manual pagination control ([9d9b732](https://github.com/cloud-ru-tech/snack-uikit/commit/9d9b732258e06bd586f9cb06feec93bbc16e38b1))
- **FF-3643:** fix onDelete/onCheck action ([b46ebe5](https://github.com/cloud-ru-tech/snack-uikit/commit/b46ebe5a123aed64e3aecf2bf8fc2165ce9deb60))
- **FF-3643:** fix radio selection view ([918c07f](https://github.com/cloud-ru-tech/snack-uikit/commit/918c07fefb3db21eb03501105a9a89703e72ec84))
- **FF-3711:** fix align sort icon in header ([c527892](https://github.com/cloud-ru-tech/snack-uikit/commit/c52789250585c3d778743175ad6168dfe816e172))
- **FF-3712:** chips usage update ([dee75b1](https://github.com/cloud-ru-tech/snack-uikit/commit/dee75b1725afdc1a90d734b55c3d18f4f168664f))

### Features

- **FF-2653:** add Table package ([29ec955](https://github.com/cloud-ru-tech/snack-uikit/commit/29ec9557279d88bf7bb281bbd524ba747d1b817b))
- **FF-3309:** table additions ([e6936f0](https://github.com/cloud-ru-tech/snack-uikit/commit/e6936f08e5b2d59fca98ab184aa1a2c5aa769ddc))
- **FF-3326:** use useKeyboardNavigation from Droplist package instead of local implementation ([9615d55](https://github.com/cloud-ru-tech/snack-uikit/commit/9615d5589ee6743ad7fc24c95e1fb96a9ab42752))
- **FF-3392:** added csv,xlsx export functions ([d4f1a68](https://github.com/cloud-ru-tech/snack-uikit/commit/d4f1a68e0ec8c47ab3f3865c13846d4a097b386a))
- **FF-3409:** replace ButtonLight to ButtonFunction ([e76a1db](https://github.com/cloud-ru-tech/snack-uikit/commit/e76a1dbf2e2db07a9197c413619e4df6f5976246))
- **FF-3711:** update rows volume chip view ([bbd7a80](https://github.com/cloud-ru-tech/snack-uikit/commit/bbd7a80b3bfd273f182cc1e8f9e96bf9d3e924df))

### BREAKING CHANGES

- **FF-3823:** move to snack-uikit scope ([ac9e30d](https://github.com/cloud-ru-tech/snack-uikit/commit/ac9e30d574d529b2bf4f5184b70c511c981a6032))

## 0.6.4 (2023-12-05)

### Only dependencies have been changed

- [@snack-uikit/chips@0.8.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.6.3 (2023-11-29)

### Only dependencies have been changed

- [@snack-uikit/chips@0.8.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toolbar@0.3.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.6.2 (2023-11-22)

### Bug Fixes

- **FF-3711:** fix align sort icon in header ([c527892](https://github.com/cloud-ru-tech/snack-uikit/commit/c52789250585c3d778743175ad6168dfe816e172))

## 0.6.1 (2023-11-22)

### Only dependencies have been changed

- [@snack-uikit/chips@0.8.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toggles@0.7.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.3.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.6.0 (2023-11-21)

### Features

- **FF-3711:** update rows volume chip view ([bbd7a80](https://github.com/cloud-ru-tech/snack-uikit/commit/bbd7a80b3bfd273f182cc1e8f9e96bf9d3e924df))

## 0.5.10 (2023-11-21)

### Only dependencies have been changed

- [@snack-uikit/chips@0.8.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toggles@0.6.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.3.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.5.9 (2023-11-16)

### Only dependencies have been changed

- [@snack-uikit/chips@0.7.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toolbar@0.3.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.5.8 (2023-11-16)

### Only dependencies have been changed

- [@snack-uikit/chips@0.7.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toggles@0.6.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.3.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.5.7 (2023-11-16)

### Bug Fixes

- **FF-3712:** chips usage update ([dee75b1](https://github.com/cloud-ru-tech/snack-uikit/commit/dee75b1725afdc1a90d734b55c3d18f4f168664f))

## 0.5.6 (2023-11-14)

### Bug Fixes

- **FF-3643:** fix radio selection view ([918c07f](https://github.com/cloud-ru-tech/snack-uikit/commit/918c07fefb3db21eb03501105a9a89703e72ec84))

## 0.5.5 (2023-11-09)

### Bug Fixes

- **FF-3643:** add manual pagination control ([9d9b732](https://github.com/cloud-ru-tech/snack-uikit/commit/9d9b732258e06bd586f9cb06feec93bbc16e38b1))
- **FF-3643:** fix onDelete/onCheck action ([b46ebe5](https://github.com/cloud-ru-tech/snack-uikit/commit/b46ebe5a123aed64e3aecf2bf8fc2165ce9deb60))

## 0.5.4 (2023-11-09)

### Only dependencies have been changed

- [@snack-uikit/chips@0.6.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/icons@0.18.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/pagination@0.4.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.5.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.2.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.5.3 (2023-11-08)

### Only dependencies have been changed

- [@snack-uikit/button@0.13.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/icon-predefined@0.2.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
- [@snack-uikit/pagination@0.4.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/scroll@0.3.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/skeleton@0.2.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
- [@snack-uikit/toggles@0.5.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.2.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.4.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
- [@snack-uikit/utils@2.0.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)

## 0.5.2 (2023-10-31)

### Bug Fixes

- **FF-0000:** remove extractDataProps ([9d676b9](https://github.com/cloud-ru-tech/snack-uikit/commit/9d676b9df214167bfd1b7ce9f1590891ca62f9a3))

## 0.5.1 (2023-10-28)

### Bug Fixes

- **FF-3578:** element order in export functions ([a6d5487](https://github.com/cloud-ru-tech/snack-uikit/commit/a6d5487636d931fbd748ad70e76a8dd62b23b374))

# 0.5.0 (2023-10-26)

### Features

- **FF-3309:** table additions ([e6936f0](https://github.com/cloud-ru-tech/snack-uikit/commit/e6936f08e5b2d59fca98ab184aa1a2c5aa769ddc))

## 0.4.1 (2023-10-25)

### Only dependencies have been changed

- [@snack-uikit/button@0.13.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/loaders@0.3.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)
- [@snack-uikit/scroll@0.3.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/toggles@0.5.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.4.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
- [@snack-uikit/utils@1.3.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)

# 0.4.0 (2023-10-18)

### Features

- **FF-3326:** use useKeyboardNavigation from Droplist package instead of local implementation ([9615d55](https://github.com/cloud-ru-tech/snack-uikit/commit/9615d5589ee6743ad7fc24c95e1fb96a9ab42752))

## 0.3.5 (2023-10-16)

### Only dependencies have been changed

- [@snack-uikit/droplist@0.9.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/icons@0.17.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/toggles@0.5.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.3.4 (2023-10-13)

### Only dependencies have been changed

- [@snack-uikit/droplist@0.9.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toggles@0.5.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)

## 0.3.3 (2023-10-13)

### Only dependencies have been changed

- [@snack-uikit/droplist@0.9.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/scroll@0.3.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/toggles@0.5.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.4.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)

## 0.3.2 (2023-10-12)

### Only dependencies have been changed

- [@snack-uikit/button@0.13.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/droplist@0.9.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/loaders@0.3.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.3.1 (2023-10-12)

### Only dependencies have been changed

- [@snack-uikit/droplist@0.9.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toggles@0.5.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

# 0.3.0 (2023-10-11)

### Features

- **FF-3392:** added csv,xlsx export functions ([d4f1a68](https://github.com/cloud-ru-tech/snack-uikit/commit/d4f1a68e0ec8c47ab3f3865c13846d4a097b386a))

## 0.2.3 (2023-10-11)

### Bug Fixes

- **FF-3409:** fix RowActionsCell button ([9704aba](https://github.com/cloud-ru-tech/snack-uikit/commit/9704aba6527f0e6fce0e90982aeca62adff57d34))

## 0.2.2 (2023-10-06)

### Only dependencies have been changed

- [@snack-uikit/button@0.12.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/droplist@0.8.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/loaders@0.3.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)
- [@snack-uikit/scroll@0.3.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/toggles@0.4.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.4.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)

## 0.2.1 (2023-10-05)

### Only dependencies have been changed

- [@snack-uikit/droplist@0.8.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)

# 0.2.0 (2023-10-05)

### Features

- **FF-3409:** replace ButtonLight to ButtonFunction ([e76a1db](https://github.com/cloud-ru-tech/snack-uikit/commit/e76a1dbf2e2db07a9197c413619e4df6f5976246))

## 0.1.2 (2023-09-28)

### Only dependencies have been changed

- [@snack-uikit/droplist@0.8.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/icons@0.15.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/toggles@0.4.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.1.1 (2023-09-28)

### Only dependencies have been changed

- [@snack-uikit/droplist@0.8.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)

# 0.1.0 (2023-09-25)

### Features

- **FF-2653:** add Table package ([29ec955](https://github.com/cloud-ru-tech/snack-uikit/commit/29ec9557279d88bf7bb281bbd524ba747d1b817b))

## CHANGELOG

### v0.0.0

- Initial version
`,Us="@snack-uikit/table",qs="0.36.25",Cr={name:Us,version:qs},Ws=`# Table

## Installation

\`npm i @snack-uikit/table\`

[Changelog](./CHANGELOG.md)

## TODO:

- multiple row selection with Shift key pressed

## Примечание

> Для оптимальной работы таблицы используйте \`useMemo\` для \`columnDefinitions\`
> или выносите их определение за компонент

## Example

\`\`\`typescript jsx
import { Table } from '@snack-uikit/table';

// ...

type TableData = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  status: string;
}

const columnDefinitions: ColumnDefinition<TableData>[] = [
  Table.getStatusColumnDef<Person>({
    accessorKey: 'status',
    mapStatusToAppearance: {
      pending: Table.statusAppearances.Blue,
      success: Table.statusAppearances.Green,
      // ... etc
    },
    header: 'Статус',
    renderDescription: (value: string) => t(translations.statuses[value]),
    size: 250,
  }),
  {
    accessorKey: 'id',
  },
  {
    // id, size - обязательны при передаче pinned
    id: 'firstName',
    size: 140,
    pinned: 'left',
    accessorKey: 'firstName',
    header: 'Имя',
    enableSorting: true,
    sortDescFirst: true,
  },
  {
    accessorKey: 'lastName',
    header: 'Фамилия',
    cell: ctx => <div className='custom'>{ctx.getValue<string>()}</div>,
    maxSize: 200,
    enableSorting: false,
  },
  {
    accessorKey: 'age',
    header: ctx => \`Можно добавить хедер так: \${ctx.column.id}\`,
    minSize: 40,
  },
  Table.getRowActionsColumnDef({
    pinned: true,
    actionsGenerator: () => [
      {
        option: 'Действие с иконкой',
        icon: <PlaceholderSVG />,
        onClick: handleRowActionClick,
      },
      {
        option: 'Другое действие',
        onClick: handleRowActionClick,
      },
    ],
  })
];

// ...

<Table
  columnDefinitions={columnDefinitions}
  data={data}
  rowSelection={{
    enable: true, // false выключает выбор всех строк (состояние disabled)
    // или можно передать функцию для вычисления
    // enable: row => !['Pending', 'Loading'].includes(row.original.status),
    onChange: handleRowSelection,
  }}
/>
\`\`\`

[//]: DOCUMENTATION_SECTION_START
[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT
## CopyCell
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| value | \`string \\| number\` | - |  |
## Table
Компонент таблицы
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| columnDefinitions* | \`ColumnDefinition<TData>[]\` | - | Определение внешнего вида и функционала колонок |
| data* | \`TData[]\` | - | Данные для отрисовки |
| keepPinnedRows | \`boolean\` | - | Параметр отвечает за отображение закрепленных строк на всех страницах таблицы |
| copyPinnedRows | \`boolean\` | - | Параметр отвечает за сохранение закрепленных строк в теле таблицы |
| enableSelectPinned | \`boolean\` | - | Параметр отвечает за чекбокс выбора закрепленных строк |
| sorting | \`{ initialState?: SortingState; state?: SortingState; onChange?(state: SortingState): void; }\` | - | Параметры отвечают за возможность сортировки, их стоит использовать если нужно отслеживать состояние <br> <strong>initialState</strong>: Начальное состояние сортировки <br> <strong>state</strong>: Состояние сортировки, жестко устанавливаемое снаружи <br> <strong>onChange</strong>: Колбэк на изменение сортировки |
| columnsSettings | \`{ enableDrag?: boolean; enableSettingsMenu?: boolean; }\` | - | Параметры отвечают за настройки колонок <br> <strong>enableDrag</strong>: Включение сортировки порядка столбцов вручную перетаскиванием <br> <strong>enableSettingsMenu</strong>: Включение настроек показа колонок <br> |
| expanding | \`{ getSubRows: (element: TData) => TData[]; expandingColumnDefinition: TreeColumnDefinitionProps<TData>; }\` | - | Параметр отвечает за общие настройки раскрывающихся строк |
| rowSelection | \`{ initialState?: RowSelectionState; state?: RowSelectionState; enable?: boolean \\| ((row: Row<TData>) => boolean); multiRow?: boolean; onChange?(state: RowSelectionState): void; }\` | - | Параметры отвечают за возможность выбора строк <br> <strong>initialState</strong>: Начальное состояние выбора строк <br> <strong>state</strong>: Состояние выбора строк, жестко устанавливаемое снаружи <br> <strong>enable</strong>: Колбэк определяющий можно ли выбрать строку <br> <strong>multiRow</strong>: Мульти-выбор строк (включен по-умолчанию, когда включается выбор) <br> <strong>onChange</strong>: Колбэк на выбор строк |
| search | \`{ initialState?: string; state?: string; placeholder?: string; loading?: boolean; onChange?(value: string): void; }\` | 'Search'<br> <strong>loading</strong>: Состояние загрузки в строке поиска <br> <strong>onChange</strong>: Колбэк на изменение данных в строке поиска | Параметры отвечают за глобальный поиск в таблице <br> <strong>initialState</strong>: Начальное состояние строки поиска <br> <strong>state</strong>: Состояние строки поиска, жестко устанавливаемое снаружи <br> <strong>placeholder</strong>: Placeholder строки поиска |
| enableFuzzySearch | \`boolean\` | - | Включить нечеткий поиск |
| rowAutoHeight | \`boolean\` | - |  |
| pageSize | \`number\` | 10 | Максимальное кол-во строк на страницу |
| onRowClick | \`RowClickHandler<TData>\` | - | Колбэк клика по строке |
| className | \`string\` | - | CSS-класс |
| loading | \`boolean\` | - | Состояние загрузки |
| onRefresh | \`() => void\` | - | Колбек обновления данных |
| outline | \`boolean\` | - | Внешний бордер для тулбара и таблицы |
| columnFilters | \`Omit<ChipChoiceRowProps<TFilters>, "size" \\| "data-test-id"> & { open?: boolean; onOpenChange?(isOpen: boolean): void; } & { initialOpen?: boolean; }\` | - | Фильтры |
| dataFiltered | \`boolean\` | - | Флаг, показывающий что данные были отфильтрованы при пустых данных |
| dataError | \`boolean\` | - | Флаг, показывающий что произошла ошибка запроса при пустых данных |
| noDataState | \`EmptyStateProps\` | - | Экран при отстутствии данных |
| noResultsState | \`EmptyStateProps\` | - | Экран при отстутствии результатов поиска или фильтров |
| errorDataState | \`EmptyStateProps\` | - | Экран при ошибке запроса |
| suppressToolbar | \`boolean\` | - | Отключение тулбара |
| suppressSearch | \`boolean\` | - | Отключение поиска |
| bulkActions | \`BulkAction[]\` | - | Список действия для массовых операций |
| moreActions | \`Action[]\` | - | Элементы выпадающего списка кнопки с действиями |
| toolbarAfter | \`ReactNode\` | - | Дополнительный слот в \`Toolbar\` после строки поиска |
| exportSettings | \`{ fileName: string; filterData?: boolean; exportToCSV?(args: ExportProps<TData>): void; exportToXLSX?(args: ExportProps<TData>): void; }\` | - | Настройки экспорта в тулбаре |
| manualSorting | \`boolean\` | - |  |
| manualFiltering | \`boolean\` | - |  |
| getRowId | \`(originalRow: TData, index: number, parent?: Row<TData>) => string\` | - | Дополнительная функция используется для получения уникального идентификатора для любой заданной строки |
| scrollRef | \`RefObject<HTMLElement>\` | - | Ссылка на элемент, обозначающий самый конец прокручиваемого списка |
| scrollContainerRef | \`RefObject<HTMLElement>\` | - | Ссылка на контейнер, который скроллится |
| rowPinning | \`Pick<RowPinningState, "top">\` | {     top: [],   } | Определение какие строки должны быть закреплены в таблице |
| savedState | \`{ id: string; filterQueryKey?: string; resize?: boolean; columnSettings?: boolean; }\` | - | Конфиг для сохранения состояния в localStorage. <br> Поле id должно быть уникальным для разных таблиц в рамках приложения. <br> Для корректной работы необходимо наличие id в конфиге columnDefinitions |
| pagination | \`{ state?: PaginationState; options?: number[]; optionsLabel?: string; onChange?(state: PaginationState): void; optionsRender?(value: string \\| number, idx: number): string \\| number; }\` | 'Rows volume: ' <br> <strong>onChange</strong>: Колбэк на изменение пагинации | Параметры отвечают за пагинацию в таблице <br> <strong>state</strong>: Состояние строки поиска, жестко устанавливаемое снаружи <br> <strong>options</strong>: Варианты в выпадающем селекторе для установки кол-ва строк на страницу <br> <strong>optionsLabel</strong>: Текст для селектора кол-ва строк на страницу |
| autoResetPageIndex | \`boolean\` | - | Автоматический сброс пагинации к первой странице при изменении данных или состояния (e.g фильтры, сортировки, и т.д) |
| pageCount | \`number\` | - | Кол-во страниц (используется для внешнего управления) |
| infiniteLoading | \`boolean\` | - | Режим работы "бесконечной" загрузки |
| suppressPagination | \`boolean\` | - | Отключение пагинации |
| manualPagination | \`boolean\` | - |  |
## Table.getStatusColumnDef
Вспомогательная функция для создания ячейки со статусом
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| mapStatusToAppearance* | \`MapStatusToAppearanceFnType\` | - | Маппинг значений статуса на цвета |
| accessorKey* | \`string\` | - | Имя ключа соответствующее полю в data |
| enableSorting | \`boolean\` | true | Включение/выключение сортировки |
| renderDescription | \`(cellValue: string, row: TData) => string\` | - | Функция для отрисовки текста, если не передана, то будет отрисован только индикатор статуса |
| size | \`number\` | - | Размер ячейки |
| minSize | \`number\` | - |  |
| maxSize | \`number\` | - |  |
| header | \`string \\| (string & ReactElement<any, string \\| JSXElementConstructor<any>>) \\| (string & Iterable<ReactNode>) \\| ... 9 more ... \\| (((props: HeaderContext<...>) => any) & ((ctx: HeaderContext<...>) => ReactNode))\` | - | Заголовок колонки |
| enableResizing | \`boolean\` | - | Включение/выключение ресайза колонки |
## Table.getRowActionsColumnDef
Вспомогательная функция для создания ячейки с дополнительными действиями у строки
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| actionsGenerator* | \`ActionsGenerator<TData>\` | - | Действия для строки |
| pinned | \`boolean\` | - | Закрепление колонки справа в таблице |
## ServerTable
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| onChangePage* | \`(offset: number, limit: number) => void\` | - |  |
| columnDefinitions* | \`ColumnDefinition<TData>[]\` | - | Определение внешнего вида и функционала колонок |
| loading | \`boolean\` | - | Состояние загрузки |
| className | \`string\` | - | CSS-класс |
| onRefresh | \`() => void\` | - | Колбек обновления данных |
| moreActions | \`Action[]\` | - | Элементы выпадающего списка кнопки с действиями |
| bulkActions | \`BulkAction[]\` | - | Список действия для массовых операций |
| keepPinnedRows | \`boolean\` | false | Параметр отвечает за отображение закрепленных строк на всех страницах таблицы |
| copyPinnedRows | \`boolean\` | false | Параметр отвечает за сохранение закрепленных строк в теле таблицы |
| enableSelectPinned | \`boolean\` | - | Параметр отвечает за чекбокс выбора закрепленных строк |
| sorting | \`{ initialState?: SortingState; state?: SortingState; onChange?(state: SortingState): void; }\` | - | Параметры отвечают за возможность сортировки, их стоит использовать если нужно отслеживать состояние <br> <strong>initialState</strong>: Начальное состояние сортировки <br> <strong>state</strong>: Состояние сортировки, жестко устанавливаемое снаружи <br> <strong>onChange</strong>: Колбэк на изменение сортировки |
| columnsSettings | \`{ enableDrag?: boolean; enableSettingsMenu?: boolean; }\` | - | Параметры отвечают за настройки колонок <br> <strong>enableDrag</strong>: Включение сортировки порядка столбцов вручную перетаскиванием <br> <strong>enableSettingsMenu</strong>: Включение настроек показа колонок <br> |
| expanding | \`{ getSubRows: (element: TData) => TData[]; expandingColumnDefinition: TreeColumnDefinitionProps<TData>; }\` | - | Параметр отвечает за общие настройки раскрывающихся строк |
| rowSelection | \`{ initialState?: RowSelectionState; state?: RowSelectionState; enable?: boolean \\| ((row: Row<TData>) => boolean); multiRow?: boolean; onChange?(state: RowSelectionState): void; }\` | - | Параметры отвечают за возможность выбора строк <br> <strong>initialState</strong>: Начальное состояние выбора строк <br> <strong>state</strong>: Состояние выбора строк, жестко устанавливаемое снаружи <br> <strong>enable</strong>: Колбэк определяющий можно ли выбрать строку <br> <strong>multiRow</strong>: Мульти-выбор строк (включен по-умолчанию, когда включается выбор) <br> <strong>onChange</strong>: Колбэк на выбор строк |
| enableFuzzySearch | \`boolean\` | - | Включить нечеткий поиск |
| rowAutoHeight | \`boolean\` | - |  |
| onRowClick | \`RowClickHandler<TData>\` | - | Колбэк клика по строке |
| outline | \`boolean\` | - | Внешний бордер для тулбара и таблицы |
| columnFilters | \`Omit<ChipChoiceRowProps<TFilters>, "size" \\| "data-test-id"> & { open?: boolean; onOpenChange?(isOpen: boolean): void; } & { initialOpen?: boolean; }\` | - | Фильтры |
| dataFiltered | \`boolean\` | - | Флаг, показывающий что данные были отфильтрованы при пустых данных |
| dataError | \`boolean\` | - | Флаг, показывающий что произошла ошибка запроса при пустых данных |
| noDataState | \`EmptyStateProps\` | - | Экран при отстутствии данных |
| noResultsState | \`EmptyStateProps\` | - | Экран при отстутствии результатов поиска или фильтров |
| errorDataState | \`EmptyStateProps\` | - | Экран при ошибке запроса |
| suppressToolbar | \`boolean\` | - | Отключение тулбара |
| suppressSearch | \`boolean\` | - | Отключение поиска |
| toolbarAfter | \`ReactNode\` | - | Дополнительный слот в \`Toolbar\` после строки поиска |
| exportSettings | \`{ fileName: string; filterData?: boolean; exportToCSV?(args: ExportProps<TData>): void; exportToXLSX?(args: ExportProps<TData>): void; }\` | - | Настройки экспорта в тулбаре |
| manualSorting | \`boolean\` | true |  |
| manualFiltering | \`boolean\` | true |  |
| getRowId | \`(originalRow: TData, index: number, parent?: Row<TData>) => string\` | - | Дополнительная функция используется для получения уникального идентификатора для любой заданной строки |
| scrollRef | \`RefObject<HTMLElement>\` | - | Ссылка на элемент, обозначающий самый конец прокручиваемого списка |
| scrollContainerRef | \`RefObject<HTMLElement>\` | - | Ссылка на контейнер, который скроллится |
| rowPinning | \`Pick<RowPinningState, "top">\` | - | Определение какие строки должны быть закреплены в таблице |
| savedState | \`{ id: string; filterQueryKey?: string; resize?: boolean; columnSettings?: boolean; }\` | - | Конфиг для сохранения состояния в localStorage. <br> Поле id должно быть уникальным для разных таблиц в рамках приложения. <br> Для корректной работы необходимо наличие id в конфиге columnDefinitions |
| autoResetPageIndex | \`boolean\` | - | Автоматический сброс пагинации к первой странице при изменении данных или состояния (e.g фильтры, сортировки, и т.д) |
| suppressPagination | \`boolean\` | - | Отключение пагинации |
| manualPagination | \`boolean\` | true |  |
| infiniteLoading | \`never\` | - |  |
| items | \`TData[]\` | - | Данные для отрисовки |
| total | \`number\` | 10 | Общее кол-во строк |
| limit | \`number\` | 10 | Кол-во строк на страницу |
| offset | \`number\` | - | Смещение |
| search | \`{ initialValue?: string; state: string; placeholder?: string; loading?: boolean; onChange(value: string): void; }\` | 'Search...'<br> <strong>loading</strong>: Состояние загрузки в строке поиска <br> <strong>onChange</strong>: Колбэк на изменение данных в строке поиска | Параметры отвечают за глобальный поиск в таблице <br> <strong>initialState</strong>: Начальное состояние строки поиска <br> <strong>state</strong>: Состояние строки поиска, жестко устанавливаемое снаружи <br> <strong>placeholder</strong>: Placeholder строки поиска |
| pagination | \`{ options?: number[]; optionsLabel?: string; }\` | 'Rows volume' <br> | Параметры отвечают за пагинацию в таблице <br> <strong>options</strong>: Варианты в выпадающем селекторе для установки кол-ва строк на страницу<br> <strong>optionsLabel</strong>: Текст для селектора кол-ва строк на страницу |
## ServerTable.getRowActionsColumnDef
Вспомогательная функция для создания ячейки с дополнительными действиями у строки
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| actionsGenerator* | \`ActionsGenerator<TData>\` | - | Действия для строки |
| pinned | \`boolean\` | - | Закрепление колонки справа в таблице |
## ServerTable.getStatusColumnDef
Вспомогательная функция для создания ячейки со статусом
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| mapStatusToAppearance* | \`MapStatusToAppearanceFnType\` | - | Маппинг значений статуса на цвета |
| accessorKey* | \`string\` | - | Имя ключа соответствующее полю в data |
| enableSorting | \`boolean\` | true | Включение/выключение сортировки |
| renderDescription | \`(cellValue: string, row: TData) => string\` | - | Функция для отрисовки текста, если не передана, то будет отрисован только индикатор статуса |
| size | \`number\` | - | Размер ячейки |
| minSize | \`number\` | - |  |
| maxSize | \`number\` | - |  |
| header | \`string \\| (string & ReactElement<any, string \\| JSXElementConstructor<any>>) \\| (string & Iterable<ReactNode>) \\| ... 9 more ... \\| (((props: HeaderContext<...>) => any) & ((ctx: HeaderContext<...>) => ReactNode))\` | - | Заголовок колонки |
| enableResizing | \`boolean\` | - | Включение/выключение ресайза колонки |
## exportToCSV
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| columnDefinitions* | \`ColumnDefinition<TData>[]\` | - |  |
| data* | \`TData[]\` | - |  |
| fileName | \`string\` | Table |  |
## exportToXLSX
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| columnDefinitions* | \`ColumnDefinition<TData>[]\` | - |  |
| data* | \`TData[]\` | - |  |
| fileName | \`string\` | Table |  |


[//]: DOCUMENTATION_SECTION_END
`;function Xs(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return y.useMemo(()=>i=>{n.forEach(a=>a(i))},n)}const Vi=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Nn(e){const n=Object.prototype.toString.call(e);return n==="[object Window]"||n==="[object global]"}function Ka(e){return"nodeType"in e}function Xe(e){var n,t;return e?Nn(e)?e:Ka(e)&&(n=(t=e.ownerDocument)==null?void 0:t.defaultView)!=null?n:window:window}function Ya(e){const{Document:n}=Xe(e);return e instanceof n}function ai(e){return Nn(e)?!1:e instanceof Xe(e).HTMLElement}function No(e){return e instanceof Xe(e).SVGElement}function Dn(e){return e?Nn(e)?e.document:Ka(e)?Ya(e)?e:ai(e)||No(e)?e.ownerDocument:document:document:document}const Dt=Vi?y.useLayoutEffect:y.useEffect;function Ja(e){const n=y.useRef(e);return Dt(()=>{n.current=e}),y.useCallback(function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return n.current==null?void 0:n.current(...i)},[])}function Ks(){const e=y.useRef(null),n=y.useCallback((i,a)=>{e.current=setInterval(i,a)},[]),t=y.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[n,t]}function Yn(e,n){n===void 0&&(n=[e]);const t=y.useRef(e);return Dt(()=>{t.current!==e&&(t.current=e)},n),t}function ri(e,n){const t=y.useRef();return y.useMemo(()=>{const i=e(t.current);return t.current=i,i},[...n])}function wi(e){const n=Ja(e),t=y.useRef(null),i=y.useCallback(a=>{a!==t.current&&(n==null||n(a,t.current)),t.current=a},[]);return[t,i]}function ba(e){const n=y.useRef();return y.useEffect(()=>{n.current=e},[e]),n.current}let Xi={};function oi(e,n){return y.useMemo(()=>{if(n)return n;const t=Xi[e]==null?0:Xi[e]+1;return Xi[e]=t,e+"-"+t},[e,n])}function Do(e){return function(n){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];return i.reduce((r,o)=>{const u=Object.entries(o);for(const[s,c]of u){const l=r[s];l!=null&&(r[s]=l+e*c)}return r},{...n})}}const An=Do(1),xi=Do(-1);function Ys(e){return"clientX"in e&&"clientY"in e}function Za(e){if(!e)return!1;const{KeyboardEvent:n}=Xe(e.target);return n&&e instanceof n}function Js(e){if(!e)return!1;const{TouchEvent:n}=Xe(e.target);return n&&e instanceof n}function ka(e){if(Js(e)){if(e.touches&&e.touches.length){const{clientX:n,clientY:t}=e.touches[0];return{x:n,y:t}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:n,clientY:t}=e.changedTouches[0];return{x:n,y:t}}}return Ys(e)?{x:e.clientX,y:e.clientY}:null}const Jn=Object.freeze({Translate:{toString(e){if(!e)return;const{x:n,y:t}=e;return"translate3d("+(n?Math.round(n):0)+"px, "+(t?Math.round(t):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:n,scaleY:t}=e;return"scaleX("+n+") scaleY("+t+")"}},Transform:{toString(e){if(e)return[Jn.Translate.toString(e),Jn.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:n,duration:t,easing:i}=e;return n+" "+t+"ms "+i}}}),yr="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Zs(e){return e.matches(yr)?e:e.querySelector(yr)}const Qs={display:"none"};function ec(e){let{id:n,value:t}=e;return qe.createElement("div",{id:n,style:Qs},t)}function tc(e){let{id:n,announcement:t,ariaLiveType:i="assertive"}=e;const a={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return qe.createElement("div",{id:n,style:a,role:"status","aria-live":i,"aria-atomic":!0},t)}function nc(){const[e,n]=y.useState("");return{announce:y.useCallback(i=>{i!=null&&n(i)},[]),announcement:e}}const Lo=y.createContext(null);function ic(e){const n=y.useContext(Lo);y.useEffect(()=>{if(!n)throw new Error("useDndMonitor must be used within a children of <DndContext>");return n(e)},[e,n])}function ac(){const[e]=y.useState(()=>new Set),n=y.useCallback(i=>(e.add(i),()=>e.delete(i)),[e]);return[y.useCallback(i=>{let{type:a,event:r}=i;e.forEach(o=>{var u;return(u=o[a])==null?void 0:u.call(o,r)})},[e]),n]}const rc={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},oc={onDragStart(e){let{active:n}=e;return"Picked up draggable item "+n.id+"."},onDragOver(e){let{active:n,over:t}=e;return t?"Draggable item "+n.id+" was moved over droppable area "+t.id+".":"Draggable item "+n.id+" is no longer over a droppable area."},onDragEnd(e){let{active:n,over:t}=e;return t?"Draggable item "+n.id+" was dropped over droppable area "+t.id:"Draggable item "+n.id+" was dropped."},onDragCancel(e){let{active:n}=e;return"Dragging was cancelled. Draggable item "+n.id+" was dropped."}};function uc(e){let{announcements:n=oc,container:t,hiddenTextDescribedById:i,screenReaderInstructions:a=rc}=e;const{announce:r,announcement:o}=nc(),u=oi("DndLiveRegion"),[s,c]=y.useState(!1);if(y.useEffect(()=>{c(!0)},[]),ic(y.useMemo(()=>({onDragStart(h){let{active:b}=h;r(n.onDragStart({active:b}))},onDragMove(h){let{active:b,over:g}=h;n.onDragMove&&r(n.onDragMove({active:b,over:g}))},onDragOver(h){let{active:b,over:g}=h;r(n.onDragOver({active:b,over:g}))},onDragEnd(h){let{active:b,over:g}=h;r(n.onDragEnd({active:b,over:g}))},onDragCancel(h){let{active:b,over:g}=h;r(n.onDragCancel({active:b,over:g}))}}),[r,n])),!s)return null;const l=qe.createElement(qe.Fragment,null,qe.createElement(ec,{id:i,value:a.draggable}),qe.createElement(tc,{id:u,announcement:o}));return t?Pn.createPortal(l,t):l}var Ee;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Ee||(Ee={}));function Ai(){}function Ki(e,n){return y.useMemo(()=>({sensor:e,options:n??{}}),[e,n])}function sc(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return y.useMemo(()=>[...n].filter(i=>i!=null),[...n])}const _t=Object.freeze({x:0,y:0});function cc(e,n){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function lc(e,n){let{data:{value:t}}=e,{data:{value:i}}=n;return t-i}function dc(e,n){let{data:{value:t}}=e,{data:{value:i}}=n;return i-t}function hc(e,n){if(!e||e.length===0)return null;const[t]=e;return t[n]}function Er(e,n,t){return n===void 0&&(n=e.left),t===void 0&&(t=e.top),{x:n+e.width*.5,y:t+e.height*.5}}const gc=e=>{let{collisionRect:n,droppableRects:t,droppableContainers:i}=e;const a=Er(n,n.left,n.top),r=[];for(const o of i){const{id:u}=o,s=t.get(u);if(s){const c=cc(Er(s),a);r.push({id:u,data:{droppableContainer:o,value:c}})}}return r.sort(lc)};function fc(e,n){const t=Math.max(n.top,e.top),i=Math.max(n.left,e.left),a=Math.min(n.left+n.width,e.left+e.width),r=Math.min(n.top+n.height,e.top+e.height),o=a-i,u=r-t;if(i<a&&t<r){const s=n.width*n.height,c=e.width*e.height,l=o*u,h=l/(s+c-l);return Number(h.toFixed(4))}return 0}const pc=e=>{let{collisionRect:n,droppableRects:t,droppableContainers:i}=e;const a=[];for(const r of i){const{id:o}=r,u=t.get(o);if(u){const s=fc(u,n);s>0&&a.push({id:o,data:{droppableContainer:r,value:s}})}}return a.sort(dc)};function mc(e,n,t){return{...e,scaleX:n&&t?n.width/t.width:1,scaleY:n&&t?n.height/t.height:1}}function Ro(e,n){return e&&n?{x:e.left-n.left,y:e.top-n.top}:_t}function bc(e){return function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),r=1;r<i;r++)a[r-1]=arguments[r];return a.reduce((o,u)=>({...o,top:o.top+e*u.y,bottom:o.bottom+e*u.y,left:o.left+e*u.x,right:o.right+e*u.x}),{...t})}}const kc=bc(1);function vc(e){if(e.startsWith("matrix3d(")){const n=e.slice(9,-1).split(/, /);return{x:+n[12],y:+n[13],scaleX:+n[0],scaleY:+n[5]}}else if(e.startsWith("matrix(")){const n=e.slice(7,-1).split(/, /);return{x:+n[4],y:+n[5],scaleX:+n[0],scaleY:+n[3]}}return null}function Cc(e,n,t){const i=vc(n);if(!i)return e;const{scaleX:a,scaleY:r,x:o,y:u}=i,s=e.left-o-(1-a)*parseFloat(t),c=e.top-u-(1-r)*parseFloat(t.slice(t.indexOf(" ")+1)),l=a?e.width/a:e.width,h=r?e.height/r:e.height;return{width:l,height:h,top:c,right:s+l,bottom:c+h,left:s}}const yc={ignoreTransform:!1};function Ln(e,n){n===void 0&&(n=yc);let t=e.getBoundingClientRect();if(n.ignoreTransform){const{transform:c,transformOrigin:l}=Xe(e).getComputedStyle(e);c&&(t=Cc(t,c,l))}const{top:i,left:a,width:r,height:o,bottom:u,right:s}=t;return{top:i,left:a,width:r,height:o,bottom:u,right:s}}function Sr(e){return Ln(e,{ignoreTransform:!0})}function Ec(e){const n=e.innerWidth,t=e.innerHeight;return{top:0,left:0,right:n,bottom:t,width:n,height:t}}function Sc(e,n){return n===void 0&&(n=Xe(e).getComputedStyle(e)),n.position==="fixed"}function wc(e,n){n===void 0&&(n=Xe(e).getComputedStyle(e));const t=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(a=>{const r=n[a];return typeof r=="string"?t.test(r):!1})}function Qa(e,n){const t=[];function i(a){if(n!=null&&t.length>=n||!a)return t;if(Ya(a)&&a.scrollingElement!=null&&!t.includes(a.scrollingElement))return t.push(a.scrollingElement),t;if(!ai(a)||No(a)||t.includes(a))return t;const r=Xe(e).getComputedStyle(a);return a!==e&&wc(a,r)&&t.push(a),Sc(a,r)?t:i(a.parentNode)}return e?i(e):t}function Ho(e){const[n]=Qa(e,1);return n??null}function Yi(e){return!Vi||!e?null:Nn(e)?e:Ka(e)?Ya(e)||e===Dn(e).scrollingElement?window:ai(e)?e:null:null}function To(e){return Nn(e)?e.scrollX:e.scrollLeft}function Io(e){return Nn(e)?e.scrollY:e.scrollTop}function va(e){return{x:To(e),y:Io(e)}}var xe;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(xe||(xe={}));function Mo(e){return!Vi||!e?!1:e===document.scrollingElement}function Po(e){const n={x:0,y:0},t=Mo(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},i={x:e.scrollWidth-t.width,y:e.scrollHeight-t.height},a=e.scrollTop<=n.y,r=e.scrollLeft<=n.x,o=e.scrollTop>=i.y,u=e.scrollLeft>=i.x;return{isTop:a,isLeft:r,isBottom:o,isRight:u,maxScroll:i,minScroll:n}}const xc={x:.2,y:.2};function Ac(e,n,t,i,a){let{top:r,left:o,right:u,bottom:s}=t;i===void 0&&(i=10),a===void 0&&(a=xc);const{isTop:c,isBottom:l,isLeft:h,isRight:b}=Po(e),g={x:0,y:0},E={x:0,y:0},C={height:n.height*a.y,width:n.width*a.x};return!c&&r<=n.top+C.height?(g.y=xe.Backward,E.y=i*Math.abs((n.top+C.height-r)/C.height)):!l&&s>=n.bottom-C.height&&(g.y=xe.Forward,E.y=i*Math.abs((n.bottom-C.height-s)/C.height)),!b&&u>=n.right-C.width?(g.x=xe.Forward,E.x=i*Math.abs((n.right-C.width-u)/C.width)):!h&&o<=n.left+C.width&&(g.x=xe.Backward,E.x=i*Math.abs((n.left+C.width-o)/C.width)),{direction:g,speed:E}}function _c(e){if(e===document.scrollingElement){const{innerWidth:r,innerHeight:o}=window;return{top:0,left:0,right:r,bottom:o,width:r,height:o}}const{top:n,left:t,right:i,bottom:a}=e.getBoundingClientRect();return{top:n,left:t,right:i,bottom:a,width:e.clientWidth,height:e.clientHeight}}function Bo(e){return e.reduce((n,t)=>An(n,va(t)),_t)}function Gc(e){return e.reduce((n,t)=>n+To(t),0)}function Oc(e){return e.reduce((n,t)=>n+Io(t),0)}function Fc(e,n){if(n===void 0&&(n=Ln),!e)return;const{top:t,left:i,bottom:a,right:r}=n(e);Ho(e)&&(a<=0||r<=0||t>=window.innerHeight||i>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const Nc=[["x",["left","right"],Gc],["y",["top","bottom"],Oc]];class er{constructor(n,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const i=Qa(t),a=Bo(i);this.rect={...n},this.width=n.width,this.height=n.height;for(const[r,o,u]of Nc)for(const s of o)Object.defineProperty(this,s,{get:()=>{const c=u(i),l=a[r]-c;return this.rect[s]+l},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Vn{constructor(n){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(t=>{var i;return(i=this.target)==null?void 0:i.removeEventListener(...t)})},this.target=n}add(n,t,i){var a;(a=this.target)==null||a.addEventListener(n,t,i),this.listeners.push([n,t,i])}}function Dc(e){const{EventTarget:n}=Xe(e);return e instanceof n?e:Dn(e)}function Ji(e,n){const t=Math.abs(e.x),i=Math.abs(e.y);return typeof n=="number"?Math.sqrt(t**2+i**2)>n:"x"in n&&"y"in n?t>n.x&&i>n.y:"x"in n?t>n.x:"y"in n?i>n.y:!1}var dt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(dt||(dt={}));function wr(e){e.preventDefault()}function Lc(e){e.stopPropagation()}var ae;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(ae||(ae={}));const Vo={start:[ae.Space,ae.Enter],cancel:[ae.Esc],end:[ae.Space,ae.Enter,ae.Tab]},Rc=(e,n)=>{let{currentCoordinates:t}=n;switch(e.code){case ae.Right:return{...t,x:t.x+25};case ae.Left:return{...t,x:t.x-25};case ae.Down:return{...t,y:t.y+25};case ae.Up:return{...t,y:t.y-25}}};class tr{constructor(n){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=n;const{event:{target:t}}=n;this.props=n,this.listeners=new Vn(Dn(t)),this.windowListeners=new Vn(Xe(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(dt.Resize,this.handleCancel),this.windowListeners.add(dt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(dt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:n,onStart:t}=this.props,i=n.node.current;i&&Fc(i),t(_t)}handleKeyDown(n){if(Za(n)){const{active:t,context:i,options:a}=this.props,{keyboardCodes:r=Vo,coordinateGetter:o=Rc,scrollBehavior:u="smooth"}=a,{code:s}=n;if(r.end.includes(s)){this.handleEnd(n);return}if(r.cancel.includes(s)){this.handleCancel(n);return}const{collisionRect:c}=i.current,l=c?{x:c.left,y:c.top}:_t;this.referenceCoordinates||(this.referenceCoordinates=l);const h=o(n,{active:t,context:i.current,currentCoordinates:l});if(h){const b=xi(h,l),g={x:0,y:0},{scrollableAncestors:E}=i.current;for(const C of E){const w=n.code,{isTop:S,isRight:F,isLeft:D,isBottom:P,maxScroll:R,minScroll:q}=Po(C),O=_c(C),M={x:Math.min(w===ae.Right?O.right-O.width/2:O.right,Math.max(w===ae.Right?O.left:O.left+O.width/2,h.x)),y:Math.min(w===ae.Down?O.bottom-O.height/2:O.bottom,Math.max(w===ae.Down?O.top:O.top+O.height/2,h.y))},H=w===ae.Right&&!F||w===ae.Left&&!D,U=w===ae.Down&&!P||w===ae.Up&&!S;if(H&&M.x!==h.x){const B=C.scrollLeft+b.x,Y=w===ae.Right&&B<=R.x||w===ae.Left&&B>=q.x;if(Y&&!b.y){C.scrollTo({left:B,behavior:u});return}Y?g.x=C.scrollLeft-B:g.x=w===ae.Right?C.scrollLeft-R.x:C.scrollLeft-q.x,g.x&&C.scrollBy({left:-g.x,behavior:u});break}else if(U&&M.y!==h.y){const B=C.scrollTop+b.y,Y=w===ae.Down&&B<=R.y||w===ae.Up&&B>=q.y;if(Y&&!b.x){C.scrollTo({top:B,behavior:u});return}Y?g.y=C.scrollTop-B:g.y=w===ae.Down?C.scrollTop-R.y:C.scrollTop-q.y,g.y&&C.scrollBy({top:-g.y,behavior:u});break}}this.handleMove(n,An(xi(h,this.referenceCoordinates),g))}}}handleMove(n,t){const{onMove:i}=this.props;n.preventDefault(),i(t)}handleEnd(n){const{onEnd:t}=this.props;n.preventDefault(),this.detach(),t()}handleCancel(n){const{onCancel:t}=this.props;n.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}tr.activators=[{eventName:"onKeyDown",handler:(e,n,t)=>{let{keyboardCodes:i=Vo,onActivation:a}=n,{active:r}=t;const{code:o}=e.nativeEvent;if(i.start.includes(o)){const u=r.activatorNode.current;return u&&e.target!==u?!1:(e.preventDefault(),a==null||a({event:e.nativeEvent}),!0)}return!1}}];function xr(e){return!!(e&&"distance"in e)}function Ar(e){return!!(e&&"delay"in e)}class nr{constructor(n,t,i){var a;i===void 0&&(i=Dc(n.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=n,this.events=t;const{event:r}=n,{target:o}=r;this.props=n,this.events=t,this.document=Dn(o),this.documentListeners=new Vn(this.document),this.listeners=new Vn(i),this.windowListeners=new Vn(Xe(o)),this.initialCoordinates=(a=ka(r))!=null?a:_t,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:n,props:{options:{activationConstraint:t,bypassActivationConstraint:i}}}=this;if(this.listeners.add(n.move.name,this.handleMove,{passive:!1}),this.listeners.add(n.end.name,this.handleEnd),n.cancel&&this.listeners.add(n.cancel.name,this.handleCancel),this.windowListeners.add(dt.Resize,this.handleCancel),this.windowListeners.add(dt.DragStart,wr),this.windowListeners.add(dt.VisibilityChange,this.handleCancel),this.windowListeners.add(dt.ContextMenu,wr),this.documentListeners.add(dt.Keydown,this.handleKeydown),t){if(i!=null&&i({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Ar(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(xr(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(n,t){const{active:i,onPending:a}=this.props;a(i,n,this.initialCoordinates,t)}handleStart(){const{initialCoordinates:n}=this,{onStart:t}=this.props;n&&(this.activated=!0,this.documentListeners.add(dt.Click,Lc,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(dt.SelectionChange,this.removeTextSelection),t(n))}handleMove(n){var t;const{activated:i,initialCoordinates:a,props:r}=this,{onMove:o,options:{activationConstraint:u}}=r;if(!a)return;const s=(t=ka(n))!=null?t:_t,c=xi(a,s);if(!i&&u){if(xr(u)){if(u.tolerance!=null&&Ji(c,u.tolerance))return this.handleCancel();if(Ji(c,u.distance))return this.handleStart()}if(Ar(u)&&Ji(c,u.tolerance))return this.handleCancel();this.handlePending(u,c);return}n.cancelable&&n.preventDefault(),o(s)}handleEnd(){const{onAbort:n,onEnd:t}=this.props;this.detach(),this.activated||n(this.props.active),t()}handleCancel(){const{onAbort:n,onCancel:t}=this.props;this.detach(),this.activated||n(this.props.active),t()}handleKeydown(n){n.code===ae.Esc&&this.handleCancel()}removeTextSelection(){var n;(n=this.document.getSelection())==null||n.removeAllRanges()}}const Hc={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class zo extends nr{constructor(n){const{event:t}=n,i=Dn(t.target);super(n,Hc,i)}}zo.activators=[{eventName:"onPointerDown",handler:(e,n)=>{let{nativeEvent:t}=e,{onActivation:i}=n;return!t.isPrimary||t.button!==0?!1:(i==null||i({event:t}),!0)}}];const Tc={move:{name:"mousemove"},end:{name:"mouseup"}};var Ca;(function(e){e[e.RightClick=2]="RightClick"})(Ca||(Ca={}));class $o extends nr{constructor(n){super(n,Tc,Dn(n.event.target))}}$o.activators=[{eventName:"onMouseDown",handler:(e,n)=>{let{nativeEvent:t}=e,{onActivation:i}=n;return t.button===Ca.RightClick?!1:(i==null||i({event:t}),!0)}}];const Zi={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class jo extends nr{constructor(n){super(n,Zi)}static setup(){return window.addEventListener(Zi.move.name,n,{capture:!1,passive:!1}),function(){window.removeEventListener(Zi.move.name,n)};function n(){}}}jo.activators=[{eventName:"onTouchStart",handler:(e,n)=>{let{nativeEvent:t}=e,{onActivation:i}=n;const{touches:a}=t;return a.length>1?!1:(i==null||i({event:t}),!0)}}];var zn;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(zn||(zn={}));var _i;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(_i||(_i={}));function Ic(e){let{acceleration:n,activator:t=zn.Pointer,canScroll:i,draggingRect:a,enabled:r,interval:o=5,order:u=_i.TreeOrder,pointerCoordinates:s,scrollableAncestors:c,scrollableAncestorRects:l,delta:h,threshold:b}=e;const g=Pc({delta:h,disabled:!r}),[E,C]=Ks(),w=y.useRef({x:0,y:0}),S=y.useRef({x:0,y:0}),F=y.useMemo(()=>{switch(t){case zn.Pointer:return s?{top:s.y,bottom:s.y,left:s.x,right:s.x}:null;case zn.DraggableRect:return a}},[t,a,s]),D=y.useRef(null),P=y.useCallback(()=>{const q=D.current;if(!q)return;const O=w.current.x*S.current.x,M=w.current.y*S.current.y;q.scrollBy(O,M)},[]),R=y.useMemo(()=>u===_i.TreeOrder?[...c].reverse():c,[u,c]);y.useEffect(()=>{if(!r||!c.length||!F){C();return}for(const q of R){if((i==null?void 0:i(q))===!1)continue;const O=c.indexOf(q),M=l[O];if(!M)continue;const{direction:H,speed:U}=Ac(q,M,F,n,b);for(const B of["x","y"])g[B][H[B]]||(U[B]=0,H[B]=0);if(U.x>0||U.y>0){C(),D.current=q,E(P,o),w.current=U,S.current=H;return}}w.current={x:0,y:0},S.current={x:0,y:0},C()},[n,P,i,C,r,o,JSON.stringify(F),JSON.stringify(g),E,c,R,l,JSON.stringify(b)])}const Mc={x:{[xe.Backward]:!1,[xe.Forward]:!1},y:{[xe.Backward]:!1,[xe.Forward]:!1}};function Pc(e){let{delta:n,disabled:t}=e;const i=ba(n);return ri(a=>{if(t||!i||!a)return Mc;const r={x:Math.sign(n.x-i.x),y:Math.sign(n.y-i.y)};return{x:{[xe.Backward]:a.x[xe.Backward]||r.x===-1,[xe.Forward]:a.x[xe.Forward]||r.x===1},y:{[xe.Backward]:a.y[xe.Backward]||r.y===-1,[xe.Forward]:a.y[xe.Forward]||r.y===1}}},[t,n,i])}function Bc(e,n){const t=n!=null?e.get(n):void 0,i=t?t.node.current:null;return ri(a=>{var r;return n==null?null:(r=i??a)!=null?r:null},[i,n])}function Vc(e,n){return y.useMemo(()=>e.reduce((t,i)=>{const{sensor:a}=i,r=a.activators.map(o=>({eventName:o.eventName,handler:n(o.handler,i)}));return[...t,...r]},[]),[e,n])}var Zn;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Zn||(Zn={}));var ya;(function(e){e.Optimized="optimized"})(ya||(ya={}));const _r=new Map;function zc(e,n){let{dragging:t,dependencies:i,config:a}=n;const[r,o]=y.useState(null),{frequency:u,measure:s,strategy:c}=a,l=y.useRef(e),h=w(),b=Yn(h),g=y.useCallback(function(S){S===void 0&&(S=[]),!b.current&&o(F=>F===null?S:F.concat(S.filter(D=>!F.includes(D))))},[b]),E=y.useRef(null),C=ri(S=>{if(h&&!t)return _r;if(!S||S===_r||l.current!==e||r!=null){const F=new Map;for(let D of e){if(!D)continue;if(r&&r.length>0&&!r.includes(D.id)&&D.rect.current){F.set(D.id,D.rect.current);continue}const P=D.node.current,R=P?new er(s(P),P):null;D.rect.current=R,R&&F.set(D.id,R)}return F}return S},[e,r,t,h,s]);return y.useEffect(()=>{l.current=e},[e]),y.useEffect(()=>{h||g()},[t,h]),y.useEffect(()=>{r&&r.length>0&&o(null)},[JSON.stringify(r)]),y.useEffect(()=>{h||typeof u!="number"||E.current!==null||(E.current=setTimeout(()=>{g(),E.current=null},u))},[u,h,g,...i]),{droppableRects:C,measureDroppableContainers:g,measuringScheduled:r!=null};function w(){switch(c){case Zn.Always:return!1;case Zn.BeforeDragging:return t;default:return!t}}}function Uo(e,n){return ri(t=>e?t||(typeof n=="function"?n(e):e):null,[n,e])}function $c(e,n){return Uo(e,n)}function jc(e){let{callback:n,disabled:t}=e;const i=Ja(n),a=y.useMemo(()=>{if(t||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:r}=window;return new r(i)},[i,t]);return y.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function zi(e){let{callback:n,disabled:t}=e;const i=Ja(n),a=y.useMemo(()=>{if(t||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:r}=window;return new r(i)},[t]);return y.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Uc(e){return new er(Ln(e),e)}function Gr(e,n,t){n===void 0&&(n=Uc);const[i,a]=y.useState(null);function r(){a(s=>{if(!e)return null;if(e.isConnected===!1){var c;return(c=s??t)!=null?c:null}const l=n(e);return JSON.stringify(s)===JSON.stringify(l)?s:l})}const o=jc({callback(s){if(e)for(const c of s){const{type:l,target:h}=c;if(l==="childList"&&h instanceof HTMLElement&&h.contains(e)){r();break}}}}),u=zi({callback:r});return Dt(()=>{r(),e?(u==null||u.observe(e),o==null||o.observe(document.body,{childList:!0,subtree:!0})):(u==null||u.disconnect(),o==null||o.disconnect())},[e]),i}function qc(e){const n=Uo(e);return Ro(e,n)}const Or=[];function Wc(e){const n=y.useRef(e),t=ri(i=>e?i&&i!==Or&&e&&n.current&&e.parentNode===n.current.parentNode?i:Qa(e):Or,[e]);return y.useEffect(()=>{n.current=e},[e]),t}function Xc(e){const[n,t]=y.useState(null),i=y.useRef(e),a=y.useCallback(r=>{const o=Yi(r.target);o&&t(u=>u?(u.set(o,va(o)),new Map(u)):null)},[]);return y.useEffect(()=>{const r=i.current;if(e!==r){o(r);const u=e.map(s=>{const c=Yi(s);return c?(c.addEventListener("scroll",a,{passive:!0}),[c,va(c)]):null}).filter(s=>s!=null);t(u.length?new Map(u):null),i.current=e}return()=>{o(e),o(r)};function o(u){u.forEach(s=>{const c=Yi(s);c==null||c.removeEventListener("scroll",a)})}},[a,e]),y.useMemo(()=>e.length?n?Array.from(n.values()).reduce((r,o)=>An(r,o),_t):Bo(e):_t,[e,n])}function Fr(e,n){n===void 0&&(n=[]);const t=y.useRef(null);return y.useEffect(()=>{t.current=null},n),y.useEffect(()=>{const i=e!==_t;i&&!t.current&&(t.current=e),!i&&t.current&&(t.current=null)},[e]),t.current?xi(e,t.current):_t}function Kc(e){y.useEffect(()=>{if(!Vi)return;const n=e.map(t=>{let{sensor:i}=t;return i.setup==null?void 0:i.setup()});return()=>{for(const t of n)t==null||t()}},e.map(n=>{let{sensor:t}=n;return t}))}function Yc(e,n){return y.useMemo(()=>e.reduce((t,i)=>{let{eventName:a,handler:r}=i;return t[a]=o=>{r(o,n)},t},{}),[e,n])}function qo(e){return y.useMemo(()=>e?Ec(e):null,[e])}const Nr=[];function Jc(e,n){n===void 0&&(n=Ln);const[t]=e,i=qo(t?Xe(t):null),[a,r]=y.useState(Nr);function o(){r(()=>e.length?e.map(s=>Mo(s)?i:new er(n(s),s)):Nr)}const u=zi({callback:o});return Dt(()=>{u==null||u.disconnect(),o(),e.forEach(s=>u==null?void 0:u.observe(s))},[e]),a}function Zc(e){if(!e)return null;if(e.children.length>1)return e;const n=e.children[0];return ai(n)?n:e}function Qc(e){let{measure:n}=e;const[t,i]=y.useState(null),a=y.useCallback(c=>{for(const{target:l}of c)if(ai(l)){i(h=>{const b=n(l);return h?{...h,width:b.width,height:b.height}:b});break}},[n]),r=zi({callback:a}),o=y.useCallback(c=>{const l=Zc(c);r==null||r.disconnect(),l&&(r==null||r.observe(l)),i(l?n(l):null)},[n,r]),[u,s]=wi(o);return y.useMemo(()=>({nodeRef:u,rect:t,setRef:s}),[t,u,s])}const el=[{sensor:zo,options:{}},{sensor:tr,options:{}}],tl={current:{}},Ei={draggable:{measure:Sr},droppable:{measure:Sr,strategy:Zn.WhileDragging,frequency:ya.Optimized},dragOverlay:{measure:Ln}};class $n extends Map{get(n){var t;return n!=null&&(t=super.get(n))!=null?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(n=>{let{disabled:t}=n;return!t})}getNodeFor(n){var t,i;return(t=(i=this.get(n))==null?void 0:i.node.current)!=null?t:void 0}}const nl={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new $n,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ai},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Ei,measureDroppableContainers:Ai,windowRect:null,measuringScheduled:!1},il={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Ai,draggableNodes:new Map,over:null,measureDroppableContainers:Ai},$i=y.createContext(il),Wo=y.createContext(nl);function al(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new $n}}}function rl(e,n){switch(n.type){case Ee.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:n.initialCoordinates,active:n.active}};case Ee.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:n.coordinates.x-e.draggable.initialCoordinates.x,y:n.coordinates.y-e.draggable.initialCoordinates.y}}};case Ee.DragEnd:case Ee.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ee.RegisterDroppable:{const{element:t}=n,{id:i}=t,a=new $n(e.droppable.containers);return a.set(i,t),{...e,droppable:{...e.droppable,containers:a}}}case Ee.SetDroppableDisabled:{const{id:t,key:i,disabled:a}=n,r=e.droppable.containers.get(t);if(!r||i!==r.key)return e;const o=new $n(e.droppable.containers);return o.set(t,{...r,disabled:a}),{...e,droppable:{...e.droppable,containers:o}}}case Ee.UnregisterDroppable:{const{id:t,key:i}=n,a=e.droppable.containers.get(t);if(!a||i!==a.key)return e;const r=new $n(e.droppable.containers);return r.delete(t),{...e,droppable:{...e.droppable,containers:r}}}default:return e}}function ol(e){let{disabled:n}=e;const{active:t,activatorEvent:i,draggableNodes:a}=y.useContext($i),r=ba(i),o=ba(t==null?void 0:t.id);return y.useEffect(()=>{if(!n&&!i&&r&&o!=null){if(!Za(r)||document.activeElement===r.target)return;const u=a.get(o);if(!u)return;const{activatorNode:s,node:c}=u;if(!s.current&&!c.current)return;requestAnimationFrame(()=>{for(const l of[s.current,c.current]){if(!l)continue;const h=Zs(l);if(h){h.focus();break}}})}},[i,n,a,o,r]),null}function ul(e,n){let{transform:t,...i}=n;return e!=null&&e.length?e.reduce((a,r)=>r({transform:a,...i}),t):t}function sl(e){return y.useMemo(()=>({draggable:{...Ei.draggable,...e==null?void 0:e.draggable},droppable:{...Ei.droppable,...e==null?void 0:e.droppable},dragOverlay:{...Ei.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function cl(e){let{activeNode:n,measure:t,initialRect:i,config:a=!0}=e;const r=y.useRef(!1),{x:o,y:u}=typeof a=="boolean"?{x:a,y:a}:a;Dt(()=>{if(!o&&!u||!n){r.current=!1;return}if(r.current||!i)return;const c=n==null?void 0:n.node.current;if(!c||c.isConnected===!1)return;const l=t(c),h=Ro(l,i);if(o||(h.x=0),u||(h.y=0),r.current=!0,Math.abs(h.x)>0||Math.abs(h.y)>0){const b=Ho(c);b&&b.scrollBy({top:h.y,left:h.x})}},[n,o,u,i,t])}const Xo=y.createContext({..._t,scaleX:1,scaleY:1});var Xt;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Xt||(Xt={}));const ll=y.memo(function(n){var t,i,a,r;let{id:o,accessibility:u,autoScroll:s=!0,children:c,sensors:l=el,collisionDetection:h=pc,measuring:b,modifiers:g,...E}=n;const C=y.useReducer(rl,void 0,al),[w,S]=C,[F,D]=ac(),[P,R]=y.useState(Xt.Uninitialized),q=P===Xt.Initialized,{draggable:{active:O,nodes:M,translate:H},droppable:{containers:U}}=w,B=O!=null?M.get(O):null,Y=y.useRef({initial:null,translated:null}),Z=y.useMemo(()=>{var ke;return O!=null?{id:O,data:(ke=B==null?void 0:B.data)!=null?ke:tl,rect:Y}:null},[O,B]),te=y.useRef(null),[ce,de]=y.useState(null),[oe,ie]=y.useState(null),ue=Yn(E,Object.values(E)),mt=oi("DndDescribedBy",o),Ye=y.useMemo(()=>U.getEnabled(),[U]),re=sl(b),{droppableRects:fe,measureDroppableContainers:Pe,measuringScheduled:Be}=zc(Ye,{dragging:q,dependencies:[H.x,H.y],config:re.droppable}),be=Bc(M,O),bt=y.useMemo(()=>oe?ka(oe):null,[oe]),Je=ne(),ee=$c(be,re.draggable.measure);cl({activeNode:O!=null?M.get(O):null,config:Je.layoutShiftCompensation,initialRect:ee,measure:re.draggable.measure});const Q=Gr(be,re.draggable.measure,ee),Ve=Gr(be?be.parentElement:null),ze=y.useRef({activatorEvent:null,active:null,activeNode:be,collisionRect:null,collisions:null,droppableRects:fe,draggableNodes:M,draggingNode:null,draggingNodeRect:null,droppableContainers:U,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Gt=U.getNodeFor((t=ze.current.over)==null?void 0:t.id),Te=Qc({measure:re.dragOverlay.measure}),at=(i=Te.nodeRef.current)!=null?i:be,rt=q?(a=Te.rect)!=null?a:Q:null,kt=!!(Te.nodeRef.current&&Te.rect),vt=qc(kt?null:Q),Rt=qo(at?Xe(at):null),ot=Wc(q?Gt??be:null),Ze=Jc(ot),Ht=ul(g,{transform:{x:H.x-vt.x,y:H.y-vt.y,scaleX:1,scaleY:1},activatorEvent:oe,active:Z,activeNodeRect:Q,containerNodeRect:Ve,draggingNodeRect:rt,over:ze.current.over,overlayNodeRect:Te.rect,scrollableAncestors:ot,scrollableAncestorRects:Ze,windowRect:Rt}),ut=bt?An(bt,H):null,_e=Xc(ot),Ct=Fr(_e),an=Fr(_e,[Q]),st=An(Ht,Ct),Ge=rt?kc(rt,Ht):null,Tt=Z&&Ge?h({active:Z,collisionRect:Ge,droppableRects:fe,droppableContainers:Ye,pointerCoordinates:ut}):null,rn=hc(Tt,"id"),[$e,Ie]=y.useState(null),fn=kt?Ht:An(Ht,an),pn=mc(fn,(r=$e==null?void 0:$e.rect)!=null?r:null,Q),Qe=y.useRef(null),mn=y.useCallback((ke,ve)=>{let{sensor:Oe,options:ct}=ve;if(te.current==null)return;const Fe=M.get(te.current);if(!Fe)return;const Ce=ke.nativeEvent,Se=new Oe({active:te.current,activeNode:Fe,event:Ce,options:ct,context:ze,onAbort(me){if(!M.get(me))return;const{onDragAbort:Ne}=ue.current,je={id:me};Ne==null||Ne(je),F({type:"onDragAbort",event:je})},onPending(me,et,Ne,je){if(!M.get(me))return;const{onDragPending:tt}=ue.current,d={id:me,constraint:et,initialCoordinates:Ne,offset:je};tt==null||tt(d),F({type:"onDragPending",event:d})},onStart(me){const et=te.current;if(et==null)return;const Ne=M.get(et);if(!Ne)return;const{onDragStart:je}=ue.current,Ot={activatorEvent:Ce,active:{id:et,data:Ne.data,rect:Y}};Pn.unstable_batchedUpdates(()=>{je==null||je(Ot),R(Xt.Initializing),S({type:Ee.DragStart,initialCoordinates:me,active:et}),F({type:"onDragStart",event:Ot}),de(Qe.current),ie(Ce)})},onMove(me){S({type:Ee.DragMove,coordinates:me})},onEnd:yt(Ee.DragEnd),onCancel:yt(Ee.DragCancel)});Qe.current=Se;function yt(me){return async function(){const{active:Ne,collisions:je,over:Ot,scrollAdjustedTranslate:tt}=ze.current;let d=null;if(Ne&&tt){const{cancelDrop:k}=ue.current;d={activatorEvent:Ce,active:Ne,collisions:je,delta:tt,over:Ot},me===Ee.DragEnd&&typeof k=="function"&&await Promise.resolve(k(d))&&(me=Ee.DragCancel)}te.current=null,Pn.unstable_batchedUpdates(()=>{S({type:me}),R(Xt.Uninitialized),Ie(null),de(null),ie(null),Qe.current=null;const k=me===Ee.DragEnd?"onDragEnd":"onDragCancel";if(d){const f=ue.current[k];f==null||f(d),F({type:k,event:d})}})}}},[M]),on=y.useCallback((ke,ve)=>(Oe,ct)=>{const Fe=Oe.nativeEvent,Ce=M.get(ct);if(te.current!==null||!Ce||Fe.dndKit||Fe.defaultPrevented)return;const Se={active:Ce};ke(Oe,ve.options,Se)===!0&&(Fe.dndKit={capturedBy:ve.sensor},te.current=ct,mn(Oe,ve))},[M,mn]),un=Vc(l,on);Kc(l),Dt(()=>{Q&&P===Xt.Initializing&&R(Xt.Initialized)},[Q,P]),y.useEffect(()=>{const{onDragMove:ke}=ue.current,{active:ve,activatorEvent:Oe,collisions:ct,over:Fe}=ze.current;if(!ve||!Oe)return;const Ce={active:ve,activatorEvent:Oe,collisions:ct,delta:{x:st.x,y:st.y},over:Fe};Pn.unstable_batchedUpdates(()=>{ke==null||ke(Ce),F({type:"onDragMove",event:Ce})})},[st.x,st.y]),y.useEffect(()=>{const{active:ke,activatorEvent:ve,collisions:Oe,droppableContainers:ct,scrollAdjustedTranslate:Fe}=ze.current;if(!ke||te.current==null||!ve||!Fe)return;const{onDragOver:Ce}=ue.current,Se=ct.get(rn),yt=Se&&Se.rect.current?{id:Se.id,rect:Se.rect.current,data:Se.data,disabled:Se.disabled}:null,me={active:ke,activatorEvent:ve,collisions:Oe,delta:{x:Fe.x,y:Fe.y},over:yt};Pn.unstable_batchedUpdates(()=>{Ie(yt),Ce==null||Ce(me),F({type:"onDragOver",event:me})})},[rn]),Dt(()=>{ze.current={activatorEvent:oe,active:Z,activeNode:be,collisionRect:Ge,collisions:Tt,droppableRects:fe,draggableNodes:M,draggingNode:at,draggingNodeRect:rt,droppableContainers:U,over:$e,scrollableAncestors:ot,scrollAdjustedTranslate:st},Y.current={initial:rt,translated:Ge}},[Z,be,Tt,Ge,M,at,rt,fe,U,$e,ot,st]),Ic({...Je,delta:H,draggingRect:Ge,pointerCoordinates:ut,scrollableAncestors:ot,scrollableAncestorRects:Ze});const sn=y.useMemo(()=>({active:Z,activeNode:be,activeNodeRect:Q,activatorEvent:oe,collisions:Tt,containerNodeRect:Ve,dragOverlay:Te,draggableNodes:M,droppableContainers:U,droppableRects:fe,over:$e,measureDroppableContainers:Pe,scrollableAncestors:ot,scrollableAncestorRects:Ze,measuringConfiguration:re,measuringScheduled:Be,windowRect:Rt}),[Z,be,Q,oe,Tt,Ve,Te,M,U,fe,$e,Pe,ot,Ze,re,Be,Rt]),bn=y.useMemo(()=>({activatorEvent:oe,activators:un,active:Z,activeNodeRect:Q,ariaDescribedById:{draggable:mt},dispatch:S,draggableNodes:M,over:$e,measureDroppableContainers:Pe}),[oe,un,Z,Q,S,mt,M,$e,Pe]);return qe.createElement(Lo.Provider,{value:D},qe.createElement($i.Provider,{value:bn},qe.createElement(Wo.Provider,{value:sn},qe.createElement(Xo.Provider,{value:pn},c)),qe.createElement(ol,{disabled:(u==null?void 0:u.restoreFocus)===!1})),qe.createElement(uc,{...u,hiddenTextDescribedById:mt}));function ne(){const ke=(ce==null?void 0:ce.autoScrollEnabled)===!1,ve=typeof s=="object"?s.enabled===!1:s===!1,Oe=q&&!ke&&!ve;return typeof s=="object"?{...s,enabled:Oe}:{enabled:Oe}}}),dl=y.createContext(null),Dr="button",hl="Draggable";function gl(e){let{id:n,data:t,disabled:i=!1,attributes:a}=e;const r=oi(hl),{activators:o,activatorEvent:u,active:s,activeNodeRect:c,ariaDescribedById:l,draggableNodes:h,over:b}=y.useContext($i),{role:g=Dr,roleDescription:E="draggable",tabIndex:C=0}=a??{},w=(s==null?void 0:s.id)===n,S=y.useContext(w?Xo:dl),[F,D]=wi(),[P,R]=wi(),q=Yc(o,n),O=Yn(t);Dt(()=>(h.set(n,{id:n,key:r,node:F,activatorNode:P,data:O}),()=>{const H=h.get(n);H&&H.key===r&&h.delete(n)}),[h,n]);const M=y.useMemo(()=>({role:g,tabIndex:C,"aria-disabled":i,"aria-pressed":w&&g===Dr?!0:void 0,"aria-roledescription":E,"aria-describedby":l.draggable}),[i,g,C,w,E,l.draggable]);return{active:s,activatorEvent:u,activeNodeRect:c,attributes:M,isDragging:w,listeners:i?void 0:q,node:F,over:b,setNodeRef:D,setActivatorNodeRef:R,transform:S}}function fl(){return y.useContext(Wo)}const pl="Droppable",ml={timeout:25};function bl(e){let{data:n,disabled:t=!1,id:i,resizeObserverConfig:a}=e;const r=oi(pl),{active:o,dispatch:u,over:s,measureDroppableContainers:c}=y.useContext($i),l=y.useRef({disabled:t}),h=y.useRef(!1),b=y.useRef(null),g=y.useRef(null),{disabled:E,updateMeasurementsFor:C,timeout:w}={...ml,...a},S=Yn(C??i),F=y.useCallback(()=>{if(!h.current){h.current=!0;return}g.current!=null&&clearTimeout(g.current),g.current=setTimeout(()=>{c(Array.isArray(S.current)?S.current:[S.current]),g.current=null},w)},[w]),D=zi({callback:F,disabled:E||!o}),P=y.useCallback((M,H)=>{D&&(H&&(D.unobserve(H),h.current=!1),M&&D.observe(M))},[D]),[R,q]=wi(P),O=Yn(n);return y.useEffect(()=>{!D||!R.current||(D.disconnect(),h.current=!1,D.observe(R.current))},[R,D]),y.useEffect(()=>(u({type:Ee.RegisterDroppable,element:{id:i,key:r,disabled:t,node:R,rect:b,data:O}}),()=>u({type:Ee.UnregisterDroppable,key:r,id:i})),[i]),y.useEffect(()=>{t!==l.current.disabled&&(u({type:Ee.SetDroppableDisabled,id:i,key:r,disabled:t}),l.current.disabled=t)},[i,r,t,u]),{active:o,rect:b,isOver:(s==null?void 0:s.id)===i,node:R,over:s,setNodeRef:q}}/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function Jt(e,n){return typeof e=="function"?e(n):e}function it(e,n){return t=>{n.setState(i=>({...i,[e]:Jt(t,i[e])}))}}function Gi(e){return e instanceof Function}function kl(e){return Array.isArray(e)&&e.every(n=>typeof n=="number")}function vl(e,n){const t=[],i=a=>{a.forEach(r=>{t.push(r);const o=n(r);o!=null&&o.length&&i(o)})};return i(e),t}function X(e,n,t){let i=[],a;return r=>{let o;t.key&&t.debug&&(o=Date.now());const u=e(r);if(!(u.length!==i.length||u.some((l,h)=>i[h]!==l)))return a;i=u;let c;if(t.key&&t.debug&&(c=Date.now()),a=n(...u),t==null||t.onChange==null||t.onChange(a),t.key&&t.debug&&t!=null&&t.debug()){const l=Math.round((Date.now()-o)*100)/100,h=Math.round((Date.now()-c)*100)/100,b=h/16,g=(E,C)=>{for(E=String(E);E.length<C;)E=" "+E;return E};console.info(`%c⏱ ${g(h,5)} /${g(l,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*b,120))}deg 100% 31%);`,t==null?void 0:t.key)}return a}}function K(e,n,t,i){return{debug:()=>{var a;return(a=e==null?void 0:e.debugAll)!=null?a:e[n]},key:!1,onChange:i}}function Cl(e,n,t,i){var a,r;const u={...e._getDefaultColumnDef(),...n},s=u.accessorKey;let c=(a=(r=u.id)!=null?r:s?s.replace(".","_"):void 0)!=null?a:typeof u.header=="string"?u.header:void 0,l;if(u.accessorFn?l=u.accessorFn:s&&(s.includes(".")?l=b=>{let g=b;for(const C of s.split(".")){var E;g=(E=g)==null?void 0:E[C]}return g}:l=b=>b[u.accessorKey]),!c)throw new Error;let h={id:`${String(c)}`,accessorFn:l,parent:i,depth:t,columnDef:u,columns:[],getFlatColumns:X(()=>[!0],()=>{var b;return[h,...(b=h.columns)==null?void 0:b.flatMap(g=>g.getFlatColumns())]},K(e.options,"debugColumns")),getLeafColumns:X(()=>[e._getOrderColumnsFn()],b=>{var g;if((g=h.columns)!=null&&g.length){let E=h.columns.flatMap(C=>C.getLeafColumns());return b(E)}return[h]},K(e.options,"debugColumns"))};for(const b of e._features)b.createColumn==null||b.createColumn(h,e);return h}const De="debugHeaders";function Lr(e,n,t){var i;let r={id:(i=t.id)!=null?i:n.id,column:n,index:t.index,isPlaceholder:!!t.isPlaceholder,placeholderId:t.placeholderId,depth:t.depth,subHeaders:[],colSpan:0,rowSpan:0,headerGroup:null,getLeafHeaders:()=>{const o=[],u=s=>{s.subHeaders&&s.subHeaders.length&&s.subHeaders.map(u),o.push(s)};return u(r),o},getContext:()=>({table:e,header:r,column:n})};return e._features.forEach(o=>{o.createHeader==null||o.createHeader(r,e)}),r}const yl={createTable:e=>{e.getHeaderGroups=X(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(n,t,i,a)=>{var r,o;const u=(r=i==null?void 0:i.map(h=>t.find(b=>b.id===h)).filter(Boolean))!=null?r:[],s=(o=a==null?void 0:a.map(h=>t.find(b=>b.id===h)).filter(Boolean))!=null?o:[],c=t.filter(h=>!(i!=null&&i.includes(h.id))&&!(a!=null&&a.includes(h.id)));return di(n,[...u,...c,...s],e)},K(e.options,De)),e.getCenterHeaderGroups=X(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(n,t,i,a)=>(t=t.filter(r=>!(i!=null&&i.includes(r.id))&&!(a!=null&&a.includes(r.id))),di(n,t,e,"center")),K(e.options,De)),e.getLeftHeaderGroups=X(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left],(n,t,i)=>{var a;const r=(a=i==null?void 0:i.map(o=>t.find(u=>u.id===o)).filter(Boolean))!=null?a:[];return di(n,r,e,"left")},K(e.options,De)),e.getRightHeaderGroups=X(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.right],(n,t,i)=>{var a;const r=(a=i==null?void 0:i.map(o=>t.find(u=>u.id===o)).filter(Boolean))!=null?a:[];return di(n,r,e,"right")},K(e.options,De)),e.getFooterGroups=X(()=>[e.getHeaderGroups()],n=>[...n].reverse(),K(e.options,De)),e.getLeftFooterGroups=X(()=>[e.getLeftHeaderGroups()],n=>[...n].reverse(),K(e.options,De)),e.getCenterFooterGroups=X(()=>[e.getCenterHeaderGroups()],n=>[...n].reverse(),K(e.options,De)),e.getRightFooterGroups=X(()=>[e.getRightHeaderGroups()],n=>[...n].reverse(),K(e.options,De)),e.getFlatHeaders=X(()=>[e.getHeaderGroups()],n=>n.map(t=>t.headers).flat(),K(e.options,De)),e.getLeftFlatHeaders=X(()=>[e.getLeftHeaderGroups()],n=>n.map(t=>t.headers).flat(),K(e.options,De)),e.getCenterFlatHeaders=X(()=>[e.getCenterHeaderGroups()],n=>n.map(t=>t.headers).flat(),K(e.options,De)),e.getRightFlatHeaders=X(()=>[e.getRightHeaderGroups()],n=>n.map(t=>t.headers).flat(),K(e.options,De)),e.getCenterLeafHeaders=X(()=>[e.getCenterFlatHeaders()],n=>n.filter(t=>{var i;return!((i=t.subHeaders)!=null&&i.length)}),K(e.options,De)),e.getLeftLeafHeaders=X(()=>[e.getLeftFlatHeaders()],n=>n.filter(t=>{var i;return!((i=t.subHeaders)!=null&&i.length)}),K(e.options,De)),e.getRightLeafHeaders=X(()=>[e.getRightFlatHeaders()],n=>n.filter(t=>{var i;return!((i=t.subHeaders)!=null&&i.length)}),K(e.options,De)),e.getLeafHeaders=X(()=>[e.getLeftHeaderGroups(),e.getCenterHeaderGroups(),e.getRightHeaderGroups()],(n,t,i)=>{var a,r,o,u,s,c;return[...(a=(r=n[0])==null?void 0:r.headers)!=null?a:[],...(o=(u=t[0])==null?void 0:u.headers)!=null?o:[],...(s=(c=i[0])==null?void 0:c.headers)!=null?s:[]].map(l=>l.getLeafHeaders()).flat()},K(e.options,De))}};function di(e,n,t,i){var a,r;let o=0;const u=function(b,g){g===void 0&&(g=1),o=Math.max(o,g),b.filter(E=>E.getIsVisible()).forEach(E=>{var C;(C=E.columns)!=null&&C.length&&u(E.columns,g+1)},0)};u(e);let s=[];const c=(b,g)=>{const E={depth:g,id:[i,`${g}`].filter(Boolean).join("_"),headers:[]},C=[];b.forEach(w=>{const S=[...C].reverse()[0],F=w.column.depth===E.depth;let D,P=!1;if(F&&w.column.parent?D=w.column.parent:(D=w.column,P=!0),S&&(S==null?void 0:S.column)===D)S.subHeaders.push(w);else{const R=Lr(t,D,{id:[i,g,D.id,w==null?void 0:w.id].filter(Boolean).join("_"),isPlaceholder:P,placeholderId:P?`${C.filter(q=>q.column===D).length}`:void 0,depth:g,index:C.length});R.subHeaders.push(w),C.push(R)}E.headers.push(w),w.headerGroup=E}),s.push(E),g>0&&c(C,g-1)},l=n.map((b,g)=>Lr(t,b,{depth:o,index:g}));c(l,o-1),s.reverse();const h=b=>b.filter(E=>E.column.getIsVisible()).map(E=>{let C=0,w=0,S=[0];E.subHeaders&&E.subHeaders.length?(S=[],h(E.subHeaders).forEach(D=>{let{colSpan:P,rowSpan:R}=D;C+=P,S.push(R)})):C=1;const F=Math.min(...S);return w=w+F,E.colSpan=C,E.rowSpan=w,{colSpan:C,rowSpan:w}});return h((a=(r=s[0])==null?void 0:r.headers)!=null?a:[]),s}const hi={size:150,minSize:20,maxSize:Number.MAX_SAFE_INTEGER},Qi=()=>({startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]}),El={getDefaultColumnDef:()=>hi,getInitialState:e=>({columnSizing:{},columnSizingInfo:Qi(),...e}),getDefaultOptions:e=>({columnResizeMode:"onEnd",columnResizeDirection:"ltr",onColumnSizingChange:it("columnSizing",e),onColumnSizingInfoChange:it("columnSizingInfo",e)}),createColumn:(e,n)=>{e.getSize=()=>{var t,i,a;const r=n.getState().columnSizing[e.id];return Math.min(Math.max((t=e.columnDef.minSize)!=null?t:hi.minSize,(i=r??e.columnDef.size)!=null?i:hi.size),(a=e.columnDef.maxSize)!=null?a:hi.maxSize)},e.getStart=X(t=>[t,jn(n,t),n.getState().columnSizing],(t,i)=>i.slice(0,e.getIndex(t)).reduce((a,r)=>a+r.getSize(),0),K(n.options,"debugColumns")),e.getAfter=X(t=>[t,jn(n,t),n.getState().columnSizing],(t,i)=>i.slice(e.getIndex(t)+1).reduce((a,r)=>a+r.getSize(),0),K(n.options,"debugColumns")),e.resetSize=()=>{n.setColumnSizing(t=>{let{[e.id]:i,...a}=t;return a})},e.getCanResize=()=>{var t,i;return((t=e.columnDef.enableResizing)!=null?t:!0)&&((i=n.options.enableColumnResizing)!=null?i:!0)},e.getIsResizing=()=>n.getState().columnSizingInfo.isResizingColumn===e.id},createHeader:(e,n)=>{e.getSize=()=>{let t=0;const i=a=>{if(a.subHeaders.length)a.subHeaders.forEach(i);else{var r;t+=(r=a.column.getSize())!=null?r:0}};return i(e),t},e.getStart=()=>{if(e.index>0){const t=e.headerGroup.headers[e.index-1];return t.getStart()+t.getSize()}return 0},e.getResizeHandler=t=>{const i=n.getColumn(e.column.id),a=i==null?void 0:i.getCanResize();return r=>{if(!i||!a||(r.persist==null||r.persist(),ea(r)&&r.touches&&r.touches.length>1))return;const o=e.getSize(),u=e?e.getLeafHeaders().map(S=>[S.column.id,S.column.getSize()]):[[i.id,i.getSize()]],s=ea(r)?Math.round(r.touches[0].clientX):r.clientX,c={},l=(S,F)=>{typeof F=="number"&&(n.setColumnSizingInfo(D=>{var P,R;const q=n.options.columnResizeDirection==="rtl"?-1:1,O=(F-((P=D==null?void 0:D.startOffset)!=null?P:0))*q,M=Math.max(O/((R=D==null?void 0:D.startSize)!=null?R:0),-.999999);return D.columnSizingStart.forEach(H=>{let[U,B]=H;c[U]=Math.round(Math.max(B+B*M,0)*100)/100}),{...D,deltaOffset:O,deltaPercentage:M}}),(n.options.columnResizeMode==="onChange"||S==="end")&&n.setColumnSizing(D=>({...D,...c})))},h=S=>l("move",S),b=S=>{l("end",S),n.setColumnSizingInfo(F=>({...F,isResizingColumn:!1,startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,columnSizingStart:[]}))},g=t||typeof document<"u"?document:null,E={moveHandler:S=>h(S.clientX),upHandler:S=>{g==null||g.removeEventListener("mousemove",E.moveHandler),g==null||g.removeEventListener("mouseup",E.upHandler),b(S.clientX)}},C={moveHandler:S=>(S.cancelable&&(S.preventDefault(),S.stopPropagation()),h(S.touches[0].clientX),!1),upHandler:S=>{var F;g==null||g.removeEventListener("touchmove",C.moveHandler),g==null||g.removeEventListener("touchend",C.upHandler),S.cancelable&&(S.preventDefault(),S.stopPropagation()),b((F=S.touches[0])==null?void 0:F.clientX)}},w=Sl()?{passive:!1}:!1;ea(r)?(g==null||g.addEventListener("touchmove",C.moveHandler,w),g==null||g.addEventListener("touchend",C.upHandler,w)):(g==null||g.addEventListener("mousemove",E.moveHandler,w),g==null||g.addEventListener("mouseup",E.upHandler,w)),n.setColumnSizingInfo(S=>({...S,startOffset:s,startSize:o,deltaOffset:0,deltaPercentage:0,columnSizingStart:u,isResizingColumn:i.id}))}}},createTable:e=>{e.setColumnSizing=n=>e.options.onColumnSizingChange==null?void 0:e.options.onColumnSizingChange(n),e.setColumnSizingInfo=n=>e.options.onColumnSizingInfoChange==null?void 0:e.options.onColumnSizingInfoChange(n),e.resetColumnSizing=n=>{var t;e.setColumnSizing(n?{}:(t=e.initialState.columnSizing)!=null?t:{})},e.resetHeaderSizeInfo=n=>{var t;e.setColumnSizingInfo(n?Qi():(t=e.initialState.columnSizingInfo)!=null?t:Qi())},e.getTotalSize=()=>{var n,t;return(n=(t=e.getHeaderGroups()[0])==null?void 0:t.headers.reduce((i,a)=>i+a.getSize(),0))!=null?n:0},e.getLeftTotalSize=()=>{var n,t;return(n=(t=e.getLeftHeaderGroups()[0])==null?void 0:t.headers.reduce((i,a)=>i+a.getSize(),0))!=null?n:0},e.getCenterTotalSize=()=>{var n,t;return(n=(t=e.getCenterHeaderGroups()[0])==null?void 0:t.headers.reduce((i,a)=>i+a.getSize(),0))!=null?n:0},e.getRightTotalSize=()=>{var n,t;return(n=(t=e.getRightHeaderGroups()[0])==null?void 0:t.headers.reduce((i,a)=>i+a.getSize(),0))!=null?n:0}}};let gi=null;function Sl(){if(typeof gi=="boolean")return gi;let e=!1;try{const n={get passive(){return e=!0,!1}},t=()=>{};window.addEventListener("test",t,n),window.removeEventListener("test",t)}catch{e=!1}return gi=e,gi}function ea(e){return e.type==="touchstart"}const wl={getInitialState:e=>({expanded:{},...e}),getDefaultOptions:e=>({onExpandedChange:it("expanded",e),paginateExpandedRows:!0}),createTable:e=>{let n=!1,t=!1;e._autoResetExpanded=()=>{var i,a;if(!n){e._queue(()=>{n=!0});return}if((i=(a=e.options.autoResetAll)!=null?a:e.options.autoResetExpanded)!=null?i:!e.options.manualExpanding){if(t)return;t=!0,e._queue(()=>{e.resetExpanded(),t=!1})}},e.setExpanded=i=>e.options.onExpandedChange==null?void 0:e.options.onExpandedChange(i),e.toggleAllRowsExpanded=i=>{i??!e.getIsAllRowsExpanded()?e.setExpanded(!0):e.setExpanded({})},e.resetExpanded=i=>{var a,r;e.setExpanded(i?{}:(a=(r=e.initialState)==null?void 0:r.expanded)!=null?a:{})},e.getCanSomeRowsExpand=()=>e.getPrePaginationRowModel().flatRows.some(i=>i.getCanExpand()),e.getToggleAllRowsExpandedHandler=()=>i=>{i.persist==null||i.persist(),e.toggleAllRowsExpanded()},e.getIsSomeRowsExpanded=()=>{const i=e.getState().expanded;return i===!0||Object.values(i).some(Boolean)},e.getIsAllRowsExpanded=()=>{const i=e.getState().expanded;return typeof i=="boolean"?i===!0:!(!Object.keys(i).length||e.getRowModel().flatRows.some(a=>!a.getIsExpanded()))},e.getExpandedDepth=()=>{let i=0;return(e.getState().expanded===!0?Object.keys(e.getRowModel().rowsById):Object.keys(e.getState().expanded)).forEach(r=>{const o=r.split(".");i=Math.max(i,o.length)}),i},e.getPreExpandedRowModel=()=>e.getSortedRowModel(),e.getExpandedRowModel=()=>(!e._getExpandedRowModel&&e.options.getExpandedRowModel&&(e._getExpandedRowModel=e.options.getExpandedRowModel(e)),e.options.manualExpanding||!e._getExpandedRowModel?e.getPreExpandedRowModel():e._getExpandedRowModel())},createRow:(e,n)=>{e.toggleExpanded=t=>{n.setExpanded(i=>{var a;const r=i===!0?!0:!!(i!=null&&i[e.id]);let o={};if(i===!0?Object.keys(n.getRowModel().rowsById).forEach(u=>{o[u]=!0}):o=i,t=(a=t)!=null?a:!r,!r&&t)return{...o,[e.id]:!0};if(r&&!t){const{[e.id]:u,...s}=o;return s}return i})},e.getIsExpanded=()=>{var t;const i=n.getState().expanded;return!!((t=n.options.getIsRowExpanded==null?void 0:n.options.getIsRowExpanded(e))!=null?t:i===!0||i!=null&&i[e.id])},e.getCanExpand=()=>{var t,i,a;return(t=n.options.getRowCanExpand==null?void 0:n.options.getRowCanExpand(e))!=null?t:((i=n.options.enableExpanding)!=null?i:!0)&&!!((a=e.subRows)!=null&&a.length)},e.getIsAllParentsExpanded=()=>{let t=!0,i=e;for(;t&&i.parentId;)i=n.getRow(i.parentId,!0),t=i.getIsExpanded();return t},e.getToggleExpandedHandler=()=>{const t=e.getCanExpand();return()=>{t&&e.toggleExpanded()}}}},Ko=(e,n,t)=>{var i;const a=t.toLowerCase();return!!(!((i=e.getValue(n))==null||(i=i.toString())==null||(i=i.toLowerCase())==null)&&i.includes(a))};Ko.autoRemove=e=>xt(e);const Yo=(e,n,t)=>{var i;return!!(!((i=e.getValue(n))==null||(i=i.toString())==null)&&i.includes(t))};Yo.autoRemove=e=>xt(e);const Jo=(e,n,t)=>{var i;return((i=e.getValue(n))==null||(i=i.toString())==null?void 0:i.toLowerCase())===(t==null?void 0:t.toLowerCase())};Jo.autoRemove=e=>xt(e);const Zo=(e,n,t)=>{var i;return(i=e.getValue(n))==null?void 0:i.includes(t)};Zo.autoRemove=e=>xt(e)||!(e!=null&&e.length);const Qo=(e,n,t)=>!t.some(i=>{var a;return!((a=e.getValue(n))!=null&&a.includes(i))});Qo.autoRemove=e=>xt(e)||!(e!=null&&e.length);const eu=(e,n,t)=>t.some(i=>{var a;return(a=e.getValue(n))==null?void 0:a.includes(i)});eu.autoRemove=e=>xt(e)||!(e!=null&&e.length);const tu=(e,n,t)=>e.getValue(n)===t;tu.autoRemove=e=>xt(e);const nu=(e,n,t)=>e.getValue(n)==t;nu.autoRemove=e=>xt(e);const ir=(e,n,t)=>{let[i,a]=t;const r=e.getValue(n);return r>=i&&r<=a};ir.resolveFilterValue=e=>{let[n,t]=e,i=typeof n!="number"?parseFloat(n):n,a=typeof t!="number"?parseFloat(t):t,r=n===null||Number.isNaN(i)?-1/0:i,o=t===null||Number.isNaN(a)?1/0:a;if(r>o){const u=r;r=o,o=u}return[r,o]};ir.autoRemove=e=>xt(e)||xt(e[0])&&xt(e[1]);const Mt={includesString:Ko,includesStringSensitive:Yo,equalsString:Jo,arrIncludes:Zo,arrIncludesAll:Qo,arrIncludesSome:eu,equals:tu,weakEquals:nu,inNumberRange:ir};function xt(e){return e==null||e===""}const xl={getDefaultColumnDef:()=>({filterFn:"auto"}),getInitialState:e=>({columnFilters:[],globalFilter:void 0,...e}),getDefaultOptions:e=>({onColumnFiltersChange:it("columnFilters",e),onGlobalFilterChange:it("globalFilter",e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100,globalFilterFn:"auto",getColumnCanGlobalFilter:n=>{var t;const i=(t=e.getCoreRowModel().flatRows[0])==null||(t=t._getAllCellsByColumnId()[n.id])==null?void 0:t.getValue();return typeof i=="string"||typeof i=="number"}}),createColumn:(e,n)=>{e.getAutoFilterFn=()=>{const t=n.getCoreRowModel().flatRows[0],i=t==null?void 0:t.getValue(e.id);return typeof i=="string"?Mt.includesString:typeof i=="number"?Mt.inNumberRange:typeof i=="boolean"||i!==null&&typeof i=="object"?Mt.equals:Array.isArray(i)?Mt.arrIncludes:Mt.weakEquals},e.getFilterFn=()=>{var t,i;return Gi(e.columnDef.filterFn)?e.columnDef.filterFn:e.columnDef.filterFn==="auto"?e.getAutoFilterFn():(t=(i=n.options.filterFns)==null?void 0:i[e.columnDef.filterFn])!=null?t:Mt[e.columnDef.filterFn]},e.getCanFilter=()=>{var t,i,a;return((t=e.columnDef.enableColumnFilter)!=null?t:!0)&&((i=n.options.enableColumnFilters)!=null?i:!0)&&((a=n.options.enableFilters)!=null?a:!0)&&!!e.accessorFn},e.getCanGlobalFilter=()=>{var t,i,a,r;return((t=e.columnDef.enableGlobalFilter)!=null?t:!0)&&((i=n.options.enableGlobalFilter)!=null?i:!0)&&((a=n.options.enableFilters)!=null?a:!0)&&((r=n.options.getColumnCanGlobalFilter==null?void 0:n.options.getColumnCanGlobalFilter(e))!=null?r:!0)&&!!e.accessorFn},e.getIsFiltered=()=>e.getFilterIndex()>-1,e.getFilterValue=()=>{var t;return(t=n.getState().columnFilters)==null||(t=t.find(i=>i.id===e.id))==null?void 0:t.value},e.getFilterIndex=()=>{var t,i;return(t=(i=n.getState().columnFilters)==null?void 0:i.findIndex(a=>a.id===e.id))!=null?t:-1},e.setFilterValue=t=>{n.setColumnFilters(i=>{const a=e.getFilterFn(),r=i==null?void 0:i.find(l=>l.id===e.id),o=Jt(t,r?r.value:void 0);if(Rr(a,o,e)){var u;return(u=i==null?void 0:i.filter(l=>l.id!==e.id))!=null?u:[]}const s={id:e.id,value:o};if(r){var c;return(c=i==null?void 0:i.map(l=>l.id===e.id?s:l))!=null?c:[]}return i!=null&&i.length?[...i,s]:[s]})},e._getFacetedRowModel=n.options.getFacetedRowModel&&n.options.getFacetedRowModel(n,e.id),e.getFacetedRowModel=()=>e._getFacetedRowModel?e._getFacetedRowModel():n.getPreFilteredRowModel(),e._getFacetedUniqueValues=n.options.getFacetedUniqueValues&&n.options.getFacetedUniqueValues(n,e.id),e.getFacetedUniqueValues=()=>e._getFacetedUniqueValues?e._getFacetedUniqueValues():new Map,e._getFacetedMinMaxValues=n.options.getFacetedMinMaxValues&&n.options.getFacetedMinMaxValues(n,e.id),e.getFacetedMinMaxValues=()=>{if(e._getFacetedMinMaxValues)return e._getFacetedMinMaxValues()}},createRow:(e,n)=>{e.columnFilters={},e.columnFiltersMeta={}},createTable:e=>{e.getGlobalAutoFilterFn=()=>Mt.includesString,e.getGlobalFilterFn=()=>{var n,t;const{globalFilterFn:i}=e.options;return Gi(i)?i:i==="auto"?e.getGlobalAutoFilterFn():(n=(t=e.options.filterFns)==null?void 0:t[i])!=null?n:Mt[i]},e.setColumnFilters=n=>{const t=e.getAllLeafColumns(),i=a=>{var r;return(r=Jt(n,a))==null?void 0:r.filter(o=>{const u=t.find(s=>s.id===o.id);if(u){const s=u.getFilterFn();if(Rr(s,o.value,u))return!1}return!0})};e.options.onColumnFiltersChange==null||e.options.onColumnFiltersChange(i)},e.setGlobalFilter=n=>{e.options.onGlobalFilterChange==null||e.options.onGlobalFilterChange(n)},e.resetGlobalFilter=n=>{e.setGlobalFilter(n?void 0:e.initialState.globalFilter)},e.resetColumnFilters=n=>{var t,i;e.setColumnFilters(n?[]:(t=(i=e.initialState)==null?void 0:i.columnFilters)!=null?t:[])},e.getPreFilteredRowModel=()=>e.getCoreRowModel(),e.getFilteredRowModel=()=>(!e._getFilteredRowModel&&e.options.getFilteredRowModel&&(e._getFilteredRowModel=e.options.getFilteredRowModel(e)),e.options.manualFiltering||!e._getFilteredRowModel?e.getPreFilteredRowModel():e._getFilteredRowModel()),e._getGlobalFacetedRowModel=e.options.getFacetedRowModel&&e.options.getFacetedRowModel(e,"__global__"),e.getGlobalFacetedRowModel=()=>e.options.manualFiltering||!e._getGlobalFacetedRowModel?e.getPreFilteredRowModel():e._getGlobalFacetedRowModel(),e._getGlobalFacetedUniqueValues=e.options.getFacetedUniqueValues&&e.options.getFacetedUniqueValues(e,"__global__"),e.getGlobalFacetedUniqueValues=()=>e._getGlobalFacetedUniqueValues?e._getGlobalFacetedUniqueValues():new Map,e._getGlobalFacetedMinMaxValues=e.options.getFacetedMinMaxValues&&e.options.getFacetedMinMaxValues(e,"__global__"),e.getGlobalFacetedMinMaxValues=()=>{if(e._getGlobalFacetedMinMaxValues)return e._getGlobalFacetedMinMaxValues()}}};function Rr(e,n,t){return(e&&e.autoRemove?e.autoRemove(n,t):!1)||typeof n>"u"||typeof n=="string"&&!n}const Al=(e,n,t)=>t.reduce((i,a)=>{const r=a.getValue(e);return i+(typeof r=="number"?r:0)},0),_l=(e,n,t)=>{let i;return t.forEach(a=>{const r=a.getValue(e);r!=null&&(i>r||i===void 0&&r>=r)&&(i=r)}),i},Gl=(e,n,t)=>{let i;return t.forEach(a=>{const r=a.getValue(e);r!=null&&(i<r||i===void 0&&r>=r)&&(i=r)}),i},Ol=(e,n,t)=>{let i,a;return t.forEach(r=>{const o=r.getValue(e);o!=null&&(i===void 0?o>=o&&(i=a=o):(i>o&&(i=o),a<o&&(a=o)))}),[i,a]},Fl=(e,n)=>{let t=0,i=0;if(n.forEach(a=>{let r=a.getValue(e);r!=null&&(r=+r)>=r&&(++t,i+=r)}),t)return i/t},Nl=(e,n)=>{if(!n.length)return;const t=n.map(r=>r.getValue(e));if(!kl(t))return;if(t.length===1)return t[0];const i=Math.floor(t.length/2),a=t.sort((r,o)=>r-o);return t.length%2!==0?a[i]:(a[i-1]+a[i])/2},Dl=(e,n)=>Array.from(new Set(n.map(t=>t.getValue(e))).values()),Ll=(e,n)=>new Set(n.map(t=>t.getValue(e))).size,Rl=(e,n)=>n.length,ta={sum:Al,min:_l,max:Gl,extent:Ol,mean:Fl,median:Nl,unique:Dl,uniqueCount:Ll,count:Rl},Hl={getDefaultColumnDef:()=>({aggregatedCell:e=>{var n,t;return(n=(t=e.getValue())==null||t.toString==null?void 0:t.toString())!=null?n:null},aggregationFn:"auto"}),getInitialState:e=>({grouping:[],...e}),getDefaultOptions:e=>({onGroupingChange:it("grouping",e),groupedColumnMode:"reorder"}),createColumn:(e,n)=>{e.toggleGrouping=()=>{n.setGrouping(t=>t!=null&&t.includes(e.id)?t.filter(i=>i!==e.id):[...t??[],e.id])},e.getCanGroup=()=>{var t,i,a,r;return(t=(i=(a=(r=e.columnDef.enableGrouping)!=null?r:!0)!=null?a:n.options.enableGrouping)!=null?i:!0)!=null?t:!!e.accessorFn},e.getIsGrouped=()=>{var t;return(t=n.getState().grouping)==null?void 0:t.includes(e.id)},e.getGroupedIndex=()=>{var t;return(t=n.getState().grouping)==null?void 0:t.indexOf(e.id)},e.getToggleGroupingHandler=()=>{const t=e.getCanGroup();return()=>{t&&e.toggleGrouping()}},e.getAutoAggregationFn=()=>{const t=n.getCoreRowModel().flatRows[0],i=t==null?void 0:t.getValue(e.id);if(typeof i=="number")return ta.sum;if(Object.prototype.toString.call(i)==="[object Date]")return ta.extent},e.getAggregationFn=()=>{var t,i;if(!e)throw new Error;return Gi(e.columnDef.aggregationFn)?e.columnDef.aggregationFn:e.columnDef.aggregationFn==="auto"?e.getAutoAggregationFn():(t=(i=n.options.aggregationFns)==null?void 0:i[e.columnDef.aggregationFn])!=null?t:ta[e.columnDef.aggregationFn]}},createTable:e=>{e.setGrouping=n=>e.options.onGroupingChange==null?void 0:e.options.onGroupingChange(n),e.resetGrouping=n=>{var t,i;e.setGrouping(n?[]:(t=(i=e.initialState)==null?void 0:i.grouping)!=null?t:[])},e.getPreGroupedRowModel=()=>e.getFilteredRowModel(),e.getGroupedRowModel=()=>(!e._getGroupedRowModel&&e.options.getGroupedRowModel&&(e._getGroupedRowModel=e.options.getGroupedRowModel(e)),e.options.manualGrouping||!e._getGroupedRowModel?e.getPreGroupedRowModel():e._getGroupedRowModel())},createRow:(e,n)=>{e.getIsGrouped=()=>!!e.groupingColumnId,e.getGroupingValue=t=>{if(e._groupingValuesCache.hasOwnProperty(t))return e._groupingValuesCache[t];const i=n.getColumn(t);return i!=null&&i.columnDef.getGroupingValue?(e._groupingValuesCache[t]=i.columnDef.getGroupingValue(e.original),e._groupingValuesCache[t]):e.getValue(t)},e._groupingValuesCache={}},createCell:(e,n,t,i)=>{e.getIsGrouped=()=>n.getIsGrouped()&&n.id===t.groupingColumnId,e.getIsPlaceholder=()=>!e.getIsGrouped()&&n.getIsGrouped(),e.getIsAggregated=()=>{var a;return!e.getIsGrouped()&&!e.getIsPlaceholder()&&!!((a=t.subRows)!=null&&a.length)}}};function Tl(e,n,t){if(!(n!=null&&n.length)||!t)return e;const i=e.filter(r=>!n.includes(r.id));return t==="remove"?i:[...n.map(r=>e.find(o=>o.id===r)).filter(Boolean),...i]}const Il={getInitialState:e=>({columnOrder:[],...e}),getDefaultOptions:e=>({onColumnOrderChange:it("columnOrder",e)}),createColumn:(e,n)=>{e.getIndex=X(t=>[jn(n,t)],t=>t.findIndex(i=>i.id===e.id),K(n.options,"debugColumns")),e.getIsFirstColumn=t=>{var i;return((i=jn(n,t)[0])==null?void 0:i.id)===e.id},e.getIsLastColumn=t=>{var i;const a=jn(n,t);return((i=a[a.length-1])==null?void 0:i.id)===e.id}},createTable:e=>{e.setColumnOrder=n=>e.options.onColumnOrderChange==null?void 0:e.options.onColumnOrderChange(n),e.resetColumnOrder=n=>{var t;e.setColumnOrder(n?[]:(t=e.initialState.columnOrder)!=null?t:[])},e._getOrderColumnsFn=X(()=>[e.getState().columnOrder,e.getState().grouping,e.options.groupedColumnMode],(n,t,i)=>a=>{let r=[];if(!(n!=null&&n.length))r=a;else{const o=[...n],u=[...a];for(;u.length&&o.length;){const s=o.shift(),c=u.findIndex(l=>l.id===s);c>-1&&r.push(u.splice(c,1)[0])}r=[...r,...u]}return Tl(r,t,i)},K(e.options,"debugTable"))}},Ea=0,Sa=10,na=()=>({pageIndex:Ea,pageSize:Sa}),Ml={getInitialState:e=>({...e,pagination:{...na(),...e==null?void 0:e.pagination}}),getDefaultOptions:e=>({onPaginationChange:it("pagination",e)}),createTable:e=>{let n=!1,t=!1;e._autoResetPageIndex=()=>{var i,a;if(!n){e._queue(()=>{n=!0});return}if((i=(a=e.options.autoResetAll)!=null?a:e.options.autoResetPageIndex)!=null?i:!e.options.manualPagination){if(t)return;t=!0,e._queue(()=>{e.resetPageIndex(),t=!1})}},e.setPagination=i=>{const a=r=>Jt(i,r);return e.options.onPaginationChange==null?void 0:e.options.onPaginationChange(a)},e.resetPagination=i=>{var a;e.setPagination(i?na():(a=e.initialState.pagination)!=null?a:na())},e.setPageIndex=i=>{e.setPagination(a=>{let r=Jt(i,a.pageIndex);const o=typeof e.options.pageCount>"u"||e.options.pageCount===-1?Number.MAX_SAFE_INTEGER:e.options.pageCount-1;return r=Math.max(0,Math.min(r,o)),{...a,pageIndex:r}})},e.resetPageIndex=i=>{var a,r;e.setPageIndex(i?Ea:(a=(r=e.initialState)==null||(r=r.pagination)==null?void 0:r.pageIndex)!=null?a:Ea)},e.resetPageSize=i=>{var a,r;e.setPageSize(i?Sa:(a=(r=e.initialState)==null||(r=r.pagination)==null?void 0:r.pageSize)!=null?a:Sa)},e.setPageSize=i=>{e.setPagination(a=>{const r=Math.max(1,Jt(i,a.pageSize)),o=a.pageSize*a.pageIndex,u=Math.floor(o/r);return{...a,pageIndex:u,pageSize:r}})},e.setPageCount=i=>e.setPagination(a=>{var r;let o=Jt(i,(r=e.options.pageCount)!=null?r:-1);return typeof o=="number"&&(o=Math.max(-1,o)),{...a,pageCount:o}}),e.getPageOptions=X(()=>[e.getPageCount()],i=>{let a=[];return i&&i>0&&(a=[...new Array(i)].fill(null).map((r,o)=>o)),a},K(e.options,"debugTable")),e.getCanPreviousPage=()=>e.getState().pagination.pageIndex>0,e.getCanNextPage=()=>{const{pageIndex:i}=e.getState().pagination,a=e.getPageCount();return a===-1?!0:a===0?!1:i<a-1},e.previousPage=()=>e.setPageIndex(i=>i-1),e.nextPage=()=>e.setPageIndex(i=>i+1),e.getPrePaginationRowModel=()=>e.getExpandedRowModel(),e.getPaginationRowModel=()=>(!e._getPaginationRowModel&&e.options.getPaginationRowModel&&(e._getPaginationRowModel=e.options.getPaginationRowModel(e)),e.options.manualPagination||!e._getPaginationRowModel?e.getPrePaginationRowModel():e._getPaginationRowModel()),e.getPageCount=()=>{var i;return(i=e.options.pageCount)!=null?i:Math.ceil(e.getPrePaginationRowModel().rows.length/e.getState().pagination.pageSize)}}},ia=()=>({left:[],right:[]}),aa=()=>({top:[],bottom:[]}),Pl={getInitialState:e=>({columnPinning:ia(),rowPinning:aa(),...e}),getDefaultOptions:e=>({onColumnPinningChange:it("columnPinning",e),onRowPinningChange:it("rowPinning",e)}),createColumn:(e,n)=>{e.pin=t=>{const i=e.getLeafColumns().map(a=>a.id).filter(Boolean);n.setColumnPinning(a=>{var r,o;if(t==="right"){var u,s;return{left:((u=a==null?void 0:a.left)!=null?u:[]).filter(h=>!(i!=null&&i.includes(h))),right:[...((s=a==null?void 0:a.right)!=null?s:[]).filter(h=>!(i!=null&&i.includes(h))),...i]}}if(t==="left"){var c,l;return{left:[...((c=a==null?void 0:a.left)!=null?c:[]).filter(h=>!(i!=null&&i.includes(h))),...i],right:((l=a==null?void 0:a.right)!=null?l:[]).filter(h=>!(i!=null&&i.includes(h)))}}return{left:((r=a==null?void 0:a.left)!=null?r:[]).filter(h=>!(i!=null&&i.includes(h))),right:((o=a==null?void 0:a.right)!=null?o:[]).filter(h=>!(i!=null&&i.includes(h)))}})},e.getCanPin=()=>e.getLeafColumns().some(i=>{var a,r,o;return((a=i.columnDef.enablePinning)!=null?a:!0)&&((r=(o=n.options.enableColumnPinning)!=null?o:n.options.enablePinning)!=null?r:!0)}),e.getIsPinned=()=>{const t=e.getLeafColumns().map(u=>u.id),{left:i,right:a}=n.getState().columnPinning,r=t.some(u=>i==null?void 0:i.includes(u)),o=t.some(u=>a==null?void 0:a.includes(u));return r?"left":o?"right":!1},e.getPinnedIndex=()=>{var t,i;const a=e.getIsPinned();return a?(t=(i=n.getState().columnPinning)==null||(i=i[a])==null?void 0:i.indexOf(e.id))!=null?t:-1:0}},createRow:(e,n)=>{e.pin=(t,i,a)=>{const r=i?e.getLeafRows().map(s=>{let{id:c}=s;return c}):[],o=a?e.getParentRows().map(s=>{let{id:c}=s;return c}):[],u=new Set([...o,e.id,...r]);n.setRowPinning(s=>{var c,l;if(t==="bottom"){var h,b;return{top:((h=s==null?void 0:s.top)!=null?h:[]).filter(C=>!(u!=null&&u.has(C))),bottom:[...((b=s==null?void 0:s.bottom)!=null?b:[]).filter(C=>!(u!=null&&u.has(C))),...Array.from(u)]}}if(t==="top"){var g,E;return{top:[...((g=s==null?void 0:s.top)!=null?g:[]).filter(C=>!(u!=null&&u.has(C))),...Array.from(u)],bottom:((E=s==null?void 0:s.bottom)!=null?E:[]).filter(C=>!(u!=null&&u.has(C)))}}return{top:((c=s==null?void 0:s.top)!=null?c:[]).filter(C=>!(u!=null&&u.has(C))),bottom:((l=s==null?void 0:s.bottom)!=null?l:[]).filter(C=>!(u!=null&&u.has(C)))}})},e.getCanPin=()=>{var t;const{enableRowPinning:i,enablePinning:a}=n.options;return typeof i=="function"?i(e):(t=i??a)!=null?t:!0},e.getIsPinned=()=>{const t=[e.id],{top:i,bottom:a}=n.getState().rowPinning,r=t.some(u=>i==null?void 0:i.includes(u)),o=t.some(u=>a==null?void 0:a.includes(u));return r?"top":o?"bottom":!1},e.getPinnedIndex=()=>{var t,i;const a=e.getIsPinned();if(!a)return-1;const r=(t=n._getPinnedRows(a))==null?void 0:t.map(o=>{let{id:u}=o;return u});return(i=r==null?void 0:r.indexOf(e.id))!=null?i:-1},e.getCenterVisibleCells=X(()=>[e._getAllVisibleCells(),n.getState().columnPinning.left,n.getState().columnPinning.right],(t,i,a)=>{const r=[...i??[],...a??[]];return t.filter(o=>!r.includes(o.column.id))},K(n.options,"debugRows")),e.getLeftVisibleCells=X(()=>[e._getAllVisibleCells(),n.getState().columnPinning.left,,],(t,i)=>(i??[]).map(r=>t.find(o=>o.column.id===r)).filter(Boolean).map(r=>({...r,position:"left"})),K(n.options,"debugRows")),e.getRightVisibleCells=X(()=>[e._getAllVisibleCells(),n.getState().columnPinning.right],(t,i)=>(i??[]).map(r=>t.find(o=>o.column.id===r)).filter(Boolean).map(r=>({...r,position:"right"})),K(n.options,"debugRows"))},createTable:e=>{e.setColumnPinning=n=>e.options.onColumnPinningChange==null?void 0:e.options.onColumnPinningChange(n),e.resetColumnPinning=n=>{var t,i;return e.setColumnPinning(n?ia():(t=(i=e.initialState)==null?void 0:i.columnPinning)!=null?t:ia())},e.getIsSomeColumnsPinned=n=>{var t;const i=e.getState().columnPinning;if(!n){var a,r;return!!((a=i.left)!=null&&a.length||(r=i.right)!=null&&r.length)}return!!((t=i[n])!=null&&t.length)},e.getLeftLeafColumns=X(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left],(n,t)=>(t??[]).map(i=>n.find(a=>a.id===i)).filter(Boolean),K(e.options,"debugColumns")),e.getRightLeafColumns=X(()=>[e.getAllLeafColumns(),e.getState().columnPinning.right],(n,t)=>(t??[]).map(i=>n.find(a=>a.id===i)).filter(Boolean),K(e.options,"debugColumns")),e.getCenterLeafColumns=X(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(n,t,i)=>{const a=[...t??[],...i??[]];return n.filter(r=>!a.includes(r.id))},K(e.options,"debugColumns")),e.setRowPinning=n=>e.options.onRowPinningChange==null?void 0:e.options.onRowPinningChange(n),e.resetRowPinning=n=>{var t,i;return e.setRowPinning(n?aa():(t=(i=e.initialState)==null?void 0:i.rowPinning)!=null?t:aa())},e.getIsSomeRowsPinned=n=>{var t;const i=e.getState().rowPinning;if(!n){var a,r;return!!((a=i.top)!=null&&a.length||(r=i.bottom)!=null&&r.length)}return!!((t=i[n])!=null&&t.length)},e._getPinnedRows=X(n=>[e.getRowModel().rows,e.getState().rowPinning[n],n],(n,t,i)=>{var a;return((a=e.options.keepPinnedRows)==null||a?(t??[]).map(o=>{const u=e.getRow(o,!0);return u.getIsAllParentsExpanded()?u:null}):(t??[]).map(o=>n.find(u=>u.id===o))).filter(Boolean).map(o=>({...o,position:i}))},K(e.options,"debugRows")),e.getTopRows=()=>e._getPinnedRows("top"),e.getBottomRows=()=>e._getPinnedRows("bottom"),e.getCenterRows=X(()=>[e.getRowModel().rows,e.getState().rowPinning.top,e.getState().rowPinning.bottom],(n,t,i)=>{const a=new Set([...t??[],...i??[]]);return n.filter(r=>!a.has(r.id))},K(e.options,"debugRows"))}},Bl={getInitialState:e=>({rowSelection:{},...e}),getDefaultOptions:e=>({onRowSelectionChange:it("rowSelection",e),enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!0}),createTable:e=>{e.setRowSelection=n=>e.options.onRowSelectionChange==null?void 0:e.options.onRowSelectionChange(n),e.resetRowSelection=n=>{var t;return e.setRowSelection(n?{}:(t=e.initialState.rowSelection)!=null?t:{})},e.toggleAllRowsSelected=n=>{e.setRowSelection(t=>{n=typeof n<"u"?n:!e.getIsAllRowsSelected();const i={...t},a=e.getPreGroupedRowModel().flatRows;return n?a.forEach(r=>{r.getCanSelect()&&(i[r.id]=!0)}):a.forEach(r=>{delete i[r.id]}),i})},e.toggleAllPageRowsSelected=n=>e.setRowSelection(t=>{const i=typeof n<"u"?n:!e.getIsAllPageRowsSelected(),a={...t};return e.getRowModel().rows.forEach(r=>{wa(a,r.id,i,!0,e)}),a}),e.getPreSelectedRowModel=()=>e.getCoreRowModel(),e.getSelectedRowModel=X(()=>[e.getState().rowSelection,e.getCoreRowModel()],(n,t)=>Object.keys(n).length?ra(e,t):{rows:[],flatRows:[],rowsById:{}},K(e.options,"debugTable")),e.getFilteredSelectedRowModel=X(()=>[e.getState().rowSelection,e.getFilteredRowModel()],(n,t)=>Object.keys(n).length?ra(e,t):{rows:[],flatRows:[],rowsById:{}},K(e.options,"debugTable")),e.getGroupedSelectedRowModel=X(()=>[e.getState().rowSelection,e.getSortedRowModel()],(n,t)=>Object.keys(n).length?ra(e,t):{rows:[],flatRows:[],rowsById:{}},K(e.options,"debugTable")),e.getIsAllRowsSelected=()=>{const n=e.getFilteredRowModel().flatRows,{rowSelection:t}=e.getState();let i=!!(n.length&&Object.keys(t).length);return i&&n.some(a=>a.getCanSelect()&&!t[a.id])&&(i=!1),i},e.getIsAllPageRowsSelected=()=>{const n=e.getPaginationRowModel().flatRows.filter(a=>a.getCanSelect()),{rowSelection:t}=e.getState();let i=!!n.length;return i&&n.some(a=>!t[a.id])&&(i=!1),i},e.getIsSomeRowsSelected=()=>{var n;const t=Object.keys((n=e.getState().rowSelection)!=null?n:{}).length;return t>0&&t<e.getFilteredRowModel().flatRows.length},e.getIsSomePageRowsSelected=()=>{const n=e.getPaginationRowModel().flatRows;return e.getIsAllPageRowsSelected()?!1:n.filter(t=>t.getCanSelect()).some(t=>t.getIsSelected()||t.getIsSomeSelected())},e.getToggleAllRowsSelectedHandler=()=>n=>{e.toggleAllRowsSelected(n.target.checked)},e.getToggleAllPageRowsSelectedHandler=()=>n=>{e.toggleAllPageRowsSelected(n.target.checked)}},createRow:(e,n)=>{e.toggleSelected=(t,i)=>{const a=e.getIsSelected();n.setRowSelection(r=>{var o;if(t=typeof t<"u"?t:!a,e.getCanSelect()&&a===t)return r;const u={...r};return wa(u,e.id,t,(o=i==null?void 0:i.selectChildren)!=null?o:!0,n),u})},e.getIsSelected=()=>{const{rowSelection:t}=n.getState();return ar(e,t)},e.getIsSomeSelected=()=>{const{rowSelection:t}=n.getState();return xa(e,t)==="some"},e.getIsAllSubRowsSelected=()=>{const{rowSelection:t}=n.getState();return xa(e,t)==="all"},e.getCanSelect=()=>{var t;return typeof n.options.enableRowSelection=="function"?n.options.enableRowSelection(e):(t=n.options.enableRowSelection)!=null?t:!0},e.getCanSelectSubRows=()=>{var t;return typeof n.options.enableSubRowSelection=="function"?n.options.enableSubRowSelection(e):(t=n.options.enableSubRowSelection)!=null?t:!0},e.getCanMultiSelect=()=>{var t;return typeof n.options.enableMultiRowSelection=="function"?n.options.enableMultiRowSelection(e):(t=n.options.enableMultiRowSelection)!=null?t:!0},e.getToggleSelectedHandler=()=>{const t=e.getCanSelect();return i=>{var a;t&&e.toggleSelected((a=i.target)==null?void 0:a.checked)}}}},wa=(e,n,t,i,a)=>{var r;const o=a.getRow(n,!0);t?(o.getCanMultiSelect()||Object.keys(e).forEach(u=>delete e[u]),o.getCanSelect()&&(e[n]=!0)):delete e[n],i&&(r=o.subRows)!=null&&r.length&&o.getCanSelectSubRows()&&o.subRows.forEach(u=>wa(e,u.id,t,i,a))};function ra(e,n){const t=e.getState().rowSelection,i=[],a={},r=function(o,u){return o.map(s=>{var c;const l=ar(s,t);if(l&&(i.push(s),a[s.id]=s),(c=s.subRows)!=null&&c.length&&(s={...s,subRows:r(s.subRows)}),l)return s}).filter(Boolean)};return{rows:r(n.rows),flatRows:i,rowsById:a}}function ar(e,n){var t;return(t=n[e.id])!=null?t:!1}function xa(e,n,t){var i;if(!((i=e.subRows)!=null&&i.length))return!1;let a=!0,r=!1;return e.subRows.forEach(o=>{if(!(r&&!a)&&(o.getCanSelect()&&(ar(o,n)?r=!0:a=!1),o.subRows&&o.subRows.length)){const u=xa(o,n);u==="all"?r=!0:(u==="some"&&(r=!0),a=!1)}}),a?"all":r?"some":!1}const Aa=/([0-9]+)/gm,Vl=(e,n,t)=>iu(en(e.getValue(t)).toLowerCase(),en(n.getValue(t)).toLowerCase()),zl=(e,n,t)=>iu(en(e.getValue(t)),en(n.getValue(t))),$l=(e,n,t)=>rr(en(e.getValue(t)).toLowerCase(),en(n.getValue(t)).toLowerCase()),jl=(e,n,t)=>rr(en(e.getValue(t)),en(n.getValue(t))),Ul=(e,n,t)=>{const i=e.getValue(t),a=n.getValue(t);return i>a?1:i<a?-1:0},ql=(e,n,t)=>rr(e.getValue(t),n.getValue(t));function rr(e,n){return e===n?0:e>n?1:-1}function en(e){return typeof e=="number"?isNaN(e)||e===1/0||e===-1/0?"":String(e):typeof e=="string"?e:""}function iu(e,n){const t=e.split(Aa).filter(Boolean),i=n.split(Aa).filter(Boolean);for(;t.length&&i.length;){const a=t.shift(),r=i.shift(),o=parseInt(a,10),u=parseInt(r,10),s=[o,u].sort();if(isNaN(s[0])){if(a>r)return 1;if(r>a)return-1;continue}if(isNaN(s[1]))return isNaN(o)?-1:1;if(o>u)return 1;if(u>o)return-1}return t.length-i.length}const Tn={alphanumeric:Vl,alphanumericCaseSensitive:zl,text:$l,textCaseSensitive:jl,datetime:Ul,basic:ql},Wl={getInitialState:e=>({sorting:[],...e}),getDefaultColumnDef:()=>({sortingFn:"auto",sortUndefined:1}),getDefaultOptions:e=>({onSortingChange:it("sorting",e),isMultiSortEvent:n=>n.shiftKey}),createColumn:(e,n)=>{e.getAutoSortingFn=()=>{const t=n.getFilteredRowModel().flatRows.slice(10);let i=!1;for(const a of t){const r=a==null?void 0:a.getValue(e.id);if(Object.prototype.toString.call(r)==="[object Date]")return Tn.datetime;if(typeof r=="string"&&(i=!0,r.split(Aa).length>1))return Tn.alphanumeric}return i?Tn.text:Tn.basic},e.getAutoSortDir=()=>{const t=n.getFilteredRowModel().flatRows[0];return typeof(t==null?void 0:t.getValue(e.id))=="string"?"asc":"desc"},e.getSortingFn=()=>{var t,i;if(!e)throw new Error;return Gi(e.columnDef.sortingFn)?e.columnDef.sortingFn:e.columnDef.sortingFn==="auto"?e.getAutoSortingFn():(t=(i=n.options.sortingFns)==null?void 0:i[e.columnDef.sortingFn])!=null?t:Tn[e.columnDef.sortingFn]},e.toggleSorting=(t,i)=>{const a=e.getNextSortingOrder(),r=typeof t<"u"&&t!==null;n.setSorting(o=>{const u=o==null?void 0:o.find(g=>g.id===e.id),s=o==null?void 0:o.findIndex(g=>g.id===e.id);let c=[],l,h=r?t:a==="desc";if(o!=null&&o.length&&e.getCanMultiSort()&&i?u?l="toggle":l="add":o!=null&&o.length&&s!==o.length-1?l="replace":u?l="toggle":l="replace",l==="toggle"&&(r||a||(l="remove")),l==="add"){var b;c=[...o,{id:e.id,desc:h}],c.splice(0,c.length-((b=n.options.maxMultiSortColCount)!=null?b:Number.MAX_SAFE_INTEGER))}else l==="toggle"?c=o.map(g=>g.id===e.id?{...g,desc:h}:g):l==="remove"?c=o.filter(g=>g.id!==e.id):c=[{id:e.id,desc:h}];return c})},e.getFirstSortDir=()=>{var t,i;return((t=(i=e.columnDef.sortDescFirst)!=null?i:n.options.sortDescFirst)!=null?t:e.getAutoSortDir()==="desc")?"desc":"asc"},e.getNextSortingOrder=t=>{var i,a;const r=e.getFirstSortDir(),o=e.getIsSorted();return o?o!==r&&((i=n.options.enableSortingRemoval)==null||i)&&(!(t&&(a=n.options.enableMultiRemove)!=null)||a)?!1:o==="desc"?"asc":"desc":r},e.getCanSort=()=>{var t,i;return((t=e.columnDef.enableSorting)!=null?t:!0)&&((i=n.options.enableSorting)!=null?i:!0)&&!!e.accessorFn},e.getCanMultiSort=()=>{var t,i;return(t=(i=e.columnDef.enableMultiSort)!=null?i:n.options.enableMultiSort)!=null?t:!!e.accessorFn},e.getIsSorted=()=>{var t;const i=(t=n.getState().sorting)==null?void 0:t.find(a=>a.id===e.id);return i?i.desc?"desc":"asc":!1},e.getSortIndex=()=>{var t,i;return(t=(i=n.getState().sorting)==null?void 0:i.findIndex(a=>a.id===e.id))!=null?t:-1},e.clearSorting=()=>{n.setSorting(t=>t!=null&&t.length?t.filter(i=>i.id!==e.id):[])},e.getToggleSortingHandler=()=>{const t=e.getCanSort();return i=>{t&&(i.persist==null||i.persist(),e.toggleSorting==null||e.toggleSorting(void 0,e.getCanMultiSort()?n.options.isMultiSortEvent==null?void 0:n.options.isMultiSortEvent(i):!1))}}},createTable:e=>{e.setSorting=n=>e.options.onSortingChange==null?void 0:e.options.onSortingChange(n),e.resetSorting=n=>{var t,i;e.setSorting(n?[]:(t=(i=e.initialState)==null?void 0:i.sorting)!=null?t:[])},e.getPreSortedRowModel=()=>e.getGroupedRowModel(),e.getSortedRowModel=()=>(!e._getSortedRowModel&&e.options.getSortedRowModel&&(e._getSortedRowModel=e.options.getSortedRowModel(e)),e.options.manualSorting||!e._getSortedRowModel?e.getPreSortedRowModel():e._getSortedRowModel())}},Xl={getInitialState:e=>({columnVisibility:{},...e}),getDefaultOptions:e=>({onColumnVisibilityChange:it("columnVisibility",e)}),createColumn:(e,n)=>{e.toggleVisibility=t=>{e.getCanHide()&&n.setColumnVisibility(i=>({...i,[e.id]:t??!e.getIsVisible()}))},e.getIsVisible=()=>{var t,i;return(t=(i=n.getState().columnVisibility)==null?void 0:i[e.id])!=null?t:!0},e.getCanHide=()=>{var t,i;return((t=e.columnDef.enableHiding)!=null?t:!0)&&((i=n.options.enableHiding)!=null?i:!0)},e.getToggleVisibilityHandler=()=>t=>{e.toggleVisibility==null||e.toggleVisibility(t.target.checked)}},createRow:(e,n)=>{e._getAllVisibleCells=X(()=>[e.getAllCells(),n.getState().columnVisibility],t=>t.filter(i=>i.column.getIsVisible()),K(n.options,"debugRows")),e.getVisibleCells=X(()=>[e.getLeftVisibleCells(),e.getCenterVisibleCells(),e.getRightVisibleCells()],(t,i,a)=>[...t,...i,...a],K(n.options,"debugRows"))},createTable:e=>{const n=(t,i)=>X(()=>[i(),i().filter(a=>a.getIsVisible()).map(a=>a.id).join("_")],a=>a.filter(r=>r.getIsVisible==null?void 0:r.getIsVisible()),K(e.options,"debugColumns"));e.getVisibleFlatColumns=n("getVisibleFlatColumns",()=>e.getAllFlatColumns()),e.getVisibleLeafColumns=n("getVisibleLeafColumns",()=>e.getAllLeafColumns()),e.getLeftVisibleLeafColumns=n("getLeftVisibleLeafColumns",()=>e.getLeftLeafColumns()),e.getRightVisibleLeafColumns=n("getRightVisibleLeafColumns",()=>e.getRightLeafColumns()),e.getCenterVisibleLeafColumns=n("getCenterVisibleLeafColumns",()=>e.getCenterLeafColumns()),e.setColumnVisibility=t=>e.options.onColumnVisibilityChange==null?void 0:e.options.onColumnVisibilityChange(t),e.resetColumnVisibility=t=>{var i;e.setColumnVisibility(t?{}:(i=e.initialState.columnVisibility)!=null?i:{})},e.toggleAllColumnsVisible=t=>{var i;t=(i=t)!=null?i:!e.getIsAllColumnsVisible(),e.setColumnVisibility(e.getAllLeafColumns().reduce((a,r)=>({...a,[r.id]:t||!(r.getCanHide!=null&&r.getCanHide())}),{}))},e.getIsAllColumnsVisible=()=>!e.getAllLeafColumns().some(t=>!(t.getIsVisible!=null&&t.getIsVisible())),e.getIsSomeColumnsVisible=()=>e.getAllLeafColumns().some(t=>t.getIsVisible==null?void 0:t.getIsVisible()),e.getToggleAllColumnsVisibilityHandler=()=>t=>{var i;e.toggleAllColumnsVisible((i=t.target)==null?void 0:i.checked)}}};function jn(e,n){return n?n==="center"?e.getCenterVisibleLeafColumns():n==="left"?e.getLeftVisibleLeafColumns():e.getRightVisibleLeafColumns():e.getVisibleLeafColumns()}const Hr=[yl,Xl,Il,Pl,xl,Wl,Hl,wl,Ml,Bl,El];function Kl(e){var n;(e.debugAll||e.debugTable)&&console.info("Creating Table Instance...");let t={_features:Hr};const i=t._features.reduce((l,h)=>Object.assign(l,h.getDefaultOptions==null?void 0:h.getDefaultOptions(t)),{}),a=l=>t.options.mergeOptions?t.options.mergeOptions(i,l):{...i,...l};let o={...{},...(n=e.initialState)!=null?n:{}};t._features.forEach(l=>{var h;o=(h=l.getInitialState==null?void 0:l.getInitialState(o))!=null?h:o});const u=[];let s=!1;const c={_features:Hr,options:{...i,...e},initialState:o,_queue:l=>{u.push(l),s||(s=!0,Promise.resolve().then(()=>{for(;u.length;)u.shift()();s=!1}).catch(h=>setTimeout(()=>{throw h})))},reset:()=>{t.setState(t.initialState)},setOptions:l=>{const h=Jt(l,t.options);t.options=a(h)},getState:()=>t.options.state,setState:l=>{t.options.onStateChange==null||t.options.onStateChange(l)},_getRowId:(l,h,b)=>{var g;return(g=t.options.getRowId==null?void 0:t.options.getRowId(l,h,b))!=null?g:`${b?[b.id,h].join("."):h}`},getCoreRowModel:()=>(t._getCoreRowModel||(t._getCoreRowModel=t.options.getCoreRowModel(t)),t._getCoreRowModel()),getRowModel:()=>t.getPaginationRowModel(),getRow:(l,h)=>{let b=(h?t.getPrePaginationRowModel():t.getRowModel()).rowsById[l];if(!b&&(b=t.getCoreRowModel().rowsById[l],!b))throw new Error;return b},_getDefaultColumnDef:X(()=>[t.options.defaultColumn],l=>{var h;return l=(h=l)!=null?h:{},{header:b=>{const g=b.header.column.columnDef;return g.accessorKey?g.accessorKey:g.accessorFn?g.id:null},cell:b=>{var g,E;return(g=(E=b.renderValue())==null||E.toString==null?void 0:E.toString())!=null?g:null},...t._features.reduce((b,g)=>Object.assign(b,g.getDefaultColumnDef==null?void 0:g.getDefaultColumnDef()),{}),...l}},K(e,"debugColumns")),_getColumnDefs:()=>t.options.columns,getAllColumns:X(()=>[t._getColumnDefs()],l=>{const h=function(b,g,E){return E===void 0&&(E=0),b.map(C=>{const w=Cl(t,C,E,g),S=C;return w.columns=S.columns?h(S.columns,w,E+1):[],w})};return h(l)},K(e,"debugColumns")),getAllFlatColumns:X(()=>[t.getAllColumns()],l=>l.flatMap(h=>h.getFlatColumns()),K(e,"debugColumns")),_getAllFlatColumnsById:X(()=>[t.getAllFlatColumns()],l=>l.reduce((h,b)=>(h[b.id]=b,h),{}),K(e,"debugColumns")),getAllLeafColumns:X(()=>[t.getAllColumns(),t._getOrderColumnsFn()],(l,h)=>{let b=l.flatMap(g=>g.getLeafColumns());return h(b)},K(e,"debugColumns")),getColumn:l=>t._getAllFlatColumnsById()[l]};Object.assign(t,c);for(let l=0;l<t._features.length;l++){const h=t._features[l];h==null||h.createTable==null||h.createTable(t)}return t}function Yl(e,n,t,i){const a=()=>{var o;return(o=r.getValue())!=null?o:e.options.renderFallbackValue},r={id:`${n.id}_${t.id}`,row:n,column:t,getValue:()=>n.getValue(i),renderValue:a,getContext:X(()=>[e,t,n,r],(o,u,s,c)=>({table:o,column:u,row:s,cell:c,getValue:c.getValue,renderValue:c.renderValue}),K(e.options,"debugCells"))};return e._features.forEach(o=>{o.createCell==null||o.createCell(r,t,n,e)},{}),r}const or=(e,n,t,i,a,r,o)=>{let u={id:n,index:i,original:t,depth:a,parentId:o,_valuesCache:{},_uniqueValuesCache:{},getValue:s=>{if(u._valuesCache.hasOwnProperty(s))return u._valuesCache[s];const c=e.getColumn(s);if(c!=null&&c.accessorFn)return u._valuesCache[s]=c.accessorFn(u.original,i),u._valuesCache[s]},getUniqueValues:s=>{if(u._uniqueValuesCache.hasOwnProperty(s))return u._uniqueValuesCache[s];const c=e.getColumn(s);if(c!=null&&c.accessorFn)return c.columnDef.getUniqueValues?(u._uniqueValuesCache[s]=c.columnDef.getUniqueValues(u.original,i),u._uniqueValuesCache[s]):(u._uniqueValuesCache[s]=[u.getValue(s)],u._uniqueValuesCache[s])},renderValue:s=>{var c;return(c=u.getValue(s))!=null?c:e.options.renderFallbackValue},subRows:[],getLeafRows:()=>vl(u.subRows,s=>s.subRows),getParentRow:()=>u.parentId?e.getRow(u.parentId,!0):void 0,getParentRows:()=>{let s=[],c=u;for(;;){const l=c.getParentRow();if(!l)break;s.push(l),c=l}return s.reverse()},getAllCells:X(()=>[e.getAllLeafColumns()],s=>s.map(c=>Yl(e,u,c,c.id)),K(e.options,"debugRows")),_getAllCellsByColumnId:X(()=>[u.getAllCells()],s=>s.reduce((c,l)=>(c[l.column.id]=l,c),{}),K(e.options,"debugRows"))};for(let s=0;s<e._features.length;s++){const c=e._features[s];c==null||c.createRow==null||c.createRow(u,e)}return u};function au(){return e=>X(()=>[e.options.data],n=>{const t={rows:[],flatRows:[],rowsById:{}},i=function(a,r,o){r===void 0&&(r=0);const u=[];for(let c=0;c<a.length;c++){const l=or(e,e._getRowId(a[c],c,o),a[c],c,r,void 0,o==null?void 0:o.id);if(t.flatRows.push(l),t.rowsById[l.id]=l,u.push(l),e.options.getSubRows){var s;l.originalSubRows=e.options.getSubRows(a[c],c),(s=l.originalSubRows)!=null&&s.length&&(l.subRows=i(l.originalSubRows,r+1,l))}}return u};return t.rows=i(n),t},K(e.options,"debugTable","getRowModel",()=>e._autoResetPageIndex()))}function Jl(e,n,t){return t.options.filterFromLeafRows?Zl(e,n,t):Ql(e,n,t)}function Zl(e,n,t){var i;const a=[],r={},o=(i=t.options.maxLeafRowFilterDepth)!=null?i:100,u=function(s,c){c===void 0&&(c=0);const l=[];for(let b=0;b<s.length;b++){var h;let g=s[b];const E=or(t,g.id,g.original,g.index,g.depth,void 0,g.parentId);if(E.columnFilters=g.columnFilters,(h=g.subRows)!=null&&h.length&&c<o){if(E.subRows=u(g.subRows,c+1),g=E,n(g)&&!E.subRows.length){l.push(g),r[g.id]=g,a.push(g);continue}if(n(g)||E.subRows.length){l.push(g),r[g.id]=g,a.push(g);continue}}else g=E,n(g)&&(l.push(g),r[g.id]=g,a.push(g))}return l};return{rows:u(e),flatRows:a,rowsById:r}}function Ql(e,n,t){var i;const a=[],r={},o=(i=t.options.maxLeafRowFilterDepth)!=null?i:100,u=function(s,c){c===void 0&&(c=0);const l=[];for(let b=0;b<s.length;b++){let g=s[b];if(n(g)){var h;if((h=g.subRows)!=null&&h.length&&c<o){const C=or(t,g.id,g.original,g.index,g.depth,void 0,g.parentId);C.subRows=u(g.subRows,c+1),g=C}l.push(g),a.push(g),r[g.id]=g}}return l};return{rows:u(e),flatRows:a,rowsById:r}}function e0(){return e=>X(()=>[e.getPreFilteredRowModel(),e.getState().columnFilters,e.getState().globalFilter],(n,t,i)=>{if(!n.rows.length||!(t!=null&&t.length)&&!i){for(let b=0;b<n.flatRows.length;b++)n.flatRows[b].columnFilters={},n.flatRows[b].columnFiltersMeta={};return n}const a=[],r=[];(t??[]).forEach(b=>{var g;const E=e.getColumn(b.id);if(!E)return;const C=E.getFilterFn();C&&a.push({id:b.id,filterFn:C,resolvedValue:(g=C.resolveFilterValue==null?void 0:C.resolveFilterValue(b.value))!=null?g:b.value})});const o=t.map(b=>b.id),u=e.getGlobalFilterFn(),s=e.getAllLeafColumns().filter(b=>b.getCanGlobalFilter());i&&u&&s.length&&(o.push("__global__"),s.forEach(b=>{var g;r.push({id:b.id,filterFn:u,resolvedValue:(g=u.resolveFilterValue==null?void 0:u.resolveFilterValue(i))!=null?g:i})}));let c,l;for(let b=0;b<n.flatRows.length;b++){const g=n.flatRows[b];if(g.columnFilters={},a.length)for(let E=0;E<a.length;E++){c=a[E];const C=c.id;g.columnFilters[C]=c.filterFn(g,C,c.resolvedValue,w=>{g.columnFiltersMeta[C]=w})}if(r.length){for(let E=0;E<r.length;E++){l=r[E];const C=l.id;if(l.filterFn(g,C,l.resolvedValue,w=>{g.columnFiltersMeta[C]=w})){g.columnFilters.__global__=!0;break}}g.columnFilters.__global__!==!0&&(g.columnFilters.__global__=!1)}}const h=b=>{for(let g=0;g<o.length;g++)if(b.columnFilters[o[g]]===!1)return!1;return!0};return Jl(n.rows,h,e)},K(e.options,"debugTable","getFilteredRowModel",()=>e._autoResetPageIndex()))}function t0(){return e=>X(()=>[e.getState().sorting,e.getPreSortedRowModel()],(n,t)=>{if(!t.rows.length||!(n!=null&&n.length))return t;const i=e.getState().sorting,a=[],r=i.filter(s=>{var c;return(c=e.getColumn(s.id))==null?void 0:c.getCanSort()}),o={};r.forEach(s=>{const c=e.getColumn(s.id);c&&(o[s.id]={sortUndefined:c.columnDef.sortUndefined,invertSorting:c.columnDef.invertSorting,sortingFn:c.getSortingFn()})});const u=s=>{const c=s.map(l=>({...l}));return c.sort((l,h)=>{for(let g=0;g<r.length;g+=1){var b;const E=r[g],C=o[E.id],w=(b=E==null?void 0:E.desc)!=null?b:!1;let S=0;if(C.sortUndefined){const F=l.getValue(E.id),D=h.getValue(E.id),P=F===void 0,R=D===void 0;(P||R)&&(S=P&&R?0:P?C.sortUndefined:-C.sortUndefined)}if(S===0&&(S=C.sortingFn(l,h,E.id)),S!==0)return w&&(S*=-1),C.invertSorting&&(S*=-1),S}return l.index-h.index}),c.forEach(l=>{var h;a.push(l),(h=l.subRows)!=null&&h.length&&(l.subRows=u(l.subRows))}),c};return{rows:u(t.rows),flatRows:a,rowsById:t.rowsById}},K(e.options,"debugTable","getSortedRowModel",()=>e._autoResetPageIndex()))}function n0(){return e=>X(()=>[e.getState().expanded,e.getPreExpandedRowModel(),e.options.paginateExpandedRows],(n,t,i)=>!t.rows.length||n!==!0&&!Object.keys(n??{}).length||!i?t:ru(t),K(e.options,"debugTable"))}function ru(e){const n=[],t=i=>{var a;n.push(i),(a=i.subRows)!=null&&a.length&&i.getIsExpanded()&&i.subRows.forEach(t)};return e.rows.forEach(t),{rows:n,flatRows:e.flatRows,rowsById:e.rowsById}}function i0(e){return n=>X(()=>[n.getState().pagination,n.getPrePaginationRowModel(),n.options.paginateExpandedRows?void 0:n.getState().expanded],(t,i)=>{if(!i.rows.length)return i;const{pageSize:a,pageIndex:r}=t;let{rows:o,flatRows:u,rowsById:s}=i;const c=a*r,l=c+a;o=o.slice(c,l);let h;n.options.paginateExpandedRows?h={rows:o,flatRows:u,rowsById:s}:h=ru({rows:o,flatRows:u,rowsById:s}),h.flatRows=[];const b=g=>{h.flatRows.push(g),g.subRows.length&&g.subRows.forEach(b)};return h.rows.forEach(b),h},K(n.options,"debugTable"))}/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function _a(e,n){return e?a0(e)?y.createElement(e,n):e:null}function a0(e){return r0(e)||typeof e=="function"||o0(e)}function r0(e){return typeof e=="function"&&(()=>{const n=Object.getPrototypeOf(e);return n.prototype&&n.prototype.isReactComponent})()}function o0(e){return typeof e=="object"&&typeof e.$$typeof=="symbol"&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}function ou(e){const n={state:{},onStateChange:()=>{},renderFallbackValue:null,...e},[t]=y.useState(()=>({current:Kl(n)})),[i,a]=y.useState(()=>t.current.initialState);return t.current.setOptions(r=>({...r,...e,state:{...i,...e.state},onStateChange:o=>{a(o),e.onStateChange==null||e.onStateChange(o)}})),t.current}const Vt={Left:"left",Right:"right"},Re={headerSortIndicator:"table__header__sort-indicator",headerRow:"table__header-row",headerCell:"table__header-cell",bodyRow:"table__body-row",bodyCell:"table__body-cell",pinnedCells:"table__pinned-cells",rowSelect:"table__row-select",tree:{node:"tree__node",chevron:"tree__chevron",checkbox:"tree__checkbox",radio:"tree__radio"},rowActions:{droplistTrigger:"table__body-row__droplistTrigger",droplist:"table__body-row__actions-droplist"},statusIndicator:"table__status-indicator",statusLabel:"table__status-label",toolbar:"table__toolbar"},Oi=10,u0=[],s0=[],c0={};var ui=(e=>(e.Status="snack_predefined_statusColumn",e.Selection="selectionCell",e.RowActions="rowActions",e))(ui||{});const l0=["snack_predefined_statusColumn","selectionCell","rowActions"],uu=y.createContext({updateCellMap:()=>{}}),d0=e=>{const[n,t]=y.useState({}),i=y.useCallback(({columnId:r,size:o,cellId:u})=>{t(s=>({...s,[r]:{...s[r],[u]:o}}))},[]),a=y.useMemo(()=>Object.entries(n).reduce((r,[o,u])=>{const s=Math.max(...Object.values(u));return{...r,[o]:s}},{}),[n]);return y.useEffect(()=>{e.setColumnSizing(r=>({...r,...a}))},[a,e]),{updateCellMap:i}},h0=10,g0=(e,n)=>{const{updateCellMap:t}=y.useContext(uu),i=y.useRef(null);return y.useEffect(()=>{var a;return t({columnId:e,size:(((a=i.current)==null?void 0:a.clientWidth)||0)+h0,cellId:n.id}),()=>{t({columnId:e,size:0,cellId:n.id})}},[e,n,t]),{ref:i}};function ur(e,n,t){const i=e.slice();return i.splice(t<0?i.length+t:t,0,i.splice(n,1)[0]),i}function f0(e,n){return e.reduce((t,i,a)=>{const r=n.get(i);return r&&(t[a]=r),t},Array(e.length))}function fi(e){return e!==null&&e>=0}function p0(e,n){if(e===n)return!0;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function m0(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const pi={scaleX:1,scaleY:1},su=e=>{var n;let{rects:t,activeNodeRect:i,activeIndex:a,overIndex:r,index:o}=e;const u=(n=t[a])!=null?n:i;if(!u)return null;const s=b0(t,o,a);if(o===a){const c=t[r];return c?{x:a<r?c.left+c.width-(u.left+u.width):c.left-u.left,y:0,...pi}:null}return o>a&&o<=r?{x:-u.width-s,y:0,...pi}:o<a&&o>=r?{x:u.width+s,y:0,...pi}:{x:0,y:0,...pi}};function b0(e,n,t){const i=e[n],a=e[n-1],r=e[n+1];return!i||!a&&!r?0:t<n?a?i.left-(a.left+a.width):r.left-(i.left+i.width):r?r.left-(i.left+i.width):i.left-(a.left+a.width)}const cu=e=>{let{rects:n,activeIndex:t,overIndex:i,index:a}=e;const r=ur(n,i,t),o=n[a],u=r[a];return!u||!o?null:{x:u.left-o.left,y:u.top-o.top,scaleX:u.width/o.width,scaleY:u.height/o.height}},lu="Sortable",du=qe.createContext({activeIndex:-1,containerId:lu,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:cu,disabled:{draggable:!1,droppable:!1}});function hu(e){let{children:n,id:t,items:i,strategy:a=cu,disabled:r=!1}=e;const{active:o,dragOverlay:u,droppableRects:s,over:c,measureDroppableContainers:l}=fl(),h=oi(lu,t),b=u.rect!==null,g=y.useMemo(()=>i.map(q=>typeof q=="object"&&"id"in q?q.id:q),[i]),E=o!=null,C=o?g.indexOf(o.id):-1,w=c?g.indexOf(c.id):-1,S=y.useRef(g),F=!p0(g,S.current),D=w!==-1&&C===-1||F,P=m0(r);Dt(()=>{F&&E&&l(g)},[F,g,E,l]),y.useEffect(()=>{S.current=g},[g]);const R=y.useMemo(()=>({activeIndex:C,containerId:h,disabled:P,disableTransforms:D,items:g,overIndex:w,useDragOverlay:b,sortedRects:f0(g,s),strategy:a}),[C,h,P.draggable,P.droppable,D,g,w,s,b,a]);return qe.createElement(du.Provider,{value:R},n)}const k0=e=>{let{id:n,items:t,activeIndex:i,overIndex:a}=e;return ur(t,i,a).indexOf(n)},v0=e=>{let{containerId:n,isSorting:t,wasDragging:i,index:a,items:r,newIndex:o,previousItems:u,previousContainerId:s,transition:c}=e;return!c||!i||u!==r&&a===o?!1:t?!0:o!==a&&n===s},C0={duration:200,easing:"ease"},gu="transform",y0=Jn.Transition.toString({property:gu,duration:0,easing:"linear"}),E0={roleDescription:"sortable"};function S0(e){let{disabled:n,index:t,node:i,rect:a}=e;const[r,o]=y.useState(null),u=y.useRef(t);return Dt(()=>{if(!n&&t!==u.current&&i.current){const s=a.current;if(s){const c=Ln(i.current,{ignoreTransform:!0}),l={x:s.left-c.left,y:s.top-c.top,scaleX:s.width/c.width,scaleY:s.height/c.height};(l.x||l.y)&&o(l)}}t!==u.current&&(u.current=t)},[n,t,i,a]),y.useEffect(()=>{r&&o(null)},[r]),r}function sr(e){let{animateLayoutChanges:n=v0,attributes:t,disabled:i,data:a,getNewIndex:r=k0,id:o,strategy:u,resizeObserverConfig:s,transition:c=C0}=e;const{items:l,containerId:h,activeIndex:b,disabled:g,disableTransforms:E,sortedRects:C,overIndex:w,useDragOverlay:S,strategy:F}=y.useContext(du),D=w0(i,g),P=l.indexOf(o),R=y.useMemo(()=>({sortable:{containerId:h,index:P,items:l},...a}),[h,a,P,l]),q=y.useMemo(()=>l.slice(l.indexOf(o)),[l,o]),{rect:O,node:M,isOver:H,setNodeRef:U}=bl({id:o,data:R,disabled:D.droppable,resizeObserverConfig:{updateMeasurementsFor:q,...s}}),{active:B,activatorEvent:Y,activeNodeRect:Z,attributes:te,setNodeRef:ce,listeners:de,isDragging:oe,over:ie,setActivatorNodeRef:ue,transform:mt}=gl({id:o,data:R,attributes:{...E0,...t},disabled:D.draggable}),Ye=Xs(U,ce),re=!!B,fe=re&&!E&&fi(b)&&fi(w),Pe=!S&&oe,Be=Pe&&fe?mt:null,bt=fe?Be??(u??F)({rects:C,activeNodeRect:Z,activeIndex:b,overIndex:w,index:P}):null,Je=fi(b)&&fi(w)?r({id:o,items:l,activeIndex:b,overIndex:w}):P,ee=B==null?void 0:B.id,Q=y.useRef({activeId:ee,items:l,newIndex:Je,containerId:h}),Ve=l!==Q.current.items,ze=n({active:B,containerId:h,isDragging:oe,isSorting:re,id:o,index:P,items:l,newIndex:Q.current.newIndex,previousItems:Q.current.items,previousContainerId:Q.current.containerId,transition:c,wasDragging:Q.current.activeId!=null}),Gt=S0({disabled:!ze,index:P,node:M,rect:O});return y.useEffect(()=>{re&&Q.current.newIndex!==Je&&(Q.current.newIndex=Je),h!==Q.current.containerId&&(Q.current.containerId=h),l!==Q.current.items&&(Q.current.items=l)},[re,Je,h,l]),y.useEffect(()=>{if(ee===Q.current.activeId)return;if(ee!=null&&Q.current.activeId==null){Q.current.activeId=ee;return}const at=setTimeout(()=>{Q.current.activeId=ee},50);return()=>clearTimeout(at)},[ee]),{active:B,activeIndex:b,attributes:te,data:R,rect:O,index:P,newIndex:Je,items:l,isOver:H,isSorting:re,isDragging:oe,listeners:de,node:M,overIndex:w,over:ie,setNodeRef:Ye,setActivatorNodeRef:ue,setDroppableNodeRef:U,setDraggableNodeRef:ce,transform:Gt??bt,transition:Te()};function Te(){if(Gt||Ve&&Q.current.newIndex===P)return y0;if(!(Pe&&!Za(Y)||!c)&&(re||ze))return Jn.Transition.toString({...c,property:gu})}}function w0(e,n){var t,i;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(t=e==null?void 0:e.draggable)!=null?t:n.draggable,droppable:(i=e==null?void 0:e.droppable)!=null?i:n.droppable}}ae.Down,ae.Right,ae.Up,ae.Left;const fu=y.createContext({dropListOpened:!1,setDropListOpen(){}}),x0=()=>y.useContext(fu),pu=y.createContext({table:{}}),mu=()=>y.useContext(pu);function Tr(e){return e.some(n=>n.headers.length)}function A0(){const{table:e}=mu(),n=e._getColumnDefs(),t=e.getIsSomeColumnsPinned(),{columnOrder:i}=e.getState();return y.useMemo(()=>{if(!t)return{unpinned:e.getHeaderGroups()};const a=e.getLeftHeaderGroups(),r=e.getRightHeaderGroups();return{leftPinned:Tr(a)?a:void 0,rightPinned:Tr(r)?r:void 0,unpinned:e.getCenterHeaderGroups()}},[e,t,n,i])}function _0(e){const{table:n}=mu(),t=n.getIsSomeColumnsPinned(),i=n._getColumnDefs(),{columnOrder:a}=n.getState();return y.useMemo(()=>{if(!t)return{unpinned:e.getVisibleCells()};const r=e.getLeftVisibleCells(),o=e.getRightVisibleCells();return{leftPinned:r.length?r:void 0,rightPinned:o.length?o:void 0,unpinned:e.getCenterVisibleCells()}},[e,t,i,a])}function bu(e,n){const t=e.column,{isDragging:i,transform:a}=sr({id:t.id}),r=t.columnDef.minSize,o=t.columnDef.maxSize,u=`var(--table-column-${t.id}-size)`,s=`var(--table-column-${t.id}-flex)`,c="headerGroup"in e;return y.useMemo(()=>{const l={minWidth:r,width:u,maxWidth:o,flexShrink:s};return n!=null&&n.isDraggable&&(l.opacity=i?.8:1,l.position="relative",l.transform=Jn.Translate.toString(a),l.transition="width transform 0.2s ease-in-out",l.zIndex=i?1:void 0,c&&(l.whiteSpace="nowrap")),l},[n==null?void 0:n.isDraggable,s,i,c,o,r,a,u])}const G0="_tableCell_joxhi_1",O0={tableCell:G0},Fi=y.forwardRef(({onClick:e,onMouseUp:n,className:t,style:i,children:a,role:r="cell",...o},u)=>L.jsx("div",{role:r,onClick:e,onMouseUp:n,className:gn(O0.tableCell,t),style:i,ref:u,...o,children:a}));try{Fi.displayName="Cell",Fi.__docgenInfo={description:"",displayName:"Cell",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},role:{defaultValue:{value:"cell"},description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"cell"'},{value:'"columnheader"'}]}}}}}catch{}const F0="_tableBodyCell_lcfd1_1",N0={tableBodyCell:F0};function Un({cell:e,className:n,rowAutoHeight:t,isDraggable:i,...a}){const r=e.column.columnDef,o=bu(e,{isDraggable:i}),{setNodeRef:u}=sr({id:e.column.id});return L.jsx(Fi,{...a,ref:i?u:void 0,style:o,className:gn(N0.tableBodyCell,n,r.cellClassName),"data-row-auto-height":t||void 0,"data-align":r.align,"data-no-padding":r.noBodyCellPadding||void 0,"data-column-id":e.column.id,"data-test-id":Re.bodyCell,children:_a(r.cell,e.getContext())})}try{Un.displayName="BodyCell",Un.__docgenInfo={description:"",displayName:"BodyCell",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"cell"'},{value:'"columnheader"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"Cell<TData, unknown>"}},rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},isDraggable:{defaultValue:null,description:"",name:"isDraggable",required:!1,type:{name:"boolean"}}}}}catch{}const D0="_rowActionsCell_1fcgm_1",L0="_rowActionsCellWrap_1fcgm_20",ku={rowActionsCell:D0,rowActionsCellWrap:L0};function R0({row:e,actions:n}){const{dropListOpened:t,setDropListOpen:i}=x0(),a=y.useCallback((s,c)=>Ts(s)?{...s,onClick(l){var h;(h=s.onClick)==null||h.call(s,l),c(l)}}:{...s,items:s.items.map(l=>a(l,c))},[]),r=!e.getCanSelect(),o=s=>{s.stopPropagation()},u=y.useMemo(()=>n.map(s=>a(s,()=>i(!1))),[n,a,i]);return L.jsx("div",{onClick:o,className:ku.rowActionsCellWrap,"data-open":t||void 0,children:!r&&!!n.length&&L.jsx(Xa,{trigger:"click",open:t,onOpenChange:i,placement:"bottom-end",size:"m","data-test-id":Re.rowActions.droplist,items:u,children:L.jsx(ni,{icon:L.jsx(Hs,{size:24}),"data-test-id":Re.rowActions.droplistTrigger})})})}function Ga({actionsGenerator:e,pinned:n}){return{id:ui.RowActions,pinned:n?Vt.Right:void 0,size:40,meta:{skipOnExport:!0},noBodyCellPadding:!0,cellClassName:ku.rowActionsCell,enableResizing:!1,cell:t=>L.jsx(R0,{row:t.row,actions:e(t)})}}try{Ga.displayName="getRowActionsColumnDef",Ga.__docgenInfo={description:"Вспомогательная функция для создания ячейки с дополнительными действиями у строки",displayName:"getRowActionsColumnDef",props:{actionsGenerator:{defaultValue:null,description:"Действия для строки",name:"actionsGenerator",required:!0,type:{name:"ActionsGenerator<TData>"}},pinned:{defaultValue:null,description:"Закрепление колонки справа в таблице",name:"pinned",required:!1,type:{name:"boolean"}}}}}catch{}function Oa(e){switch(e){case"asc":return L.jsx(Fs,{size:16});case"desc":return L.jsx(Os,{size:16});default:return null}}const Fa=e=>{e.stopPropagation()};try{Oa.displayName="getSortingIcon",Oa.__docgenInfo={description:"",displayName:"getSortingIcon",props:{}}}catch{}try{Fa.displayName="stopEventPropagation",Fa.__docgenInfo={description:"",displayName:"stopEventPropagation",props:{}}}catch{}const H0="_tableHeaderResizeHandle_7qzar_1",T0="_tableHeaderResizeIndicator_7qzar_27",I0="_tableHeaderCell_7qzar_49",M0="_tableHeaderCellDragWrapper_7qzar_114",P0="_tableHeaderCellMain_7qzar_121",B0="_tableHeaderCellName_7qzar_132",V0="_tableHeaderIcon_7qzar_143",Yt={tableHeaderResizeHandle:H0,tableHeaderResizeIndicator:T0,tableHeaderCell:I0,tableHeaderCellDragWrapper:M0,tableHeaderCellMain:P0,tableHeaderCellName:B0,tableHeaderIcon:V0};function z0({header:e,cellRef:n}){var s;const t=e.getContext().table.getState().columnSizingInfo,{minSize:i,maxSize:a}=e.column.columnDef,{startSize:r,deltaOffset:o}=t;let u=0;if(r!==null&&o!==null){const c=((s=n.current)==null?void 0:s.offsetWidth)||0,l=Math.max(r,c),h=o<0?i:a;let b=0;h!==void 0&&o!==0&&(b=o<0?-(l-h):h-l,u=o<0?Math.max(o,b):Math.min(Math.abs(o),b))}return u}function Na({header:e,cellRef:n}){const t=e.column.getIsResizing(),i=e.getResizeHandler(),a=o=>{if(o.detail===2){e.column.resetSize();return}i(o)},r=t?z0({header:e,cellRef:n}):0;return L.jsxs(L.Fragment,{children:[L.jsx("div",{role:"button",tabIndex:0,className:gn(Yt.tableHeaderIcon,Yt.tableHeaderResizeHandle),"data-resizing":t||void 0,onMouseDown:a,onTouchStart:i,onMouseUp:Fa}),t&&L.jsx("div",{"data-test-id":"table__header-cell-resize-handle-moving-part",className:Yt.tableHeaderResizeIndicator,style:{"--offset":`${r}px`}})]})}try{Na.displayName="ResizeHandle",Na.__docgenInfo={description:"",displayName:"ResizeHandle",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"Header<TData, unknown>"}},cellRef:{defaultValue:null,description:"",name:"cellRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}}}}}catch{}function qn({header:e,pinPosition:n,className:t,rowAutoHeight:i,isDraggable:a}){const r=y.useRef(null),o=e.column.getCanSort(),u=e.column.getCanResize(),s=u&&e.column.getIsResizing(),c=o&&(e.column.getIsSorted()||void 0),l=Oa(c),b=e.getContext().table.getState().columnSizingInfo.isResizingColumn,g=e.column.columnDef,E=bu(e,{isDraggable:a}),{attributes:C,listeners:w,setNodeRef:S,isDragging:F}=sr({id:e.column.id}),D=R=>{var q;if(!b)return(q=e.column.getToggleSortingHandler())==null?void 0:q(R)},P=y.useMemo(()=>!a||l0.includes(e.column.id)?{}:{...C,...w},[C,e.column.id,a,w]);return L.jsxs(Fi,{style:E,onClick:D,"data-sortable":o||void 0,"data-draggable":a||void 0,"data-no-padding":g.noHeaderCellPadding||void 0,"data-no-offset":g.noHeaderCellBorderOffset||void 0,"data-test-id":Re.headerCell,"data-header-id":e.id,"data-resizing":s||void 0,"data-pin-position":n||void 0,"data-row-auto-height":i||void 0,role:"columnheader",className:gn(Yt.tableHeaderCell,t,g.headerClassName),ref:R=>(a&&S(R),r),children:[L.jsx("div",{className:Yt.tableHeaderCellDragWrapper,"data-dragging":a&&F||void 0,...P,children:L.jsxs("div",{className:Yt.tableHeaderCellMain,"data-align":g.headerAlign||void 0,children:[g.header&&L.jsx("div",{className:Yt.tableHeaderCellName,children:i?_a(g.header,e.getContext()):L.jsx(ti,{text:_a(g.header,e.getContext())})}),!!l&&L.jsx("div",{className:Yt.tableHeaderIcon,"data-sort-direction":c,"data-test-id":Re.headerSortIndicator,children:l})]})}),!!u&&L.jsx(Na,{header:e,cellRef:r})]})}try{qn.displayName="HeaderCell",qn.__docgenInfo={description:"",displayName:"HeaderCell",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"cell"'},{value:'"columnheader"'}]}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"Header<TData, unknown>"}},pinPosition:{defaultValue:null,description:"",name:"pinPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},isDraggable:{defaultValue:null,description:"",name:"isDraggable",required:!1,type:{name:"boolean"}}}}}catch{}const $0="_selectionCell_zxen9_1",j0="_selectionCellHeader_zxen9_11",Ir={selectionCell:$0,selectionCellHeader:j0};function U0(e,n,t){const i=[],a={[n]:!1,[t]:!1},r=[n,t];for(const o of e){if(r.includes(o.id)){if(t===""){i.push(o);break}a[o.id]=!0}if((a[n]||a[t])&&!o.getIsGrouped()&&i.push(o),a[n]&&a[t])break}return i}function Da(e){let n="";return{id:ui.Selection,pinned:Vt.Left,noBodyCellPadding:!0,size:40,headerClassName:Ir.selectionCellHeader,enableResizing:!1,cell:({row:t,table:i})=>{if(!t.getCanSelect()||!e&&t.getIsPinned())return null;const{enableMultiRowSelection:r}=i.options,o=typeof r=="boolean"?r:!0,u=t.getIsSelected(),s=c=>{var l,h;if(c.stopPropagation(),(l=globalThis.getSelection())==null||l.removeAllRanges(),c.shiftKey){const{rows:b,rowsById:g}=i.getRowModel(),E=U0(b,t.id,b.map(S=>S.id).includes(n)?n:""),C=!((h=g[t.id])!=null&&h.getIsSelected())||!1,w=E.reduce((S,F)=>(S[F.index]=C,S),{});i.setRowSelection(S=>({...S,...w}))}else t.toggleSelected(!u);n=t.id};return L.jsx("div",{onClick:s,className:Ir.selectionCell,"data-test-id":Re.rowSelect,children:o?L.jsx(Oo,{size:"s",checked:u}):L.jsx(Go,{size:"s",checked:u})})},meta:{skipOnExport:!0}}}try{Da.displayName="getSelectionCellColumnDef",Da.__docgenInfo={description:"",displayName:"getSelectionCellColumnDef",props:{}}}catch{}const cr={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Loading:"loading"},Mr=16,q0="_statusCell_5j9u2_1",W0="_statusCellLabel_5j9u2_14",X0="_statusCellIndicator_5j9u2_20",oa={statusCell:q0,statusCellLabel:W0,statusCellIndicator:X0};function K0({appearance:e,label:n}){const t=e===cr.Loading;return L.jsxs("div",{className:oa.statusCell,"data-no-label":!n||void 0,children:[L.jsx("div",{"data-appearance":t?void 0:e,className:oa.statusCellIndicator,"data-loading":t||void 0,"data-test-id":Re.statusIndicator}),n&&L.jsx("div",{className:oa.statusCellLabel,"data-test-id":Re.statusLabel,children:L.jsx(Rs.LightLabelS,{children:L.jsx(ti,{text:n})})})]})}function La({header:e,accessorKey:n,mapStatusToAppearance:t,renderDescription:i,size:a,maxSize:r,minSize:o,enableSorting:u=!0,enableResizing:s}){const c=!!i;return{id:ui.Status,pinned:Vt.Left,noBodyCellPadding:!0,noHeaderCellPadding:!c,noHeaderCellBorderOffset:c,size:c?a:Mr,minSize:u||c?Math.max(Mr,o||0):1,maxSize:r,meta:{skipOnExport:!0},accessorKey:n,enableSorting:u,header:c?e:void 0,enableResizing:s??c,accessorFn:l=>i&&Object.hasOwn(l,n)?i(l[n],l):void 0,cell:l=>{const h=typeof l.row.original=="object"&&Object.hasOwn(l.row.original,n)?l.row.original[n]:l.getValue(),b=t(h);return L.jsx(K0,{appearance:b,label:i?i(h,l.row.original):void 0})}}}try{La.displayName="getStatusColumnDef",La.__docgenInfo={description:"Вспомогательная функция для создания ячейки со статусом",displayName:"getStatusColumnDef",props:{accessorKey:{defaultValue:null,description:"Имя ключа соответствующее полю в data",name:"accessorKey",required:!0,type:{name:"string"}},mapStatusToAppearance:{defaultValue:null,description:"Маппинг значений статуса на цвета",name:"mapStatusToAppearance",required:!0,type:{name:"MapStatusToAppearanceFnType"}},enableSorting:{defaultValue:{value:"true"},description:"Включение/выключение сортировки",name:"enableSorting",required:!1,type:{name:"boolean"}},renderDescription:{defaultValue:null,description:"Функция для отрисовки текста, если не передана, то будет отрисован только индикатор статуса",name:"renderDescription",required:!1,type:{name:"((cellValue: string, row: TData) => string)"}},size:{defaultValue:null,description:"Размер ячейки",name:"size",required:!1,type:{name:"number"}},minSize:{defaultValue:null,description:"",name:"minSize",required:!1,type:{name:"number"}},maxSize:{defaultValue:null,description:"",name:"maxSize",required:!1,type:{name:"number"}},header:{defaultValue:null,description:"Заголовок колонки",name:"header",required:!1,type:{name:"string | (string & ReactElement<any, string | JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | ... 10 more ..."}},enableResizing:{defaultValue:null,description:"Включение/выключение ресайза колонки",name:"enableResizing",required:!1,type:{name:"boolean"}}}}}catch{}const Y0="_copyCell_1b06y_1",J0="_copyButton_1b06y_10",Pr={copyCell:Y0,copyButton:J0};function Ra({value:e}){const[n,t]=y.useState(!1),i=y.useRef(),a=()=>t(!0),r=()=>t(!1),o=u=>{u.stopPropagation(),e&&ms(String(e),{format:"text/plain"}),a(),clearTimeout(i.current),i.current=setTimeout(r,1e3)};return y.useEffect(()=>()=>{r(),clearTimeout(i.current)},[]),L.jsxs("div",{className:Pr.copyCell,onClick:o,role:"presentation",children:[L.jsx(ti,{text:String(e),maxLines:1}),L.jsx(ni,{"data-test-id":"button-copy-value",type:"button",icon:n?L.jsx(bs,{}):L.jsx(ks,{}),size:"xs",className:Pr.copyButton})]})}try{Ra.displayName="CopyCell",Ra.__docgenInfo={description:"",displayName:"CopyCell",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}}}}}catch{}const Br="snack_predefined_TreeColumn",Z0="_treeCellContainer_1yudj_1",Q0="_treeCell_1yudj_1",ed="_cellUserToggleIcon_1yudj_21",td="_treeNodeContent_1yudj_28",nd="_userContent_1yudj_58",id="_line_1yudj_63",ad="_firstLine_1yudj_67",rd="_cellExpandButton_1yudj_71",od="_treeCheckboxWrap_1yudj_83",Pt={treeCellContainer:Z0,treeCell:Q0,cellUserToggleIcon:ed,treeNodeContent:td,userContent:nd,line:id,firstLine:ad,cellExpandButton:rd,treeCheckboxWrap:od},ud="_treeLine_1l5c8_1",sd={treeLine:ud};function Ni({halfHeight:e,horizontal:n,visible:t,className:i}){return L.jsx("div",{className:gn(sd.treeLine,i),"data-horizontal":n||void 0,"data-half-height":e||void 0,"data-visible":t||void 0})}try{Ni.displayName="TreeLine",Ni.__docgenInfo={description:"",displayName:"TreeLine",props:{halfHeight:{defaultValue:null,description:"",name:"halfHeight",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}function Ha({showToggle:e=!1,icon:n=L.jsx(ys,{size:24}),expandedIcon:t=L.jsx(Es,{size:24}),collapsedIcon:i=L.jsx(Ss,{size:24}),header:a,accessorKey:r,cell:o,enableSelection:u}){const s=function(l){var Z;const{row:h,cell:b}=l,g=h.getIsExpanded(),E=h.getCanExpand(),C=h.getCanMultiSelect(),w=h.getParentRow(),S=h.getCanSelect(),F=h.getIsAllSubRowsSelected(),D=h.getIsSomeSelected(),P=h.getIsSelected(),R=((Z=w==null?void 0:w.subRows.at(-1))==null?void 0:Z.id)===h.id,q=h.depth,{ref:O}=g0(Br,b),M=y.useMemo(()=>{var ce;const te=[];for(let de=q;de>=0;de--)te[de]=de===q?h:(ce=te.at(de+1))==null?void 0:ce.getParentRow();return te.map((de,oe)=>{var ue;if(!de||te.length===oe+1)return!0;const ie=te[oe+1];return(ie==null?void 0:ie.id)!==((ue=de.subRows.at(-1))==null?void 0:ue.id)||(h==null?void 0:h.id)===(ie==null?void 0:ie.id)})},[h,q]),H=y.useMemo(()=>Array.from({length:q},(te,ce)=>L.jsx(Ni,{visible:M.at(ce),className:ce!==0?Pt.line:Pt.firstLine,halfHeight:ce===q-1&&R},ce)),[q,M,R]);y.useEffect(()=>{if(!(!C||!E||!S)){if(F&&!P){h.toggleSelected(!0,{selectChildren:!1});return}if(P&&!F&&D){h.toggleSelected(!1,{selectChildren:!1});return}}},[F,D,h,P,C,E,S]);const U=y.useCallback(te=>{if(te.stopPropagation(),u){if(C){const ce=!F&&!P,de=F||D||ce;h.toggleSelected(ce,{selectChildren:de});return}h.toggleSelected(!P,{selectChildren:!1})}},[C,h,F,D,P]),B=y.useCallback(te=>{te.stopPropagation(),h.toggleExpanded()},[h]),Y=typeof b.row.original=="object"&&Object.hasOwn(b.row.original,r)?b.row.original[r]:b.getValue();return L.jsx("div",{role:"presentation","data-test-id":Re.tree.node,className:Pt.treeCellContainer,onClick:U,children:L.jsxs("div",{className:Pt.treeCell,ref:O,children:[H,!!w&&L.jsx(Ni,{horizontal:!0,visible:!0}),E&&L.jsx(ni,{size:"xs","data-test-id":Re.tree.chevron,icon:L.jsx(ws,{}),onClick:B,className:Pt.cellExpandButton,"data-expanded":g||void 0}),L.jsxs("div",{className:Pt.treeNodeContent,"data-disabled":!S||void 0,"data-selected":P||void 0,"data-multiselect":C||void 0,children:[e&&L.jsx("div",{tabIndex:-1,className:Pt.treeCheckboxWrap,children:C?L.jsx(Oo,{size:"s",disabled:!S,checked:P,"data-test-id":Re.tree.checkbox,indeterminate:D&&!F}):L.jsx(Go,{size:"s",disabled:!S,"data-test-id":Re.tree.radio,checked:P})}),L.jsxs("div",{role:"presentation",onClick:B,className:Pt.cellUserToggleIcon,children:[E&&g&&t,E&&!g&&i]}),L.jsxs("div",{role:"presentation",className:Pt.userContent,children:[!E&&n,o?o(l):L.jsx(ti,{text:Y})]})]})]})})};return{id:Br,pinned:Vt.Left,accessorKey:r,noBodyCellPadding:!0,noHeaderCellPadding:!1,enableResizing:!0,size:150,maxSize:Number.MAX_SAFE_INTEGER,meta:{skipOnExport:!1},enableSorting:!1,header:a,cell:s}}try{Ha.displayName="getTreeColumnDef",Ha.__docgenInfo={description:"Вспомогательная функция для создания ячейки со статусом",displayName:"getTreeColumnDef",props:{accessorKey:{defaultValue:null,description:"Имя ключа соответствующее полю в data",name:"accessorKey",required:!0,type:{name:"string"}},expandedIcon:{defaultValue:{value:"<FolderOpenSVG size={24} />"},description:"Иконка элемента-родителя в открытом состоянии",name:"expandedIcon",required:!1,type:{name:"ReactNode"}},collapsedIcon:{defaultValue:{value:"<FolderSVG size={24} />"},description:"Иконка элемента-родителя в закрытом состоянии",name:"collapsedIcon",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:{value:"<FileSVG size={24} />"},description:"Иконка дочернего",name:"icon",required:!1,type:{name:"ReactNode"}},showToggle:{defaultValue:{value:"false"},description:"Иконка дочернего элемента",name:"showToggle",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:"Рендер функция заголовка колонки",name:"header",required:!1,type:{name:"string | (string & ReactElement<any, string | JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | ... 10 more ..."}},cell:{defaultValue:null,description:"Заголовок колонки",name:"cell",required:!1,type:{name:"((ctx: CellContext<TData, unknown>) => ReactNode)"}},enableSelection:{defaultValue:null,description:"",name:"enableSelection",required:!1,type:{name:"boolean"}}}}}catch{}const cd="_tableRow_7p3xy_1",ld="_rowPinnedCells_7p3xy_19",dd="_bodyRow_7p3xy_59",hd="_tableHeader_7p3xy_110",ji={tableRow:cd,rowPinnedCells:ld,bodyRow:dd,tableHeader:hd};function On({position:e,children:n}){return L.jsx("div",{"data-position":e,"data-test-id":Re.pinnedCells,className:ji.rowPinnedCells,children:n})}try{On.displayName="PinnedCells",On.__docgenInfo={description:"",displayName:"PinnedCells",props:{position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}function Di({onClick:e,children:n,className:t,rowAutoHeight:i,...a}){return L.jsx("div",{onClick:e,className:gn(ji.tableRow,t),"data-auto-height":i||void 0,role:"row",...a,children:n})}try{Di.displayName="Row",Di.__docgenInfo={description:"",displayName:"Row",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}}}}}catch{}function wn({row:e,onRowClick:n,rowAutoHeight:t,columnOrder:i,enableColumnsOrderSortByDrag:a}){const{leftPinned:r,rightPinned:o,unpinned:u}=_0(e),[s,c]=y.useState(!1),l=!e.getCanSelect(),h=b=>{l||n==null||n(b,{id:e.id,data:e.original,selected:e.getIsSelected(),toggleSelected:e.toggleSelected})};return L.jsx(fu.Provider,{value:{dropListOpened:s,setDropListOpen:c},children:L.jsxs(Di,{onClick:h,"data-clickable":!!n||void 0,"data-disabled":l||void 0,"data-selected":e.getIsSelected()||e.getIsSomeSelected()&&!e.getCanMultiSelect()&&!e.getIsExpanded()||void 0,"data-actions-opened":s||void 0,"data-test-id":Re.bodyRow,"data-row-id":e.id,className:ji.bodyRow,rowAutoHeight:t,children:[r&&L.jsx(On,{position:Vt.Left,children:r.map(b=>L.jsx(Un,{cell:b,rowAutoHeight:t},b.id))}),u.map(b=>L.jsx(hu,{items:i,strategy:su,children:L.jsx(Un,{cell:b,rowAutoHeight:t,isDraggable:a},b.id)},b.id)),o&&L.jsx(On,{position:Vt.Right,children:o.map(b=>L.jsx(Un,{cell:b,rowAutoHeight:t,isDraggable:a},b.id))})]})})}try{wn.displayName="BodyRow",wn.__docgenInfo={description:"",displayName:"BodyRow",props:{rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},row:{defaultValue:null,description:"",name:"row",required:!0,type:{name:"Row<TData>"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"RowClickHandler<TData>"}},columnOrder:{defaultValue:null,description:"",name:"columnOrder",required:!0,type:{name:"ColumnOrder"}},enableColumnsOrderSortByDrag:{defaultValue:null,description:"",name:"enableColumnsOrderSortByDrag",required:!1,type:{name:"boolean"}}}}}catch{}function Li({rowAutoHeight:e,columnOrder:n,enableColumnsOrderSortByDrag:t}){const{leftPinned:i,unpinned:a,rightPinned:r}=A0();return L.jsxs(Di,{className:ji.tableHeader,"data-test-id":Re.headerRow,rowAutoHeight:e,children:[i&&L.jsx(On,{position:Vt.Left,children:i.map(o=>o.headers.map(u=>u.isPlaceholder?null:L.jsx(qn,{header:u,rowAutoHeight:e},u.id)))}),L.jsx(hu,{items:n,strategy:su,children:a.map(o=>o.headers.map(u=>L.jsx(qn,{header:u,rowAutoHeight:e,isDraggable:t&&n.length>1},u.id)))}),r&&L.jsx(On,{position:Vt.Right,children:r.map(o=>o.headers.map(u=>u.isPlaceholder?null:L.jsx(qn,{header:u,pinPosition:Vt.Right,rowAutoHeight:e},u.id)))})]})}try{Li.displayName="HeaderRow",Li.__docgenInfo={description:"",displayName:"HeaderRow",props:{rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},columnOrder:{defaultValue:null,description:"",name:"columnOrder",required:!0,type:{name:"ColumnOrder"}},enableColumnsOrderSortByDrag:{defaultValue:null,description:"",name:"enableColumnsOrderSortByDrag",required:!1,type:{name:"boolean"}}}}}catch{}function Ta({settings:e,data:n,columnDefinitions:t,topRows:i,centerRows:a}){const[r,o]=y.useState(!1),{t:u}=ii("Table"),{fileName:s,filterData:c=!0}=e,l=y.useMemo(()=>{let h=n;return c&&(h=[...i,...a].map(b=>b.original)),h},[a,n,c,i]);return L.jsx(Xa,{trigger:"clickAndFocusVisible",open:r,onOpenChange:o,scroll:!0,placement:"bottom-end",items:[{content:{option:u("export")+"CSV"},onClick:()=>{var h;(h=e.exportToCSV)==null||h.call(e,{fileName:s,columnDefinitions:t,data:l}),o(!1)},hidden:!e.exportToCSV},{content:{option:u("export")+"XLSX"},onClick:()=>{var h;(h=e.exportToXLSX)==null||h.call(e,{fileName:s,columnDefinitions:t,data:l}),o(!1)},hidden:!e.exportToXLSX}],children:L.jsx(ni,{size:"m",icon:L.jsx(Gs,{})})})}try{Ta.displayName="ExportButton",Ta.__docgenInfo={description:"",displayName:"ExportButton",props:{data:{defaultValue:null,description:"Данные для отрисовки",name:"data",required:!0,type:{name:"TData[]"}},columnDefinitions:{defaultValue:null,description:"Определение внешнего вида и функционала колонок",name:"columnDefinitions",required:!0,type:{name:"ColumnDefinition<TData>[]"}},settings:{defaultValue:null,description:"",name:"settings",required:!0,type:{name:"{ fileName: string; filterData?: boolean | undefined; exportToCSV?(args: ExportProps<TData>): void; exportToXLSX?(args: ExportProps<TData>): void; }"}},topRows:{defaultValue:null,description:"",name:"topRows",required:!0,type:{name:"Row<TData>[]"}},centerRows:{defaultValue:null,description:"",name:"centerRows",required:!0,type:{name:"Row<TData>[]"}}}}}catch{}function Vr(e){return e.id?e.id:"accessorKey"in e&&e.accessorKey?String(e.accessorKey):typeof e.header=="string"?e.header:void 0}const gd="_tableEmptyStateWrapper_sjme0_1",fd={tableEmptyStateWrapper:gd};function Ia({dataError:e,dataFiltered:n,tableRowsLength:t,emptyStates:i}){return t?null:L.jsxs("div",{className:fd.tableEmptyStateWrapper,children:[e&&L.jsx(Wi,{...i.errorDataState,size:"m",align:"vertical"}),!e&&n&&L.jsx(Wi,{...i.noResultsState,size:"m",align:"vertical"}),!e&&!n&&L.jsx(Wi,{...i.noDataState,size:"m",align:"vertical"})]})}try{Ia.displayName="TableEmptyState",Ia.__docgenInfo={description:"",displayName:"TableEmptyState",props:{emptyStates:{defaultValue:null,description:"",name:"emptyStates",required:!0,type:{name:"{ noDataState: EmptyStateProps; noResultsState: EmptyStateProps; errorDataState: EmptyStateProps; }"}},dataError:{defaultValue:null,description:"",name:"dataError",required:!1,type:{name:"boolean"}},dataFiltered:{defaultValue:null,description:"",name:"dataFiltered",required:!1,type:{name:"boolean"}},tableRowsLength:{defaultValue:null,description:"",name:"tableRowsLength",required:!0,type:{name:"number"}}}}}catch{}function pd({noDataState:e,noResultsState:n,errorDataState:t}){const{t:i}=ii("Table");return y.useMemo(()=>{const a={icon:{icon:kr,appearance:"neutral",decor:!0},title:i("noData.title"),...e},r={icon:{icon:kr,appearance:"neutral",decor:!0},title:i("noResults.title"),description:i("noResults.description"),...n},o={icon:{icon:As,appearance:"neutral",decor:!0},title:i("errorData.title"),description:i("errorData.description"),...t};return{noDataState:a,noResultsState:r,errorDataState:o}},[t,e,n,i])}const md="_footer_1y40y_1",bd="_pagination_1y40y_9",zr={footer:md,pagination:bd};function Ma({table:e,options:n,optionsLabel:t,optionsRender:i}){const{t:a}=ii("Table"),r=t??a("rowsOptionsLabel"),o=y.useCallback(l=>{e.setPageIndex(l-1)},[e]),u=y.useCallback(l=>{e.setPageSize(Number(l))},[e]),s=y.useMemo(()=>n==null?void 0:n.sort((l,h)=>l-h).map((l,h)=>({label:String(i?i(l,h):l),value:String(l)})),[n,i]),c=e.getState().pagination;return e.getPageCount()<=1&&!s?null:L.jsxs("div",{className:zr.footer,children:[e.getPageCount()>1&&L.jsx(Ds,{total:e.getPageCount(),page:c.pageIndex+1,onChange:o,size:"xs",className:zr.pagination}),s&&e.getRowModel().rows.length>=Number(s[0].value)&&L.jsx(Ls.Single,{value:String(c.pageSize),onChange:u,placement:"top-end",options:s,label:r,widthStrategy:"auto",size:"xs"})]})}try{Ma.displayName="TablePagination",Ma.__docgenInfo={description:"",displayName:"TablePagination",props:{table:{defaultValue:null,description:"",name:"table",required:!0,type:{name:"Table<TData>"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"number[]"}},optionsLabel:{defaultValue:null,description:"",name:"optionsLabel",required:!1,type:{name:"string"}},optionsRender:{defaultValue:null,description:"",name:"optionsRender",required:!1,type:{name:"((value: number, idx: number) => string | number)"}},pageCount:{defaultValue:null,description:"",name:"pageCount",required:!1,type:{name:"number"}}}}}catch{}const kd="_columnsSettings_18ghj_1",vd={columnsSettings:kd};function Pa({columnsSettings:e,enabledColumns:n,setEnabledColumns:t}){return L.jsx(Xa,{className:vd.columnsSettings,items:e,selection:{value:n,onChange:t,mode:"multiple"},placement:"bottom-end","data-test-id":"table__column-settings-droplist",children:L.jsx(ni,{size:"m","data-test-id":"table__column-settings",icon:L.jsx(Ns,{})})})}try{Pa.displayName="ColumnsSettings",Pa.__docgenInfo={description:"",displayName:"ColumnsSettings",props:{enabledColumns:{defaultValue:null,description:"",name:"enabledColumns",required:!0,type:{name:"string[]"}},setEnabledColumns:{defaultValue:null,description:"",name:"setEnabledColumns",required:!0,type:{name:"(enabledColumns: string[]) => void"}},columnsSettings:{defaultValue:null,description:"",name:"columnsSettings",required:!0,type:{name:"[GroupSelectItem]"}}}}}catch{}/**
   * match-sorter-utils
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */const vu={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},Cd=Object.keys(vu).join("|"),yd=new RegExp(Cd,"g");function Ed(e){return e.replace(yd,n=>vu[n])}/**
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2099 Kent C. Dodds
 * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
 */const Ue={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function Sd(e,n,t){var i;if(t=t||{},t.threshold=(i=t.threshold)!=null?i:Ue.MATCHES,!t.accessors){const o=$r(e,n,t);return{rankedValue:e,rank:o,accessorIndex:-1,accessorThreshold:t.threshold,passed:o>=t.threshold}}const a=_d(e,t.accessors),r={rankedValue:e,rank:Ue.NO_MATCH,accessorIndex:-1,accessorThreshold:t.threshold,passed:!1};for(let o=0;o<a.length;o++){const u=a[o];let s=$r(u.itemValue,n,t);const{minRanking:c,maxRanking:l,threshold:h=t.threshold}=u.attributes;s<c&&s>=Ue.MATCHES?s=c:s>l&&(s=l),s=Math.min(s,l),s>=h&&s>r.rank&&(r.rank=s,r.passed=!0,r.accessorIndex=o,r.accessorThreshold=h,r.rankedValue=u.itemValue)}return r}function $r(e,n,t){return e=jr(e,t),n=jr(n,t),n.length>e.length?Ue.NO_MATCH:e===n?Ue.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),n=n.toLowerCase(),e===n?Ue.EQUAL:e.startsWith(n)?Ue.STARTS_WITH:e.includes(` ${n}`)?Ue.WORD_STARTS_WITH:e.includes(n)?Ue.CONTAINS:n.length===1?Ue.NO_MATCH:wd(e).includes(n)?Ue.ACRONYM:xd(e,n))}function wd(e){let n="";return e.split(" ").forEach(i=>{i.split("-").forEach(r=>{n+=r.substr(0,1)})}),n}function xd(e,n){let t=0,i=0;function a(s,c,l){for(let h=l,b=c.length;h<b;h++)if(c[h]===s)return t+=1,h+1;return-1}function r(s){const c=1/s,l=t/n.length;return Ue.MATCHES+l*c}const o=a(n[0],e,0);if(o<0)return Ue.NO_MATCH;i=o;for(let s=1,c=n.length;s<c;s++){const l=n[s];if(i=a(l,e,i),!(i>-1))return Ue.NO_MATCH}const u=i-o;return r(u)}function jr(e,n){let{keepDiacritics:t}=n;return e=`${e}`,t||(e=Ed(e)),e}function Ad(e,n){let t=n;typeof n=="object"&&(t=n.accessor);const i=t(e);return i==null?[]:Array.isArray(i)?i:[String(i)]}function _d(e,n){const t=[];for(let i=0,a=n.length;i<a;i++){const r=n[i],o=Gd(r),u=Ad(e,r);for(let s=0,c=u.length;s<c;s++)t.push({itemValue:u[s],attributes:o})}return t}const Ur={maxRanking:1/0,minRanking:-1/0};function Gd(e){return typeof e=="function"?Ur:{...Ur,...e}}const Od=(e,n,t,i)=>{const a=Sd(e.getValue(n),t);return i({itemRank:a}),a.passed},ua=e=>typeof e=="string"&&!isNaN(Number(new Date(e))),Fd=e=>Object.fromEntries(Object.entries(e).map(([n,t])=>ua(t)?[n,new Date(t)]:Array.isArray(t)&&t.some(ua)?[n,t.map(i=>ua(i)?new Date(i):i)]:[n,t])),Nd="_table_8suge_1",Dd="_header_8suge_21",Ld="_tableContent_8suge_28",Rd="_toolbar_8suge_32",Hd="_skeleton_8suge_44",Td="_wrapper_8suge_48",Id="_scrollStub_8suge_55",Md="_topRowWrapper_8suge_61",qt={table:Nd,header:Dd,tableContent:Ld,toolbar:Rd,skeleton:Hd,wrapper:Td,scrollStub:Id,topRowWrapper:Md};function Ba({pageSize:e,columnDefinitions:n,columnPinning:t}){const i=y.useMemo(()=>Array.from({length:e}).map(()=>"")||[],[e]),a=y.useMemo(()=>n.map(o=>({...o,cell:()=>L.jsx(xs,{className:qt.skeleton,lines:1,width:"100%"})})),[n]);return{loadingTable:ou({data:i,columns:a,state:{columnPinning:t},getCoreRowModel:au()})}}try{Ba.displayName="useLoadingTable",Ba.__docgenInfo={description:"",displayName:"useLoadingTable",props:{columnDefinitions:{defaultValue:null,description:"",name:"columnDefinitions",required:!0,type:{name:"ColumnDefinition<TData>[]"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},columnPinning:{defaultValue:null,description:"",name:"columnPinning",required:!0,type:{name:"ColumnPinningState"}}}}}catch{}function xn(e,n){const[t,i]=Cs(e==null?void 0:e.state,(e==null?void 0:e.state)??(e==null?void 0:e.initialState)??n,e==null?void 0:e.onChange);return[t,r=>{i(typeof r=="function"?r(t):r)}]}const Pd=e=>{let{transform:n}=e;return{...n,y:0}},Cu="RESIZED_COLUMN_KEY";function Bd({id:e,columnId:n}){var i;const t=JSON.parse(localStorage.getItem(e||"")||"null");if(t)return(i=t.resizeState)==null?void 0:i[`${Cu}-${n}`]}function Vd({id:e,columnId:n,size:t}){const i=JSON.parse(localStorage.getItem(e)||"null"),a=(i==null?void 0:i.resizeState)||{};a[`${Cu}-${n}`]=t,localStorage.setItem(e,JSON.stringify({...i||{},resizeState:a}))}function dn(e){return"id"in e&&e.id?e.id:e.accessorKey}function zd(e){return{sizeKey:`--table-column-${e}-size`,flexKey:`--table-column-${e}-flex`}}function $d(e){if(Gn()){const n=document.querySelector(`[data-header-id="${e}"]`),t=n==null?void 0:n.querySelector('[data-test-id="table__header-cell-resize-handle-moving-part"]');if(n){const{width:i}=n.getBoundingClientRect();if(t){const a=parseInt(t.style.getPropertyValue("--offset"));return i+a}return i}}return 0}function yu({columnDefinitions:e,enableSelection:n,enableSelectPinned:t,expanding:i}){let a=e;return n&&!i&&(a=[Da(t),...a]),i&&(a=[Ha({...i.expandingColumnDefinition,enableSelection:n}),...a]),a}function jd(e){return function(t,i){const a=e.findIndex(o=>o===dn(t)),r=e.findIndex(o=>o===dn(i));return a-r}}const Eu=e=>Array.isArray(e)&&e.every(n=>typeof n=="string");function Ud(e){return e.reduce((n,t)=>{switch(t.pinned){case"left":n.left.push(t);break;case"right":n.right.push(t);break;default:n.unpinned.push(t)}return n},{left:[],right:[],unpinned:[]})}const Va=e=>`${e}_columnOrder`;function qd(e,n){const t=e.filter(i=>i.pinned!=="left"&&i.pinned!=="right").map(dn);if(n!=null&&n.columnSettings){const i=JSON.parse(localStorage.getItem(Va(n.id))||"null"),a=Eu(i)?i:null;if(a!==null)return[...a,...t.filter(r=>!(a!=null&&a.includes(r)))];localStorage.setItem(Va(n.id),JSON.stringify(t))}return t}const Wd={activationConstraint:{distance:5}};function Xd({tableColumns:e,savedState:n,columnSettings:t}){const[i,a]=y.useState(()=>qd(e,n)),r=y.useCallback(l=>{let h;l instanceof Function?h=l(i):h=l,n!=null&&n.columnSettings&&localStorage.setItem(Va(n.id),JSON.stringify(h)),a(h)},[i,n]),o=y.useCallback(({active:l,over:h})=>{if(!l||!h)return;const b=l.id.toString(),g=h.id.toString();b!==g&&i.includes(g)&&r(E=>{const C=E.indexOf(b),w=E.indexOf(g);return ur(E,C,w)})},[i,r]),u=sc(Ki($o,Wd),Ki(jo,{}),Ki(tr,{})),s=!!(t!=null&&t.enableDrag),c=y.useMemo(()=>s?{collisionDetection:gc,modifiers:[Pd],onDragEnd:o,sensors:u}:{},[s,o,u]);return{columnOrder:i,setColumnOrder:r,dndContextProps:c,enableColumnsOrderSortByDrag:s}}function Su(e){var n;return("id"in e||"accessorKey"in e)&&"columnSettings"in e&&((n=e.columnSettings)==null?void 0:n.mode)!=="hidden"}function Kd(e){var n;return"columnSettings"in e&&e.columnSettings!==void 0?((n=e.columnSettings)==null?void 0:n.mode)!=="defaultFalse":!0}function Yd(e){if("columnSettings"in e&&e.columnSettings!==void 0){const{mode:n}=e.columnSettings;if(!n)return!0;switch(n){case"hidden":return!1;case"defaultTrue":case"defaultFalse":default:return!0}}return!0}function Jd(e){var n;return{id:dn(e),content:{option:(n=e.columnSettings)==null?void 0:n.label},switch:!0,showSwitchIcon:!0}}function sa(e,n){return e.filter(Su).sort(jd(n)).map(Jd)}function Zd({pinnedGroups:e,columnOrder:n,areAllColumnsEnabled:t,t:i}){return[{divider:!1,items:[{divider:!1,items:sa(e.left,n),type:"group"},{divider:!0,items:sa(e.unpinned,n),type:"group"},{divider:!0,items:sa(e.right,n),type:"group"}],selectButtonLabel:i(t?"groupSelectButton.hide":"groupSelectButton.show"),label:i("settingsHeaderLabel"),mode:"primary",type:"group-select"}]}function Qd(e){const n=JSON.parse(localStorage.getItem(e)||"null");return Eu(n)?n:null}function eh(e,n,t){const i=Qd(t);return e.filter(a=>{const r=dn(a);return i&&(n!=null&&n.columnSettings)?!!i.find(o=>o===r):Kd(a)}).map(dn)}function th({columnDefinitions:e,columnsSettings:n,pinnedGroups:t,savedState:i,rowSelection:a,enableSelectPinned:r,expanding:o}){const{t:u}=ii("Table"),s=`${i==null?void 0:i.id}_columnSettings`,c=y.useMemo(()=>e.filter(Yd),[e]),[l,h]=y.useState(()=>eh(c,i,s)),b=y.useCallback(D=>{i!=null&&i.columnSettings&&localStorage.setItem(s,JSON.stringify(D)),h(D)},[s,i==null?void 0:i.columnSettings]),g=!!(n!=null&&n.enableSettingsMenu),E=y.useMemo(()=>g?e.filter(D=>Su(D)?l.includes(dn(D)):!0):e,[e,l,g]),C=!!(a!=null&&a.enable),w=y.useMemo(()=>yu({columnDefinitions:E,enableSelection:C,enableSelectPinned:r,expanding:o}),[r,C,E,o]),S=l.length===c.length,F=y.useCallback(D=>Zd({pinnedGroups:t,columnOrder:D,areAllColumnsEnabled:S,t:u}),[S,t,u]);return{enabledColumns:l,setEnabledColumns:b,enabledColumnsDefinitions:E,enabledTableColumns:w,getColumnsSettings:F,areColumnsSettingsEnabled:g}}function nh({manualPagination:e,pagination:n,maximumAvailablePage:t,onPaginationChange:i,autoResetPageIndex:a}){y.useEffect(()=>{if(a)return;const{pageIndex:r}=n;!e&&r>0&&r>=t&&i({...n,pageIndex:0})},[t,e,i,n,a])}function ih(e){return e?"initialOpen"in e&&typeof e.initialOpen=="boolean"?e.initialOpen:!0:!1}function ah({columnFilters:e}){const[n,t]=y.useState(()=>ih(e)),[i,a]=xn({state:e==null?void 0:e.value,initialState:e==null?void 0:e.defaultValue,onChange:e==null?void 0:e.onChange},void 0),[r,o]=xn({state:e==null?void 0:e.visibleFilters,initialState:[],onChange:e==null?void 0:e.onVisibleFiltersChange},s0),u=y.useMemo(()=>{if(e)return{open:n,onOpenChange:t,...e,value:i,onChange:a,visibleFilters:r,onVisibleFiltersChange:o}},[e,n,i,a,r,o]);return{filter:i,setFilter:a,patchedFilter:u,setFilterVisibility:o}}const wu=";",rh=/^\[.+]$/,oh=/(\w+)\[([^\]]+)]([^;]+)?/g,qr={filter:"filter",sort:"sort"},uh={offset:"offset",limit:"limit"},sh=["in","ni"];var ch=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(e);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]]);return t};function lh(e){return rh.test(e)}function dh(e){return e.reduce((n,t,i)=>{const a=i!==0&&i!==e.length?wu:"",{field:r,direction:o}=t;return`${n}${a}${r}[${o}]`},"")}function hh(e){return e.reduce((n,t,i)=>{const a=i!==0&&i!==e.length?wu:"",{field:r,condition:o,value:u}=t;let s=u;return sh.includes(o)&&Array.isArray(u)&&(s=`[${u.join(",")}]`),`${n}${a}${r}[${o}]${s}`},"")}function xu(e){return typeof e=="number"?!isNaN(e):typeof e=="string"||Array.isArray(e)?e.length!==0:e!==void 0}function gh(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function fh(e){var n,t;const{pagination:i}=e,a=ch(e,["pagination"]),r=Object.assign(Object.assign({},i),a);!((n=e.filter)===null||n===void 0)&&n.length&&(r.filter=hh(e.filter)),!((t=e.sort)===null||t===void 0)&&t.length&&(r.sort=dh(e.sort));const o=Object.entries(r).reduce((u,[s,c])=>{const l=u.length?"&":"";return`${u}${l}${s}=${c}`},"");return encodeURIComponent(o)}function ph(e){return Object.values(uh).includes(e)}function ca(e){if(lh(e))try{return JSON.parse(e)}catch{return e.replace(/[[\]]/g,"").split(",").map(i=>i.trim())}const n=Number(e);return isNaN(n)?e:n}function Au(e){return Object.keys(e).reduce((n,t)=>{const i=t;let a=e[i];return xu(a)&&(gh(a)&&(a=Au(a)),n[i]=a),n},{})}function mh(e){const n=e||{};function t(){return Au(n)}function i(){return fh(t())}return e!==void 0?{toObject:t,toString:i}:{filter(a){return n.filter||(n.filter=[]),n.filter.push(a),this},sort(a){return n.sort||(n.sort=[]),n.sort.push(a),this},pagination(a){return n.pagination=a,this},search(a){return n.search=a,this},toObject:t,toString:i}}function bh(e){return e.length?decodeURIComponent(e).split("&").reduce((i,a)=>{const[r,o]=a.split("=");if(xu(o)){const u=Array.from(o.matchAll(oh),([,s,c,l])=>[s,c,l]);if(r===qr.sort)return u.length&&(i[r]=u.map(([s,c])=>({field:s,direction:c}))),i;if(r===qr.filter)return u.length&&(i[r]=u.map(([s,c,l])=>({field:s,condition:c,value:ca(l)})).filter(({value:s})=>s!==void 0)),i;if(ph(r))return i.pagination||(i.pagination={}),i.pagination[r]=ca(o),i;i[r]=ca(o)}return i},{}):void 0}const kh=e=>({limit:e.pageSize,offset:e.pageSize*e.pageIndex}),vh=e=>e.map(n=>({field:n.id,direction:n.desc?"d":"a"})),Wr=e=>e instanceof Date?e.toISOString():e,Ch=e=>{if(e)return Object.entries(e).filter(([n,t])=>t!==void 0).map(([n,t])=>Array.isArray(t)?{value:t.map(Wr),condition:"in",field:n}:{value:Wr(t),condition:"eq",field:n})},yh=e=>mh({pagination:kh(e.pagination),search:e.search,sort:vh(e.sorting),filter:Ch(e.filter)}).toString(),Eh=e=>!e||!e.offset||!e.limit?{pageSize:Oi,pageIndex:0}:{pageSize:e.limit||Oi,pageIndex:Math.floor(e.offset/e.limit)},Sh=(e=[])=>e.map(n=>({id:n.field,desc:n.direction==="d"})),wh=e=>{if(e)return Object.fromEntries(e.map(n=>[n.field,n.value]))},xh=e=>{var t;const n=bh(e);return{pagination:Eh(n==null?void 0:n.pagination),search:((t=n==null?void 0:n.search)==null?void 0:t.toString())||"",sorting:Sh(n==null?void 0:n.sort),filter:wh(n==null?void 0:n.filter)}},Ah=e=>typeof(e==null?void 0:e.pageSize)=="number"&&typeof(e==null?void 0:e.pageIndex)=="number",_h=e=>e==null?void 0:e.every(n=>typeof(n==null?void 0:n.id)=="string"&&typeof(n==null?void 0:n.desc)=="boolean"),Gh=(e,n)=>typeof e=="object"&&e!==null&&Object.keys(e).every(t=>!!n.find(i=>i.id===t)),Oh=({options:e,filterSettings:n})=>{const t=y.useCallback(c=>{const l=Ah(c==null?void 0:c.pagination),h=_h(c==null?void 0:c.sorting),b=typeof(c==null?void 0:c.search)=="string",g=!!(n&&Gh(c.filter,n));return l&&h&&b&&g},[n]),i=e==null?void 0:e.filterQueryKey,a=e!=null&&e.id?`${e==null?void 0:e.id}_filter`:"",r=y.useMemo(()=>i?{filterQueryKey:i,filterLocalStorageKey:a,validateData:t}:void 0,[i,t,a]),{getDefaultFilter:o,setDataToStorages:u}=$s({options:r,serializer:yh,parser:xh});return{defaultFilter:y.useMemo(o,[o]),setDataToStorages:u}};function We({data:e,rowPinning:n={top:[]},columnDefinitions:t,keepPinnedRows:i=!1,copyPinnedRows:a=!1,enableSelectPinned:r=!1,rowSelection:o,search:u,sorting:s,columnFilters:c,pagination:l,className:h,onRowClick:b,onRefresh:g,pageSize:E=Oi,pageCount:C,loading:w=!1,infiniteLoading:S=!1,outline:F=!1,moreActions:D,exportSettings:P,dataFiltered:R,dataError:q,noDataState:O,noResultsState:M,errorDataState:H,suppressToolbar:U=!1,suppressSearch:B=!1,toolbarAfter:Y,suppressPagination:Z=!1,manualSorting:te=!1,manualPagination:ce=!1,manualFiltering:de=!1,autoResetPageIndex:oe=!1,scrollRef:ie,scrollContainerRef:ue,getRowId:mt,enableFuzzySearch:Ye,savedState:re,expanding:fe,bulkActions:Pe,rowAutoHeight:Be,columnsSettings:be,...bt}){const{setDataToStorages:Je,defaultFilter:ee}=Oh({options:re,filterSettings:c==null?void 0:c.filters}),[Q,Ve]=xn(u,""),[ze,Gt]=xn(o,c0),Te=y.useMemo(()=>({pageIndex:0,pageSize:E}),[E]),[at,rt]=xn(s,u0),[kt,vt]=xn(l,Te),{filter:Rt,patchedFilter:ot,setFilter:Ze,setFilterVisibility:Ht}=ah({columnFilters:c});y.useEffect(()=>{Je({pagination:kt,sorting:at,filter:Rt,search:Q||""})},[kt,at,Rt,Je,Q]),Is(()=>{ee&&(ee.pagination&&vt(ee.pagination),ee.search&&Ve(ee.search),ee.sorting&&rt(ee.sorting),ee.filter&&Ze(Fd(ee.filter)),ee.filter&&Ht(Object.keys(ee.filter)))},[ee]);const ut=!!(o!=null&&o.enable),_e=y.useMemo(()=>yu({columnDefinitions:t,enableSelection:ut,enableSelectPinned:r,expanding:fe}),[t,ut,r,fe]),Ct=y.useMemo(()=>Ud(_e),[_e]),{enabledColumns:an,setEnabledColumns:st,getColumnsSettings:Ge,enabledTableColumns:Tt,enabledColumnsDefinitions:rn,areColumnsSettingsEnabled:$e}=th({columnDefinitions:t,pinnedGroups:Ct,savedState:re,columnsSettings:be,rowSelection:o,enableSelectPinned:r,expanding:fe}),{columnOrder:Ie,setColumnOrder:fn,dndContextProps:pn,enableColumnsOrderSortByDrag:Qe}=Xd({tableColumns:_e,savedState:re,columnSettings:be}),{t:mn}=ii("Table"),on=S||ce,un=y.useMemo(()=>Ge(Ie),[Ie,Ge]),sn=y.useMemo(()=>{const p=v=>v.reduce((_,N)=>{const x=Vr(N);return x&&_.push(x),_},[]);return{left:p(Ct.left),right:p(Ct.right)}},[Ct]),bn=y.useCallback(p=>{const v=p.getParentRow(),_=v?v.getCanSelect():!0;let N=!0;return(o==null?void 0:o.enable)!==void 0&&(N=typeof o.enable=="boolean"?o.enable:o.enable(p)),_&&N},[o]),ne=ou({data:e,columns:Tt,state:{columnPinning:sn,columnOrder:Qe?Ie:void 0,globalFilter:Q,rowSelection:ze,sorting:at,pagination:kt,rowPinning:fe?{top:[]}:n},pageCount:C,defaultColumn:{enableSorting:!1,enableResizing:!1,minSize:40,cell:p=>Be?p.getValue():L.jsx(ti,{text:String(p.getValue()),maxLines:1})},onColumnOrderChange:Qe?fn:void 0,manualSorting:te,manualPagination:on,manualFiltering:de,globalFilterFn:Ye?Od:"includesString",onGlobalFilterChange:Ve,getRowId:mt,onRowSelectionChange:Gt,enableGrouping:!0,enableRowSelection:bn,enableMultiRowSelection:(o==null?void 0:o.enable)&&(o==null?void 0:o.multiRow),enableFilters:!0,getSubRows:fe==null?void 0:fe.getSubRows,filterFromLeafRows:!!fe,enableSubRowSelection:!0,getFilteredRowModel:e0(),getExpandedRowModel:n0(),enableColumnResizing:!0,paginateExpandedRows:on,enableSorting:!0,enableMultiSort:!0,onSortingChange:rt,getSortedRowModel:t0(),onPaginationChange:vt,autoResetPageIndex:oe,getPaginationRowModel:i0(),getCoreRowModel:au(),columnResizeMode:"onEnd",keepPinnedRows:i});y.useEffect(()=>{fe||ne.toggleAllRowsExpanded(!1)},[fe,ne]);const{loadingTable:ke}=Ba({pageSize:Math.min(Math.max(E,5),Oi),columnDefinitions:rn,columnPinning:sn}),ve=y.useCallback(()=>{ne.resetRowSelection(),g==null||g()},[g,ne]),Oe=y.useMemo(()=>ut?Pe==null?void 0:Pe.map(p=>({...p,onClick:()=>{var v;return(v=p.onClick)==null?void 0:v.call(p,ne.getState().rowSelection,ne.resetRowSelection)}})):void 0,[Pe,ut,ne]),ct=y.useCallback(()=>{if(!w&&!r&&ne.getTopRows().length){const p=ne.getCenterRows(),v=ne.getIsSomePageRowsSelected();if(p.every(N=>N.getIsSelected())){ne.resetRowSelection();return}p.forEach(N=>N.toggleSelected(v?!0:void 0));return}if(!w&&(o!=null&&o.multiRow)){ne.toggleAllPageRowsSelected();return}},[w,o==null?void 0:o.multiRow,ne,r]),Fe=y.useRef(),Ce=ne.getFlatHeaders(),Se=y.useMemo(()=>{var x;const p=ne._getColumnDefs(),v={},_={},N=Ce.findIndex(({column:G})=>G.getIsResizing());for(let G=0;G<Ce.length;G++){const A=Ce[G],{sizeKey:I,flexKey:V}=zd(A.id),j=p.find(T=>Vr(A)===T.id);if(A.id===ui.Status&&!(j!=null&&j.header)&&!(j!=null&&j.enableSorting))v[I]="var(--size-table-cell-status-indicator-horizontal)",v[V]="100%";else{const T=j==null?void 0:j.size;let z=T?`${T}px`:"100%";const J=(x=Fe.current)==null?void 0:x[I],le=(j==null?void 0:j.enableResizing)&&(re==null?void 0:re.id)&&(re==null?void 0:re.resize)!==!1;if(le){const pe=Bd({id:re.id,columnId:A.id});pe&&(z=pe)}let se=z;if(A.column.getCanResize()){const pe=A.getSize(),cn=A.column.columnDef.size;if(pe!==cn||G<N&&J==="100%"){const jt=J==="100%"?$d(A.id):pe;_[A.id]=jt,se=`${jt}px`}}le&&Vd({id:re.id,columnId:A.id,size:se}),v[I]=se,v[V]=se==="100%"?"unset":"0"}}return{vars:v,realSizes:_}},[ne.getState().columnSizingInfo.isResizingColumn,Ce,ne.getTotalSize()]);y.useEffect(()=>{Object.keys(Se.realSizes).length&&ne.setColumnSizing(p=>({...p,...Se.realSizes})),Fe.current=Se.vars},[Se,ne]);const yt=ne.getRowModel().rows,me=ne.getCenterRows(),et=ne.getFilteredRowModel().rows,Ne=et.map(p=>p.id),je=ne.getTopRows(),Ot=ke.getRowModel().rows,tt=ne.getState().globalFilter?je.filter(p=>Ne.includes(p.id)):je,d=a?yt:me,k=pd({noDataState:O,noResultsState:M,errorDataState:H});nh({manualPagination:on,maximumAvailablePage:C||et.length/kt.pageSize,pagination:kt,onPaginationChange:vt,autoResetPageIndex:oe});const{updateCellMap:f}=d0(ne),m=!U;return L.jsxs("div",{className:gn(qt.wrapper,h),...Ms(bt),children:[m&&L.jsx("div",{className:qt.header,children:L.jsx(_s,{search:B?void 0:{value:Q,onChange:Ve,loading:u==null?void 0:u.loading,placeholder:(u==null?void 0:u.placeholder)||mn("searchPlaceholder")},className:qt.toolbar,onRefresh:g?ve:void 0,bulkActions:Oe,selectionMode:o!=null&&o.multiRow?"multiple":"single",checked:ne.getIsAllPageRowsSelected(),indeterminate:ne.getIsSomePageRowsSelected(),onCheck:ut?ct:void 0,outline:F,after:Y||P||$e?L.jsxs(L.Fragment,{children:[Y,P&&L.jsx(Ta,{settings:P,columnDefinitions:t,data:e,topRows:tt,centerRows:d}),$e&&L.jsx(Pa,{columnsSettings:un,enabledColumns:an,setEnabledColumns:st})]}):void 0,moreActions:D,filterRow:ot,"data-test-id":Re.toolbar})}),L.jsxs(Ps,{size:"s",className:qt.table,ref:ue,"data-outline":F||void 0,children:[L.jsx("div",{className:qt.tableContent,style:Se.vars,children:L.jsx(uu.Provider,{value:{updateCellMap:f},children:L.jsx(ll,{...pn,children:L.jsx(pu.Provider,{value:{table:ne},children:(!S||!e.length)&&w?L.jsxs(br,{loading:!0,children:[L.jsx(Li,{rowAutoHeight:Be,columnOrder:Ie}),Ot.map(p=>L.jsx(wn,{row:p,rowAutoHeight:Be,columnOrder:Ie},p.id))]}):L.jsxs(L.Fragment,{children:[d.length||tt.length?L.jsx(Li,{rowAutoHeight:Be,columnOrder:Ie,enableColumnsOrderSortByDrag:Qe}):null,tt.length?L.jsx("div",{className:qt.topRowWrapper,children:tt.map(p=>L.jsx(wn,{row:p,onRowClick:b,rowAutoHeight:Be,columnOrder:Ie,enableColumnsOrderSortByDrag:Qe},p.id))}):null,d.map(p=>L.jsx(wn,{row:p,onRowClick:b,rowAutoHeight:Be,columnOrder:Ie,enableColumnsOrderSortByDrag:Qe},p.id)),e.length>0&&S&&w&&!q&&L.jsx(br,{loading:!0,children:Ot.slice(0,3).map(p=>L.jsx(wn,{row:p,columnOrder:Ie,enableColumnsOrderSortByDrag:Qe},p.id))}),L.jsx(Ia,{emptyStates:k,dataError:q,dataFiltered:R||!!ne.getState().globalFilter,tableRowsLength:yt.length+tt.length})]})})})})}),L.jsx("div",{className:qt.scrollStub,ref:ie})]}),!S&&!Z&&L.jsx(Ma,{table:ne,options:l==null?void 0:l.options,optionsLabel:l==null?void 0:l.optionsLabel,pageCount:C,optionsRender:l==null?void 0:l.optionsRender})]})}We.getStatusColumnDef=La;We.statusAppearances=cr;We.getRowActionsColumnDef=Ga;try{We.displayName="Table",We.__docgenInfo={description:"Компонент таблицы",displayName:"Table",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Данные для отрисовки",name:"data",required:!0,type:{name:"TData[]"}},columnDefinitions:{defaultValue:null,description:"Определение внешнего вида и функционала колонок",name:"columnDefinitions",required:!0,type:{name:"ColumnDefinition<TData>[]"}},keepPinnedRows:{defaultValue:{value:"false"},description:"Параметр отвечает за отображение закрепленных строк на всех страницах таблицы",name:"keepPinnedRows",required:!1,type:{name:"boolean"}},copyPinnedRows:{defaultValue:{value:"false"},description:"Параметр отвечает за сохранение закрепленных строк в теле таблицы",name:"copyPinnedRows",required:!1,type:{name:"boolean"}},enableSelectPinned:{defaultValue:{value:"false"},description:"Параметр отвечает за чекбокс выбора закрепленных строк",name:"enableSelectPinned",required:!1,type:{name:"boolean"}},sorting:{defaultValue:null,description:`Параметры отвечают за возможность сортировки, их стоит использовать если нужно отслеживать состояние <br>
<strong>initialState</strong>: Начальное состояние сортировки <br>
<strong>state</strong>: Состояние сортировки, жестко устанавливаемое снаружи <br>
<strong>onChange</strong>: Колбэк на изменение сортировки`,name:"sorting",required:!1,type:{name:"{ initialState?: SortingState; state?: SortingState; onChange?(state: SortingState): void; } | undefined"}},columnsSettings:{defaultValue:null,description:`Параметры отвечают за настройки колонок <br>
<strong>enableDrag</strong>: Включение сортировки порядка столбцов вручную перетаскиванием <br>
<strong>enableSettingsMenu</strong>: Включение настроек показа колонок <br>`,name:"columnsSettings",required:!1,type:{name:"{ enableDrag?: boolean; enableSettingsMenu?: boolean; } | undefined"}},expanding:{defaultValue:null,description:"Параметр отвечает за общие настройки раскрывающихся строк",name:"expanding",required:!1,type:{name:"{ getSubRows: (element: TData) => TData[]; expandingColumnDefinition: TreeColumnDefinitionProps<TData>; }"}},rowSelection:{defaultValue:null,description:`Параметры отвечают за возможность выбора строк <br>
<strong>initialState</strong>: Начальное состояние выбора строк <br>
<strong>state</strong>: Состояние выбора строк, жестко устанавливаемое снаружи <br>
<strong>enable</strong>: Колбэк определяющий можно ли выбрать строку <br>
<strong>multiRow</strong>: Мульти-выбор строк (включен по-умолчанию, когда включается выбор) <br>
<strong>onChange</strong>: Колбэк на выбор строк`,name:"rowSelection",required:!1,type:{name:"{ initialState?: RowSelectionState; state?: RowSelectionState; enable?: boolean | ((row: Row<TData>) => boolean) | undefined; multiRow?: boolean | undefined; onChange?(state: RowSelectionState): void; } | undefined"}},search:{defaultValue:{value:`'Search'<br>
<strong>loading</strong>: Состояние загрузки в строке поиска <br>
<strong>onChange</strong>: Колбэк на изменение данных в строке поиска`},description:`Параметры отвечают за глобальный поиск в таблице <br>
<strong>initialState</strong>: Начальное состояние строки поиска <br>
<strong>state</strong>: Состояние строки поиска, жестко устанавливаемое снаружи <br>
<strong>placeholder</strong>: Placeholder строки поиска`,name:"search",required:!1,type:{name:"{ initialState?: string; state?: string; placeholder?: string | undefined; loading?: boolean | undefined; onChange?(value: string): void; } | undefined"}},enableFuzzySearch:{defaultValue:null,description:"Включить нечеткий поиск",name:"enableFuzzySearch",required:!1,type:{name:"boolean"}},rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},pageSize:{defaultValue:{value:"10"},description:"Максимальное кол-во строк на страницу",name:"pageSize",required:!1,type:{name:"number"}},onRowClick:{defaultValue:null,description:"Колбэк клика по строке",name:"onRowClick",required:!1,type:{name:"RowClickHandler<TData>"}},className:{defaultValue:null,description:"CSS-класс",name:"className",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},onRefresh:{defaultValue:null,description:"Колбек обновления данных",name:"onRefresh",required:!1,type:{name:"(() => void)"}},outline:{defaultValue:{value:"false"},description:"Внешний бордер для тулбара и таблицы",name:"outline",required:!1,type:{name:"boolean"}},columnFilters:{defaultValue:null,description:"Фильтры",name:"columnFilters",required:!1,type:{name:'(Omit<ChipChoiceRowProps<TFilters>, "data-test-id" | "size"> & { open?: boolean; onOpenChange?(isOpen: boolean): void; } & { ...; })'}},dataFiltered:{defaultValue:null,description:"Флаг, показывающий что данные были отфильтрованы при пустых данных",name:"dataFiltered",required:!1,type:{name:"boolean"}},dataError:{defaultValue:null,description:"Флаг, показывающий что произошла ошибка запроса при пустых данных",name:"dataError",required:!1,type:{name:"boolean"}},noDataState:{defaultValue:null,description:"Экран при отстутствии данных",name:"noDataState",required:!1,type:{name:"EmptyStateProps"}},noResultsState:{defaultValue:null,description:"Экран при отстутствии результатов поиска или фильтров",name:"noResultsState",required:!1,type:{name:"EmptyStateProps"}},errorDataState:{defaultValue:null,description:"Экран при ошибке запроса",name:"errorDataState",required:!1,type:{name:"EmptyStateProps"}},suppressToolbar:{defaultValue:{value:"false"},description:"Отключение тулбара",name:"suppressToolbar",required:!1,type:{name:"boolean"}},suppressSearch:{defaultValue:{value:"false"},description:"Отключение поиска",name:"suppressSearch",required:!1,type:{name:"boolean"}},bulkActions:{defaultValue:null,description:"Список действия для массовых операций",name:"bulkActions",required:!1,type:{name:"BulkAction[]"}},moreActions:{defaultValue:null,description:"Элементы выпадающего списка кнопки с действиями",name:"moreActions",required:!1,type:{name:"Action[]"}},toolbarAfter:{defaultValue:null,description:"Дополнительный слот в `Toolbar` после строки поиска",name:"toolbarAfter",required:!1,type:{name:"ReactNode"}},exportSettings:{defaultValue:null,description:"Настройки экспорта в тулбаре",name:"exportSettings",required:!1,type:{name:"{ fileName: string; filterData?: boolean; exportToCSV?(args: ExportProps<TData>): void; exportToXLSX?(args: ExportProps<TData>): void; }"}},manualSorting:{defaultValue:{value:"false"},description:"",name:"manualSorting",required:!1,type:{name:"boolean"}},manualFiltering:{defaultValue:{value:"false"},description:"",name:"manualFiltering",required:!1,type:{name:"boolean"}},getRowId:{defaultValue:null,description:"Дополнительная функция используется для получения уникального идентификатора для любой заданной строки",name:"getRowId",required:!1,type:{name:"((originalRow: TData, index: number, parent?: Row<TData>) => string)"}},scrollRef:{defaultValue:null,description:"Ссылка на элемент, обозначающий самый конец прокручиваемого списка",name:"scrollRef",required:!1,type:{name:"RefObject<HTMLElement>"}},scrollContainerRef:{defaultValue:null,description:"Ссылка на контейнер, который скроллится",name:"scrollContainerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},rowPinning:{defaultValue:{value:`{
    top: [],
  }`},description:"Определение какие строки должны быть закреплены в таблице",name:"rowPinning",required:!1,type:{name:'Pick<RowPinningState, "top">'}},savedState:{defaultValue:null,description:`Конфиг для сохранения состояния в localStorage. <br>
Поле id должно быть уникальным для разных таблиц в рамках приложения. <br>
Для корректной работы необходимо наличие id в конфиге columnDefinitions`,name:"savedState",required:!1,type:{name:"{ id: string; filterQueryKey?: string; resize?: boolean; columnSettings?: boolean | undefined; } | undefined"}},pagination:{defaultValue:{value:`'Rows volume: ' <br>
<strong>onChange</strong>: Колбэк на изменение пагинации`},description:`Параметры отвечают за пагинацию в таблице <br>
<strong>state</strong>: Состояние строки поиска, жестко устанавливаемое снаружи <br>
<strong>options</strong>: Варианты в выпадающем селекторе для установки кол-ва строк на страницу <br>
<strong>optionsLabel</strong>: Текст для селектора кол-ва строк на страницу`,name:"pagination",required:!1,type:{name:"{ state?: PaginationState; options?: number[]; optionsLabel?: string | undefined; onChange?(state: PaginationState): void; optionsRender?(value: string | number, idx: number): string | number; } | undefined"}},autoResetPageIndex:{defaultValue:{value:"false"},description:`Автоматический сброс пагинации к первой странице при изменении данных или состояния
(e.g фильтры, сортировки, и т.д)`,name:"autoResetPageIndex",required:!1,type:{name:"boolean"}},pageCount:{defaultValue:null,description:"Кол-во страниц (используется для внешнего управления)",name:"pageCount",required:!1,type:{name:"number"}},infiniteLoading:{defaultValue:{value:"false"},description:'Режим работы "бесконечной" загрузки',name:"infiniteLoading",required:!1,type:{name:"boolean"}},suppressPagination:{defaultValue:{value:"false"},description:"Отключение пагинации",name:"suppressPagination",required:!1,type:{name:"boolean"}},manualPagination:{defaultValue:null,description:"",name:"manualPagination",required:!1,type:{name:"boolean"}}}}}catch{}try{We.getStatusColumnDef.displayName="Table.getStatusColumnDef",We.getStatusColumnDef.__docgenInfo={description:"Вспомогательная функция для создания ячейки со статусом",displayName:"Table.getStatusColumnDef",props:{accessorKey:{defaultValue:null,description:"Имя ключа соответствующее полю в data",name:"accessorKey",required:!0,type:{name:"string"}},mapStatusToAppearance:{defaultValue:null,description:"Маппинг значений статуса на цвета",name:"mapStatusToAppearance",required:!0,type:{name:"MapStatusToAppearanceFnType"}},enableSorting:{defaultValue:{value:"true"},description:"Включение/выключение сортировки",name:"enableSorting",required:!1,type:{name:"boolean"}},renderDescription:{defaultValue:null,description:"Функция для отрисовки текста, если не передана, то будет отрисован только индикатор статуса",name:"renderDescription",required:!1,type:{name:"((cellValue: string, row: TData) => string)"}},size:{defaultValue:null,description:"Размер ячейки",name:"size",required:!1,type:{name:"number"}},minSize:{defaultValue:null,description:"",name:"minSize",required:!1,type:{name:"number"}},maxSize:{defaultValue:null,description:"",name:"maxSize",required:!1,type:{name:"number"}},header:{defaultValue:null,description:"Заголовок колонки",name:"header",required:!1,type:{name:"string | (string & ReactElement<any, string | JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | ... 10 more ..."}},enableResizing:{defaultValue:null,description:"Включение/выключение ресайза колонки",name:"enableResizing",required:!1,type:{name:"boolean"}}}}}catch{}try{We.getRowActionsColumnDef.displayName="Table.getRowActionsColumnDef",We.getRowActionsColumnDef.__docgenInfo={description:"Вспомогательная функция для создания ячейки с дополнительными действиями у строки",displayName:"Table.getRowActionsColumnDef",props:{actionsGenerator:{defaultValue:null,description:"Действия для строки",name:"actionsGenerator",required:!0,type:{name:"ActionsGenerator<TData>"}},pinned:{defaultValue:null,description:"Закрепление колонки справа в таблице",name:"pinned",required:!1,type:{name:"boolean"}}}}}catch{}/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */var mi=function(n){return String.fromCharCode(n)},ht="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function Xr(e){for(var n="",t=0,i=0,a=0,r=0,o=0,u=0,s=0,c=0;c<e.length;)t=e.charCodeAt(c++),r=t>>2,i=e.charCodeAt(c++),o=(t&3)<<4|i>>4,a=e.charCodeAt(c++),u=(i&15)<<2|a>>6,s=a&63,isNaN(i)?u=s=64:isNaN(a)&&(s=64),n+=ht.charAt(r)+ht.charAt(o)+ht.charAt(u)+ht.charAt(s);return n}function Fh(e){for(var n="",t=0,i=0,a=0,r=0,o=0,u=0,s=0,c=0;c<e.length;)t=e[c++],r=t>>2,i=e[c++],o=(t&3)<<4|i>>4,a=e[c++],u=(i&15)<<2|a>>6,s=a&63,isNaN(i)?u=s=64:isNaN(a)&&(s=64),n+=ht.charAt(r)+ht.charAt(o)+ht.charAt(u)+ht.charAt(s);return n}function Kr(e){var n="",t=0,i=0,a=0,r=0,o=0,u=0,s=0;if(e.slice(0,5)=="data:"){var c=e.slice(0,1024).indexOf(";base64,");c>-1&&(e=e.slice(c+8))}e=e.replace(/[^\w\+\/\=]/g,"");for(var c=0;c<e.length;)r=ht.indexOf(e.charAt(c++)),o=ht.indexOf(e.charAt(c++)),t=r<<2|o>>4,n+=String.fromCharCode(t),u=ht.indexOf(e.charAt(c++)),i=(o&15)<<4|u>>2,u!==64&&(n+=String.fromCharCode(i)),s=ht.indexOf(e.charAt(c++)),a=(u&3)<<6|s,s!==64&&(n+=String.fromCharCode(a));return n}var he=function(){return typeof Buffer<"u"&&typeof process<"u"&&typeof process.versions<"u"&&!!process.versions.node}(),tn=function(){if(typeof Buffer<"u"){var e=!Buffer.from;if(!e)try{Buffer.from("foo","utf8")}catch{e=!0}return e?function(n,t){return t?new Buffer(n,t):new Buffer(n)}:Buffer.from.bind(Buffer)}return function(){}}(),Ri=function(){if(typeof Buffer>"u")return!1;var e=tn([65,0]);if(!e)return!1;var n=e.toString("utf16le");return n.length==1}();function Fn(e){return he?Buffer.alloc?Buffer.alloc(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}function Yr(e){return he?Buffer.allocUnsafe?Buffer.allocUnsafe(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}var Kt=function(n){return he?tn(n,"binary"):n.split("").map(function(t){return t.charCodeAt(0)&255})};function lr(e){if(typeof ArrayBuffer>"u")return Kt(e);for(var n=new ArrayBuffer(e.length),t=new Uint8Array(n),i=0;i!=e.length;++i)t[i]=e.charCodeAt(i)&255;return n}function Nh(e){if(Array.isArray(e))return e.map(function(i){return String.fromCharCode(i)}).join("");for(var n=[],t=0;t<e.length;++t)n[t]=String.fromCharCode(e[t]);return n.join("")}function Dh(e){if(typeof Uint8Array>"u")throw new Error("Unsupported");return new Uint8Array(e)}var yn=he?function(e){return Buffer.concat(e.map(function(n){return Buffer.isBuffer(n)?n:tn(n)}))}:function(e){if(typeof Uint8Array<"u"){var n=0,t=0;for(n=0;n<e.length;++n)t+=e[n].length;var i=new Uint8Array(t),a=0;for(n=0,t=0;n<e.length;t+=a,++n)a=e[n].length,e[n]instanceof Uint8Array?i.set(e[n],t):typeof e[n]=="string"?i.set(new Uint8Array(Kt(e[n])),t):i.set(new Uint8Array(e[n]),t);return i}return[].concat.apply([],e.map(function(r){return Array.isArray(r)?r:[].slice.call(r)}))};function Lh(e){for(var n=[],t=0,i=e.length+250,a=Fn(e.length+255),r=0;r<e.length;++r){var o=e.charCodeAt(r);if(o<128)a[t++]=o;else if(o<2048)a[t++]=192|o>>6&31,a[t++]=128|o&63;else if(o>=55296&&o<57344){o=(o&1023)+64;var u=e.charCodeAt(++r)&1023;a[t++]=240|o>>8&7,a[t++]=128|o>>2&63,a[t++]=128|u>>6&15|(o&3)<<4,a[t++]=128|u&63}else a[t++]=224|o>>12&15,a[t++]=128|o>>6&63,a[t++]=128|o&63;t>i&&(n.push(a.slice(0,t)),t=0,a=Fn(65535),i=65530)}return n.push(a.slice(0,t)),yn(n)}var Wn=/\u0000/g,bi=/[\u0001-\u0006]/g;function _n(e){for(var n="",t=e.length-1;t>=0;)n+=e.charAt(t--);return n}function St(e,n){var t=""+e;return t.length>=n?t:He("0",n-t.length)+t}function dr(e,n){var t=""+e;return t.length>=n?t:He(" ",n-t.length)+t}function Hi(e,n){var t=""+e;return t.length>=n?t:t+He(" ",n-t.length)}function Rh(e,n){var t=""+Math.round(e);return t.length>=n?t:He("0",n-t.length)+t}function Hh(e,n){var t=""+e;return t.length>=n?t:He("0",n-t.length)+t}var Jr=Math.pow(2,32);function kn(e,n){if(e>Jr||e<-Jr)return Rh(e,n);var t=Math.round(e);return Hh(t,n)}function Ti(e,n){return n=n||0,e.length>=7+n&&(e.charCodeAt(n)|32)===103&&(e.charCodeAt(n+1)|32)===101&&(e.charCodeAt(n+2)|32)===110&&(e.charCodeAt(n+3)|32)===101&&(e.charCodeAt(n+4)|32)===114&&(e.charCodeAt(n+5)|32)===97&&(e.charCodeAt(n+6)|32)===108}var Zr=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]],la=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]];function Th(e){return e||(e={}),e[0]="General",e[1]="0",e[2]="0.00",e[3]="#,##0",e[4]="#,##0.00",e[9]="0%",e[10]="0.00%",e[11]="0.00E+00",e[12]="# ?/?",e[13]="# ??/??",e[14]="m/d/yy",e[15]="d-mmm-yy",e[16]="d-mmm",e[17]="mmm-yy",e[18]="h:mm AM/PM",e[19]="h:mm:ss AM/PM",e[20]="h:mm",e[21]="h:mm:ss",e[22]="m/d/yy h:mm",e[37]="#,##0 ;(#,##0)",e[38]="#,##0 ;[Red](#,##0)",e[39]="#,##0.00;(#,##0.00)",e[40]="#,##0.00;[Red](#,##0.00)",e[45]="mm:ss",e[46]="[h]:mm:ss",e[47]="mmss.0",e[48]="##0.0E+0",e[49]="@",e[56]='"上午/下午 "hh"時"mm"分"ss"秒 "',e}var At={0:"General",1:"0",2:"0.00",3:"#,##0",4:"#,##0.00",9:"0%",10:"0.00%",11:"0.00E+00",12:"# ?/?",13:"# ??/??",14:"m/d/yy",15:"d-mmm-yy",16:"d-mmm",17:"mmm-yy",18:"h:mm AM/PM",19:"h:mm:ss AM/PM",20:"h:mm",21:"h:mm:ss",22:"m/d/yy h:mm",37:"#,##0 ;(#,##0)",38:"#,##0 ;[Red](#,##0)",39:"#,##0.00;(#,##0.00)",40:"#,##0.00;[Red](#,##0.00)",45:"mm:ss",46:"[h]:mm:ss",47:"mmss.0",48:"##0.0E+0",49:"@",56:'"上午/下午 "hh"時"mm"分"ss"秒 "'},Qr={5:37,6:38,7:39,8:40,23:0,24:0,25:0,26:0,27:14,28:14,29:14,30:14,31:14,50:14,51:14,52:14,53:14,54:14,55:14,56:14,57:14,58:14,59:1,60:2,61:3,62:4,67:9,68:10,69:12,70:13,71:14,72:14,73:15,74:16,75:17,76:20,77:21,78:22,79:45,80:46,81:47,82:0},Ih={5:'"$"#,##0_);\\("$"#,##0\\)',63:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',41:'_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'};function Ii(e,n,t){for(var i=e<0?-1:1,a=e*i,r=0,o=1,u=0,s=1,c=0,l=0,h=Math.floor(a);c<n&&(h=Math.floor(a),u=h*o+r,l=h*c+s,!(a-h<5e-8));)a=1/(a-h),r=o,o=u,s=c,c=l;if(l>n&&(c>n?(l=s,u=r):(l=c,u=o)),!t)return[0,i*u,l];var b=Math.floor(i*u/l);return[b,i*u-b*l,l]}function Mh(e){var n=e.toPrecision(16);if(n.indexOf("e")>-1){var t=n.slice(0,n.indexOf("e"));return t=t.indexOf(".")>-1?t.slice(0,t.slice(0,2)=="0."?17:16):t.slice(0,15)+He("0",t.length-15),t+n.slice(n.indexOf("e"))}var i=n.indexOf(".")>-1?n.slice(0,n.slice(0,2)=="0."?17:16):n.slice(0,15)+He("0",n.length-15);return Number(i)}function vn(e,n,t){if(e>2958465||e<0)return null;e=Mh(e);var i=e|0,a=Math.floor(86400*(e-i)),r=0,o=[],u={D:i,T:a,u:86400*(e-i)-a,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(u.u)<1e-6&&(u.u=0),n&&n.date1904&&(i+=1462),u.u>.9999&&(u.u=0,++a==86400&&(u.T=a=0,++i,++u.D)),i===60)o=t?[1317,10,29]:[1900,2,29],r=3;else if(i===0)o=t?[1317,8,29]:[1900,1,0],r=6;else{i>60&&--i;var s=new Date(1900,0,1);s.setDate(s.getDate()+i-1),o=[s.getFullYear(),s.getMonth()+1,s.getDate()],r=s.getDay(),i<60&&(r=(r+6)%7),t&&(r=$h(s,o))}return u.y=o[0],u.m=o[1],u.d=o[2],u.S=a%60,a=Math.floor(a/60),u.M=a%60,a=Math.floor(a/60),u.H=a,u.q=r,u}function hr(e){return e.indexOf(".")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/,"$1")}function Ph(e){return e.indexOf("E")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/,"$1E").replace(/(E[+-])(\d)$/,"$10$2")}function Bh(e){var n=e<0?12:11,t=hr(e.toFixed(12));return t.length<=n||(t=e.toPrecision(10),t.length<=n)?t:e.toExponential(5)}function Vh(e){var n=hr(e.toFixed(11));return n.length>(e<0?12:11)||n==="0"||n==="-0"?e.toPrecision(6):n}function zh(e){if(!isFinite(e))return isNaN(e)?"#NUM!":"#DIV/0!";var n=Math.floor(Math.log(Math.abs(e))*Math.LOG10E),t;return n>=-4&&n<=-1?t=e.toPrecision(10+n):Math.abs(n)<=9?t=Bh(e):n===10?t=e.toFixed(10).substr(0,12):t=Vh(e),hr(Ph(t.toUpperCase()))}function za(e,n){switch(typeof e){case"string":return e;case"boolean":return e?"TRUE":"FALSE";case"number":return(e|0)===e?e.toString(10):zh(e);case"undefined":return"";case"object":if(e==null)return"";if(e instanceof Date)return Qn(14,$t(e,n&&n.date1904),n)}throw new Error("unsupported value in General format: "+e)}function $h(e,n){n[0]-=581;var t=e.getDay();return e<60&&(t=(t+6)%7),t}function jh(e,n,t,i){var a="",r=0,o=0,u=t.y,s,c=0;switch(e){case 98:u=t.y+543;case 121:switch(n.length){case 1:case 2:s=u%100,c=2;break;default:s=u%1e4,c=4;break}break;case 109:switch(n.length){case 1:case 2:s=t.m,c=n.length;break;case 3:return la[t.m-1][1];case 5:return la[t.m-1][0];default:return la[t.m-1][2]}break;case 100:switch(n.length){case 1:case 2:s=t.d,c=n.length;break;case 3:return Zr[t.q][0];default:return Zr[t.q][1]}break;case 104:switch(n.length){case 1:case 2:s=1+(t.H+11)%12,c=n.length;break;default:throw"bad hour format: "+n}break;case 72:switch(n.length){case 1:case 2:s=t.H,c=n.length;break;default:throw"bad hour format: "+n}break;case 77:switch(n.length){case 1:case 2:s=t.M,c=n.length;break;default:throw"bad minute format: "+n}break;case 115:if(n!="s"&&n!="ss"&&n!=".0"&&n!=".00"&&n!=".000")throw"bad second format: "+n;return t.u===0&&(n=="s"||n=="ss")?St(t.S,n.length):(i>=2?o=i===3?1e3:100:o=i===1?10:1,r=Math.round(o*(t.S+t.u)),r>=60*o&&(r=0),n==="s"?r===0?"0":""+r/o:(a=St(r,2+i),n==="ss"?a.substr(0,2):"."+a.substr(2,n.length-1)));case 90:switch(n){case"[h]":case"[hh]":s=t.D*24+t.H;break;case"[m]":case"[mm]":s=(t.D*24+t.H)*60+t.M;break;case"[s]":case"[ss]":s=((t.D*24+t.H)*60+t.M)*60+(i==0?Math.round(t.S+t.u):t.S);break;default:throw"bad abstime format: "+n}c=n.length===3?1:2;break;case 101:s=u,c=1;break}var l=c>0?St(s,c):"";return l}function Zt(e){var n=3;if(e.length<=n)return e;for(var t=e.length%n,i=e.substr(0,t);t!=e.length;t+=n)i+=(i.length>0?",":"")+e.substr(t,n);return i}var _u=/%/g;function Uh(e,n,t){var i=n.replace(_u,""),a=n.length-i.length;return zt(e,i,t*Math.pow(10,2*a))+He("%",a)}function qh(e,n,t){for(var i=n.length-1;n.charCodeAt(i-1)===44;)--i;return zt(e,n.substr(0,i),t/Math.pow(10,3*(n.length-i)))}function Gu(e,n){var t,i=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(n==0)return"0.0E+0";if(n<0)return"-"+Gu(e,-n);var a=e.indexOf(".");a===-1&&(a=e.indexOf("E"));var r=Math.floor(Math.log(n)*Math.LOG10E)%a;if(r<0&&(r+=a),t=(n/Math.pow(10,r)).toPrecision(i+1+(a+r)%a),t.indexOf("e")===-1){var o=Math.floor(Math.log(n)*Math.LOG10E);for(t.indexOf(".")===-1?t=t.charAt(0)+"."+t.substr(1)+"E+"+(o-t.length+r):t+="E+"+(o-r);t.substr(0,2)==="0.";)t=t.charAt(0)+t.substr(2,a)+"."+t.substr(2+a),t=t.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.");t=t.replace(/\+-/,"-")}t=t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(u,s,c,l){return s+c+l.substr(0,(a+r)%a)+"."+l.substr(r)+"E"})}else t=n.toExponential(i);return e.match(/E\+00$/)&&t.match(/e[+-]\d$/)&&(t=t.substr(0,t.length-1)+"0"+t.charAt(t.length-1)),e.match(/E\-/)&&t.match(/e\+/)&&(t=t.replace(/e\+/,"e")),t.replace("e","E")}var Ou=/# (\?+)( ?)\/( ?)(\d+)/;function Wh(e,n,t){var i=parseInt(e[4],10),a=Math.round(n*i),r=Math.floor(a/i),o=a-r*i,u=i;return t+(r===0?"":""+r)+" "+(o===0?He(" ",e[1].length+1+e[4].length):dr(o,e[1].length)+e[2]+"/"+e[3]+St(u,e[4].length))}function Xh(e,n,t){return t+(n===0?"":""+n)+He(" ",e[1].length+2+e[4].length)}var Fu=/^#*0*\.([0#]+)/,Nu=/\)[^)]*[0#]/,Du=/\(###\) ###\\?-####/;function Me(e){for(var n="",t,i=0;i!=e.length;++i)switch(t=e.charCodeAt(i)){case 35:break;case 63:n+=" ";break;case 48:n+="0";break;default:n+=String.fromCharCode(t)}return n}function eo(e,n){var t=Math.pow(10,n);return""+Math.round(e*t)/t}function to(e,n){var t=e-Math.floor(e),i=Math.pow(10,n);return n<(""+Math.round(t*i)).length?0:Math.round(t*i)}function Kh(e,n){return n<(""+Math.round((e-Math.floor(e))*Math.pow(10,n))).length?1:0}function Yh(e){return e<2147483647&&e>-2147483648?""+(e>=0?e|0:e-1|0):""+Math.floor(e)}function lt(e,n,t){if(e.charCodeAt(0)===40&&!n.match(Nu)){var i=n.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return t>=0?lt("n",i,t):"("+lt("n",i,-t)+")"}if(n.charCodeAt(n.length-1)===44)return qh(e,n,t);if(n.indexOf("%")!==-1)return Uh(e,n,t);if(n.indexOf("E")!==-1)return Gu(n,t);if(n.charCodeAt(0)===36)return"$"+lt(e,n.substr(n.charAt(1)==" "?2:1),t);var a,r,o,u,s=Math.abs(t),c=t<0?"-":"";if(n.match(/^00+$/))return c+kn(s,n.length);if(n.match(/^[#?]+$/))return a=kn(t,0),a==="0"&&(a=""),a.length>n.length?a:Me(n.substr(0,n.length-a.length))+a;if(r=n.match(Ou))return Wh(r,s,c);if(n.match(/^#+0+$/))return c+kn(s,n.length-n.indexOf("0"));if(r=n.match(Fu))return a=eo(t,r[1].length).replace(/^([^\.]+)$/,"$1."+Me(r[1])).replace(/\.$/,"."+Me(r[1])).replace(/\.(\d*)$/,function(E,C){return"."+C+He("0",Me(r[1]).length-C.length)}),n.indexOf("0.")!==-1?a:a.replace(/^0\./,".");if(n=n.replace(/^#+([0.])/,"$1"),r=n.match(/^(0*)\.(#*)$/))return c+eo(s,r[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,r[1].length?"0.":".");if(r=n.match(/^#{1,3},##0(\.?)$/))return c+Zt(kn(s,0));if(r=n.match(/^#,##0\.([#0]*0)$/))return t<0?"-"+lt(e,n,-t):Zt(""+(Math.floor(t)+Kh(t,r[1].length)))+"."+St(to(t,r[1].length),r[1].length);if(r=n.match(/^#,#*,#0/))return lt(e,n.replace(/^#,#*,/,""),t);if(r=n.match(/^([0#]+)(\\?-([0#]+))+$/))return a=_n(lt(e,n.replace(/[\\-]/g,""),t)),o=0,_n(_n(n.replace(/\\/g,"")).replace(/[0#]/g,function(E){return o<a.length?a.charAt(o++):E==="0"?"0":""}));if(n.match(Du))return a=lt(e,"##########",t),"("+a.substr(0,3)+") "+a.substr(3,3)+"-"+a.substr(6);var l="";if(r=n.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(r[4].length,7),u=Ii(s,Math.pow(10,o)-1,!1),a=""+c,l=zt("n",r[1],u[1]),l.charAt(l.length-1)==" "&&(l=l.substr(0,l.length-1)+"0"),a+=l+r[2]+"/"+r[3],l=Hi(u[2],o),l.length<r[4].length&&(l=Me(r[4].substr(r[4].length-l.length))+l),a+=l,a;if(r=n.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(Math.max(r[1].length,r[4].length),7),u=Ii(s,Math.pow(10,o)-1,!0),c+(u[0]||(u[1]?"":"0"))+" "+(u[1]?dr(u[1],o)+r[2]+"/"+r[3]+Hi(u[2],o):He(" ",2*o+1+r[2].length+r[3].length));if(r=n.match(/^[#0?]+$/))return a=kn(t,0),n.length<=a.length?a:Me(n.substr(0,n.length-a.length))+a;if(r=n.match(/^([#0?]+)\.([#0]+)$/)){a=""+t.toFixed(Math.min(r[2].length,10)).replace(/([^0])0+$/,"$1"),o=a.indexOf(".");var h=n.indexOf(".")-o,b=n.length-a.length-h;return Me(n.substr(0,h)+a+n.substr(n.length-b))}if(r=n.match(/^00,000\.([#0]*0)$/))return o=to(t,r[1].length),t<0?"-"+lt(e,n,-t):Zt(Yh(t)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(E){return"00,"+(E.length<3?St(0,3-E.length):"")+E})+"."+St(o,r[1].length);switch(n){case"###,##0.00":return lt(e,"#,##0.00",t);case"###,###":case"##,###":case"#,###":var g=Zt(kn(s,0));return g!=="0"?c+g:"";case"###,###.00":return lt(e,"###,##0.00",t).replace(/^0\./,".");case"#,###.00":return lt(e,"#,##0.00",t).replace(/^0\./,".")}throw new Error("unsupported format |"+n+"|")}function Jh(e,n,t){for(var i=n.length-1;n.charCodeAt(i-1)===44;)--i;return zt(e,n.substr(0,i),t/Math.pow(10,3*(n.length-i)))}function Zh(e,n,t){var i=n.replace(_u,""),a=n.length-i.length;return zt(e,i,t*Math.pow(10,2*a))+He("%",a)}function Lu(e,n){var t,i=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(n==0)return"0.0E+0";if(n<0)return"-"+Lu(e,-n);var a=e.indexOf(".");a===-1&&(a=e.indexOf("E"));var r=Math.floor(Math.log(n)*Math.LOG10E)%a;if(r<0&&(r+=a),t=(n/Math.pow(10,r)).toPrecision(i+1+(a+r)%a),!t.match(/[Ee]/)){var o=Math.floor(Math.log(n)*Math.LOG10E);t.indexOf(".")===-1?t=t.charAt(0)+"."+t.substr(1)+"E+"+(o-t.length+r):t+="E+"+(o-r),t=t.replace(/\+-/,"-")}t=t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(u,s,c,l){return s+c+l.substr(0,(a+r)%a)+"."+l.substr(r)+"E"})}else t=n.toExponential(i);return e.match(/E\+00$/)&&t.match(/e[+-]\d$/)&&(t=t.substr(0,t.length-1)+"0"+t.charAt(t.length-1)),e.match(/E\-/)&&t.match(/e\+/)&&(t=t.replace(/e\+/,"e")),t.replace("e","E")}function Ft(e,n,t){if(e.charCodeAt(0)===40&&!n.match(Nu)){var i=n.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return t>=0?Ft("n",i,t):"("+Ft("n",i,-t)+")"}if(n.charCodeAt(n.length-1)===44)return Jh(e,n,t);if(n.indexOf("%")!==-1)return Zh(e,n,t);if(n.indexOf("E")!==-1)return Lu(n,t);if(n.charCodeAt(0)===36)return"$"+Ft(e,n.substr(n.charAt(1)==" "?2:1),t);var a,r,o,u,s=Math.abs(t),c=t<0?"-":"";if(n.match(/^00+$/))return c+St(s,n.length);if(n.match(/^[#?]+$/))return a=""+t,t===0&&(a=""),a.length>n.length?a:Me(n.substr(0,n.length-a.length))+a;if(r=n.match(Ou))return Xh(r,s,c);if(n.match(/^#+0+$/))return c+St(s,n.length-n.indexOf("0"));if(r=n.match(Fu))return a=(""+t).replace(/^([^\.]+)$/,"$1."+Me(r[1])).replace(/\.$/,"."+Me(r[1])),a=a.replace(/\.(\d*)$/,function(E,C){return"."+C+He("0",Me(r[1]).length-C.length)}),n.indexOf("0.")!==-1?a:a.replace(/^0\./,".");if(n=n.replace(/^#+([0.])/,"$1"),r=n.match(/^(0*)\.(#*)$/))return c+(""+s).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,r[1].length?"0.":".");if(r=n.match(/^#{1,3},##0(\.?)$/))return c+Zt(""+s);if(r=n.match(/^#,##0\.([#0]*0)$/))return t<0?"-"+Ft(e,n,-t):Zt(""+t)+"."+He("0",r[1].length);if(r=n.match(/^#,#*,#0/))return Ft(e,n.replace(/^#,#*,/,""),t);if(r=n.match(/^([0#]+)(\\?-([0#]+))+$/))return a=_n(Ft(e,n.replace(/[\\-]/g,""),t)),o=0,_n(_n(n.replace(/\\/g,"")).replace(/[0#]/g,function(E){return o<a.length?a.charAt(o++):E==="0"?"0":""}));if(n.match(Du))return a=Ft(e,"##########",t),"("+a.substr(0,3)+") "+a.substr(3,3)+"-"+a.substr(6);var l="";if(r=n.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(r[4].length,7),u=Ii(s,Math.pow(10,o)-1,!1),a=""+c,l=zt("n",r[1],u[1]),l.charAt(l.length-1)==" "&&(l=l.substr(0,l.length-1)+"0"),a+=l+r[2]+"/"+r[3],l=Hi(u[2],o),l.length<r[4].length&&(l=Me(r[4].substr(r[4].length-l.length))+l),a+=l,a;if(r=n.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(Math.max(r[1].length,r[4].length),7),u=Ii(s,Math.pow(10,o)-1,!0),c+(u[0]||(u[1]?"":"0"))+" "+(u[1]?dr(u[1],o)+r[2]+"/"+r[3]+Hi(u[2],o):He(" ",2*o+1+r[2].length+r[3].length));if(r=n.match(/^[#0?]+$/))return a=""+t,n.length<=a.length?a:Me(n.substr(0,n.length-a.length))+a;if(r=n.match(/^([#0]+)\.([#0]+)$/)){a=""+t.toFixed(Math.min(r[2].length,10)).replace(/([^0])0+$/,"$1"),o=a.indexOf(".");var h=n.indexOf(".")-o,b=n.length-a.length-h;return Me(n.substr(0,h)+a+n.substr(n.length-b))}if(r=n.match(/^00,000\.([#0]*0)$/))return t<0?"-"+Ft(e,n,-t):Zt(""+t).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(E){return"00,"+(E.length<3?St(0,3-E.length):"")+E})+"."+St(0,r[1].length);switch(n){case"###,###":case"##,###":case"#,###":var g=Zt(""+s);return g!=="0"?c+g:"";default:if(n.match(/\.[0#?]*$/))return Ft(e,n.slice(0,n.lastIndexOf(".")),t)+Me(n.slice(n.lastIndexOf(".")))}throw new Error("unsupported format |"+n+"|")}function zt(e,n,t){return(t|0)===t?Ft(e,n,t):lt(e,n,t)}function Qh(e){for(var n=[],t=!1,i=0,a=0;i<e.length;++i)switch(e.charCodeAt(i)){case 34:t=!t;break;case 95:case 42:case 92:++i;break;case 59:n[n.length]=e.substr(a,i-a),a=i+1}if(n[n.length]=e.substr(a),t===!0)throw new Error("Format |"+e+"| unterminated string ");return n}var Ru=/\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;function gr(e){for(var n=0,t="",i="";n<e.length;)switch(t=e.charAt(n)){case"G":Ti(e,n)&&(n+=6),n++;break;case'"':for(;e.charCodeAt(++n)!==34&&n<e.length;);++n;break;case"\\":n+=2;break;case"_":n+=2;break;case"@":++n;break;case"B":case"b":if(e.charAt(n+1)==="1"||e.charAt(n+1)==="2")return!0;case"M":case"D":case"Y":case"H":case"S":case"E":case"m":case"d":case"y":case"h":case"s":case"e":case"g":return!0;case"A":case"a":case"上":if(e.substr(n,3).toUpperCase()==="A/P"||e.substr(n,5).toUpperCase()==="AM/PM"||e.substr(n,5).toUpperCase()==="上午/下午")return!0;++n;break;case"[":for(i=t;e.charAt(n++)!=="]"&&n<e.length;)i+=e.charAt(n);if(i.match(Ru))return!0;break;case".":case"0":case"#":for(;n<e.length&&("0#?.,E+-%".indexOf(t=e.charAt(++n))>-1||t=="\\"&&e.charAt(n+1)=="-"&&"0#".indexOf(e.charAt(n+2))>-1););break;case"?":for(;e.charAt(++n)===t;);break;case"*":++n,(e.charAt(n)==" "||e.charAt(n)=="*")&&++n;break;case"(":case")":++n;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;n<e.length&&"0123456789".indexOf(e.charAt(++n))>-1;);break;case" ":++n;break;default:++n;break}return!1}function eg(e,n,t,i){for(var a=[],r="",o=0,u="",s="t",c,l,h,b="H";o<e.length;)switch(u=e.charAt(o)){case"G":if(!Ti(e,o))throw new Error("unrecognized character "+u+" in "+e);a[a.length]={t:"G",v:"General"},o+=7;break;case'"':for(r="";(h=e.charCodeAt(++o))!==34&&o<e.length;)r+=String.fromCharCode(h);a[a.length]={t:"t",v:r},++o;break;case"\\":var g=e.charAt(++o),E=g==="("||g===")"?g:"t";a[a.length]={t:E,v:g},++o;break;case"_":a[a.length]={t:"t",v:" "},o+=2;break;case"@":a[a.length]={t:"T",v:n},++o;break;case"B":case"b":if(e.charAt(o+1)==="1"||e.charAt(o+1)==="2"){if(c==null&&(c=vn(n,t,e.charAt(o+1)==="2"),c==null))return"";a[a.length]={t:"X",v:e.substr(o,2)},s=u,o+=2;break}case"M":case"D":case"Y":case"H":case"S":case"E":u=u.toLowerCase();case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(n<0||c==null&&(c=vn(n,t),c==null))return"";for(r=u;++o<e.length&&e.charAt(o).toLowerCase()===u;)r+=u;u==="m"&&s.toLowerCase()==="h"&&(u="M"),u==="h"&&(u=b),a[a.length]={t:u,v:r},s=u;break;case"A":case"a":case"上":var C={t:u,v:u};if(c==null&&(c=vn(n,t)),e.substr(o,3).toUpperCase()==="A/P"?(c!=null&&(C.v=c.H>=12?e.charAt(o+2):u),C.t="T",b="h",o+=3):e.substr(o,5).toUpperCase()==="AM/PM"?(c!=null&&(C.v=c.H>=12?"PM":"AM"),C.t="T",o+=5,b="h"):e.substr(o,5).toUpperCase()==="上午/下午"?(c!=null&&(C.v=c.H>=12?"下午":"上午"),C.t="T",o+=5,b="h"):(C.t="t",++o),c==null&&C.t==="T")return"";a[a.length]=C,s=u;break;case"[":for(r=u;e.charAt(o++)!=="]"&&o<e.length;)r+=e.charAt(o);if(r.slice(-1)!=="]")throw'unterminated "[" block: |'+r+"|";if(r.match(Ru)){if(c==null&&(c=vn(n,t),c==null))return"";a[a.length]={t:"Z",v:r.toLowerCase()},s=r.charAt(1)}else r.indexOf("$")>-1&&(r=(r.match(/\$([^-\[\]]*)/)||[])[1]||"$",gr(e)||(a[a.length]={t:"t",v:r}));break;case".":if(c!=null){for(r=u;++o<e.length&&(u=e.charAt(o))==="0";)r+=u;a[a.length]={t:"s",v:r};break}case"0":case"#":for(r=u;++o<e.length&&"0#?.,E+-%".indexOf(u=e.charAt(o))>-1;)r+=u;a[a.length]={t:"n",v:r};break;case"?":for(r=u;e.charAt(++o)===u;)r+=u;a[a.length]={t:u,v:r},s=u;break;case"*":++o,(e.charAt(o)==" "||e.charAt(o)=="*")&&++o;break;case"(":case")":a[a.length]={t:i===1?"t":u,v:u},++o;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(r=u;o<e.length&&"0123456789".indexOf(e.charAt(++o))>-1;)r+=e.charAt(o);a[a.length]={t:"D",v:r};break;case" ":a[a.length]={t:u,v:u},++o;break;case"$":a[a.length]={t:"t",v:"$"},++o;break;default:if(",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(u)===-1)throw new Error("unrecognized character "+u+" in "+e);a[a.length]={t:"t",v:u},++o;break}var w=0,S=0,F;for(o=a.length-1,s="t";o>=0;--o)switch(a[o].t){case"h":case"H":a[o].t=b,s="h",w<1&&(w=1);break;case"s":(F=a[o].v.match(/\.0+$/))&&(S=Math.max(S,F[0].length-1),w=4),w<3&&(w=3);case"d":case"y":case"e":s=a[o].t;break;case"M":s=a[o].t,w<2&&(w=2);break;case"m":s==="s"&&(a[o].t="M",w<2&&(w=2));break;case"X":break;case"Z":w<1&&a[o].v.match(/[Hh]/)&&(w=1),w<2&&a[o].v.match(/[Mm]/)&&(w=2),w<3&&a[o].v.match(/[Ss]/)&&(w=3)}var D;switch(w){case 0:break;case 1:case 2:case 3:c.u>=.5&&(c.u=0,++c.S),c.S>=60&&(c.S=0,++c.M),c.M>=60&&(c.M=0,++c.H),c.H>=24&&(c.H=0,++c.D,D=vn(c.D),D.u=c.u,D.S=c.S,D.M=c.M,D.H=c.H,c=D);break;case 4:switch(S){case 1:c.u=Math.round(c.u*10)/10;break;case 2:c.u=Math.round(c.u*100)/100;break;case 3:c.u=Math.round(c.u*1e3)/1e3;break}c.u>=1&&(c.u=0,++c.S),c.S>=60&&(c.S=0,++c.M),c.M>=60&&(c.M=0,++c.H),c.H>=24&&(c.H=0,++c.D,D=vn(c.D),D.u=c.u,D.S=c.S,D.M=c.M,D.H=c.H,c=D);break}var P="",R;for(o=0;o<a.length;++o)switch(a[o].t){case"t":case"T":case" ":case"D":break;case"X":a[o].v="",a[o].t=";";break;case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":a[o].v=jh(a[o].t.charCodeAt(0),a[o].v,c,S),a[o].t="t";break;case"n":case"?":for(R=o+1;a[R]!=null&&((u=a[R].t)==="?"||u==="D"||(u===" "||u==="t")&&a[R+1]!=null&&(a[R+1].t==="?"||a[R+1].t==="t"&&a[R+1].v==="/")||a[o].t==="("&&(u===" "||u==="n"||u===")")||u==="t"&&(a[R].v==="/"||a[R].v===" "&&a[R+1]!=null&&a[R+1].t=="?"));)a[o].v+=a[R].v,a[R]={v:"",t:";"},++R;P+=a[o].v,o=R-1;break;case"G":a[o].t="t",a[o].v=za(n,t);break}var q="",O,M;if(P.length>0){P.charCodeAt(0)==40?(O=n<0&&P.charCodeAt(0)===45?-n:n,M=zt("n",P,O)):(O=n<0&&i>1?-n:n,M=zt("n",P,O),O<0&&a[0]&&a[0].t=="t"&&(M=M.substr(1),a[0].v="-"+a[0].v)),R=M.length-1;var H=a.length;for(o=0;o<a.length;++o)if(a[o]!=null&&a[o].t!="t"&&a[o].v.indexOf(".")>-1){H=o;break}var U=a.length;if(H===a.length&&M.indexOf("E")===-1){for(o=a.length-1;o>=0;--o)a[o]==null||"n?".indexOf(a[o].t)===-1||(R>=a[o].v.length-1?(R-=a[o].v.length,a[o].v=M.substr(R+1,a[o].v.length)):R<0?a[o].v="":(a[o].v=M.substr(0,R+1),R=-1),a[o].t="t",U=o);R>=0&&U<a.length&&(a[U].v=M.substr(0,R+1)+a[U].v)}else if(H!==a.length&&M.indexOf("E")===-1){for(R=M.indexOf(".")-1,o=H;o>=0;--o)if(!(a[o]==null||"n?".indexOf(a[o].t)===-1)){for(l=a[o].v.indexOf(".")>-1&&o===H?a[o].v.indexOf(".")-1:a[o].v.length-1,q=a[o].v.substr(l+1);l>=0;--l)R>=0&&(a[o].v.charAt(l)==="0"||a[o].v.charAt(l)==="#")&&(q=M.charAt(R--)+q);a[o].v=q,a[o].t="t",U=o}for(R>=0&&U<a.length&&(a[U].v=M.substr(0,R+1)+a[U].v),R=M.indexOf(".")+1,o=H;o<a.length;++o)if(!(a[o]==null||"n?(".indexOf(a[o].t)===-1&&o!==H)){for(l=a[o].v.indexOf(".")>-1&&o===H?a[o].v.indexOf(".")+1:0,q=a[o].v.substr(0,l);l<a[o].v.length;++l)R<M.length&&(q+=M.charAt(R++));a[o].v=q,a[o].t="t",U=o}}}for(o=0;o<a.length;++o)a[o]!=null&&"n?".indexOf(a[o].t)>-1&&(O=i>1&&n<0&&o>0&&a[o-1].v==="-"?-n:n,a[o].v=zt(a[o].t,a[o].v,O),a[o].t="t");var B="";for(o=0;o!==a.length;++o)a[o]!=null&&(B+=a[o].v);return B}var no=/\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;function io(e,n){if(n==null)return!1;var t=parseFloat(n[2]);switch(n[1]){case"=":if(e==t)return!0;break;case">":if(e>t)return!0;break;case"<":if(e<t)return!0;break;case"<>":if(e!=t)return!0;break;case">=":if(e>=t)return!0;break;case"<=":if(e<=t)return!0;break}return!1}function tg(e,n){var t=Qh(e),i=t.length,a=t[i-1].indexOf("@");if(i<4&&a>-1&&--i,t.length>4)throw new Error("cannot find right format for |"+t.join("|")+"|");if(typeof n!="number")return[4,t.length===4||a>-1?t[t.length-1]:"@"];switch(typeof n=="number"&&!isFinite(n)&&(n=0),t.length){case 1:t=a>-1?["General","General","General",t[0]]:[t[0],t[0],t[0],"@"];break;case 2:t=a>-1?[t[0],t[0],t[0],t[1]]:[t[0],t[1],t[0],"@"];break;case 3:t=a>-1?[t[0],t[1],t[0],t[2]]:[t[0],t[1],t[2],"@"];break}var r=n>0?t[0]:n<0?t[1]:t[2];if(t[0].indexOf("[")===-1&&t[1].indexOf("[")===-1)return[i,r];if(t[0].match(/\[[=<>]/)!=null||t[1].match(/\[[=<>]/)!=null){var o=t[0].match(no),u=t[1].match(no);return io(n,o)?[i,t[0]]:io(n,u)?[i,t[1]]:[i,t[o!=null&&u!=null?2:1]]}return[i,r]}function Qn(e,n,t){t==null&&(t={});var i="";switch(typeof e){case"string":e=="m/d/yy"&&t.dateNF?i=t.dateNF:i=e;break;case"number":e==14&&t.dateNF?i=t.dateNF:i=(t.table!=null?t.table:At)[e],i==null&&(i=t.table&&t.table[Qr[e]]||At[Qr[e]]),i==null&&(i=Ih[e]||"General");break}if(Ti(i,0))return za(n,t);n instanceof Date&&(n=$t(n,t.date1904));var a=tg(i,n);if(Ti(a[1]))return za(n,t);if(n===!0)n="TRUE";else if(n===!1)n="FALSE";else{if(n===""||n==null)return"";if(isNaN(n)&&a[1].indexOf("0")>-1)return"#NUM!";if(!isFinite(n)&&a[1].indexOf("0")>-1)return"#DIV/0!"}return eg(a[1],n,t,a[0])}function Hu(e,n){if(typeof n!="number"){n=+n||-1;for(var t=0;t<392;++t){if(At[t]==null){n<0&&(n=t);continue}if(At[t]==e){n=t;break}}n<0&&(n=391)}return At[n]=e,n}function ng(e){for(var n=0;n!=392;++n)e[n]!==void 0&&Hu(e[n],n)}function ig(){At=Th()}var ag={"d.m":"d\\.m"};function rg(e,n){return Hu(ag[e]||e,n)}var ao=function(){var e={};e.version="1.2.0";function n(){for(var O=0,M=new Array(256),H=0;H!=256;++H)O=H,O=O&1?-306674912^O>>>1:O>>>1,O=O&1?-306674912^O>>>1:O>>>1,O=O&1?-306674912^O>>>1:O>>>1,O=O&1?-306674912^O>>>1:O>>>1,O=O&1?-306674912^O>>>1:O>>>1,O=O&1?-306674912^O>>>1:O>>>1,O=O&1?-306674912^O>>>1:O>>>1,O=O&1?-306674912^O>>>1:O>>>1,M[H]=O;return typeof Int32Array<"u"?new Int32Array(M):M}var t=n();function i(O){var M=0,H=0,U=0,B=typeof Int32Array<"u"?new Int32Array(4096):new Array(4096);for(U=0;U!=256;++U)B[U]=O[U];for(U=0;U!=256;++U)for(H=O[U],M=256+U;M<4096;M+=256)H=B[M]=H>>>8^O[H&255];var Y=[];for(U=1;U!=16;++U)Y[U-1]=typeof Int32Array<"u"&&typeof B.subarray=="function"?B.subarray(U*256,U*256+256):B.slice(U*256,U*256+256);return Y}var a=i(t),r=a[0],o=a[1],u=a[2],s=a[3],c=a[4],l=a[5],h=a[6],b=a[7],g=a[8],E=a[9],C=a[10],w=a[11],S=a[12],F=a[13],D=a[14];function P(O,M){for(var H=M^-1,U=0,B=O.length;U<B;)H=H>>>8^t[(H^O.charCodeAt(U++))&255];return~H}function R(O,M){for(var H=M^-1,U=O.length-15,B=0;B<U;)H=D[O[B++]^H&255]^F[O[B++]^H>>8&255]^S[O[B++]^H>>16&255]^w[O[B++]^H>>>24]^C[O[B++]]^E[O[B++]]^g[O[B++]]^b[O[B++]]^h[O[B++]]^l[O[B++]]^c[O[B++]]^s[O[B++]]^u[O[B++]]^o[O[B++]]^r[O[B++]]^t[O[B++]];for(U+=15;B<U;)H=H>>>8^t[(H^O[B++])&255];return~H}function q(O,M){for(var H=M^-1,U=0,B=O.length,Y=0,Z=0;U<B;)Y=O.charCodeAt(U++),Y<128?H=H>>>8^t[(H^Y)&255]:Y<2048?(H=H>>>8^t[(H^(192|Y>>6&31))&255],H=H>>>8^t[(H^(128|Y&63))&255]):Y>=55296&&Y<57344?(Y=(Y&1023)+64,Z=O.charCodeAt(U++)&1023,H=H>>>8^t[(H^(240|Y>>8&7))&255],H=H>>>8^t[(H^(128|Y>>2&63))&255],H=H>>>8^t[(H^(128|Z>>6&15|(Y&3)<<4))&255],H=H>>>8^t[(H^(128|Z&63))&255]):(H=H>>>8^t[(H^(224|Y>>12&15))&255],H=H>>>8^t[(H^(128|Y>>6&63))&255],H=H>>>8^t[(H^(128|Y&63))&255]);return~H}return e.table=t,e.bstr=P,e.buf=R,e.str=q,e}(),Et=function(){var n={};n.version="1.2.2";function t(d,k){for(var f=d.split("/"),m=k.split("/"),p=0,v=0,_=Math.min(f.length,m.length);p<_;++p){if(v=f[p].length-m[p].length)return v;if(f[p]!=m[p])return f[p]<m[p]?-1:1}return f.length-m.length}function i(d){if(d.charAt(d.length-1)=="/")return d.slice(0,-1).indexOf("/")===-1?d:i(d.slice(0,-1));var k=d.lastIndexOf("/");return k===-1?d:d.slice(0,k+1)}function a(d){if(d.charAt(d.length-1)=="/")return a(d.slice(0,-1));var k=d.lastIndexOf("/");return k===-1?d:d.slice(k+1)}function r(d,k){typeof k=="string"&&(k=new Date(k));var f=k.getHours();f=f<<6|k.getMinutes(),f=f<<5|k.getSeconds()>>>1,d.write_shift(2,f);var m=k.getFullYear()-1980;m=m<<4|k.getMonth()+1,m=m<<5|k.getDate(),d.write_shift(2,m)}function o(d){var k=d.read_shift(2)&65535,f=d.read_shift(2)&65535,m=new Date,p=f&31;f>>>=5;var v=f&15;f>>>=4,m.setMilliseconds(0),m.setFullYear(f+1980),m.setMonth(v-1),m.setDate(p);var _=k&31;k>>>=5;var N=k&63;return k>>>=6,m.setHours(k),m.setMinutes(N),m.setSeconds(_<<1),m}function u(d){Wt(d,0);for(var k={},f=0;d.l<=d.length-4;){var m=d.read_shift(2),p=d.read_shift(2),v=d.l+p,_={};switch(m){case 21589:f=d.read_shift(1),f&1&&(_.mtime=d.read_shift(4)),p>5&&(f&2&&(_.atime=d.read_shift(4)),f&4&&(_.ctime=d.read_shift(4))),_.mtime&&(_.mt=new Date(_.mtime*1e3));break;case 1:{var N=d.read_shift(4),x=d.read_shift(4);_.usz=x*Math.pow(2,32)+N,N=d.read_shift(4),x=d.read_shift(4),_.csz=x*Math.pow(2,32)+N}break}d.l=v,k[m]=_}return k}var s;function c(){return s||(s=og)}function l(d,k){if(d[0]==80&&d[1]==75)return bn(d,k);if((d[0]|32)==109&&(d[1]|32)==105)return yt(d,k);if(d.length<512)throw new Error("CFB file size "+d.length+" < 512");var f=3,m=512,p=0,v=0,_=0,N=0,x=0,G=[],A=d.slice(0,512);Wt(A,0);var I=h(A);switch(f=I[0],f){case 3:m=512;break;case 4:m=4096;break;case 0:if(I[1]==0)return bn(d,k);default:throw new Error("Major Version: Expected 3 or 4 saw "+f)}m!==512&&(A=d.slice(0,m),Wt(A,28));var V=d.slice(0,m);b(A,f);var j=A.read_shift(4,"i");if(f===3&&j!==0)throw new Error("# Directory Sectors: Expected 0 saw "+j);A.l+=4,_=A.read_shift(4,"i"),A.l+=4,A.chk("00100000","Mini Stream Cutoff Size: "),N=A.read_shift(4,"i"),p=A.read_shift(4,"i"),x=A.read_shift(4,"i"),v=A.read_shift(4,"i");for(var T=-1,z=0;z<109&&(T=A.read_shift(4,"i"),!(T<0));++z)G[z]=T;var J=g(d,m);w(x,v,J,m,G);var le=F(J,_,G,m);_<le.length&&(le[_].name="!Directory"),p>0&&N!==Z&&(le[N].name="!MiniFAT"),le[G[0]].name="!FAT",le.fat_addrs=G,le.ssz=m;var se={},pe=[],cn=[],jt=[];D(_,le,J,pe,p,se,cn,N),E(cn,jt,pe),pe.shift();var Hn={FileIndex:cn,FullPaths:jt};return k&&k.raw&&(Hn.raw={header:V,sectors:J}),Hn}function h(d){if(d[d.l]==80&&d[d.l+1]==75)return[0,0];d.chk(te,"Header Signature: "),d.l+=16;var k=d.read_shift(2,"u");return[d.read_shift(2,"u"),k]}function b(d,k){var f=9;switch(d.l+=2,f=d.read_shift(2)){case 9:if(k!=3)throw new Error("Sector Shift: Expected 9 saw "+f);break;case 12:if(k!=4)throw new Error("Sector Shift: Expected 12 saw "+f);break;default:throw new Error("Sector Shift: Expected 9 or 12 saw "+f)}d.chk("0600","Mini Sector Shift: "),d.chk("000000000000","Reserved: ")}function g(d,k){for(var f=Math.ceil(d.length/k)-1,m=[],p=1;p<f;++p)m[p-1]=d.slice(p*k,(p+1)*k);return m[f-1]=d.slice(f*k),m}function E(d,k,f){for(var m=0,p=0,v=0,_=0,N=0,x=f.length,G=[],A=[];m<x;++m)G[m]=A[m]=m,k[m]=f[m];for(;N<A.length;++N)m=A[N],p=d[m].L,v=d[m].R,_=d[m].C,G[m]===m&&(p!==-1&&G[p]!==p&&(G[m]=G[p]),v!==-1&&G[v]!==v&&(G[m]=G[v])),_!==-1&&(G[_]=m),p!==-1&&m!=G[m]&&(G[p]=G[m],A.lastIndexOf(p)<N&&A.push(p)),v!==-1&&m!=G[m]&&(G[v]=G[m],A.lastIndexOf(v)<N&&A.push(v));for(m=1;m<x;++m)G[m]===m&&(v!==-1&&G[v]!==v?G[m]=G[v]:p!==-1&&G[p]!==p&&(G[m]=G[p]));for(m=1;m<x;++m)if(d[m].type!==0){if(N=m,N!=G[N])do N=G[N],k[m]=k[N]+"/"+k[m];while(N!==0&&G[N]!==-1&&N!=G[N]);G[m]=-1}for(k[0]+="/",m=1;m<x;++m)d[m].type!==2&&(k[m]+="/")}function C(d,k,f){for(var m=d.start,p=d.size,v=[],_=m;f&&p>0&&_>=0;)v.push(k.slice(_*Y,_*Y+Y)),p-=Y,_=Sn(f,_*4);return v.length===0?Bt(0):yn(v).slice(0,d.size)}function w(d,k,f,m,p){var v=Z;if(d===Z){if(k!==0)throw new Error("DIFAT chain shorter than expected")}else if(d!==-1){var _=f[d],N=(m>>>2)-1;if(!_)return;for(var x=0;x<N&&(v=Sn(_,x*4))!==Z;++x)p.push(v);k>=1&&w(Sn(_,m-4),k-1,f,m,p)}}function S(d,k,f,m,p){var v=[],_=[];p||(p=[]);var N=m-1,x=0,G=0;for(x=k;x>=0;){p[x]=!0,v[v.length]=x,_.push(d[x]);var A=f[Math.floor(x*4/m)];if(G=x*4&N,m<4+G)throw new Error("FAT boundary crossed: "+x+" 4 "+m);if(!d[A])break;x=Sn(d[A],G)}return{nodes:v,data:lo([_])}}function F(d,k,f,m){var p=d.length,v=[],_=[],N=[],x=[],G=m-1,A=0,I=0,V=0,j=0;for(A=0;A<p;++A)if(N=[],V=A+k,V>=p&&(V-=p),!_[V]){x=[];var T=[];for(I=V;I>=0;){T[I]=!0,_[I]=!0,N[N.length]=I,x.push(d[I]);var z=f[Math.floor(I*4/m)];if(j=I*4&G,m<4+j)throw new Error("FAT boundary crossed: "+I+" 4 "+m);if(!d[z]||(I=Sn(d[z],j),T[I]))break}v[V]={nodes:N,data:lo([x])}}return v}function D(d,k,f,m,p,v,_,N){for(var x=0,G=m.length?2:0,A=k[d].data,I=0,V=0,j;I<A.length;I+=128){var T=A.slice(I,I+128);Wt(T,64),V=T.read_shift(2),j=fr(T,0,V-G),m.push(j);var z={name:j,type:T.read_shift(1),color:T.read_shift(1),L:T.read_shift(4,"i"),R:T.read_shift(4,"i"),C:T.read_shift(4,"i"),clsid:T.read_shift(16),state:T.read_shift(4,"i"),start:0,size:0},J=T.read_shift(2)+T.read_shift(2)+T.read_shift(2)+T.read_shift(2);J!==0&&(z.ct=P(T,T.l-8));var le=T.read_shift(2)+T.read_shift(2)+T.read_shift(2)+T.read_shift(2);le!==0&&(z.mt=P(T,T.l-8)),z.start=T.read_shift(4,"i"),z.size=T.read_shift(4,"i"),z.size<0&&z.start<0&&(z.size=z.type=0,z.start=Z,z.name=""),z.type===5?(x=z.start,p>0&&x!==Z&&(k[x].name="!StreamData")):z.size>=4096?(z.storage="fat",k[z.start]===void 0&&(k[z.start]=S(f,z.start,k.fat_addrs,k.ssz)),k[z.start].name=z.name,z.content=k[z.start].data.slice(0,z.size)):(z.storage="minifat",z.size<0?z.size=0:x!==Z&&z.start!==Z&&k[x]&&(z.content=C(z,k[x].data,(k[N]||{}).data))),z.content&&Wt(z.content,0),v[j]=z,_.push(z)}}function P(d,k){return new Date((nt(d,k+4)/1e7*Math.pow(2,32)+nt(d,k)/1e7-11644473600)*1e3)}function R(d,k){return c(),l(s.readFileSync(d),k)}function q(d,k){var f=k&&k.type;switch(f||he&&Buffer.isBuffer(d)&&(f="buffer"),f||"base64"){case"file":return R(d,k);case"base64":return l(Kt(Kr(d)),k);case"binary":return l(Kt(d),k)}return l(d,k)}function O(d,k){var f=k||{},m=f.root||"Root Entry";if(d.FullPaths||(d.FullPaths=[]),d.FileIndex||(d.FileIndex=[]),d.FullPaths.length!==d.FileIndex.length)throw new Error("inconsistent CFB structure");d.FullPaths.length===0&&(d.FullPaths[0]=m+"/",d.FileIndex[0]={name:m,type:5}),f.CLSID&&(d.FileIndex[0].clsid=f.CLSID),M(d)}function M(d){var k="Sh33tJ5";if(!Et.find(d,"/"+k)){var f=Bt(4);f[0]=55,f[1]=f[3]=50,f[2]=54,d.FileIndex.push({name:k,type:2,content:f,size:4,L:69,R:69,C:69}),d.FullPaths.push(d.FullPaths[0]+k),H(d)}}function H(d,k){O(d);for(var f=!1,m=!1,p=d.FullPaths.length-1;p>=0;--p){var v=d.FileIndex[p];switch(v.type){case 0:m?f=!0:(d.FileIndex.pop(),d.FullPaths.pop());break;case 1:case 2:case 5:m=!0,isNaN(v.R*v.L*v.C)&&(f=!0),v.R>-1&&v.L>-1&&v.R==v.L&&(f=!0);break;default:f=!0;break}}if(!(!f&&!k)){var _=new Date(1987,1,19),N=0,x=Object.create?Object.create(null):{},G=[];for(p=0;p<d.FullPaths.length;++p)x[d.FullPaths[p]]=!0,d.FileIndex[p].type!==0&&G.push([d.FullPaths[p],d.FileIndex[p]]);for(p=0;p<G.length;++p){var A=i(G[p][0]);for(m=x[A];!m;){for(;i(A)&&!x[i(A)];)A=i(A);G.push([A,{name:a(A).replace("/",""),type:1,clsid:de,ct:_,mt:_,content:null}]),x[A]=!0,A=i(G[p][0]),m=x[A]}}for(G.sort(function(j,T){return t(j[0],T[0])}),d.FullPaths=[],d.FileIndex=[],p=0;p<G.length;++p)d.FullPaths[p]=G[p][0],d.FileIndex[p]=G[p][1];for(p=0;p<G.length;++p){var I=d.FileIndex[p],V=d.FullPaths[p];if(I.name=a(V).replace("/",""),I.L=I.R=I.C=-(I.color=1),I.size=I.content?I.content.length:0,I.start=0,I.clsid=I.clsid||de,p===0)I.C=G.length>1?1:-1,I.size=0,I.type=5;else if(V.slice(-1)=="/"){for(N=p+1;N<G.length&&i(d.FullPaths[N])!=V;++N);for(I.C=N>=G.length?-1:N,N=p+1;N<G.length&&i(d.FullPaths[N])!=i(V);++N);I.R=N>=G.length?-1:N,I.type=1}else i(d.FullPaths[p+1]||"")==i(V)&&(I.R=p+1),I.type=2}}}function U(d,k){var f=k||{};if(f.fileType=="mad")return me(d,f);switch(H(d),f.fileType){case"zip":return ke(d,f)}var m=function(j){for(var T=0,z=0,J=0;J<j.FileIndex.length;++J){var le=j.FileIndex[J];if(le.content){var se=le.content.length;se>0&&(se<4096?T+=se+63>>6:z+=se+511>>9)}}for(var pe=j.FullPaths.length+3>>2,cn=T+7>>3,jt=T+127>>7,Hn=cn+z+pe+jt,ln=Hn+127>>7,qi=ln<=109?0:Math.ceil((ln-109)/127);Hn+ln+qi+127>>7>ln;)qi=++ln<=109?0:Math.ceil((ln-109)/127);var It=[1,qi,ln,jt,pe,z,T,0];return j.FileIndex[0].size=T<<6,It[7]=(j.FileIndex[0].start=It[0]+It[1]+It[2]+It[3]+It[4]+It[5])+(It[6]+7>>3),It}(d),p=Bt(m[7]<<9),v=0,_=0;{for(v=0;v<8;++v)p.write_shift(1,ce[v]);for(v=0;v<8;++v)p.write_shift(2,0);for(p.write_shift(2,62),p.write_shift(2,3),p.write_shift(2,65534),p.write_shift(2,9),p.write_shift(2,6),v=0;v<3;++v)p.write_shift(2,0);for(p.write_shift(4,0),p.write_shift(4,m[2]),p.write_shift(4,m[0]+m[1]+m[2]+m[3]-1),p.write_shift(4,0),p.write_shift(4,4096),p.write_shift(4,m[3]?m[0]+m[1]+m[2]-1:Z),p.write_shift(4,m[3]),p.write_shift(-4,m[1]?m[0]-1:Z),p.write_shift(4,m[1]),v=0;v<109;++v)p.write_shift(-4,v<m[2]?m[1]+v:-1)}if(m[1])for(_=0;_<m[1];++_){for(;v<236+_*127;++v)p.write_shift(-4,v<m[2]?m[1]+v:-1);p.write_shift(-4,_===m[1]-1?Z:_+1)}var N=function(j){for(_+=j;v<_-1;++v)p.write_shift(-4,v+1);j&&(++v,p.write_shift(-4,Z))};for(_=v=0,_+=m[1];v<_;++v)p.write_shift(-4,oe.DIFSECT);for(_+=m[2];v<_;++v)p.write_shift(-4,oe.FATSECT);N(m[3]),N(m[4]);for(var x=0,G=0,A=d.FileIndex[0];x<d.FileIndex.length;++x)A=d.FileIndex[x],A.content&&(G=A.content.length,!(G<4096)&&(A.start=_,N(G+511>>9)));for(N(m[6]+7>>3);p.l&511;)p.write_shift(-4,oe.ENDOFCHAIN);for(_=v=0,x=0;x<d.FileIndex.length;++x)A=d.FileIndex[x],A.content&&(G=A.content.length,!(!G||G>=4096)&&(A.start=_,N(G+63>>6)));for(;p.l&511;)p.write_shift(-4,oe.ENDOFCHAIN);for(v=0;v<m[4]<<2;++v){var I=d.FullPaths[v];if(!I||I.length===0){for(x=0;x<17;++x)p.write_shift(4,0);for(x=0;x<3;++x)p.write_shift(4,-1);for(x=0;x<12;++x)p.write_shift(4,0);continue}A=d.FileIndex[v],v===0&&(A.start=A.size?A.start-1:Z);var V=v===0&&f.root||A.name;if(V.length>31&&(console.error("Name "+V+" will be truncated to "+V.slice(0,31)),V=V.slice(0,31)),G=2*(V.length+1),p.write_shift(64,V,"utf16le"),p.write_shift(2,G),p.write_shift(1,A.type),p.write_shift(1,A.color),p.write_shift(-4,A.L),p.write_shift(-4,A.R),p.write_shift(-4,A.C),A.clsid)p.write_shift(16,A.clsid,"hex");else for(x=0;x<4;++x)p.write_shift(4,0);p.write_shift(4,A.state||0),p.write_shift(4,0),p.write_shift(4,0),p.write_shift(4,0),p.write_shift(4,0),p.write_shift(4,A.start),p.write_shift(4,A.size),p.write_shift(4,0)}for(v=1;v<d.FileIndex.length;++v)if(A=d.FileIndex[v],A.size>=4096)if(p.l=A.start+1<<9,he&&Buffer.isBuffer(A.content))A.content.copy(p,p.l,0,A.size),p.l+=A.size+511&-512;else{for(x=0;x<A.size;++x)p.write_shift(1,A.content[x]);for(;x&511;++x)p.write_shift(1,0)}for(v=1;v<d.FileIndex.length;++v)if(A=d.FileIndex[v],A.size>0&&A.size<4096)if(he&&Buffer.isBuffer(A.content))A.content.copy(p,p.l,0,A.size),p.l+=A.size+63&-64;else{for(x=0;x<A.size;++x)p.write_shift(1,A.content[x]);for(;x&63;++x)p.write_shift(1,0)}if(he)p.l=p.length;else for(;p.l<p.length;)p.write_shift(1,0);return p}function B(d,k){var f=d.FullPaths.map(function(x){return x.toUpperCase()}),m=f.map(function(x){var G=x.split("/");return G[G.length-(x.slice(-1)=="/"?2:1)]}),p=!1;k.charCodeAt(0)===47?(p=!0,k=f[0].slice(0,-1)+k):p=k.indexOf("/")!==-1;var v=k.toUpperCase(),_=p===!0?f.indexOf(v):m.indexOf(v);if(_!==-1)return d.FileIndex[_];var N=!v.match(bi);for(v=v.replace(Wn,""),N&&(v=v.replace(bi,"!")),_=0;_<f.length;++_)if((N?f[_].replace(bi,"!"):f[_]).replace(Wn,"")==v||(N?m[_].replace(bi,"!"):m[_]).replace(Wn,"")==v)return d.FileIndex[_];return null}var Y=64,Z=-2,te="d0cf11e0a1b11ae1",ce=[208,207,17,224,161,177,26,225],de="00000000000000000000000000000000",oe={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:Z,FREESECT:-1,HEADER_SIGNATURE:te,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:de,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]};function ie(d,k,f){c();var m=U(d,f);s.writeFileSync(k,m)}function ue(d){for(var k=new Array(d.length),f=0;f<d.length;++f)k[f]=String.fromCharCode(d[f]);return k.join("")}function mt(d,k){var f=U(d,k);switch(k&&k.type||"buffer"){case"file":return c(),s.writeFileSync(k.filename,f),f;case"binary":return typeof f=="string"?f:ue(f);case"base64":return Xr(typeof f=="string"?f:ue(f));case"buffer":if(he)return Buffer.isBuffer(f)?f:tn(f);case"array":return typeof f=="string"?Kt(f):f}return f}var Ye;function re(d){try{var k=d.InflateRaw,f=new k;if(f._processChunk(new Uint8Array([3,0]),f._finishFlushFlag),f.bytesRead)Ye=d;else throw new Error("zlib does not expose bytesRead")}catch(m){console.error("cannot use native zlib: "+(m.message||m))}}function fe(d,k){if(!Ye)return un(d,k);var f=Ye.InflateRaw,m=new f,p=m._processChunk(d.slice(d.l),m._finishFlushFlag);return d.l+=m.bytesRead,p}function Pe(d){return Ye?Ye.deflateRawSync(d):rn(d)}var Be=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],be=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],bt=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];function Je(d){var k=(d<<1|d<<11)&139536|(d<<5|d<<15)&558144;return(k>>16|k>>8|k)&255}for(var ee=typeof Uint8Array<"u",Q=ee?new Uint8Array(256):[],Ve=0;Ve<256;++Ve)Q[Ve]=Je(Ve);function ze(d,k){var f=Q[d&255];return k<=8?f>>>8-k:(f=f<<8|Q[d>>8&255],k<=16?f>>>16-k:(f=f<<8|Q[d>>16&255],f>>>24-k))}function Gt(d,k){var f=k&7,m=k>>>3;return(d[m]|(f<=6?0:d[m+1]<<8))>>>f&3}function Te(d,k){var f=k&7,m=k>>>3;return(d[m]|(f<=5?0:d[m+1]<<8))>>>f&7}function at(d,k){var f=k&7,m=k>>>3;return(d[m]|(f<=4?0:d[m+1]<<8))>>>f&15}function rt(d,k){var f=k&7,m=k>>>3;return(d[m]|(f<=3?0:d[m+1]<<8))>>>f&31}function kt(d,k){var f=k&7,m=k>>>3;return(d[m]|(f<=1?0:d[m+1]<<8))>>>f&127}function vt(d,k,f){var m=k&7,p=k>>>3,v=(1<<f)-1,_=d[p]>>>m;return f<8-m||(_|=d[p+1]<<8-m,f<16-m)||(_|=d[p+2]<<16-m,f<24-m)||(_|=d[p+3]<<24-m),_&v}function Rt(d,k,f){var m=k&7,p=k>>>3;return m<=5?d[p]|=(f&7)<<m:(d[p]|=f<<m&255,d[p+1]=(f&7)>>8-m),k+3}function ot(d,k,f){var m=k&7,p=k>>>3;return f=(f&1)<<m,d[p]|=f,k+1}function Ze(d,k,f){var m=k&7,p=k>>>3;return f<<=m,d[p]|=f&255,f>>>=8,d[p+1]=f,k+8}function Ht(d,k,f){var m=k&7,p=k>>>3;return f<<=m,d[p]|=f&255,f>>>=8,d[p+1]=f&255,d[p+2]=f>>>8,k+16}function ut(d,k){var f=d.length,m=2*f>k?2*f:k+5,p=0;if(f>=k)return d;if(he){var v=Yr(m);if(d.copy)d.copy(v);else for(;p<d.length;++p)v[p]=d[p];return v}else if(ee){var _=new Uint8Array(m);if(_.set)_.set(d);else for(;p<f;++p)_[p]=d[p];return _}return d.length=m,d}function _e(d){for(var k=new Array(d),f=0;f<d;++f)k[f]=0;return k}function Ct(d,k,f){var m=1,p=0,v=0,_=0,N=0,x=d.length,G=ee?new Uint16Array(32):_e(32);for(v=0;v<32;++v)G[v]=0;for(v=x;v<f;++v)d[v]=0;x=d.length;var A=ee?new Uint16Array(x):_e(x);for(v=0;v<x;++v)G[p=d[v]]++,m<p&&(m=p),A[v]=0;for(G[0]=0,v=1;v<=m;++v)G[v+16]=N=N+G[v-1]<<1;for(v=0;v<x;++v)N=d[v],N!=0&&(A[v]=G[N+16]++);var I=0;for(v=0;v<x;++v)if(I=d[v],I!=0)for(N=ze(A[v],m)>>m-I,_=(1<<m+4-I)-1;_>=0;--_)k[N|_<<I]=I&15|v<<4;return m}var an=ee?new Uint16Array(512):_e(512),st=ee?new Uint16Array(32):_e(32);if(!ee){for(var Ge=0;Ge<512;++Ge)an[Ge]=0;for(Ge=0;Ge<32;++Ge)st[Ge]=0}(function(){for(var d=[],k=0;k<32;k++)d.push(5);Ct(d,st,32);var f=[];for(k=0;k<=143;k++)f.push(8);for(;k<=255;k++)f.push(9);for(;k<=279;k++)f.push(7);for(;k<=287;k++)f.push(8);Ct(f,an,288)})();var Tt=function(){for(var k=ee?new Uint8Array(32768):[],f=0,m=0;f<bt.length-1;++f)for(;m<bt[f+1];++m)k[m]=f;for(;m<32768;++m)k[m]=29;var p=ee?new Uint8Array(259):[];for(f=0,m=0;f<be.length-1;++f)for(;m<be[f+1];++m)p[m]=f;function v(N,x){for(var G=0;G<N.length;){var A=Math.min(65535,N.length-G),I=G+A==N.length;for(x.write_shift(1,+I),x.write_shift(2,A),x.write_shift(2,~A&65535);A-- >0;)x[x.l++]=N[G++]}return x.l}function _(N,x){for(var G=0,A=0,I=ee?new Uint16Array(32768):[];A<N.length;){var V=Math.min(65535,N.length-A);if(V<10){for(G=Rt(x,G,+(A+V==N.length)),G&7&&(G+=8-(G&7)),x.l=G/8|0,x.write_shift(2,V),x.write_shift(2,~V&65535);V-- >0;)x[x.l++]=N[A++];G=x.l*8;continue}G=Rt(x,G,+(A+V==N.length)+2);for(var j=0;V-- >0;){var T=N[A];j=(j<<5^T)&32767;var z=-1,J=0;if((z=I[j])&&(z|=A&-32768,z>A&&(z-=32768),z<A))for(;N[z+J]==N[A+J]&&J<250;)++J;if(J>2){T=p[J],T<=22?G=Ze(x,G,Q[T+1]>>1)-1:(Ze(x,G,3),G+=5,Ze(x,G,Q[T-23]>>5),G+=3);var le=T<8?0:T-4>>2;le>0&&(Ht(x,G,J-be[T]),G+=le),T=k[A-z],G=Ze(x,G,Q[T]>>3),G-=3;var se=T<4?0:T-2>>1;se>0&&(Ht(x,G,A-z-bt[T]),G+=se);for(var pe=0;pe<J;++pe)I[j]=A&32767,j=(j<<5^N[A])&32767,++A;V-=J-1}else T<=143?T=T+48:G=ot(x,G,1),G=Ze(x,G,Q[T]),I[j]=A&32767,++A}G=Ze(x,G,0)-1}return x.l=(G+7)/8|0,x.l}return function(x,G){return x.length<8?v(x,G):_(x,G)}}();function rn(d){var k=Bt(50+Math.floor(d.length*1.1)),f=Tt(d,k);return k.slice(0,f)}var $e=ee?new Uint16Array(32768):_e(32768),Ie=ee?new Uint16Array(32768):_e(32768),fn=ee?new Uint16Array(128):_e(128),pn=1,Qe=1;function mn(d,k){var f=rt(d,k)+257;k+=5;var m=rt(d,k)+1;k+=5;var p=at(d,k)+4;k+=4;for(var v=0,_=ee?new Uint8Array(19):_e(19),N=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],x=1,G=ee?new Uint8Array(8):_e(8),A=ee?new Uint8Array(8):_e(8),I=_.length,V=0;V<p;++V)_[Be[V]]=v=Te(d,k),x<v&&(x=v),G[v]++,k+=3;var j=0;for(G[0]=0,V=1;V<=x;++V)A[V]=j=j+G[V-1]<<1;for(V=0;V<I;++V)(j=_[V])!=0&&(N[V]=A[j]++);var T=0;for(V=0;V<I;++V)if(T=_[V],T!=0){j=Q[N[V]]>>8-T;for(var z=(1<<7-T)-1;z>=0;--z)fn[j|z<<T]=T&7|V<<3}var J=[];for(x=1;J.length<f+m;)switch(j=fn[kt(d,k)],k+=j&7,j>>>=3){case 16:for(v=3+Gt(d,k),k+=2,j=J[J.length-1];v-- >0;)J.push(j);break;case 17:for(v=3+Te(d,k),k+=3;v-- >0;)J.push(0);break;case 18:for(v=11+kt(d,k),k+=7;v-- >0;)J.push(0);break;default:J.push(j),x<j&&(x=j);break}var le=J.slice(0,f),se=J.slice(f);for(V=f;V<286;++V)le[V]=0;for(V=m;V<30;++V)se[V]=0;return pn=Ct(le,$e,286),Qe=Ct(se,Ie,30),k}function on(d,k){if(d[0]==3&&!(d[1]&3))return[Fn(k),2];for(var f=0,m=0,p=Yr(k||1<<18),v=0,_=p.length>>>0,N=0,x=0;(m&1)==0;){if(m=Te(d,f),f+=3,m>>>1)m>>1==1?(N=9,x=5):(f=mn(d,f),N=pn,x=Qe);else{f&7&&(f+=8-(f&7));var G=d[f>>>3]|d[(f>>>3)+1]<<8;if(f+=32,G>0)for(!k&&_<v+G&&(p=ut(p,v+G),_=p.length);G-- >0;)p[v++]=d[f>>>3],f+=8;continue}for(;;){!k&&_<v+32767&&(p=ut(p,v+32767),_=p.length);var A=vt(d,f,N),I=m>>>1==1?an[A]:$e[A];if(f+=I&15,I>>>=4,(I>>>8&255)===0)p[v++]=I;else{if(I==256)break;I-=257;var V=I<8?0:I-4>>2;V>5&&(V=0);var j=v+be[I];V>0&&(j+=vt(d,f,V),f+=V),A=vt(d,f,x),I=m>>>1==1?st[A]:Ie[A],f+=I&15,I>>>=4;var T=I<4?0:I-2>>1,z=bt[I];for(T>0&&(z+=vt(d,f,T),f+=T),!k&&_<j&&(p=ut(p,j+100),_=p.length);v<j;)p[v]=p[v-z],++v}}}return k?[p,f+7>>>3]:[p.slice(0,v),f+7>>>3]}function un(d,k){var f=d.slice(d.l||0),m=on(f,k);return d.l+=m[1],m[0]}function sn(d,k){if(d)typeof console<"u"&&console.error(k);else throw new Error(k)}function bn(d,k){var f=d;Wt(f,0);var m=[],p=[],v={FileIndex:m,FullPaths:p};O(v,{root:k.root});for(var _=f.length-4;(f[_]!=80||f[_+1]!=75||f[_+2]!=5||f[_+3]!=6)&&_>=0;)--_;f.l=_+4,f.l+=4;var N=f.read_shift(2);f.l+=6;var x=f.read_shift(4);for(f.l=x,_=0;_<N;++_){f.l+=20;var G=f.read_shift(4),A=f.read_shift(4),I=f.read_shift(2),V=f.read_shift(2),j=f.read_shift(2);f.l+=8;var T=f.read_shift(4),z=u(f.slice(f.l+I,f.l+I+V));f.l+=I+V+j;var J=f.l;f.l=T+4,z&&z[1]&&((z[1]||{}).usz&&(A=z[1].usz),(z[1]||{}).csz&&(G=z[1].csz)),ne(f,G,A,v,z),f.l=J}return v}function ne(d,k,f,m,p){d.l+=2;var v=d.read_shift(2),_=d.read_shift(2),N=o(d);if(v&8257)throw new Error("Unsupported ZIP encryption");for(var x=d.read_shift(4),G=d.read_shift(4),A=d.read_shift(4),I=d.read_shift(2),V=d.read_shift(2),j="",T=0;T<I;++T)j+=String.fromCharCode(d[d.l++]);if(V){var z=u(d.slice(d.l,d.l+V));(z[21589]||{}).mt&&(N=z[21589].mt),(z[1]||{}).usz&&(A=z[1].usz),(z[1]||{}).csz&&(G=z[1].csz),p&&((p[21589]||{}).mt&&(N=p[21589].mt),(p[1]||{}).usz&&(A=p[1].usz),(p[1]||{}).csz&&(G=p[1].csz))}d.l+=V;var J=d.slice(d.l,d.l+G);switch(_){case 8:J=fe(d,A);break;case 0:d.l+=G;break;default:throw new Error("Unsupported ZIP Compression method "+_)}var le=!1;v&8&&(x=d.read_shift(4),x==134695760&&(x=d.read_shift(4),le=!0),G=d.read_shift(4),A=d.read_shift(4)),G!=k&&sn(le,"Bad compressed size: "+k+" != "+G),A!=f&&sn(le,"Bad uncompressed size: "+f+" != "+A),Ne(m,j,J,{unsafe:!0,mt:N})}function ke(d,k){var f=k||{},m=[],p=[],v=Bt(1),_=f.compression?8:0,N=0,x=0,G=0,A=0,I=0,V=d.FullPaths[0],j=V,T=d.FileIndex[0],z=[],J=0;for(x=1;x<d.FullPaths.length;++x)if(j=d.FullPaths[x].slice(V.length),T=d.FileIndex[x],!(!T.size||!T.content||Array.isArray(T.content)&&T.content.length==0||j=="Sh33tJ5")){var le=A,se=Bt(j.length);for(G=0;G<j.length;++G)se.write_shift(1,j.charCodeAt(G)&127);se=se.slice(0,se.l),z[I]=typeof T.content=="string"?ao.bstr(T.content,0):ao.buf(T.content,0);var pe=typeof T.content=="string"?Kt(T.content):T.content;_==8&&(pe=Pe(pe)),v=Bt(30),v.write_shift(4,67324752),v.write_shift(2,20),v.write_shift(2,N),v.write_shift(2,_),T.mt?r(v,T.mt):v.write_shift(4,0),v.write_shift(-4,z[I]),v.write_shift(4,pe.length),v.write_shift(4,T.content.length),v.write_shift(2,se.length),v.write_shift(2,0),A+=v.length,m.push(v),A+=se.length,m.push(se),A+=pe.length,m.push(pe),v=Bt(46),v.write_shift(4,33639248),v.write_shift(2,0),v.write_shift(2,20),v.write_shift(2,N),v.write_shift(2,_),v.write_shift(4,0),v.write_shift(-4,z[I]),v.write_shift(4,pe.length),v.write_shift(4,T.content.length),v.write_shift(2,se.length),v.write_shift(2,0),v.write_shift(2,0),v.write_shift(2,0),v.write_shift(2,0),v.write_shift(4,0),v.write_shift(4,le),J+=v.l,p.push(v),J+=se.length,p.push(se),++I}return v=Bt(22),v.write_shift(4,101010256),v.write_shift(2,0),v.write_shift(2,0),v.write_shift(2,I),v.write_shift(2,I),v.write_shift(4,J),v.write_shift(4,A),v.write_shift(2,0),yn([yn(m),yn(p),v])}var ve={htm:"text/html",xml:"text/xml",gif:"image/gif",jpg:"image/jpeg",png:"image/png",mso:"application/x-mso",thmx:"application/vnd.ms-officetheme",sh33tj5:"application/octet-stream"};function Oe(d,k){if(d.ctype)return d.ctype;var f=d.name||"",m=f.match(/\.([^\.]+)$/);return m&&ve[m[1]]||k&&(m=(f=k).match(/[\.\\]([^\.\\])+$/),m&&ve[m[1]])?ve[m[1]]:"application/octet-stream"}function ct(d){for(var k=Xr(d),f=[],m=0;m<k.length;m+=76)f.push(k.slice(m,m+76));return f.join(`\r
`)+`\r
`}function Fe(d){var k=d.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,function(G){var A=G.charCodeAt(0).toString(16).toUpperCase();return"="+(A.length==1?"0"+A:A)});k=k.replace(/ $/mg,"=20").replace(/\t$/mg,"=09"),k.charAt(0)==`
`&&(k="=0D"+k.slice(1)),k=k.replace(/\r(?!\n)/mg,"=0D").replace(/\n\n/mg,`
=0A`).replace(/([^\r\n])\n/mg,"$1=0A");for(var f=[],m=k.split(`\r
`),p=0;p<m.length;++p){var v=m[p];if(v.length==0){f.push("");continue}for(var _=0;_<v.length;){var N=76,x=v.slice(_,_+N);x.charAt(N-1)=="="?N--:x.charAt(N-2)=="="?N-=2:x.charAt(N-3)=="="&&(N-=3),x=v.slice(_,_+N),_+=N,_<v.length&&(x+="="),f.push(x)}}return f.join(`\r
`)}function Ce(d){for(var k=[],f=0;f<d.length;++f){for(var m=d[f];f<=d.length&&m.charAt(m.length-1)=="=";)m=m.slice(0,m.length-1)+d[++f];k.push(m)}for(var p=0;p<k.length;++p)k[p]=k[p].replace(/[=][0-9A-Fa-f]{2}/g,function(v){return String.fromCharCode(parseInt(v.slice(1),16))});return Kt(k.join(`\r
`))}function Se(d,k,f){for(var m="",p="",v="",_,N=0;N<10;++N){var x=k[N];if(!x||x.match(/^\s*$/))break;var G=x.match(/^([^:]*?):\s*([^\s].*)$/);if(G)switch(G[1].toLowerCase()){case"content-location":m=G[2].trim();break;case"content-type":v=G[2].trim();break;case"content-transfer-encoding":p=G[2].trim();break}}switch(++N,p.toLowerCase()){case"base64":_=Kt(Kr(k.slice(N).join("")));break;case"quoted-printable":_=Ce(k.slice(N));break;default:throw new Error("Unsupported Content-Transfer-Encoding "+p)}var A=Ne(d,m.slice(f.length),_,{unsafe:!0});v&&(A.ctype=v)}function yt(d,k){if(ue(d.slice(0,13)).toLowerCase()!="mime-version:")throw new Error("Unsupported MAD header");var f=k&&k.root||"",m=(he&&Buffer.isBuffer(d)?d.toString("binary"):ue(d)).split(`\r
`),p=0,v="";for(p=0;p<m.length;++p)if(v=m[p],!!/^Content-Location:/i.test(v)&&(v=v.slice(v.indexOf("file")),f||(f=v.slice(0,v.lastIndexOf("/")+1)),v.slice(0,f.length)!=f))for(;f.length>0&&(f=f.slice(0,f.length-1),f=f.slice(0,f.lastIndexOf("/")+1),v.slice(0,f.length)!=f););var _=(m[1]||"").match(/boundary="(.*?)"/);if(!_)throw new Error("MAD cannot find boundary");var N="--"+(_[1]||""),x=[],G=[],A={FileIndex:x,FullPaths:G};O(A);var I,V=0;for(p=0;p<m.length;++p){var j=m[p];j!==N&&j!==N+"--"||(V++&&Se(A,m.slice(I,p),f),I=p)}return A}function me(d,k){var f=k||{},m=f.boundary||"SheetJS";m="------="+m;for(var p=["MIME-Version: 1.0",'Content-Type: multipart/related; boundary="'+m.slice(2)+'"',"","",""],v=d.FullPaths[0],_=v,N=d.FileIndex[0],x=1;x<d.FullPaths.length;++x)if(_=d.FullPaths[x].slice(v.length),N=d.FileIndex[x],!(!N.size||!N.content||_=="Sh33tJ5")){_=_.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,function(J){return"_x"+J.charCodeAt(0).toString(16)+"_"}).replace(/[\u0080-\uFFFF]/g,function(J){return"_u"+J.charCodeAt(0).toString(16)+"_"});for(var G=N.content,A=he&&Buffer.isBuffer(G)?G.toString("binary"):ue(G),I=0,V=Math.min(1024,A.length),j=0,T=0;T<=V;++T)(j=A.charCodeAt(T))>=32&&j<128&&++I;var z=I>=V*4/5;p.push(m),p.push("Content-Location: "+(f.root||"file:///C:/SheetJS/")+_),p.push("Content-Transfer-Encoding: "+(z?"quoted-printable":"base64")),p.push("Content-Type: "+Oe(N,_)),p.push(""),p.push(z?Fe(A):ct(A))}return p.push(m+`--\r
`),p.join(`\r
`)}function et(d){var k={};return O(k,d),k}function Ne(d,k,f,m){var p=m&&m.unsafe;p||O(d);var v=!p&&Et.find(d,k);if(!v){var _=d.FullPaths[0];k.slice(0,_.length)==_?_=k:(_.slice(-1)!="/"&&(_+="/"),_=(_+k).replace("//","/")),v={name:a(k),type:2},d.FileIndex.push(v),d.FullPaths.push(_),p||Et.utils.cfb_gc(d)}return v.content=f,v.size=f?f.length:0,m&&(m.CLSID&&(v.clsid=m.CLSID),m.mt&&(v.mt=m.mt),m.ct&&(v.ct=m.ct)),v}function je(d,k){O(d);var f=Et.find(d,k);if(f){for(var m=0;m<d.FileIndex.length;++m)if(d.FileIndex[m]==f)return d.FileIndex.splice(m,1),d.FullPaths.splice(m,1),!0}return!1}function Ot(d,k,f){O(d);var m=Et.find(d,k);if(m){for(var p=0;p<d.FileIndex.length;++p)if(d.FileIndex[p]==m)return d.FileIndex[p].name=a(f),d.FullPaths[p]=f,!0}return!1}function tt(d){H(d,!0)}return n.find=B,n.read=q,n.parse=l,n.write=mt,n.writeFile=ie,n.utils={cfb_new:et,cfb_add:Ne,cfb_del:je,cfb_mov:Ot,cfb_gc:tt,ReadShift:Xn,CheckField:ts,prep_blob:Wt,bconcat:yn,use_zlib:re,_deflateRaw:rn,_inflateRaw:un,consts:oe},n}(),og;function ro(e){return typeof e=="string"?lr(e):Array.isArray(e)?Dh(e):e}function Tu(e,n,t){if(typeof Deno<"u")return Deno.writeFileSync(e,n);var i=n;if(typeof IE_SaveFile<"u")return IE_SaveFile(i,e);if(typeof Blob<"u"){var a=new Blob([ro(i)],{type:"application/octet-stream"});if(typeof navigator<"u"&&navigator.msSaveBlob)return navigator.msSaveBlob(a,e);if(typeof saveAs<"u")return saveAs(a,e);if(typeof URL<"u"&&typeof document<"u"&&document.createElement&&URL.createObjectURL){var r=URL.createObjectURL(a);if(typeof chrome=="object"&&typeof(chrome.downloads||{}).download=="function")return URL.revokeObjectURL&&typeof setTimeout<"u"&&setTimeout(function(){URL.revokeObjectURL(r)},6e4),chrome.downloads.download({url:r,filename:e,saveAs:!0});var o=document.createElement("a");if(o.download!=null)return o.download=e,o.href=r,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL&&typeof setTimeout<"u"&&setTimeout(function(){URL.revokeObjectURL(r)},6e4),r}else if(typeof URL<"u"&&!URL.createObjectURL&&typeof chrome=="object"){var u="data:application/octet-stream;base64,"+Fh(new Uint8Array(ro(i)));return chrome.downloads.download({url:u,filename:e,saveAs:!0})}}if(typeof $<"u"&&typeof File<"u"&&typeof Folder<"u")try{var s=File(e);return s.open("w"),s.encoding="binary",Array.isArray(n)&&(n=Nh(n)),s.write(n),s.close(),n}catch(c){if(!c.message||c.message.indexOf("onstruct")==-1)throw c}throw new Error("cannot save file "+e)}function nn(e){for(var n=Object.keys(e),t=[],i=0;i<n.length;++i)Object.prototype.hasOwnProperty.call(e,n[i])&&t.push(n[i]);return t}function ug(e){for(var n=[],t=nn(e),i=0;i!==t.length;++i)n[e[t[i]]]=t[i];return n}function sg(e){for(var n=[],t=nn(e),i=0;i!==t.length;++i)n[e[t[i]]]=parseInt(t[i],10);return n}function cg(e){for(var n=[],t=nn(e),i=0;i!==t.length;++i)n[e[t[i]]]==null&&(n[e[t[i]]]=[]),n[e[t[i]]].push(t[i]);return n}var Iu=Date.UTC(1899,11,30,0,0,0),lg=Date.UTC(1899,11,31,0,0,0),dg=Date.UTC(1904,0,1,0,0,0);function $t(e,n){var t=e.getTime(),i=(t-Iu)/(24*60*60*1e3);return n?(i-=1462,i<-1402?i-1:i):i<60?i-1:i}function hg(e){if(e>=60&&e<61)return e;var n=new Date;return n.setTime((e>60?e:e+1)*24*60*60*1e3+Iu),n}var gg=/^(\d+):(\d+)(:\d+)?(\.\d+)?$/,fg=/^(\d+)-(\d+)-(\d+)$/,Mu=/^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)?(\.\d+)?$/;function $a(e,n){if(e instanceof Date)return e;var t=e.match(gg);if(t)return new Date((n?dg:lg)+((parseInt(t[1],10)*60+parseInt(t[2],10))*60+(t[3]?parseInt(t[3].slice(1),10):0))*1e3+(t[4]?parseInt((t[4]+"000").slice(1,4),10):0));if(t=e.match(fg),t)return new Date(Date.UTC(+t[1],+t[2]-1,+t[3],0,0,0,0));if(t=e.match(Mu),t)return new Date(Date.UTC(+t[1],+t[2]-1,+t[3],+t[4],+t[5],t[6]&&parseInt(t[6].slice(1),10)||0,t[7]&&parseInt((t[7]+"0000").slice(1,4),10)||0));var i=new Date(e);return i}function si(e){if(typeof JSON<"u"&&!Array.isArray(e))return JSON.parse(JSON.stringify(e));if(typeof e!="object"||e==null)return e;if(e instanceof Date)return new Date(e.getTime());var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=si(e[t]));return n}function He(e,n){for(var t="";t.length<n;)t+=e;return t}function oo(e){var n=Number(e);if(!isNaN(n))return isFinite(n)?n:NaN;if(!/\d/.test(e))return n;var t=1,i=e.replace(/([\d]),([\d])/g,"$1$2").replace(/[$]/g,"").replace(/[%]/g,function(){return t*=100,""});return!isNaN(n=Number(i))||(i=i.replace(/[(]([^()]*)[)]/,function(a,r){return t=-t,r}),!isNaN(n=Number(i)))?n/t:n}var pg=/^(0?\d|1[0-2])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))\s+([ap])m?$/,mg=/^([01]?\d|2[0-3])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))$/,bg=/^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)(\.\d+)?[Z]?$/,kg=new Date("6/9/69 00:00 UTC").valueOf()==-177984e5;function vg(e){return e[2]?e[3]?e[4]?new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),+e[2],+e[4],parseFloat(e[3])*1e3)):new Date(Date.UTC(1899,11,31,e[7]=="p"?12:0,+e[1],+e[2],parseFloat(e[3])*1e3)):e[5]?new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),+e[2],+e[5],e[6]?parseFloat(e[6])*1e3:0)):new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),+e[2],0,0)):new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),0,0,0))}function Cg(e){return e[2]?e[3]?e[4]?new Date(Date.UTC(1899,11,31,+e[1],+e[2],+e[4],parseFloat(e[3])*1e3)):new Date(Date.UTC(1899,11,31,0,+e[1],+e[2],parseFloat(e[3])*1e3)):e[5]?new Date(Date.UTC(1899,11,31,+e[1],+e[2],+e[5],e[6]?parseFloat(e[6])*1e3:0)):new Date(Date.UTC(1899,11,31,+e[1],+e[2],0,0)):new Date(Date.UTC(1899,11,31,+e[1],0,0,0))}var yg=["january","february","march","april","may","june","july","august","september","october","november","december"];function Eg(e){if(bg.test(e))return e.indexOf("Z")==-1?Ui(new Date(e)):new Date(e);var n=e.toLowerCase(),t=n.replace(/\s+/g," ").trim(),i=t.match(pg);if(i)return vg(i);if(i=t.match(mg),i)return Cg(i);if(i=t.match(Mu),i)return new Date(Date.UTC(+i[1],+i[2]-1,+i[3],+i[4],+i[5],i[6]&&parseInt(i[6].slice(1),10)||0,i[7]&&parseInt((i[7]+"0000").slice(1,4),10)||0));var a=new Date(kg&&e.indexOf("UTC")==-1?e+" UTC":e),r=new Date(NaN),o=a.getYear();a.getMonth();var u=a.getDate();if(isNaN(u))return r;if(n.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)){if(n=n.replace(/[^a-z]/g,"").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/,""),n.length>3&&yg.indexOf(n)==-1)return r}else if(n.replace(/[ap]m?/,"").match(/[a-z]/))return r;return o<0||o>8099||e.match(/[^-0-9:,\/\\\ ]/)?r:a}function Sg(e){return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds())}function Ui(e){return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()))}function we(e,n,t){if(e.FullPaths){if(Array.isArray(t)&&typeof t[0]=="string"&&(t=t.join("")),typeof t=="string"){var i;return he?i=tn(t):i=Lh(t),Et.utils.cfb_add(e,n,i)}Et.utils.cfb_add(e,n,t)}else e.file(n,t)}function wg(){return Et.utils.cfb_new()}var Ke=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,xg={"&quot;":'"',"&apos;":"'","&gt;":">","&lt;":"<","&amp;":"&"},Pu=ug(xg),Bu=/[&<>'"]/g,Ag=/[\u0000-\u0008\u000b-\u001f\uFFFE-\uFFFF]/g;function ge(e){var n=e+"";return n.replace(Bu,function(t){return Pu[t]}).replace(Ag,function(t){return"_x"+("000"+t.charCodeAt(0).toString(16)).slice(-4)+"_"})}var _g=/[\u0000-\u001f]/g;function da(e){var n=e+"";return n.replace(Bu,function(t){return Pu[t]}).replace(/\n/g,"<br/>").replace(_g,function(t){return"&#x"+("000"+t.charCodeAt(0).toString(16)).slice(-4)+";"})}function ha(e){for(var n="",t=0,i=0,a=0,r=0,o=0,u=0;t<e.length;){if(i=e.charCodeAt(t++),i<128){n+=String.fromCharCode(i);continue}if(a=e.charCodeAt(t++),i>191&&i<224){o=(i&31)<<6,o|=a&63,n+=String.fromCharCode(o);continue}if(r=e.charCodeAt(t++),i<240){n+=String.fromCharCode((i&15)<<12|(a&63)<<6|r&63);continue}o=e.charCodeAt(t++),u=((i&7)<<18|(a&63)<<12|(r&63)<<6|o&63)-65536,n+=String.fromCharCode(55296+(u>>>10&1023)),n+=String.fromCharCode(56320+(u&1023))}return n}function uo(e){var n=Fn(2*e.length),t,i,a=1,r=0,o=0,u;for(i=0;i<e.length;i+=a)a=1,(u=e.charCodeAt(i))<128?t=u:u<224?(t=(u&31)*64+(e.charCodeAt(i+1)&63),a=2):u<240?(t=(u&15)*4096+(e.charCodeAt(i+1)&63)*64+(e.charCodeAt(i+2)&63),a=3):(a=4,t=(u&7)*262144+(e.charCodeAt(i+1)&63)*4096+(e.charCodeAt(i+2)&63)*64+(e.charCodeAt(i+3)&63),t-=65536,o=55296+(t>>>10&1023),t=56320+(t&1023)),o!==0&&(n[r++]=o&255,n[r++]=o>>>8,o=0),n[r++]=t%256,n[r++]=t>>>8;return n.slice(0,r).toString("ucs2")}function so(e){return tn(e,"binary").toString("utf8")}var ki="foo bar bazâð£",Gg=he&&(so(ki)==ha(ki)&&so||uo(ki)==ha(ki)&&uo)||ha,Og=he?function(e){return tn(e,"utf8").toString("binary")}:function(e){for(var n=[],t=0,i=0,a=0;t<e.length;)switch(i=e.charCodeAt(t++),!0){case i<128:n.push(String.fromCharCode(i));break;case i<2048:n.push(String.fromCharCode(192+(i>>6))),n.push(String.fromCharCode(128+(i&63)));break;case(i>=55296&&i<57344):i-=55296,a=e.charCodeAt(t++)-56320+(i<<10),n.push(String.fromCharCode(240+(a>>18&7))),n.push(String.fromCharCode(144+(a>>12&63))),n.push(String.fromCharCode(128+(a>>6&63))),n.push(String.fromCharCode(128+(a&63)));break;default:n.push(String.fromCharCode(224+(i>>12))),n.push(String.fromCharCode(128+(i>>6&63))),n.push(String.fromCharCode(128+(i&63)))}return n.join("")},Fg=function(){var e=[["nbsp"," "],["middot","·"],["quot",'"'],["apos","'"],["gt",">"],["lt","<"],["amp","&"]].map(function(n){return[new RegExp("&"+n[0]+";","ig"),n[1]]});return function(t){for(var i=t.replace(/^[\t\n\r ]+/,"").replace(/(^|[^\t\n\r ])[\t\n\r ]+$/,"$1").replace(/>\s+/g,">").replace(/\b\s+</g,"<").replace(/[\t\n\r ]+/g," ").replace(/<\s*[bB][rR]\s*\/?>/g,`
`).replace(/<[^<>]*>/g,""),a=0;a<e.length;++a)i=i.replace(e[a][0],e[a][1]);return i}}(),Vu=/(^\s|\s$|\n)/;function wt(e,n){return"<"+e+(n.match(Vu)?' xml:space="preserve"':"")+">"+n+"</"+e+">"}function zu(e){return nn(e).map(function(n){return" "+n+'="'+e[n]+'"'}).join("")}function W(e,n,t){return"<"+e+(t!=null?zu(t):"")+(n!=null?(n.match(Vu)?' xml:space="preserve"':"")+">"+n+"</"+e:"/")+">"}function ja(e,n){try{return e.toISOString().replace(/\.\d*/,"")}catch(t){if(n)throw t}return""}function Ng(e,n){switch(typeof e){case"string":var t=W("vt:lpwstr",ge(e));return t=t.replace(/&quot;/g,"_x0022_"),t;case"number":return W((e|0)==e?"vt:i4":"vt:r8",ge(String(e)));case"boolean":return W("vt:bool",e?"true":"false")}if(e instanceof Date)return W("vt:filetime",ja(e));throw new Error("Unable to serialize "+e)}var Ae={CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/metadata/core-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",CT:"http://schemas.openxmlformats.org/package/2006/content-types",RELS:"http://schemas.openxmlformats.org/package/2006/relationships",TCMNT:"http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",dc:"http://purl.org/dc/elements/1.1/",dcterms:"http://purl.org/dc/terms/",dcmitype:"http://purl.org/dc/dcmitype/",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",vt:"http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",xsi:"http://www.w3.org/2001/XMLSchema-instance",xsd:"http://www.w3.org/2001/XMLSchema"},Rn=["http://schemas.openxmlformats.org/spreadsheetml/2006/main","http://purl.oclc.org/ooxml/spreadsheetml/main","http://schemas.microsoft.com/office/excel/2006/main","http://schemas.microsoft.com/office/excel/2006/2"],vi={o:"urn:schemas-microsoft-com:office:office",x:"urn:schemas-microsoft-com:office:excel",mv:"http://macVmlSchemaUri",v:"urn:schemas-microsoft-com:vml"};function Dg(e,n){for(var t=1-2*(e[n+7]>>>7),i=((e[n+7]&127)<<4)+(e[n+6]>>>4&15),a=e[n+6]&15,r=5;r>=0;--r)a=a*256+e[n+r];return i==2047?a==0?t*(1/0):NaN:(i==0?i=-1022:(i-=1023,a+=Math.pow(2,52)),t*Math.pow(2,i-52)*a)}function Lg(e,n,t){var i=(n<0||1/n==-1/0?1:0)<<7,a=0,r=0,o=i?-n:n;isFinite(o)?o==0?a=r=0:(a=Math.floor(Math.log(o)/Math.LN2),r=o*Math.pow(2,52-a),a<=-1023&&(!isFinite(r)||r<Math.pow(2,52))?a=-1022:(r-=Math.pow(2,52),a+=1023)):(a=2047,r=isNaN(n)?26985:0);for(var u=0;u<=5;++u,r/=256)e[t+u]=r&255;e[t+6]=(a&15)<<4|r&15,e[t+7]=a>>4|i}var co=function(e){for(var n=[],t=10240,i=0;i<e[0].length;++i)if(e[0][i])for(var a=0,r=e[0][i].length;a<r;a+=t)n.push.apply(n,e[0][i].slice(a,a+t));return n},lo=he?function(e){return e[0].length>0&&Buffer.isBuffer(e[0][0])?Buffer.concat(e[0].map(function(n){return Buffer.isBuffer(n)?n:tn(n)})):co(e)}:co,ho=function(e,n,t){for(var i=[],a=n;a<t;a+=2)i.push(String.fromCharCode(Bn(e,a)));return i.join("").replace(Wn,"")},fr=he?function(e,n,t){return!Buffer.isBuffer(e)||!Ri?ho(e,n,t):e.toString("utf16le",n,t).replace(Wn,"")}:ho,go=function(e,n,t){for(var i=[],a=n;a<n+t;++a)i.push(("0"+e[a].toString(16)).slice(-2));return i.join("")},$u=he?function(e,n,t){return Buffer.isBuffer(e)?e.toString("hex",n,n+t):go(e,n,t)}:go,fo=function(e,n,t){for(var i=[],a=n;a<t;a++)i.push(String.fromCharCode(En(e,a)));return i.join("")},ci=he?function(n,t,i){return Buffer.isBuffer(n)?n.toString("utf8",t,i):fo(n,t,i)}:fo,ju=function(e,n){var t=nt(e,n);return t>0?ci(e,n+4,n+4+t-1):""},Uu=ju,qu=function(e,n){var t=nt(e,n);return t>0?ci(e,n+4,n+4+t-1):""},Wu=qu,Xu=function(e,n){var t=2*nt(e,n);return t>0?ci(e,n+4,n+4+t-1):""},Ku=Xu,Yu=function(n,t){var i=nt(n,t);return i>0?fr(n,t+4,t+4+i):""},Ju=Yu,Zu=function(e,n){var t=nt(e,n);return t>0?ci(e,n+4,n+4+t):""},Qu=Zu,es=function(e,n){return Dg(e,n)},Ua=es;he&&(Uu=function(n,t){if(!Buffer.isBuffer(n))return ju(n,t);var i=n.readUInt32LE(t);return i>0?n.toString("utf8",t+4,t+4+i-1):""},Wu=function(n,t){if(!Buffer.isBuffer(n))return qu(n,t);var i=n.readUInt32LE(t);return i>0?n.toString("utf8",t+4,t+4+i-1):""},Ku=function(n,t){if(!Buffer.isBuffer(n)||!Ri)return Xu(n,t);var i=2*n.readUInt32LE(t);return n.toString("utf16le",t+4,t+4+i-1)},Ju=function(n,t){if(!Buffer.isBuffer(n)||!Ri)return Yu(n,t);var i=n.readUInt32LE(t);return n.toString("utf16le",t+4,t+4+i)},Qu=function(n,t){if(!Buffer.isBuffer(n))return Zu(n,t);var i=n.readUInt32LE(t);return n.toString("utf8",t+4,t+4+i)},Ua=function(n,t){return Buffer.isBuffer(n)?n.readDoubleLE(t):es(n,t)});var En=function(e,n){return e[n]},Bn=function(e,n){return e[n+1]*256+e[n]},Rg=function(e,n){var t=e[n+1]*256+e[n];return t<32768?t:(65535-t+1)*-1},nt=function(e,n){return e[n+3]*(1<<24)+(e[n+2]<<16)+(e[n+1]<<8)+e[n]},Sn=function(e,n){return e[n+3]<<24|e[n+2]<<16|e[n+1]<<8|e[n]},Hg=function(e,n){return e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3]};function Xn(e,n){var t="",i,a,r=[],o,u,s,c;switch(n){case"dbcs":if(c=this.l,he&&Buffer.isBuffer(this)&&Ri)t=this.slice(this.l,this.l+2*e).toString("utf16le");else for(s=0;s<e;++s)t+=String.fromCharCode(Bn(this,c)),c+=2;e*=2;break;case"utf8":t=ci(this,this.l,this.l+e);break;case"utf16le":e*=2,t=fr(this,this.l,this.l+e);break;case"wstr":return Xn.call(this,e,"dbcs");case"lpstr-ansi":t=Uu(this,this.l),e=4+nt(this,this.l);break;case"lpstr-cp":t=Wu(this,this.l),e=4+nt(this,this.l);break;case"lpwstr":t=Ku(this,this.l),e=4+2*nt(this,this.l);break;case"lpp4":e=4+nt(this,this.l),t=Ju(this,this.l),e&2&&(e+=2);break;case"8lpp4":e=4+nt(this,this.l),t=Qu(this,this.l),e&3&&(e+=4-(e&3));break;case"cstr":for(e=0,t="";(o=En(this,this.l+e++))!==0;)r.push(mi(o));t=r.join("");break;case"_wstr":for(e=0,t="";(o=Bn(this,this.l+e))!==0;)r.push(mi(o)),e+=2;e+=2,t=r.join("");break;case"dbcs-cont":for(t="",c=this.l,s=0;s<e;++s){if(this.lens&&this.lens.indexOf(c)!==-1)return o=En(this,c),this.l=c+1,u=Xn.call(this,e-s,o?"dbcs-cont":"sbcs-cont"),r.join("")+u;r.push(mi(Bn(this,c))),c+=2}t=r.join(""),e*=2;break;case"cpstr":case"sbcs-cont":for(t="",c=this.l,s=0;s!=e;++s){if(this.lens&&this.lens.indexOf(c)!==-1)return o=En(this,c),this.l=c+1,u=Xn.call(this,e-s,o?"dbcs-cont":"sbcs-cont"),r.join("")+u;r.push(mi(En(this,c))),c+=1}t=r.join("");break;default:switch(e){case 1:return i=En(this,this.l),this.l++,i;case 2:return i=(n==="i"?Rg:Bn)(this,this.l),this.l+=2,i;case 4:case-4:return n==="i"||(this[this.l+3]&128)===0?(i=(e>0?Sn:Hg)(this,this.l),this.l+=4,i):(a=nt(this,this.l),this.l+=4,a);case 8:case-8:if(n==="f")return e==8?a=Ua(this,this.l):a=Ua([this[this.l+7],this[this.l+6],this[this.l+5],this[this.l+4],this[this.l+3],this[this.l+2],this[this.l+1],this[this.l+0]],0),this.l+=8,a;e=8;case 16:t=$u(this,this.l,e);break}}return this.l+=e,t}var Tg=function(e,n,t){e[t]=n&255,e[t+1]=n>>>8&255,e[t+2]=n>>>16&255,e[t+3]=n>>>24&255},Ig=function(e,n,t){e[t]=n&255,e[t+1]=n>>8&255,e[t+2]=n>>16&255,e[t+3]=n>>24&255},Mg=function(e,n,t){e[t]=n&255,e[t+1]=n>>>8&255};function Pg(e,n,t){var i=0,a=0;if(t==="dbcs"){for(a=0;a!=n.length;++a)Mg(this,n.charCodeAt(a),this.l+2*a);i=2*n.length}else if(t==="sbcs"||t=="cpstr"){for(n=n.replace(/[^\x00-\x7F]/g,"_"),a=0;a!=n.length;++a)this[this.l+a]=n.charCodeAt(a)&255;i=n.length}else if(t==="hex"){for(;a<e;++a)this[this.l++]=parseInt(n.slice(2*a,2*a+2),16)||0;return this}else if(t==="utf16le"){var r=Math.min(this.l+e,this.length);for(a=0;a<Math.min(n.length,e);++a){var o=n.charCodeAt(a);this[this.l++]=o&255,this[this.l++]=o>>8}for(;this.l<r;)this[this.l++]=0;return this}else switch(e){case 1:i=1,this[this.l]=n&255;break;case 2:i=2,this[this.l]=n&255,n>>>=8,this[this.l+1]=n&255;break;case 3:i=3,this[this.l]=n&255,n>>>=8,this[this.l+1]=n&255,n>>>=8,this[this.l+2]=n&255;break;case 4:i=4,Tg(this,n,this.l);break;case 8:if(i=8,t==="f"){Lg(this,n,this.l);break}case 16:break;case-4:i=4,Ig(this,n,this.l);break}return this.l+=i,this}function ts(e,n){var t=$u(this,this.l,e.length>>1);if(t!==e)throw new Error(n+"Expected "+e+" saw "+t);this.l+=e.length>>1}function Wt(e,n){e.l=n,e.read_shift=Xn,e.chk=ts,e.write_shift=Pg}function Bt(e){var n=Fn(e);return Wt(n,0),n}function Bg(e){return parseInt(Vg(e),10)-1}function gt(e){return""+(e+1)}function Vg(e){return e.replace(/\$(\d+)$/,"$1")}function zg(e){for(var n=$g(e),t=0,i=0;i!==n.length;++i)t=26*t+n.charCodeAt(i)-64;return t-1}function ft(e){if(e<0)throw new Error("invalid column "+e);var n="";for(++e;e;e=Math.floor((e-1)/26))n=String.fromCharCode((e-1)%26+65)+n;return n}function $g(e){return e.replace(/^\$([A-Z])/,"$1")}function jg(e){return e.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(",")}function Nt(e){for(var n=0,t=0,i=0;i<e.length;++i){var a=e.charCodeAt(i);a>=48&&a<=57?n=10*n+(a-48):a>=65&&a<=90&&(t=26*t+(a-64))}return{c:t-1,r:n-1}}function ei(e){for(var n=e.c+1,t="";n;n=(n-1)/26|0)t=String.fromCharCode((n-1)%26+65)+t;return t+(e.r+1)}function hn(e){var n=e.indexOf(":");return n==-1?{s:Nt(e),e:Nt(e)}:{s:Nt(e.slice(0,n)),e:Nt(e.slice(n+1))}}function pt(e,n){return typeof n>"u"||typeof n=="number"?pt(e.s,e.e):(typeof e!="string"&&(e=ei(e)),typeof n!="string"&&(n=ei(n)),e==n?e:e+":"+n)}function ns(e){var n=hn(e);return"$"+ft(n.s.c)+"$"+gt(n.s.r)+":$"+ft(n.e.c)+"$"+gt(n.e.r)}function is(e,n){if(!e)throw new Error("empty sheet name");return/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e)?"'"+e.replace(/'/g,"''")+"'":e}function Lt(e){var n={s:{c:0,r:0},e:{c:0,r:0}},t=0,i=0,a=0,r=e.length;for(t=0;i<r&&!((a=e.charCodeAt(i)-64)<1||a>26);++i)t=26*t+a;for(n.s.c=--t,t=0;i<r&&!((a=e.charCodeAt(i)-48)<0||a>9);++i)t=10*t+a;if(n.s.r=--t,i===r||a!=10)return n.e.c=n.s.c,n.e.r=n.s.r,n;for(++i,t=0;i!=r&&!((a=e.charCodeAt(i)-64)<1||a>26);++i)t=26*t+a;for(n.e.c=--t,t=0;i!=r&&!((a=e.charCodeAt(i)-48)<0||a>9);++i)t=10*t+a;return n.e.r=--t,n}function po(e,n){var t=e.t=="d"&&n instanceof Date;if(e.z!=null)try{return e.w=Qn(e.z,t?$t(n):n)}catch{}try{return e.w=Qn((e.XF||{}).numFmtId||(t?14:0),t?$t(n):n)}catch{return""+n}}function li(e,n,t){return e==null||e.t==null||e.t=="z"?"":e.w!==void 0?e.w:(e.t=="d"&&!e.z&&t&&t.dateNF&&(e.z=t.dateNF),e.t=="e"?Qt[e.v]||e.v:n==null?po(e,e.v):po(e,n))}function Ug(e,n){var t=n&&n.sheet?n.sheet:"Sheet1",i={};return i[t]=e,{SheetNames:[t],Sheets:i}}function qg(e){var n={},t=e||{};return t.dense&&(n["!data"]=[]),n}function as(e,n,t){var i=t||{},a=e?e["!data"]!=null:i.dense,r=e||(a?{"!data":[]}:{});a&&!r["!data"]&&(r["!data"]=[]);var o=0,u=0;if(r&&i.origin!=null)if(typeof i.origin=="number")o=i.origin;else{var s=typeof i.origin=="string"?Nt(i.origin):i.origin;o=s.r,u=s.c}var c={s:{c:1e7,r:1e7},e:{c:0,r:0}};if(r["!ref"]){var l=Lt(r["!ref"]);c.s.c=l.s.c,c.s.r=l.s.r,c.e.c=Math.max(c.e.c,l.e.c),c.e.r=Math.max(c.e.r,l.e.r),o==-1&&(c.e.r=o=r["!ref"]?l.e.r+1:0)}else c.s.c=c.e.c=c.s.r=c.e.r=0;for(var h=[],b=!1,g=0;g!=n.length;++g)if(n[g]){if(!Array.isArray(n[g]))throw new Error("aoa_to_sheet expects an array of arrays");var E=o+g;a&&(r["!data"][E]||(r["!data"][E]=[]),h=r["!data"][E]);for(var C=n[g],w=0;w!=C.length;++w)if(!(typeof C[w]>"u")){var S={v:C[w],t:""},F=u+w;if(c.s.r>E&&(c.s.r=E),c.s.c>F&&(c.s.c=F),c.e.r<E&&(c.e.r=E),c.e.c<F&&(c.e.c=F),b=!0,C[w]&&typeof C[w]=="object"&&!Array.isArray(C[w])&&!(C[w]instanceof Date))S=C[w];else if(Array.isArray(S.v)&&(S.f=C[w][1],S.v=S.v[0]),S.v===null)if(S.f)S.t="n";else if(i.nullError)S.t="e",S.v=0;else if(i.sheetStubs)S.t="z";else continue;else typeof S.v=="number"?isFinite(S.v)?S.t="n":isNaN(S.v)?(S.t="e",S.v=15):(S.t="e",S.v=7):typeof S.v=="boolean"?S.t="b":S.v instanceof Date?(S.z=i.dateNF||At[14],i.UTC||(S.v=Ui(S.v)),i.cellDates?(S.t="d",S.w=Qn(S.z,$t(S.v,i.date1904))):(S.t="n",S.v=$t(S.v,i.date1904),S.w=Qn(S.z,S.v))):S.t="s";if(a)h[F]&&h[F].z&&(S.z=h[F].z),h[F]=S;else{var D=ft(F)+(E+1);r[D]&&r[D].z&&(S.z=r[D].z),r[D]=S}}}return b&&c.s.c<104e5&&(r["!ref"]=pt(c)),r}function Wg(e,n){return as(null,e,n)}var Qt={0:"#NULL!",7:"#DIV/0!",15:"#VALUE!",23:"#REF!",29:"#NAME?",36:"#NUM!",42:"#N/A",43:"#GETTING_DATA",255:"#WTF?"},mo={"#NULL!":0,"#DIV/0!":7,"#VALUE!":15,"#REF!":23,"#NAME?":29,"#NUM!":36,"#N/A":42,"#GETTING_DATA":43,"#WTF?":255},Xg={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":"workbooks","application/vnd.ms-excel.sheet.macroEnabled.main+xml":"workbooks","application/vnd.ms-excel.sheet.binary.macroEnabled.main":"workbooks","application/vnd.ms-excel.addin.macroEnabled.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":"sheets","application/vnd.ms-excel.worksheet":"sheets","application/vnd.ms-excel.binIndexWs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":"charts","application/vnd.ms-excel.chartsheet":"charts","application/vnd.ms-excel.macrosheet+xml":"macros","application/vnd.ms-excel.macrosheet":"macros","application/vnd.ms-excel.intlmacrosheet":"TODO","application/vnd.ms-excel.binIndexMs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":"dialogs","application/vnd.ms-excel.dialogsheet":"dialogs","application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":"strs","application/vnd.ms-excel.sharedStrings":"strs","application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":"styles","application/vnd.ms-excel.styles":"styles","application/vnd.openxmlformats-package.core-properties+xml":"coreprops","application/vnd.openxmlformats-officedocument.custom-properties+xml":"custprops","application/vnd.openxmlformats-officedocument.extended-properties+xml":"extprops","application/vnd.openxmlformats-officedocument.customXmlProperties+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":"comments","application/vnd.ms-excel.comments":"comments","application/vnd.ms-excel.threadedcomments+xml":"threadedcomments","application/vnd.ms-excel.person+xml":"people","application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":"metadata","application/vnd.ms-excel.sheetMetadata":"metadata","application/vnd.ms-excel.pivotTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.chart+xml":"TODO","application/vnd.ms-office.chartcolorstyle+xml":"TODO","application/vnd.ms-office.chartstyle+xml":"TODO","application/vnd.ms-office.chartex+xml":"TODO","application/vnd.ms-excel.calcChain":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":"TODO","application/vnd.ms-office.activeX":"TODO","application/vnd.ms-office.activeX+xml":"TODO","application/vnd.ms-excel.attachedToolbars":"TODO","application/vnd.ms-excel.connections":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":"TODO","application/vnd.ms-excel.externalLink":"links","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":"links","application/vnd.ms-excel.pivotCacheDefinition":"TODO","application/vnd.ms-excel.pivotCacheRecords":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":"TODO","application/vnd.ms-excel.queryTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":"TODO","application/vnd.ms-excel.userNames":"TODO","application/vnd.ms-excel.revisionHeaders":"TODO","application/vnd.ms-excel.revisionLog":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":"TODO","application/vnd.ms-excel.tableSingleCells":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":"TODO","application/vnd.ms-excel.slicer":"TODO","application/vnd.ms-excel.slicerCache":"TODO","application/vnd.ms-excel.slicer+xml":"TODO","application/vnd.ms-excel.slicerCache+xml":"TODO","application/vnd.ms-excel.wsSortMap":"TODO","application/vnd.ms-excel.table":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":"TODO","application/vnd.openxmlformats-officedocument.theme+xml":"themes","application/vnd.openxmlformats-officedocument.themeOverride+xml":"TODO","application/vnd.ms-excel.Timeline+xml":"TODO","application/vnd.ms-excel.TimelineCache+xml":"TODO","application/vnd.ms-office.vbaProject":"vba","application/vnd.ms-office.vbaProjectSignature":"TODO","application/vnd.ms-office.volatileDependencies":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":"TODO","application/vnd.ms-excel.controlproperties+xml":"TODO","application/vnd.openxmlformats-officedocument.model+data":"TODO","application/vnd.ms-excel.Survey+xml":"TODO","application/vnd.openxmlformats-officedocument.drawing+xml":"drawings","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":"TODO","application/vnd.openxmlformats-officedocument.vmlDrawing":"TODO","application/vnd.openxmlformats-package.relationships+xml":"rels","application/vnd.openxmlformats-officedocument.oleObject":"TODO","image/png":"TODO",sheet:"js"},Ci={workbooks:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",xlsm:"application/vnd.ms-excel.sheet.macroEnabled.main+xml",xlsb:"application/vnd.ms-excel.sheet.binary.macroEnabled.main",xlam:"application/vnd.ms-excel.addin.macroEnabled.main+xml",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"},strs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",xlsb:"application/vnd.ms-excel.sharedStrings"},comments:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",xlsb:"application/vnd.ms-excel.comments"},sheets:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",xlsb:"application/vnd.ms-excel.worksheet"},charts:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",xlsb:"application/vnd.ms-excel.chartsheet"},dialogs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",xlsb:"application/vnd.ms-excel.dialogsheet"},macros:{xlsx:"application/vnd.ms-excel.macrosheet+xml",xlsb:"application/vnd.ms-excel.macrosheet"},metadata:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",xlsb:"application/vnd.ms-excel.sheetMetadata"},styles:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",xlsb:"application/vnd.ms-excel.styles"}};function Kg(){return{workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],threadedcomments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],metadata:[],people:[],TODO:[],xmlns:""}}function Yg(e,n,t){var i=cg(Xg),a=[],r;a[a.length]=Ke,a[a.length]=W("Types",null,{xmlns:Ae.CT,"xmlns:xsd":Ae.xsd,"xmlns:xsi":Ae.xsi}),a=a.concat([["xml","application/xml"],["bin","application/vnd.ms-excel.sheet.binary.macroEnabled.main"],["vml","application/vnd.openxmlformats-officedocument.vmlDrawing"],["data","application/vnd.openxmlformats-officedocument.model+data"],["bmp","image/bmp"],["png","image/png"],["gif","image/gif"],["emf","image/x-emf"],["wmf","image/x-wmf"],["jpg","image/jpeg"],["jpeg","image/jpeg"],["tif","image/tiff"],["tiff","image/tiff"],["pdf","application/pdf"],["rels","application/vnd.openxmlformats-package.relationships+xml"]].map(function(c){return W("Default",null,{Extension:c[0],ContentType:c[1]})}));var o=function(c){e[c]&&e[c].length>0&&(r=e[c][0],a[a.length]=W("Override",null,{PartName:(r[0]=="/"?"":"/")+r,ContentType:Ci[c][n.bookType]||Ci[c].xlsx}))},u=function(c){(e[c]||[]).forEach(function(l){a[a.length]=W("Override",null,{PartName:(l[0]=="/"?"":"/")+l,ContentType:Ci[c][n.bookType]||Ci[c].xlsx})})},s=function(c){(e[c]||[]).forEach(function(l){a[a.length]=W("Override",null,{PartName:(l[0]=="/"?"":"/")+l,ContentType:i[c][0]})})};return o("workbooks"),u("sheets"),u("charts"),s("themes"),["strs","styles"].forEach(o),["coreprops","extprops","custprops"].forEach(s),s("vba"),s("comments"),s("threadedcomments"),s("drawings"),u("metadata"),s("people"),a.length>2&&(a[a.length]="</Types>",a[1]=a[1].replace("/>",">")),a.join("")}var ye={WB:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",HLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",VML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",XPATH:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",XMISS:"http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",CMNT:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",SST:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",STY:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",THEME:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",WS:["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet","http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],DRAW:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",XLMETA:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",TCMNT:"http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",PEOPLE:"http://schemas.microsoft.com/office/2017/10/relationships/person",VBA:"http://schemas.microsoft.com/office/2006/relationships/vbaProject"};function Jg(e){var n=e.lastIndexOf("/");return e.slice(0,n+1)+"_rels/"+e.slice(n+1)+".rels"}function ga(e){var n=[Ke,W("Relationships",null,{xmlns:Ae.RELS})];return nn(e["!id"]).forEach(function(t){n[n.length]=W("Relationship",null,e["!id"][t])}),n.length>2&&(n[n.length]="</Relationships>",n[1]=n[1].replace("/>",">")),n.join("")}function Le(e,n,t,i,a,r){if(a||(a={}),e["!id"]||(e["!id"]={}),e["!idx"]||(e["!idx"]=1),n<0)for(n=e["!idx"];e["!id"]["rId"+n];++n);if(e["!idx"]=n+1,a.Id="rId"+n,a.Type=i,a.Target=t,[ye.HLINK,ye.XPATH,ye.XMISS].indexOf(a.Type)>-1&&(a.TargetMode="External"),e["!id"][a.Id])throw new Error("Cannot rewrite rId "+n);return e["!id"][a.Id]=a,e[("/"+a.Target).replace("//","/")]=a,n}var bo=[["cp:category","Category"],["cp:contentStatus","ContentStatus"],["cp:keywords","Keywords"],["cp:lastModifiedBy","LastAuthor"],["cp:lastPrinted","LastPrinted"],["cp:revision","RevNumber"],["cp:version","Version"],["dc:creator","Author"],["dc:description","Comments"],["dc:identifier","Identifier"],["dc:language","Language"],["dc:subject","Subject"],["dc:title","Title"],["dcterms:created","CreatedDate","date"],["dcterms:modified","ModifiedDate","date"]];function fa(e,n,t,i,a){a[e]!=null||n==null||n===""||(a[e]=n,n=ge(n),i[i.length]=t?W(e,n,t):wt(e,n))}function Zg(e,n){var t=n||{},i=[Ke,W("cp:coreProperties",null,{"xmlns:cp":Ae.CORE_PROPS,"xmlns:dc":Ae.dc,"xmlns:dcterms":Ae.dcterms,"xmlns:dcmitype":Ae.dcmitype,"xmlns:xsi":Ae.xsi})],a={};if(!e&&!t.Props)return i.join("");e&&(e.CreatedDate!=null&&fa("dcterms:created",typeof e.CreatedDate=="string"?e.CreatedDate:ja(e.CreatedDate,t.WTF),{"xsi:type":"dcterms:W3CDTF"},i,a),e.ModifiedDate!=null&&fa("dcterms:modified",typeof e.ModifiedDate=="string"?e.ModifiedDate:ja(e.ModifiedDate,t.WTF),{"xsi:type":"dcterms:W3CDTF"},i,a));for(var r=0;r!=bo.length;++r){var o=bo[r],u=t.Props&&t.Props[o[1]]!=null?t.Props[o[1]]:e?e[o[1]]:null;u===!0?u="1":u===!1?u="0":typeof u=="number"&&(u=String(u)),u!=null&&fa(o[0],u,null,i,a)}return i.length>2&&(i[i.length]="</cp:coreProperties>",i[1]=i[1].replace("/>",">")),i.join("")}var Qg=[["Application","Application","string"],["AppVersion","AppVersion","string"],["Company","Company","string"],["DocSecurity","DocSecurity","string"],["Manager","Manager","string"],["HyperlinksChanged","HyperlinksChanged","bool"],["SharedDoc","SharedDoc","bool"],["LinksUpToDate","LinksUpToDate","bool"],["ScaleCrop","ScaleCrop","bool"],["HeadingPairs","HeadingPairs","raw"],["TitlesOfParts","TitlesOfParts","raw"]];function ef(e){var n=[],t=W;return e||(e={}),e.Application="SheetJS",n[n.length]=Ke,n[n.length]=W("Properties",null,{xmlns:Ae.EXT_PROPS,"xmlns:vt":Ae.vt}),Qg.forEach(function(i){if(e[i[1]]!==void 0){var a;switch(i[2]){case"string":a=ge(String(e[i[1]]));break;case"bool":a=e[i[1]]?"true":"false";break}a!==void 0&&(n[n.length]=t(i[0],a))}}),n[n.length]=t("HeadingPairs",t("vt:vector",t("vt:variant","<vt:lpstr>Worksheets</vt:lpstr>")+t("vt:variant",t("vt:i4",String(e.Worksheets))),{size:2,baseType:"variant"})),n[n.length]=t("TitlesOfParts",t("vt:vector",e.SheetNames.map(function(i){return"<vt:lpstr>"+ge(i)+"</vt:lpstr>"}).join(""),{size:e.Worksheets,baseType:"lpstr"})),n.length>2&&(n[n.length]="</Properties>",n[1]=n[1].replace("/>",">")),n.join("")}function tf(e){var n=[Ke,W("Properties",null,{xmlns:Ae.CUST_PROPS,"xmlns:vt":Ae.vt})];if(!e)return n.join("");var t=1;return nn(e).forEach(function(a){++t,n[n.length]=W("property",Ng(e[a]),{fmtid:"{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",pid:t,name:ge(a)})}),n.length>2&&(n[n.length]="</Properties>",n[1]=n[1].replace("/>",">")),n.join("")}var nf=/^\s|\s$|[\t\n\r]/;function af(e,n){if(!n.bookSST)return"";var t=[Ke];t[t.length]=W("sst",null,{xmlns:Rn[0],count:e.Count,uniqueCount:e.Unique});for(var i=0;i!=e.length;++i)if(e[i]!=null){var a=e[i],r="<si>";a.r?r+=a.r:(r+="<t",a.t||(a.t=""),typeof a.t!="string"&&(a.t=String(a.t)),a.t.match(nf)&&(r+=' xml:space="preserve"'),r+=">"+ge(a.t)+"</t>"),r+="</si>",t[t.length]=r}return t.length>2&&(t[t.length]="</sst>",t[1]=t[1].replace("/>",">")),t.join("")}function rf(e){for(var n=[],t=e.split(""),i=0;i<t.length;++i)n[i]=t[i].charCodeAt(0);return n}function of(e){var n=0,t,i=rf(e),a=i.length+1,r,o,u,s,c;for(t=Fn(a),t[0]=i.length,r=1;r!=a;++r)t[r]=i[r-1];for(r=a-1;r>=0;--r)o=t[r],u=(n&16384)===0?0:1,s=n<<1&32767,c=u|s,n=c^o;return n^52811}var uf=6,Mi=uf;function sf(e){return Math.floor((e-5)/Mi*100+.5)/100}function cf(e){return Math.round((e*Mi+5)/Mi*256)/256}var lf=96,df=lf;function ko(e){return e*96/df}function hf(e){var n=["<numFmts>"];return[[5,8],[23,26],[41,44],[50,392]].forEach(function(t){for(var i=t[0];i<=t[1];++i)e[i]!=null&&(n[n.length]=W("numFmt",null,{numFmtId:i,formatCode:ge(e[i])}))}),n.length===1?"":(n[n.length]="</numFmts>",n[0]=W("numFmts",null,{count:n.length-2}).replace("/>",">"),n.join(""))}function gf(e){var n=[];return n[n.length]=W("cellXfs",null),e.forEach(function(t){n[n.length]=W("xf",null,t)}),n[n.length]="</cellXfs>",n.length===2?"":(n[0]=W("cellXfs",null,{count:n.length-2}).replace("/>",">"),n.join(""))}function ff(e,n){var t=[Ke,W("styleSheet",null,{xmlns:Rn[0],"xmlns:vt":Ae.vt})],i;return e.SSF&&(i=hf(e.SSF))!=null&&(t[t.length]=i),t[t.length]='<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>',t[t.length]='<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>',t[t.length]='<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>',t[t.length]='<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>',(i=gf(n.cellXfs))&&(t[t.length]=i),t[t.length]='<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>',t[t.length]='<dxfs count="0"/>',t[t.length]='<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>',t.length>2&&(t[t.length]="</styleSheet>",t[1]=t[1].replace("/>",">")),t.join("")}function pf(e,n){if(n&&n.themeXLSX)return n.themeXLSX;if(e&&typeof e.raw=="string")return e.raw;var t=[Ke];return t[t.length]='<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">',t[t.length]="<a:themeElements>",t[t.length]='<a:clrScheme name="Office">',t[t.length]='<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>',t[t.length]='<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>',t[t.length]='<a:dk2><a:srgbClr val="1F497D"/></a:dk2>',t[t.length]='<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>',t[t.length]='<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>',t[t.length]='<a:accent2><a:srgbClr val="C0504D"/></a:accent2>',t[t.length]='<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>',t[t.length]='<a:accent4><a:srgbClr val="8064A2"/></a:accent4>',t[t.length]='<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>',t[t.length]='<a:accent6><a:srgbClr val="F79646"/></a:accent6>',t[t.length]='<a:hlink><a:srgbClr val="0000FF"/></a:hlink>',t[t.length]='<a:folHlink><a:srgbClr val="800080"/></a:folHlink>',t[t.length]="</a:clrScheme>",t[t.length]='<a:fontScheme name="Office">',t[t.length]="<a:majorFont>",t[t.length]='<a:latin typeface="Cambria"/>',t[t.length]='<a:ea typeface=""/>',t[t.length]='<a:cs typeface=""/>',t[t.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',t[t.length]='<a:font script="Hang" typeface="맑은 고딕"/>',t[t.length]='<a:font script="Hans" typeface="宋体"/>',t[t.length]='<a:font script="Hant" typeface="新細明體"/>',t[t.length]='<a:font script="Arab" typeface="Times New Roman"/>',t[t.length]='<a:font script="Hebr" typeface="Times New Roman"/>',t[t.length]='<a:font script="Thai" typeface="Tahoma"/>',t[t.length]='<a:font script="Ethi" typeface="Nyala"/>',t[t.length]='<a:font script="Beng" typeface="Vrinda"/>',t[t.length]='<a:font script="Gujr" typeface="Shruti"/>',t[t.length]='<a:font script="Khmr" typeface="MoolBoran"/>',t[t.length]='<a:font script="Knda" typeface="Tunga"/>',t[t.length]='<a:font script="Guru" typeface="Raavi"/>',t[t.length]='<a:font script="Cans" typeface="Euphemia"/>',t[t.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',t[t.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',t[t.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',t[t.length]='<a:font script="Thaa" typeface="MV Boli"/>',t[t.length]='<a:font script="Deva" typeface="Mangal"/>',t[t.length]='<a:font script="Telu" typeface="Gautami"/>',t[t.length]='<a:font script="Taml" typeface="Latha"/>',t[t.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',t[t.length]='<a:font script="Orya" typeface="Kalinga"/>',t[t.length]='<a:font script="Mlym" typeface="Kartika"/>',t[t.length]='<a:font script="Laoo" typeface="DokChampa"/>',t[t.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',t[t.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',t[t.length]='<a:font script="Viet" typeface="Times New Roman"/>',t[t.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',t[t.length]='<a:font script="Geor" typeface="Sylfaen"/>',t[t.length]="</a:majorFont>",t[t.length]="<a:minorFont>",t[t.length]='<a:latin typeface="Calibri"/>',t[t.length]='<a:ea typeface=""/>',t[t.length]='<a:cs typeface=""/>',t[t.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',t[t.length]='<a:font script="Hang" typeface="맑은 고딕"/>',t[t.length]='<a:font script="Hans" typeface="宋体"/>',t[t.length]='<a:font script="Hant" typeface="新細明體"/>',t[t.length]='<a:font script="Arab" typeface="Arial"/>',t[t.length]='<a:font script="Hebr" typeface="Arial"/>',t[t.length]='<a:font script="Thai" typeface="Tahoma"/>',t[t.length]='<a:font script="Ethi" typeface="Nyala"/>',t[t.length]='<a:font script="Beng" typeface="Vrinda"/>',t[t.length]='<a:font script="Gujr" typeface="Shruti"/>',t[t.length]='<a:font script="Khmr" typeface="DaunPenh"/>',t[t.length]='<a:font script="Knda" typeface="Tunga"/>',t[t.length]='<a:font script="Guru" typeface="Raavi"/>',t[t.length]='<a:font script="Cans" typeface="Euphemia"/>',t[t.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',t[t.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',t[t.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',t[t.length]='<a:font script="Thaa" typeface="MV Boli"/>',t[t.length]='<a:font script="Deva" typeface="Mangal"/>',t[t.length]='<a:font script="Telu" typeface="Gautami"/>',t[t.length]='<a:font script="Taml" typeface="Latha"/>',t[t.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',t[t.length]='<a:font script="Orya" typeface="Kalinga"/>',t[t.length]='<a:font script="Mlym" typeface="Kartika"/>',t[t.length]='<a:font script="Laoo" typeface="DokChampa"/>',t[t.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',t[t.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',t[t.length]='<a:font script="Viet" typeface="Arial"/>',t[t.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',t[t.length]='<a:font script="Geor" typeface="Sylfaen"/>',t[t.length]="</a:minorFont>",t[t.length]="</a:fontScheme>",t[t.length]='<a:fmtScheme name="Office">',t[t.length]="<a:fillStyleLst>",t[t.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:lin ang="16200000" scaled="1"/>',t[t.length]="</a:gradFill>",t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:lin ang="16200000" scaled="0"/>',t[t.length]="</a:gradFill>",t[t.length]="</a:fillStyleLst>",t[t.length]="<a:lnStyleLst>",t[t.length]='<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>',t[t.length]='<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',t[t.length]='<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',t[t.length]="</a:lnStyleLst>",t[t.length]="<a:effectStyleLst>",t[t.length]="<a:effectStyle>",t[t.length]="<a:effectLst>",t[t.length]='<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>',t[t.length]="</a:effectLst>",t[t.length]="</a:effectStyle>",t[t.length]="<a:effectStyle>",t[t.length]="<a:effectLst>",t[t.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',t[t.length]="</a:effectLst>",t[t.length]="</a:effectStyle>",t[t.length]="<a:effectStyle>",t[t.length]="<a:effectLst>",t[t.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',t[t.length]="</a:effectLst>",t[t.length]='<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>',t[t.length]='<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>',t[t.length]="</a:effectStyle>",t[t.length]="</a:effectStyleLst>",t[t.length]="<a:bgFillStyleLst>",t[t.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>',t[t.length]="</a:gradFill>",t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>',t[t.length]="</a:gradFill>",t[t.length]="</a:bgFillStyleLst>",t[t.length]="</a:fmtScheme>",t[t.length]="</a:themeElements>",t[t.length]="<a:objectDefaults>",t[t.length]="<a:spDef>",t[t.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>',t[t.length]="</a:spDef>",t[t.length]="<a:lnDef>",t[t.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>',t[t.length]="</a:lnDef>",t[t.length]="</a:objectDefaults>",t[t.length]="<a:extraClrSchemeLst/>",t[t.length]="</a:theme>",t.join("")}function mf(){var e=[Ke];return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`),e.join("")}function bf(e,n,t){var i=[21600,21600],a=["m0,0l0",i[1],i[0],i[1],i[0],"0xe"].join(","),r=[W("xml",null,{"xmlns:v":vi.v,"xmlns:o":vi.o,"xmlns:x":vi.x,"xmlns:mv":vi.mv}).replace(/\/>/,">"),W("o:shapelayout",W("o:idmap",null,{"v:ext":"edit",data:e}),{"v:ext":"edit"})],o=65536*e,u=n||[];return u.length>0&&r.push(W("v:shapetype",[W("v:stroke",null,{joinstyle:"miter"}),W("v:path",null,{gradientshapeok:"t","o:connecttype":"rect"})].join(""),{id:"_x0000_t202",coordsize:i.join(","),"o:spt":202,path:a})),u.forEach(function(s){++o,r.push(kf(s,o))}),r.push("</xml>"),r.join("")}function kf(e,n,t){var i=Nt(e[0]),a={color2:"#BEFF82",type:"gradient"};a.type=="gradient"&&(a.angle="-180");var r=a.type=="gradient"?W("o:fill",null,{type:"gradientUnscaled","v:ext":"view"}):null,o=W("v:fill",r,a),u={on:"t",obscured:"t"};return["<v:shape"+zu({id:"_x0000_s"+n,type:"#_x0000_t202",style:"position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10"+(e[1].hidden?";visibility:hidden":""),fillcolor:"#ECFAD4",strokecolor:"#edeaa1"})+">",o,W("v:shadow",null,u),W("v:path",null,{"o:connecttype":"none"}),'<v:textbox><div style="text-align:left"></div></v:textbox>','<x:ClientData ObjectType="Note">',"<x:MoveWithCells/>","<x:SizeWithCells/>",wt("x:Anchor",[i.c+1,0,i.r+1,0,i.c+3,20,i.r+5,20].join(",")),wt("x:AutoFill","False"),wt("x:Row",String(i.r)),wt("x:Column",String(i.c)),e[1].hidden?"":"<x:Visible/>","</x:ClientData>","</v:shape>"].join("")}function vf(e){var n=[Ke,W("comments",null,{xmlns:Rn[0]})],t=[];return n.push("<authors>"),e.forEach(function(i){i[1].forEach(function(a){var r=ge(a.a);t.indexOf(r)==-1&&(t.push(r),n.push("<author>"+r+"</author>")),a.T&&a.ID&&t.indexOf("tc="+a.ID)==-1&&(t.push("tc="+a.ID),n.push("<author>tc="+a.ID+"</author>"))})}),t.length==0&&(t.push("SheetJ5"),n.push("<author>SheetJ5</author>")),n.push("</authors>"),n.push("<commentList>"),e.forEach(function(i){var a=0,r=[],o=0;if(i[1][0]&&i[1][0].T&&i[1][0].ID&&(a=t.indexOf("tc="+i[1][0].ID)),i[1].forEach(function(c){c.a&&(a=t.indexOf(ge(c.a))),c.T&&++o,r.push(c.t==null?"":ge(c.t))}),o===0)i[1].forEach(function(c){n.push('<comment ref="'+i[0]+'" authorId="'+t.indexOf(ge(c.a))+'"><text>'),n.push(wt("t",c.t==null?"":ge(c.t))),n.push("</text></comment>")});else{i[1][0]&&i[1][0].T&&i[1][0].ID&&(a=t.indexOf("tc="+i[1][0].ID)),n.push('<comment ref="'+i[0]+'" authorId="'+a+'"><text>');for(var u=`Comment:
    `+r[0]+`
`,s=1;s<r.length;++s)u+=`Reply:
    `+r[s]+`
`;n.push(wt("t",ge(u))),n.push("</text></comment>")}}),n.push("</commentList>"),n.length>2&&(n[n.length]="</comments>",n[1]=n[1].replace("/>",">")),n.join("")}function Cf(e,n,t){var i=[Ke,W("ThreadedComments",null,{xmlns:Ae.TCMNT}).replace(/[\/]>/,">")];return e.forEach(function(a){var r="";(a[1]||[]).forEach(function(o,u){if(!o.T){delete o.ID;return}o.a&&n.indexOf(o.a)==-1&&n.push(o.a);var s={ref:a[0],id:"{54EE7951-7262-4200-6969-"+("000000000000"+t.tcid++).slice(-12)+"}"};u==0?r=s.id:s.parentId=r,o.ID=s.id,o.a&&(s.personId="{54EE7950-7262-4200-6969-"+("000000000000"+n.indexOf(o.a)).slice(-12)+"}"),i.push(W("threadedComment",wt("text",o.t||""),s))})}),i.push("</ThreadedComments>"),i.join("")}function yf(e){var n=[Ke,W("personList",null,{xmlns:Ae.TCMNT,"xmlns:x":Rn[0]}).replace(/[\/]>/,">")];return e.forEach(function(t,i){n.push(W("person",null,{displayName:t,id:"{54EE7950-7262-4200-6969-"+("000000000000"+i).slice(-12)+"}",userId:t,providerId:"None"}))}),n.push("</personList>"),n.join("")}var Ef=["xlsb","xlsm","xlam","biff8","xla"],Sf=/(^|[^._A-Z0-9])(\$?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])(\$?)(\d{1,7})(?![_.\(A-Za-z0-9])/g;try{Sf=/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g}catch{}var Si=typeof Map<"u";function wf(e,n,t){var i=0,a=e.length;if(t){if(Si?t.has(n):Object.prototype.hasOwnProperty.call(t,n)){for(var r=Si?t.get(n):t[n];i<r.length;++i)if(e[r[i]].t===n)return e.Count++,r[i]}}else for(;i<a;++i)if(e[i].t===n)return e.Count++,i;return e[a]={t:n},e.Count++,e.Unique++,t&&(Si?(t.has(n)||t.set(n,[]),t.get(n).push(a)):(Object.prototype.hasOwnProperty.call(t,n)||(t[n]=[]),t[n].push(a))),a}function xf(e,n){var t={min:e+1,max:e+1},i=-1;return n.MDW&&(Mi=n.MDW),n.width!=null?t.customWidth=1:n.wpx!=null?i=sf(n.wpx):n.wch!=null&&(i=n.wch),i>-1?(t.width=cf(i),t.customWidth=1):n.width!=null&&(t.width=n.width),n.hidden&&(t.hidden=!0),n.level!=null&&(t.outlineLevel=t.level=n.level),t}function Af(e,n){if(e){var t=[.7,.7,.75,.75,.3,.3];e.left==null&&(e.left=t[0]),e.right==null&&(e.right=t[1]),e.top==null&&(e.top=t[2]),e.bottom==null&&(e.bottom=t[3]),e.header==null&&(e.header=t[4]),e.footer==null&&(e.footer=t[5])}}function rs(e,n,t){var i=t.revssf[n.z!=null?n.z:"General"],a=60,r=e.length;if(i==null&&t.ssf){for(;a<392;++a)if(t.ssf[a]==null){rg(n.z,a),t.ssf[a]=n.z,t.revssf[n.z]=i=a;break}}for(a=0;a!=r;++a)if(e[a].numFmtId===i)return a;return e[r]={numFmtId:i,fontId:0,fillId:0,borderId:0,xfId:0,applyNumberFormat:1},r}function _f(e,n,t){if(e&&e["!ref"]){var i=Lt(e["!ref"]);if(i.e.c<i.s.c||i.e.r<i.s.r)throw new Error("Bad range ("+t+"): "+e["!ref"])}}function Gf(e){if(e.length===0)return"";for(var n='<mergeCells count="'+e.length+'">',t=0;t!=e.length;++t)n+='<mergeCell ref="'+pt(e[t])+'"/>';return n+"</mergeCells>"}function Of(e,n,t,i,a){var r=!1,o={},u=null;if(i.bookType!=="xlsx"&&n.vbaraw){var s=n.SheetNames[t];try{n.Workbook&&(s=n.Workbook.Sheets[t].CodeName||s)}catch{}r=!0,o.codeName=Og(ge(s))}if(e&&e["!outline"]){var c={summaryBelow:1,summaryRight:1};e["!outline"].above&&(c.summaryBelow=0),e["!outline"].left&&(c.summaryRight=0),u=(u||"")+W("outlinePr",null,c)}!r&&!u||(a[a.length]=W("sheetPr",u,o))}var Ff=["objects","scenarios","selectLockedCells","selectUnlockedCells"],Nf=["formatColumns","formatRows","formatCells","insertColumns","insertRows","insertHyperlinks","deleteColumns","deleteRows","sort","autoFilter","pivotTables"];function Df(e){var n={sheet:1};return Ff.forEach(function(t){e[t]!=null&&e[t]&&(n[t]="1")}),Nf.forEach(function(t){e[t]!=null&&!e[t]&&(n[t]="0")}),e.password&&(n.password=of(e.password).toString(16).toUpperCase()),W("sheetProtection",null,n)}function Lf(e){return Af(e),W("pageMargins",null,e)}function Rf(e,n){for(var t=["<cols>"],i,a=0;a!=n.length;++a)(i=n[a])&&(t[t.length]=W("col",null,xf(a,i)));return t[t.length]="</cols>",t.join("")}function Hf(e,n,t,i){var a=typeof e.ref=="string"?e.ref:pt(e.ref);t.Workbook||(t.Workbook={Sheets:[]}),t.Workbook.Names||(t.Workbook.Names=[]);var r=t.Workbook.Names,o=hn(a);o.s.r==o.e.r&&(o.e.r=hn(n["!ref"]).e.r,a=pt(o));for(var u=0;u<r.length;++u){var s=r[u];if(s.Name=="_xlnm._FilterDatabase"&&s.Sheet==i){s.Ref=is(t.SheetNames[i])+"!"+ns(a);break}}return u==r.length&&r.push({Name:"_xlnm._FilterDatabase",Sheet:i,Ref:"'"+t.SheetNames[i]+"'!"+a}),W("autoFilter",null,{ref:a})}function Tf(e,n,t,i){var a={workbookViewId:"0"};return(((i||{}).Workbook||{}).Views||[])[0]&&(a.rightToLeft=i.Workbook.Views[0].RTL?"1":"0"),W("sheetViews",W("sheetView",null,a),{})}function If(e,n,t,i,a,r,o){if(e.c&&t["!comments"].push([n,e.c]),(e.v===void 0||e.t==="z"&&!(i||{}).sheetStubs)&&typeof e.f!="string"&&typeof e.z>"u")return"";var u="",s=e.t,c=e.v;if(e.t!=="z")switch(e.t){case"b":u=e.v?"1":"0";break;case"n":isNaN(e.v)?(e.t="e",u=Qt[e.v=36]):isFinite(e.v)?u=""+e.v:(e.t="e",u=Qt[e.v=7]);break;case"e":u=Qt[e.v];break;case"d":if(i&&i.cellDates){var l=$a(e.v,o);u=l.toISOString(),l.getUTCFullYear()<1900&&(u=u.slice(u.indexOf("T")+1).replace("Z",""))}else e=si(e),e.t="n",u=""+(e.v=$t($a(e.v,o),o));typeof e.z>"u"&&(e.z=At[14]);break;default:u=e.v;break}var h=e.t=="z"||e.v==null?"":wt("v",ge(u)),b={r:n},g=rs(i.cellXfs,e,i);switch(g!==0&&(b.s=g),e.t){case"n":break;case"d":b.t="d";break;case"b":b.t="b";break;case"e":b.t="e";break;case"z":break;default:if(e.v==null){delete e.t;break}if(e.v.length>32767)throw new Error("Text length must not exceed 32767 characters");if(i&&i.bookSST){h=wt("v",""+wf(i.Strings,e.v,i.revStrings)),b.t="s";break}else b.t="str";break}if(e.t!=s&&(e.t=s,e.v=c),typeof e.f=="string"&&e.f){var E=e.F&&e.F.slice(0,n.length)==n?{t:"array",ref:e.F}:null;h=W("f",ge(e.f),E)+(e.v!=null?h:"")}return e.l&&(e.l.display=ge(u),t["!links"].push([n,e.l])),e.D&&(b.cm=1),W("c",h,b)}function Mf(e,n,t,i){var a=[],r=[],o=Lt(e["!ref"]),u="",s,c="",l=[],h=0,b=0,g=e["!rows"],E=e["!data"]!=null,C=E?e["!data"]:[],w={r:c},S,F=-1,D=(((i||{}).Workbook||{}).WBProps||{}).date1904;for(b=o.s.c;b<=o.e.c;++b)l[b]=ft(b);for(h=o.s.r;h<=o.e.r;++h){r=[],c=gt(h);var P=E?C[h]:[];for(b=o.s.c;b<=o.e.c;++b){s=l[b]+c;var R=E?P[b]:e[s];R!==void 0&&(u=If(R,s,e,n,t,i,D))!=null&&r.push(u)}(r.length>0||g&&g[h])&&(w={r:c},g&&g[h]&&(S=g[h],S.hidden&&(w.hidden=1),F=-1,S.hpx?F=ko(S.hpx):S.hpt&&(F=S.hpt),F>-1&&(w.ht=F,w.customHeight=1),S.level&&(w.outlineLevel=S.level)),a[a.length]=W("row",r.join(""),w))}if(g)for(;h<g.length;++h)g&&g[h]&&(w={r:h+1},S=g[h],S.hidden&&(w.hidden=1),F=-1,S.hpx?F=ko(S.hpx):S.hpt&&(F=S.hpt),F>-1&&(w.ht=F,w.customHeight=1),S.level&&(w.outlineLevel=S.level),a[a.length]=W("row","",w));return a.join("")}function Pf(e,n,t,i){var a=[Ke,W("worksheet",null,{xmlns:Rn[0],"xmlns:r":Ae.r})],r=t.SheetNames[e],o=0,u="",s=t.Sheets[r];s==null&&(s={});var c=s["!ref"]||"A1",l=Lt(c);if(l.e.c>16383||l.e.r>1048575){if(n.WTF)throw new Error("Range "+c+" exceeds format limit A1:XFD1048576");l.e.c=Math.min(l.e.c,16383),l.e.r=Math.min(l.e.c,1048575),c=pt(l)}i||(i={}),s["!comments"]=[];var h=[];Of(s,t,e,n,a),a[a.length]=W("dimension",null,{ref:c}),a[a.length]=Tf(s,n,e,t),n.sheetFormat&&(a[a.length]=W("sheetFormatPr",null,{defaultRowHeight:n.sheetFormat.defaultRowHeight||"16",baseColWidth:n.sheetFormat.baseColWidth||"10",outlineLevelRow:n.sheetFormat.outlineLevelRow||"7"})),s["!cols"]!=null&&s["!cols"].length>0&&(a[a.length]=Rf(s,s["!cols"])),a[o=a.length]="<sheetData/>",s["!links"]=[],s["!ref"]!=null&&(u=Mf(s,n,e,t),u.length>0&&(a[a.length]=u)),a.length>o+1&&(a[a.length]="</sheetData>",a[o]=a[o].replace("/>",">")),s["!protect"]&&(a[a.length]=Df(s["!protect"])),s["!autofilter"]!=null&&(a[a.length]=Hf(s["!autofilter"],s,t,e)),s["!merges"]!=null&&s["!merges"].length>0&&(a[a.length]=Gf(s["!merges"]));var b=-1,g,E=-1;return s["!links"].length>0&&(a[a.length]="<hyperlinks>",s["!links"].forEach(function(C){C[1].Target&&(g={ref:C[0]},C[1].Target.charAt(0)!="#"&&(E=Le(i,-1,ge(C[1].Target).replace(/#[\s\S]*$/,""),ye.HLINK),g["r:id"]="rId"+E),(b=C[1].Target.indexOf("#"))>-1&&(g.location=ge(C[1].Target.slice(b+1))),C[1].Tooltip&&(g.tooltip=ge(C[1].Tooltip)),g.display=C[1].display,a[a.length]=W("hyperlink",null,g))}),a[a.length]="</hyperlinks>"),delete s["!links"],s["!margins"]!=null&&(a[a.length]=Lf(s["!margins"])),(!n||n.ignoreEC||n.ignoreEC==null)&&(a[a.length]=wt("ignoredErrors",W("ignoredError",null,{numberStoredAsText:1,sqref:c}))),h.length>0&&(E=Le(i,-1,"../drawings/drawing"+(e+1)+".xml",ye.DRAW),a[a.length]=W("drawing",null,{"r:id":"rId"+E}),s["!drawing"]=h),s["!comments"].length>0&&(E=Le(i,-1,"../drawings/vmlDrawing"+(e+1)+".vml",ye.VML),a[a.length]=W("legacyDrawing",null,{"r:id":"rId"+E}),s["!legacy"]=E),a.length>1&&(a[a.length]="</worksheet>",a[1]=a[1].replace("/>",">")),a.join("")}var Bf=[["allowRefreshQuery",!1,"bool"],["autoCompressPictures",!0,"bool"],["backupFile",!1,"bool"],["checkCompatibility",!1,"bool"],["CodeName",""],["date1904",!1,"bool"],["defaultThemeVersion",0,"int"],["filterPrivacy",!1,"bool"],["hidePivotFieldList",!1,"bool"],["promptedSolutions",!1,"bool"],["publishItems",!1,"bool"],["refreshAllConnections",!1,"bool"],["saveExternalLinkValues",!0,"bool"],["showBorderUnselectedTables",!0,"bool"],["showInkAnnotation",!0,"bool"],["showObjects","all"],["showPivotChartFilter",!1,"bool"],["updateLinks","userSet"]],Vf=":][*?/\\".split("");function os(e,n){try{if(e=="")throw new Error("Sheet name cannot be blank");if(e.length>31)throw new Error("Sheet name cannot exceed 31 chars");if(e.charCodeAt(0)==39||e.charCodeAt(e.length-1)==39)throw new Error("Sheet name cannot start or end with apostrophe (')");if(e.toLowerCase()=="history")throw new Error("Sheet name cannot be 'History'");Vf.forEach(function(t){if(e.indexOf(t)!=-1)throw new Error("Sheet name cannot contain : \\ / ? * [ ]")})}catch(t){throw t}return!0}function zf(e,n,t){e.forEach(function(i,a){os(i);for(var r=0;r<a;++r)if(i==e[r])throw new Error("Duplicate Sheet Name: "+i);if(t){var o=n&&n[a]&&n[a].CodeName||i;if(o.charCodeAt(0)==95&&o.length>22)throw new Error("Bad Code Name: Worksheet"+o)}})}function $f(e){if(!e||!e.SheetNames||!e.Sheets)throw new Error("Invalid Workbook");if(!e.SheetNames.length)throw new Error("Workbook is empty");var n=e.Workbook&&e.Workbook.Sheets||[];zf(e.SheetNames,n,!!e.vbaraw);for(var t=0;t<e.SheetNames.length;++t)_f(e.Sheets[e.SheetNames[t]],e.SheetNames[t],t);e.SheetNames.forEach(function(i,a){var r=e.Sheets[i];if(!(!r||!r["!autofilter"])){var o;e.Workbook||(e.Workbook={}),e.Workbook.Names||(e.Workbook.Names=[]),e.Workbook.Names.forEach(function(s){s.Name=="_xlnm._FilterDatabase"&&s.Sheet==a&&(o=s)});var u=is(i)+"!"+ns(r["!autofilter"].ref);o?o.Ref=u:e.Workbook.Names.push({Name:"_xlnm._FilterDatabase",Sheet:a,Ref:u})}})}function jf(e){var n=[Ke];n[n.length]=W("workbook",null,{xmlns:Rn[0],"xmlns:r":Ae.r});var t=e.Workbook&&(e.Workbook.Names||[]).length>0,i={codeName:"ThisWorkbook"};e.Workbook&&e.Workbook.WBProps&&(Bf.forEach(function(u){e.Workbook.WBProps[u[0]]!=null&&e.Workbook.WBProps[u[0]]!=u[1]&&(i[u[0]]=e.Workbook.WBProps[u[0]])}),e.Workbook.WBProps.CodeName&&(i.codeName=e.Workbook.WBProps.CodeName,delete i.CodeName)),n[n.length]=W("workbookPr",null,i);var a=e.Workbook&&e.Workbook.Sheets||[],r=0;if(a&&a[0]&&a[0].Hidden){for(n[n.length]="<bookViews>",r=0;r!=e.SheetNames.length&&!(!a[r]||!a[r].Hidden);++r);r==e.SheetNames.length&&(r=0),n[n.length]='<workbookView firstSheet="'+r+'" activeTab="'+r+'"/>',n[n.length]="</bookViews>"}for(n[n.length]="<sheets>",r=0;r!=e.SheetNames.length;++r){var o={name:ge(e.SheetNames[r].slice(0,31))};if(o.sheetId=""+(r+1),o["r:id"]="rId"+(r+1),a[r])switch(a[r].Hidden){case 1:o.state="hidden";break;case 2:o.state="veryHidden";break}n[n.length]=W("sheet",null,o)}return n[n.length]="</sheets>",t&&(n[n.length]="<definedNames>",e.Workbook&&e.Workbook.Names&&e.Workbook.Names.forEach(function(u){var s={name:u.Name};u.Comment&&(s.comment=u.Comment),u.Sheet!=null&&(s.localSheetId=""+u.Sheet),u.Hidden&&(s.hidden="1"),u.Ref&&(n[n.length]=W("definedName",ge(u.Ref),s))}),n[n.length]="</definedNames>"),n.length>2&&(n[n.length]="</workbook>",n[1]=n[1].replace("/>",">")),n.join("")}function Uf(e,n,t,i){for(var a=e["!merges"]||[],r=[],o={},u=e["!data"]!=null,s=n.s.c;s<=n.e.c;++s){for(var c=0,l=0,h=0;h<a.length;++h)if(!(a[h].s.r>t||a[h].s.c>s)&&!(a[h].e.r<t||a[h].e.c<s)){if(a[h].s.r<t||a[h].s.c<s){c=-1;break}c=a[h].e.r-a[h].s.r+1,l=a[h].e.c-a[h].s.c+1;break}if(!(c<0)){var b=ft(s)+gt(t),g=u?(e["!data"][t]||[])[s]:e[b];g&&g.t=="n"&&g.v!=null&&!isFinite(g.v)&&(isNaN(g.v)?g={t:"e",v:36,w:Qt[36]}:g={t:"e",v:7,w:Qt[7]});var E=g&&g.v!=null&&(g.h||da(g.w||(li(g),g.w)||""))||"";o={},c>1&&(o.rowspan=c),l>1&&(o.colspan=l),i.editable?E='<span contenteditable="true">'+E+"</span>":g&&(o["data-t"]=g&&g.t||"z",g.v!=null&&(o["data-v"]=da(g.v instanceof Date?g.v.toISOString():g.v)),g.z!=null&&(o["data-z"]=g.z),g.l&&(g.l.Target||"#").charAt(0)!="#"&&(E='<a href="'+da(g.l.Target)+'">'+E+"</a>")),o.id=(i.id||"sjs")+"-"+b,r.push(W("td",E,o))}}var C="<tr>";return C+r.join("")+"</tr>"}var qf='<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',Wf="</body></html>";function Xf(e,n,t){var i=[];return i.join("")+"<table"+(t&&t.id?' id="'+t.id+'"':"")+">"}function Kf(e,n){var t=n||{},i=t.header!=null?t.header:qf,a=t.footer!=null?t.footer:Wf,r=[i],o=hn(e["!ref"]||"A1");if(r.push(Xf(e,o,t)),e["!ref"])for(var u=o.s.r;u<=o.e.r;++u)r.push(Uf(e,o,u,t));return r.push("</table>"+a),r.join("")}function us(e,n,t){var i=n.rows;if(!i)throw"Unsupported origin when "+n.tagName+" is not a TABLE";var a=t||{},r=e["!data"]!=null,o=0,u=0;if(a.origin!=null)if(typeof a.origin=="number")o=a.origin;else{var s=typeof a.origin=="string"?Nt(a.origin):a.origin;o=s.r,u=s.c}var c=Math.min(a.sheetRows||1e7,i.length),l={s:{r:0,c:0},e:{r:o,c:u}};if(e["!ref"]){var h=hn(e["!ref"]);l.s.r=Math.min(l.s.r,h.s.r),l.s.c=Math.min(l.s.c,h.s.c),l.e.r=Math.max(l.e.r,h.e.r),l.e.c=Math.max(l.e.c,h.e.c),o==-1&&(l.e.r=o=h.e.r+1)}var b=[],g=0,E=e["!rows"]||(e["!rows"]=[]),C=0,w=0,S=0,F=0,D=0,P=0;for(e["!cols"]||(e["!cols"]=[]);C<i.length&&w<c;++C){var R=i[C];if(vo(R)){if(a.display)continue;E[w]={hidden:!0}}var q=R.cells;for(S=F=0;S<q.length;++S){var O=q[S];if(!(a.display&&vo(O))){var M=O.hasAttribute("data-v")?O.getAttribute("data-v"):O.hasAttribute("v")?O.getAttribute("v"):Fg(O.innerHTML),H=O.getAttribute("data-z")||O.getAttribute("z");for(g=0;g<b.length;++g){var U=b[g];U.s.c==F+u&&U.s.r<w+o&&w+o<=U.e.r&&(F=U.e.c+1-u,g=-1)}P=+O.getAttribute("colspan")||1,((D=+O.getAttribute("rowspan")||1)>1||P>1)&&b.push({s:{r:w+o,c:F+u},e:{r:w+o+(D||1)-1,c:F+u+(P||1)-1}});var B={t:"s",v:M},Y=O.getAttribute("data-t")||O.getAttribute("t")||"";M!=null&&(M.length==0?B.t=Y||"z":a.raw||M.trim().length==0||Y=="s"||(Y=="e"&&Qt[+M]?B={t:"e",v:+M,w:Qt[+M]}:M==="TRUE"?B={t:"b",v:!0}:M==="FALSE"?B={t:"b",v:!1}:isNaN(oo(M))?isNaN(Eg(M).getDate())?M.charCodeAt(0)==35&&mo[M]!=null&&(B={t:"e",v:mo[M],w:M}):(B={t:"d",v:$a(M)},a.UTC&&(B.v=Ui(B.v)),a.cellDates||(B={t:"n",v:$t(B.v)}),B.z=a.dateNF||At[14]):B={t:"n",v:oo(M)})),B.z===void 0&&H!=null&&(B.z=H);var Z="",te=O.getElementsByTagName("A");if(te&&te.length)for(var ce=0;ce<te.length&&!(te[ce].hasAttribute("href")&&(Z=te[ce].getAttribute("href"),Z.charAt(0)!="#"));++ce);Z&&Z.charAt(0)!="#"&&Z.slice(0,11).toLowerCase()!="javascript:"&&(B.l={Target:Z}),r?(e["!data"][w+o]||(e["!data"][w+o]=[]),e["!data"][w+o][F+u]=B):e[ei({c:F+u,r:w+o})]=B,l.e.c<F+u&&(l.e.c=F+u),F+=P}}++w}return b.length&&(e["!merges"]=(e["!merges"]||[]).concat(b)),l.e.r=Math.max(l.e.r,w-1+o),e["!ref"]=pt(l),w>=c&&(e["!fullref"]=pt((l.e.r=i.length-C+w-1+o,l))),e}function ss(e,n){var t=n||{},i={};return t.dense&&(i["!data"]=[]),us(i,e,n)}function Yf(e,n){var t=Ug(ss(e,n),n);return t}function vo(e){var n="",t=Jf(e);return t&&(n=t(e).getPropertyValue("display")),n||(n=e.style&&e.style.display),n==="none"}function Jf(e){return e.ownerDocument.defaultView&&typeof e.ownerDocument.defaultView.getComputedStyle=="function"?e.ownerDocument.defaultView.getComputedStyle:typeof getComputedStyle=="function"?getComputedStyle:null}/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */(function(){try{return typeof Uint8Array>"u"||typeof Uint8Array.prototype.subarray>"u"?"slice":typeof Buffer<"u"?typeof Buffer.prototype.subarray>"u"?"slice":(typeof Buffer.from=="function"?Buffer.from([72,62]):new Buffer([72,62]))instanceof Uint8Array?"subarray":"slice":"subarray"}catch{return"slice"}})();function Zf(e){return function(t){for(var i=0;i!=e.length;++i){var a=e[i];t[a[0]]===void 0&&(t[a[0]]=a[1]),a[2]==="n"&&(t[a[0]]=Number(t[a[0]]))}}}function Qf(e){Zf([["cellDates",!1],["bookSST",!1],["bookType","xlsx"],["compression",!1],["WTF",!1]])(e)}function ep(e,n){e&&!e.SSF&&(e.SSF=si(At)),e&&e.SSF&&(ig(),ng(e.SSF),n.revssf=sg(e.SSF),n.revssf[e.SSF[65535]]=0,n.ssf=e.SSF),n.rels={},n.wbrels={},n.Strings=[],n.Strings.Count=0,n.Strings.Unique=0,Si?n.revStrings=new Map:(n.revStrings={},n.revStrings.foo=[],delete n.revStrings.foo);var t="xml",i=Ef.indexOf(n.bookType)>-1,a=Kg();Qf(n=n||{});var r=wg(),o="",u=0;if(n.cellXfs=[],rs(n.cellXfs,{},{revssf:{General:0}}),e.Props||(e.Props={}),o="docProps/core.xml",we(r,o,Zg(e.Props,n)),a.coreprops.push(o),Le(n.rels,2,o,ye.CORE_PROPS),o="docProps/app.xml",!(e.Props&&e.Props.SheetNames))if(!e.Workbook||!e.Workbook.Sheets)e.Props.SheetNames=e.SheetNames;else{for(var s=[],c=0;c<e.SheetNames.length;++c)(e.Workbook.Sheets[c]||{}).Hidden!=2&&s.push(e.SheetNames[c]);e.Props.SheetNames=s}e.Props.Worksheets=e.Props.SheetNames.length,we(r,o,ef(e.Props)),a.extprops.push(o),Le(n.rels,3,o,ye.EXT_PROPS),e.Custprops!==e.Props&&nn(e.Custprops||{}).length>0&&(o="docProps/custom.xml",we(r,o,tf(e.Custprops)),a.custprops.push(o),Le(n.rels,4,o,ye.CUST_PROPS));var l=["SheetJ5"];for(n.tcid=0,u=1;u<=e.SheetNames.length;++u){var h={"!id":{}},b=e.Sheets[e.SheetNames[u-1]],g=(b||{})["!type"]||"sheet";switch(g){case"chart":default:o="xl/worksheets/sheet"+u+"."+t,we(r,o,Pf(u-1,n,e,h)),a.sheets.push(o),Le(n.wbrels,-1,"worksheets/sheet"+u+"."+t,ye.WS[0])}if(b){var E=b["!comments"],C=!1,w="";if(E&&E.length>0){var S=!1;E.forEach(function(F){F[1].forEach(function(D){D.T==!0&&(S=!0)})}),S&&(w="xl/threadedComments/threadedComment"+u+".xml",we(r,w,Cf(E,l,n)),a.threadedcomments.push(w),Le(h,-1,"../threadedComments/threadedComment"+u+".xml",ye.TCMNT)),w="xl/comments"+u+"."+t,we(r,w,vf(E)),a.comments.push(w),Le(h,-1,"../comments"+u+"."+t,ye.CMNT),C=!0}b["!legacy"]&&C&&we(r,"xl/drawings/vmlDrawing"+u+".vml",bf(u,b["!comments"])),delete b["!comments"],delete b["!legacy"]}h["!id"].rId1&&we(r,Jg(o),ga(h))}return n.Strings!=null&&n.Strings.length>0&&(o="xl/sharedStrings."+t,we(r,o,af(n.Strings,n)),a.strs.push(o),Le(n.wbrels,-1,"sharedStrings."+t,ye.SST)),o="xl/workbook."+t,we(r,o,jf(e)),a.workbooks.push(o),Le(n.rels,1,o,ye.WB),o="xl/theme/theme1.xml",we(r,o,pf(e.Themes,n)),a.themes.push(o),Le(n.wbrels,-1,"theme/theme1.xml",ye.THEME),o="xl/styles."+t,we(r,o,ff(e,n)),a.styles.push(o),Le(n.wbrels,-1,"styles."+t,ye.STY),e.vbaraw&&i&&(o="xl/vbaProject.bin",we(r,o,e.vbaraw),a.vba.push(o),Le(n.wbrels,-1,"vbaProject.bin",ye.VBA)),o="xl/metadata."+t,we(r,o,mf()),a.metadata.push(o),Le(n.wbrels,-1,"metadata."+t,ye.XLMETA),l.length>1&&(o="xl/persons/person.xml",we(r,o,yf(l)),a.people.push(o),Le(n.wbrels,-1,"persons/person.xml",ye.PEOPLE)),we(r,"[Content_Types].xml",Yg(a,n)),we(r,"_rels/.rels",ga(n.rels)),we(r,"xl/_rels/workbook."+t+".rels",ga(n.wbrels)),delete n.revssf,delete n.ssf,r}function tp(e,n){switch(n.type){case"base64":case"binary":break;case"buffer":case"array":n.type="";break;case"file":return Tu(n.file,Et.write(e,{type:he?"buffer":""}));case"string":throw new Error("'string' output type invalid for '"+n.bookType+"' files");default:throw new Error("Unrecognized type "+n.type)}return Et.write(e,n)}function np(e,n){var t=si(n||{}),i=ep(e,t);return ip(i,t)}function ip(e,n){var t={},i=he?"nodebuffer":typeof Uint8Array<"u"?"array":"string";if(n.compression&&(t.compression="DEFLATE"),n.password)t.type=i;else switch(n.type){case"base64":t.type="base64";break;case"binary":t.type="string";break;case"string":throw new Error("'string' output type invalid for '"+n.bookType+"' files");case"buffer":case"file":t.type=i;break;default:throw new Error("Unrecognized type "+n.type)}var a=e.FullPaths?Et.write(e,{fileType:"zip",type:{nodebuffer:"buffer",string:"binary"}[t.type]||t.type,compression:!!n.compression}):e.generate(t);if(typeof Deno<"u"&&typeof a=="string"){if(n.type=="binary"||n.type=="base64")return a;a=new Uint8Array(lr(a))}return n.password&&typeof encrypt_agile<"u"?tp(encrypt_agile(a,n.password),n):n.type==="file"?Tu(n.file,a):n.type=="string"?Gg(a):a}function cs(e,n){$f(e);var t=si(n||{});if(t.cellStyles&&(t.cellNF=!0,t.sheetStubs=!0),t.type=="array"){t.type="binary";var i=cs(e,t);return t.type="array",lr(i)}return np(e,t)}function ap(e){if(!e.bookType){var n={xls:"biff8",htm:"html",slk:"sylk",socialcalc:"eth",Sh33tJS:"WTF"},t=e.file.slice(e.file.lastIndexOf(".")).toLowerCase();t.match(/^\.[a-z]+$/)&&(e.bookType=t.slice(1)),e.bookType=n[e.bookType]||e.bookType}}function rp(e,n,t){var i=t||{};return i.type="file",i.file=n,ap(i),cs(e,i)}function op(e,n,t,i,a,r,o){var u=gt(t),s=o.defval,c=o.raw||!Object.prototype.hasOwnProperty.call(o,"raw"),l=!0,h=e["!data"]!=null,b=a===1?[]:{};if(a!==1)if(Object.defineProperty)try{Object.defineProperty(b,"__rowNum__",{value:t,enumerable:!1})}catch{b.__rowNum__=t}else b.__rowNum__=t;if(!h||e["!data"][t])for(var g=n.s.c;g<=n.e.c;++g){var E=h?(e["!data"][t]||[])[g]:e[i[g]+u];if(E==null||E.t===void 0){if(s===void 0)continue;r[g]!=null&&(b[r[g]]=s);continue}var C=E.v;switch(E.t){case"z":if(C==null)break;continue;case"e":C=C==0?null:void 0;break;case"s":case"b":case"n":if(!E.z||!gr(E.z)||(C=hg(C),typeof C=="number"))break;case"d":o&&(o.UTC||o.raw===!1)||(C=Sg(new Date(C)));break;default:throw new Error("unrecognized type "+E.t)}if(r[g]!=null){if(C==null)if(E.t=="e"&&C===null)b[r[g]]=null;else if(s!==void 0)b[r[g]]=s;else if(c&&C===null)b[r[g]]=null;else continue;else b[r[g]]=(E.t==="n"&&typeof o.rawNumbers=="boolean"?o.rawNumbers:c)?C:li(E,C,o);C!=null&&(l=!1)}}return{row:b,isempty:l}}function Co(e,n){if(e==null||e["!ref"]==null)return[];var t={t:"n",v:0},i=0,a=1,r=[],o=0,u="",s={s:{r:0,c:0},e:{r:0,c:0}},c=n||{},l=c.range!=null?c.range:e["!ref"];switch(c.header===1?i=1:c.header==="A"?i=2:Array.isArray(c.header)?i=3:c.header==null&&(i=0),typeof l){case"string":s=Lt(l);break;case"number":s=Lt(e["!ref"]),s.s.r=l;break;default:s=l}i>0&&(a=0);var h=gt(s.s.r),b=[],g=[],E=0,C=0,w=e["!data"]!=null,S=s.s.r,F=0,D={};w&&!e["!data"][S]&&(e["!data"][S]=[]);var P=c.skipHidden&&e["!cols"]||[],R=c.skipHidden&&e["!rows"]||[];for(F=s.s.c;F<=s.e.c;++F)if(!(P[F]||{}).hidden)switch(b[F]=ft(F),t=w?e["!data"][S][F]:e[b[F]+h],i){case 1:r[F]=F-s.s.c;break;case 2:r[F]=b[F];break;case 3:r[F]=c.header[F-s.s.c];break;default:if(t==null&&(t={w:"__EMPTY",t:"s"}),u=o=li(t,null,c),C=D[o]||0,!C)D[o]=1;else{do u=o+"_"+C++;while(D[u]);D[o]=C,D[u]=1}r[F]=u}for(S=s.s.r+a;S<=s.e.r;++S)if(!(R[S]||{}).hidden){var q=op(e,s,S,b,i,r,c);(q.isempty===!1||(i===1?c.blankrows!==!1:c.blankrows))&&(g[E++]=q.row)}return g.length=E,g}var yo=/"/g;function up(e,n,t,i,a,r,o,u,s){for(var c=!0,l=[],h="",b=gt(t),g=e["!data"]!=null,E=g&&e["!data"][t]||[],C=n.s.c;C<=n.e.c;++C)if(i[C]){var w=g?E[C]:e[i[C]+b];if(w==null)h="";else if(w.v!=null){c=!1,h=""+(s.rawNumbers&&w.t=="n"?w.v:li(w,null,s));for(var S=0,F=0;S!==h.length;++S)if((F=h.charCodeAt(S))===a||F===r||F===34||s.forceQuotes){h='"'+h.replace(yo,'""')+'"';break}h=="ID"&&u==0&&l.length==0&&(h='"ID"')}else w.f!=null&&!w.F?(c=!1,h="="+w.f,h.indexOf(",")>=0&&(h='"'+h.replace(yo,'""')+'"')):h="";l.push(h)}if(s.strip)for(;l[l.length-1]==="";)--l.length;return s.blankrows===!1&&c?null:l.join(o)}function ls(e,n){var t=[],i=n??{};if(e==null||e["!ref"]==null)return"";for(var a=Lt(e["!ref"]),r=i.FS!==void 0?i.FS:",",o=r.charCodeAt(0),u=i.RS!==void 0?i.RS:`
`,s=u.charCodeAt(0),c="",l=[],h=i.skipHidden&&e["!cols"]||[],b=i.skipHidden&&e["!rows"]||[],g=a.s.c;g<=a.e.c;++g)(h[g]||{}).hidden||(l[g]=ft(g));for(var E=0,C=a.s.r;C<=a.e.r;++C)(b[C]||{}).hidden||(c=up(e,a,C,l,o,s,r,E,i),c!=null&&(c||i.blankrows!==!1)&&t.push((E++?u:"")+c));return t.join("")}function sp(e,n){n||(n={}),n.FS="	",n.RS=`
`;var t=ls(e,n);return t}function cp(e,n){var t="",i,a="";if(e==null||e["!ref"]==null)return[];var r=Lt(e["!ref"]),o="",u=[],s,c=[],l=e["!data"]!=null;for(s=r.s.c;s<=r.e.c;++s)u[s]=ft(s);for(var h=r.s.r;h<=r.e.r;++h)for(o=gt(h),s=r.s.c;s<=r.e.c;++s)if(t=u[s]+o,i=l?(e["!data"][h]||[])[s]:e[t],a="",i!==void 0){if(i.F!=null){if(t=i.F,!i.f)continue;a=i.f,t.indexOf(":")==-1&&(t=t+":"+t)}if(i.f!=null)a=i.f;else{if(n&&n.values===!1)continue;if(i.t=="z")continue;if(i.t=="n"&&i.v!=null)a=""+i.v;else if(i.t=="b")a=i.v?"TRUE":"FALSE";else if(i.w!==void 0)a="'"+i.w;else{if(i.v===void 0)continue;i.t=="s"?a="'"+i.v:a=""+i.v}}c[c.length]=t+"="+a}return c}function ds(e,n,t){var i=t||{},a=e?e["!data"]!=null:i.dense,r=+!i.skipHeader,o=e||{};!e&&a&&(o["!data"]=[]);var u=0,s=0;if(o&&i.origin!=null)if(typeof i.origin=="number")u=i.origin;else{var c=typeof i.origin=="string"?Nt(i.origin):i.origin;u=c.r,s=c.c}var l={s:{c:0,r:0},e:{c:s,r:u+n.length-1+r}};if(o["!ref"]){var h=Lt(o["!ref"]);l.e.c=Math.max(l.e.c,h.e.c),l.e.r=Math.max(l.e.r,h.e.r),u==-1&&(u=h.e.r+1,l.e.r=u+n.length-1+r)}else u==-1&&(u=0,l.e.r=n.length-1+r);var b=i.header||[],g=0,E=[];n.forEach(function(w,S){a&&!o["!data"][u+S+r]&&(o["!data"][u+S+r]=[]),a&&(E=o["!data"][u+S+r]),nn(w).forEach(function(F){(g=b.indexOf(F))==-1&&(b[g=b.length]=F);var D=w[F],P="z",R="",q=a?"":ft(s+g)+gt(u+S+r),O=a?E[s+g]:o[q];D&&typeof D=="object"&&!(D instanceof Date)?a?E[s+g]=D:o[q]=D:(typeof D=="number"?P="n":typeof D=="boolean"?P="b":typeof D=="string"?P="s":D instanceof Date?(P="d",i.UTC||(D=Ui(D)),i.cellDates||(P="n",D=$t(D)),R=O!=null&&O.z&&gr(O.z)?O.z:i.dateNF||At[14]):D===null&&i.nullError&&(P="e",D=0),O?(O.t=P,O.v=D,delete O.w,delete O.R,R&&(O.z=R)):a?E[s+g]=O={t:P,v:D}:o[q]=O={t:P,v:D},R&&(O.z=R))})}),l.e.c=Math.max(l.e.c,s+b.length-1);var C=gt(u);if(a&&!o["!data"][u]&&(o["!data"][u]=[]),r)for(g=0;g<b.length;++g)a?o["!data"][u][g+s]={t:"s",v:b[g]}:o[ft(g+s)+C]={t:"s",v:b[g]};return o["!ref"]=pt(l),o}function lp(e,n){return ds(null,e,n)}function Pi(e,n,t){if(typeof n=="string"){if(e["!data"]!=null){var i=Nt(n);return e["!data"][i.r]||(e["!data"][i.r]=[]),e["!data"][i.r][i.c]||(e["!data"][i.r][i.c]={t:"z"})}return e[n]||(e[n]={t:"z"})}return typeof n!="number"?Pi(e,ei(n)):Pi(e,ft(t||0)+gt(n))}function dp(e,n){if(typeof n=="number"){if(n>=0&&e.SheetNames.length>n)return n;throw new Error("Cannot find sheet # "+n)}else if(typeof n=="string"){var t=e.SheetNames.indexOf(n);if(t>-1)return t;throw new Error("Cannot find sheet name |"+n+"|")}else throw new Error("Cannot find sheet |"+n+"|")}function hp(e,n){var t={SheetNames:[],Sheets:{}};return e&&hs(t,e,n||"Sheet1"),t}function hs(e,n,t,i){var a=1;if(!t)for(;a<=65535&&e.SheetNames.indexOf(t="Sheet"+a)!=-1;++a,t=void 0);if(!t||e.SheetNames.length>=65535)throw new Error("Too many worksheets");if(i&&e.SheetNames.indexOf(t)>=0&&t.length<32){var r=t.match(/\d+$/);a=r&&+r[0]||0;var o=r&&t.slice(0,r.index)||t;for(++a;a<=65535&&e.SheetNames.indexOf(t=o+a)!=-1;++a);}if(os(t),e.SheetNames.indexOf(t)>=0)throw new Error("Worksheet with name |"+t+"| already exists!");return e.SheetNames.push(t),e.Sheets[t]=n,t}function gp(e,n,t){e.Workbook||(e.Workbook={}),e.Workbook.Sheets||(e.Workbook.Sheets=[]);var i=dp(e,n);switch(e.Workbook.Sheets[i]||(e.Workbook.Sheets[i]={}),t){case 0:case 1:case 2:break;default:throw new Error("Bad sheet visibility setting "+t)}e.Workbook.Sheets[i].Hidden=t}function fp(e,n){return e.z=n,e}function gs(e,n,t){return n?(e.l={Target:n},t&&(e.l.Tooltip=t)):delete e.l,e}function pp(e,n,t){return gs(e,"#"+n,t)}function mp(e,n,t){e.c||(e.c=[]),e.c.push({t:n,a:t||"SheetJS"})}function bp(e,n,t,i){for(var a=typeof n!="string"?n:Lt(n),r=typeof n=="string"?n:pt(n),o=a.s.r;o<=a.e.r;++o)for(var u=a.s.c;u<=a.e.c;++u){var s=Pi(e,o,u);s.t="n",s.F=r,delete s.v,o==a.s.r&&u==a.s.c&&(s.f=t,i&&(s.D=!0))}var c=hn(e["!ref"]);return c.s.r>a.s.r&&(c.s.r=a.s.r),c.s.c>a.s.c&&(c.s.c=a.s.c),c.e.r<a.e.r&&(c.e.r=a.e.r),c.e.c<a.e.c&&(c.e.c=a.e.c),e["!ref"]=pt(c),e}var pa={encode_col:ft,encode_row:gt,encode_cell:ei,encode_range:pt,decode_col:zg,decode_row:Bg,split_cell:jg,decode_cell:Nt,decode_range:hn,format_cell:li,sheet_new:qg,sheet_add_aoa:as,sheet_add_json:ds,sheet_add_dom:us,aoa_to_sheet:Wg,json_to_sheet:lp,table_to_sheet:ss,table_to_book:Yf,sheet_to_csv:ls,sheet_to_txt:sp,sheet_to_json:Co,sheet_to_html:Kf,sheet_to_formulae:cp,sheet_to_row_object_array:Co,sheet_get_cell:Pi,book_new:hp,book_append_sheet:hs,book_set_sheet_visibility:gp,cell_set_number_format:fp,cell_set_hyperlink:gs,cell_set_internal_link:pp,cell_add_comment:mp,sheet_set_array_formula:bp,consts:{SHEET_VISIBLE:0,SHEET_HIDDEN:1,SHEET_VERY_HIDDEN:2}};function Kn(e,n){if(n in e&&e[n]&&typeof e[n]!="object"&&typeof e[n]!="function")return String(e[n])}function kp(e){const n="accessorKey";return e.filter(t=>{var i;return Kn(t,n)&&!((i=t.meta)!=null&&i.skipOnExport)}).map(t=>Kn(t,n))}function fs(e){const n="accessorKey",t="header";return e.filter(i=>{var a;return Kn(i,n)&&!((a=i.meta)!=null&&a.skipOnExport)}).map(i=>Kn(i,t)||Kn(i,n))}function ps({data:e,columnDefinitions:n}){const t=kp(n);return e.map(i=>{const a=i,r=[];return t.forEach(o=>{if(!o){r.push("");return}r.push(a[o])}),r})}function vp({columnDefinitions:e,fileName:n="Table",data:t}){if(Gn()){const i=ps({data:t,columnDefinitions:e}),o=[fs(e),...i].map(h=>h.map(b=>b===void 0?'""':`"${b}"`).join(",")).join(`
`),u=new Uint8Array([239,187,191]),s=new Blob([u,o],{type:"text/csv"}),c=URL.createObjectURL(s),l=Object.assign(document.createElement("a"),{target:"_blank",href:c,download:n});return l.click(),l.remove(),o}return""}function Cp({columnDefinitions:e,fileName:n="Table",data:t}){const i=ps({data:t,columnDefinitions:e}),a=fs(e),r=pa.book_new(),o=pa.aoa_to_sheet([a,...i]);return pa.book_append_sheet(r,o),rp(r,`${n}.xlsx`),o}const pr={table:"table",toaster:"toaster",selected:"selected-state"};var Bi=(e=>(e.Small="small",e.Full="full",e))(Bi||{});const Eo=Object.keys(cr);function In(e,n){return Math.floor(Math.random()*(n-e+1)+e)}const yp=new Intl.NumberFormat("ru-RU",{minimumFractionDigits:2});function mr(e,n){const t=[];for(let i=0;i<e;++i){const a=new Date(Math.floor(Math.random()*1e13)).setFullYear(In(1980,2030),In(1,12),In(1,30));t.push({status:i===3?"Not":Eo[In(0,Eo.length-1)],subRows:n&&n.level>0?mr(n.count,{count:n.count,level:n.level-1}):void 0,tree:n&&n.level>0?`Tree cell ${n.level}.${i}`:`Item ${i}`,col1:i*5,col2:i*5+1,col3:i*5+2,col4:i*5+3,col5:i*5+4,col6:In(1e5,999999.99),date:a})}return t}const Ep=[{label:"tag1xxx",appearance:"red"},{label:"tag2x",appearance:"yellow"},{label:"tag3xxxxx",appearance:"orange"},{label:"tag4xx",appearance:"green"},{label:"tag5xxx",appearance:"blue"},{label:"tag6x",appearance:"pink"}],Ut=e=>`Table column №${e.column.id}`,Mn=e=>`Column №${e}`,Cn=e=>n=>`Cell ${Math.trunc(Number(n[e])/5)+1}.${Number(n[e])%5+1}`;function qa({rowAutoHeight:e,statusSortEnabled:n,showActionsColumn:t,statusColumnViewMode:i}){return y.useMemo(()=>{let a=[{id:"1",accessorKey:"col1",accessorFn:Cn("col1"),header:Ut,columnSettings:{label:Mn("1"),mode:"hidden"},size:140,enableSorting:!0,enableResizing:!0,sortDescFirst:!0,pinned:"left"},{id:"2",accessorKey:"col2",accessorFn:Cn("col2"),header:Ut,columnSettings:{label:Mn("2"),mode:"defaultFalse"},size:200,minSize:150,maxSize:300,pinned:"left",enableSorting:!0,enableResizing:!0},{id:"3",accessorKey:"col3",header:Ut,columnSettings:{label:Mn("3"),mode:"defaultTrue"},accessorFn:e?void 0:Cn("col3"),cell:r=>r.row.index===1&&e?"super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper":Cn("col3")(r.row.original),minSize:110,sortDescFirst:!0,enableResizing:!0},{id:"4",accessorKey:"col4",accessorFn:Cn("col4"),header:Ut,enableSorting:!0,enableResizing:!0},{id:"5",accessorKey:"col5",header:Ut,columnSettings:{label:Mn("5"),mode:"defaultFalse"},accessorFn:Cn("col5"),cell:r=>L.jsx(Ra,{value:r.getValue()}),enableSorting:!0,enableResizing:!0},{id:"6",accessorKey:"col6",cell:r=>yp.format(r.getValue()),header:Ut,columnSettings:{label:"Price"},size:150,headerAlign:"right",align:"right",enableSorting:!0,enableResizing:!0},{id:"7",accessorKey:"col7",cell:()=>L.jsx(vs,{items:Ep,rowLimit:1}),header:Ut,columnSettings:{label:"Tags"},size:230},{id:"8",accessorKey:"date",header:Ut,columnSettings:{label:Mn("8")},enableSorting:!0,enableResizing:!0,size:146,headerAlign:"right",align:"right",pinned:"right",sortingFn:(r,o)=>r.original.date-o.original.date,accessorFn:r=>new Date(r.date).toLocaleDateString("ru-RU",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})}];if(i){const r=i===Bi.Full?{header:"Status",size:110,renderDescription:(o,u)=>u.status==="Not"?"Custom status":o,enableResizing:!0}:{};a=[We.getStatusColumnDef({accessorKey:"status",mapStatusToAppearance:o=>We.statusAppearances[o],enableSorting:n,...r}),...a]}if(t){const r=({rowId:o,itemId:u})=>{_o.userAction.success({label:`${o} ${u}`,"data-test-id":pr.toaster})};a.push(We.getRowActionsColumnDef({pinned:!0,actionsGenerator:o=>[{id:"action-1",content:{option:"action 1"},onClick:()=>r({rowId:o.row.id,itemId:"action-1"}),"data-test-id":"test-custom"},{id:"action-2",content:{option:"action 2"},onClick:()=>r({rowId:o.row.id,itemId:"action-2"})},{id:"action-3",content:{option:"action 3"},onClick:()=>r({rowId:o.row.id,itemId:"action-3"})},{id:"group-1",type:"group",items:[{id:"action-4",content:{option:"action 4"},onClick:()=>r({rowId:o.row.id,itemId:"action-4"})}],divider:!0}]}))}return a},[e,t,i,n])}function Wa({rowsAmount:e,infiniteLoading:n,filteredData:t,setFilteredData:i,dataError:a}){const r=y.useRef(),o=y.useRef(),u=y.useRef(null),[s,c]=y.useState(!0),[l,h]=y.useState(!1),b=e+20;y.useEffect(()=>{if(n&&t.length>b){c(!1),h(!1),clearTimeout(o.current);return}},[b,t.length,n]);const g=y.useCallback(async()=>{a||!t.length||t.length>b||(h(!0),o.current=setTimeout(()=>{i(E=>E.concat(mr(10))),h(!1)},2e3))},[a,t.length,b,i]);return y.useEffect(()=>{if(!n)return;const E=C=>{C[0].isIntersecting&&s&&!l&&g()};return r.current=new IntersectionObserver(E),u.current&&r.current.observe(u.current),()=>{r.current&&r.current.disconnect()}},[g,s,n,l]),{loading:l,scrollRef:u}}try{qa.displayName="useTableColumnDefinitions",qa.__docgenInfo={description:"",displayName:"useTableColumnDefinitions",props:{rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},statusSortEnabled:{defaultValue:null,description:"",name:"statusSortEnabled",required:!0,type:{name:"boolean"}},showActionsColumn:{defaultValue:null,description:"",name:"showActionsColumn",required:!1,type:{name:"boolean"}},statusColumnViewMode:{defaultValue:null,description:"",name:"statusColumnViewMode",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"full"'}]}}}}}catch{}try{Wa.displayName="useInfiniteLoading",Wa.__docgenInfo={description:"",displayName:"useInfiniteLoading",props:{rowsAmount:{defaultValue:null,description:"",name:"rowsAmount",required:!0,type:{name:"number"}},infiniteLoading:{defaultValue:null,description:"",name:"infiniteLoading",required:!1,type:{name:"boolean"}},filteredData:{defaultValue:null,description:"",name:"filteredData",required:!0,type:{name:"StubData[]"}},setFilteredData:{defaultValue:null,description:"",name:"setFilteredData",required:!0,type:{name:"Dispatch<SetStateAction<StubData[]>>"}},dataError:{defaultValue:null,description:"",name:"dataError",required:!1,type:{name:"boolean"}}}}}catch{}const Sp="_wrapper_km5hp_1",So={wrapper:Sp},em={title:"Components/Table",component:We},ma=["0","2"],wp={defaultValue:{single:"op1",multiple:["op1"]},filters:[{id:"single",type:"single",label:"Single",pinned:!0,options:[{value:"op1",label:"Option 1"},{value:"op2",label:"Option 2"},{value:"op3",label:"Option 3 "}]},{id:"multiple",type:"multiple",label:"Multiple",pinned:!0,options:[{value:"op1",label:"Option 1"},{value:"op2",label:"Option 2"},{value:"op3",label:"Option 3 "}]},{id:"date",type:"date",label:"Date"},{id:"dateRange",type:"date-range",label:"Date Range"}]},xp=({rowsAmount:e,expandRowsLevel:n,expandRowsCount:t,disableSomeRows:i,pinSomeRows:a,statusColumnViewMode:r,showTableTree:o,showActionsColumn:u,rowSelectionMode:s,enableOnRowClick:c,showExport:l,showFilters:h,infiniteLoading:b,rowAutoHeight:g,enableColumnsOrderSortByDrag:E,showColumnsSettings:C,columnFilters:w,initialColumnFiltersOpen:S,...F})=>{const D=y.useMemo(()=>mr(e,{count:t,level:o?n:0}),[e,n,t,o]),[P,R]=y.useState(D);y.useEffect(()=>{R(D)},[D]);const{loading:q,scrollRef:O}=Wa({rowsAmount:e,infiniteLoading:b,filteredData:P,setFilteredData:R,dataError:F.dataError}),M=y.useCallback((ie,ue)=>{R(mt=>mt.filter((Ye,re)=>!(ie!=null&&ie[re]))),ue()},[]),H=qa({rowAutoHeight:g,statusColumnViewMode:r,showActionsColumn:u,statusSortEnabled:F.statusSortEnabled}),U=(ie,ue)=>{_o.userAction.success({label:`clicked row ${ue.id}`})},B=()=>{R(D)},Y=a&&F.keepPinnedRows,Z=y.useMemo(()=>{const ie=ue=>Number(ue)-(Y&&!F.copyPinnedRows?ma.length:0);return ue=>`${ie(ue)}${Y?` + ${ma.length}`:""}`},[F.copyPinnedRows,Y]),te=y.useMemo(()=>{const ie={};return E&&(ie.enableDrag=!0),C&&(ie.enableSettingsMenu=!0),b?{...F,columnsSettings:ie,infiniteLoading:b,pagination:void 0,manualPagination:void 0,suppressPagination:void 0,pageCount:void 0,autoResetPageIndex:void 0}:{...F,columnsSettings:ie,pagination:{options:[5,10,100],optionsRender:Z}}},[F,E,b,Z,C]),ce=y.useMemo(()=>{if(!(!h||!w))return{...w,initialOpen:S}},[w,S,h]),[de,oe]=y.useState({});return y.useEffect(()=>{oe({})},[s]),L.jsxs("div",{className:So.wrapper,children:[L.jsx(We,{...te,loading:F.loading||q,rowAutoHeight:g,columnDefinitions:H,data:P,bulkActions:[{label:"Delete",icon:Bs,onClick:M}],className:So.className,expanding:o?{getSubRows:ie=>ie.subRows,expandingColumnDefinition:{showToggle:!!s,accessorKey:"tree",header:"Tree column",cell:o==="custom-render"?({cell:ie})=>`custom-${ie.getValue()}`:void 0}}:void 0,rowSelection:{multiRow:s==="multi",enable:i?ie=>!["Not","Loading"].includes(ie.original.status):!!s||void 0,onChange:oe},onRefresh:B,onRowClick:c?U:void 0,rowPinning:a?{top:ma}:void 0,exportSettings:l?{fileName:"test-export",exportToCSV:vp,exportToXLSX:Cp}:void 0,columnFilters:ce,scrollRef:O}),L.jsx("div",{"data-test-id":pr.selected,style:{opacity:0,height:1},children:JSON.stringify(de)})]})},yi={render:xp,args:{suppressPagination:!1,suppressToolbar:!1,suppressSearch:!1,showFilters:!0,columnFilters:wp,initialColumnFiltersOpen:!0,rowsAmount:35,expandRowsCount:3,expandRowsLevel:3,loading:!1,statusColumnViewMode:Bi.Full,statusSortEnabled:!0,showActionsColumn:!0,showTableTree:void 0,data:[],rowSelection:{enable:!0,multiRow:!0},rowSelectionMode:"multi",disableSomeRows:!1,onRowClick:()=>{},enableOnRowClick:!1,enableFuzzySearch:!1,"data-test-id":pr.table,showExport:!1,pinSomeRows:!1,savedState:{id:"snack-ui-table-storybook",resize:!0,filterQueryKey:"filterKey",columnSettings:!0},enableColumnsOrderSortByDrag:!0,showColumnsSettings:!0},argTypes:{expandRowsCount:{name:"[Stories]: Amount of subRows ",control:{type:"range",min:0,max:10,step:1}},expandRowsLevel:{name:"[Stories]: Level of  subRows ",control:{type:"range",min:0,max:5,step:1}},rowsAmount:{name:"[Stories]: Amount of rows within the table",description:"demonstration purposes only, this parameter does not exist in component",control:{type:"range",min:0,max:100,step:1}},disableSomeRows:{name:"[Stories]: Make some rows disabled",control:{type:"boolean"},if:{arg:"rowSelectionMode",truthy:!0}},statusColumnViewMode:{name:"[Stories]: Show Status",options:[void 0,...Object.values(Bi)],control:{type:"select"}},showTableTree:{name:"[Stories]: Show tree column",control:{type:"select"},options:[void 0,"default","custom-render"]},statusSortEnabled:{name:"[Stories]: enable sort by status column"},showActionsColumn:{name:"[Stories]: Show RowActions",control:{type:"boolean"}},rowSelection:{name:"rowSelection",description:"Disabled for storybook and tests purpose",control:{disable:!0}},rowSelectionMode:{name:"[Stories]: Choose row selection mode",options:[void 0,"multi","single"],control:{type:"select"}},enableOnRowClick:{name:"[Stories]: Enable row click",control:{type:"boolean"}},onRowClick:{control:{disable:!0}},pinSomeRows:{name:"[Stories]: Pin 1st and 3rd row",controls:{type:"boolean"}},showExport:{name:"[Stories]: Show export example",controls:{type:"boolean"}},showFilters:{name:"[Stories]: Show filters example",controls:{type:"boolean"}},columnFilters:{if:{arg:"showFilters",eq:!0}},initialColumnFiltersOpen:{name:"[Stories]: Initial show column filters state value",controls:{type:"boolean"},if:{arg:"showFilters",eq:!0}},pagination:{control:{disable:!0},if:{arg:"infiniteLoading",neq:!0}},manualPagination:{if:{arg:"infiniteLoading",neq:!0}},suppressPagination:{if:{arg:"infiniteLoading",neq:!0}},pageCount:{if:{arg:"infiniteLoading",neq:!0}},autoResetPageIndex:{if:{arg:"infiniteLoading",neq:!0}},savedState:{name:"[Stories]: Save resize state in local storage",controls:{type:"object"}},enableColumnsOrderSortByDrag:{name:"[Stories]: Enable columns order sort by drag",controls:{type:"boolean"}},showColumnsSettings:{name:"[Stories]: Show columns settings",controls:{type:"boolean"}}},parameters:{controls:{expanded:!0},readme:{sidebar:[`Latest version: ${Cr.version}`,Ws,js]},packageName:Cr.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A225842&mode=design"}}};var wo,xo,Ao;yi.parameters={...yi.parameters,docs:{...(wo=yi.parameters)==null?void 0:wo.docs,source:{originalSource:`{
  render: Template,
  args: {
    suppressPagination: false,
    suppressToolbar: false,
    suppressSearch: false,
    showFilters: true,
    columnFilters,
    initialColumnFiltersOpen: true,
    rowsAmount: 35,
    expandRowsCount: 3,
    expandRowsLevel: 3,
    loading: false,
    statusColumnViewMode: StoryStatusColumnViewMode.Full,
    statusSortEnabled: true,
    showActionsColumn: true,
    showTableTree: undefined,
    data: [],
    rowSelection: {
      enable: true,
      multiRow: true
    },
    rowSelectionMode: 'multi',
    disableSomeRows: false,
    onRowClick: () => {},
    enableOnRowClick: false,
    enableFuzzySearch: false,
    'data-test-id': STORY_TEST_IDS.table,
    showExport: false,
    pinSomeRows: false,
    savedState: {
      id: 'snack-ui-table-storybook',
      resize: true,
      filterQueryKey: 'filterKey',
      columnSettings: true
    },
    enableColumnsOrderSortByDrag: true,
    showColumnsSettings: true
  },
  argTypes: {
    expandRowsCount: {
      name: '[Stories]: Amount of subRows ',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1
      }
    },
    expandRowsLevel: {
      name: '[Stories]: Level of  subRows ',
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 1
      }
    },
    rowsAmount: {
      name: '[Stories]: Amount of rows within the table',
      description: 'demonstration purposes only, this parameter does not exist in component',
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      }
    },
    disableSomeRows: {
      name: '[Stories]: Make some rows disabled',
      control: {
        type: 'boolean'
      },
      if: {
        arg: 'rowSelectionMode',
        truthy: true
      }
    },
    statusColumnViewMode: {
      name: '[Stories]: Show Status',
      options: [undefined, ...Object.values(StoryStatusColumnViewMode)],
      control: {
        type: 'select'
      }
    },
    showTableTree: {
      name: '[Stories]: Show tree column',
      control: {
        type: 'select'
      },
      options: [undefined, 'default', 'custom-render']
    },
    statusSortEnabled: {
      name: '[Stories]: enable sort by status column'
    },
    showActionsColumn: {
      name: '[Stories]: Show RowActions',
      control: {
        type: 'boolean'
      }
    },
    rowSelection: {
      name: 'rowSelection',
      description: 'Disabled for storybook and tests purpose',
      control: {
        disable: true
      }
    },
    rowSelectionMode: {
      name: '[Stories]: Choose row selection mode',
      options: [undefined, 'multi', 'single'],
      control: {
        type: 'select'
      }
    },
    enableOnRowClick: {
      name: '[Stories]: Enable row click',
      control: {
        type: 'boolean'
      }
    },
    onRowClick: {
      control: {
        disable: true
      }
    },
    pinSomeRows: {
      name: '[Stories]: Pin 1st and 3rd row',
      controls: {
        type: 'boolean'
      }
    },
    showExport: {
      name: '[Stories]: Show export example',
      controls: {
        type: 'boolean'
      }
    },
    showFilters: {
      name: '[Stories]: Show filters example',
      controls: {
        type: 'boolean'
      }
    },
    columnFilters: {
      if: {
        arg: 'showFilters',
        eq: true
      }
    },
    initialColumnFiltersOpen: {
      name: '[Stories]: Initial show column filters state value',
      controls: {
        type: 'boolean'
      },
      if: {
        arg: 'showFilters',
        eq: true
      }
    },
    pagination: {
      control: {
        disable: true
      },
      if: {
        arg: 'infiniteLoading',
        neq: true
      }
    },
    manualPagination: {
      if: {
        arg: 'infiniteLoading',
        neq: true
      }
    },
    suppressPagination: {
      if: {
        arg: 'infiniteLoading',
        neq: true
      }
    },
    pageCount: {
      if: {
        arg: 'infiniteLoading',
        neq: true
      }
    },
    autoResetPageIndex: {
      if: {
        arg: 'infiniteLoading',
        neq: true
      }
    },
    savedState: {
      name: '[Stories]: Save resize state in local storage',
      controls: {
        type: 'object'
      }
    },
    enableColumnsOrderSortByDrag: {
      name: '[Stories]: Enable columns order sort by drag',
      controls: {
        type: 'boolean'
      }
    },
    showColumnsSettings: {
      name: '[Stories]: Show columns settings',
      controls: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    controls: {
      expanded: true
    },
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A225842&mode=design'
    }
  }
}`,...(Ao=(xo=yi.parameters)==null?void 0:xo.docs)==null?void 0:Ao.source}}};export{em as default,yi as table};
