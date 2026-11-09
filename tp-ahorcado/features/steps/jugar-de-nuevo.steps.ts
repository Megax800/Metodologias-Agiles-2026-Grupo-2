import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

Then("debe poder ingresar una letra nuevamente", async ({ page }) => {
  await expect(page.locator("#letra")).toBeEnabled();
});

Then("no debe ver el mensaje {string}", async ({ page }, mensaje: string) => {
  await expect(page.getByText(mensaje, { exact: true })).toHaveCount(0);
});

Then("no debe ver la palabra secreta anterior", async ({ page }) => {
  await expect(page.locator("#palabra-secreta")).toHaveCount(0);
});

Then("la página no debe haberse recargado", async ({ page }) => {
  const tipoNavegacion = await page.evaluate(
    () =>
      (
        performance.getEntriesByType(
          "navigation",
        )[0] as PerformanceNavigationTiming
      ).type,
  );

  expect(tipoNavegacion).toBe("navigate");
});
