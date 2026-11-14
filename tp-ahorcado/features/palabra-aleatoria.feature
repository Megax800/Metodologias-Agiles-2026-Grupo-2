# language: es
@HU-08
Característica: Iniciar una partida con una palabra aleatoria

Como jugador
quiero que la palabra se elija al azar
para que cada partida sea distinta

  @CA-08
  Escenario: El jugador inicia una partida con una palabra seleccionada aleatoriamente
    Dado que el jugador ingresa al juego
    Cuando presiona el botón "Jugar"
    Entonces debe ver todos los casilleros ocultos
    Y la palabra seleccionada debe pertenecer a la lista disponible