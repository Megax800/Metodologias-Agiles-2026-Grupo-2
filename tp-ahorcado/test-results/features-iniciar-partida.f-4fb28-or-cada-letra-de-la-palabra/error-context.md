# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\iniciar-partida.feature.spec.js >> Iniciar una partida >> Mostrar un casillero por cada letra de la palabra
- Location: .features-gen\features\iniciar-partida.feature.spec.js:6:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Jugar' })

```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | import { createBdd } from "playwright-bdd";
  3  | 
  4  | const { Given, When, Then } = createBdd();
  5  | 
  6  | Given(
  7  |   "que el jugador inicia una partida con la palabra {string}",
  8  |   async ({ page }, palabra) => {
  9  |     await page.goto(`/?word=${palabra}`);
  10 |   },
  11 | );
  12 | 
  13 | When('presiona el botón "Jugar"', async ({ page }) => {
> 14 |   await page.getByRole("button", { name: "Jugar" }).click();
     |                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  15 | });
  16 | 
  17 | Then("debe ver {int} casilleros vacíos", async ({ page }, cantidad) => {
  18 |   const casilleros = page.locator(".casillero");
  19 | 
  20 |   await expect(casilleros).toHaveCount(cantidad);
  21 | });
  22 | 
```