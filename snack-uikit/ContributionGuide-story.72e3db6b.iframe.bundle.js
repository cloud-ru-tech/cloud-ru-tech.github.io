"use strict";(self.webpackChunksnack_uikit=self.webpackChunksnack_uikit||[]).push([[7135],{"./storybook/stories/ContributionGuide.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{contributionGuide:()=>contributionGuide,default:()=>ContributionGuide_story});var esm=__webpack_require__("./node_modules/storybook-dark-mode/dist/esm/index.js");var components=__webpack_require__("./storybook/stories/components/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1c7vvfwlsm(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/storybook/stories/ContributionGuide.story.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"87cf3870430a216d48b8a1232eeb487af4cb801c"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/storybook/stories/ContributionGuide.story.tsx",statementMap:{0:{start:{line:7,column:36},end:{line:17,column:1}},1:{start:{line:12,column:21},end:{line:12,column:34}},2:{start:{line:14,column:6},end:{line:14,column:69}},3:{start:{line:21,column:43},end:{line:21,column:45}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:11,column:4},end:{line:11,column:5}},loc:{start:{line:11,column:13},end:{line:15,column:5}},line:11}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"87cf3870430a216d48b8a1232eeb487af4cb801c"});var actualCoverage=coverage[path];return cov_1c7vvfwlsm=function(){return actualCoverage},actualCoverage}cov_1c7vvfwlsm();const ContributionGuide_story=(cov_1c7vvfwlsm().s[0]++,{title:"Documentation/Contribution Guide",component:components.oz,decorators:[Story=>{cov_1c7vvfwlsm().f[0]++;const isDark=(cov_1c7vvfwlsm().s[1]++,(0,esm.D2)());return cov_1c7vvfwlsm().s[2]++,(0,jsx_runtime.jsx)(Story,{args:{md:'# CONTRIBUTION GUIDE\n\n## Общие положения\n\n> Все необходимые команды для работы с репозиторием описаны в разделе **NPM Scripts**\n\n> Любые изменения в данном репозитории вносятся согласно [Conventional Commits](https://conventionalcommits.org), см. раздел **Conventional Commits**\n\n> Основная структура репозитория представлена в разделе **Структура проекта**\n\n> Сценарии работы с репозиторием можно посмотреть в разделе **Сценарии**\n\n> Компоненты построены с учетом дизайн-токенов Figma. Подробнее об этом - в разделе **Работа с токенами**\n\n## NPM Scripts\n\n- `add-package` - создание нового пакета в рамках монорепозитория\n- `build:storybook` - сборка исходников сторибука для *CI/CD*\n- `build:packages` - пересборка пакетов вместе с установкой пакетных зависимостей, глобальные должны быть при этом установлены\n- `build:css` - пересборка стилевых файлов в пакетах: scss -> css\n- `build:ts` - пересборка файлов с кодом в пакетах: ts -> js \n- `changelog` - генерация changelog в измененных пакетах (используется только локально, дает возможность проверить корректность содержания коммитов) \n- `clean:all` - вызывает **clean:dist** и **clean:modules**\n- `clean:buildinfo` - удаляет вспомогательные файлы для ts-сборки (**.tsbuildinfo**)\n- `clean:dist` - удаляет **dist** в пакетах\n- `clean:modules` - удаляет **node_modules** в пакетах\n- `deps:all` - вызывает **deps:global** и **deps:packages**\n- `deps:global` - устанавливает корневые зависимости и линкует пакеты между собой\n- `deps:packages` - устанавливает зависимости внутри пакетов\n- `deps:reinstall` - переустанавливает все зависимости начисто\n- `storybook:all` - запуск локальной версии сторибука со *всеми* пакетами\n- `storybook:ci` - запуск сторибука на *CI/CD*\n- `storybook:partial` - запуск локальной версии сторибука с *определенными* пакетами\n- `test:coverage` - генерит *cobertura* репорт для построчного покрытия тестами\n- `test:testcafe` - запускает testcafe и прогоняет тесты\n- `test:testcafe:local` - запускает testcafe в watch режиме, перезапускает при изменении исходного кода теста\n- `test:testcafe:branch` - запускает testcafe против деплоя с текущей ветки (если деплой уже был). Требуется файл `.env`, в корне репозитория есть `.env.example`\n- `test:ci` - запуск сервера сторибук и тестов на нем для *CI/CD*\n- `test:unit` - запускает vitest и прогоняет тесты\n- `test:unit:local` - запускает vitest в watch режиме, перезапускает при изменении исходного кода теста\n- `validate:licenses` - запускает валидацию лицензий зависимых пакетов\n- `docgen` - запускает автогенерацию документации компонентов\n\n## Conventional Commits\n\n[Документация](https://conventionalcommits.org)\n\n- Правило: один коммит - один пакет.\n- Если вы все делаете правильно, поднятие и обновление зависимостей пакетов/пакетами происходит в автоматическом режиме, ровно как и changelog.\n- Доступные типы коммитов:\n    - **fix:**\n        - коммит с префиксом **fix:**\n          исправляет баг в коде (соответсвует версии PATCH в Semantic Versioning).\n    - **feat:**\n        - коммит с префиксом **feat:**\n          добавляет новую функциональность (соответсвует версии MINOR в Semantic Versioning).\n    - **!** или **BREAKING CHANGE:**\n        - коммит с **!** после префикса (**fix(FF-11)!:**) или с футером **BREAKING CHANGE:**\n          вносит критическое изменение без обратной совместимости (соответсвует версии MAJOR в Semantic Versioning).\n        - может быть частью коммита любого типа.\n    - другие доступные типы коммитов (основано на конвенции Angular-а):\n      **build:**, **chore:**, **ci:**, **docs:**, **style:**, **refactor:**, **deps:**, **test:** и др.\n\n\n## Структура проекта\n\n1. Все компоненты лежат в папке `./packages`.\n2. Структура папок пакетов:\n\n```text\npackages\n  some-package\n    src\n    |  components\n    |  |__Some\n    |  |  |__index.ts\n    |  |  |__Some.tsx\n    |  |  |__styles.module.scss\n    |  |  |__constants.ts (опционально)\n    |  |  |__types.ts (опционально)\n    |  |  |__utils.ts (опционально)\n    |  |__index.ts\n    |__styles.module.scss (опционально)\n    |__constants.ts (опционально)\n    |__types.ts (опционально)\n    |__utils.ts (опционально)\n    \n    stories\n    |__ Some.tsx\n    \n    __e2e__ (testcafe)\n    |__some.ts\n\n    __test__ (vitest) (опицонально)\n    |__ some.spec.ts (.spec -  обязательная часть)\n    \n    package.json\n    tsconfig.json\n    README.md\n    CHANGELOG.md\n```\n\n## Сценарии\n\n### Начало работы с репозиторием\n\n1. `npm run deps:all` для получения всех уже объявленных зависимостей\n2. `npm run build:packages` для сборки пакетов\n\n### Запуск локального storybook\n\n1. `npm run build:packages`\n2. Для запуска storybook\n    - со всеми пакетами `npm run storybook:all`\n    - с определенными пакетами `npm run storybook:partial`\n\n### Создание нового пакета\n\n1. Создайте feature ветку от последнего master\n2. Запустите команду `npm run build:packages`\n3. Запустите команду `npm run add-package`\n4. Установите новую версию пакета figma-tokens, содержащую необходимые для компонента токены.\n5. Реализуйте необходимый компонент или утилиту согласно Conventional commit approach\n6. Создайте pull request\n7. Получите аппрув\n8. `git pull -r origin master`, если это необходимо\n9. Убедитесь, что все изменения актуальны и правильны\n10. Смержите в master\n\n### Внесение изменений в существующий пакет\n\n1. Создайте feature или bugfix ветку от последнего master\n2. Запустите команду `npm run build:packages`\n3. Внесите необходимые изменения согласно Conventional commit approach\n4. Создайте pull request\n5. Получите аппрув\n6. Смержите вашу ветку в мастер.\n7. Релиз пакетов произойдет на этапе CI, вам не нужно поднимать руками версии\n\n### End-to-End Тестирование\n\n1. Запустите локальный storybook через `storybook:ci`\n2. Откройте `http://localhost:6006/` для проверки работоспособности\n3. Тесты запускаются все вместе, если необходимо запустить конкретный - пометьте .only интересующую fixture или test\n4. Запустите `test:testcafe:local`\n5. Любое изменение кода выбранного файла с тестами перезапустит их выполнение\n6. При написании тестов можно использовать типы из пакета. Но перед пушем типы пропсов нужно заменить на `Record<string, unknown>` <br />\n    Импорты констант вида `... from \'../src/components/constants\'` можно использовать без ограничений\n\n### Unit Тестирование\n\n1. Запустите `test:testcafe:local`\n2. Любое изменение кода выбранного файла с тестами перезапустит их выполнение\n3. В меню при запуске можно выбрать соответсвующие настройки watch-режима\n\n## Работа с токенами\n\n### Семантика токенов:\n\nЕсть 3 слоя токенов - базовые, тематические и компонентные (лежат в папках Base, Theme и Components соответсвенно)\n* Базовые - самые основные токены; внутри поделены на токены цветов, шрифтов и анатомии\n* Тематические токены - ссылаются на базовые токены; сущетсвуют в двух модификациях для цветов - Light и Dark\n* Токены компонентов - ссылаются на тематические токены (либо напрямую на базовые, если не требуется темизация каких-либо св-в); поделены покомпонентно\n\n![Tokens Structure](storybook/assets/TokensStructure.jpg)\n\n### Типы токенов\n* Обычные - токены содержат одно св-во и применяются к конкретному св-ву css с помощью функции `simple-var` либо напрямую через css-var, если это простая переменная\n```scss\n.buttonLabel {\n  color: simple-var($theme-variables, "sys", "primary", "on-accent");\n  // или\n  color: $sys-primary-on-accent;\n}\n```\n* Композитные (composite, typography, border) - токен внутри содержит несколько св-в css - их нужно применять внутри класса с помощью миксина `composite-var`\n```scss\n.buttonLabel {\n  @include composite-var($theme-variables, "sans", "label", "size-s");\n  // или\n  @include composite-var($sans-label-size-s);\n}\n```\n* Случаи-исключения:\n    * Токен для св-ва outline - в фигме для него нет специального типа, поэтому для него используется композитный токен типа border. Соответвенно, для него понадобится свой миксин `outline-var`\n```scss\n.button {\n  &:focus-visible {\n    @include outline-var($container-focused-available-size-s);\n  }\n}\n```\n\n## Связи слоёв токенов\n![Tokens Structure](storybook/assets/TokenScheme.jpg)\n\n1. **Base/Colors (References pallete)**\nБазовые переменные для формирования System palette\nЭто наборы тонов для каждого цвета, где каждый тон имеет порядковый номер. Каждый цвет разложен на 20 тонов от самого тёмного до самого светлого.\nДля единого представления каждым человеком о цвете, они именуются простейшими цветами радуги.\nЛюбые изменения переменных отразятся на System palette\n\n2. **Themes/Color (System palette)**\nНабор семантических стилей, применяется на Components или его элементах напрямую как в фигма, так и коде.  Эти стили не используются в Composition токенах. Включение цвета в Composition токены приведет к порождению большого количества однообразных токенов в которых меняется только цвет, так как при изменении состояния компонента необходимо менять цвет, следовательно возникнет потребность в создании еше одного Composition токена. \nSystem палитра, в отличии от References, обладает меньшим количеством цветов.\nSystem палитра имеет 2 модификации - темная и светлая. Эти модификации наследуют разные тона References палитры, наследие тонов заведомо распределено и переопределяется при переключении модификации.\nЛюбые изменения переменных отразятся на Components.\n\n3. **Base/Fonts**\nНабор базовых переменных для построения стилей типографики - семейство шрифтов, вес шрифта, высота строки, размер шрифта, интервал между буквами, интервал между абзацами, декоратор текста\nЛюбые изменения переменных отразятся на Typography\n\n4. **Themes/Typography**\nНабор семантических стилей типографики, применяются к компоненту напрямую в фигма и коде.Семантика стилей разделена на 5 ролей, для каждой роли задаётся по 3 размера.\nTypography имеет 2 модификации - темная и светлая, возможно переопределение стилей с  модификацией.\nЦвет типографики устанавливается в компоненте из Themes/Color \nЛюбые изменения переменных отразятся на Components\n\n5. **Themes/Effects**\nПеременные для эффектов - тени или размытия\nНабор семантических стилей, применяется на Components или его элементах напрямую как в фигма, так и коде.\nEffects имеет 2 модификации - темная и светлая. Эти модификации могут быть с разными настройками эффектов.\nЛюбые изменения переменных отразятся на Components\n\n6. **Base/Anatomy**\nБазовые переменные для формирования анатомических свойства компонентов  - размеров, отступов, бордеров, скруглений и непрозрачности.\nЛюбые изменения переменных отразятся на Settings\n\n7. **Themes/Settings**\nПеременные, семантически связанные с анатомическими свойствами Components.\nЭто переменные для настройки анатомических свойств компонентов темы. Переменные используются в Composition tokens, это позволяет вносить изменения в анатомию компонента без изменения токена применённого на самом компоненте. Переменные могут иметь математические вычисления, что не допустимо на слое Components.\nПеременные сгруппированы по анатомическим свойствам.\nЛюбые изменения переменных отразятся на Composition token.\n\n    * 7.1 **Themes/Settings**\n      Переменные, семантически связанные с анатомическими свойствами Components.\n      Возможно прямое применение на компоненте как в фигма, так и коде в случаях когда Composition token создает ограничение в реализации компонента в коде. Например, оффсет дроплиста может применяться с одной из 4 его сторон, в зависимости от того, где расположен его триггер. В таком случае не получится задать этот оффсет в каком-то конкретном направлении (а значит, не стоит использовать Composition token).\n      В этом случае не допустимы математические вычисления в токене.\n      Любые изменения переменных отразятся на Components или элементе Components.\n\n8. **Themes/Settings**\nПеременные, семантически связанные с анатомическими свойствами Components.\nВозможно прямое применение на компоненте как в фигма, так и коде в случаях когда Composition token создает ограничение в реализации компонента в коде. Например, оффсет дроплиста может применяться с одной из 4 его сторон, в зависимости от того, где расположен его триггер. В таком случае не получится задать этот оффсет в каком-то конкретном направлении (а значит, не стоит использовать Composition token).\nВ этом случае не допустимы математические вычисления в токене.\nЛюбые изменения переменных отразятся на Components или элементе Components.\n\n9. **Components/Composition tokens**\nПеременные, семантически связанные с Components или набором элементов Components.\nЭти переменные объединяют в себе несколько параметров анатомии компонента, значения переменных зависят от Settings\nПрименяется на Components или его элементах напрямую как в фигма, так и коде.\nНе допустимы математические вычисления в значениях переменных.\nЛюбые изменения переменных отразятся на Components.\n\n### Как использовать токены в компонентах\n\n1. Проверьте, что в uikit подключен пакет `@snack-uikit/figma-tokens` актуальной версии\n2. Создайте файл для компонента (напр., `ButtonFilled.tsx`) и scss-файл для стилей (`styles.module.scss`), который импортится в файл компонента\n3. Подключите файлы с токенами в `styles.module.scss` (тематические, компонентные - какие нужны):\n    * файлы с токенами компонентов по умолчанию уже включают в себя тематические токены\n```scss\n@use \'@snack-uikit/figma-tokens/build/scss/styles-theme-variables\';\n@use \'@snack-uikit/figma-tokens/build/scss/components/styles-tokens-***\';\n```\n4. Соберите стили компонента по макетам в figma, подключая токены через `var`, `simple-var` или `composite-var`\n    * в scss можно также добавлять миксины и различные функции, чтобы убирать дублирование кода, пример:\n```scss\n@use \'@snack-uikit/figma-tokens/build/scss/styles-theme-variables\';\n@use \'@snack-uikit/figma-tokens/build/scss/components/styles-tokens-button-buttonFilled\';\n\n$sizes: s, m, l;\n$variants: label-only, icon-only, label-icon;\n\n@mixin button-anatomy-styles {\n  @each $size in $sizes {\n    &[data-size="#{$size}"] {\n      @each $variant in $variants {\n        &[data-variant="#{$variant}"] {\n          @include styles-theme-variables.composite-var(styles-tokens-button-buttonFilled.$button-filled, \'container\', $size, $variant);\n        }\n      }\n    }\n  }\n}\n\n.button {\n  @include button-anatomy-styles;\n}\n```\n5. Подключите scss-файл в компонент в виде объекта с именами CSS-классов, и далее используйте следующим образом:\n\n```tsx\nimport styles from \'./styles.module.scss\';\n\nexport type ButtonFilledProps = {\n  label?: string;\n  size?: Size;\n  variant?: Variant;\n  disabled?: boolean;\n  loading?: boolean;\n};\n\nexport const ButtonFilled = ({ label, size, variant, disabled, loading }: ButtonFilledProps) => {\n  return (\n    <button\n      className={styles.button}\n      data-size={size}\n      data-variant={variant}\n      data-disabled={disabled || undefined}\n      data-loading={loading || undefined}\n    >\n      <label className={styles.label}>{label}</label>\n    </button>\n  );\n};\n\n```\n\n## Документация\n\nВ репозитории настроена автоматическая документация компонентов. Решение опирается на пакет [react-docgen](https://react-docgen.dev/).\nВы можете запустить генерацию документации скриптом `npm run docgen`.\nДля описания пропсов компонентов используется синтаксис [JSDoc](https://jsdoc.app/).\n\nГенерируемая документация представляет из себя таблицу с колонками:\n - `name` - название пропсы, для обязательных пропсов используется нотация с символом `*`, например `position*`.\n - `type` - тип пропсы. Выводится автоматически, но может быть переопределена директивой `@type`.\n - `default` - значение по умолчанию. Выводится автоматически, но не всегда. Может быть определена директивой `@default`.\n - `description` - описание пропсы. Если тип пропсов строится через union, то описания полей склеиваются.\n\nПример описания пропсов компонента:\n\n```tsx\nexport type AlertProps = {\n  /**\n   * Заголовок уведомления\n   */\n  title: string;\n  /**\n   * Позиция уведомления\n   * @default Position.Top\n   */\n  position: Position;\n}\n```\n\n### README.md\n\nФайлы README.md содержат как автогенерируемую информацию, так и вводимую вручную.\nАвтогенерируемая часть находится между специальными отметками:\n```text\n[//]: DOCUMENTATION_SECTION_START\n[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT\n```\n```text\n[//]: DOCUMENTATION_SECTION_END\n```\n\n> ### **Не редактируйте вручную все что находится между ними!**\n\n### Экспортируемые компоненты\n\nПо умолчанию механизм автодокументации рассматривает экспортируемые сущности как React-компоненты.\nЕсли из пакета экспортируются функции, таковыми не являющиеся,\nдля корректной документации они должны быть помечены директивой `@function`.\n\nПример:\n```tsx\n/**\n * Хук реализует обратный отсчет до указанного времени\n * @function hook\n */\nexport function useCountdown(time: number): string {\n  // ...\n}\n```\n\nНекоторые пакеты экспортируют компоненты как поля других компонентов, обозначая связь их использования.\n\nПример:\n```tsx\n<Tabs.TabBar>\n  <Tabs.Tab {...tab1props} />\n  <Tabs.Tab {...tab2props} />\n  <Tabs.Tab {...tab3props} />\n</Tabs.TabBar>\n```\n\nДля корректной генерации документации по таким компонентам следует экспортировать их через `namespace`:\n\nПример:\n```tsx\nexport function Tabs(props) {/* ... */}\n\nexport namespace Tabs {\n  export const Tab = TabComponent;\n  export const TabBar = TabBarComponent;\n}\n```\n\n### Pre-commit\n\nГенерация документации запускается на пре-коммите. Если в `git stage` присутствуют файлы какого-либо пакета,\nто на пре-коммите для этого пакета будет запущена генерация документации и файл `README.md` также будет добавлен в коммит.\n\n',darkMode:isDark}})}]}),contributionGuide=(cov_1c7vvfwlsm().s[3]++,{})}}]);