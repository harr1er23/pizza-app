# CONTEXT.md

Глоссарий предметной области и архитектурных терминов для pizza-app. См. также `docs/adr/` для решений, `docs/agents/domain.md` для правил использования этого файла агентами.

## Термины

### `views` (не `pages`)

FSD-слой композиции страниц. Переименован из стандартного FSD-термина `pages`, чтобы не конфликтовать по смыслу с исторической папкой `pages/` (Pages Router) Next.js. Не используем `pages`, `screens` как синонимы. См. [ADR-0001](docs/adr/0001-app-router-vs-fsd-app-layer.md).

### `app` (двойное значение)

В этом проекте `src/app/` одновременно:

1. Next.js App Router — файловый роутинг (`page.tsx`, `layout.tsx`).
2. FSD-слой `app` — глобальные провайдеры (`src/app/providers/`), точка входа.

Это осознанное совмещение, не путаница в именовании. См. [ADR-0001](docs/adr/0001-app-router-vs-fsd-app-layer.md).
