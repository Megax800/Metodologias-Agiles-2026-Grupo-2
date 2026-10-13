import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given(
  "que el jugador tiene una partida iniciada con la palabra {string}",
  async ({ page }, palabra: string) => {
    await page.goto(`/?word=${palabra}`);
    await page.getByRole("button", { name: "Jugar" }).click();
  },
);

When(
  "el jugador adivina la letra {string}",
  async ({ page }, letra: string) => {
    const entrada = page.getByRole("textbox");
    await entrada.fill(letra);
    await entrada.press("Enter");
  },
);

Then("se ve la palabra {string}", async ({ page }, palabraEsperada: string) => {
  await expect(page.getByTestId("word")).toHaveText(palabraEsperada);
});
