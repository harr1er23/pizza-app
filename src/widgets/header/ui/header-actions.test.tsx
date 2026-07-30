import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useCartStore } from "@entities/cart";
import { renderWithQueryClient } from "@shared/testing/render-with-query-client";
import { HeaderActions } from "./header-actions";

describe("HeaderActions", () => {
  it("показывает «Войти», когда пользователь не авторизован", () => {
    renderWithQueryClient(<HeaderActions />);

    expect(screen.getByText("Войти")).toBeInTheDocument();
  });

  it("клик переключает «Войти» на «Выйти» и обратно", async () => {
    const user = userEvent.setup();
    renderWithQueryClient(<HeaderActions />);

    await user.click(screen.getByText("Войти"));
    expect(screen.getByText("Выйти")).toBeInTheDocument();

    await user.click(screen.getByText("Выйти"));
    expect(screen.getByText("Войти")).toBeInTheDocument();
  });

  it("отображает количество товаров в корзине", () => {
    useCartStore.setState(
      {
        items: [
          { id: "1", productId: "p1", size: "medium", quantity: 2 },
          { id: "2", productId: "p2", size: "large", quantity: 3 },
        ],
      },
      false,
    );

    renderWithQueryClient(<HeaderActions />);

    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
