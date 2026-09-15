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
});
