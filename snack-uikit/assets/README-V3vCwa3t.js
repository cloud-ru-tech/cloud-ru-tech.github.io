const s=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.1.10 (2025-09-01)

### Only dependencies have been changed
* [@snack-uikit/utils@4.0.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.1.9 (2025-07-16)

### Only dependencies have been changed
* [@snack-uikit/utils@3.10.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.1.8 (2025-07-15)

### Only dependencies have been changed
* [@snack-uikit/utils@3.10.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.1.7 (2025-07-07)

### Only dependencies have been changed
* [@snack-uikit/utils@3.9.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.1.6 (2025-05-16)

### Only dependencies have been changed
* [@snack-uikit/utils@3.8.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.1.5 (2025-03-17)

### Only dependencies have been changed
* [@snack-uikit/utils@3.8.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.1.4 (2025-03-04)

### Only dependencies have been changed
* [@snack-uikit/utils@3.8.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.1.3 (2025-01-23)

### Only dependencies have been changed
* [@snack-uikit/utils@3.7.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.1.2 (2024-12-12)

### Only dependencies have been changed
* [@snack-uikit/utils@3.6.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.1.1 (2024-11-14)


### Dependencies

* **FF-5678:** up deps classnames/uncontrollable ([8f0d645](https://github.com/cloud-ru-tech/snack-uikit/commit/8f0d645fc7eb8eaf95660cd0ae7d4b550821059b))





# 0.1.0 (2024-11-12)


### BREAKING CHANGES


* **PDS-856:** move ProgressBar and ProgressBarPage from Loader to ProgressBar ([daafed3](https://github.com/cloud-ru-tech/snack-uikit/commit/daafed3f65ee40e08daff7365ffff434f26b7aa7))




## CHANGELOG

### v0.0.0

- Initial version
`,n="@snack-uikit/progress-bar",e="0.1.10",a={name:n,version:e},i=`# Progress Bar

## Installation

\`npm i @snack-uikit/progress-bar\`

[Changelog](./CHANGELOG.md)

## Description

- Пакет \`@snack-uikit/progress-bar\` предоставляет компоненты для визуализации прогресса выполнения операций: статический индикатор прогресса (\`ProgressBar\`) и автоматический индикатор загрузки страницы (\`ProgressBarPage\`).
- Компоненты помогают пользователю понимать состояние длительных операций и время ожидания, поддерживают различные визуальные варианты оформления и размеры.
- \`ProgressBar\` используется для отображения известного процента выполнения операции, а \`ProgressBarPage\` — для автоматической индикации загрузки страницы или перехода между страницами с плавной анимацией прогресса.

## ProgressBar

### Description

- \`ProgressBar\` — компонент для отображения статического индикатора прогресса с заданным процентом выполнения от 0 до 100.
- Поддерживает **два размера** (\`xs\`, \`s\`) для адаптации под разные контексты использования.
- Позволяет выбрать **внешний вид** через проп \`appearance\` (neutral, primary, red, orange, yellow, green, blue, violet, pink) для визуального соответствия статусу операции или цветовой схеме интерфейса.
- Автоматически ограничивает значение прогресса диапазоном от 0 до 100, обеспечивая корректное отображение даже при некорректных входных данных.
- Figma: [\`Progress Bar\`](https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=2%3A2&mode=design).

### Example

\`\`\`tsx
import { ProgressBar } from '@snack-uikit/progress-bar';

function Example() {
  return (
    <ProgressBar
      progress={75}
      size="s"
      appearance="primary"
    />
  );
}
\`\`\`

## ProgressBarPage

### Description

- \`ProgressBarPage\` — компонент для автоматической индикации загрузки страницы или перехода между страницами, отображаемый в верхней части экрана.
- Использует библиотеку \`@tanem/react-nprogress\` для **автоматического управления прогрессом** с плавной анимацией и постепенным увеличением значения.
- Поддерживает **настройку скорости анимации** (\`animationDuration\`) и **интервала между обновлениями прогресса** (\`incrementDuration\`) для тонкой настройки поведения.
- Позволяет задать **минимальное значение прогресса** (\`minimum\` от 0 до 1), чтобы индикатор не начинался с нуля и сразу показывал видимый прогресс.
- Автоматически скрывается после завершения загрузки (\`isFinished\`), не требуя ручного управления видимостью.
- Figma: [\`Progress Bar Page\`](https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=2%3A2&mode=design).

### Example

\`\`\`tsx
import { ProgressBarPage } from '@snack-uikit/progress-bar';

function Example() {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <>
      <ProgressBarPage
        inProgress={isLoading}
        animationDuration={200}
        incrementDuration={800}
        minimum={0.08}
      />
      {/* Остальной контент страницы */}
    </>
  );
}
\`\`\`

[//]: DOCUMENTATION_SECTION_START
[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT
## ProgressBar
Компонент индикатор загрузки
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| size* | enum ValueOf<{ readonly S: "s"; readonly XS: "xs"; }>: \`"s"\`, \`"xs"\` | - | Размер |
| progress* | \`number\` | - | Процент загрузки от 0 до 100 |
| appearance | enum Appearance: \`"neutral"\`, \`"primary"\`, \`"red"\`, \`"orange"\`, \`"yellow"\`, \`"green"\`, \`"blue"\`, \`"violet"\`, \`"pink"\` | primary | Внешний вид |
| className | \`string\` | - | CSS-класс |
## ProgressBarPage
Компонент индикатор загрузки страницы
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| inProgress* | \`boolean\` | - | Включен/выключен |
| animationDuration | \`number\` | 200 | Скорость анимации |
| incrementDuration | \`number\` | 800 | Время между прогрессом |
| minimum | \`number\` | - | Минимальное значение прогресс бара от 0 до 1 |
| className | \`string\` | - | CSS-класс |


[//]: DOCUMENTATION_SECTION_END
`;export{i as a,s as b,a as c};
