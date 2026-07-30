"use client";

import { usePizzaCatalog } from "@entities/pizza";

export function HomePage() {
  const { data, isPending, isError, error } = usePizzaCatalog();

  if (isPending) {
    return <p>Загрузка каталога...</p>;
  }

  if (isError) {
    return <p>Ошибка: {error.message}</p>;
  }

  return (
    <ul>
      {data.catalog.map((pizza) => (
        <li key={pizza._id}>
          {pizza.name} - от {pizza.sizes[0]?.price} ₽
        </li>
      ))}
    </ul>
  );
}
