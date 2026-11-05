import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, Then } = createBdd();

Given("que el jugador ingresa al juego", async ({ page }) => {
  await page.goto("/");
});

Then("debe ver todos los casilleros ocultos", async ({ page }) => {
  const casilleros = page.locator(".casillero");

  // La partida debe tener al menos un casillero.
  await expect(casilleros).not.toHaveCount(0);

  // Ningún casillero debe mostrar una letra.
  const textos = await casilleros.allTextContents();

  for (const texto of textos) {
    expect(texto).not.toMatch(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/);
  }
});

Then(
  "la palabra seleccionada debe pertenecer a la lista disponible",
  async ({ page }) => {
    await expect(page.locator("#palabra")).toHaveAttribute(
      "data-origen",
      "lista",
    );
  },
);
