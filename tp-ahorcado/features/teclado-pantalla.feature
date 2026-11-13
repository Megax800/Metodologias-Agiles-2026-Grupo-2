# language: es
@HU-11
Característica: Teclado en pantalla

  @CA-11
  Escenario: El jugador adivina una letra con el teclado en pantalla
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando presiona la tecla "E" del teclado en pantalla
    Entonces se ve la palabra "E _ _ E _ _"
    Y la tecla "E" del teclado en pantalla está deshabilitada

  @CA-11
  Escenario: El jugador falla una letra con el teclado en pantalla
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando presiona la tecla "A" del teclado en pantalla
    Entonces debe tener 4 vidas restantes
    Y la tecla "A" del teclado en pantalla está deshabilitada