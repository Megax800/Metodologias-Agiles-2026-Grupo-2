import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When(
  "presiona la tecla {string} del teclado en pantalla",
  async ({ page }, letra: string) => {
    await page
      .getByRole("group", { name: "Teclado" })
      .getByRole("button", { name: letra, exact: true })
      .click();
  },
);

Then(
  "la tecla {string} del teclado en pantalla está deshabilitada",
  async ({ page }, letra: string) => {
    await expect(
      page
        .getByRole("group", { name: "Teclado" })
        .getByRole("button", { name: letra, exact: true }),
    ).toBeDisabled();
  },
);

Then(
  "la tecla {string} del teclado en pantalla está habilitada",
  async ({ page }, letra: string) => {
    await expect(
      page
        .getByRole("group", { name: "Teclado" })
        .getByRole("button", { name: letra, exact: true }),
    ).toBeEnabled();
  },
);
