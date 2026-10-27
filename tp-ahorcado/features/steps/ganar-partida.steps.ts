import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Then } = createBdd();

Then(
  "debe ver el mensaje {string}",
  async ({ page }, mensaje: string) => {
    await expect(page.getByText(mensaje)).toBeVisible();
  },
);