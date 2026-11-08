import { PALABRAS } from "./palabras";

type OpcionesPartida = {
  dificultad: "facil" | "medio" | "dificil";
  palabra?: string;
  azar?: () => number;
};

export class Ahorcado {
  private palabra: string;
  private palabraOculta: string[];
  private vidas: number;
  private letrasIngresadas: string[] = [];

  constructor(
    palabra?: string | OpcionesPartida,
    azar: () => number = Math.random,
  ) {
    const opciones =
      typeof palabra === "object" && palabra !== null ? palabra : undefined;

    const palabraFija =
      typeof palabra === "string" ? palabra : opciones?.palabra;

    const fuenteAzar = opciones?.azar ?? azar;

    const palabraSeleccionada =
      palabraFija ?? PALABRAS[Math.floor(fuenteAzar() * PALABRAS.length)];

    this.palabra = palabraSeleccionada.toUpperCase();
    this.palabraOculta = this.palabra.split("").map(() => "_");
    this.vidas = opciones?.dificultad === "facil" ? 6 : 5;
  }

  obtenerPalabraOculta(): string[] {
    return [...this.palabraOculta];
  }

  obtenerVidas(): number {
    return this.vidas;
  }

  adivinarLetra(letra: string): void {
    const letraNormalizada = letra.toUpperCase();
    let acerto = false;

    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letraNormalizada) {
        this.palabraOculta[i] = letraNormalizada;
        acerto = true;
      }
    }

    if (!acerto) {
      this.vidas--;
    }
  }

  haGanado(): boolean {
    return this.palabraOculta.every((letra) => letra !== "_");
  }

  haPerdido(): boolean {
    return this.vidas === 0;
  }

  ingresarLetra(_letra: string): boolean {
    const letraNormalizada = _letra.toUpperCase();

    if (!this.esLetraValida(letraNormalizada)) {
      return false;
    }

    if (this.letrasIngresadas.includes(letraNormalizada)) {
      return true;
    }

    this.letrasIngresadas.push(letraNormalizada);
    this.adivinarLetra(letraNormalizada);

    return false;
  }

  esLetraValida(_letra: string): boolean {
    return /^\p{L}$/u.test(_letra);
  }

  obtenerPalabraCompleta(): string {
    return this.palabra;
  }
}
