#language: es
@HU-04
Característica: Ganar una partida

@CA-04
  Escenario: El jugador gana al descubrir todas las letras
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando presiona el botón "Jugar"
    Y el jugador adivina la letra "E"
    Y el jugador adivina la letra "S"
    Y el jugador adivina la letra "P"
    Y el jugador adivina la letra "J"
    Y el jugador adivina la letra "O"
    Entonces debe ver el mensaje "¡Ganaste!"