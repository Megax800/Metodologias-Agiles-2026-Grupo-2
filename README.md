# Ahorcado con ATDD — Metodologías Ágiles de Desarrollo de Software 2026 (Grupo 2)

Implementación del juego del Ahorcado siguiendo **ATDD con doble loop**: cada historia nace de un acceptance test (Cucumber/Gherkin contra la app real en el navegador) y baja a unit tests sobre el dominio, siempre con el rojo antes que el verde.

## Enlaces

| Qué                                               | Dónde                                                                                 |
| ------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Juego en línea (GitHub Pages)                     | https://megax800.github.io/Metodologias-Agiles-2026-Grupo-2/                          |
| Story Map / tablero (Miro)                        | https://miro.com/app/board/uXjVEOatJuI=/?share_link_id=611125841587                   |
| Calidad de código (SonarCloud)                    | https://sonarcloud.io/project/overview?id=Metodologias-Agiles-2026-Grupo-2            |
| Pipeline de integración continua (GitHub Actions) | https://github.com/Megax800/Metodologias-Agiles-2026-Grupo-2/actions/runs/43531872883 |
| Trazabilidad HU → CA → escenario → UT             | [`tp-ahorcado/NOTES.md`](tp-ahorcado/NOTES.md)                                        |

## Qué hace el juego

- Elegís la dificultad (fácil, media o difícil), que define las vidas y el largo de la palabra.
- Adivinás letras escribiéndolas en el campo de texto (Enter) o con el **teclado en pantalla** (27 letras, con Ñ).
- Una letra repetida o un carácter que no es letra no te quita vidas.
- Ganás al descubrir todas las letras y perdés al quedarte sin vidas (se revela la palabra). Al terminar se bloquea la entrada y podés **jugar de nuevo** sin recargar la página.

## Historias de usuario

| HU    | Historia                                                            | Feature                      |
| ----- | ------------------------------------------------------------------- | ---------------------------- |
| HU-01 | Ver la palabra oculta como casilleros                               | `iniciar-partida.feature`    |
| HU-02 | Que una letra acertada se revele en todas sus posiciones            | `acertar-letra.feature`      |
| HU-03 | Perder una vida al ingresar una letra incorrecta                    | `fallar-letra.feature`       |
| HU-04 | Que la partida termine en victoria al descubrir todas las letras    | `ganar-partida.feature`      |
| HU-05 | Que la partida termine al quedarme sin vidas                        | `perder-partida.feature`     |
| HU-06 | Que el juego me avise si ya ingresé una letra                       | `letra-repetida.feature`     |
| HU-07 | Que solo se acepten letras y no se pueda seguir ingresando al ganar | `entrada-invalida.feature`   |
| HU-08 | Que la palabra se elija al azar                                     | `palabra-aleatoria.feature`  |
| HU-09 | Elegir dificultad fácil, media o difícil                            | `niveles-dificultad.feature` |
| HU-10 | Reiniciar la partida al terminar                                    | `jugar-de-nuevo.feature`     |
| HU-11 | Adivinar letras con un teclado en pantalla                          | `teclado-pantalla.feature`   |

El detalle de criterios, escenarios y unit tests de cada historia está en [`tp-ahorcado/NOTES.md`](tp-ahorcado/NOTES.md).

## Cómo correrlo

Todo el proyecto vive en `tp-ahorcado/`. Requiere Node.js 22.

```bash
cd tp-ahorcado
npm ci
npx playwright install chromium   # una sola vez, para los acceptance tests

npm run dev              # app en http://localhost:5173
npm test                 # unit tests del dominio (Vitest, modo watch)
npm run test:coverage    # unit tests con cobertura
npm run at               # acceptance tests (Cucumber/Gherkin + Playwright)
npm run build            # build de producción
```

Correr los acceptance tests de una sola historia o criterio:

```bash
npx bddgen && npx playwright test --grep @HU-11
npx bddgen && npx playwright test --grep @CA-11j
```

### Trazabilidad

- `@HU-xx` en cada `Característica` y `@CA-xx` en cada `Escenario` conectan el test con su historia y su criterio.
- El prefijo del commit (`AT-07`, `UT-12`…) conecta el historial con la matriz de `NOTES.md`.
- Una historia está _Done_ cuando todos sus escenarios están verdes.

## Calidad y cobertura

- El pipeline corre los acceptance tests, los unit tests con cobertura, el build y el análisis de SonarCloud con su quality gate. En la rama principal publica además en GitHub Pages.
- El umbral de cobertura (90 %) se mide sobre `src/domain/`, que está al 100 %. La UI no cuenta para la cobertura porque la prueban los acceptance tests contra la app real, no tests en memoria.

## Equipo

- Alan Romero
- Octavio Russmann
