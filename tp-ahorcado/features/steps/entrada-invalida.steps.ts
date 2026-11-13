import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Then } = createBdd();

Then("no debe poder ingresar una letra", async ({ page }) => {
  await expect(page.locator("#letra")).toBeDisabled();
});
