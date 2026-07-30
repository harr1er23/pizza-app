import { http, HttpResponse } from "msw";
import type { GetPizzaCatalogResponse } from "../model/schema";

const mockCatalogResponse: GetPizzaCatalogResponse = {
  success: true,
  catalog: [
    {
      _id: "6a69d8d1532cdc5d84d8ebfb",
      category: "pizza",
      name: "Джуни пицца",
      description:
        "Джуни пицца с пепперони, колбасой, зеленым перцем, луком, оливками и шампиньонами.",
      img: "/static/images/pizza/dzhuni_picca.webp",
      sizes: [
        { type: "small", price: 499, volume: 25 },
        { type: "medium", price: 799, volume: 30 },
        { type: "large", price: 1149, volume: 35 },
      ],
      options: [
        { type: "crust_thin", price: 0 },
        { type: "crust_thick", price: 50 },
        { type: "crust_cheese", price: 120 },
      ],
      ingredients: [
        {
          type: "mozzarella",
          price: 70,
          img: "/static/images/ingredient/mozzarella.png",
        },
      ],
      calories: 320,
      protein: "18г",
      totalFat: "15г",
      carbohydrates: "28г",
      sodium: "860мг",
      allergens: ["молоко", "пшеница", "соевые бобы"],
      isVegetarian: false,
      isGlutenFree: false,
      isNovelty: false,
      isHit: true,
    },
  ],
};

export const pizzaCatalogSuccessHandler = http.get("*/pizzas/catalog", () => {
  return HttpResponse.json(mockCatalogResponse);
});

export const pizzaCatalogErrorHandler = http.get("*/pizzas/catalog", () => {
  return HttpResponse.json(
    { success: false, reason: "Internal Server Error" },
    { status: 500 },
  );
});
