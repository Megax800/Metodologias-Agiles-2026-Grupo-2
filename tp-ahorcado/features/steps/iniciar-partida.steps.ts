import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given(
  "que el jugador inicia una partida con la palabra {string}",
  async ({ page }, palabra) => {
    await page.goto(`/?word=${palabra}`);
    await page.getByRole("button", { name: "Jugar" }).click();
  },
);

When("presiona el botón {string}", async ({ page }, texto: string) => {
  await page.getByRole("button", { name: texto }).click();
});

Then("debe ver {int} casilleros vacíos", async ({ page }, cantidad) => {
  const casilleros = page.locator(".casillero");

  await expect(casilleros).toHaveCount(cantidad);
});

Given(
  "que el jugador selecciona la dificultad {string}",
  async ({ page }, dificultad) => {
    await page.goto("/");
    await page.locator("#dificultad").selectOption({ label: dificultad });
  },
);

When("inicia una partida", async ({ page }) => {
  await page.getByRole("button", { name: "Jugar" }).click();
});

Then("debe tener {int} vidas", async ({ page }, vidas) => {
  await expect(page.locator("#vidas")).toHaveText(String(vidas));
});

Then(
  "la palabra seleccionada debe tener entre {int} y {int} letras",
  async ({ page }, minimo, maximo) => {
    const cantidad = await page.locator(".casillero").count();

    expect(cantidad).toBeGreaterThanOrEqual(minimo);
    expect(cantidad).toBeLessThanOrEqual(maximo);
  },
);
