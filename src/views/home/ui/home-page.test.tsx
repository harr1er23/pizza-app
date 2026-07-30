import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import {
  pizzaCatalogErrorHandler,
  pizzaCatalogSuccessHandler,
} from "@entities/pizza/api/get-catalog.handlers";
import { server } from "@shared/testing/msw-server";
import { renderWithQueryClient } from "@shared/testing/render-with-query-client";
import { HomePage } from "./home-page";

describe("HomePage", () => {
  it("показывает каталог, когда API отвечает успешно", async () => {
    server.use(pizzaCatalogSuccessHandler);

    renderWithQueryClient(<HomePage />);

    expect(screen.getByText("Загрузка каталога...")).toBeInTheDocument();
    expect(await screen.findByText(/Джуни пицца/)).toBeInTheDocument();
  });

  it("показывает ошибку, когда API отвечает 500", async () => {
    server.use(pizzaCatalogErrorHandler);

    renderWithQueryClient(<HomePage />);

    expect(await screen.findByText(/Ошибка/)).toBeInTheDocument();
  });
});
