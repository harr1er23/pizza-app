"use client";

import { usePizzaCatalog } from "@entities/pizza";
import { PizzaCard } from "@entities/pizza";
import type { PizzaCategory } from "@entities/pizza";

const categoryLabels: Record<PizzaCategory, string> = {
  pizza: "Пиццы",
  breakfast: "Завтраки",
  wings: "Крылышки",
  milkshake: "Милкшейки",
};

const categories = Object.keys(categoryLabels) as PizzaCategory[];

export function Catalog() {
  const { data, isPending, isError, error } = usePizzaCatalog();

  if (isPending) {
    return <p>Загрузка каталога...</p>;
  }

  if (isError) {
    return <p>Ошибка: {error.message}</p>;
  }

  return (
    <div className="flex flex-col gap-10">
      {categories.map((category) => {
        const products = data.catalog.filter(
          (product) => product.category === category,
        );

        if (products.length === 0) {
          return null;
        }

        return (
          <section key={category}>
            <h2 className="mb-4 text-2xl font-bold">
              {categoryLabels[category]}
            </h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <PizzaCard key={product._id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
