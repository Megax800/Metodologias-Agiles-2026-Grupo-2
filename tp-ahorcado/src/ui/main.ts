import { Ahorcado } from "../../src/domain/ahorcado.ts";

const botonJugar = document.getElementById("jugar");
const partida = document.getElementById("partida");
const palabraElemento = document.getElementById("palabra");
const entradaLetra = <HTMLInputElement>document.getElementById("letra");
const vidasElemento = document.getElementById("vidas");

if (
  !botonJugar ||
  !partida ||
  !palabraElemento ||
  !entradaLetra ||
  !vidasElemento
) {
  throw new Error("Faltan elementos necesarios para inicializar el juego");
}

let juego: Ahorcado | null = null;

function mostrarPalabra() {
  palabraElemento?.replaceChildren();

  const letras = juego?.obtenerPalabraOculta() ?? [];

  letras.forEach((letra, indice) => {
    if (indice > 0) {
      palabraElemento?.appendChild(document.createTextNode(" "));
    }

    const casillero = document.createElement("span");
    casillero.className = "casillero";
    casillero.textContent = letra;

    palabraElemento?.appendChild(casillero);
  });
}

botonJugar.addEventListener("click", () => {
  const parametros = new URLSearchParams(window.location.search);
  const palabra = (parametros.get("word") || "ESPEJO").toUpperCase();

  juego = new Ahorcado(palabra);
  mostrarPalabra();
  partida.hidden = false;
  entradaLetra.value = "";
  entradaLetra.focus();
});

entradaLetra.addEventListener("keydown", (evento) => {
  if (evento.key !== "Enter" || !juego) return;

  const letra = entradaLetra.value.trim();

  if (letra.length !== 1) return;

  juego.adivinarLetra(letra);
  vidasElemento.textContent = String(juego.obtenerVidas());
  mostrarPalabra();
  entradaLetra.value = "";
});
