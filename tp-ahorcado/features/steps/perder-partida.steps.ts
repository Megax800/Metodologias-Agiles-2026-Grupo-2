import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Then } = createBdd();

Then(
  "debe ver la palabra secreta {string}",
  async ({ page }, palabra: string) => {
    await expect(page.getByText(palabra, { exact: true })).toBeVisible();
  },
);
