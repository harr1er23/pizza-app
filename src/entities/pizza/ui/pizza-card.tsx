import Image from "next/image";
import { Plus } from "lucide-react";
import { API_BASE_URL } from "@shared/api";
import { Badge, Card, CardContent } from "@shared/ui";
import type { PizzaProduct } from "../model/schema";

interface PizzaCardProps {
  product: PizzaProduct;
}

const badges: Array<{ flag: keyof PizzaProduct; label: string }> = [
  { flag: "isHit", label: "Хит" },
  { flag: "isNovelty", label: "Новинка" },
  { flag: "isVegetarian", label: "Вегетарианская" },
];

export function PizzaCard({ product }: PizzaCardProps) {
  const minPrice = product.sizes[0]?.price;
  const activeBadges = badges.filter((badge) => product[badge.flag]);

  return (
    <Card className="border-none shadow-none">
      <CardContent className="flex flex-col gap-3 p-4">
        <div className="relative aspect-square overflow-hidden rounded-4xl">
          <Image
            src={`${API_BASE_URL}${product.img}`}
            alt={product.name}
            fill
            className="object-contain bg-gray-100"
          />
          {activeBadges.length > 0 && (
            <div className="absolute left-2 top-2 flex gap-1 flex-wrap">
              {activeBadges.map((badge) => (
                <Badge
                  key={badge.label}
                  className="rounded-full w-auto bg-orange-600 text-white"
                >
                  {badge.label}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <p className="text-lg font-bold">{product.name}</p>

        <button
          type="button"
          className="flex items-center bg-gray-100 justify-between rounded-full cursor-pointer px-4 py-4"
        >
          <span className="text-xl text-black font-semibold">
            {minPrice !== undefined ? `от ${minPrice} ₽` : "Цена по запросу"}
          </span>
          <Plus className="size-6" />
        </button>
      </CardContent>
    </Card>
  );
}
