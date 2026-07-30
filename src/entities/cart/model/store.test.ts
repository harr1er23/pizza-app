import { beforeEach, describe, expect, it } from "vitest";
import { useCartStore } from "./store";

const initialState = useCartStore.getState();

beforeEach(() => {
  useCartStore.setState(initialState, true);
});

describe("useCartStore", () => {
  it("добавляет товар в корзину", () => {
    useCartStore
      .getState()
      .addItem({ productId: "pizza-1", size: "medium", quantity: 1 });

    expect(useCartStore.getState().items).toHaveLength(1);
    expect(useCartStore.getState().items[0]).toMatchObject({
      productId: "pizza-1",
      size: "medium",
      quantity: 1,
    });
  });

  it("одна и та же пицца в разных размерах — две независимые строки", () => {
    useCartStore
      .getState()
      .addItem({ productId: "pizza-1", size: "medium", quantity: 1 });
    useCartStore
      .getState()
      .addItem({ productId: "pizza-1", size: "large", quantity: 1 });

    expect(useCartStore.getState().items).toHaveLength(2);
  });

  it("удаляет товар по id", () => {
    useCartStore
      .getState()
      .addItem({ productId: "pizza-1", size: "medium", quantity: 1 });
    const [item] = useCartStore.getState().items;

    useCartStore.getState().removeItem(item!.id);

    expect(useCartStore.getState().items).toHaveLength(0);
  });

  it("меняет количество только у нужной строки, не затрагивая остальные", () => {
    useCartStore
      .getState()
      .addItem({ productId: "pizza-1", size: "medium", quantity: 1 });
    useCartStore
      .getState()
      .addItem({ productId: "pizza-1", size: "large", quantity: 1 });
    const [medium, large] = useCartStore.getState().items;

    useCartStore.getState().updateQuantity(large!.id, 3);

    expect(
      useCartStore.getState().items.find((i) => i.id === medium!.id)?.quantity,
    ).toBe(1);
    expect(
      useCartStore.getState().items.find((i) => i.id === large!.id)?.quantity,
    ).toBe(3);
  });
});
