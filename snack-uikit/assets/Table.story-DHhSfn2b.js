import{j as R}from"./jsx-runtime-BTJTZTIL.js";import{r as y,R as Ue}from"./index-CJ_LmFaV.js";import{t as _o}from"./helpers-PMoprrB6.js";import{c as ms}from"./index-DTH25FFD.js";import{C as bs}from"./index-Y3TRpJ-L.js";import{C as ks}from"./index-BGTKE3tV.js";import{T as tr}from"./TruncateString-C-ApBzyA.js";import{B as nr}from"./ButtonFunction-BJzRx2eA.js";import{T as vs}from"./TagRow-5PclmRxE.js";import{r as Pn}from"./index-Bxu_udwM.js";import{c as gn}from"./index-DUmpqB7p.js";import{S as ma}from"./Skeleton-Cf0sBfNU.js";import{i as On}from"./isBrowser-C2N6XvuH.js";import{u as Cs}from"./index-JZGyZbA2.js";import{R as Ao}from"./Radio-CutCzDR_.js";import{C as Oo}from"./Checkbox-qiHN918A.js";import{C as ys}from"./index-C3mvkShn.js";import{F as Ss}from"./index-B0xwoRpp.js";import{F as Es,a as ws}from"./index-5mF7KA5g.js";import{u as rr}from"./LocaleProvider-CyhbxqE1.js";import{S as xs}from"./SkeletonText-DP-re6Ou.js";import{C as _s}from"./index-DHAmGKAZ.js";import{S as ba}from"./index-CXJdfWGn.js";import{a as As}from"./Toolbar-5JV-kIdT.js";import{D as Os}from"./index-h0kOFyIh.js";import{D as Xi}from"./DropList-DYpJZktT.js";import{A as Gs,a as Fs,F as Ds}from"./index-BAKcRSlX.js";import{I as Wr}from"./index-CNCE-zGd.js";import{P as Ns}from"./Pagination-6MlpJvxd.js";import{C as Rs}from"./index-BInxR6AO.js";import{T as Ls}from"./Typography-DmSN6cv6.js";import{M as Hs}from"./index-B2h5DBoi.js";import{m as Ts}from"./hooks-D_LY3Fgh.js";import{u as Is}from"./useIsomorphicLayoutEffect-BAXQmlEq.js";import{e as Ms}from"./componentPropsProcessors-UJEZy8aQ.js";import{S as Ps}from"./Scroll-B3e6J9cA.js";import{T as Bs}from"./index-CGSydWJd.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Chjiymov.js";import"./index-DdXvKv-Q.js";import"./index-CGBRtoFy.js";import"./index-DrT0s6v0.js";import"./ProgressBar-DoG3l5ps.js";import"./index-Dn6vuaYJ.js";import"./index-CAfvFIBF.js";import"./index-DbF-M2Rm.js";import"./Link-CNFTiRqm.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./Tooltip-DMNQxdBh.js";import"./PopoverPrivate-TrV_4kB1.js";import"./utils-D4P0b1iJ.js";import"./Counter-dO15w468.js";import"./constants-BaREPXw5.js";import"./Tag-DrvhhdyA.js";import"./Dropdown-CY0dSXGI.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-B7wZyJkK.js";import"./index-w0WAZL2A.js";import"./ChipChoiceRow-BzolpTvn.js";import"./constants-BIigMBdG.js";import"./index-CF_OgQNJ.js";import"./Divider-C1X9zrkx.js";import"./useEventHandler-C8nLb_YB.js";import"./useValueControl-C51frgGe.js";import"./IconPredefined-yX8Rdo-2.js";import"./ButtonTonal-C18l8S2H.js";import"./ButtonFilled-oARZJUp_.js";import"./getRange-CHNeUywO.js";import"./index-Ca89sW9R.js";import"./FuzzySearch-C8qpdhmO.js";import"./Calendar-Cui9MdNe.js";import"./TimePickerBase-8HROe50n.js";import"./List-B8FkiRit.js";import"./TimePicker-lxWbVr_6.js";import"./Switch-DZam4yEg.js";import"./Spinner-PYn9r2mo.js";import"./useButtonNavigation-CnLiqaIQ.js";import"./useClearButton-DHSlnD4l.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-OFi6woZ6.js";class Go{constructor(n,t,r,i){this.filterKey=n,this.validate=t,this.parser=JSON.parse,this.serializer=JSON.stringify,this.getFilter=()=>{try{const a=this.getFromSource(),o=a?this.parser(a):null;return o&&this.validate(o)?o:null}catch{return null}},this.setFilter=a=>{const o=this.serializer(a);this.setToSource(o)},r&&(this.parser=r),i&&(this.serializer=i)}}class Vs extends Go{getFromSource(){return On()&&new URL(window.location.href).searchParams.get(this.filterKey)||""}setToSource(n){if(On()){const t=new URL(window.location.href);t.searchParams.set(this.filterKey,n),history.replaceState({},"",t)}}}class zs extends Go{getFromSource(){return On()&&localStorage.getItem(this.filterKey)||""}setToSource(n){On()&&localStorage.setItem(this.filterKey,n)}}const ka=({source:e})=>{const n=y.useCallback(r=>{e&&e.setFilter(r)},[e]);return{getData:y.useCallback(()=>e==null?void 0:e.getFilter(),[e]),setData:n}},$s=({options:e,parser:n,serializer:t})=>{const r=y.useMemo(()=>e?new Vs(e.filterQueryKey,e.validateData,n,t):void 0,[e,n,t]),i=y.useMemo(()=>e?new zs(e.filterLocalStorageKey,e.validateData):void 0,[e]),{getData:a,setData:o}=ka({source:r}),{getData:u,setData:s}=ka({source:i}),l=y.useCallback(g=>{o(g),s(g)},[o,s]);return{getDefaultFilter:y.useCallback(()=>{const g=u();return g||a()},[a,u]),setDataToStorages:l}},js=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
`,Us="@snack-uikit/table",qs="0.36.7",va={name:Us,version:qs},Ws=`# Table

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
| loading | \`boolean\` | - | Состояние загрузки |
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
`;function Xs(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return y.useMemo(()=>r=>{n.forEach(i=>i(r))},n)}const Vr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Dn(e){const n=Object.prototype.toString.call(e);return n==="[object Window]"||n==="[object global]"}function Ki(e){return"nodeType"in e}function We(e){var n,t;return e?Dn(e)?e:Ki(e)&&(n=(t=e.ownerDocument)==null?void 0:t.defaultView)!=null?n:window:window}function Yi(e){const{Document:n}=We(e);return e instanceof n}function ir(e){return Dn(e)?!1:e instanceof We(e).HTMLElement}function Fo(e){return e instanceof We(e).SVGElement}function Nn(e){return e?Dn(e)?e.document:Ki(e)?Yi(e)?e:ir(e)||Fo(e)?e.ownerDocument:document:document:document}const Nt=Vr?y.useLayoutEffect:y.useEffect;function Ji(e){const n=y.useRef(e);return Nt(()=>{n.current=e}),y.useCallback(function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return n.current==null?void 0:n.current(...r)},[])}function Ks(){const e=y.useRef(null),n=y.useCallback((r,i)=>{e.current=setInterval(r,i)},[]),t=y.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[n,t]}function Yn(e,n){n===void 0&&(n=[e]);const t=y.useRef(e);return Nt(()=>{t.current!==e&&(t.current=e)},n),t}function ar(e,n){const t=y.useRef();return y.useMemo(()=>{const r=e(t.current);return t.current=r,r},[...n])}function wr(e){const n=Ji(e),t=y.useRef(null),r=y.useCallback(i=>{i!==t.current&&(n==null||n(i,t.current)),t.current=i},[]);return[t,r]}function bi(e){const n=y.useRef();return y.useEffect(()=>{n.current=e},[e]),n.current}let Xr={};function or(e,n){return y.useMemo(()=>{if(n)return n;const t=Xr[e]==null?0:Xr[e]+1;return Xr[e]=t,e+"-"+t},[e,n])}function Do(e){return function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return r.reduce((a,o)=>{const u=Object.entries(o);for(const[s,l]of u){const c=a[s];c!=null&&(a[s]=c+e*l)}return a},{...n})}}const _n=Do(1),xr=Do(-1);function Ys(e){return"clientX"in e&&"clientY"in e}function Zi(e){if(!e)return!1;const{KeyboardEvent:n}=We(e.target);return n&&e instanceof n}function Js(e){if(!e)return!1;const{TouchEvent:n}=We(e.target);return n&&e instanceof n}function ki(e){if(Js(e)){if(e.touches&&e.touches.length){const{clientX:n,clientY:t}=e.touches[0];return{x:n,y:t}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:n,clientY:t}=e.changedTouches[0];return{x:n,y:t}}}return Ys(e)?{x:e.clientX,y:e.clientY}:null}const Jn=Object.freeze({Translate:{toString(e){if(!e)return;const{x:n,y:t}=e;return"translate3d("+(n?Math.round(n):0)+"px, "+(t?Math.round(t):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:n,scaleY:t}=e;return"scaleX("+n+") scaleY("+t+")"}},Transform:{toString(e){if(e)return[Jn.Translate.toString(e),Jn.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:n,duration:t,easing:r}=e;return n+" "+t+"ms "+r}}}),Ca="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Zs(e){return e.matches(Ca)?e:e.querySelector(Ca)}const Qs={display:"none"};function el(e){let{id:n,value:t}=e;return Ue.createElement("div",{id:n,style:Qs},t)}function tl(e){let{id:n,announcement:t,ariaLiveType:r="assertive"}=e;const i={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return Ue.createElement("div",{id:n,style:i,role:"status","aria-live":r,"aria-atomic":!0},t)}function nl(){const[e,n]=y.useState("");return{announce:y.useCallback(r=>{r!=null&&n(r)},[]),announcement:e}}const No=y.createContext(null);function rl(e){const n=y.useContext(No);y.useEffect(()=>{if(!n)throw new Error("useDndMonitor must be used within a children of <DndContext>");return n(e)},[e,n])}function il(){const[e]=y.useState(()=>new Set),n=y.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[y.useCallback(r=>{let{type:i,event:a}=r;e.forEach(o=>{var u;return(u=o[i])==null?void 0:u.call(o,a)})},[e]),n]}const al={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},ol={onDragStart(e){let{active:n}=e;return"Picked up draggable item "+n.id+"."},onDragOver(e){let{active:n,over:t}=e;return t?"Draggable item "+n.id+" was moved over droppable area "+t.id+".":"Draggable item "+n.id+" is no longer over a droppable area."},onDragEnd(e){let{active:n,over:t}=e;return t?"Draggable item "+n.id+" was dropped over droppable area "+t.id:"Draggable item "+n.id+" was dropped."},onDragCancel(e){let{active:n}=e;return"Dragging was cancelled. Draggable item "+n.id+" was dropped."}};function ul(e){let{announcements:n=ol,container:t,hiddenTextDescribedById:r,screenReaderInstructions:i=al}=e;const{announce:a,announcement:o}=nl(),u=or("DndLiveRegion"),[s,l]=y.useState(!1);if(y.useEffect(()=>{l(!0)},[]),rl(y.useMemo(()=>({onDragStart(g){let{active:b}=g;a(n.onDragStart({active:b}))},onDragMove(g){let{active:b,over:h}=g;n.onDragMove&&a(n.onDragMove({active:b,over:h}))},onDragOver(g){let{active:b,over:h}=g;a(n.onDragOver({active:b,over:h}))},onDragEnd(g){let{active:b,over:h}=g;a(n.onDragEnd({active:b,over:h}))},onDragCancel(g){let{active:b,over:h}=g;a(n.onDragCancel({active:b,over:h}))}}),[a,n])),!s)return null;const c=Ue.createElement(Ue.Fragment,null,Ue.createElement(el,{id:r,value:i.draggable}),Ue.createElement(tl,{id:u,announcement:o}));return t?Pn.createPortal(c,t):c}var Ce;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Ce||(Ce={}));function _r(){}function Kr(e,n){return y.useMemo(()=>({sensor:e,options:n??{}}),[e,n])}function sl(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return y.useMemo(()=>[...n].filter(r=>r!=null),[...n])}const _t=Object.freeze({x:0,y:0});function ll(e,n){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function cl(e,n){let{data:{value:t}}=e,{data:{value:r}}=n;return t-r}function dl(e,n){let{data:{value:t}}=e,{data:{value:r}}=n;return r-t}function hl(e,n){if(!e||e.length===0)return null;const[t]=e;return t[n]}function ya(e,n,t){return n===void 0&&(n=e.left),t===void 0&&(t=e.top),{x:n+e.width*.5,y:t+e.height*.5}}const gl=e=>{let{collisionRect:n,droppableRects:t,droppableContainers:r}=e;const i=ya(n,n.left,n.top),a=[];for(const o of r){const{id:u}=o,s=t.get(u);if(s){const l=ll(ya(s),i);a.push({id:u,data:{droppableContainer:o,value:l}})}}return a.sort(cl)};function fl(e,n){const t=Math.max(n.top,e.top),r=Math.max(n.left,e.left),i=Math.min(n.left+n.width,e.left+e.width),a=Math.min(n.top+n.height,e.top+e.height),o=i-r,u=a-t;if(r<i&&t<a){const s=n.width*n.height,l=e.width*e.height,c=o*u,g=c/(s+l-c);return Number(g.toFixed(4))}return 0}const pl=e=>{let{collisionRect:n,droppableRects:t,droppableContainers:r}=e;const i=[];for(const a of r){const{id:o}=a,u=t.get(o);if(u){const s=fl(u,n);s>0&&i.push({id:o,data:{droppableContainer:a,value:s}})}}return i.sort(dl)};function ml(e,n,t){return{...e,scaleX:n&&t?n.width/t.width:1,scaleY:n&&t?n.height/t.height:1}}function Ro(e,n){return e&&n?{x:e.left-n.left,y:e.top-n.top}:_t}function bl(e){return function(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return i.reduce((o,u)=>({...o,top:o.top+e*u.y,bottom:o.bottom+e*u.y,left:o.left+e*u.x,right:o.right+e*u.x}),{...t})}}const kl=bl(1);function vl(e){if(e.startsWith("matrix3d(")){const n=e.slice(9,-1).split(/, /);return{x:+n[12],y:+n[13],scaleX:+n[0],scaleY:+n[5]}}else if(e.startsWith("matrix(")){const n=e.slice(7,-1).split(/, /);return{x:+n[4],y:+n[5],scaleX:+n[0],scaleY:+n[3]}}return null}function Cl(e,n,t){const r=vl(n);if(!r)return e;const{scaleX:i,scaleY:a,x:o,y:u}=r,s=e.left-o-(1-i)*parseFloat(t),l=e.top-u-(1-a)*parseFloat(t.slice(t.indexOf(" ")+1)),c=i?e.width/i:e.width,g=a?e.height/a:e.height;return{width:c,height:g,top:l,right:s+c,bottom:l+g,left:s}}const yl={ignoreTransform:!1};function Rn(e,n){n===void 0&&(n=yl);let t=e.getBoundingClientRect();if(n.ignoreTransform){const{transform:l,transformOrigin:c}=We(e).getComputedStyle(e);l&&(t=Cl(t,l,c))}const{top:r,left:i,width:a,height:o,bottom:u,right:s}=t;return{top:r,left:i,width:a,height:o,bottom:u,right:s}}function Sa(e){return Rn(e,{ignoreTransform:!0})}function Sl(e){const n=e.innerWidth,t=e.innerHeight;return{top:0,left:0,right:n,bottom:t,width:n,height:t}}function El(e,n){return n===void 0&&(n=We(e).getComputedStyle(e)),n.position==="fixed"}function wl(e,n){n===void 0&&(n=We(e).getComputedStyle(e));const t=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(i=>{const a=n[i];return typeof a=="string"?t.test(a):!1})}function Qi(e,n){const t=[];function r(i){if(n!=null&&t.length>=n||!i)return t;if(Yi(i)&&i.scrollingElement!=null&&!t.includes(i.scrollingElement))return t.push(i.scrollingElement),t;if(!ir(i)||Fo(i)||t.includes(i))return t;const a=We(e).getComputedStyle(i);return i!==e&&wl(i,a)&&t.push(i),El(i,a)?t:r(i.parentNode)}return e?r(e):t}function Lo(e){const[n]=Qi(e,1);return n??null}function Yr(e){return!Vr||!e?null:Dn(e)?e:Ki(e)?Yi(e)||e===Nn(e).scrollingElement?window:ir(e)?e:null:null}function Ho(e){return Dn(e)?e.scrollX:e.scrollLeft}function To(e){return Dn(e)?e.scrollY:e.scrollTop}function vi(e){return{x:Ho(e),y:To(e)}}var we;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(we||(we={}));function Io(e){return!Vr||!e?!1:e===document.scrollingElement}function Mo(e){const n={x:0,y:0},t=Io(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-t.width,y:e.scrollHeight-t.height},i=e.scrollTop<=n.y,a=e.scrollLeft<=n.x,o=e.scrollTop>=r.y,u=e.scrollLeft>=r.x;return{isTop:i,isLeft:a,isBottom:o,isRight:u,maxScroll:r,minScroll:n}}const xl={x:.2,y:.2};function _l(e,n,t,r,i){let{top:a,left:o,right:u,bottom:s}=t;r===void 0&&(r=10),i===void 0&&(i=xl);const{isTop:l,isBottom:c,isLeft:g,isRight:b}=Mo(e),h={x:0,y:0},S={x:0,y:0},C={height:n.height*i.y,width:n.width*i.x};return!l&&a<=n.top+C.height?(h.y=we.Backward,S.y=r*Math.abs((n.top+C.height-a)/C.height)):!c&&s>=n.bottom-C.height&&(h.y=we.Forward,S.y=r*Math.abs((n.bottom-C.height-s)/C.height)),!b&&u>=n.right-C.width?(h.x=we.Forward,S.x=r*Math.abs((n.right-C.width-u)/C.width)):!g&&o<=n.left+C.width&&(h.x=we.Backward,S.x=r*Math.abs((n.left+C.width-o)/C.width)),{direction:h,speed:S}}function Al(e){if(e===document.scrollingElement){const{innerWidth:a,innerHeight:o}=window;return{top:0,left:0,right:a,bottom:o,width:a,height:o}}const{top:n,left:t,right:r,bottom:i}=e.getBoundingClientRect();return{top:n,left:t,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function Po(e){return e.reduce((n,t)=>_n(n,vi(t)),_t)}function Ol(e){return e.reduce((n,t)=>n+Ho(t),0)}function Gl(e){return e.reduce((n,t)=>n+To(t),0)}function Fl(e,n){if(n===void 0&&(n=Rn),!e)return;const{top:t,left:r,bottom:i,right:a}=n(e);Lo(e)&&(i<=0||a<=0||t>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const Dl=[["x",["left","right"],Ol],["y",["top","bottom"],Gl]];class ea{constructor(n,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Qi(t),i=Po(r);this.rect={...n},this.width=n.width,this.height=n.height;for(const[a,o,u]of Dl)for(const s of o)Object.defineProperty(this,s,{get:()=>{const l=u(r),c=i[a]-l;return this.rect[s]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Vn{constructor(n){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(t=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...t)})},this.target=n}add(n,t,r){var i;(i=this.target)==null||i.addEventListener(n,t,r),this.listeners.push([n,t,r])}}function Nl(e){const{EventTarget:n}=We(e);return e instanceof n?e:Nn(e)}function Jr(e,n){const t=Math.abs(e.x),r=Math.abs(e.y);return typeof n=="number"?Math.sqrt(t**2+r**2)>n:"x"in n&&"y"in n?t>n.x&&r>n.y:"x"in n?t>n.x:"y"in n?r>n.y:!1}var ct;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(ct||(ct={}));function Ea(e){e.preventDefault()}function Rl(e){e.stopPropagation()}var ne;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(ne||(ne={}));const Bo={start:[ne.Space,ne.Enter],cancel:[ne.Esc],end:[ne.Space,ne.Enter,ne.Tab]},Ll=(e,n)=>{let{currentCoordinates:t}=n;switch(e.code){case ne.Right:return{...t,x:t.x+25};case ne.Left:return{...t,x:t.x-25};case ne.Down:return{...t,y:t.y+25};case ne.Up:return{...t,y:t.y-25}}};class ta{constructor(n){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=n;const{event:{target:t}}=n;this.props=n,this.listeners=new Vn(Nn(t)),this.windowListeners=new Vn(We(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(ct.Resize,this.handleCancel),this.windowListeners.add(ct.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(ct.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:n,onStart:t}=this.props,r=n.node.current;r&&Fl(r),t(_t)}handleKeyDown(n){if(Zi(n)){const{active:t,context:r,options:i}=this.props,{keyboardCodes:a=Bo,coordinateGetter:o=Ll,scrollBehavior:u="smooth"}=i,{code:s}=n;if(a.end.includes(s)){this.handleEnd(n);return}if(a.cancel.includes(s)){this.handleCancel(n);return}const{collisionRect:l}=r.current,c=l?{x:l.left,y:l.top}:_t;this.referenceCoordinates||(this.referenceCoordinates=c);const g=o(n,{active:t,context:r.current,currentCoordinates:c});if(g){const b=xr(g,c),h={x:0,y:0},{scrollableAncestors:S}=r.current;for(const C of S){const E=n.code,{isTop:w,isRight:D,isLeft:N,isBottom:V,maxScroll:L,minScroll:q}=Mo(C),G=Al(C),P={x:Math.min(E===ne.Right?G.right-G.width/2:G.right,Math.max(E===ne.Right?G.left:G.left+G.width/2,g.x)),y:Math.min(E===ne.Down?G.bottom-G.height/2:G.bottom,Math.max(E===ne.Down?G.top:G.top+G.height/2,g.y))},H=E===ne.Right&&!D||E===ne.Left&&!N,j=E===ne.Down&&!V||E===ne.Up&&!w;if(H&&P.x!==g.x){const M=C.scrollLeft+b.x,X=E===ne.Right&&M<=L.x||E===ne.Left&&M>=q.x;if(X&&!b.y){C.scrollTo({left:M,behavior:u});return}X?h.x=C.scrollLeft-M:h.x=E===ne.Right?C.scrollLeft-L.x:C.scrollLeft-q.x,h.x&&C.scrollBy({left:-h.x,behavior:u});break}else if(j&&P.y!==g.y){const M=C.scrollTop+b.y,X=E===ne.Down&&M<=L.y||E===ne.Up&&M>=q.y;if(X&&!b.x){C.scrollTo({top:M,behavior:u});return}X?h.y=C.scrollTop-M:h.y=E===ne.Down?C.scrollTop-L.y:C.scrollTop-q.y,h.y&&C.scrollBy({top:-h.y,behavior:u});break}}this.handleMove(n,_n(xr(g,this.referenceCoordinates),h))}}}handleMove(n,t){const{onMove:r}=this.props;n.preventDefault(),r(t)}handleEnd(n){const{onEnd:t}=this.props;n.preventDefault(),this.detach(),t()}handleCancel(n){const{onCancel:t}=this.props;n.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}ta.activators=[{eventName:"onKeyDown",handler:(e,n,t)=>{let{keyboardCodes:r=Bo,onActivation:i}=n,{active:a}=t;const{code:o}=e.nativeEvent;if(r.start.includes(o)){const u=a.activatorNode.current;return u&&e.target!==u?!1:(e.preventDefault(),i==null||i({event:e.nativeEvent}),!0)}return!1}}];function wa(e){return!!(e&&"distance"in e)}function xa(e){return!!(e&&"delay"in e)}class na{constructor(n,t,r){var i;r===void 0&&(r=Nl(n.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=n,this.events=t;const{event:a}=n,{target:o}=a;this.props=n,this.events=t,this.document=Nn(o),this.documentListeners=new Vn(this.document),this.listeners=new Vn(r),this.windowListeners=new Vn(We(o)),this.initialCoordinates=(i=ki(a))!=null?i:_t,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:n,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(n.move.name,this.handleMove,{passive:!1}),this.listeners.add(n.end.name,this.handleEnd),n.cancel&&this.listeners.add(n.cancel.name,this.handleCancel),this.windowListeners.add(ct.Resize,this.handleCancel),this.windowListeners.add(ct.DragStart,Ea),this.windowListeners.add(ct.VisibilityChange,this.handleCancel),this.windowListeners.add(ct.ContextMenu,Ea),this.documentListeners.add(ct.Keydown,this.handleKeydown),t){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(xa(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(wa(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(n,t){const{active:r,onPending:i}=this.props;i(r,n,this.initialCoordinates,t)}handleStart(){const{initialCoordinates:n}=this,{onStart:t}=this.props;n&&(this.activated=!0,this.documentListeners.add(ct.Click,Rl,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(ct.SelectionChange,this.removeTextSelection),t(n))}handleMove(n){var t;const{activated:r,initialCoordinates:i,props:a}=this,{onMove:o,options:{activationConstraint:u}}=a;if(!i)return;const s=(t=ki(n))!=null?t:_t,l=xr(i,s);if(!r&&u){if(wa(u)){if(u.tolerance!=null&&Jr(l,u.tolerance))return this.handleCancel();if(Jr(l,u.distance))return this.handleStart()}if(xa(u)&&Jr(l,u.tolerance))return this.handleCancel();this.handlePending(u,l);return}n.cancelable&&n.preventDefault(),o(s)}handleEnd(){const{onAbort:n,onEnd:t}=this.props;this.detach(),this.activated||n(this.props.active),t()}handleCancel(){const{onAbort:n,onCancel:t}=this.props;this.detach(),this.activated||n(this.props.active),t()}handleKeydown(n){n.code===ne.Esc&&this.handleCancel()}removeTextSelection(){var n;(n=this.document.getSelection())==null||n.removeAllRanges()}}const Hl={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Vo extends na{constructor(n){const{event:t}=n,r=Nn(t.target);super(n,Hl,r)}}Vo.activators=[{eventName:"onPointerDown",handler:(e,n)=>{let{nativeEvent:t}=e,{onActivation:r}=n;return!t.isPrimary||t.button!==0?!1:(r==null||r({event:t}),!0)}}];const Tl={move:{name:"mousemove"},end:{name:"mouseup"}};var Ci;(function(e){e[e.RightClick=2]="RightClick"})(Ci||(Ci={}));class zo extends na{constructor(n){super(n,Tl,Nn(n.event.target))}}zo.activators=[{eventName:"onMouseDown",handler:(e,n)=>{let{nativeEvent:t}=e,{onActivation:r}=n;return t.button===Ci.RightClick?!1:(r==null||r({event:t}),!0)}}];const Zr={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class $o extends na{constructor(n){super(n,Zr)}static setup(){return window.addEventListener(Zr.move.name,n,{capture:!1,passive:!1}),function(){window.removeEventListener(Zr.move.name,n)};function n(){}}}$o.activators=[{eventName:"onTouchStart",handler:(e,n)=>{let{nativeEvent:t}=e,{onActivation:r}=n;const{touches:i}=t;return i.length>1?!1:(r==null||r({event:t}),!0)}}];var zn;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(zn||(zn={}));var Ar;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Ar||(Ar={}));function Il(e){let{acceleration:n,activator:t=zn.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:o=5,order:u=Ar.TreeOrder,pointerCoordinates:s,scrollableAncestors:l,scrollableAncestorRects:c,delta:g,threshold:b}=e;const h=Pl({delta:g,disabled:!a}),[S,C]=Ks(),E=y.useRef({x:0,y:0}),w=y.useRef({x:0,y:0}),D=y.useMemo(()=>{switch(t){case zn.Pointer:return s?{top:s.y,bottom:s.y,left:s.x,right:s.x}:null;case zn.DraggableRect:return i}},[t,i,s]),N=y.useRef(null),V=y.useCallback(()=>{const q=N.current;if(!q)return;const G=E.current.x*w.current.x,P=E.current.y*w.current.y;q.scrollBy(G,P)},[]),L=y.useMemo(()=>u===Ar.TreeOrder?[...l].reverse():l,[u,l]);y.useEffect(()=>{if(!a||!l.length||!D){C();return}for(const q of L){if((r==null?void 0:r(q))===!1)continue;const G=l.indexOf(q),P=c[G];if(!P)continue;const{direction:H,speed:j}=_l(q,P,D,n,b);for(const M of["x","y"])h[M][H[M]]||(j[M]=0,H[M]=0);if(j.x>0||j.y>0){C(),N.current=q,S(V,o),E.current=j,w.current=H;return}}E.current={x:0,y:0},w.current={x:0,y:0},C()},[n,V,r,C,a,o,JSON.stringify(D),JSON.stringify(h),S,l,L,c,JSON.stringify(b)])}const Ml={x:{[we.Backward]:!1,[we.Forward]:!1},y:{[we.Backward]:!1,[we.Forward]:!1}};function Pl(e){let{delta:n,disabled:t}=e;const r=bi(n);return ar(i=>{if(t||!r||!i)return Ml;const a={x:Math.sign(n.x-r.x),y:Math.sign(n.y-r.y)};return{x:{[we.Backward]:i.x[we.Backward]||a.x===-1,[we.Forward]:i.x[we.Forward]||a.x===1},y:{[we.Backward]:i.y[we.Backward]||a.y===-1,[we.Forward]:i.y[we.Forward]||a.y===1}}},[t,n,r])}function Bl(e,n){const t=n!=null?e.get(n):void 0,r=t?t.node.current:null;return ar(i=>{var a;return n==null?null:(a=r??i)!=null?a:null},[r,n])}function Vl(e,n){return y.useMemo(()=>e.reduce((t,r)=>{const{sensor:i}=r,a=i.activators.map(o=>({eventName:o.eventName,handler:n(o.handler,r)}));return[...t,...a]},[]),[e,n])}var Zn;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Zn||(Zn={}));var yi;(function(e){e.Optimized="optimized"})(yi||(yi={}));const _a=new Map;function zl(e,n){let{dragging:t,dependencies:r,config:i}=n;const[a,o]=y.useState(null),{frequency:u,measure:s,strategy:l}=i,c=y.useRef(e),g=E(),b=Yn(g),h=y.useCallback(function(w){w===void 0&&(w=[]),!b.current&&o(D=>D===null?w:D.concat(w.filter(N=>!D.includes(N))))},[b]),S=y.useRef(null),C=ar(w=>{if(g&&!t)return _a;if(!w||w===_a||c.current!==e||a!=null){const D=new Map;for(let N of e){if(!N)continue;if(a&&a.length>0&&!a.includes(N.id)&&N.rect.current){D.set(N.id,N.rect.current);continue}const V=N.node.current,L=V?new ea(s(V),V):null;N.rect.current=L,L&&D.set(N.id,L)}return D}return w},[e,a,t,g,s]);return y.useEffect(()=>{c.current=e},[e]),y.useEffect(()=>{g||h()},[t,g]),y.useEffect(()=>{a&&a.length>0&&o(null)},[JSON.stringify(a)]),y.useEffect(()=>{g||typeof u!="number"||S.current!==null||(S.current=setTimeout(()=>{h(),S.current=null},u))},[u,g,h,...r]),{droppableRects:C,measureDroppableContainers:h,measuringScheduled:a!=null};function E(){switch(l){case Zn.Always:return!1;case Zn.BeforeDragging:return t;default:return!t}}}function jo(e,n){return ar(t=>e?t||(typeof n=="function"?n(e):e):null,[n,e])}function $l(e,n){return jo(e,n)}function jl(e){let{callback:n,disabled:t}=e;const r=Ji(n),i=y.useMemo(()=>{if(t||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:a}=window;return new a(r)},[r,t]);return y.useEffect(()=>()=>i==null?void 0:i.disconnect(),[i]),i}function zr(e){let{callback:n,disabled:t}=e;const r=Ji(n),i=y.useMemo(()=>{if(t||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:a}=window;return new a(r)},[t]);return y.useEffect(()=>()=>i==null?void 0:i.disconnect(),[i]),i}function Ul(e){return new ea(Rn(e),e)}function Aa(e,n,t){n===void 0&&(n=Ul);const[r,i]=y.useState(null);function a(){i(s=>{if(!e)return null;if(e.isConnected===!1){var l;return(l=s??t)!=null?l:null}const c=n(e);return JSON.stringify(s)===JSON.stringify(c)?s:c})}const o=jl({callback(s){if(e)for(const l of s){const{type:c,target:g}=l;if(c==="childList"&&g instanceof HTMLElement&&g.contains(e)){a();break}}}}),u=zr({callback:a});return Nt(()=>{a(),e?(u==null||u.observe(e),o==null||o.observe(document.body,{childList:!0,subtree:!0})):(u==null||u.disconnect(),o==null||o.disconnect())},[e]),r}function ql(e){const n=jo(e);return Ro(e,n)}const Oa=[];function Wl(e){const n=y.useRef(e),t=ar(r=>e?r&&r!==Oa&&e&&n.current&&e.parentNode===n.current.parentNode?r:Qi(e):Oa,[e]);return y.useEffect(()=>{n.current=e},[e]),t}function Xl(e){const[n,t]=y.useState(null),r=y.useRef(e),i=y.useCallback(a=>{const o=Yr(a.target);o&&t(u=>u?(u.set(o,vi(o)),new Map(u)):null)},[]);return y.useEffect(()=>{const a=r.current;if(e!==a){o(a);const u=e.map(s=>{const l=Yr(s);return l?(l.addEventListener("scroll",i,{passive:!0}),[l,vi(l)]):null}).filter(s=>s!=null);t(u.length?new Map(u):null),r.current=e}return()=>{o(e),o(a)};function o(u){u.forEach(s=>{const l=Yr(s);l==null||l.removeEventListener("scroll",i)})}},[i,e]),y.useMemo(()=>e.length?n?Array.from(n.values()).reduce((a,o)=>_n(a,o),_t):Po(e):_t,[e,n])}function Ga(e,n){n===void 0&&(n=[]);const t=y.useRef(null);return y.useEffect(()=>{t.current=null},n),y.useEffect(()=>{const r=e!==_t;r&&!t.current&&(t.current=e),!r&&t.current&&(t.current=null)},[e]),t.current?xr(e,t.current):_t}function Kl(e){y.useEffect(()=>{if(!Vr)return;const n=e.map(t=>{let{sensor:r}=t;return r.setup==null?void 0:r.setup()});return()=>{for(const t of n)t==null||t()}},e.map(n=>{let{sensor:t}=n;return t}))}function Yl(e,n){return y.useMemo(()=>e.reduce((t,r)=>{let{eventName:i,handler:a}=r;return t[i]=o=>{a(o,n)},t},{}),[e,n])}function Uo(e){return y.useMemo(()=>e?Sl(e):null,[e])}const Fa=[];function Jl(e,n){n===void 0&&(n=Rn);const[t]=e,r=Uo(t?We(t):null),[i,a]=y.useState(Fa);function o(){a(()=>e.length?e.map(s=>Io(s)?r:new ea(n(s),s)):Fa)}const u=zr({callback:o});return Nt(()=>{u==null||u.disconnect(),o(),e.forEach(s=>u==null?void 0:u.observe(s))},[e]),i}function Zl(e){if(!e)return null;if(e.children.length>1)return e;const n=e.children[0];return ir(n)?n:e}function Ql(e){let{measure:n}=e;const[t,r]=y.useState(null),i=y.useCallback(l=>{for(const{target:c}of l)if(ir(c)){r(g=>{const b=n(c);return g?{...g,width:b.width,height:b.height}:b});break}},[n]),a=zr({callback:i}),o=y.useCallback(l=>{const c=Zl(l);a==null||a.disconnect(),c&&(a==null||a.observe(c)),r(c?n(c):null)},[n,a]),[u,s]=wr(o);return y.useMemo(()=>({nodeRef:u,rect:t,setRef:s}),[t,u,s])}const ec=[{sensor:Vo,options:{}},{sensor:ta,options:{}}],tc={current:{}},Sr={draggable:{measure:Sa},droppable:{measure:Sa,strategy:Zn.WhileDragging,frequency:yi.Optimized},dragOverlay:{measure:Rn}};class $n extends Map{get(n){var t;return n!=null&&(t=super.get(n))!=null?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(n=>{let{disabled:t}=n;return!t})}getNodeFor(n){var t,r;return(t=(r=this.get(n))==null?void 0:r.node.current)!=null?t:void 0}}const nc={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new $n,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:_r},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Sr,measureDroppableContainers:_r,windowRect:null,measuringScheduled:!1},rc={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:_r,draggableNodes:new Map,over:null,measureDroppableContainers:_r},$r=y.createContext(rc),qo=y.createContext(nc);function ic(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new $n}}}function ac(e,n){switch(n.type){case Ce.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:n.initialCoordinates,active:n.active}};case Ce.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:n.coordinates.x-e.draggable.initialCoordinates.x,y:n.coordinates.y-e.draggable.initialCoordinates.y}}};case Ce.DragEnd:case Ce.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ce.RegisterDroppable:{const{element:t}=n,{id:r}=t,i=new $n(e.droppable.containers);return i.set(r,t),{...e,droppable:{...e.droppable,containers:i}}}case Ce.SetDroppableDisabled:{const{id:t,key:r,disabled:i}=n,a=e.droppable.containers.get(t);if(!a||r!==a.key)return e;const o=new $n(e.droppable.containers);return o.set(t,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case Ce.UnregisterDroppable:{const{id:t,key:r}=n,i=e.droppable.containers.get(t);if(!i||r!==i.key)return e;const a=new $n(e.droppable.containers);return a.delete(t),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function oc(e){let{disabled:n}=e;const{active:t,activatorEvent:r,draggableNodes:i}=y.useContext($r),a=bi(r),o=bi(t==null?void 0:t.id);return y.useEffect(()=>{if(!n&&!r&&a&&o!=null){if(!Zi(a)||document.activeElement===a.target)return;const u=i.get(o);if(!u)return;const{activatorNode:s,node:l}=u;if(!s.current&&!l.current)return;requestAnimationFrame(()=>{for(const c of[s.current,l.current]){if(!c)continue;const g=Zs(c);if(g){g.focus();break}}})}},[r,n,i,o,a]),null}function uc(e,n){let{transform:t,...r}=n;return e!=null&&e.length?e.reduce((i,a)=>a({transform:i,...r}),t):t}function sc(e){return y.useMemo(()=>({draggable:{...Sr.draggable,...e==null?void 0:e.draggable},droppable:{...Sr.droppable,...e==null?void 0:e.droppable},dragOverlay:{...Sr.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function lc(e){let{activeNode:n,measure:t,initialRect:r,config:i=!0}=e;const a=y.useRef(!1),{x:o,y:u}=typeof i=="boolean"?{x:i,y:i}:i;Nt(()=>{if(!o&&!u||!n){a.current=!1;return}if(a.current||!r)return;const l=n==null?void 0:n.node.current;if(!l||l.isConnected===!1)return;const c=t(l),g=Ro(c,r);if(o||(g.x=0),u||(g.y=0),a.current=!0,Math.abs(g.x)>0||Math.abs(g.y)>0){const b=Lo(l);b&&b.scrollBy({top:g.y,left:g.x})}},[n,o,u,r,t])}const Wo=y.createContext({..._t,scaleX:1,scaleY:1});var Xt;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Xt||(Xt={}));const cc=y.memo(function(n){var t,r,i,a;let{id:o,accessibility:u,autoScroll:s=!0,children:l,sensors:c=ec,collisionDetection:g=pl,measuring:b,modifiers:h,...S}=n;const C=y.useReducer(ac,void 0,ic),[E,w]=C,[D,N]=il(),[V,L]=y.useState(Xt.Uninitialized),q=V===Xt.Initialized,{draggable:{active:G,nodes:P,translate:H},droppable:{containers:j}}=E,M=G!=null?P.get(G):null,X=y.useRef({initial:null,translated:null}),Z=y.useMemo(()=>{var pe;return G!=null?{id:G,data:(pe=M==null?void 0:M.data)!=null?pe:tc,rect:X}:null},[G,M]),re=y.useRef(null),[ke,se]=y.useState(null),[ie,At]=y.useState(null),ye=Yn(S,Object.values(S)),pt=or("DndDescribedBy",o),nt=y.useMemo(()=>j.getEnabled(),[j]),ae=sc(b),{droppableRects:de,measureDroppableContainers:Me,measuringScheduled:Pe}=zl(nt,{dragging:q,dependencies:[H.x,H.y],config:ae.droppable}),fe=Bl(P,G),mt=y.useMemo(()=>ie?ki(ie):null,[ie]),Ke=te(),ee=$l(fe,ae.draggable.measure);lc({activeNode:G!=null?P.get(G):null,config:Ke.layoutShiftCompensation,initialRect:ee,measure:ae.draggable.measure});const Q=Aa(fe,ae.draggable.measure,ee),Be=Aa(fe?fe.parentElement:null),Ve=y.useRef({activatorEvent:null,active:null,activeNode:fe,collisionRect:null,collisions:null,droppableRects:de,draggableNodes:P,draggingNode:null,draggingNodeRect:null,droppableContainers:j,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Ot=j.getNodeFor((t=Ve.current.over)==null?void 0:t.id),He=Ql({measure:ae.dragOverlay.measure}),rt=(r=He.nodeRef.current)!=null?r:fe,it=q?(i=He.rect)!=null?i:Q:null,bt=!!(He.nodeRef.current&&He.rect),kt=ql(bt?null:Q),Lt=Uo(rt?We(rt):null),at=Wl(q?Ot??fe:null),Ye=Jl(at),Ht=uc(h,{transform:{x:H.x-kt.x,y:H.y-kt.y,scaleX:1,scaleY:1},activatorEvent:ie,active:Z,activeNodeRect:Q,containerNodeRect:Be,draggingNodeRect:it,over:Ve.current.over,overlayNodeRect:He.rect,scrollableAncestors:at,scrollableAncestorRects:Ye,windowRect:Lt}),ot=mt?_n(mt,H):null,_e=Xl(at),vt=Ga(_e),rn=Ga(_e,[Q]),ut=_n(Ht,vt),Ae=it?kl(it,Ht):null,Tt=Z&&Ae?g({active:Z,collisionRect:Ae,droppableRects:de,droppableContainers:nt,pointerCoordinates:ot}):null,an=hl(Tt,"id"),[ze,Te]=y.useState(null),fn=bt?Ht:_n(Ht,rn),pn=ml(fn,(a=ze==null?void 0:ze.rect)!=null?a:null,Q),Je=y.useRef(null),mn=y.useCallback((pe,me)=>{let{sensor:Oe,options:st}=me;if(re.current==null)return;const Ge=P.get(re.current);if(!Ge)return;const be=pe.nativeEvent,Se=new Oe({active:re.current,activeNode:Ge,event:be,options:st,context:Ve,onAbort(ge){if(!P.get(ge))return;const{onDragAbort:Fe}=ye.current,$e={id:ge};Fe==null||Fe($e),D({type:"onDragAbort",event:$e})},onPending(ge,Ze,Fe,$e){if(!P.get(ge))return;const{onDragPending:Qe}=ye.current,d={id:ge,constraint:Ze,initialCoordinates:Fe,offset:$e};Qe==null||Qe(d),D({type:"onDragPending",event:d})},onStart(ge){const Ze=re.current;if(Ze==null)return;const Fe=P.get(Ze);if(!Fe)return;const{onDragStart:$e}=ye.current,Gt={activatorEvent:be,active:{id:Ze,data:Fe.data,rect:X}};Pn.unstable_batchedUpdates(()=>{$e==null||$e(Gt),L(Xt.Initializing),w({type:Ce.DragStart,initialCoordinates:ge,active:Ze}),D({type:"onDragStart",event:Gt}),se(Je.current),At(be)})},onMove(ge){w({type:Ce.DragMove,coordinates:ge})},onEnd:Ct(Ce.DragEnd),onCancel:Ct(Ce.DragCancel)});Je.current=Se;function Ct(ge){return async function(){const{active:Fe,collisions:$e,over:Gt,scrollAdjustedTranslate:Qe}=Ve.current;let d=null;if(Fe&&Qe){const{cancelDrop:k}=ye.current;d={activatorEvent:be,active:Fe,collisions:$e,delta:Qe,over:Gt},ge===Ce.DragEnd&&typeof k=="function"&&await Promise.resolve(k(d))&&(ge=Ce.DragCancel)}re.current=null,Pn.unstable_batchedUpdates(()=>{w({type:ge}),L(Xt.Uninitialized),Te(null),se(null),At(null),Je.current=null;const k=ge===Ce.DragEnd?"onDragEnd":"onDragCancel";if(d){const f=ye.current[k];f==null||f(d),D({type:k,event:d})}})}}},[P]),on=y.useCallback((pe,me)=>(Oe,st)=>{const Ge=Oe.nativeEvent,be=P.get(st);if(re.current!==null||!be||Ge.dndKit||Ge.defaultPrevented)return;const Se={active:be};pe(Oe,me.options,Se)===!0&&(Ge.dndKit={capturedBy:me.sensor},re.current=st,mn(Oe,me))},[P,mn]),un=Vl(c,on);Kl(c),Nt(()=>{Q&&V===Xt.Initializing&&L(Xt.Initialized)},[Q,V]),y.useEffect(()=>{const{onDragMove:pe}=ye.current,{active:me,activatorEvent:Oe,collisions:st,over:Ge}=Ve.current;if(!me||!Oe)return;const be={active:me,activatorEvent:Oe,collisions:st,delta:{x:ut.x,y:ut.y},over:Ge};Pn.unstable_batchedUpdates(()=>{pe==null||pe(be),D({type:"onDragMove",event:be})})},[ut.x,ut.y]),y.useEffect(()=>{const{active:pe,activatorEvent:me,collisions:Oe,droppableContainers:st,scrollAdjustedTranslate:Ge}=Ve.current;if(!pe||re.current==null||!me||!Ge)return;const{onDragOver:be}=ye.current,Se=st.get(an),Ct=Se&&Se.rect.current?{id:Se.id,rect:Se.rect.current,data:Se.data,disabled:Se.disabled}:null,ge={active:pe,activatorEvent:me,collisions:Oe,delta:{x:Ge.x,y:Ge.y},over:Ct};Pn.unstable_batchedUpdates(()=>{Te(Ct),be==null||be(ge),D({type:"onDragOver",event:ge})})},[an]),Nt(()=>{Ve.current={activatorEvent:ie,active:Z,activeNode:fe,collisionRect:Ae,collisions:Tt,droppableRects:de,draggableNodes:P,draggingNode:rt,draggingNodeRect:it,droppableContainers:j,over:ze,scrollableAncestors:at,scrollAdjustedTranslate:ut},X.current={initial:it,translated:Ae}},[Z,fe,Tt,Ae,P,rt,it,de,j,ze,at,ut]),Il({...Ke,delta:H,draggingRect:Ae,pointerCoordinates:ot,scrollableAncestors:at,scrollableAncestorRects:Ye});const sn=y.useMemo(()=>({active:Z,activeNode:fe,activeNodeRect:Q,activatorEvent:ie,collisions:Tt,containerNodeRect:Be,dragOverlay:He,draggableNodes:P,droppableContainers:j,droppableRects:de,over:ze,measureDroppableContainers:Me,scrollableAncestors:at,scrollableAncestorRects:Ye,measuringConfiguration:ae,measuringScheduled:Pe,windowRect:Lt}),[Z,fe,Q,ie,Tt,Be,He,P,j,de,ze,Me,at,Ye,ae,Pe,Lt]),bn=y.useMemo(()=>({activatorEvent:ie,activators:un,active:Z,activeNodeRect:Q,ariaDescribedById:{draggable:pt},dispatch:w,draggableNodes:P,over:ze,measureDroppableContainers:Me}),[ie,un,Z,Q,w,pt,P,ze,Me]);return Ue.createElement(No.Provider,{value:N},Ue.createElement($r.Provider,{value:bn},Ue.createElement(qo.Provider,{value:sn},Ue.createElement(Wo.Provider,{value:pn},l)),Ue.createElement(oc,{disabled:(u==null?void 0:u.restoreFocus)===!1})),Ue.createElement(ul,{...u,hiddenTextDescribedById:pt}));function te(){const pe=(ke==null?void 0:ke.autoScrollEnabled)===!1,me=typeof s=="object"?s.enabled===!1:s===!1,Oe=q&&!pe&&!me;return typeof s=="object"?{...s,enabled:Oe}:{enabled:Oe}}}),dc=y.createContext(null),Da="button",hc="Draggable";function gc(e){let{id:n,data:t,disabled:r=!1,attributes:i}=e;const a=or(hc),{activators:o,activatorEvent:u,active:s,activeNodeRect:l,ariaDescribedById:c,draggableNodes:g,over:b}=y.useContext($r),{role:h=Da,roleDescription:S="draggable",tabIndex:C=0}=i??{},E=(s==null?void 0:s.id)===n,w=y.useContext(E?Wo:dc),[D,N]=wr(),[V,L]=wr(),q=Yl(o,n),G=Yn(t);Nt(()=>(g.set(n,{id:n,key:a,node:D,activatorNode:V,data:G}),()=>{const H=g.get(n);H&&H.key===a&&g.delete(n)}),[g,n]);const P=y.useMemo(()=>({role:h,tabIndex:C,"aria-disabled":r,"aria-pressed":E&&h===Da?!0:void 0,"aria-roledescription":S,"aria-describedby":c.draggable}),[r,h,C,E,S,c.draggable]);return{active:s,activatorEvent:u,activeNodeRect:l,attributes:P,isDragging:E,listeners:r?void 0:q,node:D,over:b,setNodeRef:N,setActivatorNodeRef:L,transform:w}}function fc(){return y.useContext(qo)}const pc="Droppable",mc={timeout:25};function bc(e){let{data:n,disabled:t=!1,id:r,resizeObserverConfig:i}=e;const a=or(pc),{active:o,dispatch:u,over:s,measureDroppableContainers:l}=y.useContext($r),c=y.useRef({disabled:t}),g=y.useRef(!1),b=y.useRef(null),h=y.useRef(null),{disabled:S,updateMeasurementsFor:C,timeout:E}={...mc,...i},w=Yn(C??r),D=y.useCallback(()=>{if(!g.current){g.current=!0;return}h.current!=null&&clearTimeout(h.current),h.current=setTimeout(()=>{l(Array.isArray(w.current)?w.current:[w.current]),h.current=null},E)},[E]),N=zr({callback:D,disabled:S||!o}),V=y.useCallback((P,H)=>{N&&(H&&(N.unobserve(H),g.current=!1),P&&N.observe(P))},[N]),[L,q]=wr(V),G=Yn(n);return y.useEffect(()=>{!N||!L.current||(N.disconnect(),g.current=!1,N.observe(L.current))},[L,N]),y.useEffect(()=>(u({type:Ce.RegisterDroppable,element:{id:r,key:a,disabled:t,node:L,rect:b,data:G}}),()=>u({type:Ce.UnregisterDroppable,key:a,id:r})),[r]),y.useEffect(()=>{t!==c.current.disabled&&(u({type:Ce.SetDroppableDisabled,id:r,key:a,disabled:t}),c.current.disabled=t)},[r,a,t,u]),{active:o,rect:b,isOver:(s==null?void 0:s.id)===r,node:L,over:s,setNodeRef:q}}/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function Jt(e,n){return typeof e=="function"?e(n):e}function tt(e,n){return t=>{n.setState(r=>({...r,[e]:Jt(t,r[e])}))}}function Or(e){return e instanceof Function}function kc(e){return Array.isArray(e)&&e.every(n=>typeof n=="number")}function vc(e,n){const t=[],r=i=>{i.forEach(a=>{t.push(a);const o=n(a);o!=null&&o.length&&r(o)})};return r(e),t}function K(e,n,t){let r=[],i;return a=>{let o;t.key&&t.debug&&(o=Date.now());const u=e(a);if(!(u.length!==r.length||u.some((c,g)=>r[g]!==c)))return i;r=u;let l;if(t.key&&t.debug&&(l=Date.now()),i=n(...u),t==null||t.onChange==null||t.onChange(i),t.key&&t.debug&&t!=null&&t.debug()){const c=Math.round((Date.now()-o)*100)/100,g=Math.round((Date.now()-l)*100)/100,b=g/16,h=(S,C)=>{for(S=String(S);S.length<C;)S=" "+S;return S};console.info(`%c⏱ ${h(g,5)} /${h(c,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*b,120))}deg 100% 31%);`,t==null?void 0:t.key)}return i}}function Y(e,n,t,r){return{debug:()=>{var i;return(i=e==null?void 0:e.debugAll)!=null?i:e[n]},key:!1,onChange:r}}function Cc(e,n,t,r){var i,a;const u={...e._getDefaultColumnDef(),...n},s=u.accessorKey;let l=(i=(a=u.id)!=null?a:s?s.replace(".","_"):void 0)!=null?i:typeof u.header=="string"?u.header:void 0,c;if(u.accessorFn?c=u.accessorFn:s&&(s.includes(".")?c=b=>{let h=b;for(const C of s.split(".")){var S;h=(S=h)==null?void 0:S[C]}return h}:c=b=>b[u.accessorKey]),!l)throw new Error;let g={id:`${String(l)}`,accessorFn:c,parent:r,depth:t,columnDef:u,columns:[],getFlatColumns:K(()=>[!0],()=>{var b;return[g,...(b=g.columns)==null?void 0:b.flatMap(h=>h.getFlatColumns())]},Y(e.options,"debugColumns")),getLeafColumns:K(()=>[e._getOrderColumnsFn()],b=>{var h;if((h=g.columns)!=null&&h.length){let S=g.columns.flatMap(C=>C.getLeafColumns());return b(S)}return[g]},Y(e.options,"debugColumns"))};for(const b of e._features)b.createColumn==null||b.createColumn(g,e);return g}const De="debugHeaders";function Na(e,n,t){var r;let a={id:(r=t.id)!=null?r:n.id,column:n,index:t.index,isPlaceholder:!!t.isPlaceholder,placeholderId:t.placeholderId,depth:t.depth,subHeaders:[],colSpan:0,rowSpan:0,headerGroup:null,getLeafHeaders:()=>{const o=[],u=s=>{s.subHeaders&&s.subHeaders.length&&s.subHeaders.map(u),o.push(s)};return u(a),o},getContext:()=>({table:e,header:a,column:n})};return e._features.forEach(o=>{o.createHeader==null||o.createHeader(a,e)}),a}const yc={createTable:e=>{e.getHeaderGroups=K(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(n,t,r,i)=>{var a,o;const u=(a=r==null?void 0:r.map(g=>t.find(b=>b.id===g)).filter(Boolean))!=null?a:[],s=(o=i==null?void 0:i.map(g=>t.find(b=>b.id===g)).filter(Boolean))!=null?o:[],l=t.filter(g=>!(r!=null&&r.includes(g.id))&&!(i!=null&&i.includes(g.id)));return dr(n,[...u,...l,...s],e)},Y(e.options,De)),e.getCenterHeaderGroups=K(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(n,t,r,i)=>(t=t.filter(a=>!(r!=null&&r.includes(a.id))&&!(i!=null&&i.includes(a.id))),dr(n,t,e,"center")),Y(e.options,De)),e.getLeftHeaderGroups=K(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left],(n,t,r)=>{var i;const a=(i=r==null?void 0:r.map(o=>t.find(u=>u.id===o)).filter(Boolean))!=null?i:[];return dr(n,a,e,"left")},Y(e.options,De)),e.getRightHeaderGroups=K(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.right],(n,t,r)=>{var i;const a=(i=r==null?void 0:r.map(o=>t.find(u=>u.id===o)).filter(Boolean))!=null?i:[];return dr(n,a,e,"right")},Y(e.options,De)),e.getFooterGroups=K(()=>[e.getHeaderGroups()],n=>[...n].reverse(),Y(e.options,De)),e.getLeftFooterGroups=K(()=>[e.getLeftHeaderGroups()],n=>[...n].reverse(),Y(e.options,De)),e.getCenterFooterGroups=K(()=>[e.getCenterHeaderGroups()],n=>[...n].reverse(),Y(e.options,De)),e.getRightFooterGroups=K(()=>[e.getRightHeaderGroups()],n=>[...n].reverse(),Y(e.options,De)),e.getFlatHeaders=K(()=>[e.getHeaderGroups()],n=>n.map(t=>t.headers).flat(),Y(e.options,De)),e.getLeftFlatHeaders=K(()=>[e.getLeftHeaderGroups()],n=>n.map(t=>t.headers).flat(),Y(e.options,De)),e.getCenterFlatHeaders=K(()=>[e.getCenterHeaderGroups()],n=>n.map(t=>t.headers).flat(),Y(e.options,De)),e.getRightFlatHeaders=K(()=>[e.getRightHeaderGroups()],n=>n.map(t=>t.headers).flat(),Y(e.options,De)),e.getCenterLeafHeaders=K(()=>[e.getCenterFlatHeaders()],n=>n.filter(t=>{var r;return!((r=t.subHeaders)!=null&&r.length)}),Y(e.options,De)),e.getLeftLeafHeaders=K(()=>[e.getLeftFlatHeaders()],n=>n.filter(t=>{var r;return!((r=t.subHeaders)!=null&&r.length)}),Y(e.options,De)),e.getRightLeafHeaders=K(()=>[e.getRightFlatHeaders()],n=>n.filter(t=>{var r;return!((r=t.subHeaders)!=null&&r.length)}),Y(e.options,De)),e.getLeafHeaders=K(()=>[e.getLeftHeaderGroups(),e.getCenterHeaderGroups(),e.getRightHeaderGroups()],(n,t,r)=>{var i,a,o,u,s,l;return[...(i=(a=n[0])==null?void 0:a.headers)!=null?i:[],...(o=(u=t[0])==null?void 0:u.headers)!=null?o:[],...(s=(l=r[0])==null?void 0:l.headers)!=null?s:[]].map(c=>c.getLeafHeaders()).flat()},Y(e.options,De))}};function dr(e,n,t,r){var i,a;let o=0;const u=function(b,h){h===void 0&&(h=1),o=Math.max(o,h),b.filter(S=>S.getIsVisible()).forEach(S=>{var C;(C=S.columns)!=null&&C.length&&u(S.columns,h+1)},0)};u(e);let s=[];const l=(b,h)=>{const S={depth:h,id:[r,`${h}`].filter(Boolean).join("_"),headers:[]},C=[];b.forEach(E=>{const w=[...C].reverse()[0],D=E.column.depth===S.depth;let N,V=!1;if(D&&E.column.parent?N=E.column.parent:(N=E.column,V=!0),w&&(w==null?void 0:w.column)===N)w.subHeaders.push(E);else{const L=Na(t,N,{id:[r,h,N.id,E==null?void 0:E.id].filter(Boolean).join("_"),isPlaceholder:V,placeholderId:V?`${C.filter(q=>q.column===N).length}`:void 0,depth:h,index:C.length});L.subHeaders.push(E),C.push(L)}S.headers.push(E),E.headerGroup=S}),s.push(S),h>0&&l(C,h-1)},c=n.map((b,h)=>Na(t,b,{depth:o,index:h}));l(c,o-1),s.reverse();const g=b=>b.filter(S=>S.column.getIsVisible()).map(S=>{let C=0,E=0,w=[0];S.subHeaders&&S.subHeaders.length?(w=[],g(S.subHeaders).forEach(N=>{let{colSpan:V,rowSpan:L}=N;C+=V,w.push(L)})):C=1;const D=Math.min(...w);return E=E+D,S.colSpan=C,S.rowSpan=E,{colSpan:C,rowSpan:E}});return g((i=(a=s[0])==null?void 0:a.headers)!=null?i:[]),s}const hr={size:150,minSize:20,maxSize:Number.MAX_SAFE_INTEGER},Qr=()=>({startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]}),Sc={getDefaultColumnDef:()=>hr,getInitialState:e=>({columnSizing:{},columnSizingInfo:Qr(),...e}),getDefaultOptions:e=>({columnResizeMode:"onEnd",columnResizeDirection:"ltr",onColumnSizingChange:tt("columnSizing",e),onColumnSizingInfoChange:tt("columnSizingInfo",e)}),createColumn:(e,n)=>{e.getSize=()=>{var t,r,i;const a=n.getState().columnSizing[e.id];return Math.min(Math.max((t=e.columnDef.minSize)!=null?t:hr.minSize,(r=a??e.columnDef.size)!=null?r:hr.size),(i=e.columnDef.maxSize)!=null?i:hr.maxSize)},e.getStart=K(t=>[t,jn(n,t),n.getState().columnSizing],(t,r)=>r.slice(0,e.getIndex(t)).reduce((i,a)=>i+a.getSize(),0),Y(n.options,"debugColumns")),e.getAfter=K(t=>[t,jn(n,t),n.getState().columnSizing],(t,r)=>r.slice(e.getIndex(t)+1).reduce((i,a)=>i+a.getSize(),0),Y(n.options,"debugColumns")),e.resetSize=()=>{n.setColumnSizing(t=>{let{[e.id]:r,...i}=t;return i})},e.getCanResize=()=>{var t,r;return((t=e.columnDef.enableResizing)!=null?t:!0)&&((r=n.options.enableColumnResizing)!=null?r:!0)},e.getIsResizing=()=>n.getState().columnSizingInfo.isResizingColumn===e.id},createHeader:(e,n)=>{e.getSize=()=>{let t=0;const r=i=>{if(i.subHeaders.length)i.subHeaders.forEach(r);else{var a;t+=(a=i.column.getSize())!=null?a:0}};return r(e),t},e.getStart=()=>{if(e.index>0){const t=e.headerGroup.headers[e.index-1];return t.getStart()+t.getSize()}return 0},e.getResizeHandler=t=>{const r=n.getColumn(e.column.id),i=r==null?void 0:r.getCanResize();return a=>{if(!r||!i||(a.persist==null||a.persist(),ei(a)&&a.touches&&a.touches.length>1))return;const o=e.getSize(),u=e?e.getLeafHeaders().map(w=>[w.column.id,w.column.getSize()]):[[r.id,r.getSize()]],s=ei(a)?Math.round(a.touches[0].clientX):a.clientX,l={},c=(w,D)=>{typeof D=="number"&&(n.setColumnSizingInfo(N=>{var V,L;const q=n.options.columnResizeDirection==="rtl"?-1:1,G=(D-((V=N==null?void 0:N.startOffset)!=null?V:0))*q,P=Math.max(G/((L=N==null?void 0:N.startSize)!=null?L:0),-.999999);return N.columnSizingStart.forEach(H=>{let[j,M]=H;l[j]=Math.round(Math.max(M+M*P,0)*100)/100}),{...N,deltaOffset:G,deltaPercentage:P}}),(n.options.columnResizeMode==="onChange"||w==="end")&&n.setColumnSizing(N=>({...N,...l})))},g=w=>c("move",w),b=w=>{c("end",w),n.setColumnSizingInfo(D=>({...D,isResizingColumn:!1,startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,columnSizingStart:[]}))},h=t||typeof document<"u"?document:null,S={moveHandler:w=>g(w.clientX),upHandler:w=>{h==null||h.removeEventListener("mousemove",S.moveHandler),h==null||h.removeEventListener("mouseup",S.upHandler),b(w.clientX)}},C={moveHandler:w=>(w.cancelable&&(w.preventDefault(),w.stopPropagation()),g(w.touches[0].clientX),!1),upHandler:w=>{var D;h==null||h.removeEventListener("touchmove",C.moveHandler),h==null||h.removeEventListener("touchend",C.upHandler),w.cancelable&&(w.preventDefault(),w.stopPropagation()),b((D=w.touches[0])==null?void 0:D.clientX)}},E=Ec()?{passive:!1}:!1;ei(a)?(h==null||h.addEventListener("touchmove",C.moveHandler,E),h==null||h.addEventListener("touchend",C.upHandler,E)):(h==null||h.addEventListener("mousemove",S.moveHandler,E),h==null||h.addEventListener("mouseup",S.upHandler,E)),n.setColumnSizingInfo(w=>({...w,startOffset:s,startSize:o,deltaOffset:0,deltaPercentage:0,columnSizingStart:u,isResizingColumn:r.id}))}}},createTable:e=>{e.setColumnSizing=n=>e.options.onColumnSizingChange==null?void 0:e.options.onColumnSizingChange(n),e.setColumnSizingInfo=n=>e.options.onColumnSizingInfoChange==null?void 0:e.options.onColumnSizingInfoChange(n),e.resetColumnSizing=n=>{var t;e.setColumnSizing(n?{}:(t=e.initialState.columnSizing)!=null?t:{})},e.resetHeaderSizeInfo=n=>{var t;e.setColumnSizingInfo(n?Qr():(t=e.initialState.columnSizingInfo)!=null?t:Qr())},e.getTotalSize=()=>{var n,t;return(n=(t=e.getHeaderGroups()[0])==null?void 0:t.headers.reduce((r,i)=>r+i.getSize(),0))!=null?n:0},e.getLeftTotalSize=()=>{var n,t;return(n=(t=e.getLeftHeaderGroups()[0])==null?void 0:t.headers.reduce((r,i)=>r+i.getSize(),0))!=null?n:0},e.getCenterTotalSize=()=>{var n,t;return(n=(t=e.getCenterHeaderGroups()[0])==null?void 0:t.headers.reduce((r,i)=>r+i.getSize(),0))!=null?n:0},e.getRightTotalSize=()=>{var n,t;return(n=(t=e.getRightHeaderGroups()[0])==null?void 0:t.headers.reduce((r,i)=>r+i.getSize(),0))!=null?n:0}}};let gr=null;function Ec(){if(typeof gr=="boolean")return gr;let e=!1;try{const n={get passive(){return e=!0,!1}},t=()=>{};window.addEventListener("test",t,n),window.removeEventListener("test",t)}catch{e=!1}return gr=e,gr}function ei(e){return e.type==="touchstart"}const wc={getInitialState:e=>({expanded:{},...e}),getDefaultOptions:e=>({onExpandedChange:tt("expanded",e),paginateExpandedRows:!0}),createTable:e=>{let n=!1,t=!1;e._autoResetExpanded=()=>{var r,i;if(!n){e._queue(()=>{n=!0});return}if((r=(i=e.options.autoResetAll)!=null?i:e.options.autoResetExpanded)!=null?r:!e.options.manualExpanding){if(t)return;t=!0,e._queue(()=>{e.resetExpanded(),t=!1})}},e.setExpanded=r=>e.options.onExpandedChange==null?void 0:e.options.onExpandedChange(r),e.toggleAllRowsExpanded=r=>{r??!e.getIsAllRowsExpanded()?e.setExpanded(!0):e.setExpanded({})},e.resetExpanded=r=>{var i,a;e.setExpanded(r?{}:(i=(a=e.initialState)==null?void 0:a.expanded)!=null?i:{})},e.getCanSomeRowsExpand=()=>e.getPrePaginationRowModel().flatRows.some(r=>r.getCanExpand()),e.getToggleAllRowsExpandedHandler=()=>r=>{r.persist==null||r.persist(),e.toggleAllRowsExpanded()},e.getIsSomeRowsExpanded=()=>{const r=e.getState().expanded;return r===!0||Object.values(r).some(Boolean)},e.getIsAllRowsExpanded=()=>{const r=e.getState().expanded;return typeof r=="boolean"?r===!0:!(!Object.keys(r).length||e.getRowModel().flatRows.some(i=>!i.getIsExpanded()))},e.getExpandedDepth=()=>{let r=0;return(e.getState().expanded===!0?Object.keys(e.getRowModel().rowsById):Object.keys(e.getState().expanded)).forEach(a=>{const o=a.split(".");r=Math.max(r,o.length)}),r},e.getPreExpandedRowModel=()=>e.getSortedRowModel(),e.getExpandedRowModel=()=>(!e._getExpandedRowModel&&e.options.getExpandedRowModel&&(e._getExpandedRowModel=e.options.getExpandedRowModel(e)),e.options.manualExpanding||!e._getExpandedRowModel?e.getPreExpandedRowModel():e._getExpandedRowModel())},createRow:(e,n)=>{e.toggleExpanded=t=>{n.setExpanded(r=>{var i;const a=r===!0?!0:!!(r!=null&&r[e.id]);let o={};if(r===!0?Object.keys(n.getRowModel().rowsById).forEach(u=>{o[u]=!0}):o=r,t=(i=t)!=null?i:!a,!a&&t)return{...o,[e.id]:!0};if(a&&!t){const{[e.id]:u,...s}=o;return s}return r})},e.getIsExpanded=()=>{var t;const r=n.getState().expanded;return!!((t=n.options.getIsRowExpanded==null?void 0:n.options.getIsRowExpanded(e))!=null?t:r===!0||r!=null&&r[e.id])},e.getCanExpand=()=>{var t,r,i;return(t=n.options.getRowCanExpand==null?void 0:n.options.getRowCanExpand(e))!=null?t:((r=n.options.enableExpanding)!=null?r:!0)&&!!((i=e.subRows)!=null&&i.length)},e.getIsAllParentsExpanded=()=>{let t=!0,r=e;for(;t&&r.parentId;)r=n.getRow(r.parentId,!0),t=r.getIsExpanded();return t},e.getToggleExpandedHandler=()=>{const t=e.getCanExpand();return()=>{t&&e.toggleExpanded()}}}},Xo=(e,n,t)=>{var r;const i=t.toLowerCase();return!!(!((r=e.getValue(n))==null||(r=r.toString())==null||(r=r.toLowerCase())==null)&&r.includes(i))};Xo.autoRemove=e=>wt(e);const Ko=(e,n,t)=>{var r;return!!(!((r=e.getValue(n))==null||(r=r.toString())==null)&&r.includes(t))};Ko.autoRemove=e=>wt(e);const Yo=(e,n,t)=>{var r;return((r=e.getValue(n))==null||(r=r.toString())==null?void 0:r.toLowerCase())===(t==null?void 0:t.toLowerCase())};Yo.autoRemove=e=>wt(e);const Jo=(e,n,t)=>{var r;return(r=e.getValue(n))==null?void 0:r.includes(t)};Jo.autoRemove=e=>wt(e)||!(e!=null&&e.length);const Zo=(e,n,t)=>!t.some(r=>{var i;return!((i=e.getValue(n))!=null&&i.includes(r))});Zo.autoRemove=e=>wt(e)||!(e!=null&&e.length);const Qo=(e,n,t)=>t.some(r=>{var i;return(i=e.getValue(n))==null?void 0:i.includes(r)});Qo.autoRemove=e=>wt(e)||!(e!=null&&e.length);const eu=(e,n,t)=>e.getValue(n)===t;eu.autoRemove=e=>wt(e);const tu=(e,n,t)=>e.getValue(n)==t;tu.autoRemove=e=>wt(e);const ra=(e,n,t)=>{let[r,i]=t;const a=e.getValue(n);return a>=r&&a<=i};ra.resolveFilterValue=e=>{let[n,t]=e,r=typeof n!="number"?parseFloat(n):n,i=typeof t!="number"?parseFloat(t):t,a=n===null||Number.isNaN(r)?-1/0:r,o=t===null||Number.isNaN(i)?1/0:i;if(a>o){const u=a;a=o,o=u}return[a,o]};ra.autoRemove=e=>wt(e)||wt(e[0])&&wt(e[1]);const Mt={includesString:Xo,includesStringSensitive:Ko,equalsString:Yo,arrIncludes:Jo,arrIncludesAll:Zo,arrIncludesSome:Qo,equals:eu,weakEquals:tu,inNumberRange:ra};function wt(e){return e==null||e===""}const xc={getDefaultColumnDef:()=>({filterFn:"auto"}),getInitialState:e=>({columnFilters:[],globalFilter:void 0,...e}),getDefaultOptions:e=>({onColumnFiltersChange:tt("columnFilters",e),onGlobalFilterChange:tt("globalFilter",e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100,globalFilterFn:"auto",getColumnCanGlobalFilter:n=>{var t;const r=(t=e.getCoreRowModel().flatRows[0])==null||(t=t._getAllCellsByColumnId()[n.id])==null?void 0:t.getValue();return typeof r=="string"||typeof r=="number"}}),createColumn:(e,n)=>{e.getAutoFilterFn=()=>{const t=n.getCoreRowModel().flatRows[0],r=t==null?void 0:t.getValue(e.id);return typeof r=="string"?Mt.includesString:typeof r=="number"?Mt.inNumberRange:typeof r=="boolean"||r!==null&&typeof r=="object"?Mt.equals:Array.isArray(r)?Mt.arrIncludes:Mt.weakEquals},e.getFilterFn=()=>{var t,r;return Or(e.columnDef.filterFn)?e.columnDef.filterFn:e.columnDef.filterFn==="auto"?e.getAutoFilterFn():(t=(r=n.options.filterFns)==null?void 0:r[e.columnDef.filterFn])!=null?t:Mt[e.columnDef.filterFn]},e.getCanFilter=()=>{var t,r,i;return((t=e.columnDef.enableColumnFilter)!=null?t:!0)&&((r=n.options.enableColumnFilters)!=null?r:!0)&&((i=n.options.enableFilters)!=null?i:!0)&&!!e.accessorFn},e.getCanGlobalFilter=()=>{var t,r,i,a;return((t=e.columnDef.enableGlobalFilter)!=null?t:!0)&&((r=n.options.enableGlobalFilter)!=null?r:!0)&&((i=n.options.enableFilters)!=null?i:!0)&&((a=n.options.getColumnCanGlobalFilter==null?void 0:n.options.getColumnCanGlobalFilter(e))!=null?a:!0)&&!!e.accessorFn},e.getIsFiltered=()=>e.getFilterIndex()>-1,e.getFilterValue=()=>{var t;return(t=n.getState().columnFilters)==null||(t=t.find(r=>r.id===e.id))==null?void 0:t.value},e.getFilterIndex=()=>{var t,r;return(t=(r=n.getState().columnFilters)==null?void 0:r.findIndex(i=>i.id===e.id))!=null?t:-1},e.setFilterValue=t=>{n.setColumnFilters(r=>{const i=e.getFilterFn(),a=r==null?void 0:r.find(c=>c.id===e.id),o=Jt(t,a?a.value:void 0);if(Ra(i,o,e)){var u;return(u=r==null?void 0:r.filter(c=>c.id!==e.id))!=null?u:[]}const s={id:e.id,value:o};if(a){var l;return(l=r==null?void 0:r.map(c=>c.id===e.id?s:c))!=null?l:[]}return r!=null&&r.length?[...r,s]:[s]})},e._getFacetedRowModel=n.options.getFacetedRowModel&&n.options.getFacetedRowModel(n,e.id),e.getFacetedRowModel=()=>e._getFacetedRowModel?e._getFacetedRowModel():n.getPreFilteredRowModel(),e._getFacetedUniqueValues=n.options.getFacetedUniqueValues&&n.options.getFacetedUniqueValues(n,e.id),e.getFacetedUniqueValues=()=>e._getFacetedUniqueValues?e._getFacetedUniqueValues():new Map,e._getFacetedMinMaxValues=n.options.getFacetedMinMaxValues&&n.options.getFacetedMinMaxValues(n,e.id),e.getFacetedMinMaxValues=()=>{if(e._getFacetedMinMaxValues)return e._getFacetedMinMaxValues()}},createRow:(e,n)=>{e.columnFilters={},e.columnFiltersMeta={}},createTable:e=>{e.getGlobalAutoFilterFn=()=>Mt.includesString,e.getGlobalFilterFn=()=>{var n,t;const{globalFilterFn:r}=e.options;return Or(r)?r:r==="auto"?e.getGlobalAutoFilterFn():(n=(t=e.options.filterFns)==null?void 0:t[r])!=null?n:Mt[r]},e.setColumnFilters=n=>{const t=e.getAllLeafColumns(),r=i=>{var a;return(a=Jt(n,i))==null?void 0:a.filter(o=>{const u=t.find(s=>s.id===o.id);if(u){const s=u.getFilterFn();if(Ra(s,o.value,u))return!1}return!0})};e.options.onColumnFiltersChange==null||e.options.onColumnFiltersChange(r)},e.setGlobalFilter=n=>{e.options.onGlobalFilterChange==null||e.options.onGlobalFilterChange(n)},e.resetGlobalFilter=n=>{e.setGlobalFilter(n?void 0:e.initialState.globalFilter)},e.resetColumnFilters=n=>{var t,r;e.setColumnFilters(n?[]:(t=(r=e.initialState)==null?void 0:r.columnFilters)!=null?t:[])},e.getPreFilteredRowModel=()=>e.getCoreRowModel(),e.getFilteredRowModel=()=>(!e._getFilteredRowModel&&e.options.getFilteredRowModel&&(e._getFilteredRowModel=e.options.getFilteredRowModel(e)),e.options.manualFiltering||!e._getFilteredRowModel?e.getPreFilteredRowModel():e._getFilteredRowModel()),e._getGlobalFacetedRowModel=e.options.getFacetedRowModel&&e.options.getFacetedRowModel(e,"__global__"),e.getGlobalFacetedRowModel=()=>e.options.manualFiltering||!e._getGlobalFacetedRowModel?e.getPreFilteredRowModel():e._getGlobalFacetedRowModel(),e._getGlobalFacetedUniqueValues=e.options.getFacetedUniqueValues&&e.options.getFacetedUniqueValues(e,"__global__"),e.getGlobalFacetedUniqueValues=()=>e._getGlobalFacetedUniqueValues?e._getGlobalFacetedUniqueValues():new Map,e._getGlobalFacetedMinMaxValues=e.options.getFacetedMinMaxValues&&e.options.getFacetedMinMaxValues(e,"__global__"),e.getGlobalFacetedMinMaxValues=()=>{if(e._getGlobalFacetedMinMaxValues)return e._getGlobalFacetedMinMaxValues()}}};function Ra(e,n,t){return(e&&e.autoRemove?e.autoRemove(n,t):!1)||typeof n>"u"||typeof n=="string"&&!n}const _c=(e,n,t)=>t.reduce((r,i)=>{const a=i.getValue(e);return r+(typeof a=="number"?a:0)},0),Ac=(e,n,t)=>{let r;return t.forEach(i=>{const a=i.getValue(e);a!=null&&(r>a||r===void 0&&a>=a)&&(r=a)}),r},Oc=(e,n,t)=>{let r;return t.forEach(i=>{const a=i.getValue(e);a!=null&&(r<a||r===void 0&&a>=a)&&(r=a)}),r},Gc=(e,n,t)=>{let r,i;return t.forEach(a=>{const o=a.getValue(e);o!=null&&(r===void 0?o>=o&&(r=i=o):(r>o&&(r=o),i<o&&(i=o)))}),[r,i]},Fc=(e,n)=>{let t=0,r=0;if(n.forEach(i=>{let a=i.getValue(e);a!=null&&(a=+a)>=a&&(++t,r+=a)}),t)return r/t},Dc=(e,n)=>{if(!n.length)return;const t=n.map(a=>a.getValue(e));if(!kc(t))return;if(t.length===1)return t[0];const r=Math.floor(t.length/2),i=t.sort((a,o)=>a-o);return t.length%2!==0?i[r]:(i[r-1]+i[r])/2},Nc=(e,n)=>Array.from(new Set(n.map(t=>t.getValue(e))).values()),Rc=(e,n)=>new Set(n.map(t=>t.getValue(e))).size,Lc=(e,n)=>n.length,ti={sum:_c,min:Ac,max:Oc,extent:Gc,mean:Fc,median:Dc,unique:Nc,uniqueCount:Rc,count:Lc},Hc={getDefaultColumnDef:()=>({aggregatedCell:e=>{var n,t;return(n=(t=e.getValue())==null||t.toString==null?void 0:t.toString())!=null?n:null},aggregationFn:"auto"}),getInitialState:e=>({grouping:[],...e}),getDefaultOptions:e=>({onGroupingChange:tt("grouping",e),groupedColumnMode:"reorder"}),createColumn:(e,n)=>{e.toggleGrouping=()=>{n.setGrouping(t=>t!=null&&t.includes(e.id)?t.filter(r=>r!==e.id):[...t??[],e.id])},e.getCanGroup=()=>{var t,r,i,a;return(t=(r=(i=(a=e.columnDef.enableGrouping)!=null?a:!0)!=null?i:n.options.enableGrouping)!=null?r:!0)!=null?t:!!e.accessorFn},e.getIsGrouped=()=>{var t;return(t=n.getState().grouping)==null?void 0:t.includes(e.id)},e.getGroupedIndex=()=>{var t;return(t=n.getState().grouping)==null?void 0:t.indexOf(e.id)},e.getToggleGroupingHandler=()=>{const t=e.getCanGroup();return()=>{t&&e.toggleGrouping()}},e.getAutoAggregationFn=()=>{const t=n.getCoreRowModel().flatRows[0],r=t==null?void 0:t.getValue(e.id);if(typeof r=="number")return ti.sum;if(Object.prototype.toString.call(r)==="[object Date]")return ti.extent},e.getAggregationFn=()=>{var t,r;if(!e)throw new Error;return Or(e.columnDef.aggregationFn)?e.columnDef.aggregationFn:e.columnDef.aggregationFn==="auto"?e.getAutoAggregationFn():(t=(r=n.options.aggregationFns)==null?void 0:r[e.columnDef.aggregationFn])!=null?t:ti[e.columnDef.aggregationFn]}},createTable:e=>{e.setGrouping=n=>e.options.onGroupingChange==null?void 0:e.options.onGroupingChange(n),e.resetGrouping=n=>{var t,r;e.setGrouping(n?[]:(t=(r=e.initialState)==null?void 0:r.grouping)!=null?t:[])},e.getPreGroupedRowModel=()=>e.getFilteredRowModel(),e.getGroupedRowModel=()=>(!e._getGroupedRowModel&&e.options.getGroupedRowModel&&(e._getGroupedRowModel=e.options.getGroupedRowModel(e)),e.options.manualGrouping||!e._getGroupedRowModel?e.getPreGroupedRowModel():e._getGroupedRowModel())},createRow:(e,n)=>{e.getIsGrouped=()=>!!e.groupingColumnId,e.getGroupingValue=t=>{if(e._groupingValuesCache.hasOwnProperty(t))return e._groupingValuesCache[t];const r=n.getColumn(t);return r!=null&&r.columnDef.getGroupingValue?(e._groupingValuesCache[t]=r.columnDef.getGroupingValue(e.original),e._groupingValuesCache[t]):e.getValue(t)},e._groupingValuesCache={}},createCell:(e,n,t,r)=>{e.getIsGrouped=()=>n.getIsGrouped()&&n.id===t.groupingColumnId,e.getIsPlaceholder=()=>!e.getIsGrouped()&&n.getIsGrouped(),e.getIsAggregated=()=>{var i;return!e.getIsGrouped()&&!e.getIsPlaceholder()&&!!((i=t.subRows)!=null&&i.length)}}};function Tc(e,n,t){if(!(n!=null&&n.length)||!t)return e;const r=e.filter(a=>!n.includes(a.id));return t==="remove"?r:[...n.map(a=>e.find(o=>o.id===a)).filter(Boolean),...r]}const Ic={getInitialState:e=>({columnOrder:[],...e}),getDefaultOptions:e=>({onColumnOrderChange:tt("columnOrder",e)}),createColumn:(e,n)=>{e.getIndex=K(t=>[jn(n,t)],t=>t.findIndex(r=>r.id===e.id),Y(n.options,"debugColumns")),e.getIsFirstColumn=t=>{var r;return((r=jn(n,t)[0])==null?void 0:r.id)===e.id},e.getIsLastColumn=t=>{var r;const i=jn(n,t);return((r=i[i.length-1])==null?void 0:r.id)===e.id}},createTable:e=>{e.setColumnOrder=n=>e.options.onColumnOrderChange==null?void 0:e.options.onColumnOrderChange(n),e.resetColumnOrder=n=>{var t;e.setColumnOrder(n?[]:(t=e.initialState.columnOrder)!=null?t:[])},e._getOrderColumnsFn=K(()=>[e.getState().columnOrder,e.getState().grouping,e.options.groupedColumnMode],(n,t,r)=>i=>{let a=[];if(!(n!=null&&n.length))a=i;else{const o=[...n],u=[...i];for(;u.length&&o.length;){const s=o.shift(),l=u.findIndex(c=>c.id===s);l>-1&&a.push(u.splice(l,1)[0])}a=[...a,...u]}return Tc(a,t,r)},Y(e.options,"debugTable"))}},Si=0,Ei=10,ni=()=>({pageIndex:Si,pageSize:Ei}),Mc={getInitialState:e=>({...e,pagination:{...ni(),...e==null?void 0:e.pagination}}),getDefaultOptions:e=>({onPaginationChange:tt("pagination",e)}),createTable:e=>{let n=!1,t=!1;e._autoResetPageIndex=()=>{var r,i;if(!n){e._queue(()=>{n=!0});return}if((r=(i=e.options.autoResetAll)!=null?i:e.options.autoResetPageIndex)!=null?r:!e.options.manualPagination){if(t)return;t=!0,e._queue(()=>{e.resetPageIndex(),t=!1})}},e.setPagination=r=>{const i=a=>Jt(r,a);return e.options.onPaginationChange==null?void 0:e.options.onPaginationChange(i)},e.resetPagination=r=>{var i;e.setPagination(r?ni():(i=e.initialState.pagination)!=null?i:ni())},e.setPageIndex=r=>{e.setPagination(i=>{let a=Jt(r,i.pageIndex);const o=typeof e.options.pageCount>"u"||e.options.pageCount===-1?Number.MAX_SAFE_INTEGER:e.options.pageCount-1;return a=Math.max(0,Math.min(a,o)),{...i,pageIndex:a}})},e.resetPageIndex=r=>{var i,a;e.setPageIndex(r?Si:(i=(a=e.initialState)==null||(a=a.pagination)==null?void 0:a.pageIndex)!=null?i:Si)},e.resetPageSize=r=>{var i,a;e.setPageSize(r?Ei:(i=(a=e.initialState)==null||(a=a.pagination)==null?void 0:a.pageSize)!=null?i:Ei)},e.setPageSize=r=>{e.setPagination(i=>{const a=Math.max(1,Jt(r,i.pageSize)),o=i.pageSize*i.pageIndex,u=Math.floor(o/a);return{...i,pageIndex:u,pageSize:a}})},e.setPageCount=r=>e.setPagination(i=>{var a;let o=Jt(r,(a=e.options.pageCount)!=null?a:-1);return typeof o=="number"&&(o=Math.max(-1,o)),{...i,pageCount:o}}),e.getPageOptions=K(()=>[e.getPageCount()],r=>{let i=[];return r&&r>0&&(i=[...new Array(r)].fill(null).map((a,o)=>o)),i},Y(e.options,"debugTable")),e.getCanPreviousPage=()=>e.getState().pagination.pageIndex>0,e.getCanNextPage=()=>{const{pageIndex:r}=e.getState().pagination,i=e.getPageCount();return i===-1?!0:i===0?!1:r<i-1},e.previousPage=()=>e.setPageIndex(r=>r-1),e.nextPage=()=>e.setPageIndex(r=>r+1),e.getPrePaginationRowModel=()=>e.getExpandedRowModel(),e.getPaginationRowModel=()=>(!e._getPaginationRowModel&&e.options.getPaginationRowModel&&(e._getPaginationRowModel=e.options.getPaginationRowModel(e)),e.options.manualPagination||!e._getPaginationRowModel?e.getPrePaginationRowModel():e._getPaginationRowModel()),e.getPageCount=()=>{var r;return(r=e.options.pageCount)!=null?r:Math.ceil(e.getPrePaginationRowModel().rows.length/e.getState().pagination.pageSize)}}},ri=()=>({left:[],right:[]}),ii=()=>({top:[],bottom:[]}),Pc={getInitialState:e=>({columnPinning:ri(),rowPinning:ii(),...e}),getDefaultOptions:e=>({onColumnPinningChange:tt("columnPinning",e),onRowPinningChange:tt("rowPinning",e)}),createColumn:(e,n)=>{e.pin=t=>{const r=e.getLeafColumns().map(i=>i.id).filter(Boolean);n.setColumnPinning(i=>{var a,o;if(t==="right"){var u,s;return{left:((u=i==null?void 0:i.left)!=null?u:[]).filter(g=>!(r!=null&&r.includes(g))),right:[...((s=i==null?void 0:i.right)!=null?s:[]).filter(g=>!(r!=null&&r.includes(g))),...r]}}if(t==="left"){var l,c;return{left:[...((l=i==null?void 0:i.left)!=null?l:[]).filter(g=>!(r!=null&&r.includes(g))),...r],right:((c=i==null?void 0:i.right)!=null?c:[]).filter(g=>!(r!=null&&r.includes(g)))}}return{left:((a=i==null?void 0:i.left)!=null?a:[]).filter(g=>!(r!=null&&r.includes(g))),right:((o=i==null?void 0:i.right)!=null?o:[]).filter(g=>!(r!=null&&r.includes(g)))}})},e.getCanPin=()=>e.getLeafColumns().some(r=>{var i,a,o;return((i=r.columnDef.enablePinning)!=null?i:!0)&&((a=(o=n.options.enableColumnPinning)!=null?o:n.options.enablePinning)!=null?a:!0)}),e.getIsPinned=()=>{const t=e.getLeafColumns().map(u=>u.id),{left:r,right:i}=n.getState().columnPinning,a=t.some(u=>r==null?void 0:r.includes(u)),o=t.some(u=>i==null?void 0:i.includes(u));return a?"left":o?"right":!1},e.getPinnedIndex=()=>{var t,r;const i=e.getIsPinned();return i?(t=(r=n.getState().columnPinning)==null||(r=r[i])==null?void 0:r.indexOf(e.id))!=null?t:-1:0}},createRow:(e,n)=>{e.pin=(t,r,i)=>{const a=r?e.getLeafRows().map(s=>{let{id:l}=s;return l}):[],o=i?e.getParentRows().map(s=>{let{id:l}=s;return l}):[],u=new Set([...o,e.id,...a]);n.setRowPinning(s=>{var l,c;if(t==="bottom"){var g,b;return{top:((g=s==null?void 0:s.top)!=null?g:[]).filter(C=>!(u!=null&&u.has(C))),bottom:[...((b=s==null?void 0:s.bottom)!=null?b:[]).filter(C=>!(u!=null&&u.has(C))),...Array.from(u)]}}if(t==="top"){var h,S;return{top:[...((h=s==null?void 0:s.top)!=null?h:[]).filter(C=>!(u!=null&&u.has(C))),...Array.from(u)],bottom:((S=s==null?void 0:s.bottom)!=null?S:[]).filter(C=>!(u!=null&&u.has(C)))}}return{top:((l=s==null?void 0:s.top)!=null?l:[]).filter(C=>!(u!=null&&u.has(C))),bottom:((c=s==null?void 0:s.bottom)!=null?c:[]).filter(C=>!(u!=null&&u.has(C)))}})},e.getCanPin=()=>{var t;const{enableRowPinning:r,enablePinning:i}=n.options;return typeof r=="function"?r(e):(t=r??i)!=null?t:!0},e.getIsPinned=()=>{const t=[e.id],{top:r,bottom:i}=n.getState().rowPinning,a=t.some(u=>r==null?void 0:r.includes(u)),o=t.some(u=>i==null?void 0:i.includes(u));return a?"top":o?"bottom":!1},e.getPinnedIndex=()=>{var t,r;const i=e.getIsPinned();if(!i)return-1;const a=(t=n._getPinnedRows(i))==null?void 0:t.map(o=>{let{id:u}=o;return u});return(r=a==null?void 0:a.indexOf(e.id))!=null?r:-1},e.getCenterVisibleCells=K(()=>[e._getAllVisibleCells(),n.getState().columnPinning.left,n.getState().columnPinning.right],(t,r,i)=>{const a=[...r??[],...i??[]];return t.filter(o=>!a.includes(o.column.id))},Y(n.options,"debugRows")),e.getLeftVisibleCells=K(()=>[e._getAllVisibleCells(),n.getState().columnPinning.left,,],(t,r)=>(r??[]).map(a=>t.find(o=>o.column.id===a)).filter(Boolean).map(a=>({...a,position:"left"})),Y(n.options,"debugRows")),e.getRightVisibleCells=K(()=>[e._getAllVisibleCells(),n.getState().columnPinning.right],(t,r)=>(r??[]).map(a=>t.find(o=>o.column.id===a)).filter(Boolean).map(a=>({...a,position:"right"})),Y(n.options,"debugRows"))},createTable:e=>{e.setColumnPinning=n=>e.options.onColumnPinningChange==null?void 0:e.options.onColumnPinningChange(n),e.resetColumnPinning=n=>{var t,r;return e.setColumnPinning(n?ri():(t=(r=e.initialState)==null?void 0:r.columnPinning)!=null?t:ri())},e.getIsSomeColumnsPinned=n=>{var t;const r=e.getState().columnPinning;if(!n){var i,a;return!!((i=r.left)!=null&&i.length||(a=r.right)!=null&&a.length)}return!!((t=r[n])!=null&&t.length)},e.getLeftLeafColumns=K(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left],(n,t)=>(t??[]).map(r=>n.find(i=>i.id===r)).filter(Boolean),Y(e.options,"debugColumns")),e.getRightLeafColumns=K(()=>[e.getAllLeafColumns(),e.getState().columnPinning.right],(n,t)=>(t??[]).map(r=>n.find(i=>i.id===r)).filter(Boolean),Y(e.options,"debugColumns")),e.getCenterLeafColumns=K(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(n,t,r)=>{const i=[...t??[],...r??[]];return n.filter(a=>!i.includes(a.id))},Y(e.options,"debugColumns")),e.setRowPinning=n=>e.options.onRowPinningChange==null?void 0:e.options.onRowPinningChange(n),e.resetRowPinning=n=>{var t,r;return e.setRowPinning(n?ii():(t=(r=e.initialState)==null?void 0:r.rowPinning)!=null?t:ii())},e.getIsSomeRowsPinned=n=>{var t;const r=e.getState().rowPinning;if(!n){var i,a;return!!((i=r.top)!=null&&i.length||(a=r.bottom)!=null&&a.length)}return!!((t=r[n])!=null&&t.length)},e._getPinnedRows=K(n=>[e.getRowModel().rows,e.getState().rowPinning[n],n],(n,t,r)=>{var i;return((i=e.options.keepPinnedRows)==null||i?(t??[]).map(o=>{const u=e.getRow(o,!0);return u.getIsAllParentsExpanded()?u:null}):(t??[]).map(o=>n.find(u=>u.id===o))).filter(Boolean).map(o=>({...o,position:r}))},Y(e.options,"debugRows")),e.getTopRows=()=>e._getPinnedRows("top"),e.getBottomRows=()=>e._getPinnedRows("bottom"),e.getCenterRows=K(()=>[e.getRowModel().rows,e.getState().rowPinning.top,e.getState().rowPinning.bottom],(n,t,r)=>{const i=new Set([...t??[],...r??[]]);return n.filter(a=>!i.has(a.id))},Y(e.options,"debugRows"))}},Bc={getInitialState:e=>({rowSelection:{},...e}),getDefaultOptions:e=>({onRowSelectionChange:tt("rowSelection",e),enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!0}),createTable:e=>{e.setRowSelection=n=>e.options.onRowSelectionChange==null?void 0:e.options.onRowSelectionChange(n),e.resetRowSelection=n=>{var t;return e.setRowSelection(n?{}:(t=e.initialState.rowSelection)!=null?t:{})},e.toggleAllRowsSelected=n=>{e.setRowSelection(t=>{n=typeof n<"u"?n:!e.getIsAllRowsSelected();const r={...t},i=e.getPreGroupedRowModel().flatRows;return n?i.forEach(a=>{a.getCanSelect()&&(r[a.id]=!0)}):i.forEach(a=>{delete r[a.id]}),r})},e.toggleAllPageRowsSelected=n=>e.setRowSelection(t=>{const r=typeof n<"u"?n:!e.getIsAllPageRowsSelected(),i={...t};return e.getRowModel().rows.forEach(a=>{wi(i,a.id,r,!0,e)}),i}),e.getPreSelectedRowModel=()=>e.getCoreRowModel(),e.getSelectedRowModel=K(()=>[e.getState().rowSelection,e.getCoreRowModel()],(n,t)=>Object.keys(n).length?ai(e,t):{rows:[],flatRows:[],rowsById:{}},Y(e.options,"debugTable")),e.getFilteredSelectedRowModel=K(()=>[e.getState().rowSelection,e.getFilteredRowModel()],(n,t)=>Object.keys(n).length?ai(e,t):{rows:[],flatRows:[],rowsById:{}},Y(e.options,"debugTable")),e.getGroupedSelectedRowModel=K(()=>[e.getState().rowSelection,e.getSortedRowModel()],(n,t)=>Object.keys(n).length?ai(e,t):{rows:[],flatRows:[],rowsById:{}},Y(e.options,"debugTable")),e.getIsAllRowsSelected=()=>{const n=e.getFilteredRowModel().flatRows,{rowSelection:t}=e.getState();let r=!!(n.length&&Object.keys(t).length);return r&&n.some(i=>i.getCanSelect()&&!t[i.id])&&(r=!1),r},e.getIsAllPageRowsSelected=()=>{const n=e.getPaginationRowModel().flatRows.filter(i=>i.getCanSelect()),{rowSelection:t}=e.getState();let r=!!n.length;return r&&n.some(i=>!t[i.id])&&(r=!1),r},e.getIsSomeRowsSelected=()=>{var n;const t=Object.keys((n=e.getState().rowSelection)!=null?n:{}).length;return t>0&&t<e.getFilteredRowModel().flatRows.length},e.getIsSomePageRowsSelected=()=>{const n=e.getPaginationRowModel().flatRows;return e.getIsAllPageRowsSelected()?!1:n.filter(t=>t.getCanSelect()).some(t=>t.getIsSelected()||t.getIsSomeSelected())},e.getToggleAllRowsSelectedHandler=()=>n=>{e.toggleAllRowsSelected(n.target.checked)},e.getToggleAllPageRowsSelectedHandler=()=>n=>{e.toggleAllPageRowsSelected(n.target.checked)}},createRow:(e,n)=>{e.toggleSelected=(t,r)=>{const i=e.getIsSelected();n.setRowSelection(a=>{var o;if(t=typeof t<"u"?t:!i,e.getCanSelect()&&i===t)return a;const u={...a};return wi(u,e.id,t,(o=r==null?void 0:r.selectChildren)!=null?o:!0,n),u})},e.getIsSelected=()=>{const{rowSelection:t}=n.getState();return ia(e,t)},e.getIsSomeSelected=()=>{const{rowSelection:t}=n.getState();return xi(e,t)==="some"},e.getIsAllSubRowsSelected=()=>{const{rowSelection:t}=n.getState();return xi(e,t)==="all"},e.getCanSelect=()=>{var t;return typeof n.options.enableRowSelection=="function"?n.options.enableRowSelection(e):(t=n.options.enableRowSelection)!=null?t:!0},e.getCanSelectSubRows=()=>{var t;return typeof n.options.enableSubRowSelection=="function"?n.options.enableSubRowSelection(e):(t=n.options.enableSubRowSelection)!=null?t:!0},e.getCanMultiSelect=()=>{var t;return typeof n.options.enableMultiRowSelection=="function"?n.options.enableMultiRowSelection(e):(t=n.options.enableMultiRowSelection)!=null?t:!0},e.getToggleSelectedHandler=()=>{const t=e.getCanSelect();return r=>{var i;t&&e.toggleSelected((i=r.target)==null?void 0:i.checked)}}}},wi=(e,n,t,r,i)=>{var a;const o=i.getRow(n,!0);t?(o.getCanMultiSelect()||Object.keys(e).forEach(u=>delete e[u]),o.getCanSelect()&&(e[n]=!0)):delete e[n],r&&(a=o.subRows)!=null&&a.length&&o.getCanSelectSubRows()&&o.subRows.forEach(u=>wi(e,u.id,t,r,i))};function ai(e,n){const t=e.getState().rowSelection,r=[],i={},a=function(o,u){return o.map(s=>{var l;const c=ia(s,t);if(c&&(r.push(s),i[s.id]=s),(l=s.subRows)!=null&&l.length&&(s={...s,subRows:a(s.subRows)}),c)return s}).filter(Boolean)};return{rows:a(n.rows),flatRows:r,rowsById:i}}function ia(e,n){var t;return(t=n[e.id])!=null?t:!1}function xi(e,n,t){var r;if(!((r=e.subRows)!=null&&r.length))return!1;let i=!0,a=!1;return e.subRows.forEach(o=>{if(!(a&&!i)&&(o.getCanSelect()&&(ia(o,n)?a=!0:i=!1),o.subRows&&o.subRows.length)){const u=xi(o,n);u==="all"?a=!0:(u==="some"&&(a=!0),i=!1)}}),i?"all":a?"some":!1}const _i=/([0-9]+)/gm,Vc=(e,n,t)=>nu(en(e.getValue(t)).toLowerCase(),en(n.getValue(t)).toLowerCase()),zc=(e,n,t)=>nu(en(e.getValue(t)),en(n.getValue(t))),$c=(e,n,t)=>aa(en(e.getValue(t)).toLowerCase(),en(n.getValue(t)).toLowerCase()),jc=(e,n,t)=>aa(en(e.getValue(t)),en(n.getValue(t))),Uc=(e,n,t)=>{const r=e.getValue(t),i=n.getValue(t);return r>i?1:r<i?-1:0},qc=(e,n,t)=>aa(e.getValue(t),n.getValue(t));function aa(e,n){return e===n?0:e>n?1:-1}function en(e){return typeof e=="number"?isNaN(e)||e===1/0||e===-1/0?"":String(e):typeof e=="string"?e:""}function nu(e,n){const t=e.split(_i).filter(Boolean),r=n.split(_i).filter(Boolean);for(;t.length&&r.length;){const i=t.shift(),a=r.shift(),o=parseInt(i,10),u=parseInt(a,10),s=[o,u].sort();if(isNaN(s[0])){if(i>a)return 1;if(a>i)return-1;continue}if(isNaN(s[1]))return isNaN(o)?-1:1;if(o>u)return 1;if(u>o)return-1}return t.length-r.length}const Tn={alphanumeric:Vc,alphanumericCaseSensitive:zc,text:$c,textCaseSensitive:jc,datetime:Uc,basic:qc},Wc={getInitialState:e=>({sorting:[],...e}),getDefaultColumnDef:()=>({sortingFn:"auto",sortUndefined:1}),getDefaultOptions:e=>({onSortingChange:tt("sorting",e),isMultiSortEvent:n=>n.shiftKey}),createColumn:(e,n)=>{e.getAutoSortingFn=()=>{const t=n.getFilteredRowModel().flatRows.slice(10);let r=!1;for(const i of t){const a=i==null?void 0:i.getValue(e.id);if(Object.prototype.toString.call(a)==="[object Date]")return Tn.datetime;if(typeof a=="string"&&(r=!0,a.split(_i).length>1))return Tn.alphanumeric}return r?Tn.text:Tn.basic},e.getAutoSortDir=()=>{const t=n.getFilteredRowModel().flatRows[0];return typeof(t==null?void 0:t.getValue(e.id))=="string"?"asc":"desc"},e.getSortingFn=()=>{var t,r;if(!e)throw new Error;return Or(e.columnDef.sortingFn)?e.columnDef.sortingFn:e.columnDef.sortingFn==="auto"?e.getAutoSortingFn():(t=(r=n.options.sortingFns)==null?void 0:r[e.columnDef.sortingFn])!=null?t:Tn[e.columnDef.sortingFn]},e.toggleSorting=(t,r)=>{const i=e.getNextSortingOrder(),a=typeof t<"u"&&t!==null;n.setSorting(o=>{const u=o==null?void 0:o.find(h=>h.id===e.id),s=o==null?void 0:o.findIndex(h=>h.id===e.id);let l=[],c,g=a?t:i==="desc";if(o!=null&&o.length&&e.getCanMultiSort()&&r?u?c="toggle":c="add":o!=null&&o.length&&s!==o.length-1?c="replace":u?c="toggle":c="replace",c==="toggle"&&(a||i||(c="remove")),c==="add"){var b;l=[...o,{id:e.id,desc:g}],l.splice(0,l.length-((b=n.options.maxMultiSortColCount)!=null?b:Number.MAX_SAFE_INTEGER))}else c==="toggle"?l=o.map(h=>h.id===e.id?{...h,desc:g}:h):c==="remove"?l=o.filter(h=>h.id!==e.id):l=[{id:e.id,desc:g}];return l})},e.getFirstSortDir=()=>{var t,r;return((t=(r=e.columnDef.sortDescFirst)!=null?r:n.options.sortDescFirst)!=null?t:e.getAutoSortDir()==="desc")?"desc":"asc"},e.getNextSortingOrder=t=>{var r,i;const a=e.getFirstSortDir(),o=e.getIsSorted();return o?o!==a&&((r=n.options.enableSortingRemoval)==null||r)&&(!(t&&(i=n.options.enableMultiRemove)!=null)||i)?!1:o==="desc"?"asc":"desc":a},e.getCanSort=()=>{var t,r;return((t=e.columnDef.enableSorting)!=null?t:!0)&&((r=n.options.enableSorting)!=null?r:!0)&&!!e.accessorFn},e.getCanMultiSort=()=>{var t,r;return(t=(r=e.columnDef.enableMultiSort)!=null?r:n.options.enableMultiSort)!=null?t:!!e.accessorFn},e.getIsSorted=()=>{var t;const r=(t=n.getState().sorting)==null?void 0:t.find(i=>i.id===e.id);return r?r.desc?"desc":"asc":!1},e.getSortIndex=()=>{var t,r;return(t=(r=n.getState().sorting)==null?void 0:r.findIndex(i=>i.id===e.id))!=null?t:-1},e.clearSorting=()=>{n.setSorting(t=>t!=null&&t.length?t.filter(r=>r.id!==e.id):[])},e.getToggleSortingHandler=()=>{const t=e.getCanSort();return r=>{t&&(r.persist==null||r.persist(),e.toggleSorting==null||e.toggleSorting(void 0,e.getCanMultiSort()?n.options.isMultiSortEvent==null?void 0:n.options.isMultiSortEvent(r):!1))}}},createTable:e=>{e.setSorting=n=>e.options.onSortingChange==null?void 0:e.options.onSortingChange(n),e.resetSorting=n=>{var t,r;e.setSorting(n?[]:(t=(r=e.initialState)==null?void 0:r.sorting)!=null?t:[])},e.getPreSortedRowModel=()=>e.getGroupedRowModel(),e.getSortedRowModel=()=>(!e._getSortedRowModel&&e.options.getSortedRowModel&&(e._getSortedRowModel=e.options.getSortedRowModel(e)),e.options.manualSorting||!e._getSortedRowModel?e.getPreSortedRowModel():e._getSortedRowModel())}},Xc={getInitialState:e=>({columnVisibility:{},...e}),getDefaultOptions:e=>({onColumnVisibilityChange:tt("columnVisibility",e)}),createColumn:(e,n)=>{e.toggleVisibility=t=>{e.getCanHide()&&n.setColumnVisibility(r=>({...r,[e.id]:t??!e.getIsVisible()}))},e.getIsVisible=()=>{var t,r;return(t=(r=n.getState().columnVisibility)==null?void 0:r[e.id])!=null?t:!0},e.getCanHide=()=>{var t,r;return((t=e.columnDef.enableHiding)!=null?t:!0)&&((r=n.options.enableHiding)!=null?r:!0)},e.getToggleVisibilityHandler=()=>t=>{e.toggleVisibility==null||e.toggleVisibility(t.target.checked)}},createRow:(e,n)=>{e._getAllVisibleCells=K(()=>[e.getAllCells(),n.getState().columnVisibility],t=>t.filter(r=>r.column.getIsVisible()),Y(n.options,"debugRows")),e.getVisibleCells=K(()=>[e.getLeftVisibleCells(),e.getCenterVisibleCells(),e.getRightVisibleCells()],(t,r,i)=>[...t,...r,...i],Y(n.options,"debugRows"))},createTable:e=>{const n=(t,r)=>K(()=>[r(),r().filter(i=>i.getIsVisible()).map(i=>i.id).join("_")],i=>i.filter(a=>a.getIsVisible==null?void 0:a.getIsVisible()),Y(e.options,"debugColumns"));e.getVisibleFlatColumns=n("getVisibleFlatColumns",()=>e.getAllFlatColumns()),e.getVisibleLeafColumns=n("getVisibleLeafColumns",()=>e.getAllLeafColumns()),e.getLeftVisibleLeafColumns=n("getLeftVisibleLeafColumns",()=>e.getLeftLeafColumns()),e.getRightVisibleLeafColumns=n("getRightVisibleLeafColumns",()=>e.getRightLeafColumns()),e.getCenterVisibleLeafColumns=n("getCenterVisibleLeafColumns",()=>e.getCenterLeafColumns()),e.setColumnVisibility=t=>e.options.onColumnVisibilityChange==null?void 0:e.options.onColumnVisibilityChange(t),e.resetColumnVisibility=t=>{var r;e.setColumnVisibility(t?{}:(r=e.initialState.columnVisibility)!=null?r:{})},e.toggleAllColumnsVisible=t=>{var r;t=(r=t)!=null?r:!e.getIsAllColumnsVisible(),e.setColumnVisibility(e.getAllLeafColumns().reduce((i,a)=>({...i,[a.id]:t||!(a.getCanHide!=null&&a.getCanHide())}),{}))},e.getIsAllColumnsVisible=()=>!e.getAllLeafColumns().some(t=>!(t.getIsVisible!=null&&t.getIsVisible())),e.getIsSomeColumnsVisible=()=>e.getAllLeafColumns().some(t=>t.getIsVisible==null?void 0:t.getIsVisible()),e.getToggleAllColumnsVisibilityHandler=()=>t=>{var r;e.toggleAllColumnsVisible((r=t.target)==null?void 0:r.checked)}}};function jn(e,n){return n?n==="center"?e.getCenterVisibleLeafColumns():n==="left"?e.getLeftVisibleLeafColumns():e.getRightVisibleLeafColumns():e.getVisibleLeafColumns()}const La=[yc,Xc,Ic,Pc,xc,Wc,Hc,wc,Mc,Bc,Sc];function Kc(e){var n;(e.debugAll||e.debugTable)&&console.info("Creating Table Instance...");let t={_features:La};const r=t._features.reduce((c,g)=>Object.assign(c,g.getDefaultOptions==null?void 0:g.getDefaultOptions(t)),{}),i=c=>t.options.mergeOptions?t.options.mergeOptions(r,c):{...r,...c};let o={...{},...(n=e.initialState)!=null?n:{}};t._features.forEach(c=>{var g;o=(g=c.getInitialState==null?void 0:c.getInitialState(o))!=null?g:o});const u=[];let s=!1;const l={_features:La,options:{...r,...e},initialState:o,_queue:c=>{u.push(c),s||(s=!0,Promise.resolve().then(()=>{for(;u.length;)u.shift()();s=!1}).catch(g=>setTimeout(()=>{throw g})))},reset:()=>{t.setState(t.initialState)},setOptions:c=>{const g=Jt(c,t.options);t.options=i(g)},getState:()=>t.options.state,setState:c=>{t.options.onStateChange==null||t.options.onStateChange(c)},_getRowId:(c,g,b)=>{var h;return(h=t.options.getRowId==null?void 0:t.options.getRowId(c,g,b))!=null?h:`${b?[b.id,g].join("."):g}`},getCoreRowModel:()=>(t._getCoreRowModel||(t._getCoreRowModel=t.options.getCoreRowModel(t)),t._getCoreRowModel()),getRowModel:()=>t.getPaginationRowModel(),getRow:(c,g)=>{let b=(g?t.getPrePaginationRowModel():t.getRowModel()).rowsById[c];if(!b&&(b=t.getCoreRowModel().rowsById[c],!b))throw new Error;return b},_getDefaultColumnDef:K(()=>[t.options.defaultColumn],c=>{var g;return c=(g=c)!=null?g:{},{header:b=>{const h=b.header.column.columnDef;return h.accessorKey?h.accessorKey:h.accessorFn?h.id:null},cell:b=>{var h,S;return(h=(S=b.renderValue())==null||S.toString==null?void 0:S.toString())!=null?h:null},...t._features.reduce((b,h)=>Object.assign(b,h.getDefaultColumnDef==null?void 0:h.getDefaultColumnDef()),{}),...c}},Y(e,"debugColumns")),_getColumnDefs:()=>t.options.columns,getAllColumns:K(()=>[t._getColumnDefs()],c=>{const g=function(b,h,S){return S===void 0&&(S=0),b.map(C=>{const E=Cc(t,C,S,h),w=C;return E.columns=w.columns?g(w.columns,E,S+1):[],E})};return g(c)},Y(e,"debugColumns")),getAllFlatColumns:K(()=>[t.getAllColumns()],c=>c.flatMap(g=>g.getFlatColumns()),Y(e,"debugColumns")),_getAllFlatColumnsById:K(()=>[t.getAllFlatColumns()],c=>c.reduce((g,b)=>(g[b.id]=b,g),{}),Y(e,"debugColumns")),getAllLeafColumns:K(()=>[t.getAllColumns(),t._getOrderColumnsFn()],(c,g)=>{let b=c.flatMap(h=>h.getLeafColumns());return g(b)},Y(e,"debugColumns")),getColumn:c=>t._getAllFlatColumnsById()[c]};Object.assign(t,l);for(let c=0;c<t._features.length;c++){const g=t._features[c];g==null||g.createTable==null||g.createTable(t)}return t}function Yc(e,n,t,r){const i=()=>{var o;return(o=a.getValue())!=null?o:e.options.renderFallbackValue},a={id:`${n.id}_${t.id}`,row:n,column:t,getValue:()=>n.getValue(r),renderValue:i,getContext:K(()=>[e,t,n,a],(o,u,s,l)=>({table:o,column:u,row:s,cell:l,getValue:l.getValue,renderValue:l.renderValue}),Y(e.options,"debugCells"))};return e._features.forEach(o=>{o.createCell==null||o.createCell(a,t,n,e)},{}),a}const oa=(e,n,t,r,i,a,o)=>{let u={id:n,index:r,original:t,depth:i,parentId:o,_valuesCache:{},_uniqueValuesCache:{},getValue:s=>{if(u._valuesCache.hasOwnProperty(s))return u._valuesCache[s];const l=e.getColumn(s);if(l!=null&&l.accessorFn)return u._valuesCache[s]=l.accessorFn(u.original,r),u._valuesCache[s]},getUniqueValues:s=>{if(u._uniqueValuesCache.hasOwnProperty(s))return u._uniqueValuesCache[s];const l=e.getColumn(s);if(l!=null&&l.accessorFn)return l.columnDef.getUniqueValues?(u._uniqueValuesCache[s]=l.columnDef.getUniqueValues(u.original,r),u._uniqueValuesCache[s]):(u._uniqueValuesCache[s]=[u.getValue(s)],u._uniqueValuesCache[s])},renderValue:s=>{var l;return(l=u.getValue(s))!=null?l:e.options.renderFallbackValue},subRows:[],getLeafRows:()=>vc(u.subRows,s=>s.subRows),getParentRow:()=>u.parentId?e.getRow(u.parentId,!0):void 0,getParentRows:()=>{let s=[],l=u;for(;;){const c=l.getParentRow();if(!c)break;s.push(c),l=c}return s.reverse()},getAllCells:K(()=>[e.getAllLeafColumns()],s=>s.map(l=>Yc(e,u,l,l.id)),Y(e.options,"debugRows")),_getAllCellsByColumnId:K(()=>[u.getAllCells()],s=>s.reduce((l,c)=>(l[c.column.id]=c,l),{}),Y(e.options,"debugRows"))};for(let s=0;s<e._features.length;s++){const l=e._features[s];l==null||l.createRow==null||l.createRow(u,e)}return u};function ru(){return e=>K(()=>[e.options.data],n=>{const t={rows:[],flatRows:[],rowsById:{}},r=function(i,a,o){a===void 0&&(a=0);const u=[];for(let l=0;l<i.length;l++){const c=oa(e,e._getRowId(i[l],l,o),i[l],l,a,void 0,o==null?void 0:o.id);if(t.flatRows.push(c),t.rowsById[c.id]=c,u.push(c),e.options.getSubRows){var s;c.originalSubRows=e.options.getSubRows(i[l],l),(s=c.originalSubRows)!=null&&s.length&&(c.subRows=r(c.originalSubRows,a+1,c))}}return u};return t.rows=r(n),t},Y(e.options,"debugTable","getRowModel",()=>e._autoResetPageIndex()))}function Jc(e,n,t){return t.options.filterFromLeafRows?Zc(e,n,t):Qc(e,n,t)}function Zc(e,n,t){var r;const i=[],a={},o=(r=t.options.maxLeafRowFilterDepth)!=null?r:100,u=function(s,l){l===void 0&&(l=0);const c=[];for(let b=0;b<s.length;b++){var g;let h=s[b];const S=oa(t,h.id,h.original,h.index,h.depth,void 0,h.parentId);if(S.columnFilters=h.columnFilters,(g=h.subRows)!=null&&g.length&&l<o){if(S.subRows=u(h.subRows,l+1),h=S,n(h)&&!S.subRows.length){c.push(h),a[h.id]=h,i.push(h);continue}if(n(h)||S.subRows.length){c.push(h),a[h.id]=h,i.push(h);continue}}else h=S,n(h)&&(c.push(h),a[h.id]=h,i.push(h))}return c};return{rows:u(e),flatRows:i,rowsById:a}}function Qc(e,n,t){var r;const i=[],a={},o=(r=t.options.maxLeafRowFilterDepth)!=null?r:100,u=function(s,l){l===void 0&&(l=0);const c=[];for(let b=0;b<s.length;b++){let h=s[b];if(n(h)){var g;if((g=h.subRows)!=null&&g.length&&l<o){const C=oa(t,h.id,h.original,h.index,h.depth,void 0,h.parentId);C.subRows=u(h.subRows,l+1),h=C}c.push(h),i.push(h),a[h.id]=h}}return c};return{rows:u(e),flatRows:i,rowsById:a}}function e0(){return e=>K(()=>[e.getPreFilteredRowModel(),e.getState().columnFilters,e.getState().globalFilter],(n,t,r)=>{if(!n.rows.length||!(t!=null&&t.length)&&!r){for(let b=0;b<n.flatRows.length;b++)n.flatRows[b].columnFilters={},n.flatRows[b].columnFiltersMeta={};return n}const i=[],a=[];(t??[]).forEach(b=>{var h;const S=e.getColumn(b.id);if(!S)return;const C=S.getFilterFn();C&&i.push({id:b.id,filterFn:C,resolvedValue:(h=C.resolveFilterValue==null?void 0:C.resolveFilterValue(b.value))!=null?h:b.value})});const o=t.map(b=>b.id),u=e.getGlobalFilterFn(),s=e.getAllLeafColumns().filter(b=>b.getCanGlobalFilter());r&&u&&s.length&&(o.push("__global__"),s.forEach(b=>{var h;a.push({id:b.id,filterFn:u,resolvedValue:(h=u.resolveFilterValue==null?void 0:u.resolveFilterValue(r))!=null?h:r})}));let l,c;for(let b=0;b<n.flatRows.length;b++){const h=n.flatRows[b];if(h.columnFilters={},i.length)for(let S=0;S<i.length;S++){l=i[S];const C=l.id;h.columnFilters[C]=l.filterFn(h,C,l.resolvedValue,E=>{h.columnFiltersMeta[C]=E})}if(a.length){for(let S=0;S<a.length;S++){c=a[S];const C=c.id;if(c.filterFn(h,C,c.resolvedValue,E=>{h.columnFiltersMeta[C]=E})){h.columnFilters.__global__=!0;break}}h.columnFilters.__global__!==!0&&(h.columnFilters.__global__=!1)}}const g=b=>{for(let h=0;h<o.length;h++)if(b.columnFilters[o[h]]===!1)return!1;return!0};return Jc(n.rows,g,e)},Y(e.options,"debugTable","getFilteredRowModel",()=>e._autoResetPageIndex()))}function t0(){return e=>K(()=>[e.getState().sorting,e.getPreSortedRowModel()],(n,t)=>{if(!t.rows.length||!(n!=null&&n.length))return t;const r=e.getState().sorting,i=[],a=r.filter(s=>{var l;return(l=e.getColumn(s.id))==null?void 0:l.getCanSort()}),o={};a.forEach(s=>{const l=e.getColumn(s.id);l&&(o[s.id]={sortUndefined:l.columnDef.sortUndefined,invertSorting:l.columnDef.invertSorting,sortingFn:l.getSortingFn()})});const u=s=>{const l=s.map(c=>({...c}));return l.sort((c,g)=>{for(let h=0;h<a.length;h+=1){var b;const S=a[h],C=o[S.id],E=(b=S==null?void 0:S.desc)!=null?b:!1;let w=0;if(C.sortUndefined){const D=c.getValue(S.id),N=g.getValue(S.id),V=D===void 0,L=N===void 0;(V||L)&&(w=V&&L?0:V?C.sortUndefined:-C.sortUndefined)}if(w===0&&(w=C.sortingFn(c,g,S.id)),w!==0)return E&&(w*=-1),C.invertSorting&&(w*=-1),w}return c.index-g.index}),l.forEach(c=>{var g;i.push(c),(g=c.subRows)!=null&&g.length&&(c.subRows=u(c.subRows))}),l};return{rows:u(t.rows),flatRows:i,rowsById:t.rowsById}},Y(e.options,"debugTable","getSortedRowModel",()=>e._autoResetPageIndex()))}function n0(){return e=>K(()=>[e.getState().expanded,e.getPreExpandedRowModel(),e.options.paginateExpandedRows],(n,t,r)=>!t.rows.length||n!==!0&&!Object.keys(n??{}).length||!r?t:iu(t),Y(e.options,"debugTable"))}function iu(e){const n=[],t=r=>{var i;n.push(r),(i=r.subRows)!=null&&i.length&&r.getIsExpanded()&&r.subRows.forEach(t)};return e.rows.forEach(t),{rows:n,flatRows:e.flatRows,rowsById:e.rowsById}}function r0(e){return n=>K(()=>[n.getState().pagination,n.getPrePaginationRowModel(),n.options.paginateExpandedRows?void 0:n.getState().expanded],(t,r)=>{if(!r.rows.length)return r;const{pageSize:i,pageIndex:a}=t;let{rows:o,flatRows:u,rowsById:s}=r;const l=i*a,c=l+i;o=o.slice(l,c);let g;n.options.paginateExpandedRows?g={rows:o,flatRows:u,rowsById:s}:g=iu({rows:o,flatRows:u,rowsById:s}),g.flatRows=[];const b=h=>{g.flatRows.push(h),h.subRows.length&&h.subRows.forEach(b)};return g.rows.forEach(b),g},Y(n.options,"debugTable"))}/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function Ai(e,n){return e?i0(e)?y.createElement(e,n):e:null}function i0(e){return a0(e)||typeof e=="function"||o0(e)}function a0(e){return typeof e=="function"&&(()=>{const n=Object.getPrototypeOf(e);return n.prototype&&n.prototype.isReactComponent})()}function o0(e){return typeof e=="object"&&typeof e.$$typeof=="symbol"&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}function au(e){const n={state:{},onStateChange:()=>{},renderFallbackValue:null,...e},[t]=y.useState(()=>({current:Kc(n)})),[r,i]=y.useState(()=>t.current.initialState);return t.current.setOptions(a=>({...a,...e,state:{...r,...e.state},onStateChange:o=>{i(o),e.onStateChange==null||e.onStateChange(o)}})),t.current}const Vt={Left:"left",Right:"right"},Re={headerSortIndicator:"table__header__sort-indicator",headerRow:"table__header-row",headerCell:"table__header-cell",bodyRow:"table__body-row",bodyCell:"table__body-cell",pinnedCells:"table__pinned-cells",rowSelect:"table__row-select",tree:{node:"tree__node",chevron:"tree__chevron",checkbox:"tree__checkbox",radio:"tree__radio"},rowActions:{droplistTrigger:"table__body-row__droplistTrigger",droplist:"table__body-row__actions-droplist"},statusIndicator:"table__status-indicator",statusLabel:"table__status-label",toolbar:"table__toolbar"},Gr=10,u0=[],s0=[],l0={};var ur=(e=>(e.Status="snack_predefined_statusColumn",e.Selection="selectionCell",e.RowActions="rowActions",e))(ur||{});const c0=["snack_predefined_statusColumn","selectionCell","rowActions"],ou=y.createContext({updateCellMap:()=>{}}),d0=e=>{const[n,t]=y.useState({}),r=y.useCallback(({columnId:a,size:o,cellId:u})=>{t(s=>({...s,[a]:{...s[a],[u]:o}}))},[]),i=y.useMemo(()=>Object.entries(n).reduce((a,[o,u])=>{const s=Math.max(...Object.values(u));return{...a,[o]:s}},{}),[n]);return y.useEffect(()=>{e.setColumnSizing(a=>({...a,...i}))},[i,e]),{updateCellMap:r}},h0=10,g0=(e,n)=>{const{updateCellMap:t}=y.useContext(ou),r=y.useRef(null);return y.useEffect(()=>{var i;return t({columnId:e,size:(((i=r.current)==null?void 0:i.clientWidth)||0)+h0,cellId:n.id}),()=>{t({columnId:e,size:0,cellId:n.id})}},[e,n,t]),{ref:r}};function ua(e,n,t){const r=e.slice();return r.splice(t<0?r.length+t:t,0,r.splice(n,1)[0]),r}function f0(e,n){return e.reduce((t,r,i)=>{const a=n.get(r);return a&&(t[i]=a),t},Array(e.length))}function fr(e){return e!==null&&e>=0}function p0(e,n){if(e===n)return!0;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function m0(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const pr={scaleX:1,scaleY:1},uu=e=>{var n;let{rects:t,activeNodeRect:r,activeIndex:i,overIndex:a,index:o}=e;const u=(n=t[i])!=null?n:r;if(!u)return null;const s=b0(t,o,i);if(o===i){const l=t[a];return l?{x:i<a?l.left+l.width-(u.left+u.width):l.left-u.left,y:0,...pr}:null}return o>i&&o<=a?{x:-u.width-s,y:0,...pr}:o<i&&o>=a?{x:u.width+s,y:0,...pr}:{x:0,y:0,...pr}};function b0(e,n,t){const r=e[n],i=e[n-1],a=e[n+1];return!r||!i&&!a?0:t<n?i?r.left-(i.left+i.width):a.left-(r.left+r.width):a?a.left-(r.left+r.width):r.left-(i.left+i.width)}const su=e=>{let{rects:n,activeIndex:t,overIndex:r,index:i}=e;const a=ua(n,r,t),o=n[i],u=a[i];return!u||!o?null:{x:u.left-o.left,y:u.top-o.top,scaleX:u.width/o.width,scaleY:u.height/o.height}},lu="Sortable",cu=Ue.createContext({activeIndex:-1,containerId:lu,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:su,disabled:{draggable:!1,droppable:!1}});function du(e){let{children:n,id:t,items:r,strategy:i=su,disabled:a=!1}=e;const{active:o,dragOverlay:u,droppableRects:s,over:l,measureDroppableContainers:c}=fc(),g=or(lu,t),b=u.rect!==null,h=y.useMemo(()=>r.map(q=>typeof q=="object"&&"id"in q?q.id:q),[r]),S=o!=null,C=o?h.indexOf(o.id):-1,E=l?h.indexOf(l.id):-1,w=y.useRef(h),D=!p0(h,w.current),N=E!==-1&&C===-1||D,V=m0(a);Nt(()=>{D&&S&&c(h)},[D,h,S,c]),y.useEffect(()=>{w.current=h},[h]);const L=y.useMemo(()=>({activeIndex:C,containerId:g,disabled:V,disableTransforms:N,items:h,overIndex:E,useDragOverlay:b,sortedRects:f0(h,s),strategy:i}),[C,g,V.draggable,V.droppable,N,h,E,s,b,i]);return Ue.createElement(cu.Provider,{value:L},n)}const k0=e=>{let{id:n,items:t,activeIndex:r,overIndex:i}=e;return ua(t,r,i).indexOf(n)},v0=e=>{let{containerId:n,isSorting:t,wasDragging:r,index:i,items:a,newIndex:o,previousItems:u,previousContainerId:s,transition:l}=e;return!l||!r||u!==a&&i===o?!1:t?!0:o!==i&&n===s},C0={duration:200,easing:"ease"},hu="transform",y0=Jn.Transition.toString({property:hu,duration:0,easing:"linear"}),S0={roleDescription:"sortable"};function E0(e){let{disabled:n,index:t,node:r,rect:i}=e;const[a,o]=y.useState(null),u=y.useRef(t);return Nt(()=>{if(!n&&t!==u.current&&r.current){const s=i.current;if(s){const l=Rn(r.current,{ignoreTransform:!0}),c={x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height};(c.x||c.y)&&o(c)}}t!==u.current&&(u.current=t)},[n,t,r,i]),y.useEffect(()=>{a&&o(null)},[a]),a}function sa(e){let{animateLayoutChanges:n=v0,attributes:t,disabled:r,data:i,getNewIndex:a=k0,id:o,strategy:u,resizeObserverConfig:s,transition:l=C0}=e;const{items:c,containerId:g,activeIndex:b,disabled:h,disableTransforms:S,sortedRects:C,overIndex:E,useDragOverlay:w,strategy:D}=y.useContext(cu),N=w0(r,h),V=c.indexOf(o),L=y.useMemo(()=>({sortable:{containerId:g,index:V,items:c},...i}),[g,i,V,c]),q=y.useMemo(()=>c.slice(c.indexOf(o)),[c,o]),{rect:G,node:P,isOver:H,setNodeRef:j}=bc({id:o,data:L,disabled:N.droppable,resizeObserverConfig:{updateMeasurementsFor:q,...s}}),{active:M,activatorEvent:X,activeNodeRect:Z,attributes:re,setNodeRef:ke,listeners:se,isDragging:ie,over:At,setActivatorNodeRef:ye,transform:pt}=gc({id:o,data:L,attributes:{...S0,...t},disabled:N.draggable}),nt=Xs(j,ke),ae=!!M,de=ae&&!S&&fr(b)&&fr(E),Me=!w&&ie,Pe=Me&&de?pt:null,mt=de?Pe??(u??D)({rects:C,activeNodeRect:Z,activeIndex:b,overIndex:E,index:V}):null,Ke=fr(b)&&fr(E)?a({id:o,items:c,activeIndex:b,overIndex:E}):V,ee=M==null?void 0:M.id,Q=y.useRef({activeId:ee,items:c,newIndex:Ke,containerId:g}),Be=c!==Q.current.items,Ve=n({active:M,containerId:g,isDragging:ie,isSorting:ae,id:o,index:V,items:c,newIndex:Q.current.newIndex,previousItems:Q.current.items,previousContainerId:Q.current.containerId,transition:l,wasDragging:Q.current.activeId!=null}),Ot=E0({disabled:!Ve,index:V,node:P,rect:G});return y.useEffect(()=>{ae&&Q.current.newIndex!==Ke&&(Q.current.newIndex=Ke),g!==Q.current.containerId&&(Q.current.containerId=g),c!==Q.current.items&&(Q.current.items=c)},[ae,Ke,g,c]),y.useEffect(()=>{if(ee===Q.current.activeId)return;if(ee!=null&&Q.current.activeId==null){Q.current.activeId=ee;return}const rt=setTimeout(()=>{Q.current.activeId=ee},50);return()=>clearTimeout(rt)},[ee]),{active:M,activeIndex:b,attributes:re,data:L,rect:G,index:V,newIndex:Ke,items:c,isOver:H,isSorting:ae,isDragging:ie,listeners:se,node:P,overIndex:E,over:At,setNodeRef:nt,setActivatorNodeRef:ye,setDroppableNodeRef:j,setDraggableNodeRef:ke,transform:Ot??mt,transition:He()};function He(){if(Ot||Be&&Q.current.newIndex===V)return y0;if(!(Me&&!Zi(X)||!l)&&(ae||Ve))return Jn.Transition.toString({...l,property:hu})}}function w0(e,n){var t,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(t=e==null?void 0:e.draggable)!=null?t:n.draggable,droppable:(r=e==null?void 0:e.droppable)!=null?r:n.droppable}}ne.Down,ne.Right,ne.Up,ne.Left;const gu=y.createContext({dropListOpened:!1,setDropListOpen(){}}),x0=()=>y.useContext(gu),fu=y.createContext({table:{}}),pu=()=>y.useContext(fu);function Ha(e){return e.some(n=>n.headers.length)}function _0(){const{table:e}=pu(),n=e._getColumnDefs(),t=e.getIsSomeColumnsPinned(),{columnOrder:r}=e.getState();return y.useMemo(()=>{if(!t)return{unpinned:e.getHeaderGroups()};const i=e.getLeftHeaderGroups(),a=e.getRightHeaderGroups();return{leftPinned:Ha(i)?i:void 0,rightPinned:Ha(a)?a:void 0,unpinned:e.getCenterHeaderGroups()}},[e,t,n,r])}function A0(e){const{table:n}=pu(),t=n.getIsSomeColumnsPinned(),r=n._getColumnDefs(),{columnOrder:i}=n.getState();return y.useMemo(()=>{if(!t)return{unpinned:e.getVisibleCells()};const a=e.getLeftVisibleCells(),o=e.getRightVisibleCells();return{leftPinned:a.length?a:void 0,rightPinned:o.length?o:void 0,unpinned:e.getCenterVisibleCells()}},[e,t,r,i])}function mu(e,n){const t=e.column,{isDragging:r,transform:i}=sa({id:t.id}),a=t.columnDef.minSize,o=t.columnDef.maxSize,u=`var(--table-column-${t.id}-size)`,s=`var(--table-column-${t.id}-flex)`,l="headerGroup"in e;return y.useMemo(()=>{const c={minWidth:a,width:u,maxWidth:o,flexShrink:s};return n!=null&&n.isDraggable&&(c.opacity=r?.8:1,c.position="relative",c.transform=Jn.Translate.toString(i),c.transition="width transform 0.2s ease-in-out",c.zIndex=r?1:void 0,l&&(c.whiteSpace="nowrap")),c},[n==null?void 0:n.isDraggable,s,r,l,o,a,i,u])}const O0="_tableCell_joxhi_1",G0={tableCell:O0},Fr=y.forwardRef(({onClick:e,onMouseUp:n,className:t,style:r,children:i,role:a="cell",...o},u)=>R.jsx("div",{role:a,onClick:e,onMouseUp:n,className:gn(G0.tableCell,t),style:r,ref:u,...o,children:i}));try{Fr.displayName="Cell",Fr.__docgenInfo={description:"",displayName:"Cell",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},role:{defaultValue:{value:"cell"},description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"cell"'},{value:'"columnheader"'}]}}}}}catch{}const F0="_tableBodyCell_bg2ik_1",D0={tableBodyCell:F0};function Un({cell:e,className:n,rowAutoHeight:t,isDraggable:r,...i}){const a=e.column.columnDef,o=mu(e,{isDraggable:r}),{setNodeRef:u}=sa({id:e.column.id});return R.jsx(Fr,{...i,ref:r?u:void 0,style:o,className:gn(D0.tableBodyCell,n,a.cellClassName),"data-row-auto-height":t||void 0,"data-align":a.align,"data-no-padding":a.noBodyCellPadding||void 0,"data-column-id":e.column.id,"data-test-id":Re.bodyCell,children:Ai(a.cell,e.getContext())})}try{Un.displayName="BodyCell",Un.__docgenInfo={description:"",displayName:"BodyCell",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"cell"'},{value:'"columnheader"'}]}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"Cell<TData, unknown>"}},rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},isDraggable:{defaultValue:null,description:"",name:"isDraggable",required:!1,type:{name:"boolean"}}}}}catch{}const N0="_rowActionsCell_1fcgm_1",R0="_rowActionsCellWrap_1fcgm_20",bu={rowActionsCell:N0,rowActionsCellWrap:R0};function L0({row:e,actions:n}){const{dropListOpened:t,setDropListOpen:r}=x0(),i=y.useCallback((s,l)=>Ts(s)?{...s,onClick(c){var g;(g=s.onClick)==null||g.call(s,c),l(c)}}:{...s,items:s.items.map(c=>i(c,l))},[]),a=!e.getCanSelect(),o=s=>{s.stopPropagation()},u=y.useMemo(()=>n.map(s=>i(s,()=>r(!1))),[n,i,r]);return R.jsx("div",{onClick:o,className:bu.rowActionsCellWrap,"data-open":t||void 0,children:!a&&!!n.length&&R.jsx(Xi,{trigger:"click",open:t,onOpenChange:r,placement:"bottom-end",size:"m","data-test-id":Re.rowActions.droplist,items:u,children:R.jsx(nr,{icon:R.jsx(Hs,{size:24}),"data-test-id":Re.rowActions.droplistTrigger})})})}function Oi({actionsGenerator:e,pinned:n}){return{id:ur.RowActions,pinned:n?Vt.Right:void 0,size:40,meta:{skipOnExport:!0},noBodyCellPadding:!0,cellClassName:bu.rowActionsCell,enableResizing:!1,cell:t=>R.jsx(L0,{row:t.row,actions:e(t)})}}try{Oi.displayName="getRowActionsColumnDef",Oi.__docgenInfo={description:"Вспомогательная функция для создания ячейки с дополнительными действиями у строки",displayName:"getRowActionsColumnDef",props:{actionsGenerator:{defaultValue:null,description:"Действия для строки",name:"actionsGenerator",required:!0,type:{name:"ActionsGenerator<TData>"}},pinned:{defaultValue:null,description:"Закрепление колонки справа в таблице",name:"pinned",required:!1,type:{name:"boolean"}}}}}catch{}function Gi(e){switch(e){case"asc":return R.jsx(Fs,{size:16});case"desc":return R.jsx(Gs,{size:16});default:return null}}const Fi=e=>{e.stopPropagation()};try{Gi.displayName="getSortingIcon",Gi.__docgenInfo={description:"",displayName:"getSortingIcon",props:{}}}catch{}try{Fi.displayName="stopEventPropagation",Fi.__docgenInfo={description:"",displayName:"stopEventPropagation",props:{}}}catch{}const H0="_tableHeaderResizeHandle_3b69r_1",T0="_tableHeaderResizeIndicator_3b69r_27",I0="_tableHeaderCell_3b69r_49",M0="_tableHeaderCellDragWrapper_3b69r_114",P0="_tableHeaderCellMain_3b69r_121",B0="_tableHeaderCellName_3b69r_132",V0="_tableHeaderIcon_3b69r_143",Yt={tableHeaderResizeHandle:H0,tableHeaderResizeIndicator:T0,tableHeaderCell:I0,tableHeaderCellDragWrapper:M0,tableHeaderCellMain:P0,tableHeaderCellName:B0,tableHeaderIcon:V0};function z0({header:e,cellRef:n}){var s;const t=e.getContext().table.getState().columnSizingInfo,{minSize:r,maxSize:i}=e.column.columnDef,{startSize:a,deltaOffset:o}=t;let u=0;if(a!==null&&o!==null){const l=((s=n.current)==null?void 0:s.offsetWidth)||0,c=Math.max(a,l),g=o<0?r:i;let b=0;g!==void 0&&o!==0&&(b=o<0?-(c-g):g-c,u=o<0?Math.max(o,b):Math.min(Math.abs(o),b))}return u}function Di({header:e,cellRef:n}){const t=e.column.getIsResizing(),r=e.getResizeHandler(),i=o=>{if(o.detail===2){e.column.resetSize();return}r(o)},a=t?z0({header:e,cellRef:n}):0;return R.jsxs(R.Fragment,{children:[R.jsx("div",{role:"button",tabIndex:0,className:gn(Yt.tableHeaderIcon,Yt.tableHeaderResizeHandle),"data-resizing":t||void 0,onMouseDown:i,onTouchStart:r,onMouseUp:Fi}),t&&R.jsx("div",{"data-test-id":"table__header-cell-resize-handle-moving-part",className:Yt.tableHeaderResizeIndicator,style:{"--offset":`${a}px`}})]})}try{Di.displayName="ResizeHandle",Di.__docgenInfo={description:"",displayName:"ResizeHandle",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"Header<TData, unknown>"}},cellRef:{defaultValue:null,description:"",name:"cellRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}}}}}catch{}function qn({header:e,pinPosition:n,className:t,rowAutoHeight:r,isDraggable:i}){const a=y.useRef(null),o=e.column.getCanSort(),u=e.column.getCanResize(),s=u&&e.column.getIsResizing(),l=o&&(e.column.getIsSorted()||void 0),c=Gi(l),b=e.getContext().table.getState().columnSizingInfo.isResizingColumn,h=e.column.columnDef,S=mu(e,{isDraggable:i}),{attributes:C,listeners:E,setNodeRef:w,isDragging:D}=sa({id:e.column.id}),N=L=>{var q;if(!b)return(q=e.column.getToggleSortingHandler())==null?void 0:q(L)},V=y.useMemo(()=>!i||c0.includes(e.column.id)?{}:{...C,...E},[C,e.column.id,i,E]);return R.jsxs(Fr,{style:S,onClick:N,"data-sortable":o||void 0,"data-draggable":i||void 0,"data-no-padding":h.noHeaderCellPadding||void 0,"data-no-offset":h.noHeaderCellBorderOffset||void 0,"data-test-id":Re.headerCell,"data-header-id":e.id,"data-resizing":s||void 0,"data-pin-position":n||void 0,"data-row-auto-height":r||void 0,role:"columnheader",className:gn(Yt.tableHeaderCell,t,h.headerClassName),ref:L=>(i&&w(L),a),children:[R.jsx("div",{className:Yt.tableHeaderCellDragWrapper,"data-dragging":i&&D||void 0,...V,children:R.jsxs("div",{className:Yt.tableHeaderCellMain,"data-align":h.headerAlign||void 0,children:[h.header&&R.jsx("div",{className:Yt.tableHeaderCellName,children:r?Ai(h.header,e.getContext()):R.jsx(tr,{text:Ai(h.header,e.getContext())})}),!!c&&R.jsx("div",{className:Yt.tableHeaderIcon,"data-sort-direction":l,"data-test-id":Re.headerSortIndicator,children:c})]})}),!!u&&R.jsx(Di,{header:e,cellRef:a})]})}try{qn.displayName="HeaderCell",qn.__docgenInfo={description:"",displayName:"HeaderCell",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"cell"'},{value:'"columnheader"'}]}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"Header<TData, unknown>"}},pinPosition:{defaultValue:null,description:"",name:"pinPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},isDraggable:{defaultValue:null,description:"",name:"isDraggable",required:!1,type:{name:"boolean"}}}}}catch{}const $0="_selectionCell_zxen9_1",j0="_selectionCellHeader_zxen9_11",Ta={selectionCell:$0,selectionCellHeader:j0};function U0(e,n,t){const r=[],i={[n]:!1,[t]:!1},a=[n,t];for(const o of e){if(a.includes(o.id)){if(t===""){r.push(o);break}i[o.id]=!0}if((i[n]||i[t])&&!o.getIsGrouped()&&r.push(o),i[n]&&i[t])break}return r}function Ni(e){let n="";return{id:ur.Selection,pinned:Vt.Left,noBodyCellPadding:!0,size:40,headerClassName:Ta.selectionCellHeader,enableResizing:!1,cell:({row:t,table:r})=>{if(!t.getCanSelect()||!e&&t.getIsPinned())return null;const{enableMultiRowSelection:a}=r.options,o=typeof a=="boolean"?a:!0,u=t.getIsSelected(),s=l=>{var c,g;if(l.stopPropagation(),(c=globalThis.getSelection())==null||c.removeAllRanges(),l.shiftKey){const{rows:b,rowsById:h}=r.getRowModel(),S=U0(b,t.id,b.map(E=>E.id).includes(n)?n:""),C=!((g=h[t.id])!=null&&g.getIsSelected())||!1;S.forEach(E=>E.toggleSelected(C))}else t.toggleSelected(!u);n=t.id};return R.jsx("div",{onClick:s,className:Ta.selectionCell,"data-test-id":Re.rowSelect,children:o?R.jsx(Oo,{size:"s",checked:u}):R.jsx(Ao,{size:"s",checked:u})})},meta:{skipOnExport:!0}}}try{Ni.displayName="getSelectionCellColumnDef",Ni.__docgenInfo={description:"",displayName:"getSelectionCellColumnDef",props:{}}}catch{}const la={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Loading:"loading"},Ia=16,q0="_statusCell_mb94x_1",W0="_statusCellLabel_mb94x_14",X0="_statusCellIndicator_mb94x_20",oi={statusCell:q0,statusCellLabel:W0,statusCellIndicator:X0};function K0({appearance:e,label:n}){const t=e===la.Loading;return R.jsxs("div",{className:oi.statusCell,"data-no-label":!n||void 0,children:[R.jsx("div",{"data-appearance":t?void 0:e,className:oi.statusCellIndicator,"data-loading":t||void 0,"data-test-id":Re.statusIndicator}),n&&R.jsx("div",{className:oi.statusCellLabel,"data-test-id":Re.statusLabel,children:R.jsx(Ls.LightLabelS,{children:R.jsx(tr,{text:n})})})]})}function Ri({header:e,accessorKey:n,mapStatusToAppearance:t,renderDescription:r,size:i,maxSize:a,minSize:o,enableSorting:u=!0,enableResizing:s}){const l=!!r;return{id:ur.Status,pinned:Vt.Left,noBodyCellPadding:!0,noHeaderCellPadding:!l,noHeaderCellBorderOffset:l,size:l?i:Ia,minSize:u||l?Math.max(Ia,o||0):1,maxSize:a,meta:{skipOnExport:!0},accessorKey:n,enableSorting:u,header:l?e:void 0,enableResizing:s??l,accessorFn:c=>r&&Object.hasOwn(c,n)?r(c[n],c):void 0,cell:c=>{const g=typeof c.row.original=="object"&&Object.hasOwn(c.row.original,n)?c.row.original[n]:c.getValue(),b=t(g);return R.jsx(K0,{appearance:b,label:r?r(g,c.row.original):void 0})}}}try{Ri.displayName="getStatusColumnDef",Ri.__docgenInfo={description:"Вспомогательная функция для создания ячейки со статусом",displayName:"getStatusColumnDef",props:{accessorKey:{defaultValue:null,description:"Имя ключа соответствующее полю в data",name:"accessorKey",required:!0,type:{name:"string"}},mapStatusToAppearance:{defaultValue:null,description:"Маппинг значений статуса на цвета",name:"mapStatusToAppearance",required:!0,type:{name:"MapStatusToAppearanceFnType"}},enableSorting:{defaultValue:{value:"true"},description:"Включение/выключение сортировки",name:"enableSorting",required:!1,type:{name:"boolean"}},renderDescription:{defaultValue:null,description:"Функция для отрисовки текста, если не передана, то будет отрисован только индикатор статуса",name:"renderDescription",required:!1,type:{name:"((cellValue: string, row: TData) => string)"}},size:{defaultValue:null,description:"Размер ячейки",name:"size",required:!1,type:{name:"number"}},minSize:{defaultValue:null,description:"",name:"minSize",required:!1,type:{name:"number"}},maxSize:{defaultValue:null,description:"",name:"maxSize",required:!1,type:{name:"number"}},header:{defaultValue:null,description:"Заголовок колонки",name:"header",required:!1,type:{name:"string | (string & ReactElement<any, string | JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | ... 10 more ..."}},enableResizing:{defaultValue:null,description:"Включение/выключение ресайза колонки",name:"enableResizing",required:!1,type:{name:"boolean"}}}}}catch{}const Y0="_copyCell_1b06y_1",J0="_copyButton_1b06y_10",Ma={copyCell:Y0,copyButton:J0};function Li({value:e}){const[n,t]=y.useState(!1),r=y.useRef(),i=()=>t(!0),a=()=>t(!1),o=u=>{u.stopPropagation(),e&&ms(String(e),{format:"text/plain"}),i(),clearTimeout(r.current),r.current=setTimeout(a,1e3)};return y.useEffect(()=>()=>{a(),clearTimeout(r.current)},[]),R.jsxs("div",{className:Ma.copyCell,onClick:o,role:"presentation",children:[R.jsx(tr,{text:String(e),maxLines:1}),R.jsx(nr,{"data-test-id":"button-copy-value",type:"button",icon:n?R.jsx(bs,{}):R.jsx(ks,{}),size:"xs",className:Ma.copyButton})]})}try{Li.displayName="CopyCell",Li.__docgenInfo={description:"",displayName:"CopyCell",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}}}}}catch{}const Pa="snack_predefined_TreeColumn",Z0="_treeCellContainer_m2qt6_1",Q0="_treeCell_m2qt6_1",ed="_cellUserToggleIcon_m2qt6_21",td="_treeNodeContent_m2qt6_27",nd="_userContent_m2qt6_57",rd="_line_m2qt6_62",id="_firstLine_m2qt6_66",ad="_cellExpandButton_m2qt6_70",od="_treeCheckboxWrap_m2qt6_82",Pt={treeCellContainer:Z0,treeCell:Q0,cellUserToggleIcon:ed,treeNodeContent:td,userContent:nd,line:rd,firstLine:id,cellExpandButton:ad,treeCheckboxWrap:od},ud="_treeLine_1l5c8_1",sd={treeLine:ud};function Dr({halfHeight:e,horizontal:n,visible:t,className:r}){return R.jsx("div",{className:gn(sd.treeLine,r),"data-horizontal":n||void 0,"data-half-height":e||void 0,"data-visible":t||void 0})}try{Dr.displayName="TreeLine",Dr.__docgenInfo={description:"",displayName:"TreeLine",props:{halfHeight:{defaultValue:null,description:"",name:"halfHeight",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}function Hi({showToggle:e=!1,icon:n=R.jsx(Ss,{size:24}),expandedIcon:t=R.jsx(Es,{size:24}),collapsedIcon:r=R.jsx(ws,{size:24}),header:i,accessorKey:a}){return{id:Pa,pinned:Vt.Left,accessorKey:a,noBodyCellPadding:!0,noHeaderCellPadding:!1,enableResizing:!0,size:150,maxSize:Number.MAX_SAFE_INTEGER,meta:{skipOnExport:!1},enableSorting:!1,header:i,cell:function({row:u,cell:s}){var H;const l=u.getIsExpanded(),c=u.getCanExpand(),g=u.getCanMultiSelect(),b=u.getParentRow(),h=u.getCanSelect(),S=u.getIsAllSubRowsSelected(),C=u.getIsSomeSelected(),E=u.getIsSelected(),w=((H=b==null?void 0:b.subRows.at(-1))==null?void 0:H.id)===u.id,D=u.depth,{ref:N}=g0(Pa,s),V=y.useMemo(()=>{var M;const j=[];for(let X=D;X>=0;X--)j[X]=X===D?u:(M=j.at(X+1))==null?void 0:M.getParentRow();return j.map((X,Z)=>{var ke;if(!X||j.length===Z+1)return!0;const re=j[Z+1];return(re==null?void 0:re.id)!==((ke=X.subRows.at(-1))==null?void 0:ke.id)||(u==null?void 0:u.id)===(re==null?void 0:re.id)})},[u,D]),L=y.useMemo(()=>Array.from({length:D},(j,M)=>R.jsx(Dr,{visible:V.at(M),className:M!==0?Pt.line:Pt.firstLine,halfHeight:M===D-1&&w},M)),[D,V,w]);y.useEffect(()=>{if(!(!g||!c||!h)){if(S&&!E){u.toggleSelected(!0,{selectChildren:!1});return}if(E&&!S&&C){u.toggleSelected(!1,{selectChildren:!1});return}}},[S,C,u,E,g,c,h]);const q=y.useCallback(j=>{if(j.stopPropagation(),g){const M=!S&&!E,X=S||C||M;u.toggleSelected(M,{selectChildren:X});return}u.toggleSelected(!E,{selectChildren:!1})},[g,u,S,C,E]),G=y.useCallback(j=>{j.stopPropagation(),u.toggleExpanded()},[u]),P=typeof s.row.original=="object"&&Object.hasOwn(s.row.original,a)?s.row.original[a]:s.getValue();return R.jsx("div",{role:"presentation","data-test-id":Re.tree.node,className:Pt.treeCellContainer,onClick:q,children:R.jsxs("div",{className:Pt.treeCell,ref:N,children:[L,!!b&&R.jsx(Dr,{horizontal:!0,visible:!0}),c&&R.jsx(nr,{size:"xs","data-test-id":Re.tree.chevron,icon:R.jsx(ys,{}),onClick:G,className:Pt.cellExpandButton,"data-expanded":l||void 0}),R.jsxs("div",{className:Pt.treeNodeContent,"data-disabled":!h||void 0,"data-selected":E||void 0,"data-multiselect":g||void 0,children:[e&&R.jsx("div",{tabIndex:-1,className:Pt.treeCheckboxWrap,children:g?R.jsx(Oo,{size:"s",disabled:!h,checked:E,"data-test-id":Re.tree.checkbox,indeterminate:C&&!S}):R.jsx(Ao,{size:"s",disabled:!h,"data-test-id":Re.tree.radio,checked:E})}),R.jsxs("div",{role:"presentation",onClick:G,className:Pt.cellUserToggleIcon,children:[c&&l&&t,c&&!l&&r]}),R.jsxs("div",{role:"presentation",className:Pt.userContent,children:[!c&&n,R.jsx(tr,{text:P})]})]})]})})}}}try{Hi.displayName="getTreeColumnDef",Hi.__docgenInfo={description:"Вспомогательная функция для создания ячейки со статусом",displayName:"getTreeColumnDef",props:{accessorKey:{defaultValue:null,description:"Имя ключа соответствующее полю в data",name:"accessorKey",required:!0,type:{name:"string"}},expandedIcon:{defaultValue:{value:"<FolderOpenSVG size={24} />"},description:"Иконка элемента-родителя в открытом состоянии",name:"expandedIcon",required:!1,type:{name:"ReactNode"}},collapsedIcon:{defaultValue:{value:"<FolderSVG size={24} />"},description:"Иконка элемента-родителя в закрытом состоянии",name:"collapsedIcon",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:{value:"<FileSVG size={24} />"},description:"Иконка дочернего",name:"icon",required:!1,type:{name:"ReactNode"}},showToggle:{defaultValue:{value:"false"},description:"Иконка дочернего элемента",name:"showToggle",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:"Рендер функция заголовка колонки",name:"header",required:!1,type:{name:"string | (string & ReactElement<any, string | JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | ... 10 more ..."}},renderDescription:{defaultValue:null,description:"Заголовок колонки",name:"renderDescription",required:!1,type:{name:"((cellValue: string, row: TData) => string)"}}}}}catch{}const ld="_tableRow_o5tsw_1",cd="_rowPinnedCells_o5tsw_19",dd="_bodyRow_o5tsw_59",hd="_tableHeader_o5tsw_110",jr={tableRow:ld,rowPinnedCells:cd,bodyRow:dd,tableHeader:hd};function Gn({position:e,children:n}){return R.jsx("div",{"data-position":e,"data-test-id":Re.pinnedCells,className:jr.rowPinnedCells,children:n})}try{Gn.displayName="PinnedCells",Gn.__docgenInfo={description:"",displayName:"PinnedCells",props:{position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}function Nr({onClick:e,children:n,className:t,rowAutoHeight:r,...i}){return R.jsx("div",{onClick:e,className:gn(jr.tableRow,t),"data-auto-height":r||void 0,role:"row",...i,children:n})}try{Nr.displayName="Row",Nr.__docgenInfo={description:"",displayName:"Row",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}}}}}catch{}function wn({row:e,onRowClick:n,rowAutoHeight:t,columnOrder:r,enableColumnsOrderSortByDrag:i}){const{leftPinned:a,rightPinned:o,unpinned:u}=A0(e),[s,l]=y.useState(!1),c=!e.getCanSelect(),g=b=>{c||n==null||n(b,{id:e.id,data:e.original,selected:e.getIsSelected(),toggleSelected:e.toggleSelected})};return R.jsx(gu.Provider,{value:{dropListOpened:s,setDropListOpen:l},children:R.jsxs(Nr,{onClick:g,"data-clickable":!!n||void 0,"data-disabled":c||void 0,"data-selected":e.getIsSelected()||e.getIsSomeSelected()&&!e.getCanMultiSelect()&&!e.getIsExpanded()||void 0,"data-actions-opened":s||void 0,"data-test-id":Re.bodyRow,"data-row-id":e.id,className:jr.bodyRow,rowAutoHeight:t,children:[a&&R.jsx(Gn,{position:Vt.Left,children:a.map(b=>R.jsx(Un,{cell:b,rowAutoHeight:t},b.id))}),u.map(b=>R.jsx(du,{items:r,strategy:uu,children:R.jsx(Un,{cell:b,rowAutoHeight:t,isDraggable:i},b.id)},b.id)),o&&R.jsx(Gn,{position:Vt.Right,children:o.map(b=>R.jsx(Un,{cell:b,rowAutoHeight:t,isDraggable:i},b.id))})]})})}try{wn.displayName="BodyRow",wn.__docgenInfo={description:"",displayName:"BodyRow",props:{rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},row:{defaultValue:null,description:"",name:"row",required:!0,type:{name:"Row<TData>"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"RowClickHandler<TData>"}},columnOrder:{defaultValue:null,description:"",name:"columnOrder",required:!0,type:{name:"ColumnOrder"}},enableColumnsOrderSortByDrag:{defaultValue:null,description:"",name:"enableColumnsOrderSortByDrag",required:!1,type:{name:"boolean"}}}}}catch{}function Rr({rowAutoHeight:e,columnOrder:n,enableColumnsOrderSortByDrag:t}){const{leftPinned:r,unpinned:i,rightPinned:a}=_0();return R.jsxs(Nr,{className:jr.tableHeader,"data-test-id":Re.headerRow,rowAutoHeight:e,children:[r&&R.jsx(Gn,{position:Vt.Left,children:r.map(o=>o.headers.map(u=>u.isPlaceholder?null:R.jsx(qn,{header:u,rowAutoHeight:e},u.id)))}),R.jsx(du,{items:n,strategy:uu,children:i.map(o=>o.headers.map(u=>R.jsx(qn,{header:u,rowAutoHeight:e,isDraggable:t&&n.length>1},u.id)))}),a&&R.jsx(Gn,{position:Vt.Right,children:a.map(o=>o.headers.map(u=>u.isPlaceholder?null:R.jsx(qn,{header:u,pinPosition:Vt.Right,rowAutoHeight:e},u.id)))})]})}try{Rr.displayName="HeaderRow",Rr.__docgenInfo={description:"",displayName:"HeaderRow",props:{rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},columnOrder:{defaultValue:null,description:"",name:"columnOrder",required:!0,type:{name:"ColumnOrder"}},enableColumnsOrderSortByDrag:{defaultValue:null,description:"",name:"enableColumnsOrderSortByDrag",required:!1,type:{name:"boolean"}}}}}catch{}function Ti({settings:e,data:n,columnDefinitions:t,topRows:r,centerRows:i}){const[a,o]=y.useState(!1),{t:u}=rr("Table"),{fileName:s,filterData:l=!0}=e,c=y.useMemo(()=>{let g=n;return l&&(g=[...r,...i].map(b=>b.original)),g},[i,n,l,r]);return R.jsx(Xi,{trigger:"clickAndFocusVisible",open:a,onOpenChange:o,scroll:!0,placement:"bottom-end",items:[{content:{option:u("export")+"CSV"},onClick:()=>{var g;(g=e.exportToCSV)==null||g.call(e,{fileName:s,columnDefinitions:t,data:c}),o(!1)},hidden:!e.exportToCSV},{content:{option:u("export")+"XLSX"},onClick:()=>{var g;(g=e.exportToXLSX)==null||g.call(e,{fileName:s,columnDefinitions:t,data:c}),o(!1)},hidden:!e.exportToXLSX}],children:R.jsx(nr,{size:"m",icon:R.jsx(Os,{})})})}try{Ti.displayName="ExportButton",Ti.__docgenInfo={description:"",displayName:"ExportButton",props:{data:{defaultValue:null,description:"Данные для отрисовки",name:"data",required:!0,type:{name:"TData[]"}},columnDefinitions:{defaultValue:null,description:"Определение внешнего вида и функционала колонок",name:"columnDefinitions",required:!0,type:{name:"ColumnDefinition<TData>[]"}},settings:{defaultValue:null,description:"",name:"settings",required:!0,type:{name:"{ fileName: string; filterData?: boolean | undefined; exportToCSV?(args: ExportProps<TData>): void; exportToXLSX?(args: ExportProps<TData>): void; }"}},topRows:{defaultValue:null,description:"",name:"topRows",required:!0,type:{name:"Row<TData>[]"}},centerRows:{defaultValue:null,description:"",name:"centerRows",required:!0,type:{name:"Row<TData>[]"}}}}}catch{}function Ba(e){return e.id?e.id:"accessorKey"in e&&e.accessorKey?String(e.accessorKey):typeof e.header=="string"?e.header:void 0}const gd="_tableEmptyStateWrapper_sjme0_1",fd={tableEmptyStateWrapper:gd};function Ii({dataError:e,dataFiltered:n,tableRowsLength:t,emptyStates:r}){return t?null:R.jsxs("div",{className:fd.tableEmptyStateWrapper,children:[e&&R.jsx(Wr,{...r.errorDataState,size:"m",align:"vertical"}),!e&&n&&R.jsx(Wr,{...r.noResultsState,size:"m",align:"vertical"}),!e&&!n&&R.jsx(Wr,{...r.noDataState,size:"m",align:"vertical"})]})}try{Ii.displayName="TableEmptyState",Ii.__docgenInfo={description:"",displayName:"TableEmptyState",props:{emptyStates:{defaultValue:null,description:"",name:"emptyStates",required:!0,type:{name:"{ noDataState: EmptyStateProps; noResultsState: EmptyStateProps; errorDataState: EmptyStateProps; }"}},dataError:{defaultValue:null,description:"",name:"dataError",required:!1,type:{name:"boolean"}},dataFiltered:{defaultValue:null,description:"",name:"dataFiltered",required:!1,type:{name:"boolean"}},tableRowsLength:{defaultValue:null,description:"",name:"tableRowsLength",required:!0,type:{name:"number"}}}}}catch{}function pd({noDataState:e,noResultsState:n,errorDataState:t}){const{t:r}=rr("Table");return y.useMemo(()=>{const i={icon:{icon:ba,appearance:"neutral",decor:!0},title:r("noData.title"),...e},a={icon:{icon:ba,appearance:"neutral",decor:!0},title:r("noResults.title"),description:r("noResults.description"),...n},o={icon:{icon:_s,appearance:"neutral",decor:!0},title:r("errorData.title"),description:r("errorData.description"),...t};return{noDataState:i,noResultsState:a,errorDataState:o}},[t,e,n,r])}const md="_footer_1y40y_1",bd="_pagination_1y40y_9",Va={footer:md,pagination:bd};function Mi({table:e,options:n,optionsLabel:t,optionsRender:r}){const{t:i}=rr("Table"),a=t??i("rowsOptionsLabel"),o=y.useCallback(c=>{e.setPageIndex(c-1)},[e]),u=y.useCallback(c=>{e.setPageSize(Number(c))},[e]),s=y.useMemo(()=>n==null?void 0:n.sort((c,g)=>c-g).map((c,g)=>({label:String(r?r(c,g):c),value:String(c)})),[n,r]),l=e.getState().pagination;return e.getPageCount()<=1&&!s?null:R.jsxs("div",{className:Va.footer,children:[e.getPageCount()>1&&R.jsx(Ns,{total:e.getPageCount(),page:l.pageIndex+1,onChange:o,size:"xs",className:Va.pagination}),s&&e.getRowModel().rows.length>=Number(s[0].value)&&R.jsx(Rs.Single,{value:String(l.pageSize),onChange:u,placement:"top-end",options:s,label:a,widthStrategy:"auto",size:"xs"})]})}try{Mi.displayName="TablePagination",Mi.__docgenInfo={description:"",displayName:"TablePagination",props:{table:{defaultValue:null,description:"",name:"table",required:!0,type:{name:"Table<TData>"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"number[]"}},optionsLabel:{defaultValue:null,description:"",name:"optionsLabel",required:!1,type:{name:"string"}},optionsRender:{defaultValue:null,description:"",name:"optionsRender",required:!1,type:{name:"((value: number, idx: number) => string | number)"}},pageCount:{defaultValue:null,description:"",name:"pageCount",required:!1,type:{name:"number"}}}}}catch{}const kd="_columnsSettings_18ghj_1",vd={columnsSettings:kd};function Pi({columnsSettings:e,enabledColumns:n,setEnabledColumns:t}){return R.jsx(Xi,{className:vd.columnsSettings,items:e,selection:{value:n,onChange:t,mode:"multiple"},placement:"bottom-end","data-test-id":"table__column-settings-droplist",children:R.jsx(nr,{size:"m","data-test-id":"table__column-settings",icon:R.jsx(Ds,{})})})}try{Pi.displayName="ColumnsSettings",Pi.__docgenInfo={description:"",displayName:"ColumnsSettings",props:{enabledColumns:{defaultValue:null,description:"",name:"enabledColumns",required:!0,type:{name:"string[]"}},setEnabledColumns:{defaultValue:null,description:"",name:"setEnabledColumns",required:!0,type:{name:"(enabledColumns: string[]) => void"}},columnsSettings:{defaultValue:null,description:"",name:"columnsSettings",required:!0,type:{name:"[GroupSelectItem]"}}}}}catch{}/**
   * match-sorter-utils
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */const ku={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},Cd=Object.keys(ku).join("|"),yd=new RegExp(Cd,"g");function Sd(e){return e.replace(yd,n=>ku[n])}/**
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2099 Kent C. Dodds
 * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
 */const je={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function Ed(e,n,t){var r;if(t=t||{},t.threshold=(r=t.threshold)!=null?r:je.MATCHES,!t.accessors){const o=za(e,n,t);return{rankedValue:e,rank:o,accessorIndex:-1,accessorThreshold:t.threshold,passed:o>=t.threshold}}const i=Ad(e,t.accessors),a={rankedValue:e,rank:je.NO_MATCH,accessorIndex:-1,accessorThreshold:t.threshold,passed:!1};for(let o=0;o<i.length;o++){const u=i[o];let s=za(u.itemValue,n,t);const{minRanking:l,maxRanking:c,threshold:g=t.threshold}=u.attributes;s<l&&s>=je.MATCHES?s=l:s>c&&(s=c),s=Math.min(s,c),s>=g&&s>a.rank&&(a.rank=s,a.passed=!0,a.accessorIndex=o,a.accessorThreshold=g,a.rankedValue=u.itemValue)}return a}function za(e,n,t){return e=$a(e,t),n=$a(n,t),n.length>e.length?je.NO_MATCH:e===n?je.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),n=n.toLowerCase(),e===n?je.EQUAL:e.startsWith(n)?je.STARTS_WITH:e.includes(` ${n}`)?je.WORD_STARTS_WITH:e.includes(n)?je.CONTAINS:n.length===1?je.NO_MATCH:wd(e).includes(n)?je.ACRONYM:xd(e,n))}function wd(e){let n="";return e.split(" ").forEach(r=>{r.split("-").forEach(a=>{n+=a.substr(0,1)})}),n}function xd(e,n){let t=0,r=0;function i(s,l,c){for(let g=c,b=l.length;g<b;g++)if(l[g]===s)return t+=1,g+1;return-1}function a(s){const l=1/s,c=t/n.length;return je.MATCHES+c*l}const o=i(n[0],e,0);if(o<0)return je.NO_MATCH;r=o;for(let s=1,l=n.length;s<l;s++){const c=n[s];if(r=i(c,e,r),!(r>-1))return je.NO_MATCH}const u=r-o;return a(u)}function $a(e,n){let{keepDiacritics:t}=n;return e=`${e}`,t||(e=Sd(e)),e}function _d(e,n){let t=n;typeof n=="object"&&(t=n.accessor);const r=t(e);return r==null?[]:Array.isArray(r)?r:[String(r)]}function Ad(e,n){const t=[];for(let r=0,i=n.length;r<i;r++){const a=n[r],o=Od(a),u=_d(e,a);for(let s=0,l=u.length;s<l;s++)t.push({itemValue:u[s],attributes:o})}return t}const ja={maxRanking:1/0,minRanking:-1/0};function Od(e){return typeof e=="function"?ja:{...ja,...e}}const Gd=(e,n,t,r)=>{const i=Ed(e.getValue(n),t);return r({itemRank:i}),i.passed},ui=e=>typeof e=="string"&&!isNaN(Number(new Date(e))),Fd=e=>Object.fromEntries(Object.entries(e).map(([n,t])=>ui(t)?[n,new Date(t)]:Array.isArray(t)&&t.some(ui)?[n,t.map(r=>ui(r)?new Date(r):r)]:[n,t])),Dd="_table_gmnkh_1",Nd="_header_gmnkh_21",Rd="_tableContent_gmnkh_28",Ld="_toolbar_gmnkh_32",Hd="_skeleton_gmnkh_44",Td="_wrapper_gmnkh_48",Id="_scrollStub_gmnkh_55",Md="_topRowWrapper_gmnkh_61",qt={table:Dd,header:Nd,tableContent:Rd,toolbar:Ld,skeleton:Hd,wrapper:Td,scrollStub:Id,topRowWrapper:Md};function Bi({pageSize:e,columnDefinitions:n,columnPinning:t}){const r=y.useMemo(()=>Array.from({length:e}).map(()=>"")||[],[e]),i=y.useMemo(()=>n.map(o=>({...o,cell:()=>R.jsx(xs,{className:qt.skeleton,lines:1,width:"100%"})})),[n]);return{loadingTable:au({data:r,columns:i,state:{columnPinning:t},getCoreRowModel:ru()})}}try{Bi.displayName="useLoadingTable",Bi.__docgenInfo={description:"",displayName:"useLoadingTable",props:{columnDefinitions:{defaultValue:null,description:"",name:"columnDefinitions",required:!0,type:{name:"ColumnDefinition<TData>[]"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},columnPinning:{defaultValue:null,description:"",name:"columnPinning",required:!0,type:{name:"ColumnPinningState"}}}}}catch{}function xn(e,n){const t=e==null?void 0:e.state,r=e==null?void 0:e.onChange;return Cs(e==null?void 0:e.state,(e==null?void 0:e.state)??(e==null?void 0:e.initialState)??n,y.useCallback(i=>{const a=typeof i=="function"?i(t||n):i;r==null||r(a)},[t,n,r]))}const Pd=e=>{let{transform:n}=e;return{...n,y:0}},vu="RESIZED_COLUMN_KEY";function Bd({id:e,columnId:n}){var r;const t=JSON.parse(localStorage.getItem(e||"")||"null");if(t)return(r=t.resizeState)==null?void 0:r[`${vu}-${n}`]}function Vd({id:e,columnId:n,size:t}){const r=JSON.parse(localStorage.getItem(e)||"null"),i=(r==null?void 0:r.resizeState)||{};i[`${vu}-${n}`]=t,localStorage.setItem(e,JSON.stringify({...r||{},resizeState:i}))}function dn(e){return"id"in e&&e.id?e.id:e.accessorKey}function zd(e){return{sizeKey:`--table-column-${e}-size`,flexKey:`--table-column-${e}-flex`}}function $d(e){if(On()){const n=document.querySelector(`[data-header-id="${e}"]`),t=n==null?void 0:n.querySelector('[data-test-id="table__header-cell-resize-handle-moving-part"]');if(n){const{width:r}=n.getBoundingClientRect();if(t){const i=parseInt(t.style.getPropertyValue("--offset"));return r+i}return r}}return 0}function Cu({columnDefinitions:e,enableSelection:n,enableSelectPinned:t,expanding:r}){let i=e;return n&&!r&&(i=[Ni(t),...i]),r&&(i=[Hi(r.expandingColumnDefinition),...i]),i}function jd(e){return function(t,r){const i=e.findIndex(o=>o===dn(t)),a=e.findIndex(o=>o===dn(r));return i-a}}const yu=e=>Array.isArray(e)&&e.every(n=>typeof n=="string");function Ud(e){return e.reduce((n,t)=>{switch(t.pinned){case"left":n.left.push(t);break;case"right":n.right.push(t);break;default:n.unpinned.push(t)}return n},{left:[],right:[],unpinned:[]})}const Vi=e=>`${e}_columnOrder`;function qd(e,n){const t=e.filter(r=>r.pinned!=="left"&&r.pinned!=="right").map(dn);if(n!=null&&n.columnSettings){const r=JSON.parse(localStorage.getItem(Vi(n.id))||"null"),i=yu(r)?r:null;if(i!==null)return[...i,...t.filter(a=>!(i!=null&&i.includes(a)))];localStorage.setItem(Vi(n.id),JSON.stringify(t))}return t}const Wd={activationConstraint:{distance:5}};function Xd({tableColumns:e,savedState:n,columnSettings:t}){const[r,i]=y.useState(()=>qd(e,n)),a=y.useCallback(c=>{let g;c instanceof Function?g=c(r):g=c,n!=null&&n.columnSettings&&localStorage.setItem(Vi(n.id),JSON.stringify(g)),i(g)},[r,n]),o=y.useCallback(({active:c,over:g})=>{if(!c||!g)return;const b=c.id.toString(),h=g.id.toString();b!==h&&r.includes(h)&&a(S=>{const C=S.indexOf(b),E=S.indexOf(h);return ua(S,C,E)})},[r,a]),u=sl(Kr(zo,Wd),Kr($o,{}),Kr(ta,{})),s=!!(t!=null&&t.enableDrag),l=y.useMemo(()=>s?{collisionDetection:gl,modifiers:[Pd],onDragEnd:o,sensors:u}:{},[s,o,u]);return{columnOrder:r,setColumnOrder:a,dndContextProps:l,enableColumnsOrderSortByDrag:s}}function Su(e){var n;return("id"in e||"accessorKey"in e)&&"columnSettings"in e&&((n=e.columnSettings)==null?void 0:n.mode)!=="hidden"}function Kd(e){var n;return"columnSettings"in e&&e.columnSettings!==void 0?((n=e.columnSettings)==null?void 0:n.mode)!=="defaultFalse":!0}function Yd(e){if("columnSettings"in e&&e.columnSettings!==void 0){const{mode:n}=e.columnSettings;if(!n)return!0;switch(n){case"hidden":return!1;case"defaultTrue":case"defaultFalse":default:return!0}}return!0}function Jd(e){var n;return{id:dn(e),content:{option:(n=e.columnSettings)==null?void 0:n.label},switch:!0,showSwitchIcon:!0}}function si(e,n){return e.filter(Su).sort(jd(n)).map(Jd)}function Zd({pinnedGroups:e,columnOrder:n,areAllColumnsEnabled:t,t:r}){return[{divider:!1,items:[{divider:!1,items:si(e.left,n),type:"group"},{divider:!0,items:si(e.unpinned,n),type:"group"},{divider:!0,items:si(e.right,n),type:"group"}],selectButtonLabel:r(t?"groupSelectButton.hide":"groupSelectButton.show"),label:r("settingsHeaderLabel"),mode:"primary",type:"group-select"}]}function Qd(e){const n=JSON.parse(localStorage.getItem(e)||"null");return yu(n)?n:null}function eh(e,n,t){const r=Qd(t);return e.filter(i=>{const a=dn(i);return r&&(n!=null&&n.columnSettings)?!!r.find(o=>o===a):Kd(i)}).map(dn)}function th({columnDefinitions:e,columnsSettings:n,pinnedGroups:t,savedState:r,rowSelection:i,enableSelectPinned:a,expanding:o}){const{t:u}=rr("Table"),s=`${r==null?void 0:r.id}_columnSettings`,l=y.useMemo(()=>e.filter(Yd),[e]),[c,g]=y.useState(()=>eh(l,r,s)),b=y.useCallback(N=>{r!=null&&r.columnSettings&&localStorage.setItem(s,JSON.stringify(N)),g(N)},[s,r==null?void 0:r.columnSettings]),h=!!(n!=null&&n.enableSettingsMenu),S=y.useMemo(()=>h?e.filter(N=>Su(N)?c.includes(dn(N)):!0):e,[e,c,h]),C=!!(i!=null&&i.enable),E=y.useMemo(()=>Cu({columnDefinitions:S,enableSelection:C,enableSelectPinned:a,expanding:o}),[a,C,S,o]),w=c.length===l.length,D=y.useCallback(N=>Zd({pinnedGroups:t,columnOrder:N,areAllColumnsEnabled:w,t:u}),[w,t,u]);return{enabledColumns:c,setEnabledColumns:b,enabledColumnsDefinitions:S,enabledTableColumns:E,getColumnsSettings:D,areColumnsSettingsEnabled:h}}function nh({manualPagination:e,pagination:n,maximumAvailablePage:t,onPaginationChange:r,autoResetPageIndex:i}){y.useEffect(()=>{if(i)return;const{pageIndex:a}=n;!e&&a>0&&a>=t&&r({...n,pageIndex:0})},[t,e,r,n,i])}function rh(e){return e?"initialOpen"in e&&typeof e.initialOpen=="boolean"?e.initialOpen:!0:!1}function ih({columnFilters:e}){const[n,t]=y.useState(()=>rh(e)),[r,i]=xn({state:e==null?void 0:e.value,initialState:e==null?void 0:e.defaultValue,onChange:e==null?void 0:e.onChange},void 0),[a,o]=xn({state:e==null?void 0:e.visibleFilters,initialState:[],onChange:e==null?void 0:e.onVisibleFiltersChange},s0),u=y.useMemo(()=>{if(e)return{open:n,onOpenChange:t,...e,value:r,onChange:i,visibleFilters:a,onVisibleFiltersChange:o}},[e,n,r,i,a,o]);return{filter:r,setFilter:i,patchedFilter:u,setFilterVisibility:o}}const Eu=";",ah=/^\[.+]$/,oh=/(\w+)\[([^\]]+)]([^;]+)?/g,Ua={filter:"filter",sort:"sort"},uh={offset:"offset",limit:"limit"},sh=["in","ni"];var lh=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]]);return t};function ch(e){return ah.test(e)}function dh(e){return e.reduce((n,t,r)=>{const i=r!==0&&r!==e.length?Eu:"",{field:a,direction:o}=t;return`${n}${i}${a}[${o}]`},"")}function hh(e){return e.reduce((n,t,r)=>{const i=r!==0&&r!==e.length?Eu:"",{field:a,condition:o,value:u}=t;let s=u;return sh.includes(o)&&Array.isArray(u)&&(s=`[${u.join(",")}]`),`${n}${i}${a}[${o}]${s}`},"")}function wu(e){return typeof e=="number"?!isNaN(e):typeof e=="string"||Array.isArray(e)?e.length!==0:e!==void 0}function gh(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function fh(e){var n,t;const{pagination:r}=e,i=lh(e,["pagination"]),a=Object.assign(Object.assign({},r),i);!((n=e.filter)===null||n===void 0)&&n.length&&(a.filter=hh(e.filter)),!((t=e.sort)===null||t===void 0)&&t.length&&(a.sort=dh(e.sort));const o=Object.entries(a).reduce((u,[s,l])=>{const c=u.length?"&":"";return`${u}${c}${s}=${l}`},"");return encodeURIComponent(o)}function ph(e){return Object.values(uh).includes(e)}function li(e){if(ch(e))try{return JSON.parse(e)}catch{return e.replace(/[[\]]/g,"").split(",").map(r=>r.trim())}const n=Number(e);return isNaN(n)?e:n}function xu(e){return Object.keys(e).reduce((n,t)=>{const r=t;let i=e[r];return wu(i)&&(gh(i)&&(i=xu(i)),n[r]=i),n},{})}function mh(e){const n=e||{};function t(){return xu(n)}function r(){return fh(t())}return e!==void 0?{toObject:t,toString:r}:{filter(i){return n.filter||(n.filter=[]),n.filter.push(i),this},sort(i){return n.sort||(n.sort=[]),n.sort.push(i),this},pagination(i){return n.pagination=i,this},search(i){return n.search=i,this},toObject:t,toString:r}}function bh(e){return e.length?decodeURIComponent(e).split("&").reduce((r,i)=>{const[a,o]=i.split("=");if(wu(o)){const u=Array.from(o.matchAll(oh),([,s,l,c])=>[s,l,c]);if(a===Ua.sort)return u.length&&(r[a]=u.map(([s,l])=>({field:s,direction:l}))),r;if(a===Ua.filter)return u.length&&(r[a]=u.map(([s,l,c])=>({field:s,condition:l,value:li(c)})).filter(({value:s})=>s!==void 0)),r;if(ph(a))return r.pagination||(r.pagination={}),r.pagination[a]=li(o),r;r[a]=li(o)}return r},{}):void 0}const kh=e=>({limit:e.pageSize,offset:e.pageSize*e.pageIndex}),vh=e=>e.map(n=>({field:n.id,direction:n.desc?"d":"a"})),qa=e=>e instanceof Date?e.toISOString():e,Ch=e=>{if(e)return Object.entries(e).filter(([n,t])=>t!==void 0).map(([n,t])=>Array.isArray(t)?{value:t.map(qa),condition:"in",field:n}:{value:qa(t),condition:"eq",field:n})},yh=e=>mh({pagination:kh(e.pagination),search:e.search,sort:vh(e.sorting),filter:Ch(e.filter)}).toString(),Sh=e=>!e||!e.offset||!e.limit?{pageSize:Gr,pageIndex:0}:{pageSize:e.limit||Gr,pageIndex:Math.floor(e.offset/e.limit)},Eh=(e=[])=>e.map(n=>({id:n.field,desc:n.direction==="d"})),wh=e=>{if(e)return Object.fromEntries(e.map(n=>[n.field,n.value]))},xh=e=>{var t;const n=bh(e);return{pagination:Sh(n==null?void 0:n.pagination),search:((t=n==null?void 0:n.search)==null?void 0:t.toString())||"",sorting:Eh(n==null?void 0:n.sort),filter:wh(n==null?void 0:n.filter)}},_h=e=>typeof(e==null?void 0:e.pageSize)=="number"&&typeof(e==null?void 0:e.pageIndex)=="number",Ah=e=>e==null?void 0:e.every(n=>typeof(n==null?void 0:n.id)=="string"&&typeof(n==null?void 0:n.desc)=="boolean"),Oh=(e,n)=>typeof e=="object"&&e!==null&&Object.keys(e).every(t=>!!n.find(r=>r.id===t)),Gh=({options:e,filterSettings:n})=>{const t=y.useCallback(l=>{const c=_h(l==null?void 0:l.pagination),g=Ah(l==null?void 0:l.sorting),b=typeof(l==null?void 0:l.search)=="string",h=!!(n&&Oh(l.filter,n));return c&&g&&b&&h},[n]),r=e==null?void 0:e.filterQueryKey,i=e!=null&&e.id?`${e==null?void 0:e.id}_filter`:"",a=y.useMemo(()=>r?{filterQueryKey:r,filterLocalStorageKey:i,validateData:t}:void 0,[r,t,i]),{getDefaultFilter:o,setDataToStorages:u}=$s({options:a,serializer:yh,parser:xh});return{defaultFilter:y.useMemo(o,[o]),setDataToStorages:u}};function qe({data:e,rowPinning:n={top:[]},columnDefinitions:t,keepPinnedRows:r=!1,copyPinnedRows:i=!1,enableSelectPinned:a=!1,rowSelection:o,search:u,sorting:s,columnFilters:l,pagination:c,className:g,onRowClick:b,onRefresh:h,pageSize:S=Gr,pageCount:C,loading:E=!1,infiniteLoading:w=!1,outline:D=!1,moreActions:N,exportSettings:V,dataFiltered:L,dataError:q,noDataState:G,noResultsState:P,errorDataState:H,suppressToolbar:j=!1,suppressSearch:M=!1,toolbarAfter:X,suppressPagination:Z=!1,manualSorting:re=!1,manualPagination:ke=!1,manualFiltering:se=!1,autoResetPageIndex:ie=!1,scrollRef:At,scrollContainerRef:ye,getRowId:pt,enableFuzzySearch:nt,savedState:ae,expanding:de,bulkActions:Me,rowAutoHeight:Pe,columnsSettings:fe,...mt}){const{setDataToStorages:Ke,defaultFilter:ee}=Gh({options:ae,filterSettings:l==null?void 0:l.filters}),[Q,Be]=xn(u,""),[Ve,Ot]=xn(o,l0),He=y.useMemo(()=>({pageIndex:0,pageSize:S}),[S]),[rt,it]=xn(s,u0),[bt,kt]=xn(c,He),{filter:Lt,patchedFilter:at,setFilter:Ye,setFilterVisibility:Ht}=ih({columnFilters:l});y.useEffect(()=>{Ke({pagination:bt,sorting:rt,filter:Lt,search:Q||""})},[bt,rt,Lt,Ke,Q]),Is(()=>{ee&&(ee.pagination&&kt(ee.pagination),ee.search&&Be(ee.search),ee.sorting&&it(ee.sorting),ee.filter&&Ye(Fd(ee.filter)),ee.filter&&Ht(Object.keys(ee.filter)))},[ee]);const ot=!!(o!=null&&o.enable),_e=y.useMemo(()=>Cu({columnDefinitions:t,enableSelection:ot,enableSelectPinned:a,expanding:de}),[t,ot,a,de]),vt=y.useMemo(()=>Ud(_e),[_e]),{enabledColumns:rn,setEnabledColumns:ut,getColumnsSettings:Ae,enabledTableColumns:Tt,enabledColumnsDefinitions:an,areColumnsSettingsEnabled:ze}=th({columnDefinitions:t,pinnedGroups:vt,savedState:ae,columnsSettings:fe,rowSelection:o,enableSelectPinned:a,expanding:de}),{columnOrder:Te,setColumnOrder:fn,dndContextProps:pn,enableColumnsOrderSortByDrag:Je}=Xd({tableColumns:_e,savedState:ae,columnSettings:fe}),{t:mn}=rr("Table"),on=w||ke,un=y.useMemo(()=>Ae(Te),[Te,Ae]),sn=y.useMemo(()=>{const p=v=>v.reduce((A,F)=>{const x=Ba(F);return x&&A.push(x),A},[]);return{left:p(vt.left),right:p(vt.right)}},[vt]),bn=y.useCallback(p=>{const v=p.getParentRow(),A=v?v.getCanSelect():!0;let F=!0;return(o==null?void 0:o.enable)!==void 0&&(F=typeof o.enable=="boolean"?o.enable:o.enable(p)),A&&F},[o]),te=au({data:e,columns:Tt,state:{columnPinning:sn,columnOrder:Je?Te:void 0,globalFilter:Q,rowSelection:Ve,sorting:rt,pagination:bt,rowPinning:de?{top:[]}:n},pageCount:C,defaultColumn:{enableSorting:!1,enableResizing:!1,minSize:40,cell:p=>Pe?p.getValue():R.jsx(tr,{text:String(p.getValue()),maxLines:1})},onColumnOrderChange:Je?fn:void 0,manualSorting:re,manualPagination:on,manualFiltering:se,globalFilterFn:nt?Gd:"includesString",onGlobalFilterChange:Be,getRowId:pt,onRowSelectionChange:Ot,enableGrouping:!0,enableRowSelection:bn,enableMultiRowSelection:o==null?void 0:o.multiRow,enableFilters:!0,getSubRows:de==null?void 0:de.getSubRows,filterFromLeafRows:!!de,enableSubRowSelection:!0,getFilteredRowModel:e0(),getExpandedRowModel:n0(),enableColumnResizing:!0,paginateExpandedRows:on,enableSorting:!0,enableMultiSort:!0,onSortingChange:it,getSortedRowModel:t0(),onPaginationChange:kt,autoResetPageIndex:ie,getPaginationRowModel:r0(),getCoreRowModel:ru(),columnResizeMode:"onEnd",keepPinnedRows:r});y.useEffect(()=>{de||te.toggleAllRowsExpanded(!1)},[de,te]);const{loadingTable:pe}=Bi({pageSize:Math.min(Math.max(S,5),Gr),columnDefinitions:an,columnPinning:sn}),me=y.useCallback(()=>{te.resetRowSelection(),h==null||h()},[h,te]),Oe=y.useMemo(()=>ot?Me==null?void 0:Me.map(p=>({...p,onClick:()=>{var v;return(v=p.onClick)==null?void 0:v.call(p,te.getState().rowSelection,te.resetRowSelection)}})):void 0,[Me,ot,te]),st=y.useCallback(()=>{if(!E&&!a&&te.getTopRows().length){const p=te.getCenterRows(),v=te.getIsSomePageRowsSelected();if(p.every(F=>F.getIsSelected())){te.resetRowSelection();return}p.forEach(F=>F.toggleSelected(v?!0:void 0));return}if(!E&&(o!=null&&o.multiRow)){te.toggleAllPageRowsSelected();return}},[E,o==null?void 0:o.multiRow,te,a]),Ge=y.useRef(),be=te.getFlatHeaders(),Se=y.useMemo(()=>{var x;const p=te._getColumnDefs(),v={},A={},F=be.findIndex(({column:O})=>O.getIsResizing());for(let O=0;O<be.length;O++){const _=be[O],{sizeKey:I,flexKey:B}=zd(_.id),U=p.find(T=>Ba(_)===T.id);if(_.id===ur.Status&&!(U!=null&&U.header)&&!(U!=null&&U.enableSorting))v[I]="var(--size-table-cell-status-indicator-horizontal)",v[B]="100%";else{const T=U==null?void 0:U.size;let z=T?`${T}px`:"100%";const J=(x=Ge.current)==null?void 0:x[I],ue=(U==null?void 0:U.enableResizing)&&(ae==null?void 0:ae.id)&&(ae==null?void 0:ae.resize)!==!1;if(ue){const he=Bd({id:ae.id,columnId:_.id});he&&(z=he)}let oe=z;if(_.column.getCanResize()){const he=_.getSize(),ln=_.column.columnDef.size;if(he!==ln||O<F&&J==="100%"){const jt=J==="100%"?$d(_.id):he;A[_.id]=jt,oe=`${jt}px`}}ue&&Vd({id:ae.id,columnId:_.id,size:oe}),v[I]=oe,v[B]=oe==="100%"?"unset":"0"}}return{vars:v,realSizes:A}},[te.getState().columnSizingInfo.isResizingColumn,be,te.getTotalSize()]);y.useEffect(()=>{Object.keys(Se.realSizes).length&&te.setColumnSizing(p=>({...p,...Se.realSizes})),Ge.current=Se.vars},[Se,te]);const Ct=te.getRowModel().rows,ge=te.getCenterRows(),Ze=te.getFilteredRowModel().rows,Fe=Ze.map(p=>p.id),$e=te.getTopRows(),Gt=pe.getRowModel().rows,Qe=te.getState().globalFilter?$e.filter(p=>Fe.includes(p.id)):$e,d=i?Ct:ge,k=pd({noDataState:G,noResultsState:P,errorDataState:H});nh({manualPagination:on,maximumAvailablePage:C||Ze.length/bt.pageSize,pagination:bt,onPaginationChange:kt,autoResetPageIndex:ie});const{updateCellMap:f}=d0(te),m=!j;return R.jsxs("div",{className:gn(qt.wrapper,g),...Ms(mt),children:[m&&R.jsx("div",{className:qt.header,children:R.jsx(As,{search:M?void 0:{value:Q,onChange:Be,loading:u==null?void 0:u.loading,placeholder:(u==null?void 0:u.placeholder)||mn("searchPlaceholder")},className:qt.toolbar,onRefresh:h?me:void 0,bulkActions:Oe,selectionMode:o!=null&&o.multiRow?"multiple":"single",checked:te.getIsAllPageRowsSelected(),indeterminate:te.getIsSomePageRowsSelected(),onCheck:ot?st:void 0,outline:D,after:X||V||ze?R.jsxs(R.Fragment,{children:[X,V&&R.jsx(Ti,{settings:V,columnDefinitions:t,data:e,topRows:Qe,centerRows:d}),ze&&R.jsx(Pi,{columnsSettings:un,enabledColumns:rn,setEnabledColumns:ut})]}):void 0,moreActions:N,filterRow:at,"data-test-id":Re.toolbar})}),R.jsxs(Ps,{size:"s",className:qt.table,ref:ye,"data-outline":D||void 0,children:[R.jsx("div",{className:qt.tableContent,style:Se.vars,children:R.jsx(ou.Provider,{value:{updateCellMap:f},children:R.jsx(cc,{...pn,children:R.jsx(fu.Provider,{value:{table:te},children:(!w||!e.length)&&E?R.jsxs(ma,{loading:!0,children:[R.jsx(Rr,{rowAutoHeight:Pe,columnOrder:Te}),Gt.map(p=>R.jsx(wn,{row:p,rowAutoHeight:Pe,columnOrder:Te},p.id))]}):R.jsxs(R.Fragment,{children:[d.length||Qe.length?R.jsx(Rr,{rowAutoHeight:Pe,columnOrder:Te,enableColumnsOrderSortByDrag:Je}):null,Qe.length?R.jsx("div",{className:qt.topRowWrapper,children:Qe.map(p=>R.jsx(wn,{row:p,onRowClick:b,rowAutoHeight:Pe,columnOrder:Te,enableColumnsOrderSortByDrag:Je},p.id))}):null,d.map(p=>R.jsx(wn,{row:p,onRowClick:b,rowAutoHeight:Pe,columnOrder:Te,enableColumnsOrderSortByDrag:Je},p.id)),e.length>0&&w&&E&&!q&&R.jsx(ma,{loading:!0,children:Gt.slice(0,3).map(p=>R.jsx(wn,{row:p,columnOrder:Te,enableColumnsOrderSortByDrag:Je},p.id))}),R.jsx(Ii,{emptyStates:k,dataError:q,dataFiltered:L||!!te.getState().globalFilter,tableRowsLength:Ct.length+Qe.length})]})})})})}),R.jsx("div",{className:qt.scrollStub,ref:At})]}),!w&&!Z&&R.jsx(Mi,{table:te,options:c==null?void 0:c.options,optionsLabel:c==null?void 0:c.optionsLabel,pageCount:C,optionsRender:c==null?void 0:c.optionsRender})]})}qe.getStatusColumnDef=Ri;qe.statusAppearances=la;qe.getRowActionsColumnDef=Oi;try{qe.displayName="Table",qe.__docgenInfo={description:"Компонент таблицы",displayName:"Table",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Данные для отрисовки",name:"data",required:!0,type:{name:"TData[]"}},columnDefinitions:{defaultValue:null,description:"Определение внешнего вида и функционала колонок",name:"columnDefinitions",required:!0,type:{name:"ColumnDefinition<TData>[]"}},keepPinnedRows:{defaultValue:{value:"false"},description:"Параметр отвечает за отображение закрепленных строк на всех страницах таблицы",name:"keepPinnedRows",required:!1,type:{name:"boolean"}},copyPinnedRows:{defaultValue:{value:"false"},description:"Параметр отвечает за сохранение закрепленных строк в теле таблицы",name:"copyPinnedRows",required:!1,type:{name:"boolean"}},enableSelectPinned:{defaultValue:{value:"false"},description:"Параметр отвечает за чекбокс выбора закрепленных строк",name:"enableSelectPinned",required:!1,type:{name:"boolean"}},sorting:{defaultValue:null,description:`Параметры отвечают за возможность сортировки, их стоит использовать если нужно отслеживать состояние <br>
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
(e.g фильтры, сортировки, и т.д)`,name:"autoResetPageIndex",required:!1,type:{name:"boolean"}},pageCount:{defaultValue:null,description:"Кол-во страниц (используется для внешнего управления)",name:"pageCount",required:!1,type:{name:"number"}},infiniteLoading:{defaultValue:{value:"false"},description:'Режим работы "бесконечной" загрузки',name:"infiniteLoading",required:!1,type:{name:"boolean"}},suppressPagination:{defaultValue:{value:"false"},description:"Отключение пагинации",name:"suppressPagination",required:!1,type:{name:"boolean"}},manualPagination:{defaultValue:null,description:"",name:"manualPagination",required:!1,type:{name:"boolean"}}}}}catch{}try{qe.getStatusColumnDef.displayName="Table.getStatusColumnDef",qe.getStatusColumnDef.__docgenInfo={description:"Вспомогательная функция для создания ячейки со статусом",displayName:"Table.getStatusColumnDef",props:{accessorKey:{defaultValue:null,description:"Имя ключа соответствующее полю в data",name:"accessorKey",required:!0,type:{name:"string"}},mapStatusToAppearance:{defaultValue:null,description:"Маппинг значений статуса на цвета",name:"mapStatusToAppearance",required:!0,type:{name:"MapStatusToAppearanceFnType"}},enableSorting:{defaultValue:{value:"true"},description:"Включение/выключение сортировки",name:"enableSorting",required:!1,type:{name:"boolean"}},renderDescription:{defaultValue:null,description:"Функция для отрисовки текста, если не передана, то будет отрисован только индикатор статуса",name:"renderDescription",required:!1,type:{name:"((cellValue: string, row: TData) => string)"}},size:{defaultValue:null,description:"Размер ячейки",name:"size",required:!1,type:{name:"number"}},minSize:{defaultValue:null,description:"",name:"minSize",required:!1,type:{name:"number"}},maxSize:{defaultValue:null,description:"",name:"maxSize",required:!1,type:{name:"number"}},header:{defaultValue:null,description:"Заголовок колонки",name:"header",required:!1,type:{name:"string | (string & ReactElement<any, string | JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | ... 10 more ..."}},enableResizing:{defaultValue:null,description:"Включение/выключение ресайза колонки",name:"enableResizing",required:!1,type:{name:"boolean"}}}}}catch{}try{qe.getRowActionsColumnDef.displayName="Table.getRowActionsColumnDef",qe.getRowActionsColumnDef.__docgenInfo={description:"Вспомогательная функция для создания ячейки с дополнительными действиями у строки",displayName:"Table.getRowActionsColumnDef",props:{actionsGenerator:{defaultValue:null,description:"Действия для строки",name:"actionsGenerator",required:!0,type:{name:"ActionsGenerator<TData>"}},pinned:{defaultValue:null,description:"Закрепление колонки справа в таблице",name:"pinned",required:!1,type:{name:"boolean"}}}}}catch{}/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */var mr=function(n){return String.fromCharCode(n)},dt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function Wa(e){for(var n="",t=0,r=0,i=0,a=0,o=0,u=0,s=0,l=0;l<e.length;)t=e.charCodeAt(l++),a=t>>2,r=e.charCodeAt(l++),o=(t&3)<<4|r>>4,i=e.charCodeAt(l++),u=(r&15)<<2|i>>6,s=i&63,isNaN(r)?u=s=64:isNaN(i)&&(s=64),n+=dt.charAt(a)+dt.charAt(o)+dt.charAt(u)+dt.charAt(s);return n}function Fh(e){for(var n="",t=0,r=0,i=0,a=0,o=0,u=0,s=0,l=0;l<e.length;)t=e[l++],a=t>>2,r=e[l++],o=(t&3)<<4|r>>4,i=e[l++],u=(r&15)<<2|i>>6,s=i&63,isNaN(r)?u=s=64:isNaN(i)&&(s=64),n+=dt.charAt(a)+dt.charAt(o)+dt.charAt(u)+dt.charAt(s);return n}function Xa(e){var n="",t=0,r=0,i=0,a=0,o=0,u=0,s=0;if(e.slice(0,5)=="data:"){var l=e.slice(0,1024).indexOf(";base64,");l>-1&&(e=e.slice(l+8))}e=e.replace(/[^\w\+\/\=]/g,"");for(var l=0;l<e.length;)a=dt.indexOf(e.charAt(l++)),o=dt.indexOf(e.charAt(l++)),t=a<<2|o>>4,n+=String.fromCharCode(t),u=dt.indexOf(e.charAt(l++)),r=(o&15)<<4|u>>2,u!==64&&(n+=String.fromCharCode(r)),s=dt.indexOf(e.charAt(l++)),i=(u&3)<<6|s,s!==64&&(n+=String.fromCharCode(i));return n}var le=function(){return typeof Buffer<"u"&&typeof process<"u"&&typeof process.versions<"u"&&!!process.versions.node}(),tn=function(){if(typeof Buffer<"u"){var e=!Buffer.from;if(!e)try{Buffer.from("foo","utf8")}catch{e=!0}return e?function(n,t){return t?new Buffer(n,t):new Buffer(n)}:Buffer.from.bind(Buffer)}return function(){}}(),Lr=function(){if(typeof Buffer>"u")return!1;var e=tn([65,0]);if(!e)return!1;var n=e.toString("utf16le");return n.length==1}();function Fn(e){return le?Buffer.alloc?Buffer.alloc(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}function Ka(e){return le?Buffer.allocUnsafe?Buffer.allocUnsafe(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}var Kt=function(n){return le?tn(n,"binary"):n.split("").map(function(t){return t.charCodeAt(0)&255})};function ca(e){if(typeof ArrayBuffer>"u")return Kt(e);for(var n=new ArrayBuffer(e.length),t=new Uint8Array(n),r=0;r!=e.length;++r)t[r]=e.charCodeAt(r)&255;return n}function Dh(e){if(Array.isArray(e))return e.map(function(r){return String.fromCharCode(r)}).join("");for(var n=[],t=0;t<e.length;++t)n[t]=String.fromCharCode(e[t]);return n.join("")}function Nh(e){if(typeof Uint8Array>"u")throw new Error("Unsupported");return new Uint8Array(e)}var yn=le?function(e){return Buffer.concat(e.map(function(n){return Buffer.isBuffer(n)?n:tn(n)}))}:function(e){if(typeof Uint8Array<"u"){var n=0,t=0;for(n=0;n<e.length;++n)t+=e[n].length;var r=new Uint8Array(t),i=0;for(n=0,t=0;n<e.length;t+=i,++n)i=e[n].length,e[n]instanceof Uint8Array?r.set(e[n],t):typeof e[n]=="string"?r.set(new Uint8Array(Kt(e[n])),t):r.set(new Uint8Array(e[n]),t);return r}return[].concat.apply([],e.map(function(a){return Array.isArray(a)?a:[].slice.call(a)}))};function Rh(e){for(var n=[],t=0,r=e.length+250,i=Fn(e.length+255),a=0;a<e.length;++a){var o=e.charCodeAt(a);if(o<128)i[t++]=o;else if(o<2048)i[t++]=192|o>>6&31,i[t++]=128|o&63;else if(o>=55296&&o<57344){o=(o&1023)+64;var u=e.charCodeAt(++a)&1023;i[t++]=240|o>>8&7,i[t++]=128|o>>2&63,i[t++]=128|u>>6&15|(o&3)<<4,i[t++]=128|u&63}else i[t++]=224|o>>12&15,i[t++]=128|o>>6&63,i[t++]=128|o&63;t>r&&(n.push(i.slice(0,t)),t=0,i=Fn(65535),r=65530)}return n.push(i.slice(0,t)),yn(n)}var Wn=/\u0000/g,br=/[\u0001-\u0006]/g;function An(e){for(var n="",t=e.length-1;t>=0;)n+=e.charAt(t--);return n}function St(e,n){var t=""+e;return t.length>=n?t:Le("0",n-t.length)+t}function da(e,n){var t=""+e;return t.length>=n?t:Le(" ",n-t.length)+t}function Hr(e,n){var t=""+e;return t.length>=n?t:t+Le(" ",n-t.length)}function Lh(e,n){var t=""+Math.round(e);return t.length>=n?t:Le("0",n-t.length)+t}function Hh(e,n){var t=""+e;return t.length>=n?t:Le("0",n-t.length)+t}var Ya=Math.pow(2,32);function kn(e,n){if(e>Ya||e<-Ya)return Lh(e,n);var t=Math.round(e);return Hh(t,n)}function Tr(e,n){return n=n||0,e.length>=7+n&&(e.charCodeAt(n)|32)===103&&(e.charCodeAt(n+1)|32)===101&&(e.charCodeAt(n+2)|32)===110&&(e.charCodeAt(n+3)|32)===101&&(e.charCodeAt(n+4)|32)===114&&(e.charCodeAt(n+5)|32)===97&&(e.charCodeAt(n+6)|32)===108}var Ja=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]],ci=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]];function Th(e){return e||(e={}),e[0]="General",e[1]="0",e[2]="0.00",e[3]="#,##0",e[4]="#,##0.00",e[9]="0%",e[10]="0.00%",e[11]="0.00E+00",e[12]="# ?/?",e[13]="# ??/??",e[14]="m/d/yy",e[15]="d-mmm-yy",e[16]="d-mmm",e[17]="mmm-yy",e[18]="h:mm AM/PM",e[19]="h:mm:ss AM/PM",e[20]="h:mm",e[21]="h:mm:ss",e[22]="m/d/yy h:mm",e[37]="#,##0 ;(#,##0)",e[38]="#,##0 ;[Red](#,##0)",e[39]="#,##0.00;(#,##0.00)",e[40]="#,##0.00;[Red](#,##0.00)",e[45]="mm:ss",e[46]="[h]:mm:ss",e[47]="mmss.0",e[48]="##0.0E+0",e[49]="@",e[56]='"上午/下午 "hh"時"mm"分"ss"秒 "',e}var xt={0:"General",1:"0",2:"0.00",3:"#,##0",4:"#,##0.00",9:"0%",10:"0.00%",11:"0.00E+00",12:"# ?/?",13:"# ??/??",14:"m/d/yy",15:"d-mmm-yy",16:"d-mmm",17:"mmm-yy",18:"h:mm AM/PM",19:"h:mm:ss AM/PM",20:"h:mm",21:"h:mm:ss",22:"m/d/yy h:mm",37:"#,##0 ;(#,##0)",38:"#,##0 ;[Red](#,##0)",39:"#,##0.00;(#,##0.00)",40:"#,##0.00;[Red](#,##0.00)",45:"mm:ss",46:"[h]:mm:ss",47:"mmss.0",48:"##0.0E+0",49:"@",56:'"上午/下午 "hh"時"mm"分"ss"秒 "'},Za={5:37,6:38,7:39,8:40,23:0,24:0,25:0,26:0,27:14,28:14,29:14,30:14,31:14,50:14,51:14,52:14,53:14,54:14,55:14,56:14,57:14,58:14,59:1,60:2,61:3,62:4,67:9,68:10,69:12,70:13,71:14,72:14,73:15,74:16,75:17,76:20,77:21,78:22,79:45,80:46,81:47,82:0},Ih={5:'"$"#,##0_);\\("$"#,##0\\)',63:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',41:'_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'};function Ir(e,n,t){for(var r=e<0?-1:1,i=e*r,a=0,o=1,u=0,s=1,l=0,c=0,g=Math.floor(i);l<n&&(g=Math.floor(i),u=g*o+a,c=g*l+s,!(i-g<5e-8));)i=1/(i-g),a=o,o=u,s=l,l=c;if(c>n&&(l>n?(c=s,u=a):(c=l,u=o)),!t)return[0,r*u,c];var b=Math.floor(r*u/c);return[b,r*u-b*c,c]}function Mh(e){var n=e.toPrecision(16);if(n.indexOf("e")>-1){var t=n.slice(0,n.indexOf("e"));return t=t.indexOf(".")>-1?t.slice(0,t.slice(0,2)=="0."?17:16):t.slice(0,15)+Le("0",t.length-15),t+n.slice(n.indexOf("e"))}var r=n.indexOf(".")>-1?n.slice(0,n.slice(0,2)=="0."?17:16):n.slice(0,15)+Le("0",n.length-15);return Number(r)}function vn(e,n,t){if(e>2958465||e<0)return null;e=Mh(e);var r=e|0,i=Math.floor(86400*(e-r)),a=0,o=[],u={D:r,T:i,u:86400*(e-r)-i,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(u.u)<1e-6&&(u.u=0),n&&n.date1904&&(r+=1462),u.u>.9999&&(u.u=0,++i==86400&&(u.T=i=0,++r,++u.D)),r===60)o=t?[1317,10,29]:[1900,2,29],a=3;else if(r===0)o=t?[1317,8,29]:[1900,1,0],a=6;else{r>60&&--r;var s=new Date(1900,0,1);s.setDate(s.getDate()+r-1),o=[s.getFullYear(),s.getMonth()+1,s.getDate()],a=s.getDay(),r<60&&(a=(a+6)%7),t&&(a=$h(s,o))}return u.y=o[0],u.m=o[1],u.d=o[2],u.S=i%60,i=Math.floor(i/60),u.M=i%60,i=Math.floor(i/60),u.H=i,u.q=a,u}function ha(e){return e.indexOf(".")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/,"$1")}function Ph(e){return e.indexOf("E")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/,"$1E").replace(/(E[+-])(\d)$/,"$10$2")}function Bh(e){var n=e<0?12:11,t=ha(e.toFixed(12));return t.length<=n||(t=e.toPrecision(10),t.length<=n)?t:e.toExponential(5)}function Vh(e){var n=ha(e.toFixed(11));return n.length>(e<0?12:11)||n==="0"||n==="-0"?e.toPrecision(6):n}function zh(e){if(!isFinite(e))return isNaN(e)?"#NUM!":"#DIV/0!";var n=Math.floor(Math.log(Math.abs(e))*Math.LOG10E),t;return n>=-4&&n<=-1?t=e.toPrecision(10+n):Math.abs(n)<=9?t=Bh(e):n===10?t=e.toFixed(10).substr(0,12):t=Vh(e),ha(Ph(t.toUpperCase()))}function zi(e,n){switch(typeof e){case"string":return e;case"boolean":return e?"TRUE":"FALSE";case"number":return(e|0)===e?e.toString(10):zh(e);case"undefined":return"";case"object":if(e==null)return"";if(e instanceof Date)return Qn(14,$t(e,n&&n.date1904),n)}throw new Error("unsupported value in General format: "+e)}function $h(e,n){n[0]-=581;var t=e.getDay();return e<60&&(t=(t+6)%7),t}function jh(e,n,t,r){var i="",a=0,o=0,u=t.y,s,l=0;switch(e){case 98:u=t.y+543;case 121:switch(n.length){case 1:case 2:s=u%100,l=2;break;default:s=u%1e4,l=4;break}break;case 109:switch(n.length){case 1:case 2:s=t.m,l=n.length;break;case 3:return ci[t.m-1][1];case 5:return ci[t.m-1][0];default:return ci[t.m-1][2]}break;case 100:switch(n.length){case 1:case 2:s=t.d,l=n.length;break;case 3:return Ja[t.q][0];default:return Ja[t.q][1]}break;case 104:switch(n.length){case 1:case 2:s=1+(t.H+11)%12,l=n.length;break;default:throw"bad hour format: "+n}break;case 72:switch(n.length){case 1:case 2:s=t.H,l=n.length;break;default:throw"bad hour format: "+n}break;case 77:switch(n.length){case 1:case 2:s=t.M,l=n.length;break;default:throw"bad minute format: "+n}break;case 115:if(n!="s"&&n!="ss"&&n!=".0"&&n!=".00"&&n!=".000")throw"bad second format: "+n;return t.u===0&&(n=="s"||n=="ss")?St(t.S,n.length):(r>=2?o=r===3?1e3:100:o=r===1?10:1,a=Math.round(o*(t.S+t.u)),a>=60*o&&(a=0),n==="s"?a===0?"0":""+a/o:(i=St(a,2+r),n==="ss"?i.substr(0,2):"."+i.substr(2,n.length-1)));case 90:switch(n){case"[h]":case"[hh]":s=t.D*24+t.H;break;case"[m]":case"[mm]":s=(t.D*24+t.H)*60+t.M;break;case"[s]":case"[ss]":s=((t.D*24+t.H)*60+t.M)*60+(r==0?Math.round(t.S+t.u):t.S);break;default:throw"bad abstime format: "+n}l=n.length===3?1:2;break;case 101:s=u,l=1;break}var c=l>0?St(s,l):"";return c}function Zt(e){var n=3;if(e.length<=n)return e;for(var t=e.length%n,r=e.substr(0,t);t!=e.length;t+=n)r+=(r.length>0?",":"")+e.substr(t,n);return r}var _u=/%/g;function Uh(e,n,t){var r=n.replace(_u,""),i=n.length-r.length;return zt(e,r,t*Math.pow(10,2*i))+Le("%",i)}function qh(e,n,t){for(var r=n.length-1;n.charCodeAt(r-1)===44;)--r;return zt(e,n.substr(0,r),t/Math.pow(10,3*(n.length-r)))}function Au(e,n){var t,r=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(n==0)return"0.0E+0";if(n<0)return"-"+Au(e,-n);var i=e.indexOf(".");i===-1&&(i=e.indexOf("E"));var a=Math.floor(Math.log(n)*Math.LOG10E)%i;if(a<0&&(a+=i),t=(n/Math.pow(10,a)).toPrecision(r+1+(i+a)%i),t.indexOf("e")===-1){var o=Math.floor(Math.log(n)*Math.LOG10E);for(t.indexOf(".")===-1?t=t.charAt(0)+"."+t.substr(1)+"E+"+(o-t.length+a):t+="E+"+(o-a);t.substr(0,2)==="0.";)t=t.charAt(0)+t.substr(2,i)+"."+t.substr(2+i),t=t.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.");t=t.replace(/\+-/,"-")}t=t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(u,s,l,c){return s+l+c.substr(0,(i+a)%i)+"."+c.substr(a)+"E"})}else t=n.toExponential(r);return e.match(/E\+00$/)&&t.match(/e[+-]\d$/)&&(t=t.substr(0,t.length-1)+"0"+t.charAt(t.length-1)),e.match(/E\-/)&&t.match(/e\+/)&&(t=t.replace(/e\+/,"e")),t.replace("e","E")}var Ou=/# (\?+)( ?)\/( ?)(\d+)/;function Wh(e,n,t){var r=parseInt(e[4],10),i=Math.round(n*r),a=Math.floor(i/r),o=i-a*r,u=r;return t+(a===0?"":""+a)+" "+(o===0?Le(" ",e[1].length+1+e[4].length):da(o,e[1].length)+e[2]+"/"+e[3]+St(u,e[4].length))}function Xh(e,n,t){return t+(n===0?"":""+n)+Le(" ",e[1].length+2+e[4].length)}var Gu=/^#*0*\.([0#]+)/,Fu=/\)[^)]*[0#]/,Du=/\(###\) ###\\?-####/;function Ie(e){for(var n="",t,r=0;r!=e.length;++r)switch(t=e.charCodeAt(r)){case 35:break;case 63:n+=" ";break;case 48:n+="0";break;default:n+=String.fromCharCode(t)}return n}function Qa(e,n){var t=Math.pow(10,n);return""+Math.round(e*t)/t}function eo(e,n){var t=e-Math.floor(e),r=Math.pow(10,n);return n<(""+Math.round(t*r)).length?0:Math.round(t*r)}function Kh(e,n){return n<(""+Math.round((e-Math.floor(e))*Math.pow(10,n))).length?1:0}function Yh(e){return e<2147483647&&e>-2147483648?""+(e>=0?e|0:e-1|0):""+Math.floor(e)}function lt(e,n,t){if(e.charCodeAt(0)===40&&!n.match(Fu)){var r=n.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return t>=0?lt("n",r,t):"("+lt("n",r,-t)+")"}if(n.charCodeAt(n.length-1)===44)return qh(e,n,t);if(n.indexOf("%")!==-1)return Uh(e,n,t);if(n.indexOf("E")!==-1)return Au(n,t);if(n.charCodeAt(0)===36)return"$"+lt(e,n.substr(n.charAt(1)==" "?2:1),t);var i,a,o,u,s=Math.abs(t),l=t<0?"-":"";if(n.match(/^00+$/))return l+kn(s,n.length);if(n.match(/^[#?]+$/))return i=kn(t,0),i==="0"&&(i=""),i.length>n.length?i:Ie(n.substr(0,n.length-i.length))+i;if(a=n.match(Ou))return Wh(a,s,l);if(n.match(/^#+0+$/))return l+kn(s,n.length-n.indexOf("0"));if(a=n.match(Gu))return i=Qa(t,a[1].length).replace(/^([^\.]+)$/,"$1."+Ie(a[1])).replace(/\.$/,"."+Ie(a[1])).replace(/\.(\d*)$/,function(S,C){return"."+C+Le("0",Ie(a[1]).length-C.length)}),n.indexOf("0.")!==-1?i:i.replace(/^0\./,".");if(n=n.replace(/^#+([0.])/,"$1"),a=n.match(/^(0*)\.(#*)$/))return l+Qa(s,a[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,a[1].length?"0.":".");if(a=n.match(/^#{1,3},##0(\.?)$/))return l+Zt(kn(s,0));if(a=n.match(/^#,##0\.([#0]*0)$/))return t<0?"-"+lt(e,n,-t):Zt(""+(Math.floor(t)+Kh(t,a[1].length)))+"."+St(eo(t,a[1].length),a[1].length);if(a=n.match(/^#,#*,#0/))return lt(e,n.replace(/^#,#*,/,""),t);if(a=n.match(/^([0#]+)(\\?-([0#]+))+$/))return i=An(lt(e,n.replace(/[\\-]/g,""),t)),o=0,An(An(n.replace(/\\/g,"")).replace(/[0#]/g,function(S){return o<i.length?i.charAt(o++):S==="0"?"0":""}));if(n.match(Du))return i=lt(e,"##########",t),"("+i.substr(0,3)+") "+i.substr(3,3)+"-"+i.substr(6);var c="";if(a=n.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(a[4].length,7),u=Ir(s,Math.pow(10,o)-1,!1),i=""+l,c=zt("n",a[1],u[1]),c.charAt(c.length-1)==" "&&(c=c.substr(0,c.length-1)+"0"),i+=c+a[2]+"/"+a[3],c=Hr(u[2],o),c.length<a[4].length&&(c=Ie(a[4].substr(a[4].length-c.length))+c),i+=c,i;if(a=n.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(Math.max(a[1].length,a[4].length),7),u=Ir(s,Math.pow(10,o)-1,!0),l+(u[0]||(u[1]?"":"0"))+" "+(u[1]?da(u[1],o)+a[2]+"/"+a[3]+Hr(u[2],o):Le(" ",2*o+1+a[2].length+a[3].length));if(a=n.match(/^[#0?]+$/))return i=kn(t,0),n.length<=i.length?i:Ie(n.substr(0,n.length-i.length))+i;if(a=n.match(/^([#0?]+)\.([#0]+)$/)){i=""+t.toFixed(Math.min(a[2].length,10)).replace(/([^0])0+$/,"$1"),o=i.indexOf(".");var g=n.indexOf(".")-o,b=n.length-i.length-g;return Ie(n.substr(0,g)+i+n.substr(n.length-b))}if(a=n.match(/^00,000\.([#0]*0)$/))return o=eo(t,a[1].length),t<0?"-"+lt(e,n,-t):Zt(Yh(t)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(S){return"00,"+(S.length<3?St(0,3-S.length):"")+S})+"."+St(o,a[1].length);switch(n){case"###,##0.00":return lt(e,"#,##0.00",t);case"###,###":case"##,###":case"#,###":var h=Zt(kn(s,0));return h!=="0"?l+h:"";case"###,###.00":return lt(e,"###,##0.00",t).replace(/^0\./,".");case"#,###.00":return lt(e,"#,##0.00",t).replace(/^0\./,".")}throw new Error("unsupported format |"+n+"|")}function Jh(e,n,t){for(var r=n.length-1;n.charCodeAt(r-1)===44;)--r;return zt(e,n.substr(0,r),t/Math.pow(10,3*(n.length-r)))}function Zh(e,n,t){var r=n.replace(_u,""),i=n.length-r.length;return zt(e,r,t*Math.pow(10,2*i))+Le("%",i)}function Nu(e,n){var t,r=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(n==0)return"0.0E+0";if(n<0)return"-"+Nu(e,-n);var i=e.indexOf(".");i===-1&&(i=e.indexOf("E"));var a=Math.floor(Math.log(n)*Math.LOG10E)%i;if(a<0&&(a+=i),t=(n/Math.pow(10,a)).toPrecision(r+1+(i+a)%i),!t.match(/[Ee]/)){var o=Math.floor(Math.log(n)*Math.LOG10E);t.indexOf(".")===-1?t=t.charAt(0)+"."+t.substr(1)+"E+"+(o-t.length+a):t+="E+"+(o-a),t=t.replace(/\+-/,"-")}t=t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(u,s,l,c){return s+l+c.substr(0,(i+a)%i)+"."+c.substr(a)+"E"})}else t=n.toExponential(r);return e.match(/E\+00$/)&&t.match(/e[+-]\d$/)&&(t=t.substr(0,t.length-1)+"0"+t.charAt(t.length-1)),e.match(/E\-/)&&t.match(/e\+/)&&(t=t.replace(/e\+/,"e")),t.replace("e","E")}function Ft(e,n,t){if(e.charCodeAt(0)===40&&!n.match(Fu)){var r=n.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return t>=0?Ft("n",r,t):"("+Ft("n",r,-t)+")"}if(n.charCodeAt(n.length-1)===44)return Jh(e,n,t);if(n.indexOf("%")!==-1)return Zh(e,n,t);if(n.indexOf("E")!==-1)return Nu(n,t);if(n.charCodeAt(0)===36)return"$"+Ft(e,n.substr(n.charAt(1)==" "?2:1),t);var i,a,o,u,s=Math.abs(t),l=t<0?"-":"";if(n.match(/^00+$/))return l+St(s,n.length);if(n.match(/^[#?]+$/))return i=""+t,t===0&&(i=""),i.length>n.length?i:Ie(n.substr(0,n.length-i.length))+i;if(a=n.match(Ou))return Xh(a,s,l);if(n.match(/^#+0+$/))return l+St(s,n.length-n.indexOf("0"));if(a=n.match(Gu))return i=(""+t).replace(/^([^\.]+)$/,"$1."+Ie(a[1])).replace(/\.$/,"."+Ie(a[1])),i=i.replace(/\.(\d*)$/,function(S,C){return"."+C+Le("0",Ie(a[1]).length-C.length)}),n.indexOf("0.")!==-1?i:i.replace(/^0\./,".");if(n=n.replace(/^#+([0.])/,"$1"),a=n.match(/^(0*)\.(#*)$/))return l+(""+s).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,a[1].length?"0.":".");if(a=n.match(/^#{1,3},##0(\.?)$/))return l+Zt(""+s);if(a=n.match(/^#,##0\.([#0]*0)$/))return t<0?"-"+Ft(e,n,-t):Zt(""+t)+"."+Le("0",a[1].length);if(a=n.match(/^#,#*,#0/))return Ft(e,n.replace(/^#,#*,/,""),t);if(a=n.match(/^([0#]+)(\\?-([0#]+))+$/))return i=An(Ft(e,n.replace(/[\\-]/g,""),t)),o=0,An(An(n.replace(/\\/g,"")).replace(/[0#]/g,function(S){return o<i.length?i.charAt(o++):S==="0"?"0":""}));if(n.match(Du))return i=Ft(e,"##########",t),"("+i.substr(0,3)+") "+i.substr(3,3)+"-"+i.substr(6);var c="";if(a=n.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(a[4].length,7),u=Ir(s,Math.pow(10,o)-1,!1),i=""+l,c=zt("n",a[1],u[1]),c.charAt(c.length-1)==" "&&(c=c.substr(0,c.length-1)+"0"),i+=c+a[2]+"/"+a[3],c=Hr(u[2],o),c.length<a[4].length&&(c=Ie(a[4].substr(a[4].length-c.length))+c),i+=c,i;if(a=n.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(Math.max(a[1].length,a[4].length),7),u=Ir(s,Math.pow(10,o)-1,!0),l+(u[0]||(u[1]?"":"0"))+" "+(u[1]?da(u[1],o)+a[2]+"/"+a[3]+Hr(u[2],o):Le(" ",2*o+1+a[2].length+a[3].length));if(a=n.match(/^[#0?]+$/))return i=""+t,n.length<=i.length?i:Ie(n.substr(0,n.length-i.length))+i;if(a=n.match(/^([#0]+)\.([#0]+)$/)){i=""+t.toFixed(Math.min(a[2].length,10)).replace(/([^0])0+$/,"$1"),o=i.indexOf(".");var g=n.indexOf(".")-o,b=n.length-i.length-g;return Ie(n.substr(0,g)+i+n.substr(n.length-b))}if(a=n.match(/^00,000\.([#0]*0)$/))return t<0?"-"+Ft(e,n,-t):Zt(""+t).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(S){return"00,"+(S.length<3?St(0,3-S.length):"")+S})+"."+St(0,a[1].length);switch(n){case"###,###":case"##,###":case"#,###":var h=Zt(""+s);return h!=="0"?l+h:"";default:if(n.match(/\.[0#?]*$/))return Ft(e,n.slice(0,n.lastIndexOf(".")),t)+Ie(n.slice(n.lastIndexOf(".")))}throw new Error("unsupported format |"+n+"|")}function zt(e,n,t){return(t|0)===t?Ft(e,n,t):lt(e,n,t)}function Qh(e){for(var n=[],t=!1,r=0,i=0;r<e.length;++r)switch(e.charCodeAt(r)){case 34:t=!t;break;case 95:case 42:case 92:++r;break;case 59:n[n.length]=e.substr(i,r-i),i=r+1}if(n[n.length]=e.substr(i),t===!0)throw new Error("Format |"+e+"| unterminated string ");return n}var Ru=/\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;function ga(e){for(var n=0,t="",r="";n<e.length;)switch(t=e.charAt(n)){case"G":Tr(e,n)&&(n+=6),n++;break;case'"':for(;e.charCodeAt(++n)!==34&&n<e.length;);++n;break;case"\\":n+=2;break;case"_":n+=2;break;case"@":++n;break;case"B":case"b":if(e.charAt(n+1)==="1"||e.charAt(n+1)==="2")return!0;case"M":case"D":case"Y":case"H":case"S":case"E":case"m":case"d":case"y":case"h":case"s":case"e":case"g":return!0;case"A":case"a":case"上":if(e.substr(n,3).toUpperCase()==="A/P"||e.substr(n,5).toUpperCase()==="AM/PM"||e.substr(n,5).toUpperCase()==="上午/下午")return!0;++n;break;case"[":for(r=t;e.charAt(n++)!=="]"&&n<e.length;)r+=e.charAt(n);if(r.match(Ru))return!0;break;case".":case"0":case"#":for(;n<e.length&&("0#?.,E+-%".indexOf(t=e.charAt(++n))>-1||t=="\\"&&e.charAt(n+1)=="-"&&"0#".indexOf(e.charAt(n+2))>-1););break;case"?":for(;e.charAt(++n)===t;);break;case"*":++n,(e.charAt(n)==" "||e.charAt(n)=="*")&&++n;break;case"(":case")":++n;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;n<e.length&&"0123456789".indexOf(e.charAt(++n))>-1;);break;case" ":++n;break;default:++n;break}return!1}function eg(e,n,t,r){for(var i=[],a="",o=0,u="",s="t",l,c,g,b="H";o<e.length;)switch(u=e.charAt(o)){case"G":if(!Tr(e,o))throw new Error("unrecognized character "+u+" in "+e);i[i.length]={t:"G",v:"General"},o+=7;break;case'"':for(a="";(g=e.charCodeAt(++o))!==34&&o<e.length;)a+=String.fromCharCode(g);i[i.length]={t:"t",v:a},++o;break;case"\\":var h=e.charAt(++o),S=h==="("||h===")"?h:"t";i[i.length]={t:S,v:h},++o;break;case"_":i[i.length]={t:"t",v:" "},o+=2;break;case"@":i[i.length]={t:"T",v:n},++o;break;case"B":case"b":if(e.charAt(o+1)==="1"||e.charAt(o+1)==="2"){if(l==null&&(l=vn(n,t,e.charAt(o+1)==="2"),l==null))return"";i[i.length]={t:"X",v:e.substr(o,2)},s=u,o+=2;break}case"M":case"D":case"Y":case"H":case"S":case"E":u=u.toLowerCase();case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(n<0||l==null&&(l=vn(n,t),l==null))return"";for(a=u;++o<e.length&&e.charAt(o).toLowerCase()===u;)a+=u;u==="m"&&s.toLowerCase()==="h"&&(u="M"),u==="h"&&(u=b),i[i.length]={t:u,v:a},s=u;break;case"A":case"a":case"上":var C={t:u,v:u};if(l==null&&(l=vn(n,t)),e.substr(o,3).toUpperCase()==="A/P"?(l!=null&&(C.v=l.H>=12?e.charAt(o+2):u),C.t="T",b="h",o+=3):e.substr(o,5).toUpperCase()==="AM/PM"?(l!=null&&(C.v=l.H>=12?"PM":"AM"),C.t="T",o+=5,b="h"):e.substr(o,5).toUpperCase()==="上午/下午"?(l!=null&&(C.v=l.H>=12?"下午":"上午"),C.t="T",o+=5,b="h"):(C.t="t",++o),l==null&&C.t==="T")return"";i[i.length]=C,s=u;break;case"[":for(a=u;e.charAt(o++)!=="]"&&o<e.length;)a+=e.charAt(o);if(a.slice(-1)!=="]")throw'unterminated "[" block: |'+a+"|";if(a.match(Ru)){if(l==null&&(l=vn(n,t),l==null))return"";i[i.length]={t:"Z",v:a.toLowerCase()},s=a.charAt(1)}else a.indexOf("$")>-1&&(a=(a.match(/\$([^-\[\]]*)/)||[])[1]||"$",ga(e)||(i[i.length]={t:"t",v:a}));break;case".":if(l!=null){for(a=u;++o<e.length&&(u=e.charAt(o))==="0";)a+=u;i[i.length]={t:"s",v:a};break}case"0":case"#":for(a=u;++o<e.length&&"0#?.,E+-%".indexOf(u=e.charAt(o))>-1;)a+=u;i[i.length]={t:"n",v:a};break;case"?":for(a=u;e.charAt(++o)===u;)a+=u;i[i.length]={t:u,v:a},s=u;break;case"*":++o,(e.charAt(o)==" "||e.charAt(o)=="*")&&++o;break;case"(":case")":i[i.length]={t:r===1?"t":u,v:u},++o;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(a=u;o<e.length&&"0123456789".indexOf(e.charAt(++o))>-1;)a+=e.charAt(o);i[i.length]={t:"D",v:a};break;case" ":i[i.length]={t:u,v:u},++o;break;case"$":i[i.length]={t:"t",v:"$"},++o;break;default:if(",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(u)===-1)throw new Error("unrecognized character "+u+" in "+e);i[i.length]={t:"t",v:u},++o;break}var E=0,w=0,D;for(o=i.length-1,s="t";o>=0;--o)switch(i[o].t){case"h":case"H":i[o].t=b,s="h",E<1&&(E=1);break;case"s":(D=i[o].v.match(/\.0+$/))&&(w=Math.max(w,D[0].length-1),E=4),E<3&&(E=3);case"d":case"y":case"e":s=i[o].t;break;case"M":s=i[o].t,E<2&&(E=2);break;case"m":s==="s"&&(i[o].t="M",E<2&&(E=2));break;case"X":break;case"Z":E<1&&i[o].v.match(/[Hh]/)&&(E=1),E<2&&i[o].v.match(/[Mm]/)&&(E=2),E<3&&i[o].v.match(/[Ss]/)&&(E=3)}var N;switch(E){case 0:break;case 1:case 2:case 3:l.u>=.5&&(l.u=0,++l.S),l.S>=60&&(l.S=0,++l.M),l.M>=60&&(l.M=0,++l.H),l.H>=24&&(l.H=0,++l.D,N=vn(l.D),N.u=l.u,N.S=l.S,N.M=l.M,N.H=l.H,l=N);break;case 4:switch(w){case 1:l.u=Math.round(l.u*10)/10;break;case 2:l.u=Math.round(l.u*100)/100;break;case 3:l.u=Math.round(l.u*1e3)/1e3;break}l.u>=1&&(l.u=0,++l.S),l.S>=60&&(l.S=0,++l.M),l.M>=60&&(l.M=0,++l.H),l.H>=24&&(l.H=0,++l.D,N=vn(l.D),N.u=l.u,N.S=l.S,N.M=l.M,N.H=l.H,l=N);break}var V="",L;for(o=0;o<i.length;++o)switch(i[o].t){case"t":case"T":case" ":case"D":break;case"X":i[o].v="",i[o].t=";";break;case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":i[o].v=jh(i[o].t.charCodeAt(0),i[o].v,l,w),i[o].t="t";break;case"n":case"?":for(L=o+1;i[L]!=null&&((u=i[L].t)==="?"||u==="D"||(u===" "||u==="t")&&i[L+1]!=null&&(i[L+1].t==="?"||i[L+1].t==="t"&&i[L+1].v==="/")||i[o].t==="("&&(u===" "||u==="n"||u===")")||u==="t"&&(i[L].v==="/"||i[L].v===" "&&i[L+1]!=null&&i[L+1].t=="?"));)i[o].v+=i[L].v,i[L]={v:"",t:";"},++L;V+=i[o].v,o=L-1;break;case"G":i[o].t="t",i[o].v=zi(n,t);break}var q="",G,P;if(V.length>0){V.charCodeAt(0)==40?(G=n<0&&V.charCodeAt(0)===45?-n:n,P=zt("n",V,G)):(G=n<0&&r>1?-n:n,P=zt("n",V,G),G<0&&i[0]&&i[0].t=="t"&&(P=P.substr(1),i[0].v="-"+i[0].v)),L=P.length-1;var H=i.length;for(o=0;o<i.length;++o)if(i[o]!=null&&i[o].t!="t"&&i[o].v.indexOf(".")>-1){H=o;break}var j=i.length;if(H===i.length&&P.indexOf("E")===-1){for(o=i.length-1;o>=0;--o)i[o]==null||"n?".indexOf(i[o].t)===-1||(L>=i[o].v.length-1?(L-=i[o].v.length,i[o].v=P.substr(L+1,i[o].v.length)):L<0?i[o].v="":(i[o].v=P.substr(0,L+1),L=-1),i[o].t="t",j=o);L>=0&&j<i.length&&(i[j].v=P.substr(0,L+1)+i[j].v)}else if(H!==i.length&&P.indexOf("E")===-1){for(L=P.indexOf(".")-1,o=H;o>=0;--o)if(!(i[o]==null||"n?".indexOf(i[o].t)===-1)){for(c=i[o].v.indexOf(".")>-1&&o===H?i[o].v.indexOf(".")-1:i[o].v.length-1,q=i[o].v.substr(c+1);c>=0;--c)L>=0&&(i[o].v.charAt(c)==="0"||i[o].v.charAt(c)==="#")&&(q=P.charAt(L--)+q);i[o].v=q,i[o].t="t",j=o}for(L>=0&&j<i.length&&(i[j].v=P.substr(0,L+1)+i[j].v),L=P.indexOf(".")+1,o=H;o<i.length;++o)if(!(i[o]==null||"n?(".indexOf(i[o].t)===-1&&o!==H)){for(c=i[o].v.indexOf(".")>-1&&o===H?i[o].v.indexOf(".")+1:0,q=i[o].v.substr(0,c);c<i[o].v.length;++c)L<P.length&&(q+=P.charAt(L++));i[o].v=q,i[o].t="t",j=o}}}for(o=0;o<i.length;++o)i[o]!=null&&"n?".indexOf(i[o].t)>-1&&(G=r>1&&n<0&&o>0&&i[o-1].v==="-"?-n:n,i[o].v=zt(i[o].t,i[o].v,G),i[o].t="t");var M="";for(o=0;o!==i.length;++o)i[o]!=null&&(M+=i[o].v);return M}var to=/\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;function no(e,n){if(n==null)return!1;var t=parseFloat(n[2]);switch(n[1]){case"=":if(e==t)return!0;break;case">":if(e>t)return!0;break;case"<":if(e<t)return!0;break;case"<>":if(e!=t)return!0;break;case">=":if(e>=t)return!0;break;case"<=":if(e<=t)return!0;break}return!1}function tg(e,n){var t=Qh(e),r=t.length,i=t[r-1].indexOf("@");if(r<4&&i>-1&&--r,t.length>4)throw new Error("cannot find right format for |"+t.join("|")+"|");if(typeof n!="number")return[4,t.length===4||i>-1?t[t.length-1]:"@"];switch(typeof n=="number"&&!isFinite(n)&&(n=0),t.length){case 1:t=i>-1?["General","General","General",t[0]]:[t[0],t[0],t[0],"@"];break;case 2:t=i>-1?[t[0],t[0],t[0],t[1]]:[t[0],t[1],t[0],"@"];break;case 3:t=i>-1?[t[0],t[1],t[0],t[2]]:[t[0],t[1],t[2],"@"];break}var a=n>0?t[0]:n<0?t[1]:t[2];if(t[0].indexOf("[")===-1&&t[1].indexOf("[")===-1)return[r,a];if(t[0].match(/\[[=<>]/)!=null||t[1].match(/\[[=<>]/)!=null){var o=t[0].match(to),u=t[1].match(to);return no(n,o)?[r,t[0]]:no(n,u)?[r,t[1]]:[r,t[o!=null&&u!=null?2:1]]}return[r,a]}function Qn(e,n,t){t==null&&(t={});var r="";switch(typeof e){case"string":e=="m/d/yy"&&t.dateNF?r=t.dateNF:r=e;break;case"number":e==14&&t.dateNF?r=t.dateNF:r=(t.table!=null?t.table:xt)[e],r==null&&(r=t.table&&t.table[Za[e]]||xt[Za[e]]),r==null&&(r=Ih[e]||"General");break}if(Tr(r,0))return zi(n,t);n instanceof Date&&(n=$t(n,t.date1904));var i=tg(r,n);if(Tr(i[1]))return zi(n,t);if(n===!0)n="TRUE";else if(n===!1)n="FALSE";else{if(n===""||n==null)return"";if(isNaN(n)&&i[1].indexOf("0")>-1)return"#NUM!";if(!isFinite(n)&&i[1].indexOf("0")>-1)return"#DIV/0!"}return eg(i[1],n,t,i[0])}function Lu(e,n){if(typeof n!="number"){n=+n||-1;for(var t=0;t<392;++t){if(xt[t]==null){n<0&&(n=t);continue}if(xt[t]==e){n=t;break}}n<0&&(n=391)}return xt[n]=e,n}function ng(e){for(var n=0;n!=392;++n)e[n]!==void 0&&Lu(e[n],n)}function rg(){xt=Th()}var ig={"d.m":"d\\.m"};function ag(e,n){return Lu(ig[e]||e,n)}var ro=function(){var e={};e.version="1.2.0";function n(){for(var G=0,P=new Array(256),H=0;H!=256;++H)G=H,G=G&1?-306674912^G>>>1:G>>>1,G=G&1?-306674912^G>>>1:G>>>1,G=G&1?-306674912^G>>>1:G>>>1,G=G&1?-306674912^G>>>1:G>>>1,G=G&1?-306674912^G>>>1:G>>>1,G=G&1?-306674912^G>>>1:G>>>1,G=G&1?-306674912^G>>>1:G>>>1,G=G&1?-306674912^G>>>1:G>>>1,P[H]=G;return typeof Int32Array<"u"?new Int32Array(P):P}var t=n();function r(G){var P=0,H=0,j=0,M=typeof Int32Array<"u"?new Int32Array(4096):new Array(4096);for(j=0;j!=256;++j)M[j]=G[j];for(j=0;j!=256;++j)for(H=G[j],P=256+j;P<4096;P+=256)H=M[P]=H>>>8^G[H&255];var X=[];for(j=1;j!=16;++j)X[j-1]=typeof Int32Array<"u"&&typeof M.subarray=="function"?M.subarray(j*256,j*256+256):M.slice(j*256,j*256+256);return X}var i=r(t),a=i[0],o=i[1],u=i[2],s=i[3],l=i[4],c=i[5],g=i[6],b=i[7],h=i[8],S=i[9],C=i[10],E=i[11],w=i[12],D=i[13],N=i[14];function V(G,P){for(var H=P^-1,j=0,M=G.length;j<M;)H=H>>>8^t[(H^G.charCodeAt(j++))&255];return~H}function L(G,P){for(var H=P^-1,j=G.length-15,M=0;M<j;)H=N[G[M++]^H&255]^D[G[M++]^H>>8&255]^w[G[M++]^H>>16&255]^E[G[M++]^H>>>24]^C[G[M++]]^S[G[M++]]^h[G[M++]]^b[G[M++]]^g[G[M++]]^c[G[M++]]^l[G[M++]]^s[G[M++]]^u[G[M++]]^o[G[M++]]^a[G[M++]]^t[G[M++]];for(j+=15;M<j;)H=H>>>8^t[(H^G[M++])&255];return~H}function q(G,P){for(var H=P^-1,j=0,M=G.length,X=0,Z=0;j<M;)X=G.charCodeAt(j++),X<128?H=H>>>8^t[(H^X)&255]:X<2048?(H=H>>>8^t[(H^(192|X>>6&31))&255],H=H>>>8^t[(H^(128|X&63))&255]):X>=55296&&X<57344?(X=(X&1023)+64,Z=G.charCodeAt(j++)&1023,H=H>>>8^t[(H^(240|X>>8&7))&255],H=H>>>8^t[(H^(128|X>>2&63))&255],H=H>>>8^t[(H^(128|Z>>6&15|(X&3)<<4))&255],H=H>>>8^t[(H^(128|Z&63))&255]):(H=H>>>8^t[(H^(224|X>>12&15))&255],H=H>>>8^t[(H^(128|X>>6&63))&255],H=H>>>8^t[(H^(128|X&63))&255]);return~H}return e.table=t,e.bstr=V,e.buf=L,e.str=q,e}(),yt=function(){var n={};n.version="1.2.2";function t(d,k){for(var f=d.split("/"),m=k.split("/"),p=0,v=0,A=Math.min(f.length,m.length);p<A;++p){if(v=f[p].length-m[p].length)return v;if(f[p]!=m[p])return f[p]<m[p]?-1:1}return f.length-m.length}function r(d){if(d.charAt(d.length-1)=="/")return d.slice(0,-1).indexOf("/")===-1?d:r(d.slice(0,-1));var k=d.lastIndexOf("/");return k===-1?d:d.slice(0,k+1)}function i(d){if(d.charAt(d.length-1)=="/")return i(d.slice(0,-1));var k=d.lastIndexOf("/");return k===-1?d:d.slice(k+1)}function a(d,k){typeof k=="string"&&(k=new Date(k));var f=k.getHours();f=f<<6|k.getMinutes(),f=f<<5|k.getSeconds()>>>1,d.write_shift(2,f);var m=k.getFullYear()-1980;m=m<<4|k.getMonth()+1,m=m<<5|k.getDate(),d.write_shift(2,m)}function o(d){var k=d.read_shift(2)&65535,f=d.read_shift(2)&65535,m=new Date,p=f&31;f>>>=5;var v=f&15;f>>>=4,m.setMilliseconds(0),m.setFullYear(f+1980),m.setMonth(v-1),m.setDate(p);var A=k&31;k>>>=5;var F=k&63;return k>>>=6,m.setHours(k),m.setMinutes(F),m.setSeconds(A<<1),m}function u(d){Wt(d,0);for(var k={},f=0;d.l<=d.length-4;){var m=d.read_shift(2),p=d.read_shift(2),v=d.l+p,A={};switch(m){case 21589:f=d.read_shift(1),f&1&&(A.mtime=d.read_shift(4)),p>5&&(f&2&&(A.atime=d.read_shift(4)),f&4&&(A.ctime=d.read_shift(4))),A.mtime&&(A.mt=new Date(A.mtime*1e3));break;case 1:{var F=d.read_shift(4),x=d.read_shift(4);A.usz=x*Math.pow(2,32)+F,F=d.read_shift(4),x=d.read_shift(4),A.csz=x*Math.pow(2,32)+F}break}d.l=v,k[m]=A}return k}var s;function l(){return s||(s=og)}function c(d,k){if(d[0]==80&&d[1]==75)return bn(d,k);if((d[0]|32)==109&&(d[1]|32)==105)return Ct(d,k);if(d.length<512)throw new Error("CFB file size "+d.length+" < 512");var f=3,m=512,p=0,v=0,A=0,F=0,x=0,O=[],_=d.slice(0,512);Wt(_,0);var I=g(_);switch(f=I[0],f){case 3:m=512;break;case 4:m=4096;break;case 0:if(I[1]==0)return bn(d,k);default:throw new Error("Major Version: Expected 3 or 4 saw "+f)}m!==512&&(_=d.slice(0,m),Wt(_,28));var B=d.slice(0,m);b(_,f);var U=_.read_shift(4,"i");if(f===3&&U!==0)throw new Error("# Directory Sectors: Expected 0 saw "+U);_.l+=4,A=_.read_shift(4,"i"),_.l+=4,_.chk("00100000","Mini Stream Cutoff Size: "),F=_.read_shift(4,"i"),p=_.read_shift(4,"i"),x=_.read_shift(4,"i"),v=_.read_shift(4,"i");for(var T=-1,z=0;z<109&&(T=_.read_shift(4,"i"),!(T<0));++z)O[z]=T;var J=h(d,m);E(x,v,J,m,O);var ue=D(J,A,O,m);A<ue.length&&(ue[A].name="!Directory"),p>0&&F!==Z&&(ue[F].name="!MiniFAT"),ue[O[0]].name="!FAT",ue.fat_addrs=O,ue.ssz=m;var oe={},he=[],ln=[],jt=[];N(A,ue,J,he,p,oe,ln,F),S(ln,jt,he),he.shift();var Hn={FileIndex:ln,FullPaths:jt};return k&&k.raw&&(Hn.raw={header:B,sectors:J}),Hn}function g(d){if(d[d.l]==80&&d[d.l+1]==75)return[0,0];d.chk(re,"Header Signature: "),d.l+=16;var k=d.read_shift(2,"u");return[d.read_shift(2,"u"),k]}function b(d,k){var f=9;switch(d.l+=2,f=d.read_shift(2)){case 9:if(k!=3)throw new Error("Sector Shift: Expected 9 saw "+f);break;case 12:if(k!=4)throw new Error("Sector Shift: Expected 12 saw "+f);break;default:throw new Error("Sector Shift: Expected 9 or 12 saw "+f)}d.chk("0600","Mini Sector Shift: "),d.chk("000000000000","Reserved: ")}function h(d,k){for(var f=Math.ceil(d.length/k)-1,m=[],p=1;p<f;++p)m[p-1]=d.slice(p*k,(p+1)*k);return m[f-1]=d.slice(f*k),m}function S(d,k,f){for(var m=0,p=0,v=0,A=0,F=0,x=f.length,O=[],_=[];m<x;++m)O[m]=_[m]=m,k[m]=f[m];for(;F<_.length;++F)m=_[F],p=d[m].L,v=d[m].R,A=d[m].C,O[m]===m&&(p!==-1&&O[p]!==p&&(O[m]=O[p]),v!==-1&&O[v]!==v&&(O[m]=O[v])),A!==-1&&(O[A]=m),p!==-1&&m!=O[m]&&(O[p]=O[m],_.lastIndexOf(p)<F&&_.push(p)),v!==-1&&m!=O[m]&&(O[v]=O[m],_.lastIndexOf(v)<F&&_.push(v));for(m=1;m<x;++m)O[m]===m&&(v!==-1&&O[v]!==v?O[m]=O[v]:p!==-1&&O[p]!==p&&(O[m]=O[p]));for(m=1;m<x;++m)if(d[m].type!==0){if(F=m,F!=O[F])do F=O[F],k[m]=k[F]+"/"+k[m];while(F!==0&&O[F]!==-1&&F!=O[F]);O[m]=-1}for(k[0]+="/",m=1;m<x;++m)d[m].type!==2&&(k[m]+="/")}function C(d,k,f){for(var m=d.start,p=d.size,v=[],A=m;f&&p>0&&A>=0;)v.push(k.slice(A*X,A*X+X)),p-=X,A=En(f,A*4);return v.length===0?Bt(0):yn(v).slice(0,d.size)}function E(d,k,f,m,p){var v=Z;if(d===Z){if(k!==0)throw new Error("DIFAT chain shorter than expected")}else if(d!==-1){var A=f[d],F=(m>>>2)-1;if(!A)return;for(var x=0;x<F&&(v=En(A,x*4))!==Z;++x)p.push(v);k>=1&&E(En(A,m-4),k-1,f,m,p)}}function w(d,k,f,m,p){var v=[],A=[];p||(p=[]);var F=m-1,x=0,O=0;for(x=k;x>=0;){p[x]=!0,v[v.length]=x,A.push(d[x]);var _=f[Math.floor(x*4/m)];if(O=x*4&F,m<4+O)throw new Error("FAT boundary crossed: "+x+" 4 "+m);if(!d[_])break;x=En(d[_],O)}return{nodes:v,data:lo([A])}}function D(d,k,f,m){var p=d.length,v=[],A=[],F=[],x=[],O=m-1,_=0,I=0,B=0,U=0;for(_=0;_<p;++_)if(F=[],B=_+k,B>=p&&(B-=p),!A[B]){x=[];var T=[];for(I=B;I>=0;){T[I]=!0,A[I]=!0,F[F.length]=I,x.push(d[I]);var z=f[Math.floor(I*4/m)];if(U=I*4&O,m<4+U)throw new Error("FAT boundary crossed: "+I+" 4 "+m);if(!d[z]||(I=En(d[z],U),T[I]))break}v[B]={nodes:F,data:lo([x])}}return v}function N(d,k,f,m,p,v,A,F){for(var x=0,O=m.length?2:0,_=k[d].data,I=0,B=0,U;I<_.length;I+=128){var T=_.slice(I,I+128);Wt(T,64),B=T.read_shift(2),U=fa(T,0,B-O),m.push(U);var z={name:U,type:T.read_shift(1),color:T.read_shift(1),L:T.read_shift(4,"i"),R:T.read_shift(4,"i"),C:T.read_shift(4,"i"),clsid:T.read_shift(16),state:T.read_shift(4,"i"),start:0,size:0},J=T.read_shift(2)+T.read_shift(2)+T.read_shift(2)+T.read_shift(2);J!==0&&(z.ct=V(T,T.l-8));var ue=T.read_shift(2)+T.read_shift(2)+T.read_shift(2)+T.read_shift(2);ue!==0&&(z.mt=V(T,T.l-8)),z.start=T.read_shift(4,"i"),z.size=T.read_shift(4,"i"),z.size<0&&z.start<0&&(z.size=z.type=0,z.start=Z,z.name=""),z.type===5?(x=z.start,p>0&&x!==Z&&(k[x].name="!StreamData")):z.size>=4096?(z.storage="fat",k[z.start]===void 0&&(k[z.start]=w(f,z.start,k.fat_addrs,k.ssz)),k[z.start].name=z.name,z.content=k[z.start].data.slice(0,z.size)):(z.storage="minifat",z.size<0?z.size=0:x!==Z&&z.start!==Z&&k[x]&&(z.content=C(z,k[x].data,(k[F]||{}).data))),z.content&&Wt(z.content,0),v[U]=z,A.push(z)}}function V(d,k){return new Date((et(d,k+4)/1e7*Math.pow(2,32)+et(d,k)/1e7-11644473600)*1e3)}function L(d,k){return l(),c(s.readFileSync(d),k)}function q(d,k){var f=k&&k.type;switch(f||le&&Buffer.isBuffer(d)&&(f="buffer"),f||"base64"){case"file":return L(d,k);case"base64":return c(Kt(Xa(d)),k);case"binary":return c(Kt(d),k)}return c(d,k)}function G(d,k){var f=k||{},m=f.root||"Root Entry";if(d.FullPaths||(d.FullPaths=[]),d.FileIndex||(d.FileIndex=[]),d.FullPaths.length!==d.FileIndex.length)throw new Error("inconsistent CFB structure");d.FullPaths.length===0&&(d.FullPaths[0]=m+"/",d.FileIndex[0]={name:m,type:5}),f.CLSID&&(d.FileIndex[0].clsid=f.CLSID),P(d)}function P(d){var k="Sh33tJ5";if(!yt.find(d,"/"+k)){var f=Bt(4);f[0]=55,f[1]=f[3]=50,f[2]=54,d.FileIndex.push({name:k,type:2,content:f,size:4,L:69,R:69,C:69}),d.FullPaths.push(d.FullPaths[0]+k),H(d)}}function H(d,k){G(d);for(var f=!1,m=!1,p=d.FullPaths.length-1;p>=0;--p){var v=d.FileIndex[p];switch(v.type){case 0:m?f=!0:(d.FileIndex.pop(),d.FullPaths.pop());break;case 1:case 2:case 5:m=!0,isNaN(v.R*v.L*v.C)&&(f=!0),v.R>-1&&v.L>-1&&v.R==v.L&&(f=!0);break;default:f=!0;break}}if(!(!f&&!k)){var A=new Date(1987,1,19),F=0,x=Object.create?Object.create(null):{},O=[];for(p=0;p<d.FullPaths.length;++p)x[d.FullPaths[p]]=!0,d.FileIndex[p].type!==0&&O.push([d.FullPaths[p],d.FileIndex[p]]);for(p=0;p<O.length;++p){var _=r(O[p][0]);for(m=x[_];!m;){for(;r(_)&&!x[r(_)];)_=r(_);O.push([_,{name:i(_).replace("/",""),type:1,clsid:se,ct:A,mt:A,content:null}]),x[_]=!0,_=r(O[p][0]),m=x[_]}}for(O.sort(function(U,T){return t(U[0],T[0])}),d.FullPaths=[],d.FileIndex=[],p=0;p<O.length;++p)d.FullPaths[p]=O[p][0],d.FileIndex[p]=O[p][1];for(p=0;p<O.length;++p){var I=d.FileIndex[p],B=d.FullPaths[p];if(I.name=i(B).replace("/",""),I.L=I.R=I.C=-(I.color=1),I.size=I.content?I.content.length:0,I.start=0,I.clsid=I.clsid||se,p===0)I.C=O.length>1?1:-1,I.size=0,I.type=5;else if(B.slice(-1)=="/"){for(F=p+1;F<O.length&&r(d.FullPaths[F])!=B;++F);for(I.C=F>=O.length?-1:F,F=p+1;F<O.length&&r(d.FullPaths[F])!=r(B);++F);I.R=F>=O.length?-1:F,I.type=1}else r(d.FullPaths[p+1]||"")==r(B)&&(I.R=p+1),I.type=2}}}function j(d,k){var f=k||{};if(f.fileType=="mad")return ge(d,f);switch(H(d),f.fileType){case"zip":return pe(d,f)}var m=function(U){for(var T=0,z=0,J=0;J<U.FileIndex.length;++J){var ue=U.FileIndex[J];if(ue.content){var oe=ue.content.length;oe>0&&(oe<4096?T+=oe+63>>6:z+=oe+511>>9)}}for(var he=U.FullPaths.length+3>>2,ln=T+7>>3,jt=T+127>>7,Hn=ln+z+he+jt,cn=Hn+127>>7,qr=cn<=109?0:Math.ceil((cn-109)/127);Hn+cn+qr+127>>7>cn;)qr=++cn<=109?0:Math.ceil((cn-109)/127);var It=[1,qr,cn,jt,he,z,T,0];return U.FileIndex[0].size=T<<6,It[7]=(U.FileIndex[0].start=It[0]+It[1]+It[2]+It[3]+It[4]+It[5])+(It[6]+7>>3),It}(d),p=Bt(m[7]<<9),v=0,A=0;{for(v=0;v<8;++v)p.write_shift(1,ke[v]);for(v=0;v<8;++v)p.write_shift(2,0);for(p.write_shift(2,62),p.write_shift(2,3),p.write_shift(2,65534),p.write_shift(2,9),p.write_shift(2,6),v=0;v<3;++v)p.write_shift(2,0);for(p.write_shift(4,0),p.write_shift(4,m[2]),p.write_shift(4,m[0]+m[1]+m[2]+m[3]-1),p.write_shift(4,0),p.write_shift(4,4096),p.write_shift(4,m[3]?m[0]+m[1]+m[2]-1:Z),p.write_shift(4,m[3]),p.write_shift(-4,m[1]?m[0]-1:Z),p.write_shift(4,m[1]),v=0;v<109;++v)p.write_shift(-4,v<m[2]?m[1]+v:-1)}if(m[1])for(A=0;A<m[1];++A){for(;v<236+A*127;++v)p.write_shift(-4,v<m[2]?m[1]+v:-1);p.write_shift(-4,A===m[1]-1?Z:A+1)}var F=function(U){for(A+=U;v<A-1;++v)p.write_shift(-4,v+1);U&&(++v,p.write_shift(-4,Z))};for(A=v=0,A+=m[1];v<A;++v)p.write_shift(-4,ie.DIFSECT);for(A+=m[2];v<A;++v)p.write_shift(-4,ie.FATSECT);F(m[3]),F(m[4]);for(var x=0,O=0,_=d.FileIndex[0];x<d.FileIndex.length;++x)_=d.FileIndex[x],_.content&&(O=_.content.length,!(O<4096)&&(_.start=A,F(O+511>>9)));for(F(m[6]+7>>3);p.l&511;)p.write_shift(-4,ie.ENDOFCHAIN);for(A=v=0,x=0;x<d.FileIndex.length;++x)_=d.FileIndex[x],_.content&&(O=_.content.length,!(!O||O>=4096)&&(_.start=A,F(O+63>>6)));for(;p.l&511;)p.write_shift(-4,ie.ENDOFCHAIN);for(v=0;v<m[4]<<2;++v){var I=d.FullPaths[v];if(!I||I.length===0){for(x=0;x<17;++x)p.write_shift(4,0);for(x=0;x<3;++x)p.write_shift(4,-1);for(x=0;x<12;++x)p.write_shift(4,0);continue}_=d.FileIndex[v],v===0&&(_.start=_.size?_.start-1:Z);var B=v===0&&f.root||_.name;if(B.length>31&&(console.error("Name "+B+" will be truncated to "+B.slice(0,31)),B=B.slice(0,31)),O=2*(B.length+1),p.write_shift(64,B,"utf16le"),p.write_shift(2,O),p.write_shift(1,_.type),p.write_shift(1,_.color),p.write_shift(-4,_.L),p.write_shift(-4,_.R),p.write_shift(-4,_.C),_.clsid)p.write_shift(16,_.clsid,"hex");else for(x=0;x<4;++x)p.write_shift(4,0);p.write_shift(4,_.state||0),p.write_shift(4,0),p.write_shift(4,0),p.write_shift(4,0),p.write_shift(4,0),p.write_shift(4,_.start),p.write_shift(4,_.size),p.write_shift(4,0)}for(v=1;v<d.FileIndex.length;++v)if(_=d.FileIndex[v],_.size>=4096)if(p.l=_.start+1<<9,le&&Buffer.isBuffer(_.content))_.content.copy(p,p.l,0,_.size),p.l+=_.size+511&-512;else{for(x=0;x<_.size;++x)p.write_shift(1,_.content[x]);for(;x&511;++x)p.write_shift(1,0)}for(v=1;v<d.FileIndex.length;++v)if(_=d.FileIndex[v],_.size>0&&_.size<4096)if(le&&Buffer.isBuffer(_.content))_.content.copy(p,p.l,0,_.size),p.l+=_.size+63&-64;else{for(x=0;x<_.size;++x)p.write_shift(1,_.content[x]);for(;x&63;++x)p.write_shift(1,0)}if(le)p.l=p.length;else for(;p.l<p.length;)p.write_shift(1,0);return p}function M(d,k){var f=d.FullPaths.map(function(x){return x.toUpperCase()}),m=f.map(function(x){var O=x.split("/");return O[O.length-(x.slice(-1)=="/"?2:1)]}),p=!1;k.charCodeAt(0)===47?(p=!0,k=f[0].slice(0,-1)+k):p=k.indexOf("/")!==-1;var v=k.toUpperCase(),A=p===!0?f.indexOf(v):m.indexOf(v);if(A!==-1)return d.FileIndex[A];var F=!v.match(br);for(v=v.replace(Wn,""),F&&(v=v.replace(br,"!")),A=0;A<f.length;++A)if((F?f[A].replace(br,"!"):f[A]).replace(Wn,"")==v||(F?m[A].replace(br,"!"):m[A]).replace(Wn,"")==v)return d.FileIndex[A];return null}var X=64,Z=-2,re="d0cf11e0a1b11ae1",ke=[208,207,17,224,161,177,26,225],se="00000000000000000000000000000000",ie={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:Z,FREESECT:-1,HEADER_SIGNATURE:re,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:se,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]};function At(d,k,f){l();var m=j(d,f);s.writeFileSync(k,m)}function ye(d){for(var k=new Array(d.length),f=0;f<d.length;++f)k[f]=String.fromCharCode(d[f]);return k.join("")}function pt(d,k){var f=j(d,k);switch(k&&k.type||"buffer"){case"file":return l(),s.writeFileSync(k.filename,f),f;case"binary":return typeof f=="string"?f:ye(f);case"base64":return Wa(typeof f=="string"?f:ye(f));case"buffer":if(le)return Buffer.isBuffer(f)?f:tn(f);case"array":return typeof f=="string"?Kt(f):f}return f}var nt;function ae(d){try{var k=d.InflateRaw,f=new k;if(f._processChunk(new Uint8Array([3,0]),f._finishFlushFlag),f.bytesRead)nt=d;else throw new Error("zlib does not expose bytesRead")}catch(m){console.error("cannot use native zlib: "+(m.message||m))}}function de(d,k){if(!nt)return un(d,k);var f=nt.InflateRaw,m=new f,p=m._processChunk(d.slice(d.l),m._finishFlushFlag);return d.l+=m.bytesRead,p}function Me(d){return nt?nt.deflateRawSync(d):an(d)}var Pe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],fe=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],mt=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];function Ke(d){var k=(d<<1|d<<11)&139536|(d<<5|d<<15)&558144;return(k>>16|k>>8|k)&255}for(var ee=typeof Uint8Array<"u",Q=ee?new Uint8Array(256):[],Be=0;Be<256;++Be)Q[Be]=Ke(Be);function Ve(d,k){var f=Q[d&255];return k<=8?f>>>8-k:(f=f<<8|Q[d>>8&255],k<=16?f>>>16-k:(f=f<<8|Q[d>>16&255],f>>>24-k))}function Ot(d,k){var f=k&7,m=k>>>3;return(d[m]|(f<=6?0:d[m+1]<<8))>>>f&3}function He(d,k){var f=k&7,m=k>>>3;return(d[m]|(f<=5?0:d[m+1]<<8))>>>f&7}function rt(d,k){var f=k&7,m=k>>>3;return(d[m]|(f<=4?0:d[m+1]<<8))>>>f&15}function it(d,k){var f=k&7,m=k>>>3;return(d[m]|(f<=3?0:d[m+1]<<8))>>>f&31}function bt(d,k){var f=k&7,m=k>>>3;return(d[m]|(f<=1?0:d[m+1]<<8))>>>f&127}function kt(d,k,f){var m=k&7,p=k>>>3,v=(1<<f)-1,A=d[p]>>>m;return f<8-m||(A|=d[p+1]<<8-m,f<16-m)||(A|=d[p+2]<<16-m,f<24-m)||(A|=d[p+3]<<24-m),A&v}function Lt(d,k,f){var m=k&7,p=k>>>3;return m<=5?d[p]|=(f&7)<<m:(d[p]|=f<<m&255,d[p+1]=(f&7)>>8-m),k+3}function at(d,k,f){var m=k&7,p=k>>>3;return f=(f&1)<<m,d[p]|=f,k+1}function Ye(d,k,f){var m=k&7,p=k>>>3;return f<<=m,d[p]|=f&255,f>>>=8,d[p+1]=f,k+8}function Ht(d,k,f){var m=k&7,p=k>>>3;return f<<=m,d[p]|=f&255,f>>>=8,d[p+1]=f&255,d[p+2]=f>>>8,k+16}function ot(d,k){var f=d.length,m=2*f>k?2*f:k+5,p=0;if(f>=k)return d;if(le){var v=Ka(m);if(d.copy)d.copy(v);else for(;p<d.length;++p)v[p]=d[p];return v}else if(ee){var A=new Uint8Array(m);if(A.set)A.set(d);else for(;p<f;++p)A[p]=d[p];return A}return d.length=m,d}function _e(d){for(var k=new Array(d),f=0;f<d;++f)k[f]=0;return k}function vt(d,k,f){var m=1,p=0,v=0,A=0,F=0,x=d.length,O=ee?new Uint16Array(32):_e(32);for(v=0;v<32;++v)O[v]=0;for(v=x;v<f;++v)d[v]=0;x=d.length;var _=ee?new Uint16Array(x):_e(x);for(v=0;v<x;++v)O[p=d[v]]++,m<p&&(m=p),_[v]=0;for(O[0]=0,v=1;v<=m;++v)O[v+16]=F=F+O[v-1]<<1;for(v=0;v<x;++v)F=d[v],F!=0&&(_[v]=O[F+16]++);var I=0;for(v=0;v<x;++v)if(I=d[v],I!=0)for(F=Ve(_[v],m)>>m-I,A=(1<<m+4-I)-1;A>=0;--A)k[F|A<<I]=I&15|v<<4;return m}var rn=ee?new Uint16Array(512):_e(512),ut=ee?new Uint16Array(32):_e(32);if(!ee){for(var Ae=0;Ae<512;++Ae)rn[Ae]=0;for(Ae=0;Ae<32;++Ae)ut[Ae]=0}(function(){for(var d=[],k=0;k<32;k++)d.push(5);vt(d,ut,32);var f=[];for(k=0;k<=143;k++)f.push(8);for(;k<=255;k++)f.push(9);for(;k<=279;k++)f.push(7);for(;k<=287;k++)f.push(8);vt(f,rn,288)})();var Tt=function(){for(var k=ee?new Uint8Array(32768):[],f=0,m=0;f<mt.length-1;++f)for(;m<mt[f+1];++m)k[m]=f;for(;m<32768;++m)k[m]=29;var p=ee?new Uint8Array(259):[];for(f=0,m=0;f<fe.length-1;++f)for(;m<fe[f+1];++m)p[m]=f;function v(F,x){for(var O=0;O<F.length;){var _=Math.min(65535,F.length-O),I=O+_==F.length;for(x.write_shift(1,+I),x.write_shift(2,_),x.write_shift(2,~_&65535);_-- >0;)x[x.l++]=F[O++]}return x.l}function A(F,x){for(var O=0,_=0,I=ee?new Uint16Array(32768):[];_<F.length;){var B=Math.min(65535,F.length-_);if(B<10){for(O=Lt(x,O,+(_+B==F.length)),O&7&&(O+=8-(O&7)),x.l=O/8|0,x.write_shift(2,B),x.write_shift(2,~B&65535);B-- >0;)x[x.l++]=F[_++];O=x.l*8;continue}O=Lt(x,O,+(_+B==F.length)+2);for(var U=0;B-- >0;){var T=F[_];U=(U<<5^T)&32767;var z=-1,J=0;if((z=I[U])&&(z|=_&-32768,z>_&&(z-=32768),z<_))for(;F[z+J]==F[_+J]&&J<250;)++J;if(J>2){T=p[J],T<=22?O=Ye(x,O,Q[T+1]>>1)-1:(Ye(x,O,3),O+=5,Ye(x,O,Q[T-23]>>5),O+=3);var ue=T<8?0:T-4>>2;ue>0&&(Ht(x,O,J-fe[T]),O+=ue),T=k[_-z],O=Ye(x,O,Q[T]>>3),O-=3;var oe=T<4?0:T-2>>1;oe>0&&(Ht(x,O,_-z-mt[T]),O+=oe);for(var he=0;he<J;++he)I[U]=_&32767,U=(U<<5^F[_])&32767,++_;B-=J-1}else T<=143?T=T+48:O=at(x,O,1),O=Ye(x,O,Q[T]),I[U]=_&32767,++_}O=Ye(x,O,0)-1}return x.l=(O+7)/8|0,x.l}return function(x,O){return x.length<8?v(x,O):A(x,O)}}();function an(d){var k=Bt(50+Math.floor(d.length*1.1)),f=Tt(d,k);return k.slice(0,f)}var ze=ee?new Uint16Array(32768):_e(32768),Te=ee?new Uint16Array(32768):_e(32768),fn=ee?new Uint16Array(128):_e(128),pn=1,Je=1;function mn(d,k){var f=it(d,k)+257;k+=5;var m=it(d,k)+1;k+=5;var p=rt(d,k)+4;k+=4;for(var v=0,A=ee?new Uint8Array(19):_e(19),F=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],x=1,O=ee?new Uint8Array(8):_e(8),_=ee?new Uint8Array(8):_e(8),I=A.length,B=0;B<p;++B)A[Pe[B]]=v=He(d,k),x<v&&(x=v),O[v]++,k+=3;var U=0;for(O[0]=0,B=1;B<=x;++B)_[B]=U=U+O[B-1]<<1;for(B=0;B<I;++B)(U=A[B])!=0&&(F[B]=_[U]++);var T=0;for(B=0;B<I;++B)if(T=A[B],T!=0){U=Q[F[B]]>>8-T;for(var z=(1<<7-T)-1;z>=0;--z)fn[U|z<<T]=T&7|B<<3}var J=[];for(x=1;J.length<f+m;)switch(U=fn[bt(d,k)],k+=U&7,U>>>=3){case 16:for(v=3+Ot(d,k),k+=2,U=J[J.length-1];v-- >0;)J.push(U);break;case 17:for(v=3+He(d,k),k+=3;v-- >0;)J.push(0);break;case 18:for(v=11+bt(d,k),k+=7;v-- >0;)J.push(0);break;default:J.push(U),x<U&&(x=U);break}var ue=J.slice(0,f),oe=J.slice(f);for(B=f;B<286;++B)ue[B]=0;for(B=m;B<30;++B)oe[B]=0;return pn=vt(ue,ze,286),Je=vt(oe,Te,30),k}function on(d,k){if(d[0]==3&&!(d[1]&3))return[Fn(k),2];for(var f=0,m=0,p=Ka(k||1<<18),v=0,A=p.length>>>0,F=0,x=0;(m&1)==0;){if(m=He(d,f),f+=3,m>>>1)m>>1==1?(F=9,x=5):(f=mn(d,f),F=pn,x=Je);else{f&7&&(f+=8-(f&7));var O=d[f>>>3]|d[(f>>>3)+1]<<8;if(f+=32,O>0)for(!k&&A<v+O&&(p=ot(p,v+O),A=p.length);O-- >0;)p[v++]=d[f>>>3],f+=8;continue}for(;;){!k&&A<v+32767&&(p=ot(p,v+32767),A=p.length);var _=kt(d,f,F),I=m>>>1==1?rn[_]:ze[_];if(f+=I&15,I>>>=4,(I>>>8&255)===0)p[v++]=I;else{if(I==256)break;I-=257;var B=I<8?0:I-4>>2;B>5&&(B=0);var U=v+fe[I];B>0&&(U+=kt(d,f,B),f+=B),_=kt(d,f,x),I=m>>>1==1?ut[_]:Te[_],f+=I&15,I>>>=4;var T=I<4?0:I-2>>1,z=mt[I];for(T>0&&(z+=kt(d,f,T),f+=T),!k&&A<U&&(p=ot(p,U+100),A=p.length);v<U;)p[v]=p[v-z],++v}}}return k?[p,f+7>>>3]:[p.slice(0,v),f+7>>>3]}function un(d,k){var f=d.slice(d.l||0),m=on(f,k);return d.l+=m[1],m[0]}function sn(d,k){if(d)typeof console<"u"&&console.error(k);else throw new Error(k)}function bn(d,k){var f=d;Wt(f,0);var m=[],p=[],v={FileIndex:m,FullPaths:p};G(v,{root:k.root});for(var A=f.length-4;(f[A]!=80||f[A+1]!=75||f[A+2]!=5||f[A+3]!=6)&&A>=0;)--A;f.l=A+4,f.l+=4;var F=f.read_shift(2);f.l+=6;var x=f.read_shift(4);for(f.l=x,A=0;A<F;++A){f.l+=20;var O=f.read_shift(4),_=f.read_shift(4),I=f.read_shift(2),B=f.read_shift(2),U=f.read_shift(2);f.l+=8;var T=f.read_shift(4),z=u(f.slice(f.l+I,f.l+I+B));f.l+=I+B+U;var J=f.l;f.l=T+4,z&&z[1]&&((z[1]||{}).usz&&(_=z[1].usz),(z[1]||{}).csz&&(O=z[1].csz)),te(f,O,_,v,z),f.l=J}return v}function te(d,k,f,m,p){d.l+=2;var v=d.read_shift(2),A=d.read_shift(2),F=o(d);if(v&8257)throw new Error("Unsupported ZIP encryption");for(var x=d.read_shift(4),O=d.read_shift(4),_=d.read_shift(4),I=d.read_shift(2),B=d.read_shift(2),U="",T=0;T<I;++T)U+=String.fromCharCode(d[d.l++]);if(B){var z=u(d.slice(d.l,d.l+B));(z[21589]||{}).mt&&(F=z[21589].mt),(z[1]||{}).usz&&(_=z[1].usz),(z[1]||{}).csz&&(O=z[1].csz),p&&((p[21589]||{}).mt&&(F=p[21589].mt),(p[1]||{}).usz&&(_=p[1].usz),(p[1]||{}).csz&&(O=p[1].csz))}d.l+=B;var J=d.slice(d.l,d.l+O);switch(A){case 8:J=de(d,_);break;case 0:d.l+=O;break;default:throw new Error("Unsupported ZIP Compression method "+A)}var ue=!1;v&8&&(x=d.read_shift(4),x==134695760&&(x=d.read_shift(4),ue=!0),O=d.read_shift(4),_=d.read_shift(4)),O!=k&&sn(ue,"Bad compressed size: "+k+" != "+O),_!=f&&sn(ue,"Bad uncompressed size: "+f+" != "+_),Fe(m,U,J,{unsafe:!0,mt:F})}function pe(d,k){var f=k||{},m=[],p=[],v=Bt(1),A=f.compression?8:0,F=0,x=0,O=0,_=0,I=0,B=d.FullPaths[0],U=B,T=d.FileIndex[0],z=[],J=0;for(x=1;x<d.FullPaths.length;++x)if(U=d.FullPaths[x].slice(B.length),T=d.FileIndex[x],!(!T.size||!T.content||Array.isArray(T.content)&&T.content.length==0||U=="Sh33tJ5")){var ue=_,oe=Bt(U.length);for(O=0;O<U.length;++O)oe.write_shift(1,U.charCodeAt(O)&127);oe=oe.slice(0,oe.l),z[I]=typeof T.content=="string"?ro.bstr(T.content,0):ro.buf(T.content,0);var he=typeof T.content=="string"?Kt(T.content):T.content;A==8&&(he=Me(he)),v=Bt(30),v.write_shift(4,67324752),v.write_shift(2,20),v.write_shift(2,F),v.write_shift(2,A),T.mt?a(v,T.mt):v.write_shift(4,0),v.write_shift(-4,z[I]),v.write_shift(4,he.length),v.write_shift(4,T.content.length),v.write_shift(2,oe.length),v.write_shift(2,0),_+=v.length,m.push(v),_+=oe.length,m.push(oe),_+=he.length,m.push(he),v=Bt(46),v.write_shift(4,33639248),v.write_shift(2,0),v.write_shift(2,20),v.write_shift(2,F),v.write_shift(2,A),v.write_shift(4,0),v.write_shift(-4,z[I]),v.write_shift(4,he.length),v.write_shift(4,T.content.length),v.write_shift(2,oe.length),v.write_shift(2,0),v.write_shift(2,0),v.write_shift(2,0),v.write_shift(2,0),v.write_shift(4,0),v.write_shift(4,ue),J+=v.l,p.push(v),J+=oe.length,p.push(oe),++I}return v=Bt(22),v.write_shift(4,101010256),v.write_shift(2,0),v.write_shift(2,0),v.write_shift(2,I),v.write_shift(2,I),v.write_shift(4,J),v.write_shift(4,_),v.write_shift(2,0),yn([yn(m),yn(p),v])}var me={htm:"text/html",xml:"text/xml",gif:"image/gif",jpg:"image/jpeg",png:"image/png",mso:"application/x-mso",thmx:"application/vnd.ms-officetheme",sh33tj5:"application/octet-stream"};function Oe(d,k){if(d.ctype)return d.ctype;var f=d.name||"",m=f.match(/\.([^\.]+)$/);return m&&me[m[1]]||k&&(m=(f=k).match(/[\.\\]([^\.\\])+$/),m&&me[m[1]])?me[m[1]]:"application/octet-stream"}function st(d){for(var k=Wa(d),f=[],m=0;m<k.length;m+=76)f.push(k.slice(m,m+76));return f.join(`\r
`)+`\r
`}function Ge(d){var k=d.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,function(O){var _=O.charCodeAt(0).toString(16).toUpperCase();return"="+(_.length==1?"0"+_:_)});k=k.replace(/ $/mg,"=20").replace(/\t$/mg,"=09"),k.charAt(0)==`
`&&(k="=0D"+k.slice(1)),k=k.replace(/\r(?!\n)/mg,"=0D").replace(/\n\n/mg,`
=0A`).replace(/([^\r\n])\n/mg,"$1=0A");for(var f=[],m=k.split(`\r
`),p=0;p<m.length;++p){var v=m[p];if(v.length==0){f.push("");continue}for(var A=0;A<v.length;){var F=76,x=v.slice(A,A+F);x.charAt(F-1)=="="?F--:x.charAt(F-2)=="="?F-=2:x.charAt(F-3)=="="&&(F-=3),x=v.slice(A,A+F),A+=F,A<v.length&&(x+="="),f.push(x)}}return f.join(`\r
`)}function be(d){for(var k=[],f=0;f<d.length;++f){for(var m=d[f];f<=d.length&&m.charAt(m.length-1)=="=";)m=m.slice(0,m.length-1)+d[++f];k.push(m)}for(var p=0;p<k.length;++p)k[p]=k[p].replace(/[=][0-9A-Fa-f]{2}/g,function(v){return String.fromCharCode(parseInt(v.slice(1),16))});return Kt(k.join(`\r
`))}function Se(d,k,f){for(var m="",p="",v="",A,F=0;F<10;++F){var x=k[F];if(!x||x.match(/^\s*$/))break;var O=x.match(/^([^:]*?):\s*([^\s].*)$/);if(O)switch(O[1].toLowerCase()){case"content-location":m=O[2].trim();break;case"content-type":v=O[2].trim();break;case"content-transfer-encoding":p=O[2].trim();break}}switch(++F,p.toLowerCase()){case"base64":A=Kt(Xa(k.slice(F).join("")));break;case"quoted-printable":A=be(k.slice(F));break;default:throw new Error("Unsupported Content-Transfer-Encoding "+p)}var _=Fe(d,m.slice(f.length),A,{unsafe:!0});v&&(_.ctype=v)}function Ct(d,k){if(ye(d.slice(0,13)).toLowerCase()!="mime-version:")throw new Error("Unsupported MAD header");var f=k&&k.root||"",m=(le&&Buffer.isBuffer(d)?d.toString("binary"):ye(d)).split(`\r
`),p=0,v="";for(p=0;p<m.length;++p)if(v=m[p],!!/^Content-Location:/i.test(v)&&(v=v.slice(v.indexOf("file")),f||(f=v.slice(0,v.lastIndexOf("/")+1)),v.slice(0,f.length)!=f))for(;f.length>0&&(f=f.slice(0,f.length-1),f=f.slice(0,f.lastIndexOf("/")+1),v.slice(0,f.length)!=f););var A=(m[1]||"").match(/boundary="(.*?)"/);if(!A)throw new Error("MAD cannot find boundary");var F="--"+(A[1]||""),x=[],O=[],_={FileIndex:x,FullPaths:O};G(_);var I,B=0;for(p=0;p<m.length;++p){var U=m[p];U!==F&&U!==F+"--"||(B++&&Se(_,m.slice(I,p),f),I=p)}return _}function ge(d,k){var f=k||{},m=f.boundary||"SheetJS";m="------="+m;for(var p=["MIME-Version: 1.0",'Content-Type: multipart/related; boundary="'+m.slice(2)+'"',"","",""],v=d.FullPaths[0],A=v,F=d.FileIndex[0],x=1;x<d.FullPaths.length;++x)if(A=d.FullPaths[x].slice(v.length),F=d.FileIndex[x],!(!F.size||!F.content||A=="Sh33tJ5")){A=A.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,function(J){return"_x"+J.charCodeAt(0).toString(16)+"_"}).replace(/[\u0080-\uFFFF]/g,function(J){return"_u"+J.charCodeAt(0).toString(16)+"_"});for(var O=F.content,_=le&&Buffer.isBuffer(O)?O.toString("binary"):ye(O),I=0,B=Math.min(1024,_.length),U=0,T=0;T<=B;++T)(U=_.charCodeAt(T))>=32&&U<128&&++I;var z=I>=B*4/5;p.push(m),p.push("Content-Location: "+(f.root||"file:///C:/SheetJS/")+A),p.push("Content-Transfer-Encoding: "+(z?"quoted-printable":"base64")),p.push("Content-Type: "+Oe(F,A)),p.push(""),p.push(z?Ge(_):st(_))}return p.push(m+`--\r
`),p.join(`\r
`)}function Ze(d){var k={};return G(k,d),k}function Fe(d,k,f,m){var p=m&&m.unsafe;p||G(d);var v=!p&&yt.find(d,k);if(!v){var A=d.FullPaths[0];k.slice(0,A.length)==A?A=k:(A.slice(-1)!="/"&&(A+="/"),A=(A+k).replace("//","/")),v={name:i(k),type:2},d.FileIndex.push(v),d.FullPaths.push(A),p||yt.utils.cfb_gc(d)}return v.content=f,v.size=f?f.length:0,m&&(m.CLSID&&(v.clsid=m.CLSID),m.mt&&(v.mt=m.mt),m.ct&&(v.ct=m.ct)),v}function $e(d,k){G(d);var f=yt.find(d,k);if(f){for(var m=0;m<d.FileIndex.length;++m)if(d.FileIndex[m]==f)return d.FileIndex.splice(m,1),d.FullPaths.splice(m,1),!0}return!1}function Gt(d,k,f){G(d);var m=yt.find(d,k);if(m){for(var p=0;p<d.FileIndex.length;++p)if(d.FileIndex[p]==m)return d.FileIndex[p].name=i(f),d.FullPaths[p]=f,!0}return!1}function Qe(d){H(d,!0)}return n.find=M,n.read=q,n.parse=c,n.write=pt,n.writeFile=At,n.utils={cfb_new:Ze,cfb_add:Fe,cfb_del:$e,cfb_mov:Gt,cfb_gc:Qe,ReadShift:Xn,CheckField:es,prep_blob:Wt,bconcat:yn,use_zlib:ae,_deflateRaw:an,_inflateRaw:un,consts:ie},n}(),og;function io(e){return typeof e=="string"?ca(e):Array.isArray(e)?Nh(e):e}function Hu(e,n,t){if(typeof Deno<"u")return Deno.writeFileSync(e,n);var r=n;if(typeof IE_SaveFile<"u")return IE_SaveFile(r,e);if(typeof Blob<"u"){var i=new Blob([io(r)],{type:"application/octet-stream"});if(typeof navigator<"u"&&navigator.msSaveBlob)return navigator.msSaveBlob(i,e);if(typeof saveAs<"u")return saveAs(i,e);if(typeof URL<"u"&&typeof document<"u"&&document.createElement&&URL.createObjectURL){var a=URL.createObjectURL(i);if(typeof chrome=="object"&&typeof(chrome.downloads||{}).download=="function")return URL.revokeObjectURL&&typeof setTimeout<"u"&&setTimeout(function(){URL.revokeObjectURL(a)},6e4),chrome.downloads.download({url:a,filename:e,saveAs:!0});var o=document.createElement("a");if(o.download!=null)return o.download=e,o.href=a,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL&&typeof setTimeout<"u"&&setTimeout(function(){URL.revokeObjectURL(a)},6e4),a}else if(typeof URL<"u"&&!URL.createObjectURL&&typeof chrome=="object"){var u="data:application/octet-stream;base64,"+Fh(new Uint8Array(io(r)));return chrome.downloads.download({url:u,filename:e,saveAs:!0})}}if(typeof $<"u"&&typeof File<"u"&&typeof Folder<"u")try{var s=File(e);return s.open("w"),s.encoding="binary",Array.isArray(n)&&(n=Dh(n)),s.write(n),s.close(),n}catch(l){if(!l.message||l.message.indexOf("onstruct")==-1)throw l}throw new Error("cannot save file "+e)}function nn(e){for(var n=Object.keys(e),t=[],r=0;r<n.length;++r)Object.prototype.hasOwnProperty.call(e,n[r])&&t.push(n[r]);return t}function ug(e){for(var n=[],t=nn(e),r=0;r!==t.length;++r)n[e[t[r]]]=t[r];return n}function sg(e){for(var n=[],t=nn(e),r=0;r!==t.length;++r)n[e[t[r]]]=parseInt(t[r],10);return n}function lg(e){for(var n=[],t=nn(e),r=0;r!==t.length;++r)n[e[t[r]]]==null&&(n[e[t[r]]]=[]),n[e[t[r]]].push(t[r]);return n}var Tu=Date.UTC(1899,11,30,0,0,0),cg=Date.UTC(1899,11,31,0,0,0),dg=Date.UTC(1904,0,1,0,0,0);function $t(e,n){var t=e.getTime(),r=(t-Tu)/(24*60*60*1e3);return n?(r-=1462,r<-1402?r-1:r):r<60?r-1:r}function hg(e){if(e>=60&&e<61)return e;var n=new Date;return n.setTime((e>60?e:e+1)*24*60*60*1e3+Tu),n}var gg=/^(\d+):(\d+)(:\d+)?(\.\d+)?$/,fg=/^(\d+)-(\d+)-(\d+)$/,Iu=/^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)?(\.\d+)?$/;function $i(e,n){if(e instanceof Date)return e;var t=e.match(gg);if(t)return new Date((n?dg:cg)+((parseInt(t[1],10)*60+parseInt(t[2],10))*60+(t[3]?parseInt(t[3].slice(1),10):0))*1e3+(t[4]?parseInt((t[4]+"000").slice(1,4),10):0));if(t=e.match(fg),t)return new Date(Date.UTC(+t[1],+t[2]-1,+t[3],0,0,0,0));if(t=e.match(Iu),t)return new Date(Date.UTC(+t[1],+t[2]-1,+t[3],+t[4],+t[5],t[6]&&parseInt(t[6].slice(1),10)||0,t[7]&&parseInt((t[7]+"0000").slice(1,4),10)||0));var r=new Date(e);return r}function sr(e){if(typeof JSON<"u"&&!Array.isArray(e))return JSON.parse(JSON.stringify(e));if(typeof e!="object"||e==null)return e;if(e instanceof Date)return new Date(e.getTime());var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=sr(e[t]));return n}function Le(e,n){for(var t="";t.length<n;)t+=e;return t}function ao(e){var n=Number(e);if(!isNaN(n))return isFinite(n)?n:NaN;if(!/\d/.test(e))return n;var t=1,r=e.replace(/([\d]),([\d])/g,"$1$2").replace(/[$]/g,"").replace(/[%]/g,function(){return t*=100,""});return!isNaN(n=Number(r))||(r=r.replace(/[(]([^()]*)[)]/,function(i,a){return t=-t,a}),!isNaN(n=Number(r)))?n/t:n}var pg=/^(0?\d|1[0-2])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))\s+([ap])m?$/,mg=/^([01]?\d|2[0-3])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))$/,bg=/^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)(\.\d+)?[Z]?$/,kg=new Date("6/9/69 00:00 UTC").valueOf()==-177984e5;function vg(e){return e[2]?e[3]?e[4]?new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),+e[2],+e[4],parseFloat(e[3])*1e3)):new Date(Date.UTC(1899,11,31,e[7]=="p"?12:0,+e[1],+e[2],parseFloat(e[3])*1e3)):e[5]?new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),+e[2],+e[5],e[6]?parseFloat(e[6])*1e3:0)):new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),+e[2],0,0)):new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),0,0,0))}function Cg(e){return e[2]?e[3]?e[4]?new Date(Date.UTC(1899,11,31,+e[1],+e[2],+e[4],parseFloat(e[3])*1e3)):new Date(Date.UTC(1899,11,31,0,+e[1],+e[2],parseFloat(e[3])*1e3)):e[5]?new Date(Date.UTC(1899,11,31,+e[1],+e[2],+e[5],e[6]?parseFloat(e[6])*1e3:0)):new Date(Date.UTC(1899,11,31,+e[1],+e[2],0,0)):new Date(Date.UTC(1899,11,31,+e[1],0,0,0))}var yg=["january","february","march","april","may","june","july","august","september","october","november","december"];function Sg(e){if(bg.test(e))return e.indexOf("Z")==-1?Ur(new Date(e)):new Date(e);var n=e.toLowerCase(),t=n.replace(/\s+/g," ").trim(),r=t.match(pg);if(r)return vg(r);if(r=t.match(mg),r)return Cg(r);if(r=t.match(Iu),r)return new Date(Date.UTC(+r[1],+r[2]-1,+r[3],+r[4],+r[5],r[6]&&parseInt(r[6].slice(1),10)||0,r[7]&&parseInt((r[7]+"0000").slice(1,4),10)||0));var i=new Date(kg&&e.indexOf("UTC")==-1?e+" UTC":e),a=new Date(NaN),o=i.getYear();i.getMonth();var u=i.getDate();if(isNaN(u))return a;if(n.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)){if(n=n.replace(/[^a-z]/g,"").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/,""),n.length>3&&yg.indexOf(n)==-1)return a}else if(n.replace(/[ap]m?/,"").match(/[a-z]/))return a;return o<0||o>8099||e.match(/[^-0-9:,\/\\\ ]/)?a:i}function Eg(e){return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds())}function Ur(e){return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()))}function Ee(e,n,t){if(e.FullPaths){if(Array.isArray(t)&&typeof t[0]=="string"&&(t=t.join("")),typeof t=="string"){var r;return le?r=tn(t):r=Rh(t),yt.utils.cfb_add(e,n,r)}yt.utils.cfb_add(e,n,t)}else e.file(n,t)}function wg(){return yt.utils.cfb_new()}var Xe=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,xg={"&quot;":'"',"&apos;":"'","&gt;":">","&lt;":"<","&amp;":"&"},Mu=ug(xg),Pu=/[&<>'"]/g,_g=/[\u0000-\u0008\u000b-\u001f\uFFFE-\uFFFF]/g;function ce(e){var n=e+"";return n.replace(Pu,function(t){return Mu[t]}).replace(_g,function(t){return"_x"+("000"+t.charCodeAt(0).toString(16)).slice(-4)+"_"})}var Ag=/[\u0000-\u001f]/g;function di(e){var n=e+"";return n.replace(Pu,function(t){return Mu[t]}).replace(/\n/g,"<br/>").replace(Ag,function(t){return"&#x"+("000"+t.charCodeAt(0).toString(16)).slice(-4)+";"})}function hi(e){for(var n="",t=0,r=0,i=0,a=0,o=0,u=0;t<e.length;){if(r=e.charCodeAt(t++),r<128){n+=String.fromCharCode(r);continue}if(i=e.charCodeAt(t++),r>191&&r<224){o=(r&31)<<6,o|=i&63,n+=String.fromCharCode(o);continue}if(a=e.charCodeAt(t++),r<240){n+=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63);continue}o=e.charCodeAt(t++),u=((r&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536,n+=String.fromCharCode(55296+(u>>>10&1023)),n+=String.fromCharCode(56320+(u&1023))}return n}function oo(e){var n=Fn(2*e.length),t,r,i=1,a=0,o=0,u;for(r=0;r<e.length;r+=i)i=1,(u=e.charCodeAt(r))<128?t=u:u<224?(t=(u&31)*64+(e.charCodeAt(r+1)&63),i=2):u<240?(t=(u&15)*4096+(e.charCodeAt(r+1)&63)*64+(e.charCodeAt(r+2)&63),i=3):(i=4,t=(u&7)*262144+(e.charCodeAt(r+1)&63)*4096+(e.charCodeAt(r+2)&63)*64+(e.charCodeAt(r+3)&63),t-=65536,o=55296+(t>>>10&1023),t=56320+(t&1023)),o!==0&&(n[a++]=o&255,n[a++]=o>>>8,o=0),n[a++]=t%256,n[a++]=t>>>8;return n.slice(0,a).toString("ucs2")}function uo(e){return tn(e,"binary").toString("utf8")}var kr="foo bar bazâð£",Og=le&&(uo(kr)==hi(kr)&&uo||oo(kr)==hi(kr)&&oo)||hi,Gg=le?function(e){return tn(e,"utf8").toString("binary")}:function(e){for(var n=[],t=0,r=0,i=0;t<e.length;)switch(r=e.charCodeAt(t++),!0){case r<128:n.push(String.fromCharCode(r));break;case r<2048:n.push(String.fromCharCode(192+(r>>6))),n.push(String.fromCharCode(128+(r&63)));break;case(r>=55296&&r<57344):r-=55296,i=e.charCodeAt(t++)-56320+(r<<10),n.push(String.fromCharCode(240+(i>>18&7))),n.push(String.fromCharCode(144+(i>>12&63))),n.push(String.fromCharCode(128+(i>>6&63))),n.push(String.fromCharCode(128+(i&63)));break;default:n.push(String.fromCharCode(224+(r>>12))),n.push(String.fromCharCode(128+(r>>6&63))),n.push(String.fromCharCode(128+(r&63)))}return n.join("")},Fg=function(){var e=[["nbsp"," "],["middot","·"],["quot",'"'],["apos","'"],["gt",">"],["lt","<"],["amp","&"]].map(function(n){return[new RegExp("&"+n[0]+";","ig"),n[1]]});return function(t){for(var r=t.replace(/^[\t\n\r ]+/,"").replace(/(^|[^\t\n\r ])[\t\n\r ]+$/,"$1").replace(/>\s+/g,">").replace(/\b\s+</g,"<").replace(/[\t\n\r ]+/g," ").replace(/<\s*[bB][rR]\s*\/?>/g,`
`).replace(/<[^<>]*>/g,""),i=0;i<e.length;++i)r=r.replace(e[i][0],e[i][1]);return r}}(),Bu=/(^\s|\s$|\n)/;function Et(e,n){return"<"+e+(n.match(Bu)?' xml:space="preserve"':"")+">"+n+"</"+e+">"}function Vu(e){return nn(e).map(function(n){return" "+n+'="'+e[n]+'"'}).join("")}function W(e,n,t){return"<"+e+(t!=null?Vu(t):"")+(n!=null?(n.match(Bu)?' xml:space="preserve"':"")+">"+n+"</"+e:"/")+">"}function ji(e,n){try{return e.toISOString().replace(/\.\d*/,"")}catch(t){if(n)throw t}return""}function Dg(e,n){switch(typeof e){case"string":var t=W("vt:lpwstr",ce(e));return t=t.replace(/&quot;/g,"_x0022_"),t;case"number":return W((e|0)==e?"vt:i4":"vt:r8",ce(String(e)));case"boolean":return W("vt:bool",e?"true":"false")}if(e instanceof Date)return W("vt:filetime",ji(e));throw new Error("Unable to serialize "+e)}var xe={CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/metadata/core-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",CT:"http://schemas.openxmlformats.org/package/2006/content-types",RELS:"http://schemas.openxmlformats.org/package/2006/relationships",TCMNT:"http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",dc:"http://purl.org/dc/elements/1.1/",dcterms:"http://purl.org/dc/terms/",dcmitype:"http://purl.org/dc/dcmitype/",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",vt:"http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",xsi:"http://www.w3.org/2001/XMLSchema-instance",xsd:"http://www.w3.org/2001/XMLSchema"},Ln=["http://schemas.openxmlformats.org/spreadsheetml/2006/main","http://purl.oclc.org/ooxml/spreadsheetml/main","http://schemas.microsoft.com/office/excel/2006/main","http://schemas.microsoft.com/office/excel/2006/2"],vr={o:"urn:schemas-microsoft-com:office:office",x:"urn:schemas-microsoft-com:office:excel",mv:"http://macVmlSchemaUri",v:"urn:schemas-microsoft-com:vml"};function Ng(e,n){for(var t=1-2*(e[n+7]>>>7),r=((e[n+7]&127)<<4)+(e[n+6]>>>4&15),i=e[n+6]&15,a=5;a>=0;--a)i=i*256+e[n+a];return r==2047?i==0?t*(1/0):NaN:(r==0?r=-1022:(r-=1023,i+=Math.pow(2,52)),t*Math.pow(2,r-52)*i)}function Rg(e,n,t){var r=(n<0||1/n==-1/0?1:0)<<7,i=0,a=0,o=r?-n:n;isFinite(o)?o==0?i=a=0:(i=Math.floor(Math.log(o)/Math.LN2),a=o*Math.pow(2,52-i),i<=-1023&&(!isFinite(a)||a<Math.pow(2,52))?i=-1022:(a-=Math.pow(2,52),i+=1023)):(i=2047,a=isNaN(n)?26985:0);for(var u=0;u<=5;++u,a/=256)e[t+u]=a&255;e[t+6]=(i&15)<<4|a&15,e[t+7]=i>>4|r}var so=function(e){for(var n=[],t=10240,r=0;r<e[0].length;++r)if(e[0][r])for(var i=0,a=e[0][r].length;i<a;i+=t)n.push.apply(n,e[0][r].slice(i,i+t));return n},lo=le?function(e){return e[0].length>0&&Buffer.isBuffer(e[0][0])?Buffer.concat(e[0].map(function(n){return Buffer.isBuffer(n)?n:tn(n)})):so(e)}:so,co=function(e,n,t){for(var r=[],i=n;i<t;i+=2)r.push(String.fromCharCode(Bn(e,i)));return r.join("").replace(Wn,"")},fa=le?function(e,n,t){return!Buffer.isBuffer(e)||!Lr?co(e,n,t):e.toString("utf16le",n,t).replace(Wn,"")}:co,ho=function(e,n,t){for(var r=[],i=n;i<n+t;++i)r.push(("0"+e[i].toString(16)).slice(-2));return r.join("")},zu=le?function(e,n,t){return Buffer.isBuffer(e)?e.toString("hex",n,n+t):ho(e,n,t)}:ho,go=function(e,n,t){for(var r=[],i=n;i<t;i++)r.push(String.fromCharCode(Sn(e,i)));return r.join("")},lr=le?function(n,t,r){return Buffer.isBuffer(n)?n.toString("utf8",t,r):go(n,t,r)}:go,$u=function(e,n){var t=et(e,n);return t>0?lr(e,n+4,n+4+t-1):""},ju=$u,Uu=function(e,n){var t=et(e,n);return t>0?lr(e,n+4,n+4+t-1):""},qu=Uu,Wu=function(e,n){var t=2*et(e,n);return t>0?lr(e,n+4,n+4+t-1):""},Xu=Wu,Ku=function(n,t){var r=et(n,t);return r>0?fa(n,t+4,t+4+r):""},Yu=Ku,Ju=function(e,n){var t=et(e,n);return t>0?lr(e,n+4,n+4+t):""},Zu=Ju,Qu=function(e,n){return Ng(e,n)},Ui=Qu;le&&(ju=function(n,t){if(!Buffer.isBuffer(n))return $u(n,t);var r=n.readUInt32LE(t);return r>0?n.toString("utf8",t+4,t+4+r-1):""},qu=function(n,t){if(!Buffer.isBuffer(n))return Uu(n,t);var r=n.readUInt32LE(t);return r>0?n.toString("utf8",t+4,t+4+r-1):""},Xu=function(n,t){if(!Buffer.isBuffer(n)||!Lr)return Wu(n,t);var r=2*n.readUInt32LE(t);return n.toString("utf16le",t+4,t+4+r-1)},Yu=function(n,t){if(!Buffer.isBuffer(n)||!Lr)return Ku(n,t);var r=n.readUInt32LE(t);return n.toString("utf16le",t+4,t+4+r)},Zu=function(n,t){if(!Buffer.isBuffer(n))return Ju(n,t);var r=n.readUInt32LE(t);return n.toString("utf8",t+4,t+4+r)},Ui=function(n,t){return Buffer.isBuffer(n)?n.readDoubleLE(t):Qu(n,t)});var Sn=function(e,n){return e[n]},Bn=function(e,n){return e[n+1]*256+e[n]},Lg=function(e,n){var t=e[n+1]*256+e[n];return t<32768?t:(65535-t+1)*-1},et=function(e,n){return e[n+3]*(1<<24)+(e[n+2]<<16)+(e[n+1]<<8)+e[n]},En=function(e,n){return e[n+3]<<24|e[n+2]<<16|e[n+1]<<8|e[n]},Hg=function(e,n){return e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3]};function Xn(e,n){var t="",r,i,a=[],o,u,s,l;switch(n){case"dbcs":if(l=this.l,le&&Buffer.isBuffer(this)&&Lr)t=this.slice(this.l,this.l+2*e).toString("utf16le");else for(s=0;s<e;++s)t+=String.fromCharCode(Bn(this,l)),l+=2;e*=2;break;case"utf8":t=lr(this,this.l,this.l+e);break;case"utf16le":e*=2,t=fa(this,this.l,this.l+e);break;case"wstr":return Xn.call(this,e,"dbcs");case"lpstr-ansi":t=ju(this,this.l),e=4+et(this,this.l);break;case"lpstr-cp":t=qu(this,this.l),e=4+et(this,this.l);break;case"lpwstr":t=Xu(this,this.l),e=4+2*et(this,this.l);break;case"lpp4":e=4+et(this,this.l),t=Yu(this,this.l),e&2&&(e+=2);break;case"8lpp4":e=4+et(this,this.l),t=Zu(this,this.l),e&3&&(e+=4-(e&3));break;case"cstr":for(e=0,t="";(o=Sn(this,this.l+e++))!==0;)a.push(mr(o));t=a.join("");break;case"_wstr":for(e=0,t="";(o=Bn(this,this.l+e))!==0;)a.push(mr(o)),e+=2;e+=2,t=a.join("");break;case"dbcs-cont":for(t="",l=this.l,s=0;s<e;++s){if(this.lens&&this.lens.indexOf(l)!==-1)return o=Sn(this,l),this.l=l+1,u=Xn.call(this,e-s,o?"dbcs-cont":"sbcs-cont"),a.join("")+u;a.push(mr(Bn(this,l))),l+=2}t=a.join(""),e*=2;break;case"cpstr":case"sbcs-cont":for(t="",l=this.l,s=0;s!=e;++s){if(this.lens&&this.lens.indexOf(l)!==-1)return o=Sn(this,l),this.l=l+1,u=Xn.call(this,e-s,o?"dbcs-cont":"sbcs-cont"),a.join("")+u;a.push(mr(Sn(this,l))),l+=1}t=a.join("");break;default:switch(e){case 1:return r=Sn(this,this.l),this.l++,r;case 2:return r=(n==="i"?Lg:Bn)(this,this.l),this.l+=2,r;case 4:case-4:return n==="i"||(this[this.l+3]&128)===0?(r=(e>0?En:Hg)(this,this.l),this.l+=4,r):(i=et(this,this.l),this.l+=4,i);case 8:case-8:if(n==="f")return e==8?i=Ui(this,this.l):i=Ui([this[this.l+7],this[this.l+6],this[this.l+5],this[this.l+4],this[this.l+3],this[this.l+2],this[this.l+1],this[this.l+0]],0),this.l+=8,i;e=8;case 16:t=zu(this,this.l,e);break}}return this.l+=e,t}var Tg=function(e,n,t){e[t]=n&255,e[t+1]=n>>>8&255,e[t+2]=n>>>16&255,e[t+3]=n>>>24&255},Ig=function(e,n,t){e[t]=n&255,e[t+1]=n>>8&255,e[t+2]=n>>16&255,e[t+3]=n>>24&255},Mg=function(e,n,t){e[t]=n&255,e[t+1]=n>>>8&255};function Pg(e,n,t){var r=0,i=0;if(t==="dbcs"){for(i=0;i!=n.length;++i)Mg(this,n.charCodeAt(i),this.l+2*i);r=2*n.length}else if(t==="sbcs"||t=="cpstr"){for(n=n.replace(/[^\x00-\x7F]/g,"_"),i=0;i!=n.length;++i)this[this.l+i]=n.charCodeAt(i)&255;r=n.length}else if(t==="hex"){for(;i<e;++i)this[this.l++]=parseInt(n.slice(2*i,2*i+2),16)||0;return this}else if(t==="utf16le"){var a=Math.min(this.l+e,this.length);for(i=0;i<Math.min(n.length,e);++i){var o=n.charCodeAt(i);this[this.l++]=o&255,this[this.l++]=o>>8}for(;this.l<a;)this[this.l++]=0;return this}else switch(e){case 1:r=1,this[this.l]=n&255;break;case 2:r=2,this[this.l]=n&255,n>>>=8,this[this.l+1]=n&255;break;case 3:r=3,this[this.l]=n&255,n>>>=8,this[this.l+1]=n&255,n>>>=8,this[this.l+2]=n&255;break;case 4:r=4,Tg(this,n,this.l);break;case 8:if(r=8,t==="f"){Rg(this,n,this.l);break}case 16:break;case-4:r=4,Ig(this,n,this.l);break}return this.l+=r,this}function es(e,n){var t=zu(this,this.l,e.length>>1);if(t!==e)throw new Error(n+"Expected "+e+" saw "+t);this.l+=e.length>>1}function Wt(e,n){e.l=n,e.read_shift=Xn,e.chk=es,e.write_shift=Pg}function Bt(e){var n=Fn(e);return Wt(n,0),n}function Bg(e){return parseInt(Vg(e),10)-1}function ht(e){return""+(e+1)}function Vg(e){return e.replace(/\$(\d+)$/,"$1")}function zg(e){for(var n=$g(e),t=0,r=0;r!==n.length;++r)t=26*t+n.charCodeAt(r)-64;return t-1}function gt(e){if(e<0)throw new Error("invalid column "+e);var n="";for(++e;e;e=Math.floor((e-1)/26))n=String.fromCharCode((e-1)%26+65)+n;return n}function $g(e){return e.replace(/^\$([A-Z])/,"$1")}function jg(e){return e.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(",")}function Dt(e){for(var n=0,t=0,r=0;r<e.length;++r){var i=e.charCodeAt(r);i>=48&&i<=57?n=10*n+(i-48):i>=65&&i<=90&&(t=26*t+(i-64))}return{c:t-1,r:n-1}}function er(e){for(var n=e.c+1,t="";n;n=(n-1)/26|0)t=String.fromCharCode((n-1)%26+65)+t;return t+(e.r+1)}function hn(e){var n=e.indexOf(":");return n==-1?{s:Dt(e),e:Dt(e)}:{s:Dt(e.slice(0,n)),e:Dt(e.slice(n+1))}}function ft(e,n){return typeof n>"u"||typeof n=="number"?ft(e.s,e.e):(typeof e!="string"&&(e=er(e)),typeof n!="string"&&(n=er(n)),e==n?e:e+":"+n)}function ts(e){var n=hn(e);return"$"+gt(n.s.c)+"$"+ht(n.s.r)+":$"+gt(n.e.c)+"$"+ht(n.e.r)}function ns(e,n){if(!e)throw new Error("empty sheet name");return/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e)?"'"+e.replace(/'/g,"''")+"'":e}function Rt(e){var n={s:{c:0,r:0},e:{c:0,r:0}},t=0,r=0,i=0,a=e.length;for(t=0;r<a&&!((i=e.charCodeAt(r)-64)<1||i>26);++r)t=26*t+i;for(n.s.c=--t,t=0;r<a&&!((i=e.charCodeAt(r)-48)<0||i>9);++r)t=10*t+i;if(n.s.r=--t,r===a||i!=10)return n.e.c=n.s.c,n.e.r=n.s.r,n;for(++r,t=0;r!=a&&!((i=e.charCodeAt(r)-64)<1||i>26);++r)t=26*t+i;for(n.e.c=--t,t=0;r!=a&&!((i=e.charCodeAt(r)-48)<0||i>9);++r)t=10*t+i;return n.e.r=--t,n}function fo(e,n){var t=e.t=="d"&&n instanceof Date;if(e.z!=null)try{return e.w=Qn(e.z,t?$t(n):n)}catch{}try{return e.w=Qn((e.XF||{}).numFmtId||(t?14:0),t?$t(n):n)}catch{return""+n}}function cr(e,n,t){return e==null||e.t==null||e.t=="z"?"":e.w!==void 0?e.w:(e.t=="d"&&!e.z&&t&&t.dateNF&&(e.z=t.dateNF),e.t=="e"?Qt[e.v]||e.v:n==null?fo(e,e.v):fo(e,n))}function Ug(e,n){var t=n&&n.sheet?n.sheet:"Sheet1",r={};return r[t]=e,{SheetNames:[t],Sheets:r}}function qg(e){var n={},t=e||{};return t.dense&&(n["!data"]=[]),n}function rs(e,n,t){var r=t||{},i=e?e["!data"]!=null:r.dense,a=e||(i?{"!data":[]}:{});i&&!a["!data"]&&(a["!data"]=[]);var o=0,u=0;if(a&&r.origin!=null)if(typeof r.origin=="number")o=r.origin;else{var s=typeof r.origin=="string"?Dt(r.origin):r.origin;o=s.r,u=s.c}var l={s:{c:1e7,r:1e7},e:{c:0,r:0}};if(a["!ref"]){var c=Rt(a["!ref"]);l.s.c=c.s.c,l.s.r=c.s.r,l.e.c=Math.max(l.e.c,c.e.c),l.e.r=Math.max(l.e.r,c.e.r),o==-1&&(l.e.r=o=a["!ref"]?c.e.r+1:0)}else l.s.c=l.e.c=l.s.r=l.e.r=0;for(var g=[],b=!1,h=0;h!=n.length;++h)if(n[h]){if(!Array.isArray(n[h]))throw new Error("aoa_to_sheet expects an array of arrays");var S=o+h;i&&(a["!data"][S]||(a["!data"][S]=[]),g=a["!data"][S]);for(var C=n[h],E=0;E!=C.length;++E)if(!(typeof C[E]>"u")){var w={v:C[E],t:""},D=u+E;if(l.s.r>S&&(l.s.r=S),l.s.c>D&&(l.s.c=D),l.e.r<S&&(l.e.r=S),l.e.c<D&&(l.e.c=D),b=!0,C[E]&&typeof C[E]=="object"&&!Array.isArray(C[E])&&!(C[E]instanceof Date))w=C[E];else if(Array.isArray(w.v)&&(w.f=C[E][1],w.v=w.v[0]),w.v===null)if(w.f)w.t="n";else if(r.nullError)w.t="e",w.v=0;else if(r.sheetStubs)w.t="z";else continue;else typeof w.v=="number"?isFinite(w.v)?w.t="n":isNaN(w.v)?(w.t="e",w.v=15):(w.t="e",w.v=7):typeof w.v=="boolean"?w.t="b":w.v instanceof Date?(w.z=r.dateNF||xt[14],r.UTC||(w.v=Ur(w.v)),r.cellDates?(w.t="d",w.w=Qn(w.z,$t(w.v,r.date1904))):(w.t="n",w.v=$t(w.v,r.date1904),w.w=Qn(w.z,w.v))):w.t="s";if(i)g[D]&&g[D].z&&(w.z=g[D].z),g[D]=w;else{var N=gt(D)+(S+1);a[N]&&a[N].z&&(w.z=a[N].z),a[N]=w}}}return b&&l.s.c<104e5&&(a["!ref"]=ft(l)),a}function Wg(e,n){return rs(null,e,n)}var Qt={0:"#NULL!",7:"#DIV/0!",15:"#VALUE!",23:"#REF!",29:"#NAME?",36:"#NUM!",42:"#N/A",43:"#GETTING_DATA",255:"#WTF?"},po={"#NULL!":0,"#DIV/0!":7,"#VALUE!":15,"#REF!":23,"#NAME?":29,"#NUM!":36,"#N/A":42,"#GETTING_DATA":43,"#WTF?":255},Xg={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":"workbooks","application/vnd.ms-excel.sheet.macroEnabled.main+xml":"workbooks","application/vnd.ms-excel.sheet.binary.macroEnabled.main":"workbooks","application/vnd.ms-excel.addin.macroEnabled.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":"sheets","application/vnd.ms-excel.worksheet":"sheets","application/vnd.ms-excel.binIndexWs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":"charts","application/vnd.ms-excel.chartsheet":"charts","application/vnd.ms-excel.macrosheet+xml":"macros","application/vnd.ms-excel.macrosheet":"macros","application/vnd.ms-excel.intlmacrosheet":"TODO","application/vnd.ms-excel.binIndexMs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":"dialogs","application/vnd.ms-excel.dialogsheet":"dialogs","application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":"strs","application/vnd.ms-excel.sharedStrings":"strs","application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":"styles","application/vnd.ms-excel.styles":"styles","application/vnd.openxmlformats-package.core-properties+xml":"coreprops","application/vnd.openxmlformats-officedocument.custom-properties+xml":"custprops","application/vnd.openxmlformats-officedocument.extended-properties+xml":"extprops","application/vnd.openxmlformats-officedocument.customXmlProperties+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":"comments","application/vnd.ms-excel.comments":"comments","application/vnd.ms-excel.threadedcomments+xml":"threadedcomments","application/vnd.ms-excel.person+xml":"people","application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":"metadata","application/vnd.ms-excel.sheetMetadata":"metadata","application/vnd.ms-excel.pivotTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.chart+xml":"TODO","application/vnd.ms-office.chartcolorstyle+xml":"TODO","application/vnd.ms-office.chartstyle+xml":"TODO","application/vnd.ms-office.chartex+xml":"TODO","application/vnd.ms-excel.calcChain":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":"TODO","application/vnd.ms-office.activeX":"TODO","application/vnd.ms-office.activeX+xml":"TODO","application/vnd.ms-excel.attachedToolbars":"TODO","application/vnd.ms-excel.connections":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":"TODO","application/vnd.ms-excel.externalLink":"links","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":"links","application/vnd.ms-excel.pivotCacheDefinition":"TODO","application/vnd.ms-excel.pivotCacheRecords":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":"TODO","application/vnd.ms-excel.queryTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":"TODO","application/vnd.ms-excel.userNames":"TODO","application/vnd.ms-excel.revisionHeaders":"TODO","application/vnd.ms-excel.revisionLog":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":"TODO","application/vnd.ms-excel.tableSingleCells":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":"TODO","application/vnd.ms-excel.slicer":"TODO","application/vnd.ms-excel.slicerCache":"TODO","application/vnd.ms-excel.slicer+xml":"TODO","application/vnd.ms-excel.slicerCache+xml":"TODO","application/vnd.ms-excel.wsSortMap":"TODO","application/vnd.ms-excel.table":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":"TODO","application/vnd.openxmlformats-officedocument.theme+xml":"themes","application/vnd.openxmlformats-officedocument.themeOverride+xml":"TODO","application/vnd.ms-excel.Timeline+xml":"TODO","application/vnd.ms-excel.TimelineCache+xml":"TODO","application/vnd.ms-office.vbaProject":"vba","application/vnd.ms-office.vbaProjectSignature":"TODO","application/vnd.ms-office.volatileDependencies":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":"TODO","application/vnd.ms-excel.controlproperties+xml":"TODO","application/vnd.openxmlformats-officedocument.model+data":"TODO","application/vnd.ms-excel.Survey+xml":"TODO","application/vnd.openxmlformats-officedocument.drawing+xml":"drawings","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":"TODO","application/vnd.openxmlformats-officedocument.vmlDrawing":"TODO","application/vnd.openxmlformats-package.relationships+xml":"rels","application/vnd.openxmlformats-officedocument.oleObject":"TODO","image/png":"TODO",sheet:"js"},Cr={workbooks:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",xlsm:"application/vnd.ms-excel.sheet.macroEnabled.main+xml",xlsb:"application/vnd.ms-excel.sheet.binary.macroEnabled.main",xlam:"application/vnd.ms-excel.addin.macroEnabled.main+xml",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"},strs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",xlsb:"application/vnd.ms-excel.sharedStrings"},comments:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",xlsb:"application/vnd.ms-excel.comments"},sheets:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",xlsb:"application/vnd.ms-excel.worksheet"},charts:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",xlsb:"application/vnd.ms-excel.chartsheet"},dialogs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",xlsb:"application/vnd.ms-excel.dialogsheet"},macros:{xlsx:"application/vnd.ms-excel.macrosheet+xml",xlsb:"application/vnd.ms-excel.macrosheet"},metadata:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",xlsb:"application/vnd.ms-excel.sheetMetadata"},styles:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",xlsb:"application/vnd.ms-excel.styles"}};function Kg(){return{workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],threadedcomments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],metadata:[],people:[],TODO:[],xmlns:""}}function Yg(e,n,t){var r=lg(Xg),i=[],a;i[i.length]=Xe,i[i.length]=W("Types",null,{xmlns:xe.CT,"xmlns:xsd":xe.xsd,"xmlns:xsi":xe.xsi}),i=i.concat([["xml","application/xml"],["bin","application/vnd.ms-excel.sheet.binary.macroEnabled.main"],["vml","application/vnd.openxmlformats-officedocument.vmlDrawing"],["data","application/vnd.openxmlformats-officedocument.model+data"],["bmp","image/bmp"],["png","image/png"],["gif","image/gif"],["emf","image/x-emf"],["wmf","image/x-wmf"],["jpg","image/jpeg"],["jpeg","image/jpeg"],["tif","image/tiff"],["tiff","image/tiff"],["pdf","application/pdf"],["rels","application/vnd.openxmlformats-package.relationships+xml"]].map(function(l){return W("Default",null,{Extension:l[0],ContentType:l[1]})}));var o=function(l){e[l]&&e[l].length>0&&(a=e[l][0],i[i.length]=W("Override",null,{PartName:(a[0]=="/"?"":"/")+a,ContentType:Cr[l][n.bookType]||Cr[l].xlsx}))},u=function(l){(e[l]||[]).forEach(function(c){i[i.length]=W("Override",null,{PartName:(c[0]=="/"?"":"/")+c,ContentType:Cr[l][n.bookType]||Cr[l].xlsx})})},s=function(l){(e[l]||[]).forEach(function(c){i[i.length]=W("Override",null,{PartName:(c[0]=="/"?"":"/")+c,ContentType:r[l][0]})})};return o("workbooks"),u("sheets"),u("charts"),s("themes"),["strs","styles"].forEach(o),["coreprops","extprops","custprops"].forEach(s),s("vba"),s("comments"),s("threadedcomments"),s("drawings"),u("metadata"),s("people"),i.length>2&&(i[i.length]="</Types>",i[1]=i[1].replace("/>",">")),i.join("")}var ve={WB:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",HLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",VML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",XPATH:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",XMISS:"http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",CMNT:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",SST:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",STY:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",THEME:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",WS:["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet","http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],DRAW:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",XLMETA:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",TCMNT:"http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",PEOPLE:"http://schemas.microsoft.com/office/2017/10/relationships/person",VBA:"http://schemas.microsoft.com/office/2006/relationships/vbaProject"};function Jg(e){var n=e.lastIndexOf("/");return e.slice(0,n+1)+"_rels/"+e.slice(n+1)+".rels"}function gi(e){var n=[Xe,W("Relationships",null,{xmlns:xe.RELS})];return nn(e["!id"]).forEach(function(t){n[n.length]=W("Relationship",null,e["!id"][t])}),n.length>2&&(n[n.length]="</Relationships>",n[1]=n[1].replace("/>",">")),n.join("")}function Ne(e,n,t,r,i,a){if(i||(i={}),e["!id"]||(e["!id"]={}),e["!idx"]||(e["!idx"]=1),n<0)for(n=e["!idx"];e["!id"]["rId"+n];++n);if(e["!idx"]=n+1,i.Id="rId"+n,i.Type=r,i.Target=t,[ve.HLINK,ve.XPATH,ve.XMISS].indexOf(i.Type)>-1&&(i.TargetMode="External"),e["!id"][i.Id])throw new Error("Cannot rewrite rId "+n);return e["!id"][i.Id]=i,e[("/"+i.Target).replace("//","/")]=i,n}var mo=[["cp:category","Category"],["cp:contentStatus","ContentStatus"],["cp:keywords","Keywords"],["cp:lastModifiedBy","LastAuthor"],["cp:lastPrinted","LastPrinted"],["cp:revision","RevNumber"],["cp:version","Version"],["dc:creator","Author"],["dc:description","Comments"],["dc:identifier","Identifier"],["dc:language","Language"],["dc:subject","Subject"],["dc:title","Title"],["dcterms:created","CreatedDate","date"],["dcterms:modified","ModifiedDate","date"]];function fi(e,n,t,r,i){i[e]!=null||n==null||n===""||(i[e]=n,n=ce(n),r[r.length]=t?W(e,n,t):Et(e,n))}function Zg(e,n){var t=n||{},r=[Xe,W("cp:coreProperties",null,{"xmlns:cp":xe.CORE_PROPS,"xmlns:dc":xe.dc,"xmlns:dcterms":xe.dcterms,"xmlns:dcmitype":xe.dcmitype,"xmlns:xsi":xe.xsi})],i={};if(!e&&!t.Props)return r.join("");e&&(e.CreatedDate!=null&&fi("dcterms:created",typeof e.CreatedDate=="string"?e.CreatedDate:ji(e.CreatedDate,t.WTF),{"xsi:type":"dcterms:W3CDTF"},r,i),e.ModifiedDate!=null&&fi("dcterms:modified",typeof e.ModifiedDate=="string"?e.ModifiedDate:ji(e.ModifiedDate,t.WTF),{"xsi:type":"dcterms:W3CDTF"},r,i));for(var a=0;a!=mo.length;++a){var o=mo[a],u=t.Props&&t.Props[o[1]]!=null?t.Props[o[1]]:e?e[o[1]]:null;u===!0?u="1":u===!1?u="0":typeof u=="number"&&(u=String(u)),u!=null&&fi(o[0],u,null,r,i)}return r.length>2&&(r[r.length]="</cp:coreProperties>",r[1]=r[1].replace("/>",">")),r.join("")}var Qg=[["Application","Application","string"],["AppVersion","AppVersion","string"],["Company","Company","string"],["DocSecurity","DocSecurity","string"],["Manager","Manager","string"],["HyperlinksChanged","HyperlinksChanged","bool"],["SharedDoc","SharedDoc","bool"],["LinksUpToDate","LinksUpToDate","bool"],["ScaleCrop","ScaleCrop","bool"],["HeadingPairs","HeadingPairs","raw"],["TitlesOfParts","TitlesOfParts","raw"]];function ef(e){var n=[],t=W;return e||(e={}),e.Application="SheetJS",n[n.length]=Xe,n[n.length]=W("Properties",null,{xmlns:xe.EXT_PROPS,"xmlns:vt":xe.vt}),Qg.forEach(function(r){if(e[r[1]]!==void 0){var i;switch(r[2]){case"string":i=ce(String(e[r[1]]));break;case"bool":i=e[r[1]]?"true":"false";break}i!==void 0&&(n[n.length]=t(r[0],i))}}),n[n.length]=t("HeadingPairs",t("vt:vector",t("vt:variant","<vt:lpstr>Worksheets</vt:lpstr>")+t("vt:variant",t("vt:i4",String(e.Worksheets))),{size:2,baseType:"variant"})),n[n.length]=t("TitlesOfParts",t("vt:vector",e.SheetNames.map(function(r){return"<vt:lpstr>"+ce(r)+"</vt:lpstr>"}).join(""),{size:e.Worksheets,baseType:"lpstr"})),n.length>2&&(n[n.length]="</Properties>",n[1]=n[1].replace("/>",">")),n.join("")}function tf(e){var n=[Xe,W("Properties",null,{xmlns:xe.CUST_PROPS,"xmlns:vt":xe.vt})];if(!e)return n.join("");var t=1;return nn(e).forEach(function(i){++t,n[n.length]=W("property",Dg(e[i]),{fmtid:"{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",pid:t,name:ce(i)})}),n.length>2&&(n[n.length]="</Properties>",n[1]=n[1].replace("/>",">")),n.join("")}var nf=/^\s|\s$|[\t\n\r]/;function rf(e,n){if(!n.bookSST)return"";var t=[Xe];t[t.length]=W("sst",null,{xmlns:Ln[0],count:e.Count,uniqueCount:e.Unique});for(var r=0;r!=e.length;++r)if(e[r]!=null){var i=e[r],a="<si>";i.r?a+=i.r:(a+="<t",i.t||(i.t=""),typeof i.t!="string"&&(i.t=String(i.t)),i.t.match(nf)&&(a+=' xml:space="preserve"'),a+=">"+ce(i.t)+"</t>"),a+="</si>",t[t.length]=a}return t.length>2&&(t[t.length]="</sst>",t[1]=t[1].replace("/>",">")),t.join("")}function af(e){for(var n=[],t=e.split(""),r=0;r<t.length;++r)n[r]=t[r].charCodeAt(0);return n}function of(e){var n=0,t,r=af(e),i=r.length+1,a,o,u,s,l;for(t=Fn(i),t[0]=r.length,a=1;a!=i;++a)t[a]=r[a-1];for(a=i-1;a>=0;--a)o=t[a],u=(n&16384)===0?0:1,s=n<<1&32767,l=u|s,n=l^o;return n^52811}var uf=6,Mr=uf;function sf(e){return Math.floor((e-5)/Mr*100+.5)/100}function lf(e){return Math.round((e*Mr+5)/Mr*256)/256}var cf=96,df=cf;function bo(e){return e*96/df}function hf(e){var n=["<numFmts>"];return[[5,8],[23,26],[41,44],[50,392]].forEach(function(t){for(var r=t[0];r<=t[1];++r)e[r]!=null&&(n[n.length]=W("numFmt",null,{numFmtId:r,formatCode:ce(e[r])}))}),n.length===1?"":(n[n.length]="</numFmts>",n[0]=W("numFmts",null,{count:n.length-2}).replace("/>",">"),n.join(""))}function gf(e){var n=[];return n[n.length]=W("cellXfs",null),e.forEach(function(t){n[n.length]=W("xf",null,t)}),n[n.length]="</cellXfs>",n.length===2?"":(n[0]=W("cellXfs",null,{count:n.length-2}).replace("/>",">"),n.join(""))}function ff(e,n){var t=[Xe,W("styleSheet",null,{xmlns:Ln[0],"xmlns:vt":xe.vt})],r;return e.SSF&&(r=hf(e.SSF))!=null&&(t[t.length]=r),t[t.length]='<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>',t[t.length]='<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>',t[t.length]='<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>',t[t.length]='<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>',(r=gf(n.cellXfs))&&(t[t.length]=r),t[t.length]='<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>',t[t.length]='<dxfs count="0"/>',t[t.length]='<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>',t.length>2&&(t[t.length]="</styleSheet>",t[1]=t[1].replace("/>",">")),t.join("")}function pf(e,n){if(n&&n.themeXLSX)return n.themeXLSX;if(e&&typeof e.raw=="string")return e.raw;var t=[Xe];return t[t.length]='<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">',t[t.length]="<a:themeElements>",t[t.length]='<a:clrScheme name="Office">',t[t.length]='<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>',t[t.length]='<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>',t[t.length]='<a:dk2><a:srgbClr val="1F497D"/></a:dk2>',t[t.length]='<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>',t[t.length]='<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>',t[t.length]='<a:accent2><a:srgbClr val="C0504D"/></a:accent2>',t[t.length]='<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>',t[t.length]='<a:accent4><a:srgbClr val="8064A2"/></a:accent4>',t[t.length]='<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>',t[t.length]='<a:accent6><a:srgbClr val="F79646"/></a:accent6>',t[t.length]='<a:hlink><a:srgbClr val="0000FF"/></a:hlink>',t[t.length]='<a:folHlink><a:srgbClr val="800080"/></a:folHlink>',t[t.length]="</a:clrScheme>",t[t.length]='<a:fontScheme name="Office">',t[t.length]="<a:majorFont>",t[t.length]='<a:latin typeface="Cambria"/>',t[t.length]='<a:ea typeface=""/>',t[t.length]='<a:cs typeface=""/>',t[t.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',t[t.length]='<a:font script="Hang" typeface="맑은 고딕"/>',t[t.length]='<a:font script="Hans" typeface="宋体"/>',t[t.length]='<a:font script="Hant" typeface="新細明體"/>',t[t.length]='<a:font script="Arab" typeface="Times New Roman"/>',t[t.length]='<a:font script="Hebr" typeface="Times New Roman"/>',t[t.length]='<a:font script="Thai" typeface="Tahoma"/>',t[t.length]='<a:font script="Ethi" typeface="Nyala"/>',t[t.length]='<a:font script="Beng" typeface="Vrinda"/>',t[t.length]='<a:font script="Gujr" typeface="Shruti"/>',t[t.length]='<a:font script="Khmr" typeface="MoolBoran"/>',t[t.length]='<a:font script="Knda" typeface="Tunga"/>',t[t.length]='<a:font script="Guru" typeface="Raavi"/>',t[t.length]='<a:font script="Cans" typeface="Euphemia"/>',t[t.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',t[t.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',t[t.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',t[t.length]='<a:font script="Thaa" typeface="MV Boli"/>',t[t.length]='<a:font script="Deva" typeface="Mangal"/>',t[t.length]='<a:font script="Telu" typeface="Gautami"/>',t[t.length]='<a:font script="Taml" typeface="Latha"/>',t[t.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',t[t.length]='<a:font script="Orya" typeface="Kalinga"/>',t[t.length]='<a:font script="Mlym" typeface="Kartika"/>',t[t.length]='<a:font script="Laoo" typeface="DokChampa"/>',t[t.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',t[t.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',t[t.length]='<a:font script="Viet" typeface="Times New Roman"/>',t[t.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',t[t.length]='<a:font script="Geor" typeface="Sylfaen"/>',t[t.length]="</a:majorFont>",t[t.length]="<a:minorFont>",t[t.length]='<a:latin typeface="Calibri"/>',t[t.length]='<a:ea typeface=""/>',t[t.length]='<a:cs typeface=""/>',t[t.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',t[t.length]='<a:font script="Hang" typeface="맑은 고딕"/>',t[t.length]='<a:font script="Hans" typeface="宋体"/>',t[t.length]='<a:font script="Hant" typeface="新細明體"/>',t[t.length]='<a:font script="Arab" typeface="Arial"/>',t[t.length]='<a:font script="Hebr" typeface="Arial"/>',t[t.length]='<a:font script="Thai" typeface="Tahoma"/>',t[t.length]='<a:font script="Ethi" typeface="Nyala"/>',t[t.length]='<a:font script="Beng" typeface="Vrinda"/>',t[t.length]='<a:font script="Gujr" typeface="Shruti"/>',t[t.length]='<a:font script="Khmr" typeface="DaunPenh"/>',t[t.length]='<a:font script="Knda" typeface="Tunga"/>',t[t.length]='<a:font script="Guru" typeface="Raavi"/>',t[t.length]='<a:font script="Cans" typeface="Euphemia"/>',t[t.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',t[t.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',t[t.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',t[t.length]='<a:font script="Thaa" typeface="MV Boli"/>',t[t.length]='<a:font script="Deva" typeface="Mangal"/>',t[t.length]='<a:font script="Telu" typeface="Gautami"/>',t[t.length]='<a:font script="Taml" typeface="Latha"/>',t[t.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',t[t.length]='<a:font script="Orya" typeface="Kalinga"/>',t[t.length]='<a:font script="Mlym" typeface="Kartika"/>',t[t.length]='<a:font script="Laoo" typeface="DokChampa"/>',t[t.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',t[t.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',t[t.length]='<a:font script="Viet" typeface="Arial"/>',t[t.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',t[t.length]='<a:font script="Geor" typeface="Sylfaen"/>',t[t.length]="</a:minorFont>",t[t.length]="</a:fontScheme>",t[t.length]='<a:fmtScheme name="Office">',t[t.length]="<a:fillStyleLst>",t[t.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:lin ang="16200000" scaled="1"/>',t[t.length]="</a:gradFill>",t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:lin ang="16200000" scaled="0"/>',t[t.length]="</a:gradFill>",t[t.length]="</a:fillStyleLst>",t[t.length]="<a:lnStyleLst>",t[t.length]='<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>',t[t.length]='<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',t[t.length]='<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',t[t.length]="</a:lnStyleLst>",t[t.length]="<a:effectStyleLst>",t[t.length]="<a:effectStyle>",t[t.length]="<a:effectLst>",t[t.length]='<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>',t[t.length]="</a:effectLst>",t[t.length]="</a:effectStyle>",t[t.length]="<a:effectStyle>",t[t.length]="<a:effectLst>",t[t.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',t[t.length]="</a:effectLst>",t[t.length]="</a:effectStyle>",t[t.length]="<a:effectStyle>",t[t.length]="<a:effectLst>",t[t.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',t[t.length]="</a:effectLst>",t[t.length]='<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>',t[t.length]='<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>',t[t.length]="</a:effectStyle>",t[t.length]="</a:effectStyleLst>",t[t.length]="<a:bgFillStyleLst>",t[t.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>',t[t.length]="</a:gradFill>",t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>',t[t.length]="</a:gradFill>",t[t.length]="</a:bgFillStyleLst>",t[t.length]="</a:fmtScheme>",t[t.length]="</a:themeElements>",t[t.length]="<a:objectDefaults>",t[t.length]="<a:spDef>",t[t.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>',t[t.length]="</a:spDef>",t[t.length]="<a:lnDef>",t[t.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>',t[t.length]="</a:lnDef>",t[t.length]="</a:objectDefaults>",t[t.length]="<a:extraClrSchemeLst/>",t[t.length]="</a:theme>",t.join("")}function mf(){var e=[Xe];return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
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
</metadata>`),e.join("")}function bf(e,n,t){var r=[21600,21600],i=["m0,0l0",r[1],r[0],r[1],r[0],"0xe"].join(","),a=[W("xml",null,{"xmlns:v":vr.v,"xmlns:o":vr.o,"xmlns:x":vr.x,"xmlns:mv":vr.mv}).replace(/\/>/,">"),W("o:shapelayout",W("o:idmap",null,{"v:ext":"edit",data:e}),{"v:ext":"edit"})],o=65536*e,u=n||[];return u.length>0&&a.push(W("v:shapetype",[W("v:stroke",null,{joinstyle:"miter"}),W("v:path",null,{gradientshapeok:"t","o:connecttype":"rect"})].join(""),{id:"_x0000_t202",coordsize:r.join(","),"o:spt":202,path:i})),u.forEach(function(s){++o,a.push(kf(s,o))}),a.push("</xml>"),a.join("")}function kf(e,n,t){var r=Dt(e[0]),i={color2:"#BEFF82",type:"gradient"};i.type=="gradient"&&(i.angle="-180");var a=i.type=="gradient"?W("o:fill",null,{type:"gradientUnscaled","v:ext":"view"}):null,o=W("v:fill",a,i),u={on:"t",obscured:"t"};return["<v:shape"+Vu({id:"_x0000_s"+n,type:"#_x0000_t202",style:"position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10"+(e[1].hidden?";visibility:hidden":""),fillcolor:"#ECFAD4",strokecolor:"#edeaa1"})+">",o,W("v:shadow",null,u),W("v:path",null,{"o:connecttype":"none"}),'<v:textbox><div style="text-align:left"></div></v:textbox>','<x:ClientData ObjectType="Note">',"<x:MoveWithCells/>","<x:SizeWithCells/>",Et("x:Anchor",[r.c+1,0,r.r+1,0,r.c+3,20,r.r+5,20].join(",")),Et("x:AutoFill","False"),Et("x:Row",String(r.r)),Et("x:Column",String(r.c)),e[1].hidden?"":"<x:Visible/>","</x:ClientData>","</v:shape>"].join("")}function vf(e){var n=[Xe,W("comments",null,{xmlns:Ln[0]})],t=[];return n.push("<authors>"),e.forEach(function(r){r[1].forEach(function(i){var a=ce(i.a);t.indexOf(a)==-1&&(t.push(a),n.push("<author>"+a+"</author>")),i.T&&i.ID&&t.indexOf("tc="+i.ID)==-1&&(t.push("tc="+i.ID),n.push("<author>tc="+i.ID+"</author>"))})}),t.length==0&&(t.push("SheetJ5"),n.push("<author>SheetJ5</author>")),n.push("</authors>"),n.push("<commentList>"),e.forEach(function(r){var i=0,a=[],o=0;if(r[1][0]&&r[1][0].T&&r[1][0].ID&&(i=t.indexOf("tc="+r[1][0].ID)),r[1].forEach(function(l){l.a&&(i=t.indexOf(ce(l.a))),l.T&&++o,a.push(l.t==null?"":ce(l.t))}),o===0)r[1].forEach(function(l){n.push('<comment ref="'+r[0]+'" authorId="'+t.indexOf(ce(l.a))+'"><text>'),n.push(Et("t",l.t==null?"":ce(l.t))),n.push("</text></comment>")});else{r[1][0]&&r[1][0].T&&r[1][0].ID&&(i=t.indexOf("tc="+r[1][0].ID)),n.push('<comment ref="'+r[0]+'" authorId="'+i+'"><text>');for(var u=`Comment:
    `+a[0]+`
`,s=1;s<a.length;++s)u+=`Reply:
    `+a[s]+`
`;n.push(Et("t",ce(u))),n.push("</text></comment>")}}),n.push("</commentList>"),n.length>2&&(n[n.length]="</comments>",n[1]=n[1].replace("/>",">")),n.join("")}function Cf(e,n,t){var r=[Xe,W("ThreadedComments",null,{xmlns:xe.TCMNT}).replace(/[\/]>/,">")];return e.forEach(function(i){var a="";(i[1]||[]).forEach(function(o,u){if(!o.T){delete o.ID;return}o.a&&n.indexOf(o.a)==-1&&n.push(o.a);var s={ref:i[0],id:"{54EE7951-7262-4200-6969-"+("000000000000"+t.tcid++).slice(-12)+"}"};u==0?a=s.id:s.parentId=a,o.ID=s.id,o.a&&(s.personId="{54EE7950-7262-4200-6969-"+("000000000000"+n.indexOf(o.a)).slice(-12)+"}"),r.push(W("threadedComment",Et("text",o.t||""),s))})}),r.push("</ThreadedComments>"),r.join("")}function yf(e){var n=[Xe,W("personList",null,{xmlns:xe.TCMNT,"xmlns:x":Ln[0]}).replace(/[\/]>/,">")];return e.forEach(function(t,r){n.push(W("person",null,{displayName:t,id:"{54EE7950-7262-4200-6969-"+("000000000000"+r).slice(-12)+"}",userId:t,providerId:"None"}))}),n.push("</personList>"),n.join("")}var Sf=["xlsb","xlsm","xlam","biff8","xla"],Ef=/(^|[^._A-Z0-9])(\$?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])(\$?)(\d{1,7})(?![_.\(A-Za-z0-9])/g;try{Ef=/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g}catch{}var Er=typeof Map<"u";function wf(e,n,t){var r=0,i=e.length;if(t){if(Er?t.has(n):Object.prototype.hasOwnProperty.call(t,n)){for(var a=Er?t.get(n):t[n];r<a.length;++r)if(e[a[r]].t===n)return e.Count++,a[r]}}else for(;r<i;++r)if(e[r].t===n)return e.Count++,r;return e[i]={t:n},e.Count++,e.Unique++,t&&(Er?(t.has(n)||t.set(n,[]),t.get(n).push(i)):(Object.prototype.hasOwnProperty.call(t,n)||(t[n]=[]),t[n].push(i))),i}function xf(e,n){var t={min:e+1,max:e+1},r=-1;return n.MDW&&(Mr=n.MDW),n.width!=null?t.customWidth=1:n.wpx!=null?r=sf(n.wpx):n.wch!=null&&(r=n.wch),r>-1?(t.width=lf(r),t.customWidth=1):n.width!=null&&(t.width=n.width),n.hidden&&(t.hidden=!0),n.level!=null&&(t.outlineLevel=t.level=n.level),t}function _f(e,n){if(e){var t=[.7,.7,.75,.75,.3,.3];e.left==null&&(e.left=t[0]),e.right==null&&(e.right=t[1]),e.top==null&&(e.top=t[2]),e.bottom==null&&(e.bottom=t[3]),e.header==null&&(e.header=t[4]),e.footer==null&&(e.footer=t[5])}}function is(e,n,t){var r=t.revssf[n.z!=null?n.z:"General"],i=60,a=e.length;if(r==null&&t.ssf){for(;i<392;++i)if(t.ssf[i]==null){ag(n.z,i),t.ssf[i]=n.z,t.revssf[n.z]=r=i;break}}for(i=0;i!=a;++i)if(e[i].numFmtId===r)return i;return e[a]={numFmtId:r,fontId:0,fillId:0,borderId:0,xfId:0,applyNumberFormat:1},a}function Af(e,n,t){if(e&&e["!ref"]){var r=Rt(e["!ref"]);if(r.e.c<r.s.c||r.e.r<r.s.r)throw new Error("Bad range ("+t+"): "+e["!ref"])}}function Of(e){if(e.length===0)return"";for(var n='<mergeCells count="'+e.length+'">',t=0;t!=e.length;++t)n+='<mergeCell ref="'+ft(e[t])+'"/>';return n+"</mergeCells>"}function Gf(e,n,t,r,i){var a=!1,o={},u=null;if(r.bookType!=="xlsx"&&n.vbaraw){var s=n.SheetNames[t];try{n.Workbook&&(s=n.Workbook.Sheets[t].CodeName||s)}catch{}a=!0,o.codeName=Gg(ce(s))}if(e&&e["!outline"]){var l={summaryBelow:1,summaryRight:1};e["!outline"].above&&(l.summaryBelow=0),e["!outline"].left&&(l.summaryRight=0),u=(u||"")+W("outlinePr",null,l)}!a&&!u||(i[i.length]=W("sheetPr",u,o))}var Ff=["objects","scenarios","selectLockedCells","selectUnlockedCells"],Df=["formatColumns","formatRows","formatCells","insertColumns","insertRows","insertHyperlinks","deleteColumns","deleteRows","sort","autoFilter","pivotTables"];function Nf(e){var n={sheet:1};return Ff.forEach(function(t){e[t]!=null&&e[t]&&(n[t]="1")}),Df.forEach(function(t){e[t]!=null&&!e[t]&&(n[t]="0")}),e.password&&(n.password=of(e.password).toString(16).toUpperCase()),W("sheetProtection",null,n)}function Rf(e){return _f(e),W("pageMargins",null,e)}function Lf(e,n){for(var t=["<cols>"],r,i=0;i!=n.length;++i)(r=n[i])&&(t[t.length]=W("col",null,xf(i,r)));return t[t.length]="</cols>",t.join("")}function Hf(e,n,t,r){var i=typeof e.ref=="string"?e.ref:ft(e.ref);t.Workbook||(t.Workbook={Sheets:[]}),t.Workbook.Names||(t.Workbook.Names=[]);var a=t.Workbook.Names,o=hn(i);o.s.r==o.e.r&&(o.e.r=hn(n["!ref"]).e.r,i=ft(o));for(var u=0;u<a.length;++u){var s=a[u];if(s.Name=="_xlnm._FilterDatabase"&&s.Sheet==r){s.Ref=ns(t.SheetNames[r])+"!"+ts(i);break}}return u==a.length&&a.push({Name:"_xlnm._FilterDatabase",Sheet:r,Ref:"'"+t.SheetNames[r]+"'!"+i}),W("autoFilter",null,{ref:i})}function Tf(e,n,t,r){var i={workbookViewId:"0"};return(((r||{}).Workbook||{}).Views||[])[0]&&(i.rightToLeft=r.Workbook.Views[0].RTL?"1":"0"),W("sheetViews",W("sheetView",null,i),{})}function If(e,n,t,r,i,a,o){if(e.c&&t["!comments"].push([n,e.c]),(e.v===void 0||e.t==="z"&&!(r||{}).sheetStubs)&&typeof e.f!="string"&&typeof e.z>"u")return"";var u="",s=e.t,l=e.v;if(e.t!=="z")switch(e.t){case"b":u=e.v?"1":"0";break;case"n":isNaN(e.v)?(e.t="e",u=Qt[e.v=36]):isFinite(e.v)?u=""+e.v:(e.t="e",u=Qt[e.v=7]);break;case"e":u=Qt[e.v];break;case"d":if(r&&r.cellDates){var c=$i(e.v,o);u=c.toISOString(),c.getUTCFullYear()<1900&&(u=u.slice(u.indexOf("T")+1).replace("Z",""))}else e=sr(e),e.t="n",u=""+(e.v=$t($i(e.v,o),o));typeof e.z>"u"&&(e.z=xt[14]);break;default:u=e.v;break}var g=e.t=="z"||e.v==null?"":Et("v",ce(u)),b={r:n},h=is(r.cellXfs,e,r);switch(h!==0&&(b.s=h),e.t){case"n":break;case"d":b.t="d";break;case"b":b.t="b";break;case"e":b.t="e";break;case"z":break;default:if(e.v==null){delete e.t;break}if(e.v.length>32767)throw new Error("Text length must not exceed 32767 characters");if(r&&r.bookSST){g=Et("v",""+wf(r.Strings,e.v,r.revStrings)),b.t="s";break}else b.t="str";break}if(e.t!=s&&(e.t=s,e.v=l),typeof e.f=="string"&&e.f){var S=e.F&&e.F.slice(0,n.length)==n?{t:"array",ref:e.F}:null;g=W("f",ce(e.f),S)+(e.v!=null?g:"")}return e.l&&(e.l.display=ce(u),t["!links"].push([n,e.l])),e.D&&(b.cm=1),W("c",g,b)}function Mf(e,n,t,r){var i=[],a=[],o=Rt(e["!ref"]),u="",s,l="",c=[],g=0,b=0,h=e["!rows"],S=e["!data"]!=null,C=S?e["!data"]:[],E={r:l},w,D=-1,N=(((r||{}).Workbook||{}).WBProps||{}).date1904;for(b=o.s.c;b<=o.e.c;++b)c[b]=gt(b);for(g=o.s.r;g<=o.e.r;++g){a=[],l=ht(g);var V=S?C[g]:[];for(b=o.s.c;b<=o.e.c;++b){s=c[b]+l;var L=S?V[b]:e[s];L!==void 0&&(u=If(L,s,e,n,t,r,N))!=null&&a.push(u)}(a.length>0||h&&h[g])&&(E={r:l},h&&h[g]&&(w=h[g],w.hidden&&(E.hidden=1),D=-1,w.hpx?D=bo(w.hpx):w.hpt&&(D=w.hpt),D>-1&&(E.ht=D,E.customHeight=1),w.level&&(E.outlineLevel=w.level)),i[i.length]=W("row",a.join(""),E))}if(h)for(;g<h.length;++g)h&&h[g]&&(E={r:g+1},w=h[g],w.hidden&&(E.hidden=1),D=-1,w.hpx?D=bo(w.hpx):w.hpt&&(D=w.hpt),D>-1&&(E.ht=D,E.customHeight=1),w.level&&(E.outlineLevel=w.level),i[i.length]=W("row","",E));return i.join("")}function Pf(e,n,t,r){var i=[Xe,W("worksheet",null,{xmlns:Ln[0],"xmlns:r":xe.r})],a=t.SheetNames[e],o=0,u="",s=t.Sheets[a];s==null&&(s={});var l=s["!ref"]||"A1",c=Rt(l);if(c.e.c>16383||c.e.r>1048575){if(n.WTF)throw new Error("Range "+l+" exceeds format limit A1:XFD1048576");c.e.c=Math.min(c.e.c,16383),c.e.r=Math.min(c.e.c,1048575),l=ft(c)}r||(r={}),s["!comments"]=[];var g=[];Gf(s,t,e,n,i),i[i.length]=W("dimension",null,{ref:l}),i[i.length]=Tf(s,n,e,t),n.sheetFormat&&(i[i.length]=W("sheetFormatPr",null,{defaultRowHeight:n.sheetFormat.defaultRowHeight||"16",baseColWidth:n.sheetFormat.baseColWidth||"10",outlineLevelRow:n.sheetFormat.outlineLevelRow||"7"})),s["!cols"]!=null&&s["!cols"].length>0&&(i[i.length]=Lf(s,s["!cols"])),i[o=i.length]="<sheetData/>",s["!links"]=[],s["!ref"]!=null&&(u=Mf(s,n,e,t),u.length>0&&(i[i.length]=u)),i.length>o+1&&(i[i.length]="</sheetData>",i[o]=i[o].replace("/>",">")),s["!protect"]&&(i[i.length]=Nf(s["!protect"])),s["!autofilter"]!=null&&(i[i.length]=Hf(s["!autofilter"],s,t,e)),s["!merges"]!=null&&s["!merges"].length>0&&(i[i.length]=Of(s["!merges"]));var b=-1,h,S=-1;return s["!links"].length>0&&(i[i.length]="<hyperlinks>",s["!links"].forEach(function(C){C[1].Target&&(h={ref:C[0]},C[1].Target.charAt(0)!="#"&&(S=Ne(r,-1,ce(C[1].Target).replace(/#[\s\S]*$/,""),ve.HLINK),h["r:id"]="rId"+S),(b=C[1].Target.indexOf("#"))>-1&&(h.location=ce(C[1].Target.slice(b+1))),C[1].Tooltip&&(h.tooltip=ce(C[1].Tooltip)),h.display=C[1].display,i[i.length]=W("hyperlink",null,h))}),i[i.length]="</hyperlinks>"),delete s["!links"],s["!margins"]!=null&&(i[i.length]=Rf(s["!margins"])),(!n||n.ignoreEC||n.ignoreEC==null)&&(i[i.length]=Et("ignoredErrors",W("ignoredError",null,{numberStoredAsText:1,sqref:l}))),g.length>0&&(S=Ne(r,-1,"../drawings/drawing"+(e+1)+".xml",ve.DRAW),i[i.length]=W("drawing",null,{"r:id":"rId"+S}),s["!drawing"]=g),s["!comments"].length>0&&(S=Ne(r,-1,"../drawings/vmlDrawing"+(e+1)+".vml",ve.VML),i[i.length]=W("legacyDrawing",null,{"r:id":"rId"+S}),s["!legacy"]=S),i.length>1&&(i[i.length]="</worksheet>",i[1]=i[1].replace("/>",">")),i.join("")}var Bf=[["allowRefreshQuery",!1,"bool"],["autoCompressPictures",!0,"bool"],["backupFile",!1,"bool"],["checkCompatibility",!1,"bool"],["CodeName",""],["date1904",!1,"bool"],["defaultThemeVersion",0,"int"],["filterPrivacy",!1,"bool"],["hidePivotFieldList",!1,"bool"],["promptedSolutions",!1,"bool"],["publishItems",!1,"bool"],["refreshAllConnections",!1,"bool"],["saveExternalLinkValues",!0,"bool"],["showBorderUnselectedTables",!0,"bool"],["showInkAnnotation",!0,"bool"],["showObjects","all"],["showPivotChartFilter",!1,"bool"],["updateLinks","userSet"]],Vf=":][*?/\\".split("");function as(e,n){try{if(e=="")throw new Error("Sheet name cannot be blank");if(e.length>31)throw new Error("Sheet name cannot exceed 31 chars");if(e.charCodeAt(0)==39||e.charCodeAt(e.length-1)==39)throw new Error("Sheet name cannot start or end with apostrophe (')");if(e.toLowerCase()=="history")throw new Error("Sheet name cannot be 'History'");Vf.forEach(function(t){if(e.indexOf(t)!=-1)throw new Error("Sheet name cannot contain : \\ / ? * [ ]")})}catch(t){throw t}return!0}function zf(e,n,t){e.forEach(function(r,i){as(r);for(var a=0;a<i;++a)if(r==e[a])throw new Error("Duplicate Sheet Name: "+r);if(t){var o=n&&n[i]&&n[i].CodeName||r;if(o.charCodeAt(0)==95&&o.length>22)throw new Error("Bad Code Name: Worksheet"+o)}})}function $f(e){if(!e||!e.SheetNames||!e.Sheets)throw new Error("Invalid Workbook");if(!e.SheetNames.length)throw new Error("Workbook is empty");var n=e.Workbook&&e.Workbook.Sheets||[];zf(e.SheetNames,n,!!e.vbaraw);for(var t=0;t<e.SheetNames.length;++t)Af(e.Sheets[e.SheetNames[t]],e.SheetNames[t],t);e.SheetNames.forEach(function(r,i){var a=e.Sheets[r];if(!(!a||!a["!autofilter"])){var o;e.Workbook||(e.Workbook={}),e.Workbook.Names||(e.Workbook.Names=[]),e.Workbook.Names.forEach(function(s){s.Name=="_xlnm._FilterDatabase"&&s.Sheet==i&&(o=s)});var u=ns(r)+"!"+ts(a["!autofilter"].ref);o?o.Ref=u:e.Workbook.Names.push({Name:"_xlnm._FilterDatabase",Sheet:i,Ref:u})}})}function jf(e){var n=[Xe];n[n.length]=W("workbook",null,{xmlns:Ln[0],"xmlns:r":xe.r});var t=e.Workbook&&(e.Workbook.Names||[]).length>0,r={codeName:"ThisWorkbook"};e.Workbook&&e.Workbook.WBProps&&(Bf.forEach(function(u){e.Workbook.WBProps[u[0]]!=null&&e.Workbook.WBProps[u[0]]!=u[1]&&(r[u[0]]=e.Workbook.WBProps[u[0]])}),e.Workbook.WBProps.CodeName&&(r.codeName=e.Workbook.WBProps.CodeName,delete r.CodeName)),n[n.length]=W("workbookPr",null,r);var i=e.Workbook&&e.Workbook.Sheets||[],a=0;if(i&&i[0]&&i[0].Hidden){for(n[n.length]="<bookViews>",a=0;a!=e.SheetNames.length&&!(!i[a]||!i[a].Hidden);++a);a==e.SheetNames.length&&(a=0),n[n.length]='<workbookView firstSheet="'+a+'" activeTab="'+a+'"/>',n[n.length]="</bookViews>"}for(n[n.length]="<sheets>",a=0;a!=e.SheetNames.length;++a){var o={name:ce(e.SheetNames[a].slice(0,31))};if(o.sheetId=""+(a+1),o["r:id"]="rId"+(a+1),i[a])switch(i[a].Hidden){case 1:o.state="hidden";break;case 2:o.state="veryHidden";break}n[n.length]=W("sheet",null,o)}return n[n.length]="</sheets>",t&&(n[n.length]="<definedNames>",e.Workbook&&e.Workbook.Names&&e.Workbook.Names.forEach(function(u){var s={name:u.Name};u.Comment&&(s.comment=u.Comment),u.Sheet!=null&&(s.localSheetId=""+u.Sheet),u.Hidden&&(s.hidden="1"),u.Ref&&(n[n.length]=W("definedName",ce(u.Ref),s))}),n[n.length]="</definedNames>"),n.length>2&&(n[n.length]="</workbook>",n[1]=n[1].replace("/>",">")),n.join("")}function Uf(e,n,t,r){for(var i=e["!merges"]||[],a=[],o={},u=e["!data"]!=null,s=n.s.c;s<=n.e.c;++s){for(var l=0,c=0,g=0;g<i.length;++g)if(!(i[g].s.r>t||i[g].s.c>s)&&!(i[g].e.r<t||i[g].e.c<s)){if(i[g].s.r<t||i[g].s.c<s){l=-1;break}l=i[g].e.r-i[g].s.r+1,c=i[g].e.c-i[g].s.c+1;break}if(!(l<0)){var b=gt(s)+ht(t),h=u?(e["!data"][t]||[])[s]:e[b];h&&h.t=="n"&&h.v!=null&&!isFinite(h.v)&&(isNaN(h.v)?h={t:"e",v:36,w:Qt[36]}:h={t:"e",v:7,w:Qt[7]});var S=h&&h.v!=null&&(h.h||di(h.w||(cr(h),h.w)||""))||"";o={},l>1&&(o.rowspan=l),c>1&&(o.colspan=c),r.editable?S='<span contenteditable="true">'+S+"</span>":h&&(o["data-t"]=h&&h.t||"z",h.v!=null&&(o["data-v"]=di(h.v instanceof Date?h.v.toISOString():h.v)),h.z!=null&&(o["data-z"]=h.z),h.l&&(h.l.Target||"#").charAt(0)!="#"&&(S='<a href="'+di(h.l.Target)+'">'+S+"</a>")),o.id=(r.id||"sjs")+"-"+b,a.push(W("td",S,o))}}var C="<tr>";return C+a.join("")+"</tr>"}var qf='<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',Wf="</body></html>";function Xf(e,n,t){var r=[];return r.join("")+"<table"+(t&&t.id?' id="'+t.id+'"':"")+">"}function Kf(e,n){var t=n||{},r=t.header!=null?t.header:qf,i=t.footer!=null?t.footer:Wf,a=[r],o=hn(e["!ref"]||"A1");if(a.push(Xf(e,o,t)),e["!ref"])for(var u=o.s.r;u<=o.e.r;++u)a.push(Uf(e,o,u,t));return a.push("</table>"+i),a.join("")}function os(e,n,t){var r=n.rows;if(!r)throw"Unsupported origin when "+n.tagName+" is not a TABLE";var i=t||{},a=e["!data"]!=null,o=0,u=0;if(i.origin!=null)if(typeof i.origin=="number")o=i.origin;else{var s=typeof i.origin=="string"?Dt(i.origin):i.origin;o=s.r,u=s.c}var l=Math.min(i.sheetRows||1e7,r.length),c={s:{r:0,c:0},e:{r:o,c:u}};if(e["!ref"]){var g=hn(e["!ref"]);c.s.r=Math.min(c.s.r,g.s.r),c.s.c=Math.min(c.s.c,g.s.c),c.e.r=Math.max(c.e.r,g.e.r),c.e.c=Math.max(c.e.c,g.e.c),o==-1&&(c.e.r=o=g.e.r+1)}var b=[],h=0,S=e["!rows"]||(e["!rows"]=[]),C=0,E=0,w=0,D=0,N=0,V=0;for(e["!cols"]||(e["!cols"]=[]);C<r.length&&E<l;++C){var L=r[C];if(ko(L)){if(i.display)continue;S[E]={hidden:!0}}var q=L.cells;for(w=D=0;w<q.length;++w){var G=q[w];if(!(i.display&&ko(G))){var P=G.hasAttribute("data-v")?G.getAttribute("data-v"):G.hasAttribute("v")?G.getAttribute("v"):Fg(G.innerHTML),H=G.getAttribute("data-z")||G.getAttribute("z");for(h=0;h<b.length;++h){var j=b[h];j.s.c==D+u&&j.s.r<E+o&&E+o<=j.e.r&&(D=j.e.c+1-u,h=-1)}V=+G.getAttribute("colspan")||1,((N=+G.getAttribute("rowspan")||1)>1||V>1)&&b.push({s:{r:E+o,c:D+u},e:{r:E+o+(N||1)-1,c:D+u+(V||1)-1}});var M={t:"s",v:P},X=G.getAttribute("data-t")||G.getAttribute("t")||"";P!=null&&(P.length==0?M.t=X||"z":i.raw||P.trim().length==0||X=="s"||(X=="e"&&Qt[+P]?M={t:"e",v:+P,w:Qt[+P]}:P==="TRUE"?M={t:"b",v:!0}:P==="FALSE"?M={t:"b",v:!1}:isNaN(ao(P))?isNaN(Sg(P).getDate())?P.charCodeAt(0)==35&&po[P]!=null&&(M={t:"e",v:po[P],w:P}):(M={t:"d",v:$i(P)},i.UTC&&(M.v=Ur(M.v)),i.cellDates||(M={t:"n",v:$t(M.v)}),M.z=i.dateNF||xt[14]):M={t:"n",v:ao(P)})),M.z===void 0&&H!=null&&(M.z=H);var Z="",re=G.getElementsByTagName("A");if(re&&re.length)for(var ke=0;ke<re.length&&!(re[ke].hasAttribute("href")&&(Z=re[ke].getAttribute("href"),Z.charAt(0)!="#"));++ke);Z&&Z.charAt(0)!="#"&&Z.slice(0,11).toLowerCase()!="javascript:"&&(M.l={Target:Z}),a?(e["!data"][E+o]||(e["!data"][E+o]=[]),e["!data"][E+o][D+u]=M):e[er({c:D+u,r:E+o})]=M,c.e.c<D+u&&(c.e.c=D+u),D+=V}}++E}return b.length&&(e["!merges"]=(e["!merges"]||[]).concat(b)),c.e.r=Math.max(c.e.r,E-1+o),e["!ref"]=ft(c),E>=l&&(e["!fullref"]=ft((c.e.r=r.length-C+E-1+o,c))),e}function us(e,n){var t=n||{},r={};return t.dense&&(r["!data"]=[]),os(r,e,n)}function Yf(e,n){var t=Ug(us(e,n),n);return t}function ko(e){var n="",t=Jf(e);return t&&(n=t(e).getPropertyValue("display")),n||(n=e.style&&e.style.display),n==="none"}function Jf(e){return e.ownerDocument.defaultView&&typeof e.ownerDocument.defaultView.getComputedStyle=="function"?e.ownerDocument.defaultView.getComputedStyle:typeof getComputedStyle=="function"?getComputedStyle:null}/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */(function(){try{return typeof Uint8Array>"u"||typeof Uint8Array.prototype.subarray>"u"?"slice":typeof Buffer<"u"?typeof Buffer.prototype.subarray>"u"?"slice":(typeof Buffer.from=="function"?Buffer.from([72,62]):new Buffer([72,62]))instanceof Uint8Array?"subarray":"slice":"subarray"}catch{return"slice"}})();function Zf(e){return function(t){for(var r=0;r!=e.length;++r){var i=e[r];t[i[0]]===void 0&&(t[i[0]]=i[1]),i[2]==="n"&&(t[i[0]]=Number(t[i[0]]))}}}function Qf(e){Zf([["cellDates",!1],["bookSST",!1],["bookType","xlsx"],["compression",!1],["WTF",!1]])(e)}function e4(e,n){e&&!e.SSF&&(e.SSF=sr(xt)),e&&e.SSF&&(rg(),ng(e.SSF),n.revssf=sg(e.SSF),n.revssf[e.SSF[65535]]=0,n.ssf=e.SSF),n.rels={},n.wbrels={},n.Strings=[],n.Strings.Count=0,n.Strings.Unique=0,Er?n.revStrings=new Map:(n.revStrings={},n.revStrings.foo=[],delete n.revStrings.foo);var t="xml",r=Sf.indexOf(n.bookType)>-1,i=Kg();Qf(n=n||{});var a=wg(),o="",u=0;if(n.cellXfs=[],is(n.cellXfs,{},{revssf:{General:0}}),e.Props||(e.Props={}),o="docProps/core.xml",Ee(a,o,Zg(e.Props,n)),i.coreprops.push(o),Ne(n.rels,2,o,ve.CORE_PROPS),o="docProps/app.xml",!(e.Props&&e.Props.SheetNames))if(!e.Workbook||!e.Workbook.Sheets)e.Props.SheetNames=e.SheetNames;else{for(var s=[],l=0;l<e.SheetNames.length;++l)(e.Workbook.Sheets[l]||{}).Hidden!=2&&s.push(e.SheetNames[l]);e.Props.SheetNames=s}e.Props.Worksheets=e.Props.SheetNames.length,Ee(a,o,ef(e.Props)),i.extprops.push(o),Ne(n.rels,3,o,ve.EXT_PROPS),e.Custprops!==e.Props&&nn(e.Custprops||{}).length>0&&(o="docProps/custom.xml",Ee(a,o,tf(e.Custprops)),i.custprops.push(o),Ne(n.rels,4,o,ve.CUST_PROPS));var c=["SheetJ5"];for(n.tcid=0,u=1;u<=e.SheetNames.length;++u){var g={"!id":{}},b=e.Sheets[e.SheetNames[u-1]],h=(b||{})["!type"]||"sheet";switch(h){case"chart":default:o="xl/worksheets/sheet"+u+"."+t,Ee(a,o,Pf(u-1,n,e,g)),i.sheets.push(o),Ne(n.wbrels,-1,"worksheets/sheet"+u+"."+t,ve.WS[0])}if(b){var S=b["!comments"],C=!1,E="";if(S&&S.length>0){var w=!1;S.forEach(function(D){D[1].forEach(function(N){N.T==!0&&(w=!0)})}),w&&(E="xl/threadedComments/threadedComment"+u+".xml",Ee(a,E,Cf(S,c,n)),i.threadedcomments.push(E),Ne(g,-1,"../threadedComments/threadedComment"+u+".xml",ve.TCMNT)),E="xl/comments"+u+"."+t,Ee(a,E,vf(S)),i.comments.push(E),Ne(g,-1,"../comments"+u+"."+t,ve.CMNT),C=!0}b["!legacy"]&&C&&Ee(a,"xl/drawings/vmlDrawing"+u+".vml",bf(u,b["!comments"])),delete b["!comments"],delete b["!legacy"]}g["!id"].rId1&&Ee(a,Jg(o),gi(g))}return n.Strings!=null&&n.Strings.length>0&&(o="xl/sharedStrings."+t,Ee(a,o,rf(n.Strings,n)),i.strs.push(o),Ne(n.wbrels,-1,"sharedStrings."+t,ve.SST)),o="xl/workbook."+t,Ee(a,o,jf(e)),i.workbooks.push(o),Ne(n.rels,1,o,ve.WB),o="xl/theme/theme1.xml",Ee(a,o,pf(e.Themes,n)),i.themes.push(o),Ne(n.wbrels,-1,"theme/theme1.xml",ve.THEME),o="xl/styles."+t,Ee(a,o,ff(e,n)),i.styles.push(o),Ne(n.wbrels,-1,"styles."+t,ve.STY),e.vbaraw&&r&&(o="xl/vbaProject.bin",Ee(a,o,e.vbaraw),i.vba.push(o),Ne(n.wbrels,-1,"vbaProject.bin",ve.VBA)),o="xl/metadata."+t,Ee(a,o,mf()),i.metadata.push(o),Ne(n.wbrels,-1,"metadata."+t,ve.XLMETA),c.length>1&&(o="xl/persons/person.xml",Ee(a,o,yf(c)),i.people.push(o),Ne(n.wbrels,-1,"persons/person.xml",ve.PEOPLE)),Ee(a,"[Content_Types].xml",Yg(i,n)),Ee(a,"_rels/.rels",gi(n.rels)),Ee(a,"xl/_rels/workbook."+t+".rels",gi(n.wbrels)),delete n.revssf,delete n.ssf,a}function t4(e,n){switch(n.type){case"base64":case"binary":break;case"buffer":case"array":n.type="";break;case"file":return Hu(n.file,yt.write(e,{type:le?"buffer":""}));case"string":throw new Error("'string' output type invalid for '"+n.bookType+"' files");default:throw new Error("Unrecognized type "+n.type)}return yt.write(e,n)}function n4(e,n){var t=sr(n||{}),r=e4(e,t);return r4(r,t)}function r4(e,n){var t={},r=le?"nodebuffer":typeof Uint8Array<"u"?"array":"string";if(n.compression&&(t.compression="DEFLATE"),n.password)t.type=r;else switch(n.type){case"base64":t.type="base64";break;case"binary":t.type="string";break;case"string":throw new Error("'string' output type invalid for '"+n.bookType+"' files");case"buffer":case"file":t.type=r;break;default:throw new Error("Unrecognized type "+n.type)}var i=e.FullPaths?yt.write(e,{fileType:"zip",type:{nodebuffer:"buffer",string:"binary"}[t.type]||t.type,compression:!!n.compression}):e.generate(t);if(typeof Deno<"u"&&typeof i=="string"){if(n.type=="binary"||n.type=="base64")return i;i=new Uint8Array(ca(i))}return n.password&&typeof encrypt_agile<"u"?t4(encrypt_agile(i,n.password),n):n.type==="file"?Hu(n.file,i):n.type=="string"?Og(i):i}function ss(e,n){$f(e);var t=sr(n||{});if(t.cellStyles&&(t.cellNF=!0,t.sheetStubs=!0),t.type=="array"){t.type="binary";var r=ss(e,t);return t.type="array",ca(r)}return n4(e,t)}function i4(e){if(!e.bookType){var n={xls:"biff8",htm:"html",slk:"sylk",socialcalc:"eth",Sh33tJS:"WTF"},t=e.file.slice(e.file.lastIndexOf(".")).toLowerCase();t.match(/^\.[a-z]+$/)&&(e.bookType=t.slice(1)),e.bookType=n[e.bookType]||e.bookType}}function a4(e,n,t){var r=t||{};return r.type="file",r.file=n,i4(r),ss(e,r)}function o4(e,n,t,r,i,a,o){var u=ht(t),s=o.defval,l=o.raw||!Object.prototype.hasOwnProperty.call(o,"raw"),c=!0,g=e["!data"]!=null,b=i===1?[]:{};if(i!==1)if(Object.defineProperty)try{Object.defineProperty(b,"__rowNum__",{value:t,enumerable:!1})}catch{b.__rowNum__=t}else b.__rowNum__=t;if(!g||e["!data"][t])for(var h=n.s.c;h<=n.e.c;++h){var S=g?(e["!data"][t]||[])[h]:e[r[h]+u];if(S==null||S.t===void 0){if(s===void 0)continue;a[h]!=null&&(b[a[h]]=s);continue}var C=S.v;switch(S.t){case"z":if(C==null)break;continue;case"e":C=C==0?null:void 0;break;case"s":case"b":case"n":if(!S.z||!ga(S.z)||(C=hg(C),typeof C=="number"))break;case"d":o&&(o.UTC||o.raw===!1)||(C=Eg(new Date(C)));break;default:throw new Error("unrecognized type "+S.t)}if(a[h]!=null){if(C==null)if(S.t=="e"&&C===null)b[a[h]]=null;else if(s!==void 0)b[a[h]]=s;else if(l&&C===null)b[a[h]]=null;else continue;else b[a[h]]=(S.t==="n"&&typeof o.rawNumbers=="boolean"?o.rawNumbers:l)?C:cr(S,C,o);C!=null&&(c=!1)}}return{row:b,isempty:c}}function vo(e,n){if(e==null||e["!ref"]==null)return[];var t={t:"n",v:0},r=0,i=1,a=[],o=0,u="",s={s:{r:0,c:0},e:{r:0,c:0}},l=n||{},c=l.range!=null?l.range:e["!ref"];switch(l.header===1?r=1:l.header==="A"?r=2:Array.isArray(l.header)?r=3:l.header==null&&(r=0),typeof c){case"string":s=Rt(c);break;case"number":s=Rt(e["!ref"]),s.s.r=c;break;default:s=c}r>0&&(i=0);var g=ht(s.s.r),b=[],h=[],S=0,C=0,E=e["!data"]!=null,w=s.s.r,D=0,N={};E&&!e["!data"][w]&&(e["!data"][w]=[]);var V=l.skipHidden&&e["!cols"]||[],L=l.skipHidden&&e["!rows"]||[];for(D=s.s.c;D<=s.e.c;++D)if(!(V[D]||{}).hidden)switch(b[D]=gt(D),t=E?e["!data"][w][D]:e[b[D]+g],r){case 1:a[D]=D-s.s.c;break;case 2:a[D]=b[D];break;case 3:a[D]=l.header[D-s.s.c];break;default:if(t==null&&(t={w:"__EMPTY",t:"s"}),u=o=cr(t,null,l),C=N[o]||0,!C)N[o]=1;else{do u=o+"_"+C++;while(N[u]);N[o]=C,N[u]=1}a[D]=u}for(w=s.s.r+i;w<=s.e.r;++w)if(!(L[w]||{}).hidden){var q=o4(e,s,w,b,r,a,l);(q.isempty===!1||(r===1?l.blankrows!==!1:l.blankrows))&&(h[S++]=q.row)}return h.length=S,h}var Co=/"/g;function u4(e,n,t,r,i,a,o,u,s){for(var l=!0,c=[],g="",b=ht(t),h=e["!data"]!=null,S=h&&e["!data"][t]||[],C=n.s.c;C<=n.e.c;++C)if(r[C]){var E=h?S[C]:e[r[C]+b];if(E==null)g="";else if(E.v!=null){l=!1,g=""+(s.rawNumbers&&E.t=="n"?E.v:cr(E,null,s));for(var w=0,D=0;w!==g.length;++w)if((D=g.charCodeAt(w))===i||D===a||D===34||s.forceQuotes){g='"'+g.replace(Co,'""')+'"';break}g=="ID"&&u==0&&c.length==0&&(g='"ID"')}else E.f!=null&&!E.F?(l=!1,g="="+E.f,g.indexOf(",")>=0&&(g='"'+g.replace(Co,'""')+'"')):g="";c.push(g)}if(s.strip)for(;c[c.length-1]==="";)--c.length;return s.blankrows===!1&&l?null:c.join(o)}function ls(e,n){var t=[],r=n??{};if(e==null||e["!ref"]==null)return"";for(var i=Rt(e["!ref"]),a=r.FS!==void 0?r.FS:",",o=a.charCodeAt(0),u=r.RS!==void 0?r.RS:`
`,s=u.charCodeAt(0),l="",c=[],g=r.skipHidden&&e["!cols"]||[],b=r.skipHidden&&e["!rows"]||[],h=i.s.c;h<=i.e.c;++h)(g[h]||{}).hidden||(c[h]=gt(h));for(var S=0,C=i.s.r;C<=i.e.r;++C)(b[C]||{}).hidden||(l=u4(e,i,C,c,o,s,a,S,r),l!=null&&(l||r.blankrows!==!1)&&t.push((S++?u:"")+l));return t.join("")}function s4(e,n){n||(n={}),n.FS="	",n.RS=`
`;var t=ls(e,n);return t}function l4(e,n){var t="",r,i="";if(e==null||e["!ref"]==null)return[];var a=Rt(e["!ref"]),o="",u=[],s,l=[],c=e["!data"]!=null;for(s=a.s.c;s<=a.e.c;++s)u[s]=gt(s);for(var g=a.s.r;g<=a.e.r;++g)for(o=ht(g),s=a.s.c;s<=a.e.c;++s)if(t=u[s]+o,r=c?(e["!data"][g]||[])[s]:e[t],i="",r!==void 0){if(r.F!=null){if(t=r.F,!r.f)continue;i=r.f,t.indexOf(":")==-1&&(t=t+":"+t)}if(r.f!=null)i=r.f;else{if(n&&n.values===!1)continue;if(r.t=="z")continue;if(r.t=="n"&&r.v!=null)i=""+r.v;else if(r.t=="b")i=r.v?"TRUE":"FALSE";else if(r.w!==void 0)i="'"+r.w;else{if(r.v===void 0)continue;r.t=="s"?i="'"+r.v:i=""+r.v}}l[l.length]=t+"="+i}return l}function cs(e,n,t){var r=t||{},i=e?e["!data"]!=null:r.dense,a=+!r.skipHeader,o=e||{};!e&&i&&(o["!data"]=[]);var u=0,s=0;if(o&&r.origin!=null)if(typeof r.origin=="number")u=r.origin;else{var l=typeof r.origin=="string"?Dt(r.origin):r.origin;u=l.r,s=l.c}var c={s:{c:0,r:0},e:{c:s,r:u+n.length-1+a}};if(o["!ref"]){var g=Rt(o["!ref"]);c.e.c=Math.max(c.e.c,g.e.c),c.e.r=Math.max(c.e.r,g.e.r),u==-1&&(u=g.e.r+1,c.e.r=u+n.length-1+a)}else u==-1&&(u=0,c.e.r=n.length-1+a);var b=r.header||[],h=0,S=[];n.forEach(function(E,w){i&&!o["!data"][u+w+a]&&(o["!data"][u+w+a]=[]),i&&(S=o["!data"][u+w+a]),nn(E).forEach(function(D){(h=b.indexOf(D))==-1&&(b[h=b.length]=D);var N=E[D],V="z",L="",q=i?"":gt(s+h)+ht(u+w+a),G=i?S[s+h]:o[q];N&&typeof N=="object"&&!(N instanceof Date)?i?S[s+h]=N:o[q]=N:(typeof N=="number"?V="n":typeof N=="boolean"?V="b":typeof N=="string"?V="s":N instanceof Date?(V="d",r.UTC||(N=Ur(N)),r.cellDates||(V="n",N=$t(N)),L=G!=null&&G.z&&ga(G.z)?G.z:r.dateNF||xt[14]):N===null&&r.nullError&&(V="e",N=0),G?(G.t=V,G.v=N,delete G.w,delete G.R,L&&(G.z=L)):i?S[s+h]=G={t:V,v:N}:o[q]=G={t:V,v:N},L&&(G.z=L))})}),c.e.c=Math.max(c.e.c,s+b.length-1);var C=ht(u);if(i&&!o["!data"][u]&&(o["!data"][u]=[]),a)for(h=0;h<b.length;++h)i?o["!data"][u][h+s]={t:"s",v:b[h]}:o[gt(h+s)+C]={t:"s",v:b[h]};return o["!ref"]=ft(c),o}function c4(e,n){return cs(null,e,n)}function Pr(e,n,t){if(typeof n=="string"){if(e["!data"]!=null){var r=Dt(n);return e["!data"][r.r]||(e["!data"][r.r]=[]),e["!data"][r.r][r.c]||(e["!data"][r.r][r.c]={t:"z"})}return e[n]||(e[n]={t:"z"})}return typeof n!="number"?Pr(e,er(n)):Pr(e,gt(t||0)+ht(n))}function d4(e,n){if(typeof n=="number"){if(n>=0&&e.SheetNames.length>n)return n;throw new Error("Cannot find sheet # "+n)}else if(typeof n=="string"){var t=e.SheetNames.indexOf(n);if(t>-1)return t;throw new Error("Cannot find sheet name |"+n+"|")}else throw new Error("Cannot find sheet |"+n+"|")}function h4(e,n){var t={SheetNames:[],Sheets:{}};return e&&ds(t,e,n||"Sheet1"),t}function ds(e,n,t,r){var i=1;if(!t)for(;i<=65535&&e.SheetNames.indexOf(t="Sheet"+i)!=-1;++i,t=void 0);if(!t||e.SheetNames.length>=65535)throw new Error("Too many worksheets");if(r&&e.SheetNames.indexOf(t)>=0&&t.length<32){var a=t.match(/\d+$/);i=a&&+a[0]||0;var o=a&&t.slice(0,a.index)||t;for(++i;i<=65535&&e.SheetNames.indexOf(t=o+i)!=-1;++i);}if(as(t),e.SheetNames.indexOf(t)>=0)throw new Error("Worksheet with name |"+t+"| already exists!");return e.SheetNames.push(t),e.Sheets[t]=n,t}function g4(e,n,t){e.Workbook||(e.Workbook={}),e.Workbook.Sheets||(e.Workbook.Sheets=[]);var r=d4(e,n);switch(e.Workbook.Sheets[r]||(e.Workbook.Sheets[r]={}),t){case 0:case 1:case 2:break;default:throw new Error("Bad sheet visibility setting "+t)}e.Workbook.Sheets[r].Hidden=t}function f4(e,n){return e.z=n,e}function hs(e,n,t){return n?(e.l={Target:n},t&&(e.l.Tooltip=t)):delete e.l,e}function p4(e,n,t){return hs(e,"#"+n,t)}function m4(e,n,t){e.c||(e.c=[]),e.c.push({t:n,a:t||"SheetJS"})}function b4(e,n,t,r){for(var i=typeof n!="string"?n:Rt(n),a=typeof n=="string"?n:ft(n),o=i.s.r;o<=i.e.r;++o)for(var u=i.s.c;u<=i.e.c;++u){var s=Pr(e,o,u);s.t="n",s.F=a,delete s.v,o==i.s.r&&u==i.s.c&&(s.f=t,r&&(s.D=!0))}var l=hn(e["!ref"]);return l.s.r>i.s.r&&(l.s.r=i.s.r),l.s.c>i.s.c&&(l.s.c=i.s.c),l.e.r<i.e.r&&(l.e.r=i.e.r),l.e.c<i.e.c&&(l.e.c=i.e.c),e["!ref"]=ft(l),e}var pi={encode_col:gt,encode_row:ht,encode_cell:er,encode_range:ft,decode_col:zg,decode_row:Bg,split_cell:jg,decode_cell:Dt,decode_range:hn,format_cell:cr,sheet_new:qg,sheet_add_aoa:rs,sheet_add_json:cs,sheet_add_dom:os,aoa_to_sheet:Wg,json_to_sheet:c4,table_to_sheet:us,table_to_book:Yf,sheet_to_csv:ls,sheet_to_txt:s4,sheet_to_json:vo,sheet_to_html:Kf,sheet_to_formulae:l4,sheet_to_row_object_array:vo,sheet_get_cell:Pr,book_new:h4,book_append_sheet:ds,book_set_sheet_visibility:g4,cell_set_number_format:f4,cell_set_hyperlink:hs,cell_set_internal_link:p4,cell_add_comment:m4,sheet_set_array_formula:b4,consts:{SHEET_VISIBLE:0,SHEET_HIDDEN:1,SHEET_VERY_HIDDEN:2}};function Kn(e,n){if(n in e&&e[n]&&typeof e[n]!="object"&&typeof e[n]!="function")return String(e[n])}function k4(e){const n="accessorKey";return e.filter(t=>{var r;return Kn(t,n)&&!((r=t.meta)!=null&&r.skipOnExport)}).map(t=>Kn(t,n))}function gs(e){const n="accessorKey",t="header";return e.filter(r=>{var i;return Kn(r,n)&&!((i=r.meta)!=null&&i.skipOnExport)}).map(r=>Kn(r,t)||Kn(r,n))}function fs({data:e,columnDefinitions:n}){const t=k4(n);return e.map(r=>{const i=r,a=[];return t.forEach(o=>{if(!o){a.push("");return}a.push(i[o])}),a})}function v4({columnDefinitions:e,fileName:n="Table",data:t}){if(On()){const r=fs({data:t,columnDefinitions:e}),o=[gs(e),...r].map(g=>g.map(b=>b===void 0?'""':`"${b}"`).join(",")).join(`
`),u=new Uint8Array([239,187,191]),s=new Blob([u,o],{type:"text/csv"}),l=URL.createObjectURL(s),c=Object.assign(document.createElement("a"),{target:"_blank",href:l,download:n});return c.click(),c.remove(),o}return""}function C4({columnDefinitions:e,fileName:n="Table",data:t}){const r=fs({data:t,columnDefinitions:e}),i=gs(e),a=pi.book_new(),o=pi.aoa_to_sheet([i,...r]);return pi.book_append_sheet(a,o),a4(a,`${n}.xlsx`),o}const ps={table:"table",toaster:"toaster"};var Br=(e=>(e.Small="small",e.Full="full",e))(Br||{});const yo=Object.keys(la);function In(e,n){return Math.floor(Math.random()*(n-e+1)+e)}const y4=new Intl.NumberFormat("ru-RU",{minimumFractionDigits:2});function pa(e,n){const t=[];for(let r=0;r<e;++r){const i=new Date(Math.floor(Math.random()*1e13)).setFullYear(In(1980,2030),In(1,12),In(1,30));t.push({status:r===3?"Not":yo[In(0,yo.length-1)],subRows:n&&n.level>0?pa(n.count,{count:n.count,level:n.level-1}):void 0,tree:n&&n.level>0?`Tree cell ${n.level}.${r}`:`Item ${r}`,col1:r*5,col2:r*5+1,col3:r*5+2,col4:r*5+3,col5:r*5+4,col6:In(1e5,999999.99),date:i})}return t}const S4=[{label:"tag1xxx",appearance:"red"},{label:"tag2x",appearance:"yellow"},{label:"tag3xxxxx",appearance:"orange"},{label:"tag4xx",appearance:"green"},{label:"tag5xxx",appearance:"blue"},{label:"tag6x",appearance:"pink"}],Ut=e=>`Table column №${e.column.id}`,Mn=e=>`Column №${e}`,Cn=e=>n=>`Cell ${Math.trunc(Number(n[e])/5)+1}.${Number(n[e])%5+1}`;function qi({rowAutoHeight:e,statusSortEnabled:n,showActionsColumn:t,statusColumnViewMode:r}){return y.useMemo(()=>{let i=[{id:"1",accessorKey:"col1",accessorFn:Cn("col1"),header:Ut,columnSettings:{label:Mn("1"),mode:"hidden"},size:140,enableSorting:!0,enableResizing:!0,sortDescFirst:!0,pinned:"left"},{id:"2",accessorKey:"col2",accessorFn:Cn("col2"),header:Ut,columnSettings:{label:Mn("2"),mode:"defaultFalse"},size:200,minSize:150,maxSize:300,pinned:"left",enableSorting:!0,enableResizing:!0},{id:"3",accessorKey:"col3",header:Ut,columnSettings:{label:Mn("3"),mode:"defaultTrue"},accessorFn:e?void 0:Cn("col3"),cell:a=>a.row.index===1&&e?"super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper":Cn("col3")(a.row.original),minSize:110,sortDescFirst:!0,enableResizing:!0},{id:"4",accessorKey:"col4",accessorFn:Cn("col4"),header:Ut,enableSorting:!0,enableResizing:!0},{id:"5",accessorKey:"col5",header:Ut,columnSettings:{label:Mn("5"),mode:"defaultFalse"},accessorFn:Cn("col5"),cell:a=>R.jsx(Li,{value:a.getValue()}),enableSorting:!0,enableResizing:!0},{id:"6",accessorKey:"col6",cell:a=>y4.format(a.getValue()),header:Ut,columnSettings:{label:"Price"},size:150,headerAlign:"right",align:"right",enableSorting:!0,enableResizing:!0},{id:"7",accessorKey:"col7",cell:()=>R.jsx(vs,{items:S4,rowLimit:1}),header:Ut,columnSettings:{label:"Tags"},size:230},{id:"8",accessorKey:"date",header:Ut,columnSettings:{label:Mn("8")},enableSorting:!0,enableResizing:!0,size:146,headerAlign:"right",align:"right",pinned:"right",sortingFn:(a,o)=>a.original.date-o.original.date,accessorFn:a=>new Date(a.date).toLocaleDateString("ru-RU",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})}];if(r){const a=r===Br.Full?{header:"Status",size:110,renderDescription:(o,u)=>u.status==="Not"?"Custom status":o,enableResizing:!0}:{};i=[qe.getStatusColumnDef({accessorKey:"status",mapStatusToAppearance:o=>qe.statusAppearances[o],enableSorting:n,...a}),...i]}if(t){const a=({rowId:o,itemId:u})=>{_o.userAction.success({label:`${o} ${u}`,"data-test-id":ps.toaster})};i.push(qe.getRowActionsColumnDef({pinned:!0,actionsGenerator:o=>[{id:"action-1",content:{option:"action 1"},onClick:()=>a({rowId:o.row.id,itemId:"action-1"}),"data-test-id":"test-custom"},{id:"action-2",content:{option:"action 2"},onClick:()=>a({rowId:o.row.id,itemId:"action-2"})},{id:"action-3",content:{option:"action 3"},onClick:()=>a({rowId:o.row.id,itemId:"action-3"})},{id:"group-1",type:"group",items:[{id:"action-4",content:{option:"action 4"},onClick:()=>a({rowId:o.row.id,itemId:"action-4"})}],divider:!0}]}))}return i},[e,t,r,n])}function Wi({rowsAmount:e,infiniteLoading:n,filteredData:t,setFilteredData:r,dataError:i}){const a=y.useRef(),o=y.useRef(),u=y.useRef(null),[s,l]=y.useState(!0),[c,g]=y.useState(!1),b=e+20;y.useEffect(()=>{if(n&&t.length>b){l(!1),g(!1),clearTimeout(o.current);return}},[b,t.length,n]);const h=y.useCallback(async()=>{i||!t.length||t.length>b||(g(!0),o.current=setTimeout(()=>{r(S=>S.concat(pa(10))),g(!1)},2e3))},[i,t.length,b,r]);return y.useEffect(()=>{if(!n)return;const S=C=>{C[0].isIntersecting&&s&&!c&&h()};return a.current=new IntersectionObserver(S),u.current&&a.current.observe(u.current),()=>{a.current&&a.current.disconnect()}},[h,s,n,c]),{loading:c,scrollRef:u}}try{qi.displayName="useTableColumnDefinitions",qi.__docgenInfo={description:"",displayName:"useTableColumnDefinitions",props:{rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},statusSortEnabled:{defaultValue:null,description:"",name:"statusSortEnabled",required:!0,type:{name:"boolean"}},showActionsColumn:{defaultValue:null,description:"",name:"showActionsColumn",required:!1,type:{name:"boolean"}},statusColumnViewMode:{defaultValue:null,description:"",name:"statusColumnViewMode",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"full"'}]}}}}}catch{}try{Wi.displayName="useInfiniteLoading",Wi.__docgenInfo={description:"",displayName:"useInfiniteLoading",props:{rowsAmount:{defaultValue:null,description:"",name:"rowsAmount",required:!0,type:{name:"number"}},infiniteLoading:{defaultValue:null,description:"",name:"infiniteLoading",required:!1,type:{name:"boolean"}},filteredData:{defaultValue:null,description:"",name:"filteredData",required:!0,type:{name:"StubData[]"}},setFilteredData:{defaultValue:null,description:"",name:"setFilteredData",required:!0,type:{name:"Dispatch<SetStateAction<StubData[]>>"}},dataError:{defaultValue:null,description:"",name:"dataError",required:!1,type:{name:"boolean"}}}}}catch{}const E4="_wrapper_km5hp_1",So={wrapper:E4},tm={title:"Components/Table",component:qe},mi=["0","2"],w4={defaultValue:{single:"op1",multiple:["op1"]},filters:[{id:"single",type:"single",label:"Single",pinned:!0,options:[{value:"op1",label:"Option 1"},{value:"op2",label:"Option 2"},{value:"op3",label:"Option 3 "}]},{id:"multiple",type:"multiple",label:"Multiple",pinned:!0,options:[{value:"op1",label:"Option 1"},{value:"op2",label:"Option 2"},{value:"op3",label:"Option 3 "}]},{id:"date",type:"date",label:"Date"},{id:"dateRange",type:"date-range",label:"Date Range"}]},x4=({rowsAmount:e,expandRowsLevel:n,expandRowsCount:t,disableSomeRows:r,pinSomeRows:i,statusColumnViewMode:a,showTableTree:o,showActionsColumn:u,rowSelectionMode:s,enableOnRowClick:l,showExport:c,showFilters:g,infiniteLoading:b,rowAutoHeight:h,enableColumnsOrderSortByDrag:S,showColumnsSettings:C,columnFilters:E,initialColumnFiltersOpen:w,...D})=>{const N=y.useMemo(()=>pa(e,{count:t,level:o?n:0}),[e,n,t,o]),[V,L]=y.useState(N);y.useEffect(()=>{L(N)},[N]);const{loading:q,scrollRef:G}=Wi({rowsAmount:e,infiniteLoading:b,filteredData:V,setFilteredData:L,dataError:D.dataError}),P=y.useCallback((se,ie)=>{L(At=>At.filter((ye,pt)=>!(se!=null&&se[pt]))),ie()},[]),H=qi({rowAutoHeight:h,statusColumnViewMode:a,showActionsColumn:u,statusSortEnabled:D.statusSortEnabled}),j=(se,ie)=>{_o.userAction.success({label:`clicked row ${ie.id}`})},M=()=>{L(N)},X=i&&D.keepPinnedRows,Z=y.useMemo(()=>{const se=ie=>Number(ie)-(X&&!D.copyPinnedRows?mi.length:0);return ie=>`${se(ie)}${X?` + ${mi.length}`:""}`},[D.copyPinnedRows,X]),re=y.useMemo(()=>{const se={};return S&&(se.enableDrag=!0),C&&(se.enableSettingsMenu=!0),b?{...D,columnsSettings:se,infiniteLoading:b,pagination:void 0,manualPagination:void 0,suppressPagination:void 0,pageCount:void 0,autoResetPageIndex:void 0}:{...D,columnsSettings:se,pagination:{options:[5,10,100],optionsRender:Z}}},[D,S,b,Z,C]),ke=y.useMemo(()=>{if(!(!g||!E))return{...E,initialOpen:w}},[E,w,g]);return R.jsx("div",{className:So.wrapper,children:R.jsx(qe,{...re,loading:D.loading||q,rowAutoHeight:h,columnDefinitions:H,data:V,bulkActions:[{label:"Delete",icon:Bs,onClick:P}],className:So.className,expanding:o?{getSubRows:se=>se.subRows,expandingColumnDefinition:{showToggle:!!s,accessorKey:"tree",header:"Tree column"}}:void 0,rowSelection:{multiRow:s==="multi",enable:r?se=>!["Not","Loading"].includes(se.original.status):!!s||void 0},onRefresh:M,onRowClick:l?j:void 0,rowPinning:i?{top:mi}:void 0,exportSettings:c?{fileName:"test-export",exportToCSV:v4,exportToXLSX:C4}:void 0,columnFilters:ke,scrollRef:G})})},yr={render:x4,args:{suppressPagination:!1,suppressToolbar:!1,suppressSearch:!1,showFilters:!0,columnFilters:w4,initialColumnFiltersOpen:!0,rowsAmount:35,expandRowsCount:3,expandRowsLevel:3,loading:!1,statusColumnViewMode:Br.Full,statusSortEnabled:!0,showActionsColumn:!0,showTableTree:!1,data:[],rowSelection:{enable:!0,multiRow:!0},rowSelectionMode:"multi",disableSomeRows:!1,onRowClick:()=>{},enableOnRowClick:!1,enableFuzzySearch:!1,"data-test-id":ps.table,showExport:!1,pinSomeRows:!1,savedState:{id:"snack-ui-table-storybook",resize:!0,filterQueryKey:"filterKey",columnSettings:!0},enableColumnsOrderSortByDrag:!0,showColumnsSettings:!0},argTypes:{expandRowsCount:{name:"[Stories]: Amount of subRows ",control:{type:"range",min:0,max:10,step:1}},expandRowsLevel:{name:"[Stories]: Level of  subRows ",control:{type:"range",min:0,max:5,step:1}},rowsAmount:{name:"[Stories]: Amount of rows within the table",description:"demonstration purposes only, this parameter does not exist in component",control:{type:"range",min:0,max:100,step:1}},disableSomeRows:{name:"[Stories]: Make some rows disabled",control:{type:"boolean"},if:{arg:"rowSelectionMode",truthy:!0}},statusColumnViewMode:{name:"[Stories]: Show Status",options:[void 0,...Object.values(Br)],control:{type:"select"}},showTableTree:{name:"[Stories]: Show tree column",control:{type:"boolean"}},statusSortEnabled:{name:"[Stories]: enable sort by status column"},showActionsColumn:{name:"[Stories]: Show RowActions",control:{type:"boolean"}},rowSelection:{name:"rowSelection",description:"Disabled for storybook and tests purpose",control:{disable:!0}},rowSelectionMode:{name:"[Stories]: Choose row selection mode",options:[void 0,"multi","single"],control:{type:"select"}},enableOnRowClick:{name:"[Stories]: Enable row click",control:{type:"boolean"}},onRowClick:{control:{disable:!0}},pinSomeRows:{name:"[Stories]: Pin 1st and 3rd row",controls:{type:"boolean"}},showExport:{name:"[Stories]: Show export example",controls:{type:"boolean"}},showFilters:{name:"[Stories]: Show filters example",controls:{type:"boolean"}},columnFilters:{if:{arg:"showFilters",eq:!0}},initialColumnFiltersOpen:{name:"[Stories]: Initial show column filters state value",controls:{type:"boolean"},if:{arg:"showFilters",eq:!0}},pagination:{control:{disable:!0},if:{arg:"infiniteLoading",neq:!0}},manualPagination:{if:{arg:"infiniteLoading",neq:!0}},suppressPagination:{if:{arg:"infiniteLoading",neq:!0}},pageCount:{if:{arg:"infiniteLoading",neq:!0}},autoResetPageIndex:{if:{arg:"infiniteLoading",neq:!0}},savedState:{name:"[Stories]: Save resize state in local storage",controls:{type:"object"}},enableColumnsOrderSortByDrag:{name:"[Stories]: Enable columns order sort by drag",controls:{type:"boolean"}},showColumnsSettings:{name:"[Stories]: Show columns settings",controls:{type:"boolean"}}},parameters:{controls:{expanded:!0},readme:{sidebar:[`Latest version: ${va.version}`,Ws,js]},packageName:va.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A225842&mode=design"}}};var Eo,wo,xo;yr.parameters={...yr.parameters,docs:{...(Eo=yr.parameters)==null?void 0:Eo.docs,source:{originalSource:`{
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
    showTableTree: false,
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
        type: 'boolean'
      }
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
}`,...(xo=(wo=yr.parameters)==null?void 0:wo.docs)==null?void 0:xo.source}}};export{tm as default,yr as table};
