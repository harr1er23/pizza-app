import * as z from "zod";

export const pizzaCategorySchema = z.enum([
  "pizza",
  "breakfast",
  "wings",
  "milkshake",
]);

export const pizzaSizeSchema = z.enum(["small", "medium", "large"]);

export const pizzaItemSizeSchema = z.object({
  type: pizzaSizeSchema,
  price: z.number(),
  volume: z.number().optional(),
});

export const pizzaOptionTypeSchema = z.enum([
  "crust_thin",
  "crust_thick",
  "crust_cheese",
  "cream_with",
  "cream_without",
]);

export const pizzaOptionSchema = z.object({
  type: pizzaOptionTypeSchema,
  price: z.number(),
});

export const pizzaIngredientTypeSchema = z.enum([
  "pineapple",
  "mozzarella",
  "pepperoni",
  "green_pepper",
  "mushrooms",
  "basil",
  "cheddar",
  "parmesan",
  "feta",
  "ham",
  "pickle",
  "tomato",
  "bacon",
  "onion",
  "chile",
  "shrimp",
  "chicken_fillet",
  "meatballs",
]);

export const pizzaIngredientSchema = z.object({
  type: pizzaIngredientTypeSchema,
  price: z.number(),
  img: z.string(),
});

export const pizzaProductSchema = z.object({
  _id: z.string(),
  category: pizzaCategorySchema,
  name: z.string(),
  description: z.string(),
  img: z.string(),
  sizes: z.array(pizzaItemSizeSchema),
  options: z.array(pizzaOptionSchema).optional(),
  ingredients: z.array(pizzaIngredientSchema).optional(),
  calories: z.number(),
  protein: z.string(),
  totalFat: z.string(),
  carbohydrates: z.string(),
  sodium: z.string(),
  allergens: z.array(z.string()),
  isVegetarian: z.boolean(),
  isGlutenFree: z.boolean(),
  isNovelty: z.boolean(),
  isHit: z.boolean(),
});

export const getPizzaCatalogResponseSchema = z.object({
  success: z.boolean(),
  reason: z.string().optional(),
  catalog: z.array(pizzaProductSchema),
});

export type PizzaProduct = z.infer<typeof pizzaProductSchema>;
export type GetPizzaCatalogResponse = z.infer<
  typeof getPizzaCatalogResponseSchema
>;
export type PizzaSize = z.infer<typeof pizzaSizeSchema>;
