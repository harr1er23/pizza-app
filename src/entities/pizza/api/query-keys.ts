export const pizzaQueryKeys = {
  all: ["pizza"] as const,
  catalog: () => [...pizzaQueryKeys.all, "catalog"] as const,
};
