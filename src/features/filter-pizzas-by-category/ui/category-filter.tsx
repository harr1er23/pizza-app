"use client";

import React from "react";
import { buttonVariants } from "@shared/ui";
import { pizzaCategories, pizzaCategoryLabels } from "@entities/pizza";
import type { PizzaCategory } from "@entities/pizza";
import Link from "next/link";
import { cn } from "@shared/lib/utils";

export function CategoryFilter() {
  const [active, setActive] = React.useState<PizzaCategory>("pizza");

  return (
    <div className="flex gap-2">
      {pizzaCategories.map((category) => (
        <Link
          key={category}
          href={`#category-${category}`}
          onClick={() => setActive(category)}
          className={cn(
            buttonVariants({
              variant: active === category ? "default" : "secondary",
            }),
            "rounded-full",
          )}
        >
          {pizzaCategoryLabels[category]}
        </Link>
      ))}
    </div>
  );
}
