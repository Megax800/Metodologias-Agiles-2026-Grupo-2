import { describe, it, expect } from "vitest";
import { Ahorcado } from "../src/domain/ahorcado";

describe("Ahorcado", () => {
  it("debe crear una partida con todas las letras ocultas", () => {
    const juego = new Ahorcado("ESPEJO");

    expect(juego.obtenerPalabraOculta()).toEqual([
      "_",
      "_",
      "_",
      "_",
      "_",
      "_",
    ]);
  });
  it("debe revelar todas las apariciones de una letra acertada", () => {
    const juego = new Ahorcado("ESPEJO");

    juego.adivinarLetra("E");

    expect(juego.obtenerPalabraOculta()).toEqual([
      "E",
      "_",
      "_",
      "E",
      "_",
      "_",
    ]);
  });
  it("debe descontar una vida al ingresar una letra incorrecta", () => {
    const juego = new Ahorcado("ESPEJO");

    juego.adivinarLetra("A");

    expect(juego.obtenerVidas()).toBe(4);
  });
  it("devuelve true cuando se descubren todas las letras", () => {
    const juego = new Ahorcado("ESPEJO");

    juego.adivinarLetra("E");
    juego.adivinarLetra("S");
    juego.adivinarLetra("P");
    juego.adivinarLetra("J");
    juego.adivinarLetra("O");

    expect(juego.haGanado()).toBe(true);
  });
});
