import { describe, it, expect } from "vitest";
import { Ahorcado } from "../src/domain/ahorcado";
import { PALABRAS } from "../src/domain/palabras";

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
  it("debe distinguir entre letras nuevas y letras repetidas", () => {
    const juego = new Ahorcado("ESPEJO");

    expect(juego.ingresarLetra("E")).toBe(false);
    expect(juego.ingresarLetra("S")).toBe(false);
    expect(juego.ingresarLetra("E")).toBe(true);
  });
  it("no debe descontar vidas cuando se ingresa un carácter que no es una letra", () => {
    const juego = new Ahorcado("ESPEJO");

    juego.ingresarLetra("5");

    expect(juego.obtenerVidas()).toBe(5);
  });
  it("no debe descontar vidas cuando se ingresa un símbolo", () => {
    const juego = new Ahorcado("ESPEJO");

    juego.ingresarLetra("@");

    expect(juego.obtenerVidas()).toBe(5);
  });
  it("debe seleccionar una palabra de la lista cuando no se especifica una", () => {
    const juego = new Ahorcado();

    expect(PALABRAS).toContain(juego.obtenerPalabraCompleta());
  });
  it("debe seleccionar una palabra según el valor de azar", () => {
    const juego = new Ahorcado(undefined, () => 0.99);

    expect(juego.obtenerPalabraCompleta()).toBe("ESCUELA");
  });
  it("inicia con 6 vidas en dificultad fácil", () => {
    const juego = new Ahorcado({
      dificultad: "facil",
      palabra: "GATO",
    });

    expect(juego.obtenerVidas()).toBe(6);
  });
  it("inicia con 4 vidas en dificultad difícil", () => {
    const juego = new Ahorcado({
      dificultad: "dificil",
      palabra: "ELEFANTES",
    });

    expect(juego.obtenerVidas()).toBe(4);
  });
  it("selecciona una palabra de entre 6 y 7 letras en dificultad media", () => {
    const juego = new Ahorcado({
      dificultad: "medio",
      azar: () => 0,
    });

    const cantidad = juego.obtenerPalabraCompleta().length;

    expect(cantidad).toBeGreaterThanOrEqual(6);
    expect(cantidad).toBeLessThanOrEqual(7);
  });
  it("selecciona una palabra de entre 4 y 5 letras en dificultad fácil", () => {
    const juego = new Ahorcado({
      dificultad: "facil",
      azar: () => 0.5,
    });

    const cantidad = juego.obtenerPalabraCompleta().length;

    expect(cantidad).toBeGreaterThanOrEqual(4);
    expect(cantidad).toBeLessThanOrEqual(5);
  });
  it("selecciona una palabra de entre 8 y 9 letras en dificultad difícil", () => {
    const juego = new Ahorcado({
      dificultad: "dificil",
      azar: () => 0,
    });

    const cantidad = juego.obtenerPalabraCompleta().length;

    expect(cantidad).toBeGreaterThanOrEqual(8);
    expect(cantidad).toBeLessThanOrEqual(9);
  });
});
