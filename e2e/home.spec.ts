import { test, expect } from "@playwright/test";

test("главная страница открывается и показывает каталог", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Pizza App");
  await expect(page.getByRole("listitem").first()).toBeVisible();
});
