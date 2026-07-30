import { useQuery } from "@tanstack/react-query";
import { getPizzaCatalog } from "./get-catalog";
import { pizzaQueryKeys } from "./query-keys";

export function usePizzaCatalog() {
  return useQuery({
    queryKey: pizzaQueryKeys.catalog(),
    queryFn: getPizzaCatalog,
  });
}
