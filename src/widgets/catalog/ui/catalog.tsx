"use client";

import {
  pizzaCategories,
  pizzaCategoryLabels,
  usePizzaCatalog,
} from "@entities/pizza";
import { PizzaCard } from "@entities/pizza";
import { CategoryFilter } from "@features/filter-pizzas-by-category";

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
      <CategoryFilter />

      {pizzaCategories.map((category) => {
        const products = data.catalog.filter(
          (product) => product.category === category,
        );

        if (products.length === 0) {
          return null;
        }

        return (
          <section key={category} id={`category-${category}`}>
            <h2 className="mb-4 text-2xl font-bold">
              {pizzaCategoryLabels[category]}
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
