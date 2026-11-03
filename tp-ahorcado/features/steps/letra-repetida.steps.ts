import { createBdd } from "playwright-bdd";

const { When } = createBdd();

When("ingresa la letra {string}", async ({ page }, letra: string) => {
  const entrada = page.locator("#letra");
  await entrada.fill(letra);
  await entrada.press("Enter");
});

When("vuelve a ingresar la letra {string}", async ({ page }, letra: string) => {
  const entrada = page.locator("#letra");
  await entrada.fill(letra);
  await entrada.press("Enter");
});
