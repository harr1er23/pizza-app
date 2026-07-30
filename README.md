# 🍕 Pizza App

Пет-проект — сервис доставки пиццы. Цель проекта - построить сайт так, как это делается в профессиональных командах: с чёткой архитектурой, типобезопасностью, линтингом границ и тестами. Задача-максимум — прокачать себя на Next.js/React, а затем двигаться в сторону fullstack.

Данные (каталог пицц, категории, заказы) берутся из реального API: `https://juniorsbootcamp.ru/api`.

## Технологии

### Core

- **[Next.js 16](https://nextjs.org)** (App Router) — роутинг, серверные компоненты по умолчанию
- **React 19**
- **TypeScript 5** в строгом режиме: помимо стандартного `strict: true` включены `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride` — компилятор ловит больше реальных багов, а не только явные ошибки типов

### Архитектура

- **[Feature-Sliced Design (FSD)](https://feature-sliced.design)** — слои `app → views → widgets → features → entities → shared`, импорт разрешён только вниз по иерархии
  - Слой `pages` из канонического FSD переименован в **`views`**, чтобы не путать с исторической папкой `pages/` (Pages Router) в Next.js
  - `src/app/` совмещает роль Next.js App Router (файловый роутинг) и FSD-слоя `app` (глобальные провайдеры) — решение опирающееся на. [ADR-0001](docs/adr/0001-app-router-vs-fsd-app-layer.md)
  - Path aliases под каждый слой: `@app/*`, `@views/*`, `@widgets/*`, `@features/*`, `@entities/*`, `@shared/*`
- **[eslint-plugin-boundaries](https://www.npmjs.com/package/eslint-plugin-boundaries)** — направления импортов между слоями проверяются автоматически при `npm run lint`, а не держатся "на договорённостях"

### Стили и UI

- **[Tailwind CSS v4](https://tailwindcss.com)** — CSS-first конфигурация (без `tailwind.config.js`, всё через `@theme` в `globals.css`)
- **[shadcn/ui](https://ui.shadcn.com)** — компоненты генерируются сразу в `shared/ui`, стиль `default`, база — `stone`

### Данные и серверный стейт

- **[TanStack Query v5](https://tanstack.com/query)** — кэширование, повторные запросы, состояния загрузки/ошибки для серверных данных
- **[Axios](https://axios-http.com)** — единый инстанс (`shared/api`) с interceptor'ом, нормализующим любые ошибки (сеть, HTTP-статус) в один класс `ApiError`
- **[Zod v4](https://zod.dev)** — каждый ответ API валидируется в рантайме через `schema.parse()`, без `as SomeType`

### Качество кода

- **ESLint 9** (flat config) + `eslint-config-next`
- **Prettier** + `eslint-config-prettier` (форматирование не конфликтует с линтером)

## Начало работы

### Установка

```bash
npm install
```

### Переменные окружения

Создай `.env.local` в корне проекта:

```
NEXT_PUBLIC_API_BASE_URL=https://juniorsbootcamp.ru/api
```

### Запуск

```bash
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000).

## Скрипты

| Команда          | Что делает                                  |
| ---------------- | ------------------------------------------- |
| `npm run dev`    | Запуск дев-сервера                          |
| `npm run build`  | Продакшен-сборка                            |
| `npm run start`  | Запуск собранного продакшен-билда           |
| `npm run lint`   | ESLint (включая проверку границ FSD)        |
| `npm run format` | Форматирование всего проекта через Prettier |

## Документация проекта

- [`CONTEXT.md`](CONTEXT.md) — глоссарий терминов проекта
- [`docs/adr/`](docs/adr/) — архитектурные решения (ADR)
- [`docs/design/`](docs/design/) — дизайн-макеты (экспорт из Figma)

## Задачи проекта
