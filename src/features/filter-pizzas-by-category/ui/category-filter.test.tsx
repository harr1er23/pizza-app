import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CategoryFilter } from "./category-filter";

describe("CategoryFilter", () => {
  it("по умолчанию активна пилюля «Пиццы»", () => {
    render(<CategoryFilter />);

    expect(screen.getByText("Пиццы")).toHaveClass("bg-primary");
  });

  it("клик по пилюле делает её активной, а предыдущую — нет", async () => {
    const user = userEvent.setup();
    render(<CategoryFilter />);

    await user.click(screen.getByText("Завтраки"));

    expect(screen.getByText("Завтраки")).toHaveClass("bg-primary");
    expect(screen.getByText("Пиццы")).not.toHaveClass("bg-primary");
  });

  it("у каждой пилюли есть якорная ссылка на соответствующую секцию", () => {
    render(<CategoryFilter />);

    expect(screen.getByText("Крылышки")).toHaveAttribute(
      "href",
      "#category-wings",
    );
  });
});
