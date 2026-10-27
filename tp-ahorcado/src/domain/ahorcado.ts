export class Ahorcado {
  private palabra: string;
  private palabraOculta: string[];
  private vidas: number;

  constructor(palabra: string) {
    this.palabra = palabra.toUpperCase();
    this.palabraOculta = this.palabra.split("").map(() => "_");
    this.vidas = 5;
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
}
