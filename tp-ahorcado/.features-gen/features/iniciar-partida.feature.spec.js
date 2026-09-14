// Generated from: features\iniciar-partida.feature
import { test } from "playwright-bdd";

test.describe('Iniciar una partida', () => {

  test('Mostrar un casillero por cada letra de la palabra', { tag: ['@HU-01', '@CA-01'] }, async ({ Given, When, Then, page }) => { 
    await Given('que el jugador inicia una partida con la palabra "ESPEJO"', null, { page }); 
    await When('presiona el botón "Jugar"', null, { page }); 
    await Then('debe ver 6 casilleros vacíos', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\iniciar-partida.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":9,"tags":["@HU-01","@CA-01"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given que el jugador inicia una partida con la palabra \"ESPEJO\"","stepMatchArguments":[{"group":{"start":49,"value":"\"ESPEJO\"","children":[{"start":50,"value":"ESPEJO","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When presiona el botón \"Jugar\"","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then debe ver 6 casilleros vacíos","stepMatchArguments":[{"group":{"start":9,"value":"6"},"parameterTypeName":"int"}]}]},
]; // bdd-data-end