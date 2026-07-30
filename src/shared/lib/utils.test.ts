import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("объединяет обычные классы", () => {
    expect(cn("flex", "items-center")).toBe("flex items-center");
  });

  it("отбрасывает falsy-значения", () => {
    expect(cn("flex", false && "hidden", undefined, "gap-2")).toBe(
      "flex gap-2",
    );
  });

  it("разруливает конфликтующие Tailwind-классы — побеждает последний", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });
});
