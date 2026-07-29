# ADR-0001: Совмещение Next.js App Router и FSD-слоя `app`

## Статус

Принято

## Контекст

Feature-Sliced Design определяет слой `app` (глобальные провайдеры, стили, точка входа) и слой `pages` (композиция страниц). Next.js App Router использует папку `app/` для файловой маршрутизации, что физически конфликтует по имени со слоем FSD `app`. Слой FSD `pages` тоже конфликтует по смыслу с историческим Pages Router Next.js.

Next.js в этом проекте — версия 16.2.12 с нестандартным поведением (см. `AGENTS.md`), поэтому решения сверяются с `node_modules/next/dist/docs/`, а не с общими знаниями о Next.js.

## Решение

- `src/app/` используется одновременно как файловый роутер Next.js **и** как FSD-слой `app`. Провайдеры и точка входа (`src/app/providers/`) физически лежат внутри `src/app/`, но логически — это FSD-слой `app`.
- FSD-слой `pages` переименован в **`views`**, чтобы не путать с исторической папкой `pages/` (Pages Router) и явно отличать его от `src/app/`.
- Файлы `src/app/**/page.tsx` и `layout.tsx` остаются тонкими: только композиция из `views`/`widgets`, без бизнес-логики, `useState`, запросов.
- Провайдеры, требующие React Context (например, `QueryClientProvider`), выносятся в отдельный `'use client'`-файл (`src/app/providers/index.tsx`), а не в `layout.tsx` — потому что `layout.tsx` должен оставаться Server Component для экспорта `metadata`, а `'use client'` и `export const metadata` несовместимы в одном файле.

## Последствия

- Слои проекта: `app` (= `src/app/`, роутинг + провайдеры), `views`, `widgets`, `features`, `entities`, `shared`.
- В коде, ревью и тикетах используем термин `views`, не `pages`, при описании слоя композиции страниц.
- Разработчики, знакомые с классическим FSD, должны знать про переименование `pages` → `views` — задокументировано в `CONTEXT.md`.
