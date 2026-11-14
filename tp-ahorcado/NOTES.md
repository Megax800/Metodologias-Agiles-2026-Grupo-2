# NOTES — Ahorcado (Grupo 2)

Trazabilidad **Historia de Usuario → Criterio → Escenario (AT) → Unit Tests**.

- Story Map / tablero (Miro): https://miro.com/app/board/uXjVEOatJuI=/?share_link_id=611125841587
- Pipeline (GitHub Actions): https://github.com/Megax800/Metodologias-Agiles-2026-Grupo-2/actions/runs/43531872883
- Calidad (SonarCloud): https://sonarcloud.io/project/overview?id=Metodologias-Agiles-2026-Grupo-2
- Juego en línea: https://megax800.github.io/Metodologias-Agiles-2026-Grupo-2/

## Cómo leer la traza

- **HU-xx** = tag de la `Característica` en `tp-ahorcado/features/*.feature`. La narrativa _Como / quiero / para_ está en el mismo archivo.
- **CA-xx** = tag de cada `Escenario`. Una HU está _Done_ cuando todos sus escenarios están verdes.
- **AT-xx** = prefijo de los commits `RED:` / `GREEN:` de esa historia (AT-07 ↔ HU-07, AT-11 ↔ HU-11).
- **UT-xx** = prefijo de los commits `RED:` / `GREEN:` de los unit tests de `tests/ahorcado.test.ts`.
- Correr una historia: `npx bddgen && npx playwright test --grep @HU-11`. Un criterio: `--grep @CA-11j`.
- Ver el orden test-primero: `git log --oneline --grep "AT-11"`.
- La verdad de "qué historias hay y en qué estado están" vive en este archivo y en los tags de los `.feature`. El Story Map de Miro es el mapa de origen y se actualiza si cambia el alcance.

## Historias

| HU    | Funcionalidad                                                            | Feature                      | Estado |
| ----- | ------------------------------------------------------------------------ | ---------------------------- | ------ |
| HU-01 | ver la palabra oculta como casilleros                                    | `iniciar-partida.feature`    | ✅     |
| HU-02 | que una letra acertada se revele en todas sus posiciones                 | `acertar-letra.feature`      | ✅     |
| HU-03 | perder una vida al ingresar una letra incorrecta                         | `fallar-letra.feature`       | ✅     |
| HU-04 | que la partida termine en victoria al descubrir todas las letras         | `ganar-partida.feature`      | ✅     |
| HU-05 | que la partida termine al quedarme sin vidas                             | `perder-partida.feature`     | ✅     |
| HU-06 | que el juego me avise si ya ingresé una letra y no me quite vidas        | `letra-repetida.feature`     | ✅     |
| HU-07 | que solo se acepten letras y que no se puedan seguir ingresando al ganar | `entrada-invalida.feature`   | ✅     |
| HU-08 | que la palabra se elija al azar                                          | `palabra-aleatoria.feature`  | ✅     |
| HU-09 | elegir dificultad fácil, media o difícil                                 | `niveles-dificultad.feature` | ✅     |
| HU-10 | reiniciar la partida al terminar                                         | `jugar-de-nuevo.feature`     | ✅     |
| HU-11 | adivinar letras con un teclado en pantalla                               | `teclado-pantalla.feature`   | ✅     |

## Matriz criterio → escenario → UTs

| HU    | Criterio | Escenario                                                       | UTs del loop interno |
| ----- | -------- | --------------------------------------------------------------- | -------------------- |
| HU-01 | CA-01    | Mostrar un casillero por cada letra de la palabra               | UT-01                |
| HU-02 | CA-02    | El jugador acierta una letra presente                           | UT-02                |
| HU-03 | CA-03    | El jugador pierde una vida al ingresar una letra incorrecta     | UT-03                |
| HU-04 | CA-04    | El jugador gana al descubrir todas las letras                   | UT-04                |
| HU-05 | CA-05    | El jugador pierde al quedarse sin vidas                         | UT-05, UT-06         |
| HU-06 | CA-06    | El jugador ingresa una letra que ya había ingresado             | UT-07, UT-08         |
| HU-07 | CA-07a   | El jugador ingresa un carácter que no es una letra              | UT-09, UT-10         |
| HU-07 | CA-07b   | El jugador no puede ingresar letras después de ganar            | — (solo UI)          |
| HU-08 | CA-08    | Partida con una palabra seleccionada aleatoriamente             | UT-11, UT-12         |
| HU-09 | CA-09a   | Iniciar una partida en dificultad fácil (6 vidas, 4-5 letras)   | UT-13, UT-16         |
| HU-09 | CA-09b   | Iniciar una partida en dificultad difícil (4 vidas, 8-9 letras) | UT-14, UT-17         |
| HU-09 | CA-09c   | Iniciar una partida en dificultad media (5 vidas, 6-7 letras)   | UT-15                |
| HU-10 | CA-10a   | Nueva partida después de perder                                 | — (solo UI)          |
| HU-10 | CA-10b   | Nueva partida después de ganar                                  | — (solo UI)          |
| HU-11 | CA-11a   | Adivinar una letra con el teclado                               | UT-18, UT-19         |
| HU-11 | CA-11b   | Fallar una letra con el teclado                                 | —                    |
| HU-11 | CA-11c   | Perder usando solo el teclado                                   | —                    |
| HU-11 | CA-11d   | Ganar usando solo el teclado                                    | —                    |
| HU-11 | CA-11e   | Teclado deshabilitado al perder                                 | —                    |
| HU-11 | CA-11f   | Teclado deshabilitado al ganar                                  | —                    |
| HU-11 | CA-11g   | Palabra secreta al perder con el teclado                        | —                    |
| HU-11 | CA-11h   | "Jugar de nuevo" visible al perder con el teclado               | —                    |
| HU-11 | CA-11i   | "Jugar de nuevo" visible al ganar con el teclado                | —                    |
| HU-11 | CA-11j   | "Jugar de nuevo" habilita otra vez el teclado                   | —                    |
| HU-11 | CA-11k   | Teclado deshabilitado al perder usando el input                 | —                    |
| HU-11 | CA-11l   | Teclado deshabilitado al ganar usando el input                  | —                    |
| HU-11 | CA-11m   | Input deshabilitado al perder usando el teclado                 | —                    |
| HU-11 | CA-11n   | Input deshabilitado al ganar usando el teclado                  | —                    |

