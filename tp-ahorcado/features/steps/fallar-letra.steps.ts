import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When(
  "ingresa la letra incorrecta {string}",
  async ({ page }, letra: string) => {
    const entrada = page.locator("#letra");
    await entrada.fill(letra);
    await entrada.press("Enter");
  },
);

Then("debe tener {int} vidas restantes", async ({ page }, vidas: number) => {
  await expect(page.locator("#vidas")).toHaveText(String(vidas));
});
