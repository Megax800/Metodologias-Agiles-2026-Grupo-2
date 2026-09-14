import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given(
  "que el jugador inicia una partida con la palabra {string}",
  async ({ page }, palabra) => {
    await page.goto(`/?word=${palabra}`);
  },
);

When('presiona el botón "Jugar"', async ({ page }) => {
  await page.getByRole("button", { name: "Jugar" }).click();
});

Then("debe ver {int} casilleros vacíos", async ({ page }, cantidad) => {
  const casilleros = page.locator(".casillero");

  await expect(casilleros).toHaveCount(cantidad);
});
