import { beforeEach, describe, expect, it, vi } from "vitest";

describe("Interfaz del ahorcado", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <main>
        <label for="dificultad">Dificultad:</label>
        <select id="dificultad">
          <option value="facil">Fácil</option>
          <option value="medio" selected>Medio</option>
          <option value="dificil">Difícil</option>
        </select>
        <button id="jugar" type="button">Jugar</button>
        <button id="jugar-de-nuevo" type="button" hidden>Jugar de nuevo</button>
        <section id="partida" hidden>
          <span id="vidas">5</span>
          <div id="palabra"></div>
          <input id="letra" type="text" maxlength="1" />
        </section>
      </main>
    `;

    vi.resetModules();
  });

  it("ignora una entrada vacía al presionar Enter", async () => {
    vi.stubGlobal("location", new URL("http://localhost/?word=ESPEJO"));
    await import("../src/ui/main");

    document.getElementById("jugar")!.click();

    const entrada = document.getElementById("letra") as HTMLInputElement;
    entrada.value = "";
    entrada.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));

    expect(document.getElementById("vidas")!.textContent).toBe("5");
  });

  it("muestra un casillero por cada letra al iniciar", async () => {
    vi.stubGlobal("location", new URL("http://localhost/?word=ESPEJO"));

    await import("../src/ui/main");

    document.getElementById("jugar")!.click();

    expect(document.querySelectorAll(".casillero")).toHaveLength(6);
    expect(document.getElementById("partida")!.hidden).toBe(false);
  });

  it("actualiza la palabra y las vidas al ingresar una letra", async () => {
    vi.stubGlobal("location", new URL("http://localhost/?word=ESPEJO"));

    await import("../src/ui/main");

    document.getElementById("jugar")!.click();

    const entrada = document.getElementById("letra") as HTMLInputElement;
    entrada.value = "Z";
    entrada.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));

    expect(document.getElementById("vidas")!.textContent).toBe("4");
  });

  it("ignora las teclas que no son Enter", async () => {
    vi.stubGlobal("location", new URL("http://localhost/?word=ESPEJO"));
    await import("../src/ui/main");

    document.getElementById("jugar")!.click();

    const entrada = document.getElementById("letra") as HTMLInputElement;
    entrada.value = "Z";
    entrada.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));

    expect(document.getElementById("vidas")!.textContent).toBe("5");
  });

  it("lanza un error si faltan elementos necesarios del HTML", async () => {
    document.body.innerHTML = "";

    await expect(import("../src/ui/main")).rejects.toThrow(
      "Faltan elementos necesarios para inicializar el juego",
    );
  });

  it("ignora Enter si todavía no se inició una partida", async () => {
    vi.stubGlobal("location", new URL("http://localhost/"));
    await import("../src/ui/main");

    const entrada = document.getElementById("letra") as HTMLInputElement;
    entrada.value = "E";
    entrada.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));

    expect(document.getElementById("vidas")!.textContent).toBe("5");
    expect(document.querySelectorAll(".casillero")).toHaveLength(0);
  });

  it("ignora entradas que no contienen una sola letra", async () => {
    vi.stubGlobal("location", new URL("http://localhost/?word=ESPEJO"));
    await import("../src/ui/main");

    document.getElementById("jugar")!.click();

    const entrada = document.getElementById("letra") as HTMLInputElement;
    entrada.value = "SO";
    entrada.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));

    expect(document.getElementById("vidas")!.textContent).toBe("5");
  });

  it("muestra el mensaje de victoria al descubrir todas las letras", async () => {
    vi.stubGlobal("location", new URL("http://localhost/?word=ESPEJO"));

    await import("../src/ui/main");

    document.getElementById("jugar")!.click();

    const entrada = document.getElementById("letra") as HTMLInputElement;

    for (const letra of ["E", "S", "P", "E", "J", "O"]) {
      entrada.value = letra;
      entrada.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    }

    expect(document.getElementById("mensaje-resultado")?.textContent).toBe(
      "¡Ganaste!",
    );
  });

  it("muestra la derrota y revela la palabra secreta al quedarse sin vidas", async () => {
    vi.stubGlobal("location", new URL("http://localhost/?word=ESPEJO"));
    await import("../src/ui/main");

    document.getElementById("jugar")!.click();

    const entrada = document.getElementById("letra") as HTMLInputElement;

    for (const letra of ["A", "B", "C", "D", "F"]) {
      entrada.value = letra;
      entrada.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    }

    expect(document.getElementById("vidas")!.textContent).toBe("0");
    expect(document.getElementById("mensaje-resultado")?.textContent).toBe(
      "¡Perdiste!",
    );
    expect(document.getElementById("palabra-secreta")?.textContent).toBe(
      "ESPEJO",
    );
    expect(entrada.disabled).toBe(true);
  });

  it("permite iniciar una nueva partida después de perder", async () => {
    vi.stubGlobal("location", new URL("http://localhost/?word=ESPEJO"));
    await import("../src/ui/main");

    document.getElementById("jugar")!.click();

    const entrada = document.getElementById("letra") as HTMLInputElement;

    // Generar también el mensaje de letra repetida.
    entrada.value = "A";
    entrada.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));

    entrada.value = "A";
    entrada.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));

    // Completar los errores hasta perder.
    for (const letra of ["B", "C", "D", "F"]) {
      entrada.value = letra;
      entrada.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    }

    expect(document.getElementById("mensaje-resultado")).not.toBeNull();
    expect(document.getElementById("palabra-secreta")).not.toBeNull();
    expect(document.getElementById("mensaje-repetida")).not.toBeNull();

    document.getElementById("jugar-de-nuevo")!.click();

    expect(document.getElementById("mensaje-resultado")).toBeNull();
    expect(document.getElementById("palabra-secreta")).toBeNull();
    expect(document.getElementById("mensaje-repetida")).toBeNull();

    expect(entrada.disabled).toBe(false);
    expect(entrada.value).toBe("");
    expect(document.getElementById("jugar-de-nuevo")!.hidden).toBe(true);
    expect(document.getElementById("vidas")!.textContent).toBe("5");
    expect(document.querySelectorAll(".casillero").length).toBeGreaterThan(0);
  });

  it("permite iniciar una nueva partida después de ganar", async () => {
    vi.stubGlobal("location", new URL("http://localhost/?word=ESPEJO"));
    await import("../src/ui/main");

    document.getElementById("jugar")!.click();

    const entrada = document.getElementById("letra") as HTMLInputElement;

    for (const letra of ["E", "S", "P", "J", "O"]) {
      entrada.value = letra;
      entrada.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    }

    expect(document.getElementById("mensaje-resultado")?.textContent).toBe(
      "¡Ganaste!",
    );

    document.getElementById("jugar-de-nuevo")!.click();

    expect(document.getElementById("mensaje-resultado")).toBeNull();
    expect(document.getElementById("jugar-de-nuevo")!.hidden).toBe(true);
    expect(entrada.disabled).toBe(false);
    expect(entrada.value).toBe("");
    expect(document.getElementById("vidas")!.textContent).toBe("5");
    expect(document.querySelectorAll(".casillero").length).toBeGreaterThan(0);
  });
});
