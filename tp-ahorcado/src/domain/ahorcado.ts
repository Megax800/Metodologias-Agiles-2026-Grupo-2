export class Ahorcado {
  private palabra: string;
  private palabraOculta: string[];

  constructor(palabra: string) {
    this.palabra = palabra.toUpperCase();
    this.palabraOculta = this.palabra.split("").map(() => "_");
  }

  obtenerPalabraOculta(): string[] {
    return [...this.palabraOculta];
  }

  adivinarLetra(letra: string): void {
    const letraNormalizada = letra.toUpperCase();

    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letraNormalizada) {
        this.palabraOculta[i] = letraNormalizada;
      }
    }
  }
}
