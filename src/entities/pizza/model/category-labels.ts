import type { PizzaCategory } from "./schema";

export const pizzaCategoryLabels: Record<PizzaCategory, string> = {
  pizza: "Пиццы",
  breakfast: "Завтраки",
  wings: "Крылышки",
  milkshake: "Милкшейки",
};

export const pizzaCategories = Object.keys(
  pizzaCategoryLabels,
) as PizzaCategory[];
