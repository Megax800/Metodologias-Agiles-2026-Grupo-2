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
  it("devuelve true cuando el jugador se queda sin vidas", () => {
    const juego = new Ahorcado("ESPEJO");

    juego.adivinarLetra("A");
    juego.adivinarLetra("B");
    juego.adivinarLetra("C");
    juego.adivinarLetra("D");
    juego.adivinarLetra("F");

    expect(juego.haPerdido()).toBe(true);
  });
  it("devuelve false cuando el jugador todavía tiene vidas", () => {
    const juego = new Ahorcado("ESPEJO");

    juego.adivinarLetra("A");
    juego.adivinarLetra("B");
    juego.adivinarLetra("C");
    juego.adivinarLetra("D");

    expect(juego.haPerdido()).toBe(false);
  });
  it("debe indicar cuando una letra ya fue ingresada", () => {
    const juego = new Ahorcado("ESPEJO");

    juego.ingresarLetra("E");

    expect(juego.ingresarLetra("E")).toBe(true);
  });
});
