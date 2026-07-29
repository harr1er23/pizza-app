import { apiClient } from "@shared/api";
import { getPizzaCatalogResponseSchema } from "../model/schema";

export async function getPizzaCatalog() {
  const response = await apiClient.get("/pizzas/catalog");
  return getPizzaCatalogResponseSchema.parse(response.data);
}
