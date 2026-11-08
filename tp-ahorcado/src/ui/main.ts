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
let palabraSecreta = "";

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
  const palabra = parametros.get("word");

  palabra
    ? palabraElemento.setAttribute("data-origen", "manual")
    : palabraElemento.setAttribute("data-origen", "lista");

  juego = palabra ? new Ahorcado(palabra.toUpperCase()) : new Ahorcado();

  palabraSecreta = juego.obtenerPalabraCompleta();

  mostrarPalabra();
  partida.hidden = false;
  entradaLetra.value = "";
  entradaLetra.focus();
});

entradaLetra.addEventListener("keydown", (evento) => {
  if (evento.key !== "Enter" || !juego) return;

  const letra = entradaLetra.value.trim();

  if (letra.length !== 1) return;

  const repetida = juego.ingresarLetra(letra);
  if (repetida) {
    let mensaje = document.getElementById("mensaje-repetida");

    if (!mensaje) {
      mensaje = document.createElement("p");
      mensaje.id = "mensaje-repetida";
      partida.appendChild(mensaje);
    }

    mensaje.textContent = "Ya ingresaste esa letra";
    entradaLetra.value = "";
    return;
  }
  vidasElemento.textContent = String(juego.obtenerVidas());
  mostrarPalabra();
  if (juego.haPerdido()) {
    const mensaje = document.createElement("p");
    mensaje.id = "mensaje-resultado";
    mensaje.textContent = "¡Perdiste!";
    partida.appendChild(mensaje);

    const palabraRevelada = document.createElement("p");
    palabraRevelada.id = "palabra-secreta";
    palabraRevelada.textContent = palabraSecreta;
    partida.appendChild(palabraRevelada);

    entradaLetra.disabled = true;
    return;
  }
  if (juego.haGanado()) {
    const mensaje = document.createElement("p");
    mensaje.id = "mensaje-resultado";
    mensaje.textContent = "¡Ganaste!";
    partida.appendChild(mensaje);
  }
  entradaLetra.value = "";
});
