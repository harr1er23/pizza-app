"use client";

import { useCartStore } from "@entities/cart";
import { useUserStore } from "@entities/user";
import { Button } from "@shared/ui";
import {
  ChevronDown,
  RotateCcwClockIcon,
  ShoppingBasket,
  UserRound,
} from "lucide-react";

export function HeaderActions() {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const setAuthenticated = useUserStore((state) => state.setAuthenticated);
  const itemCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="flex items-center gap-1 text-sm text-muted-foreground"
      >
        Укажите адрес доставки
        <ChevronDown className="size-4" />
      </button>
      <Button className="border rounded-full w-10 h-10 bg-gray-100 cursor-pointer hover:bg-orange-100">
        <RotateCcwClockIcon className="size-5 text-black" />
      </Button>
      <Button className="border rounded-full w-10 h-10 bg-gray-100 cursor-pointer hover:bg-orange-100">
        <UserRound className="size-5 text-black" />
      </Button>
      <Button
        className="rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 cursor-pointer"
        onClick={() => setAuthenticated(!isAuthenticated)}
      >
        {isAuthenticated ? "Выйти" : "Войти"}
      </Button>

      <Button className="rounded-full gap-2 bg-orange-600 cursor-pointer">
        <ShoppingBasket className="size-4" />
        Корзина
        {itemCount > 0 && <span>{itemCount}</span>}
      </Button>
    </div>
  );
}