## Lista de UTs por AT (`tests/ahorcado.test.ts`)

| UT    | Test                                                           | AT que lo pidió |
| ----- | -------------------------------------------------------------- | --------------- |
| UT-01 | debe crear una partida con todas las letras ocultas            | AT-01           |
| UT-02 | debe revelar todas las apariciones de una letra acertada       | AT-02           |
| UT-03 | debe descontar una vida al ingresar una letra incorrecta       | AT-03           |
| UT-04 | devuelve true cuando se descubren todas las letras             | AT-04           |
| UT-05 | devuelve true cuando el jugador se queda sin vidas             | AT-05           |
| UT-06 | devuelve false cuando el jugador todavía tiene vidas           | AT-05           |
| UT-07 | debe indicar cuando una letra ya fue ingresada                 | AT-06           |
| UT-08 | debe distinguir entre letras nuevas y letras repetidas         | AT-06           |
| UT-09 | no descuenta vidas con un carácter que no es una letra         | AT-07           |
| UT-10 | no descuenta vidas con un símbolo                              | AT-07           |
| UT-11 | selecciona una palabra de la lista cuando no se especifica una | AT-08           |
| UT-12 | selecciona una palabra según el valor de azar                  | AT-08           |
| UT-13 | inicia con 6 vidas en dificultad fácil                         | AT-09           |
| UT-14 | inicia con 4 vidas en dificultad difícil                       | AT-09           |
| UT-15 | palabra de 6 a 7 letras en dificultad media                    | AT-09           |
| UT-16 | palabra de 4 a 5 letras en dificultad fácil                    | AT-09           |
| UT-17 | palabra de 8 a 9 letras en dificultad difícil                  | AT-09           |
| UT-18 | una letra acertada ya no está disponible                       | AT-11           |
| UT-19 | una letra que no fue ingresada sigue disponible                | AT-11           |

AT-10 (jugar de nuevo) y los escenarios CA-07b y CA-11b a CA-11n no tienen UTs nuevos: el dominio ya cubría la lógica y el rojo era de la UI.

## Refactors realizados

- `e5b39a6` — el script inline de `index.html` pasó a `src/ui/main.ts`.
- `8e8a642` — `mostrarResultado` extraído de los handlers de la UI.
- `020e543` — `bloquearTeclado` extraído de los handlers de las teclas.
- `d49a870` — `mostrarPalabraSecreta` extraído de los handlers de la UI.

## Decisiones de diseño

- **Teclado de 27 letras** (con Ñ). `esLetraValida` acepta cualquier letra Unicode.
- **Un criterio por comportamiento:** los escenarios con más de un caso se partieron en `CA-07a/b`, `CA-09a/b/c`, `CA-10a/b` y `CA-11a`…`CA-11n` para poder correr cada uno con `--grep`.
- **La UI no decide reglas de juego:** pregunta a `Ahorcado` (`haPerdido`, `haGanado`, `letraDisponible`) y solo muestra el resultado.

## Deuda conocida

- **Refactor pendiente:** en `main.ts`, las ramas de perder y de ganar repiten las mismas acciones en el `keydown` del input y en el click de la tecla (`mostrarResultado`, `mostrarPalabraSecreta`, bloqueo del input y del teclado, botón "Jugar de nuevo"). Se puede extraer a `terminarPartidaPerdida` / `terminarPartidaGanada` sin cambiar ningún resultado. Hacerlo, o justificar por qué no hace falta.
- Una letra escrita en el input no deshabilita su tecla en el teclado.
- `tests/main.test.ts` (11 tests de jsdom): pendiente de definir con el profe si se mantiene.
