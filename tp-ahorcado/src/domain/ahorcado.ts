export class Ahorcado {
  private palabra: string;

  constructor(palabra: string) {
    this.palabra = palabra;
  }

  obtenerPalabraOculta(): string[] {
    return this.palabra.split("").map(() => "_");
  }
}
